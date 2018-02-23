# Vue Skeleton with Webpack

This is a small skeleton for Webpack 3 with Vue.js 2.x

## Why?
When i made this project, i was a total newby to Webpack and Vue and it was complicated for me to configure Webpack for the first time because of the different types of documentations (some good, some bad and some not newby friendly and not understandable). 
I decided to create a hopefully better understandable basic project so that others don't need to search through that many pages and documentations. 
If you are new to this whole stuff this hopefully could be your basic configuration and helps you start new cool things with Vue.js 2.x.



## OK and?
I recommend you to read the documentations behind the depencies that i've implemented in the project to get a feeling of what we are doing here and a glimpse of how they work.


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
* [vue-local-storage](https://github.com/pinguinjkeke/vue-local-storage) - if you want to store something in the Browsers localstorage of the user
* [vue2-google-maps](https://github.com/xkjyeah/vue-google-maps) - google maps integration for vue.js

Javascript Libraries:
* [jquery](http://api.jquery.com/) - for fun with jQuery - yeah it is fun! :^)
* [moment](https://momentjs.com/) - if you have something to do with date and times (otherwise you can remove that from the package.json)

Less/Sass - CSS Compiler:
* [sass](https://github.com/webpack-contrib/sass-loader) - the sass-css compiler
* [less](https://github.com/webpack-contrib/less-loader) - or if you prefer less-css

**Please note! It is highly recommended to only use one of the CSS-Loaders, otherwise strange sideeffects can happen.
You should remove the plugin that you are not using from the package.json and webpack.config.js**


## OK, OK - just let me install it. What do i have to do?
 * first you need [node.js](https://nodejs.org/en/) installed on your computer
 * checkout this repository to a local project folder
 * open a terminal or the terminal panel in your IDE (i prefer [PHPStorm](https://www.jetbrains.com/phpstorm/))
 * type in:
 ```
 NPM install
 ```
 
 This will download all the depencies and code that is nessacary to get this thing working.
 And thats barely it. Now you are good to go.
 
 ## How to start the dev-server?
 This is quite simple. Just type the following command in your terminal:
 ```
 NPM run dev
 ```
 And that's it. Now your default browser should open and the project will be shown.<br />
 The most impressive thing now is (when the dev-server is running in the background), when you change any of your code the website will know it and automatic refreshs itself or the associated area.
 
 ## I wan't to create a production build for upload
 That's as easy as starting the dev-server. Just type the following command in your terminal and it will create a nice and small (depends on howm uch code you have written) package right in your public folder
 ```
 NPM run build
 ```

## What else should i know?
There is one last thing that i will shortly explain you. In the package there is a folder called config. The files in this folder are your configuration for different environments such as develop, staging, testing and production.
So i created only the two files for dev and production because i think when you need more, than you are able to copy and rename the files by yourself :^)
In this files you find some configurations for different kind of things.

With the node_env configuration it is possible to tell your application on which environment it is running
```
node_env: '"dev"',
```

If you wanna serve the build files from a subdirectory or if you use it in a PHP framework you can define the base path for your static files (css, and js)
```
'base': '/'
```

Where to put the images on build process
```
'img': '"/"'
```

When your index.html file is in a subdirectory of your domain than you can define the path here
```
'baseUrl': '"/"'
```

If you use a backend API put the path to it here
```
'api': '"http://*apiURL*/api/"'
```

Put your Google Maps API key in here
```
google_api_key: '""',
```
**Please note, that the params in single and double qoutes have to be written exactly like that, otherwise your app will not work!**

## I wanna use Vue with a PHP Backend
One last thing that i wanna explain you is how you use this package with a PHP project. I have searched the web for hours to find a good answer how to do so, but i didn't find it anywhere (beside some short explanations that this is somehow possible).
I think the best way to use it with a backend is to build the backend as an (rest)api and separate it completely from the frontend. 
The good thing of this solution is that the backend developer can completly focus on the api and dont have anything to do with the frontend. 
With this solution in mind it is also easier maybe dockerize your project later. But if you only have a little PHP project u are able to use the mostly available /public folder to deploy your frontend in there. I hope this little idea was helpfull.

 
 ## Questions?
If you have any ideas or improvements that i could implement please feel free and let me know.