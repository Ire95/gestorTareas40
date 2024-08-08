const path = require('path');

module.exports = {
    mode: 'development', //Para saber i esta en desarrollo o produccion 
    entry: './src/index.js',// Punto de entrada de tu aplicacion
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //regex para identificar archivos
                use: ['style-loader', 'css-loader'], //Loaders para procesar archivos
            },
            {
              test: /\.js$/, //Regex para identificar archivos JS
              exclude: /node_modules/, //Excluir la carpeta node_modules
              use: {
                loader: 'babel-loader', //Loader para convertir JS moderno al JS compatible a mas navegadores
                options: {
                    presets:['@babel/preset-env'],
                },
              },   
            },
        ],
    },
    devtool: 'source-map',//Genera source maps para facilitar la depuración
    devServer: {
        static: {
            directory: path.resolve (__dirname, 'dist') //Carpeta del que correra el servidor
        },
        compress: true, // Habilitar compresion gzip
        port: 9000, //Puerto del servidor de desarrollo
    },
};