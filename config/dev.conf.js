const conf = {
    node_env: '"dev"',
    paths: {
        'base': '/', // no configuration needed in dev
        'img': '"/"', // no configuration needed in dev
        'baseUrl': '"/"', // no configuration needed in dev
        'api': '"http://*apiURL*/api/"' // if you have a Backend API put the path to it here
    },
    google_api_key: '""',
};

exports.module = conf;