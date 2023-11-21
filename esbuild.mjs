import esbuild from 'esbuild'

esbuild.build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    // minify: true,
    allowOverwrite: true,
    outdir: 'dist',
    platform: 'browser',
    format: 'esm',
})