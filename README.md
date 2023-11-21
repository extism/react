# React Utilities for Extism

This repository contains hooks as well as a React component to make it easy for React developers to integrate [Extism](https://extism.org/) into their applications. The implementation of these utilities is based off of the [Universal JavaScript SDK](https://github.com/extism/js-sdk). In some cases, you may be better off using that.

## Hooks

### usePlugin

The `usePlugin` hook is the primary export of this library. It allows developers to easily initialize and execute Extism plugins.

```js
import { usePlugin } from '@extism/react'

// ...

function MyFunctionalComponent() {
  const { plugin, loading: pluginLoading, useFunction } = usePlugin(pluginSource, { useWasi: true })
  const input = 'some input'
  useEffect(() => {
    plugin?.call('count_vowels', input).then((output) => {
      // do stuff with output
    })
  }, [plugin, input])
  return (
    // ...
  )
}
```
Check out the [source](https://github.com/extism/react/blob/f8f6c32f70c45dbe68484169debdf285e3fcd44d/src/index.tsx#L40-L59)

Check out the [examples](https://github.com/extism/react/blob/main/example/src/App.js) for exact usage

### useFunction

The `useFunction` hook is returned from `usePlugin` and serves as a convenience hook to allow developers to more tersely invoke Extism functions.

```js
import { usePlugin } from '@extism/react'

// ...

function MyFunctionalComponent() {
  const { plugin, loading: pluginLoading, useFunction } = usePlugin(pluginSource, { useWasi: true })
  const input = 'some input'
  const { output, loading } = useFunction('count_vowels', hookInput);
  // do stuff with output
  return (
    // ...
  )
}
```
Check out the [source](https://github.com/extism/react/blob/f8f6c32f70c45dbe68484169debdf285e3fcd44d/src/index.tsx#L61-L76)

Check out the [examples](https://github.com/extism/react/blob/main/example/src/App.js) for exact usage

## Component

### ExtismPlugin

The `ExtismPlugin` component is currently the only React component exposed by this library. It allows developers to initialize Extism plugins using JSX and specify which plugin function should be called. When rendered without any children, the output of the plugin function is decoded as text and rendered as HTML. When rendered with children, the output of the plugin function is passed as an argument to the children to allow the developer more flexibility.

```js
import { ExtismPlugin } from '@extism/react'

function MyComponent() {
  return (
    <div>
      <ExtismPlugin source='https://location_of_extism_plugin.wasm' input={someInput} functionName='some_function_name' />
    </div>
  )
}

```

Check out the [source](https://github.com/extism/react/blob/f8f6c32f70c45dbe68484169debdf285e3fcd44d/src/index.tsx#L104-L130)

Check out the [examples](https://github.com/extism/react/blob/main/example/src/App.js) for exact usage

# Examples

An example application was created using `npx create-react-app example` and can be found in the root of this repository. The `App.js` component contains an example usage of the `usePlugin` hook, and the `ExtismPlugin` component. Check out the comments in the code for how to use the `useFunction` hook, and rendering `ExtismPlugin` with children.  You may start the application by running `npm start` in the example directory (after running `npm i`)

# Questions?

File an issue or reach out to us on [Discord](https://extism.org/discord)!
