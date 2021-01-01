import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

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
        resolve({
          extensions,
        }),
        babel({
          babelHelpers: 'runtime',
          exclude: 'node_modules/**',
          extensions,
        }),
      ],
      preserveModules: true,
    };
  });
