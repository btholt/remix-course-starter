import {
  __commonJS,
  __require,
  init_react
} from "/build/_shared/chunk-5OQ3QANQ.js";

// node_modules/core-util-is/lib/util.js
var require_util = __commonJS({
  "node_modules/core-util-is/lib/util.js"(exports) {
    init_react();
    function isArray(arg) {
      if (Array.isArray) {
        return Array.isArray(arg);
      }
      return objectToString(arg) === "[object Array]";
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === "number";
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === "string";
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return objectToString(re) === "[object RegExp]";
    }
    exports.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return objectToString(d) === "[object Date]";
    }
    exports.isDate = isDate;
    function isError(e) {
      return objectToString(e) === "[object Error]" || e instanceof Error;
    }
    exports.isError = isError;
    function isFunction(arg) {
      return typeof arg === "function";
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = __require("buffer").Buffer.isBuffer;
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module) {
    init_react();
    if (typeof Object.create === "function") {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/isarray/index.js
var require_isarray = __commonJS({
  "node_modules/isarray/index.js"(exports, module) {
    init_react();
    module.exports = Array.isArray || function(arr) {
      return Object.prototype.toString.call(arr) == "[object Array]";
    };
  }
});

// node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/readable-stream/lib/_stream_readable.js"(exports, module) {
    init_react();
    module.exports = Readable;
    var isArray = require_isarray();
    var Buffer2 = __require("buffer").Buffer;
    Readable.ReadableState = ReadableState;
    var EE = __require("events").EventEmitter;
    if (!EE.listenerCount)
      EE.listenerCount = function(emitter, type) {
        return emitter.listeners(type).length;
      };
    var Stream = __require("stream");
    var util = require_util();
    util.inherits = require_inherits_browser();
    var StringDecoder;
    util.inherits(Readable, Stream);
    function ReadableState(options, stream) {
      options = options || {};
      var hwm = options.highWaterMark;
      this.highWaterMark = hwm || hwm === 0 ? hwm : 16 * 1024;
      this.highWaterMark = ~~this.highWaterMark;
      this.buffer = [];
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = false;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.calledRead = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.objectMode = !!options.objectMode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.ranOut = false;
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder)
          StringDecoder = __require("string_decoder/").StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {
      if (!(this instanceof Readable))
        return new Readable(options);
      this._readableState = new ReadableState(options, this);
      this.readable = true;
      Stream.call(this);
    }
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      if (typeof chunk === "string" && !state.objectMode) {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = new Buffer2(chunk, encoding);
          encoding = "";
        }
      }
      return readableAddChunk(this, state, chunk, encoding, false);
    };
    Readable.prototype.unshift = function(chunk) {
      var state = this._readableState;
      return readableAddChunk(this, state, chunk, "", true);
    };
    function readableAddChunk(stream, state, chunk, encoding, addToFront) {
      var er = chunkInvalid(state, chunk);
      if (er) {
        stream.emit("error", er);
      } else if (chunk === null || chunk === void 0) {
        state.reading = false;
        if (!state.ended)
          onEofChunk(stream, state);
      } else if (state.objectMode || chunk && chunk.length > 0) {
        if (state.ended && !addToFront) {
          var e = new Error("stream.push() after EOF");
          stream.emit("error", e);
        } else if (state.endEmitted && addToFront) {
          var e = new Error("stream.unshift() after end event");
          stream.emit("error", e);
        } else {
          if (state.decoder && !addToFront && !encoding)
            chunk = state.decoder.write(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) {
            state.buffer.unshift(chunk);
          } else {
            state.reading = false;
            state.buffer.push(chunk);
          }
          if (state.needReadable)
            emitReadable(stream);
          maybeReadMore(stream, state);
        }
      } else if (!addToFront) {
        state.reading = false;
      }
      return needMoreData(state);
    }
    function needMoreData(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder)
        StringDecoder = __require("string_decoder/").StringDecoder;
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
    };
    var MAX_HWM = 8388608;
    function roundUpToNextPowerOf2(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        for (var p = 1; p < 32; p <<= 1)
          n |= n >> p;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state) {
      if (state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return n === 0 ? 0 : 1;
      if (n === null || isNaN(n)) {
        if (state.flowing && state.buffer.length)
          return state.buffer[0].length;
        else
          return state.length;
      }
      if (n <= 0)
        return 0;
      if (n > state.highWaterMark)
        state.highWaterMark = roundUpToNextPowerOf2(n);
      if (n > state.length) {
        if (!state.ended) {
          state.needReadable = true;
          return 0;
        } else
          return state.length;
      }
      return n;
    }
    Readable.prototype.read = function(n) {
      var state = this._readableState;
      state.calledRead = true;
      var nOrig = n;
      var ret;
      if (typeof n !== "number" || n > 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        ret = null;
        if (state.length > 0 && state.decoder) {
          ret = fromList(n, state);
          state.length -= ret.length;
        }
        if (state.length === 0)
          endReadable(this);
        return ret;
      }
      var doRead = state.needReadable;
      if (state.length - n <= state.highWaterMark)
        doRead = true;
      if (state.ended || state.reading)
        doRead = false;
      if (doRead) {
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
      }
      if (doRead && !state.reading)
        n = howMuchToRead(nOrig, state);
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = true;
        n = 0;
      }
      state.length -= n;
      if (state.length === 0 && !state.ended)
        state.needReadable = true;
      if (state.ended && !state.endEmitted && state.length === 0)
        endReadable(this);
      return ret;
    };
    function chunkInvalid(state, chunk) {
      var er = null;
      if (!Buffer2.isBuffer(chunk) && typeof chunk !== "string" && chunk !== null && chunk !== void 0 && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
      }
      return er;
    }
    function onEofChunk(stream, state) {
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      if (state.length > 0)
        emitReadable(stream);
      else
        endReadable(stream);
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      state.needReadable = false;
      if (state.emittedReadable)
        return;
      state.emittedReadable = true;
      if (state.sync)
        process.nextTick(function() {
          emitReadable_(stream);
        });
      else
        emitReadable_(stream);
    }
    function emitReadable_(stream) {
      stream.emit("readable");
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(function() {
          maybeReadMore_(stream, state);
        });
      }
    }
    function maybeReadMore_(stream, state) {
      var len = state.length;
      while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        stream.read(0);
        if (len === state.length)
          break;
        else
          len = state.length;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n) {
      this.emit("error", new Error("not implemented"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : cleanup;
      if (state.endEmitted)
        process.nextTick(endFn);
      else
        src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable) {
        if (readable !== src)
          return;
        cleanup();
      }
      function onend() {
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      function cleanup() {
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", cleanup);
        if (!dest._writableState || dest._writableState.needDrain)
          ondrain();
      }
      function onerror(er) {
        unpipe();
        dest.removeListener("error", onerror);
        if (EE.listenerCount(dest, "error") === 0)
          dest.emit("error", er);
      }
      if (!dest._events || !dest._events.error)
        dest.on("error", onerror);
      else if (isArray(dest._events.error))
        dest._events.error.unshift(onerror);
      else
        dest._events.error = [onerror, dest._events.error];
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state.flowing) {
        this.on("readable", pipeOnReadable);
        state.flowing = true;
        process.nextTick(function() {
          flow(src);
        });
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function() {
        var dest = this;
        var state = src._readableState;
        state.awaitDrain--;
        if (state.awaitDrain === 0)
          flow(src);
      };
    }
    function flow(src) {
      var state = src._readableState;
      var chunk;
      state.awaitDrain = 0;
      function write(dest, i, list) {
        var written = dest.write(chunk);
        if (written === false) {
          state.awaitDrain++;
        }
      }
      while (state.pipesCount && (chunk = src.read()) !== null) {
        if (state.pipesCount === 1)
          write(state.pipes, 0, null);
        else
          forEach(state.pipes, write);
        src.emit("data", chunk);
        if (state.awaitDrain > 0)
          return;
      }
      if (state.pipesCount === 0) {
        state.flowing = false;
        if (EE.listenerCount(src, "data") > 0)
          emitDataEvents(src);
        return;
      }
      state.ranOut = true;
    }
    function pipeOnReadable() {
      if (this._readableState.ranOut) {
        this._readableState.ranOut = false;
        flow(this);
      }
    }
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        this.removeListener("readable", pipeOnReadable);
        state.flowing = false;
        if (dest)
          dest.emit("unpipe", this);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        this.removeListener("readable", pipeOnReadable);
        state.flowing = false;
        for (var i = 0; i < len; i++)
          dests[i].emit("unpipe", this);
        return this;
      }
      var i = indexOf(state.pipes, dest);
      if (i === -1)
        return this;
      state.pipes.splice(i, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      if (ev === "data" && !this._readableState.flowing)
        emitDataEvents(this);
      if (ev === "readable" && this.readable) {
        var state = this._readableState;
        if (!state.readableListening) {
          state.readableListening = true;
          state.emittedReadable = false;
          state.needReadable = true;
          if (!state.reading) {
            this.read(0);
          } else if (state.length) {
            emitReadable(this, state);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.resume = function() {
      emitDataEvents(this);
      this.read(0);
      this.emit("resume");
    };
    Readable.prototype.pause = function() {
      emitDataEvents(this, true);
      this.emit("pause");
    };
    function emitDataEvents(stream, startPaused) {
      var state = stream._readableState;
      if (state.flowing) {
        throw new Error("Cannot switch to old mode now.");
      }
      var paused = startPaused || false;
      var readable = false;
      stream.readable = true;
      stream.pipe = Stream.prototype.pipe;
      stream.on = stream.addListener = Stream.prototype.on;
      stream.on("readable", function() {
        readable = true;
        var c;
        while (!paused && (c = stream.read()) !== null)
          stream.emit("data", c);
        if (c === null) {
          readable = false;
          stream._readableState.needReadable = true;
        }
      });
      stream.pause = function() {
        paused = true;
        this.emit("pause");
      };
      stream.resume = function() {
        paused = false;
        if (readable)
          process.nextTick(function() {
            stream.emit("readable");
          });
        else
          this.read(0);
        this.emit("resume");
      };
      stream.emit("readable");
    }
    Readable.prototype.wrap = function(stream) {
      var state = this._readableState;
      var paused = false;
      var self = this;
      stream.on("end", function() {
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            self.push(chunk);
        }
        self.push(null);
      });
      stream.on("data", function(chunk) {
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0))
          return;
        else if (!state.objectMode && (!chunk || !chunk.length))
          return;
        var ret = self.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (typeof stream[i] === "function" && typeof this[i] === "undefined") {
          this[i] = function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      var events = ["error", "close", "destroy", "pause", "resume"];
      forEach(events, function(ev) {
        stream.on(ev, self.emit.bind(self, ev));
      });
      self._read = function(n) {
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return self;
    };
    Readable._fromList = fromList;
    function fromList(n, state) {
      var list = state.buffer;
      var length = state.length;
      var stringMode = !!state.decoder;
      var objectMode = !!state.objectMode;
      var ret;
      if (list.length === 0)
        return null;
      if (length === 0)
        ret = null;
      else if (objectMode)
        ret = list.shift();
      else if (!n || n >= length) {
        if (stringMode)
          ret = list.join("");
        else
          ret = Buffer2.concat(list, length);
        list.length = 0;
      } else {
        if (n < list[0].length) {
          var buf = list[0];
          ret = buf.slice(0, n);
          list[0] = buf.slice(n);
        } else if (n === list[0].length) {
          ret = list.shift();
        } else {
          if (stringMode)
            ret = "";
          else
            ret = new Buffer2(n);
          var c = 0;
          for (var i = 0, l = list.length; i < l && c < n; i++) {
            var buf = list[0];
            var cpy = Math.min(n - c, buf.length);
            if (stringMode)
              ret += buf.slice(0, cpy);
            else
              buf.copy(ret, c, 0, cpy);
            if (cpy < buf.length)
              list[0] = buf.slice(cpy);
            else
              list.shift();
            c += cpy;
          }
        }
      }
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      if (state.length > 0)
        throw new Error("endReadable called on non-empty stream");
      if (!state.endEmitted && state.calledRead) {
        state.ended = true;
        process.nextTick(function() {
          if (!state.endEmitted && state.length === 0) {
            state.endEmitted = true;
            stream.readable = false;
            stream.emit("end");
          }
        });
      }
    }
    function forEach(xs, f) {
      for (var i = 0, l = xs.length; i < l; i++) {
        f(xs[i], i);
      }
    }
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x)
          return i;
      }
      return -1;
    }
  }
});

