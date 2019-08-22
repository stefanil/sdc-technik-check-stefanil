const base = require('./wdio.base.conf')

exports.config = Object.assign(base.config, {
  capabilities: [{
    maxInstances: 2,
    browserName: "chrome",
    chromeOptions: {
      args: ["--window-size=1400,1400", "--headless", "--no-sandbox"]
    }
  }]
});
