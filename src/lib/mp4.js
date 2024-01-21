'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if(key in obj) { Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true}); } else { obj[key] = value; } return obj; }
function _defineProperties(target, props) { for(var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if(protoProps) _defineProperties(Constructor.prototype, protoProps); if(staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, 'prototype', {writable: false}); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, 'string'); return 'symbol' == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if('object' != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if(void 0 !== e) { var i = e.call(t, r || 'default'); if('object' != _typeof(i)) return i; throw new TypeError('@@toPrimitive must return a primitive value.'); } return ('string' === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if(!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
function _typeof(o) { '@babel/helpers - typeof'; return _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(o) { return typeof o; } : function(o) { return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o; }, _typeof(o); }
var eventEmitter = {
  exports: {}
};
var d$1 = {
  exports: {}
};

// ES3 safe
var _undefined$1 = void 0;
var is$4 = function is$4(value) {
  return value !== _undefined$1 && value !== null;
};
var isValue$5 = is$4;

// prettier-ignore
var possibleTypes = {
  'object': true,
  'function': true,
  'undefined': true /* document.all */
};
var is$3 = function is$3(value) {
  if(!isValue$5(value)) return false;
  return hasOwnProperty.call(possibleTypes, _typeof(value));
};
var isObject = is$3;
var is$2 = function is$2(value) {
  if(!isObject(value)) return false;
  try {
    if(!value.constructor) return false;
    return value.constructor.prototype === value;
  } catch(error) {
    return false;
  }
};
var isPrototype = is$2;
var is$1 = function is$1(value) {
  if(typeof value !== 'function') return false;
  if(!hasOwnProperty.call(value, 'length')) return false;
  try {
    if(typeof value.length !== 'number') return false;
    if(typeof value.call !== 'function') return false;
    if(typeof value.apply !== 'function') return false;
  } catch(error) {
    return false;
  }
  return !isPrototype(value);
};
var isFunction = is$1;
var classRe = /^\s*class[\s{/}]/,
  functionToString = Function.prototype.toString;
var is = function is(value) {
  if(!isFunction(value)) return false;
  if(classRe.test(functionToString.call(value))) return false;
  return true;
};
var isImplemented$2 = function isImplemented$2() {
  var assign = Object.assign,
    obj;
  if(typeof assign !== 'function') return false;
  obj = {
    foo: 'raz'
  };
  assign(obj, {
    bar: 'dwa'
  }, {
    trzy: 'trzy'
  });
  return obj.foo + obj.bar + obj.trzy === 'razdwatrzy';
};
var isImplemented$1 = function isImplemented$1() {
  try {
    Object.keys('primitive');
    return true;
  } catch(e) {
    return false;
  }
};

// eslint-disable-next-line no-empty-function
var noop = function noop() { };
var _undefined = noop(); // Support ES3 engines

var isValue$4 = function isValue$4(val) {
  return val !== _undefined && val !== null;
};
var isValue$3 = isValue$4;
var keys$2 = Object.keys;
var shim$2 = function shim$2(object) {
  return keys$2(isValue$3(object) ? Object(object) : object);
};
var keys$1 = isImplemented$1() ? Object.keys : shim$2;
var isValue$2 = isValue$4;
var validValue = function validValue(value) {
  if(!isValue$2(value)) throw new TypeError('Cannot use null or undefined');
  return value;
};
var keys = keys$1,
  value = validValue,
  max = Math.max;
var shim$1 = function shim$1(dest, src /* , …srcn*/) {
  var error,
    i,
    length = max(arguments.length, 2),
    assign;
  dest = Object(value(dest));
  assign = function assign(key) {
    try {
      dest[key] = src[key];
    } catch(e) {
      if(!error) error = e;
    }
  };
  for(i = 1; i < length; ++i) {
    src = arguments[i];
    keys(src).forEach(assign);
  }
  if(error !== undefined) throw error;
  return dest;
};
var assign$1 = isImplemented$2() ? Object.assign : shim$1;
var isValue$1 = isValue$4;
var forEach = Array.prototype.forEach,
  create = Object.create;
var process2 = function process2(src, obj) {
  var key;
  for(key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
var normalizeOptions = function normalizeOptions(opts1 /* , …options*/) {
  var result = create(null);
  forEach.call(arguments, function(options) {
    if(!isValue$1(options)) return;
    process2(Object(options), result);
  });
  return result;
};
var str = 'razdwatrzy';
var isImplemented = function isImplemented() {
  if(typeof str.contains !== 'function') return false;
  return str.contains('dwa') === true && str.contains('foo') === false;
};
var indexOf = String.prototype.indexOf;
var shim = function shim(searchString /* , position*/) {
  return indexOf.call(this, searchString, arguments[1]) > -1;
};
var contains$1 = isImplemented() ? String.prototype.contains : shim;
var isValue = is$4,
  isPlainFunction = is,
  assign = assign$1,
  normalizeOpts = normalizeOptions,
  contains = contains$1;
var d = d$1.exports = function(dscr, value /* , options*/) {
  var c, e, w, options, desc;
  if(arguments.length < 2 || typeof dscr !== 'string') {
    options = value;
    value = dscr;
    dscr = null;
  } else {
    options = arguments[2];
  }
  if(isValue(dscr)) {
    c = contains.call(dscr, 'c');
    e = contains.call(dscr, 'e');
    w = contains.call(dscr, 'w');
  } else {
    c = w = true;
    e = false;
  }
  desc = {
    value: value,
    configurable: c,
    enumerable: e,
    writable: w
  };
  return !options ? desc : assign(normalizeOpts(options), desc);
};
d.gs = function(dscr, get, set /* , options*/) {
  var c, e, options, desc;
  if(typeof dscr !== 'string') {
    options = set;
    set = get;
    get = dscr;
    dscr = null;
  } else {
    options = arguments[3];
  }
  if(!isValue(get)) {
    get = undefined;
  } else if(!isPlainFunction(get)) {
    options = get;
    get = set = undefined;
  } else if(!isValue(set)) {
    set = undefined;
  } else if(!isPlainFunction(set)) {
    options = set;
    set = undefined;
  }
  if(isValue(dscr)) {
    c = contains.call(dscr, 'c');
    e = contains.call(dscr, 'e');
  } else {
    c = true;
    e = false;
  }
  desc = {
    get: get,
    set: set,
    configurable: c,
    enumerable: e
  };
  return !options ? desc : assign(normalizeOpts(options), desc);
};
var validCallable = function validCallable(fn) {
  if(typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
  return fn;
};
(function(module, exports) {
  var d = d$1.exports,
    callable = validCallable,
    apply = Function.prototype.apply,
    call = Function.prototype.call,
    create = Object.create,
    defineProperty = Object.defineProperty,
    defineProperties = Object.defineProperties,
    hasOwnProperty = Object.prototype.hasOwnProperty,
    descriptor = {
      configurable: true,
      enumerable: false,
      writable: true
    },
    on,
    _once2,
    off,
    emit,
    methods,
    descriptors,
    base;
  on = function on(type, listener) {
    var data;
    callable(listener);
    if(!hasOwnProperty.call(this, '__ee__')) {
      data = descriptor.value = create(null);
      defineProperty(this, '__ee__', descriptor);
      descriptor.value = null;
    } else {
      data = this.__ee__;
    }
    if(!data[type]) data[type] = listener; else if(_typeof(data[type]) === 'object') data[type].push(listener); else data[type] = [data[type], listener];
    return this;
  };
  _once2 = function once(type, listener) {
    var _once, self;
    callable(listener);
    self = this;
    on.call(this, type, _once = function once() {
      off.call(self, type, _once);
      apply.call(listener, this, arguments);
    });
    _once.__eeOnceListener__ = listener;
    return this;
  };
  off = function off(type, listener) {
    var data, listeners, candidate, i;
    callable(listener);
    if(!hasOwnProperty.call(this, '__ee__')) return this;
    data = this.__ee__;
    if(!data[type]) return this;
    listeners = data[type];
    if(_typeof(listeners) === 'object') {
      for(i = 0; candidate = listeners[i]; ++i) {
        if(candidate === listener || candidate.__eeOnceListener__ === listener) {
          if(listeners.length === 2) data[type] = listeners[i ? 0 : 1]; else listeners.splice(i, 1);
        }
      }
    } else {
      if(listeners === listener || listeners.__eeOnceListener__ === listener) {
        delete data[type];
      }
    }
    return this;
  };
  emit = function emit(type) {
    var i, l, listener, listeners, args;
    if(!hasOwnProperty.call(this, '__ee__')) return;
    listeners = this.__ee__[type];
    if(!listeners) return;
    if(_typeof(listeners) === 'object') {
      l = arguments.length;
      args = new Array(l - 1);
      for(i = 1; i < l; ++i) args[i - 1] = arguments[i];
      listeners = listeners.slice();
      for(i = 0; listener = listeners[i]; ++i) {
        apply.call(listener, this, args);
      }
    } else {
      switch(arguments.length) {
        case 1:
          call.call(listeners, this);
          break;
        case 2:
          call.call(listeners, this, arguments[1]);
          break;
        case 3:
          call.call(listeners, this, arguments[1], arguments[2]);
          break;
        default:
          l = arguments.length;
          args = new Array(l - 1);
          for(i = 1; i < l; ++i) {
            args[i - 1] = arguments[i];
          }
          apply.call(listeners, this, args);
      }
    }
  };
  methods = {
    on: on,
    once: _once2,
    off: off,
    emit: emit
  };
  descriptors = {
    on: d(on),
    once: d(_once2),
    off: d(off),
    emit: d(emit)
  };
  base = defineProperties({}, descriptors);
  module.exports = exports = function exports(o) {
    return o == null ? create(base) : defineProperties(Object(o), descriptors);
  };
  exports.methods = methods;
})(eventEmitter, eventEmitter.exports);
var EventEmitter = eventEmitter.exports;
var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && _typeof(value) === 'object';
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol['for'];
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol['for']('react.element') : 0xeac7;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, optionsArgument) {
  var clone = !optionsArgument || optionsArgument.clone !== false;
  return clone && isMergeableObject(value) ? deepmerge(emptyTarget(value), value, optionsArgument) : value;
}
function defaultArrayMerge(target, source, optionsArgument) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, optionsArgument);
  });
}
function mergeObject(target, source, optionsArgument) {
  var destination = {};
  if(isMergeableObject(target)) {
    Object.keys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], optionsArgument);
    });
  }
  Object.keys(source).forEach(function(key) {
    if(!isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], optionsArgument);
    } else {
      destination[key] = deepmerge(target[key], source[key], optionsArgument);
    }
  });
  return destination;
}
function deepmerge(target, source, optionsArgument) {
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var options = optionsArgument || {
    arrayMerge: defaultArrayMerge
  };
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if(!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, optionsArgument);
  } else if(sourceIsArray) {
    var arrayMerge = options.arrayMerge || defaultArrayMerge;
    return arrayMerge(target, source, optionsArgument);
  } else {
    return mergeObject(target, source, optionsArgument);
  }
}
deepmerge.all = function deepmergeAll(array, optionsArgument) {
  if(!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }
  return array.reduce(function(prev, next) {
    return deepmerge(prev, next, optionsArgument);
  }, {});
};
var deepmerge_1 = deepmerge;
var version = '1.1.2';