// node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/readable-stream/lib/_stream_writable.js"(exports, module) {
    init_react();
    module.exports = Writable;
    var Buffer2 = __require("buffer").Buffer;
    Writable.WritableState = WritableState;
    var util = require_util();
    util.inherits = require_inherits_browser();
    var Stream = __require("stream");
    util.inherits(Writable, Stream);
    function WriteReq(chunk, encoding, cb) {
      this.chunk = chunk;
      this.encoding = encoding;
      this.callback = cb;
    }
    function WritableState(options, stream) {
      options = options || {};
      var hwm = options.highWaterMark;
      this.highWaterMark = hwm || hwm === 0 ? hwm : 16 * 1024;
      this.objectMode = !!options.objectMode;
      this.highWaterMark = ~~this.highWaterMark;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.buffer = [];
      this.errorEmitted = false;
    }
    function Writable(options) {
      var Duplex = require_stream_duplex();
      if (!(this instanceof Writable) && !(this instanceof Duplex))
        return new Writable(options);
      this._writableState = new WritableState(options, this);
      this.writable = true;
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe. Not readable."));
    };
    function writeAfterEnd(stream, state, cb) {
      var er = new Error("write after end");
      stream.emit("error", er);
      process.nextTick(function() {
        cb(er);
      });
    }
    function validChunk(stream, state, chunk, cb) {
      var valid = true;
      if (!Buffer2.isBuffer(chunk) && typeof chunk !== "string" && chunk !== null && chunk !== void 0 && !state.objectMode) {
        var er = new TypeError("Invalid non-string/buffer chunk");
        stream.emit("error", er);
        process.nextTick(function() {
          cb(er);
        });
        valid = false;
      }
      return valid;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (Buffer2.isBuffer(chunk))
        encoding = "buffer";
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (typeof cb !== "function")
        cb = function() {
        };
      if (state.ended)
        writeAfterEnd(this, state, cb);
      else if (validChunk(this, state, chunk, cb))
        ret = writeOrBuffer(this, state, chunk, encoding, cb);
      return ret;
    };
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = new Buffer2(chunk, encoding);
      }
      return chunk;
    }
    function writeOrBuffer(stream, state, chunk, encoding, cb) {
      chunk = decodeChunk(state, chunk, encoding);
      if (Buffer2.isBuffer(chunk))
        encoding = "buffer";
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing)
        state.buffer.push(new WriteReq(chunk, encoding, cb));
      else
        doWrite(stream, state, len, chunk, encoding, cb);
      return ret;
    }
    function doWrite(stream, state, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      if (sync)
        process.nextTick(function() {
          cb(er);
        });
      else
        cb(er);
      stream._writableState.errorEmitted = true;
      stream.emit("error", er);
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      onwriteStateUpdate(state);
      if (er)
        onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(stream, state);
        if (!finished && !state.bufferProcessing && state.buffer.length)
          clearBuffer(stream, state);
        if (sync) {
          process.nextTick(function() {
            afterWrite(stream, state, finished, cb);
          });
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain(stream, state);
      cb();
      if (finished)
        finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      for (var c = 0; c < state.buffer.length; c++) {
        var entry = state.buffer[c];
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state.objectMode ? 1 : chunk.length;
        doWrite(stream, state, len, chunk, encoding, cb);
        if (state.writing) {
          c++;
          break;
        }
      }
      state.bufferProcessing = false;
      if (c < state.buffer.length)
        state.buffer = state.buffer.slice(c);
      else
        state.buffer.length = 0;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new Error("not implemented"));
    };
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (typeof chunk !== "undefined" && chunk !== null)
        this.write(chunk, encoding);
      if (!state.ending && !state.finished)
        endWritable(this, state, cb);
    };
    function needFinish(stream, state) {
      return state.ending && state.length === 0 && !state.finished && !state.writing;
    }
    function finishMaybe(stream, state) {
      var need = needFinish(stream, state);
      if (need) {
        state.finished = true;
        stream.emit("finish");
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished)
          process.nextTick(cb);
        else
          stream.once("finish", cb);
      }
      state.ended = true;
    }
  }
});

