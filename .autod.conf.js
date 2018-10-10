'use strict';

module.exports = {
  write: true,
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
    'boilerplate',
    'dist',
  ],
  devdep: [
    'autod',
    'autod-egg',
    'eslint',
    'eslint-config-egg',
    'egg-ci',
    'egg-init',
    'npminstall',
    'webstorm-disable-index',
  ],
  keep: [],
  semver: [],
};
