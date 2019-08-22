// see https://github.com/facebook/jest/issues/4545
global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};

// see https://github.com/facebook/jest/issues/4545#issuecomment-332762365
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
