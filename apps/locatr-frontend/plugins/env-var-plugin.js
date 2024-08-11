// const locatrEnvRegex = /^(LOCATR_|GOOGLE_)/i;

// const envVarPlugin = {
//   name: 'env-var-plugin',
//   setup(build) {
//     const envVars = {};
//     for (const key in process.env) {
//       if (locatrEnvRegex.test(key)) {
//         envVars[`process.env.${key}`] = JSON.stringify(process.env[key]);
//       }
//     }

//     build.onResolve({ filter: /^env$/ }, () => ({
//       path: 'env',
//       namespace: 'env-ns',
//     }));

//     build.onLoad({ filter: /.*/, namespace: 'env-ns' }, () => ({
//       contents: JSON.stringify(envVars),
//       loader: 'json',
//     }));

//     build.initialOptions.define = {
//       ...build.initialOptions.define,
//       ...envVars,
//     };
//   },
// };

// module.exports = envVarPlugin;

const locatrEnvRegex = /^(LOCATR_|GOOGLE_)/i;

const envVarPlugin = {
  name: 'env-var-plugin',
  setup(build) {
    const options = build.initialOptions;

    const envVars = {};
    for (const key in process.env) {
      if (locatrEnvRegex.test(key)) {
        envVars[key] = process.env[key];
      }
    }

    options.define['process.env'] = JSON.stringify(envVars);
  },
};

module.exports = envVarPlugin;

// const esbuild = require('esbuild');

// let envPlugin = {
//   name: 'env',
//   setup(build) {
//     build.onResolve({ filter: /^env$/ }, (args) => ({
//       path: args.path,
//       namespace: 'env-ns',
//     }));

//     build.onLoad({ filter: /.*/, namespace: 'env-ns' }, () => ({
//       contents: JSON.stringify(
//         Object.fromEntries(Object.entries(process.env).filter(([key]) => key.startsWith('NX_')))
//       ),
//       loader: 'json',
//     }));
//   },
// };

// esbuild
//   .build({
//     entryPoints: ['apps/locatr-frontend/src/main.ts'],
//     bundle: true,
//     outfile: 'dist/apps/locatr-frontend/out.js',
//     plugins: [envPlugin],
//   })
//   .catch(() => process.exit(1));

// module.exports = envPlugin;
