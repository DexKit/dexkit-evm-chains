import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts', 'src/utils/index.ts', 'src/constants/index.ts'],
    format: ['esm', 'cjs'],
    outDir: 'dist',
    dts: true,
    splitting: true,
    sourcemap: true,
    clean: true,
})