import { openBlock as w, createElementBlock as H, createElementVNode as oe, unref as v, reactive as It, computed as q, ref as J, toRef as Zt, watch as yt, h as La, render as Zn, defineComponent as Oe, renderSlot as ae, createCommentVNode as W, normalizeClass as ye, withKeys as le, createBlock as ce, withModifiers as he, onMounted as ze, normalizeStyle as Ge, normalizeProps as Se, mergeProps as Ce, Fragment as ue, createTextVNode as et, toDisplayString as Re, onBeforeUpdate as za, nextTick as st, onUnmounted as Yn, renderList as De, withDirectives as zt, vShow as Wt, withCtx as ie, createVNode as Ue, Transition as $t, createSlots as Be, useSlots as pt, guardReactiveProps as Ee, resolveDynamicComponent as Nn, getCurrentScope as Wa, onScopeDispose as Ka, isRef as qn, Teleport as Ga } from "vue";
import { format as rt, isBefore as Ot, isEqual as kt, isAfter as Rt, set as we, setHours as ya, setMinutes as pa, setSeconds as In, setMilliseconds as Bn, getYear as me, getMonth as ve, setMonth as Za, setYear as ft, addMonths as vt, subMonths as Yt, isValid as Kt, parseISO as qa, eachDayOfInterval as ha, getHours as Ze, getMinutes as Je, getSeconds as wt, startOfWeek as ba, endOfWeek as Qa, parse as Tn, isDate as Xa, addYears as ka, subYears as wa, addDays as ct, getDay as Ja, differenceInCalendarDays as xa, add as Da, sub as er, getWeek as tr, getISOWeek as nr, isSameQuarter as Qn, eachQuarterOfInterval as ar, startOfYear as rr, endOfYear as lr, startOfQuarter as or, endOfQuarter as Xn } from "date-fns";
function Bt() {
  return w(), H(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      oe("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      oe("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      oe("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      oe("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Bt.compatConfig = {
  MODE: 3
};
function Ma() {
  return w(), H(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      oe("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      oe("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Ma.compatConfig = {
  MODE: 3
};
function En() {
  return w(), H(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      oe("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
En.compatConfig = {
  MODE: 3
};
function Fn() {
  return w(), H(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      oe("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Fn.compatConfig = {
  MODE: 3
};
function jn() {
  return w(), H(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      oe("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      oe("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
jn.compatConfig = {
  MODE: 3
};
function Vn() {
  return w(), H(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      oe("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Vn.compatConfig = {
  MODE: 3
};
function Hn() {
  return w(), H(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      oe("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Hn.compatConfig = {
  MODE: 3
};
function Un(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $a = { exports: {} };
(function(e) {
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})($a);
var sr = $a.exports, An = { exports: {} };
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    if (t === null || t === !0 || t === !1)
      return NaN;
    var r = Number(t);
    return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r);
  }
  e.exports = n.default;
})(An, An.exports);
var ir = An.exports;
const ur = /* @__PURE__ */ Un(ir);
var Sn = { exports: {} };
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    var r = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return r.setUTCFullYear(t.getFullYear()), t.getTime() - r.getTime();
  }
  e.exports = n.default;
})(Sn, Sn.exports);
var dr = Sn.exports;
const Jn = /* @__PURE__ */ Un(dr);
function cr(e, n) {
  var a = gr(n);
  return a.formatToParts ? vr(a, e) : mr(a, e);
}
var fr = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function vr(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], r = 0; r < a.length; r++) {
      var l = fr[a[r].type];
      l >= 0 && (t[l] = parseInt(a[r].value, 10));
    }
    return t;
  } catch (c) {
    if (c instanceof RangeError)
      return [NaN];
    throw c;
  }
}
function mr(e, n) {
  var a = e.format(n).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var vn = {};
function gr(e) {
  if (!vn[e]) {
    var n = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), a = n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    vn[e] = a ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return vn[e];
}
function Ln(e, n, a, t, r, l, c) {
  var b = /* @__PURE__ */ new Date(0);
  return b.setUTCFullYear(e, n, a), b.setUTCHours(t, r, l, c), b;
}
var xn = 36e5, yr = 6e4, mn = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function zn(e, n, a) {
  var t, r;
  if (!e || (t = mn.timezoneZ.exec(e), t))
    return 0;
  var l;
  if (t = mn.timezoneHH.exec(e), t)
    return l = parseInt(t[1], 10), ea(l) ? -(l * xn) : NaN;
  if (t = mn.timezoneHHMM.exec(e), t) {
    l = parseInt(t[1], 10);
    var c = parseInt(t[2], 10);
    return ea(l, c) ? (r = Math.abs(l) * xn + c * yr, l > 0 ? -r : r) : NaN;
  }
  if (br(e)) {
    n = new Date(n || Date.now());
    var b = a ? n : pr(n), h = Pn(b, e), P = a ? h : hr(n, h, e);
    return -P;
  }
  return NaN;
}
function pr(e) {
  return Ln(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function Pn(e, n) {
  var a = cr(e, n), t = Ln(
    a[0],
    a[1] - 1,
    a[2],
    a[3] % 24,
    a[4],
    a[5],
    0
  ).getTime(), r = e.getTime(), l = r % 1e3;
  return r -= l >= 0 ? l : 1e3 + l, t - r;
}
function hr(e, n, a) {
  var t = e.getTime(), r = t - n, l = Pn(new Date(r), a);
  if (n === l)
    return n;
  r -= l - n;
  var c = Pn(new Date(r), a);
  return l === c ? l : Math.max(l, c);
}
function ea(e, n) {
  return -23 <= e && e <= 23 && (n == null || 0 <= n && n <= 59);
}
var ta = {};
function br(e) {
  if (ta[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), ta[e] = !0, !0;
  } catch {
    return !1;
  }
}
var Ta = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, gn = 36e5, na = 6e4, kr = 2, Ie = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: Ta
};
function _n(e, n) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var a = n || {}, t = a.additionalDigits == null ? kr : ur(a.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var r = wr(e), l = Dr(r.date, t), c = l.year, b = l.restDateString, h = Mr(b, c);
  if (isNaN(h))
    return /* @__PURE__ */ new Date(NaN);
  if (h) {
    var P = h.getTime(), g = 0, C;
    if (r.time && (g = $r(r.time), isNaN(g)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || a.timeZone) {
      if (C = zn(r.timeZone || a.timeZone, new Date(P + g)), isNaN(C))
        return /* @__PURE__ */ new Date(NaN);
    } else
      C = Jn(new Date(P + g)), C = Jn(new Date(P + g + C));
    return new Date(P + g + C);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function wr(e) {
  var n = {}, a = Ie.dateTimePattern.exec(e), t;
  if (a ? (n.date = a[1], t = a[3]) : (a = Ie.datePattern.exec(e), a ? (n.date = a[1], t = a[2]) : (n.date = null, t = e)), t) {
    var r = Ie.timeZone.exec(t);
    r ? (n.time = t.replace(r[1], ""), n.timeZone = r[1].trim()) : n.time = t;
  }
  return n;
}
function Dr(e, n) {
  var a = Ie.YYY[n], t = Ie.YYYYY[n], r;
  if (r = Ie.YYYY.exec(e) || t.exec(e), r) {
    var l = r[1];
    return {
      year: parseInt(l, 10),
      restDateString: e.slice(l.length)
    };
  }
  if (r = Ie.YY.exec(e) || a.exec(e), r) {
    var c = r[1];
    return {
      year: parseInt(c, 10) * 100,
      restDateString: e.slice(c.length)
    };
  }
  return {
    year: null
  };
}
function Mr(e, n) {
  if (n === null)
    return null;
  var a, t, r, l;
  if (e.length === 0)
    return t = /* @__PURE__ */ new Date(0), t.setUTCFullYear(n), t;
  if (a = Ie.MM.exec(e), a)
    return t = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, ra(n, r) ? (t.setUTCFullYear(n, r), t) : /* @__PURE__ */ new Date(NaN);
  if (a = Ie.DDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0);
    var c = parseInt(a[1], 10);
    return Sr(n, c) ? (t.setUTCFullYear(n, 0, c), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ie.MMDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    var b = parseInt(a[2], 10);
    return ra(n, r, b) ? (t.setUTCFullYear(n, r, b), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ie.Www.exec(e), a)
    return l = parseInt(a[1], 10) - 1, la(n, l) ? aa(n, l) : /* @__PURE__ */ new Date(NaN);
  if (a = Ie.WwwD.exec(e), a) {
    l = parseInt(a[1], 10) - 1;
    var h = parseInt(a[2], 10) - 1;
    return la(n, l, h) ? aa(n, l, h) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function $r(e) {
  var n, a, t;
  if (n = Ie.HH.exec(e), n)
    return a = parseFloat(n[1].replace(",", ".")), yn(a) ? a % 24 * gn : NaN;
  if (n = Ie.HHMM.exec(e), n)
    return a = parseInt(n[1], 10), t = parseFloat(n[2].replace(",", ".")), yn(a, t) ? a % 24 * gn + t * na : NaN;
  if (n = Ie.HHMMSS.exec(e), n) {
    a = parseInt(n[1], 10), t = parseInt(n[2], 10);
    var r = parseFloat(n[3].replace(",", "."));
    return yn(a, t, r) ? a % 24 * gn + t * na + r * 1e3 : NaN;
  }
  return null;
}
function aa(e, n, a) {
  n = n || 0, a = a || 0;
  var t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var r = t.getUTCDay() || 7, l = n * 7 + a + 1 - r;
  return t.setUTCDate(t.getUTCDate() + l), t;
}
var Tr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ar = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Aa(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function ra(e, n, a) {
  if (n < 0 || n > 11)
    return !1;
  if (a != null) {
    if (a < 1)
      return !1;
    var t = Aa(e);
    if (t && a > Ar[n] || !t && a > Tr[n])
      return !1;
  }
  return !0;
}
function Sr(e, n) {
  if (n < 1)
    return !1;
  var a = Aa(e);
  return !(a && n > 366 || !a && n > 365);
}
function la(e, n, a) {
  return !(n < 0 || n > 52 || a != null && (a < 0 || a > 6));
}
function yn(e, n, a) {
  return !(e != null && (e < 0 || e >= 25) || n != null && (n < 0 || n >= 60) || a != null && (a < 0 || a >= 60));
}
var Cn = { exports: {} }, On = { exports: {} };
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t, r) {
    if (t == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var l in r)
      Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
    return t;
  }
  e.exports = n.default;
})(On, On.exports);
var Pr = On.exports;
(function(e, n) {
  var a = sr.default;
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = r;
  var t = a(Pr);
  function r(l) {
    return (0, t.default)({}, l);
  }
  e.exports = n.default;
})(Cn, Cn.exports);
var _r = Cn.exports;
const Cr = /* @__PURE__ */ Un(_r);
function Or(e, n, a) {
  var t = _n(e, a), r = zn(n, t, !0), l = new Date(t.getTime() - r), c = /* @__PURE__ */ new Date(0);
  return c.setFullYear(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()), c.setHours(l.getUTCHours(), l.getUTCMinutes(), l.getUTCSeconds(), l.getUTCMilliseconds()), c;
}
function Rr(e, n, a) {
  if (typeof e == "string" && !e.match(Ta)) {
    var t = Cr(a);
    return t.timeZone = n, _n(e, t);
  }
  var r = _n(e, a), l = Ln(
    r.getFullYear(),
    r.getMonth(),
    r.getDate(),
    r.getHours(),
    r.getMinutes(),
    r.getSeconds(),
    r.getMilliseconds()
  ).getTime(), c = zn(n, new Date(l));
  return new Date(l + c);
}
function oa(e) {
  return (n) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${n}T00:00:00+00:00`)).slice(0, 2);
}
function Yr(e) {
  return (n) => rt(/* @__PURE__ */ new Date(`2017-01-0${n}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const Nr = (e, n, a) => {
  const t = [1, 2, 3, 4, 5, 6, 7];
  let r;
  if (e !== null)
    try {
      r = t.map(Yr(e));
    } catch {
      r = t.map(oa(n));
    }
  else
    r = t.map(oa(n));
  const l = r.slice(0, a), c = r.slice(a + 1, r.length);
  return [r[a]].concat(...c).concat(...l);
}, Wn = (e, n) => {
  const a = [];
  for (let t = +e[0]; t <= +e[1]; t++)
    a.push({ value: +t, text: `${t}` });
  return n ? a.reverse() : a;
}, Sa = (e, n, a) => {
  const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((l) => {
    const c = l < 10 ? `0${l}` : l;
    return /* @__PURE__ */ new Date(`2017-${c}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const l = a === "long" ? "MMMM" : "MMM";
      return t.map((c, b) => {
        const h = rt(c, l, { locale: e });
        return {
          text: h.charAt(0).toUpperCase() + h.substring(1),
          value: b
        };
      });
    } catch {
    }
  const r = new Intl.DateTimeFormat(n, { month: a, timeZone: "UTC" });
  return t.map((l, c) => {
    const b = r.format(l);
    return {
      text: b.charAt(0).toUpperCase() + b.substring(1),
      value: c
    };
  });
}, Ir = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Ae = (e) => {
  const n = v(e);
  return n != null && n.$el ? n == null ? void 0 : n.$el : n;
}, Br = (e) => Object.assign({ type: "dot" }, e), Pa = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, qt = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, $e = (e) => e, sa = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, ia = (e) => e === null, Er = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, Fr = (e) => {
  const n = [], a = (t) => t.filter((r) => r);
  for (let t = 0; t < e.length; t += 3) {
    const r = [e[t], e[t + 1], e[t + 2]];
    n.push(a(r));
  }
  return n;
}, Nt = (e, n, a) => {
  const t = a || a === 0, r = n || n === 0;
  if (!t && !r)
    return !1;
  const l = +a, c = +n;
  return t && r ? +e > l || +e < c : t ? +e > l : r ? +e < c : !1;
}, Dt = (e, n) => Fr(e).map((a) => a.map((t) => {
  const { active: r, disabled: l, isBetween: c } = n(t);
  return Object.assign(t, {
    active: r,
    disabled: l,
    className: {
      dp__overlay_cell_active: r,
      dp__overlay_cell: !r,
      dp__overlay_cell_disabled: l,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: l && r,
      dp__cell_in_between: c
    }
  });
})), lt = (e, n, a = !1) => {
  e && n.allowStopPropagation && (a && e.stopImmediatePropagation(), e.stopPropagation());
}, ua = (e, n, a, t, r) => {
  const l = Tn(e, n.slice(0, e.length), /* @__PURE__ */ new Date());
  return Kt(l) && Xa(l) ? t || r ? l : we(l, {
    hours: +a.hours,
    minutes: +(a == null ? void 0 : a.minutes),
    seconds: +(a == null ? void 0 : a.seconds),
    milliseconds: 0
  }) : null;
}, jr = (e, n, a, t, r) => {
  const l = Array.isArray(a) ? a[0] : a;
  if (typeof n == "string")
    return ua(e, n, l, t, r);
  if (Array.isArray(n)) {
    let c = null;
    for (const b of n)
      if (c = ua(e, b, l, t, r), c)
        break;
    return c;
  }
  return typeof n == "function" ? n(e) : null;
}, V = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Vr = (e, n, a) => {
  if (n) {
    const r = (e.getMonth() + 1).toString().padStart(2, "0"), l = e.getDate().toString().padStart(2, "0"), c = e.getHours().toString().padStart(2, "0"), b = e.getMinutes().toString().padStart(2, "0"), h = a ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${r}-${l}T${c}:${b}:${h}.000Z`;
  }
  const t = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(t).toISOString();
}, Le = (e) => {
  let n = V(JSON.parse(JSON.stringify(e)));
  return n = ya(n, 0), n = pa(n, 0), n = In(n, 0), n = Bn(n, 0), n;
}, ot = (e, n, a, t) => {
  let r = e ? V(e) : V();
  return (n || n === 0) && (r = ya(r, +n)), (a || a === 0) && (r = pa(r, +a)), (t || t === 0) && (r = In(r, +t)), Bn(r, 0);
}, _e = (e, n) => !e || !n ? !1 : Ot(Le(e), Le(n)), ge = (e, n) => !e || !n ? !1 : kt(Le(e), Le(n)), Ye = (e, n) => !e || !n ? !1 : Rt(Le(e), Le(n)), Qt = (e, n, a) => e != null && e[0] && (e != null && e[1]) ? Ye(a, e[0]) && _e(a, e[1]) : e != null && e[0] && n ? Ye(a, e[0]) && _e(a, n) || _e(a, e[0]) && Ye(a, n) : !1, Ke = (e) => {
  const n = we(new Date(e), { date: 1 });
  return Le(n);
}, pn = (e, n, a) => n && (a || a === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((t) => t === n ? [t, a] : [t, isNaN(+e[t]) ? void 0 : +e[t]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, mt = (e) => ({
  hours: Ze(e),
  minutes: Je(e),
  seconds: wt(e)
}), _a = (e, n) => {
  if (n) {
    const a = me(V(n));
    if (a > e)
      return 12;
    if (a === e)
      return ve(V(n));
  }
}, Ca = (e, n) => {
  if (n) {
    const a = me(V(n));
    return a < e ? -1 : a === e ? ve(V(n)) : void 0;
  }
}, Mt = (e) => {
  if (e)
    return me(V(e));
}, He = (e, n) => n ? Or(e, n) : e, Oa = (e, n) => n ? Rr(e, n) : e, da = (e) => e instanceof Date ? e : qa(e), Ra = (e, n) => {
  const a = Ye(e, n) ? n : e, t = Ye(n, e) ? n : e;
  return ha({ start: a, end: t });
}, Hr = (e) => {
  const n = vt(e, 1);
  return { month: ve(n), year: me(n) };
}, Gt = (e, n, a) => {
  const t = ba(He(e, n), { weekStartsOn: +a }), r = Qa(He(e, n), { weekStartsOn: +a });
  return [t, r];
}, Ya = (e, n) => {
  const a = {
    hours: Ze(V()),
    minutes: Je(V()),
    seconds: n ? wt(V()) : 0
  };
  return Object.assign(a, e);
}, at = (e, n, a) => [we(V(e), { date: 1 }), we(V(), { month: n, year: a, date: 1 })], xe = (e, n, a) => {
  let t = e ? V(e) : V();
  return (n || n === 0) && (t = Za(t, n)), a && (t = ft(t, a)), t;
}, Na = (e, n, a, t, r) => {
  if (!t || r && !n || !r && !a)
    return !1;
  const l = r ? vt(e, 1) : Yt(e, 1), c = [ve(l), me(l)];
  return r ? !Lr(...c, n) : !Ur(...c, a);
}, Ur = (e, n, a) => _e(...at(a, e, n)) || ge(...at(a, e, n)), Lr = (e, n, a) => Ye(...at(a, e, n)) || ge(...at(a, e, n)), Ia = (e, n, a, t, r, l, c) => {
  if (typeof n == "function" && !c)
    return n(e);
  const b = a ? { locale: a } : void 0;
  return Array.isArray(e) ? `${rt(e[0], l, b)}${r && !e[1] ? "" : t}${e[1] ? rt(e[1], l, b) : ""}` : rt(e, l, b);
}, ht = (e) => {
  if (e)
    return null;
  throw new Error(qt.prop("partial-range"));
}, Ut = (e, n) => {
  if (n)
    return e();
  throw new Error(qt.prop("range"));
}, Rn = (e) => Array.isArray(e) ? Kt(e[0]) && (e[1] ? Kt(e[1]) : !0) : e ? Kt(e) : !1, zr = (e) => we(V(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), hn = (e, n, a, t) => {
  if (!e)
    return !0;
  if (t) {
    const r = a === "max" ? Ot(e, n) : Rt(e, n), l = { seconds: 0, milliseconds: 0 };
    return r || kt(we(e, l), we(n, l));
  }
  return a === "max" ? e.getTime() <= n.getTime() : e.getTime() >= n.getTime();
}, ca = (e, n, a, t, r) => {
  const l = e ? zr(e) : V(n);
  return Array.isArray(t) ? hn(t[0], l, a, !!n) && hn(t[1], l, a, !!n) && r : hn(t, l, a, !!n) && r;
}, bn = (e) => we(V(), mt(e)), Wr = (e, n) => Array.isArray(e) ? e.map((a) => V(a)).filter((a) => me(V(a)) === n).map((a) => ve(a)) : [], _t = It({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Ba = () => {
  const e = (t) => {
    _t.menuFocused = t;
  }, n = (t) => {
    _t.shiftKeyInMenu !== t && (_t.shiftKeyInMenu = t);
  };
  return {
    control: q(() => ({ shiftKeyInMenu: _t.shiftKeyInMenu, menuFocused: _t.menuFocused })),
    setMenuFocused: e,
    setShiftKey: n
  };
}, ke = It({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), kn = J(null), Lt = J(!1), wn = J(!1), Dn = J(!1), Mn = J(!1), Ne = J(0), Pe = J(0), it = () => {
  const e = q(() => Lt.value ? [...ke.selectionGrid, ke.actionRow].filter((y) => y.length) : wn.value ? [
    ...ke.timePicker[0],
    ...ke.timePicker[1],
    Mn.value ? [] : [kn.value],
    ke.actionRow
  ].filter((y) => y.length) : Dn.value ? [...ke.monthPicker, ke.actionRow] : [ke.monthYear, ...ke.calendar, ke.time, ke.actionRow].filter((y) => y.length)), n = (y) => {
    Ne.value = y ? Ne.value + 1 : Ne.value - 1;
    let F = null;
    e.value[Pe.value] && (F = e.value[Pe.value][Ne.value]), F || (Ne.value = y ? Ne.value - 1 : Ne.value + 1);
  }, a = (y) => {
    if (Pe.value === 0 && !y || Pe.value === e.value.length && y)
      return;
    Pe.value = y ? Pe.value + 1 : Pe.value - 1, e.value[Pe.value] ? e.value[Pe.value] && !e.value[Pe.value][Ne.value] && Ne.value !== 0 && (Ne.value = e.value[Pe.value].length - 1) : Pe.value = y ? Pe.value - 1 : Pe.value + 1;
  }, t = (y) => {
    let F = null;
    e.value[Pe.value] && (F = e.value[Pe.value][Ne.value]), F ? F.focus({ preventScroll: !Lt.value }) : Ne.value = y ? Ne.value - 1 : Ne.value + 1;
  }, r = () => {
    n(!0), t(!0);
  }, l = () => {
    n(!1), t(!1);
  }, c = () => {
    a(!1), t(!0);
  }, b = () => {
    a(!0), t(!0);
  }, h = (y, F) => {
    ke[F] = y;
  }, P = (y, F) => {
    ke[F] = y;
  }, g = () => {
    Ne.value = 0, Pe.value = 0;
  };
  return {
    buildMatrix: h,
    buildMultiLevelMatrix: P,
    setTimePickerBackRef: (y) => {
      kn.value = y;
    },
    setSelectionGrid: (y) => {
      Lt.value = y, g(), y || (ke.selectionGrid = []);
    },
    setTimePicker: (y, F = !1) => {
      wn.value = y, Mn.value = F, g(), y || (ke.timePicker[0] = [], ke.timePicker[1] = []);
    },
    setTimePickerElements: (y, F = 0) => {
      ke.timePicker[F] = y;
    },
    arrowRight: r,
    arrowLeft: l,
    arrowUp: c,
    arrowDown: b,
    clearArrowNav: () => {
      ke.monthYear = [], ke.calendar = [], ke.time = [], ke.actionRow = [], ke.selectionGrid = [], ke.timePicker[0] = [], ke.timePicker[1] = [], Lt.value = !1, wn.value = !1, Mn.value = !1, Dn.value = !1, g(), kn.value = null;
    },
    setMonthPicker: (y) => {
      Dn.value = y, g();
    },
    refSets: ke
    // exposed for testing
  };
}, fa = (e) => Object.assign(e || {}, {
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down"
}), Kr = (e) => Object.assign(e || {}, {
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (n) => `Increment ${n}`,
  decrementValue: (n) => `Decrement ${n}`,
  openTpOverlay: (n) => `Open ${n} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: () => ""
}), va = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, Gr = (e) => {
  const n = typeof e == "object" && e, a = {
    static: !0,
    solo: !1
  };
  if (!e)
    return Object.assign(a, { count: va(!1) });
  const t = n ? e : {}, r = n ? t.count ? t.count : !0 : e, l = va(r);
  return Object.assign(a, t, { count: l });
}, Zr = (e, n, a) => e || (typeof a == "string" ? a : n), qr = (e) => typeof e == "boolean" ? e ? fa({}) : !1 : fa(e), Qr = (e) => {
  const n = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? Object.assign(n, e || {}, { enabled: !0 }) : Object.assign(n, { enabled: e });
}, Xr = (e) => Object.assign(e || {}, {
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] }
}), Jr = (e) => Object.assign(e || {}, {
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0
}), xr = (e) => {
  const n = { input: !1 };
  return typeof e == "object" ? Object.assign(n, e || {}, { enabled: !0 }) : Object.assign(n, {
    enabled: e
  });
}, el = (e) => Object.assign({
  allowStopPropagation: !0,
  closeOnScroll: !1,
  modeHeight: 255,
  allowPreventDefault: !1,
  closeOnClearValue: !0,
  closeOnAutoApply: !0,
  noSwipe: !1,
  keepActionRow: !1,
  onClickOutside: void 0
}, e || {}), Te = (e) => {
  const n = () => {
    const G = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${G}` : `hh:mm${G} aa`;
  }, a = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? n() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${n()}` : "MM/dd/yyyy", t = (G) => Ya(G, e.enableSeconds), r = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [t(e.startTime[0]), t(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? t(e.startTime) : null, l = q(() => Gr(e.multiCalendars)), c = q(() => r()), b = q(() => Kr(e.ariaLabels)), h = q(() => Xr(e.filters)), P = q(() => qr(e.transitions)), g = q(() => Jr(e.actionRow)), C = q(
    () => Zr(e.previewFormat, e.format, a())
  ), O = q(() => Qr(e.textInput)), K = q(() => xr(e.inline)), A = q(() => el(e.config));
  return {
    defaultedTransitions: P,
    defaultedMultiCalendars: l,
    defaultedStartTime: c,
    defaultedAriaLabels: b,
    defaultedFilters: h,
    defaultedActionRow: g,
    defaultedPreviewFormat: C,
    defaultedTextInput: O,
    defaultedInline: K,
    defaultedConfig: A,
    getDefaultPattern: a,
    getDefaultStartTime: r
  };
}, tl = (e, n, a) => {
  const t = J(), { defaultedTextInput: r, getDefaultPattern: l } = Te(n), c = J(""), b = Zt(n, "format");
  yt(t, () => {
    e("internal-model-change", t.value);
  }), yt(b, () => {
    f();
  });
  const h = (i) => Oa(i, n.timezone), P = (i) => He(i, n.timezone), g = (i, N, pe = !1) => Ia(
    i,
    n.format,
    n.formatLocale,
    r.value.rangeSeparator,
    n.modelAuto,
    N || l(),
    pe
  ), C = (i) => i ? n.modelType ? D(i) : {
    hours: Ze(i),
    minutes: Je(i),
    seconds: n.enableSeconds ? wt(i) : 0
  } : null, O = (i) => n.modelType ? D(i) : { month: ve(i), year: me(i) }, K = (i) => Array.isArray(i) ? Ut(
    () => [
      ft(V(), i[0]),
      i[1] ? ft(V(), i[1]) : ht(n.partialRange)
    ],
    n.range
  ) : ft(V(), +i), A = (i, N) => (typeof i == "string" || typeof i == "number") && n.modelType ? j(i) : N, G = (i) => Array.isArray(i) ? [
    A(
      i[0],
      ot(null, +i[0].hours, +i[0].minutes, i[0].seconds)
    ),
    A(
      i[1],
      ot(null, +i[1].hours, +i[1].minutes, i[1].seconds)
    )
  ] : A(i, ot(null, i.hours, i.minutes, i.seconds)), X = (i) => Array.isArray(i) ? n.multiDates ? i.map((N) => A(N, xe(null, +N.month, +N.year))) : Ut(
    () => [
      A(i[0], xe(null, +i[0].month, +i[0].year)),
      A(
        i[1],
        i[1] ? xe(null, +i[1].month, +i[1].year) : ht(n.partialRange)
      )
    ],
    n.range
  ) : A(i, xe(null, +i.month, +i.year)), y = (i) => {
    if (Array.isArray(i))
      return i.map((N) => j(N));
    throw new Error(qt.dateArr("multi-dates"));
  }, F = (i) => {
    if (Array.isArray(i))
      return [V(i[0]), V(i[1])];
    throw new Error(qt.dateArr("week-picker"));
  }, p = (i) => n.modelAuto ? Array.isArray(i) ? [j(i[0]), j(i[1])] : n.autoApply ? [j(i)] : [j(i), null] : Array.isArray(i) ? Ut(
    () => [
      j(i[0]),
      i[1] ? j(i[1]) : ht(n.partialRange)
    ],
    n.range
  ) : j(i), T = () => {
    Array.isArray(t.value) && n.range && t.value.length === 1 && t.value.push(ht(n.partialRange));
  }, Z = () => {
    const i = t.value;
    return [
      D(i[0]),
      i[1] ? D(i[1]) : ht(n.partialRange)
    ];
  }, I = () => t.value[1] ? Z() : D($e(t.value[0])), ee = () => (t.value || []).map((i) => D(i)), re = () => (T(), n.modelAuto ? I() : n.multiDates ? ee() : Array.isArray(t.value) ? Ut(() => Z(), n.range) : D($e(t.value))), R = (i) => !i || Array.isArray(i) && !i.length ? null : n.timePicker ? G($e(i)) : n.monthPicker ? X($e(i)) : n.yearPicker ? K($e(i)) : n.multiDates ? y($e(i)) : n.weekPicker ? F($e(i)) : p($e(i)), m = (i) => {
    const N = R(i);
    Rn($e(N)) ? (t.value = $e(N), f()) : (t.value = null, c.value = "");
  }, k = () => {
    const i = (N) => rt(N, r.value.format);
    return `${i(t.value[0])} ${r.value.rangeSeparator} ${t.value[1] ? i(t.value[1]) : ""}`;
  }, L = () => a.value && t.value ? Array.isArray(t.value) ? k() : rt(t.value, r.value.format) : g(t.value), te = () => t.value ? n.multiDates ? t.value.map((i) => g(i)).join("; ") : r.value.enabled && typeof r.value.format == "string" ? L() : g(t.value) : "", f = () => {
    !n.format || typeof n.format == "string" || r.value.enabled && typeof r.value.format == "string" ? c.value = te() : c.value = n.format(t.value);
  }, j = (i) => {
    if (n.utc) {
      const N = new Date(i);
      return n.utc === "preserve" ? new Date(N.getTime() + N.getTimezoneOffset() * 6e4) : N;
    }
    return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? P(new Date(i)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? Tn(i, l(), /* @__PURE__ */ new Date()) : P(Tn(i, n.modelType, /* @__PURE__ */ new Date())) : P(new Date(i));
  }, D = (i) => i ? n.utc ? Vr(i, n.utc === "preserve", n.enableSeconds) : n.modelType ? n.modelType === "timestamp" ? +h(i) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? g(h(i)) : g(h(i), n.modelType, !0) : h(i) : "", S = (i, N = !1) => {
    if (e("update:model-value", i), n.emitTimezone && N) {
      const pe = Array.isArray(i) ? i.map((d) => He($e(d)), n.emitTimezone) : He($e(i), n.emitTimezone);
      e("update:model-timezone-value", pe);
    }
  }, s = (i) => Array.isArray(t.value) ? n.multiDates ? t.value.map((N) => i(N)) : [
    i(t.value[0]),
    t.value[1] ? i(t.value[1]) : ht(n.partialRange)
  ] : i($e(t.value)), o = (i) => S($e(s(i)));
  return {
    inputValue: c,
    internalModelValue: t,
    checkBeforeEmit: () => t.value ? n.range ? n.partialRange ? t.value.length >= 1 : t.value.length === 2 : !!t.value : !1,
    parseExternalModelValue: m,
    formatInputValue: f,
    emitModelValue: () => (f(), n.monthPicker ? o(O) : n.timePicker ? o(C) : n.yearPicker ? o(me) : n.weekPicker ? S(
      t.value.map((i) => D(i)),
      !0
    ) : S(re(), !0))
  };
}, nl = (e, n) => {
  const { defaultedFilters: a } = Te(e), { validateMonthYearInRange: t } = Tt(e), r = (P, g) => {
    let C = P;
    return a.value.months.includes(ve(C)) ? (C = g ? vt(P, 1) : Yt(P, 1), r(C, g)) : C;
  }, l = (P, g) => {
    let C = P;
    return a.value.years.includes(me(C)) ? (C = g ? ka(P, 1) : wa(P, 1), l(C, g)) : C;
  }, c = (P, g = !1) => {
    const C = we(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let O = P ? vt(C, 1) : Yt(C, 1);
    e.disableYearSelect && (O = ft(O, e.year));
    let K = ve(O), A = me(O);
    a.value.months.includes(K) && (O = r(O, P), K = ve(O), A = me(O)), a.value.years.includes(A) && (O = l(O, P), A = me(O)), t(K, A, P, e.preventMinMaxNavigation) && b(K, A, g);
  }, b = (P, g, C) => {
    n("update-month-year", { month: P, year: g, fromNav: C });
  }, h = q(() => (P) => Na(
    we(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }),
    e.maxDate,
    e.minDate,
    e.preventMinMaxNavigation,
    P
  ));
  return { handleMonthYearChange: c, isDisabled: h, updateMonthYear: b };
};
var bt = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(bt || {}), We = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(We || {}), dt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(dt || {}), gt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(gt || {}), Xe = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(Xe || {});
const al = ({
  menuRef: e,
  menuRefInner: n,
  inputRef: a,
  pickerWrapperRef: t,
  inline: r,
  emit: l,
  props: c,
  slots: b
}) => {
  const h = J({}), P = J(!1), g = J({
    top: "0",
    left: "0"
  }), C = J(!1), O = Zt(c, "teleportCenter");
  yt(O, () => {
    g.value = JSON.parse(JSON.stringify({})), T();
  });
  const K = (D) => {
    if (c.teleport) {
      const S = D.getBoundingClientRect();
      return {
        left: S.left + window.scrollX,
        top: S.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, A = (D, S) => {
    g.value.left = `${D + S - h.value.width}px`;
  }, G = (D) => {
    g.value.left = `${D}px`;
  }, X = (D, S) => {
    c.position === bt.left && G(D), c.position === bt.right && A(D, S), c.position === bt.center && (g.value.left = `${D + S / 2 - h.value.width / 2}px`);
  }, y = (D) => {
    const { width: S, height: s } = D.getBoundingClientRect(), { top: o, left: M } = c.altPosition ? c.altPosition(D) : K(D);
    return { top: +o, left: +M, width: S, height: s };
  }, F = () => {
    g.value.left = "50%", g.value.top = "50%", g.value.transform = "translate(-50%, -50%)", g.value.position = "fixed", delete g.value.opacity;
  }, p = () => {
    const D = Ae(a), { top: S, left: s, transform: o } = c.altPosition(D);
    g.value = { top: `${S}px`, left: `${s}px`, transform: o || "" };
  }, T = (D = !0) => {
    var S;
    if (!r.value.enabled) {
      if (O.value)
        return F();
      if (c.altPosition !== null)
        return p();
      if (D) {
        const s = c.teleport ? (S = n.value) == null ? void 0 : S.$el : e.value;
        s && (h.value = s.getBoundingClientRect()), l("recalculate-position");
      }
      return k();
    }
  }, Z = ({ inputEl: D, left: S, width: s }) => {
    window.screen.width > 768 && !P.value && X(S, s), re(D);
  }, I = (D) => {
    const { top: S, left: s, height: o, width: M } = y(D);
    g.value.top = `${o + S + +c.offset}px`, C.value = !1, P.value || (g.value.left = `${s + M / 2 - h.value.width / 2}px`), Z({ inputEl: D, left: s, width: M });
  }, ee = (D) => {
    const { top: S, left: s, width: o } = y(D);
    g.value.top = `${S - +c.offset - h.value.height}px`, C.value = !0, Z({ inputEl: D, left: s, width: o });
  }, re = (D) => {
    if (c.autoPosition) {
      const { left: S, width: s } = y(D), { left: o, right: M } = h.value;
      if (!P.value) {
        if (Math.abs(o) !== Math.abs(M)) {
          if (o <= 0)
            return P.value = !0, G(S);
          if (M >= document.documentElement.clientWidth)
            return P.value = !0, A(S, s);
        }
        return X(S, s);
      }
    }
  }, R = () => {
    const D = Ae(a);
    if (D) {
      const { height: S } = h.value, { top: s, height: o } = D.getBoundingClientRect(), Q = window.innerHeight - s - o, i = s;
      return S <= Q ? dt.bottom : S > Q && S <= i ? dt.top : Q >= i ? dt.bottom : dt.top;
    }
    return dt.bottom;
  }, m = (D) => R() === dt.bottom ? I(D) : ee(D), k = () => {
    const D = Ae(a);
    if (D)
      return c.autoPosition ? m(D) : I(D);
  }, L = function(D) {
    if (D) {
      const S = D.scrollHeight > D.clientHeight, o = window.getComputedStyle(D).overflowY.indexOf("hidden") !== -1;
      return S && !o;
    }
    return !0;
  }, te = function(D) {
    return !D || D === document.body || D.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : L(D) ? D : te(D.parentNode);
  }, f = (D) => {
    if (D)
      switch (c.position) {
        case bt.left:
          return { left: 0, transform: "translateX(0)" };
        case bt.right:
          return { left: `${D.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${D.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: C,
    menuStyle: g,
    xCorrect: P,
    setMenuPosition: T,
    getScrollableParent: te,
    shadowRender: (D, S) => {
      var pe, d, E;
      const s = document.createElement("div"), o = (pe = Ae(a)) == null ? void 0 : pe.getBoundingClientRect();
      s.setAttribute("id", "dp--temp-container");
      const M = (d = t.value) != null && d.clientWidth ? t.value : document.body;
      M.append(s);
      const Q = document.getElementById("dp--temp-container"), i = f(o), N = La(
        D,
        Object.assign(S, {
          shadow: !0,
          style: Object.assign(i, { opacity: 0, position: "absolute" })
        }),
        Object.fromEntries(
          Object.keys(b).filter((z) => ["right-sidebar", "left-sidebar"].includes(z)).map((z) => [z, b[z]])
        )
      );
      Zn(N, Q), h.value = (E = N.el) == null ? void 0 : E.getBoundingClientRect(), Zn(null, Q), M.removeChild(Q);
    }
  };
}, nt = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] }
], rl = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], ll = {
  all: () => nt,
  monthYear: () => nt.filter((e) => e.use.includes("month-year")),
  input: () => rl,
  timePicker: () => nt.filter((e) => e.use.includes("time")),
  action: () => nt.filter((e) => e.use.includes("action")),
  calendar: () => nt.filter((e) => e.use.includes("calendar")),
  menu: () => nt.filter((e) => e.use.includes("menu")),
  shared: () => nt.filter((e) => e.use.includes("shared")),
  yearMode: () => nt.filter((e) => e.use.includes("year-mode"))
}, Fe = (e, n, a) => {
  const t = [];
  return ll[n]().forEach((r) => {
    e[r.name] && t.push(r.name);
  }), a != null && a.length && a.forEach((r) => {
    r.slot && t.push(r.slot);
  }), t;
}, Et = (e) => {
  const n = q(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), a = q(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: n, showTransition: !!e.value, menuTransition: a };
}, Ft = (e, n) => {
  const a = V(He(/* @__PURE__ */ new Date(), e.timezone)), t = J([{ month: ve(a), year: me(a) }]), r = It({
    hours: e.range ? [Ze(a), Ze(a)] : Ze(a),
    minutes: e.range ? [Je(a), Je(a)] : Je(a),
    seconds: e.range ? [0, 0] : 0
  }), l = q({
    get: () => e.internalModelValue,
    set: (h) => {
      !e.readonly && !e.disabled && n("update:internal-model-value", h);
    }
  }), c = q(
    () => (h) => t.value[h] ? t.value[h].month : 0
  ), b = q(
    () => (h) => t.value[h] ? t.value[h].year : 0
  );
  return {
    calendars: t,
    time: r,
    modelValue: l,
    month: c,
    year: b
  };
}, ol = (e, n) => {
  const { defaultedMultiCalendars: a } = Te(n), { isDisabled: t, matchDate: r } = Tt(n), l = J(null), c = J(V(He(/* @__PURE__ */ new Date(), n.timezone))), b = (o) => {
    !o.current && n.hideOffsetDates || (l.value = o.value);
  }, h = () => {
    l.value = null;
  }, P = (o) => Array.isArray(e.value) && n.range && e.value[0] && l.value ? o ? Ye(l.value, e.value[0]) : _e(l.value, e.value[0]) : !0, g = (o, M) => {
    const Q = () => e.value ? M ? e.value[0] || null : e.value[1] : null, i = e.value && Array.isArray(e.value) ? Q() : null;
    return ge(V(o.value), i);
  }, C = (o) => {
    const M = Array.isArray(e.value) ? e.value[0] : null;
    return o ? !_e(l.value ? l.value : null, M) : !0;
  }, O = (o, M = !0) => (n.range || n.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? n.hideOffsetDates && !o.current ? !1 : ge(V(o.value), e.value[M ? 0 : 1]) : n.range ? g(o, M) && C(M) || ge(o.value, Array.isArray(e.value) ? e.value[0] : null) && P(M) : !1, K = (o, M, Q) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? o ? !1 : Q ? Ye(e.value[0], M.value) : _e(e.value[0], M.value) : !1, A = (o) => !e.value || n.hideOffsetDates && !o.current ? !1 : n.range ? n.modelAuto && Array.isArray(e.value) ? ge(o.value, e.value[0] ? e.value[0] : c.value) : !1 : n.multiDates && Array.isArray(e.value) ? e.value.some((M) => ge(M, o.value)) : ge(o.value, e.value ? e.value : c.value), G = (o) => {
    if (n.autoRange || n.weekPicker) {
      if (l.value) {
        if (n.hideOffsetDates && !o.current)
          return !1;
        const M = ct(l.value, +n.autoRange), Q = Gt(V(l.value), n.timezone, n.weekStart);
        return n.weekPicker ? ge(Q[1], V(o.value)) : ge(M, V(o.value));
      }
      return !1;
    }
    return !1;
  }, X = (o) => {
    if (n.autoRange || n.weekPicker) {
      if (l.value) {
        const M = ct(l.value, +n.autoRange);
        if (n.hideOffsetDates && !o.current)
          return !1;
        const Q = Gt(V(l.value), n.timezone, n.weekStart);
        return n.weekPicker ? Ye(o.value, Q[0]) && _e(o.value, Q[1]) : Ye(o.value, l.value) && _e(o.value, M);
      }
      return !1;
    }
    return !1;
  }, y = (o) => {
    if (n.autoRange || n.weekPicker) {
      if (l.value) {
        if (n.hideOffsetDates && !o.current)
          return !1;
        const M = Gt(V(l.value), n.timezone, n.weekStart);
        return n.weekPicker ? ge(M[0], o.value) : ge(l.value, o.value);
      }
      return !1;
    }
    return !1;
  }, F = (o) => Qt(e.value, l.value, o.value), p = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1, T = () => n.modelAuto ? Pa(n.internalModelValue) : !0, Z = (o) => {
    if (Array.isArray(e.value) && e.value.length || n.weekPicker)
      return !1;
    const M = n.range ? !O(o) && !O(o, !1) : !0;
    return !t(o.value) && !A(o) && !(!o.current && n.hideOffsetDates) && M;
  }, I = (o) => n.range ? n.modelAuto ? p() && A(o) : !1 : A(o), ee = (o) => {
    var M;
    return n.highlight ? r(
      o.value,
      (M = n.arrMapValues) != null && M.highlightedDates ? n.arrMapValues.highlightedDates : n.highlight
    ) : !1;
  }, re = (o) => t(o.value) && n.highlightDisabledDays === !1, R = (o) => {
    var M;
    return (M = n.highlightWeekDays) == null ? void 0 : M.includes(o.value.getDay());
  }, m = (o) => (n.range || n.weekPicker) && (!(a.value.count > 0) || o.current) && T() && !(!o.current && n.hideOffsetDates) && !A(o) ? F(o) : !1, k = (o) => {
    const { isRangeStart: M, isRangeEnd: Q } = f(o), i = n.range ? M || Q : !1;
    return {
      dp__cell_offset: !o.current,
      dp__pointer: !n.disabled && !(!o.current && n.hideOffsetDates) && !t(o.value),
      dp__cell_disabled: t(o.value),
      dp__cell_highlight: !re(o) && (ee(o) || R(o)) && !I(o) && !i,
      dp__cell_highlight_active: !re(o) && (ee(o) || R(o)) && I(o),
      dp__today: !n.noToday && ge(o.value, c.value) && o.current
    };
  }, L = (o) => ({
    dp__active_date: I(o),
    dp__date_hover: Z(o)
  }), te = (o) => Object.assign(j(o), D(o), {
    dp__range_between_week: m(o) && n.weekPicker
  }), f = (o) => {
    const M = a.value.count > 0 ? o.current && O(o) && T() : O(o) && T(), Q = a.value.count > 0 ? o.current && O(o, !1) && T() : O(o, !1) && T();
    return { isRangeStart: M, isRangeEnd: Q };
  }, j = (o) => {
    const { isRangeStart: M, isRangeEnd: Q } = f(o);
    return {
      dp__range_start: M,
      dp__range_end: Q,
      dp__range_between: m(o) && !n.weekPicker,
      dp__date_hover_start: K(Z(o), o, !0),
      dp__date_hover_end: K(Z(o), o, !1)
    };
  }, D = (o) => Object.assign(j(o), {
    dp__cell_auto_range: X(o),
    dp__cell_auto_range_start: y(o),
    dp__cell_auto_range_end: G(o)
  }), S = (o) => n.range ? n.autoRange ? D(o) : n.modelAuto ? Object.assign(L(o), j(o)) : j(o) : n.weekPicker ? te(o) : L(o);
  return {
    setHoverDate: b,
    clearHoverDate: h,
    getDayClassData: (o) => n.hideOffsetDates && !o.current ? {} : Object.assign(k(o), S(o), {
      [n.dayClass ? n.dayClass(o.value) : ""]: !0,
      [n.calendarCellClassName]: !!n.calendarCellClassName
    })
  };
}, Tt = (e) => {
  const { defaultedFilters: n } = Te(e), a = () => {
    if (e.timezone)
      return e.timezone;
    if (e.utc)
      return "UTC";
  }, t = (m) => {
    const k = Le(r(V(m))).toISOString(), [L] = k.split("T");
    return L;
  }, r = (m) => e.utc === "preserve" ? Oa(m, a()) : He(m, a()), l = (m) => {
    var M;
    const k = e.maxDate ? Ye(r(m), r(V(e.maxDate))) : !1, L = e.minDate ? _e(r(m), r(V(e.minDate))) : !1, te = P(
      r(m),
      (M = e.arrMapValues) != null && M.disabledDates ? e.arrMapValues.disabledDates : e.disabledDates
    ), j = n.value.months.map((Q) => +Q).includes(ve(m)), D = e.disabledWeekDays.length ? e.disabledWeekDays.some((Q) => +Q === Ja(m)) : !1, S = C(m), s = me(m), o = s < +e.yearRange[0] || s > +e.yearRange[1];
    return !(k || L || te || j || o || D || S);
  }, c = (m, k) => _e(...at(e.minDate, m, k)) || ge(...at(e.minDate, m, k)), b = (m, k) => Ye(...at(e.maxDate, m, k)) || ge(...at(e.maxDate, m, k)), h = (m, k, L) => {
    let te = !1;
    return e.maxDate && L && b(m, k) && (te = !0), e.minDate && !L && c(m, k) && (te = !0), te;
  }, P = (m, k) => m ? k instanceof Map ? !!k.get(t(m)) : Array.isArray(k) ? k.some((L) => ge(r(V(L)), r(m))) : k ? k(V(JSON.parse(JSON.stringify(m)))) : !1 : !0, g = (m, k, L, te) => {
    let f = !1;
    return te ? e.minDate && e.maxDate ? f = h(m, k, L) : (e.minDate && c(m, k) || e.maxDate && b(m, k)) && (f = !0) : f = !0, f;
  }, C = (m) => {
    var k, L, te, f, j;
    return Array.isArray(e.allowedDates) && !((k = e.allowedDates) != null && k.length) ? !0 : (L = e.arrMapValues) != null && L.allowedDates ? !P(m, (te = e.arrMapValues) == null ? void 0 : te.allowedDates) : (f = e.allowedDates) != null && f.length ? !((j = e.allowedDates) != null && j.some((D) => ge(r(V(D)), r(m)))) : !1;
  }, O = (m) => !l(m), K = (m) => e.noDisabledRange ? !ha({ start: m[0], end: m[1] }).some((L) => O(L)) : !0, A = (m, k, L = 0) => {
    if (Array.isArray(k) && k[L]) {
      const te = xa(m, k[L]), f = Ra(k[L], m), j = f.length === 1 ? 0 : f.filter((S) => O(S)).length, D = Math.abs(te) - j;
      if (e.minRange && e.maxRange)
        return D >= +e.minRange && D <= +e.maxRange;
      if (e.minRange)
        return D >= +e.minRange;
      if (e.maxRange)
        return D <= +e.maxRange;
    }
    return !0;
  }, G = (m) => new Map(m.map((k) => [t(k), !0])), X = (m) => Array.isArray(m) && m.length > 0, y = () => {
    const m = {
      disabledDates: null,
      allowedDates: null,
      highlightedDates: null
    };
    return X(e.allowedDates) && (m.allowedDates = G(e.allowedDates)), X(e.highlight) && (m.highlightedDates = G(e.highlight)), X(e.disabledDates) && (m.disabledDates = G(e.disabledDates)), m;
  }, F = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, p = (m) => Array.isArray(m) ? [m[0] ? bn(m[0]) : null, m[1] ? bn(m[1]) : null] : bn(m), T = (m, k, L) => m.find(
    (te) => +te.hours === Ze(k) && te.minutes === "*" ? !0 : +te.minutes === Je(k) && +te.hours === Ze(k)
  ) && L, Z = (m, k, L) => {
    const [te, f] = m, [j, D] = k;
    return !T(te, j, L) && !T(f, D, L) && L;
  }, I = (m, k) => {
    const L = Array.isArray(k) ? k : [k];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? Z(e.disabledTimes, L, m) : !L.some((te) => T(e.disabledTimes, te, m)) : m;
  }, ee = (m, k) => {
    const L = Array.isArray(k) ? [mt(k[0]), k[1] ? mt(k[1]) : void 0] : mt(k), te = !e.disabledTimes(L);
    return m && te;
  }, re = (m, k) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? I(k, m) : ee(k, m) : k;
  return {
    isDisabled: O,
    validateDate: l,
    validateMonthYearInRange: g,
    isDateRangeAllowed: K,
    checkMinMaxRange: A,
    matchDate: P,
    mapDatesArrToMap: y,
    isValidTime: (m) => {
      let k = !0;
      if (!m || F())
        return !0;
      const L = !e.minDate && !e.maxDate ? p(m) : m;
      return (e.maxTime || e.maxDate) && (k = ca(e.maxTime, e.maxDate, "max", $e(L), k)), (e.minTime || e.minDate) && (k = ca(e.minTime, e.minDate, "min", $e(L), k)), re(m, k);
    }
  };
}, Xt = () => {
  const e = q(() => (t, r) => t == null ? void 0 : t.includes(r)), n = q(() => (t, r) => t.count ? t.solo ? !0 : r === 0 : !0), a = q(() => (t, r) => t.count ? t.solo ? !0 : r === t.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: n, showRightIcon: a };
}, sl = (e, n, a) => {
  const t = J(0), r = It({
    [gt.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [gt.calendar]: !1,
    [gt.header]: !1
  }), l = (...g) => {
    var C;
    (C = e.flow) != null && C.length && (r[g] = !0, Object.keys(r).filter((O) => !r[O]).length || P());
  }, c = () => {
    var g;
    (g = e.flow) != null && g.length && t.value !== -1 && (t.value += 1, n("flow-step", t.value), P());
  }, b = () => {
    t.value = -1;
  }, h = (g, C, ...O) => {
    e.flow[t.value] === g && a.value && a.value[C](...O);
  }, P = () => {
    h(Xe.month, "toggleMonthPicker", !0), h(Xe.year, "toggleYearPicker", !0), h(Xe.calendar, "toggleTimePicker", !1, !0), h(Xe.time, "toggleTimePicker", !0, !0);
    const g = e.flow[t.value];
    (g === Xe.hours || g === Xe.minutes || g === Xe.seconds) && h(g, "toggleTimePicker", !0, !0, g);
  };
  return { childMount: l, updateFlowStep: c, resetFlow: b, flowStep: t };
}, Jt = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleport: { type: [String, Boolean], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function],
    default: null
  },
  calendarClassName: { type: String, default: null },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: !0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 }
}, qe = Object.assign(Jt, {
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  arrMapValues: { type: Object, default: () => ({}) },
  noOverlayFocus: { type: Boolean, default: !1 }
}), il = {
  key: 1,
  class: "dp__input_wrap"
}, ul = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid", "onKeydown"], dl = {
  key: 2,
  class: "dp__clear_icon"
}, cl = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: Object.assign(Jt, {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" }
  }),
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, {
      defaultedTextInput: r,
      defaultedAriaLabels: l,
      defaultedInline: c,
      defaultedConfig: b,
      getDefaultPattern: h,
      getDefaultStartTime: P
    } = Te(t), g = J(), C = J(null), O = J(!1), K = J(!1), A = q(
      () => ({
        dp__pointer: !t.disabled && !t.readonly && !r.value.enabled,
        dp__disabled: t.disabled,
        dp__input_readonly: !r.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !t.hideInputIcon,
        dp__input_valid: !!t.state,
        dp__input_invalid: t.state === !1,
        dp__input_focus: O.value || t.isMenuOpen,
        dp__input_reg: !r.value.enabled,
        [t.inputClassName]: !!t.inputClassName
      })
    ), G = () => {
      a("set-input-date", null), t.autoApply && (a("set-empty-date"), g.value = null);
    }, X = (f) => {
      const j = P();
      return jr(
        f,
        r.value.format ? r.value.format : h(),
        j || Ya({}, t.enableSeconds),
        t.inputValue,
        K.value
      );
    }, y = (f) => {
      const { rangeSeparator: j } = r.value, [D, S] = f.split(`${j}`);
      if (D) {
        const s = X(D.trim()), o = S ? X(S.trim()) : null, M = s && o ? [s, o] : [s];
        g.value = s ? M : null;
      }
    }, F = () => {
      K.value = !0;
    }, p = (f) => {
      if (t.range)
        y(f);
      else if (t.multiDates) {
        const j = f.split(";");
        g.value = j.map((D) => X(D.trim())).filter((D) => D);
      } else
        g.value = X(f);
    }, T = (f) => {
      var D;
      const j = typeof f == "string" ? f : (D = f.target) == null ? void 0 : D.value;
      j !== "" ? (r.value.openMenu && !t.isMenuOpen && a("open"), p(j), a("set-input-date", g.value)) : G(), K.value = !1, a("update:input-value", j);
    }, Z = (f) => {
      r.value.enabled ? (p(f.target.value), r.value.enterSubmit && Rn(g.value) && t.inputValue !== "" ? (a("set-input-date", g.value, !0), g.value = null) : r.value.enterSubmit && t.inputValue === "" && (g.value = null, a("clear"))) : re(f);
    }, I = (f) => {
      r.value.enabled && r.value.tabSubmit && p(f.target.value), r.value.tabSubmit && Rn(g.value) && t.inputValue !== "" ? (a("set-input-date", g.value, !0), g.value = null) : r.value.tabSubmit && t.inputValue === "" && (g.value = null, a("clear"));
    }, ee = () => {
      var f;
      O.value = !0, a("focus"), r.value.enabled && r.value.selectOnFocus && ((f = C.value) == null || f.select());
    }, re = (f) => {
      f.preventDefault(), lt(f, b.value, !0), r.value.enabled && r.value.openMenu && !c.value.input && !t.isMenuOpen ? a("open") : r.value.enabled || a("toggle");
    }, R = () => {
      a("real-blur"), O.value = !1, (!t.isMenuOpen || c.value.enabled && c.value.input) && a("blur"), t.autoApply && r.value.enabled && g.value && !t.isMenuOpen && (a("set-input-date", g.value), a("select-date"), g.value = null);
    }, m = (f) => {
      lt(f, b.value, !0), a("clear");
    }, k = (f) => {
      if (!r.value.enabled) {
        if (f.code === "Tab")
          return;
        f.preventDefault();
      }
    };
    return n({
      focusInput: () => {
        var f;
        (f = C.value) == null || f.focus({ preventScroll: !0 });
      },
      setParsedDate: (f) => {
        g.value = f;
      }
    }), (f, j) => {
      var D;
      return w(), H("div", { onClick: re }, [
        f.$slots.trigger && !f.$slots["dp-input"] && !v(c).enabled ? ae(f.$slots, "trigger", { key: 0 }) : W("", !0),
        !f.$slots.trigger && (!v(c).enabled || v(c).input) ? (w(), H("div", il, [
          f.$slots["dp-input"] && !f.$slots.trigger && !v(c).enabled ? ae(f.$slots, "dp-input", {
            key: 0,
            value: f.inputValue,
            isMenuOpen: f.isMenuOpen,
            onInput: T,
            onEnter: Z,
            onTab: I,
            onClear: m,
            onBlur: R,
            onKeypress: k,
            onPaste: F
          }) : W("", !0),
          f.$slots["dp-input"] ? W("", !0) : (w(), H("input", {
            key: 1,
            ref_key: "inputRef",
            ref: C,
            id: f.uid ? `dp-input-${f.uid}` : void 0,
            name: f.name,
            class: ye(A.value),
            inputmode: v(r).enabled ? "text" : "none",
            placeholder: f.placeholder,
            disabled: f.disabled,
            readonly: f.readonly,
            required: f.required,
            value: f.inputValue,
            autocomplete: f.autocomplete,
            "aria-label": (D = v(l)) == null ? void 0 : D.input,
            "aria-disabled": f.disabled || void 0,
            "aria-invalid": f.state === !1 ? !0 : void 0,
            onInput: T,
            onKeydown: [
              le(Z, ["enter"]),
              le(I, ["tab"]),
              k
            ],
            onBlur: R,
            onFocus: ee,
            onKeypress: k,
            onPaste: F
          }, null, 42, ul)),
          oe("div", {
            onClick: j[2] || (j[2] = (S) => a("toggle"))
          }, [
            f.$slots["input-icon"] && !f.hideInputIcon ? (w(), H("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: j[0] || (j[0] = (S) => a("toggle"))
            }, [
              ae(f.$slots, "input-icon")
            ])) : W("", !0),
            !f.$slots["input-icon"] && !f.hideInputIcon && !f.$slots["dp-input"] ? (w(), ce(v(Bt), {
              key: 1,
              onClick: j[1] || (j[1] = (S) => a("toggle")),
              class: "dp__input_icon dp__input_icons"
            })) : W("", !0)
          ]),
          f.$slots["clear-icon"] && f.inputValue && f.clearable && !f.disabled && !f.readonly ? (w(), H("span", dl, [
            ae(f.$slots, "clear-icon", { clear: m })
          ])) : W("", !0),
          f.clearable && !f.$slots["clear-icon"] && f.inputValue && !f.disabled && !f.readonly ? (w(), ce(v(Ma), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: j[3] || (j[3] = he((S) => m(S), ["prevent"]))
          })) : W("", !0)
        ])) : W("", !0)
      ]);
    };
  }
}), fl = ["title"], vl = { class: "dp__action_buttons" }, ml = ["onKeydown", "disabled"], gl = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: Object.assign(qe, {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 }
  }),
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: n }) {
    const a = e, {
      defaultedActionRow: t,
      defaultedPreviewFormat: r,
      defaultedMultiCalendars: l,
      defaultedTextInput: c,
      defaultedInline: b,
      getDefaultPattern: h
    } = Te(a), { isValidTime: P } = Tt(a), { buildMatrix: g } = it(), C = J(null), O = J(null);
    ze(() => {
      a.arrowNavigation && g([Ae(C), Ae(O)], "actionRow");
    });
    const K = q(() => a.range && !a.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), A = q(() => !G.value || !X.value || !K.value), G = q(() => !a.enableTimePicker || a.ignoreTimeValidation ? !0 : P(a.internalModelValue)), X = q(() => a.monthPicker ? a.range && Array.isArray(a.internalModelValue) ? !a.internalModelValue.filter((m) => !ee(m)).length : ee(a.internalModelValue) : !0), y = () => {
      const R = r.value;
      return a.timePicker || a.monthPicker, R($e(a.internalModelValue));
    }, F = () => {
      const R = a.internalModelValue;
      return l.value.count > 0 ? `${p(R[0])} - ${p(R[1])}` : [p(R[0]), p(R[1])];
    }, p = (R) => Ia(
      R,
      r.value,
      a.formatLocale,
      c.value.rangeSeparator,
      a.modelAuto,
      h()
    ), T = q(() => !a.internalModelValue || !a.menuMount ? "" : typeof r.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? F() : a.multiDates ? a.internalModelValue.map((R) => `${p(R)}`) : a.modelAuto ? `${p(a.internalModelValue[0])}` : `${p(a.internalModelValue[0])} -` : p(a.internalModelValue) : y()), Z = () => a.multiDates ? "; " : " - ", I = q(
      () => Array.isArray(T.value) ? T.value.join(Z()) : T.value
    ), ee = (R) => {
      if (!a.monthPicker)
        return !0;
      let m = !0;
      const k = V(Ke(R));
      if (a.minDate && a.maxDate) {
        const L = V(Ke(a.minDate)), te = V(Ke(a.maxDate));
        return Ye(k, L) && _e(k, te) || ge(k, L) || ge(k, te);
      }
      if (a.minDate) {
        const L = V(Ke(a.minDate));
        m = Ye(k, L) || ge(k, L);
      }
      if (a.maxDate) {
        const L = V(Ke(a.maxDate));
        m = _e(k, L) || ge(k, L);
      }
      return m;
    }, re = () => {
      G.value && X.value && K.value ? n("select-date") : n("invalid-select");
    };
    return (R, m) => (w(), H("div", {
      class: "dp__action_row",
      style: Ge(R.calendarWidth ? { width: `${R.calendarWidth}px` } : {})
    }, [
      R.$slots["action-row"] ? ae(R.$slots, "action-row", Se(Ce({ key: 0 }, {
        internalModelValue: R.internalModelValue,
        disabled: A.value,
        selectDate: () => R.$emit("select-date"),
        closePicker: () => R.$emit("close-picker")
      }))) : (w(), H(ue, { key: 1 }, [
        v(t).showPreview ? (w(), H("div", {
          key: 0,
          class: "dp__selection_preview",
          title: I.value
        }, [
          R.$slots["action-preview"] ? ae(R.$slots, "action-preview", {
            key: 0,
            value: R.internalModelValue
          }) : W("", !0),
          R.$slots["action-preview"] ? W("", !0) : (w(), H(ue, { key: 1 }, [
            et(Re(I.value), 1)
          ], 64))
        ], 8, fl)) : W("", !0),
        oe("div", vl, [
          R.$slots["action-buttons"] ? ae(R.$slots, "action-buttons", {
            key: 0,
            value: R.internalModelValue
          }) : W("", !0),
          R.$slots["action-buttons"] ? W("", !0) : (w(), H(ue, { key: 1 }, [
            !v(b).enabled && v(t).showCancel ? (w(), H("button", {
              key: 0,
              type: "button",
              ref_key: "cancelButtonRef",
              ref: C,
              class: "dp__action_button dp__action_cancel",
              onClick: m[0] || (m[0] = (k) => R.$emit("close-picker")),
              onKeydown: [
                m[1] || (m[1] = le((k) => R.$emit("close-picker"), ["enter"])),
                m[2] || (m[2] = le((k) => R.$emit("close-picker"), ["space"]))
              ]
            }, Re(R.cancelText), 545)) : W("", !0),
            v(t).showNow ? (w(), H("button", {
              key: 1,
              type: "button",
              ref_key: "cancelButtonRef",
              ref: C,
              class: "dp__action_button dp__action_cancel",
              onClick: m[3] || (m[3] = (k) => R.$emit("select-now")),
              onKeydown: [
                m[4] || (m[4] = le((k) => R.$emit("select-now"), ["enter"])),
                m[5] || (m[5] = le((k) => R.$emit("select-now"), ["space"]))
              ]
            }, Re(R.nowButtonLabel), 545)) : W("", !0),
            v(t).showSelect ? (w(), H("button", {
              key: 2,
              type: "button",
              class: "dp__action_button dp__action_select",
              onKeydown: [
                le(re, ["enter"]),
                le(re, ["space"])
              ],
              onClick: re,
              disabled: A.value,
              ref_key: "selectButtonRef",
              ref: O
            }, Re(R.selectText), 41, ml)) : W("", !0)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), yl = ["onKeydown"], pl = { class: "dp__selection_grid_header" }, hl = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], bl = ["aria-label", "onKeydown"], jt = /* @__PURE__ */ Oe({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setSelectionGrid: r, buildMultiLevelMatrix: l, setMonthPicker: c } = it(), { defaultedAriaLabels: b, defaultedTextInput: h, defaultedConfig: P } = Te(
      t
    ), { hideNavigationButtons: g } = Xt(), C = J(!1), O = J(null), K = J(null), A = J([]), G = J(), X = J(null), y = J(0), F = J(null);
    za(() => {
      O.value = null;
    }), ze(() => {
      st().then(() => m()), t.noOverlayFocus || T(), p(!0);
    }), Yn(() => p(!1));
    const p = (s) => {
      var o;
      t.arrowNavigation && ((o = t.headerRefs) != null && o.length ? c(s) : r(s));
    }, T = () => {
      var o;
      const s = Ae(K);
      s && (h.value.enabled || (O.value ? (o = O.value) == null || o.focus({ preventScroll: !0 }) : s.focus({ preventScroll: !0 })), C.value = s.clientHeight < s.scrollHeight);
    }, Z = q(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !t.useRelative,
        "dp--overlay-relative": t.useRelative
      })
    ), I = q(
      () => t.useRelative ? { height: `${t.height}px`, width: "260px" } : void 0
    ), ee = q(() => ({
      dp__overlay_col: !0
    })), re = q(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: C.value,
        dp__button_bottom: t.isLast
      })
    ), R = q(() => {
      var s, o;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((s = t.items) == null ? void 0 : s.length) <= 6,
        dp__container_block: ((o = t.items) == null ? void 0 : o.length) > 6
      };
    }), m = () => {
      st().then(() => {
        const s = Ae(O), o = Ae(K), M = Ae(X), Q = Ae(F), i = M ? M.getBoundingClientRect().height : 0;
        o && (o.getBoundingClientRect().height ? y.value = o.getBoundingClientRect().height - i : y.value = P.value.modeHeight - i), s && Q && (Q.scrollTop = s.offsetTop - Q.offsetTop - (y.value / 2 - s.getBoundingClientRect().height) - i);
      });
    }, k = (s) => {
      s.disabled || a("selected", s.value);
    }, L = () => {
      a("toggle"), a("reset-flow");
    }, te = () => {
      t.escClose && L();
    }, f = (s, o, M, Q) => {
      s && (o.active && (O.value = s), t.arrowNavigation && (Array.isArray(A.value[M]) ? A.value[M][Q] = s : A.value[M] = [s], j()));
    }, j = () => {
      var o, M;
      const s = (o = t.headerRefs) != null && o.length ? [t.headerRefs].concat(A.value) : A.value.concat([t.skipButtonRef ? [] : [X.value]]);
      l($e(s), (M = t.headerRefs) != null && M.length ? "monthPicker" : "selectionGrid");
    }, D = (s) => {
      t.arrowNavigation || lt(s, P.value, !0);
    }, S = (s) => {
      G.value = s, a("hover-value", s);
    };
    return n({ focusGrid: T }), (s, o) => {
      var M;
      return w(), H("div", {
        ref_key: "gridWrapRef",
        ref: K,
        class: ye(Z.value),
        style: Ge(I.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          le(he(te, ["prevent"]), ["esc"]),
          o[0] || (o[0] = le(he((Q) => D(Q), ["prevent"]), ["left"])),
          o[1] || (o[1] = le(he((Q) => D(Q), ["prevent"]), ["up"])),
          o[2] || (o[2] = le(he((Q) => D(Q), ["prevent"]), ["down"])),
          o[3] || (o[3] = le(he((Q) => D(Q), ["prevent"]), ["right"]))
        ]
      }, [
        oe("div", {
          class: ye(R.value),
          ref_key: "containerRef",
          ref: F,
          role: "grid",
          style: Ge({ height: `${y.value}px` })
        }, [
          oe("div", pl, [
            ae(s.$slots, "header")
          ]),
          s.$slots.overlay ? ae(s.$slots, "overlay", { key: 0 }) : (w(!0), H(ue, { key: 1 }, De(s.items, (Q, i) => (w(), H("div", {
            class: ye(["dp__overlay_row", { dp__flex_row: s.items.length >= 3 }]),
            key: i,
            role: "row"
          }, [
            (w(!0), H(ue, null, De(Q, (N, pe) => (w(), H("div", {
              role: "gridcell",
              class: ye(ee.value),
              key: N.value,
              "aria-selected": N.active,
              "aria-disabled": N.disabled || void 0,
              ref_for: !0,
              ref: (d) => f(d, N, i, pe),
              tabindex: "0",
              onClick: (d) => k(N),
              onKeydown: [
                le(he((d) => k(N), ["prevent"]), ["enter"]),
                le(he((d) => k(N), ["prevent"]), ["space"])
              ],
              onMouseover: (d) => S(N.value)
            }, [
              oe("div", {
                class: ye(N.className)
              }, [
                s.$slots.item ? ae(s.$slots, "item", {
                  key: 0,
                  item: N
                }) : W("", !0),
                s.$slots.item ? W("", !0) : (w(), H(ue, { key: 1 }, [
                  et(Re(N.text), 1)
                ], 64))
              ], 2)
            ], 42, hl))), 128))
          ], 2))), 128))
        ], 6),
        s.$slots["button-icon"] ? zt((w(), H("button", {
          key: 0,
          type: "button",
          "aria-label": (M = v(b)) == null ? void 0 : M.toggleOverlay,
          class: ye(re.value),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: X,
          onClick: L,
          onKeydown: [
            le(L, ["enter"]),
            le(L, ["tab"])
          ]
        }, [
          ae(s.$slots, "button-icon")
        ], 42, bl)), [
          [Wt, !v(g)(s.hideNavigation, s.type)]
        ]) : W("", !0)
      ], 46, yl);
    };
  }
}), xt = /* @__PURE__ */ Oe({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean }
  },
  setup(e) {
    const n = e, a = q(
      () => n.multiCalendars > 0 ? [...Array(n.multiCalendars).keys()] : [0]
    ), t = q(() => ({
      dp__instance_calendar: n.multiCalendars > 0
    }));
    return (r, l) => (w(), H("div", {
      class: ye({
        dp__menu_inner: !r.stretch,
        "dp--menu--inner-stretched": r.stretch,
        dp__flex_display: r.multiCalendars > 0
      })
    }, [
      (w(!0), H(ue, null, De(a.value, (c, b) => (w(), H("div", {
        key: c,
        class: ye(t.value)
      }, [
        ae(r.$slots, "default", {
          instance: c,
          index: b
        })
      ], 2))), 128))
    ], 2));
  }
}), kl = ["aria-label", "aria-disabled"], Ct = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: n }) {
    const a = J(null);
    return ze(() => n("set-ref", a)), (t, r) => (w(), H("button", {
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      onClick: r[0] || (r[0] = (l) => t.$emit("activate")),
      onKeydown: [
        r[1] || (r[1] = le(he((l) => t.$emit("activate"), ["prevent"]), ["enter"])),
        r[2] || (r[2] = le(he((l) => t.$emit("activate"), ["prevent"]), ["space"]))
      ],
      tabindex: "0",
      "aria-label": t.ariaLabel,
      "aria-disabled": t.disabled || void 0,
      ref_key: "elRef",
      ref: a
    }, [
      oe("span", {
        class: ye(["dp__inner_nav", { dp__inner_nav_disabled: t.disabled }])
      }, [
        ae(t.$slots, "default")
      ], 2)
    ], 40, kl));
  }
}), wl = { class: "dp--year-mode-picker" }, Dl = ["aria-label"], Ea = /* @__PURE__ */ Oe({
  __name: "YearModePicker",
  props: Object.assign(qe, {
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  }),
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: n }) {
    const a = e, { showRightIcon: t, showLeftIcon: r } = Xt(), { defaultedConfig: l, defaultedMultiCalendars: c, defaultedAriaLabels: b, defaultedTransitions: h } = Te(a), { showTransition: P, transitionName: g } = Et(h), C = (A = !1, G) => {
      n("toggle-year-picker", { flow: A, show: G });
    }, O = (A) => {
      n("year-select", A);
    }, K = (A = !1) => {
      n("handle-year", A);
    };
    return (A, G) => {
      var X, y, F;
      return w(), H("div", wl, [
        v(r)(v(c), A.instance) ? (w(), ce(Ct, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (X = v(b)) == null ? void 0 : X.prevYear,
          disabled: A.isDisabled(!1),
          onActivate: G[0] || (G[0] = (p) => K(!1))
        }, {
          default: ie(() => [
            A.$slots["arrow-left"] ? ae(A.$slots, "arrow-left", { key: 0 }) : W("", !0),
            A.$slots["arrow-left"] ? W("", !0) : (w(), ce(v(En), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : W("", !0),
        oe("button", {
          class: "dp__btn dp--year-select",
          type: "button",
          ref: "mpYearButtonRef",
          "aria-label": (y = v(b)) == null ? void 0 : y.openYearsOverlay,
          onClick: G[1] || (G[1] = () => C(!1)),
          onKeydown: G[2] || (G[2] = le(() => C(!1), ["enter"]))
        }, [
          A.$slots.year ? ae(A.$slots, "year", {
            key: 0,
            year: A.year
          }) : W("", !0),
          A.$slots.year ? W("", !0) : (w(), H(ue, { key: 1 }, [
            et(Re(A.year), 1)
          ], 64))
        ], 40, Dl),
        v(t)(v(c), A.instance) ? (w(), ce(Ct, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (F = v(b)) == null ? void 0 : F.nextYear,
          disabled: A.isDisabled(!0),
          onActivate: G[3] || (G[3] = (p) => K(!0))
        }, {
          default: ie(() => [
            A.$slots["arrow-right"] ? ae(A.$slots, "arrow-right", { key: 0 }) : W("", !0),
            A.$slots["arrow-right"] ? W("", !0) : (w(), ce(v(Fn), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : W("", !0),
        Ue($t, {
          name: v(g)(A.showYearPicker),
          css: v(P)
        }, {
          default: ie(() => [
            A.showYearPicker ? (w(), ce(jt, {
              key: 0,
              items: A.items,
              "text-input": A.textInput,
              "esc-close": A.escClose,
              config: A.config,
              onToggle: C,
              onSelected: G[4] || (G[4] = (p) => O(p)),
              "is-last": A.autoApply && !v(l).keepActionRow,
              type: "year"
            }, Be({
              "button-icon": ie(() => [
                A.$slots["calendar-icon"] ? ae(A.$slots, "calendar-icon", { key: 0 }) : W("", !0),
                A.$slots["calendar-icon"] ? W("", !0) : (w(), ce(v(Bt), { key: 1 }))
              ]),
              _: 2
            }, [
              A.$slots["year-overlay-value"] ? {
                name: "item",
                fn: ie(({ item: p }) => [
                  ae(A.$slots, "year-overlay-value", {
                    text: p.text,
                    value: p.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last"])) : W("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), en = (e, n, a) => {
  if (n.value && Array.isArray(n.value))
    if (n.value.some((t) => ge(e, t))) {
      const t = n.value.filter((r) => !ge(r, e));
      n.value = t.length ? t : null;
    } else
      (a && +a > n.value.length || !a) && n.value.push(e);
  else
    n.value = [e];
}, Kn = (e, n, a) => {
  let t = e.value ? e.value.slice() : [];
  return t.length === 2 && t[1] !== null && (t = []), t.length ? _e(n, t[0]) ? (t.unshift(n), a("range-start", t[0]), a("range-start", t[1])) : (t[1] = n, a("range-end", n)) : (t = [n], a("range-start", n)), e.value = t, t;
}, tn = (e, n, a, t) => {
  e[0] && e[1] && a && n("auto-apply"), e[0] && !e[1] && t && a && n("auto-apply");
}, Fa = ({ multiCalendars: e, calendars: n, modelValue: a, props: t, year: r, month: l, emit: c }) => {
  const b = q(() => Wn(t.yearRange, t.reverseYears)), h = J([!1]), P = q(() => (p, T) => {
    const Z = we(Ke(/* @__PURE__ */ new Date()), {
      month: l.value(p),
      year: r.value(p)
    });
    return Na(Z, t.maxDate, t.minDate, t.preventMinMaxNavigation, T);
  }), g = () => {
    for (let p = 0; p < e.value.count; p++)
      if (p === 0)
        n.value[p] = n.value[0];
      else {
        const T = we(V(), n.value[p - 1]);
        n.value[p] = { month: ve(T), year: me(ka(T, 1)) };
      }
  }, C = (p) => {
    if (!p)
      return g();
    const T = we(V(), n.value[p]);
    return n.value[0].year = me(wa(T, e.value.count - 1)), g();
  }, O = (p) => t.focusStartDate ? p[0] : p[1] ? p[1] : p[0], K = () => {
    if (a.value) {
      const p = Array.isArray(a.value) ? O(a.value) : a.value;
      n.value[0] = { month: ve(p), year: me(p) };
    }
  };
  ze(() => {
    K(), e.value.count && g();
  });
  const A = (p, T) => {
    n.value[T].year = p, e.value.count && !e.value.solo && C(T);
  }, G = q(() => (p) => Dt(b.value, (T) => {
    const Z = r.value(p) === T.value, I = Nt(T.value, Mt(t.minDate), Mt(t.maxDate));
    return { active: Z, disabled: I };
  })), X = (p, T) => {
    A(p, T), F(T);
  }, y = (p, T = !1) => {
    if (!P.value(p, T)) {
      const Z = T ? r.value(p) + 1 : r.value(p) - 1;
      A(Z, p);
    }
  }, F = (p, T = !1, Z) => {
    T || c("reset-flow"), Z !== void 0 ? h.value[p] = Z : h.value[p] = !h.value[p], h.value || c("overlay-closed");
  };
  return {
    isDisabled: P,
    groupedYears: G,
    showYearPicker: h,
    selectYear: A,
    toggleYearPicker: F,
    handleYearSelect: X,
    handleYear: y
  };
}, Ml = (e, n) => {
  const { defaultedMultiCalendars: a, defaultedAriaLabels: t, defaultedTransitions: r, defaultedConfig: l } = Te(e), { modelValue: c, year: b, month: h, calendars: P } = Ft(e, n), g = q(() => Sa(e.formatLocale, e.locale, e.monthNameFormat)), C = J(null), {
    selectYear: O,
    groupedYears: K,
    showYearPicker: A,
    toggleYearPicker: G,
    handleYearSelect: X,
    handleYear: y,
    isDisabled: F
  } = Fa({
    modelValue: c,
    multiCalendars: a,
    calendars: P,
    year: b,
    month: h,
    props: e,
    emit: n
  }), p = (S) => S ? { month: ve(S), year: me(S) } : { month: null, year: null }, T = () => c.value ? Array.isArray(c.value) ? c.value.map((S) => p(S)) : p(c.value) : p(), Z = (S, s) => {
    const o = P.value[S], M = T();
    return Array.isArray(M) ? M.some((Q) => Q.year === (o == null ? void 0 : o.year) && Q.month === s) : (o == null ? void 0 : o.year) === M.year && s === M.month;
  }, I = (S, s, o) => {
    var Q, i;
    const M = T();
    return Array.isArray(M) ? b.value(s) === ((Q = M[o]) == null ? void 0 : Q.year) && S === ((i = M[o]) == null ? void 0 : i.month) : !1;
  }, ee = (S, s) => {
    if (e.range) {
      const o = T();
      if (Array.isArray(c.value) && Array.isArray(o)) {
        const M = I(S, s, 0) || I(S, s, 1), Q = xe(Ke(V()), S, b.value(s));
        return Qt(c.value, C.value, Q) && !M;
      }
      return !1;
    }
    return !1;
  }, re = q(() => (S) => Dt(g.value, (s) => {
    const o = Z(S, s.value), M = Nt(
      s.value,
      _a(b.value(S), e.minDate),
      Ca(b.value(S), e.maxDate)
    ) || Wr(e.disabledDates, b.value(S)).includes(s.value), Q = ee(s.value, S);
    return { active: o, disabled: M, isBetween: Q };
  })), R = (S, s) => xe(Ke(V()), S, b.value(s)), m = (S, s) => {
    const o = c.value ? c.value : Ke(/* @__PURE__ */ new Date());
    c.value = xe(o, S, b.value(s)), n("auto-apply");
  }, k = (S, s) => {
    const o = Kn(c, R(S, s), n);
    tn(o, n, e.autoApply, e.modelAuto);
  }, L = (S, s) => {
    en(R(S, s), c, e.multiDatesLimit), n("auto-apply", !0);
  }, te = (S, s) => (P.value[s].month = S, j(s, P.value[s].year, S), e.multiDates ? L(S, s) : e.range ? k(S, s) : m(S, s)), f = (S, s) => {
    O(S, s), j(s, S, null);
  }, j = (S, s, o) => {
    let M = o;
    if (!M) {
      const Q = T();
      M = Array.isArray(Q) ? Q[S].month : Q.month;
    }
    n("update-month-year", { instance: S, year: s, month: M });
  };
  return {
    groupedMonths: re,
    groupedYears: K,
    year: b,
    isDisabled: F,
    defaultedMultiCalendars: a,
    defaultedAriaLabels: t,
    defaultedTransitions: r,
    defaultedConfig: l,
    showYearPicker: A,
    modelValue: c,
    setHoverDate: (S, s) => {
      C.value = R(S, s);
    },
    selectMonth: te,
    selectYear: f,
    toggleYearPicker: G,
    handleYearSelect: X,
    handleYear: y,
    getModelMonthYear: T
  };
}, $l = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: Object.assign(qe, {}),
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = pt(), l = Fe(r, "yearMode"), {
      groupedMonths: c,
      groupedYears: b,
      year: h,
      isDisabled: P,
      defaultedMultiCalendars: g,
      defaultedConfig: C,
      showYearPicker: O,
      modelValue: K,
      setHoverDate: A,
      selectMonth: G,
      selectYear: X,
      toggleYearPicker: y,
      handleYearSelect: F,
      handleYear: p,
      getModelMonthYear: T
    } = Ml(t, a);
    return n({ getSidebarProps: () => ({
      modelValue: K,
      year: h,
      getModelMonthYear: T,
      selectMonth: G,
      selectYear: X,
      handleYear: p
    }) }), (I, ee) => (w(), ce(xt, {
      "multi-calendars": v(g).count,
      stretch: ""
    }, {
      default: ie(({ instance: re }) => [
        I.$slots["month-year"] ? ae(I.$slots, "month-year", Se(Ce({ key: 0 }, {
          year: v(h),
          months: v(c)(re),
          years: v(b)(re),
          selectMonth: v(G),
          selectYear: v(X),
          instance: re
        }))) : (w(), ce(jt, {
          key: 1,
          items: v(c)(re),
          "arrow-navigation": I.arrowNavigation,
          "is-last": I.autoApply && !v(C).keepActionRow,
          "esc-close": I.escClose,
          height: v(C).modeHeight,
          config: I.config,
          "no-overlay-focus": I.noOverlayFocus,
          onSelected: (R) => v(G)(R, re),
          onHoverValue: (R) => v(A)(R, re),
          "use-relative": "",
          type: "month"
        }, {
          header: ie(() => [
            Ue(Ea, Ce(I.$props, {
              items: v(b)(re),
              instance: re,
              "show-year-picker": v(O)[re],
              year: v(h)(re),
              "is-disabled": (R) => v(P)(re, R),
              onHandleYear: (R) => v(p)(re, R),
              onYearSelect: (R) => v(F)(R, re),
              onToggleYearPicker: (R) => v(y)(re, R == null ? void 0 : R.flow, R == null ? void 0 : R.show)
            }), Be({ _: 2 }, [
              De(v(l), (R, m) => ({
                name: R,
                fn: ie((k) => [
                  ae(I.$slots, R, Se(Ee(k)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars"]));
  }
}), Tl = (e, n) => {
  const { modelValue: a } = Ft(e, n), t = J(null), r = (g) => Array.isArray(a.value) ? a.value.some((C) => me(C) === g) : a.value ? me(a.value) === g : !1, l = (g) => e.range && Array.isArray(a.value) ? Qt(a.value, t.value, b(g)) : !1, c = q(() => Dt(Wn(e.yearRange, e.reverseYears), (g) => {
    const C = r(g.value), O = Nt(g.value, Mt(e.minDate), Mt(e.maxDate)), K = l(g.value);
    return { active: C, disabled: O, isBetween: K };
  })), b = (g) => ft(Ke(/* @__PURE__ */ new Date()), g);
  return {
    groupedYears: c,
    modelValue: a,
    setHoverValue: (g) => {
      t.value = ft(Ke(/* @__PURE__ */ new Date()), g);
    },
    selectYear: (g) => {
      if (e.multiDates)
        return en(b(g), a, e.multiDatesLimit), n("auto-apply", !0);
      if (e.range) {
        const C = Kn(a, b(g), n);
        return tn(C, n, e.autoApply, e.modelAuto);
      }
      a.value = b(g), n("auto-apply");
    }
  };
}, Al = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: Object.assign(qe, {}),
  emits: ["update:internal-model-value", "reset-flow", "range-start", "range-end", "auto-apply"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { groupedYears: r, modelValue: l, selectYear: c, setHoverValue: b } = Tl(t, a), { defaultedConfig: h } = Te(t);
    return n({ getSidebarProps: () => ({
      modelValue: l,
      selectYear: c
    }) }), (g, C) => (w(), H("div", null, [
      g.$slots["month-year"] ? ae(g.$slots, "month-year", Se(Ce({ key: 0 }, {
        years: v(r),
        selectYear: v(c)
      }))) : (w(), ce(jt, {
        key: 1,
        items: v(r),
        "is-last": g.autoApply && !v(h).keepActionRow,
        height: v(h).modeHeight,
        config: g.config,
        "no-overlay-focus": g.noOverlayFocus,
        type: "year",
        "use-relative": "",
        onSelected: v(c),
        onHoverValue: v(b)
      }, Be({ _: 2 }, [
        g.$slots["year-overlay-value"] ? {
          name: "item",
          fn: ie(({ item: O }) => [
            ae(g.$slots, "year-overlay-value", {
              text: O.text,
              value: O.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
    ]));
  }
}), Sl = {
  key: 0,
  class: "dp__time_input"
}, Pl = ["aria-label", "onKeydown", "onClick"], _l = /* @__PURE__ */ oe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), Cl = /* @__PURE__ */ oe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), Ol = ["aria-label", "disabled", "onKeydown", "onClick"], Rl = ["aria-label", "onKeydown", "onClick"], Yl = /* @__PURE__ */ oe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), Nl = /* @__PURE__ */ oe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), Il = { key: 0 }, Bl = ["aria-label", "onKeydown"], El = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: Object.assign(qe, {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 }
  }),
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setTimePickerElements: r, setTimePickerBackRef: l } = it(), { defaultedAriaLabels: c, defaultedTransitions: b, defaultedFilters: h, defaultedConfig: P } = Te(t), { transitionName: g, showTransition: C } = Et(b), O = It({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), K = J("AM"), A = J(null), G = J([]);
    ze(() => {
      a("mounted");
    });
    const X = (d) => we(/* @__PURE__ */ new Date(), {
      hours: d.hours,
      minutes: d.minutes,
      seconds: t.enableSeconds ? d.seconds : 0,
      milliseconds: 0
    }), y = q(
      () => (d) => te(d, t[d]) || p(d, t[d])
    ), F = q(() => ({ hours: t.hours, minutes: t.minutes, seconds: t.seconds })), p = (d, E) => t.range && !t.disableTimeRangeValidation ? !t.validateTime(d, E) : !1, T = (d, E) => {
      if (t.range && !t.disableTimeRangeValidation) {
        const z = E ? +t[`${d}Increment`] : -+t[`${d}Increment`], _ = t[d] + z;
        return !t.validateTime(d, _);
      }
      return !1;
    }, Z = q(() => (d) => !j(+t[d] + +t[`${d}Increment`], d) || T(d, !0)), I = q(() => (d) => !j(+t[d] - +t[`${d}Increment`], d) || T(d, !1)), ee = (d, E) => Da(we(V(), d), E), re = (d, E) => er(we(V(), d), E), R = q(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !t.timePickerInline,
        dp__time_col_reg_block: !t.enableSeconds && t.is24 && !t.timePickerInline,
        dp__time_col_reg_inline: !t.enableSeconds && t.is24 && t.timePickerInline,
        dp__time_col_reg_with_button: !t.enableSeconds && !t.is24,
        dp__time_col_sec: t.enableSeconds && t.is24,
        dp__time_col_sec_with_button: t.enableSeconds && !t.is24
      })
    ), m = q(() => {
      const d = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return t.enableSeconds ? d.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : d;
    }), k = q(() => m.value.filter((d) => !d.separator)), L = q(() => (d) => {
      if (d === "hours") {
        const E = M(+t.hours);
        return { text: E < 10 ? `0${E}` : `${E}`, value: E };
      }
      return { text: t[d] < 10 ? `0${t[d]}` : `${t[d]}`, value: t[d] };
    }), te = (d, E) => {
      var _;
      if (!t.disabledTimesConfig)
        return !1;
      const z = t.disabledTimesConfig(t.order, d === "hours" ? E : void 0);
      return z[d] ? !!((_ = z[d]) != null && _.includes(E)) : !0;
    }, f = (d) => {
      const E = t.is24 ? 24 : 12, z = d === "hours" ? E : 60, _ = +t[`${d}GridIncrement`], x = d === "hours" && !t.is24 ? _ : 0, de = [];
      for (let fe = x; fe < z; fe += _)
        de.push({ value: fe, text: fe < 10 ? `0${fe}` : `${fe}` });
      return d === "hours" && !t.is24 && de.push({ value: 0, text: "12" }), Dt(de, (fe) => ({ active: !1, disabled: h.value.times[d].includes(fe.value) || !j(fe.value, d) || te(d, fe.value) || p(d, fe.value) }));
    }, j = (d, E) => {
      const z = t.minTime ? X(pn(t.minTime)) : null, _ = t.maxTime ? X(pn(t.maxTime)) : null, x = X(pn(F.value, E, d));
      return z && _ ? (Ot(x, _) || kt(x, _)) && (Rt(x, z) || kt(x, z)) : z ? Rt(x, z) || kt(x, z) : _ ? Ot(x, _) || kt(x, _) : !0;
    }, D = (d) => t[`no${d[0].toUpperCase() + d.slice(1)}Overlay`], S = (d) => {
      D(d) || (O[d] = !O[d], O[d] || a("overlay-closed"));
    }, s = (d) => d === "hours" ? Ze : d === "minutes" ? Je : wt, o = (d, E = !0) => {
      const z = E ? ee : re, _ = E ? +t[`${d}Increment`] : -+t[`${d}Increment`];
      j(+t[d] + _, d) && a(
        `update:${d}`,
        s(d)(z({ [d]: +t[d] }, { [d]: +t[`${d}Increment`] }))
      );
    }, M = (d) => t.is24 ? d : (d >= 12 ? K.value = "PM" : K.value = "AM", Ir(d)), Q = () => {
      K.value === "PM" ? (K.value = "AM", a("update:hours", t.hours - 12)) : (K.value = "PM", a("update:hours", t.hours + 12)), a("am-pm-change", K.value);
    }, i = (d) => {
      O[d] = !0;
    }, N = (d, E, z) => {
      if (d && t.arrowNavigation) {
        Array.isArray(G.value[E]) ? G.value[E][z] = d : G.value[E] = [d];
        const _ = G.value.reduce(
          (x, de) => de.map((fe, Y) => [...x[Y] || [], de[Y]]),
          []
        );
        l(t.closeTimePickerBtn), A.value && (_[1] = _[1].concat(A.value)), r(_, t.order);
      }
    }, pe = (d, E) => (S(d), d === "hours" && !t.is24 ? a(`update:${d}`, K.value === "PM" ? E + 12 : E) : a(`update:${d}`, E));
    return n({ openChildCmp: i }), (d, E) => {
      var z;
      return d.disabled ? W("", !0) : (w(), H("div", Sl, [
        (w(!0), H(ue, null, De(m.value, (_, x) => {
          var de, fe, Y;
          return w(), H("div", {
            key: x,
            class: ye(R.value)
          }, [
            _.separator ? (w(), H(ue, { key: 0 }, [
              et(" : ")
            ], 64)) : (w(), H(ue, { key: 1 }, [
              oe("button", {
                type: "button",
                class: ye({
                  dp__btn: !0,
                  dp__inc_dec_button: !d.timePickerInline,
                  dp__inc_dec_button_inline: d.timePickerInline,
                  dp__tp_inline_btn_top: d.timePickerInline,
                  dp__inc_dec_button_disabled: Z.value(_.type)
                }),
                "aria-label": (de = v(c)) == null ? void 0 : de.incrementValue(_.type),
                tabindex: "0",
                onKeydown: [
                  le(he((B) => o(_.type), ["prevent"]), ["enter"]),
                  le(he((B) => o(_.type), ["prevent"]), ["space"])
                ],
                onClick: (B) => o(_.type),
                ref_for: !0,
                ref: (B) => N(B, x, 0)
              }, [
                t.timePickerInline ? (w(), H(ue, { key: 1 }, [
                  _l,
                  Cl
                ], 64)) : (w(), H(ue, { key: 0 }, [
                  d.$slots["arrow-up"] ? ae(d.$slots, "arrow-up", { key: 0 }) : W("", !0),
                  d.$slots["arrow-up"] ? W("", !0) : (w(), ce(v(Vn), { key: 1 }))
                ], 64))
              ], 42, Pl),
              oe("button", {
                type: "button",
                "aria-label": (fe = v(c)) == null ? void 0 : fe.openTpOverlay(_.type),
                class: ye({
                  dp__time_display: !0,
                  dp__time_display_block: !d.timePickerInline,
                  dp__time_display_inline: d.timePickerInline,
                  "dp--time-invalid": y.value(_.type),
                  "dp--time-overlay-btn": !y.value(_.type)
                }),
                disabled: D(_.type),
                tabindex: "0",
                onKeydown: [
                  le(he((B) => S(_.type), ["prevent"]), ["enter"]),
                  le(he((B) => S(_.type), ["prevent"]), ["space"])
                ],
                onClick: (B) => S(_.type),
                ref_for: !0,
                ref: (B) => N(B, x, 1)
              }, [
                d.$slots[_.type] ? ae(d.$slots, _.type, {
                  key: 0,
                  text: L.value(_.type).text,
                  value: L.value(_.type).value
                }) : W("", !0),
                d.$slots[_.type] ? W("", !0) : (w(), H(ue, { key: 1 }, [
                  et(Re(L.value(_.type).text), 1)
                ], 64))
              ], 42, Ol),
              oe("button", {
                type: "button",
                class: ye({
                  dp__btn: !0,
                  dp__inc_dec_button: !d.timePickerInline,
                  dp__inc_dec_button_inline: d.timePickerInline,
                  dp__tp_inline_btn_bottom: d.timePickerInline,
                  dp__inc_dec_button_disabled: I.value(_.type)
                }),
                "aria-label": (Y = v(c)) == null ? void 0 : Y.decrementValue(_.type),
                tabindex: "0",
                onKeydown: [
                  le(he((B) => o(_.type, !1), ["prevent"]), ["enter"]),
                  le(he((B) => o(_.type, !1), ["prevent"]), ["space"])
                ],
                onClick: (B) => o(_.type, !1),
                ref_for: !0,
                ref: (B) => N(B, x, 2)
              }, [
                t.timePickerInline ? (w(), H(ue, { key: 1 }, [
                  Yl,
                  Nl
                ], 64)) : (w(), H(ue, { key: 0 }, [
                  d.$slots["arrow-down"] ? ae(d.$slots, "arrow-down", { key: 0 }) : W("", !0),
                  d.$slots["arrow-down"] ? W("", !0) : (w(), ce(v(Hn), { key: 1 }))
                ], 64))
              ], 42, Rl)
            ], 64))
          ], 2);
        }), 128)),
        d.is24 ? W("", !0) : (w(), H("div", Il, [
          d.$slots["am-pm-button"] ? ae(d.$slots, "am-pm-button", {
            key: 0,
            toggle: Q,
            value: K.value
          }) : W("", !0),
          d.$slots["am-pm-button"] ? W("", !0) : (w(), H("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: A,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (z = v(c)) == null ? void 0 : z.amPmButton,
            tabindex: "0",
            onClick: Q,
            onKeydown: [
              le(he(Q, ["prevent"]), ["enter"]),
              le(he(Q, ["prevent"]), ["space"])
            ]
          }, Re(K.value), 41, Bl))
        ])),
        (w(!0), H(ue, null, De(k.value, (_, x) => (w(), ce($t, {
          key: x,
          name: v(g)(O[_.type]),
          css: v(C)
        }, {
          default: ie(() => [
            O[_.type] ? (w(), ce(jt, {
              key: 0,
              items: f(_.type),
              "is-last": d.autoApply && !v(P).keepActionRow,
              "esc-close": d.escClose,
              type: _.type,
              "text-input": d.textInput,
              config: d.config,
              "arrow-navigation": d.arrowNavigation,
              onSelected: (de) => pe(_.type, de),
              onToggle: (de) => S(_.type),
              onResetFlow: E[0] || (E[0] = (de) => d.$emit("reset-flow"))
            }, Be({
              "button-icon": ie(() => [
                d.$slots["clock-icon"] ? ae(d.$slots, "clock-icon", { key: 0 }) : W("", !0),
                d.$slots["clock-icon"] ? W("", !0) : (w(), ce(v(jn), { key: 1 }))
              ]),
              _: 2
            }, [
              d.$slots[`${_.type}-overlay-value`] ? {
                name: "item",
                fn: ie(({ item: de }) => [
                  ae(d.$slots, `${_.type}-overlay-value`, {
                    text: de.text,
                    value: de.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "onSelected", "onToggle"])) : W("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Fl = { class: "dp--tp-wrap" }, jl = ["aria-label", "tabindex"], Vl = ["tabindex"], Hl = ["aria-label"], ja = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: Object.assign(qe, {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    }
  }),
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMatrix: r, setTimePicker: l } = it(), c = pt(), { defaultedTransitions: b, defaultedAriaLabels: h, defaultedTextInput: P, defaultedConfig: g } = Te(t), { transitionName: C, showTransition: O } = Et(b), { hideNavigationButtons: K } = Xt(), A = J(null), G = J(null), X = J([]), y = J(null);
    ze(() => {
      a("mount"), !t.timePicker && t.arrowNavigation ? r([Ae(A.value)], "time") : l(!0, t.timePicker);
    });
    const F = q(() => t.range && t.modelAuto ? Pa(t.internalModelValue) : !0), p = J(!1), T = (f) => ({
      hours: Array.isArray(t.hours) ? t.hours[f] : t.hours,
      minutes: Array.isArray(t.minutes) ? t.minutes[f] : t.minutes,
      seconds: Array.isArray(t.seconds) ? t.seconds[f] : t.seconds
    }), Z = q(() => {
      const f = [];
      if (t.range)
        for (let j = 0; j < 2; j++)
          f.push(T(j));
      else
        f.push(T(0));
      return f;
    }), I = (f, j = !1, D = "") => {
      j || a("reset-flow"), p.value = f, a(f ? "overlay-opened" : "overlay-closed"), t.arrowNavigation && l(f), st(() => {
        D !== "" && X.value[0] && X.value[0].openChildCmp(D);
      });
    }, ee = q(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: t.autoApply && !g.value.keepActionRow
    })), re = Fe(c, "timePicker"), R = (f, j, D) => t.range ? j === 0 ? [f, Z.value[1][D]] : [Z.value[0][D], f] : f, m = (f) => {
      a("update:hours", f);
    }, k = (f) => {
      a("update:minutes", f);
    }, L = (f) => {
      a("update:seconds", f);
    }, te = () => {
      if (y.value && !P.value.enabled && !t.noOverlayFocus) {
        const f = Er(y.value);
        f && f.focus({ preventScroll: !0 });
      }
    };
    return n({ toggleTimePicker: I }), (f, j) => {
      var D;
      return w(), H("div", Fl, [
        !f.timePicker && !f.timePickerInline ? zt((w(), H("button", {
          key: 0,
          type: "button",
          class: ye(ee.value),
          "aria-label": (D = v(h)) == null ? void 0 : D.openTimePicker,
          tabindex: f.noOverlayFocus ? void 0 : 0,
          ref_key: "openTimePickerBtn",
          ref: A,
          onKeydown: [
            j[0] || (j[0] = le((S) => I(!0), ["enter"])),
            j[1] || (j[1] = le((S) => I(!0), ["space"]))
          ],
          onClick: j[2] || (j[2] = (S) => I(!0))
        }, [
          f.$slots["clock-icon"] ? ae(f.$slots, "clock-icon", { key: 0 }) : W("", !0),
          f.$slots["clock-icon"] ? W("", !0) : (w(), ce(v(jn), { key: 1 }))
        ], 42, jl)), [
          [Wt, !v(K)(f.hideNavigation, "time")]
        ]) : W("", !0),
        Ue($t, {
          name: v(C)(p.value),
          css: v(O) && !f.timePickerInline
        }, {
          default: ie(() => {
            var S;
            return [
              p.value || f.timePicker || f.timePickerInline ? (w(), H("div", {
                key: 0,
                class: ye({
                  dp__overlay: !f.timePickerInline,
                  "dp--overlay-absolute": !t.timePicker && !f.timePickerInline,
                  "dp--overlay-relative": t.timePicker
                }),
                style: Ge(f.timePicker ? { height: `${v(g).modeHeight}px` } : void 0),
                ref_key: "overlayRef",
                ref: y,
                tabindex: f.timePickerInline ? void 0 : 0
              }, [
                oe("div", {
                  class: ye(
                    f.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  f.$slots["time-picker-overlay"] ? ae(f.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: f.hours,
                    minutes: f.minutes,
                    seconds: f.seconds,
                    setHours: m,
                    setMinutes: k,
                    setSeconds: L
                  }) : W("", !0),
                  f.$slots["time-picker-overlay"] ? W("", !0) : (w(), H("div", {
                    key: 1,
                    class: ye(f.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (w(!0), H(ue, null, De(Z.value, (s, o) => zt((w(), ce(El, Ce({ key: o }, Object.assign(f.$props, {
                      order: o,
                      hours: s.hours,
                      minutes: s.minutes,
                      seconds: s.seconds,
                      closeTimePickerBtn: G.value,
                      disabledTimesConfig: f.disabledTimesConfig,
                      disabled: o === 0 ? f.fixedStart : f.fixedEnd
                    }), {
                      "validate-time": (M, Q) => f.validateTime(M, R(Q, o, M)),
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: X,
                      "onUpdate:hours": (M) => m(R(M, o, "hours")),
                      "onUpdate:minutes": (M) => k(R(M, o, "minutes")),
                      "onUpdate:seconds": (M) => L(R(M, o, "seconds")),
                      onMounted: te,
                      onOverlayClosed: te,
                      onAmPmChange: j[3] || (j[3] = (M) => f.$emit("am-pm-change", M))
                    }), Be({ _: 2 }, [
                      De(v(re), (M, Q) => ({
                        name: M,
                        fn: ie((i) => [
                          ae(f.$slots, M, Se(Ee(i)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Wt, o === 0 ? !0 : F.value]
                    ])), 128))
                  ], 2)),
                  !f.timePicker && !f.timePickerInline ? zt((w(), H("button", {
                    key: 2,
                    type: "button",
                    ref_key: "closeTimePickerBtn",
                    ref: G,
                    class: ye(ee.value),
                    "aria-label": (S = v(h)) == null ? void 0 : S.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      j[4] || (j[4] = le((s) => I(!1), ["enter"])),
                      j[5] || (j[5] = le((s) => I(!1), ["space"]))
                    ],
                    onClick: j[6] || (j[6] = (s) => I(!1))
                  }, [
                    f.$slots["calendar-icon"] ? ae(f.$slots, "calendar-icon", { key: 0 }) : W("", !0),
                    f.$slots["calendar-icon"] ? W("", !0) : (w(), ce(v(Bt), { key: 1 }))
                  ], 42, Hl)), [
                    [Wt, !v(K)(f.hideNavigation, "time")]
                  ]) : W("", !0)
                ], 2)
              ], 14, Vl)) : W("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Va = (e, n, a, t) => {
  const r = (y, F) => Array.isArray(n[y]) ? n[y][F] : n[y], l = (y) => e.enableSeconds ? Array.isArray(n.seconds) ? n.seconds[y] : n.seconds : 0, c = (y, F) => y ? F !== void 0 ? ot(y, r("hours", F), r("minutes", F), l(F)) : ot(y, n.hours, n.minutes, l()) : In(V(), l(F)), b = (y, F) => {
    n[y] = F;
  }, h = (y, F) => {
    const p = Object.fromEntries(
      Object.keys(n).map((T) => T === y ? [T, F] : [T, n[T]].slice())
    );
    if (e.range && !e.disableTimeRangeValidation) {
      const T = (I) => a.value ? ot(
        a.value[I],
        p.hours[I],
        p.minutes[I],
        p.seconds[I]
      ) : null, Z = (I) => Bn(a.value[I], 0);
      return !(ge(T(0), T(1)) && (Rt(T(0), Z(1)) || Ot(T(1), Z(0))));
    }
    return !0;
  }, P = (y, F) => {
    h(y, F) && (b(y, F), t && t());
  }, g = (y) => {
    P("hours", y);
  }, C = (y) => {
    P("minutes", y);
  }, O = (y) => {
    P("seconds", y);
  }, K = (y, F, p, T) => {
    F && g(y), !F && !p && C(y), p && O(y), a.value && T(a.value);
  }, A = (y) => {
    if (y) {
      const F = Array.isArray(y), p = F ? [+y[0].hours, +y[1].hours] : +y.hours, T = F ? [+y[0].minutes, +y[1].minutes] : +y.minutes, Z = F ? [+y[0].seconds, +y[1].seconds] : +y.seconds;
      b("hours", p), b("minutes", T), e.enableSeconds && b("seconds", Z);
    }
  }, G = (y, F) => {
    const p = {
      hours: Array.isArray(n.hours) ? n.hours[y] : n.hours,
      disabledArr: []
    };
    return (F || F === 0) && (p.hours = F), Array.isArray(e.disabledTimes) && (p.disabledArr = e.range && Array.isArray(e.disabledTimes[y]) ? e.disabledTimes[y] : e.disabledTimes), p;
  }, X = q(() => (y, F) => {
    var p;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: T, hours: Z } = G(y, F), I = T.filter((R) => +R.hours === Z);
      if (((p = I[0]) == null ? void 0 : p.minutes) === "*")
        return { hours: [Z], minutes: void 0, seconds: void 0 };
      const ee = I == null ? void 0 : I.map((R) => +R.minutes), re = I == null ? void 0 : I.map((R) => R.seconds ? +R.seconds : void 0);
      return {
        hours: [],
        minutes: ee || [],
        seconds: re || []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: b,
    updateHours: g,
    updateMinutes: C,
    updateSeconds: O,
    getSetDateTime: c,
    updateTimeValues: K,
    getSecondsValue: l,
    assignStartTime: A,
    validateTime: h,
    disabledTimesConfig: X
  };
}, Ul = (e, n) => {
  const { modelValue: a, time: t } = Ft(e, n), { defaultedStartTime: r } = Te(e), { updateTimeValues: l, getSetDateTime: c, setTime: b, assignStartTime: h, disabledTimesConfig: P, validateTime: g } = Va(e, t, a), C = (p) => {
    const { hours: T, minutes: Z, seconds: I } = p;
    return { hours: +T, minutes: +Z, seconds: I ? +I : 0 };
  }, O = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const T = C(e.startTime[0]), Z = C(e.startTime[1]);
        return [we(V(), T), we(V(), Z)];
      }
      const p = C(e.startTime);
      return we(V(), p);
    }
    return e.range ? [null, null] : null;
  }, K = () => {
    if (e.range) {
      const [p, T] = O();
      a.value = [c(p, 0), c(T, 1)];
    } else
      a.value = c(O());
  }, A = (p) => Array.isArray(p) ? [mt(V(p[0])), mt(V(p[1]))] : [mt(p || V())], G = (p, T, Z) => {
    b("hours", p), b("minutes", T), b("seconds", e.enableSeconds ? Z : 0);
  }, X = () => {
    const [p, T] = A(a.value);
    return e.range ? G(
      [p.hours, T.hours],
      [p.minutes, T.minutes],
      [p.seconds, T.minutes]
    ) : G(p.hours, p.minutes, p.seconds);
  };
  ze(() => {
    if (!e.shadow)
      return h(r.value), a.value ? X() : K();
  });
  const y = () => {
    Array.isArray(a.value) ? a.value = a.value.map((p, T) => p && c(p, T)) : a.value = c(a.value), n("time-update");
  };
  return {
    modelValue: a,
    time: t,
    disabledTimesConfig: P,
    updateTime: (p, T = !0, Z = !1) => {
      l(p, T, Z, y);
    },
    validateTime: g
  };
}, Ll = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: Object.assign(qe, {}),
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = pt(), l = Fe(r, "timePicker"), { time: c, modelValue: b, disabledTimesConfig: h, updateTime: P, validateTime: g } = Ul(t, a);
    return n({ getSidebarProps: () => ({
      modelValue: b,
      time: c,
      updateTime: P
    }) }), (O, K) => (w(), ce(xt, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: ie(() => [
        Ue(ja, Ce(O.$props, {
          hours: v(c).hours,
          minutes: v(c).minutes,
          seconds: v(c).seconds,
          "internal-model-value": O.internalModelValue,
          "disabled-times-config": v(h),
          "validate-time": v(g),
          "onUpdate:hours": K[0] || (K[0] = (A) => v(P)(A)),
          "onUpdate:minutes": K[1] || (K[1] = (A) => v(P)(A, !1)),
          "onUpdate:seconds": K[2] || (K[2] = (A) => v(P)(A, !1, !0)),
          onAmPmChange: K[3] || (K[3] = (A) => O.$emit("am-pm-change", A))
        }), Be({ _: 2 }, [
          De(v(l), (A, G) => ({
            name: A,
            fn: ie((X) => [
              ae(O.$slots, A, Se(Ee(X)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), zl = { class: "dp__month_year_row" }, Wl = ["aria-label", "onClick", "onKeydown"], Kl = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: Object.assign(qe, {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] }
  }),
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { defaultedTransitions: r, defaultedAriaLabels: l, defaultedMultiCalendars: c, defaultedFilters: b, defaultedConfig: h } = Te(t), { transitionName: P, showTransition: g } = Et(r), { buildMatrix: C } = it(), { handleMonthYearChange: O, isDisabled: K, updateMonthYear: A } = nl(t, a), { showLeftIcon: G, showRightIcon: X } = Xt(), y = J(!1), F = J(!1), p = J([null, null, null, null]);
    ze(() => {
      a("mount");
    });
    const T = (s) => ({
      get: () => t[s],
      set: (o) => {
        const M = s === We.month ? We.year : We.month;
        a("update-month-year", { [s]: o, [M]: t[M] }), s === We.month ? L(!0) : te(!0);
      }
    }), Z = q(T(We.month)), I = q(T(We.year)), ee = q(() => (s) => ({
      month: t.month,
      year: t.year,
      items: s === We.month ? t.months : t.years,
      instance: t.instance,
      updateMonthYear: A,
      toggle: s === We.month ? L : te
    })), re = q(() => {
      const s = t.months.find((o) => o.value === t.month);
      return s || { text: "", value: 0 };
    }), R = q(() => Dt(t.months, (s) => {
      const o = t.month === s.value, M = Nt(
        s.value,
        _a(t.year, t.minDate),
        Ca(t.year, t.maxDate)
      ) || b.value.months.includes(s.value);
      return { active: o, disabled: M };
    })), m = q(() => Dt(t.years, (s) => {
      const o = t.year === s.value, M = Nt(s.value, Mt(t.minDate), Mt(t.maxDate)) || b.value.years.includes(s.value);
      return { active: o, disabled: M };
    })), k = (s, o) => {
      o !== void 0 ? s.value = o : s.value = !s.value, s.value || a("overlay-closed");
    }, L = (s = !1, o) => {
      f(s), k(y, o);
    }, te = (s = !1, o) => {
      f(s), k(F, o);
    }, f = (s) => {
      s || a("reset-flow");
    }, j = (s, o) => {
      t.arrowNavigation && (p.value[o] = Ae(s), C(p.value, "monthYear"));
    }, D = q(() => {
      var s, o;
      return [
        {
          type: We.month,
          index: 1,
          toggle: L,
          modelValue: Z.value,
          updateModelValue: (M) => Z.value = M,
          text: re.value.text,
          showSelectionGrid: y.value,
          items: R.value,
          ariaLabel: (s = l.value) == null ? void 0 : s.openMonthsOverlay
        },
        {
          type: We.year,
          index: 2,
          toggle: te,
          modelValue: I.value,
          updateModelValue: (M) => I.value = M,
          text: t.year,
          showSelectionGrid: F.value,
          items: m.value,
          ariaLabel: (o = l.value) == null ? void 0 : o.openYearsOverlay
        }
      ];
    }), S = q(
      () => t.disableYearSelect ? [D.value[0]] : D.value
    );
    return n({
      toggleMonthPicker: L,
      toggleYearPicker: te,
      handleMonthYearChange: O
    }), (s, o) => {
      var M, Q, i;
      return w(), H("div", zl, [
        s.$slots["month-year"] ? ae(s.$slots, "month-year", Se(Ce({ key: 0 }, { month: s.month, year: s.year, months: s.months, years: s.years, updateMonthYear: v(A), handleMonthYearChange: v(O), instance: s.instance }))) : (w(), H(ue, { key: 1 }, [
          v(G)(v(c), s.instance) && !s.vertical ? (w(), ce(Ct, {
            key: 0,
            "aria-label": (M = v(l)) == null ? void 0 : M.prevMonth,
            disabled: v(K)(!1),
            onActivate: o[0] || (o[0] = (N) => v(O)(!1, !0)),
            onSetRef: o[1] || (o[1] = (N) => j(N, 0))
          }, {
            default: ie(() => [
              s.$slots["arrow-left"] ? ae(s.$slots, "arrow-left", { key: 0 }) : W("", !0),
              s.$slots["arrow-left"] ? W("", !0) : (w(), ce(v(En), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : W("", !0),
          oe("div", {
            class: ye(["dp__month_year_wrap", {
              dp__year_disable_select: s.disableYearSelect
            }])
          }, [
            (w(!0), H(ue, null, De(S.value, (N, pe) => (w(), H(ue, {
              key: N.type
            }, [
              oe("button", {
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": N.ariaLabel,
                ref_for: !0,
                ref: (d) => j(d, pe + 1),
                onClick: N.toggle,
                onKeydown: [
                  le(he(N.toggle, ["prevent"]), ["enter"]),
                  le(he(N.toggle, ["prevent"]), ["space"])
                ]
              }, [
                s.$slots[N.type] ? ae(s.$slots, N.type, {
                  key: 0,
                  text: N.text,
                  value: t[N.type]
                }) : W("", !0),
                s.$slots[N.type] ? W("", !0) : (w(), H(ue, { key: 1 }, [
                  et(Re(N.text), 1)
                ], 64))
              ], 40, Wl),
              Ue($t, {
                name: v(P)(N.showSelectionGrid),
                css: v(g)
              }, {
                default: ie(() => [
                  N.showSelectionGrid ? (w(), ce(jt, {
                    key: 0,
                    items: N.items,
                    "arrow-navigation": s.arrowNavigation,
                    "hide-navigation": s.hideNavigation,
                    "is-last": s.autoApply && !v(h).keepActionRow,
                    "skip-button-ref": !1,
                    config: s.config,
                    type: N.type,
                    "header-refs": [],
                    "esc-close": s.escClose,
                    "text-input": s.textInput,
                    onSelected: N.updateModelValue,
                    onToggle: N.toggle
                  }, Be({
                    "button-icon": ie(() => [
                      s.$slots["calendar-icon"] ? ae(s.$slots, "calendar-icon", { key: 0 }) : W("", !0),
                      s.$slots["calendar-icon"] ? W("", !0) : (w(), ce(v(Bt), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    s.$slots[`${N.type}-overlay-value`] ? {
                      name: "item",
                      fn: ie(({ item: d }) => [
                        ae(s.$slots, `${N.type}-overlay-value`, {
                          text: d.text,
                          value: d.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    s.$slots[`${N.type}-overlay`] ? {
                      name: "overlay",
                      fn: ie(() => [
                        ae(s.$slots, `${N.type}-overlay`, Se(Ee(ee.value(N.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    s.$slots[`${N.type}-overlay-header`] ? {
                      name: "header",
                      fn: ie(() => [
                        ae(s.$slots, `${N.type}-overlay-header`, {
                          toggle: N.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "text-input", "onSelected", "onToggle"])) : W("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          v(G)(v(c), s.instance) && s.vertical ? (w(), ce(Ct, {
            key: 1,
            "aria-label": (Q = v(l)) == null ? void 0 : Q.prevMonth,
            disabled: v(K)(!1),
            onActivate: o[2] || (o[2] = (N) => v(O)(!1, !0))
          }, {
            default: ie(() => [
              s.$slots["arrow-up"] ? ae(s.$slots, "arrow-up", { key: 0 }) : W("", !0),
              s.$slots["arrow-up"] ? W("", !0) : (w(), ce(v(Vn), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : W("", !0),
          v(X)(v(c), s.instance) ? (w(), ce(Ct, {
            key: 2,
            ref: "rightIcon",
            disabled: v(K)(!0),
            "aria-label": (i = v(l)) == null ? void 0 : i.nextMonth,
            onActivate: o[3] || (o[3] = (N) => v(O)(!0, !0)),
            onSetRef: o[4] || (o[4] = (N) => j(N, s.disableYearSelect ? 2 : 3))
          }, {
            default: ie(() => [
              s.$slots[s.vertical ? "arrow-down" : "arrow-right"] ? ae(s.$slots, s.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : W("", !0),
              s.$slots[s.vertical ? "arrow-down" : "arrow-right"] ? W("", !0) : (w(), ce(Nn(s.vertical ? v(Hn) : v(Fn)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : W("", !0)
        ], 64))
      ]);
    };
  }
}), Gl = ["aria-label"], Zl = {
  class: "dp__calendar_header",
  role: "row"
}, ql = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Ql = /* @__PURE__ */ oe("div", { class: "dp__calendar_header_separator" }, null, -1), Xl = ["aria-label"], Jl = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, xl = { class: "dp__cell_inner" }, eo = ["aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], to = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: Object.assign(qe, {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 }
  }),
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMultiLevelMatrix: r } = it(), { defaultedTransitions: l, defaultedConfig: c, defaultedAriaLabels: b, defaultedMultiCalendars: h } = Te(t), P = J(null), g = J({
      bottom: "",
      left: "",
      transform: ""
    }), C = J([]), O = J(null), K = J(!0), A = J(""), G = J({ startX: 0, endX: 0, startY: 0, endY: 0 }), X = J([]), y = J({ left: "50%" }), F = q(() => t.calendar ? t.calendar(t.mappedDates) : t.mappedDates), p = q(() => t.dayNames ? Array.isArray(t.dayNames) ? t.dayNames : t.dayNames(t.locale, +t.weekStart) : Nr(t.formatLocale, t.locale, +t.weekStart));
    ze(() => {
      a("mount", { cmp: "calendar", refs: C }), c.value.noSwipe || O.value && (O.value.addEventListener("touchstart", te, { passive: !1 }), O.value.addEventListener("touchend", f, { passive: !1 }), O.value.addEventListener("touchmove", j, { passive: !1 })), t.monthChangeOnScroll && O.value && O.value.addEventListener("wheel", s, { passive: !1 });
    });
    const T = (i) => i ? t.vertical ? "vNext" : "next" : t.vertical ? "vPrevious" : "previous", Z = (i, N) => {
      if (t.transitions) {
        const pe = Le(xe(V(), t.month, t.year));
        A.value = Ye(Le(xe(V(), i, N)), pe) ? l.value[T(!0)] : l.value[T(!1)], K.value = !1, st(() => {
          K.value = !0;
        });
      }
    }, I = q(
      () => ({
        [t.calendarClassName]: !!t.calendarClassName
      })
    ), ee = q(() => (i) => {
      const N = Br(i);
      return {
        dp__marker_dot: N.type === "dot",
        dp__marker_line: N.type === "line"
      };
    }), re = q(() => (i) => ge(i, P.value)), R = q(() => ({
      dp__calendar: !0,
      dp__calendar_next: h.value.count > 0 && t.instance !== 0
    })), m = q(() => (i) => t.hideOffsetDates ? i.current : !0), k = async (i, N, pe) => {
      var d, E;
      if (a("set-hover-date", i), (E = (d = i.marker) == null ? void 0 : d.tooltip) != null && E.length) {
        const z = Ae(C.value[N][pe]);
        if (z) {
          const { width: _, height: x } = z.getBoundingClientRect();
          P.value = i.value;
          let de = { left: `${_ / 2}px` }, fe = -50;
          if (await st(), X.value[0]) {
            const { left: Y, width: B } = X.value[0].getBoundingClientRect();
            Y < 0 && (de = { left: "0" }, fe = 0, y.value.left = `${_ / 2}px`), window.innerWidth < Y + B && (de = { right: "0" }, fe = 0, y.value.left = `${B - _ / 2}px`);
          }
          g.value = Object.assign(de, {
            bottom: `${x}px`,
            transform: `translateX(${fe}%)`
          }), a("tooltip-open", i.marker);
        }
      }
    }, L = (i) => {
      P.value && (P.value = null, g.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", i.marker));
    }, te = (i) => {
      G.value.startX = i.changedTouches[0].screenX, G.value.startY = i.changedTouches[0].screenY;
    }, f = (i) => {
      G.value.endX = i.changedTouches[0].screenX, G.value.endY = i.changedTouches[0].screenY, D();
    }, j = (i) => {
      t.vertical && !t.inline && i.preventDefault();
    }, D = () => {
      const i = t.vertical ? "Y" : "X";
      Math.abs(G.value[`start${i}`] - G.value[`end${i}`]) > 10 && a("handle-swipe", G.value[`start${i}`] > G.value[`end${i}`] ? "right" : "left");
    }, S = (i, N, pe) => {
      i && (Array.isArray(C.value[N]) ? C.value[N][pe] = i : C.value[N] = [i]), t.arrowNavigation && r(C.value, "calendar");
    }, s = (i) => {
      t.monthChangeOnScroll && (i.preventDefault(), a("handle-scroll", i));
    }, o = (i) => {
      const N = i[0];
      return t.weekNumbers === "local" ? tr(N.value, { weekStartsOn: +t.weekStart }) : t.weekNumbers === "iso" ? nr(N.value) : typeof t.weekNumbers == "function" ? t.weekNumbers(N.value) : "";
    }, M = (i, N) => {
      lt(i, c.value), a("select-date", N);
    }, Q = (i) => {
      lt(i, c.value);
    };
    return n({ triggerTransition: Z }), (i, N) => {
      var pe;
      return w(), H("div", {
        class: ye(R.value)
      }, [
        oe("div", {
          ref_key: "calendarWrapRef",
          ref: O,
          role: "grid",
          class: ye(I.value),
          "aria-label": (pe = v(b)) == null ? void 0 : pe.calendarWrap
        }, [
          (w(), H(ue, { key: 0 }, [
            oe("div", Zl, [
              i.weekNumbers ? (w(), H("div", ql, Re(i.weekNumName), 1)) : W("", !0),
              (w(!0), H(ue, null, De(p.value, (d, E) => (w(), H("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: E
              }, [
                i.$slots["calendar-header"] ? ae(i.$slots, "calendar-header", {
                  key: 0,
                  day: d,
                  index: E
                }) : W("", !0),
                i.$slots["calendar-header"] ? W("", !0) : (w(), H(ue, { key: 1 }, [
                  et(Re(d), 1)
                ], 64))
              ]))), 128))
            ]),
            Ql,
            Ue($t, {
              name: A.value,
              css: !!i.transitions
            }, {
              default: ie(() => {
                var d;
                return [
                  K.value ? (w(), H("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "rowgroup",
                    "aria-label": ((d = v(b)) == null ? void 0 : d.calendarDays) || void 0
                  }, [
                    (w(!0), H(ue, null, De(F.value, (E, z) => (w(), H("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: z
                    }, [
                      i.weekNumbers ? (w(), H("div", Jl, [
                        oe("div", xl, Re(o(E.days)), 1)
                      ])) : W("", !0),
                      (w(!0), H(ue, null, De(E.days, (_, x) => {
                        var de, fe, Y;
                        return w(), H("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (B) => S(B, z, x),
                          key: x + z,
                          "aria-selected": _.classData.dp__active_date || _.classData.dp__range_start || _.classData.dp__range_start,
                          "aria-disabled": _.classData.dp__cell_disabled || void 0,
                          "aria-label": (fe = (de = v(b)) == null ? void 0 : de.day) == null ? void 0 : fe.call(de, _),
                          tabindex: "0",
                          onClick: he((B) => M(B, _), ["prevent"]),
                          onKeydown: [
                            le((B) => i.$emit("select-date", _), ["enter"]),
                            le((B) => i.$emit("handle-space", _), ["space"])
                          ],
                          onMouseenter: (B) => k(_, z, x),
                          onMouseleave: (B) => L(_)
                        }, [
                          oe("div", {
                            class: ye(["dp__cell_inner", _.classData])
                          }, [
                            i.$slots.day && m.value(_) ? ae(i.$slots, "day", {
                              key: 0,
                              day: +_.text,
                              date: _.value
                            }) : W("", !0),
                            i.$slots.day ? W("", !0) : (w(), H(ue, { key: 1 }, [
                              et(Re(_.text), 1)
                            ], 64)),
                            _.marker && m.value(_) ? (w(), H(ue, { key: 2 }, [
                              i.$slots.marker ? ae(i.$slots, "marker", {
                                key: 0,
                                marker: _.marker,
                                day: +_.text,
                                date: _.value
                              }) : (w(), H("div", {
                                key: 1,
                                class: ye(ee.value(_.marker)),
                                style: Ge(_.marker.color ? { backgroundColor: _.marker.color } : {})
                              }, null, 6))
                            ], 64)) : W("", !0),
                            re.value(_.value) ? (w(), H("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: X,
                              style: Ge(g.value)
                            }, [
                              (Y = _.marker) != null && Y.tooltip ? (w(), H("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: Q
                              }, [
                                (w(!0), H(ue, null, De(_.marker.tooltip, (B, Me) => (w(), H("div", {
                                  key: Me,
                                  class: "dp__tooltip_text"
                                }, [
                                  i.$slots["marker-tooltip"] ? ae(i.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: B,
                                    day: _.value
                                  }) : W("", !0),
                                  i.$slots["marker-tooltip"] ? W("", !0) : (w(), H(ue, { key: 1 }, [
                                    oe("div", {
                                      class: "dp__tooltip_mark",
                                      style: Ge(B.color ? { backgroundColor: B.color } : {})
                                    }, null, 4),
                                    oe("div", null, Re(B.text), 1)
                                  ], 64))
                                ]))), 128)),
                                oe("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: Ge(y.value)
                                }, null, 4)
                              ])) : W("", !0)
                            ], 4)) : W("", !0)
                          ], 2)
                        ], 40, eo);
                      }), 128))
                    ]))), 128))
                  ], 8, Xl)) : W("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 64))
        ], 10, Gl)
      ], 2);
    };
  }
}), ma = (e) => Array.isArray(e), no = (e, n, a, t) => {
  const r = J([]), { modelValue: l, calendars: c, time: b } = Ft(e, n), { defaultedMultiCalendars: h, defaultedStartTime: P } = Te(e), { validateMonthYearInRange: g, isDisabled: C, isDateRangeAllowed: O, checkMinMaxRange: K } = Tt(e), { updateTimeValues: A, getSetDateTime: G, setTime: X, assignStartTime: y, validateTime: F, disabledTimesConfig: p } = Va(e, b, l, t), T = q(
    () => (u) => c.value[u] ? c.value[u].month : 0
  ), Z = q(
    () => (u) => c.value[u] ? c.value[u].year : 0
  ), I = (u, $, U) => {
    var se, be;
    c.value[u] || (c.value[u] = { month: 0, year: 0 }), c.value[u].month = ia($) ? (se = c.value[u]) == null ? void 0 : se.month : $, c.value[u].year = ia(U) ? (be = c.value[u]) == null ? void 0 : be.year : U;
  }, ee = () => {
    e.autoApply && n("select-date");
  };
  yt(l, (u, $) => {
    JSON.stringify(u) !== JSON.stringify($) && m();
  }), ze(() => {
    e.shadow || (l.value || (M(), P.value && y(P.value)), m(!0), e.focusStartDate && e.startDate && M());
  });
  const re = q(() => {
    var u;
    return (u = e.flow) != null && u.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), R = () => {
    e.autoApply && re.value && n("auto-apply", e.partialFlow);
  }, m = (u = !1) => {
    if (l.value)
      return Array.isArray(l.value) ? (r.value = l.value, D(u)) : L(l.value, u);
    if (h.value.count && u && !e.startDate)
      return k(V(), u);
  }, k = (u, $ = !1) => {
    if ((!h.value.count || !h.value.static || $) && I(0, ve(u), me(u)), h.value.count)
      for (let U = 1; U < h.value.count; U++) {
        const se = we(V(), { month: T.value(U - 1), year: Z.value(U - 1) }), be = Da(se, { months: 1 });
        c.value[U] = { month: ve(be), year: me(be) };
      }
  }, L = (u, $) => {
    k(u), X("hours", Ze(u)), X("minutes", Je(u)), X("seconds", wt(u)), h.value.count && $ && o();
  }, te = (u) => {
    if (h.value.count) {
      if (h.value.solo)
        return 0;
      const $ = ve(u[0]), U = ve(u[1]);
      return Math.abs(U - $) < h.value.count ? 0 : 1;
    }
    return 1;
  }, f = (u, $) => {
    u[1] && e.showLastInRange ? k(u[te(u)], $) : k(u[0], $);
    const U = (se, be) => [
      se(u[0]),
      u[1] ? se(u[1]) : b[be][1]
    ];
    X("hours", U(Ze, "hours")), X("minutes", U(Je, "minutes")), X("seconds", U(wt, "seconds"));
  }, j = (u, $) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return f(u, $);
    if (e.multiDates && $) {
      const U = u[u.length - 1];
      return L(U, $);
    }
  }, D = (u) => {
    const $ = l.value;
    j($, u), h.value.count && h.value.solo && o();
  }, S = (u, $) => {
    const U = we(V(), { month: T.value($), year: Z.value($) }), se = u < 0 ? vt(U, 1) : Yt(U, 1);
    g(ve(se), me(se), u < 0, e.preventMinMaxNavigation) && (I($, ve(se), me(se)), n("update-month-year", { instance: $, month: ve(se), year: me(se) }), h.value.count && !h.value.solo && s($), a());
  }, s = (u) => {
    for (let $ = u - 1; $ >= 0; $--) {
      const U = Yt(we(V(), { month: T.value($ + 1), year: Z.value($ + 1) }), 1);
      I($, ve(U), me(U));
    }
    for (let $ = u + 1; $ <= h.value.count - 1; $++) {
      const U = vt(we(V(), { month: T.value($ - 1), year: Z.value($ - 1) }), 1);
      I($, ve(U), me(U));
    }
  }, o = () => {
    if (Array.isArray(l.value) && l.value.length === 2) {
      const u = V(
        V(l.value[1] ? l.value[1] : vt(l.value[0], 1))
      ), [$, U] = [ve(l.value[0]), me(l.value[0])], [se, be] = [ve(l.value[1]), me(l.value[1])];
      ($ !== se || $ === se && U !== be) && h.value.solo && I(1, ve(u), me(u));
    } else
      l.value && !Array.isArray(l.value) && (I(0, ve(l.value), me(l.value)), k(V()));
  }, M = () => {
    e.startDate && (I(0, ve(V(e.startDate)), me(V(e.startDate))), h.value.count && s(0));
  }, Q = (u, $) => {
    e.monthChangeOnScroll && S(e.monthChangeOnScroll !== "inverse" ? -u.deltaY : u.deltaY, $);
  }, i = (u, $, U = !1) => {
    e.monthChangeOnArrows && e.vertical === U && N(u, $);
  }, N = (u, $) => {
    S(u === "right" ? -1 : 1, $);
  }, pe = (u) => e.markers.find(($) => ge(da(u.value), da($.date))), d = (u, $) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [u == 0, !0];
      case "fair":
        return [u == 0 || $ > u, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, E = (u, $, U, se) => {
    if (e.sixWeeks && u.length < 6) {
      const be = 6 - u.length, tt = ($.getDay() + 7 - se) % 7, Vt = 6 - (U.getDay() + 7 - se) % 7, [Pt, cn] = d(tt, Vt);
      for (let ut = 1; ut <= be; ut++)
        if (cn ? !!(ut % 2) == Pt : Pt) {
          const Ht = u[0].days[0], fn = z(ct(Ht.value, -7), ve($));
          u.unshift({ days: fn });
        } else {
          const Ht = u[u.length - 1], fn = Ht.days[Ht.days.length - 1], Ua = z(ct(fn.value, 1), ve($));
          u.push({ days: Ua });
        }
    }
    return u;
  }, z = (u, $) => {
    const U = V(u), se = [];
    for (let be = 0; be < 7; be++) {
      const tt = ct(U, be), St = ve(tt) !== $;
      se.push({
        text: e.hideOffsetDates && St ? "" : tt.getDate(),
        value: tt,
        current: !St,
        classData: {}
      });
    }
    return se;
  }, _ = (u, $) => {
    const U = [], se = V(He(new Date($, u), e.timezone)), be = V(He(new Date($, u + 1, 0), e.timezone)), tt = e.weekStart, St = ba(se, { weekStartsOn: tt }), Vt = (Pt) => {
      const cn = z(Pt, u);
      if (U.push({ days: cn }), !U[U.length - 1].days.some(
        (ut) => ge(Le(ut.value), Le(be))
      )) {
        const ut = ct(Pt, 7);
        Vt(ut);
      }
    };
    return Vt(St), E(U, se, be, tt);
  }, x = (u) => (l.value = Gt(V(u.value), e.timezone, e.weekStart), n("date-update", u.value), R()), de = (u) => {
    const $ = ot(V(u.value), b.hours, b.minutes, Ve());
    n("date-update", $), e.multiDates ? en($, l, e.multiDatesLimit) : l.value = $, t(), st().then(() => {
      R();
    });
  }, fe = (u) => e.noDisabledRange ? Ra(r.value[0], u).some((U) => C(U)) : !1, Y = () => {
    r.value = l.value ? l.value.slice() : [], r.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (r.value = []);
  }, B = (u, $) => {
    const U = [V(u.value), ct(V(u.value), +e.autoRange)];
    O(U) && ($ && Me(u.value), r.value = U);
  }, Me = (u) => {
    const $ = ve(V(u)), U = me(V(u));
    if (I(0, $, U), h.value.count > 0)
      for (let se = 1; se < h.value.count; se++) {
        const be = Hr(
          we(V(u), { year: T.value(se - 1), month: Z.value(se - 1) })
        );
        I(se, be.month, be.year);
      }
  }, ne = (u) => Array.isArray(l.value) && l.value.length === 2 ? e.fixedStart && (Ye(u, l.value[0]) || ge(u, l.value[0])) ? [l.value[0], u] : e.fixedEnd && (_e(u, l.value[1]) || ge(u, l.value[1])) ? [u, l.value[1]] : (n("invalid-fixed-range", u), l.value) : [], Qe = (u) => {
    fe(u.value) || !K(u.value, l.value, e.fixedStart ? 0 : 1) || (r.value = ne(V(u.value)));
  }, je = (u, $) => {
    if (Y(), e.autoRange)
      return B(u, $);
    if (e.fixedStart || e.fixedEnd)
      return Qe(u);
    r.value[0] ? K(V(u.value), l.value) && !fe(u.value) ? _e(V(u.value), V(r.value[0])) ? (r.value.unshift(V(u.value)), n("range-end", r.value[0])) : (r.value[1] = V(u.value), n("range-end", r.value[1])) : e.autoApply && n("auto-apply-invalid", u.value) : (r.value[0] = V(u.value), n("range-start", r.value[0]));
  }, Ve = (u = !0) => e.enableSeconds ? Array.isArray(b.seconds) ? u ? b.seconds[0] : b.seconds[1] : b.seconds : 0, At = (u) => {
    r.value[u] = ot(
      r.value[u],
      b.hours[u],
      b.minutes[u],
      Ve(u !== 1)
    );
  }, nn = () => {
    var u, $;
    r.value[0] && r.value[1] && +((u = r.value) == null ? void 0 : u[0]) > +(($ = r.value) == null ? void 0 : $[1]) && (r.value.reverse(), n("range-start", r.value[0]), n("range-end", r.value[1]));
  }, an = () => {
    r.value.length && (r.value[0] && !r.value[1] ? At(0) : (At(0), At(1), t()), nn(), l.value = r.value.slice(), tn(r.value, n, e.autoApply, e.modelAuto));
  }, rn = (u, $ = !1) => {
    if (!(C(u.value) || !u.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return x(u);
      if (!e.range)
        return de(u);
      ma(b.hours) && ma(b.minutes) && !e.multiDates && (je(u, $), an());
    }
  }, ln = (u, $) => {
    var se;
    I(u, $.month, $.year), h.value.count && !h.value.solo && s(u), n("update-month-year", { instance: u, month: $.month, year: $.year }), a(h.value.solo ? u : void 0);
    const U = (se = e.flow) != null && se.length ? e.flow[e.flowStep] : void 0;
    !$.fromNav && (U === Xe.month || U === Xe.year) && t();
  }, on = (u, $) => {
    Array.isArray(u) && u.length <= 2 && e.range ? l.value = u.map((U) => He(V(U), $ ? void 0 : e.timezone)) : Array.isArray(u) || (l.value = He(V(u), $ ? void 0 : e.timezone)), ee(), e.multiCalendars && st().then(() => m(!0));
  }, sn = () => {
    e.range ? l.value && Array.isArray(l.value) && l.value[0] ? l.value = _e(V(), l.value[0]) ? [V(), l.value[0]] : [l.value[0], V()] : l.value = [V()] : l.value = V(), ee();
  }, un = () => {
    if (Array.isArray(l.value))
      if (e.multiDates) {
        const u = dn();
        l.value[l.value.length - 1] = G(u);
      } else
        l.value = l.value.map((u, $) => u && G(u, $));
    else
      l.value = G(l.value);
    n("time-update");
  }, dn = () => Array.isArray(l.value) && l.value.length ? l.value[l.value.length - 1] : null;
  return {
    calendars: c,
    modelValue: l,
    month: T,
    year: Z,
    time: b,
    disabledTimesConfig: p,
    validateTime: F,
    getCalendarDays: _,
    getMarker: pe,
    handleScroll: Q,
    handleSwipe: N,
    handleArrow: i,
    selectDate: rn,
    updateMonthYear: ln,
    presetDate: on,
    selectCurrentDate: sn,
    updateTime: (u, $ = !0, U = !1) => {
      A(u, $, U, un);
    }
  };
}, ao = { key: 0 }, ro = /* @__PURE__ */ Oe({
  __name: "DatePicker",
  props: Object.assign(qe, {}),
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, {
      calendars: r,
      month: l,
      year: c,
      modelValue: b,
      time: h,
      disabledTimesConfig: P,
      validateTime: g,
      getCalendarDays: C,
      getMarker: O,
      handleArrow: K,
      handleScroll: A,
      handleSwipe: G,
      selectDate: X,
      updateMonthYear: y,
      presetDate: F,
      selectCurrentDate: p,
      updateTime: T
    } = no(t, a, s, o), Z = pt(), { setHoverDate: I, getDayClassData: ee, clearHoverDate: re } = ol(b, t), { defaultedMultiCalendars: R } = Te(t), m = J([]), k = J([]), L = J(null), te = Fe(Z, "calendar"), f = Fe(Z, "monthYear"), j = Fe(Z, "timePicker"), D = (d) => {
      t.shadow || a("mount", d);
    };
    yt(
      r,
      () => {
        t.shadow || setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const S = q(() => (d) => C(l.value(d), c.value(d)).map((E) => Object.assign(E, {
      days: E.days.map((z) => (z.marker = O(z), z.classData = ee(z), z))
    })));
    function s(d) {
      var E;
      d || d === 0 ? (E = k.value[d]) == null || E.triggerTransition(l.value(d), c.value(d)) : k.value.forEach((z, _) => z.triggerTransition(l.value(_), c.value(_)));
    }
    function o() {
      a("update-flow-step");
    }
    const M = (d, E = !1) => {
      X(d, E), t.spaceConfirm && a("select-date");
    };
    return n({
      clearHoverDate: re,
      presetDate: F,
      selectCurrentDate: p,
      toggleMonthPicker: (d, E, z = 0) => {
        var _;
        (_ = m.value[z]) == null || _.toggleMonthPicker(d, E);
      },
      toggleYearPicker: (d, E, z = 0) => {
        var _;
        (_ = m.value[z]) == null || _.toggleYearPicker(d, E);
      },
      toggleTimePicker: (d, E, z) => {
        var _;
        (_ = L.value) == null || _.toggleTimePicker(d, E, z);
      },
      handleArrow: K,
      updateMonthYear: y,
      getSidebarProps: () => ({
        modelValue: b,
        month: l,
        year: c,
        time: h,
        updateTime: T,
        updateMonthYear: y,
        selectDate: X,
        presetDate: F
      })
    }), (d, E) => (w(), H(ue, null, [
      Ue(xt, {
        "multi-calendars": v(R).count
      }, {
        default: ie(({ instance: z, index: _ }) => [
          d.disableMonthYearSelect ? W("", !0) : (w(), ce(Kl, Ce({
            key: 0,
            ref: (x) => {
              x && (m.value[_] = x);
            },
            months: v(Sa)(d.formatLocale, d.locale, d.monthNameFormat),
            years: v(Wn)(d.yearRange, d.reverseYears),
            month: v(l)(z),
            year: v(c)(z),
            instance: z
          }, d.$props, {
            onMount: E[0] || (E[0] = (x) => D(v(gt).header)),
            onResetFlow: E[1] || (E[1] = (x) => d.$emit("reset-flow")),
            onUpdateMonthYear: (x) => v(y)(z, x),
            onOverlayClosed: E[2] || (E[2] = (x) => d.$emit("focus-menu"))
          }), Be({ _: 2 }, [
            De(v(f), (x, de) => ({
              name: x,
              fn: ie((fe) => [
                ae(d.$slots, x, Se(Ee(fe)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Ue(to, Ce({
            ref: (x) => {
              x && (k.value[_] = x);
            },
            "mapped-dates": S.value(z),
            month: v(l)(z),
            year: v(c)(z),
            instance: z
          }, d.$props, {
            onSelectDate: (x) => v(X)(x, z !== 1),
            onHandleSpace: (x) => M(x, z !== 1),
            onSetHoverDate: E[3] || (E[3] = (x) => v(I)(x)),
            onHandleScroll: (x) => v(A)(x, z),
            onHandleSwipe: (x) => v(G)(x, z),
            onMount: E[4] || (E[4] = (x) => D(v(gt).calendar)),
            onResetFlow: E[5] || (E[5] = (x) => d.$emit("reset-flow")),
            onTooltipOpen: E[6] || (E[6] = (x) => d.$emit("tooltip-open", x)),
            onTooltipClose: E[7] || (E[7] = (x) => d.$emit("tooltip-close", x))
          }), Be({ _: 2 }, [
            De(v(te), (x, de) => ({
              name: x,
              fn: ie((fe) => [
                ae(d.$slots, x, Se(Ee(Object.assign({}, fe))))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars"]),
      d.enableTimePicker ? (w(), H("div", ao, [
        d.$slots["time-picker"] ? ae(d.$slots, "time-picker", Se(Ce({ key: 0 }, { time: v(h), updateTime: v(T) }))) : (w(), ce(ja, Ce({
          key: 1,
          ref_key: "timePickerRef",
          ref: L
        }, d.$props, {
          hours: v(h).hours,
          minutes: v(h).minutes,
          seconds: v(h).seconds,
          "internal-model-value": d.internalModelValue,
          "disabled-times-config": v(P),
          "validate-time": v(g),
          onMount: E[8] || (E[8] = (z) => D(v(gt).timePicker)),
          "onUpdate:hours": E[9] || (E[9] = (z) => v(T)(z)),
          "onUpdate:minutes": E[10] || (E[10] = (z) => v(T)(z, !1)),
          "onUpdate:seconds": E[11] || (E[11] = (z) => v(T)(z, !1, !0)),
          onResetFlow: E[12] || (E[12] = (z) => d.$emit("reset-flow")),
          onOverlayClosed: E[13] || (E[13] = (z) => d.$emit("time-picker-close")),
          onOverlayOpened: E[14] || (E[14] = (z) => d.$emit("time-picker-open", z)),
          onAmPmChange: E[15] || (E[15] = (z) => d.$emit("am-pm-change", z))
        }), Be({ _: 2 }, [
          De(v(j), (z, _) => ({
            name: z,
            fn: ie((x) => [
              ae(d.$slots, z, Se(Ee(x)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : W("", !0)
    ], 64));
  }
}), lo = (e, n) => {
  const a = J(), { defaultedMultiCalendars: t, defaultedConfig: r } = Te(e), { modelValue: l, year: c, month: b, calendars: h } = Ft(e, n), { isDisabled: P } = Tt(e), { selectYear: g, groupedYears: C, showYearPicker: O, isDisabled: K, toggleYearPicker: A, handleYearSelect: G, handleYear: X } = Fa({
    modelValue: l,
    multiCalendars: t,
    calendars: h,
    month: b,
    year: c,
    props: e,
    emit: n
  }), y = (m, k) => [m, k].map((L) => rt(L, "MMMM", { locale: e.formatLocale })).join("-"), F = q(() => (m) => l.value ? Array.isArray(l.value) ? l.value.some((k) => Qn(m, k)) : Qn(l.value, m) : !1), p = (m) => {
    if (e.range) {
      if (Array.isArray(l.value)) {
        const k = ge(m, l.value[0]) || ge(m, l.value[1]);
        return Qt(l.value, a.value, m) && !k;
      }
      return !1;
    }
    return !1;
  }, T = q(() => (m) => {
    const k = we(/* @__PURE__ */ new Date(), { year: c.value(m) });
    return ar({
      start: rr(k),
      end: lr(k)
    }).map((L) => {
      const te = or(L), f = Xn(L), j = P(L), D = p(te);
      return {
        text: y(te, f),
        value: te,
        active: F.value(te),
        disabled: j,
        isBetween: D
      };
    });
  }), Z = (m) => {
    en(m, l, e.multiDatesLimit), n("auto-apply", !0);
  }, I = (m) => {
    const k = Kn(l, m, n);
    tn(k, n, e.autoApply, e.modelAuto);
  }, ee = (m) => {
    l.value = m, n("auto-apply");
  };
  return {
    defaultedConfig: r,
    defaultedMultiCalendars: t,
    groupedYears: C,
    year: c,
    isDisabled: K,
    quarters: T,
    showYearPicker: O,
    modelValue: l,
    setHoverDate: (m) => {
      a.value = m;
    },
    selectYear: g,
    selectQuarter: (m, k, L) => {
      if (!L)
        return h.value[k].month = ve(Xn(m)), e.multiDates ? Z(m) : e.range ? I(m) : ee(m);
    },
    toggleYearPicker: A,
    handleYearSelect: G,
    handleYear: X
  };
}, oo = { class: "dp--quarter-items" }, so = ["disabled", "onClick", "onMouseover"], io = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: Object.assign(qe, {}),
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = pt(), l = Fe(r, "yearMode"), {
      defaultedMultiCalendars: c,
      defaultedConfig: b,
      groupedYears: h,
      year: P,
      isDisabled: g,
      quarters: C,
      modelValue: O,
      showYearPicker: K,
      setHoverDate: A,
      selectQuarter: G,
      toggleYearPicker: X,
      handleYearSelect: y,
      handleYear: F
    } = lo(t, a);
    return n({ getSidebarProps: () => ({
      modelValue: O,
      year: P,
      selectQuarter: G,
      handleYearSelect: y,
      handleYear: F
    }) }), (T, Z) => (w(), ce(xt, {
      "multi-calendars": v(c).count,
      stretch: ""
    }, {
      default: ie(({ instance: I }) => [
        oe("div", {
          class: "dp-quarter-picker-wrap",
          style: Ge({ minHeight: `${v(b).modeHeight}px` })
        }, [
          oe("div", null, [
            Ue(Ea, Ce(T.$props, {
              items: v(h)(I),
              instance: I,
              "show-year-picker": v(K)[I],
              year: v(P)(I),
              "is-disabled": (ee) => v(g)(I, ee),
              onHandleYear: (ee) => v(F)(I, ee),
              onYearSelect: (ee) => v(y)(ee, I),
              onToggleYearPicker: (ee) => v(X)(I, ee == null ? void 0 : ee.flow, ee == null ? void 0 : ee.show)
            }), Be({ _: 2 }, [
              De(v(l), (ee, re) => ({
                name: ee,
                fn: ie((R) => [
                  ae(T.$slots, ee, Se(Ee(R)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          oe("div", oo, [
            (w(!0), H(ue, null, De(v(C)(I), (ee, re) => (w(), H("div", { key: re }, [
              oe("button", {
                type: "button",
                class: ye(["dp--qr-btn", {
                  "dp--qr-btn-active": ee.active,
                  "dp--qr-btn-between": ee.isBetween,
                  "dp--qr-btn-disabled": ee.disabled
                }]),
                disabled: ee.disabled,
                onClick: (R) => v(G)(ee.value, I, ee.disabled),
                onMouseover: (R) => v(A)(ee.value)
              }, [
                T.$slots.quarter ? ae(T.$slots, "quarter", {
                  key: 0,
                  value: ee.value,
                  text: ee.text
                }) : (w(), H(ue, { key: 1 }, [
                  et(Re(ee.text), 1)
                ], 64))
              ], 42, so)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars"]));
  }
}), uo = ["id", "onKeydown"], co = {
  key: 0,
  class: "dp__sidebar_left"
}, fo = {
  key: 1,
  class: "dp--preset-dates"
}, vo = ["onClick", "onKeydown"], mo = {
  key: 2,
  class: "dp__sidebar_right"
}, go = {
  key: 3,
  class: "dp__action_extra"
}, ga = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: Object.assign(Jt, {
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    arrMapValues: { type: Object, default: () => ({}) },
    noOverlayFocus: { type: Boolean, default: !1 }
  }),
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = q(() => {
      let Y = {};
      for (const [B, Me] of Object.entries(t))
        B != "openOnTop" && (Y = Object.assign(Y, { k: Me }));
      return Object.assign(Y, {
        flowStep: ee.value,
        noOverlayFocus: t.noOverlayFocus
      });
    }), { setMenuFocused: l, setShiftKey: c, control: b } = Ba(), h = pt(), { defaultedTextInput: P, defaultedInline: g, defaultedConfig: C } = Te(t), O = J(null), K = J(0), A = J(null), G = J(null), X = J(!1), y = J(null);
    ze(() => {
      if (!t.shadow) {
        X.value = !0, F(), window.addEventListener("resize", F);
        const Y = Ae(A);
        if (Y && !P.value.enabled && !g.value.enabled && (l(!0), L()), Y) {
          const B = (Me) => {
            C.value.allowPreventDefault && Me.preventDefault(), lt(Me, C.value, !0);
          };
          Y.addEventListener("pointerdown", B), Y.addEventListener("mousedown", B);
        }
      }
    }), Yn(() => {
      window.removeEventListener("resize", F);
    });
    const F = () => {
      const Y = Ae(G);
      Y && (K.value = Y.getBoundingClientRect().width);
    }, { arrowRight: p, arrowLeft: T, arrowDown: Z, arrowUp: I } = it(), { flowStep: ee, updateFlowStep: re, childMount: R, resetFlow: m } = sl(t, a, y), k = q(() => t.monthPicker ? $l : t.yearPicker ? Al : t.timePicker ? Ll : t.quarterPicker ? io : ro), L = () => {
      const Y = Ae(A);
      Y && Y.focus({ preventScroll: !0 });
    }, te = q(() => {
      var Y;
      return ((Y = y.value) == null ? void 0 : Y.getSidebarProps()) || {};
    }), f = () => {
      t.openOnTop && a("recalculate-position");
    }, j = Fe(h, "action"), D = q(() => t.monthPicker || t.yearPicker ? Fe(h, "monthYear") : t.timePicker ? Fe(h, "timePicker") : Fe(h, "shared")), S = q(() => t.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), s = q(() => ({
      dp__menu_disabled: t.disabled,
      dp__menu_readonly: t.readonly
    })), o = q(
      () => ({
        dp__menu: !0,
        dp__menu_index: !g.value.enabled,
        dp__relative: g.value.enabled,
        [t.menuClassName]: !!t.menuClassName
      })
    ), M = (Y) => {
      lt(Y, C.value, !0);
    }, Q = () => {
      t.escClose && a("close-picker");
    }, i = (Y) => {
      if (t.arrowNavigation) {
        if (Y === "up")
          return I();
        if (Y === "down")
          return Z();
        if (Y === "left")
          return T();
        if (Y === "right")
          return p();
      } else
        Y === "left" || Y === "up" ? z("handleArrow", "left", 0, Y === "up") : z("handleArrow", "right", 0, Y === "down");
    }, N = (Y) => {
      c(Y.shiftKey), !t.disableMonthYearSelect && Y.code === "Tab" && Y.target.classList.contains("dp__menu") && b.value.shiftKeyInMenu && (Y.preventDefault(), lt(Y, C.value, !0), a("close-picker"));
    }, pe = () => {
      L(), a("time-picker-close");
    }, d = (Y) => {
      var B, Me, ne;
      (B = y.value) == null || B.toggleTimePicker(!1, !1), (Me = y.value) == null || Me.toggleMonthPicker(!1, !1, Y), (ne = y.value) == null || ne.toggleYearPicker(!1, !1, Y);
    }, E = (Y, B = 0) => {
      var Me, ne, Qe;
      return Y === "month" ? (Me = y.value) == null ? void 0 : Me.toggleMonthPicker(!1, !0, B) : Y === "year" ? (ne = y.value) == null ? void 0 : ne.toggleYearPicker(!1, !0, B) : Y === "time" ? (Qe = y.value) == null ? void 0 : Qe.toggleTimePicker(!0, !1) : d(B);
    }, z = (Y, ...B) => {
      var Me, ne;
      (Me = y.value) != null && Me[Y] && ((ne = y.value) == null || ne[Y](...B));
    }, _ = () => {
      z("selectCurrentDate");
    }, x = (Y, B) => {
      z("presetDate", Y, B);
    }, de = () => {
      z("clearHoverDate");
    };
    return n({
      updateMonthYear: (Y, B) => {
        z("updateMonthYear", Y, B);
      },
      switchView: E
    }), (Y, B) => {
      var Me;
      return w(), H("div", {
        id: Y.uid ? `dp-menu-${Y.uid}` : void 0,
        tabindex: "0",
        ref_key: "dpMenuRef",
        ref: A,
        role: "dialog",
        class: ye(o.value),
        onMouseleave: de,
        onClick: M,
        onKeydown: [
          le(Q, ["esc"]),
          B[17] || (B[17] = le(he((ne) => i("left"), ["prevent"]), ["left"])),
          B[18] || (B[18] = le(he((ne) => i("up"), ["prevent"]), ["up"])),
          B[19] || (B[19] = le(he((ne) => i("down"), ["prevent"]), ["down"])),
          B[20] || (B[20] = le(he((ne) => i("right"), ["prevent"]), ["right"])),
          N
        ]
      }, [
        (Y.disabled || Y.readonly) && v(g).enabled ? (w(), H("div", {
          key: 0,
          class: ye(s.value)
        }, null, 2)) : W("", !0),
        !v(g).enabled && !Y.teleportCenter ? (w(), H("div", {
          key: 1,
          class: ye(S.value)
        }, null, 2)) : W("", !0),
        oe("div", {
          ref_key: "innerMenuRef",
          ref: G,
          class: ye({
            dp__menu_content_wrapper: ((Me = Y.presetDates) == null ? void 0 : Me.length) || !!Y.$slots["left-sidebar"] || !!Y.$slots["right-sidebar"]
          }),
          style: Ge({ "--dp-menu-width": `${K.value}px` })
        }, [
          Y.$slots["left-sidebar"] ? (w(), H("div", co, [
            ae(Y.$slots, "left-sidebar", Se(Ee(te.value)))
          ])) : W("", !0),
          Y.presetDates.length ? (w(), H("div", fo, [
            (w(!0), H(ue, null, De(Y.presetDates, (ne, Qe) => (w(), H(ue, { key: Qe }, [
              ne.slot ? ae(Y.$slots, ne.slot, {
                key: 0,
                presetDate: x,
                label: ne.label,
                value: ne.value
              }) : (w(), H("button", {
                key: 1,
                type: "button",
                style: Ge(ne.style || {}),
                class: "dp__btn dp--preset-range",
                onClick: he((je) => x(ne.value, ne.noTz), ["prevent"]),
                onKeydown: [
                  le(he((je) => x(ne.value, ne.noTz), ["prevent"]), ["enter"]),
                  le(he((je) => x(ne.value, ne.noTz), ["prevent"]), ["space"])
                ]
              }, Re(ne.label), 45, vo))
            ], 64))), 128))
          ])) : W("", !0),
          oe("div", {
            class: "dp__instance_calendar",
            ref_key: "calendarWrapperRef",
            ref: O,
            role: "document"
          }, [
            (w(), ce(Nn(k.value), Ce({
              ref_key: "dynCmpRef",
              ref: y
            }, r.value, {
              "flow-step": v(ee),
              onMount: v(R),
              onUpdateFlowStep: v(re),
              onResetFlow: v(m),
              onFocusMenu: L,
              onSelectDate: B[0] || (B[0] = (ne) => Y.$emit("select-date")),
              onDateUpdate: B[1] || (B[1] = (ne) => Y.$emit("date-update", ne)),
              onTooltipOpen: B[2] || (B[2] = (ne) => Y.$emit("tooltip-open", ne)),
              onTooltipClose: B[3] || (B[3] = (ne) => Y.$emit("tooltip-close", ne)),
              onAutoApply: B[4] || (B[4] = (ne) => Y.$emit("auto-apply", ne)),
              onRangeStart: B[5] || (B[5] = (ne) => Y.$emit("range-start", ne)),
              onRangeEnd: B[6] || (B[6] = (ne) => Y.$emit("range-end", ne)),
              onInvalidFixedRange: B[7] || (B[7] = (ne) => Y.$emit("invalid-fixed-range", ne)),
              onTimeUpdate: B[8] || (B[8] = (ne) => Y.$emit("time-update")),
              onAmPmChange: B[9] || (B[9] = (ne) => Y.$emit("am-pm-change", ne)),
              onTimePickerOpen: B[10] || (B[10] = (ne) => Y.$emit("time-picker-open", ne)),
              onTimePickerClose: pe,
              onRecalculatePosition: f,
              onUpdateMonthYear: B[11] || (B[11] = (ne) => Y.$emit("update-month-year", ne)),
              onAutoApplyInvalid: B[12] || (B[12] = (ne) => Y.$emit("auto-apply-invalid", ne)),
              "onUpdate:internalModelValue": B[13] || (B[13] = (ne) => Y.$emit("update:internal-model-value", ne))
            }), Be({ _: 2 }, [
              De(D.value, (ne, Qe) => ({
                name: ne,
                fn: ie((je) => [
                  ae(Y.$slots, ne, Se(Ee(Object.assign({}, je))))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          Y.$slots["right-sidebar"] ? (w(), H("div", mo, [
            ae(Y.$slots, "right-sidebar", Se(Ee(te.value)))
          ])) : W("", !0),
          Y.$slots["action-extra"] ? (w(), H("div", go, [
            Y.$slots["action-extra"] ? ae(Y.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: _
            }) : W("", !0)
          ])) : W("", !0)
        ], 6),
        !Y.autoApply || v(C).keepActionRow ? (w(), ce(gl, Ce({
          key: 2,
          "menu-mount": X.value
        }, r.value, {
          "calendar-width": K.value,
          onClosePicker: B[14] || (B[14] = (ne) => Y.$emit("close-picker")),
          onSelectDate: B[15] || (B[15] = (ne) => Y.$emit("select-date")),
          onInvalidSelect: B[16] || (B[16] = (ne) => Y.$emit("invalid-select")),
          onSelectNow: _
        }), Be({ _: 2 }, [
          De(v(j), (ne, Qe) => ({
            name: ne,
            fn: ie((je) => [
              ae(Y.$slots, ne, Se(Ee(Object.assign({}, je))))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : W("", !0)
      ], 42, uo);
    };
  }
}), yo = typeof window < "u" ? window : void 0, $n = () => {
}, po = (e) => Wa() ? (Ka(e), !0) : !1, ho = (e, n, a, t) => {
  if (!e)
    return $n;
  let r = $n;
  const l = yt(
    () => v(e),
    (b) => {
      r(), b && (b.addEventListener(n, a, t), r = () => {
        b.removeEventListener(n, a, t), r = $n;
      });
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    l(), r();
  };
  return po(c), c;
}, bo = (e, n, a, t = {}) => {
  const { window: r = yo, event: l = "pointerdown" } = t;
  return r ? ho(r, l, (b) => {
    const h = Ae(e), P = Ae(n);
    !h || !P || h === b.target || b.composedPath().includes(h) || b.composedPath().includes(P) || a(b);
  }, { passive: !0 }) : void 0;
}, ko = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: Object.assign(Jt, {}),
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = pt(), l = J(!1), c = Zt(t, "modelValue"), b = Zt(t, "timezone"), h = J(null), P = J(null), g = J(null), C = J(!1), O = J(null), { setMenuFocused: K, setShiftKey: A } = Ba(), { clearArrowNav: G } = it(), { mapDatesArrToMap: X, validateDate: y, isValidTime: F } = Tt(t), { defaultedTransitions: p, defaultedTextInput: T, defaultedInline: Z, defaultedConfig: I } = Te(t), { menuTransition: ee, showTransition: re } = Et(p);
    ze(() => {
      M(t.modelValue), st().then(() => {
        Z.value.enabled || (D(O.value).addEventListener("scroll", _), window.addEventListener("resize", x));
      }), Z.value.enabled && (l.value = !0);
    });
    const R = q(() => X());
    Yn(() => {
      if (!Z.value.enabled) {
        const u = D(O.value);
        u && u.removeEventListener("scroll", _), window.removeEventListener("resize", x);
      }
    });
    const m = Fe(r, "all", t.presetDates), k = Fe(r, "input");
    yt(
      [c, b],
      () => {
        M(c.value);
      },
      { deep: !0 }
    );
    const { openOnTop: L, menuStyle: te, xCorrect: f, setMenuPosition: j, getScrollableParent: D, shadowRender: S } = al({
      menuRef: h,
      menuRefInner: P,
      inputRef: g,
      pickerWrapperRef: O,
      inline: Z,
      emit: a,
      props: t,
      slots: r
    }), {
      inputValue: s,
      internalModelValue: o,
      parseExternalModelValue: M,
      emitModelValue: Q,
      formatInputValue: i,
      checkBeforeEmit: N
    } = tl(a, t, C), pe = q(
      () => ({
        dp__main: !0,
        dp__theme_dark: t.dark,
        dp__theme_light: !t.dark,
        dp__flex_display: Z.value.enabled,
        dp__flex_display_with_input: Z.value.input
      })
    ), d = q(() => t.dark ? "dp__theme_dark" : "dp__theme_light"), E = q(() => t.teleport ? {
      to: typeof t.teleport == "boolean" ? "body" : t.teleport,
      disabled: Z.value.enabled
    } : { class: "dp__outer_menu_wrap" }), z = q(() => Z.value.enabled && (t.timePicker || t.monthPicker || t.yearPicker || t.quarterPicker)), _ = () => {
      l.value && (I.value.closeOnScroll ? Ve() : j());
    }, x = () => {
      l.value && j();
    }, de = () => {
      !t.disabled && !t.readonly && (S(ga, t), j(!1), l.value = !0, l.value && a("open"), l.value || je(), M(t.modelValue));
    }, fe = () => {
      var u;
      s.value = "", je(), (u = g.value) == null || u.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), I.value.closeOnClearValue && Ve();
    }, Y = () => {
      const u = o.value;
      return !u || !Array.isArray(u) && y(u) ? !0 : Array.isArray(u) ? u.length === 2 && y(u[0]) && y(u[1]) ? !0 : t.partialRange && !t.timePicker ? y(u[0]) : !1 : !1;
    }, B = () => {
      N() && Y() ? (Q(), Ve()) : a("invalid-select", o.value);
    }, Me = (u) => {
      ne(), Q(), I.value.closeOnAutoApply && !u && Ve();
    }, ne = () => {
      g.value && T.value.enabled && g.value.setParsedDate(o.value);
    }, Qe = (u = !1) => {
      t.autoApply && F(o.value) && Y() && (t.range && Array.isArray(o.value) ? (t.partialRange || o.value.length === 2) && Me(u) : Me(u));
    }, je = () => {
      T.value.enabled || (o.value = null);
    }, Ve = () => {
      Z.value.enabled || (l.value && (l.value = !1, f.value = !1, K(!1), A(!1), G(), a("closed"), s.value && M(c.value)), je(), a("blur"));
    }, At = (u, $) => {
      if (!u) {
        o.value = null;
        return;
      }
      const U = Array.isArray(u) ? !u.some((be) => !y(be)) : y(u), se = F(u);
      U && se && (o.value = u, $ && (B(), a("text-submit")));
    }, nn = () => {
      t.autoApply && F(o.value) && Q(), ne();
    }, an = () => l.value ? Ve() : de(), rn = (u) => {
      o.value = u;
    }, ln = () => {
      T.value.enabled && (C.value = !0, i()), a("focus");
    }, on = () => {
      T.value.enabled && (C.value = !1, M(t.modelValue)), a("blur");
    }, sn = (u) => {
      P.value && P.value.updateMonthYear(0, {
        month: sa(u.month),
        year: sa(u.year)
      });
    }, un = (u) => {
      M(u || t.modelValue);
    }, dn = (u, $) => {
      var U;
      (U = P.value) == null || U.switchView(u, $);
    }, Gn = (u) => I.value.onClickOutside ? I.value.onClickOutside(u) : Ve();
    return bo(h, g, () => Gn(Y)), n({
      closeMenu: Ve,
      selectDate: B,
      clearValue: fe,
      openMenu: de,
      onScroll: _,
      formatInputValue: i,
      // exposed for testing purposes
      updateInternalModelValue: rn,
      // modify internal modelValue
      setMonthYear: sn,
      parseModel: un,
      switchView: dn
    }), (u, $) => (w(), H("div", {
      class: ye(pe.value),
      ref_key: "pickerWrapperRef",
      ref: O
    }, [
      Ue(cl, Ce({
        ref_key: "inputRef",
        ref: g,
        "is-menu-open": l.value,
        "input-value": v(s),
        "onUpdate:inputValue": $[0] || ($[0] = (U) => qn(s) ? s.value = U : null)
      }, u.$props, {
        onClear: fe,
        onOpen: de,
        onSetInputDate: At,
        onSetEmptyDate: v(Q),
        onSelectDate: B,
        onToggle: an,
        onClose: Ve,
        onFocus: ln,
        onBlur: on,
        onRealBlur: $[1] || ($[1] = (U) => C.value = !1)
      }), Be({ _: 2 }, [
        De(v(k), (U, se) => ({
          name: U,
          fn: ie((be) => [
            ae(u.$slots, U, Se(Ee(be)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      Ue($t, {
        name: v(ee)(v(L)),
        css: v(re) && !v(Z).enabled
      }, {
        default: ie(() => [
          l.value ? (w(), ce(Nn(u.teleport ? Ga : "div"), Ce({
            key: 0,
            ref_key: "dpWrapMenuRef",
            ref: h
          }, E.value, {
            class: { "dp--menu-wrapper": !v(Z).enabled },
            style: v(Z).enabled ? void 0 : v(te)
          }), {
            default: ie(() => [
              Ue(ga, Ce({
                ref_key: "dpMenuRef",
                ref: P,
                class: { [d.value]: !0, "dp--menu-wrapper": u.teleport },
                style: u.teleport ? v(te) : void 0,
                "open-on-top": v(L),
                "arr-map-values": R.value,
                "no-overlay-focus": z.value
              }, u.$props, {
                "internal-model-value": v(o),
                "onUpdate:internalModelValue": $[2] || ($[2] = (U) => qn(o) ? o.value = U : null),
                onClosePicker: Ve,
                onSelectDate: B,
                onAutoApply: Qe,
                onTimeUpdate: nn,
                onFlowStep: $[3] || ($[3] = (U) => u.$emit("flow-step", U)),
                onUpdateMonthYear: $[4] || ($[4] = (U) => u.$emit("update-month-year", U)),
                onInvalidSelect: $[5] || ($[5] = (U) => u.$emit("invalid-select", v(o))),
                onAutoApplyInvalid: $[6] || ($[6] = (U) => u.$emit("invalid-select", U)),
                onInvalidFixedRange: $[7] || ($[7] = (U) => u.$emit("invalid-fixed-range", U)),
                onRecalculatePosition: v(j),
                onTooltipOpen: $[8] || ($[8] = (U) => u.$emit("tooltip-open", U)),
                onTooltipClose: $[9] || ($[9] = (U) => u.$emit("tooltip-close", U)),
                onTimePickerOpen: $[10] || ($[10] = (U) => u.$emit("time-picker-open", U)),
                onTimePickerClose: $[11] || ($[11] = (U) => u.$emit("time-picker-close", U)),
                onAmPmChange: $[12] || ($[12] = (U) => u.$emit("am-pm-change", U)),
                onRangeStart: $[13] || ($[13] = (U) => u.$emit("range-start", U)),
                onRangeEnd: $[14] || ($[14] = (U) => u.$emit("range-end", U)),
                onDateUpdate: $[15] || ($[15] = (U) => u.$emit("date-update", U))
              }), Be({ _: 2 }, [
                De(v(m), (U, se) => ({
                  name: U,
                  fn: ie((be) => [
                    ae(u.$slots, U, Se(Ee(Object.assign({}, be))))
                  ])
                }))
              ]), 1040, ["class", "style", "open-on-top", "arr-map-values", "no-overlay-focus", "internal-model-value", "onRecalculatePosition"])
            ]),
            _: 3
          }, 16, ["class", "style"])) : W("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 2));
  }
}), Ha = /* @__PURE__ */ (() => {
  const e = ko;
  return e.install = (n) => {
    n.component("Vue3DatePicker", e);
  }, e;
})(), wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ha
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(wo).forEach(([e, n]) => {
  e !== "default" && (Ha[e] = n);
});
export {
  Ha as default
};
