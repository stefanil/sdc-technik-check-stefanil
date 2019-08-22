const base = require('./wdio.base.conf')

exports.config = Object.assign(base.config, {
  capabilities: [{
    maxInstances: 1,
    browserName: "chrome",
    chromeOptions: {
      args: ["--window-size=1920,1400"]
    }
  }]
});