// node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/readable-stream/lib/_stream_duplex.js"(exports, module) {
    init_react();
    module.exports = Duplex;
    var objectKeys = Object.keys || function(obj) {
      var keys = [];
      for (var key in obj)
        keys.push(key);
      return keys;
    };
    var util = require_util();
    util.inherits = require_inherits_browser();
    var Readable = require_stream_readable();
    var Writable = require_stream_writable();
    util.inherits(Duplex, Readable);
    forEach(objectKeys(Writable.prototype), function(method) {
      if (!Duplex.prototype[method])
        Duplex.prototype[method] = Writable.prototype[method];
    });
    function Duplex(options) {
      if (!(this instanceof Duplex))
        return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      if (options && options.readable === false)
        this.readable = false;
      if (options && options.writable === false)
        this.writable = false;
      this.allowHalfOpen = true;
      if (options && options.allowHalfOpen === false)
        this.allowHalfOpen = false;
      this.once("end", onend);
    }
    function onend() {
      if (this.allowHalfOpen || this._writableState.ended)
        return;
      process.nextTick(this.end.bind(this));
    }
    function forEach(xs, f) {
      for (var i = 0, l = xs.length; i < l; i++) {
        f(xs[i], i);
      }
    }
  }
});

// node_modules/readable-stream/duplex.js
var require_duplex = __commonJS({
  "node_modules/readable-stream/duplex.js"(exports, module) {
    init_react();
    module.exports = require_stream_duplex();
  }
});

