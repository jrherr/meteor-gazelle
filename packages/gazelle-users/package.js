Package.describe({
  name: 'gazelle-users',
  version: '0.0.1',
  summary: 'Base functionality for users.',
  documentation: 'README.md',
  git: 'https://github.com/meteor-gazelle/meteor-gazelle.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'gazelle-lib'
  ]);

  api.addFiles([
    'lib/users.js',
    'lib/methods.js'
  ], ['client', 'server']);

  api.export(['User']);
});

Package.onTest(function (api) {

  //TODO: Why is this causing the tests to stall?
  //api.use('gazelle-users', ['client', 'server']);
  api.use('tinytest', ['client', 'server']);

  api.addFiles('tests/server.js', 'server');
});
