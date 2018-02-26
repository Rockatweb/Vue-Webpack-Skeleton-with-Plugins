# Vue Skeleton with Webpack

This is a small skeleton for Webpack 3 with Vue.js 2.x

## Why?
When I started working on this project, I was new to both Webpack and Vue. Configuring Webpack for the first time was confusing because of the different types of documentation available (some good, some bad and some not beginner friendly). Therefore, 
I decided to create this starter project (easier to understand) so that fellow beginners don't have to spend their time picking apart pages of tedious docs. 
As a beginner, I hope this project can help you bootstrap your own cool projects with minimum effort on configuration for Vue.js 2.x and Webpack!



## OK and?
I recommend you to read the documentation of the dependencies that I've added in the project to get a feeling of what we are doing here and a glimpse of how they work.


## So what's inside?

Webpack dependencies:
* [Babel](https://github.com/babel/babel-loader) with [Preset ENV](https://babeljs.io/docs/plugins/preset-env/) for ECMA 6+
* [uglifyjs](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) - minifying of javascript code
* [webpack-dev-server](https://github.com/webpack/docs/wiki/webpack-dev-server) - the dev server for local developement
* [favicons-webpack-plugin](https://github.com/jantimon/favicons-webpack-plugin) - a plugin to simply configure your favicons for your web-app

Vue and some fancy Vue stuff:
* [vue.js](https://vuejs.org/) - nothing more to say 
* [vuex](https://vuex.vuejs.org/en/intro.html) - the vuex library
* [axios for vue](https://github.com/imcvampire/vue-axios) - for asynchronous requests
* [vue-spinner](https://github.com/greyby/vue-spinner) - some fancy loading animations
* [vue-router](https://router.vuejs.org/en/) - for routing with Vue.js
* [vue-local-storage](https://github.com/pinguinjkeke/vue-local-storage) - if you want to store something in the browser's localstorage
* [vue2-google-maps](https://github.com/xkjyeah/vue-google-maps) - Google maps integration for vue.js

Javascript Libraries:
* [jquery](http://api.jquery.com/) - for fun with jQuery - yeah, it is still fun ! :^)
* [moment](https://momentjs.com/) - easiest way to work with date and times (optional, just remove it from the package.json file if not needed)

Less/Sass - CSS Compiler:
* [sass](https://github.com/webpack-contrib/sass-loader) - the sass-css compiler
* [less](https://github.com/webpack-contrib/less-loader) - or if you prefer less-css

**Please note! It is highly recommended to only use one of the CSS-Loaders, to avoid any build errors.
You should remove the plugin that you are not using from the package.json and webpack.config.js**


## OK, OK - just let me install it! What do i have to do?
 * first you need [node.js](https://nodejs.org/en/) installed on your computer
 * checkout this repository to a local project folder
 * open a terminal or the terminal panel in your IDE (I prefer [PHPStorm](https://www.jetbrains.com/phpstorm/))
 * enter into the repository in the terminal and type :
 ```
 npm install
 ```
 
 This will download and install all the required dependencies for the project.
 And thats it! Now you are good to go.
 
 ## How to start the dev-server?
 This is quite simple. Just type the following command in your terminal:
 ```
 npm run dev
 ```
 Now your default browser should open and the project will be served locally.<br />
 Any changes you make in the code are automatically reflected (page refresh is done by the browser) while the server is running in the background.
 
 ## I wan't to create a production build for upload
 That's as easy as starting the dev-server. Just type the following command in your terminal and it will create a nice and small (depends on how much code you have written) package right in your public folder
 ```
 npm run build
 ```

## What else should I know?
There is one last thing that I would like to mention briefly. In the package there is a folder named `config`. The files in this folder are your configuration for different environments such as develop, staging, testing and production.
I have created files only for dev and production as the process for staging and testing is very similar, and can be performed by simply copying and renaming the files accordingly! 

With the `node_env` configuration it is possible to tell your application on which environment it should run
```
node_env: '"dev"',
```

If you want to serve the build files from a sub-directory or if you use it in a PHP framework you can define the base path for your static files (css, and js)
```
'base': '/'
```

Path to put the images in the build process
```
'img': '"/"'
```

When your index.html file is in a sub-directory of your domain, you can define its path here
```
'baseUrl': '"/"'
```

If you use a backend API simply provide its path here
```
'api': '"http://*apiURL*/api/"'
```

Put your Google Maps API key in here
```
google_api_key: '""',
```
**Please note, that the params in single and double quotes have to be written exactly as shown, otherwise your app will not work!**

## I want to use Vue with a PHP Backend
Finally, I'd like to explain how you can use this package in a PHP project. I have searched the web for hours to find a good answer on how to do so, but I didn't find it anywhere (beside some short explanations that this is somehow possible).
I think the best way to use it with a backend is to build the backend as an api (REST) to separate it completely from the frontend. 
The good thing about this is that the backend developer can completly focus on the api with no knowledge about the frontend.
With this solution in mind it is also easier to (maybe) dockerize your project later. But if you only have a small PHP project, then you can use the available `/public` folder to deploy your frontend. Therefor I put an index.php in the /public folder that you can replace with the index.php from you backend. I hope this little idea was helpful.
 
 ## Questions?
If you have any ideas or improvements that I could implement, feel free to let me know.