// eslint-disable-next-line no-undef
var ErrorTypes = {
  network: {
    code: 1,
    msg: '视频下载错误',
    remark: '只要视频下载错误就使用此类型，无论是video本身的超时还是xhr的分段请求超时或者资源不存在'
  },
  mse: {
    code: 2,
    msg: '流追加错误',
    remark: '追加流的时候如果类型不对、无法被正确解码则会触发此类错误'
  },
  parse: {
    code: 3,
    msg: '解析错误',
    remark: 'mp4、hls、flv我们都是使用js进行格式解析，如果解析失败则会触发此类错误'
  },
  format: {
    code: 4,
    msg: '格式错误',
    remark: '如果浏览器不支持的格式导致播放错误'
  },
  decoder: {
    code: 5,
    msg: '解码错误',
    remark: '浏览器解码异常会抛出此类型错误'
  },
  runtime: {
    code: 6,
    msg: '语法错误',
    remark: '播放器语法错误'
  },
  timeout: {
    code: 7,
    msg: '播放超时',
    remark: '播放过程中无法正常请求下一个分段导致播放中断'
  },
  other: {
    code: 8,
    msg: '其他错误',
    remark: '不可知的错误或被忽略的错误类型'
  }
};
var Errors = /* #__PURE__*/_createClass(function Errors(type, currentTime, duration, networkState, readyState, src, currentSrc, ended) {
  var errd = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : {
    line: '',
    handle: '',
    msg: '',
    version: ''
  };
  var errorCode = arguments.length > 9 ? arguments[9] : undefined;
  var mediaError = arguments.length > 10 ? arguments[10] : undefined;
  _classCallCheck(this, Errors);
  var r = {};
  if(arguments.length > 1) {
    r.version = version; // 播放器版本
    r.errorType = type;
    r.domain = document.domain; // domain
    r.duration = duration; // 视频时长
    r.currentTime = currentTime;
    r.networkState = networkState;
    r.readyState = readyState;
    r.currentSrc = currentSrc;
    r.src = src;
    r.ended = ended;
    r.errd = errd; // 错误详情
    r.ex = (ErrorTypes[type] || {}).msg; // 补充信息
    r.errorCode = errorCode;
    r.mediaError = mediaError;
  } else {
    var arg = arguments[0];
    Object.keys(arg).map(function(key) {
      r[key] = arg[key];
    });
    r.ex = (arg.type && ErrorTypes[arg.type] || {}).msg;
  }
  return r;
});
var Errors$1 = Errors;
var Stream = /* #__PURE__*/function() {
  function Stream(buffer) {
    _classCallCheck(this, Stream);
    if(buffer instanceof ArrayBuffer) {
      this.buffer = buffer;
      this.dataview = new DataView(buffer);
      this.dataview.position = 0;
    } else {
      throw new Errors$1('parse', '', {
        line: 9,
        handle: '[Stream] constructor',
        msg: 'data is valid'
      });
    }
  }
  _createClass(Stream, [{
    key: 'position',
    get: function get() {
      return this.dataview.position;
    },
    set: function set(value) {
      this.dataview.position = value;
    }
  }, {
    key: 'skip',
    value: function skip(count) {
      var loop = Math.floor(count / 4);
      var last = count % 4;
      for(var i = 0; i < loop; i++) {
        Stream.readByte(this.dataview, 4);
      }
      if(last > 0) {
        Stream.readByte(this.dataview, last);
      }
    }

    /**
       * [readByte 从DataView中读取数据]
       * @param  {DataView} buffer [DataView实例]
       * @param  {Number} size   [读取字节数]
       * @return {Number}        [整数]
       */
  }, {
    key: 'readUint8',
    value: function readUint8() {
      return Stream.readByte(this.dataview, 1);
    }
  }, {
    key: 'readUint16',
    value: function readUint16() {
      return Stream.readByte(this.dataview, 2);
    }
  }, {
    key: 'readUint32',
    value: function readUint32() {
      return Stream.readByte(this.dataview, 4);
    }
  }, {
    key: 'readUint64',
    value: function readUint64() {
      return Stream.readByte(this.dataview, 8);
    }
  }, {
    key: 'readInt8',
    value: function readInt8() {
      return Stream.readByte(this.dataview, 1, true);
    }
  }, {
    key: 'readInt16',
    value: function readInt16() {
      return Stream.readByte(this.dataview, 2, true);
    }
  }, {
    key: 'readInt32',
    value: function readInt32() {
      return Stream.readByte(this.dataview, 4, true);
    }
  }], [{
    key: 'readByte',
    value: function readByte(buffer, size, sign) {
      var res;
      switch(size) {
        case 1:
          if(sign) {
            res = buffer.getInt8(buffer.position);
          } else {
            res = buffer.getUint8(buffer.position);
          }
          break;
        case 2:
          if(sign) {
            res = buffer.getInt16(buffer.position);
          } else {
            res = buffer.getUint16(buffer.position);
          }
          break;
        case 3:
          if(sign) {
            throw new Error('not supported for readByte 3');
          } else {
            res = buffer.getUint8(buffer.position) << 16;
            res |= buffer.getUint8(buffer.position + 1) << 8;
            res |= buffer.getUint8(buffer.position + 2);
          }
          break;
        case 4:
          if(sign) {
            res = buffer.getInt32(buffer.position);
          } else {
            res = buffer.getUint32(buffer.position);
          }
          break;
        case 8:
          if(sign) {
            throw new Errors$1('parse', '', {
              line: 73,
              handle: '[Stream] readByte',
              msg: 'not supported for readBody 8'
            });
          } else {
            res = buffer.getUint32(buffer.position) << 32;
            res |= buffer.getUint32(buffer.position + 4);
          }
          break;
        default:
          res = '';
      }
      buffer.position += size;
      return res;
    }
  }]);
  return Stream;
}();
var Stream$1 = Stream;
var Box = /* #__PURE__*/function() {
  function Box() {
    _classCallCheck(this, Box);
    this.headSize = 8;
    this.size = 0;
    this.type = '';
    this.subBox = [];
    this.start = -1;
  }
  _createClass(Box, [{
    key: 'readHeader',
    value: function readHeader(stream) {
      this.start = stream.position;
      this.size = stream.readUint32();
      this.type = String.fromCharCode(stream.readUint8(), stream.readUint8(), stream.readUint8(), stream.readUint8());
      if(this.size === 1) {
        this.size = stream.readUint64();
      } else if(this.size === 0) {
        if(this.type !== 'mdat') {
          throw new Errors$1('parse', '', {
            line: 19,
            handle: '[Box] readHeader',
            msg: 'parse mp4 mdat box failed'
          });
        }
      }
      if(this.type === 'uuid') {
        var uuid = [];
        for(var i = 0; i < 16; i++) {
          uuid.push(stream.readUint8());
        }
      }
    }
  }, {
    key: 'readBody',
    value: function readBody(stream) {
      var end = this.size - stream.position + this.start;
      var type = this.type;
      this.data = stream.buffer.slice(stream.position, stream.position + end);
      stream.position += this.data.byteLength;
      var parser;
      if(Box.containerBox.find(function(item) {
        return item === type;
      })) {
        parser = Box.containerParser;
      } else {
        parser = Box.boxParse[type];
      }
      if(parser && parser instanceof Function) {
        parser.call(this);
      }
    }
  }, {
    key: 'read',
    value: function read(stream) {
      this.readHeader(stream);
      this.readBody(stream);
    }
  }], [{
    key: 'containerParser',
    value: function containerParser() {
      var stream = new Stream$1(this.data);
      var size = stream.buffer.byteLength;
      var self = this;
      while(stream.position < size) {
        var box = new Box();
        box.readHeader(stream);
        self.subBox.push(box);
        box.readBody(stream);
      }
      delete self.data;
      stream = null;
    }
  }]);
  return Box;
}();
_defineProperty(Box, 'boxParse', {});
Box.containerBox = ['moov', 'trak', 'edts', 'mdia', 'minf', 'dinf', 'stbl', 'mvex', 'moof', 'traf', 'mfra'];
var Box$1 = Box;
var concat = {};
Object.defineProperty(concat, '__esModule', {
  value: true
});
concat['default'] = function(ResultConstructor) {
  var totalLength = 0;
  for(var _len = arguments.length, arrays = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;
  try {
    for(var _iterator = arrays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arr = _step.value;
      totalLength += arr.length;
    }
  } catch(err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if(!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if(_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
  var result = new ResultConstructor(totalLength);
  var offset = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;
  try {
    for(var _iterator2 = arrays[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _arr = _step2.value;
      result.set(_arr, offset);
      offset += _arr.length;
    }
  } catch(err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if(!_iteratorNormalCompletion2 && _iterator2['return']) {
        _iterator2['return']();
      }
    } finally {
      if(_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
  return result;
};
var _concat = concat;
var _concat2 = _interopRequireDefault(_concat);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
var lib = _concat2['default'];
function avc1() {
  var stream = new Stream$1(this.data);
  var self = this;
  stream.skip(6);
  this.dataReferenceIndex = stream.readUint16();
  stream.skip(16);
  this.width = stream.readUint16();
  this.height = stream.readUint16();
  this.horizresolution = stream.readUint32();
  this.vertresolution = stream.readUint32();
  stream.skip(4);
  this.frameCount = stream.readUint16();
  stream.skip(1);
  for(var i = 0; i < 31; i++) {
    String.fromCharCode(stream.readUint8());
  }
  this.depth = stream.readUint16();
  stream.skip(2);
  while(stream.buffer.byteLength - stream.position >= 8) {
    var box = new Box$1();
    box.readHeader(stream);
    self.subBox.push(box);
    box.readBody(stream);
  }
  delete this.data;
  stream = null;
}
function avcC() {
  var stream = new Stream$1(this.data);
  this.configVersion = stream.readUint8();
  this.profile = stream.readUint8();
  this.profileCompatibility = stream.readUint8();
  this.AVCLevelIndication = stream.readUint8();
  this.lengthSizeMinusOne = (stream.readUint8() & 3) + 1;
  this.numOfSequenceParameterSets = stream.readUint8() & 31;
  var sequenceLength = stream.readUint16();
  this.sequenceLength = sequenceLength;
  var sequence = [];
  for(var i = 0; i < sequenceLength; i++) {
    sequence.push(Number(stream.readUint8()).toString(16));
  }
  this.ppsCount = stream.readUint8();
  var ppsLength = stream.readUint16();
  this.ppsLength = ppsLength;
  var pps = [];
  for(var _i = 0; _i < ppsLength; _i++) {
    pps.push(Number(stream.readUint8()).toString(16));
  }
  this.pps = pps;
  this.sequence = sequence;
  var last = [];
  var dataviewLength = stream.dataview.byteLength;
  while(stream.position < dataviewLength) {
    last.push(stream.readUint8());
  }
  this.last = last;
  delete this.subBox;
  delete this.data;
  stream = null;
}
function btrt() {
  var stream = new Stream$1(this.data);
  this.bufferSizeDB = stream.readUint32();
  this.maxBitrate = stream.readUint32();
  this.avgBitrate = stream.readUint32();
  delete this.subBox;
  delete this.data;
  stream = null;
}
function co64() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  this.count = stream.readUint32();
  var entries = [];
  this.entries = entries;
  for(var i = 0, count = this.count; i < count; i++) {
    entries.push(stream.readUint64());
  }
  delete this.subBox;
  delete this.data;
  stream = null;
}
function ctts() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  this.entryCount = stream.readUint32();
  var entry = [];
  this.entry = entry;
  for(var i = 0, count = this.entryCount; i < count; i++) {
    entry.push({
      count: stream.readUint32(),
      offset: stream.readUint32()
    });
  }
  delete this.subBox;
  delete this.data;
  stream = null;
}
function dref() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  var entryCount = stream.readUint32();
  this.entryCount = entryCount;
  var self = this;
  // 暂时不支持离散视频，视频的部分内容由url指定
  for(var i = 0; i < entryCount; i++) {
    var box = new Box$1();
    self.subBox.push(box);
    box.read(stream);
  }
  delete this.data;
  stream = null;
}

/* eslint-disable camelcase */
function elst() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  var entries = [];
  var entry_count = stream.readUint32();
  this.empty_duration = 0; // empty duration of the first edit list entry
  this.start_time = 0; // start time of the media
  var edit_start_index = 0;
  this.entries = entries;
  for(var i = 0; i < entry_count; i++) {
    var entry = {};
    entries.push(entry);
    if(this.version === 1) {
      entry.segment_duration = stream.readUint64();
      entry.media_time = stream.readUint64();
    } else {
      entry.segment_duration = stream.readUint32();
      entry.media_time = stream.readInt32();
    }
    entry.media_rate_integer = stream.readInt16();
    entry.media_rate_fraction = stream.readInt16();
    if(i === 0 && entry.media_time === -1) {
      /* if empty, the first entry is the start time of the stream
          * relative to the presentation itself */
      this.empty_duration = entry.segment_duration;
      edit_start_index = 1;
    } else if(i === edit_start_index && entry.media_time >= 0) {
      this.start_time = entry.media_time;
    }
  }
  delete this.subBox;
  delete this.data;
  stream = null;
}
function MP4DecSpecificDescrTag(stream) {
  var box = new Box$1();
  var size, dataSize;
  box.type = stream.readUint8();
  size = stream.readUint8();
  if(size === 0x80) {
    box.extend = true;
    stream.skip(2);
    size = stream.readUint8() + 5;
    dataSize = size - 5;
  } else {
    dataSize = size;
    size += 2;
  }
  box.size = size;
  var EScode = [];
  for(var i = 0; i < dataSize; i++) {
    EScode.push(Number(stream.readUint8()).toString(16).padStart(2, '0'));
  }
  box.EScode = EScode;
  delete box.subBox;
  return box;
}
function MP4DecConfigDescrTag(stream) {
  var box = new Box$1();
  var size;
  box.type = stream.readUint8();
  size = stream.readUint8();
  if(size === 0x80) {
    box.extend = true;
    stream.skip(2);
    size = stream.readUint8() + 5;
  } else {
    size += 2;
  }
  box.size = size;
  box.typeID = stream.readUint8();
  // 6 bits stream type,1 bit upstream flag,1 bit reserved flag
  box.streamUint = stream.readUint8();
  box.bufferSize = Stream$1.readByte(stream.dataview, 3);
  box.maximum = stream.readUint32();
  box.average = stream.readUint32();
  box.subBox.push(MP4DecSpecificDescrTag(stream));
  return box;
}
function SLConfigDescriptor(stream) {
  var box = new Box$1();
  var size;
  box.type = stream.readUint8();
  size = stream.readUint8();
  if(size === 0x80) {
    box.extend = true;
    stream.skip(2);
    size = stream.readUint8() + 5;
  } else {
    size += 2;
  }
  box.size = size;
  box.SL = stream.readUint8();
  delete box.subBox;
  return box;
}
function MP4ESDescrTag(stream) {
  var box = new Box$1();
  var size;
  box.type = stream.readUint8();
  size = stream.readUint8();
  if(size === 0x80) {
    box.extend = true;
    stream.skip(2);
    size = stream.readUint8() + 5;
  } else {
    size += 2;
  }
  box.size = size;
  box.esID = stream.readUint16();
  box.priority = stream.readUint8();
  box.subBox.push(MP4DecConfigDescrTag(stream));
  box.subBox.push(SLConfigDescriptor(stream));
  return box;
}

// import Box from '../box'
function esds() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  var box = MP4ESDescrTag(stream);
  this.subBox.push(box);
  delete this.data;
  stream = null;
}
function ftyp() {
  var stream = new Stream$1(this.data);
  this.major_brand = String.fromCharCode(stream.readUint8(), stream.readUint8(), stream.readUint8(), stream.readUint8());
  this.minor_version = stream.readUint32();
  var compatibleBrands = [];
  for(var i = 0, len = Math.floor((stream.buffer.byteLength - 8) / 4); i < len; i++) {
    compatibleBrands.push(String.fromCharCode(stream.readUint8(), stream.readUint8(), stream.readUint8(), stream.readUint8()));
  }
  this.compatible_brands = compatibleBrands;
  stream = null;
  delete this.subBox;
  delete this.data;
}
function hdlr() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  stream.skip(4);
  this.handleType = ''.concat(String.fromCharCode(stream.readUint8())).concat(String.fromCharCode(stream.readUint8())).concat(String.fromCharCode(stream.readUint8())).concat(String.fromCharCode(stream.readUint8()));
  stream.skip(12);
  var name = [];
  while(stream.position < this.size - 8) {
    name.push(String.fromCharCode(stream.readUint8()));
  }
  this.name = name.join('');
  delete this.subBox;
  delete this.data;
  stream = null;
}
function iods() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  var content = [];
  var length = stream.buffer.byteLength;
  while(stream.position < length) {
    content.push(stream.readUint8());
  }
  this.content = content;
  delete this.subBox;
  delete this.data;
  stream = null;
}
function mdat() {
  delete this.subBox;
}
var UTC = /* #__PURE__*/function() {
  function UTC() {
    _classCallCheck(this, UTC);
    var time = new Date();
    time.setFullYear(1904);
    time.setMonth(0);
    time.setDate(1);
    time.setHours(0);
    time.setMinutes(0);
    time.setSeconds(0);
    this.time = time;
  }
  _createClass(UTC, [{
    key: 'setTime',
    value: function setTime(value) {
      this.time.setTime(this.time.getTime() + value * 1);
      return this.time.toLocaleString();
    }
  }]);
  return UTC;
}();
var UTC$1 = UTC;
function mdhd() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  if(this.version === 1) {
    this.create = stream.readUint64();
    this.modify = stream.readUint64();
    this.createTime = new UTC$1().setTime(this.create * 1000);
    this.modifyTime = new UTC$1().setTime(this.modify * 1000);
    this.timescale = stream.readUint32();
    this.duration = stream.readUint64();
  } else {
    this.create = stream.readUint32();
    this.modify = stream.readUint32();
    this.createTime = new UTC$1().setTime(this.create * 1000);
    this.modifyTime = new UTC$1().setTime(this.modify * 1000);
    this.timescale = stream.readUint32();
    this.duration = stream.readUint32();
  }
  this.language = stream.readUint16();
  stream.readUint16();
  delete this.subBox;
  delete this.data;
  stream = null;
}
function mp4a() {
  var stream = new Stream$1(this.data);
  stream.skip(6);
  this.dataReferenceIndex = stream.readUint16();
  stream.skip(8);
  this.channelCount = stream.readUint16();
  this.sampleSize = stream.readUint16();
  stream.skip(4);
  this.sampleRate = stream.readUint32() >> 16;
  var box = new Box$1();
  box.readHeader(stream);
  this.subBox.push(box);
  box.readBody(stream);
  delete this.data;
  stream = null;
}
function mvhd() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  this.create = stream.readUint32();
  this.modify = stream.readUint32();
  this.createTime = new UTC$1().setTime(this.create * 1000);
  this.modifyTime = new UTC$1().setTime(this.modify * 1000);
  this.timeScale = stream.readUint32();
  this.duration = stream.readUint32();
  this.rate = stream.readUint16() + '.' + stream.readUint16();
  this.volume = stream.readUint8() + '.' + stream.readUint8();
  // 越过保留的10字节
  Stream$1.readByte(stream.dataview, 8);
  Stream$1.readByte(stream.dataview, 2);
  // 视频转换矩阵
  var matrix = [];
  for(var i = 0; i < 9; i++) {
    matrix.push(stream.readUint16() + '.' + stream.readUint16());
  }
  this.matrix = matrix;
  Stream$1.readByte(stream.dataview, 24);
  this.nextTrackID = stream.readUint32();
  delete this.subBox;
  delete this.data;
}
function pasp() {
  var stream = new Stream$1(this.data);
  this.content = stream.buffer.slice(0, this.size - 8);
  delete this.subBox;
  delete this.data;
  stream = null;
}
function smhd() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  this.balance = stream.readInt8() + '.' + stream.readInt8();
  delete this.subBox;
  delete this.data;
  stream = null;
}
function stco() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  this.count = stream.readUint32();
  var entries = [];
  this.entries = entries;
  for(var i = 0, count = this.count; i < count; i++) {
    entries.push(stream.readUint32());
  }
  delete this.subBox;
  delete this.data;
  stream = null;
}
function stsc() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  this.count = stream.readUint32();
  var entries = [];
  this.entries = entries;
  for(var i = 0, count = this.count; i < count; i++) {
    entries.push({
      first_chunk: stream.readUint32(),
      samples_per_chunk: stream.readUint32(),
      sample_desc_index: stream.readUint32()
    });
  }
  for(var _i2 = 0, _count = this.count, entry, preEntry; _i2 < _count - 1; _i2++) {
    entry = entries[_i2];
    preEntry = entries[_i2 - 1];
    entry.chunk_count = entries[_i2 + 1].first_chunk - entry.first_chunk;
    entry.first_sample = _i2 === 0 ? 1 : preEntry.first_sample + preEntry.chunk_count * preEntry.samples_per_chunk;
  }
  if(this.count === 1) {
    var _entry = entries[0];
    _entry.first_sample = 1;
    _entry.chunk_count = 0;
  } else if(this.count > 1) {
    var last = entries[this.count - 1];
    var pre = entries[this.count - 2];
    last.first_sample = pre.first_sample + pre.chunk_count * pre.samples_per_chunk;
    last.chunk_count = 0;
  }
  delete this.subBox;
  delete this.data;
  stream = null;
}
function stsd() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  this.entryCount = stream.readUint32();
  var box = new Box$1();
  box.readHeader(stream);
  this.subBox.push(box);
  box.readBody(stream);
  delete this.data;
  stream = null;
}
function stss() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  this.count = stream.readUint32();
  var entries = [];
  this.entries = entries;
  for(var i = 0, count = this.count; i < count; i++) {
    entries.push(stream.readUint32());
  }
  delete this.subBox;
  delete this.data;
  stream = null;
}
function stsz() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  this.sampleSize = stream.readUint32();
  this.count = stream.readUint32();
  var entries = [];
  this.entries = entries;
  for(var i = 0, count = this.count; i < count; i++) {
    if(this.sampleSize === 0) entries.push(stream.readUint32());
    else entries.push(this.sampleSize);
  }
  delete this.subBox;
  delete this.data;
  stream = null;
}
function stts() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3);
  this.count = stream.readUint32();
  var entry = [];
  for(var i = 0, count = this.count; i < count; i++) {
    entry.push({
      sampleCount: stream.readUint32(),
      sampleDuration: stream.readUint32()
    });
  }
  this.entry = entry;
  delete this.subBox;
  delete this.data;
  stream = null;
}
function tkhd() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = Stream$1.readByte(stream.dataview, 3, 0);
  if(this.version === 1) {
    this.create = stream.readUint64();
    this.modify = stream.readUint64();
    this.createTime = new UTC$1().setTime(this.create * 1000);
    this.modifyTime = new UTC$1().setTime(this.modify * 1000);
    this.trackID = stream.readUint32();
    this.reserverd = stream.readUint32();
    this.duration = stream.readUint64();
  } else {
    this.create = stream.readUint32();
    this.modify = stream.readUint32();
    this.createTime = new UTC$1().setTime(this.create * 1000);
    this.modifyTime = new UTC$1().setTime(this.modify * 1000);
    this.trackID = stream.readUint32();
    this.reserverd = stream.readUint32();
    this.duration = stream.readUint32();
  }
  stream.readUint64();
  this.layer = stream.readInt16();
  this.alternate_group = stream.readInt16();
  this.volume = stream.readInt16() >> 8;
  stream.readUint16();
  // 视频转换矩阵
  var matrix = [];
  for(var i = 0; i < 9; i++) {
    matrix.push(stream.readUint16() + '.' + stream.readUint16());
  }
  this.matrix = matrix;
  this.width = stream.readUint16() + '.' + stream.readUint16();
  this.height = stream.readUint16() + '.' + stream.readUint16();
  delete this.data;
  delete this.subBox;
  stream = null;
}
function udta() {
  delete this.subBox;
}
function url() {
  // Box['url '] = function () {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = [stream.readUint8(), stream.readUint8(), stream.readUint8()];
  var location = [];
  var length = stream.buffer.byteLength;
  while(stream.position < length) {
    location.push(stream.readUint8());
  }
  this.location = location;
  delete this.subBox;
  delete this.data;
  stream = null;
}
function vmhd() {
  var stream = new Stream$1(this.data);
  this.version = stream.readUint8();
  this.flag = [stream.readUint8(), stream.readUint8(), stream.readUint8()];
  this.graphicsmode = stream.readUint16();
  this.opcolor = [stream.readUint16(), stream.readUint16(), stream.readUint16()];
  delete this.subBox;
  delete this.data;
  stream = null;
}
var BoxParse = /* #__PURE__*/Object.freeze({
  __proto__: null,
  avc1: avc1,
  avcC: avcC,
  btrt: btrt,
  co64: co64,
  ctts: ctts,
  dref: dref,
  elst: elst,
  esds: esds,
  ftyp: ftyp,
  hdlr: hdlr,
  iods: iods,
  mdat: mdat,
  mdhd: mdhd,
  mp4a: mp4a,
  MP4DecConfigDescrTag: MP4DecConfigDescrTag,
  MP4DecSpecificDescrTag: MP4DecSpecificDescrTag,
  MP4ESDescrTag: MP4ESDescrTag,
  mvhd: mvhd,
  pasp: pasp,
  SLConfigDescriptor: SLConfigDescriptor,
  smhd: smhd,
  stco: stco,
  stsc: stsc,
  stsd: stsd,
  stss: stss,
  stsz: stsz,
  stts: stts,
  tkhd: tkhd,
  udta: udta,
  url: url,
  vmhd: vmhd
});
Box$1.boxParse = BoxParse;
var Parse = /* #__PURE__*/_createClass(function Parse(buffer) {
  _classCallCheck(this, Parse);
  this.buffer = null;
  this.boxes = [];
  this.nextBox = null;
  this.start = 0;
  var self = this;
  if(self.buffer) {
    lib(Uint8Array, self.buffer, buffer);
  } else {
    self.buffer = buffer;
  }
  var bufferLength = buffer.byteLength;
  buffer.position = 0;
  var stream = new Stream$1(buffer);
  while(bufferLength - stream.position >= 8) {
    var box = new Box$1();
    box.readHeader(stream);
    if(box.size - 8 <= bufferLength - stream.position) {
      box.readBody(stream);
      self.boxes.push(box);
    } else {
      if(box.type === 'mdat') {
        box.readBody(stream);
        self.boxes.push(box);
      } else {
        self.nextBox = box;
        stream.position -= 8;
        break;
      }
    }
  }
  self.buffer = new Uint8Array(self.buffer.slice(stream.position));
});
var Parser = Parse;
var Buffer = /* #__PURE__*/function() {
  function Buffer() {
    _classCallCheck(this, Buffer);
    this.buffer = new Uint8Array(0);
  }
  _createClass(Buffer, [{
    key: 'write',
    value: function write() {
      var self = this;
      for(var _len2 = arguments.length, buffer = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        buffer[_key2] = arguments[_key2];
      }
      buffer.forEach(function(item) {
        if(item) {
          self.buffer = lib(Uint8Array, self.buffer, item);
        } else {
          window.console.error(item);
        }
      });
    }
  }], [{
    key: 'writeUint32',
    value: function writeUint32(value) {
      return new Uint8Array([value >> 24, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff]);
    }
  }]);
  return Buffer;
}();
var Buffer$1 = Buffer;
var UINT32_MAX = Math.pow(2, 32) - 1;
var FMP4 = /* #__PURE__*/function() {
  function FMP4() {
    _classCallCheck(this, FMP4);
  }
  _createClass(FMP4, null, [{
    key: 'type',
    value: function type(name) {
      return new Uint8Array([name.charCodeAt(0), name.charCodeAt(1), name.charCodeAt(2), name.charCodeAt(3)]);
    }
  }, {
    key: 'size',
    value: function size(value) {
      return Buffer$1.writeUint32(value);
    }
  }, {
    key: 'extension',
    value: function extension(version, flag) {
      return new Uint8Array([version, flag >> 16 & 0xff, flag >> 8 & 0xff, flag & 0xff]);
    }
  }, {
    key: 'ftyp',
    value: function ftyp() {
      var buffer = new Buffer$1();
      buffer.write(FMP4.size(24), FMP4.type('ftyp'), new Uint8Array([0x69, 0x73, 0x6F, 0x6D,
        // isom,
        0x0, 0x0, 0x00, 0x01,
        // minor_version: 0x01
        0x69, 0x73, 0x6F, 0x6D,
        // isom
        0x61, 0x76, 0x63, 0x31 // avc1
      ]));
      return buffer.buffer;
    }
  }, {
    key: 'moov',
    value: function moov(data) {
      var buffer = new Buffer$1();
      var size = 8;
      var mvhd = FMP4.mvhd(data.duration, data.timeScale);
      var trak1 = FMP4.videoTrak(data);
      var trak2;
      var videoOnly = FMP4.videoOnly || !data.audioCodec;
      if(!videoOnly) {
        trak2 = FMP4.audioTrak(data);
      }
      var mvex = FMP4.mvex(data.duration, data.timeScale);
      var moovBoxes = videoOnly ? [mvhd, trak1, mvex] : [mvhd, trak1, trak2, mvex];
      moovBoxes.forEach(function(item) {
        size += item.byteLength;
      });
      if(videoOnly) {
        buffer.write(FMP4.size(size), FMP4.type('moov'), mvhd, trak1, mvex);
      } else {
        buffer.write(FMP4.size(size), FMP4.type('moov'), mvhd, trak1, trak2, mvex);
      }
      return buffer.buffer;
    }
  }, {
    key: 'mvhd',
    value: function mvhd(duration, timescale) {
      var buffer = new Buffer$1();
      duration *= timescale;
      var upperWordDuration = Math.floor(duration / (UINT32_MAX + 1));
      var lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1));
      var bytes = new Uint8Array([0x01,
        // version 1
        0x00, 0x00, 0x00,
        // flags
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02,
        // creation_time
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03,
        // modification_time
        timescale >> 24 & 0xff, timescale >> 16 & 0xff, timescale >> 8 & 0xff, timescale & 0xff,
        // timescale
        upperWordDuration >> 24, upperWordDuration >> 16 & 0xff, upperWordDuration >> 8 & 0xff, upperWordDuration & 0xff, lowerWordDuration >> 24, lowerWordDuration >> 16 & 0xff, lowerWordDuration >> 8 & 0xff, lowerWordDuration & 0xff, 0x00, 0x01, 0x00, 0x00,
        // 1.0 rate
        0x01, 0x00,
        // 1.0 volume
        0x00, 0x00,
        // reserved
        0x00, 0x00, 0x00, 0x00,
        // reserved
        0x00, 0x00, 0x00, 0x00,
        // reserved
        0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00,
        // transformation: unity matrix
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        // pre_defined
        0xff, 0xff, 0xff, 0xff // next_track_ID
      ]);
      buffer.write(FMP4.size(8 + bytes.length), FMP4.type('mvhd'), new Uint8Array(bytes));
      return buffer.buffer;
    }
  }, {
    key: 'videoTrak',
    value: function videoTrak(data) {
      var buffer = new Buffer$1();
      var size = 8;
      var tkhd = FMP4.tkhd({
        id: 1,
        duration: data.videoDuration,
        timescale: data.videoTimeScale,
        width: data.width,
        height: data.height,
        type: 'video'
      });
      var mdia = FMP4.mdia({
        type: 'video',
        timescale: data.videoTimeScale,
        duration: data.videoDuration,
        sps: data.sps,
        pps: data.pps,
        pixelRatio: data.pixelRatio,
        width: data.width,
        height: data.height
      });
      [tkhd, mdia].forEach(function(item) {
        size += item.byteLength;
      });
      buffer.write(FMP4.size(size), FMP4.type('trak'), tkhd, mdia);
      return buffer.buffer;
    }
  }, {
    key: 'audioTrak',
    value: function audioTrak(data) {
      var buffer = new Buffer$1();
      var size = 8;
      var tkhd = FMP4.tkhd({
        id: 2,
        duration: data.audioDuration,
        timescale: data.audioTimeScale,
        width: 0,
        height: 0,
        type: 'audio'
      });
      var mdia = FMP4.mdia({
        type: 'audio',
        audioCodec: data.audioCodec,
        timescale: data.audioTimeScale,
        duration: data.audioDuration,
        channelCount: data.channelCount,
        samplerate: data.sampleRate,
        audioConfig: data.audioConfig
      });
      [tkhd, mdia].forEach(function(item) {
        size += item.byteLength;
      });
      buffer.write(FMP4.size(size), FMP4.type('trak'), tkhd, mdia);
      return buffer.buffer;
    }
  }, {
    key: 'tkhd',
    value: function tkhd(data) {
      var buffer = new Buffer$1();
      var id = data.id;
      var duration = data.duration * data.timeScale;
      var width = data.width;
      var height = data.height;
      var type = data.type;
      var upperWordDuration = Math.floor(duration / (UINT32_MAX + 1));
      var lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1));
      var content = new Uint8Array([0x01,
        // version 1
        0x00, 0x00, 0x07,
        // flags
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02,
        // creation_time
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03,
        // modification_time
        id >> 24 & 0xff, id >> 16 & 0xff, id >> 8 & 0xff, id & 0xff,
        // track_ID
        0x00, 0x00, 0x00, 0x00,
        // reserved
        upperWordDuration >> 24, upperWordDuration >> 16 & 0xff, upperWordDuration >> 8 & 0xff, upperWordDuration & 0xff, lowerWordDuration >> 24, lowerWordDuration >> 16 & 0xff, lowerWordDuration >> 8 & 0xff, lowerWordDuration & 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        // reserved
        0x00, 0x00,
        // layer
        0x00, type === 'video' ? 0x01 : 0x00,
        // alternate_group
        type === 'audio' ? 0x01 : 0x00, 0x00,
        // non-audio track volume
        0x00, 0x00,
        // reserved
        0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00,
        // transformation: unity matrix
        width >> 8 & 0xff, width & 0xff, 0x00, 0x00,
        // width
        height >> 8 & 0xff, height & 0xff, 0x00, 0x00 // height
      ]);
      buffer.write(FMP4.size(8 + content.byteLength), FMP4.type('tkhd'), content);
      return buffer.buffer;
    }
  }, {
    key: 'edts',
    value: function edts(data) {
      var buffer = new Buffer$1();
      var duration = data.duration;
      var mediaTime = data.mediaTime;
      buffer.write(FMP4.size(36), FMP4.type('edts'));
      // elst
      buffer.write(FMP4.size(28), FMP4.type('elst'));
      buffer.write(new Uint8Array([0x00, 0x00, 0x00, 0x01,
        // entry count
        duration >> 24 & 0xff, duration >> 16 & 0xff, duration >> 8 & 0xff, duration & 0xff, mediaTime >> 24 & 0xff, mediaTime >> 16 & 0xff, mediaTime >> 8 & 0xff, mediaTime & 0xff, 0x00, 0x00, 0x00, 0x01 // media rate
      ]));
      return buffer.buffer;
    }
  }, {
    key: 'mdia',
    value: function mdia(data) {
      var buffer = new Buffer$1();
      var size = 8;
      var mdhd = FMP4.mdhd(data.timescale, data.duration);
      var hdlr = FMP4.hdlr(data.type);
      var minf = FMP4.minf(data);
      [mdhd, hdlr, minf].forEach(function(item) {
        size += item.byteLength;
      });
      buffer.write(FMP4.size(size), FMP4.type('mdia'), mdhd, hdlr, minf);
      return buffer.buffer;
    }
  }, {
    key: 'mdhd',
    value: function mdhd(timescale) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var buffer = new Buffer$1();
      duration *= timescale;
      var upperWordDuration = Math.floor(duration / (UINT32_MAX + 1));
      var lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1));
      var content = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02,
        // creation_time
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03,
        // modification_time
        timescale >> 24 & 0xff, timescale >> 16 & 0xff, timescale >> 8 & 0xff, timescale & 0xff, upperWordDuration >> 24, upperWordDuration >> 16 & 0xff, upperWordDuration >> 8 & 0xff, upperWordDuration & 0xff, lowerWordDuration >> 24, lowerWordDuration >> 16 & 0xff, lowerWordDuration >> 8 & 0xff, lowerWordDuration & 0xff, 0x55, 0xc4,
        // 'und' language
        0x00, 0x00]);
      buffer.write(FMP4.size(12 + content.byteLength), FMP4.type('mdhd'), FMP4.extension(1, 0), content);
      return buffer.buffer;
    }
  }, {
    key: 'hdlr',
    value: function hdlr(type) {
      var buffer = new Buffer$1();
      var value = [0x00,
        // version 0
        0x00, 0x00, 0x00,
        // flags
        0x00, 0x00, 0x00, 0x00,
        // pre_defined
        0x76, 0x69, 0x64, 0x65,
        // handler_type: 'vide'
        0x00, 0x00, 0x00, 0x00,
        // reserved
        0x00, 0x00, 0x00, 0x00,
        // reserved
        0x00, 0x00, 0x00, 0x00,
        // reserved
        0x56, 0x69, 0x64, 0x65, 0x6f, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00 // name: 'VideoHandler'
      ];
      if(type === 'audio') {
        value.splice.apply(value, [8, 4].concat([0x73, 0x6f, 0x75, 0x6e]));
        value.splice.apply(value, [24, 13].concat([0x53, 0x6f, 0x75, 0x6e, 0x64, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00]));
      }
      buffer.write(FMP4.size(8 + value.length), FMP4.type('hdlr'), new Uint8Array(value));
      return buffer.buffer;
    }
  }, {
    key: 'minf',
    value: function minf(data) {
      var buffer = new Buffer$1();
      var size = 8;
      var vmhd = data.type === 'video' ? FMP4.vmhd() : FMP4.smhd();
      var dinf = FMP4.dinf();
      var stbl = FMP4.stbl(data);
      [vmhd, dinf, stbl].forEach(function(item) {
        size += item.byteLength;
      });
      buffer.write(FMP4.size(size), FMP4.type('minf'), vmhd, dinf, stbl);
      return buffer.buffer;
    }
  }, {
    key: 'vmhd',
    value: function vmhd() {
      var buffer = new Buffer$1();
      buffer.write(FMP4.size(20), FMP4.type('vmhd'), new Uint8Array([0x00,
        // version
        0x00, 0x00, 0x01,
        // flags
        0x00, 0x00,
        // graphicsmode
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // opcolor
      ]));
      return buffer.buffer;
    }
  }, {
    key: 'smhd',
    value: function smhd() {
      var buffer = new Buffer$1();
      buffer.write(FMP4.size(16), FMP4.type('smhd'), new Uint8Array([0x00,
        // version
        0x00, 0x00, 0x00,
        // flags
        0x00, 0x00,
        // balance
        0x00, 0x00 // reserved
      ]));
      return buffer.buffer;
    }
  }, {
    key: 'dinf',
    value: function dinf() {
      var buffer = new Buffer$1();
      var dref = [0x00,
        // version 0
        0x00, 0x00, 0x00,
        // flags
        0x00, 0x00, 0x00, 0x01,
        // entry_count
        0x00, 0x00, 0x00, 0x0c,
        // entry_size
        0x75, 0x72, 0x6c, 0x20,
        // 'url' type
        0x00,
        // version 0
        0x00, 0x00, 0x01 // entry_flags
      ];
      buffer.write(FMP4.size(36), FMP4.type('dinf'), FMP4.size(28), FMP4.type('dref'), new Uint8Array(dref));
      return buffer.buffer;
    }
  }, {
    key: 'stbl',
    value: function stbl(data) {
      var buffer = new Buffer$1();
      var size = 8;
      var stsd = FMP4.stsd(data);
      var stts = FMP4.stts();
      var stsc = FMP4.stsc();
      var stsz = FMP4.stsz();
      var stco = FMP4.stco();
      [stsd, stts, stsc, stsz, stco].forEach(function(item) {
        size += item.byteLength;
      });
      buffer.write(FMP4.size(size), FMP4.type('stbl'), stsd, stts, stsc, stsz, stco);
      return buffer.buffer;
    }
  }, {
    key: 'stsd',
    value: function stsd(data) {
      var buffer = new Buffer$1();
      var content;
      if(data.type === 'audio') {
        if(data.audioCodec && data.audioCodec === 'Opus') {
          content = FMP4.Opus(data);
        } else
          // if (!data.isAAC && data.codec === 'mp4') {
          //     content = FMP4.mp3(data);
          // } else {
          //
          // }
          // 支持mp4a
          content = FMP4.mp4a(data);
      } else {
        content = FMP4.avc1(data);
      }
      buffer.write(FMP4.size(16 + content.byteLength), FMP4.type('stsd'), FMP4.extension(0, 0), new Uint8Array([0x00, 0x00, 0x00, 0x01]), content);
      return buffer.buffer;
    }
  }, {
    key: 'Opus',
    value: function Opus(data) {
      var buffer = new Buffer$1();
      var content = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 2, 0, 16, 0, 0, 0, 0,
        187, 128, 0, 0, 0, 0, 0,
        23, 100, 79, 112, 115, 0,
        2, 0, 0, 0, 0, 187, 128, 0,
        0, 255, 2, 0, 0, 1, 0, 0,
        0, 20, 98, 116, 114, 116,
        0, 0, 0, 0, 0, 1, 248, 80,
        0, 1, 248, 80
      ]);
      buffer.write(FMP4.size(8 + content.byteLength), FMP4.type('Opus'), content);
      return buffer.buffer;
    }
  }, {
    key: 'mp4a',
    value: function mp4a(data) {
      var buffer = new Buffer$1();
      var content = new Uint8Array([0x00, 0x00, 0x00,
        // reserved
        0x00, 0x00, 0x00,
        // reserved
        0x00, 0x01,
        // data_reference_index
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        // reserved
        0x00, data.channelCount,
        // channelcount
        0x00, 0x10,
        // sampleSize:16bits
        0x00, 0x00, 0x00, 0x00,
        // reserved2
        data.samplerate >> 8 & 0xff, data.samplerate & 0xff,
        //
        0x00, 0x00]);
      var esds = FMP4.esds(data.audioConfig);
      buffer.write(FMP4.size(8 + content.byteLength + esds.byteLength), FMP4.type('mp4a'), content, esds);
      return buffer.buffer;
    }
  }, {
    key: 'esds',
    value: function esds() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [43, 146, 8, 0];
      var configlen = config.length;
      var buffer = new Buffer$1();
      var content = new Uint8Array([0x00,
        // version 0
        0x00, 0x00, 0x00,
        // flags

        0x03,
        // descriptor_type
        0x17 + configlen,
        // length
        0x00, 0x01,
        // es_id
        0x00,
        // stream_priority

        0x04,
        // descriptor_type
        0x0f + configlen,
        // length
        0x40,
        // codec : mpeg4_audio
        0x15,
        // stream_type
        0x00, 0x00, 0x00,
        // buffer_size
        0x00, 0x00, 0x00, 0x00,
        // maxBitrate
        0x00, 0x00, 0x00, 0x00,
        // avgBitrate

        0x05 // descriptor_type
      ].concat([configlen]).concat(config).concat([0x06, 0x01, 0x02]));
      buffer.write(FMP4.size(8 + content.byteLength), FMP4.type('esds'), content);
      return buffer.buffer;
    }
  }, {
    key: 'avc1',
    value: function avc1(data) {
      var buffer = new Buffer$1();
      var size = 40; // 8(avc1)+8(avcc)+8(btrt)+16(pasp)
      var sps = data.sps;
      var pps = data.pps;
      var width = data.width;
      var height = data.height;
      var hSpacing = data.pixelRatio[0];
      var vSpacing = data.pixelRatio[1];
      var avcc = new Uint8Array([0x01,
        // version
        sps[1],
        // profile
        sps[2],
        // profile compatible
        sps[3],
        // level
        0xfc | 3, 0xE0 | 1 // 目前只处理一个sps
      ].concat([sps.length >>> 8 & 0xff, sps.length & 0xff]).concat(sps).concat(1).concat([pps.length >>> 8 & 0xff, pps.length & 0xff]).concat(pps));
      var avc1 = new Uint8Array([0x00, 0x00, 0x00,
        // reserved
        0x00, 0x00, 0x00,
        // reserved
        0x00, 0x01,
        // data_reference_index
        0x00, 0x00,
        // pre_defined
        0x00, 0x00,
        // reserved
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        // pre_defined
        width >> 8 & 0xff, width & 0xff,
        // width
        height >> 8 & 0xff, height & 0xff,
        // height
        0x00, 0x48, 0x00, 0x00,
        // horizresolution
        0x00, 0x48, 0x00, 0x00,
        // vertresolution
        0x00, 0x00, 0x00, 0x00,
        // reserved
        0x00, 0x01,
        // frame_count
        0x12, 0x64, 0x61, 0x69, 0x6C,
        // dailymotion/hls.js
        0x79, 0x6D, 0x6F, 0x74, 0x69, 0x6F, 0x6E, 0x2F, 0x68, 0x6C, 0x73, 0x2E, 0x6A, 0x73, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        // compressorname
        0x00, 0x18,
        // depth = 24
        0x11, 0x11]); // pre_defined = -1
      var btrt = new Uint8Array([0x00, 0x1c, 0x9c, 0x80,
        // bufferSizeDB
        0x00, 0x2d, 0xc6, 0xc0,
        // maxBitrate
        0x00, 0x2d, 0xc6, 0xc0 // avgBitrate
      ]);
      var pasp = new Uint8Array([hSpacing >> 24,
      // hSpacing
        hSpacing >> 16 & 0xff, hSpacing >> 8 & 0xff, hSpacing & 0xff, vSpacing >> 24,
        // vSpacing
        vSpacing >> 16 & 0xff, vSpacing >> 8 & 0xff, vSpacing & 0xff]);
      buffer.write(FMP4.size(size + avc1.byteLength + avcc.byteLength + btrt.byteLength), FMP4.type('avc1'), avc1, FMP4.size(8 + avcc.byteLength), FMP4.type('avcC'), avcc, FMP4.size(20), FMP4.type('btrt'), btrt, FMP4.size(16), FMP4.type('pasp'), pasp);
      return buffer.buffer;
    }
  }, {
    key: 'stts',
    value: function stts() {
      var buffer = new Buffer$1();
      var content = new Uint8Array([0x00,
        // version
        0x00, 0x00, 0x00,
        // flags
        0x00, 0x00, 0x00, 0x00 // entry_count
      ]);
      buffer.write(FMP4.size(16), FMP4.type('stts'), content);
      return buffer.buffer;
    }
  }, {
    key: 'stsc',
    value: function stsc() {
      var buffer = new Buffer$1();
      var content = new Uint8Array([0x00,
        // version
        0x00, 0x00, 0x00,
        // flags
        0x00, 0x00, 0x00, 0x00 // entry_count
      ]);
      buffer.write(FMP4.size(16), FMP4.type('stsc'), content);
      return buffer.buffer;
    }
  }, {
    key: 'stco',
    value: function stco() {
      var buffer = new Buffer$1();
      var content = new Uint8Array([0x00,
        // version
        0x00, 0x00, 0x00,
        // flags
        0x00, 0x00, 0x00, 0x00 // entry_count
      ]);
      buffer.write(FMP4.size(16), FMP4.type('stco'), content);
      return buffer.buffer;
    }
  }, {
    key: 'stsz',
    value: function stsz() {
      var buffer = new Buffer$1();
      var content = new Uint8Array([0x00,
        // version
        0x00, 0x00, 0x00,
        // flags
        0x00, 0x00, 0x00, 0x00,
        // sample_size
        0x00, 0x00, 0x00, 0x00 // sample_count
      ]);
      buffer.write(FMP4.size(20), FMP4.type('stsz'), content);
      return buffer.buffer;
    }
  }, {
    key: 'mvex',
    value: function mvex(duration, timeScale) {
      var buffer = new Buffer$1();
      var mehd = Buffer$1.writeUint32(duration * timeScale);
      buffer.write(FMP4.size(88), FMP4.type('mvex'), FMP4.size(16), FMP4.type('mehd'), FMP4.extension(0, 0), mehd, FMP4.trex(1), FMP4.trex(2));
      return buffer.buffer;
    }
  }, {
    key: 'trex',
    value: function trex(id) {
      var buffer = new Buffer$1();
      var content = new Uint8Array([0x00,
        // version 0
        0x00, 0x00, 0x00,
        // flags
        id >> 24, id >> 16 & 0xff, id >> 8 & 0xff, id & 0xff,
        // track_ID
        0x00, 0x00, 0x00, 0x01,
        // default_sample_description_index
        0x00, 0x00, 0x00, 0x00,
        // default_sample_duration
        0x00, 0x00, 0x00, 0x00,
        // default_sample_size
        0x00, 0x01, 0x00, 0x01 // default_sample_flags
      ]);
      buffer.write(FMP4.size(8 + content.byteLength), FMP4.type('trex'), content);
      return buffer.buffer;
    }
  }, {
    key: 'moof',
    value: function moof(data) {
      var buffer = new Buffer$1();
      var size = 8;
      var mfhd = FMP4.mfhd();
      var traf = FMP4.traf(data);
      [mfhd, traf].forEach(function(item) {
        size += item.byteLength;
      });
      buffer.write(FMP4.size(size), FMP4.type('moof'), mfhd, traf);
      return buffer.buffer;
    }
  }, {
    key: 'mfhd',
    value: function mfhd() {
      var buffer = new Buffer$1();
      var content = Buffer$1.writeUint32(FMP4.sequence);
      FMP4.sequence += 1;
      buffer.write(FMP4.size(16), FMP4.type('mfhd'), FMP4.extension(0, 0), content);
      return buffer.buffer;
    }
  }, {
    key: 'traf',
    value: function traf(data) {
      var buffer = new Buffer$1();
      var size = 8;
      var tfhd = FMP4.tfhd(data.id);
      var tfdt = FMP4.tfdt(data.time);
      var sdtp = FMP4.sdtp(data);
      var trun = FMP4.trun(data, sdtp.byteLength);
      [tfhd, tfdt, sdtp, trun].forEach(function(item) {
        size += item.byteLength;
      });
      buffer.write(FMP4.size(size), FMP4.type('traf'), tfhd, tfdt, sdtp, trun);
      return buffer.buffer;
    }
  }, {
    key: 'tfhd',
    value: function tfhd(id) {
      var buffer = new Buffer$1();
      var content = Buffer$1.writeUint32(id);
      buffer.write(FMP4.size(16), FMP4.type('tfhd'), FMP4.extension(0, 0), content);
      return buffer.buffer;
    }
  }, {
    key: 'tfdt',
    value: function tfdt(time) {
      var buffer = new Buffer$1();
      var upper = Math.floor(time / (UINT32_MAX + 1));
      var lower = Math.floor(time % (UINT32_MAX + 1));
      buffer.write(FMP4.size(20), FMP4.type('tfdt'), FMP4.extension(1, 0), Buffer$1.writeUint32(upper), Buffer$1.writeUint32(lower));
      return buffer.buffer;
    }
  }, {
    key: 'trun',
    value: function trun(data, sdtpLength) {
      var id = data.id;
      var ceil = id === 1 ? 16 : 12;
      var buffer = new Buffer$1();
      var sampleCount = Buffer$1.writeUint32(data.samples.length);
      // mdat-header 8
      // moof-header 8
      // mfhd 16
      // traf-header 8
      // thhd 16
      // tfdt 20
      // trun-header 12
      // sampleCount 4
      // data-offset 4
      // samples.length
      var offset = Buffer$1.writeUint32(8 + 8 + 16 + 8 + 16 + 20 + 12 + 4 + 4 + ceil * data.samples.length + sdtpLength);
      buffer.write(FMP4.size(20 + ceil * data.samples.length), FMP4.type('trun'), FMP4.extension(0, data.flags), sampleCount, offset);
      data.samples.forEach(function(item, idx) {
        buffer.write(Buffer$1.writeUint32(item.duration));
        buffer.write(Buffer$1.writeUint32(item.size));
        if(id === 1) {
          buffer.write(Buffer$1.writeUint32(item.key ? 0x02000000 : 0x01010000));
          buffer.write(Buffer$1.writeUint32(item.offset));
        } else {
          buffer.write(Buffer$1.writeUint32(0x1000000));
        }
      });
      return buffer.buffer;
    }
  }, {
    key: 'sdtp',
    value: function sdtp(data) {
      var buffer = new Buffer$1();
      buffer.write(FMP4.size(12 + data.samples.length), FMP4.type('sdtp'), FMP4.extension(0, 0));
      data.samples.forEach(function(item) {
        buffer.write(new Uint8Array(data.id === 1 ? [item.key ? 32 : 16] : [16]));
      });
      return buffer.buffer;
    }
  }, {
    key: 'mdat',
    value: function mdat(data) {
      var buffer = new Buffer$1();
      var size = 8;
      data.samples.forEach(function(item) {
        size += item.size;
      });
      buffer.write(FMP4.size(size), FMP4.type('mdat'));
      data.samples.forEach(function(item) {
        buffer.write(item.buffer);
      });
      return buffer.buffer;
    }
  }]);
  return FMP4;
}();
FMP4.sequence = 1;
var FMP4$1 = FMP4;

