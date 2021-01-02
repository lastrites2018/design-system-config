import babel from '@rollup/plugin-babel';
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
        peerDepsExternal(),
        nodeResolve({
          extensions,
        }),
        babel({
          babelHelpers: 'runtime',
          exclude: 'node_modules/**',
          extensions,
        }),
        postcss({
          plugins: [],
        }),
      ],
      preserveModules: true,
    };
  });
