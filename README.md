# AST

[![Package Version][package-image]][package-url]
[![Open Issues][issues-image]][issues-url]
[![Build Status][build-image]][build-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Dependencies Status][dependencies-image]][dependencies-url]
[![Dev Dependencies Status][dev-dependencies-image]][dev-dependencies-url]
[![Commitizen Friendly][commitizen-image]][commitizen-url]

## Managing Your Project

Before committing to a project based on this template, it's recommended that you read about [Conventional Commits](https://conventionalcommits.org) and install [Commitizen CLI](http://commitizen.github.io/cz-cli/) globally.

### Initial Publish

Some additional steps need to be performed for a new project.  Specifically, you'll need to:

1. Create your project on GitHub (do not add a README, .gitignore, or license).
2. Add the initial files to the repo:
```bash
$ git add .
$ git cz
$ git remote add origin git@github.com:<your GitHub username>/<your project name>
$ git push -u origin master
```
3. Create accounts on the following sites and add your new GitHub project to them.  The project is preconfigured, so it should "just work" with these tools.
	* [Travis CI](https://travis-ci.org) for continuous integration.
	* [Coveralls](https://coveralls.io) for unit test coverage verification.
4. Manually trigger a Travis CI build and wait for it to complete.
5. Publish your package to NPMJS: `npm publish`

### Development Workflow

These steps need to be performed whenever you make changes:

0. Write awesome code in the `src` directory.
1. Build (clean, lint, and transpile): `npm run build`
2. Create unit tests in the `test` directory.  If your code is not awesome, you may have to fix some things here.
3. Verify code coverage: `npm run cover:check`
4. Commit your changes using `git add` and `git cz`
5. Push to GitHub using `git push` and wait for the CI builds to complete.  Again, success depends upon the awesomeness of your code.

### NPMJS Updates

Follow these steps to update your NPM package:

0. Perform all development workflow steps including pushing to GitHub in order to verify the CI builds.  You don't want to publish a broken package!
1. Check to see if this qualifies as a major, minor, or patch release: `npm run changelog:unreleased`
2. Bump the NPM version following [Semantic Versioning](https://semver.org) by using **one** of these approaches:
	* Specify major, minor, or patch and let NPM bump it: `npm version [major | minor | patch] -m "chore(release): Bump version to %s."`
	* Explicitly provide the version number such as 1.0.0: `npm version 1.0.0 -m "chore(release): Bump version to %s."`
3. The push to GitHub is automated, so wait for the CI builds to finish.
4. Publish the new version to NPMJS: `npm publish`

## Contributing

This section is here as a reminder for you to explain to your users how to contribute to the projects you create from this template.

[project-url]: https://github.com/chriswells0/node-typescript-template
[package-image]: https://badge.fury.io/js/typescript-template.svg
[package-url]: https://badge.fury.io/js/typescript-template
[issues-image]: https://img.shields.io/github/issues/chriswells0/node-typescript-template.svg?style=popout
[issues-url]: https://github.com/chriswells0/node-typescript-template/issues
[coverage-image]: https://coveralls.io/repos/github/chriswells0/node-typescript-template/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/chriswells0/node-typescript-template?branch=master
[dependencies-image]: https://david-dm.org/chriswells0/node-typescript-template/status.svg
[dependencies-url]: https://david-dm.org/chriswells0/node-typescript-template
[dev-dependencies-image]: https://david-dm.org/chriswells0/node-typescript-template/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/chriswells0/node-typescript-template?type=dev
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli
