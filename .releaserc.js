module.exports = {
  branches: ['main'],
  repositoryUrl: 'git@github.com:sswales/testcafe-reporter-allure-extended.git',
  ci: false,
  dryRun: false,
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: 'Features' },
            { type: 'fix', section: 'Bug Fixes' },
            { type: 'chore', section: 'Chores', hidden: false },
            { type: 'docs', section: 'Documentation', hidden: false },
            { type: 'style', section: 'Styles', hidden: false },
            { type: 'refactor', section: 'Refactors', hidden: false },
            { type: 'perf', section: 'Performance', hidden: false },
            { type: 'test', section: 'Tests', hidden: false },
          ],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle:
          '# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.',
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        tarballDir: 'dist',
        message: 'chore(release): v<%= nextRelease.version %>',
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
      },
    ],
  ],
};