// node_modules/bl/bl.js
var require_bl = __commonJS({
  "node_modules/bl/bl.js"(exports, module) {
    init_react();
    var DuplexStream = __require("stream").DuplexStream || require_duplex();
    var util = __require("util");
    function BufferList(callback) {
      if (!(this instanceof BufferList))
        return new BufferList(callback);
      this._bufs = [];
      this.length = 0;
      if (typeof callback == "function")
        this._callback = callback;
      else if (Buffer.isBuffer(callback))
        this.append(callback);
      else if (Array.isArray(callback)) {
        callback.forEach(function(b) {
          Buffer.isBuffer(b) && this.append(b);
        }.bind(this));
      }
      DuplexStream.call(this);
    }
    util.inherits(BufferList, DuplexStream);
    BufferList.prototype._offset = function(offset) {
      var tot = 0, i = 0, _t;
      for (; i < this._bufs.length; i++) {
        _t = tot + this._bufs[i].length;
        if (offset < _t)
          return [i, offset - tot];
        tot = _t;
      }
    };
    BufferList.prototype.append = function(buf) {
      this._bufs.push(Buffer.isBuffer(buf) ? buf : new Buffer(buf));
      this.length += buf.length;
      return this;
    };
    BufferList.prototype._write = function(buf, encoding, callback) {
      this.append(buf);
      if (callback)
        callback();
    };
    BufferList.prototype._read = function(size) {
      if (!this.length)
        return this.push(null);
      size = Math.min(size, this.length);
      this.push(this.slice(0, size));
      this.consume(size);
    };
    BufferList.prototype.end = function(chunk) {
      DuplexStream.prototype.end.call(this, chunk);
      if (this._callback)
        this._callback(null, this.slice());
    };
    BufferList.prototype.get = function(index) {
      return this.slice(index, index + 1)[0];
    };
    BufferList.prototype.slice = function(start, end) {
      if (typeof start != "number" || start < 0)
        start = 0;
      if (typeof end != "number" || end > this.length)
        end = this.length;
      if (start >= this.length)
        return new Buffer(0);
      if (end <= 0)
        return new Buffer(0);
      if (start === 0 && end == this.length)
        return Buffer.concat(this._bufs);
      var off = this._offset(start), len = end - start, bytes = len, bufoff = 0, buf, l, i;
      start = off[1];
      if (bytes <= this._bufs[off[0]].length - start)
        return this._bufs[off[0]].slice(start, start + bytes);
      buf = new Buffer(len);
      for (i = off[0]; i < this._bufs.length; i++) {
        l = this._bufs[i].length - start;
        if (bytes > l) {
          this._bufs[i].copy(buf, bufoff, start);
        } else {
          this._bufs[i].copy(buf, bufoff, start, start + bytes);
          break;
        }
        bufoff += l;
        bytes -= l;
        if (start)
          start = 0;
      }
      return buf;
    };
    BufferList.prototype.toString = function(encoding, start, end) {
      return this.slice(start, end).toString(encoding);
    };
    BufferList.prototype.consume = function(bytes) {
      while (this._bufs.length) {
        if (bytes > this._bufs[0].length) {
          bytes -= this._bufs[0].length;
          this.length -= this._bufs[0].length;
          this._bufs.shift();
        } else {
          this._bufs[0] = this._bufs[0].slice(bytes);
          this.length -= bytes;
          break;
        }
      }
      return this;
    };
    (function() {
      var methods = {
        "readDoubleBE": 8,
        "readDoubleLE": 8,
        "readFloatBE": 4,
        "readFloatLE": 4,
        "readInt32BE": 4,
        "readInt32LE": 4,
        "readUInt32BE": 4,
        "readUInt32LE": 4,
        "readInt16BE": 2,
        "readInt16LE": 2,
        "readUInt16BE": 2,
        "readUInt16LE": 2,
        "readInt8": 1,
        "readUInt8": 1
      };
      Object.keys(methods).forEach(function(m) {
        BufferList.prototype[m] = function(offset) {
          return this.slice(offset, offset + methods[m])[m](0);
        };
      });
    })();
    module.exports = BufferList;
  }
});