/* eslint-disable camelcase */
var util = {};

/**
 * [使用递归查询指定type的box]
 * var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
 * @param  {Object} root [JSON对象]
 * @param  {String} type [box的类型]
 * @param  {?Array} type [box]
 * @return {Object|Array<Object>|undefined} [box]
 */
util.findBox = function(root, type) {
  var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if(root.type !== type) {
    if(root && root.subBox) {
      var box = root.subBox.filter(function(item) {
        return item.type === type;
      });
      if(box.length) {
        box.forEach(function(item) {
          return result.push(item);
        });
      } else {
        root.subBox.forEach(function(item) {
          return util.findBox(item, type, result);
        });
      }
    }
  } else {
    result.push(root);
  }
  result = [].concat(result);
  return result.length > 1 ? result : result[0];
};
util.padStart = function(str, length, pad) {
  var charstr = String(pad);
  var len = length >> 0;
  var maxlen = Math.ceil(len / charstr.length);
  var chars = [];
  var r = String(str);
  while(maxlen--) {
    chars.push(charstr);
  }
  return chars.join('').substring(0, len - r.length) + r;
};

/**
 * [十进制转十六进制]
 * @param  {Number} value [要转换的十进制数字]
 * @return {String}       [十六进制]
 */
util.toHex = function() {
  var hex = [];
  for(var _len3 = arguments.length, value = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    value[_key3] = arguments[_key3];
  }
  value.forEach(function(item) {
    hex.push(util.padStart(Number(item).toString(16), 2, 0));
  });
  return hex;
};

