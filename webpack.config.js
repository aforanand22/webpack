const path = require('path');

module.exports = ()=> {
    return {
        output: {
            filename: 'index.bundle.js',
            path: path.resolve(__dirname, 'dist')
          },
        module: {
            rules:[
                {
                    test: /\.(js|mjs)$/,
                    exclude: /node_modules/,
                    use: {
                       loader: 'babel-loader',
                    }
                }
                
            ]
        }
    }
}
  