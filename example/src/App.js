import { usePlugin, ExtismPlugin } from '@extism/react'
import React, { useState, useEffect } from 'react'

const pluginSource = 'https://modsurfer.dylibso.workers.dev/api/v1/module/93898457953d30d016f712ccf4336ce7e9971db5f7f3aff1edd252764f75d5d7.wasm'

function App() {
  const { plugin, loading: pluginLoading, useFunction } = usePlugin(pluginSource, { useWasi: true })
  const [hookInput, setHookInput] = useState('')
  const [componentInput, setComponentInput] = useState('')

  const [output, setOutput] = useState('')
  useEffect(() => {
    plugin?.call('count_vowels', hookInput).then((output) => {
      setOutput(new TextDecoder().decode(output))
    })
  }, [plugin, hookInput])

  /**
   * Here's how to call the function with the `useFunction` convenience hook
   * const { output, loading } = useFunction('count_vowels', hookInput);
   * // output at this point is an ArrayBuffer, so you will need to decode to text like:
   * // const decoder = new TextDecoder()
   * // decoder.decode(output)
   */
  return (
    <div className="app">
      <div className="example-hook">
        <div className="header">Hook</div>
        {pluginLoading ? 'Loading plugin...' : (
          <div>
            <input onChange={(e) => {
              setHookInput(e.target.value)
            }} />
            {output}
          </div>
        )}
      </div>
      <div className="example-component">
        <div className="header">Component</div>
        {pluginLoading ? 'Loading plugin...' : (
          <div>
            <input onChange={(e) => {
              setComponentInput(e.target.value)
            }} />
            <ExtismPlugin source={pluginSource} input={componentInput} functionName='count_vowels' />
            {/* it could also be used like this:
              <ExtismPlugin source={pluginSource} input={componentInput} functionName='count_vowels'>
                {(output) => {
                  return new TextDecoder().decode(output)
                }}
              </ExtismPlugin> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
