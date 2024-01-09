import React, { useState, useEffect } from 'react'
import createPlugin, { ManifestLike, ExtismPluginOptions, Plugin } from '@extism/extism'

/**
 * Return value of `useFunction`
 */
export type UseFunctionReturn = {
    /**
     * The output of the function call
     */
    output: ArrayBuffer | undefined
    /**
     * true while the function is being called
     */
    loading: boolean
}

/**
 * Return value of `usePlugin`
 */
export type UsePluginReturn = {
    /**
     * The Extism plugin 
     */
    plugin: Plugin | null,
    /**
     * true while the plugin is loading
     */
    loading: boolean,
    /**
     * A convenience hook to be used after `usePlugin` has been called
     * @param functionName - The name of the plugin function to call
     * @param input - The input to pass into a plugin function
     * @returns {@link UseFunctionReturn}
     */
    useFunction: (functionName: string, input: Uint8Array) => UseFunctionReturn,
}

/**
 * The `usePlugin` hook initializes an Extism plugin within a functional React component 
 * @param manifest {@link ManifestLike} to specify how to get the Wasm for the plugin.
 * @param options {@link ExtismPluginOptions} to configure how to initialize the plugin. See https://extism.github.io/js-sdk/classes/browser.ExtismPluginOptions.html
 * @returns {@link UsePluginReturn}
 */
export const usePlugin = (manifest: ManifestLike, options?: ExtismPluginOptions): UsePluginReturn => {
    const [plugin, setPlugin] = useState<Plugin | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        createPlugin(manifest, options)
            .then((p) => {
                setPlugin(p)
            })
            .catch((e) => console.error(e))
            .finally(() => setLoading(false))
    }, [manifest])
    return { plugin, loading, useFunction: makeUseFunction(plugin) }
}

const makeUseFunction = (plugin: Plugin | null) => {
    return (functionName: string, input: string | Uint8Array): UseFunctionReturn => {
        const [output, setOutput] = useState<ArrayBuffer>()
        const [loading, setLoading] = useState(false)
        useEffect(() => {
            setLoading(true)
            plugin?.call(functionName, input)
                .then((v) => {
                    setOutput(v?.arrayBuffer())
                })
                .catch((e) => console.error(e))
                .finally(() => setLoading(false))
        }, [plugin, functionName, input])
        return { output, loading }
    }
}

/**
 * React props for the `ExtismPlugin` component 
 */
export interface PluginProps {
    /**
     * {@link ManifestLike} to specify how to get the Wasm for the plugin.
     */
    source: ManifestLike,
    /**
     * {@link ExtismPluginOptions} to configure how to initialize the plugin. See https://extism.github.io/js-sdk/classes/browser.ExtismPluginOptions.html
     */
    options?: ExtismPluginOptions
    /**
     * The name of the function to call before rendering the component. The return of this function is either rendered as text within the component, or passed as a prop to its children
     */
    functionName?: string // defaults to 'render'
    /**
     * input to `functionName`
     */
    input?: string | number | Uint8Array | undefined
    /**
     * React children
     */
    children?: (output: ArrayBuffer | undefined) => React.JSX.Element | null
}

/**
 * This component receives {@link PluginProps} which specifies how to initalize the Extism plugin and which function to call before rendering.
 * The output of the Extism plugin function that was called is rendered as HTML.
 * If no `functionName` is specified, the component will attempt to call a `render` function on the Extism plugin.
 * If this component has children, the output of the function is passed to the children as props.  See the comments in the examples for more info.
 */
export const ExtismPlugin = ({ source, functionName = 'render', options, input, children }: PluginProps): React.JSX.Element | null => {
    const { plugin } = usePlugin(source, options)
    const [output, setOutput] = useState<ArrayBuffer>()

    useEffect(() => {
        plugin?.call(functionName, input)
            .then((val) => {
                setOutput(val?.arrayBuffer())
            }).catch((e) => {
                console.error(e)
            })
    }, [plugin, input])

    if (!children) {
        return <div dangerouslySetInnerHTML={{ __html: (new TextDecoder()).decode(output) }} />
    } else if (typeof children === 'function') {
        return children(output)
    } else {
        return <>{children}</>
    }
}
