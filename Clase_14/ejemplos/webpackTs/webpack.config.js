const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production', // modo de trabajo, desarrollo 0 produccion
    entry: './src/index.ts', // archivo de entrada de nuestro proyecto
    target: "node", // definimos en ambiente en el que vamos a estar trabajando
    externals: [nodeExternals()], //permite el correcto funcionamiento cuando usamos dependencias externas de webpack

    output: { // punto de salida
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: { // definimos las extensiones de los archivos con los que vamos a estar trabajando
        extensions: ['.ts', '.js'],
    },
    module: { // sirve para aclararle a Webpack cómo debe procesar los loaders que queramos usar para un proyecto.
        rules: [
            {
                // test: /\.tsx?/,
                use: 'ts-loader', // ayuda a webpack hacer las transformaciones de ts a js y hacer el empaquetado final
                exclude: /node_modules/ // ignoramos la carpeta de node_modules
            }
        ]
    }
}
