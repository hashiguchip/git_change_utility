export default {
  buildDir: "dist",
  plugins: ["~/plugins/hello"],
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          test: /\.ts$/,
          enforce: "pre",
          loader: "tslint-loader",
          options: {
            configFile: "tslint.json",
            tsConfigFile: "tsconfig.json"
          }
        });
      }
    }
  },
  server: {
    port: 5555 // デフォルト: 3000
    // host: '0.0.0.0', // デフォルト: localhost
  }
};