/**
 * [求和计算]
 * @param  {[type]} rst [description]
 * @return {[type]}     [description]
 */
util.sum = function() {
  var count = 0;
  for(var _len4 = arguments.length, rst = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    rst[_key4] = arguments[_key4];
  }
  rst.forEach(function(item) {
    count += item;
  });
  return count;
};

/**
 * [计算音视频数据在Mdat中的偏移量]
 * @param  {Array} stsc         [块偏移量]
 * @param  {Number} sample_order [帧次序]
 * @return {Object}              [块的位置和当前帧的偏移数]
 */
util.stscOffset = function(stsc, sample_order) {
  var chunk_index;
  var samples_offset = '';
  var chunk_start = stsc.entries.filter(function(item) {
    return item.first_sample <= sample_order && sample_order < item.first_sample + item.chunk_count * item.samples_per_chunk;
  })[0];
  if(!chunk_start) {
    var last_chunk = stsc.entries.pop();
    stsc.entries.push(last_chunk);
    var chunk_offset = Math.floor((sample_order - last_chunk.first_sample) / last_chunk.samples_per_chunk);
    var last_chunk_index = last_chunk.first_chunk + chunk_offset;
    var last_chunk_first_sample = last_chunk.first_sample + last_chunk.samples_per_chunk * chunk_offset;
    return {
      chunk_index: last_chunk_index,
      samples_offset: [last_chunk_first_sample, sample_order]
    };
  } else {
    var _chunk_offset = Math.floor((sample_order - chunk_start.first_sample) / chunk_start.samples_per_chunk);
    var chunk_offset_sample = chunk_start.first_sample + _chunk_offset * chunk_start.samples_per_chunk;
    chunk_index = chunk_start.first_chunk + _chunk_offset;
    samples_offset = [chunk_offset_sample, sample_order];
    return {
      chunk_index: chunk_index,
      samples_offset: samples_offset
    };
  }
};
util.seekSampleOffset = function(stsc, stco, stsz, order, mdatStart) {
  var chunkOffset = util.stscOffset(stsc, order + 1);
  var result = stco.entries[chunkOffset.chunk_index - 1] + util.sum.apply(null, stsz.entries.slice(chunkOffset.samples_offset[0] - 1, chunkOffset.samples_offset[1] - 1)) - mdatStart;
  if(result === undefined) {
    throw new Error('result='.concat(result, ',stco.length=').concat(stco.entries.length, ',sum=').concat(util.sum.apply(null, stsz.entries.slice(0, order))));
  } else if(result < 0) {
    throw new Error('result='.concat(result, ',stco.length=').concat(stco.entries.length, ',sum=').concat(util.sum.apply(null, stsz.entries.slice(0, order))));
  }
  return result;
};
util.seekSampleTime = function(stts, ctts, order) {
  var timeOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var time;
  var duration;
  var count = 0;
  var startTime = 0;
  var offset = 0;
  stts.entry.every(function(item) {
    duration = item.sampleDuration;
    if(order < count + item.sampleCount) {
      time = startTime + (order - count) * item.sampleDuration;
      return false;
    } else {
      count += item.sampleCount;
      startTime += item.sampleCount * duration;
      return true;
    }
  });
  if(ctts) {
    var ct = 0;
    ctts.entry.every(function(item) {
      ct += item.count;
      if(order < ct) {
        offset = item.offset;
        return false;
      } else {
        return true;
      }
    });
  }
  if(!time) {
    time = startTime + (order - count) * duration;
  }
  time -= timeOffset;
  return {
    time: time,
    duration: duration,
    offset: offset
  };
};
util.seekOrderSampleByTime = function(stts, timeScale, time) {
  var startTime = 0;
  var order = 0;
  var count = 0;
  var itemDuration;
  stts.every(function(item, idx) {
    itemDuration = item.sampleCount * item.sampleDuration / timeScale;
    if(time <= startTime + itemDuration) {
      order = count + Math.ceil((time - startTime) * timeScale / item.sampleDuration);
      startTime = startTime + Math.ceil((time - startTime) * timeScale / item.sampleDuration) * item.sampleDuration / timeScale;
      return false;
    } else {
      startTime += itemDuration;
      count += item.sampleCount;
      return true;
    }
  });
  return {
    order: order,
    startTime: startTime
  };
};
util.sampleCount = function(stts) {
  var count = 0;
  stts.forEach(function(item, idx) {
    count += item.sampleCount;
  });
  return count;
};
util.seekTrakDuration = function(trak, timeScale) {
  var stts = util.findBox(trak, 'stts');
  var duration = 0;
  stts.entry.forEach(function(item) {
    duration += item.sampleCount * item.sampleDuration;
  });
  return Number(duration / timeScale).toFixed(4);
};
function getResponseHeaders(xhr) {
  var headerMap = {};
  if(xhr instanceof window.XMLHttpRequest) {
    try {
      var headers = xhr.getAllResponseHeaders();
      // Convert the header string into an array
      // of individual headers
      var arr = headers.trim().split(/[\r\n]+/);
      arr.forEach(function(line) {
        var parts = line.split(': ');
        var header = parts.shift();
        var value = parts.join(': ');
        headerMap[header] = value;
      });
    } catch(error) { }
  }
  return headerMap;
}
var util$1 = util;

