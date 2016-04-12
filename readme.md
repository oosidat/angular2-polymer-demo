# Angular 2 and Polymer Demo/Template with Gulp

* Basic [Angular 2 Tutorial / Demo](https://angular.io/docs/ts/latest/tutorial/), extended
* Different directory structure (components, services, models in their own folders)
* Uses Polymer paper elements (card, button, input)
* Uses Polymer Vulcanize (via `gulp-vulcanize`)

## Usage

* Fork and/or Clone repository
* `npm install` - install `package.json` dependencies (and `bower.json` dependencies)
* Build:
  * `npm run build` - will produce a `dist` directory for the app
  * `npm run start` - starts `lite-server` on `localhost:3000` - Do a `build` before starting the first time
* Watch:
  * `npm run watch` - concurrently starts `lite-server` and builds and watches files for changes via `gulp watch`
