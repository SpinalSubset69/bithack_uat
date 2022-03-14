const config = require("../config");
const server = require("./app");

(() => {
  try {
    server.listen(config.port, () => {
      console.log("Server on port: " + config.port);
    });

    console.log();
  } catch (ex) {
    console.log(ex.message);
  }
})();
