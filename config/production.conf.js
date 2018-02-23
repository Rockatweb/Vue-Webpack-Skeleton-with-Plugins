const conf = {
    node_env: '"production"',
    paths: {
        'base': '/', // is your project in root or a subdirectory !!!without double quotes
        'img': '"/public/"', // where to put the images on build process
        'baseUrl': '"/public/"', // when your index file is not in the root directory of your domain
        'api': '"http://*apiURL*/api/"' // if you have a Backend API put the path to it here
    },
    google_api_key: '""', // your google maps api key
};

exports.module = conf;