"use strict";

var moduleMap = {
  'src/project.dev.js': function srcProjectDevJs() {
    require('src/project.dev.js');
  }
};

window.__cocos_require__ = function (moduleName) {
  var func = moduleMap[moduleName];
  func && func();
};