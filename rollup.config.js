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
    sourceMap: true,
  }),
  filesize(),
]
const minifyPlugins = [babel(), terser(), filesize()]

const moduleName = 'PromisifyFileReader'

function createBuild({esm = false, minify = false}) {
  return {
    input: `src/${esm ? 'es-module' : 'index'}.js`,
    output: [
      {
        file: `lib/index${minify ? '.min' : ''}${esm ? '.mjs' : '.js'}`,
        format: esm ? 'esm' : 'umd',
        name: moduleName,
        sourcemap: true,
      },
    ],
    plugins: minify ? minifyPlugins : prettierPlugins,
  }
}

export default [{}, {minify: true}, {esm: true}, {esm: true, minify: true}].map(
  createBuild
)
