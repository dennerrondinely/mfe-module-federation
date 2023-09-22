const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:"auto",
  configureWebpack: {
    optimization:{
      splitChunks:false
    },
    plugins: [
      new ModuleFederationPlugin({
          name:'vue_app',
          filename:'remoteEntry.js',
          exposes: {
            './VueApp': './src/mounted-app',
          },
          shared:{
            vue:{
              eager:true
            }
          }
      })
    ]
  }  
})
