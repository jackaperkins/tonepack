module.exports = {
    // first part here is all we need for webpack to bundle up our own code into a single js file for browser
    // apparently something very similar to this is assumed as default even if you have no config file!
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: `${process.cwd()}/dist`,
    },
    
    // now the typescript part
    module: {
      // Use `ts-loader` on any file that ends in '.ts'
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    // Bundle '.ts' files as well as '.js' files.
    resolve: {
      extensions: ['.ts', '.js'],
    }

  };