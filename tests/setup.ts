// @ts-ignore-error
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
import { JSDOM } from 'jsdom';

// @ts-ignore-error
configure({ adapter: new Adapter() });


const jsdom = new JSDOM('<!doctype html><html><body></body></html>', { "url": "http://localhost/" });
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

declare const global: any;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};
copyProps(window, global);

