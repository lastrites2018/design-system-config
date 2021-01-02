import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const extensions = ['.ts', '.tsx'];
const inputSrc = [
  ['./src/index.ts'],
];

export default inputSrc
  .map(([input, file]) => {
    return {
      input,
      output: {
        dir: 'dist2',
        format: 'es',
      },
      plugins: [
        babel({
          babelHelpers: 'runtime',
          exclude: 'node_modules/**',
          extensions,
        }),
        nodeResolve({
          extensions,
        }),
        commonjs({
          extensions: [...extensions, '.js'],
        }),
        peerDepsExternal(),
        postcss({
          plugins: [],
        }),
      ],
      preserveModules: true,
    };
  });