// node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable2 = __commonJS({
  "node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js"(exports, module) {
    init_react();
    module.exports = Readable;
    var isArray = require_isarray();
    var Buffer2 = __require("buffer").Buffer;
    Readable.ReadableState = ReadableState;
    var EE = __require("events").EventEmitter;
    if (!EE.listenerCount)
      EE.listenerCount = function(emitter, type) {
        return emitter.listeners(type).length;
      };
    var Stream = __require("stream");
    var util = require_util();
    util.inherits = require_inherits_browser();
    var StringDecoder;
    var debug = __require("util");
    if (debug && debug.debuglog) {
      debug = debug.debuglog("stream");
    } else {
      debug = function() {
      };
    }
    util.inherits(Readable, Stream);
    function ReadableState(options, stream) {
      var Duplex = require_stream_duplex2();
      options = options || {};
      var hwm = options.highWaterMark;
      var defaultHwm = options.objectMode ? 16 : 16 * 1024;
      this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
      this.highWaterMark = ~~this.highWaterMark;
      this.buffer = [];
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.objectMode = !!options.objectMode;
      if (stream instanceof Duplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.ranOut = false;
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder)
          StringDecoder = __require("string_decoder/").StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {
      var Duplex = require_stream_duplex2();
      if (!(this instanceof Readable))
        return new Readable(options);
      this._readableState = new ReadableState(options, this);
      this.readable = true;
      Stream.call(this);
    }
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      if (util.isString(chunk) && !state.objectMode) {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = new Buffer2(chunk, encoding);
          encoding = "";
        }
      }
      return readableAddChunk(this, state, chunk, encoding, false);
    };
    Readable.prototype.unshift = function(chunk) {
      var state = this._readableState;
      return readableAddChunk(this, state, chunk, "", true);
    };
    function readableAddChunk(stream, state, chunk, encoding, addToFront) {
      var er = chunkInvalid(state, chunk);
      if (er) {
        stream.emit("error", er);
      } else if (util.isNullOrUndefined(chunk)) {
        state.reading = false;
        if (!state.ended)
          onEofChunk(stream, state);
      } else if (state.objectMode || chunk && chunk.length > 0) {
        if (state.ended && !addToFront) {
          var e = new Error("stream.push() after EOF");
          stream.emit("error", e);
        } else if (state.endEmitted && addToFront) {
          var e = new Error("stream.unshift() after end event");
          stream.emit("error", e);
        } else {
          if (state.decoder && !addToFront && !encoding)
            chunk = state.decoder.write(chunk);
          if (!addToFront)
            state.reading = false;
          if (state.flowing && state.length === 0 && !state.sync) {
            stream.emit("data", chunk);
            stream.read(0);
          } else {
            state.length += state.objectMode ? 1 : chunk.length;
            if (addToFront)
              state.buffer.unshift(chunk);
            else
              state.buffer.push(chunk);
            if (state.needReadable)
              emitReadable(stream);
          }
          maybeReadMore(stream, state);
        }
      } else if (!addToFront) {
        state.reading = false;
      }
      return needMoreData(state);
    }
    function needMoreData(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder)
        StringDecoder = __require("string_decoder/").StringDecoder;
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };
    var MAX_HWM = 8388608;
    function roundUpToNextPowerOf2(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        for (var p = 1; p < 32; p <<= 1)
          n |= n >> p;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state) {
      if (state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return n === 0 ? 0 : 1;
      if (isNaN(n) || util.isNull(n)) {
        if (state.flowing && state.buffer.length)
          return state.buffer[0].length;
        else
          return state.length;
      }
      if (n <= 0)
        return 0;
      if (n > state.highWaterMark)
        state.highWaterMark = roundUpToNextPowerOf2(n);
      if (n > state.length) {
        if (!state.ended) {
          state.needReadable = true;
          return 0;
        } else
          return state.length;
      }
      return n;
    }
    Readable.prototype.read = function(n) {
      debug("read", n);
      var state = this._readableState;
      var nOrig = n;
      if (!util.isNumber(n) || n > 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      }
      if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
      }
      if (doRead && !state.reading)
        n = howMuchToRead(nOrig, state);
      var ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (util.isNull(ret)) {
        state.needReadable = true;
        n = 0;
      }
      state.length -= n;
      if (state.length === 0 && !state.ended)
        state.needReadable = true;
      if (nOrig !== n && state.ended && state.length === 0)
        endReadable(this);
      if (!util.isNull(ret))
        this.emit("data", ret);
      return ret;
    };
    function chunkInvalid(state, chunk) {
      var er = null;
      if (!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
      }
      return er;
    }
    function onEofChunk(stream, state) {
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      emitReadable(stream);
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        if (state.sync)
          process.nextTick(function() {
            emitReadable_(stream);
          });
        else
          emitReadable_(stream);
      }
    }
    function emitReadable_(stream) {
      debug("emit readable");
      stream.emit("readable");
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(function() {
          maybeReadMore_(stream, state);
        });
      }
    }
    function maybeReadMore_(stream, state) {
      var len = state.length;
      while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length)
          break;
        else
          len = state.length;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n) {
      this.emit("error", new Error("not implemented"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : cleanup;
      if (state.endEmitted)
        process.nextTick(endFn);
      else
        src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable) {
        debug("onunpipe");
        if (readable === src) {
          cleanup();
        }
      }
      function onend() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", cleanup);
        src.removeListener("data", ondata);
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        var ret = dest.write(chunk);
        if (ret === false) {
          debug("false write response, pause", src._readableState.awaitDrain);
          src._readableState.awaitDrain++;
          src.pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EE.listenerCount(dest, "error") === 0)
          dest.emit("error", er);
      }
      if (!dest._events || !dest._events.error)
        dest.on("error", onerror);
      else if (isArray(dest._events.error))
        dest._events.error.unshift(onerror);
      else
        dest._events.error = [onerror, dest._events.error];
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain)
          state.awaitDrain--;
        if (state.awaitDrain === 0 && EE.listenerCount(src, "data")) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit("unpipe", this);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++)
          dests[i].emit("unpipe", this);
        return this;
      }
      var i = indexOf(state.pipes, dest);
      if (i === -1)
        return this;
      state.pipes.splice(i, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      if (ev === "data" && this._readableState.flowing !== false) {
        this.resume();
      }
      if (ev === "readable" && this.readable) {
        var state = this._readableState;
        if (!state.readableListening) {
          state.readableListening = true;
          state.emittedReadable = false;
          state.needReadable = true;
          if (!state.reading) {
            var self = this;
            process.nextTick(function() {
              debug("readable nexttick read 0");
              self.read(0);
            });
          } else if (state.length) {
            emitReadable(this, state);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = true;
        if (!state.reading) {
          debug("resume read 0");
          this.read(0);
        }
        resume(this, state);
      }
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(function() {
          resume_(stream, state);
        });
      }
    }
    function resume_(stream, state) {
      state.resumeScheduled = false;
      stream.emit("resume");
      flow(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug("flow", state.flowing);
      if (state.flowing) {
        do {
          var chunk = stream.read();
        } while (chunk !== null && state.flowing);
      }
    }
    Readable.prototype.wrap = function(stream) {
      var state = this._readableState;
      var paused = false;
      var self = this;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            self.push(chunk);
        }
        self.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (!chunk || !state.objectMode && !chunk.length)
          return;
        var ret = self.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
          this[i] = function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      var events = ["error", "close", "destroy", "pause", "resume"];
      forEach(events, function(ev) {
        stream.on(ev, self.emit.bind(self, ev));
      });
      self._read = function(n) {
        debug("wrapped _read", n);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return self;
    };
    Readable._fromList = fromList;
    function fromList(n, state) {
      var list = state.buffer;
      var length = state.length;
      var stringMode = !!state.decoder;
      var objectMode = !!state.objectMode;
      var ret;
      if (list.length === 0)
        return null;
      if (length === 0)
        ret = null;
      else if (objectMode)
        ret = list.shift();
      else if (!n || n >= length) {
        if (stringMode)
          ret = list.join("");
        else
          ret = Buffer2.concat(list, length);
        list.length = 0;
      } else {
        if (n < list[0].length) {
          var buf = list[0];
          ret = buf.slice(0, n);
          list[0] = buf.slice(n);
        } else if (n === list[0].length) {
          ret = list.shift();
        } else {
          if (stringMode)
            ret = "";
          else
            ret = new Buffer2(n);
          var c = 0;
          for (var i = 0, l = list.length; i < l && c < n; i++) {
            var buf = list[0];
            var cpy = Math.min(n - c, buf.length);
            if (stringMode)
              ret += buf.slice(0, cpy);
            else
              buf.copy(ret, c, 0, cpy);
            if (cpy < buf.length)
              list[0] = buf.slice(cpy);
            else
              list.shift();
            c += cpy;
          }
        }
      }
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      if (state.length > 0)
        throw new Error("endReadable called on non-empty stream");
      if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(function() {
          if (!state.endEmitted && state.length === 0) {
            state.endEmitted = true;
            stream.readable = false;
            stream.emit("end");
          }
        });
      }
    }
    function forEach(xs, f) {
      for (var i = 0, l = xs.length; i < l; i++) {
        f(xs[i], i);
      }
    }
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x)
          return i;
      }
      return -1;
    }
  }
});

