var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name6 in all)
    __defProp(target, name6, { get: all[name6], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component32) {
  current_component = component32;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component32, name6) {
  if (!component32 || !component32.$$render) {
    if (name6 === "svelte:component")
      name6 += " this={...}";
    throw new Error(`<${name6}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component32;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name6, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name6}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode2;
      var index32 = 0;
      while (index32 < str.length) {
        var eqIdx = str.indexOf("=", index32);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index32);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index32 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index32, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index32 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name6, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name6)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name6 + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode2(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode3) {
      try {
        return decode3(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name6 = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie2 = {
        name: name6,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie2.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie2.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie2.secure = true;
        } else if (key2 === "httponly") {
          cookie2.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie2.sameSite = value2;
        } else {
          cookie2[key2] = value2;
        }
      });
      return cookie2;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name6 = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name6 = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name: name6, value };
    }
    function parse3(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key2) {
          return key2.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          );
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie2 = parseString2(str, options);
          cookies2[cookie2.name] = cookie2;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start2;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start2 = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start2, lastComma));
              start2 = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start2, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/index2.js
function readable(value, start2) {
  return {
    subscribe: writable(value, start2).subscribe
  };
}
function writable(value, start2 = noop) {
  let stop2;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop2) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop2 = start2(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop2();
        stop2 = null;
      }
    };
  }
  return { set, update: update2, subscribe: subscribe2 };
}
var subscriber_queue;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    init_chunks();
    subscriber_queue = [];
  }
});

// .svelte-kit/output/server/chunks/hooks.js
var hooks_exports = {};
var init_hooks = __esm({
  ".svelte-kit/output/server/chunks/hooks.js"() {
  }
});

// .svelte-kit/output/server/chunks/Tag.js
var Tag;
var init_Tag = __esm({
  ".svelte-kit/output/server/chunks/Tag.js"() {
    Tag = class {
      constructor(name6 = "", description = "", postUID = null) {
        this.name = name6;
        this.description = description;
        this.postUID = postUID;
      }
    };
  }
});

// node_modules/@firebase/util/dist/index.esm2017.js
function deepCopy(value) {
  return deepExtend(void 0, value);
}
function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }
  switch (source.constructor) {
    case Date:
      const dateValue = source;
      return new Date(dateValue.getTime());
    case Object:
      if (target === void 0) {
        target = {};
      }
      break;
    case Array:
      target = [];
      break;
    default:
      return source;
  }
  for (const prop in source) {
    if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
      continue;
    }
    target[prop] = deepExtend(target[prop], source[prop]);
  }
  return target;
}
function isValidKey(key2) {
  return key2 !== "__proto__";
}
function getUA() {
  if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
    return navigator["userAgent"];
  } else {
    return "";
  }
}
function isMobileCordova() {
  return typeof window !== "undefined" && !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
function isBrowserExtension() {
  const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
  return typeof runtime === "object" && runtime.id !== void 0;
}
function isReactNative() {
  return typeof navigator === "object" && navigator["product"] === "ReactNative";
}
function isIE() {
  const ua = getUA();
  return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
}
function isNodeSdk() {
  return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
function isIndexedDBAvailable() {
  return typeof indexedDB === "object";
}
function validateIndexedDBOpenable() {
  return new Promise((resolve, reject) => {
    try {
      let preExist = true;
      const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
      const request = self.indexedDB.open(DB_CHECK_NAME);
      request.onsuccess = () => {
        request.result.close();
        if (!preExist) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
        }
        resolve(true);
      };
      request.onupgradeneeded = () => {
        preExist = false;
      };
      request.onerror = () => {
        var _a;
        reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
      };
    } catch (error3) {
      reject(error3);
    }
  });
}
function replaceTemplate(template, data) {
  return template.replace(PATTERN, (_, key2) => {
    const value = data[key2];
    return value != null ? String(value) : `<${key2}?>`;
  });
}
function jsonEval(str) {
  return JSON.parse(str);
}
function stringify(data) {
  return JSON.stringify(data);
}
function contains(obj, key2) {
  return Object.prototype.hasOwnProperty.call(obj, key2);
}
function safeGet(obj, key2) {
  if (Object.prototype.hasOwnProperty.call(obj, key2)) {
    return obj[key2];
  } else {
    return void 0;
  }
}
function isEmpty(obj) {
  for (const key2 in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key2)) {
      return false;
    }
  }
  return true;
}
function map(obj, fn, contextObj) {
  const res = {};
  for (const key2 in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key2)) {
      res[key2] = fn.call(contextObj, obj[key2], key2, obj);
    }
  }
  return res;
}
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  for (const k of aKeys) {
    if (!bKeys.includes(k)) {
      return false;
    }
    const aProp = a[k];
    const bProp = b[k];
    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }
  for (const k of bKeys) {
    if (!aKeys.includes(k)) {
      return false;
    }
  }
  return true;
}
function isObject(thing) {
  return thing !== null && typeof thing === "object";
}
function querystring(querystringParams) {
  const params = [];
  for (const [key2, value] of Object.entries(querystringParams)) {
    if (Array.isArray(value)) {
      value.forEach((arrayVal) => {
        params.push(encodeURIComponent(key2) + "=" + encodeURIComponent(arrayVal));
      });
    } else {
      params.push(encodeURIComponent(key2) + "=" + encodeURIComponent(value));
    }
  }
  return params.length ? "&" + params.join("&") : "";
}
function querystringDecode(querystring2) {
  const obj = {};
  const tokens = querystring2.replace(/^\?/, "").split("&");
  tokens.forEach((token) => {
    if (token) {
      const [key2, value] = token.split("=");
      obj[decodeURIComponent(key2)] = decodeURIComponent(value);
    }
  });
  return obj;
}
function extractQuerystring(url) {
  const queryStart = url.indexOf("?");
  if (!queryStart) {
    return "";
  }
  const fragmentStart = url.indexOf("#", queryStart);
  return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : void 0);
}
function createSubscribe(executor, onNoObservers) {
  const proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
function implementsAnyMethods(obj, methods) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  for (const method of methods) {
    if (method in obj && typeof obj[method] === "function") {
      return true;
    }
  }
  return false;
}
function noop2() {
}
function errorPrefix(fnName, argName) {
  return `${fnName} failed: ${argName} argument `;
}
function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}
var CONSTANTS, assert, assertionError, stringToByteArray$1, byteArrayToString, base642, base64Encode, base64urlEncodeWithoutPadding, base64Decode, Deferred, ERROR_NAME, FirebaseError, ErrorFactory, PATTERN, decode, isValidFormat, isAdmin, Sha1, ObserverProxy, stringToByteArray, stringLength, MAX_VALUE_MILLIS;
var init_index_esm2017 = __esm({
  "node_modules/@firebase/util/dist/index.esm2017.js"() {
    CONSTANTS = {
      NODE_CLIENT: false,
      NODE_ADMIN: false,
      SDK_VERSION: "${JSCORE_VERSION}"
    };
    assert = function(assertion, message) {
      if (!assertion) {
        throw assertionError(message);
      }
    };
    assertionError = function(message) {
      return new Error("Firebase Database (" + CONSTANTS.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + message);
    };
    stringToByteArray$1 = function(str) {
      const out = [];
      let p = 0;
      for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if (c < 128) {
          out[p++] = c;
        } else if (c < 2048) {
          out[p++] = c >> 6 | 192;
          out[p++] = c & 63 | 128;
        } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
          c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
          out[p++] = c >> 18 | 240;
          out[p++] = c >> 12 & 63 | 128;
          out[p++] = c >> 6 & 63 | 128;
          out[p++] = c & 63 | 128;
        } else {
          out[p++] = c >> 12 | 224;
          out[p++] = c >> 6 & 63 | 128;
          out[p++] = c & 63 | 128;
        }
      }
      return out;
    };
    byteArrayToString = function(bytes) {
      const out = [];
      let pos = 0, c = 0;
      while (pos < bytes.length) {
        const c1 = bytes[pos++];
        if (c1 < 128) {
          out[c++] = String.fromCharCode(c1);
        } else if (c1 > 191 && c1 < 224) {
          const c2 = bytes[pos++];
          out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
        } else if (c1 > 239 && c1 < 365) {
          const c2 = bytes[pos++];
          const c3 = bytes[pos++];
          const c4 = bytes[pos++];
          const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
          out[c++] = String.fromCharCode(55296 + (u >> 10));
          out[c++] = String.fromCharCode(56320 + (u & 1023));
        } else {
          const c2 = bytes[pos++];
          const c3 = bytes[pos++];
          out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        }
      }
      return out.join("");
    };
    base642 = {
      byteToCharMap_: null,
      charToByteMap_: null,
      byteToCharMapWebSafe_: null,
      charToByteMapWebSafe_: null,
      ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/=";
      },
      get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_.";
      },
      HAS_NATIVE_SUPPORT: typeof atob === "function",
      encodeByteArray(input, webSafe) {
        if (!Array.isArray(input)) {
          throw Error("encodeByteArray takes an array as a parameter");
        }
        this.init_();
        const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
        const output = [];
        for (let i = 0; i < input.length; i += 3) {
          const byte1 = input[i];
          const haveByte2 = i + 1 < input.length;
          const byte2 = haveByte2 ? input[i + 1] : 0;
          const haveByte3 = i + 2 < input.length;
          const byte3 = haveByte3 ? input[i + 2] : 0;
          const outByte1 = byte1 >> 2;
          const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
          let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
          let outByte4 = byte3 & 63;
          if (!haveByte3) {
            outByte4 = 64;
            if (!haveByte2) {
              outByte3 = 64;
            }
          }
          output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join("");
      },
      encodeString(input, webSafe) {
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
          return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
      },
      decodeString(input, webSafe) {
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
          return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
      },
      decodeStringToByteArray(input, webSafe) {
        this.init_();
        const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
        const output = [];
        for (let i = 0; i < input.length; ) {
          const byte1 = charToByteMap[input.charAt(i++)];
          const haveByte2 = i < input.length;
          const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
          ++i;
          const haveByte3 = i < input.length;
          const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
          ++i;
          const haveByte4 = i < input.length;
          const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
          ++i;
          if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
            throw Error();
          }
          const outByte1 = byte1 << 2 | byte2 >> 4;
          output.push(outByte1);
          if (byte3 !== 64) {
            const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
            output.push(outByte2);
            if (byte4 !== 64) {
              const outByte3 = byte3 << 6 & 192 | byte4;
              output.push(outByte3);
            }
          }
        }
        return output;
      },
      init_() {
        if (!this.byteToCharMap_) {
          this.byteToCharMap_ = {};
          this.charToByteMap_ = {};
          this.byteToCharMapWebSafe_ = {};
          this.charToByteMapWebSafe_ = {};
          for (let i = 0; i < this.ENCODED_VALS.length; i++) {
            this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
            this.charToByteMap_[this.byteToCharMap_[i]] = i;
            this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
            this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
            if (i >= this.ENCODED_VALS_BASE.length) {
              this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
              this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
            }
          }
        }
      }
    };
    base64Encode = function(str) {
      const utf8Bytes = stringToByteArray$1(str);
      return base642.encodeByteArray(utf8Bytes, true);
    };
    base64urlEncodeWithoutPadding = function(str) {
      return base64Encode(str).replace(/\./g, "");
    };
    base64Decode = function(str) {
      try {
        return base642.decodeString(str, true);
      } catch (e) {
        console.error("base64Decode failed: ", e);
      }
      return null;
    };
    Deferred = class {
      constructor() {
        this.reject = () => {
        };
        this.resolve = () => {
        };
        this.promise = new Promise((resolve, reject) => {
          this.resolve = resolve;
          this.reject = reject;
        });
      }
      wrapCallback(callback) {
        return (error3, value) => {
          if (error3) {
            this.reject(error3);
          } else {
            this.resolve(value);
          }
          if (typeof callback === "function") {
            this.promise.catch(() => {
            });
            if (callback.length === 1) {
              callback(error3);
            } else {
              callback(error3, value);
            }
          }
        };
      }
    };
    ERROR_NAME = "FirebaseError";
    FirebaseError = class extends Error {
      constructor(code, message, customData) {
        super(message);
        this.code = code;
        this.customData = customData;
        this.name = ERROR_NAME;
        Object.setPrototypeOf(this, FirebaseError.prototype);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, ErrorFactory.prototype.create);
        }
      }
    };
    ErrorFactory = class {
      constructor(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
      }
      create(code, ...data) {
        const customData = data[0] || {};
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message = template ? replaceTemplate(template, customData) : "Error";
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error3 = new FirebaseError(fullCode, fullMessage, customData);
        return error3;
      }
    };
    PATTERN = /\{\$([^}]+)}/g;
    decode = function(token) {
      let header = {}, claims = {}, data = {}, signature = "";
      try {
        const parts = token.split(".");
        header = jsonEval(base64Decode(parts[0]) || "");
        claims = jsonEval(base64Decode(parts[1]) || "");
        signature = parts[2];
        data = claims["d"] || {};
        delete claims["d"];
      } catch (e) {
      }
      return {
        header,
        claims,
        data,
        signature
      };
    };
    isValidFormat = function(token) {
      const decoded = decode(token), claims = decoded.claims;
      return !!claims && typeof claims === "object" && claims.hasOwnProperty("iat");
    };
    isAdmin = function(token) {
      const claims = decode(token).claims;
      return typeof claims === "object" && claims["admin"] === true;
    };
    Sha1 = class {
      constructor() {
        this.chain_ = [];
        this.buf_ = [];
        this.W_ = [];
        this.pad_ = [];
        this.inbuf_ = 0;
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (let i = 1; i < this.blockSize; ++i) {
          this.pad_[i] = 0;
        }
        this.reset();
      }
      reset() {
        this.chain_[0] = 1732584193;
        this.chain_[1] = 4023233417;
        this.chain_[2] = 2562383102;
        this.chain_[3] = 271733878;
        this.chain_[4] = 3285377520;
        this.inbuf_ = 0;
        this.total_ = 0;
      }
      compress_(buf, offset) {
        if (!offset) {
          offset = 0;
        }
        const W = this.W_;
        if (typeof buf === "string") {
          for (let i = 0; i < 16; i++) {
            W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
            offset += 4;
          }
        } else {
          for (let i = 0; i < 16; i++) {
            W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
            offset += 4;
          }
        }
        for (let i = 16; i < 80; i++) {
          const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
          W[i] = (t << 1 | t >>> 31) & 4294967295;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        for (let i = 0; i < 80; i++) {
          if (i < 40) {
            if (i < 20) {
              f = d ^ b & (c ^ d);
              k = 1518500249;
            } else {
              f = b ^ c ^ d;
              k = 1859775393;
            }
          } else {
            if (i < 60) {
              f = b & c | d & (b | c);
              k = 2400959708;
            } else {
              f = b ^ c ^ d;
              k = 3395469782;
            }
          }
          const t = (a << 5 | a >>> 27) + f + e + k + W[i] & 4294967295;
          e = d;
          d = c;
          c = (b << 30 | b >>> 2) & 4294967295;
          b = a;
          a = t;
        }
        this.chain_[0] = this.chain_[0] + a & 4294967295;
        this.chain_[1] = this.chain_[1] + b & 4294967295;
        this.chain_[2] = this.chain_[2] + c & 4294967295;
        this.chain_[3] = this.chain_[3] + d & 4294967295;
        this.chain_[4] = this.chain_[4] + e & 4294967295;
      }
      update(bytes, length) {
        if (bytes == null) {
          return;
        }
        if (length === void 0) {
          length = bytes.length;
        }
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        while (n < length) {
          if (inbuf === 0) {
            while (n <= lengthMinusBlock) {
              this.compress_(bytes, n);
              n += this.blockSize;
            }
          }
          if (typeof bytes === "string") {
            while (n < length) {
              buf[inbuf] = bytes.charCodeAt(n);
              ++inbuf;
              ++n;
              if (inbuf === this.blockSize) {
                this.compress_(buf);
                inbuf = 0;
                break;
              }
            }
          } else {
            while (n < length) {
              buf[inbuf] = bytes[n];
              ++inbuf;
              ++n;
              if (inbuf === this.blockSize) {
                this.compress_(buf);
                inbuf = 0;
                break;
              }
            }
          }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
      }
      digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        if (this.inbuf_ < 56) {
          this.update(this.pad_, 56 - this.inbuf_);
        } else {
          this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        for (let i = this.blockSize - 1; i >= 56; i--) {
          this.buf_[i] = totalBits & 255;
          totalBits /= 256;
        }
        this.compress_(this.buf_);
        let n = 0;
        for (let i = 0; i < 5; i++) {
          for (let j = 24; j >= 0; j -= 8) {
            digest[n] = this.chain_[i] >> j & 255;
            ++n;
          }
        }
        return digest;
      }
    };
    ObserverProxy = class {
      constructor(executor, onNoObservers) {
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        this.task.then(() => {
          executor(this);
        }).catch((e) => {
          this.error(e);
        });
      }
      next(value) {
        this.forEachObserver((observer) => {
          observer.next(value);
        });
      }
      error(error3) {
        this.forEachObserver((observer) => {
          observer.error(error3);
        });
        this.close(error3);
      }
      complete() {
        this.forEachObserver((observer) => {
          observer.complete();
        });
        this.close();
      }
      subscribe(nextOrObserver, error3, complete) {
        let observer;
        if (nextOrObserver === void 0 && error3 === void 0 && complete === void 0) {
          throw new Error("Missing Observer.");
        }
        if (implementsAnyMethods(nextOrObserver, [
          "next",
          "error",
          "complete"
        ])) {
          observer = nextOrObserver;
        } else {
          observer = {
            next: nextOrObserver,
            error: error3,
            complete
          };
        }
        if (observer.next === void 0) {
          observer.next = noop2;
        }
        if (observer.error === void 0) {
          observer.error = noop2;
        }
        if (observer.complete === void 0) {
          observer.complete = noop2;
        }
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        if (this.finalized) {
          this.task.then(() => {
            try {
              if (this.finalError) {
                observer.error(this.finalError);
              } else {
                observer.complete();
              }
            } catch (e) {
            }
            return;
          });
        }
        this.observers.push(observer);
        return unsub;
      }
      unsubscribeOne(i) {
        if (this.observers === void 0 || this.observers[i] === void 0) {
          return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== void 0) {
          this.onNoObservers(this);
        }
      }
      forEachObserver(fn) {
        if (this.finalized) {
          return;
        }
        for (let i = 0; i < this.observers.length; i++) {
          this.sendOne(i, fn);
        }
      }
      sendOne(i, fn) {
        this.task.then(() => {
          if (this.observers !== void 0 && this.observers[i] !== void 0) {
            try {
              fn(this.observers[i]);
            } catch (e) {
              if (typeof console !== "undefined" && console.error) {
                console.error(e);
              }
            }
          }
        });
      }
      close(err) {
        if (this.finalized) {
          return;
        }
        this.finalized = true;
        if (err !== void 0) {
          this.finalError = err;
        }
        this.task.then(() => {
          this.observers = void 0;
          this.onNoObservers = void 0;
        });
      }
    };
    stringToByteArray = function(str) {
      const out = [];
      let p = 0;
      for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if (c >= 55296 && c <= 56319) {
          const high = c - 55296;
          i++;
          assert(i < str.length, "Surrogate pair missing trail surrogate.");
          const low = str.charCodeAt(i) - 56320;
          c = 65536 + (high << 10) + low;
        }
        if (c < 128) {
          out[p++] = c;
        } else if (c < 2048) {
          out[p++] = c >> 6 | 192;
          out[p++] = c & 63 | 128;
        } else if (c < 65536) {
          out[p++] = c >> 12 | 224;
          out[p++] = c >> 6 & 63 | 128;
          out[p++] = c & 63 | 128;
        } else {
          out[p++] = c >> 18 | 240;
          out[p++] = c >> 12 & 63 | 128;
          out[p++] = c >> 6 & 63 | 128;
          out[p++] = c & 63 | 128;
        }
      }
      return out;
    };
    stringLength = function(str) {
      let p = 0;
      for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        if (c < 128) {
          p++;
        } else if (c < 2048) {
          p += 2;
        } else if (c >= 55296 && c <= 56319) {
          p += 4;
          i++;
        } else {
          p += 3;
        }
      }
      return p;
    };
    MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
  }
});

// node_modules/@firebase/component/dist/esm/index.esm2017.js
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
}
function isComponentEager(component32) {
  return component32.instantiationMode === "EAGER";
}
var Component, DEFAULT_ENTRY_NAME, Provider, ComponentContainer;
var init_index_esm20172 = __esm({
  "node_modules/@firebase/component/dist/esm/index.esm2017.js"() {
    init_index_esm2017();
    Component = class {
      constructor(name6, instanceFactory, type) {
        this.name = name6;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        this.serviceProps = {};
        this.instantiationMode = "LAZY";
        this.onInstanceCreated = null;
      }
      setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
      }
      setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
      }
      setServiceProps(props) {
        this.serviceProps = props;
        return this;
      }
      setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
      }
    };
    DEFAULT_ENTRY_NAME = "[DEFAULT]";
    Provider = class {
      constructor(name6, container) {
        this.name = name6;
        this.container = container;
        this.component = null;
        this.instances = /* @__PURE__ */ new Map();
        this.instancesDeferred = /* @__PURE__ */ new Map();
        this.instancesOptions = /* @__PURE__ */ new Map();
        this.onInitCallbacks = /* @__PURE__ */ new Map();
      }
      get(identifier) {
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
          const deferred = new Deferred();
          this.instancesDeferred.set(normalizedIdentifier, deferred);
          if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
            try {
              const instance = this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier
              });
              if (instance) {
                deferred.resolve(instance);
              }
            } catch (e) {
            }
          }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
      }
      getImmediate(options) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
          try {
            return this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
          } catch (e) {
            if (optional) {
              return null;
            } else {
              throw e;
            }
          }
        } else {
          if (optional) {
            return null;
          } else {
            throw Error(`Service ${this.name} is not available`);
          }
        }
      }
      getComponent() {
        return this.component;
      }
      setComponent(component32) {
        if (component32.name !== this.name) {
          throw Error(`Mismatching Component ${component32.name} for Provider ${this.name}.`);
        }
        if (this.component) {
          throw Error(`Component for ${this.name} has already been provided`);
        }
        this.component = component32;
        if (!this.shouldAutoInitialize()) {
          return;
        }
        if (isComponentEager(component32)) {
          try {
            this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
          } catch (e) {
          }
        }
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
          const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
          try {
            const instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            instanceDeferred.resolve(instance);
          } catch (e) {
          }
        }
      }
      clearInstance(identifier = DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
      }
      async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
          ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
          ...services.filter((service) => "_delete" in service).map((service) => service._delete())
        ]);
      }
      isComponentSet() {
        return this.component != null;
      }
      isInitialized(identifier = DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier);
      }
      getOptions(identifier = DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier) || {};
      }
      initialize(opts = {}) {
        const { options = {} } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
          throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        }
        if (!this.isComponentSet()) {
          throw Error(`Component ${this.name} has not been registered yet`);
        }
        const instance = this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier,
          options
        });
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
          const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
          if (normalizedIdentifier === normalizedDeferredIdentifier) {
            instanceDeferred.resolve(instance);
          }
        }
        return instance;
      }
      onInit(callback, identifier) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
          callback(existingInstance, normalizedIdentifier);
        }
        return () => {
          existingCallbacks.delete(callback);
        };
      }
      invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
          return;
        }
        for (const callback of callbacks) {
          try {
            callback(instance, identifier);
          } catch (_a) {
          }
        }
      }
      getOrInitializeService({ instanceIdentifier, options = {} }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
          instance = this.component.instanceFactory(this.container, {
            instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
            options
          });
          this.instances.set(instanceIdentifier, instance);
          this.instancesOptions.set(instanceIdentifier, options);
          this.invokeOnInitCallbacks(instance, instanceIdentifier);
          if (this.component.onInstanceCreated) {
            try {
              this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
            } catch (_a) {
            }
          }
        }
        return instance || null;
      }
      normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
        if (this.component) {
          return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        } else {
          return identifier;
        }
      }
      shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT";
      }
    };
    ComponentContainer = class {
      constructor(name6) {
        this.name = name6;
        this.providers = /* @__PURE__ */ new Map();
      }
      addComponent(component32) {
        const provider = this.getProvider(component32.name);
        if (provider.isComponentSet()) {
          throw new Error(`Component ${component32.name} has already been registered with ${this.name}`);
        }
        provider.setComponent(component32);
      }
      addOrOverwriteComponent(component32) {
        const provider = this.getProvider(component32.name);
        if (provider.isComponentSet()) {
          this.providers.delete(component32.name);
        }
        this.addComponent(component32);
      }
      getProvider(name6) {
        if (this.providers.has(name6)) {
          return this.providers.get(name6);
        }
        const provider = new Provider(name6, this);
        this.providers.set(name6, provider);
        return provider;
      }
      getProviders() {
        return Array.from(this.providers.values());
      }
    };
  }
});

// node_modules/@firebase/logger/dist/esm/index.esm2017.js
var instances, LogLevel, levelStringToEnum, defaultLogLevel, ConsoleMethod, defaultLogHandler, Logger;
var init_index_esm20173 = __esm({
  "node_modules/@firebase/logger/dist/esm/index.esm2017.js"() {
    instances = [];
    (function(LogLevel2) {
      LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
      LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
      LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
      LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
      LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
      LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
    })(LogLevel || (LogLevel = {}));
    levelStringToEnum = {
      "debug": LogLevel.DEBUG,
      "verbose": LogLevel.VERBOSE,
      "info": LogLevel.INFO,
      "warn": LogLevel.WARN,
      "error": LogLevel.ERROR,
      "silent": LogLevel.SILENT
    };
    defaultLogLevel = LogLevel.INFO;
    ConsoleMethod = {
      [LogLevel.DEBUG]: "log",
      [LogLevel.VERBOSE]: "log",
      [LogLevel.INFO]: "info",
      [LogLevel.WARN]: "warn",
      [LogLevel.ERROR]: "error"
    };
    defaultLogHandler = (instance, logType, ...args) => {
      if (logType < instance.logLevel) {
        return;
      }
      const now = new Date().toISOString();
      const method = ConsoleMethod[logType];
      if (method) {
        console[method](`[${now}]  ${instance.name}:`, ...args);
      } else {
        throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
      }
    };
    Logger = class {
      constructor(name6) {
        this.name = name6;
        this._logLevel = defaultLogLevel;
        this._logHandler = defaultLogHandler;
        this._userLogHandler = null;
        instances.push(this);
      }
      get logLevel() {
        return this._logLevel;
      }
      set logLevel(val) {
        if (!(val in LogLevel)) {
          throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        }
        this._logLevel = val;
      }
      setLogLevel(val) {
        this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
      }
      get logHandler() {
        return this._logHandler;
      }
      set logHandler(val) {
        if (typeof val !== "function") {
          throw new TypeError("Value assigned to `logHandler` must be a function");
        }
        this._logHandler = val;
      }
      get userLogHandler() {
        return this._userLogHandler;
      }
      set userLogHandler(val) {
        this._userLogHandler = val;
      }
      debug(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
      }
      log(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
      }
      info(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
      }
      warn(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
      }
      error(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
      }
    };
  }
});

// node_modules/idb/build/wrap-idb-value.js
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error3);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error3 = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error3);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error3);
      tx.removeEventListener("abort", error3);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error3 = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error3);
    tx.addEventListener("abort", error3);
  });
  transactionDoneMap.set(tx, done);
}
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
var instanceOfAny, idbProxyableTypes, cursorAdvanceMethods, cursorRequestMap, transactionDoneMap, transactionStoreNamesMap, transformCache, reverseTransformCache, idbProxyTraps, unwrap;
var init_wrap_idb_value = __esm({
  "node_modules/idb/build/wrap-idb-value.js"() {
    instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
    cursorRequestMap = /* @__PURE__ */ new WeakMap();
    transactionDoneMap = /* @__PURE__ */ new WeakMap();
    transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
    transformCache = /* @__PURE__ */ new WeakMap();
    reverseTransformCache = /* @__PURE__ */ new WeakMap();
    idbProxyTraps = {
      get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
          if (prop === "done")
            return transactionDoneMap.get(target);
          if (prop === "objectStoreNames") {
            return target.objectStoreNames || transactionStoreNamesMap.get(target);
          }
          if (prop === "store") {
            return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
          }
        }
        return wrap(target[prop]);
      },
      set(target, prop, value) {
        target[prop] = value;
        return true;
      },
      has(target, prop) {
        if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
          return true;
        }
        return prop in target;
      }
    };
    unwrap = (value) => reverseTransformCache.get(value);
  }
});

// node_modules/idb/build/index.js
function openDB(name6, version6, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name6, version6);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction));
    });
  }
  if (blocked)
    request.addEventListener("blocked", () => blocked());
  openPromise.then((db2) => {
    if (terminated)
      db2.addEventListener("close", () => terminated());
    if (blocking)
      db2.addEventListener("versionchange", () => blocking());
  }).catch(() => {
  });
  return openPromise;
}
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
var readMethods, writeMethods, cachedMethods;
var init_build = __esm({
  "node_modules/idb/build/index.js"() {
    init_wrap_idb_value();
    init_wrap_idb_value();
    readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
    writeMethods = ["put", "add", "delete", "clear"];
    cachedMethods = /* @__PURE__ */ new Map();
    replaceTraps((oldTraps) => ({
      ...oldTraps,
      get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
      has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
    }));
  }
});

// node_modules/@firebase/app/dist/esm/index.esm2017.js
function isVersionServiceProvider(provider) {
  const component32 = provider.getComponent();
  return (component32 === null || component32 === void 0 ? void 0 : component32.type) === "VERSION";
}
function _addComponent(app2, component32) {
  try {
    app2.container.addComponent(component32);
  } catch (e) {
    logger.debug(`Component ${component32.name} failed to register with FirebaseApp ${app2.name}`, e);
  }
}
function _registerComponent(component32) {
  const componentName = component32.name;
  if (_components.has(componentName)) {
    logger.debug(`There were multiple attempts to register component ${componentName}.`);
    return false;
  }
  _components.set(componentName, component32);
  for (const app2 of _apps.values()) {
    _addComponent(app2, component32);
  }
  return true;
}
function _getProvider(app2, name6) {
  const heartbeatController = app2.container.getProvider("heartbeat").getImmediate({ optional: true });
  if (heartbeatController) {
    void heartbeatController.triggerHeartbeat();
  }
  return app2.container.getProvider(name6);
}
function initializeApp(options, rawConfig = {}) {
  if (typeof rawConfig !== "object") {
    const name7 = rawConfig;
    rawConfig = { name: name7 };
  }
  const config = Object.assign({ name: DEFAULT_ENTRY_NAME2, automaticDataCollectionEnabled: false }, rawConfig);
  const name6 = config.name;
  if (typeof name6 !== "string" || !name6) {
    throw ERROR_FACTORY.create("bad-app-name", {
      appName: String(name6)
    });
  }
  const existingApp = _apps.get(name6);
  if (existingApp) {
    if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY.create("duplicate-app", { appName: name6 });
    }
  }
  const container = new ComponentContainer(name6);
  for (const component32 of _components.values()) {
    container.addComponent(component32);
  }
  const newApp = new FirebaseAppImpl(options, config, container);
  _apps.set(name6, newApp);
  return newApp;
}
function getApp(name6 = DEFAULT_ENTRY_NAME2) {
  const app2 = _apps.get(name6);
  if (!app2) {
    throw ERROR_FACTORY.create("no-app", { appName: name6 });
  }
  return app2;
}
function registerVersion(libraryKeyOrName, version6, variant) {
  var _a;
  let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
  if (variant) {
    library += `-${variant}`;
  }
  const libraryMismatch = library.match(/\s|\//);
  const versionMismatch = version6.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    const warning = [
      `Unable to register library "${library}" with version "${version6}":`
    ];
    if (libraryMismatch) {
      warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
    }
    if (libraryMismatch && versionMismatch) {
      warning.push("and");
    }
    if (versionMismatch) {
      warning.push(`version name "${version6}" contains illegal characters (whitespace or "/")`);
    }
    logger.warn(warning.join(" "));
    return;
  }
  _registerComponent(new Component(`${library}-version`, () => ({ library, version: version6 }), "VERSION"));
}
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade: (db2, oldVersion) => {
        switch (oldVersion) {
          case 0:
            db2.createObjectStore(STORE_NAME);
        }
      }
    }).catch((e) => {
      throw ERROR_FACTORY.create("idb-open", {
        originalErrorMessage: e.message
      });
    });
  }
  return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app2) {
  var _a;
  try {
    const db2 = await getDbPromise();
    return db2.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app2));
  } catch (e) {
    if (e instanceof FirebaseError) {
      logger.warn(e.message);
    } else {
      const idbGetError = ERROR_FACTORY.create("idb-get", {
        originalErrorMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message
      });
      logger.warn(idbGetError.message);
    }
  }
}
async function writeHeartbeatsToIndexedDB(app2, heartbeatObject) {
  var _a;
  try {
    const db2 = await getDbPromise();
    const tx = db2.transaction(STORE_NAME, "readwrite");
    const objectStore = tx.objectStore(STORE_NAME);
    await objectStore.put(heartbeatObject, computeKey(app2));
    return tx.done;
  } catch (e) {
    if (e instanceof FirebaseError) {
      logger.warn(e.message);
    } else {
      const idbGetError = ERROR_FACTORY.create("idb-set", {
        originalErrorMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message
      });
      logger.warn(idbGetError.message);
    }
  }
}
function computeKey(app2) {
  return `${app2.name}!${app2.options.appId}`;
}
function getUTCDateString() {
  const today = new Date();
  return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
  const heartbeatsToSend = [];
  let unsentEntries = heartbeatsCache.slice();
  for (const singleDateHeartbeat of heartbeatsCache) {
    const heartbeatEntry = heartbeatsToSend.find((hb) => hb.agent === singleDateHeartbeat.agent);
    if (!heartbeatEntry) {
      heartbeatsToSend.push({
        agent: singleDateHeartbeat.agent,
        dates: [singleDateHeartbeat.date]
      });
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatsToSend.pop();
        break;
      }
    } else {
      heartbeatEntry.dates.push(singleDateHeartbeat.date);
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatEntry.dates.pop();
        break;
      }
    }
    unsentEntries = unsentEntries.slice(1);
  }
  return {
    heartbeatsToSend,
    unsentEntries
  };
}
function countBytes(heartbeatsCache) {
  return base64urlEncodeWithoutPadding(
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
  ).length;
}
function registerCoreComponents(variant) {
  _registerComponent(new Component("platform-logger", (container) => new PlatformLoggerServiceImpl(container), "PRIVATE"));
  _registerComponent(new Component("heartbeat", (container) => new HeartbeatServiceImpl(container), "PRIVATE"));
  registerVersion(name$o, version$1, variant);
  registerVersion(name$o, version$1, "esm2017");
  registerVersion("fire-js", "");
}
var PlatformLoggerServiceImpl, name$o, version$1, logger, name$n, name$m, name$l, name$k, name$j, name$i, name$h, name$g, name$f, name$e, name$d, name$c, name$b, name$a, name$9, name$8, name$7, name$6, name$5, name$4, name$3, name$2, name$1, name, version, DEFAULT_ENTRY_NAME2, PLATFORM_LOG_STRING, _apps, _components, ERRORS, ERROR_FACTORY, FirebaseAppImpl, SDK_VERSION, DB_NAME, DB_VERSION, STORE_NAME, dbPromise, MAX_HEADER_BYTES, STORED_HEARTBEAT_RETENTION_MAX_MILLIS, HeartbeatServiceImpl, HeartbeatStorageImpl;
var init_index_esm20174 = __esm({
  "node_modules/@firebase/app/dist/esm/index.esm2017.js"() {
    init_index_esm20172();
    init_index_esm20173();
    init_index_esm2017();
    init_index_esm2017();
    init_build();
    PlatformLoggerServiceImpl = class {
      constructor(container) {
        this.container = container;
      }
      getPlatformInfoString() {
        const providers = this.container.getProviders();
        return providers.map((provider) => {
          if (isVersionServiceProvider(provider)) {
            const service = provider.getImmediate();
            return `${service.library}/${service.version}`;
          } else {
            return null;
          }
        }).filter((logString) => logString).join(" ");
      }
    };
    name$o = "@firebase/app";
    version$1 = "0.7.33";
    logger = new Logger("@firebase/app");
    name$n = "@firebase/app-compat";
    name$m = "@firebase/analytics-compat";
    name$l = "@firebase/analytics";
    name$k = "@firebase/app-check-compat";
    name$j = "@firebase/app-check";
    name$i = "@firebase/auth";
    name$h = "@firebase/auth-compat";
    name$g = "@firebase/database";
    name$f = "@firebase/database-compat";
    name$e = "@firebase/functions";
    name$d = "@firebase/functions-compat";
    name$c = "@firebase/installations";
    name$b = "@firebase/installations-compat";
    name$a = "@firebase/messaging";
    name$9 = "@firebase/messaging-compat";
    name$8 = "@firebase/performance";
    name$7 = "@firebase/performance-compat";
    name$6 = "@firebase/remote-config";
    name$5 = "@firebase/remote-config-compat";
    name$4 = "@firebase/storage";
    name$3 = "@firebase/storage-compat";
    name$2 = "@firebase/firestore";
    name$1 = "@firebase/firestore-compat";
    name = "firebase";
    version = "9.10.0";
    DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
    PLATFORM_LOG_STRING = {
      [name$o]: "fire-core",
      [name$n]: "fire-core-compat",
      [name$l]: "fire-analytics",
      [name$m]: "fire-analytics-compat",
      [name$j]: "fire-app-check",
      [name$k]: "fire-app-check-compat",
      [name$i]: "fire-auth",
      [name$h]: "fire-auth-compat",
      [name$g]: "fire-rtdb",
      [name$f]: "fire-rtdb-compat",
      [name$e]: "fire-fn",
      [name$d]: "fire-fn-compat",
      [name$c]: "fire-iid",
      [name$b]: "fire-iid-compat",
      [name$a]: "fire-fcm",
      [name$9]: "fire-fcm-compat",
      [name$8]: "fire-perf",
      [name$7]: "fire-perf-compat",
      [name$6]: "fire-rc",
      [name$5]: "fire-rc-compat",
      [name$4]: "fire-gcs",
      [name$3]: "fire-gcs-compat",
      [name$2]: "fire-fst",
      [name$1]: "fire-fst-compat",
      "fire-js": "fire-js",
      [name]: "fire-js-all"
    };
    _apps = /* @__PURE__ */ new Map();
    _components = /* @__PURE__ */ new Map();
    ERRORS = {
      ["no-app"]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
      ["bad-app-name"]: "Illegal App name: '{$appName}",
      ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
      ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
      ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
      ["invalid-log-argument"]: "First argument to `onLog` must be null or a function.",
      ["idb-open"]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
      ["idb-get"]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
      ["idb-set"]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
      ["idb-delete"]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
    };
    ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
    FirebaseAppImpl = class {
      constructor(options, config, container) {
        this._isDeleted = false;
        this._options = Object.assign({}, options);
        this._config = Object.assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new Component("app", () => this, "PUBLIC"));
      }
      get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
      }
      set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
      }
      get name() {
        this.checkDestroyed();
        return this._name;
      }
      get options() {
        this.checkDestroyed();
        return this._options;
      }
      get config() {
        this.checkDestroyed();
        return this._config;
      }
      get container() {
        return this._container;
      }
      get isDeleted() {
        return this._isDeleted;
      }
      set isDeleted(val) {
        this._isDeleted = val;
      }
      checkDestroyed() {
        if (this.isDeleted) {
          throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
        }
      }
    };
    SDK_VERSION = version;
    DB_NAME = "firebase-heartbeat-database";
    DB_VERSION = 1;
    STORE_NAME = "firebase-heartbeat-store";
    dbPromise = null;
    MAX_HEADER_BYTES = 1024;
    STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
    HeartbeatServiceImpl = class {
      constructor(container) {
        this.container = container;
        this._heartbeatsCache = null;
        const app2 = this.container.getProvider("app").getImmediate();
        this._storage = new HeartbeatStorageImpl(app2);
        this._heartbeatsCachePromise = this._storage.read().then((result) => {
          this._heartbeatsCache = result;
          return result;
        });
      }
      async triggerHeartbeat() {
        const platformLogger = this.container.getProvider("platform-logger").getImmediate();
        const agent = platformLogger.getPlatformInfoString();
        const date = getUTCDateString();
        if (this._heartbeatsCache === null) {
          this._heartbeatsCache = await this._heartbeatsCachePromise;
        }
        if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
          return;
        } else {
          this._heartbeatsCache.heartbeats.push({ date, agent });
        }
        this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
          const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
          const now = Date.now();
          return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
        });
        return this._storage.overwrite(this._heartbeatsCache);
      }
      async getHeartbeatsHeader() {
        if (this._heartbeatsCache === null) {
          await this._heartbeatsCachePromise;
        }
        if (this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0) {
          return "";
        }
        const date = getUTCDateString();
        const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
        const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
        this._heartbeatsCache.lastSentHeartbeatDate = date;
        if (unsentEntries.length > 0) {
          this._heartbeatsCache.heartbeats = unsentEntries;
          await this._storage.overwrite(this._heartbeatsCache);
        } else {
          this._heartbeatsCache.heartbeats = [];
          void this._storage.overwrite(this._heartbeatsCache);
        }
        return headerString;
      }
    };
    HeartbeatStorageImpl = class {
      constructor(app2) {
        this.app = app2;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
      }
      async runIndexedDBEnvironmentCheck() {
        if (!isIndexedDBAvailable()) {
          return false;
        } else {
          return validateIndexedDBOpenable().then(() => true).catch(() => false);
        }
      }
      async read() {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
          return { heartbeats: [] };
        } else {
          const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
          return idbHeartbeatObject || { heartbeats: [] };
        }
      }
      async overwrite(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
          return;
        } else {
          const existingHeartbeatsObject = await this.read();
          return writeHeartbeatsToIndexedDB(this.app, {
            lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
            heartbeats: heartbeatsObject.heartbeats
          });
        }
      }
      async add(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
          return;
        } else {
          const existingHeartbeatsObject = await this.read();
          return writeHeartbeatsToIndexedDB(this.app, {
            lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
            heartbeats: [
              ...existingHeartbeatsObject.heartbeats,
              ...heartbeatsObject.heartbeats
            ]
          });
        }
      }
    };
    registerCoreComponents("");
  }
});

// node_modules/@firebase/database/dist/index.esm2017.js
function setSDKVersion(version6) {
  SDK_VERSION2 = version6;
}
function each2(obj, fn) {
  for (const key2 in obj) {
    if (obj.hasOwnProperty(key2)) {
      fn(key2, obj[key2]);
    }
  }
}
function errorForServerCode(code, query) {
  let reason = "Unknown Error";
  if (code === "too_big") {
    reason = "The data requested exceeds the maximum size that can be accessed with a single request.";
  } else if (code === "permission_denied") {
    reason = "Client doesn't have permission to access the desired data.";
  } else if (code === "unavailable") {
    reason = "The service is unavailable";
  }
  const error3 = new Error(code + " at " + query._path.toString() + ": " + reason);
  error3.code = code.toUpperCase();
  return error3;
}
function repoInfoNeedsQueryParam(repoInfo) {
  return repoInfo.host !== repoInfo.internalHost || repoInfo.isCustomHost() || repoInfo.includeNamespaceInQueryParams;
}
function repoInfoConnectionURL(repoInfo, type, params) {
  assert(typeof type === "string", "typeof type must == string");
  assert(typeof params === "object", "typeof params must == object");
  let connURL;
  if (type === WEBSOCKET) {
    connURL = (repoInfo.secure ? "wss://" : "ws://") + repoInfo.internalHost + "/.ws?";
  } else if (type === LONG_POLLING) {
    connURL = (repoInfo.secure ? "https://" : "http://") + repoInfo.internalHost + "/.lp?";
  } else {
    throw new Error("Unknown connection type: " + type);
  }
  if (repoInfoNeedsQueryParam(repoInfo)) {
    params["ns"] = repoInfo.namespace;
  }
  const pairs = [];
  each2(params, (key2, value) => {
    pairs.push(key2 + "=" + value);
  });
  return connURL + pairs.join("&");
}
function statsManagerGetCollection(repoInfo) {
  const hashString = repoInfo.toString();
  if (!collections[hashString]) {
    collections[hashString] = new StatsCollection();
  }
  return collections[hashString];
}
function statsManagerGetOrCreateReporter(repoInfo, creatorFunction) {
  const hashString = repoInfo.toString();
  if (!reporters[hashString]) {
    reporters[hashString] = creatorFunction();
  }
  return reporters[hashString];
}
function newEmptyPath() {
  return new Path("");
}
function pathGetFront(path) {
  if (path.pieceNum_ >= path.pieces_.length) {
    return null;
  }
  return path.pieces_[path.pieceNum_];
}
function pathGetLength(path) {
  return path.pieces_.length - path.pieceNum_;
}
function pathPopFront(path) {
  let pieceNum = path.pieceNum_;
  if (pieceNum < path.pieces_.length) {
    pieceNum++;
  }
  return new Path(path.pieces_, pieceNum);
}
function pathGetBack(path) {
  if (path.pieceNum_ < path.pieces_.length) {
    return path.pieces_[path.pieces_.length - 1];
  }
  return null;
}
function pathToUrlEncodedString(path) {
  let pathString = "";
  for (let i = path.pieceNum_; i < path.pieces_.length; i++) {
    if (path.pieces_[i] !== "") {
      pathString += "/" + encodeURIComponent(String(path.pieces_[i]));
    }
  }
  return pathString || "/";
}
function pathSlice(path, begin = 0) {
  return path.pieces_.slice(path.pieceNum_ + begin);
}
function pathParent(path) {
  if (path.pieceNum_ >= path.pieces_.length) {
    return null;
  }
  const pieces = [];
  for (let i = path.pieceNum_; i < path.pieces_.length - 1; i++) {
    pieces.push(path.pieces_[i]);
  }
  return new Path(pieces, 0);
}
function pathChild(path, childPathObj) {
  const pieces = [];
  for (let i = path.pieceNum_; i < path.pieces_.length; i++) {
    pieces.push(path.pieces_[i]);
  }
  if (childPathObj instanceof Path) {
    for (let i = childPathObj.pieceNum_; i < childPathObj.pieces_.length; i++) {
      pieces.push(childPathObj.pieces_[i]);
    }
  } else {
    const childPieces = childPathObj.split("/");
    for (let i = 0; i < childPieces.length; i++) {
      if (childPieces[i].length > 0) {
        pieces.push(childPieces[i]);
      }
    }
  }
  return new Path(pieces, 0);
}
function pathIsEmpty(path) {
  return path.pieceNum_ >= path.pieces_.length;
}
function newRelativePath(outerPath, innerPath) {
  const outer = pathGetFront(outerPath), inner = pathGetFront(innerPath);
  if (outer === null) {
    return innerPath;
  } else if (outer === inner) {
    return newRelativePath(pathPopFront(outerPath), pathPopFront(innerPath));
  } else {
    throw new Error("INTERNAL ERROR: innerPath (" + innerPath + ") is not within outerPath (" + outerPath + ")");
  }
}
function pathCompare(left, right) {
  const leftKeys = pathSlice(left, 0);
  const rightKeys = pathSlice(right, 0);
  for (let i = 0; i < leftKeys.length && i < rightKeys.length; i++) {
    const cmp = nameCompare(leftKeys[i], rightKeys[i]);
    if (cmp !== 0) {
      return cmp;
    }
  }
  if (leftKeys.length === rightKeys.length) {
    return 0;
  }
  return leftKeys.length < rightKeys.length ? -1 : 1;
}
function pathEquals(path, other) {
  if (pathGetLength(path) !== pathGetLength(other)) {
    return false;
  }
  for (let i = path.pieceNum_, j = other.pieceNum_; i <= path.pieces_.length; i++, j++) {
    if (path.pieces_[i] !== other.pieces_[j]) {
      return false;
    }
  }
  return true;
}
function pathContains(path, other) {
  let i = path.pieceNum_;
  let j = other.pieceNum_;
  if (pathGetLength(path) > pathGetLength(other)) {
    return false;
  }
  while (i < path.pieces_.length) {
    if (path.pieces_[i] !== other.pieces_[j]) {
      return false;
    }
    ++i;
    ++j;
  }
  return true;
}
function validationPathPush(validationPath, child2) {
  if (validationPath.parts_.length > 0) {
    validationPath.byteLength_ += 1;
  }
  validationPath.parts_.push(child2);
  validationPath.byteLength_ += stringLength(child2);
  validationPathCheckValid(validationPath);
}
function validationPathPop(validationPath) {
  const last = validationPath.parts_.pop();
  validationPath.byteLength_ -= stringLength(last);
  if (validationPath.parts_.length > 0) {
    validationPath.byteLength_ -= 1;
  }
}
function validationPathCheckValid(validationPath) {
  if (validationPath.byteLength_ > MAX_PATH_LENGTH_BYTES) {
    throw new Error(validationPath.errorPrefix_ + "has a key path longer than " + MAX_PATH_LENGTH_BYTES + " bytes (" + validationPath.byteLength_ + ").");
  }
  if (validationPath.parts_.length > MAX_PATH_DEPTH) {
    throw new Error(validationPath.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + MAX_PATH_DEPTH + ") or object contains a cycle " + validationPathToErrorString(validationPath));
  }
}
function validationPathToErrorString(validationPath) {
  if (validationPath.parts_.length === 0) {
    return "";
  }
  return "in property '" + validationPath.parts_.join(".") + "'";
}
function NAME_ONLY_COMPARATOR(left, right) {
  return nameCompare(left.name, right.name);
}
function NAME_COMPARATOR(left, right) {
  return nameCompare(left, right);
}
function setMaxNode$1(val) {
  MAX_NODE$2 = val;
}
function setNodeFromJSON(val) {
  nodeFromJSON$1 = val;
}
function setMaxNode(val) {
  MAX_NODE$1 = val;
}
function nodeFromJSON(json2, priority = null) {
  if (json2 === null) {
    return ChildrenNode.EMPTY_NODE;
  }
  if (typeof json2 === "object" && ".priority" in json2) {
    priority = json2[".priority"];
  }
  assert(priority === null || typeof priority === "string" || typeof priority === "number" || typeof priority === "object" && ".sv" in priority, "Invalid priority type found: " + typeof priority);
  if (typeof json2 === "object" && ".value" in json2 && json2[".value"] !== null) {
    json2 = json2[".value"];
  }
  if (typeof json2 !== "object" || ".sv" in json2) {
    const jsonLeaf = json2;
    return new LeafNode(jsonLeaf, nodeFromJSON(priority));
  }
  if (!(json2 instanceof Array) && USE_HINZE) {
    const children = [];
    let childrenHavePriority = false;
    const hinzeJsonObj = json2;
    each2(hinzeJsonObj, (key2, child2) => {
      if (key2.substring(0, 1) !== ".") {
        const childNode = nodeFromJSON(child2);
        if (!childNode.isEmpty()) {
          childrenHavePriority = childrenHavePriority || !childNode.getPriority().isEmpty();
          children.push(new NamedNode(key2, childNode));
        }
      }
    });
    if (children.length === 0) {
      return ChildrenNode.EMPTY_NODE;
    }
    const childSet = buildChildSet(children, NAME_ONLY_COMPARATOR, (namedNode) => namedNode.name, NAME_COMPARATOR);
    if (childrenHavePriority) {
      const sortedChildSet = buildChildSet(children, PRIORITY_INDEX.getCompare());
      return new ChildrenNode(childSet, nodeFromJSON(priority), new IndexMap({ ".priority": sortedChildSet }, { ".priority": PRIORITY_INDEX }));
    } else {
      return new ChildrenNode(childSet, nodeFromJSON(priority), IndexMap.Default);
    }
  } else {
    let node = ChildrenNode.EMPTY_NODE;
    each2(json2, (key2, childData) => {
      if (contains(json2, key2)) {
        if (key2.substring(0, 1) !== ".") {
          const childNode = nodeFromJSON(childData);
          if (childNode.isLeafNode() || !childNode.isEmpty()) {
            node = node.updateImmediateChild(key2, childNode);
          }
        }
      }
    });
    return node.updatePriority(nodeFromJSON(priority));
  }
}
function changeValue(snapshotNode) {
  return { type: "value", snapshotNode };
}
function changeChildAdded(childName, snapshotNode) {
  return { type: "child_added", snapshotNode, childName };
}
function changeChildRemoved(childName, snapshotNode) {
  return { type: "child_removed", snapshotNode, childName };
}
function changeChildChanged(childName, snapshotNode, oldSnap) {
  return {
    type: "child_changed",
    snapshotNode,
    childName,
    oldSnap
  };
}
function changeChildMoved(childName, snapshotNode) {
  return { type: "child_moved", snapshotNode, childName };
}
function queryParamsGetNodeFilter(queryParams) {
  if (queryParams.loadsAllData()) {
    return new IndexedFilter(queryParams.getIndex());
  } else if (queryParams.hasLimit()) {
    return new LimitedFilter(queryParams);
  } else {
    return new RangedFilter(queryParams);
  }
}
function queryParamsToRestQueryStringParameters(queryParams) {
  const qs = {};
  if (queryParams.isDefault()) {
    return qs;
  }
  let orderBy;
  if (queryParams.index_ === PRIORITY_INDEX) {
    orderBy = "$priority";
  } else if (queryParams.index_ === VALUE_INDEX) {
    orderBy = "$value";
  } else if (queryParams.index_ === KEY_INDEX) {
    orderBy = "$key";
  } else {
    assert(queryParams.index_ instanceof PathIndex, "Unrecognized index type!");
    orderBy = queryParams.index_.toString();
  }
  qs["orderBy"] = stringify(orderBy);
  if (queryParams.startSet_) {
    qs["startAt"] = stringify(queryParams.indexStartValue_);
    if (queryParams.startNameSet_) {
      qs["startAt"] += "," + stringify(queryParams.indexStartName_);
    }
  }
  if (queryParams.endSet_) {
    qs["endAt"] = stringify(queryParams.indexEndValue_);
    if (queryParams.endNameSet_) {
      qs["endAt"] += "," + stringify(queryParams.indexEndName_);
    }
  }
  if (queryParams.limitSet_) {
    if (queryParams.isViewFromLeft()) {
      qs["limitToFirst"] = queryParams.limit_;
    } else {
      qs["limitToLast"] = queryParams.limit_;
    }
  }
  return qs;
}
function queryParamsGetQueryObject(queryParams) {
  const obj = {};
  if (queryParams.startSet_) {
    obj["sp"] = queryParams.indexStartValue_;
    if (queryParams.startNameSet_) {
      obj["sn"] = queryParams.indexStartName_;
    }
  }
  if (queryParams.endSet_) {
    obj["ep"] = queryParams.indexEndValue_;
    if (queryParams.endNameSet_) {
      obj["en"] = queryParams.indexEndName_;
    }
  }
  if (queryParams.limitSet_) {
    obj["l"] = queryParams.limit_;
    let viewFrom = queryParams.viewFrom_;
    if (viewFrom === "") {
      if (queryParams.isViewFromLeft()) {
        viewFrom = "l";
      } else {
        viewFrom = "r";
      }
    }
    obj["vf"] = viewFrom;
  }
  if (queryParams.index_ !== PRIORITY_INDEX) {
    obj["i"] = queryParams.index_.toString();
  }
  return obj;
}
function newSparseSnapshotTree() {
  return {
    value: null,
    children: /* @__PURE__ */ new Map()
  };
}
function sparseSnapshotTreeRemember(sparseSnapshotTree, path, data) {
  if (pathIsEmpty(path)) {
    sparseSnapshotTree.value = data;
    sparseSnapshotTree.children.clear();
  } else if (sparseSnapshotTree.value !== null) {
    sparseSnapshotTree.value = sparseSnapshotTree.value.updateChild(path, data);
  } else {
    const childKey = pathGetFront(path);
    if (!sparseSnapshotTree.children.has(childKey)) {
      sparseSnapshotTree.children.set(childKey, newSparseSnapshotTree());
    }
    const child2 = sparseSnapshotTree.children.get(childKey);
    path = pathPopFront(path);
    sparseSnapshotTreeRemember(child2, path, data);
  }
}
function sparseSnapshotTreeForEachTree(sparseSnapshotTree, prefixPath, func) {
  if (sparseSnapshotTree.value !== null) {
    func(prefixPath, sparseSnapshotTree.value);
  } else {
    sparseSnapshotTreeForEachChild(sparseSnapshotTree, (key2, tree) => {
      const path = new Path(prefixPath.toString() + "/" + key2);
      sparseSnapshotTreeForEachTree(tree, path, func);
    });
  }
}
function sparseSnapshotTreeForEachChild(sparseSnapshotTree, func) {
  sparseSnapshotTree.children.forEach((tree, key2) => {
    func(key2, tree);
  });
}
function newOperationSourceUser() {
  return {
    fromUser: true,
    fromServer: false,
    queryId: null,
    tagged: false
  };
}
function newOperationSourceServer() {
  return {
    fromUser: false,
    fromServer: true,
    queryId: null,
    tagged: false
  };
}
function newOperationSourceServerTaggedQuery(queryId) {
  return {
    fromUser: false,
    fromServer: true,
    queryId,
    tagged: true
  };
}
function eventGeneratorGenerateEventsForChanges(eventGenerator, changes, eventCache, eventRegistrations) {
  const events = [];
  const moves = [];
  changes.forEach((change) => {
    if (change.type === "child_changed" && eventGenerator.index_.indexedValueChanged(change.oldSnap, change.snapshotNode)) {
      moves.push(changeChildMoved(change.childName, change.snapshotNode));
    }
  });
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_removed", changes, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_added", changes, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_moved", moves, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_changed", changes, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "value", changes, eventRegistrations, eventCache);
  return events;
}
function eventGeneratorGenerateEventsForType(eventGenerator, events, eventType, changes, registrations, eventCache) {
  const filteredChanges = changes.filter((change) => change.type === eventType);
  filteredChanges.sort((a, b) => eventGeneratorCompareChanges(eventGenerator, a, b));
  filteredChanges.forEach((change) => {
    const materializedChange = eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache);
    registrations.forEach((registration) => {
      if (registration.respondsTo(change.type)) {
        events.push(registration.createEvent(materializedChange, eventGenerator.query_));
      }
    });
  });
}
function eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache) {
  if (change.type === "value" || change.type === "child_removed") {
    return change;
  } else {
    change.prevName = eventCache.getPredecessorChildName(change.childName, change.snapshotNode, eventGenerator.index_);
    return change;
  }
}
function eventGeneratorCompareChanges(eventGenerator, a, b) {
  if (a.childName == null || b.childName == null) {
    throw assertionError("Should only compare child_ events.");
  }
  const aWrapped = new NamedNode(a.childName, a.snapshotNode);
  const bWrapped = new NamedNode(b.childName, b.snapshotNode);
  return eventGenerator.index_.compare(aWrapped, bWrapped);
}
function newViewCache(eventCache, serverCache) {
  return { eventCache, serverCache };
}
function viewCacheUpdateEventSnap(viewCache, eventSnap, complete, filtered) {
  return newViewCache(new CacheNode(eventSnap, complete, filtered), viewCache.serverCache);
}
function viewCacheUpdateServerSnap(viewCache, serverSnap, complete, filtered) {
  return newViewCache(viewCache.eventCache, new CacheNode(serverSnap, complete, filtered));
}
function viewCacheGetCompleteEventSnap(viewCache) {
  return viewCache.eventCache.isFullyInitialized() ? viewCache.eventCache.getNode() : null;
}
function viewCacheGetCompleteServerSnap(viewCache) {
  return viewCache.serverCache.isFullyInitialized() ? viewCache.serverCache.getNode() : null;
}
function compoundWriteAddWrite(compoundWrite, path, node) {
  if (pathIsEmpty(path)) {
    return new CompoundWrite(new ImmutableTree(node));
  } else {
    const rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path);
    if (rootmost != null) {
      const rootMostPath = rootmost.path;
      let value = rootmost.value;
      const relativePath = newRelativePath(rootMostPath, path);
      value = value.updateChild(relativePath, node);
      return new CompoundWrite(compoundWrite.writeTree_.set(rootMostPath, value));
    } else {
      const subtree = new ImmutableTree(node);
      const newWriteTree2 = compoundWrite.writeTree_.setTree(path, subtree);
      return new CompoundWrite(newWriteTree2);
    }
  }
}
function compoundWriteAddWrites(compoundWrite, path, updates) {
  let newWrite = compoundWrite;
  each2(updates, (childKey, node) => {
    newWrite = compoundWriteAddWrite(newWrite, pathChild(path, childKey), node);
  });
  return newWrite;
}
function compoundWriteRemoveWrite(compoundWrite, path) {
  if (pathIsEmpty(path)) {
    return CompoundWrite.empty();
  } else {
    const newWriteTree2 = compoundWrite.writeTree_.setTree(path, new ImmutableTree(null));
    return new CompoundWrite(newWriteTree2);
  }
}
function compoundWriteHasCompleteWrite(compoundWrite, path) {
  return compoundWriteGetCompleteNode(compoundWrite, path) != null;
}
function compoundWriteGetCompleteNode(compoundWrite, path) {
  const rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path);
  if (rootmost != null) {
    return compoundWrite.writeTree_.get(rootmost.path).getChild(newRelativePath(rootmost.path, path));
  } else {
    return null;
  }
}
function compoundWriteGetCompleteChildren(compoundWrite) {
  const children = [];
  const node = compoundWrite.writeTree_.value;
  if (node != null) {
    if (!node.isLeafNode()) {
      node.forEachChild(PRIORITY_INDEX, (childName, childNode) => {
        children.push(new NamedNode(childName, childNode));
      });
    }
  } else {
    compoundWrite.writeTree_.children.inorderTraversal((childName, childTree) => {
      if (childTree.value != null) {
        children.push(new NamedNode(childName, childTree.value));
      }
    });
  }
  return children;
}
function compoundWriteChildCompoundWrite(compoundWrite, path) {
  if (pathIsEmpty(path)) {
    return compoundWrite;
  } else {
    const shadowingNode = compoundWriteGetCompleteNode(compoundWrite, path);
    if (shadowingNode != null) {
      return new CompoundWrite(new ImmutableTree(shadowingNode));
    } else {
      return new CompoundWrite(compoundWrite.writeTree_.subtree(path));
    }
  }
}
function compoundWriteIsEmpty(compoundWrite) {
  return compoundWrite.writeTree_.isEmpty();
}
function compoundWriteApply(compoundWrite, node) {
  return applySubtreeWrite(newEmptyPath(), compoundWrite.writeTree_, node);
}
function applySubtreeWrite(relativePath, writeTree, node) {
  if (writeTree.value != null) {
    return node.updateChild(relativePath, writeTree.value);
  } else {
    let priorityWrite = null;
    writeTree.children.inorderTraversal((childKey, childTree) => {
      if (childKey === ".priority") {
        assert(childTree.value !== null, "Priority writes must always be leaf nodes");
        priorityWrite = childTree.value;
      } else {
        node = applySubtreeWrite(pathChild(relativePath, childKey), childTree, node);
      }
    });
    if (!node.getChild(relativePath).isEmpty() && priorityWrite !== null) {
      node = node.updateChild(pathChild(relativePath, ".priority"), priorityWrite);
    }
    return node;
  }
}
function writeTreeChildWrites(writeTree, path) {
  return newWriteTreeRef(path, writeTree);
}
function writeTreeAddOverwrite(writeTree, path, snap, writeId, visible) {
  assert(writeId > writeTree.lastWriteId, "Stacking an older write on top of newer ones");
  if (visible === void 0) {
    visible = true;
  }
  writeTree.allWrites.push({
    path,
    snap,
    writeId,
    visible
  });
  if (visible) {
    writeTree.visibleWrites = compoundWriteAddWrite(writeTree.visibleWrites, path, snap);
  }
  writeTree.lastWriteId = writeId;
}
function writeTreeAddMerge(writeTree, path, changedChildren, writeId) {
  assert(writeId > writeTree.lastWriteId, "Stacking an older merge on top of newer ones");
  writeTree.allWrites.push({
    path,
    children: changedChildren,
    writeId,
    visible: true
  });
  writeTree.visibleWrites = compoundWriteAddWrites(writeTree.visibleWrites, path, changedChildren);
  writeTree.lastWriteId = writeId;
}
function writeTreeGetWrite(writeTree, writeId) {
  for (let i = 0; i < writeTree.allWrites.length; i++) {
    const record = writeTree.allWrites[i];
    if (record.writeId === writeId) {
      return record;
    }
  }
  return null;
}
function writeTreeRemoveWrite(writeTree, writeId) {
  const idx = writeTree.allWrites.findIndex((s2) => {
    return s2.writeId === writeId;
  });
  assert(idx >= 0, "removeWrite called with nonexistent writeId.");
  const writeToRemove = writeTree.allWrites[idx];
  writeTree.allWrites.splice(idx, 1);
  let removedWriteWasVisible = writeToRemove.visible;
  let removedWriteOverlapsWithOtherWrites = false;
  let i = writeTree.allWrites.length - 1;
  while (removedWriteWasVisible && i >= 0) {
    const currentWrite = writeTree.allWrites[i];
    if (currentWrite.visible) {
      if (i >= idx && writeTreeRecordContainsPath_(currentWrite, writeToRemove.path)) {
        removedWriteWasVisible = false;
      } else if (pathContains(writeToRemove.path, currentWrite.path)) {
        removedWriteOverlapsWithOtherWrites = true;
      }
    }
    i--;
  }
  if (!removedWriteWasVisible) {
    return false;
  } else if (removedWriteOverlapsWithOtherWrites) {
    writeTreeResetTree_(writeTree);
    return true;
  } else {
    if (writeToRemove.snap) {
      writeTree.visibleWrites = compoundWriteRemoveWrite(writeTree.visibleWrites, writeToRemove.path);
    } else {
      const children = writeToRemove.children;
      each2(children, (childName) => {
        writeTree.visibleWrites = compoundWriteRemoveWrite(writeTree.visibleWrites, pathChild(writeToRemove.path, childName));
      });
    }
    return true;
  }
}
function writeTreeRecordContainsPath_(writeRecord, path) {
  if (writeRecord.snap) {
    return pathContains(writeRecord.path, path);
  } else {
    for (const childName in writeRecord.children) {
      if (writeRecord.children.hasOwnProperty(childName) && pathContains(pathChild(writeRecord.path, childName), path)) {
        return true;
      }
    }
    return false;
  }
}
function writeTreeResetTree_(writeTree) {
  writeTree.visibleWrites = writeTreeLayerTree_(writeTree.allWrites, writeTreeDefaultFilter_, newEmptyPath());
  if (writeTree.allWrites.length > 0) {
    writeTree.lastWriteId = writeTree.allWrites[writeTree.allWrites.length - 1].writeId;
  } else {
    writeTree.lastWriteId = -1;
  }
}
function writeTreeDefaultFilter_(write) {
  return write.visible;
}
function writeTreeLayerTree_(writes, filter, treeRoot) {
  let compoundWrite = CompoundWrite.empty();
  for (let i = 0; i < writes.length; ++i) {
    const write = writes[i];
    if (filter(write)) {
      const writePath = write.path;
      let relativePath;
      if (write.snap) {
        if (pathContains(treeRoot, writePath)) {
          relativePath = newRelativePath(treeRoot, writePath);
          compoundWrite = compoundWriteAddWrite(compoundWrite, relativePath, write.snap);
        } else if (pathContains(writePath, treeRoot)) {
          relativePath = newRelativePath(writePath, treeRoot);
          compoundWrite = compoundWriteAddWrite(compoundWrite, newEmptyPath(), write.snap.getChild(relativePath));
        } else
          ;
      } else if (write.children) {
        if (pathContains(treeRoot, writePath)) {
          relativePath = newRelativePath(treeRoot, writePath);
          compoundWrite = compoundWriteAddWrites(compoundWrite, relativePath, write.children);
        } else if (pathContains(writePath, treeRoot)) {
          relativePath = newRelativePath(writePath, treeRoot);
          if (pathIsEmpty(relativePath)) {
            compoundWrite = compoundWriteAddWrites(compoundWrite, newEmptyPath(), write.children);
          } else {
            const child2 = safeGet(write.children, pathGetFront(relativePath));
            if (child2) {
              const deepNode = child2.getChild(pathPopFront(relativePath));
              compoundWrite = compoundWriteAddWrite(compoundWrite, newEmptyPath(), deepNode);
            }
          }
        } else
          ;
      } else {
        throw assertionError("WriteRecord should have .snap or .children");
      }
    }
  }
  return compoundWrite;
}
function writeTreeCalcCompleteEventCache(writeTree, treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
  if (!writeIdsToExclude && !includeHiddenWrites) {
    const shadowingNode = compoundWriteGetCompleteNode(writeTree.visibleWrites, treePath);
    if (shadowingNode != null) {
      return shadowingNode;
    } else {
      const subMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
      if (compoundWriteIsEmpty(subMerge)) {
        return completeServerCache;
      } else if (completeServerCache == null && !compoundWriteHasCompleteWrite(subMerge, newEmptyPath())) {
        return null;
      } else {
        const layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
        return compoundWriteApply(subMerge, layeredCache);
      }
    }
  } else {
    const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
    if (!includeHiddenWrites && compoundWriteIsEmpty(merge)) {
      return completeServerCache;
    } else {
      if (!includeHiddenWrites && completeServerCache == null && !compoundWriteHasCompleteWrite(merge, newEmptyPath())) {
        return null;
      } else {
        const filter = function(write) {
          return (write.visible || includeHiddenWrites) && (!writeIdsToExclude || !~writeIdsToExclude.indexOf(write.writeId)) && (pathContains(write.path, treePath) || pathContains(treePath, write.path));
        };
        const mergeAtPath = writeTreeLayerTree_(writeTree.allWrites, filter, treePath);
        const layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
        return compoundWriteApply(mergeAtPath, layeredCache);
      }
    }
  }
}
function writeTreeCalcCompleteEventChildren(writeTree, treePath, completeServerChildren) {
  let completeChildren = ChildrenNode.EMPTY_NODE;
  const topLevelSet = compoundWriteGetCompleteNode(writeTree.visibleWrites, treePath);
  if (topLevelSet) {
    if (!topLevelSet.isLeafNode()) {
      topLevelSet.forEachChild(PRIORITY_INDEX, (childName, childSnap) => {
        completeChildren = completeChildren.updateImmediateChild(childName, childSnap);
      });
    }
    return completeChildren;
  } else if (completeServerChildren) {
    const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
    completeServerChildren.forEachChild(PRIORITY_INDEX, (childName, childNode) => {
      const node = compoundWriteApply(compoundWriteChildCompoundWrite(merge, new Path(childName)), childNode);
      completeChildren = completeChildren.updateImmediateChild(childName, node);
    });
    compoundWriteGetCompleteChildren(merge).forEach((namedNode) => {
      completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
    });
    return completeChildren;
  } else {
    const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
    compoundWriteGetCompleteChildren(merge).forEach((namedNode) => {
      completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
    });
    return completeChildren;
  }
}
function writeTreeCalcEventCacheAfterServerOverwrite(writeTree, treePath, childPath, existingEventSnap, existingServerSnap) {
  assert(existingEventSnap || existingServerSnap, "Either existingEventSnap or existingServerSnap must exist");
  const path = pathChild(treePath, childPath);
  if (compoundWriteHasCompleteWrite(writeTree.visibleWrites, path)) {
    return null;
  } else {
    const childMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, path);
    if (compoundWriteIsEmpty(childMerge)) {
      return existingServerSnap.getChild(childPath);
    } else {
      return compoundWriteApply(childMerge, existingServerSnap.getChild(childPath));
    }
  }
}
function writeTreeCalcCompleteChild(writeTree, treePath, childKey, existingServerSnap) {
  const path = pathChild(treePath, childKey);
  const shadowingNode = compoundWriteGetCompleteNode(writeTree.visibleWrites, path);
  if (shadowingNode != null) {
    return shadowingNode;
  } else {
    if (existingServerSnap.isCompleteForChild(childKey)) {
      const childMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, path);
      return compoundWriteApply(childMerge, existingServerSnap.getNode().getImmediateChild(childKey));
    } else {
      return null;
    }
  }
}
function writeTreeShadowingWrite(writeTree, path) {
  return compoundWriteGetCompleteNode(writeTree.visibleWrites, path);
}
function writeTreeCalcIndexedSlice(writeTree, treePath, completeServerData, startPost, count, reverse, index32) {
  let toIterate;
  const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
  const shadowingNode = compoundWriteGetCompleteNode(merge, newEmptyPath());
  if (shadowingNode != null) {
    toIterate = shadowingNode;
  } else if (completeServerData != null) {
    toIterate = compoundWriteApply(merge, completeServerData);
  } else {
    return [];
  }
  toIterate = toIterate.withIndex(index32);
  if (!toIterate.isEmpty() && !toIterate.isLeafNode()) {
    const nodes = [];
    const cmp = index32.getCompare();
    const iter = reverse ? toIterate.getReverseIteratorFrom(startPost, index32) : toIterate.getIteratorFrom(startPost, index32);
    let next = iter.getNext();
    while (next && nodes.length < count) {
      if (cmp(next, startPost) !== 0) {
        nodes.push(next);
      }
      next = iter.getNext();
    }
    return nodes;
  } else {
    return [];
  }
}
function newWriteTree() {
  return {
    visibleWrites: CompoundWrite.empty(),
    allWrites: [],
    lastWriteId: -1
  };
}
function writeTreeRefCalcCompleteEventCache(writeTreeRef, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
  return writeTreeCalcCompleteEventCache(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites);
}
function writeTreeRefCalcCompleteEventChildren(writeTreeRef, completeServerChildren) {
  return writeTreeCalcCompleteEventChildren(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerChildren);
}
function writeTreeRefCalcEventCacheAfterServerOverwrite(writeTreeRef, path, existingEventSnap, existingServerSnap) {
  return writeTreeCalcEventCacheAfterServerOverwrite(writeTreeRef.writeTree, writeTreeRef.treePath, path, existingEventSnap, existingServerSnap);
}
function writeTreeRefShadowingWrite(writeTreeRef, path) {
  return writeTreeShadowingWrite(writeTreeRef.writeTree, pathChild(writeTreeRef.treePath, path));
}
function writeTreeRefCalcIndexedSlice(writeTreeRef, completeServerData, startPost, count, reverse, index32) {
  return writeTreeCalcIndexedSlice(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerData, startPost, count, reverse, index32);
}
function writeTreeRefCalcCompleteChild(writeTreeRef, childKey, existingServerCache) {
  return writeTreeCalcCompleteChild(writeTreeRef.writeTree, writeTreeRef.treePath, childKey, existingServerCache);
}
function writeTreeRefChild(writeTreeRef, childName) {
  return newWriteTreeRef(pathChild(writeTreeRef.treePath, childName), writeTreeRef.writeTree);
}
function newWriteTreeRef(path, writeTree) {
  return {
    treePath: path,
    writeTree
  };
}
function newViewProcessor(filter) {
  return { filter };
}
function viewProcessorAssertIndexed(viewProcessor, viewCache) {
  assert(viewCache.eventCache.getNode().isIndexed(viewProcessor.filter.getIndex()), "Event snap not indexed");
  assert(viewCache.serverCache.getNode().isIndexed(viewProcessor.filter.getIndex()), "Server snap not indexed");
}
function viewProcessorApplyOperation(viewProcessor, oldViewCache, operation, writesCache, completeCache) {
  const accumulator = new ChildChangeAccumulator();
  let newViewCache2, filterServerNode;
  if (operation.type === OperationType.OVERWRITE) {
    const overwrite = operation;
    if (overwrite.source.fromUser) {
      newViewCache2 = viewProcessorApplyUserOverwrite(viewProcessor, oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, accumulator);
    } else {
      assert(overwrite.source.fromServer, "Unknown source.");
      filterServerNode = overwrite.source.tagged || oldViewCache.serverCache.isFiltered() && !pathIsEmpty(overwrite.path);
      newViewCache2 = viewProcessorApplyServerOverwrite(viewProcessor, oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, filterServerNode, accumulator);
    }
  } else if (operation.type === OperationType.MERGE) {
    const merge = operation;
    if (merge.source.fromUser) {
      newViewCache2 = viewProcessorApplyUserMerge(viewProcessor, oldViewCache, merge.path, merge.children, writesCache, completeCache, accumulator);
    } else {
      assert(merge.source.fromServer, "Unknown source.");
      filterServerNode = merge.source.tagged || oldViewCache.serverCache.isFiltered();
      newViewCache2 = viewProcessorApplyServerMerge(viewProcessor, oldViewCache, merge.path, merge.children, writesCache, completeCache, filterServerNode, accumulator);
    }
  } else if (operation.type === OperationType.ACK_USER_WRITE) {
    const ackUserWrite = operation;
    if (!ackUserWrite.revert) {
      newViewCache2 = viewProcessorAckUserWrite(viewProcessor, oldViewCache, ackUserWrite.path, ackUserWrite.affectedTree, writesCache, completeCache, accumulator);
    } else {
      newViewCache2 = viewProcessorRevertUserWrite(viewProcessor, oldViewCache, ackUserWrite.path, writesCache, completeCache, accumulator);
    }
  } else if (operation.type === OperationType.LISTEN_COMPLETE) {
    newViewCache2 = viewProcessorListenComplete(viewProcessor, oldViewCache, operation.path, writesCache, accumulator);
  } else {
    throw assertionError("Unknown operation type: " + operation.type);
  }
  const changes = accumulator.getChanges();
  viewProcessorMaybeAddValueEvent(oldViewCache, newViewCache2, changes);
  return { viewCache: newViewCache2, changes };
}
function viewProcessorMaybeAddValueEvent(oldViewCache, newViewCache2, accumulator) {
  const eventSnap = newViewCache2.eventCache;
  if (eventSnap.isFullyInitialized()) {
    const isLeafOrEmpty = eventSnap.getNode().isLeafNode() || eventSnap.getNode().isEmpty();
    const oldCompleteSnap = viewCacheGetCompleteEventSnap(oldViewCache);
    if (accumulator.length > 0 || !oldViewCache.eventCache.isFullyInitialized() || isLeafOrEmpty && !eventSnap.getNode().equals(oldCompleteSnap) || !eventSnap.getNode().getPriority().equals(oldCompleteSnap.getPriority())) {
      accumulator.push(changeValue(viewCacheGetCompleteEventSnap(newViewCache2)));
    }
  }
}
function viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, viewCache, changePath, writesCache, source, accumulator) {
  const oldEventSnap = viewCache.eventCache;
  if (writeTreeRefShadowingWrite(writesCache, changePath) != null) {
    return viewCache;
  } else {
    let newEventCache, serverNode;
    if (pathIsEmpty(changePath)) {
      assert(viewCache.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data");
      if (viewCache.serverCache.isFiltered()) {
        const serverCache = viewCacheGetCompleteServerSnap(viewCache);
        const completeChildren = serverCache instanceof ChildrenNode ? serverCache : ChildrenNode.EMPTY_NODE;
        const completeEventChildren = writeTreeRefCalcCompleteEventChildren(writesCache, completeChildren);
        newEventCache = viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(), completeEventChildren, accumulator);
      } else {
        const completeNode = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
        newEventCache = viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(), completeNode, accumulator);
      }
    } else {
      const childKey = pathGetFront(changePath);
      if (childKey === ".priority") {
        assert(pathGetLength(changePath) === 1, "Can't have a priority with additional path components");
        const oldEventNode = oldEventSnap.getNode();
        serverNode = viewCache.serverCache.getNode();
        const updatedPriority = writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache, changePath, oldEventNode, serverNode);
        if (updatedPriority != null) {
          newEventCache = viewProcessor.filter.updatePriority(oldEventNode, updatedPriority);
        } else {
          newEventCache = oldEventSnap.getNode();
        }
      } else {
        const childChangePath = pathPopFront(changePath);
        let newEventChild;
        if (oldEventSnap.isCompleteForChild(childKey)) {
          serverNode = viewCache.serverCache.getNode();
          const eventChildUpdate = writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache, changePath, oldEventSnap.getNode(), serverNode);
          if (eventChildUpdate != null) {
            newEventChild = oldEventSnap.getNode().getImmediateChild(childKey).updateChild(childChangePath, eventChildUpdate);
          } else {
            newEventChild = oldEventSnap.getNode().getImmediateChild(childKey);
          }
        } else {
          newEventChild = writeTreeRefCalcCompleteChild(writesCache, childKey, viewCache.serverCache);
        }
        if (newEventChild != null) {
          newEventCache = viewProcessor.filter.updateChild(oldEventSnap.getNode(), childKey, newEventChild, childChangePath, source, accumulator);
        } else {
          newEventCache = oldEventSnap.getNode();
        }
      }
    }
    return viewCacheUpdateEventSnap(viewCache, newEventCache, oldEventSnap.isFullyInitialized() || pathIsEmpty(changePath), viewProcessor.filter.filtersNodes());
  }
}
function viewProcessorApplyServerOverwrite(viewProcessor, oldViewCache, changePath, changedSnap, writesCache, completeCache, filterServerNode, accumulator) {
  const oldServerSnap = oldViewCache.serverCache;
  let newServerCache;
  const serverFilter = filterServerNode ? viewProcessor.filter : viewProcessor.filter.getIndexedFilter();
  if (pathIsEmpty(changePath)) {
    newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), changedSnap, null);
  } else if (serverFilter.filtersNodes() && !oldServerSnap.isFiltered()) {
    const newServerNode = oldServerSnap.getNode().updateChild(changePath, changedSnap);
    newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), newServerNode, null);
  } else {
    const childKey = pathGetFront(changePath);
    if (!oldServerSnap.isCompleteForPath(changePath) && pathGetLength(changePath) > 1) {
      return oldViewCache;
    }
    const childChangePath = pathPopFront(changePath);
    const childNode = oldServerSnap.getNode().getImmediateChild(childKey);
    const newChildNode = childNode.updateChild(childChangePath, changedSnap);
    if (childKey === ".priority") {
      newServerCache = serverFilter.updatePriority(oldServerSnap.getNode(), newChildNode);
    } else {
      newServerCache = serverFilter.updateChild(oldServerSnap.getNode(), childKey, newChildNode, childChangePath, NO_COMPLETE_CHILD_SOURCE, null);
    }
  }
  const newViewCache2 = viewCacheUpdateServerSnap(oldViewCache, newServerCache, oldServerSnap.isFullyInitialized() || pathIsEmpty(changePath), serverFilter.filtersNodes());
  const source = new WriteTreeCompleteChildSource(writesCache, newViewCache2, completeCache);
  return viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, newViewCache2, changePath, writesCache, source, accumulator);
}
function viewProcessorApplyUserOverwrite(viewProcessor, oldViewCache, changePath, changedSnap, writesCache, completeCache, accumulator) {
  const oldEventSnap = oldViewCache.eventCache;
  let newViewCache2, newEventCache;
  const source = new WriteTreeCompleteChildSource(writesCache, oldViewCache, completeCache);
  if (pathIsEmpty(changePath)) {
    newEventCache = viewProcessor.filter.updateFullNode(oldViewCache.eventCache.getNode(), changedSnap, accumulator);
    newViewCache2 = viewCacheUpdateEventSnap(oldViewCache, newEventCache, true, viewProcessor.filter.filtersNodes());
  } else {
    const childKey = pathGetFront(changePath);
    if (childKey === ".priority") {
      newEventCache = viewProcessor.filter.updatePriority(oldViewCache.eventCache.getNode(), changedSnap);
      newViewCache2 = viewCacheUpdateEventSnap(oldViewCache, newEventCache, oldEventSnap.isFullyInitialized(), oldEventSnap.isFiltered());
    } else {
      const childChangePath = pathPopFront(changePath);
      const oldChild = oldEventSnap.getNode().getImmediateChild(childKey);
      let newChild;
      if (pathIsEmpty(childChangePath)) {
        newChild = changedSnap;
      } else {
        const childNode = source.getCompleteChild(childKey);
        if (childNode != null) {
          if (pathGetBack(childChangePath) === ".priority" && childNode.getChild(pathParent(childChangePath)).isEmpty()) {
            newChild = childNode;
          } else {
            newChild = childNode.updateChild(childChangePath, changedSnap);
          }
        } else {
          newChild = ChildrenNode.EMPTY_NODE;
        }
      }
      if (!oldChild.equals(newChild)) {
        const newEventSnap = viewProcessor.filter.updateChild(oldEventSnap.getNode(), childKey, newChild, childChangePath, source, accumulator);
        newViewCache2 = viewCacheUpdateEventSnap(oldViewCache, newEventSnap, oldEventSnap.isFullyInitialized(), viewProcessor.filter.filtersNodes());
      } else {
        newViewCache2 = oldViewCache;
      }
    }
  }
  return newViewCache2;
}
function viewProcessorCacheHasChild(viewCache, childKey) {
  return viewCache.eventCache.isCompleteForChild(childKey);
}
function viewProcessorApplyUserMerge(viewProcessor, viewCache, path, changedChildren, writesCache, serverCache, accumulator) {
  let curViewCache = viewCache;
  changedChildren.foreach((relativePath, childNode) => {
    const writePath = pathChild(path, relativePath);
    if (viewProcessorCacheHasChild(viewCache, pathGetFront(writePath))) {
      curViewCache = viewProcessorApplyUserOverwrite(viewProcessor, curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
    }
  });
  changedChildren.foreach((relativePath, childNode) => {
    const writePath = pathChild(path, relativePath);
    if (!viewProcessorCacheHasChild(viewCache, pathGetFront(writePath))) {
      curViewCache = viewProcessorApplyUserOverwrite(viewProcessor, curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
    }
  });
  return curViewCache;
}
function viewProcessorApplyMerge(viewProcessor, node, merge) {
  merge.foreach((relativePath, childNode) => {
    node = node.updateChild(relativePath, childNode);
  });
  return node;
}
function viewProcessorApplyServerMerge(viewProcessor, viewCache, path, changedChildren, writesCache, serverCache, filterServerNode, accumulator) {
  if (viewCache.serverCache.getNode().isEmpty() && !viewCache.serverCache.isFullyInitialized()) {
    return viewCache;
  }
  let curViewCache = viewCache;
  let viewMergeTree;
  if (pathIsEmpty(path)) {
    viewMergeTree = changedChildren;
  } else {
    viewMergeTree = new ImmutableTree(null).setTree(path, changedChildren);
  }
  const serverNode = viewCache.serverCache.getNode();
  viewMergeTree.children.inorderTraversal((childKey, childTree) => {
    if (serverNode.hasChild(childKey)) {
      const serverChild = viewCache.serverCache.getNode().getImmediateChild(childKey);
      const newChild = viewProcessorApplyMerge(viewProcessor, serverChild, childTree);
      curViewCache = viewProcessorApplyServerOverwrite(viewProcessor, curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
    }
  });
  viewMergeTree.children.inorderTraversal((childKey, childMergeTree) => {
    const isUnknownDeepMerge = !viewCache.serverCache.isCompleteForChild(childKey) && childMergeTree.value === null;
    if (!serverNode.hasChild(childKey) && !isUnknownDeepMerge) {
      const serverChild = viewCache.serverCache.getNode().getImmediateChild(childKey);
      const newChild = viewProcessorApplyMerge(viewProcessor, serverChild, childMergeTree);
      curViewCache = viewProcessorApplyServerOverwrite(viewProcessor, curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
    }
  });
  return curViewCache;
}
function viewProcessorAckUserWrite(viewProcessor, viewCache, ackPath, affectedTree, writesCache, completeCache, accumulator) {
  if (writeTreeRefShadowingWrite(writesCache, ackPath) != null) {
    return viewCache;
  }
  const filterServerNode = viewCache.serverCache.isFiltered();
  const serverCache = viewCache.serverCache;
  if (affectedTree.value != null) {
    if (pathIsEmpty(ackPath) && serverCache.isFullyInitialized() || serverCache.isCompleteForPath(ackPath)) {
      return viewProcessorApplyServerOverwrite(viewProcessor, viewCache, ackPath, serverCache.getNode().getChild(ackPath), writesCache, completeCache, filterServerNode, accumulator);
    } else if (pathIsEmpty(ackPath)) {
      let changedChildren = new ImmutableTree(null);
      serverCache.getNode().forEachChild(KEY_INDEX, (name6, node) => {
        changedChildren = changedChildren.set(new Path(name6), node);
      });
      return viewProcessorApplyServerMerge(viewProcessor, viewCache, ackPath, changedChildren, writesCache, completeCache, filterServerNode, accumulator);
    } else {
      return viewCache;
    }
  } else {
    let changedChildren = new ImmutableTree(null);
    affectedTree.foreach((mergePath, value) => {
      const serverCachePath = pathChild(ackPath, mergePath);
      if (serverCache.isCompleteForPath(serverCachePath)) {
        changedChildren = changedChildren.set(mergePath, serverCache.getNode().getChild(serverCachePath));
      }
    });
    return viewProcessorApplyServerMerge(viewProcessor, viewCache, ackPath, changedChildren, writesCache, completeCache, filterServerNode, accumulator);
  }
}
function viewProcessorListenComplete(viewProcessor, viewCache, path, writesCache, accumulator) {
  const oldServerNode = viewCache.serverCache;
  const newViewCache2 = viewCacheUpdateServerSnap(viewCache, oldServerNode.getNode(), oldServerNode.isFullyInitialized() || pathIsEmpty(path), oldServerNode.isFiltered());
  return viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, newViewCache2, path, writesCache, NO_COMPLETE_CHILD_SOURCE, accumulator);
}
function viewProcessorRevertUserWrite(viewProcessor, viewCache, path, writesCache, completeServerCache, accumulator) {
  let complete;
  if (writeTreeRefShadowingWrite(writesCache, path) != null) {
    return viewCache;
  } else {
    const source = new WriteTreeCompleteChildSource(writesCache, viewCache, completeServerCache);
    const oldEventCache = viewCache.eventCache.getNode();
    let newEventCache;
    if (pathIsEmpty(path) || pathGetFront(path) === ".priority") {
      let newNode;
      if (viewCache.serverCache.isFullyInitialized()) {
        newNode = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
      } else {
        const serverChildren = viewCache.serverCache.getNode();
        assert(serverChildren instanceof ChildrenNode, "serverChildren would be complete if leaf node");
        newNode = writeTreeRefCalcCompleteEventChildren(writesCache, serverChildren);
      }
      newNode = newNode;
      newEventCache = viewProcessor.filter.updateFullNode(oldEventCache, newNode, accumulator);
    } else {
      const childKey = pathGetFront(path);
      let newChild = writeTreeRefCalcCompleteChild(writesCache, childKey, viewCache.serverCache);
      if (newChild == null && viewCache.serverCache.isCompleteForChild(childKey)) {
        newChild = oldEventCache.getImmediateChild(childKey);
      }
      if (newChild != null) {
        newEventCache = viewProcessor.filter.updateChild(oldEventCache, childKey, newChild, pathPopFront(path), source, accumulator);
      } else if (viewCache.eventCache.getNode().hasChild(childKey)) {
        newEventCache = viewProcessor.filter.updateChild(oldEventCache, childKey, ChildrenNode.EMPTY_NODE, pathPopFront(path), source, accumulator);
      } else {
        newEventCache = oldEventCache;
      }
      if (newEventCache.isEmpty() && viewCache.serverCache.isFullyInitialized()) {
        complete = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
        if (complete.isLeafNode()) {
          newEventCache = viewProcessor.filter.updateFullNode(newEventCache, complete, accumulator);
        }
      }
    }
    complete = viewCache.serverCache.isFullyInitialized() || writeTreeRefShadowingWrite(writesCache, newEmptyPath()) != null;
    return viewCacheUpdateEventSnap(viewCache, newEventCache, complete, viewProcessor.filter.filtersNodes());
  }
}
function viewGetServerCache(view) {
  return view.viewCache_.serverCache.getNode();
}
function viewGetCompleteServerCache(view, path) {
  const cache = viewCacheGetCompleteServerSnap(view.viewCache_);
  if (cache) {
    if (view.query._queryParams.loadsAllData() || !pathIsEmpty(path) && !cache.getImmediateChild(pathGetFront(path)).isEmpty()) {
      return cache.getChild(path);
    }
  }
  return null;
}
function viewIsEmpty(view) {
  return view.eventRegistrations_.length === 0;
}
function viewAddEventRegistration(view, eventRegistration) {
  view.eventRegistrations_.push(eventRegistration);
}
function viewRemoveEventRegistration(view, eventRegistration, cancelError) {
  const cancelEvents = [];
  if (cancelError) {
    assert(eventRegistration == null, "A cancel should cancel all event registrations.");
    const path = view.query._path;
    view.eventRegistrations_.forEach((registration) => {
      const maybeEvent = registration.createCancelEvent(cancelError, path);
      if (maybeEvent) {
        cancelEvents.push(maybeEvent);
      }
    });
  }
  if (eventRegistration) {
    let remaining = [];
    for (let i = 0; i < view.eventRegistrations_.length; ++i) {
      const existing = view.eventRegistrations_[i];
      if (!existing.matches(eventRegistration)) {
        remaining.push(existing);
      } else if (eventRegistration.hasAnyCallback()) {
        remaining = remaining.concat(view.eventRegistrations_.slice(i + 1));
        break;
      }
    }
    view.eventRegistrations_ = remaining;
  } else {
    view.eventRegistrations_ = [];
  }
  return cancelEvents;
}
function viewApplyOperation(view, operation, writesCache, completeServerCache) {
  if (operation.type === OperationType.MERGE && operation.source.queryId !== null) {
    assert(viewCacheGetCompleteServerSnap(view.viewCache_), "We should always have a full cache before handling merges");
    assert(viewCacheGetCompleteEventSnap(view.viewCache_), "Missing event cache, even though we have a server cache");
  }
  const oldViewCache = view.viewCache_;
  const result = viewProcessorApplyOperation(view.processor_, oldViewCache, operation, writesCache, completeServerCache);
  viewProcessorAssertIndexed(view.processor_, result.viewCache);
  assert(result.viewCache.serverCache.isFullyInitialized() || !oldViewCache.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back");
  view.viewCache_ = result.viewCache;
  return viewGenerateEventsForChanges_(view, result.changes, result.viewCache.eventCache.getNode(), null);
}
function viewGetInitialEvents(view, registration) {
  const eventSnap = view.viewCache_.eventCache;
  const initialChanges = [];
  if (!eventSnap.getNode().isLeafNode()) {
    const eventNode = eventSnap.getNode();
    eventNode.forEachChild(PRIORITY_INDEX, (key2, childNode) => {
      initialChanges.push(changeChildAdded(key2, childNode));
    });
  }
  if (eventSnap.isFullyInitialized()) {
    initialChanges.push(changeValue(eventSnap.getNode()));
  }
  return viewGenerateEventsForChanges_(view, initialChanges, eventSnap.getNode(), registration);
}
function viewGenerateEventsForChanges_(view, changes, eventCache, eventRegistration) {
  const registrations = eventRegistration ? [eventRegistration] : view.eventRegistrations_;
  return eventGeneratorGenerateEventsForChanges(view.eventGenerator_, changes, eventCache, registrations);
}
function syncPointSetReferenceConstructor(val) {
  assert(!referenceConstructor$1, "__referenceConstructor has already been defined");
  referenceConstructor$1 = val;
}
function syncPointGetReferenceConstructor() {
  assert(referenceConstructor$1, "Reference.ts has not been loaded");
  return referenceConstructor$1;
}
function syncPointIsEmpty(syncPoint) {
  return syncPoint.views.size === 0;
}
function syncPointApplyOperation(syncPoint, operation, writesCache, optCompleteServerCache) {
  const queryId = operation.source.queryId;
  if (queryId !== null) {
    const view = syncPoint.views.get(queryId);
    assert(view != null, "SyncTree gave us an op for an invalid query.");
    return viewApplyOperation(view, operation, writesCache, optCompleteServerCache);
  } else {
    let events = [];
    for (const view of syncPoint.views.values()) {
      events = events.concat(viewApplyOperation(view, operation, writesCache, optCompleteServerCache));
    }
    return events;
  }
}
function syncPointGetView(syncPoint, query, writesCache, serverCache, serverCacheComplete) {
  const queryId = query._queryIdentifier;
  const view = syncPoint.views.get(queryId);
  if (!view) {
    let eventCache = writeTreeRefCalcCompleteEventCache(writesCache, serverCacheComplete ? serverCache : null);
    let eventCacheComplete = false;
    if (eventCache) {
      eventCacheComplete = true;
    } else if (serverCache instanceof ChildrenNode) {
      eventCache = writeTreeRefCalcCompleteEventChildren(writesCache, serverCache);
      eventCacheComplete = false;
    } else {
      eventCache = ChildrenNode.EMPTY_NODE;
      eventCacheComplete = false;
    }
    const viewCache = newViewCache(new CacheNode(eventCache, eventCacheComplete, false), new CacheNode(serverCache, serverCacheComplete, false));
    return new View(query, viewCache);
  }
  return view;
}
function syncPointAddEventRegistration(syncPoint, query, eventRegistration, writesCache, serverCache, serverCacheComplete) {
  const view = syncPointGetView(syncPoint, query, writesCache, serverCache, serverCacheComplete);
  if (!syncPoint.views.has(query._queryIdentifier)) {
    syncPoint.views.set(query._queryIdentifier, view);
  }
  viewAddEventRegistration(view, eventRegistration);
  return viewGetInitialEvents(view, eventRegistration);
}
function syncPointRemoveEventRegistration(syncPoint, query, eventRegistration, cancelError) {
  const queryId = query._queryIdentifier;
  const removed = [];
  let cancelEvents = [];
  const hadCompleteView = syncPointHasCompleteView(syncPoint);
  if (queryId === "default") {
    for (const [viewQueryId, view] of syncPoint.views.entries()) {
      cancelEvents = cancelEvents.concat(viewRemoveEventRegistration(view, eventRegistration, cancelError));
      if (viewIsEmpty(view)) {
        syncPoint.views.delete(viewQueryId);
        if (!view.query._queryParams.loadsAllData()) {
          removed.push(view.query);
        }
      }
    }
  } else {
    const view = syncPoint.views.get(queryId);
    if (view) {
      cancelEvents = cancelEvents.concat(viewRemoveEventRegistration(view, eventRegistration, cancelError));
      if (viewIsEmpty(view)) {
        syncPoint.views.delete(queryId);
        if (!view.query._queryParams.loadsAllData()) {
          removed.push(view.query);
        }
      }
    }
  }
  if (hadCompleteView && !syncPointHasCompleteView(syncPoint)) {
    removed.push(new (syncPointGetReferenceConstructor())(query._repo, query._path));
  }
  return { removed, events: cancelEvents };
}
function syncPointGetQueryViews(syncPoint) {
  const result = [];
  for (const view of syncPoint.views.values()) {
    if (!view.query._queryParams.loadsAllData()) {
      result.push(view);
    }
  }
  return result;
}
function syncPointGetCompleteServerCache(syncPoint, path) {
  let serverCache = null;
  for (const view of syncPoint.views.values()) {
    serverCache = serverCache || viewGetCompleteServerCache(view, path);
  }
  return serverCache;
}
function syncPointViewForQuery(syncPoint, query) {
  const params = query._queryParams;
  if (params.loadsAllData()) {
    return syncPointGetCompleteView(syncPoint);
  } else {
    const queryId = query._queryIdentifier;
    return syncPoint.views.get(queryId);
  }
}
function syncPointViewExistsForQuery(syncPoint, query) {
  return syncPointViewForQuery(syncPoint, query) != null;
}
function syncPointHasCompleteView(syncPoint) {
  return syncPointGetCompleteView(syncPoint) != null;
}
function syncPointGetCompleteView(syncPoint) {
  for (const view of syncPoint.views.values()) {
    if (view.query._queryParams.loadsAllData()) {
      return view;
    }
  }
  return null;
}
function syncTreeSetReferenceConstructor(val) {
  assert(!referenceConstructor, "__referenceConstructor has already been defined");
  referenceConstructor = val;
}
function syncTreeGetReferenceConstructor() {
  assert(referenceConstructor, "Reference.ts has not been loaded");
  return referenceConstructor;
}
function syncTreeApplyUserOverwrite(syncTree, path, newData, writeId, visible) {
  writeTreeAddOverwrite(syncTree.pendingWriteTree_, path, newData, writeId, visible);
  if (!visible) {
    return [];
  } else {
    return syncTreeApplyOperationToSyncPoints_(syncTree, new Overwrite(newOperationSourceUser(), path, newData));
  }
}
function syncTreeApplyUserMerge(syncTree, path, changedChildren, writeId) {
  writeTreeAddMerge(syncTree.pendingWriteTree_, path, changedChildren, writeId);
  const changeTree = ImmutableTree.fromObject(changedChildren);
  return syncTreeApplyOperationToSyncPoints_(syncTree, new Merge(newOperationSourceUser(), path, changeTree));
}
function syncTreeAckUserWrite(syncTree, writeId, revert = false) {
  const write = writeTreeGetWrite(syncTree.pendingWriteTree_, writeId);
  const needToReevaluate = writeTreeRemoveWrite(syncTree.pendingWriteTree_, writeId);
  if (!needToReevaluate) {
    return [];
  } else {
    let affectedTree = new ImmutableTree(null);
    if (write.snap != null) {
      affectedTree = affectedTree.set(newEmptyPath(), true);
    } else {
      each2(write.children, (pathString) => {
        affectedTree = affectedTree.set(new Path(pathString), true);
      });
    }
    return syncTreeApplyOperationToSyncPoints_(syncTree, new AckUserWrite(write.path, affectedTree, revert));
  }
}
function syncTreeApplyServerOverwrite(syncTree, path, newData) {
  return syncTreeApplyOperationToSyncPoints_(syncTree, new Overwrite(newOperationSourceServer(), path, newData));
}
function syncTreeApplyServerMerge(syncTree, path, changedChildren) {
  const changeTree = ImmutableTree.fromObject(changedChildren);
  return syncTreeApplyOperationToSyncPoints_(syncTree, new Merge(newOperationSourceServer(), path, changeTree));
}
function syncTreeApplyListenComplete(syncTree, path) {
  return syncTreeApplyOperationToSyncPoints_(syncTree, new ListenComplete(newOperationSourceServer(), path));
}
function syncTreeApplyTaggedListenComplete(syncTree, path, tag) {
  const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
  if (queryKey) {
    const r = syncTreeParseQueryKey_(queryKey);
    const queryPath = r.path, queryId = r.queryId;
    const relativePath = newRelativePath(queryPath, path);
    const op = new ListenComplete(newOperationSourceServerTaggedQuery(queryId), relativePath);
    return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
  } else {
    return [];
  }
}
function syncTreeRemoveEventRegistration(syncTree, query, eventRegistration, cancelError, skipListenerDedup = false) {
  const path = query._path;
  const maybeSyncPoint = syncTree.syncPointTree_.get(path);
  let cancelEvents = [];
  if (maybeSyncPoint && (query._queryIdentifier === "default" || syncPointViewExistsForQuery(maybeSyncPoint, query))) {
    const removedAndEvents = syncPointRemoveEventRegistration(maybeSyncPoint, query, eventRegistration, cancelError);
    if (syncPointIsEmpty(maybeSyncPoint)) {
      syncTree.syncPointTree_ = syncTree.syncPointTree_.remove(path);
    }
    const removed = removedAndEvents.removed;
    cancelEvents = removedAndEvents.events;
    if (!skipListenerDedup) {
      const removingDefault = -1 !== removed.findIndex((query2) => {
        return query2._queryParams.loadsAllData();
      });
      const covered = syncTree.syncPointTree_.findOnPath(path, (relativePath, parentSyncPoint) => syncPointHasCompleteView(parentSyncPoint));
      if (removingDefault && !covered) {
        const subtree = syncTree.syncPointTree_.subtree(path);
        if (!subtree.isEmpty()) {
          const newViews = syncTreeCollectDistinctViewsForSubTree_(subtree);
          for (let i = 0; i < newViews.length; ++i) {
            const view = newViews[i], newQuery = view.query;
            const listener = syncTreeCreateListenerForView_(syncTree, view);
            syncTree.listenProvider_.startListening(syncTreeQueryForListening_(newQuery), syncTreeTagForQuery(syncTree, newQuery), listener.hashFn, listener.onComplete);
          }
        }
      }
      if (!covered && removed.length > 0 && !cancelError) {
        if (removingDefault) {
          const defaultTag = null;
          syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(query), defaultTag);
        } else {
          removed.forEach((queryToRemove) => {
            const tagToRemove = syncTree.queryToTagMap.get(syncTreeMakeQueryKey_(queryToRemove));
            syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(queryToRemove), tagToRemove);
          });
        }
      }
    }
    syncTreeRemoveTags_(syncTree, removed);
  }
  return cancelEvents;
}
function syncTreeApplyTaggedQueryOverwrite(syncTree, path, snap, tag) {
  const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
  if (queryKey != null) {
    const r = syncTreeParseQueryKey_(queryKey);
    const queryPath = r.path, queryId = r.queryId;
    const relativePath = newRelativePath(queryPath, path);
    const op = new Overwrite(newOperationSourceServerTaggedQuery(queryId), relativePath, snap);
    return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
  } else {
    return [];
  }
}
function syncTreeApplyTaggedQueryMerge(syncTree, path, changedChildren, tag) {
  const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
  if (queryKey) {
    const r = syncTreeParseQueryKey_(queryKey);
    const queryPath = r.path, queryId = r.queryId;
    const relativePath = newRelativePath(queryPath, path);
    const changeTree = ImmutableTree.fromObject(changedChildren);
    const op = new Merge(newOperationSourceServerTaggedQuery(queryId), relativePath, changeTree);
    return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
  } else {
    return [];
  }
}
function syncTreeAddEventRegistration(syncTree, query, eventRegistration, skipSetupListener = false) {
  const path = query._path;
  let serverCache = null;
  let foundAncestorDefaultView = false;
  syncTree.syncPointTree_.foreachOnPath(path, (pathToSyncPoint, sp) => {
    const relativePath = newRelativePath(pathToSyncPoint, path);
    serverCache = serverCache || syncPointGetCompleteServerCache(sp, relativePath);
    foundAncestorDefaultView = foundAncestorDefaultView || syncPointHasCompleteView(sp);
  });
  let syncPoint = syncTree.syncPointTree_.get(path);
  if (!syncPoint) {
    syncPoint = new SyncPoint();
    syncTree.syncPointTree_ = syncTree.syncPointTree_.set(path, syncPoint);
  } else {
    foundAncestorDefaultView = foundAncestorDefaultView || syncPointHasCompleteView(syncPoint);
    serverCache = serverCache || syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
  }
  let serverCacheComplete;
  if (serverCache != null) {
    serverCacheComplete = true;
  } else {
    serverCacheComplete = false;
    serverCache = ChildrenNode.EMPTY_NODE;
    const subtree = syncTree.syncPointTree_.subtree(path);
    subtree.foreachChild((childName, childSyncPoint) => {
      const completeCache = syncPointGetCompleteServerCache(childSyncPoint, newEmptyPath());
      if (completeCache) {
        serverCache = serverCache.updateImmediateChild(childName, completeCache);
      }
    });
  }
  const viewAlreadyExists = syncPointViewExistsForQuery(syncPoint, query);
  if (!viewAlreadyExists && !query._queryParams.loadsAllData()) {
    const queryKey = syncTreeMakeQueryKey_(query);
    assert(!syncTree.queryToTagMap.has(queryKey), "View does not exist, but we have a tag");
    const tag = syncTreeGetNextQueryTag_();
    syncTree.queryToTagMap.set(queryKey, tag);
    syncTree.tagToQueryMap.set(tag, queryKey);
  }
  const writesCache = writeTreeChildWrites(syncTree.pendingWriteTree_, path);
  let events = syncPointAddEventRegistration(syncPoint, query, eventRegistration, writesCache, serverCache, serverCacheComplete);
  if (!viewAlreadyExists && !foundAncestorDefaultView && !skipSetupListener) {
    const view = syncPointViewForQuery(syncPoint, query);
    events = events.concat(syncTreeSetupListener_(syncTree, query, view));
  }
  return events;
}
function syncTreeCalcCompleteEventCache(syncTree, path, writeIdsToExclude) {
  const includeHiddenSets = true;
  const writeTree = syncTree.pendingWriteTree_;
  const serverCache = syncTree.syncPointTree_.findOnPath(path, (pathSoFar, syncPoint) => {
    const relativePath = newRelativePath(pathSoFar, path);
    const serverCache2 = syncPointGetCompleteServerCache(syncPoint, relativePath);
    if (serverCache2) {
      return serverCache2;
    }
  });
  return writeTreeCalcCompleteEventCache(writeTree, path, serverCache, writeIdsToExclude, includeHiddenSets);
}
function syncTreeApplyOperationToSyncPoints_(syncTree, operation) {
  return syncTreeApplyOperationHelper_(
    operation,
    syncTree.syncPointTree_,
    null,
    writeTreeChildWrites(syncTree.pendingWriteTree_, newEmptyPath())
  );
}
function syncTreeApplyOperationHelper_(operation, syncPointTree, serverCache, writesCache) {
  if (pathIsEmpty(operation.path)) {
    return syncTreeApplyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache);
  } else {
    const syncPoint = syncPointTree.get(newEmptyPath());
    if (serverCache == null && syncPoint != null) {
      serverCache = syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
    }
    let events = [];
    const childName = pathGetFront(operation.path);
    const childOperation = operation.operationForChild(childName);
    const childTree = syncPointTree.children.get(childName);
    if (childTree && childOperation) {
      const childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
      const childWritesCache = writeTreeRefChild(writesCache, childName);
      events = events.concat(syncTreeApplyOperationHelper_(childOperation, childTree, childServerCache, childWritesCache));
    }
    if (syncPoint) {
      events = events.concat(syncPointApplyOperation(syncPoint, operation, writesCache, serverCache));
    }
    return events;
  }
}
function syncTreeApplyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache) {
  const syncPoint = syncPointTree.get(newEmptyPath());
  if (serverCache == null && syncPoint != null) {
    serverCache = syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
  }
  let events = [];
  syncPointTree.children.inorderTraversal((childName, childTree) => {
    const childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
    const childWritesCache = writeTreeRefChild(writesCache, childName);
    const childOperation = operation.operationForChild(childName);
    if (childOperation) {
      events = events.concat(syncTreeApplyOperationDescendantsHelper_(childOperation, childTree, childServerCache, childWritesCache));
    }
  });
  if (syncPoint) {
    events = events.concat(syncPointApplyOperation(syncPoint, operation, writesCache, serverCache));
  }
  return events;
}
function syncTreeCreateListenerForView_(syncTree, view) {
  const query = view.query;
  const tag = syncTreeTagForQuery(syncTree, query);
  return {
    hashFn: () => {
      const cache = viewGetServerCache(view) || ChildrenNode.EMPTY_NODE;
      return cache.hash();
    },
    onComplete: (status) => {
      if (status === "ok") {
        if (tag) {
          return syncTreeApplyTaggedListenComplete(syncTree, query._path, tag);
        } else {
          return syncTreeApplyListenComplete(syncTree, query._path);
        }
      } else {
        const error3 = errorForServerCode(status, query);
        return syncTreeRemoveEventRegistration(
          syncTree,
          query,
          null,
          error3
        );
      }
    }
  };
}
function syncTreeTagForQuery(syncTree, query) {
  const queryKey = syncTreeMakeQueryKey_(query);
  return syncTree.queryToTagMap.get(queryKey);
}
function syncTreeMakeQueryKey_(query) {
  return query._path.toString() + "$" + query._queryIdentifier;
}
function syncTreeQueryKeyForTag_(syncTree, tag) {
  return syncTree.tagToQueryMap.get(tag);
}
function syncTreeParseQueryKey_(queryKey) {
  const splitIndex = queryKey.indexOf("$");
  assert(splitIndex !== -1 && splitIndex < queryKey.length - 1, "Bad queryKey.");
  return {
    queryId: queryKey.substr(splitIndex + 1),
    path: new Path(queryKey.substr(0, splitIndex))
  };
}
function syncTreeApplyTaggedOperation_(syncTree, queryPath, operation) {
  const syncPoint = syncTree.syncPointTree_.get(queryPath);
  assert(syncPoint, "Missing sync point for query tag that we're tracking");
  const writesCache = writeTreeChildWrites(syncTree.pendingWriteTree_, queryPath);
  return syncPointApplyOperation(syncPoint, operation, writesCache, null);
}
function syncTreeCollectDistinctViewsForSubTree_(subtree) {
  return subtree.fold((relativePath, maybeChildSyncPoint, childMap) => {
    if (maybeChildSyncPoint && syncPointHasCompleteView(maybeChildSyncPoint)) {
      const completeView = syncPointGetCompleteView(maybeChildSyncPoint);
      return [completeView];
    } else {
      let views = [];
      if (maybeChildSyncPoint) {
        views = syncPointGetQueryViews(maybeChildSyncPoint);
      }
      each2(childMap, (_key, childViews) => {
        views = views.concat(childViews);
      });
      return views;
    }
  });
}
function syncTreeQueryForListening_(query) {
  if (query._queryParams.loadsAllData() && !query._queryParams.isDefault()) {
    return new (syncTreeGetReferenceConstructor())(query._repo, query._path);
  } else {
    return query;
  }
}
function syncTreeRemoveTags_(syncTree, queries) {
  for (let j = 0; j < queries.length; ++j) {
    const removedQuery = queries[j];
    if (!removedQuery._queryParams.loadsAllData()) {
      const removedQueryKey = syncTreeMakeQueryKey_(removedQuery);
      const removedQueryTag = syncTree.queryToTagMap.get(removedQueryKey);
      syncTree.queryToTagMap.delete(removedQueryKey);
      syncTree.tagToQueryMap.delete(removedQueryTag);
    }
  }
}
function syncTreeGetNextQueryTag_() {
  return syncTreeNextQueryTag_++;
}
function syncTreeSetupListener_(syncTree, query, view) {
  const path = query._path;
  const tag = syncTreeTagForQuery(syncTree, query);
  const listener = syncTreeCreateListenerForView_(syncTree, view);
  const events = syncTree.listenProvider_.startListening(syncTreeQueryForListening_(query), tag, listener.hashFn, listener.onComplete);
  const subtree = syncTree.syncPointTree_.subtree(path);
  if (tag) {
    assert(!syncPointHasCompleteView(subtree.value), "If we're adding a query, it shouldn't be shadowed");
  } else {
    const queriesToStop = subtree.fold((relativePath, maybeChildSyncPoint, childMap) => {
      if (!pathIsEmpty(relativePath) && maybeChildSyncPoint && syncPointHasCompleteView(maybeChildSyncPoint)) {
        return [syncPointGetCompleteView(maybeChildSyncPoint).query];
      } else {
        let queries = [];
        if (maybeChildSyncPoint) {
          queries = queries.concat(syncPointGetQueryViews(maybeChildSyncPoint).map((view2) => view2.query));
        }
        each2(childMap, (_key, childQueries) => {
          queries = queries.concat(childQueries);
        });
        return queries;
      }
    });
    for (let i = 0; i < queriesToStop.length; ++i) {
      const queryToStop = queriesToStop[i];
      syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(queryToStop), syncTreeTagForQuery(syncTree, queryToStop));
    }
  }
  return events;
}
function resolveDeferredValue(node, existingVal, serverValues) {
  const rawPri = node.getPriority().val();
  const priority = resolveDeferredLeafValue(rawPri, existingVal.getImmediateChild(".priority"), serverValues);
  let newNode;
  if (node.isLeafNode()) {
    const leafNode = node;
    const value = resolveDeferredLeafValue(leafNode.getValue(), existingVal, serverValues);
    if (value !== leafNode.getValue() || priority !== leafNode.getPriority().val()) {
      return new LeafNode(value, nodeFromJSON(priority));
    } else {
      return node;
    }
  } else {
    const childrenNode = node;
    newNode = childrenNode;
    if (priority !== childrenNode.getPriority().val()) {
      newNode = newNode.updatePriority(new LeafNode(priority));
    }
    childrenNode.forEachChild(PRIORITY_INDEX, (childName, childNode) => {
      const newChildNode = resolveDeferredValue(childNode, existingVal.getImmediateChild(childName), serverValues);
      if (newChildNode !== childNode) {
        newNode = newNode.updateImmediateChild(childName, newChildNode);
      }
    });
    return newNode;
  }
}
function treeSubTree(tree, pathObj) {
  let path = pathObj instanceof Path ? pathObj : new Path(pathObj);
  let child2 = tree, next = pathGetFront(path);
  while (next !== null) {
    const childNode = safeGet(child2.node.children, next) || {
      children: {},
      childCount: 0
    };
    child2 = new Tree(next, child2, childNode);
    path = pathPopFront(path);
    next = pathGetFront(path);
  }
  return child2;
}
function treeGetValue(tree) {
  return tree.node.value;
}
function treeSetValue(tree, value) {
  tree.node.value = value;
  treeUpdateParents(tree);
}
function treeHasChildren(tree) {
  return tree.node.childCount > 0;
}
function treeIsEmpty(tree) {
  return treeGetValue(tree) === void 0 && !treeHasChildren(tree);
}
function treeForEachChild(tree, action) {
  each2(tree.node.children, (child2, childTree) => {
    action(new Tree(child2, tree, childTree));
  });
}
function treeForEachDescendant(tree, action, includeSelf, childrenFirst) {
  if (includeSelf && !childrenFirst) {
    action(tree);
  }
  treeForEachChild(tree, (child2) => {
    treeForEachDescendant(child2, action, true, childrenFirst);
  });
  if (includeSelf && childrenFirst) {
    action(tree);
  }
}
function treeForEachAncestor(tree, action, includeSelf) {
  let node = includeSelf ? tree : tree.parent;
  while (node !== null) {
    if (action(node)) {
      return true;
    }
    node = node.parent;
  }
  return false;
}
function treeGetPath(tree) {
  return new Path(tree.parent === null ? tree.name : treeGetPath(tree.parent) + "/" + tree.name);
}
function treeUpdateParents(tree) {
  if (tree.parent !== null) {
    treeUpdateChild(tree.parent, tree.name, tree);
  }
}
function treeUpdateChild(tree, childName, child2) {
  const childEmpty = treeIsEmpty(child2);
  const childExists = contains(tree.node.children, childName);
  if (childEmpty && childExists) {
    delete tree.node.children[childName];
    tree.node.childCount--;
    treeUpdateParents(tree);
  } else if (!childEmpty && !childExists) {
    tree.node.children[childName] = child2.node;
    tree.node.childCount++;
    treeUpdateParents(tree);
  }
}
function eventQueueQueueEvents(eventQueue, eventDataList) {
  let currList = null;
  for (let i = 0; i < eventDataList.length; i++) {
    const data = eventDataList[i];
    const path = data.getPath();
    if (currList !== null && !pathEquals(path, currList.path)) {
      eventQueue.eventLists_.push(currList);
      currList = null;
    }
    if (currList === null) {
      currList = { events: [], path };
    }
    currList.events.push(data);
  }
  if (currList) {
    eventQueue.eventLists_.push(currList);
  }
}
function eventQueueRaiseEventsAtPath(eventQueue, path, eventDataList) {
  eventQueueQueueEvents(eventQueue, eventDataList);
  eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, (eventPath) => pathEquals(eventPath, path));
}
function eventQueueRaiseEventsForChangedPath(eventQueue, changedPath, eventDataList) {
  eventQueueQueueEvents(eventQueue, eventDataList);
  eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, (eventPath) => pathContains(eventPath, changedPath) || pathContains(changedPath, eventPath));
}
function eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, predicate) {
  eventQueue.recursionDepth_++;
  let sentAll = true;
  for (let i = 0; i < eventQueue.eventLists_.length; i++) {
    const eventList = eventQueue.eventLists_[i];
    if (eventList) {
      const eventPath = eventList.path;
      if (predicate(eventPath)) {
        eventListRaise(eventQueue.eventLists_[i]);
        eventQueue.eventLists_[i] = null;
      } else {
        sentAll = false;
      }
    }
  }
  if (sentAll) {
    eventQueue.eventLists_ = [];
  }
  eventQueue.recursionDepth_--;
}
function eventListRaise(eventList) {
  for (let i = 0; i < eventList.events.length; i++) {
    const eventData = eventList.events[i];
    if (eventData !== null) {
      eventList.events[i] = null;
      const eventFn = eventData.getEventRunner();
      if (logger2) {
        log("event: " + eventData.toString());
      }
      exceptionGuard(eventFn);
    }
  }
}
function repoStart(repo, appId, authOverride) {
  repo.stats_ = statsManagerGetCollection(repo.repoInfo_);
  if (repo.forceRestClient_ || beingCrawled()) {
    repo.server_ = new ReadonlyRestClient(repo.repoInfo_, (pathString, data, isMerge, tag) => {
      repoOnDataUpdate(repo, pathString, data, isMerge, tag);
    }, repo.authTokenProvider_, repo.appCheckProvider_);
    setTimeout(() => repoOnConnectStatus(repo, true), 0);
  } else {
    if (typeof authOverride !== "undefined" && authOverride !== null) {
      if (typeof authOverride !== "object") {
        throw new Error("Only objects are supported for option databaseAuthVariableOverride");
      }
      try {
        stringify(authOverride);
      } catch (e) {
        throw new Error("Invalid authOverride provided: " + e);
      }
    }
    repo.persistentConnection_ = new PersistentConnection(repo.repoInfo_, appId, (pathString, data, isMerge, tag) => {
      repoOnDataUpdate(repo, pathString, data, isMerge, tag);
    }, (connectStatus) => {
      repoOnConnectStatus(repo, connectStatus);
    }, (updates) => {
      repoOnServerInfoUpdate(repo, updates);
    }, repo.authTokenProvider_, repo.appCheckProvider_, authOverride);
    repo.server_ = repo.persistentConnection_;
  }
  repo.authTokenProvider_.addTokenChangeListener((token) => {
    repo.server_.refreshAuthToken(token);
  });
  repo.appCheckProvider_.addTokenChangeListener((result) => {
    repo.server_.refreshAppCheckToken(result.token);
  });
  repo.statsReporter_ = statsManagerGetOrCreateReporter(repo.repoInfo_, () => new StatsReporter(repo.stats_, repo.server_));
  repo.infoData_ = new SnapshotHolder();
  repo.infoSyncTree_ = new SyncTree({
    startListening: (query, tag, currentHashFn, onComplete) => {
      let infoEvents = [];
      const node = repo.infoData_.getNode(query._path);
      if (!node.isEmpty()) {
        infoEvents = syncTreeApplyServerOverwrite(repo.infoSyncTree_, query._path, node);
        setTimeout(() => {
          onComplete("ok");
        }, 0);
      }
      return infoEvents;
    },
    stopListening: () => {
    }
  });
  repoUpdateInfo(repo, "connected", false);
  repo.serverSyncTree_ = new SyncTree({
    startListening: (query, tag, currentHashFn, onComplete) => {
      repo.server_.listen(query, currentHashFn, tag, (status, data) => {
        const events = onComplete(status, data);
        eventQueueRaiseEventsForChangedPath(repo.eventQueue_, query._path, events);
      });
      return [];
    },
    stopListening: (query, tag) => {
      repo.server_.unlisten(query, tag);
    }
  });
}
function repoServerTime(repo) {
  const offsetNode = repo.infoData_.getNode(new Path(".info/serverTimeOffset"));
  const offset = offsetNode.val() || 0;
  return new Date().getTime() + offset;
}
function repoGenerateServerValues(repo) {
  return generateWithValues({
    timestamp: repoServerTime(repo)
  });
}
function repoOnDataUpdate(repo, pathString, data, isMerge, tag) {
  repo.dataUpdateCount++;
  const path = new Path(pathString);
  data = repo.interceptServerDataCallback_ ? repo.interceptServerDataCallback_(pathString, data) : data;
  let events = [];
  if (tag) {
    if (isMerge) {
      const taggedChildren = map(data, (raw) => nodeFromJSON(raw));
      events = syncTreeApplyTaggedQueryMerge(repo.serverSyncTree_, path, taggedChildren, tag);
    } else {
      const taggedSnap = nodeFromJSON(data);
      events = syncTreeApplyTaggedQueryOverwrite(repo.serverSyncTree_, path, taggedSnap, tag);
    }
  } else if (isMerge) {
    const changedChildren = map(data, (raw) => nodeFromJSON(raw));
    events = syncTreeApplyServerMerge(repo.serverSyncTree_, path, changedChildren);
  } else {
    const snap = nodeFromJSON(data);
    events = syncTreeApplyServerOverwrite(repo.serverSyncTree_, path, snap);
  }
  let affectedPath = path;
  if (events.length > 0) {
    affectedPath = repoRerunTransactions(repo, path);
  }
  eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, events);
}
function repoOnConnectStatus(repo, connectStatus) {
  repoUpdateInfo(repo, "connected", connectStatus);
  if (connectStatus === false) {
    repoRunOnDisconnectEvents(repo);
  }
}
function repoOnServerInfoUpdate(repo, updates) {
  each2(updates, (key2, value) => {
    repoUpdateInfo(repo, key2, value);
  });
}
function repoUpdateInfo(repo, pathString, value) {
  const path = new Path("/.info/" + pathString);
  const newNode = nodeFromJSON(value);
  repo.infoData_.updateSnapshot(path, newNode);
  const events = syncTreeApplyServerOverwrite(repo.infoSyncTree_, path, newNode);
  eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
}
function repoGetNextWriteId(repo) {
  return repo.nextWriteId_++;
}
function repoUpdate(repo, path, childrenToMerge, onComplete) {
  repoLog(repo, "update", { path: path.toString(), value: childrenToMerge });
  let empty = true;
  const serverValues = repoGenerateServerValues(repo);
  const changedChildren = {};
  each2(childrenToMerge, (changedKey, changedValue) => {
    empty = false;
    changedChildren[changedKey] = resolveDeferredValueTree(pathChild(path, changedKey), nodeFromJSON(changedValue), repo.serverSyncTree_, serverValues);
  });
  if (!empty) {
    const writeId = repoGetNextWriteId(repo);
    const events = syncTreeApplyUserMerge(repo.serverSyncTree_, path, changedChildren, writeId);
    eventQueueQueueEvents(repo.eventQueue_, events);
    repo.server_.merge(path.toString(), childrenToMerge, (status, errorReason) => {
      const success = status === "ok";
      if (!success) {
        warn("update at " + path + " failed: " + status);
      }
      const clearEvents = syncTreeAckUserWrite(repo.serverSyncTree_, writeId, !success);
      const affectedPath = clearEvents.length > 0 ? repoRerunTransactions(repo, path) : path;
      eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, clearEvents);
      repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
    each2(childrenToMerge, (changedPath) => {
      const affectedPath = repoAbortTransactions(repo, pathChild(path, changedPath));
      repoRerunTransactions(repo, affectedPath);
    });
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, []);
  } else {
    log("update() called with empty data.  Don't do anything.");
    repoCallOnCompleteCallback(repo, onComplete, "ok", void 0);
  }
}
function repoRunOnDisconnectEvents(repo) {
  repoLog(repo, "onDisconnectEvents");
  const serverValues = repoGenerateServerValues(repo);
  const resolvedOnDisconnectTree = newSparseSnapshotTree();
  sparseSnapshotTreeForEachTree(repo.onDisconnect_, newEmptyPath(), (path, node) => {
    const resolved = resolveDeferredValueTree(path, node, repo.serverSyncTree_, serverValues);
    sparseSnapshotTreeRemember(resolvedOnDisconnectTree, path, resolved);
  });
  let events = [];
  sparseSnapshotTreeForEachTree(resolvedOnDisconnectTree, newEmptyPath(), (path, snap) => {
    events = events.concat(syncTreeApplyServerOverwrite(repo.serverSyncTree_, path, snap));
    const affectedPath = repoAbortTransactions(repo, path);
    repoRerunTransactions(repo, affectedPath);
  });
  repo.onDisconnect_ = newSparseSnapshotTree();
  eventQueueRaiseEventsForChangedPath(repo.eventQueue_, newEmptyPath(), events);
}
function repoAddEventCallbackForQuery(repo, query, eventRegistration) {
  let events;
  if (pathGetFront(query._path) === ".info") {
    events = syncTreeAddEventRegistration(repo.infoSyncTree_, query, eventRegistration);
  } else {
    events = syncTreeAddEventRegistration(repo.serverSyncTree_, query, eventRegistration);
  }
  eventQueueRaiseEventsAtPath(repo.eventQueue_, query._path, events);
}
function repoRemoveEventCallbackForQuery(repo, query, eventRegistration) {
  let events;
  if (pathGetFront(query._path) === ".info") {
    events = syncTreeRemoveEventRegistration(repo.infoSyncTree_, query, eventRegistration);
  } else {
    events = syncTreeRemoveEventRegistration(repo.serverSyncTree_, query, eventRegistration);
  }
  eventQueueRaiseEventsAtPath(repo.eventQueue_, query._path, events);
}
function repoInterrupt(repo) {
  if (repo.persistentConnection_) {
    repo.persistentConnection_.interrupt(INTERRUPT_REASON);
  }
}
function repoLog(repo, ...varArgs) {
  let prefix2 = "";
  if (repo.persistentConnection_) {
    prefix2 = repo.persistentConnection_.id + ":";
  }
  log(prefix2, ...varArgs);
}
function repoCallOnCompleteCallback(repo, callback, status, errorReason) {
  if (callback) {
    exceptionGuard(() => {
      if (status === "ok") {
        callback(null);
      } else {
        const code = (status || "error").toUpperCase();
        let message = code;
        if (errorReason) {
          message += ": " + errorReason;
        }
        const error3 = new Error(message);
        error3.code = code;
        callback(error3);
      }
    });
  }
}
function repoGetLatestState(repo, path, excludeSets) {
  return syncTreeCalcCompleteEventCache(repo.serverSyncTree_, path, excludeSets) || ChildrenNode.EMPTY_NODE;
}
function repoSendReadyTransactions(repo, node = repo.transactionQueueTree_) {
  if (!node) {
    repoPruneCompletedTransactionsBelowNode(repo, node);
  }
  if (treeGetValue(node)) {
    const queue = repoBuildTransactionQueue(repo, node);
    assert(queue.length > 0, "Sending zero length transaction queue");
    const allRun = queue.every((transaction) => transaction.status === 0);
    if (allRun) {
      repoSendTransactionQueue(repo, treeGetPath(node), queue);
    }
  } else if (treeHasChildren(node)) {
    treeForEachChild(node, (childNode) => {
      repoSendReadyTransactions(repo, childNode);
    });
  }
}
function repoSendTransactionQueue(repo, path, queue) {
  const setsToIgnore = queue.map((txn) => {
    return txn.currentWriteId;
  });
  const latestState = repoGetLatestState(repo, path, setsToIgnore);
  let snapToSend = latestState;
  const latestHash = latestState.hash();
  for (let i = 0; i < queue.length; i++) {
    const txn = queue[i];
    assert(txn.status === 0, "tryToSendTransactionQueue_: items in queue should all be run.");
    txn.status = 1;
    txn.retryCount++;
    const relativePath = newRelativePath(path, txn.path);
    snapToSend = snapToSend.updateChild(relativePath, txn.currentOutputSnapshotRaw);
  }
  const dataToSend = snapToSend.val(true);
  const pathToSend = path;
  repo.server_.put(pathToSend.toString(), dataToSend, (status) => {
    repoLog(repo, "transaction put response", {
      path: pathToSend.toString(),
      status
    });
    let events = [];
    if (status === "ok") {
      const callbacks = [];
      for (let i = 0; i < queue.length; i++) {
        queue[i].status = 2;
        events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, queue[i].currentWriteId));
        if (queue[i].onComplete) {
          callbacks.push(() => queue[i].onComplete(null, true, queue[i].currentOutputSnapshotResolved));
        }
        queue[i].unwatcher();
      }
      repoPruneCompletedTransactionsBelowNode(repo, treeSubTree(repo.transactionQueueTree_, path));
      repoSendReadyTransactions(repo, repo.transactionQueueTree_);
      eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
      for (let i = 0; i < callbacks.length; i++) {
        exceptionGuard(callbacks[i]);
      }
    } else {
      if (status === "datastale") {
        for (let i = 0; i < queue.length; i++) {
          if (queue[i].status === 3) {
            queue[i].status = 4;
          } else {
            queue[i].status = 0;
          }
        }
      } else {
        warn("transaction at " + pathToSend.toString() + " failed: " + status);
        for (let i = 0; i < queue.length; i++) {
          queue[i].status = 4;
          queue[i].abortReason = status;
        }
      }
      repoRerunTransactions(repo, path);
    }
  }, latestHash);
}
function repoRerunTransactions(repo, changedPath) {
  const rootMostTransactionNode = repoGetAncestorTransactionNode(repo, changedPath);
  const path = treeGetPath(rootMostTransactionNode);
  const queue = repoBuildTransactionQueue(repo, rootMostTransactionNode);
  repoRerunTransactionQueue(repo, queue, path);
  return path;
}
function repoRerunTransactionQueue(repo, queue, path) {
  if (queue.length === 0) {
    return;
  }
  const callbacks = [];
  let events = [];
  const txnsToRerun = queue.filter((q) => {
    return q.status === 0;
  });
  const setsToIgnore = txnsToRerun.map((q) => {
    return q.currentWriteId;
  });
  for (let i = 0; i < queue.length; i++) {
    const transaction = queue[i];
    const relativePath = newRelativePath(path, transaction.path);
    let abortTransaction = false, abortReason;
    assert(relativePath !== null, "rerunTransactionsUnderNode_: relativePath should not be null.");
    if (transaction.status === 4) {
      abortTransaction = true;
      abortReason = transaction.abortReason;
      events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
    } else if (transaction.status === 0) {
      if (transaction.retryCount >= MAX_TRANSACTION_RETRIES) {
        abortTransaction = true;
        abortReason = "maxretry";
        events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
      } else {
        const currentNode = repoGetLatestState(repo, transaction.path, setsToIgnore);
        transaction.currentInputSnapshot = currentNode;
        const newData = queue[i].update(currentNode.val());
        if (newData !== void 0) {
          validateFirebaseData("transaction failed: Data returned ", newData, transaction.path);
          let newDataNode = nodeFromJSON(newData);
          const hasExplicitPriority = typeof newData === "object" && newData != null && contains(newData, ".priority");
          if (!hasExplicitPriority) {
            newDataNode = newDataNode.updatePriority(currentNode.getPriority());
          }
          const oldWriteId = transaction.currentWriteId;
          const serverValues = repoGenerateServerValues(repo);
          const newNodeResolved = resolveDeferredValueSnapshot(newDataNode, currentNode, serverValues);
          transaction.currentOutputSnapshotRaw = newDataNode;
          transaction.currentOutputSnapshotResolved = newNodeResolved;
          transaction.currentWriteId = repoGetNextWriteId(repo);
          setsToIgnore.splice(setsToIgnore.indexOf(oldWriteId), 1);
          events = events.concat(syncTreeApplyUserOverwrite(repo.serverSyncTree_, transaction.path, newNodeResolved, transaction.currentWriteId, transaction.applyLocally));
          events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, oldWriteId, true));
        } else {
          abortTransaction = true;
          abortReason = "nodata";
          events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
        }
      }
    }
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
    events = [];
    if (abortTransaction) {
      queue[i].status = 2;
      (function(unwatcher) {
        setTimeout(unwatcher, Math.floor(0));
      })(queue[i].unwatcher);
      if (queue[i].onComplete) {
        if (abortReason === "nodata") {
          callbacks.push(() => queue[i].onComplete(null, false, queue[i].currentInputSnapshot));
        } else {
          callbacks.push(() => queue[i].onComplete(new Error(abortReason), false, null));
        }
      }
    }
  }
  repoPruneCompletedTransactionsBelowNode(repo, repo.transactionQueueTree_);
  for (let i = 0; i < callbacks.length; i++) {
    exceptionGuard(callbacks[i]);
  }
  repoSendReadyTransactions(repo, repo.transactionQueueTree_);
}
function repoGetAncestorTransactionNode(repo, path) {
  let front;
  let transactionNode = repo.transactionQueueTree_;
  front = pathGetFront(path);
  while (front !== null && treeGetValue(transactionNode) === void 0) {
    transactionNode = treeSubTree(transactionNode, front);
    path = pathPopFront(path);
    front = pathGetFront(path);
  }
  return transactionNode;
}
function repoBuildTransactionQueue(repo, transactionNode) {
  const transactionQueue = [];
  repoAggregateTransactionQueuesForNode(repo, transactionNode, transactionQueue);
  transactionQueue.sort((a, b) => a.order - b.order);
  return transactionQueue;
}
function repoAggregateTransactionQueuesForNode(repo, node, queue) {
  const nodeQueue = treeGetValue(node);
  if (nodeQueue) {
    for (let i = 0; i < nodeQueue.length; i++) {
      queue.push(nodeQueue[i]);
    }
  }
  treeForEachChild(node, (child2) => {
    repoAggregateTransactionQueuesForNode(repo, child2, queue);
  });
}
function repoPruneCompletedTransactionsBelowNode(repo, node) {
  const queue = treeGetValue(node);
  if (queue) {
    let to = 0;
    for (let from = 0; from < queue.length; from++) {
      if (queue[from].status !== 2) {
        queue[to] = queue[from];
        to++;
      }
    }
    queue.length = to;
    treeSetValue(node, queue.length > 0 ? queue : void 0);
  }
  treeForEachChild(node, (childNode) => {
    repoPruneCompletedTransactionsBelowNode(repo, childNode);
  });
}
function repoAbortTransactions(repo, path) {
  const affectedPath = treeGetPath(repoGetAncestorTransactionNode(repo, path));
  const transactionNode = treeSubTree(repo.transactionQueueTree_, path);
  treeForEachAncestor(transactionNode, (node) => {
    repoAbortTransactionsOnNode(repo, node);
  });
  repoAbortTransactionsOnNode(repo, transactionNode);
  treeForEachDescendant(transactionNode, (node) => {
    repoAbortTransactionsOnNode(repo, node);
  });
  return affectedPath;
}
function repoAbortTransactionsOnNode(repo, node) {
  const queue = treeGetValue(node);
  if (queue) {
    const callbacks = [];
    let events = [];
    let lastSent = -1;
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].status === 3)
        ;
      else if (queue[i].status === 1) {
        assert(lastSent === i - 1, "All SENT items should be at beginning of queue.");
        lastSent = i;
        queue[i].status = 3;
        queue[i].abortReason = "set";
      } else {
        assert(queue[i].status === 0, "Unexpected transaction status in abort");
        queue[i].unwatcher();
        events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, queue[i].currentWriteId, true));
        if (queue[i].onComplete) {
          callbacks.push(queue[i].onComplete.bind(null, new Error("set"), false, null));
        }
      }
    }
    if (lastSent === -1) {
      treeSetValue(node, void 0);
    } else {
      queue.length = lastSent + 1;
    }
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, treeGetPath(node), events);
    for (let i = 0; i < callbacks.length; i++) {
      exceptionGuard(callbacks[i]);
    }
  }
}
function decodePath(pathString) {
  let pathStringDecoded = "";
  const pieces = pathString.split("/");
  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i].length > 0) {
      let piece = pieces[i];
      try {
        piece = decodeURIComponent(piece.replace(/\+/g, " "));
      } catch (e) {
      }
      pathStringDecoded += "/" + piece;
    }
  }
  return pathStringDecoded;
}
function decodeQuery(queryString) {
  const results = {};
  if (queryString.charAt(0) === "?") {
    queryString = queryString.substring(1);
  }
  for (const segment of queryString.split("&")) {
    if (segment.length === 0) {
      continue;
    }
    const kv = segment.split("=");
    if (kv.length === 2) {
      results[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
    } else {
      warn(`Invalid query segment '${segment}' in query '${queryString}'`);
    }
  }
  return results;
}
function ref(db2, path) {
  db2 = getModularInstance(db2);
  db2._checkNotDeleted("ref");
  return path !== void 0 ? child(db2._root, path) : db2._root;
}
function child(parent2, path) {
  parent2 = getModularInstance(parent2);
  if (pathGetFront(parent2._path) === null) {
    validateRootPathString("child", "path", path, false);
  } else {
    validatePathString("child", "path", path, false);
  }
  return new ReferenceImpl(parent2._repo, pathChild(parent2._path, path));
}
function update(ref2, values) {
  validateFirebaseMergeDataArg("update", values, ref2._path, false);
  const deferred = new Deferred();
  repoUpdate(ref2._repo, ref2._path, values, deferred.wrapCallback(() => {
  }));
  return deferred.promise;
}
function addEventListener(query, eventType, callback, cancelCallbackOrListenOptions, options) {
  let cancelCallback;
  if (typeof cancelCallbackOrListenOptions === "object") {
    cancelCallback = void 0;
    options = cancelCallbackOrListenOptions;
  }
  if (typeof cancelCallbackOrListenOptions === "function") {
    cancelCallback = cancelCallbackOrListenOptions;
  }
  if (options && options.onlyOnce) {
    const userCallback = callback;
    const onceCallback = (dataSnapshot, previousChildName) => {
      repoRemoveEventCallbackForQuery(query._repo, query, container);
      userCallback(dataSnapshot, previousChildName);
    };
    onceCallback.userCallback = callback.userCallback;
    onceCallback.context = callback.context;
    callback = onceCallback;
  }
  const callbackContext = new CallbackContext(callback, cancelCallback || void 0);
  const container = eventType === "value" ? new ValueEventRegistration(callbackContext) : new ChildEventRegistration(eventType, callbackContext);
  repoAddEventCallbackForQuery(query._repo, query, container);
  return () => repoRemoveEventCallbackForQuery(query._repo, query, container);
}
function onValue(query, callback, cancelCallbackOrListenOptions, options) {
  return addEventListener(query, "value", callback, cancelCallbackOrListenOptions, options);
}
function repoManagerDatabaseFromApp(app2, authProvider, appCheckProvider, url, nodeAdmin) {
  let dbUrl = url || app2.options.databaseURL;
  if (dbUrl === void 0) {
    if (!app2.options.projectId) {
      fatal("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp().");
    }
    log("Using default host for project ", app2.options.projectId);
    dbUrl = `${app2.options.projectId}-default-rtdb.firebaseio.com`;
  }
  let parsedUrl = parseRepoInfo(dbUrl, nodeAdmin);
  let repoInfo = parsedUrl.repoInfo;
  let isEmulator;
  let dbEmulatorHost = void 0;
  if (typeof process !== "undefined" && process.env) {
    dbEmulatorHost = process.env[FIREBASE_DATABASE_EMULATOR_HOST_VAR];
  }
  if (dbEmulatorHost) {
    isEmulator = true;
    dbUrl = `http://${dbEmulatorHost}?ns=${repoInfo.namespace}`;
    parsedUrl = parseRepoInfo(dbUrl, nodeAdmin);
    repoInfo = parsedUrl.repoInfo;
  } else {
    isEmulator = !parsedUrl.repoInfo.secure;
  }
  const authTokenProvider = nodeAdmin && isEmulator ? new EmulatorTokenProvider(EmulatorTokenProvider.OWNER) : new FirebaseAuthTokenProvider(app2.name, app2.options, authProvider);
  validateUrl("Invalid Firebase Database URL", parsedUrl);
  if (!pathIsEmpty(parsedUrl.path)) {
    fatal("Database URL must point to the root of a Firebase Database (not including a child path).");
  }
  const repo = repoManagerCreateRepo(repoInfo, app2, authTokenProvider, new AppCheckTokenProvider(app2.name, appCheckProvider));
  return new Database(repo, app2);
}
function repoManagerDeleteRepo(repo, appName) {
  const appRepos = repos[appName];
  if (!appRepos || appRepos[repo.key] !== repo) {
    fatal(`Database ${appName}(${repo.repoInfo_}) has already been deleted.`);
  }
  repoInterrupt(repo);
  delete appRepos[repo.key];
}
function repoManagerCreateRepo(repoInfo, app2, authTokenProvider, appCheckProvider) {
  let appRepos = repos[app2.name];
  if (!appRepos) {
    appRepos = {};
    repos[app2.name] = appRepos;
  }
  let repo = appRepos[repoInfo.toURLString()];
  if (repo) {
    fatal("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");
  }
  repo = new Repo(repoInfo, useRestClient, authTokenProvider, appCheckProvider);
  appRepos[repoInfo.toURLString()] = repo;
  return repo;
}
function getDatabase(app2 = getApp(), url) {
  return _getProvider(app2, "database").getImmediate({
    identifier: url
  });
}
function registerDatabase(variant) {
  setSDKVersion(SDK_VERSION);
  _registerComponent(new Component("database", (container, { instanceIdentifier: url }) => {
    const app2 = container.getProvider("app").getImmediate();
    const authProvider = container.getProvider("auth-internal");
    const appCheckProvider = container.getProvider("app-check-internal");
    return repoManagerDatabaseFromApp(app2, authProvider, appCheckProvider, url);
  }, "PUBLIC").setMultipleInstances(true));
  registerVersion(name2, version2, variant);
  registerVersion(name2, version2, "esm2017");
}
var name2, version2, SDK_VERSION2, DOMStorageWrapper, MemoryStorage, createStoragefor, PersistentStorage, SessionStorage, logClient, LUIDGenerator, sha1, buildLogMessage_, logger2, firstLog_, enableLogging$1, log, logWrapper, error2, fatal, warn, warnIfPageIsSecure, isInvalidJSONNumber, executeWhenDOMReady, MIN_NAME, MAX_NAME, nameCompare, stringCompare, requireKey, ObjectToUniqueKey, splitStringBySize, doubleToIEEE754String, isChromeExtensionContentScript, isWindowsStoreApp, INTEGER_REGEXP_, INTEGER_32_MIN, INTEGER_32_MAX, tryParseInt, exceptionGuard, beingCrawled, setTimeoutNonBlocking, AppCheckTokenProvider, FirebaseAuthTokenProvider, EmulatorTokenProvider, PROTOCOL_VERSION, VERSION_PARAM, TRANSPORT_SESSION_PARAM, REFERER_PARAM, FORGE_REF, FORGE_DOMAIN_RE, LAST_SESSION_PARAM, APPLICATION_ID_PARAM, APP_CHECK_TOKEN_PARAM, WEBSOCKET, LONG_POLLING, RepoInfo, StatsCollection, collections, reporters, PacketReceiver, FIREBASE_LONGPOLL_START_PARAM, FIREBASE_LONGPOLL_CLOSE_COMMAND, FIREBASE_LONGPOLL_COMMAND_CB_NAME, FIREBASE_LONGPOLL_DATA_CB_NAME, FIREBASE_LONGPOLL_ID_PARAM, FIREBASE_LONGPOLL_PW_PARAM, FIREBASE_LONGPOLL_SERIAL_PARAM, FIREBASE_LONGPOLL_CALLBACK_ID_PARAM, FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM, FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET, FIREBASE_LONGPOLL_DATA_PARAM, FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM, MAX_URL_DATA_SIZE, SEG_HEADER_SIZE, MAX_PAYLOAD_SIZE, KEEPALIVE_REQUEST_INTERVAL, LP_CONNECT_TIMEOUT, BrowserPollConnection, FirebaseIFrameScriptHolder, WEBSOCKET_MAX_FRAME_SIZE, WEBSOCKET_KEEPALIVE_INTERVAL, WebSocketImpl, WebSocketConnection, TransportManager, UPGRADE_TIMEOUT, DELAY_BEFORE_SENDING_EXTRA_REQUESTS, BYTES_SENT_HEALTHY_OVERRIDE, BYTES_RECEIVED_HEALTHY_OVERRIDE, MESSAGE_TYPE, MESSAGE_DATA, CONTROL_SHUTDOWN, CONTROL_RESET, CONTROL_ERROR, CONTROL_PONG, SWITCH_ACK, END_TRANSMISSION, PING, SERVER_HELLO, Connection, ServerActions, EventEmitter, OnlineMonitor, MAX_PATH_DEPTH, MAX_PATH_LENGTH_BYTES, Path, ValidationPath, VisibilityMonitor, RECONNECT_MIN_DELAY, RECONNECT_MAX_DELAY_DEFAULT, RECONNECT_MAX_DELAY_FOR_ADMINS, RECONNECT_DELAY_MULTIPLIER, RECONNECT_DELAY_RESET_TIMEOUT, SERVER_KILL_INTERRUPT_REASON, INVALID_TOKEN_THRESHOLD, PersistentConnection, NamedNode, Index, __EMPTY_NODE, KeyIndex, KEY_INDEX, SortedMapIterator, LLRBNode, LLRBEmptyNode, SortedMap, MAX_NODE$2, priorityHashText, validatePriorityNode, __childrenNodeConstructor, LeafNode, nodeFromJSON$1, MAX_NODE$1, PriorityIndex, PRIORITY_INDEX, LOG_2, Base12Num, buildChildSet, _defaultIndexMap, fallbackObject, IndexMap, EMPTY_NODE, ChildrenNode, MaxNode, MAX_NODE, USE_HINZE, PathIndex, ValueIndex, VALUE_INDEX, PUSH_CHARS, nextPushId, IndexedFilter, RangedFilter, LimitedFilter, QueryParams, ReadonlyRestClient, SnapshotHolder, StatsListener, FIRST_STATS_MIN_TIME, FIRST_STATS_MAX_TIME, REPORT_STATS_INTERVAL, StatsReporter, OperationType, AckUserWrite, ListenComplete, Overwrite, Merge, CacheNode, EventGenerator, emptyChildrenSingleton, EmptyChildren, ImmutableTree, CompoundWrite, ChildChangeAccumulator, NoCompleteChildSource_, NO_COMPLETE_CHILD_SOURCE, WriteTreeCompleteChildSource, View, referenceConstructor$1, SyncPoint, referenceConstructor, syncTreeNextQueryTag_, SyncTree, ExistingValueProvider, DeferredValueProvider, generateWithValues, resolveDeferredLeafValue, resolveScalarDeferredValue, resolveComplexDeferredValue, resolveDeferredValueTree, resolveDeferredValueSnapshot, Tree, INVALID_KEY_REGEX_, INVALID_PATH_REGEX_, MAX_LEAF_SIZE_, isValidKey2, isValidPathString, isValidRootPathString, isValidPriority, validateFirebaseData, validateFirebaseMergePaths, validateFirebaseMergeDataArg, validatePathString, validateRootPathString, validateUrl, EventQueue, INTERRUPT_REASON, MAX_TRANSACTION_RETRIES, Repo, parseRepoInfo, parseDatabaseURL, DataEvent, CancelEvent, CallbackContext, QueryImpl, ReferenceImpl, DataSnapshot, ValueEventRegistration, ChildEventRegistration, FIREBASE_DATABASE_EMULATOR_HOST_VAR, repos, useRestClient, Database;
var init_index_esm20175 = __esm({
  "node_modules/@firebase/database/dist/index.esm2017.js"() {
    init_index_esm20174();
    init_index_esm20172();
    init_index_esm2017();
    init_index_esm20173();
    name2 = "@firebase/database";
    version2 = "0.13.6";
    SDK_VERSION2 = "";
    DOMStorageWrapper = class {
      constructor(domStorage_) {
        this.domStorage_ = domStorage_;
        this.prefix_ = "firebase:";
      }
      set(key2, value) {
        if (value == null) {
          this.domStorage_.removeItem(this.prefixedName_(key2));
        } else {
          this.domStorage_.setItem(this.prefixedName_(key2), stringify(value));
        }
      }
      get(key2) {
        const storedVal = this.domStorage_.getItem(this.prefixedName_(key2));
        if (storedVal == null) {
          return null;
        } else {
          return jsonEval(storedVal);
        }
      }
      remove(key2) {
        this.domStorage_.removeItem(this.prefixedName_(key2));
      }
      prefixedName_(name6) {
        return this.prefix_ + name6;
      }
      toString() {
        return this.domStorage_.toString();
      }
    };
    MemoryStorage = class {
      constructor() {
        this.cache_ = {};
        this.isInMemoryStorage = true;
      }
      set(key2, value) {
        if (value == null) {
          delete this.cache_[key2];
        } else {
          this.cache_[key2] = value;
        }
      }
      get(key2) {
        if (contains(this.cache_, key2)) {
          return this.cache_[key2];
        }
        return null;
      }
      remove(key2) {
        delete this.cache_[key2];
      }
    };
    createStoragefor = function(domStorageName) {
      try {
        if (typeof window !== "undefined" && typeof window[domStorageName] !== "undefined") {
          const domStorage = window[domStorageName];
          domStorage.setItem("firebase:sentinel", "cache");
          domStorage.removeItem("firebase:sentinel");
          return new DOMStorageWrapper(domStorage);
        }
      } catch (e) {
      }
      return new MemoryStorage();
    };
    PersistentStorage = createStoragefor("localStorage");
    SessionStorage = createStoragefor("sessionStorage");
    logClient = new Logger("@firebase/database");
    LUIDGenerator = function() {
      let id = 1;
      return function() {
        return id++;
      };
    }();
    sha1 = function(str) {
      const utf8Bytes = stringToByteArray(str);
      const sha12 = new Sha1();
      sha12.update(utf8Bytes);
      const sha1Bytes = sha12.digest();
      return base642.encodeByteArray(sha1Bytes);
    };
    buildLogMessage_ = function(...varArgs) {
      let message = "";
      for (let i = 0; i < varArgs.length; i++) {
        const arg = varArgs[i];
        if (Array.isArray(arg) || arg && typeof arg === "object" && typeof arg.length === "number") {
          message += buildLogMessage_.apply(null, arg);
        } else if (typeof arg === "object") {
          message += stringify(arg);
        } else {
          message += arg;
        }
        message += " ";
      }
      return message;
    };
    logger2 = null;
    firstLog_ = true;
    enableLogging$1 = function(logger_, persistent) {
      assert(!persistent || logger_ === true || logger_ === false, "Can't turn on custom loggers persistently.");
      if (logger_ === true) {
        logClient.logLevel = LogLevel.VERBOSE;
        logger2 = logClient.log.bind(logClient);
        if (persistent) {
          SessionStorage.set("logging_enabled", true);
        }
      } else if (typeof logger_ === "function") {
        logger2 = logger_;
      } else {
        logger2 = null;
        SessionStorage.remove("logging_enabled");
      }
    };
    log = function(...varArgs) {
      if (firstLog_ === true) {
        firstLog_ = false;
        if (logger2 === null && SessionStorage.get("logging_enabled") === true) {
          enableLogging$1(true);
        }
      }
      if (logger2) {
        const message = buildLogMessage_.apply(null, varArgs);
        logger2(message);
      }
    };
    logWrapper = function(prefix2) {
      return function(...varArgs) {
        log(prefix2, ...varArgs);
      };
    };
    error2 = function(...varArgs) {
      const message = "FIREBASE INTERNAL ERROR: " + buildLogMessage_(...varArgs);
      logClient.error(message);
    };
    fatal = function(...varArgs) {
      const message = `FIREBASE FATAL ERROR: ${buildLogMessage_(...varArgs)}`;
      logClient.error(message);
      throw new Error(message);
    };
    warn = function(...varArgs) {
      const message = "FIREBASE WARNING: " + buildLogMessage_(...varArgs);
      logClient.warn(message);
    };
    warnIfPageIsSecure = function() {
      if (typeof window !== "undefined" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1) {
        warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
      }
    };
    isInvalidJSONNumber = function(data) {
      return typeof data === "number" && (data !== data || data === Number.POSITIVE_INFINITY || data === Number.NEGATIVE_INFINITY);
    };
    executeWhenDOMReady = function(fn) {
      if (isNodeSdk() || document.readyState === "complete") {
        fn();
      } else {
        let called = false;
        const wrappedFn = function() {
          if (!document.body) {
            setTimeout(wrappedFn, Math.floor(10));
            return;
          }
          if (!called) {
            called = true;
            fn();
          }
        };
        if (document.addEventListener) {
          document.addEventListener("DOMContentLoaded", wrappedFn, false);
          window.addEventListener("load", wrappedFn, false);
        } else if (document.attachEvent) {
          document.attachEvent("onreadystatechange", () => {
            if (document.readyState === "complete") {
              wrappedFn();
            }
          });
          window.attachEvent("onload", wrappedFn);
        }
      }
    };
    MIN_NAME = "[MIN_NAME]";
    MAX_NAME = "[MAX_NAME]";
    nameCompare = function(a, b) {
      if (a === b) {
        return 0;
      } else if (a === MIN_NAME || b === MAX_NAME) {
        return -1;
      } else if (b === MIN_NAME || a === MAX_NAME) {
        return 1;
      } else {
        const aAsInt = tryParseInt(a), bAsInt = tryParseInt(b);
        if (aAsInt !== null) {
          if (bAsInt !== null) {
            return aAsInt - bAsInt === 0 ? a.length - b.length : aAsInt - bAsInt;
          } else {
            return -1;
          }
        } else if (bAsInt !== null) {
          return 1;
        } else {
          return a < b ? -1 : 1;
        }
      }
    };
    stringCompare = function(a, b) {
      if (a === b) {
        return 0;
      } else if (a < b) {
        return -1;
      } else {
        return 1;
      }
    };
    requireKey = function(key2, obj) {
      if (obj && key2 in obj) {
        return obj[key2];
      } else {
        throw new Error("Missing required key (" + key2 + ") in object: " + stringify(obj));
      }
    };
    ObjectToUniqueKey = function(obj) {
      if (typeof obj !== "object" || obj === null) {
        return stringify(obj);
      }
      const keys = [];
      for (const k in obj) {
        keys.push(k);
      }
      keys.sort();
      let key2 = "{";
      for (let i = 0; i < keys.length; i++) {
        if (i !== 0) {
          key2 += ",";
        }
        key2 += stringify(keys[i]);
        key2 += ":";
        key2 += ObjectToUniqueKey(obj[keys[i]]);
      }
      key2 += "}";
      return key2;
    };
    splitStringBySize = function(str, segsize) {
      const len = str.length;
      if (len <= segsize) {
        return [str];
      }
      const dataSegs = [];
      for (let c = 0; c < len; c += segsize) {
        if (c + segsize > len) {
          dataSegs.push(str.substring(c, len));
        } else {
          dataSegs.push(str.substring(c, c + segsize));
        }
      }
      return dataSegs;
    };
    doubleToIEEE754String = function(v) {
      assert(!isInvalidJSONNumber(v), "Invalid JSON number");
      const ebits = 11, fbits = 52;
      const bias = (1 << ebits - 1) - 1;
      let s2, e, f, ln, i;
      if (v === 0) {
        e = 0;
        f = 0;
        s2 = 1 / v === -Infinity ? 1 : 0;
      } else {
        s2 = v < 0;
        v = Math.abs(v);
        if (v >= Math.pow(2, 1 - bias)) {
          ln = Math.min(Math.floor(Math.log(v) / Math.LN2), bias);
          e = ln + bias;
          f = Math.round(v * Math.pow(2, fbits - ln) - Math.pow(2, fbits));
        } else {
          e = 0;
          f = Math.round(v / Math.pow(2, 1 - bias - fbits));
        }
      }
      const bits = [];
      for (i = fbits; i; i -= 1) {
        bits.push(f % 2 ? 1 : 0);
        f = Math.floor(f / 2);
      }
      for (i = ebits; i; i -= 1) {
        bits.push(e % 2 ? 1 : 0);
        e = Math.floor(e / 2);
      }
      bits.push(s2 ? 1 : 0);
      bits.reverse();
      const str = bits.join("");
      let hexByteString = "";
      for (i = 0; i < 64; i += 8) {
        let hexByte = parseInt(str.substr(i, 8), 2).toString(16);
        if (hexByte.length === 1) {
          hexByte = "0" + hexByte;
        }
        hexByteString = hexByteString + hexByte;
      }
      return hexByteString.toLowerCase();
    };
    isChromeExtensionContentScript = function() {
      return !!(typeof window === "object" && window["chrome"] && window["chrome"]["extension"] && !/^chrome/.test(window.location.href));
    };
    isWindowsStoreApp = function() {
      return typeof Windows === "object" && typeof Windows.UI === "object";
    };
    INTEGER_REGEXP_ = new RegExp("^-?(0*)\\d{1,10}$");
    INTEGER_32_MIN = -2147483648;
    INTEGER_32_MAX = 2147483647;
    tryParseInt = function(str) {
      if (INTEGER_REGEXP_.test(str)) {
        const intVal = Number(str);
        if (intVal >= INTEGER_32_MIN && intVal <= INTEGER_32_MAX) {
          return intVal;
        }
      }
      return null;
    };
    exceptionGuard = function(fn) {
      try {
        fn();
      } catch (e) {
        setTimeout(() => {
          const stack = e.stack || "";
          warn("Exception was thrown by user callback.", stack);
          throw e;
        }, Math.floor(0));
      }
    };
    beingCrawled = function() {
      const userAgent = typeof window === "object" && window["navigator"] && window["navigator"]["userAgent"] || "";
      return userAgent.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
    };
    setTimeoutNonBlocking = function(fn, time) {
      const timeout = setTimeout(fn, time);
      if (typeof timeout === "number" && typeof Deno !== "undefined" && Deno["unrefTimer"]) {
        Deno.unrefTimer(timeout);
      } else if (typeof timeout === "object" && timeout["unref"]) {
        timeout["unref"]();
      }
      return timeout;
    };
    AppCheckTokenProvider = class {
      constructor(appName_, appCheckProvider) {
        this.appName_ = appName_;
        this.appCheckProvider = appCheckProvider;
        this.appCheck = appCheckProvider === null || appCheckProvider === void 0 ? void 0 : appCheckProvider.getImmediate({ optional: true });
        if (!this.appCheck) {
          appCheckProvider === null || appCheckProvider === void 0 ? void 0 : appCheckProvider.get().then((appCheck) => this.appCheck = appCheck);
        }
      }
      getToken(forceRefresh) {
        if (!this.appCheck) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (this.appCheck) {
                this.getToken(forceRefresh).then(resolve, reject);
              } else {
                resolve(null);
              }
            }, 0);
          });
        }
        return this.appCheck.getToken(forceRefresh);
      }
      addTokenChangeListener(listener) {
        var _a;
        (_a = this.appCheckProvider) === null || _a === void 0 ? void 0 : _a.get().then((appCheck) => appCheck.addTokenListener(listener));
      }
      notifyForInvalidToken() {
        warn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`);
      }
    };
    FirebaseAuthTokenProvider = class {
      constructor(appName_, firebaseOptions_, authProvider_) {
        this.appName_ = appName_;
        this.firebaseOptions_ = firebaseOptions_;
        this.authProvider_ = authProvider_;
        this.auth_ = null;
        this.auth_ = authProvider_.getImmediate({ optional: true });
        if (!this.auth_) {
          authProvider_.onInit((auth) => this.auth_ = auth);
        }
      }
      getToken(forceRefresh) {
        if (!this.auth_) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (this.auth_) {
                this.getToken(forceRefresh).then(resolve, reject);
              } else {
                resolve(null);
              }
            }, 0);
          });
        }
        return this.auth_.getToken(forceRefresh).catch((error3) => {
          if (error3 && error3.code === "auth/token-not-initialized") {
            log("Got auth/token-not-initialized error.  Treating as null token.");
            return null;
          } else {
            return Promise.reject(error3);
          }
        });
      }
      addTokenChangeListener(listener) {
        if (this.auth_) {
          this.auth_.addAuthTokenListener(listener);
        } else {
          this.authProvider_.get().then((auth) => auth.addAuthTokenListener(listener));
        }
      }
      removeTokenChangeListener(listener) {
        this.authProvider_.get().then((auth) => auth.removeAuthTokenListener(listener));
      }
      notifyForInvalidToken() {
        let errorMessage = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
        if ("credential" in this.firebaseOptions_) {
          errorMessage += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.';
        } else if ("serviceAccount" in this.firebaseOptions_) {
          errorMessage += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.';
        } else {
          errorMessage += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.';
        }
        warn(errorMessage);
      }
    };
    EmulatorTokenProvider = class {
      constructor(accessToken) {
        this.accessToken = accessToken;
      }
      getToken(forceRefresh) {
        return Promise.resolve({
          accessToken: this.accessToken
        });
      }
      addTokenChangeListener(listener) {
        listener(this.accessToken);
      }
      removeTokenChangeListener(listener) {
      }
      notifyForInvalidToken() {
      }
    };
    EmulatorTokenProvider.OWNER = "owner";
    PROTOCOL_VERSION = "5";
    VERSION_PARAM = "v";
    TRANSPORT_SESSION_PARAM = "s";
    REFERER_PARAM = "r";
    FORGE_REF = "f";
    FORGE_DOMAIN_RE = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
    LAST_SESSION_PARAM = "ls";
    APPLICATION_ID_PARAM = "p";
    APP_CHECK_TOKEN_PARAM = "ac";
    WEBSOCKET = "websocket";
    LONG_POLLING = "long_polling";
    RepoInfo = class {
      constructor(host, secure, namespace, webSocketOnly, nodeAdmin = false, persistenceKey = "", includeNamespaceInQueryParams = false) {
        this.secure = secure;
        this.namespace = namespace;
        this.webSocketOnly = webSocketOnly;
        this.nodeAdmin = nodeAdmin;
        this.persistenceKey = persistenceKey;
        this.includeNamespaceInQueryParams = includeNamespaceInQueryParams;
        this._host = host.toLowerCase();
        this._domain = this._host.substr(this._host.indexOf(".") + 1);
        this.internalHost = PersistentStorage.get("host:" + host) || this._host;
      }
      isCacheableHost() {
        return this.internalHost.substr(0, 2) === "s-";
      }
      isCustomHost() {
        return this._domain !== "firebaseio.com" && this._domain !== "firebaseio-demo.com";
      }
      get host() {
        return this._host;
      }
      set host(newHost) {
        if (newHost !== this.internalHost) {
          this.internalHost = newHost;
          if (this.isCacheableHost()) {
            PersistentStorage.set("host:" + this._host, this.internalHost);
          }
        }
      }
      toString() {
        let str = this.toURLString();
        if (this.persistenceKey) {
          str += "<" + this.persistenceKey + ">";
        }
        return str;
      }
      toURLString() {
        const protocol = this.secure ? "https://" : "http://";
        const query = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
        return `${protocol}${this.host}/${query}`;
      }
    };
    StatsCollection = class {
      constructor() {
        this.counters_ = {};
      }
      incrementCounter(name6, amount = 1) {
        if (!contains(this.counters_, name6)) {
          this.counters_[name6] = 0;
        }
        this.counters_[name6] += amount;
      }
      get() {
        return deepCopy(this.counters_);
      }
    };
    collections = {};
    reporters = {};
    PacketReceiver = class {
      constructor(onMessage_) {
        this.onMessage_ = onMessage_;
        this.pendingResponses = [];
        this.currentResponseNum = 0;
        this.closeAfterResponse = -1;
        this.onClose = null;
      }
      closeAfter(responseNum, callback) {
        this.closeAfterResponse = responseNum;
        this.onClose = callback;
        if (this.closeAfterResponse < this.currentResponseNum) {
          this.onClose();
          this.onClose = null;
        }
      }
      handleResponse(requestNum, data) {
        this.pendingResponses[requestNum] = data;
        while (this.pendingResponses[this.currentResponseNum]) {
          const toProcess = this.pendingResponses[this.currentResponseNum];
          delete this.pendingResponses[this.currentResponseNum];
          for (let i = 0; i < toProcess.length; ++i) {
            if (toProcess[i]) {
              exceptionGuard(() => {
                this.onMessage_(toProcess[i]);
              });
            }
          }
          if (this.currentResponseNum === this.closeAfterResponse) {
            if (this.onClose) {
              this.onClose();
              this.onClose = null;
            }
            break;
          }
          this.currentResponseNum++;
        }
      }
    };
    FIREBASE_LONGPOLL_START_PARAM = "start";
    FIREBASE_LONGPOLL_CLOSE_COMMAND = "close";
    FIREBASE_LONGPOLL_COMMAND_CB_NAME = "pLPCommand";
    FIREBASE_LONGPOLL_DATA_CB_NAME = "pRTLPCB";
    FIREBASE_LONGPOLL_ID_PARAM = "id";
    FIREBASE_LONGPOLL_PW_PARAM = "pw";
    FIREBASE_LONGPOLL_SERIAL_PARAM = "ser";
    FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = "cb";
    FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = "seg";
    FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = "ts";
    FIREBASE_LONGPOLL_DATA_PARAM = "d";
    FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = "dframe";
    MAX_URL_DATA_SIZE = 1870;
    SEG_HEADER_SIZE = 30;
    MAX_PAYLOAD_SIZE = MAX_URL_DATA_SIZE - SEG_HEADER_SIZE;
    KEEPALIVE_REQUEST_INTERVAL = 25e3;
    LP_CONNECT_TIMEOUT = 3e4;
    BrowserPollConnection = class {
      constructor(connId, repoInfo, applicationId, appCheckToken, authToken, transportSessionId, lastSessionId) {
        this.connId = connId;
        this.repoInfo = repoInfo;
        this.applicationId = applicationId;
        this.appCheckToken = appCheckToken;
        this.authToken = authToken;
        this.transportSessionId = transportSessionId;
        this.lastSessionId = lastSessionId;
        this.bytesSent = 0;
        this.bytesReceived = 0;
        this.everConnected_ = false;
        this.log_ = logWrapper(connId);
        this.stats_ = statsManagerGetCollection(repoInfo);
        this.urlFn = (params) => {
          if (this.appCheckToken) {
            params[APP_CHECK_TOKEN_PARAM] = this.appCheckToken;
          }
          return repoInfoConnectionURL(repoInfo, LONG_POLLING, params);
        };
      }
      open(onMessage, onDisconnect) {
        this.curSegmentNum = 0;
        this.onDisconnect_ = onDisconnect;
        this.myPacketOrderer = new PacketReceiver(onMessage);
        this.isClosed_ = false;
        this.connectTimeoutTimer_ = setTimeout(() => {
          this.log_("Timed out trying to connect.");
          this.onClosed_();
          this.connectTimeoutTimer_ = null;
        }, Math.floor(LP_CONNECT_TIMEOUT));
        executeWhenDOMReady(() => {
          if (this.isClosed_) {
            return;
          }
          this.scriptTagHolder = new FirebaseIFrameScriptHolder((...args) => {
            const [command, arg1, arg2, arg3, arg4] = args;
            this.incrementIncomingBytes_(args);
            if (!this.scriptTagHolder) {
              return;
            }
            if (this.connectTimeoutTimer_) {
              clearTimeout(this.connectTimeoutTimer_);
              this.connectTimeoutTimer_ = null;
            }
            this.everConnected_ = true;
            if (command === FIREBASE_LONGPOLL_START_PARAM) {
              this.id = arg1;
              this.password = arg2;
            } else if (command === FIREBASE_LONGPOLL_CLOSE_COMMAND) {
              if (arg1) {
                this.scriptTagHolder.sendNewPolls = false;
                this.myPacketOrderer.closeAfter(arg1, () => {
                  this.onClosed_();
                });
              } else {
                this.onClosed_();
              }
            } else {
              throw new Error("Unrecognized command received: " + command);
            }
          }, (...args) => {
            const [pN, data] = args;
            this.incrementIncomingBytes_(args);
            this.myPacketOrderer.handleResponse(pN, data);
          }, () => {
            this.onClosed_();
          }, this.urlFn);
          const urlParams = {};
          urlParams[FIREBASE_LONGPOLL_START_PARAM] = "t";
          urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(Math.random() * 1e8);
          if (this.scriptTagHolder.uniqueCallbackIdentifier) {
            urlParams[FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = this.scriptTagHolder.uniqueCallbackIdentifier;
          }
          urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
          if (this.transportSessionId) {
            urlParams[TRANSPORT_SESSION_PARAM] = this.transportSessionId;
          }
          if (this.lastSessionId) {
            urlParams[LAST_SESSION_PARAM] = this.lastSessionId;
          }
          if (this.applicationId) {
            urlParams[APPLICATION_ID_PARAM] = this.applicationId;
          }
          if (this.appCheckToken) {
            urlParams[APP_CHECK_TOKEN_PARAM] = this.appCheckToken;
          }
          if (typeof location !== "undefined" && location.hostname && FORGE_DOMAIN_RE.test(location.hostname)) {
            urlParams[REFERER_PARAM] = FORGE_REF;
          }
          const connectURL = this.urlFn(urlParams);
          this.log_("Connecting via long-poll to " + connectURL);
          this.scriptTagHolder.addTag(connectURL, () => {
          });
        });
      }
      start() {
        this.scriptTagHolder.startLongPoll(this.id, this.password);
        this.addDisconnectPingFrame(this.id, this.password);
      }
      static forceAllow() {
        BrowserPollConnection.forceAllow_ = true;
      }
      static forceDisallow() {
        BrowserPollConnection.forceDisallow_ = true;
      }
      static isAvailable() {
        if (isNodeSdk()) {
          return false;
        } else if (BrowserPollConnection.forceAllow_) {
          return true;
        } else {
          return !BrowserPollConnection.forceDisallow_ && typeof document !== "undefined" && document.createElement != null && !isChromeExtensionContentScript() && !isWindowsStoreApp();
        }
      }
      markConnectionHealthy() {
      }
      shutdown_() {
        this.isClosed_ = true;
        if (this.scriptTagHolder) {
          this.scriptTagHolder.close();
          this.scriptTagHolder = null;
        }
        if (this.myDisconnFrame) {
          document.body.removeChild(this.myDisconnFrame);
          this.myDisconnFrame = null;
        }
        if (this.connectTimeoutTimer_) {
          clearTimeout(this.connectTimeoutTimer_);
          this.connectTimeoutTimer_ = null;
        }
      }
      onClosed_() {
        if (!this.isClosed_) {
          this.log_("Longpoll is closing itself");
          this.shutdown_();
          if (this.onDisconnect_) {
            this.onDisconnect_(this.everConnected_);
            this.onDisconnect_ = null;
          }
        }
      }
      close() {
        if (!this.isClosed_) {
          this.log_("Longpoll is being closed.");
          this.shutdown_();
        }
      }
      send(data) {
        const dataStr = stringify(data);
        this.bytesSent += dataStr.length;
        this.stats_.incrementCounter("bytes_sent", dataStr.length);
        const base64data = base64Encode(dataStr);
        const dataSegs = splitStringBySize(base64data, MAX_PAYLOAD_SIZE);
        for (let i = 0; i < dataSegs.length; i++) {
          this.scriptTagHolder.enqueueSegment(this.curSegmentNum, dataSegs.length, dataSegs[i]);
          this.curSegmentNum++;
        }
      }
      addDisconnectPingFrame(id, pw) {
        if (isNodeSdk()) {
          return;
        }
        this.myDisconnFrame = document.createElement("iframe");
        const urlParams = {};
        urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = "t";
        urlParams[FIREBASE_LONGPOLL_ID_PARAM] = id;
        urlParams[FIREBASE_LONGPOLL_PW_PARAM] = pw;
        this.myDisconnFrame.src = this.urlFn(urlParams);
        this.myDisconnFrame.style.display = "none";
        document.body.appendChild(this.myDisconnFrame);
      }
      incrementIncomingBytes_(args) {
        const bytesReceived = stringify(args).length;
        this.bytesReceived += bytesReceived;
        this.stats_.incrementCounter("bytes_received", bytesReceived);
      }
    };
    FirebaseIFrameScriptHolder = class {
      constructor(commandCB, onMessageCB, onDisconnect, urlFn) {
        this.onDisconnect = onDisconnect;
        this.urlFn = urlFn;
        this.outstandingRequests = /* @__PURE__ */ new Set();
        this.pendingSegs = [];
        this.currentSerial = Math.floor(Math.random() * 1e8);
        this.sendNewPolls = true;
        if (!isNodeSdk()) {
          this.uniqueCallbackIdentifier = LUIDGenerator();
          window[FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = commandCB;
          window[FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = onMessageCB;
          this.myIFrame = FirebaseIFrameScriptHolder.createIFrame_();
          let script = "";
          if (this.myIFrame.src && this.myIFrame.src.substr(0, "javascript:".length) === "javascript:") {
            const currentDomain = document.domain;
            script = '<script>document.domain="' + currentDomain + '";<\/script>';
          }
          const iframeContents = "<html><body>" + script + "</body></html>";
          try {
            this.myIFrame.doc.open();
            this.myIFrame.doc.write(iframeContents);
            this.myIFrame.doc.close();
          } catch (e) {
            log("frame writing exception");
            if (e.stack) {
              log(e.stack);
            }
            log(e);
          }
        } else {
          this.commandCB = commandCB;
          this.onMessageCB = onMessageCB;
        }
      }
      static createIFrame_() {
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        if (document.body) {
          document.body.appendChild(iframe);
          try {
            const a = iframe.contentWindow.document;
            if (!a) {
              log("No IE domain setting required");
            }
          } catch (e) {
            const domain = document.domain;
            iframe.src = "javascript:void((function(){document.open();document.domain='" + domain + "';document.close();})())";
          }
        } else {
          throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
        }
        if (iframe.contentDocument) {
          iframe.doc = iframe.contentDocument;
        } else if (iframe.contentWindow) {
          iframe.doc = iframe.contentWindow.document;
        } else if (iframe.document) {
          iframe.doc = iframe.document;
        }
        return iframe;
      }
      close() {
        this.alive = false;
        if (this.myIFrame) {
          this.myIFrame.doc.body.innerHTML = "";
          setTimeout(() => {
            if (this.myIFrame !== null) {
              document.body.removeChild(this.myIFrame);
              this.myIFrame = null;
            }
          }, Math.floor(0));
        }
        const onDisconnect = this.onDisconnect;
        if (onDisconnect) {
          this.onDisconnect = null;
          onDisconnect();
        }
      }
      startLongPoll(id, pw) {
        this.myID = id;
        this.myPW = pw;
        this.alive = true;
        while (this.newRequest_()) {
        }
      }
      newRequest_() {
        if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
          this.currentSerial++;
          const urlParams = {};
          urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
          urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
          urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
          let theURL = this.urlFn(urlParams);
          let curDataString = "";
          let i = 0;
          while (this.pendingSegs.length > 0) {
            const nextSeg = this.pendingSegs[0];
            if (nextSeg.d.length + SEG_HEADER_SIZE + curDataString.length <= MAX_URL_DATA_SIZE) {
              const theSeg = this.pendingSegs.shift();
              curDataString = curDataString + "&" + FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + "=" + theSeg.seg + "&" + FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + "=" + theSeg.ts + "&" + FIREBASE_LONGPOLL_DATA_PARAM + i + "=" + theSeg.d;
              i++;
            } else {
              break;
            }
          }
          theURL = theURL + curDataString;
          this.addLongPollTag_(theURL, this.currentSerial);
          return true;
        } else {
          return false;
        }
      }
      enqueueSegment(segnum, totalsegs, data) {
        this.pendingSegs.push({ seg: segnum, ts: totalsegs, d: data });
        if (this.alive) {
          this.newRequest_();
        }
      }
      addLongPollTag_(url, serial) {
        this.outstandingRequests.add(serial);
        const doNewRequest = () => {
          this.outstandingRequests.delete(serial);
          this.newRequest_();
        };
        const keepaliveTimeout = setTimeout(doNewRequest, Math.floor(KEEPALIVE_REQUEST_INTERVAL));
        const readyStateCB = () => {
          clearTimeout(keepaliveTimeout);
          doNewRequest();
        };
        this.addTag(url, readyStateCB);
      }
      addTag(url, loadCB) {
        if (isNodeSdk()) {
          this.doNodeLongPoll(url, loadCB);
        } else {
          setTimeout(() => {
            try {
              if (!this.sendNewPolls) {
                return;
              }
              const newScript = this.myIFrame.doc.createElement("script");
              newScript.type = "text/javascript";
              newScript.async = true;
              newScript.src = url;
              newScript.onload = newScript.onreadystatechange = function() {
                const rstate = newScript.readyState;
                if (!rstate || rstate === "loaded" || rstate === "complete") {
                  newScript.onload = newScript.onreadystatechange = null;
                  if (newScript.parentNode) {
                    newScript.parentNode.removeChild(newScript);
                  }
                  loadCB();
                }
              };
              newScript.onerror = () => {
                log("Long-poll script failed to load: " + url);
                this.sendNewPolls = false;
                this.close();
              };
              this.myIFrame.doc.body.appendChild(newScript);
            } catch (e) {
            }
          }, Math.floor(1));
        }
      }
    };
    WEBSOCKET_MAX_FRAME_SIZE = 16384;
    WEBSOCKET_KEEPALIVE_INTERVAL = 45e3;
    WebSocketImpl = null;
    if (typeof MozWebSocket !== "undefined") {
      WebSocketImpl = MozWebSocket;
    } else if (typeof WebSocket !== "undefined") {
      WebSocketImpl = WebSocket;
    }
    WebSocketConnection = class {
      constructor(connId, repoInfo, applicationId, appCheckToken, authToken, transportSessionId, lastSessionId) {
        this.connId = connId;
        this.applicationId = applicationId;
        this.appCheckToken = appCheckToken;
        this.authToken = authToken;
        this.keepaliveTimer = null;
        this.frames = null;
        this.totalFrames = 0;
        this.bytesSent = 0;
        this.bytesReceived = 0;
        this.log_ = logWrapper(this.connId);
        this.stats_ = statsManagerGetCollection(repoInfo);
        this.connURL = WebSocketConnection.connectionURL_(repoInfo, transportSessionId, lastSessionId, appCheckToken, applicationId);
        this.nodeAdmin = repoInfo.nodeAdmin;
      }
      static connectionURL_(repoInfo, transportSessionId, lastSessionId, appCheckToken, applicationId) {
        const urlParams = {};
        urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
        if (!isNodeSdk() && typeof location !== "undefined" && location.hostname && FORGE_DOMAIN_RE.test(location.hostname)) {
          urlParams[REFERER_PARAM] = FORGE_REF;
        }
        if (transportSessionId) {
          urlParams[TRANSPORT_SESSION_PARAM] = transportSessionId;
        }
        if (lastSessionId) {
          urlParams[LAST_SESSION_PARAM] = lastSessionId;
        }
        if (appCheckToken) {
          urlParams[APP_CHECK_TOKEN_PARAM] = appCheckToken;
        }
        if (applicationId) {
          urlParams[APPLICATION_ID_PARAM] = applicationId;
        }
        return repoInfoConnectionURL(repoInfo, WEBSOCKET, urlParams);
      }
      open(onMessage, onDisconnect) {
        this.onDisconnect = onDisconnect;
        this.onMessage = onMessage;
        this.log_("Websocket connecting to " + this.connURL);
        this.everConnected_ = false;
        PersistentStorage.set("previous_websocket_failure", true);
        try {
          let options;
          if (isNodeSdk()) {
            const device = this.nodeAdmin ? "AdminNode" : "Node";
            options = {
              headers: {
                "User-Agent": `Firebase/${PROTOCOL_VERSION}/${SDK_VERSION2}/${process.platform}/${device}`,
                "X-Firebase-GMPID": this.applicationId || ""
              }
            };
            if (this.authToken) {
              options.headers["Authorization"] = `Bearer ${this.authToken}`;
            }
            if (this.appCheckToken) {
              options.headers["X-Firebase-AppCheck"] = this.appCheckToken;
            }
            const env = process["env"];
            const proxy = this.connURL.indexOf("wss://") === 0 ? env["HTTPS_PROXY"] || env["https_proxy"] : env["HTTP_PROXY"] || env["http_proxy"];
            if (proxy) {
              options["proxy"] = { origin: proxy };
            }
          }
          this.mySock = new WebSocketImpl(this.connURL, [], options);
        } catch (e) {
          this.log_("Error instantiating WebSocket.");
          const error3 = e.message || e.data;
          if (error3) {
            this.log_(error3);
          }
          this.onClosed_();
          return;
        }
        this.mySock.onopen = () => {
          this.log_("Websocket connected.");
          this.everConnected_ = true;
        };
        this.mySock.onclose = () => {
          this.log_("Websocket connection was disconnected.");
          this.mySock = null;
          this.onClosed_();
        };
        this.mySock.onmessage = (m) => {
          this.handleIncomingFrame(m);
        };
        this.mySock.onerror = (e) => {
          this.log_("WebSocket error.  Closing connection.");
          const error3 = e.message || e.data;
          if (error3) {
            this.log_(error3);
          }
          this.onClosed_();
        };
      }
      start() {
      }
      static forceDisallow() {
        WebSocketConnection.forceDisallow_ = true;
      }
      static isAvailable() {
        let isOldAndroid = false;
        if (typeof navigator !== "undefined" && navigator.userAgent) {
          const oldAndroidRegex = /Android ([0-9]{0,}\.[0-9]{0,})/;
          const oldAndroidMatch = navigator.userAgent.match(oldAndroidRegex);
          if (oldAndroidMatch && oldAndroidMatch.length > 1) {
            if (parseFloat(oldAndroidMatch[1]) < 4.4) {
              isOldAndroid = true;
            }
          }
        }
        return !isOldAndroid && WebSocketImpl !== null && !WebSocketConnection.forceDisallow_;
      }
      static previouslyFailed() {
        return PersistentStorage.isInMemoryStorage || PersistentStorage.get("previous_websocket_failure") === true;
      }
      markConnectionHealthy() {
        PersistentStorage.remove("previous_websocket_failure");
      }
      appendFrame_(data) {
        this.frames.push(data);
        if (this.frames.length === this.totalFrames) {
          const fullMess = this.frames.join("");
          this.frames = null;
          const jsonMess = jsonEval(fullMess);
          this.onMessage(jsonMess);
        }
      }
      handleNewFrameCount_(frameCount) {
        this.totalFrames = frameCount;
        this.frames = [];
      }
      extractFrameCount_(data) {
        assert(this.frames === null, "We already have a frame buffer");
        if (data.length <= 6) {
          const frameCount = Number(data);
          if (!isNaN(frameCount)) {
            this.handleNewFrameCount_(frameCount);
            return null;
          }
        }
        this.handleNewFrameCount_(1);
        return data;
      }
      handleIncomingFrame(mess) {
        if (this.mySock === null) {
          return;
        }
        const data = mess["data"];
        this.bytesReceived += data.length;
        this.stats_.incrementCounter("bytes_received", data.length);
        this.resetKeepAlive();
        if (this.frames !== null) {
          this.appendFrame_(data);
        } else {
          const remainingData = this.extractFrameCount_(data);
          if (remainingData !== null) {
            this.appendFrame_(remainingData);
          }
        }
      }
      send(data) {
        this.resetKeepAlive();
        const dataStr = stringify(data);
        this.bytesSent += dataStr.length;
        this.stats_.incrementCounter("bytes_sent", dataStr.length);
        const dataSegs = splitStringBySize(dataStr, WEBSOCKET_MAX_FRAME_SIZE);
        if (dataSegs.length > 1) {
          this.sendString_(String(dataSegs.length));
        }
        for (let i = 0; i < dataSegs.length; i++) {
          this.sendString_(dataSegs[i]);
        }
      }
      shutdown_() {
        this.isClosed_ = true;
        if (this.keepaliveTimer) {
          clearInterval(this.keepaliveTimer);
          this.keepaliveTimer = null;
        }
        if (this.mySock) {
          this.mySock.close();
          this.mySock = null;
        }
      }
      onClosed_() {
        if (!this.isClosed_) {
          this.log_("WebSocket is closing itself");
          this.shutdown_();
          if (this.onDisconnect) {
            this.onDisconnect(this.everConnected_);
            this.onDisconnect = null;
          }
        }
      }
      close() {
        if (!this.isClosed_) {
          this.log_("WebSocket is being closed");
          this.shutdown_();
        }
      }
      resetKeepAlive() {
        clearInterval(this.keepaliveTimer);
        this.keepaliveTimer = setInterval(() => {
          if (this.mySock) {
            this.sendString_("0");
          }
          this.resetKeepAlive();
        }, Math.floor(WEBSOCKET_KEEPALIVE_INTERVAL));
      }
      sendString_(str) {
        try {
          this.mySock.send(str);
        } catch (e) {
          this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection.");
          setTimeout(this.onClosed_.bind(this), 0);
        }
      }
    };
    WebSocketConnection.responsesRequiredToBeHealthy = 2;
    WebSocketConnection.healthyTimeout = 3e4;
    TransportManager = class {
      constructor(repoInfo) {
        this.initTransports_(repoInfo);
      }
      static get ALL_TRANSPORTS() {
        return [BrowserPollConnection, WebSocketConnection];
      }
      static get IS_TRANSPORT_INITIALIZED() {
        return this.globalTransportInitialized_;
      }
      initTransports_(repoInfo) {
        const isWebSocketsAvailable = WebSocketConnection && WebSocketConnection["isAvailable"]();
        let isSkipPollConnection = isWebSocketsAvailable && !WebSocketConnection.previouslyFailed();
        if (repoInfo.webSocketOnly) {
          if (!isWebSocketsAvailable) {
            warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");
          }
          isSkipPollConnection = true;
        }
        if (isSkipPollConnection) {
          this.transports_ = [WebSocketConnection];
        } else {
          const transports = this.transports_ = [];
          for (const transport of TransportManager.ALL_TRANSPORTS) {
            if (transport && transport["isAvailable"]()) {
              transports.push(transport);
            }
          }
          TransportManager.globalTransportInitialized_ = true;
        }
      }
      initialTransport() {
        if (this.transports_.length > 0) {
          return this.transports_[0];
        } else {
          throw new Error("No transports available");
        }
      }
      upgradeTransport() {
        if (this.transports_.length > 1) {
          return this.transports_[1];
        } else {
          return null;
        }
      }
    };
    TransportManager.globalTransportInitialized_ = false;
    UPGRADE_TIMEOUT = 6e4;
    DELAY_BEFORE_SENDING_EXTRA_REQUESTS = 5e3;
    BYTES_SENT_HEALTHY_OVERRIDE = 10 * 1024;
    BYTES_RECEIVED_HEALTHY_OVERRIDE = 100 * 1024;
    MESSAGE_TYPE = "t";
    MESSAGE_DATA = "d";
    CONTROL_SHUTDOWN = "s";
    CONTROL_RESET = "r";
    CONTROL_ERROR = "e";
    CONTROL_PONG = "o";
    SWITCH_ACK = "a";
    END_TRANSMISSION = "n";
    PING = "p";
    SERVER_HELLO = "h";
    Connection = class {
      constructor(id, repoInfo_, applicationId_, appCheckToken_, authToken_, onMessage_, onReady_, onDisconnect_, onKill_, lastSessionId) {
        this.id = id;
        this.repoInfo_ = repoInfo_;
        this.applicationId_ = applicationId_;
        this.appCheckToken_ = appCheckToken_;
        this.authToken_ = authToken_;
        this.onMessage_ = onMessage_;
        this.onReady_ = onReady_;
        this.onDisconnect_ = onDisconnect_;
        this.onKill_ = onKill_;
        this.lastSessionId = lastSessionId;
        this.connectionCount = 0;
        this.pendingDataMessages = [];
        this.state_ = 0;
        this.log_ = logWrapper("c:" + this.id + ":");
        this.transportManager_ = new TransportManager(repoInfo_);
        this.log_("Connection created");
        this.start_();
      }
      start_() {
        const conn = this.transportManager_.initialTransport();
        this.conn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId);
        this.primaryResponsesRequired_ = conn["responsesRequiredToBeHealthy"] || 0;
        const onMessageReceived = this.connReceiver_(this.conn_);
        const onConnectionLost = this.disconnReceiver_(this.conn_);
        this.tx_ = this.conn_;
        this.rx_ = this.conn_;
        this.secondaryConn_ = null;
        this.isHealthy_ = false;
        setTimeout(() => {
          this.conn_ && this.conn_.open(onMessageReceived, onConnectionLost);
        }, Math.floor(0));
        const healthyTimeoutMS = conn["healthyTimeout"] || 0;
        if (healthyTimeoutMS > 0) {
          this.healthyTimeout_ = setTimeoutNonBlocking(() => {
            this.healthyTimeout_ = null;
            if (!this.isHealthy_) {
              if (this.conn_ && this.conn_.bytesReceived > BYTES_RECEIVED_HEALTHY_OVERRIDE) {
                this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy.");
                this.isHealthy_ = true;
                this.conn_.markConnectionHealthy();
              } else if (this.conn_ && this.conn_.bytesSent > BYTES_SENT_HEALTHY_OVERRIDE) {
                this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.");
              } else {
                this.log_("Closing unhealthy connection after timeout.");
                this.close();
              }
            }
          }, Math.floor(healthyTimeoutMS));
        }
      }
      nextTransportId_() {
        return "c:" + this.id + ":" + this.connectionCount++;
      }
      disconnReceiver_(conn) {
        return (everConnected) => {
          if (conn === this.conn_) {
            this.onConnectionLost_(everConnected);
          } else if (conn === this.secondaryConn_) {
            this.log_("Secondary connection lost.");
            this.onSecondaryConnectionLost_();
          } else {
            this.log_("closing an old connection");
          }
        };
      }
      connReceiver_(conn) {
        return (message) => {
          if (this.state_ !== 2) {
            if (conn === this.rx_) {
              this.onPrimaryMessageReceived_(message);
            } else if (conn === this.secondaryConn_) {
              this.onSecondaryMessageReceived_(message);
            } else {
              this.log_("message on old connection");
            }
          }
        };
      }
      sendRequest(dataMsg) {
        const msg = { t: "d", d: dataMsg };
        this.sendData_(msg);
      }
      tryCleanupConnection() {
        if (this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_) {
          this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId);
          this.conn_ = this.secondaryConn_;
          this.secondaryConn_ = null;
        }
      }
      onSecondaryControl_(controlData) {
        if (MESSAGE_TYPE in controlData) {
          const cmd = controlData[MESSAGE_TYPE];
          if (cmd === SWITCH_ACK) {
            this.upgradeIfSecondaryHealthy_();
          } else if (cmd === CONTROL_RESET) {
            this.log_("Got a reset on secondary, closing it");
            this.secondaryConn_.close();
            if (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) {
              this.close();
            }
          } else if (cmd === CONTROL_PONG) {
            this.log_("got pong on secondary.");
            this.secondaryResponsesRequired_--;
            this.upgradeIfSecondaryHealthy_();
          }
        }
      }
      onSecondaryMessageReceived_(parsedData) {
        const layer = requireKey("t", parsedData);
        const data = requireKey("d", parsedData);
        if (layer === "c") {
          this.onSecondaryControl_(data);
        } else if (layer === "d") {
          this.pendingDataMessages.push(data);
        } else {
          throw new Error("Unknown protocol layer: " + layer);
        }
      }
      upgradeIfSecondaryHealthy_() {
        if (this.secondaryResponsesRequired_ <= 0) {
          this.log_("Secondary connection is healthy.");
          this.isHealthy_ = true;
          this.secondaryConn_.markConnectionHealthy();
          this.proceedWithUpgrade_();
        } else {
          this.log_("sending ping on secondary.");
          this.secondaryConn_.send({ t: "c", d: { t: PING, d: {} } });
        }
      }
      proceedWithUpgrade_() {
        this.secondaryConn_.start();
        this.log_("sending client ack on secondary");
        this.secondaryConn_.send({ t: "c", d: { t: SWITCH_ACK, d: {} } });
        this.log_("Ending transmission on primary");
        this.conn_.send({ t: "c", d: { t: END_TRANSMISSION, d: {} } });
        this.tx_ = this.secondaryConn_;
        this.tryCleanupConnection();
      }
      onPrimaryMessageReceived_(parsedData) {
        const layer = requireKey("t", parsedData);
        const data = requireKey("d", parsedData);
        if (layer === "c") {
          this.onControl_(data);
        } else if (layer === "d") {
          this.onDataMessage_(data);
        }
      }
      onDataMessage_(message) {
        this.onPrimaryResponse_();
        this.onMessage_(message);
      }
      onPrimaryResponse_() {
        if (!this.isHealthy_) {
          this.primaryResponsesRequired_--;
          if (this.primaryResponsesRequired_ <= 0) {
            this.log_("Primary connection is healthy.");
            this.isHealthy_ = true;
            this.conn_.markConnectionHealthy();
          }
        }
      }
      onControl_(controlData) {
        const cmd = requireKey(MESSAGE_TYPE, controlData);
        if (MESSAGE_DATA in controlData) {
          const payload = controlData[MESSAGE_DATA];
          if (cmd === SERVER_HELLO) {
            this.onHandshake_(payload);
          } else if (cmd === END_TRANSMISSION) {
            this.log_("recvd end transmission on primary");
            this.rx_ = this.secondaryConn_;
            for (let i = 0; i < this.pendingDataMessages.length; ++i) {
              this.onDataMessage_(this.pendingDataMessages[i]);
            }
            this.pendingDataMessages = [];
            this.tryCleanupConnection();
          } else if (cmd === CONTROL_SHUTDOWN) {
            this.onConnectionShutdown_(payload);
          } else if (cmd === CONTROL_RESET) {
            this.onReset_(payload);
          } else if (cmd === CONTROL_ERROR) {
            error2("Server Error: " + payload);
          } else if (cmd === CONTROL_PONG) {
            this.log_("got pong on primary.");
            this.onPrimaryResponse_();
            this.sendPingOnPrimaryIfNecessary_();
          } else {
            error2("Unknown control packet command: " + cmd);
          }
        }
      }
      onHandshake_(handshake) {
        const timestamp = handshake.ts;
        const version6 = handshake.v;
        const host = handshake.h;
        this.sessionId = handshake.s;
        this.repoInfo_.host = host;
        if (this.state_ === 0) {
          this.conn_.start();
          this.onConnectionEstablished_(this.conn_, timestamp);
          if (PROTOCOL_VERSION !== version6) {
            warn("Protocol version mismatch detected");
          }
          this.tryStartUpgrade_();
        }
      }
      tryStartUpgrade_() {
        const conn = this.transportManager_.upgradeTransport();
        if (conn) {
          this.startUpgrade_(conn);
        }
      }
      startUpgrade_(conn) {
        this.secondaryConn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId);
        this.secondaryResponsesRequired_ = conn["responsesRequiredToBeHealthy"] || 0;
        const onMessage = this.connReceiver_(this.secondaryConn_);
        const onDisconnect = this.disconnReceiver_(this.secondaryConn_);
        this.secondaryConn_.open(onMessage, onDisconnect);
        setTimeoutNonBlocking(() => {
          if (this.secondaryConn_) {
            this.log_("Timed out trying to upgrade.");
            this.secondaryConn_.close();
          }
        }, Math.floor(UPGRADE_TIMEOUT));
      }
      onReset_(host) {
        this.log_("Reset packet received.  New host: " + host);
        this.repoInfo_.host = host;
        if (this.state_ === 1) {
          this.close();
        } else {
          this.closeConnections_();
          this.start_();
        }
      }
      onConnectionEstablished_(conn, timestamp) {
        this.log_("Realtime connection established.");
        this.conn_ = conn;
        this.state_ = 1;
        if (this.onReady_) {
          this.onReady_(timestamp, this.sessionId);
          this.onReady_ = null;
        }
        if (this.primaryResponsesRequired_ === 0) {
          this.log_("Primary connection is healthy.");
          this.isHealthy_ = true;
        } else {
          setTimeoutNonBlocking(() => {
            this.sendPingOnPrimaryIfNecessary_();
          }, Math.floor(DELAY_BEFORE_SENDING_EXTRA_REQUESTS));
        }
      }
      sendPingOnPrimaryIfNecessary_() {
        if (!this.isHealthy_ && this.state_ === 1) {
          this.log_("sending ping on primary.");
          this.sendData_({ t: "c", d: { t: PING, d: {} } });
        }
      }
      onSecondaryConnectionLost_() {
        const conn = this.secondaryConn_;
        this.secondaryConn_ = null;
        if (this.tx_ === conn || this.rx_ === conn) {
          this.close();
        }
      }
      onConnectionLost_(everConnected) {
        this.conn_ = null;
        if (!everConnected && this.state_ === 0) {
          this.log_("Realtime connection failed.");
          if (this.repoInfo_.isCacheableHost()) {
            PersistentStorage.remove("host:" + this.repoInfo_.host);
            this.repoInfo_.internalHost = this.repoInfo_.host;
          }
        } else if (this.state_ === 1) {
          this.log_("Realtime connection lost.");
        }
        this.close();
      }
      onConnectionShutdown_(reason) {
        this.log_("Connection shutdown command received. Shutting down...");
        if (this.onKill_) {
          this.onKill_(reason);
          this.onKill_ = null;
        }
        this.onDisconnect_ = null;
        this.close();
      }
      sendData_(data) {
        if (this.state_ !== 1) {
          throw "Connection is not connected";
        } else {
          this.tx_.send(data);
        }
      }
      close() {
        if (this.state_ !== 2) {
          this.log_("Closing realtime connection.");
          this.state_ = 2;
          this.closeConnections_();
          if (this.onDisconnect_) {
            this.onDisconnect_();
            this.onDisconnect_ = null;
          }
        }
      }
      closeConnections_() {
        this.log_("Shutting down all connections");
        if (this.conn_) {
          this.conn_.close();
          this.conn_ = null;
        }
        if (this.secondaryConn_) {
          this.secondaryConn_.close();
          this.secondaryConn_ = null;
        }
        if (this.healthyTimeout_) {
          clearTimeout(this.healthyTimeout_);
          this.healthyTimeout_ = null;
        }
      }
    };
    ServerActions = class {
      put(pathString, data, onComplete, hash2) {
      }
      merge(pathString, data, onComplete, hash2) {
      }
      refreshAuthToken(token) {
      }
      refreshAppCheckToken(token) {
      }
      onDisconnectPut(pathString, data, onComplete) {
      }
      onDisconnectMerge(pathString, data, onComplete) {
      }
      onDisconnectCancel(pathString, onComplete) {
      }
      reportStats(stats) {
      }
    };
    EventEmitter = class {
      constructor(allowedEvents_) {
        this.allowedEvents_ = allowedEvents_;
        this.listeners_ = {};
        assert(Array.isArray(allowedEvents_) && allowedEvents_.length > 0, "Requires a non-empty array");
      }
      trigger(eventType, ...varArgs) {
        if (Array.isArray(this.listeners_[eventType])) {
          const listeners = [...this.listeners_[eventType]];
          for (let i = 0; i < listeners.length; i++) {
            listeners[i].callback.apply(listeners[i].context, varArgs);
          }
        }
      }
      on(eventType, callback, context) {
        this.validateEventType_(eventType);
        this.listeners_[eventType] = this.listeners_[eventType] || [];
        this.listeners_[eventType].push({ callback, context });
        const eventData = this.getInitialEvent(eventType);
        if (eventData) {
          callback.apply(context, eventData);
        }
      }
      off(eventType, callback, context) {
        this.validateEventType_(eventType);
        const listeners = this.listeners_[eventType] || [];
        for (let i = 0; i < listeners.length; i++) {
          if (listeners[i].callback === callback && (!context || context === listeners[i].context)) {
            listeners.splice(i, 1);
            return;
          }
        }
      }
      validateEventType_(eventType) {
        assert(this.allowedEvents_.find((et) => {
          return et === eventType;
        }), "Unknown event: " + eventType);
      }
    };
    OnlineMonitor = class extends EventEmitter {
      constructor() {
        super(["online"]);
        this.online_ = true;
        if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined" && !isMobileCordova()) {
          window.addEventListener("online", () => {
            if (!this.online_) {
              this.online_ = true;
              this.trigger("online", true);
            }
          }, false);
          window.addEventListener("offline", () => {
            if (this.online_) {
              this.online_ = false;
              this.trigger("online", false);
            }
          }, false);
        }
      }
      static getInstance() {
        return new OnlineMonitor();
      }
      getInitialEvent(eventType) {
        assert(eventType === "online", "Unknown event type: " + eventType);
        return [this.online_];
      }
      currentlyOnline() {
        return this.online_;
      }
    };
    MAX_PATH_DEPTH = 32;
    MAX_PATH_LENGTH_BYTES = 768;
    Path = class {
      constructor(pathOrString, pieceNum) {
        if (pieceNum === void 0) {
          this.pieces_ = pathOrString.split("/");
          let copyTo = 0;
          for (let i = 0; i < this.pieces_.length; i++) {
            if (this.pieces_[i].length > 0) {
              this.pieces_[copyTo] = this.pieces_[i];
              copyTo++;
            }
          }
          this.pieces_.length = copyTo;
          this.pieceNum_ = 0;
        } else {
          this.pieces_ = pathOrString;
          this.pieceNum_ = pieceNum;
        }
      }
      toString() {
        let pathString = "";
        for (let i = this.pieceNum_; i < this.pieces_.length; i++) {
          if (this.pieces_[i] !== "") {
            pathString += "/" + this.pieces_[i];
          }
        }
        return pathString || "/";
      }
    };
    ValidationPath = class {
      constructor(path, errorPrefix_) {
        this.errorPrefix_ = errorPrefix_;
        this.parts_ = pathSlice(path, 0);
        this.byteLength_ = Math.max(1, this.parts_.length);
        for (let i = 0; i < this.parts_.length; i++) {
          this.byteLength_ += stringLength(this.parts_[i]);
        }
        validationPathCheckValid(this);
      }
    };
    VisibilityMonitor = class extends EventEmitter {
      constructor() {
        super(["visible"]);
        let hidden;
        let visibilityChange;
        if (typeof document !== "undefined" && typeof document.addEventListener !== "undefined") {
          if (typeof document["hidden"] !== "undefined") {
            visibilityChange = "visibilitychange";
            hidden = "hidden";
          } else if (typeof document["mozHidden"] !== "undefined") {
            visibilityChange = "mozvisibilitychange";
            hidden = "mozHidden";
          } else if (typeof document["msHidden"] !== "undefined") {
            visibilityChange = "msvisibilitychange";
            hidden = "msHidden";
          } else if (typeof document["webkitHidden"] !== "undefined") {
            visibilityChange = "webkitvisibilitychange";
            hidden = "webkitHidden";
          }
        }
        this.visible_ = true;
        if (visibilityChange) {
          document.addEventListener(visibilityChange, () => {
            const visible = !document[hidden];
            if (visible !== this.visible_) {
              this.visible_ = visible;
              this.trigger("visible", visible);
            }
          }, false);
        }
      }
      static getInstance() {
        return new VisibilityMonitor();
      }
      getInitialEvent(eventType) {
        assert(eventType === "visible", "Unknown event type: " + eventType);
        return [this.visible_];
      }
    };
    RECONNECT_MIN_DELAY = 1e3;
    RECONNECT_MAX_DELAY_DEFAULT = 60 * 5 * 1e3;
    RECONNECT_MAX_DELAY_FOR_ADMINS = 30 * 1e3;
    RECONNECT_DELAY_MULTIPLIER = 1.3;
    RECONNECT_DELAY_RESET_TIMEOUT = 3e4;
    SERVER_KILL_INTERRUPT_REASON = "server_kill";
    INVALID_TOKEN_THRESHOLD = 3;
    PersistentConnection = class extends ServerActions {
      constructor(repoInfo_, applicationId_, onDataUpdate_, onConnectStatus_, onServerInfoUpdate_, authTokenProvider_, appCheckTokenProvider_, authOverride_) {
        super();
        this.repoInfo_ = repoInfo_;
        this.applicationId_ = applicationId_;
        this.onDataUpdate_ = onDataUpdate_;
        this.onConnectStatus_ = onConnectStatus_;
        this.onServerInfoUpdate_ = onServerInfoUpdate_;
        this.authTokenProvider_ = authTokenProvider_;
        this.appCheckTokenProvider_ = appCheckTokenProvider_;
        this.authOverride_ = authOverride_;
        this.id = PersistentConnection.nextPersistentConnectionId_++;
        this.log_ = logWrapper("p:" + this.id + ":");
        this.interruptReasons_ = {};
        this.listens = /* @__PURE__ */ new Map();
        this.outstandingPuts_ = [];
        this.outstandingGets_ = [];
        this.outstandingPutCount_ = 0;
        this.outstandingGetCount_ = 0;
        this.onDisconnectRequestQueue_ = [];
        this.connected_ = false;
        this.reconnectDelay_ = RECONNECT_MIN_DELAY;
        this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_DEFAULT;
        this.securityDebugCallback_ = null;
        this.lastSessionId = null;
        this.establishConnectionTimer_ = null;
        this.visible_ = false;
        this.requestCBHash_ = {};
        this.requestNumber_ = 0;
        this.realtime_ = null;
        this.authToken_ = null;
        this.appCheckToken_ = null;
        this.forceTokenRefresh_ = false;
        this.invalidAuthTokenCount_ = 0;
        this.invalidAppCheckTokenCount_ = 0;
        this.firstConnection_ = true;
        this.lastConnectionAttemptTime_ = null;
        this.lastConnectionEstablishedTime_ = null;
        if (authOverride_ && !isNodeSdk()) {
          throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
        }
        VisibilityMonitor.getInstance().on("visible", this.onVisible_, this);
        if (repoInfo_.host.indexOf("fblocal") === -1) {
          OnlineMonitor.getInstance().on("online", this.onOnline_, this);
        }
      }
      sendRequest(action, body, onResponse) {
        const curReqNum = ++this.requestNumber_;
        const msg = { r: curReqNum, a: action, b: body };
        this.log_(stringify(msg));
        assert(this.connected_, "sendRequest call when we're not connected not allowed.");
        this.realtime_.sendRequest(msg);
        if (onResponse) {
          this.requestCBHash_[curReqNum] = onResponse;
        }
      }
      get(query) {
        this.initConnection_();
        const deferred = new Deferred();
        const request = {
          p: query._path.toString(),
          q: query._queryObject
        };
        const outstandingGet = {
          action: "g",
          request,
          onComplete: (message) => {
            const payload = message["d"];
            if (message["s"] === "ok") {
              deferred.resolve(payload);
            } else {
              deferred.reject(payload);
            }
          }
        };
        this.outstandingGets_.push(outstandingGet);
        this.outstandingGetCount_++;
        const index32 = this.outstandingGets_.length - 1;
        if (this.connected_) {
          this.sendGet_(index32);
        }
        return deferred.promise;
      }
      listen(query, currentHashFn, tag, onComplete) {
        this.initConnection_();
        const queryId = query._queryIdentifier;
        const pathString = query._path.toString();
        this.log_("Listen called for " + pathString + " " + queryId);
        if (!this.listens.has(pathString)) {
          this.listens.set(pathString, /* @__PURE__ */ new Map());
        }
        assert(query._queryParams.isDefault() || !query._queryParams.loadsAllData(), "listen() called for non-default but complete query");
        assert(!this.listens.get(pathString).has(queryId), `listen() called twice for same path/queryId.`);
        const listenSpec = {
          onComplete,
          hashFn: currentHashFn,
          query,
          tag
        };
        this.listens.get(pathString).set(queryId, listenSpec);
        if (this.connected_) {
          this.sendListen_(listenSpec);
        }
      }
      sendGet_(index32) {
        const get = this.outstandingGets_[index32];
        this.sendRequest("g", get.request, (message) => {
          delete this.outstandingGets_[index32];
          this.outstandingGetCount_--;
          if (this.outstandingGetCount_ === 0) {
            this.outstandingGets_ = [];
          }
          if (get.onComplete) {
            get.onComplete(message);
          }
        });
      }
      sendListen_(listenSpec) {
        const query = listenSpec.query;
        const pathString = query._path.toString();
        const queryId = query._queryIdentifier;
        this.log_("Listen on " + pathString + " for " + queryId);
        const req = { p: pathString };
        const action = "q";
        if (listenSpec.tag) {
          req["q"] = query._queryObject;
          req["t"] = listenSpec.tag;
        }
        req["h"] = listenSpec.hashFn();
        this.sendRequest(action, req, (message) => {
          const payload = message["d"];
          const status = message["s"];
          PersistentConnection.warnOnListenWarnings_(payload, query);
          const currentListenSpec = this.listens.get(pathString) && this.listens.get(pathString).get(queryId);
          if (currentListenSpec === listenSpec) {
            this.log_("listen response", message);
            if (status !== "ok") {
              this.removeListen_(pathString, queryId);
            }
            if (listenSpec.onComplete) {
              listenSpec.onComplete(status, payload);
            }
          }
        });
      }
      static warnOnListenWarnings_(payload, query) {
        if (payload && typeof payload === "object" && contains(payload, "w")) {
          const warnings = safeGet(payload, "w");
          if (Array.isArray(warnings) && ~warnings.indexOf("no_index")) {
            const indexSpec = '".indexOn": "' + query._queryParams.getIndex().toString() + '"';
            const indexPath = query._path.toString();
            warn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${indexSpec} at ${indexPath} to your security rules for better performance.`);
          }
        }
      }
      refreshAuthToken(token) {
        this.authToken_ = token;
        this.log_("Auth token refreshed");
        if (this.authToken_) {
          this.tryAuth();
        } else {
          if (this.connected_) {
            this.sendRequest("unauth", {}, () => {
            });
          }
        }
        this.reduceReconnectDelayIfAdminCredential_(token);
      }
      reduceReconnectDelayIfAdminCredential_(credential) {
        const isFirebaseSecret = credential && credential.length === 40;
        if (isFirebaseSecret || isAdmin(credential)) {
          this.log_("Admin auth credential detected.  Reducing max reconnect time.");
          this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
        }
      }
      refreshAppCheckToken(token) {
        this.appCheckToken_ = token;
        this.log_("App check token refreshed");
        if (this.appCheckToken_) {
          this.tryAppCheck();
        } else {
          if (this.connected_) {
            this.sendRequest("unappeck", {}, () => {
            });
          }
        }
      }
      tryAuth() {
        if (this.connected_ && this.authToken_) {
          const token = this.authToken_;
          const authMethod = isValidFormat(token) ? "auth" : "gauth";
          const requestData = { cred: token };
          if (this.authOverride_ === null) {
            requestData["noauth"] = true;
          } else if (typeof this.authOverride_ === "object") {
            requestData["authvar"] = this.authOverride_;
          }
          this.sendRequest(authMethod, requestData, (res) => {
            const status = res["s"];
            const data = res["d"] || "error";
            if (this.authToken_ === token) {
              if (status === "ok") {
                this.invalidAuthTokenCount_ = 0;
              } else {
                this.onAuthRevoked_(status, data);
              }
            }
          });
        }
      }
      tryAppCheck() {
        if (this.connected_ && this.appCheckToken_) {
          this.sendRequest("appcheck", { "token": this.appCheckToken_ }, (res) => {
            const status = res["s"];
            const data = res["d"] || "error";
            if (status === "ok") {
              this.invalidAppCheckTokenCount_ = 0;
            } else {
              this.onAppCheckRevoked_(status, data);
            }
          });
        }
      }
      unlisten(query, tag) {
        const pathString = query._path.toString();
        const queryId = query._queryIdentifier;
        this.log_("Unlisten called for " + pathString + " " + queryId);
        assert(query._queryParams.isDefault() || !query._queryParams.loadsAllData(), "unlisten() called for non-default but complete query");
        const listen = this.removeListen_(pathString, queryId);
        if (listen && this.connected_) {
          this.sendUnlisten_(pathString, queryId, query._queryObject, tag);
        }
      }
      sendUnlisten_(pathString, queryId, queryObj, tag) {
        this.log_("Unlisten on " + pathString + " for " + queryId);
        const req = { p: pathString };
        const action = "n";
        if (tag) {
          req["q"] = queryObj;
          req["t"] = tag;
        }
        this.sendRequest(action, req);
      }
      onDisconnectPut(pathString, data, onComplete) {
        this.initConnection_();
        if (this.connected_) {
          this.sendOnDisconnect_("o", pathString, data, onComplete);
        } else {
          this.onDisconnectRequestQueue_.push({
            pathString,
            action: "o",
            data,
            onComplete
          });
        }
      }
      onDisconnectMerge(pathString, data, onComplete) {
        this.initConnection_();
        if (this.connected_) {
          this.sendOnDisconnect_("om", pathString, data, onComplete);
        } else {
          this.onDisconnectRequestQueue_.push({
            pathString,
            action: "om",
            data,
            onComplete
          });
        }
      }
      onDisconnectCancel(pathString, onComplete) {
        this.initConnection_();
        if (this.connected_) {
          this.sendOnDisconnect_("oc", pathString, null, onComplete);
        } else {
          this.onDisconnectRequestQueue_.push({
            pathString,
            action: "oc",
            data: null,
            onComplete
          });
        }
      }
      sendOnDisconnect_(action, pathString, data, onComplete) {
        const request = { p: pathString, d: data };
        this.log_("onDisconnect " + action, request);
        this.sendRequest(action, request, (response) => {
          if (onComplete) {
            setTimeout(() => {
              onComplete(response["s"], response["d"]);
            }, Math.floor(0));
          }
        });
      }
      put(pathString, data, onComplete, hash2) {
        this.putInternal("p", pathString, data, onComplete, hash2);
      }
      merge(pathString, data, onComplete, hash2) {
        this.putInternal("m", pathString, data, onComplete, hash2);
      }
      putInternal(action, pathString, data, onComplete, hash2) {
        this.initConnection_();
        const request = {
          p: pathString,
          d: data
        };
        if (hash2 !== void 0) {
          request["h"] = hash2;
        }
        this.outstandingPuts_.push({
          action,
          request,
          onComplete
        });
        this.outstandingPutCount_++;
        const index32 = this.outstandingPuts_.length - 1;
        if (this.connected_) {
          this.sendPut_(index32);
        } else {
          this.log_("Buffering put: " + pathString);
        }
      }
      sendPut_(index32) {
        const action = this.outstandingPuts_[index32].action;
        const request = this.outstandingPuts_[index32].request;
        const onComplete = this.outstandingPuts_[index32].onComplete;
        this.outstandingPuts_[index32].queued = this.connected_;
        this.sendRequest(action, request, (message) => {
          this.log_(action + " response", message);
          delete this.outstandingPuts_[index32];
          this.outstandingPutCount_--;
          if (this.outstandingPutCount_ === 0) {
            this.outstandingPuts_ = [];
          }
          if (onComplete) {
            onComplete(message["s"], message["d"]);
          }
        });
      }
      reportStats(stats) {
        if (this.connected_) {
          const request = { c: stats };
          this.log_("reportStats", request);
          this.sendRequest("s", request, (result) => {
            const status = result["s"];
            if (status !== "ok") {
              const errorReason = result["d"];
              this.log_("reportStats", "Error sending stats: " + errorReason);
            }
          });
        }
      }
      onDataMessage_(message) {
        if ("r" in message) {
          this.log_("from server: " + stringify(message));
          const reqNum = message["r"];
          const onResponse = this.requestCBHash_[reqNum];
          if (onResponse) {
            delete this.requestCBHash_[reqNum];
            onResponse(message["b"]);
          }
        } else if ("error" in message) {
          throw "A server-side error has occurred: " + message["error"];
        } else if ("a" in message) {
          this.onDataPush_(message["a"], message["b"]);
        }
      }
      onDataPush_(action, body) {
        this.log_("handleServerMessage", action, body);
        if (action === "d") {
          this.onDataUpdate_(
            body["p"],
            body["d"],
            false,
            body["t"]
          );
        } else if (action === "m") {
          this.onDataUpdate_(
            body["p"],
            body["d"],
            true,
            body["t"]
          );
        } else if (action === "c") {
          this.onListenRevoked_(body["p"], body["q"]);
        } else if (action === "ac") {
          this.onAuthRevoked_(body["s"], body["d"]);
        } else if (action === "apc") {
          this.onAppCheckRevoked_(body["s"], body["d"]);
        } else if (action === "sd") {
          this.onSecurityDebugPacket_(body);
        } else {
          error2("Unrecognized action received from server: " + stringify(action) + "\nAre you using the latest client?");
        }
      }
      onReady_(timestamp, sessionId) {
        this.log_("connection ready");
        this.connected_ = true;
        this.lastConnectionEstablishedTime_ = new Date().getTime();
        this.handleTimestamp_(timestamp);
        this.lastSessionId = sessionId;
        if (this.firstConnection_) {
          this.sendConnectStats_();
        }
        this.restoreState_();
        this.firstConnection_ = false;
        this.onConnectStatus_(true);
      }
      scheduleConnect_(timeout) {
        assert(!this.realtime_, "Scheduling a connect when we're already connected/ing?");
        if (this.establishConnectionTimer_) {
          clearTimeout(this.establishConnectionTimer_);
        }
        this.establishConnectionTimer_ = setTimeout(() => {
          this.establishConnectionTimer_ = null;
          this.establishConnection_();
        }, Math.floor(timeout));
      }
      initConnection_() {
        if (!this.realtime_ && this.firstConnection_) {
          this.scheduleConnect_(0);
        }
      }
      onVisible_(visible) {
        if (visible && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_) {
          this.log_("Window became visible.  Reducing delay.");
          this.reconnectDelay_ = RECONNECT_MIN_DELAY;
          if (!this.realtime_) {
            this.scheduleConnect_(0);
          }
        }
        this.visible_ = visible;
      }
      onOnline_(online) {
        if (online) {
          this.log_("Browser went online.");
          this.reconnectDelay_ = RECONNECT_MIN_DELAY;
          if (!this.realtime_) {
            this.scheduleConnect_(0);
          }
        } else {
          this.log_("Browser went offline.  Killing connection.");
          if (this.realtime_) {
            this.realtime_.close();
          }
        }
      }
      onRealtimeDisconnect_() {
        this.log_("data client disconnected");
        this.connected_ = false;
        this.realtime_ = null;
        this.cancelSentTransactions_();
        this.requestCBHash_ = {};
        if (this.shouldReconnect_()) {
          if (!this.visible_) {
            this.log_("Window isn't visible.  Delaying reconnect.");
            this.reconnectDelay_ = this.maxReconnectDelay_;
            this.lastConnectionAttemptTime_ = new Date().getTime();
          } else if (this.lastConnectionEstablishedTime_) {
            const timeSinceLastConnectSucceeded = new Date().getTime() - this.lastConnectionEstablishedTime_;
            if (timeSinceLastConnectSucceeded > RECONNECT_DELAY_RESET_TIMEOUT) {
              this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            }
            this.lastConnectionEstablishedTime_ = null;
          }
          const timeSinceLastConnectAttempt = new Date().getTime() - this.lastConnectionAttemptTime_;
          let reconnectDelay = Math.max(0, this.reconnectDelay_ - timeSinceLastConnectAttempt);
          reconnectDelay = Math.random() * reconnectDelay;
          this.log_("Trying to reconnect in " + reconnectDelay + "ms");
          this.scheduleConnect_(reconnectDelay);
          this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * RECONNECT_DELAY_MULTIPLIER);
        }
        this.onConnectStatus_(false);
      }
      async establishConnection_() {
        if (this.shouldReconnect_()) {
          this.log_("Making a connection attempt");
          this.lastConnectionAttemptTime_ = new Date().getTime();
          this.lastConnectionEstablishedTime_ = null;
          const onDataMessage = this.onDataMessage_.bind(this);
          const onReady = this.onReady_.bind(this);
          const onDisconnect = this.onRealtimeDisconnect_.bind(this);
          const connId = this.id + ":" + PersistentConnection.nextConnectionId_++;
          const lastSessionId = this.lastSessionId;
          let canceled2 = false;
          let connection = null;
          const closeFn = function() {
            if (connection) {
              connection.close();
            } else {
              canceled2 = true;
              onDisconnect();
            }
          };
          const sendRequestFn = function(msg) {
            assert(connection, "sendRequest call when we're not connected not allowed.");
            connection.sendRequest(msg);
          };
          this.realtime_ = {
            close: closeFn,
            sendRequest: sendRequestFn
          };
          const forceRefresh = this.forceTokenRefresh_;
          this.forceTokenRefresh_ = false;
          try {
            const [authToken, appCheckToken] = await Promise.all([
              this.authTokenProvider_.getToken(forceRefresh),
              this.appCheckTokenProvider_.getToken(forceRefresh)
            ]);
            if (!canceled2) {
              log("getToken() completed. Creating connection.");
              this.authToken_ = authToken && authToken.accessToken;
              this.appCheckToken_ = appCheckToken && appCheckToken.token;
              connection = new Connection(
                connId,
                this.repoInfo_,
                this.applicationId_,
                this.appCheckToken_,
                this.authToken_,
                onDataMessage,
                onReady,
                onDisconnect,
                (reason) => {
                  warn(reason + " (" + this.repoInfo_.toString() + ")");
                  this.interrupt(SERVER_KILL_INTERRUPT_REASON);
                },
                lastSessionId
              );
            } else {
              log("getToken() completed but was canceled");
            }
          } catch (error3) {
            this.log_("Failed to get token: " + error3);
            if (!canceled2) {
              if (this.repoInfo_.nodeAdmin) {
                warn(error3);
              }
              closeFn();
            }
          }
        }
      }
      interrupt(reason) {
        log("Interrupting connection for reason: " + reason);
        this.interruptReasons_[reason] = true;
        if (this.realtime_) {
          this.realtime_.close();
        } else {
          if (this.establishConnectionTimer_) {
            clearTimeout(this.establishConnectionTimer_);
            this.establishConnectionTimer_ = null;
          }
          if (this.connected_) {
            this.onRealtimeDisconnect_();
          }
        }
      }
      resume(reason) {
        log("Resuming connection for reason: " + reason);
        delete this.interruptReasons_[reason];
        if (isEmpty(this.interruptReasons_)) {
          this.reconnectDelay_ = RECONNECT_MIN_DELAY;
          if (!this.realtime_) {
            this.scheduleConnect_(0);
          }
        }
      }
      handleTimestamp_(timestamp) {
        const delta = timestamp - new Date().getTime();
        this.onServerInfoUpdate_({ serverTimeOffset: delta });
      }
      cancelSentTransactions_() {
        for (let i = 0; i < this.outstandingPuts_.length; i++) {
          const put = this.outstandingPuts_[i];
          if (put && "h" in put.request && put.queued) {
            if (put.onComplete) {
              put.onComplete("disconnect");
            }
            delete this.outstandingPuts_[i];
            this.outstandingPutCount_--;
          }
        }
        if (this.outstandingPutCount_ === 0) {
          this.outstandingPuts_ = [];
        }
      }
      onListenRevoked_(pathString, query) {
        let queryId;
        if (!query) {
          queryId = "default";
        } else {
          queryId = query.map((q) => ObjectToUniqueKey(q)).join("$");
        }
        const listen = this.removeListen_(pathString, queryId);
        if (listen && listen.onComplete) {
          listen.onComplete("permission_denied");
        }
      }
      removeListen_(pathString, queryId) {
        const normalizedPathString = new Path(pathString).toString();
        let listen;
        if (this.listens.has(normalizedPathString)) {
          const map2 = this.listens.get(normalizedPathString);
          listen = map2.get(queryId);
          map2.delete(queryId);
          if (map2.size === 0) {
            this.listens.delete(normalizedPathString);
          }
        } else {
          listen = void 0;
        }
        return listen;
      }
      onAuthRevoked_(statusCode, explanation) {
        log("Auth token revoked: " + statusCode + "/" + explanation);
        this.authToken_ = null;
        this.forceTokenRefresh_ = true;
        this.realtime_.close();
        if (statusCode === "invalid_token" || statusCode === "permission_denied") {
          this.invalidAuthTokenCount_++;
          if (this.invalidAuthTokenCount_ >= INVALID_TOKEN_THRESHOLD) {
            this.reconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
            this.authTokenProvider_.notifyForInvalidToken();
          }
        }
      }
      onAppCheckRevoked_(statusCode, explanation) {
        log("App check token revoked: " + statusCode + "/" + explanation);
        this.appCheckToken_ = null;
        this.forceTokenRefresh_ = true;
        if (statusCode === "invalid_token" || statusCode === "permission_denied") {
          this.invalidAppCheckTokenCount_++;
          if (this.invalidAppCheckTokenCount_ >= INVALID_TOKEN_THRESHOLD) {
            this.appCheckTokenProvider_.notifyForInvalidToken();
          }
        }
      }
      onSecurityDebugPacket_(body) {
        if (this.securityDebugCallback_) {
          this.securityDebugCallback_(body);
        } else {
          if ("msg" in body) {
            console.log("FIREBASE: " + body["msg"].replace("\n", "\nFIREBASE: "));
          }
        }
      }
      restoreState_() {
        this.tryAuth();
        this.tryAppCheck();
        for (const queries of this.listens.values()) {
          for (const listenSpec of queries.values()) {
            this.sendListen_(listenSpec);
          }
        }
        for (let i = 0; i < this.outstandingPuts_.length; i++) {
          if (this.outstandingPuts_[i]) {
            this.sendPut_(i);
          }
        }
        while (this.onDisconnectRequestQueue_.length) {
          const request = this.onDisconnectRequestQueue_.shift();
          this.sendOnDisconnect_(request.action, request.pathString, request.data, request.onComplete);
        }
        for (let i = 0; i < this.outstandingGets_.length; i++) {
          if (this.outstandingGets_[i]) {
            this.sendGet_(i);
          }
        }
      }
      sendConnectStats_() {
        const stats = {};
        let clientName = "js";
        if (isNodeSdk()) {
          if (this.repoInfo_.nodeAdmin) {
            clientName = "admin_node";
          } else {
            clientName = "node";
          }
        }
        stats["sdk." + clientName + "." + SDK_VERSION2.replace(/\./g, "-")] = 1;
        if (isMobileCordova()) {
          stats["framework.cordova"] = 1;
        } else if (isReactNative()) {
          stats["framework.reactnative"] = 1;
        }
        this.reportStats(stats);
      }
      shouldReconnect_() {
        const online = OnlineMonitor.getInstance().currentlyOnline();
        return isEmpty(this.interruptReasons_) && online;
      }
    };
    PersistentConnection.nextPersistentConnectionId_ = 0;
    PersistentConnection.nextConnectionId_ = 0;
    NamedNode = class {
      constructor(name6, node) {
        this.name = name6;
        this.node = node;
      }
      static Wrap(name6, node) {
        return new NamedNode(name6, node);
      }
    };
    Index = class {
      getCompare() {
        return this.compare.bind(this);
      }
      indexedValueChanged(oldNode, newNode) {
        const oldWrapped = new NamedNode(MIN_NAME, oldNode);
        const newWrapped = new NamedNode(MIN_NAME, newNode);
        return this.compare(oldWrapped, newWrapped) !== 0;
      }
      minPost() {
        return NamedNode.MIN;
      }
    };
    KeyIndex = class extends Index {
      static get __EMPTY_NODE() {
        return __EMPTY_NODE;
      }
      static set __EMPTY_NODE(val) {
        __EMPTY_NODE = val;
      }
      compare(a, b) {
        return nameCompare(a.name, b.name);
      }
      isDefinedOn(node) {
        throw assertionError("KeyIndex.isDefinedOn not expected to be called.");
      }
      indexedValueChanged(oldNode, newNode) {
        return false;
      }
      minPost() {
        return NamedNode.MIN;
      }
      maxPost() {
        return new NamedNode(MAX_NAME, __EMPTY_NODE);
      }
      makePost(indexValue, name6) {
        assert(typeof indexValue === "string", "KeyIndex indexValue must always be a string.");
        return new NamedNode(indexValue, __EMPTY_NODE);
      }
      toString() {
        return ".key";
      }
    };
    KEY_INDEX = new KeyIndex();
    SortedMapIterator = class {
      constructor(node, startKey, comparator, isReverse_, resultGenerator_ = null) {
        this.isReverse_ = isReverse_;
        this.resultGenerator_ = resultGenerator_;
        this.nodeStack_ = [];
        let cmp = 1;
        while (!node.isEmpty()) {
          node = node;
          cmp = startKey ? comparator(node.key, startKey) : 1;
          if (isReverse_) {
            cmp *= -1;
          }
          if (cmp < 0) {
            if (this.isReverse_) {
              node = node.left;
            } else {
              node = node.right;
            }
          } else if (cmp === 0) {
            this.nodeStack_.push(node);
            break;
          } else {
            this.nodeStack_.push(node);
            if (this.isReverse_) {
              node = node.right;
            } else {
              node = node.left;
            }
          }
        }
      }
      getNext() {
        if (this.nodeStack_.length === 0) {
          return null;
        }
        let node = this.nodeStack_.pop();
        let result;
        if (this.resultGenerator_) {
          result = this.resultGenerator_(node.key, node.value);
        } else {
          result = { key: node.key, value: node.value };
        }
        if (this.isReverse_) {
          node = node.left;
          while (!node.isEmpty()) {
            this.nodeStack_.push(node);
            node = node.right;
          }
        } else {
          node = node.right;
          while (!node.isEmpty()) {
            this.nodeStack_.push(node);
            node = node.left;
          }
        }
        return result;
      }
      hasNext() {
        return this.nodeStack_.length > 0;
      }
      peek() {
        if (this.nodeStack_.length === 0) {
          return null;
        }
        const node = this.nodeStack_[this.nodeStack_.length - 1];
        if (this.resultGenerator_) {
          return this.resultGenerator_(node.key, node.value);
        } else {
          return { key: node.key, value: node.value };
        }
      }
    };
    LLRBNode = class {
      constructor(key2, value, color, left, right) {
        this.key = key2;
        this.value = value;
        this.color = color != null ? color : LLRBNode.RED;
        this.left = left != null ? left : SortedMap.EMPTY_NODE;
        this.right = right != null ? right : SortedMap.EMPTY_NODE;
      }
      copy(key2, value, color, left, right) {
        return new LLRBNode(key2 != null ? key2 : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
      }
      count() {
        return this.left.count() + 1 + this.right.count();
      }
      isEmpty() {
        return false;
      }
      inorderTraversal(action) {
        return this.left.inorderTraversal(action) || !!action(this.key, this.value) || this.right.inorderTraversal(action);
      }
      reverseTraversal(action) {
        return this.right.reverseTraversal(action) || action(this.key, this.value) || this.left.reverseTraversal(action);
      }
      min_() {
        if (this.left.isEmpty()) {
          return this;
        } else {
          return this.left.min_();
        }
      }
      minKey() {
        return this.min_().key;
      }
      maxKey() {
        if (this.right.isEmpty()) {
          return this.key;
        } else {
          return this.right.maxKey();
        }
      }
      insert(key2, value, comparator) {
        let n = this;
        const cmp = comparator(key2, n.key);
        if (cmp < 0) {
          n = n.copy(null, null, null, n.left.insert(key2, value, comparator), null);
        } else if (cmp === 0) {
          n = n.copy(null, value, null, null, null);
        } else {
          n = n.copy(null, null, null, null, n.right.insert(key2, value, comparator));
        }
        return n.fixUp_();
      }
      removeMin_() {
        if (this.left.isEmpty()) {
          return SortedMap.EMPTY_NODE;
        }
        let n = this;
        if (!n.left.isRed_() && !n.left.left.isRed_()) {
          n = n.moveRedLeft_();
        }
        n = n.copy(null, null, null, n.left.removeMin_(), null);
        return n.fixUp_();
      }
      remove(key2, comparator) {
        let n, smallest;
        n = this;
        if (comparator(key2, n.key) < 0) {
          if (!n.left.isEmpty() && !n.left.isRed_() && !n.left.left.isRed_()) {
            n = n.moveRedLeft_();
          }
          n = n.copy(null, null, null, n.left.remove(key2, comparator), null);
        } else {
          if (n.left.isRed_()) {
            n = n.rotateRight_();
          }
          if (!n.right.isEmpty() && !n.right.isRed_() && !n.right.left.isRed_()) {
            n = n.moveRedRight_();
          }
          if (comparator(key2, n.key) === 0) {
            if (n.right.isEmpty()) {
              return SortedMap.EMPTY_NODE;
            } else {
              smallest = n.right.min_();
              n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin_());
            }
          }
          n = n.copy(null, null, null, null, n.right.remove(key2, comparator));
        }
        return n.fixUp_();
      }
      isRed_() {
        return this.color;
      }
      fixUp_() {
        let n = this;
        if (n.right.isRed_() && !n.left.isRed_()) {
          n = n.rotateLeft_();
        }
        if (n.left.isRed_() && n.left.left.isRed_()) {
          n = n.rotateRight_();
        }
        if (n.left.isRed_() && n.right.isRed_()) {
          n = n.colorFlip_();
        }
        return n;
      }
      moveRedLeft_() {
        let n = this.colorFlip_();
        if (n.right.left.isRed_()) {
          n = n.copy(null, null, null, null, n.right.rotateRight_());
          n = n.rotateLeft_();
          n = n.colorFlip_();
        }
        return n;
      }
      moveRedRight_() {
        let n = this.colorFlip_();
        if (n.left.left.isRed_()) {
          n = n.rotateRight_();
          n = n.colorFlip_();
        }
        return n;
      }
      rotateLeft_() {
        const nl = this.copy(null, null, LLRBNode.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, nl, null);
      }
      rotateRight_() {
        const nr = this.copy(null, null, LLRBNode.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, nr);
      }
      colorFlip_() {
        const left = this.left.copy(null, null, !this.left.color, null, null);
        const right = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, left, right);
      }
      checkMaxDepth_() {
        const blackDepth = this.check_();
        return Math.pow(2, blackDepth) <= this.count() + 1;
      }
      check_() {
        if (this.isRed_() && this.left.isRed_()) {
          throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
        }
        if (this.right.isRed_()) {
          throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
        }
        const blackDepth = this.left.check_();
        if (blackDepth !== this.right.check_()) {
          throw new Error("Black depths differ");
        } else {
          return blackDepth + (this.isRed_() ? 0 : 1);
        }
      }
    };
    LLRBNode.RED = true;
    LLRBNode.BLACK = false;
    LLRBEmptyNode = class {
      copy(key2, value, color, left, right) {
        return this;
      }
      insert(key2, value, comparator) {
        return new LLRBNode(key2, value, null);
      }
      remove(key2, comparator) {
        return this;
      }
      count() {
        return 0;
      }
      isEmpty() {
        return true;
      }
      inorderTraversal(action) {
        return false;
      }
      reverseTraversal(action) {
        return false;
      }
      minKey() {
        return null;
      }
      maxKey() {
        return null;
      }
      check_() {
        return 0;
      }
      isRed_() {
        return false;
      }
    };
    SortedMap = class {
      constructor(comparator_, root_ = SortedMap.EMPTY_NODE) {
        this.comparator_ = comparator_;
        this.root_ = root_;
      }
      insert(key2, value) {
        return new SortedMap(this.comparator_, this.root_.insert(key2, value, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
      }
      remove(key2) {
        return new SortedMap(this.comparator_, this.root_.remove(key2, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
      }
      get(key2) {
        let cmp;
        let node = this.root_;
        while (!node.isEmpty()) {
          cmp = this.comparator_(key2, node.key);
          if (cmp === 0) {
            return node.value;
          } else if (cmp < 0) {
            node = node.left;
          } else if (cmp > 0) {
            node = node.right;
          }
        }
        return null;
      }
      getPredecessorKey(key2) {
        let cmp, node = this.root_, rightParent = null;
        while (!node.isEmpty()) {
          cmp = this.comparator_(key2, node.key);
          if (cmp === 0) {
            if (!node.left.isEmpty()) {
              node = node.left;
              while (!node.right.isEmpty()) {
                node = node.right;
              }
              return node.key;
            } else if (rightParent) {
              return rightParent.key;
            } else {
              return null;
            }
          } else if (cmp < 0) {
            node = node.left;
          } else if (cmp > 0) {
            rightParent = node;
            node = node.right;
          }
        }
        throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
      }
      isEmpty() {
        return this.root_.isEmpty();
      }
      count() {
        return this.root_.count();
      }
      minKey() {
        return this.root_.minKey();
      }
      maxKey() {
        return this.root_.maxKey();
      }
      inorderTraversal(action) {
        return this.root_.inorderTraversal(action);
      }
      reverseTraversal(action) {
        return this.root_.reverseTraversal(action);
      }
      getIterator(resultGenerator) {
        return new SortedMapIterator(this.root_, null, this.comparator_, false, resultGenerator);
      }
      getIteratorFrom(key2, resultGenerator) {
        return new SortedMapIterator(this.root_, key2, this.comparator_, false, resultGenerator);
      }
      getReverseIteratorFrom(key2, resultGenerator) {
        return new SortedMapIterator(this.root_, key2, this.comparator_, true, resultGenerator);
      }
      getReverseIterator(resultGenerator) {
        return new SortedMapIterator(this.root_, null, this.comparator_, true, resultGenerator);
      }
    };
    SortedMap.EMPTY_NODE = new LLRBEmptyNode();
    priorityHashText = function(priority) {
      if (typeof priority === "number") {
        return "number:" + doubleToIEEE754String(priority);
      } else {
        return "string:" + priority;
      }
    };
    validatePriorityNode = function(priorityNode) {
      if (priorityNode.isLeafNode()) {
        const val = priorityNode.val();
        assert(typeof val === "string" || typeof val === "number" || typeof val === "object" && contains(val, ".sv"), "Priority must be a string or number.");
      } else {
        assert(priorityNode === MAX_NODE$2 || priorityNode.isEmpty(), "priority of unexpected type.");
      }
      assert(priorityNode === MAX_NODE$2 || priorityNode.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
    };
    LeafNode = class {
      constructor(value_, priorityNode_ = LeafNode.__childrenNodeConstructor.EMPTY_NODE) {
        this.value_ = value_;
        this.priorityNode_ = priorityNode_;
        this.lazyHash_ = null;
        assert(this.value_ !== void 0 && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value.");
        validatePriorityNode(this.priorityNode_);
      }
      static set __childrenNodeConstructor(val) {
        __childrenNodeConstructor = val;
      }
      static get __childrenNodeConstructor() {
        return __childrenNodeConstructor;
      }
      isLeafNode() {
        return true;
      }
      getPriority() {
        return this.priorityNode_;
      }
      updatePriority(newPriorityNode) {
        return new LeafNode(this.value_, newPriorityNode);
      }
      getImmediateChild(childName) {
        if (childName === ".priority") {
          return this.priorityNode_;
        } else {
          return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
        }
      }
      getChild(path) {
        if (pathIsEmpty(path)) {
          return this;
        } else if (pathGetFront(path) === ".priority") {
          return this.priorityNode_;
        } else {
          return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
        }
      }
      hasChild() {
        return false;
      }
      getPredecessorChildName(childName, childNode) {
        return null;
      }
      updateImmediateChild(childName, newChildNode) {
        if (childName === ".priority") {
          return this.updatePriority(newChildNode);
        } else if (newChildNode.isEmpty() && childName !== ".priority") {
          return this;
        } else {
          return LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(childName, newChildNode).updatePriority(this.priorityNode_);
        }
      }
      updateChild(path, newChildNode) {
        const front = pathGetFront(path);
        if (front === null) {
          return newChildNode;
        } else if (newChildNode.isEmpty() && front !== ".priority") {
          return this;
        } else {
          assert(front !== ".priority" || pathGetLength(path) === 1, ".priority must be the last token in a path");
          return this.updateImmediateChild(front, LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(pathPopFront(path), newChildNode));
        }
      }
      isEmpty() {
        return false;
      }
      numChildren() {
        return 0;
      }
      forEachChild(index32, action) {
        return false;
      }
      val(exportFormat) {
        if (exportFormat && !this.getPriority().isEmpty()) {
          return {
            ".value": this.getValue(),
            ".priority": this.getPriority().val()
          };
        } else {
          return this.getValue();
        }
      }
      hash() {
        if (this.lazyHash_ === null) {
          let toHash = "";
          if (!this.priorityNode_.isEmpty()) {
            toHash += "priority:" + priorityHashText(this.priorityNode_.val()) + ":";
          }
          const type = typeof this.value_;
          toHash += type + ":";
          if (type === "number") {
            toHash += doubleToIEEE754String(this.value_);
          } else {
            toHash += this.value_;
          }
          this.lazyHash_ = sha1(toHash);
        }
        return this.lazyHash_;
      }
      getValue() {
        return this.value_;
      }
      compareTo(other) {
        if (other === LeafNode.__childrenNodeConstructor.EMPTY_NODE) {
          return 1;
        } else if (other instanceof LeafNode.__childrenNodeConstructor) {
          return -1;
        } else {
          assert(other.isLeafNode(), "Unknown node type");
          return this.compareToLeafNode_(other);
        }
      }
      compareToLeafNode_(otherLeaf) {
        const otherLeafType = typeof otherLeaf.value_;
        const thisLeafType = typeof this.value_;
        const otherIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(otherLeafType);
        const thisIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(thisLeafType);
        assert(otherIndex >= 0, "Unknown leaf type: " + otherLeafType);
        assert(thisIndex >= 0, "Unknown leaf type: " + thisLeafType);
        if (otherIndex === thisIndex) {
          if (thisLeafType === "object") {
            return 0;
          } else {
            if (this.value_ < otherLeaf.value_) {
              return -1;
            } else if (this.value_ === otherLeaf.value_) {
              return 0;
            } else {
              return 1;
            }
          }
        } else {
          return thisIndex - otherIndex;
        }
      }
      withIndex() {
        return this;
      }
      isIndexed() {
        return true;
      }
      equals(other) {
        if (other === this) {
          return true;
        } else if (other.isLeafNode()) {
          const otherLeaf = other;
          return this.value_ === otherLeaf.value_ && this.priorityNode_.equals(otherLeaf.priorityNode_);
        } else {
          return false;
        }
      }
    };
    LeafNode.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
    PriorityIndex = class extends Index {
      compare(a, b) {
        const aPriority = a.node.getPriority();
        const bPriority = b.node.getPriority();
        const indexCmp = aPriority.compareTo(bPriority);
        if (indexCmp === 0) {
          return nameCompare(a.name, b.name);
        } else {
          return indexCmp;
        }
      }
      isDefinedOn(node) {
        return !node.getPriority().isEmpty();
      }
      indexedValueChanged(oldNode, newNode) {
        return !oldNode.getPriority().equals(newNode.getPriority());
      }
      minPost() {
        return NamedNode.MIN;
      }
      maxPost() {
        return new NamedNode(MAX_NAME, new LeafNode("[PRIORITY-POST]", MAX_NODE$1));
      }
      makePost(indexValue, name6) {
        const priorityNode = nodeFromJSON$1(indexValue);
        return new NamedNode(name6, new LeafNode("[PRIORITY-POST]", priorityNode));
      }
      toString() {
        return ".priority";
      }
    };
    PRIORITY_INDEX = new PriorityIndex();
    LOG_2 = Math.log(2);
    Base12Num = class {
      constructor(length) {
        const logBase2 = (num) => parseInt(Math.log(num) / LOG_2, 10);
        const bitMask = (bits) => parseInt(Array(bits + 1).join("1"), 2);
        this.count = logBase2(length + 1);
        this.current_ = this.count - 1;
        const mask = bitMask(this.count);
        this.bits_ = length + 1 & mask;
      }
      nextBitIsOne() {
        const result = !(this.bits_ & 1 << this.current_);
        this.current_--;
        return result;
      }
    };
    buildChildSet = function(childList, cmp, keyFn, mapSortFn) {
      childList.sort(cmp);
      const buildBalancedTree = function(low, high) {
        const length = high - low;
        let namedNode;
        let key2;
        if (length === 0) {
          return null;
        } else if (length === 1) {
          namedNode = childList[low];
          key2 = keyFn ? keyFn(namedNode) : namedNode;
          return new LLRBNode(key2, namedNode.node, LLRBNode.BLACK, null, null);
        } else {
          const middle = parseInt(length / 2, 10) + low;
          const left = buildBalancedTree(low, middle);
          const right = buildBalancedTree(middle + 1, high);
          namedNode = childList[middle];
          key2 = keyFn ? keyFn(namedNode) : namedNode;
          return new LLRBNode(key2, namedNode.node, LLRBNode.BLACK, left, right);
        }
      };
      const buildFrom12Array = function(base122) {
        let node = null;
        let root2 = null;
        let index32 = childList.length;
        const buildPennant = function(chunkSize, color) {
          const low = index32 - chunkSize;
          const high = index32;
          index32 -= chunkSize;
          const childTree = buildBalancedTree(low + 1, high);
          const namedNode = childList[low];
          const key2 = keyFn ? keyFn(namedNode) : namedNode;
          attachPennant(new LLRBNode(key2, namedNode.node, color, null, childTree));
        };
        const attachPennant = function(pennant) {
          if (node) {
            node.left = pennant;
            node = pennant;
          } else {
            root2 = pennant;
            node = pennant;
          }
        };
        for (let i = 0; i < base122.count; ++i) {
          const isOne = base122.nextBitIsOne();
          const chunkSize = Math.pow(2, base122.count - (i + 1));
          if (isOne) {
            buildPennant(chunkSize, LLRBNode.BLACK);
          } else {
            buildPennant(chunkSize, LLRBNode.BLACK);
            buildPennant(chunkSize, LLRBNode.RED);
          }
        }
        return root2;
      };
      const base12 = new Base12Num(childList.length);
      const root = buildFrom12Array(base12);
      return new SortedMap(mapSortFn || cmp, root);
    };
    fallbackObject = {};
    IndexMap = class {
      constructor(indexes_, indexSet_) {
        this.indexes_ = indexes_;
        this.indexSet_ = indexSet_;
      }
      static get Default() {
        assert(fallbackObject && PRIORITY_INDEX, "ChildrenNode.ts has not been loaded");
        _defaultIndexMap = _defaultIndexMap || new IndexMap({ ".priority": fallbackObject }, { ".priority": PRIORITY_INDEX });
        return _defaultIndexMap;
      }
      get(indexKey) {
        const sortedMap = safeGet(this.indexes_, indexKey);
        if (!sortedMap) {
          throw new Error("No index defined for " + indexKey);
        }
        if (sortedMap instanceof SortedMap) {
          return sortedMap;
        } else {
          return null;
        }
      }
      hasIndex(indexDefinition) {
        return contains(this.indexSet_, indexDefinition.toString());
      }
      addIndex(indexDefinition, existingChildren) {
        assert(indexDefinition !== KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
        const childList = [];
        let sawIndexedValue = false;
        const iter = existingChildren.getIterator(NamedNode.Wrap);
        let next = iter.getNext();
        while (next) {
          sawIndexedValue = sawIndexedValue || indexDefinition.isDefinedOn(next.node);
          childList.push(next);
          next = iter.getNext();
        }
        let newIndex;
        if (sawIndexedValue) {
          newIndex = buildChildSet(childList, indexDefinition.getCompare());
        } else {
          newIndex = fallbackObject;
        }
        const indexName = indexDefinition.toString();
        const newIndexSet = Object.assign({}, this.indexSet_);
        newIndexSet[indexName] = indexDefinition;
        const newIndexes = Object.assign({}, this.indexes_);
        newIndexes[indexName] = newIndex;
        return new IndexMap(newIndexes, newIndexSet);
      }
      addToIndexes(namedNode, existingChildren) {
        const newIndexes = map(this.indexes_, (indexedChildren, indexName) => {
          const index32 = safeGet(this.indexSet_, indexName);
          assert(index32, "Missing index implementation for " + indexName);
          if (indexedChildren === fallbackObject) {
            if (index32.isDefinedOn(namedNode.node)) {
              const childList = [];
              const iter = existingChildren.getIterator(NamedNode.Wrap);
              let next = iter.getNext();
              while (next) {
                if (next.name !== namedNode.name) {
                  childList.push(next);
                }
                next = iter.getNext();
              }
              childList.push(namedNode);
              return buildChildSet(childList, index32.getCompare());
            } else {
              return fallbackObject;
            }
          } else {
            const existingSnap = existingChildren.get(namedNode.name);
            let newChildren = indexedChildren;
            if (existingSnap) {
              newChildren = newChildren.remove(new NamedNode(namedNode.name, existingSnap));
            }
            return newChildren.insert(namedNode, namedNode.node);
          }
        });
        return new IndexMap(newIndexes, this.indexSet_);
      }
      removeFromIndexes(namedNode, existingChildren) {
        const newIndexes = map(this.indexes_, (indexedChildren) => {
          if (indexedChildren === fallbackObject) {
            return indexedChildren;
          } else {
            const existingSnap = existingChildren.get(namedNode.name);
            if (existingSnap) {
              return indexedChildren.remove(new NamedNode(namedNode.name, existingSnap));
            } else {
              return indexedChildren;
            }
          }
        });
        return new IndexMap(newIndexes, this.indexSet_);
      }
    };
    ChildrenNode = class {
      constructor(children_, priorityNode_, indexMap_) {
        this.children_ = children_;
        this.priorityNode_ = priorityNode_;
        this.indexMap_ = indexMap_;
        this.lazyHash_ = null;
        if (this.priorityNode_) {
          validatePriorityNode(this.priorityNode_);
        }
        if (this.children_.isEmpty()) {
          assert(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
        }
      }
      static get EMPTY_NODE() {
        return EMPTY_NODE || (EMPTY_NODE = new ChildrenNode(new SortedMap(NAME_COMPARATOR), null, IndexMap.Default));
      }
      isLeafNode() {
        return false;
      }
      getPriority() {
        return this.priorityNode_ || EMPTY_NODE;
      }
      updatePriority(newPriorityNode) {
        if (this.children_.isEmpty()) {
          return this;
        } else {
          return new ChildrenNode(this.children_, newPriorityNode, this.indexMap_);
        }
      }
      getImmediateChild(childName) {
        if (childName === ".priority") {
          return this.getPriority();
        } else {
          const child2 = this.children_.get(childName);
          return child2 === null ? EMPTY_NODE : child2;
        }
      }
      getChild(path) {
        const front = pathGetFront(path);
        if (front === null) {
          return this;
        }
        return this.getImmediateChild(front).getChild(pathPopFront(path));
      }
      hasChild(childName) {
        return this.children_.get(childName) !== null;
      }
      updateImmediateChild(childName, newChildNode) {
        assert(newChildNode, "We should always be passing snapshot nodes");
        if (childName === ".priority") {
          return this.updatePriority(newChildNode);
        } else {
          const namedNode = new NamedNode(childName, newChildNode);
          let newChildren, newIndexMap;
          if (newChildNode.isEmpty()) {
            newChildren = this.children_.remove(childName);
            newIndexMap = this.indexMap_.removeFromIndexes(namedNode, this.children_);
          } else {
            newChildren = this.children_.insert(childName, newChildNode);
            newIndexMap = this.indexMap_.addToIndexes(namedNode, this.children_);
          }
          const newPriority = newChildren.isEmpty() ? EMPTY_NODE : this.priorityNode_;
          return new ChildrenNode(newChildren, newPriority, newIndexMap);
        }
      }
      updateChild(path, newChildNode) {
        const front = pathGetFront(path);
        if (front === null) {
          return newChildNode;
        } else {
          assert(pathGetFront(path) !== ".priority" || pathGetLength(path) === 1, ".priority must be the last token in a path");
          const newImmediateChild = this.getImmediateChild(front).updateChild(pathPopFront(path), newChildNode);
          return this.updateImmediateChild(front, newImmediateChild);
        }
      }
      isEmpty() {
        return this.children_.isEmpty();
      }
      numChildren() {
        return this.children_.count();
      }
      val(exportFormat) {
        if (this.isEmpty()) {
          return null;
        }
        const obj = {};
        let numKeys = 0, maxKey = 0, allIntegerKeys = true;
        this.forEachChild(PRIORITY_INDEX, (key2, childNode) => {
          obj[key2] = childNode.val(exportFormat);
          numKeys++;
          if (allIntegerKeys && ChildrenNode.INTEGER_REGEXP_.test(key2)) {
            maxKey = Math.max(maxKey, Number(key2));
          } else {
            allIntegerKeys = false;
          }
        });
        if (!exportFormat && allIntegerKeys && maxKey < 2 * numKeys) {
          const array2 = [];
          for (const key2 in obj) {
            array2[key2] = obj[key2];
          }
          return array2;
        } else {
          if (exportFormat && !this.getPriority().isEmpty()) {
            obj[".priority"] = this.getPriority().val();
          }
          return obj;
        }
      }
      hash() {
        if (this.lazyHash_ === null) {
          let toHash = "";
          if (!this.getPriority().isEmpty()) {
            toHash += "priority:" + priorityHashText(this.getPriority().val()) + ":";
          }
          this.forEachChild(PRIORITY_INDEX, (key2, childNode) => {
            const childHash = childNode.hash();
            if (childHash !== "") {
              toHash += ":" + key2 + ":" + childHash;
            }
          });
          this.lazyHash_ = toHash === "" ? "" : sha1(toHash);
        }
        return this.lazyHash_;
      }
      getPredecessorChildName(childName, childNode, index32) {
        const idx = this.resolveIndex_(index32);
        if (idx) {
          const predecessor = idx.getPredecessorKey(new NamedNode(childName, childNode));
          return predecessor ? predecessor.name : null;
        } else {
          return this.children_.getPredecessorKey(childName);
        }
      }
      getFirstChildName(indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) {
          const minKey = idx.minKey();
          return minKey && minKey.name;
        } else {
          return this.children_.minKey();
        }
      }
      getFirstChild(indexDefinition) {
        const minKey = this.getFirstChildName(indexDefinition);
        if (minKey) {
          return new NamedNode(minKey, this.children_.get(minKey));
        } else {
          return null;
        }
      }
      getLastChildName(indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) {
          const maxKey = idx.maxKey();
          return maxKey && maxKey.name;
        } else {
          return this.children_.maxKey();
        }
      }
      getLastChild(indexDefinition) {
        const maxKey = this.getLastChildName(indexDefinition);
        if (maxKey) {
          return new NamedNode(maxKey, this.children_.get(maxKey));
        } else {
          return null;
        }
      }
      forEachChild(index32, action) {
        const idx = this.resolveIndex_(index32);
        if (idx) {
          return idx.inorderTraversal((wrappedNode) => {
            return action(wrappedNode.name, wrappedNode.node);
          });
        } else {
          return this.children_.inorderTraversal(action);
        }
      }
      getIterator(indexDefinition) {
        return this.getIteratorFrom(indexDefinition.minPost(), indexDefinition);
      }
      getIteratorFrom(startPost, indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) {
          return idx.getIteratorFrom(startPost, (key2) => key2);
        } else {
          const iterator = this.children_.getIteratorFrom(startPost.name, NamedNode.Wrap);
          let next = iterator.peek();
          while (next != null && indexDefinition.compare(next, startPost) < 0) {
            iterator.getNext();
            next = iterator.peek();
          }
          return iterator;
        }
      }
      getReverseIterator(indexDefinition) {
        return this.getReverseIteratorFrom(indexDefinition.maxPost(), indexDefinition);
      }
      getReverseIteratorFrom(endPost, indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) {
          return idx.getReverseIteratorFrom(endPost, (key2) => {
            return key2;
          });
        } else {
          const iterator = this.children_.getReverseIteratorFrom(endPost.name, NamedNode.Wrap);
          let next = iterator.peek();
          while (next != null && indexDefinition.compare(next, endPost) > 0) {
            iterator.getNext();
            next = iterator.peek();
          }
          return iterator;
        }
      }
      compareTo(other) {
        if (this.isEmpty()) {
          if (other.isEmpty()) {
            return 0;
          } else {
            return -1;
          }
        } else if (other.isLeafNode() || other.isEmpty()) {
          return 1;
        } else if (other === MAX_NODE) {
          return -1;
        } else {
          return 0;
        }
      }
      withIndex(indexDefinition) {
        if (indexDefinition === KEY_INDEX || this.indexMap_.hasIndex(indexDefinition)) {
          return this;
        } else {
          const newIndexMap = this.indexMap_.addIndex(indexDefinition, this.children_);
          return new ChildrenNode(this.children_, this.priorityNode_, newIndexMap);
        }
      }
      isIndexed(index32) {
        return index32 === KEY_INDEX || this.indexMap_.hasIndex(index32);
      }
      equals(other) {
        if (other === this) {
          return true;
        } else if (other.isLeafNode()) {
          return false;
        } else {
          const otherChildrenNode = other;
          if (!this.getPriority().equals(otherChildrenNode.getPriority())) {
            return false;
          } else if (this.children_.count() === otherChildrenNode.children_.count()) {
            const thisIter = this.getIterator(PRIORITY_INDEX);
            const otherIter = otherChildrenNode.getIterator(PRIORITY_INDEX);
            let thisCurrent = thisIter.getNext();
            let otherCurrent = otherIter.getNext();
            while (thisCurrent && otherCurrent) {
              if (thisCurrent.name !== otherCurrent.name || !thisCurrent.node.equals(otherCurrent.node)) {
                return false;
              }
              thisCurrent = thisIter.getNext();
              otherCurrent = otherIter.getNext();
            }
            return thisCurrent === null && otherCurrent === null;
          } else {
            return false;
          }
        }
      }
      resolveIndex_(indexDefinition) {
        if (indexDefinition === KEY_INDEX) {
          return null;
        } else {
          return this.indexMap_.get(indexDefinition.toString());
        }
      }
    };
    ChildrenNode.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
    MaxNode = class extends ChildrenNode {
      constructor() {
        super(new SortedMap(NAME_COMPARATOR), ChildrenNode.EMPTY_NODE, IndexMap.Default);
      }
      compareTo(other) {
        if (other === this) {
          return 0;
        } else {
          return 1;
        }
      }
      equals(other) {
        return other === this;
      }
      getPriority() {
        return this;
      }
      getImmediateChild(childName) {
        return ChildrenNode.EMPTY_NODE;
      }
      isEmpty() {
        return false;
      }
    };
    MAX_NODE = new MaxNode();
    Object.defineProperties(NamedNode, {
      MIN: {
        value: new NamedNode(MIN_NAME, ChildrenNode.EMPTY_NODE)
      },
      MAX: {
        value: new NamedNode(MAX_NAME, MAX_NODE)
      }
    });
    KeyIndex.__EMPTY_NODE = ChildrenNode.EMPTY_NODE;
    LeafNode.__childrenNodeConstructor = ChildrenNode;
    setMaxNode$1(MAX_NODE);
    setMaxNode(MAX_NODE);
    USE_HINZE = true;
    setNodeFromJSON(nodeFromJSON);
    PathIndex = class extends Index {
      constructor(indexPath_) {
        super();
        this.indexPath_ = indexPath_;
        assert(!pathIsEmpty(indexPath_) && pathGetFront(indexPath_) !== ".priority", "Can't create PathIndex with empty path or .priority key");
      }
      extractChild(snap) {
        return snap.getChild(this.indexPath_);
      }
      isDefinedOn(node) {
        return !node.getChild(this.indexPath_).isEmpty();
      }
      compare(a, b) {
        const aChild = this.extractChild(a.node);
        const bChild = this.extractChild(b.node);
        const indexCmp = aChild.compareTo(bChild);
        if (indexCmp === 0) {
          return nameCompare(a.name, b.name);
        } else {
          return indexCmp;
        }
      }
      makePost(indexValue, name6) {
        const valueNode = nodeFromJSON(indexValue);
        const node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, valueNode);
        return new NamedNode(name6, node);
      }
      maxPost() {
        const node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, MAX_NODE);
        return new NamedNode(MAX_NAME, node);
      }
      toString() {
        return pathSlice(this.indexPath_, 0).join("/");
      }
    };
    ValueIndex = class extends Index {
      compare(a, b) {
        const indexCmp = a.node.compareTo(b.node);
        if (indexCmp === 0) {
          return nameCompare(a.name, b.name);
        } else {
          return indexCmp;
        }
      }
      isDefinedOn(node) {
        return true;
      }
      indexedValueChanged(oldNode, newNode) {
        return !oldNode.equals(newNode);
      }
      minPost() {
        return NamedNode.MIN;
      }
      maxPost() {
        return NamedNode.MAX;
      }
      makePost(indexValue, name6) {
        const valueNode = nodeFromJSON(indexValue);
        return new NamedNode(name6, valueNode);
      }
      toString() {
        return ".value";
      }
    };
    VALUE_INDEX = new ValueIndex();
    PUSH_CHARS = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
    nextPushId = function() {
      let lastPushTime = 0;
      const lastRandChars = [];
      return function(now) {
        const duplicateTime = now === lastPushTime;
        lastPushTime = now;
        let i;
        const timeStampChars = new Array(8);
        for (i = 7; i >= 0; i--) {
          timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
          now = Math.floor(now / 64);
        }
        assert(now === 0, "Cannot push at time == 0");
        let id = timeStampChars.join("");
        if (!duplicateTime) {
          for (i = 0; i < 12; i++) {
            lastRandChars[i] = Math.floor(Math.random() * 64);
          }
        } else {
          for (i = 11; i >= 0 && lastRandChars[i] === 63; i--) {
            lastRandChars[i] = 0;
          }
          lastRandChars[i]++;
        }
        for (i = 0; i < 12; i++) {
          id += PUSH_CHARS.charAt(lastRandChars[i]);
        }
        assert(id.length === 20, "nextPushId: Length should be 20.");
        return id;
      };
    }();
    IndexedFilter = class {
      constructor(index_) {
        this.index_ = index_;
      }
      updateChild(snap, key2, newChild, affectedPath, source, optChangeAccumulator) {
        assert(snap.isIndexed(this.index_), "A node must be indexed if only a child is updated");
        const oldChild = snap.getImmediateChild(key2);
        if (oldChild.getChild(affectedPath).equals(newChild.getChild(affectedPath))) {
          if (oldChild.isEmpty() === newChild.isEmpty()) {
            return snap;
          }
        }
        if (optChangeAccumulator != null) {
          if (newChild.isEmpty()) {
            if (snap.hasChild(key2)) {
              optChangeAccumulator.trackChildChange(changeChildRemoved(key2, oldChild));
            } else {
              assert(snap.isLeafNode(), "A child remove without an old child only makes sense on a leaf node");
            }
          } else if (oldChild.isEmpty()) {
            optChangeAccumulator.trackChildChange(changeChildAdded(key2, newChild));
          } else {
            optChangeAccumulator.trackChildChange(changeChildChanged(key2, newChild, oldChild));
          }
        }
        if (snap.isLeafNode() && newChild.isEmpty()) {
          return snap;
        } else {
          return snap.updateImmediateChild(key2, newChild).withIndex(this.index_);
        }
      }
      updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
        if (optChangeAccumulator != null) {
          if (!oldSnap.isLeafNode()) {
            oldSnap.forEachChild(PRIORITY_INDEX, (key2, childNode) => {
              if (!newSnap.hasChild(key2)) {
                optChangeAccumulator.trackChildChange(changeChildRemoved(key2, childNode));
              }
            });
          }
          if (!newSnap.isLeafNode()) {
            newSnap.forEachChild(PRIORITY_INDEX, (key2, childNode) => {
              if (oldSnap.hasChild(key2)) {
                const oldChild = oldSnap.getImmediateChild(key2);
                if (!oldChild.equals(childNode)) {
                  optChangeAccumulator.trackChildChange(changeChildChanged(key2, childNode, oldChild));
                }
              } else {
                optChangeAccumulator.trackChildChange(changeChildAdded(key2, childNode));
              }
            });
          }
        }
        return newSnap.withIndex(this.index_);
      }
      updatePriority(oldSnap, newPriority) {
        if (oldSnap.isEmpty()) {
          return ChildrenNode.EMPTY_NODE;
        } else {
          return oldSnap.updatePriority(newPriority);
        }
      }
      filtersNodes() {
        return false;
      }
      getIndexedFilter() {
        return this;
      }
      getIndex() {
        return this.index_;
      }
    };
    RangedFilter = class {
      constructor(params) {
        this.indexedFilter_ = new IndexedFilter(params.getIndex());
        this.index_ = params.getIndex();
        this.startPost_ = RangedFilter.getStartPost_(params);
        this.endPost_ = RangedFilter.getEndPost_(params);
      }
      getStartPost() {
        return this.startPost_;
      }
      getEndPost() {
        return this.endPost_;
      }
      matches(node) {
        return this.index_.compare(this.getStartPost(), node) <= 0 && this.index_.compare(node, this.getEndPost()) <= 0;
      }
      updateChild(snap, key2, newChild, affectedPath, source, optChangeAccumulator) {
        if (!this.matches(new NamedNode(key2, newChild))) {
          newChild = ChildrenNode.EMPTY_NODE;
        }
        return this.indexedFilter_.updateChild(snap, key2, newChild, affectedPath, source, optChangeAccumulator);
      }
      updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
        if (newSnap.isLeafNode()) {
          newSnap = ChildrenNode.EMPTY_NODE;
        }
        let filtered = newSnap.withIndex(this.index_);
        filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
        const self2 = this;
        newSnap.forEachChild(PRIORITY_INDEX, (key2, childNode) => {
          if (!self2.matches(new NamedNode(key2, childNode))) {
            filtered = filtered.updateImmediateChild(key2, ChildrenNode.EMPTY_NODE);
          }
        });
        return this.indexedFilter_.updateFullNode(oldSnap, filtered, optChangeAccumulator);
      }
      updatePriority(oldSnap, newPriority) {
        return oldSnap;
      }
      filtersNodes() {
        return true;
      }
      getIndexedFilter() {
        return this.indexedFilter_;
      }
      getIndex() {
        return this.index_;
      }
      static getStartPost_(params) {
        if (params.hasStart()) {
          const startName = params.getIndexStartName();
          return params.getIndex().makePost(params.getIndexStartValue(), startName);
        } else {
          return params.getIndex().minPost();
        }
      }
      static getEndPost_(params) {
        if (params.hasEnd()) {
          const endName = params.getIndexEndName();
          return params.getIndex().makePost(params.getIndexEndValue(), endName);
        } else {
          return params.getIndex().maxPost();
        }
      }
    };
    LimitedFilter = class {
      constructor(params) {
        this.rangedFilter_ = new RangedFilter(params);
        this.index_ = params.getIndex();
        this.limit_ = params.getLimit();
        this.reverse_ = !params.isViewFromLeft();
      }
      updateChild(snap, key2, newChild, affectedPath, source, optChangeAccumulator) {
        if (!this.rangedFilter_.matches(new NamedNode(key2, newChild))) {
          newChild = ChildrenNode.EMPTY_NODE;
        }
        if (snap.getImmediateChild(key2).equals(newChild)) {
          return snap;
        } else if (snap.numChildren() < this.limit_) {
          return this.rangedFilter_.getIndexedFilter().updateChild(snap, key2, newChild, affectedPath, source, optChangeAccumulator);
        } else {
          return this.fullLimitUpdateChild_(snap, key2, newChild, source, optChangeAccumulator);
        }
      }
      updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
        let filtered;
        if (newSnap.isLeafNode() || newSnap.isEmpty()) {
          filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
        } else {
          if (this.limit_ * 2 < newSnap.numChildren() && newSnap.isIndexed(this.index_)) {
            filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
            let iterator;
            if (this.reverse_) {
              iterator = newSnap.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_);
            } else {
              iterator = newSnap.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
            }
            let count = 0;
            while (iterator.hasNext() && count < this.limit_) {
              const next = iterator.getNext();
              let inRange;
              if (this.reverse_) {
                inRange = this.index_.compare(this.rangedFilter_.getStartPost(), next) <= 0;
              } else {
                inRange = this.index_.compare(next, this.rangedFilter_.getEndPost()) <= 0;
              }
              if (inRange) {
                filtered = filtered.updateImmediateChild(next.name, next.node);
                count++;
              } else {
                break;
              }
            }
          } else {
            filtered = newSnap.withIndex(this.index_);
            filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
            let startPost;
            let endPost;
            let cmp;
            let iterator;
            if (this.reverse_) {
              iterator = filtered.getReverseIterator(this.index_);
              startPost = this.rangedFilter_.getEndPost();
              endPost = this.rangedFilter_.getStartPost();
              const indexCompare = this.index_.getCompare();
              cmp = (a, b) => indexCompare(b, a);
            } else {
              iterator = filtered.getIterator(this.index_);
              startPost = this.rangedFilter_.getStartPost();
              endPost = this.rangedFilter_.getEndPost();
              cmp = this.index_.getCompare();
            }
            let count = 0;
            let foundStartPost = false;
            while (iterator.hasNext()) {
              const next = iterator.getNext();
              if (!foundStartPost && cmp(startPost, next) <= 0) {
                foundStartPost = true;
              }
              const inRange = foundStartPost && count < this.limit_ && cmp(next, endPost) <= 0;
              if (inRange) {
                count++;
              } else {
                filtered = filtered.updateImmediateChild(next.name, ChildrenNode.EMPTY_NODE);
              }
            }
          }
        }
        return this.rangedFilter_.getIndexedFilter().updateFullNode(oldSnap, filtered, optChangeAccumulator);
      }
      updatePriority(oldSnap, newPriority) {
        return oldSnap;
      }
      filtersNodes() {
        return true;
      }
      getIndexedFilter() {
        return this.rangedFilter_.getIndexedFilter();
      }
      getIndex() {
        return this.index_;
      }
      fullLimitUpdateChild_(snap, childKey, childSnap, source, changeAccumulator) {
        let cmp;
        if (this.reverse_) {
          const indexCmp = this.index_.getCompare();
          cmp = (a, b) => indexCmp(b, a);
        } else {
          cmp = this.index_.getCompare();
        }
        const oldEventCache = snap;
        assert(oldEventCache.numChildren() === this.limit_, "");
        const newChildNamedNode = new NamedNode(childKey, childSnap);
        const windowBoundary = this.reverse_ ? oldEventCache.getFirstChild(this.index_) : oldEventCache.getLastChild(this.index_);
        const inRange = this.rangedFilter_.matches(newChildNamedNode);
        if (oldEventCache.hasChild(childKey)) {
          const oldChildSnap = oldEventCache.getImmediateChild(childKey);
          let nextChild = source.getChildAfterChild(this.index_, windowBoundary, this.reverse_);
          while (nextChild != null && (nextChild.name === childKey || oldEventCache.hasChild(nextChild.name))) {
            nextChild = source.getChildAfterChild(this.index_, nextChild, this.reverse_);
          }
          const compareNext = nextChild == null ? 1 : cmp(nextChild, newChildNamedNode);
          const remainsInWindow = inRange && !childSnap.isEmpty() && compareNext >= 0;
          if (remainsInWindow) {
            if (changeAccumulator != null) {
              changeAccumulator.trackChildChange(changeChildChanged(childKey, childSnap, oldChildSnap));
            }
            return oldEventCache.updateImmediateChild(childKey, childSnap);
          } else {
            if (changeAccumulator != null) {
              changeAccumulator.trackChildChange(changeChildRemoved(childKey, oldChildSnap));
            }
            const newEventCache = oldEventCache.updateImmediateChild(childKey, ChildrenNode.EMPTY_NODE);
            const nextChildInRange = nextChild != null && this.rangedFilter_.matches(nextChild);
            if (nextChildInRange) {
              if (changeAccumulator != null) {
                changeAccumulator.trackChildChange(changeChildAdded(nextChild.name, nextChild.node));
              }
              return newEventCache.updateImmediateChild(nextChild.name, nextChild.node);
            } else {
              return newEventCache;
            }
          }
        } else if (childSnap.isEmpty()) {
          return snap;
        } else if (inRange) {
          if (cmp(windowBoundary, newChildNamedNode) >= 0) {
            if (changeAccumulator != null) {
              changeAccumulator.trackChildChange(changeChildRemoved(windowBoundary.name, windowBoundary.node));
              changeAccumulator.trackChildChange(changeChildAdded(childKey, childSnap));
            }
            return oldEventCache.updateImmediateChild(childKey, childSnap).updateImmediateChild(windowBoundary.name, ChildrenNode.EMPTY_NODE);
          } else {
            return snap;
          }
        } else {
          return snap;
        }
      }
    };
    QueryParams = class {
      constructor() {
        this.limitSet_ = false;
        this.startSet_ = false;
        this.startNameSet_ = false;
        this.startAfterSet_ = false;
        this.endSet_ = false;
        this.endNameSet_ = false;
        this.endBeforeSet_ = false;
        this.limit_ = 0;
        this.viewFrom_ = "";
        this.indexStartValue_ = null;
        this.indexStartName_ = "";
        this.indexEndValue_ = null;
        this.indexEndName_ = "";
        this.index_ = PRIORITY_INDEX;
      }
      hasStart() {
        return this.startSet_;
      }
      hasStartAfter() {
        return this.startAfterSet_;
      }
      hasEndBefore() {
        return this.endBeforeSet_;
      }
      isViewFromLeft() {
        if (this.viewFrom_ === "") {
          return this.startSet_;
        } else {
          return this.viewFrom_ === "l";
        }
      }
      getIndexStartValue() {
        assert(this.startSet_, "Only valid if start has been set");
        return this.indexStartValue_;
      }
      getIndexStartName() {
        assert(this.startSet_, "Only valid if start has been set");
        if (this.startNameSet_) {
          return this.indexStartName_;
        } else {
          return MIN_NAME;
        }
      }
      hasEnd() {
        return this.endSet_;
      }
      getIndexEndValue() {
        assert(this.endSet_, "Only valid if end has been set");
        return this.indexEndValue_;
      }
      getIndexEndName() {
        assert(this.endSet_, "Only valid if end has been set");
        if (this.endNameSet_) {
          return this.indexEndName_;
        } else {
          return MAX_NAME;
        }
      }
      hasLimit() {
        return this.limitSet_;
      }
      hasAnchoredLimit() {
        return this.limitSet_ && this.viewFrom_ !== "";
      }
      getLimit() {
        assert(this.limitSet_, "Only valid if limit has been set");
        return this.limit_;
      }
      getIndex() {
        return this.index_;
      }
      loadsAllData() {
        return !(this.startSet_ || this.endSet_ || this.limitSet_);
      }
      isDefault() {
        return this.loadsAllData() && this.index_ === PRIORITY_INDEX;
      }
      copy() {
        const copy = new QueryParams();
        copy.limitSet_ = this.limitSet_;
        copy.limit_ = this.limit_;
        copy.startSet_ = this.startSet_;
        copy.indexStartValue_ = this.indexStartValue_;
        copy.startNameSet_ = this.startNameSet_;
        copy.indexStartName_ = this.indexStartName_;
        copy.endSet_ = this.endSet_;
        copy.indexEndValue_ = this.indexEndValue_;
        copy.endNameSet_ = this.endNameSet_;
        copy.indexEndName_ = this.indexEndName_;
        copy.index_ = this.index_;
        copy.viewFrom_ = this.viewFrom_;
        return copy;
      }
    };
    ReadonlyRestClient = class extends ServerActions {
      constructor(repoInfo_, onDataUpdate_, authTokenProvider_, appCheckTokenProvider_) {
        super();
        this.repoInfo_ = repoInfo_;
        this.onDataUpdate_ = onDataUpdate_;
        this.authTokenProvider_ = authTokenProvider_;
        this.appCheckTokenProvider_ = appCheckTokenProvider_;
        this.log_ = logWrapper("p:rest:");
        this.listens_ = {};
      }
      reportStats(stats) {
        throw new Error("Method not implemented.");
      }
      static getListenId_(query, tag) {
        if (tag !== void 0) {
          return "tag$" + tag;
        } else {
          assert(query._queryParams.isDefault(), "should have a tag if it's not a default query.");
          return query._path.toString();
        }
      }
      listen(query, currentHashFn, tag, onComplete) {
        const pathString = query._path.toString();
        this.log_("Listen called for " + pathString + " " + query._queryIdentifier);
        const listenId = ReadonlyRestClient.getListenId_(query, tag);
        const thisListen = {};
        this.listens_[listenId] = thisListen;
        const queryStringParameters = queryParamsToRestQueryStringParameters(query._queryParams);
        this.restRequest_(pathString + ".json", queryStringParameters, (error3, result) => {
          let data = result;
          if (error3 === 404) {
            data = null;
            error3 = null;
          }
          if (error3 === null) {
            this.onDataUpdate_(pathString, data, false, tag);
          }
          if (safeGet(this.listens_, listenId) === thisListen) {
            let status;
            if (!error3) {
              status = "ok";
            } else if (error3 === 401) {
              status = "permission_denied";
            } else {
              status = "rest_error:" + error3;
            }
            onComplete(status, null);
          }
        });
      }
      unlisten(query, tag) {
        const listenId = ReadonlyRestClient.getListenId_(query, tag);
        delete this.listens_[listenId];
      }
      get(query) {
        const queryStringParameters = queryParamsToRestQueryStringParameters(query._queryParams);
        const pathString = query._path.toString();
        const deferred = new Deferred();
        this.restRequest_(pathString + ".json", queryStringParameters, (error3, result) => {
          let data = result;
          if (error3 === 404) {
            data = null;
            error3 = null;
          }
          if (error3 === null) {
            this.onDataUpdate_(
              pathString,
              data,
              false,
              null
            );
            deferred.resolve(data);
          } else {
            deferred.reject(new Error(data));
          }
        });
        return deferred.promise;
      }
      refreshAuthToken(token) {
      }
      restRequest_(pathString, queryStringParameters = {}, callback) {
        queryStringParameters["format"] = "export";
        return Promise.all([
          this.authTokenProvider_.getToken(false),
          this.appCheckTokenProvider_.getToken(false)
        ]).then(([authToken, appCheckToken]) => {
          if (authToken && authToken.accessToken) {
            queryStringParameters["auth"] = authToken.accessToken;
          }
          if (appCheckToken && appCheckToken.token) {
            queryStringParameters["ac"] = appCheckToken.token;
          }
          const url = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + pathString + "?ns=" + this.repoInfo_.namespace + querystring(queryStringParameters);
          this.log_("Sending REST request for " + url);
          const xhr = new XMLHttpRequest();
          xhr.onreadystatechange = () => {
            if (callback && xhr.readyState === 4) {
              this.log_("REST Response for " + url + " received. status:", xhr.status, "response:", xhr.responseText);
              let res = null;
              if (xhr.status >= 200 && xhr.status < 300) {
                try {
                  res = jsonEval(xhr.responseText);
                } catch (e) {
                  warn("Failed to parse JSON response for " + url + ": " + xhr.responseText);
                }
                callback(null, res);
              } else {
                if (xhr.status !== 401 && xhr.status !== 404) {
                  warn("Got unsuccessful REST response for " + url + " Status: " + xhr.status);
                }
                callback(xhr.status);
              }
              callback = null;
            }
          };
          xhr.open("GET", url, true);
          xhr.send();
        });
      }
    };
    SnapshotHolder = class {
      constructor() {
        this.rootNode_ = ChildrenNode.EMPTY_NODE;
      }
      getNode(path) {
        return this.rootNode_.getChild(path);
      }
      updateSnapshot(path, newSnapshotNode) {
        this.rootNode_ = this.rootNode_.updateChild(path, newSnapshotNode);
      }
    };
    StatsListener = class {
      constructor(collection_) {
        this.collection_ = collection_;
        this.last_ = null;
      }
      get() {
        const newStats = this.collection_.get();
        const delta = Object.assign({}, newStats);
        if (this.last_) {
          each2(this.last_, (stat, value) => {
            delta[stat] = delta[stat] - value;
          });
        }
        this.last_ = newStats;
        return delta;
      }
    };
    FIRST_STATS_MIN_TIME = 10 * 1e3;
    FIRST_STATS_MAX_TIME = 30 * 1e3;
    REPORT_STATS_INTERVAL = 5 * 60 * 1e3;
    StatsReporter = class {
      constructor(collection, server_) {
        this.server_ = server_;
        this.statsToReport_ = {};
        this.statsListener_ = new StatsListener(collection);
        const timeout = FIRST_STATS_MIN_TIME + (FIRST_STATS_MAX_TIME - FIRST_STATS_MIN_TIME) * Math.random();
        setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(timeout));
      }
      reportStats_() {
        const stats = this.statsListener_.get();
        const reportedStats = {};
        let haveStatsToReport = false;
        each2(stats, (stat, value) => {
          if (value > 0 && contains(this.statsToReport_, stat)) {
            reportedStats[stat] = value;
            haveStatsToReport = true;
          }
        });
        if (haveStatsToReport) {
          this.server_.reportStats(reportedStats);
        }
        setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * REPORT_STATS_INTERVAL));
      }
    };
    (function(OperationType3) {
      OperationType3[OperationType3["OVERWRITE"] = 0] = "OVERWRITE";
      OperationType3[OperationType3["MERGE"] = 1] = "MERGE";
      OperationType3[OperationType3["ACK_USER_WRITE"] = 2] = "ACK_USER_WRITE";
      OperationType3[OperationType3["LISTEN_COMPLETE"] = 3] = "LISTEN_COMPLETE";
    })(OperationType || (OperationType = {}));
    AckUserWrite = class {
      constructor(path, affectedTree, revert) {
        this.path = path;
        this.affectedTree = affectedTree;
        this.revert = revert;
        this.type = OperationType.ACK_USER_WRITE;
        this.source = newOperationSourceUser();
      }
      operationForChild(childName) {
        if (!pathIsEmpty(this.path)) {
          assert(pathGetFront(this.path) === childName, "operationForChild called for unrelated child.");
          return new AckUserWrite(pathPopFront(this.path), this.affectedTree, this.revert);
        } else if (this.affectedTree.value != null) {
          assert(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths.");
          return this;
        } else {
          const childTree = this.affectedTree.subtree(new Path(childName));
          return new AckUserWrite(newEmptyPath(), childTree, this.revert);
        }
      }
    };
    ListenComplete = class {
      constructor(source, path) {
        this.source = source;
        this.path = path;
        this.type = OperationType.LISTEN_COMPLETE;
      }
      operationForChild(childName) {
        if (pathIsEmpty(this.path)) {
          return new ListenComplete(this.source, newEmptyPath());
        } else {
          return new ListenComplete(this.source, pathPopFront(this.path));
        }
      }
    };
    Overwrite = class {
      constructor(source, path, snap) {
        this.source = source;
        this.path = path;
        this.snap = snap;
        this.type = OperationType.OVERWRITE;
      }
      operationForChild(childName) {
        if (pathIsEmpty(this.path)) {
          return new Overwrite(this.source, newEmptyPath(), this.snap.getImmediateChild(childName));
        } else {
          return new Overwrite(this.source, pathPopFront(this.path), this.snap);
        }
      }
    };
    Merge = class {
      constructor(source, path, children) {
        this.source = source;
        this.path = path;
        this.children = children;
        this.type = OperationType.MERGE;
      }
      operationForChild(childName) {
        if (pathIsEmpty(this.path)) {
          const childTree = this.children.subtree(new Path(childName));
          if (childTree.isEmpty()) {
            return null;
          } else if (childTree.value) {
            return new Overwrite(this.source, newEmptyPath(), childTree.value);
          } else {
            return new Merge(this.source, newEmptyPath(), childTree);
          }
        } else {
          assert(pathGetFront(this.path) === childName, "Can't get a merge for a child not on the path of the operation");
          return new Merge(this.source, pathPopFront(this.path), this.children);
        }
      }
      toString() {
        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")";
      }
    };
    CacheNode = class {
      constructor(node_, fullyInitialized_, filtered_) {
        this.node_ = node_;
        this.fullyInitialized_ = fullyInitialized_;
        this.filtered_ = filtered_;
      }
      isFullyInitialized() {
        return this.fullyInitialized_;
      }
      isFiltered() {
        return this.filtered_;
      }
      isCompleteForPath(path) {
        if (pathIsEmpty(path)) {
          return this.isFullyInitialized() && !this.filtered_;
        }
        const childKey = pathGetFront(path);
        return this.isCompleteForChild(childKey);
      }
      isCompleteForChild(key2) {
        return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(key2);
      }
      getNode() {
        return this.node_;
      }
    };
    EventGenerator = class {
      constructor(query_) {
        this.query_ = query_;
        this.index_ = this.query_._queryParams.getIndex();
      }
    };
    EmptyChildren = () => {
      if (!emptyChildrenSingleton) {
        emptyChildrenSingleton = new SortedMap(stringCompare);
      }
      return emptyChildrenSingleton;
    };
    ImmutableTree = class {
      constructor(value, children = EmptyChildren()) {
        this.value = value;
        this.children = children;
      }
      static fromObject(obj) {
        let tree = new ImmutableTree(null);
        each2(obj, (childPath, childSnap) => {
          tree = tree.set(new Path(childPath), childSnap);
        });
        return tree;
      }
      isEmpty() {
        return this.value === null && this.children.isEmpty();
      }
      findRootMostMatchingPathAndValue(relativePath, predicate) {
        if (this.value != null && predicate(this.value)) {
          return { path: newEmptyPath(), value: this.value };
        } else {
          if (pathIsEmpty(relativePath)) {
            return null;
          } else {
            const front = pathGetFront(relativePath);
            const child2 = this.children.get(front);
            if (child2 !== null) {
              const childExistingPathAndValue = child2.findRootMostMatchingPathAndValue(pathPopFront(relativePath), predicate);
              if (childExistingPathAndValue != null) {
                const fullPath = pathChild(new Path(front), childExistingPathAndValue.path);
                return { path: fullPath, value: childExistingPathAndValue.value };
              } else {
                return null;
              }
            } else {
              return null;
            }
          }
        }
      }
      findRootMostValueAndPath(relativePath) {
        return this.findRootMostMatchingPathAndValue(relativePath, () => true);
      }
      subtree(relativePath) {
        if (pathIsEmpty(relativePath)) {
          return this;
        } else {
          const front = pathGetFront(relativePath);
          const childTree = this.children.get(front);
          if (childTree !== null) {
            return childTree.subtree(pathPopFront(relativePath));
          } else {
            return new ImmutableTree(null);
          }
        }
      }
      set(relativePath, toSet) {
        if (pathIsEmpty(relativePath)) {
          return new ImmutableTree(toSet, this.children);
        } else {
          const front = pathGetFront(relativePath);
          const child2 = this.children.get(front) || new ImmutableTree(null);
          const newChild = child2.set(pathPopFront(relativePath), toSet);
          const newChildren = this.children.insert(front, newChild);
          return new ImmutableTree(this.value, newChildren);
        }
      }
      remove(relativePath) {
        if (pathIsEmpty(relativePath)) {
          if (this.children.isEmpty()) {
            return new ImmutableTree(null);
          } else {
            return new ImmutableTree(null, this.children);
          }
        } else {
          const front = pathGetFront(relativePath);
          const child2 = this.children.get(front);
          if (child2) {
            const newChild = child2.remove(pathPopFront(relativePath));
            let newChildren;
            if (newChild.isEmpty()) {
              newChildren = this.children.remove(front);
            } else {
              newChildren = this.children.insert(front, newChild);
            }
            if (this.value === null && newChildren.isEmpty()) {
              return new ImmutableTree(null);
            } else {
              return new ImmutableTree(this.value, newChildren);
            }
          } else {
            return this;
          }
        }
      }
      get(relativePath) {
        if (pathIsEmpty(relativePath)) {
          return this.value;
        } else {
          const front = pathGetFront(relativePath);
          const child2 = this.children.get(front);
          if (child2) {
            return child2.get(pathPopFront(relativePath));
          } else {
            return null;
          }
        }
      }
      setTree(relativePath, newTree) {
        if (pathIsEmpty(relativePath)) {
          return newTree;
        } else {
          const front = pathGetFront(relativePath);
          const child2 = this.children.get(front) || new ImmutableTree(null);
          const newChild = child2.setTree(pathPopFront(relativePath), newTree);
          let newChildren;
          if (newChild.isEmpty()) {
            newChildren = this.children.remove(front);
          } else {
            newChildren = this.children.insert(front, newChild);
          }
          return new ImmutableTree(this.value, newChildren);
        }
      }
      fold(fn) {
        return this.fold_(newEmptyPath(), fn);
      }
      fold_(pathSoFar, fn) {
        const accum = {};
        this.children.inorderTraversal((childKey, childTree) => {
          accum[childKey] = childTree.fold_(pathChild(pathSoFar, childKey), fn);
        });
        return fn(pathSoFar, this.value, accum);
      }
      findOnPath(path, f) {
        return this.findOnPath_(path, newEmptyPath(), f);
      }
      findOnPath_(pathToFollow, pathSoFar, f) {
        const result = this.value ? f(pathSoFar, this.value) : false;
        if (result) {
          return result;
        } else {
          if (pathIsEmpty(pathToFollow)) {
            return null;
          } else {
            const front = pathGetFront(pathToFollow);
            const nextChild = this.children.get(front);
            if (nextChild) {
              return nextChild.findOnPath_(pathPopFront(pathToFollow), pathChild(pathSoFar, front), f);
            } else {
              return null;
            }
          }
        }
      }
      foreachOnPath(path, f) {
        return this.foreachOnPath_(path, newEmptyPath(), f);
      }
      foreachOnPath_(pathToFollow, currentRelativePath, f) {
        if (pathIsEmpty(pathToFollow)) {
          return this;
        } else {
          if (this.value) {
            f(currentRelativePath, this.value);
          }
          const front = pathGetFront(pathToFollow);
          const nextChild = this.children.get(front);
          if (nextChild) {
            return nextChild.foreachOnPath_(pathPopFront(pathToFollow), pathChild(currentRelativePath, front), f);
          } else {
            return new ImmutableTree(null);
          }
        }
      }
      foreach(f) {
        this.foreach_(newEmptyPath(), f);
      }
      foreach_(currentRelativePath, f) {
        this.children.inorderTraversal((childName, childTree) => {
          childTree.foreach_(pathChild(currentRelativePath, childName), f);
        });
        if (this.value) {
          f(currentRelativePath, this.value);
        }
      }
      foreachChild(f) {
        this.children.inorderTraversal((childName, childTree) => {
          if (childTree.value) {
            f(childName, childTree.value);
          }
        });
      }
    };
    CompoundWrite = class {
      constructor(writeTree_) {
        this.writeTree_ = writeTree_;
      }
      static empty() {
        return new CompoundWrite(new ImmutableTree(null));
      }
    };
    ChildChangeAccumulator = class {
      constructor() {
        this.changeMap = /* @__PURE__ */ new Map();
      }
      trackChildChange(change) {
        const type = change.type;
        const childKey = change.childName;
        assert(type === "child_added" || type === "child_changed" || type === "child_removed", "Only child changes supported for tracking");
        assert(childKey !== ".priority", "Only non-priority child changes can be tracked.");
        const oldChange = this.changeMap.get(childKey);
        if (oldChange) {
          const oldType = oldChange.type;
          if (type === "child_added" && oldType === "child_removed") {
            this.changeMap.set(childKey, changeChildChanged(childKey, change.snapshotNode, oldChange.snapshotNode));
          } else if (type === "child_removed" && oldType === "child_added") {
            this.changeMap.delete(childKey);
          } else if (type === "child_removed" && oldType === "child_changed") {
            this.changeMap.set(childKey, changeChildRemoved(childKey, oldChange.oldSnap));
          } else if (type === "child_changed" && oldType === "child_added") {
            this.changeMap.set(childKey, changeChildAdded(childKey, change.snapshotNode));
          } else if (type === "child_changed" && oldType === "child_changed") {
            this.changeMap.set(childKey, changeChildChanged(childKey, change.snapshotNode, oldChange.oldSnap));
          } else {
            throw assertionError("Illegal combination of changes: " + change + " occurred after " + oldChange);
          }
        } else {
          this.changeMap.set(childKey, change);
        }
      }
      getChanges() {
        return Array.from(this.changeMap.values());
      }
    };
    NoCompleteChildSource_ = class {
      getCompleteChild(childKey) {
        return null;
      }
      getChildAfterChild(index32, child2, reverse) {
        return null;
      }
    };
    NO_COMPLETE_CHILD_SOURCE = new NoCompleteChildSource_();
    WriteTreeCompleteChildSource = class {
      constructor(writes_, viewCache_, optCompleteServerCache_ = null) {
        this.writes_ = writes_;
        this.viewCache_ = viewCache_;
        this.optCompleteServerCache_ = optCompleteServerCache_;
      }
      getCompleteChild(childKey) {
        const node = this.viewCache_.eventCache;
        if (node.isCompleteForChild(childKey)) {
          return node.getNode().getImmediateChild(childKey);
        } else {
          const serverNode = this.optCompleteServerCache_ != null ? new CacheNode(this.optCompleteServerCache_, true, false) : this.viewCache_.serverCache;
          return writeTreeRefCalcCompleteChild(this.writes_, childKey, serverNode);
        }
      }
      getChildAfterChild(index32, child2, reverse) {
        const completeServerData = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : viewCacheGetCompleteServerSnap(this.viewCache_);
        const nodes = writeTreeRefCalcIndexedSlice(this.writes_, completeServerData, child2, 1, reverse, index32);
        if (nodes.length === 0) {
          return null;
        } else {
          return nodes[0];
        }
      }
    };
    View = class {
      constructor(query_, initialViewCache) {
        this.query_ = query_;
        this.eventRegistrations_ = [];
        const params = this.query_._queryParams;
        const indexFilter = new IndexedFilter(params.getIndex());
        const filter = queryParamsGetNodeFilter(params);
        this.processor_ = newViewProcessor(filter);
        const initialServerCache = initialViewCache.serverCache;
        const initialEventCache = initialViewCache.eventCache;
        const serverSnap = indexFilter.updateFullNode(ChildrenNode.EMPTY_NODE, initialServerCache.getNode(), null);
        const eventSnap = filter.updateFullNode(ChildrenNode.EMPTY_NODE, initialEventCache.getNode(), null);
        const newServerCache = new CacheNode(serverSnap, initialServerCache.isFullyInitialized(), indexFilter.filtersNodes());
        const newEventCache = new CacheNode(eventSnap, initialEventCache.isFullyInitialized(), filter.filtersNodes());
        this.viewCache_ = newViewCache(newEventCache, newServerCache);
        this.eventGenerator_ = new EventGenerator(this.query_);
      }
      get query() {
        return this.query_;
      }
    };
    SyncPoint = class {
      constructor() {
        this.views = /* @__PURE__ */ new Map();
      }
    };
    syncTreeNextQueryTag_ = 1;
    SyncTree = class {
      constructor(listenProvider_) {
        this.listenProvider_ = listenProvider_;
        this.syncPointTree_ = new ImmutableTree(null);
        this.pendingWriteTree_ = newWriteTree();
        this.tagToQueryMap = /* @__PURE__ */ new Map();
        this.queryToTagMap = /* @__PURE__ */ new Map();
      }
    };
    ExistingValueProvider = class {
      constructor(node_) {
        this.node_ = node_;
      }
      getImmediateChild(childName) {
        const child2 = this.node_.getImmediateChild(childName);
        return new ExistingValueProvider(child2);
      }
      node() {
        return this.node_;
      }
    };
    DeferredValueProvider = class {
      constructor(syncTree, path) {
        this.syncTree_ = syncTree;
        this.path_ = path;
      }
      getImmediateChild(childName) {
        const childPath = pathChild(this.path_, childName);
        return new DeferredValueProvider(this.syncTree_, childPath);
      }
      node() {
        return syncTreeCalcCompleteEventCache(this.syncTree_, this.path_);
      }
    };
    generateWithValues = function(values) {
      values = values || {};
      values["timestamp"] = values["timestamp"] || new Date().getTime();
      return values;
    };
    resolveDeferredLeafValue = function(value, existingVal, serverValues) {
      if (!value || typeof value !== "object") {
        return value;
      }
      assert(".sv" in value, "Unexpected leaf node or priority contents");
      if (typeof value[".sv"] === "string") {
        return resolveScalarDeferredValue(value[".sv"], existingVal, serverValues);
      } else if (typeof value[".sv"] === "object") {
        return resolveComplexDeferredValue(value[".sv"], existingVal);
      } else {
        assert(false, "Unexpected server value: " + JSON.stringify(value, null, 2));
      }
    };
    resolveScalarDeferredValue = function(op, existing, serverValues) {
      switch (op) {
        case "timestamp":
          return serverValues["timestamp"];
        default:
          assert(false, "Unexpected server value: " + op);
      }
    };
    resolveComplexDeferredValue = function(op, existing, unused) {
      if (!op.hasOwnProperty("increment")) {
        assert(false, "Unexpected server value: " + JSON.stringify(op, null, 2));
      }
      const delta = op["increment"];
      if (typeof delta !== "number") {
        assert(false, "Unexpected increment value: " + delta);
      }
      const existingNode = existing.node();
      assert(existingNode !== null && typeof existingNode !== "undefined", "Expected ChildrenNode.EMPTY_NODE for nulls");
      if (!existingNode.isLeafNode()) {
        return delta;
      }
      const leaf = existingNode;
      const existingVal = leaf.getValue();
      if (typeof existingVal !== "number") {
        return delta;
      }
      return existingVal + delta;
    };
    resolveDeferredValueTree = function(path, node, syncTree, serverValues) {
      return resolveDeferredValue(node, new DeferredValueProvider(syncTree, path), serverValues);
    };
    resolveDeferredValueSnapshot = function(node, existing, serverValues) {
      return resolveDeferredValue(node, new ExistingValueProvider(existing), serverValues);
    };
    Tree = class {
      constructor(name6 = "", parent2 = null, node = { children: {}, childCount: 0 }) {
        this.name = name6;
        this.parent = parent2;
        this.node = node;
      }
    };
    INVALID_KEY_REGEX_ = /[\[\].#$\/\u0000-\u001F\u007F]/;
    INVALID_PATH_REGEX_ = /[\[\].#$\u0000-\u001F\u007F]/;
    MAX_LEAF_SIZE_ = 10 * 1024 * 1024;
    isValidKey2 = function(key2) {
      return typeof key2 === "string" && key2.length !== 0 && !INVALID_KEY_REGEX_.test(key2);
    };
    isValidPathString = function(pathString) {
      return typeof pathString === "string" && pathString.length !== 0 && !INVALID_PATH_REGEX_.test(pathString);
    };
    isValidRootPathString = function(pathString) {
      if (pathString) {
        pathString = pathString.replace(/^\/*\.info(\/|$)/, "/");
      }
      return isValidPathString(pathString);
    };
    isValidPriority = function(priority) {
      return priority === null || typeof priority === "string" || typeof priority === "number" && !isInvalidJSONNumber(priority) || priority && typeof priority === "object" && contains(priority, ".sv");
    };
    validateFirebaseData = function(errorPrefix2, data, path_) {
      const path = path_ instanceof Path ? new ValidationPath(path_, errorPrefix2) : path_;
      if (data === void 0) {
        throw new Error(errorPrefix2 + "contains undefined " + validationPathToErrorString(path));
      }
      if (typeof data === "function") {
        throw new Error(errorPrefix2 + "contains a function " + validationPathToErrorString(path) + " with contents = " + data.toString());
      }
      if (isInvalidJSONNumber(data)) {
        throw new Error(errorPrefix2 + "contains " + data.toString() + " " + validationPathToErrorString(path));
      }
      if (typeof data === "string" && data.length > MAX_LEAF_SIZE_ / 3 && stringLength(data) > MAX_LEAF_SIZE_) {
        throw new Error(errorPrefix2 + "contains a string greater than " + MAX_LEAF_SIZE_ + " utf8 bytes " + validationPathToErrorString(path) + " ('" + data.substring(0, 50) + "...')");
      }
      if (data && typeof data === "object") {
        let hasDotValue = false;
        let hasActualChild = false;
        each2(data, (key2, value) => {
          if (key2 === ".value") {
            hasDotValue = true;
          } else if (key2 !== ".priority" && key2 !== ".sv") {
            hasActualChild = true;
            if (!isValidKey2(key2)) {
              throw new Error(errorPrefix2 + " contains an invalid key (" + key2 + ") " + validationPathToErrorString(path) + `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
            }
          }
          validationPathPush(path, key2);
          validateFirebaseData(errorPrefix2, value, path);
          validationPathPop(path);
        });
        if (hasDotValue && hasActualChild) {
          throw new Error(errorPrefix2 + ' contains ".value" child ' + validationPathToErrorString(path) + " in addition to actual children.");
        }
      }
    };
    validateFirebaseMergePaths = function(errorPrefix2, mergePaths) {
      let i, curPath;
      for (i = 0; i < mergePaths.length; i++) {
        curPath = mergePaths[i];
        const keys = pathSlice(curPath);
        for (let j = 0; j < keys.length; j++) {
          if (keys[j] === ".priority" && j === keys.length - 1)
            ;
          else if (!isValidKey2(keys[j])) {
            throw new Error(errorPrefix2 + "contains an invalid key (" + keys[j] + ") in path " + curPath.toString() + `. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
          }
        }
      }
      mergePaths.sort(pathCompare);
      let prevPath = null;
      for (i = 0; i < mergePaths.length; i++) {
        curPath = mergePaths[i];
        if (prevPath !== null && pathContains(prevPath, curPath)) {
          throw new Error(errorPrefix2 + "contains a path " + prevPath.toString() + " that is ancestor of another path " + curPath.toString());
        }
        prevPath = curPath;
      }
    };
    validateFirebaseMergeDataArg = function(fnName, data, path, optional) {
      if (optional && data === void 0) {
        return;
      }
      const errorPrefix$1 = errorPrefix(fnName, "values");
      if (!(data && typeof data === "object") || Array.isArray(data)) {
        throw new Error(errorPrefix$1 + " must be an object containing the children to replace.");
      }
      const mergePaths = [];
      each2(data, (key2, value) => {
        const curPath = new Path(key2);
        validateFirebaseData(errorPrefix$1, value, pathChild(path, curPath));
        if (pathGetBack(curPath) === ".priority") {
          if (!isValidPriority(value)) {
            throw new Error(errorPrefix$1 + "contains an invalid value for '" + curPath.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
          }
        }
        mergePaths.push(curPath);
      });
      validateFirebaseMergePaths(errorPrefix$1, mergePaths);
    };
    validatePathString = function(fnName, argumentName, pathString, optional) {
      if (optional && pathString === void 0) {
        return;
      }
      if (!isValidPathString(pathString)) {
        throw new Error(errorPrefix(fnName, argumentName) + 'was an invalid path = "' + pathString + `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`);
      }
    };
    validateRootPathString = function(fnName, argumentName, pathString, optional) {
      if (pathString) {
        pathString = pathString.replace(/^\/*\.info(\/|$)/, "/");
      }
      validatePathString(fnName, argumentName, pathString, optional);
    };
    validateUrl = function(fnName, parsedUrl) {
      const pathString = parsedUrl.path.toString();
      if (!(typeof parsedUrl.repoInfo.host === "string") || parsedUrl.repoInfo.host.length === 0 || !isValidKey2(parsedUrl.repoInfo.namespace) && parsedUrl.repoInfo.host.split(":")[0] !== "localhost" || pathString.length !== 0 && !isValidRootPathString(pathString)) {
        throw new Error(errorPrefix(fnName, "url") + `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`);
      }
    };
    EventQueue = class {
      constructor() {
        this.eventLists_ = [];
        this.recursionDepth_ = 0;
      }
    };
    INTERRUPT_REASON = "repo_interrupt";
    MAX_TRANSACTION_RETRIES = 25;
    Repo = class {
      constructor(repoInfo_, forceRestClient_, authTokenProvider_, appCheckProvider_) {
        this.repoInfo_ = repoInfo_;
        this.forceRestClient_ = forceRestClient_;
        this.authTokenProvider_ = authTokenProvider_;
        this.appCheckProvider_ = appCheckProvider_;
        this.dataUpdateCount = 0;
        this.statsListener_ = null;
        this.eventQueue_ = new EventQueue();
        this.nextWriteId_ = 1;
        this.interceptServerDataCallback_ = null;
        this.onDisconnect_ = newSparseSnapshotTree();
        this.transactionQueueTree_ = new Tree();
        this.persistentConnection_ = null;
        this.key = this.repoInfo_.toURLString();
      }
      toString() {
        return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
      }
    };
    parseRepoInfo = function(dataURL, nodeAdmin) {
      const parsedUrl = parseDatabaseURL(dataURL), namespace = parsedUrl.namespace;
      if (parsedUrl.domain === "firebase.com") {
        fatal(parsedUrl.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
      }
      if ((!namespace || namespace === "undefined") && parsedUrl.domain !== "localhost") {
        fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
      }
      if (!parsedUrl.secure) {
        warnIfPageIsSecure();
      }
      const webSocketOnly = parsedUrl.scheme === "ws" || parsedUrl.scheme === "wss";
      return {
        repoInfo: new RepoInfo(
          parsedUrl.host,
          parsedUrl.secure,
          namespace,
          webSocketOnly,
          nodeAdmin,
          "",
          namespace !== parsedUrl.subdomain
        ),
        path: new Path(parsedUrl.pathString)
      };
    };
    parseDatabaseURL = function(dataURL) {
      let host = "", domain = "", subdomain = "", pathString = "", namespace = "";
      let secure = true, scheme = "https", port = 443;
      if (typeof dataURL === "string") {
        let colonInd = dataURL.indexOf("//");
        if (colonInd >= 0) {
          scheme = dataURL.substring(0, colonInd - 1);
          dataURL = dataURL.substring(colonInd + 2);
        }
        let slashInd = dataURL.indexOf("/");
        if (slashInd === -1) {
          slashInd = dataURL.length;
        }
        let questionMarkInd = dataURL.indexOf("?");
        if (questionMarkInd === -1) {
          questionMarkInd = dataURL.length;
        }
        host = dataURL.substring(0, Math.min(slashInd, questionMarkInd));
        if (slashInd < questionMarkInd) {
          pathString = decodePath(dataURL.substring(slashInd, questionMarkInd));
        }
        const queryParams = decodeQuery(dataURL.substring(Math.min(dataURL.length, questionMarkInd)));
        colonInd = host.indexOf(":");
        if (colonInd >= 0) {
          secure = scheme === "https" || scheme === "wss";
          port = parseInt(host.substring(colonInd + 1), 10);
        } else {
          colonInd = host.length;
        }
        const hostWithoutPort = host.slice(0, colonInd);
        if (hostWithoutPort.toLowerCase() === "localhost") {
          domain = "localhost";
        } else if (hostWithoutPort.split(".").length <= 2) {
          domain = hostWithoutPort;
        } else {
          const dotInd = host.indexOf(".");
          subdomain = host.substring(0, dotInd).toLowerCase();
          domain = host.substring(dotInd + 1);
          namespace = subdomain;
        }
        if ("ns" in queryParams) {
          namespace = queryParams["ns"];
        }
      }
      return {
        host,
        port,
        domain,
        subdomain,
        secure,
        scheme,
        pathString,
        namespace
      };
    };
    DataEvent = class {
      constructor(eventType, eventRegistration, snapshot, prevName) {
        this.eventType = eventType;
        this.eventRegistration = eventRegistration;
        this.snapshot = snapshot;
        this.prevName = prevName;
      }
      getPath() {
        const ref2 = this.snapshot.ref;
        if (this.eventType === "value") {
          return ref2._path;
        } else {
          return ref2.parent._path;
        }
      }
      getEventType() {
        return this.eventType;
      }
      getEventRunner() {
        return this.eventRegistration.getEventRunner(this);
      }
      toString() {
        return this.getPath().toString() + ":" + this.eventType + ":" + stringify(this.snapshot.exportVal());
      }
    };
    CancelEvent = class {
      constructor(eventRegistration, error3, path) {
        this.eventRegistration = eventRegistration;
        this.error = error3;
        this.path = path;
      }
      getPath() {
        return this.path;
      }
      getEventType() {
        return "cancel";
      }
      getEventRunner() {
        return this.eventRegistration.getEventRunner(this);
      }
      toString() {
        return this.path.toString() + ":cancel";
      }
    };
    CallbackContext = class {
      constructor(snapshotCallback, cancelCallback) {
        this.snapshotCallback = snapshotCallback;
        this.cancelCallback = cancelCallback;
      }
      onValue(expDataSnapshot, previousChildName) {
        this.snapshotCallback.call(null, expDataSnapshot, previousChildName);
      }
      onCancel(error3) {
        assert(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback");
        return this.cancelCallback.call(null, error3);
      }
      get hasCancelCallback() {
        return !!this.cancelCallback;
      }
      matches(other) {
        return this.snapshotCallback === other.snapshotCallback || this.snapshotCallback.userCallback !== void 0 && this.snapshotCallback.userCallback === other.snapshotCallback.userCallback && this.snapshotCallback.context === other.snapshotCallback.context;
      }
    };
    QueryImpl = class {
      constructor(_repo, _path, _queryParams, _orderByCalled) {
        this._repo = _repo;
        this._path = _path;
        this._queryParams = _queryParams;
        this._orderByCalled = _orderByCalled;
      }
      get key() {
        if (pathIsEmpty(this._path)) {
          return null;
        } else {
          return pathGetBack(this._path);
        }
      }
      get ref() {
        return new ReferenceImpl(this._repo, this._path);
      }
      get _queryIdentifier() {
        const obj = queryParamsGetQueryObject(this._queryParams);
        const id = ObjectToUniqueKey(obj);
        return id === "{}" ? "default" : id;
      }
      get _queryObject() {
        return queryParamsGetQueryObject(this._queryParams);
      }
      isEqual(other) {
        other = getModularInstance(other);
        if (!(other instanceof QueryImpl)) {
          return false;
        }
        const sameRepo = this._repo === other._repo;
        const samePath = pathEquals(this._path, other._path);
        const sameQueryIdentifier = this._queryIdentifier === other._queryIdentifier;
        return sameRepo && samePath && sameQueryIdentifier;
      }
      toJSON() {
        return this.toString();
      }
      toString() {
        return this._repo.toString() + pathToUrlEncodedString(this._path);
      }
    };
    ReferenceImpl = class extends QueryImpl {
      constructor(repo, path) {
        super(repo, path, new QueryParams(), false);
      }
      get parent() {
        const parentPath = pathParent(this._path);
        return parentPath === null ? null : new ReferenceImpl(this._repo, parentPath);
      }
      get root() {
        let ref2 = this;
        while (ref2.parent !== null) {
          ref2 = ref2.parent;
        }
        return ref2;
      }
    };
    DataSnapshot = class {
      constructor(_node, ref2, _index) {
        this._node = _node;
        this.ref = ref2;
        this._index = _index;
      }
      get priority() {
        return this._node.getPriority().val();
      }
      get key() {
        return this.ref.key;
      }
      get size() {
        return this._node.numChildren();
      }
      child(path) {
        const childPath = new Path(path);
        const childRef = child(this.ref, path);
        return new DataSnapshot(this._node.getChild(childPath), childRef, PRIORITY_INDEX);
      }
      exists() {
        return !this._node.isEmpty();
      }
      exportVal() {
        return this._node.val(true);
      }
      forEach(action) {
        if (this._node.isLeafNode()) {
          return false;
        }
        const childrenNode = this._node;
        return !!childrenNode.forEachChild(this._index, (key2, node) => {
          return action(new DataSnapshot(node, child(this.ref, key2), PRIORITY_INDEX));
        });
      }
      hasChild(path) {
        const childPath = new Path(path);
        return !this._node.getChild(childPath).isEmpty();
      }
      hasChildren() {
        if (this._node.isLeafNode()) {
          return false;
        } else {
          return !this._node.isEmpty();
        }
      }
      toJSON() {
        return this.exportVal();
      }
      val() {
        return this._node.val();
      }
    };
    ValueEventRegistration = class {
      constructor(callbackContext) {
        this.callbackContext = callbackContext;
      }
      respondsTo(eventType) {
        return eventType === "value";
      }
      createEvent(change, query) {
        const index32 = query._queryParams.getIndex();
        return new DataEvent("value", this, new DataSnapshot(change.snapshotNode, new ReferenceImpl(query._repo, query._path), index32));
      }
      getEventRunner(eventData) {
        if (eventData.getEventType() === "cancel") {
          return () => this.callbackContext.onCancel(eventData.error);
        } else {
          return () => this.callbackContext.onValue(eventData.snapshot, null);
        }
      }
      createCancelEvent(error3, path) {
        if (this.callbackContext.hasCancelCallback) {
          return new CancelEvent(this, error3, path);
        } else {
          return null;
        }
      }
      matches(other) {
        if (!(other instanceof ValueEventRegistration)) {
          return false;
        } else if (!other.callbackContext || !this.callbackContext) {
          return true;
        } else {
          return other.callbackContext.matches(this.callbackContext);
        }
      }
      hasAnyCallback() {
        return this.callbackContext !== null;
      }
    };
    ChildEventRegistration = class {
      constructor(eventType, callbackContext) {
        this.eventType = eventType;
        this.callbackContext = callbackContext;
      }
      respondsTo(eventType) {
        let eventToCheck = eventType === "children_added" ? "child_added" : eventType;
        eventToCheck = eventToCheck === "children_removed" ? "child_removed" : eventToCheck;
        return this.eventType === eventToCheck;
      }
      createCancelEvent(error3, path) {
        if (this.callbackContext.hasCancelCallback) {
          return new CancelEvent(this, error3, path);
        } else {
          return null;
        }
      }
      createEvent(change, query) {
        assert(change.childName != null, "Child events should have a childName.");
        const childRef = child(new ReferenceImpl(query._repo, query._path), change.childName);
        const index32 = query._queryParams.getIndex();
        return new DataEvent(change.type, this, new DataSnapshot(change.snapshotNode, childRef, index32), change.prevName);
      }
      getEventRunner(eventData) {
        if (eventData.getEventType() === "cancel") {
          return () => this.callbackContext.onCancel(eventData.error);
        } else {
          return () => this.callbackContext.onValue(eventData.snapshot, eventData.prevName);
        }
      }
      matches(other) {
        if (other instanceof ChildEventRegistration) {
          return this.eventType === other.eventType && (!this.callbackContext || !other.callbackContext || this.callbackContext.matches(other.callbackContext));
        }
        return false;
      }
      hasAnyCallback() {
        return !!this.callbackContext;
      }
    };
    syncPointSetReferenceConstructor(ReferenceImpl);
    syncTreeSetReferenceConstructor(ReferenceImpl);
    FIREBASE_DATABASE_EMULATOR_HOST_VAR = "FIREBASE_DATABASE_EMULATOR_HOST";
    repos = {};
    useRestClient = false;
    Database = class {
      constructor(_repoInternal, app2) {
        this._repoInternal = _repoInternal;
        this.app = app2;
        this["type"] = "database";
        this._instanceStarted = false;
      }
      get _repo() {
        if (!this._instanceStarted) {
          repoStart(this._repoInternal, this.app.options.appId, this.app.options["databaseAuthVariableOverride"]);
          this._instanceStarted = true;
        }
        return this._repoInternal;
      }
      get _root() {
        if (!this._rootInternal) {
          this._rootInternal = new ReferenceImpl(this._repo, newEmptyPath());
        }
        return this._rootInternal;
      }
      _delete() {
        if (this._rootInternal !== null) {
          repoManagerDeleteRepo(this._repo, this.app.name);
          this._repoInternal = null;
          this._rootInternal = null;
        }
        return Promise.resolve();
      }
      _checkNotDeleted(apiName) {
        if (this._rootInternal === null) {
          fatal("Cannot call " + apiName + " on a deleted database.");
        }
      }
    };
    PersistentConnection.prototype.simpleListen = function(pathString, onComplete) {
      this.sendRequest("q", { p: pathString }, onComplete);
    };
    PersistentConnection.prototype.echo = function(data, onEcho) {
      this.sendRequest("echo", { d: data }, onEcho);
    };
    registerDatabase();
  }
});

// node_modules/firebase/database/dist/index.esm.js
var init_index_esm = __esm({
  "node_modules/firebase/database/dist/index.esm.js"() {
    init_index_esm20175();
  }
});

// node_modules/firebase/app/dist/index.esm.js
var name3, version3;
var init_index_esm2 = __esm({
  "node_modules/firebase/app/dist/index.esm.js"() {
    init_index_esm20174();
    init_index_esm20174();
    name3 = "firebase";
    version3 = "9.10.0";
    registerVersion(name3, version3, "app");
  }
});

// node_modules/@firebase/storage/dist/index.esm2017.js
function prependCode(code) {
  return "storage/" + code;
}
function unknown() {
  const message = "An unknown error occurred, please check the error payload for server response.";
  return new StorageError("unknown", message);
}
function retryLimitExceeded() {
  return new StorageError("retry-limit-exceeded", "Max retry time for operation exceeded, please try again.");
}
function canceled() {
  return new StorageError("canceled", "User canceled the upload/download.");
}
function invalidUrl(url) {
  return new StorageError("invalid-url", "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
  return new StorageError("invalid-default-bucket", "Invalid default bucket '" + bucket + "'.");
}
function invalidArgument(message) {
  return new StorageError("invalid-argument", message);
}
function appDeleted() {
  return new StorageError("app-deleted", "The Firebase app was deleted.");
}
function invalidRootOperation(name6) {
  return new StorageError("invalid-root-operation", "The operation '" + name6 + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
}
function start(f, callback, timeout) {
  let waitSeconds = 1;
  let retryTimeoutId = null;
  let globalTimeoutId = null;
  let hitTimeout = false;
  let cancelState = 0;
  function canceled2() {
    return cancelState === 2;
  }
  let triggeredCallback = false;
  function triggerCallback(...args) {
    if (!triggeredCallback) {
      triggeredCallback = true;
      callback.apply(null, args);
    }
  }
  function callWithDelay(millis) {
    retryTimeoutId = setTimeout(() => {
      retryTimeoutId = null;
      f(handler2, canceled2());
    }, millis);
  }
  function clearGlobalTimeout() {
    if (globalTimeoutId) {
      clearTimeout(globalTimeoutId);
    }
  }
  function handler2(success, ...args) {
    if (triggeredCallback) {
      clearGlobalTimeout();
      return;
    }
    if (success) {
      clearGlobalTimeout();
      triggerCallback.call(null, success, ...args);
      return;
    }
    const mustStop = canceled2() || hitTimeout;
    if (mustStop) {
      clearGlobalTimeout();
      triggerCallback.call(null, success, ...args);
      return;
    }
    if (waitSeconds < 64) {
      waitSeconds *= 2;
    }
    let waitMillis;
    if (cancelState === 1) {
      cancelState = 2;
      waitMillis = 0;
    } else {
      waitMillis = (waitSeconds + Math.random()) * 1e3;
    }
    callWithDelay(waitMillis);
  }
  let stopped = false;
  function stop2(wasTimeout) {
    if (stopped) {
      return;
    }
    stopped = true;
    clearGlobalTimeout();
    if (triggeredCallback) {
      return;
    }
    if (retryTimeoutId !== null) {
      if (!wasTimeout) {
        cancelState = 2;
      }
      clearTimeout(retryTimeoutId);
      callWithDelay(0);
    } else {
      if (!wasTimeout) {
        cancelState = 1;
      }
    }
  }
  callWithDelay(0);
  globalTimeoutId = setTimeout(() => {
    hitTimeout = true;
    stop2(true);
  }, timeout);
  return stop2;
}
function stop(id) {
  id(false);
}
function isJustDef(p) {
  return p !== void 0;
}
function validateNumber(argument, minValue, maxValue, value) {
  if (value < minValue) {
    throw invalidArgument(`Invalid value for '${argument}'. Expected ${minValue} or greater.`);
  }
  if (value > maxValue) {
    throw invalidArgument(`Invalid value for '${argument}'. Expected ${maxValue} or less.`);
  }
}
function makeQueryString(params) {
  const encode2 = encodeURIComponent;
  let queryPart = "?";
  for (const key2 in params) {
    if (params.hasOwnProperty(key2)) {
      const nextPart = encode2(key2) + "=" + encode2(params[key2]);
      queryPart = queryPart + nextPart + "&";
    }
  }
  queryPart = queryPart.slice(0, -1);
  return queryPart;
}
function addAuthHeader_(headers, authToken) {
  if (authToken !== null && authToken.length > 0) {
    headers["Authorization"] = "Firebase " + authToken;
  }
}
function addVersionHeader_(headers, firebaseVersion) {
  headers["X-Firebase-Storage-Version"] = "webjs/" + (firebaseVersion !== null && firebaseVersion !== void 0 ? firebaseVersion : "AppManager");
}
function addGmpidHeader_(headers, appId) {
  if (appId) {
    headers["X-Firebase-GMPID"] = appId;
  }
}
function addAppCheckHeader_(headers, appCheckToken) {
  if (appCheckToken !== null) {
    headers["X-Firebase-AppCheck"] = appCheckToken;
  }
}
function makeRequest(requestInfo, appId, authToken, appCheckToken, requestFactory, firebaseVersion) {
  const queryPart = makeQueryString(requestInfo.urlParams);
  const url = requestInfo.url + queryPart;
  const headers = Object.assign({}, requestInfo.headers);
  addGmpidHeader_(headers, appId);
  addAuthHeader_(headers, authToken);
  addVersionHeader_(headers, firebaseVersion);
  addAppCheckHeader_(headers, appCheckToken);
  return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, requestFactory);
}
function parent(path) {
  if (path.length === 0) {
    return null;
  }
  const index32 = path.lastIndexOf("/");
  if (index32 === -1) {
    return "";
  }
  const newPath = path.slice(0, index32);
  return newPath;
}
function lastComponent(path) {
  const index32 = path.lastIndexOf("/", path.length - 2);
  if (index32 === -1) {
    return path;
  } else {
    return path.slice(index32 + 1);
  }
}
function extractBucket(host, config) {
  const bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
  if (bucketString == null) {
    return null;
  }
  return Location.makeFromBucketSpec(bucketString, host);
}
function getStorage(app2 = getApp(), bucketUrl) {
  app2 = getModularInstance(app2);
  const storageProvider = _getProvider(app2, STORAGE_TYPE);
  const storageInstance = storageProvider.getImmediate({
    identifier: bucketUrl
  });
  return storageInstance;
}
function factory(container, { instanceIdentifier: url }) {
  const app2 = container.getProvider("app").getImmediate();
  const authProvider = container.getProvider("auth-internal");
  const appCheckProvider = container.getProvider("app-check-internal");
  return new FirebaseStorageImpl(app2, authProvider, appCheckProvider, url, SDK_VERSION);
}
function registerStorage() {
  _registerComponent(new Component(STORAGE_TYPE, factory, "PUBLIC").setMultipleInstances(true));
  registerVersion(name4, version4, "");
  registerVersion(name4, version4, "esm2017");
}
var DEFAULT_HOST, CONFIG_STORAGE_BUCKET_KEY, DEFAULT_MAX_OPERATION_RETRY_TIME, DEFAULT_MAX_UPLOAD_RETRY_TIME, StorageError, Location, FailRequest, ErrorCode, NetworkRequest, RequestEndStatus, RESUMABLE_UPLOAD_CHUNK_SIZE, Reference, FirebaseStorageImpl, name4, version4, STORAGE_TYPE;
var init_index_esm20176 = __esm({
  "node_modules/@firebase/storage/dist/index.esm2017.js"() {
    init_index_esm20174();
    init_index_esm2017();
    init_index_esm20172();
    DEFAULT_HOST = "firebasestorage.googleapis.com";
    CONFIG_STORAGE_BUCKET_KEY = "storageBucket";
    DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1e3;
    DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1e3;
    StorageError = class extends FirebaseError {
      constructor(code, message) {
        super(prependCode(code), `Firebase Storage: ${message} (${prependCode(code)})`);
        this.customData = { serverResponse: null };
        this._baseMessage = this.message;
        Object.setPrototypeOf(this, StorageError.prototype);
      }
      _codeEquals(code) {
        return prependCode(code) === this.code;
      }
      get serverResponse() {
        return this.customData.serverResponse;
      }
      set serverResponse(serverResponse) {
        this.customData.serverResponse = serverResponse;
        if (this.customData.serverResponse) {
          this.message = `${this._baseMessage}
${this.customData.serverResponse}`;
        } else {
          this.message = this._baseMessage;
        }
      }
    };
    Location = class {
      constructor(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
      }
      get path() {
        return this.path_;
      }
      get isRoot() {
        return this.path.length === 0;
      }
      fullServerUrl() {
        const encode2 = encodeURIComponent;
        return "/b/" + encode2(this.bucket) + "/o/" + encode2(this.path);
      }
      bucketOnlyServerUrl() {
        const encode2 = encodeURIComponent;
        return "/b/" + encode2(this.bucket) + "/o";
      }
      static makeFromBucketSpec(bucketString, host) {
        let bucketLocation;
        try {
          bucketLocation = Location.makeFromUrl(bucketString, host);
        } catch (e) {
          return new Location(bucketString, "");
        }
        if (bucketLocation.path === "") {
          return bucketLocation;
        } else {
          throw invalidDefaultBucket(bucketString);
        }
      }
      static makeFromUrl(url, host) {
        let location2 = null;
        const bucketDomain = "([A-Za-z0-9.\\-_]+)";
        function gsModify(loc) {
          if (loc.path.charAt(loc.path.length - 1) === "/") {
            loc.path_ = loc.path_.slice(0, -1);
          }
        }
        const gsPath = "(/(.*))?$";
        const gsRegex = new RegExp("^gs://" + bucketDomain + gsPath, "i");
        const gsIndices = { bucket: 1, path: 3 };
        function httpModify(loc) {
          loc.path_ = decodeURIComponent(loc.path);
        }
        const version6 = "v[A-Za-z0-9_]+";
        const firebaseStorageHost = host.replace(/[.]/g, "\\.");
        const firebaseStoragePath = "(/([^?#]*).*)?$";
        const firebaseStorageRegExp = new RegExp(`^https?://${firebaseStorageHost}/${version6}/b/${bucketDomain}/o${firebaseStoragePath}`, "i");
        const firebaseStorageIndices = { bucket: 1, path: 3 };
        const cloudStorageHost = host === DEFAULT_HOST ? "(?:storage.googleapis.com|storage.cloud.google.com)" : host;
        const cloudStoragePath = "([^?#]*)";
        const cloudStorageRegExp = new RegExp(`^https?://${cloudStorageHost}/${bucketDomain}/${cloudStoragePath}`, "i");
        const cloudStorageIndices = { bucket: 1, path: 2 };
        const groups = [
          { regex: gsRegex, indices: gsIndices, postModify: gsModify },
          {
            regex: firebaseStorageRegExp,
            indices: firebaseStorageIndices,
            postModify: httpModify
          },
          {
            regex: cloudStorageRegExp,
            indices: cloudStorageIndices,
            postModify: httpModify
          }
        ];
        for (let i = 0; i < groups.length; i++) {
          const group = groups[i];
          const captures = group.regex.exec(url);
          if (captures) {
            const bucketValue = captures[group.indices.bucket];
            let pathValue = captures[group.indices.path];
            if (!pathValue) {
              pathValue = "";
            }
            location2 = new Location(bucketValue, pathValue);
            group.postModify(location2);
            break;
          }
        }
        if (location2 == null) {
          throw invalidUrl(url);
        }
        return location2;
      }
    };
    FailRequest = class {
      constructor(error3) {
        this.promise_ = Promise.reject(error3);
      }
      getPromise() {
        return this.promise_;
      }
      cancel(_appDelete = false) {
      }
    };
    (function(ErrorCode2) {
      ErrorCode2[ErrorCode2["NO_ERROR"] = 0] = "NO_ERROR";
      ErrorCode2[ErrorCode2["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
      ErrorCode2[ErrorCode2["ABORT"] = 2] = "ABORT";
    })(ErrorCode || (ErrorCode = {}));
    NetworkRequest = class {
      constructor(url_, method_, headers_, body_, successCodes_, additionalRetryCodes_, callback_, errorCallback_, timeout_, progressCallback_, connectionFactory_) {
        this.url_ = url_;
        this.method_ = method_;
        this.headers_ = headers_;
        this.body_ = body_;
        this.successCodes_ = successCodes_;
        this.additionalRetryCodes_ = additionalRetryCodes_;
        this.callback_ = callback_;
        this.errorCallback_ = errorCallback_;
        this.timeout_ = timeout_;
        this.progressCallback_ = progressCallback_;
        this.connectionFactory_ = connectionFactory_;
        this.pendingConnection_ = null;
        this.backoffId_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.promise_ = new Promise((resolve, reject) => {
          this.resolve_ = resolve;
          this.reject_ = reject;
          this.start_();
        });
      }
      start_() {
        const doTheRequest = (backoffCallback, canceled2) => {
          if (canceled2) {
            backoffCallback(false, new RequestEndStatus(false, null, true));
            return;
          }
          const connection = this.connectionFactory_();
          this.pendingConnection_ = connection;
          const progressListener = (progressEvent) => {
            const loaded = progressEvent.loaded;
            const total = progressEvent.lengthComputable ? progressEvent.total : -1;
            if (this.progressCallback_ !== null) {
              this.progressCallback_(loaded, total);
            }
          };
          if (this.progressCallback_ !== null) {
            connection.addUploadProgressListener(progressListener);
          }
          connection.send(this.url_, this.method_, this.body_, this.headers_).then(() => {
            if (this.progressCallback_ !== null) {
              connection.removeUploadProgressListener(progressListener);
            }
            this.pendingConnection_ = null;
            const hitServer = connection.getErrorCode() === ErrorCode.NO_ERROR;
            const status = connection.getStatus();
            if (!hitServer || this.isRetryStatusCode_(status)) {
              const wasCanceled = connection.getErrorCode() === ErrorCode.ABORT;
              backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
              return;
            }
            const successCode = this.successCodes_.indexOf(status) !== -1;
            backoffCallback(true, new RequestEndStatus(successCode, connection));
          });
        };
        const backoffDone = (requestWentThrough, status) => {
          const resolve = this.resolve_;
          const reject = this.reject_;
          const connection = status.connection;
          if (status.wasSuccessCode) {
            try {
              const result = this.callback_(connection, connection.getResponse());
              if (isJustDef(result)) {
                resolve(result);
              } else {
                resolve();
              }
            } catch (e) {
              reject(e);
            }
          } else {
            if (connection !== null) {
              const err = unknown();
              err.serverResponse = connection.getErrorText();
              if (this.errorCallback_) {
                reject(this.errorCallback_(connection, err));
              } else {
                reject(err);
              }
            } else {
              if (status.canceled) {
                const err = this.appDelete_ ? appDeleted() : canceled();
                reject(err);
              } else {
                const err = retryLimitExceeded();
                reject(err);
              }
            }
          }
        };
        if (this.canceled_) {
          backoffDone(false, new RequestEndStatus(false, null, true));
        } else {
          this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
        }
      }
      getPromise() {
        return this.promise_;
      }
      cancel(appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) {
          stop(this.backoffId_);
        }
        if (this.pendingConnection_ !== null) {
          this.pendingConnection_.abort();
        }
      }
      isRetryStatusCode_(status) {
        const isFiveHundredCode = status >= 500 && status < 600;
        const extraRetryCodes = [
          408,
          429
        ];
        const isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
        const isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
      }
    };
    RequestEndStatus = class {
      constructor(wasSuccessCode, connection, canceled2) {
        this.wasSuccessCode = wasSuccessCode;
        this.connection = connection;
        this.canceled = !!canceled2;
      }
    };
    RESUMABLE_UPLOAD_CHUNK_SIZE = 256 * 1024;
    Reference = class {
      constructor(_service, location2) {
        this._service = _service;
        if (location2 instanceof Location) {
          this._location = location2;
        } else {
          this._location = Location.makeFromUrl(location2, _service.host);
        }
      }
      toString() {
        return "gs://" + this._location.bucket + "/" + this._location.path;
      }
      _newRef(service, location2) {
        return new Reference(service, location2);
      }
      get root() {
        const location2 = new Location(this._location.bucket, "");
        return this._newRef(this._service, location2);
      }
      get bucket() {
        return this._location.bucket;
      }
      get fullPath() {
        return this._location.path;
      }
      get name() {
        return lastComponent(this._location.path);
      }
      get storage() {
        return this._service;
      }
      get parent() {
        const newPath = parent(this._location.path);
        if (newPath === null) {
          return null;
        }
        const location2 = new Location(this._location.bucket, newPath);
        return new Reference(this._service, location2);
      }
      _throwIfRoot(name6) {
        if (this._location.path === "") {
          throw invalidRootOperation(name6);
        }
      }
    };
    FirebaseStorageImpl = class {
      constructor(app2, _authProvider, _appCheckProvider, _url, _firebaseVersion) {
        this.app = app2;
        this._authProvider = _authProvider;
        this._appCheckProvider = _appCheckProvider;
        this._url = _url;
        this._firebaseVersion = _firebaseVersion;
        this._bucket = null;
        this._host = DEFAULT_HOST;
        this._protocol = "https";
        this._appId = null;
        this._deleted = false;
        this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
        this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
        this._requests = /* @__PURE__ */ new Set();
        if (_url != null) {
          this._bucket = Location.makeFromBucketSpec(_url, this._host);
        } else {
          this._bucket = extractBucket(this._host, this.app.options);
        }
      }
      get host() {
        return this._host;
      }
      set host(host) {
        this._host = host;
        if (this._url != null) {
          this._bucket = Location.makeFromBucketSpec(this._url, host);
        } else {
          this._bucket = extractBucket(host, this.app.options);
        }
      }
      get maxUploadRetryTime() {
        return this._maxUploadRetryTime;
      }
      set maxUploadRetryTime(time) {
        validateNumber(
          "time",
          0,
          Number.POSITIVE_INFINITY,
          time
        );
        this._maxUploadRetryTime = time;
      }
      get maxOperationRetryTime() {
        return this._maxOperationRetryTime;
      }
      set maxOperationRetryTime(time) {
        validateNumber(
          "time",
          0,
          Number.POSITIVE_INFINITY,
          time
        );
        this._maxOperationRetryTime = time;
      }
      async _getAuthToken() {
        if (this._overrideAuthToken) {
          return this._overrideAuthToken;
        }
        const auth = this._authProvider.getImmediate({ optional: true });
        if (auth) {
          const tokenData = await auth.getToken();
          if (tokenData !== null) {
            return tokenData.accessToken;
          }
        }
        return null;
      }
      async _getAppCheckToken() {
        const appCheck = this._appCheckProvider.getImmediate({ optional: true });
        if (appCheck) {
          const result = await appCheck.getToken();
          return result.token;
        }
        return null;
      }
      _delete() {
        if (!this._deleted) {
          this._deleted = true;
          this._requests.forEach((request) => request.cancel());
          this._requests.clear();
        }
        return Promise.resolve();
      }
      _makeStorageReference(loc) {
        return new Reference(this, loc);
      }
      _makeRequest(requestInfo, requestFactory, authToken, appCheckToken) {
        if (!this._deleted) {
          const request = makeRequest(requestInfo, this._appId, authToken, appCheckToken, requestFactory, this._firebaseVersion);
          this._requests.add(request);
          request.getPromise().then(() => this._requests.delete(request), () => this._requests.delete(request));
          return request;
        } else {
          return new FailRequest(appDeleted());
        }
      }
      async makeRequestWithTokens(requestInfo, requestFactory) {
        const [authToken, appCheckToken] = await Promise.all([
          this._getAuthToken(),
          this._getAppCheckToken()
        ]);
        return this._makeRequest(requestInfo, requestFactory, authToken, appCheckToken).getPromise();
      }
    };
    name4 = "@firebase/storage";
    version4 = "0.9.9";
    STORAGE_TYPE = "storage";
    registerStorage();
  }
});

// node_modules/firebase/storage/dist/index.esm.js
var init_index_esm3 = __esm({
  "node_modules/firebase/storage/dist/index.esm.js"() {
    init_index_esm20176();
  }
});

// node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/tslib/tslib.js"(exports, module) {
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __classPrivateFieldIn2;
    var __createBinding2;
    (function(factory2) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory2(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory2(createExporter(root, createExporter(module.exports)));
      } else {
        factory2(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends2 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign2 = Object.assign || function(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      __rest2 = function(s2, e) {
        var t = {};
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p) && e.indexOf(p) < 0)
            t[p] = s2[p];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s2); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i]))
              t[p[i]] = s2[p[i]];
          }
        return t;
      };
      __decorate2 = function(decorators, target, key2, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key2, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
        return c > 3 && r && Object.defineProperty(target, key2, r), r;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key2) {
          decorator(target, key2, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding2(o, m, p);
      };
      __createBinding2 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values2 = function(o) {
        var s2 = typeof Symbol === "function" && Symbol.iterator, m = s2 && o[s2], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error3) {
          e = { error: error3 };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s2 = 0, i = 0, il = arguments.length; i < il; i++)
          s2 += arguments[i].length;
        for (var r = Array(s2), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn2 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
    });
  }
});

// node_modules/tslib/modules/index.js
var import_tslib, __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __createBinding, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn;
var init_modules = __esm({
  "node_modules/tslib/modules/index.js"() {
    import_tslib = __toESM(require_tslib(), 1);
    ({
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __metadata,
      __awaiter,
      __generator,
      __exportStar,
      __createBinding,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn
    } = import_tslib.default);
  }
});

// node_modules/@firebase/auth/dist/esm2017/index-4dc22a28.js
function _prodErrorMap() {
  return {
    ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
function _logError(msg, ...args) {
  if (logClient2.logLevel <= LogLevel.ERROR) {
    logClient2.error(`Auth (${SDK_VERSION}): ${msg}`, ...args);
  }
}
function _fail(authOrCode, ...rest) {
  throw createErrorInternal(authOrCode, ...rest);
}
function _createError(authOrCode, ...rest) {
  return createErrorInternal(authOrCode, ...rest);
}
function _errorWithCustomMessage(auth, code, message) {
  const errorMap = Object.assign(Object.assign({}, prodErrorMap()), { [code]: message });
  const factory2 = new ErrorFactory("auth", "Firebase", errorMap);
  return factory2.create(code, {
    appName: auth.name
  });
}
function createErrorInternal(authOrCode, ...rest) {
  if (typeof authOrCode !== "string") {
    const code = rest[0];
    const fullParams = [...rest.slice(1)];
    if (fullParams[0]) {
      fullParams[0].appName = authOrCode.name;
    }
    return authOrCode._errorFactory.create(code, ...fullParams);
  }
  return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
}
function _assert(assertion, authOrCode, ...rest) {
  if (!assertion) {
    throw createErrorInternal(authOrCode, ...rest);
  }
}
function debugFail(failure) {
  const message = `INTERNAL ASSERTION FAILED: ` + failure;
  _logError(message);
  throw new Error(message);
}
function debugAssert(assertion, message) {
  if (!assertion) {
    debugFail(message);
  }
}
function _getInstance(cls) {
  debugAssert(cls instanceof Function, "Expected a class definition");
  let instance = instanceCache.get(cls);
  if (instance) {
    debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
    return instance;
  }
  instance = new cls();
  instanceCache.set(cls, instance);
  return instance;
}
function initializeAuth(app2, deps) {
  const provider = _getProvider(app2, "auth");
  if (provider.isInitialized()) {
    const auth2 = provider.getImmediate();
    const initialOptions = provider.getOptions();
    if (deepEqual(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
      return auth2;
    } else {
      _fail(auth2, "already-initialized");
    }
  }
  const auth = provider.initialize({ options: deps });
  return auth;
}
function _initializeAuthInstance(auth, deps) {
  const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
  const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
  if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
    auth._updateErrorMap(deps.errorMap);
  }
  auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}
function _getCurrentUrl() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
}
function _isHttpOrHttps() {
  return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
}
function _getCurrentScheme() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
function _isOnline() {
  if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && (_isHttpOrHttps() || isBrowserExtension() || "connection" in navigator)) {
    return navigator.onLine;
  }
  return true;
}
function _getUserLanguage() {
  if (typeof navigator === "undefined") {
    return null;
  }
  const navigatorLanguage = navigator;
  return navigatorLanguage.languages && navigatorLanguage.languages[0] || navigatorLanguage.language || null;
}
function _emulatorUrl(config, path) {
  debugAssert(config.emulator, "Emulator should always be set here");
  const { url } = config.emulator;
  if (!path) {
    return url;
  }
  return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
}
function _addTidIfNecessary(auth, request) {
  if (auth.tenantId && !request.tenantId) {
    return Object.assign(Object.assign({}, request), { tenantId: auth.tenantId });
  }
  return request;
}
async function _performApiRequest(auth, method, path, request, customErrorMap = {}) {
  return _performFetchWithErrorHandling(auth, customErrorMap, async () => {
    let body = {};
    let params = {};
    if (request) {
      if (method === "GET") {
        params = request;
      } else {
        body = {
          body: JSON.stringify(request)
        };
      }
    }
    const query = querystring(Object.assign({ key: auth.config.apiKey }, params)).slice(1);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/json";
    if (auth.languageCode) {
      headers["X-Firebase-Locale"] = auth.languageCode;
    }
    return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), Object.assign({
      method,
      headers,
      referrerPolicy: "no-referrer"
    }, body));
  });
}
async function _performFetchWithErrorHandling(auth, customErrorMap, fetchFn) {
  auth._canInitEmulator = false;
  const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
  try {
    const networkTimeout = new NetworkTimeout(auth);
    const response = await Promise.race([
      fetchFn(),
      networkTimeout.promise
    ]);
    networkTimeout.clearNetworkTimeout();
    const json2 = await response.json();
    if ("needConfirmation" in json2) {
      throw _makeTaggedError(auth, "account-exists-with-different-credential", json2);
    }
    if (response.ok && !("errorMessage" in json2)) {
      return json2;
    } else {
      const errorMessage = response.ok ? json2.errorMessage : json2.error.message;
      const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
      if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
        throw _makeTaggedError(auth, "credential-already-in-use", json2);
      } else if (serverErrorCode === "EMAIL_EXISTS") {
        throw _makeTaggedError(auth, "email-already-in-use", json2);
      } else if (serverErrorCode === "USER_DISABLED") {
        throw _makeTaggedError(auth, "user-disabled", json2);
      }
      const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
      if (serverErrorMessage) {
        throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
      } else {
        _fail(auth, authError);
      }
    }
  } catch (e) {
    if (e instanceof FirebaseError) {
      throw e;
    }
    _fail(auth, "network-request-failed");
  }
}
async function _performSignInRequest(auth, method, path, request, customErrorMap = {}) {
  const serverResponse = await _performApiRequest(auth, method, path, request, customErrorMap);
  if ("mfaPendingCredential" in serverResponse) {
    _fail(auth, "multi-factor-auth-required", {
      _serverResponse: serverResponse
    });
  }
  return serverResponse;
}
function _getFinalTarget(auth, host, path, query) {
  const base2 = `${host}${path}?${query}`;
  if (!auth.config.emulator) {
    return `${auth.config.apiScheme}://${base2}`;
  }
  return _emulatorUrl(auth.config, base2);
}
function _makeTaggedError(auth, code, response) {
  const errorParams = {
    appName: auth.name
  };
  if (response.email) {
    errorParams.email = response.email;
  }
  if (response.phoneNumber) {
    errorParams.phoneNumber = response.phoneNumber;
  }
  const error3 = _createError(auth, code, errorParams);
  error3.customData._tokenResponse = response;
  return error3;
}
async function deleteAccount(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:delete", request);
}
async function getAccountInfo(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:lookup", request);
}
function utcTimestampToDateString(utcTimestamp) {
  if (!utcTimestamp) {
    return void 0;
  }
  try {
    const date = new Date(Number(utcTimestamp));
    if (!isNaN(date.getTime())) {
      return date.toUTCString();
    }
  } catch (e) {
  }
  return void 0;
}
async function getIdTokenResult(user, forceRefresh = false) {
  const userInternal = getModularInstance(user);
  const token = await userInternal.getIdToken(forceRefresh);
  const claims = _parseToken(token);
  _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error");
  const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
  const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
  return {
    claims,
    token,
    authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
    issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
    expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
    signInProvider: signInProvider || null,
    signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
  };
}
function secondsStringToMilliseconds(seconds) {
  return Number(seconds) * 1e3;
}
function _parseToken(token) {
  var _a;
  const [algorithm, payload, signature] = token.split(".");
  if (algorithm === void 0 || payload === void 0 || signature === void 0) {
    _logError("JWT malformed, contained fewer than 3 sections");
    return null;
  }
  try {
    const decoded = base64Decode(payload);
    if (!decoded) {
      _logError("Failed to decode base64 JWT payload");
      return null;
    }
    return JSON.parse(decoded);
  } catch (e) {
    _logError("Caught error parsing JWT payload as JSON", (_a = e) === null || _a === void 0 ? void 0 : _a.toString());
    return null;
  }
}
function _tokenExpiresIn(token) {
  const parsedToken = _parseToken(token);
  _assert(parsedToken, "internal-error");
  _assert(typeof parsedToken.exp !== "undefined", "internal-error");
  _assert(typeof parsedToken.iat !== "undefined", "internal-error");
  return Number(parsedToken.exp) - Number(parsedToken.iat);
}
async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
  if (bypassAuthState) {
    return promise;
  }
  try {
    return await promise;
  } catch (e) {
    if (e instanceof FirebaseError && isUserInvalidated(e)) {
      if (user.auth.currentUser === user) {
        await user.auth.signOut();
      }
    }
    throw e;
  }
}
function isUserInvalidated({ code }) {
  return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
}
async function _reloadWithoutSaving(user) {
  var _a;
  const auth = user.auth;
  const idToken = await user.getIdToken();
  const response = await _logoutIfInvalidated(user, getAccountInfo(auth, { idToken }));
  _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error");
  const coreAccount = response.users[0];
  user._notifyReloadListener(coreAccount);
  const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
  const providerData = mergeProviderData(user.providerData, newProviderData);
  const oldIsAnonymous = user.isAnonymous;
  const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
  const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
  const updates = {
    uid: coreAccount.localId,
    displayName: coreAccount.displayName || null,
    photoURL: coreAccount.photoUrl || null,
    email: coreAccount.email || null,
    emailVerified: coreAccount.emailVerified || false,
    phoneNumber: coreAccount.phoneNumber || null,
    tenantId: coreAccount.tenantId || null,
    providerData,
    metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
    isAnonymous
  };
  Object.assign(user, updates);
}
async function reload(user) {
  const userInternal = getModularInstance(user);
  await _reloadWithoutSaving(userInternal);
  await userInternal.auth._persistUserIfCurrent(userInternal);
  userInternal.auth._notifyListenersIfCurrent(userInternal);
}
function mergeProviderData(original, newData) {
  const deduped = original.filter((o) => !newData.some((n) => n.providerId === o.providerId));
  return [...deduped, ...newData];
}
function extractProviderData(providers) {
  return providers.map((_a) => {
    var { providerId } = _a, provider = __rest(_a, ["providerId"]);
    return {
      providerId,
      uid: provider.rawId || "",
      displayName: provider.displayName || null,
      email: provider.email || null,
      phoneNumber: provider.phoneNumber || null,
      photoURL: provider.photoUrl || null
    };
  });
}
async function requestStsToken(auth, refreshToken) {
  const response = await _performFetchWithErrorHandling(auth, {}, async () => {
    const body = querystring({
      "grant_type": "refresh_token",
      "refresh_token": refreshToken
    }).slice(1);
    const { tokenApiHost, apiKey } = auth.config;
    const url = _getFinalTarget(auth, tokenApiHost, "/v1/token", `key=${apiKey}`);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    return FetchProvider.fetch()(url, {
      method: "POST",
      headers,
      body
    });
  });
  return {
    accessToken: response.access_token,
    expiresIn: response.expires_in,
    refreshToken: response.refresh_token
  };
}
function assertStringOrUndefined(assertion, appName) {
  _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", { appName });
}
function _persistenceKeyName(key2, apiKey, appName) {
  return `${"firebase"}:${key2}:${apiKey}:${appName}`;
}
function _getBrowserName(userAgent) {
  const ua = userAgent.toLowerCase();
  if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
    return "Opera";
  } else if (_isIEMobile(ua)) {
    return "IEMobile";
  } else if (ua.includes("msie") || ua.includes("trident/")) {
    return "IE";
  } else if (ua.includes("edge/")) {
    return "Edge";
  } else if (_isFirefox(ua)) {
    return "Firefox";
  } else if (ua.includes("silk/")) {
    return "Silk";
  } else if (_isBlackBerry(ua)) {
    return "Blackberry";
  } else if (_isWebOS(ua)) {
    return "Webos";
  } else if (_isSafari(ua)) {
    return "Safari";
  } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
    return "Chrome";
  } else if (_isAndroid(ua)) {
    return "Android";
  } else {
    const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
    const matches = userAgent.match(re);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
      return matches[1];
    }
  }
  return "Other";
}
function _isFirefox(ua = getUA()) {
  return /firefox\//i.test(ua);
}
function _isSafari(userAgent = getUA()) {
  const ua = userAgent.toLowerCase();
  return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
}
function _isChromeIOS(ua = getUA()) {
  return /crios\//i.test(ua);
}
function _isIEMobile(ua = getUA()) {
  return /iemobile/i.test(ua);
}
function _isAndroid(ua = getUA()) {
  return /android/i.test(ua);
}
function _isBlackBerry(ua = getUA()) {
  return /blackberry/i.test(ua);
}
function _isWebOS(ua = getUA()) {
  return /webos/i.test(ua);
}
function _isIOS(ua = getUA()) {
  return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
}
function _isIOSStandalone(ua = getUA()) {
  var _a;
  return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}
function _isIE10() {
  return isIE() && document.documentMode === 10;
}
function _isMobileBrowser(ua = getUA()) {
  return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
}
function _isIframe() {
  try {
    return !!(window && window !== window.top);
  } catch (e) {
    return false;
  }
}
function _getClientVersion(clientPlatform, frameworks = []) {
  let reportedPlatform;
  switch (clientPlatform) {
    case "Browser":
      reportedPlatform = _getBrowserName(getUA());
      break;
    case "Worker":
      reportedPlatform = `${_getBrowserName(getUA())}-${clientPlatform}`;
      break;
    default:
      reportedPlatform = clientPlatform;
  }
  const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
  return `${reportedPlatform}/${"JsCore"}/${SDK_VERSION}/${reportedFrameworks}`;
}
function _castAuth(auth) {
  return getModularInstance(auth);
}
async function updateEmailPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function signInWithPassword(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth, request));
}
async function signInWithEmailLink$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
async function signInWithEmailLinkForLinking(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
async function signInWithIdp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth, request));
}
async function sendPhoneVerificationCode(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(auth, request));
}
async function signInWithPhoneNumber$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
}
async function linkWithPhoneNumber$1(auth, request) {
  const response = await _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
  if (response.temporaryProof) {
    throw _makeTaggedError(auth, "account-exists-with-different-credential", response);
  }
  return response;
}
async function verifyPhoneNumberForExisting(auth, request) {
  const apiRequest = Object.assign(Object.assign({}, request), { operation: "REAUTH" });
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
}
function parseMode(mode) {
  switch (mode) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function parseDeepLink(url) {
  const link = querystringDecode(extractQuerystring(url))["link"];
  const doubleDeepLink = link ? querystringDecode(extractQuerystring(link))["deep_link_id"] : null;
  const iOSDeepLink = querystringDecode(extractQuerystring(url))["deep_link_id"];
  const iOSDoubleDeepLink = iOSDeepLink ? querystringDecode(extractQuerystring(iOSDeepLink))["link"] : null;
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
function providerIdForResponse(response) {
  if (response.providerId) {
    return response.providerId;
  }
  if ("phoneNumber" in response) {
    return "phone";
  }
  return null;
}
function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
  const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
  return idTokenProvider.catch((error3) => {
    if (error3.code === `auth/${"multi-factor-auth-required"}`) {
      throw MultiFactorError._fromErrorAndOperation(auth, error3, operationType, user);
    }
    throw error3;
  });
}
async function _link$1(user, credential, bypassAuthState = false) {
  const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
  return UserCredentialImpl._forOperation(user, "link", response);
}
async function _reauthenticate(user, credential, bypassAuthState = false) {
  var _a;
  const { auth } = user;
  const operationType = "reauthenticate";
  try {
    const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);
    _assert(response.idToken, auth, "internal-error");
    const parsed = _parseToken(response.idToken);
    _assert(parsed, auth, "internal-error");
    const { sub: localId } = parsed;
    _assert(user.uid === localId, auth, "user-mismatch");
    return UserCredentialImpl._forOperation(user, operationType, response);
  } catch (e) {
    if (((_a = e) === null || _a === void 0 ? void 0 : _a.code) === `auth/${"user-not-found"}`) {
      _fail(auth, "user-mismatch");
    }
    throw e;
  }
}
async function _signInWithCredential(auth, credential, bypassAuthState = false) {
  const operationType = "signIn";
  const response = await _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);
  if (!bypassAuthState) {
    await auth._updateCurrentUser(userCredential.user);
  }
  return userCredential;
}
function startEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
}
function finalizeEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
}
function _iframeCannotSyncWebStorage() {
  const ua = getUA();
  return _isSafari(ua) || _isIOS(ua);
}
function _allSettled(promises) {
  return Promise.all(promises.map(async (promise) => {
    try {
      const value = await promise;
      return {
        fulfilled: true,
        value
      };
    } catch (reason) {
      return {
        fulfilled: false,
        reason
      };
    }
  }));
}
function _generateEventId(prefix2 = "", digits = 10) {
  let random = "";
  for (let i = 0; i < digits; i++) {
    random += Math.floor(Math.random() * 10);
  }
  return prefix2 + random;
}
function _window() {
  return window;
}
function _setWindowLocation(url) {
  _window().location.href = url;
}
function _isWorker() {
  return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
}
async function _getActiveServiceWorker() {
  if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
    return null;
  }
  try {
    const registration = await navigator.serviceWorker.ready;
    return registration.active;
  } catch (_a) {
    return null;
  }
}
function _getServiceWorkerController() {
  var _a;
  return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}
function _getWorkerGlobalScope() {
  return _isWorker() ? self : null;
}
function getObjectStore(db2, isReadWrite) {
  return db2.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
}
function _deleteDatabase() {
  const request = indexedDB.deleteDatabase(DB_NAME2);
  return new DBPromise(request).toPromise();
}
function _openDatabase() {
  const request = indexedDB.open(DB_NAME2, DB_VERSION2);
  return new Promise((resolve, reject) => {
    request.addEventListener("error", () => {
      reject(request.error);
    });
    request.addEventListener("upgradeneeded", () => {
      const db2 = request.result;
      try {
        db2.createObjectStore(DB_OBJECTSTORE_NAME, { keyPath: DB_DATA_KEYPATH });
      } catch (e) {
        reject(e);
      }
    });
    request.addEventListener("success", async () => {
      const db2 = request.result;
      if (!db2.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
        db2.close();
        await _deleteDatabase();
        resolve(await _openDatabase());
      } else {
        resolve(db2);
      }
    });
  });
}
async function _putObject(db2, key2, value) {
  const request = getObjectStore(db2, true).put({
    [DB_DATA_KEYPATH]: key2,
    value
  });
  return new DBPromise(request).toPromise();
}
async function getObject(db2, key2) {
  const request = getObjectStore(db2, false).get(key2);
  const data = await new DBPromise(request).toPromise();
  return data === void 0 ? null : data.value;
}
function _deleteObject(db2, key2) {
  const request = getObjectStore(db2, true).delete(key2);
  return new DBPromise(request).toPromise();
}
function startSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(auth, request));
}
function finalizeSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
}
function getScriptParentElement() {
  var _a, _b;
  return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
function _loadJS(url) {
  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.setAttribute("src", url);
    el.onload = resolve;
    el.onerror = (e) => {
      const error3 = _createError("internal-error");
      error3.customData = e;
      reject(error3);
    };
    el.type = "text/javascript";
    el.charset = "UTF-8";
    getScriptParentElement().appendChild(el);
  });
}
function _generateCallbackName(prefix2) {
  return `__${prefix2}${Math.floor(Math.random() * 1e6)}`;
}
async function _verifyPhoneNumber(auth, options, verifier) {
  var _a;
  const recaptchaToken = await verifier.verify();
  try {
    _assert(typeof recaptchaToken === "string", auth, "argument-error");
    _assert(verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error");
    let phoneInfoOptions;
    if (typeof options === "string") {
      phoneInfoOptions = {
        phoneNumber: options
      };
    } else {
      phoneInfoOptions = options;
    }
    if ("session" in phoneInfoOptions) {
      const session = phoneInfoOptions.session;
      if ("phoneNumber" in phoneInfoOptions) {
        _assert(session.type === "enroll", auth, "internal-error");
        const response = await startEnrollPhoneMfa(auth, {
          idToken: session.credential,
          phoneEnrollmentInfo: {
            phoneNumber: phoneInfoOptions.phoneNumber,
            recaptchaToken
          }
        });
        return response.phoneSessionInfo.sessionInfo;
      } else {
        _assert(session.type === "signin", auth, "internal-error");
        const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
        _assert(mfaEnrollmentId, auth, "missing-multi-factor-info");
        const response = await startSignInPhoneMfa(auth, {
          mfaPendingCredential: session.credential,
          mfaEnrollmentId,
          phoneSignInInfo: {
            recaptchaToken
          }
        });
        return response.phoneResponseInfo.sessionInfo;
      }
    } else {
      const { sessionInfo } = await sendPhoneVerificationCode(auth, {
        phoneNumber: phoneInfoOptions.phoneNumber,
        recaptchaToken
      });
      return sessionInfo;
    }
  } finally {
    verifier._reset();
  }
}
function _withDefaultResolver(auth, resolverOverride) {
  if (resolverOverride) {
    return _getInstance(resolverOverride);
  }
  _assert(auth._popupRedirectResolver, auth, "argument-error");
  return auth._popupRedirectResolver;
}
function _signIn(params) {
  return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}
function _reauth(params) {
  const { auth, user } = params;
  _assert(user, auth, "internal-error");
  return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
  const { auth, user } = params;
  _assert(user, auth, "internal-error");
  return _link$1(user, new IdpCredential(params), params.bypassAuthState);
}
async function _getAndClearPendingRedirectStatus(resolver, auth) {
  const key2 = pendingRedirectKey(auth);
  const persistence = resolverPersistence(resolver);
  if (!await persistence._isAvailable()) {
    return false;
  }
  const hasPendingRedirect = await persistence._get(key2) === "true";
  await persistence._remove(key2);
  return hasPendingRedirect;
}
function _overrideRedirectResult(auth, result) {
  redirectOutcomeMap.set(auth._key(), result);
}
function resolverPersistence(resolver) {
  return _getInstance(resolver._redirectPersistence);
}
function pendingRedirectKey(auth) {
  return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
}
async function _getRedirectResult(auth, resolverExtern, bypassAuthState = false) {
  const authInternal = _castAuth(auth);
  const resolver = _withDefaultResolver(authInternal, resolverExtern);
  const action = new RedirectAction(authInternal, resolver, bypassAuthState);
  const result = await action.execute();
  if (result && !bypassAuthState) {
    delete result.user._redirectEventId;
    await authInternal._persistUserIfCurrent(result.user);
    await authInternal._setRedirectUser(null, resolverExtern);
  }
  return result;
}
function eventUid(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter((v) => v).join("-");
}
function isNullRedirectEvent({ type, error: error3 }) {
  return type === "unknown" && (error3 === null || error3 === void 0 ? void 0 : error3.code) === `auth/${"no-auth-event"}`;
}
function isRedirectEvent(event) {
  switch (event.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return true;
    case "unknown":
      return isNullRedirectEvent(event);
    default:
      return false;
  }
}
async function _getProjectConfig(auth, request = {}) {
  return _performApiRequest(auth, "GET", "/v1/projects", request);
}
async function _validateOrigin(auth) {
  if (auth.config.emulator) {
    return;
  }
  const { authorizedDomains } = await _getProjectConfig(auth);
  for (const domain of authorizedDomains) {
    try {
      if (matchDomain(domain)) {
        return;
      }
    } catch (_a) {
    }
  }
  _fail(auth, "unauthorized-domain");
}
function matchDomain(expected) {
  const currentUrl = _getCurrentUrl();
  const { protocol, hostname } = new URL(currentUrl);
  if (expected.startsWith("chrome-extension://")) {
    const ceUrl = new URL(expected);
    if (ceUrl.hostname === "" && hostname === "") {
      return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
    }
    return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
  }
  if (!HTTP_REGEX.test(protocol)) {
    return false;
  }
  if (IP_ADDRESS_REGEX.test(expected)) {
    return hostname === expected;
  }
  const escapedDomainPattern = expected.replace(/\./g, "\\.");
  const re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
  return re.test(hostname);
}
function resetUnloadedGapiModules() {
  const beacon = _window().___jsl;
  if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
    for (const hint of Object.keys(beacon.H)) {
      beacon.H[hint].r = beacon.H[hint].r || [];
      beacon.H[hint].L = beacon.H[hint].L || [];
      beacon.H[hint].r = [...beacon.H[hint].L];
      if (beacon.CP) {
        for (let i = 0; i < beacon.CP.length; i++) {
          beacon.CP[i] = null;
        }
      }
    }
  }
}
function loadGapi(auth) {
  return new Promise((resolve, reject) => {
    var _a, _b, _c;
    function loadGapiIframe() {
      resetUnloadedGapiModules();
      gapi.load("gapi.iframes", {
        callback: () => {
          resolve(gapi.iframes.getContext());
        },
        ontimeout: () => {
          resetUnloadedGapiModules();
          reject(_createError(auth, "network-request-failed"));
        },
        timeout: NETWORK_TIMEOUT.get()
      });
    }
    if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
      resolve(gapi.iframes.getContext());
    } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
      loadGapiIframe();
    } else {
      const cbName = _generateCallbackName("iframefcb");
      _window()[cbName] = () => {
        if (!!gapi.load) {
          loadGapiIframe();
        } else {
          reject(_createError(auth, "network-request-failed"));
        }
      };
      return _loadJS(`https://apis.google.com/js/api.js?onload=${cbName}`).catch((e) => reject(e));
    }
  }).catch((error3) => {
    cachedGApiLoader = null;
    throw error3;
  });
}
function _loadGapi(auth) {
  cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
  return cachedGApiLoader;
}
function getIframeUrl(auth) {
  const config = auth.config;
  _assert(config.authDomain, auth, "auth-domain-config-required");
  const url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
  const params = {
    apiKey: config.apiKey,
    appName: auth.name,
    v: SDK_VERSION
  };
  const eid = EID_FROM_APIHOST.get(auth.config.apiHost);
  if (eid) {
    params.eid = eid;
  }
  const frameworks = auth._getFrameworks();
  if (frameworks.length) {
    params.fw = frameworks.join(",");
  }
  return `${url}?${querystring(params).slice(1)}`;
}
async function _openIframe(auth) {
  const context = await _loadGapi(auth);
  const gapi2 = _window().gapi;
  _assert(gapi2, auth, "internal-error");
  return context.open({
    where: document.body,
    url: getIframeUrl(auth),
    messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: IFRAME_ATTRIBUTES,
    dontclear: true
  }, (iframe) => new Promise(async (resolve, reject) => {
    await iframe.restyle({
      setHideOnLeave: false
    });
    const networkError = _createError(auth, "network-request-failed");
    const networkErrorTimer = _window().setTimeout(() => {
      reject(networkError);
    }, PING_TIMEOUT.get());
    function clearTimerAndResolve() {
      _window().clearTimeout(networkErrorTimer);
      resolve(iframe);
    }
    iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
      reject(networkError);
    });
  }));
}
function _open(auth, url, name6, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
  const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
  const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
  let target = "";
  const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
    width: width.toString(),
    height: height.toString(),
    top,
    left
  });
  const ua = getUA().toLowerCase();
  if (name6) {
    target = _isChromeIOS(ua) ? TARGET_BLANK : name6;
  }
  if (_isFirefox(ua)) {
    url = url || FIREFOX_EMPTY_URL;
    options.scrollbars = "yes";
  }
  const optionsString = Object.entries(options).reduce((accum, [key2, value]) => `${accum}${key2}=${value},`, "");
  if (_isIOSStandalone(ua) && target !== "_self") {
    openAsNewWindowIOS(url || "", target);
    return new AuthPopup(null);
  }
  const newWin = window.open(url || "", target, optionsString);
  _assert(newWin, auth, "popup-blocked");
  try {
    newWin.focus();
  } catch (e) {
  }
  return new AuthPopup(newWin);
}
function openAsNewWindowIOS(url, target) {
  const el = document.createElement("a");
  el.href = url;
  el.target = target;
  const click = document.createEvent("MouseEvent");
  click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  el.dispatchEvent(click);
}
function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
  _assert(auth.config.authDomain, auth, "auth-domain-config-required");
  _assert(auth.config.apiKey, auth, "invalid-api-key");
  const params = {
    apiKey: auth.config.apiKey,
    appName: auth.name,
    authType,
    redirectUrl,
    v: SDK_VERSION,
    eventId
  };
  if (provider instanceof FederatedAuthProvider) {
    provider.setDefaultLanguage(auth.languageCode);
    params.providerId = provider.providerId || "";
    if (!isEmpty(provider.getCustomParameters())) {
      params.customParameters = JSON.stringify(provider.getCustomParameters());
    }
    for (const [key2, value] of Object.entries(additionalParams || {})) {
      params[key2] = value;
    }
  }
  if (provider instanceof BaseOAuthProvider) {
    const scopes = provider.getScopes().filter((scope) => scope !== "");
    if (scopes.length > 0) {
      params.scopes = scopes.join(",");
    }
  }
  if (auth.tenantId) {
    params.tid = auth.tenantId;
  }
  const paramsDict = params;
  for (const key2 of Object.keys(paramsDict)) {
    if (paramsDict[key2] === void 0) {
      delete paramsDict[key2];
    }
  }
  return `${getHandlerBase(auth)}?${querystring(paramsDict).slice(1)}`;
}
function getHandlerBase({ config }) {
  if (!config.emulator) {
    return `https://${config.authDomain}/${WIDGET_PATH}`;
  }
  return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}
function getVersionForPlatform(clientPlatform) {
  switch (clientPlatform) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return void 0;
  }
}
function registerAuth(clientPlatform) {
  _registerComponent(new Component("auth", (container, { options: deps }) => {
    const app2 = container.getProvider("app").getImmediate();
    const heartbeatServiceProvider = container.getProvider("heartbeat");
    const { apiKey, authDomain } = app2.options;
    return ((app3, heartbeatServiceProvider2) => {
      _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", { appName: app3.name });
      _assert(!(authDomain === null || authDomain === void 0 ? void 0 : authDomain.includes(":")), "argument-error", {
        appName: app3.name
      });
      const config = {
        apiKey,
        authDomain,
        clientPlatform,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: _getClientVersion(clientPlatform)
      };
      const authInstance = new AuthImpl(app3, heartbeatServiceProvider2, config);
      _initializeAuthInstance(authInstance, deps);
      return authInstance;
    })(app2, heartbeatServiceProvider);
  }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
    const authInternalProvider = container.getProvider("auth-internal");
    authInternalProvider.initialize();
  }));
  _registerComponent(new Component("auth-internal", (container) => {
    const auth = _castAuth(container.getProvider("auth").getImmediate());
    return ((auth2) => new AuthInterop(auth2))(auth);
  }, "PRIVATE").setInstantiationMode("EXPLICIT"));
  registerVersion(name5, version5, getVersionForPlatform(clientPlatform));
  registerVersion(name5, version5, "esm2017");
}
function getAuth(app2 = getApp()) {
  const provider = _getProvider(app2, "auth");
  if (provider.isInitialized()) {
    return provider.getImmediate();
  }
  return initializeAuth(app2, {
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: [
      indexedDBLocalPersistence,
      browserLocalPersistence,
      browserSessionPersistence
    ]
  });
}
var prodErrorMap, _DEFAULT_AUTH_ERROR_FACTORY, logClient2, instanceCache, Delay, FetchProvider, SERVER_ERROR_MAP, DEFAULT_API_TIMEOUT_MS, NetworkTimeout, ProactiveRefresh, UserMetadata, StsTokenManager, UserImpl, InMemoryPersistence, inMemoryPersistence, PersistenceUserManager, AuthMiddlewareQueue, AuthImpl, Subscription, AuthCredential, EmailAuthCredential, IDP_REQUEST_URI$1, OAuthCredential, VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_, PhoneAuthCredential, ActionCodeURL, EmailAuthProvider, FederatedAuthProvider, BaseOAuthProvider, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider, UserCredentialImpl, MultiFactorError, STORAGE_AVAILABLE_KEY, BrowserPersistenceClass, _POLLING_INTERVAL_MS$1, IE10_LOCAL_STORAGE_SYNC_DELAY, BrowserLocalPersistence, browserLocalPersistence, BrowserSessionPersistence, browserSessionPersistence, Receiver, Sender, DB_NAME2, DB_VERSION2, DB_OBJECTSTORE_NAME, DB_DATA_KEYPATH, DBPromise, _POLLING_INTERVAL_MS, _TRANSACTION_RETRY_COUNT, IndexedDBLocalPersistence, indexedDBLocalPersistence, _JSLOAD_CALLBACK, NETWORK_TIMEOUT_DELAY, RECAPTCHA_VERIFIER_TYPE, PhoneAuthProvider, IdpCredential, AbstractPopupRedirectOperation, _POLL_WINDOW_CLOSE_TIMEOUT, PopupOperation, PENDING_REDIRECT_KEY, redirectOutcomeMap, RedirectAction, EVENT_DUPLICATION_CACHE_DURATION_MS, AuthEventManager, IP_ADDRESS_REGEX, HTTP_REGEX, NETWORK_TIMEOUT, cachedGApiLoader, PING_TIMEOUT, IFRAME_PATH, EMULATED_IFRAME_PATH, IFRAME_ATTRIBUTES, EID_FROM_APIHOST, BASE_POPUP_OPTIONS, DEFAULT_WIDTH, DEFAULT_HEIGHT, TARGET_BLANK, FIREFOX_EMPTY_URL, AuthPopup, WIDGET_PATH, EMULATOR_WIDGET_PATH, WEB_STORAGE_SUPPORT_KEY, BrowserPopupRedirectResolver, browserPopupRedirectResolver, MultiFactorAssertionImpl, PhoneMultiFactorAssertionImpl, PhoneMultiFactorGenerator, name5, version5, AuthInterop;
var init_index_4dc22a28 = __esm({
  "node_modules/@firebase/auth/dist/esm2017/index-4dc22a28.js"() {
    init_index_esm2017();
    init_index_esm20174();
    init_modules();
    init_index_esm20173();
    init_index_esm20172();
    prodErrorMap = _prodErrorMap;
    _DEFAULT_AUTH_ERROR_FACTORY = new ErrorFactory("auth", "Firebase", _prodErrorMap());
    logClient2 = new Logger("@firebase/auth");
    instanceCache = /* @__PURE__ */ new Map();
    Delay = class {
      constructor(shortDelay, longDelay) {
        this.shortDelay = shortDelay;
        this.longDelay = longDelay;
        debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
        this.isMobile = isMobileCordova() || isReactNative();
      }
      get() {
        if (!_isOnline()) {
          return Math.min(5e3, this.shortDelay);
        }
        return this.isMobile ? this.longDelay : this.shortDelay;
      }
    };
    FetchProvider = class {
      static initialize(fetchImpl, headersImpl, responseImpl) {
        this.fetchImpl = fetchImpl;
        if (headersImpl) {
          this.headersImpl = headersImpl;
        }
        if (responseImpl) {
          this.responseImpl = responseImpl;
        }
      }
      static fetch() {
        if (this.fetchImpl) {
          return this.fetchImpl;
        }
        if (typeof self !== "undefined" && "fetch" in self) {
          return self.fetch;
        }
        debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
      static headers() {
        if (this.headersImpl) {
          return this.headersImpl;
        }
        if (typeof self !== "undefined" && "Headers" in self) {
          return self.Headers;
        }
        debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
      static response() {
        if (this.responseImpl) {
          return this.responseImpl;
        }
        if (typeof self !== "undefined" && "Response" in self) {
          return self.Response;
        }
        debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
    };
    SERVER_ERROR_MAP = {
      ["CREDENTIAL_MISMATCH"]: "custom-token-mismatch",
      ["MISSING_CUSTOM_TOKEN"]: "internal-error",
      ["INVALID_IDENTIFIER"]: "invalid-email",
      ["MISSING_CONTINUE_URI"]: "internal-error",
      ["INVALID_PASSWORD"]: "wrong-password",
      ["MISSING_PASSWORD"]: "internal-error",
      ["EMAIL_EXISTS"]: "email-already-in-use",
      ["PASSWORD_LOGIN_DISABLED"]: "operation-not-allowed",
      ["INVALID_IDP_RESPONSE"]: "invalid-credential",
      ["INVALID_PENDING_TOKEN"]: "invalid-credential",
      ["FEDERATED_USER_ID_ALREADY_LINKED"]: "credential-already-in-use",
      ["MISSING_REQ_TYPE"]: "internal-error",
      ["EMAIL_NOT_FOUND"]: "user-not-found",
      ["RESET_PASSWORD_EXCEED_LIMIT"]: "too-many-requests",
      ["EXPIRED_OOB_CODE"]: "expired-action-code",
      ["INVALID_OOB_CODE"]: "invalid-action-code",
      ["MISSING_OOB_CODE"]: "internal-error",
      ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]: "requires-recent-login",
      ["INVALID_ID_TOKEN"]: "invalid-user-token",
      ["TOKEN_EXPIRED"]: "user-token-expired",
      ["USER_NOT_FOUND"]: "user-token-expired",
      ["TOO_MANY_ATTEMPTS_TRY_LATER"]: "too-many-requests",
      ["INVALID_CODE"]: "invalid-verification-code",
      ["INVALID_SESSION_INFO"]: "invalid-verification-id",
      ["INVALID_TEMPORARY_PROOF"]: "invalid-credential",
      ["MISSING_SESSION_INFO"]: "missing-verification-id",
      ["SESSION_EXPIRED"]: "code-expired",
      ["MISSING_ANDROID_PACKAGE_NAME"]: "missing-android-pkg-name",
      ["UNAUTHORIZED_DOMAIN"]: "unauthorized-continue-uri",
      ["INVALID_OAUTH_CLIENT_ID"]: "invalid-oauth-client-id",
      ["ADMIN_ONLY_OPERATION"]: "admin-restricted-operation",
      ["INVALID_MFA_PENDING_CREDENTIAL"]: "invalid-multi-factor-session",
      ["MFA_ENROLLMENT_NOT_FOUND"]: "multi-factor-info-not-found",
      ["MISSING_MFA_ENROLLMENT_ID"]: "missing-multi-factor-info",
      ["MISSING_MFA_PENDING_CREDENTIAL"]: "missing-multi-factor-session",
      ["SECOND_FACTOR_EXISTS"]: "second-factor-already-in-use",
      ["SECOND_FACTOR_LIMIT_EXCEEDED"]: "maximum-second-factor-count-exceeded",
      ["BLOCKING_FUNCTION_ERROR_RESPONSE"]: "internal-error"
    };
    DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
    NetworkTimeout = class {
      constructor(auth) {
        this.auth = auth;
        this.timer = null;
        this.promise = new Promise((_, reject) => {
          this.timer = setTimeout(() => {
            return reject(_createError(this.auth, "network-request-failed"));
          }, DEFAULT_API_TIMEOUT_MS.get());
        });
      }
      clearNetworkTimeout() {
        clearTimeout(this.timer);
      }
    };
    ProactiveRefresh = class {
      constructor(user) {
        this.user = user;
        this.isRunning = false;
        this.timerId = null;
        this.errorBackoff = 3e4;
      }
      _start() {
        if (this.isRunning) {
          return;
        }
        this.isRunning = true;
        this.schedule();
      }
      _stop() {
        if (!this.isRunning) {
          return;
        }
        this.isRunning = false;
        if (this.timerId !== null) {
          clearTimeout(this.timerId);
        }
      }
      getInterval(wasError) {
        var _a;
        if (wasError) {
          const interval = this.errorBackoff;
          this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4);
          return interval;
        } else {
          this.errorBackoff = 3e4;
          const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
          const interval = expTime - Date.now() - 3e5;
          return Math.max(0, interval);
        }
      }
      schedule(wasError = false) {
        if (!this.isRunning) {
          return;
        }
        const interval = this.getInterval(wasError);
        this.timerId = setTimeout(async () => {
          await this.iteration();
        }, interval);
      }
      async iteration() {
        var _a;
        try {
          await this.user.getIdToken(true);
        } catch (e) {
          if (((_a = e) === null || _a === void 0 ? void 0 : _a.code) === `auth/${"network-request-failed"}`) {
            this.schedule(true);
          }
          return;
        }
        this.schedule();
      }
    };
    UserMetadata = class {
      constructor(createdAt, lastLoginAt) {
        this.createdAt = createdAt;
        this.lastLoginAt = lastLoginAt;
        this._initializeTime();
      }
      _initializeTime() {
        this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
        this.creationTime = utcTimestampToDateString(this.createdAt);
      }
      _copy(metadata) {
        this.createdAt = metadata.createdAt;
        this.lastLoginAt = metadata.lastLoginAt;
        this._initializeTime();
      }
      toJSON() {
        return {
          createdAt: this.createdAt,
          lastLoginAt: this.lastLoginAt
        };
      }
    };
    StsTokenManager = class {
      constructor() {
        this.refreshToken = null;
        this.accessToken = null;
        this.expirationTime = null;
      }
      get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
      }
      updateFromServerResponse(response) {
        _assert(response.idToken, "internal-error");
        _assert(typeof response.idToken !== "undefined", "internal-error");
        _assert(typeof response.refreshToken !== "undefined", "internal-error");
        const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
        this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
      }
      async getToken(auth, forceRefresh = false) {
        _assert(!this.accessToken || this.refreshToken, auth, "user-token-expired");
        if (!forceRefresh && this.accessToken && !this.isExpired) {
          return this.accessToken;
        }
        if (this.refreshToken) {
          await this.refresh(auth, this.refreshToken);
          return this.accessToken;
        }
        return null;
      }
      clearRefreshToken() {
        this.refreshToken = null;
      }
      async refresh(auth, oldToken) {
        const { accessToken, refreshToken, expiresIn } = await requestStsToken(auth, oldToken);
        this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
      }
      updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
        this.refreshToken = refreshToken || null;
        this.accessToken = accessToken || null;
        this.expirationTime = Date.now() + expiresInSec * 1e3;
      }
      static fromJSON(appName, object) {
        const { refreshToken, accessToken, expirationTime } = object;
        const manager = new StsTokenManager();
        if (refreshToken) {
          _assert(typeof refreshToken === "string", "internal-error", {
            appName
          });
          manager.refreshToken = refreshToken;
        }
        if (accessToken) {
          _assert(typeof accessToken === "string", "internal-error", {
            appName
          });
          manager.accessToken = accessToken;
        }
        if (expirationTime) {
          _assert(typeof expirationTime === "number", "internal-error", {
            appName
          });
          manager.expirationTime = expirationTime;
        }
        return manager;
      }
      toJSON() {
        return {
          refreshToken: this.refreshToken,
          accessToken: this.accessToken,
          expirationTime: this.expirationTime
        };
      }
      _assign(stsTokenManager) {
        this.accessToken = stsTokenManager.accessToken;
        this.refreshToken = stsTokenManager.refreshToken;
        this.expirationTime = stsTokenManager.expirationTime;
      }
      _clone() {
        return Object.assign(new StsTokenManager(), this.toJSON());
      }
      _performRefresh() {
        return debugFail("not implemented");
      }
    };
    UserImpl = class {
      constructor(_a) {
        var { uid, auth, stsTokenManager } = _a, opt = __rest(_a, ["uid", "auth", "stsTokenManager"]);
        this.providerId = "firebase";
        this.proactiveRefresh = new ProactiveRefresh(this);
        this.reloadUserInfo = null;
        this.reloadListener = null;
        this.uid = uid;
        this.auth = auth;
        this.stsTokenManager = stsTokenManager;
        this.accessToken = stsTokenManager.accessToken;
        this.displayName = opt.displayName || null;
        this.email = opt.email || null;
        this.emailVerified = opt.emailVerified || false;
        this.phoneNumber = opt.phoneNumber || null;
        this.photoURL = opt.photoURL || null;
        this.isAnonymous = opt.isAnonymous || false;
        this.tenantId = opt.tenantId || null;
        this.providerData = opt.providerData ? [...opt.providerData] : [];
        this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
      }
      async getIdToken(forceRefresh) {
        const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
        _assert(accessToken, this.auth, "internal-error");
        if (this.accessToken !== accessToken) {
          this.accessToken = accessToken;
          await this.auth._persistUserIfCurrent(this);
          this.auth._notifyListenersIfCurrent(this);
        }
        return accessToken;
      }
      getIdTokenResult(forceRefresh) {
        return getIdTokenResult(this, forceRefresh);
      }
      reload() {
        return reload(this);
      }
      _assign(user) {
        if (this === user) {
          return;
        }
        _assert(this.uid === user.uid, this.auth, "internal-error");
        this.displayName = user.displayName;
        this.photoURL = user.photoURL;
        this.email = user.email;
        this.emailVerified = user.emailVerified;
        this.phoneNumber = user.phoneNumber;
        this.isAnonymous = user.isAnonymous;
        this.tenantId = user.tenantId;
        this.providerData = user.providerData.map((userInfo) => Object.assign({}, userInfo));
        this.metadata._copy(user.metadata);
        this.stsTokenManager._assign(user.stsTokenManager);
      }
      _clone(auth) {
        return new UserImpl(Object.assign(Object.assign({}, this), { auth, stsTokenManager: this.stsTokenManager._clone() }));
      }
      _onReload(callback) {
        _assert(!this.reloadListener, this.auth, "internal-error");
        this.reloadListener = callback;
        if (this.reloadUserInfo) {
          this._notifyReloadListener(this.reloadUserInfo);
          this.reloadUserInfo = null;
        }
      }
      _notifyReloadListener(userInfo) {
        if (this.reloadListener) {
          this.reloadListener(userInfo);
        } else {
          this.reloadUserInfo = userInfo;
        }
      }
      _startProactiveRefresh() {
        this.proactiveRefresh._start();
      }
      _stopProactiveRefresh() {
        this.proactiveRefresh._stop();
      }
      async _updateTokensIfNecessary(response, reload2 = false) {
        let tokensRefreshed = false;
        if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
          this.stsTokenManager.updateFromServerResponse(response);
          tokensRefreshed = true;
        }
        if (reload2) {
          await _reloadWithoutSaving(this);
        }
        await this.auth._persistUserIfCurrent(this);
        if (tokensRefreshed) {
          this.auth._notifyListenersIfCurrent(this);
        }
      }
      async delete() {
        const idToken = await this.getIdToken();
        await _logoutIfInvalidated(this, deleteAccount(this.auth, { idToken }));
        this.stsTokenManager.clearRefreshToken();
        return this.auth.signOut();
      }
      toJSON() {
        return Object.assign(Object.assign({
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((userInfo) => Object.assign({}, userInfo)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {
          apiKey: this.auth.config.apiKey,
          appName: this.auth.name
        });
      }
      get refreshToken() {
        return this.stsTokenManager.refreshToken || "";
      }
      static _fromJSON(auth, object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : void 0;
        const email = (_b = object.email) !== null && _b !== void 0 ? _b : void 0;
        const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : void 0;
        const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : void 0;
        const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : void 0;
        const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : void 0;
        const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : void 0;
        const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : void 0;
        const { uid, emailVerified, isAnonymous, providerData, stsTokenManager: plainObjectTokenManager } = object;
        _assert(uid && plainObjectTokenManager, auth, "internal-error");
        const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
        _assert(typeof uid === "string", auth, "internal-error");
        assertStringOrUndefined(displayName, auth.name);
        assertStringOrUndefined(email, auth.name);
        _assert(typeof emailVerified === "boolean", auth, "internal-error");
        _assert(typeof isAnonymous === "boolean", auth, "internal-error");
        assertStringOrUndefined(phoneNumber, auth.name);
        assertStringOrUndefined(photoURL, auth.name);
        assertStringOrUndefined(tenantId, auth.name);
        assertStringOrUndefined(_redirectEventId, auth.name);
        assertStringOrUndefined(createdAt, auth.name);
        assertStringOrUndefined(lastLoginAt, auth.name);
        const user = new UserImpl({
          uid,
          auth,
          email,
          emailVerified,
          displayName,
          isAnonymous,
          photoURL,
          phoneNumber,
          tenantId,
          stsTokenManager,
          createdAt,
          lastLoginAt
        });
        if (providerData && Array.isArray(providerData)) {
          user.providerData = providerData.map((userInfo) => Object.assign({}, userInfo));
        }
        if (_redirectEventId) {
          user._redirectEventId = _redirectEventId;
        }
        return user;
      }
      static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
        const stsTokenManager = new StsTokenManager();
        stsTokenManager.updateFromServerResponse(idTokenResponse);
        const user = new UserImpl({
          uid: idTokenResponse.localId,
          auth,
          stsTokenManager,
          isAnonymous
        });
        await _reloadWithoutSaving(user);
        return user;
      }
    };
    InMemoryPersistence = class {
      constructor() {
        this.type = "NONE";
        this.storage = {};
      }
      async _isAvailable() {
        return true;
      }
      async _set(key2, value) {
        this.storage[key2] = value;
      }
      async _get(key2) {
        const value = this.storage[key2];
        return value === void 0 ? null : value;
      }
      async _remove(key2) {
        delete this.storage[key2];
      }
      _addListener(_key, _listener) {
        return;
      }
      _removeListener(_key, _listener) {
        return;
      }
    };
    InMemoryPersistence.type = "NONE";
    inMemoryPersistence = InMemoryPersistence;
    PersistenceUserManager = class {
      constructor(persistence, auth, userKey) {
        this.persistence = persistence;
        this.auth = auth;
        this.userKey = userKey;
        const { config, name: name6 } = this.auth;
        this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name6);
        this.fullPersistenceKey = _persistenceKeyName("persistence", config.apiKey, name6);
        this.boundEventHandler = auth._onStorageEvent.bind(auth);
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
      }
      setCurrentUser(user) {
        return this.persistence._set(this.fullUserKey, user.toJSON());
      }
      async getCurrentUser() {
        const blob = await this.persistence._get(this.fullUserKey);
        return blob ? UserImpl._fromJSON(this.auth, blob) : null;
      }
      removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey);
      }
      savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
      }
      async setPersistence(newPersistence) {
        if (this.persistence === newPersistence) {
          return;
        }
        const currentUser = await this.getCurrentUser();
        await this.removeCurrentUser();
        this.persistence = newPersistence;
        if (currentUser) {
          return this.setCurrentUser(currentUser);
        }
      }
      delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
      }
      static async create(auth, persistenceHierarchy, userKey = "authUser") {
        if (!persistenceHierarchy.length) {
          return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
        }
        const availablePersistences = (await Promise.all(persistenceHierarchy.map(async (persistence) => {
          if (await persistence._isAvailable()) {
            return persistence;
          }
          return void 0;
        }))).filter((persistence) => persistence);
        let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
        const key2 = _persistenceKeyName(userKey, auth.config.apiKey, auth.name);
        let userToMigrate = null;
        for (const persistence of persistenceHierarchy) {
          try {
            const blob = await persistence._get(key2);
            if (blob) {
              const user = UserImpl._fromJSON(auth, blob);
              if (persistence !== selectedPersistence) {
                userToMigrate = user;
              }
              selectedPersistence = persistence;
              break;
            }
          } catch (_a) {
          }
        }
        const migrationHierarchy = availablePersistences.filter((p) => p._shouldAllowMigration);
        if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
          return new PersistenceUserManager(selectedPersistence, auth, userKey);
        }
        selectedPersistence = migrationHierarchy[0];
        if (userToMigrate) {
          await selectedPersistence._set(key2, userToMigrate.toJSON());
        }
        await Promise.all(persistenceHierarchy.map(async (persistence) => {
          if (persistence !== selectedPersistence) {
            try {
              await persistence._remove(key2);
            } catch (_a) {
            }
          }
        }));
        return new PersistenceUserManager(selectedPersistence, auth, userKey);
      }
    };
    AuthMiddlewareQueue = class {
      constructor(auth) {
        this.auth = auth;
        this.queue = [];
      }
      pushCallback(callback, onAbort) {
        const wrappedCallback = (user) => new Promise((resolve, reject) => {
          try {
            const result = callback(user);
            resolve(result);
          } catch (e) {
            reject(e);
          }
        });
        wrappedCallback.onAbort = onAbort;
        this.queue.push(wrappedCallback);
        const index32 = this.queue.length - 1;
        return () => {
          this.queue[index32] = () => Promise.resolve();
        };
      }
      async runMiddleware(nextUser) {
        var _a;
        if (this.auth.currentUser === nextUser) {
          return;
        }
        const onAbortStack = [];
        try {
          for (const beforeStateCallback of this.queue) {
            await beforeStateCallback(nextUser);
            if (beforeStateCallback.onAbort) {
              onAbortStack.push(beforeStateCallback.onAbort);
            }
          }
        } catch (e) {
          onAbortStack.reverse();
          for (const onAbort of onAbortStack) {
            try {
              onAbort();
            } catch (_) {
            }
          }
          throw this.auth._errorFactory.create("login-blocked", {
            originalMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message
          });
        }
      }
    };
    AuthImpl = class {
      constructor(app2, heartbeatServiceProvider, config) {
        this.app = app2;
        this.heartbeatServiceProvider = heartbeatServiceProvider;
        this.config = config;
        this.currentUser = null;
        this.emulatorConfig = null;
        this.operations = Promise.resolve();
        this.authStateSubscription = new Subscription(this);
        this.idTokenSubscription = new Subscription(this);
        this.beforeStateQueue = new AuthMiddlewareQueue(this);
        this.redirectUser = null;
        this.isProactiveRefreshEnabled = false;
        this._canInitEmulator = true;
        this._isInitialized = false;
        this._deleted = false;
        this._initializationPromise = null;
        this._popupRedirectResolver = null;
        this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
        this.lastNotifiedUid = void 0;
        this.languageCode = null;
        this.tenantId = null;
        this.settings = { appVerificationDisabledForTesting: false };
        this.frameworks = [];
        this.name = app2.name;
        this.clientVersion = config.sdkClientVersion;
      }
      _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
        if (popupRedirectResolver) {
          this._popupRedirectResolver = _getInstance(popupRedirectResolver);
        }
        this._initializationPromise = this.queue(async () => {
          var _a, _b;
          if (this._deleted) {
            return;
          }
          this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
          if (this._deleted) {
            return;
          }
          if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch (e) {
            }
          }
          await this.initializeCurrentUser(popupRedirectResolver);
          this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
          if (this._deleted) {
            return;
          }
          this._isInitialized = true;
        });
        return this._initializationPromise;
      }
      async _onStorageEvent() {
        if (this._deleted) {
          return;
        }
        const user = await this.assertedPersistence.getCurrentUser();
        if (!this.currentUser && !user) {
          return;
        }
        if (this.currentUser && user && this.currentUser.uid === user.uid) {
          this._currentUser._assign(user);
          await this.currentUser.getIdToken();
          return;
        }
        await this._updateCurrentUser(user, true);
      }
      async initializeCurrentUser(popupRedirectResolver) {
        var _a;
        const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
        let futureCurrentUser = previouslyStoredUser;
        let needsTocheckMiddleware = false;
        if (popupRedirectResolver && this.config.authDomain) {
          await this.getOrInitRedirectPersistenceManager();
          const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
          const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
          const result = await this.tryRedirectSignIn(popupRedirectResolver);
          if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
            futureCurrentUser = result.user;
            needsTocheckMiddleware = true;
          }
        }
        if (!futureCurrentUser) {
          return this.directlySetCurrentUser(null);
        }
        if (!futureCurrentUser._redirectEventId) {
          if (needsTocheckMiddleware) {
            try {
              await this.beforeStateQueue.runMiddleware(futureCurrentUser);
            } catch (e) {
              futureCurrentUser = previouslyStoredUser;
              this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e));
            }
          }
          if (futureCurrentUser) {
            return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
          } else {
            return this.directlySetCurrentUser(null);
          }
        }
        _assert(this._popupRedirectResolver, this, "argument-error");
        await this.getOrInitRedirectPersistenceManager();
        if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
          return this.directlySetCurrentUser(futureCurrentUser);
        }
        return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
      }
      async tryRedirectSignIn(redirectResolver) {
        let result = null;
        try {
          result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
        } catch (e) {
          await this._setRedirectUser(null);
        }
        return result;
      }
      async reloadAndSetCurrentUserOrClear(user) {
        var _a;
        try {
          await _reloadWithoutSaving(user);
        } catch (e) {
          if (((_a = e) === null || _a === void 0 ? void 0 : _a.code) !== `auth/${"network-request-failed"}`) {
            return this.directlySetCurrentUser(null);
          }
        }
        return this.directlySetCurrentUser(user);
      }
      useDeviceLanguage() {
        this.languageCode = _getUserLanguage();
      }
      async _delete() {
        this._deleted = true;
      }
      async updateCurrentUser(userExtern) {
        const user = userExtern ? getModularInstance(userExtern) : null;
        if (user) {
          _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token");
        }
        return this._updateCurrentUser(user && user._clone(this));
      }
      async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
        if (this._deleted) {
          return;
        }
        if (user) {
          _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch");
        }
        if (!skipBeforeStateCallbacks) {
          await this.beforeStateQueue.runMiddleware(user);
        }
        return this.queue(async () => {
          await this.directlySetCurrentUser(user);
          this.notifyAuthListeners();
        });
      }
      async signOut() {
        await this.beforeStateQueue.runMiddleware(null);
        if (this.redirectPersistenceManager || this._popupRedirectResolver) {
          await this._setRedirectUser(null);
        }
        return this._updateCurrentUser(null, true);
      }
      setPersistence(persistence) {
        return this.queue(async () => {
          await this.assertedPersistence.setPersistence(_getInstance(persistence));
        });
      }
      _getPersistence() {
        return this.assertedPersistence.persistence.type;
      }
      _updateErrorMap(errorMap) {
        this._errorFactory = new ErrorFactory("auth", "Firebase", errorMap());
      }
      onAuthStateChanged(nextOrObserver, error3, completed) {
        return this.registerStateListener(this.authStateSubscription, nextOrObserver, error3, completed);
      }
      beforeAuthStateChanged(callback, onAbort) {
        return this.beforeStateQueue.pushCallback(callback, onAbort);
      }
      onIdTokenChanged(nextOrObserver, error3, completed) {
        return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error3, completed);
      }
      toJSON() {
        var _a;
        return {
          apiKey: this.config.apiKey,
          authDomain: this.config.authDomain,
          appName: this.name,
          currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
        };
      }
      async _setRedirectUser(user, popupRedirectResolver) {
        const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
        return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
      }
      async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
        if (!this.redirectPersistenceManager) {
          const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
          _assert(resolver, this, "argument-error");
          this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser");
          this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
        }
        return this.redirectPersistenceManager;
      }
      async _redirectUserForId(id) {
        var _a, _b;
        if (this._isInitialized) {
          await this.queue(async () => {
          });
        }
        if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
          return this._currentUser;
        }
        if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
          return this.redirectUser;
        }
        return null;
      }
      async _persistUserIfCurrent(user) {
        if (user === this.currentUser) {
          return this.queue(async () => this.directlySetCurrentUser(user));
        }
      }
      _notifyListenersIfCurrent(user) {
        if (user === this.currentUser) {
          this.notifyAuthListeners();
        }
      }
      _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
      }
      _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = true;
        if (this.currentUser) {
          this._currentUser._startProactiveRefresh();
        }
      }
      _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = false;
        if (this.currentUser) {
          this._currentUser._stopProactiveRefresh();
        }
      }
      get _currentUser() {
        return this.currentUser;
      }
      notifyAuthListeners() {
        var _a, _b;
        if (!this._isInitialized) {
          return;
        }
        this.idTokenSubscription.next(this.currentUser);
        const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
        if (this.lastNotifiedUid !== currentUid) {
          this.lastNotifiedUid = currentUid;
          this.authStateSubscription.next(this.currentUser);
        }
      }
      registerStateListener(subscription, nextOrObserver, error3, completed) {
        if (this._deleted) {
          return () => {
          };
        }
        const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
        const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        _assert(promise, this, "internal-error");
        promise.then(() => cb(this.currentUser));
        if (typeof nextOrObserver === "function") {
          return subscription.addObserver(nextOrObserver, error3, completed);
        } else {
          return subscription.addObserver(nextOrObserver);
        }
      }
      async directlySetCurrentUser(user) {
        if (this.currentUser && this.currentUser !== user) {
          this._currentUser._stopProactiveRefresh();
        }
        if (user && this.isProactiveRefreshEnabled) {
          user._startProactiveRefresh();
        }
        this.currentUser = user;
        if (user) {
          await this.assertedPersistence.setCurrentUser(user);
        } else {
          await this.assertedPersistence.removeCurrentUser();
        }
      }
      queue(action) {
        this.operations = this.operations.then(action, action);
        return this.operations;
      }
      get assertedPersistence() {
        _assert(this.persistenceManager, this, "internal-error");
        return this.persistenceManager;
      }
      _logFramework(framework) {
        if (!framework || this.frameworks.includes(framework)) {
          return;
        }
        this.frameworks.push(framework);
        this.frameworks.sort();
        this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
      }
      _getFrameworks() {
        return this.frameworks;
      }
      async _getAdditionalHeaders() {
        var _a;
        const headers = {
          ["X-Client-Version"]: this.clientVersion
        };
        if (this.app.options.appId) {
          headers["X-Firebase-gmpid"] = this.app.options.appId;
        }
        const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
          optional: true
        })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
        if (heartbeatsHeader) {
          headers["X-Firebase-Client"] = heartbeatsHeader;
        }
        return headers;
      }
    };
    Subscription = class {
      constructor(auth) {
        this.auth = auth;
        this.observer = null;
        this.addObserver = createSubscribe((observer) => this.observer = observer);
      }
      get next() {
        _assert(this.observer, this.auth, "internal-error");
        return this.observer.next.bind(this.observer);
      }
    };
    AuthCredential = class {
      constructor(providerId, signInMethod) {
        this.providerId = providerId;
        this.signInMethod = signInMethod;
      }
      toJSON() {
        return debugFail("not implemented");
      }
      _getIdTokenResponse(_auth) {
        return debugFail("not implemented");
      }
      _linkToIdToken(_auth, _idToken) {
        return debugFail("not implemented");
      }
      _getReauthenticationResolver(_auth) {
        return debugFail("not implemented");
      }
    };
    EmailAuthCredential = class extends AuthCredential {
      constructor(_email, _password, signInMethod, _tenantId = null) {
        super("password", signInMethod);
        this._email = _email;
        this._password = _password;
        this._tenantId = _tenantId;
      }
      static _fromEmailAndPassword(email, password) {
        return new EmailAuthCredential(email, password, "password");
      }
      static _fromEmailAndCode(email, oobCode, tenantId = null) {
        return new EmailAuthCredential(email, oobCode, "emailLink", tenantId);
      }
      toJSON() {
        return {
          email: this._email,
          password: this._password,
          signInMethod: this.signInMethod,
          tenantId: this._tenantId
        };
      }
      static fromJSON(json2) {
        const obj = typeof json2 === "string" ? JSON.parse(json2) : json2;
        if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
          if (obj.signInMethod === "password") {
            return this._fromEmailAndPassword(obj.email, obj.password);
          } else if (obj.signInMethod === "emailLink") {
            return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
          }
        }
        return null;
      }
      async _getIdTokenResponse(auth) {
        switch (this.signInMethod) {
          case "password":
            return signInWithPassword(auth, {
              returnSecureToken: true,
              email: this._email,
              password: this._password
            });
          case "emailLink":
            return signInWithEmailLink$1(auth, {
              email: this._email,
              oobCode: this._password
            });
          default:
            _fail(auth, "internal-error");
        }
      }
      async _linkToIdToken(auth, idToken) {
        switch (this.signInMethod) {
          case "password":
            return updateEmailPassword(auth, {
              idToken,
              returnSecureToken: true,
              email: this._email,
              password: this._password
            });
          case "emailLink":
            return signInWithEmailLinkForLinking(auth, {
              idToken,
              email: this._email,
              oobCode: this._password
            });
          default:
            _fail(auth, "internal-error");
        }
      }
      _getReauthenticationResolver(auth) {
        return this._getIdTokenResponse(auth);
      }
    };
    IDP_REQUEST_URI$1 = "http://localhost";
    OAuthCredential = class extends AuthCredential {
      constructor() {
        super(...arguments);
        this.pendingToken = null;
      }
      static _fromParams(params) {
        const cred = new OAuthCredential(params.providerId, params.signInMethod);
        if (params.idToken || params.accessToken) {
          if (params.idToken) {
            cred.idToken = params.idToken;
          }
          if (params.accessToken) {
            cred.accessToken = params.accessToken;
          }
          if (params.nonce && !params.pendingToken) {
            cred.nonce = params.nonce;
          }
          if (params.pendingToken) {
            cred.pendingToken = params.pendingToken;
          }
        } else if (params.oauthToken && params.oauthTokenSecret) {
          cred.accessToken = params.oauthToken;
          cred.secret = params.oauthTokenSecret;
        } else {
          _fail("argument-error");
        }
        return cred;
      }
      toJSON() {
        return {
          idToken: this.idToken,
          accessToken: this.accessToken,
          secret: this.secret,
          nonce: this.nonce,
          pendingToken: this.pendingToken,
          providerId: this.providerId,
          signInMethod: this.signInMethod
        };
      }
      static fromJSON(json2) {
        const obj = typeof json2 === "string" ? JSON.parse(json2) : json2;
        const { providerId, signInMethod } = obj, rest = __rest(obj, ["providerId", "signInMethod"]);
        if (!providerId || !signInMethod) {
          return null;
        }
        const cred = new OAuthCredential(providerId, signInMethod);
        cred.idToken = rest.idToken || void 0;
        cred.accessToken = rest.accessToken || void 0;
        cred.secret = rest.secret;
        cred.nonce = rest.nonce;
        cred.pendingToken = rest.pendingToken || null;
        return cred;
      }
      _getIdTokenResponse(auth) {
        const request = this.buildRequest();
        return signInWithIdp(auth, request);
      }
      _linkToIdToken(auth, idToken) {
        const request = this.buildRequest();
        request.idToken = idToken;
        return signInWithIdp(auth, request);
      }
      _getReauthenticationResolver(auth) {
        const request = this.buildRequest();
        request.autoCreate = false;
        return signInWithIdp(auth, request);
      }
      buildRequest() {
        const request = {
          requestUri: IDP_REQUEST_URI$1,
          returnSecureToken: true
        };
        if (this.pendingToken) {
          request.pendingToken = this.pendingToken;
        } else {
          const postBody = {};
          if (this.idToken) {
            postBody["id_token"] = this.idToken;
          }
          if (this.accessToken) {
            postBody["access_token"] = this.accessToken;
          }
          if (this.secret) {
            postBody["oauth_token_secret"] = this.secret;
          }
          postBody["providerId"] = this.providerId;
          if (this.nonce && !this.pendingToken) {
            postBody["nonce"] = this.nonce;
          }
          request.postBody = querystring(postBody);
        }
        return request;
      }
    };
    VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
      ["USER_NOT_FOUND"]: "user-not-found"
    };
    PhoneAuthCredential = class extends AuthCredential {
      constructor(params) {
        super("phone", "phone");
        this.params = params;
      }
      static _fromVerification(verificationId, verificationCode) {
        return new PhoneAuthCredential({ verificationId, verificationCode });
      }
      static _fromTokenResponse(phoneNumber, temporaryProof) {
        return new PhoneAuthCredential({ phoneNumber, temporaryProof });
      }
      _getIdTokenResponse(auth) {
        return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
      }
      _linkToIdToken(auth, idToken) {
        return linkWithPhoneNumber$1(auth, Object.assign({ idToken }, this._makeVerificationRequest()));
      }
      _getReauthenticationResolver(auth) {
        return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
      }
      _makeVerificationRequest() {
        const { temporaryProof, phoneNumber, verificationId, verificationCode } = this.params;
        if (temporaryProof && phoneNumber) {
          return { temporaryProof, phoneNumber };
        }
        return {
          sessionInfo: verificationId,
          code: verificationCode
        };
      }
      toJSON() {
        const obj = {
          providerId: this.providerId
        };
        if (this.params.phoneNumber) {
          obj.phoneNumber = this.params.phoneNumber;
        }
        if (this.params.temporaryProof) {
          obj.temporaryProof = this.params.temporaryProof;
        }
        if (this.params.verificationCode) {
          obj.verificationCode = this.params.verificationCode;
        }
        if (this.params.verificationId) {
          obj.verificationId = this.params.verificationId;
        }
        return obj;
      }
      static fromJSON(json2) {
        if (typeof json2 === "string") {
          json2 = JSON.parse(json2);
        }
        const { verificationId, verificationCode, phoneNumber, temporaryProof } = json2;
        if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
          return null;
        }
        return new PhoneAuthCredential({
          verificationId,
          verificationCode,
          phoneNumber,
          temporaryProof
        });
      }
    };
    ActionCodeURL = class {
      constructor(actionLink) {
        var _a, _b, _c, _d, _e, _f;
        const searchParams = querystringDecode(extractQuerystring(actionLink));
        const apiKey = (_a = searchParams["apiKey"]) !== null && _a !== void 0 ? _a : null;
        const code = (_b = searchParams["oobCode"]) !== null && _b !== void 0 ? _b : null;
        const operation = parseMode((_c = searchParams["mode"]) !== null && _c !== void 0 ? _c : null);
        _assert(apiKey && code && operation, "argument-error");
        this.apiKey = apiKey;
        this.operation = operation;
        this.code = code;
        this.continueUrl = (_d = searchParams["continueUrl"]) !== null && _d !== void 0 ? _d : null;
        this.languageCode = (_e = searchParams["languageCode"]) !== null && _e !== void 0 ? _e : null;
        this.tenantId = (_f = searchParams["tenantId"]) !== null && _f !== void 0 ? _f : null;
      }
      static parseLink(link) {
        const actionLink = parseDeepLink(link);
        try {
          return new ActionCodeURL(actionLink);
        } catch (_a) {
          return null;
        }
      }
    };
    EmailAuthProvider = class {
      constructor() {
        this.providerId = EmailAuthProvider.PROVIDER_ID;
      }
      static credential(email, password) {
        return EmailAuthCredential._fromEmailAndPassword(email, password);
      }
      static credentialWithLink(email, emailLink) {
        const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
        _assert(actionCodeUrl, "argument-error");
        return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
      }
    };
    EmailAuthProvider.PROVIDER_ID = "password";
    EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
    EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
    FederatedAuthProvider = class {
      constructor(providerId) {
        this.providerId = providerId;
        this.defaultLanguageCode = null;
        this.customParameters = {};
      }
      setDefaultLanguage(languageCode) {
        this.defaultLanguageCode = languageCode;
      }
      setCustomParameters(customOAuthParameters) {
        this.customParameters = customOAuthParameters;
        return this;
      }
      getCustomParameters() {
        return this.customParameters;
      }
    };
    BaseOAuthProvider = class extends FederatedAuthProvider {
      constructor() {
        super(...arguments);
        this.scopes = [];
      }
      addScope(scope) {
        if (!this.scopes.includes(scope)) {
          this.scopes.push(scope);
        }
        return this;
      }
      getScopes() {
        return [...this.scopes];
      }
    };
    FacebookAuthProvider = class extends BaseOAuthProvider {
      constructor() {
        super("facebook.com");
      }
      static credential(accessToken) {
        return OAuthCredential._fromParams({
          providerId: FacebookAuthProvider.PROVIDER_ID,
          signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
          accessToken
        });
      }
      static credentialFromResult(userCredential) {
        return FacebookAuthProvider.credentialFromTaggedObject(userCredential);
      }
      static credentialFromError(error3) {
        return FacebookAuthProvider.credentialFromTaggedObject(error3.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
          return null;
        }
        if (!tokenResponse.oauthAccessToken) {
          return null;
        }
        try {
          return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
        } catch (_a) {
          return null;
        }
      }
    };
    FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
    FacebookAuthProvider.PROVIDER_ID = "facebook.com";
    GoogleAuthProvider = class extends BaseOAuthProvider {
      constructor() {
        super("google.com");
        this.addScope("profile");
      }
      static credential(idToken, accessToken) {
        return OAuthCredential._fromParams({
          providerId: GoogleAuthProvider.PROVIDER_ID,
          signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
          idToken,
          accessToken
        });
      }
      static credentialFromResult(userCredential) {
        return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
      }
      static credentialFromError(error3) {
        return GoogleAuthProvider.credentialFromTaggedObject(error3.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse) {
          return null;
        }
        const { oauthIdToken, oauthAccessToken } = tokenResponse;
        if (!oauthIdToken && !oauthAccessToken) {
          return null;
        }
        try {
          return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
        } catch (_a) {
          return null;
        }
      }
    };
    GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
    GoogleAuthProvider.PROVIDER_ID = "google.com";
    GithubAuthProvider = class extends BaseOAuthProvider {
      constructor() {
        super("github.com");
      }
      static credential(accessToken) {
        return OAuthCredential._fromParams({
          providerId: GithubAuthProvider.PROVIDER_ID,
          signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
          accessToken
        });
      }
      static credentialFromResult(userCredential) {
        return GithubAuthProvider.credentialFromTaggedObject(userCredential);
      }
      static credentialFromError(error3) {
        return GithubAuthProvider.credentialFromTaggedObject(error3.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
          return null;
        }
        if (!tokenResponse.oauthAccessToken) {
          return null;
        }
        try {
          return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
        } catch (_a) {
          return null;
        }
      }
    };
    GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
    GithubAuthProvider.PROVIDER_ID = "github.com";
    TwitterAuthProvider = class extends BaseOAuthProvider {
      constructor() {
        super("twitter.com");
      }
      static credential(token, secret) {
        return OAuthCredential._fromParams({
          providerId: TwitterAuthProvider.PROVIDER_ID,
          signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
          oauthToken: token,
          oauthTokenSecret: secret
        });
      }
      static credentialFromResult(userCredential) {
        return TwitterAuthProvider.credentialFromTaggedObject(userCredential);
      }
      static credentialFromError(error3) {
        return TwitterAuthProvider.credentialFromTaggedObject(error3.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse) {
          return null;
        }
        const { oauthAccessToken, oauthTokenSecret } = tokenResponse;
        if (!oauthAccessToken || !oauthTokenSecret) {
          return null;
        }
        try {
          return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
        } catch (_a) {
          return null;
        }
      }
    };
    TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
    TwitterAuthProvider.PROVIDER_ID = "twitter.com";
    UserCredentialImpl = class {
      constructor(params) {
        this.user = params.user;
        this.providerId = params.providerId;
        this._tokenResponse = params._tokenResponse;
        this.operationType = params.operationType;
      }
      static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
        const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
        const providerId = providerIdForResponse(idTokenResponse);
        const userCred = new UserCredentialImpl({
          user,
          providerId,
          _tokenResponse: idTokenResponse,
          operationType
        });
        return userCred;
      }
      static async _forOperation(user, operationType, response) {
        await user._updateTokensIfNecessary(response, true);
        const providerId = providerIdForResponse(response);
        return new UserCredentialImpl({
          user,
          providerId,
          _tokenResponse: response,
          operationType
        });
      }
    };
    MultiFactorError = class extends FirebaseError {
      constructor(auth, error3, operationType, user) {
        var _a;
        super(error3.code, error3.message);
        this.operationType = operationType;
        this.user = user;
        Object.setPrototypeOf(this, MultiFactorError.prototype);
        this.customData = {
          appName: auth.name,
          tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : void 0,
          _serverResponse: error3.customData._serverResponse,
          operationType
        };
      }
      static _fromErrorAndOperation(auth, error3, operationType, user) {
        return new MultiFactorError(auth, error3, operationType, user);
      }
    };
    STORAGE_AVAILABLE_KEY = "__sak";
    BrowserPersistenceClass = class {
      constructor(storageRetriever, type) {
        this.storageRetriever = storageRetriever;
        this.type = type;
      }
      _isAvailable() {
        try {
          if (!this.storage) {
            return Promise.resolve(false);
          }
          this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
          this.storage.removeItem(STORAGE_AVAILABLE_KEY);
          return Promise.resolve(true);
        } catch (_a) {
          return Promise.resolve(false);
        }
      }
      _set(key2, value) {
        this.storage.setItem(key2, JSON.stringify(value));
        return Promise.resolve();
      }
      _get(key2) {
        const json2 = this.storage.getItem(key2);
        return Promise.resolve(json2 ? JSON.parse(json2) : null);
      }
      _remove(key2) {
        this.storage.removeItem(key2);
        return Promise.resolve();
      }
      get storage() {
        return this.storageRetriever();
      }
    };
    _POLLING_INTERVAL_MS$1 = 1e3;
    IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
    BrowserLocalPersistence = class extends BrowserPersistenceClass {
      constructor() {
        super(() => window.localStorage, "LOCAL");
        this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
        this.listeners = {};
        this.localCache = {};
        this.pollTimer = null;
        this.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe();
        this.fallbackToPolling = _isMobileBrowser();
        this._shouldAllowMigration = true;
      }
      forAllChangedKeys(cb) {
        for (const key2 of Object.keys(this.listeners)) {
          const newValue = this.storage.getItem(key2);
          const oldValue = this.localCache[key2];
          if (newValue !== oldValue) {
            cb(key2, oldValue, newValue);
          }
        }
      }
      onStorageEvent(event, poll = false) {
        if (!event.key) {
          this.forAllChangedKeys((key3, _oldValue, newValue) => {
            this.notifyListeners(key3, newValue);
          });
          return;
        }
        const key2 = event.key;
        if (poll) {
          this.detachListener();
        } else {
          this.stopPolling();
        }
        if (this.safariLocalStorageNotSynced) {
          const storedValue2 = this.storage.getItem(key2);
          if (event.newValue !== storedValue2) {
            if (event.newValue !== null) {
              this.storage.setItem(key2, event.newValue);
            } else {
              this.storage.removeItem(key2);
            }
          } else if (this.localCache[key2] === event.newValue && !poll) {
            return;
          }
        }
        const triggerListeners = () => {
          const storedValue2 = this.storage.getItem(key2);
          if (!poll && this.localCache[key2] === storedValue2) {
            return;
          }
          this.notifyListeners(key2, storedValue2);
        };
        const storedValue = this.storage.getItem(key2);
        if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
          setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
        } else {
          triggerListeners();
        }
      }
      notifyListeners(key2, value) {
        this.localCache[key2] = value;
        const listeners = this.listeners[key2];
        if (listeners) {
          for (const listener of Array.from(listeners)) {
            listener(value ? JSON.parse(value) : value);
          }
        }
      }
      startPolling() {
        this.stopPolling();
        this.pollTimer = setInterval(() => {
          this.forAllChangedKeys((key2, oldValue, newValue) => {
            this.onStorageEvent(
              new StorageEvent("storage", {
                key: key2,
                oldValue,
                newValue
              }),
              true
            );
          });
        }, _POLLING_INTERVAL_MS$1);
      }
      stopPolling() {
        if (this.pollTimer) {
          clearInterval(this.pollTimer);
          this.pollTimer = null;
        }
      }
      attachListener() {
        window.addEventListener("storage", this.boundEventHandler);
      }
      detachListener() {
        window.removeEventListener("storage", this.boundEventHandler);
      }
      _addListener(key2, listener) {
        if (Object.keys(this.listeners).length === 0) {
          if (this.fallbackToPolling) {
            this.startPolling();
          } else {
            this.attachListener();
          }
        }
        if (!this.listeners[key2]) {
          this.listeners[key2] = /* @__PURE__ */ new Set();
          this.localCache[key2] = this.storage.getItem(key2);
        }
        this.listeners[key2].add(listener);
      }
      _removeListener(key2, listener) {
        if (this.listeners[key2]) {
          this.listeners[key2].delete(listener);
          if (this.listeners[key2].size === 0) {
            delete this.listeners[key2];
          }
        }
        if (Object.keys(this.listeners).length === 0) {
          this.detachListener();
          this.stopPolling();
        }
      }
      async _set(key2, value) {
        await super._set(key2, value);
        this.localCache[key2] = JSON.stringify(value);
      }
      async _get(key2) {
        const value = await super._get(key2);
        this.localCache[key2] = JSON.stringify(value);
        return value;
      }
      async _remove(key2) {
        await super._remove(key2);
        delete this.localCache[key2];
      }
    };
    BrowserLocalPersistence.type = "LOCAL";
    browserLocalPersistence = BrowserLocalPersistence;
    BrowserSessionPersistence = class extends BrowserPersistenceClass {
      constructor() {
        super(() => window.sessionStorage, "SESSION");
      }
      _addListener(_key, _listener) {
        return;
      }
      _removeListener(_key, _listener) {
        return;
      }
    };
    BrowserSessionPersistence.type = "SESSION";
    browserSessionPersistence = BrowserSessionPersistence;
    Receiver = class {
      constructor(eventTarget) {
        this.eventTarget = eventTarget;
        this.handlersMap = {};
        this.boundEventHandler = this.handleEvent.bind(this);
      }
      static _getInstance(eventTarget) {
        const existingInstance = this.receivers.find((receiver) => receiver.isListeningto(eventTarget));
        if (existingInstance) {
          return existingInstance;
        }
        const newInstance = new Receiver(eventTarget);
        this.receivers.push(newInstance);
        return newInstance;
      }
      isListeningto(eventTarget) {
        return this.eventTarget === eventTarget;
      }
      async handleEvent(event) {
        const messageEvent = event;
        const { eventId, eventType, data } = messageEvent.data;
        const handlers = this.handlersMap[eventType];
        if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
          return;
        }
        messageEvent.ports[0].postMessage({
          status: "ack",
          eventId,
          eventType
        });
        const promises = Array.from(handlers).map(async (handler2) => handler2(messageEvent.origin, data));
        const response = await _allSettled(promises);
        messageEvent.ports[0].postMessage({
          status: "done",
          eventId,
          eventType,
          response
        });
      }
      _subscribe(eventType, eventHandler) {
        if (Object.keys(this.handlersMap).length === 0) {
          this.eventTarget.addEventListener("message", this.boundEventHandler);
        }
        if (!this.handlersMap[eventType]) {
          this.handlersMap[eventType] = /* @__PURE__ */ new Set();
        }
        this.handlersMap[eventType].add(eventHandler);
      }
      _unsubscribe(eventType, eventHandler) {
        if (this.handlersMap[eventType] && eventHandler) {
          this.handlersMap[eventType].delete(eventHandler);
        }
        if (!eventHandler || this.handlersMap[eventType].size === 0) {
          delete this.handlersMap[eventType];
        }
        if (Object.keys(this.handlersMap).length === 0) {
          this.eventTarget.removeEventListener("message", this.boundEventHandler);
        }
      }
    };
    Receiver.receivers = [];
    Sender = class {
      constructor(target) {
        this.target = target;
        this.handlers = /* @__PURE__ */ new Set();
      }
      removeMessageHandler(handler2) {
        if (handler2.messageChannel) {
          handler2.messageChannel.port1.removeEventListener("message", handler2.onMessage);
          handler2.messageChannel.port1.close();
        }
        this.handlers.delete(handler2);
      }
      async _send(eventType, data, timeout = 50) {
        const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
        if (!messageChannel) {
          throw new Error("connection_unavailable");
        }
        let completionTimer;
        let handler2;
        return new Promise((resolve, reject) => {
          const eventId = _generateEventId("", 20);
          messageChannel.port1.start();
          const ackTimer = setTimeout(() => {
            reject(new Error("unsupported_event"));
          }, timeout);
          handler2 = {
            messageChannel,
            onMessage(event) {
              const messageEvent = event;
              if (messageEvent.data.eventId !== eventId) {
                return;
              }
              switch (messageEvent.data.status) {
                case "ack":
                  clearTimeout(ackTimer);
                  completionTimer = setTimeout(() => {
                    reject(new Error("timeout"));
                  }, 3e3);
                  break;
                case "done":
                  clearTimeout(completionTimer);
                  resolve(messageEvent.data.response);
                  break;
                default:
                  clearTimeout(ackTimer);
                  clearTimeout(completionTimer);
                  reject(new Error("invalid_response"));
                  break;
              }
            }
          };
          this.handlers.add(handler2);
          messageChannel.port1.addEventListener("message", handler2.onMessage);
          this.target.postMessage({
            eventType,
            eventId,
            data
          }, [messageChannel.port2]);
        }).finally(() => {
          if (handler2) {
            this.removeMessageHandler(handler2);
          }
        });
      }
    };
    DB_NAME2 = "firebaseLocalStorageDb";
    DB_VERSION2 = 1;
    DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
    DB_DATA_KEYPATH = "fbase_key";
    DBPromise = class {
      constructor(request) {
        this.request = request;
      }
      toPromise() {
        return new Promise((resolve, reject) => {
          this.request.addEventListener("success", () => {
            resolve(this.request.result);
          });
          this.request.addEventListener("error", () => {
            reject(this.request.error);
          });
        });
      }
    };
    _POLLING_INTERVAL_MS = 800;
    _TRANSACTION_RETRY_COUNT = 3;
    IndexedDBLocalPersistence = class {
      constructor() {
        this.type = "LOCAL";
        this._shouldAllowMigration = true;
        this.listeners = {};
        this.localCache = {};
        this.pollTimer = null;
        this.pendingWrites = 0;
        this.receiver = null;
        this.sender = null;
        this.serviceWorkerReceiverAvailable = false;
        this.activeServiceWorker = null;
        this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
        }, () => {
        });
      }
      async _openDb() {
        if (this.db) {
          return this.db;
        }
        this.db = await _openDatabase();
        return this.db;
      }
      async _withRetries(op) {
        let numAttempts = 0;
        while (true) {
          try {
            const db2 = await this._openDb();
            return await op(db2);
          } catch (e) {
            if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
              throw e;
            }
            if (this.db) {
              this.db.close();
              this.db = void 0;
            }
          }
        }
      }
      async initializeServiceWorkerMessaging() {
        return _isWorker() ? this.initializeReceiver() : this.initializeSender();
      }
      async initializeReceiver() {
        this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
        this.receiver._subscribe("keyChanged", async (_origin, data) => {
          const keys = await this._poll();
          return {
            keyProcessed: keys.includes(data.key)
          };
        });
        this.receiver._subscribe("ping", async (_origin, _data) => {
          return ["keyChanged"];
        });
      }
      async initializeSender() {
        var _a, _b;
        this.activeServiceWorker = await _getActiveServiceWorker();
        if (!this.activeServiceWorker) {
          return;
        }
        this.sender = new Sender(this.activeServiceWorker);
        const results = await this.sender._send("ping", {}, 800);
        if (!results) {
          return;
        }
        if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"))) {
          this.serviceWorkerReceiverAvailable = true;
        }
      }
      async notifyServiceWorker(key2) {
        if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
          return;
        }
        try {
          await this.sender._send(
            "keyChanged",
            { key: key2 },
            this.serviceWorkerReceiverAvailable ? 800 : 50
          );
        } catch (_a) {
        }
      }
      async _isAvailable() {
        try {
          if (!indexedDB) {
            return false;
          }
          const db2 = await _openDatabase();
          await _putObject(db2, STORAGE_AVAILABLE_KEY, "1");
          await _deleteObject(db2, STORAGE_AVAILABLE_KEY);
          return true;
        } catch (_a) {
        }
        return false;
      }
      async _withPendingWrite(write) {
        this.pendingWrites++;
        try {
          await write();
        } finally {
          this.pendingWrites--;
        }
      }
      async _set(key2, value) {
        return this._withPendingWrite(async () => {
          await this._withRetries((db2) => _putObject(db2, key2, value));
          this.localCache[key2] = value;
          return this.notifyServiceWorker(key2);
        });
      }
      async _get(key2) {
        const obj = await this._withRetries((db2) => getObject(db2, key2));
        this.localCache[key2] = obj;
        return obj;
      }
      async _remove(key2) {
        return this._withPendingWrite(async () => {
          await this._withRetries((db2) => _deleteObject(db2, key2));
          delete this.localCache[key2];
          return this.notifyServiceWorker(key2);
        });
      }
      async _poll() {
        const result = await this._withRetries((db2) => {
          const getAllRequest = getObjectStore(db2, false).getAll();
          return new DBPromise(getAllRequest).toPromise();
        });
        if (!result) {
          return [];
        }
        if (this.pendingWrites !== 0) {
          return [];
        }
        const keys = [];
        const keysInResult = /* @__PURE__ */ new Set();
        for (const { fbase_key: key2, value } of result) {
          keysInResult.add(key2);
          if (JSON.stringify(this.localCache[key2]) !== JSON.stringify(value)) {
            this.notifyListeners(key2, value);
            keys.push(key2);
          }
        }
        for (const localKey of Object.keys(this.localCache)) {
          if (this.localCache[localKey] && !keysInResult.has(localKey)) {
            this.notifyListeners(localKey, null);
            keys.push(localKey);
          }
        }
        return keys;
      }
      notifyListeners(key2, newValue) {
        this.localCache[key2] = newValue;
        const listeners = this.listeners[key2];
        if (listeners) {
          for (const listener of Array.from(listeners)) {
            listener(newValue);
          }
        }
      }
      startPolling() {
        this.stopPolling();
        this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
      }
      stopPolling() {
        if (this.pollTimer) {
          clearInterval(this.pollTimer);
          this.pollTimer = null;
        }
      }
      _addListener(key2, listener) {
        if (Object.keys(this.listeners).length === 0) {
          this.startPolling();
        }
        if (!this.listeners[key2]) {
          this.listeners[key2] = /* @__PURE__ */ new Set();
          void this._get(key2);
        }
        this.listeners[key2].add(listener);
      }
      _removeListener(key2, listener) {
        if (this.listeners[key2]) {
          this.listeners[key2].delete(listener);
          if (this.listeners[key2].size === 0) {
            delete this.listeners[key2];
          }
        }
        if (Object.keys(this.listeners).length === 0) {
          this.stopPolling();
        }
      }
    };
    IndexedDBLocalPersistence.type = "LOCAL";
    indexedDBLocalPersistence = IndexedDBLocalPersistence;
    _JSLOAD_CALLBACK = _generateCallbackName("rcb");
    NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
    RECAPTCHA_VERIFIER_TYPE = "recaptcha";
    PhoneAuthProvider = class {
      constructor(auth) {
        this.providerId = PhoneAuthProvider.PROVIDER_ID;
        this.auth = _castAuth(auth);
      }
      verifyPhoneNumber(phoneOptions, applicationVerifier) {
        return _verifyPhoneNumber(this.auth, phoneOptions, getModularInstance(applicationVerifier));
      }
      static credential(verificationId, verificationCode) {
        return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
      }
      static credentialFromResult(userCredential) {
        const credential = userCredential;
        return PhoneAuthProvider.credentialFromTaggedObject(credential);
      }
      static credentialFromError(error3) {
        return PhoneAuthProvider.credentialFromTaggedObject(error3.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse) {
          return null;
        }
        const { phoneNumber, temporaryProof } = tokenResponse;
        if (phoneNumber && temporaryProof) {
          return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
        }
        return null;
      }
    };
    PhoneAuthProvider.PROVIDER_ID = "phone";
    PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
    IdpCredential = class extends AuthCredential {
      constructor(params) {
        super("custom", "custom");
        this.params = params;
      }
      _getIdTokenResponse(auth) {
        return signInWithIdp(auth, this._buildIdpRequest());
      }
      _linkToIdToken(auth, idToken) {
        return signInWithIdp(auth, this._buildIdpRequest(idToken));
      }
      _getReauthenticationResolver(auth) {
        return signInWithIdp(auth, this._buildIdpRequest());
      }
      _buildIdpRequest(idToken) {
        const request = {
          requestUri: this.params.requestUri,
          sessionId: this.params.sessionId,
          postBody: this.params.postBody,
          tenantId: this.params.tenantId,
          pendingToken: this.params.pendingToken,
          returnSecureToken: true,
          returnIdpCredential: true
        };
        if (idToken) {
          request.idToken = idToken;
        }
        return request;
      }
    };
    AbstractPopupRedirectOperation = class {
      constructor(auth, filter, resolver, user, bypassAuthState = false) {
        this.auth = auth;
        this.resolver = resolver;
        this.user = user;
        this.bypassAuthState = bypassAuthState;
        this.pendingPromise = null;
        this.eventManager = null;
        this.filter = Array.isArray(filter) ? filter : [filter];
      }
      execute() {
        return new Promise(async (resolve, reject) => {
          this.pendingPromise = { resolve, reject };
          try {
            this.eventManager = await this.resolver._initialize(this.auth);
            await this.onExecution();
            this.eventManager.registerConsumer(this);
          } catch (e) {
            this.reject(e);
          }
        });
      }
      async onAuthEvent(event) {
        const { urlResponse, sessionId, postBody, tenantId, error: error3, type } = event;
        if (error3) {
          this.reject(error3);
          return;
        }
        const params = {
          auth: this.auth,
          requestUri: urlResponse,
          sessionId,
          tenantId: tenantId || void 0,
          postBody: postBody || void 0,
          user: this.user,
          bypassAuthState: this.bypassAuthState
        };
        try {
          this.resolve(await this.getIdpTask(type)(params));
        } catch (e) {
          this.reject(e);
        }
      }
      onError(error3) {
        this.reject(error3);
      }
      getIdpTask(type) {
        switch (type) {
          case "signInViaPopup":
          case "signInViaRedirect":
            return _signIn;
          case "linkViaPopup":
          case "linkViaRedirect":
            return _link;
          case "reauthViaPopup":
          case "reauthViaRedirect":
            return _reauth;
          default:
            _fail(this.auth, "internal-error");
        }
      }
      resolve(cred) {
        debugAssert(this.pendingPromise, "Pending promise was never set");
        this.pendingPromise.resolve(cred);
        this.unregisterAndCleanUp();
      }
      reject(error3) {
        debugAssert(this.pendingPromise, "Pending promise was never set");
        this.pendingPromise.reject(error3);
        this.unregisterAndCleanUp();
      }
      unregisterAndCleanUp() {
        if (this.eventManager) {
          this.eventManager.unregisterConsumer(this);
        }
        this.pendingPromise = null;
        this.cleanUp();
      }
    };
    _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
    PopupOperation = class extends AbstractPopupRedirectOperation {
      constructor(auth, filter, provider, resolver, user) {
        super(auth, filter, resolver, user);
        this.provider = provider;
        this.authWindow = null;
        this.pollId = null;
        if (PopupOperation.currentPopupAction) {
          PopupOperation.currentPopupAction.cancel();
        }
        PopupOperation.currentPopupAction = this;
      }
      async executeNotNull() {
        const result = await this.execute();
        _assert(result, this.auth, "internal-error");
        return result;
      }
      async onExecution() {
        debugAssert(this.filter.length === 1, "Popup operations only handle one event");
        const eventId = _generateEventId();
        this.authWindow = await this.resolver._openPopup(
          this.auth,
          this.provider,
          this.filter[0],
          eventId
        );
        this.authWindow.associatedEvent = eventId;
        this.resolver._originValidation(this.auth).catch((e) => {
          this.reject(e);
        });
        this.resolver._isIframeWebStorageSupported(this.auth, (isSupported) => {
          if (!isSupported) {
            this.reject(_createError(this.auth, "web-storage-unsupported"));
          }
        });
        this.pollUserCancellation();
      }
      get eventId() {
        var _a;
        return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
      }
      cancel() {
        this.reject(_createError(this.auth, "cancelled-popup-request"));
      }
      cleanUp() {
        if (this.authWindow) {
          this.authWindow.close();
        }
        if (this.pollId) {
          window.clearTimeout(this.pollId);
        }
        this.authWindow = null;
        this.pollId = null;
        PopupOperation.currentPopupAction = null;
      }
      pollUserCancellation() {
        const poll = () => {
          var _a, _b;
          if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
            this.pollId = window.setTimeout(() => {
              this.pollId = null;
              this.reject(_createError(this.auth, "popup-closed-by-user"));
            }, 2e3);
            return;
          }
          this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
        };
        poll();
      }
    };
    PopupOperation.currentPopupAction = null;
    PENDING_REDIRECT_KEY = "pendingRedirect";
    redirectOutcomeMap = /* @__PURE__ */ new Map();
    RedirectAction = class extends AbstractPopupRedirectOperation {
      constructor(auth, resolver, bypassAuthState = false) {
        super(auth, [
          "signInViaRedirect",
          "linkViaRedirect",
          "reauthViaRedirect",
          "unknown"
        ], resolver, void 0, bypassAuthState);
        this.eventId = null;
      }
      async execute() {
        let readyOutcome = redirectOutcomeMap.get(this.auth._key());
        if (!readyOutcome) {
          try {
            const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
            const result = hasPendingRedirect ? await super.execute() : null;
            readyOutcome = () => Promise.resolve(result);
          } catch (e) {
            readyOutcome = () => Promise.reject(e);
          }
          redirectOutcomeMap.set(this.auth._key(), readyOutcome);
        }
        if (!this.bypassAuthState) {
          redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null));
        }
        return readyOutcome();
      }
      async onAuthEvent(event) {
        if (event.type === "signInViaRedirect") {
          return super.onAuthEvent(event);
        } else if (event.type === "unknown") {
          this.resolve(null);
          return;
        }
        if (event.eventId) {
          const user = await this.auth._redirectUserForId(event.eventId);
          if (user) {
            this.user = user;
            return super.onAuthEvent(event);
          } else {
            this.resolve(null);
          }
        }
      }
      async onExecution() {
      }
      cleanUp() {
      }
    };
    EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
    AuthEventManager = class {
      constructor(auth) {
        this.auth = auth;
        this.cachedEventUids = /* @__PURE__ */ new Set();
        this.consumers = /* @__PURE__ */ new Set();
        this.queuedRedirectEvent = null;
        this.hasHandledPotentialRedirect = false;
        this.lastProcessedEventTime = Date.now();
      }
      registerConsumer(authEventConsumer) {
        this.consumers.add(authEventConsumer);
        if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
          this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
          this.saveEventToCache(this.queuedRedirectEvent);
          this.queuedRedirectEvent = null;
        }
      }
      unregisterConsumer(authEventConsumer) {
        this.consumers.delete(authEventConsumer);
      }
      onEvent(event) {
        if (this.hasEventBeenHandled(event)) {
          return false;
        }
        let handled = false;
        this.consumers.forEach((consumer) => {
          if (this.isEventForConsumer(event, consumer)) {
            handled = true;
            this.sendToConsumer(event, consumer);
            this.saveEventToCache(event);
          }
        });
        if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
          return handled;
        }
        this.hasHandledPotentialRedirect = true;
        if (!handled) {
          this.queuedRedirectEvent = event;
          handled = true;
        }
        return handled;
      }
      sendToConsumer(event, consumer) {
        var _a;
        if (event.error && !isNullRedirectEvent(event)) {
          const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error";
          consumer.onError(_createError(this.auth, code));
        } else {
          consumer.onAuthEvent(event);
        }
      }
      isEventForConsumer(event, consumer) {
        const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
        return consumer.filter.includes(event.type) && eventIdMatches;
      }
      hasEventBeenHandled(event) {
        if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
          this.cachedEventUids.clear();
        }
        return this.cachedEventUids.has(eventUid(event));
      }
      saveEventToCache(event) {
        this.cachedEventUids.add(eventUid(event));
        this.lastProcessedEventTime = Date.now();
      }
    };
    IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    HTTP_REGEX = /^https?/;
    NETWORK_TIMEOUT = new Delay(3e4, 6e4);
    cachedGApiLoader = null;
    PING_TIMEOUT = new Delay(5e3, 15e3);
    IFRAME_PATH = "__/auth/iframe";
    EMULATED_IFRAME_PATH = "emulator/auth/iframe";
    IFRAME_ATTRIBUTES = {
      style: {
        position: "absolute",
        top: "-100px",
        width: "1px",
        height: "1px"
      },
      "aria-hidden": "true",
      tabindex: "-1"
    };
    EID_FROM_APIHOST = /* @__PURE__ */ new Map([
      ["identitytoolkit.googleapis.com", "p"],
      ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
      ["test-identitytoolkit.sandbox.googleapis.com", "t"]
    ]);
    BASE_POPUP_OPTIONS = {
      location: "yes",
      resizable: "yes",
      statusbar: "yes",
      toolbar: "no"
    };
    DEFAULT_WIDTH = 500;
    DEFAULT_HEIGHT = 600;
    TARGET_BLANK = "_blank";
    FIREFOX_EMPTY_URL = "http://localhost";
    AuthPopup = class {
      constructor(window2) {
        this.window = window2;
        this.associatedEvent = null;
      }
      close() {
        if (this.window) {
          try {
            this.window.close();
          } catch (e) {
          }
        }
      }
    };
    WIDGET_PATH = "__/auth/handler";
    EMULATOR_WIDGET_PATH = "emulator/auth/handler";
    WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
    BrowserPopupRedirectResolver = class {
      constructor() {
        this.eventManagers = {};
        this.iframes = {};
        this.originValidationPromises = {};
        this._redirectPersistence = browserSessionPersistence;
        this._completeRedirectFn = _getRedirectResult;
        this._overrideRedirectResult = _overrideRedirectResult;
      }
      async _openPopup(auth, provider, authType, eventId) {
        var _a;
        debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
        const url = _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
        return _open(auth, url, _generateEventId());
      }
      async _openRedirect(auth, provider, authType, eventId) {
        await this._originValidation(auth);
        _setWindowLocation(_getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId));
        return new Promise(() => {
        });
      }
      _initialize(auth) {
        const key2 = auth._key();
        if (this.eventManagers[key2]) {
          const { manager, promise: promise2 } = this.eventManagers[key2];
          if (manager) {
            return Promise.resolve(manager);
          } else {
            debugAssert(promise2, "If manager is not set, promise should be");
            return promise2;
          }
        }
        const promise = this.initAndGetManager(auth);
        this.eventManagers[key2] = { promise };
        promise.catch(() => {
          delete this.eventManagers[key2];
        });
        return promise;
      }
      async initAndGetManager(auth) {
        const iframe = await _openIframe(auth);
        const manager = new AuthEventManager(auth);
        iframe.register("authEvent", (iframeEvent) => {
          _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event");
          const handled = manager.onEvent(iframeEvent.authEvent);
          return { status: handled ? "ACK" : "ERROR" };
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
        this.eventManagers[auth._key()] = { manager };
        this.iframes[auth._key()] = iframe;
        return manager;
      }
      _isIframeWebStorageSupported(auth, cb) {
        const iframe = this.iframes[auth._key()];
        iframe.send(WEB_STORAGE_SUPPORT_KEY, { type: WEB_STORAGE_SUPPORT_KEY }, (result) => {
          var _a;
          const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
          if (isSupported !== void 0) {
            cb(!!isSupported);
          }
          _fail(auth, "internal-error");
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
      }
      _originValidation(auth) {
        const key2 = auth._key();
        if (!this.originValidationPromises[key2]) {
          this.originValidationPromises[key2] = _validateOrigin(auth);
        }
        return this.originValidationPromises[key2];
      }
      get _shouldInitProactively() {
        return _isMobileBrowser() || _isSafari() || _isIOS();
      }
    };
    browserPopupRedirectResolver = BrowserPopupRedirectResolver;
    MultiFactorAssertionImpl = class {
      constructor(factorId) {
        this.factorId = factorId;
      }
      _process(auth, session, displayName) {
        switch (session.type) {
          case "enroll":
            return this._finalizeEnroll(auth, session.credential, displayName);
          case "signin":
            return this._finalizeSignIn(auth, session.credential);
          default:
            return debugFail("unexpected MultiFactorSessionType");
        }
      }
    };
    PhoneMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
      constructor(credential) {
        super("phone");
        this.credential = credential;
      }
      static _fromCredential(credential) {
        return new PhoneMultiFactorAssertionImpl(credential);
      }
      _finalizeEnroll(auth, idToken, displayName) {
        return finalizeEnrollPhoneMfa(auth, {
          idToken,
          displayName,
          phoneVerificationInfo: this.credential._makeVerificationRequest()
        });
      }
      _finalizeSignIn(auth, mfaPendingCredential) {
        return finalizeSignInPhoneMfa(auth, {
          mfaPendingCredential,
          phoneVerificationInfo: this.credential._makeVerificationRequest()
        });
      }
    };
    PhoneMultiFactorGenerator = class {
      constructor() {
      }
      static assertion(credential) {
        return PhoneMultiFactorAssertionImpl._fromCredential(credential);
      }
    };
    PhoneMultiFactorGenerator.FACTOR_ID = "phone";
    name5 = "@firebase/auth";
    version5 = "0.20.7";
    AuthInterop = class {
      constructor(auth) {
        this.auth = auth;
        this.internalListeners = /* @__PURE__ */ new Map();
      }
      getUid() {
        var _a;
        this.assertAuthConfigured();
        return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
      }
      async getToken(forceRefresh) {
        this.assertAuthConfigured();
        await this.auth._initializationPromise;
        if (!this.auth.currentUser) {
          return null;
        }
        const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
        return { accessToken };
      }
      addAuthTokenListener(listener) {
        this.assertAuthConfigured();
        if (this.internalListeners.has(listener)) {
          return;
        }
        const unsubscribe = this.auth.onIdTokenChanged((user) => {
          var _a;
          listener(((_a = user) === null || _a === void 0 ? void 0 : _a.stsTokenManager.accessToken) || null);
        });
        this.internalListeners.set(listener, unsubscribe);
        this.updateProactiveRefresh();
      }
      removeAuthTokenListener(listener) {
        this.assertAuthConfigured();
        const unsubscribe = this.internalListeners.get(listener);
        if (!unsubscribe) {
          return;
        }
        this.internalListeners.delete(listener);
        unsubscribe();
        this.updateProactiveRefresh();
      }
      assertAuthConfigured() {
        _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
      }
      updateProactiveRefresh() {
        if (this.internalListeners.size > 0) {
          this.auth._startProactiveRefresh();
        } else {
          this.auth._stopProactiveRefresh();
        }
      }
    };
    registerAuth("Browser");
  }
});

// node_modules/@firebase/auth/dist/esm2017/index.js
var init_esm2017 = __esm({
  "node_modules/@firebase/auth/dist/esm2017/index.js"() {
    init_index_4dc22a28();
    init_index_esm2017();
    init_index_esm20174();
    init_modules();
    init_index_esm20173();
    init_index_esm20172();
  }
});

// node_modules/firebase/auth/dist/index.esm.js
var init_index_esm4 = __esm({
  "node_modules/firebase/auth/dist/index.esm.js"() {
    init_esm2017();
  }
});

// .svelte-kit/output/server/chunks/firebase.js
var firebaseConfig, app, db;
var init_firebase = __esm({
  ".svelte-kit/output/server/chunks/firebase.js"() {
    init_index_esm2();
    init_index_esm();
    init_index_esm3();
    init_index_esm4();
    firebaseConfig = {
      apiKey: "AIzaSyDTYaF-wCPkWo0aStWuMwaw5yAWBQPAdmE",
      authDomain: "sveltehrambabynino.firebaseapp.com",
      databaseURL: "https://sveltehrambabynino-default-rtdb.firebaseio.com",
      projectId: "sveltehrambabynino",
      storageBucket: "sveltehrambabynino.appspot.com",
      messagingSenderId: "762814125883",
      appId: "1:762814125883:web:59c85e90c358d62c66891e",
      measurementId: "G-HSLZ53GCM0"
    };
    app = initializeApp(firebaseConfig);
    getAuth(app);
    db = getDatabase(app);
    getStorage(app);
  }
});

// .svelte-kit/output/server/chunks/writableData.js
var FildTime, FildDate, Month, theme, adminPostsFilters, scheduleMonth, showedPostsStep, mapShowedPostsLength;
var init_writableData = __esm({
  ".svelte-kit/output/server/chunks/writableData.js"() {
    init_Tag();
    init_index2();
    init_index_esm();
    init_firebase();
    FildTime = class {
      constructor(event = "", time = "00:00", prayer = new Array()) {
        this.event = event;
        this.time = time;
        this.prayer = prayer;
      }
    };
    FildDate = class {
      _dayOfWeek(day = 1) {
        switch (day) {
          case 0:
            return "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435";
          case 1:
            return "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A";
          case 2:
            return "\u0432\u0442\u043E\u0440\u043D\u0438\u043A";
          case 3:
            return "\u0441\u0440\u0435\u0434\u0430";
          case 4:
            return "\u0447\u0435\u0442\u0432\u0435\u0440\u0433";
          case 5:
            return "\u043F\u044F\u0442\u043D\u0438\u0446\u0430";
          case 6:
            return "\u0441\u0443\u0431\u0431\u043E\u0442\u0430";
          default:
            return "";
        }
      }
      constructor(date = new Date(), fildsTime = new Array(new FildTime())) {
        this.date = date.toDateString();
        this.fildsTime = fildsTime;
      }
    };
    Month = class {
      constructor(month = 1, year = new Date(Date.now()).getFullYear()) {
        __publicField(this, "setFildsDayAll", () => {
          for (let i = 1; i <= this.daysInMonth; i++) {
            this.fildsDayAll.push(new FildDate(new Date(this.year, this.month - 1, i)));
          }
        });
        __publicField(this, "updateFildsDayAll", () => {
          var _a;
          (_a = this.fildsDayNotEmpty) == null ? void 0 : _a.forEach((fDay) => {
            this.fildsDayAll[this.fildsDayAll.indexOf(this.fildsDayAll.filter((f) => f.date == fDay.date)[0])] = fDay;
          });
        });
        this.month = month;
        this.year = year;
        this.daysInMonth = new Date(year, month, 0).getDate();
        this.monthNameS = () => {
          switch (this.month) {
            case 1:
              return "\u044F\u043D\u0432\u0430\u0440\u044F";
            case 2:
              return "\u0444\u0435\u0432\u0440\u0430\u043B\u044F";
            case 3:
              return "\u043C\u0430\u0440\u0442\u0430";
            case 4:
              return "\u0430\u043F\u0440\u0435\u043B\u044F";
            case 5:
              return "\u043C\u0430\u044F";
            case 6:
              return "\u0438\u044E\u043D\u044F";
            case 7:
              return "\u0438\u044E\u043B\u044F";
            case 8:
              return "\u0430\u0432\u0433\u0443\u0441\u0442\u0430";
            case 9:
              return "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F";
            case 10:
              return "\u043E\u043A\u0442\u044F\u0431\u0440\u044F";
            case 11:
              return "\u043D\u043E\u044F\u0431\u0440\u044F";
            case 12:
              return "\u0434\u0435\u043A\u0430\u0431\u0440\u044F";
          }
        };
        this.monthName = () => {
          switch (this.month) {
            case 1:
              return "\u044F\u043D\u0432\u0430\u0440\u044C";
            case 2:
              return "\u0444\u0435\u0432\u0440\u0430\u043B\u044C";
            case 3:
              return "\u043C\u0430\u0440\u0442";
            case 4:
              return "\u0430\u043F\u0440\u0435\u043B\u044C";
            case 5:
              return "\u043C\u0430\u0439";
            case 6:
              return "\u0438\u044E\u043D\u044C";
            case 7:
              return "\u0438\u044E\u043B\u044C";
            case 8:
              return "\u0430\u0432\u0433\u0443\u0441\u0442";
            case 9:
              return "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C";
            case 10:
              return "\u043E\u043A\u0442\u044F\u0431\u0440\u044C";
            case 11:
              return "\u043D\u043E\u044F\u0431\u0440\u044C";
            case 12:
              return "\u0434\u0435\u043A\u0430\u0431\u0440\u044C";
          }
        };
        this.fildsDayAll = new Array();
        this.setFildsDayAll();
        this.fildsDayNotEmpty = new Array();
        this.updateFildsDayAll();
      }
    };
    theme = writable("");
    adminPostsFilters = writable({
      published: true,
      pinned: false,
      newFirst: true,
      tag: new Tag("\u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F", "\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F")
    });
    scheduleMonth = writable(new Month(new Date(Date.now()).getMonth() + 1, new Date(Date.now()).getFullYear()));
    showedPostsStep = 6;
    mapShowedPostsLength = writable(/* @__PURE__ */ new Map());
    onValue(ref(db, "/tags"), (s2) => {
      let tags = Object.values(s2.val());
      let m = /* @__PURE__ */ new Map();
      tags.forEach((v) => m.set(v.name, showedPostsStep));
      mapShowedPostsLength.set(m);
    });
  }
});

// .svelte-kit/output/server/chunks/Theme.js
var Theme;
var init_Theme = __esm({
  ".svelte-kit/output/server/chunks/Theme.js"() {
    init_chunks();
    init_writableData();
    Theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $theme, $$unsubscribe_theme;
      $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
      $$unsubscribe_theme();
      return `${$$result.head += `<link href="${"/bootstrap." + escape($theme == "" ? "light" : $theme, true) + ".min.css"}" rel="${"stylesheet"}" data-svelte="svelte-75acof">`, ""}`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_chunks();
    init_Theme();
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(Theme, "Theme").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/pages/_layout.svelte-656ba6b6.js";
    imports = ["_app/immutable/components/pages/_layout.svelte-656ba6b6.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/Theme-72c8c2aa.js", "_app/immutable/chunks/writableData-689bbc33.js", "_app/immutable/chunks/Tag-44811674.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/firebase-1cc93dd2.js"];
    stylesheets = [];
  }
});

// .svelte-kit/output/server/entries/pages/_error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2
});
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_error.svelte.js"() {
    init_chunks();
    init_Theme();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(Theme, "Theme").$$render($$result, {}, {}, {})}
<div class="${"d-flex flex-column justify-content-center align-items-center text-dark w-100"}" style="${"height: 100vh;"}"><h4>\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.</h4>
	<div>\u0427\u0435\u0440\u0435\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434 \u0432\u044B \u0431\u0443\u0434\u0435\u0442\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0441\u0430\u0439\u0442\u0430.</div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/components/pages/_error.svelte-297fb506.js";
    imports2 = ["_app/immutable/components/pages/_error.svelte-297fb506.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/Theme-72c8c2aa.js", "_app/immutable/chunks/writableData-689bbc33.js", "_app/immutable/chunks/Tag-44811674.js", "_app/immutable/chunks/firebase-1cc93dd2.js"];
    stylesheets2 = [];
  }
});

// .svelte-kit/output/server/chunks/stores.js
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
var getStores, page;
var init_stores = __esm({
  ".svelte-kit/output/server/chunks/stores.js"() {
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      const readonly_stores = {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
      Object.defineProperties(readonly_stores, {
        preloading: {
          get() {
            console.error("stores.preloading is deprecated; use stores.navigating instead");
            return {
              subscribe: stores.navigating.subscribe
            };
          },
          enumerable: false
        },
        session: {
          get() {
            removed_session();
            return {};
          },
          enumerable: false
        }
      });
      return readonly_stores;
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/chunks/Navigation.js
var IsAuth, Footer, After, Before, Navigation;
var init_Navigation = __esm({
  ".svelte-kit/output/server/chunks/Navigation.js"() {
    init_chunks();
    init_firebase();
    init_stores();
    init_writableData();
    init_index_esm4();
    init_index_esm();
    IsAuth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      new Array();
      return `${`${slots.notAuth ? slots.notAuth({}) : ``}`}`;
    });
    Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<footer class="${"bg-light text-dark no-print"}"><div class="${"p-3"}"><div class="${"d-flex flex-column justify-content-center align-items-center"}"><div class="${"pt-2 text-center"}">${validate_component(IsAuth, "IsAuth").$$render($$result, {}, {}, {
        notAuth: () => {
          return `<i slot="${"notAuth"}" class="${"fa-solid fa-copyright me-1"}" style="${"cursor: pointer;"}" title="${"\u0412\u0445\u043E\u0434 \u0434\u043B\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u0432"}"></i>`;
        },
        default: () => {
          return `<i class="${"fa-solid fa-copyright me-1"}" style="${"cursor: pointer;"}" title="${"\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430"}"></i>`;
        }
      })}
				<span>\u0425\u0440\u0430\u043C &quot;\u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0413\u043E\u0441\u043F\u043E\u0434\u043D\u044F&quot;, \u043F\u043E\u0441\u0451\u043B\u043E\u043A \u0411\u0430\u0431\u044B\u043D\u0438\u043D\u043E, \u041A\u0430\u043B\u0443\u0436\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, ${escape(new Date(Date.now()).getFullYear())} \u0433\u043E\u0434</span></div>
			<div class="${"pb-1 text-center"}">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B:
				<span>\u0445\u0440\u0430\u043C: <a class="${"badge bg-primary text-dark"}" style="${"text-decoration: none;"}" href="${"tel:8-902-934-63-62"}">8-902-934-63-62</a>,
				</span>
				<span>\u0438\u0435\u0440\u0435\u0439 \u0410\u043B\u0435\u043A\u0441\u0438\u0439: <a class="${"badge bg-primary text-dark"}" style="${"text-decoration: none;"}" href="${"tel:8-902-934-63-62"}">8-920-876-89-28</a>,
				</span>
				<span>\u0438\u0435\u0440\u0435\u0439 \u0421\u0435\u0440\u0433\u0438\u0439: <a class="${"badge bg-primary text-dark"}" style="${"text-decoration: none;"}" href="${"tel:8-902-934-63-62"}">8-910-516-36-86</a></span></div>
			<img hidden class="${"my-2 rounded-3"}" style="${"width: 8em;"}" src="${"https://mana.su/wp-content/uploads/2017/06/kartinka-s-rozhdestvom-3.jpg"}" alt="${""}"></div></div></footer>`;
    });
    After = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let innerWidth = 0;
      let { breakpoint = 922 } = $$props;
      if ($$props.breakpoint === void 0 && $$bindings.breakpoint && breakpoint !== void 0)
        $$bindings.breakpoint(breakpoint);
      return `

${innerWidth >= breakpoint ? `${slots.default ? slots.default({}) : ``}` : ``}`;
    });
    Before = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let innerWidth = 0;
      let { breakpoint = 922 } = $$props;
      if ($$props.breakpoint === void 0 && $$bindings.breakpoint && breakpoint !== void 0)
        $$bindings.breakpoint(breakpoint);
      return `

${innerWidth < breakpoint ? `${slots.default ? slots.default({}) : ``}` : ``}`;
    });
    Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_theme;
      let $page, $$unsubscribe_page;
      $$unsubscribe_theme = subscribe(theme, (value) => value);
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      let { title = "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435" } = $$props;
      let { routesLeft = new Array() } = $$props;
      let { routesRight = new Array() } = $$props;
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      if ($$props.routesLeft === void 0 && $$bindings.routesLeft && routesLeft !== void 0)
        $$bindings.routesLeft(routesLeft);
      if ($$props.routesRight === void 0 && $$bindings.routesRight && routesRight !== void 0)
        $$bindings.routesRight(routesRight);
      $$unsubscribe_theme();
      $$unsubscribe_page();
      return `<nav class="${"sticky-top bg-light text-dark no-print py-2 shadow-sm"}">${validate_component(Before, "Before").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"container-fluid d-flex justify-content-between align-items-center dropdown"}"><div class="${"flex-grow-1 d-flex justify-content-between align-items-center"}"><button class="${"btn btn-light text-dark bg-transparent border-0 text-uppercase ps-1 me-1"}"><b><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></b></button><button class="${"btn btn-light text-dark border-0"}"><i class="${"fa-regular fa-sun"}"></i></button></div>
			<button class="${"btn btn-light text-dark border-0 text-uppercase"}" data-bs-toggle="${"dropdown"}"><i class="${"fa-solid fa-bars"}"></i></button>

			<div class="${"dropdown-menu border-0 rounded-0 w-100 bg-light text-dark shadow-sm"}">${each(routesLeft, (item) => {
            return `<div class="${"bg-light text-dark"}"><a class="${"btn btn-light text-dark w-100 text-start rounded-0 ps-3 " + escape(
              decodeURI($page.url.pathname).indexOf(item.url) >= 0 ? "fw-bold" : "",
              true
            )}"${add_attribute("href", item.url, 0)}>${escape(item.title)}</a>
					</div>`;
          })}
				${validate_component(IsAuth, "IsAuth").$$render($$result, {}, {}, {
            default: () => {
              return `${each(routesRight, (item) => {
                return `<div class="${"bg-light text-dark"}"><button class="${"btn btn-light text-dark w-100 text-start rounded-0 ps-3"}"><b class="${"text-uppercase"}">${escape(item.title)}
								</b></button>
						</div>`;
              })}`;
            }
          })}</div></div>`;
        }
      })}
	${validate_component(After, "After").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"container-fluid d-flex justify-content-between align-items-center"}"><div class="${"flex-grow-1 d-flex justify-content-start align-items-center"}"><button class="${"btn btn-light bg-transparent text-dark border-0 text-uppercase text-start me-2"}"><b class="${"text-nowrap"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></b></button>
				<div>${each(routesLeft, (item) => {
            return `<a class="${"btn btn-light text-dark border-0 me-1 " + escape(
              decodeURI($page.url.pathname).indexOf(item.url) >= 0 ? "fw-bold" : "",
              true
            )}"${add_attribute("href", item.url, 0)}>${escape(item.title)}
						</a>`;
          })}</div></div>
			${validate_component(IsAuth, "IsAuth").$$render($$result, {}, {}, {
            default: () => {
              return `<div>${each(routesRight, (item) => {
                return `<a class="${"btn btn-light text-dark border-0 me-1"}"${add_attribute("href", item.url, 0)}>${escape(item.title)}</a>`;
              })}</div>`;
            }
          })}
			<button class="${"btn btn-light text-dark border-0"}"><i class="${"fa-regular fa-sun"}"></i></button></div>`;
        }
      })}</nav>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/(guest)/_layout.svelte.js
var layout_svelte_exports2 = {};
__export(layout_svelte_exports2, {
  default: () => Layout2
});
var Layout2;
var init_layout_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/(guest)/_layout.svelte.js"() {
    init_chunks();
    init_Navigation();
    Layout2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let routesLeft = [
        { url: "/posts", title: "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438" },
        { url: "/schedule", title: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435" },
        { url: "/posts/\u0432\u0438\u0434\u0435\u043E", title: "\u0412\u0438\u0434\u0435\u043E" },
        { url: "/photos", title: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438" },
        { url: "/contacts", title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" }
      ];
      let routesRight = [
        {
          url: "/admin/posts",
          title: "\u041F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"
        }
      ];
      return `${validate_component(Navigation, "Navigation").$$render(
        $$result,
        {
          title: "<span class='text-danger'>\u0425\u0440\u0430\u043C</span> \u0412\u041E\u0417\u041D\u0415\u0421\u0415\u041D\u0418\u042F \u0413\u041E\u0421\u041F\u041E\u0414\u041D\u042F",
          routesLeft,
          routesRight
        },
        {},
        {}
      )}
<div class="${"container my-4"}" style="${"min-height:90vh;"}">${slots.default ? slots.default({}) : ``}</div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component3, file3, imports3, stylesheets3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_layout_svelte2(), layout_svelte_exports2))).default;
    file3 = "_app/immutable/components/pages/(guest)/_layout.svelte-27707d39.js";
    imports3 = ["_app/immutable/components/pages/(guest)/_layout.svelte-27707d39.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/Navigation-33224bd1.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/firebase-1cc93dd2.js", "_app/immutable/chunks/stores-612bd49a.js", "_app/immutable/chunks/writableData-689bbc33.js", "_app/immutable/chunks/Tag-44811674.js"];
    stylesheets3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/admin/_layout.svelte.js
var layout_svelte_exports3 = {};
__export(layout_svelte_exports3, {
  default: () => Layout3
});
var Layout3;
var init_layout_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/_layout.svelte.js"() {
    init_chunks();
    init_Navigation();
    Layout3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let routesLeft = [
        { url: "/admin/posts", title: "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438" },
        {
          url: "/admin/schedule",
          title: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
        },
        {
          url: "/admin/photos",
          title: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438"
        },
        { url: "/admin/tags", title: "\u0422\u0435\u0433\u0438" },
        {
          url: "/admin/contacts",
          title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
        },
        {
          url: "/admin/storage",
          title: "\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435"
        }
      ];
      let routesRight = [{ url: "/posts", title: "\u0421\u0430\u0439\u0442" }];
      return `${validate_component(IsAuth, "IsAuth").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Navigation, "Navigation").$$render(
            $$result,
            {
              title: "\u041F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",
              routesLeft,
              routesRight
            },
            {},
            {}
          )}
	<div class="${"container my-4"}" style="${"min-height:90vh;"}">${slots.default ? slots.default({}) : ``}</div>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  file: () => file4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4
});
var index4, component4, file4, imports4, stylesheets4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    index4 = 3;
    component4 = async () => (await Promise.resolve().then(() => (init_layout_svelte3(), layout_svelte_exports3))).default;
    file4 = "_app/immutable/components/pages/admin/_layout.svelte-600b24a4.js";
    imports4 = ["_app/immutable/components/pages/admin/_layout.svelte-600b24a4.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/Navigation-33224bd1.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/firebase-1cc93dd2.js", "_app/immutable/chunks/stores-612bd49a.js", "_app/immutable/chunks/writableData-689bbc33.js", "_app/immutable/chunks/Tag-44811674.js"];
    stylesheets4 = [];
  }
});

// .svelte-kit/output/server/entries/pages/android/schedule/_layout.svelte.js
var layout_svelte_exports4 = {};
__export(layout_svelte_exports4, {
  default: () => Layout4
});
var Layout4;
var init_layout_svelte4 = __esm({
  ".svelte-kit/output/server/entries/pages/android/schedule/_layout.svelte.js"() {
    init_chunks();
    Layout4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"container my-3"}" style="${"min-height:60vh;"}">${slots.default ? slots.default({}) : ``}</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  file: () => file5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5
});
var index5, component5, file5, imports5, stylesheets5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    index5 = 4;
    component5 = async () => (await Promise.resolve().then(() => (init_layout_svelte4(), layout_svelte_exports4))).default;
    file5 = "_app/immutable/components/pages/android/schedule/_layout.svelte-ce56ea5e.js";
    imports5 = ["_app/immutable/components/pages/android/schedule/_layout.svelte-ce56ea5e.js", "_app/immutable/chunks/index-0e241859.js"];
    stylesheets5 = [];
  }
});

// .svelte-kit/output/server/entries/pages/auth/_layout.svelte.js
var layout_svelte_exports5 = {};
__export(layout_svelte_exports5, {
  default: () => Layout5
});
var Layout5;
var init_layout_svelte5 = __esm({
  ".svelte-kit/output/server/entries/pages/auth/_layout.svelte.js"() {
    init_chunks();
    Layout5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${slots.default ? slots.default({}) : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  file: () => file6,
  imports: () => imports6,
  index: () => index6,
  stylesheets: () => stylesheets6
});
var index6, component6, file6, imports6, stylesheets6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    index6 = 5;
    component6 = async () => (await Promise.resolve().then(() => (init_layout_svelte5(), layout_svelte_exports5))).default;
    file6 = "_app/immutable/components/pages/auth/_layout.svelte-57aa9b13.js";
    imports6 = ["_app/immutable/components/pages/auth/_layout.svelte-57aa9b13.js", "_app/immutable/chunks/index-0e241859.js"];
    stylesheets6 = [];
  }
});

// .svelte-kit/output/server/entries/pages/fullscreen/photos/_uid_/_layout.svelte.js
var layout_svelte_exports6 = {};
__export(layout_svelte_exports6, {
  default: () => Layout6
});
var Layout6;
var init_layout_svelte6 = __esm({
  ".svelte-kit/output/server/entries/pages/fullscreen/photos/_uid_/_layout.svelte.js"() {
    init_chunks();
    Layout6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"bg-black bg-opacity-75"}">${slots.default ? slots.default({}) : ``}</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component7,
  file: () => file7,
  imports: () => imports7,
  index: () => index7,
  stylesheets: () => stylesheets7
});
var index7, component7, file7, imports7, stylesheets7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    index7 = 6;
    component7 = async () => (await Promise.resolve().then(() => (init_layout_svelte6(), layout_svelte_exports6))).default;
    file7 = "_app/immutable/components/pages/fullscreen/photos/_uid_/_layout.svelte-63b47537.js";
    imports7 = ["_app/immutable/components/pages/fullscreen/photos/_uid_/_layout.svelte-63b47537.js", "_app/immutable/chunks/index-0e241859.js"];
    stylesheets7 = [];
  }
});

// .svelte-kit/output/server/chunks/SEO.js
var SEO;
var init_SEO = __esm({
  ".svelte-kit/output/server/chunks/SEO.js"() {
    init_chunks();
    SEO = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { title = "\u0425\u0440\u0430\u043C \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0413\u043E\u0441\u043F\u043E\u0434\u043D\u044F" } = $$props;
      let { description = "\u0425\u0440\u0430\u043C \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0413\u043E\u0441\u043F\u043E\u0434\u043D\u044F \u043F\u043E\u0441. \u0411\u0430\u0431\u044B\u043D\u0438\u043D\u043E" } = $$props;
      let { author = "\u0421\u0435\u0440\u0433\u0435\u0439 \u0413\u043E\u0440\u0431\u0443\u043B\u0451\u0432" } = $$props;
      let { copyright = "\u0425\u0440\u0430\u043C \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0413\u043E\u0441\u043F\u043E\u0434\u043D\u044F \u043F\u043E\u0441. \u0411\u0430\u0431\u044B\u043D\u0438\u043D\u043E" } = $$props;
      let { address = "249210, \u041A\u0430\u043B\u0443\u0436\u0441\u043A\u0430\u044F \u043E\u0431\u043B., \u043F\u043E\u0441. \u0411\u0430\u0431\u044B\u043D\u0438\u043D\u043E, \u0411\u0430\u0437\u0430\u0440\u043D\u0430\u044F \u043F\u043B., 1" } = $$props;
      let { keywords = "\u0445\u0440\u0430\u043C \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E, \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E \u0445\u0440\u0430\u043C, \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E \u0445\u0440\u0430\u043C \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F, \u0445\u0440\u0430\u043C \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0413\u043E\u0441\u043F\u043E\u0434\u043D\u044F, \u0446\u0435\u0440\u043A\u043E\u0432\u044C \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E, \u0445\u0440\u0430\u043C \u043F\u043E\u0441\u0435\u043B\u043E\u043A \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E, \u043A\u0430\u043B\u0443\u0433\u0430 \u0445\u0440\u0430\u043C, \u043A\u0430\u043B\u0443\u0436\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0445\u0440\u0430\u043C, \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u0441\u043A\u0438\u0439 \u0440\u0430\u0439\u043E\u043D \u0445\u0440\u0430\u043C, \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0413\u043E\u0441\u043F\u043E\u0434\u043D\u0435" } = $$props;
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      if ($$props.description === void 0 && $$bindings.description && description !== void 0)
        $$bindings.description(description);
      if ($$props.author === void 0 && $$bindings.author && author !== void 0)
        $$bindings.author(author);
      if ($$props.copyright === void 0 && $$bindings.copyright && copyright !== void 0)
        $$bindings.copyright(copyright);
      if ($$props.address === void 0 && $$bindings.address && address !== void 0)
        $$bindings.address(address);
      if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
        $$bindings.keywords(keywords);
      return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-1wbbfkr"><meta name="${"author"}"${add_attribute("content", author, 0)} data-svelte="svelte-1wbbfkr"><meta name="${"copyright"}"${add_attribute("content", copyright, 0)} data-svelte="svelte-1wbbfkr"><meta name="${"address"}"${add_attribute("content", address, 0)} data-svelte="svelte-1wbbfkr"><meta name="${"keywords"}"${add_attribute("content", keywords, 0)} data-svelte="svelte-1wbbfkr">`, ""}`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    init_SEO();
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(SEO, "Seo").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports8 = {};
__export(__exports8, {
  component: () => component8,
  file: () => file8,
  imports: () => imports8,
  index: () => index8,
  stylesheets: () => stylesheets8
});
var index8, component8, file8, imports8, stylesheets8;
var init__8 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    index8 = 7;
    component8 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file8 = "_app/immutable/components/pages/_page.svelte-4c80a692.js";
    imports8 = ["_app/immutable/components/pages/_page.svelte-4c80a692.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/SEO-f617525a.js"];
    stylesheets8 = [];
  }
});

// .svelte-kit/output/server/chunks/PageTitle.js
var PageTitle;
var init_PageTitle = __esm({
  ".svelte-kit/output/server/chunks/PageTitle.js"() {
    init_chunks();
    PageTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { titleSpecial = "" } = $$props;
      let { title = "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438" } = $$props;
      let { description = "\u0421\u0430\u0439\u0442 \u0445\u0440\u0430\u043C\u0430 \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0413\u043E\u0441\u043F\u043E\u0434\u043D\u044F \u043F\u043E\u0441. \u0411\u0430\u0431\u044B\u043D\u0438\u043D\u043E" } = $$props;
      let { author = "\u0421\u0435\u0440\u0433\u0435\u0439 \u0413\u043E\u0440\u0431\u0443\u043B\u0451\u0432" } = $$props;
      let { copyright = "\u0425\u0440\u0430\u043C \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0413\u043E\u0441\u043F\u043E\u0434\u043D\u044F \u043F\u043E\u0441. \u0411\u0430\u0431\u044B\u043D\u0438\u043D\u043E" } = $$props;
      let { address = "249210, \u041A\u0430\u043B\u0443\u0436\u0441\u043A\u0430\u044F \u043E\u0431\u043B., \u043F\u043E\u0441. \u0411\u0430\u0431\u044B\u043D\u0438\u043D\u043E, \u0411\u0430\u0437\u0430\u0440\u043D\u0430\u044F \u043F\u043B., 1" } = $$props;
      let { keywords = "" } = $$props;
      let { _class = "" } = $$props;
      if ($$props.titleSpecial === void 0 && $$bindings.titleSpecial && titleSpecial !== void 0)
        $$bindings.titleSpecial(titleSpecial);
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      if ($$props.description === void 0 && $$bindings.description && description !== void 0)
        $$bindings.description(description);
      if ($$props.author === void 0 && $$bindings.author && author !== void 0)
        $$bindings.author(author);
      if ($$props.copyright === void 0 && $$bindings.copyright && copyright !== void 0)
        $$bindings.copyright(copyright);
      if ($$props.address === void 0 && $$bindings.address && address !== void 0)
        $$bindings.address(address);
      if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
        $$bindings.keywords(keywords);
      if ($$props._class === void 0 && $$bindings._class && _class !== void 0)
        $$bindings._class(_class);
      return `${$$result.head += `${$$result.title = `<title>${escape(titleSpecial == "" ? title : titleSpecial)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-1mn63sj"><meta name="${"author"}"${add_attribute("content", author, 0)} data-svelte="svelte-1mn63sj"><meta name="${"copyright"}"${add_attribute("content", copyright, 0)} data-svelte="svelte-1mn63sj"><meta name="${"address"}"${add_attribute("content", address, 0)} data-svelte="svelte-1mn63sj"><meta name="${"keywords"}"${add_attribute("content", keywords, 0)} data-svelte="svelte-1mn63sj"><meta name="${"keywords"}" content="${"\u0445\u0440\u0430\u043C \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E, \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E \u0445\u0440\u0430\u043C, \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E \u0445\u0440\u0430\u043C \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F, \u0445\u0440\u0430\u043C \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0413\u043E\u0441\u043F\u043E\u0434\u043D\u044F, \u0446\u0435\u0440\u043A\u043E\u0432\u044C \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E, \u0445\u0440\u0430\u043C \u043F\u043E\u0441\u0435\u043B\u043E\u043A \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E, \u043A\u0430\u043B\u0443\u0433\u0430 \u0445\u0440\u0430\u043C, \u043A\u0430\u043B\u0443\u0436\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0445\u0440\u0430\u043C, \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u0441\u043A\u0438\u0439 \u0440\u0430\u0439\u043E\u043D \u0445\u0440\u0430\u043C, \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0413\u043E\u0441\u043F\u043E\u0434\u043D\u0435"}" data-svelte="svelte-1mn63sj">`, ""}

<div class="${"d-flex justify-content-between flex-nowrap align-items-center mb-3 no-print " + escape(_class, true)}"><div class="${"d-flex justify-content-between align-items-center"}"><h4 class="${"text-dark ms-1 mb-0 me-3 text-nowrap"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h4>
		${slots.center ? slots.center({}) : ``}</div>
	${slots.navigation ? slots.navigation({}) : ``}</div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/(guest)/contacts/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
var Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/(guest)/contacts/_page.svelte.js"() {
    init_chunks();
    init_PageTitle();
    init_firebase();
    init_index_esm();
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let title;
      let keywords;
      title = "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B";
      keywords = `\u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E \u0445\u0440\u0430\u043C ${title}, \u0445\u0440\u0430\u043C \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E ${title}`;
      return `${validate_component(PageTitle, "PageTitle").$$render(
        $$result,
        {
          title,
          description: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B: \u0430\u0434\u0440\u0435\u0441, \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u044B, \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u044B",
          keywords
        },
        {},
        {}
      )}

${``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/8.js
var __exports9 = {};
__export(__exports9, {
  component: () => component9,
  file: () => file9,
  imports: () => imports9,
  index: () => index9,
  stylesheets: () => stylesheets9
});
var index9, component9, file9, imports9, stylesheets9;
var init__9 = __esm({
  ".svelte-kit/output/server/nodes/8.js"() {
    index9 = 8;
    component9 = async () => (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    file9 = "_app/immutable/components/pages/(guest)/contacts/_page.svelte-60c26553.js";
    imports9 = ["_app/immutable/components/pages/(guest)/contacts/_page.svelte-60c26553.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/PageTitle-07dd15bf.js", "_app/immutable/chunks/firebase-1cc93dd2.js"];
    stylesheets9 = [];
  }
});

// .svelte-kit/output/server/chunks/Album2.js
var Album;
var init_Album2 = __esm({
  ".svelte-kit/output/server/chunks/Album2.js"() {
    Album = class {
      constructor(title = "", description = null, date = new Date().toISOString().slice(0, 10), photos = new Array(), cover = null) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.photos = photos;
        this.cover = cover;
      }
    };
  }
});

// .svelte-kit/output/server/chunks/Album.js
var Album_1;
var init_Album = __esm({
  ".svelte-kit/output/server/chunks/Album.js"() {
    init_chunks();
    init_stores();
    init_Album2();
    Album_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => value);
      let { uid = "" } = $$props;
      let { album = new Album() } = $$props;
      let hoverEffect = "bg-opacity-25";
      if ($$props.uid === void 0 && $$bindings.uid && uid !== void 0)
        $$bindings.uid(uid);
      if ($$props.album === void 0 && $$bindings.album && album !== void 0)
        $$bindings.album(album);
      $$unsubscribe_page();
      return `<div${add_attribute("id", uid, 0)} class="${"img-fluid rounded d-flex flex-column-reverse"}" style="${"background-image: url(" + escape(album.cover, true) + "); background-repeat: no-repeat; background-position: center; background-size: cover; min-height:16em; cursor:pointer;"}"><div class="${"d-flex justify-content-between bg-backspace text-dark " + escape(hoverEffect, true) + " p-3 rounded-bottom"}"><div><h5 class="${"mb-0"}">${escape(album.title)}</h5>
			<small class="${"text-dark text-opacity-75"}">${escape(album.description ? album.description : "")}</small></div>
		<div class="${"d-flex flex-column align-items-end justify-content-between small mt-1"}">${album.photos ? `<div class="${"badge badge-light bg-light text-dark"}">${escape(album.photos.length)} \u0444\u043E\u0442\u043E
				</div>` : ``}
			${album.date ? `<div class="${"text-danger text-nowrap"}">${escape(new Date(album.date).getDate())}
					${escape(new Date(album.date).monthName())}
					${escape(new Date(album.date).getFullYear())}</div>` : ``}</div></div>
	${slots.navigation ? slots.navigation({}) : ``}</div>`;
    });
  }
});

// .svelte-kit/output/server/chunks/Spinner.js
var Spinner;
var init_Spinner = __esm({
  ".svelte-kit/output/server/chunks/Spinner.js"() {
    init_chunks();
    Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"d-flex justify-content-center align-items-center"}" style="${"height: 72vh;"}"><div class="${"spinner-border text-dark"}"><span class="${"visually-hidden"}">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</span></div></div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/(guest)/photos/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page3
});
var Page3;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/(guest)/photos/_page.svelte.js"() {
    init_chunks();
    init_PageTitle();
    init_Album();
    init_Spinner();
    init_firebase();
    init_index_esm();
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let title;
      let keywords;
      let albums = new Object();
      title = "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438";
      keywords = `\u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E \u0445\u0440\u0430\u043C ${title}, \u0445\u0440\u0430\u043C \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E ${title}`;
      return `${validate_component(PageTitle, "PageTitle").$$render($$result, { title, description: title, keywords }, {}, {})}

${Object.entries(albums).length > 0 ? `<div class="${"row row-cols-1 row-cols-md-3 g-3"}">${each(Object.entries(albums).sort(([k1, v1], [k2, v2]) => new Date(v2.date) - new Date(v1.date)), ([uid, album]) => {
        return `<div class="${"col"}">${validate_component(Album_1, "Album").$$render($$result, { uid, album }, {}, {})}
			</div>`;
      })}</div>` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
    });
  }
});

// .svelte-kit/output/server/nodes/9.js
var __exports10 = {};
__export(__exports10, {
  component: () => component10,
  file: () => file10,
  imports: () => imports10,
  index: () => index10,
  stylesheets: () => stylesheets10
});
var index10, component10, file10, imports10, stylesheets10;
var init__10 = __esm({
  ".svelte-kit/output/server/nodes/9.js"() {
    index10 = 9;
    component10 = async () => (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    file10 = "_app/immutable/components/pages/(guest)/photos/_page.svelte-f2424a84.js";
    imports10 = ["_app/immutable/components/pages/(guest)/photos/_page.svelte-f2424a84.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/PageTitle-07dd15bf.js", "_app/immutable/chunks/Album-68a073fa.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/stores-612bd49a.js", "_app/immutable/chunks/Album-af605161.js", "_app/immutable/chunks/Spinner-6da39624.js", "_app/immutable/chunks/firebase-1cc93dd2.js"];
    stylesheets10 = [];
  }
});

// .svelte-kit/output/server/entries/pages/(guest)/posts/_page.svelte.js
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: () => Page4
});
var Page4;
var init_page_svelte4 = __esm({
  ".svelte-kit/output/server/entries/pages/(guest)/posts/_page.svelte.js"() {
    init_chunks();
    init_SEO();
    Page4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(SEO, "Seo").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/10.js
var __exports11 = {};
__export(__exports11, {
  component: () => component11,
  file: () => file11,
  imports: () => imports11,
  index: () => index11,
  stylesheets: () => stylesheets11
});
var index11, component11, file11, imports11, stylesheets11;
var init__11 = __esm({
  ".svelte-kit/output/server/nodes/10.js"() {
    index11 = 10;
    component11 = async () => (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default;
    file11 = "_app/immutable/components/pages/(guest)/posts/_page.svelte-49853b43.js";
    imports11 = ["_app/immutable/components/pages/(guest)/posts/_page.svelte-49853b43.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/SEO-f617525a.js"];
    stylesheets11 = [];
  }
});

// .svelte-kit/output/server/chunks/Post.js
var Post, Cover;
var init_Post = __esm({
  ".svelte-kit/output/server/chunks/Post.js"() {
    Post = class {
      constructor(title = null, cover = new Cover(), description = null, content = null, created = new Date().toISOString().slice(0, 10), published = true, pinned = null, inverted = null, tags = new Array(), comments = new Array(), userUID = null, isHorisontal = null) {
        this.title = title;
        this.cover = cover;
        this.description = description;
        this.content = content;
        this.created = created;
        this.published = published;
        this.pinned = pinned;
        this.inverted = inverted;
        this.tags = tags;
        this.comments = comments;
        this.userUID = userUID;
        this.isHorisontal = isHorisontal;
      }
    };
    Cover = class {
      constructor(image = null, video = null) {
        this.image = image;
        this.video = video;
      }
    };
  }
});

// .svelte-kit/output/server/entries/pages/(guest)/posts/details/_uid_/_page.svelte.js
var page_svelte_exports5 = {};
__export(page_svelte_exports5, {
  default: () => Page5
});
var Page5;
var init_page_svelte5 = __esm({
  ".svelte-kit/output/server/entries/pages/(guest)/posts/details/_uid_/_page.svelte.js"() {
    init_chunks();
    init_stores();
    init_Post();
    init_firebase();
    init_index_esm();
    Page5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      var _a;
      let $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => value);
      let post = new Post();
      $$unsubscribe_page();
      return `<button class="${"btn btn-primary text-dark text-nowrap"}"><i class="${"fa-solid fa-circle-arrow-left me-1"}"></i>...</button>

<div class="${"bg-light text-dark rounded my-2"}"><div class="${"d-flex flex-column justify-content-end rounded-top"}" style="${"background-image: url(" + escape(((_a = post.cover) == null ? void 0 : _a.image) ? post.cover.image : "", true) + "); background-repeat: no-repeat; background-position: center; background-size: cover; min-height:14em;"}"><div class="${"d-flex justify-content-between align-items-end bg-light bg-opacity-50 text-dark p-3"}"><div class="${"me-4"}"><h4 class="${"mb-0 pb-0"}">${escape(post.title)}</h4>
				${post.description ? `<div class="${"mt-1 small"}"><!-- HTML_TAG_START -->${post.description}<!-- HTML_TAG_END --></div>` : ``}</div>
			<div class="${"text-end"}"><div class="${"small text-danger text-nowrap"}">${escape(new Date(post.created).getDate())}
					${escape(new Date(post.created).monthName())}
					${escape(new Date(post.created).getFullYear())}</div></div></div></div>
	<div class="${"p-3"}"><!-- HTML_TAG_START -->${post.content}<!-- HTML_TAG_END --></div></div>

<button class="${"btn btn-primary text-dark text-nowrap"}"><i class="${"fa-solid fa-circle-arrow-left me-1"}"></i>...</button>`;
    });
  }
});

// .svelte-kit/output/server/nodes/11.js
var __exports12 = {};
__export(__exports12, {
  component: () => component12,
  file: () => file12,
  imports: () => imports12,
  index: () => index12,
  stylesheets: () => stylesheets12
});
var index12, component12, file12, imports12, stylesheets12;
var init__12 = __esm({
  ".svelte-kit/output/server/nodes/11.js"() {
    index12 = 11;
    component12 = async () => (await Promise.resolve().then(() => (init_page_svelte5(), page_svelte_exports5))).default;
    file12 = "_app/immutable/components/pages/(guest)/posts/details/_uid_/_page.svelte-942d1ff1.js";
    imports12 = ["_app/immutable/components/pages/(guest)/posts/details/_uid_/_page.svelte-942d1ff1.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/stores-612bd49a.js", "_app/immutable/chunks/Post-4549e660.js", "_app/immutable/chunks/firebase-1cc93dd2.js"];
    stylesheets12 = [];
  }
});

// .svelte-kit/output/server/chunks/PostHorizontal.js
var PostHorizontal;
var init_PostHorizontal = __esm({
  ".svelte-kit/output/server/chunks/PostHorizontal.js"() {
    init_chunks();
    init_stores();
    init_Post();
    PostHorizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      var _a, _b, _c, _d, _e;
      let $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => value);
      let { uid = "" } = $$props;
      let { post = new Post() } = $$props;
      if ($$props.uid === void 0 && $$bindings.uid && uid !== void 0)
        $$bindings.uid(uid);
      if ($$props.post === void 0 && $$bindings.post && post !== void 0)
        $$bindings.post(post);
      $$unsubscribe_page();
      return `<div${add_attribute("id", uid ? uid : "", 0)} class="${"card mb-3 p-0 " + escape(
        !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
        true
      ) + " border-0"}"><div class="${"row g-0"}"><div class="${escape(post.cover ? "col-8" : "", true) + " d-flex flex-column"}"><div class="${"card-body flex-grow-1 mb-1"}"><div class="${"d-flex justify-content-between"}"><h5 class="${"card-title mb-1"}"><!-- HTML_TAG_START -->${post.title}<!-- HTML_TAG_END --></h5>
					${post.pinned ? `<i class="${"fa-solid fa-thumbtack"}"></i>` : ``}</div>
				<div class="${"d-flex justify-content-between align-items-center mb-1"}"><div class="${"small text-danger"}">${escape(new Date(post.created).getDate())}
						${escape(new Date(post.created).monthName())}
						${escape(new Date(post.created).getFullYear())}</div>
					<div>${post.tags ? `${each(post.tags, (tag) => {
        return `<button class="${"badge " + escape(
          !post.inverted ? "bg-primary text-dark" : "bg-secondary text-light",
          true
        ) + " text-decoration-none p-1 me-1 border-0"}">${escape(tag.name)}</button>`;
      })}` : ``}</div></div>
				<div class="${"card-text"}" style="${"font-size:1em;"}">${post.description ? `<div class="${"card-body"}" style="${"font-size:1em;"}"><!-- HTML_TAG_START -->${post.description}<!-- HTML_TAG_END --></div>` : ``}
					${post.content ? `<div class="${"d-flex align-items-center justify-content-end"}"><button class="${"btn btn-sm btn-primary text-dark"}"><i class="${"fa-solid fa-circle-arrow-right me-1"}"></i>...</button></div>` : ``}</div></div>
			${slots.adminControls ? slots.adminControls({}) : ``}</div>
		<div class="${escape(post.cover ? "col-4" : "", true) + " rounded-end overflow-hidden"}">${post.cover && post.cover.video ? `<div class="${"ratio ratio-21x9 h-100"}">
					${post.cover.video.includes("https://youtu.be") ? `<iframe frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"embed-responsive-item"}"${add_attribute("src", post.cover.video.replace("https://youtu.be", "https://youtube.com/embed"), 0)}></iframe>` : `${post.cover.video.includes("https://vk.com/video") ? `<iframe class="${"embed-responsive-item"}"${add_attribute("src", post.cover.video.replace("https://vk.com/video", `https://vk.com/video_ext.php?oid=-${(_b = (_a = post.cover.video) == null ? void 0 : _a.split("-")[1]) == null ? void 0 : _b.split("_")[0]}&id=${(_d = (_c = post.cover.video) == null ? void 0 : _c.split("-")[1]) == null ? void 0 : _d.split("_")[1]}&hash=d46c7611ec96988b`).replace("-" + ((_e = post.cover.video) == null ? void 0 : _e.split("-")[1]), ""), 0)}></iframe>` : ``}`}</div>` : `${post.cover && post.cover.image ? `<div class="${"img-fluid rounded-end h-100"}" style="${"background-image: url(" + escape(post.cover.image, true) + "); background-repeat: no-repeat; background-position: center; background-size: cover; min-height:12em;"}"></div>` : ``}`}</div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/(guest)/posts/_tag_/_page.svelte.js
var page_svelte_exports6 = {};
__export(page_svelte_exports6, {
  default: () => Page6
});
var Post_1, css, Page6;
var init_page_svelte6 = __esm({
  ".svelte-kit/output/server/entries/pages/(guest)/posts/_tag_/_page.svelte.js"() {
    init_chunks();
    init_stores();
    init_PageTitle();
    init_firebase();
    init_index_esm();
    init_Post();
    init_Spinner();
    init_writableData();
    init_PostHorizontal();
    Post_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      var _a, _b, _c, _d, _e;
      let $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => value);
      let { uid = "" } = $$props;
      let { post = new Post() } = $$props;
      let { _class = "" } = $$props;
      if ($$props.uid === void 0 && $$bindings.uid && uid !== void 0)
        $$bindings.uid(uid);
      if ($$props.post === void 0 && $$bindings.post && post !== void 0)
        $$bindings.post(post);
      if ($$props._class === void 0 && $$bindings._class && _class !== void 0)
        $$bindings._class(_class);
      $$unsubscribe_page();
      return `<div${add_attribute("id", uid ? uid : "", 0)} class="${"col"}"><div class="${"card " + escape(
        !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
        true
      ) + " border-0 h-100 border " + escape(_class, true)}"><div class="${"card-header " + escape(
        !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
        true
      ) + " border-0"}"><div class="${"d-flex justify-content-between"}"><h5 class="${"card-title my-1"}"><!-- HTML_TAG_START -->${post.title}<!-- HTML_TAG_END --></h5>
				${post.pinned ? `<i class="${"fa-solid fa-thumbtack"}"></i>` : ``}</div>
			<div class="${"d-flex justify-content-between align-items-center mb-1"}"><div class="${"small text-danger"}">${escape(new Date(post.created).getDate())}
					${escape(new Date(post.created).monthName())}
					${escape(new Date(post.created).getFullYear())}</div>
				<div>${post.tags ? `${each(post.tags, (tag) => {
        return `<button class="${"badge " + escape(
          !post.inverted ? "bg-primary text-dark" : "bg-secondary text-light",
          true
        ) + " text-decoration-none p-1 ms-1 border-0"}">${escape(tag.name)}</button>`;
      })}` : ``}</div></div></div>
		${post.cover && post.cover.video ? `<div class="${"ratio ratio-21x9"}">
				${post.cover.video.includes("https://youtu.be") ? `<iframe frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"embed-responsive-item"}"${add_attribute("src", post.cover.video.replace("https://youtu.be", "https://youtube.com/embed"), 0)}></iframe>` : `${post.cover.video.includes("https://vk.com/video") ? `<iframe class="${"embed-responsive-item"}"${add_attribute("src", post.cover.video.replace("https://vk.com/video", `https://vk.com/video_ext.php?oid=-${(_b = (_a = post.cover.video) == null ? void 0 : _a.split("-")[1]) == null ? void 0 : _b.split("_")[0]}&id=${(_d = (_c = post.cover.video) == null ? void 0 : _c.split("-")[1]) == null ? void 0 : _d.split("_")[1]}&hash=d46c7611ec96988b`).replace("-" + ((_e = post.cover.video) == null ? void 0 : _e.split("-")[1]), ""), 0)}></iframe>` : ``}`}</div>` : `${post.cover && post.cover.image ? `<div class="${"img-fluid"}" style="${"background-image: url(" + escape(post.cover.image, true) + "); background-repeat: no-repeat; background-position: center; background-size: cover; min-height:12em;"}"></div>` : ``}`}
		${post.description ? `<div class="${"card-body"}" style="${"font-size:1em;"}"><!-- HTML_TAG_START -->${post.description}<!-- HTML_TAG_END --></div>` : ``}
		${post.content ? `<div class="${"d-flex align-items-center justify-content-end mx-3 mb-3"}"><button class="${"btn btn-sm btn-primary text-dark"}"><i class="${"fa-solid fa-circle-arrow-right me-1"}"></i>...</button></div>` : ``}
		${slots.admin ? slots.admin({}) : ``}</div></div>`;
    });
    css = {
      code: ".scroll.svelte-ht578e::-webkit-scrollbar{height:0}",
      map: null
    };
    Page6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let mapFilteredPosts;
      let mapShowedPosts;
      let title;
      let keywords;
      let $page, $$unsubscribe_page;
      let $mapShowedPostsLength, $$unsubscribe_mapShowedPostsLength;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_mapShowedPostsLength = subscribe(mapShowedPostsLength, (value) => $mapShowedPostsLength = value);
      let tags = new Array();
      let mapPosts = new Array();
      $$result.css.add(css);
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        mapFilteredPosts = mapPosts.filter(([k, v]) => {
          var _a;
          return (_a = v.tags) == null ? void 0 : _a.some((t) => t.name === $page.params.tag);
        }).sort(([k1, v1], [k2, v2]) => new Date(v2.created) - new Date(v1.created));
        mapShowedPosts = mapFilteredPosts.slice(0, $mapShowedPostsLength.get($page.params.tag));
        title = $page.params.tag[0].toUpperCase() + $page.params.tag.slice(1);
        keywords = `\u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E \u0445\u0440\u0430\u043C ${title}, \u0445\u0440\u0430\u043C \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E ${title}`;
        $$rendered = `${validate_component(PageTitle, "PageTitle").$$render($$result, { title, description: title, keywords }, {}, {
          navigation: () => {
            return `<div slot="${"navigation"}" class="${"btn-group btn-group-sm flex-nowrap overflow-auto scroll mt-md-0 mt-1 svelte-ht578e"}">${each(tags, (item) => {
              return `<button class="${"btn btn-light text-nowrap " + escape(item.name == $page.params.tag ? "active" : "", true)}">${escape(item.name)}</button>`;
            })}</div>`;
          }
        })}

${mapPosts.length > 0 ? `${mapShowedPosts.filter(([k, v]) => v.pinned) ? `<div class="${"mb-3"}">
			<div>${each(mapShowedPosts.filter(([k, v]) => v.pinned && v.isHorisontal), ([uid, post], i) => {
          return `${validate_component(PostHorizontal, "PostHorizontal").$$render(
            $$result,
            { uid, post },
            {
              post: ($$value) => {
                post = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        })}</div>
			
			<div class="${"row row-cols-1 row-cols-md-3 g-3 flex-row-reverse"}">${each(mapShowedPosts.filter(([k, v]) => v.pinned && !v.isHorisontal), ([uid, post], i) => {
          return `${validate_component(Post_1, "Post").$$render(
            $$result,
            { uid, post },
            {
              post: ($$value) => {
                post = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        })}</div></div>` : ``}

	
	<div class="${"row row-cols-1 row-cols-md-3 g-3"}">${each(mapShowedPosts.filter(([k, v]) => !v.pinned), ([uid, post], i) => {
          return `${validate_component(Post_1, "Post").$$render(
            $$result,
            { uid, post },
            {
              post: ($$value) => {
                post = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        })}</div>

	${$mapShowedPostsLength.get($page.params.tag) < mapFilteredPosts.length ? `<button class="${"btn btn-light text-dark mt-3 w-100"}">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451...</button>` : ``}` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
      } while (!$$settled);
      $$unsubscribe_page();
      $$unsubscribe_mapShowedPostsLength();
      return $$rendered;
    });
  }
});

// .svelte-kit/output/server/nodes/12.js
var __exports13 = {};
__export(__exports13, {
  component: () => component13,
  file: () => file13,
  imports: () => imports13,
  index: () => index13,
  stylesheets: () => stylesheets13
});
var index13, component13, file13, imports13, stylesheets13;
var init__13 = __esm({
  ".svelte-kit/output/server/nodes/12.js"() {
    index13 = 12;
    component13 = async () => (await Promise.resolve().then(() => (init_page_svelte6(), page_svelte_exports6))).default;
    file13 = "_app/immutable/components/pages/(guest)/posts/_tag_/_page.svelte-94c469e3.js";
    imports13 = ["_app/immutable/components/pages/(guest)/posts/_tag_/_page.svelte-94c469e3.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/stores-612bd49a.js", "_app/immutable/chunks/PageTitle-07dd15bf.js", "_app/immutable/chunks/firebase-1cc93dd2.js", "_app/immutable/chunks/Post-4549e660.js", "_app/immutable/chunks/Spinner-6da39624.js", "_app/immutable/chunks/writableData-689bbc33.js", "_app/immutable/chunks/Tag-44811674.js", "_app/immutable/chunks/PostHorizontal-d8d02e87.js"];
    stylesheets13 = ["_app/immutable/assets/_page-947cdb43.css"];
  }
});

// .svelte-kit/output/server/chunks/Month.js
var FildTime_1, FildDate_1, Month_1;
var init_Month = __esm({
  ".svelte-kit/output/server/chunks/Month.js"() {
    init_chunks();
    init_writableData();
    FildTime_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { fildTime = new FildTime() } = $$props;
      if ($$props.fildTime === void 0 && $$bindings.fildTime && fildTime !== void 0)
        $$bindings.fildTime(fildTime);
      return `<div style="${"display: grid; grid-template-columns: 1fr .3fr .1fr"}"><div class="${"px-3 py-1"}" style="${"min-width: 13em;"}"><!-- HTML_TAG_START -->${fildTime.event}<!-- HTML_TAG_END --></div>
	<div class="${"px-3 py-1 text-end"}" style="${"min-width: 8em;"}"><i class="${""}"><!-- HTML_TAG_START -->${fildTime.prayer ? fildTime.prayer : ""}<!-- HTML_TAG_END --></i></div>
	<div class="${"text-center px-3 py-1"}" style="${"min-width: 5em;"}"><b><!-- HTML_TAG_START -->${fildTime.time}<!-- HTML_TAG_END --></b></div></div>`;
    });
    FildDate_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { fildDate = new FildDate() } = $$props;
      if ($$props.fildDate === void 0 && $$bindings.fildDate && fildDate !== void 0)
        $$bindings.fildDate(fildDate);
      return `<div class="${escape(
        new FildDate()._dayOfWeek(new Date(fildDate.date).getDay()) === "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435" ? "bg-primary text-danger" : "",
        true
      ) + " print-y-border"}" style="${"display: grid; grid-template-columns: .11fr 1fr; min-width: 34em;"}"><div class="${"text-center px-3 py-2"}" style="${"min-width: 8.2em;"}"><b class="${"text-nowrap"}"><!-- HTML_TAG_START -->${new Date(fildDate.date).getDate()}<!-- HTML_TAG_END --></b>
		<b><!-- HTML_TAG_START -->${new Month(new Date(fildDate.date).getMonth() + 1, new Date(fildDate.date).getFullYear()).monthNameS()}<!-- HTML_TAG_END --></b>
		
		<br>
		<i><!-- HTML_TAG_START -->${new FildDate()._dayOfWeek(new Date(fildDate.date).getDay())}<!-- HTML_TAG_END --></i></div>
	<div class="${"py-1"}">${each(fildDate.fildsTime, (item) => {
        return `${validate_component(FildTime_1, "FildTime").$$render($$result, { fildTime: item }, {}, {})}`;
      })}</div></div>`;
    });
    Month_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      var _a;
      let { month = new Month() } = $$props;
      if ($$props.month === void 0 && $$bindings.month && month !== void 0)
        $$bindings.month(month);
      return `${month.fildsDayNotEmpty != null ? `<div class="${"rounded bg-light text-dark w-100 overflow-auto"}"><div><div class="${"py-2 ps-4 print-title"}"><b>\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430 ${escape((_a = month.monthName()) == null ? void 0 : _a.toUpperCase())} ${escape(month.year)} \u0433\u043E\u0434\u0430</b></div>
			<div class="${"no-print"}" style="${"display: grid; grid-template-columns: .11fr 1fr; min-height: 2.3em"}"><div class="${"text-center px-3"}" style="${"min-width: 8.2em;"}"><span class="${"badge bg-primary text-dark"}">\u0414\u0430\u0442\u0430</span></div>
				<div style="${"display: grid; grid-template-columns: 1fr .3fr .1fr"}"><div class="${"ps-3"}" style="${"min-width: 13em;"}"><span class="${"badge bg-primary text-dark"}">\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A</span></div>
					<div class="${"text-end pe-3"}" style="${"min-width: 8em;"}"><span class="${"badge bg-primary text-dark"}">\u0411\u043E\u0433\u043E\u0441\u043B\u0443\u0436\u0435\u043D\u0438\u0435</span></div>
					<div class="${"text-center"}" style="${"min-width: 5em;"}"><span class="${"badge bg-primary text-dark"}">\u0412\u0440\u0435\u043C\u044F</span></div></div></div></div>
		<div>${each(month.fildsDayNotEmpty, (item) => {
        return `${validate_component(FildDate_1, "FildDate").$$render($$result, { fildDate: item }, {}, {})}`;
      })}</div></div>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/chunks/PageTitleWrap.js
var PageTitleWrap;
var init_PageTitleWrap = __esm({
  ".svelte-kit/output/server/chunks/PageTitleWrap.js"() {
    init_chunks();
    PageTitleWrap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { titleSpecial = "" } = $$props;
      let { title = "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438" } = $$props;
      let { description = "\u0421\u0430\u0439\u0442 \u0445\u0440\u0430\u043C\u0430 \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0413\u043E\u0441\u043F\u043E\u0434\u043D\u044F \u043F\u043E\u0441. \u0411\u0430\u0431\u044B\u043D\u0438\u043D\u043E" } = $$props;
      let { author = "\u0421\u0435\u0440\u0433\u0435\u0439 \u0413\u043E\u0440\u0431\u0443\u043B\u0451\u0432" } = $$props;
      let { copyright = "\u0425\u0440\u0430\u043C \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0413\u043E\u0441\u043F\u043E\u0434\u043D\u044F \u043F\u043E\u0441. \u0411\u0430\u0431\u044B\u043D\u0438\u043D\u043E" } = $$props;
      let { address = "249210, \u041A\u0430\u043B\u0443\u0436\u0441\u043A\u0430\u044F \u043E\u0431\u043B., \u043F\u043E\u0441. \u0411\u0430\u0431\u044B\u043D\u0438\u043D\u043E, \u0411\u0430\u0437\u0430\u0440\u043D\u0430\u044F \u043F\u043B., 1" } = $$props;
      let { keywords = "" } = $$props;
      let { _class = "" } = $$props;
      if ($$props.titleSpecial === void 0 && $$bindings.titleSpecial && titleSpecial !== void 0)
        $$bindings.titleSpecial(titleSpecial);
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      if ($$props.description === void 0 && $$bindings.description && description !== void 0)
        $$bindings.description(description);
      if ($$props.author === void 0 && $$bindings.author && author !== void 0)
        $$bindings.author(author);
      if ($$props.copyright === void 0 && $$bindings.copyright && copyright !== void 0)
        $$bindings.copyright(copyright);
      if ($$props.address === void 0 && $$bindings.address && address !== void 0)
        $$bindings.address(address);
      if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
        $$bindings.keywords(keywords);
      if ($$props._class === void 0 && $$bindings._class && _class !== void 0)
        $$bindings._class(_class);
      return `${$$result.head += `${$$result.title = `<title>${escape(titleSpecial == "" ? title : titleSpecial)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-1mn63sj"><meta name="${"author"}"${add_attribute("content", author, 0)} data-svelte="svelte-1mn63sj"><meta name="${"copyright"}"${add_attribute("content", copyright, 0)} data-svelte="svelte-1mn63sj"><meta name="${"address"}"${add_attribute("content", address, 0)} data-svelte="svelte-1mn63sj"><meta name="${"keywords"}"${add_attribute("content", keywords, 0)} data-svelte="svelte-1mn63sj"><meta name="${"keywords"}" content="${"\u0445\u0440\u0430\u043C \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E, \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E \u0445\u0440\u0430\u043C, \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E \u0445\u0440\u0430\u043C \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F, \u0445\u0440\u0430\u043C \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u044F \u0413\u043E\u0441\u043F\u043E\u0434\u043D\u044F, \u0446\u0435\u0440\u043A\u043E\u0432\u044C \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E, \u0445\u0440\u0430\u043C \u043F\u043E\u0441\u0435\u043B\u043E\u043A \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E, \u043A\u0430\u043B\u0443\u0433\u0430 \u0445\u0440\u0430\u043C, \u043A\u0430\u043B\u0443\u0436\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0445\u0440\u0430\u043C, \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u0441\u043A\u0438\u0439 \u0440\u0430\u0439\u043E\u043D \u0445\u0440\u0430\u043C, \u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0413\u043E\u0441\u043F\u043E\u0434\u043D\u0435"}" data-svelte="svelte-1mn63sj">`, ""}

<div class="${"d-flex justify-content-between flex-wrap align-items-center mb-3 no-print " + escape(_class, true)}"><div class="${"d-flex justify-content-between align-items-center flex-wrap"}"><h4 class="${"text-dark ms-1 my-0 me-3 text-nowrap"}">${escape(title)}</h4>
		<div class="${"mt-2 my-md-0"}">${slots.center ? slots.center({}) : ``}</div></div>
	<div class="${"mt-2 my-md-0"}">${slots.navigation ? slots.navigation({}) : ``}</div></div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/(guest)/schedule/_page.svelte.js
var page_svelte_exports7 = {};
__export(page_svelte_exports7, {
  default: () => Page7
});
var Page7;
var init_page_svelte7 = __esm({
  ".svelte-kit/output/server/entries/pages/(guest)/schedule/_page.svelte.js"() {
    init_chunks();
    init_firebase();
    init_index_esm();
    init_Month();
    init_writableData();
    init_Spinner();
    init_PageTitleWrap();
    Page7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let title;
      let keywords;
      let $month, $$unsubscribe_month;
      $$unsubscribe_month = subscribe(scheduleMonth, (value) => $month = value);
      let m = "";
      title = "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0431\u043E\u0433\u043E\u0441\u043B\u0443\u0436\u0435\u043D\u0438\u0439";
      keywords = `\u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E \u0445\u0440\u0430\u043C ${title}, \u0445\u0440\u0430\u043C \u0431\u0430\u0431\u044B\u043D\u0438\u043D\u043E ${title}`;
      $$unsubscribe_month();
      return `${validate_component(PageTitleWrap, "PageTitleWrap").$$render(
        $$result,
        {
          title,
          description: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0431\u043E\u0433\u043E\u0441\u043B\u0443\u0436\u0435\u043D\u0438\u0439",
          keywords
        },
        {},
        {
          navigation: () => {
            return `<div slot="${"navigation"}" class="${"d-flex"}"><div class="${"btn btn-primary text-dark text-nowrap me-2"}"><i class="${"fa-solid fa-print me-2"}"></i>\u041F\u0435\u0447\u0430\u0442\u044C
		</div>
		<div class="${"input-group"}"><span class="${"input-group-text bg-primary text-dark border-0"}">\u0414\u0430\u0442\u0430:</span>
			<input class="${"form-control bg-light text-dark border-0"}" type="${"month"}"${add_attribute("value", m, 0)}></div></div>`;
          }
        }
      )}

${$month.fildsDayNotEmpty ? `${$month.fildsDayNotEmpty.length > 0 ? `${validate_component(Month_1, "Month").$$render($$result, { month: $month }, {}, {})}` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}` : `<div class="${"text-dark"}">\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430 ${escape($month.monthName())} ${escape($month.year)} \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442!</div>`}`;
    });
  }
});

// .svelte-kit/output/server/nodes/13.js
var __exports14 = {};
__export(__exports14, {
  component: () => component14,
  file: () => file14,
  imports: () => imports14,
  index: () => index14,
  stylesheets: () => stylesheets14
});
var index14, component14, file14, imports14, stylesheets14;
var init__14 = __esm({
  ".svelte-kit/output/server/nodes/13.js"() {
    index14 = 13;
    component14 = async () => (await Promise.resolve().then(() => (init_page_svelte7(), page_svelte_exports7))).default;
    file14 = "_app/immutable/components/pages/(guest)/schedule/_page.svelte-d3192149.js";
    imports14 = ["_app/immutable/components/pages/(guest)/schedule/_page.svelte-d3192149.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/firebase-1cc93dd2.js", "_app/immutable/chunks/Month-7be1f9b4.js", "_app/immutable/chunks/writableData-689bbc33.js", "_app/immutable/chunks/Tag-44811674.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/Spinner-6da39624.js", "_app/immutable/chunks/PageTitleWrap-f2fbe6d6.js"];
    stylesheets14 = [];
  }
});

// .svelte-kit/output/server/entries/pages/admin/contacts/_page.svelte.js
var page_svelte_exports8 = {};
__export(page_svelte_exports8, {
  default: () => Page8
});
var Page8;
var init_page_svelte8 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/contacts/_page.svelte.js"() {
    init_chunks();
    init_PageTitleWrap();
    init_firebase();
    init_index_esm();
    Page8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(PageTitleWrap, "PageTitleWrap").$$render($$result, { title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" }, {}, {
        navigation: () => {
          return `<div slot="${"navigation"}"><button class="${"btn btn-dark"}">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</button></div>`;
        }
      })}

${``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/14.js
var __exports15 = {};
__export(__exports15, {
  component: () => component15,
  file: () => file15,
  imports: () => imports15,
  index: () => index15,
  stylesheets: () => stylesheets15
});
var index15, component15, file15, imports15, stylesheets15;
var init__15 = __esm({
  ".svelte-kit/output/server/nodes/14.js"() {
    index15 = 14;
    component15 = async () => (await Promise.resolve().then(() => (init_page_svelte8(), page_svelte_exports8))).default;
    file15 = "_app/immutable/components/pages/admin/contacts/_page.svelte-1382af7a.js";
    imports15 = ["_app/immutable/components/pages/admin/contacts/_page.svelte-1382af7a.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/PageTitleWrap-f2fbe6d6.js", "_app/immutable/chunks/firebase-1cc93dd2.js"];
    stylesheets15 = [];
  }
});

// .svelte-kit/output/server/entries/pages/admin/contacts/edit/_page.svelte.js
var page_svelte_exports9 = {};
__export(page_svelte_exports9, {
  default: () => Page9
});
var Page9;
var init_page_svelte9 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/contacts/edit/_page.svelte.js"() {
    init_chunks();
    init_PageTitleWrap();
    init_firebase();
    init_index_esm();
    Page9 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(PageTitleWrap, "PageTitleWrap").$$render($$result, { title: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" }, {}, {
        navigation: () => {
          return `<div slot="${"navigation"}"><button class="${"btn btn-light"}">\u041E\u0442\u043C\u0435\u043D\u0430</button>
		<button class="${"btn btn-dark"}">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button></div>`;
        }
      })}

${``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/15.js
var __exports16 = {};
__export(__exports16, {
  component: () => component16,
  file: () => file16,
  imports: () => imports16,
  index: () => index16,
  stylesheets: () => stylesheets16
});
var index16, component16, file16, imports16, stylesheets16;
var init__16 = __esm({
  ".svelte-kit/output/server/nodes/15.js"() {
    index16 = 15;
    component16 = async () => (await Promise.resolve().then(() => (init_page_svelte9(), page_svelte_exports9))).default;
    file16 = "_app/immutable/components/pages/admin/contacts/edit/_page.svelte-3816d73c.js";
    imports16 = ["_app/immutable/components/pages/admin/contacts/edit/_page.svelte-3816d73c.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/PageTitleWrap-f2fbe6d6.js", "_app/immutable/chunks/firebase-1cc93dd2.js"];
    stylesheets16 = [];
  }
});

// .svelte-kit/output/server/entries/pages/admin/photos/_page.svelte.js
var page_svelte_exports10 = {};
__export(page_svelte_exports10, {
  default: () => Page10
});
var Page10;
var init_page_svelte10 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/photos/_page.svelte.js"() {
    init_chunks();
    init_PageTitle();
    init_Album();
    init_firebase();
    init_index_esm();
    Page10 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let albums = new Object();
      return `${validate_component(PageTitle, "PageTitle").$$render($$result, { title: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438" }, {}, {
        navigation: () => {
          return `<div slot="${"navigation"}"><button class="${"btn btn-dark text-light"}">\u0421\u043E\u0437\u0434\u0430\u0442\u044C</button></div>`;
        }
      })}

<div class="${"row row-cols-1 row-cols-md-3 g-3"}">${each(Object.entries(albums).sort(([k1, v1], [k2, v2]) => new Date(v2.date) - new Date(v1.date)), ([uid, album]) => {
        return `<div class="${"col"}">${validate_component(Album_1, "Album").$$render($$result, { uid, album }, {}, {
          navigation: () => {
            return `<div slot="${"navigation"}" class="${"flex-grow-1 d-flex justify-content-end align-items-start m-2"}"><button class="${"btn btn-sm btn-dark me-1"}"><i class="${"fa-solid fa-pencil"}"></i></button>
					<button class="${"btn btn-sm btn-dark"}"><i class="${"fa-solid fa-trash text-danger"}"></i></button>
				</div>`;
          }
        })}
		</div>`;
      })}</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/16.js
var __exports17 = {};
__export(__exports17, {
  component: () => component17,
  file: () => file17,
  imports: () => imports17,
  index: () => index17,
  stylesheets: () => stylesheets17
});
var index17, component17, file17, imports17, stylesheets17;
var init__17 = __esm({
  ".svelte-kit/output/server/nodes/16.js"() {
    index17 = 16;
    component17 = async () => (await Promise.resolve().then(() => (init_page_svelte10(), page_svelte_exports10))).default;
    file17 = "_app/immutable/components/pages/admin/photos/_page.svelte-fdf916ec.js";
    imports17 = ["_app/immutable/components/pages/admin/photos/_page.svelte-fdf916ec.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/PageTitle-07dd15bf.js", "_app/immutable/chunks/Album-68a073fa.js", "_app/immutable/chunks/stores-612bd49a.js", "_app/immutable/chunks/Album-af605161.js", "_app/immutable/chunks/firebase-1cc93dd2.js"];
    stylesheets17 = [];
  }
});

// .svelte-kit/output/server/chunks/Photo.js
var Photo, Photo_1;
var init_Photo = __esm({
  ".svelte-kit/output/server/chunks/Photo.js"() {
    init_chunks();
    Photo = class {
      constructor(title = null, url = "") {
        this.title = title;
        this.url = url;
      }
    };
    Photo_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { photo = new Photo() } = $$props;
      let { _class = "" } = $$props;
      let { onUp = () => {
      } } = $$props;
      let { onDown = () => {
      } } = $$props;
      let { onDelete = () => {
      } } = $$props;
      if ($$props.photo === void 0 && $$bindings.photo && photo !== void 0)
        $$bindings.photo(photo);
      if ($$props._class === void 0 && $$bindings._class && _class !== void 0)
        $$bindings._class(_class);
      if ($$props.onUp === void 0 && $$bindings.onUp && onUp !== void 0)
        $$bindings.onUp(onUp);
      if ($$props.onDown === void 0 && $$bindings.onDown && onDown !== void 0)
        $$bindings.onDown(onDown);
      if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0)
        $$bindings.onDelete(onDelete);
      return `<div class="${"img-fluid rounded d-flex flex-column " + escape(_class, true)}" style="${"background-image: url(" + escape(photo.url, true) + "); background-repeat: no-repeat; background-position: center; background-size: cover; min-height:16em;"}"><div class="${"flex-grow-1 d-flex justify-content-end align-items-start m-3"}"><button class="${"btn btn-sm btn-dark"}"><i class="${"fa-solid fa-trash text-danger"}"></i></button></div>
	<div class="${"d-flex justify-content-between bg-dark text-light bg-opacity-25 p-3 rounded-bottom"}"><div class="${"flex-grow-1"}"><input class="${"form-control form-control-sm border-0 mb-1 bg-light text-dark bg-opacity-75"}" placeholder="${"url"}"${add_attribute("value", photo.url, 0)}>
			<input class="${"form-control form-control-sm border-0 bg-light text-dark bg-opacity-75"}" placeholder="${"\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"}"${add_attribute("value", photo.title, 0)}></div>
		<div class="${"btn-group ms-3"}"><button class="${"btn btn-sm btn-dark me-1"}"><i class="${"fa-solid fa-angle-left text-light"}"></i></button>
			<button class="${"btn btn-sm btn-dark"}"><i class="${"fa-solid fa-angle-right text-light"}"></i></button></div></div>
	${slots.navigation ? slots.navigation({}) : ``}</div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/admin/photos/create/_page.svelte.js
var page_svelte_exports11 = {};
__export(page_svelte_exports11, {
  default: () => Page11
});
var Page11;
var init_page_svelte11 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/photos/create/_page.svelte.js"() {
    init_chunks();
    init_Photo();
    init_Album2();
    init_firebase();
    init_index_esm();
    init_PageTitleWrap();
    Page11 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let album = new Album();
      return `${validate_component(PageTitleWrap, "PageTitleWrap").$$render($$result, { title: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0444\u043E\u0442\u043E\u0430\u043B\u044C\u0431\u043E\u043C" }, {}, {
        navigation: () => {
          return `<div slot="${"navigation"}"><button class="${"btn btn-light"}">\u041E\u0442\u043C\u0435\u043D\u0430</button>
		<button class="${"btn btn-dark"}">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button></div>`;
        }
      })}

<div class="${"rounded p-3 bg-light text-dark"}"><div class="${"d-flex flex-wrap justify-content-between align-items-center mb-3"}"><div class="${"nav nav-pills"}"><a class="${"btn btn-light border-0 me-1 active"}" data-bs-toggle="${"pill"}" href="${"#cover"}">\u041E\u0431\u043B\u043E\u0436\u043A\u0430</a>
			<a class="${"btn btn-light border-0"}" data-bs-toggle="${"pill"}" href="${"#content"}">\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438</a></div></div>

	<div class="${"tab-content"}"><div class="${"tab-pane active show"}" id="${"cover"}"><div class="${"row"}"><div class="${"col-md-8"}"><input class="${"form-control border-primary mb-3 bg-light text-dark"}" placeholder="${"\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"}"${add_attribute("value", album.title, 0)}>
					<input class="${"form-control border-primary mb-3 bg-light text-dark"}" placeholder="${"\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}"${add_attribute("value", album.description, 0)}>
					<div class="${"input-group mb-3"}"><span class="${"input-group-text bg-primary text-dark border-primary"}">\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438</span>
						<input type="${"date"}" class="${"form-control border-primary bg-light text-dark"}"${add_attribute("value", album.date, 0)}></div></div>
				<div class="${"col-md-4"}"><div class="${"form-group mb-3"}"><input class="${"form-control border-primary mb-3 bg-light text-dark"}" placeholder="${"\u043E\u0431\u043B\u043E\u0436\u043A\u0430 (url \u0444\u043E\u0442\u043E)"}"${add_attribute("value", album.cover, 0)}>
						${album.cover ? `<img class="${"card-img rounded"}"${add_attribute("src", album.cover, 0)} alt="${""}">` : ``}</div></div></div></div>
		<div class="${"tab-pane"}" id="${"content"}"><div class="${"mb-3"}"><button class="${"btn btn-sm btn-dark me-1"}"><i class="${"fa-solid fa-plus"}"></i> 1 \u0444\u043E\u0442\u043E
				</button>
				<button class="${"btn btn-sm btn-dark me-1"}"><i class="${"fa-solid fa-plus"}"></i> 5 \u0444\u043E\u0442\u043E
				</button>
				<button class="${"btn btn-sm btn-dark me-1"}"><i class="${"fa-solid fa-plus"}"></i> 10 \u0444\u043E\u0442\u043E
				</button></div>

			<div class="${"row row-cols-1 row-cols-md-3 g-3"}">${each(album.photos, (photo, i) => {
        return `<div class="${"col"}">${validate_component(Photo_1, "Photo").$$render(
          $$result,
          {
            photo,
            onUp: () => {
              album.photos.splice(i - 1, 0, album.photos.splice(i, 1)[0]);
              album.photos = [...album.photos];
            },
            onDown: () => {
              album.photos.splice(i + 1, 0, album.photos.splice(i, 1)[0]);
              album.photos = [...album.photos];
            },
            onDelete: () => album.photos = album.photos.filter((p) => p != photo)
          },
          {},
          {}
        )}
					</div>`;
      })}</div></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/17.js
var __exports18 = {};
__export(__exports18, {
  component: () => component18,
  file: () => file18,
  imports: () => imports18,
  index: () => index18,
  stylesheets: () => stylesheets18
});
var index18, component18, file18, imports18, stylesheets18;
var init__18 = __esm({
  ".svelte-kit/output/server/nodes/17.js"() {
    index18 = 17;
    component18 = async () => (await Promise.resolve().then(() => (init_page_svelte11(), page_svelte_exports11))).default;
    file18 = "_app/immutable/components/pages/admin/photos/create/_page.svelte-a59b53b1.js";
    imports18 = ["_app/immutable/components/pages/admin/photos/create/_page.svelte-a59b53b1.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/Photo-24cbd432.js", "_app/immutable/chunks/Album-af605161.js", "_app/immutable/chunks/firebase-1cc93dd2.js", "_app/immutable/chunks/PageTitleWrap-f2fbe6d6.js"];
    stylesheets18 = [];
  }
});

// .svelte-kit/output/server/entries/pages/admin/photos/edit/_uid_/_page.svelte.js
var page_svelte_exports12 = {};
__export(page_svelte_exports12, {
  default: () => Page12
});
var Page12;
var init_page_svelte12 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/photos/edit/_uid_/_page.svelte.js"() {
    init_chunks();
    init_Photo();
    init_Album2();
    init_firebase();
    init_index_esm();
    init_stores();
    init_PageTitleWrap();
    Page12 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => value);
      let album = new Album();
      $$unsubscribe_page();
      return `${validate_component(PageTitleWrap, "PageTitleWrap").$$render($$result, { title: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0444\u043E\u0442\u043E\u0430\u043B\u044C\u0431\u043E\u043C" }, {}, {
        navigation: () => {
          return `<div slot="${"navigation"}"><button class="${"btn btn-light"}">\u041E\u0442\u043C\u0435\u043D\u0430</button>
		<button class="${"btn btn-dark bg-opacity-10"}">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button></div>`;
        }
      })}

<div class="${"rounded p-3 bg-light text-dark"}"><div class="${"d-flex flex-wrap justify-content-between align-items-center mb-3"}"><div class="${"nav nav-pills"}"><a class="${"btn btn-light border-0 me-1 active"}" data-bs-toggle="${"pill"}" href="${"#cover"}">\u041E\u0431\u043B\u043E\u0436\u043A\u0430</a>
			<a class="${"btn btn-light border-0"}" data-bs-toggle="${"pill"}" href="${"#content"}">\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438</a></div></div>

	<div class="${"tab-content"}"><div class="${"tab-pane active show"}" id="${"cover"}"><div class="${"row"}"><div class="${"col-md-8"}"><input class="${"form-control border-primary mb-3 bg-light text-dark"}" placeholder="${"\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"}"${add_attribute("value", album.title, 0)}>
					<input class="${"form-control border-primary mb-3 bg-light text-dark"}" placeholder="${"\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}"${add_attribute("value", album.description, 0)}>
					<div class="${"input-group mb-3"}"><span class="${"input-group-text bg-primary text-dark border-primary"}">\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438</span>
						<input type="${"date"}" class="${"form-control border-primary bg-light text-dark"}"${add_attribute("value", album.date, 0)}></div></div>
				<div class="${"col-md-4"}"><div class="${"form-group mb-3"}"><input class="${"form-control border-primary mb-3 bg-light text-dark"}" placeholder="${"\u043E\u0431\u043B\u043E\u0436\u043A\u0430 (url \u0444\u043E\u0442\u043E)"}"${add_attribute("value", album.cover, 0)}>
						${album.cover ? `<img class="${"card-img rounded"}"${add_attribute("src", album.cover, 0)} alt="${""}">` : ``}</div></div></div></div>
		<div class="${"tab-pane"}" id="${"content"}"><button class="${"btn btn-sm btn-dark mb-3"}"><i class="${"fa-solid fa-plus"}"></i> \u0444\u043E\u0442\u043E
			</button>
			<div class="${"row row-cols-1 row-cols-md-3 g-3"}">${each(album.photos, (photo, i) => {
        return `<div class="${"col"}">${validate_component(Photo_1, "Photo").$$render(
          $$result,
          {
            photo,
            onUp: () => {
              album.photos.splice(i - 1, 0, album.photos.splice(i, 1)[0]);
              album.photos = [...album.photos];
            },
            onDown: () => {
              album.photos.splice(i + 1, 0, album.photos.splice(i, 1)[0]);
              album.photos = [...album.photos];
            },
            onDelete: () => album.photos = album.photos.filter((p) => p != photo)
          },
          {},
          {}
        )}
					</div>`;
      })}</div></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/18.js
var __exports19 = {};
__export(__exports19, {
  component: () => component19,
  file: () => file19,
  imports: () => imports19,
  index: () => index19,
  stylesheets: () => stylesheets19
});
var index19, component19, file19, imports19, stylesheets19;
var init__19 = __esm({
  ".svelte-kit/output/server/nodes/18.js"() {
    index19 = 18;
    component19 = async () => (await Promise.resolve().then(() => (init_page_svelte12(), page_svelte_exports12))).default;
    file19 = "_app/immutable/components/pages/admin/photos/edit/_uid_/_page.svelte-6bd51cdf.js";
    imports19 = ["_app/immutable/components/pages/admin/photos/edit/_uid_/_page.svelte-6bd51cdf.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/Photo-24cbd432.js", "_app/immutable/chunks/Album-af605161.js", "_app/immutable/chunks/firebase-1cc93dd2.js", "_app/immutable/chunks/stores-612bd49a.js", "_app/immutable/chunks/PageTitleWrap-f2fbe6d6.js"];
    stylesheets19 = [];
  }
});

// .svelte-kit/output/server/chunks/Pin.js
var Tag_1, TagSelector, TagManager, Pin;
var init_Pin = __esm({
  ".svelte-kit/output/server/chunks/Pin.js"() {
    init_chunks();
    init_Tag();
    Tag_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { item = new Tag() } = $$props;
      let { onDelete = () => {
      } } = $$props;
      if ($$props.item === void 0 && $$bindings.item && item !== void 0)
        $$bindings.item(item);
      if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0)
        $$bindings.onDelete(onDelete);
      return `<div class="${"badge mb-1 d-inline-flex p-0 me-1"}"><div class="${"bg-primary text-dark px-2 py-1 rounded-start"}">${escape(item.name)}</div>
	<div class="${"btn btn-sm btn-primary text-dark px-1 py-0 rounded-0 rounded-end"}"><i class="${"fa-solid fa-delete-left"}"></i></div></div>`;
    });
    TagSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { title = "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0433:" } = $$props;
      let { tags = new Array() } = $$props;
      let { selected = new Tag() } = $$props;
      let { _class = "" } = $$props;
      let { onSelect = () => {
      } } = $$props;
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
        $$bindings.tags(tags);
      if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
        $$bindings.selected(selected);
      if ($$props._class === void 0 && $$bindings._class && _class !== void 0)
        $$bindings._class(_class);
      if ($$props.onSelect === void 0 && $$bindings.onSelect && onSelect !== void 0)
        $$bindings.onSelect(onSelect);
      return `<div class="${"btn-group btn-group-sm small " + escape(_class, true)}"><div class="${"bg-primary text-dark px-2 py-1 rounded-start"}" style="${"cursor:default;"}">${escape(title)}</div>
	<button class="${"btn btn-sm btn-secondary text-light rounded-end"}" data-bs-toggle="${"dropdown"}"><i class="${"fa-solid fa-circle-plus"}"></i></button>
	<ul class="${"dropdown-menu"}">${each(tags, (item) => {
        return `<li><button class="${"dropdown-item"}">${escape(item.name)}</button>
			</li>`;
      })}</ul></div>`;
    });
    TagManager = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { title = "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0433:" } = $$props;
      let { tags = new Array() } = $$props;
      let { selectedTags = new Array() } = $$props;
      let { onSelect = () => {
        tags = tags.filter((t) => !selectedTags.includes(t));
      } } = $$props;
      let { _class = "" } = $$props;
      let selectedTag = new Tag();
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
        $$bindings.tags(tags);
      if ($$props.selectedTags === void 0 && $$bindings.selectedTags && selectedTags !== void 0)
        $$bindings.selectedTags(selectedTags);
      if ($$props.onSelect === void 0 && $$bindings.onSelect && onSelect !== void 0)
        $$bindings.onSelect(onSelect);
      if ($$props._class === void 0 && $$bindings._class && _class !== void 0)
        $$bindings._class(_class);
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        $$rendered = `<div${add_attribute("class", _class, 0)} style="${"display: grid; grid-template-columns: auto 1fr;"}"><div${add_attribute("class", tags.length == 0 ? "hide" : "", 0)}>${validate_component(TagSelector, "TagSelector").$$render(
          $$result,
          {
            title,
            tags,
            onSelect: () => {
              if (selectedTag.name != "") {
                if (!selectedTags)
                  selectedTags = new Array();
                selectedTags = [...selectedTags, selectedTag];
                tags = tags.filter((t) => t.name != selectedTag.name);
                selectedTag = new Tag();
                onSelect();
              }
            },
            _class: "mb-2 me-2",
            selected: selectedTag
          },
          {
            selected: ($$value) => {
              selectedTag = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>
	<div>${selectedTags ? `${each(selectedTags, (item) => {
          return `${validate_component(Tag_1, "Tag").$$render(
            $$result,
            {
              item,
              onDelete: () => {
                tags = [...tags, item];
                selectedTags = selectedTags.filter((t) => t.name != item.name);
                onSelect();
              }
            },
            {},
            {}
          )}`;
        })}` : ``}</div></div>`;
      } while (!$$settled);
      return $$rendered;
    });
    Pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { classFontAwesome = "" } = $$props;
      let { text = "" } = $$props;
      let { checked = false } = $$props;
      let { onChange = () => {
      } } = $$props;
      let { _class = "" } = $$props;
      if ($$props.classFontAwesome === void 0 && $$bindings.classFontAwesome && classFontAwesome !== void 0)
        $$bindings.classFontAwesome(classFontAwesome);
      if ($$props.text === void 0 && $$bindings.text && text !== void 0)
        $$bindings.text(text);
      if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
        $$bindings.checked(checked);
      if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
        $$bindings.onChange(onChange);
      if ($$props._class === void 0 && $$bindings._class && _class !== void 0)
        $$bindings._class(_class);
      return `<div class="${"d-flex align-items-center " + escape(_class, true)}" style="${"cursor:pointer;"}"><i class="${escape(classFontAwesome, true) + " " + escape(
        !checked ? "text-secondary text-opacity-25" : "text-info",
        true
      ) + " me-1"}"></i>
	<small class="${"pb-1"}">${escape(text)}</small></div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/admin/posts/_page.svelte.js
var page_svelte_exports13 = {};
__export(page_svelte_exports13, {
  default: () => Page13
});
var FilterTags, PinButton, Page13;
var init_page_svelte13 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/posts/_page.svelte.js"() {
    init_chunks();
    init_firebase();
    init_index_esm();
    init_PostHorizontal();
    init_Pin();
    init_writableData();
    init_Tag();
    init_PageTitleWrap();
    FilterTags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { title = "\u0442\u0435\u0433:" } = $$props;
      let { tags = new Array() } = $$props;
      let { selected = new Tag("\u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F", "\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F") } = $$props;
      let { onSelect = (v) => v } = $$props;
      let { _class = "" } = $$props;
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
        $$bindings.tags(tags);
      if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
        $$bindings.selected(selected);
      if ($$props.onSelect === void 0 && $$bindings.onSelect && onSelect !== void 0)
        $$bindings.onSelect(onSelect);
      if ($$props._class === void 0 && $$bindings._class && _class !== void 0)
        $$bindings._class(_class);
      return `<div class="${"btn-group " + escape(_class, true)}"><div class="${"btn btn-sm bg-primary text-dark"}">${escape(title)}</div>
	<div class="${"dropdown"}"><button class="${"btn btn-sm btn-light text-dark dropdown-toggle rounded-0 rounded-end"}" data-bs-toggle="${"dropdown"}">${escape(selected.name)}</button>
		<ul class="${"dropdown-menu"}">${each(tags, (item) => {
        return `<li><button class="${"dropdown-item"}">${escape(item.name)}</button>
				</li>`;
      })}</ul></div></div>`;
    });
    PinButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { titleNoPressed = "\u043A\u043D\u043E\u043F\u043A\u0430" } = $$props;
      let { titlePressed = "\u043A\u043D\u043E\u043F\u043A\u0430" } = $$props;
      let { pressed = false } = $$props;
      let { onPressed = () => {
      } } = $$props;
      let { classNoPressed = "btn-primary" } = $$props;
      let { classPressed = "btn-primary" } = $$props;
      let { _class = "" } = $$props;
      if ($$props.titleNoPressed === void 0 && $$bindings.titleNoPressed && titleNoPressed !== void 0)
        $$bindings.titleNoPressed(titleNoPressed);
      if ($$props.titlePressed === void 0 && $$bindings.titlePressed && titlePressed !== void 0)
        $$bindings.titlePressed(titlePressed);
      if ($$props.pressed === void 0 && $$bindings.pressed && pressed !== void 0)
        $$bindings.pressed(pressed);
      if ($$props.onPressed === void 0 && $$bindings.onPressed && onPressed !== void 0)
        $$bindings.onPressed(onPressed);
      if ($$props.classNoPressed === void 0 && $$bindings.classNoPressed && classNoPressed !== void 0)
        $$bindings.classNoPressed(classNoPressed);
      if ($$props.classPressed === void 0 && $$bindings.classPressed && classPressed !== void 0)
        $$bindings.classPressed(classPressed);
      if ($$props._class === void 0 && $$bindings._class && _class !== void 0)
        $$bindings._class(_class);
      return `<button class="${"btn " + escape(pressed ? classPressed : classNoPressed, true) + " " + escape(_class, true)}">${escape(pressed ? titlePressed : titleNoPressed)}</button>`;
    });
    Page13 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let tags;
      let arrayOfFilteredPosts;
      let $adminPostsFilters, $$unsubscribe_adminPostsFilters;
      $$unsubscribe_adminPostsFilters = subscribe(adminPostsFilters, (value) => $adminPostsFilters = value);
      let posts = new Object();
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        tags = new Array();
        arrayOfFilteredPosts = () => {
          let p;
          switch ($adminPostsFilters.tag.name) {
            case "\u0432\u0441\u0435 \u0432\u043C\u0435\u0441\u0442\u0435":
              p = Object.entries(posts).filter(([k, v]) => v.published == $adminPostsFilters.published);
              break;
            case "\u0431\u0435\u0437 \u0442\u0435\u0433\u0430":
              p = Object.entries(posts).filter(([k, v]) => v.published == $adminPostsFilters.published && (v.tags == null || v.tags.length == 0));
              break;
            default:
              p = Object.entries(posts).filter(([k, v]) => {
                var _a;
                return v.published == $adminPostsFilters.published && ((_a = v.tags) == null ? void 0 : _a.find((t) => t.name == $adminPostsFilters.tag.name));
              });
              break;
          }
          switch ($adminPostsFilters.newFirst) {
            case true:
              return p.sort(([k1, v1], [k2, v2]) => new Date(v2.created) - new Date(v1.created));
            case false:
              return p.sort(([k1, v1], [k2, v2]) => new Date(v1.created) - new Date(v2.created));
          }
        };
        $$rendered = `${validate_component(PageTitleWrap, "PageTitleWrap").$$render($$result, { title: "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438" }, {}, {
          navigation: () => {
            return `<div slot="${"navigation"}"><button class="${"btn btn-dark"}">\u0421\u043E\u0437\u0434\u0430\u0442\u044C</button></div>`;
          },
          center: () => {
            return `<div slot="${"center"}"><div class="${"d-flex justify-content-between align-items-center"}">${validate_component(FilterTags, "FilterTags").$$render(
              $$result,
              {
                title: "\u0442\u0438\u043F:",
                tags,
                onSelect: (v) => $adminPostsFilters.tag = v,
                selected: $adminPostsFilters.tag,
                _class: "me-1"
              },
              {},
              {}
            )}
			${validate_component(PinButton, "PinButton").$$render(
              $$result,
              {
                _class: "btn-sm me-1",
                titleNoPressed: "\u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u0442\u0430\u0440\u044B\u0435",
                titlePressed: "\u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u043E\u0432\u044B\u0435",
                pressed: $adminPostsFilters.newFirst
              },
              {
                pressed: ($$value) => {
                  $adminPostsFilters.newFirst = $$value;
                  $$settled = false;
                }
              },
              {}
            )}
			${validate_component(PinButton, "PinButton").$$render(
              $$result,
              {
                _class: "btn-sm me-1",
                titleNoPressed: "\u043D\u0435 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u044B\u0435",
                titlePressed: "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u044B\u0435",
                pressed: $adminPostsFilters.published
              },
              {
                pressed: ($$value) => {
                  $adminPostsFilters.published = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div>`;
          }
        })}

<div>
	${each(arrayOfFilteredPosts().filter(([uid, item]) => item.pinned), ([uid, item]) => {
          return `${validate_component(PostHorizontal, "PostHorizontal").$$render($$result, { uid, post: item }, {}, {
            adminControls: () => {
              return `<div slot="${"adminControls"}" class="${"card-body"}"><div class="${"d-flex justify-content-between align-items-center flex-wrap"}"><div class="${"d-flex me-3"}">${validate_component(TagManager, "TagManager").$$render(
                $$result,
                {
                  title: "\u0422\u0435\u0433\u0438:",
                  tags: tags.filter((t) => {
                    var _a;
                    return !((_a = item.tags) == null ? void 0 : _a.find((i) => i.name == t.name));
                  }),
                  onSelect: () => update(ref(db, `/posts/${uid}`), item),
                  _class: item.inverted ? "text-dark" : "",
                  selectedTags: item.tags
                },
                {
                  selectedTags: ($$value) => {
                    item.tags = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div>
					<div class="${"d-flex mb-2 flex-wrap"}"><div class="${"d-flex me-3"}">${validate_component(Pin, "Pin").$$render(
                $$result,
                {
                  classFontAwesome: "fa-regular fa-eye",
                  text: "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C",
                  _class: "me-2",
                  onChange: () => {
                    update(ref(db, `/posts/${uid}`), item);
                  },
                  checked: item.published
                },
                {
                  checked: ($$value) => {
                    item.published = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}
							${validate_component(Pin, "Pin").$$render(
                $$result,
                {
                  classFontAwesome: "fa-solid fa-thumbtack",
                  text: "\u0437\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C",
                  _class: "me-2",
                  onChange: () => {
                    update(ref(db, `/posts/${uid}`), item);
                  },
                  checked: item.pinned
                },
                {
                  checked: ($$value) => {
                    item.pinned = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}
							${validate_component(Pin, "Pin").$$render(
                $$result,
                {
                  classFontAwesome: "fa-solid fa-brush",
                  text: "\u0438\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
                  onChange: () => {
                    update(ref(db, `/posts/${uid}`), item);
                  },
                  checked: item.inverted
                },
                {
                  checked: ($$value) => {
                    item.inverted = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div>
						<div class="${"d-flex"}"><button class="${"btn btn-sm btn-light me-1"}"><i class="${"fa-solid fa-pencil"}"></i></button>
							<div class="${"dropdown dropend"}"><button class="${"btn btn-sm btn-light"}" data-bs-toggle="${"dropdown"}"><i class="${"fa-solid fa-trash text-danger"}"></i></button>
								<div class="${"dropdown-menu p-2 text-center"}"><p>\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E?</p>
									<button class="${"btn btn-sm btn-light"}" data-bs-toggle="${"dropdown"}">\u041E\u0442\u043C\u0435\u043D\u0430</button>
									<button class="${"btn btn-sm btn-light text-danger"}" data-bs-toggle="${"dropdown"}">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button></div>
							</div></div>
					</div></div>
			</div>`;
            }
          })}`;
        })}
	
	${each(arrayOfFilteredPosts().filter(([uid, item]) => !item.pinned), ([uid, item]) => {
          return `${validate_component(PostHorizontal, "PostHorizontal").$$render($$result, { uid, post: item }, {}, {
            adminControls: () => {
              return `<div slot="${"adminControls"}" class="${"card-body"}"><div class="${"d-flex justify-content-between align-items-center flex-wrap"}"><div class="${"d-flex me-3"}">${validate_component(TagManager, "TagManager").$$render(
                $$result,
                {
                  title: "\u0422\u0435\u0433\u0438:",
                  tags: tags.filter((t) => {
                    var _a;
                    return !((_a = item.tags) == null ? void 0 : _a.find((i) => i.name == t.name));
                  }),
                  onSelect: () => update(ref(db, `/posts/${uid}`), item),
                  _class: item.inverted ? "text-dark" : "",
                  selectedTags: item.tags
                },
                {
                  selectedTags: ($$value) => {
                    item.tags = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div>
					<div class="${"d-flex mb-2 flex-wrap"}"><div class="${"d-flex me-3"}">${validate_component(Pin, "Pin").$$render(
                $$result,
                {
                  classFontAwesome: "fa-regular fa-eye",
                  text: "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C",
                  _class: "me-2",
                  onChange: () => {
                    update(ref(db, `/posts/${uid}`), item);
                  },
                  checked: item.published
                },
                {
                  checked: ($$value) => {
                    item.published = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}
							${validate_component(Pin, "Pin").$$render(
                $$result,
                {
                  classFontAwesome: "fa-solid fa-thumbtack",
                  text: "\u0437\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C",
                  _class: "me-2",
                  onChange: () => {
                    update(ref(db, `/posts/${uid}`), item);
                  },
                  checked: item.pinned
                },
                {
                  checked: ($$value) => {
                    item.pinned = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}
							${validate_component(Pin, "Pin").$$render(
                $$result,
                {
                  classFontAwesome: "fa-solid fa-brush",
                  text: "\u0438\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
                  onChange: () => {
                    update(ref(db, `/posts/${uid}`), item);
                  },
                  checked: item.inverted
                },
                {
                  checked: ($$value) => {
                    item.inverted = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div>
						<div class="${"d-flex"}"><button class="${"btn btn-sm btn-light me-1"}"><i class="${"fa-solid fa-pencil"}"></i></button>
							<div class="${"dropdown dropend"}"><button class="${"btn btn-sm btn-light"}" data-bs-toggle="${"dropdown"}"><i class="${"fa-solid fa-trash text-danger"}"></i></button>
								<div class="${"dropdown-menu p-2 text-center"}"><p>\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E?</p>
									<button class="${"btn btn-sm btn-light"}" data-bs-toggle="${"dropdown"}">\u041E\u0442\u043C\u0435\u043D\u0430</button>
									<button class="${"btn btn-sm btn-light text-danger"}" data-bs-toggle="${"dropdown"}">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button></div>
							</div></div>
					</div></div>
			</div>`;
            }
          })}`;
        })}</div>`;
      } while (!$$settled);
      $$unsubscribe_adminPostsFilters();
      return $$rendered;
    });
  }
});

// .svelte-kit/output/server/nodes/19.js
var __exports20 = {};
__export(__exports20, {
  component: () => component20,
  file: () => file20,
  imports: () => imports20,
  index: () => index20,
  stylesheets: () => stylesheets20
});
var index20, component20, file20, imports20, stylesheets20;
var init__20 = __esm({
  ".svelte-kit/output/server/nodes/19.js"() {
    index20 = 19;
    component20 = async () => (await Promise.resolve().then(() => (init_page_svelte13(), page_svelte_exports13))).default;
    file20 = "_app/immutable/components/pages/admin/posts/_page.svelte-b290323a.js";
    imports20 = ["_app/immutable/components/pages/admin/posts/_page.svelte-b290323a.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/firebase-1cc93dd2.js", "_app/immutable/chunks/PostHorizontal-d8d02e87.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/stores-612bd49a.js", "_app/immutable/chunks/Post-4549e660.js", "_app/immutable/chunks/Pin-19dfdd76.js", "_app/immutable/chunks/Tag-44811674.js", "_app/immutable/chunks/writableData-689bbc33.js", "_app/immutable/chunks/PageTitleWrap-f2fbe6d6.js"];
    stylesheets20 = [];
  }
});

// .svelte-kit/output/server/chunks/Editor.js
var EditorControls, Editor;
var init_Editor = __esm({
  ".svelte-kit/output/server/chunks/Editor.js"() {
    init_chunks();
    init_Post();
    EditorControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { _class = "" } = $$props;
      let { codeOnClick = () => {
      } } = $$props;
      if ($$props._class === void 0 && $$bindings._class && _class !== void 0)
        $$bindings._class(_class);
      if ($$props.codeOnClick === void 0 && $$bindings.codeOnClick && codeOnClick !== void 0)
        $$bindings.codeOnClick(codeOnClick);
      return `<div${add_attribute("class", _class, 0)}>${`
		<div class="${"btn-group btn-group-sm me-1"}"><button class="${"btn btn-primary text-dark"}" title="${"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"}"><i class="${"fas fa-undo"}"></i></button>
			<button class="${"btn btn-primary text-dark"}" title="${"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C"}"><i class="${"fas fa-redo"}"></i></button></div>
		
		<div class="${"btn-group btn-group-sm me-1"}"><div class="${"dropdown d-inline"}"><button class="${"btn btn-sm btn-primary text-dark dropdown-toggle"}" data-bs-toggle="${"dropdown"}" title="${"\u0421\u0442\u0438\u043B\u044C \u0442\u0435\u043A\u0441\u0442\u0430"}">\u041E\u0431\u044B\u0447\u043D\u044B\u0439
				</button>
				<div class="${"dropdown-menu"}"><button class="${"dropdown-item"}">\u041E\u0431\u044B\u0447\u043D\u044B\u0439</button>
					<button class="${"dropdown-item"}"><h1>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1</h1></button>
					<button class="${"dropdown-item"}"><h2>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 2</h2></button>
					<button class="${"dropdown-item"}"><h3>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 3</h3></button>
					<button class="${"dropdown-item"}"><h4>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 4</h4></button>
					<button class="${"dropdown-item"}"><h5>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 5</h5></button>
					<button class="${"dropdown-item"}"><h6>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 6</h6></button></div></div></div>
		
		<div class="${"btn-group btn-group-sm me-1"}"><div class="${"dropdown d-inline"}"><button class="${"btn btn-sm btn-primary text-dark dropdown-toggle"}" data-bs-toggle="${"dropdown"}" title="${"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0448\u0440\u0438\u0444\u0442\u0430"}">Segoe UI
				</button>
				<div class="${"dropdown-menu"}"><button class="${"dropdown-item"}" style="${"font-family:Arial"}">Arial</button>
					<button class="${"dropdown-item"}" style="${"font-family:Consolas"}">Consolas</button>
					<button class="${"dropdown-item"}" style="${"font-family:'Roboto'"}">Roboto</button>
					<button class="${"dropdown-item"}" style="${"font-family:'Segoe UI'"}">Segoe UI</button>
					<button class="${"dropdown-item"}" style="${"font-family:'Times New Roman'"}">Times N.R.</button></div></div></div>
		
		<div class="${"btn-group btn-group-sm me-1"}"><div class="${"dropdown d-inline"}"><button class="${"btn btn-sm btn-primary text-dark dropdown-toggle"}" data-bs-toggle="${"dropdown"}" title="${"\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430"}">14 pt
				</button>
				<div class="${"dropdown-menu"}"><button class="${"dropdown-item"}">10 pt</button>
					<button class="${"dropdown-item"}">12 pt</button>
					<button class="${"dropdown-item"}">14 pt</button>
					<button class="${"dropdown-item"}">16 pt</button>
					<button class="${"dropdown-item"}">18 pt</button>
					<button class="${"dropdown-item"}">22 pt</button>
					<button class="${"dropdown-item"}">24 pt</button></div></div></div>
		
		<div class="${"btn-group btn-group-sm me-1"}"><button class="${"btn btn-primary text-dark"}" title="${"\u0416\u0438\u0440\u043D\u044B\u0439"}"><i class="${"fas fa-bold"}"></i></button>
			<button class="${"btn btn-primary text-dark"}" title="${"\u041A\u0443\u0440\u0441\u0438\u0432"}"><i class="${"fas fa-italic"}"></i></button>
			<button class="${"btn btn-primary text-dark"}" title="${"\u041F\u043E\u0434\u0447\u0451\u0440\u043A\u043D\u0443\u0442\u044B\u0439"}"><i class="${"fas fa-underline"}"></i></button></div>
		
		<div class="${"btn-group btn-group-sm me-1"}" data-bs-toggle="${"buttons"}"><label class="${"btn btn-primary text-dark active"}" title="${"\u0421\u043B\u0435\u0432\u0430"}"><input type="${"radio"}" name="${"options"}" id="${"option1"}" autocomplete="${"off"}" checked>
				<i class="${"fas fa-align-left"}"></i></label>
			<label class="${"btn btn-primary text-dark"}" title="${"\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443"}"><input type="${"radio"}" name="${"options"}" id="${"option2"}" autocomplete="${"off"}">
				<i class="${"fas fa-align-center"}"></i></label>
			<label class="${"btn btn-primary text-dark"}" title="${"\u0421\u043F\u0440\u0430\u0432\u0430"}"><input type="${"radio"}" name="${"options"}" id="${"option3"}" autocomplete="${"off"}">
				<i class="${"fas fa-align-right"}"></i></label>
			<label class="${"btn btn-primary text-dark"}" title="${"\u041F\u043E \u0448\u0438\u0440\u0438\u043D\u0435"}"><input type="${"radio"}" name="${"options"}" id="${"option4"}" autocomplete="${"off"}">
				<i class="${"fas fa-align-justify"}"></i></label></div>
		
		<div class="${"btn-group btn-group-sm me-1"}"><button class="${"btn btn-primary text-dark"}"><i class="${"fas fa-list-ol"}"></i></button>
			<button class="${"btn btn-primary text-dark"}"><i class="${"fas fa-list-ul"}"></i></button></div>`}

	<div class="${"btn-group btn-group-sm"}"><button class="${"btn btn-primary text-dark"}"${add_attribute("title", "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u043E\u0434", 0)}>${`
				<i class="${"fa-solid fa-code"}"></i>`}</button></div></div>`;
    });
    Editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { post = new Post() } = $$props;
      let showCode = false;
      if ($$props.post === void 0 && $$bindings.post && post !== void 0)
        $$bindings.post(post);
      return `${validate_component(EditorControls, "EditorControls").$$render(
        $$result,
        {
          _class: "mb-2",
          codeOnClick: () => {
            showCode = !showCode;
          }
        },
        {},
        {}
      )}
${!showCode ? `<div class="${"form-control border-primary mb-3 " + escape(
        !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
        true
      )}" style="${"min-height: 20em;"}" placeholder="${"\u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435"}" contenteditable="${"true"}">${(($$value) => $$value === void 0 ? `` : $$value)(post.content)}</div>` : `<div class="${"form-control border-primary mb-3 " + escape(
        !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
        true
      )}" style="${"min-height: 20em;"}" contenteditable="${"true"}">${(($$value) => $$value === void 0 ? `` : $$value)(post.content)}</div>`}`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/admin/posts/create/_page.svelte.js
var page_svelte_exports14 = {};
__export(page_svelte_exports14, {
  default: () => Page14
});
var Page14;
var init_page_svelte14 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/posts/create/_page.svelte.js"() {
    init_chunks();
    init_Pin();
    init_Post();
    init_Tag();
    init_firebase();
    init_index_esm();
    init_Editor();
    init_PageTitleWrap();
    Page14 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      var _a, _b, _c, _d, _e;
      let tags;
      let post = new Post();
      new Tag();
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        tags = new Array();
        $$rendered = `${validate_component(PageTitleWrap, "PageTitleWrap").$$render($$result, { title: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E" }, {}, {
          navigation: () => {
            return `<div slot="${"navigation"}"><button class="${"btn btn-light"}">\u041E\u0442\u043C\u0435\u043D\u0430</button>
		<button class="${"btn btn-dark bg-opacity-10"}">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button></div>`;
          }
        })}

<div class="${"rounded p-3 " + escape(
          !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
          true
        )}"><div class="${"d-flex flex-wrap justify-content-between align-items-center mb-3"}"><div class="${"nav nav-pills"}"><a class="${"btn btn-light text-dark border-0 me-1 active"}" data-bs-toggle="${"pill"}" href="${"#cover"}">\u041E\u0431\u043B\u043E\u0436\u043A\u0430</a>
			<a class="${"btn btn-light text-dark border-0"}" data-bs-toggle="${"pill"}" href="${"#content"}">\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435</a></div>
		<div class="${"d-flex flex-wrap"}">${validate_component(Pin, "Pin").$$render(
          $$result,
          {
            classFontAwesome: "fa-regular fa-eye",
            text: "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C",
            _class: "me-4",
            checked: post.published
          },
          {
            checked: ($$value) => {
              post.published = $$value;
              $$settled = false;
            }
          },
          {}
        )}
			${validate_component(Pin, "Pin").$$render(
          $$result,
          {
            classFontAwesome: "fa-solid fa-thumbtack",
            text: "\u0437\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u043D\u0430\u0432\u0435\u0440\u0445\u0443",
            _class: "me-4",
            checked: post.pinned
          },
          {
            checked: ($$value) => {
              post.pinned = $$value;
              $$settled = false;
            }
          },
          {}
        )}
			${validate_component(Pin, "Pin").$$render(
          $$result,
          {
            classFontAwesome: "fa-solid fa-brush",
            text: "\u0438\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0446\u0432\u0435\u0442\u0430",
            _class: "me-4",
            checked: post.inverted
          },
          {
            checked: ($$value) => {
              post.inverted = $$value;
              $$settled = false;
            }
          },
          {}
        )}
			${post.pinned ? `${validate_component(Pin, "Pin").$$render(
          $$result,
          {
            classFontAwesome: "fa-solid fa-ruler-horizontal",
            text: "\u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
            checked: post.isHorisontal
          },
          {
            checked: ($$value) => {
              post.isHorisontal = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``}</div></div>

	<div class="${"tab-content"}"><div class="${"tab-pane active show"}" id="${"cover"}"><div class="${"row"}"><div class="${"col-md-8"}"><input class="${"form-control border-primary mb-3 " + escape(
          !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
          true
        )}" placeholder="${"\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"}"${add_attribute("value", post.title, 0)}>
					<textarea class="${"form-control border-primary mb-3 " + escape(
          !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
          true
        )}" placeholder="${"\u043A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}" style="${"min-height: 10em;"}">${post.description || ""}</textarea>
					<div class="${"input-group mb-3"}"><span class="${"input-group-text bg-primary text-dark border-primary"}">\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438</span>
						<input type="${"date"}" class="${"form-control border-primary bg-light text-dark"}"${add_attribute("value", post.created, 0)}></div>
					${validate_component(TagManager, "TagManager").$$render(
          $$result,
          { tags, selectedTags: post.tags },
          {
            selectedTags: ($$value) => {
              post.tags = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>
				<div class="${"col-md-4"}"><div class="${"form-group mb-3"}"><input class="${"form-control border-primary mb-3 " + escape(
          !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
          true
        )}" placeholder="${"\u043E\u0431\u043B\u043E\u0436\u043A\u0430 (url \u0444\u043E\u0442\u043E)"}"${add_attribute("value", post.cover.image, 0)}>
						${post.cover.image ? `<img class="${"card-img rounded"}"${add_attribute("src", post.cover.image, 0)} alt="${""}">` : ``}</div>
					<div class="${"form-group mb-3"}"><input class="${"form-control border-primary mb-3 " + escape(
          !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
          true
        )}" placeholder="${"\u043E\u0431\u043B\u043E\u0436\u043A\u0430 (url \u0432\u0438\u0434\u0435\u043E)"}"${add_attribute("value", post.cover.video, 0)}>
						${post.cover.video ? `<div class="${"ratio ratio-16x9 rounded overflow-hidden mt-3"}">
								${post.cover.video.includes("https://youtu.be") ? `<iframe frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"embed-responsive-item"}"${add_attribute("src", post.cover.video.replace("https://youtu.be", "https://youtube.com/embed"), 0)}></iframe>` : `${post.cover.video.includes("https://vk.com/video") ? `<iframe class="${"embed-responsive-item"}"${add_attribute("src", post.cover.video.replace("https://vk.com/video", `https://vk.com/video_ext.php?oid=-${(_b = (_a = post.cover.video) == null ? void 0 : _a.split("-")[1]) == null ? void 0 : _b.split("_")[0]}&id=${(_d = (_c = post.cover.video) == null ? void 0 : _c.split("-")[1]) == null ? void 0 : _d.split("_")[1]}&hash=d46c7611ec96988b`).replace("-" + ((_e = post.cover.video) == null ? void 0 : _e.split("-")[1]), ""), 0)}></iframe>` : ``}`}</div>` : ``}</div></div></div></div>
		<div class="${"tab-pane"}" id="${"content"}">${validate_component(Editor, "Editor").$$render($$result, { post }, {}, {})}</div></div></div>`;
      } while (!$$settled);
      return $$rendered;
    });
  }
});

// .svelte-kit/output/server/nodes/20.js
var __exports21 = {};
__export(__exports21, {
  component: () => component21,
  file: () => file21,
  imports: () => imports21,
  index: () => index21,
  stylesheets: () => stylesheets21
});
var index21, component21, file21, imports21, stylesheets21;
var init__21 = __esm({
  ".svelte-kit/output/server/nodes/20.js"() {
    index21 = 20;
    component21 = async () => (await Promise.resolve().then(() => (init_page_svelte14(), page_svelte_exports14))).default;
    file21 = "_app/immutable/components/pages/admin/posts/create/_page.svelte-a4b4e869.js";
    imports21 = ["_app/immutable/components/pages/admin/posts/create/_page.svelte-a4b4e869.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/Pin-19dfdd76.js", "_app/immutable/chunks/Tag-44811674.js", "_app/immutable/chunks/Post-4549e660.js", "_app/immutable/chunks/firebase-1cc93dd2.js", "_app/immutable/chunks/Editor-46ce08c6.js", "_app/immutable/chunks/PageTitleWrap-f2fbe6d6.js"];
    stylesheets21 = [];
  }
});

// .svelte-kit/output/server/entries/pages/admin/posts/edit/_uid_/_page.svelte.js
var page_svelte_exports15 = {};
__export(page_svelte_exports15, {
  default: () => Page15
});
var Page15;
var init_page_svelte15 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/posts/edit/_uid_/_page.svelte.js"() {
    init_chunks();
    init_stores();
    init_Pin();
    init_Post();
    init_Tag();
    init_firebase();
    init_index_esm();
    init_Editor();
    init_PageTitleWrap();
    Page15 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      var _a, _b, _c, _d, _e;
      let tags;
      let $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => value);
      let post = new Post();
      new Tag();
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        tags = new Array();
        $$rendered = `${validate_component(PageTitleWrap, "PageTitleWrap").$$render($$result, { title: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E" }, {}, {
          navigation: () => {
            return `<div slot="${"navigation"}"><button class="${"btn btn-light"}">\u041E\u0442\u043C\u0435\u043D\u0430</button>
		<button class="${"btn btn-dark bg-opacity-10"}">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button></div>`;
          }
        })}

<div class="${"rounded p-3 " + escape(
          !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
          true
        )}"><div class="${"d-flex flex-wrap justify-content-between align-items-center mb-3"}"><div class="${"nav nav-pills"}"><a class="${"btn btn-light border-0 me-1 active"}" data-bs-toggle="${"pill"}" href="${"#cover"}">\u041E\u0431\u043B\u043E\u0436\u043A\u0430</a>
			<a class="${"btn btn-light border-0"}" data-bs-toggle="${"pill"}" href="${"#content"}">\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435</a></div>
		<div class="${"d-flex flex-wrap"}">${validate_component(Pin, "Pin").$$render(
          $$result,
          {
            classFontAwesome: "fa-regular fa-eye",
            text: "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C",
            _class: "me-4",
            checked: post.published
          },
          {
            checked: ($$value) => {
              post.published = $$value;
              $$settled = false;
            }
          },
          {}
        )}
			${validate_component(Pin, "Pin").$$render(
          $$result,
          {
            classFontAwesome: "fa-solid fa-thumbtack",
            text: "\u0437\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u043D\u0430\u0432\u0435\u0440\u0445\u0443",
            _class: "me-4",
            checked: post.pinned
          },
          {
            checked: ($$value) => {
              post.pinned = $$value;
              $$settled = false;
            }
          },
          {}
        )}
			${validate_component(Pin, "Pin").$$render(
          $$result,
          {
            classFontAwesome: "fa-solid fa-brush",
            text: "\u0438\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0446\u0432\u0435\u0442\u0430",
            _class: "me-4",
            checked: post.inverted
          },
          {
            checked: ($$value) => {
              post.inverted = $$value;
              $$settled = false;
            }
          },
          {}
        )}
			${post.pinned ? `${validate_component(Pin, "Pin").$$render(
          $$result,
          {
            classFontAwesome: "fa-solid fa-ruler-horizontal",
            text: "\u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
            checked: post.isHorisontal
          },
          {
            checked: ($$value) => {
              post.isHorisontal = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``}</div></div>

	<div class="${"tab-content"}"><div class="${"tab-pane active show"}" id="${"cover"}"><div class="${"row"}"><div class="${"col-md-8"}"><input class="${"form-control border-primary mb-3 " + escape(
          !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
          true
        )}" placeholder="${"\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"}"${add_attribute("value", post.title, 0)}>
					<textarea class="${"form-control border-primary mb-3 " + escape(
          !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
          true
        )}" placeholder="${"\u043A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}" style="${"min-height: 10em;"}">${post.description || ""}</textarea>
					<div class="${"input-group mb-3"}"><span class="${"input-group-text bg-primary text-dark border-primary"}">\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438</span>
						<input type="${"date"}" class="${"form-control border-primary bg-light text-dark"}"${add_attribute("value", post.created, 0)}></div>
					${validate_component(TagManager, "TagManager").$$render(
          $$result,
          { tags, selectedTags: post.tags },
          {
            selectedTags: ($$value) => {
              post.tags = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>
				<div class="${"col-md-4"}"><div class="${"form-group mb-3"}"><input class="${"form-control border-primary mb-3 " + escape(
          !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
          true
        )}" placeholder="${"\u043E\u0431\u043B\u043E\u0436\u043A\u0430 (url \u0444\u043E\u0442\u043E)"}"${add_attribute("value", post.cover.image, 0)}>
						${post.cover.image ? `<img class="${"card-img rounded"}"${add_attribute("src", post.cover.image, 0)} alt="${""}">` : ``}</div>
					<div class="${"form-group mb-3"}"><input class="${"form-control border-primary mb-3 " + escape(
          !post.inverted ? "bg-light text-dark" : "bg-dark text-light",
          true
        )}" placeholder="${"\u043E\u0431\u043B\u043E\u0436\u043A\u0430 (url \u0432\u0438\u0434\u0435\u043E)"}"${add_attribute("value", post.cover.video, 0)}>
						${post.cover.video ? `<div class="${"ratio ratio-16x9 rounded overflow-hidden mt-3"}">
								${post.cover.video.includes("https://youtu.be") ? `<iframe frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"embed-responsive-item"}"${add_attribute("src", post.cover.video.replace("https://youtu.be", "https://youtube.com/embed"), 0)}></iframe>` : `${post.cover.video.includes("https://vk.com/video") ? `<iframe class="${"embed-responsive-item"}"${add_attribute("src", post.cover.video.replace("https://vk.com/video", `https://vk.com/video_ext.php?oid=-${(_b = (_a = post.cover.video) == null ? void 0 : _a.split("-")[1]) == null ? void 0 : _b.split("_")[0]}&id=${(_d = (_c = post.cover.video) == null ? void 0 : _c.split("-")[1]) == null ? void 0 : _d.split("_")[1]}&hash=d46c7611ec96988b`).replace("-" + ((_e = post.cover.video) == null ? void 0 : _e.split("-")[1]), ""), 0)}></iframe>` : ``}`}</div>` : ``}</div></div></div></div>
		<div class="${"tab-pane"}" id="${"content"}">${validate_component(Editor, "Editor").$$render($$result, { post }, {}, {})}</div></div></div>`;
      } while (!$$settled);
      $$unsubscribe_page();
      return $$rendered;
    });
  }
});

// .svelte-kit/output/server/nodes/21.js
var __exports22 = {};
__export(__exports22, {
  component: () => component22,
  file: () => file22,
  imports: () => imports22,
  index: () => index22,
  stylesheets: () => stylesheets22
});
var index22, component22, file22, imports22, stylesheets22;
var init__22 = __esm({
  ".svelte-kit/output/server/nodes/21.js"() {
    index22 = 21;
    component22 = async () => (await Promise.resolve().then(() => (init_page_svelte15(), page_svelte_exports15))).default;
    file22 = "_app/immutable/components/pages/admin/posts/edit/_uid_/_page.svelte-c2b4c9f7.js";
    imports22 = ["_app/immutable/components/pages/admin/posts/edit/_uid_/_page.svelte-c2b4c9f7.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/stores-612bd49a.js", "_app/immutable/chunks/Pin-19dfdd76.js", "_app/immutable/chunks/Tag-44811674.js", "_app/immutable/chunks/Post-4549e660.js", "_app/immutable/chunks/firebase-1cc93dd2.js", "_app/immutable/chunks/Editor-46ce08c6.js", "_app/immutable/chunks/PageTitleWrap-f2fbe6d6.js"];
    stylesheets22 = [];
  }
});

// .svelte-kit/output/server/entries/pages/admin/schedule/_page.svelte.js
var page_svelte_exports16 = {};
__export(page_svelte_exports16, {
  default: () => Page16
});
var Page16;
var init_page_svelte16 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/schedule/_page.svelte.js"() {
    init_chunks();
    init_firebase();
    init_index_esm();
    init_Month();
    init_PageTitleWrap();
    init_writableData();
    Page16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $month, $$unsubscribe_month;
      $$unsubscribe_month = subscribe(scheduleMonth, (value) => $month = value);
      let m = "";
      $$unsubscribe_month();
      return `${validate_component(PageTitleWrap, "PageTitleWrap").$$render($$result, { title: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435" }, {}, {
        navigation: () => {
          return `<div slot="${"navigation"}"><button class="${"btn btn-dark"}">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</button></div>`;
        },
        center: () => {
          return `<div slot="${"center"}" class="${"input-group me-3"}"><span class="${"input-group-text bg-primary text-dark border-0"}">\u0414\u0430\u0442\u0430:</span>
		<input class="${"form-control bg-light text-dark border-0"}" type="${"month"}"${add_attribute("value", m, 0)}></div>`;
        }
      })}

${$month.fildsDayNotEmpty ? `${validate_component(Month_1, "Month").$$render($$result, { month: $month }, {}, {})}` : `<div>\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430 ${escape($month.monthName())} ${escape($month.year)} \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442!</div>`}`;
    });
  }
});

// .svelte-kit/output/server/nodes/22.js
var __exports23 = {};
__export(__exports23, {
  component: () => component23,
  file: () => file23,
  imports: () => imports23,
  index: () => index23,
  stylesheets: () => stylesheets23
});
var index23, component23, file23, imports23, stylesheets23;
var init__23 = __esm({
  ".svelte-kit/output/server/nodes/22.js"() {
    index23 = 22;
    component23 = async () => (await Promise.resolve().then(() => (init_page_svelte16(), page_svelte_exports16))).default;
    file23 = "_app/immutable/components/pages/admin/schedule/_page.svelte-f5e01580.js";
    imports23 = ["_app/immutable/components/pages/admin/schedule/_page.svelte-f5e01580.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/firebase-1cc93dd2.js", "_app/immutable/chunks/Month-7be1f9b4.js", "_app/immutable/chunks/writableData-689bbc33.js", "_app/immutable/chunks/Tag-44811674.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/PageTitleWrap-f2fbe6d6.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js"];
    stylesheets23 = [];
  }
});

// .svelte-kit/output/server/entries/pages/admin/schedule/edit/_page.svelte.js
var page_svelte_exports17 = {};
__export(page_svelte_exports17, {
  default: () => Page17
});
var FildTimeEdit, FildDateEdit, MonthEdit, Page17;
var init_page_svelte17 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/schedule/edit/_page.svelte.js"() {
    init_chunks();
    init_firebase();
    init_index_esm();
    init_writableData();
    init_PageTitleWrap();
    FildTimeEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { fildTime = new FildTime() } = $$props;
      let { isCanRemove = false } = $$props;
      let { onAdd = () => {
      } } = $$props;
      let { onRemove = () => {
      } } = $$props;
      if ($$props.fildTime === void 0 && $$bindings.fildTime && fildTime !== void 0)
        $$bindings.fildTime(fildTime);
      if ($$props.isCanRemove === void 0 && $$bindings.isCanRemove && isCanRemove !== void 0)
        $$bindings.isCanRemove(isCanRemove);
      if ($$props.onAdd === void 0 && $$bindings.onAdd && onAdd !== void 0)
        $$bindings.onAdd(onAdd);
      if ($$props.onRemove === void 0 && $$bindings.onRemove && onRemove !== void 0)
        $$bindings.onRemove(onRemove);
      return `<div style="${"display: grid; grid-template-columns: auto 1fr .11fr .3fr"}"><div class="${"py-2"}">${!isCanRemove ? `<button class="${"btn btn-light bg-transparent px-2 border-0"}" style="${"border-top-right-radius: 0; border-bottom-right-radius: 0;"}"><i class="${"fa-regular fa-square-plus"}"></i></button>` : `<button class="${"btn btn-light bg-transparent px-2 border-0"}" style="${"border-top-right-radius: 0; border-bottom-right-radius: 0;"}"><i class="${"fa-regular fa-square-minus"}"></i></button>`}</div>
	<div class="${"form-group ps-1 py-2"}"><input class="${"form-control bg-transparent text-dark border-0 rounded-0"}" style="${"min-width: 10em;"}"${add_attribute("value", fildTime.event, 0)}></div>
	<div class="${"text-end ps-1 py-2"}"><input type="${"time"}" class="${"form-control bg-transparent text-dark border-0 rounded-0"}" style="${"min-width: 5em;"}"${add_attribute("value", fildTime.time, 0)}></div>
	<div class="${"ps-1 pe-2 py-2"}"><input class="${"form-control bg-transparent text-dark border-0 rounded-0"}" style="${"min-width: 7em;"}"${add_attribute("value", fildTime.prayer, 0)}></div></div>`;
    });
    FildDateEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { fildDate = new FildDate() } = $$props;
      if ($$props.fildDate === void 0 && $$bindings.fildDate && fildDate !== void 0)
        $$bindings.fildDate(fildDate);
      return `<div class="${"border-bottom border-primary " + escape(
        new FildDate()._dayOfWeek(new Date(fildDate.date).getDay()) === "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435" ? "bg-primary text-danger" : "",
        true
      )}" style="${"display: grid; grid-template-columns: .14fr 1fr;min-width: 40em;"}"><div class="${"text-center px-2 py-1"}" style="${"min-width: 8em;"}"><!-- HTML_TAG_START -->${new Date(fildDate.date).getDate()}<!-- HTML_TAG_END -->
		<!-- HTML_TAG_START -->${new Month(new Date(fildDate.date).getMonth() + 1, new Date(fildDate.date).getFullYear()).monthNameS()}<!-- HTML_TAG_END -->
		<!-- HTML_TAG_START -->${new Date(fildDate.date).getFullYear()}<!-- HTML_TAG_END -->
		<br>
		<i><!-- HTML_TAG_START -->${new FildDate()._dayOfWeek(new Date(fildDate.date).getDay())}<!-- HTML_TAG_END --></i></div>
	<div>${each(fildDate.fildsTime, (item, i) => {
        return `${i == 0 ? `${validate_component(FildTimeEdit, "FildTimeEdit").$$render(
          $$result,
          {
            fildTime: item,
            onAdd: () => fildDate.fildsTime = [...fildDate.fildsTime, new FildTime()]
          },
          {},
          {}
        )}` : `${validate_component(FildTimeEdit, "FildTimeEdit").$$render(
          $$result,
          {
            fildTime: item,
            isCanRemove: true,
            onRemove: () => fildDate.fildsTime = [...fildDate.fildsTime.filter((fTime) => fTime != item)]
          },
          {},
          {}
        )}`}`;
      })}</div></div>`;
    });
    MonthEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { month = new Month() } = $$props;
      if ($$props.month === void 0 && $$bindings.month && month !== void 0)
        $$bindings.month(month);
      return `<div class="${"bg-light text-dark rounded w-100 overflow-auto"}">${each(month.fildsDayAll, (item) => {
        return `${validate_component(FildDateEdit, "FildDateEdit").$$render($$result, { fildDate: item }, {}, {})}`;
      })}</div>`;
    });
    Page17 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $month, $$unsubscribe_month;
      $$unsubscribe_month = subscribe(scheduleMonth, (value) => $month = value);
      let m = "";
      let $$settled;
      let $$rendered;
      do {
        $$settled = true;
        $$rendered = `${validate_component(PageTitleWrap, "PageTitleWrap").$$render($$result, { title: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435" }, {}, {
          navigation: () => {
            return `<div slot="${"navigation"}" class="${"d-flex flex-nowrap align-items-center"}"><button class="${"btn btn-light me-1"}">\u041E\u0442\u043C\u0435\u043D\u0430</button>
		<button class="${"btn btn-dark"}">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button></div>`;
          },
          center: () => {
            return `<div slot="${"center"}" class="${"input-group me-4"}"><span class="${"input-group-text bg-primary text-dark border-0"}">\u0414\u0430\u0442\u0430:</span>
		<input class="${"form-control bg-light text-dark border-0"}" type="${"month"}"${add_attribute("value", m, 0)}></div>`;
          }
        })}

${validate_component(MonthEdit, "MonthEdit").$$render(
          $$result,
          { month: $month },
          {
            month: ($$value) => {
              $month = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      } while (!$$settled);
      $$unsubscribe_month();
      return $$rendered;
    });
  }
});

// .svelte-kit/output/server/nodes/23.js
var __exports24 = {};
__export(__exports24, {
  component: () => component24,
  file: () => file24,
  imports: () => imports24,
  index: () => index24,
  stylesheets: () => stylesheets24
});
var index24, component24, file24, imports24, stylesheets24;
var init__24 = __esm({
  ".svelte-kit/output/server/nodes/23.js"() {
    index24 = 23;
    component24 = async () => (await Promise.resolve().then(() => (init_page_svelte17(), page_svelte_exports17))).default;
    file24 = "_app/immutable/components/pages/admin/schedule/edit/_page.svelte-993c0a93.js";
    imports24 = ["_app/immutable/components/pages/admin/schedule/edit/_page.svelte-993c0a93.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/firebase-1cc93dd2.js", "_app/immutable/chunks/writableData-689bbc33.js", "_app/immutable/chunks/Tag-44811674.js", "_app/immutable/chunks/PageTitleWrap-f2fbe6d6.js"];
    stylesheets24 = [];
  }
});

// .svelte-kit/output/server/entries/pages/admin/storage/_page.svelte.js
var page_svelte_exports18 = {};
__export(page_svelte_exports18, {
  default: () => Page18
});
var Page18;
var init_page_svelte18 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/storage/_page.svelte.js"() {
    init_chunks();
    init_PageTitleWrap();
    init_firebase();
    init_index_esm();
    init_index_esm3();
    Page18 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let imagesFromStorage;
      new Array();
      imagesFromStorage = new Array();
      return `${validate_component(PageTitleWrap, "PageTitleWrap").$$render($$result, { title: "\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439" }, {}, {
        navigation: () => {
          return `<div slot="${"navigation"}"><div class="${"input-group"}"><input type="${"file"}" class="${"form-control"}" multiple>
			<button class="${"btn btn-dark"}">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443</button>
			<button class="${"btn btn-dark"}">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C</button></div></div>`;
        }
      })}

<div class="${"row row-cols-1 row-cols-md-3 g-3"}">${each(imagesFromStorage, (item) => {
        return `<div class="${"col"}"><div class="${"d-flex flex-column justify-content-end rounded"}" style="${"background-image: url(" + escape(item, true) + "); background-repeat: no-repeat; background-position: center; background-size: cover; min-height:16em;"}"><div class="${"bg-light text-dark bg-opacity-50 w-100 rounded-bottom p-2"}"><div class="${"ms-1"}" style="${"word-wrap: break-word; word-break: break-all;"}"><button class="${"btn btn-sm btn-light text-dark ms-1 float-end top-0"}" title="${"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C"}"><i class="${"fa-solid fa-copy"}"></i></button>${escape(item)}</div>
				</div></div>
		</div>`;
      })}</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/24.js
var __exports25 = {};
__export(__exports25, {
  component: () => component25,
  file: () => file25,
  imports: () => imports25,
  index: () => index25,
  stylesheets: () => stylesheets25
});
var index25, component25, file25, imports25, stylesheets25;
var init__25 = __esm({
  ".svelte-kit/output/server/nodes/24.js"() {
    index25 = 24;
    component25 = async () => (await Promise.resolve().then(() => (init_page_svelte18(), page_svelte_exports18))).default;
    file25 = "_app/immutable/components/pages/admin/storage/_page.svelte-002c511c.js";
    imports25 = ["_app/immutable/components/pages/admin/storage/_page.svelte-002c511c.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/PageTitleWrap-f2fbe6d6.js", "_app/immutable/chunks/firebase-1cc93dd2.js"];
    stylesheets25 = [];
  }
});

// .svelte-kit/output/server/entries/pages/admin/storage/test/_page.svelte.js
var page_svelte_exports19 = {};
__export(page_svelte_exports19, {
  default: () => Page19
});
var Page19;
var init_page_svelte19 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/storage/test/_page.svelte.js"() {
    init_chunks();
    init_PageTitle();
    init_firebase();
    init_index_esm3();
    Page19 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let path;
      let folders;
      path = "/";
      folders = new Array();
      return `${validate_component(PageTitle, "PageTitle").$$render($$result, { title: "\u041F\u0430\u043F\u043A\u0438 \u0432 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435" }, {}, {})}

<div class="${"btn-group mb-3"}"><button class="${"btn btn-sm btn-light py-0 px-1"}"><i class="${"fa-solid fa-house"}"></i></button>
	${path != "" || path != "/" ? `${each(path.split("/"), (item) => {
        return `<span class="${"bg-light px-1"}">&gt;</span>
			<button class="${"btn btn-sm btn-light py-0 px-1"}">${escape(item)}</button>`;
      })}` : ``}</div>

<div class="${"d-flex justify-content-start align-items-start"}">${each(folders, (item) => {
        return `<button class="${"btn btn-light text-dark p-3 rounded me-2"}">${escape(item.name)}</button>`;
      })}</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/25.js
var __exports26 = {};
__export(__exports26, {
  component: () => component26,
  file: () => file26,
  imports: () => imports26,
  index: () => index26,
  stylesheets: () => stylesheets26
});
var index26, component26, file26, imports26, stylesheets26;
var init__26 = __esm({
  ".svelte-kit/output/server/nodes/25.js"() {
    index26 = 25;
    component26 = async () => (await Promise.resolve().then(() => (init_page_svelte19(), page_svelte_exports19))).default;
    file26 = "_app/immutable/components/pages/admin/storage/test/_page.svelte-48fa9119.js";
    imports26 = ["_app/immutable/components/pages/admin/storage/test/_page.svelte-48fa9119.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/PageTitle-07dd15bf.js", "_app/immutable/chunks/firebase-1cc93dd2.js"];
    stylesheets26 = [];
  }
});

// .svelte-kit/output/server/entries/pages/admin/tags/_page.svelte.js
var page_svelte_exports20 = {};
__export(page_svelte_exports20, {
  default: () => Page20
});
var Page20;
var init_page_svelte20 = __esm({
  ".svelte-kit/output/server/entries/pages/admin/tags/_page.svelte.js"() {
    init_chunks();
    init_PageTitleWrap();
    init_Tag();
    init_firebase();
    init_index_esm();
    Page20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let tags;
      let tag;
      tags = new Array();
      tag = new Tag();
      return `${validate_component(PageTitleWrap, "PageTitleWrap").$$render($$result, { title: "\u0422\u0435\u0433\u0438" }, {}, {
        navigation: () => {
          return `<div slot="${"navigation"}" class="${"d-flex align-items-center"}"><div class="${"input-group"}"><span class="${"input-group-text border-0"}"><i class="${"fa-solid fa-circle-plus"}"></i></span>
			<input class="${"form-control border-0"}" placeholder="${"\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"}"${add_attribute("value", tag.name, 0)}>
			<input class="${"form-control border-0"}" placeholder="${"\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}"${add_attribute("value", tag.description, 0)}>
			<button class="${"btn btn-primary text-dark"}">\u041E\u0442\u043C\u0435\u043D\u0430</button>
			<button class="${"btn btn-primary text-dark"}">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button></div></div>`;
        }
      })}

<div class="${"bg-light text-dark rounded p-3"}"><h5 class="${"mb-3"}">\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0442\u0435\u0433\u0438</h5>
	${each(tags, (item, i) => {
        return `<div class="${"btn-group btn-group-sm me-2 mb-2"}"><div class="${"d-flex text-dark border border-primary pb-1 px-2 rounded-start align-items-center"}" style="${"cursor:default;"}">${escape(item.name)}</div>
			<div class="${"btn btn-primary text-dark"}"><i class="${"fa-solid fa-angle-left"}"></i></div>
			<div class="${"btn btn-primary text-dark"}"><i class="${"fa-solid fa-angle-right"}"></i></div>
			<div class="${"btn btn-primary text-dark"}"><i class="${"fa-solid fa-pencil"}"></i></div>
			<div class="${"btn btn-primary text-dark"}"><i class="${"fa-solid fa-trash text-danger"}"></i></div>
		</div>`;
      })}</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/26.js
var __exports27 = {};
__export(__exports27, {
  component: () => component27,
  file: () => file27,
  imports: () => imports27,
  index: () => index27,
  stylesheets: () => stylesheets27
});
var index27, component27, file27, imports27, stylesheets27;
var init__27 = __esm({
  ".svelte-kit/output/server/nodes/26.js"() {
    index27 = 26;
    component27 = async () => (await Promise.resolve().then(() => (init_page_svelte20(), page_svelte_exports20))).default;
    file27 = "_app/immutable/components/pages/admin/tags/_page.svelte-639d9822.js";
    imports27 = ["_app/immutable/components/pages/admin/tags/_page.svelte-639d9822.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/PageTitleWrap-f2fbe6d6.js", "_app/immutable/chunks/Tag-44811674.js", "_app/immutable/chunks/firebase-1cc93dd2.js"];
    stylesheets27 = [];
  }
});

// .svelte-kit/output/server/entries/pages/android/schedule/_page.svelte.js
var page_svelte_exports21 = {};
__export(page_svelte_exports21, {
  default: () => Page21
});
var Page21;
var init_page_svelte21 = __esm({
  ".svelte-kit/output/server/entries/pages/android/schedule/_page.svelte.js"() {
    init_chunks();
    init_firebase();
    init_index_esm();
    init_Month();
    init_writableData();
    init_PageTitleWrap();
    init_Spinner();
    Page21 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $month, $$unsubscribe_month;
      $$unsubscribe_month = subscribe(scheduleMonth, (value) => $month = value);
      let m = "";
      $$unsubscribe_month();
      return `<div class="${"no-print"}">${validate_component(PageTitleWrap, "PageTitleWrap").$$render(
        $$result,
        {
          title: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0431\u043E\u0433\u043E\u0441\u043B\u0443\u0436\u0435\u043D\u0438\u0439",
          _class: "mx-0 mx-md-1"
        },
        {},
        {
          navigation: () => {
            return `<div slot="${"navigation"}"><div class="${"input-group me-3 no-print mt-md-0 mt-2"}"><span class="${"input-group-text bg-primary text-dark border-0"}">\u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443:</span>
				<input class="${"form-control bg-light text-dark border-0"}" type="${"month"}"${add_attribute("value", m, 0)}></div></div>`;
          }
        }
      )}</div>

${$month.fildsDayNotEmpty ? `${$month.fildsDayNotEmpty.length > 0 ? `${validate_component(Month_1, "Month").$$render($$result, { month: $month }, {}, {})}` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/27.js
var __exports28 = {};
__export(__exports28, {
  component: () => component28,
  file: () => file28,
  imports: () => imports28,
  index: () => index28,
  stylesheets: () => stylesheets28
});
var index28, component28, file28, imports28, stylesheets28;
var init__28 = __esm({
  ".svelte-kit/output/server/nodes/27.js"() {
    index28 = 27;
    component28 = async () => (await Promise.resolve().then(() => (init_page_svelte21(), page_svelte_exports21))).default;
    file28 = "_app/immutable/components/pages/android/schedule/_page.svelte-b15fdf2d.js";
    imports28 = ["_app/immutable/components/pages/android/schedule/_page.svelte-b15fdf2d.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/firebase-1cc93dd2.js", "_app/immutable/chunks/Month-7be1f9b4.js", "_app/immutable/chunks/writableData-689bbc33.js", "_app/immutable/chunks/Tag-44811674.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/PageTitleWrap-f2fbe6d6.js", "_app/immutable/chunks/Spinner-6da39624.js"];
    stylesheets28 = [];
  }
});

// .svelte-kit/output/server/entries/pages/auth/login/_page.svelte.js
var page_svelte_exports22 = {};
__export(page_svelte_exports22, {
  default: () => Page22
});
var Page22;
var init_page_svelte22 = __esm({
  ".svelte-kit/output/server/entries/pages/auth/login/_page.svelte.js"() {
    init_chunks();
    init_firebase();
    init_index_esm4();
    Page22 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let credential = { email: "", password: "" };
      let errorMessage = "";
      return `<div class="${"d-flex justify-content-center align-items-center"}" style="${"height: 100vh;"}"><div class="${"bg-light text-dark p-3 rounded"}"><b class="${"text-uppercase"}">\u0412\u0445\u043E\u0434 \u0434\u043B\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u0441\u0430\u0439\u0442\u0430</b>
		<div class="${"text-danger small"}"><!-- HTML_TAG_START -->${errorMessage}<!-- HTML_TAG_END --></div>
		<div class="${"mt-4"}"><div class="${"input-group mb-2"}"><input class="${"form-control"}" placeholder="${"email"}"${add_attribute("value", credential.email, 0)}></div>
			<div class="${"input-group mb-4"}"><input class="${"form-control"}" type="${"password"}" placeholder="${"\u043F\u0430\u0440\u043E\u043B\u044C"}"${add_attribute("value", credential.password, 0)}></div>
			<div class="${"d-flex justify-content-between align-items-center"}"><button class="${"btn btn-dark text-light"}">\u0412\u043E\u0439\u0442\u0438</button>
				<button class="${"btn btn-light text-dark"}">\u041E\u0442\u043C\u0435\u043D\u0430</button></div></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/28.js
var __exports29 = {};
__export(__exports29, {
  component: () => component29,
  file: () => file29,
  imports: () => imports29,
  index: () => index29,
  stylesheets: () => stylesheets29
});
var index29, component29, file29, imports29, stylesheets29;
var init__29 = __esm({
  ".svelte-kit/output/server/nodes/28.js"() {
    index29 = 28;
    component29 = async () => (await Promise.resolve().then(() => (init_page_svelte22(), page_svelte_exports22))).default;
    file29 = "_app/immutable/components/pages/auth/login/_page.svelte-7f16efc4.js";
    imports29 = ["_app/immutable/components/pages/auth/login/_page.svelte-7f16efc4.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/firebase-1cc93dd2.js"];
    stylesheets29 = [];
  }
});

// .svelte-kit/output/server/entries/pages/auth/registration/_page.svelte.js
var page_svelte_exports23 = {};
__export(page_svelte_exports23, {
  default: () => Page23
});
var Page23;
var init_page_svelte23 = __esm({
  ".svelte-kit/output/server/entries/pages/auth/registration/_page.svelte.js"() {
    init_chunks();
    Page23 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/29.js
var __exports30 = {};
__export(__exports30, {
  component: () => component30,
  file: () => file30,
  imports: () => imports30,
  index: () => index30,
  stylesheets: () => stylesheets30
});
var index30, component30, file30, imports30, stylesheets30;
var init__30 = __esm({
  ".svelte-kit/output/server/nodes/29.js"() {
    index30 = 29;
    component30 = async () => (await Promise.resolve().then(() => (init_page_svelte23(), page_svelte_exports23))).default;
    file30 = "_app/immutable/components/pages/auth/registration/_page.svelte-4eb8a4b3.js";
    imports30 = ["_app/immutable/components/pages/auth/registration/_page.svelte-4eb8a4b3.js", "_app/immutable/chunks/index-0e241859.js"];
    stylesheets30 = [];
  }
});

// .svelte-kit/output/server/entries/pages/fullscreen/photos/_uid_/_page.svelte.js
var page_svelte_exports24 = {};
__export(page_svelte_exports24, {
  default: () => Page24
});
function guard(name6) {
  return () => {
    throw new Error(`Cannot call ${name6}(...) on the server`);
  };
}
var goto, Page24;
var init_page_svelte24 = __esm({
  ".svelte-kit/output/server/entries/pages/fullscreen/photos/_uid_/_page.svelte.js"() {
    init_chunks();
    init_stores();
    init_Album2();
    init_firebase();
    init_index_esm();
    goto = guard("goto");
    Page24 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => value);
      let album = new Album();
      document.documentElement.requestFullscreen();
      document.onfullscreenchange = (e) => {
        if (!document.fullscreenElement) {
          goto(`/photos`);
        }
      };
      $$unsubscribe_page();
      return `${album.photos.length > 0 ? `<button class="${"btn btn-close btn-close-white position-absolute m-3"}" style="${"z-index: 1000; right:0; top:0"}"></button>
	<div id="${"carouselExampleIndicators"}" class="${"carousel slide"}" data-bs-ride="${"carousel"}">${album.photos.length > 1 ? `<div class="${"carousel-indicators"}">${each(album.photos, (photo, i) => {
        return `<button data-bs-target="${"#carouselExampleIndicators"}"${add_attribute("class", i == 0 ? "active" : "", 0)}${add_attribute("data-bs-slide-to", i.toString(), 0)}></button>`;
      })}</div>` : ``}
		<div class="${"carousel-inner"}">${each(album.photos, (photo, i) => {
        return `<div class="${"carousel-item " + escape(i == 0 ? "active" : "", true)}"><div class="${"img-fluid h-100"}" style="${"background-image: url(" + escape(photo.url, true) + "); background-repeat: no-repeat; background-position: center; background-size: contain; min-height:100vh;"}"></div>
					${photo.title ? `<div class="${"carousel-caption d-none d-md-block mb-2"}">${escape(photo.title)}
						</div>` : ``}
				</div>`;
      })}</div>
		${album.photos.length > 1 ? `<button class="${"carousel-control-prev"}" data-bs-target="${"#carouselExampleIndicators"}" data-bs-slide="${"prev"}"><span class="${"carousel-control-prev-icon"}"></span>
				<span class="${"visually-hidden"}">\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439</span></button>
			<button class="${"carousel-control-next"}" data-bs-target="${"#carouselExampleIndicators"}" data-bs-slide="${"next"}"><span class="${"carousel-control-next-icon"}"></span>
				<span class="${"visually-hidden"}">\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439</span></button>` : ``}</div>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/30.js
var __exports31 = {};
__export(__exports31, {
  component: () => component31,
  file: () => file31,
  imports: () => imports31,
  index: () => index31,
  stylesheets: () => stylesheets31
});
var index31, component31, file31, imports31, stylesheets31;
var init__31 = __esm({
  ".svelte-kit/output/server/nodes/30.js"() {
    index31 = 30;
    component31 = async () => (await Promise.resolve().then(() => (init_page_svelte24(), page_svelte_exports24))).default;
    file31 = "_app/immutable/components/pages/fullscreen/photos/_uid_/_page.svelte-3268a1fa.js";
    imports31 = ["_app/immutable/components/pages/fullscreen/photos/_uid_/_page.svelte-3268a1fa.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/navigation-84efccde.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js", "_app/immutable/chunks/stores-612bd49a.js", "_app/immutable/chunks/Album-af605161.js", "_app/immutable/chunks/firebase-1cc93dd2.js"];
    stylesheets31 = [];
  }
});

// .svelte-kit/output/server/index.js
init_chunks();

// node_modules/devalue/devalue.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var DevalueError = class extends Error {
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!is_primitive(thing)) {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== object_proto_names) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map(
          (v, i) => i in thing ? stringify2(v) : ""
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name6, thing) => {
      params.push(name6);
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name6}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name6}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name6}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name6}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name6 = "";
  do {
    name6 = chars[num % chars.length] + name6;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name6) ? `${name6}0` : name6;
}
function is_primitive(thing) {
  return Object(thing) !== thing;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_string(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

// .svelte-kit/output/server/index.js
var cookie = __toESM(require_cookie(), 1);
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
init_index2();
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.data_2 === void 0 && $$bindings.data_2 && data_2 !== void 0)
    $$bindings.data_2(data_2);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${components[2] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1 }, {}, {
        default: () => {
          return `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, { data: data_2, form }, {}, {})}`;
        }
      })}` : `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, form }, {}, {})}`}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, form }, {}, {})}`}

${``}`;
});
var HttpError = class {
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class {
  constructor(status, location2) {
    this.status = status;
    this.location = location2;
  }
};
var ValidationError = class {
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
function error(status, message) {
  return new HttpError(status, message);
}
function json(data, init2) {
  const headers = new Headers(init2 == null ? void 0 : init2.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init2,
    headers
  });
}
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
var DATA_SUFFIX = "/__data.js";
var DEFAULT_SERIALIZE_OPTIONS = {
  httpOnly: true,
  secure: true,
  sameSite: "lax"
};
function get_cookies(request, url) {
  const new_cookies = /* @__PURE__ */ new Map();
  const cookies = {
    get(name6, opts) {
      const c = new_cookies.get(name6);
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decode2 = (opts == null ? void 0 : opts.decode) || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(request.headers.get("cookie") ?? "", { decode: decode2 });
      return req_cookies[name6];
    },
    set(name6, value, opts = {}) {
      new_cookies.set(name6, {
        name: name6,
        value,
        options: {
          ...DEFAULT_SERIALIZE_OPTIONS,
          ...opts
        }
      });
    },
    delete(name6, opts = {}) {
      new_cookies.set(name6, {
        name: name6,
        value: "",
        options: {
          ...DEFAULT_SERIALIZE_OPTIONS,
          ...opts,
          maxAge: 0
        }
      });
    },
    serialize(name6, value, opts) {
      return (0, import_cookie.serialize)(name6, value, {
        ...DEFAULT_SERIALIZE_OPTIONS,
        ...opts
      });
    }
  };
  return { cookies, new_cookies };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name: name6, value, options } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name6, value, options));
  }
}
function check_method_names(mod) {
  ["get", "post", "put", "patch", "del"].forEach((m) => {
    if (m in mod) {
      const replacement = m === "del" ? "DELETE" : m.toUpperCase();
      throw Error(
        `Endpoint method "${m}" has changed to "${replacement}". See https://github.com/sveltejs/kit/discussions/5359 for more information.`
      );
    }
  });
}
var GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return new Response(`${method} method not allowed`, {
    status: 405,
    headers: {
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function data_response(data) {
  const headers = {
    "content-type": "application/javascript",
    "cache-control": "private, no-store"
  };
  try {
    return new Response(`window.__sveltekit_data = ${devalue(data)}`, { headers });
  } catch (e) {
    const error22 = e;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error22.path);
    const message = match ? `${error22.message} (data.${match[2]})` : error22.message;
    return new Response(`throw new Error(${JSON.stringify(message)})`, { headers });
  }
}
function get_option(nodes, option) {
  return nodes.reduce((value, node) => {
    var _a, _b;
    for (const thing of [node == null ? void 0 : node.server, node == null ? void 0 : node.shared]) {
      if (thing && ("router" in thing || "hydrate" in thing)) {
        throw new Error(
          "`export const hydrate` and `export const router` have been replaced with `export const csr`. See https://github.com/sveltejs/kit/pull/6446"
        );
      }
    }
    return ((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a[option]) ?? ((_b = node == null ? void 0 : node.server) == null ? void 0 : _b[option]) ?? value;
  }, void 0);
}
function static_error_page(options, status, message) {
  return new Response(options.error_template({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
function handle_fatal_error(event, options, error22) {
  const status = error22 instanceof HttpError ? error22.status : 500;
  const body = handle_error_and_jsonify(event, options, error22);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.url.pathname.endsWith(DATA_SUFFIX) || type === "application/json") {
    return new Response(JSON.stringify(body), {
      status,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  return static_error_page(options, status, body.message);
}
function handle_error_and_jsonify(event, options, error22) {
  if (error22 instanceof HttpError) {
    return error22.body;
  } else {
    return options.handle_error(error22, event);
  }
}
function redirect_response(status, location2, cookies = []) {
  const response = new Response(void 0, {
    status,
    headers: { location: location2 }
  });
  add_cookies_to_headers(response.headers, cookies);
  return response;
}
async function render_endpoint(event, mod, state) {
  const method = event.request.method;
  check_method_names(mod);
  let handler2 = mod[method];
  if (!handler2 && method === "HEAD") {
    handler2 = mod.GET;
  }
  if (!handler2) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.initiator) {
      throw new Error(`${event.routeId} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    const response = await handler2(
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (error22) {
    if (error22 instanceof Redirect) {
      return new Response(void 0, {
        status: error22.status,
        headers: { location: error22.location }
      });
    } else if (error22 instanceof ValidationError) {
      return json(error22.data, { status: error22.status });
    }
    throw error22;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (method === "PUT" || method === "PATCH" || method === "DELETE") {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter((val) => val != null);
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function normalize_error(error22) {
  return error22;
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    return new Response("POST method not allowed. No actions exist for this page", {
      status: 405,
      headers: {
        allow: "GET"
      }
    });
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ValidationError) {
      check_serializability(data.data, event.routeId, "data");
      return action_json({ type: "invalid", status: data.status, data: data.data });
    } else {
      check_serializability(data, event.routeId, "data");
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        data
      });
    }
  } catch (e) {
    const error22 = normalize_error(e);
    if (error22 instanceof Redirect) {
      return action_json({
        type: "redirect",
        status: error22.status,
        location: error22.location
      });
    }
    if (!(error22 instanceof HttpError)) {
      options.handle_error(error22, event);
    }
    return action_json(
      {
        type: "error",
        error: handle_error_and_jsonify(event, options, error22)
      },
      {
        status: error22 instanceof HttpError ? error22.status : 500
      }
    );
  }
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event, leaf_node) {
  return leaf_node.server && event.request.method !== "GET" && event.request.method !== "HEAD";
}
async function handle_action_request(event, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    event.setHeaders({
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ValidationError) {
      return { type: "invalid", status: data.status, data: data.data };
    } else {
      return {
        type: "success",
        status: 200,
        data
      };
    }
  } catch (e) {
    const error22 = normalize_error(e);
    if (error22 instanceof Redirect) {
      return {
        type: "redirect",
        status: error22.status,
        location: error22.location
      };
    }
    return { type: "error", error: error22 };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions) {
  var _a;
  const url = new URL(event.request.url);
  let name6 = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name6 = param[0].slice(1);
      if (name6 === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name6];
  if (!action) {
    throw new Error(`No action with name '${name6}' found`);
  }
  const type = (_a = event.request.headers.get("content-type")) == null ? void 0 : _a.split("; ")[0];
  if (type !== "application/x-www-form-urlencoded" && type !== "multipart/form-data") {
    throw new Error(`Actions expect form-encoded data (received ${type})`);
  }
  return action(event);
}
function maybe_throw_migration_error(server2) {
  for (const method of ["POST", "PUT", "PATCH", "DELETE"]) {
    if (server2[method]) {
      throw new Error(
        `${method} method no longer allowed in +page.server, use actions instead. See the PR for more info: https://github.com/sveltejs/kit/pull/6469`
      );
    }
  }
}
function check_serializability(value, id, path) {
  const type = typeof value;
  if (type === "string" || type === "boolean" || type === "number" || type === "undefined") {
    return;
  }
  if (type === "object") {
    if (!value)
      return;
    if (Array.isArray(value)) {
      value.forEach((child2, i) => {
        check_serializability(child2, id, `${path}[${i}]`);
      });
      return;
    }
    if (Object.getPrototypeOf(value) === Object.prototype) {
      for (const key2 in value) {
        check_serializability(value[key2], id, `${path}.${key2}`);
      }
      return;
    }
  }
  throw new Error(`${path} returned from action in ${id} cannot be serialized as JSON`);
}
function create_fetch({ event, options, state, route, prerender_default, resolve_opts }) {
  const fetched = [];
  const initial_cookies = cookie.parse(event.request.headers.get("cookie") || "");
  const set_cookies = [];
  function get_cookie_header(url, header) {
    const new_cookies = {};
    for (const cookie2 of set_cookies) {
      if (!domain_matches(url.hostname, cookie2.options.domain))
        continue;
      if (!path_matches(url.pathname, cookie2.options.path))
        continue;
      new_cookies[cookie2.name] = cookie2.value;
    }
    const combined_cookies = {
      ...initial_cookies,
      ...new_cookies,
      ...cookie.parse(header ?? "")
    };
    return Object.entries(combined_cookies).map(([name6, value]) => `${name6}=${value}`).join("; ");
  }
  const fetcher = async (info, init2) => {
    const request = normalize_fetch_input(info, init2, event.url);
    const request_body = init2 == null ? void 0 : init2.body;
    let dependency;
    const response = await options.hooks.handleFetch({
      event,
      request,
      fetch: async (info2, init3) => {
        const request2 = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request2.url);
        if (!request2.headers.has("origin")) {
          request2.headers.set("origin", event.url.origin);
        }
        if ((request2.method === "GET" || request2.method === "HEAD") && (request2.mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request2.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && request2.credentials !== "omit") {
            const cookie2 = get_cookie_header(url, request2.headers.get("cookie"));
            if (cookie2)
              request2.headers.set("cookie", cookie2);
          }
          let response3 = await fetch(request2);
          if (request2.mode === "no-cors") {
            response3 = new Response("", {
              status: response3.status,
              statusText: response3.statusText,
              headers: response3.headers
            });
          } else {
            if (url.origin !== event.url.origin) {
              const acao = response3.headers.get("access-control-allow-origin");
              if (!acao || acao !== event.url.origin && acao !== "*") {
                throw new Error(
                  `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
                );
              }
            }
          }
          return response3;
        }
        let response2;
        const prefix2 = options.paths.assets || options.paths.base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix2) ? decoded.slice(prefix2.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file32 = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(options.read(file32), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request2);
        }
        if (request2.credentials !== "omit") {
          const cookie2 = get_cookie_header(url, request2.headers.get("cookie"));
          if (cookie2) {
            request2.headers.set("cookie", cookie2);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request2.headers.has("authorization")) {
            request2.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string") {
          throw new Error("Request body must be a string");
        }
        response2 = await respond(request2, options, {
          prerender_default,
          ...state,
          initiator: route
        });
        if (state.prerendering) {
          dependency = { response: response2, body: null };
          state.prerendering.dependencies.set(url.pathname, dependency);
        }
        const set_cookie = response2.headers.get("set-cookie");
        if (set_cookie) {
          set_cookies.push(
            ...set_cookie_parser.splitCookiesString(set_cookie).map((str) => {
              const { name: name6, value, ...options2 } = set_cookie_parser.parseString(str);
              return { name: name6, value, options: options2 };
            })
          );
        }
        return response2;
      }
    });
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: request.url.startsWith(event.url.origin) ? request.url.slice(event.url.origin.length) : request.url,
              method: request.method,
              request_body,
              response_body: body,
              response: response2
            });
            const get = response2.headers.get;
            response2.headers.get = (key3) => {
              const lower = key3.toLowerCase();
              const value = get.call(response2.headers, lower);
              if (value && !lower.startsWith("x-sveltekit-")) {
                const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
                if (!included) {
                  throw new Error(
                    `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#handle`
                  );
                }
              }
              return value;
            };
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    return proxy;
  };
  return { fetcher, fetched, cookies: set_cookies };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
    return inspect(url, opts);
  };
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
async function unwrap_promises(object) {
  var _a;
  for (const key2 in object) {
    if (typeof ((_a = object[key2]) == null ? void 0 : _a.then) === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
async function load_server_data({ event, state, node, parent: parent2 }) {
  var _a;
  if (!(node == null ? void 0 : node.server))
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await ((_a = node.server.load) == null ? void 0 : _a.call(null, {
    ...event,
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[key2];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent2();
    },
    url
  }));
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses: {
      dependencies: uses.dependencies.size > 0 ? Array.from(uses.dependencies) : void 0,
      params: uses.params.size > 0 ? Array.from(uses.params) : void 0,
      parent: uses.parent ? 1 : void 0,
      url: uses.url ? 1 : void 0
    }
  };
}
async function load_data({ event, fetcher, node, parent: parent2, server_data_promise }) {
  var _a;
  const server_data_node = await server_data_promise;
  if (!((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a.load)) {
    return (server_data_node == null ? void 0 : server_data_node.data) ?? null;
  }
  const load_event = {
    url: event.url,
    params: event.params,
    data: (server_data_node == null ? void 0 : server_data_node.data) ?? null,
    routeId: event.routeId,
    fetch: fetcher,
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent: parent2
  };
  Object.defineProperties(load_event, {
    session: {
      get() {
        throw new Error(
          "session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
        );
      },
      enumerable: false
    }
  });
  const data = await node.shared.load.call(null, load_event);
  return data ? unwrap_promises(data) : null;
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_body) {
    attrs.push(`data-hash=${escape_html_attr(hash(fetched.request_body))}`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  constructor(use_hashes, directives, nonce, dev) {
    __privateAdd(this, _use_hashes, void 0);
    __privateAdd(this, _script_needs_csp, void 0);
    __privateAdd(this, _style_needs_csp, void 0);
    __privateAdd(this, _directives, void 0);
    __privateAdd(this, _script_src, void 0);
    __privateAdd(this, _style_src, void 0);
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, dev ? { ...directives } : directives);
    const d = __privateGet(this, _directives);
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev) {
    var _a, _b;
    super(use_hashes, directives, nonce, dev);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = ((_a = directives["report-to"]) == null ? void 0 : _a.length) ?? 0 > 0;
      const has_report_uri = ((_b = directives["report-uri"]) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  constructor({ mode, directives, reportOnly }, { prerender, dev }) {
    __publicField(this, "nonce", generate_nonce());
    __publicField(this, "csp_provider");
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  cookies,
  options,
  state,
  page_config,
  status,
  error: error22 = null,
  event,
  resolve_opts,
  action_result
}) {
  var _a;
  if (state.prerendering) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options.manifest._;
  const stylesheets32 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = (action_result == null ? void 0 : action_result.type) === "success" || (action_result == null ? void 0 : action_result.type) === "invalid" ? action_result.data ?? null : null;
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      components: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data = {};
    for (let i = 0; i < branch.length; i += 1) {
      data = { ...data, ...branch[i].data };
      props[`data_${i}`] = data;
    }
    props.page = {
      error: error22,
      params: event.params,
      routeId: event.routeId,
      status,
      url: event.url,
      data,
      form: form_value
    };
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    rendered = options.root.render(props);
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets32.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let { head, html: body } = rendered;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body);
  let assets2;
  if (options.paths.assets) {
    assets2 = options.paths.assets;
  } else if ((_a = state.prerendering) == null ? void 0 : _a.fallback) {
    assets2 = options.paths.base;
  } else {
    const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
    assets2 = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => path.startsWith("/") ? path : `${assets2}/${path}`;
  const serialized = { data: "", form: "null" };
  try {
    serialized.data = devalue(branch.map(({ server_data }) => server_data));
  } catch (e) {
    const error3 = e;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error3.path);
    if (match)
      throw new Error(`${error3.message} (data.${match[2]})`);
    throw error3;
  }
  if (form_value) {
    serialized.form = devalue(form_value);
  }
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets32) {
    const path = prefixed(dep);
    const attributes = [];
    if (csp.style_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
      link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
    }
    attributes.unshift('rel="stylesheet"');
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  if (page_config.csr) {
    const init_app = `
			import { start } from ${s(prefixed(entry.file))};

			start({
				env: ${s(options.public_env)},
				hydrate: ${page_config.ssr ? `{
					status: ${status},
					error: ${s(error22)},
					node_ids: [${branch.map(({ node }) => node.index).join(", ")}],
					params: ${devalue(event.params)},
					routeId: ${s(event.routeId)},
					data: ${serialized.data},
					form: ${serialized.form}
				}` : "null"},
				paths: ${s(options.paths)},
				target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
				trailing_slash: ${s(options.trailing_slash)}
			});
		`;
    for (const dep of modulepreloads) {
      const path = prefixed(dep);
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (state.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
  }
  if (page_config.ssr && page_config.csr) {
    body += `
	${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n	")}`;
  }
  if (options.service_worker) {
    const init_service_worker = `
			if ('serviceWorker' in navigator) {
				addEventListener('load', function () {
					navigator.serviceWorker.register('${prefixed("service-worker.js")}');
				});
			}
		`;
    csp.add_script(init_service_worker);
    head += `
		<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  const html = await resolve_opts.transformPageChunk({
    html: options.app_template({ head, body, assets: assets2, nonce: csp.nonce }),
    done: true
  }) || "";
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    add_cookies_to_headers(headers, cookies);
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  return new Response(html, {
    status,
    headers
  });
}
async function respond_with_error({ event, options, state, status, error: error22, resolve_opts }) {
  const { fetcher, fetched, cookies } = create_fetch({
    event,
    options,
    state,
    route: GENERIC_ERROR,
    resolve_opts
  });
  try {
    const branch = [];
    const default_layout = await options.manifest._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    if (ssr) {
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetcher,
        node: default_layout,
        parent: async () => ({}),
        server_data_promise,
        state
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await options.manifest._.nodes[1](),
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: handle_error_and_jsonify(event, options, error22),
      branch,
      fetched,
      cookies,
      event,
      resolve_opts
    });
  } catch (error3) {
    if (error3 instanceof Redirect) {
      return redirect_response(error3.status, error3.location, cookies);
    }
    return static_error_page(
      options,
      error3 instanceof HttpError ? error3.status : 500,
      handle_error_and_jsonify(event, options, error3).message
    );
  }
}
async function render_page(event, route, page2, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  if (is_action_json_request(event)) {
    const node = await options.manifest._.nodes[page2.leaf]();
    if (node.server) {
      return handle_action_json_request(event, options, node.server);
    }
  }
  try {
    const nodes = await Promise.all([
      ...page2.layouts.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()),
      options.manifest._.nodes[page2.leaf]()
    ]);
    const leaf_node = nodes.at(-1);
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event, leaf_node)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if ((action_result == null ? void 0 : action_result.type) === "redirect") {
        return redirect_response(303, action_result.location);
      }
      if ((action_result == null ? void 0 : action_result.type) === "error") {
        const error22 = action_result.error;
        status = error22 instanceof HttpError ? error22.status : 500;
      }
      if ((action_result == null ? void 0 : action_result.type) === "invalid") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node == null ? void 0 : node.server);
    const data_pathname = event.url.pathname.replace(/\/$/, "") + DATA_SUFFIX;
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod && mod.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    const { fetcher, fetched, cookies } = create_fetch({
      event,
      options,
      state,
      route,
      prerender_default: should_prerender,
      resolve_opts
    });
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        cookies,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && (action_result == null ? void 0 : action_result.type) === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent2 = await server_promises[j];
                if (parent2)
                  Object.assign(data, await parent2.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetcher,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            server_data_promise: server_promises[i],
            state
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = `window.__sveltekit_data = ${JSON.stringify({
                type: "redirect",
                location: err.location
              })}`;
              state.prerendering.dependencies.set(data_pathname, {
                response: new Response(body),
                body
              });
            }
            return redirect_response(err.status, err.location, cookies);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error22 = handle_error_and_jsonify(event, options, err);
          while (i--) {
            if (page2.errors[i]) {
              const index32 = page2.errors[i];
              const node2 = await options.manifest._.nodes[index32]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error22,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched,
                cookies
              });
            }
          }
          return static_error_page(options, status2, error22.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      const body = `window.__sveltekit_data = ${devalue({
        type: "data",
        nodes: branch.map((branch_node) => branch_node == null ? void 0 : branch_node.server_data)
      })}`;
      state.prerendering.dependencies.set(data_pathname, {
        response: new Response(body),
        body
      });
    }
    return await render_response({
      event,
      options,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched,
      cookies
    });
  } catch (error22) {
    return await respond_with_error({
      event,
      options,
      state,
      status: 500,
      error: error22,
      resolve_opts
    });
  }
}
function exec(match, names, types, matchers) {
  const params = {};
  for (let i = 0; i < names.length; i += 1) {
    const name6 = names[i];
    const type = types[i];
    const value = match[i + 1] || "";
    if (type) {
      const matcher = matchers[type];
      if (!matcher)
        throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value))
        return;
    }
    params[name6] = value;
  }
  return params;
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
async function render_data(event, route, options, state) {
  var _a;
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = ((_a = event.url.searchParams.get("__invalid")) == null ? void 0 : _a.split("").map((x) => x === "y")) ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(
      url.pathname.slice(0, -DATA_SUFFIX.length),
      options.trailing_slash
    );
    url.searchParams.delete("__invalid");
    url.searchParams.delete("__id");
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return {
              type: "skip"
            };
          }
          const node = n == void 0 ? n : await options.manifest._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent2 = await functions[j]();
                if (parent2) {
                  Object.assign(data, parent2.data);
                }
              }
              return data;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return {
          type: "skip"
        };
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch((error22) => {
          if (error22 instanceof Redirect) {
            throw error22;
          }
          length = Math.min(length, i + 1);
          return {
            type: "error",
            error: handle_error_and_jsonify(event, options, error22),
            status: error22 instanceof HttpError ? error22.status : void 0
          };
        })
      )
    );
    const server_data = {
      type: "data",
      nodes: nodes.slice(0, length)
    };
    return data_response(server_data);
  } catch (e) {
    const error22 = normalize_error(e);
    if (error22 instanceof Redirect) {
      const server_data = {
        type: "redirect",
        location: error22.location
      };
      return data_response(server_data);
    } else {
      return data_response(handle_error_and_jsonify(event, options, error22));
    }
  }
}
var default_transform = ({ html }) => html;
var default_filter = () => false;
async function respond(request, options, state) {
  var _a, _b, _c, _d;
  let url = new URL(request.url);
  if (options.csrf.check_origin) {
    const type = (_a = request.headers.get("content-type")) == null ? void 0 : _a.split(";")[0];
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url.origin && (type === "application/x-www-form-urlencoded" || type === "multipart/form-data");
    if (forbidden) {
      return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
        status: 403
      });
    }
  }
  let decoded;
  try {
    decoded = decodeURI(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !((_b = state.prerendering) == null ? void 0 : _b.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request)
    decoded = decoded.slice(0, -DATA_SUFFIX.length) || "/";
  if (!((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  if ((route == null ? void 0 : route.page) && !is_data_request) {
    const normalized = normalize_path(url.pathname, options.trailing_slash);
    if (normalized !== url.pathname && !((_d = state.prerendering) == null ? void 0 : _d.fallback)) {
      return new Response(void 0, {
        status: 301,
        headers: {
          "x-sveltekit-normalize": "1",
          location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
        }
      });
    }
  }
  const headers = {};
  const { cookies, new_cookies } = get_cookies(request, url);
  if (state.prerendering)
    disable_search(url);
  const event = {
    cookies,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-netlify"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    routeId: route && route.id,
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = value;
          }
        }
      }
    },
    url
  };
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error(
        "To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details
      );
    }
  };
  Object.defineProperties(event, {
    clientAddress: removed("clientAddress", "getClientAddress"),
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter
  };
  async function resolve(event2, opts) {
    var _a2;
    try {
      if (opts) {
        if ("transformPage" in opts) {
          throw new Error(
            "transformPage has been replaced by transformPageChunk \u2014 see https://github.com/sveltejs/kit/pull/5657 for more information"
          );
        }
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter
        };
      }
      if ((_a2 = state.prerendering) == null ? void 0 : _a2.fallback) {
        return await render_response({
          event: event2,
          options,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          cookies: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(event2, route, options, state);
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          response = await render_page(event2, route, route.page, options, state, resolve_opts);
        } else {
          throw new Error("This should never happen");
        }
        return response;
      }
      if (state.initiator === GENERIC_ERROR) {
        return new Response("Internal Server Error", {
          status: 500
        });
      }
      if (!state.initiator) {
        return await respond_with_error({
          event: event2,
          options,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return new Response("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      const error22 = e instanceof HttpError ? e : coalesce_to_error(e);
      return handle_fatal_error(event2, options, error22);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
  try {
    const response = await options.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        if (!is_data_request) {
          for (const key2 in headers) {
            const value = headers[key2];
            response2.headers.set(key2, value);
          }
        }
        add_cookies_to_headers(response2.headers, Array.from(new_cookies.values()));
        if (state.prerendering && event2.routeId !== null) {
          response2.headers.set("x-sveltekit-routeid", event2.routeId);
        }
        return response2;
      }),
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = response.headers.get("etag");
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of ["cache-control", "content-location", "date", "expires", "vary"]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    return response;
  } catch (e) {
    const error22 = coalesce_to_error(e);
    return handle_fatal_error(event, options, error22);
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var app_template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\r\n<html lang="ru">\r\n\r\n<head>\r\n	<meta charset="utf-8" />\r\n	<link rel="icon"\r\n		  href="' + assets2 + '/favicon.png" />\r\n	<meta name="viewport"\r\n		  content="width=device-width" />\r\n	' + head + '\r\n	<link rel="stylesheet"\r\n		  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">\r\n	<link rel="stylesheet"\r\n		  href="' + assets2 + '/print.css" />\r\n\r\n	<!-- Yandex.Metrika counter -->\r\n	<script type="text/javascript">\r\n		(function (m, e, t, r, i, k, a) {\r\n			m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };\r\n			m[i].l = 1 * new Date();\r\n			for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }\r\n			k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)\r\n		})\r\n			(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\r\n\r\n		ym(92058874, "init", {\r\n			clickmap: true,\r\n			trackLinks: true,\r\n			accurateTrackBounce: true,\r\n			webvisor: true\r\n		});\r\n	<\/script>\r\n	<noscript>\r\n		<div><img src="https://mc.yandex.ru/watch/92058874"\r\n				 style="position:absolute; left:-9999px;"\r\n				 alt="" /></div>\r\n	</noscript>\r\n	<!-- /Yandex.Metrika counter -->\r\n\r\n	<meta name="yandex-verification"\r\n		  content="054454fde25167cc" />\r\n	<meta name="google-site-verification"\r\n		  content="3qSOaxePANZmRXAjxDFnn8eLvMADtfjLEABv1lwiKN8" />\r\n</head>\r\n\r\n<body data-sveltekit-preload-data="hover"\r\n	  class="bg-backspace">\r\n	' + body + '\r\n\r\n	<script src="' + assets2 + '/global.js"><\/script>\r\n	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"\r\n			integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"\r\n			crossorigin="anonymous"><\/script>\r\n</body>\r\n\r\n</html>';
var error_template = ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      csrf: {
        check_origin: true
      },
      dev: false,
      handle_error: (error22, event) => {
        return this.options.hooks.handleError({
          error: error22,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        }) ?? { message: event.routeId != null ? "Internal Error" : "Not Found" };
      },
      hooks: null,
      manifest: manifest2,
      paths: { base, assets },
      public_env: {},
      read,
      root: Root,
      service_worker: false,
      app_template,
      app_template_contains_nonce: false,
      error_template,
      trailing_slash: "never"
    };
  }
  async init({ env }) {
    const entries = Object.entries(env);
    Object.fromEntries(entries.filter(([k]) => !k.startsWith("PUBLIC_")));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith("PUBLIC_")));
    this.options.public_env = pub;
    if (!this.options.hooks) {
      const module = await Promise.resolve().then(() => (init_hooks(), hooks_exports));
      if (module.externalFetch) {
        throw new Error("externalFetch has been removed \u2014 use handleFetch instead. See https://github.com/sveltejs/kit/pull/6565 for details");
      }
      this.options.hooks = {
        handle: module.handle || (({ event, resolve }) => resolve(event)),
        handleError: module.handleError || (({ error: error22 }) => console.error(error22.stack)),
        handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
      };
    }
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/netlify-tmp/manifest.js
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["backupDatabase/3 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2022.json", "backupDatabase/8 \u044F\u043D\u0432\u0430\u0440\u044F 2023.json", "bootstrap.dark.min.css", "bootstrap.light.min.css", "favicon.png", "favicon1.svg", "favicon2.png", "global.js", "print.css", "robots.txt", "scripts/changeBootstrap.js", "sitemap.xml", "text.html", "yandex_f8f6756b54734890.html"]),
  mimeTypes: { ".json": "application/json", ".css": "text/css", ".png": "image/png", ".svg": "image/svg+xml", ".js": "application/javascript", ".txt": "text/plain", ".xml": "application/xml", ".html": "text/html" },
  _: {
    entry: { "file": "_app/immutable/start-7b2eb50f.js", "imports": ["_app/immutable/start-7b2eb50f.js", "_app/immutable/chunks/index-0e241859.js", "_app/immutable/chunks/singletons-db86b1c9.js", "_app/immutable/chunks/index-84c2ae5f.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
      () => Promise.resolve().then(() => (init__6(), __exports6)),
      () => Promise.resolve().then(() => (init__7(), __exports7)),
      () => Promise.resolve().then(() => (init__8(), __exports8)),
      () => Promise.resolve().then(() => (init__9(), __exports9)),
      () => Promise.resolve().then(() => (init__10(), __exports10)),
      () => Promise.resolve().then(() => (init__11(), __exports11)),
      () => Promise.resolve().then(() => (init__12(), __exports12)),
      () => Promise.resolve().then(() => (init__13(), __exports13)),
      () => Promise.resolve().then(() => (init__14(), __exports14)),
      () => Promise.resolve().then(() => (init__15(), __exports15)),
      () => Promise.resolve().then(() => (init__16(), __exports16)),
      () => Promise.resolve().then(() => (init__17(), __exports17)),
      () => Promise.resolve().then(() => (init__18(), __exports18)),
      () => Promise.resolve().then(() => (init__19(), __exports19)),
      () => Promise.resolve().then(() => (init__20(), __exports20)),
      () => Promise.resolve().then(() => (init__21(), __exports21)),
      () => Promise.resolve().then(() => (init__22(), __exports22)),
      () => Promise.resolve().then(() => (init__23(), __exports23)),
      () => Promise.resolve().then(() => (init__24(), __exports24)),
      () => Promise.resolve().then(() => (init__25(), __exports25)),
      () => Promise.resolve().then(() => (init__26(), __exports26)),
      () => Promise.resolve().then(() => (init__27(), __exports27)),
      () => Promise.resolve().then(() => (init__28(), __exports28)),
      () => Promise.resolve().then(() => (init__29(), __exports29)),
      () => Promise.resolve().then(() => (init__30(), __exports30)),
      () => Promise.resolve().then(() => (init__31(), __exports31))
    ],
    routes: [
      {
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 7 },
        endpoint: null
      },
      {
        id: "(guest)/contacts",
        pattern: /^\/contacts\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 2], errors: [1, ,], leaf: 8 },
        endpoint: null
      },
      {
        id: "(guest)/photos",
        pattern: /^\/photos\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 2], errors: [1, ,], leaf: 9 },
        endpoint: null
      },
      {
        id: "(guest)/posts",
        pattern: /^\/posts\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 2], errors: [1, ,], leaf: 10 },
        endpoint: null
      },
      {
        id: "(guest)/schedule",
        pattern: /^\/schedule\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 2], errors: [1, ,], leaf: 13 },
        endpoint: null
      },
      {
        id: "admin/contacts",
        pattern: /^\/admin\/contacts\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 3], errors: [1, ,], leaf: 14 },
        endpoint: null
      },
      {
        id: "admin/photos",
        pattern: /^\/admin\/photos\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 3], errors: [1, ,], leaf: 16 },
        endpoint: null
      },
      {
        id: "admin/posts",
        pattern: /^\/admin\/posts\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 3], errors: [1, ,], leaf: 19 },
        endpoint: null
      },
      {
        id: "admin/schedule",
        pattern: /^\/admin\/schedule\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 3], errors: [1, ,], leaf: 22 },
        endpoint: null
      },
      {
        id: "admin/storage",
        pattern: /^\/admin\/storage\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 3], errors: [1, ,], leaf: 24 },
        endpoint: null
      },
      {
        id: "admin/tags",
        pattern: /^\/admin\/tags\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 3], errors: [1, ,], leaf: 26 },
        endpoint: null
      },
      {
        id: "android/schedule",
        pattern: /^\/android\/schedule\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 4], errors: [1, ,], leaf: 27 },
        endpoint: null
      },
      {
        id: "auth/login",
        pattern: /^\/auth\/login\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 5], errors: [1, ,], leaf: 28 },
        endpoint: null
      },
      {
        id: "auth/registration",
        pattern: /^\/auth\/registration\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 5], errors: [1, ,], leaf: 29 },
        endpoint: null
      },
      {
        id: "admin/contacts/edit",
        pattern: /^\/admin\/contacts\/edit\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 3], errors: [1, ,], leaf: 15 },
        endpoint: null
      },
      {
        id: "admin/photos/create",
        pattern: /^\/admin\/photos\/create\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 3], errors: [1, ,], leaf: 17 },
        endpoint: null
      },
      {
        id: "admin/posts/create",
        pattern: /^\/admin\/posts\/create\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 3], errors: [1, ,], leaf: 20 },
        endpoint: null
      },
      {
        id: "admin/schedule/edit",
        pattern: /^\/admin\/schedule\/edit\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 3], errors: [1, ,], leaf: 23 },
        endpoint: null
      },
      {
        id: "admin/storage/test",
        pattern: /^\/admin\/storage\/test\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 3], errors: [1, ,], leaf: 25 },
        endpoint: null
      },
      {
        id: "admin/photos/edit/[uid]",
        pattern: /^\/admin\/photos\/edit\/([^/]+?)\/?$/,
        names: ["uid"],
        types: [null],
        page: { layouts: [0, 3], errors: [1, ,], leaf: 18 },
        endpoint: null
      },
      {
        id: "admin/posts/edit/[uid]",
        pattern: /^\/admin\/posts\/edit\/([^/]+?)\/?$/,
        names: ["uid"],
        types: [null],
        page: { layouts: [0, 3], errors: [1, ,], leaf: 21 },
        endpoint: null
      },
      {
        id: "(guest)/posts/details/[uid]",
        pattern: /^\/posts\/details\/([^/]+?)\/?$/,
        names: ["uid"],
        types: [null],
        page: { layouts: [0, 2], errors: [1, ,], leaf: 11 },
        endpoint: null
      },
      {
        id: "fullscreen/photos/[uid]",
        pattern: /^\/fullscreen\/photos\/([^/]+?)\/?$/,
        names: ["uid"],
        types: [null],
        page: { layouts: [0, 6], errors: [1, ,], leaf: 30 },
        endpoint: null
      },
      {
        id: "(guest)/posts/[tag]",
        pattern: /^\/posts\/([^/]+?)\/?$/,
        names: ["tag"],
        types: [null],
        page: { layouts: [0, 2], errors: [1, ,], leaf: 12 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
var prerendered = /* @__PURE__ */ new Set([]);

// .svelte-kit/netlify-tmp/entry.js
var server = new Server(manifest);
var prefix = `/${manifest.appDir}/`;
var initialized = server.init({
  env: Deno.env.toObject()
});
async function handler(request, context) {
  if (is_static_file(request)) {
    return;
  }
  await initialized;
  return server.respond(request, {
    platform: { context },
    getClientAddress() {
      return context.ip;
    }
  });
}
function is_static_file(request) {
  const url = new URL(request.url);
  if (url.pathname.startsWith(prefix)) {
    return true;
  }
  const pathname = url.pathname.replace(/\/$/, "");
  let file32 = pathname.substring(1);
  try {
    file32 = decodeURIComponent(file32);
  } catch (err) {
  }
  return manifest.assets.has(file32) || manifest.assets.has(file32 + "/index.html") || prerendered.has(pathname || "/");
}
export {
  handler as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//# sourceMappingURL=render.js.map
