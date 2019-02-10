export default {
  // buildDir: "dist",
  // plugins: ["~/plugins/hello"],
  css: ["normalize.css", "~/assets/sass/global.sass"],
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    // your settings here
    sass: ["./assets/sass/main.sass"],
    less: [],
    stylus: []
  }
  // build: {
  //   extend(config, { isDev, isClient }) {
  //     if (isDev && isClient) {
  //       config.module.rules.push({
  //         test: /\.ts$/,
  //         enforce: "pre",
  //         loader: "tslint-loader",
  //         options: {
  //           configFile: "tslint.json",
  //           tsConfigFile: "tsconfig.json"
  //         }
  //       });
  //     }
  //   }
  // }
};
