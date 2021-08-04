import babel from '@rollup/plugin-babel'
import rollupPrettier from 'rollup-plugin-prettier'
import {terser} from 'rollup-plugin-terser'
import prettier from 'prettier'

const prettierConfig = prettier.resolveConfig.sync('src/index.js')

const prettierPlugins = [
  babel(),
  rollupPrettier({
    ...prettierConfig,
    sourcemap: true,
  }),
]
const minifyPlugins = [babel(), terser()]

const moduleName = 'PromisifyFileReader'

function createBuild({format, minify = false, extension}) {
  const entry = format === 'esm' ? 'index' : 'file-reader'
  const filename = `index${
    minify ? '.min' : ''
  }.${extension}`

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
  {format: 'umd', extension: 'js'},
  {format: 'umd', minify: true, extension: 'js'},
  {format: 'esm', extension: 'mjs'},
  {format: 'esm', minify: true, extension: 'mjs'},
  {format: 'cjs', extension: 'cjs'},
].map((options) => createBuild(options))