// node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable2 = __commonJS({
  "node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js"(exports, module) {
    init_react();
    module.exports = Writable;
    var Buffer2 = __require("buffer").Buffer;
    Writable.WritableState = WritableState;
    var util = require_util();
    util.inherits = require_inherits_browser();
    var Stream = __require("stream");
    util.inherits(Writable, Stream);
    function WriteReq(chunk, encoding, cb) {
      this.chunk = chunk;
      this.encoding = encoding;
      this.callback = cb;
    }
    function WritableState(options, stream) {
      var Duplex = require_stream_duplex2();
      options = options || {};
      var hwm = options.highWaterMark;
      var defaultHwm = options.objectMode ? 16 : 16 * 1024;
      this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
      this.objectMode = !!options.objectMode;
      if (stream instanceof Duplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode;
      this.highWaterMark = ~~this.highWaterMark;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.buffer = [];
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
    }
    function Writable(options) {
      var Duplex = require_stream_duplex2();
      if (!(this instanceof Writable) && !(this instanceof Duplex))
        return new Writable(options);
      this._writableState = new WritableState(options, this);
      this.writable = true;
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe. Not readable."));
    };
    function writeAfterEnd(stream, state, cb) {
      var er = new Error("write after end");
      stream.emit("error", er);
      process.nextTick(function() {
        cb(er);
      });
    }
    function validChunk(stream, state, chunk, cb) {
      var valid = true;
      if (!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode) {
        var er = new TypeError("Invalid non-string/buffer chunk");
        stream.emit("error", er);
        process.nextTick(function() {
          cb(er);
        });
        valid = false;
      }
      return valid;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      if (util.isFunction(encoding)) {
        cb = encoding;
        encoding = null;
      }
      if (util.isBuffer(chunk))
        encoding = "buffer";
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (!util.isFunction(cb))
        cb = function() {
        };
      if (state.ended)
        writeAfterEnd(this, state, cb);
      else if (validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.buffer.length)
          clearBuffer(this, state);
      }
    };
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && util.isString(chunk)) {
        chunk = new Buffer2(chunk, encoding);
      }
      return chunk;
    }
    function writeOrBuffer(stream, state, chunk, encoding, cb) {
      chunk = decodeChunk(state, chunk, encoding);
      if (util.isBuffer(chunk))
        encoding = "buffer";
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked)
        state.buffer.push(new WriteReq(chunk, encoding, cb));
      else
        doWrite(stream, state, false, len, chunk, encoding, cb);
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      if (sync)
        process.nextTick(function() {
          state.pendingcb--;
          cb(er);
        });
      else {
        state.pendingcb--;
        cb(er);
      }
      stream._writableState.errorEmitted = true;
      stream.emit("error", er);
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      onwriteStateUpdate(state);
      if (er)
        onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(stream, state);
        if (!finished && !state.corked && !state.bufferProcessing && state.buffer.length) {
          clearBuffer(stream, state);
        }
        if (sync) {
          process.nextTick(function() {
            afterWrite(stream, state, finished, cb);
          });
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      if (stream._writev && state.buffer.length > 1) {
        var cbs = [];
        for (var c = 0; c < state.buffer.length; c++)
          cbs.push(state.buffer[c].callback);
        state.pendingcb++;
        doWrite(stream, state, true, state.length, state.buffer, "", function(err) {
          for (var i = 0; i < cbs.length; i++) {
            state.pendingcb--;
            cbs[i](err);
          }
        });
        state.buffer = [];
      } else {
        for (var c = 0; c < state.buffer.length; c++) {
          var entry = state.buffer[c];
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          if (state.writing) {
            c++;
            break;
          }
        }
        if (c < state.buffer.length)
          state.buffer = state.buffer.slice(c);
        else
          state.buffer.length = 0;
      }
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new Error("not implemented"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (util.isFunction(chunk)) {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (util.isFunction(encoding)) {
        cb = encoding;
        encoding = null;
      }
      if (!util.isNullOrUndefined(chunk))
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending && !state.finished)
        endWritable(this, state, cb);
    };
    function needFinish(stream, state) {
      return state.ending && state.length === 0 && !state.finished && !state.writing;
    }
    function prefinish(stream, state) {
      if (!state.prefinished) {
        state.prefinished = true;
        stream.emit("prefinish");
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(stream, state);
      if (need) {
        if (state.pendingcb === 0) {
          prefinish(stream, state);
          state.finished = true;
          stream.emit("finish");
        } else
          prefinish(stream, state);
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished)
          process.nextTick(cb);
        else
          stream.once("finish", cb);
      }
      state.ended = true;
    }
  }
});

