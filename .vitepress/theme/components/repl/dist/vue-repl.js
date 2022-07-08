var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, computed, ref, inject, reactive, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, renderSlot, withModifiers, toDisplayString, Fragment, renderList, createCommentVNode, withDirectives, withKeys, vModelText, pushScopeId, popScopeId, onMounted, watchEffect, watch, createBlock, Transition, withCtx, createVNode, onUnmounted, vShow, version, provide, toRef } from "vue";
import * as defaultCompiler from "vue/compiler-sfc";
import { MagicString, babelParse, extractIdentifiers, walkIdentifiers, isStaticProperty, isInDestructureAssignment, walk, shouldTransformRef, transformRef } from "vue/compiler-sfc";
var SplitPane_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _hoisted_1$4 = ["onMousedown"];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    layout: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const isVertical = computed(() => props.layout === "vertical");
    const container = ref();
    const store = inject("store");
    const showOutput = ref(store.initialShowOutput);
    const state2 = reactive({
      dragging: false,
      split: 50
    });
    const boundSplit = computed(() => {
      const { split } = state2;
      return split < 20 ? 20 : split > 80 ? 80 : split;
    });
    let startPosition = 0;
    let startSplit = 0;
    function dragStart(e) {
      state2.dragging = true;
      startPosition = isVertical.value ? e.pageY : e.pageX;
      startSplit = boundSplit.value;
    }
    function dragMove(e) {
      if (state2.dragging) {
        const position = isVertical.value ? e.pageY : e.pageX;
        const totalSize = isVertical.value ? container.value.offsetHeight : container.value.offsetWidth;
        const dp = position - startPosition;
        state2.split = startSplit + ~~(dp / totalSize * 100);
      }
    }
    function dragEnd() {
      state2.dragging = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: (_value, _refs) => {
          _refs["container"] = _value;
          container.value = _value;
        },
        class: normalizeClass(["split-pane", {
          dragging: unref(state2).dragging,
          "show-output": showOutput.value,
          vertical: unref(isVertical)
        }]),
        onMousemove: dragMove,
        onMouseup: dragEnd,
        onMouseleave: dragEnd
      }, [
        createElementVNode("div", {
          class: "left",
          style: normalizeStyle({ [unref(isVertical) ? "height" : "width"]: unref(boundSplit) + "%" })
        }, [
          renderSlot(_ctx.$slots, "left", {}, void 0, true),
          createElementVNode("div", {
            class: "dragger",
            onMousedown: withModifiers(dragStart, ["prevent"])
          }, null, 40, _hoisted_1$4)
        ], 4),
        createElementVNode("div", {
          class: "right",
          style: normalizeStyle({ [unref(isVertical) ? "height" : "width"]: 100 - unref(boundSplit) + "%" })
        }, [
          renderSlot(_ctx.$slots, "right", {}, void 0, true)
        ], 4),
        createElementVNode("button", {
          class: "toggler",
          onClick: _cache[0] || (_cache[0] = ($event) => showOutput.value = !showOutput.value)
        }, toDisplayString(showOutput.value ? "< Code" : "Output >"), 1)
      ], 34);
    };
  }
});
var SplitPane = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-427f8a98"]]);
var FileSelector_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-6e00d5ce"), n = n(), popScopeId(), n);
const _hoisted_1$3 = ["onClick"];
const _hoisted_2$1 = { class: "label" };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("svg", {
  class: "icon",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createElementVNode("line", {
    stroke: "#999",
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }),
  /* @__PURE__ */ createElementVNode("line", {
    stroke: "#999",
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })
], -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = {
  key: 0,
  class: "file pending"
};
const _hoisted_7 = ["onKeyup"];
const _hoisted_8 = {
  key: 1,
  class: "import-map-wrapper"
};
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "label" }, "Import Map", -1));
const _hoisted_10 = [
  _hoisted_9
];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const store = inject("store");
    const pending = ref(false);
    const pendingFilename = ref("Comp.vue");
    const importMapFile = "import-map.json";
    const showImportMap = inject("import-map");
    const files = computed(() => Object.entries(store.state.files).filter(([name, file]) => name !== importMapFile && !file.hidden).map(([name]) => name));
    function startAddFile() {
      pending.value = true;
    }
    function cancelAddFile() {
      pending.value = false;
    }
    function focus({ el }) {
      el.focus();
    }
    function doneAddFile() {
      const filename = pendingFilename.value;
      if (!/\.(vue|js|ts|css)$/.test(filename)) {
        store.state.errors = [
          `Playground only supports *.vue, *.js, *.ts, *.css files.`
        ];
        return;
      }
      if (filename in store.state.files) {
        store.state.errors = [`File "${filename}" already exists.`];
        return;
      }
      store.state.errors = [];
      cancelAddFile();
      store.addFile(filename);
      pendingFilename.value = "Comp.vue";
    }
    const fileSel = ref(null);
    function horizontalScroll(e) {
      e.preventDefault();
      const el = fileSel.value;
      const direction = Math.abs(e.deltaX) >= Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const distance = 30 * (direction > 0 ? 1 : -1);
      el.scrollTo({
        left: el.scrollLeft + distance
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["file-selector", { "has-import-map": unref(showImportMap) }]),
        onWheel: horizontalScroll,
        ref: (_value, _refs) => {
          _refs["fileSel"] = _value;
          fileSel.value = _value;
        }
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(files), (file, i) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["file", { active: unref(store).state.activeFile.filename === file }]),
            onClick: ($event) => unref(store).setActive(file)
          }, [
            createElementVNode("span", _hoisted_2$1, toDisplayString(file === importMapFile ? "Import Map" : file), 1),
            i > 0 ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "remove",
              onClick: withModifiers(($event) => unref(store).deleteFile(file), ["stop"])
            }, _hoisted_5, 8, _hoisted_3$1)) : createCommentVNode("", true)
          ], 10, _hoisted_1$3);
        }), 256)),
        pending.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
          withDirectives(createElementVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => pendingFilename.value = $event),
            spellcheck: "false",
            onBlur: doneAddFile,
            onKeyup: [
              withKeys(doneAddFile, ["enter"]),
              withKeys(cancelAddFile, ["esc"])
            ],
            onVnodeMounted: focus
          }, null, 40, _hoisted_7), [
            [vModelText, pendingFilename.value]
          ])
        ])) : createCommentVNode("", true),
        createElementVNode("button", {
          class: "add",
          onClick: startAddFile
        }, "+"),
        unref(showImportMap) ? (openBlock(), createElementBlock("div", _hoisted_8, [
          createElementVNode("div", {
            class: normalizeClass(["file import-map", { active: unref(store).state.activeFile.filename === importMapFile }]),
            onClick: _cache[1] || (_cache[1] = ($event) => unref(store).setActive(importMapFile))
          }, _hoisted_10, 2)
        ])) : createCommentVNode("", true)
      ], 34);
    };
  }
});
var FileSelector = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-6e00d5ce"]]);
function debounce(fn, n = 100) {
  let handle;
  return (...args) => {
    if (handle)
      clearTimeout(handle);
    handle = setTimeout(() => {
      fn(...args);
    }, n);
  };
}
function utoa(data) {
  return btoa(unescape(encodeURIComponent(data)));
}
function atou(base64) {
  return decodeURIComponent(escape(atob(base64)));
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var codemirror$1 = { exports: {} };
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    var userAgent = navigator.userAgent;
    var platform = navigator.platform;
    var gecko = /gecko\/\d/i.test(userAgent);
    var ie_upto10 = /MSIE \d/.test(userAgent);
    var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
    var edge = /Edge\/(\d+)/.exec(userAgent);
    var ie = ie_upto10 || ie_11up || edge;
    var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
    var webkit = !edge && /WebKit\//.test(userAgent);
    var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
    var chrome = !edge && /Chrome\//.test(userAgent);
    var presto = /Opera\//.test(userAgent);
    var safari = /Apple Computer/.test(navigator.vendor);
    var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
    var phantom = /PhantomJS/.test(userAgent);
    var ios = safari && (/Mobile\/\w+/.test(userAgent) || navigator.maxTouchPoints > 2);
    var android = /Android/.test(userAgent);
    var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
    var mac = ios || /Mac/.test(platform);
    var chromeOS = /\bCrOS\b/.test(userAgent);
    var windows = /win/i.test(platform);
    var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
    if (presto_version) {
      presto_version = Number(presto_version[1]);
    }
    if (presto_version && presto_version >= 15) {
      presto = false;
      webkit = true;
    }
    var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
    var captureRightClick = gecko || ie && ie_version >= 9;
    function classTest(cls) {
      return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*");
    }
    var rmClass = function(node, cls) {
      var current = node.className;
      var match2 = classTest(cls).exec(current);
      if (match2) {
        var after = current.slice(match2.index + match2[0].length);
        node.className = current.slice(0, match2.index) + (after ? match2[1] + after : "");
      }
    };
    function removeChildren(e) {
      for (var count = e.childNodes.length; count > 0; --count) {
        e.removeChild(e.firstChild);
      }
      return e;
    }
    function removeChildrenAndAdd(parent, e) {
      return removeChildren(parent).appendChild(e);
    }
    function elt(tag, content, className, style) {
      var e = document.createElement(tag);
      if (className) {
        e.className = className;
      }
      if (style) {
        e.style.cssText = style;
      }
      if (typeof content == "string") {
        e.appendChild(document.createTextNode(content));
      } else if (content) {
        for (var i2 = 0; i2 < content.length; ++i2) {
          e.appendChild(content[i2]);
        }
      }
      return e;
    }
    function eltP(tag, content, className, style) {
      var e = elt(tag, content, className, style);
      e.setAttribute("role", "presentation");
      return e;
    }
    var range;
    if (document.createRange) {
      range = function(node, start, end, endNode) {
        var r = document.createRange();
        r.setEnd(endNode || node, end);
        r.setStart(node, start);
        return r;
      };
    } else {
      range = function(node, start, end) {
        var r = document.body.createTextRange();
        try {
          r.moveToElementText(node.parentNode);
        } catch (e) {
          return r;
        }
        r.collapse(true);
        r.moveEnd("character", end);
        r.moveStart("character", start);
        return r;
      };
    }
    function contains(parent, child) {
      if (child.nodeType == 3) {
        child = child.parentNode;
      }
      if (parent.contains) {
        return parent.contains(child);
      }
      do {
        if (child.nodeType == 11) {
          child = child.host;
        }
        if (child == parent) {
          return true;
        }
      } while (child = child.parentNode);
    }
    function activeElt() {
      var activeElement;
      try {
        activeElement = document.activeElement;
      } catch (e) {
        activeElement = document.body || null;
      }
      while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement) {
        activeElement = activeElement.shadowRoot.activeElement;
      }
      return activeElement;
    }
    function addClass(node, cls) {
      var current = node.className;
      if (!classTest(cls).test(current)) {
        node.className += (current ? " " : "") + cls;
      }
    }
    function joinClasses(a, b) {
      var as = a.split(" ");
      for (var i2 = 0; i2 < as.length; i2++) {
        if (as[i2] && !classTest(as[i2]).test(b)) {
          b += " " + as[i2];
        }
      }
      return b;
    }
    var selectInput = function(node) {
      node.select();
    };
    if (ios) {
      selectInput = function(node) {
        node.selectionStart = 0;
        node.selectionEnd = node.value.length;
      };
    } else if (ie) {
      selectInput = function(node) {
        try {
          node.select();
        } catch (_e) {
        }
      };
    }
    function bind(f) {
      var args = Array.prototype.slice.call(arguments, 1);
      return function() {
        return f.apply(null, args);
      };
    }
    function copyObj(obj, target, overwrite) {
      if (!target) {
        target = {};
      }
      for (var prop2 in obj) {
        if (obj.hasOwnProperty(prop2) && (overwrite !== false || !target.hasOwnProperty(prop2))) {
          target[prop2] = obj[prop2];
        }
      }
      return target;
    }
    function countColumn(string, end, tabSize, startIndex, startValue) {
      if (end == null) {
        end = string.search(/[^\s\u00a0]/);
        if (end == -1) {
          end = string.length;
        }
      }
      for (var i2 = startIndex || 0, n = startValue || 0; ; ) {
        var nextTab = string.indexOf("	", i2);
        if (nextTab < 0 || nextTab >= end) {
          return n + (end - i2);
        }
        n += nextTab - i2;
        n += tabSize - n % tabSize;
        i2 = nextTab + 1;
      }
    }
    var Delayed = function() {
      this.id = null;
      this.f = null;
      this.time = 0;
      this.handler = bind(this.onTimeout, this);
    };
    Delayed.prototype.onTimeout = function(self2) {
      self2.id = 0;
      if (self2.time <= +new Date()) {
        self2.f();
      } else {
        setTimeout(self2.handler, self2.time - +new Date());
      }
    };
    Delayed.prototype.set = function(ms, f) {
      this.f = f;
      var time = +new Date() + ms;
      if (!this.id || time < this.time) {
        clearTimeout(this.id);
        this.id = setTimeout(this.handler, ms);
        this.time = time;
      }
    };
    function indexOf(array, elt2) {
      for (var i2 = 0; i2 < array.length; ++i2) {
        if (array[i2] == elt2) {
          return i2;
        }
      }
      return -1;
    }
    var scrollerGap = 50;
    var Pass = { toString: function() {
      return "CodeMirror.Pass";
    } };
    var sel_dontScroll = { scroll: false }, sel_mouse = { origin: "*mouse" }, sel_move = { origin: "+move" };
    function findColumn(string, goal, tabSize) {
      for (var pos = 0, col = 0; ; ) {
        var nextTab = string.indexOf("	", pos);
        if (nextTab == -1) {
          nextTab = string.length;
        }
        var skipped = nextTab - pos;
        if (nextTab == string.length || col + skipped >= goal) {
          return pos + Math.min(skipped, goal - col);
        }
        col += nextTab - pos;
        col += tabSize - col % tabSize;
        pos = nextTab + 1;
        if (col >= goal) {
          return pos;
        }
      }
    }
    var spaceStrs = [""];
    function spaceStr(n) {
      while (spaceStrs.length <= n) {
        spaceStrs.push(lst(spaceStrs) + " ");
      }
      return spaceStrs[n];
    }
    function lst(arr) {
      return arr[arr.length - 1];
    }
    function map(array, f) {
      var out = [];
      for (var i2 = 0; i2 < array.length; i2++) {
        out[i2] = f(array[i2], i2);
      }
      return out;
    }
    function insertSorted(array, value, score) {
      var pos = 0, priority = score(value);
      while (pos < array.length && score(array[pos]) <= priority) {
        pos++;
      }
      array.splice(pos, 0, value);
    }
    function nothing() {
    }
    function createObj(base, props) {
      var inst;
      if (Object.create) {
        inst = Object.create(base);
      } else {
        nothing.prototype = base;
        inst = new nothing();
      }
      if (props) {
        copyObj(props, inst);
      }
      return inst;
    }
    var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    function isWordCharBasic(ch) {
      return /\w/.test(ch) || ch > "\x80" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
    }
    function isWordChar(ch, helper) {
      if (!helper) {
        return isWordCharBasic(ch);
      }
      if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) {
        return true;
      }
      return helper.test(ch);
    }
    function isEmpty(obj) {
      for (var n in obj) {
        if (obj.hasOwnProperty(n) && obj[n]) {
          return false;
        }
      }
      return true;
    }
    var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    function isExtendingChar(ch) {
      return ch.charCodeAt(0) >= 768 && extendingChars.test(ch);
    }
    function skipExtendingChars(str, pos, dir) {
      while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) {
        pos += dir;
      }
      return pos;
    }
    function findFirst(pred, from, to) {
      var dir = from > to ? -1 : 1;
      for (; ; ) {
        if (from == to) {
          return from;
        }
        var midF = (from + to) / 2, mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF);
        if (mid == from) {
          return pred(mid) ? from : to;
        }
        if (pred(mid)) {
          to = mid;
        } else {
          from = mid + dir;
        }
      }
    }
    function iterateBidiSections(order, from, to, f) {
      if (!order) {
        return f(from, to, "ltr", 0);
      }
      var found = false;
      for (var i2 = 0; i2 < order.length; ++i2) {
        var part = order[i2];
        if (part.from < to && part.to > from || from == to && part.to == from) {
          f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i2);
          found = true;
        }
      }
      if (!found) {
        f(from, to, "ltr");
      }
    }
    var bidiOther = null;
    function getBidiPartAt(order, ch, sticky) {
      var found;
      bidiOther = null;
      for (var i2 = 0; i2 < order.length; ++i2) {
        var cur = order[i2];
        if (cur.from < ch && cur.to > ch) {
          return i2;
        }
        if (cur.to == ch) {
          if (cur.from != cur.to && sticky == "before") {
            found = i2;
          } else {
            bidiOther = i2;
          }
        }
        if (cur.from == ch) {
          if (cur.from != cur.to && sticky != "before") {
            found = i2;
          } else {
            bidiOther = i2;
          }
        }
      }
      return found != null ? found : bidiOther;
    }
    var bidiOrdering = function() {
      var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
      var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
      function charType(code) {
        if (code <= 247) {
          return lowTypes.charAt(code);
        } else if (1424 <= code && code <= 1524) {
          return "R";
        } else if (1536 <= code && code <= 1785) {
          return arabicTypes.charAt(code - 1536);
        } else if (1774 <= code && code <= 2220) {
          return "r";
        } else if (8192 <= code && code <= 8203) {
          return "w";
        } else if (code == 8204) {
          return "b";
        } else {
          return "L";
        }
      }
      var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
      var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
      function BidiSpan(level, from, to) {
        this.level = level;
        this.from = from;
        this.to = to;
      }
      return function(str, direction) {
        var outerType = direction == "ltr" ? "L" : "R";
        if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) {
          return false;
        }
        var len = str.length, types2 = [];
        for (var i2 = 0; i2 < len; ++i2) {
          types2.push(charType(str.charCodeAt(i2)));
        }
        for (var i$12 = 0, prev = outerType; i$12 < len; ++i$12) {
          var type = types2[i$12];
          if (type == "m") {
            types2[i$12] = prev;
          } else {
            prev = type;
          }
        }
        for (var i$22 = 0, cur = outerType; i$22 < len; ++i$22) {
          var type$1 = types2[i$22];
          if (type$1 == "1" && cur == "r") {
            types2[i$22] = "n";
          } else if (isStrong.test(type$1)) {
            cur = type$1;
            if (type$1 == "r") {
              types2[i$22] = "R";
            }
          }
        }
        for (var i$3 = 1, prev$1 = types2[0]; i$3 < len - 1; ++i$3) {
          var type$2 = types2[i$3];
          if (type$2 == "+" && prev$1 == "1" && types2[i$3 + 1] == "1") {
            types2[i$3] = "1";
          } else if (type$2 == "," && prev$1 == types2[i$3 + 1] && (prev$1 == "1" || prev$1 == "n")) {
            types2[i$3] = prev$1;
          }
          prev$1 = type$2;
        }
        for (var i$4 = 0; i$4 < len; ++i$4) {
          var type$3 = types2[i$4];
          if (type$3 == ",") {
            types2[i$4] = "N";
          } else if (type$3 == "%") {
            var end = void 0;
            for (end = i$4 + 1; end < len && types2[end] == "%"; ++end) {
            }
            var replace = i$4 && types2[i$4 - 1] == "!" || end < len && types2[end] == "1" ? "1" : "N";
            for (var j = i$4; j < end; ++j) {
              types2[j] = replace;
            }
            i$4 = end - 1;
          }
        }
        for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
          var type$4 = types2[i$5];
          if (cur$1 == "L" && type$4 == "1") {
            types2[i$5] = "L";
          } else if (isStrong.test(type$4)) {
            cur$1 = type$4;
          }
        }
        for (var i$6 = 0; i$6 < len; ++i$6) {
          if (isNeutral.test(types2[i$6])) {
            var end$1 = void 0;
            for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types2[end$1]); ++end$1) {
            }
            var before = (i$6 ? types2[i$6 - 1] : outerType) == "L";
            var after = (end$1 < len ? types2[end$1] : outerType) == "L";
            var replace$1 = before == after ? before ? "L" : "R" : outerType;
            for (var j$1 = i$6; j$1 < end$1; ++j$1) {
              types2[j$1] = replace$1;
            }
            i$6 = end$1 - 1;
          }
        }
        var order = [], m;
        for (var i$7 = 0; i$7 < len; ) {
          if (countsAsLeft.test(types2[i$7])) {
            var start = i$7;
            for (++i$7; i$7 < len && countsAsLeft.test(types2[i$7]); ++i$7) {
            }
            order.push(new BidiSpan(0, start, i$7));
          } else {
            var pos = i$7, at = order.length, isRTL = direction == "rtl" ? 1 : 0;
            for (++i$7; i$7 < len && types2[i$7] != "L"; ++i$7) {
            }
            for (var j$2 = pos; j$2 < i$7; ) {
              if (countsAsNum.test(types2[j$2])) {
                if (pos < j$2) {
                  order.splice(at, 0, new BidiSpan(1, pos, j$2));
                  at += isRTL;
                }
                var nstart = j$2;
                for (++j$2; j$2 < i$7 && countsAsNum.test(types2[j$2]); ++j$2) {
                }
                order.splice(at, 0, new BidiSpan(2, nstart, j$2));
                at += isRTL;
                pos = j$2;
              } else {
                ++j$2;
              }
            }
            if (pos < i$7) {
              order.splice(at, 0, new BidiSpan(1, pos, i$7));
            }
          }
        }
        if (direction == "ltr") {
          if (order[0].level == 1 && (m = str.match(/^\s+/))) {
            order[0].from = m[0].length;
            order.unshift(new BidiSpan(0, 0, m[0].length));
          }
          if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
            lst(order).to -= m[0].length;
            order.push(new BidiSpan(0, len - m[0].length, len));
          }
        }
        return direction == "rtl" ? order.reverse() : order;
      };
    }();
    function getOrder(line, direction) {
      var order = line.order;
      if (order == null) {
        order = line.order = bidiOrdering(line.text, direction);
      }
      return order;
    }
    var noHandlers = [];
    var on = function(emitter, type, f) {
      if (emitter.addEventListener) {
        emitter.addEventListener(type, f, false);
      } else if (emitter.attachEvent) {
        emitter.attachEvent("on" + type, f);
      } else {
        var map2 = emitter._handlers || (emitter._handlers = {});
        map2[type] = (map2[type] || noHandlers).concat(f);
      }
    };
    function getHandlers(emitter, type) {
      return emitter._handlers && emitter._handlers[type] || noHandlers;
    }
    function off(emitter, type, f) {
      if (emitter.removeEventListener) {
        emitter.removeEventListener(type, f, false);
      } else if (emitter.detachEvent) {
        emitter.detachEvent("on" + type, f);
      } else {
        var map2 = emitter._handlers, arr = map2 && map2[type];
        if (arr) {
          var index = indexOf(arr, f);
          if (index > -1) {
            map2[type] = arr.slice(0, index).concat(arr.slice(index + 1));
          }
        }
      }
    }
    function signal(emitter, type) {
      var handlers = getHandlers(emitter, type);
      if (!handlers.length) {
        return;
      }
      var args = Array.prototype.slice.call(arguments, 2);
      for (var i2 = 0; i2 < handlers.length; ++i2) {
        handlers[i2].apply(null, args);
      }
    }
    function signalDOMEvent(cm, e, override) {
      if (typeof e == "string") {
        e = { type: e, preventDefault: function() {
          this.defaultPrevented = true;
        } };
      }
      signal(cm, override || e.type, cm, e);
      return e_defaultPrevented(e) || e.codemirrorIgnore;
    }
    function signalCursorActivity(cm) {
      var arr = cm._handlers && cm._handlers.cursorActivity;
      if (!arr) {
        return;
      }
      var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
      for (var i2 = 0; i2 < arr.length; ++i2) {
        if (indexOf(set, arr[i2]) == -1) {
          set.push(arr[i2]);
        }
      }
    }
    function hasHandler(emitter, type) {
      return getHandlers(emitter, type).length > 0;
    }
    function eventMixin(ctor) {
      ctor.prototype.on = function(type, f) {
        on(this, type, f);
      };
      ctor.prototype.off = function(type, f) {
        off(this, type, f);
      };
    }
    function e_preventDefault(e) {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    }
    function e_stopPropagation(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.cancelBubble = true;
      }
    }
    function e_defaultPrevented(e) {
      return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
    }
    function e_stop(e) {
      e_preventDefault(e);
      e_stopPropagation(e);
    }
    function e_target(e) {
      return e.target || e.srcElement;
    }
    function e_button(e) {
      var b = e.which;
      if (b == null) {
        if (e.button & 1) {
          b = 1;
        } else if (e.button & 2) {
          b = 3;
        } else if (e.button & 4) {
          b = 2;
        }
      }
      if (mac && e.ctrlKey && b == 1) {
        b = 3;
      }
      return b;
    }
    var dragAndDrop = function() {
      if (ie && ie_version < 9) {
        return false;
      }
      var div = elt("div");
      return "draggable" in div || "dragDrop" in div;
    }();
    var zwspSupported;
    function zeroWidthElement(measure) {
      if (zwspSupported == null) {
        var test = elt("span", "\u200B");
        removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
        if (measure.firstChild.offsetHeight != 0) {
          zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8);
        }
      }
      var node = zwspSupported ? elt("span", "\u200B") : elt("span", "\xA0", null, "display: inline-block; width: 1px; margin-right: -1px");
      node.setAttribute("cm-text", "");
      return node;
    }
    var badBidiRects;
    function hasBadBidiRects(measure) {
      if (badBidiRects != null) {
        return badBidiRects;
      }
      var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062EA"));
      var r0 = range(txt, 0, 1).getBoundingClientRect();
      var r1 = range(txt, 1, 2).getBoundingClientRect();
      removeChildren(measure);
      if (!r0 || r0.left == r0.right) {
        return false;
      }
      return badBidiRects = r1.right - r0.right < 3;
    }
    var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function(string) {
      var pos = 0, result = [], l = string.length;
      while (pos <= l) {
        var nl = string.indexOf("\n", pos);
        if (nl == -1) {
          nl = string.length;
        }
        var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
        var rt = line.indexOf("\r");
        if (rt != -1) {
          result.push(line.slice(0, rt));
          pos += rt + 1;
        } else {
          result.push(line);
          pos = nl + 1;
        }
      }
      return result;
    } : function(string) {
      return string.split(/\r\n?|\n/);
    };
    var hasSelection = window.getSelection ? function(te) {
      try {
        return te.selectionStart != te.selectionEnd;
      } catch (e) {
        return false;
      }
    } : function(te) {
      var range2;
      try {
        range2 = te.ownerDocument.selection.createRange();
      } catch (e) {
      }
      if (!range2 || range2.parentElement() != te) {
        return false;
      }
      return range2.compareEndPoints("StartToEnd", range2) != 0;
    };
    var hasCopyEvent = function() {
      var e = elt("div");
      if ("oncopy" in e) {
        return true;
      }
      e.setAttribute("oncopy", "return;");
      return typeof e.oncopy == "function";
    }();
    var badZoomedRects = null;
    function hasBadZoomedRects(measure) {
      if (badZoomedRects != null) {
        return badZoomedRects;
      }
      var node = removeChildrenAndAdd(measure, elt("span", "x"));
      var normal = node.getBoundingClientRect();
      var fromRange = range(node, 0, 1).getBoundingClientRect();
      return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
    }
    var modes = {}, mimeModes = {};
    function defineMode(name, mode) {
      if (arguments.length > 2) {
        mode.dependencies = Array.prototype.slice.call(arguments, 2);
      }
      modes[name] = mode;
    }
    function defineMIME(mime, spec) {
      mimeModes[mime] = spec;
    }
    function resolveMode(spec) {
      if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
        spec = mimeModes[spec];
      } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
        var found = mimeModes[spec.name];
        if (typeof found == "string") {
          found = { name: found };
        }
        spec = createObj(found, spec);
        spec.name = found.name;
      } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
        return resolveMode("application/xml");
      } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
        return resolveMode("application/json");
      }
      if (typeof spec == "string") {
        return { name: spec };
      } else {
        return spec || { name: "null" };
      }
    }
    function getMode(options, spec) {
      spec = resolveMode(spec);
      var mfactory = modes[spec.name];
      if (!mfactory) {
        return getMode(options, "text/plain");
      }
      var modeObj = mfactory(options, spec);
      if (modeExtensions.hasOwnProperty(spec.name)) {
        var exts = modeExtensions[spec.name];
        for (var prop2 in exts) {
          if (!exts.hasOwnProperty(prop2)) {
            continue;
          }
          if (modeObj.hasOwnProperty(prop2)) {
            modeObj["_" + prop2] = modeObj[prop2];
          }
          modeObj[prop2] = exts[prop2];
        }
      }
      modeObj.name = spec.name;
      if (spec.helperType) {
        modeObj.helperType = spec.helperType;
      }
      if (spec.modeProps) {
        for (var prop$1 in spec.modeProps) {
          modeObj[prop$1] = spec.modeProps[prop$1];
        }
      }
      return modeObj;
    }
    var modeExtensions = {};
    function extendMode(mode, properties) {
      var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : modeExtensions[mode] = {};
      copyObj(properties, exts);
    }
    function copyState(mode, state2) {
      if (state2 === true) {
        return state2;
      }
      if (mode.copyState) {
        return mode.copyState(state2);
      }
      var nstate = {};
      for (var n in state2) {
        var val = state2[n];
        if (val instanceof Array) {
          val = val.concat([]);
        }
        nstate[n] = val;
      }
      return nstate;
    }
    function innerMode(mode, state2) {
      var info;
      while (mode.innerMode) {
        info = mode.innerMode(state2);
        if (!info || info.mode == mode) {
          break;
        }
        state2 = info.state;
        mode = info.mode;
      }
      return info || { mode, state: state2 };
    }
    function startState(mode, a1, a2) {
      return mode.startState ? mode.startState(a1, a2) : true;
    }
    var StringStream = function(string, tabSize, lineOracle) {
      this.pos = this.start = 0;
      this.string = string;
      this.tabSize = tabSize || 8;
      this.lastColumnPos = this.lastColumnValue = 0;
      this.lineStart = 0;
      this.lineOracle = lineOracle;
    };
    StringStream.prototype.eol = function() {
      return this.pos >= this.string.length;
    };
    StringStream.prototype.sol = function() {
      return this.pos == this.lineStart;
    };
    StringStream.prototype.peek = function() {
      return this.string.charAt(this.pos) || void 0;
    };
    StringStream.prototype.next = function() {
      if (this.pos < this.string.length) {
        return this.string.charAt(this.pos++);
      }
    };
    StringStream.prototype.eat = function(match2) {
      var ch = this.string.charAt(this.pos);
      var ok;
      if (typeof match2 == "string") {
        ok = ch == match2;
      } else {
        ok = ch && (match2.test ? match2.test(ch) : match2(ch));
      }
      if (ok) {
        ++this.pos;
        return ch;
      }
    };
    StringStream.prototype.eatWhile = function(match2) {
      var start = this.pos;
      while (this.eat(match2)) {
      }
      return this.pos > start;
    };
    StringStream.prototype.eatSpace = function() {
      var start = this.pos;
      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) {
        ++this.pos;
      }
      return this.pos > start;
    };
    StringStream.prototype.skipToEnd = function() {
      this.pos = this.string.length;
    };
    StringStream.prototype.skipTo = function(ch) {
      var found = this.string.indexOf(ch, this.pos);
      if (found > -1) {
        this.pos = found;
        return true;
      }
    };
    StringStream.prototype.backUp = function(n) {
      this.pos -= n;
    };
    StringStream.prototype.column = function() {
      if (this.lastColumnPos < this.start) {
        this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
        this.lastColumnPos = this.start;
      }
      return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
    };
    StringStream.prototype.indentation = function() {
      return countColumn(this.string, null, this.tabSize) - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
    };
    StringStream.prototype.match = function(pattern, consume, caseInsensitive) {
      if (typeof pattern == "string") {
        var cased = function(str) {
          return caseInsensitive ? str.toLowerCase() : str;
        };
        var substr = this.string.substr(this.pos, pattern.length);
        if (cased(substr) == cased(pattern)) {
          if (consume !== false) {
            this.pos += pattern.length;
          }
          return true;
        }
      } else {
        var match2 = this.string.slice(this.pos).match(pattern);
        if (match2 && match2.index > 0) {
          return null;
        }
        if (match2 && consume !== false) {
          this.pos += match2[0].length;
        }
        return match2;
      }
    };
    StringStream.prototype.current = function() {
      return this.string.slice(this.start, this.pos);
    };
    StringStream.prototype.hideFirstChars = function(n, inner) {
      this.lineStart += n;
      try {
        return inner();
      } finally {
        this.lineStart -= n;
      }
    };
    StringStream.prototype.lookAhead = function(n) {
      var oracle = this.lineOracle;
      return oracle && oracle.lookAhead(n);
    };
    StringStream.prototype.baseToken = function() {
      var oracle = this.lineOracle;
      return oracle && oracle.baseToken(this.pos);
    };
    function getLine(doc, n) {
      n -= doc.first;
      if (n < 0 || n >= doc.size) {
        throw new Error("There is no line " + (n + doc.first) + " in the document.");
      }
      var chunk = doc;
      while (!chunk.lines) {
        for (var i2 = 0; ; ++i2) {
          var child = chunk.children[i2], sz = child.chunkSize();
          if (n < sz) {
            chunk = child;
            break;
          }
          n -= sz;
        }
      }
      return chunk.lines[n];
    }
    function getBetween(doc, start, end) {
      var out = [], n = start.line;
      doc.iter(start.line, end.line + 1, function(line) {
        var text = line.text;
        if (n == end.line) {
          text = text.slice(0, end.ch);
        }
        if (n == start.line) {
          text = text.slice(start.ch);
        }
        out.push(text);
        ++n;
      });
      return out;
    }
    function getLines(doc, from, to) {
      var out = [];
      doc.iter(from, to, function(line) {
        out.push(line.text);
      });
      return out;
    }
    function updateLineHeight(line, height) {
      var diff = height - line.height;
      if (diff) {
        for (var n = line; n; n = n.parent) {
          n.height += diff;
        }
      }
    }
    function lineNo(line) {
      if (line.parent == null) {
        return null;
      }
      var cur = line.parent, no = indexOf(cur.lines, line);
      for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
        for (var i2 = 0; ; ++i2) {
          if (chunk.children[i2] == cur) {
            break;
          }
          no += chunk.children[i2].chunkSize();
        }
      }
      return no + cur.first;
    }
    function lineAtHeight(chunk, h) {
      var n = chunk.first;
      outer:
        do {
          for (var i$12 = 0; i$12 < chunk.children.length; ++i$12) {
            var child = chunk.children[i$12], ch = child.height;
            if (h < ch) {
              chunk = child;
              continue outer;
            }
            h -= ch;
            n += child.chunkSize();
          }
          return n;
        } while (!chunk.lines);
      var i2 = 0;
      for (; i2 < chunk.lines.length; ++i2) {
        var line = chunk.lines[i2], lh = line.height;
        if (h < lh) {
          break;
        }
        h -= lh;
      }
      return n + i2;
    }
    function isLine(doc, l) {
      return l >= doc.first && l < doc.first + doc.size;
    }
    function lineNumberFor(options, i2) {
      return String(options.lineNumberFormatter(i2 + options.firstLineNumber));
    }
    function Pos(line, ch, sticky) {
      if (sticky === void 0)
        sticky = null;
      if (!(this instanceof Pos)) {
        return new Pos(line, ch, sticky);
      }
      this.line = line;
      this.ch = ch;
      this.sticky = sticky;
    }
    function cmp(a, b) {
      return a.line - b.line || a.ch - b.ch;
    }
    function equalCursorPos(a, b) {
      return a.sticky == b.sticky && cmp(a, b) == 0;
    }
    function copyPos(x) {
      return Pos(x.line, x.ch);
    }
    function maxPos(a, b) {
      return cmp(a, b) < 0 ? b : a;
    }
    function minPos(a, b) {
      return cmp(a, b) < 0 ? a : b;
    }
    function clipLine(doc, n) {
      return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));
    }
    function clipPos(doc, pos) {
      if (pos.line < doc.first) {
        return Pos(doc.first, 0);
      }
      var last = doc.first + doc.size - 1;
      if (pos.line > last) {
        return Pos(last, getLine(doc, last).text.length);
      }
      return clipToLen(pos, getLine(doc, pos.line).text.length);
    }
    function clipToLen(pos, linelen) {
      var ch = pos.ch;
      if (ch == null || ch > linelen) {
        return Pos(pos.line, linelen);
      } else if (ch < 0) {
        return Pos(pos.line, 0);
      } else {
        return pos;
      }
    }
    function clipPosArray(doc, array) {
      var out = [];
      for (var i2 = 0; i2 < array.length; i2++) {
        out[i2] = clipPos(doc, array[i2]);
      }
      return out;
    }
    var SavedContext = function(state2, lookAhead) {
      this.state = state2;
      this.lookAhead = lookAhead;
    };
    var Context = function(doc, state2, line, lookAhead) {
      this.state = state2;
      this.doc = doc;
      this.line = line;
      this.maxLookAhead = lookAhead || 0;
      this.baseTokens = null;
      this.baseTokenPos = 1;
    };
    Context.prototype.lookAhead = function(n) {
      var line = this.doc.getLine(this.line + n);
      if (line != null && n > this.maxLookAhead) {
        this.maxLookAhead = n;
      }
      return line;
    };
    Context.prototype.baseToken = function(n) {
      if (!this.baseTokens) {
        return null;
      }
      while (this.baseTokens[this.baseTokenPos] <= n) {
        this.baseTokenPos += 2;
      }
      var type = this.baseTokens[this.baseTokenPos + 1];
      return {
        type: type && type.replace(/( |^)overlay .*/, ""),
        size: this.baseTokens[this.baseTokenPos] - n
      };
    };
    Context.prototype.nextLine = function() {
      this.line++;
      if (this.maxLookAhead > 0) {
        this.maxLookAhead--;
      }
    };
    Context.fromSaved = function(doc, saved, line) {
      if (saved instanceof SavedContext) {
        return new Context(doc, copyState(doc.mode, saved.state), line, saved.lookAhead);
      } else {
        return new Context(doc, copyState(doc.mode, saved), line);
      }
    };
    Context.prototype.save = function(copy) {
      var state2 = copy !== false ? copyState(this.doc.mode, this.state) : this.state;
      return this.maxLookAhead > 0 ? new SavedContext(state2, this.maxLookAhead) : state2;
    };
    function highlightLine(cm, line, context, forceToEnd) {
      var st = [cm.state.modeGen], lineClasses = {};
      runMode(cm, line.text, cm.doc.mode, context, function(end, style) {
        return st.push(end, style);
      }, lineClasses, forceToEnd);
      var state2 = context.state;
      var loop = function(o2) {
        context.baseTokens = st;
        var overlay = cm.state.overlays[o2], i2 = 1, at = 0;
        context.state = true;
        runMode(cm, line.text, overlay.mode, context, function(end, style) {
          var start = i2;
          while (at < end) {
            var i_end = st[i2];
            if (i_end > end) {
              st.splice(i2, 1, end, st[i2 + 1], i_end);
            }
            i2 += 2;
            at = Math.min(end, i_end);
          }
          if (!style) {
            return;
          }
          if (overlay.opaque) {
            st.splice(start, i2 - start, end, "overlay " + style);
            i2 = start + 2;
          } else {
            for (; start < i2; start += 2) {
              var cur = st[start + 1];
              st[start + 1] = (cur ? cur + " " : "") + "overlay " + style;
            }
          }
        }, lineClasses);
        context.state = state2;
        context.baseTokens = null;
        context.baseTokenPos = 1;
      };
      for (var o = 0; o < cm.state.overlays.length; ++o)
        loop(o);
      return { styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null };
    }
    function getLineStyles(cm, line, updateFrontier) {
      if (!line.styles || line.styles[0] != cm.state.modeGen) {
        var context = getContextBefore(cm, lineNo(line));
        var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
        var result = highlightLine(cm, line, context);
        if (resetState) {
          context.state = resetState;
        }
        line.stateAfter = context.save(!resetState);
        line.styles = result.styles;
        if (result.classes) {
          line.styleClasses = result.classes;
        } else if (line.styleClasses) {
          line.styleClasses = null;
        }
        if (updateFrontier === cm.doc.highlightFrontier) {
          cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier);
        }
      }
      return line.styles;
    }
    function getContextBefore(cm, n, precise) {
      var doc = cm.doc, display = cm.display;
      if (!doc.mode.startState) {
        return new Context(doc, true, n);
      }
      var start = findStartLine(cm, n, precise);
      var saved = start > doc.first && getLine(doc, start - 1).stateAfter;
      var context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, startState(doc.mode), start);
      doc.iter(start, n, function(line) {
        processLine(cm, line.text, context);
        var pos = context.line;
        line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
        context.nextLine();
      });
      if (precise) {
        doc.modeFrontier = context.line;
      }
      return context;
    }
    function processLine(cm, text, context, startAt) {
      var mode = cm.doc.mode;
      var stream = new StringStream(text, cm.options.tabSize, context);
      stream.start = stream.pos = startAt || 0;
      if (text == "") {
        callBlankLine(mode, context.state);
      }
      while (!stream.eol()) {
        readToken2(mode, stream, context.state);
        stream.start = stream.pos;
      }
    }
    function callBlankLine(mode, state2) {
      if (mode.blankLine) {
        return mode.blankLine(state2);
      }
      if (!mode.innerMode) {
        return;
      }
      var inner = innerMode(mode, state2);
      if (inner.mode.blankLine) {
        return inner.mode.blankLine(inner.state);
      }
    }
    function readToken2(mode, stream, state2, inner) {
      for (var i2 = 0; i2 < 10; i2++) {
        if (inner) {
          inner[0] = innerMode(mode, state2).mode;
        }
        var style = mode.token(stream, state2);
        if (stream.pos > stream.start) {
          return style;
        }
      }
      throw new Error("Mode " + mode.name + " failed to advance stream.");
    }
    var Token2 = function(stream, type, state2) {
      this.start = stream.start;
      this.end = stream.pos;
      this.string = stream.current();
      this.type = type || null;
      this.state = state2;
    };
    function takeToken(cm, pos, precise, asArray) {
      var doc = cm.doc, mode = doc.mode, style;
      pos = clipPos(doc, pos);
      var line = getLine(doc, pos.line), context = getContextBefore(cm, pos.line, precise);
      var stream = new StringStream(line.text, cm.options.tabSize, context), tokens;
      if (asArray) {
        tokens = [];
      }
      while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
        stream.start = stream.pos;
        style = readToken2(mode, stream, context.state);
        if (asArray) {
          tokens.push(new Token2(stream, style, copyState(doc.mode, context.state)));
        }
      }
      return asArray ? tokens : new Token2(stream, style, context.state);
    }
    function extractLineClasses(type, output) {
      if (type) {
        for (; ; ) {
          var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
          if (!lineClass) {
            break;
          }
          type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
          var prop2 = lineClass[1] ? "bgClass" : "textClass";
          if (output[prop2] == null) {
            output[prop2] = lineClass[2];
          } else if (!new RegExp("(?:^|\\s)" + lineClass[2] + "(?:$|\\s)").test(output[prop2])) {
            output[prop2] += " " + lineClass[2];
          }
        }
      }
      return type;
    }
    function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
      var flattenSpans = mode.flattenSpans;
      if (flattenSpans == null) {
        flattenSpans = cm.options.flattenSpans;
      }
      var curStart = 0, curStyle = null;
      var stream = new StringStream(text, cm.options.tabSize, context), style;
      var inner = cm.options.addModeClass && [null];
      if (text == "") {
        extractLineClasses(callBlankLine(mode, context.state), lineClasses);
      }
      while (!stream.eol()) {
        if (stream.pos > cm.options.maxHighlightLength) {
          flattenSpans = false;
          if (forceToEnd) {
            processLine(cm, text, context, stream.pos);
          }
          stream.pos = text.length;
          style = null;
        } else {
          style = extractLineClasses(readToken2(mode, stream, context.state, inner), lineClasses);
        }
        if (inner) {
          var mName = inner[0].name;
          if (mName) {
            style = "m-" + (style ? mName + " " + style : mName);
          }
        }
        if (!flattenSpans || curStyle != style) {
          while (curStart < stream.start) {
            curStart = Math.min(stream.start, curStart + 5e3);
            f(curStart, curStyle);
          }
          curStyle = style;
        }
        stream.start = stream.pos;
      }
      while (curStart < stream.pos) {
        var pos = Math.min(stream.pos, curStart + 5e3);
        f(pos, curStyle);
        curStart = pos;
      }
    }
    function findStartLine(cm, n, precise) {
      var minindent, minline, doc = cm.doc;
      var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1e3 : 100);
      for (var search = n; search > lim; --search) {
        if (search <= doc.first) {
          return doc.first;
        }
        var line = getLine(doc, search - 1), after = line.stateAfter;
        if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier)) {
          return search;
        }
        var indented = countColumn(line.text, null, cm.options.tabSize);
        if (minline == null || minindent > indented) {
          minline = search - 1;
          minindent = indented;
        }
      }
      return minline;
    }
    function retreatFrontier(doc, n) {
      doc.modeFrontier = Math.min(doc.modeFrontier, n);
      if (doc.highlightFrontier < n - 10) {
        return;
      }
      var start = doc.first;
      for (var line = n - 1; line > start; line--) {
        var saved = getLine(doc, line).stateAfter;
        if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
          start = line + 1;
          break;
        }
      }
      doc.highlightFrontier = Math.min(doc.highlightFrontier, start);
    }
    var sawReadOnlySpans = false, sawCollapsedSpans = false;
    function seeReadOnlySpans() {
      sawReadOnlySpans = true;
    }
    function seeCollapsedSpans() {
      sawCollapsedSpans = true;
    }
    function MarkedSpan(marker, from, to) {
      this.marker = marker;
      this.from = from;
      this.to = to;
    }
    function getMarkedSpanFor(spans, marker) {
      if (spans) {
        for (var i2 = 0; i2 < spans.length; ++i2) {
          var span = spans[i2];
          if (span.marker == marker) {
            return span;
          }
        }
      }
    }
    function removeMarkedSpan(spans, span) {
      var r;
      for (var i2 = 0; i2 < spans.length; ++i2) {
        if (spans[i2] != span) {
          (r || (r = [])).push(spans[i2]);
        }
      }
      return r;
    }
    function addMarkedSpan(line, span, op) {
      var inThisOp = op && window.WeakSet && (op.markedSpans || (op.markedSpans = new WeakSet()));
      if (inThisOp && inThisOp.has(line.markedSpans)) {
        line.markedSpans.push(span);
      } else {
        line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
        if (inThisOp) {
          inThisOp.add(line.markedSpans);
        }
      }
      span.marker.attachLine(line);
    }
    function markedSpansBefore(old, startCh, isInsert) {
      var nw;
      if (old) {
        for (var i2 = 0; i2 < old.length; ++i2) {
          var span = old[i2], marker = span.marker;
          var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
          if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
            var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
            (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
          }
        }
      }
      return nw;
    }
    function markedSpansAfter(old, endCh, isInsert) {
      var nw;
      if (old) {
        for (var i2 = 0; i2 < old.length; ++i2) {
          var span = old[i2], marker = span.marker;
          var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
          if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
            var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
            (nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh, span.to == null ? null : span.to - endCh));
          }
        }
      }
      return nw;
    }
    function stretchSpansOverChange(doc, change) {
      if (change.full) {
        return null;
      }
      var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
      var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
      if (!oldFirst && !oldLast) {
        return null;
      }
      var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
      var first = markedSpansBefore(oldFirst, startCh, isInsert);
      var last = markedSpansAfter(oldLast, endCh, isInsert);
      var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
      if (first) {
        for (var i2 = 0; i2 < first.length; ++i2) {
          var span = first[i2];
          if (span.to == null) {
            var found = getMarkedSpanFor(last, span.marker);
            if (!found) {
              span.to = startCh;
            } else if (sameLine) {
              span.to = found.to == null ? null : found.to + offset;
            }
          }
        }
      }
      if (last) {
        for (var i$12 = 0; i$12 < last.length; ++i$12) {
          var span$1 = last[i$12];
          if (span$1.to != null) {
            span$1.to += offset;
          }
          if (span$1.from == null) {
            var found$1 = getMarkedSpanFor(first, span$1.marker);
            if (!found$1) {
              span$1.from = offset;
              if (sameLine) {
                (first || (first = [])).push(span$1);
              }
            }
          } else {
            span$1.from += offset;
            if (sameLine) {
              (first || (first = [])).push(span$1);
            }
          }
        }
      }
      if (first) {
        first = clearEmptySpans(first);
      }
      if (last && last != first) {
        last = clearEmptySpans(last);
      }
      var newMarkers = [first];
      if (!sameLine) {
        var gap = change.text.length - 2, gapMarkers;
        if (gap > 0 && first) {
          for (var i$22 = 0; i$22 < first.length; ++i$22) {
            if (first[i$22].to == null) {
              (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$22].marker, null, null));
            }
          }
        }
        for (var i$3 = 0; i$3 < gap; ++i$3) {
          newMarkers.push(gapMarkers);
        }
        newMarkers.push(last);
      }
      return newMarkers;
    }
    function clearEmptySpans(spans) {
      for (var i2 = 0; i2 < spans.length; ++i2) {
        var span = spans[i2];
        if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false) {
          spans.splice(i2--, 1);
        }
      }
      if (!spans.length) {
        return null;
      }
      return spans;
    }
    function removeReadOnlyRanges(doc, from, to) {
      var markers = null;
      doc.iter(from.line, to.line + 1, function(line) {
        if (line.markedSpans) {
          for (var i3 = 0; i3 < line.markedSpans.length; ++i3) {
            var mark = line.markedSpans[i3].marker;
            if (mark.readOnly && (!markers || indexOf(markers, mark) == -1)) {
              (markers || (markers = [])).push(mark);
            }
          }
        }
      });
      if (!markers) {
        return null;
      }
      var parts = [{ from, to }];
      for (var i2 = 0; i2 < markers.length; ++i2) {
        var mk = markers[i2], m = mk.find(0);
        for (var j = 0; j < parts.length; ++j) {
          var p = parts[j];
          if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) {
            continue;
          }
          var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
          if (dfrom < 0 || !mk.inclusiveLeft && !dfrom) {
            newParts.push({ from: p.from, to: m.from });
          }
          if (dto > 0 || !mk.inclusiveRight && !dto) {
            newParts.push({ from: m.to, to: p.to });
          }
          parts.splice.apply(parts, newParts);
          j += newParts.length - 3;
        }
      }
      return parts;
    }
    function detachMarkedSpans(line) {
      var spans = line.markedSpans;
      if (!spans) {
        return;
      }
      for (var i2 = 0; i2 < spans.length; ++i2) {
        spans[i2].marker.detachLine(line);
      }
      line.markedSpans = null;
    }
    function attachMarkedSpans(line, spans) {
      if (!spans) {
        return;
      }
      for (var i2 = 0; i2 < spans.length; ++i2) {
        spans[i2].marker.attachLine(line);
      }
      line.markedSpans = spans;
    }
    function extraLeft(marker) {
      return marker.inclusiveLeft ? -1 : 0;
    }
    function extraRight(marker) {
      return marker.inclusiveRight ? 1 : 0;
    }
    function compareCollapsedMarkers(a, b) {
      var lenDiff = a.lines.length - b.lines.length;
      if (lenDiff != 0) {
        return lenDiff;
      }
      var aPos = a.find(), bPos = b.find();
      var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
      if (fromCmp) {
        return -fromCmp;
      }
      var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
      if (toCmp) {
        return toCmp;
      }
      return b.id - a.id;
    }
    function collapsedSpanAtSide(line, start) {
      var sps = sawCollapsedSpans && line.markedSpans, found;
      if (sps) {
        for (var sp = void 0, i2 = 0; i2 < sps.length; ++i2) {
          sp = sps[i2];
          if (sp.marker.collapsed && (start ? sp.from : sp.to) == null && (!found || compareCollapsedMarkers(found, sp.marker) < 0)) {
            found = sp.marker;
          }
        }
      }
      return found;
    }
    function collapsedSpanAtStart(line) {
      return collapsedSpanAtSide(line, true);
    }
    function collapsedSpanAtEnd(line) {
      return collapsedSpanAtSide(line, false);
    }
    function collapsedSpanAround(line, ch) {
      var sps = sawCollapsedSpans && line.markedSpans, found;
      if (sps) {
        for (var i2 = 0; i2 < sps.length; ++i2) {
          var sp = sps[i2];
          if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) && (!found || compareCollapsedMarkers(found, sp.marker) < 0)) {
            found = sp.marker;
          }
        }
      }
      return found;
    }
    function conflictingCollapsedRange(doc, lineNo2, from, to, marker) {
      var line = getLine(doc, lineNo2);
      var sps = sawCollapsedSpans && line.markedSpans;
      if (sps) {
        for (var i2 = 0; i2 < sps.length; ++i2) {
          var sp = sps[i2];
          if (!sp.marker.collapsed) {
            continue;
          }
          var found = sp.marker.find(0);
          var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
          var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
          if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) {
            continue;
          }
          if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) || fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0)) {
            return true;
          }
        }
      }
    }
    function visualLine(line) {
      var merged;
      while (merged = collapsedSpanAtStart(line)) {
        line = merged.find(-1, true).line;
      }
      return line;
    }
    function visualLineEnd(line) {
      var merged;
      while (merged = collapsedSpanAtEnd(line)) {
        line = merged.find(1, true).line;
      }
      return line;
    }
    function visualLineContinued(line) {
      var merged, lines;
      while (merged = collapsedSpanAtEnd(line)) {
        line = merged.find(1, true).line;
        (lines || (lines = [])).push(line);
      }
      return lines;
    }
    function visualLineNo(doc, lineN) {
      var line = getLine(doc, lineN), vis = visualLine(line);
      if (line == vis) {
        return lineN;
      }
      return lineNo(vis);
    }
    function visualLineEndNo(doc, lineN) {
      if (lineN > doc.lastLine()) {
        return lineN;
      }
      var line = getLine(doc, lineN), merged;
      if (!lineIsHidden(doc, line)) {
        return lineN;
      }
      while (merged = collapsedSpanAtEnd(line)) {
        line = merged.find(1, true).line;
      }
      return lineNo(line) + 1;
    }
    function lineIsHidden(doc, line) {
      var sps = sawCollapsedSpans && line.markedSpans;
      if (sps) {
        for (var sp = void 0, i2 = 0; i2 < sps.length; ++i2) {
          sp = sps[i2];
          if (!sp.marker.collapsed) {
            continue;
          }
          if (sp.from == null) {
            return true;
          }
          if (sp.marker.widgetNode) {
            continue;
          }
          if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp)) {
            return true;
          }
        }
      }
    }
    function lineIsHiddenInner(doc, line, span) {
      if (span.to == null) {
        var end = span.marker.find(1, true);
        return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
      }
      if (span.marker.inclusiveRight && span.to == line.text.length) {
        return true;
      }
      for (var sp = void 0, i2 = 0; i2 < line.markedSpans.length; ++i2) {
        sp = line.markedSpans[i2];
        if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to && (sp.to == null || sp.to != span.from) && (sp.marker.inclusiveLeft || span.marker.inclusiveRight) && lineIsHiddenInner(doc, line, sp)) {
          return true;
        }
      }
    }
    function heightAtLine(lineObj) {
      lineObj = visualLine(lineObj);
      var h = 0, chunk = lineObj.parent;
      for (var i2 = 0; i2 < chunk.lines.length; ++i2) {
        var line = chunk.lines[i2];
        if (line == lineObj) {
          break;
        } else {
          h += line.height;
        }
      }
      for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
        for (var i$12 = 0; i$12 < p.children.length; ++i$12) {
          var cur = p.children[i$12];
          if (cur == chunk) {
            break;
          } else {
            h += cur.height;
          }
        }
      }
      return h;
    }
    function lineLength(line) {
      if (line.height == 0) {
        return 0;
      }
      var len = line.text.length, merged, cur = line;
      while (merged = collapsedSpanAtStart(cur)) {
        var found = merged.find(0, true);
        cur = found.from.line;
        len += found.from.ch - found.to.ch;
      }
      cur = line;
      while (merged = collapsedSpanAtEnd(cur)) {
        var found$1 = merged.find(0, true);
        len -= cur.text.length - found$1.from.ch;
        cur = found$1.to.line;
        len += cur.text.length - found$1.to.ch;
      }
      return len;
    }
    function findMaxLine(cm) {
      var d = cm.display, doc = cm.doc;
      d.maxLine = getLine(doc, doc.first);
      d.maxLineLength = lineLength(d.maxLine);
      d.maxLineChanged = true;
      doc.iter(function(line) {
        var len = lineLength(line);
        if (len > d.maxLineLength) {
          d.maxLineLength = len;
          d.maxLine = line;
        }
      });
    }
    var Line = function(text, markedSpans, estimateHeight2) {
      this.text = text;
      attachMarkedSpans(this, markedSpans);
      this.height = estimateHeight2 ? estimateHeight2(this) : 1;
    };
    Line.prototype.lineNo = function() {
      return lineNo(this);
    };
    eventMixin(Line);
    function updateLine(line, text, markedSpans, estimateHeight2) {
      line.text = text;
      if (line.stateAfter) {
        line.stateAfter = null;
      }
      if (line.styles) {
        line.styles = null;
      }
      if (line.order != null) {
        line.order = null;
      }
      detachMarkedSpans(line);
      attachMarkedSpans(line, markedSpans);
      var estHeight = estimateHeight2 ? estimateHeight2(line) : 1;
      if (estHeight != line.height) {
        updateLineHeight(line, estHeight);
      }
    }
    function cleanUpLine(line) {
      line.parent = null;
      detachMarkedSpans(line);
    }
    var styleToClassCache = {}, styleToClassCacheWithMode = {};
    function interpretTokenStyle(style, options) {
      if (!style || /^\s*$/.test(style)) {
        return null;
      }
      var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
      return cache[style] || (cache[style] = style.replace(/\S+/g, "cm-$&"));
    }
    function buildLineContent(cm, lineView) {
      var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
      var builder = {
        pre: eltP("pre", [content], "CodeMirror-line"),
        content,
        col: 0,
        pos: 0,
        cm,
        trailingSpace: false,
        splitSpaces: cm.getOption("lineWrapping")
      };
      lineView.measure = {};
      for (var i2 = 0; i2 <= (lineView.rest ? lineView.rest.length : 0); i2++) {
        var line = i2 ? lineView.rest[i2 - 1] : lineView.line, order = void 0;
        builder.pos = 0;
        builder.addToken = buildToken;
        if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction))) {
          builder.addToken = buildTokenBadBidi(builder.addToken, order);
        }
        builder.map = [];
        var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
        insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
        if (line.styleClasses) {
          if (line.styleClasses.bgClass) {
            builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
          }
          if (line.styleClasses.textClass) {
            builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
          }
        }
        if (builder.map.length == 0) {
          builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));
        }
        if (i2 == 0) {
          lineView.measure.map = builder.map;
          lineView.measure.cache = {};
        } else {
          (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
          (lineView.measure.caches || (lineView.measure.caches = [])).push({});
        }
      }
      if (webkit) {
        var last = builder.content.lastChild;
        if (/\bcm-tab\b/.test(last.className) || last.querySelector && last.querySelector(".cm-tab")) {
          builder.content.className = "cm-tab-wrap-hack";
        }
      }
      signal(cm, "renderLine", cm, lineView.line, builder.pre);
      if (builder.pre.className) {
        builder.textClass = joinClasses(builder.pre.className, builder.textClass || "");
      }
      return builder;
    }
    function defaultSpecialCharPlaceholder(ch) {
      var token = elt("span", "\u2022", "cm-invalidchar");
      token.title = "\\u" + ch.charCodeAt(0).toString(16);
      token.setAttribute("aria-label", token.title);
      return token;
    }
    function buildToken(builder, text, style, startStyle, endStyle, css2, attributes) {
      if (!text) {
        return;
      }
      var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text;
      var special = builder.cm.state.specialChars, mustWrap = false;
      var content;
      if (!special.test(text)) {
        builder.col += text.length;
        content = document.createTextNode(displayText);
        builder.map.push(builder.pos, builder.pos + text.length, content);
        if (ie && ie_version < 9) {
          mustWrap = true;
        }
        builder.pos += text.length;
      } else {
        content = document.createDocumentFragment();
        var pos = 0;
        while (true) {
          special.lastIndex = pos;
          var m = special.exec(text);
          var skipped = m ? m.index - pos : text.length - pos;
          if (skipped) {
            var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
            if (ie && ie_version < 9) {
              content.appendChild(elt("span", [txt]));
            } else {
              content.appendChild(txt);
            }
            builder.map.push(builder.pos, builder.pos + skipped, txt);
            builder.col += skipped;
            builder.pos += skipped;
          }
          if (!m) {
            break;
          }
          pos += skipped + 1;
          var txt$1 = void 0;
          if (m[0] == "	") {
            var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
            txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
            txt$1.setAttribute("role", "presentation");
            txt$1.setAttribute("cm-text", "	");
            builder.col += tabWidth;
          } else if (m[0] == "\r" || m[0] == "\n") {
            txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240D" : "\u2424", "cm-invalidchar"));
            txt$1.setAttribute("cm-text", m[0]);
            builder.col += 1;
          } else {
            txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
            txt$1.setAttribute("cm-text", m[0]);
            if (ie && ie_version < 9) {
              content.appendChild(elt("span", [txt$1]));
            } else {
              content.appendChild(txt$1);
            }
            builder.col += 1;
          }
          builder.map.push(builder.pos, builder.pos + 1, txt$1);
          builder.pos++;
        }
      }
      builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32;
      if (style || startStyle || endStyle || mustWrap || css2 || attributes) {
        var fullStyle = style || "";
        if (startStyle) {
          fullStyle += startStyle;
        }
        if (endStyle) {
          fullStyle += endStyle;
        }
        var token = elt("span", [content], fullStyle, css2);
        if (attributes) {
          for (var attr in attributes) {
            if (attributes.hasOwnProperty(attr) && attr != "style" && attr != "class") {
              token.setAttribute(attr, attributes[attr]);
            }
          }
        }
        return builder.content.appendChild(token);
      }
      builder.content.appendChild(content);
    }
    function splitSpaces(text, trailingBefore) {
      if (text.length > 1 && !/  /.test(text)) {
        return text;
      }
      var spaceBefore = trailingBefore, result = "";
      for (var i2 = 0; i2 < text.length; i2++) {
        var ch = text.charAt(i2);
        if (ch == " " && spaceBefore && (i2 == text.length - 1 || text.charCodeAt(i2 + 1) == 32)) {
          ch = "\xA0";
        }
        result += ch;
        spaceBefore = ch == " ";
      }
      return result;
    }
    function buildTokenBadBidi(inner, order) {
      return function(builder, text, style, startStyle, endStyle, css2, attributes) {
        style = style ? style + " cm-force-border" : "cm-force-border";
        var start = builder.pos, end = start + text.length;
        for (; ; ) {
          var part = void 0;
          for (var i2 = 0; i2 < order.length; i2++) {
            part = order[i2];
            if (part.to > start && part.from <= start) {
              break;
            }
          }
          if (part.to >= end) {
            return inner(builder, text, style, startStyle, endStyle, css2, attributes);
          }
          inner(builder, text.slice(0, part.to - start), style, startStyle, null, css2, attributes);
          startStyle = null;
          text = text.slice(part.to - start);
          start = part.to;
        }
      };
    }
    function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
      var widget = !ignoreWidget && marker.widgetNode;
      if (widget) {
        builder.map.push(builder.pos, builder.pos + size, widget);
      }
      if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
        if (!widget) {
          widget = builder.content.appendChild(document.createElement("span"));
        }
        widget.setAttribute("cm-marker", marker.id);
      }
      if (widget) {
        builder.cm.display.input.setUneditable(widget);
        builder.content.appendChild(widget);
      }
      builder.pos += size;
      builder.trailingSpace = false;
    }
    function insertLineContent(line, builder, styles) {
      var spans = line.markedSpans, allText = line.text, at = 0;
      if (!spans) {
        for (var i$12 = 1; i$12 < styles.length; i$12 += 2) {
          builder.addToken(builder, allText.slice(at, at = styles[i$12]), interpretTokenStyle(styles[i$12 + 1], builder.cm.options));
        }
        return;
      }
      var len = allText.length, pos = 0, i2 = 1, text = "", style, css2;
      var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, collapsed, attributes;
      for (; ; ) {
        if (nextChange == pos) {
          spanStyle = spanEndStyle = spanStartStyle = css2 = "";
          attributes = null;
          collapsed = null;
          nextChange = Infinity;
          var foundBookmarks = [], endStyles = void 0;
          for (var j = 0; j < spans.length; ++j) {
            var sp = spans[j], m = sp.marker;
            if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
              foundBookmarks.push(m);
            } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
              if (sp.to != null && sp.to != pos && nextChange > sp.to) {
                nextChange = sp.to;
                spanEndStyle = "";
              }
              if (m.className) {
                spanStyle += " " + m.className;
              }
              if (m.css) {
                css2 = (css2 ? css2 + ";" : "") + m.css;
              }
              if (m.startStyle && sp.from == pos) {
                spanStartStyle += " " + m.startStyle;
              }
              if (m.endStyle && sp.to == nextChange) {
                (endStyles || (endStyles = [])).push(m.endStyle, sp.to);
              }
              if (m.title) {
                (attributes || (attributes = {})).title = m.title;
              }
              if (m.attributes) {
                for (var attr in m.attributes) {
                  (attributes || (attributes = {}))[attr] = m.attributes[attr];
                }
              }
              if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0)) {
                collapsed = sp;
              }
            } else if (sp.from > pos && nextChange > sp.from) {
              nextChange = sp.from;
            }
          }
          if (endStyles) {
            for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2) {
              if (endStyles[j$1 + 1] == nextChange) {
                spanEndStyle += " " + endStyles[j$1];
              }
            }
          }
          if (!collapsed || collapsed.from == pos) {
            for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2) {
              buildCollapsedSpan(builder, 0, foundBookmarks[j$2]);
            }
          }
          if (collapsed && (collapsed.from || 0) == pos) {
            buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos, collapsed.marker, collapsed.from == null);
            if (collapsed.to == null) {
              return;
            }
            if (collapsed.to == pos) {
              collapsed = false;
            }
          }
        }
        if (pos >= len) {
          break;
        }
        var upto = Math.min(len, nextChange);
        while (true) {
          if (text) {
            var end = pos + text.length;
            if (!collapsed) {
              var tokenText = end > upto ? text.slice(0, upto - pos) : text;
              builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle, spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", css2, attributes);
            }
            if (end >= upto) {
              text = text.slice(upto - pos);
              pos = upto;
              break;
            }
            pos = end;
            spanStartStyle = "";
          }
          text = allText.slice(at, at = styles[i2++]);
          style = interpretTokenStyle(styles[i2++], builder.cm.options);
        }
      }
    }
    function LineView(doc, line, lineN) {
      this.line = line;
      this.rest = visualLineContinued(line);
      this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
      this.node = this.text = null;
      this.hidden = lineIsHidden(doc, line);
    }
    function buildViewArray(cm, from, to) {
      var array = [], nextPos;
      for (var pos = from; pos < to; pos = nextPos) {
        var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
        nextPos = pos + view.size;
        array.push(view);
      }
      return array;
    }
    var operationGroup = null;
    function pushOperation(op) {
      if (operationGroup) {
        operationGroup.ops.push(op);
      } else {
        op.ownsGroup = operationGroup = {
          ops: [op],
          delayedCallbacks: []
        };
      }
    }
    function fireCallbacksForOps(group) {
      var callbacks = group.delayedCallbacks, i2 = 0;
      do {
        for (; i2 < callbacks.length; i2++) {
          callbacks[i2].call(null);
        }
        for (var j = 0; j < group.ops.length; j++) {
          var op = group.ops[j];
          if (op.cursorActivityHandlers) {
            while (op.cursorActivityCalled < op.cursorActivityHandlers.length) {
              op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm);
            }
          }
        }
      } while (i2 < callbacks.length);
    }
    function finishOperation(op, endCb) {
      var group = op.ownsGroup;
      if (!group) {
        return;
      }
      try {
        fireCallbacksForOps(group);
      } finally {
        operationGroup = null;
        endCb(group);
      }
    }
    var orphanDelayedCallbacks = null;
    function signalLater(emitter, type) {
      var arr = getHandlers(emitter, type);
      if (!arr.length) {
        return;
      }
      var args = Array.prototype.slice.call(arguments, 2), list;
      if (operationGroup) {
        list = operationGroup.delayedCallbacks;
      } else if (orphanDelayedCallbacks) {
        list = orphanDelayedCallbacks;
      } else {
        list = orphanDelayedCallbacks = [];
        setTimeout(fireOrphanDelayed, 0);
      }
      var loop = function(i3) {
        list.push(function() {
          return arr[i3].apply(null, args);
        });
      };
      for (var i2 = 0; i2 < arr.length; ++i2)
        loop(i2);
    }
    function fireOrphanDelayed() {
      var delayed = orphanDelayedCallbacks;
      orphanDelayedCallbacks = null;
      for (var i2 = 0; i2 < delayed.length; ++i2) {
        delayed[i2]();
      }
    }
    function updateLineForChanges(cm, lineView, lineN, dims) {
      for (var j = 0; j < lineView.changes.length; j++) {
        var type = lineView.changes[j];
        if (type == "text") {
          updateLineText(cm, lineView);
        } else if (type == "gutter") {
          updateLineGutter(cm, lineView, lineN, dims);
        } else if (type == "class") {
          updateLineClasses(cm, lineView);
        } else if (type == "widget") {
          updateLineWidgets(cm, lineView, dims);
        }
      }
      lineView.changes = null;
    }
    function ensureLineWrapped(lineView) {
      if (lineView.node == lineView.text) {
        lineView.node = elt("div", null, null, "position: relative");
        if (lineView.text.parentNode) {
          lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
        }
        lineView.node.appendChild(lineView.text);
        if (ie && ie_version < 8) {
          lineView.node.style.zIndex = 2;
        }
      }
      return lineView.node;
    }
    function updateLineBackground(cm, lineView) {
      var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
      if (cls) {
        cls += " CodeMirror-linebackground";
      }
      if (lineView.background) {
        if (cls) {
          lineView.background.className = cls;
        } else {
          lineView.background.parentNode.removeChild(lineView.background);
          lineView.background = null;
        }
      } else if (cls) {
        var wrap = ensureLineWrapped(lineView);
        lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
        cm.display.input.setUneditable(lineView.background);
      }
    }
    function getLineContent(cm, lineView) {
      var ext = cm.display.externalMeasured;
      if (ext && ext.line == lineView.line) {
        cm.display.externalMeasured = null;
        lineView.measure = ext.measure;
        return ext.built;
      }
      return buildLineContent(cm, lineView);
    }
    function updateLineText(cm, lineView) {
      var cls = lineView.text.className;
      var built = getLineContent(cm, lineView);
      if (lineView.text == lineView.node) {
        lineView.node = built.pre;
      }
      lineView.text.parentNode.replaceChild(built.pre, lineView.text);
      lineView.text = built.pre;
      if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
        lineView.bgClass = built.bgClass;
        lineView.textClass = built.textClass;
        updateLineClasses(cm, lineView);
      } else if (cls) {
        lineView.text.className = cls;
      }
    }
    function updateLineClasses(cm, lineView) {
      updateLineBackground(cm, lineView);
      if (lineView.line.wrapClass) {
        ensureLineWrapped(lineView).className = lineView.line.wrapClass;
      } else if (lineView.node != lineView.text) {
        lineView.node.className = "";
      }
      var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
      lineView.text.className = textClass || "";
    }
    function updateLineGutter(cm, lineView, lineN, dims) {
      if (lineView.gutter) {
        lineView.node.removeChild(lineView.gutter);
        lineView.gutter = null;
      }
      if (lineView.gutterBackground) {
        lineView.node.removeChild(lineView.gutterBackground);
        lineView.gutterBackground = null;
      }
      if (lineView.line.gutterClass) {
        var wrap = ensureLineWrapped(lineView);
        lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass, "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + dims.gutterTotalWidth + "px");
        cm.display.input.setUneditable(lineView.gutterBackground);
        wrap.insertBefore(lineView.gutterBackground, lineView.text);
      }
      var markers = lineView.line.gutterMarkers;
      if (cm.options.lineNumbers || markers) {
        var wrap$1 = ensureLineWrapped(lineView);
        var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px");
        gutterWrap.setAttribute("aria-hidden", "true");
        cm.display.input.setUneditable(gutterWrap);
        wrap$1.insertBefore(gutterWrap, lineView.text);
        if (lineView.line.gutterClass) {
          gutterWrap.className += " " + lineView.line.gutterClass;
        }
        if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"])) {
          lineView.lineNumber = gutterWrap.appendChild(elt("div", lineNumberFor(cm.options, lineN), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + cm.display.lineNumInnerWidth + "px"));
        }
        if (markers) {
          for (var k = 0; k < cm.display.gutterSpecs.length; ++k) {
            var id = cm.display.gutterSpecs[k].className, found = markers.hasOwnProperty(id) && markers[id];
            if (found) {
              gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " + dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
            }
          }
        }
      }
    }
    function updateLineWidgets(cm, lineView, dims) {
      if (lineView.alignable) {
        lineView.alignable = null;
      }
      var isWidget = classTest("CodeMirror-linewidget");
      for (var node = lineView.node.firstChild, next2 = void 0; node; node = next2) {
        next2 = node.nextSibling;
        if (isWidget.test(node.className)) {
          lineView.node.removeChild(node);
        }
      }
      insertLineWidgets(cm, lineView, dims);
    }
    function buildLineElement(cm, lineView, lineN, dims) {
      var built = getLineContent(cm, lineView);
      lineView.text = lineView.node = built.pre;
      if (built.bgClass) {
        lineView.bgClass = built.bgClass;
      }
      if (built.textClass) {
        lineView.textClass = built.textClass;
      }
      updateLineClasses(cm, lineView);
      updateLineGutter(cm, lineView, lineN, dims);
      insertLineWidgets(cm, lineView, dims);
      return lineView.node;
    }
    function insertLineWidgets(cm, lineView, dims) {
      insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
      if (lineView.rest) {
        for (var i2 = 0; i2 < lineView.rest.length; i2++) {
          insertLineWidgetsFor(cm, lineView.rest[i2], lineView, dims, false);
        }
      }
    }
    function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
      if (!line.widgets) {
        return;
      }
      var wrap = ensureLineWrapped(lineView);
      for (var i2 = 0, ws = line.widgets; i2 < ws.length; ++i2) {
        var widget = ws[i2], node = elt("div", [widget.node], "CodeMirror-linewidget" + (widget.className ? " " + widget.className : ""));
        if (!widget.handleMouseEvents) {
          node.setAttribute("cm-ignore-events", "true");
        }
        positionLineWidget(widget, node, lineView, dims);
        cm.display.input.setUneditable(node);
        if (allowAbove && widget.above) {
          wrap.insertBefore(node, lineView.gutter || lineView.text);
        } else {
          wrap.appendChild(node);
        }
        signalLater(widget, "redraw");
      }
    }
    function positionLineWidget(widget, node, lineView, dims) {
      if (widget.noHScroll) {
        (lineView.alignable || (lineView.alignable = [])).push(node);
        var width = dims.wrapperWidth;
        node.style.left = dims.fixedPos + "px";
        if (!widget.coverGutter) {
          width -= dims.gutterTotalWidth;
          node.style.paddingLeft = dims.gutterTotalWidth + "px";
        }
        node.style.width = width + "px";
      }
      if (widget.coverGutter) {
        node.style.zIndex = 5;
        node.style.position = "relative";
        if (!widget.noHScroll) {
          node.style.marginLeft = -dims.gutterTotalWidth + "px";
        }
      }
    }
    function widgetHeight(widget) {
      if (widget.height != null) {
        return widget.height;
      }
      var cm = widget.doc.cm;
      if (!cm) {
        return 0;
      }
      if (!contains(document.body, widget.node)) {
        var parentStyle = "position: relative;";
        if (widget.coverGutter) {
          parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;";
        }
        if (widget.noHScroll) {
          parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;";
        }
        removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
      }
      return widget.height = widget.node.parentNode.offsetHeight;
    }
    function eventInWidget(display, e) {
      for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
        if (!n || n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true" || n.parentNode == display.sizer && n != display.mover) {
          return true;
        }
      }
    }
    function paddingTop(display) {
      return display.lineSpace.offsetTop;
    }
    function paddingVert(display) {
      return display.mover.offsetHeight - display.lineSpace.offsetHeight;
    }
    function paddingH(display) {
      if (display.cachedPaddingH) {
        return display.cachedPaddingH;
      }
      var e = removeChildrenAndAdd(display.measure, elt("pre", "x", "CodeMirror-line-like"));
      var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
      var data = { left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight) };
      if (!isNaN(data.left) && !isNaN(data.right)) {
        display.cachedPaddingH = data;
      }
      return data;
    }
    function scrollGap(cm) {
      return scrollerGap - cm.display.nativeBarWidth;
    }
    function displayWidth(cm) {
      return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
    }
    function displayHeight(cm) {
      return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
    }
    function ensureLineHeights(cm, lineView, rect) {
      var wrapping = cm.options.lineWrapping;
      var curWidth = wrapping && displayWidth(cm);
      if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
        var heights = lineView.measure.heights = [];
        if (wrapping) {
          lineView.measure.width = curWidth;
          var rects = lineView.text.firstChild.getClientRects();
          for (var i2 = 0; i2 < rects.length - 1; i2++) {
            var cur = rects[i2], next2 = rects[i2 + 1];
            if (Math.abs(cur.bottom - next2.bottom) > 2) {
              heights.push((cur.bottom + next2.top) / 2 - rect.top);
            }
          }
        }
        heights.push(rect.bottom - rect.top);
      }
    }
    function mapFromLineView(lineView, line, lineN) {
      if (lineView.line == line) {
        return { map: lineView.measure.map, cache: lineView.measure.cache };
      }
      for (var i2 = 0; i2 < lineView.rest.length; i2++) {
        if (lineView.rest[i2] == line) {
          return { map: lineView.measure.maps[i2], cache: lineView.measure.caches[i2] };
        }
      }
      for (var i$12 = 0; i$12 < lineView.rest.length; i$12++) {
        if (lineNo(lineView.rest[i$12]) > lineN) {
          return { map: lineView.measure.maps[i$12], cache: lineView.measure.caches[i$12], before: true };
        }
      }
    }
    function updateExternalMeasurement(cm, line) {
      line = visualLine(line);
      var lineN = lineNo(line);
      var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
      view.lineN = lineN;
      var built = view.built = buildLineContent(cm, view);
      view.text = built.pre;
      removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
      return view;
    }
    function measureChar(cm, line, ch, bias) {
      return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
    }
    function findViewForLine(cm, lineN) {
      if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo) {
        return cm.display.view[findViewIndex(cm, lineN)];
      }
      var ext = cm.display.externalMeasured;
      if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size) {
        return ext;
      }
    }
    function prepareMeasureForLine(cm, line) {
      var lineN = lineNo(line);
      var view = findViewForLine(cm, lineN);
      if (view && !view.text) {
        view = null;
      } else if (view && view.changes) {
        updateLineForChanges(cm, view, lineN, getDimensions(cm));
        cm.curOp.forceUpdate = true;
      }
      if (!view) {
        view = updateExternalMeasurement(cm, line);
      }
      var info = mapFromLineView(view, line, lineN);
      return {
        line,
        view,
        rect: null,
        map: info.map,
        cache: info.cache,
        before: info.before,
        hasHeights: false
      };
    }
    function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
      if (prepared.before) {
        ch = -1;
      }
      var key = ch + (bias || ""), found;
      if (prepared.cache.hasOwnProperty(key)) {
        found = prepared.cache[key];
      } else {
        if (!prepared.rect) {
          prepared.rect = prepared.view.text.getBoundingClientRect();
        }
        if (!prepared.hasHeights) {
          ensureLineHeights(cm, prepared.view, prepared.rect);
          prepared.hasHeights = true;
        }
        found = measureCharInner(cm, prepared, ch, bias);
        if (!found.bogus) {
          prepared.cache[key] = found;
        }
      }
      return {
        left: found.left,
        right: found.right,
        top: varHeight ? found.rtop : found.top,
        bottom: varHeight ? found.rbottom : found.bottom
      };
    }
    var nullRect = { left: 0, right: 0, top: 0, bottom: 0 };
    function nodeAndOffsetInLineMap(map2, ch, bias) {
      var node, start, end, collapse, mStart, mEnd;
      for (var i2 = 0; i2 < map2.length; i2 += 3) {
        mStart = map2[i2];
        mEnd = map2[i2 + 1];
        if (ch < mStart) {
          start = 0;
          end = 1;
          collapse = "left";
        } else if (ch < mEnd) {
          start = ch - mStart;
          end = start + 1;
        } else if (i2 == map2.length - 3 || ch == mEnd && map2[i2 + 3] > ch) {
          end = mEnd - mStart;
          start = end - 1;
          if (ch >= mEnd) {
            collapse = "right";
          }
        }
        if (start != null) {
          node = map2[i2 + 2];
          if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right")) {
            collapse = bias;
          }
          if (bias == "left" && start == 0) {
            while (i2 && map2[i2 - 2] == map2[i2 - 3] && map2[i2 - 1].insertLeft) {
              node = map2[(i2 -= 3) + 2];
              collapse = "left";
            }
          }
          if (bias == "right" && start == mEnd - mStart) {
            while (i2 < map2.length - 3 && map2[i2 + 3] == map2[i2 + 4] && !map2[i2 + 5].insertLeft) {
              node = map2[(i2 += 3) + 2];
              collapse = "right";
            }
          }
          break;
        }
      }
      return { node, start, end, collapse, coverStart: mStart, coverEnd: mEnd };
    }
    function getUsefulRect(rects, bias) {
      var rect = nullRect;
      if (bias == "left") {
        for (var i2 = 0; i2 < rects.length; i2++) {
          if ((rect = rects[i2]).left != rect.right) {
            break;
          }
        }
      } else {
        for (var i$12 = rects.length - 1; i$12 >= 0; i$12--) {
          if ((rect = rects[i$12]).left != rect.right) {
            break;
          }
        }
      }
      return rect;
    }
    function measureCharInner(cm, prepared, ch, bias) {
      var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
      var node = place.node, start = place.start, end = place.end, collapse = place.collapse;
      var rect;
      if (node.nodeType == 3) {
        for (var i$12 = 0; i$12 < 4; i$12++) {
          while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) {
            --start;
          }
          while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) {
            ++end;
          }
          if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart) {
            rect = node.parentNode.getBoundingClientRect();
          } else {
            rect = getUsefulRect(range(node, start, end).getClientRects(), bias);
          }
          if (rect.left || rect.right || start == 0) {
            break;
          }
          end = start;
          start = start - 1;
          collapse = "right";
        }
        if (ie && ie_version < 11) {
          rect = maybeUpdateRectForZooming(cm.display.measure, rect);
        }
      } else {
        if (start > 0) {
          collapse = bias = "right";
        }
        var rects;
        if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1) {
          rect = rects[bias == "right" ? rects.length - 1 : 0];
        } else {
          rect = node.getBoundingClientRect();
        }
      }
      if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
        var rSpan = node.parentNode.getClientRects()[0];
        if (rSpan) {
          rect = { left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom };
        } else {
          rect = nullRect;
        }
      }
      var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
      var mid = (rtop + rbot) / 2;
      var heights = prepared.view.measure.heights;
      var i2 = 0;
      for (; i2 < heights.length - 1; i2++) {
        if (mid < heights[i2]) {
          break;
        }
      }
      var top = i2 ? heights[i2 - 1] : 0, bot = heights[i2];
      var result = {
        left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
        right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
        top,
        bottom: bot
      };
      if (!rect.left && !rect.right) {
        result.bogus = true;
      }
      if (!cm.options.singleCursorHeightPerLine) {
        result.rtop = rtop;
        result.rbottom = rbot;
      }
      return result;
    }
    function maybeUpdateRectForZooming(measure, rect) {
      if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure)) {
        return rect;
      }
      var scaleX = screen.logicalXDPI / screen.deviceXDPI;
      var scaleY = screen.logicalYDPI / screen.deviceYDPI;
      return {
        left: rect.left * scaleX,
        right: rect.right * scaleX,
        top: rect.top * scaleY,
        bottom: rect.bottom * scaleY
      };
    }
    function clearLineMeasurementCacheFor(lineView) {
      if (lineView.measure) {
        lineView.measure.cache = {};
        lineView.measure.heights = null;
        if (lineView.rest) {
          for (var i2 = 0; i2 < lineView.rest.length; i2++) {
            lineView.measure.caches[i2] = {};
          }
        }
      }
    }
    function clearLineMeasurementCache(cm) {
      cm.display.externalMeasure = null;
      removeChildren(cm.display.lineMeasure);
      for (var i2 = 0; i2 < cm.display.view.length; i2++) {
        clearLineMeasurementCacheFor(cm.display.view[i2]);
      }
    }
    function clearCaches(cm) {
      clearLineMeasurementCache(cm);
      cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
      if (!cm.options.lineWrapping) {
        cm.display.maxLineChanged = true;
      }
      cm.display.lineNumChars = null;
    }
    function pageScrollX() {
      if (chrome && android) {
        return -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft));
      }
      return window.pageXOffset || (document.documentElement || document.body).scrollLeft;
    }
    function pageScrollY() {
      if (chrome && android) {
        return -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop));
      }
      return window.pageYOffset || (document.documentElement || document.body).scrollTop;
    }
    function widgetTopHeight(lineObj) {
      var height = 0;
      if (lineObj.widgets) {
        for (var i2 = 0; i2 < lineObj.widgets.length; ++i2) {
          if (lineObj.widgets[i2].above) {
            height += widgetHeight(lineObj.widgets[i2]);
          }
        }
      }
      return height;
    }
    function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
      if (!includeWidgets) {
        var height = widgetTopHeight(lineObj);
        rect.top += height;
        rect.bottom += height;
      }
      if (context == "line") {
        return rect;
      }
      if (!context) {
        context = "local";
      }
      var yOff = heightAtLine(lineObj);
      if (context == "local") {
        yOff += paddingTop(cm.display);
      } else {
        yOff -= cm.display.viewOffset;
      }
      if (context == "page" || context == "window") {
        var lOff = cm.display.lineSpace.getBoundingClientRect();
        yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
        var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
        rect.left += xOff;
        rect.right += xOff;
      }
      rect.top += yOff;
      rect.bottom += yOff;
      return rect;
    }
    function fromCoordSystem(cm, coords, context) {
      if (context == "div") {
        return coords;
      }
      var left = coords.left, top = coords.top;
      if (context == "page") {
        left -= pageScrollX();
        top -= pageScrollY();
      } else if (context == "local" || !context) {
        var localBox = cm.display.sizer.getBoundingClientRect();
        left += localBox.left;
        top += localBox.top;
      }
      var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
      return { left: left - lineSpaceBox.left, top: top - lineSpaceBox.top };
    }
    function charCoords(cm, pos, context, lineObj, bias) {
      if (!lineObj) {
        lineObj = getLine(cm.doc, pos.line);
      }
      return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
    }
    function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
      lineObj = lineObj || getLine(cm.doc, pos.line);
      if (!preparedMeasure) {
        preparedMeasure = prepareMeasureForLine(cm, lineObj);
      }
      function get(ch2, right) {
        var m = measureCharPrepared(cm, preparedMeasure, ch2, right ? "right" : "left", varHeight);
        if (right) {
          m.left = m.right;
        } else {
          m.right = m.left;
        }
        return intoCoordSystem(cm, lineObj, m, context);
      }
      var order = getOrder(lineObj, cm.doc.direction), ch = pos.ch, sticky = pos.sticky;
      if (ch >= lineObj.text.length) {
        ch = lineObj.text.length;
        sticky = "before";
      } else if (ch <= 0) {
        ch = 0;
        sticky = "after";
      }
      if (!order) {
        return get(sticky == "before" ? ch - 1 : ch, sticky == "before");
      }
      function getBidi(ch2, partPos2, invert) {
        var part = order[partPos2], right = part.level == 1;
        return get(invert ? ch2 - 1 : ch2, right != invert);
      }
      var partPos = getBidiPartAt(order, ch, sticky);
      var other = bidiOther;
      var val = getBidi(ch, partPos, sticky == "before");
      if (other != null) {
        val.other = getBidi(ch, other, sticky != "before");
      }
      return val;
    }
    function estimateCoords(cm, pos) {
      var left = 0;
      pos = clipPos(cm.doc, pos);
      if (!cm.options.lineWrapping) {
        left = charWidth(cm.display) * pos.ch;
      }
      var lineObj = getLine(cm.doc, pos.line);
      var top = heightAtLine(lineObj) + paddingTop(cm.display);
      return { left, right: left, top, bottom: top + lineObj.height };
    }
    function PosWithInfo(line, ch, sticky, outside, xRel) {
      var pos = Pos(line, ch, sticky);
      pos.xRel = xRel;
      if (outside) {
        pos.outside = outside;
      }
      return pos;
    }
    function coordsChar(cm, x, y) {
      var doc = cm.doc;
      y += cm.display.viewOffset;
      if (y < 0) {
        return PosWithInfo(doc.first, 0, null, -1, -1);
      }
      var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
      if (lineN > last) {
        return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, null, 1, 1);
      }
      if (x < 0) {
        x = 0;
      }
      var lineObj = getLine(doc, lineN);
      for (; ; ) {
        var found = coordsCharInner(cm, lineObj, lineN, x, y);
        var collapsed = collapsedSpanAround(lineObj, found.ch + (found.xRel > 0 || found.outside > 0 ? 1 : 0));
        if (!collapsed) {
          return found;
        }
        var rangeEnd = collapsed.find(1);
        if (rangeEnd.line == lineN) {
          return rangeEnd;
        }
        lineObj = getLine(doc, lineN = rangeEnd.line);
      }
    }
    function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
      y -= widgetTopHeight(lineObj);
      var end = lineObj.text.length;
      var begin = findFirst(function(ch) {
        return measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y;
      }, end, 0);
      end = findFirst(function(ch) {
        return measureCharPrepared(cm, preparedMeasure, ch).top > y;
      }, begin, end);
      return { begin, end };
    }
    function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
      if (!preparedMeasure) {
        preparedMeasure = prepareMeasureForLine(cm, lineObj);
      }
      var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
      return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop);
    }
    function boxIsAfter(box, x, y, left) {
      return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x;
    }
    function coordsCharInner(cm, lineObj, lineNo2, x, y) {
      y -= heightAtLine(lineObj);
      var preparedMeasure = prepareMeasureForLine(cm, lineObj);
      var widgetHeight2 = widgetTopHeight(lineObj);
      var begin = 0, end = lineObj.text.length, ltr = true;
      var order = getOrder(lineObj, cm.doc.direction);
      if (order) {
        var part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)(cm, lineObj, lineNo2, preparedMeasure, order, x, y);
        ltr = part.level != 1;
        begin = ltr ? part.from : part.to - 1;
        end = ltr ? part.to : part.from - 1;
      }
      var chAround = null, boxAround = null;
      var ch = findFirst(function(ch2) {
        var box = measureCharPrepared(cm, preparedMeasure, ch2);
        box.top += widgetHeight2;
        box.bottom += widgetHeight2;
        if (!boxIsAfter(box, x, y, false)) {
          return false;
        }
        if (box.top <= y && box.left <= x) {
          chAround = ch2;
          boxAround = box;
        }
        return true;
      }, begin, end);
      var baseX, sticky, outside = false;
      if (boxAround) {
        var atLeft = x - boxAround.left < boxAround.right - x, atStart = atLeft == ltr;
        ch = chAround + (atStart ? 0 : 1);
        sticky = atStart ? "after" : "before";
        baseX = atLeft ? boxAround.left : boxAround.right;
      } else {
        if (!ltr && (ch == end || ch == begin)) {
          ch++;
        }
        sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" : measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight2 <= y == ltr ? "after" : "before";
        var coords = cursorCoords(cm, Pos(lineNo2, ch, sticky), "line", lineObj, preparedMeasure);
        baseX = coords.left;
        outside = y < coords.top ? -1 : y >= coords.bottom ? 1 : 0;
      }
      ch = skipExtendingChars(lineObj.text, ch, 1);
      return PosWithInfo(lineNo2, ch, sticky, outside, x - baseX);
    }
    function coordsBidiPart(cm, lineObj, lineNo2, preparedMeasure, order, x, y) {
      var index = findFirst(function(i2) {
        var part2 = order[i2], ltr2 = part2.level != 1;
        return boxIsAfter(cursorCoords(cm, Pos(lineNo2, ltr2 ? part2.to : part2.from, ltr2 ? "before" : "after"), "line", lineObj, preparedMeasure), x, y, true);
      }, 0, order.length - 1);
      var part = order[index];
      if (index > 0) {
        var ltr = part.level != 1;
        var start = cursorCoords(cm, Pos(lineNo2, ltr ? part.from : part.to, ltr ? "after" : "before"), "line", lineObj, preparedMeasure);
        if (boxIsAfter(start, x, y, true) && start.top > y) {
          part = order[index - 1];
        }
      }
      return part;
    }
    function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
      var ref2 = wrappedLineExtent(cm, lineObj, preparedMeasure, y);
      var begin = ref2.begin;
      var end = ref2.end;
      if (/\s/.test(lineObj.text.charAt(end - 1))) {
        end--;
      }
      var part = null, closestDist = null;
      for (var i2 = 0; i2 < order.length; i2++) {
        var p = order[i2];
        if (p.from >= end || p.to <= begin) {
          continue;
        }
        var ltr = p.level != 1;
        var endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right;
        var dist2 = endX < x ? x - endX + 1e9 : endX - x;
        if (!part || closestDist > dist2) {
          part = p;
          closestDist = dist2;
        }
      }
      if (!part) {
        part = order[order.length - 1];
      }
      if (part.from < begin) {
        part = { from: begin, to: part.to, level: part.level };
      }
      if (part.to > end) {
        part = { from: part.from, to: end, level: part.level };
      }
      return part;
    }
    var measureText;
    function textHeight(display) {
      if (display.cachedTextHeight != null) {
        return display.cachedTextHeight;
      }
      if (measureText == null) {
        measureText = elt("pre", null, "CodeMirror-line-like");
        for (var i2 = 0; i2 < 49; ++i2) {
          measureText.appendChild(document.createTextNode("x"));
          measureText.appendChild(elt("br"));
        }
        measureText.appendChild(document.createTextNode("x"));
      }
      removeChildrenAndAdd(display.measure, measureText);
      var height = measureText.offsetHeight / 50;
      if (height > 3) {
        display.cachedTextHeight = height;
      }
      removeChildren(display.measure);
      return height || 1;
    }
    function charWidth(display) {
      if (display.cachedCharWidth != null) {
        return display.cachedCharWidth;
      }
      var anchor = elt("span", "xxxxxxxxxx");
      var pre = elt("pre", [anchor], "CodeMirror-line-like");
      removeChildrenAndAdd(display.measure, pre);
      var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
      if (width > 2) {
        display.cachedCharWidth = width;
      }
      return width || 10;
    }
    function getDimensions(cm) {
      var d = cm.display, left = {}, width = {};
      var gutterLeft = d.gutters.clientLeft;
      for (var n = d.gutters.firstChild, i2 = 0; n; n = n.nextSibling, ++i2) {
        var id = cm.display.gutterSpecs[i2].className;
        left[id] = n.offsetLeft + n.clientLeft + gutterLeft;
        width[id] = n.clientWidth;
      }
      return {
        fixedPos: compensateForHScroll(d),
        gutterTotalWidth: d.gutters.offsetWidth,
        gutterLeft: left,
        gutterWidth: width,
        wrapperWidth: d.wrapper.clientWidth
      };
    }
    function compensateForHScroll(display) {
      return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
    }
    function estimateHeight(cm) {
      var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
      var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
      return function(line) {
        if (lineIsHidden(cm.doc, line)) {
          return 0;
        }
        var widgetsHeight = 0;
        if (line.widgets) {
          for (var i2 = 0; i2 < line.widgets.length; i2++) {
            if (line.widgets[i2].height) {
              widgetsHeight += line.widgets[i2].height;
            }
          }
        }
        if (wrapping) {
          return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
        } else {
          return widgetsHeight + th;
        }
      };
    }
    function estimateLineHeights(cm) {
      var doc = cm.doc, est = estimateHeight(cm);
      doc.iter(function(line) {
        var estHeight = est(line);
        if (estHeight != line.height) {
          updateLineHeight(line, estHeight);
        }
      });
    }
    function posFromMouse(cm, e, liberal, forRect) {
      var display = cm.display;
      if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") {
        return null;
      }
      var x, y, space = display.lineSpace.getBoundingClientRect();
      try {
        x = e.clientX - space.left;
        y = e.clientY - space.top;
      } catch (e$1) {
        return null;
      }
      var coords = coordsChar(cm, x, y), line;
      if (forRect && coords.xRel > 0 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
        var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
        coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
      }
      return coords;
    }
    function findViewIndex(cm, n) {
      if (n >= cm.display.viewTo) {
        return null;
      }
      n -= cm.display.viewFrom;
      if (n < 0) {
        return null;
      }
      var view = cm.display.view;
      for (var i2 = 0; i2 < view.length; i2++) {
        n -= view[i2].size;
        if (n < 0) {
          return i2;
        }
      }
    }
    function regChange(cm, from, to, lendiff) {
      if (from == null) {
        from = cm.doc.first;
      }
      if (to == null) {
        to = cm.doc.first + cm.doc.size;
      }
      if (!lendiff) {
        lendiff = 0;
      }
      var display = cm.display;
      if (lendiff && to < display.viewTo && (display.updateLineNumbers == null || display.updateLineNumbers > from)) {
        display.updateLineNumbers = from;
      }
      cm.curOp.viewChanged = true;
      if (from >= display.viewTo) {
        if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo) {
          resetView(cm);
        }
      } else if (to <= display.viewFrom) {
        if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
          resetView(cm);
        } else {
          display.viewFrom += lendiff;
          display.viewTo += lendiff;
        }
      } else if (from <= display.viewFrom && to >= display.viewTo) {
        resetView(cm);
      } else if (from <= display.viewFrom) {
        var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
        if (cut) {
          display.view = display.view.slice(cut.index);
          display.viewFrom = cut.lineN;
          display.viewTo += lendiff;
        } else {
          resetView(cm);
        }
      } else if (to >= display.viewTo) {
        var cut$1 = viewCuttingPoint(cm, from, from, -1);
        if (cut$1) {
          display.view = display.view.slice(0, cut$1.index);
          display.viewTo = cut$1.lineN;
        } else {
          resetView(cm);
        }
      } else {
        var cutTop = viewCuttingPoint(cm, from, from, -1);
        var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
        if (cutTop && cutBot) {
          display.view = display.view.slice(0, cutTop.index).concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN)).concat(display.view.slice(cutBot.index));
          display.viewTo += lendiff;
        } else {
          resetView(cm);
        }
      }
      var ext = display.externalMeasured;
      if (ext) {
        if (to < ext.lineN) {
          ext.lineN += lendiff;
        } else if (from < ext.lineN + ext.size) {
          display.externalMeasured = null;
        }
      }
    }
    function regLineChange(cm, line, type) {
      cm.curOp.viewChanged = true;
      var display = cm.display, ext = cm.display.externalMeasured;
      if (ext && line >= ext.lineN && line < ext.lineN + ext.size) {
        display.externalMeasured = null;
      }
      if (line < display.viewFrom || line >= display.viewTo) {
        return;
      }
      var lineView = display.view[findViewIndex(cm, line)];
      if (lineView.node == null) {
        return;
      }
      var arr = lineView.changes || (lineView.changes = []);
      if (indexOf(arr, type) == -1) {
        arr.push(type);
      }
    }
    function resetView(cm) {
      cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
      cm.display.view = [];
      cm.display.viewOffset = 0;
    }
    function viewCuttingPoint(cm, oldN, newN, dir) {
      var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
      if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size) {
        return { index, lineN: newN };
      }
      var n = cm.display.viewFrom;
      for (var i2 = 0; i2 < index; i2++) {
        n += view[i2].size;
      }
      if (n != oldN) {
        if (dir > 0) {
          if (index == view.length - 1) {
            return null;
          }
          diff = n + view[index].size - oldN;
          index++;
        } else {
          diff = n - oldN;
        }
        oldN += diff;
        newN += diff;
      }
      while (visualLineNo(cm.doc, newN) != newN) {
        if (index == (dir < 0 ? 0 : view.length - 1)) {
          return null;
        }
        newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
        index += dir;
      }
      return { index, lineN: newN };
    }
    function adjustView(cm, from, to) {
      var display = cm.display, view = display.view;
      if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
        display.view = buildViewArray(cm, from, to);
        display.viewFrom = from;
      } else {
        if (display.viewFrom > from) {
          display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view);
        } else if (display.viewFrom < from) {
          display.view = display.view.slice(findViewIndex(cm, from));
        }
        display.viewFrom = from;
        if (display.viewTo < to) {
          display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
        } else if (display.viewTo > to) {
          display.view = display.view.slice(0, findViewIndex(cm, to));
        }
      }
      display.viewTo = to;
    }
    function countDirtyView(cm) {
      var view = cm.display.view, dirty = 0;
      for (var i2 = 0; i2 < view.length; i2++) {
        var lineView = view[i2];
        if (!lineView.hidden && (!lineView.node || lineView.changes)) {
          ++dirty;
        }
      }
      return dirty;
    }
    function updateSelection(cm) {
      cm.display.input.showSelection(cm.display.input.prepareSelection());
    }
    function prepareSelection(cm, primary) {
      if (primary === void 0)
        primary = true;
      var doc = cm.doc, result = {};
      var curFragment = result.cursors = document.createDocumentFragment();
      var selFragment = result.selection = document.createDocumentFragment();
      for (var i2 = 0; i2 < doc.sel.ranges.length; i2++) {
        if (!primary && i2 == doc.sel.primIndex) {
          continue;
        }
        var range2 = doc.sel.ranges[i2];
        if (range2.from().line >= cm.display.viewTo || range2.to().line < cm.display.viewFrom) {
          continue;
        }
        var collapsed = range2.empty();
        if (collapsed || cm.options.showCursorWhenSelecting) {
          drawSelectionCursor(cm, range2.head, curFragment);
        }
        if (!collapsed) {
          drawSelectionRange(cm, range2, selFragment);
        }
      }
      return result;
    }
    function drawSelectionCursor(cm, head, output) {
      var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);
      var cursor = output.appendChild(elt("div", "\xA0", "CodeMirror-cursor"));
      cursor.style.left = pos.left + "px";
      cursor.style.top = pos.top + "px";
      cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";
      if (/\bcm-fat-cursor\b/.test(cm.getWrapperElement().className)) {
        var charPos = charCoords(cm, head, "div", null, null);
        if (charPos.right - charPos.left > 0) {
          cursor.style.width = charPos.right - charPos.left + "px";
        }
      }
      if (pos.other) {
        var otherCursor = output.appendChild(elt("div", "\xA0", "CodeMirror-cursor CodeMirror-secondarycursor"));
        otherCursor.style.display = "";
        otherCursor.style.left = pos.other.left + "px";
        otherCursor.style.top = pos.other.top + "px";
        otherCursor.style.height = (pos.other.bottom - pos.other.top) * 0.85 + "px";
      }
    }
    function cmpCoords(a, b) {
      return a.top - b.top || a.left - b.left;
    }
    function drawSelectionRange(cm, range2, output) {
      var display = cm.display, doc = cm.doc;
      var fragment = document.createDocumentFragment();
      var padding = paddingH(cm.display), leftSide = padding.left;
      var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
      var docLTR = doc.direction == "ltr";
      function add(left, top, width, bottom) {
        if (top < 0) {
          top = 0;
        }
        top = Math.round(top);
        bottom = Math.round(bottom);
        fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px"));
      }
      function drawForLine(line, fromArg, toArg) {
        var lineObj = getLine(doc, line);
        var lineLen = lineObj.text.length;
        var start, end;
        function coords(ch, bias) {
          return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
        }
        function wrapX(pos, dir, side) {
          var extent = wrappedLineExtentChar(cm, lineObj, null, pos);
          var prop2 = dir == "ltr" == (side == "after") ? "left" : "right";
          var ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1);
          return coords(ch, prop2)[prop2];
        }
        var order = getOrder(lineObj, doc.direction);
        iterateBidiSections(order, fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir, i2) {
          var ltr = dir == "ltr";
          var fromPos = coords(from, ltr ? "left" : "right");
          var toPos = coords(to - 1, ltr ? "right" : "left");
          var openStart = fromArg == null && from == 0, openEnd = toArg == null && to == lineLen;
          var first = i2 == 0, last = !order || i2 == order.length - 1;
          if (toPos.top - fromPos.top <= 3) {
            var openLeft = (docLTR ? openStart : openEnd) && first;
            var openRight = (docLTR ? openEnd : openStart) && last;
            var left = openLeft ? leftSide : (ltr ? fromPos : toPos).left;
            var right = openRight ? rightSide : (ltr ? toPos : fromPos).right;
            add(left, fromPos.top, right - left, fromPos.bottom);
          } else {
            var topLeft, topRight, botLeft, botRight;
            if (ltr) {
              topLeft = docLTR && openStart && first ? leftSide : fromPos.left;
              topRight = docLTR ? rightSide : wrapX(from, dir, "before");
              botLeft = docLTR ? leftSide : wrapX(to, dir, "after");
              botRight = docLTR && openEnd && last ? rightSide : toPos.right;
            } else {
              topLeft = !docLTR ? leftSide : wrapX(from, dir, "before");
              topRight = !docLTR && openStart && first ? rightSide : fromPos.right;
              botLeft = !docLTR && openEnd && last ? leftSide : toPos.left;
              botRight = !docLTR ? rightSide : wrapX(to, dir, "after");
            }
            add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom);
            if (fromPos.bottom < toPos.top) {
              add(leftSide, fromPos.bottom, null, toPos.top);
            }
            add(botLeft, toPos.top, botRight - botLeft, toPos.bottom);
          }
          if (!start || cmpCoords(fromPos, start) < 0) {
            start = fromPos;
          }
          if (cmpCoords(toPos, start) < 0) {
            start = toPos;
          }
          if (!end || cmpCoords(fromPos, end) < 0) {
            end = fromPos;
          }
          if (cmpCoords(toPos, end) < 0) {
            end = toPos;
          }
        });
        return { start, end };
      }
      var sFrom = range2.from(), sTo = range2.to();
      if (sFrom.line == sTo.line) {
        drawForLine(sFrom.line, sFrom.ch, sTo.ch);
      } else {
        var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
        var singleVLine = visualLine(fromLine) == visualLine(toLine);
        var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
        var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
        if (singleVLine) {
          if (leftEnd.top < rightStart.top - 2) {
            add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
            add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
          } else {
            add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
          }
        }
        if (leftEnd.bottom < rightStart.top) {
          add(leftSide, leftEnd.bottom, null, rightStart.top);
        }
      }
      output.appendChild(fragment);
    }
    function restartBlink(cm) {
      if (!cm.state.focused) {
        return;
      }
      var display = cm.display;
      clearInterval(display.blinker);
      var on2 = true;
      display.cursorDiv.style.visibility = "";
      if (cm.options.cursorBlinkRate > 0) {
        display.blinker = setInterval(function() {
          if (!cm.hasFocus()) {
            onBlur(cm);
          }
          display.cursorDiv.style.visibility = (on2 = !on2) ? "" : "hidden";
        }, cm.options.cursorBlinkRate);
      } else if (cm.options.cursorBlinkRate < 0) {
        display.cursorDiv.style.visibility = "hidden";
      }
    }
    function ensureFocus(cm) {
      if (!cm.hasFocus()) {
        cm.display.input.focus();
        if (!cm.state.focused) {
          onFocus(cm);
        }
      }
    }
    function delayBlurEvent(cm) {
      cm.state.delayingBlurEvent = true;
      setTimeout(function() {
        if (cm.state.delayingBlurEvent) {
          cm.state.delayingBlurEvent = false;
          if (cm.state.focused) {
            onBlur(cm);
          }
        }
      }, 100);
    }
    function onFocus(cm, e) {
      if (cm.state.delayingBlurEvent && !cm.state.draggingText) {
        cm.state.delayingBlurEvent = false;
      }
      if (cm.options.readOnly == "nocursor") {
        return;
      }
      if (!cm.state.focused) {
        signal(cm, "focus", cm, e);
        cm.state.focused = true;
        addClass(cm.display.wrapper, "CodeMirror-focused");
        if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
          cm.display.input.reset();
          if (webkit) {
            setTimeout(function() {
              return cm.display.input.reset(true);
            }, 20);
          }
        }
        cm.display.input.receivedFocus();
      }
      restartBlink(cm);
    }
    function onBlur(cm, e) {
      if (cm.state.delayingBlurEvent) {
        return;
      }
      if (cm.state.focused) {
        signal(cm, "blur", cm, e);
        cm.state.focused = false;
        rmClass(cm.display.wrapper, "CodeMirror-focused");
      }
      clearInterval(cm.display.blinker);
      setTimeout(function() {
        if (!cm.state.focused) {
          cm.display.shift = false;
        }
      }, 150);
    }
    function updateHeightsInViewport(cm) {
      var display = cm.display;
      var prevBottom = display.lineDiv.offsetTop;
      var viewTop = Math.max(0, display.scroller.getBoundingClientRect().top);
      var oldHeight = display.lineDiv.getBoundingClientRect().top;
      var mustScroll = 0;
      for (var i2 = 0; i2 < display.view.length; i2++) {
        var cur = display.view[i2], wrapping = cm.options.lineWrapping;
        var height = void 0, width = 0;
        if (cur.hidden) {
          continue;
        }
        oldHeight += cur.line.height;
        if (ie && ie_version < 8) {
          var bot = cur.node.offsetTop + cur.node.offsetHeight;
          height = bot - prevBottom;
          prevBottom = bot;
        } else {
          var box = cur.node.getBoundingClientRect();
          height = box.bottom - box.top;
          if (!wrapping && cur.text.firstChild) {
            width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1;
          }
        }
        var diff = cur.line.height - height;
        if (diff > 5e-3 || diff < -5e-3) {
          if (oldHeight < viewTop) {
            mustScroll -= diff;
          }
          updateLineHeight(cur.line, height);
          updateWidgetHeight(cur.line);
          if (cur.rest) {
            for (var j = 0; j < cur.rest.length; j++) {
              updateWidgetHeight(cur.rest[j]);
            }
          }
        }
        if (width > cm.display.sizerWidth) {
          var chWidth = Math.ceil(width / charWidth(cm.display));
          if (chWidth > cm.display.maxLineLength) {
            cm.display.maxLineLength = chWidth;
            cm.display.maxLine = cur.line;
            cm.display.maxLineChanged = true;
          }
        }
      }
      if (Math.abs(mustScroll) > 2) {
        display.scroller.scrollTop += mustScroll;
      }
    }
    function updateWidgetHeight(line) {
      if (line.widgets) {
        for (var i2 = 0; i2 < line.widgets.length; ++i2) {
          var w = line.widgets[i2], parent = w.node.parentNode;
          if (parent) {
            w.height = parent.offsetHeight;
          }
        }
      }
    }
    function visibleLines(display, doc, viewport) {
      var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
      top = Math.floor(top - paddingTop(display));
      var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;
      var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
      if (viewport && viewport.ensure) {
        var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
        if (ensureFrom < from) {
          from = ensureFrom;
          to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
        } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
          from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
          to = ensureTo;
        }
      }
      return { from, to: Math.max(to, from + 1) };
    }
    function maybeScrollWindow(cm, rect) {
      if (signalDOMEvent(cm, "scrollCursorIntoView")) {
        return;
      }
      var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
      if (rect.top + box.top < 0) {
        doScroll = true;
      } else if (rect.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) {
        doScroll = false;
      }
      if (doScroll != null && !phantom) {
        var scrollNode = elt("div", "\u200B", null, "position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + rect.left + "px; width: " + Math.max(2, rect.right - rect.left) + "px;");
        cm.display.lineSpace.appendChild(scrollNode);
        scrollNode.scrollIntoView(doScroll);
        cm.display.lineSpace.removeChild(scrollNode);
      }
    }
    function scrollPosIntoView(cm, pos, end, margin) {
      if (margin == null) {
        margin = 0;
      }
      var rect;
      if (!cm.options.lineWrapping && pos == end) {
        end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
        pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
      }
      for (var limit = 0; limit < 5; limit++) {
        var changed = false;
        var coords = cursorCoords(cm, pos);
        var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
        rect = {
          left: Math.min(coords.left, endCoords.left),
          top: Math.min(coords.top, endCoords.top) - margin,
          right: Math.max(coords.left, endCoords.left),
          bottom: Math.max(coords.bottom, endCoords.bottom) + margin
        };
        var scrollPos = calculateScrollPos(cm, rect);
        var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
        if (scrollPos.scrollTop != null) {
          updateScrollTop(cm, scrollPos.scrollTop);
          if (Math.abs(cm.doc.scrollTop - startTop) > 1) {
            changed = true;
          }
        }
        if (scrollPos.scrollLeft != null) {
          setScrollLeft(cm, scrollPos.scrollLeft);
          if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) {
            changed = true;
          }
        }
        if (!changed) {
          break;
        }
      }
      return rect;
    }
    function scrollIntoView(cm, rect) {
      var scrollPos = calculateScrollPos(cm, rect);
      if (scrollPos.scrollTop != null) {
        updateScrollTop(cm, scrollPos.scrollTop);
      }
      if (scrollPos.scrollLeft != null) {
        setScrollLeft(cm, scrollPos.scrollLeft);
      }
    }
    function calculateScrollPos(cm, rect) {
      var display = cm.display, snapMargin = textHeight(cm.display);
      if (rect.top < 0) {
        rect.top = 0;
      }
      var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
      var screen2 = displayHeight(cm), result = {};
      if (rect.bottom - rect.top > screen2) {
        rect.bottom = rect.top + screen2;
      }
      var docBottom = cm.doc.height + paddingVert(display);
      var atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin;
      if (rect.top < screentop) {
        result.scrollTop = atTop ? 0 : rect.top;
      } else if (rect.bottom > screentop + screen2) {
        var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen2);
        if (newTop != screentop) {
          result.scrollTop = newTop;
        }
      }
      var gutterSpace = cm.options.fixedGutter ? 0 : display.gutters.offsetWidth;
      var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft - gutterSpace;
      var screenw = displayWidth(cm) - display.gutters.offsetWidth;
      var tooWide = rect.right - rect.left > screenw;
      if (tooWide) {
        rect.right = rect.left + screenw;
      }
      if (rect.left < 10) {
        result.scrollLeft = 0;
      } else if (rect.left < screenleft) {
        result.scrollLeft = Math.max(0, rect.left + gutterSpace - (tooWide ? 0 : 10));
      } else if (rect.right > screenw + screenleft - 3) {
        result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw;
      }
      return result;
    }
    function addToScrollTop(cm, top) {
      if (top == null) {
        return;
      }
      resolveScrollToPos(cm);
      cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
    }
    function ensureCursorVisible(cm) {
      resolveScrollToPos(cm);
      var cur = cm.getCursor();
      cm.curOp.scrollToPos = { from: cur, to: cur, margin: cm.options.cursorScrollMargin };
    }
    function scrollToCoords(cm, x, y) {
      if (x != null || y != null) {
        resolveScrollToPos(cm);
      }
      if (x != null) {
        cm.curOp.scrollLeft = x;
      }
      if (y != null) {
        cm.curOp.scrollTop = y;
      }
    }
    function scrollToRange(cm, range2) {
      resolveScrollToPos(cm);
      cm.curOp.scrollToPos = range2;
    }
    function resolveScrollToPos(cm) {
      var range2 = cm.curOp.scrollToPos;
      if (range2) {
        cm.curOp.scrollToPos = null;
        var from = estimateCoords(cm, range2.from), to = estimateCoords(cm, range2.to);
        scrollToCoordsRange(cm, from, to, range2.margin);
      }
    }
    function scrollToCoordsRange(cm, from, to, margin) {
      var sPos = calculateScrollPos(cm, {
        left: Math.min(from.left, to.left),
        top: Math.min(from.top, to.top) - margin,
        right: Math.max(from.right, to.right),
        bottom: Math.max(from.bottom, to.bottom) + margin
      });
      scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
    }
    function updateScrollTop(cm, val) {
      if (Math.abs(cm.doc.scrollTop - val) < 2) {
        return;
      }
      if (!gecko) {
        updateDisplaySimple(cm, { top: val });
      }
      setScrollTop(cm, val, true);
      if (gecko) {
        updateDisplaySimple(cm);
      }
      startWorker(cm, 100);
    }
    function setScrollTop(cm, val, forceScroll) {
      val = Math.max(0, Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val));
      if (cm.display.scroller.scrollTop == val && !forceScroll) {
        return;
      }
      cm.doc.scrollTop = val;
      cm.display.scrollbars.setScrollTop(val);
      if (cm.display.scroller.scrollTop != val) {
        cm.display.scroller.scrollTop = val;
      }
    }
    function setScrollLeft(cm, val, isScroller, forceScroll) {
      val = Math.max(0, Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth));
      if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) {
        return;
      }
      cm.doc.scrollLeft = val;
      alignHorizontally(cm);
      if (cm.display.scroller.scrollLeft != val) {
        cm.display.scroller.scrollLeft = val;
      }
      cm.display.scrollbars.setScrollLeft(val);
    }
    function measureForScrollbars(cm) {
      var d = cm.display, gutterW = d.gutters.offsetWidth;
      var docH = Math.round(cm.doc.height + paddingVert(cm.display));
      return {
        clientHeight: d.scroller.clientHeight,
        viewHeight: d.wrapper.clientHeight,
        scrollWidth: d.scroller.scrollWidth,
        clientWidth: d.scroller.clientWidth,
        viewWidth: d.wrapper.clientWidth,
        barLeft: cm.options.fixedGutter ? gutterW : 0,
        docHeight: docH,
        scrollHeight: docH + scrollGap(cm) + d.barHeight,
        nativeBarWidth: d.nativeBarWidth,
        gutterWidth: gutterW
      };
    }
    var NativeScrollbars = function(place, scroll, cm) {
      this.cm = cm;
      var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
      var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
      vert.tabIndex = horiz.tabIndex = -1;
      place(vert);
      place(horiz);
      on(vert, "scroll", function() {
        if (vert.clientHeight) {
          scroll(vert.scrollTop, "vertical");
        }
      });
      on(horiz, "scroll", function() {
        if (horiz.clientWidth) {
          scroll(horiz.scrollLeft, "horizontal");
        }
      });
      this.checkedZeroWidth = false;
      if (ie && ie_version < 8) {
        this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
      }
    };
    NativeScrollbars.prototype.update = function(measure) {
      var needsH = measure.scrollWidth > measure.clientWidth + 1;
      var needsV = measure.scrollHeight > measure.clientHeight + 1;
      var sWidth = measure.nativeBarWidth;
      if (needsV) {
        this.vert.style.display = "block";
        this.vert.style.bottom = needsH ? sWidth + "px" : "0";
        var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
        this.vert.firstChild.style.height = Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
      } else {
        this.vert.style.display = "";
        this.vert.firstChild.style.height = "0";
      }
      if (needsH) {
        this.horiz.style.display = "block";
        this.horiz.style.right = needsV ? sWidth + "px" : "0";
        this.horiz.style.left = measure.barLeft + "px";
        var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
        this.horiz.firstChild.style.width = Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
      } else {
        this.horiz.style.display = "";
        this.horiz.firstChild.style.width = "0";
      }
      if (!this.checkedZeroWidth && measure.clientHeight > 0) {
        if (sWidth == 0) {
          this.zeroWidthHack();
        }
        this.checkedZeroWidth = true;
      }
      return { right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0 };
    };
    NativeScrollbars.prototype.setScrollLeft = function(pos) {
      if (this.horiz.scrollLeft != pos) {
        this.horiz.scrollLeft = pos;
      }
      if (this.disableHoriz) {
        this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
      }
    };
    NativeScrollbars.prototype.setScrollTop = function(pos) {
      if (this.vert.scrollTop != pos) {
        this.vert.scrollTop = pos;
      }
      if (this.disableVert) {
        this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
      }
    };
    NativeScrollbars.prototype.zeroWidthHack = function() {
      var w = mac && !mac_geMountainLion ? "12px" : "18px";
      this.horiz.style.height = this.vert.style.width = w;
      this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
      this.disableHoriz = new Delayed();
      this.disableVert = new Delayed();
    };
    NativeScrollbars.prototype.enableZeroWidthBar = function(bar, delay, type) {
      bar.style.pointerEvents = "auto";
      function maybeDisable() {
        var box = bar.getBoundingClientRect();
        var elt2 = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2) : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);
        if (elt2 != bar) {
          bar.style.pointerEvents = "none";
        } else {
          delay.set(1e3, maybeDisable);
        }
      }
      delay.set(1e3, maybeDisable);
    };
    NativeScrollbars.prototype.clear = function() {
      var parent = this.horiz.parentNode;
      parent.removeChild(this.horiz);
      parent.removeChild(this.vert);
    };
    var NullScrollbars = function() {
    };
    NullScrollbars.prototype.update = function() {
      return { bottom: 0, right: 0 };
    };
    NullScrollbars.prototype.setScrollLeft = function() {
    };
    NullScrollbars.prototype.setScrollTop = function() {
    };
    NullScrollbars.prototype.clear = function() {
    };
    function updateScrollbars(cm, measure) {
      if (!measure) {
        measure = measureForScrollbars(cm);
      }
      var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
      updateScrollbarsInner(cm, measure);
      for (var i2 = 0; i2 < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i2++) {
        if (startWidth != cm.display.barWidth && cm.options.lineWrapping) {
          updateHeightsInViewport(cm);
        }
        updateScrollbarsInner(cm, measureForScrollbars(cm));
        startWidth = cm.display.barWidth;
        startHeight = cm.display.barHeight;
      }
    }
    function updateScrollbarsInner(cm, measure) {
      var d = cm.display;
      var sizes = d.scrollbars.update(measure);
      d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
      d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
      d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";
      if (sizes.right && sizes.bottom) {
        d.scrollbarFiller.style.display = "block";
        d.scrollbarFiller.style.height = sizes.bottom + "px";
        d.scrollbarFiller.style.width = sizes.right + "px";
      } else {
        d.scrollbarFiller.style.display = "";
      }
      if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
        d.gutterFiller.style.display = "block";
        d.gutterFiller.style.height = sizes.bottom + "px";
        d.gutterFiller.style.width = measure.gutterWidth + "px";
      } else {
        d.gutterFiller.style.display = "";
      }
    }
    var scrollbarModel = { "native": NativeScrollbars, "null": NullScrollbars };
    function initScrollbars(cm) {
      if (cm.display.scrollbars) {
        cm.display.scrollbars.clear();
        if (cm.display.scrollbars.addClass) {
          rmClass(cm.display.wrapper, cm.display.scrollbars.addClass);
        }
      }
      cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function(node) {
        cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
        on(node, "mousedown", function() {
          if (cm.state.focused) {
            setTimeout(function() {
              return cm.display.input.focus();
            }, 0);
          }
        });
        node.setAttribute("cm-not-content", "true");
      }, function(pos, axis) {
        if (axis == "horizontal") {
          setScrollLeft(cm, pos);
        } else {
          updateScrollTop(cm, pos);
        }
      }, cm);
      if (cm.display.scrollbars.addClass) {
        addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
      }
    }
    var nextOpId = 0;
    function startOperation(cm) {
      cm.curOp = {
        cm,
        viewChanged: false,
        startHeight: cm.doc.height,
        forceUpdate: false,
        updateInput: 0,
        typing: false,
        changeObjs: null,
        cursorActivityHandlers: null,
        cursorActivityCalled: 0,
        selectionChanged: false,
        updateMaxLine: false,
        scrollLeft: null,
        scrollTop: null,
        scrollToPos: null,
        focus: false,
        id: ++nextOpId,
        markArrays: null
      };
      pushOperation(cm.curOp);
    }
    function endOperation(cm) {
      var op = cm.curOp;
      if (op) {
        finishOperation(op, function(group) {
          for (var i2 = 0; i2 < group.ops.length; i2++) {
            group.ops[i2].cm.curOp = null;
          }
          endOperations(group);
        });
      }
    }
    function endOperations(group) {
      var ops = group.ops;
      for (var i2 = 0; i2 < ops.length; i2++) {
        endOperation_R1(ops[i2]);
      }
      for (var i$12 = 0; i$12 < ops.length; i$12++) {
        endOperation_W1(ops[i$12]);
      }
      for (var i$22 = 0; i$22 < ops.length; i$22++) {
        endOperation_R2(ops[i$22]);
      }
      for (var i$3 = 0; i$3 < ops.length; i$3++) {
        endOperation_W2(ops[i$3]);
      }
      for (var i$4 = 0; i$4 < ops.length; i$4++) {
        endOperation_finish(ops[i$4]);
      }
    }
    function endOperation_R1(op) {
      var cm = op.cm, display = cm.display;
      maybeClipScrollbars(cm);
      if (op.updateMaxLine) {
        findMaxLine(cm);
      }
      op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null || op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom || op.scrollToPos.to.line >= display.viewTo) || display.maxLineChanged && cm.options.lineWrapping;
      op.update = op.mustUpdate && new DisplayUpdate(cm, op.mustUpdate && { top: op.scrollTop, ensure: op.scrollToPos }, op.forceUpdate);
    }
    function endOperation_W1(op) {
      op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
    }
    function endOperation_R2(op) {
      var cm = op.cm, display = cm.display;
      if (op.updatedDisplay) {
        updateHeightsInViewport(cm);
      }
      op.barMeasure = measureForScrollbars(cm);
      if (display.maxLineChanged && !cm.options.lineWrapping) {
        op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
        cm.display.sizerWidth = op.adjustWidthTo;
        op.barMeasure.scrollWidth = Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
        op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
      }
      if (op.updatedDisplay || op.selectionChanged) {
        op.preparedSelection = display.input.prepareSelection();
      }
    }
    function endOperation_W2(op) {
      var cm = op.cm;
      if (op.adjustWidthTo != null) {
        cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
        if (op.maxScrollLeft < cm.doc.scrollLeft) {
          setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true);
        }
        cm.display.maxLineChanged = false;
      }
      var takeFocus = op.focus && op.focus == activeElt();
      if (op.preparedSelection) {
        cm.display.input.showSelection(op.preparedSelection, takeFocus);
      }
      if (op.updatedDisplay || op.startHeight != cm.doc.height) {
        updateScrollbars(cm, op.barMeasure);
      }
      if (op.updatedDisplay) {
        setDocumentHeight(cm, op.barMeasure);
      }
      if (op.selectionChanged) {
        restartBlink(cm);
      }
      if (cm.state.focused && op.updateInput) {
        cm.display.input.reset(op.typing);
      }
      if (takeFocus) {
        ensureFocus(op.cm);
      }
    }
    function endOperation_finish(op) {
      var cm = op.cm, display = cm.display, doc = cm.doc;
      if (op.updatedDisplay) {
        postUpdateDisplay(cm, op.update);
      }
      if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos)) {
        display.wheelStartX = display.wheelStartY = null;
      }
      if (op.scrollTop != null) {
        setScrollTop(cm, op.scrollTop, op.forceScroll);
      }
      if (op.scrollLeft != null) {
        setScrollLeft(cm, op.scrollLeft, true, true);
      }
      if (op.scrollToPos) {
        var rect = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from), clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
        maybeScrollWindow(cm, rect);
      }
      var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
      if (hidden) {
        for (var i2 = 0; i2 < hidden.length; ++i2) {
          if (!hidden[i2].lines.length) {
            signal(hidden[i2], "hide");
          }
        }
      }
      if (unhidden) {
        for (var i$12 = 0; i$12 < unhidden.length; ++i$12) {
          if (unhidden[i$12].lines.length) {
            signal(unhidden[i$12], "unhide");
          }
        }
      }
      if (display.wrapper.offsetHeight) {
        doc.scrollTop = cm.display.scroller.scrollTop;
      }
      if (op.changeObjs) {
        signal(cm, "changes", cm, op.changeObjs);
      }
      if (op.update) {
        op.update.finish();
      }
    }
    function runInOp(cm, f) {
      if (cm.curOp) {
        return f();
      }
      startOperation(cm);
      try {
        return f();
      } finally {
        endOperation(cm);
      }
    }
    function operation(cm, f) {
      return function() {
        if (cm.curOp) {
          return f.apply(cm, arguments);
        }
        startOperation(cm);
        try {
          return f.apply(cm, arguments);
        } finally {
          endOperation(cm);
        }
      };
    }
    function methodOp(f) {
      return function() {
        if (this.curOp) {
          return f.apply(this, arguments);
        }
        startOperation(this);
        try {
          return f.apply(this, arguments);
        } finally {
          endOperation(this);
        }
      };
    }
    function docMethodOp(f) {
      return function() {
        var cm = this.cm;
        if (!cm || cm.curOp) {
          return f.apply(this, arguments);
        }
        startOperation(cm);
        try {
          return f.apply(this, arguments);
        } finally {
          endOperation(cm);
        }
      };
    }
    function startWorker(cm, time) {
      if (cm.doc.highlightFrontier < cm.display.viewTo) {
        cm.state.highlight.set(time, bind(highlightWorker, cm));
      }
    }
    function highlightWorker(cm) {
      var doc = cm.doc;
      if (doc.highlightFrontier >= cm.display.viewTo) {
        return;
      }
      var end = +new Date() + cm.options.workTime;
      var context = getContextBefore(cm, doc.highlightFrontier);
      var changedLines = [];
      doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function(line) {
        if (context.line >= cm.display.viewFrom) {
          var oldStyles = line.styles;
          var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc.mode, context.state) : null;
          var highlighted = highlightLine(cm, line, context, true);
          if (resetState) {
            context.state = resetState;
          }
          line.styles = highlighted.styles;
          var oldCls = line.styleClasses, newCls = highlighted.classes;
          if (newCls) {
            line.styleClasses = newCls;
          } else if (oldCls) {
            line.styleClasses = null;
          }
          var ischange = !oldStyles || oldStyles.length != line.styles.length || oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
          for (var i2 = 0; !ischange && i2 < oldStyles.length; ++i2) {
            ischange = oldStyles[i2] != line.styles[i2];
          }
          if (ischange) {
            changedLines.push(context.line);
          }
          line.stateAfter = context.save();
          context.nextLine();
        } else {
          if (line.text.length <= cm.options.maxHighlightLength) {
            processLine(cm, line.text, context);
          }
          line.stateAfter = context.line % 5 == 0 ? context.save() : null;
          context.nextLine();
        }
        if (+new Date() > end) {
          startWorker(cm, cm.options.workDelay);
          return true;
        }
      });
      doc.highlightFrontier = context.line;
      doc.modeFrontier = Math.max(doc.modeFrontier, context.line);
      if (changedLines.length) {
        runInOp(cm, function() {
          for (var i2 = 0; i2 < changedLines.length; i2++) {
            regLineChange(cm, changedLines[i2], "text");
          }
        });
      }
    }
    var DisplayUpdate = function(cm, viewport, force) {
      var display = cm.display;
      this.viewport = viewport;
      this.visible = visibleLines(display, cm.doc, viewport);
      this.editorIsHidden = !display.wrapper.offsetWidth;
      this.wrapperHeight = display.wrapper.clientHeight;
      this.wrapperWidth = display.wrapper.clientWidth;
      this.oldDisplayWidth = displayWidth(cm);
      this.force = force;
      this.dims = getDimensions(cm);
      this.events = [];
    };
    DisplayUpdate.prototype.signal = function(emitter, type) {
      if (hasHandler(emitter, type)) {
        this.events.push(arguments);
      }
    };
    DisplayUpdate.prototype.finish = function() {
      for (var i2 = 0; i2 < this.events.length; i2++) {
        signal.apply(null, this.events[i2]);
      }
    };
    function maybeClipScrollbars(cm) {
      var display = cm.display;
      if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
        display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
        display.heightForcer.style.height = scrollGap(cm) + "px";
        display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
        display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
        display.scrollbarsClipped = true;
      }
    }
    function selectionSnapshot(cm) {
      if (cm.hasFocus()) {
        return null;
      }
      var active = activeElt();
      if (!active || !contains(cm.display.lineDiv, active)) {
        return null;
      }
      var result = { activeElt: active };
      if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
          result.anchorNode = sel.anchorNode;
          result.anchorOffset = sel.anchorOffset;
          result.focusNode = sel.focusNode;
          result.focusOffset = sel.focusOffset;
        }
      }
      return result;
    }
    function restoreSelection(snapshot) {
      if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt()) {
        return;
      }
      snapshot.activeElt.focus();
      if (!/^(INPUT|TEXTAREA)$/.test(snapshot.activeElt.nodeName) && snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
        var sel = window.getSelection(), range2 = document.createRange();
        range2.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
        range2.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range2);
        sel.extend(snapshot.focusNode, snapshot.focusOffset);
      }
    }
    function updateDisplayIfNeeded(cm, update) {
      var display = cm.display, doc = cm.doc;
      if (update.editorIsHidden) {
        resetView(cm);
        return false;
      }
      if (!update.force && update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo && (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) && display.renderedView == display.view && countDirtyView(cm) == 0) {
        return false;
      }
      if (maybeUpdateLineNumberWidth(cm)) {
        resetView(cm);
        update.dims = getDimensions(cm);
      }
      var end = doc.first + doc.size;
      var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
      var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
      if (display.viewFrom < from && from - display.viewFrom < 20) {
        from = Math.max(doc.first, display.viewFrom);
      }
      if (display.viewTo > to && display.viewTo - to < 20) {
        to = Math.min(end, display.viewTo);
      }
      if (sawCollapsedSpans) {
        from = visualLineNo(cm.doc, from);
        to = visualLineEndNo(cm.doc, to);
      }
      var different = from != display.viewFrom || to != display.viewTo || display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
      adjustView(cm, from, to);
      display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
      cm.display.mover.style.top = display.viewOffset + "px";
      var toUpdate = countDirtyView(cm);
      if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view && (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo)) {
        return false;
      }
      var selSnapshot = selectionSnapshot(cm);
      if (toUpdate > 4) {
        display.lineDiv.style.display = "none";
      }
      patchDisplay(cm, display.updateLineNumbers, update.dims);
      if (toUpdate > 4) {
        display.lineDiv.style.display = "";
      }
      display.renderedView = display.view;
      restoreSelection(selSnapshot);
      removeChildren(display.cursorDiv);
      removeChildren(display.selectionDiv);
      display.gutters.style.height = display.sizer.style.minHeight = 0;
      if (different) {
        display.lastWrapHeight = update.wrapperHeight;
        display.lastWrapWidth = update.wrapperWidth;
        startWorker(cm, 400);
      }
      display.updateLineNumbers = null;
      return true;
    }
    function postUpdateDisplay(cm, update) {
      var viewport = update.viewport;
      for (var first = true; ; first = false) {
        if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
          if (viewport && viewport.top != null) {
            viewport = { top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top) };
          }
          update.visible = visibleLines(cm.display, cm.doc, viewport);
          if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo) {
            break;
          }
        } else if (first) {
          update.visible = visibleLines(cm.display, cm.doc, viewport);
        }
        if (!updateDisplayIfNeeded(cm, update)) {
          break;
        }
        updateHeightsInViewport(cm);
        var barMeasure = measureForScrollbars(cm);
        updateSelection(cm);
        updateScrollbars(cm, barMeasure);
        setDocumentHeight(cm, barMeasure);
        update.force = false;
      }
      update.signal(cm, "update", cm);
      if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
        update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
        cm.display.reportedViewFrom = cm.display.viewFrom;
        cm.display.reportedViewTo = cm.display.viewTo;
      }
    }
    function updateDisplaySimple(cm, viewport) {
      var update = new DisplayUpdate(cm, viewport);
      if (updateDisplayIfNeeded(cm, update)) {
        updateHeightsInViewport(cm);
        postUpdateDisplay(cm, update);
        var barMeasure = measureForScrollbars(cm);
        updateSelection(cm);
        updateScrollbars(cm, barMeasure);
        setDocumentHeight(cm, barMeasure);
        update.finish();
      }
    }
    function patchDisplay(cm, updateNumbersFrom, dims) {
      var display = cm.display, lineNumbers = cm.options.lineNumbers;
      var container = display.lineDiv, cur = container.firstChild;
      function rm(node2) {
        var next2 = node2.nextSibling;
        if (webkit && mac && cm.display.currentWheelTarget == node2) {
          node2.style.display = "none";
        } else {
          node2.parentNode.removeChild(node2);
        }
        return next2;
      }
      var view = display.view, lineN = display.viewFrom;
      for (var i2 = 0; i2 < view.length; i2++) {
        var lineView = view[i2];
        if (lineView.hidden)
          ;
        else if (!lineView.node || lineView.node.parentNode != container) {
          var node = buildLineElement(cm, lineView, lineN, dims);
          container.insertBefore(node, cur);
        } else {
          while (cur != lineView.node) {
            cur = rm(cur);
          }
          var updateNumber = lineNumbers && updateNumbersFrom != null && updateNumbersFrom <= lineN && lineView.lineNumber;
          if (lineView.changes) {
            if (indexOf(lineView.changes, "gutter") > -1) {
              updateNumber = false;
            }
            updateLineForChanges(cm, lineView, lineN, dims);
          }
          if (updateNumber) {
            removeChildren(lineView.lineNumber);
            lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
          }
          cur = lineView.node.nextSibling;
        }
        lineN += lineView.size;
      }
      while (cur) {
        cur = rm(cur);
      }
    }
    function updateGutterSpace(display) {
      var width = display.gutters.offsetWidth;
      display.sizer.style.marginLeft = width + "px";
      signalLater(display, "gutterChanged", display);
    }
    function setDocumentHeight(cm, measure) {
      cm.display.sizer.style.minHeight = measure.docHeight + "px";
      cm.display.heightForcer.style.top = measure.docHeight + "px";
      cm.display.gutters.style.height = measure.docHeight + cm.display.barHeight + scrollGap(cm) + "px";
    }
    function alignHorizontally(cm) {
      var display = cm.display, view = display.view;
      if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) {
        return;
      }
      var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
      var gutterW = display.gutters.offsetWidth, left = comp + "px";
      for (var i2 = 0; i2 < view.length; i2++) {
        if (!view[i2].hidden) {
          if (cm.options.fixedGutter) {
            if (view[i2].gutter) {
              view[i2].gutter.style.left = left;
            }
            if (view[i2].gutterBackground) {
              view[i2].gutterBackground.style.left = left;
            }
          }
          var align = view[i2].alignable;
          if (align) {
            for (var j = 0; j < align.length; j++) {
              align[j].style.left = left;
            }
          }
        }
      }
      if (cm.options.fixedGutter) {
        display.gutters.style.left = comp + gutterW + "px";
      }
    }
    function maybeUpdateLineNumberWidth(cm) {
      if (!cm.options.lineNumbers) {
        return false;
      }
      var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
      if (last.length != display.lineNumChars) {
        var test = display.measure.appendChild(elt("div", [elt("div", last)], "CodeMirror-linenumber CodeMirror-gutter-elt"));
        var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
        display.lineGutter.style.width = "";
        display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
        display.lineNumWidth = display.lineNumInnerWidth + padding;
        display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
        display.lineGutter.style.width = display.lineNumWidth + "px";
        updateGutterSpace(cm.display);
        return true;
      }
      return false;
    }
    function getGutters(gutters, lineNumbers) {
      var result = [], sawLineNumbers = false;
      for (var i2 = 0; i2 < gutters.length; i2++) {
        var name = gutters[i2], style = null;
        if (typeof name != "string") {
          style = name.style;
          name = name.className;
        }
        if (name == "CodeMirror-linenumbers") {
          if (!lineNumbers) {
            continue;
          } else {
            sawLineNumbers = true;
          }
        }
        result.push({ className: name, style });
      }
      if (lineNumbers && !sawLineNumbers) {
        result.push({ className: "CodeMirror-linenumbers", style: null });
      }
      return result;
    }
    function renderGutters(display) {
      var gutters = display.gutters, specs = display.gutterSpecs;
      removeChildren(gutters);
      display.lineGutter = null;
      for (var i2 = 0; i2 < specs.length; ++i2) {
        var ref2 = specs[i2];
        var className = ref2.className;
        var style = ref2.style;
        var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + className));
        if (style) {
          gElt.style.cssText = style;
        }
        if (className == "CodeMirror-linenumbers") {
          display.lineGutter = gElt;
          gElt.style.width = (display.lineNumWidth || 1) + "px";
        }
      }
      gutters.style.display = specs.length ? "" : "none";
      updateGutterSpace(display);
    }
    function updateGutters(cm) {
      renderGutters(cm.display);
      regChange(cm);
      alignHorizontally(cm);
    }
    function Display(place, doc, input2, options) {
      var d = this;
      this.input = input2;
      d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
      d.scrollbarFiller.setAttribute("cm-not-content", "true");
      d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
      d.gutterFiller.setAttribute("cm-not-content", "true");
      d.lineDiv = eltP("div", null, "CodeMirror-code");
      d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
      d.cursorDiv = elt("div", null, "CodeMirror-cursors");
      d.measure = elt("div", null, "CodeMirror-measure");
      d.lineMeasure = elt("div", null, "CodeMirror-measure");
      d.lineSpace = eltP("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv], null, "position: relative; outline: none");
      var lines = eltP("div", [d.lineSpace], "CodeMirror-lines");
      d.mover = elt("div", [lines], null, "position: relative");
      d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
      d.sizerWidth = null;
      d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
      d.gutters = elt("div", null, "CodeMirror-gutters");
      d.lineGutter = null;
      d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
      d.scroller.setAttribute("tabIndex", "-1");
      d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");
      d.wrapper.setAttribute("translate", "no");
      if (ie && ie_version < 8) {
        d.gutters.style.zIndex = -1;
        d.scroller.style.paddingRight = 0;
      }
      if (!webkit && !(gecko && mobile)) {
        d.scroller.draggable = true;
      }
      if (place) {
        if (place.appendChild) {
          place.appendChild(d.wrapper);
        } else {
          place(d.wrapper);
        }
      }
      d.viewFrom = d.viewTo = doc.first;
      d.reportedViewFrom = d.reportedViewTo = doc.first;
      d.view = [];
      d.renderedView = null;
      d.externalMeasured = null;
      d.viewOffset = 0;
      d.lastWrapHeight = d.lastWrapWidth = 0;
      d.updateLineNumbers = null;
      d.nativeBarWidth = d.barHeight = d.barWidth = 0;
      d.scrollbarsClipped = false;
      d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
      d.alignWidgets = false;
      d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
      d.maxLine = null;
      d.maxLineLength = 0;
      d.maxLineChanged = false;
      d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;
      d.shift = false;
      d.selForContextMenu = null;
      d.activeTouch = null;
      d.gutterSpecs = getGutters(options.gutters, options.lineNumbers);
      renderGutters(d);
      input2.init(d);
    }
    var wheelSamples = 0, wheelPixelsPerUnit = null;
    if (ie) {
      wheelPixelsPerUnit = -0.53;
    } else if (gecko) {
      wheelPixelsPerUnit = 15;
    } else if (chrome) {
      wheelPixelsPerUnit = -0.7;
    } else if (safari) {
      wheelPixelsPerUnit = -1 / 3;
    }
    function wheelEventDelta(e) {
      var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
      if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) {
        dx = e.detail;
      }
      if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) {
        dy = e.detail;
      } else if (dy == null) {
        dy = e.wheelDelta;
      }
      return { x: dx, y: dy };
    }
    function wheelEventPixels(e) {
      var delta = wheelEventDelta(e);
      delta.x *= wheelPixelsPerUnit;
      delta.y *= wheelPixelsPerUnit;
      return delta;
    }
    function onScrollWheel(cm, e) {
      var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;
      var pixelsPerUnit = wheelPixelsPerUnit;
      if (event.deltaMode === 0) {
        dx = e.deltaX;
        dy = e.deltaY;
        pixelsPerUnit = 1;
      }
      var display = cm.display, scroll = display.scroller;
      var canScrollX = scroll.scrollWidth > scroll.clientWidth;
      var canScrollY = scroll.scrollHeight > scroll.clientHeight;
      if (!(dx && canScrollX || dy && canScrollY)) {
        return;
      }
      if (dy && mac && webkit) {
        outer:
          for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
            for (var i2 = 0; i2 < view.length; i2++) {
              if (view[i2].node == cur) {
                cm.display.currentWheelTarget = cur;
                break outer;
              }
            }
          }
      }
      if (dx && !gecko && !presto && pixelsPerUnit != null) {
        if (dy && canScrollY) {
          updateScrollTop(cm, Math.max(0, scroll.scrollTop + dy * pixelsPerUnit));
        }
        setScrollLeft(cm, Math.max(0, scroll.scrollLeft + dx * pixelsPerUnit));
        if (!dy || dy && canScrollY) {
          e_preventDefault(e);
        }
        display.wheelStartX = null;
        return;
      }
      if (dy && pixelsPerUnit != null) {
        var pixels = dy * pixelsPerUnit;
        var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
        if (pixels < 0) {
          top = Math.max(0, top + pixels - 50);
        } else {
          bot = Math.min(cm.doc.height, bot + pixels + 50);
        }
        updateDisplaySimple(cm, { top, bottom: bot });
      }
      if (wheelSamples < 20 && e.deltaMode !== 0) {
        if (display.wheelStartX == null) {
          display.wheelStartX = scroll.scrollLeft;
          display.wheelStartY = scroll.scrollTop;
          display.wheelDX = dx;
          display.wheelDY = dy;
          setTimeout(function() {
            if (display.wheelStartX == null) {
              return;
            }
            var movedX = scroll.scrollLeft - display.wheelStartX;
            var movedY = scroll.scrollTop - display.wheelStartY;
            var sample = movedY && display.wheelDY && movedY / display.wheelDY || movedX && display.wheelDX && movedX / display.wheelDX;
            display.wheelStartX = display.wheelStartY = null;
            if (!sample) {
              return;
            }
            wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
            ++wheelSamples;
          }, 200);
        } else {
          display.wheelDX += dx;
          display.wheelDY += dy;
        }
      }
    }
    var Selection = function(ranges, primIndex) {
      this.ranges = ranges;
      this.primIndex = primIndex;
    };
    Selection.prototype.primary = function() {
      return this.ranges[this.primIndex];
    };
    Selection.prototype.equals = function(other) {
      if (other == this) {
        return true;
      }
      if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) {
        return false;
      }
      for (var i2 = 0; i2 < this.ranges.length; i2++) {
        var here = this.ranges[i2], there = other.ranges[i2];
        if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) {
          return false;
        }
      }
      return true;
    };
    Selection.prototype.deepCopy = function() {
      var out = [];
      for (var i2 = 0; i2 < this.ranges.length; i2++) {
        out[i2] = new Range(copyPos(this.ranges[i2].anchor), copyPos(this.ranges[i2].head));
      }
      return new Selection(out, this.primIndex);
    };
    Selection.prototype.somethingSelected = function() {
      for (var i2 = 0; i2 < this.ranges.length; i2++) {
        if (!this.ranges[i2].empty()) {
          return true;
        }
      }
      return false;
    };
    Selection.prototype.contains = function(pos, end) {
      if (!end) {
        end = pos;
      }
      for (var i2 = 0; i2 < this.ranges.length; i2++) {
        var range2 = this.ranges[i2];
        if (cmp(end, range2.from()) >= 0 && cmp(pos, range2.to()) <= 0) {
          return i2;
        }
      }
      return -1;
    };
    var Range = function(anchor, head) {
      this.anchor = anchor;
      this.head = head;
    };
    Range.prototype.from = function() {
      return minPos(this.anchor, this.head);
    };
    Range.prototype.to = function() {
      return maxPos(this.anchor, this.head);
    };
    Range.prototype.empty = function() {
      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
    };
    function normalizeSelection(cm, ranges, primIndex) {
      var mayTouch = cm && cm.options.selectionsMayTouch;
      var prim = ranges[primIndex];
      ranges.sort(function(a, b) {
        return cmp(a.from(), b.from());
      });
      primIndex = indexOf(ranges, prim);
      for (var i2 = 1; i2 < ranges.length; i2++) {
        var cur = ranges[i2], prev = ranges[i2 - 1];
        var diff = cmp(prev.to(), cur.from());
        if (mayTouch && !cur.empty() ? diff > 0 : diff >= 0) {
          var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
          var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
          if (i2 <= primIndex) {
            --primIndex;
          }
          ranges.splice(--i2, 2, new Range(inv ? to : from, inv ? from : to));
        }
      }
      return new Selection(ranges, primIndex);
    }
    function simpleSelection(anchor, head) {
      return new Selection([new Range(anchor, head || anchor)], 0);
    }
    function changeEnd(change) {
      if (!change.text) {
        return change.to;
      }
      return Pos(change.from.line + change.text.length - 1, lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
    }
    function adjustForChange(pos, change) {
      if (cmp(pos, change.from) < 0) {
        return pos;
      }
      if (cmp(pos, change.to) <= 0) {
        return changeEnd(change);
      }
      var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
      if (pos.line == change.to.line) {
        ch += changeEnd(change).ch - change.to.ch;
      }
      return Pos(line, ch);
    }
    function computeSelAfterChange(doc, change) {
      var out = [];
      for (var i2 = 0; i2 < doc.sel.ranges.length; i2++) {
        var range2 = doc.sel.ranges[i2];
        out.push(new Range(adjustForChange(range2.anchor, change), adjustForChange(range2.head, change)));
      }
      return normalizeSelection(doc.cm, out, doc.sel.primIndex);
    }
    function offsetPos(pos, old, nw) {
      if (pos.line == old.line) {
        return Pos(nw.line, pos.ch - old.ch + nw.ch);
      } else {
        return Pos(nw.line + (pos.line - old.line), pos.ch);
      }
    }
    function computeReplacedSel(doc, changes, hint) {
      var out = [];
      var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
      for (var i2 = 0; i2 < changes.length; i2++) {
        var change = changes[i2];
        var from = offsetPos(change.from, oldPrev, newPrev);
        var to = offsetPos(changeEnd(change), oldPrev, newPrev);
        oldPrev = change.to;
        newPrev = to;
        if (hint == "around") {
          var range2 = doc.sel.ranges[i2], inv = cmp(range2.head, range2.anchor) < 0;
          out[i2] = new Range(inv ? to : from, inv ? from : to);
        } else {
          out[i2] = new Range(from, from);
        }
      }
      return new Selection(out, doc.sel.primIndex);
    }
    function loadMode(cm) {
      cm.doc.mode = getMode(cm.options, cm.doc.modeOption);
      resetModeState(cm);
    }
    function resetModeState(cm) {
      cm.doc.iter(function(line) {
        if (line.stateAfter) {
          line.stateAfter = null;
        }
        if (line.styles) {
          line.styles = null;
        }
      });
      cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first;
      startWorker(cm, 100);
      cm.state.modeGen++;
      if (cm.curOp) {
        regChange(cm);
      }
    }
    function isWholeLineUpdate(doc, change) {
      return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" && (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
    }
    function updateDoc(doc, change, markedSpans, estimateHeight2) {
      function spansFor(n) {
        return markedSpans ? markedSpans[n] : null;
      }
      function update(line, text2, spans) {
        updateLine(line, text2, spans, estimateHeight2);
        signalLater(line, "change", line, change);
      }
      function linesFor(start, end) {
        var result = [];
        for (var i2 = start; i2 < end; ++i2) {
          result.push(new Line(text[i2], spansFor(i2), estimateHeight2));
        }
        return result;
      }
      var from = change.from, to = change.to, text = change.text;
      var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
      var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;
      if (change.full) {
        doc.insert(0, linesFor(0, text.length));
        doc.remove(text.length, doc.size - text.length);
      } else if (isWholeLineUpdate(doc, change)) {
        var added = linesFor(0, text.length - 1);
        update(lastLine, lastLine.text, lastSpans);
        if (nlines) {
          doc.remove(from.line, nlines);
        }
        if (added.length) {
          doc.insert(from.line, added);
        }
      } else if (firstLine == lastLine) {
        if (text.length == 1) {
          update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
        } else {
          var added$1 = linesFor(1, text.length - 1);
          added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight2));
          update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
          doc.insert(from.line + 1, added$1);
        }
      } else if (text.length == 1) {
        update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
        doc.remove(from.line + 1, nlines);
      } else {
        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
        update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
        var added$2 = linesFor(1, text.length - 1);
        if (nlines > 1) {
          doc.remove(from.line + 1, nlines - 1);
        }
        doc.insert(from.line + 1, added$2);
      }
      signalLater(doc, "change", doc, change);
    }
    function linkedDocs(doc, f, sharedHistOnly) {
      function propagate(doc2, skip, sharedHist) {
        if (doc2.linked) {
          for (var i2 = 0; i2 < doc2.linked.length; ++i2) {
            var rel = doc2.linked[i2];
            if (rel.doc == skip) {
              continue;
            }
            var shared = sharedHist && rel.sharedHist;
            if (sharedHistOnly && !shared) {
              continue;
            }
            f(rel.doc, shared);
            propagate(rel.doc, doc2, shared);
          }
        }
      }
      propagate(doc, null, true);
    }
    function attachDoc(cm, doc) {
      if (doc.cm) {
        throw new Error("This document is already in use.");
      }
      cm.doc = doc;
      doc.cm = cm;
      estimateLineHeights(cm);
      loadMode(cm);
      setDirectionClass(cm);
      cm.options.direction = doc.direction;
      if (!cm.options.lineWrapping) {
        findMaxLine(cm);
      }
      cm.options.mode = doc.modeOption;
      regChange(cm);
    }
    function setDirectionClass(cm) {
      (cm.doc.direction == "rtl" ? addClass : rmClass)(cm.display.lineDiv, "CodeMirror-rtl");
    }
    function directionChanged(cm) {
      runInOp(cm, function() {
        setDirectionClass(cm);
        regChange(cm);
      });
    }
    function History(prev) {
      this.done = [];
      this.undone = [];
      this.undoDepth = prev ? prev.undoDepth : Infinity;
      this.lastModTime = this.lastSelTime = 0;
      this.lastOp = this.lastSelOp = null;
      this.lastOrigin = this.lastSelOrigin = null;
      this.generation = this.maxGeneration = prev ? prev.maxGeneration : 1;
    }
    function historyChangeFromChange(doc, change) {
      var histChange = { from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to) };
      attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
      linkedDocs(doc, function(doc2) {
        return attachLocalSpans(doc2, histChange, change.from.line, change.to.line + 1);
      }, true);
      return histChange;
    }
    function clearSelectionEvents(array) {
      while (array.length) {
        var last = lst(array);
        if (last.ranges) {
          array.pop();
        } else {
          break;
        }
      }
    }
    function lastChangeEvent(hist, force) {
      if (force) {
        clearSelectionEvents(hist.done);
        return lst(hist.done);
      } else if (hist.done.length && !lst(hist.done).ranges) {
        return lst(hist.done);
      } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
        hist.done.pop();
        return lst(hist.done);
      }
    }
    function addChangeToHistory(doc, change, selAfter, opId) {
      var hist = doc.history;
      hist.undone.length = 0;
      var time = +new Date(), cur;
      var last;
      if ((hist.lastOp == opId || hist.lastOrigin == change.origin && change.origin && (change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc.cm ? doc.cm.options.historyEventDelay : 500) || change.origin.charAt(0) == "*")) && (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
        last = lst(cur.changes);
        if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
          last.to = changeEnd(change);
        } else {
          cur.changes.push(historyChangeFromChange(doc, change));
        }
      } else {
        var before = lst(hist.done);
        if (!before || !before.ranges) {
          pushSelectionToHistory(doc.sel, hist.done);
        }
        cur = {
          changes: [historyChangeFromChange(doc, change)],
          generation: hist.generation
        };
        hist.done.push(cur);
        while (hist.done.length > hist.undoDepth) {
          hist.done.shift();
          if (!hist.done[0].ranges) {
            hist.done.shift();
          }
        }
      }
      hist.done.push(selAfter);
      hist.generation = ++hist.maxGeneration;
      hist.lastModTime = hist.lastSelTime = time;
      hist.lastOp = hist.lastSelOp = opId;
      hist.lastOrigin = hist.lastSelOrigin = change.origin;
      if (!last) {
        signal(doc, "historyAdded");
      }
    }
    function selectionEventCanBeMerged(doc, origin, prev, sel) {
      var ch = origin.charAt(0);
      return ch == "*" || ch == "+" && prev.ranges.length == sel.ranges.length && prev.somethingSelected() == sel.somethingSelected() && new Date() - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
    }
    function addSelectionToHistory(doc, sel, opId, options) {
      var hist = doc.history, origin = options && options.origin;
      if (opId == hist.lastSelOp || origin && hist.lastSelOrigin == origin && (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin || selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))) {
        hist.done[hist.done.length - 1] = sel;
      } else {
        pushSelectionToHistory(sel, hist.done);
      }
      hist.lastSelTime = +new Date();
      hist.lastSelOrigin = origin;
      hist.lastSelOp = opId;
      if (options && options.clearRedo !== false) {
        clearSelectionEvents(hist.undone);
      }
    }
    function pushSelectionToHistory(sel, dest) {
      var top = lst(dest);
      if (!(top && top.ranges && top.equals(sel))) {
        dest.push(sel);
      }
    }
    function attachLocalSpans(doc, change, from, to) {
      var existing = change["spans_" + doc.id], n = 0;
      doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
        if (line.markedSpans) {
          (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
        }
        ++n;
      });
    }
    function removeClearedSpans(spans) {
      if (!spans) {
        return null;
      }
      var out;
      for (var i2 = 0; i2 < spans.length; ++i2) {
        if (spans[i2].marker.explicitlyCleared) {
          if (!out) {
            out = spans.slice(0, i2);
          }
        } else if (out) {
          out.push(spans[i2]);
        }
      }
      return !out ? spans : out.length ? out : null;
    }
    function getOldSpans(doc, change) {
      var found = change["spans_" + doc.id];
      if (!found) {
        return null;
      }
      var nw = [];
      for (var i2 = 0; i2 < change.text.length; ++i2) {
        nw.push(removeClearedSpans(found[i2]));
      }
      return nw;
    }
    function mergeOldSpans(doc, change) {
      var old = getOldSpans(doc, change);
      var stretched = stretchSpansOverChange(doc, change);
      if (!old) {
        return stretched;
      }
      if (!stretched) {
        return old;
      }
      for (var i2 = 0; i2 < old.length; ++i2) {
        var oldCur = old[i2], stretchCur = stretched[i2];
        if (oldCur && stretchCur) {
          spans:
            for (var j = 0; j < stretchCur.length; ++j) {
              var span = stretchCur[j];
              for (var k = 0; k < oldCur.length; ++k) {
                if (oldCur[k].marker == span.marker) {
                  continue spans;
                }
              }
              oldCur.push(span);
            }
        } else if (stretchCur) {
          old[i2] = stretchCur;
        }
      }
      return old;
    }
    function copyHistoryArray(events, newGroup, instantiateSel) {
      var copy = [];
      for (var i2 = 0; i2 < events.length; ++i2) {
        var event2 = events[i2];
        if (event2.ranges) {
          copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event2) : event2);
          continue;
        }
        var changes = event2.changes, newChanges = [];
        copy.push({ changes: newChanges });
        for (var j = 0; j < changes.length; ++j) {
          var change = changes[j], m = void 0;
          newChanges.push({ from: change.from, to: change.to, text: change.text });
          if (newGroup) {
            for (var prop2 in change) {
              if (m = prop2.match(/^spans_(\d+)$/)) {
                if (indexOf(newGroup, Number(m[1])) > -1) {
                  lst(newChanges)[prop2] = change[prop2];
                  delete change[prop2];
                }
              }
            }
          }
        }
      }
      return copy;
    }
    function extendRange(range2, head, other, extend) {
      if (extend) {
        var anchor = range2.anchor;
        if (other) {
          var posBefore = cmp(head, anchor) < 0;
          if (posBefore != cmp(other, anchor) < 0) {
            anchor = head;
            head = other;
          } else if (posBefore != cmp(head, other) < 0) {
            head = other;
          }
        }
        return new Range(anchor, head);
      } else {
        return new Range(other || head, head);
      }
    }
    function extendSelection(doc, head, other, options, extend) {
      if (extend == null) {
        extend = doc.cm && (doc.cm.display.shift || doc.extend);
      }
      setSelection(doc, new Selection([extendRange(doc.sel.primary(), head, other, extend)], 0), options);
    }
    function extendSelections(doc, heads, options) {
      var out = [];
      var extend = doc.cm && (doc.cm.display.shift || doc.extend);
      for (var i2 = 0; i2 < doc.sel.ranges.length; i2++) {
        out[i2] = extendRange(doc.sel.ranges[i2], heads[i2], null, extend);
      }
      var newSel = normalizeSelection(doc.cm, out, doc.sel.primIndex);
      setSelection(doc, newSel, options);
    }
    function replaceOneSelection(doc, i2, range2, options) {
      var ranges = doc.sel.ranges.slice(0);
      ranges[i2] = range2;
      setSelection(doc, normalizeSelection(doc.cm, ranges, doc.sel.primIndex), options);
    }
    function setSimpleSelection(doc, anchor, head, options) {
      setSelection(doc, simpleSelection(anchor, head), options);
    }
    function filterSelectionChange(doc, sel, options) {
      var obj = {
        ranges: sel.ranges,
        update: function(ranges) {
          this.ranges = [];
          for (var i2 = 0; i2 < ranges.length; i2++) {
            this.ranges[i2] = new Range(clipPos(doc, ranges[i2].anchor), clipPos(doc, ranges[i2].head));
          }
        },
        origin: options && options.origin
      };
      signal(doc, "beforeSelectionChange", doc, obj);
      if (doc.cm) {
        signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
      }
      if (obj.ranges != sel.ranges) {
        return normalizeSelection(doc.cm, obj.ranges, obj.ranges.length - 1);
      } else {
        return sel;
      }
    }
    function setSelectionReplaceHistory(doc, sel, options) {
      var done = doc.history.done, last = lst(done);
      if (last && last.ranges) {
        done[done.length - 1] = sel;
        setSelectionNoUndo(doc, sel, options);
      } else {
        setSelection(doc, sel, options);
      }
    }
    function setSelection(doc, sel, options) {
      setSelectionNoUndo(doc, sel, options);
      addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
    }
    function setSelectionNoUndo(doc, sel, options) {
      if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange")) {
        sel = filterSelectionChange(doc, sel, options);
      }
      var bias = options && options.bias || (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
      setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));
      if (!(options && options.scroll === false) && doc.cm && doc.cm.getOption("readOnly") != "nocursor") {
        ensureCursorVisible(doc.cm);
      }
    }
    function setSelectionInner(doc, sel) {
      if (sel.equals(doc.sel)) {
        return;
      }
      doc.sel = sel;
      if (doc.cm) {
        doc.cm.curOp.updateInput = 1;
        doc.cm.curOp.selectionChanged = true;
        signalCursorActivity(doc.cm);
      }
      signalLater(doc, "cursorActivity", doc);
    }
    function reCheckSelection(doc) {
      setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false));
    }
    function skipAtomicInSelection(doc, sel, bias, mayClear) {
      var out;
      for (var i2 = 0; i2 < sel.ranges.length; i2++) {
        var range2 = sel.ranges[i2];
        var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i2];
        var newAnchor = skipAtomic(doc, range2.anchor, old && old.anchor, bias, mayClear);
        var newHead = skipAtomic(doc, range2.head, old && old.head, bias, mayClear);
        if (out || newAnchor != range2.anchor || newHead != range2.head) {
          if (!out) {
            out = sel.ranges.slice(0, i2);
          }
          out[i2] = new Range(newAnchor, newHead);
        }
      }
      return out ? normalizeSelection(doc.cm, out, sel.primIndex) : sel;
    }
    function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
      var line = getLine(doc, pos.line);
      if (line.markedSpans) {
        for (var i2 = 0; i2 < line.markedSpans.length; ++i2) {
          var sp = line.markedSpans[i2], m = sp.marker;
          var preventCursorLeft = "selectLeft" in m ? !m.selectLeft : m.inclusiveLeft;
          var preventCursorRight = "selectRight" in m ? !m.selectRight : m.inclusiveRight;
          if ((sp.from == null || (preventCursorLeft ? sp.from <= pos.ch : sp.from < pos.ch)) && (sp.to == null || (preventCursorRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
            if (mayClear) {
              signal(m, "beforeCursorEnter");
              if (m.explicitlyCleared) {
                if (!line.markedSpans) {
                  break;
                } else {
                  --i2;
                  continue;
                }
              }
            }
            if (!m.atomic) {
              continue;
            }
            if (oldPos) {
              var near = m.find(dir < 0 ? 1 : -1), diff = void 0;
              if (dir < 0 ? preventCursorRight : preventCursorLeft) {
                near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null);
              }
              if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0)) {
                return skipAtomicInner(doc, near, pos, dir, mayClear);
              }
            }
            var far = m.find(dir < 0 ? -1 : 1);
            if (dir < 0 ? preventCursorLeft : preventCursorRight) {
              far = movePos(doc, far, dir, far.line == pos.line ? line : null);
            }
            return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null;
          }
        }
      }
      return pos;
    }
    function skipAtomic(doc, pos, oldPos, bias, mayClear) {
      var dir = bias || 1;
      var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) || !mayClear && skipAtomicInner(doc, pos, oldPos, dir, true) || skipAtomicInner(doc, pos, oldPos, -dir, mayClear) || !mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true);
      if (!found) {
        doc.cantEdit = true;
        return Pos(doc.first, 0);
      }
      return found;
    }
    function movePos(doc, pos, dir, line) {
      if (dir < 0 && pos.ch == 0) {
        if (pos.line > doc.first) {
          return clipPos(doc, Pos(pos.line - 1));
        } else {
          return null;
        }
      } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
        if (pos.line < doc.first + doc.size - 1) {
          return Pos(pos.line + 1, 0);
        } else {
          return null;
        }
      } else {
        return new Pos(pos.line, pos.ch + dir);
      }
    }
    function selectAll(cm) {
      cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
    }
    function filterChange(doc, change, update) {
      var obj = {
        canceled: false,
        from: change.from,
        to: change.to,
        text: change.text,
        origin: change.origin,
        cancel: function() {
          return obj.canceled = true;
        }
      };
      if (update) {
        obj.update = function(from, to, text, origin) {
          if (from) {
            obj.from = clipPos(doc, from);
          }
          if (to) {
            obj.to = clipPos(doc, to);
          }
          if (text) {
            obj.text = text;
          }
          if (origin !== void 0) {
            obj.origin = origin;
          }
        };
      }
      signal(doc, "beforeChange", doc, obj);
      if (doc.cm) {
        signal(doc.cm, "beforeChange", doc.cm, obj);
      }
      if (obj.canceled) {
        if (doc.cm) {
          doc.cm.curOp.updateInput = 2;
        }
        return null;
      }
      return { from: obj.from, to: obj.to, text: obj.text, origin: obj.origin };
    }
    function makeChange(doc, change, ignoreReadOnly) {
      if (doc.cm) {
        if (!doc.cm.curOp) {
          return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
        }
        if (doc.cm.state.suppressEdits) {
          return;
        }
      }
      if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
        change = filterChange(doc, change, true);
        if (!change) {
          return;
        }
      }
      var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
      if (split) {
        for (var i2 = split.length - 1; i2 >= 0; --i2) {
          makeChangeInner(doc, { from: split[i2].from, to: split[i2].to, text: i2 ? [""] : change.text, origin: change.origin });
        }
      } else {
        makeChangeInner(doc, change);
      }
    }
    function makeChangeInner(doc, change) {
      if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) {
        return;
      }
      var selAfter = computeSelAfterChange(doc, change);
      addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);
      makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
      var rebased = [];
      linkedDocs(doc, function(doc2, sharedHist) {
        if (!sharedHist && indexOf(rebased, doc2.history) == -1) {
          rebaseHist(doc2.history, change);
          rebased.push(doc2.history);
        }
        makeChangeSingleDoc(doc2, change, null, stretchSpansOverChange(doc2, change));
      });
    }
    function makeChangeFromHistory(doc, type, allowSelectionOnly) {
      var suppress = doc.cm && doc.cm.state.suppressEdits;
      if (suppress && !allowSelectionOnly) {
        return;
      }
      var hist = doc.history, event2, selAfter = doc.sel;
      var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;
      var i2 = 0;
      for (; i2 < source.length; i2++) {
        event2 = source[i2];
        if (allowSelectionOnly ? event2.ranges && !event2.equals(doc.sel) : !event2.ranges) {
          break;
        }
      }
      if (i2 == source.length) {
        return;
      }
      hist.lastOrigin = hist.lastSelOrigin = null;
      for (; ; ) {
        event2 = source.pop();
        if (event2.ranges) {
          pushSelectionToHistory(event2, dest);
          if (allowSelectionOnly && !event2.equals(doc.sel)) {
            setSelection(doc, event2, { clearRedo: false });
            return;
          }
          selAfter = event2;
        } else if (suppress) {
          source.push(event2);
          return;
        } else {
          break;
        }
      }
      var antiChanges = [];
      pushSelectionToHistory(selAfter, dest);
      dest.push({ changes: antiChanges, generation: hist.generation });
      hist.generation = event2.generation || ++hist.maxGeneration;
      var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");
      var loop = function(i3) {
        var change = event2.changes[i3];
        change.origin = type;
        if (filter && !filterChange(doc, change, false)) {
          source.length = 0;
          return {};
        }
        antiChanges.push(historyChangeFromChange(doc, change));
        var after = i3 ? computeSelAfterChange(doc, change) : lst(source);
        makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
        if (!i3 && doc.cm) {
          doc.cm.scrollIntoView({ from: change.from, to: changeEnd(change) });
        }
        var rebased = [];
        linkedDocs(doc, function(doc2, sharedHist) {
          if (!sharedHist && indexOf(rebased, doc2.history) == -1) {
            rebaseHist(doc2.history, change);
            rebased.push(doc2.history);
          }
          makeChangeSingleDoc(doc2, change, null, mergeOldSpans(doc2, change));
        });
      };
      for (var i$12 = event2.changes.length - 1; i$12 >= 0; --i$12) {
        var returned = loop(i$12);
        if (returned)
          return returned.v;
      }
    }
    function shiftDoc(doc, distance) {
      if (distance == 0) {
        return;
      }
      doc.first += distance;
      doc.sel = new Selection(map(doc.sel.ranges, function(range2) {
        return new Range(Pos(range2.anchor.line + distance, range2.anchor.ch), Pos(range2.head.line + distance, range2.head.ch));
      }), doc.sel.primIndex);
      if (doc.cm) {
        regChange(doc.cm, doc.first, doc.first - distance, distance);
        for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++) {
          regLineChange(doc.cm, l, "gutter");
        }
      }
    }
    function makeChangeSingleDoc(doc, change, selAfter, spans) {
      if (doc.cm && !doc.cm.curOp) {
        return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);
      }
      if (change.to.line < doc.first) {
        shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
        return;
      }
      if (change.from.line > doc.lastLine()) {
        return;
      }
      if (change.from.line < doc.first) {
        var shift = change.text.length - 1 - (doc.first - change.from.line);
        shiftDoc(doc, shift);
        change = {
          from: Pos(doc.first, 0),
          to: Pos(change.to.line + shift, change.to.ch),
          text: [lst(change.text)],
          origin: change.origin
        };
      }
      var last = doc.lastLine();
      if (change.to.line > last) {
        change = {
          from: change.from,
          to: Pos(last, getLine(doc, last).text.length),
          text: [change.text[0]],
          origin: change.origin
        };
      }
      change.removed = getBetween(doc, change.from, change.to);
      if (!selAfter) {
        selAfter = computeSelAfterChange(doc, change);
      }
      if (doc.cm) {
        makeChangeSingleDocInEditor(doc.cm, change, spans);
      } else {
        updateDoc(doc, change, spans);
      }
      setSelectionNoUndo(doc, selAfter, sel_dontScroll);
      if (doc.cantEdit && skipAtomic(doc, Pos(doc.firstLine(), 0))) {
        doc.cantEdit = false;
      }
    }
    function makeChangeSingleDocInEditor(cm, change, spans) {
      var doc = cm.doc, display = cm.display, from = change.from, to = change.to;
      var recomputeMaxLength = false, checkWidthStart = from.line;
      if (!cm.options.lineWrapping) {
        checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
        doc.iter(checkWidthStart, to.line + 1, function(line) {
          if (line == display.maxLine) {
            recomputeMaxLength = true;
            return true;
          }
        });
      }
      if (doc.sel.contains(change.from, change.to) > -1) {
        signalCursorActivity(cm);
      }
      updateDoc(doc, change, spans, estimateHeight(cm));
      if (!cm.options.lineWrapping) {
        doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
          var len = lineLength(line);
          if (len > display.maxLineLength) {
            display.maxLine = line;
            display.maxLineLength = len;
            display.maxLineChanged = true;
            recomputeMaxLength = false;
          }
        });
        if (recomputeMaxLength) {
          cm.curOp.updateMaxLine = true;
        }
      }
      retreatFrontier(doc, from.line);
      startWorker(cm, 400);
      var lendiff = change.text.length - (to.line - from.line) - 1;
      if (change.full) {
        regChange(cm);
      } else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change)) {
        regLineChange(cm, from.line, "text");
      } else {
        regChange(cm, from.line, to.line + 1, lendiff);
      }
      var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
      if (changeHandler || changesHandler) {
        var obj = {
          from,
          to,
          text: change.text,
          removed: change.removed,
          origin: change.origin
        };
        if (changeHandler) {
          signalLater(cm, "change", cm, obj);
        }
        if (changesHandler) {
          (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
        }
      }
      cm.display.selForContextMenu = null;
    }
    function replaceRange(doc, code, from, to, origin) {
      var assign;
      if (!to) {
        to = from;
      }
      if (cmp(to, from) < 0) {
        assign = [to, from], from = assign[0], to = assign[1];
      }
      if (typeof code == "string") {
        code = doc.splitLines(code);
      }
      makeChange(doc, { from, to, text: code, origin });
    }
    function rebaseHistSelSingle(pos, from, to, diff) {
      if (to < pos.line) {
        pos.line += diff;
      } else if (from < pos.line) {
        pos.line = from;
        pos.ch = 0;
      }
    }
    function rebaseHistArray(array, from, to, diff) {
      for (var i2 = 0; i2 < array.length; ++i2) {
        var sub = array[i2], ok = true;
        if (sub.ranges) {
          if (!sub.copied) {
            sub = array[i2] = sub.deepCopy();
            sub.copied = true;
          }
          for (var j = 0; j < sub.ranges.length; j++) {
            rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
            rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
          }
          continue;
        }
        for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
          var cur = sub.changes[j$1];
          if (to < cur.from.line) {
            cur.from = Pos(cur.from.line + diff, cur.from.ch);
            cur.to = Pos(cur.to.line + diff, cur.to.ch);
          } else if (from <= cur.to.line) {
            ok = false;
            break;
          }
        }
        if (!ok) {
          array.splice(0, i2 + 1);
          i2 = 0;
        }
      }
    }
    function rebaseHist(hist, change) {
      var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
      rebaseHistArray(hist.done, from, to, diff);
      rebaseHistArray(hist.undone, from, to, diff);
    }
    function changeLine(doc, handle, changeType, op) {
      var no = handle, line = handle;
      if (typeof handle == "number") {
        line = getLine(doc, clipLine(doc, handle));
      } else {
        no = lineNo(handle);
      }
      if (no == null) {
        return null;
      }
      if (op(line, no) && doc.cm) {
        regLineChange(doc.cm, no, changeType);
      }
      return line;
    }
    function LeafChunk(lines) {
      this.lines = lines;
      this.parent = null;
      var height = 0;
      for (var i2 = 0; i2 < lines.length; ++i2) {
        lines[i2].parent = this;
        height += lines[i2].height;
      }
      this.height = height;
    }
    LeafChunk.prototype = {
      chunkSize: function() {
        return this.lines.length;
      },
      removeInner: function(at, n) {
        for (var i2 = at, e = at + n; i2 < e; ++i2) {
          var line = this.lines[i2];
          this.height -= line.height;
          cleanUpLine(line);
          signalLater(line, "delete");
        }
        this.lines.splice(at, n);
      },
      collapse: function(lines) {
        lines.push.apply(lines, this.lines);
      },
      insertInner: function(at, lines, height) {
        this.height += height;
        this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
        for (var i2 = 0; i2 < lines.length; ++i2) {
          lines[i2].parent = this;
        }
      },
      iterN: function(at, n, op) {
        for (var e = at + n; at < e; ++at) {
          if (op(this.lines[at])) {
            return true;
          }
        }
      }
    };
    function BranchChunk(children) {
      this.children = children;
      var size = 0, height = 0;
      for (var i2 = 0; i2 < children.length; ++i2) {
        var ch = children[i2];
        size += ch.chunkSize();
        height += ch.height;
        ch.parent = this;
      }
      this.size = size;
      this.height = height;
      this.parent = null;
    }
    BranchChunk.prototype = {
      chunkSize: function() {
        return this.size;
      },
      removeInner: function(at, n) {
        this.size -= n;
        for (var i2 = 0; i2 < this.children.length; ++i2) {
          var child = this.children[i2], sz = child.chunkSize();
          if (at < sz) {
            var rm = Math.min(n, sz - at), oldHeight = child.height;
            child.removeInner(at, rm);
            this.height -= oldHeight - child.height;
            if (sz == rm) {
              this.children.splice(i2--, 1);
              child.parent = null;
            }
            if ((n -= rm) == 0) {
              break;
            }
            at = 0;
          } else {
            at -= sz;
          }
        }
        if (this.size - n < 25 && (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
          var lines = [];
          this.collapse(lines);
          this.children = [new LeafChunk(lines)];
          this.children[0].parent = this;
        }
      },
      collapse: function(lines) {
        for (var i2 = 0; i2 < this.children.length; ++i2) {
          this.children[i2].collapse(lines);
        }
      },
      insertInner: function(at, lines, height) {
        this.size += lines.length;
        this.height += height;
        for (var i2 = 0; i2 < this.children.length; ++i2) {
          var child = this.children[i2], sz = child.chunkSize();
          if (at <= sz) {
            child.insertInner(at, lines, height);
            if (child.lines && child.lines.length > 50) {
              var remaining = child.lines.length % 25 + 25;
              for (var pos = remaining; pos < child.lines.length; ) {
                var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
                child.height -= leaf.height;
                this.children.splice(++i2, 0, leaf);
                leaf.parent = this;
              }
              child.lines = child.lines.slice(0, remaining);
              this.maybeSpill();
            }
            break;
          }
          at -= sz;
        }
      },
      maybeSpill: function() {
        if (this.children.length <= 10) {
          return;
        }
        var me = this;
        do {
          var spilled = me.children.splice(me.children.length - 5, 5);
          var sibling = new BranchChunk(spilled);
          if (!me.parent) {
            var copy = new BranchChunk(me.children);
            copy.parent = me;
            me.children = [copy, sibling];
            me = copy;
          } else {
            me.size -= sibling.size;
            me.height -= sibling.height;
            var myIndex = indexOf(me.parent.children, me);
            me.parent.children.splice(myIndex + 1, 0, sibling);
          }
          sibling.parent = me.parent;
        } while (me.children.length > 10);
        me.parent.maybeSpill();
      },
      iterN: function(at, n, op) {
        for (var i2 = 0; i2 < this.children.length; ++i2) {
          var child = this.children[i2], sz = child.chunkSize();
          if (at < sz) {
            var used = Math.min(n, sz - at);
            if (child.iterN(at, used, op)) {
              return true;
            }
            if ((n -= used) == 0) {
              break;
            }
            at = 0;
          } else {
            at -= sz;
          }
        }
      }
    };
    var LineWidget = function(doc, node, options) {
      if (options) {
        for (var opt in options) {
          if (options.hasOwnProperty(opt)) {
            this[opt] = options[opt];
          }
        }
      }
      this.doc = doc;
      this.node = node;
    };
    LineWidget.prototype.clear = function() {
      var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
      if (no == null || !ws) {
        return;
      }
      for (var i2 = 0; i2 < ws.length; ++i2) {
        if (ws[i2] == this) {
          ws.splice(i2--, 1);
        }
      }
      if (!ws.length) {
        line.widgets = null;
      }
      var height = widgetHeight(this);
      updateLineHeight(line, Math.max(0, line.height - height));
      if (cm) {
        runInOp(cm, function() {
          adjustScrollWhenAboveVisible(cm, line, -height);
          regLineChange(cm, no, "widget");
        });
        signalLater(cm, "lineWidgetCleared", cm, this, no);
      }
    };
    LineWidget.prototype.changed = function() {
      var this$1$1 = this;
      var oldH = this.height, cm = this.doc.cm, line = this.line;
      this.height = null;
      var diff = widgetHeight(this) - oldH;
      if (!diff) {
        return;
      }
      if (!lineIsHidden(this.doc, line)) {
        updateLineHeight(line, line.height + diff);
      }
      if (cm) {
        runInOp(cm, function() {
          cm.curOp.forceUpdate = true;
          adjustScrollWhenAboveVisible(cm, line, diff);
          signalLater(cm, "lineWidgetChanged", cm, this$1$1, lineNo(line));
        });
      }
    };
    eventMixin(LineWidget);
    function adjustScrollWhenAboveVisible(cm, line, diff) {
      if (heightAtLine(line) < (cm.curOp && cm.curOp.scrollTop || cm.doc.scrollTop)) {
        addToScrollTop(cm, diff);
      }
    }
    function addLineWidget(doc, handle, node, options) {
      var widget = new LineWidget(doc, node, options);
      var cm = doc.cm;
      if (cm && widget.noHScroll) {
        cm.display.alignWidgets = true;
      }
      changeLine(doc, handle, "widget", function(line) {
        var widgets = line.widgets || (line.widgets = []);
        if (widget.insertAt == null) {
          widgets.push(widget);
        } else {
          widgets.splice(Math.min(widgets.length, Math.max(0, widget.insertAt)), 0, widget);
        }
        widget.line = line;
        if (cm && !lineIsHidden(doc, line)) {
          var aboveVisible = heightAtLine(line) < doc.scrollTop;
          updateLineHeight(line, line.height + widgetHeight(widget));
          if (aboveVisible) {
            addToScrollTop(cm, widget.height);
          }
          cm.curOp.forceUpdate = true;
        }
        return true;
      });
      if (cm) {
        signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle));
      }
      return widget;
    }
    var nextMarkerId = 0;
    var TextMarker = function(doc, type) {
      this.lines = [];
      this.type = type;
      this.doc = doc;
      this.id = ++nextMarkerId;
    };
    TextMarker.prototype.clear = function() {
      if (this.explicitlyCleared) {
        return;
      }
      var cm = this.doc.cm, withOp = cm && !cm.curOp;
      if (withOp) {
        startOperation(cm);
      }
      if (hasHandler(this, "clear")) {
        var found = this.find();
        if (found) {
          signalLater(this, "clear", found.from, found.to);
        }
      }
      var min = null, max = null;
      for (var i2 = 0; i2 < this.lines.length; ++i2) {
        var line = this.lines[i2];
        var span = getMarkedSpanFor(line.markedSpans, this);
        if (cm && !this.collapsed) {
          regLineChange(cm, lineNo(line), "text");
        } else if (cm) {
          if (span.to != null) {
            max = lineNo(line);
          }
          if (span.from != null) {
            min = lineNo(line);
          }
        }
        line.markedSpans = removeMarkedSpan(line.markedSpans, span);
        if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm) {
          updateLineHeight(line, textHeight(cm.display));
        }
      }
      if (cm && this.collapsed && !cm.options.lineWrapping) {
        for (var i$12 = 0; i$12 < this.lines.length; ++i$12) {
          var visual = visualLine(this.lines[i$12]), len = lineLength(visual);
          if (len > cm.display.maxLineLength) {
            cm.display.maxLine = visual;
            cm.display.maxLineLength = len;
            cm.display.maxLineChanged = true;
          }
        }
      }
      if (min != null && cm && this.collapsed) {
        regChange(cm, min, max + 1);
      }
      this.lines.length = 0;
      this.explicitlyCleared = true;
      if (this.atomic && this.doc.cantEdit) {
        this.doc.cantEdit = false;
        if (cm) {
          reCheckSelection(cm.doc);
        }
      }
      if (cm) {
        signalLater(cm, "markerCleared", cm, this, min, max);
      }
      if (withOp) {
        endOperation(cm);
      }
      if (this.parent) {
        this.parent.clear();
      }
    };
    TextMarker.prototype.find = function(side, lineObj) {
      if (side == null && this.type == "bookmark") {
        side = 1;
      }
      var from, to;
      for (var i2 = 0; i2 < this.lines.length; ++i2) {
        var line = this.lines[i2];
        var span = getMarkedSpanFor(line.markedSpans, this);
        if (span.from != null) {
          from = Pos(lineObj ? line : lineNo(line), span.from);
          if (side == -1) {
            return from;
          }
        }
        if (span.to != null) {
          to = Pos(lineObj ? line : lineNo(line), span.to);
          if (side == 1) {
            return to;
          }
        }
      }
      return from && { from, to };
    };
    TextMarker.prototype.changed = function() {
      var this$1$1 = this;
      var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
      if (!pos || !cm) {
        return;
      }
      runInOp(cm, function() {
        var line = pos.line, lineN = lineNo(pos.line);
        var view = findViewForLine(cm, lineN);
        if (view) {
          clearLineMeasurementCacheFor(view);
          cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
        }
        cm.curOp.updateMaxLine = true;
        if (!lineIsHidden(widget.doc, line) && widget.height != null) {
          var oldHeight = widget.height;
          widget.height = null;
          var dHeight = widgetHeight(widget) - oldHeight;
          if (dHeight) {
            updateLineHeight(line, line.height + dHeight);
          }
        }
        signalLater(cm, "markerChanged", cm, this$1$1);
      });
    };
    TextMarker.prototype.attachLine = function(line) {
      if (!this.lines.length && this.doc.cm) {
        var op = this.doc.cm.curOp;
        if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1) {
          (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
        }
      }
      this.lines.push(line);
    };
    TextMarker.prototype.detachLine = function(line) {
      this.lines.splice(indexOf(this.lines, line), 1);
      if (!this.lines.length && this.doc.cm) {
        var op = this.doc.cm.curOp;
        (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
      }
    };
    eventMixin(TextMarker);
    function markText(doc, from, to, options, type) {
      if (options && options.shared) {
        return markTextShared(doc, from, to, options, type);
      }
      if (doc.cm && !doc.cm.curOp) {
        return operation(doc.cm, markText)(doc, from, to, options, type);
      }
      var marker = new TextMarker(doc, type), diff = cmp(from, to);
      if (options) {
        copyObj(options, marker, false);
      }
      if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false) {
        return marker;
      }
      if (marker.replacedWith) {
        marker.collapsed = true;
        marker.widgetNode = eltP("span", [marker.replacedWith], "CodeMirror-widget");
        if (!options.handleMouseEvents) {
          marker.widgetNode.setAttribute("cm-ignore-events", "true");
        }
        if (options.insertLeft) {
          marker.widgetNode.insertLeft = true;
        }
      }
      if (marker.collapsed) {
        if (conflictingCollapsedRange(doc, from.line, from, to, marker) || from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker)) {
          throw new Error("Inserting collapsed marker partially overlapping an existing one");
        }
        seeCollapsedSpans();
      }
      if (marker.addToHistory) {
        addChangeToHistory(doc, { from, to, origin: "markText" }, doc.sel, NaN);
      }
      var curLine = from.line, cm = doc.cm, updateMaxLine;
      doc.iter(curLine, to.line + 1, function(line) {
        if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine) {
          updateMaxLine = true;
        }
        if (marker.collapsed && curLine != from.line) {
          updateLineHeight(line, 0);
        }
        addMarkedSpan(line, new MarkedSpan(marker, curLine == from.line ? from.ch : null, curLine == to.line ? to.ch : null), doc.cm && doc.cm.curOp);
        ++curLine;
      });
      if (marker.collapsed) {
        doc.iter(from.line, to.line + 1, function(line) {
          if (lineIsHidden(doc, line)) {
            updateLineHeight(line, 0);
          }
        });
      }
      if (marker.clearOnEnter) {
        on(marker, "beforeCursorEnter", function() {
          return marker.clear();
        });
      }
      if (marker.readOnly) {
        seeReadOnlySpans();
        if (doc.history.done.length || doc.history.undone.length) {
          doc.clearHistory();
        }
      }
      if (marker.collapsed) {
        marker.id = ++nextMarkerId;
        marker.atomic = true;
      }
      if (cm) {
        if (updateMaxLine) {
          cm.curOp.updateMaxLine = true;
        }
        if (marker.collapsed) {
          regChange(cm, from.line, to.line + 1);
        } else if (marker.className || marker.startStyle || marker.endStyle || marker.css || marker.attributes || marker.title) {
          for (var i2 = from.line; i2 <= to.line; i2++) {
            regLineChange(cm, i2, "text");
          }
        }
        if (marker.atomic) {
          reCheckSelection(cm.doc);
        }
        signalLater(cm, "markerAdded", cm, marker);
      }
      return marker;
    }
    var SharedTextMarker = function(markers, primary) {
      this.markers = markers;
      this.primary = primary;
      for (var i2 = 0; i2 < markers.length; ++i2) {
        markers[i2].parent = this;
      }
    };
    SharedTextMarker.prototype.clear = function() {
      if (this.explicitlyCleared) {
        return;
      }
      this.explicitlyCleared = true;
      for (var i2 = 0; i2 < this.markers.length; ++i2) {
        this.markers[i2].clear();
      }
      signalLater(this, "clear");
    };
    SharedTextMarker.prototype.find = function(side, lineObj) {
      return this.primary.find(side, lineObj);
    };
    eventMixin(SharedTextMarker);
    function markTextShared(doc, from, to, options, type) {
      options = copyObj(options);
      options.shared = false;
      var markers = [markText(doc, from, to, options, type)], primary = markers[0];
      var widget = options.widgetNode;
      linkedDocs(doc, function(doc2) {
        if (widget) {
          options.widgetNode = widget.cloneNode(true);
        }
        markers.push(markText(doc2, clipPos(doc2, from), clipPos(doc2, to), options, type));
        for (var i2 = 0; i2 < doc2.linked.length; ++i2) {
          if (doc2.linked[i2].isParent) {
            return;
          }
        }
        primary = lst(markers);
      });
      return new SharedTextMarker(markers, primary);
    }
    function findSharedMarkers(doc) {
      return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function(m) {
        return m.parent;
      });
    }
    function copySharedMarkers(doc, markers) {
      for (var i2 = 0; i2 < markers.length; i2++) {
        var marker = markers[i2], pos = marker.find();
        var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
        if (cmp(mFrom, mTo)) {
          var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
          marker.markers.push(subMark);
          subMark.parent = marker;
        }
      }
    }
    function detachSharedMarkers(markers) {
      var loop = function(i3) {
        var marker = markers[i3], linked = [marker.primary.doc];
        linkedDocs(marker.primary.doc, function(d) {
          return linked.push(d);
        });
        for (var j = 0; j < marker.markers.length; j++) {
          var subMarker = marker.markers[j];
          if (indexOf(linked, subMarker.doc) == -1) {
            subMarker.parent = null;
            marker.markers.splice(j--, 1);
          }
        }
      };
      for (var i2 = 0; i2 < markers.length; i2++)
        loop(i2);
    }
    var nextDocId = 0;
    var Doc = function(text, mode, firstLine, lineSep, direction) {
      if (!(this instanceof Doc)) {
        return new Doc(text, mode, firstLine, lineSep, direction);
      }
      if (firstLine == null) {
        firstLine = 0;
      }
      BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
      this.first = firstLine;
      this.scrollTop = this.scrollLeft = 0;
      this.cantEdit = false;
      this.cleanGeneration = 1;
      this.modeFrontier = this.highlightFrontier = firstLine;
      var start = Pos(firstLine, 0);
      this.sel = simpleSelection(start);
      this.history = new History(null);
      this.id = ++nextDocId;
      this.modeOption = mode;
      this.lineSep = lineSep;
      this.direction = direction == "rtl" ? "rtl" : "ltr";
      this.extend = false;
      if (typeof text == "string") {
        text = this.splitLines(text);
      }
      updateDoc(this, { from: start, to: start, text });
      setSelection(this, simpleSelection(start), sel_dontScroll);
    };
    Doc.prototype = createObj(BranchChunk.prototype, {
      constructor: Doc,
      iter: function(from, to, op) {
        if (op) {
          this.iterN(from - this.first, to - from, op);
        } else {
          this.iterN(this.first, this.first + this.size, from);
        }
      },
      insert: function(at, lines) {
        var height = 0;
        for (var i2 = 0; i2 < lines.length; ++i2) {
          height += lines[i2].height;
        }
        this.insertInner(at - this.first, lines, height);
      },
      remove: function(at, n) {
        this.removeInner(at - this.first, n);
      },
      getValue: function(lineSep) {
        var lines = getLines(this, this.first, this.first + this.size);
        if (lineSep === false) {
          return lines;
        }
        return lines.join(lineSep || this.lineSeparator());
      },
      setValue: docMethodOp(function(code) {
        var top = Pos(this.first, 0), last = this.first + this.size - 1;
        makeChange(this, {
          from: top,
          to: Pos(last, getLine(this, last).text.length),
          text: this.splitLines(code),
          origin: "setValue",
          full: true
        }, true);
        if (this.cm) {
          scrollToCoords(this.cm, 0, 0);
        }
        setSelection(this, simpleSelection(top), sel_dontScroll);
      }),
      replaceRange: function(code, from, to, origin) {
        from = clipPos(this, from);
        to = to ? clipPos(this, to) : from;
        replaceRange(this, code, from, to, origin);
      },
      getRange: function(from, to, lineSep) {
        var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
        if (lineSep === false) {
          return lines;
        }
        if (lineSep === "") {
          return lines.join("");
        }
        return lines.join(lineSep || this.lineSeparator());
      },
      getLine: function(line) {
        var l = this.getLineHandle(line);
        return l && l.text;
      },
      getLineHandle: function(line) {
        if (isLine(this, line)) {
          return getLine(this, line);
        }
      },
      getLineNumber: function(line) {
        return lineNo(line);
      },
      getLineHandleVisualStart: function(line) {
        if (typeof line == "number") {
          line = getLine(this, line);
        }
        return visualLine(line);
      },
      lineCount: function() {
        return this.size;
      },
      firstLine: function() {
        return this.first;
      },
      lastLine: function() {
        return this.first + this.size - 1;
      },
      clipPos: function(pos) {
        return clipPos(this, pos);
      },
      getCursor: function(start) {
        var range2 = this.sel.primary(), pos;
        if (start == null || start == "head") {
          pos = range2.head;
        } else if (start == "anchor") {
          pos = range2.anchor;
        } else if (start == "end" || start == "to" || start === false) {
          pos = range2.to();
        } else {
          pos = range2.from();
        }
        return pos;
      },
      listSelections: function() {
        return this.sel.ranges;
      },
      somethingSelected: function() {
        return this.sel.somethingSelected();
      },
      setCursor: docMethodOp(function(line, ch, options) {
        setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
      }),
      setSelection: docMethodOp(function(anchor, head, options) {
        setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
      }),
      extendSelection: docMethodOp(function(head, other, options) {
        extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
      }),
      extendSelections: docMethodOp(function(heads, options) {
        extendSelections(this, clipPosArray(this, heads), options);
      }),
      extendSelectionsBy: docMethodOp(function(f, options) {
        var heads = map(this.sel.ranges, f);
        extendSelections(this, clipPosArray(this, heads), options);
      }),
      setSelections: docMethodOp(function(ranges, primary, options) {
        if (!ranges.length) {
          return;
        }
        var out = [];
        for (var i2 = 0; i2 < ranges.length; i2++) {
          out[i2] = new Range(clipPos(this, ranges[i2].anchor), clipPos(this, ranges[i2].head || ranges[i2].anchor));
        }
        if (primary == null) {
          primary = Math.min(ranges.length - 1, this.sel.primIndex);
        }
        setSelection(this, normalizeSelection(this.cm, out, primary), options);
      }),
      addSelection: docMethodOp(function(anchor, head, options) {
        var ranges = this.sel.ranges.slice(0);
        ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
        setSelection(this, normalizeSelection(this.cm, ranges, ranges.length - 1), options);
      }),
      getSelection: function(lineSep) {
        var ranges = this.sel.ranges, lines;
        for (var i2 = 0; i2 < ranges.length; i2++) {
          var sel = getBetween(this, ranges[i2].from(), ranges[i2].to());
          lines = lines ? lines.concat(sel) : sel;
        }
        if (lineSep === false) {
          return lines;
        } else {
          return lines.join(lineSep || this.lineSeparator());
        }
      },
      getSelections: function(lineSep) {
        var parts = [], ranges = this.sel.ranges;
        for (var i2 = 0; i2 < ranges.length; i2++) {
          var sel = getBetween(this, ranges[i2].from(), ranges[i2].to());
          if (lineSep !== false) {
            sel = sel.join(lineSep || this.lineSeparator());
          }
          parts[i2] = sel;
        }
        return parts;
      },
      replaceSelection: function(code, collapse, origin) {
        var dup = [];
        for (var i2 = 0; i2 < this.sel.ranges.length; i2++) {
          dup[i2] = code;
        }
        this.replaceSelections(dup, collapse, origin || "+input");
      },
      replaceSelections: docMethodOp(function(code, collapse, origin) {
        var changes = [], sel = this.sel;
        for (var i2 = 0; i2 < sel.ranges.length; i2++) {
          var range2 = sel.ranges[i2];
          changes[i2] = { from: range2.from(), to: range2.to(), text: this.splitLines(code[i2]), origin };
        }
        var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
        for (var i$12 = changes.length - 1; i$12 >= 0; i$12--) {
          makeChange(this, changes[i$12]);
        }
        if (newSel) {
          setSelectionReplaceHistory(this, newSel);
        } else if (this.cm) {
          ensureCursorVisible(this.cm);
        }
      }),
      undo: docMethodOp(function() {
        makeChangeFromHistory(this, "undo");
      }),
      redo: docMethodOp(function() {
        makeChangeFromHistory(this, "redo");
      }),
      undoSelection: docMethodOp(function() {
        makeChangeFromHistory(this, "undo", true);
      }),
      redoSelection: docMethodOp(function() {
        makeChangeFromHistory(this, "redo", true);
      }),
      setExtending: function(val) {
        this.extend = val;
      },
      getExtending: function() {
        return this.extend;
      },
      historySize: function() {
        var hist = this.history, done = 0, undone = 0;
        for (var i2 = 0; i2 < hist.done.length; i2++) {
          if (!hist.done[i2].ranges) {
            ++done;
          }
        }
        for (var i$12 = 0; i$12 < hist.undone.length; i$12++) {
          if (!hist.undone[i$12].ranges) {
            ++undone;
          }
        }
        return { undo: done, redo: undone };
      },
      clearHistory: function() {
        var this$1$1 = this;
        this.history = new History(this.history);
        linkedDocs(this, function(doc) {
          return doc.history = this$1$1.history;
        }, true);
      },
      markClean: function() {
        this.cleanGeneration = this.changeGeneration(true);
      },
      changeGeneration: function(forceSplit) {
        if (forceSplit) {
          this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null;
        }
        return this.history.generation;
      },
      isClean: function(gen) {
        return this.history.generation == (gen || this.cleanGeneration);
      },
      getHistory: function() {
        return {
          done: copyHistoryArray(this.history.done),
          undone: copyHistoryArray(this.history.undone)
        };
      },
      setHistory: function(histData) {
        var hist = this.history = new History(this.history);
        hist.done = copyHistoryArray(histData.done.slice(0), null, true);
        hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
      },
      setGutterMarker: docMethodOp(function(line, gutterID, value) {
        return changeLine(this, line, "gutter", function(line2) {
          var markers = line2.gutterMarkers || (line2.gutterMarkers = {});
          markers[gutterID] = value;
          if (!value && isEmpty(markers)) {
            line2.gutterMarkers = null;
          }
          return true;
        });
      }),
      clearGutter: docMethodOp(function(gutterID) {
        var this$1$1 = this;
        this.iter(function(line) {
          if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
            changeLine(this$1$1, line, "gutter", function() {
              line.gutterMarkers[gutterID] = null;
              if (isEmpty(line.gutterMarkers)) {
                line.gutterMarkers = null;
              }
              return true;
            });
          }
        });
      }),
      lineInfo: function(line) {
        var n;
        if (typeof line == "number") {
          if (!isLine(this, line)) {
            return null;
          }
          n = line;
          line = getLine(this, line);
          if (!line) {
            return null;
          }
        } else {
          n = lineNo(line);
          if (n == null) {
            return null;
          }
        }
        return {
          line: n,
          handle: line,
          text: line.text,
          gutterMarkers: line.gutterMarkers,
          textClass: line.textClass,
          bgClass: line.bgClass,
          wrapClass: line.wrapClass,
          widgets: line.widgets
        };
      },
      addLineClass: docMethodOp(function(handle, where, cls) {
        return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
          var prop2 = where == "text" ? "textClass" : where == "background" ? "bgClass" : where == "gutter" ? "gutterClass" : "wrapClass";
          if (!line[prop2]) {
            line[prop2] = cls;
          } else if (classTest(cls).test(line[prop2])) {
            return false;
          } else {
            line[prop2] += " " + cls;
          }
          return true;
        });
      }),
      removeLineClass: docMethodOp(function(handle, where, cls) {
        return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
          var prop2 = where == "text" ? "textClass" : where == "background" ? "bgClass" : where == "gutter" ? "gutterClass" : "wrapClass";
          var cur = line[prop2];
          if (!cur) {
            return false;
          } else if (cls == null) {
            line[prop2] = null;
          } else {
            var found = cur.match(classTest(cls));
            if (!found) {
              return false;
            }
            var end = found.index + found[0].length;
            line[prop2] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
          }
          return true;
        });
      }),
      addLineWidget: docMethodOp(function(handle, node, options) {
        return addLineWidget(this, handle, node, options);
      }),
      removeLineWidget: function(widget) {
        widget.clear();
      },
      markText: function(from, to, options) {
        return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range");
      },
      setBookmark: function(pos, options) {
        var realOpts = {
          replacedWith: options && (options.nodeType == null ? options.widget : options),
          insertLeft: options && options.insertLeft,
          clearWhenEmpty: false,
          shared: options && options.shared,
          handleMouseEvents: options && options.handleMouseEvents
        };
        pos = clipPos(this, pos);
        return markText(this, pos, pos, realOpts, "bookmark");
      },
      findMarksAt: function(pos) {
        pos = clipPos(this, pos);
        var markers = [], spans = getLine(this, pos.line).markedSpans;
        if (spans) {
          for (var i2 = 0; i2 < spans.length; ++i2) {
            var span = spans[i2];
            if ((span.from == null || span.from <= pos.ch) && (span.to == null || span.to >= pos.ch)) {
              markers.push(span.marker.parent || span.marker);
            }
          }
        }
        return markers;
      },
      findMarks: function(from, to, filter) {
        from = clipPos(this, from);
        to = clipPos(this, to);
        var found = [], lineNo2 = from.line;
        this.iter(from.line, to.line + 1, function(line) {
          var spans = line.markedSpans;
          if (spans) {
            for (var i2 = 0; i2 < spans.length; i2++) {
              var span = spans[i2];
              if (!(span.to != null && lineNo2 == from.line && from.ch >= span.to || span.from == null && lineNo2 != from.line || span.from != null && lineNo2 == to.line && span.from >= to.ch) && (!filter || filter(span.marker))) {
                found.push(span.marker.parent || span.marker);
              }
            }
          }
          ++lineNo2;
        });
        return found;
      },
      getAllMarks: function() {
        var markers = [];
        this.iter(function(line) {
          var sps = line.markedSpans;
          if (sps) {
            for (var i2 = 0; i2 < sps.length; ++i2) {
              if (sps[i2].from != null) {
                markers.push(sps[i2].marker);
              }
            }
          }
        });
        return markers;
      },
      posFromIndex: function(off2) {
        var ch, lineNo2 = this.first, sepSize = this.lineSeparator().length;
        this.iter(function(line) {
          var sz = line.text.length + sepSize;
          if (sz > off2) {
            ch = off2;
            return true;
          }
          off2 -= sz;
          ++lineNo2;
        });
        return clipPos(this, Pos(lineNo2, ch));
      },
      indexFromPos: function(coords) {
        coords = clipPos(this, coords);
        var index = coords.ch;
        if (coords.line < this.first || coords.ch < 0) {
          return 0;
        }
        var sepSize = this.lineSeparator().length;
        this.iter(this.first, coords.line, function(line) {
          index += line.text.length + sepSize;
        });
        return index;
      },
      copy: function(copyHistory) {
        var doc = new Doc(getLines(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
        doc.scrollTop = this.scrollTop;
        doc.scrollLeft = this.scrollLeft;
        doc.sel = this.sel;
        doc.extend = false;
        if (copyHistory) {
          doc.history.undoDepth = this.history.undoDepth;
          doc.setHistory(this.getHistory());
        }
        return doc;
      },
      linkedDoc: function(options) {
        if (!options) {
          options = {};
        }
        var from = this.first, to = this.first + this.size;
        if (options.from != null && options.from > from) {
          from = options.from;
        }
        if (options.to != null && options.to < to) {
          to = options.to;
        }
        var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction);
        if (options.sharedHist) {
          copy.history = this.history;
        }
        (this.linked || (this.linked = [])).push({ doc: copy, sharedHist: options.sharedHist });
        copy.linked = [{ doc: this, isParent: true, sharedHist: options.sharedHist }];
        copySharedMarkers(copy, findSharedMarkers(this));
        return copy;
      },
      unlinkDoc: function(other) {
        if (other instanceof CodeMirror2) {
          other = other.doc;
        }
        if (this.linked) {
          for (var i2 = 0; i2 < this.linked.length; ++i2) {
            var link = this.linked[i2];
            if (link.doc != other) {
              continue;
            }
            this.linked.splice(i2, 1);
            other.unlinkDoc(this);
            detachSharedMarkers(findSharedMarkers(this));
            break;
          }
        }
        if (other.history == this.history) {
          var splitIds = [other.id];
          linkedDocs(other, function(doc) {
            return splitIds.push(doc.id);
          }, true);
          other.history = new History(null);
          other.history.done = copyHistoryArray(this.history.done, splitIds);
          other.history.undone = copyHistoryArray(this.history.undone, splitIds);
        }
      },
      iterLinkedDocs: function(f) {
        linkedDocs(this, f);
      },
      getMode: function() {
        return this.mode;
      },
      getEditor: function() {
        return this.cm;
      },
      splitLines: function(str) {
        if (this.lineSep) {
          return str.split(this.lineSep);
        }
        return splitLinesAuto(str);
      },
      lineSeparator: function() {
        return this.lineSep || "\n";
      },
      setDirection: docMethodOp(function(dir) {
        if (dir != "rtl") {
          dir = "ltr";
        }
        if (dir == this.direction) {
          return;
        }
        this.direction = dir;
        this.iter(function(line) {
          return line.order = null;
        });
        if (this.cm) {
          directionChanged(this.cm);
        }
      })
    });
    Doc.prototype.eachLine = Doc.prototype.iter;
    var lastDrop = 0;
    function onDrop(e) {
      var cm = this;
      clearDragCursor(cm);
      if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) {
        return;
      }
      e_preventDefault(e);
      if (ie) {
        lastDrop = +new Date();
      }
      var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
      if (!pos || cm.isReadOnly()) {
        return;
      }
      if (files && files.length && window.FileReader && window.File) {
        var n = files.length, text = Array(n), read = 0;
        var markAsReadAndPasteIfAllFilesAreRead = function() {
          if (++read == n) {
            operation(cm, function() {
              pos = clipPos(cm.doc, pos);
              var change = {
                from: pos,
                to: pos,
                text: cm.doc.splitLines(text.filter(function(t) {
                  return t != null;
                }).join(cm.doc.lineSeparator())),
                origin: "paste"
              };
              makeChange(cm.doc, change);
              setSelectionReplaceHistory(cm.doc, simpleSelection(clipPos(cm.doc, pos), clipPos(cm.doc, changeEnd(change))));
            })();
          }
        };
        var readTextFromFile = function(file, i3) {
          if (cm.options.allowDropFileTypes && indexOf(cm.options.allowDropFileTypes, file.type) == -1) {
            markAsReadAndPasteIfAllFilesAreRead();
            return;
          }
          var reader = new FileReader();
          reader.onerror = function() {
            return markAsReadAndPasteIfAllFilesAreRead();
          };
          reader.onload = function() {
            var content = reader.result;
            if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) {
              markAsReadAndPasteIfAllFilesAreRead();
              return;
            }
            text[i3] = content;
            markAsReadAndPasteIfAllFilesAreRead();
          };
          reader.readAsText(file);
        };
        for (var i2 = 0; i2 < files.length; i2++) {
          readTextFromFile(files[i2], i2);
        }
      } else {
        if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
          cm.state.draggingText(e);
          setTimeout(function() {
            return cm.display.input.focus();
          }, 20);
          return;
        }
        try {
          var text$1 = e.dataTransfer.getData("Text");
          if (text$1) {
            var selected;
            if (cm.state.draggingText && !cm.state.draggingText.copy) {
              selected = cm.listSelections();
            }
            setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
            if (selected) {
              for (var i$12 = 0; i$12 < selected.length; ++i$12) {
                replaceRange(cm.doc, "", selected[i$12].anchor, selected[i$12].head, "drag");
              }
            }
            cm.replaceSelection(text$1, "around", "paste");
            cm.display.input.focus();
          }
        } catch (e$1) {
        }
      }
    }
    function onDragStart(cm, e) {
      if (ie && (!cm.state.draggingText || +new Date() - lastDrop < 100)) {
        e_stop(e);
        return;
      }
      if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) {
        return;
      }
      e.dataTransfer.setData("Text", cm.getSelection());
      e.dataTransfer.effectAllowed = "copyMove";
      if (e.dataTransfer.setDragImage && !safari) {
        var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
        img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
        if (presto) {
          img.width = img.height = 1;
          cm.display.wrapper.appendChild(img);
          img._top = img.offsetTop;
        }
        e.dataTransfer.setDragImage(img, 0, 0);
        if (presto) {
          img.parentNode.removeChild(img);
        }
      }
    }
    function onDragOver(cm, e) {
      var pos = posFromMouse(cm, e);
      if (!pos) {
        return;
      }
      var frag = document.createDocumentFragment();
      drawSelectionCursor(cm, pos, frag);
      if (!cm.display.dragCursor) {
        cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
        cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
      }
      removeChildrenAndAdd(cm.display.dragCursor, frag);
    }
    function clearDragCursor(cm) {
      if (cm.display.dragCursor) {
        cm.display.lineSpace.removeChild(cm.display.dragCursor);
        cm.display.dragCursor = null;
      }
    }
    function forEachCodeMirror(f) {
      if (!document.getElementsByClassName) {
        return;
      }
      var byClass = document.getElementsByClassName("CodeMirror"), editors = [];
      for (var i2 = 0; i2 < byClass.length; i2++) {
        var cm = byClass[i2].CodeMirror;
        if (cm) {
          editors.push(cm);
        }
      }
      if (editors.length) {
        editors[0].operation(function() {
          for (var i3 = 0; i3 < editors.length; i3++) {
            f(editors[i3]);
          }
        });
      }
    }
    var globalsRegistered = false;
    function ensureGlobalHandlers() {
      if (globalsRegistered) {
        return;
      }
      registerGlobalHandlers();
      globalsRegistered = true;
    }
    function registerGlobalHandlers() {
      var resizeTimer;
      on(window, "resize", function() {
        if (resizeTimer == null) {
          resizeTimer = setTimeout(function() {
            resizeTimer = null;
            forEachCodeMirror(onResize);
          }, 100);
        }
      });
      on(window, "blur", function() {
        return forEachCodeMirror(onBlur);
      });
    }
    function onResize(cm) {
      var d = cm.display;
      d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
      d.scrollbarsClipped = false;
      cm.setSize();
    }
    var keyNames = {
      3: "Pause",
      8: "Backspace",
      9: "Tab",
      13: "Enter",
      16: "Shift",
      17: "Ctrl",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Esc",
      32: "Space",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "Left",
      38: "Up",
      39: "Right",
      40: "Down",
      44: "PrintScrn",
      45: "Insert",
      46: "Delete",
      59: ";",
      61: "=",
      91: "Mod",
      92: "Mod",
      93: "Mod",
      106: "*",
      107: "=",
      109: "-",
      110: ".",
      111: "/",
      145: "ScrollLock",
      173: "-",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'",
      224: "Mod",
      63232: "Up",
      63233: "Down",
      63234: "Left",
      63235: "Right",
      63272: "Delete",
      63273: "Home",
      63275: "End",
      63276: "PageUp",
      63277: "PageDown",
      63302: "Insert"
    };
    for (var i = 0; i < 10; i++) {
      keyNames[i + 48] = keyNames[i + 96] = String(i);
    }
    for (var i$1 = 65; i$1 <= 90; i$1++) {
      keyNames[i$1] = String.fromCharCode(i$1);
    }
    for (var i$2 = 1; i$2 <= 12; i$2++) {
      keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2;
    }
    var keyMap = {};
    keyMap.basic = {
      "Left": "goCharLeft",
      "Right": "goCharRight",
      "Up": "goLineUp",
      "Down": "goLineDown",
      "End": "goLineEnd",
      "Home": "goLineStartSmart",
      "PageUp": "goPageUp",
      "PageDown": "goPageDown",
      "Delete": "delCharAfter",
      "Backspace": "delCharBefore",
      "Shift-Backspace": "delCharBefore",
      "Tab": "defaultTab",
      "Shift-Tab": "indentAuto",
      "Enter": "newlineAndIndent",
      "Insert": "toggleOverwrite",
      "Esc": "singleSelection"
    };
    keyMap.pcDefault = {
      "Ctrl-A": "selectAll",
      "Ctrl-D": "deleteLine",
      "Ctrl-Z": "undo",
      "Shift-Ctrl-Z": "redo",
      "Ctrl-Y": "redo",
      "Ctrl-Home": "goDocStart",
      "Ctrl-End": "goDocEnd",
      "Ctrl-Up": "goLineUp",
      "Ctrl-Down": "goLineDown",
      "Ctrl-Left": "goGroupLeft",
      "Ctrl-Right": "goGroupRight",
      "Alt-Left": "goLineStart",
      "Alt-Right": "goLineEnd",
      "Ctrl-Backspace": "delGroupBefore",
      "Ctrl-Delete": "delGroupAfter",
      "Ctrl-S": "save",
      "Ctrl-F": "find",
      "Ctrl-G": "findNext",
      "Shift-Ctrl-G": "findPrev",
      "Shift-Ctrl-F": "replace",
      "Shift-Ctrl-R": "replaceAll",
      "Ctrl-[": "indentLess",
      "Ctrl-]": "indentMore",
      "Ctrl-U": "undoSelection",
      "Shift-Ctrl-U": "redoSelection",
      "Alt-U": "redoSelection",
      "fallthrough": "basic"
    };
    keyMap.emacsy = {
      "Ctrl-F": "goCharRight",
      "Ctrl-B": "goCharLeft",
      "Ctrl-P": "goLineUp",
      "Ctrl-N": "goLineDown",
      "Ctrl-A": "goLineStart",
      "Ctrl-E": "goLineEnd",
      "Ctrl-V": "goPageDown",
      "Shift-Ctrl-V": "goPageUp",
      "Ctrl-D": "delCharAfter",
      "Ctrl-H": "delCharBefore",
      "Alt-Backspace": "delWordBefore",
      "Ctrl-K": "killLine",
      "Ctrl-T": "transposeChars",
      "Ctrl-O": "openLine"
    };
    keyMap.macDefault = {
      "Cmd-A": "selectAll",
      "Cmd-D": "deleteLine",
      "Cmd-Z": "undo",
      "Shift-Cmd-Z": "redo",
      "Cmd-Y": "redo",
      "Cmd-Home": "goDocStart",
      "Cmd-Up": "goDocStart",
      "Cmd-End": "goDocEnd",
      "Cmd-Down": "goDocEnd",
      "Alt-Left": "goGroupLeft",
      "Alt-Right": "goGroupRight",
      "Cmd-Left": "goLineLeft",
      "Cmd-Right": "goLineRight",
      "Alt-Backspace": "delGroupBefore",
      "Ctrl-Alt-Backspace": "delGroupAfter",
      "Alt-Delete": "delGroupAfter",
      "Cmd-S": "save",
      "Cmd-F": "find",
      "Cmd-G": "findNext",
      "Shift-Cmd-G": "findPrev",
      "Cmd-Alt-F": "replace",
      "Shift-Cmd-Alt-F": "replaceAll",
      "Cmd-[": "indentLess",
      "Cmd-]": "indentMore",
      "Cmd-Backspace": "delWrappedLineLeft",
      "Cmd-Delete": "delWrappedLineRight",
      "Cmd-U": "undoSelection",
      "Shift-Cmd-U": "redoSelection",
      "Ctrl-Up": "goDocStart",
      "Ctrl-Down": "goDocEnd",
      "fallthrough": ["basic", "emacsy"]
    };
    keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;
    function normalizeKeyName(name) {
      var parts = name.split(/-(?!$)/);
      name = parts[parts.length - 1];
      var alt, ctrl, shift, cmd;
      for (var i2 = 0; i2 < parts.length - 1; i2++) {
        var mod = parts[i2];
        if (/^(cmd|meta|m)$/i.test(mod)) {
          cmd = true;
        } else if (/^a(lt)?$/i.test(mod)) {
          alt = true;
        } else if (/^(c|ctrl|control)$/i.test(mod)) {
          ctrl = true;
        } else if (/^s(hift)?$/i.test(mod)) {
          shift = true;
        } else {
          throw new Error("Unrecognized modifier name: " + mod);
        }
      }
      if (alt) {
        name = "Alt-" + name;
      }
      if (ctrl) {
        name = "Ctrl-" + name;
      }
      if (cmd) {
        name = "Cmd-" + name;
      }
      if (shift) {
        name = "Shift-" + name;
      }
      return name;
    }
    function normalizeKeyMap(keymap) {
      var copy = {};
      for (var keyname in keymap) {
        if (keymap.hasOwnProperty(keyname)) {
          var value = keymap[keyname];
          if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) {
            continue;
          }
          if (value == "...") {
            delete keymap[keyname];
            continue;
          }
          var keys = map(keyname.split(" "), normalizeKeyName);
          for (var i2 = 0; i2 < keys.length; i2++) {
            var val = void 0, name = void 0;
            if (i2 == keys.length - 1) {
              name = keys.join(" ");
              val = value;
            } else {
              name = keys.slice(0, i2 + 1).join(" ");
              val = "...";
            }
            var prev = copy[name];
            if (!prev) {
              copy[name] = val;
            } else if (prev != val) {
              throw new Error("Inconsistent bindings for " + name);
            }
          }
          delete keymap[keyname];
        }
      }
      for (var prop2 in copy) {
        keymap[prop2] = copy[prop2];
      }
      return keymap;
    }
    function lookupKey(key, map2, handle, context) {
      map2 = getKeyMap(map2);
      var found = map2.call ? map2.call(key, context) : map2[key];
      if (found === false) {
        return "nothing";
      }
      if (found === "...") {
        return "multi";
      }
      if (found != null && handle(found)) {
        return "handled";
      }
      if (map2.fallthrough) {
        if (Object.prototype.toString.call(map2.fallthrough) != "[object Array]") {
          return lookupKey(key, map2.fallthrough, handle, context);
        }
        for (var i2 = 0; i2 < map2.fallthrough.length; i2++) {
          var result = lookupKey(key, map2.fallthrough[i2], handle, context);
          if (result) {
            return result;
          }
        }
      }
    }
    function isModifierKey(value) {
      var name = typeof value == "string" ? value : keyNames[value.keyCode];
      return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
    }
    function addModifierNames(name, event2, noShift) {
      var base = name;
      if (event2.altKey && base != "Alt") {
        name = "Alt-" + name;
      }
      if ((flipCtrlCmd ? event2.metaKey : event2.ctrlKey) && base != "Ctrl") {
        name = "Ctrl-" + name;
      }
      if ((flipCtrlCmd ? event2.ctrlKey : event2.metaKey) && base != "Mod") {
        name = "Cmd-" + name;
      }
      if (!noShift && event2.shiftKey && base != "Shift") {
        name = "Shift-" + name;
      }
      return name;
    }
    function keyName(event2, noShift) {
      if (presto && event2.keyCode == 34 && event2["char"]) {
        return false;
      }
      var name = keyNames[event2.keyCode];
      if (name == null || event2.altGraphKey) {
        return false;
      }
      if (event2.keyCode == 3 && event2.code) {
        name = event2.code;
      }
      return addModifierNames(name, event2, noShift);
    }
    function getKeyMap(val) {
      return typeof val == "string" ? keyMap[val] : val;
    }
    function deleteNearSelection(cm, compute) {
      var ranges = cm.doc.sel.ranges, kill = [];
      for (var i2 = 0; i2 < ranges.length; i2++) {
        var toKill = compute(ranges[i2]);
        while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
          var replaced = kill.pop();
          if (cmp(replaced.from, toKill.from) < 0) {
            toKill.from = replaced.from;
            break;
          }
        }
        kill.push(toKill);
      }
      runInOp(cm, function() {
        for (var i3 = kill.length - 1; i3 >= 0; i3--) {
          replaceRange(cm.doc, "", kill[i3].from, kill[i3].to, "+delete");
        }
        ensureCursorVisible(cm);
      });
    }
    function moveCharLogically(line, ch, dir) {
      var target = skipExtendingChars(line.text, ch + dir, dir);
      return target < 0 || target > line.text.length ? null : target;
    }
    function moveLogically(line, start, dir) {
      var ch = moveCharLogically(line, start.ch, dir);
      return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before");
    }
    function endOfLine(visually, cm, lineObj, lineNo2, dir) {
      if (visually) {
        if (cm.doc.direction == "rtl") {
          dir = -dir;
        }
        var order = getOrder(lineObj, cm.doc.direction);
        if (order) {
          var part = dir < 0 ? lst(order) : order[0];
          var moveInStorageOrder = dir < 0 == (part.level == 1);
          var sticky = moveInStorageOrder ? "after" : "before";
          var ch;
          if (part.level > 0 || cm.doc.direction == "rtl") {
            var prep = prepareMeasureForLine(cm, lineObj);
            ch = dir < 0 ? lineObj.text.length - 1 : 0;
            var targetTop = measureCharPrepared(cm, prep, ch).top;
            ch = findFirst(function(ch2) {
              return measureCharPrepared(cm, prep, ch2).top == targetTop;
            }, dir < 0 == (part.level == 1) ? part.from : part.to - 1, ch);
            if (sticky == "before") {
              ch = moveCharLogically(lineObj, ch, 1);
            }
          } else {
            ch = dir < 0 ? part.to : part.from;
          }
          return new Pos(lineNo2, ch, sticky);
        }
      }
      return new Pos(lineNo2, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after");
    }
    function moveVisually(cm, line, start, dir) {
      var bidi = getOrder(line, cm.doc.direction);
      if (!bidi) {
        return moveLogically(line, start, dir);
      }
      if (start.ch >= line.text.length) {
        start.ch = line.text.length;
        start.sticky = "before";
      } else if (start.ch <= 0) {
        start.ch = 0;
        start.sticky = "after";
      }
      var partPos = getBidiPartAt(bidi, start.ch, start.sticky), part = bidi[partPos];
      if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
        return moveLogically(line, start, dir);
      }
      var mv = function(pos, dir2) {
        return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir2);
      };
      var prep;
      var getWrappedLineExtent = function(ch2) {
        if (!cm.options.lineWrapping) {
          return { begin: 0, end: line.text.length };
        }
        prep = prep || prepareMeasureForLine(cm, line);
        return wrappedLineExtentChar(cm, line, prep, ch2);
      };
      var wrappedLineExtent2 = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch);
      if (cm.doc.direction == "rtl" || part.level == 1) {
        var moveInStorageOrder = part.level == 1 == dir < 0;
        var ch = mv(start, moveInStorageOrder ? 1 : -1);
        if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent2.begin : ch <= part.to && ch <= wrappedLineExtent2.end)) {
          var sticky = moveInStorageOrder ? "before" : "after";
          return new Pos(start.line, ch, sticky);
        }
      }
      var searchInVisualLine = function(partPos2, dir2, wrappedLineExtent3) {
        var getRes = function(ch3, moveInStorageOrder3) {
          return moveInStorageOrder3 ? new Pos(start.line, mv(ch3, 1), "before") : new Pos(start.line, ch3, "after");
        };
        for (; partPos2 >= 0 && partPos2 < bidi.length; partPos2 += dir2) {
          var part2 = bidi[partPos2];
          var moveInStorageOrder2 = dir2 > 0 == (part2.level != 1);
          var ch2 = moveInStorageOrder2 ? wrappedLineExtent3.begin : mv(wrappedLineExtent3.end, -1);
          if (part2.from <= ch2 && ch2 < part2.to) {
            return getRes(ch2, moveInStorageOrder2);
          }
          ch2 = moveInStorageOrder2 ? part2.from : mv(part2.to, -1);
          if (wrappedLineExtent3.begin <= ch2 && ch2 < wrappedLineExtent3.end) {
            return getRes(ch2, moveInStorageOrder2);
          }
        }
      };
      var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent2);
      if (res) {
        return res;
      }
      var nextCh = dir > 0 ? wrappedLineExtent2.end : mv(wrappedLineExtent2.begin, -1);
      if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
        res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh));
        if (res) {
          return res;
        }
      }
      return null;
    }
    var commands = {
      selectAll,
      singleSelection: function(cm) {
        return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
      },
      killLine: function(cm) {
        return deleteNearSelection(cm, function(range2) {
          if (range2.empty()) {
            var len = getLine(cm.doc, range2.head.line).text.length;
            if (range2.head.ch == len && range2.head.line < cm.lastLine()) {
              return { from: range2.head, to: Pos(range2.head.line + 1, 0) };
            } else {
              return { from: range2.head, to: Pos(range2.head.line, len) };
            }
          } else {
            return { from: range2.from(), to: range2.to() };
          }
        });
      },
      deleteLine: function(cm) {
        return deleteNearSelection(cm, function(range2) {
          return {
            from: Pos(range2.from().line, 0),
            to: clipPos(cm.doc, Pos(range2.to().line + 1, 0))
          };
        });
      },
      delLineLeft: function(cm) {
        return deleteNearSelection(cm, function(range2) {
          return {
            from: Pos(range2.from().line, 0),
            to: range2.from()
          };
        });
      },
      delWrappedLineLeft: function(cm) {
        return deleteNearSelection(cm, function(range2) {
          var top = cm.charCoords(range2.head, "div").top + 5;
          var leftPos = cm.coordsChar({ left: 0, top }, "div");
          return { from: leftPos, to: range2.from() };
        });
      },
      delWrappedLineRight: function(cm) {
        return deleteNearSelection(cm, function(range2) {
          var top = cm.charCoords(range2.head, "div").top + 5;
          var rightPos = cm.coordsChar({ left: cm.display.lineDiv.offsetWidth + 100, top }, "div");
          return { from: range2.from(), to: rightPos };
        });
      },
      undo: function(cm) {
        return cm.undo();
      },
      redo: function(cm) {
        return cm.redo();
      },
      undoSelection: function(cm) {
        return cm.undoSelection();
      },
      redoSelection: function(cm) {
        return cm.redoSelection();
      },
      goDocStart: function(cm) {
        return cm.extendSelection(Pos(cm.firstLine(), 0));
      },
      goDocEnd: function(cm) {
        return cm.extendSelection(Pos(cm.lastLine()));
      },
      goLineStart: function(cm) {
        return cm.extendSelectionsBy(function(range2) {
          return lineStart(cm, range2.head.line);
        }, { origin: "+move", bias: 1 });
      },
      goLineStartSmart: function(cm) {
        return cm.extendSelectionsBy(function(range2) {
          return lineStartSmart(cm, range2.head);
        }, { origin: "+move", bias: 1 });
      },
      goLineEnd: function(cm) {
        return cm.extendSelectionsBy(function(range2) {
          return lineEnd(cm, range2.head.line);
        }, { origin: "+move", bias: -1 });
      },
      goLineRight: function(cm) {
        return cm.extendSelectionsBy(function(range2) {
          var top = cm.cursorCoords(range2.head, "div").top + 5;
          return cm.coordsChar({ left: cm.display.lineDiv.offsetWidth + 100, top }, "div");
        }, sel_move);
      },
      goLineLeft: function(cm) {
        return cm.extendSelectionsBy(function(range2) {
          var top = cm.cursorCoords(range2.head, "div").top + 5;
          return cm.coordsChar({ left: 0, top }, "div");
        }, sel_move);
      },
      goLineLeftSmart: function(cm) {
        return cm.extendSelectionsBy(function(range2) {
          var top = cm.cursorCoords(range2.head, "div").top + 5;
          var pos = cm.coordsChar({ left: 0, top }, "div");
          if (pos.ch < cm.getLine(pos.line).search(/\S/)) {
            return lineStartSmart(cm, range2.head);
          }
          return pos;
        }, sel_move);
      },
      goLineUp: function(cm) {
        return cm.moveV(-1, "line");
      },
      goLineDown: function(cm) {
        return cm.moveV(1, "line");
      },
      goPageUp: function(cm) {
        return cm.moveV(-1, "page");
      },
      goPageDown: function(cm) {
        return cm.moveV(1, "page");
      },
      goCharLeft: function(cm) {
        return cm.moveH(-1, "char");
      },
      goCharRight: function(cm) {
        return cm.moveH(1, "char");
      },
      goColumnLeft: function(cm) {
        return cm.moveH(-1, "column");
      },
      goColumnRight: function(cm) {
        return cm.moveH(1, "column");
      },
      goWordLeft: function(cm) {
        return cm.moveH(-1, "word");
      },
      goGroupRight: function(cm) {
        return cm.moveH(1, "group");
      },
      goGroupLeft: function(cm) {
        return cm.moveH(-1, "group");
      },
      goWordRight: function(cm) {
        return cm.moveH(1, "word");
      },
      delCharBefore: function(cm) {
        return cm.deleteH(-1, "codepoint");
      },
      delCharAfter: function(cm) {
        return cm.deleteH(1, "char");
      },
      delWordBefore: function(cm) {
        return cm.deleteH(-1, "word");
      },
      delWordAfter: function(cm) {
        return cm.deleteH(1, "word");
      },
      delGroupBefore: function(cm) {
        return cm.deleteH(-1, "group");
      },
      delGroupAfter: function(cm) {
        return cm.deleteH(1, "group");
      },
      indentAuto: function(cm) {
        return cm.indentSelection("smart");
      },
      indentMore: function(cm) {
        return cm.indentSelection("add");
      },
      indentLess: function(cm) {
        return cm.indentSelection("subtract");
      },
      insertTab: function(cm) {
        return cm.replaceSelection("	");
      },
      insertSoftTab: function(cm) {
        var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
        for (var i2 = 0; i2 < ranges.length; i2++) {
          var pos = ranges[i2].from();
          var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
          spaces.push(spaceStr(tabSize - col % tabSize));
        }
        cm.replaceSelections(spaces);
      },
      defaultTab: function(cm) {
        if (cm.somethingSelected()) {
          cm.indentSelection("add");
        } else {
          cm.execCommand("insertTab");
        }
      },
      transposeChars: function(cm) {
        return runInOp(cm, function() {
          var ranges = cm.listSelections(), newSel = [];
          for (var i2 = 0; i2 < ranges.length; i2++) {
            if (!ranges[i2].empty()) {
              continue;
            }
            var cur = ranges[i2].head, line = getLine(cm.doc, cur.line).text;
            if (line) {
              if (cur.ch == line.length) {
                cur = new Pos(cur.line, cur.ch - 1);
              }
              if (cur.ch > 0) {
                cur = new Pos(cur.line, cur.ch + 1);
                cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2), Pos(cur.line, cur.ch - 2), cur, "+transpose");
              } else if (cur.line > cm.doc.first) {
                var prev = getLine(cm.doc, cur.line - 1).text;
                if (prev) {
                  cur = new Pos(cur.line, 1);
                  cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() + prev.charAt(prev.length - 1), Pos(cur.line - 1, prev.length - 1), cur, "+transpose");
                }
              }
            }
            newSel.push(new Range(cur, cur));
          }
          cm.setSelections(newSel);
        });
      },
      newlineAndIndent: function(cm) {
        return runInOp(cm, function() {
          var sels = cm.listSelections();
          for (var i2 = sels.length - 1; i2 >= 0; i2--) {
            cm.replaceRange(cm.doc.lineSeparator(), sels[i2].anchor, sels[i2].head, "+input");
          }
          sels = cm.listSelections();
          for (var i$12 = 0; i$12 < sels.length; i$12++) {
            cm.indentLine(sels[i$12].from().line, null, true);
          }
          ensureCursorVisible(cm);
        });
      },
      openLine: function(cm) {
        return cm.replaceSelection("\n", "start");
      },
      toggleOverwrite: function(cm) {
        return cm.toggleOverwrite();
      }
    };
    function lineStart(cm, lineN) {
      var line = getLine(cm.doc, lineN);
      var visual = visualLine(line);
      if (visual != line) {
        lineN = lineNo(visual);
      }
      return endOfLine(true, cm, visual, lineN, 1);
    }
    function lineEnd(cm, lineN) {
      var line = getLine(cm.doc, lineN);
      var visual = visualLineEnd(line);
      if (visual != line) {
        lineN = lineNo(visual);
      }
      return endOfLine(true, cm, line, lineN, -1);
    }
    function lineStartSmart(cm, pos) {
      var start = lineStart(cm, pos.line);
      var line = getLine(cm.doc, start.line);
      var order = getOrder(line, cm.doc.direction);
      if (!order || order[0].level == 0) {
        var firstNonWS = Math.max(start.ch, line.text.search(/\S/));
        var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
        return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky);
      }
      return start;
    }
    function doHandleBinding(cm, bound, dropShift) {
      if (typeof bound == "string") {
        bound = commands[bound];
        if (!bound) {
          return false;
        }
      }
      cm.display.input.ensurePolled();
      var prevShift = cm.display.shift, done = false;
      try {
        if (cm.isReadOnly()) {
          cm.state.suppressEdits = true;
        }
        if (dropShift) {
          cm.display.shift = false;
        }
        done = bound(cm) != Pass;
      } finally {
        cm.display.shift = prevShift;
        cm.state.suppressEdits = false;
      }
      return done;
    }
    function lookupKeyForEditor(cm, name, handle) {
      for (var i2 = 0; i2 < cm.state.keyMaps.length; i2++) {
        var result = lookupKey(name, cm.state.keyMaps[i2], handle, cm);
        if (result) {
          return result;
        }
      }
      return cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm) || lookupKey(name, cm.options.keyMap, handle, cm);
    }
    var stopSeq = new Delayed();
    function dispatchKey(cm, name, e, handle) {
      var seq = cm.state.keySeq;
      if (seq) {
        if (isModifierKey(name)) {
          return "handled";
        }
        if (/\'$/.test(name)) {
          cm.state.keySeq = null;
        } else {
          stopSeq.set(50, function() {
            if (cm.state.keySeq == seq) {
              cm.state.keySeq = null;
              cm.display.input.reset();
            }
          });
        }
        if (dispatchKeyInner(cm, seq + " " + name, e, handle)) {
          return true;
        }
      }
      return dispatchKeyInner(cm, name, e, handle);
    }
    function dispatchKeyInner(cm, name, e, handle) {
      var result = lookupKeyForEditor(cm, name, handle);
      if (result == "multi") {
        cm.state.keySeq = name;
      }
      if (result == "handled") {
        signalLater(cm, "keyHandled", cm, name, e);
      }
      if (result == "handled" || result == "multi") {
        e_preventDefault(e);
        restartBlink(cm);
      }
      return !!result;
    }
    function handleKeyBinding(cm, e) {
      var name = keyName(e, true);
      if (!name) {
        return false;
      }
      if (e.shiftKey && !cm.state.keySeq) {
        return dispatchKey(cm, "Shift-" + name, e, function(b) {
          return doHandleBinding(cm, b, true);
        }) || dispatchKey(cm, name, e, function(b) {
          if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion) {
            return doHandleBinding(cm, b);
          }
        });
      } else {
        return dispatchKey(cm, name, e, function(b) {
          return doHandleBinding(cm, b);
        });
      }
    }
    function handleCharBinding(cm, e, ch) {
      return dispatchKey(cm, "'" + ch + "'", e, function(b) {
        return doHandleBinding(cm, b, true);
      });
    }
    var lastStoppedKey = null;
    function onKeyDown(e) {
      var cm = this;
      if (e.target && e.target != cm.display.input.getField()) {
        return;
      }
      cm.curOp.focus = activeElt();
      if (signalDOMEvent(cm, e)) {
        return;
      }
      if (ie && ie_version < 11 && e.keyCode == 27) {
        e.returnValue = false;
      }
      var code = e.keyCode;
      cm.display.shift = code == 16 || e.shiftKey;
      var handled = handleKeyBinding(cm, e);
      if (presto) {
        lastStoppedKey = handled ? code : null;
        if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey)) {
          cm.replaceSelection("", null, "cut");
        }
      }
      if (gecko && !mac && !handled && code == 46 && e.shiftKey && !e.ctrlKey && document.execCommand) {
        document.execCommand("cut");
      }
      if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className)) {
        showCrossHair(cm);
      }
    }
    function showCrossHair(cm) {
      var lineDiv = cm.display.lineDiv;
      addClass(lineDiv, "CodeMirror-crosshair");
      function up(e) {
        if (e.keyCode == 18 || !e.altKey) {
          rmClass(lineDiv, "CodeMirror-crosshair");
          off(document, "keyup", up);
          off(document, "mouseover", up);
        }
      }
      on(document, "keyup", up);
      on(document, "mouseover", up);
    }
    function onKeyUp(e) {
      if (e.keyCode == 16) {
        this.doc.sel.shift = false;
      }
      signalDOMEvent(this, e);
    }
    function onKeyPress(e) {
      var cm = this;
      if (e.target && e.target != cm.display.input.getField()) {
        return;
      }
      if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) {
        return;
      }
      var keyCode = e.keyCode, charCode = e.charCode;
      if (presto && keyCode == lastStoppedKey) {
        lastStoppedKey = null;
        e_preventDefault(e);
        return;
      }
      if (presto && (!e.which || e.which < 10) && handleKeyBinding(cm, e)) {
        return;
      }
      var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
      if (ch == "\b") {
        return;
      }
      if (handleCharBinding(cm, e, ch)) {
        return;
      }
      cm.display.input.onKeyPress(e);
    }
    var DOUBLECLICK_DELAY = 400;
    var PastClick = function(time, pos, button) {
      this.time = time;
      this.pos = pos;
      this.button = button;
    };
    PastClick.prototype.compare = function(time, pos, button) {
      return this.time + DOUBLECLICK_DELAY > time && cmp(pos, this.pos) == 0 && button == this.button;
    };
    var lastClick, lastDoubleClick;
    function clickRepeat(pos, button) {
      var now = +new Date();
      if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
        lastClick = lastDoubleClick = null;
        return "triple";
      } else if (lastClick && lastClick.compare(now, pos, button)) {
        lastDoubleClick = new PastClick(now, pos, button);
        lastClick = null;
        return "double";
      } else {
        lastClick = new PastClick(now, pos, button);
        lastDoubleClick = null;
        return "single";
      }
    }
    function onMouseDown(e) {
      var cm = this, display = cm.display;
      if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) {
        return;
      }
      display.input.ensurePolled();
      display.shift = e.shiftKey;
      if (eventInWidget(display, e)) {
        if (!webkit) {
          display.scroller.draggable = false;
          setTimeout(function() {
            return display.scroller.draggable = true;
          }, 100);
        }
        return;
      }
      if (clickInGutter(cm, e)) {
        return;
      }
      var pos = posFromMouse(cm, e), button = e_button(e), repeat = pos ? clickRepeat(pos, button) : "single";
      window.focus();
      if (button == 1 && cm.state.selectingText) {
        cm.state.selectingText(e);
      }
      if (pos && handleMappedButton(cm, button, pos, repeat, e)) {
        return;
      }
      if (button == 1) {
        if (pos) {
          leftButtonDown(cm, pos, repeat, e);
        } else if (e_target(e) == display.scroller) {
          e_preventDefault(e);
        }
      } else if (button == 2) {
        if (pos) {
          extendSelection(cm.doc, pos);
        }
        setTimeout(function() {
          return display.input.focus();
        }, 20);
      } else if (button == 3) {
        if (captureRightClick) {
          cm.display.input.onContextMenu(e);
        } else {
          delayBlurEvent(cm);
        }
      }
    }
    function handleMappedButton(cm, button, pos, repeat, event2) {
      var name = "Click";
      if (repeat == "double") {
        name = "Double" + name;
      } else if (repeat == "triple") {
        name = "Triple" + name;
      }
      name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name;
      return dispatchKey(cm, addModifierNames(name, event2), event2, function(bound) {
        if (typeof bound == "string") {
          bound = commands[bound];
        }
        if (!bound) {
          return false;
        }
        var done = false;
        try {
          if (cm.isReadOnly()) {
            cm.state.suppressEdits = true;
          }
          done = bound(cm, pos) != Pass;
        } finally {
          cm.state.suppressEdits = false;
        }
        return done;
      });
    }
    function configureMouse(cm, repeat, event2) {
      var option = cm.getOption("configureMouse");
      var value = option ? option(cm, repeat, event2) : {};
      if (value.unit == null) {
        var rect = chromeOS ? event2.shiftKey && event2.metaKey : event2.altKey;
        value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line";
      }
      if (value.extend == null || cm.doc.extend) {
        value.extend = cm.doc.extend || event2.shiftKey;
      }
      if (value.addNew == null) {
        value.addNew = mac ? event2.metaKey : event2.ctrlKey;
      }
      if (value.moveOnDrag == null) {
        value.moveOnDrag = !(mac ? event2.altKey : event2.ctrlKey);
      }
      return value;
    }
    function leftButtonDown(cm, pos, repeat, event2) {
      if (ie) {
        setTimeout(bind(ensureFocus, cm), 0);
      } else {
        cm.curOp.focus = activeElt();
      }
      var behavior = configureMouse(cm, repeat, event2);
      var sel = cm.doc.sel, contained;
      if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() && repeat == "single" && (contained = sel.contains(pos)) > -1 && (cmp((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) && (cmp(contained.to(), pos) > 0 || pos.xRel < 0)) {
        leftButtonStartDrag(cm, event2, pos, behavior);
      } else {
        leftButtonSelect(cm, event2, pos, behavior);
      }
    }
    function leftButtonStartDrag(cm, event2, pos, behavior) {
      var display = cm.display, moved = false;
      var dragEnd = operation(cm, function(e) {
        if (webkit) {
          display.scroller.draggable = false;
        }
        cm.state.draggingText = false;
        if (cm.state.delayingBlurEvent) {
          if (cm.hasFocus()) {
            cm.state.delayingBlurEvent = false;
          } else {
            delayBlurEvent(cm);
          }
        }
        off(display.wrapper.ownerDocument, "mouseup", dragEnd);
        off(display.wrapper.ownerDocument, "mousemove", mouseMove);
        off(display.scroller, "dragstart", dragStart);
        off(display.scroller, "drop", dragEnd);
        if (!moved) {
          e_preventDefault(e);
          if (!behavior.addNew) {
            extendSelection(cm.doc, pos, null, null, behavior.extend);
          }
          if (webkit && !safari || ie && ie_version == 9) {
            setTimeout(function() {
              display.wrapper.ownerDocument.body.focus({ preventScroll: true });
              display.input.focus();
            }, 20);
          } else {
            display.input.focus();
          }
        }
      });
      var mouseMove = function(e2) {
        moved = moved || Math.abs(event2.clientX - e2.clientX) + Math.abs(event2.clientY - e2.clientY) >= 10;
      };
      var dragStart = function() {
        return moved = true;
      };
      if (webkit) {
        display.scroller.draggable = true;
      }
      cm.state.draggingText = dragEnd;
      dragEnd.copy = !behavior.moveOnDrag;
      on(display.wrapper.ownerDocument, "mouseup", dragEnd);
      on(display.wrapper.ownerDocument, "mousemove", mouseMove);
      on(display.scroller, "dragstart", dragStart);
      on(display.scroller, "drop", dragEnd);
      cm.state.delayingBlurEvent = true;
      setTimeout(function() {
        return display.input.focus();
      }, 20);
      if (display.scroller.dragDrop) {
        display.scroller.dragDrop();
      }
    }
    function rangeForUnit(cm, pos, unit) {
      if (unit == "char") {
        return new Range(pos, pos);
      }
      if (unit == "word") {
        return cm.findWordAt(pos);
      }
      if (unit == "line") {
        return new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0)));
      }
      var result = unit(cm, pos);
      return new Range(result.from, result.to);
    }
    function leftButtonSelect(cm, event2, start, behavior) {
      if (ie) {
        delayBlurEvent(cm);
      }
      var display = cm.display, doc = cm.doc;
      e_preventDefault(event2);
      var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
      if (behavior.addNew && !behavior.extend) {
        ourIndex = doc.sel.contains(start);
        if (ourIndex > -1) {
          ourRange = ranges[ourIndex];
        } else {
          ourRange = new Range(start, start);
        }
      } else {
        ourRange = doc.sel.primary();
        ourIndex = doc.sel.primIndex;
      }
      if (behavior.unit == "rectangle") {
        if (!behavior.addNew) {
          ourRange = new Range(start, start);
        }
        start = posFromMouse(cm, event2, true, true);
        ourIndex = -1;
      } else {
        var range2 = rangeForUnit(cm, start, behavior.unit);
        if (behavior.extend) {
          ourRange = extendRange(ourRange, range2.anchor, range2.head, behavior.extend);
        } else {
          ourRange = range2;
        }
      }
      if (!behavior.addNew) {
        ourIndex = 0;
        setSelection(doc, new Selection([ourRange], 0), sel_mouse);
        startSel = doc.sel;
      } else if (ourIndex == -1) {
        ourIndex = ranges.length;
        setSelection(doc, normalizeSelection(cm, ranges.concat([ourRange]), ourIndex), { scroll: false, origin: "*mouse" });
      } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
        setSelection(doc, normalizeSelection(cm, ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0), { scroll: false, origin: "*mouse" });
        startSel = doc.sel;
      } else {
        replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
      }
      var lastPos = start;
      function extendTo(pos) {
        if (cmp(lastPos, pos) == 0) {
          return;
        }
        lastPos = pos;
        if (behavior.unit == "rectangle") {
          var ranges2 = [], tabSize = cm.options.tabSize;
          var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
          var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
          var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
          for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line)); line <= end; line++) {
            var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
            if (left == right) {
              ranges2.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
            } else if (text.length > leftPos) {
              ranges2.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
            }
          }
          if (!ranges2.length) {
            ranges2.push(new Range(start, start));
          }
          setSelection(doc, normalizeSelection(cm, startSel.ranges.slice(0, ourIndex).concat(ranges2), ourIndex), { origin: "*mouse", scroll: false });
          cm.scrollIntoView(pos);
        } else {
          var oldRange = ourRange;
          var range3 = rangeForUnit(cm, pos, behavior.unit);
          var anchor = oldRange.anchor, head;
          if (cmp(range3.anchor, anchor) > 0) {
            head = range3.head;
            anchor = minPos(oldRange.from(), range3.anchor);
          } else {
            head = range3.anchor;
            anchor = maxPos(oldRange.to(), range3.head);
          }
          var ranges$1 = startSel.ranges.slice(0);
          ranges$1[ourIndex] = bidiSimplify(cm, new Range(clipPos(doc, anchor), head));
          setSelection(doc, normalizeSelection(cm, ranges$1, ourIndex), sel_mouse);
        }
      }
      var editorSize = display.wrapper.getBoundingClientRect();
      var counter = 0;
      function extend(e) {
        var curCount = ++counter;
        var cur = posFromMouse(cm, e, true, behavior.unit == "rectangle");
        if (!cur) {
          return;
        }
        if (cmp(cur, lastPos) != 0) {
          cm.curOp.focus = activeElt();
          extendTo(cur);
          var visible = visibleLines(display, doc);
          if (cur.line >= visible.to || cur.line < visible.from) {
            setTimeout(operation(cm, function() {
              if (counter == curCount) {
                extend(e);
              }
            }), 150);
          }
        } else {
          var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
          if (outside) {
            setTimeout(operation(cm, function() {
              if (counter != curCount) {
                return;
              }
              display.scroller.scrollTop += outside;
              extend(e);
            }), 50);
          }
        }
      }
      function done(e) {
        cm.state.selectingText = false;
        counter = Infinity;
        if (e) {
          e_preventDefault(e);
          display.input.focus();
        }
        off(display.wrapper.ownerDocument, "mousemove", move);
        off(display.wrapper.ownerDocument, "mouseup", up);
        doc.history.lastSelOrigin = null;
      }
      var move = operation(cm, function(e) {
        if (e.buttons === 0 || !e_button(e)) {
          done(e);
        } else {
          extend(e);
        }
      });
      var up = operation(cm, done);
      cm.state.selectingText = up;
      on(display.wrapper.ownerDocument, "mousemove", move);
      on(display.wrapper.ownerDocument, "mouseup", up);
    }
    function bidiSimplify(cm, range2) {
      var anchor = range2.anchor;
      var head = range2.head;
      var anchorLine = getLine(cm.doc, anchor.line);
      if (cmp(anchor, head) == 0 && anchor.sticky == head.sticky) {
        return range2;
      }
      var order = getOrder(anchorLine);
      if (!order) {
        return range2;
      }
      var index = getBidiPartAt(order, anchor.ch, anchor.sticky), part = order[index];
      if (part.from != anchor.ch && part.to != anchor.ch) {
        return range2;
      }
      var boundary = index + (part.from == anchor.ch == (part.level != 1) ? 0 : 1);
      if (boundary == 0 || boundary == order.length) {
        return range2;
      }
      var leftSide;
      if (head.line != anchor.line) {
        leftSide = (head.line - anchor.line) * (cm.doc.direction == "ltr" ? 1 : -1) > 0;
      } else {
        var headIndex = getBidiPartAt(order, head.ch, head.sticky);
        var dir = headIndex - index || (head.ch - anchor.ch) * (part.level == 1 ? -1 : 1);
        if (headIndex == boundary - 1 || headIndex == boundary) {
          leftSide = dir < 0;
        } else {
          leftSide = dir > 0;
        }
      }
      var usePart = order[boundary + (leftSide ? -1 : 0)];
      var from = leftSide == (usePart.level == 1);
      var ch = from ? usePart.from : usePart.to, sticky = from ? "after" : "before";
      return anchor.ch == ch && anchor.sticky == sticky ? range2 : new Range(new Pos(anchor.line, ch, sticky), head);
    }
    function gutterEvent(cm, e, type, prevent) {
      var mX, mY;
      if (e.touches) {
        mX = e.touches[0].clientX;
        mY = e.touches[0].clientY;
      } else {
        try {
          mX = e.clientX;
          mY = e.clientY;
        } catch (e$1) {
          return false;
        }
      }
      if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) {
        return false;
      }
      if (prevent) {
        e_preventDefault(e);
      }
      var display = cm.display;
      var lineBox = display.lineDiv.getBoundingClientRect();
      if (mY > lineBox.bottom || !hasHandler(cm, type)) {
        return e_defaultPrevented(e);
      }
      mY -= lineBox.top - display.viewOffset;
      for (var i2 = 0; i2 < cm.display.gutterSpecs.length; ++i2) {
        var g = display.gutters.childNodes[i2];
        if (g && g.getBoundingClientRect().right >= mX) {
          var line = lineAtHeight(cm.doc, mY);
          var gutter = cm.display.gutterSpecs[i2];
          signal(cm, type, cm, line, gutter.className, e);
          return e_defaultPrevented(e);
        }
      }
    }
    function clickInGutter(cm, e) {
      return gutterEvent(cm, e, "gutterClick", true);
    }
    function onContextMenu(cm, e) {
      if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) {
        return;
      }
      if (signalDOMEvent(cm, e, "contextmenu")) {
        return;
      }
      if (!captureRightClick) {
        cm.display.input.onContextMenu(e);
      }
    }
    function contextMenuInGutter(cm, e) {
      if (!hasHandler(cm, "gutterContextMenu")) {
        return false;
      }
      return gutterEvent(cm, e, "gutterContextMenu", false);
    }
    function themeChanged(cm) {
      cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
      clearCaches(cm);
    }
    var Init = { toString: function() {
      return "CodeMirror.Init";
    } };
    var defaults = {};
    var optionHandlers = {};
    function defineOptions(CodeMirror3) {
      var optionHandlers2 = CodeMirror3.optionHandlers;
      function option(name, deflt, handle, notOnInit) {
        CodeMirror3.defaults[name] = deflt;
        if (handle) {
          optionHandlers2[name] = notOnInit ? function(cm, val, old) {
            if (old != Init) {
              handle(cm, val, old);
            }
          } : handle;
        }
      }
      CodeMirror3.defineOption = option;
      CodeMirror3.Init = Init;
      option("value", "", function(cm, val) {
        return cm.setValue(val);
      }, true);
      option("mode", null, function(cm, val) {
        cm.doc.modeOption = val;
        loadMode(cm);
      }, true);
      option("indentUnit", 2, loadMode, true);
      option("indentWithTabs", false);
      option("smartIndent", true);
      option("tabSize", 4, function(cm) {
        resetModeState(cm);
        clearCaches(cm);
        regChange(cm);
      }, true);
      option("lineSeparator", null, function(cm, val) {
        cm.doc.lineSep = val;
        if (!val) {
          return;
        }
        var newBreaks = [], lineNo2 = cm.doc.first;
        cm.doc.iter(function(line) {
          for (var pos = 0; ; ) {
            var found = line.text.indexOf(val, pos);
            if (found == -1) {
              break;
            }
            pos = found + val.length;
            newBreaks.push(Pos(lineNo2, found));
          }
          lineNo2++;
        });
        for (var i2 = newBreaks.length - 1; i2 >= 0; i2--) {
          replaceRange(cm.doc, val, newBreaks[i2], Pos(newBreaks[i2].line, newBreaks[i2].ch + val.length));
        }
      });
      option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function(cm, val, old) {
        cm.state.specialChars = new RegExp(val.source + (val.test("	") ? "" : "|	"), "g");
        if (old != Init) {
          cm.refresh();
        }
      });
      option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function(cm) {
        return cm.refresh();
      }, true);
      option("electricChars", true);
      option("inputStyle", mobile ? "contenteditable" : "textarea", function() {
        throw new Error("inputStyle can not (yet) be changed in a running editor");
      }, true);
      option("spellcheck", false, function(cm, val) {
        return cm.getInputField().spellcheck = val;
      }, true);
      option("autocorrect", false, function(cm, val) {
        return cm.getInputField().autocorrect = val;
      }, true);
      option("autocapitalize", false, function(cm, val) {
        return cm.getInputField().autocapitalize = val;
      }, true);
      option("rtlMoveVisually", !windows);
      option("wholeLineUpdateBefore", true);
      option("theme", "default", function(cm) {
        themeChanged(cm);
        updateGutters(cm);
      }, true);
      option("keyMap", "default", function(cm, val, old) {
        var next2 = getKeyMap(val);
        var prev = old != Init && getKeyMap(old);
        if (prev && prev.detach) {
          prev.detach(cm, next2);
        }
        if (next2.attach) {
          next2.attach(cm, prev || null);
        }
      });
      option("extraKeys", null);
      option("configureMouse", null);
      option("lineWrapping", false, wrappingChanged, true);
      option("gutters", [], function(cm, val) {
        cm.display.gutterSpecs = getGutters(val, cm.options.lineNumbers);
        updateGutters(cm);
      }, true);
      option("fixedGutter", true, function(cm, val) {
        cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
        cm.refresh();
      }, true);
      option("coverGutterNextToScrollbar", false, function(cm) {
        return updateScrollbars(cm);
      }, true);
      option("scrollbarStyle", "native", function(cm) {
        initScrollbars(cm);
        updateScrollbars(cm);
        cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
        cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
      }, true);
      option("lineNumbers", false, function(cm, val) {
        cm.display.gutterSpecs = getGutters(cm.options.gutters, val);
        updateGutters(cm);
      }, true);
      option("firstLineNumber", 1, updateGutters, true);
      option("lineNumberFormatter", function(integer) {
        return integer;
      }, updateGutters, true);
      option("showCursorWhenSelecting", false, updateSelection, true);
      option("resetSelectionOnContextMenu", true);
      option("lineWiseCopyCut", true);
      option("pasteLinesPerSelection", true);
      option("selectionsMayTouch", false);
      option("readOnly", false, function(cm, val) {
        if (val == "nocursor") {
          onBlur(cm);
          cm.display.input.blur();
        }
        cm.display.input.readOnlyChanged(val);
      });
      option("screenReaderLabel", null, function(cm, val) {
        val = val === "" ? null : val;
        cm.display.input.screenReaderLabelChanged(val);
      });
      option("disableInput", false, function(cm, val) {
        if (!val) {
          cm.display.input.reset();
        }
      }, true);
      option("dragDrop", true, dragDropChanged);
      option("allowDropFileTypes", null);
      option("cursorBlinkRate", 530);
      option("cursorScrollMargin", 0);
      option("cursorHeight", 1, updateSelection, true);
      option("singleCursorHeightPerLine", true, updateSelection, true);
      option("workTime", 100);
      option("workDelay", 100);
      option("flattenSpans", true, resetModeState, true);
      option("addModeClass", false, resetModeState, true);
      option("pollInterval", 100);
      option("undoDepth", 200, function(cm, val) {
        return cm.doc.history.undoDepth = val;
      });
      option("historyEventDelay", 1250);
      option("viewportMargin", 10, function(cm) {
        return cm.refresh();
      }, true);
      option("maxHighlightLength", 1e4, resetModeState, true);
      option("moveInputWithCursor", true, function(cm, val) {
        if (!val) {
          cm.display.input.resetPosition();
        }
      });
      option("tabindex", null, function(cm, val) {
        return cm.display.input.getField().tabIndex = val || "";
      });
      option("autofocus", null);
      option("direction", "ltr", function(cm, val) {
        return cm.doc.setDirection(val);
      }, true);
      option("phrases", null);
    }
    function dragDropChanged(cm, value, old) {
      var wasOn = old && old != Init;
      if (!value != !wasOn) {
        var funcs = cm.display.dragFunctions;
        var toggle = value ? on : off;
        toggle(cm.display.scroller, "dragstart", funcs.start);
        toggle(cm.display.scroller, "dragenter", funcs.enter);
        toggle(cm.display.scroller, "dragover", funcs.over);
        toggle(cm.display.scroller, "dragleave", funcs.leave);
        toggle(cm.display.scroller, "drop", funcs.drop);
      }
    }
    function wrappingChanged(cm) {
      if (cm.options.lineWrapping) {
        addClass(cm.display.wrapper, "CodeMirror-wrap");
        cm.display.sizer.style.minWidth = "";
        cm.display.sizerWidth = null;
      } else {
        rmClass(cm.display.wrapper, "CodeMirror-wrap");
        findMaxLine(cm);
      }
      estimateLineHeights(cm);
      regChange(cm);
      clearCaches(cm);
      setTimeout(function() {
        return updateScrollbars(cm);
      }, 100);
    }
    function CodeMirror2(place, options) {
      var this$1$1 = this;
      if (!(this instanceof CodeMirror2)) {
        return new CodeMirror2(place, options);
      }
      this.options = options = options ? copyObj(options) : {};
      copyObj(defaults, options, false);
      var doc = options.value;
      if (typeof doc == "string") {
        doc = new Doc(doc, options.mode, null, options.lineSeparator, options.direction);
      } else if (options.mode) {
        doc.modeOption = options.mode;
      }
      this.doc = doc;
      var input2 = new CodeMirror2.inputStyles[options.inputStyle](this);
      var display = this.display = new Display(place, doc, input2, options);
      display.wrapper.CodeMirror = this;
      themeChanged(this);
      if (options.lineWrapping) {
        this.display.wrapper.className += " CodeMirror-wrap";
      }
      initScrollbars(this);
      this.state = {
        keyMaps: [],
        overlays: [],
        modeGen: 0,
        overwrite: false,
        delayingBlurEvent: false,
        focused: false,
        suppressEdits: false,
        pasteIncoming: -1,
        cutIncoming: -1,
        selectingText: false,
        draggingText: false,
        highlight: new Delayed(),
        keySeq: null,
        specialChars: null
      };
      if (options.autofocus && !mobile) {
        display.input.focus();
      }
      if (ie && ie_version < 11) {
        setTimeout(function() {
          return this$1$1.display.input.reset(true);
        }, 20);
      }
      registerEventHandlers(this);
      ensureGlobalHandlers();
      startOperation(this);
      this.curOp.forceUpdate = true;
      attachDoc(this, doc);
      if (options.autofocus && !mobile || this.hasFocus()) {
        setTimeout(function() {
          if (this$1$1.hasFocus() && !this$1$1.state.focused) {
            onFocus(this$1$1);
          }
        }, 20);
      } else {
        onBlur(this);
      }
      for (var opt in optionHandlers) {
        if (optionHandlers.hasOwnProperty(opt)) {
          optionHandlers[opt](this, options[opt], Init);
        }
      }
      maybeUpdateLineNumberWidth(this);
      if (options.finishInit) {
        options.finishInit(this);
      }
      for (var i2 = 0; i2 < initHooks.length; ++i2) {
        initHooks[i2](this);
      }
      endOperation(this);
      if (webkit && options.lineWrapping && getComputedStyle(display.lineDiv).textRendering == "optimizelegibility") {
        display.lineDiv.style.textRendering = "auto";
      }
    }
    CodeMirror2.defaults = defaults;
    CodeMirror2.optionHandlers = optionHandlers;
    function registerEventHandlers(cm) {
      var d = cm.display;
      on(d.scroller, "mousedown", operation(cm, onMouseDown));
      if (ie && ie_version < 11) {
        on(d.scroller, "dblclick", operation(cm, function(e) {
          if (signalDOMEvent(cm, e)) {
            return;
          }
          var pos = posFromMouse(cm, e);
          if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) {
            return;
          }
          e_preventDefault(e);
          var word = cm.findWordAt(pos);
          extendSelection(cm.doc, word.anchor, word.head);
        }));
      } else {
        on(d.scroller, "dblclick", function(e) {
          return signalDOMEvent(cm, e) || e_preventDefault(e);
        });
      }
      on(d.scroller, "contextmenu", function(e) {
        return onContextMenu(cm, e);
      });
      on(d.input.getField(), "contextmenu", function(e) {
        if (!d.scroller.contains(e.target)) {
          onContextMenu(cm, e);
        }
      });
      var touchFinished, prevTouch = { end: 0 };
      function finishTouch() {
        if (d.activeTouch) {
          touchFinished = setTimeout(function() {
            return d.activeTouch = null;
          }, 1e3);
          prevTouch = d.activeTouch;
          prevTouch.end = +new Date();
        }
      }
      function isMouseLikeTouchEvent(e) {
        if (e.touches.length != 1) {
          return false;
        }
        var touch = e.touches[0];
        return touch.radiusX <= 1 && touch.radiusY <= 1;
      }
      function farAway(touch, other) {
        if (other.left == null) {
          return true;
        }
        var dx = other.left - touch.left, dy = other.top - touch.top;
        return dx * dx + dy * dy > 20 * 20;
      }
      on(d.scroller, "touchstart", function(e) {
        if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e) && !clickInGutter(cm, e)) {
          d.input.ensurePolled();
          clearTimeout(touchFinished);
          var now = +new Date();
          d.activeTouch = {
            start: now,
            moved: false,
            prev: now - prevTouch.end <= 300 ? prevTouch : null
          };
          if (e.touches.length == 1) {
            d.activeTouch.left = e.touches[0].pageX;
            d.activeTouch.top = e.touches[0].pageY;
          }
        }
      });
      on(d.scroller, "touchmove", function() {
        if (d.activeTouch) {
          d.activeTouch.moved = true;
        }
      });
      on(d.scroller, "touchend", function(e) {
        var touch = d.activeTouch;
        if (touch && !eventInWidget(d, e) && touch.left != null && !touch.moved && new Date() - touch.start < 300) {
          var pos = cm.coordsChar(d.activeTouch, "page"), range2;
          if (!touch.prev || farAway(touch, touch.prev)) {
            range2 = new Range(pos, pos);
          } else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) {
            range2 = cm.findWordAt(pos);
          } else {
            range2 = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0)));
          }
          cm.setSelection(range2.anchor, range2.head);
          cm.focus();
          e_preventDefault(e);
        }
        finishTouch();
      });
      on(d.scroller, "touchcancel", finishTouch);
      on(d.scroller, "scroll", function() {
        if (d.scroller.clientHeight) {
          updateScrollTop(cm, d.scroller.scrollTop);
          setScrollLeft(cm, d.scroller.scrollLeft, true);
          signal(cm, "scroll", cm);
        }
      });
      on(d.scroller, "mousewheel", function(e) {
        return onScrollWheel(cm, e);
      });
      on(d.scroller, "DOMMouseScroll", function(e) {
        return onScrollWheel(cm, e);
      });
      on(d.wrapper, "scroll", function() {
        return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0;
      });
      d.dragFunctions = {
        enter: function(e) {
          if (!signalDOMEvent(cm, e)) {
            e_stop(e);
          }
        },
        over: function(e) {
          if (!signalDOMEvent(cm, e)) {
            onDragOver(cm, e);
            e_stop(e);
          }
        },
        start: function(e) {
          return onDragStart(cm, e);
        },
        drop: operation(cm, onDrop),
        leave: function(e) {
          if (!signalDOMEvent(cm, e)) {
            clearDragCursor(cm);
          }
        }
      };
      var inp = d.input.getField();
      on(inp, "keyup", function(e) {
        return onKeyUp.call(cm, e);
      });
      on(inp, "keydown", operation(cm, onKeyDown));
      on(inp, "keypress", operation(cm, onKeyPress));
      on(inp, "focus", function(e) {
        return onFocus(cm, e);
      });
      on(inp, "blur", function(e) {
        return onBlur(cm, e);
      });
    }
    var initHooks = [];
    CodeMirror2.defineInitHook = function(f) {
      return initHooks.push(f);
    };
    function indentLine(cm, n, how, aggressive) {
      var doc = cm.doc, state2;
      if (how == null) {
        how = "add";
      }
      if (how == "smart") {
        if (!doc.mode.indent) {
          how = "prev";
        } else {
          state2 = getContextBefore(cm, n).state;
        }
      }
      var tabSize = cm.options.tabSize;
      var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
      if (line.stateAfter) {
        line.stateAfter = null;
      }
      var curSpaceString = line.text.match(/^\s*/)[0], indentation;
      if (!aggressive && !/\S/.test(line.text)) {
        indentation = 0;
        how = "not";
      } else if (how == "smart") {
        indentation = doc.mode.indent(state2, line.text.slice(curSpaceString.length), line.text);
        if (indentation == Pass || indentation > 150) {
          if (!aggressive) {
            return;
          }
          how = "prev";
        }
      }
      if (how == "prev") {
        if (n > doc.first) {
          indentation = countColumn(getLine(doc, n - 1).text, null, tabSize);
        } else {
          indentation = 0;
        }
      } else if (how == "add") {
        indentation = curSpace + cm.options.indentUnit;
      } else if (how == "subtract") {
        indentation = curSpace - cm.options.indentUnit;
      } else if (typeof how == "number") {
        indentation = curSpace + how;
      }
      indentation = Math.max(0, indentation);
      var indentString = "", pos = 0;
      if (cm.options.indentWithTabs) {
        for (var i2 = Math.floor(indentation / tabSize); i2; --i2) {
          pos += tabSize;
          indentString += "	";
        }
      }
      if (pos < indentation) {
        indentString += spaceStr(indentation - pos);
      }
      if (indentString != curSpaceString) {
        replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
        line.stateAfter = null;
        return true;
      } else {
        for (var i$12 = 0; i$12 < doc.sel.ranges.length; i$12++) {
          var range2 = doc.sel.ranges[i$12];
          if (range2.head.line == n && range2.head.ch < curSpaceString.length) {
            var pos$1 = Pos(n, curSpaceString.length);
            replaceOneSelection(doc, i$12, new Range(pos$1, pos$1));
            break;
          }
        }
      }
    }
    var lastCopied = null;
    function setLastCopied(newLastCopied) {
      lastCopied = newLastCopied;
    }
    function applyTextInput(cm, inserted, deleted, sel, origin) {
      var doc = cm.doc;
      cm.display.shift = false;
      if (!sel) {
        sel = doc.sel;
      }
      var recent = +new Date() - 200;
      var paste = origin == "paste" || cm.state.pasteIncoming > recent;
      var textLines = splitLinesAuto(inserted), multiPaste = null;
      if (paste && sel.ranges.length > 1) {
        if (lastCopied && lastCopied.text.join("\n") == inserted) {
          if (sel.ranges.length % lastCopied.text.length == 0) {
            multiPaste = [];
            for (var i2 = 0; i2 < lastCopied.text.length; i2++) {
              multiPaste.push(doc.splitLines(lastCopied.text[i2]));
            }
          }
        } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
          multiPaste = map(textLines, function(l) {
            return [l];
          });
        }
      }
      var updateInput = cm.curOp.updateInput;
      for (var i$12 = sel.ranges.length - 1; i$12 >= 0; i$12--) {
        var range2 = sel.ranges[i$12];
        var from = range2.from(), to = range2.to();
        if (range2.empty()) {
          if (deleted && deleted > 0) {
            from = Pos(from.line, from.ch - deleted);
          } else if (cm.state.overwrite && !paste) {
            to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length));
          } else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == textLines.join("\n")) {
            from = to = Pos(from.line, 0);
          }
        }
        var changeEvent = {
          from,
          to,
          text: multiPaste ? multiPaste[i$12 % multiPaste.length] : textLines,
          origin: origin || (paste ? "paste" : cm.state.cutIncoming > recent ? "cut" : "+input")
        };
        makeChange(cm.doc, changeEvent);
        signalLater(cm, "inputRead", cm, changeEvent);
      }
      if (inserted && !paste) {
        triggerElectric(cm, inserted);
      }
      ensureCursorVisible(cm);
      if (cm.curOp.updateInput < 2) {
        cm.curOp.updateInput = updateInput;
      }
      cm.curOp.typing = true;
      cm.state.pasteIncoming = cm.state.cutIncoming = -1;
    }
    function handlePaste(e, cm) {
      var pasted = e.clipboardData && e.clipboardData.getData("Text");
      if (pasted) {
        e.preventDefault();
        if (!cm.isReadOnly() && !cm.options.disableInput) {
          runInOp(cm, function() {
            return applyTextInput(cm, pasted, 0, null, "paste");
          });
        }
        return true;
      }
    }
    function triggerElectric(cm, inserted) {
      if (!cm.options.electricChars || !cm.options.smartIndent) {
        return;
      }
      var sel = cm.doc.sel;
      for (var i2 = sel.ranges.length - 1; i2 >= 0; i2--) {
        var range2 = sel.ranges[i2];
        if (range2.head.ch > 100 || i2 && sel.ranges[i2 - 1].head.line == range2.head.line) {
          continue;
        }
        var mode = cm.getModeAt(range2.head);
        var indented = false;
        if (mode.electricChars) {
          for (var j = 0; j < mode.electricChars.length; j++) {
            if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
              indented = indentLine(cm, range2.head.line, "smart");
              break;
            }
          }
        } else if (mode.electricInput) {
          if (mode.electricInput.test(getLine(cm.doc, range2.head.line).text.slice(0, range2.head.ch))) {
            indented = indentLine(cm, range2.head.line, "smart");
          }
        }
        if (indented) {
          signalLater(cm, "electricInput", cm, range2.head.line);
        }
      }
    }
    function copyableRanges(cm) {
      var text = [], ranges = [];
      for (var i2 = 0; i2 < cm.doc.sel.ranges.length; i2++) {
        var line = cm.doc.sel.ranges[i2].head.line;
        var lineRange = { anchor: Pos(line, 0), head: Pos(line + 1, 0) };
        ranges.push(lineRange);
        text.push(cm.getRange(lineRange.anchor, lineRange.head));
      }
      return { text, ranges };
    }
    function disableBrowserMagic(field, spellcheck, autocorrect, autocapitalize) {
      field.setAttribute("autocorrect", autocorrect ? "" : "off");
      field.setAttribute("autocapitalize", autocapitalize ? "" : "off");
      field.setAttribute("spellcheck", !!spellcheck);
    }
    function hiddenTextarea() {
      var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none");
      var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
      if (webkit) {
        te.style.width = "1000px";
      } else {
        te.setAttribute("wrap", "off");
      }
      if (ios) {
        te.style.border = "1px solid black";
      }
      disableBrowserMagic(te);
      return div;
    }
    function addEditorMethods(CodeMirror3) {
      var optionHandlers2 = CodeMirror3.optionHandlers;
      var helpers = CodeMirror3.helpers = {};
      CodeMirror3.prototype = {
        constructor: CodeMirror3,
        focus: function() {
          window.focus();
          this.display.input.focus();
        },
        setOption: function(option, value) {
          var options = this.options, old = options[option];
          if (options[option] == value && option != "mode") {
            return;
          }
          options[option] = value;
          if (optionHandlers2.hasOwnProperty(option)) {
            operation(this, optionHandlers2[option])(this, value, old);
          }
          signal(this, "optionChange", this, option);
        },
        getOption: function(option) {
          return this.options[option];
        },
        getDoc: function() {
          return this.doc;
        },
        addKeyMap: function(map2, bottom) {
          this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map2));
        },
        removeKeyMap: function(map2) {
          var maps = this.state.keyMaps;
          for (var i2 = 0; i2 < maps.length; ++i2) {
            if (maps[i2] == map2 || maps[i2].name == map2) {
              maps.splice(i2, 1);
              return true;
            }
          }
        },
        addOverlay: methodOp(function(spec, options) {
          var mode = spec.token ? spec : CodeMirror3.getMode(this.options, spec);
          if (mode.startState) {
            throw new Error("Overlays may not be stateful.");
          }
          insertSorted(this.state.overlays, {
            mode,
            modeSpec: spec,
            opaque: options && options.opaque,
            priority: options && options.priority || 0
          }, function(overlay) {
            return overlay.priority;
          });
          this.state.modeGen++;
          regChange(this);
        }),
        removeOverlay: methodOp(function(spec) {
          var overlays = this.state.overlays;
          for (var i2 = 0; i2 < overlays.length; ++i2) {
            var cur = overlays[i2].modeSpec;
            if (cur == spec || typeof spec == "string" && cur.name == spec) {
              overlays.splice(i2, 1);
              this.state.modeGen++;
              regChange(this);
              return;
            }
          }
        }),
        indentLine: methodOp(function(n, dir, aggressive) {
          if (typeof dir != "string" && typeof dir != "number") {
            if (dir == null) {
              dir = this.options.smartIndent ? "smart" : "prev";
            } else {
              dir = dir ? "add" : "subtract";
            }
          }
          if (isLine(this.doc, n)) {
            indentLine(this, n, dir, aggressive);
          }
        }),
        indentSelection: methodOp(function(how) {
          var ranges = this.doc.sel.ranges, end = -1;
          for (var i2 = 0; i2 < ranges.length; i2++) {
            var range2 = ranges[i2];
            if (!range2.empty()) {
              var from = range2.from(), to = range2.to();
              var start = Math.max(end, from.line);
              end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
              for (var j = start; j < end; ++j) {
                indentLine(this, j, how);
              }
              var newRanges = this.doc.sel.ranges;
              if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i2].from().ch > 0) {
                replaceOneSelection(this.doc, i2, new Range(from, newRanges[i2].to()), sel_dontScroll);
              }
            } else if (range2.head.line > end) {
              indentLine(this, range2.head.line, how, true);
              end = range2.head.line;
              if (i2 == this.doc.sel.primIndex) {
                ensureCursorVisible(this);
              }
            }
          }
        }),
        getTokenAt: function(pos, precise) {
          return takeToken(this, pos, precise);
        },
        getLineTokens: function(line, precise) {
          return takeToken(this, Pos(line), precise, true);
        },
        getTokenTypeAt: function(pos) {
          pos = clipPos(this.doc, pos);
          var styles = getLineStyles(this, getLine(this.doc, pos.line));
          var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
          var type;
          if (ch == 0) {
            type = styles[2];
          } else {
            for (; ; ) {
              var mid = before + after >> 1;
              if ((mid ? styles[mid * 2 - 1] : 0) >= ch) {
                after = mid;
              } else if (styles[mid * 2 + 1] < ch) {
                before = mid + 1;
              } else {
                type = styles[mid * 2 + 2];
                break;
              }
            }
          }
          var cut = type ? type.indexOf("overlay ") : -1;
          return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
        },
        getModeAt: function(pos) {
          var mode = this.doc.mode;
          if (!mode.innerMode) {
            return mode;
          }
          return CodeMirror3.innerMode(mode, this.getTokenAt(pos).state).mode;
        },
        getHelper: function(pos, type) {
          return this.getHelpers(pos, type)[0];
        },
        getHelpers: function(pos, type) {
          var found = [];
          if (!helpers.hasOwnProperty(type)) {
            return found;
          }
          var help = helpers[type], mode = this.getModeAt(pos);
          if (typeof mode[type] == "string") {
            if (help[mode[type]]) {
              found.push(help[mode[type]]);
            }
          } else if (mode[type]) {
            for (var i2 = 0; i2 < mode[type].length; i2++) {
              var val = help[mode[type][i2]];
              if (val) {
                found.push(val);
              }
            }
          } else if (mode.helperType && help[mode.helperType]) {
            found.push(help[mode.helperType]);
          } else if (help[mode.name]) {
            found.push(help[mode.name]);
          }
          for (var i$12 = 0; i$12 < help._global.length; i$12++) {
            var cur = help._global[i$12];
            if (cur.pred(mode, this) && indexOf(found, cur.val) == -1) {
              found.push(cur.val);
            }
          }
          return found;
        },
        getStateAfter: function(line, precise) {
          var doc = this.doc;
          line = clipLine(doc, line == null ? doc.first + doc.size - 1 : line);
          return getContextBefore(this, line + 1, precise).state;
        },
        cursorCoords: function(start, mode) {
          var pos, range2 = this.doc.sel.primary();
          if (start == null) {
            pos = range2.head;
          } else if (typeof start == "object") {
            pos = clipPos(this.doc, start);
          } else {
            pos = start ? range2.from() : range2.to();
          }
          return cursorCoords(this, pos, mode || "page");
        },
        charCoords: function(pos, mode) {
          return charCoords(this, clipPos(this.doc, pos), mode || "page");
        },
        coordsChar: function(coords, mode) {
          coords = fromCoordSystem(this, coords, mode || "page");
          return coordsChar(this, coords.left, coords.top);
        },
        lineAtHeight: function(height, mode) {
          height = fromCoordSystem(this, { top: height, left: 0 }, mode || "page").top;
          return lineAtHeight(this.doc, height + this.display.viewOffset);
        },
        heightAtLine: function(line, mode, includeWidgets) {
          var end = false, lineObj;
          if (typeof line == "number") {
            var last = this.doc.first + this.doc.size - 1;
            if (line < this.doc.first) {
              line = this.doc.first;
            } else if (line > last) {
              line = last;
              end = true;
            }
            lineObj = getLine(this.doc, line);
          } else {
            lineObj = line;
          }
          return intoCoordSystem(this, lineObj, { top: 0, left: 0 }, mode || "page", includeWidgets || end).top + (end ? this.doc.height - heightAtLine(lineObj) : 0);
        },
        defaultTextHeight: function() {
          return textHeight(this.display);
        },
        defaultCharWidth: function() {
          return charWidth(this.display);
        },
        getViewport: function() {
          return { from: this.display.viewFrom, to: this.display.viewTo };
        },
        addWidget: function(pos, node, scroll, vert, horiz) {
          var display = this.display;
          pos = cursorCoords(this, clipPos(this.doc, pos));
          var top = pos.bottom, left = pos.left;
          node.style.position = "absolute";
          node.setAttribute("cm-ignore-events", "true");
          this.display.input.setUneditable(node);
          display.sizer.appendChild(node);
          if (vert == "over") {
            top = pos.top;
          } else if (vert == "above" || vert == "near") {
            var vspace = Math.max(display.wrapper.clientHeight, this.doc.height), hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
            if ((vert == "above" || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight) {
              top = pos.top - node.offsetHeight;
            } else if (pos.bottom + node.offsetHeight <= vspace) {
              top = pos.bottom;
            }
            if (left + node.offsetWidth > hspace) {
              left = hspace - node.offsetWidth;
            }
          }
          node.style.top = top + "px";
          node.style.left = node.style.right = "";
          if (horiz == "right") {
            left = display.sizer.clientWidth - node.offsetWidth;
            node.style.right = "0px";
          } else {
            if (horiz == "left") {
              left = 0;
            } else if (horiz == "middle") {
              left = (display.sizer.clientWidth - node.offsetWidth) / 2;
            }
            node.style.left = left + "px";
          }
          if (scroll) {
            scrollIntoView(this, { left, top, right: left + node.offsetWidth, bottom: top + node.offsetHeight });
          }
        },
        triggerOnKeyDown: methodOp(onKeyDown),
        triggerOnKeyPress: methodOp(onKeyPress),
        triggerOnKeyUp: onKeyUp,
        triggerOnMouseDown: methodOp(onMouseDown),
        execCommand: function(cmd) {
          if (commands.hasOwnProperty(cmd)) {
            return commands[cmd].call(null, this);
          }
        },
        triggerElectric: methodOp(function(text) {
          triggerElectric(this, text);
        }),
        findPosH: function(from, amount, unit, visually) {
          var dir = 1;
          if (amount < 0) {
            dir = -1;
            amount = -amount;
          }
          var cur = clipPos(this.doc, from);
          for (var i2 = 0; i2 < amount; ++i2) {
            cur = findPosH(this.doc, cur, dir, unit, visually);
            if (cur.hitSide) {
              break;
            }
          }
          return cur;
        },
        moveH: methodOp(function(dir, unit) {
          var this$1$1 = this;
          this.extendSelectionsBy(function(range2) {
            if (this$1$1.display.shift || this$1$1.doc.extend || range2.empty()) {
              return findPosH(this$1$1.doc, range2.head, dir, unit, this$1$1.options.rtlMoveVisually);
            } else {
              return dir < 0 ? range2.from() : range2.to();
            }
          }, sel_move);
        }),
        deleteH: methodOp(function(dir, unit) {
          var sel = this.doc.sel, doc = this.doc;
          if (sel.somethingSelected()) {
            doc.replaceSelection("", null, "+delete");
          } else {
            deleteNearSelection(this, function(range2) {
              var other = findPosH(doc, range2.head, dir, unit, false);
              return dir < 0 ? { from: other, to: range2.head } : { from: range2.head, to: other };
            });
          }
        }),
        findPosV: function(from, amount, unit, goalColumn) {
          var dir = 1, x = goalColumn;
          if (amount < 0) {
            dir = -1;
            amount = -amount;
          }
          var cur = clipPos(this.doc, from);
          for (var i2 = 0; i2 < amount; ++i2) {
            var coords = cursorCoords(this, cur, "div");
            if (x == null) {
              x = coords.left;
            } else {
              coords.left = x;
            }
            cur = findPosV(this, coords, dir, unit);
            if (cur.hitSide) {
              break;
            }
          }
          return cur;
        },
        moveV: methodOp(function(dir, unit) {
          var this$1$1 = this;
          var doc = this.doc, goals = [];
          var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected();
          doc.extendSelectionsBy(function(range2) {
            if (collapse) {
              return dir < 0 ? range2.from() : range2.to();
            }
            var headPos = cursorCoords(this$1$1, range2.head, "div");
            if (range2.goalColumn != null) {
              headPos.left = range2.goalColumn;
            }
            goals.push(headPos.left);
            var pos = findPosV(this$1$1, headPos, dir, unit);
            if (unit == "page" && range2 == doc.sel.primary()) {
              addToScrollTop(this$1$1, charCoords(this$1$1, pos, "div").top - headPos.top);
            }
            return pos;
          }, sel_move);
          if (goals.length) {
            for (var i2 = 0; i2 < doc.sel.ranges.length; i2++) {
              doc.sel.ranges[i2].goalColumn = goals[i2];
            }
          }
        }),
        findWordAt: function(pos) {
          var doc = this.doc, line = getLine(doc, pos.line).text;
          var start = pos.ch, end = pos.ch;
          if (line) {
            var helper = this.getHelper(pos, "wordChars");
            if ((pos.sticky == "before" || end == line.length) && start) {
              --start;
            } else {
              ++end;
            }
            var startChar = line.charAt(start);
            var check = isWordChar(startChar, helper) ? function(ch) {
              return isWordChar(ch, helper);
            } : /\s/.test(startChar) ? function(ch) {
              return /\s/.test(ch);
            } : function(ch) {
              return !/\s/.test(ch) && !isWordChar(ch);
            };
            while (start > 0 && check(line.charAt(start - 1))) {
              --start;
            }
            while (end < line.length && check(line.charAt(end))) {
              ++end;
            }
          }
          return new Range(Pos(pos.line, start), Pos(pos.line, end));
        },
        toggleOverwrite: function(value) {
          if (value != null && value == this.state.overwrite) {
            return;
          }
          if (this.state.overwrite = !this.state.overwrite) {
            addClass(this.display.cursorDiv, "CodeMirror-overwrite");
          } else {
            rmClass(this.display.cursorDiv, "CodeMirror-overwrite");
          }
          signal(this, "overwriteToggle", this, this.state.overwrite);
        },
        hasFocus: function() {
          return this.display.input.getField() == activeElt();
        },
        isReadOnly: function() {
          return !!(this.options.readOnly || this.doc.cantEdit);
        },
        scrollTo: methodOp(function(x, y) {
          scrollToCoords(this, x, y);
        }),
        getScrollInfo: function() {
          var scroller = this.display.scroller;
          return {
            left: scroller.scrollLeft,
            top: scroller.scrollTop,
            height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
            width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
            clientHeight: displayHeight(this),
            clientWidth: displayWidth(this)
          };
        },
        scrollIntoView: methodOp(function(range2, margin) {
          if (range2 == null) {
            range2 = { from: this.doc.sel.primary().head, to: null };
            if (margin == null) {
              margin = this.options.cursorScrollMargin;
            }
          } else if (typeof range2 == "number") {
            range2 = { from: Pos(range2, 0), to: null };
          } else if (range2.from == null) {
            range2 = { from: range2, to: null };
          }
          if (!range2.to) {
            range2.to = range2.from;
          }
          range2.margin = margin || 0;
          if (range2.from.line != null) {
            scrollToRange(this, range2);
          } else {
            scrollToCoordsRange(this, range2.from, range2.to, range2.margin);
          }
        }),
        setSize: methodOp(function(width, height) {
          var this$1$1 = this;
          var interpret = function(val) {
            return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
          };
          if (width != null) {
            this.display.wrapper.style.width = interpret(width);
          }
          if (height != null) {
            this.display.wrapper.style.height = interpret(height);
          }
          if (this.options.lineWrapping) {
            clearLineMeasurementCache(this);
          }
          var lineNo2 = this.display.viewFrom;
          this.doc.iter(lineNo2, this.display.viewTo, function(line) {
            if (line.widgets) {
              for (var i2 = 0; i2 < line.widgets.length; i2++) {
                if (line.widgets[i2].noHScroll) {
                  regLineChange(this$1$1, lineNo2, "widget");
                  break;
                }
              }
            }
            ++lineNo2;
          });
          this.curOp.forceUpdate = true;
          signal(this, "refresh", this);
        }),
        operation: function(f) {
          return runInOp(this, f);
        },
        startOperation: function() {
          return startOperation(this);
        },
        endOperation: function() {
          return endOperation(this);
        },
        refresh: methodOp(function() {
          var oldHeight = this.display.cachedTextHeight;
          regChange(this);
          this.curOp.forceUpdate = true;
          clearCaches(this);
          scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop);
          updateGutterSpace(this.display);
          if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > 0.5 || this.options.lineWrapping) {
            estimateLineHeights(this);
          }
          signal(this, "refresh", this);
        }),
        swapDoc: methodOp(function(doc) {
          var old = this.doc;
          old.cm = null;
          if (this.state.selectingText) {
            this.state.selectingText();
          }
          attachDoc(this, doc);
          clearCaches(this);
          this.display.input.reset();
          scrollToCoords(this, doc.scrollLeft, doc.scrollTop);
          this.curOp.forceScroll = true;
          signalLater(this, "swapDoc", this, old);
          return old;
        }),
        phrase: function(phraseText) {
          var phrases = this.options.phrases;
          return phrases && Object.prototype.hasOwnProperty.call(phrases, phraseText) ? phrases[phraseText] : phraseText;
        },
        getInputField: function() {
          return this.display.input.getField();
        },
        getWrapperElement: function() {
          return this.display.wrapper;
        },
        getScrollerElement: function() {
          return this.display.scroller;
        },
        getGutterElement: function() {
          return this.display.gutters;
        }
      };
      eventMixin(CodeMirror3);
      CodeMirror3.registerHelper = function(type, name, value) {
        if (!helpers.hasOwnProperty(type)) {
          helpers[type] = CodeMirror3[type] = { _global: [] };
        }
        helpers[type][name] = value;
      };
      CodeMirror3.registerGlobalHelper = function(type, name, predicate, value) {
        CodeMirror3.registerHelper(type, name, value);
        helpers[type]._global.push({ pred: predicate, val: value });
      };
    }
    function findPosH(doc, pos, dir, unit, visually) {
      var oldPos = pos;
      var origDir = dir;
      var lineObj = getLine(doc, pos.line);
      var lineDir = visually && doc.direction == "rtl" ? -dir : dir;
      function findNextLine() {
        var l = pos.line + lineDir;
        if (l < doc.first || l >= doc.first + doc.size) {
          return false;
        }
        pos = new Pos(l, pos.ch, pos.sticky);
        return lineObj = getLine(doc, l);
      }
      function moveOnce(boundToLine) {
        var next2;
        if (unit == "codepoint") {
          var ch = lineObj.text.charCodeAt(pos.ch + (dir > 0 ? 0 : -1));
          if (isNaN(ch)) {
            next2 = null;
          } else {
            var astral = dir > 0 ? ch >= 55296 && ch < 56320 : ch >= 56320 && ch < 57343;
            next2 = new Pos(pos.line, Math.max(0, Math.min(lineObj.text.length, pos.ch + dir * (astral ? 2 : 1))), -dir);
          }
        } else if (visually) {
          next2 = moveVisually(doc.cm, lineObj, pos, dir);
        } else {
          next2 = moveLogically(lineObj, pos, dir);
        }
        if (next2 == null) {
          if (!boundToLine && findNextLine()) {
            pos = endOfLine(visually, doc.cm, lineObj, pos.line, lineDir);
          } else {
            return false;
          }
        } else {
          pos = next2;
        }
        return true;
      }
      if (unit == "char" || unit == "codepoint") {
        moveOnce();
      } else if (unit == "column") {
        moveOnce(true);
      } else if (unit == "word" || unit == "group") {
        var sawType = null, group = unit == "group";
        var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
        for (var first = true; ; first = false) {
          if (dir < 0 && !moveOnce(!first)) {
            break;
          }
          var cur = lineObj.text.charAt(pos.ch) || "\n";
          var type = isWordChar(cur, helper) ? "w" : group && cur == "\n" ? "n" : !group || /\s/.test(cur) ? null : "p";
          if (group && !first && !type) {
            type = "s";
          }
          if (sawType && sawType != type) {
            if (dir < 0) {
              dir = 1;
              moveOnce();
              pos.sticky = "after";
            }
            break;
          }
          if (type) {
            sawType = type;
          }
          if (dir > 0 && !moveOnce(!first)) {
            break;
          }
        }
      }
      var result = skipAtomic(doc, pos, oldPos, origDir, true);
      if (equalCursorPos(oldPos, result)) {
        result.hitSide = true;
      }
      return result;
    }
    function findPosV(cm, pos, dir, unit) {
      var doc = cm.doc, x = pos.left, y;
      if (unit == "page") {
        var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
        var moveAmount = Math.max(pageSize - 0.5 * textHeight(cm.display), 3);
        y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;
      } else if (unit == "line") {
        y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
      }
      var target;
      for (; ; ) {
        target = coordsChar(cm, x, y);
        if (!target.outside) {
          break;
        }
        if (dir < 0 ? y <= 0 : y >= doc.height) {
          target.hitSide = true;
          break;
        }
        y += dir * 5;
      }
      return target;
    }
    var ContentEditableInput = function(cm) {
      this.cm = cm;
      this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
      this.polling = new Delayed();
      this.composing = null;
      this.gracePeriod = false;
      this.readDOMTimeout = null;
    };
    ContentEditableInput.prototype.init = function(display) {
      var this$1$1 = this;
      var input2 = this, cm = input2.cm;
      var div = input2.div = display.lineDiv;
      div.contentEditable = true;
      disableBrowserMagic(div, cm.options.spellcheck, cm.options.autocorrect, cm.options.autocapitalize);
      function belongsToInput(e) {
        for (var t = e.target; t; t = t.parentNode) {
          if (t == div) {
            return true;
          }
          if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) {
            break;
          }
        }
        return false;
      }
      on(div, "paste", function(e) {
        if (!belongsToInput(e) || signalDOMEvent(cm, e) || handlePaste(e, cm)) {
          return;
        }
        if (ie_version <= 11) {
          setTimeout(operation(cm, function() {
            return this$1$1.updateFromDOM();
          }), 20);
        }
      });
      on(div, "compositionstart", function(e) {
        this$1$1.composing = { data: e.data, done: false };
      });
      on(div, "compositionupdate", function(e) {
        if (!this$1$1.composing) {
          this$1$1.composing = { data: e.data, done: false };
        }
      });
      on(div, "compositionend", function(e) {
        if (this$1$1.composing) {
          if (e.data != this$1$1.composing.data) {
            this$1$1.readFromDOMSoon();
          }
          this$1$1.composing.done = true;
        }
      });
      on(div, "touchstart", function() {
        return input2.forceCompositionEnd();
      });
      on(div, "input", function() {
        if (!this$1$1.composing) {
          this$1$1.readFromDOMSoon();
        }
      });
      function onCopyCut(e) {
        if (!belongsToInput(e) || signalDOMEvent(cm, e)) {
          return;
        }
        if (cm.somethingSelected()) {
          setLastCopied({ lineWise: false, text: cm.getSelections() });
          if (e.type == "cut") {
            cm.replaceSelection("", null, "cut");
          }
        } else if (!cm.options.lineWiseCopyCut) {
          return;
        } else {
          var ranges = copyableRanges(cm);
          setLastCopied({ lineWise: true, text: ranges.text });
          if (e.type == "cut") {
            cm.operation(function() {
              cm.setSelections(ranges.ranges, 0, sel_dontScroll);
              cm.replaceSelection("", null, "cut");
            });
          }
        }
        if (e.clipboardData) {
          e.clipboardData.clearData();
          var content = lastCopied.text.join("\n");
          e.clipboardData.setData("Text", content);
          if (e.clipboardData.getData("Text") == content) {
            e.preventDefault();
            return;
          }
        }
        var kludge = hiddenTextarea(), te = kludge.firstChild;
        cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
        te.value = lastCopied.text.join("\n");
        var hadFocus = activeElt();
        selectInput(te);
        setTimeout(function() {
          cm.display.lineSpace.removeChild(kludge);
          hadFocus.focus();
          if (hadFocus == div) {
            input2.showPrimarySelection();
          }
        }, 50);
      }
      on(div, "copy", onCopyCut);
      on(div, "cut", onCopyCut);
    };
    ContentEditableInput.prototype.screenReaderLabelChanged = function(label) {
      if (label) {
        this.div.setAttribute("aria-label", label);
      } else {
        this.div.removeAttribute("aria-label");
      }
    };
    ContentEditableInput.prototype.prepareSelection = function() {
      var result = prepareSelection(this.cm, false);
      result.focus = activeElt() == this.div;
      return result;
    };
    ContentEditableInput.prototype.showSelection = function(info, takeFocus) {
      if (!info || !this.cm.display.view.length) {
        return;
      }
      if (info.focus || takeFocus) {
        this.showPrimarySelection();
      }
      this.showMultipleSelections(info);
    };
    ContentEditableInput.prototype.getSelection = function() {
      return this.cm.display.wrapper.ownerDocument.getSelection();
    };
    ContentEditableInput.prototype.showPrimarySelection = function() {
      var sel = this.getSelection(), cm = this.cm, prim = cm.doc.sel.primary();
      var from = prim.from(), to = prim.to();
      if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
        sel.removeAllRanges();
        return;
      }
      var curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
      var curFocus = domToPos(cm, sel.focusNode, sel.focusOffset);
      if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad && cmp(minPos(curAnchor, curFocus), from) == 0 && cmp(maxPos(curAnchor, curFocus), to) == 0) {
        return;
      }
      var view = cm.display.view;
      var start = from.line >= cm.display.viewFrom && posToDOM(cm, from) || { node: view[0].measure.map[2], offset: 0 };
      var end = to.line < cm.display.viewTo && posToDOM(cm, to);
      if (!end) {
        var measure = view[view.length - 1].measure;
        var map2 = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
        end = { node: map2[map2.length - 1], offset: map2[map2.length - 2] - map2[map2.length - 3] };
      }
      if (!start || !end) {
        sel.removeAllRanges();
        return;
      }
      var old = sel.rangeCount && sel.getRangeAt(0), rng;
      try {
        rng = range(start.node, start.offset, end.offset, end.node);
      } catch (e) {
      }
      if (rng) {
        if (!gecko && cm.state.focused) {
          sel.collapse(start.node, start.offset);
          if (!rng.collapsed) {
            sel.removeAllRanges();
            sel.addRange(rng);
          }
        } else {
          sel.removeAllRanges();
          sel.addRange(rng);
        }
        if (old && sel.anchorNode == null) {
          sel.addRange(old);
        } else if (gecko) {
          this.startGracePeriod();
        }
      }
      this.rememberSelection();
    };
    ContentEditableInput.prototype.startGracePeriod = function() {
      var this$1$1 = this;
      clearTimeout(this.gracePeriod);
      this.gracePeriod = setTimeout(function() {
        this$1$1.gracePeriod = false;
        if (this$1$1.selectionChanged()) {
          this$1$1.cm.operation(function() {
            return this$1$1.cm.curOp.selectionChanged = true;
          });
        }
      }, 20);
    };
    ContentEditableInput.prototype.showMultipleSelections = function(info) {
      removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
      removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
    };
    ContentEditableInput.prototype.rememberSelection = function() {
      var sel = this.getSelection();
      this.lastAnchorNode = sel.anchorNode;
      this.lastAnchorOffset = sel.anchorOffset;
      this.lastFocusNode = sel.focusNode;
      this.lastFocusOffset = sel.focusOffset;
    };
    ContentEditableInput.prototype.selectionInEditor = function() {
      var sel = this.getSelection();
      if (!sel.rangeCount) {
        return false;
      }
      var node = sel.getRangeAt(0).commonAncestorContainer;
      return contains(this.div, node);
    };
    ContentEditableInput.prototype.focus = function() {
      if (this.cm.options.readOnly != "nocursor") {
        if (!this.selectionInEditor() || activeElt() != this.div) {
          this.showSelection(this.prepareSelection(), true);
        }
        this.div.focus();
      }
    };
    ContentEditableInput.prototype.blur = function() {
      this.div.blur();
    };
    ContentEditableInput.prototype.getField = function() {
      return this.div;
    };
    ContentEditableInput.prototype.supportsTouch = function() {
      return true;
    };
    ContentEditableInput.prototype.receivedFocus = function() {
      var this$1$1 = this;
      var input2 = this;
      if (this.selectionInEditor()) {
        setTimeout(function() {
          return this$1$1.pollSelection();
        }, 20);
      } else {
        runInOp(this.cm, function() {
          return input2.cm.curOp.selectionChanged = true;
        });
      }
      function poll() {
        if (input2.cm.state.focused) {
          input2.pollSelection();
          input2.polling.set(input2.cm.options.pollInterval, poll);
        }
      }
      this.polling.set(this.cm.options.pollInterval, poll);
    };
    ContentEditableInput.prototype.selectionChanged = function() {
      var sel = this.getSelection();
      return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset || sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset;
    };
    ContentEditableInput.prototype.pollSelection = function() {
      if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) {
        return;
      }
      var sel = this.getSelection(), cm = this.cm;
      if (android && chrome && this.cm.display.gutterSpecs.length && isInGutter(sel.anchorNode)) {
        this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs });
        this.blur();
        this.focus();
        return;
      }
      if (this.composing) {
        return;
      }
      this.rememberSelection();
      var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
      var head = domToPos(cm, sel.focusNode, sel.focusOffset);
      if (anchor && head) {
        runInOp(cm, function() {
          setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
          if (anchor.bad || head.bad) {
            cm.curOp.selectionChanged = true;
          }
        });
      }
    };
    ContentEditableInput.prototype.pollContent = function() {
      if (this.readDOMTimeout != null) {
        clearTimeout(this.readDOMTimeout);
        this.readDOMTimeout = null;
      }
      var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
      var from = sel.from(), to = sel.to();
      if (from.ch == 0 && from.line > cm.firstLine()) {
        from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length);
      }
      if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine()) {
        to = Pos(to.line + 1, 0);
      }
      if (from.line < display.viewFrom || to.line > display.viewTo - 1) {
        return false;
      }
      var fromIndex, fromLine, fromNode;
      if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
        fromLine = lineNo(display.view[0].line);
        fromNode = display.view[0].node;
      } else {
        fromLine = lineNo(display.view[fromIndex].line);
        fromNode = display.view[fromIndex - 1].node.nextSibling;
      }
      var toIndex = findViewIndex(cm, to.line);
      var toLine, toNode;
      if (toIndex == display.view.length - 1) {
        toLine = display.viewTo - 1;
        toNode = display.lineDiv.lastChild;
      } else {
        toLine = lineNo(display.view[toIndex + 1].line) - 1;
        toNode = display.view[toIndex + 1].node.previousSibling;
      }
      if (!fromNode) {
        return false;
      }
      var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
      var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
      while (newText.length > 1 && oldText.length > 1) {
        if (lst(newText) == lst(oldText)) {
          newText.pop();
          oldText.pop();
          toLine--;
        } else if (newText[0] == oldText[0]) {
          newText.shift();
          oldText.shift();
          fromLine++;
        } else {
          break;
        }
      }
      var cutFront = 0, cutEnd = 0;
      var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
      while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront)) {
        ++cutFront;
      }
      var newBot = lst(newText), oldBot = lst(oldText);
      var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0), oldBot.length - (oldText.length == 1 ? cutFront : 0));
      while (cutEnd < maxCutEnd && newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
        ++cutEnd;
      }
      if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
        while (cutFront && cutFront > from.ch && newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
          cutFront--;
          cutEnd++;
        }
      }
      newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "");
      newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "");
      var chFrom = Pos(fromLine, cutFront);
      var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
      if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
        replaceRange(cm.doc, newText, chFrom, chTo, "+input");
        return true;
      }
    };
    ContentEditableInput.prototype.ensurePolled = function() {
      this.forceCompositionEnd();
    };
    ContentEditableInput.prototype.reset = function() {
      this.forceCompositionEnd();
    };
    ContentEditableInput.prototype.forceCompositionEnd = function() {
      if (!this.composing) {
        return;
      }
      clearTimeout(this.readDOMTimeout);
      this.composing = null;
      this.updateFromDOM();
      this.div.blur();
      this.div.focus();
    };
    ContentEditableInput.prototype.readFromDOMSoon = function() {
      var this$1$1 = this;
      if (this.readDOMTimeout != null) {
        return;
      }
      this.readDOMTimeout = setTimeout(function() {
        this$1$1.readDOMTimeout = null;
        if (this$1$1.composing) {
          if (this$1$1.composing.done) {
            this$1$1.composing = null;
          } else {
            return;
          }
        }
        this$1$1.updateFromDOM();
      }, 80);
    };
    ContentEditableInput.prototype.updateFromDOM = function() {
      var this$1$1 = this;
      if (this.cm.isReadOnly() || !this.pollContent()) {
        runInOp(this.cm, function() {
          return regChange(this$1$1.cm);
        });
      }
    };
    ContentEditableInput.prototype.setUneditable = function(node) {
      node.contentEditable = "false";
    };
    ContentEditableInput.prototype.onKeyPress = function(e) {
      if (e.charCode == 0 || this.composing) {
        return;
      }
      e.preventDefault();
      if (!this.cm.isReadOnly()) {
        operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0);
      }
    };
    ContentEditableInput.prototype.readOnlyChanged = function(val) {
      this.div.contentEditable = String(val != "nocursor");
    };
    ContentEditableInput.prototype.onContextMenu = function() {
    };
    ContentEditableInput.prototype.resetPosition = function() {
    };
    ContentEditableInput.prototype.needsContentAttribute = true;
    function posToDOM(cm, pos) {
      var view = findViewForLine(cm, pos.line);
      if (!view || view.hidden) {
        return null;
      }
      var line = getLine(cm.doc, pos.line);
      var info = mapFromLineView(view, line, pos.line);
      var order = getOrder(line, cm.doc.direction), side = "left";
      if (order) {
        var partPos = getBidiPartAt(order, pos.ch);
        side = partPos % 2 ? "right" : "left";
      }
      var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
      result.offset = result.collapse == "right" ? result.end : result.start;
      return result;
    }
    function isInGutter(node) {
      for (var scan = node; scan; scan = scan.parentNode) {
        if (/CodeMirror-gutter-wrapper/.test(scan.className)) {
          return true;
        }
      }
      return false;
    }
    function badPos(pos, bad) {
      if (bad) {
        pos.bad = true;
      }
      return pos;
    }
    function domTextBetween(cm, from, to, fromLine, toLine) {
      var text = "", closing = false, lineSep = cm.doc.lineSeparator(), extraLinebreak = false;
      function recognizeMarker(id) {
        return function(marker) {
          return marker.id == id;
        };
      }
      function close() {
        if (closing) {
          text += lineSep;
          if (extraLinebreak) {
            text += lineSep;
          }
          closing = extraLinebreak = false;
        }
      }
      function addText(str) {
        if (str) {
          close();
          text += str;
        }
      }
      function walk2(node) {
        if (node.nodeType == 1) {
          var cmText = node.getAttribute("cm-text");
          if (cmText) {
            addText(cmText);
            return;
          }
          var markerID = node.getAttribute("cm-marker"), range2;
          if (markerID) {
            var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
            if (found.length && (range2 = found[0].find(0))) {
              addText(getBetween(cm.doc, range2.from, range2.to).join(lineSep));
            }
            return;
          }
          if (node.getAttribute("contenteditable") == "false") {
            return;
          }
          var isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName);
          if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) {
            return;
          }
          if (isBlock) {
            close();
          }
          for (var i2 = 0; i2 < node.childNodes.length; i2++) {
            walk2(node.childNodes[i2]);
          }
          if (/^(pre|p)$/i.test(node.nodeName)) {
            extraLinebreak = true;
          }
          if (isBlock) {
            closing = true;
          }
        } else if (node.nodeType == 3) {
          addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
        }
      }
      for (; ; ) {
        walk2(from);
        if (from == to) {
          break;
        }
        from = from.nextSibling;
        extraLinebreak = false;
      }
      return text;
    }
    function domToPos(cm, node, offset) {
      var lineNode;
      if (node == cm.display.lineDiv) {
        lineNode = cm.display.lineDiv.childNodes[offset];
        if (!lineNode) {
          return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true);
        }
        node = null;
        offset = 0;
      } else {
        for (lineNode = node; ; lineNode = lineNode.parentNode) {
          if (!lineNode || lineNode == cm.display.lineDiv) {
            return null;
          }
          if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) {
            break;
          }
        }
      }
      for (var i2 = 0; i2 < cm.display.view.length; i2++) {
        var lineView = cm.display.view[i2];
        if (lineView.node == lineNode) {
          return locateNodeInLineView(lineView, node, offset);
        }
      }
    }
    function locateNodeInLineView(lineView, node, offset) {
      var wrapper = lineView.text.firstChild, bad = false;
      if (!node || !contains(wrapper, node)) {
        return badPos(Pos(lineNo(lineView.line), 0), true);
      }
      if (node == wrapper) {
        bad = true;
        node = wrapper.childNodes[offset];
        offset = 0;
        if (!node) {
          var line = lineView.rest ? lst(lineView.rest) : lineView.line;
          return badPos(Pos(lineNo(line), line.text.length), bad);
        }
      }
      var textNode = node.nodeType == 3 ? node : null, topNode = node;
      if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
        textNode = node.firstChild;
        if (offset) {
          offset = textNode.nodeValue.length;
        }
      }
      while (topNode.parentNode != wrapper) {
        topNode = topNode.parentNode;
      }
      var measure = lineView.measure, maps = measure.maps;
      function find(textNode2, topNode2, offset2) {
        for (var i2 = -1; i2 < (maps ? maps.length : 0); i2++) {
          var map2 = i2 < 0 ? measure.map : maps[i2];
          for (var j = 0; j < map2.length; j += 3) {
            var curNode = map2[j + 2];
            if (curNode == textNode2 || curNode == topNode2) {
              var line2 = lineNo(i2 < 0 ? lineView.line : lineView.rest[i2]);
              var ch = map2[j] + offset2;
              if (offset2 < 0 || curNode != textNode2) {
                ch = map2[j + (offset2 ? 1 : 0)];
              }
              return Pos(line2, ch);
            }
          }
        }
      }
      var found = find(textNode, topNode, offset);
      if (found) {
        return badPos(found, bad);
      }
      for (var after = topNode.nextSibling, dist2 = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
        found = find(after, after.firstChild, 0);
        if (found) {
          return badPos(Pos(found.line, found.ch - dist2), bad);
        } else {
          dist2 += after.textContent.length;
        }
      }
      for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
        found = find(before, before.firstChild, -1);
        if (found) {
          return badPos(Pos(found.line, found.ch + dist$1), bad);
        } else {
          dist$1 += before.textContent.length;
        }
      }
    }
    var TextareaInput = function(cm) {
      this.cm = cm;
      this.prevInput = "";
      this.pollingFast = false;
      this.polling = new Delayed();
      this.hasSelection = false;
      this.composing = null;
    };
    TextareaInput.prototype.init = function(display) {
      var this$1$1 = this;
      var input2 = this, cm = this.cm;
      this.createField(display);
      var te = this.textarea;
      display.wrapper.insertBefore(this.wrapper, display.wrapper.firstChild);
      if (ios) {
        te.style.width = "0px";
      }
      on(te, "input", function() {
        if (ie && ie_version >= 9 && this$1$1.hasSelection) {
          this$1$1.hasSelection = null;
        }
        input2.poll();
      });
      on(te, "paste", function(e) {
        if (signalDOMEvent(cm, e) || handlePaste(e, cm)) {
          return;
        }
        cm.state.pasteIncoming = +new Date();
        input2.fastPoll();
      });
      function prepareCopyCut(e) {
        if (signalDOMEvent(cm, e)) {
          return;
        }
        if (cm.somethingSelected()) {
          setLastCopied({ lineWise: false, text: cm.getSelections() });
        } else if (!cm.options.lineWiseCopyCut) {
          return;
        } else {
          var ranges = copyableRanges(cm);
          setLastCopied({ lineWise: true, text: ranges.text });
          if (e.type == "cut") {
            cm.setSelections(ranges.ranges, null, sel_dontScroll);
          } else {
            input2.prevInput = "";
            te.value = ranges.text.join("\n");
            selectInput(te);
          }
        }
        if (e.type == "cut") {
          cm.state.cutIncoming = +new Date();
        }
      }
      on(te, "cut", prepareCopyCut);
      on(te, "copy", prepareCopyCut);
      on(display.scroller, "paste", function(e) {
        if (eventInWidget(display, e) || signalDOMEvent(cm, e)) {
          return;
        }
        if (!te.dispatchEvent) {
          cm.state.pasteIncoming = +new Date();
          input2.focus();
          return;
        }
        var event2 = new Event("paste");
        event2.clipboardData = e.clipboardData;
        te.dispatchEvent(event2);
      });
      on(display.lineSpace, "selectstart", function(e) {
        if (!eventInWidget(display, e)) {
          e_preventDefault(e);
        }
      });
      on(te, "compositionstart", function() {
        var start = cm.getCursor("from");
        if (input2.composing) {
          input2.composing.range.clear();
        }
        input2.composing = {
          start,
          range: cm.markText(start, cm.getCursor("to"), { className: "CodeMirror-composing" })
        };
      });
      on(te, "compositionend", function() {
        if (input2.composing) {
          input2.poll();
          input2.composing.range.clear();
          input2.composing = null;
        }
      });
    };
    TextareaInput.prototype.createField = function(_display) {
      this.wrapper = hiddenTextarea();
      this.textarea = this.wrapper.firstChild;
    };
    TextareaInput.prototype.screenReaderLabelChanged = function(label) {
      if (label) {
        this.textarea.setAttribute("aria-label", label);
      } else {
        this.textarea.removeAttribute("aria-label");
      }
    };
    TextareaInput.prototype.prepareSelection = function() {
      var cm = this.cm, display = cm.display, doc = cm.doc;
      var result = prepareSelection(cm);
      if (cm.options.moveInputWithCursor) {
        var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
        var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
        result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10, headPos.top + lineOff.top - wrapOff.top));
        result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10, headPos.left + lineOff.left - wrapOff.left));
      }
      return result;
    };
    TextareaInput.prototype.showSelection = function(drawn) {
      var cm = this.cm, display = cm.display;
      removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
      removeChildrenAndAdd(display.selectionDiv, drawn.selection);
      if (drawn.teTop != null) {
        this.wrapper.style.top = drawn.teTop + "px";
        this.wrapper.style.left = drawn.teLeft + "px";
      }
    };
    TextareaInput.prototype.reset = function(typing) {
      if (this.contextMenuPending || this.composing) {
        return;
      }
      var cm = this.cm;
      if (cm.somethingSelected()) {
        this.prevInput = "";
        var content = cm.getSelection();
        this.textarea.value = content;
        if (cm.state.focused) {
          selectInput(this.textarea);
        }
        if (ie && ie_version >= 9) {
          this.hasSelection = content;
        }
      } else if (!typing) {
        this.prevInput = this.textarea.value = "";
        if (ie && ie_version >= 9) {
          this.hasSelection = null;
        }
      }
    };
    TextareaInput.prototype.getField = function() {
      return this.textarea;
    };
    TextareaInput.prototype.supportsTouch = function() {
      return false;
    };
    TextareaInput.prototype.focus = function() {
      if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
        try {
          this.textarea.focus();
        } catch (e) {
        }
      }
    };
    TextareaInput.prototype.blur = function() {
      this.textarea.blur();
    };
    TextareaInput.prototype.resetPosition = function() {
      this.wrapper.style.top = this.wrapper.style.left = 0;
    };
    TextareaInput.prototype.receivedFocus = function() {
      this.slowPoll();
    };
    TextareaInput.prototype.slowPoll = function() {
      var this$1$1 = this;
      if (this.pollingFast) {
        return;
      }
      this.polling.set(this.cm.options.pollInterval, function() {
        this$1$1.poll();
        if (this$1$1.cm.state.focused) {
          this$1$1.slowPoll();
        }
      });
    };
    TextareaInput.prototype.fastPoll = function() {
      var missed = false, input2 = this;
      input2.pollingFast = true;
      function p() {
        var changed = input2.poll();
        if (!changed && !missed) {
          missed = true;
          input2.polling.set(60, p);
        } else {
          input2.pollingFast = false;
          input2.slowPoll();
        }
      }
      input2.polling.set(20, p);
    };
    TextareaInput.prototype.poll = function() {
      var this$1$1 = this;
      var cm = this.cm, input2 = this.textarea, prevInput = this.prevInput;
      if (this.contextMenuPending || !cm.state.focused || hasSelection(input2) && !prevInput && !this.composing || cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq) {
        return false;
      }
      var text = input2.value;
      if (text == prevInput && !cm.somethingSelected()) {
        return false;
      }
      if (ie && ie_version >= 9 && this.hasSelection === text || mac && /[\uf700-\uf7ff]/.test(text)) {
        cm.display.input.reset();
        return false;
      }
      if (cm.doc.sel == cm.display.selForContextMenu) {
        var first = text.charCodeAt(0);
        if (first == 8203 && !prevInput) {
          prevInput = "\u200B";
        }
        if (first == 8666) {
          this.reset();
          return this.cm.execCommand("undo");
        }
      }
      var same = 0, l = Math.min(prevInput.length, text.length);
      while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) {
        ++same;
      }
      runInOp(cm, function() {
        applyTextInput(cm, text.slice(same), prevInput.length - same, null, this$1$1.composing ? "*compose" : null);
        if (text.length > 1e3 || text.indexOf("\n") > -1) {
          input2.value = this$1$1.prevInput = "";
        } else {
          this$1$1.prevInput = text;
        }
        if (this$1$1.composing) {
          this$1$1.composing.range.clear();
          this$1$1.composing.range = cm.markText(this$1$1.composing.start, cm.getCursor("to"), { className: "CodeMirror-composing" });
        }
      });
      return true;
    };
    TextareaInput.prototype.ensurePolled = function() {
      if (this.pollingFast && this.poll()) {
        this.pollingFast = false;
      }
    };
    TextareaInput.prototype.onKeyPress = function() {
      if (ie && ie_version >= 9) {
        this.hasSelection = null;
      }
      this.fastPoll();
    };
    TextareaInput.prototype.onContextMenu = function(e) {
      var input2 = this, cm = input2.cm, display = cm.display, te = input2.textarea;
      if (input2.contextMenuPending) {
        input2.contextMenuPending();
      }
      var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
      if (!pos || presto) {
        return;
      }
      var reset = cm.options.resetSelectionOnContextMenu;
      if (reset && cm.doc.sel.contains(pos) == -1) {
        operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);
      }
      var oldCSS = te.style.cssText, oldWrapperCSS = input2.wrapper.style.cssText;
      var wrapperBox = input2.wrapper.offsetParent.getBoundingClientRect();
      input2.wrapper.style.cssText = "position: static";
      te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
      var oldScrollY;
      if (webkit) {
        oldScrollY = window.scrollY;
      }
      display.input.focus();
      if (webkit) {
        window.scrollTo(null, oldScrollY);
      }
      display.input.reset();
      if (!cm.somethingSelected()) {
        te.value = input2.prevInput = " ";
      }
      input2.contextMenuPending = rehide;
      display.selForContextMenu = cm.doc.sel;
      clearTimeout(display.detectingSelectAll);
      function prepareSelectAllHack() {
        if (te.selectionStart != null) {
          var selected = cm.somethingSelected();
          var extval = "\u200B" + (selected ? te.value : "");
          te.value = "\u21DA";
          te.value = extval;
          input2.prevInput = selected ? "" : "\u200B";
          te.selectionStart = 1;
          te.selectionEnd = extval.length;
          display.selForContextMenu = cm.doc.sel;
        }
      }
      function rehide() {
        if (input2.contextMenuPending != rehide) {
          return;
        }
        input2.contextMenuPending = false;
        input2.wrapper.style.cssText = oldWrapperCSS;
        te.style.cssText = oldCSS;
        if (ie && ie_version < 9) {
          display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos);
        }
        if (te.selectionStart != null) {
          if (!ie || ie && ie_version < 9) {
            prepareSelectAllHack();
          }
          var i2 = 0, poll = function() {
            if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 && te.selectionEnd > 0 && input2.prevInput == "\u200B") {
              operation(cm, selectAll)(cm);
            } else if (i2++ < 10) {
              display.detectingSelectAll = setTimeout(poll, 500);
            } else {
              display.selForContextMenu = null;
              display.input.reset();
            }
          };
          display.detectingSelectAll = setTimeout(poll, 200);
        }
      }
      if (ie && ie_version >= 9) {
        prepareSelectAllHack();
      }
      if (captureRightClick) {
        e_stop(e);
        var mouseup = function() {
          off(window, "mouseup", mouseup);
          setTimeout(rehide, 20);
        };
        on(window, "mouseup", mouseup);
      } else {
        setTimeout(rehide, 50);
      }
    };
    TextareaInput.prototype.readOnlyChanged = function(val) {
      if (!val) {
        this.reset();
      }
      this.textarea.disabled = val == "nocursor";
      this.textarea.readOnly = !!val;
    };
    TextareaInput.prototype.setUneditable = function() {
    };
    TextareaInput.prototype.needsContentAttribute = false;
    function fromTextArea(textarea, options) {
      options = options ? copyObj(options) : {};
      options.value = textarea.value;
      if (!options.tabindex && textarea.tabIndex) {
        options.tabindex = textarea.tabIndex;
      }
      if (!options.placeholder && textarea.placeholder) {
        options.placeholder = textarea.placeholder;
      }
      if (options.autofocus == null) {
        var hasFocus = activeElt();
        options.autofocus = hasFocus == textarea || textarea.getAttribute("autofocus") != null && hasFocus == document.body;
      }
      function save() {
        textarea.value = cm.getValue();
      }
      var realSubmit;
      if (textarea.form) {
        on(textarea.form, "submit", save);
        if (!options.leaveSubmitMethodAlone) {
          var form = textarea.form;
          realSubmit = form.submit;
          try {
            var wrappedSubmit = form.submit = function() {
              save();
              form.submit = realSubmit;
              form.submit();
              form.submit = wrappedSubmit;
            };
          } catch (e) {
          }
        }
      }
      options.finishInit = function(cm2) {
        cm2.save = save;
        cm2.getTextArea = function() {
          return textarea;
        };
        cm2.toTextArea = function() {
          cm2.toTextArea = isNaN;
          save();
          textarea.parentNode.removeChild(cm2.getWrapperElement());
          textarea.style.display = "";
          if (textarea.form) {
            off(textarea.form, "submit", save);
            if (!options.leaveSubmitMethodAlone && typeof textarea.form.submit == "function") {
              textarea.form.submit = realSubmit;
            }
          }
        };
      };
      textarea.style.display = "none";
      var cm = CodeMirror2(function(node) {
        return textarea.parentNode.insertBefore(node, textarea.nextSibling);
      }, options);
      return cm;
    }
    function addLegacyProps(CodeMirror3) {
      CodeMirror3.off = off;
      CodeMirror3.on = on;
      CodeMirror3.wheelEventPixels = wheelEventPixels;
      CodeMirror3.Doc = Doc;
      CodeMirror3.splitLines = splitLinesAuto;
      CodeMirror3.countColumn = countColumn;
      CodeMirror3.findColumn = findColumn;
      CodeMirror3.isWordChar = isWordCharBasic;
      CodeMirror3.Pass = Pass;
      CodeMirror3.signal = signal;
      CodeMirror3.Line = Line;
      CodeMirror3.changeEnd = changeEnd;
      CodeMirror3.scrollbarModel = scrollbarModel;
      CodeMirror3.Pos = Pos;
      CodeMirror3.cmpPos = cmp;
      CodeMirror3.modes = modes;
      CodeMirror3.mimeModes = mimeModes;
      CodeMirror3.resolveMode = resolveMode;
      CodeMirror3.getMode = getMode;
      CodeMirror3.modeExtensions = modeExtensions;
      CodeMirror3.extendMode = extendMode;
      CodeMirror3.copyState = copyState;
      CodeMirror3.startState = startState;
      CodeMirror3.innerMode = innerMode;
      CodeMirror3.commands = commands;
      CodeMirror3.keyMap = keyMap;
      CodeMirror3.keyName = keyName;
      CodeMirror3.isModifierKey = isModifierKey;
      CodeMirror3.lookupKey = lookupKey;
      CodeMirror3.normalizeKeyMap = normalizeKeyMap;
      CodeMirror3.StringStream = StringStream;
      CodeMirror3.SharedTextMarker = SharedTextMarker;
      CodeMirror3.TextMarker = TextMarker;
      CodeMirror3.LineWidget = LineWidget;
      CodeMirror3.e_preventDefault = e_preventDefault;
      CodeMirror3.e_stopPropagation = e_stopPropagation;
      CodeMirror3.e_stop = e_stop;
      CodeMirror3.addClass = addClass;
      CodeMirror3.contains = contains;
      CodeMirror3.rmClass = rmClass;
      CodeMirror3.keyNames = keyNames;
    }
    defineOptions(CodeMirror2);
    addEditorMethods(CodeMirror2);
    var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
    for (var prop in Doc.prototype) {
      if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0) {
        CodeMirror2.prototype[prop] = function(method) {
          return function() {
            return method.apply(this.doc, arguments);
          };
        }(Doc.prototype[prop]);
      }
    }
    eventMixin(Doc);
    CodeMirror2.inputStyles = { "textarea": TextareaInput, "contenteditable": ContentEditableInput };
    CodeMirror2.defineMode = function(name) {
      if (!CodeMirror2.defaults.mode && name != "null") {
        CodeMirror2.defaults.mode = name;
      }
      defineMode.apply(this, arguments);
    };
    CodeMirror2.defineMIME = defineMIME;
    CodeMirror2.defineMode("null", function() {
      return { token: function(stream) {
        return stream.skipToEnd();
      } };
    });
    CodeMirror2.defineMIME("text/plain", "null");
    CodeMirror2.defineExtension = function(name, func) {
      CodeMirror2.prototype[name] = func;
    };
    CodeMirror2.defineDocExtension = function(name, func) {
      Doc.prototype[name] = func;
    };
    CodeMirror2.fromTextArea = fromTextArea;
    addLegacyProps(CodeMirror2);
    CodeMirror2.version = "5.63.1";
    return CodeMirror2;
  });
})(codemirror$1);
var CodeMirror = codemirror$1.exports;
var codemirror = "";
var javascript = { exports: {} };
(function(module, exports) {
  (function(mod) {
    mod(codemirror$1.exports);
  })(function(CodeMirror2) {
    CodeMirror2.defineMode("javascript", function(config, parserConfig) {
      var indentUnit = config.indentUnit;
      var statementIndent = parserConfig.statementIndent;
      var jsonldMode = parserConfig.jsonld;
      var jsonMode = parserConfig.json || jsonldMode;
      var trackScope = parserConfig.trackScope !== false;
      var isTS = parserConfig.typescript;
      var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;
      var keywords = function() {
        function kw(type2) {
          return { type: type2, style: "keyword" };
        }
        var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
        var operator = kw("operator"), atom = { type: "atom", style: "atom" };
        return {
          "if": kw("if"),
          "while": A,
          "with": A,
          "else": B,
          "do": B,
          "try": B,
          "finally": B,
          "return": D,
          "break": D,
          "continue": D,
          "new": kw("new"),
          "delete": C,
          "void": C,
          "throw": C,
          "debugger": kw("debugger"),
          "var": kw("var"),
          "const": kw("var"),
          "let": kw("var"),
          "function": kw("function"),
          "catch": kw("catch"),
          "for": kw("for"),
          "switch": kw("switch"),
          "case": kw("case"),
          "default": kw("default"),
          "in": operator,
          "typeof": operator,
          "instanceof": operator,
          "true": atom,
          "false": atom,
          "null": atom,
          "undefined": atom,
          "NaN": atom,
          "Infinity": atom,
          "this": kw("this"),
          "class": kw("class"),
          "super": kw("atom"),
          "yield": C,
          "export": kw("export"),
          "import": kw("import"),
          "extends": C,
          "await": C
        };
      }();
      var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
      var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
      function readRegexp2(stream) {
        var escaped = false, next2, inSet = false;
        while ((next2 = stream.next()) != null) {
          if (!escaped) {
            if (next2 == "/" && !inSet)
              return;
            if (next2 == "[")
              inSet = true;
            else if (inSet && next2 == "]")
              inSet = false;
          }
          escaped = !escaped && next2 == "\\";
        }
      }
      var type, content;
      function ret(tp, style, cont2) {
        type = tp;
        content = cont2;
        return style;
      }
      function tokenBase(stream, state2) {
        var ch = stream.next();
        if (ch == '"' || ch == "'") {
          state2.tokenize = tokenString(ch);
          return state2.tokenize(stream, state2);
        } else if (ch == "." && stream.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
          return ret("number", "number");
        } else if (ch == "." && stream.match("..")) {
          return ret("spread", "meta");
        } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
          return ret(ch);
        } else if (ch == "=" && stream.eat(">")) {
          return ret("=>", "operator");
        } else if (ch == "0" && stream.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) {
          return ret("number", "number");
        } else if (/\d/.test(ch)) {
          stream.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
          return ret("number", "number");
        } else if (ch == "/") {
          if (stream.eat("*")) {
            state2.tokenize = tokenComment;
            return tokenComment(stream, state2);
          } else if (stream.eat("/")) {
            stream.skipToEnd();
            return ret("comment", "comment");
          } else if (expressionAllowed(stream, state2, 1)) {
            readRegexp2(stream);
            stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
            return ret("regexp", "string-2");
          } else {
            stream.eat("=");
            return ret("operator", "operator", stream.current());
          }
        } else if (ch == "`") {
          state2.tokenize = tokenQuasi;
          return tokenQuasi(stream, state2);
        } else if (ch == "#" && stream.peek() == "!") {
          stream.skipToEnd();
          return ret("meta", "meta");
        } else if (ch == "#" && stream.eatWhile(wordRE)) {
          return ret("variable", "property");
        } else if (ch == "<" && stream.match("!--") || ch == "-" && stream.match("->") && !/\S/.test(stream.string.slice(0, stream.start))) {
          stream.skipToEnd();
          return ret("comment", "comment");
        } else if (isOperatorChar.test(ch)) {
          if (ch != ">" || !state2.lexical || state2.lexical.type != ">") {
            if (stream.eat("=")) {
              if (ch == "!" || ch == "=")
                stream.eat("=");
            } else if (/[<>*+\-|&?]/.test(ch)) {
              stream.eat(ch);
              if (ch == ">")
                stream.eat(ch);
            }
          }
          if (ch == "?" && stream.eat("."))
            return ret(".");
          return ret("operator", "operator", stream.current());
        } else if (wordRE.test(ch)) {
          stream.eatWhile(wordRE);
          var word = stream.current();
          if (state2.lastType != ".") {
            if (keywords.propertyIsEnumerable(word)) {
              var kw = keywords[word];
              return ret(kw.type, kw.style, word);
            }
            if (word == "async" && stream.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false))
              return ret("async", "keyword", word);
          }
          return ret("variable", "variable", word);
        }
      }
      function tokenString(quote) {
        return function(stream, state2) {
          var escaped = false, next2;
          if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)) {
            state2.tokenize = tokenBase;
            return ret("jsonld-keyword", "meta");
          }
          while ((next2 = stream.next()) != null) {
            if (next2 == quote && !escaped)
              break;
            escaped = !escaped && next2 == "\\";
          }
          if (!escaped)
            state2.tokenize = tokenBase;
          return ret("string", "string");
        };
      }
      function tokenComment(stream, state2) {
        var maybeEnd = false, ch;
        while (ch = stream.next()) {
          if (ch == "/" && maybeEnd) {
            state2.tokenize = tokenBase;
            break;
          }
          maybeEnd = ch == "*";
        }
        return ret("comment", "comment");
      }
      function tokenQuasi(stream, state2) {
        var escaped = false, next2;
        while ((next2 = stream.next()) != null) {
          if (!escaped && (next2 == "`" || next2 == "$" && stream.eat("{"))) {
            state2.tokenize = tokenBase;
            break;
          }
          escaped = !escaped && next2 == "\\";
        }
        return ret("quasi", "string-2", stream.current());
      }
      var brackets = "([{}])";
      function findFatArrow(stream, state2) {
        if (state2.fatArrowAt)
          state2.fatArrowAt = null;
        var arrow = stream.string.indexOf("=>", stream.start);
        if (arrow < 0)
          return;
        if (isTS) {
          var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow));
          if (m)
            arrow = m.index;
        }
        var depth = 0, sawSomething = false;
        for (var pos = arrow - 1; pos >= 0; --pos) {
          var ch = stream.string.charAt(pos);
          var bracket = brackets.indexOf(ch);
          if (bracket >= 0 && bracket < 3) {
            if (!depth) {
              ++pos;
              break;
            }
            if (--depth == 0) {
              if (ch == "(")
                sawSomething = true;
              break;
            }
          } else if (bracket >= 3 && bracket < 6) {
            ++depth;
          } else if (wordRE.test(ch)) {
            sawSomething = true;
          } else if (/["'\/`]/.test(ch)) {
            for (; ; --pos) {
              if (pos == 0)
                return;
              var next2 = stream.string.charAt(pos - 1);
              if (next2 == ch && stream.string.charAt(pos - 2) != "\\") {
                pos--;
                break;
              }
            }
          } else if (sawSomething && !depth) {
            ++pos;
            break;
          }
        }
        if (sawSomething && !depth)
          state2.fatArrowAt = pos;
      }
      var atomicTypes = {
        "atom": true,
        "number": true,
        "variable": true,
        "string": true,
        "regexp": true,
        "this": true,
        "import": true,
        "jsonld-keyword": true
      };
      function JSLexical(indented, column, type2, align, prev, info) {
        this.indented = indented;
        this.column = column;
        this.type = type2;
        this.prev = prev;
        this.info = info;
        if (align != null)
          this.align = align;
      }
      function inScope(state2, varname) {
        if (!trackScope)
          return false;
        for (var v = state2.localVars; v; v = v.next)
          if (v.name == varname)
            return true;
        for (var cx2 = state2.context; cx2; cx2 = cx2.prev) {
          for (var v = cx2.vars; v; v = v.next)
            if (v.name == varname)
              return true;
        }
      }
      function parseJS(state2, style, type2, content2, stream) {
        var cc = state2.cc;
        cx.state = state2;
        cx.stream = stream;
        cx.marked = null, cx.cc = cc;
        cx.style = style;
        if (!state2.lexical.hasOwnProperty("align"))
          state2.lexical.align = true;
        while (true) {
          var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
          if (combinator(type2, content2)) {
            while (cc.length && cc[cc.length - 1].lex)
              cc.pop()();
            if (cx.marked)
              return cx.marked;
            if (type2 == "variable" && inScope(state2, content2))
              return "variable-2";
            return style;
          }
        }
      }
      var cx = { state: null, column: null, marked: null, cc: null };
      function pass() {
        for (var i = arguments.length - 1; i >= 0; i--)
          cx.cc.push(arguments[i]);
      }
      function cont() {
        pass.apply(null, arguments);
        return true;
      }
      function inList(name, list) {
        for (var v = list; v; v = v.next)
          if (v.name == name)
            return true;
        return false;
      }
      function register(varname) {
        var state2 = cx.state;
        cx.marked = "def";
        if (!trackScope)
          return;
        if (state2.context) {
          if (state2.lexical.info == "var" && state2.context && state2.context.block) {
            var newContext = registerVarScoped(varname, state2.context);
            if (newContext != null) {
              state2.context = newContext;
              return;
            }
          } else if (!inList(varname, state2.localVars)) {
            state2.localVars = new Var(varname, state2.localVars);
            return;
          }
        }
        if (parserConfig.globalVars && !inList(varname, state2.globalVars))
          state2.globalVars = new Var(varname, state2.globalVars);
      }
      function registerVarScoped(varname, context) {
        if (!context) {
          return null;
        } else if (context.block) {
          var inner = registerVarScoped(varname, context.prev);
          if (!inner)
            return null;
          if (inner == context.prev)
            return context;
          return new Context(inner, context.vars, true);
        } else if (inList(varname, context.vars)) {
          return context;
        } else {
          return new Context(context.prev, new Var(varname, context.vars), false);
        }
      }
      function isModifier(name) {
        return name == "public" || name == "private" || name == "protected" || name == "abstract" || name == "readonly";
      }
      function Context(prev, vars, block2) {
        this.prev = prev;
        this.vars = vars;
        this.block = block2;
      }
      function Var(name, next2) {
        this.name = name;
        this.next = next2;
      }
      var defaultVars = new Var("this", new Var("arguments", null));
      function pushcontext() {
        cx.state.context = new Context(cx.state.context, cx.state.localVars, false);
        cx.state.localVars = defaultVars;
      }
      function pushblockcontext() {
        cx.state.context = new Context(cx.state.context, cx.state.localVars, true);
        cx.state.localVars = null;
      }
      function popcontext() {
        cx.state.localVars = cx.state.context.vars;
        cx.state.context = cx.state.context.prev;
      }
      popcontext.lex = true;
      function pushlex(type2, info) {
        var result = function() {
          var state2 = cx.state, indent = state2.indented;
          if (state2.lexical.type == "stat")
            indent = state2.lexical.indented;
          else
            for (var outer = state2.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
              indent = outer.indented;
          state2.lexical = new JSLexical(indent, cx.stream.column(), type2, null, state2.lexical, info);
        };
        result.lex = true;
        return result;
      }
      function poplex() {
        var state2 = cx.state;
        if (state2.lexical.prev) {
          if (state2.lexical.type == ")")
            state2.indented = state2.lexical.indented;
          state2.lexical = state2.lexical.prev;
        }
      }
      poplex.lex = true;
      function expect2(wanted) {
        function exp(type2) {
          if (type2 == wanted)
            return cont();
          else if (wanted == ";" || type2 == "}" || type2 == ")" || type2 == "]")
            return pass();
          else
            return cont(exp);
        }
        return exp;
      }
      function statement(type2, value) {
        if (type2 == "var")
          return cont(pushlex("vardef", value), vardef, expect2(";"), poplex);
        if (type2 == "keyword a")
          return cont(pushlex("form"), parenExpr, statement, poplex);
        if (type2 == "keyword b")
          return cont(pushlex("form"), statement, poplex);
        if (type2 == "keyword d")
          return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect2(";"), poplex);
        if (type2 == "debugger")
          return cont(expect2(";"));
        if (type2 == "{")
          return cont(pushlex("}"), pushblockcontext, block, poplex, popcontext);
        if (type2 == ";")
          return cont();
        if (type2 == "if") {
          if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
            cx.state.cc.pop()();
          return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
        }
        if (type2 == "function")
          return cont(functiondef);
        if (type2 == "for")
          return cont(pushlex("form"), pushblockcontext, forspec, statement, popcontext, poplex);
        if (type2 == "class" || isTS && value == "interface") {
          cx.marked = "keyword";
          return cont(pushlex("form", type2 == "class" ? type2 : value), className, poplex);
        }
        if (type2 == "variable") {
          if (isTS && value == "declare") {
            cx.marked = "keyword";
            return cont(statement);
          } else if (isTS && (value == "module" || value == "enum" || value == "type") && cx.stream.match(/^\s*\w/, false)) {
            cx.marked = "keyword";
            if (value == "enum")
              return cont(enumdef);
            else if (value == "type")
              return cont(typename, expect2("operator"), typeexpr, expect2(";"));
            else
              return cont(pushlex("form"), pattern, expect2("{"), pushlex("}"), block, poplex, poplex);
          } else if (isTS && value == "namespace") {
            cx.marked = "keyword";
            return cont(pushlex("form"), expression, statement, poplex);
          } else if (isTS && value == "abstract") {
            cx.marked = "keyword";
            return cont(statement);
          } else {
            return cont(pushlex("stat"), maybelabel);
          }
        }
        if (type2 == "switch")
          return cont(pushlex("form"), parenExpr, expect2("{"), pushlex("}", "switch"), pushblockcontext, block, poplex, poplex, popcontext);
        if (type2 == "case")
          return cont(expression, expect2(":"));
        if (type2 == "default")
          return cont(expect2(":"));
        if (type2 == "catch")
          return cont(pushlex("form"), pushcontext, maybeCatchBinding, statement, poplex, popcontext);
        if (type2 == "export")
          return cont(pushlex("stat"), afterExport, poplex);
        if (type2 == "import")
          return cont(pushlex("stat"), afterImport, poplex);
        if (type2 == "async")
          return cont(statement);
        if (value == "@")
          return cont(expression, statement);
        return pass(pushlex("stat"), expression, expect2(";"), poplex);
      }
      function maybeCatchBinding(type2) {
        if (type2 == "(")
          return cont(funarg, expect2(")"));
      }
      function expression(type2, value) {
        return expressionInner(type2, value, false);
      }
      function expressionNoComma(type2, value) {
        return expressionInner(type2, value, true);
      }
      function parenExpr(type2) {
        if (type2 != "(")
          return pass();
        return cont(pushlex(")"), maybeexpression, expect2(")"), poplex);
      }
      function expressionInner(type2, value, noComma) {
        if (cx.state.fatArrowAt == cx.stream.start) {
          var body = noComma ? arrowBodyNoComma : arrowBody;
          if (type2 == "(")
            return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect2("=>"), body, popcontext);
          else if (type2 == "variable")
            return pass(pushcontext, pattern, expect2("=>"), body, popcontext);
        }
        var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
        if (atomicTypes.hasOwnProperty(type2))
          return cont(maybeop);
        if (type2 == "function")
          return cont(functiondef, maybeop);
        if (type2 == "class" || isTS && value == "interface") {
          cx.marked = "keyword";
          return cont(pushlex("form"), classExpression, poplex);
        }
        if (type2 == "keyword c" || type2 == "async")
          return cont(noComma ? expressionNoComma : expression);
        if (type2 == "(")
          return cont(pushlex(")"), maybeexpression, expect2(")"), poplex, maybeop);
        if (type2 == "operator" || type2 == "spread")
          return cont(noComma ? expressionNoComma : expression);
        if (type2 == "[")
          return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
        if (type2 == "{")
          return contCommasep(objprop, "}", null, maybeop);
        if (type2 == "quasi")
          return pass(quasi, maybeop);
        if (type2 == "new")
          return cont(maybeTarget(noComma));
        return cont();
      }
      function maybeexpression(type2) {
        if (type2.match(/[;\}\)\],]/))
          return pass();
        return pass(expression);
      }
      function maybeoperatorComma(type2, value) {
        if (type2 == ",")
          return cont(maybeexpression);
        return maybeoperatorNoComma(type2, value, false);
      }
      function maybeoperatorNoComma(type2, value, noComma) {
        var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
        var expr = noComma == false ? expression : expressionNoComma;
        if (type2 == "=>")
          return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
        if (type2 == "operator") {
          if (/\+\+|--/.test(value) || isTS && value == "!")
            return cont(me);
          if (isTS && value == "<" && cx.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false))
            return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, me);
          if (value == "?")
            return cont(expression, expect2(":"), expr);
          return cont(expr);
        }
        if (type2 == "quasi") {
          return pass(quasi, me);
        }
        if (type2 == ";")
          return;
        if (type2 == "(")
          return contCommasep(expressionNoComma, ")", "call", me);
        if (type2 == ".")
          return cont(property, me);
        if (type2 == "[")
          return cont(pushlex("]"), maybeexpression, expect2("]"), poplex, me);
        if (isTS && value == "as") {
          cx.marked = "keyword";
          return cont(typeexpr, me);
        }
        if (type2 == "regexp") {
          cx.state.lastType = cx.marked = "operator";
          cx.stream.backUp(cx.stream.pos - cx.stream.start - 1);
          return cont(expr);
        }
      }
      function quasi(type2, value) {
        if (type2 != "quasi")
          return pass();
        if (value.slice(value.length - 2) != "${")
          return cont(quasi);
        return cont(maybeexpression, continueQuasi);
      }
      function continueQuasi(type2) {
        if (type2 == "}") {
          cx.marked = "string-2";
          cx.state.tokenize = tokenQuasi;
          return cont(quasi);
        }
      }
      function arrowBody(type2) {
        findFatArrow(cx.stream, cx.state);
        return pass(type2 == "{" ? statement : expression);
      }
      function arrowBodyNoComma(type2) {
        findFatArrow(cx.stream, cx.state);
        return pass(type2 == "{" ? statement : expressionNoComma);
      }
      function maybeTarget(noComma) {
        return function(type2) {
          if (type2 == ".")
            return cont(noComma ? targetNoComma : target);
          else if (type2 == "variable" && isTS)
            return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma);
          else
            return pass(noComma ? expressionNoComma : expression);
        };
      }
      function target(_, value) {
        if (value == "target") {
          cx.marked = "keyword";
          return cont(maybeoperatorComma);
        }
      }
      function targetNoComma(_, value) {
        if (value == "target") {
          cx.marked = "keyword";
          return cont(maybeoperatorNoComma);
        }
      }
      function maybelabel(type2) {
        if (type2 == ":")
          return cont(poplex, statement);
        return pass(maybeoperatorComma, expect2(";"), poplex);
      }
      function property(type2) {
        if (type2 == "variable") {
          cx.marked = "property";
          return cont();
        }
      }
      function objprop(type2, value) {
        if (type2 == "async") {
          cx.marked = "property";
          return cont(objprop);
        } else if (type2 == "variable" || cx.style == "keyword") {
          cx.marked = "property";
          if (value == "get" || value == "set")
            return cont(getterSetter);
          var m;
          if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false)))
            cx.state.fatArrowAt = cx.stream.pos + m[0].length;
          return cont(afterprop);
        } else if (type2 == "number" || type2 == "string") {
          cx.marked = jsonldMode ? "property" : cx.style + " property";
          return cont(afterprop);
        } else if (type2 == "jsonld-keyword") {
          return cont(afterprop);
        } else if (isTS && isModifier(value)) {
          cx.marked = "keyword";
          return cont(objprop);
        } else if (type2 == "[") {
          return cont(expression, maybetype, expect2("]"), afterprop);
        } else if (type2 == "spread") {
          return cont(expressionNoComma, afterprop);
        } else if (value == "*") {
          cx.marked = "keyword";
          return cont(objprop);
        } else if (type2 == ":") {
          return pass(afterprop);
        }
      }
      function getterSetter(type2) {
        if (type2 != "variable")
          return pass(afterprop);
        cx.marked = "property";
        return cont(functiondef);
      }
      function afterprop(type2) {
        if (type2 == ":")
          return cont(expressionNoComma);
        if (type2 == "(")
          return pass(functiondef);
      }
      function commasep(what, end, sep) {
        function proceed(type2, value) {
          if (sep ? sep.indexOf(type2) > -1 : type2 == ",") {
            var lex = cx.state.lexical;
            if (lex.info == "call")
              lex.pos = (lex.pos || 0) + 1;
            return cont(function(type3, value2) {
              if (type3 == end || value2 == end)
                return pass();
              return pass(what);
            }, proceed);
          }
          if (type2 == end || value == end)
            return cont();
          if (sep && sep.indexOf(";") > -1)
            return pass(what);
          return cont(expect2(end));
        }
        return function(type2, value) {
          if (type2 == end || value == end)
            return cont();
          return pass(what, proceed);
        };
      }
      function contCommasep(what, end, info) {
        for (var i = 3; i < arguments.length; i++)
          cx.cc.push(arguments[i]);
        return cont(pushlex(end, info), commasep(what, end), poplex);
      }
      function block(type2) {
        if (type2 == "}")
          return cont();
        return pass(statement, block);
      }
      function maybetype(type2, value) {
        if (isTS) {
          if (type2 == ":")
            return cont(typeexpr);
          if (value == "?")
            return cont(maybetype);
        }
      }
      function maybetypeOrIn(type2, value) {
        if (isTS && (type2 == ":" || value == "in"))
          return cont(typeexpr);
      }
      function mayberettype(type2) {
        if (isTS && type2 == ":") {
          if (cx.stream.match(/^\s*\w+\s+is\b/, false))
            return cont(expression, isKW, typeexpr);
          else
            return cont(typeexpr);
        }
      }
      function isKW(_, value) {
        if (value == "is") {
          cx.marked = "keyword";
          return cont();
        }
      }
      function typeexpr(type2, value) {
        if (value == "keyof" || value == "typeof" || value == "infer" || value == "readonly") {
          cx.marked = "keyword";
          return cont(value == "typeof" ? expressionNoComma : typeexpr);
        }
        if (type2 == "variable" || value == "void") {
          cx.marked = "type";
          return cont(afterType);
        }
        if (value == "|" || value == "&")
          return cont(typeexpr);
        if (type2 == "string" || type2 == "number" || type2 == "atom")
          return cont(afterType);
        if (type2 == "[")
          return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType);
        if (type2 == "{")
          return cont(pushlex("}"), typeprops, poplex, afterType);
        if (type2 == "(")
          return cont(commasep(typearg, ")"), maybeReturnType, afterType);
        if (type2 == "<")
          return cont(commasep(typeexpr, ">"), typeexpr);
        if (type2 == "quasi") {
          return pass(quasiType, afterType);
        }
      }
      function maybeReturnType(type2) {
        if (type2 == "=>")
          return cont(typeexpr);
      }
      function typeprops(type2) {
        if (type2.match(/[\}\)\]]/))
          return cont();
        if (type2 == "," || type2 == ";")
          return cont(typeprops);
        return pass(typeprop, typeprops);
      }
      function typeprop(type2, value) {
        if (type2 == "variable" || cx.style == "keyword") {
          cx.marked = "property";
          return cont(typeprop);
        } else if (value == "?" || type2 == "number" || type2 == "string") {
          return cont(typeprop);
        } else if (type2 == ":") {
          return cont(typeexpr);
        } else if (type2 == "[") {
          return cont(expect2("variable"), maybetypeOrIn, expect2("]"), typeprop);
        } else if (type2 == "(") {
          return pass(functiondecl, typeprop);
        } else if (!type2.match(/[;\}\)\],]/)) {
          return cont();
        }
      }
      function quasiType(type2, value) {
        if (type2 != "quasi")
          return pass();
        if (value.slice(value.length - 2) != "${")
          return cont(quasiType);
        return cont(typeexpr, continueQuasiType);
      }
      function continueQuasiType(type2) {
        if (type2 == "}") {
          cx.marked = "string-2";
          cx.state.tokenize = tokenQuasi;
          return cont(quasiType);
        }
      }
      function typearg(type2, value) {
        if (type2 == "variable" && cx.stream.match(/^\s*[?:]/, false) || value == "?")
          return cont(typearg);
        if (type2 == ":")
          return cont(typeexpr);
        if (type2 == "spread")
          return cont(typearg);
        return pass(typeexpr);
      }
      function afterType(type2, value) {
        if (value == "<")
          return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType);
        if (value == "|" || type2 == "." || value == "&")
          return cont(typeexpr);
        if (type2 == "[")
          return cont(typeexpr, expect2("]"), afterType);
        if (value == "extends" || value == "implements") {
          cx.marked = "keyword";
          return cont(typeexpr);
        }
        if (value == "?")
          return cont(typeexpr, expect2(":"), typeexpr);
      }
      function maybeTypeArgs(_, value) {
        if (value == "<")
          return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType);
      }
      function typeparam() {
        return pass(typeexpr, maybeTypeDefault);
      }
      function maybeTypeDefault(_, value) {
        if (value == "=")
          return cont(typeexpr);
      }
      function vardef(_, value) {
        if (value == "enum") {
          cx.marked = "keyword";
          return cont(enumdef);
        }
        return pass(pattern, maybetype, maybeAssign, vardefCont);
      }
      function pattern(type2, value) {
        if (isTS && isModifier(value)) {
          cx.marked = "keyword";
          return cont(pattern);
        }
        if (type2 == "variable") {
          register(value);
          return cont();
        }
        if (type2 == "spread")
          return cont(pattern);
        if (type2 == "[")
          return contCommasep(eltpattern, "]");
        if (type2 == "{")
          return contCommasep(proppattern, "}");
      }
      function proppattern(type2, value) {
        if (type2 == "variable" && !cx.stream.match(/^\s*:/, false)) {
          register(value);
          return cont(maybeAssign);
        }
        if (type2 == "variable")
          cx.marked = "property";
        if (type2 == "spread")
          return cont(pattern);
        if (type2 == "}")
          return pass();
        if (type2 == "[")
          return cont(expression, expect2("]"), expect2(":"), proppattern);
        return cont(expect2(":"), pattern, maybeAssign);
      }
      function eltpattern() {
        return pass(pattern, maybeAssign);
      }
      function maybeAssign(_type, value) {
        if (value == "=")
          return cont(expressionNoComma);
      }
      function vardefCont(type2) {
        if (type2 == ",")
          return cont(vardef);
      }
      function maybeelse(type2, value) {
        if (type2 == "keyword b" && value == "else")
          return cont(pushlex("form", "else"), statement, poplex);
      }
      function forspec(type2, value) {
        if (value == "await")
          return cont(forspec);
        if (type2 == "(")
          return cont(pushlex(")"), forspec1, poplex);
      }
      function forspec1(type2) {
        if (type2 == "var")
          return cont(vardef, forspec2);
        if (type2 == "variable")
          return cont(forspec2);
        return pass(forspec2);
      }
      function forspec2(type2, value) {
        if (type2 == ")")
          return cont();
        if (type2 == ";")
          return cont(forspec2);
        if (value == "in" || value == "of") {
          cx.marked = "keyword";
          return cont(expression, forspec2);
        }
        return pass(expression, forspec2);
      }
      function functiondef(type2, value) {
        if (value == "*") {
          cx.marked = "keyword";
          return cont(functiondef);
        }
        if (type2 == "variable") {
          register(value);
          return cont(functiondef);
        }
        if (type2 == "(")
          return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, statement, popcontext);
        if (isTS && value == "<")
          return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondef);
      }
      function functiondecl(type2, value) {
        if (value == "*") {
          cx.marked = "keyword";
          return cont(functiondecl);
        }
        if (type2 == "variable") {
          register(value);
          return cont(functiondecl);
        }
        if (type2 == "(")
          return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, popcontext);
        if (isTS && value == "<")
          return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondecl);
      }
      function typename(type2, value) {
        if (type2 == "keyword" || type2 == "variable") {
          cx.marked = "type";
          return cont(typename);
        } else if (value == "<") {
          return cont(pushlex(">"), commasep(typeparam, ">"), poplex);
        }
      }
      function funarg(type2, value) {
        if (value == "@")
          cont(expression, funarg);
        if (type2 == "spread")
          return cont(funarg);
        if (isTS && isModifier(value)) {
          cx.marked = "keyword";
          return cont(funarg);
        }
        if (isTS && type2 == "this")
          return cont(maybetype, maybeAssign);
        return pass(pattern, maybetype, maybeAssign);
      }
      function classExpression(type2, value) {
        if (type2 == "variable")
          return className(type2, value);
        return classNameAfter(type2, value);
      }
      function className(type2, value) {
        if (type2 == "variable") {
          register(value);
          return cont(classNameAfter);
        }
      }
      function classNameAfter(type2, value) {
        if (value == "<")
          return cont(pushlex(">"), commasep(typeparam, ">"), poplex, classNameAfter);
        if (value == "extends" || value == "implements" || isTS && type2 == ",") {
          if (value == "implements")
            cx.marked = "keyword";
          return cont(isTS ? typeexpr : expression, classNameAfter);
        }
        if (type2 == "{")
          return cont(pushlex("}"), classBody, poplex);
      }
      function classBody(type2, value) {
        if (type2 == "async" || type2 == "variable" && (value == "static" || value == "get" || value == "set" || isTS && isModifier(value)) && cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false)) {
          cx.marked = "keyword";
          return cont(classBody);
        }
        if (type2 == "variable" || cx.style == "keyword") {
          cx.marked = "property";
          return cont(classfield, classBody);
        }
        if (type2 == "number" || type2 == "string")
          return cont(classfield, classBody);
        if (type2 == "[")
          return cont(expression, maybetype, expect2("]"), classfield, classBody);
        if (value == "*") {
          cx.marked = "keyword";
          return cont(classBody);
        }
        if (isTS && type2 == "(")
          return pass(functiondecl, classBody);
        if (type2 == ";" || type2 == ",")
          return cont(classBody);
        if (type2 == "}")
          return cont();
        if (value == "@")
          return cont(expression, classBody);
      }
      function classfield(type2, value) {
        if (value == "!")
          return cont(classfield);
        if (value == "?")
          return cont(classfield);
        if (type2 == ":")
          return cont(typeexpr, maybeAssign);
        if (value == "=")
          return cont(expressionNoComma);
        var context = cx.state.lexical.prev, isInterface = context && context.info == "interface";
        return pass(isInterface ? functiondecl : functiondef);
      }
      function afterExport(type2, value) {
        if (value == "*") {
          cx.marked = "keyword";
          return cont(maybeFrom, expect2(";"));
        }
        if (value == "default") {
          cx.marked = "keyword";
          return cont(expression, expect2(";"));
        }
        if (type2 == "{")
          return cont(commasep(exportField, "}"), maybeFrom, expect2(";"));
        return pass(statement);
      }
      function exportField(type2, value) {
        if (value == "as") {
          cx.marked = "keyword";
          return cont(expect2("variable"));
        }
        if (type2 == "variable")
          return pass(expressionNoComma, exportField);
      }
      function afterImport(type2) {
        if (type2 == "string")
          return cont();
        if (type2 == "(")
          return pass(expression);
        if (type2 == ".")
          return pass(maybeoperatorComma);
        return pass(importSpec, maybeMoreImports, maybeFrom);
      }
      function importSpec(type2, value) {
        if (type2 == "{")
          return contCommasep(importSpec, "}");
        if (type2 == "variable")
          register(value);
        if (value == "*")
          cx.marked = "keyword";
        return cont(maybeAs);
      }
      function maybeMoreImports(type2) {
        if (type2 == ",")
          return cont(importSpec, maybeMoreImports);
      }
      function maybeAs(_type, value) {
        if (value == "as") {
          cx.marked = "keyword";
          return cont(importSpec);
        }
      }
      function maybeFrom(_type, value) {
        if (value == "from") {
          cx.marked = "keyword";
          return cont(expression);
        }
      }
      function arrayLiteral(type2) {
        if (type2 == "]")
          return cont();
        return pass(commasep(expressionNoComma, "]"));
      }
      function enumdef() {
        return pass(pushlex("form"), pattern, expect2("{"), pushlex("}"), commasep(enummember, "}"), poplex, poplex);
      }
      function enummember() {
        return pass(pattern, maybeAssign);
      }
      function isContinuedStatement(state2, textAfter) {
        return state2.lastType == "operator" || state2.lastType == "," || isOperatorChar.test(textAfter.charAt(0)) || /[,.]/.test(textAfter.charAt(0));
      }
      function expressionAllowed(stream, state2, backUp) {
        return state2.tokenize == tokenBase && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state2.lastType) || state2.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0)));
      }
      return {
        startState: function(basecolumn) {
          var state2 = {
            tokenize: tokenBase,
            lastType: "sof",
            cc: [],
            lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
            localVars: parserConfig.localVars,
            context: parserConfig.localVars && new Context(null, null, false),
            indented: basecolumn || 0
          };
          if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
            state2.globalVars = parserConfig.globalVars;
          return state2;
        },
        token: function(stream, state2) {
          if (stream.sol()) {
            if (!state2.lexical.hasOwnProperty("align"))
              state2.lexical.align = false;
            state2.indented = stream.indentation();
            findFatArrow(stream, state2);
          }
          if (state2.tokenize != tokenComment && stream.eatSpace())
            return null;
          var style = state2.tokenize(stream, state2);
          if (type == "comment")
            return style;
          state2.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
          return parseJS(state2, style, type, content, stream);
        },
        indent: function(state2, textAfter) {
          if (state2.tokenize == tokenComment || state2.tokenize == tokenQuasi)
            return CodeMirror2.Pass;
          if (state2.tokenize != tokenBase)
            return 0;
          var firstChar = textAfter && textAfter.charAt(0), lexical = state2.lexical, top;
          if (!/^\s*else\b/.test(textAfter))
            for (var i = state2.cc.length - 1; i >= 0; --i) {
              var c = state2.cc[i];
              if (c == poplex)
                lexical = lexical.prev;
              else if (c != maybeelse && c != popcontext)
                break;
            }
          while ((lexical.type == "stat" || lexical.type == "form") && (firstChar == "}" || (top = state2.cc[state2.cc.length - 1]) && (top == maybeoperatorComma || top == maybeoperatorNoComma) && !/^[,\.=+\-*:?[\(]/.test(textAfter)))
            lexical = lexical.prev;
          if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
            lexical = lexical.prev;
          var type2 = lexical.type, closing = firstChar == type2;
          if (type2 == "vardef")
            return lexical.indented + (state2.lastType == "operator" || state2.lastType == "," ? lexical.info.length + 1 : 0);
          else if (type2 == "form" && firstChar == "{")
            return lexical.indented;
          else if (type2 == "form")
            return lexical.indented + indentUnit;
          else if (type2 == "stat")
            return lexical.indented + (isContinuedStatement(state2, textAfter) ? statementIndent || indentUnit : 0);
          else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
            return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
          else if (lexical.align)
            return lexical.column + (closing ? 0 : 1);
          else
            return lexical.indented + (closing ? 0 : indentUnit);
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: jsonMode ? null : "/*",
        blockCommentEnd: jsonMode ? null : "*/",
        blockCommentContinue: jsonMode ? null : " * ",
        lineComment: jsonMode ? null : "//",
        fold: "brace",
        closeBrackets: "()[]{}''\"\"``",
        helperType: jsonMode ? "json" : "javascript",
        jsonldMode,
        jsonMode,
        expressionAllowed,
        skipExpression: function(state2) {
          parseJS(state2, "atom", "atom", "true", new CodeMirror2.StringStream("", 2, null));
        }
      };
    });
    CodeMirror2.registerHelper("wordChars", "javascript", /[\w$]/);
    CodeMirror2.defineMIME("text/javascript", "javascript");
    CodeMirror2.defineMIME("text/ecmascript", "javascript");
    CodeMirror2.defineMIME("application/javascript", "javascript");
    CodeMirror2.defineMIME("application/x-javascript", "javascript");
    CodeMirror2.defineMIME("application/ecmascript", "javascript");
    CodeMirror2.defineMIME("application/json", { name: "javascript", json: true });
    CodeMirror2.defineMIME("application/x-json", { name: "javascript", json: true });
    CodeMirror2.defineMIME("application/manifest+json", { name: "javascript", json: true });
    CodeMirror2.defineMIME("application/ld+json", { name: "javascript", jsonld: true });
    CodeMirror2.defineMIME("text/typescript", { name: "javascript", typescript: true });
    CodeMirror2.defineMIME("application/typescript", { name: "javascript", typescript: true });
  });
})();
var css = { exports: {} };
(function(module, exports) {
  (function(mod) {
    mod(codemirror$1.exports);
  })(function(CodeMirror2) {
    CodeMirror2.defineMode("css", function(config, parserConfig) {
      var inline = parserConfig.inline;
      if (!parserConfig.propertyKeywords)
        parserConfig = CodeMirror2.resolveMode("text/css");
      var indentUnit = config.indentUnit, tokenHooks = parserConfig.tokenHooks, documentTypes2 = parserConfig.documentTypes || {}, mediaTypes2 = parserConfig.mediaTypes || {}, mediaFeatures2 = parserConfig.mediaFeatures || {}, mediaValueKeywords2 = parserConfig.mediaValueKeywords || {}, propertyKeywords2 = parserConfig.propertyKeywords || {}, nonStandardPropertyKeywords2 = parserConfig.nonStandardPropertyKeywords || {}, fontProperties2 = parserConfig.fontProperties || {}, counterDescriptors2 = parserConfig.counterDescriptors || {}, colorKeywords2 = parserConfig.colorKeywords || {}, valueKeywords2 = parserConfig.valueKeywords || {}, allowNested = parserConfig.allowNested, lineComment = parserConfig.lineComment, supportsAtComponent = parserConfig.supportsAtComponent === true, highlightNonStandardPropertyKeywords = config.highlightNonStandardPropertyKeywords !== false;
      var type, override;
      function ret(style, tp) {
        type = tp;
        return style;
      }
      function tokenBase(stream, state2) {
        var ch = stream.next();
        if (tokenHooks[ch]) {
          var result = tokenHooks[ch](stream, state2);
          if (result !== false)
            return result;
        }
        if (ch == "@") {
          stream.eatWhile(/[\w\\\-]/);
          return ret("def", stream.current());
        } else if (ch == "=" || (ch == "~" || ch == "|") && stream.eat("=")) {
          return ret(null, "compare");
        } else if (ch == '"' || ch == "'") {
          state2.tokenize = tokenString(ch);
          return state2.tokenize(stream, state2);
        } else if (ch == "#") {
          stream.eatWhile(/[\w\\\-]/);
          return ret("atom", "hash");
        } else if (ch == "!") {
          stream.match(/^\s*\w*/);
          return ret("keyword", "important");
        } else if (/\d/.test(ch) || ch == "." && stream.eat(/\d/)) {
          stream.eatWhile(/[\w.%]/);
          return ret("number", "unit");
        } else if (ch === "-") {
          if (/[\d.]/.test(stream.peek())) {
            stream.eatWhile(/[\w.%]/);
            return ret("number", "unit");
          } else if (stream.match(/^-[\w\\\-]*/)) {
            stream.eatWhile(/[\w\\\-]/);
            if (stream.match(/^\s*:/, false))
              return ret("variable-2", "variable-definition");
            return ret("variable-2", "variable");
          } else if (stream.match(/^\w+-/)) {
            return ret("meta", "meta");
          }
        } else if (/[,+>*\/]/.test(ch)) {
          return ret(null, "select-op");
        } else if (ch == "." && stream.match(/^-?[_a-z][_a-z0-9-]*/i)) {
          return ret("qualifier", "qualifier");
        } else if (/[:;{}\[\]\(\)]/.test(ch)) {
          return ret(null, ch);
        } else if (stream.match(/^[\w-.]+(?=\()/)) {
          if (/^(url(-prefix)?|domain|regexp)$/i.test(stream.current())) {
            state2.tokenize = tokenParenthesized;
          }
          return ret("variable callee", "variable");
        } else if (/[\w\\\-]/.test(ch)) {
          stream.eatWhile(/[\w\\\-]/);
          return ret("property", "word");
        } else {
          return ret(null, null);
        }
      }
      function tokenString(quote) {
        return function(stream, state2) {
          var escaped = false, ch;
          while ((ch = stream.next()) != null) {
            if (ch == quote && !escaped) {
              if (quote == ")")
                stream.backUp(1);
              break;
            }
            escaped = !escaped && ch == "\\";
          }
          if (ch == quote || !escaped && quote != ")")
            state2.tokenize = null;
          return ret("string", "string");
        };
      }
      function tokenParenthesized(stream, state2) {
        stream.next();
        if (!stream.match(/^\s*[\"\')]/, false))
          state2.tokenize = tokenString(")");
        else
          state2.tokenize = null;
        return ret(null, "(");
      }
      function Context(type2, indent, prev) {
        this.type = type2;
        this.indent = indent;
        this.prev = prev;
      }
      function pushContext(state2, stream, type2, indent) {
        state2.context = new Context(type2, stream.indentation() + (indent === false ? 0 : indentUnit), state2.context);
        return type2;
      }
      function popContext(state2) {
        if (state2.context.prev)
          state2.context = state2.context.prev;
        return state2.context.type;
      }
      function pass(type2, stream, state2) {
        return states[state2.context.type](type2, stream, state2);
      }
      function popAndPass(type2, stream, state2, n) {
        for (var i = n || 1; i > 0; i--)
          state2.context = state2.context.prev;
        return pass(type2, stream, state2);
      }
      function wordAsValue(stream) {
        var word = stream.current().toLowerCase();
        if (valueKeywords2.hasOwnProperty(word))
          override = "atom";
        else if (colorKeywords2.hasOwnProperty(word))
          override = "keyword";
        else
          override = "variable";
      }
      var states = {};
      states.top = function(type2, stream, state2) {
        if (type2 == "{") {
          return pushContext(state2, stream, "block");
        } else if (type2 == "}" && state2.context.prev) {
          return popContext(state2);
        } else if (supportsAtComponent && /@component/i.test(type2)) {
          return pushContext(state2, stream, "atComponentBlock");
        } else if (/^@(-moz-)?document$/i.test(type2)) {
          return pushContext(state2, stream, "documentTypes");
        } else if (/^@(media|supports|(-moz-)?document|import)$/i.test(type2)) {
          return pushContext(state2, stream, "atBlock");
        } else if (/^@(font-face|counter-style)/i.test(type2)) {
          state2.stateArg = type2;
          return "restricted_atBlock_before";
        } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(type2)) {
          return "keyframes";
        } else if (type2 && type2.charAt(0) == "@") {
          return pushContext(state2, stream, "at");
        } else if (type2 == "hash") {
          override = "builtin";
        } else if (type2 == "word") {
          override = "tag";
        } else if (type2 == "variable-definition") {
          return "maybeprop";
        } else if (type2 == "interpolation") {
          return pushContext(state2, stream, "interpolation");
        } else if (type2 == ":") {
          return "pseudo";
        } else if (allowNested && type2 == "(") {
          return pushContext(state2, stream, "parens");
        }
        return state2.context.type;
      };
      states.block = function(type2, stream, state2) {
        if (type2 == "word") {
          var word = stream.current().toLowerCase();
          if (propertyKeywords2.hasOwnProperty(word)) {
            override = "property";
            return "maybeprop";
          } else if (nonStandardPropertyKeywords2.hasOwnProperty(word)) {
            override = highlightNonStandardPropertyKeywords ? "string-2" : "property";
            return "maybeprop";
          } else if (allowNested) {
            override = stream.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag";
            return "block";
          } else {
            override += " error";
            return "maybeprop";
          }
        } else if (type2 == "meta") {
          return "block";
        } else if (!allowNested && (type2 == "hash" || type2 == "qualifier")) {
          override = "error";
          return "block";
        } else {
          return states.top(type2, stream, state2);
        }
      };
      states.maybeprop = function(type2, stream, state2) {
        if (type2 == ":")
          return pushContext(state2, stream, "prop");
        return pass(type2, stream, state2);
      };
      states.prop = function(type2, stream, state2) {
        if (type2 == ";")
          return popContext(state2);
        if (type2 == "{" && allowNested)
          return pushContext(state2, stream, "propBlock");
        if (type2 == "}" || type2 == "{")
          return popAndPass(type2, stream, state2);
        if (type2 == "(")
          return pushContext(state2, stream, "parens");
        if (type2 == "hash" && !/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(stream.current())) {
          override += " error";
        } else if (type2 == "word") {
          wordAsValue(stream);
        } else if (type2 == "interpolation") {
          return pushContext(state2, stream, "interpolation");
        }
        return "prop";
      };
      states.propBlock = function(type2, _stream, state2) {
        if (type2 == "}")
          return popContext(state2);
        if (type2 == "word") {
          override = "property";
          return "maybeprop";
        }
        return state2.context.type;
      };
      states.parens = function(type2, stream, state2) {
        if (type2 == "{" || type2 == "}")
          return popAndPass(type2, stream, state2);
        if (type2 == ")")
          return popContext(state2);
        if (type2 == "(")
          return pushContext(state2, stream, "parens");
        if (type2 == "interpolation")
          return pushContext(state2, stream, "interpolation");
        if (type2 == "word")
          wordAsValue(stream);
        return "parens";
      };
      states.pseudo = function(type2, stream, state2) {
        if (type2 == "meta")
          return "pseudo";
        if (type2 == "word") {
          override = "variable-3";
          return state2.context.type;
        }
        return pass(type2, stream, state2);
      };
      states.documentTypes = function(type2, stream, state2) {
        if (type2 == "word" && documentTypes2.hasOwnProperty(stream.current())) {
          override = "tag";
          return state2.context.type;
        } else {
          return states.atBlock(type2, stream, state2);
        }
      };
      states.atBlock = function(type2, stream, state2) {
        if (type2 == "(")
          return pushContext(state2, stream, "atBlock_parens");
        if (type2 == "}" || type2 == ";")
          return popAndPass(type2, stream, state2);
        if (type2 == "{")
          return popContext(state2) && pushContext(state2, stream, allowNested ? "block" : "top");
        if (type2 == "interpolation")
          return pushContext(state2, stream, "interpolation");
        if (type2 == "word") {
          var word = stream.current().toLowerCase();
          if (word == "only" || word == "not" || word == "and" || word == "or")
            override = "keyword";
          else if (mediaTypes2.hasOwnProperty(word))
            override = "attribute";
          else if (mediaFeatures2.hasOwnProperty(word))
            override = "property";
          else if (mediaValueKeywords2.hasOwnProperty(word))
            override = "keyword";
          else if (propertyKeywords2.hasOwnProperty(word))
            override = "property";
          else if (nonStandardPropertyKeywords2.hasOwnProperty(word))
            override = highlightNonStandardPropertyKeywords ? "string-2" : "property";
          else if (valueKeywords2.hasOwnProperty(word))
            override = "atom";
          else if (colorKeywords2.hasOwnProperty(word))
            override = "keyword";
          else
            override = "error";
        }
        return state2.context.type;
      };
      states.atComponentBlock = function(type2, stream, state2) {
        if (type2 == "}")
          return popAndPass(type2, stream, state2);
        if (type2 == "{")
          return popContext(state2) && pushContext(state2, stream, allowNested ? "block" : "top", false);
        if (type2 == "word")
          override = "error";
        return state2.context.type;
      };
      states.atBlock_parens = function(type2, stream, state2) {
        if (type2 == ")")
          return popContext(state2);
        if (type2 == "{" || type2 == "}")
          return popAndPass(type2, stream, state2, 2);
        return states.atBlock(type2, stream, state2);
      };
      states.restricted_atBlock_before = function(type2, stream, state2) {
        if (type2 == "{")
          return pushContext(state2, stream, "restricted_atBlock");
        if (type2 == "word" && state2.stateArg == "@counter-style") {
          override = "variable";
          return "restricted_atBlock_before";
        }
        return pass(type2, stream, state2);
      };
      states.restricted_atBlock = function(type2, stream, state2) {
        if (type2 == "}") {
          state2.stateArg = null;
          return popContext(state2);
        }
        if (type2 == "word") {
          if (state2.stateArg == "@font-face" && !fontProperties2.hasOwnProperty(stream.current().toLowerCase()) || state2.stateArg == "@counter-style" && !counterDescriptors2.hasOwnProperty(stream.current().toLowerCase()))
            override = "error";
          else
            override = "property";
          return "maybeprop";
        }
        return "restricted_atBlock";
      };
      states.keyframes = function(type2, stream, state2) {
        if (type2 == "word") {
          override = "variable";
          return "keyframes";
        }
        if (type2 == "{")
          return pushContext(state2, stream, "top");
        return pass(type2, stream, state2);
      };
      states.at = function(type2, stream, state2) {
        if (type2 == ";")
          return popContext(state2);
        if (type2 == "{" || type2 == "}")
          return popAndPass(type2, stream, state2);
        if (type2 == "word")
          override = "tag";
        else if (type2 == "hash")
          override = "builtin";
        return "at";
      };
      states.interpolation = function(type2, stream, state2) {
        if (type2 == "}")
          return popContext(state2);
        if (type2 == "{" || type2 == ";")
          return popAndPass(type2, stream, state2);
        if (type2 == "word")
          override = "variable";
        else if (type2 != "variable" && type2 != "(" && type2 != ")")
          override = "error";
        return "interpolation";
      };
      return {
        startState: function(base) {
          return {
            tokenize: null,
            state: inline ? "block" : "top",
            stateArg: null,
            context: new Context(inline ? "block" : "top", base || 0, null)
          };
        },
        token: function(stream, state2) {
          if (!state2.tokenize && stream.eatSpace())
            return null;
          var style = (state2.tokenize || tokenBase)(stream, state2);
          if (style && typeof style == "object") {
            type = style[1];
            style = style[0];
          }
          override = style;
          if (type != "comment")
            state2.state = states[state2.state](type, stream, state2);
          return override;
        },
        indent: function(state2, textAfter) {
          var cx = state2.context, ch = textAfter && textAfter.charAt(0);
          var indent = cx.indent;
          if (cx.type == "prop" && (ch == "}" || ch == ")"))
            cx = cx.prev;
          if (cx.prev) {
            if (ch == "}" && (cx.type == "block" || cx.type == "top" || cx.type == "interpolation" || cx.type == "restricted_atBlock")) {
              cx = cx.prev;
              indent = cx.indent;
            } else if (ch == ")" && (cx.type == "parens" || cx.type == "atBlock_parens") || ch == "{" && (cx.type == "at" || cx.type == "atBlock")) {
              indent = Math.max(0, cx.indent - indentUnit);
            }
          }
          return indent;
        },
        electricChars: "}",
        blockCommentStart: "/*",
        blockCommentEnd: "*/",
        blockCommentContinue: " * ",
        lineComment,
        fold: "brace"
      };
    });
    function keySet(array) {
      var keys = {};
      for (var i = 0; i < array.length; ++i) {
        keys[array[i].toLowerCase()] = true;
      }
      return keys;
    }
    var documentTypes_ = [
      "domain",
      "regexp",
      "url",
      "url-prefix"
    ], documentTypes = keySet(documentTypes_);
    var mediaTypes_ = [
      "all",
      "aural",
      "braille",
      "handheld",
      "print",
      "projection",
      "screen",
      "tty",
      "tv",
      "embossed"
    ], mediaTypes = keySet(mediaTypes_);
    var mediaFeatures_ = [
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "device-width",
      "min-device-width",
      "max-device-width",
      "device-height",
      "min-device-height",
      "max-device-height",
      "aspect-ratio",
      "min-aspect-ratio",
      "max-aspect-ratio",
      "device-aspect-ratio",
      "min-device-aspect-ratio",
      "max-device-aspect-ratio",
      "color",
      "min-color",
      "max-color",
      "color-index",
      "min-color-index",
      "max-color-index",
      "monochrome",
      "min-monochrome",
      "max-monochrome",
      "resolution",
      "min-resolution",
      "max-resolution",
      "scan",
      "grid",
      "orientation",
      "device-pixel-ratio",
      "min-device-pixel-ratio",
      "max-device-pixel-ratio",
      "pointer",
      "any-pointer",
      "hover",
      "any-hover",
      "prefers-color-scheme"
    ], mediaFeatures = keySet(mediaFeatures_);
    var mediaValueKeywords_ = [
      "landscape",
      "portrait",
      "none",
      "coarse",
      "fine",
      "on-demand",
      "hover",
      "interlace",
      "progressive",
      "dark",
      "light"
    ], mediaValueKeywords = keySet(mediaValueKeywords_);
    var propertyKeywords_ = [
      "align-content",
      "align-items",
      "align-self",
      "alignment-adjust",
      "alignment-baseline",
      "all",
      "anchor-point",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "appearance",
      "azimuth",
      "backdrop-filter",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-repeat",
      "background-size",
      "baseline-shift",
      "binding",
      "bleed",
      "block-size",
      "bookmark-label",
      "bookmark-level",
      "bookmark-state",
      "bookmark-target",
      "border",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "color",
      "color-profile",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "counter-increment",
      "counter-reset",
      "crop",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "dominant-baseline",
      "drop-initial-after-adjust",
      "drop-initial-after-align",
      "drop-initial-before-adjust",
      "drop-initial-before-align",
      "drop-initial-size",
      "drop-initial-value",
      "elevation",
      "empty-cells",
      "fit",
      "fit-content",
      "fit-position",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "float-offset",
      "flow-from",
      "flow-into",
      "font",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-optical-sizing",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-alternates",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-gap",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-gap",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "inline-box-align",
      "inset",
      "inset-block",
      "inset-block-end",
      "inset-block-start",
      "inset-inline",
      "inset-inline-end",
      "inset-inline-start",
      "isolation",
      "justify-content",
      "justify-items",
      "justify-self",
      "left",
      "letter-spacing",
      "line-break",
      "line-height",
      "line-height-step",
      "line-stacking",
      "line-stacking-ruby",
      "line-stacking-shift",
      "line-stacking-strategy",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-bottom",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "marquee-direction",
      "marquee-loop",
      "marquee-play-count",
      "marquee-speed",
      "marquee-style",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "move-to",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "object-fit",
      "object-position",
      "offset",
      "offset-anchor",
      "offset-distance",
      "offset-path",
      "offset-position",
      "offset-rotate",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-style",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-bottom",
      "padding-left",
      "padding-right",
      "padding-top",
      "page",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "page-policy",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pitch",
      "pitch-range",
      "place-content",
      "place-items",
      "place-self",
      "play-during",
      "position",
      "presentation-level",
      "punctuation-trim",
      "quotes",
      "region-break-after",
      "region-break-before",
      "region-break-inside",
      "region-fragment",
      "rendering-intent",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "richness",
      "right",
      "rotate",
      "rotation",
      "rotation-point",
      "row-gap",
      "ruby-align",
      "ruby-overhang",
      "ruby-position",
      "ruby-span",
      "scale",
      "scroll-behavior",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-type",
      "shape-image-threshold",
      "shape-inside",
      "shape-margin",
      "shape-outside",
      "size",
      "speak",
      "speak-as",
      "speak-header",
      "speak-numeral",
      "speak-punctuation",
      "speech-rate",
      "stress",
      "string-set",
      "tab-size",
      "table-layout",
      "target",
      "target-name",
      "target-new",
      "target-position",
      "text-align",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-skip",
      "text-decoration-skip-ink",
      "text-decoration-style",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-height",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-outline",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-size-adjust",
      "text-space-collapse",
      "text-transform",
      "text-underline-position",
      "text-wrap",
      "top",
      "touch-action",
      "transform",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "translate",
      "unicode-bidi",
      "user-select",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "z-index",
      "clip-path",
      "clip-rule",
      "mask",
      "enable-background",
      "filter",
      "flood-color",
      "flood-opacity",
      "lighting-color",
      "stop-color",
      "stop-opacity",
      "pointer-events",
      "color-interpolation",
      "color-interpolation-filters",
      "color-rendering",
      "fill",
      "fill-opacity",
      "fill-rule",
      "image-rendering",
      "marker",
      "marker-end",
      "marker-mid",
      "marker-start",
      "paint-order",
      "shape-rendering",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-rendering",
      "baseline-shift",
      "dominant-baseline",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "text-anchor",
      "writing-mode"
    ], propertyKeywords = keySet(propertyKeywords_);
    var nonStandardPropertyKeywords_ = [
      "accent-color",
      "aspect-ratio",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "content-visibility",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "overflow-anchor",
      "overscroll-behavior",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "scroll-snap-stop",
      "scrollbar-3d-light-color",
      "scrollbar-arrow-color",
      "scrollbar-base-color",
      "scrollbar-dark-shadow-color",
      "scrollbar-face-color",
      "scrollbar-highlight-color",
      "scrollbar-shadow-color",
      "scrollbar-track-color",
      "searchfield-cancel-button",
      "searchfield-decoration",
      "searchfield-results-button",
      "searchfield-results-decoration",
      "shape-inside",
      "zoom"
    ], nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords_);
    var fontProperties_ = [
      "font-display",
      "font-family",
      "src",
      "unicode-range",
      "font-variant",
      "font-feature-settings",
      "font-stretch",
      "font-weight",
      "font-style"
    ], fontProperties = keySet(fontProperties_);
    var counterDescriptors_ = [
      "additive-symbols",
      "fallback",
      "negative",
      "pad",
      "prefix",
      "range",
      "speak-as",
      "suffix",
      "symbols",
      "system"
    ], counterDescriptors = keySet(counterDescriptors_);
    var colorKeywords_ = [
      "aliceblue",
      "antiquewhite",
      "aqua",
      "aquamarine",
      "azure",
      "beige",
      "bisque",
      "black",
      "blanchedalmond",
      "blue",
      "blueviolet",
      "brown",
      "burlywood",
      "cadetblue",
      "chartreuse",
      "chocolate",
      "coral",
      "cornflowerblue",
      "cornsilk",
      "crimson",
      "cyan",
      "darkblue",
      "darkcyan",
      "darkgoldenrod",
      "darkgray",
      "darkgreen",
      "darkgrey",
      "darkkhaki",
      "darkmagenta",
      "darkolivegreen",
      "darkorange",
      "darkorchid",
      "darkred",
      "darksalmon",
      "darkseagreen",
      "darkslateblue",
      "darkslategray",
      "darkslategrey",
      "darkturquoise",
      "darkviolet",
      "deeppink",
      "deepskyblue",
      "dimgray",
      "dimgrey",
      "dodgerblue",
      "firebrick",
      "floralwhite",
      "forestgreen",
      "fuchsia",
      "gainsboro",
      "ghostwhite",
      "gold",
      "goldenrod",
      "gray",
      "grey",
      "green",
      "greenyellow",
      "honeydew",
      "hotpink",
      "indianred",
      "indigo",
      "ivory",
      "khaki",
      "lavender",
      "lavenderblush",
      "lawngreen",
      "lemonchiffon",
      "lightblue",
      "lightcoral",
      "lightcyan",
      "lightgoldenrodyellow",
      "lightgray",
      "lightgreen",
      "lightgrey",
      "lightpink",
      "lightsalmon",
      "lightseagreen",
      "lightskyblue",
      "lightslategray",
      "lightslategrey",
      "lightsteelblue",
      "lightyellow",
      "lime",
      "limegreen",
      "linen",
      "magenta",
      "maroon",
      "mediumaquamarine",
      "mediumblue",
      "mediumorchid",
      "mediumpurple",
      "mediumseagreen",
      "mediumslateblue",
      "mediumspringgreen",
      "mediumturquoise",
      "mediumvioletred",
      "midnightblue",
      "mintcream",
      "mistyrose",
      "moccasin",
      "navajowhite",
      "navy",
      "oldlace",
      "olive",
      "olivedrab",
      "orange",
      "orangered",
      "orchid",
      "palegoldenrod",
      "palegreen",
      "paleturquoise",
      "palevioletred",
      "papayawhip",
      "peachpuff",
      "peru",
      "pink",
      "plum",
      "powderblue",
      "purple",
      "rebeccapurple",
      "red",
      "rosybrown",
      "royalblue",
      "saddlebrown",
      "salmon",
      "sandybrown",
      "seagreen",
      "seashell",
      "sienna",
      "silver",
      "skyblue",
      "slateblue",
      "slategray",
      "slategrey",
      "snow",
      "springgreen",
      "steelblue",
      "tan",
      "teal",
      "thistle",
      "tomato",
      "turquoise",
      "violet",
      "wheat",
      "white",
      "whitesmoke",
      "yellow",
      "yellowgreen"
    ], colorKeywords = keySet(colorKeywords_);
    var valueKeywords_ = [
      "above",
      "absolute",
      "activeborder",
      "additive",
      "activecaption",
      "afar",
      "after-white-space",
      "ahead",
      "alias",
      "all",
      "all-scroll",
      "alphabetic",
      "alternate",
      "always",
      "amharic",
      "amharic-abegede",
      "antialiased",
      "appworkspace",
      "arabic-indic",
      "armenian",
      "asterisks",
      "attr",
      "auto",
      "auto-flow",
      "avoid",
      "avoid-column",
      "avoid-page",
      "avoid-region",
      "axis-pan",
      "background",
      "backwards",
      "baseline",
      "below",
      "bidi-override",
      "binary",
      "bengali",
      "blink",
      "block",
      "block-axis",
      "blur",
      "bold",
      "bolder",
      "border",
      "border-box",
      "both",
      "bottom",
      "break",
      "break-all",
      "break-word",
      "brightness",
      "bullets",
      "button",
      "button-bevel",
      "buttonface",
      "buttonhighlight",
      "buttonshadow",
      "buttontext",
      "calc",
      "cambodian",
      "capitalize",
      "caps-lock-indicator",
      "caption",
      "captiontext",
      "caret",
      "cell",
      "center",
      "checkbox",
      "circle",
      "cjk-decimal",
      "cjk-earthly-branch",
      "cjk-heavenly-stem",
      "cjk-ideographic",
      "clear",
      "clip",
      "close-quote",
      "col-resize",
      "collapse",
      "color",
      "color-burn",
      "color-dodge",
      "column",
      "column-reverse",
      "compact",
      "condensed",
      "contain",
      "content",
      "contents",
      "content-box",
      "context-menu",
      "continuous",
      "contrast",
      "copy",
      "counter",
      "counters",
      "cover",
      "crop",
      "cross",
      "crosshair",
      "cubic-bezier",
      "currentcolor",
      "cursive",
      "cyclic",
      "darken",
      "dashed",
      "decimal",
      "decimal-leading-zero",
      "default",
      "default-button",
      "dense",
      "destination-atop",
      "destination-in",
      "destination-out",
      "destination-over",
      "devanagari",
      "difference",
      "disc",
      "discard",
      "disclosure-closed",
      "disclosure-open",
      "document",
      "dot-dash",
      "dot-dot-dash",
      "dotted",
      "double",
      "down",
      "drop-shadow",
      "e-resize",
      "ease",
      "ease-in",
      "ease-in-out",
      "ease-out",
      "element",
      "ellipse",
      "ellipsis",
      "embed",
      "end",
      "ethiopic",
      "ethiopic-abegede",
      "ethiopic-abegede-am-et",
      "ethiopic-abegede-gez",
      "ethiopic-abegede-ti-er",
      "ethiopic-abegede-ti-et",
      "ethiopic-halehame-aa-er",
      "ethiopic-halehame-aa-et",
      "ethiopic-halehame-am-et",
      "ethiopic-halehame-gez",
      "ethiopic-halehame-om-et",
      "ethiopic-halehame-sid-et",
      "ethiopic-halehame-so-et",
      "ethiopic-halehame-ti-er",
      "ethiopic-halehame-ti-et",
      "ethiopic-halehame-tig",
      "ethiopic-numeric",
      "ew-resize",
      "exclusion",
      "expanded",
      "extends",
      "extra-condensed",
      "extra-expanded",
      "fantasy",
      "fast",
      "fill",
      "fill-box",
      "fixed",
      "flat",
      "flex",
      "flex-end",
      "flex-start",
      "footnotes",
      "forwards",
      "from",
      "geometricPrecision",
      "georgian",
      "grayscale",
      "graytext",
      "grid",
      "groove",
      "gujarati",
      "gurmukhi",
      "hand",
      "hangul",
      "hangul-consonant",
      "hard-light",
      "hebrew",
      "help",
      "hidden",
      "hide",
      "higher",
      "highlight",
      "highlighttext",
      "hiragana",
      "hiragana-iroha",
      "horizontal",
      "hsl",
      "hsla",
      "hue",
      "hue-rotate",
      "icon",
      "ignore",
      "inactiveborder",
      "inactivecaption",
      "inactivecaptiontext",
      "infinite",
      "infobackground",
      "infotext",
      "inherit",
      "initial",
      "inline",
      "inline-axis",
      "inline-block",
      "inline-flex",
      "inline-grid",
      "inline-table",
      "inset",
      "inside",
      "intrinsic",
      "invert",
      "italic",
      "japanese-formal",
      "japanese-informal",
      "justify",
      "kannada",
      "katakana",
      "katakana-iroha",
      "keep-all",
      "khmer",
      "korean-hangul-formal",
      "korean-hanja-formal",
      "korean-hanja-informal",
      "landscape",
      "lao",
      "large",
      "larger",
      "left",
      "level",
      "lighter",
      "lighten",
      "line-through",
      "linear",
      "linear-gradient",
      "lines",
      "list-item",
      "listbox",
      "listitem",
      "local",
      "logical",
      "loud",
      "lower",
      "lower-alpha",
      "lower-armenian",
      "lower-greek",
      "lower-hexadecimal",
      "lower-latin",
      "lower-norwegian",
      "lower-roman",
      "lowercase",
      "ltr",
      "luminosity",
      "malayalam",
      "manipulation",
      "match",
      "matrix",
      "matrix3d",
      "media-controls-background",
      "media-current-time-display",
      "media-fullscreen-button",
      "media-mute-button",
      "media-play-button",
      "media-return-to-realtime-button",
      "media-rewind-button",
      "media-seek-back-button",
      "media-seek-forward-button",
      "media-slider",
      "media-sliderthumb",
      "media-time-remaining-display",
      "media-volume-slider",
      "media-volume-slider-container",
      "media-volume-sliderthumb",
      "medium",
      "menu",
      "menulist",
      "menulist-button",
      "menulist-text",
      "menulist-textfield",
      "menutext",
      "message-box",
      "middle",
      "min-intrinsic",
      "mix",
      "mongolian",
      "monospace",
      "move",
      "multiple",
      "multiple_mask_images",
      "multiply",
      "myanmar",
      "n-resize",
      "narrower",
      "ne-resize",
      "nesw-resize",
      "no-close-quote",
      "no-drop",
      "no-open-quote",
      "no-repeat",
      "none",
      "normal",
      "not-allowed",
      "nowrap",
      "ns-resize",
      "numbers",
      "numeric",
      "nw-resize",
      "nwse-resize",
      "oblique",
      "octal",
      "opacity",
      "open-quote",
      "optimizeLegibility",
      "optimizeSpeed",
      "oriya",
      "oromo",
      "outset",
      "outside",
      "outside-shape",
      "overlay",
      "overline",
      "padding",
      "padding-box",
      "painted",
      "page",
      "paused",
      "persian",
      "perspective",
      "pinch-zoom",
      "plus-darker",
      "plus-lighter",
      "pointer",
      "polygon",
      "portrait",
      "pre",
      "pre-line",
      "pre-wrap",
      "preserve-3d",
      "progress",
      "push-button",
      "radial-gradient",
      "radio",
      "read-only",
      "read-write",
      "read-write-plaintext-only",
      "rectangle",
      "region",
      "relative",
      "repeat",
      "repeating-linear-gradient",
      "repeating-radial-gradient",
      "repeat-x",
      "repeat-y",
      "reset",
      "reverse",
      "rgb",
      "rgba",
      "ridge",
      "right",
      "rotate",
      "rotate3d",
      "rotateX",
      "rotateY",
      "rotateZ",
      "round",
      "row",
      "row-resize",
      "row-reverse",
      "rtl",
      "run-in",
      "running",
      "s-resize",
      "sans-serif",
      "saturate",
      "saturation",
      "scale",
      "scale3d",
      "scaleX",
      "scaleY",
      "scaleZ",
      "screen",
      "scroll",
      "scrollbar",
      "scroll-position",
      "se-resize",
      "searchfield",
      "searchfield-cancel-button",
      "searchfield-decoration",
      "searchfield-results-button",
      "searchfield-results-decoration",
      "self-start",
      "self-end",
      "semi-condensed",
      "semi-expanded",
      "separate",
      "sepia",
      "serif",
      "show",
      "sidama",
      "simp-chinese-formal",
      "simp-chinese-informal",
      "single",
      "skew",
      "skewX",
      "skewY",
      "skip-white-space",
      "slide",
      "slider-horizontal",
      "slider-vertical",
      "sliderthumb-horizontal",
      "sliderthumb-vertical",
      "slow",
      "small",
      "small-caps",
      "small-caption",
      "smaller",
      "soft-light",
      "solid",
      "somali",
      "source-atop",
      "source-in",
      "source-out",
      "source-over",
      "space",
      "space-around",
      "space-between",
      "space-evenly",
      "spell-out",
      "square",
      "square-button",
      "start",
      "static",
      "status-bar",
      "stretch",
      "stroke",
      "stroke-box",
      "sub",
      "subpixel-antialiased",
      "svg_masks",
      "super",
      "sw-resize",
      "symbolic",
      "symbols",
      "system-ui",
      "table",
      "table-caption",
      "table-cell",
      "table-column",
      "table-column-group",
      "table-footer-group",
      "table-header-group",
      "table-row",
      "table-row-group",
      "tamil",
      "telugu",
      "text",
      "text-bottom",
      "text-top",
      "textarea",
      "textfield",
      "thai",
      "thick",
      "thin",
      "threeddarkshadow",
      "threedface",
      "threedhighlight",
      "threedlightshadow",
      "threedshadow",
      "tibetan",
      "tigre",
      "tigrinya-er",
      "tigrinya-er-abegede",
      "tigrinya-et",
      "tigrinya-et-abegede",
      "to",
      "top",
      "trad-chinese-formal",
      "trad-chinese-informal",
      "transform",
      "translate",
      "translate3d",
      "translateX",
      "translateY",
      "translateZ",
      "transparent",
      "ultra-condensed",
      "ultra-expanded",
      "underline",
      "unidirectional-pan",
      "unset",
      "up",
      "upper-alpha",
      "upper-armenian",
      "upper-greek",
      "upper-hexadecimal",
      "upper-latin",
      "upper-norwegian",
      "upper-roman",
      "uppercase",
      "urdu",
      "url",
      "var",
      "vertical",
      "vertical-text",
      "view-box",
      "visible",
      "visibleFill",
      "visiblePainted",
      "visibleStroke",
      "visual",
      "w-resize",
      "wait",
      "wave",
      "wider",
      "window",
      "windowframe",
      "windowtext",
      "words",
      "wrap",
      "wrap-reverse",
      "x-large",
      "x-small",
      "xor",
      "xx-large",
      "xx-small"
    ], valueKeywords = keySet(valueKeywords_);
    var allWords = documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_).concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_).concat(valueKeywords_);
    CodeMirror2.registerHelper("hintWords", "css", allWords);
    function tokenCComment(stream, state2) {
      var maybeEnd = false, ch;
      while ((ch = stream.next()) != null) {
        if (maybeEnd && ch == "/") {
          state2.tokenize = null;
          break;
        }
        maybeEnd = ch == "*";
      }
      return ["comment", "comment"];
    }
    CodeMirror2.defineMIME("text/css", {
      documentTypes,
      mediaTypes,
      mediaFeatures,
      mediaValueKeywords,
      propertyKeywords,
      nonStandardPropertyKeywords,
      fontProperties,
      counterDescriptors,
      colorKeywords,
      valueKeywords,
      tokenHooks: {
        "/": function(stream, state2) {
          if (!stream.eat("*"))
            return false;
          state2.tokenize = tokenCComment;
          return tokenCComment(stream, state2);
        }
      },
      name: "css"
    });
    CodeMirror2.defineMIME("text/x-scss", {
      mediaTypes,
      mediaFeatures,
      mediaValueKeywords,
      propertyKeywords,
      nonStandardPropertyKeywords,
      colorKeywords,
      valueKeywords,
      fontProperties,
      allowNested: true,
      lineComment: "//",
      tokenHooks: {
        "/": function(stream, state2) {
          if (stream.eat("/")) {
            stream.skipToEnd();
            return ["comment", "comment"];
          } else if (stream.eat("*")) {
            state2.tokenize = tokenCComment;
            return tokenCComment(stream, state2);
          } else {
            return ["operator", "operator"];
          }
        },
        ":": function(stream) {
          if (stream.match(/^\s*\{/, false))
            return [null, null];
          return false;
        },
        "$": function(stream) {
          stream.match(/^[\w-]+/);
          if (stream.match(/^\s*:/, false))
            return ["variable-2", "variable-definition"];
          return ["variable-2", "variable"];
        },
        "#": function(stream) {
          if (!stream.eat("{"))
            return false;
          return [null, "interpolation"];
        }
      },
      name: "css",
      helperType: "scss"
    });
    CodeMirror2.defineMIME("text/x-less", {
      mediaTypes,
      mediaFeatures,
      mediaValueKeywords,
      propertyKeywords,
      nonStandardPropertyKeywords,
      colorKeywords,
      valueKeywords,
      fontProperties,
      allowNested: true,
      lineComment: "//",
      tokenHooks: {
        "/": function(stream, state2) {
          if (stream.eat("/")) {
            stream.skipToEnd();
            return ["comment", "comment"];
          } else if (stream.eat("*")) {
            state2.tokenize = tokenCComment;
            return tokenCComment(stream, state2);
          } else {
            return ["operator", "operator"];
          }
        },
        "@": function(stream) {
          if (stream.eat("{"))
            return [null, "interpolation"];
          if (stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, false))
            return false;
          stream.eatWhile(/[\w\\\-]/);
          if (stream.match(/^\s*:/, false))
            return ["variable-2", "variable-definition"];
          return ["variable-2", "variable"];
        },
        "&": function() {
          return ["atom", "atom"];
        }
      },
      name: "css",
      helperType: "less"
    });
    CodeMirror2.defineMIME("text/x-gss", {
      documentTypes,
      mediaTypes,
      mediaFeatures,
      propertyKeywords,
      nonStandardPropertyKeywords,
      fontProperties,
      counterDescriptors,
      colorKeywords,
      valueKeywords,
      supportsAtComponent: true,
      tokenHooks: {
        "/": function(stream, state2) {
          if (!stream.eat("*"))
            return false;
          state2.tokenize = tokenCComment;
          return tokenCComment(stream, state2);
        }
      },
      name: "css",
      helperType: "gss"
    });
  });
})();
var xml = { exports: {} };
(function(module, exports) {
  (function(mod) {
    mod(codemirror$1.exports);
  })(function(CodeMirror2) {
    var htmlConfig = {
      autoSelfClosers: {
        "area": true,
        "base": true,
        "br": true,
        "col": true,
        "command": true,
        "embed": true,
        "frame": true,
        "hr": true,
        "img": true,
        "input": true,
        "keygen": true,
        "link": true,
        "meta": true,
        "param": true,
        "source": true,
        "track": true,
        "wbr": true,
        "menuitem": true
      },
      implicitlyClosed: {
        "dd": true,
        "li": true,
        "optgroup": true,
        "option": true,
        "p": true,
        "rp": true,
        "rt": true,
        "tbody": true,
        "td": true,
        "tfoot": true,
        "th": true,
        "tr": true
      },
      contextGrabbers: {
        "dd": { "dd": true, "dt": true },
        "dt": { "dd": true, "dt": true },
        "li": { "li": true },
        "option": { "option": true, "optgroup": true },
        "optgroup": { "optgroup": true },
        "p": {
          "address": true,
          "article": true,
          "aside": true,
          "blockquote": true,
          "dir": true,
          "div": true,
          "dl": true,
          "fieldset": true,
          "footer": true,
          "form": true,
          "h1": true,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": true,
          "h6": true,
          "header": true,
          "hgroup": true,
          "hr": true,
          "menu": true,
          "nav": true,
          "ol": true,
          "p": true,
          "pre": true,
          "section": true,
          "table": true,
          "ul": true
        },
        "rp": { "rp": true, "rt": true },
        "rt": { "rp": true, "rt": true },
        "tbody": { "tbody": true, "tfoot": true },
        "td": { "td": true, "th": true },
        "tfoot": { "tbody": true },
        "th": { "td": true, "th": true },
        "thead": { "tbody": true, "tfoot": true },
        "tr": { "tr": true }
      },
      doNotIndent: { "pre": true },
      allowUnquoted: true,
      allowMissing: true,
      caseFold: true
    };
    var xmlConfig = {
      autoSelfClosers: {},
      implicitlyClosed: {},
      contextGrabbers: {},
      doNotIndent: {},
      allowUnquoted: false,
      allowMissing: false,
      allowMissingTagName: false,
      caseFold: false
    };
    CodeMirror2.defineMode("xml", function(editorConf, config_) {
      var indentUnit = editorConf.indentUnit;
      var config = {};
      var defaults = config_.htmlMode ? htmlConfig : xmlConfig;
      for (var prop in defaults)
        config[prop] = defaults[prop];
      for (var prop in config_)
        config[prop] = config_[prop];
      var type, setStyle;
      function inText(stream, state2) {
        function chain(parser) {
          state2.tokenize = parser;
          return parser(stream, state2);
        }
        var ch = stream.next();
        if (ch == "<") {
          if (stream.eat("!")) {
            if (stream.eat("[")) {
              if (stream.match("CDATA["))
                return chain(inBlock("atom", "]]>"));
              else
                return null;
            } else if (stream.match("--")) {
              return chain(inBlock("comment", "-->"));
            } else if (stream.match("DOCTYPE", true, true)) {
              stream.eatWhile(/[\w\._\-]/);
              return chain(doctype(1));
            } else {
              return null;
            }
          } else if (stream.eat("?")) {
            stream.eatWhile(/[\w\._\-]/);
            state2.tokenize = inBlock("meta", "?>");
            return "meta";
          } else {
            type = stream.eat("/") ? "closeTag" : "openTag";
            state2.tokenize = inTag;
            return "tag bracket";
          }
        } else if (ch == "&") {
          var ok;
          if (stream.eat("#")) {
            if (stream.eat("x")) {
              ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
            } else {
              ok = stream.eatWhile(/[\d]/) && stream.eat(";");
            }
          } else {
            ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
          }
          return ok ? "atom" : "error";
        } else {
          stream.eatWhile(/[^&<]/);
          return null;
        }
      }
      inText.isInText = true;
      function inTag(stream, state2) {
        var ch = stream.next();
        if (ch == ">" || ch == "/" && stream.eat(">")) {
          state2.tokenize = inText;
          type = ch == ">" ? "endTag" : "selfcloseTag";
          return "tag bracket";
        } else if (ch == "=") {
          type = "equals";
          return null;
        } else if (ch == "<") {
          state2.tokenize = inText;
          state2.state = baseState;
          state2.tagName = state2.tagStart = null;
          var next2 = state2.tokenize(stream, state2);
          return next2 ? next2 + " tag error" : "tag error";
        } else if (/[\'\"]/.test(ch)) {
          state2.tokenize = inAttribute(ch);
          state2.stringStartCol = stream.column();
          return state2.tokenize(stream, state2);
        } else {
          stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
          return "word";
        }
      }
      function inAttribute(quote) {
        var closure = function(stream, state2) {
          while (!stream.eol()) {
            if (stream.next() == quote) {
              state2.tokenize = inTag;
              break;
            }
          }
          return "string";
        };
        closure.isInAttribute = true;
        return closure;
      }
      function inBlock(style, terminator) {
        return function(stream, state2) {
          while (!stream.eol()) {
            if (stream.match(terminator)) {
              state2.tokenize = inText;
              break;
            }
            stream.next();
          }
          return style;
        };
      }
      function doctype(depth) {
        return function(stream, state2) {
          var ch;
          while ((ch = stream.next()) != null) {
            if (ch == "<") {
              state2.tokenize = doctype(depth + 1);
              return state2.tokenize(stream, state2);
            } else if (ch == ">") {
              if (depth == 1) {
                state2.tokenize = inText;
                break;
              } else {
                state2.tokenize = doctype(depth - 1);
                return state2.tokenize(stream, state2);
              }
            }
          }
          return "meta";
        };
      }
      function lower(tagName) {
        return tagName && tagName.toLowerCase();
      }
      function Context(state2, tagName, startOfLine) {
        this.prev = state2.context;
        this.tagName = tagName || "";
        this.indent = state2.indented;
        this.startOfLine = startOfLine;
        if (config.doNotIndent.hasOwnProperty(tagName) || state2.context && state2.context.noIndent)
          this.noIndent = true;
      }
      function popContext(state2) {
        if (state2.context)
          state2.context = state2.context.prev;
      }
      function maybePopContext(state2, nextTagName) {
        var parentTagName;
        while (true) {
          if (!state2.context) {
            return;
          }
          parentTagName = state2.context.tagName;
          if (!config.contextGrabbers.hasOwnProperty(lower(parentTagName)) || !config.contextGrabbers[lower(parentTagName)].hasOwnProperty(lower(nextTagName))) {
            return;
          }
          popContext(state2);
        }
      }
      function baseState(type2, stream, state2) {
        if (type2 == "openTag") {
          state2.tagStart = stream.column();
          return tagNameState;
        } else if (type2 == "closeTag") {
          return closeTagNameState;
        } else {
          return baseState;
        }
      }
      function tagNameState(type2, stream, state2) {
        if (type2 == "word") {
          state2.tagName = stream.current();
          setStyle = "tag";
          return attrState;
        } else if (config.allowMissingTagName && type2 == "endTag") {
          setStyle = "tag bracket";
          return attrState(type2, stream, state2);
        } else {
          setStyle = "error";
          return tagNameState;
        }
      }
      function closeTagNameState(type2, stream, state2) {
        if (type2 == "word") {
          var tagName = stream.current();
          if (state2.context && state2.context.tagName != tagName && config.implicitlyClosed.hasOwnProperty(lower(state2.context.tagName)))
            popContext(state2);
          if (state2.context && state2.context.tagName == tagName || config.matchClosing === false) {
            setStyle = "tag";
            return closeState;
          } else {
            setStyle = "tag error";
            return closeStateErr;
          }
        } else if (config.allowMissingTagName && type2 == "endTag") {
          setStyle = "tag bracket";
          return closeState(type2, stream, state2);
        } else {
          setStyle = "error";
          return closeStateErr;
        }
      }
      function closeState(type2, _stream, state2) {
        if (type2 != "endTag") {
          setStyle = "error";
          return closeState;
        }
        popContext(state2);
        return baseState;
      }
      function closeStateErr(type2, stream, state2) {
        setStyle = "error";
        return closeState(type2, stream, state2);
      }
      function attrState(type2, _stream, state2) {
        if (type2 == "word") {
          setStyle = "attribute";
          return attrEqState;
        } else if (type2 == "endTag" || type2 == "selfcloseTag") {
          var tagName = state2.tagName, tagStart = state2.tagStart;
          state2.tagName = state2.tagStart = null;
          if (type2 == "selfcloseTag" || config.autoSelfClosers.hasOwnProperty(lower(tagName))) {
            maybePopContext(state2, tagName);
          } else {
            maybePopContext(state2, tagName);
            state2.context = new Context(state2, tagName, tagStart == state2.indented);
          }
          return baseState;
        }
        setStyle = "error";
        return attrState;
      }
      function attrEqState(type2, stream, state2) {
        if (type2 == "equals")
          return attrValueState;
        if (!config.allowMissing)
          setStyle = "error";
        return attrState(type2, stream, state2);
      }
      function attrValueState(type2, stream, state2) {
        if (type2 == "string")
          return attrContinuedState;
        if (type2 == "word" && config.allowUnquoted) {
          setStyle = "string";
          return attrState;
        }
        setStyle = "error";
        return attrState(type2, stream, state2);
      }
      function attrContinuedState(type2, stream, state2) {
        if (type2 == "string")
          return attrContinuedState;
        return attrState(type2, stream, state2);
      }
      return {
        startState: function(baseIndent) {
          var state2 = {
            tokenize: inText,
            state: baseState,
            indented: baseIndent || 0,
            tagName: null,
            tagStart: null,
            context: null
          };
          if (baseIndent != null)
            state2.baseIndent = baseIndent;
          return state2;
        },
        token: function(stream, state2) {
          if (!state2.tagName && stream.sol())
            state2.indented = stream.indentation();
          if (stream.eatSpace())
            return null;
          type = null;
          var style = state2.tokenize(stream, state2);
          if ((style || type) && style != "comment") {
            setStyle = null;
            state2.state = state2.state(type || style, stream, state2);
            if (setStyle)
              style = setStyle == "error" ? style + " error" : setStyle;
          }
          return style;
        },
        indent: function(state2, textAfter, fullLine) {
          var context = state2.context;
          if (state2.tokenize.isInAttribute) {
            if (state2.tagStart == state2.indented)
              return state2.stringStartCol + 1;
            else
              return state2.indented + indentUnit;
          }
          if (context && context.noIndent)
            return CodeMirror2.Pass;
          if (state2.tokenize != inTag && state2.tokenize != inText)
            return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
          if (state2.tagName) {
            if (config.multilineTagIndentPastTag !== false)
              return state2.tagStart + state2.tagName.length + 2;
            else
              return state2.tagStart + indentUnit * (config.multilineTagIndentFactor || 1);
          }
          if (config.alignCDATA && /<!\[CDATA\[/.test(textAfter))
            return 0;
          var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
          if (tagAfter && tagAfter[1]) {
            while (context) {
              if (context.tagName == tagAfter[2]) {
                context = context.prev;
                break;
              } else if (config.implicitlyClosed.hasOwnProperty(lower(context.tagName))) {
                context = context.prev;
              } else {
                break;
              }
            }
          } else if (tagAfter) {
            while (context) {
              var grabbers = config.contextGrabbers[lower(context.tagName)];
              if (grabbers && grabbers.hasOwnProperty(lower(tagAfter[2])))
                context = context.prev;
              else
                break;
            }
          }
          while (context && context.prev && !context.startOfLine)
            context = context.prev;
          if (context)
            return context.indent + indentUnit;
          else
            return state2.baseIndent || 0;
        },
        electricInput: /<\/[\s\w:]+>$/,
        blockCommentStart: "<!--",
        blockCommentEnd: "-->",
        configuration: config.htmlMode ? "html" : "xml",
        helperType: config.htmlMode ? "html" : "xml",
        skipAttribute: function(state2) {
          if (state2.state == attrValueState)
            state2.state = attrState;
        },
        xmlCurrentTag: function(state2) {
          return state2.tagName ? { name: state2.tagName, close: state2.type == "closeTag" } : null;
        },
        xmlCurrentContext: function(state2) {
          var context = [];
          for (var cx = state2.context; cx; cx = cx.prev)
            context.push(cx.tagName);
          return context.reverse();
        }
      };
    });
    CodeMirror2.defineMIME("text/xml", "xml");
    CodeMirror2.defineMIME("application/xml", "xml");
    if (!CodeMirror2.mimeModes.hasOwnProperty("text/html"))
      CodeMirror2.defineMIME("text/html", { name: "xml", htmlMode: true });
  });
})();
(function(module, exports) {
  (function(mod) {
    mod(codemirror$1.exports, xml.exports, javascript.exports, css.exports);
  })(function(CodeMirror2) {
    var defaultTags = {
      script: [
        ["lang", /(javascript|babel)/i, "javascript"],
        ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"],
        ["type", /./, "text/plain"],
        [null, null, "javascript"]
      ],
      style: [
        ["lang", /^css$/i, "css"],
        ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
        ["type", /./, "text/plain"],
        [null, null, "css"]
      ]
    };
    function maybeBackup(stream, pat, style) {
      var cur = stream.current(), close = cur.search(pat);
      if (close > -1) {
        stream.backUp(cur.length - close);
      } else if (cur.match(/<\/?$/)) {
        stream.backUp(cur.length);
        if (!stream.match(pat, false))
          stream.match(cur);
      }
      return style;
    }
    var attrRegexpCache = {};
    function getAttrRegexp(attr) {
      var regexp = attrRegexpCache[attr];
      if (regexp)
        return regexp;
      return attrRegexpCache[attr] = new RegExp("\\s+" + attr + `\\s*=\\s*('|")?([^'"]+)('|")?\\s*`);
    }
    function getAttrValue(text, attr) {
      var match2 = text.match(getAttrRegexp(attr));
      return match2 ? /^\s*(.*?)\s*$/.exec(match2[2])[1] : "";
    }
    function getTagRegexp(tagName, anchored) {
      return new RegExp((anchored ? "^" : "") + "</s*" + tagName + "s*>", "i");
    }
    function addTags(from, to) {
      for (var tag in from) {
        var dest = to[tag] || (to[tag] = []);
        var source = from[tag];
        for (var i = source.length - 1; i >= 0; i--)
          dest.unshift(source[i]);
      }
    }
    function findMatchingMode(tagInfo, tagText) {
      for (var i = 0; i < tagInfo.length; i++) {
        var spec = tagInfo[i];
        if (!spec[0] || spec[1].test(getAttrValue(tagText, spec[0])))
          return spec[2];
      }
    }
    CodeMirror2.defineMode("htmlmixed", function(config, parserConfig) {
      var htmlMode = CodeMirror2.getMode(config, {
        name: "xml",
        htmlMode: true,
        multilineTagIndentFactor: parserConfig.multilineTagIndentFactor,
        multilineTagIndentPastTag: parserConfig.multilineTagIndentPastTag,
        allowMissingTagName: parserConfig.allowMissingTagName
      });
      var tags = {};
      var configTags = parserConfig && parserConfig.tags, configScript = parserConfig && parserConfig.scriptTypes;
      addTags(defaultTags, tags);
      if (configTags)
        addTags(configTags, tags);
      if (configScript)
        for (var i = configScript.length - 1; i >= 0; i--)
          tags.script.unshift(["type", configScript[i].matches, configScript[i].mode]);
      function html(stream, state2) {
        var style = htmlMode.token(stream, state2.htmlState), tag = /\btag\b/.test(style), tagName;
        if (tag && !/[<>\s\/]/.test(stream.current()) && (tagName = state2.htmlState.tagName && state2.htmlState.tagName.toLowerCase()) && tags.hasOwnProperty(tagName)) {
          state2.inTag = tagName + " ";
        } else if (state2.inTag && tag && />$/.test(stream.current())) {
          var inTag = /^([\S]+) (.*)/.exec(state2.inTag);
          state2.inTag = null;
          var modeSpec = stream.current() == ">" && findMatchingMode(tags[inTag[1]], inTag[2]);
          var mode = CodeMirror2.getMode(config, modeSpec);
          var endTagA = getTagRegexp(inTag[1], true), endTag = getTagRegexp(inTag[1], false);
          state2.token = function(stream2, state3) {
            if (stream2.match(endTagA, false)) {
              state3.token = html;
              state3.localState = state3.localMode = null;
              return null;
            }
            return maybeBackup(stream2, endTag, state3.localMode.token(stream2, state3.localState));
          };
          state2.localMode = mode;
          state2.localState = CodeMirror2.startState(mode, htmlMode.indent(state2.htmlState, "", ""));
        } else if (state2.inTag) {
          state2.inTag += stream.current();
          if (stream.eol())
            state2.inTag += " ";
        }
        return style;
      }
      return {
        startState: function() {
          var state2 = CodeMirror2.startState(htmlMode);
          return { token: html, inTag: null, localMode: null, localState: null, htmlState: state2 };
        },
        copyState: function(state2) {
          var local;
          if (state2.localState) {
            local = CodeMirror2.copyState(state2.localMode, state2.localState);
          }
          return {
            token: state2.token,
            inTag: state2.inTag,
            localMode: state2.localMode,
            localState: local,
            htmlState: CodeMirror2.copyState(htmlMode, state2.htmlState)
          };
        },
        token: function(stream, state2) {
          return state2.token(stream, state2);
        },
        indent: function(state2, textAfter, line) {
          if (!state2.localMode || /^\s*<\//.test(textAfter))
            return htmlMode.indent(state2.htmlState, textAfter, line);
          else if (state2.localMode.indent)
            return state2.localMode.indent(state2.localState, textAfter, line);
          else
            return CodeMirror2.Pass;
        },
        innerMode: function(state2) {
          return { state: state2.localState || state2.htmlState, mode: state2.localMode || htmlMode };
        }
      };
    }, "xml", "javascript", "css");
    CodeMirror2.defineMIME("text/html", "htmlmixed");
  });
})();
(function(module, exports) {
  (function(mod) {
    mod(codemirror$1.exports);
  })(function(CodeMirror2) {
    var defaults = {
      pairs: `()[]{}''""`,
      closeBefore: `)]}'":;>`,
      triples: "",
      explode: "[]{}"
    };
    var Pos = CodeMirror2.Pos;
    CodeMirror2.defineOption("autoCloseBrackets", false, function(cm, val, old) {
      if (old && old != CodeMirror2.Init) {
        cm.removeKeyMap(keyMap);
        cm.state.closeBrackets = null;
      }
      if (val) {
        ensureBound(getOption(val, "pairs"));
        cm.state.closeBrackets = val;
        cm.addKeyMap(keyMap);
      }
    });
    function getOption(conf, name) {
      if (name == "pairs" && typeof conf == "string")
        return conf;
      if (typeof conf == "object" && conf[name] != null)
        return conf[name];
      return defaults[name];
    }
    var keyMap = { Backspace: handleBackspace, Enter: handleEnter };
    function ensureBound(chars) {
      for (var i = 0; i < chars.length; i++) {
        var ch = chars.charAt(i), key = "'" + ch + "'";
        if (!keyMap[key])
          keyMap[key] = handler(ch);
      }
    }
    ensureBound(defaults.pairs + "`");
    function handler(ch) {
      return function(cm) {
        return handleChar(cm, ch);
      };
    }
    function getConfig(cm) {
      var deflt = cm.state.closeBrackets;
      if (!deflt || deflt.override)
        return deflt;
      var mode = cm.getModeAt(cm.getCursor());
      return mode.closeBrackets || deflt;
    }
    function handleBackspace(cm) {
      var conf = getConfig(cm);
      if (!conf || cm.getOption("disableInput"))
        return CodeMirror2.Pass;
      var pairs = getOption(conf, "pairs");
      var ranges = cm.listSelections();
      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty())
          return CodeMirror2.Pass;
        var around = charsAround(cm, ranges[i].head);
        if (!around || pairs.indexOf(around) % 2 != 0)
          return CodeMirror2.Pass;
      }
      for (var i = ranges.length - 1; i >= 0; i--) {
        var cur = ranges[i].head;
        cm.replaceRange("", Pos(cur.line, cur.ch - 1), Pos(cur.line, cur.ch + 1), "+delete");
      }
    }
    function handleEnter(cm) {
      var conf = getConfig(cm);
      var explode = conf && getOption(conf, "explode");
      if (!explode || cm.getOption("disableInput"))
        return CodeMirror2.Pass;
      var ranges = cm.listSelections();
      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty())
          return CodeMirror2.Pass;
        var around = charsAround(cm, ranges[i].head);
        if (!around || explode.indexOf(around) % 2 != 0)
          return CodeMirror2.Pass;
      }
      cm.operation(function() {
        var linesep = cm.lineSeparator() || "\n";
        cm.replaceSelection(linesep + linesep, null);
        moveSel(cm, -1);
        ranges = cm.listSelections();
        for (var i2 = 0; i2 < ranges.length; i2++) {
          var line = ranges[i2].head.line;
          cm.indentLine(line, null, true);
          cm.indentLine(line + 1, null, true);
        }
      });
    }
    function moveSel(cm, dir) {
      var newRanges = [], ranges = cm.listSelections(), primary = 0;
      for (var i = 0; i < ranges.length; i++) {
        var range = ranges[i];
        if (range.head == cm.getCursor())
          primary = i;
        var pos = range.head.ch || dir > 0 ? { line: range.head.line, ch: range.head.ch + dir } : { line: range.head.line - 1 };
        newRanges.push({ anchor: pos, head: pos });
      }
      cm.setSelections(newRanges, primary);
    }
    function contractSelection(sel) {
      var inverted = CodeMirror2.cmpPos(sel.anchor, sel.head) > 0;
      return {
        anchor: new Pos(sel.anchor.line, sel.anchor.ch + (inverted ? -1 : 1)),
        head: new Pos(sel.head.line, sel.head.ch + (inverted ? 1 : -1))
      };
    }
    function handleChar(cm, ch) {
      var conf = getConfig(cm);
      if (!conf || cm.getOption("disableInput"))
        return CodeMirror2.Pass;
      var pairs = getOption(conf, "pairs");
      var pos = pairs.indexOf(ch);
      if (pos == -1)
        return CodeMirror2.Pass;
      var closeBefore = getOption(conf, "closeBefore");
      var triples = getOption(conf, "triples");
      var identical = pairs.charAt(pos + 1) == ch;
      var ranges = cm.listSelections();
      var opening = pos % 2 == 0;
      var type;
      for (var i = 0; i < ranges.length; i++) {
        var range = ranges[i], cur = range.head, curType;
        var next2 = cm.getRange(cur, Pos(cur.line, cur.ch + 1));
        if (opening && !range.empty()) {
          curType = "surround";
        } else if ((identical || !opening) && next2 == ch) {
          if (identical && stringStartsAfter(cm, cur))
            curType = "both";
          else if (triples.indexOf(ch) >= 0 && cm.getRange(cur, Pos(cur.line, cur.ch + 3)) == ch + ch + ch)
            curType = "skipThree";
          else
            curType = "skip";
        } else if (identical && cur.ch > 1 && triples.indexOf(ch) >= 0 && cm.getRange(Pos(cur.line, cur.ch - 2), cur) == ch + ch) {
          if (cur.ch > 2 && /\bstring/.test(cm.getTokenTypeAt(Pos(cur.line, cur.ch - 2))))
            return CodeMirror2.Pass;
          curType = "addFour";
        } else if (identical) {
          var prev = cur.ch == 0 ? " " : cm.getRange(Pos(cur.line, cur.ch - 1), cur);
          if (!CodeMirror2.isWordChar(next2) && prev != ch && !CodeMirror2.isWordChar(prev))
            curType = "both";
          else
            return CodeMirror2.Pass;
        } else if (opening && (next2.length === 0 || /\s/.test(next2) || closeBefore.indexOf(next2) > -1)) {
          curType = "both";
        } else {
          return CodeMirror2.Pass;
        }
        if (!type)
          type = curType;
        else if (type != curType)
          return CodeMirror2.Pass;
      }
      var left = pos % 2 ? pairs.charAt(pos - 1) : ch;
      var right = pos % 2 ? ch : pairs.charAt(pos + 1);
      cm.operation(function() {
        if (type == "skip") {
          moveSel(cm, 1);
        } else if (type == "skipThree") {
          moveSel(cm, 3);
        } else if (type == "surround") {
          var sels = cm.getSelections();
          for (var i2 = 0; i2 < sels.length; i2++)
            sels[i2] = left + sels[i2] + right;
          cm.replaceSelections(sels, "around");
          sels = cm.listSelections().slice();
          for (var i2 = 0; i2 < sels.length; i2++)
            sels[i2] = contractSelection(sels[i2]);
          cm.setSelections(sels);
        } else if (type == "both") {
          cm.replaceSelection(left + right, null);
          cm.triggerElectric(left + right);
          moveSel(cm, -1);
        } else if (type == "addFour") {
          cm.replaceSelection(left + left + left + left, "before");
          moveSel(cm, 1);
        }
      });
    }
    function charsAround(cm, pos) {
      var str = cm.getRange(Pos(pos.line, pos.ch - 1), Pos(pos.line, pos.ch + 1));
      return str.length == 2 ? str : null;
    }
    function stringStartsAfter(cm, pos) {
      var token = cm.getTokenAt(Pos(pos.line, pos.ch + 1));
      return /\bstring/.test(token.type) && token.start == pos.ch && (pos.ch == 0 || !/\bstring/.test(cm.getTokenTypeAt(pos)));
    }
  });
})();
var xmlFold = { exports: {} };
(function(module, exports) {
  (function(mod) {
    mod(codemirror$1.exports);
  })(function(CodeMirror2) {
    var Pos = CodeMirror2.Pos;
    function cmp(a, b) {
      return a.line - b.line || a.ch - b.ch;
    }
    var nameStartChar = "A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var xmlTagStart = new RegExp("<(/?)([" + nameStartChar + "][" + nameChar + "]*)", "g");
    function Iter(cm, line, ch, range) {
      this.line = line;
      this.ch = ch;
      this.cm = cm;
      this.text = cm.getLine(line);
      this.min = range ? Math.max(range.from, cm.firstLine()) : cm.firstLine();
      this.max = range ? Math.min(range.to - 1, cm.lastLine()) : cm.lastLine();
    }
    function tagAt(iter, ch) {
      var type = iter.cm.getTokenTypeAt(Pos(iter.line, ch));
      return type && /\btag\b/.test(type);
    }
    function nextLine(iter) {
      if (iter.line >= iter.max)
        return;
      iter.ch = 0;
      iter.text = iter.cm.getLine(++iter.line);
      return true;
    }
    function prevLine(iter) {
      if (iter.line <= iter.min)
        return;
      iter.text = iter.cm.getLine(--iter.line);
      iter.ch = iter.text.length;
      return true;
    }
    function toTagEnd(iter) {
      for (; ; ) {
        var gt = iter.text.indexOf(">", iter.ch);
        if (gt == -1) {
          if (nextLine(iter))
            continue;
          else
            return;
        }
        if (!tagAt(iter, gt + 1)) {
          iter.ch = gt + 1;
          continue;
        }
        var lastSlash = iter.text.lastIndexOf("/", gt);
        var selfClose = lastSlash > -1 && !/\S/.test(iter.text.slice(lastSlash + 1, gt));
        iter.ch = gt + 1;
        return selfClose ? "selfClose" : "regular";
      }
    }
    function toTagStart(iter) {
      for (; ; ) {
        var lt = iter.ch ? iter.text.lastIndexOf("<", iter.ch - 1) : -1;
        if (lt == -1) {
          if (prevLine(iter))
            continue;
          else
            return;
        }
        if (!tagAt(iter, lt + 1)) {
          iter.ch = lt;
          continue;
        }
        xmlTagStart.lastIndex = lt;
        iter.ch = lt;
        var match2 = xmlTagStart.exec(iter.text);
        if (match2 && match2.index == lt)
          return match2;
      }
    }
    function toNextTag(iter) {
      for (; ; ) {
        xmlTagStart.lastIndex = iter.ch;
        var found = xmlTagStart.exec(iter.text);
        if (!found) {
          if (nextLine(iter))
            continue;
          else
            return;
        }
        if (!tagAt(iter, found.index + 1)) {
          iter.ch = found.index + 1;
          continue;
        }
        iter.ch = found.index + found[0].length;
        return found;
      }
    }
    function toPrevTag(iter) {
      for (; ; ) {
        var gt = iter.ch ? iter.text.lastIndexOf(">", iter.ch - 1) : -1;
        if (gt == -1) {
          if (prevLine(iter))
            continue;
          else
            return;
        }
        if (!tagAt(iter, gt + 1)) {
          iter.ch = gt;
          continue;
        }
        var lastSlash = iter.text.lastIndexOf("/", gt);
        var selfClose = lastSlash > -1 && !/\S/.test(iter.text.slice(lastSlash + 1, gt));
        iter.ch = gt + 1;
        return selfClose ? "selfClose" : "regular";
      }
    }
    function findMatchingClose(iter, tag) {
      var stack = [];
      for (; ; ) {
        var next2 = toNextTag(iter), end, startLine = iter.line, startCh = iter.ch - (next2 ? next2[0].length : 0);
        if (!next2 || !(end = toTagEnd(iter)))
          return;
        if (end == "selfClose")
          continue;
        if (next2[1]) {
          for (var i = stack.length - 1; i >= 0; --i)
            if (stack[i] == next2[2]) {
              stack.length = i;
              break;
            }
          if (i < 0 && (!tag || tag == next2[2]))
            return {
              tag: next2[2],
              from: Pos(startLine, startCh),
              to: Pos(iter.line, iter.ch)
            };
        } else {
          stack.push(next2[2]);
        }
      }
    }
    function findMatchingOpen(iter, tag) {
      var stack = [];
      for (; ; ) {
        var prev = toPrevTag(iter);
        if (!prev)
          return;
        if (prev == "selfClose") {
          toTagStart(iter);
          continue;
        }
        var endLine = iter.line, endCh = iter.ch;
        var start = toTagStart(iter);
        if (!start)
          return;
        if (start[1]) {
          stack.push(start[2]);
        } else {
          for (var i = stack.length - 1; i >= 0; --i)
            if (stack[i] == start[2]) {
              stack.length = i;
              break;
            }
          if (i < 0 && (!tag || tag == start[2]))
            return {
              tag: start[2],
              from: Pos(iter.line, iter.ch),
              to: Pos(endLine, endCh)
            };
        }
      }
    }
    CodeMirror2.registerHelper("fold", "xml", function(cm, start) {
      var iter = new Iter(cm, start.line, 0);
      for (; ; ) {
        var openTag = toNextTag(iter);
        if (!openTag || iter.line != start.line)
          return;
        var end = toTagEnd(iter);
        if (!end)
          return;
        if (!openTag[1] && end != "selfClose") {
          var startPos = Pos(iter.line, iter.ch);
          var endPos = findMatchingClose(iter, openTag[2]);
          return endPos && cmp(endPos.from, startPos) > 0 ? { from: startPos, to: endPos.from } : null;
        }
      }
    });
    CodeMirror2.findMatchingTag = function(cm, pos, range) {
      var iter = new Iter(cm, pos.line, pos.ch, range);
      if (iter.text.indexOf(">") == -1 && iter.text.indexOf("<") == -1)
        return;
      var end = toTagEnd(iter), to = end && Pos(iter.line, iter.ch);
      var start = end && toTagStart(iter);
      if (!end || !start || cmp(iter, pos) > 0)
        return;
      var here = { from: Pos(iter.line, iter.ch), to, tag: start[2] };
      if (end == "selfClose")
        return { open: here, close: null, at: "open" };
      if (start[1]) {
        return { open: findMatchingOpen(iter, start[2]), close: here, at: "close" };
      } else {
        iter = new Iter(cm, to.line, to.ch, range);
        return { open: here, close: findMatchingClose(iter, start[2]), at: "open" };
      }
    };
    CodeMirror2.findEnclosingTag = function(cm, pos, range, tag) {
      var iter = new Iter(cm, pos.line, pos.ch, range);
      for (; ; ) {
        var open = findMatchingOpen(iter, tag);
        if (!open)
          break;
        var forward = new Iter(cm, pos.line, pos.ch, range);
        var close = findMatchingClose(forward, open.tag);
        if (close)
          return { open, close };
      }
    };
    CodeMirror2.scanForClosingTag = function(cm, pos, name, end) {
      var iter = new Iter(cm, pos.line, pos.ch, end ? { from: 0, to: end } : null);
      return findMatchingClose(iter, name);
    };
  });
})();
(function(module, exports) {
  (function(mod) {
    mod(codemirror$1.exports, xmlFold.exports);
  })(function(CodeMirror2) {
    CodeMirror2.defineOption("autoCloseTags", false, function(cm, val, old) {
      if (old != CodeMirror2.Init && old)
        cm.removeKeyMap("autoCloseTags");
      if (!val)
        return;
      var map = { name: "autoCloseTags" };
      if (typeof val != "object" || val.whenClosing !== false)
        map["'/'"] = function(cm2) {
          return autoCloseSlash(cm2);
        };
      if (typeof val != "object" || val.whenOpening !== false)
        map["'>'"] = function(cm2) {
          return autoCloseGT(cm2);
        };
      cm.addKeyMap(map);
    });
    var htmlDontClose = [
      "area",
      "base",
      "br",
      "col",
      "command",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ];
    var htmlIndent = [
      "applet",
      "blockquote",
      "body",
      "button",
      "div",
      "dl",
      "fieldset",
      "form",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "html",
      "iframe",
      "layer",
      "legend",
      "object",
      "ol",
      "p",
      "select",
      "table",
      "ul"
    ];
    function autoCloseGT(cm) {
      if (cm.getOption("disableInput"))
        return CodeMirror2.Pass;
      var ranges = cm.listSelections(), replacements = [];
      var opt = cm.getOption("autoCloseTags");
      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty())
          return CodeMirror2.Pass;
        var pos = ranges[i].head, tok = cm.getTokenAt(pos);
        var inner = CodeMirror2.innerMode(cm.getMode(), tok.state), state2 = inner.state;
        var tagInfo = inner.mode.xmlCurrentTag && inner.mode.xmlCurrentTag(state2);
        var tagName = tagInfo && tagInfo.name;
        if (!tagName)
          return CodeMirror2.Pass;
        var html = inner.mode.configuration == "html";
        var dontCloseTags = typeof opt == "object" && opt.dontCloseTags || html && htmlDontClose;
        var indentTags = typeof opt == "object" && opt.indentTags || html && htmlIndent;
        if (tok.end > pos.ch)
          tagName = tagName.slice(0, tagName.length - tok.end + pos.ch);
        var lowerTagName = tagName.toLowerCase();
        if (!tagName || tok.type == "string" && (tok.end != pos.ch || !/[\"\']/.test(tok.string.charAt(tok.string.length - 1)) || tok.string.length == 1) || tok.type == "tag" && tagInfo.close || tok.string.indexOf("/") == pos.ch - tok.start - 1 || dontCloseTags && indexOf(dontCloseTags, lowerTagName) > -1 || closingTagExists(cm, inner.mode.xmlCurrentContext && inner.mode.xmlCurrentContext(state2) || [], tagName, pos, true))
          return CodeMirror2.Pass;
        var emptyTags = typeof opt == "object" && opt.emptyTags;
        if (emptyTags && indexOf(emptyTags, tagName) > -1) {
          replacements[i] = { text: "/>", newPos: CodeMirror2.Pos(pos.line, pos.ch + 2) };
          continue;
        }
        var indent = indentTags && indexOf(indentTags, lowerTagName) > -1;
        replacements[i] = {
          indent,
          text: ">" + (indent ? "\n\n" : "") + "</" + tagName + ">",
          newPos: indent ? CodeMirror2.Pos(pos.line + 1, 0) : CodeMirror2.Pos(pos.line, pos.ch + 1)
        };
      }
      var dontIndentOnAutoClose = typeof opt == "object" && opt.dontIndentOnAutoClose;
      for (var i = ranges.length - 1; i >= 0; i--) {
        var info = replacements[i];
        cm.replaceRange(info.text, ranges[i].head, ranges[i].anchor, "+insert");
        var sel = cm.listSelections().slice(0);
        sel[i] = { head: info.newPos, anchor: info.newPos };
        cm.setSelections(sel);
        if (!dontIndentOnAutoClose && info.indent) {
          cm.indentLine(info.newPos.line, null, true);
          cm.indentLine(info.newPos.line + 1, null, true);
        }
      }
    }
    function autoCloseCurrent(cm, typingSlash) {
      var ranges = cm.listSelections(), replacements = [];
      var head = typingSlash ? "/" : "</";
      var opt = cm.getOption("autoCloseTags");
      var dontIndentOnAutoClose = typeof opt == "object" && opt.dontIndentOnSlash;
      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty())
          return CodeMirror2.Pass;
        var pos = ranges[i].head, tok = cm.getTokenAt(pos);
        var inner = CodeMirror2.innerMode(cm.getMode(), tok.state), state2 = inner.state;
        if (typingSlash && (tok.type == "string" || tok.string.charAt(0) != "<" || tok.start != pos.ch - 1))
          return CodeMirror2.Pass;
        var replacement, mixed = inner.mode.name != "xml" && cm.getMode().name == "htmlmixed";
        if (mixed && inner.mode.name == "javascript") {
          replacement = head + "script";
        } else if (mixed && inner.mode.name == "css") {
          replacement = head + "style";
        } else {
          var context = inner.mode.xmlCurrentContext && inner.mode.xmlCurrentContext(state2);
          var top = context.length ? context[context.length - 1] : "";
          if (!context || context.length && closingTagExists(cm, context, top, pos))
            return CodeMirror2.Pass;
          replacement = head + top;
        }
        if (cm.getLine(pos.line).charAt(tok.end) != ">")
          replacement += ">";
        replacements[i] = replacement;
      }
      cm.replaceSelections(replacements);
      ranges = cm.listSelections();
      if (!dontIndentOnAutoClose) {
        for (var i = 0; i < ranges.length; i++)
          if (i == ranges.length - 1 || ranges[i].head.line < ranges[i + 1].head.line)
            cm.indentLine(ranges[i].head.line);
      }
    }
    function autoCloseSlash(cm) {
      if (cm.getOption("disableInput"))
        return CodeMirror2.Pass;
      return autoCloseCurrent(cm, true);
    }
    CodeMirror2.commands.closeTag = function(cm) {
      return autoCloseCurrent(cm);
    };
    function indexOf(collection, elt) {
      if (collection.indexOf)
        return collection.indexOf(elt);
      for (var i = 0, e = collection.length; i < e; ++i)
        if (collection[i] == elt)
          return i;
      return -1;
    }
    function closingTagExists(cm, context, tagName, pos, newTag) {
      if (!CodeMirror2.scanForClosingTag)
        return false;
      var end = Math.min(cm.lastLine() + 1, pos.line + 500);
      var nextClose = CodeMirror2.scanForClosingTag(cm, pos, null, end);
      if (!nextClose || nextClose.tag != tagName)
        return false;
      var onCx = newTag ? 1 : 0;
      for (var i = context.length - 1; i >= 0; i--) {
        if (context[i] == tagName)
          ++onCx;
        else
          break;
      }
      pos = nextClose.to;
      for (var i = 1; i < onCx; i++) {
        var next2 = CodeMirror2.scanForClosingTag(cm, pos, null, end);
        if (!next2 || next2.tag != tagName)
          return false;
        pos = next2.to;
      }
      return true;
    }
  });
})();
(function(module, exports) {
  (function(mod) {
    mod(codemirror$1.exports);
  })(function(CodeMirror2) {
    var noOptions = {};
    var nonWS = /[^\s\u00a0]/;
    var Pos = CodeMirror2.Pos, cmp = CodeMirror2.cmpPos;
    function firstNonWS(str) {
      var found = str.search(nonWS);
      return found == -1 ? 0 : found;
    }
    CodeMirror2.commands.toggleComment = function(cm) {
      cm.toggleComment();
    };
    CodeMirror2.defineExtension("toggleComment", function(options) {
      if (!options)
        options = noOptions;
      var cm = this;
      var minLine = Infinity, ranges = this.listSelections(), mode = null;
      for (var i = ranges.length - 1; i >= 0; i--) {
        var from = ranges[i].from(), to = ranges[i].to();
        if (from.line >= minLine)
          continue;
        if (to.line >= minLine)
          to = Pos(minLine, 0);
        minLine = from.line;
        if (mode == null) {
          if (cm.uncomment(from, to, options))
            mode = "un";
          else {
            cm.lineComment(from, to, options);
            mode = "line";
          }
        } else if (mode == "un") {
          cm.uncomment(from, to, options);
        } else {
          cm.lineComment(from, to, options);
        }
      }
    });
    function probablyInsideString(cm, pos, line) {
      return /\bstring\b/.test(cm.getTokenTypeAt(Pos(pos.line, 0))) && !/^[\'\"\`]/.test(line);
    }
    function getMode(cm, pos) {
      var mode = cm.getMode();
      return mode.useInnerComments === false || !mode.innerMode ? mode : cm.getModeAt(pos);
    }
    CodeMirror2.defineExtension("lineComment", function(from, to, options) {
      if (!options)
        options = noOptions;
      var self2 = this, mode = getMode(self2, from);
      var firstLine = self2.getLine(from.line);
      if (firstLine == null || probablyInsideString(self2, from, firstLine))
        return;
      var commentString = options.lineComment || mode.lineComment;
      if (!commentString) {
        if (options.blockCommentStart || mode.blockCommentStart) {
          options.fullLines = true;
          self2.blockComment(from, to, options);
        }
        return;
      }
      var end = Math.min(to.ch != 0 || to.line == from.line ? to.line + 1 : to.line, self2.lastLine() + 1);
      var pad = options.padding == null ? " " : options.padding;
      var blankLines = options.commentBlankLines || from.line == to.line;
      self2.operation(function() {
        if (options.indent) {
          var baseString = null;
          for (var i = from.line; i < end; ++i) {
            var line = self2.getLine(i);
            var whitespace = line.slice(0, firstNonWS(line));
            if (baseString == null || baseString.length > whitespace.length) {
              baseString = whitespace;
            }
          }
          for (var i = from.line; i < end; ++i) {
            var line = self2.getLine(i), cut = baseString.length;
            if (!blankLines && !nonWS.test(line))
              continue;
            if (line.slice(0, cut) != baseString)
              cut = firstNonWS(line);
            self2.replaceRange(baseString + commentString + pad, Pos(i, 0), Pos(i, cut));
          }
        } else {
          for (var i = from.line; i < end; ++i) {
            if (blankLines || nonWS.test(self2.getLine(i)))
              self2.replaceRange(commentString + pad, Pos(i, 0));
          }
        }
      });
    });
    CodeMirror2.defineExtension("blockComment", function(from, to, options) {
      if (!options)
        options = noOptions;
      var self2 = this, mode = getMode(self2, from);
      var startString = options.blockCommentStart || mode.blockCommentStart;
      var endString = options.blockCommentEnd || mode.blockCommentEnd;
      if (!startString || !endString) {
        if ((options.lineComment || mode.lineComment) && options.fullLines != false)
          self2.lineComment(from, to, options);
        return;
      }
      if (/\bcomment\b/.test(self2.getTokenTypeAt(Pos(from.line, 0))))
        return;
      var end = Math.min(to.line, self2.lastLine());
      if (end != from.line && to.ch == 0 && nonWS.test(self2.getLine(end)))
        --end;
      var pad = options.padding == null ? " " : options.padding;
      if (from.line > end)
        return;
      self2.operation(function() {
        if (options.fullLines != false) {
          var lastLineHasText = nonWS.test(self2.getLine(end));
          self2.replaceRange(pad + endString, Pos(end));
          self2.replaceRange(startString + pad, Pos(from.line, 0));
          var lead = options.blockCommentLead || mode.blockCommentLead;
          if (lead != null) {
            for (var i = from.line + 1; i <= end; ++i)
              if (i != end || lastLineHasText)
                self2.replaceRange(lead + pad, Pos(i, 0));
          }
        } else {
          var atCursor = cmp(self2.getCursor("to"), to) == 0, empty = !self2.somethingSelected();
          self2.replaceRange(endString, to);
          if (atCursor)
            self2.setSelection(empty ? to : self2.getCursor("from"), to);
          self2.replaceRange(startString, from);
        }
      });
    });
    CodeMirror2.defineExtension("uncomment", function(from, to, options) {
      if (!options)
        options = noOptions;
      var self2 = this, mode = getMode(self2, from);
      var end = Math.min(to.ch != 0 || to.line == from.line ? to.line : to.line - 1, self2.lastLine()), start = Math.min(from.line, end);
      var lineString = options.lineComment || mode.lineComment, lines = [];
      var pad = options.padding == null ? " " : options.padding, didSomething;
      lineComment: {
        if (!lineString)
          break lineComment;
        for (var i = start; i <= end; ++i) {
          var line = self2.getLine(i);
          var found = line.indexOf(lineString);
          if (found > -1 && !/comment/.test(self2.getTokenTypeAt(Pos(i, found + 1))))
            found = -1;
          if (found == -1 && nonWS.test(line))
            break lineComment;
          if (found > -1 && nonWS.test(line.slice(0, found)))
            break lineComment;
          lines.push(line);
        }
        self2.operation(function() {
          for (var i2 = start; i2 <= end; ++i2) {
            var line2 = lines[i2 - start];
            var pos = line2.indexOf(lineString), endPos = pos + lineString.length;
            if (pos < 0)
              continue;
            if (line2.slice(endPos, endPos + pad.length) == pad)
              endPos += pad.length;
            didSomething = true;
            self2.replaceRange("", Pos(i2, pos), Pos(i2, endPos));
          }
        });
        if (didSomething)
          return true;
      }
      var startString = options.blockCommentStart || mode.blockCommentStart;
      var endString = options.blockCommentEnd || mode.blockCommentEnd;
      if (!startString || !endString)
        return false;
      var lead = options.blockCommentLead || mode.blockCommentLead;
      var startLine = self2.getLine(start), open = startLine.indexOf(startString);
      if (open == -1)
        return false;
      var endLine = end == start ? startLine : self2.getLine(end);
      var close = endLine.indexOf(endString, end == start ? open + startString.length : 0);
      var insideStart = Pos(start, open + 1), insideEnd = Pos(end, close + 1);
      if (close == -1 || !/comment/.test(self2.getTokenTypeAt(insideStart)) || !/comment/.test(self2.getTokenTypeAt(insideEnd)) || self2.getRange(insideStart, insideEnd, "\n").indexOf(endString) > -1)
        return false;
      var lastStart = startLine.lastIndexOf(startString, from.ch);
      var firstEnd = lastStart == -1 ? -1 : startLine.slice(0, from.ch).indexOf(endString, lastStart + startString.length);
      if (lastStart != -1 && firstEnd != -1 && firstEnd + endString.length != from.ch)
        return false;
      firstEnd = endLine.indexOf(endString, to.ch);
      var almostLastStart = endLine.slice(to.ch).lastIndexOf(startString, firstEnd - to.ch);
      lastStart = firstEnd == -1 || almostLastStart == -1 ? -1 : to.ch + almostLastStart;
      if (firstEnd != -1 && lastStart != -1 && lastStart != to.ch)
        return false;
      self2.operation(function() {
        self2.replaceRange("", Pos(end, close - (pad && endLine.slice(close - pad.length, close) == pad ? pad.length : 0)), Pos(end, close + endString.length));
        var openEnd = open + startString.length;
        if (pad && startLine.slice(openEnd, openEnd + pad.length) == pad)
          openEnd += pad.length;
        self2.replaceRange("", Pos(start, open), Pos(start, openEnd));
        if (lead)
          for (var i2 = start + 1; i2 <= end; ++i2) {
            var line2 = self2.getLine(i2), found2 = line2.indexOf(lead);
            if (found2 == -1 || nonWS.test(line2.slice(0, found2)))
              continue;
            var foundEnd = found2 + lead.length;
            if (pad && line2.slice(foundEnd, foundEnd + pad.length) == pad)
              foundEnd += pad.length;
            self2.replaceRange("", Pos(i2, found2), Pos(i2, foundEnd));
          }
      });
      return true;
    });
  });
})();
var foldcode = { exports: {} };
(function(module, exports) {
  (function(mod) {
    mod(codemirror$1.exports);
  })(function(CodeMirror2) {
    function doFold(cm, pos, options, force) {
      if (options && options.call) {
        var finder = options;
        options = null;
      } else {
        var finder = getOption(cm, options, "rangeFinder");
      }
      if (typeof pos == "number")
        pos = CodeMirror2.Pos(pos, 0);
      var minSize = getOption(cm, options, "minFoldSize");
      function getRange(allowFolded) {
        var range2 = finder(cm, pos);
        if (!range2 || range2.to.line - range2.from.line < minSize)
          return null;
        if (force === "fold")
          return range2;
        var marks = cm.findMarksAt(range2.from);
        for (var i = 0; i < marks.length; ++i) {
          if (marks[i].__isFold) {
            if (!allowFolded)
              return null;
            range2.cleared = true;
            marks[i].clear();
          }
        }
        return range2;
      }
      var range = getRange(true);
      if (getOption(cm, options, "scanUp"))
        while (!range && pos.line > cm.firstLine()) {
          pos = CodeMirror2.Pos(pos.line - 1, 0);
          range = getRange(false);
        }
      if (!range || range.cleared || force === "unfold")
        return;
      var myWidget = makeWidget(cm, options, range);
      CodeMirror2.on(myWidget, "mousedown", function(e) {
        myRange.clear();
        CodeMirror2.e_preventDefault(e);
      });
      var myRange = cm.markText(range.from, range.to, {
        replacedWith: myWidget,
        clearOnEnter: getOption(cm, options, "clearOnEnter"),
        __isFold: true
      });
      myRange.on("clear", function(from, to) {
        CodeMirror2.signal(cm, "unfold", cm, from, to);
      });
      CodeMirror2.signal(cm, "fold", cm, range.from, range.to);
    }
    function makeWidget(cm, options, range) {
      var widget = getOption(cm, options, "widget");
      if (typeof widget == "function") {
        widget = widget(range.from, range.to);
      }
      if (typeof widget == "string") {
        var text = document.createTextNode(widget);
        widget = document.createElement("span");
        widget.appendChild(text);
        widget.className = "CodeMirror-foldmarker";
      } else if (widget) {
        widget = widget.cloneNode(true);
      }
      return widget;
    }
    CodeMirror2.newFoldFunction = function(rangeFinder, widget) {
      return function(cm, pos) {
        doFold(cm, pos, { rangeFinder, widget });
      };
    };
    CodeMirror2.defineExtension("foldCode", function(pos, options, force) {
      doFold(this, pos, options, force);
    });
    CodeMirror2.defineExtension("isFolded", function(pos) {
      var marks = this.findMarksAt(pos);
      for (var i = 0; i < marks.length; ++i)
        if (marks[i].__isFold)
          return true;
    });
    CodeMirror2.commands.toggleFold = function(cm) {
      cm.foldCode(cm.getCursor());
    };
    CodeMirror2.commands.fold = function(cm) {
      cm.foldCode(cm.getCursor(), null, "fold");
    };
    CodeMirror2.commands.unfold = function(cm) {
      cm.foldCode(cm.getCursor(), { scanUp: false }, "unfold");
    };
    CodeMirror2.commands.foldAll = function(cm) {
      cm.operation(function() {
        for (var i = cm.firstLine(), e = cm.lastLine(); i <= e; i++)
          cm.foldCode(CodeMirror2.Pos(i, 0), { scanUp: false }, "fold");
      });
    };
    CodeMirror2.commands.unfoldAll = function(cm) {
      cm.operation(function() {
        for (var i = cm.firstLine(), e = cm.lastLine(); i <= e; i++)
          cm.foldCode(CodeMirror2.Pos(i, 0), { scanUp: false }, "unfold");
      });
    };
    CodeMirror2.registerHelper("fold", "combine", function() {
      var funcs = Array.prototype.slice.call(arguments, 0);
      return function(cm, start) {
        for (var i = 0; i < funcs.length; ++i) {
          var found = funcs[i](cm, start);
          if (found)
            return found;
        }
      };
    });
    CodeMirror2.registerHelper("fold", "auto", function(cm, start) {
      var helpers = cm.getHelpers(start, "fold");
      for (var i = 0; i < helpers.length; i++) {
        var cur = helpers[i](cm, start);
        if (cur)
          return cur;
      }
    });
    var defaultOptions = {
      rangeFinder: CodeMirror2.fold.auto,
      widget: "\u2194",
      minFoldSize: 0,
      scanUp: false,
      clearOnEnter: true
    };
    CodeMirror2.defineOption("foldOptions", null);
    function getOption(cm, options, name) {
      if (options && options[name] !== void 0)
        return options[name];
      var editorOptions = cm.options.foldOptions;
      if (editorOptions && editorOptions[name] !== void 0)
        return editorOptions[name];
      return defaultOptions[name];
    }
    CodeMirror2.defineExtension("foldOption", function(options, name) {
      return getOption(this, options, name);
    });
  });
})();
(function(module, exports) {
  (function(mod) {
    mod(codemirror$1.exports, foldcode.exports);
  })(function(CodeMirror2) {
    CodeMirror2.defineOption("foldGutter", false, function(cm, val, old) {
      if (old && old != CodeMirror2.Init) {
        cm.clearGutter(cm.state.foldGutter.options.gutter);
        cm.state.foldGutter = null;
        cm.off("gutterClick", onGutterClick);
        cm.off("changes", onChange);
        cm.off("viewportChange", onViewportChange);
        cm.off("fold", onFold);
        cm.off("unfold", onFold);
        cm.off("swapDoc", onChange);
      }
      if (val) {
        cm.state.foldGutter = new State2(parseOptions(val));
        updateInViewport(cm);
        cm.on("gutterClick", onGutterClick);
        cm.on("changes", onChange);
        cm.on("viewportChange", onViewportChange);
        cm.on("fold", onFold);
        cm.on("unfold", onFold);
        cm.on("swapDoc", onChange);
      }
    });
    var Pos = CodeMirror2.Pos;
    function State2(options) {
      this.options = options;
      this.from = this.to = 0;
    }
    function parseOptions(opts) {
      if (opts === true)
        opts = {};
      if (opts.gutter == null)
        opts.gutter = "CodeMirror-foldgutter";
      if (opts.indicatorOpen == null)
        opts.indicatorOpen = "CodeMirror-foldgutter-open";
      if (opts.indicatorFolded == null)
        opts.indicatorFolded = "CodeMirror-foldgutter-folded";
      return opts;
    }
    function isFolded(cm, line) {
      var marks = cm.findMarks(Pos(line, 0), Pos(line + 1, 0));
      for (var i = 0; i < marks.length; ++i) {
        if (marks[i].__isFold) {
          var fromPos = marks[i].find(-1);
          if (fromPos && fromPos.line === line)
            return marks[i];
        }
      }
    }
    function marker(spec) {
      if (typeof spec == "string") {
        var elt = document.createElement("div");
        elt.className = spec + " CodeMirror-guttermarker-subtle";
        return elt;
      } else {
        return spec.cloneNode(true);
      }
    }
    function updateFoldInfo(cm, from, to) {
      var opts = cm.state.foldGutter.options, cur = from - 1;
      var minSize = cm.foldOption(opts, "minFoldSize");
      var func = cm.foldOption(opts, "rangeFinder");
      var clsFolded = typeof opts.indicatorFolded == "string" && classTest(opts.indicatorFolded);
      var clsOpen = typeof opts.indicatorOpen == "string" && classTest(opts.indicatorOpen);
      cm.eachLine(from, to, function(line) {
        ++cur;
        var mark = null;
        var old = line.gutterMarkers;
        if (old)
          old = old[opts.gutter];
        if (isFolded(cm, cur)) {
          if (clsFolded && old && clsFolded.test(old.className))
            return;
          mark = marker(opts.indicatorFolded);
        } else {
          var pos = Pos(cur, 0);
          var range = func && func(cm, pos);
          if (range && range.to.line - range.from.line >= minSize) {
            if (clsOpen && old && clsOpen.test(old.className))
              return;
            mark = marker(opts.indicatorOpen);
          }
        }
        if (!mark && !old)
          return;
        cm.setGutterMarker(line, opts.gutter, mark);
      });
    }
    function classTest(cls) {
      return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*");
    }
    function updateInViewport(cm) {
      var vp = cm.getViewport(), state2 = cm.state.foldGutter;
      if (!state2)
        return;
      cm.operation(function() {
        updateFoldInfo(cm, vp.from, vp.to);
      });
      state2.from = vp.from;
      state2.to = vp.to;
    }
    function onGutterClick(cm, line, gutter) {
      var state2 = cm.state.foldGutter;
      if (!state2)
        return;
      var opts = state2.options;
      if (gutter != opts.gutter)
        return;
      var folded = isFolded(cm, line);
      if (folded)
        folded.clear();
      else
        cm.foldCode(Pos(line, 0), opts);
    }
    function onChange(cm) {
      var state2 = cm.state.foldGutter;
      if (!state2)
        return;
      var opts = state2.options;
      state2.from = state2.to = 0;
      clearTimeout(state2.changeUpdate);
      state2.changeUpdate = setTimeout(function() {
        updateInViewport(cm);
      }, opts.foldOnChangeTimeSpan || 600);
    }
    function onViewportChange(cm) {
      var state2 = cm.state.foldGutter;
      if (!state2)
        return;
      var opts = state2.options;
      clearTimeout(state2.changeUpdate);
      state2.changeUpdate = setTimeout(function() {
        var vp = cm.getViewport();
        if (state2.from == state2.to || vp.from - state2.to > 20 || state2.from - vp.to > 20) {
          updateInViewport(cm);
        } else {
          cm.operation(function() {
            if (vp.from < state2.from) {
              updateFoldInfo(cm, vp.from, state2.from);
              state2.from = vp.from;
            }
            if (vp.to > state2.to) {
              updateFoldInfo(cm, state2.to, vp.to);
              state2.to = vp.to;
            }
          });
        }
      }, opts.updateViewportTimeSpan || 400);
    }
    function onFold(cm, from) {
      var state2 = cm.state.foldGutter;
      if (!state2)
        return;
      var line = from.line;
      if (line >= state2.from && line < state2.to)
        updateFoldInfo(cm, line, line + 1);
    }
  });
})();
(function(module, exports) {
  (function(mod) {
    mod(codemirror$1.exports);
  })(function(CodeMirror2) {
    CodeMirror2.registerHelper("fold", "brace", function(cm, start) {
      var line = start.line, lineText = cm.getLine(line);
      var tokenType;
      function findOpening(openCh) {
        for (var at = start.ch, pass = 0; ; ) {
          var found = at <= 0 ? -1 : lineText.lastIndexOf(openCh, at - 1);
          if (found == -1) {
            if (pass == 1)
              break;
            pass = 1;
            at = lineText.length;
            continue;
          }
          if (pass == 1 && found < start.ch)
            break;
          tokenType = cm.getTokenTypeAt(CodeMirror2.Pos(line, found + 1));
          if (!/^(comment|string)/.test(tokenType))
            return found + 1;
          at = found - 1;
        }
      }
      var startBrace = findOpening("{"), startBracket = findOpening("[");
      var startToken, endToken, startCh;
      if (startBrace != null && (startBracket == null || startBracket > startBrace)) {
        startCh = startBrace;
        startToken = "{";
        endToken = "}";
      } else if (startBracket != null) {
        startCh = startBracket;
        startToken = "[";
        endToken = "]";
      } else {
        return;
      }
      var count = 1, lastLine = cm.lastLine(), end, endCh;
      outer:
        for (var i = line; i <= lastLine; ++i) {
          var text = cm.getLine(i), pos = i == line ? startCh : 0;
          for (; ; ) {
            var nextOpen = text.indexOf(startToken, pos), nextClose = text.indexOf(endToken, pos);
            if (nextOpen < 0)
              nextOpen = text.length;
            if (nextClose < 0)
              nextClose = text.length;
            pos = Math.min(nextOpen, nextClose);
            if (pos == text.length)
              break;
            if (cm.getTokenTypeAt(CodeMirror2.Pos(i, pos + 1)) == tokenType) {
              if (pos == nextOpen)
                ++count;
              else if (!--count) {
                end = i;
                endCh = pos;
                break outer;
              }
            }
            ++pos;
          }
        }
      if (end == null || line == end)
        return;
      return {
        from: CodeMirror2.Pos(line, startCh),
        to: CodeMirror2.Pos(end, endCh)
      };
    });
    CodeMirror2.registerHelper("fold", "import", function(cm, start) {
      function hasImport(line) {
        if (line < cm.firstLine() || line > cm.lastLine())
          return null;
        var start2 = cm.getTokenAt(CodeMirror2.Pos(line, 1));
        if (!/\S/.test(start2.string))
          start2 = cm.getTokenAt(CodeMirror2.Pos(line, start2.end + 1));
        if (start2.type != "keyword" || start2.string != "import")
          return null;
        for (var i = line, e = Math.min(cm.lastLine(), line + 10); i <= e; ++i) {
          var text = cm.getLine(i), semi = text.indexOf(";");
          if (semi != -1)
            return { startCh: start2.end, end: CodeMirror2.Pos(i, semi) };
        }
      }
      var startLine = start.line, has = hasImport(startLine), prev;
      if (!has || hasImport(startLine - 1) || (prev = hasImport(startLine - 2)) && prev.end.line == startLine - 1)
        return null;
      for (var end = has.end; ; ) {
        var next2 = hasImport(end.line + 1);
        if (next2 == null)
          break;
        end = next2.end;
      }
      return { from: cm.clipPos(CodeMirror2.Pos(startLine, has.startCh + 1)), to: end };
    });
    CodeMirror2.registerHelper("fold", "include", function(cm, start) {
      function hasInclude(line) {
        if (line < cm.firstLine() || line > cm.lastLine())
          return null;
        var start2 = cm.getTokenAt(CodeMirror2.Pos(line, 1));
        if (!/\S/.test(start2.string))
          start2 = cm.getTokenAt(CodeMirror2.Pos(line, start2.end + 1));
        if (start2.type == "meta" && start2.string.slice(0, 8) == "#include")
          return start2.start + 8;
      }
      var startLine = start.line, has = hasInclude(startLine);
      if (has == null || hasInclude(startLine - 1) != null)
        return null;
      for (var end = startLine; ; ) {
        var next2 = hasInclude(end + 1);
        if (next2 == null)
          break;
        ++end;
      }
      return {
        from: CodeMirror2.Pos(startLine, has + 1),
        to: cm.clipPos(CodeMirror2.Pos(end))
      };
    });
  });
})();
(function(module, exports) {
  (function(mod) {
    mod(codemirror$1.exports);
  })(function(CodeMirror2) {
    function lineIndent(cm, lineNo) {
      var text = cm.getLine(lineNo);
      var spaceTo = text.search(/\S/);
      if (spaceTo == -1 || /\bcomment\b/.test(cm.getTokenTypeAt(CodeMirror2.Pos(lineNo, spaceTo + 1))))
        return -1;
      return CodeMirror2.countColumn(text, null, cm.getOption("tabSize"));
    }
    CodeMirror2.registerHelper("fold", "indent", function(cm, start) {
      var myIndent = lineIndent(cm, start.line);
      if (myIndent < 0)
        return;
      var lastLineInFold = null;
      for (var i = start.line + 1, end = cm.lastLine(); i <= end; ++i) {
        var indent = lineIndent(cm, i);
        if (indent == -1)
          ;
        else if (indent > myIndent) {
          lastLineInFold = i;
        } else {
          break;
        }
      }
      if (lastLineInFold)
        return {
          from: CodeMirror2.Pos(start.line, cm.getLine(start.line).length),
          to: CodeMirror2.Pos(lastLineInFold, cm.getLine(lastLineInFold).length)
        };
    });
  });
})();
(function(module, exports) {
  (function(mod) {
    mod(codemirror$1.exports);
  })(function(CodeMirror2) {
    CodeMirror2.registerGlobalHelper("fold", "comment", function(mode) {
      return mode.blockCommentStart && mode.blockCommentEnd;
    }, function(cm, start) {
      var mode = cm.getModeAt(start), startToken = mode.blockCommentStart, endToken = mode.blockCommentEnd;
      if (!startToken || !endToken)
        return;
      var line = start.line, lineText = cm.getLine(line);
      var startCh;
      for (var at = start.ch, pass = 0; ; ) {
        var found = at <= 0 ? -1 : lineText.lastIndexOf(startToken, at - 1);
        if (found == -1) {
          if (pass == 1)
            return;
          pass = 1;
          at = lineText.length;
          continue;
        }
        if (pass == 1 && found < start.ch)
          return;
        if (/comment/.test(cm.getTokenTypeAt(CodeMirror2.Pos(line, found + 1))) && (found == 0 || lineText.slice(found - endToken.length, found) == endToken || !/comment/.test(cm.getTokenTypeAt(CodeMirror2.Pos(line, found))))) {
          startCh = found + startToken.length;
          break;
        }
        at = found - 1;
      }
      var depth = 1, lastLine = cm.lastLine(), end, endCh;
      outer:
        for (var i = line; i <= lastLine; ++i) {
          var text = cm.getLine(i), pos = i == line ? startCh : 0;
          for (; ; ) {
            var nextOpen = text.indexOf(startToken, pos), nextClose = text.indexOf(endToken, pos);
            if (nextOpen < 0)
              nextOpen = text.length;
            if (nextClose < 0)
              nextClose = text.length;
            pos = Math.min(nextOpen, nextClose);
            if (pos == text.length)
              break;
            if (pos == nextOpen)
              ++depth;
            else if (!--depth) {
              end = i;
              endCh = pos;
              break outer;
            }
            ++pos;
          }
        }
      if (end == null || line == end && endCh == startCh)
        return;
      return {
        from: CodeMirror2.Pos(line, startCh),
        to: CodeMirror2.Pos(end, endCh)
      };
    });
  });
})();
var CodeMirror_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    mode: { type: String, required: false, default: "htmlmixed" },
    value: { type: String, required: false, default: "" },
    readonly: { type: Boolean, required: false, default: false }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const el = ref();
    const needAutoResize = inject("autoresize");
    onMounted(() => {
      const addonOptions = {
        autoCloseBrackets: true,
        autoCloseTags: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
      };
      const editor = CodeMirror(el.value, __spreadValues({
        value: "",
        mode: props.mode,
        readOnly: props.readonly,
        tabSize: 2,
        lineWrapping: true,
        lineNumbers: true
      }, addonOptions));
      editor.on("change", () => {
        emit("change", editor.getValue());
      });
      watchEffect(() => {
        const cur = editor.getValue();
        if (props.value !== cur) {
          editor.setValue(props.value);
        }
      });
      watchEffect(() => {
        editor.setOption("mode", props.mode);
      });
      setTimeout(() => {
        editor.refresh();
      }, 50);
      if (needAutoResize) {
        window.addEventListener("resize", debounce(() => {
          editor.refresh();
        }));
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "editor",
        ref: (_value, _refs) => {
          _refs["el"] = _value;
          el.value = _value;
        }
      }, null, 512);
    };
  }
});
var Message_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: ["err", "warn"],
  setup(__props) {
    const props = __props;
    const dismissed = ref(false);
    watch(() => [props.err, props.warn], () => {
      dismissed.value = false;
    });
    function formatMessage(err) {
      if (typeof err === "string") {
        return err;
      } else {
        let msg = err.message;
        const loc = err.loc;
        if (loc && loc.start) {
          msg = `(${loc.start.line}:${loc.start.column}) ` + msg;
        }
        return msg;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          !dismissed.value && (__props.err || __props.warn) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["msg", __props.err ? "err" : "warn"])
          }, [
            createElementVNode("pre", null, toDisplayString(formatMessage(__props.err || __props.warn)), 1),
            createElementVNode("button", {
              class: "dismiss",
              onClick: _cache[0] || (_cache[0] = ($event) => dismissed.value = true)
            }, "\u2715")
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
var Message = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-e083996a"]]);
var Editor_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = { class: "editor-container" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const store = inject("store");
    const onChange = debounce((code) => {
      store.state.activeFile.code = code;
    }, 250);
    const activeMode = computed(() => {
      const { filename } = store.state.activeFile;
      return filename.endsWith(".vue") || filename.endsWith(".html") ? "htmlmixed" : filename.endsWith(".css") ? "css" : "javascript";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(FileSelector),
        createElementVNode("div", _hoisted_1$2, [
          createVNode(_sfc_main$5, {
            onChange: unref(onChange),
            value: unref(store).state.activeFile.code,
            mode: unref(activeMode)
          }, null, 8, ["onChange", "value", "mode"]),
          createVNode(Message, {
            err: unref(store).state.errors[0]
          }, null, 8, ["err"])
        ])
      ], 64);
    };
  }
});
var Editor = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-759ba5e9"]]);
var srcdoc = "<!doctype html>\n<html>\n	<head>\n		<style>\n			body {\n				font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n				Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n			}\n		</style>\n		<style id=\"__sfc-styles\"></style>\n		<script>\n			(() => {\n				let scriptEls = []\n\n				window.process = { env: {} }\n				window.__modules__ = {}\n\n				window.__export__ = (mod, key, get) => {\n					Object.defineProperty(mod, key, {\n						enumerable: true,\n						configurable: true,\n						get\n					})\n				}\n\n				window.__dynamic_import__ = key => {\n					return Promise.resolve(window.__modules__[key])\n				}\n\n				async function handle_message(ev) {\n					let { action, cmd_id } = ev.data;\n					const send_message = (payload) => parent.postMessage( { ...payload }, ev.origin);\n					const send_reply = (payload) => send_message({ ...payload, cmd_id });\n					const send_ok = () => send_reply({ action: 'cmd_ok' });\n					const send_error = (message, stack) => send_reply({ action: 'cmd_error', message, stack });\n\n					if (action === 'eval') {\n						try {\n							if (scriptEls.length) {\n								scriptEls.forEach(el => {\n									document.head.removeChild(el)\n								})\n								scriptEls.length = 0\n							}\n\n							let { script: scripts } = ev.data.args\n							if (typeof scripts === 'string') scripts = [scripts]\n\n							for (const script of scripts) {\n								const scriptEl = document.createElement('script')\n								scriptEl.setAttribute('type', 'module')\n								// send ok in the module script to ensure sequential evaluation\n								// of multiple proxy.eval() calls\n								const done = new Promise((resolve) => {\n									window.__next__ = resolve\n								})\n								scriptEl.innerHTML = script + `\\nwindow.__next__()`\n								document.head.appendChild(scriptEl)\n								scriptEl.onrror = err => send_error(err.message, err.stack)\n								scriptEls.push(scriptEl)\n								await done\n							}\n							send_ok()\n						} catch (e) {\n							send_error(e.message, e.stack);\n						}\n					}\n\n					if (action === 'catch_clicks') {\n						try {\n							const top_origin = ev.origin;\n							document.body.addEventListener('click', event => {\n								if (event.which !== 1) return;\n								if (event.metaKey || event.ctrlKey || event.shiftKey) return;\n								if (event.defaultPrevented) return;\n\n								// ensure target is a link\n								let el = event.target;\n								while (el && el.nodeName !== 'A') el = el.parentNode;\n								if (!el || el.nodeName !== 'A') return;\n\n								if (el.hasAttribute('download') || el.getAttribute('rel') === 'external' || el.target) return;\n\n								event.preventDefault();\n\n								if (el.href.startsWith(top_origin)) {\n									const url = new URL(el.href);\n									if (url.hash[0] === '#') {\n										window.location.hash = url.hash;\n										return;\n									}\n								}\n\n								window.open(el.href, '_blank');\n							});\n							send_ok();\n						} catch(e) {\n							send_error(e.message, e.stack);\n						}\n					}\n				}\n\n				window.addEventListener('message', handle_message, false);\n\n				window.onerror = function (msg, url, lineNo, columnNo, error) {\n					if (msg.includes('module specifier \u201Cvue\u201D')) {\n						// firefox only error, ignore\n						return false\n					}\n					try {\n						parent.postMessage({ action: 'error', value: error }, '*');\n					} catch (e) {\n						parent.postMessage({ action: 'error', value: msg }, '*');\n					}\n				}\n\n				window.addEventListener(\"unhandledrejection\", event => {\n					if (event.reason.message.includes('Cross-origin')) {\n						event.preventDefault()\n						return\n					}\n					try {\n						parent.postMessage({ action: 'unhandledrejection', value: event.reason }, '*');\n					} catch (e) {\n						parent.postMessage({ action: 'unhandledrejection', value: event.reason.message }, '*');\n					}\n				});\n\n				let previous = { level: null, args: null };\n\n				['clear', 'log', 'info', 'dir', 'warn', 'error', 'table'].forEach((level) => {\n					const original = console[level];\n					console[level] = (...args) => {\n						const msg = String(args[0])\n						if (\n							msg.includes('You are running a development build of Vue') ||\n							msg.includes('You are running the esm-bundler build of Vue')\n						) {\n							return\n						}\n						const stringifiedArgs = stringify(args);\n						if (\n							previous.level === level &&\n							previous.args &&\n							previous.args === stringifiedArgs\n						) {\n							parent.postMessage({ action: 'console', level, duplicate: true }, '*');\n						} else {\n							previous = { level, args: stringifiedArgs };\n\n							try {\n								parent.postMessage({ action: 'console', level, args }, '*');\n							} catch (err) {\n								parent.postMessage({ action: 'console', level, args: args.map(a => {\n									return a instanceof Error ? a.message : String(a)\n								}) }, '*');\n							}\n						}\n\n						original(...args);\n					}\n				});\n\n				[\n					{ method: 'group', action: 'console_group' },\n					{ method: 'groupEnd', action: 'console_group_end' },\n					{ method: 'groupCollapsed', action: 'console_group_collapsed' },\n				].forEach((group_action) => {\n					const original = console[group_action.method];\n					console[group_action.method] = (label) => {\n						parent.postMessage({ action: group_action.action, label }, '*');\n\n						original(label);\n					};\n				});\n\n				const timers = new Map();\n				const original_time = console.time;\n				const original_timelog = console.timeLog;\n				const original_timeend = console.timeEnd;\n\n				console.time = (label = 'default') => {\n					original_time(label);\n					timers.set(label, performance.now());\n				}\n				console.timeLog = (label = 'default') => {\n					original_timelog(label);\n					const now = performance.now();\n					if (timers.has(label)) {\n						parent.postMessage({ action: 'console', level: 'system-log', args: [`${label}: ${now - timers.get(label)}ms`] }, '*');\n					} else {\n						parent.postMessage({ action: 'console', level: 'system-warn', args: [`Timer '${label}' does not exist`] }, '*');\n					}\n				}\n				console.timeEnd = (label = 'default') => {\n					original_timeend(label);\n					const now = performance.now();\n					if (timers.has(label)) {\n						parent.postMessage({ action: 'console', level: 'system-log', args: [`${label}: ${now - timers.get(label)}ms`] }, '*');\n					} else {\n						parent.postMessage({ action: 'console', level: 'system-warn', args: [`Timer '${label}' does not exist`] }, '*');\n					}\n					timers.delete(label);\n				};\n\n				const original_assert = console.assert;\n				console.assert = (condition, ...args) => {\n					if (condition) {\n						const stack = new Error().stack;\n						parent.postMessage({ action: 'console', level: 'assert', args, stack }, '*');\n					}\n					original_assert(condition, ...args);\n				};\n\n				const counter = new Map();\n				const original_count = console.count;\n				const original_countreset = console.countReset;\n\n				console.count = (label = 'default') => {\n					counter.set(label, (counter.get(label) || 0) + 1);\n					parent.postMessage({ action: 'console', level: 'system-log', args: `${label}: ${counter.get(label)}` }, '*');\n					original_count(label);\n				};\n\n				console.countReset = (label = 'default') => {\n					if (counter.has(label)) {\n						counter.set(label, 0);\n					} else {\n						parent.postMessage({ action: 'console', level: 'system-warn', args: `Count for '${label}' does not exist` }, '*');\n					}\n					original_countreset(label);\n				};\n\n				const original_trace = console.trace;\n\n				console.trace = (...args) => {\n					const stack = new Error().stack;\n					parent.postMessage({ action: 'console', level: 'trace', args, stack }, '*');\n					original_trace(...args);\n				};\n\n				function stringify(args) {\n					try {\n						return JSON.stringify(args);\n					} catch (error) {\n						return null;\n					}\n				}\n			})()\n		<\/script>\n\n		<!-- ES Module Shims: Import maps polyfill for modules browsers without import maps support (all except Chrome 89+) -->\n		<script async src=\"https://unpkg.com/es-module-shims@0.10.1/dist/es-module-shims.min.js\"><\/script>\n		<script type=\"importmap\"><!--IMPORT_MAP--><\/script>\n	</head>\n	<body></body>\n</html>";
let uid = 1;
class PreviewProxy {
  constructor(iframe, handlers) {
    this.iframe = iframe;
    this.handlers = handlers;
    this.pending_cmds = new Map();
    this.handle_event = (e) => this.handle_repl_message(e);
    window.addEventListener("message", this.handle_event, false);
  }
  destroy() {
    window.removeEventListener("message", this.handle_event);
  }
  iframe_command(action, args) {
    return new Promise((resolve, reject) => {
      const cmd_id = uid++;
      this.pending_cmds.set(cmd_id, { resolve, reject });
      this.iframe.contentWindow.postMessage({ action, cmd_id, args }, "*");
    });
  }
  handle_command_message(cmd_data) {
    let action = cmd_data.action;
    let id = cmd_data.cmd_id;
    let handler = this.pending_cmds.get(id);
    if (handler) {
      this.pending_cmds.delete(id);
      if (action === "cmd_error") {
        let { message, stack } = cmd_data;
        let e = new Error(message);
        e.stack = stack;
        handler.reject(e);
      }
      if (action === "cmd_ok") {
        handler.resolve(cmd_data.args);
      }
    } else {
      console.error("command not found", id, cmd_data, [
        ...this.pending_cmds.keys()
      ]);
    }
  }
  handle_repl_message(event2) {
    if (event2.source !== this.iframe.contentWindow)
      return;
    const { action, args } = event2.data;
    switch (action) {
      case "cmd_error":
      case "cmd_ok":
        return this.handle_command_message(event2.data);
      case "fetch_progress":
        return this.handlers.on_fetch_progress(args.remaining);
      case "error":
        return this.handlers.on_error(event2.data);
      case "unhandledrejection":
        return this.handlers.on_unhandled_rejection(event2.data);
      case "console":
        return this.handlers.on_console(event2.data);
      case "console_group":
        return this.handlers.on_console_group(event2.data);
      case "console_group_collapsed":
        return this.handlers.on_console_group_collapsed(event2.data);
      case "console_group_end":
        return this.handlers.on_console_group_end(event2.data);
    }
  }
  eval(script) {
    return this.iframe_command("eval", { script });
  }
  handle_links() {
    return this.iframe_command("catch_clicks", {});
  }
}
function compileModulesForPreview(store) {
  const seen = new Set();
  const processed = [];
  processFile(store, store.state.files[store.state.mainFile], processed, seen);
  for (const filename in store.state.files) {
    if (filename.endsWith(".css")) {
      const file = store.state.files[filename];
      if (!seen.has(file)) {
        processed.push(`
window.__css__ += ${JSON.stringify(file.compiled.css)}`);
      }
    }
  }
  return processed;
}
const modulesKey = `__modules__`;
const exportKey = `__export__`;
const dynamicImportKey = `__dynamic_import__`;
const moduleKey = `__module__`;
function processFile(store, file, processed, seen) {
  if (seen.has(file)) {
    return [];
  }
  seen.add(file);
  if (file.filename.endsWith(".html")) {
    return processHtmlFile(store, file.code, file.filename, processed, seen);
  }
  let [js, importedFiles] = processModule(store, file.compiled.js, file.filename);
  if (file.compiled.css) {
    js += `
window.__css__ += ${JSON.stringify(file.compiled.css)}`;
  }
  if (importedFiles.size) {
    for (const imported of importedFiles) {
      processFile(store, store.state.files[imported], processed, seen);
    }
  }
  processed.push(js);
}
function processModule(store, src, filename) {
  const s = new MagicString(src);
  const ast = babelParse(src, {
    sourceFilename: filename,
    sourceType: "module"
  }).program.body;
  const idToImportMap = new Map();
  const declaredConst = new Set();
  const importedFiles = new Set();
  const importToIdMap = new Map();
  function defineImport(node, source) {
    const filename2 = source.replace(/^\.\/+/, "");
    if (!(filename2 in store.state.files)) {
      throw new Error(`File "${filename2}" does not exist.`);
    }
    if (importedFiles.has(filename2)) {
      return importToIdMap.get(filename2);
    }
    importedFiles.add(filename2);
    const id = `__import_${importedFiles.size}__`;
    importToIdMap.set(filename2, id);
    s.appendLeft(node.start, `const ${id} = ${modulesKey}[${JSON.stringify(filename2)}]
`);
    return id;
  }
  function defineExport(name, local = name) {
    s.append(`
${exportKey}(${moduleKey}, "${name}", () => ${local})`);
  }
  s.prepend(`const ${moduleKey} = __modules__[${JSON.stringify(filename)}] = { [Symbol.toStringTag]: "Module" }

`);
  for (const node of ast) {
    if (node.type === "ImportDeclaration") {
      const source = node.source.value;
      if (source.startsWith("./")) {
        const importId = defineImport(node, node.source.value);
        for (const spec of node.specifiers) {
          if (spec.type === "ImportSpecifier") {
            idToImportMap.set(spec.local.name, `${importId}.${spec.imported.name}`);
          } else if (spec.type === "ImportDefaultSpecifier") {
            idToImportMap.set(spec.local.name, `${importId}.default`);
          } else {
            idToImportMap.set(spec.local.name, importId);
          }
        }
        s.remove(node.start, node.end);
      }
    }
  }
  for (const node of ast) {
    if (node.type === "ExportNamedDeclaration") {
      if (node.declaration) {
        if (node.declaration.type === "FunctionDeclaration" || node.declaration.type === "ClassDeclaration") {
          defineExport(node.declaration.id.name);
        } else if (node.declaration.type === "VariableDeclaration") {
          for (const decl of node.declaration.declarations) {
            for (const id of extractIdentifiers(decl.id)) {
              defineExport(id.name);
            }
          }
        }
        s.remove(node.start, node.declaration.start);
      } else if (node.source) {
        const importId = defineImport(node, node.source.value);
        for (const spec of node.specifiers) {
          defineExport(spec.exported.name, `${importId}.${spec.local.name}`);
        }
        s.remove(node.start, node.end);
      } else {
        for (const spec of node.specifiers) {
          const local = spec.local.name;
          const binding = idToImportMap.get(local);
          defineExport(spec.exported.name, binding || local);
        }
        s.remove(node.start, node.end);
      }
    }
    if (node.type === "ExportDefaultDeclaration") {
      if ("id" in node.declaration && node.declaration.id) {
        const { name } = node.declaration.id;
        s.remove(node.start, node.start + 15);
        s.append(`
${exportKey}(${moduleKey}, "default", () => ${name})`);
      } else {
        s.overwrite(node.start, node.start + 14, `${moduleKey}.default =`);
      }
    }
    if (node.type === "ExportAllDeclaration") {
      const importId = defineImport(node, node.source.value);
      s.remove(node.start, node.end);
      s.append(`
for (const key in ${importId}) {
        if (key !== 'default') {
          ${exportKey}(${moduleKey}, key, () => ${importId}[key])
        }
      }`);
    }
  }
  for (const node of ast) {
    if (node.type === "ImportDeclaration")
      continue;
    walkIdentifiers(node, (id, parent, parentStack) => {
      const binding = idToImportMap.get(id.name);
      if (!binding) {
        return;
      }
      if (isStaticProperty(parent) && parent.shorthand) {
        if (!parent.inPattern || isInDestructureAssignment(parent, parentStack)) {
          s.appendLeft(id.end, `: ${binding}`);
        }
      } else if (parent.type === "ClassDeclaration" && id === parent.superClass) {
        if (!declaredConst.has(id.name)) {
          declaredConst.add(id.name);
          const topNode = parentStack[1];
          s.prependRight(topNode.start, `const ${id.name} = ${binding};
`);
        }
      } else {
        s.overwrite(id.start, id.end, binding);
      }
    });
  }
  walk(ast, {
    enter(node, parent) {
      if (node.type === "Import" && parent.type === "CallExpression") {
        const arg = parent.arguments[0];
        if (arg.type === "StringLiteral" && arg.value.startsWith("./")) {
          s.overwrite(node.start, node.start + 6, dynamicImportKey);
          s.overwrite(arg.start, arg.end, JSON.stringify(arg.value.replace(/^\.\/+/, "")));
        }
      }
    }
  });
  return [s.toString(), importedFiles];
}
const scriptRE = /<script\b(?:\s[^>]*>|>)([^]*?)<\/script>/gi;
const scriptModuleRE = /<script\b[^>]*type\s*=\s*(?:"module"|'module')[^>]*>([^]*?)<\/script>/gi;
function processHtmlFile(store, src, filename, processed, seen) {
  const deps = [];
  let jsCode = "";
  const html = src.replace(scriptModuleRE, (_, content) => {
    const [code, importedFiles] = processModule(store, content, filename);
    if (importedFiles.size) {
      for (const imported of importedFiles) {
        processFile(store, store.state.files[imported], deps, seen);
      }
    }
    jsCode += "\n" + code;
    return "";
  }).replace(scriptRE, (_, content) => {
    jsCode += "\n" + content;
    return "";
  });
  processed.push(`document.body.innerHTML = ${JSON.stringify(html)}`);
  processed.push(...deps);
  processed.push(jsCode);
}
var Preview_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    show: { type: Boolean, required: true }
  },
  setup(__props) {
    const store = inject("store");
    const clearConsole = inject("clear-console");
    const container = ref();
    const runtimeError = ref();
    const runtimeWarning = ref();
    let sandbox;
    let proxy;
    let stopUpdateWatcher;
    onMounted(createSandbox);
    watch(() => store.state.files["import-map.json"].code, (raw) => {
      try {
        const map = JSON.parse(raw);
        if (!map.imports) {
          store.state.errors = [`import-map.json is missing "imports" field.`];
          return;
        }
        createSandbox();
      } catch (e) {
        store.state.errors = [e];
        return;
      }
    });
    watch(() => store.state.vueRuntimeURL, createSandbox);
    onUnmounted(() => {
      proxy.destroy();
      stopUpdateWatcher && stopUpdateWatcher();
    });
    function createSandbox() {
      if (sandbox) {
        proxy.destroy();
        stopUpdateWatcher && stopUpdateWatcher();
        container.value.removeChild(sandbox);
      }
      sandbox = document.createElement("iframe");
      sandbox.setAttribute("sandbox", [
        "allow-forms",
        "allow-modals",
        "allow-pointer-lock",
        "allow-popups",
        "allow-same-origin",
        "allow-scripts",
        "allow-top-navigation-by-user-activation"
      ].join(" "));
      const importMap = store.getImportMap();
      if (!importMap.imports) {
        importMap.imports = {};
      }
      if (!importMap.imports.vue) {
        importMap.imports.vue = store.state.vueRuntimeURL;
      }
      const sandboxSrc = srcdoc.replace(/<!--IMPORT_MAP-->/, JSON.stringify(importMap));
      sandbox.srcdoc = sandboxSrc;
      container.value.appendChild(sandbox);
      proxy = new PreviewProxy(sandbox, {
        on_fetch_progress: (progress) => {
        },
        on_error: (event2) => {
          const msg = event2.value instanceof Error ? event2.value.message : event2.value;
          if (msg.includes("Failed to resolve module specifier") || msg.includes("Error resolving module specifier")) {
            runtimeError.value = msg.replace(/\. Relative references must.*$/, "") + `.
Tip: add an "import-map.json" file to specify import paths for dependencies.`;
          } else {
            runtimeError.value = event2.value;
          }
        },
        on_unhandled_rejection: (event2) => {
          let error = event2.value;
          if (typeof error === "string") {
            error = { message: error };
          }
          runtimeError.value = "Uncaught (in promise): " + error.message;
        },
        on_console: (log) => {
          if (log.duplicate) {
            return;
          }
          if (log.level === "error") {
            if (log.args[0] instanceof Error) {
              runtimeError.value = log.args[0].message;
            } else {
              runtimeError.value = log.args[0];
            }
          } else if (log.level === "warn") {
            if (log.args[0].toString().includes("[Vue warn]")) {
              runtimeWarning.value = log.args.join("").replace(/\[Vue warn\]:/, "").trim();
            }
          }
        },
        on_console_group: (action) => {
        },
        on_console_group_end: () => {
        },
        on_console_group_collapsed: (action) => {
        }
      });
      sandbox.addEventListener("load", () => {
        proxy.handle_links();
        stopUpdateWatcher = watchEffect(updatePreview);
      });
    }
    async function updatePreview() {
      if (clearConsole.value) {
        console.clear();
      }
      runtimeError.value = null;
      runtimeWarning.value = null;
      try {
        const modules = compileModulesForPreview(store);
        console.log(`[@vue/repl] successfully compiled ${modules.length} modules.`);
        const codeToEval = [
          `window.__modules__ = {};window.__css__ = '';if (window.__app__) window.__app__.unmount();document.body.innerHTML = '<div id="app"></div>'`,
          ...modules,
          `document.getElementById('__sfc-styles').innerHTML = window.__css__`
        ];
        const mainFile = store.state.mainFile;
        if (mainFile.endsWith(".vue")) {
          codeToEval.push(`import { createApp as _createApp } from "vue"
        const AppComponent = __modules__["${mainFile}"].default
        AppComponent.name = 'Repl'
        const app = window.__app__ = _createApp(AppComponent)
        app.config.unwrapInjectedRef = true
        app.config.errorHandler = e => console.error(e)
        app.mount('#app')`.trim());
        }
        await proxy.eval(codeToEval);
      } catch (e) {
        runtimeError.value = e.message;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        withDirectives(createElementVNode("div", {
          class: "iframe-container",
          ref: (_value, _refs) => {
            _refs["container"] = _value;
            container.value = _value;
          }
        }, null, 512), [
          [vShow, __props.show]
        ]),
        createVNode(Message, { err: runtimeError.value }, null, 8, ["err"]),
        !runtimeError.value ? (openBlock(), createBlock(Message, {
          key: 0,
          warn: runtimeWarning.value
        }, null, 8, ["warn"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var Preview = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fed14756"]]);
var Output_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = { class: "tab-buttons" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "output-container" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    showCompileOutput: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const store = inject("store");
    const modes = computed(() => props.showCompileOutput ? ["preview", "js", "css", "ssr"] : ["preview"]);
    const mode = ref(modes.value.includes(store.initialOutputMode) ? store.initialOutputMode : "preview");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", _hoisted_1$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(modes), (m) => {
            return openBlock(), createElementBlock("button", {
              class: normalizeClass({ active: mode.value === m }),
              onClick: ($event) => mode.value = m
            }, [
              createElementVNode("span", null, toDisplayString(m), 1)
            ], 10, _hoisted_2);
          }), 256))
        ]),
        createElementVNode("div", _hoisted_3, [
          createVNode(Preview, {
            show: mode.value === "preview"
          }, null, 8, ["show"]),
          mode.value !== "preview" ? (openBlock(), createBlock(_sfc_main$5, {
            key: 0,
            readonly: "",
            mode: mode.value === "css" ? "css" : "javascript",
            value: unref(store).state.activeFile.compiled[mode.value]
          }, null, 8, ["mode", "value"])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
var Output = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-79065b94"]]);
var ContextualKeyword;
(function(ContextualKeyword2) {
  const NONE = 0;
  ContextualKeyword2[ContextualKeyword2["NONE"] = NONE] = "NONE";
  const _abstract = NONE + 1;
  ContextualKeyword2[ContextualKeyword2["_abstract"] = _abstract] = "_abstract";
  const _as = _abstract + 1;
  ContextualKeyword2[ContextualKeyword2["_as"] = _as] = "_as";
  const _asserts = _as + 1;
  ContextualKeyword2[ContextualKeyword2["_asserts"] = _asserts] = "_asserts";
  const _async = _asserts + 1;
  ContextualKeyword2[ContextualKeyword2["_async"] = _async] = "_async";
  const _await = _async + 1;
  ContextualKeyword2[ContextualKeyword2["_await"] = _await] = "_await";
  const _checks = _await + 1;
  ContextualKeyword2[ContextualKeyword2["_checks"] = _checks] = "_checks";
  const _constructor = _checks + 1;
  ContextualKeyword2[ContextualKeyword2["_constructor"] = _constructor] = "_constructor";
  const _declare = _constructor + 1;
  ContextualKeyword2[ContextualKeyword2["_declare"] = _declare] = "_declare";
  const _enum = _declare + 1;
  ContextualKeyword2[ContextualKeyword2["_enum"] = _enum] = "_enum";
  const _exports = _enum + 1;
  ContextualKeyword2[ContextualKeyword2["_exports"] = _exports] = "_exports";
  const _from = _exports + 1;
  ContextualKeyword2[ContextualKeyword2["_from"] = _from] = "_from";
  const _get = _from + 1;
  ContextualKeyword2[ContextualKeyword2["_get"] = _get] = "_get";
  const _global = _get + 1;
  ContextualKeyword2[ContextualKeyword2["_global"] = _global] = "_global";
  const _implements = _global + 1;
  ContextualKeyword2[ContextualKeyword2["_implements"] = _implements] = "_implements";
  const _infer = _implements + 1;
  ContextualKeyword2[ContextualKeyword2["_infer"] = _infer] = "_infer";
  const _interface = _infer + 1;
  ContextualKeyword2[ContextualKeyword2["_interface"] = _interface] = "_interface";
  const _is = _interface + 1;
  ContextualKeyword2[ContextualKeyword2["_is"] = _is] = "_is";
  const _keyof = _is + 1;
  ContextualKeyword2[ContextualKeyword2["_keyof"] = _keyof] = "_keyof";
  const _mixins = _keyof + 1;
  ContextualKeyword2[ContextualKeyword2["_mixins"] = _mixins] = "_mixins";
  const _module = _mixins + 1;
  ContextualKeyword2[ContextualKeyword2["_module"] = _module] = "_module";
  const _namespace = _module + 1;
  ContextualKeyword2[ContextualKeyword2["_namespace"] = _namespace] = "_namespace";
  const _of = _namespace + 1;
  ContextualKeyword2[ContextualKeyword2["_of"] = _of] = "_of";
  const _opaque = _of + 1;
  ContextualKeyword2[ContextualKeyword2["_opaque"] = _opaque] = "_opaque";
  const _override = _opaque + 1;
  ContextualKeyword2[ContextualKeyword2["_override"] = _override] = "_override";
  const _private = _override + 1;
  ContextualKeyword2[ContextualKeyword2["_private"] = _private] = "_private";
  const _protected = _private + 1;
  ContextualKeyword2[ContextualKeyword2["_protected"] = _protected] = "_protected";
  const _proto = _protected + 1;
  ContextualKeyword2[ContextualKeyword2["_proto"] = _proto] = "_proto";
  const _public = _proto + 1;
  ContextualKeyword2[ContextualKeyword2["_public"] = _public] = "_public";
  const _readonly = _public + 1;
  ContextualKeyword2[ContextualKeyword2["_readonly"] = _readonly] = "_readonly";
  const _require = _readonly + 1;
  ContextualKeyword2[ContextualKeyword2["_require"] = _require] = "_require";
  const _set = _require + 1;
  ContextualKeyword2[ContextualKeyword2["_set"] = _set] = "_set";
  const _static = _set + 1;
  ContextualKeyword2[ContextualKeyword2["_static"] = _static] = "_static";
  const _type = _static + 1;
  ContextualKeyword2[ContextualKeyword2["_type"] = _type] = "_type";
  const _unique = _type + 1;
  ContextualKeyword2[ContextualKeyword2["_unique"] = _unique] = "_unique";
})(ContextualKeyword || (ContextualKeyword = {}));
var TokenType;
(function(TokenType2) {
  const PRECEDENCE_MASK = 15;
  TokenType2[TokenType2["PRECEDENCE_MASK"] = PRECEDENCE_MASK] = "PRECEDENCE_MASK";
  const IS_KEYWORD = 1 << 4;
  TokenType2[TokenType2["IS_KEYWORD"] = IS_KEYWORD] = "IS_KEYWORD";
  const IS_ASSIGN = 1 << 5;
  TokenType2[TokenType2["IS_ASSIGN"] = IS_ASSIGN] = "IS_ASSIGN";
  const IS_RIGHT_ASSOCIATIVE = 1 << 6;
  TokenType2[TokenType2["IS_RIGHT_ASSOCIATIVE"] = IS_RIGHT_ASSOCIATIVE] = "IS_RIGHT_ASSOCIATIVE";
  const IS_PREFIX = 1 << 7;
  TokenType2[TokenType2["IS_PREFIX"] = IS_PREFIX] = "IS_PREFIX";
  const IS_POSTFIX = 1 << 8;
  TokenType2[TokenType2["IS_POSTFIX"] = IS_POSTFIX] = "IS_POSTFIX";
  const num = 0;
  TokenType2[TokenType2["num"] = num] = "num";
  const bigint = 512;
  TokenType2[TokenType2["bigint"] = bigint] = "bigint";
  const decimal = 1024;
  TokenType2[TokenType2["decimal"] = decimal] = "decimal";
  const regexp = 1536;
  TokenType2[TokenType2["regexp"] = regexp] = "regexp";
  const string = 2048;
  TokenType2[TokenType2["string"] = string] = "string";
  const name = 2560;
  TokenType2[TokenType2["name"] = name] = "name";
  const eof = 3072;
  TokenType2[TokenType2["eof"] = eof] = "eof";
  const bracketL = 3584;
  TokenType2[TokenType2["bracketL"] = bracketL] = "bracketL";
  const bracketR = 4096;
  TokenType2[TokenType2["bracketR"] = bracketR] = "bracketR";
  const braceL = 4608;
  TokenType2[TokenType2["braceL"] = braceL] = "braceL";
  const braceBarL = 5120;
  TokenType2[TokenType2["braceBarL"] = braceBarL] = "braceBarL";
  const braceR = 5632;
  TokenType2[TokenType2["braceR"] = braceR] = "braceR";
  const braceBarR = 6144;
  TokenType2[TokenType2["braceBarR"] = braceBarR] = "braceBarR";
  const parenL = 6656;
  TokenType2[TokenType2["parenL"] = parenL] = "parenL";
  const parenR = 7168;
  TokenType2[TokenType2["parenR"] = parenR] = "parenR";
  const comma = 7680;
  TokenType2[TokenType2["comma"] = comma] = "comma";
  const semi = 8192;
  TokenType2[TokenType2["semi"] = semi] = "semi";
  const colon = 8704;
  TokenType2[TokenType2["colon"] = colon] = "colon";
  const doubleColon = 9216;
  TokenType2[TokenType2["doubleColon"] = doubleColon] = "doubleColon";
  const dot = 9728;
  TokenType2[TokenType2["dot"] = dot] = "dot";
  const question = 10240;
  TokenType2[TokenType2["question"] = question] = "question";
  const questionDot = 10752;
  TokenType2[TokenType2["questionDot"] = questionDot] = "questionDot";
  const arrow = 11264;
  TokenType2[TokenType2["arrow"] = arrow] = "arrow";
  const template = 11776;
  TokenType2[TokenType2["template"] = template] = "template";
  const ellipsis = 12288;
  TokenType2[TokenType2["ellipsis"] = ellipsis] = "ellipsis";
  const backQuote = 12800;
  TokenType2[TokenType2["backQuote"] = backQuote] = "backQuote";
  const dollarBraceL = 13312;
  TokenType2[TokenType2["dollarBraceL"] = dollarBraceL] = "dollarBraceL";
  const at = 13824;
  TokenType2[TokenType2["at"] = at] = "at";
  const hash = 14336;
  TokenType2[TokenType2["hash"] = hash] = "hash";
  const eq = 14880;
  TokenType2[TokenType2["eq"] = eq] = "eq";
  const assign = 15392;
  TokenType2[TokenType2["assign"] = assign] = "assign";
  const preIncDec = 16256;
  TokenType2[TokenType2["preIncDec"] = preIncDec] = "preIncDec";
  const postIncDec = 16768;
  TokenType2[TokenType2["postIncDec"] = postIncDec] = "postIncDec";
  const bang = 17024;
  TokenType2[TokenType2["bang"] = bang] = "bang";
  const tilde = 17536;
  TokenType2[TokenType2["tilde"] = tilde] = "tilde";
  const pipeline = 17921;
  TokenType2[TokenType2["pipeline"] = pipeline] = "pipeline";
  const nullishCoalescing = 18434;
  TokenType2[TokenType2["nullishCoalescing"] = nullishCoalescing] = "nullishCoalescing";
  const logicalOR = 18946;
  TokenType2[TokenType2["logicalOR"] = logicalOR] = "logicalOR";
  const logicalAND = 19459;
  TokenType2[TokenType2["logicalAND"] = logicalAND] = "logicalAND";
  const bitwiseOR = 19972;
  TokenType2[TokenType2["bitwiseOR"] = bitwiseOR] = "bitwiseOR";
  const bitwiseXOR = 20485;
  TokenType2[TokenType2["bitwiseXOR"] = bitwiseXOR] = "bitwiseXOR";
  const bitwiseAND = 20998;
  TokenType2[TokenType2["bitwiseAND"] = bitwiseAND] = "bitwiseAND";
  const equality = 21511;
  TokenType2[TokenType2["equality"] = equality] = "equality";
  const lessThan = 22024;
  TokenType2[TokenType2["lessThan"] = lessThan] = "lessThan";
  const greaterThan = 22536;
  TokenType2[TokenType2["greaterThan"] = greaterThan] = "greaterThan";
  const relationalOrEqual = 23048;
  TokenType2[TokenType2["relationalOrEqual"] = relationalOrEqual] = "relationalOrEqual";
  const bitShift = 23561;
  TokenType2[TokenType2["bitShift"] = bitShift] = "bitShift";
  const plus = 24202;
  TokenType2[TokenType2["plus"] = plus] = "plus";
  const minus = 24714;
  TokenType2[TokenType2["minus"] = minus] = "minus";
  const modulo = 25099;
  TokenType2[TokenType2["modulo"] = modulo] = "modulo";
  const star = 25611;
  TokenType2[TokenType2["star"] = star] = "star";
  const slash = 26123;
  TokenType2[TokenType2["slash"] = slash] = "slash";
  const exponent = 26700;
  TokenType2[TokenType2["exponent"] = exponent] = "exponent";
  const jsxName = 27136;
  TokenType2[TokenType2["jsxName"] = jsxName] = "jsxName";
  const jsxText = 27648;
  TokenType2[TokenType2["jsxText"] = jsxText] = "jsxText";
  const jsxTagStart = 28160;
  TokenType2[TokenType2["jsxTagStart"] = jsxTagStart] = "jsxTagStart";
  const jsxTagEnd = 28672;
  TokenType2[TokenType2["jsxTagEnd"] = jsxTagEnd] = "jsxTagEnd";
  const typeParameterStart = 29184;
  TokenType2[TokenType2["typeParameterStart"] = typeParameterStart] = "typeParameterStart";
  const nonNullAssertion = 29696;
  TokenType2[TokenType2["nonNullAssertion"] = nonNullAssertion] = "nonNullAssertion";
  const _break = 30224;
  TokenType2[TokenType2["_break"] = _break] = "_break";
  const _case = 30736;
  TokenType2[TokenType2["_case"] = _case] = "_case";
  const _catch = 31248;
  TokenType2[TokenType2["_catch"] = _catch] = "_catch";
  const _continue = 31760;
  TokenType2[TokenType2["_continue"] = _continue] = "_continue";
  const _debugger = 32272;
  TokenType2[TokenType2["_debugger"] = _debugger] = "_debugger";
  const _default = 32784;
  TokenType2[TokenType2["_default"] = _default] = "_default";
  const _do = 33296;
  TokenType2[TokenType2["_do"] = _do] = "_do";
  const _else = 33808;
  TokenType2[TokenType2["_else"] = _else] = "_else";
  const _finally = 34320;
  TokenType2[TokenType2["_finally"] = _finally] = "_finally";
  const _for = 34832;
  TokenType2[TokenType2["_for"] = _for] = "_for";
  const _function = 35344;
  TokenType2[TokenType2["_function"] = _function] = "_function";
  const _if = 35856;
  TokenType2[TokenType2["_if"] = _if] = "_if";
  const _return = 36368;
  TokenType2[TokenType2["_return"] = _return] = "_return";
  const _switch = 36880;
  TokenType2[TokenType2["_switch"] = _switch] = "_switch";
  const _throw = 37520;
  TokenType2[TokenType2["_throw"] = _throw] = "_throw";
  const _try = 37904;
  TokenType2[TokenType2["_try"] = _try] = "_try";
  const _var = 38416;
  TokenType2[TokenType2["_var"] = _var] = "_var";
  const _let = 38928;
  TokenType2[TokenType2["_let"] = _let] = "_let";
  const _const = 39440;
  TokenType2[TokenType2["_const"] = _const] = "_const";
  const _while = 39952;
  TokenType2[TokenType2["_while"] = _while] = "_while";
  const _with = 40464;
  TokenType2[TokenType2["_with"] = _with] = "_with";
  const _new = 40976;
  TokenType2[TokenType2["_new"] = _new] = "_new";
  const _this = 41488;
  TokenType2[TokenType2["_this"] = _this] = "_this";
  const _super = 42e3;
  TokenType2[TokenType2["_super"] = _super] = "_super";
  const _class = 42512;
  TokenType2[TokenType2["_class"] = _class] = "_class";
  const _extends = 43024;
  TokenType2[TokenType2["_extends"] = _extends] = "_extends";
  const _export = 43536;
  TokenType2[TokenType2["_export"] = _export] = "_export";
  const _import = 44048;
  TokenType2[TokenType2["_import"] = _import] = "_import";
  const _yield = 44560;
  TokenType2[TokenType2["_yield"] = _yield] = "_yield";
  const _null = 45072;
  TokenType2[TokenType2["_null"] = _null] = "_null";
  const _true = 45584;
  TokenType2[TokenType2["_true"] = _true] = "_true";
  const _false = 46096;
  TokenType2[TokenType2["_false"] = _false] = "_false";
  const _in = 46616;
  TokenType2[TokenType2["_in"] = _in] = "_in";
  const _instanceof = 47128;
  TokenType2[TokenType2["_instanceof"] = _instanceof] = "_instanceof";
  const _typeof = 47760;
  TokenType2[TokenType2["_typeof"] = _typeof] = "_typeof";
  const _void = 48272;
  TokenType2[TokenType2["_void"] = _void] = "_void";
  const _delete = 48784;
  TokenType2[TokenType2["_delete"] = _delete] = "_delete";
  const _async = 49168;
  TokenType2[TokenType2["_async"] = _async] = "_async";
  const _get = 49680;
  TokenType2[TokenType2["_get"] = _get] = "_get";
  const _set = 50192;
  TokenType2[TokenType2["_set"] = _set] = "_set";
  const _declare = 50704;
  TokenType2[TokenType2["_declare"] = _declare] = "_declare";
  const _readonly = 51216;
  TokenType2[TokenType2["_readonly"] = _readonly] = "_readonly";
  const _abstract = 51728;
  TokenType2[TokenType2["_abstract"] = _abstract] = "_abstract";
  const _static = 52240;
  TokenType2[TokenType2["_static"] = _static] = "_static";
  const _public = 52752;
  TokenType2[TokenType2["_public"] = _public] = "_public";
  const _private = 53264;
  TokenType2[TokenType2["_private"] = _private] = "_private";
  const _protected = 53776;
  TokenType2[TokenType2["_protected"] = _protected] = "_protected";
  const _override = 54288;
  TokenType2[TokenType2["_override"] = _override] = "_override";
  const _as = 54800;
  TokenType2[TokenType2["_as"] = _as] = "_as";
  const _enum = 55312;
  TokenType2[TokenType2["_enum"] = _enum] = "_enum";
  const _type = 55824;
  TokenType2[TokenType2["_type"] = _type] = "_type";
  const _implements = 56336;
  TokenType2[TokenType2["_implements"] = _implements] = "_implements";
})(TokenType || (TokenType = {}));
function formatTokenType(tokenType) {
  switch (tokenType) {
    case TokenType.num:
      return "num";
    case TokenType.bigint:
      return "bigint";
    case TokenType.decimal:
      return "decimal";
    case TokenType.regexp:
      return "regexp";
    case TokenType.string:
      return "string";
    case TokenType.name:
      return "name";
    case TokenType.eof:
      return "eof";
    case TokenType.bracketL:
      return "[";
    case TokenType.bracketR:
      return "]";
    case TokenType.braceL:
      return "{";
    case TokenType.braceBarL:
      return "{|";
    case TokenType.braceR:
      return "}";
    case TokenType.braceBarR:
      return "|}";
    case TokenType.parenL:
      return "(";
    case TokenType.parenR:
      return ")";
    case TokenType.comma:
      return ",";
    case TokenType.semi:
      return ";";
    case TokenType.colon:
      return ":";
    case TokenType.doubleColon:
      return "::";
    case TokenType.dot:
      return ".";
    case TokenType.question:
      return "?";
    case TokenType.questionDot:
      return "?.";
    case TokenType.arrow:
      return "=>";
    case TokenType.template:
      return "template";
    case TokenType.ellipsis:
      return "...";
    case TokenType.backQuote:
      return "`";
    case TokenType.dollarBraceL:
      return "${";
    case TokenType.at:
      return "@";
    case TokenType.hash:
      return "#";
    case TokenType.eq:
      return "=";
    case TokenType.assign:
      return "_=";
    case TokenType.preIncDec:
      return "++/--";
    case TokenType.postIncDec:
      return "++/--";
    case TokenType.bang:
      return "!";
    case TokenType.tilde:
      return "~";
    case TokenType.pipeline:
      return "|>";
    case TokenType.nullishCoalescing:
      return "??";
    case TokenType.logicalOR:
      return "||";
    case TokenType.logicalAND:
      return "&&";
    case TokenType.bitwiseOR:
      return "|";
    case TokenType.bitwiseXOR:
      return "^";
    case TokenType.bitwiseAND:
      return "&";
    case TokenType.equality:
      return "==/!=";
    case TokenType.lessThan:
      return "<";
    case TokenType.greaterThan:
      return ">";
    case TokenType.relationalOrEqual:
      return "<=/>=";
    case TokenType.bitShift:
      return "<</>>";
    case TokenType.plus:
      return "+";
    case TokenType.minus:
      return "-";
    case TokenType.modulo:
      return "%";
    case TokenType.star:
      return "*";
    case TokenType.slash:
      return "/";
    case TokenType.exponent:
      return "**";
    case TokenType.jsxName:
      return "jsxName";
    case TokenType.jsxText:
      return "jsxText";
    case TokenType.jsxTagStart:
      return "jsxTagStart";
    case TokenType.jsxTagEnd:
      return "jsxTagEnd";
    case TokenType.typeParameterStart:
      return "typeParameterStart";
    case TokenType.nonNullAssertion:
      return "nonNullAssertion";
    case TokenType._break:
      return "break";
    case TokenType._case:
      return "case";
    case TokenType._catch:
      return "catch";
    case TokenType._continue:
      return "continue";
    case TokenType._debugger:
      return "debugger";
    case TokenType._default:
      return "default";
    case TokenType._do:
      return "do";
    case TokenType._else:
      return "else";
    case TokenType._finally:
      return "finally";
    case TokenType._for:
      return "for";
    case TokenType._function:
      return "function";
    case TokenType._if:
      return "if";
    case TokenType._return:
      return "return";
    case TokenType._switch:
      return "switch";
    case TokenType._throw:
      return "throw";
    case TokenType._try:
      return "try";
    case TokenType._var:
      return "var";
    case TokenType._let:
      return "let";
    case TokenType._const:
      return "const";
    case TokenType._while:
      return "while";
    case TokenType._with:
      return "with";
    case TokenType._new:
      return "new";
    case TokenType._this:
      return "this";
    case TokenType._super:
      return "super";
    case TokenType._class:
      return "class";
    case TokenType._extends:
      return "extends";
    case TokenType._export:
      return "export";
    case TokenType._import:
      return "import";
    case TokenType._yield:
      return "yield";
    case TokenType._null:
      return "null";
    case TokenType._true:
      return "true";
    case TokenType._false:
      return "false";
    case TokenType._in:
      return "in";
    case TokenType._instanceof:
      return "instanceof";
    case TokenType._typeof:
      return "typeof";
    case TokenType._void:
      return "void";
    case TokenType._delete:
      return "delete";
    case TokenType._async:
      return "async";
    case TokenType._get:
      return "get";
    case TokenType._set:
      return "set";
    case TokenType._declare:
      return "declare";
    case TokenType._readonly:
      return "readonly";
    case TokenType._abstract:
      return "abstract";
    case TokenType._static:
      return "static";
    case TokenType._public:
      return "public";
    case TokenType._private:
      return "private";
    case TokenType._protected:
      return "protected";
    case TokenType._override:
      return "override";
    case TokenType._as:
      return "as";
    case TokenType._enum:
      return "enum";
    case TokenType._type:
      return "type";
    case TokenType._implements:
      return "implements";
    default:
      return "";
  }
}
class Scope {
  constructor(startTokenIndex, endTokenIndex, isFunctionScope) {
    this.startTokenIndex = startTokenIndex;
    this.endTokenIndex = endTokenIndex;
    this.isFunctionScope = isFunctionScope;
  }
}
class StateSnapshot {
  constructor(potentialArrowAt, noAnonFunctionType, tokensLength, scopesLength, pos, type, contextualKeyword, start, end, isType, scopeDepth, error) {
    this.potentialArrowAt = potentialArrowAt;
    this.noAnonFunctionType = noAnonFunctionType;
    this.tokensLength = tokensLength;
    this.scopesLength = scopesLength;
    this.pos = pos;
    this.type = type;
    this.contextualKeyword = contextualKeyword;
    this.start = start;
    this.end = end;
    this.isType = isType;
    this.scopeDepth = scopeDepth;
    this.error = error;
  }
}
class State {
  constructor() {
    State.prototype.__init.call(this);
    State.prototype.__init2.call(this);
    State.prototype.__init3.call(this);
    State.prototype.__init4.call(this);
    State.prototype.__init5.call(this);
    State.prototype.__init6.call(this);
    State.prototype.__init7.call(this);
    State.prototype.__init8.call(this);
    State.prototype.__init9.call(this);
    State.prototype.__init10.call(this);
    State.prototype.__init11.call(this);
    State.prototype.__init12.call(this);
  }
  __init() {
    this.potentialArrowAt = -1;
  }
  __init2() {
    this.noAnonFunctionType = false;
  }
  __init3() {
    this.tokens = [];
  }
  __init4() {
    this.scopes = [];
  }
  __init5() {
    this.pos = 0;
  }
  __init6() {
    this.type = TokenType.eof;
  }
  __init7() {
    this.contextualKeyword = ContextualKeyword.NONE;
  }
  __init8() {
    this.start = 0;
  }
  __init9() {
    this.end = 0;
  }
  __init10() {
    this.isType = false;
  }
  __init11() {
    this.scopeDepth = 0;
  }
  __init12() {
    this.error = null;
  }
  snapshot() {
    return new StateSnapshot(this.potentialArrowAt, this.noAnonFunctionType, this.tokens.length, this.scopes.length, this.pos, this.type, this.contextualKeyword, this.start, this.end, this.isType, this.scopeDepth, this.error);
  }
  restoreFromSnapshot(snapshot) {
    this.potentialArrowAt = snapshot.potentialArrowAt;
    this.noAnonFunctionType = snapshot.noAnonFunctionType;
    this.tokens.length = snapshot.tokensLength;
    this.scopes.length = snapshot.scopesLength;
    this.pos = snapshot.pos;
    this.type = snapshot.type;
    this.contextualKeyword = snapshot.contextualKeyword;
    this.start = snapshot.start;
    this.end = snapshot.end;
    this.isType = snapshot.isType;
    this.scopeDepth = snapshot.scopeDepth;
    this.error = snapshot.error;
  }
}
var charCodes;
(function(charCodes2) {
  const backSpace = 8;
  charCodes2[charCodes2["backSpace"] = backSpace] = "backSpace";
  const lineFeed = 10;
  charCodes2[charCodes2["lineFeed"] = lineFeed] = "lineFeed";
  const carriageReturn = 13;
  charCodes2[charCodes2["carriageReturn"] = carriageReturn] = "carriageReturn";
  const shiftOut = 14;
  charCodes2[charCodes2["shiftOut"] = shiftOut] = "shiftOut";
  const space = 32;
  charCodes2[charCodes2["space"] = space] = "space";
  const exclamationMark = 33;
  charCodes2[charCodes2["exclamationMark"] = exclamationMark] = "exclamationMark";
  const quotationMark = 34;
  charCodes2[charCodes2["quotationMark"] = quotationMark] = "quotationMark";
  const numberSign = 35;
  charCodes2[charCodes2["numberSign"] = numberSign] = "numberSign";
  const dollarSign = 36;
  charCodes2[charCodes2["dollarSign"] = dollarSign] = "dollarSign";
  const percentSign = 37;
  charCodes2[charCodes2["percentSign"] = percentSign] = "percentSign";
  const ampersand = 38;
  charCodes2[charCodes2["ampersand"] = ampersand] = "ampersand";
  const apostrophe = 39;
  charCodes2[charCodes2["apostrophe"] = apostrophe] = "apostrophe";
  const leftParenthesis = 40;
  charCodes2[charCodes2["leftParenthesis"] = leftParenthesis] = "leftParenthesis";
  const rightParenthesis = 41;
  charCodes2[charCodes2["rightParenthesis"] = rightParenthesis] = "rightParenthesis";
  const asterisk = 42;
  charCodes2[charCodes2["asterisk"] = asterisk] = "asterisk";
  const plusSign = 43;
  charCodes2[charCodes2["plusSign"] = plusSign] = "plusSign";
  const comma = 44;
  charCodes2[charCodes2["comma"] = comma] = "comma";
  const dash = 45;
  charCodes2[charCodes2["dash"] = dash] = "dash";
  const dot = 46;
  charCodes2[charCodes2["dot"] = dot] = "dot";
  const slash = 47;
  charCodes2[charCodes2["slash"] = slash] = "slash";
  const digit0 = 48;
  charCodes2[charCodes2["digit0"] = digit0] = "digit0";
  const digit1 = 49;
  charCodes2[charCodes2["digit1"] = digit1] = "digit1";
  const digit2 = 50;
  charCodes2[charCodes2["digit2"] = digit2] = "digit2";
  const digit3 = 51;
  charCodes2[charCodes2["digit3"] = digit3] = "digit3";
  const digit4 = 52;
  charCodes2[charCodes2["digit4"] = digit4] = "digit4";
  const digit5 = 53;
  charCodes2[charCodes2["digit5"] = digit5] = "digit5";
  const digit6 = 54;
  charCodes2[charCodes2["digit6"] = digit6] = "digit6";
  const digit7 = 55;
  charCodes2[charCodes2["digit7"] = digit7] = "digit7";
  const digit8 = 56;
  charCodes2[charCodes2["digit8"] = digit8] = "digit8";
  const digit9 = 57;
  charCodes2[charCodes2["digit9"] = digit9] = "digit9";
  const colon = 58;
  charCodes2[charCodes2["colon"] = colon] = "colon";
  const semicolon2 = 59;
  charCodes2[charCodes2["semicolon"] = semicolon2] = "semicolon";
  const lessThan = 60;
  charCodes2[charCodes2["lessThan"] = lessThan] = "lessThan";
  const equalsTo = 61;
  charCodes2[charCodes2["equalsTo"] = equalsTo] = "equalsTo";
  const greaterThan = 62;
  charCodes2[charCodes2["greaterThan"] = greaterThan] = "greaterThan";
  const questionMark = 63;
  charCodes2[charCodes2["questionMark"] = questionMark] = "questionMark";
  const atSign = 64;
  charCodes2[charCodes2["atSign"] = atSign] = "atSign";
  const uppercaseA = 65;
  charCodes2[charCodes2["uppercaseA"] = uppercaseA] = "uppercaseA";
  const uppercaseB = 66;
  charCodes2[charCodes2["uppercaseB"] = uppercaseB] = "uppercaseB";
  const uppercaseC = 67;
  charCodes2[charCodes2["uppercaseC"] = uppercaseC] = "uppercaseC";
  const uppercaseD = 68;
  charCodes2[charCodes2["uppercaseD"] = uppercaseD] = "uppercaseD";
  const uppercaseE = 69;
  charCodes2[charCodes2["uppercaseE"] = uppercaseE] = "uppercaseE";
  const uppercaseF = 70;
  charCodes2[charCodes2["uppercaseF"] = uppercaseF] = "uppercaseF";
  const uppercaseG = 71;
  charCodes2[charCodes2["uppercaseG"] = uppercaseG] = "uppercaseG";
  const uppercaseH = 72;
  charCodes2[charCodes2["uppercaseH"] = uppercaseH] = "uppercaseH";
  const uppercaseI = 73;
  charCodes2[charCodes2["uppercaseI"] = uppercaseI] = "uppercaseI";
  const uppercaseJ = 74;
  charCodes2[charCodes2["uppercaseJ"] = uppercaseJ] = "uppercaseJ";
  const uppercaseK = 75;
  charCodes2[charCodes2["uppercaseK"] = uppercaseK] = "uppercaseK";
  const uppercaseL = 76;
  charCodes2[charCodes2["uppercaseL"] = uppercaseL] = "uppercaseL";
  const uppercaseM = 77;
  charCodes2[charCodes2["uppercaseM"] = uppercaseM] = "uppercaseM";
  const uppercaseN = 78;
  charCodes2[charCodes2["uppercaseN"] = uppercaseN] = "uppercaseN";
  const uppercaseO = 79;
  charCodes2[charCodes2["uppercaseO"] = uppercaseO] = "uppercaseO";
  const uppercaseP = 80;
  charCodes2[charCodes2["uppercaseP"] = uppercaseP] = "uppercaseP";
  const uppercaseQ = 81;
  charCodes2[charCodes2["uppercaseQ"] = uppercaseQ] = "uppercaseQ";
  const uppercaseR = 82;
  charCodes2[charCodes2["uppercaseR"] = uppercaseR] = "uppercaseR";
  const uppercaseS = 83;
  charCodes2[charCodes2["uppercaseS"] = uppercaseS] = "uppercaseS";
  const uppercaseT = 84;
  charCodes2[charCodes2["uppercaseT"] = uppercaseT] = "uppercaseT";
  const uppercaseU = 85;
  charCodes2[charCodes2["uppercaseU"] = uppercaseU] = "uppercaseU";
  const uppercaseV = 86;
  charCodes2[charCodes2["uppercaseV"] = uppercaseV] = "uppercaseV";
  const uppercaseW = 87;
  charCodes2[charCodes2["uppercaseW"] = uppercaseW] = "uppercaseW";
  const uppercaseX = 88;
  charCodes2[charCodes2["uppercaseX"] = uppercaseX] = "uppercaseX";
  const uppercaseY = 89;
  charCodes2[charCodes2["uppercaseY"] = uppercaseY] = "uppercaseY";
  const uppercaseZ = 90;
  charCodes2[charCodes2["uppercaseZ"] = uppercaseZ] = "uppercaseZ";
  const leftSquareBracket = 91;
  charCodes2[charCodes2["leftSquareBracket"] = leftSquareBracket] = "leftSquareBracket";
  const backslash = 92;
  charCodes2[charCodes2["backslash"] = backslash] = "backslash";
  const rightSquareBracket = 93;
  charCodes2[charCodes2["rightSquareBracket"] = rightSquareBracket] = "rightSquareBracket";
  const caret = 94;
  charCodes2[charCodes2["caret"] = caret] = "caret";
  const underscore = 95;
  charCodes2[charCodes2["underscore"] = underscore] = "underscore";
  const graveAccent = 96;
  charCodes2[charCodes2["graveAccent"] = graveAccent] = "graveAccent";
  const lowercaseA = 97;
  charCodes2[charCodes2["lowercaseA"] = lowercaseA] = "lowercaseA";
  const lowercaseB = 98;
  charCodes2[charCodes2["lowercaseB"] = lowercaseB] = "lowercaseB";
  const lowercaseC = 99;
  charCodes2[charCodes2["lowercaseC"] = lowercaseC] = "lowercaseC";
  const lowercaseD = 100;
  charCodes2[charCodes2["lowercaseD"] = lowercaseD] = "lowercaseD";
  const lowercaseE = 101;
  charCodes2[charCodes2["lowercaseE"] = lowercaseE] = "lowercaseE";
  const lowercaseF = 102;
  charCodes2[charCodes2["lowercaseF"] = lowercaseF] = "lowercaseF";
  const lowercaseG = 103;
  charCodes2[charCodes2["lowercaseG"] = lowercaseG] = "lowercaseG";
  const lowercaseH = 104;
  charCodes2[charCodes2["lowercaseH"] = lowercaseH] = "lowercaseH";
  const lowercaseI = 105;
  charCodes2[charCodes2["lowercaseI"] = lowercaseI] = "lowercaseI";
  const lowercaseJ = 106;
  charCodes2[charCodes2["lowercaseJ"] = lowercaseJ] = "lowercaseJ";
  const lowercaseK = 107;
  charCodes2[charCodes2["lowercaseK"] = lowercaseK] = "lowercaseK";
  const lowercaseL = 108;
  charCodes2[charCodes2["lowercaseL"] = lowercaseL] = "lowercaseL";
  const lowercaseM = 109;
  charCodes2[charCodes2["lowercaseM"] = lowercaseM] = "lowercaseM";
  const lowercaseN = 110;
  charCodes2[charCodes2["lowercaseN"] = lowercaseN] = "lowercaseN";
  const lowercaseO = 111;
  charCodes2[charCodes2["lowercaseO"] = lowercaseO] = "lowercaseO";
  const lowercaseP = 112;
  charCodes2[charCodes2["lowercaseP"] = lowercaseP] = "lowercaseP";
  const lowercaseQ = 113;
  charCodes2[charCodes2["lowercaseQ"] = lowercaseQ] = "lowercaseQ";
  const lowercaseR = 114;
  charCodes2[charCodes2["lowercaseR"] = lowercaseR] = "lowercaseR";
  const lowercaseS = 115;
  charCodes2[charCodes2["lowercaseS"] = lowercaseS] = "lowercaseS";
  const lowercaseT = 116;
  charCodes2[charCodes2["lowercaseT"] = lowercaseT] = "lowercaseT";
  const lowercaseU = 117;
  charCodes2[charCodes2["lowercaseU"] = lowercaseU] = "lowercaseU";
  const lowercaseV = 118;
  charCodes2[charCodes2["lowercaseV"] = lowercaseV] = "lowercaseV";
  const lowercaseW = 119;
  charCodes2[charCodes2["lowercaseW"] = lowercaseW] = "lowercaseW";
  const lowercaseX = 120;
  charCodes2[charCodes2["lowercaseX"] = lowercaseX] = "lowercaseX";
  const lowercaseY = 121;
  charCodes2[charCodes2["lowercaseY"] = lowercaseY] = "lowercaseY";
  const lowercaseZ = 122;
  charCodes2[charCodes2["lowercaseZ"] = lowercaseZ] = "lowercaseZ";
  const leftCurlyBrace = 123;
  charCodes2[charCodes2["leftCurlyBrace"] = leftCurlyBrace] = "leftCurlyBrace";
  const verticalBar = 124;
  charCodes2[charCodes2["verticalBar"] = verticalBar] = "verticalBar";
  const rightCurlyBrace = 125;
  charCodes2[charCodes2["rightCurlyBrace"] = rightCurlyBrace] = "rightCurlyBrace";
  const tilde = 126;
  charCodes2[charCodes2["tilde"] = tilde] = "tilde";
  const nonBreakingSpace = 160;
  charCodes2[charCodes2["nonBreakingSpace"] = nonBreakingSpace] = "nonBreakingSpace";
  const oghamSpaceMark = 5760;
  charCodes2[charCodes2["oghamSpaceMark"] = oghamSpaceMark] = "oghamSpaceMark";
  const lineSeparator = 8232;
  charCodes2[charCodes2["lineSeparator"] = lineSeparator] = "lineSeparator";
  const paragraphSeparator = 8233;
  charCodes2[charCodes2["paragraphSeparator"] = paragraphSeparator] = "paragraphSeparator";
})(charCodes || (charCodes = {}));
let isJSXEnabled;
let isTypeScriptEnabled;
let isFlowEnabled;
let state;
let input;
let nextContextId;
function getNextContextId() {
  return nextContextId++;
}
function augmentError(error) {
  if ("pos" in error) {
    const loc = locationForIndex(error.pos);
    error.message += ` (${loc.line}:${loc.column})`;
    error.loc = loc;
  }
  return error;
}
class Loc {
  constructor(line, column) {
    this.line = line;
    this.column = column;
  }
}
function locationForIndex(pos) {
  let line = 1;
  let column = 1;
  for (let i = 0; i < pos; i++) {
    if (input.charCodeAt(i) === charCodes.lineFeed) {
      line++;
      column = 1;
    } else {
      column++;
    }
  }
  return new Loc(line, column);
}
function initParser(inputCode, isJSXEnabledArg, isTypeScriptEnabledArg, isFlowEnabledArg) {
  input = inputCode;
  state = new State();
  nextContextId = 1;
  isJSXEnabled = isJSXEnabledArg;
  isTypeScriptEnabled = isTypeScriptEnabledArg;
  isFlowEnabled = isFlowEnabledArg;
}
function isContextual(contextualKeyword) {
  return state.contextualKeyword === contextualKeyword;
}
function isLookaheadContextual(contextualKeyword) {
  const l = lookaheadTypeAndKeyword();
  return l.type === TokenType.name && l.contextualKeyword === contextualKeyword;
}
function eatContextual(contextualKeyword) {
  return state.contextualKeyword === contextualKeyword && eat(TokenType.name);
}
function expectContextual(contextualKeyword) {
  if (!eatContextual(contextualKeyword)) {
    unexpected();
  }
}
function canInsertSemicolon() {
  return match(TokenType.eof) || match(TokenType.braceR) || hasPrecedingLineBreak();
}
function hasPrecedingLineBreak() {
  const prevToken = state.tokens[state.tokens.length - 1];
  const lastTokEnd = prevToken ? prevToken.end : 0;
  for (let i = lastTokEnd; i < state.start; i++) {
    const code = input.charCodeAt(i);
    if (code === charCodes.lineFeed || code === charCodes.carriageReturn || code === 8232 || code === 8233) {
      return true;
    }
  }
  return false;
}
function hasFollowingLineBreak() {
  const nextStart = nextTokenStart();
  for (let i = state.end; i < nextStart; i++) {
    const code = input.charCodeAt(i);
    if (code === charCodes.lineFeed || code === charCodes.carriageReturn || code === 8232 || code === 8233) {
      return true;
    }
  }
  return false;
}
function isLineTerminator() {
  return eat(TokenType.semi) || canInsertSemicolon();
}
function semicolon() {
  if (!isLineTerminator()) {
    unexpected('Unexpected token, expected ";"');
  }
}
function expect(type) {
  const matched = eat(type);
  if (!matched) {
    unexpected(`Unexpected token, expected "${formatTokenType(type)}"`);
  }
}
function unexpected(message = "Unexpected token", pos = state.start) {
  if (state.error) {
    return;
  }
  const err = new SyntaxError(message);
  err.pos = pos;
  state.error = err;
  state.pos = input.length;
  finishToken(TokenType.eof);
}
const WHITESPACE_CHARS = [
  9,
  11,
  12,
  charCodes.space,
  charCodes.nonBreakingSpace,
  charCodes.oghamSpaceMark,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8239,
  8287,
  12288,
  65279
];
const skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
const IS_WHITESPACE = new Uint8Array(65536);
for (const char of WHITESPACE_CHARS) {
  IS_WHITESPACE[char] = 1;
}
function computeIsIdentifierChar(code) {
  if (code < 48)
    return code === 36;
  if (code < 58)
    return true;
  if (code < 65)
    return false;
  if (code < 91)
    return true;
  if (code < 97)
    return code === 95;
  if (code < 123)
    return true;
  if (code < 128)
    return false;
  throw new Error("Should not be called with non-ASCII char code.");
}
const IS_IDENTIFIER_CHAR = new Uint8Array(65536);
for (let i = 0; i < 128; i++) {
  IS_IDENTIFIER_CHAR[i] = computeIsIdentifierChar(i) ? 1 : 0;
}
for (let i = 128; i < 65536; i++) {
  IS_IDENTIFIER_CHAR[i] = 1;
}
for (const whitespaceChar of WHITESPACE_CHARS) {
  IS_IDENTIFIER_CHAR[whitespaceChar] = 0;
}
IS_IDENTIFIER_CHAR[8232] = 0;
IS_IDENTIFIER_CHAR[8233] = 0;
const IS_IDENTIFIER_START = IS_IDENTIFIER_CHAR.slice();
for (let numChar = charCodes.digit0; numChar <= charCodes.digit9; numChar++) {
  IS_IDENTIFIER_START[numChar] = 0;
}
const READ_WORD_TREE = new Int32Array([
  -1,
  27,
  594,
  729,
  1566,
  2187,
  2673,
  3294,
  -1,
  3510,
  -1,
  4428,
  4563,
  4644,
  4941,
  5319,
  5697,
  -1,
  6237,
  6696,
  7155,
  7587,
  7749,
  7911,
  -1,
  8127,
  -1,
  -1,
  -1,
  54,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  243,
  -1,
  -1,
  -1,
  486,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  81,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  108,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  135,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  162,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  189,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  216,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._abstract << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._as << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  270,
  -1,
  -1,
  -1,
  -1,
  -1,
  405,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  297,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  324,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  351,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  378,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._asserts << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  432,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  459,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._async << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  513,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  540,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  567,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._await << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  621,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  648,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  675,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  702,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._break << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  756,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  918,
  -1,
  -1,
  -1,
  1053,
  -1,
  -1,
  1161,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  783,
  837,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  810,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._case << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  864,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  891,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._catch << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  945,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  972,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  999,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1026,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._checks << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1080,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1107,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1134,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._class << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1188,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1215,
  1431,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1242,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._const << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1269,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1296,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1323,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1350,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1377,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1404,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._constructor << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1458,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1485,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1512,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1539,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._continue << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1593,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2160,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1620,
  1782,
  -1,
  -1,
  1917,
  -1,
  -1,
  -1,
  -1,
  -1,
  2052,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1647,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1674,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1701,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1728,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1755,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._debugger << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1809,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1836,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1863,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1890,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._declare << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1944,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1971,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1998,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2025,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._default << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2079,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2106,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2133,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._delete << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._do << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2214,
  -1,
  2295,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2376,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2241,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2268,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._else << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2322,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2349,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._enum << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2403,
  -1,
  -1,
  -1,
  2538,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2430,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2457,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2484,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._export << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2511,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._exports << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2565,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2592,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2619,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2646,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._extends << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2700,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2808,
  -1,
  -1,
  -1,
  -1,
  -1,
  2970,
  -1,
  -1,
  3024,
  -1,
  -1,
  3105,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2727,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2754,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2781,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._false << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2835,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2862,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2889,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2916,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2943,
  -1,
  (TokenType._finally << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2997,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._for << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3051,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3078,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._from << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3132,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3159,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3186,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3213,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3240,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3267,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._function << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3321,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3375,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3348,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._get << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3402,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3429,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3456,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3483,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._global << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3537,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3564,
  3888,
  -1,
  -1,
  -1,
  -1,
  4401,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._if << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3591,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3618,
  -1,
  -1,
  3807,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3645,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3672,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3699,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3726,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3753,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3780,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._implements << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3834,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3861,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._import << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._in << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3915,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3996,
  4212,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3942,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3969,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._infer << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4023,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4050,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4077,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4104,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4131,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4158,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4185,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._instanceof << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4239,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4266,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4293,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4320,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4347,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4374,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._interface << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._is << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4455,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4482,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4509,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4536,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._keyof << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4590,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4617,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._let << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4671,
  -1,
  -1,
  -1,
  -1,
  -1,
  4806,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4698,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4725,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4752,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4779,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._mixins << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4833,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4860,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4887,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4914,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._module << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4968,
  -1,
  -1,
  -1,
  5184,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5238,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4995,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5022,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5049,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5076,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5103,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5130,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5157,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._namespace << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5211,
  -1,
  -1,
  -1,
  (TokenType._new << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5265,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5292,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._null << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5346,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5373,
  -1,
  -1,
  -1,
  -1,
  -1,
  5508,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._of << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5400,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5427,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5454,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5481,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._opaque << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5535,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5562,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5589,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5616,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5643,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5670,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._override << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5724,
  -1,
  -1,
  6102,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5751,
  -1,
  -1,
  -1,
  -1,
  -1,
  5886,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5778,
  -1,
  -1,
  -1,
  -1,
  -1,
  5805,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5832,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5859,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._private << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5913,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5940,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6075,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5967,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5994,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6021,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6048,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._protected << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._proto << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6129,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6156,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6183,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6210,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._public << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6264,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6291,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6453,
  -1,
  -1,
  6588,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6318,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6345,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6372,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6399,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6426,
  -1,
  ContextualKeyword._readonly << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6480,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6507,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6534,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6561,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._require << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6615,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6642,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6669,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._return << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6723,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6777,
  6912,
  -1,
  7020,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6750,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._set << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6804,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6831,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6858,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6885,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._static << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6939,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6966,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6993,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._super << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7047,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7074,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7101,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7128,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._switch << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7182,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7344,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7452,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7209,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7263,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7236,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._this << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7290,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7317,
  -1,
  -1,
  -1,
  (TokenType._throw << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7371,
  -1,
  -1,
  -1,
  7425,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7398,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._true << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._try << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7479,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7506,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._type << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7533,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7560,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._typeof << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7614,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7641,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7668,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7695,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7722,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  ContextualKeyword._unique << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7776,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7830,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7803,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._var << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7857,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7884,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._void << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7938,
  8046,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7965,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7992,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8019,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._while << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8073,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8100,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._with << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8154,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8181,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8208,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8235,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (TokenType._yield << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
]);
function readWord() {
  let treePos = 0;
  let code = 0;
  let pos = state.pos;
  while (pos < input.length) {
    code = input.charCodeAt(pos);
    if (code < charCodes.lowercaseA || code > charCodes.lowercaseZ) {
      break;
    }
    const next2 = READ_WORD_TREE[treePos + (code - charCodes.lowercaseA) + 1];
    if (next2 === -1) {
      break;
    } else {
      treePos = next2;
      pos++;
    }
  }
  const keywordValue = READ_WORD_TREE[treePos];
  if (keywordValue > -1 && !IS_IDENTIFIER_CHAR[code]) {
    state.pos = pos;
    if (keywordValue & 1) {
      finishToken(keywordValue >>> 1);
    } else {
      finishToken(TokenType.name, keywordValue >>> 1);
    }
    return;
  }
  while (pos < input.length) {
    const ch = input.charCodeAt(pos);
    if (IS_IDENTIFIER_CHAR[ch]) {
      pos++;
    } else if (ch === charCodes.backslash) {
      pos += 2;
      if (input.charCodeAt(pos) === charCodes.leftCurlyBrace) {
        while (pos < input.length && input.charCodeAt(pos) !== charCodes.rightCurlyBrace) {
          pos++;
        }
        pos++;
      }
    } else if (ch === charCodes.atSign && input.charCodeAt(pos + 1) === charCodes.atSign) {
      pos += 2;
    } else {
      break;
    }
  }
  state.pos = pos;
  finishToken(TokenType.name);
}
var IdentifierRole;
(function(IdentifierRole2) {
  const Access = 0;
  IdentifierRole2[IdentifierRole2["Access"] = Access] = "Access";
  const ExportAccess = Access + 1;
  IdentifierRole2[IdentifierRole2["ExportAccess"] = ExportAccess] = "ExportAccess";
  const TopLevelDeclaration = ExportAccess + 1;
  IdentifierRole2[IdentifierRole2["TopLevelDeclaration"] = TopLevelDeclaration] = "TopLevelDeclaration";
  const FunctionScopedDeclaration = TopLevelDeclaration + 1;
  IdentifierRole2[IdentifierRole2["FunctionScopedDeclaration"] = FunctionScopedDeclaration] = "FunctionScopedDeclaration";
  const BlockScopedDeclaration = FunctionScopedDeclaration + 1;
  IdentifierRole2[IdentifierRole2["BlockScopedDeclaration"] = BlockScopedDeclaration] = "BlockScopedDeclaration";
  const ObjectShorthandTopLevelDeclaration = BlockScopedDeclaration + 1;
  IdentifierRole2[IdentifierRole2["ObjectShorthandTopLevelDeclaration"] = ObjectShorthandTopLevelDeclaration] = "ObjectShorthandTopLevelDeclaration";
  const ObjectShorthandFunctionScopedDeclaration = ObjectShorthandTopLevelDeclaration + 1;
  IdentifierRole2[IdentifierRole2["ObjectShorthandFunctionScopedDeclaration"] = ObjectShorthandFunctionScopedDeclaration] = "ObjectShorthandFunctionScopedDeclaration";
  const ObjectShorthandBlockScopedDeclaration = ObjectShorthandFunctionScopedDeclaration + 1;
  IdentifierRole2[IdentifierRole2["ObjectShorthandBlockScopedDeclaration"] = ObjectShorthandBlockScopedDeclaration] = "ObjectShorthandBlockScopedDeclaration";
  const ObjectShorthand = ObjectShorthandBlockScopedDeclaration + 1;
  IdentifierRole2[IdentifierRole2["ObjectShorthand"] = ObjectShorthand] = "ObjectShorthand";
  const ImportDeclaration = ObjectShorthand + 1;
  IdentifierRole2[IdentifierRole2["ImportDeclaration"] = ImportDeclaration] = "ImportDeclaration";
  const ObjectKey = ImportDeclaration + 1;
  IdentifierRole2[IdentifierRole2["ObjectKey"] = ObjectKey] = "ObjectKey";
  const ImportAccess = ObjectKey + 1;
  IdentifierRole2[IdentifierRole2["ImportAccess"] = ImportAccess] = "ImportAccess";
})(IdentifierRole || (IdentifierRole = {}));
function isDeclaration(token) {
  const role = token.identifierRole;
  return role === IdentifierRole.TopLevelDeclaration || role === IdentifierRole.FunctionScopedDeclaration || role === IdentifierRole.BlockScopedDeclaration || role === IdentifierRole.ObjectShorthandTopLevelDeclaration || role === IdentifierRole.ObjectShorthandFunctionScopedDeclaration || role === IdentifierRole.ObjectShorthandBlockScopedDeclaration;
}
function isNonTopLevelDeclaration(token) {
  const role = token.identifierRole;
  return role === IdentifierRole.FunctionScopedDeclaration || role === IdentifierRole.BlockScopedDeclaration || role === IdentifierRole.ObjectShorthandFunctionScopedDeclaration || role === IdentifierRole.ObjectShorthandBlockScopedDeclaration;
}
function isTopLevelDeclaration(token) {
  const role = token.identifierRole;
  return role === IdentifierRole.TopLevelDeclaration || role === IdentifierRole.ObjectShorthandTopLevelDeclaration || role === IdentifierRole.ImportDeclaration;
}
function isBlockScopedDeclaration(token) {
  const role = token.identifierRole;
  return role === IdentifierRole.TopLevelDeclaration || role === IdentifierRole.BlockScopedDeclaration || role === IdentifierRole.ObjectShorthandTopLevelDeclaration || role === IdentifierRole.ObjectShorthandBlockScopedDeclaration;
}
function isFunctionScopedDeclaration(token) {
  const role = token.identifierRole;
  return role === IdentifierRole.FunctionScopedDeclaration || role === IdentifierRole.ObjectShorthandFunctionScopedDeclaration;
}
function isObjectShorthandDeclaration(token) {
  return token.identifierRole === IdentifierRole.ObjectShorthandTopLevelDeclaration || token.identifierRole === IdentifierRole.ObjectShorthandBlockScopedDeclaration || token.identifierRole === IdentifierRole.ObjectShorthandFunctionScopedDeclaration;
}
class Token {
  constructor() {
    this.type = state.type;
    this.contextualKeyword = state.contextualKeyword;
    this.start = state.start;
    this.end = state.end;
    this.scopeDepth = state.scopeDepth;
    this.isType = state.isType;
    this.identifierRole = null;
    this.shadowsGlobal = false;
    this.isAsyncOperation = false;
    this.contextId = null;
    this.rhsEndIndex = null;
    this.isExpression = false;
    this.numNullishCoalesceStarts = 0;
    this.numNullishCoalesceEnds = 0;
    this.isOptionalChainStart = false;
    this.isOptionalChainEnd = false;
    this.subscriptStartIndex = null;
    this.nullishStartIndex = null;
  }
}
function next() {
  state.tokens.push(new Token());
  nextToken();
}
function nextTemplateToken() {
  state.tokens.push(new Token());
  state.start = state.pos;
  readTmplToken();
}
function retokenizeSlashAsRegex() {
  if (state.type === TokenType.assign) {
    --state.pos;
  }
  readRegexp();
}
function pushTypeContext(existingTokensInType) {
  for (let i = state.tokens.length - existingTokensInType; i < state.tokens.length; i++) {
    state.tokens[i].isType = true;
  }
  const oldIsType = state.isType;
  state.isType = true;
  return oldIsType;
}
function popTypeContext(oldIsType) {
  state.isType = oldIsType;
}
function eat(type) {
  if (match(type)) {
    next();
    return true;
  } else {
    return false;
  }
}
function match(type) {
  return state.type === type;
}
function lookaheadType() {
  const snapshot = state.snapshot();
  next();
  const type = state.type;
  state.restoreFromSnapshot(snapshot);
  return type;
}
class TypeAndKeyword {
  constructor(type, contextualKeyword) {
    this.type = type;
    this.contextualKeyword = contextualKeyword;
  }
}
function lookaheadTypeAndKeyword() {
  const snapshot = state.snapshot();
  next();
  const type = state.type;
  const contextualKeyword = state.contextualKeyword;
  state.restoreFromSnapshot(snapshot);
  return new TypeAndKeyword(type, contextualKeyword);
}
function nextTokenStart() {
  return nextTokenStartSince(state.pos);
}
function nextTokenStartSince(pos) {
  skipWhiteSpace.lastIndex = pos;
  const skip = skipWhiteSpace.exec(input);
  return pos + skip[0].length;
}
function lookaheadCharCode() {
  return input.charCodeAt(nextTokenStart());
}
function nextToken() {
  skipSpace();
  state.start = state.pos;
  if (state.pos >= input.length) {
    const tokens = state.tokens;
    if (tokens.length >= 2 && tokens[tokens.length - 1].start >= input.length && tokens[tokens.length - 2].start >= input.length) {
      unexpected("Unexpectedly reached the end of input.");
    }
    finishToken(TokenType.eof);
    return;
  }
  readToken(input.charCodeAt(state.pos));
}
function readToken(code) {
  if (IS_IDENTIFIER_START[code] || code === charCodes.backslash || code === charCodes.atSign && input.charCodeAt(state.pos + 1) === charCodes.atSign) {
    readWord();
  } else {
    getTokenFromCode(code);
  }
}
function skipBlockComment() {
  while (input.charCodeAt(state.pos) !== charCodes.asterisk || input.charCodeAt(state.pos + 1) !== charCodes.slash) {
    state.pos++;
    if (state.pos > input.length) {
      unexpected("Unterminated comment", state.pos - 2);
      return;
    }
  }
  state.pos += 2;
}
function skipLineComment(startSkip) {
  let ch = input.charCodeAt(state.pos += startSkip);
  if (state.pos < input.length) {
    while (ch !== charCodes.lineFeed && ch !== charCodes.carriageReturn && ch !== charCodes.lineSeparator && ch !== charCodes.paragraphSeparator && ++state.pos < input.length) {
      ch = input.charCodeAt(state.pos);
    }
  }
}
function skipSpace() {
  while (state.pos < input.length) {
    const ch = input.charCodeAt(state.pos);
    switch (ch) {
      case charCodes.carriageReturn:
        if (input.charCodeAt(state.pos + 1) === charCodes.lineFeed) {
          ++state.pos;
        }
      case charCodes.lineFeed:
      case charCodes.lineSeparator:
      case charCodes.paragraphSeparator:
        ++state.pos;
        break;
      case charCodes.slash:
        switch (input.charCodeAt(state.pos + 1)) {
          case charCodes.asterisk:
            state.pos += 2;
            skipBlockComment();
            break;
          case charCodes.slash:
            skipLineComment(2);
            break;
          default:
            return;
        }
        break;
      default:
        if (IS_WHITESPACE[ch]) {
          ++state.pos;
        } else {
          return;
        }
    }
  }
}
function finishToken(type, contextualKeyword = ContextualKeyword.NONE) {
  state.end = state.pos;
  state.type = type;
  state.contextualKeyword = contextualKeyword;
}
function readToken_dot() {
  const nextChar = input.charCodeAt(state.pos + 1);
  if (nextChar >= charCodes.digit0 && nextChar <= charCodes.digit9) {
    readNumber(true);
    return;
  }
  if (nextChar === charCodes.dot && input.charCodeAt(state.pos + 2) === charCodes.dot) {
    state.pos += 3;
    finishToken(TokenType.ellipsis);
  } else {
    ++state.pos;
    finishToken(TokenType.dot);
  }
}
function readToken_slash() {
  const nextChar = input.charCodeAt(state.pos + 1);
  if (nextChar === charCodes.equalsTo) {
    finishOp(TokenType.assign, 2);
  } else {
    finishOp(TokenType.slash, 1);
  }
}
function readToken_mult_modulo(code) {
  let tokenType = code === charCodes.asterisk ? TokenType.star : TokenType.modulo;
  let width = 1;
  let nextChar = input.charCodeAt(state.pos + 1);
  if (code === charCodes.asterisk && nextChar === charCodes.asterisk) {
    width++;
    nextChar = input.charCodeAt(state.pos + 2);
    tokenType = TokenType.exponent;
  }
  if (nextChar === charCodes.equalsTo && input.charCodeAt(state.pos + 2) !== charCodes.greaterThan) {
    width++;
    tokenType = TokenType.assign;
  }
  finishOp(tokenType, width);
}
function readToken_pipe_amp(code) {
  const nextChar = input.charCodeAt(state.pos + 1);
  if (nextChar === code) {
    if (input.charCodeAt(state.pos + 2) === charCodes.equalsTo) {
      finishOp(TokenType.assign, 3);
    } else {
      finishOp(code === charCodes.verticalBar ? TokenType.logicalOR : TokenType.logicalAND, 2);
    }
    return;
  }
  if (code === charCodes.verticalBar) {
    if (nextChar === charCodes.greaterThan) {
      finishOp(TokenType.pipeline, 2);
      return;
    } else if (nextChar === charCodes.rightCurlyBrace && isFlowEnabled) {
      finishOp(TokenType.braceBarR, 2);
      return;
    }
  }
  if (nextChar === charCodes.equalsTo) {
    finishOp(TokenType.assign, 2);
    return;
  }
  finishOp(code === charCodes.verticalBar ? TokenType.bitwiseOR : TokenType.bitwiseAND, 1);
}
function readToken_caret() {
  const nextChar = input.charCodeAt(state.pos + 1);
  if (nextChar === charCodes.equalsTo) {
    finishOp(TokenType.assign, 2);
  } else {
    finishOp(TokenType.bitwiseXOR, 1);
  }
}
function readToken_plus_min(code) {
  const nextChar = input.charCodeAt(state.pos + 1);
  if (nextChar === code) {
    finishOp(TokenType.preIncDec, 2);
    return;
  }
  if (nextChar === charCodes.equalsTo) {
    finishOp(TokenType.assign, 2);
  } else if (code === charCodes.plusSign) {
    finishOp(TokenType.plus, 1);
  } else {
    finishOp(TokenType.minus, 1);
  }
}
function readToken_lt_gt(code) {
  const nextChar = input.charCodeAt(state.pos + 1);
  if (nextChar === code) {
    const size = code === charCodes.greaterThan && input.charCodeAt(state.pos + 2) === charCodes.greaterThan ? 3 : 2;
    if (input.charCodeAt(state.pos + size) === charCodes.equalsTo) {
      finishOp(TokenType.assign, size + 1);
      return;
    }
    if (code === charCodes.greaterThan && state.isType) {
      finishOp(TokenType.greaterThan, 1);
      return;
    }
    finishOp(TokenType.bitShift, size);
    return;
  }
  if (nextChar === charCodes.equalsTo) {
    finishOp(TokenType.relationalOrEqual, 2);
  } else if (code === charCodes.lessThan) {
    finishOp(TokenType.lessThan, 1);
  } else {
    finishOp(TokenType.greaterThan, 1);
  }
}
function readToken_eq_excl(code) {
  const nextChar = input.charCodeAt(state.pos + 1);
  if (nextChar === charCodes.equalsTo) {
    finishOp(TokenType.equality, input.charCodeAt(state.pos + 2) === charCodes.equalsTo ? 3 : 2);
    return;
  }
  if (code === charCodes.equalsTo && nextChar === charCodes.greaterThan) {
    state.pos += 2;
    finishToken(TokenType.arrow);
    return;
  }
  finishOp(code === charCodes.equalsTo ? TokenType.eq : TokenType.bang, 1);
}
function readToken_question() {
  const nextChar = input.charCodeAt(state.pos + 1);
  const nextChar2 = input.charCodeAt(state.pos + 2);
  if (nextChar === charCodes.questionMark && !state.isType) {
    if (nextChar2 === charCodes.equalsTo) {
      finishOp(TokenType.assign, 3);
    } else {
      finishOp(TokenType.nullishCoalescing, 2);
    }
  } else if (nextChar === charCodes.dot && !(nextChar2 >= charCodes.digit0 && nextChar2 <= charCodes.digit9)) {
    state.pos += 2;
    finishToken(TokenType.questionDot);
  } else {
    ++state.pos;
    finishToken(TokenType.question);
  }
}
function getTokenFromCode(code) {
  switch (code) {
    case charCodes.numberSign:
      ++state.pos;
      finishToken(TokenType.hash);
      return;
    case charCodes.dot:
      readToken_dot();
      return;
    case charCodes.leftParenthesis:
      ++state.pos;
      finishToken(TokenType.parenL);
      return;
    case charCodes.rightParenthesis:
      ++state.pos;
      finishToken(TokenType.parenR);
      return;
    case charCodes.semicolon:
      ++state.pos;
      finishToken(TokenType.semi);
      return;
    case charCodes.comma:
      ++state.pos;
      finishToken(TokenType.comma);
      return;
    case charCodes.leftSquareBracket:
      ++state.pos;
      finishToken(TokenType.bracketL);
      return;
    case charCodes.rightSquareBracket:
      ++state.pos;
      finishToken(TokenType.bracketR);
      return;
    case charCodes.leftCurlyBrace:
      if (isFlowEnabled && input.charCodeAt(state.pos + 1) === charCodes.verticalBar) {
        finishOp(TokenType.braceBarL, 2);
      } else {
        ++state.pos;
        finishToken(TokenType.braceL);
      }
      return;
    case charCodes.rightCurlyBrace:
      ++state.pos;
      finishToken(TokenType.braceR);
      return;
    case charCodes.colon:
      if (input.charCodeAt(state.pos + 1) === charCodes.colon) {
        finishOp(TokenType.doubleColon, 2);
      } else {
        ++state.pos;
        finishToken(TokenType.colon);
      }
      return;
    case charCodes.questionMark:
      readToken_question();
      return;
    case charCodes.atSign:
      ++state.pos;
      finishToken(TokenType.at);
      return;
    case charCodes.graveAccent:
      ++state.pos;
      finishToken(TokenType.backQuote);
      return;
    case charCodes.digit0: {
      const nextChar = input.charCodeAt(state.pos + 1);
      if (nextChar === charCodes.lowercaseX || nextChar === charCodes.uppercaseX || nextChar === charCodes.lowercaseO || nextChar === charCodes.uppercaseO || nextChar === charCodes.lowercaseB || nextChar === charCodes.uppercaseB) {
        readRadixNumber();
        return;
      }
    }
    case charCodes.digit1:
    case charCodes.digit2:
    case charCodes.digit3:
    case charCodes.digit4:
    case charCodes.digit5:
    case charCodes.digit6:
    case charCodes.digit7:
    case charCodes.digit8:
    case charCodes.digit9:
      readNumber(false);
      return;
    case charCodes.quotationMark:
    case charCodes.apostrophe:
      readString(code);
      return;
    case charCodes.slash:
      readToken_slash();
      return;
    case charCodes.percentSign:
    case charCodes.asterisk:
      readToken_mult_modulo(code);
      return;
    case charCodes.verticalBar:
    case charCodes.ampersand:
      readToken_pipe_amp(code);
      return;
    case charCodes.caret:
      readToken_caret();
      return;
    case charCodes.plusSign:
    case charCodes.dash:
      readToken_plus_min(code);
      return;
    case charCodes.lessThan:
    case charCodes.greaterThan:
      readToken_lt_gt(code);
      return;
    case charCodes.equalsTo:
    case charCodes.exclamationMark:
      readToken_eq_excl(code);
      return;
    case charCodes.tilde:
      finishOp(TokenType.tilde, 1);
      return;
  }
  unexpected(`Unexpected character '${String.fromCharCode(code)}'`, state.pos);
}
function finishOp(type, size) {
  state.pos += size;
  finishToken(type);
}
function readRegexp() {
  const start = state.pos;
  let escaped = false;
  let inClass = false;
  for (; ; ) {
    if (state.pos >= input.length) {
      unexpected("Unterminated regular expression", start);
      return;
    }
    const code = input.charCodeAt(state.pos);
    if (escaped) {
      escaped = false;
    } else {
      if (code === charCodes.leftSquareBracket) {
        inClass = true;
      } else if (code === charCodes.rightSquareBracket && inClass) {
        inClass = false;
      } else if (code === charCodes.slash && !inClass) {
        break;
      }
      escaped = code === charCodes.backslash;
    }
    ++state.pos;
  }
  ++state.pos;
  skipWord();
  finishToken(TokenType.regexp);
}
function readInt() {
  while (true) {
    const code = input.charCodeAt(state.pos);
    if (code >= charCodes.digit0 && code <= charCodes.digit9 || code >= charCodes.lowercaseA && code <= charCodes.lowercaseF || code >= charCodes.uppercaseA && code <= charCodes.uppercaseF || code === charCodes.underscore) {
      state.pos++;
    } else {
      break;
    }
  }
}
function readRadixNumber() {
  let isBigInt = false;
  const start = state.pos;
  state.pos += 2;
  readInt();
  const nextChar = input.charCodeAt(state.pos);
  if (nextChar === charCodes.lowercaseN) {
    ++state.pos;
    isBigInt = true;
  } else if (nextChar === charCodes.lowercaseM) {
    unexpected("Invalid decimal", start);
  }
  if (isBigInt) {
    finishToken(TokenType.bigint);
    return;
  }
  finishToken(TokenType.num);
}
function readNumber(startsWithDot) {
  let isBigInt = false;
  let isDecimal = false;
  if (!startsWithDot) {
    readInt();
  }
  let nextChar = input.charCodeAt(state.pos);
  if (nextChar === charCodes.dot) {
    ++state.pos;
    readInt();
    nextChar = input.charCodeAt(state.pos);
  }
  if (nextChar === charCodes.uppercaseE || nextChar === charCodes.lowercaseE) {
    nextChar = input.charCodeAt(++state.pos);
    if (nextChar === charCodes.plusSign || nextChar === charCodes.dash) {
      ++state.pos;
    }
    readInt();
    nextChar = input.charCodeAt(state.pos);
  }
  if (nextChar === charCodes.lowercaseN) {
    ++state.pos;
    isBigInt = true;
  } else if (nextChar === charCodes.lowercaseM) {
    ++state.pos;
    isDecimal = true;
  }
  if (isBigInt) {
    finishToken(TokenType.bigint);
    return;
  }
  if (isDecimal) {
    finishToken(TokenType.decimal);
    return;
  }
  finishToken(TokenType.num);
}
function readString(quote) {
  state.pos++;
  for (; ; ) {
    if (state.pos >= input.length) {
      unexpected("Unterminated string constant");
      return;
    }
    const ch = input.charCodeAt(state.pos);
    if (ch === charCodes.backslash) {
      state.pos++;
    } else if (ch === quote) {
      break;
    }
    state.pos++;
  }
  state.pos++;
  finishToken(TokenType.string);
}
function readTmplToken() {
  for (; ; ) {
    if (state.pos >= input.length) {
      unexpected("Unterminated template");
      return;
    }
    const ch = input.charCodeAt(state.pos);
    if (ch === charCodes.graveAccent || ch === charCodes.dollarSign && input.charCodeAt(state.pos + 1) === charCodes.leftCurlyBrace) {
      if (state.pos === state.start && match(TokenType.template)) {
        if (ch === charCodes.dollarSign) {
          state.pos += 2;
          finishToken(TokenType.dollarBraceL);
          return;
        } else {
          ++state.pos;
          finishToken(TokenType.backQuote);
          return;
        }
      }
      finishToken(TokenType.template);
      return;
    }
    if (ch === charCodes.backslash) {
      state.pos++;
    }
    state.pos++;
  }
}
function skipWord() {
  while (state.pos < input.length) {
    const ch = input.charCodeAt(state.pos);
    if (IS_IDENTIFIER_CHAR[ch]) {
      state.pos++;
    } else if (ch === charCodes.backslash) {
      state.pos += 2;
      if (input.charCodeAt(state.pos) === charCodes.leftCurlyBrace) {
        while (state.pos < input.length && input.charCodeAt(state.pos) !== charCodes.rightCurlyBrace) {
          state.pos++;
        }
        state.pos++;
      }
    } else {
      break;
    }
  }
}
const entities = {
  quot: '"',
  amp: "&",
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: "\xA0",
  iexcl: "\xA1",
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  Agrave: "\xC0",
  Aacute: "\xC1",
  Acirc: "\xC2",
  Atilde: "\xC3",
  Auml: "\xC4",
  Aring: "\xC5",
  AElig: "\xC6",
  Ccedil: "\xC7",
  Egrave: "\xC8",
  Eacute: "\xC9",
  Ecirc: "\xCA",
  Euml: "\xCB",
  Igrave: "\xCC",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Iuml: "\xCF",
  ETH: "\xD0",
  Ntilde: "\xD1",
  Ograve: "\xD2",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Otilde: "\xD5",
  Ouml: "\xD6",
  times: "\xD7",
  Oslash: "\xD8",
  Ugrave: "\xD9",
  Uacute: "\xDA",
  Ucirc: "\xDB",
  Uuml: "\xDC",
  Yacute: "\xDD",
  THORN: "\xDE",
  szlig: "\xDF",
  agrave: "\xE0",
  aacute: "\xE1",
  acirc: "\xE2",
  atilde: "\xE3",
  auml: "\xE4",
  aring: "\xE5",
  aelig: "\xE6",
  ccedil: "\xE7",
  egrave: "\xE8",
  eacute: "\xE9",
  ecirc: "\xEA",
  euml: "\xEB",
  igrave: "\xEC",
  iacute: "\xED",
  icirc: "\xEE",
  iuml: "\xEF",
  eth: "\xF0",
  ntilde: "\xF1",
  ograve: "\xF2",
  oacute: "\xF3",
  ocirc: "\xF4",
  otilde: "\xF5",
  ouml: "\xF6",
  divide: "\xF7",
  oslash: "\xF8",
  ugrave: "\xF9",
  uacute: "\xFA",
  ucirc: "\xFB",
  uuml: "\xFC",
  yacute: "\xFD",
  thorn: "\xFE",
  yuml: "\xFF",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  fnof: "\u0192",
  circ: "\u02C6",
  tilde: "\u02DC",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  bull: "\u2022",
  hellip: "\u2026",
  permil: "\u2030",
  prime: "\u2032",
  Prime: "\u2033",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  oline: "\u203E",
  frasl: "\u2044",
  euro: "\u20AC",
  image: "\u2111",
  weierp: "\u2118",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666"
};
function getJSXPragmaInfo(options) {
  const [base, suffix] = splitPragma(options.jsxPragma || "React.createElement");
  const [fragmentBase, fragmentSuffix] = splitPragma(options.jsxFragmentPragma || "React.Fragment");
  return { base, suffix, fragmentBase, fragmentSuffix };
}
function splitPragma(pragma) {
  let dotIndex = pragma.indexOf(".");
  if (dotIndex === -1) {
    dotIndex = pragma.length;
  }
  return [pragma.slice(0, dotIndex), pragma.slice(dotIndex)];
}
class Transformer {
  getPrefixCode() {
    return "";
  }
  getHoistedCode() {
    return "";
  }
  getSuffixCode() {
    return "";
  }
}
const HEX_NUMBER = /^[\da-fA-F]+$/;
const DECIMAL_NUMBER = /^\d+$/;
class JSXTransformer extends Transformer {
  __init() {
    this.lastLineNumber = 1;
  }
  __init2() {
    this.lastIndex = 0;
  }
  __init3() {
    this.filenameVarName = null;
  }
  constructor(rootTransformer, tokens, importProcessor, nameManager, options) {
    super();
    this.rootTransformer = rootTransformer;
    this.tokens = tokens;
    this.importProcessor = importProcessor;
    this.nameManager = nameManager;
    this.options = options;
    JSXTransformer.prototype.__init.call(this);
    JSXTransformer.prototype.__init2.call(this);
    JSXTransformer.prototype.__init3.call(this);
    this.jsxPragmaInfo = getJSXPragmaInfo(options);
  }
  process() {
    if (this.tokens.matches1(TokenType.jsxTagStart)) {
      this.processJSXTag();
      return true;
    }
    return false;
  }
  getPrefixCode() {
    if (this.filenameVarName) {
      return `const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath || "")};`;
    } else {
      return "";
    }
  }
  getLineNumberForIndex(index) {
    const code = this.tokens.code;
    while (this.lastIndex < index && this.lastIndex < code.length) {
      if (code[this.lastIndex] === "\n") {
        this.lastLineNumber++;
      }
      this.lastIndex++;
    }
    return this.lastLineNumber;
  }
  getFilenameVarName() {
    if (!this.filenameVarName) {
      this.filenameVarName = this.nameManager.claimFreeName("_jsxFileName");
    }
    return this.filenameVarName;
  }
  processProps(firstTokenStart) {
    const lineNumber = this.getLineNumberForIndex(firstTokenStart);
    const devProps = this.options.production ? "" : `__self: this, __source: {fileName: ${this.getFilenameVarName()}, lineNumber: ${lineNumber}}`;
    if (!this.tokens.matches1(TokenType.jsxName) && !this.tokens.matches1(TokenType.braceL)) {
      if (devProps) {
        this.tokens.appendCode(`, {${devProps}}`);
      } else {
        this.tokens.appendCode(`, null`);
      }
      return;
    }
    this.tokens.appendCode(`, {`);
    while (true) {
      if (this.tokens.matches2(TokenType.jsxName, TokenType.eq)) {
        this.processPropKeyName();
        this.tokens.replaceToken(": ");
        if (this.tokens.matches1(TokenType.braceL)) {
          this.tokens.replaceToken("");
          this.rootTransformer.processBalancedCode();
          this.tokens.replaceToken("");
        } else if (this.tokens.matches1(TokenType.jsxTagStart)) {
          this.processJSXTag();
        } else {
          this.processStringPropValue();
        }
      } else if (this.tokens.matches1(TokenType.jsxName)) {
        this.processPropKeyName();
        this.tokens.appendCode(": true");
      } else if (this.tokens.matches1(TokenType.braceL)) {
        this.tokens.replaceToken("");
        this.rootTransformer.processBalancedCode();
        this.tokens.replaceToken("");
      } else {
        break;
      }
      this.tokens.appendCode(",");
    }
    if (devProps) {
      this.tokens.appendCode(` ${devProps}}`);
    } else {
      this.tokens.appendCode("}");
    }
  }
  processPropKeyName() {
    const keyName = this.tokens.identifierName();
    if (keyName.includes("-")) {
      this.tokens.replaceToken(`'${keyName}'`);
    } else {
      this.tokens.copyToken();
    }
  }
  processStringPropValue() {
    const token = this.tokens.currentToken();
    const valueCode = this.tokens.code.slice(token.start + 1, token.end - 1);
    const replacementCode = formatJSXTextReplacement(valueCode);
    const literalCode = formatJSXStringValueLiteral(valueCode);
    this.tokens.replaceToken(literalCode + replacementCode);
  }
  processTagIntro() {
    let introEnd = this.tokens.currentIndex() + 1;
    while (this.tokens.tokens[introEnd].isType || !this.tokens.matches2AtIndex(introEnd - 1, TokenType.jsxName, TokenType.jsxName) && !this.tokens.matches2AtIndex(introEnd - 1, TokenType.greaterThan, TokenType.jsxName) && !this.tokens.matches1AtIndex(introEnd, TokenType.braceL) && !this.tokens.matches1AtIndex(introEnd, TokenType.jsxTagEnd) && !this.tokens.matches2AtIndex(introEnd, TokenType.slash, TokenType.jsxTagEnd)) {
      introEnd++;
    }
    if (introEnd === this.tokens.currentIndex() + 1) {
      const tagName = this.tokens.identifierName();
      if (startsWithLowerCase(tagName)) {
        this.tokens.replaceToken(`'${tagName}'`);
      }
    }
    while (this.tokens.currentIndex() < introEnd) {
      this.rootTransformer.processToken();
    }
  }
  processChildren() {
    while (true) {
      if (this.tokens.matches2(TokenType.jsxTagStart, TokenType.slash)) {
        return;
      }
      if (this.tokens.matches1(TokenType.braceL)) {
        if (this.tokens.matches2(TokenType.braceL, TokenType.braceR)) {
          this.tokens.replaceToken("");
          this.tokens.replaceToken("");
        } else {
          this.tokens.replaceToken(", ");
          this.rootTransformer.processBalancedCode();
          this.tokens.replaceToken("");
        }
      } else if (this.tokens.matches1(TokenType.jsxTagStart)) {
        this.tokens.appendCode(", ");
        this.processJSXTag();
      } else if (this.tokens.matches1(TokenType.jsxText)) {
        this.processChildTextElement();
      } else {
        throw new Error("Unexpected token when processing JSX children.");
      }
    }
  }
  processChildTextElement() {
    const token = this.tokens.currentToken();
    const valueCode = this.tokens.code.slice(token.start, token.end);
    const replacementCode = formatJSXTextReplacement(valueCode);
    const literalCode = formatJSXTextLiteral(valueCode);
    if (literalCode === '""') {
      this.tokens.replaceToken(replacementCode);
    } else {
      this.tokens.replaceToken(`, ${literalCode}${replacementCode}`);
    }
  }
  processJSXTag() {
    const { jsxPragmaInfo } = this;
    const resolvedPragmaBaseName = this.importProcessor ? this.importProcessor.getIdentifierReplacement(jsxPragmaInfo.base) || jsxPragmaInfo.base : jsxPragmaInfo.base;
    const firstTokenStart = this.tokens.currentToken().start;
    this.tokens.replaceToken(`${resolvedPragmaBaseName}${jsxPragmaInfo.suffix}(`);
    if (this.tokens.matches1(TokenType.jsxTagEnd)) {
      const resolvedFragmentPragmaBaseName = this.importProcessor ? this.importProcessor.getIdentifierReplacement(jsxPragmaInfo.fragmentBase) || jsxPragmaInfo.fragmentBase : jsxPragmaInfo.fragmentBase;
      this.tokens.replaceToken(`${resolvedFragmentPragmaBaseName}${jsxPragmaInfo.fragmentSuffix}, null`);
      this.processChildren();
      while (!this.tokens.matches1(TokenType.jsxTagEnd)) {
        this.tokens.replaceToken("");
      }
      this.tokens.replaceToken(")");
    } else {
      this.processTagIntro();
      this.processProps(firstTokenStart);
      if (this.tokens.matches2(TokenType.slash, TokenType.jsxTagEnd)) {
        this.tokens.replaceToken("");
        this.tokens.replaceToken(")");
      } else if (this.tokens.matches1(TokenType.jsxTagEnd)) {
        this.tokens.replaceToken("");
        this.processChildren();
        while (!this.tokens.matches1(TokenType.jsxTagEnd)) {
          this.tokens.replaceToken("");
        }
        this.tokens.replaceToken(")");
      } else {
        throw new Error("Expected either /> or > at the end of the tag.");
      }
    }
  }
}
function startsWithLowerCase(s) {
  const firstChar = s.charCodeAt(0);
  return firstChar >= charCodes.lowercaseA && firstChar <= charCodes.lowercaseZ;
}
function formatJSXTextLiteral(text) {
  let result = "";
  let whitespace = "";
  let isInInitialLineWhitespace = false;
  let seenNonWhitespace = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === " " || c === "	" || c === "\r") {
      if (!isInInitialLineWhitespace) {
        whitespace += c;
      }
    } else if (c === "\n") {
      whitespace = "";
      isInInitialLineWhitespace = true;
    } else {
      if (seenNonWhitespace && isInInitialLineWhitespace) {
        result += " ";
      }
      result += whitespace;
      whitespace = "";
      if (c === "&") {
        const { entity, newI } = processEntity(text, i + 1);
        i = newI - 1;
        result += entity;
      } else {
        result += c;
      }
      seenNonWhitespace = true;
      isInInitialLineWhitespace = false;
    }
  }
  if (!isInInitialLineWhitespace) {
    result += whitespace;
  }
  return JSON.stringify(result);
}
function formatJSXTextReplacement(text) {
  let numNewlines = 0;
  let numSpaces = 0;
  for (const c of text) {
    if (c === "\n") {
      numNewlines++;
      numSpaces = 0;
    } else if (c === " ") {
      numSpaces++;
    }
  }
  return "\n".repeat(numNewlines) + " ".repeat(numSpaces);
}
function formatJSXStringValueLiteral(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === "\n") {
      if (/\s/.test(text[i + 1])) {
        result += " ";
        while (i < text.length && /\s/.test(text[i + 1])) {
          i++;
        }
      } else {
        result += "\n";
      }
    } else if (c === "&") {
      const { entity, newI } = processEntity(text, i + 1);
      result += entity;
      i = newI - 1;
    } else {
      result += c;
    }
  }
  return JSON.stringify(result);
}
function processEntity(text, indexAfterAmpersand) {
  let str = "";
  let count = 0;
  let entity;
  let i = indexAfterAmpersand;
  while (i < text.length && count++ < 10) {
    const ch = text[i];
    i++;
    if (ch === ";") {
      if (str[0] === "#") {
        if (str[1] === "x") {
          str = str.substr(2);
          if (HEX_NUMBER.test(str)) {
            entity = String.fromCodePoint(parseInt(str, 16));
          }
        } else {
          str = str.substr(1);
          if (DECIMAL_NUMBER.test(str)) {
            entity = String.fromCodePoint(parseInt(str, 10));
          }
        }
      } else {
        entity = entities[str];
      }
      break;
    }
    str += ch;
  }
  if (!entity) {
    return { entity: "&", newI: indexAfterAmpersand };
  }
  return { entity, newI: i };
}
function getNonTypeIdentifiers(tokens, options) {
  const jsxPragmaInfo = getJSXPragmaInfo(options);
  const nonTypeIdentifiers = new Set();
  for (let i = 0; i < tokens.tokens.length; i++) {
    const token = tokens.tokens[i];
    if (token.type === TokenType.name && !token.isType && (token.identifierRole === IdentifierRole.Access || token.identifierRole === IdentifierRole.ObjectShorthand || token.identifierRole === IdentifierRole.ExportAccess) && !token.shadowsGlobal) {
      nonTypeIdentifiers.add(tokens.identifierNameForToken(token));
    }
    if (token.type === TokenType.jsxTagStart) {
      nonTypeIdentifiers.add(jsxPragmaInfo.base);
    }
    if (token.type === TokenType.jsxTagStart && i + 1 < tokens.tokens.length && tokens.tokens[i + 1].type === TokenType.jsxTagEnd) {
      nonTypeIdentifiers.add(jsxPragmaInfo.base);
      nonTypeIdentifiers.add(jsxPragmaInfo.fragmentBase);
    }
    if (token.type === TokenType.jsxName && token.identifierRole === IdentifierRole.Access) {
      const identifierName = tokens.identifierNameForToken(token);
      if (!startsWithLowerCase(identifierName) || tokens.tokens[i + 1].type === TokenType.dot) {
        nonTypeIdentifiers.add(tokens.identifierNameForToken(token));
      }
    }
  }
  return nonTypeIdentifiers;
}
class CJSImportProcessor {
  __init() {
    this.nonTypeIdentifiers = new Set();
  }
  __init2() {
    this.importInfoByPath = new Map();
  }
  __init3() {
    this.importsToReplace = new Map();
  }
  __init4() {
    this.identifierReplacements = new Map();
  }
  __init5() {
    this.exportBindingsByLocalName = new Map();
  }
  constructor(nameManager, tokens, enableLegacyTypeScriptModuleInterop, options, isTypeScriptTransformEnabled, helperManager) {
    this.nameManager = nameManager;
    this.tokens = tokens;
    this.enableLegacyTypeScriptModuleInterop = enableLegacyTypeScriptModuleInterop;
    this.options = options;
    this.isTypeScriptTransformEnabled = isTypeScriptTransformEnabled;
    this.helperManager = helperManager;
    CJSImportProcessor.prototype.__init.call(this);
    CJSImportProcessor.prototype.__init2.call(this);
    CJSImportProcessor.prototype.__init3.call(this);
    CJSImportProcessor.prototype.__init4.call(this);
    CJSImportProcessor.prototype.__init5.call(this);
  }
  preprocessTokens() {
    for (let i = 0; i < this.tokens.tokens.length; i++) {
      if (this.tokens.matches1AtIndex(i, TokenType._import) && !this.tokens.matches3AtIndex(i, TokenType._import, TokenType.name, TokenType.eq)) {
        this.preprocessImportAtIndex(i);
      }
      if (this.tokens.matches1AtIndex(i, TokenType._export) && !this.tokens.matches2AtIndex(i, TokenType._export, TokenType.eq)) {
        this.preprocessExportAtIndex(i);
      }
    }
    this.generateImportReplacements();
  }
  pruneTypeOnlyImports() {
    this.nonTypeIdentifiers = getNonTypeIdentifiers(this.tokens, this.options);
    for (const [path, importInfo] of this.importInfoByPath.entries()) {
      if (importInfo.hasBareImport || importInfo.hasStarExport || importInfo.exportStarNames.length > 0 || importInfo.namedExports.length > 0) {
        continue;
      }
      const names = [
        ...importInfo.defaultNames,
        ...importInfo.wildcardNames,
        ...importInfo.namedImports.map(({ localName }) => localName)
      ];
      if (names.every((name) => this.isTypeName(name))) {
        this.importsToReplace.set(path, "");
      }
    }
  }
  isTypeName(name) {
    return this.isTypeScriptTransformEnabled && !this.nonTypeIdentifiers.has(name);
  }
  generateImportReplacements() {
    for (const [path, importInfo] of this.importInfoByPath.entries()) {
      const {
        defaultNames,
        wildcardNames,
        namedImports,
        namedExports,
        exportStarNames,
        hasStarExport
      } = importInfo;
      if (defaultNames.length === 0 && wildcardNames.length === 0 && namedImports.length === 0 && namedExports.length === 0 && exportStarNames.length === 0 && !hasStarExport) {
        this.importsToReplace.set(path, `require('${path}');`);
        continue;
      }
      const primaryImportName = this.getFreeIdentifierForPath(path);
      let secondaryImportName;
      if (this.enableLegacyTypeScriptModuleInterop) {
        secondaryImportName = primaryImportName;
      } else {
        secondaryImportName = wildcardNames.length > 0 ? wildcardNames[0] : this.getFreeIdentifierForPath(path);
      }
      let requireCode = `var ${primaryImportName} = require('${path}');`;
      if (wildcardNames.length > 0) {
        for (const wildcardName of wildcardNames) {
          const moduleExpr = this.enableLegacyTypeScriptModuleInterop ? primaryImportName : `${this.helperManager.getHelperName("interopRequireWildcard")}(${primaryImportName})`;
          requireCode += ` var ${wildcardName} = ${moduleExpr};`;
        }
      } else if (exportStarNames.length > 0 && secondaryImportName !== primaryImportName) {
        requireCode += ` var ${secondaryImportName} = ${this.helperManager.getHelperName("interopRequireWildcard")}(${primaryImportName});`;
      } else if (defaultNames.length > 0 && secondaryImportName !== primaryImportName) {
        requireCode += ` var ${secondaryImportName} = ${this.helperManager.getHelperName("interopRequireDefault")}(${primaryImportName});`;
      }
      for (const { importedName, localName } of namedExports) {
        requireCode += ` ${this.helperManager.getHelperName("createNamedExportFrom")}(${primaryImportName}, '${localName}', '${importedName}');`;
      }
      for (const exportStarName of exportStarNames) {
        requireCode += ` exports.${exportStarName} = ${secondaryImportName};`;
      }
      if (hasStarExport) {
        requireCode += ` ${this.helperManager.getHelperName("createStarExport")}(${primaryImportName});`;
      }
      this.importsToReplace.set(path, requireCode);
      for (const defaultName of defaultNames) {
        this.identifierReplacements.set(defaultName, `${secondaryImportName}.default`);
      }
      for (const { importedName, localName } of namedImports) {
        this.identifierReplacements.set(localName, `${primaryImportName}.${importedName}`);
      }
    }
  }
  getFreeIdentifierForPath(path) {
    const components = path.split("/");
    const lastComponent = components[components.length - 1];
    const baseName = lastComponent.replace(/\W/g, "");
    return this.nameManager.claimFreeName(`_${baseName}`);
  }
  preprocessImportAtIndex(index) {
    const defaultNames = [];
    const wildcardNames = [];
    const namedImports = [];
    index++;
    if ((this.tokens.matchesContextualAtIndex(index, ContextualKeyword._type) || this.tokens.matches1AtIndex(index, TokenType._typeof)) && !this.tokens.matches1AtIndex(index + 1, TokenType.comma) && !this.tokens.matchesContextualAtIndex(index + 1, ContextualKeyword._from)) {
      return;
    }
    if (this.tokens.matches1AtIndex(index, TokenType.parenL)) {
      return;
    }
    if (this.tokens.matches1AtIndex(index, TokenType.name)) {
      defaultNames.push(this.tokens.identifierNameAtIndex(index));
      index++;
      if (this.tokens.matches1AtIndex(index, TokenType.comma)) {
        index++;
      }
    }
    if (this.tokens.matches1AtIndex(index, TokenType.star)) {
      index += 2;
      wildcardNames.push(this.tokens.identifierNameAtIndex(index));
      index++;
    }
    if (this.tokens.matches1AtIndex(index, TokenType.braceL)) {
      const result = this.getNamedImports(index + 1);
      index = result.newIndex;
      for (const namedImport of result.namedImports) {
        if (namedImport.importedName === "default") {
          defaultNames.push(namedImport.localName);
        } else {
          namedImports.push(namedImport);
        }
      }
    }
    if (this.tokens.matchesContextualAtIndex(index, ContextualKeyword._from)) {
      index++;
    }
    if (!this.tokens.matches1AtIndex(index, TokenType.string)) {
      throw new Error("Expected string token at the end of import statement.");
    }
    const path = this.tokens.stringValueAtIndex(index);
    const importInfo = this.getImportInfo(path);
    importInfo.defaultNames.push(...defaultNames);
    importInfo.wildcardNames.push(...wildcardNames);
    importInfo.namedImports.push(...namedImports);
    if (defaultNames.length === 0 && wildcardNames.length === 0 && namedImports.length === 0) {
      importInfo.hasBareImport = true;
    }
  }
  preprocessExportAtIndex(index) {
    if (this.tokens.matches2AtIndex(index, TokenType._export, TokenType._var) || this.tokens.matches2AtIndex(index, TokenType._export, TokenType._let) || this.tokens.matches2AtIndex(index, TokenType._export, TokenType._const)) {
      this.preprocessVarExportAtIndex(index);
    } else if (this.tokens.matches2AtIndex(index, TokenType._export, TokenType._function) || this.tokens.matches2AtIndex(index, TokenType._export, TokenType._class)) {
      const exportName = this.tokens.identifierNameAtIndex(index + 2);
      this.addExportBinding(exportName, exportName);
    } else if (this.tokens.matches3AtIndex(index, TokenType._export, TokenType.name, TokenType._function)) {
      const exportName = this.tokens.identifierNameAtIndex(index + 3);
      this.addExportBinding(exportName, exportName);
    } else if (this.tokens.matches2AtIndex(index, TokenType._export, TokenType.braceL)) {
      this.preprocessNamedExportAtIndex(index);
    } else if (this.tokens.matches2AtIndex(index, TokenType._export, TokenType.star)) {
      this.preprocessExportStarAtIndex(index);
    }
  }
  preprocessVarExportAtIndex(index) {
    let depth = 0;
    for (let i = index + 2; ; i++) {
      if (this.tokens.matches1AtIndex(i, TokenType.braceL) || this.tokens.matches1AtIndex(i, TokenType.dollarBraceL) || this.tokens.matches1AtIndex(i, TokenType.bracketL)) {
        depth++;
      } else if (this.tokens.matches1AtIndex(i, TokenType.braceR) || this.tokens.matches1AtIndex(i, TokenType.bracketR)) {
        depth--;
      } else if (depth === 0 && !this.tokens.matches1AtIndex(i, TokenType.name)) {
        break;
      } else if (this.tokens.matches1AtIndex(1, TokenType.eq)) {
        const endIndex = this.tokens.currentToken().rhsEndIndex;
        if (endIndex == null) {
          throw new Error("Expected = token with an end index.");
        }
        i = endIndex - 1;
      } else {
        const token = this.tokens.tokens[i];
        if (isDeclaration(token)) {
          const exportName = this.tokens.identifierNameAtIndex(i);
          this.identifierReplacements.set(exportName, `exports.${exportName}`);
        }
      }
    }
  }
  preprocessNamedExportAtIndex(index) {
    index += 2;
    const { newIndex, namedImports } = this.getNamedImports(index);
    index = newIndex;
    if (this.tokens.matchesContextualAtIndex(index, ContextualKeyword._from)) {
      index++;
    } else {
      for (const { importedName: localName, localName: exportedName } of namedImports) {
        this.addExportBinding(localName, exportedName);
      }
      return;
    }
    if (!this.tokens.matches1AtIndex(index, TokenType.string)) {
      throw new Error("Expected string token at the end of import statement.");
    }
    const path = this.tokens.stringValueAtIndex(index);
    const importInfo = this.getImportInfo(path);
    importInfo.namedExports.push(...namedImports);
  }
  preprocessExportStarAtIndex(index) {
    let exportedName = null;
    if (this.tokens.matches3AtIndex(index, TokenType._export, TokenType.star, TokenType._as)) {
      index += 3;
      exportedName = this.tokens.identifierNameAtIndex(index);
      index += 2;
    } else {
      index += 3;
    }
    if (!this.tokens.matches1AtIndex(index, TokenType.string)) {
      throw new Error("Expected string token at the end of star export statement.");
    }
    const path = this.tokens.stringValueAtIndex(index);
    const importInfo = this.getImportInfo(path);
    if (exportedName !== null) {
      importInfo.exportStarNames.push(exportedName);
    } else {
      importInfo.hasStarExport = true;
    }
  }
  getNamedImports(index) {
    const namedImports = [];
    while (true) {
      if (this.tokens.matches1AtIndex(index, TokenType.braceR)) {
        index++;
        break;
      }
      let isTypeImport = false;
      if ((this.tokens.matchesContextualAtIndex(index, ContextualKeyword._type) || this.tokens.matches1AtIndex(index, TokenType._typeof)) && this.tokens.matches1AtIndex(index + 1, TokenType.name) && !this.tokens.matchesContextualAtIndex(index + 1, ContextualKeyword._as)) {
        isTypeImport = true;
        index++;
      }
      const importedName = this.tokens.identifierNameAtIndex(index);
      let localName;
      index++;
      if (this.tokens.matchesContextualAtIndex(index, ContextualKeyword._as)) {
        index++;
        localName = this.tokens.identifierNameAtIndex(index);
        index++;
      } else {
        localName = importedName;
      }
      if (!isTypeImport) {
        namedImports.push({ importedName, localName });
      }
      if (this.tokens.matches2AtIndex(index, TokenType.comma, TokenType.braceR)) {
        index += 2;
        break;
      } else if (this.tokens.matches1AtIndex(index, TokenType.braceR)) {
        index++;
        break;
      } else if (this.tokens.matches1AtIndex(index, TokenType.comma)) {
        index++;
      } else {
        throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[index])}`);
      }
    }
    return { newIndex: index, namedImports };
  }
  getImportInfo(path) {
    const existingInfo = this.importInfoByPath.get(path);
    if (existingInfo) {
      return existingInfo;
    }
    const newInfo = {
      defaultNames: [],
      wildcardNames: [],
      namedImports: [],
      namedExports: [],
      hasBareImport: false,
      exportStarNames: [],
      hasStarExport: false
    };
    this.importInfoByPath.set(path, newInfo);
    return newInfo;
  }
  addExportBinding(localName, exportedName) {
    if (!this.exportBindingsByLocalName.has(localName)) {
      this.exportBindingsByLocalName.set(localName, []);
    }
    this.exportBindingsByLocalName.get(localName).push(exportedName);
  }
  claimImportCode(importPath) {
    const result = this.importsToReplace.get(importPath);
    this.importsToReplace.set(importPath, "");
    return result || "";
  }
  getIdentifierReplacement(identifierName) {
    return this.identifierReplacements.get(identifierName) || null;
  }
  resolveExportBinding(assignedName) {
    const exportedNames = this.exportBindingsByLocalName.get(assignedName);
    if (!exportedNames || exportedNames.length === 0) {
      return null;
    }
    return exportedNames.map((exportedName) => `exports.${exportedName}`).join(" = ");
  }
  getGlobalNames() {
    return new Set([
      ...this.identifierReplacements.keys(),
      ...this.exportBindingsByLocalName.keys()
    ]);
  }
}
function computeSourceMap(code, filePath, { compiledFilename }) {
  let mappings = "AAAA";
  for (let i = 0; i < code.length; i++) {
    if (code.charCodeAt(i) === charCodes.lineFeed) {
      mappings += ";AACA";
    }
  }
  return {
    version: 3,
    file: compiledFilename || "",
    sources: [filePath],
    mappings,
    names: []
  };
}
const HELPERS = {
  interopRequireWildcard: `
    function interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
  `,
  interopRequireDefault: `
    function interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  `,
  createNamedExportFrom: `
    function createNamedExportFrom(obj, localName, importedName) {
      Object.defineProperty(exports, localName, {enumerable: true, get: () => obj[importedName]});
    }
  `,
  createStarExport: `
    function createStarExport(obj) {
      Object.keys(obj)
        .filter((key) => key !== "default" && key !== "__esModule")
        .forEach((key) => {
          if (exports.hasOwnProperty(key)) {
            return;
          }
          Object.defineProperty(exports, key, {enumerable: true, get: () => obj[key]});
        });
    }
  `,
  nullishCoalesce: `
    function nullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
  `,
  asyncNullishCoalesce: `
    async function asyncNullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return await rhsFn();
      }
    }
  `,
  optionalChain: `
    function optionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
  asyncOptionalChain: `
    async function asyncOptionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = await fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = await fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
  optionalChainDelete: `
    function optionalChainDelete(ops) {
      const result = OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,
  asyncOptionalChainDelete: `
    async function asyncOptionalChainDelete(ops) {
      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `
};
class HelperManager {
  __init() {
    this.helperNames = {};
  }
  constructor(nameManager) {
    this.nameManager = nameManager;
    HelperManager.prototype.__init.call(this);
  }
  getHelperName(baseName) {
    let helperName = this.helperNames[baseName];
    if (helperName) {
      return helperName;
    }
    helperName = this.nameManager.claimFreeName(`_${baseName}`);
    this.helperNames[baseName] = helperName;
    return helperName;
  }
  emitHelpers() {
    let resultCode = "";
    if (this.helperNames.optionalChainDelete) {
      this.getHelperName("optionalChain");
    }
    if (this.helperNames.asyncOptionalChainDelete) {
      this.getHelperName("asyncOptionalChain");
    }
    for (const [baseName, helperCodeTemplate] of Object.entries(HELPERS)) {
      const helperName = this.helperNames[baseName];
      let helperCode = helperCodeTemplate;
      if (baseName === "optionalChainDelete") {
        helperCode = helperCode.replace("OPTIONAL_CHAIN_NAME", this.helperNames.optionalChain);
      } else if (baseName === "asyncOptionalChainDelete") {
        helperCode = helperCode.replace("ASYNC_OPTIONAL_CHAIN_NAME", this.helperNames.asyncOptionalChain);
      }
      if (helperName) {
        resultCode += " ";
        resultCode += helperCode.replace(baseName, helperName).replace(/\s+/g, " ").trim();
      }
    }
    return resultCode;
  }
}
function identifyShadowedGlobals(tokens, scopes, globalNames) {
  if (!hasShadowedGlobals(tokens, globalNames)) {
    return;
  }
  markShadowedGlobals(tokens, scopes, globalNames);
}
function hasShadowedGlobals(tokens, globalNames) {
  for (const token of tokens.tokens) {
    if (token.type === TokenType.name && isNonTopLevelDeclaration(token) && globalNames.has(tokens.identifierNameForToken(token))) {
      return true;
    }
  }
  return false;
}
function markShadowedGlobals(tokens, scopes, globalNames) {
  const scopeStack = [];
  let scopeIndex = scopes.length - 1;
  for (let i = tokens.tokens.length - 1; ; i--) {
    while (scopeStack.length > 0 && scopeStack[scopeStack.length - 1].startTokenIndex === i + 1) {
      scopeStack.pop();
    }
    while (scopeIndex >= 0 && scopes[scopeIndex].endTokenIndex === i + 1) {
      scopeStack.push(scopes[scopeIndex]);
      scopeIndex--;
    }
    if (i < 0) {
      break;
    }
    const token = tokens.tokens[i];
    const name = tokens.identifierNameForToken(token);
    if (scopeStack.length > 1 && token.type === TokenType.name && globalNames.has(name)) {
      if (isBlockScopedDeclaration(token)) {
        markShadowedForScope(scopeStack[scopeStack.length - 1], tokens, name);
      } else if (isFunctionScopedDeclaration(token)) {
        let stackIndex = scopeStack.length - 1;
        while (stackIndex > 0 && !scopeStack[stackIndex].isFunctionScope) {
          stackIndex--;
        }
        if (stackIndex < 0) {
          throw new Error("Did not find parent function scope.");
        }
        markShadowedForScope(scopeStack[stackIndex], tokens, name);
      }
    }
  }
  if (scopeStack.length > 0) {
    throw new Error("Expected empty scope stack after processing file.");
  }
}
function markShadowedForScope(scope, tokens, name) {
  for (let i = scope.startTokenIndex; i < scope.endTokenIndex; i++) {
    const token = tokens.tokens[i];
    if ((token.type === TokenType.name || token.type === TokenType.jsxName) && tokens.identifierNameForToken(token) === name) {
      token.shadowsGlobal = true;
    }
  }
}
function getIdentifierNames(code, tokens) {
  const names = [];
  for (const token of tokens) {
    if (token.type === TokenType.name) {
      names.push(code.slice(token.start, token.end));
    }
  }
  return names;
}
class NameManager {
  __init() {
    this.usedNames = new Set();
  }
  constructor(code, tokens) {
    NameManager.prototype.__init.call(this);
    this.usedNames = new Set(getIdentifierNames(code, tokens));
  }
  claimFreeName(name) {
    const newName = this.findFreeName(name);
    this.usedNames.add(newName);
    return newName;
  }
  findFreeName(name) {
    if (!this.usedNames.has(name)) {
      return name;
    }
    let suffixNum = 2;
    while (this.usedNames.has(name + String(suffixNum))) {
      suffixNum++;
    }
    return name + String(suffixNum);
  }
}
var dist = {};
var types = {};
var util = {};
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(util, "__esModule", { value: true });
util.DetailContext = util.NoopContext = util.VError = void 0;
var VError = function(_super) {
  __extends(VError2, _super);
  function VError2(path, message) {
    var _this = _super.call(this, message) || this;
    _this.path = path;
    Object.setPrototypeOf(_this, VError2.prototype);
    return _this;
  }
  return VError2;
}(Error);
util.VError = VError;
var NoopContext = function() {
  function NoopContext2() {
  }
  NoopContext2.prototype.fail = function(relPath, message, score) {
    return false;
  };
  NoopContext2.prototype.unionResolver = function() {
    return this;
  };
  NoopContext2.prototype.createContext = function() {
    return this;
  };
  NoopContext2.prototype.resolveUnion = function(ur) {
  };
  return NoopContext2;
}();
util.NoopContext = NoopContext;
var DetailContext = function() {
  function DetailContext2() {
    this._propNames = [""];
    this._messages = [null];
    this._score = 0;
  }
  DetailContext2.prototype.fail = function(relPath, message, score) {
    this._propNames.push(relPath);
    this._messages.push(message);
    this._score += score;
    return false;
  };
  DetailContext2.prototype.unionResolver = function() {
    return new DetailUnionResolver();
  };
  DetailContext2.prototype.resolveUnion = function(unionResolver) {
    var _a, _b;
    var u = unionResolver;
    var best = null;
    for (var _i = 0, _c = u.contexts; _i < _c.length; _i++) {
      var ctx = _c[_i];
      if (!best || ctx._score >= best._score) {
        best = ctx;
      }
    }
    if (best && best._score > 0) {
      (_a = this._propNames).push.apply(_a, best._propNames);
      (_b = this._messages).push.apply(_b, best._messages);
    }
  };
  DetailContext2.prototype.getError = function(path) {
    var msgParts = [];
    for (var i = this._propNames.length - 1; i >= 0; i--) {
      var p = this._propNames[i];
      path += typeof p === "number" ? "[" + p + "]" : p ? "." + p : "";
      var m = this._messages[i];
      if (m) {
        msgParts.push(path + " " + m);
      }
    }
    return new VError(path, msgParts.join("; "));
  };
  DetailContext2.prototype.getErrorDetail = function(path) {
    var details = [];
    for (var i = this._propNames.length - 1; i >= 0; i--) {
      var p = this._propNames[i];
      path += typeof p === "number" ? "[" + p + "]" : p ? "." + p : "";
      var message = this._messages[i];
      if (message) {
        details.push({ path, message });
      }
    }
    var detail = null;
    for (var i = details.length - 1; i >= 0; i--) {
      if (detail) {
        details[i].nested = [detail];
      }
      detail = details[i];
    }
    return detail;
  };
  return DetailContext2;
}();
util.DetailContext = DetailContext;
var DetailUnionResolver = function() {
  function DetailUnionResolver2() {
    this.contexts = [];
  }
  DetailUnionResolver2.prototype.createContext = function() {
    var ctx = new DetailContext();
    this.contexts.push(ctx);
    return ctx;
  };
  return DetailUnionResolver2;
}();
(function(exports) {
  var __extends2 = commonjsGlobal && commonjsGlobal.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (b2.hasOwnProperty(p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.basicTypes = exports.BasicType = exports.TParamList = exports.TParam = exports.param = exports.TFunc = exports.func = exports.TProp = exports.TOptional = exports.opt = exports.TIface = exports.iface = exports.TEnumLiteral = exports.enumlit = exports.TEnumType = exports.enumtype = exports.TIntersection = exports.intersection = exports.TUnion = exports.union = exports.TTuple = exports.tuple = exports.TArray = exports.array = exports.TLiteral = exports.lit = exports.TName = exports.name = exports.TType = void 0;
  var util_1 = util;
  var TType = function() {
    function TType2() {
    }
    return TType2;
  }();
  exports.TType = TType;
  function parseSpec(typeSpec) {
    return typeof typeSpec === "string" ? name(typeSpec) : typeSpec;
  }
  function getNamedType(suite, name2) {
    var ttype = suite[name2];
    if (!ttype) {
      throw new Error("Unknown type " + name2);
    }
    return ttype;
  }
  function name(value) {
    return new TName(value);
  }
  exports.name = name;
  var TName = function(_super) {
    __extends2(TName2, _super);
    function TName2(name2) {
      var _this = _super.call(this) || this;
      _this.name = name2;
      _this._failMsg = "is not a " + name2;
      return _this;
    }
    TName2.prototype.getChecker = function(suite, strict, allowedProps) {
      var _this = this;
      var ttype = getNamedType(suite, this.name);
      var checker = ttype.getChecker(suite, strict, allowedProps);
      if (ttype instanceof BasicType || ttype instanceof TName2) {
        return checker;
      }
      return function(value, ctx) {
        return checker(value, ctx) ? true : ctx.fail(null, _this._failMsg, 0);
      };
    };
    return TName2;
  }(TType);
  exports.TName = TName;
  function lit(value) {
    return new TLiteral(value);
  }
  exports.lit = lit;
  var TLiteral = function(_super) {
    __extends2(TLiteral2, _super);
    function TLiteral2(value) {
      var _this = _super.call(this) || this;
      _this.value = value;
      _this.name = JSON.stringify(value);
      _this._failMsg = "is not " + _this.name;
      return _this;
    }
    TLiteral2.prototype.getChecker = function(suite, strict) {
      var _this = this;
      return function(value, ctx) {
        return value === _this.value ? true : ctx.fail(null, _this._failMsg, -1);
      };
    };
    return TLiteral2;
  }(TType);
  exports.TLiteral = TLiteral;
  function array(typeSpec) {
    return new TArray(parseSpec(typeSpec));
  }
  exports.array = array;
  var TArray = function(_super) {
    __extends2(TArray2, _super);
    function TArray2(ttype) {
      var _this = _super.call(this) || this;
      _this.ttype = ttype;
      return _this;
    }
    TArray2.prototype.getChecker = function(suite, strict) {
      var itemChecker = this.ttype.getChecker(suite, strict);
      return function(value, ctx) {
        if (!Array.isArray(value)) {
          return ctx.fail(null, "is not an array", 0);
        }
        for (var i = 0; i < value.length; i++) {
          var ok = itemChecker(value[i], ctx);
          if (!ok) {
            return ctx.fail(i, null, 1);
          }
        }
        return true;
      };
    };
    return TArray2;
  }(TType);
  exports.TArray = TArray;
  function tuple() {
    var typeSpec = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      typeSpec[_i2] = arguments[_i2];
    }
    return new TTuple(typeSpec.map(function(t) {
      return parseSpec(t);
    }));
  }
  exports.tuple = tuple;
  var TTuple = function(_super) {
    __extends2(TTuple2, _super);
    function TTuple2(ttypes) {
      var _this = _super.call(this) || this;
      _this.ttypes = ttypes;
      return _this;
    }
    TTuple2.prototype.getChecker = function(suite, strict) {
      var itemCheckers = this.ttypes.map(function(t) {
        return t.getChecker(suite, strict);
      });
      var checker = function(value, ctx) {
        if (!Array.isArray(value)) {
          return ctx.fail(null, "is not an array", 0);
        }
        for (var i = 0; i < itemCheckers.length; i++) {
          var ok = itemCheckers[i](value[i], ctx);
          if (!ok) {
            return ctx.fail(i, null, 1);
          }
        }
        return true;
      };
      if (!strict) {
        return checker;
      }
      return function(value, ctx) {
        if (!checker(value, ctx)) {
          return false;
        }
        return value.length <= itemCheckers.length ? true : ctx.fail(itemCheckers.length, "is extraneous", 2);
      };
    };
    return TTuple2;
  }(TType);
  exports.TTuple = TTuple;
  function union() {
    var typeSpec = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      typeSpec[_i2] = arguments[_i2];
    }
    return new TUnion(typeSpec.map(function(t) {
      return parseSpec(t);
    }));
  }
  exports.union = union;
  var TUnion = function(_super) {
    __extends2(TUnion2, _super);
    function TUnion2(ttypes) {
      var _this = _super.call(this) || this;
      _this.ttypes = ttypes;
      var names = ttypes.map(function(t) {
        return t instanceof TName || t instanceof TLiteral ? t.name : null;
      }).filter(function(n) {
        return n;
      });
      var otherTypes = ttypes.length - names.length;
      if (names.length) {
        if (otherTypes > 0) {
          names.push(otherTypes + " more");
        }
        _this._failMsg = "is none of " + names.join(", ");
      } else {
        _this._failMsg = "is none of " + otherTypes + " types";
      }
      return _this;
    }
    TUnion2.prototype.getChecker = function(suite, strict) {
      var _this = this;
      var itemCheckers = this.ttypes.map(function(t) {
        return t.getChecker(suite, strict);
      });
      return function(value, ctx) {
        var ur = ctx.unionResolver();
        for (var i = 0; i < itemCheckers.length; i++) {
          var ok = itemCheckers[i](value, ur.createContext());
          if (ok) {
            return true;
          }
        }
        ctx.resolveUnion(ur);
        return ctx.fail(null, _this._failMsg, 0);
      };
    };
    return TUnion2;
  }(TType);
  exports.TUnion = TUnion;
  function intersection() {
    var typeSpec = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      typeSpec[_i2] = arguments[_i2];
    }
    return new TIntersection(typeSpec.map(function(t) {
      return parseSpec(t);
    }));
  }
  exports.intersection = intersection;
  var TIntersection = function(_super) {
    __extends2(TIntersection2, _super);
    function TIntersection2(ttypes) {
      var _this = _super.call(this) || this;
      _this.ttypes = ttypes;
      return _this;
    }
    TIntersection2.prototype.getChecker = function(suite, strict) {
      var allowedProps = new Set();
      var itemCheckers = this.ttypes.map(function(t) {
        return t.getChecker(suite, strict, allowedProps);
      });
      return function(value, ctx) {
        var ok = itemCheckers.every(function(checker) {
          return checker(value, ctx);
        });
        if (ok) {
          return true;
        }
        return ctx.fail(null, null, 0);
      };
    };
    return TIntersection2;
  }(TType);
  exports.TIntersection = TIntersection;
  function enumtype(values) {
    return new TEnumType(values);
  }
  exports.enumtype = enumtype;
  var TEnumType = function(_super) {
    __extends2(TEnumType2, _super);
    function TEnumType2(members) {
      var _this = _super.call(this) || this;
      _this.members = members;
      _this.validValues = new Set();
      _this._failMsg = "is not a valid enum value";
      _this.validValues = new Set(Object.keys(members).map(function(name2) {
        return members[name2];
      }));
      return _this;
    }
    TEnumType2.prototype.getChecker = function(suite, strict) {
      var _this = this;
      return function(value, ctx) {
        return _this.validValues.has(value) ? true : ctx.fail(null, _this._failMsg, 0);
      };
    };
    return TEnumType2;
  }(TType);
  exports.TEnumType = TEnumType;
  function enumlit(name2, prop) {
    return new TEnumLiteral(name2, prop);
  }
  exports.enumlit = enumlit;
  var TEnumLiteral = function(_super) {
    __extends2(TEnumLiteral2, _super);
    function TEnumLiteral2(enumName, prop) {
      var _this = _super.call(this) || this;
      _this.enumName = enumName;
      _this.prop = prop;
      _this._failMsg = "is not " + enumName + "." + prop;
      return _this;
    }
    TEnumLiteral2.prototype.getChecker = function(suite, strict) {
      var _this = this;
      var ttype = getNamedType(suite, this.enumName);
      if (!(ttype instanceof TEnumType)) {
        throw new Error("Type " + this.enumName + " used in enumlit is not an enum type");
      }
      var val = ttype.members[this.prop];
      if (!ttype.members.hasOwnProperty(this.prop)) {
        throw new Error("Unknown value " + this.enumName + "." + this.prop + " used in enumlit");
      }
      return function(value, ctx) {
        return value === val ? true : ctx.fail(null, _this._failMsg, -1);
      };
    };
    return TEnumLiteral2;
  }(TType);
  exports.TEnumLiteral = TEnumLiteral;
  function makeIfaceProps(props) {
    return Object.keys(props).map(function(name2) {
      return makeIfaceProp(name2, props[name2]);
    });
  }
  function makeIfaceProp(name2, prop) {
    return prop instanceof TOptional ? new TProp(name2, prop.ttype, true) : new TProp(name2, parseSpec(prop), false);
  }
  function iface(bases, props) {
    return new TIface(bases, makeIfaceProps(props));
  }
  exports.iface = iface;
  var TIface = function(_super) {
    __extends2(TIface2, _super);
    function TIface2(bases, props) {
      var _this = _super.call(this) || this;
      _this.bases = bases;
      _this.props = props;
      _this.propSet = new Set(props.map(function(p) {
        return p.name;
      }));
      return _this;
    }
    TIface2.prototype.getChecker = function(suite, strict, allowedProps) {
      var _this = this;
      var baseCheckers = this.bases.map(function(b) {
        return getNamedType(suite, b).getChecker(suite, strict);
      });
      var propCheckers = this.props.map(function(prop) {
        return prop.ttype.getChecker(suite, strict);
      });
      var testCtx = new util_1.NoopContext();
      var isPropRequired = this.props.map(function(prop, i) {
        return !prop.isOpt && !propCheckers[i](void 0, testCtx);
      });
      var checker = function(value, ctx) {
        if (typeof value !== "object" || value === null) {
          return ctx.fail(null, "is not an object", 0);
        }
        for (var i = 0; i < baseCheckers.length; i++) {
          if (!baseCheckers[i](value, ctx)) {
            return false;
          }
        }
        for (var i = 0; i < propCheckers.length; i++) {
          var name_1 = _this.props[i].name;
          var v = value[name_1];
          if (v === void 0) {
            if (isPropRequired[i]) {
              return ctx.fail(name_1, "is missing", 1);
            }
          } else {
            var ok = propCheckers[i](v, ctx);
            if (!ok) {
              return ctx.fail(name_1, null, 1);
            }
          }
        }
        return true;
      };
      if (!strict) {
        return checker;
      }
      var propSet = this.propSet;
      if (allowedProps) {
        this.propSet.forEach(function(prop) {
          return allowedProps.add(prop);
        });
        propSet = allowedProps;
      }
      return function(value, ctx) {
        if (!checker(value, ctx)) {
          return false;
        }
        for (var prop in value) {
          if (!propSet.has(prop)) {
            return ctx.fail(prop, "is extraneous", 2);
          }
        }
        return true;
      };
    };
    return TIface2;
  }(TType);
  exports.TIface = TIface;
  function opt(typeSpec) {
    return new TOptional(parseSpec(typeSpec));
  }
  exports.opt = opt;
  var TOptional = function(_super) {
    __extends2(TOptional2, _super);
    function TOptional2(ttype) {
      var _this = _super.call(this) || this;
      _this.ttype = ttype;
      return _this;
    }
    TOptional2.prototype.getChecker = function(suite, strict) {
      var itemChecker = this.ttype.getChecker(suite, strict);
      return function(value, ctx) {
        return value === void 0 || itemChecker(value, ctx);
      };
    };
    return TOptional2;
  }(TType);
  exports.TOptional = TOptional;
  var TProp = function() {
    function TProp2(name2, ttype, isOpt) {
      this.name = name2;
      this.ttype = ttype;
      this.isOpt = isOpt;
    }
    return TProp2;
  }();
  exports.TProp = TProp;
  function func(resultSpec) {
    var params = [];
    for (var _i2 = 1; _i2 < arguments.length; _i2++) {
      params[_i2 - 1] = arguments[_i2];
    }
    return new TFunc(new TParamList(params), parseSpec(resultSpec));
  }
  exports.func = func;
  var TFunc = function(_super) {
    __extends2(TFunc2, _super);
    function TFunc2(paramList, result) {
      var _this = _super.call(this) || this;
      _this.paramList = paramList;
      _this.result = result;
      return _this;
    }
    TFunc2.prototype.getChecker = function(suite, strict) {
      return function(value, ctx) {
        return typeof value === "function" ? true : ctx.fail(null, "is not a function", 0);
      };
    };
    return TFunc2;
  }(TType);
  exports.TFunc = TFunc;
  function param(name2, typeSpec, isOpt) {
    return new TParam(name2, parseSpec(typeSpec), Boolean(isOpt));
  }
  exports.param = param;
  var TParam = function() {
    function TParam2(name2, ttype, isOpt) {
      this.name = name2;
      this.ttype = ttype;
      this.isOpt = isOpt;
    }
    return TParam2;
  }();
  exports.TParam = TParam;
  var TParamList = function(_super) {
    __extends2(TParamList2, _super);
    function TParamList2(params) {
      var _this = _super.call(this) || this;
      _this.params = params;
      return _this;
    }
    TParamList2.prototype.getChecker = function(suite, strict) {
      var _this = this;
      var itemCheckers = this.params.map(function(t) {
        return t.ttype.getChecker(suite, strict);
      });
      var testCtx = new util_1.NoopContext();
      var isParamRequired = this.params.map(function(param2, i) {
        return !param2.isOpt && !itemCheckers[i](void 0, testCtx);
      });
      var checker = function(value, ctx) {
        if (!Array.isArray(value)) {
          return ctx.fail(null, "is not an array", 0);
        }
        for (var i = 0; i < itemCheckers.length; i++) {
          var p = _this.params[i];
          if (value[i] === void 0) {
            if (isParamRequired[i]) {
              return ctx.fail(p.name, "is missing", 1);
            }
          } else {
            var ok = itemCheckers[i](value[i], ctx);
            if (!ok) {
              return ctx.fail(p.name, null, 1);
            }
          }
        }
        return true;
      };
      if (!strict) {
        return checker;
      }
      return function(value, ctx) {
        if (!checker(value, ctx)) {
          return false;
        }
        return value.length <= itemCheckers.length ? true : ctx.fail(itemCheckers.length, "is extraneous", 2);
      };
    };
    return TParamList2;
  }(TType);
  exports.TParamList = TParamList;
  var BasicType = function(_super) {
    __extends2(BasicType2, _super);
    function BasicType2(validator, message) {
      var _this = _super.call(this) || this;
      _this.validator = validator;
      _this.message = message;
      return _this;
    }
    BasicType2.prototype.getChecker = function(suite, strict) {
      var _this = this;
      return function(value, ctx) {
        return _this.validator(value) ? true : ctx.fail(null, _this.message, 0);
      };
    };
    return BasicType2;
  }(TType);
  exports.BasicType = BasicType;
  exports.basicTypes = {
    any: new BasicType(function(v) {
      return true;
    }, "is invalid"),
    number: new BasicType(function(v) {
      return typeof v === "number";
    }, "is not a number"),
    object: new BasicType(function(v) {
      return typeof v === "object" && v;
    }, "is not an object"),
    boolean: new BasicType(function(v) {
      return typeof v === "boolean";
    }, "is not a boolean"),
    string: new BasicType(function(v) {
      return typeof v === "string";
    }, "is not a string"),
    symbol: new BasicType(function(v) {
      return typeof v === "symbol";
    }, "is not a symbol"),
    void: new BasicType(function(v) {
      return v == null;
    }, "is not void"),
    undefined: new BasicType(function(v) {
      return v === void 0;
    }, "is not undefined"),
    null: new BasicType(function(v) {
      return v === null;
    }, "is not null"),
    never: new BasicType(function(v) {
      return false;
    }, "is unexpected"),
    Date: new BasicType(getIsNativeChecker("[object Date]"), "is not a Date"),
    RegExp: new BasicType(getIsNativeChecker("[object RegExp]"), "is not a RegExp")
  };
  var nativeToString = Object.prototype.toString;
  function getIsNativeChecker(tag) {
    return function(v) {
      return typeof v === "object" && v && nativeToString.call(v) === tag;
    };
  }
  if (typeof Buffer !== "undefined") {
    exports.basicTypes.Buffer = new BasicType(function(v) {
      return Buffer.isBuffer(v);
    }, "is not a Buffer");
  }
  var _loop_1 = function(array_12) {
    exports.basicTypes[array_12.name] = new BasicType(function(v) {
      return v instanceof array_12;
    }, "is not a " + array_12.name);
  };
  for (var _i = 0, _a = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    ArrayBuffer
  ]; _i < _a.length; _i++) {
    var array_1 = _a[_i];
    _loop_1(array_1);
  }
})(types);
(function(exports) {
  var __spreadArrays = commonjsGlobal && commonjsGlobal.__spreadArrays || function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Checker = exports.createCheckers = void 0;
  var types_1 = types;
  var util_1 = util;
  var types_2 = types;
  Object.defineProperty(exports, "TArray", { enumerable: true, get: function() {
    return types_2.TArray;
  } });
  Object.defineProperty(exports, "TEnumType", { enumerable: true, get: function() {
    return types_2.TEnumType;
  } });
  Object.defineProperty(exports, "TEnumLiteral", { enumerable: true, get: function() {
    return types_2.TEnumLiteral;
  } });
  Object.defineProperty(exports, "TFunc", { enumerable: true, get: function() {
    return types_2.TFunc;
  } });
  Object.defineProperty(exports, "TIface", { enumerable: true, get: function() {
    return types_2.TIface;
  } });
  Object.defineProperty(exports, "TLiteral", { enumerable: true, get: function() {
    return types_2.TLiteral;
  } });
  Object.defineProperty(exports, "TName", { enumerable: true, get: function() {
    return types_2.TName;
  } });
  Object.defineProperty(exports, "TOptional", { enumerable: true, get: function() {
    return types_2.TOptional;
  } });
  Object.defineProperty(exports, "TParam", { enumerable: true, get: function() {
    return types_2.TParam;
  } });
  Object.defineProperty(exports, "TParamList", { enumerable: true, get: function() {
    return types_2.TParamList;
  } });
  Object.defineProperty(exports, "TProp", { enumerable: true, get: function() {
    return types_2.TProp;
  } });
  Object.defineProperty(exports, "TTuple", { enumerable: true, get: function() {
    return types_2.TTuple;
  } });
  Object.defineProperty(exports, "TType", { enumerable: true, get: function() {
    return types_2.TType;
  } });
  Object.defineProperty(exports, "TUnion", { enumerable: true, get: function() {
    return types_2.TUnion;
  } });
  Object.defineProperty(exports, "TIntersection", { enumerable: true, get: function() {
    return types_2.TIntersection;
  } });
  Object.defineProperty(exports, "array", { enumerable: true, get: function() {
    return types_2.array;
  } });
  Object.defineProperty(exports, "enumlit", { enumerable: true, get: function() {
    return types_2.enumlit;
  } });
  Object.defineProperty(exports, "enumtype", { enumerable: true, get: function() {
    return types_2.enumtype;
  } });
  Object.defineProperty(exports, "func", { enumerable: true, get: function() {
    return types_2.func;
  } });
  Object.defineProperty(exports, "iface", { enumerable: true, get: function() {
    return types_2.iface;
  } });
  Object.defineProperty(exports, "lit", { enumerable: true, get: function() {
    return types_2.lit;
  } });
  Object.defineProperty(exports, "name", { enumerable: true, get: function() {
    return types_2.name;
  } });
  Object.defineProperty(exports, "opt", { enumerable: true, get: function() {
    return types_2.opt;
  } });
  Object.defineProperty(exports, "param", { enumerable: true, get: function() {
    return types_2.param;
  } });
  Object.defineProperty(exports, "tuple", { enumerable: true, get: function() {
    return types_2.tuple;
  } });
  Object.defineProperty(exports, "union", { enumerable: true, get: function() {
    return types_2.union;
  } });
  Object.defineProperty(exports, "intersection", { enumerable: true, get: function() {
    return types_2.intersection;
  } });
  Object.defineProperty(exports, "BasicType", { enumerable: true, get: function() {
    return types_2.BasicType;
  } });
  var util_2 = util;
  Object.defineProperty(exports, "VError", { enumerable: true, get: function() {
    return util_2.VError;
  } });
  function createCheckers() {
    var typeSuite = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      typeSuite[_i] = arguments[_i];
    }
    var fullSuite = Object.assign.apply(Object, __spreadArrays([{}, types_1.basicTypes], typeSuite));
    var checkers = {};
    for (var _a = 0, typeSuite_1 = typeSuite; _a < typeSuite_1.length; _a++) {
      var suite_1 = typeSuite_1[_a];
      for (var _b = 0, _c = Object.keys(suite_1); _b < _c.length; _b++) {
        var name = _c[_b];
        checkers[name] = new Checker(fullSuite, suite_1[name]);
      }
    }
    return checkers;
  }
  exports.createCheckers = createCheckers;
  var Checker = function() {
    function Checker2(suite, ttype, _path) {
      if (_path === void 0) {
        _path = "value";
      }
      this.suite = suite;
      this.ttype = ttype;
      this._path = _path;
      this.props = new Map();
      if (ttype instanceof types_1.TIface) {
        for (var _i = 0, _a = ttype.props; _i < _a.length; _i++) {
          var p = _a[_i];
          this.props.set(p.name, p.ttype);
        }
      }
      this.checkerPlain = this.ttype.getChecker(suite, false);
      this.checkerStrict = this.ttype.getChecker(suite, true);
    }
    Checker2.prototype.setReportedPath = function(path) {
      this._path = path;
    };
    Checker2.prototype.check = function(value) {
      return this._doCheck(this.checkerPlain, value);
    };
    Checker2.prototype.test = function(value) {
      return this.checkerPlain(value, new util_1.NoopContext());
    };
    Checker2.prototype.validate = function(value) {
      return this._doValidate(this.checkerPlain, value);
    };
    Checker2.prototype.strictCheck = function(value) {
      return this._doCheck(this.checkerStrict, value);
    };
    Checker2.prototype.strictTest = function(value) {
      return this.checkerStrict(value, new util_1.NoopContext());
    };
    Checker2.prototype.strictValidate = function(value) {
      return this._doValidate(this.checkerStrict, value);
    };
    Checker2.prototype.getProp = function(prop) {
      var ttype = this.props.get(prop);
      if (!ttype) {
        throw new Error("Type has no property " + prop);
      }
      return new Checker2(this.suite, ttype, this._path + "." + prop);
    };
    Checker2.prototype.methodArgs = function(methodName) {
      var tfunc = this._getMethod(methodName);
      return new Checker2(this.suite, tfunc.paramList);
    };
    Checker2.prototype.methodResult = function(methodName) {
      var tfunc = this._getMethod(methodName);
      return new Checker2(this.suite, tfunc.result);
    };
    Checker2.prototype.getArgs = function() {
      if (!(this.ttype instanceof types_1.TFunc)) {
        throw new Error("getArgs() applied to non-function");
      }
      return new Checker2(this.suite, this.ttype.paramList);
    };
    Checker2.prototype.getResult = function() {
      if (!(this.ttype instanceof types_1.TFunc)) {
        throw new Error("getResult() applied to non-function");
      }
      return new Checker2(this.suite, this.ttype.result);
    };
    Checker2.prototype.getType = function() {
      return this.ttype;
    };
    Checker2.prototype._doCheck = function(checkerFunc, value) {
      var noopCtx = new util_1.NoopContext();
      if (!checkerFunc(value, noopCtx)) {
        var detailCtx = new util_1.DetailContext();
        checkerFunc(value, detailCtx);
        throw detailCtx.getError(this._path);
      }
    };
    Checker2.prototype._doValidate = function(checkerFunc, value) {
      var noopCtx = new util_1.NoopContext();
      if (checkerFunc(value, noopCtx)) {
        return null;
      }
      var detailCtx = new util_1.DetailContext();
      checkerFunc(value, detailCtx);
      return detailCtx.getErrorDetail(this._path);
    };
    Checker2.prototype._getMethod = function(methodName) {
      var ttype = this.props.get(methodName);
      if (!ttype) {
        throw new Error("Type has no property " + methodName);
      }
      if (!(ttype instanceof types_1.TFunc)) {
        throw new Error("Property " + methodName + " is not a method");
      }
      return ttype;
    };
    return Checker2;
  }();
  exports.Checker = Checker;
})(dist);
const Transform = dist.union(dist.lit("jsx"), dist.lit("typescript"), dist.lit("flow"), dist.lit("imports"), dist.lit("react-hot-loader"), dist.lit("jest"));
const SourceMapOptions = dist.iface([], {
  compiledFilename: "string"
});
const Options = dist.iface([], {
  transforms: dist.array("Transform"),
  jsxPragma: dist.opt("string"),
  jsxFragmentPragma: dist.opt("string"),
  enableLegacyTypeScriptModuleInterop: dist.opt("boolean"),
  enableLegacyBabel5ModuleInterop: dist.opt("boolean"),
  sourceMapOptions: dist.opt("SourceMapOptions"),
  filePath: dist.opt("string"),
  production: dist.opt("boolean"),
  disableESTransforms: dist.opt("boolean")
});
const exportedTypeSuite = {
  Transform,
  SourceMapOptions,
  Options
};
const { Options: OptionsChecker } = dist.createCheckers(exportedTypeSuite);
function validateOptions(options) {
  OptionsChecker.strictCheck(options);
}
function parseSpread() {
  next();
  parseMaybeAssign(false);
}
function parseRest(isBlockScope) {
  next();
  parseBindingAtom(isBlockScope);
}
function parseBindingIdentifier(isBlockScope) {
  parseIdentifier();
  markPriorBindingIdentifier(isBlockScope);
}
function parseImportedIdentifier() {
  parseIdentifier();
  state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.ImportDeclaration;
}
function markPriorBindingIdentifier(isBlockScope) {
  let identifierRole;
  if (state.scopeDepth === 0) {
    identifierRole = IdentifierRole.TopLevelDeclaration;
  } else if (isBlockScope) {
    identifierRole = IdentifierRole.BlockScopedDeclaration;
  } else {
    identifierRole = IdentifierRole.FunctionScopedDeclaration;
  }
  state.tokens[state.tokens.length - 1].identifierRole = identifierRole;
}
function parseBindingAtom(isBlockScope) {
  switch (state.type) {
    case TokenType._this: {
      const oldIsType = pushTypeContext(0);
      next();
      popTypeContext(oldIsType);
      return;
    }
    case TokenType._yield:
    case TokenType.name: {
      state.type = TokenType.name;
      parseBindingIdentifier(isBlockScope);
      return;
    }
    case TokenType.bracketL: {
      next();
      parseBindingList(TokenType.bracketR, isBlockScope, true);
      return;
    }
    case TokenType.braceL:
      parseObj(true, isBlockScope);
      return;
    default:
      unexpected();
  }
}
function parseBindingList(close, isBlockScope, allowEmpty = false, allowModifiers = false, contextId = 0) {
  let first = true;
  let hasRemovedComma = false;
  const firstItemTokenIndex = state.tokens.length;
  while (!eat(close) && !state.error) {
    if (first) {
      first = false;
    } else {
      expect(TokenType.comma);
      state.tokens[state.tokens.length - 1].contextId = contextId;
      if (!hasRemovedComma && state.tokens[firstItemTokenIndex].isType) {
        state.tokens[state.tokens.length - 1].isType = true;
        hasRemovedComma = true;
      }
    }
    if (allowEmpty && match(TokenType.comma))
      ;
    else if (eat(close)) {
      break;
    } else if (match(TokenType.ellipsis)) {
      parseRest(isBlockScope);
      parseAssignableListItemTypes();
      eat(TokenType.comma);
      expect(close);
      break;
    } else {
      parseAssignableListItem(allowModifiers, isBlockScope);
    }
  }
}
function parseAssignableListItem(allowModifiers, isBlockScope) {
  if (allowModifiers) {
    tsParseModifiers([
      ContextualKeyword._public,
      ContextualKeyword._protected,
      ContextualKeyword._private,
      ContextualKeyword._readonly,
      ContextualKeyword._override
    ]);
  }
  parseMaybeDefault(isBlockScope);
  parseAssignableListItemTypes();
  parseMaybeDefault(isBlockScope, true);
}
function parseAssignableListItemTypes() {
  if (isFlowEnabled) {
    flowParseAssignableListItemTypes();
  } else if (isTypeScriptEnabled) {
    tsParseAssignableListItemTypes();
  }
}
function parseMaybeDefault(isBlockScope, leftAlreadyParsed = false) {
  if (!leftAlreadyParsed) {
    parseBindingAtom(isBlockScope);
  }
  if (!eat(TokenType.eq)) {
    return;
  }
  const eqIndex = state.tokens.length - 1;
  parseMaybeAssign();
  state.tokens[eqIndex].rhsEndIndex = state.tokens.length;
}
function tsIsIdentifier() {
  return match(TokenType.name);
}
function isLiteralPropertyName() {
  return match(TokenType.name) || Boolean(state.type & TokenType.IS_KEYWORD) || match(TokenType.string) || match(TokenType.num) || match(TokenType.bigint) || match(TokenType.decimal);
}
function tsNextTokenCanFollowModifier() {
  const snapshot = state.snapshot();
  next();
  const canFollowModifier = (match(TokenType.bracketL) || match(TokenType.braceL) || match(TokenType.star) || match(TokenType.ellipsis) || match(TokenType.hash) || isLiteralPropertyName()) && !hasPrecedingLineBreak();
  if (canFollowModifier) {
    return true;
  } else {
    state.restoreFromSnapshot(snapshot);
    return false;
  }
}
function tsParseModifiers(allowedModifiers) {
  while (true) {
    const modifier = tsParseModifier(allowedModifiers);
    if (modifier === null) {
      break;
    }
  }
}
function tsParseModifier(allowedModifiers) {
  if (!match(TokenType.name)) {
    return null;
  }
  const modifier = state.contextualKeyword;
  if (allowedModifiers.indexOf(modifier) !== -1 && tsNextTokenCanFollowModifier()) {
    switch (modifier) {
      case ContextualKeyword._readonly:
        state.tokens[state.tokens.length - 1].type = TokenType._readonly;
        break;
      case ContextualKeyword._abstract:
        state.tokens[state.tokens.length - 1].type = TokenType._abstract;
        break;
      case ContextualKeyword._static:
        state.tokens[state.tokens.length - 1].type = TokenType._static;
        break;
      case ContextualKeyword._public:
        state.tokens[state.tokens.length - 1].type = TokenType._public;
        break;
      case ContextualKeyword._private:
        state.tokens[state.tokens.length - 1].type = TokenType._private;
        break;
      case ContextualKeyword._protected:
        state.tokens[state.tokens.length - 1].type = TokenType._protected;
        break;
      case ContextualKeyword._override:
        state.tokens[state.tokens.length - 1].type = TokenType._override;
        break;
      case ContextualKeyword._declare:
        state.tokens[state.tokens.length - 1].type = TokenType._declare;
        break;
    }
    return modifier;
  }
  return null;
}
function tsParseEntityName() {
  parseIdentifier();
  while (eat(TokenType.dot)) {
    parseIdentifier();
  }
}
function tsParseTypeReference() {
  tsParseEntityName();
  if (!hasPrecedingLineBreak() && match(TokenType.lessThan)) {
    tsParseTypeArguments();
  }
}
function tsParseThisTypePredicate() {
  next();
  tsParseTypeAnnotation();
}
function tsParseThisTypeNode() {
  next();
}
function tsParseTypeQuery() {
  expect(TokenType._typeof);
  if (match(TokenType._import)) {
    tsParseImportType();
  } else {
    tsParseEntityName();
  }
}
function tsParseImportType() {
  expect(TokenType._import);
  expect(TokenType.parenL);
  expect(TokenType.string);
  expect(TokenType.parenR);
  if (eat(TokenType.dot)) {
    tsParseEntityName();
  }
  if (match(TokenType.lessThan)) {
    tsParseTypeArguments();
  }
}
function tsParseTypeParameter() {
  parseIdentifier();
  if (eat(TokenType._extends)) {
    tsParseType();
  }
  if (eat(TokenType.eq)) {
    tsParseType();
  }
}
function tsTryParseTypeParameters() {
  if (match(TokenType.lessThan)) {
    tsParseTypeParameters();
  }
}
function tsParseTypeParameters() {
  const oldIsType = pushTypeContext(0);
  if (match(TokenType.lessThan) || match(TokenType.typeParameterStart)) {
    next();
  } else {
    unexpected();
  }
  while (!eat(TokenType.greaterThan) && !state.error) {
    tsParseTypeParameter();
    eat(TokenType.comma);
  }
  popTypeContext(oldIsType);
}
function tsFillSignature(returnToken) {
  const returnTokenRequired = returnToken === TokenType.arrow;
  tsTryParseTypeParameters();
  expect(TokenType.parenL);
  state.scopeDepth++;
  tsParseBindingListForSignature(false);
  state.scopeDepth--;
  if (returnTokenRequired) {
    tsParseTypeOrTypePredicateAnnotation(returnToken);
  } else if (match(returnToken)) {
    tsParseTypeOrTypePredicateAnnotation(returnToken);
  }
}
function tsParseBindingListForSignature(isBlockScope) {
  parseBindingList(TokenType.parenR, isBlockScope);
}
function tsParseTypeMemberSemicolon() {
  if (!eat(TokenType.comma)) {
    semicolon();
  }
}
function tsParseSignatureMember() {
  tsFillSignature(TokenType.colon);
  tsParseTypeMemberSemicolon();
}
function tsIsUnambiguouslyIndexSignature() {
  const snapshot = state.snapshot();
  next();
  const isIndexSignature = eat(TokenType.name) && match(TokenType.colon);
  state.restoreFromSnapshot(snapshot);
  return isIndexSignature;
}
function tsTryParseIndexSignature() {
  if (!(match(TokenType.bracketL) && tsIsUnambiguouslyIndexSignature())) {
    return false;
  }
  const oldIsType = pushTypeContext(0);
  expect(TokenType.bracketL);
  parseIdentifier();
  tsParseTypeAnnotation();
  expect(TokenType.bracketR);
  tsTryParseTypeAnnotation();
  tsParseTypeMemberSemicolon();
  popTypeContext(oldIsType);
  return true;
}
function tsParsePropertyOrMethodSignature(isReadonly) {
  eat(TokenType.question);
  if (!isReadonly && (match(TokenType.parenL) || match(TokenType.lessThan))) {
    tsFillSignature(TokenType.colon);
    tsParseTypeMemberSemicolon();
  } else {
    tsTryParseTypeAnnotation();
    tsParseTypeMemberSemicolon();
  }
}
function tsParseTypeMember() {
  if (match(TokenType.parenL) || match(TokenType.lessThan)) {
    tsParseSignatureMember();
    return;
  }
  if (match(TokenType._new)) {
    next();
    if (match(TokenType.parenL) || match(TokenType.lessThan)) {
      tsParseSignatureMember();
    } else {
      tsParsePropertyOrMethodSignature(false);
    }
    return;
  }
  const readonly = !!tsParseModifier([ContextualKeyword._readonly]);
  const found = tsTryParseIndexSignature();
  if (found) {
    return;
  }
  if ((isContextual(ContextualKeyword._get) || isContextual(ContextualKeyword._set)) && tsNextTokenCanFollowModifier())
    ;
  parsePropertyName(-1);
  tsParsePropertyOrMethodSignature(readonly);
}
function tsParseTypeLiteral() {
  tsParseObjectTypeMembers();
}
function tsParseObjectTypeMembers() {
  expect(TokenType.braceL);
  while (!eat(TokenType.braceR) && !state.error) {
    tsParseTypeMember();
  }
}
function tsLookaheadIsStartOfMappedType() {
  const snapshot = state.snapshot();
  const isStartOfMappedType = tsIsStartOfMappedType();
  state.restoreFromSnapshot(snapshot);
  return isStartOfMappedType;
}
function tsIsStartOfMappedType() {
  next();
  if (eat(TokenType.plus) || eat(TokenType.minus)) {
    return isContextual(ContextualKeyword._readonly);
  }
  if (isContextual(ContextualKeyword._readonly)) {
    next();
  }
  if (!match(TokenType.bracketL)) {
    return false;
  }
  next();
  if (!tsIsIdentifier()) {
    return false;
  }
  next();
  return match(TokenType._in);
}
function tsParseMappedTypeParameter() {
  parseIdentifier();
  expect(TokenType._in);
  tsParseType();
}
function tsParseMappedType() {
  expect(TokenType.braceL);
  if (match(TokenType.plus) || match(TokenType.minus)) {
    next();
    expectContextual(ContextualKeyword._readonly);
  } else {
    eatContextual(ContextualKeyword._readonly);
  }
  expect(TokenType.bracketL);
  tsParseMappedTypeParameter();
  if (eatContextual(ContextualKeyword._as)) {
    tsParseType();
  }
  expect(TokenType.bracketR);
  if (match(TokenType.plus) || match(TokenType.minus)) {
    next();
    expect(TokenType.question);
  } else {
    eat(TokenType.question);
  }
  tsTryParseType();
  semicolon();
  expect(TokenType.braceR);
}
function tsParseTupleType() {
  expect(TokenType.bracketL);
  while (!eat(TokenType.bracketR) && !state.error) {
    tsParseTupleElementType();
    eat(TokenType.comma);
  }
}
function tsParseTupleElementType() {
  if (eat(TokenType.ellipsis)) {
    tsParseType();
  } else {
    tsParseType();
    eat(TokenType.question);
  }
  if (eat(TokenType.colon)) {
    tsParseType();
  }
}
function tsParseParenthesizedType() {
  expect(TokenType.parenL);
  tsParseType();
  expect(TokenType.parenR);
}
function tsParseTemplateLiteralType() {
  nextTemplateToken();
  nextTemplateToken();
  while (!match(TokenType.backQuote) && !state.error) {
    expect(TokenType.dollarBraceL);
    tsParseType();
    nextTemplateToken();
    nextTemplateToken();
  }
  next();
}
var FunctionType;
(function(FunctionType2) {
  const TSFunctionType = 0;
  FunctionType2[FunctionType2["TSFunctionType"] = TSFunctionType] = "TSFunctionType";
  const TSConstructorType = TSFunctionType + 1;
  FunctionType2[FunctionType2["TSConstructorType"] = TSConstructorType] = "TSConstructorType";
  const TSAbstractConstructorType = TSConstructorType + 1;
  FunctionType2[FunctionType2["TSAbstractConstructorType"] = TSAbstractConstructorType] = "TSAbstractConstructorType";
})(FunctionType || (FunctionType = {}));
function tsParseFunctionOrConstructorType(type) {
  if (type === FunctionType.TSAbstractConstructorType) {
    expectContextual(ContextualKeyword._abstract);
  }
  if (type === FunctionType.TSConstructorType || type === FunctionType.TSAbstractConstructorType) {
    expect(TokenType._new);
  }
  tsFillSignature(TokenType.arrow);
}
function tsParseNonArrayType() {
  switch (state.type) {
    case TokenType.name:
      tsParseTypeReference();
      return;
    case TokenType._void:
    case TokenType._null:
      next();
      return;
    case TokenType.string:
    case TokenType.num:
    case TokenType.bigint:
    case TokenType.decimal:
    case TokenType._true:
    case TokenType._false:
      parseLiteral();
      return;
    case TokenType.minus:
      next();
      parseLiteral();
      return;
    case TokenType._this: {
      tsParseThisTypeNode();
      if (isContextual(ContextualKeyword._is) && !hasPrecedingLineBreak()) {
        tsParseThisTypePredicate();
      }
      return;
    }
    case TokenType._typeof:
      tsParseTypeQuery();
      return;
    case TokenType._import:
      tsParseImportType();
      return;
    case TokenType.braceL:
      if (tsLookaheadIsStartOfMappedType()) {
        tsParseMappedType();
      } else {
        tsParseTypeLiteral();
      }
      return;
    case TokenType.bracketL:
      tsParseTupleType();
      return;
    case TokenType.parenL:
      tsParseParenthesizedType();
      return;
    case TokenType.backQuote:
      tsParseTemplateLiteralType();
      return;
    default:
      if (state.type & TokenType.IS_KEYWORD) {
        next();
        state.tokens[state.tokens.length - 1].type = TokenType.name;
        return;
      }
      break;
  }
  unexpected();
}
function tsParseArrayTypeOrHigher() {
  tsParseNonArrayType();
  while (!hasPrecedingLineBreak() && eat(TokenType.bracketL)) {
    if (!eat(TokenType.bracketR)) {
      tsParseType();
      expect(TokenType.bracketR);
    }
  }
}
function tsParseInferType() {
  expectContextual(ContextualKeyword._infer);
  parseIdentifier();
}
function tsParseTypeOperatorOrHigher() {
  if (isContextual(ContextualKeyword._keyof) || isContextual(ContextualKeyword._unique) || isContextual(ContextualKeyword._readonly)) {
    next();
    tsParseTypeOperatorOrHigher();
  } else if (isContextual(ContextualKeyword._infer)) {
    tsParseInferType();
  } else {
    tsParseArrayTypeOrHigher();
  }
}
function tsParseIntersectionTypeOrHigher() {
  eat(TokenType.bitwiseAND);
  tsParseTypeOperatorOrHigher();
  if (match(TokenType.bitwiseAND)) {
    while (eat(TokenType.bitwiseAND)) {
      tsParseTypeOperatorOrHigher();
    }
  }
}
function tsParseUnionTypeOrHigher() {
  eat(TokenType.bitwiseOR);
  tsParseIntersectionTypeOrHigher();
  if (match(TokenType.bitwiseOR)) {
    while (eat(TokenType.bitwiseOR)) {
      tsParseIntersectionTypeOrHigher();
    }
  }
}
function tsIsStartOfFunctionType() {
  if (match(TokenType.lessThan)) {
    return true;
  }
  return match(TokenType.parenL) && tsLookaheadIsUnambiguouslyStartOfFunctionType();
}
function tsSkipParameterStart() {
  if (match(TokenType.name) || match(TokenType._this)) {
    next();
    return true;
  }
  if (match(TokenType.braceL) || match(TokenType.bracketL)) {
    let depth = 1;
    next();
    while (depth > 0 && !state.error) {
      if (match(TokenType.braceL) || match(TokenType.bracketL)) {
        depth++;
      } else if (match(TokenType.braceR) || match(TokenType.bracketR)) {
        depth--;
      }
      next();
    }
    return true;
  }
  return false;
}
function tsLookaheadIsUnambiguouslyStartOfFunctionType() {
  const snapshot = state.snapshot();
  const isUnambiguouslyStartOfFunctionType = tsIsUnambiguouslyStartOfFunctionType();
  state.restoreFromSnapshot(snapshot);
  return isUnambiguouslyStartOfFunctionType;
}
function tsIsUnambiguouslyStartOfFunctionType() {
  next();
  if (match(TokenType.parenR) || match(TokenType.ellipsis)) {
    return true;
  }
  if (tsSkipParameterStart()) {
    if (match(TokenType.colon) || match(TokenType.comma) || match(TokenType.question) || match(TokenType.eq)) {
      return true;
    }
    if (match(TokenType.parenR)) {
      next();
      if (match(TokenType.arrow)) {
        return true;
      }
    }
  }
  return false;
}
function tsParseTypeOrTypePredicateAnnotation(returnToken) {
  const oldIsType = pushTypeContext(0);
  expect(returnToken);
  const finishedReturn = tsParseTypePredicateOrAssertsPrefix();
  if (!finishedReturn) {
    tsParseType();
  }
  popTypeContext(oldIsType);
}
function tsTryParseTypeOrTypePredicateAnnotation() {
  if (match(TokenType.colon)) {
    tsParseTypeOrTypePredicateAnnotation(TokenType.colon);
  }
}
function tsTryParseTypeAnnotation() {
  if (match(TokenType.colon)) {
    tsParseTypeAnnotation();
  }
}
function tsTryParseType() {
  if (eat(TokenType.colon)) {
    tsParseType();
  }
}
function tsParseTypePredicateOrAssertsPrefix() {
  const snapshot = state.snapshot();
  if (isContextual(ContextualKeyword._asserts) && !hasPrecedingLineBreak()) {
    next();
    if (eatContextual(ContextualKeyword._is)) {
      tsParseType();
      return true;
    } else if (tsIsIdentifier() || match(TokenType._this)) {
      next();
      if (eatContextual(ContextualKeyword._is)) {
        tsParseType();
      }
      return true;
    } else {
      state.restoreFromSnapshot(snapshot);
      return false;
    }
  } else if (tsIsIdentifier() || match(TokenType._this)) {
    next();
    if (isContextual(ContextualKeyword._is) && !hasPrecedingLineBreak()) {
      next();
      tsParseType();
      return true;
    } else {
      state.restoreFromSnapshot(snapshot);
      return false;
    }
  }
  return false;
}
function tsParseTypeAnnotation() {
  const oldIsType = pushTypeContext(0);
  expect(TokenType.colon);
  tsParseType();
  popTypeContext(oldIsType);
}
function tsParseType() {
  tsParseNonConditionalType();
  if (hasPrecedingLineBreak() || !eat(TokenType._extends)) {
    return;
  }
  tsParseNonConditionalType();
  expect(TokenType.question);
  tsParseType();
  expect(TokenType.colon);
  tsParseType();
}
function isAbstractConstructorSignature() {
  return isContextual(ContextualKeyword._abstract) && lookaheadType() === TokenType._new;
}
function tsParseNonConditionalType() {
  if (tsIsStartOfFunctionType()) {
    tsParseFunctionOrConstructorType(FunctionType.TSFunctionType);
    return;
  }
  if (match(TokenType._new)) {
    tsParseFunctionOrConstructorType(FunctionType.TSConstructorType);
    return;
  } else if (isAbstractConstructorSignature()) {
    tsParseFunctionOrConstructorType(FunctionType.TSAbstractConstructorType);
    return;
  }
  tsParseUnionTypeOrHigher();
}
function tsParseTypeAssertion() {
  const oldIsType = pushTypeContext(1);
  tsParseType();
  expect(TokenType.greaterThan);
  popTypeContext(oldIsType);
  parseMaybeUnary();
}
function tsTryParseJSXTypeArgument() {
  if (eat(TokenType.jsxTagStart)) {
    state.tokens[state.tokens.length - 1].type = TokenType.typeParameterStart;
    const oldIsType = pushTypeContext(1);
    while (!match(TokenType.greaterThan) && !state.error) {
      tsParseType();
      eat(TokenType.comma);
    }
    nextJSXTagToken();
    popTypeContext(oldIsType);
  }
}
function tsParseHeritageClause() {
  while (!match(TokenType.braceL) && !state.error) {
    tsParseExpressionWithTypeArguments();
    eat(TokenType.comma);
  }
}
function tsParseExpressionWithTypeArguments() {
  tsParseEntityName();
  if (match(TokenType.lessThan)) {
    tsParseTypeArguments();
  }
}
function tsParseInterfaceDeclaration() {
  parseBindingIdentifier(false);
  tsTryParseTypeParameters();
  if (eat(TokenType._extends)) {
    tsParseHeritageClause();
  }
  tsParseObjectTypeMembers();
}
function tsParseTypeAliasDeclaration() {
  parseBindingIdentifier(false);
  tsTryParseTypeParameters();
  expect(TokenType.eq);
  tsParseType();
  semicolon();
}
function tsParseEnumMember() {
  if (match(TokenType.string)) {
    parseLiteral();
  } else {
    parseIdentifier();
  }
  if (eat(TokenType.eq)) {
    const eqIndex = state.tokens.length - 1;
    parseMaybeAssign();
    state.tokens[eqIndex].rhsEndIndex = state.tokens.length;
  }
}
function tsParseEnumDeclaration() {
  parseBindingIdentifier(false);
  expect(TokenType.braceL);
  while (!eat(TokenType.braceR) && !state.error) {
    tsParseEnumMember();
    eat(TokenType.comma);
  }
}
function tsParseModuleBlock() {
  expect(TokenType.braceL);
  parseBlockBody(TokenType.braceR);
}
function tsParseModuleOrNamespaceDeclaration() {
  parseBindingIdentifier(false);
  if (eat(TokenType.dot)) {
    tsParseModuleOrNamespaceDeclaration();
  } else {
    tsParseModuleBlock();
  }
}
function tsParseAmbientExternalModuleDeclaration() {
  if (isContextual(ContextualKeyword._global)) {
    parseIdentifier();
  } else if (match(TokenType.string)) {
    parseExprAtom();
  } else {
    unexpected();
  }
  if (match(TokenType.braceL)) {
    tsParseModuleBlock();
  } else {
    semicolon();
  }
}
function tsParseImportEqualsDeclaration() {
  parseImportedIdentifier();
  expect(TokenType.eq);
  tsParseModuleReference();
  semicolon();
}
function tsIsExternalModuleReference() {
  return isContextual(ContextualKeyword._require) && lookaheadType() === TokenType.parenL;
}
function tsParseModuleReference() {
  if (tsIsExternalModuleReference()) {
    tsParseExternalModuleReference();
  } else {
    tsParseEntityName();
  }
}
function tsParseExternalModuleReference() {
  expectContextual(ContextualKeyword._require);
  expect(TokenType.parenL);
  if (!match(TokenType.string)) {
    unexpected();
  }
  parseLiteral();
  expect(TokenType.parenR);
}
function tsTryParseDeclare() {
  if (isLineTerminator()) {
    return false;
  }
  switch (state.type) {
    case TokenType._function: {
      const oldIsType = pushTypeContext(1);
      next();
      const functionStart = state.start;
      parseFunction(functionStart, true);
      popTypeContext(oldIsType);
      return true;
    }
    case TokenType._class: {
      const oldIsType = pushTypeContext(1);
      parseClass(true, false);
      popTypeContext(oldIsType);
      return true;
    }
    case TokenType._const: {
      if (match(TokenType._const) && isLookaheadContextual(ContextualKeyword._enum)) {
        const oldIsType = pushTypeContext(1);
        expect(TokenType._const);
        expectContextual(ContextualKeyword._enum);
        state.tokens[state.tokens.length - 1].type = TokenType._enum;
        tsParseEnumDeclaration();
        popTypeContext(oldIsType);
        return true;
      }
    }
    case TokenType._var:
    case TokenType._let: {
      const oldIsType = pushTypeContext(1);
      parseVarStatement(state.type);
      popTypeContext(oldIsType);
      return true;
    }
    case TokenType.name: {
      const oldIsType = pushTypeContext(1);
      const contextualKeyword = state.contextualKeyword;
      let matched = false;
      if (contextualKeyword === ContextualKeyword._global) {
        tsParseAmbientExternalModuleDeclaration();
        matched = true;
      } else {
        matched = tsParseDeclaration(contextualKeyword, true);
      }
      popTypeContext(oldIsType);
      return matched;
    }
    default:
      return false;
  }
}
function tsTryParseExportDeclaration() {
  return tsParseDeclaration(state.contextualKeyword, true);
}
function tsParseExpressionStatement(contextualKeyword) {
  switch (contextualKeyword) {
    case ContextualKeyword._declare: {
      const declareTokenIndex = state.tokens.length - 1;
      const matched = tsTryParseDeclare();
      if (matched) {
        state.tokens[declareTokenIndex].type = TokenType._declare;
        return true;
      }
      break;
    }
    case ContextualKeyword._global:
      if (match(TokenType.braceL)) {
        tsParseModuleBlock();
        return true;
      }
      break;
    default:
      return tsParseDeclaration(contextualKeyword, false);
  }
  return false;
}
function tsParseDeclaration(contextualKeyword, isBeforeToken) {
  switch (contextualKeyword) {
    case ContextualKeyword._abstract:
      if (tsCheckLineTerminator(isBeforeToken) && match(TokenType._class)) {
        state.tokens[state.tokens.length - 1].type = TokenType._abstract;
        parseClass(true, false);
        return true;
      }
      break;
    case ContextualKeyword._enum:
      if (tsCheckLineTerminator(isBeforeToken) && match(TokenType.name)) {
        state.tokens[state.tokens.length - 1].type = TokenType._enum;
        tsParseEnumDeclaration();
        return true;
      }
      break;
    case ContextualKeyword._interface:
      if (tsCheckLineTerminator(isBeforeToken) && match(TokenType.name)) {
        const oldIsType = pushTypeContext(isBeforeToken ? 2 : 1);
        tsParseInterfaceDeclaration();
        popTypeContext(oldIsType);
        return true;
      }
      break;
    case ContextualKeyword._module:
      if (tsCheckLineTerminator(isBeforeToken)) {
        if (match(TokenType.string)) {
          const oldIsType = pushTypeContext(isBeforeToken ? 2 : 1);
          tsParseAmbientExternalModuleDeclaration();
          popTypeContext(oldIsType);
          return true;
        } else if (match(TokenType.name)) {
          const oldIsType = pushTypeContext(isBeforeToken ? 2 : 1);
          tsParseModuleOrNamespaceDeclaration();
          popTypeContext(oldIsType);
          return true;
        }
      }
      break;
    case ContextualKeyword._namespace:
      if (tsCheckLineTerminator(isBeforeToken) && match(TokenType.name)) {
        const oldIsType = pushTypeContext(isBeforeToken ? 2 : 1);
        tsParseModuleOrNamespaceDeclaration();
        popTypeContext(oldIsType);
        return true;
      }
      break;
    case ContextualKeyword._type:
      if (tsCheckLineTerminator(isBeforeToken) && match(TokenType.name)) {
        const oldIsType = pushTypeContext(isBeforeToken ? 2 : 1);
        tsParseTypeAliasDeclaration();
        popTypeContext(oldIsType);
        return true;
      }
      break;
  }
  return false;
}
function tsCheckLineTerminator(isBeforeToken) {
  if (isBeforeToken) {
    next();
    return true;
  } else {
    return !isLineTerminator();
  }
}
function tsTryParseGenericAsyncArrowFunction() {
  const snapshot = state.snapshot();
  tsParseTypeParameters();
  parseFunctionParams();
  tsTryParseTypeOrTypePredicateAnnotation();
  expect(TokenType.arrow);
  if (state.error) {
    state.restoreFromSnapshot(snapshot);
    return false;
  }
  parseFunctionBody(true);
  return true;
}
function tsParseTypeArguments() {
  const oldIsType = pushTypeContext(0);
  expect(TokenType.lessThan);
  while (!eat(TokenType.greaterThan) && !state.error) {
    tsParseType();
    eat(TokenType.comma);
  }
  popTypeContext(oldIsType);
}
function tsIsDeclarationStart() {
  if (match(TokenType.name)) {
    switch (state.contextualKeyword) {
      case ContextualKeyword._abstract:
      case ContextualKeyword._declare:
      case ContextualKeyword._enum:
      case ContextualKeyword._interface:
      case ContextualKeyword._module:
      case ContextualKeyword._namespace:
      case ContextualKeyword._type:
        return true;
    }
  }
  return false;
}
function tsParseFunctionBodyAndFinish(functionStart, funcContextId) {
  if (match(TokenType.colon)) {
    tsParseTypeOrTypePredicateAnnotation(TokenType.colon);
  }
  if (!match(TokenType.braceL) && isLineTerminator()) {
    let i = state.tokens.length - 1;
    while (i >= 0 && (state.tokens[i].start >= functionStart || state.tokens[i].type === TokenType._default || state.tokens[i].type === TokenType._export)) {
      state.tokens[i].isType = true;
      i--;
    }
    return;
  }
  parseFunctionBody(false, funcContextId);
}
function tsParseSubscript(startTokenIndex, noCalls, stopState) {
  if (!hasPrecedingLineBreak() && eat(TokenType.bang)) {
    state.tokens[state.tokens.length - 1].type = TokenType.nonNullAssertion;
    return;
  }
  if (match(TokenType.lessThan)) {
    const snapshot = state.snapshot();
    if (!noCalls && atPossibleAsync()) {
      const asyncArrowFn = tsTryParseGenericAsyncArrowFunction();
      if (asyncArrowFn) {
        return;
      }
    }
    tsParseTypeArguments();
    if (!noCalls && eat(TokenType.parenL)) {
      state.tokens[state.tokens.length - 1].subscriptStartIndex = startTokenIndex;
      parseCallExpressionArguments();
    } else if (match(TokenType.backQuote)) {
      parseTemplate();
    } else {
      unexpected();
    }
    if (state.error) {
      state.restoreFromSnapshot(snapshot);
    } else {
      return;
    }
  } else if (!noCalls && match(TokenType.questionDot) && lookaheadType() === TokenType.lessThan) {
    next();
    state.tokens[startTokenIndex].isOptionalChainStart = true;
    state.tokens[state.tokens.length - 1].subscriptStartIndex = startTokenIndex;
    tsParseTypeArguments();
    expect(TokenType.parenL);
    parseCallExpressionArguments();
  }
  baseParseSubscript(startTokenIndex, noCalls, stopState);
}
function tsStartParseNewArguments() {
  if (match(TokenType.lessThan)) {
    const snapshot = state.snapshot();
    state.type = TokenType.typeParameterStart;
    tsParseTypeArguments();
    if (!match(TokenType.parenL)) {
      unexpected();
    }
    if (state.error) {
      state.restoreFromSnapshot(snapshot);
    }
  }
}
function tsTryParseExport() {
  if (eat(TokenType._import)) {
    if (isContextual(ContextualKeyword._type) && lookaheadType() !== TokenType.eq) {
      expectContextual(ContextualKeyword._type);
    }
    tsParseImportEqualsDeclaration();
    return true;
  } else if (eat(TokenType.eq)) {
    parseExpression();
    semicolon();
    return true;
  } else if (eatContextual(ContextualKeyword._as)) {
    expectContextual(ContextualKeyword._namespace);
    parseIdentifier();
    semicolon();
    return true;
  } else {
    if (isContextual(ContextualKeyword._type) && lookaheadType() === TokenType.braceL) {
      next();
    }
    return false;
  }
}
function tsTryParseExportDefaultExpression() {
  if (isContextual(ContextualKeyword._abstract) && lookaheadType() === TokenType._class) {
    state.type = TokenType._abstract;
    next();
    parseClass(true, true);
    return true;
  }
  if (isContextual(ContextualKeyword._interface)) {
    const oldIsType = pushTypeContext(2);
    tsParseDeclaration(ContextualKeyword._interface, true);
    popTypeContext(oldIsType);
    return true;
  }
  return false;
}
function tsTryParseStatementContent() {
  if (state.type === TokenType._const) {
    const ahead = lookaheadTypeAndKeyword();
    if (ahead.type === TokenType.name && ahead.contextualKeyword === ContextualKeyword._enum) {
      expect(TokenType._const);
      expectContextual(ContextualKeyword._enum);
      state.tokens[state.tokens.length - 1].type = TokenType._enum;
      tsParseEnumDeclaration();
      return true;
    }
  }
  return false;
}
function tsTryParseClassMemberWithIsStatic(isStatic) {
  const memberStartIndexAfterStatic = state.tokens.length;
  tsParseModifiers([
    ContextualKeyword._abstract,
    ContextualKeyword._readonly,
    ContextualKeyword._declare,
    ContextualKeyword._static,
    ContextualKeyword._override
  ]);
  const modifiersEndIndex = state.tokens.length;
  const found = tsTryParseIndexSignature();
  if (found) {
    const memberStartIndex = isStatic ? memberStartIndexAfterStatic - 1 : memberStartIndexAfterStatic;
    for (let i = memberStartIndex; i < modifiersEndIndex; i++) {
      state.tokens[i].isType = true;
    }
    return true;
  }
  return false;
}
function tsParseIdentifierStatement(contextualKeyword) {
  const matched = tsParseExpressionStatement(contextualKeyword);
  if (!matched) {
    semicolon();
  }
}
function tsParseExportDeclaration() {
  const isDeclare = eatContextual(ContextualKeyword._declare);
  if (isDeclare) {
    state.tokens[state.tokens.length - 1].type = TokenType._declare;
  }
  let matchedDeclaration = false;
  if (match(TokenType.name)) {
    if (isDeclare) {
      const oldIsType = pushTypeContext(2);
      matchedDeclaration = tsTryParseExportDeclaration();
      popTypeContext(oldIsType);
    } else {
      matchedDeclaration = tsTryParseExportDeclaration();
    }
  }
  if (!matchedDeclaration) {
    if (isDeclare) {
      const oldIsType = pushTypeContext(2);
      parseStatement(true);
      popTypeContext(oldIsType);
    } else {
      parseStatement(true);
    }
  }
}
function tsAfterParseClassSuper(hasSuper) {
  if (hasSuper && match(TokenType.lessThan)) {
    tsParseTypeArguments();
  }
  if (eatContextual(ContextualKeyword._implements)) {
    state.tokens[state.tokens.length - 1].type = TokenType._implements;
    const oldIsType = pushTypeContext(1);
    tsParseHeritageClause();
    popTypeContext(oldIsType);
  }
}
function tsStartParseObjPropValue() {
  tsTryParseTypeParameters();
}
function tsStartParseFunctionParams() {
  tsTryParseTypeParameters();
}
function tsAfterParseVarHead() {
  const oldIsType = pushTypeContext(0);
  eat(TokenType.bang);
  tsTryParseTypeAnnotation();
  popTypeContext(oldIsType);
}
function tsStartParseAsyncArrowFromCallExpression() {
  if (match(TokenType.colon)) {
    tsParseTypeAnnotation();
  }
}
function tsParseMaybeAssign(noIn, isWithinParens) {
  if (isJSXEnabled) {
    return tsParseMaybeAssignWithJSX(noIn, isWithinParens);
  } else {
    return tsParseMaybeAssignWithoutJSX(noIn, isWithinParens);
  }
}
function tsParseMaybeAssignWithJSX(noIn, isWithinParens) {
  if (!match(TokenType.lessThan)) {
    return baseParseMaybeAssign(noIn, isWithinParens);
  }
  const snapshot = state.snapshot();
  let wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
  if (state.error) {
    state.restoreFromSnapshot(snapshot);
  } else {
    return wasArrow;
  }
  state.type = TokenType.typeParameterStart;
  tsParseTypeParameters();
  wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
  if (!wasArrow) {
    unexpected();
  }
  return wasArrow;
}
function tsParseMaybeAssignWithoutJSX(noIn, isWithinParens) {
  if (!match(TokenType.lessThan)) {
    return baseParseMaybeAssign(noIn, isWithinParens);
  }
  const snapshot = state.snapshot();
  tsParseTypeParameters();
  const wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
  if (!wasArrow) {
    unexpected();
  }
  if (state.error) {
    state.restoreFromSnapshot(snapshot);
  } else {
    return wasArrow;
  }
  return baseParseMaybeAssign(noIn, isWithinParens);
}
function tsParseArrow() {
  if (match(TokenType.colon)) {
    const snapshot = state.snapshot();
    tsParseTypeOrTypePredicateAnnotation(TokenType.colon);
    if (canInsertSemicolon())
      unexpected();
    if (!match(TokenType.arrow))
      unexpected();
    if (state.error) {
      state.restoreFromSnapshot(snapshot);
    }
  }
  return eat(TokenType.arrow);
}
function tsParseAssignableListItemTypes() {
  const oldIsType = pushTypeContext(0);
  eat(TokenType.question);
  tsTryParseTypeAnnotation();
  popTypeContext(oldIsType);
}
function tsParseMaybeDecoratorArguments() {
  if (match(TokenType.lessThan)) {
    tsParseTypeArguments();
  }
  baseParseMaybeDecoratorArguments();
}
function jsxReadToken() {
  for (; ; ) {
    if (state.pos >= input.length) {
      unexpected("Unterminated JSX contents");
      return;
    }
    const ch = input.charCodeAt(state.pos);
    switch (ch) {
      case charCodes.lessThan:
      case charCodes.leftCurlyBrace:
        if (state.pos === state.start) {
          if (ch === charCodes.lessThan) {
            state.pos++;
            finishToken(TokenType.jsxTagStart);
            return;
          }
          getTokenFromCode(ch);
          return;
        }
        finishToken(TokenType.jsxText);
        return;
      default:
        state.pos++;
    }
  }
}
function jsxReadString(quote) {
  state.pos++;
  for (; ; ) {
    if (state.pos >= input.length) {
      unexpected("Unterminated string constant");
      return;
    }
    const ch = input.charCodeAt(state.pos);
    if (ch === quote) {
      state.pos++;
      break;
    }
    state.pos++;
  }
  finishToken(TokenType.string);
}
function jsxReadWord() {
  let ch;
  do {
    if (state.pos > input.length) {
      unexpected("Unexpectedly reached the end of input.");
      return;
    }
    ch = input.charCodeAt(++state.pos);
  } while (IS_IDENTIFIER_CHAR[ch] || ch === charCodes.dash);
  finishToken(TokenType.jsxName);
}
function jsxParseIdentifier() {
  nextJSXTagToken();
}
function jsxParseNamespacedName(identifierRole) {
  jsxParseIdentifier();
  if (!eat(TokenType.colon)) {
    state.tokens[state.tokens.length - 1].identifierRole = identifierRole;
    return;
  }
  jsxParseIdentifier();
}
function jsxParseElementName() {
  jsxParseNamespacedName(IdentifierRole.Access);
  while (match(TokenType.dot)) {
    nextJSXTagToken();
    jsxParseIdentifier();
  }
}
function jsxParseAttributeValue() {
  switch (state.type) {
    case TokenType.braceL:
      next();
      jsxParseExpressionContainer();
      nextJSXTagToken();
      return;
    case TokenType.jsxTagStart:
      jsxParseElement();
      nextJSXTagToken();
      return;
    case TokenType.string:
      nextJSXTagToken();
      return;
    default:
      unexpected("JSX value should be either an expression or a quoted JSX text");
  }
}
function jsxParseSpreadChild() {
  expect(TokenType.ellipsis);
  parseExpression();
}
function jsxParseExpressionContainer() {
  if (match(TokenType.braceR))
    ;
  else {
    parseExpression();
  }
}
function jsxParseAttribute() {
  if (eat(TokenType.braceL)) {
    expect(TokenType.ellipsis);
    parseMaybeAssign();
    nextJSXTagToken();
    return;
  }
  jsxParseNamespacedName(IdentifierRole.ObjectKey);
  if (match(TokenType.eq)) {
    nextJSXTagToken();
    jsxParseAttributeValue();
  }
}
function jsxParseOpeningElement() {
  if (match(TokenType.jsxTagEnd)) {
    return false;
  }
  jsxParseElementName();
  if (isTypeScriptEnabled) {
    tsTryParseJSXTypeArgument();
  }
  while (!match(TokenType.slash) && !match(TokenType.jsxTagEnd) && !state.error) {
    jsxParseAttribute();
  }
  const isSelfClosing = match(TokenType.slash);
  if (isSelfClosing) {
    nextJSXTagToken();
  }
  return isSelfClosing;
}
function jsxParseClosingElement() {
  if (match(TokenType.jsxTagEnd)) {
    return;
  }
  jsxParseElementName();
}
function jsxParseElementAt() {
  const isSelfClosing = jsxParseOpeningElement();
  if (!isSelfClosing) {
    nextJSXExprToken();
    while (true) {
      switch (state.type) {
        case TokenType.jsxTagStart:
          nextJSXTagToken();
          if (match(TokenType.slash)) {
            nextJSXTagToken();
            jsxParseClosingElement();
            return;
          }
          jsxParseElementAt();
          nextJSXExprToken();
          break;
        case TokenType.jsxText:
          nextJSXExprToken();
          break;
        case TokenType.braceL:
          next();
          if (match(TokenType.ellipsis)) {
            jsxParseSpreadChild();
            nextJSXExprToken();
          } else {
            jsxParseExpressionContainer();
            nextJSXExprToken();
          }
          break;
        default:
          unexpected();
          return;
      }
    }
  }
}
function jsxParseElement() {
  nextJSXTagToken();
  jsxParseElementAt();
}
function nextJSXTagToken() {
  state.tokens.push(new Token());
  skipSpace();
  state.start = state.pos;
  const code = input.charCodeAt(state.pos);
  if (IS_IDENTIFIER_START[code]) {
    jsxReadWord();
  } else if (code === charCodes.quotationMark || code === charCodes.apostrophe) {
    jsxReadString(code);
  } else {
    ++state.pos;
    switch (code) {
      case charCodes.greaterThan:
        finishToken(TokenType.jsxTagEnd);
        break;
      case charCodes.lessThan:
        finishToken(TokenType.jsxTagStart);
        break;
      case charCodes.slash:
        finishToken(TokenType.slash);
        break;
      case charCodes.equalsTo:
        finishToken(TokenType.eq);
        break;
      case charCodes.leftCurlyBrace:
        finishToken(TokenType.braceL);
        break;
      case charCodes.dot:
        finishToken(TokenType.dot);
        break;
      case charCodes.colon:
        finishToken(TokenType.colon);
        break;
      default:
        unexpected();
    }
  }
}
function nextJSXExprToken() {
  state.tokens.push(new Token());
  state.start = state.pos;
  jsxReadToken();
}
function typedParseConditional(noIn) {
  if (match(TokenType.question)) {
    const nextType = lookaheadType();
    if (nextType === TokenType.colon || nextType === TokenType.comma || nextType === TokenType.parenR) {
      return;
    }
  }
  baseParseConditional(noIn);
}
function typedParseParenItem() {
  if (eat(TokenType.question)) {
    state.tokens[state.tokens.length - 1].isType = true;
  }
  if (match(TokenType.colon)) {
    if (isTypeScriptEnabled) {
      tsParseTypeAnnotation();
    } else if (isFlowEnabled) {
      flowParseTypeAnnotation();
    }
  }
}
class StopState {
  constructor(stop) {
    this.stop = stop;
  }
}
function parseExpression(noIn = false) {
  parseMaybeAssign(noIn);
  if (match(TokenType.comma)) {
    while (eat(TokenType.comma)) {
      parseMaybeAssign(noIn);
    }
  }
}
function parseMaybeAssign(noIn = false, isWithinParens = false) {
  if (isTypeScriptEnabled) {
    return tsParseMaybeAssign(noIn, isWithinParens);
  } else if (isFlowEnabled) {
    return flowParseMaybeAssign(noIn, isWithinParens);
  } else {
    return baseParseMaybeAssign(noIn, isWithinParens);
  }
}
function baseParseMaybeAssign(noIn, isWithinParens) {
  if (match(TokenType._yield)) {
    parseYield();
    return false;
  }
  if (match(TokenType.parenL) || match(TokenType.name) || match(TokenType._yield)) {
    state.potentialArrowAt = state.start;
  }
  const wasArrow = parseMaybeConditional(noIn);
  if (isWithinParens) {
    parseParenItem();
  }
  if (state.type & TokenType.IS_ASSIGN) {
    next();
    parseMaybeAssign(noIn);
    return false;
  }
  return wasArrow;
}
function parseMaybeConditional(noIn) {
  const wasArrow = parseExprOps(noIn);
  if (wasArrow) {
    return true;
  }
  parseConditional(noIn);
  return false;
}
function parseConditional(noIn) {
  if (isTypeScriptEnabled || isFlowEnabled) {
    typedParseConditional(noIn);
  } else {
    baseParseConditional(noIn);
  }
}
function baseParseConditional(noIn) {
  if (eat(TokenType.question)) {
    parseMaybeAssign();
    expect(TokenType.colon);
    parseMaybeAssign(noIn);
  }
}
function parseExprOps(noIn) {
  const startTokenIndex = state.tokens.length;
  const wasArrow = parseMaybeUnary();
  if (wasArrow) {
    return true;
  }
  parseExprOp(startTokenIndex, -1, noIn);
  return false;
}
function parseExprOp(startTokenIndex, minPrec, noIn) {
  if (isTypeScriptEnabled && (TokenType._in & TokenType.PRECEDENCE_MASK) > minPrec && !hasPrecedingLineBreak() && eatContextual(ContextualKeyword._as)) {
    state.tokens[state.tokens.length - 1].type = TokenType._as;
    const oldIsType = pushTypeContext(1);
    tsParseType();
    popTypeContext(oldIsType);
    parseExprOp(startTokenIndex, minPrec, noIn);
    return;
  }
  const prec = state.type & TokenType.PRECEDENCE_MASK;
  if (prec > 0 && (!noIn || !match(TokenType._in))) {
    if (prec > minPrec) {
      const op = state.type;
      next();
      if (op === TokenType.nullishCoalescing) {
        state.tokens[state.tokens.length - 1].nullishStartIndex = startTokenIndex;
      }
      const rhsStartTokenIndex = state.tokens.length;
      parseMaybeUnary();
      parseExprOp(rhsStartTokenIndex, op & TokenType.IS_RIGHT_ASSOCIATIVE ? prec - 1 : prec, noIn);
      if (op === TokenType.nullishCoalescing) {
        state.tokens[startTokenIndex].numNullishCoalesceStarts++;
        state.tokens[state.tokens.length - 1].numNullishCoalesceEnds++;
      }
      parseExprOp(startTokenIndex, minPrec, noIn);
    }
  }
}
function parseMaybeUnary() {
  if (isTypeScriptEnabled && !isJSXEnabled && eat(TokenType.lessThan)) {
    tsParseTypeAssertion();
    return false;
  }
  if (isContextual(ContextualKeyword._module) && lookaheadCharCode() === charCodes.leftCurlyBrace && !hasFollowingLineBreak()) {
    parseModuleExpression();
    return false;
  }
  if (state.type & TokenType.IS_PREFIX) {
    next();
    parseMaybeUnary();
    return false;
  }
  const wasArrow = parseExprSubscripts();
  if (wasArrow) {
    return true;
  }
  while (state.type & TokenType.IS_POSTFIX && !canInsertSemicolon()) {
    if (state.type === TokenType.preIncDec) {
      state.type = TokenType.postIncDec;
    }
    next();
  }
  return false;
}
function parseExprSubscripts() {
  const startTokenIndex = state.tokens.length;
  const wasArrow = parseExprAtom();
  if (wasArrow) {
    return true;
  }
  parseSubscripts(startTokenIndex);
  if (state.tokens.length > startTokenIndex && state.tokens[startTokenIndex].isOptionalChainStart) {
    state.tokens[state.tokens.length - 1].isOptionalChainEnd = true;
  }
  return false;
}
function parseSubscripts(startTokenIndex, noCalls = false) {
  if (isFlowEnabled) {
    flowParseSubscripts(startTokenIndex, noCalls);
  } else {
    baseParseSubscripts(startTokenIndex, noCalls);
  }
}
function baseParseSubscripts(startTokenIndex, noCalls = false) {
  const stopState = new StopState(false);
  do {
    parseSubscript(startTokenIndex, noCalls, stopState);
  } while (!stopState.stop && !state.error);
}
function parseSubscript(startTokenIndex, noCalls, stopState) {
  if (isTypeScriptEnabled) {
    tsParseSubscript(startTokenIndex, noCalls, stopState);
  } else if (isFlowEnabled) {
    flowParseSubscript(startTokenIndex, noCalls, stopState);
  } else {
    baseParseSubscript(startTokenIndex, noCalls, stopState);
  }
}
function baseParseSubscript(startTokenIndex, noCalls, stopState) {
  if (!noCalls && eat(TokenType.doubleColon)) {
    parseNoCallExpr();
    stopState.stop = true;
    parseSubscripts(startTokenIndex, noCalls);
  } else if (match(TokenType.questionDot)) {
    state.tokens[startTokenIndex].isOptionalChainStart = true;
    if (noCalls && lookaheadType() === TokenType.parenL) {
      stopState.stop = true;
      return;
    }
    next();
    state.tokens[state.tokens.length - 1].subscriptStartIndex = startTokenIndex;
    if (eat(TokenType.bracketL)) {
      parseExpression();
      expect(TokenType.bracketR);
    } else if (eat(TokenType.parenL)) {
      parseCallExpressionArguments();
    } else {
      parseMaybePrivateName();
    }
  } else if (eat(TokenType.dot)) {
    state.tokens[state.tokens.length - 1].subscriptStartIndex = startTokenIndex;
    parseMaybePrivateName();
  } else if (eat(TokenType.bracketL)) {
    state.tokens[state.tokens.length - 1].subscriptStartIndex = startTokenIndex;
    parseExpression();
    expect(TokenType.bracketR);
  } else if (!noCalls && match(TokenType.parenL)) {
    if (atPossibleAsync()) {
      const snapshot = state.snapshot();
      const asyncStartTokenIndex = state.tokens.length;
      next();
      state.tokens[state.tokens.length - 1].subscriptStartIndex = startTokenIndex;
      const callContextId = getNextContextId();
      state.tokens[state.tokens.length - 1].contextId = callContextId;
      parseCallExpressionArguments();
      state.tokens[state.tokens.length - 1].contextId = callContextId;
      if (shouldParseAsyncArrow()) {
        state.restoreFromSnapshot(snapshot);
        stopState.stop = true;
        state.scopeDepth++;
        parseFunctionParams();
        parseAsyncArrowFromCallExpression(asyncStartTokenIndex);
      }
    } else {
      next();
      state.tokens[state.tokens.length - 1].subscriptStartIndex = startTokenIndex;
      const callContextId = getNextContextId();
      state.tokens[state.tokens.length - 1].contextId = callContextId;
      parseCallExpressionArguments();
      state.tokens[state.tokens.length - 1].contextId = callContextId;
    }
  } else if (match(TokenType.backQuote)) {
    parseTemplate();
  } else {
    stopState.stop = true;
  }
}
function atPossibleAsync() {
  return state.tokens[state.tokens.length - 1].contextualKeyword === ContextualKeyword._async && !canInsertSemicolon();
}
function parseCallExpressionArguments() {
  let first = true;
  while (!eat(TokenType.parenR) && !state.error) {
    if (first) {
      first = false;
    } else {
      expect(TokenType.comma);
      if (eat(TokenType.parenR)) {
        break;
      }
    }
    parseExprListItem(false);
  }
}
function shouldParseAsyncArrow() {
  return match(TokenType.colon) || match(TokenType.arrow);
}
function parseAsyncArrowFromCallExpression(startTokenIndex) {
  if (isTypeScriptEnabled) {
    tsStartParseAsyncArrowFromCallExpression();
  } else if (isFlowEnabled) {
    flowStartParseAsyncArrowFromCallExpression();
  }
  expect(TokenType.arrow);
  parseArrowExpression(startTokenIndex);
}
function parseNoCallExpr() {
  const startTokenIndex = state.tokens.length;
  parseExprAtom();
  parseSubscripts(startTokenIndex, true);
}
function parseExprAtom() {
  if (eat(TokenType.modulo)) {
    parseIdentifier();
    return false;
  }
  if (match(TokenType.jsxText)) {
    parseLiteral();
    return false;
  } else if (match(TokenType.lessThan) && isJSXEnabled) {
    state.type = TokenType.jsxTagStart;
    jsxParseElement();
    next();
    return false;
  }
  const canBeArrow = state.potentialArrowAt === state.start;
  switch (state.type) {
    case TokenType.slash:
    case TokenType.assign:
      retokenizeSlashAsRegex();
    case TokenType._super:
    case TokenType._this:
    case TokenType.regexp:
    case TokenType.num:
    case TokenType.bigint:
    case TokenType.decimal:
    case TokenType.string:
    case TokenType._null:
    case TokenType._true:
    case TokenType._false:
      next();
      return false;
    case TokenType._import:
      next();
      if (match(TokenType.dot)) {
        state.tokens[state.tokens.length - 1].type = TokenType.name;
        next();
        parseIdentifier();
      }
      return false;
    case TokenType.name: {
      const startTokenIndex = state.tokens.length;
      const functionStart = state.start;
      const contextualKeyword = state.contextualKeyword;
      parseIdentifier();
      if (contextualKeyword === ContextualKeyword._await) {
        parseAwait();
        return false;
      } else if (contextualKeyword === ContextualKeyword._async && match(TokenType._function) && !canInsertSemicolon()) {
        next();
        parseFunction(functionStart, false);
        return false;
      } else if (canBeArrow && contextualKeyword === ContextualKeyword._async && !canInsertSemicolon() && match(TokenType.name)) {
        state.scopeDepth++;
        parseBindingIdentifier(false);
        expect(TokenType.arrow);
        parseArrowExpression(startTokenIndex);
        return true;
      } else if (match(TokenType._do) && !canInsertSemicolon()) {
        next();
        parseBlock();
        return false;
      }
      if (canBeArrow && !canInsertSemicolon() && match(TokenType.arrow)) {
        state.scopeDepth++;
        markPriorBindingIdentifier(false);
        expect(TokenType.arrow);
        parseArrowExpression(startTokenIndex);
        return true;
      }
      state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.Access;
      return false;
    }
    case TokenType._do: {
      next();
      parseBlock();
      return false;
    }
    case TokenType.parenL: {
      const wasArrow = parseParenAndDistinguishExpression(canBeArrow);
      return wasArrow;
    }
    case TokenType.bracketL:
      next();
      parseExprList(TokenType.bracketR, true);
      return false;
    case TokenType.braceL:
      parseObj(false, false);
      return false;
    case TokenType._function:
      parseFunctionExpression();
      return false;
    case TokenType.at:
      parseDecorators();
    case TokenType._class:
      parseClass(false);
      return false;
    case TokenType._new:
      parseNew();
      return false;
    case TokenType.backQuote:
      parseTemplate();
      return false;
    case TokenType.doubleColon: {
      next();
      parseNoCallExpr();
      return false;
    }
    case TokenType.hash: {
      const code = lookaheadCharCode();
      if (IS_IDENTIFIER_START[code] || code === charCodes.backslash) {
        parseMaybePrivateName();
      } else {
        next();
      }
      return false;
    }
    default:
      unexpected();
      return false;
  }
}
function parseMaybePrivateName() {
  eat(TokenType.hash);
  parseIdentifier();
}
function parseFunctionExpression() {
  const functionStart = state.start;
  parseIdentifier();
  if (eat(TokenType.dot)) {
    parseIdentifier();
  }
  parseFunction(functionStart, false);
}
function parseLiteral() {
  next();
}
function parseParenExpression() {
  expect(TokenType.parenL);
  parseExpression();
  expect(TokenType.parenR);
}
function parseParenAndDistinguishExpression(canBeArrow) {
  const snapshot = state.snapshot();
  const startTokenIndex = state.tokens.length;
  expect(TokenType.parenL);
  let first = true;
  while (!match(TokenType.parenR) && !state.error) {
    if (first) {
      first = false;
    } else {
      expect(TokenType.comma);
      if (match(TokenType.parenR)) {
        break;
      }
    }
    if (match(TokenType.ellipsis)) {
      parseRest(false);
      parseParenItem();
      break;
    } else {
      parseMaybeAssign(false, true);
    }
  }
  expect(TokenType.parenR);
  if (canBeArrow && shouldParseArrow()) {
    const wasArrow = parseArrow();
    if (wasArrow) {
      state.restoreFromSnapshot(snapshot);
      state.scopeDepth++;
      parseFunctionParams();
      parseArrow();
      parseArrowExpression(startTokenIndex);
      return true;
    }
  }
  return false;
}
function shouldParseArrow() {
  return match(TokenType.colon) || !canInsertSemicolon();
}
function parseArrow() {
  if (isTypeScriptEnabled) {
    return tsParseArrow();
  } else if (isFlowEnabled) {
    return flowParseArrow();
  } else {
    return eat(TokenType.arrow);
  }
}
function parseParenItem() {
  if (isTypeScriptEnabled || isFlowEnabled) {
    typedParseParenItem();
  }
}
function parseNew() {
  expect(TokenType._new);
  if (eat(TokenType.dot)) {
    parseIdentifier();
    return;
  }
  parseNoCallExpr();
  eat(TokenType.questionDot);
  parseNewArguments();
}
function parseNewArguments() {
  if (isTypeScriptEnabled) {
    tsStartParseNewArguments();
  } else if (isFlowEnabled) {
    flowStartParseNewArguments();
  }
  if (eat(TokenType.parenL)) {
    parseExprList(TokenType.parenR);
  }
}
function parseTemplate() {
  nextTemplateToken();
  nextTemplateToken();
  while (!match(TokenType.backQuote) && !state.error) {
    expect(TokenType.dollarBraceL);
    parseExpression();
    nextTemplateToken();
    nextTemplateToken();
  }
  next();
}
function parseObj(isPattern, isBlockScope) {
  const contextId = getNextContextId();
  let first = true;
  next();
  state.tokens[state.tokens.length - 1].contextId = contextId;
  while (!eat(TokenType.braceR) && !state.error) {
    if (first) {
      first = false;
    } else {
      expect(TokenType.comma);
      if (eat(TokenType.braceR)) {
        break;
      }
    }
    let isGenerator = false;
    if (match(TokenType.ellipsis)) {
      const previousIndex = state.tokens.length;
      parseSpread();
      if (isPattern) {
        if (state.tokens.length === previousIndex + 2) {
          markPriorBindingIdentifier(isBlockScope);
        }
        if (eat(TokenType.braceR)) {
          break;
        }
      }
      continue;
    }
    if (!isPattern) {
      isGenerator = eat(TokenType.star);
    }
    if (!isPattern && isContextual(ContextualKeyword._async)) {
      if (isGenerator)
        unexpected();
      parseIdentifier();
      if (match(TokenType.colon) || match(TokenType.parenL) || match(TokenType.braceR) || match(TokenType.eq) || match(TokenType.comma))
        ;
      else {
        if (match(TokenType.star)) {
          next();
          isGenerator = true;
        }
        parsePropertyName(contextId);
      }
    } else {
      parsePropertyName(contextId);
    }
    parseObjPropValue(isPattern, isBlockScope, contextId);
  }
  state.tokens[state.tokens.length - 1].contextId = contextId;
}
function isGetterOrSetterMethod(isPattern) {
  return !isPattern && (match(TokenType.string) || match(TokenType.num) || match(TokenType.bracketL) || match(TokenType.name) || !!(state.type & TokenType.IS_KEYWORD));
}
function parseObjectMethod(isPattern, objectContextId) {
  const functionStart = state.start;
  if (match(TokenType.parenL)) {
    if (isPattern)
      unexpected();
    parseMethod(functionStart, false);
    return true;
  }
  if (isGetterOrSetterMethod(isPattern)) {
    parsePropertyName(objectContextId);
    parseMethod(functionStart, false);
    return true;
  }
  return false;
}
function parseObjectProperty(isPattern, isBlockScope) {
  if (eat(TokenType.colon)) {
    if (isPattern) {
      parseMaybeDefault(isBlockScope);
    } else {
      parseMaybeAssign(false);
    }
    return;
  }
  let identifierRole;
  if (isPattern) {
    if (state.scopeDepth === 0) {
      identifierRole = IdentifierRole.ObjectShorthandTopLevelDeclaration;
    } else if (isBlockScope) {
      identifierRole = IdentifierRole.ObjectShorthandBlockScopedDeclaration;
    } else {
      identifierRole = IdentifierRole.ObjectShorthandFunctionScopedDeclaration;
    }
  } else {
    identifierRole = IdentifierRole.ObjectShorthand;
  }
  state.tokens[state.tokens.length - 1].identifierRole = identifierRole;
  parseMaybeDefault(isBlockScope, true);
}
function parseObjPropValue(isPattern, isBlockScope, objectContextId) {
  if (isTypeScriptEnabled) {
    tsStartParseObjPropValue();
  } else if (isFlowEnabled) {
    flowStartParseObjPropValue();
  }
  const wasMethod = parseObjectMethod(isPattern, objectContextId);
  if (!wasMethod) {
    parseObjectProperty(isPattern, isBlockScope);
  }
}
function parsePropertyName(objectContextId) {
  if (isFlowEnabled) {
    flowParseVariance();
  }
  if (eat(TokenType.bracketL)) {
    state.tokens[state.tokens.length - 1].contextId = objectContextId;
    parseMaybeAssign();
    expect(TokenType.bracketR);
    state.tokens[state.tokens.length - 1].contextId = objectContextId;
  } else {
    if (match(TokenType.num) || match(TokenType.string) || match(TokenType.bigint) || match(TokenType.decimal)) {
      parseExprAtom();
    } else {
      parseMaybePrivateName();
    }
    state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.ObjectKey;
    state.tokens[state.tokens.length - 1].contextId = objectContextId;
  }
}
function parseMethod(functionStart, isConstructor) {
  const funcContextId = getNextContextId();
  state.scopeDepth++;
  const startTokenIndex = state.tokens.length;
  const allowModifiers = isConstructor;
  parseFunctionParams(allowModifiers, funcContextId);
  parseFunctionBodyAndFinish(functionStart, funcContextId);
  const endTokenIndex = state.tokens.length;
  state.scopes.push(new Scope(startTokenIndex, endTokenIndex, true));
  state.scopeDepth--;
}
function parseArrowExpression(startTokenIndex) {
  parseFunctionBody(true);
  const endTokenIndex = state.tokens.length;
  state.scopes.push(new Scope(startTokenIndex, endTokenIndex, true));
  state.scopeDepth--;
}
function parseFunctionBodyAndFinish(functionStart, funcContextId = 0) {
  if (isTypeScriptEnabled) {
    tsParseFunctionBodyAndFinish(functionStart, funcContextId);
  } else if (isFlowEnabled) {
    flowParseFunctionBodyAndFinish(funcContextId);
  } else {
    parseFunctionBody(false, funcContextId);
  }
}
function parseFunctionBody(allowExpression, funcContextId = 0) {
  const isExpression = allowExpression && !match(TokenType.braceL);
  if (isExpression) {
    parseMaybeAssign();
  } else {
    parseBlock(true, funcContextId);
  }
}
function parseExprList(close, allowEmpty = false) {
  let first = true;
  while (!eat(close) && !state.error) {
    if (first) {
      first = false;
    } else {
      expect(TokenType.comma);
      if (eat(close))
        break;
    }
    parseExprListItem(allowEmpty);
  }
}
function parseExprListItem(allowEmpty) {
  if (allowEmpty && match(TokenType.comma))
    ;
  else if (match(TokenType.ellipsis)) {
    parseSpread();
    parseParenItem();
  } else if (match(TokenType.question)) {
    next();
  } else {
    parseMaybeAssign(false, true);
  }
}
function parseIdentifier() {
  next();
  state.tokens[state.tokens.length - 1].type = TokenType.name;
}
function parseAwait() {
  parseMaybeUnary();
}
function parseYield() {
  next();
  if (!match(TokenType.semi) && !canInsertSemicolon()) {
    eat(TokenType.star);
    parseMaybeAssign();
  }
}
function parseModuleExpression() {
  expectContextual(ContextualKeyword._module);
  expect(TokenType.braceL);
  parseBlockBody(TokenType.braceR);
}
function isMaybeDefaultImport(lookahead) {
  return (lookahead.type === TokenType.name || !!(lookahead.type & TokenType.IS_KEYWORD)) && lookahead.contextualKeyword !== ContextualKeyword._from;
}
function flowParseTypeInitialiser(tok) {
  const oldIsType = pushTypeContext(0);
  expect(tok || TokenType.colon);
  flowParseType();
  popTypeContext(oldIsType);
}
function flowParsePredicate() {
  expect(TokenType.modulo);
  expectContextual(ContextualKeyword._checks);
  if (eat(TokenType.parenL)) {
    parseExpression();
    expect(TokenType.parenR);
  }
}
function flowParseTypeAndPredicateInitialiser() {
  const oldIsType = pushTypeContext(0);
  expect(TokenType.colon);
  if (match(TokenType.modulo)) {
    flowParsePredicate();
  } else {
    flowParseType();
    if (match(TokenType.modulo)) {
      flowParsePredicate();
    }
  }
  popTypeContext(oldIsType);
}
function flowParseDeclareClass() {
  next();
  flowParseInterfaceish(true);
}
function flowParseDeclareFunction() {
  next();
  parseIdentifier();
  if (match(TokenType.lessThan)) {
    flowParseTypeParameterDeclaration();
  }
  expect(TokenType.parenL);
  flowParseFunctionTypeParams();
  expect(TokenType.parenR);
  flowParseTypeAndPredicateInitialiser();
  semicolon();
}
function flowParseDeclare() {
  if (match(TokenType._class)) {
    flowParseDeclareClass();
  } else if (match(TokenType._function)) {
    flowParseDeclareFunction();
  } else if (match(TokenType._var)) {
    flowParseDeclareVariable();
  } else if (eatContextual(ContextualKeyword._module)) {
    if (eat(TokenType.dot)) {
      flowParseDeclareModuleExports();
    } else {
      flowParseDeclareModule();
    }
  } else if (isContextual(ContextualKeyword._type)) {
    flowParseDeclareTypeAlias();
  } else if (isContextual(ContextualKeyword._opaque)) {
    flowParseDeclareOpaqueType();
  } else if (isContextual(ContextualKeyword._interface)) {
    flowParseDeclareInterface();
  } else if (match(TokenType._export)) {
    flowParseDeclareExportDeclaration();
  } else {
    unexpected();
  }
}
function flowParseDeclareVariable() {
  next();
  flowParseTypeAnnotatableIdentifier();
  semicolon();
}
function flowParseDeclareModule() {
  if (match(TokenType.string)) {
    parseExprAtom();
  } else {
    parseIdentifier();
  }
  expect(TokenType.braceL);
  while (!match(TokenType.braceR) && !state.error) {
    if (match(TokenType._import)) {
      next();
      parseImport();
    } else {
      unexpected();
    }
  }
  expect(TokenType.braceR);
}
function flowParseDeclareExportDeclaration() {
  expect(TokenType._export);
  if (eat(TokenType._default)) {
    if (match(TokenType._function) || match(TokenType._class)) {
      flowParseDeclare();
    } else {
      flowParseType();
      semicolon();
    }
  } else if (match(TokenType._var) || match(TokenType._function) || match(TokenType._class) || isContextual(ContextualKeyword._opaque)) {
    flowParseDeclare();
  } else if (match(TokenType.star) || match(TokenType.braceL) || isContextual(ContextualKeyword._interface) || isContextual(ContextualKeyword._type) || isContextual(ContextualKeyword._opaque)) {
    parseExport();
  } else {
    unexpected();
  }
}
function flowParseDeclareModuleExports() {
  expectContextual(ContextualKeyword._exports);
  flowParseTypeAnnotation();
  semicolon();
}
function flowParseDeclareTypeAlias() {
  next();
  flowParseTypeAlias();
}
function flowParseDeclareOpaqueType() {
  next();
  flowParseOpaqueType(true);
}
function flowParseDeclareInterface() {
  next();
  flowParseInterfaceish();
}
function flowParseInterfaceish(isClass = false) {
  flowParseRestrictedIdentifier();
  if (match(TokenType.lessThan)) {
    flowParseTypeParameterDeclaration();
  }
  if (eat(TokenType._extends)) {
    do {
      flowParseInterfaceExtends();
    } while (!isClass && eat(TokenType.comma));
  }
  if (isContextual(ContextualKeyword._mixins)) {
    next();
    do {
      flowParseInterfaceExtends();
    } while (eat(TokenType.comma));
  }
  if (isContextual(ContextualKeyword._implements)) {
    next();
    do {
      flowParseInterfaceExtends();
    } while (eat(TokenType.comma));
  }
  flowParseObjectType(isClass, false, isClass);
}
function flowParseInterfaceExtends() {
  flowParseQualifiedTypeIdentifier(false);
  if (match(TokenType.lessThan)) {
    flowParseTypeParameterInstantiation();
  }
}
function flowParseInterface() {
  flowParseInterfaceish();
}
function flowParseRestrictedIdentifier() {
  parseIdentifier();
}
function flowParseTypeAlias() {
  flowParseRestrictedIdentifier();
  if (match(TokenType.lessThan)) {
    flowParseTypeParameterDeclaration();
  }
  flowParseTypeInitialiser(TokenType.eq);
  semicolon();
}
function flowParseOpaqueType(declare) {
  expectContextual(ContextualKeyword._type);
  flowParseRestrictedIdentifier();
  if (match(TokenType.lessThan)) {
    flowParseTypeParameterDeclaration();
  }
  if (match(TokenType.colon)) {
    flowParseTypeInitialiser(TokenType.colon);
  }
  if (!declare) {
    flowParseTypeInitialiser(TokenType.eq);
  }
  semicolon();
}
function flowParseTypeParameter() {
  flowParseVariance();
  flowParseTypeAnnotatableIdentifier();
  if (eat(TokenType.eq)) {
    flowParseType();
  }
}
function flowParseTypeParameterDeclaration() {
  const oldIsType = pushTypeContext(0);
  if (match(TokenType.lessThan) || match(TokenType.typeParameterStart)) {
    next();
  } else {
    unexpected();
  }
  do {
    flowParseTypeParameter();
    if (!match(TokenType.greaterThan)) {
      expect(TokenType.comma);
    }
  } while (!match(TokenType.greaterThan) && !state.error);
  expect(TokenType.greaterThan);
  popTypeContext(oldIsType);
}
function flowParseTypeParameterInstantiation() {
  const oldIsType = pushTypeContext(0);
  expect(TokenType.lessThan);
  while (!match(TokenType.greaterThan) && !state.error) {
    flowParseType();
    if (!match(TokenType.greaterThan)) {
      expect(TokenType.comma);
    }
  }
  expect(TokenType.greaterThan);
  popTypeContext(oldIsType);
}
function flowParseInterfaceType() {
  expectContextual(ContextualKeyword._interface);
  if (eat(TokenType._extends)) {
    do {
      flowParseInterfaceExtends();
    } while (eat(TokenType.comma));
  }
  flowParseObjectType(false, false, false);
}
function flowParseObjectPropertyKey() {
  if (match(TokenType.num) || match(TokenType.string)) {
    parseExprAtom();
  } else {
    parseIdentifier();
  }
}
function flowParseObjectTypeIndexer() {
  if (lookaheadType() === TokenType.colon) {
    flowParseObjectPropertyKey();
    flowParseTypeInitialiser();
  } else {
    flowParseType();
  }
  expect(TokenType.bracketR);
  flowParseTypeInitialiser();
}
function flowParseObjectTypeInternalSlot() {
  flowParseObjectPropertyKey();
  expect(TokenType.bracketR);
  expect(TokenType.bracketR);
  if (match(TokenType.lessThan) || match(TokenType.parenL)) {
    flowParseObjectTypeMethodish();
  } else {
    eat(TokenType.question);
    flowParseTypeInitialiser();
  }
}
function flowParseObjectTypeMethodish() {
  if (match(TokenType.lessThan)) {
    flowParseTypeParameterDeclaration();
  }
  expect(TokenType.parenL);
  while (!match(TokenType.parenR) && !match(TokenType.ellipsis) && !state.error) {
    flowParseFunctionTypeParam();
    if (!match(TokenType.parenR)) {
      expect(TokenType.comma);
    }
  }
  if (eat(TokenType.ellipsis)) {
    flowParseFunctionTypeParam();
  }
  expect(TokenType.parenR);
  flowParseTypeInitialiser();
}
function flowParseObjectTypeCallProperty() {
  flowParseObjectTypeMethodish();
}
function flowParseObjectType(allowStatic, allowExact, allowProto) {
  let endDelim;
  if (allowExact && match(TokenType.braceBarL)) {
    expect(TokenType.braceBarL);
    endDelim = TokenType.braceBarR;
  } else {
    expect(TokenType.braceL);
    endDelim = TokenType.braceR;
  }
  while (!match(endDelim) && !state.error) {
    if (allowProto && isContextual(ContextualKeyword._proto)) {
      const lookahead = lookaheadType();
      if (lookahead !== TokenType.colon && lookahead !== TokenType.question) {
        next();
        allowStatic = false;
      }
    }
    if (allowStatic && isContextual(ContextualKeyword._static)) {
      const lookahead = lookaheadType();
      if (lookahead !== TokenType.colon && lookahead !== TokenType.question) {
        next();
      }
    }
    flowParseVariance();
    if (eat(TokenType.bracketL)) {
      if (eat(TokenType.bracketL)) {
        flowParseObjectTypeInternalSlot();
      } else {
        flowParseObjectTypeIndexer();
      }
    } else if (match(TokenType.parenL) || match(TokenType.lessThan)) {
      flowParseObjectTypeCallProperty();
    } else {
      if (isContextual(ContextualKeyword._get) || isContextual(ContextualKeyword._set)) {
        const lookahead = lookaheadType();
        if (lookahead === TokenType.name || lookahead === TokenType.string || lookahead === TokenType.num) {
          next();
        }
      }
      flowParseObjectTypeProperty();
    }
    flowObjectTypeSemicolon();
  }
  expect(endDelim);
}
function flowParseObjectTypeProperty() {
  if (match(TokenType.ellipsis)) {
    expect(TokenType.ellipsis);
    if (!eat(TokenType.comma)) {
      eat(TokenType.semi);
    }
    if (match(TokenType.braceR)) {
      return;
    }
    flowParseType();
  } else {
    flowParseObjectPropertyKey();
    if (match(TokenType.lessThan) || match(TokenType.parenL)) {
      flowParseObjectTypeMethodish();
    } else {
      eat(TokenType.question);
      flowParseTypeInitialiser();
    }
  }
}
function flowObjectTypeSemicolon() {
  if (!eat(TokenType.semi) && !eat(TokenType.comma) && !match(TokenType.braceR) && !match(TokenType.braceBarR)) {
    unexpected();
  }
}
function flowParseQualifiedTypeIdentifier(initialIdAlreadyParsed) {
  if (!initialIdAlreadyParsed) {
    parseIdentifier();
  }
  while (eat(TokenType.dot)) {
    parseIdentifier();
  }
}
function flowParseGenericType() {
  flowParseQualifiedTypeIdentifier(true);
  if (match(TokenType.lessThan)) {
    flowParseTypeParameterInstantiation();
  }
}
function flowParseTypeofType() {
  expect(TokenType._typeof);
  flowParsePrimaryType();
}
function flowParseTupleType() {
  expect(TokenType.bracketL);
  while (state.pos < input.length && !match(TokenType.bracketR)) {
    flowParseType();
    if (match(TokenType.bracketR)) {
      break;
    }
    expect(TokenType.comma);
  }
  expect(TokenType.bracketR);
}
function flowParseFunctionTypeParam() {
  const lookahead = lookaheadType();
  if (lookahead === TokenType.colon || lookahead === TokenType.question) {
    parseIdentifier();
    eat(TokenType.question);
    flowParseTypeInitialiser();
  } else {
    flowParseType();
  }
}
function flowParseFunctionTypeParams() {
  while (!match(TokenType.parenR) && !match(TokenType.ellipsis) && !state.error) {
    flowParseFunctionTypeParam();
    if (!match(TokenType.parenR)) {
      expect(TokenType.comma);
    }
  }
  if (eat(TokenType.ellipsis)) {
    flowParseFunctionTypeParam();
  }
}
function flowParsePrimaryType() {
  let isGroupedType = false;
  const oldNoAnonFunctionType = state.noAnonFunctionType;
  switch (state.type) {
    case TokenType.name: {
      if (isContextual(ContextualKeyword._interface)) {
        flowParseInterfaceType();
        return;
      }
      parseIdentifier();
      flowParseGenericType();
      return;
    }
    case TokenType.braceL:
      flowParseObjectType(false, false, false);
      return;
    case TokenType.braceBarL:
      flowParseObjectType(false, true, false);
      return;
    case TokenType.bracketL:
      flowParseTupleType();
      return;
    case TokenType.lessThan:
      flowParseTypeParameterDeclaration();
      expect(TokenType.parenL);
      flowParseFunctionTypeParams();
      expect(TokenType.parenR);
      expect(TokenType.arrow);
      flowParseType();
      return;
    case TokenType.parenL:
      next();
      if (!match(TokenType.parenR) && !match(TokenType.ellipsis)) {
        if (match(TokenType.name)) {
          const token = lookaheadType();
          isGroupedType = token !== TokenType.question && token !== TokenType.colon;
        } else {
          isGroupedType = true;
        }
      }
      if (isGroupedType) {
        state.noAnonFunctionType = false;
        flowParseType();
        state.noAnonFunctionType = oldNoAnonFunctionType;
        if (state.noAnonFunctionType || !(match(TokenType.comma) || match(TokenType.parenR) && lookaheadType() === TokenType.arrow)) {
          expect(TokenType.parenR);
          return;
        } else {
          eat(TokenType.comma);
        }
      }
      flowParseFunctionTypeParams();
      expect(TokenType.parenR);
      expect(TokenType.arrow);
      flowParseType();
      return;
    case TokenType.minus:
      next();
      parseLiteral();
      return;
    case TokenType.string:
    case TokenType.num:
    case TokenType._true:
    case TokenType._false:
    case TokenType._null:
    case TokenType._this:
    case TokenType._void:
    case TokenType.star:
      next();
      return;
    default:
      if (state.type === TokenType._typeof) {
        flowParseTypeofType();
        return;
      } else if (state.type & TokenType.IS_KEYWORD) {
        next();
        state.tokens[state.tokens.length - 1].type = TokenType.name;
        return;
      }
  }
  unexpected();
}
function flowParsePostfixType() {
  flowParsePrimaryType();
  while (!canInsertSemicolon() && (match(TokenType.bracketL) || match(TokenType.questionDot))) {
    eat(TokenType.questionDot);
    expect(TokenType.bracketL);
    if (eat(TokenType.bracketR))
      ;
    else {
      flowParseType();
      expect(TokenType.bracketR);
    }
  }
}
function flowParsePrefixType() {
  if (eat(TokenType.question)) {
    flowParsePrefixType();
  } else {
    flowParsePostfixType();
  }
}
function flowParseAnonFunctionWithoutParens() {
  flowParsePrefixType();
  if (!state.noAnonFunctionType && eat(TokenType.arrow)) {
    flowParseType();
  }
}
function flowParseIntersectionType() {
  eat(TokenType.bitwiseAND);
  flowParseAnonFunctionWithoutParens();
  while (eat(TokenType.bitwiseAND)) {
    flowParseAnonFunctionWithoutParens();
  }
}
function flowParseUnionType() {
  eat(TokenType.bitwiseOR);
  flowParseIntersectionType();
  while (eat(TokenType.bitwiseOR)) {
    flowParseIntersectionType();
  }
}
function flowParseType() {
  flowParseUnionType();
}
function flowParseTypeAnnotation() {
  flowParseTypeInitialiser();
}
function flowParseTypeAnnotatableIdentifier() {
  parseIdentifier();
  if (match(TokenType.colon)) {
    flowParseTypeAnnotation();
  }
}
function flowParseVariance() {
  if (match(TokenType.plus) || match(TokenType.minus)) {
    next();
    state.tokens[state.tokens.length - 1].isType = true;
  }
}
function flowParseFunctionBodyAndFinish(funcContextId) {
  if (match(TokenType.colon)) {
    flowParseTypeAndPredicateInitialiser();
  }
  parseFunctionBody(false, funcContextId);
}
function flowParseSubscript(startTokenIndex, noCalls, stopState) {
  if (match(TokenType.questionDot) && lookaheadType() === TokenType.lessThan) {
    if (noCalls) {
      stopState.stop = true;
      return;
    }
    next();
    flowParseTypeParameterInstantiation();
    expect(TokenType.parenL);
    parseCallExpressionArguments();
    return;
  } else if (!noCalls && match(TokenType.lessThan)) {
    const snapshot = state.snapshot();
    flowParseTypeParameterInstantiation();
    expect(TokenType.parenL);
    parseCallExpressionArguments();
    if (state.error) {
      state.restoreFromSnapshot(snapshot);
    } else {
      return;
    }
  }
  baseParseSubscript(startTokenIndex, noCalls, stopState);
}
function flowStartParseNewArguments() {
  if (match(TokenType.lessThan)) {
    const snapshot = state.snapshot();
    flowParseTypeParameterInstantiation();
    if (state.error) {
      state.restoreFromSnapshot(snapshot);
    }
  }
}
function flowTryParseStatement() {
  if (match(TokenType.name) && state.contextualKeyword === ContextualKeyword._interface) {
    const oldIsType = pushTypeContext(0);
    next();
    flowParseInterface();
    popTypeContext(oldIsType);
    return true;
  } else {
    return false;
  }
}
function flowParseIdentifierStatement(contextualKeyword) {
  if (contextualKeyword === ContextualKeyword._declare) {
    if (match(TokenType._class) || match(TokenType.name) || match(TokenType._function) || match(TokenType._var) || match(TokenType._export)) {
      const oldIsType = pushTypeContext(1);
      flowParseDeclare();
      popTypeContext(oldIsType);
    }
  } else if (match(TokenType.name)) {
    if (contextualKeyword === ContextualKeyword._interface) {
      const oldIsType = pushTypeContext(1);
      flowParseInterface();
      popTypeContext(oldIsType);
    } else if (contextualKeyword === ContextualKeyword._type) {
      const oldIsType = pushTypeContext(1);
      flowParseTypeAlias();
      popTypeContext(oldIsType);
    } else if (contextualKeyword === ContextualKeyword._opaque) {
      const oldIsType = pushTypeContext(1);
      flowParseOpaqueType(false);
      popTypeContext(oldIsType);
    }
  }
  semicolon();
}
function flowShouldParseExportDeclaration() {
  return isContextual(ContextualKeyword._type) || isContextual(ContextualKeyword._interface) || isContextual(ContextualKeyword._opaque);
}
function flowShouldDisallowExportDefaultSpecifier() {
  return match(TokenType.name) && (state.contextualKeyword === ContextualKeyword._type || state.contextualKeyword === ContextualKeyword._interface || state.contextualKeyword === ContextualKeyword._opaque);
}
function flowParseExportDeclaration() {
  if (isContextual(ContextualKeyword._type)) {
    const oldIsType = pushTypeContext(1);
    next();
    if (match(TokenType.braceL)) {
      parseExportSpecifiers();
      parseExportFrom();
    } else {
      flowParseTypeAlias();
    }
    popTypeContext(oldIsType);
  } else if (isContextual(ContextualKeyword._opaque)) {
    const oldIsType = pushTypeContext(1);
    next();
    flowParseOpaqueType(false);
    popTypeContext(oldIsType);
  } else if (isContextual(ContextualKeyword._interface)) {
    const oldIsType = pushTypeContext(1);
    next();
    flowParseInterface();
    popTypeContext(oldIsType);
  } else {
    parseStatement(true);
  }
}
function flowShouldParseExportStar() {
  return match(TokenType.star) || isContextual(ContextualKeyword._type) && lookaheadType() === TokenType.star;
}
function flowParseExportStar() {
  if (eatContextual(ContextualKeyword._type)) {
    const oldIsType = pushTypeContext(2);
    baseParseExportStar();
    popTypeContext(oldIsType);
  } else {
    baseParseExportStar();
  }
}
function flowAfterParseClassSuper(hasSuper) {
  if (hasSuper && match(TokenType.lessThan)) {
    flowParseTypeParameterInstantiation();
  }
  if (isContextual(ContextualKeyword._implements)) {
    const oldIsType = pushTypeContext(0);
    next();
    state.tokens[state.tokens.length - 1].type = TokenType._implements;
    do {
      flowParseRestrictedIdentifier();
      if (match(TokenType.lessThan)) {
        flowParseTypeParameterInstantiation();
      }
    } while (eat(TokenType.comma));
    popTypeContext(oldIsType);
  }
}
function flowStartParseObjPropValue() {
  if (match(TokenType.lessThan)) {
    flowParseTypeParameterDeclaration();
    if (!match(TokenType.parenL))
      unexpected();
  }
}
function flowParseAssignableListItemTypes() {
  const oldIsType = pushTypeContext(0);
  eat(TokenType.question);
  if (match(TokenType.colon)) {
    flowParseTypeAnnotation();
  }
  popTypeContext(oldIsType);
}
function flowStartParseImportSpecifiers() {
  if (match(TokenType._typeof) || isContextual(ContextualKeyword._type)) {
    const lh = lookaheadTypeAndKeyword();
    if (isMaybeDefaultImport(lh) || lh.type === TokenType.braceL || lh.type === TokenType.star) {
      next();
    }
  }
}
function flowParseImportSpecifier() {
  const isTypeKeyword = state.contextualKeyword === ContextualKeyword._type || state.type === TokenType._typeof;
  if (isTypeKeyword) {
    next();
  } else {
    parseIdentifier();
  }
  if (isContextual(ContextualKeyword._as) && !isLookaheadContextual(ContextualKeyword._as)) {
    parseIdentifier();
    if (isTypeKeyword && !match(TokenType.name) && !(state.type & TokenType.IS_KEYWORD))
      ;
    else {
      parseIdentifier();
    }
  } else if (isTypeKeyword && (match(TokenType.name) || !!(state.type & TokenType.IS_KEYWORD))) {
    parseIdentifier();
    if (eatContextual(ContextualKeyword._as)) {
      parseIdentifier();
    }
  }
}
function flowStartParseFunctionParams() {
  if (match(TokenType.lessThan)) {
    const oldIsType = pushTypeContext(0);
    flowParseTypeParameterDeclaration();
    popTypeContext(oldIsType);
  }
}
function flowAfterParseVarHead() {
  if (match(TokenType.colon)) {
    flowParseTypeAnnotation();
  }
}
function flowStartParseAsyncArrowFromCallExpression() {
  if (match(TokenType.colon)) {
    const oldNoAnonFunctionType = state.noAnonFunctionType;
    state.noAnonFunctionType = true;
    flowParseTypeAnnotation();
    state.noAnonFunctionType = oldNoAnonFunctionType;
  }
}
function flowParseMaybeAssign(noIn, isWithinParens) {
  if (match(TokenType.lessThan)) {
    const snapshot = state.snapshot();
    let wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
    if (state.error) {
      state.restoreFromSnapshot(snapshot);
      state.type = TokenType.typeParameterStart;
    } else {
      return wasArrow;
    }
    const oldIsType = pushTypeContext(0);
    flowParseTypeParameterDeclaration();
    popTypeContext(oldIsType);
    wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
    if (wasArrow) {
      return true;
    }
    unexpected();
  }
  return baseParseMaybeAssign(noIn, isWithinParens);
}
function flowParseArrow() {
  if (match(TokenType.colon)) {
    const oldIsType = pushTypeContext(0);
    const snapshot = state.snapshot();
    const oldNoAnonFunctionType = state.noAnonFunctionType;
    state.noAnonFunctionType = true;
    flowParseTypeAndPredicateInitialiser();
    state.noAnonFunctionType = oldNoAnonFunctionType;
    if (canInsertSemicolon())
      unexpected();
    if (!match(TokenType.arrow))
      unexpected();
    if (state.error) {
      state.restoreFromSnapshot(snapshot);
    }
    popTypeContext(oldIsType);
  }
  return eat(TokenType.arrow);
}
function flowParseSubscripts(startTokenIndex, noCalls = false) {
  if (state.tokens[state.tokens.length - 1].contextualKeyword === ContextualKeyword._async && match(TokenType.lessThan)) {
    const snapshot = state.snapshot();
    const wasArrow = parseAsyncArrowWithTypeParameters();
    if (wasArrow && !state.error) {
      return;
    }
    state.restoreFromSnapshot(snapshot);
  }
  baseParseSubscripts(startTokenIndex, noCalls);
}
function parseAsyncArrowWithTypeParameters() {
  state.scopeDepth++;
  const startTokenIndex = state.tokens.length;
  parseFunctionParams();
  if (!parseArrow()) {
    return false;
  }
  parseArrowExpression(startTokenIndex);
  return true;
}
function parseTopLevel() {
  parseBlockBody(TokenType.eof);
  state.scopes.push(new Scope(0, state.tokens.length, true));
  if (state.scopeDepth !== 0) {
    throw new Error(`Invalid scope depth at end of file: ${state.scopeDepth}`);
  }
  return new File$1(state.tokens, state.scopes);
}
function parseStatement(declaration) {
  if (isFlowEnabled) {
    if (flowTryParseStatement()) {
      return;
    }
  }
  if (match(TokenType.at)) {
    parseDecorators();
  }
  parseStatementContent(declaration);
}
function parseStatementContent(declaration) {
  if (isTypeScriptEnabled) {
    if (tsTryParseStatementContent()) {
      return;
    }
  }
  const starttype = state.type;
  switch (starttype) {
    case TokenType._break:
    case TokenType._continue:
      parseBreakContinueStatement();
      return;
    case TokenType._debugger:
      parseDebuggerStatement();
      return;
    case TokenType._do:
      parseDoStatement();
      return;
    case TokenType._for:
      parseForStatement();
      return;
    case TokenType._function:
      if (lookaheadType() === TokenType.dot)
        break;
      if (!declaration)
        unexpected();
      parseFunctionStatement();
      return;
    case TokenType._class:
      if (!declaration)
        unexpected();
      parseClass(true);
      return;
    case TokenType._if:
      parseIfStatement();
      return;
    case TokenType._return:
      parseReturnStatement();
      return;
    case TokenType._switch:
      parseSwitchStatement();
      return;
    case TokenType._throw:
      parseThrowStatement();
      return;
    case TokenType._try:
      parseTryStatement();
      return;
    case TokenType._let:
    case TokenType._const:
      if (!declaration)
        unexpected();
    case TokenType._var:
      parseVarStatement(starttype);
      return;
    case TokenType._while:
      parseWhileStatement();
      return;
    case TokenType.braceL:
      parseBlock();
      return;
    case TokenType.semi:
      parseEmptyStatement();
      return;
    case TokenType._export:
    case TokenType._import: {
      const nextType = lookaheadType();
      if (nextType === TokenType.parenL || nextType === TokenType.dot) {
        break;
      }
      next();
      if (starttype === TokenType._import) {
        parseImport();
      } else {
        parseExport();
      }
      return;
    }
    case TokenType.name:
      if (state.contextualKeyword === ContextualKeyword._async) {
        const functionStart = state.start;
        const snapshot = state.snapshot();
        next();
        if (match(TokenType._function) && !canInsertSemicolon()) {
          expect(TokenType._function);
          parseFunction(functionStart, true);
          return;
        } else {
          state.restoreFromSnapshot(snapshot);
        }
      }
  }
  const initialTokensLength = state.tokens.length;
  parseExpression();
  let simpleName = null;
  if (state.tokens.length === initialTokensLength + 1) {
    const token = state.tokens[state.tokens.length - 1];
    if (token.type === TokenType.name) {
      simpleName = token.contextualKeyword;
    }
  }
  if (simpleName == null) {
    semicolon();
    return;
  }
  if (eat(TokenType.colon)) {
    parseLabeledStatement();
  } else {
    parseIdentifierStatement(simpleName);
  }
}
function parseDecorators() {
  while (match(TokenType.at)) {
    parseDecorator();
  }
}
function parseDecorator() {
  next();
  if (eat(TokenType.parenL)) {
    parseExpression();
    expect(TokenType.parenR);
  } else {
    parseIdentifier();
    while (eat(TokenType.dot)) {
      parseIdentifier();
    }
  }
  parseMaybeDecoratorArguments();
}
function parseMaybeDecoratorArguments() {
  if (isTypeScriptEnabled) {
    tsParseMaybeDecoratorArguments();
  } else {
    baseParseMaybeDecoratorArguments();
  }
}
function baseParseMaybeDecoratorArguments() {
  if (eat(TokenType.parenL)) {
    parseCallExpressionArguments();
  }
}
function parseBreakContinueStatement() {
  next();
  if (!isLineTerminator()) {
    parseIdentifier();
    semicolon();
  }
}
function parseDebuggerStatement() {
  next();
  semicolon();
}
function parseDoStatement() {
  next();
  parseStatement(false);
  expect(TokenType._while);
  parseParenExpression();
  eat(TokenType.semi);
}
function parseForStatement() {
  state.scopeDepth++;
  const startTokenIndex = state.tokens.length;
  parseAmbiguousForStatement();
  const endTokenIndex = state.tokens.length;
  state.scopes.push(new Scope(startTokenIndex, endTokenIndex, false));
  state.scopeDepth--;
}
function parseAmbiguousForStatement() {
  next();
  let forAwait = false;
  if (isContextual(ContextualKeyword._await)) {
    forAwait = true;
    next();
  }
  expect(TokenType.parenL);
  if (match(TokenType.semi)) {
    if (forAwait) {
      unexpected();
    }
    parseFor();
    return;
  }
  if (match(TokenType._var) || match(TokenType._let) || match(TokenType._const)) {
    const varKind = state.type;
    next();
    parseVar(true, varKind);
    if (match(TokenType._in) || isContextual(ContextualKeyword._of)) {
      parseForIn(forAwait);
      return;
    }
    parseFor();
    return;
  }
  parseExpression(true);
  if (match(TokenType._in) || isContextual(ContextualKeyword._of)) {
    parseForIn(forAwait);
    return;
  }
  if (forAwait) {
    unexpected();
  }
  parseFor();
}
function parseFunctionStatement() {
  const functionStart = state.start;
  next();
  parseFunction(functionStart, true);
}
function parseIfStatement() {
  next();
  parseParenExpression();
  parseStatement(false);
  if (eat(TokenType._else)) {
    parseStatement(false);
  }
}
function parseReturnStatement() {
  next();
  if (!isLineTerminator()) {
    parseExpression();
    semicolon();
  }
}
function parseSwitchStatement() {
  next();
  parseParenExpression();
  state.scopeDepth++;
  const startTokenIndex = state.tokens.length;
  expect(TokenType.braceL);
  while (!match(TokenType.braceR) && !state.error) {
    if (match(TokenType._case) || match(TokenType._default)) {
      const isCase = match(TokenType._case);
      next();
      if (isCase) {
        parseExpression();
      }
      expect(TokenType.colon);
    } else {
      parseStatement(true);
    }
  }
  next();
  const endTokenIndex = state.tokens.length;
  state.scopes.push(new Scope(startTokenIndex, endTokenIndex, false));
  state.scopeDepth--;
}
function parseThrowStatement() {
  next();
  parseExpression();
  semicolon();
}
function parseCatchClauseParam() {
  parseBindingAtom(true);
  if (isTypeScriptEnabled) {
    tsTryParseTypeAnnotation();
  }
}
function parseTryStatement() {
  next();
  parseBlock();
  if (match(TokenType._catch)) {
    next();
    let catchBindingStartTokenIndex = null;
    if (match(TokenType.parenL)) {
      state.scopeDepth++;
      catchBindingStartTokenIndex = state.tokens.length;
      expect(TokenType.parenL);
      parseCatchClauseParam();
      expect(TokenType.parenR);
    }
    parseBlock();
    if (catchBindingStartTokenIndex != null) {
      const endTokenIndex = state.tokens.length;
      state.scopes.push(new Scope(catchBindingStartTokenIndex, endTokenIndex, false));
      state.scopeDepth--;
    }
  }
  if (eat(TokenType._finally)) {
    parseBlock();
  }
}
function parseVarStatement(kind) {
  next();
  parseVar(false, kind);
  semicolon();
}
function parseWhileStatement() {
  next();
  parseParenExpression();
  parseStatement(false);
}
function parseEmptyStatement() {
  next();
}
function parseLabeledStatement() {
  parseStatement(true);
}
function parseIdentifierStatement(contextualKeyword) {
  if (isTypeScriptEnabled) {
    tsParseIdentifierStatement(contextualKeyword);
  } else if (isFlowEnabled) {
    flowParseIdentifierStatement(contextualKeyword);
  } else {
    semicolon();
  }
}
function parseBlock(isFunctionScope = false, contextId = 0) {
  const startTokenIndex = state.tokens.length;
  state.scopeDepth++;
  expect(TokenType.braceL);
  if (contextId) {
    state.tokens[state.tokens.length - 1].contextId = contextId;
  }
  parseBlockBody(TokenType.braceR);
  if (contextId) {
    state.tokens[state.tokens.length - 1].contextId = contextId;
  }
  const endTokenIndex = state.tokens.length;
  state.scopes.push(new Scope(startTokenIndex, endTokenIndex, isFunctionScope));
  state.scopeDepth--;
}
function parseBlockBody(end) {
  while (!eat(end) && !state.error) {
    parseStatement(true);
  }
}
function parseFor() {
  expect(TokenType.semi);
  if (!match(TokenType.semi)) {
    parseExpression();
  }
  expect(TokenType.semi);
  if (!match(TokenType.parenR)) {
    parseExpression();
  }
  expect(TokenType.parenR);
  parseStatement(false);
}
function parseForIn(forAwait) {
  if (forAwait) {
    eatContextual(ContextualKeyword._of);
  } else {
    next();
  }
  parseExpression();
  expect(TokenType.parenR);
  parseStatement(false);
}
function parseVar(isFor, kind) {
  while (true) {
    const isBlockScope = kind === TokenType._const || kind === TokenType._let;
    parseVarHead(isBlockScope);
    if (eat(TokenType.eq)) {
      const eqIndex = state.tokens.length - 1;
      parseMaybeAssign(isFor);
      state.tokens[eqIndex].rhsEndIndex = state.tokens.length;
    }
    if (!eat(TokenType.comma)) {
      break;
    }
  }
}
function parseVarHead(isBlockScope) {
  parseBindingAtom(isBlockScope);
  if (isTypeScriptEnabled) {
    tsAfterParseVarHead();
  } else if (isFlowEnabled) {
    flowAfterParseVarHead();
  }
}
function parseFunction(functionStart, isStatement, optionalId = false) {
  if (match(TokenType.star)) {
    next();
  }
  if (isStatement && !optionalId && !match(TokenType.name) && !match(TokenType._yield)) {
    unexpected();
  }
  let nameScopeStartTokenIndex = null;
  if (match(TokenType.name)) {
    if (!isStatement) {
      nameScopeStartTokenIndex = state.tokens.length;
      state.scopeDepth++;
    }
    parseBindingIdentifier(false);
  }
  const startTokenIndex = state.tokens.length;
  state.scopeDepth++;
  parseFunctionParams();
  parseFunctionBodyAndFinish(functionStart);
  const endTokenIndex = state.tokens.length;
  state.scopes.push(new Scope(startTokenIndex, endTokenIndex, true));
  state.scopeDepth--;
  if (nameScopeStartTokenIndex !== null) {
    state.scopes.push(new Scope(nameScopeStartTokenIndex, endTokenIndex, true));
    state.scopeDepth--;
  }
}
function parseFunctionParams(allowModifiers = false, funcContextId = 0) {
  if (isTypeScriptEnabled) {
    tsStartParseFunctionParams();
  } else if (isFlowEnabled) {
    flowStartParseFunctionParams();
  }
  expect(TokenType.parenL);
  if (funcContextId) {
    state.tokens[state.tokens.length - 1].contextId = funcContextId;
  }
  parseBindingList(TokenType.parenR, false, false, allowModifiers, funcContextId);
  if (funcContextId) {
    state.tokens[state.tokens.length - 1].contextId = funcContextId;
  }
}
function parseClass(isStatement, optionalId = false) {
  const contextId = getNextContextId();
  next();
  state.tokens[state.tokens.length - 1].contextId = contextId;
  state.tokens[state.tokens.length - 1].isExpression = !isStatement;
  let nameScopeStartTokenIndex = null;
  if (!isStatement) {
    nameScopeStartTokenIndex = state.tokens.length;
    state.scopeDepth++;
  }
  parseClassId(isStatement, optionalId);
  parseClassSuper();
  const openBraceIndex = state.tokens.length;
  parseClassBody(contextId);
  if (state.error) {
    return;
  }
  state.tokens[openBraceIndex].contextId = contextId;
  state.tokens[state.tokens.length - 1].contextId = contextId;
  if (nameScopeStartTokenIndex !== null) {
    const endTokenIndex = state.tokens.length;
    state.scopes.push(new Scope(nameScopeStartTokenIndex, endTokenIndex, false));
    state.scopeDepth--;
  }
}
function isClassProperty() {
  return match(TokenType.eq) || match(TokenType.semi) || match(TokenType.braceR) || match(TokenType.bang) || match(TokenType.colon);
}
function isClassMethod() {
  return match(TokenType.parenL) || match(TokenType.lessThan);
}
function parseClassBody(classContextId) {
  expect(TokenType.braceL);
  while (!eat(TokenType.braceR) && !state.error) {
    if (eat(TokenType.semi)) {
      continue;
    }
    if (match(TokenType.at)) {
      parseDecorator();
      continue;
    }
    const memberStart = state.start;
    parseClassMember(memberStart, classContextId);
  }
}
function parseClassMember(memberStart, classContextId) {
  if (isTypeScriptEnabled) {
    tsParseModifiers([
      ContextualKeyword._declare,
      ContextualKeyword._public,
      ContextualKeyword._protected,
      ContextualKeyword._private,
      ContextualKeyword._override
    ]);
  }
  let isStatic = false;
  if (match(TokenType.name) && state.contextualKeyword === ContextualKeyword._static) {
    parseIdentifier();
    if (isClassMethod()) {
      parseClassMethod(memberStart, false);
      return;
    } else if (isClassProperty()) {
      parseClassProperty();
      return;
    }
    state.tokens[state.tokens.length - 1].type = TokenType._static;
    isStatic = true;
    if (match(TokenType.braceL)) {
      state.tokens[state.tokens.length - 1].contextId = classContextId;
      parseBlock();
      return;
    }
  }
  parseClassMemberWithIsStatic(memberStart, isStatic, classContextId);
}
function parseClassMemberWithIsStatic(memberStart, isStatic, classContextId) {
  if (isTypeScriptEnabled) {
    if (tsTryParseClassMemberWithIsStatic(isStatic)) {
      return;
    }
  }
  if (eat(TokenType.star)) {
    parseClassPropertyName(classContextId);
    parseClassMethod(memberStart, false);
    return;
  }
  parseClassPropertyName(classContextId);
  let isConstructor = false;
  const token = state.tokens[state.tokens.length - 1];
  if (token.contextualKeyword === ContextualKeyword._constructor) {
    isConstructor = true;
  }
  parsePostMemberNameModifiers();
  if (isClassMethod()) {
    parseClassMethod(memberStart, isConstructor);
  } else if (isClassProperty()) {
    parseClassProperty();
  } else if (token.contextualKeyword === ContextualKeyword._async && !isLineTerminator()) {
    state.tokens[state.tokens.length - 1].type = TokenType._async;
    const isGenerator = match(TokenType.star);
    if (isGenerator) {
      next();
    }
    parseClassPropertyName(classContextId);
    parsePostMemberNameModifiers();
    parseClassMethod(memberStart, false);
  } else if ((token.contextualKeyword === ContextualKeyword._get || token.contextualKeyword === ContextualKeyword._set) && !(isLineTerminator() && match(TokenType.star))) {
    if (token.contextualKeyword === ContextualKeyword._get) {
      state.tokens[state.tokens.length - 1].type = TokenType._get;
    } else {
      state.tokens[state.tokens.length - 1].type = TokenType._set;
    }
    parseClassPropertyName(classContextId);
    parseClassMethod(memberStart, false);
  } else if (isLineTerminator()) {
    parseClassProperty();
  } else {
    unexpected();
  }
}
function parseClassMethod(functionStart, isConstructor) {
  if (isTypeScriptEnabled) {
    tsTryParseTypeParameters();
  } else if (isFlowEnabled) {
    if (match(TokenType.lessThan)) {
      flowParseTypeParameterDeclaration();
    }
  }
  parseMethod(functionStart, isConstructor);
}
function parseClassPropertyName(classContextId) {
  parsePropertyName(classContextId);
}
function parsePostMemberNameModifiers() {
  if (isTypeScriptEnabled) {
    const oldIsType = pushTypeContext(0);
    eat(TokenType.question);
    popTypeContext(oldIsType);
  }
}
function parseClassProperty() {
  if (isTypeScriptEnabled) {
    eat(TokenType.bang);
    tsTryParseTypeAnnotation();
  } else if (isFlowEnabled) {
    if (match(TokenType.colon)) {
      flowParseTypeAnnotation();
    }
  }
  if (match(TokenType.eq)) {
    const equalsTokenIndex = state.tokens.length;
    next();
    parseMaybeAssign();
    state.tokens[equalsTokenIndex].rhsEndIndex = state.tokens.length;
  }
  semicolon();
}
function parseClassId(isStatement, optionalId = false) {
  if (isTypeScriptEnabled && (!isStatement || optionalId) && isContextual(ContextualKeyword._implements)) {
    return;
  }
  if (match(TokenType.name)) {
    parseBindingIdentifier(true);
  }
  if (isTypeScriptEnabled) {
    tsTryParseTypeParameters();
  } else if (isFlowEnabled) {
    if (match(TokenType.lessThan)) {
      flowParseTypeParameterDeclaration();
    }
  }
}
function parseClassSuper() {
  let hasSuper = false;
  if (eat(TokenType._extends)) {
    parseExprSubscripts();
    hasSuper = true;
  } else {
    hasSuper = false;
  }
  if (isTypeScriptEnabled) {
    tsAfterParseClassSuper(hasSuper);
  } else if (isFlowEnabled) {
    flowAfterParseClassSuper(hasSuper);
  }
}
function parseExport() {
  const exportIndex = state.tokens.length - 1;
  if (isTypeScriptEnabled) {
    if (tsTryParseExport()) {
      return;
    }
  }
  if (shouldParseExportStar()) {
    parseExportStar();
  } else if (isExportDefaultSpecifier()) {
    parseIdentifier();
    if (match(TokenType.comma) && lookaheadType() === TokenType.star) {
      expect(TokenType.comma);
      expect(TokenType.star);
      expectContextual(ContextualKeyword._as);
      parseIdentifier();
    } else {
      parseExportSpecifiersMaybe();
    }
    parseExportFrom();
  } else if (eat(TokenType._default)) {
    parseExportDefaultExpression();
  } else if (shouldParseExportDeclaration()) {
    parseExportDeclaration();
  } else {
    parseExportSpecifiers();
    parseExportFrom();
  }
  state.tokens[exportIndex].rhsEndIndex = state.tokens.length;
}
function parseExportDefaultExpression() {
  if (isTypeScriptEnabled) {
    if (tsTryParseExportDefaultExpression()) {
      return;
    }
  }
  const functionStart = state.start;
  if (eat(TokenType._function)) {
    parseFunction(functionStart, true, true);
  } else if (isContextual(ContextualKeyword._async) && lookaheadType() === TokenType._function) {
    eatContextual(ContextualKeyword._async);
    eat(TokenType._function);
    parseFunction(functionStart, true, true);
  } else if (match(TokenType._class)) {
    parseClass(true, true);
  } else if (match(TokenType.at)) {
    parseDecorators();
    parseClass(true, true);
  } else {
    parseMaybeAssign();
    semicolon();
  }
}
function parseExportDeclaration() {
  if (isTypeScriptEnabled) {
    tsParseExportDeclaration();
  } else if (isFlowEnabled) {
    flowParseExportDeclaration();
  } else {
    parseStatement(true);
  }
}
function isExportDefaultSpecifier() {
  if (isTypeScriptEnabled && tsIsDeclarationStart()) {
    return false;
  } else if (isFlowEnabled && flowShouldDisallowExportDefaultSpecifier()) {
    return false;
  }
  if (match(TokenType.name)) {
    return state.contextualKeyword !== ContextualKeyword._async;
  }
  if (!match(TokenType._default)) {
    return false;
  }
  const _next = nextTokenStart();
  const lookahead = lookaheadTypeAndKeyword();
  const hasFrom = lookahead.type === TokenType.name && lookahead.contextualKeyword === ContextualKeyword._from;
  if (lookahead.type === TokenType.comma) {
    return true;
  }
  if (hasFrom) {
    const nextAfterFrom = input.charCodeAt(nextTokenStartSince(_next + 4));
    return nextAfterFrom === charCodes.quotationMark || nextAfterFrom === charCodes.apostrophe;
  }
  return false;
}
function parseExportSpecifiersMaybe() {
  if (eat(TokenType.comma)) {
    parseExportSpecifiers();
  }
}
function parseExportFrom() {
  if (eatContextual(ContextualKeyword._from)) {
    parseExprAtom();
  }
  semicolon();
}
function shouldParseExportStar() {
  if (isFlowEnabled) {
    return flowShouldParseExportStar();
  } else {
    return match(TokenType.star);
  }
}
function parseExportStar() {
  if (isFlowEnabled) {
    flowParseExportStar();
  } else {
    baseParseExportStar();
  }
}
function baseParseExportStar() {
  expect(TokenType.star);
  if (isContextual(ContextualKeyword._as)) {
    parseExportNamespace();
  } else {
    parseExportFrom();
  }
}
function parseExportNamespace() {
  next();
  state.tokens[state.tokens.length - 1].type = TokenType._as;
  parseIdentifier();
  parseExportSpecifiersMaybe();
  parseExportFrom();
}
function shouldParseExportDeclaration() {
  return isTypeScriptEnabled && tsIsDeclarationStart() || isFlowEnabled && flowShouldParseExportDeclaration() || state.type === TokenType._var || state.type === TokenType._const || state.type === TokenType._let || state.type === TokenType._function || state.type === TokenType._class || isContextual(ContextualKeyword._async) || match(TokenType.at);
}
function parseExportSpecifiers() {
  let first = true;
  expect(TokenType.braceL);
  while (!eat(TokenType.braceR) && !state.error) {
    if (first) {
      first = false;
    } else {
      expect(TokenType.comma);
      if (eat(TokenType.braceR)) {
        break;
      }
    }
    parseIdentifier();
    state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.ExportAccess;
    if (eatContextual(ContextualKeyword._as)) {
      parseIdentifier();
    }
  }
}
function parseImport() {
  if (isTypeScriptEnabled && match(TokenType.name) && lookaheadType() === TokenType.eq) {
    tsParseImportEqualsDeclaration();
    return;
  }
  if (isTypeScriptEnabled && isContextual(ContextualKeyword._type)) {
    const lookahead = lookaheadType();
    if (lookahead === TokenType.name) {
      expectContextual(ContextualKeyword._type);
      if (lookaheadType() === TokenType.eq) {
        tsParseImportEqualsDeclaration();
        return;
      }
    } else if (lookahead === TokenType.star || lookahead === TokenType.braceL) {
      expectContextual(ContextualKeyword._type);
    }
  }
  if (match(TokenType.string)) {
    parseExprAtom();
  } else {
    parseImportSpecifiers();
    expectContextual(ContextualKeyword._from);
    parseExprAtom();
  }
  semicolon();
}
function shouldParseDefaultImport() {
  return match(TokenType.name);
}
function parseImportSpecifierLocal() {
  parseImportedIdentifier();
}
function parseImportSpecifiers() {
  if (isFlowEnabled) {
    flowStartParseImportSpecifiers();
  }
  let first = true;
  if (shouldParseDefaultImport()) {
    parseImportSpecifierLocal();
    if (!eat(TokenType.comma))
      return;
  }
  if (match(TokenType.star)) {
    next();
    expectContextual(ContextualKeyword._as);
    parseImportSpecifierLocal();
    return;
  }
  expect(TokenType.braceL);
  while (!eat(TokenType.braceR) && !state.error) {
    if (first) {
      first = false;
    } else {
      if (eat(TokenType.colon)) {
        unexpected("ES2015 named imports do not destructure. Use another statement for destructuring after the import.");
      }
      expect(TokenType.comma);
      if (eat(TokenType.braceR)) {
        break;
      }
    }
    parseImportSpecifier();
  }
}
function parseImportSpecifier() {
  if (isFlowEnabled) {
    flowParseImportSpecifier();
    return;
  }
  parseImportedIdentifier();
  if (isContextual(ContextualKeyword._as)) {
    state.tokens[state.tokens.length - 1].identifierRole = IdentifierRole.ImportAccess;
    next();
    parseImportedIdentifier();
  }
}
function parseFile() {
  if (state.pos === 0 && input.charCodeAt(0) === charCodes.numberSign && input.charCodeAt(1) === charCodes.exclamationMark) {
    skipLineComment(2);
  }
  nextToken();
  return parseTopLevel();
}
class File$1 {
  constructor(tokens, scopes) {
    this.tokens = tokens;
    this.scopes = scopes;
  }
}
function parse(input2, isJSXEnabled2, isTypeScriptEnabled2, isFlowEnabled2) {
  if (isFlowEnabled2 && isTypeScriptEnabled2) {
    throw new Error("Cannot combine flow and typescript plugins.");
  }
  initParser(input2, isJSXEnabled2, isTypeScriptEnabled2, isFlowEnabled2);
  const result = parseFile();
  if (state.error) {
    throw augmentError(state.error);
  }
  return result;
}
function isAsyncOperation(tokens) {
  let index = tokens.currentIndex();
  let depth = 0;
  const startToken = tokens.currentToken();
  do {
    const token = tokens.tokens[index];
    if (token.isOptionalChainStart) {
      depth++;
    }
    if (token.isOptionalChainEnd) {
      depth--;
    }
    depth += token.numNullishCoalesceStarts;
    depth -= token.numNullishCoalesceEnds;
    if (token.contextualKeyword === ContextualKeyword._await && token.identifierRole == null && token.scopeDepth === startToken.scopeDepth) {
      return true;
    }
    index += 1;
  } while (depth > 0 && index < tokens.tokens.length);
  return false;
}
class TokenProcessor {
  __init() {
    this.resultCode = "";
  }
  __init2() {
    this.tokenIndex = 0;
  }
  constructor(code, tokens, isFlowEnabled2, disableESTransforms, helperManager) {
    this.code = code;
    this.tokens = tokens;
    this.isFlowEnabled = isFlowEnabled2;
    this.disableESTransforms = disableESTransforms;
    this.helperManager = helperManager;
    TokenProcessor.prototype.__init.call(this);
    TokenProcessor.prototype.__init2.call(this);
  }
  snapshot() {
    return { resultCode: this.resultCode, tokenIndex: this.tokenIndex };
  }
  restoreToSnapshot(snapshot) {
    this.resultCode = snapshot.resultCode;
    this.tokenIndex = snapshot.tokenIndex;
  }
  getResultCodeIndex() {
    return this.resultCode.length;
  }
  reset() {
    this.resultCode = "";
    this.tokenIndex = 0;
  }
  matchesContextualAtIndex(index, contextualKeyword) {
    return this.matches1AtIndex(index, TokenType.name) && this.tokens[index].contextualKeyword === contextualKeyword;
  }
  identifierNameAtIndex(index) {
    return this.identifierNameForToken(this.tokens[index]);
  }
  identifierName() {
    return this.identifierNameForToken(this.currentToken());
  }
  identifierNameForToken(token) {
    return this.code.slice(token.start, token.end);
  }
  rawCodeForToken(token) {
    return this.code.slice(token.start, token.end);
  }
  stringValueAtIndex(index) {
    return this.stringValueForToken(this.tokens[index]);
  }
  stringValue() {
    return this.stringValueForToken(this.currentToken());
  }
  stringValueForToken(token) {
    return this.code.slice(token.start + 1, token.end - 1);
  }
  matches1AtIndex(index, t1) {
    return this.tokens[index].type === t1;
  }
  matches2AtIndex(index, t1, t2) {
    return this.tokens[index].type === t1 && this.tokens[index + 1].type === t2;
  }
  matches3AtIndex(index, t1, t2, t3) {
    return this.tokens[index].type === t1 && this.tokens[index + 1].type === t2 && this.tokens[index + 2].type === t3;
  }
  matches1(t1) {
    return this.tokens[this.tokenIndex].type === t1;
  }
  matches2(t1, t2) {
    return this.tokens[this.tokenIndex].type === t1 && this.tokens[this.tokenIndex + 1].type === t2;
  }
  matches3(t1, t2, t3) {
    return this.tokens[this.tokenIndex].type === t1 && this.tokens[this.tokenIndex + 1].type === t2 && this.tokens[this.tokenIndex + 2].type === t3;
  }
  matches4(t1, t2, t3, t4) {
    return this.tokens[this.tokenIndex].type === t1 && this.tokens[this.tokenIndex + 1].type === t2 && this.tokens[this.tokenIndex + 2].type === t3 && this.tokens[this.tokenIndex + 3].type === t4;
  }
  matches5(t1, t2, t3, t4, t5) {
    return this.tokens[this.tokenIndex].type === t1 && this.tokens[this.tokenIndex + 1].type === t2 && this.tokens[this.tokenIndex + 2].type === t3 && this.tokens[this.tokenIndex + 3].type === t4 && this.tokens[this.tokenIndex + 4].type === t5;
  }
  matchesContextual(contextualKeyword) {
    return this.matchesContextualAtIndex(this.tokenIndex, contextualKeyword);
  }
  matchesContextIdAndLabel(type, contextId) {
    return this.matches1(type) && this.currentToken().contextId === contextId;
  }
  previousWhitespaceAndComments() {
    let whitespaceAndComments = this.code.slice(this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0, this.tokenIndex < this.tokens.length ? this.tokens[this.tokenIndex].start : this.code.length);
    if (this.isFlowEnabled) {
      whitespaceAndComments = whitespaceAndComments.replace(/@flow/g, "");
    }
    return whitespaceAndComments;
  }
  replaceToken(newCode) {
    this.resultCode += this.previousWhitespaceAndComments();
    this.appendTokenPrefix();
    this.resultCode += newCode;
    this.appendTokenSuffix();
    this.tokenIndex++;
  }
  replaceTokenTrimmingLeftWhitespace(newCode) {
    this.resultCode += this.previousWhitespaceAndComments().replace(/[^\r\n]/g, "");
    this.appendTokenPrefix();
    this.resultCode += newCode;
    this.appendTokenSuffix();
    this.tokenIndex++;
  }
  removeInitialToken() {
    this.replaceToken("");
  }
  removeToken() {
    this.replaceTokenTrimmingLeftWhitespace("");
  }
  copyExpectedToken(tokenType) {
    if (this.tokens[this.tokenIndex].type !== tokenType) {
      throw new Error(`Expected token ${tokenType}`);
    }
    this.copyToken();
  }
  copyToken() {
    this.resultCode += this.previousWhitespaceAndComments();
    this.appendTokenPrefix();
    this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end);
    this.appendTokenSuffix();
    this.tokenIndex++;
  }
  copyTokenWithPrefix(prefix) {
    this.resultCode += this.previousWhitespaceAndComments();
    this.appendTokenPrefix();
    this.resultCode += prefix;
    this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end);
    this.appendTokenSuffix();
    this.tokenIndex++;
  }
  appendTokenPrefix() {
    const token = this.currentToken();
    if (token.numNullishCoalesceStarts || token.isOptionalChainStart) {
      token.isAsyncOperation = isAsyncOperation(this);
    }
    if (this.disableESTransforms) {
      return;
    }
    if (token.numNullishCoalesceStarts) {
      for (let i = 0; i < token.numNullishCoalesceStarts; i++) {
        if (token.isAsyncOperation) {
          this.resultCode += "await ";
          this.resultCode += this.helperManager.getHelperName("asyncNullishCoalesce");
        } else {
          this.resultCode += this.helperManager.getHelperName("nullishCoalesce");
        }
        this.resultCode += "(";
      }
    }
    if (token.isOptionalChainStart) {
      if (token.isAsyncOperation) {
        this.resultCode += "await ";
      }
      if (this.tokenIndex > 0 && this.tokenAtRelativeIndex(-1).type === TokenType._delete) {
        if (token.isAsyncOperation) {
          this.resultCode += this.helperManager.getHelperName("asyncOptionalChainDelete");
        } else {
          this.resultCode += this.helperManager.getHelperName("optionalChainDelete");
        }
      } else if (token.isAsyncOperation) {
        this.resultCode += this.helperManager.getHelperName("asyncOptionalChain");
      } else {
        this.resultCode += this.helperManager.getHelperName("optionalChain");
      }
      this.resultCode += "([";
    }
  }
  appendTokenSuffix() {
    const token = this.currentToken();
    if (token.isOptionalChainEnd && !this.disableESTransforms) {
      this.resultCode += "])";
    }
    if (token.numNullishCoalesceEnds && !this.disableESTransforms) {
      for (let i = 0; i < token.numNullishCoalesceEnds; i++) {
        this.resultCode += "))";
      }
    }
  }
  appendCode(code) {
    this.resultCode += code;
  }
  currentToken() {
    return this.tokens[this.tokenIndex];
  }
  currentTokenCode() {
    const token = this.currentToken();
    return this.code.slice(token.start, token.end);
  }
  tokenAtRelativeIndex(relativeIndex) {
    return this.tokens[this.tokenIndex + relativeIndex];
  }
  currentIndex() {
    return this.tokenIndex;
  }
  nextToken() {
    if (this.tokenIndex === this.tokens.length) {
      throw new Error("Unexpectedly reached end of input.");
    }
    this.tokenIndex++;
  }
  previousToken() {
    this.tokenIndex--;
  }
  finish() {
    if (this.tokenIndex !== this.tokens.length) {
      throw new Error("Tried to finish processing tokens before reaching the end.");
    }
    this.resultCode += this.previousWhitespaceAndComments();
    return this.resultCode;
  }
  isAtEnd() {
    return this.tokenIndex === this.tokens.length;
  }
}
function getClassInfo(rootTransformer, tokens, nameManager, disableESTransforms) {
  const snapshot = tokens.snapshot();
  const headerInfo = processClassHeader(tokens);
  let constructorInitializerStatements = [];
  const instanceInitializerNames = [];
  const staticInitializerNames = [];
  let constructorInsertPos = null;
  const fields = [];
  const rangesToRemove = [];
  const classContextId = tokens.currentToken().contextId;
  if (classContextId == null) {
    throw new Error("Expected non-null class context ID on class open-brace.");
  }
  tokens.nextToken();
  while (!tokens.matchesContextIdAndLabel(TokenType.braceR, classContextId)) {
    if (tokens.matchesContextual(ContextualKeyword._constructor) && !tokens.currentToken().isType) {
      ({ constructorInitializerStatements, constructorInsertPos } = processConstructor(tokens));
    } else if (tokens.matches1(TokenType.semi)) {
      if (!disableESTransforms) {
        rangesToRemove.push({ start: tokens.currentIndex(), end: tokens.currentIndex() + 1 });
      }
      tokens.nextToken();
    } else if (tokens.currentToken().isType) {
      tokens.nextToken();
    } else {
      const statementStartIndex = tokens.currentIndex();
      let isStatic = false;
      let isESPrivate = false;
      let isDeclare = false;
      while (isAccessModifier(tokens.currentToken())) {
        if (tokens.matches1(TokenType._static)) {
          isStatic = true;
        }
        if (tokens.matches1(TokenType.hash)) {
          isESPrivate = true;
        }
        if (tokens.matches1(TokenType._declare)) {
          isDeclare = true;
        }
        tokens.nextToken();
      }
      if (isStatic && tokens.matches1(TokenType.braceL)) {
        skipToNextClassElement(tokens, classContextId);
        continue;
      }
      if (isESPrivate) {
        skipToNextClassElement(tokens, classContextId);
        continue;
      }
      if (tokens.matchesContextual(ContextualKeyword._constructor) && !tokens.currentToken().isType) {
        ({ constructorInitializerStatements, constructorInsertPos } = processConstructor(tokens));
        continue;
      }
      const nameStartIndex = tokens.currentIndex();
      skipFieldName(tokens);
      if (tokens.matches1(TokenType.lessThan) || tokens.matches1(TokenType.parenL)) {
        skipToNextClassElement(tokens, classContextId);
        continue;
      }
      while (tokens.currentToken().isType) {
        tokens.nextToken();
      }
      if (tokens.matches1(TokenType.eq)) {
        const equalsIndex = tokens.currentIndex();
        const valueEnd = tokens.currentToken().rhsEndIndex;
        if (valueEnd == null) {
          throw new Error("Expected rhsEndIndex on class field assignment.");
        }
        tokens.nextToken();
        while (tokens.currentIndex() < valueEnd) {
          rootTransformer.processToken();
        }
        let initializerName;
        if (isStatic) {
          initializerName = nameManager.claimFreeName("__initStatic");
          staticInitializerNames.push(initializerName);
        } else {
          initializerName = nameManager.claimFreeName("__init");
          instanceInitializerNames.push(initializerName);
        }
        fields.push({
          initializerName,
          equalsIndex,
          start: nameStartIndex,
          end: tokens.currentIndex()
        });
      } else if (!disableESTransforms || isDeclare) {
        rangesToRemove.push({ start: statementStartIndex, end: tokens.currentIndex() });
      }
    }
  }
  tokens.restoreToSnapshot(snapshot);
  if (disableESTransforms) {
    return {
      headerInfo,
      constructorInitializerStatements,
      instanceInitializerNames: [],
      staticInitializerNames: [],
      constructorInsertPos,
      fields: [],
      rangesToRemove
    };
  } else {
    return {
      headerInfo,
      constructorInitializerStatements,
      instanceInitializerNames,
      staticInitializerNames,
      constructorInsertPos,
      fields,
      rangesToRemove
    };
  }
}
function skipToNextClassElement(tokens, classContextId) {
  tokens.nextToken();
  while (tokens.currentToken().contextId !== classContextId) {
    tokens.nextToken();
  }
  while (isAccessModifier(tokens.tokenAtRelativeIndex(-1))) {
    tokens.previousToken();
  }
}
function processClassHeader(tokens) {
  const classToken = tokens.currentToken();
  const contextId = classToken.contextId;
  if (contextId == null) {
    throw new Error("Expected context ID on class token.");
  }
  const isExpression = classToken.isExpression;
  if (isExpression == null) {
    throw new Error("Expected isExpression on class token.");
  }
  let className = null;
  let hasSuperclass = false;
  tokens.nextToken();
  if (tokens.matches1(TokenType.name)) {
    className = tokens.identifierName();
  }
  while (!tokens.matchesContextIdAndLabel(TokenType.braceL, contextId)) {
    if (tokens.matches1(TokenType._extends) && !tokens.currentToken().isType) {
      hasSuperclass = true;
    }
    tokens.nextToken();
  }
  return { isExpression, className, hasSuperclass };
}
function processConstructor(tokens) {
  const constructorInitializerStatements = [];
  tokens.nextToken();
  const constructorContextId = tokens.currentToken().contextId;
  if (constructorContextId == null) {
    throw new Error("Expected context ID on open-paren starting constructor params.");
  }
  while (!tokens.matchesContextIdAndLabel(TokenType.parenR, constructorContextId)) {
    if (tokens.currentToken().contextId === constructorContextId) {
      tokens.nextToken();
      if (isAccessModifier(tokens.currentToken())) {
        tokens.nextToken();
        while (isAccessModifier(tokens.currentToken())) {
          tokens.nextToken();
        }
        const token = tokens.currentToken();
        if (token.type !== TokenType.name) {
          throw new Error("Expected identifier after access modifiers in constructor arg.");
        }
        const name = tokens.identifierNameForToken(token);
        constructorInitializerStatements.push(`this.${name} = ${name}`);
      }
    } else {
      tokens.nextToken();
    }
  }
  tokens.nextToken();
  let constructorInsertPos = tokens.currentIndex();
  let foundSuperCall = false;
  while (!tokens.matchesContextIdAndLabel(TokenType.braceR, constructorContextId)) {
    if (!foundSuperCall && tokens.matches2(TokenType._super, TokenType.parenL)) {
      tokens.nextToken();
      const superCallContextId = tokens.currentToken().contextId;
      if (superCallContextId == null) {
        throw new Error("Expected a context ID on the super call");
      }
      while (!tokens.matchesContextIdAndLabel(TokenType.parenR, superCallContextId)) {
        tokens.nextToken();
      }
      constructorInsertPos = tokens.currentIndex();
      foundSuperCall = true;
    }
    tokens.nextToken();
  }
  tokens.nextToken();
  return { constructorInitializerStatements, constructorInsertPos };
}
function isAccessModifier(token) {
  return [
    TokenType._async,
    TokenType._get,
    TokenType._set,
    TokenType.plus,
    TokenType.minus,
    TokenType._readonly,
    TokenType._static,
    TokenType._public,
    TokenType._private,
    TokenType._protected,
    TokenType._override,
    TokenType._abstract,
    TokenType.star,
    TokenType._declare,
    TokenType.hash
  ].includes(token.type);
}
function skipFieldName(tokens) {
  if (tokens.matches1(TokenType.bracketL)) {
    const startToken = tokens.currentToken();
    const classContextId = startToken.contextId;
    if (classContextId == null) {
      throw new Error("Expected class context ID on computed name open bracket.");
    }
    while (!tokens.matchesContextIdAndLabel(TokenType.bracketR, classContextId)) {
      tokens.nextToken();
    }
    tokens.nextToken();
  } else {
    tokens.nextToken();
  }
}
function elideImportEquals(tokens) {
  tokens.removeInitialToken();
  tokens.removeToken();
  tokens.removeToken();
  tokens.removeToken();
  if (tokens.matches1(TokenType.parenL)) {
    tokens.removeToken();
    tokens.removeToken();
    tokens.removeToken();
  } else {
    while (tokens.matches1(TokenType.dot)) {
      tokens.removeToken();
      tokens.removeToken();
    }
  }
}
const EMPTY_DECLARATION_INFO = {
  typeDeclarations: new Set(),
  valueDeclarations: new Set()
};
function getDeclarationInfo(tokens) {
  const typeDeclarations = new Set();
  const valueDeclarations = new Set();
  for (let i = 0; i < tokens.tokens.length; i++) {
    const token = tokens.tokens[i];
    if (token.type === TokenType.name && isTopLevelDeclaration(token)) {
      if (token.isType) {
        typeDeclarations.add(tokens.identifierNameForToken(token));
      } else {
        valueDeclarations.add(tokens.identifierNameForToken(token));
      }
    }
  }
  return { typeDeclarations, valueDeclarations };
}
function shouldElideDefaultExport(isTypeScriptTransformEnabled, tokens, declarationInfo) {
  if (!isTypeScriptTransformEnabled) {
    return false;
  }
  const exportToken = tokens.currentToken();
  if (exportToken.rhsEndIndex == null) {
    throw new Error("Expected non-null rhsEndIndex on export token.");
  }
  const numTokens = exportToken.rhsEndIndex - tokens.currentIndex();
  if (numTokens !== 3 && !(numTokens === 4 && tokens.matches1AtIndex(exportToken.rhsEndIndex - 1, TokenType.semi))) {
    return false;
  }
  const identifierToken = tokens.tokenAtRelativeIndex(2);
  if (identifierToken.type !== TokenType.name) {
    return false;
  }
  const exportedName = tokens.identifierNameForToken(identifierToken);
  return declarationInfo.typeDeclarations.has(exportedName) && !declarationInfo.valueDeclarations.has(exportedName);
}
class CJSImportTransformer extends Transformer {
  __init() {
    this.hadExport = false;
  }
  __init2() {
    this.hadNamedExport = false;
  }
  __init3() {
    this.hadDefaultExport = false;
  }
  constructor(rootTransformer, tokens, importProcessor, nameManager, reactHotLoaderTransformer, enableLegacyBabel5ModuleInterop, isTypeScriptTransformEnabled) {
    super();
    this.rootTransformer = rootTransformer;
    this.tokens = tokens;
    this.importProcessor = importProcessor;
    this.nameManager = nameManager;
    this.reactHotLoaderTransformer = reactHotLoaderTransformer;
    this.enableLegacyBabel5ModuleInterop = enableLegacyBabel5ModuleInterop;
    this.isTypeScriptTransformEnabled = isTypeScriptTransformEnabled;
    CJSImportTransformer.prototype.__init.call(this);
    CJSImportTransformer.prototype.__init2.call(this);
    CJSImportTransformer.prototype.__init3.call(this);
    this.declarationInfo = isTypeScriptTransformEnabled ? getDeclarationInfo(tokens) : EMPTY_DECLARATION_INFO;
  }
  getPrefixCode() {
    let prefix = "";
    if (this.hadExport) {
      prefix += 'Object.defineProperty(exports, "__esModule", {value: true});';
    }
    return prefix;
  }
  getSuffixCode() {
    if (this.enableLegacyBabel5ModuleInterop && this.hadDefaultExport && !this.hadNamedExport) {
      return "\nmodule.exports = exports.default;\n";
    }
    return "";
  }
  process() {
    if (this.tokens.matches3(TokenType._import, TokenType.name, TokenType.eq)) {
      return this.processImportEquals();
    }
    if (this.tokens.matches1(TokenType._import)) {
      this.processImport();
      return true;
    }
    if (this.tokens.matches2(TokenType._export, TokenType.eq)) {
      this.tokens.replaceToken("module.exports");
      return true;
    }
    if (this.tokens.matches1(TokenType._export) && !this.tokens.currentToken().isType) {
      this.hadExport = true;
      return this.processExport();
    }
    if (this.tokens.matches2(TokenType.name, TokenType.postIncDec)) {
      if (this.processPostIncDec()) {
        return true;
      }
    }
    if (this.tokens.matches1(TokenType.name) || this.tokens.matches1(TokenType.jsxName)) {
      return this.processIdentifier();
    }
    if (this.tokens.matches1(TokenType.eq)) {
      return this.processAssignment();
    }
    if (this.tokens.matches1(TokenType.assign)) {
      return this.processComplexAssignment();
    }
    if (this.tokens.matches1(TokenType.preIncDec)) {
      return this.processPreIncDec();
    }
    return false;
  }
  processImportEquals() {
    const importName = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    if (this.importProcessor.isTypeName(importName)) {
      elideImportEquals(this.tokens);
    } else {
      this.tokens.replaceToken("const");
    }
    return true;
  }
  processImport() {
    if (this.tokens.matches2(TokenType._import, TokenType.parenL)) {
      this.tokens.replaceToken("Promise.resolve().then(() => require");
      const contextId = this.tokens.currentToken().contextId;
      if (contextId == null) {
        throw new Error("Expected context ID on dynamic import invocation.");
      }
      this.tokens.copyToken();
      while (!this.tokens.matchesContextIdAndLabel(TokenType.parenR, contextId)) {
        this.rootTransformer.processToken();
      }
      this.tokens.replaceToken("))");
      return;
    }
    const wasOnlyTypes = this.removeImportAndDetectIfType();
    if (wasOnlyTypes) {
      this.tokens.removeToken();
    } else {
      const path = this.tokens.stringValue();
      this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(path));
      this.tokens.appendCode(this.importProcessor.claimImportCode(path));
    }
    if (this.tokens.matches1(TokenType.semi)) {
      this.tokens.removeToken();
    }
  }
  removeImportAndDetectIfType() {
    this.tokens.removeInitialToken();
    if (this.tokens.matchesContextual(ContextualKeyword._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, TokenType.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword._from)) {
      this.removeRemainingImport();
      return true;
    }
    if (this.tokens.matches1(TokenType.name) || this.tokens.matches1(TokenType.star)) {
      this.removeRemainingImport();
      return false;
    }
    if (this.tokens.matches1(TokenType.string)) {
      return false;
    }
    let foundNonType = false;
    while (!this.tokens.matches1(TokenType.string)) {
      if (!foundNonType && this.tokens.matches1(TokenType.braceL) || this.tokens.matches1(TokenType.comma)) {
        this.tokens.removeToken();
        if (this.tokens.matches2(TokenType.name, TokenType.comma) || this.tokens.matches2(TokenType.name, TokenType.braceR) || this.tokens.matches4(TokenType.name, TokenType.name, TokenType.name, TokenType.comma) || this.tokens.matches4(TokenType.name, TokenType.name, TokenType.name, TokenType.braceR)) {
          foundNonType = true;
        }
      }
      this.tokens.removeToken();
    }
    return !foundNonType;
  }
  removeRemainingImport() {
    while (!this.tokens.matches1(TokenType.string)) {
      this.tokens.removeToken();
    }
  }
  processIdentifier() {
    const token = this.tokens.currentToken();
    if (token.shadowsGlobal) {
      return false;
    }
    if (token.identifierRole === IdentifierRole.ObjectShorthand) {
      return this.processObjectShorthand();
    }
    if (token.identifierRole !== IdentifierRole.Access) {
      return false;
    }
    const replacement = this.importProcessor.getIdentifierReplacement(this.tokens.identifierNameForToken(token));
    if (!replacement) {
      return false;
    }
    let possibleOpenParenIndex = this.tokens.currentIndex() + 1;
    while (possibleOpenParenIndex < this.tokens.tokens.length && this.tokens.tokens[possibleOpenParenIndex].type === TokenType.parenR) {
      possibleOpenParenIndex++;
    }
    if (this.tokens.tokens[possibleOpenParenIndex].type === TokenType.parenL) {
      if (this.tokens.tokenAtRelativeIndex(1).type === TokenType.parenL && this.tokens.tokenAtRelativeIndex(-1).type !== TokenType._new) {
        this.tokens.replaceToken(`${replacement}.call(void 0, `);
        this.tokens.removeToken();
        this.rootTransformer.processBalancedCode();
        this.tokens.copyExpectedToken(TokenType.parenR);
      } else {
        this.tokens.replaceToken(`(0, ${replacement})`);
      }
    } else {
      this.tokens.replaceToken(replacement);
    }
    return true;
  }
  processObjectShorthand() {
    const identifier = this.tokens.identifierName();
    const replacement = this.importProcessor.getIdentifierReplacement(identifier);
    if (!replacement) {
      return false;
    }
    this.tokens.replaceToken(`${identifier}: ${replacement}`);
    return true;
  }
  processExport() {
    if (this.tokens.matches2(TokenType._export, TokenType._enum) || this.tokens.matches3(TokenType._export, TokenType._const, TokenType._enum)) {
      return false;
    }
    if (this.tokens.matches2(TokenType._export, TokenType._default)) {
      this.processExportDefault();
      this.hadDefaultExport = true;
      return true;
    }
    this.hadNamedExport = true;
    if (this.tokens.matches2(TokenType._export, TokenType._var) || this.tokens.matches2(TokenType._export, TokenType._let) || this.tokens.matches2(TokenType._export, TokenType._const)) {
      this.processExportVar();
      return true;
    } else if (this.tokens.matches2(TokenType._export, TokenType._function) || this.tokens.matches3(TokenType._export, TokenType.name, TokenType._function)) {
      this.processExportFunction();
      return true;
    } else if (this.tokens.matches2(TokenType._export, TokenType._class) || this.tokens.matches3(TokenType._export, TokenType._abstract, TokenType._class)) {
      this.processExportClass();
      return true;
    } else if (this.tokens.matches2(TokenType._export, TokenType.braceL)) {
      this.processExportBindings();
      return true;
    } else if (this.tokens.matches2(TokenType._export, TokenType.star)) {
      this.processExportStar();
      return true;
    } else if (this.tokens.matches3(TokenType._export, TokenType.name, TokenType.braceL) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword._type)) {
      this.tokens.removeInitialToken();
      while (!this.tokens.matches1(TokenType.braceR)) {
        this.tokens.removeToken();
      }
      this.tokens.removeToken();
      if (this.tokens.matchesContextual(ContextualKeyword._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, TokenType.string)) {
        this.tokens.removeToken();
        this.tokens.removeToken();
      }
      return true;
    } else {
      throw new Error("Unrecognized export syntax.");
    }
  }
  processAssignment() {
    const index = this.tokens.currentIndex();
    const identifierToken = this.tokens.tokens[index - 1];
    if (identifierToken.isType || identifierToken.type !== TokenType.name) {
      return false;
    }
    if (identifierToken.shadowsGlobal) {
      return false;
    }
    if (index >= 2 && this.tokens.matches1AtIndex(index - 2, TokenType.dot)) {
      return false;
    }
    if (index >= 2 && [TokenType._var, TokenType._let, TokenType._const].includes(this.tokens.tokens[index - 2].type)) {
      return false;
    }
    const assignmentSnippet = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(identifierToken));
    if (!assignmentSnippet) {
      return false;
    }
    this.tokens.copyToken();
    this.tokens.appendCode(` ${assignmentSnippet} =`);
    return true;
  }
  processComplexAssignment() {
    const index = this.tokens.currentIndex();
    const identifierToken = this.tokens.tokens[index - 1];
    if (identifierToken.type !== TokenType.name) {
      return false;
    }
    if (identifierToken.shadowsGlobal) {
      return false;
    }
    if (index >= 2 && this.tokens.matches1AtIndex(index - 2, TokenType.dot)) {
      return false;
    }
    const assignmentSnippet = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(identifierToken));
    if (!assignmentSnippet) {
      return false;
    }
    this.tokens.appendCode(` = ${assignmentSnippet}`);
    this.tokens.copyToken();
    return true;
  }
  processPreIncDec() {
    const index = this.tokens.currentIndex();
    const identifierToken = this.tokens.tokens[index + 1];
    if (identifierToken.type !== TokenType.name) {
      return false;
    }
    if (identifierToken.shadowsGlobal) {
      return false;
    }
    if (index + 2 < this.tokens.tokens.length && (this.tokens.matches1AtIndex(index + 2, TokenType.dot) || this.tokens.matches1AtIndex(index + 2, TokenType.bracketL) || this.tokens.matches1AtIndex(index + 2, TokenType.parenL))) {
      return false;
    }
    const identifierName = this.tokens.identifierNameForToken(identifierToken);
    const assignmentSnippet = this.importProcessor.resolveExportBinding(identifierName);
    if (!assignmentSnippet) {
      return false;
    }
    this.tokens.appendCode(`${assignmentSnippet} = `);
    this.tokens.copyToken();
    return true;
  }
  processPostIncDec() {
    const index = this.tokens.currentIndex();
    const identifierToken = this.tokens.tokens[index];
    const operatorToken = this.tokens.tokens[index + 1];
    if (identifierToken.type !== TokenType.name) {
      return false;
    }
    if (identifierToken.shadowsGlobal) {
      return false;
    }
    if (index >= 1 && this.tokens.matches1AtIndex(index - 1, TokenType.dot)) {
      return false;
    }
    const identifierName = this.tokens.identifierNameForToken(identifierToken);
    const assignmentSnippet = this.importProcessor.resolveExportBinding(identifierName);
    if (!assignmentSnippet) {
      return false;
    }
    const operatorCode = this.tokens.rawCodeForToken(operatorToken);
    const base = this.importProcessor.getIdentifierReplacement(identifierName) || identifierName;
    if (operatorCode === "++") {
      this.tokens.replaceToken(`(${base} = ${assignmentSnippet} = ${base} + 1, ${base} - 1)`);
    } else if (operatorCode === "--") {
      this.tokens.replaceToken(`(${base} = ${assignmentSnippet} = ${base} - 1, ${base} + 1)`);
    } else {
      throw new Error(`Unexpected operator: ${operatorCode}`);
    }
    this.tokens.removeToken();
    return true;
  }
  processExportDefault() {
    if (this.tokens.matches4(TokenType._export, TokenType._default, TokenType._function, TokenType.name) || this.tokens.matches5(TokenType._export, TokenType._default, TokenType.name, TokenType._function, TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, ContextualKeyword._async)) {
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      const name = this.processNamedFunction();
      this.tokens.appendCode(` exports.default = ${name};`);
    } else if (this.tokens.matches4(TokenType._export, TokenType._default, TokenType._class, TokenType.name) || this.tokens.matches5(TokenType._export, TokenType._default, TokenType._abstract, TokenType._class, TokenType.name)) {
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      if (this.tokens.matches1(TokenType._abstract)) {
        this.tokens.removeToken();
      }
      const name = this.rootTransformer.processNamedClass();
      this.tokens.appendCode(` exports.default = ${name};`);
    } else if (this.tokens.matches3(TokenType._export, TokenType._default, TokenType.at)) {
      throw new Error("Export default statements with decorators are not yet supported.");
    } else if (shouldElideDefaultExport(this.isTypeScriptTransformEnabled, this.tokens, this.declarationInfo)) {
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      this.tokens.removeToken();
    } else if (this.reactHotLoaderTransformer) {
      const defaultVarName = this.nameManager.claimFreeName("_default");
      this.tokens.replaceToken(`let ${defaultVarName}; exports.`);
      this.tokens.copyToken();
      this.tokens.appendCode(` = ${defaultVarName} =`);
      this.reactHotLoaderTransformer.setExtractedDefaultExportName(defaultVarName);
    } else {
      this.tokens.replaceToken("exports.");
      this.tokens.copyToken();
      this.tokens.appendCode(" =");
    }
  }
  processExportVar() {
    if (this.isSimpleExportVar()) {
      this.processSimpleExportVar();
    } else {
      this.processComplexExportVar();
    }
  }
  isSimpleExportVar() {
    let tokenIndex = this.tokens.currentIndex();
    tokenIndex++;
    tokenIndex++;
    if (!this.tokens.matches1AtIndex(tokenIndex, TokenType.name)) {
      return false;
    }
    tokenIndex++;
    while (tokenIndex < this.tokens.tokens.length && this.tokens.tokens[tokenIndex].isType) {
      tokenIndex++;
    }
    if (!this.tokens.matches1AtIndex(tokenIndex, TokenType.eq)) {
      return false;
    }
    return true;
  }
  processSimpleExportVar() {
    this.tokens.removeInitialToken();
    this.tokens.copyToken();
    const varName = this.tokens.identifierName();
    while (!this.tokens.matches1(TokenType.eq)) {
      this.rootTransformer.processToken();
    }
    const endIndex = this.tokens.currentToken().rhsEndIndex;
    if (endIndex == null) {
      throw new Error("Expected = token with an end index.");
    }
    while (this.tokens.currentIndex() < endIndex) {
      this.rootTransformer.processToken();
    }
    this.tokens.appendCode(`; exports.${varName} = ${varName}`);
  }
  processComplexExportVar() {
    this.tokens.removeInitialToken();
    this.tokens.removeToken();
    const needsParens = this.tokens.matches1(TokenType.braceL);
    if (needsParens) {
      this.tokens.appendCode("(");
    }
    let depth = 0;
    while (true) {
      if (this.tokens.matches1(TokenType.braceL) || this.tokens.matches1(TokenType.dollarBraceL) || this.tokens.matches1(TokenType.bracketL)) {
        depth++;
        this.tokens.copyToken();
      } else if (this.tokens.matches1(TokenType.braceR) || this.tokens.matches1(TokenType.bracketR)) {
        depth--;
        this.tokens.copyToken();
      } else if (depth === 0 && !this.tokens.matches1(TokenType.name) && !this.tokens.currentToken().isType) {
        break;
      } else if (this.tokens.matches1(TokenType.eq)) {
        const endIndex = this.tokens.currentToken().rhsEndIndex;
        if (endIndex == null) {
          throw new Error("Expected = token with an end index.");
        }
        while (this.tokens.currentIndex() < endIndex) {
          this.rootTransformer.processToken();
        }
      } else {
        const token = this.tokens.currentToken();
        if (isDeclaration(token)) {
          const name = this.tokens.identifierName();
          let replacement = this.importProcessor.getIdentifierReplacement(name);
          if (replacement === null) {
            throw new Error(`Expected a replacement for ${name} in \`export var\` syntax.`);
          }
          if (isObjectShorthandDeclaration(token)) {
            replacement = `${name}: ${replacement}`;
          }
          this.tokens.replaceToken(replacement);
        } else {
          this.rootTransformer.processToken();
        }
      }
    }
    if (needsParens) {
      const endIndex = this.tokens.currentToken().rhsEndIndex;
      if (endIndex == null) {
        throw new Error("Expected = token with an end index.");
      }
      while (this.tokens.currentIndex() < endIndex) {
        this.rootTransformer.processToken();
      }
      this.tokens.appendCode(")");
    }
  }
  processExportFunction() {
    this.tokens.replaceToken("");
    const name = this.processNamedFunction();
    this.tokens.appendCode(` exports.${name} = ${name};`);
  }
  processNamedFunction() {
    if (this.tokens.matches1(TokenType._function)) {
      this.tokens.copyToken();
    } else if (this.tokens.matches2(TokenType.name, TokenType._function)) {
      if (!this.tokens.matchesContextual(ContextualKeyword._async)) {
        throw new Error("Expected async keyword in function export.");
      }
      this.tokens.copyToken();
      this.tokens.copyToken();
    }
    if (this.tokens.matches1(TokenType.star)) {
      this.tokens.copyToken();
    }
    if (!this.tokens.matches1(TokenType.name)) {
      throw new Error("Expected identifier for exported function name.");
    }
    const name = this.tokens.identifierName();
    this.tokens.copyToken();
    if (this.tokens.currentToken().isType) {
      this.tokens.removeInitialToken();
      while (this.tokens.currentToken().isType) {
        this.tokens.removeToken();
      }
    }
    this.tokens.copyExpectedToken(TokenType.parenL);
    this.rootTransformer.processBalancedCode();
    this.tokens.copyExpectedToken(TokenType.parenR);
    this.rootTransformer.processPossibleTypeRange();
    this.tokens.copyExpectedToken(TokenType.braceL);
    this.rootTransformer.processBalancedCode();
    this.tokens.copyExpectedToken(TokenType.braceR);
    return name;
  }
  processExportClass() {
    this.tokens.removeInitialToken();
    if (this.tokens.matches1(TokenType._abstract)) {
      this.tokens.removeToken();
    }
    const name = this.rootTransformer.processNamedClass();
    this.tokens.appendCode(` exports.${name} = ${name};`);
  }
  processExportBindings() {
    this.tokens.removeInitialToken();
    this.tokens.removeToken();
    const exportStatements = [];
    while (true) {
      if (this.tokens.matches1(TokenType.braceR)) {
        this.tokens.removeToken();
        break;
      }
      const localName = this.tokens.identifierName();
      let exportedName;
      this.tokens.removeToken();
      if (this.tokens.matchesContextual(ContextualKeyword._as)) {
        this.tokens.removeToken();
        exportedName = this.tokens.identifierName();
        this.tokens.removeToken();
      } else {
        exportedName = localName;
      }
      if (!this.shouldElideExportedIdentifier(localName)) {
        const newLocalName = this.importProcessor.getIdentifierReplacement(localName);
        exportStatements.push(`exports.${exportedName} = ${newLocalName || localName};`);
      }
      if (this.tokens.matches1(TokenType.braceR)) {
        this.tokens.removeToken();
        break;
      }
      if (this.tokens.matches2(TokenType.comma, TokenType.braceR)) {
        this.tokens.removeToken();
        this.tokens.removeToken();
        break;
      } else if (this.tokens.matches1(TokenType.comma)) {
        this.tokens.removeToken();
      } else {
        throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`);
      }
    }
    if (this.tokens.matchesContextual(ContextualKeyword._from)) {
      this.tokens.removeToken();
      const path = this.tokens.stringValue();
      this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(path));
    } else {
      this.tokens.appendCode(exportStatements.join(" "));
    }
    if (this.tokens.matches1(TokenType.semi)) {
      this.tokens.removeToken();
    }
  }
  processExportStar() {
    this.tokens.removeInitialToken();
    while (!this.tokens.matches1(TokenType.string)) {
      this.tokens.removeToken();
    }
    const path = this.tokens.stringValue();
    this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(path));
    if (this.tokens.matches1(TokenType.semi)) {
      this.tokens.removeToken();
    }
  }
  shouldElideExportedIdentifier(name) {
    return this.isTypeScriptTransformEnabled && !this.declarationInfo.valueDeclarations.has(name);
  }
}
class ESMImportTransformer extends Transformer {
  constructor(tokens, nameManager, reactHotLoaderTransformer, isTypeScriptTransformEnabled, options) {
    super();
    this.tokens = tokens;
    this.nameManager = nameManager;
    this.reactHotLoaderTransformer = reactHotLoaderTransformer;
    this.isTypeScriptTransformEnabled = isTypeScriptTransformEnabled;
    this.nonTypeIdentifiers = isTypeScriptTransformEnabled ? getNonTypeIdentifiers(tokens, options) : new Set();
    this.declarationInfo = isTypeScriptTransformEnabled ? getDeclarationInfo(tokens) : EMPTY_DECLARATION_INFO;
  }
  process() {
    if (this.tokens.matches3(TokenType._import, TokenType.name, TokenType.eq)) {
      return this.processImportEquals();
    }
    if (this.tokens.matches4(TokenType._import, TokenType.name, TokenType.name, TokenType.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword._type)) {
      this.tokens.removeInitialToken();
      for (let i = 0; i < 7; i++) {
        this.tokens.removeToken();
      }
      return true;
    }
    if (this.tokens.matches2(TokenType._export, TokenType.eq)) {
      this.tokens.replaceToken("module.exports");
      return true;
    }
    if (this.tokens.matches5(TokenType._export, TokenType._import, TokenType.name, TokenType.name, TokenType.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, ContextualKeyword._type)) {
      this.tokens.removeInitialToken();
      for (let i = 0; i < 8; i++) {
        this.tokens.removeToken();
      }
      return true;
    }
    if (this.tokens.matches1(TokenType._import)) {
      return this.processImport();
    }
    if (this.tokens.matches2(TokenType._export, TokenType._default)) {
      return this.processExportDefault();
    }
    if (this.tokens.matches2(TokenType._export, TokenType.braceL)) {
      return this.processNamedExports();
    }
    if (this.tokens.matches3(TokenType._export, TokenType.name, TokenType.braceL) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword._type)) {
      this.tokens.removeInitialToken();
      while (!this.tokens.matches1(TokenType.braceR)) {
        this.tokens.removeToken();
      }
      this.tokens.removeToken();
      if (this.tokens.matchesContextual(ContextualKeyword._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, TokenType.string)) {
        this.tokens.removeToken();
        this.tokens.removeToken();
      }
      return true;
    }
    return false;
  }
  processImportEquals() {
    const importName = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    if (this.isTypeName(importName)) {
      elideImportEquals(this.tokens);
    } else {
      this.tokens.replaceToken("const");
    }
    return true;
  }
  processImport() {
    if (this.tokens.matches2(TokenType._import, TokenType.parenL)) {
      return false;
    }
    const snapshot = this.tokens.snapshot();
    const allImportsRemoved = this.removeImportTypeBindings();
    if (allImportsRemoved) {
      this.tokens.restoreToSnapshot(snapshot);
      while (!this.tokens.matches1(TokenType.string)) {
        this.tokens.removeToken();
      }
      this.tokens.removeToken();
      if (this.tokens.matches1(TokenType.semi)) {
        this.tokens.removeToken();
      }
    }
    return true;
  }
  removeImportTypeBindings() {
    this.tokens.copyExpectedToken(TokenType._import);
    if (this.tokens.matchesContextual(ContextualKeyword._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, TokenType.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword._from)) {
      return true;
    }
    if (this.tokens.matches1(TokenType.string)) {
      this.tokens.copyToken();
      return false;
    }
    let foundNonTypeImport = false;
    if (this.tokens.matches1(TokenType.name)) {
      if (this.isTypeName(this.tokens.identifierName())) {
        this.tokens.removeToken();
        if (this.tokens.matches1(TokenType.comma)) {
          this.tokens.removeToken();
        }
      } else {
        foundNonTypeImport = true;
        this.tokens.copyToken();
        if (this.tokens.matches1(TokenType.comma)) {
          this.tokens.copyToken();
        }
      }
    }
    if (this.tokens.matches1(TokenType.star)) {
      if (this.isTypeName(this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2))) {
        this.tokens.removeToken();
        this.tokens.removeToken();
        this.tokens.removeToken();
      } else {
        foundNonTypeImport = true;
        this.tokens.copyExpectedToken(TokenType.star);
        this.tokens.copyExpectedToken(TokenType.name);
        this.tokens.copyExpectedToken(TokenType.name);
      }
    } else if (this.tokens.matches1(TokenType.braceL)) {
      this.tokens.copyToken();
      while (!this.tokens.matches1(TokenType.braceR)) {
        if (this.tokens.matches3(TokenType.name, TokenType.name, TokenType.comma) || this.tokens.matches3(TokenType.name, TokenType.name, TokenType.braceR)) {
          this.tokens.removeToken();
          this.tokens.removeToken();
          if (this.tokens.matches1(TokenType.comma)) {
            this.tokens.removeToken();
          }
        } else if (this.tokens.matches5(TokenType.name, TokenType.name, TokenType.name, TokenType.name, TokenType.comma) || this.tokens.matches5(TokenType.name, TokenType.name, TokenType.name, TokenType.name, TokenType.braceR)) {
          this.tokens.removeToken();
          this.tokens.removeToken();
          this.tokens.removeToken();
          this.tokens.removeToken();
          if (this.tokens.matches1(TokenType.comma)) {
            this.tokens.removeToken();
          }
        } else if (this.tokens.matches2(TokenType.name, TokenType.comma) || this.tokens.matches2(TokenType.name, TokenType.braceR)) {
          if (this.isTypeName(this.tokens.identifierName())) {
            this.tokens.removeToken();
            if (this.tokens.matches1(TokenType.comma)) {
              this.tokens.removeToken();
            }
          } else {
            foundNonTypeImport = true;
            this.tokens.copyToken();
            if (this.tokens.matches1(TokenType.comma)) {
              this.tokens.copyToken();
            }
          }
        } else if (this.tokens.matches4(TokenType.name, TokenType.name, TokenType.name, TokenType.comma) || this.tokens.matches4(TokenType.name, TokenType.name, TokenType.name, TokenType.braceR)) {
          if (this.isTypeName(this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2))) {
            this.tokens.removeToken();
            this.tokens.removeToken();
            this.tokens.removeToken();
            if (this.tokens.matches1(TokenType.comma)) {
              this.tokens.removeToken();
            }
          } else {
            foundNonTypeImport = true;
            this.tokens.copyToken();
            this.tokens.copyToken();
            this.tokens.copyToken();
            if (this.tokens.matches1(TokenType.comma)) {
              this.tokens.copyToken();
            }
          }
        } else {
          throw new Error("Unexpected import form.");
        }
      }
      this.tokens.copyExpectedToken(TokenType.braceR);
    }
    return !foundNonTypeImport;
  }
  isTypeName(name) {
    return this.isTypeScriptTransformEnabled && !this.nonTypeIdentifiers.has(name);
  }
  processExportDefault() {
    if (shouldElideDefaultExport(this.isTypeScriptTransformEnabled, this.tokens, this.declarationInfo)) {
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      this.tokens.removeToken();
      return true;
    }
    const alreadyHasName = this.tokens.matches4(TokenType._export, TokenType._default, TokenType._function, TokenType.name) || this.tokens.matches5(TokenType._export, TokenType._default, TokenType.name, TokenType._function, TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, ContextualKeyword._async) || this.tokens.matches4(TokenType._export, TokenType._default, TokenType._class, TokenType.name) || this.tokens.matches5(TokenType._export, TokenType._default, TokenType._abstract, TokenType._class, TokenType.name);
    if (!alreadyHasName && this.reactHotLoaderTransformer) {
      const defaultVarName = this.nameManager.claimFreeName("_default");
      this.tokens.replaceToken(`let ${defaultVarName}; export`);
      this.tokens.copyToken();
      this.tokens.appendCode(` ${defaultVarName} =`);
      this.reactHotLoaderTransformer.setExtractedDefaultExportName(defaultVarName);
      return true;
    }
    return false;
  }
  processNamedExports() {
    if (!this.isTypeScriptTransformEnabled) {
      return false;
    }
    this.tokens.copyExpectedToken(TokenType._export);
    this.tokens.copyExpectedToken(TokenType.braceL);
    while (!this.tokens.matches1(TokenType.braceR)) {
      if (!this.tokens.matches1(TokenType.name)) {
        throw new Error("Expected identifier at the start of named export.");
      }
      if (this.shouldElideExportedName(this.tokens.identifierName())) {
        while (!this.tokens.matches1(TokenType.comma) && !this.tokens.matches1(TokenType.braceR) && !this.tokens.isAtEnd()) {
          this.tokens.removeToken();
        }
        if (this.tokens.matches1(TokenType.comma)) {
          this.tokens.removeToken();
        }
      } else {
        while (!this.tokens.matches1(TokenType.comma) && !this.tokens.matches1(TokenType.braceR) && !this.tokens.isAtEnd()) {
          this.tokens.copyToken();
        }
        if (this.tokens.matches1(TokenType.comma)) {
          this.tokens.copyToken();
        }
      }
    }
    this.tokens.copyExpectedToken(TokenType.braceR);
    return true;
  }
  shouldElideExportedName(name) {
    return this.isTypeScriptTransformEnabled && this.declarationInfo.typeDeclarations.has(name) && !this.declarationInfo.valueDeclarations.has(name);
  }
}
class FlowTransformer extends Transformer {
  constructor(rootTransformer, tokens) {
    super();
    this.rootTransformer = rootTransformer;
    this.tokens = tokens;
  }
  process() {
    return this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange();
  }
}
function _optionalChain(ops) {
  let lastAccessLHS = void 0;
  let value = ops[0];
  let i = 1;
  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;
    if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
      return void 0;
    }
    if (op === "access" || op === "optionalAccess") {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === "call" || op === "optionalCall") {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = void 0;
    }
  }
  return value;
}
const JEST_GLOBAL_NAME = "jest";
const HOISTED_METHODS = ["mock", "unmock", "enableAutomock", "disableAutomock"];
class JestHoistTransformer extends Transformer {
  __init() {
    this.hoistedFunctionNames = [];
  }
  constructor(rootTransformer, tokens, nameManager, importProcessor) {
    super();
    this.rootTransformer = rootTransformer;
    this.tokens = tokens;
    this.nameManager = nameManager;
    this.importProcessor = importProcessor;
    JestHoistTransformer.prototype.__init.call(this);
  }
  process() {
    if (this.tokens.currentToken().scopeDepth === 0 && this.tokens.matches4(TokenType.name, TokenType.dot, TokenType.name, TokenType.parenL) && this.tokens.identifierName() === JEST_GLOBAL_NAME) {
      if (_optionalChain([this, "access", (_) => _.importProcessor, "optionalAccess", (_2) => _2.getGlobalNames, "call", (_3) => _3(), "optionalAccess", (_4) => _4.has, "call", (_5) => _5(JEST_GLOBAL_NAME)])) {
        return false;
      }
      return this.extractHoistedCalls();
    }
    return false;
  }
  getHoistedCode() {
    if (this.hoistedFunctionNames.length > 0) {
      return this.hoistedFunctionNames.map((name) => `${name}();`).join("");
    }
    return "";
  }
  extractHoistedCalls() {
    this.tokens.removeToken();
    let followsNonHoistedJestCall = false;
    while (this.tokens.matches3(TokenType.dot, TokenType.name, TokenType.parenL)) {
      const methodName = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
      const shouldHoist = HOISTED_METHODS.includes(methodName);
      if (shouldHoist) {
        const hoistedFunctionName = this.nameManager.claimFreeName("__jestHoist");
        this.hoistedFunctionNames.push(hoistedFunctionName);
        this.tokens.replaceToken(`function ${hoistedFunctionName}(){${JEST_GLOBAL_NAME}.`);
        this.tokens.copyToken();
        this.tokens.copyToken();
        this.rootTransformer.processBalancedCode();
        this.tokens.copyExpectedToken(TokenType.parenR);
        this.tokens.appendCode(";}");
        followsNonHoistedJestCall = false;
      } else {
        if (followsNonHoistedJestCall) {
          this.tokens.copyToken();
        } else {
          this.tokens.replaceToken(`${JEST_GLOBAL_NAME}.`);
        }
        this.tokens.copyToken();
        this.tokens.copyToken();
        this.rootTransformer.processBalancedCode();
        this.tokens.copyExpectedToken(TokenType.parenR);
        followsNonHoistedJestCall = true;
      }
    }
    return true;
  }
}
class NumericSeparatorTransformer extends Transformer {
  constructor(tokens) {
    super();
    this.tokens = tokens;
  }
  process() {
    if (this.tokens.matches1(TokenType.num)) {
      const code = this.tokens.currentTokenCode();
      if (code.includes("_")) {
        this.tokens.replaceToken(code.replace(/_/g, ""));
        return true;
      }
    }
    return false;
  }
}
class OptionalCatchBindingTransformer extends Transformer {
  constructor(tokens, nameManager) {
    super();
    this.tokens = tokens;
    this.nameManager = nameManager;
  }
  process() {
    if (this.tokens.matches2(TokenType._catch, TokenType.braceL)) {
      this.tokens.copyToken();
      this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`);
      return true;
    }
    return false;
  }
}
class OptionalChainingNullishTransformer extends Transformer {
  constructor(tokens, nameManager) {
    super();
    this.tokens = tokens;
    this.nameManager = nameManager;
  }
  process() {
    if (this.tokens.matches1(TokenType.nullishCoalescing)) {
      const token2 = this.tokens.currentToken();
      if (this.tokens.tokens[token2.nullishStartIndex].isAsyncOperation) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(", async () => (");
      } else {
        this.tokens.replaceTokenTrimmingLeftWhitespace(", () => (");
      }
      return true;
    }
    if (this.tokens.matches1(TokenType._delete)) {
      const nextToken2 = this.tokens.tokenAtRelativeIndex(1);
      if (nextToken2.isOptionalChainStart) {
        this.tokens.removeInitialToken();
        return true;
      }
    }
    const token = this.tokens.currentToken();
    const chainStart = token.subscriptStartIndex;
    if (chainStart != null && this.tokens.tokens[chainStart].isOptionalChainStart && this.tokens.tokenAtRelativeIndex(-1).type !== TokenType._super) {
      const param = this.nameManager.claimFreeName("_");
      let arrowStartSnippet;
      if (chainStart > 0 && this.tokens.matches1AtIndex(chainStart - 1, TokenType._delete) && this.isLastSubscriptInChain()) {
        arrowStartSnippet = `${param} => delete ${param}`;
      } else {
        arrowStartSnippet = `${param} => ${param}`;
      }
      if (this.tokens.tokens[chainStart].isAsyncOperation) {
        arrowStartSnippet = `async ${arrowStartSnippet}`;
      }
      if (this.tokens.matches2(TokenType.questionDot, TokenType.parenL) || this.tokens.matches2(TokenType.questionDot, TokenType.lessThan)) {
        if (this.justSkippedSuper()) {
          this.tokens.appendCode(".bind(this)");
        }
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${arrowStartSnippet}`);
      } else if (this.tokens.matches2(TokenType.questionDot, TokenType.bracketL)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${arrowStartSnippet}`);
      } else if (this.tokens.matches1(TokenType.questionDot)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${arrowStartSnippet}.`);
      } else if (this.tokens.matches1(TokenType.dot)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${arrowStartSnippet}.`);
      } else if (this.tokens.matches1(TokenType.bracketL)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${arrowStartSnippet}[`);
      } else if (this.tokens.matches1(TokenType.parenL)) {
        if (this.justSkippedSuper()) {
          this.tokens.appendCode(".bind(this)");
        }
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${arrowStartSnippet}(`);
      } else {
        throw new Error("Unexpected subscript operator in optional chain.");
      }
      return true;
    }
    return false;
  }
  isLastSubscriptInChain() {
    let depth = 0;
    for (let i = this.tokens.currentIndex() + 1; ; i++) {
      if (i >= this.tokens.tokens.length) {
        throw new Error("Reached the end of the code while finding the end of the access chain.");
      }
      if (this.tokens.tokens[i].isOptionalChainStart) {
        depth++;
      } else if (this.tokens.tokens[i].isOptionalChainEnd) {
        depth--;
      }
      if (depth < 0) {
        return true;
      }
      if (depth === 0 && this.tokens.tokens[i].subscriptStartIndex != null) {
        return false;
      }
    }
  }
  justSkippedSuper() {
    let depth = 0;
    let index = this.tokens.currentIndex() - 1;
    while (true) {
      if (index < 0) {
        throw new Error("Reached the start of the code while finding the start of the access chain.");
      }
      if (this.tokens.tokens[index].isOptionalChainStart) {
        depth--;
      } else if (this.tokens.tokens[index].isOptionalChainEnd) {
        depth++;
      }
      if (depth < 0) {
        return false;
      }
      if (depth === 0 && this.tokens.tokens[index].subscriptStartIndex != null) {
        return this.tokens.tokens[index - 1].type === TokenType._super;
      }
      index--;
    }
  }
}
class ReactDisplayNameTransformer extends Transformer {
  constructor(rootTransformer, tokens, importProcessor, options) {
    super();
    this.rootTransformer = rootTransformer;
    this.tokens = tokens;
    this.importProcessor = importProcessor;
    this.options = options;
  }
  process() {
    const startIndex = this.tokens.currentIndex();
    if (this.tokens.identifierName() === "createReactClass") {
      const newName = this.importProcessor && this.importProcessor.getIdentifierReplacement("createReactClass");
      if (newName) {
        this.tokens.replaceToken(`(0, ${newName})`);
      } else {
        this.tokens.copyToken();
      }
      this.tryProcessCreateClassCall(startIndex);
      return true;
    }
    if (this.tokens.matches3(TokenType.name, TokenType.dot, TokenType.name) && this.tokens.identifierName() === "React" && this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2) === "createClass") {
      const newName = this.importProcessor ? this.importProcessor.getIdentifierReplacement("React") || "React" : "React";
      if (newName) {
        this.tokens.replaceToken(newName);
        this.tokens.copyToken();
        this.tokens.copyToken();
      } else {
        this.tokens.copyToken();
        this.tokens.copyToken();
        this.tokens.copyToken();
      }
      this.tryProcessCreateClassCall(startIndex);
      return true;
    }
    return false;
  }
  tryProcessCreateClassCall(startIndex) {
    const displayName = this.findDisplayName(startIndex);
    if (!displayName) {
      return;
    }
    if (this.classNeedsDisplayName()) {
      this.tokens.copyExpectedToken(TokenType.parenL);
      this.tokens.copyExpectedToken(TokenType.braceL);
      this.tokens.appendCode(`displayName: '${displayName}',`);
      this.rootTransformer.processBalancedCode();
      this.tokens.copyExpectedToken(TokenType.braceR);
      this.tokens.copyExpectedToken(TokenType.parenR);
    }
  }
  findDisplayName(startIndex) {
    if (startIndex < 2) {
      return null;
    }
    if (this.tokens.matches2AtIndex(startIndex - 2, TokenType.name, TokenType.eq)) {
      return this.tokens.identifierNameAtIndex(startIndex - 2);
    }
    if (startIndex >= 2 && this.tokens.tokens[startIndex - 2].identifierRole === IdentifierRole.ObjectKey) {
      return this.tokens.identifierNameAtIndex(startIndex - 2);
    }
    if (this.tokens.matches2AtIndex(startIndex - 2, TokenType._export, TokenType._default)) {
      return this.getDisplayNameFromFilename();
    }
    return null;
  }
  getDisplayNameFromFilename() {
    const filePath = this.options.filePath || "unknown";
    const pathSegments = filePath.split("/");
    const filename = pathSegments[pathSegments.length - 1];
    const dotIndex = filename.lastIndexOf(".");
    const baseFilename = dotIndex === -1 ? filename : filename.slice(0, dotIndex);
    if (baseFilename === "index" && pathSegments[pathSegments.length - 2]) {
      return pathSegments[pathSegments.length - 2];
    } else {
      return baseFilename;
    }
  }
  classNeedsDisplayName() {
    let index = this.tokens.currentIndex();
    if (!this.tokens.matches2(TokenType.parenL, TokenType.braceL)) {
      return false;
    }
    const objectStartIndex = index + 1;
    const objectContextId = this.tokens.tokens[objectStartIndex].contextId;
    if (objectContextId == null) {
      throw new Error("Expected non-null context ID on object open-brace.");
    }
    for (; index < this.tokens.tokens.length; index++) {
      const token = this.tokens.tokens[index];
      if (token.type === TokenType.braceR && token.contextId === objectContextId) {
        index++;
        break;
      }
      if (this.tokens.identifierNameAtIndex(index) === "displayName" && this.tokens.tokens[index].identifierRole === IdentifierRole.ObjectKey && token.contextId === objectContextId) {
        return false;
      }
    }
    if (index === this.tokens.tokens.length) {
      throw new Error("Unexpected end of input when processing React class.");
    }
    return this.tokens.matches1AtIndex(index, TokenType.parenR) || this.tokens.matches2AtIndex(index, TokenType.comma, TokenType.parenR);
  }
}
class ReactHotLoaderTransformer extends Transformer {
  __init() {
    this.extractedDefaultExportName = null;
  }
  constructor(tokens, filePath) {
    super();
    this.tokens = tokens;
    this.filePath = filePath;
    ReactHotLoaderTransformer.prototype.__init.call(this);
  }
  setExtractedDefaultExportName(extractedDefaultExportName) {
    this.extractedDefaultExportName = extractedDefaultExportName;
  }
  getPrefixCode() {
    return `
      (function () {
        var enterModule = require('react-hot-loader').enterModule;
        enterModule && enterModule(module);
      })();`.replace(/\s+/g, " ").trim();
  }
  getSuffixCode() {
    const topLevelNames = new Set();
    for (const token of this.tokens.tokens) {
      if (!token.isType && isTopLevelDeclaration(token) && token.identifierRole !== IdentifierRole.ImportDeclaration) {
        topLevelNames.add(this.tokens.identifierNameForToken(token));
      }
    }
    const namesToRegister = Array.from(topLevelNames).map((name) => ({
      variableName: name,
      uniqueLocalName: name
    }));
    if (this.extractedDefaultExportName) {
      namesToRegister.push({
        variableName: this.extractedDefaultExportName,
        uniqueLocalName: "default"
      });
    }
    return `
;(function () {
  var reactHotLoader = require('react-hot-loader').default;
  var leaveModule = require('react-hot-loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${namesToRegister.map(({ variableName, uniqueLocalName }) => `  reactHotLoader.register(${variableName}, "${uniqueLocalName}", ${JSON.stringify(this.filePath || "")});`).join("\n")}
  leaveModule(module);
})();`;
  }
  process() {
    return false;
  }
}
const RESERVED_WORDS = new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
  "enum",
  "implements",
  "interface",
  "let",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "await"
]);
function isIdentifier(name) {
  if (name.length === 0) {
    return false;
  }
  if (!IS_IDENTIFIER_START[name.charCodeAt(0)]) {
    return false;
  }
  for (let i = 1; i < name.length; i++) {
    if (!IS_IDENTIFIER_CHAR[name.charCodeAt(i)]) {
      return false;
    }
  }
  return !RESERVED_WORDS.has(name);
}
class TypeScriptTransformer extends Transformer {
  constructor(rootTransformer, tokens, isImportsTransformEnabled) {
    super();
    this.rootTransformer = rootTransformer;
    this.tokens = tokens;
    this.isImportsTransformEnabled = isImportsTransformEnabled;
  }
  process() {
    if (this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange()) {
      return true;
    }
    if (this.tokens.matches1(TokenType._public) || this.tokens.matches1(TokenType._protected) || this.tokens.matches1(TokenType._private) || this.tokens.matches1(TokenType._abstract) || this.tokens.matches1(TokenType._readonly) || this.tokens.matches1(TokenType._override) || this.tokens.matches1(TokenType.nonNullAssertion)) {
      this.tokens.removeInitialToken();
      return true;
    }
    if (this.tokens.matches1(TokenType._enum) || this.tokens.matches2(TokenType._const, TokenType._enum)) {
      this.processEnum();
      return true;
    }
    if (this.tokens.matches2(TokenType._export, TokenType._enum) || this.tokens.matches3(TokenType._export, TokenType._const, TokenType._enum)) {
      this.processEnum(true);
      return true;
    }
    return false;
  }
  processEnum(isExport = false) {
    this.tokens.removeInitialToken();
    while (this.tokens.matches1(TokenType._const) || this.tokens.matches1(TokenType._enum)) {
      this.tokens.removeToken();
    }
    const enumName = this.tokens.identifierName();
    this.tokens.removeToken();
    if (isExport && !this.isImportsTransformEnabled) {
      this.tokens.appendCode("export ");
    }
    this.tokens.appendCode(`var ${enumName}; (function (${enumName})`);
    this.tokens.copyExpectedToken(TokenType.braceL);
    this.processEnumBody(enumName);
    this.tokens.copyExpectedToken(TokenType.braceR);
    if (isExport && this.isImportsTransformEnabled) {
      this.tokens.appendCode(`)(${enumName} || (exports.${enumName} = ${enumName} = {}));`);
    } else {
      this.tokens.appendCode(`)(${enumName} || (${enumName} = {}));`);
    }
  }
  processEnumBody(enumName) {
    let previousValueCode = null;
    while (true) {
      if (this.tokens.matches1(TokenType.braceR)) {
        break;
      }
      const { nameStringCode, variableName } = this.extractEnumKeyInfo(this.tokens.currentToken());
      this.tokens.removeInitialToken();
      if (this.tokens.matches3(TokenType.eq, TokenType.string, TokenType.comma) || this.tokens.matches3(TokenType.eq, TokenType.string, TokenType.braceR)) {
        this.processStringLiteralEnumMember(enumName, nameStringCode, variableName);
      } else if (this.tokens.matches1(TokenType.eq)) {
        this.processExplicitValueEnumMember(enumName, nameStringCode, variableName);
      } else {
        this.processImplicitValueEnumMember(enumName, nameStringCode, variableName, previousValueCode);
      }
      if (this.tokens.matches1(TokenType.comma)) {
        this.tokens.removeToken();
      }
      if (variableName != null) {
        previousValueCode = variableName;
      } else {
        previousValueCode = `${enumName}[${nameStringCode}]`;
      }
    }
  }
  extractEnumKeyInfo(nameToken) {
    if (nameToken.type === TokenType.name) {
      const name = this.tokens.identifierNameForToken(nameToken);
      return {
        nameStringCode: `"${name}"`,
        variableName: isIdentifier(name) ? name : null
      };
    } else if (nameToken.type === TokenType.string) {
      const name = this.tokens.stringValueForToken(nameToken);
      return {
        nameStringCode: this.tokens.code.slice(nameToken.start, nameToken.end),
        variableName: isIdentifier(name) ? name : null
      };
    } else {
      throw new Error("Expected name or string at beginning of enum element.");
    }
  }
  processStringLiteralEnumMember(enumName, nameStringCode, variableName) {
    if (variableName != null) {
      this.tokens.appendCode(`const ${variableName}`);
      this.tokens.copyToken();
      this.tokens.copyToken();
      this.tokens.appendCode(`; ${enumName}[${nameStringCode}] = ${variableName};`);
    } else {
      this.tokens.appendCode(`${enumName}[${nameStringCode}]`);
      this.tokens.copyToken();
      this.tokens.copyToken();
      this.tokens.appendCode(";");
    }
  }
  processExplicitValueEnumMember(enumName, nameStringCode, variableName) {
    const rhsEndIndex = this.tokens.currentToken().rhsEndIndex;
    if (rhsEndIndex == null) {
      throw new Error("Expected rhsEndIndex on enum assign.");
    }
    if (variableName != null) {
      this.tokens.appendCode(`const ${variableName}`);
      this.tokens.copyToken();
      while (this.tokens.currentIndex() < rhsEndIndex) {
        this.rootTransformer.processToken();
      }
      this.tokens.appendCode(`; ${enumName}[${enumName}[${nameStringCode}] = ${variableName}] = ${nameStringCode};`);
    } else {
      this.tokens.appendCode(`${enumName}[${enumName}[${nameStringCode}]`);
      this.tokens.copyToken();
      while (this.tokens.currentIndex() < rhsEndIndex) {
        this.rootTransformer.processToken();
      }
      this.tokens.appendCode(`] = ${nameStringCode};`);
    }
  }
  processImplicitValueEnumMember(enumName, nameStringCode, variableName, previousValueCode) {
    let valueCode = previousValueCode != null ? `${previousValueCode} + 1` : "0";
    if (variableName != null) {
      this.tokens.appendCode(`const ${variableName} = ${valueCode}; `);
      valueCode = variableName;
    }
    this.tokens.appendCode(`${enumName}[${enumName}[${nameStringCode}] = ${valueCode}] = ${nameStringCode};`);
  }
}
class RootTransformer {
  __init() {
    this.transformers = [];
  }
  __init2() {
    this.generatedVariables = [];
  }
  constructor(sucraseContext, transforms, enableLegacyBabel5ModuleInterop, options) {
    RootTransformer.prototype.__init.call(this);
    RootTransformer.prototype.__init2.call(this);
    this.nameManager = sucraseContext.nameManager;
    this.helperManager = sucraseContext.helperManager;
    const { tokenProcessor, importProcessor } = sucraseContext;
    this.tokens = tokenProcessor;
    this.isImportsTransformEnabled = transforms.includes("imports");
    this.isReactHotLoaderTransformEnabled = transforms.includes("react-hot-loader");
    this.disableESTransforms = Boolean(options.disableESTransforms);
    if (!options.disableESTransforms) {
      this.transformers.push(new OptionalChainingNullishTransformer(tokenProcessor, this.nameManager));
      this.transformers.push(new NumericSeparatorTransformer(tokenProcessor));
      this.transformers.push(new OptionalCatchBindingTransformer(tokenProcessor, this.nameManager));
    }
    if (transforms.includes("jsx")) {
      this.transformers.push(new JSXTransformer(this, tokenProcessor, importProcessor, this.nameManager, options));
      this.transformers.push(new ReactDisplayNameTransformer(this, tokenProcessor, importProcessor, options));
    }
    let reactHotLoaderTransformer = null;
    if (transforms.includes("react-hot-loader")) {
      if (!options.filePath) {
        throw new Error("filePath is required when using the react-hot-loader transform.");
      }
      reactHotLoaderTransformer = new ReactHotLoaderTransformer(tokenProcessor, options.filePath);
      this.transformers.push(reactHotLoaderTransformer);
    }
    if (transforms.includes("imports")) {
      if (importProcessor === null) {
        throw new Error("Expected non-null importProcessor with imports transform enabled.");
      }
      this.transformers.push(new CJSImportTransformer(this, tokenProcessor, importProcessor, this.nameManager, reactHotLoaderTransformer, enableLegacyBabel5ModuleInterop, transforms.includes("typescript")));
    } else {
      this.transformers.push(new ESMImportTransformer(tokenProcessor, this.nameManager, reactHotLoaderTransformer, transforms.includes("typescript"), options));
    }
    if (transforms.includes("flow")) {
      this.transformers.push(new FlowTransformer(this, tokenProcessor));
    }
    if (transforms.includes("typescript")) {
      this.transformers.push(new TypeScriptTransformer(this, tokenProcessor, transforms.includes("imports")));
    }
    if (transforms.includes("jest")) {
      this.transformers.push(new JestHoistTransformer(this, tokenProcessor, this.nameManager, importProcessor));
    }
  }
  transform() {
    this.tokens.reset();
    this.processBalancedCode();
    const shouldAddUseStrict = this.isImportsTransformEnabled;
    let prefix = shouldAddUseStrict ? '"use strict";' : "";
    for (const transformer of this.transformers) {
      prefix += transformer.getPrefixCode();
    }
    prefix += this.helperManager.emitHelpers();
    prefix += this.generatedVariables.map((v) => ` var ${v};`).join("");
    for (const transformer of this.transformers) {
      prefix += transformer.getHoistedCode();
    }
    let suffix = "";
    for (const transformer of this.transformers) {
      suffix += transformer.getSuffixCode();
    }
    let code = this.tokens.finish();
    if (code.startsWith("#!")) {
      let newlineIndex = code.indexOf("\n");
      if (newlineIndex === -1) {
        newlineIndex = code.length;
        code += "\n";
      }
      return code.slice(0, newlineIndex + 1) + prefix + code.slice(newlineIndex + 1) + suffix;
    } else {
      return prefix + this.tokens.finish() + suffix;
    }
  }
  processBalancedCode() {
    let braceDepth = 0;
    let parenDepth = 0;
    while (!this.tokens.isAtEnd()) {
      if (this.tokens.matches1(TokenType.braceL) || this.tokens.matches1(TokenType.dollarBraceL)) {
        braceDepth++;
      } else if (this.tokens.matches1(TokenType.braceR)) {
        if (braceDepth === 0) {
          return;
        }
        braceDepth--;
      }
      if (this.tokens.matches1(TokenType.parenL)) {
        parenDepth++;
      } else if (this.tokens.matches1(TokenType.parenR)) {
        if (parenDepth === 0) {
          return;
        }
        parenDepth--;
      }
      this.processToken();
    }
  }
  processToken() {
    if (this.tokens.matches1(TokenType._class)) {
      this.processClass();
      return;
    }
    for (const transformer of this.transformers) {
      const wasProcessed = transformer.process();
      if (wasProcessed) {
        return;
      }
    }
    this.tokens.copyToken();
  }
  processNamedClass() {
    if (!this.tokens.matches2(TokenType._class, TokenType.name)) {
      throw new Error("Expected identifier for exported class name.");
    }
    const name = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    this.processClass();
    return name;
  }
  processClass() {
    const classInfo = getClassInfo(this, this.tokens, this.nameManager, this.disableESTransforms);
    const needsCommaExpression = (classInfo.headerInfo.isExpression || !classInfo.headerInfo.className) && classInfo.staticInitializerNames.length + classInfo.instanceInitializerNames.length > 0;
    let className = classInfo.headerInfo.className;
    if (needsCommaExpression) {
      className = this.nameManager.claimFreeName("_class");
      this.generatedVariables.push(className);
      this.tokens.appendCode(` (${className} =`);
    }
    const classToken = this.tokens.currentToken();
    const contextId = classToken.contextId;
    if (contextId == null) {
      throw new Error("Expected class to have a context ID.");
    }
    this.tokens.copyExpectedToken(TokenType._class);
    while (!this.tokens.matchesContextIdAndLabel(TokenType.braceL, contextId)) {
      this.processToken();
    }
    this.processClassBody(classInfo, className);
    const staticInitializerStatements = classInfo.staticInitializerNames.map((name) => `${className}.${name}()`);
    if (needsCommaExpression) {
      this.tokens.appendCode(`, ${staticInitializerStatements.map((s) => `${s}, `).join("")}${className})`);
    } else if (classInfo.staticInitializerNames.length > 0) {
      this.tokens.appendCode(` ${staticInitializerStatements.map((s) => `${s};`).join(" ")}`);
    }
  }
  processClassBody(classInfo, className) {
    const {
      headerInfo,
      constructorInsertPos,
      constructorInitializerStatements,
      fields,
      instanceInitializerNames,
      rangesToRemove
    } = classInfo;
    let fieldIndex = 0;
    let rangeToRemoveIndex = 0;
    const classContextId = this.tokens.currentToken().contextId;
    if (classContextId == null) {
      throw new Error("Expected non-null context ID on class.");
    }
    this.tokens.copyExpectedToken(TokenType.braceL);
    if (this.isReactHotLoaderTransformEnabled) {
      this.tokens.appendCode("__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}");
    }
    const needsConstructorInit = constructorInitializerStatements.length + instanceInitializerNames.length > 0;
    if (constructorInsertPos === null && needsConstructorInit) {
      const constructorInitializersCode = this.makeConstructorInitCode(constructorInitializerStatements, instanceInitializerNames, className);
      if (headerInfo.hasSuperclass) {
        const argsName = this.nameManager.claimFreeName("args");
        this.tokens.appendCode(`constructor(...${argsName}) { super(...${argsName}); ${constructorInitializersCode}; }`);
      } else {
        this.tokens.appendCode(`constructor() { ${constructorInitializersCode}; }`);
      }
    }
    while (!this.tokens.matchesContextIdAndLabel(TokenType.braceR, classContextId)) {
      if (fieldIndex < fields.length && this.tokens.currentIndex() === fields[fieldIndex].start) {
        let needsCloseBrace = false;
        if (this.tokens.matches1(TokenType.bracketL)) {
          this.tokens.copyTokenWithPrefix(`${fields[fieldIndex].initializerName}() {this`);
        } else if (this.tokens.matches1(TokenType.string) || this.tokens.matches1(TokenType.num)) {
          this.tokens.copyTokenWithPrefix(`${fields[fieldIndex].initializerName}() {this[`);
          needsCloseBrace = true;
        } else {
          this.tokens.copyTokenWithPrefix(`${fields[fieldIndex].initializerName}() {this.`);
        }
        while (this.tokens.currentIndex() < fields[fieldIndex].end) {
          if (needsCloseBrace && this.tokens.currentIndex() === fields[fieldIndex].equalsIndex) {
            this.tokens.appendCode("]");
          }
          this.processToken();
        }
        this.tokens.appendCode("}");
        fieldIndex++;
      } else if (rangeToRemoveIndex < rangesToRemove.length && this.tokens.currentIndex() >= rangesToRemove[rangeToRemoveIndex].start) {
        if (this.tokens.currentIndex() < rangesToRemove[rangeToRemoveIndex].end) {
          this.tokens.removeInitialToken();
        }
        while (this.tokens.currentIndex() < rangesToRemove[rangeToRemoveIndex].end) {
          this.tokens.removeToken();
        }
        rangeToRemoveIndex++;
      } else if (this.tokens.currentIndex() === constructorInsertPos) {
        this.tokens.copyToken();
        if (needsConstructorInit) {
          this.tokens.appendCode(`;${this.makeConstructorInitCode(constructorInitializerStatements, instanceInitializerNames, className)};`);
        }
        this.processToken();
      } else {
        this.processToken();
      }
    }
    this.tokens.copyExpectedToken(TokenType.braceR);
  }
  makeConstructorInitCode(constructorInitializerStatements, instanceInitializerNames, className) {
    return [
      ...constructorInitializerStatements,
      ...instanceInitializerNames.map((name) => `${className}.prototype.${name}.call(this)`)
    ].join(";");
  }
  processPossibleArrowParamEnd() {
    if (this.tokens.matches2(TokenType.parenR, TokenType.colon) && this.tokens.tokenAtRelativeIndex(1).isType) {
      let nextNonTypeIndex = this.tokens.currentIndex() + 1;
      while (this.tokens.tokens[nextNonTypeIndex].isType) {
        nextNonTypeIndex++;
      }
      if (this.tokens.matches1AtIndex(nextNonTypeIndex, TokenType.arrow)) {
        this.tokens.removeInitialToken();
        while (this.tokens.currentIndex() < nextNonTypeIndex) {
          this.tokens.removeToken();
        }
        this.tokens.replaceTokenTrimmingLeftWhitespace(") =>");
        return true;
      }
    }
    return false;
  }
  processPossibleAsyncArrowWithTypeParams() {
    if (!this.tokens.matchesContextual(ContextualKeyword._async) && !this.tokens.matches1(TokenType._async)) {
      return false;
    }
    const nextToken2 = this.tokens.tokenAtRelativeIndex(1);
    if (nextToken2.type !== TokenType.lessThan || !nextToken2.isType) {
      return false;
    }
    let nextNonTypeIndex = this.tokens.currentIndex() + 1;
    while (this.tokens.tokens[nextNonTypeIndex].isType) {
      nextNonTypeIndex++;
    }
    if (this.tokens.matches1AtIndex(nextNonTypeIndex, TokenType.parenL)) {
      this.tokens.replaceToken("async (");
      this.tokens.removeInitialToken();
      while (this.tokens.currentIndex() < nextNonTypeIndex) {
        this.tokens.removeToken();
      }
      this.tokens.removeToken();
      this.processBalancedCode();
      this.processToken();
      return true;
    }
    return false;
  }
  processPossibleTypeRange() {
    if (this.tokens.currentToken().isType) {
      this.tokens.removeInitialToken();
      while (this.tokens.currentToken().isType) {
        this.tokens.removeToken();
      }
      return true;
    }
    return false;
  }
}
function getTSImportedNames(tokens) {
  const importedNames = new Set();
  for (let i = 0; i < tokens.tokens.length; i++) {
    if (tokens.matches1AtIndex(i, TokenType._import) && !tokens.matches3AtIndex(i, TokenType._import, TokenType.name, TokenType.eq)) {
      collectNamesForImport(tokens, i, importedNames);
    }
  }
  return importedNames;
}
function collectNamesForImport(tokens, index, importedNames) {
  index++;
  if (tokens.matches1AtIndex(index, TokenType.parenL)) {
    return;
  }
  if (tokens.matches1AtIndex(index, TokenType.name)) {
    importedNames.add(tokens.identifierNameAtIndex(index));
    index++;
    if (tokens.matches1AtIndex(index, TokenType.comma)) {
      index++;
    }
  }
  if (tokens.matches1AtIndex(index, TokenType.star)) {
    index += 2;
    importedNames.add(tokens.identifierNameAtIndex(index));
    index++;
  }
  if (tokens.matches1AtIndex(index, TokenType.braceL)) {
    index++;
    collectNamesForNamedImport(tokens, index, importedNames);
  }
}
function collectNamesForNamedImport(tokens, index, importedNames) {
  while (true) {
    if (tokens.matches1AtIndex(index, TokenType.braceR)) {
      return;
    }
    let name = tokens.identifierNameAtIndex(index);
    index++;
    if (tokens.matchesContextualAtIndex(index, ContextualKeyword._as)) {
      index++;
      name = tokens.identifierNameAtIndex(index);
      index++;
    }
    importedNames.add(name);
    if (tokens.matches2AtIndex(index, TokenType.comma, TokenType.braceR)) {
      return;
    } else if (tokens.matches1AtIndex(index, TokenType.braceR)) {
      return;
    } else if (tokens.matches1AtIndex(index, TokenType.comma)) {
      index++;
    } else {
      throw new Error(`Unexpected token: ${JSON.stringify(tokens.tokens[index])}`);
    }
  }
}
function transform(code, options) {
  validateOptions(options);
  try {
    const sucraseContext = getSucraseContext(code, options);
    const transformer = new RootTransformer(sucraseContext, options.transforms, Boolean(options.enableLegacyBabel5ModuleInterop), options);
    let result = { code: transformer.transform() };
    if (options.sourceMapOptions) {
      if (!options.filePath) {
        throw new Error("filePath must be specified when generating a source map.");
      }
      result = __spreadProps(__spreadValues({}, result), {
        sourceMap: computeSourceMap(result.code, options.filePath, options.sourceMapOptions)
      });
    }
    return result;
  } catch (e) {
    if (options.filePath) {
      e.message = `Error transforming ${options.filePath}: ${e.message}`;
    }
    throw e;
  }
}
function getSucraseContext(code, options) {
  const isJSXEnabled2 = options.transforms.includes("jsx");
  const isTypeScriptEnabled2 = options.transforms.includes("typescript");
  const isFlowEnabled2 = options.transforms.includes("flow");
  const disableESTransforms = options.disableESTransforms === true;
  const file = parse(code, isJSXEnabled2, isTypeScriptEnabled2, isFlowEnabled2);
  const tokens = file.tokens;
  const scopes = file.scopes;
  const nameManager = new NameManager(code, tokens);
  const helperManager = new HelperManager(nameManager);
  const tokenProcessor = new TokenProcessor(code, tokens, isFlowEnabled2, disableESTransforms, helperManager);
  const enableLegacyTypeScriptModuleInterop = Boolean(options.enableLegacyTypeScriptModuleInterop);
  let importProcessor = null;
  if (options.transforms.includes("imports")) {
    importProcessor = new CJSImportProcessor(nameManager, tokenProcessor, enableLegacyTypeScriptModuleInterop, options, options.transforms.includes("typescript"), helperManager);
    importProcessor.preprocessTokens();
    identifyShadowedGlobals(tokenProcessor, scopes, importProcessor.getGlobalNames());
    if (options.transforms.includes("typescript")) {
      importProcessor.pruneTypeOnlyImports();
    }
  } else if (options.transforms.includes("typescript")) {
    identifyShadowedGlobals(tokenProcessor, scopes, getTSImportedNames(tokenProcessor));
  }
  return { tokenProcessor, scopes, nameManager, importProcessor, helperManager };
}
const COMP_IDENTIFIER = `__sfc__`;
async function transformTS(src) {
  return transform(src, {
    transforms: ["typescript"]
  }).code;
}
async function compileFile(store, { filename, code, compiled }) {
  var _a;
  if (!code.trim()) {
    store.state.errors = [];
    return;
  }
  if (filename.endsWith(".css")) {
    compiled.css = code;
    store.state.errors = [];
    return;
  }
  if (filename.endsWith(".js") || filename.endsWith(".ts")) {
    if (shouldTransformRef(code)) {
      code = transformRef(code, { filename }).code;
    }
    if (filename.endsWith(".ts")) {
      code = await transformTS(code);
    }
    compiled.js = compiled.ssr = code;
    store.state.errors = [];
    return;
  }
  if (!filename.endsWith(".vue")) {
    store.state.errors = [];
    return;
  }
  const id = await hashId(filename);
  const { errors, descriptor } = store.compiler.parse(code, {
    filename,
    sourceMap: true
  });
  if (errors.length) {
    store.state.errors = errors;
    return;
  }
  if (descriptor.styles.some((s) => s.lang) || descriptor.template && descriptor.template.lang) {
    store.state.errors = [
      `lang="x" pre-processors for <template> or <style> are currently not supported.`
    ];
    return;
  }
  const scriptLang = descriptor.script && descriptor.script.lang || descriptor.scriptSetup && descriptor.scriptSetup.lang;
  const isTS = scriptLang === "ts";
  if (scriptLang && !isTS) {
    store.state.errors = [`Only lang="ts" is supported for <script> blocks.`];
    return;
  }
  const hasScoped = descriptor.styles.some((s) => s.scoped);
  let clientCode = "";
  let ssrCode = "";
  const appendSharedCode = (code2) => {
    clientCode += code2;
    ssrCode += code2;
  };
  const clientScriptResult = await doCompileScript(store, descriptor, id, false, isTS);
  if (!clientScriptResult) {
    return;
  }
  const [clientScript, bindings] = clientScriptResult;
  clientCode += clientScript;
  if (descriptor.scriptSetup) {
    const ssrScriptResult = await doCompileScript(store, descriptor, id, true, isTS);
    if (ssrScriptResult) {
      ssrCode += ssrScriptResult[0];
    } else {
      ssrCode = `/* SSR compile error: ${store.state.errors[0]} */`;
    }
  } else {
    ssrCode += clientScript;
  }
  if (descriptor.template && !descriptor.scriptSetup) {
    const clientTemplateResult = doCompileTemplate(store, descriptor, id, bindings, false, isTS);
    if (!clientTemplateResult) {
      return;
    }
    clientCode += clientTemplateResult;
    const ssrTemplateResult = doCompileTemplate(store, descriptor, id, bindings, true, isTS);
    if (ssrTemplateResult) {
      ssrCode += ssrTemplateResult;
    } else {
      ssrCode = `/* SSR compile error: ${store.state.errors[0]} */`;
    }
  }
  if (hasScoped) {
    appendSharedCode(`
${COMP_IDENTIFIER}.__scopeId = ${JSON.stringify(`data-v-${id}`)}`);
  }
  if (clientCode || ssrCode) {
    appendSharedCode(`
${COMP_IDENTIFIER}.__file = ${JSON.stringify(filename)}
export default ${COMP_IDENTIFIER}`);
    compiled.js = clientCode.trimStart();
    compiled.ssr = ssrCode.trimStart();
  }
  let css2 = "";
  for (const style of descriptor.styles) {
    if (style.module) {
      store.state.errors = [
        `<style module> is not supported in the playground.`
      ];
      return;
    }
    const styleResult = await store.compiler.compileStyleAsync(__spreadProps(__spreadValues({}, (_a = store.options) == null ? void 0 : _a.style), {
      source: style.content,
      filename,
      id,
      scoped: style.scoped,
      modules: !!style.module
    }));
    if (styleResult.errors.length) {
      if (!styleResult.errors[0].message.includes("pathToFileURL")) {
        store.state.errors = styleResult.errors;
      }
    } else {
      css2 += styleResult.code + "\n";
    }
  }
  if (css2) {
    compiled.css = css2.trim();
  } else {
    compiled.css = "/* No <style> tags present */";
  }
  store.state.errors = [];
}
async function doCompileScript(store, descriptor, id, ssr, isTS) {
  var _a, _b, _c, _d;
  if (descriptor.script || descriptor.scriptSetup) {
    try {
      const expressionPlugins = isTS ? ["typescript"] : void 0;
      const compiledScript = store.compiler.compileScript(descriptor, __spreadProps(__spreadValues({
        inlineTemplate: true
      }, (_a = store.options) == null ? void 0 : _a.script), {
        id,
        templateOptions: __spreadProps(__spreadValues({}, (_b = store.options) == null ? void 0 : _b.template), {
          ssr,
          ssrCssVars: descriptor.cssVars,
          compilerOptions: __spreadProps(__spreadValues({}, (_d = (_c = store.options) == null ? void 0 : _c.template) == null ? void 0 : _d.compilerOptions), {
            expressionPlugins
          })
        })
      }));
      let code = "";
      if (compiledScript.bindings) {
        code += `
/* Analyzed bindings: ${JSON.stringify(compiledScript.bindings, null, 2)} */`;
      }
      code += `
` + store.compiler.rewriteDefault(compiledScript.content, COMP_IDENTIFIER, expressionPlugins);
      if ((descriptor.script || descriptor.scriptSetup).lang === "ts") {
        code = await transformTS(code);
      }
      return [code, compiledScript.bindings];
    } catch (e) {
      store.state.errors = [e.stack.split("\n").slice(0, 12).join("\n")];
      return;
    }
  } else {
    return [`
const ${COMP_IDENTIFIER} = {}`, void 0];
  }
}
function doCompileTemplate(store, descriptor, id, bindingMetadata, ssr, isTS) {
  var _a, _b, _c;
  const templateResult = store.compiler.compileTemplate(__spreadProps(__spreadValues({}, (_a = store.options) == null ? void 0 : _a.template), {
    source: descriptor.template.content,
    filename: descriptor.filename,
    id,
    scoped: descriptor.styles.some((s) => s.scoped),
    slotted: descriptor.slotted,
    ssr,
    ssrCssVars: descriptor.cssVars,
    isProd: false,
    compilerOptions: __spreadProps(__spreadValues({}, (_c = (_b = store.options) == null ? void 0 : _b.template) == null ? void 0 : _c.compilerOptions), {
      bindingMetadata,
      expressionPlugins: isTS ? ["typescript"] : void 0
    })
  }));
  if (templateResult.errors.length) {
    store.state.errors = templateResult.errors;
    return;
  }
  const fnName = ssr ? `ssrRender` : `render`;
  return `
${templateResult.code.replace(/\nexport (function|const) (render|ssrRender)/, `$1 ${fnName}`)}
${COMP_IDENTIFIER}.${fnName} = ${fnName}`;
}
// async function hashId(filename) {
//   const msgUint8 = new TextEncoder().encode(filename);
//   const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
//   const hashArray = Array.from(new Uint8Array(hashBuffer));
//   const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
//   return hashHex.slice(0, 8);
// }
async function hashId(filename) {
  return encodeURIComponent(filename).replace(/[!'()*]/g, function(c){
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}
const defaultMainFile = "App.vue";
const welcomeCode = `
<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
<\/script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">
</template>
`.trim();
class File {
  constructor(filename, code = "", hidden = false) {
    this.compiled = {
      js: "",
      css: "",
      ssr: ""
    };
    this.filename = filename;
    this.code = code;
    this.hidden = hidden;
  }
}
class ReplStore {
  constructor({
    serializedState = "",
    defaultVueRuntimeURL = `https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js`,
    showOutput = false,
    outputMode = "preview"
  } = {}) {
    this.compiler = defaultCompiler;
    this.pendingCompiler = null;
    let files = {};
    if (serializedState) {
      const saved = JSON.parse(atou(serializedState));
      for (const filename in saved) {
        files[filename] = new File(filename, saved[filename]);
      }
    } else {
      files = {
        [defaultMainFile]: new File(defaultMainFile, welcomeCode)
      };
    }
    this.defaultVueRuntimeURL = defaultVueRuntimeURL;
    this.initialShowOutput = showOutput;
    this.initialOutputMode = outputMode;
    let mainFile = defaultMainFile;
    if (!files[mainFile]) {
      mainFile = Object.keys(files)[0];
    }
    this.state = reactive({
      mainFile,
      files,
      activeFile: files[mainFile],
      errors: [],
      vueRuntimeURL: this.defaultVueRuntimeURL
    });
    this.initImportMap();
    watchEffect(() => compileFile(this, this.state.activeFile));
    for (const file in this.state.files) {
      if (file !== defaultMainFile) {
        compileFile(this, this.state.files[file]);
      }
    }
  }
  setActive(filename) {
    this.state.activeFile = this.state.files[filename];
  }
  addFile(fileOrFilename) {
    const file = typeof fileOrFilename === "string" ? new File(fileOrFilename) : fileOrFilename;
    this.state.files[file.filename] = file;
    if (!file.hidden)
      this.setActive(file.filename);
  }
  deleteFile(filename) {
    if (confirm(`Are you sure you want to delete ${filename}?`)) {
      if (this.state.activeFile.filename === filename) {
        this.state.activeFile = this.state.files[this.state.mainFile];
      }
      delete this.state.files[filename];
    }
  }
  serialize() {
    return "#" + utoa(JSON.stringify(this.getFiles()));
  }
  getFiles() {
    const exported = {};
    for (const filename in this.state.files) {
      exported[filename] = this.state.files[filename].code;
    }
    return exported;
  }
  async setFiles(newFiles, mainFile = defaultMainFile) {
    const files = {};
    if (mainFile === defaultMainFile && !newFiles[mainFile]) {
      files[mainFile] = new File(mainFile, welcomeCode);
    }
    for (const filename in newFiles) {
      files[filename] = new File(filename, newFiles[filename]);
    }
    for (const file in files) {
      await compileFile(this, files[file]);
    }
    this.state.mainFile = mainFile;
    this.state.files = files;
    this.initImportMap();
    this.setActive(mainFile);
  }
  initImportMap() {
    const map = this.state.files["import-map.json"];
    if (!map) {
      this.state.files["import-map.json"] = new File("import-map.json", JSON.stringify({
        imports: {
          vue: this.defaultVueRuntimeURL
        }
      }, null, 2));
    } else {
      try {
        const json = JSON.parse(map.code);
        if (!json.imports.vue) {
          json.imports.vue = this.defaultVueRuntimeURL;
          map.code = JSON.stringify(json, null, 2);
        }
      } catch (e) {
      }
    }
  }
  getImportMap() {
    try {
      return JSON.parse(this.state.files["import-map.json"].code);
    } catch (e) {
      this.state.errors = [
        `Syntax error in import-map.json: ${e.message}`
      ];
      return {};
    }
  }
  setImportMap(map) {
    this.state.files["import-map.json"].code = JSON.stringify(map, null, 2);
  }
  async setVueVersion(version2) {
    const compilerUrl = `https://unpkg.com/@vue/compiler-sfc@${version2}/dist/compiler-sfc.esm-browser.js`;
    const runtimeUrl = `https://unpkg.com/@vue/runtime-dom@${version2}/dist/runtime-dom.esm-browser.js`;
    this.pendingCompiler = import(
      /* @vite-ignore */
      compilerUrl
    );
    this.compiler = await this.pendingCompiler;
    this.pendingCompiler = null;
    this.state.vueRuntimeURL = runtimeUrl;
    const importMap = this.getImportMap();
    (importMap.imports || (importMap.imports = {})).vue = runtimeUrl;
    this.setImportMap(importMap);
    console.info(`[@vue/repl] Now using Vue version: ${version2}`);
  }
  resetVueVersion() {
    this.compiler = defaultCompiler;
    this.state.vueRuntimeURL = this.defaultVueRuntimeURL;
  }
}
var Repl_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "vue-repl" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    store: { type: null, required: false, default: () => new ReplStore() },
    autoResize: { type: Boolean, required: false, default: true },
    showCompileOutput: { type: Boolean, required: false, default: true },
    showImportMap: { type: Boolean, required: false, default: true },
    clearConsole: { type: Boolean, required: false, default: true },
    sfcOptions: { type: null, required: false },
    layout: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    props.store.options = props.sfcOptions;
    provide("store", props.store);
    provide("autoresize", props.autoResize);
    provide("import-map", toRef(props, "showImportMap"));
    provide("clear-console", toRef(props, "clearConsole"));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(SplitPane, { layout: __props.layout }, {
          left: withCtx(() => [
            createVNode(Editor)
          ]),
          right: withCtx(() => [
            createVNode(Output, {
              showCompileOutput: props.showCompileOutput
            }, null, 8, ["showCompileOutput"])
          ]),
          _: 1
        }, 8, ["layout"])
      ]);
    };
  }
});
var Repl = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-75fc3196"]]);
export { File, Repl, ReplStore, compileFile };
