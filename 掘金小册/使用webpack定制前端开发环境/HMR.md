HMR 是 webpack 提供的非常有用的一个功能，跟我们之前提到的一样，安装好 webpack-dev-server， 添加一些简单的配置，即在 webpack 的配置文件中添加启用 HMR 需要的两个插件：

```js
const webpack = require('webpack');

module.exports = {
  // ...
  devServer: {
    hot: true // dev server 的配置要启动 hot，或者在命令行中带参数开启
  },
  plugins: [
    // ...
    new webpack.NamedModulesPlugin(), // 用于启动 HMR 时可以显示模块的相对路径
    new webpack.HotModuleReplacementPlugin() // Hot Module Replacement 的插件
  ]
};
```