/* eslint-disable array-callback-return */
// TODO: 增加请求到的数据的信息回传 以及下载速度、建连速度、请求状态等
var Task = /* #__PURE__*/function() {
  function Task(url, range) {
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var withCredentials = arguments.length > 3 ? arguments[3] : undefined;
    var _callback = arguments.length > 4 ? arguments[4] : undefined;
    _classCallCheck(this, Task);
    EventEmitter(this);
    this.url = url;
    this.range = range;
    this.withCredentials = withCredentials;
    this.id = range.join('-');
    this.on = false;
    var xhr = new window.XMLHttpRequest();
    xhr.target = this;
    xhr.responseType = 'arraybuffer';
    xhr.withCredentials = this.withCredentials || false;
    xhr.open('get', url);
    xhr.setRequestHeader('Range', 'bytes='.concat(range[0], '-').concat(range[1]));
    Object.keys(headers).map(function(key) {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.onload = function() {
      var headers = getResponseHeaders(xhr);
      xhr.target.remove();
      if(xhr.status === 200 || xhr.status === 206) {
        if(_callback && _callback instanceof Function) {
          _callback({
            response: xhr.response,
            headers: headers,
            status: xhr.status
          });
        }
      } else {
        xhr.target.emit('error', new Errors$1('network', '', {
          status: xhr.status,
          headers: headers,
          line: 25,
          handle: '[Task] constructor',
          msg: xhr.status,
          url: url
        }));
      }
    };
    xhr.onerror = function(e) {
      xhr.target.emit('error', new Errors$1('network', '', {
        line: 25,
        handle: '[Task] constructor',
        msg: e.message,
        url: url
      }));
      xhr.target.remove();
    };
    xhr.onabort = function() {
      xhr.target.remove();
    };
    this.xhr = xhr;
    Task.queue.push(this);
    this.update();
  }
  _createClass(Task, [{
    key: 'cancel',
    value: function cancel() {
      this.xhr.abort();
    }
  }, {
    key: 'remove',
    value: function remove() {
      var _this = this;
      Task.queue.filter(function(item, idx) {
        if(item.url === _this.url && item.id === _this.id) {
          Task.queue.splice(idx, 1);
          return true;
        } else {
          return false;
        }
      });
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      var Queue = Task.queue;
      var sended = Queue.filter(function(item) {
        return item.on;
      });
      var wait = Queue.filter(function(item) {
        return !item.on;
      });
      var max = Task.limit - sended.length;
      wait.forEach(function(item, idx) {
        if(idx < max) {
          item.run();
        }
      });
    }
  }, {
    key: 'run',
    value: function run() {
      if(this.xhr.readyState === 1) {
        this.on = true;
        this.xhr.send();
      } else {
        this.remove();
      }
    }
  }], [{
    key: 'clear',
    value: function clear() {
      Task.queue.forEach(function(item) {
        if(item.on) {
          item.cancel();
        }
      });
      Task.queue.length = 0;
    }
  }]);
  return Task;
}();
Task.queue = [];
Task.limit = 2;
var Task$1 = Task;

/* eslint-disable array-callback-return */
var MP4 = /* #__PURE__*/function() {
  /**
     * [constructor 构造函数]
     * @param {String} url                      [视频地址]
     * @param {Number} [chunk_size=Math.pow(25, 4)]           [请求的数据块大小，对于长视频设置的较大些可以避免二次请求]
     */
  function MP4(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var chunkSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Math.pow(25, 10);
    _classCallCheck(this, MP4);
    EventEmitter(this);
    this.url = url;
    this.options = options;
    this.withCredentials = !!options.withCredentials;
    FMP4$1.videoOnly = this.videoOnly = options.videoOnly || false;
    this.CHUNK_SIZE = chunkSize;
    this.init(url);
    this.once('moovReady', this.moovParse.bind(this));
    this.cache = new Buffer$1();
    this.bufferCache = new Set();
    this.timeRage = [];
    this.canDownload = true;
    this.bufferLoaded = new Uint8Array(0);
    this._boxes = [];
    this.count = 0;
  }

  /**
     * [getData 根据字节区间下载二进制数据]
     * @param  {Number} [start=0]  [起始字节]
     * @param  {Number} [end=start + this.CHUNK_SIZE] [截止字节]
     */
  _createClass(MP4, [{
    key: 'getData',
    value: function getData() {
      var _this2 = this;
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start + this.CHUNK_SIZE;
      var self = this;
      return new Promise(function(resolve, reject) {
        var task = new Task$1(_this2.url, [start, end], _this2.options.headers || {}, _this2.withCredentials, resolve, reject);
        task.once('error', function(err) {
          reject(err);
          self.emit('error', err);
        });
      }).then(async function(res) {
        if(res.status === 206 && res.response.byteLength < end - start) {
          if(!res.response || !res.response.byteLength) return res;
          let res2;
          try {
            res2 = await self.getData(start + res.response.byteLength, end);
          } catch(err) {
            // console.log('fMP4 UNDERFETCH ERROR ', err);
            return res;
          }
          if(!res2.response || !res2.response.byteLength) return res;
          const newBuffer = new Uint8Array(res.response.byteLength + res2.response.byteLength);
          newBuffer.set(new Uint8Array(res.response), 0);
          newBuffer.set(new Uint8Array(res2.response), res.response.byteLength);
          return {
            status: res2.status,
            response: newBuffer.buffer,
            headers: res2.headers
          }
        }
        return res;
      });
    }

    /**
       * [moovParse 解析视频信息]
       * @return {[type]} [description]
       */
  }, {
    key: 'moovParse',
    value: function moovParse() {
      var _this3 = this;
      var self = this;
      var moov = this.moovBox;
      var mvhd = util$1.findBox(moov, 'mvhd');
      var traks = util$1.findBox(moov, 'trak');
      var videoTrak, audioTrak;
      var videoCodec, audioCodec;
      var videoTimeScale, audioTimeScale;
      var sps, pps, profile, width, height;
      var channelCount, sampleRate, decoderConfig;
      traks = [].concat(traks);
      traks.forEach(function(trak) {
        var hdlr = util$1.findBox(trak, 'hdlr');
        var mdhd = util$1.findBox(trak, 'mdhd');
        if(!hdlr || !mdhd) {
          self.emit('error', new Errors$1('parse', '', {
            line: 72,
            handle: '[MP4] moovParse',
            url: self.url
          }));
          return;
        }
        if(hdlr.handleType === 'vide' && self.videoOnly) {
          var _elst = util$1.findBox(trak, 'elst');
          trak.empty_duration = 0;
          if(_elst.empty_duration) {
            trak.empty_duration = _elst.empty_duration * mdhd.timescale / mvhd.timeScale;
          }
          trak.time_offset = _elst.start_time - trak.empty_duration;
        }
        var stsd = util$1.findBox(trak, 'stsd');
        var codecBox = stsd.subBox[0];
        if(hdlr.handleType === 'vide') {
          var _avcC = util$1.findBox(trak, 'avcC');
          var _tkhd = util$1.findBox(trak, 'tkhd');
          videoTrak = trak;
          videoTimeScale = mdhd.timescale;
          if(_avcC) {
            videoCodec = ''.concat(codecBox.type, '.') + util$1.toHex(_avcC.profile, _avcC.profileCompatibility, _avcC.AVCLevelIndication).join('');
            sps = _avcC.sequence && _avcC.sequence.map(function(item) {
              return Number('0x'.concat(item));
            });
            pps = _avcC.pps && _avcC.pps.map(function(item) {
              return Number('0x'.concat(item));
            });
            profile = _avcC.profile;
          } else {
            videoCodec = ''.concat(codecBox.type);
          }
          if(_tkhd) {
            width = _tkhd.width;
            height = _tkhd.height;
          }
        }
        if(hdlr.handleType === 'soun') {
          audioTrak = trak;
          var _esds = util$1.findBox(trak, 'esds');
          var _mp4a = util$1.findBox(trak, 'mp4a');
          // var _opus =
          var ESDescriptor = util$1.findBox(trak, 5);
          audioTimeScale = mdhd.timescale;
          if(codecBox.type === 'Opus') {
            audioCodec = ''.concat(codecBox.type);
          } else if(_esds) {
            audioCodec = ''.concat(codecBox.type, '.') + util$1.toHex(_esds.subBox[0].subBox[0].typeID) + '.'.concat(_esds.subBox[0].subBox[0].subBox[0].type);
          } else {
            audioCodec = ''.concat(codecBox.type);
          }
          if(ESDescriptor && ESDescriptor.EScode) {
            decoderConfig = ESDescriptor.EScode.map(function(item) {
              return Number('0x'.concat(item));
            });
          }
          if(_mp4a) {
            channelCount = _mp4a.channelCount;
            sampleRate = _mp4a.sampleRate;
          }
        }
      });
      this.videoTrak = deepmerge_1({}, videoTrak);
      if(!audioTrak) {
        this.videoOnly = true;
      }
      if(!this.videoOnly) {
        this.audioTrak = deepmerge_1({}, audioTrak);
      }
      var mdat = this._boxes.find(function(item) {
        return item.type === 'mdat';
      });
      var videoDuration = util$1.seekTrakDuration(videoTrak, videoTimeScale);
      var audioDuration;
      if(!this.videoOnly) {
        audioDuration = util$1.seekTrakDuration(audioTrak, audioTimeScale);
      }
      this.mdatStart = mdat.start;
      var vf = this.videoKeyFrames;
      var videoKeyFramesLength = vf.length - 1;
      vf.forEach(function(item, idx) {
        if(idx < videoKeyFramesLength) {
          _this3.timeRage.push([item.time.time / videoTimeScale, vf[idx + 1].time.time / videoTimeScale]);
        } else {
          _this3.timeRage.push([item.time.time / videoTimeScale, -1]);
        }
      });
      this.meta = {
        videoCodec: videoCodec,
        createTime: mvhd.createTime,
        modifyTime: mvhd.modifyTime,
        duration: videoDuration,
        timeScale: mvhd.timeScale,
        videoDuration: videoDuration,
        videoTimeScale: videoTimeScale,
        endTime: videoDuration,
        sps: sps,
        pps: pps,
        width: width,
        height: height,
        profile: profile,
        pixelRatio: [1, 1],
        channelCount: channelCount,
        sampleRate: sampleRate,
        audioConfig: decoderConfig
      };
      if(!this.videoOnly) {
        this.meta.audioCodec = audioCodec;
        this.meta.audioDuration = audioDuration;
        this.meta.audioTimeScale = audioTimeScale;
        this.meta.duration = mvhd.duration / mvhd.timeScale;
        this.meta.endTime = Math.min(videoDuration, audioDuration);
      }
      // this.meta.duration = 0;
      // this.meta.audioDuration = 0;
      // this.meta.videoDuration = 0;
      // this.meta.endTime = 0;
    }
  }, {
    key: 'init',
    value: function init() {
      this.getMetaInfo();
    }
  }, {
    key: 'checkMoovReady',
    value: function checkMoovReady() {
      var moov = this._boxes.filter(function(box) {
        return box.type === 'moov';
      });
      if(moov.length) {
        this.moovBox = moov[0];
        this.emit('moovReady', moov);
      } else {
        this.emit('error', new Errors$1('parse', '', {
          line: 203,
          handle: '[MP4] init',
          msg: 'not find moov box'
        }));
      }
    }
  }, {
    key: 'getMetaInfo',
    value: function getMetaInfo() {
      var _this4 = this;
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var ended = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0 + this.CHUNK_SIZE;
      var nextStart = start;
      this.getData(start, ended).then(function(res) {
        var buffer = res.response;
        nextStart += buffer.byteLength;
        var parsed = null;
        _this4.bufferLoaded = lib(Uint8Array, _this4.bufferLoaded, new Uint8Array(buffer));
        try {
          var parseStart = 0;
          if(_this4._boxes.length > 0) {
            parseStart = _this4._boxes[_this4._boxes.length - 1].size + _this4._boxes[_this4._boxes.length - 1].start;
          }
          parsed = new Parser(_this4.bufferLoaded.buffer.slice(parseStart, ended));
          // console.log('parsed.boxes', parsed.boxes)
          _this4._boxes = _this4._boxes.concat(parsed.boxes);
          var moovready = false;
          var mdatready = false;
          var _mdat = null;
          // 检查moov和第一部分的mdat信息
          _this4._boxes.map(function(item) {
            if(item.type === 'moov') {
              moovready = true;
            }
            if(item.type === 'mdat') {
              _mdat = item;
              mdatready = true;
            }
          });
          if(!moovready || !mdatready) {
            var nextBox = parsed.nextBox;
            if(nextBox && nextBox.type === 'moov') {
              _this4.getMetaInfo(nextStart, nextStart + nextBox.size + 28);
            } else if(mdatready && !nextBox) {
              // moov在mdat之后 从mdat结束为止开始请求
              nextStart = _mdat.start + _mdat.size;
              _this4.getData(nextStart, '').then(function(res) {
                parsed = new Parser(res.response);
                _this4._boxes = _this4._boxes.concat(parsed.boxes);
                _this4.checkMoovReady();
              });
            } else {
              _this4.getMetaInfo(nextStart, nextStart + _this4.CHUNK_SIZE);
            }
          } else {
            _this4.checkMoovReady();
          }
        } catch(e) {
          _this4.emit('error', e.type ? e : new Errors$1('parse', '', {
            line: 176,
            handle: '[MP4] init',
            msg: e.message
          }));
          throw e;
        }
      })['catch'](function(e) {
        _this4.emit('error', new Errors$1('network', '', {
          line: 231,
          handle: '[MP4] getData',
          msg: 'getData failed'
        }));
        throw e;
      });
    }
  }, {
    key: 'getSamplesByOrders',
    value: function getSamplesByOrders() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'video';
      var start = arguments.length > 1 ? arguments[1] : undefined;
      var end = arguments.length > 2 ? arguments[2] : undefined;
      var trak = type === 'video' ? this.videoTrak : this.audioTrak;
      var stsc = util$1.findBox(trak, 'stsc'); // chunk~samples
      var stsz = util$1.findBox(trak, 'stsz'); // sample-size
      var stts = util$1.findBox(trak, 'stts'); // sample-time
      var stco = util$1.findBox(trak, 'stco'); // chunk-offset
      var ctts = util$1.findBox(trak, 'ctts'); // offset-compositime
      var mdatStart = this.mdatStart;
      var samples = [];
      end = end !== undefined ? end : stsz.entries.length;
      if(start instanceof Array) {
        start.forEach(function(item, idx) {
          samples.push({
            idx: item,
            size: stsz.entries[item],
            time: util$1.seekSampleTime(stts, ctts, item, trak.time_offset),
            offset: util$1.seekSampleOffset(stsc, stco, stsz, item, mdatStart)
          });
        });
      } else if(end !== 0) {
        for(var i = start; i < end; i++) {
          samples.push({
            idx: i,
            size: stsz.entries[i],
            time: util$1.seekSampleTime(stts, ctts, i, trak.time_offset),
            offset: util$1.seekSampleOffset(stsc, stco, stsz, i, mdatStart)
          });
        }
      } else {
        samples = {
          idx: start,
          size: stsz.entries[start],
          time: util$1.seekSampleTime(stts, ctts, start, trak.time_offset),
          offset: util$1.seekSampleOffset(stsc, stco, stsz, start, mdatStart)
        };
      }
      return samples;
    }
  }, {
    key: 'videoKeyFrames',
    get: function get() {
      if(this._videoFrames) {
        return this._videoFrames;
      }
      var videoTrak = this.videoTrak;
      var stss = util$1.findBox(videoTrak, 'stss');
      var frames = this.getSamplesByOrders('video', stss.entries.map(function(item) {
        return item - 1;
      }));
      this._videoFrames = frames;
      return frames;
    }
  }, {
    key: 'audioKeyFrames',
    get: function get() {
      if(this._audioFrames) {
        return this._audioFrames;
      }
      var videoScale = util$1.findBox(this.videoTrak, 'mdhd').timescale;
      var audioScale = util$1.findBox(this.audioTrak, 'mdhd').timescale;
      var audioStts = util$1.findBox(this.audioTrak, 'stts').entry;
      var videoFrames = this.videoKeyFrames;
      var audioIndex = [];
      audioIndex = videoFrames.map(function(item) {
        return util$1.seekOrderSampleByTime(audioStts, audioScale, item.time.time / videoScale);
      });
      this._audioFrames = audioIndex;
      return this._audioFrames;
    }
  }, {
    key: 'packMeta',
    value: function packMeta() {
      if(!this.meta) {
        return;
      }
      var buffer = new Buffer$1();
      buffer.write(FMP4$1.ftyp());
      buffer.write(FMP4$1.moov(this.meta));
      // this.cache.write(buffer.buffer)
      return buffer.buffer;
    }
  }, {
    key: 'seek',
    value: function seek(time) {
      var timeStart = time * this.meta.videoTimeScale;
      var fragIndex;
      var videoFrames = this.videoKeyFrames;
      var audioFrames;
      if(!this.videoOnly) {
        audioFrames = this.audioKeyFrames;
      }
      videoFrames.every(function(item, idx) {
        var nowTime = item.time.time;
        var nextTime = videoFrames[idx + 1] ? videoFrames[idx + 1].time.time : Number.MAX_SAFE_INTEGER;
        if(nowTime <= timeStart && timeStart < nextTime) {
          fragIndex = idx;
          return false;
        } else {
          return true;
        }
      });
      if(!this.videoOnly) {
        audioFrames.every(function(item, idx) {
          var nowTime = item.startTime;
          var nextTime = audioFrames[idx + 1] ? audioFrames[idx + 1].startTime : Number.MAX_SAFE_INTEGER;
          if(nowTime <= timeStart && timeStart < nextTime) {
            fragIndex = Math.min(idx, fragIndex);
            return false;
          } else {
            return true;
          }
        });
      }
      if(this.bufferCache.has(fragIndex)) {
        return Promise.resolve(null);
      } else {
        return this.loadFragment(fragIndex);
      }
    }
  }, {
    key: 'loadFragment',
    value: function loadFragment(fragIndex) {
      var _this5 = this;
      var start, end;
      var videoFrame = this.videoKeyFrames[fragIndex];
      var audioFrame;
      start = videoFrame.offset;
      if(!this.videoOnly) {
        audioFrame = this.getSamplesByOrders('audio', this.audioKeyFrames[fragIndex].order, 0);
        start = Math.min(videoFrame.offset, audioFrame.offset);
      }
      if(fragIndex < this.videoKeyFrames.length - 1) {
        var videoNextFrame = this.videoKeyFrames[fragIndex + 1];
        var audioNextFrame;
        end = videoNextFrame.offset;
        if(!this.videoOnly) {
          audioNextFrame = this.getSamplesByOrders('audio', this.audioKeyFrames[fragIndex + 1].order, 0);
          end = Math.max(videoNextFrame.offset, audioNextFrame.offset);
        }
      } else {
        // debugger;
        this.loadEnd = true;
      }
      var self = this;
      if(window.isNaN(start) || end !== undefined && window.isNaN(end)) {
        self.emit('error', new Errors$1('parse', '', {
          line: 366,
          handle: '[MP4] loadFragment',
          url: self.url
        }));
        return false;
      }
      var qStart = start + self.mdatStart;
      end = end ? self.mdatStart + end : '';
      if(this.bufferCache.has(fragIndex)) {
        return Promise.resolve(null);
      } else if(/* end && */ end <= this.bufferLoaded.byteLength) {
        // console.log(`this.arraybuffer qStart:${qStart}, end:${end}`)
        return this.createFragment(new Uint8Array(this.bufferLoaded.buffer.slice(qStart, end || undefined)), start, fragIndex);
      } else {
        return this.getData(qStart, end).then(function(dat) {
          return _this5.createFragment(new Uint8Array(dat.response), start, fragIndex);
        });
      }
    }
  }, {
    key: 'addFragment',
    value: function addFragment(data) {
      var buffer = new Buffer$1();
      buffer.write(FMP4$1.moof(data));
      buffer.write(FMP4$1.mdat(data));
      // this.cache.write(buffer.buffer)
      return buffer.buffer;
    }
  }, {
    key: 'createFragment',
    value: function createFragment(mdatData, start, fragIndex) {
      var self = this;
      var resBuffers = [];
      this.bufferCache.add(fragIndex);
      {
        var framesIndex = self.videoKeyFrames.map(function(item) {
          return item.idx;
        });
        var _samples = self.getSamplesByOrders('video', framesIndex[fragIndex], framesIndex[fragIndex + 1]);
        var samples = _samples.map(function(item, idx) {
          return {
            size: item.size,
            duration: item.time.duration,
            offset: item.time.offset,
            buffer: new Uint8Array(mdatData.slice(item.offset - start, item.offset - start + item.size)),
            key: idx === 0
          };
        });
        resBuffers.push(this.addFragment({
          id: 1,
          time: _samples[0].time.time,
          firstFlags: 0x2000000,
          flags: 0xf01,
          samples: samples
        }));
      }
      if(!this.videoOnly) {
        var _samples2 = this.getSamplesByOrders('audio', this.audioKeyFrames[fragIndex].order, this.audioKeyFrames[fragIndex + 1] ? this.audioKeyFrames[fragIndex + 1].order : undefined);
        var _samples3 = _samples2.map(function(item, idx) {
          return {
            size: item.size,
            duration: item.time.duration,
            offset: item.time.offset,
            buffer: new Uint8Array(mdatData.slice(item.offset - start, item.offset - start + item.size)),
            key: idx === 0
          };
        });
        resBuffers.push(this.addFragment({
          id: 2,
          time: _samples2[0].time.time,
          firstFlags: 0x00,
          flags: 0x701,
          samples: _samples3
        }));
      }
      var bufferSize = 0;
      resBuffers.every(function(item) {
        bufferSize += item.byteLength;
        return true;
      });
      var buffer = new Uint8Array(bufferSize);
      var offset = 0;
      resBuffers.every(function(item) {
        buffer.set(item, offset);
        offset += item.byteLength;
        return true;
      });
      return Promise.resolve(buffer);
    }
  }, {
    key: 'download',
    value: function download() {
      // new Download('fmp4.mp4', this.cache.buffer)
    }
  }, {
    key: 'cut',
    value: function cut(start, end) {
      var self = this;
      this.bufferCache.clear();
      var timeStart = start * this.meta.videoTimeScale;
      var timeEnd = end * this.meta.videoTimeScale;
      var fragIndexStart;
      var fragIndexEnd;
      var videoFrames = this.videoKeyFrames;
      var audioFrames = this.audioKeyFrames;
      videoFrames.every(function(item, idx) {
        var nowTime = item.time.time;
        var nextTime = videoFrames[idx + 1] ? videoFrames[idx + 1].time.time : Number.MAX_SAFE_INTEGER;
        if(nowTime <= timeStart && timeStart < nextTime) {
          fragIndexStart = idx;
          return true;
        } else if(nowTime <= timeEnd && timeEnd < nextTime) {
          fragIndexEnd = idx;
          return false;
        } else {
          return true;
        }
      });
      audioFrames.every(function(item, idx) {
        var nowTime = item.startTime;
        var nextTime = audioFrames[idx + 1] ? audioFrames[idx + 1].startTime : Number.MAX_SAFE_INTEGER;
        if(nowTime <= timeStart && timeStart < nextTime) {
          fragIndexStart = Math.min(idx, fragIndexStart);
          return true;
        } else if(nowTime <= timeEnd && timeEnd < nextTime) {
          fragIndexEnd = Math.min(idx, fragIndexEnd);
          return false;
        } else {
          return true;
        }
      });
      if(!fragIndexEnd) {
        fragIndexEnd = videoFrames.length;
      }
      return self.loadFragmentForCut(fragIndexStart, fragIndexEnd);
    }
  }, {
    key: 'loadFragmentForCut',
    value: function loadFragmentForCut(fragIndexStart, fragIndexEnd) {
      var videoStartFrame = this.videoKeyFrames[fragIndexStart];
      var audioStartFrame = this.getSamplesByOrders('audio', this.audioKeyFrames[fragIndexStart].order, 0);
      var start = Math.min(videoStartFrame.offset, audioStartFrame.offset);
      var videoEndFrame = this.videoKeyFrames[fragIndexEnd];
      var audioEndFrame = this.getSamplesByOrders('audio', this.audioKeyFrames[fragIndexEnd].order, 0);
      var end = Math.max(videoEndFrame.offset, audioEndFrame.offset);
      var self = this;
      if(window.isNaN(start) || end !== undefined && window.isNaN(end)) {
        self.emit('error', new Errors$1('parse', '', {
          line: 366,
          handle: '[MP4] loadFragment',
          url: self.url
        }));
        return false;
      }
      return this.getData(start + self.mdatStart, end ? self.mdatStart + end : '').then(function(dat) {
        return self.createFragmentForCut(new Uint8Array(dat.response), start, fragIndexStart, end, fragIndexEnd);
      });
    }
  }, {
    key: 'createFragmentForCut',
    value: function createFragmentForCut(mdatData, start, fragIndexStart, end, fragIndexEnd) {
      var self = this;
      var resBuffers = [];
      {
        var framesIndex = self.videoKeyFrames.map(function(item) {
          return item.idx;
        });
        var _samples4 = self.getSamplesByOrders('video', framesIndex[fragIndexStart], framesIndex[fragIndexEnd]);
        var _samples5 = _samples4.map(function(item, idx) {
          return {
            size: item.size,
            duration: item.time.duration,
            offset: item.time.offset,
            buffer: new Uint8Array(mdatData.slice(item.offset - start, item.offset - start + item.size)),
            key: idx === 0
          };
        });
        resBuffers.push(this.addFragment({
          id: 1,
          time: 0,
          firstFlags: 0x2000000,
          flags: 0xf01,
          samples: _samples5
        }));
      }
      var _samples = this.getSamplesByOrders('audio', this.audioKeyFrames[fragIndexStart].order, this.audioKeyFrames[fragIndexEnd] ? this.audioKeyFrames[fragIndexEnd].order : undefined);
      var samples = _samples.map(function(item, idx) {
        return {
          size: item.size,
          duration: item.time.duration,
          offset: item.time.offset,
          buffer: new Uint8Array(mdatData.slice(item.offset - start, item.offset - start + item.size)),
          key: idx === 0
        };
      });
      resBuffers.push(this.addFragment({
        id: 2,
        time: 0,
        firstFlags: 0x00,
        flags: 0x701,
        samples: samples
      }));
      var bufferSize = 0;
      resBuffers.every(function(item) {
        bufferSize += item.byteLength;
        return true;
      });
      var buffer = new Uint8Array(bufferSize);
      var offset = 0;
      resBuffers.every(function(item) {
        buffer.set(item, offset);
        offset += item.byteLength;
        return true;
      });
      return Promise.resolve(buffer);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.cache = new Buffer$1();
      this.bufferCache.clear();
    }
  }]);
  return MP4;
}();
var MP4$1 = MP4;
var MSE = /* #__PURE__*/function() {
  function MSE() {
    var codecs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'video/mp4; codecs="avc1.64001E, mp4a.40.5"';
    _classCallCheck(this, MSE);
    var self = this;
    EventEmitter(this);
    this.codecs = codecs;
    this.mediaSource = new window.MediaSource();
    this.url = window.URL.createObjectURL(this.mediaSource);
    this.queue = [];
    this.updating = false;
    this.mediaSource.addEventListener('sourceopen', function() {
      if(self.mediaSource.sourceBuffers.length === 0) {
        self.sourceBuffer = self.mediaSource.addSourceBuffer(self.codecs);
        self.sourceBuffer.addEventListener('error', function(e) {
          self.emit('error', new Errors$1('mse', '', {
            line: 16,
            handle: '[MSE] constructor sourceopen',
            msg: e.message
          }));
        });
        self.sourceBuffer.addEventListener('updateend', function(e) {
          self.emit('updateend');
          var buffer = self.queue.shift();
          if(buffer && self.sourceBuffer && !self.sourceBuffer.updating && self.state === 'open') {
            self.sourceBuffer.appendBuffer(buffer);
          }
        });
        self.emit('sourceopen');
      }
    });
    this.mediaSource.addEventListener('sourceclose', function() {
      self.emit('sourceclose');
    });
  }
  _createClass(MSE, [{
    key: 'state',
    get: function get() {
      return this.mediaSource.readyState;
    }
  }, {
    key: 'duration',
    get: function get() {
      return this.mediaSource.duration;
    },
    set: function set(value) {
      this.mediaSource.duration = value;
    }
  }, {
    key: 'appendBuffer',
    value: function appendBuffer(buffer) {
      var sourceBuffer = this.sourceBuffer;
      if(sourceBuffer && !sourceBuffer.updating && this.state === 'open') {
        sourceBuffer.appendBuffer(buffer);
        return true;
      } else {
        this.queue.push(buffer);
        return false;
      }
    }
  }, {
    key: 'removeBuffer',
    value: function removeBuffer(start, end) {
      this.sourceBuffer.remove(start, end);
    }
  }, {
    key: 'clearBuffer',
    value: function clearBuffer() {
      if(this.sourceBuffer) {
        var buffered = this.sourceBuffer.buffered;
        for(var i = 0; i < buffered.length; i++) {
          this.sourceBuffer.remove(buffered.start(i), buffered.end(i));
        }
      }
    }
  }, {
    key: 'endOfStream',
    value: function endOfStream() {
      if(this.state === 'open') {
        this.mediaSource.endOfStream();
      }
    }
  }], [{
    key: 'isSupported',
    value: function isSupported(codecs) {
      return window.MediaSource && window.MediaSource.isTypeSupported(codecs);
    }
  }]);
  return MSE;
}();
var MSE$1 = MSE;
export default MP4;
