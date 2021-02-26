const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
    chainWebpack: config => {
        // set other name
        config.resolve.alias
          .set("@", resolve("src"))
          .set('@C', resolve("src/components"));
        config.plugin('html')
            .tap(args => {
                args[0].title = "Components - Bos";
                return args;
            })
    },
}