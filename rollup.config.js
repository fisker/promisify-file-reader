import babel from 'rollup-plugin-babel'
import rollupPrettier from 'rollup-plugin-prettier'
import {terser} from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import prettier from 'prettier'

const prettierConfig = prettier.resolveConfig.sync(`src/index.js`)

const prettierPlugins = [
  babel(),
  rollupPrettier({
    ...prettierConfig,
    sourcemap: true,
  }),
  filesize(),
]
const minifyPlugins = [babel(), terser(), filesize()]

const moduleName = 'PromisifyFileReader'

function createBuild({format, minify = false}) {
  const entry = format === 'esm' ? 'index' : 'file-reader'
  const filename = `index${format === 'cjs' ? '.common' : ''}${
    minify ? '.min' : ''
  }${format === 'esm' ? '.mjs' : '.js'}`

  return {
    input: `src/${entry}.js`,
    output: [
      {
        file: `dist/${filename}`,
        format,
        name: moduleName,
        sourcemap: true,
      },
    ],
    plugins: minify ? minifyPlugins : prettierPlugins,
  }
}

export default [
  {format: 'umd'},
  {format: 'umd', minify: true},
  {format: 'esm'},
  {format: 'esm', minify: true},
  {format: 'cjs'},
].map(createBuild)