// node_modules/through2/node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex2 = __commonJS({
  "node_modules/through2/node_modules/readable-stream/lib/_stream_duplex.js"(exports, module) {
    init_react();
    module.exports = Duplex;
    var objectKeys = Object.keys || function(obj) {
      var keys = [];
      for (var key in obj)
        keys.push(key);
      return keys;
    };
    var util = require_util();
    util.inherits = require_inherits_browser();
    var Readable = require_stream_readable2();
    var Writable = require_stream_writable2();
    util.inherits(Duplex, Readable);
    forEach(objectKeys(Writable.prototype), function(method) {
      if (!Duplex.prototype[method])
        Duplex.prototype[method] = Writable.prototype[method];
    });
    function Duplex(options) {
      if (!(this instanceof Duplex))
        return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      if (options && options.readable === false)
        this.readable = false;
      if (options && options.writable === false)
        this.writable = false;
      this.allowHalfOpen = true;
      if (options && options.allowHalfOpen === false)
        this.allowHalfOpen = false;
      this.once("end", onend);
    }
    function onend() {
      if (this.allowHalfOpen || this._writableState.ended)
        return;
      process.nextTick(this.end.bind(this));
    }
    function forEach(xs, f) {
      for (var i = 0, l = xs.length; i < l; i++) {
        f(xs[i], i);
      }
    }
  }
});

// node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js"(exports, module) {
    init_react();
    module.exports = Transform;
    var Duplex = require_stream_duplex2();
    var util = require_util();
    util.inherits = require_inherits_browser();
    util.inherits(Transform, Duplex);
    function TransformState(options, stream) {
      this.afterTransform = function(er, data) {
        return afterTransform(stream, er, data);
      };
      this.needTransform = false;
      this.transforming = false;
      this.writecb = null;
      this.writechunk = null;
    }
    function afterTransform(stream, er, data) {
      var ts = stream._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (!cb)
        return stream.emit("error", new Error("no writecb in Transform class"));
      ts.writechunk = null;
      ts.writecb = null;
      if (!util.isNullOrUndefined(data))
        stream.push(data);
      if (cb)
        cb(er);
      var rs = stream._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        stream._read(rs.highWaterMark);
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform))
        return new Transform(options);
      Duplex.call(this, options);
      this._transformState = new TransformState(options, this);
      var stream = this;
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      this.once("prefinish", function() {
        if (util.isFunction(this._flush))
          this._flush(function(er) {
            done(stream, er);
          });
        else
          done(stream);
      });
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      throw new Error("not implemented");
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    function done(stream, er) {
      if (er)
        return stream.emit("error", er);
      var ws = stream._writableState;
      var ts = stream._transformState;
      if (ws.length)
        throw new Error("calling transform done when ws.length != 0");
      if (ts.transforming)
        throw new Error("calling transform done when still transforming");
      return stream.push(null);
    }
  }
});

// node_modules/through2/node_modules/readable-stream/transform.js
var require_transform = __commonJS({
  "node_modules/through2/node_modules/readable-stream/transform.js"(exports, module) {
    init_react();
    module.exports = require_stream_transform();
  }
});

// node_modules/xtend/node_modules/object-keys/foreach.js
var require_foreach = __commonJS({
  "node_modules/xtend/node_modules/object-keys/foreach.js"(exports, module) {
    init_react();
    var hasOwn = Object.prototype.hasOwnProperty;
    var toString = Object.prototype.toString;
    var isFunction = function(fn) {
      var isFunc = typeof fn === "function" && !(fn instanceof RegExp) || toString.call(fn) === "[object Function]";
      if (!isFunc && typeof window !== "undefined") {
        isFunc = fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt;
      }
      return isFunc;
    };
    module.exports = function forEach(obj, fn) {
      if (!isFunction(fn)) {
        throw new TypeError("iterator must be a function");
      }
      var i, k, isString = typeof obj === "string", l = obj.length, context = arguments.length > 2 ? arguments[2] : null;
      if (l === +l) {
        for (i = 0; i < l; i++) {
          if (context === null) {
            fn(isString ? obj.charAt(i) : obj[i], i, obj);
          } else {
            fn.call(context, isString ? obj.charAt(i) : obj[i], i, obj);
          }
        }
      } else {
        for (k in obj) {
          if (hasOwn.call(obj, k)) {
            if (context === null) {
              fn(obj[k], k, obj);
            } else {
              fn.call(context, obj[k], k, obj);
            }
          }
        }
      }
    };
  }
});

// node_modules/xtend/node_modules/object-keys/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/xtend/node_modules/object-keys/isArguments.js"(exports, module) {
    init_react();
    var toString = Object.prototype.toString;
    module.exports = function isArguments(value) {
      var str = toString.call(value);
      var isArguments2 = str === "[object Arguments]";
      if (!isArguments2) {
        isArguments2 = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toString.call(value.callee) === "[object Function]";
      }
      return isArguments2;
    };
  }
});

// node_modules/xtend/node_modules/object-keys/shim.js
var require_shim = __commonJS({
  "node_modules/xtend/node_modules/object-keys/shim.js"(exports, module) {
    init_react();
    (function() {
      "use strict";
      var has = Object.prototype.hasOwnProperty, toString = Object.prototype.toString, forEach = require_foreach(), isArgs = require_isArguments(), hasDontEnumBug = !{ "toString": null }.propertyIsEnumerable("toString"), hasProtoEnumBug = function() {
      }.propertyIsEnumerable("prototype"), dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
      ], keysShim;
      keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object", isFunction = toString.call(object) === "[object Function]", isArguments = isArgs(object), theKeys = [];
        if (!isObject && !isFunction && !isArguments) {
          throw new TypeError("Object.keys called on a non-object");
        }
        if (isArguments) {
          forEach(object, function(value) {
            theKeys.push(value);
          });
        } else {
          var name, skipProto = hasProtoEnumBug && isFunction;
          for (name in object) {
            if (!(skipProto && name === "prototype") && has.call(object, name)) {
              theKeys.push(name);
            }
          }
        }
        if (hasDontEnumBug) {
          var ctor = object.constructor, skipConstructor = ctor && ctor.prototype === object;
          forEach(dontEnums, function(dontEnum) {
            if (!(skipConstructor && dontEnum === "constructor") && has.call(object, dontEnum)) {
              theKeys.push(dontEnum);
            }
          });
        }
        return theKeys;
      };
      module.exports = keysShim;
    })();
  }
});

