import typescript from 'rollup-plugin-typescript2'
import size from 'rollup-plugin-size'

const plugins = [
  typescript({
    tsconfig: 'tsconfig.json',
    removeComments: true,
    useTsconfigDeclarationDir: true,
  }),
  size()
]

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/fre.umd.js', format: 'umd', name: 'fre', sourcemap: true },
    { file: 'dist/fre.js', format: 'esm', sourcemap: true },
    { file: 'dist/fre.esm.js', format: 'esm', sourcemap: true },
  ],
  plugins,
}
