module.exports = {
  allowed: [
    {
      from: {
        path: [
          'src/index.ts',
        ],
      },
      to: {
        reachable: true,
      },
    },
  ],
  allowedSeverity: 'error',
  options: {
    includeOnly: {
      path: '^src',
    },
    exclude: {
      path: [
        'src/index.d.ts',
        '__tests__/',

        '.stories.tsx',
        '.test.tsx',
      ],
    },
    tsConfig: {
      fileName: 'tsconfig.json',
    },
    tsPreCompilationDeps: true,
  },
};