// node_modules/xtend/node_modules/object-keys/index.js
var require_object_keys = __commonJS({
  "node_modules/xtend/node_modules/object-keys/index.js"(exports, module) {
    init_react();
    module.exports = Object.keys || require_shim();
  }
});

// node_modules/xtend/has-keys.js
var require_has_keys = __commonJS({
  "node_modules/xtend/has-keys.js"(exports, module) {
    init_react();
    module.exports = hasKeys;
    function hasKeys(source) {
      return source !== null && (typeof source === "object" || typeof source === "function");
    }
  }
});

// node_modules/xtend/index.js
var require_xtend = __commonJS({
  "node_modules/xtend/index.js"(exports, module) {
    init_react();
    var Keys = require_object_keys();
    var hasKeys = require_has_keys();
    module.exports = extend;
    function extend() {
      var target = {};
      for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];
        if (!hasKeys(source)) {
          continue;
        }
        var keys = Keys(source);
        for (var j = 0; j < keys.length; j++) {
          var name = keys[j];
          target[name] = source[name];
        }
      }
      return target;
    }
  }
});

// node_modules/through2/through2.js
var require_through2 = __commonJS({
  "node_modules/through2/through2.js"(exports, module) {
    init_react();
    var Transform = __require("stream").Transform || require_transform();
    var inherits = __require("util").inherits;
    var xtend = require_xtend();
    function noop(chunk, enc, callback) {
      callback(null, chunk);
    }
    function ctor(options, transform, flush) {
      if (typeof options == "function") {
        flush = transform;
        transform = options;
        options = {};
      }
      if (typeof transform != "function")
        transform = noop;
      function Through2(override) {
        if (!(this instanceof Through2))
          return new Through2(override);
        this.options = xtend(options, override);
        Transform.call(this, this.options);
      }
      inherits(Through2, Transform);
      Through2.prototype._transform = transform;
      if (typeof flush == "function")
        Through2.prototype._flush = flush;
      return Through2;
    }
    function make(options, transform, flush) {
      return ctor(options, transform, flush)();
    }
    module.exports = make;
    module.exports.ctor = ctor;
  }
});

// node_modules/pygmentize-bundled/index.js
var require_pygmentize_bundled = __commonJS({
  "node_modules/pygmentize-bundled/index.js"(exports, module) {
    init_react();
    var spawn = __require("child_process").spawn;
    var exec = __require("child_process").exec;
    var path = __require("path");
    var bl = require_bl();
    var through2 = require_through2();
    var defaultFormat = "html";
    var defaultLang = "js";
    var defaultEncoding = "utf8";
    var pythonVersions = {};
    function fromString(child, code, callback) {
      var stdout = bl(), stderr = bl(), ec = 0, exitClose = function() {
        if (++ec < 2)
          return;
        callback(null, stdout.slice());
      };
      child.stdout.pipe(stdout);
      child.stderr.pipe(stderr);
      child.on("exit", function(code2) {
        if (code2 !== 0) {
          ec = -1;
          return callback(new Error("Error calling `pygmentize`: " + stderr.toString()));
        }
        exitClose();
      });
      child.on("close", exitClose);
      child.stdin.write(code);
      child.stdin.end();
    }
    function fromStream(retStream, intStream, child) {
      var stderr = bl(), outStream = through2(function(chunk, enc, callback) {
        retStream.__write(chunk, enc, callback);
      });
      intStream.pipe(child.stdin);
      child.stdout.pipe(outStream);
      child.stderr.pipe(stderr);
      child.on("exit", function(code) {
        if (code !== 0)
          retStream.emit("error", stderr.toString());
        retStream.__end();
      });
    }
    function pygmentize(options, code, callback) {
      options = options || {};
      var execArgs = [
        "-f",
        options.format || defaultFormat,
        "-l",
        options.lang || defaultLang,
        "-P",
        "encoding=" + (options.encoding || defaultEncoding)
      ], toString = typeof code == "string" && typeof callback == "function", retStream = !toString && through2(), intStream = !toString && through2();
      if (typeof options.options == "object") {
        Object.keys(options.options).forEach(function(key) {
          execArgs.push("-P", key + "=" + options.options[key]);
        });
      }
      spawnPygmentize(options, execArgs, function(err, child) {
        if (toString) {
          if (err)
            return callback(err);
          return fromString(child, code, callback);
        }
        if (err)
          return retStream.emit("error", err);
        fromStream(retStream, intStream, child);
      });
      if (retStream) {
        retStream.__write = retStream.write;
        retStream.write = intStream.write.bind(intStream);
        retStream.__end = retStream.end;
        retStream.end = intStream.end.bind(intStream);
      }
      return retStream;
    }
    function spawnPygmentize(options, execArgs, callback) {
      var python = typeof options.python == "string" ? options.python : "python";
      pythonVersion(python, function(err, version) {
        if (err)
          return callback(err);
        if (version != 2 && version != 3)
          return callback(new Error("Unsupported Python version: " + version));
        var pyg = path.join(__dirname, "vendor/pygments", version == 2 ? "build-2.7" : "build-3.3", "pygmentize");
        callback(null, spawn(python, [pyg].concat(execArgs)));
      });
    }
    function pythonVersion(python, callback) {
      if (pythonVersions[python])
        return callback(null, pythonVersions[python]);
      exec(python + " -V", function(err, stdout, stderr) {
        if (err)
          return callback(err);
        var m = stderr.toString().match(/^Python (\d)[.\d]+/i);
        if (!m)
          m = stdout.toString().match(/^Python (\d)[.\d]+/i);
        if (!m)
          return callback(new Error("Cannot determine Python version: [" + stderr.toString() + "]"));
        pythonVersions[python] = +m[1];
        return callback(null, +m[1]);
      });
    }
    module.exports = pygmentize;
  }
});
export default require_pygmentize_bundled();
//# sourceMappingURL=/build/_shared/pygmentize-bundled-7WRE47VT.js.map
