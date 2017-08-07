# webpack-2

#### Webpack-2 starter kit 

* Convert ES6 to ES5 using babel loader
* Convert SCSS to CSS
* Extract CSS file separately using `extract-text-webpack-plugin`
* Post CSS processing
* Webpack Dev Server
* Production build with minification of CSS and JS
* Image optimization

    _**Note:** this Image optimization might not work on certain OS. Comment out the block `image-webpack-loader` in `webpack.config.js`_
* Spread operator support `{...}` [more info](http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html)

#### How to Run?
Clone the repo and do the npm install 
```sh
npm install
```

To start the local dev environment
```sh
npm start
```

To run the production build
```sh
npm run production
```