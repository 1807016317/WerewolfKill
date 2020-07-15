window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AppMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5708dP/MaFKNLaqxXMCYMT9", "AppMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var appMgr_Instance = null;
    var g_Mgr = require("./Global");
    var Http = require("../serverConnect/Http");
    var HttpReqMgr_1 = require("../serverConnect/HttpReqMgr");
    var UserMgr_1 = require("./UserMgr");
    var EventHandle_1 = require("./EventHandle");
    var AppMgr = function() {
      function AppMgr() {
        this.initMgr();
      }
      AppMgr.getInstance = function() {
        if (null == appMgr_Instance || void 0 == appMgr_Instance) {
          appMgr_Instance = new AppMgr();
          return appMgr_Instance;
        }
        return appMgr_Instance;
      };
      AppMgr.prototype.urlParse = function() {
        var params = {};
        if (null == window.location) return params;
        var name, value;
        var str = window.location.href;
        var num = str.indexOf("?");
        str = str.substr(num + 1);
        var arr = str.split("&");
        for (var i = 0; i < arr.length; i++) {
          num = arr[i].indexOf("=");
          if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            params[name] = value;
          }
        }
        return params;
      };
      AppMgr.prototype.initMgr = function() {
        cc["appMgr"] = {};
        g_Mgr["appMgr"] = {};
        console.log("app" + cc["appMgr"]);
        g_Mgr["userMgr"] = new UserMgr_1.default();
        g_Mgr["eventHandle"] = EventHandle_1.default;
        g_Mgr["http"] = Http;
        g_Mgr["httpReqMgr"] = new HttpReqMgr_1.default();
        g_Mgr["args"] = this.urlParse();
      };
      return AppMgr;
    }();
    exports.default = AppMgr;
    cc._RF.pop();
  }, {
    "../serverConnect/Http": "Http",
    "../serverConnect/HttpReqMgr": "HttpReqMgr",
    "./EventHandle": "EventHandle",
    "./Global": "Global",
    "./UserMgr": "UserMgr"
  } ],
  AppStart: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e67avX8BREc4BXIgaMbwaT", "AppStart");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AppMgr_1 = require("../manager/AppMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AppStart = function(_super) {
      __extends(AppStart, _super);
      function AppStart() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.hall = null;
        _this.login = null;
        return _this;
      }
      AppStart.prototype.onLoad = function() {
        AppMgr_1.default.getInstance();
        this.login.active = true;
      };
      AppStart.prototype.start = function() {};
      __decorate([ property(cc.Node) ], AppStart.prototype, "hall", void 0);
      __decorate([ property(cc.Node) ], AppStart.prototype, "login", void 0);
      AppStart = __decorate([ ccclass ], AppStart);
      return AppStart;
    }(cc.Component);
    exports.default = AppStart;
    cc._RF.pop();
  }, {
    "../manager/AppMgr": "AppMgr"
  } ],
  EventHandle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc9e7vd0atLs4DfiZOXGFO7", "EventHandle");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventHandle = function() {
      function EventHandle() {}
      EventHandle.isNull = function(key) {
        if (null == this.eventArr[key] || void 0 == this.eventArr[key]) return false;
        return true;
      };
      EventHandle.addEvent = function(key, callback) {
        if (this.isNull(key)) return;
        this.eventArr[key] = callback;
      };
      EventHandle.deleteEventByKey = function(key) {
        if (this.isNull(key)) {
          delete this.eventArr[key];
          return true;
        }
        return false;
      };
      EventHandle.clearAllEvent = function() {
        this.eventArr = {};
      };
      EventHandle.emitEvent = function(key) {
        if (this.isNull(key)) {
          var callback = this.eventArr[key];
          callback();
        }
      };
      EventHandle.eventArr = {};
      return EventHandle;
    }();
    exports.default = EventHandle;
    cc._RF.pop();
  }, {} ],
  GameHall: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73890p0fh9FbbcPub/dUHaW", "GameHall");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var g_Mgr = require("../manager/Global");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameHall = function(_super) {
      __extends(GameHall, _super);
      function GameHall() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.preset = null;
        _this.setBySelf = null;
        _this.cardIntroduce = null;
        _this.userName = null;
        _this.userPic = null;
        return _this;
      }
      GameHall.prototype.onLoad = function() {
        g_Mgr["eventHandle"].addEvent("setUserInfo", this.setUserInfo.bind(this));
        this.preset.active = false;
        this.setBySelf.active = false;
        this.cardIntroduce.active = false;
      };
      GameHall.prototype.start = function() {};
      GameHall.prototype.selectPreset = function() {
        this.preset.active = true;
        this.setBySelf.active = false;
        this.cardIntroduce.active = false;
      };
      GameHall.prototype.selectSetBySelf = function() {
        this.setBySelf.active = true;
        this.preset.active = false;
        this.cardIntroduce.active = false;
      };
      GameHall.prototype.onCradDescrible = function() {
        this.cardIntroduce.active = true;
        this.preset.active = false;
        this.setBySelf.active = false;
      };
      GameHall.prototype.offCradDescrible = function() {
        this.cardIntroduce.active = false;
        this.preset.active = false;
        this.setBySelf.active = false;
      };
      GameHall.prototype.setUserInfo = function() {
        var self = this;
        self.userName.string = g_Mgr["userMgr"].properties.name;
        cc.loader.load({
          url: g_Mgr["userMgr"].properties.avatarUrl,
          type: "jpg"
        }, function(err, tex) {
          self.userPic.spriteFrame = new cc.SpriteFrame(tex);
        });
        g_Mgr["eventHandle"].emitEvent("toGameHall");
      };
      __decorate([ property(cc.Node) ], GameHall.prototype, "preset", void 0);
      __decorate([ property(cc.Node) ], GameHall.prototype, "setBySelf", void 0);
      __decorate([ property(cc.Node) ], GameHall.prototype, "cardIntroduce", void 0);
      __decorate([ property(cc.Label) ], GameHall.prototype, "userName", void 0);
      __decorate([ property(cc.Sprite) ], GameHall.prototype, "userPic", void 0);
      GameHall = __decorate([ ccclass ], GameHall);
      return GameHall;
    }(cc.Component);
    exports.default = GameHall;
    cc._RF.pop();
  }, {
    "../manager/Global": "Global"
  } ],
  Global: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2da9dnUI8JHEKEvYcCUPAKh", "Global");
    "use strict";
    var g_Mgr = {};
    module.exports = g_Mgr;
    cc._RF.pop();
  }, {} ],
  HttpReqMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "319a79WOpROUo/+klJLhMBo", "HttpReqMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var g_Mgr = require("../manager/Global");
    var HttpReqMgr = function() {
      function HttpReqMgr() {
        this.http = g_Mgr["http"];
      }
      HttpReqMgr.prototype.reqWxMiniLogin = function(code, callback) {
        this.http.sendRequest("/wxmini_auth", {
          code: code,
          os: "wxmini"
        }, callback);
      };
      HttpReqMgr.prototype.reqWxUserInfo = function(userInfo, callback) {
        this.http.sendRequest("/save_userInfo", userInfo, callback);
      };
      HttpReqMgr.prototype.reqCardOfPreset = function(playerNum, callback) {
        this.http.sendRequest("/get_card_message", playerNum, callback, "https://www.oldwang.top:9002");
      };
      return HttpReqMgr;
    }();
    exports.default = HttpReqMgr;
    cc._RF.pop();
  }, {
    "../manager/Global": "Global"
  } ],
  Http: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50b0bjHpxxEG6QfEdz14g/P", "Http");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var serverUrl = "https://www.oldwang.top:9001";
    var master_url = null;
    var url = null;
    var token = null;
    var outTimesMax = 20;
    var outTimes = 0;
    init();
    function init() {
      master_url = serverUrl;
      url = serverUrl;
    }
    function setURL(url) {
      serverUrl = url;
      init();
    }
    exports.setURL = setURL;
    function sendRequest(path, data, handler, extraUrl) {
      var xhr = cc.loader.getXMLHttpRequest();
      xhr.timeout = 5e3;
      null == data && (data = {});
      token && (data.token = token);
      null == extraUrl && (extraUrl = url);
      var sendpath = path;
      var sendtext = "?";
      function praseData(data, sendtext) {
        for (var k in data) {
          null === data[k].__proto__ && void 0 === data[k].__proto__ || praseData(data[k], sendtext);
          "?" != sendtext && (sendtext += "&");
          sendtext += k + "=" + data[k];
        }
        return sendtext;
      }
      sendtext = praseData(data, sendtext);
      var requestURL = extraUrl + sendpath + encodeURI(sendtext);
      console.log("RequestURL:" + requestURL);
      xhr.open("GET", requestURL, true);
      cc.sys.isNative && xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
      function retryFunc() {
        sendRequest(path, data, handler, extraUrl);
        outTimes++;
      }
      var timer = setTimeout(function() {
        xhr["hasRetried"] = true;
        xhr.abort();
        console.log("http timeout, retry");
        if (outTimes <= outTimesMax) retryFunc(); else {
          console.log("retry stop, fails!!!");
          outTimes = 0;
        }
      }, 5e3);
      xhr.onreadystatechange = function() {
        console.log("\u5f53 readyState \u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u8c03\u7528\u7684\u5904\u7406\u7a0b\u5e8f");
        clearTimeout(timer);
        var ret = null;
        if (4 === xhr.readyState && xhr.status >= 200 && xhr.status < 300) {
          cc.log("request from [" + xhr.responseURL + "] data [", ret, "]");
          var respText = xhr.responseText;
          try {
            ret = JSON.parse(respText);
          } catch (e) {
            console.log("err:" + e);
            ret = {
              errcode: -10001,
              errmsg: e
            };
          }
          handler && handler(ret);
          handler = null;
        } else if (4 === xhr.readyState) {
          if (xhr["hasRetried"]) return;
          console.log("other readystate == 4, status:" + xhr.status);
          setTimeout(function() {
            retryFunc();
          }, 5e3);
        } else console.log("other readystate:" + xhr.readyState + ", status:" + xhr.status);
      };
      try {
        xhr.send();
      } catch (e) {
        retryFunc();
      }
      return xhr;
    }
    exports.sendRequest = sendRequest;
    cc._RF.pop();
  }, {} ],
  Login: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "83dc1OjAq9HrZaOUilqhv0C", "Login");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Tools_1 = require("../tools/Tools");
    var methodID_1 = require("../tools/methodID");
    var g_Mgr = require("../manager/Global");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Login = function(_super) {
      __extends(Login, _super);
      function Login() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.GameHall = null;
        _this.button = null;
        return _this;
      }
      Login.prototype.start = function() {
        g_Mgr["eventHandle"].addEvent("toGameHall", this.toGameHall.bind(this));
      };
      Login.prototype.onLogin = function() {
        Tools_1.default.log(methodID_1.default.login, "\u83b7\u53d6\u5fae\u4fe1\u767b\u5f55\u6001");
        g_Mgr["userMgr"].wxLogin();
      };
      Login.prototype.toGameHall = function() {
        this.node.active = false;
        this.GameHall.active = true;
      };
      __decorate([ property(cc.Node) ], Login.prototype, "GameHall", void 0);
      __decorate([ property(cc.Button) ], Login.prototype, "button", void 0);
      Login = __decorate([ ccclass ], Login);
      return Login;
    }(cc.Component);
    exports.default = Login;
    cc._RF.pop();
  }, {
    "../manager/Global": "Global",
    "../tools/Tools": "Tools",
    "../tools/methodID": "methodID"
  } ],
  Preset: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1dce9xLrRdKV5I/e0bN0B7i", "Preset");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var g_Mgr = require("../manager/Global");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var preset = function(_super) {
      __extends(preset, _super);
      function preset() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Slider = null;
        _this.playerNumLab = null;
        _this.playerNum = 0;
        return _this;
      }
      preset.prototype.start = function() {};
      preset.prototype.selectPlayerNum = function() {
        var num = 10 * this.Slider.progress;
        var addPlayer = (num / (10 / 6)).toFixed(0);
        this.playerNum = 6 + Number(addPlayer);
        this.playerNumLab.string = String(this.playerNum);
        this.getCard();
      };
      preset.prototype.getCard = function() {
        var req = {
          playerNum: this.playerNumLab.string
        };
        g_Mgr["httpReqMgr"].reqCardOfPreset(req, function(res) {
          console.log("\u6839\u636e\u4eba\u6570\u83b7\u53d6\u672c\u5c40\u89d2\u8272\u8eab\u4efd\u5361");
        });
      };
      preset.prototype.close = function() {
        this.node.active = false;
      };
      __decorate([ property(cc.Slider) ], preset.prototype, "Slider", void 0);
      __decorate([ property(cc.Label) ], preset.prototype, "playerNumLab", void 0);
      preset = __decorate([ ccclass ], preset);
      return preset;
    }(cc.Component);
    exports.default = preset;
    cc._RF.pop();
  }, {
    "../manager/Global": "Global"
  } ],
  RoomMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b945cvDkR9HOIEvCykjLo65", "RoomMgr");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RoomMgr = function(_super) {
      __extends(RoomMgr, _super);
      function RoomMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerScrollView = null;
        _this.roomNum = null;
        _this.player = null;
        _this.playerPool = [];
        return _this;
      }
      RoomMgr.prototype.onLoad = function() {
        this.newPlayerPool();
      };
      RoomMgr.prototype.start = function() {
        this.roomNum.string = "\u5f53\u524d\u623f\u95f4\uff1a";
      };
      RoomMgr.prototype.newPlayerPool = function() {
        for (var i = 0; i < 12; i++) {
          var node = cc.instantiate(this.player);
          this.playerPool.push(node);
        }
      };
      RoomMgr.prototype.playerJoinRoom = function() {};
      __decorate([ property(cc.ScrollView) ], RoomMgr.prototype, "playerScrollView", void 0);
      __decorate([ property(cc.Label) ], RoomMgr.prototype, "roomNum", void 0);
      __decorate([ property(cc.Prefab) ], RoomMgr.prototype, "player", void 0);
      RoomMgr = __decorate([ ccclass ], RoomMgr);
      return RoomMgr;
    }(cc.Component);
    exports.default = RoomMgr;
    cc._RF.pop();
  }, {} ],
  Selfset: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b33571S3sRCCbfBPpaajuYL", "Selfset");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Selfset = function(_super) {
      __extends(Selfset, _super);
      function Selfset() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
      }
      Selfset.prototype.start = function() {};
      Selfset.prototype.close = function() {
        this.node.active = false;
      };
      __decorate([ property(cc.Label) ], Selfset.prototype, "label", void 0);
      Selfset = __decorate([ ccclass ], Selfset);
      return Selfset;
    }(cc.Component);
    exports.default = Selfset;
    cc._RF.pop();
  }, {} ],
  Tools: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "566866QbMRK/ZL72bNRWe+p", "Tools");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Tools = function() {
      function Tools() {}
      Tools.log = function(methodID, msg) {
        if ("string" !== typeof msg || "number" !== typeof methodID) throw new Error("Expected string or number, got right typeof parameters.");
        console.log("mthID:" + methodID + ", msg:" + msg);
      };
      return Tools;
    }();
    exports.default = Tools;
    cc._RF.pop();
  }, {} ],
  UserMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ba67+o+XtJjrHQQ7wo/Z/v", "UserMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var g_Mgr = require("./Global");
    var Tools_1 = require("../tools/Tools");
    var methodID_1 = require("../tools/methodID");
    var UserMgr = function() {
      function UserMgr() {
        this.properties = {
          openid: null,
          name: null,
          avatarUrl: null,
          sex: 0,
          lv: 0,
          exp: 0,
          coins: 0,
          gems: 0,
          sign: 0,
          ip: "",
          roomData: null,
          oldRoomId: null,
          address: {
            country: "",
            province: "",
            city: ""
          }
        };
      }
      UserMgr.prototype.wxLogin = function() {
        var self = this;
        wx.login({
          success: function(res) {
            if (res.code) {
              console.log("res:" + res.code);
              self.getAuthorize();
              g_Mgr["httpReqMgr"].reqWxMiniLogin(res.code, function(data) {
                var extraJson = data.extraJson;
                var ret = data.ret;
                if (0 == ret.retcode) {
                  self.properties.openid = extraJson.openid;
                  console.log("\u83b7\u53d6 openid \u6210\u529f\uff1a" + extraJson.openid);
                } else console.log("\u83b7\u53d6 openid \u5931\u8d25:" + ret.msg);
              });
            } else Tools_1.default.log(methodID_1.default.login, "\u767b\u5f55\u5931\u8d25\uff01" + res.errMsg);
          }
        });
      };
      UserMgr.prototype.getAuthorize = function() {
        var self = this;
        wx.getSetting({
          success: function(res) {
            res.authSetting["scope.record"] || wx.authorize({
              scope: "scope.userInfo",
              success: function() {
                console.log("get userInfo success");
                wx.getUserInfo({
                  success: function(res) {
                    var userInfo = res.userInfo;
                    self.properties.name = userInfo.nickName;
                    self.properties.avatarUrl = userInfo.avatarUrl;
                    self.properties.sex = userInfo.gender;
                    self.properties.address.country = userInfo.country;
                    self.properties.address.province = userInfo.province;
                    self.properties.address.city = userInfo.city;
                    g_Mgr["eventHandle"].emitEvent("setUserInfo");
                    self.saveUserIfo();
                    Tools_1.default.log(methodID_1.default.getUserIfo, "\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u6210\u529f\uff1a" + userInfo);
                  },
                  fail: function(res) {
                    console.log("\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25:" + res);
                  }
                });
              }
            });
          }
        });
      };
      UserMgr.prototype.saveUserIfo = function() {
        g_Mgr["httpReqMgr"].reqWxUserInfo(this.properties, function(res) {
          Tools_1.default.log(methodID_1.default.saveUserIfo, "\u5b58\u50a8" + res.msg);
        });
      };
      return UserMgr;
    }();
    exports.default = UserMgr;
    cc._RF.pop();
  }, {
    "../tools/Tools": "Tools",
    "../tools/methodID": "methodID",
    "./Global": "Global"
  } ],
  methodID: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "adae4jZAWhBIZ4YyMOpQLZD", "methodID");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var methodID = function() {
      function methodID() {}
      methodID.login = 111;
      methodID.getUserIfo = 112;
      methodID.saveUserIfo = 113;
      return methodID;
    }();
    exports.default = methodID;
    cc._RF.pop();
  }, {} ]
}, {}, [ "AppStart", "GameHall", "Login", "Preset", "RoomMgr", "Selfset", "AppMgr", "EventHandle", "Global", "UserMgr", "Http", "HttpReqMgr", "Tools", "methodID" ]);
//# sourceMappingURL=project.dev.js.map
