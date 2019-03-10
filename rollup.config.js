import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'

const plugins = [
  babel(),
  // terser(),
]

export default {
  input: `src/index.js`,
  output: [
    {
      file: `lib/index.js`,
      format: 'umd',
      name: 'PromisifyFileReader',
    },
    {
      file: `lib/index.mjs`,
      format: 'esm',
    },
  ],
  plugins,
}
