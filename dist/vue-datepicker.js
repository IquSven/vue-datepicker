import { openBlock as M, createElementBlock as L, createElementVNode as se, unref as v, reactive as It, computed as q, ref as x, toRef as qt, watch as st, h as Ka, render as Zn, defineComponent as Oe, renderSlot as le, createCommentVNode as K, normalizeClass as he, withKeys as oe, createBlock as ve, withModifiers as pe, onMounted as ze, normalizeStyle as Ge, normalizeProps as Se, mergeProps as Ce, Fragment as de, createTextVNode as et, toDisplayString as Re, onBeforeUpdate as Ga, nextTick as it, onUnmounted as Yn, renderList as De, withDirectives as zt, vShow as Wt, withCtx as ue, createVNode as Ue, Transition as $t, createSlots as Be, useSlots as ht, guardReactiveProps as Ee, resolveDynamicComponent as Nn, getCurrentScope as qa, onScopeDispose as Za, isRef as Qn, Teleport as Qa } from "vue";
import { format as rt, isBefore as Ot, isEqual as kt, isAfter as Rt, set as we, setHours as pa, setMinutes as ba, setSeconds as In, setMilliseconds as Bn, getYear as fe, getMonth as ge, setMonth as Xa, setYear as vt, addMonths as mt, subMonths as Yt, isValid as Kt, parseISO as Ja, eachDayOfInterval as ka, getHours as qe, getMinutes as Je, getSeconds as wt, startOfWeek as wa, endOfWeek as xa, parse as Tn, isDate as er, addYears as Da, subYears as Ma, addDays as ft, getDay as tr, differenceInCalendarDays as nr, add as $a, sub as ar, getWeek as rr, getISOWeek as lr, isSameQuarter as Xn, eachQuarterOfInterval as or, startOfYear as sr, endOfYear as ir, startOfQuarter as ur, endOfQuarter as Jn, getQuarter as xn } from "date-fns";
function Bt() {
  return M(), L(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      se("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      se("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      se("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      se("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Bt.compatConfig = {
  MODE: 3
};
function Ta() {
  return M(), L(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      se("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      se("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Ta.compatConfig = {
  MODE: 3
};
function En() {
  return M(), L(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      se("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
En.compatConfig = {
  MODE: 3
};
function Fn() {
  return M(), L(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      se("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Fn.compatConfig = {
  MODE: 3
};
function Hn() {
  return M(), L(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      se("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      se("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Hn.compatConfig = {
  MODE: 3
};
function jn() {
  return M(), L(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      se("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
jn.compatConfig = {
  MODE: 3
};
function Vn() {
  return M(), L(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      se("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Vn.compatConfig = {
  MODE: 3
};
function Un(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Aa = { exports: {} };
(function(e) {
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Aa);
var dr = Aa.exports, An = { exports: {} };
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
var cr = An.exports;
const fr = /* @__PURE__ */ Un(cr);
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
var vr = Sn.exports;
const ea = /* @__PURE__ */ Un(vr);
function mr(e, n) {
  var a = pr(n);
  return a.formatToParts ? yr(a, e) : hr(a, e);
}
var gr = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function yr(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], r = 0; r < a.length; r++) {
      var l = gr[a[r].type];
      l >= 0 && (t[l] = parseInt(a[r].value, 10));
    }
    return t;
  } catch (d) {
    if (d instanceof RangeError)
      return [NaN];
    throw d;
  }
}
function hr(e, n) {
  var a = e.format(n).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var vn = {};
function pr(e) {
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
function Ln(e, n, a, t, r, l, d) {
  var p = /* @__PURE__ */ new Date(0);
  return p.setUTCFullYear(e, n, a), p.setUTCHours(t, r, l, d), p;
}
var ta = 36e5, br = 6e4, mn = {
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
    return l = parseInt(t[1], 10), na(l) ? -(l * ta) : NaN;
  if (t = mn.timezoneHHMM.exec(e), t) {
    l = parseInt(t[1], 10);
    var d = parseInt(t[2], 10);
    return na(l, d) ? (r = Math.abs(l) * ta + d * br, l > 0 ? -r : r) : NaN;
  }
  if (Dr(e)) {
    n = new Date(n || Date.now());
    var p = a ? n : kr(n), h = Pn(p, e), P = a ? h : wr(n, h, e);
    return -P;
  }
  return NaN;
}
function kr(e) {
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
  var a = mr(e, n), t = Ln(
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
function wr(e, n, a) {
  var t = e.getTime(), r = t - n, l = Pn(new Date(r), a);
  if (n === l)
    return n;
  r -= l - n;
  var d = Pn(new Date(r), a);
  return l === d ? l : Math.max(l, d);
}
function na(e, n) {
  return -23 <= e && e <= 23 && (n == null || 0 <= n && n <= 59);
}
var aa = {};
function Dr(e) {
  if (aa[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), aa[e] = !0, !0;
  } catch(e) {
    return !1;
  }
}
var Sa = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, gn = 36e5, ra = 6e4, Mr = 2, Ie = {
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
  timeZone: Sa
};
function _n(e, n) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var a = n || {}, t = a.additionalDigits == null ? Mr : fr(a.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var r = $r(e), l = Tr(r.date, t), d = l.year, p = l.restDateString, h = Ar(p, d);
  if (isNaN(h))
    return /* @__PURE__ */ new Date(NaN);
  if (h) {
    var P = h.getTime(), b = 0, $;
    if (r.time && (b = Sr(r.time), isNaN(b)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || a.timeZone) {
      if ($ = zn(r.timeZone || a.timeZone, new Date(P + b)), isNaN($))
        return /* @__PURE__ */ new Date(NaN);
    } else
      $ = ea(new Date(P + b)), $ = ea(new Date(P + b + $));
    return new Date(P + b + $);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function $r(e) {
  var n = {}, a = Ie.dateTimePattern.exec(e), t;
  if (a ? (n.date = a[1], t = a[3]) : (a = Ie.datePattern.exec(e), a ? (n.date = a[1], t = a[2]) : (n.date = null, t = e)), t) {
    var r = Ie.timeZone.exec(t);
    r ? (n.time = t.replace(r[1], ""), n.timeZone = r[1].trim()) : n.time = t;
  }
  return n;
}
function Tr(e, n) {
  var a = Ie.YYY[n], t = Ie.YYYYY[n], r;
  if (r = Ie.YYYY.exec(e) || t.exec(e), r) {
    var l = r[1];
    return {
      year: parseInt(l, 10),
      restDateString: e.slice(l.length)
    };
  }
  if (r = Ie.YY.exec(e) || a.exec(e), r) {
    var d = r[1];
    return {
      year: parseInt(d, 10) * 100,
      restDateString: e.slice(d.length)
    };
  }
  return {
    year: null
  };
}
function Ar(e, n) {
  if (n === null)
    return null;
  var a, t, r, l;
  if (e.length === 0)
    return t = /* @__PURE__ */ new Date(0), t.setUTCFullYear(n), t;
  if (a = Ie.MM.exec(e), a)
    return t = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, oa(n, r) ? (t.setUTCFullYear(n, r), t) : /* @__PURE__ */ new Date(NaN);
  if (a = Ie.DDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0);
    var d = parseInt(a[1], 10);
    return Cr(n, d) ? (t.setUTCFullYear(n, 0, d), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ie.MMDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    var p = parseInt(a[2], 10);
    return oa(n, r, p) ? (t.setUTCFullYear(n, r, p), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ie.Www.exec(e), a)
    return l = parseInt(a[1], 10) - 1, sa(n, l) ? la(n, l) : /* @__PURE__ */ new Date(NaN);
  if (a = Ie.WwwD.exec(e), a) {
    l = parseInt(a[1], 10) - 1;
    var h = parseInt(a[2], 10) - 1;
    return sa(n, l, h) ? la(n, l, h) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Sr(e) {
  var n, a, t;
  if (n = Ie.HH.exec(e), n)
    return a = parseFloat(n[1].replace(",", ".")), yn(a) ? a % 24 * gn : NaN;
  if (n = Ie.HHMM.exec(e), n)
    return a = parseInt(n[1], 10), t = parseFloat(n[2].replace(",", ".")), yn(a, t) ? a % 24 * gn + t * ra : NaN;
  if (n = Ie.HHMMSS.exec(e), n) {
    a = parseInt(n[1], 10), t = parseInt(n[2], 10);
    var r = parseFloat(n[3].replace(",", "."));
    return yn(a, t, r) ? a % 24 * gn + t * ra + r * 1e3 : NaN;
  }
  return null;
}
function la(e, n, a) {
  n = n || 0, a = a || 0;
  var t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var r = t.getUTCDay() || 7, l = n * 7 + a + 1 - r;
  return t.setUTCDate(t.getUTCDate() + l), t;
}
var Pr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], _r = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Pa(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function oa(e, n, a) {
  if (n < 0 || n > 11)
    return !1;
  if (a != null) {
    if (a < 1)
      return !1;
    var t = Pa(e);
    if (t && a > _r[n] || !t && a > Pr[n])
      return !1;
  }
  return !0;
}
function Cr(e, n) {
  if (n < 1)
    return !1;
  var a = Pa(e);
  return !(a && n > 366 || !a && n > 365);
}
function sa(e, n, a) {
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
var Or = On.exports;
(function(e, n) {
  var a = dr.default;
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = r;
  var t = a(Or);
  function r(l) {
    return (0, t.default)({}, l);
  }
  e.exports = n.default;
})(Cn, Cn.exports);
var Rr = Cn.exports;
const Yr = /* @__PURE__ */ Un(Rr);
function Nr(e, n, a) {
  var t = _n(e, a), r = zn(n, t, !0), l = new Date(t.getTime() - r), d = /* @__PURE__ */ new Date(0);
  return d.setFullYear(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()), d.setHours(l.getUTCHours(), l.getUTCMinutes(), l.getUTCSeconds(), l.getUTCMilliseconds()), d;
}
function Ir(e, n, a) {
  if (typeof e == "string" && !e.match(Sa)) {
    var t = Yr(a);
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
  ).getTime(), d = zn(n, new Date(l));
  return new Date(l + d);
}
function ia(e) {
  return (n) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${n}T00:00:00+00:00`)).slice(0, 2);
}
function Br(e) {
  return (n) => rt(/* @__PURE__ */ new Date(`2017-01-0${n}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const Er = (e, n, a) => {
  const t = [1, 2, 3, 4, 5, 6, 7];
  let r;
  if (e !== null)
    try {
      r = t.map(Br(e));
    } catch(e) {
      r = t.map(ia(n));
    }
  else
    r = t.map(ia(n));
  const l = r.slice(0, a), d = r.slice(a + 1, r.length);
  return [r[a]].concat(...d).concat(...l);
}, Wn = (e, n) => {
  const a = [];
  for (let t = +e[0]; t <= +e[1]; t++)
    a.push({ value: +t, text: `${t}` });
  return n ? a.reverse() : a;
}, _a = (e, n, a) => {
  const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((l) => {
    const d = l < 10 ? `0${l}` : l;
    return /* @__PURE__ */ new Date(`2017-${d}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const l = a === "long" ? "MMMM" : "MMM";
      return t.map((d, p) => {
        const h = rt(d, l, { locale: e });
        return {
          text: h.charAt(0).toUpperCase() + h.substring(1),
          value: p
        };
      });
    } catch(e) {
    }
  const r = new Intl.DateTimeFormat(n, { month: a, timeZone: "UTC" });
  return t.map((l, d) => {
    const p = r.format(l);
    return {
      text: p.charAt(0).toUpperCase() + p.substring(1),
      value: d
    };
  });
}, Fr = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Ae = (e) => {
  const n = v(e);
  return n != null && n.$el ? n == null ? void 0 : n.$el : n;
}, Hr = (e) => Object.assign({ type: "dot" }, e), Ca = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Zt = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Te = (e) => e, ua = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, da = (e) => e === null, jr = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, Vr = (e) => {
  const n = [], a = (t) => t.filter((r) => r);
  for (let t = 0; t < e.length; t += 3) {
    const r = [e[t], e[t + 1], e[t + 2]];
    n.push(a(r));
  }
  return n;
}, Nt = (e, n, a) => {
  const t = a ? a === 0:a, r = n ? n === 0:n;
  if (!t && !r)
    return !1;
  const l = +a, d = +n;
  return t && r ? +e > l || +e < d : t ? +e > l : r ? +e < d : !1;
}, Dt = (e, n) => Vr(e).map((a) => a.map((t) => {
  const { active: r, disabled: l, isBetween: d, highlighted: p } = n(t);
  return Object.assign(
    {
      active: r,
      disabled: l,
      className: {
        dp__overlay_cell_active: r,
        dp__overlay_cell: !r,
        dp__overlay_cell_disabled: l,
        dp__overlay_cell_pad: !0,
        dp__overlay_cell_active_disabled: l && r,
        dp__cell_in_between: d,
        "dp--highlighted": p
      }
    },
    t
  );
})), lt = (e, n, a = !1) => {
  e && n.allowStopPropagation && (a && e.stopImmediatePropagation(), e.stopPropagation());
}, ca = (e, n, a, t, r) => {
  const l = Tn(e, n.slice(0, e.length), /* @__PURE__ */ new Date());
  return Kt(l) && er(l) ? t || r ? l : we(l, {
    hours: +a.hours,
    minutes: +(a == null ? void 0 : a.minutes),
    seconds: +(a == null ? void 0 : a.seconds),
    milliseconds: 0
  }) : null;
}, Ur = (e, n, a, t, r) => {
  const l = Array.isArray(a) ? a[0] : a;
  if (typeof n == "string")
    return ca(e, n, l, t, r);
  if (Array.isArray(n)) {
    let d = null;
    for (const p of n)
      if (d = ca(e, p, l, t, r), d)
        break;
    return d;
  }
  return typeof n == "function" ? n(e) : null;
}, U = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Lr = (e, n, a) => {
  if (n) {
    const r = (e.getMonth() + 1).toString().padStart(2, "0"), l = e.getDate().toString().padStart(2, "0"), d = e.getHours().toString().padStart(2, "0"), p = e.getMinutes().toString().padStart(2, "0"), h = a ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${r}-${l}T${d}:${p}:${h}.000Z`;
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
  let n = U(JSON.parse(JSON.stringify(e)));
  return n = pa(n, 0), n = ba(n, 0), n = In(n, 0), n = Bn(n, 0), n;
}, ot = (e, n, a, t) => {
  let r = e ? U(e) : U();
  return (n || n === 0) && (r = pa(r, +n)), (a || a === 0) && (r = ba(r, +a)), (t || t === 0) && (r = In(r, +t)), Bn(r, 0);
}, _e = (e, n) => !e || !n ? !1 : Ot(Le(e), Le(n)), ye = (e, n) => !e || !n ? !1 : kt(Le(e), Le(n)), Ye = (e, n) => !e || !n ? !1 : Rt(Le(e), Le(n)), Qt = (e, n, a) => e != null && e[0] && (e != null && e[1]) ? Ye(a, e[0]) && _e(a, e[1]) : e != null && e[0] && n ? Ye(a, e[0]) && _e(a, n) || _e(a, e[0]) && Ye(a, n) : !1, Ke = (e) => {
  const n = we(new Date(e), { date: 1 });
  return Le(n);
}, hn = (e, n, a) => n && (a || a === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((t) => t === n ? [t, a] : [t, isNaN(+e[t]) ? void 0 : +e[t]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, gt = (e) => ({
  hours: qe(e),
  minutes: Je(e),
  seconds: wt(e)
}), Oa = (e, n) => {
  if (n) {
    const a = fe(U(n));
    if (a > e)
      return 12;
    if (a === e)
      return ge(U(n));
  }
}, Ra = (e, n) => {
  if (n) {
    const a = fe(U(n));
    return a < e ? -1 : a === e ? ge(U(n)) : void 0;
  }
}, Mt = (e) => {
  if (e)
    return fe(U(e));
}, Ve = (e, n) => n ? Nr(e, n) : e, Ya = (e, n) => n ? Ir(e, n) : e, fa = (e) => e instanceof Date ? e : Ja(e), Na = (e, n) => {
  const a = Ye(e, n) ? n : e, t = Ye(n, e) ? n : e;
  return ka({ start: a, end: t });
}, zr = (e) => {
  const n = mt(e, 1);
  return { month: ge(n), year: fe(n) };
}, Gt = (e, n, a) => {
  const t = wa(Ve(e, n), { weekStartsOn: +a }), r = xa(Ve(e, n), { weekStartsOn: +a });
  return [t, r];
}, Ia = (e, n) => {
  const a = {
    hours: qe(U()),
    minutes: Je(U()),
    seconds: n ? wt(U()) : 0
  };
  return Object.assign({}, a, e);
}, at = (e, n, a) => [we(U(e), { date: 1 }), we(U(), { month: n, year: a, date: 1 })], xe = (e, n, a) => {
  let t = e ? U(e) : U();
  return (n || n === 0) && (t = Xa(t, n)), a && (t = vt(t, a)), t;
}, Ba = (e, n, a, t, r) => {
  if (!t || r && !n || !r && !a)
    return !1;
  const l = r ? mt(e, 1) : Yt(e, 1), d = [ge(l), fe(l)];
  return r ? !Kr(...d, n) : !Wr(...d, a);
}, Wr = (e, n, a) => _e(...at(a, e, n)) || ye(...at(a, e, n)), Kr = (e, n, a) => Ye(...at(a, e, n)) || ye(...at(a, e, n)), Ea = (e, n, a, t, r, l, d) => {
  if (typeof n == "function" && !d)
    return n(e);
  const p = a ? { locale: a } : void 0;
  return Array.isArray(e) ? `${rt(e[0], l, p)}${r && !e[1] ? "" : t}${e[1] ? rt(e[1], l, p) : ""}` : rt(e, l, p);
}, pt = (e) => {
  if (e)
    return null;
  throw new Error(Zt.prop("partial-range"));
}, Ut = (e, n) => {
  if (n)
    return e();
  throw new Error(Zt.prop("range"));
}, Rn = (e) => Array.isArray(e) ? Kt(e[0]) && (e[1] ? Kt(e[1]) : !0) : e ? Kt(e) : !1, Gr = (e) => we(U(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), pn = (e, n, a, t) => {
  if (!e)
    return !0;
  if (t) {
    const r = a === "max" ? Ot(e, n) : Rt(e, n), l = { seconds: 0, milliseconds: 0 };
    return r || kt(we(e, l), we(n, l));
  }
  return a === "max" ? e.getTime() <= n.getTime() : e.getTime() >= n.getTime();
}, va = (e, n, a, t, r) => {
  const l = e ? Gr(e) : U(n);
  return Array.isArray(t) ? pn(t[0], l, a, !!n) && pn(t[1], l, a, !!n) && r : pn(t, l, a, !!n) && r;
}, bn = (e) => we(U(), gt(e)), qr = (e, n) => Array.isArray(e) ? e.map((a) => U(a)).filter((a) => fe(U(a)) === n).map((a) => ge(a)) : [], Fa = (e, n, a) => typeof e == "function" ? e({ month: n, year: a }) : !!e.months.find((t) => t.month === n && t.year === a), Kn = (e, n) => typeof e == "function" ? e(n) : e.years.includes(n), _t = It({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Ha = () => {
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
}), kn = x(null), Lt = x(!1), wn = x(!1), Dn = x(!1), Mn = x(!1), Ne = x(0), Pe = x(0), ut = () => {
  const e = q(() => Lt.value ? [...ke.selectionGrid, ke.actionRow].filter((g) => g.length) : wn.value ? [
    ...ke.timePicker[0],
    ...ke.timePicker[1],
    Mn.value ? [] : [kn.value],
    ke.actionRow
  ].filter((g) => g.length) : Dn.value ? [...ke.monthPicker, ke.actionRow] : [ke.monthYear, ...ke.calendar, ke.time, ke.actionRow].filter((g) => g.length)), n = (g) => {
    Ne.value = g ? Ne.value + 1 : Ne.value - 1;
    let H = null;
    e.value[Pe.value] && (H = e.value[Pe.value][Ne.value]), H || (Ne.value = g ? Ne.value - 1 : Ne.value + 1);
  }, a = (g) => {
    if (Pe.value === 0 && !g || Pe.value === e.value.length && g)
      return;
    Pe.value = g ? Pe.value + 1 : Pe.value - 1, e.value[Pe.value] ? e.value[Pe.value] && !e.value[Pe.value][Ne.value] && Ne.value !== 0 && (Ne.value = e.value[Pe.value].length - 1) : Pe.value = g ? Pe.value - 1 : Pe.value + 1;
  }, t = (g) => {
    let H = null;
    e.value[Pe.value] && (H = e.value[Pe.value][Ne.value]), H ? H.focus({ preventScroll: !Lt.value }) : Ne.value = g ? Ne.value - 1 : Ne.value + 1;
  }, r = () => {
    n(!0), t(!0);
  }, l = () => {
    n(!1), t(!1);
  }, d = () => {
    a(!1), t(!0);
  }, p = () => {
    a(!0), t(!0);
  }, h = (g, H) => {
    ke[H] = g;
  }, P = (g, H) => {
    ke[H] = g;
  }, b = () => {
    Ne.value = 0, Pe.value = 0;
  };
  return {
    buildMatrix: h,
    buildMultiLevelMatrix: P,
    setTimePickerBackRef: (g) => {
      kn.value = g;
    },
    setSelectionGrid: (g) => {
      Lt.value = g, b(), g || (ke.selectionGrid = []);
    },
    setTimePicker: (g, H = !1) => {
      wn.value = g, Mn.value = H, b(), g || (ke.timePicker[0] = [], ke.timePicker[1] = []);
    },
    setTimePickerElements: (g, H = 0) => {
      ke.timePicker[H] = g;
    },
    arrowRight: r,
    arrowLeft: l,
    arrowUp: d,
    arrowDown: p,
    clearArrowNav: () => {
      ke.monthYear = [], ke.calendar = [], ke.time = [], ke.actionRow = [], ke.selectionGrid = [], ke.timePicker[0] = [], ke.timePicker[1] = [], Lt.value = !1, wn.value = !1, Mn.value = !1, Dn.value = !1, b(), kn.value = null;
    },
    setMonthPicker: (g) => {
      Dn.value = g, b();
    },
    refSets: ke
    // exposed for testing
  };
}, ma = (e) => Object.assign(
  {
    menuAppearTop: "dp-menu-appear-top",
    menuAppearBottom: "dp-menu-appear-bottom",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e ? {} : e
), Zr = (e) => Object.assign(
  {
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
  },
  e ? {} : e
), ga = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, Qr = (e) => {
  const n = typeof e == "object" && e, a = {
    static: !0,
    solo: !1
  };
  if (!e)
    return Object.assign(a, { count: ga(!1) });
  const t = n ? e : {}, r = n ? t.count == null ? !0 : t.count : e, l = ga(r);
  return Object.assign(a, t, { count: l });
}, Xr = (e, n, a) => e || (typeof a == "string" ? a : n), Jr = (e) => typeof e == "boolean" ? e ? ma({}) : !1 : ma(e), xr = (e) => {
  const n = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? Object.assign(n, e ? {} : e, { enabled: !0 }) : Object.assign(n, { enabled: e });
}, el = (e) => Object.assign(
  {
    months: [],
    years: [],
    times: { hours: [], minutes: [], seconds: [] }
  },
  e ? {} : e
), tl = (e) => Object.assign(
  {
    showSelect: !0,
    showCancel: !0,
    showNow: !1,
    showPreview: !0
  },
  e ? {} : e
), nl = (e) => {
  const n = { input: !1 };
  return typeof e == "object" ? Object.assign(n, e ? {} : e, { enabled: !0 }) : Object.assign(
    {
      enabled: e
    },
    n
  );
}, al = (e) => Object.assign({
  allowStopPropagation: !0,
  closeOnScroll: !1,
  modeHeight: 255,
  allowPreventDefault: !1,
  closeOnClearValue: !0,
  closeOnAutoApply: !0,
  noSwipe: !1,
  keepActionRow: !1,
  onClickOutside: void 0
}, e ? {} : e), rl = (e, n, a) => {
  const t = {
    dates: Array.isArray(e) ? e.map((r) => U(r)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: n,
    options: { highlightDisabled: a }
  };
  return typeof e == "function" ? e : Object.assign(t, e ? {} : e);
}, $e = (e) => {
  const n = () => {
    const X = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${X}` : `hh:mm${X} aa`;
  }, a = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? n() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${n()}` : "MM/dd/yyyy", t = (X) => Ia(X, e.enableSeconds), r = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [t(e.startTime[0]), t(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? t(e.startTime) : null, l = q(() => Qr(e.multiCalendars)), d = q(() => r()), p = q(() => Zr(e.ariaLabels)), h = q(() => el(e.filters)), P = q(() => Jr(e.transitions)), b = q(() => tl(e.actionRow)), $ = q(
    () => Xr(e.previewFormat, e.format, a())
  ), I = q(() => xr(e.textInput)), j = q(() => nl(e.inline)), A = q(() => al(e.config)), G = q(
    () => rl(e.highlight, e.highlightWeekDays, e.highlightDisabledDays)
  );
  return {
    defaultedTransitions: P,
    defaultedMultiCalendars: l,
    defaultedStartTime: d,
    defaultedAriaLabels: p,
    defaultedFilters: h,
    defaultedActionRow: b,
    defaultedPreviewFormat: $,
    defaultedTextInput: I,
    defaultedInline: j,
    defaultedConfig: A,
    defaultedHighlight: G,
    getDefaultPattern: a,
    getDefaultStartTime: r
  };
}, ll = (e, n, a) => {
  const t = x(), { defaultedTextInput: r, getDefaultPattern: l } = $e(n), d = x(""), p = qt(n, "format");
  st(t, () => {
    e("internal-model-change", t.value);
  }), st(p, () => {
    f();
  });
  const h = (o) => Ya(o, n.timezone), P = (o) => Ve(o, n.timezone), b = (o, Q, ae = !1) => Ea(
    o,
    n.format,
    n.formatLocale,
    r.value.rangeSeparator,
    n.modelAuto,
    Q ? l() : Q,
    ae
  ), $ = (o) => o ? n.modelType ? w(o) : {
    hours: qe(o),
    minutes: Je(o),
    seconds: n.enableSeconds ? wt(o) : 0
  } : null, I = (o) => n.modelType ? w(o) : { month: ge(o), year: fe(o) }, j = (o) => Array.isArray(o) ? Ut(
    () => [
      vt(U(), o[0]),
      o[1] ? vt(U(), o[1]) : pt(n.partialRange)
    ],
    n.range
  ) : vt(U(), +o), A = (o, Q) => (typeof o == "string" || typeof o == "number") && n.modelType ? F(o) : Q, G = (o) => Array.isArray(o) ? [
    A(
      o[0],
      ot(null, +o[0].hours, +o[0].minutes, o[0].seconds)
    ),
    A(
      o[1],
      ot(null, +o[1].hours, +o[1].minutes, o[1].seconds)
    )
  ] : A(o, ot(null, o.hours, o.minutes, o.seconds)), X = (o) => Array.isArray(o) ? n.multiDates ? o.map((Q) => A(Q, xe(null, +Q.month, +Q.year))) : Ut(
    () => [
      A(o[0], xe(null, +o[0].month, +o[0].year)),
      A(
        o[1],
        o[1] ? xe(null, +o[1].month, +o[1].year) : pt(n.partialRange)
      )
    ],
    n.range
  ) : A(o, xe(null, +o.month, +o.year)), g = (o) => {
    if (Array.isArray(o))
      return o.map((Q) => F(Q));
    throw new Error(Zt.dateArr("multi-dates"));
  }, H = (o) => {
    if (Array.isArray(o))
      return [U(o[0]), U(o[1])];
    throw new Error(Zt.dateArr("week-picker"));
  }, N = (o) => n.modelAuto ? Array.isArray(o) ? [F(o[0]), F(o[1])] : n.autoApply ? [F(o)] : [F(o), null] : Array.isArray(o) ? Ut(
    () => [
      F(o[0]),
      o[1] ? F(o[1]) : pt(n.partialRange)
    ],
    n.range
  ) : F(o), k = () => {
    Array.isArray(t.value) && n.range && t.value.length === 1 && t.value.push(pt(n.partialRange));
  }, O = () => {
    const o = t.value;
    return [
      w(o[0]),
      o[1] ? w(o[1]) : pt(n.partialRange)
    ];
  }, R = () => t.value[1] ? O() : w(Te(t.value[0])), J = () => (t.value || []).map((o) => w(o)), re = () => (k(), n.modelAuto ? R() : n.multiDates ? J() : Array.isArray(t.value) ? Ut(() => O(), n.range) : w(Te(t.value))), C = (o) => !o || Array.isArray(o) && !o.length ? null : n.timePicker ? G(Te(o)) : n.monthPicker ? X(Te(o)) : n.yearPicker ? j(Te(o)) : n.multiDates ? g(Te(o)) : n.weekPicker ? H(Te(o)) : N(Te(o)), ne = (o) => {
    const Q = C(o);
    Rn(Te(Q)) ? (t.value = Te(Q), f()) : (t.value = null, d.value = "");
  }, m = () => {
    const o = (Q) => rt(Q, r.value.format);
    return `${o(t.value[0])} ${r.value.rangeSeparator} ${t.value[1] ? o(t.value[1]) : ""}`;
  }, T = () => a.value && t.value ? Array.isArray(t.value) ? m() : rt(t.value, r.value.format) : b(t.value), Z = () => t.value ? n.multiDates ? t.value.map((o) => b(o)).join("; ") : r.value.enabled && typeof r.value.format == "string" ? T() : b(t.value) : "", f = () => {
    !n.format || typeof n.format == "string" || r.value.enabled && typeof r.value.format == "string" ? d.value = Z() : d.value = n.format(t.value);
  }, F = (o) => {
    if (n.utc) {
      const Q = new Date(o);
      return n.utc === "preserve" ? new Date(Q.getTime() + Q.getTimezoneOffset() * 6e4) : Q;
    }
    return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? P(new Date(o)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? Tn(o, l(), /* @__PURE__ */ new Date()) : P(Tn(o, n.modelType, /* @__PURE__ */ new Date())) : P(new Date(o));
  }, w = (o) => o ? n.utc ? Lr(o, n.utc === "preserve", n.enableSeconds) : n.modelType ? n.modelType === "timestamp" ? +h(o) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? b(h(o)) : b(h(o), n.modelType, !0) : h(o) : "", z = (o, Q = !1) => {
    if (e("update:model-value", o), n.emitTimezone && Q) {
      const ae = Array.isArray(o) ? o.map((c) => Ve(Te(c)), n.emitTimezone) : Ve(Te(o), n.emitTimezone);
      e("update:model-timezone-value", ae);
    }
  }, y = (o) => Array.isArray(t.value) ? n.multiDates ? t.value.map((Q) => o(Q)) : [
    o(t.value[0]),
    t.value[1] ? o(t.value[1]) : pt(n.partialRange)
  ] : o(Te(t.value)), u = (o) => z(Te(y(o)));
  return {
    inputValue: d,
    internalModelValue: t,
    checkBeforeEmit: () => t.value ? n.range ? n.partialRange ? t.value.length >= 1 : t.value.length === 2 : !!t.value : !1,
    parseExternalModelValue: ne,
    formatInputValue: f,
    emitModelValue: () => (f(), n.monthPicker ? u(I) : n.timePicker ? u($) : n.yearPicker ? u(fe) : n.weekPicker ? z(
      t.value.map((o) => w(o)),
      !0
    ) : z(re(), !0))
  };
}, ol = (e, n) => {
  const { defaultedFilters: a } = $e(e), { validateMonthYearInRange: t } = Tt(e), r = (P, b) => {
    let $ = P;
    return a.value.months.includes(ge($)) ? ($ = b ? mt(P, 1) : Yt(P, 1), r($, b)) : $;
  }, l = (P, b) => {
    let $ = P;
    return a.value.years.includes(fe($)) ? ($ = b ? Da(P, 1) : Ma(P, 1), l($, b)) : $;
  }, d = (P, b = !1) => {
    const $ = we(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let I = P ? mt($, 1) : Yt($, 1);
    e.disableYearSelect && (I = vt(I, e.year));
    let j = ge(I), A = fe(I);
    a.value.months.includes(j) && (I = r(I, P), j = ge(I), A = fe(I)), a.value.years.includes(A) && (I = l(I, P), A = fe(I)), t(j, A, P, e.preventMinMaxNavigation) && p(j, A, b);
  }, p = (P, b, $) => {
    n("update-month-year", { month: P, year: b, fromNav: $ });
  }, h = q(() => (P) => Ba(
    we(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }),
    e.maxDate,
    e.minDate,
    e.preventMinMaxNavigation,
    P
  ));
  return { handleMonthYearChange: d, isDisabled: h, updateMonthYear: p };
};
var bt = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(bt || {}), We = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(We || {}), ct = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(ct || {}), yt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(yt || {}), Xe = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(Xe || {});
const sl = ({
  menuRef: e,
  menuRefInner: n,
  inputRef: a,
  pickerWrapperRef: t,
  inline: r,
  emit: l,
  props: d,
  slots: p
}) => {
  const h = x({}), P = x(!1), b = x({
    top: "0",
    left: "0"
  }), $ = x(!1), I = qt(d, "teleportCenter");
  st(I, () => {
    b.value = JSON.parse(JSON.stringify({})), k();
  });
  const j = (w) => {
    if (d.teleport) {
      const z = w.getBoundingClientRect();
      return {
        left: z.left + window.scrollX,
        top: z.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, A = (w, z) => {
    b.value.left = `${w + z - h.value.width}px`;
  }, G = (w) => {
    b.value.left = `${w}px`;
  }, X = (w, z) => {
    d.position === bt.left && G(w), d.position === bt.right && A(w, z), d.position === bt.center && (b.value.left = `${w + z / 2 - h.value.width / 2}px`);
  }, g = (w) => {
    const { width: z, height: y } = w.getBoundingClientRect(), { top: u, left: s } = d.altPosition ? d.altPosition(w) : j(w);
    return { top: +u, left: +s, width: z, height: y };
  }, H = () => {
    b.value.left = "50%", b.value.top = "50%", b.value.transform = "translate(-50%, -50%)", b.value.position = "fixed", delete b.value.opacity;
  }, N = () => {
    const w = Ae(a), { top: z, left: y, transform: u } = d.altPosition(w);
    b.value = { top: `${z}px`, left: `${y}px`, transform: u || "" };
  }, k = (w = !0) => {
    var z;
    if (!r.value.enabled) {
      if (I.value)
        return H();
      if (d.altPosition !== null)
        return N();
      if (w) {
        const y = d.teleport ? (z = n.value) == null ? void 0 : z.$el : e.value;
        y && (h.value = y.getBoundingClientRect()), l("recalculate-position");
      }
      return m();
    }
  }, O = ({ inputEl: w, left: z, width: y }) => {
    window.screen.width > 768 && !P.value && X(z, y), re(w);
  }, R = (w) => {
    const { top: z, left: y, height: u, width: s } = g(w);
    b.value.top = `${u + z + +d.offset}px`, $.value = !1, P.value || (b.value.left = `${y + s / 2 - h.value.width / 2}px`), O({ inputEl: w, left: y, width: s });
  }, J = (w) => {
    const { top: z, left: y, width: u } = g(w);
    b.value.top = `${z - +d.offset - h.value.height}px`, $.value = !0, O({ inputEl: w, left: y, width: u });
  }, re = (w) => {
    if (d.autoPosition) {
      const { left: z, width: y } = g(w), { left: u, right: s } = h.value;
      if (!P.value) {
        if (Math.abs(u) !== Math.abs(s)) {
          if (u <= 0)
            return P.value = !0, G(z);
          if (s >= document.documentElement.clientWidth)
            return P.value = !0, A(z, y);
        }
        return X(z, y);
      }
    }
  }, C = () => {
    const w = Ae(a);
    if (w) {
      const { height: z } = h.value, { top: y, height: u } = w.getBoundingClientRect(), S = window.innerHeight - y - u, o = y;
      return z <= S ? ct.bottom : z > S && z <= o ? ct.top : S >= o ? ct.bottom : ct.top;
    }
    return ct.bottom;
  }, ne = (w) => C() === ct.bottom ? R(w) : J(w), m = () => {
    const w = Ae(a);
    if (w)
      return d.autoPosition ? ne(w) : R(w);
  }, T = function(w) {
    if (w) {
      const z = w.scrollHeight > w.clientHeight, u = window.getComputedStyle(w).overflowY.indexOf("hidden") !== -1;
      return z && !u;
    }
    return !0;
  }, Z = function(w) {
    return !w || w === document.body || w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : T(w) ? w : Z(w.parentNode);
  }, f = (w) => {
    if (w)
      switch (d.position) {
        case bt.left:
          return { left: 0, transform: "translateX(0)" };
        case bt.right:
          return { left: `${w.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${w.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: $,
    menuStyle: b,
    xCorrect: P,
    setMenuPosition: k,
    getScrollableParent: Z,
    shadowRender: (w, z) => {
      var ae, c, B;
      const y = document.createElement("div"), u = (ae = Ae(a)) == null ? void 0 : ae.getBoundingClientRect();
      y.setAttribute("id", "dp--temp-container");
      const s = (c = t.value) != null && c.clientWidth ? t.value : document.body;
      s.append(y);
      const S = document.getElementById("dp--temp-container"), o = f(u), Q = Ka(
        w,
        Object.assign(
          {
            shadow: !0,
            style: Object.assign({ opacity: 0, position: "absolute" }, o)
          },
          z
        ),
        Object.fromEntries(
          Object.keys(p).filter((W) => ["right-sidebar", "left-sidebar"].includes(W)).map((W) => [W, p[W]])
        )
      );
      Zn(Q, S), h.value = (B = Q.el) == null ? void 0 : B.getBoundingClientRect(), Zn(null, S), s.removeChild(S);
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
], il = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], ul = {
  all: () => nt,
  monthYear: () => nt.filter((e) => e.use.includes("month-year")),
  input: () => il,
  timePicker: () => nt.filter((e) => e.use.includes("time")),
  action: () => nt.filter((e) => e.use.includes("action")),
  calendar: () => nt.filter((e) => e.use.includes("calendar")),
  menu: () => nt.filter((e) => e.use.includes("menu")),
  shared: () => nt.filter((e) => e.use.includes("shared")),
  yearMode: () => nt.filter((e) => e.use.includes("year-mode"))
}, Fe = (e, n, a) => {
  const t = [];
  return ul[n]().forEach((r) => {
    e[r.name] && t.push(r.name);
  }), a != null && a.length && a.forEach((r) => {
    r.slot && t.push(r.slot);
  }), t;
}, Et = (e) => {
  const n = q(() => (t) => e.value ? t ? e.value.open : e.value.close : ""), a = q(() => (t) => e.value ? t ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: n, showTransition: !!e.value, menuTransition: a };
}, Ft = (e, n) => {
  const a = U(Ve(/* @__PURE__ */ new Date(), e.timezone)), t = x([{ month: ge(a), year: fe(a) }]), r = It({
    hours: e.range ? [qe(a), qe(a)] : qe(a),
    minutes: e.range ? [Je(a), Je(a)] : Je(a),
    seconds: e.range ? [0, 0] : 0
  }), l = q({
    get: () => e.internalModelValue,
    set: (h) => {
      !e.readonly && !e.disabled && n("update:internal-model-value", h);
    }
  }), d = q(
    () => (h) => t.value[h] ? t.value[h].month : 0
  ), p = q(
    () => (h) => t.value[h] ? t.value[h].year : 0
  );
  return {
    calendars: t,
    time: r,
    modelValue: l,
    month: d,
    year: p
  };
}, dl = (e, n) => {
  const { defaultedMultiCalendars: a, defaultedHighlight: t } = $e(n), { isDisabled: r, matchDate: l } = Tt(n), d = x(null), p = x(U(Ve(/* @__PURE__ */ new Date(), n.timezone))), h = (s) => {
    !s.current && n.hideOffsetDates || (d.value = s.value);
  }, P = () => {
    d.value = null;
  }, b = (s) => Array.isArray(e.value) && n.range && e.value[0] && d.value ? s ? Ye(d.value, e.value[0]) : _e(d.value, e.value[0]) : !0, $ = (s, S) => {
    const o = () => e.value ? S ? e.value[0] || null : e.value[1] : null, Q = e.value && Array.isArray(e.value) ? o() : null;
    return ye(U(s.value), Q);
  }, I = (s) => {
    const S = Array.isArray(e.value) ? e.value[0] : null;
    return s ? !_e(d.value == null ? null : d.value, S) : !0;
  }, j = (s, S = !0) => (n.range || n.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? n.hideOffsetDates && !s.current ? !1 : ye(U(s.value), e.value[S ? 0 : 1]) : n.range ? $(s, S) && I(S) || ye(s.value, Array.isArray(e.value) ? e.value[0] : null) && b(S) : !1, A = (s, S, o) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? s ? !1 : o ? Ye(e.value[0], S.value) : _e(e.value[0], S.value) : !1, G = (s) => !e.value || n.hideOffsetDates && !s.current ? !1 : n.range ? n.modelAuto && Array.isArray(e.value) ? ye(s.value, e.value[0] ? e.value[0] : p.value) : !1 : n.multiDates && Array.isArray(e.value) ? e.value.some((S) => ye(S, s.value)) : ye(s.value, e.value ? e.value : p.value), X = (s) => {
    if (n.autoRange || n.weekPicker) {
      if (d.value) {
        if (n.hideOffsetDates && !s.current)
          return !1;
        const S = ft(d.value, +n.autoRange), o = Gt(U(d.value), n.timezone, n.weekStart);
        return n.weekPicker ? ye(o[1], U(s.value)) : ye(S, U(s.value));
      }
      return !1;
    }
    return !1;
  }, g = (s) => {
    if (n.autoRange || n.weekPicker) {
      if (d.value) {
        const S = ft(d.value, +n.autoRange);
        if (n.hideOffsetDates && !s.current)
          return !1;
        const o = Gt(U(d.value), n.timezone, n.weekStart);
        return n.weekPicker ? Ye(s.value, o[0]) && _e(s.value, o[1]) : Ye(s.value, d.value) && _e(s.value, S);
      }
      return !1;
    }
    return !1;
  }, H = (s) => {
    if (n.autoRange || n.weekPicker) {
      if (d.value) {
        if (n.hideOffsetDates && !s.current)
          return !1;
        const S = Gt(U(d.value), n.timezone, n.weekStart);
        return n.weekPicker ? ye(S[0], s.value) : ye(d.value, s.value);
      }
      return !1;
    }
    return !1;
  }, N = (s) => Qt(e.value, d.value, s.value), k = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1, O = () => n.modelAuto ? Ca(n.internalModelValue) : !0, R = (s) => {
    if (Array.isArray(e.value) && e.value.length || n.weekPicker)
      return !1;
    const S = n.range ? !j(s) && !j(s, !1) : !0;
    return !r(s.value) && !G(s) && !(!s.current && n.hideOffsetDates) && S;
  }, J = (s) => n.range ? n.modelAuto ? k() && G(s) : !1 : G(s), re = (s) => {
    var S;
    return t.value ? typeof t.value == "function" ? t.value(s.value) : l(
      s.value,
      (S = n.arrMapValues) != null && S.highlightedDates ? n.arrMapValues.highlightedDates : t.value.dates
    ) : !1;
  }, C = (s) => {
    const S = r(s.value);
    return S && (typeof t.value == "function" ? !t.value(s.value, S) : !t.value.options.highlightDisabled);
  }, ne = (s) => {
    var S;
    return typeof t.value == "function" ? t.value(s.value) : (S = t.value.weekdays) == null ? void 0 : S.includes(s.value.getDay());
  }, m = (s) => (n.range || n.weekPicker) && (!(a.value.count > 0) || s.current) && O() && !(!s.current && n.hideOffsetDates) && !G(s) ? N(s) : !1, T = (s) => {
    const { isRangeStart: S, isRangeEnd: o } = F(s), Q = n.range ? S || o : !1;
    return {
      dp__cell_offset: !s.current,
      dp__pointer: !n.disabled && !(!s.current && n.hideOffsetDates) && !r(s.value),
      dp__cell_disabled: r(s.value),
      dp__cell_highlight: !C(s) && (re(s) || ne(s)) && !J(s) && !Q,
      dp__cell_highlight_active: !C(s) && (re(s) || ne(s)) && J(s),
      dp__today: !n.noToday && ye(s.value, p.value) && s.current
    };
  }, Z = (s) => ({
    dp__active_date: J(s),
    dp__date_hover: R(s)
  }), f = (s) => Object.assign({}, w(s), z(s), {
    dp__range_between_week: m(s) && n.weekPicker
  }), F = (s) => {
    const S = a.value.count > 0 ? s.current && j(s) && O() : j(s) && O(), o = a.value.count > 0 ? s.current && j(s, !1) && O() : j(s, !1) && O();
    return { isRangeStart: S, isRangeEnd: o };
  }, w = (s) => {
    const { isRangeStart: S, isRangeEnd: o } = F(s);
    return {
      dp__range_start: S,
      dp__range_end: o,
      dp__range_between: m(s) && !n.weekPicker,
      dp__date_hover_start: A(R(s), s, !0),
      dp__date_hover_end: A(R(s), s, !1)
    };
  }, z = (s) => Object.assign({}, w(s), {
    dp__cell_auto_range: g(s),
    dp__cell_auto_range_start: H(s),
    dp__cell_auto_range_end: X(s)
  }), y = (s) => n.range ? n.autoRange ? z(s) : n.modelAuto ? Object.assign({}, Z(s), w(s)) : w(s) : n.weekPicker ? f(s) : Z(s);
  return {
    setHoverDate: h,
    clearHoverDate: P,
    getDayClassData: (s) => n.hideOffsetDates && !s.current ? {} : Object.assign({}, T(s), y(s), {
      [n.dayClass ? n.dayClass(s.value) : ""]: !0,
      [n.calendarCellClassName]: !!n.calendarCellClassName
    })
  };
}, Tt = (e) => {
  const { defaultedFilters: n, defaultedHighlight: a } = $e(e), t = () => {
    if (e.timezone)
      return e.timezone;
    if (e.utc)
      return "UTC";
  }, r = (m) => {
    const T = Le(l(U(m))).toISOString(), [Z] = T.split("T");
    return Z;
  }, l = (m) => e.utc === "preserve" ? Ya(m, t()) : Ve(m, t()), d = (m) => {
    var S;
    const T = e.maxDate ? Ye(l(m), l(U(e.maxDate))) : !1, Z = e.minDate ? _e(l(m), l(U(e.minDate))) : !1, f = b(
      l(m),
      (S = e.arrMapValues) != null && S.disabledDates ? e.arrMapValues.disabledDates : e.disabledDates
    ), w = n.value.months.map((o) => +o).includes(ge(m)), z = e.disabledWeekDays.length ? e.disabledWeekDays.some((o) => +o === tr(m)) : !1, y = I(m), u = fe(m), s = u < +e.yearRange[0] || u > +e.yearRange[1];
    return !(T || Z || f || w || s || z || y);
  }, p = (m, T) => _e(...at(e.minDate, m, T)) || ye(...at(e.minDate, m, T)), h = (m, T) => Ye(...at(e.maxDate, m, T)) || ye(...at(e.maxDate, m, T)), P = (m, T, Z) => {
    let f = !1;
    return e.maxDate && Z && h(m, T) && (f = !0), e.minDate && !Z && p(m, T) && (f = !0), f;
  }, b = (m, T) => m ? T instanceof Map ? !!T.get(r(m)) : Array.isArray(T) ? T.some((Z) => ye(l(U(Z)), l(m))) : T ? T(U(JSON.parse(JSON.stringify(m)))) : !1 : !0, $ = (m, T, Z, f) => {
    let F = !1;
    return f ? e.minDate && e.maxDate ? F = P(m, T, Z) : (e.minDate && p(m, T) || e.maxDate && h(m, T)) && (F = !0) : F = !0, F;
  }, I = (m) => {
    var T, Z, f, F, w;
    return Array.isArray(e.allowedDates) && !((T = e.allowedDates) != null && T.length) ? !0 : (Z = e.arrMapValues) != null && Z.allowedDates ? !b(m, (f = e.arrMapValues) == null ? void 0 : f.allowedDates) : (F = e.allowedDates) != null && F.length ? !((w = e.allowedDates) != null && w.some((z) => ye(l(U(z)), l(m)))) : !1;
  }, j = (m) => !d(m), A = (m) => e.noDisabledRange ? !ka({ start: m[0], end: m[1] }).some((Z) => j(Z)) : !0, G = (m, T, Z = 0) => {
    if (Array.isArray(T) && T[Z]) {
      const f = nr(m, T[Z]), F = Na(T[Z], m), w = F.length === 1 ? 0 : F.filter((y) => j(y)).length, z = Math.abs(f) - w;
      if (e.minRange && e.maxRange)
        return z >= +e.minRange && z <= +e.maxRange;
      if (e.minRange)
        return z >= +e.minRange;
      if (e.maxRange)
        return z <= +e.maxRange;
    }
    return !0;
  }, X = (m) => new Map(m.map((T) => [r(T), !0])), g = (m) => Array.isArray(m) && m.length > 0, H = () => {
    const m = {
      disabledDates: null,
      allowedDates: null,
      highlightedDates: null
    };
    return g(e.allowedDates) && (m.allowedDates = X(e.allowedDates)), typeof a.value != "function" && g(a.value.dates) && (m.highlightedDates = X(a.value.dates)), g(e.disabledDates) && (m.disabledDates = X(e.disabledDates)), m;
  }, N = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, k = (m) => Array.isArray(m) ? [m[0] ? bn(m[0]) : null, m[1] ? bn(m[1]) : null] : bn(m), O = (m, T, Z) => m.find(
    (f) => +f.hours === qe(T) && f.minutes === "*" ? !0 : +f.minutes === Je(T) && +f.hours === qe(T)
  ) && Z, R = (m, T, Z) => {
    const [f, F] = m, [w, z] = T;
    return !O(f, w, Z) && !O(F, z, Z) && Z;
  }, J = (m, T) => {
    const Z = Array.isArray(T) ? T : [T];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? R(e.disabledTimes, Z, m) : !Z.some((f) => O(e.disabledTimes, f, m)) : m;
  }, re = (m, T) => {
    const Z = Array.isArray(T) ? [gt(T[0]), T[1] ? gt(T[1]) : void 0] : gt(T), f = !e.disabledTimes(Z);
    return m && f;
  }, C = (m, T) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? J(T, m) : re(T, m) : T;
  return {
    isDisabled: j,
    validateDate: d,
    validateMonthYearInRange: $,
    isDateRangeAllowed: A,
    checkMinMaxRange: G,
    matchDate: b,
    mapDatesArrToMap: H,
    isValidTime: (m) => {
      let T = !0;
      if (!m || N())
        return !0;
      const Z = !e.minDate && !e.maxDate ? k(m) : m;
      return (e.maxTime || e.maxDate) && (T = va(e.maxTime, e.maxDate, "max", Te(Z), T)), (e.minTime || e.minDate) && (T = va(e.minTime, e.minDate, "min", Te(Z), T)), C(m, T);
    }
  };
}, Xt = () => {
  const e = q(() => (t, r) => t == null ? void 0 : t.includes(r)), n = q(() => (t, r) => t.count ? t.solo ? !0 : r === 0 : !0), a = q(() => (t, r) => t.count ? t.solo ? !0 : r === t.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: n, showRightIcon: a };
}, cl = (e, n, a) => {
  const t = x(0), r = It({
    [yt.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [yt.calendar]: !1,
    [yt.header]: !1
  }), l = (...b) => {
    var $;
    ($ = e.flow) != null && $.length && (r[b] = !0, Object.keys(r).filter((I) => !r[I]).length || P());
  }, d = () => {
    var b;
    (b = e.flow) != null && b.length && t.value !== -1 && (t.value += 1, n("flow-step", t.value), P());
  }, p = () => {
    t.value = -1;
  }, h = (b, $, ...I) => {
    e.flow[t.value] === b && a.value && a.value[$](...I);
  }, P = () => {
    h(Xe.month, "toggleMonthPicker", !0), h(Xe.year, "toggleYearPicker", !0), h(Xe.calendar, "toggleTimePicker", !1, !0), h(Xe.time, "toggleTimePicker", !0, !0);
    const b = e.flow[t.value];
    (b === Xe.hours || b === Xe.minutes || b === Xe.seconds) && h(b, "toggleTimePicker", !0, !0, b);
  };
  return { childMount: l, updateFlowStep: d, resetFlow: p, flowStep: t };
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
    type: [Array, Function, Object],
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
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 }
}, Ze = Object.assign(Jt, {
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  arrMapValues: { type: Object, default: () => ({}) },
  noOverlayFocus: { type: Boolean, default: !1 }
}), fl = {
  key: 1,
  class: "dp__input_wrap"
}, vl = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid", "onKeydown"], ml = {
  key: 2,
  class: "dp__clear_icon"
}, gl = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: Object.assign(
    {
      isMenuOpen: { type: Boolean, default: !1 },
      inputValue: { type: String, default: "" }
    },
    Jt
  ),
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
      defaultedInline: d,
      defaultedConfig: p,
      getDefaultPattern: h,
      getDefaultStartTime: P
    } = $e(t), b = x(), $ = x(null), I = x(!1), j = x(!1), A = q(
      () => ({
        dp__pointer: !t.disabled && !t.readonly && !r.value.enabled,
        dp__disabled: t.disabled,
        dp__input_readonly: !r.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !t.hideInputIcon,
        dp__input_valid: !!t.state,
        dp__input_invalid: t.state === !1,
        dp__input_focus: I.value || t.isMenuOpen,
        dp__input_reg: !r.value.enabled,
        [t.inputClassName]: !!t.inputClassName
      })
    ), G = () => {
      a("set-input-date", null), t.autoApply && (a("set-empty-date"), b.value = null);
    }, X = (f) => {
      const F = P();
      return Ur(
        f,
        r.value.format == null ? h() : r.value.format,
        F ? Ia({}, t.enableSeconds) : F,
        t.inputValue,
        j.value
      );
    }, g = (f) => {
      const { rangeSeparator: F } = r.value, [w, z] = f.split(`${F}`);
      if (w) {
        const y = X(w.trim()), u = z ? X(z.trim()) : null, s = y && u ? [y, u] : [y];
        b.value = y ? s : null;
      }
    }, H = () => {
      j.value = !0;
    }, N = (f) => {
      if (t.range)
        g(f);
      else if (t.multiDates) {
        const F = f.split(";");
        b.value = F.map((w) => X(w.trim())).filter((w) => w);
      } else
        b.value = X(f);
    }, k = (f) => {
      var w;
      const F = typeof f == "string" ? f : (w = f.target) == null ? void 0 : w.value;
      F !== "" ? (r.value.openMenu && !t.isMenuOpen && a("open"), N(F), a("set-input-date", b.value)) : G(), j.value = !1, a("update:input-value", F);
    }, O = (f) => {
      r.value.enabled ? (N(f.target.value), r.value.enterSubmit && Rn(b.value) && t.inputValue !== "" ? (a("set-input-date", b.value, !0), b.value = null) : r.value.enterSubmit && t.inputValue === "" && (b.value = null, a("clear"))) : re(f);
    }, R = (f) => {
      r.value.enabled && r.value.tabSubmit && N(f.target.value), r.value.tabSubmit && Rn(b.value) && t.inputValue !== "" ? (a("set-input-date", b.value, !0), b.value = null) : r.value.tabSubmit && t.inputValue === "" && (b.value = null, a("clear"));
    }, J = () => {
      var f;
      I.value = !0, a("focus"), r.value.enabled && r.value.selectOnFocus && ((f = $.value) == null || f.select());
    }, re = (f) => {
      f.preventDefault(), lt(f, p.value, !0), r.value.enabled && r.value.openMenu && !d.value.input && !t.isMenuOpen ? a("open") : r.value.enabled || a("toggle");
    }, C = () => {
      a("real-blur"), I.value = !1, (!t.isMenuOpen || d.value.enabled && d.value.input) && a("blur"), t.autoApply && r.value.enabled && b.value && !t.isMenuOpen && (a("set-input-date", b.value), a("select-date"), b.value = null);
    }, ne = (f) => {
      lt(f, p.value, !0), a("clear");
    }, m = (f) => {
      if (!r.value.enabled) {
        if (f.code === "Tab")
          return;
        f.preventDefault();
      }
    };
    return n({
      focusInput: () => {
        var f;
        (f = $.value) == null || f.focus({ preventScroll: !0 });
      },
      setParsedDate: (f) => {
        b.value = f;
      }
    }), (f, F) => {
      var w;
      return M(), L("div", { onClick: re }, [
        f.$slots.trigger && !f.$slots["dp-input"] && !v(d).enabled ? le(f.$slots, "trigger", { key: 0 }) : K("", !0),
        !f.$slots.trigger && (!v(d).enabled || v(d).input) ? (M(), L("div", fl, [
          f.$slots["dp-input"] && !f.$slots.trigger && !v(d).enabled ? le(f.$slots, "dp-input", {
            key: 0,
            value: f.inputValue,
            isMenuOpen: f.isMenuOpen,
            onInput: k,
            onEnter: O,
            onTab: R,
            onClear: ne,
            onBlur: C,
            onKeypress: m,
            onPaste: H
          }) : K("", !0),
          f.$slots["dp-input"] ? K("", !0) : (M(), L("input", {
            key: 1,
            ref_key: "inputRef",
            ref: $,
            id: f.uid ? `dp-input-${f.uid}` : void 0,
            name: f.name,
            class: he(A.value),
            inputmode: v(r).enabled ? "text" : "none",
            placeholder: f.placeholder,
            disabled: f.disabled,
            readonly: f.readonly,
            required: f.required,
            value: f.inputValue,
            autocomplete: f.autocomplete,
            "aria-label": (w = v(l)) == null ? void 0 : w.input,
            "aria-disabled": f.disabled || void 0,
            "aria-invalid": f.state === !1 ? !0 : void 0,
            onInput: k,
            onKeydown: [
              oe(O, ["enter"]),
              oe(R, ["tab"]),
              m
            ],
            onBlur: C,
            onFocus: J,
            onKeypress: m,
            onPaste: H
          }, null, 42, vl)),
          se("div", {
            onClick: F[2] || (F[2] = (z) => a("toggle"))
          }, [
            f.$slots["input-icon"] && !f.hideInputIcon ? (M(), L("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: F[0] || (F[0] = (z) => a("toggle"))
            }, [
              le(f.$slots, "input-icon")
            ])) : K("", !0),
            !f.$slots["input-icon"] && !f.hideInputIcon && !f.$slots["dp-input"] ? (M(), ve(v(Bt), {
              key: 1,
              onClick: F[1] || (F[1] = (z) => a("toggle")),
              class: "dp__input_icon dp__input_icons"
            })) : K("", !0)
          ]),
          f.$slots["clear-icon"] && f.inputValue && f.clearable && !f.disabled && !f.readonly ? (M(), L("span", ml, [
            le(f.$slots, "clear-icon", { clear: ne })
          ])) : K("", !0),
          f.clearable && !f.$slots["clear-icon"] && f.inputValue && !f.disabled && !f.readonly ? (M(), ve(v(Ta), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: F[3] || (F[3] = pe((z) => ne(z), ["prevent"]))
          })) : K("", !0)
        ])) : K("", !0)
      ]);
    };
  }
}), yl = ["title"], hl = { class: "dp__action_buttons" }, pl = ["onKeydown", "disabled"], bl = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: Object.assign(
    {
      menuMount: { type: Boolean, default: !1 },
      calendarWidth: { type: Number, default: 0 }
    },
    Ze
  ),
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: n }) {
    const a = e, {
      defaultedActionRow: t,
      defaultedPreviewFormat: r,
      defaultedMultiCalendars: l,
      defaultedTextInput: d,
      defaultedInline: p,
      getDefaultPattern: h
    } = $e(a), { isValidTime: P } = Tt(a), { buildMatrix: b } = ut(), $ = x(null), I = x(null);
    ze(() => {
      a.arrowNavigation && b([Ae($), Ae(I)], "actionRow");
    });
    const j = q(() => a.range && !a.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), A = q(() => !G.value || !X.value || !j.value), G = q(() => !a.enableTimePicker || a.ignoreTimeValidation ? !0 : P(a.internalModelValue)), X = q(() => a.monthPicker ? a.range && Array.isArray(a.internalModelValue) ? !a.internalModelValue.filter((ne) => !J(ne)).length : J(a.internalModelValue) : !0), g = () => {
      const C = r.value;
      return a.timePicker || a.monthPicker, C(Te(a.internalModelValue));
    }, H = () => {
      const C = a.internalModelValue;
      return l.value.count > 0 ? `${N(C[0])} - ${N(C[1])}` : [N(C[0]), N(C[1])];
    }, N = (C) => Ea(
      C,
      r.value,
      a.formatLocale,
      d.value.rangeSeparator,
      a.modelAuto,
      h()
    ), k = q(() => !a.internalModelValue || !a.menuMount ? "" : typeof r.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? H() : a.multiDates ? a.internalModelValue.map((C) => `${N(C)}`) : a.modelAuto ? `${N(a.internalModelValue[0])}` : `${N(a.internalModelValue[0])} -` : N(a.internalModelValue) : g()), O = () => a.multiDates ? "; " : " - ", R = q(
      () => Array.isArray(k.value) ? k.value.join(O()) : k.value
    ), J = (C) => {
      if (!a.monthPicker)
        return !0;
      let ne = !0;
      const m = U(Ke(C));
      if (a.minDate && a.maxDate) {
        const T = U(Ke(a.minDate)), Z = U(Ke(a.maxDate));
        return Ye(m, T) && _e(m, Z) || ye(m, T) || ye(m, Z);
      }
      if (a.minDate) {
        const T = U(Ke(a.minDate));
        ne = Ye(m, T) || ye(m, T);
      }
      if (a.maxDate) {
        const T = U(Ke(a.maxDate));
        ne = _e(m, T) || ye(m, T);
      }
      return ne;
    }, re = () => {
      G.value && X.value && j.value ? n("select-date") : n("invalid-select");
    };
    return (C, ne) => (M(), L("div", {
      class: "dp__action_row",
      style: Ge(C.calendarWidth ? { width: `${C.calendarWidth}px` } : {})
    }, [
      C.$slots["action-row"] ? le(C.$slots, "action-row", Se(Ce({ key: 0 }, {
        internalModelValue: C.internalModelValue,
        disabled: A.value,
        selectDate: () => C.$emit("select-date"),
        closePicker: () => C.$emit("close-picker")
      }))) : (M(), L(de, { key: 1 }, [
        v(t).showPreview ? (M(), L("div", {
          key: 0,
          class: "dp__selection_preview",
          title: R.value
        }, [
          C.$slots["action-preview"] ? le(C.$slots, "action-preview", {
            key: 0,
            value: C.internalModelValue
          }) : K("", !0),
          C.$slots["action-preview"] ? K("", !0) : (M(), L(de, { key: 1 }, [
            et(Re(R.value), 1)
          ], 64))
        ], 8, yl)) : K("", !0),
        se("div", hl, [
          C.$slots["action-buttons"] ? le(C.$slots, "action-buttons", {
            key: 0,
            value: C.internalModelValue
          }) : K("", !0),
          C.$slots["action-buttons"] ? K("", !0) : (M(), L(de, { key: 1 }, [
            !v(p).enabled && v(t).showCancel ? (M(), L("button", {
              key: 0,
              type: "button",
              ref_key: "cancelButtonRef",
              ref: $,
              class: "dp__action_button dp__action_cancel",
              onClick: ne[0] || (ne[0] = (m) => C.$emit("close-picker")),
              onKeydown: [
                ne[1] || (ne[1] = oe((m) => C.$emit("close-picker"), ["enter"])),
                ne[2] || (ne[2] = oe((m) => C.$emit("close-picker"), ["space"]))
              ]
            }, Re(C.cancelText), 545)) : K("", !0),
            v(t).showNow ? (M(), L("button", {
              key: 1,
              type: "button",
              ref_key: "cancelButtonRef",
              ref: $,
              class: "dp__action_button dp__action_cancel",
              onClick: ne[3] || (ne[3] = (m) => C.$emit("select-now")),
              onKeydown: [
                ne[4] || (ne[4] = oe((m) => C.$emit("select-now"), ["enter"])),
                ne[5] || (ne[5] = oe((m) => C.$emit("select-now"), ["space"]))
              ]
            }, Re(C.nowButtonLabel), 545)) : K("", !0),
            v(t).showSelect ? (M(), L("button", {
              key: 2,
              type: "button",
              class: "dp__action_button dp__action_select",
              onKeydown: [
                oe(re, ["enter"]),
                oe(re, ["space"])
              ],
              onClick: re,
              disabled: A.value,
              ref_key: "selectButtonRef",
              ref: I
            }, Re(C.selectText), 41, pl)) : K("", !0)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), kl = ["onKeydown"], wl = { class: "dp__selection_grid_header" }, Dl = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], Ml = ["aria-label", "onKeydown"], Ht = /* @__PURE__ */ Oe({
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
    const t = e, { setSelectionGrid: r, buildMultiLevelMatrix: l, setMonthPicker: d } = ut(), { defaultedAriaLabels: p, defaultedTextInput: h, defaultedConfig: P } = $e(
      t
    ), { hideNavigationButtons: b } = Xt(), $ = x(!1), I = x(null), j = x(null), A = x([]), G = x(), X = x(null), g = x(0), H = x(null);
    Ga(() => {
      I.value = null;
    }), ze(() => {
      it().then(() => ne()), t.noOverlayFocus || k(), N(!0);
    }), Yn(() => N(!1));
    const N = (y) => {
      var u;
      t.arrowNavigation && ((u = t.headerRefs) != null && u.length ? d(y) : r(y));
    }, k = () => {
      var u;
      const y = Ae(j);
      y && (h.value.enabled || (I.value ? (u = I.value) == null || u.focus({ preventScroll: !0 }) : y.focus({ preventScroll: !0 })), $.value = y.clientHeight < y.scrollHeight);
    }, O = q(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !t.useRelative,
        "dp--overlay-relative": t.useRelative
      })
    ), R = q(
      () => t.useRelative ? { height: `${t.height}px`, width: "260px" } : void 0
    ), J = q(() => ({
      dp__overlay_col: !0
    })), re = q(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: $.value,
        dp__button_bottom: t.isLast
      })
    ), C = q(() => {
      var y, u;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((y = t.items) == null ? void 0 : y.length) <= 6,
        dp__container_block: ((u = t.items) == null ? void 0 : u.length) > 6
      };
    });
    st(
      () => t.items,
      () => ne(),
      { deep: !0 }
    );
    const ne = () => {
      it().then(() => {
        const y = Ae(I), u = Ae(j), s = Ae(X), S = Ae(H), o = s ? s.getBoundingClientRect().height : 0;
        u && (u.getBoundingClientRect().height ? g.value = u.getBoundingClientRect().height - o : g.value = P.value.modeHeight - o), y && S && (S.scrollTop = y.offsetTop - S.offsetTop - (g.value / 2 - y.getBoundingClientRect().height) - o);
      });
    }, m = (y) => {
      y.disabled || a("selected", y.value);
    }, T = () => {
      a("toggle"), a("reset-flow");
    }, Z = () => {
      t.escClose && T();
    }, f = (y, u, s, S) => {
      y && (u.active && (I.value = y), t.arrowNavigation && (Array.isArray(A.value[s]) ? A.value[s][S] = y : A.value[s] = [y], F()));
    }, F = () => {
      var u, s;
      const y = (u = t.headerRefs) != null && u.length ? [t.headerRefs].concat(A.value) : A.value.concat([t.skipButtonRef ? [] : [X.value]]);
      l(Te(y), (s = t.headerRefs) != null && s.length ? "monthPicker" : "selectionGrid");
    }, w = (y) => {
      t.arrowNavigation || lt(y, P.value, !0);
    }, z = (y) => {
      G.value = y, a("hover-value", y);
    };
    return n({ focusGrid: k }), (y, u) => {
      var s;
      return M(), L("div", {
        ref_key: "gridWrapRef",
        ref: j,
        class: he(O.value),
        style: Ge(R.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          oe(pe(Z, ["prevent"]), ["esc"]),
          u[0] || (u[0] = oe(pe((S) => w(S), ["prevent"]), ["left"])),
          u[1] || (u[1] = oe(pe((S) => w(S), ["prevent"]), ["up"])),
          u[2] || (u[2] = oe(pe((S) => w(S), ["prevent"]), ["down"])),
          u[3] || (u[3] = oe(pe((S) => w(S), ["prevent"]), ["right"]))
        ]
      }, [
        se("div", {
          class: he(C.value),
          ref_key: "containerRef",
          ref: H,
          role: "grid",
          style: Ge({ height: `${g.value}px` })
        }, [
          se("div", wl, [
            le(y.$slots, "header")
          ]),
          y.$slots.overlay ? le(y.$slots, "overlay", { key: 0 }) : (M(!0), L(de, { key: 1 }, De(y.items, (S, o) => (M(), L("div", {
            class: he(["dp__overlay_row", { dp__flex_row: y.items.length >= 3 }]),
            key: o,
            role: "row"
          }, [
            (M(!0), L(de, null, De(S, (Q, ae) => (M(), L("div", {
              role: "gridcell",
              class: he(J.value),
              key: Q.value,
              "aria-selected": Q.active,
              "aria-disabled": Q.disabled || void 0,
              ref_for: !0,
              ref: (c) => f(c, Q, o, ae),
              tabindex: "0",
              onClick: (c) => m(Q),
              onKeydown: [
                oe(pe((c) => m(Q), ["prevent"]), ["enter"]),
                oe(pe((c) => m(Q), ["prevent"]), ["space"])
              ],
              onMouseover: (c) => z(Q.value)
            }, [
              se("div", {
                class: he(Q.className)
              }, [
                y.$slots.item ? le(y.$slots, "item", {
                  key: 0,
                  item: Q
                }) : K("", !0),
                y.$slots.item ? K("", !0) : (M(), L(de, { key: 1 }, [
                  et(Re(Q.text), 1)
                ], 64))
              ], 2)
            ], 42, Dl))), 128))
          ], 2))), 128))
        ], 6),
        y.$slots["button-icon"] ? zt((M(), L("button", {
          key: 0,
          type: "button",
          "aria-label": (s = v(p)) == null ? void 0 : s.toggleOverlay,
          class: he(re.value),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: X,
          onClick: T,
          onKeydown: [
            oe(T, ["enter"]),
            oe(T, ["tab"])
          ]
        }, [
          le(y.$slots, "button-icon")
        ], 42, Ml)), [
          [Wt, !v(b)(y.hideNavigation, y.type)]
        ]) : K("", !0)
      ], 46, kl);
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
    return (r, l) => (M(), L("div", {
      class: he({
        dp__menu_inner: !r.stretch,
        "dp--menu--inner-stretched": r.stretch,
        dp__flex_display: r.multiCalendars > 0
      })
    }, [
      (M(!0), L(de, null, De(a.value, (d, p) => (M(), L("div", {
        key: d,
        class: he(t.value)
      }, [
        le(r.$slots, "default", {
          instance: d,
          index: p
        })
      ], 2))), 128))
    ], 2));
  }
}), $l = ["aria-label", "aria-disabled"], Ct = /* @__PURE__ */ Oe({
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
    const a = x(null);
    return ze(() => n("set-ref", a)), (t, r) => (M(), L("button", {
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      onClick: r[0] || (r[0] = (l) => t.$emit("activate")),
      onKeydown: [
        r[1] || (r[1] = oe(pe((l) => t.$emit("activate"), ["prevent"]), ["enter"])),
        r[2] || (r[2] = oe(pe((l) => t.$emit("activate"), ["prevent"]), ["space"]))
      ],
      tabindex: "0",
      "aria-label": t.ariaLabel,
      "aria-disabled": t.disabled || void 0,
      ref_key: "elRef",
      ref: a
    }, [
      se("span", {
        class: he(["dp__inner_nav", { dp__inner_nav_disabled: t.disabled }])
      }, [
        le(t.$slots, "default")
      ], 2)
    ], 40, $l));
  }
}), Tl = { class: "dp--year-mode-picker" }, Al = ["aria-label"], ja = /* @__PURE__ */ Oe({
  __name: "YearModePicker",
  props: Object.assign(Ze, {
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  }),
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: n }) {
    const a = e, { showRightIcon: t, showLeftIcon: r } = Xt(), { defaultedConfig: l, defaultedMultiCalendars: d, defaultedAriaLabels: p, defaultedTransitions: h } = $e(a), { showTransition: P, transitionName: b } = Et(h), $ = (A = !1, G) => {
      n("toggle-year-picker", { flow: A, show: G });
    }, I = (A) => {
      n("year-select", A);
    }, j = (A = !1) => {
      n("handle-year", A);
    };
    return (A, G) => {
      var X, g, H;
      return M(), L("div", Tl, [
        v(r)(v(d), A.instance) ? (M(), ve(Ct, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (X = v(p)) == null ? void 0 : X.prevYear,
          disabled: A.isDisabled(!1),
          onActivate: G[0] || (G[0] = (N) => j(!1))
        }, {
          default: ue(() => [
            A.$slots["arrow-left"] ? le(A.$slots, "arrow-left", { key: 0 }) : K("", !0),
            A.$slots["arrow-left"] ? K("", !0) : (M(), ve(v(En), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : K("", !0),
        se("button", {
          class: "dp__btn dp--year-select",
          type: "button",
          ref: "mpYearButtonRef",
          "aria-label": (g = v(p)) == null ? void 0 : g.openYearsOverlay,
          onClick: G[1] || (G[1] = () => $(!1)),
          onKeydown: G[2] || (G[2] = oe(() => $(!1), ["enter"]))
        }, [
          A.$slots.year ? le(A.$slots, "year", {
            key: 0,
            year: A.year
          }) : K("", !0),
          A.$slots.year ? K("", !0) : (M(), L(de, { key: 1 }, [
            et(Re(A.year), 1)
          ], 64))
        ], 40, Al),
        v(t)(v(d), A.instance) ? (M(), ve(Ct, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (H = v(p)) == null ? void 0 : H.nextYear,
          disabled: A.isDisabled(!0),
          onActivate: G[3] || (G[3] = (N) => j(!0))
        }, {
          default: ue(() => [
            A.$slots["arrow-right"] ? le(A.$slots, "arrow-right", { key: 0 }) : K("", !0),
            A.$slots["arrow-right"] ? K("", !0) : (M(), ve(v(Fn), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : K("", !0),
        Ue($t, {
          name: v(b)(A.showYearPicker),
          css: v(P)
        }, {
          default: ue(() => [
            A.showYearPicker ? (M(), ve(Ht, {
              key: 0,
              items: A.items,
              "text-input": A.textInput,
              "esc-close": A.escClose,
              config: A.config,
              onToggle: $,
              onSelected: G[4] || (G[4] = (N) => I(N)),
              "is-last": A.autoApply && !v(l).keepActionRow,
              type: "year"
            }, Be({
              "button-icon": ue(() => [
                A.$slots["calendar-icon"] ? le(A.$slots, "calendar-icon", { key: 0 }) : K("", !0),
                A.$slots["calendar-icon"] ? K("", !0) : (M(), ve(v(Bt), { key: 1 }))
              ]),
              _: 2
            }, [
              A.$slots["year-overlay-value"] ? {
                name: "item",
                fn: ue(({ item: N }) => [
                  le(A.$slots, "year-overlay-value", {
                    text: N.text,
                    value: N.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last"])) : K("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), en = (e, n, a) => {
  if (n.value && Array.isArray(n.value))
    if (n.value.some((t) => ye(e, t))) {
      const t = n.value.filter((r) => !ye(r, e));
      n.value = t.length ? t : null;
    } else
      (a && +a > n.value.length || !a) && n.value.push(e);
  else
    n.value = [e];
}, Gn = (e, n, a) => {
  let t = e.value ? e.value.slice() : [];
  return t.length === 2 && t[1] !== null && (t = []), t.length ? _e(n, t[0]) ? (t.unshift(n), a("range-start", t[0]), a("range-start", t[1])) : (t[1] = n, a("range-end", n)) : (t = [n], a("range-start", n)), e.value = t, t;
}, tn = (e, n, a, t) => {
  e[0] && e[1] && a && n("auto-apply"), e[0] && !e[1] && t && a && n("auto-apply");
}, Va = ({
  multiCalendars: e,
  highlight: n,
  calendars: a,
  modelValue: t,
  props: r,
  year: l,
  month: d,
  emit: p
}) => {
  const h = q(() => Wn(r.yearRange, r.reverseYears)), P = x([!1]), b = q(() => (k, O) => {
    const R = we(Ke(/* @__PURE__ */ new Date()), {
      month: d.value(k),
      year: l.value(k)
    });
    return Ba(R, r.maxDate, r.minDate, r.preventMinMaxNavigation, O);
  }), $ = () => {
    for (let k = 0; k < e.value.count; k++)
      if (k === 0)
        a.value[k] = a.value[0];
      else {
        const O = we(U(), a.value[k - 1]);
        a.value[k] = { month: ge(O), year: fe(Da(O, 1)) };
      }
  }, I = (k) => {
    if (!k)
      return $();
    const O = we(U(), a.value[k]);
    return a.value[0].year = fe(Ma(O, e.value.count - 1)), $();
  }, j = (k) => r.focusStartDate ? k[0] : k[1] ? k[1] : k[0], A = () => {
    if (t.value) {
      const k = Array.isArray(t.value) ? j(t.value) : t.value;
      a.value[0] = { month: ge(k), year: fe(k) };
    }
  };
  ze(() => {
    A(), e.value.count && $();
  });
  const G = (k, O) => {
    a.value[O].year = k, e.value.count && !e.value.solo && I(O);
  }, X = q(() => (k) => Dt(h.value, (O) => {
    const R = l.value(k) === O.value, J = Nt(O.value, Mt(r.minDate), Mt(r.maxDate)), re = Kn(n.value, O.value);
    return { active: R, disabled: J, highlighted: re };
  })), g = (k, O) => {
    G(k, O), N(O);
  }, H = (k, O = !1) => {
    if (!b.value(k, O)) {
      const R = O ? l.value(k) + 1 : l.value(k) - 1;
      G(R, k);
    }
  }, N = (k, O = !1, R) => {
    O || p("reset-flow"), R !== void 0 ? P.value[k] = R : P.value[k] = !P.value[k], P.value || p("overlay-closed");
  };
  return {
    isDisabled: b,
    groupedYears: X,
    showYearPicker: P,
    selectYear: G,
    toggleYearPicker: N,
    handleYearSelect: g,
    handleYear: H
  };
}, Sl = (e, n) => {
  const { defaultedMultiCalendars: a, defaultedAriaLabels: t, defaultedTransitions: r, defaultedConfig: l, defaultedHighlight: d } = $e(e), { modelValue: p, year: h, month: P, calendars: b } = Ft(e, n), $ = q(() => _a(e.formatLocale, e.locale, e.monthNameFormat)), I = x(null), {
    selectYear: j,
    groupedYears: A,
    showYearPicker: G,
    toggleYearPicker: X,
    handleYearSelect: g,
    handleYear: H,
    isDisabled: N
  } = Va({
    modelValue: p,
    multiCalendars: a,
    highlight: d,
    calendars: b,
    year: h,
    month: P,
    props: e,
    emit: n
  }), k = (y) => y ? { month: ge(y), year: fe(y) } : { month: null, year: null }, O = () => p.value ? Array.isArray(p.value) ? p.value.map((y) => k(y)) : k(p.value) : k(), R = (y, u) => {
    const s = b.value[y], S = O();
    return Array.isArray(S) ? S.some((o) => o.year === (s == null ? void 0 : s.year) && o.month === u) : (s == null ? void 0 : s.year) === S.year && u === S.month;
  }, J = (y, u, s) => {
    var o, Q;
    const S = O();
    return Array.isArray(S) ? h.value(u) === ((o = S[s]) == null ? void 0 : o.year) && y === ((Q = S[s]) == null ? void 0 : Q.month) : !1;
  }, re = (y, u) => {
    if (e.range) {
      const s = O();
      if (Array.isArray(p.value) && Array.isArray(s)) {
        const S = J(y, u, 0) || J(y, u, 1), o = xe(Ke(U()), y, h.value(u));
        return Qt(p.value, I.value, o) && !S;
      }
      return !1;
    }
    return !1;
  }, C = q(() => (y) => Dt($.value, (u) => {
    const s = R(y, u.value), S = Nt(
      u.value,
      Oa(h.value(y), e.minDate),
      Ra(h.value(y), e.maxDate)
    ) || qr(e.disabledDates, h.value(y)).includes(u.value), o = re(u.value, y), Q = Fa(d.value, u.value, h.value(y));
    return { active: s, disabled: S, isBetween: o, highlighted: Q };
  })), ne = (y, u) => xe(Ke(U()), y, h.value(u)), m = (y, u) => {
    const s = p.value ? p.value : Ke(/* @__PURE__ */ new Date());
    p.value = xe(s, y, h.value(u)), n("auto-apply");
  }, T = (y, u) => {
    const s = Gn(p, ne(y, u), n);
    tn(s, n, e.autoApply, e.modelAuto);
  }, Z = (y, u) => {
    en(ne(y, u), p, e.multiDatesLimit), n("auto-apply", !0);
  }, f = (y, u) => (b.value[u].month = y, w(u, b.value[u].year, y), e.multiDates ? Z(y, u) : e.range ? T(y, u) : m(y, u)), F = (y, u) => {
    j(y, u), w(u, y, null);
  }, w = (y, u, s) => {
    let S = s;
    if (!S) {
      const o = O();
      S = Array.isArray(o) ? o[y].month : o.month;
    }
    n("update-month-year", { instance: y, year: u, month: S });
  };
  return {
    groupedMonths: C,
    groupedYears: A,
    year: h,
    isDisabled: N,
    defaultedMultiCalendars: a,
    defaultedAriaLabels: t,
    defaultedTransitions: r,
    defaultedConfig: l,
    showYearPicker: G,
    modelValue: p,
    setHoverDate: (y, u) => {
      I.value = ne(y, u);
    },
    selectMonth: f,
    selectYear: F,
    toggleYearPicker: X,
    handleYearSelect: g,
    handleYear: H,
    getModelMonthYear: O
  };
}, Pl = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: Object.assign({}, Ze),
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
    const t = e, r = ht(), l = Fe(r, "yearMode"), {
      groupedMonths: d,
      groupedYears: p,
      year: h,
      isDisabled: P,
      defaultedMultiCalendars: b,
      defaultedConfig: $,
      showYearPicker: I,
      modelValue: j,
      setHoverDate: A,
      selectMonth: G,
      selectYear: X,
      toggleYearPicker: g,
      handleYearSelect: H,
      handleYear: N,
      getModelMonthYear: k
    } = Sl(t, a);
    return n({ getSidebarProps: () => ({
      modelValue: j,
      year: h,
      getModelMonthYear: k,
      selectMonth: G,
      selectYear: X,
      handleYear: N
    }) }), (R, J) => (M(), ve(xt, {
      "multi-calendars": v(b).count,
      stretch: ""
    }, {
      default: ue(({ instance: re }) => [
        R.$slots["month-year"] ? le(R.$slots, "month-year", Se(Ce({ key: 0 }, {
          year: v(h),
          months: v(d)(re),
          years: v(p)(re),
          selectMonth: v(G),
          selectYear: v(X),
          instance: re
        }))) : (M(), ve(Ht, {
          key: 1,
          items: v(d)(re),
          "arrow-navigation": R.arrowNavigation,
          "is-last": R.autoApply && !v($).keepActionRow,
          "esc-close": R.escClose,
          height: v($).modeHeight,
          config: R.config,
          "no-overlay-focus": R.noOverlayFocus,
          onSelected: (C) => v(G)(C, re),
          onHoverValue: (C) => v(A)(C, re),
          "use-relative": "",
          type: "month"
        }, {
          header: ue(() => [
            Ue(ja, Ce(R.$props, {
              items: v(p)(re),
              instance: re,
              "show-year-picker": v(I)[re],
              year: v(h)(re),
              "is-disabled": (C) => v(P)(re, C),
              onHandleYear: (C) => v(N)(re, C),
              onYearSelect: (C) => v(H)(C, re),
              onToggleYearPicker: (C) => v(g)(re, C == null ? void 0 : C.flow, C == null ? void 0 : C.show)
            }), Be({ _: 2 }, [
              De(v(l), (C, ne) => ({
                name: C,
                fn: ue((m) => [
                  le(R.$slots, C, Se(Ee(m)))
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
}), _l = (e, n) => {
  const { modelValue: a } = Ft(e, n), t = x(null), { defaultedHighlight: r } = $e(e), l = ($) => Array.isArray(a.value) ? a.value.some((I) => fe(I) === $) : a.value ? fe(a.value) === $ : !1, d = ($) => e.range && Array.isArray(a.value) ? Qt(a.value, t.value, h($)) : !1, p = q(() => Dt(Wn(e.yearRange, e.reverseYears), ($) => {
    const I = l($.value), j = Nt($.value, Mt(e.minDate), Mt(e.maxDate)), A = d($.value), G = Kn(r.value, $.value);
    return { active: I, disabled: j, isBetween: A, highlighted: G };
  })), h = ($) => vt(Ke(/* @__PURE__ */ new Date()), $);
  return {
    groupedYears: p,
    modelValue: a,
    setHoverValue: ($) => {
      t.value = vt(Ke(/* @__PURE__ */ new Date()), $);
    },
    selectYear: ($) => {
      if (e.multiDates)
        return en(h($), a, e.multiDatesLimit), n("auto-apply", !0);
      if (e.range) {
        const I = Gn(a, h($), n);
        return tn(I, n, e.autoApply, e.modelAuto);
      }
      a.value = h($), n("auto-apply");
    }
  };
}, Cl = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: Object.assign({}, Ze),
  emits: ["update:internal-model-value", "reset-flow", "range-start", "range-end", "auto-apply"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { groupedYears: r, modelValue: l, selectYear: d, setHoverValue: p } = _l(t, a), { defaultedConfig: h } = $e(t);
    return n({ getSidebarProps: () => ({
      modelValue: l,
      selectYear: d
    }) }), (b, $) => (M(), L("div", null, [
      b.$slots["month-year"] ? le(b.$slots, "month-year", Se(Ce({ key: 0 }, {
        years: v(r),
        selectYear: v(d)
      }))) : (M(), ve(Ht, {
        key: 1,
        items: v(r),
        "is-last": b.autoApply && !v(h).keepActionRow,
        height: v(h).modeHeight,
        config: b.config,
        "no-overlay-focus": b.noOverlayFocus,
        type: "year",
        "use-relative": "",
        onSelected: v(d),
        onHoverValue: v(p)
      }, Be({ _: 2 }, [
        b.$slots["year-overlay-value"] ? {
          name: "item",
          fn: ue(({ item: I }) => [
            le(b.$slots, "year-overlay-value", {
              text: I.text,
              value: I.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
    ]));
  }
}), Ol = {
  key: 0,
  class: "dp__time_input"
}, Rl = ["aria-label", "onKeydown", "onClick"], Yl = /* @__PURE__ */ se("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), Nl = /* @__PURE__ */ se("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), Il = ["aria-label", "disabled", "onKeydown", "onClick"], Bl = ["aria-label", "onKeydown", "onClick"], El = /* @__PURE__ */ se("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), Fl = /* @__PURE__ */ se("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), Hl = { key: 0 }, jl = ["aria-label", "onKeydown"], Vl = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: Object.assign(
    {
      hours: { type: Number, default: 0 },
      minutes: { type: Number, default: 0 },
      seconds: { type: Number, default: 0 },
      closeTimePickerBtn: { type: Object, default: null },
      order: { type: Number, default: 0 },
      disabledTimesConfig: { type: Function, default: null },
      validateTime: {
        type: Function,
        default: () => !1
      }
    },
    Ze
  ),
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
    const t = e, { setTimePickerElements: r, setTimePickerBackRef: l } = ut(), { defaultedAriaLabels: d, defaultedTransitions: p, defaultedFilters: h, defaultedConfig: P } = $e(t), { transitionName: b, showTransition: $ } = Et(p), I = It({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), j = x("AM"), A = x(null), G = x([]);
    ze(() => {
      a("mounted");
    });
    const X = (c) => we(/* @__PURE__ */ new Date(), {
      hours: c.hours,
      minutes: c.minutes,
      seconds: t.enableSeconds ? c.seconds : 0,
      milliseconds: 0
    }), g = q(
      () => (c) => Z(c, t[c]) || N(c, t[c])
    ), H = q(() => ({ hours: t.hours, minutes: t.minutes, seconds: t.seconds })), N = (c, B) => t.range && !t.disableTimeRangeValidation ? !t.validateTime(c, B) : !1, k = (c, B) => {
      if (t.range && !t.disableTimeRangeValidation) {
        const W = B ? +t[`${c}Increment`] : -+t[`${c}Increment`], _ = t[c] + W;
        return !t.validateTime(c, _);
      }
      return !1;
    }, O = q(() => (c) => !F(+t[c] + +t[`${c}Increment`], c) || k(c, !0)), R = q(() => (c) => !F(+t[c] - +t[`${c}Increment`], c) || k(c, !1)), J = (c, B) => $a(we(U(), c), B), re = (c, B) => ar(we(U(), c), B), C = q(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !t.timePickerInline,
        dp__time_col_reg_block: !t.enableSeconds && t.is24 && !t.timePickerInline,
        dp__time_col_reg_inline: !t.enableSeconds && t.is24 && t.timePickerInline,
        dp__time_col_reg_with_button: !t.enableSeconds && !t.is24,
        dp__time_col_sec: t.enableSeconds && t.is24,
        dp__time_col_sec_with_button: t.enableSeconds && !t.is24
      })
    ), ne = q(() => {
      const c = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return t.enableSeconds ? c.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : c;
    }), m = q(() => ne.value.filter((c) => !c.separator)), T = q(() => (c) => {
      if (c === "hours") {
        const B = s(+t.hours);
        return { text: B < 10 ? `0${B}` : `${B}`, value: B };
      }
      return { text: t[c] < 10 ? `0${t[c]}` : `${t[c]}`, value: t[c] };
    }), Z = (c, B) => {
      var _;
      if (!t.disabledTimesConfig)
        return !1;
      const W = t.disabledTimesConfig(t.order, c === "hours" ? B : void 0);
      return W[c] ? !!((_ = W[c]) != null && _.includes(B)) : !0;
    }, f = (c) => {
      const B = t.is24 ? 24 : 12, W = c === "hours" ? B : 60, _ = +t[`${c}GridIncrement`], ee = c === "hours" && !t.is24 ? _ : 0, ce = [];
      for (let me = ee; me < W; me += _)
        ce.push({ value: me, text: me < 10 ? `0${me}` : `${me}` });
      return c === "hours" && !t.is24 && ce.push({ value: 0, text: "12" }), Dt(ce, (me) => ({ active: !1, disabled: h.value.times[c].includes(me.value) || !F(me.value, c) || Z(c, me.value) || N(c, me.value) }));
    }, F = (c, B) => {
      const W = t.minTime ? X(hn(t.minTime)) : null, _ = t.maxTime ? X(hn(t.maxTime)) : null, ee = X(hn(H.value, B, c));
      return W && _ ? (Ot(ee, _) || kt(ee, _)) && (Rt(ee, W) || kt(ee, W)) : W ? Rt(ee, W) || kt(ee, W) : _ ? Ot(ee, _) || kt(ee, _) : !0;
    }, w = (c) => t[`no${c[0].toUpperCase() + c.slice(1)}Overlay`], z = (c) => {
      w(c) || (I[c] = !I[c], I[c] || a("overlay-closed"));
    }, y = (c) => c === "hours" ? qe : c === "minutes" ? Je : wt, u = (c, B = !0) => {
      const W = B ? J : re, _ = B ? +t[`${c}Increment`] : -+t[`${c}Increment`];
      F(+t[c] + _, c) && a(
        `update:${c}`,
        y(c)(W({ [c]: +t[c] }, { [c]: +t[`${c}Increment`] }))
      );
    }, s = (c) => t.is24 ? c : (c >= 12 ? j.value = "PM" : j.value = "AM", Fr(c)), S = () => {
      j.value === "PM" ? (j.value = "AM", a("update:hours", t.hours - 12)) : (j.value = "PM", a("update:hours", t.hours + 12)), a("am-pm-change", j.value);
    }, o = (c) => {
      I[c] = !0;
    }, Q = (c, B, W) => {
      if (c && t.arrowNavigation) {
        Array.isArray(G.value[B]) ? G.value[B][W] = c : G.value[B] = [c];
        const _ = G.value.reduce(
          (ee, ce) => ce.map((me, Y) => [...ee[Y] || [], ce[Y]]),
          []
        );
        l(t.closeTimePickerBtn), A.value && (_[1] = _[1].concat(A.value)), r(_, t.order);
      }
    }, ae = (c, B) => (z(c), c === "hours" && !t.is24 ? a(`update:${c}`, j.value === "PM" ? B + 12 : B) : a(`update:${c}`, B));
    return n({ openChildCmp: o }), (c, B) => {
      var W;
      return c.disabled ? K("", !0) : (M(), L("div", Ol, [
        (M(!0), L(de, null, De(ne.value, (_, ee) => {
          var ce, me, Y;
          return M(), L("div", {
            key: ee,
            class: he(C.value)
          }, [
            _.separator ? (M(), L(de, { key: 0 }, [
              et(" : ")
            ], 64)) : (M(), L(de, { key: 1 }, [
              se("button", {
                type: "button",
                class: he({
                  dp__btn: !0,
                  dp__inc_dec_button: !c.timePickerInline,
                  dp__inc_dec_button_inline: c.timePickerInline,
                  dp__tp_inline_btn_top: c.timePickerInline,
                  dp__inc_dec_button_disabled: O.value(_.type)
                }),
                "aria-label": (ce = v(d)) == null ? void 0 : ce.incrementValue(_.type),
                tabindex: "0",
                onKeydown: [
                  oe(pe((E) => u(_.type), ["prevent"]), ["enter"]),
                  oe(pe((E) => u(_.type), ["prevent"]), ["space"])
                ],
                onClick: (E) => u(_.type),
                ref_for: !0,
                ref: (E) => Q(E, ee, 0)
              }, [
                t.timePickerInline ? (M(), L(de, { key: 1 }, [
                  Yl,
                  Nl
                ], 64)) : (M(), L(de, { key: 0 }, [
                  c.$slots["arrow-up"] ? le(c.$slots, "arrow-up", { key: 0 }) : K("", !0),
                  c.$slots["arrow-up"] ? K("", !0) : (M(), ve(v(jn), { key: 1 }))
                ], 64))
              ], 42, Rl),
              se("button", {
                type: "button",
                "aria-label": (me = v(d)) == null ? void 0 : me.openTpOverlay(_.type),
                class: he({
                  dp__time_display: !0,
                  dp__time_display_block: !c.timePickerInline,
                  dp__time_display_inline: c.timePickerInline,
                  "dp--time-invalid": g.value(_.type),
                  "dp--time-overlay-btn": !g.value(_.type)
                }),
                disabled: w(_.type),
                tabindex: "0",
                onKeydown: [
                  oe(pe((E) => z(_.type), ["prevent"]), ["enter"]),
                  oe(pe((E) => z(_.type), ["prevent"]), ["space"])
                ],
                onClick: (E) => z(_.type),
                ref_for: !0,
                ref: (E) => Q(E, ee, 1)
              }, [
                c.$slots[_.type] ? le(c.$slots, _.type, {
                  key: 0,
                  text: T.value(_.type).text,
                  value: T.value(_.type).value
                }) : K("", !0),
                c.$slots[_.type] ? K("", !0) : (M(), L(de, { key: 1 }, [
                  et(Re(T.value(_.type).text), 1)
                ], 64))
              ], 42, Il),
              se("button", {
                type: "button",
                class: he({
                  dp__btn: !0,
                  dp__inc_dec_button: !c.timePickerInline,
                  dp__inc_dec_button_inline: c.timePickerInline,
                  dp__tp_inline_btn_bottom: c.timePickerInline,
                  dp__inc_dec_button_disabled: R.value(_.type)
                }),
                "aria-label": (Y = v(d)) == null ? void 0 : Y.decrementValue(_.type),
                tabindex: "0",
                onKeydown: [
                  oe(pe((E) => u(_.type, !1), ["prevent"]), ["enter"]),
                  oe(pe((E) => u(_.type, !1), ["prevent"]), ["space"])
                ],
                onClick: (E) => u(_.type, !1),
                ref_for: !0,
                ref: (E) => Q(E, ee, 2)
              }, [
                t.timePickerInline ? (M(), L(de, { key: 1 }, [
                  El,
                  Fl
                ], 64)) : (M(), L(de, { key: 0 }, [
                  c.$slots["arrow-down"] ? le(c.$slots, "arrow-down", { key: 0 }) : K("", !0),
                  c.$slots["arrow-down"] ? K("", !0) : (M(), ve(v(Vn), { key: 1 }))
                ], 64))
              ], 42, Bl)
            ], 64))
          ], 2);
        }), 128)),
        c.is24 ? K("", !0) : (M(), L("div", Hl, [
          c.$slots["am-pm-button"] ? le(c.$slots, "am-pm-button", {
            key: 0,
            toggle: S,
            value: j.value
          }) : K("", !0),
          c.$slots["am-pm-button"] ? K("", !0) : (M(), L("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: A,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (W = v(d)) == null ? void 0 : W.amPmButton,
            tabindex: "0",
            onClick: S,
            onKeydown: [
              oe(pe(S, ["prevent"]), ["enter"]),
              oe(pe(S, ["prevent"]), ["space"])
            ]
          }, Re(j.value), 41, jl))
        ])),
        (M(!0), L(de, null, De(m.value, (_, ee) => (M(), ve($t, {
          key: ee,
          name: v(b)(I[_.type]),
          css: v($)
        }, {
          default: ue(() => [
            I[_.type] ? (M(), ve(Ht, {
              key: 0,
              items: f(_.type),
              "is-last": c.autoApply && !v(P).keepActionRow,
              "esc-close": c.escClose,
              type: _.type,
              "text-input": c.textInput,
              config: c.config,
              "arrow-navigation": c.arrowNavigation,
              onSelected: (ce) => ae(_.type, ce),
              onToggle: (ce) => z(_.type),
              onResetFlow: B[0] || (B[0] = (ce) => c.$emit("reset-flow"))
            }, Be({
              "button-icon": ue(() => [
                c.$slots["clock-icon"] ? le(c.$slots, "clock-icon", { key: 0 }) : K("", !0),
                c.$slots["clock-icon"] ? K("", !0) : (M(), ve(v(Hn), { key: 1 }))
              ]),
              _: 2
            }, [
              c.$slots[`${_.type}-overlay-value`] ? {
                name: "item",
                fn: ue(({ item: ce }) => [
                  le(c.$slots, `${_.type}-overlay-value`, {
                    text: ce.text,
                    value: ce.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "onSelected", "onToggle"])) : K("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Ul = { class: "dp--tp-wrap" }, Ll = ["aria-label", "tabindex"], zl = ["tabindex"], Wl = ["aria-label"], Ua = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: Object.assign(
    {
      hours: { type: [Number, Array], default: 0 },
      minutes: { type: [Number, Array], default: 0 },
      seconds: { type: [Number, Array], default: 0 },
      disabledTimesConfig: { type: Function, default: null },
      validateTime: {
        type: Function,
        default: () => !1
      }
    },
    Ze
  ),
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
    const t = e, { buildMatrix: r, setTimePicker: l } = ut(), d = ht(), { defaultedTransitions: p, defaultedAriaLabels: h, defaultedTextInput: P, defaultedConfig: b } = $e(t), { transitionName: $, showTransition: I } = Et(p), { hideNavigationButtons: j } = Xt(), A = x(null), G = x(null), X = x([]), g = x(null);
    ze(() => {
      a("mount"), !t.timePicker && t.arrowNavigation ? r([Ae(A.value)], "time") : l(!0, t.timePicker);
    });
    const H = q(() => t.range && t.modelAuto ? Ca(t.internalModelValue) : !0), N = x(!1), k = (f) => ({
      hours: Array.isArray(t.hours) ? t.hours[f] : t.hours,
      minutes: Array.isArray(t.minutes) ? t.minutes[f] : t.minutes,
      seconds: Array.isArray(t.seconds) ? t.seconds[f] : t.seconds
    }), O = q(() => {
      const f = [];
      if (t.range)
        for (let F = 0; F < 2; F++)
          f.push(k(F));
      else
        f.push(k(0));
      return f;
    }), R = (f, F = !1, w = "") => {
      F || a("reset-flow"), N.value = f, a(f ? "overlay-opened" : "overlay-closed"), t.arrowNavigation && l(f), it(() => {
        w !== "" && X.value[0] && X.value[0].openChildCmp(w);
      });
    }, J = q(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: t.autoApply && !b.value.keepActionRow
    })), re = Fe(d, "timePicker"), C = (f, F, w) => t.range ? F === 0 ? [f, O.value[1][w]] : [O.value[0][w], f] : f, ne = (f) => {
      a("update:hours", f);
    }, m = (f) => {
      a("update:minutes", f);
    }, T = (f) => {
      a("update:seconds", f);
    }, Z = () => {
      if (g.value && !P.value.enabled && !t.noOverlayFocus) {
        const f = jr(g.value);
        f && f.focus({ preventScroll: !0 });
      }
    };
    return n({ toggleTimePicker: R }), (f, F) => {
      var w;
      return M(), L("div", Ul, [
        !f.timePicker && !f.timePickerInline ? zt((M(), L("button", {
          key: 0,
          type: "button",
          class: he(J.value),
          "aria-label": (w = v(h)) == null ? void 0 : w.openTimePicker,
          tabindex: f.noOverlayFocus ? void 0 : 0,
          ref_key: "openTimePickerBtn",
          ref: A,
          onKeydown: [
            F[0] || (F[0] = oe((z) => R(!0), ["enter"])),
            F[1] || (F[1] = oe((z) => R(!0), ["space"]))
          ],
          onClick: F[2] || (F[2] = (z) => R(!0))
        }, [
          f.$slots["clock-icon"] ? le(f.$slots, "clock-icon", { key: 0 }) : K("", !0),
          f.$slots["clock-icon"] ? K("", !0) : (M(), ve(v(Hn), { key: 1 }))
        ], 42, Ll)), [
          [Wt, !v(j)(f.hideNavigation, "time")]
        ]) : K("", !0),
        Ue($t, {
          name: v($)(N.value),
          css: v(I) && !f.timePickerInline
        }, {
          default: ue(() => {
            var z;
            return [
              N.value || f.timePicker || f.timePickerInline ? (M(), L("div", {
                key: 0,
                class: he({
                  dp__overlay: !f.timePickerInline,
                  "dp--overlay-absolute": !t.timePicker && !f.timePickerInline,
                  "dp--overlay-relative": t.timePicker
                }),
                style: Ge(f.timePicker ? { height: `${v(b).modeHeight}px` } : void 0),
                ref_key: "overlayRef",
                ref: g,
                tabindex: f.timePickerInline ? void 0 : 0
              }, [
                se("div", {
                  class: he(
                    f.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  f.$slots["time-picker-overlay"] ? le(f.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: f.hours,
                    minutes: f.minutes,
                    seconds: f.seconds,
                    setHours: ne,
                    setMinutes: m,
                    setSeconds: T
                  }) : K("", !0),
                  f.$slots["time-picker-overlay"] ? K("", !0) : (M(), L("div", {
                    key: 1,
                    class: he(f.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (M(!0), L(de, null, De(O.value, (y, u) => zt((M(), ve(Vl, Ce(
                      { key: u },
                      Object.assign(
                        {
                          order: u,
                          hours: y.hours,
                          minutes: y.minutes,
                          seconds: y.seconds,
                          closeTimePickerBtn: G.value,
                          disabledTimesConfig: f.disabledTimesConfig,
                          disabled: u === 0 ? f.fixedStart : f.fixedEnd
                        },
                        f.$props
                      ),
                      {
                        "validate-time": (s, S) => f.validateTime(s, C(S, u, s)),
                        ref_for: !0,
                        ref_key: "timeInputRefs",
                        ref: X,
                        "onUpdate:hours": (s) => ne(C(s, u, "hours")),
                        "onUpdate:minutes": (s) => m(C(s, u, "minutes")),
                        "onUpdate:seconds": (s) => T(C(s, u, "seconds")),
                        onMounted: Z,
                        onOverlayClosed: Z,
                        onAmPmChange: F[3] || (F[3] = (s) => f.$emit("am-pm-change", s))
                      }
                    ), Be({ _: 2 }, [
                      De(v(re), (s, S) => ({
                        name: s,
                        fn: ue((o) => [
                          le(f.$slots, s, Se(Ee(o)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Wt, u === 0 ? !0 : H.value]
                    ])), 128))
                  ], 2)),
                  !f.timePicker && !f.timePickerInline ? zt((M(), L("button", {
                    key: 2,
                    type: "button",
                    ref_key: "closeTimePickerBtn",
                    ref: G,
                    class: he(J.value),
                    "aria-label": (z = v(h)) == null ? void 0 : z.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      F[4] || (F[4] = oe((y) => R(!1), ["enter"])),
                      F[5] || (F[5] = oe((y) => R(!1), ["space"]))
                    ],
                    onClick: F[6] || (F[6] = (y) => R(!1))
                  }, [
                    f.$slots["calendar-icon"] ? le(f.$slots, "calendar-icon", { key: 0 }) : K("", !0),
                    f.$slots["calendar-icon"] ? K("", !0) : (M(), ve(v(Bt), { key: 1 }))
                  ], 42, Wl)), [
                    [Wt, !v(j)(f.hideNavigation, "time")]
                  ]) : K("", !0)
                ], 2)
              ], 14, zl)) : K("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), La = (e, n, a, t) => {
  const r = (g, H) => Array.isArray(n[g]) ? n[g][H] : n[g], l = (g) => e.enableSeconds ? Array.isArray(n.seconds) ? n.seconds[g] : n.seconds : 0, d = (g, H) => g ? H !== void 0 ? ot(g, r("hours", H), r("minutes", H), l(H)) : ot(g, n.hours, n.minutes, l()) : In(U(), l(H)), p = (g, H) => {
    n[g] = H;
  }, h = (g, H) => {
    const N = Object.fromEntries(
      Object.keys(n).map((k) => k === g ? [k, H] : [k, n[k]].slice())
    );
    if (e.range && !e.disableTimeRangeValidation) {
      const k = (R) => a.value ? ot(
        a.value[R],
        N.hours[R],
        N.minutes[R],
        N.seconds[R]
      ) : null, O = (R) => Bn(a.value[R], 0);
      return !(ye(k(0), k(1)) && (Rt(k(0), O(1)) || Ot(k(1), O(0))));
    }
    return !0;
  }, P = (g, H) => {
    h(g, H) && (p(g, H), t && t());
  }, b = (g) => {
    P("hours", g);
  }, $ = (g) => {
    P("minutes", g);
  }, I = (g) => {
    P("seconds", g);
  }, j = (g, H, N, k) => {
    H && b(g), !H && !N && $(g), N && I(g), a.value && k(a.value);
  }, A = (g) => {
    if (g) {
      const H = Array.isArray(g), N = H ? [+g[0].hours, +g[1].hours] : +g.hours, k = H ? [+g[0].minutes, +g[1].minutes] : +g.minutes, O = H ? [+g[0].seconds, +g[1].seconds] : +g.seconds;
      p("hours", N), p("minutes", k), e.enableSeconds && p("seconds", O);
    }
  }, G = (g, H) => {
    const N = {
      hours: Array.isArray(n.hours) ? n.hours[g] : n.hours,
      disabledArr: []
    };
    return (H || H === 0) && (N.hours = H), Array.isArray(e.disabledTimes) && (N.disabledArr = e.range && Array.isArray(e.disabledTimes[g]) ? e.disabledTimes[g] : e.disabledTimes), N;
  }, X = q(() => (g, H) => {
    var N;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: k, hours: O } = G(g, H), R = k.filter((C) => +C.hours === O);
      if (((N = R[0]) == null ? void 0 : N.minutes) === "*")
        return { hours: [O], minutes: void 0, seconds: void 0 };
      const J = R == null ? void 0 : R.map((C) => +C.minutes), re = R == null ? void 0 : R.map((C) => C.seconds ? +C.seconds : void 0);
      return {
        hours: [],
        minutes: J ? [] : J,
        seconds: re ? [] : re
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: p,
    updateHours: b,
    updateMinutes: $,
    updateSeconds: I,
    getSetDateTime: d,
    updateTimeValues: j,
    getSecondsValue: l,
    assignStartTime: A,
    validateTime: h,
    disabledTimesConfig: X
  };
}, Kl = (e, n) => {
  const { modelValue: a, time: t } = Ft(e, n), { defaultedStartTime: r } = $e(e), { updateTimeValues: l, getSetDateTime: d, setTime: p, assignStartTime: h, disabledTimesConfig: P, validateTime: b } = La(e, t, a), $ = (N) => {
    const { hours: k, minutes: O, seconds: R } = N;
    return { hours: +k, minutes: +O, seconds: R ? +R : 0 };
  }, I = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const k = $(e.startTime[0]), O = $(e.startTime[1]);
        return [we(U(), k), we(U(), O)];
      }
      const N = $(e.startTime);
      return we(U(), N);
    }
    return e.range ? [null, null] : null;
  }, j = () => {
    if (e.range) {
      const [N, k] = I();
      a.value = [d(N, 0), d(k, 1)];
    } else
      a.value = d(I());
  }, A = (N) => Array.isArray(N) ? [gt(U(N[0])), gt(U(N[1]))] : [gt(N ? U() : N)], G = (N, k, O) => {
    p("hours", N), p("minutes", k), p("seconds", e.enableSeconds ? O : 0);
  }, X = () => {
    const [N, k] = A(a.value);
    return e.range ? G(
      [N.hours, k.hours],
      [N.minutes, k.minutes],
      [N.seconds, k.minutes]
    ) : G(N.hours, N.minutes, N.seconds);
  };
  ze(() => {
    if (!e.shadow)
      return h(r.value), a.value ? X() : j();
  });
  const g = () => {
    Array.isArray(a.value) ? a.value = a.value.map((N, k) => N && d(N, k)) : a.value = d(a.value), n("time-update");
  };
  return {
    modelValue: a,
    time: t,
    disabledTimesConfig: P,
    updateTime: (N, k = !0, O = !1) => {
      l(N, k, O, g);
    },
    validateTime: b
  };
}, Gl = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: Object.assign({}, Ze),
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = ht(), l = Fe(r, "timePicker"), { time: d, modelValue: p, disabledTimesConfig: h, updateTime: P, validateTime: b } = Kl(t, a);
    return n({ getSidebarProps: () => ({
      modelValue: p,
      time: d,
      updateTime: P
    }) }), (I, j) => (M(), ve(xt, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: ue(() => [
        Ue(Ua, Ce(I.$props, {
          hours: v(d).hours,
          minutes: v(d).minutes,
          seconds: v(d).seconds,
          "internal-model-value": I.internalModelValue,
          "disabled-times-config": v(h),
          "validate-time": v(b),
          "onUpdate:hours": j[0] || (j[0] = (A) => v(P)(A)),
          "onUpdate:minutes": j[1] || (j[1] = (A) => v(P)(A, !1)),
          "onUpdate:seconds": j[2] || (j[2] = (A) => v(P)(A, !1, !0)),
          onAmPmChange: j[3] || (j[3] = (A) => I.$emit("am-pm-change", A))
        }), Be({ _: 2 }, [
          De(v(l), (A, G) => ({
            name: A,
            fn: ue((X) => [
              le(I.$slots, A, Se(Ee(X)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), ql = { class: "dp__month_year_row" }, Zl = ["aria-label", "onClick", "onKeydown"], Ql = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: Object.assign(
    {
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      instance: { type: Number, default: 0 },
      years: { type: Array, default: () => [] },
      months: { type: Array, default: () => [] }
    },
    Ze
  ),
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, {
      defaultedTransitions: r,
      defaultedAriaLabels: l,
      defaultedMultiCalendars: d,
      defaultedFilters: p,
      defaultedConfig: h,
      defaultedHighlight: P
    } = $e(t), { transitionName: b, showTransition: $ } = Et(r), { buildMatrix: I } = ut(), { handleMonthYearChange: j, isDisabled: A, updateMonthYear: G } = ol(t, a), { showLeftIcon: X, showRightIcon: g } = Xt(), H = x(!1), N = x(!1), k = x([null, null, null, null]);
    ze(() => {
      a("mount");
    });
    const O = (u) => ({
      get: () => t[u],
      set: (s) => {
        const S = u === We.month ? We.year : We.month;
        a("update-month-year", { [u]: s, [S]: t[S] }), u === We.month ? Z(!0) : f(!0);
      }
    }), R = q(O(We.month)), J = q(O(We.year)), re = q(() => (u) => ({
      month: t.month,
      year: t.year,
      items: u === We.month ? t.months : t.years,
      instance: t.instance,
      updateMonthYear: G,
      toggle: u === We.month ? Z : f
    })), C = q(() => {
      const u = t.months.find((s) => s.value === t.month);
      return u || { text: "", value: 0 };
    }), ne = q(() => Dt(t.months, (u) => {
      const s = t.month === u.value, S = Nt(
        u.value,
        Oa(t.year, t.minDate),
        Ra(t.year, t.maxDate)
      ) || p.value.months.includes(u.value), o = Fa(P.value, u.value, t.year);
      return { active: s, disabled: S, highlighted: o };
    })), m = q(() => Dt(t.years, (u) => {
      const s = t.year === u.value, S = Nt(u.value, Mt(t.minDate), Mt(t.maxDate)) || p.value.years.includes(u.value), o = Kn(P.value, u.value);
      return { active: s, disabled: S, highlighted: o };
    })), T = (u, s) => {
      s !== void 0 ? u.value = s : u.value = !u.value, u.value || a("overlay-closed");
    }, Z = (u = !1, s) => {
      F(u), T(H, s);
    }, f = (u = !1, s) => {
      F(u), T(N, s);
    }, F = (u) => {
      u || a("reset-flow");
    }, w = (u, s) => {
      t.arrowNavigation && (k.value[s] = Ae(u), I(k.value, "monthYear"));
    }, z = q(() => {
      var u, s;
      return [
        {
          type: We.month,
          index: 1,
          toggle: Z,
          modelValue: R.value,
          updateModelValue: (S) => R.value = S,
          text: C.value.text,
          showSelectionGrid: H.value,
          items: ne.value,
          ariaLabel: (u = l.value) == null ? void 0 : u.openMonthsOverlay
        },
        {
          type: We.year,
          index: 2,
          toggle: f,
          modelValue: J.value,
          updateModelValue: (S) => J.value = S,
          text: t.year,
          showSelectionGrid: N.value,
          items: m.value,
          ariaLabel: (s = l.value) == null ? void 0 : s.openYearsOverlay
        }
      ];
    }), y = q(() => t.disableYearSelect ? [z.value[0]] : t.yearFirst ? [...z.value].reverse() : z.value);
    return n({
      toggleMonthPicker: Z,
      toggleYearPicker: f,
      handleMonthYearChange: j
    }), (u, s) => {
      var S, o, Q;
      return M(), L("div", ql, [
        u.$slots["month-year"] ? le(u.$slots, "month-year", Se(Ce({ key: 0 }, { month: u.month, year: u.year, months: u.months, years: u.years, updateMonthYear: v(G), handleMonthYearChange: v(j), instance: u.instance }))) : (M(), L(de, { key: 1 }, [
          v(X)(v(d), u.instance) && !u.vertical ? (M(), ve(Ct, {
            key: 0,
            "aria-label": (S = v(l)) == null ? void 0 : S.prevMonth,
            disabled: v(A)(!1),
            onActivate: s[0] || (s[0] = (ae) => v(j)(!1, !0)),
            onSetRef: s[1] || (s[1] = (ae) => w(ae, 0))
          }, {
            default: ue(() => [
              u.$slots["arrow-left"] ? le(u.$slots, "arrow-left", { key: 0 }) : K("", !0),
              u.$slots["arrow-left"] ? K("", !0) : (M(), ve(v(En), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : K("", !0),
          se("div", {
            class: he(["dp__month_year_wrap", {
              dp__year_disable_select: u.disableYearSelect
            }])
          }, [
            (M(!0), L(de, null, De(y.value, (ae, c) => (M(), L(de, {
              key: ae.type
            }, [
              se("button", {
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": ae.ariaLabel,
                ref_for: !0,
                ref: (B) => w(B, c + 1),
                onClick: ae.toggle,
                onKeydown: [
                  oe(pe(ae.toggle, ["prevent"]), ["enter"]),
                  oe(pe(ae.toggle, ["prevent"]), ["space"])
                ]
              }, [
                u.$slots[ae.type] ? le(u.$slots, ae.type, {
                  key: 0,
                  text: ae.text,
                  value: t[ae.type]
                }) : K("", !0),
                u.$slots[ae.type] ? K("", !0) : (M(), L(de, { key: 1 }, [
                  et(Re(ae.text), 1)
                ], 64))
              ], 40, Zl),
              Ue($t, {
                name: v(b)(ae.showSelectionGrid),
                css: v($)
              }, {
                default: ue(() => [
                  ae.showSelectionGrid ? (M(), ve(Ht, {
                    key: 0,
                    items: ae.items,
                    "arrow-navigation": u.arrowNavigation,
                    "hide-navigation": u.hideNavigation,
                    "is-last": u.autoApply && !v(h).keepActionRow,
                    "skip-button-ref": !1,
                    config: u.config,
                    type: ae.type,
                    "header-refs": [],
                    "esc-close": u.escClose,
                    "text-input": u.textInput,
                    onSelected: ae.updateModelValue,
                    onToggle: ae.toggle
                  }, Be({
                    "button-icon": ue(() => [
                      u.$slots["calendar-icon"] ? le(u.$slots, "calendar-icon", { key: 0 }) : K("", !0),
                      u.$slots["calendar-icon"] ? K("", !0) : (M(), ve(v(Bt), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    u.$slots[`${ae.type}-overlay-value`] ? {
                      name: "item",
                      fn: ue(({ item: B }) => [
                        le(u.$slots, `${ae.type}-overlay-value`, {
                          text: B.text,
                          value: B.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    u.$slots[`${ae.type}-overlay`] ? {
                      name: "overlay",
                      fn: ue(() => [
                        le(u.$slots, `${ae.type}-overlay`, Se(Ee(re.value(ae.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    u.$slots[`${ae.type}-overlay-header`] ? {
                      name: "header",
                      fn: ue(() => [
                        le(u.$slots, `${ae.type}-overlay-header`, {
                          toggle: ae.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "text-input", "onSelected", "onToggle"])) : K("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          v(X)(v(d), u.instance) && u.vertical ? (M(), ve(Ct, {
            key: 1,
            "aria-label": (o = v(l)) == null ? void 0 : o.prevMonth,
            disabled: v(A)(!1),
            onActivate: s[2] || (s[2] = (ae) => v(j)(!1, !0))
          }, {
            default: ue(() => [
              u.$slots["arrow-up"] ? le(u.$slots, "arrow-up", { key: 0 }) : K("", !0),
              u.$slots["arrow-up"] ? K("", !0) : (M(), ve(v(jn), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : K("", !0),
          v(g)(v(d), u.instance) ? (M(), ve(Ct, {
            key: 2,
            ref: "rightIcon",
            disabled: v(A)(!0),
            "aria-label": (Q = v(l)) == null ? void 0 : Q.nextMonth,
            onActivate: s[3] || (s[3] = (ae) => v(j)(!0, !0)),
            onSetRef: s[4] || (s[4] = (ae) => w(ae, u.disableYearSelect ? 2 : 3))
          }, {
            default: ue(() => [
              u.$slots[u.vertical ? "arrow-down" : "arrow-right"] ? le(u.$slots, u.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : K("", !0),
              u.$slots[u.vertical ? "arrow-down" : "arrow-right"] ? K("", !0) : (M(), ve(Nn(u.vertical ? v(Vn) : v(Fn)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : K("", !0)
        ], 64))
      ]);
    };
  }
}), Xl = ["aria-label"], Jl = {
  class: "dp__calendar_header",
  role: "row"
}, xl = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, eo = /* @__PURE__ */ se("div", { class: "dp__calendar_header_separator" }, null, -1), to = ["aria-label"], no = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, ao = { class: "dp__cell_inner" }, ro = ["aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], lo = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: Object.assign(
    {
      mappedDates: { type: Array, default: () => [] },
      instance: { type: Number, default: 0 },
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 }
    },
    Ze
  ),
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
    const t = e, { buildMultiLevelMatrix: r } = ut(), { defaultedTransitions: l, defaultedConfig: d, defaultedAriaLabels: p, defaultedMultiCalendars: h } = $e(t), P = x(null), b = x({
      bottom: "",
      left: "",
      transform: ""
    }), $ = x([]), I = x(null), j = x(!0), A = x(""), G = x({ startX: 0, endX: 0, startY: 0, endY: 0 }), X = x([]), g = x({ left: "50%" }), H = q(() => t.calendar ? t.calendar(t.mappedDates) : t.mappedDates), N = q(() => t.dayNames ? Array.isArray(t.dayNames) ? t.dayNames : t.dayNames(t.locale, +t.weekStart) : Er(t.formatLocale, t.locale, +t.weekStart));
    ze(() => {
      a("mount", { cmp: "calendar", refs: $ }), d.value.noSwipe || I.value && (I.value.addEventListener("touchstart", Z, { passive: !1 }), I.value.addEventListener("touchend", f, { passive: !1 }), I.value.addEventListener("touchmove", F, { passive: !1 })), t.monthChangeOnScroll && I.value && I.value.addEventListener("wheel", y, { passive: !1 });
    });
    const k = (o) => o ? t.vertical ? "vNext" : "next" : t.vertical ? "vPrevious" : "previous", O = (o, Q) => {
      if (t.transitions) {
        const ae = Le(xe(U(), t.month, t.year));
        A.value = Ye(Le(xe(U(), o, Q)), ae) ? l.value[k(!0)] : l.value[k(!1)], j.value = !1, it(() => {
          j.value = !0;
        });
      }
    }, R = q(
      () => ({
        [t.calendarClassName]: !!t.calendarClassName
      })
    ), J = q(() => (o) => {
      const Q = Hr(o);
      return {
        dp__marker_dot: Q.type === "dot",
        dp__marker_line: Q.type === "line"
      };
    }), re = q(() => (o) => ye(o, P.value)), C = q(() => ({
      dp__calendar: !0,
      dp__calendar_next: h.value.count > 0 && t.instance !== 0
    })), ne = q(() => (o) => t.hideOffsetDates ? o.current : !0), m = async (o, Q, ae) => {
      var c, B;
      if (a("set-hover-date", o), (B = (c = o.marker) == null ? void 0 : c.tooltip) != null && B.length) {
        const W = Ae($.value[Q][ae]);
        if (W) {
          const { width: _, height: ee } = W.getBoundingClientRect();
          P.value = o.value;
          let ce = { left: `${_ / 2}px` }, me = -50;
          if (await it(), X.value[0]) {
            const { left: Y, width: E } = X.value[0].getBoundingClientRect();
            Y < 0 && (ce = { left: "0" }, me = 0, g.value.left = `${_ / 2}px`), window.innerWidth < Y + E && (ce = { right: "0" }, me = 0, g.value.left = `${E - _ / 2}px`);
          }
          b.value = Object.assign(
            {
              bottom: `${ee}px`,
              transform: `translateX(${me}%)`
            },
            ce
          ), a("tooltip-open", o.marker);
        }
      }
    }, T = (o) => {
      P.value && (P.value = null, b.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", o.marker));
    }, Z = (o) => {
      G.value.startX = o.changedTouches[0].screenX, G.value.startY = o.changedTouches[0].screenY;
    }, f = (o) => {
      G.value.endX = o.changedTouches[0].screenX, G.value.endY = o.changedTouches[0].screenY, w();
    }, F = (o) => {
      t.vertical && !t.inline && o.preventDefault();
    }, w = () => {
      const o = t.vertical ? "Y" : "X";
      Math.abs(G.value[`start${o}`] - G.value[`end${o}`]) > 10 && a("handle-swipe", G.value[`start${o}`] > G.value[`end${o}`] ? "right" : "left");
    }, z = (o, Q, ae) => {
      o && (Array.isArray($.value[Q]) ? $.value[Q][ae] = o : $.value[Q] = [o]), t.arrowNavigation && r($.value, "calendar");
    }, y = (o) => {
      t.monthChangeOnScroll && (o.preventDefault(), a("handle-scroll", o));
    }, u = (o) => {
      const Q = o[0];
      return t.weekNumbers === "local" ? rr(Q.value, { weekStartsOn: +t.weekStart }) : t.weekNumbers === "iso" ? lr(Q.value) : typeof t.weekNumbers == "function" ? t.weekNumbers(Q.value) : "";
    }, s = (o, Q) => {
      lt(o, d.value), a("select-date", Q);
    }, S = (o) => {
      lt(o, d.value);
    };
    return n({ triggerTransition: O }), (o, Q) => {
      var ae;
      return M(), L("div", {
        class: he(C.value)
      }, [
        se("div", {
          ref_key: "calendarWrapRef",
          ref: I,
          role: "grid",
          class: he(R.value),
          "aria-label": (ae = v(p)) == null ? void 0 : ae.calendarWrap
        }, [
          (M(), L(de, { key: 0 }, [
            se("div", Jl, [
              o.weekNumbers ? (M(), L("div", xl, Re(o.weekNumName), 1)) : K("", !0),
              (M(!0), L(de, null, De(N.value, (c, B) => (M(), L("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: B
              }, [
                o.$slots["calendar-header"] ? le(o.$slots, "calendar-header", {
                  key: 0,
                  day: c,
                  index: B
                }) : K("", !0),
                o.$slots["calendar-header"] ? K("", !0) : (M(), L(de, { key: 1 }, [
                  et(Re(c), 1)
                ], 64))
              ]))), 128))
            ]),
            eo,
            Ue($t, {
              name: A.value,
              css: !!o.transitions
            }, {
              default: ue(() => {
                var c;
                return [
                  j.value ? (M(), L("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "rowgroup",
                    "aria-label": ((c = v(p)) == null ? void 0 : c.calendarDays) || void 0
                  }, [
                    (M(!0), L(de, null, De(H.value, (B, W) => (M(), L("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: W
                    }, [
                      o.weekNumbers ? (M(), L("div", no, [
                        se("div", ao, Re(u(B.days)), 1)
                      ])) : K("", !0),
                      (M(!0), L(de, null, De(B.days, (_, ee) => {
                        var ce, me, Y;
                        return M(), L("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (E) => z(E, W, ee),
                          key: ee + W,
                          "aria-selected": _.classData.dp__active_date || _.classData.dp__range_start || _.classData.dp__range_start,
                          "aria-disabled": _.classData.dp__cell_disabled || void 0,
                          "aria-label": (me = (ce = v(p)) == null ? void 0 : ce.day) == null ? void 0 : me.call(ce, _),
                          tabindex: "0",
                          onClick: pe((E) => s(E, _), ["prevent"]),
                          onKeydown: [
                            oe((E) => o.$emit("select-date", _), ["enter"]),
                            oe((E) => o.$emit("handle-space", _), ["space"])
                          ],
                          onMouseenter: (E) => m(_, W, ee),
                          onMouseleave: (E) => T(_)
                        }, [
                          se("div", {
                            class: he(["dp__cell_inner", _.classData])
                          }, [
                            o.$slots.day && ne.value(_) ? le(o.$slots, "day", {
                              key: 0,
                              day: +_.text,
                              date: _.value
                            }) : K("", !0),
                            o.$slots.day ? K("", !0) : (M(), L(de, { key: 1 }, [
                              et(Re(_.text), 1)
                            ], 64)),
                            _.marker && ne.value(_) ? (M(), L(de, { key: 2 }, [
                              o.$slots.marker ? le(o.$slots, "marker", {
                                key: 0,
                                marker: _.marker,
                                day: +_.text,
                                date: _.value
                              }) : (M(), L("div", {
                                key: 1,
                                class: he(J.value(_.marker)),
                                style: Ge(_.marker.color ? { backgroundColor: _.marker.color } : {})
                              }, null, 6))
                            ], 64)) : K("", !0),
                            re.value(_.value) ? (M(), L("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: X,
                              style: Ge(b.value)
                            }, [
                              (Y = _.marker) != null && Y.tooltip ? (M(), L("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: S
                              }, [
                                (M(!0), L(de, null, De(_.marker.tooltip, (E, Me) => (M(), L("div", {
                                  key: Me,
                                  class: "dp__tooltip_text"
                                }, [
                                  o.$slots["marker-tooltip"] ? le(o.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: E,
                                    day: _.value
                                  }) : K("", !0),
                                  o.$slots["marker-tooltip"] ? K("", !0) : (M(), L(de, { key: 1 }, [
                                    se("div", {
                                      class: "dp__tooltip_mark",
                                      style: Ge(E.color ? { backgroundColor: E.color } : {})
                                    }, null, 4),
                                    se("div", null, Re(E.text), 1)
                                  ], 64))
                                ]))), 128)),
                                se("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: Ge(g.value)
                                }, null, 4)
                              ])) : K("", !0)
                            ], 4)) : K("", !0)
                          ], 2)
                        ], 40, ro);
                      }), 128))
                    ]))), 128))
                  ], 8, to)) : K("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 64))
        ], 10, Xl)
      ], 2);
    };
  }
}), ya = (e) => Array.isArray(e), oo = (e, n, a, t) => {
  const r = x([]), { modelValue: l, calendars: d, time: p } = Ft(e, n), { defaultedMultiCalendars: h, defaultedStartTime: P } = $e(e), { validateMonthYearInRange: b, isDisabled: $, isDateRangeAllowed: I, checkMinMaxRange: j } = Tt(e), { updateTimeValues: A, getSetDateTime: G, setTime: X, assignStartTime: g, validateTime: H, disabledTimesConfig: N } = La(e, p, l, t), k = q(
    () => (i) => d.value[i] ? d.value[i].month : 0
  ), O = q(
    () => (i) => d.value[i] ? d.value[i].year : 0
  ), R = (i, D, V) => {
    var ie, be;
    d.value[i] || (d.value[i] = { month: 0, year: 0 }), d.value[i].month = da(D) ? (ie = d.value[i]) == null ? void 0 : ie.month : D, d.value[i].year = da(V) ? (be = d.value[i]) == null ? void 0 : be.year : V;
  }, J = () => {
    e.autoApply && n("select-date");
  };
  st(l, (i, D) => {
    JSON.stringify(i) !== JSON.stringify(D) && ne();
  }), ze(() => {
    e.shadow || (l.value || (s(), P.value && g(P.value)), ne(!0), e.focusStartDate && e.startDate && s());
  });
  const re = q(() => {
    var i;
    return (i = e.flow) != null && i.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), C = () => {
    e.autoApply && re.value && n("auto-apply", e.partialFlow);
  }, ne = (i = !1) => {
    if (l.value)
      return Array.isArray(l.value) ? (r.value = l.value, w(i)) : T(l.value, i);
    if (h.value.count && i && !e.startDate)
      return m(U(), i);
  }, m = (i, D = !1) => {
    if ((!h.value.count || !h.value.static || D) && R(0, ge(i), fe(i)), h.value.count)
      for (let V = 1; V < h.value.count; V++) {
        const ie = we(U(), { month: k.value(V - 1), year: O.value(V - 1) }), be = $a(ie, { months: 1 });
        d.value[V] = { month: ge(be), year: fe(be) };
      }
  }, T = (i, D) => {
    m(i), X("hours", qe(i)), X("minutes", Je(i)), X("seconds", wt(i)), h.value.count && D && u();
  }, Z = (i) => {
    if (h.value.count) {
      if (h.value.solo)
        return 0;
      const D = ge(i[0]), V = ge(i[1]);
      return Math.abs(V - D) < h.value.count ? 0 : 1;
    }
    return 1;
  }, f = (i, D) => {
    i[1] && e.showLastInRange ? m(i[Z(i)], D) : m(i[0], D);
    const V = (ie, be) => [
      ie(i[0]),
      i[1] ? ie(i[1]) : p[be][1]
    ];
    X("hours", V(qe, "hours")), X("minutes", V(Je, "minutes")), X("seconds", V(wt, "seconds"));
  }, F = (i, D) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return f(i, D);
    if (e.multiDates && D) {
      const V = i[i.length - 1];
      return T(V, D);
    }
  }, w = (i) => {
    const D = l.value;
    F(D, i), h.value.count && h.value.solo && u();
  }, z = (i, D) => {
    const V = we(U(), { month: k.value(D), year: O.value(D) }), ie = i < 0 ? mt(V, 1) : Yt(V, 1);
    b(ge(ie), fe(ie), i < 0, e.preventMinMaxNavigation) && (R(D, ge(ie), fe(ie)), n("update-month-year", { instance: D, month: ge(ie), year: fe(ie) }), h.value.count && !h.value.solo && y(D), a());
  }, y = (i) => {
    for (let D = i - 1; D >= 0; D--) {
      const V = Yt(we(U(), { month: k.value(D + 1), year: O.value(D + 1) }), 1);
      R(D, ge(V), fe(V));
    }
    for (let D = i + 1; D <= h.value.count - 1; D++) {
      const V = mt(we(U(), { month: k.value(D - 1), year: O.value(D - 1) }), 1);
      R(D, ge(V), fe(V));
    }
  }, u = () => {
    if (Array.isArray(l.value) && l.value.length === 2) {
      const i = U(
        U(l.value[1] ? l.value[1] : mt(l.value[0], 1))
      ), [D, V] = [ge(l.value[0]), fe(l.value[0])], [ie, be] = [ge(l.value[1]), fe(l.value[1])];
      (D !== ie || D === ie && V !== be) && h.value.solo && R(1, ge(i), fe(i));
    } else
      l.value && !Array.isArray(l.value) && (R(0, ge(l.value), fe(l.value)), m(U()));
  }, s = () => {
    e.startDate && (R(0, ge(U(e.startDate)), fe(U(e.startDate))), h.value.count && y(0));
  }, S = (i, D) => {
    e.monthChangeOnScroll && z(e.monthChangeOnScroll !== "inverse" ? -i.deltaY : i.deltaY, D);
  }, o = (i, D, V = !1) => {
    e.monthChangeOnArrows && e.vertical === V && Q(i, D);
  }, Q = (i, D) => {
    z(i === "right" ? -1 : 1, D);
  }, ae = (i) => e.markers.find((D) => ye(fa(i.value), fa(D.date))), c = (i, D) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [i == 0, !0];
      case "fair":
        return [i == 0 || D > i, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, B = (i, D, V, ie) => {
    if (e.sixWeeks && i.length < 6) {
      const be = 6 - i.length, tt = (D.getDay() + 7 - ie) % 7, jt = 6 - (V.getDay() + 7 - ie) % 7, [Pt, cn] = c(tt, jt);
      for (let dt = 1; dt <= be; dt++)
        if (cn ? !!(dt % 2) == Pt : Pt) {
          const Vt = i[0].days[0], fn = W(ft(Vt.value, -7), ge(D));
          i.unshift({ days: fn });
        } else {
          const Vt = i[i.length - 1], fn = Vt.days[Vt.days.length - 1], Wa = W(ft(fn.value, 1), ge(D));
          i.push({ days: Wa });
        }
    }
    return i;
  }, W = (i, D) => {
    const V = U(i), ie = [];
    for (let be = 0; be < 7; be++) {
      const tt = ft(V, be), St = ge(tt) !== D;
      ie.push({
        text: e.hideOffsetDates && St ? "" : tt.getDate(),
        value: tt,
        current: !St,
        classData: {}
      });
    }
    return ie;
  }, _ = (i, D) => {
    const V = [], ie = U(Ve(new Date(D, i), e.timezone)), be = U(Ve(new Date(D, i + 1, 0), e.timezone)), tt = e.weekStart, St = wa(ie, { weekStartsOn: tt }), jt = (Pt) => {
      const cn = W(Pt, i);
      if (V.push({ days: cn }), !V[V.length - 1].days.some(
        (dt) => ye(Le(dt.value), Le(be))
      )) {
        const dt = ft(Pt, 7);
        jt(dt);
      }
    };
    return jt(St), B(V, ie, be, tt);
  }, ee = (i) => (l.value = Gt(U(i.value), e.timezone, e.weekStart), n("date-update", i.value), C()), ce = (i) => {
    const D = ot(U(i.value), p.hours, p.minutes, je());
    n("date-update", D), e.multiDates ? en(D, l, e.multiDatesLimit) : l.value = D, t(), it().then(() => {
      C();
    });
  }, me = (i) => e.noDisabledRange ? Na(r.value[0], i).some((V) => $(V)) : !1, Y = () => {
    r.value = l.value ? l.value.slice() : [], r.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (r.value = []);
  }, E = (i, D) => {
    const V = [U(i.value), ft(U(i.value), +e.autoRange)];
    I(V) ? (D && Me(i.value), r.value = V) : n("invalid-date", i.value);
  }, Me = (i) => {
    const D = ge(U(i)), V = fe(U(i));
    if (R(0, D, V), h.value.count > 0)
      for (let ie = 1; ie < h.value.count; ie++) {
        const be = zr(
          we(U(i), { year: k.value(ie - 1), month: O.value(ie - 1) })
        );
        R(ie, be.month, be.year);
      }
  }, te = (i) => Array.isArray(l.value) && l.value.length === 2 ? e.fixedStart && (Ye(i, l.value[0]) || ye(i, l.value[0])) ? [l.value[0], i] : e.fixedEnd && (_e(i, l.value[1]) || ye(i, l.value[1])) ? [i, l.value[1]] : (n("invalid-fixed-range", i), l.value) : [], Qe = (i) => {
    if (me(i.value) || !j(i.value, l.value, e.fixedStart ? 0 : 1))
      return n("invalid-date", i.value);
    r.value = te(U(i.value));
  }, He = (i, D) => {
    if (Y(), e.autoRange)
      return E(i, D);
    if (e.fixedStart || e.fixedEnd)
      return Qe(i);
    r.value[0] ? j(U(i.value), l.value) && !me(i.value) ? _e(U(i.value), U(r.value[0])) ? (r.value.unshift(U(i.value)), n("range-end", r.value[0])) : (r.value[1] = U(i.value), n("range-end", r.value[1])) : (e.autoApply && n("auto-apply-invalid", i.value), n("invalid-date", i.value)) : (r.value[0] = U(i.value), n("range-start", r.value[0]));
  }, je = (i = !0) => e.enableSeconds ? Array.isArray(p.seconds) ? i ? p.seconds[0] : p.seconds[1] : p.seconds : 0, At = (i) => {
    r.value[i] = ot(
      r.value[i],
      p.hours[i],
      p.minutes[i],
      je(i !== 1)
    );
  }, nn = () => {
    var i, D;
    r.value[0] && r.value[1] && +((i = r.value) == null ? void 0 : i[0]) > +((D = r.value) == null ? void 0 : D[1]) && (r.value.reverse(), n("range-start", r.value[0]), n("range-end", r.value[1]));
  }, an = () => {
    r.value.length && (r.value[0] && !r.value[1] ? At(0) : (At(0), At(1), t()), nn(), l.value = r.value.slice(), tn(r.value, n, e.autoApply, e.modelAuto));
  }, rn = (i, D = !1) => {
    if ($(i.value) || !i.current && e.hideOffsetDates)
      return n("invalid-date", i.value);
    if (e.weekPicker)
      return ee(i);
    if (!e.range)
      return ce(i);
    ya(p.hours) && ya(p.minutes) && !e.multiDates && (He(i, D), an());
  }, ln = (i, D) => {
    var ie;
    R(i, D.month, D.year), h.value.count && !h.value.solo && y(i), n("update-month-year", { instance: i, month: D.month, year: D.year }), a(h.value.solo ? i : void 0);
    const V = (ie = e.flow) != null && ie.length ? e.flow[e.flowStep] : void 0;
    !D.fromNav && (V === Xe.month || V === Xe.year) && t();
  }, on = (i, D) => {
    Array.isArray(i) && i.length <= 2 && e.range ? l.value = i.map((V) => Ve(U(V), D ? void 0 : e.timezone)) : Array.isArray(i) || (l.value = Ve(U(i), D ? void 0 : e.timezone)), J(), e.multiCalendars && it().then(() => ne(!0));
  }, sn = () => {
    e.range ? l.value && Array.isArray(l.value) && l.value[0] ? l.value = _e(U(), l.value[0]) ? [U(), l.value[0]] : [l.value[0], U()] : l.value = [U()] : l.value = U(), J();
  }, un = () => {
    if (Array.isArray(l.value))
      if (e.multiDates) {
        const i = dn();
        l.value[l.value.length - 1] = G(i);
      } else
        l.value = l.value.map((i, D) => i && G(i, D));
    else
      l.value = G(l.value);
    n("time-update");
  }, dn = () => Array.isArray(l.value) && l.value.length ? l.value[l.value.length - 1] : null;
  return {
    calendars: d,
    modelValue: l,
    month: k,
    year: O,
    time: p,
    disabledTimesConfig: N,
    validateTime: H,
    getCalendarDays: _,
    getMarker: ae,
    handleScroll: S,
    handleSwipe: Q,
    handleArrow: o,
    selectDate: rn,
    updateMonthYear: ln,
    presetDate: on,
    selectCurrentDate: sn,
    updateTime: (i, D = !0, V = !1) => {
      A(i, D, V, un);
    }
  };
}, so = { key: 0 }, io = /* @__PURE__ */ Oe({
  __name: "DatePicker",
  props: Object.assign({}, Ze),
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
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, {
      calendars: r,
      month: l,
      year: d,
      modelValue: p,
      time: h,
      disabledTimesConfig: P,
      validateTime: b,
      getCalendarDays: $,
      getMarker: I,
      handleArrow: j,
      handleScroll: A,
      handleSwipe: G,
      selectDate: X,
      updateMonthYear: g,
      presetDate: H,
      selectCurrentDate: N,
      updateTime: k
    } = oo(t, a, y, u), O = ht(), { setHoverDate: R, getDayClassData: J, clearHoverDate: re } = dl(p, t), { defaultedMultiCalendars: C } = $e(t), ne = x([]), m = x([]), T = x(null), Z = Fe(O, "calendar"), f = Fe(O, "monthYear"), F = Fe(O, "timePicker"), w = (c) => {
      t.shadow || a("mount", c);
    };
    st(
      r,
      () => {
        t.shadow || setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const z = q(() => (c) => $(l.value(c), d.value(c)).map((B) => Object.assign(
      {
        days: B.days.map((W) => (W.marker = I(W), W.classData = J(W), W))
      },
      B
    )));
    function y(c) {
      var B;
      c || c === 0 ? (B = m.value[c]) == null || B.triggerTransition(l.value(c), d.value(c)) : m.value.forEach((W, _) => W.triggerTransition(l.value(_), d.value(_)));
    }
    function u() {
      a("update-flow-step");
    }
    const s = (c, B = !1) => {
      X(c, B), t.spaceConfirm && a("select-date");
    };
    return n({
      clearHoverDate: re,
      presetDate: H,
      selectCurrentDate: N,
      toggleMonthPicker: (c, B, W = 0) => {
        var _;
        (_ = ne.value[W]) == null || _.toggleMonthPicker(c, B);
      },
      toggleYearPicker: (c, B, W = 0) => {
        var _;
        (_ = ne.value[W]) == null || _.toggleYearPicker(c, B);
      },
      toggleTimePicker: (c, B, W) => {
        var _;
        (_ = T.value) == null || _.toggleTimePicker(c, B, W);
      },
      handleArrow: j,
      updateMonthYear: g,
      getSidebarProps: () => ({
        modelValue: p,
        month: l,
        year: d,
        time: h,
        updateTime: k,
        updateMonthYear: g,
        selectDate: X,
        presetDate: H
      })
    }), (c, B) => (M(), L(de, null, [
      Ue(xt, {
        "multi-calendars": v(C).count
      }, {
        default: ue(({ instance: W, index: _ }) => [
          c.disableMonthYearSelect ? K("", !0) : (M(), ve(Ql, Ce({
            key: 0,
            ref: (ee) => {
              ee && (ne.value[_] = ee);
            },
            months: v(_a)(c.formatLocale, c.locale, c.monthNameFormat),
            years: v(Wn)(c.yearRange, c.reverseYears),
            month: v(l)(W),
            year: v(d)(W),
            instance: W
          }, c.$props, {
            onMount: B[0] || (B[0] = (ee) => w(v(yt).header)),
            onResetFlow: B[1] || (B[1] = (ee) => c.$emit("reset-flow")),
            onUpdateMonthYear: (ee) => v(g)(W, ee),
            onOverlayClosed: B[2] || (B[2] = (ee) => c.$emit("focus-menu"))
          }), Be({ _: 2 }, [
            De(v(f), (ee, ce) => ({
              name: ee,
              fn: ue((me) => [
                le(c.$slots, ee, Se(Ee(me)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Ue(lo, Ce({
            ref: (ee) => {
              ee && (m.value[_] = ee);
            },
            "mapped-dates": z.value(W),
            month: v(l)(W),
            year: v(d)(W),
            instance: W
          }, c.$props, {
            onSelectDate: (ee) => v(X)(ee, W !== 1),
            onHandleSpace: (ee) => s(ee, W !== 1),
            onSetHoverDate: B[3] || (B[3] = (ee) => v(R)(ee)),
            onHandleScroll: (ee) => v(A)(ee, W),
            onHandleSwipe: (ee) => v(G)(ee, W),
            onMount: B[4] || (B[4] = (ee) => w(v(yt).calendar)),
            onResetFlow: B[5] || (B[5] = (ee) => c.$emit("reset-flow")),
            onTooltipOpen: B[6] || (B[6] = (ee) => c.$emit("tooltip-open", ee)),
            onTooltipClose: B[7] || (B[7] = (ee) => c.$emit("tooltip-close", ee))
          }), Be({ _: 2 }, [
            De(v(Z), (ee, ce) => ({
              name: ee,
              fn: ue((me) => [
                le(c.$slots, ee, Se(Ee(Object.assign({}, me))))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars"]),
      c.enableTimePicker ? (M(), L("div", so, [
        c.$slots["time-picker"] ? le(c.$slots, "time-picker", Se(Ce({ key: 0 }, { time: v(h), updateTime: v(k) }))) : (M(), ve(Ua, Ce({
          key: 1,
          ref_key: "timePickerRef",
          ref: T
        }, c.$props, {
          hours: v(h).hours,
          minutes: v(h).minutes,
          seconds: v(h).seconds,
          "internal-model-value": c.internalModelValue,
          "disabled-times-config": v(P),
          "validate-time": v(b),
          onMount: B[8] || (B[8] = (W) => w(v(yt).timePicker)),
          "onUpdate:hours": B[9] || (B[9] = (W) => v(k)(W)),
          "onUpdate:minutes": B[10] || (B[10] = (W) => v(k)(W, !1)),
          "onUpdate:seconds": B[11] || (B[11] = (W) => v(k)(W, !1, !0)),
          onResetFlow: B[12] || (B[12] = (W) => c.$emit("reset-flow")),
          onOverlayClosed: B[13] || (B[13] = (W) => c.$emit("time-picker-close")),
          onOverlayOpened: B[14] || (B[14] = (W) => c.$emit("time-picker-open", W)),
          onAmPmChange: B[15] || (B[15] = (W) => c.$emit("am-pm-change", W))
        }), Be({ _: 2 }, [
          De(v(F), (W, _) => ({
            name: W,
            fn: ue((ee) => [
              le(c.$slots, W, Se(Ee(ee)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : K("", !0)
    ], 64));
  }
}), uo = (e, n) => {
  const a = x(), { defaultedMultiCalendars: t, defaultedConfig: r, defaultedHighlight: l } = $e(e), { modelValue: d, year: p, month: h, calendars: P } = Ft(e, n), { isDisabled: b } = Tt(e), { selectYear: $, groupedYears: I, showYearPicker: j, isDisabled: A, toggleYearPicker: G, handleYearSelect: X, handleYear: g } = Va({
    modelValue: d,
    multiCalendars: t,
    highlight: l,
    calendars: P,
    month: h,
    year: p,
    props: e,
    emit: n
  }), H = (m, T) => [m, T].map((Z) => rt(Z, "MMMM", { locale: e.formatLocale })).join("-"), N = q(() => (m) => d.value ? Array.isArray(d.value) ? d.value.some((T) => Xn(m, T)) : Xn(d.value, m) : !1), k = (m) => {
    if (e.range) {
      if (Array.isArray(d.value)) {
        const T = ye(m, d.value[0]) || ye(m, d.value[1]);
        return Qt(d.value, a.value, m) && !T;
      }
      return !1;
    }
    return !1;
  }, O = q(() => (m) => {
    const T = we(/* @__PURE__ */ new Date(), { year: p.value(m) });
    return or({
      start: sr(T),
      end: ir(T)
    }).map((Z) => {
      const f = ur(Z), F = Jn(Z), w = b(Z), z = k(f), y = typeof l.value == "function" ? l.value({ quarter: xn(f), year: fe(f) }) : !!l.value.quarters.find(
        (u) => u.quarter === xn(f) && u.year === fe(f)
      );
      return {
        text: H(f, F),
        value: f,
        active: N.value(f),
        highlighted: y,
        disabled: w,
        isBetween: z
      };
    });
  }), R = (m) => {
    en(m, d, e.multiDatesLimit), n("auto-apply", !0);
  }, J = (m) => {
    const T = Gn(d, m, n);
    tn(T, n, e.autoApply, e.modelAuto);
  }, re = (m) => {
    d.value = m, n("auto-apply");
  };
  return {
    defaultedConfig: r,
    defaultedMultiCalendars: t,
    groupedYears: I,
    year: p,
    isDisabled: A,
    quarters: O,
    showYearPicker: j,
    modelValue: d,
    setHoverDate: (m) => {
      a.value = m;
    },
    selectYear: $,
    selectQuarter: (m, T, Z) => {
      if (!Z)
        return P.value[T].month = ge(Jn(m)), e.multiDates ? R(m) : e.range ? J(m) : re(m);
    },
    toggleYearPicker: G,
    handleYearSelect: X,
    handleYear: g
  };
}, co = { class: "dp--quarter-items" }, fo = ["disabled", "onClick", "onMouseover"], vo = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: Object.assign({}, Ze),
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = ht(), l = Fe(r, "yearMode"), {
      defaultedMultiCalendars: d,
      defaultedConfig: p,
      groupedYears: h,
      year: P,
      isDisabled: b,
      quarters: $,
      modelValue: I,
      showYearPicker: j,
      setHoverDate: A,
      selectQuarter: G,
      toggleYearPicker: X,
      handleYearSelect: g,
      handleYear: H
    } = uo(t, a);
    return n({ getSidebarProps: () => ({
      modelValue: I,
      year: P,
      selectQuarter: G,
      handleYearSelect: g,
      handleYear: H
    }) }), (k, O) => (M(), ve(xt, {
      "multi-calendars": v(d).count,
      stretch: ""
    }, {
      default: ue(({ instance: R }) => [
        se("div", {
          class: "dp-quarter-picker-wrap",
          style: Ge({ minHeight: `${v(p).modeHeight}px` })
        }, [
          se("div", null, [
            Ue(ja, Ce(k.$props, {
              items: v(h)(R),
              instance: R,
              "show-year-picker": v(j)[R],
              year: v(P)(R),
              "is-disabled": (J) => v(b)(R, J),
              onHandleYear: (J) => v(H)(R, J),
              onYearSelect: (J) => v(g)(J, R),
              onToggleYearPicker: (J) => v(X)(R, J == null ? void 0 : J.flow, J == null ? void 0 : J.show)
            }), Be({ _: 2 }, [
              De(v(l), (J, re) => ({
                name: J,
                fn: ue((C) => [
                  le(k.$slots, J, Se(Ee(C)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          se("div", co, [
            (M(!0), L(de, null, De(v($)(R), (J, re) => (M(), L("div", { key: re }, [
              se("button", {
                type: "button",
                class: he(["dp--qr-btn", {
                  "dp--qr-btn-active": J.active,
                  "dp--qr-btn-between": J.isBetween,
                  "dp--qr-btn-disabled": J.disabled,
                  "dp--highlighted": J.highlighted
                }]),
                disabled: J.disabled,
                onClick: (C) => v(G)(J.value, R, J.disabled),
                onMouseover: (C) => v(A)(J.value)
              }, [
                k.$slots.quarter ? le(k.$slots, "quarter", {
                  key: 0,
                  value: J.value,
                  text: J.text
                }) : (M(), L(de, { key: 1 }, [
                  et(Re(J.text), 1)
                ], 64))
              ], 42, fo)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars"]));
  }
}), mo = ["id", "onKeydown"], go = {
  key: 0,
  class: "dp__sidebar_left"
}, yo = {
  key: 1,
  class: "dp--preset-dates"
}, ho = ["onClick", "onKeydown"], po = {
  key: 2,
  class: "dp__sidebar_right"
}, bo = {
  key: 3,
  class: "dp__action_extra"
}, ha = /* @__PURE__ */ Oe({
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
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = q(() => {
      const Y = {};
      for (const [E, Me] of Object.entries(t))
        E != "openOnTop" && (Y[E] = Me);
      return Object.assign(Y, {
        flowStep: J.value,
        noOverlayFocus: t.noOverlayFocus
      });
    }), { setMenuFocused: l, setShiftKey: d, control: p } = Ha(), h = ht(), { defaultedTextInput: P, defaultedInline: b, defaultedConfig: $ } = $e(t), I = x(null), j = x(0), A = x(null), G = x(null), X = x(!1), g = x(null);
    ze(() => {
      if (!t.shadow) {
        X.value = !0, H(), window.addEventListener("resize", H);
        const Y = Ae(A);
        if (Y && !P.value.enabled && !b.value.enabled && (l(!0), T()), Y) {
          const E = (Me) => {
            $.value.allowPreventDefault && Me.preventDefault(), lt(Me, $.value, !0);
          };
          Y.addEventListener("pointerdown", E), Y.addEventListener("mousedown", E);
        }
      }
    }), Yn(() => {
      window.removeEventListener("resize", H);
    });
    const H = () => {
      const Y = Ae(G);
      Y && (j.value = Y.getBoundingClientRect().width);
    }, { arrowRight: N, arrowLeft: k, arrowDown: O, arrowUp: R } = ut(), { flowStep: J, updateFlowStep: re, childMount: C, resetFlow: ne } = cl(t, a, g), m = q(() => t.monthPicker ? Pl : t.yearPicker ? Cl : t.timePicker ? Gl : t.quarterPicker ? vo : io), T = () => {
      const Y = Ae(A);
      Y && Y.focus({ preventScroll: !0 });
    }, Z = q(() => {
      var Y;
      return ((Y = g.value) == null ? void 0 : Y.getSidebarProps()) || {};
    }), f = () => {
      t.openOnTop && a("recalculate-position");
    }, F = Fe(h, "action"), w = q(() => t.monthPicker || t.yearPicker ? Fe(h, "monthYear") : t.timePicker ? Fe(h, "timePicker") : Fe(h, "shared")), z = q(() => t.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), y = q(() => ({
      dp__menu_disabled: t.disabled,
      dp__menu_readonly: t.readonly
    })), u = q(
      () => ({
        dp__menu: !0,
        dp__menu_index: !b.value.enabled,
        dp__relative: b.value.enabled,
        [t.menuClassName]: !!t.menuClassName
      })
    ), s = (Y) => {
      lt(Y, $.value, !0);
    }, S = () => {
      t.escClose && a("close-picker");
    }, o = (Y) => {
      if (t.arrowNavigation) {
        if (Y === "up")
          return R();
        if (Y === "down")
          return O();
        if (Y === "left")
          return k();
        if (Y === "right")
          return N();
      } else
        Y === "left" || Y === "up" ? W("handleArrow", "left", 0, Y === "up") : W("handleArrow", "right", 0, Y === "down");
    }, Q = (Y) => {
      d(Y.shiftKey), !t.disableMonthYearSelect && Y.code === "Tab" && Y.target.classList.contains("dp__menu") && p.value.shiftKeyInMenu && (Y.preventDefault(), lt(Y, $.value, !0), a("close-picker"));
    }, ae = () => {
      T(), a("time-picker-close");
    }, c = (Y) => {
      var E, Me, te;
      (E = g.value) == null || E.toggleTimePicker(!1, !1), (Me = g.value) == null || Me.toggleMonthPicker(!1, !1, Y), (te = g.value) == null || te.toggleYearPicker(!1, !1, Y);
    }, B = (Y, E = 0) => {
      var Me, te, Qe;
      return Y === "month" ? (Me = g.value) == null ? void 0 : Me.toggleMonthPicker(!1, !0, E) : Y === "year" ? (te = g.value) == null ? void 0 : te.toggleYearPicker(!1, !0, E) : Y === "time" ? (Qe = g.value) == null ? void 0 : Qe.toggleTimePicker(!0, !1) : c(E);
    }, W = (Y, ...E) => {
      var Me, te;
      (Me = g.value) != null && Me[Y] && ((te = g.value) == null || te[Y](...E));
    }, _ = () => {
      W("selectCurrentDate");
    }, ee = (Y, E) => {
      W("presetDate", Y, E);
    }, ce = () => {
      W("clearHoverDate");
    };
    return n({
      updateMonthYear: (Y, E) => {
        W("updateMonthYear", Y, E);
      },
      switchView: B
    }), (Y, E) => {
      var Me;
      return M(), L("div", {
        id: Y.uid ? `dp-menu-${Y.uid}` : void 0,
        tabindex: "0",
        ref_key: "dpMenuRef",
        ref: A,
        role: "dialog",
        class: he(u.value),
        onMouseleave: ce,
        onClick: s,
        onKeydown: [
          oe(S, ["esc"]),
          E[18] || (E[18] = oe(pe((te) => o("left"), ["prevent"]), ["left"])),
          E[19] || (E[19] = oe(pe((te) => o("up"), ["prevent"]), ["up"])),
          E[20] || (E[20] = oe(pe((te) => o("down"), ["prevent"]), ["down"])),
          E[21] || (E[21] = oe(pe((te) => o("right"), ["prevent"]), ["right"])),
          Q
        ]
      }, [
        (Y.disabled || Y.readonly) && v(b).enabled ? (M(), L("div", {
          key: 0,
          class: he(y.value)
        }, null, 2)) : K("", !0),
        !v(b).enabled && !Y.teleportCenter ? (M(), L("div", {
          key: 1,
          class: he(z.value)
        }, null, 2)) : K("", !0),
        se("div", {
          ref_key: "innerMenuRef",
          ref: G,
          class: he({
            dp__menu_content_wrapper: ((Me = Y.presetDates) == null ? void 0 : Me.length) || !!Y.$slots["left-sidebar"] || !!Y.$slots["right-sidebar"]
          }),
          style: Ge({ "--dp-menu-width": `${j.value}px` })
        }, [
          Y.$slots["left-sidebar"] ? (M(), L("div", go, [
            le(Y.$slots, "left-sidebar", Se(Ee(Z.value)))
          ])) : K("", !0),
          Y.presetDates.length ? (M(), L("div", yo, [
            (M(!0), L(de, null, De(Y.presetDates, (te, Qe) => (M(), L(de, { key: Qe }, [
              te.slot ? le(Y.$slots, te.slot, {
                key: 0,
                presetDate: ee,
                label: te.label,
                value: te.value
              }) : (M(), L("button", {
                key: 1,
                type: "button",
                style: Ge(te.style || {}),
                class: "dp__btn dp--preset-range",
                onClick: pe((He) => ee(te.value, te.noTz), ["prevent"]),
                onKeydown: [
                  oe(pe((He) => ee(te.value, te.noTz), ["prevent"]), ["enter"]),
                  oe(pe((He) => ee(te.value, te.noTz), ["prevent"]), ["space"])
                ]
              }, Re(te.label), 45, ho))
            ], 64))), 128))
          ])) : K("", !0),
          se("div", {
            class: "dp__instance_calendar",
            ref_key: "calendarWrapperRef",
            ref: I,
            role: "document"
          }, [
            (M(), ve(Nn(m.value), Ce({
              ref_key: "dynCmpRef",
              ref: g
            }, r.value, {
              "flow-step": v(J),
              onMount: v(C),
              onUpdateFlowStep: v(re),
              onResetFlow: v(ne),
              onFocusMenu: T,
              onSelectDate: E[0] || (E[0] = (te) => Y.$emit("select-date")),
              onDateUpdate: E[1] || (E[1] = (te) => Y.$emit("date-update", te)),
              onTooltipOpen: E[2] || (E[2] = (te) => Y.$emit("tooltip-open", te)),
              onTooltipClose: E[3] || (E[3] = (te) => Y.$emit("tooltip-close", te)),
              onAutoApply: E[4] || (E[4] = (te) => Y.$emit("auto-apply", te)),
              onRangeStart: E[5] || (E[5] = (te) => Y.$emit("range-start", te)),
              onRangeEnd: E[6] || (E[6] = (te) => Y.$emit("range-end", te)),
              onInvalidFixedRange: E[7] || (E[7] = (te) => Y.$emit("invalid-fixed-range", te)),
              onTimeUpdate: E[8] || (E[8] = (te) => Y.$emit("time-update")),
              onAmPmChange: E[9] || (E[9] = (te) => Y.$emit("am-pm-change", te)),
              onTimePickerOpen: E[10] || (E[10] = (te) => Y.$emit("time-picker-open", te)),
              onTimePickerClose: ae,
              onRecalculatePosition: f,
              onUpdateMonthYear: E[11] || (E[11] = (te) => Y.$emit("update-month-year", te)),
              onAutoApplyInvalid: E[12] || (E[12] = (te) => Y.$emit("auto-apply-invalid", te)),
              onInvalidDate: E[13] || (E[13] = (te) => Y.$emit("invalid-date", te)),
              "onUpdate:internalModelValue": E[14] || (E[14] = (te) => Y.$emit("update:internal-model-value", te))
            }), Be({ _: 2 }, [
              De(w.value, (te, Qe) => ({
                name: te,
                fn: ue((He) => [
                  le(Y.$slots, te, Se(Ee(Object.assign({}, He))))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          Y.$slots["right-sidebar"] ? (M(), L("div", po, [
            le(Y.$slots, "right-sidebar", Se(Ee(Z.value)))
          ])) : K("", !0),
          Y.$slots["action-extra"] ? (M(), L("div", bo, [
            Y.$slots["action-extra"] ? le(Y.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: _
            }) : K("", !0)
          ])) : K("", !0)
        ], 6),
        !Y.autoApply || v($).keepActionRow ? (M(), ve(bl, Ce({
          key: 2,
          "menu-mount": X.value
        }, r.value, {
          "calendar-width": j.value,
          onClosePicker: E[15] || (E[15] = (te) => Y.$emit("close-picker")),
          onSelectDate: E[16] || (E[16] = (te) => Y.$emit("select-date")),
          onInvalidSelect: E[17] || (E[17] = (te) => Y.$emit("invalid-select")),
          onSelectNow: _
        }), Be({ _: 2 }, [
          De(v(F), (te, Qe) => ({
            name: te,
            fn: ue((He) => [
              le(Y.$slots, te, Se(Ee(Object.assign({}, He))))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : K("", !0)
      ], 42, mo);
    };
  }
}), ko = typeof window < "u" ? window : void 0, $n = () => {
}, wo = (e) => qa() ? (Za(e), !0) : !1, Do = (e, n, a, t) => {
  if (!e)
    return $n;
  let r = $n;
  const l = st(
    () => v(e),
    (p) => {
      r(), p && (p.addEventListener(n, a, t), r = () => {
        p.removeEventListener(n, a, t), r = $n;
      });
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    l(), r();
  };
  return wo(d), d;
}, Mo = (e, n, a, t = {}) => {
  const { window: r = ko, event: l = "pointerdown" } = t;
  return r ? Do(r, l, (p) => {
    const h = Ae(e), P = Ae(n);
    !h || !P || h === p.target || p.composedPath().includes(h) || p.composedPath().includes(P) || a(p);
  }, { passive: !0 }) : void 0;
}, $o = /* @__PURE__ */ Oe({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: Object.assign({}, Jt),
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
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, r = ht(), l = x(!1), d = qt(t, "modelValue"), p = qt(t, "timezone"), h = x(null), P = x(null), b = x(null), $ = x(!1), I = x(null), { setMenuFocused: j, setShiftKey: A } = Ha(), { clearArrowNav: G } = ut(), { mapDatesArrToMap: X, validateDate: g, isValidTime: H } = Tt(t), { defaultedTransitions: N, defaultedTextInput: k, defaultedInline: O, defaultedConfig: R } = $e(t), { menuTransition: J, showTransition: re } = Et(N);
    ze(() => {
      s(t.modelValue), it().then(() => {
        O.value.enabled || (w(I.value).addEventListener("scroll", _), window.addEventListener("resize", ee));
      }), O.value.enabled && (l.value = !0);
    });
    const C = q(() => X());
    Yn(() => {
      if (!O.value.enabled) {
        const i = w(I.value);
        i && i.removeEventListener("scroll", _), window.removeEventListener("resize", ee);
      }
    });
    const ne = Fe(r, "all", t.presetDates), m = Fe(r, "input");
    st(
      [d, p],
      () => {
        s(d.value);
      },
      { deep: !0 }
    );
    const { openOnTop: T, menuStyle: Z, xCorrect: f, setMenuPosition: F, getScrollableParent: w, shadowRender: z } = sl({
      menuRef: h,
      menuRefInner: P,
      inputRef: b,
      pickerWrapperRef: I,
      inline: O,
      emit: a,
      props: t,
      slots: r
    }), {
      inputValue: y,
      internalModelValue: u,
      parseExternalModelValue: s,
      emitModelValue: S,
      formatInputValue: o,
      checkBeforeEmit: Q
    } = ll(a, t, $), ae = q(
      () => ({
        dp__main: !0,
        dp__theme_dark: t.dark,
        dp__theme_light: !t.dark,
        dp__flex_display: O.value.enabled,
        dp__flex_display_with_input: O.value.input
      })
    ), c = q(() => t.dark ? "dp__theme_dark" : "dp__theme_light"), B = q(() => t.teleport ? {
      to: typeof t.teleport == "boolean" ? "body" : t.teleport,
      disabled: O.value.enabled
    } : { class: "dp__outer_menu_wrap" }), W = q(() => O.value.enabled && (t.timePicker || t.monthPicker || t.yearPicker || t.quarterPicker)), _ = () => {
      l.value && (R.value.closeOnScroll ? je() : F());
    }, ee = () => {
      l.value && F();
    }, ce = () => {
      !t.disabled && !t.readonly && (z(ha, t), F(!1), l.value = !0, l.value && a("open"), l.value || He(), s(t.modelValue));
    }, me = () => {
      var i;
      y.value = "", He(), (i = b.value) == null || i.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), R.value.closeOnClearValue && je();
    }, Y = () => {
      const i = u.value;
      return !i || !Array.isArray(i) && g(i) ? !0 : Array.isArray(i) ? i.length === 2 && g(i[0]) && g(i[1]) ? !0 : t.partialRange && !t.timePicker ? g(i[0]) : !1 : !1;
    }, E = () => {
      Q() && Y() ? (S(), je()) : a("invalid-select", u.value);
    }, Me = (i) => {
      te(), S(), R.value.closeOnAutoApply && !i && je();
    }, te = () => {
      b.value && k.value.enabled && b.value.setParsedDate(u.value);
    }, Qe = (i = !1) => {
      t.autoApply && H(u.value) && Y() && (t.range && Array.isArray(u.value) ? (t.partialRange || u.value.length === 2) && Me(i) : Me(i));
    }, He = () => {
      k.value.enabled || (u.value = null);
    }, je = () => {
      O.value.enabled || (l.value && (l.value = !1, f.value = !1, j(!1), A(!1), G(), a("closed"), y.value && s(d.value)), He(), a("blur"));
    }, At = (i, D) => {
      if (!i) {
        u.value = null;
        return;
      }
      const V = Array.isArray(i) ? !i.some((be) => !g(be)) : g(i), ie = H(i);
      V && ie && (u.value = i, D && (E(), a("text-submit")));
    }, nn = () => {
      t.autoApply && H(u.value) && S(), te();
    }, an = () => l.value ? je() : ce(), rn = (i) => {
      u.value = i;
    }, ln = () => {
      k.value.enabled && ($.value = !0, o()), a("focus");
    }, on = () => {
      k.value.enabled && ($.value = !1, s(t.modelValue)), a("blur");
    }, sn = (i) => {
      P.value && P.value.updateMonthYear(0, {
        month: ua(i.month),
        year: ua(i.year)
      });
    }, un = (i) => {
      s(i ? t.modelValue : i);
    }, dn = (i, D) => {
      var V;
      (V = P.value) == null || V.switchView(i, D);
    }, qn = (i) => R.value.onClickOutside ? R.value.onClickOutside(i) : je();
    return Mo(h, b, () => qn(Y)), n({
      closeMenu: je,
      selectDate: E,
      clearValue: me,
      openMenu: ce,
      onScroll: _,
      formatInputValue: o,
      // exposed for testing purposes
      updateInternalModelValue: rn,
      // modify internal modelValue
      setMonthYear: sn,
      parseModel: un,
      switchView: dn
    }), (i, D) => (M(), L("div", {
      class: he(ae.value),
      ref_key: "pickerWrapperRef",
      ref: I
    }, [
      Ue(gl, Ce({
        ref_key: "inputRef",
        ref: b,
        "is-menu-open": l.value,
        "input-value": v(y),
        "onUpdate:inputValue": D[0] || (D[0] = (V) => Qn(y) ? y.value = V : null)
      }, i.$props, {
        onClear: me,
        onOpen: ce,
        onSetInputDate: At,
        onSetEmptyDate: v(S),
        onSelectDate: E,
        onToggle: an,
        onClose: je,
        onFocus: ln,
        onBlur: on,
        onRealBlur: D[1] || (D[1] = (V) => $.value = !1)
      }), Be({ _: 2 }, [
        De(v(m), (V, ie) => ({
          name: V,
          fn: ue((be) => [
            le(i.$slots, V, Se(Ee(be)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      Ue($t, {
        name: v(J)(v(T)),
        css: v(re) && !v(O).enabled
      }, {
        default: ue(() => [
          l.value ? (M(), ve(Nn(i.teleport ? Qa : "div"), Ce({
            key: 0,
            ref_key: "dpWrapMenuRef",
            ref: h
          }, B.value, {
            class: { "dp--menu-wrapper": !v(O).enabled },
            style: v(O).enabled ? void 0 : v(Z)
          }), {
            default: ue(() => [
              Ue(ha, Ce({
                ref_key: "dpMenuRef",
                ref: P,
                class: { [c.value]: !0, "dp--menu-wrapper": i.teleport },
                style: i.teleport ? v(Z) : void 0,
                "open-on-top": v(T),
                "arr-map-values": C.value,
                "no-overlay-focus": W.value
              }, i.$props, {
                "internal-model-value": v(u),
                "onUpdate:internalModelValue": D[2] || (D[2] = (V) => Qn(u) ? u.value = V : null),
                onClosePicker: je,
                onSelectDate: E,
                onAutoApply: Qe,
                onTimeUpdate: nn,
                onFlowStep: D[3] || (D[3] = (V) => i.$emit("flow-step", V)),
                onUpdateMonthYear: D[4] || (D[4] = (V) => i.$emit("update-month-year", V)),
                onInvalidSelect: D[5] || (D[5] = (V) => i.$emit("invalid-select", v(u))),
                onAutoApplyInvalid: D[6] || (D[6] = (V) => i.$emit("invalid-select", V)),
                onInvalidFixedRange: D[7] || (D[7] = (V) => i.$emit("invalid-fixed-range", V)),
                onRecalculatePosition: v(F),
                onTooltipOpen: D[8] || (D[8] = (V) => i.$emit("tooltip-open", V)),
                onTooltipClose: D[9] || (D[9] = (V) => i.$emit("tooltip-close", V)),
                onTimePickerOpen: D[10] || (D[10] = (V) => i.$emit("time-picker-open", V)),
                onTimePickerClose: D[11] || (D[11] = (V) => i.$emit("time-picker-close", V)),
                onAmPmChange: D[12] || (D[12] = (V) => i.$emit("am-pm-change", V)),
                onRangeStart: D[13] || (D[13] = (V) => i.$emit("range-start", V)),
                onRangeEnd: D[14] || (D[14] = (V) => i.$emit("range-end", V)),
                onDateUpdate: D[15] || (D[15] = (V) => i.$emit("date-update", V)),
                onInvalidDate: D[16] || (D[16] = (V) => i.$emit("invalid-date", V))
              }), Be({ _: 2 }, [
                De(v(ne), (V, ie) => ({
                  name: V,
                  fn: ue((be) => [
                    le(i.$slots, V, Se(Ee(Object.assign({}, be))))
                  ])
                }))
              ]), 1040, ["class", "style", "open-on-top", "arr-map-values", "no-overlay-focus", "internal-model-value", "onRecalculatePosition"])
            ]),
            _: 3
          }, 16, ["class", "style"])) : K("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 2));
  }
}), za = /* @__PURE__ */ (() => {
  const e = $o;
  return e.install = (n) => {
    n.component("Vue3DatePicker", e);
  }, e;
})(), To = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: za
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(To).forEach(([e, n]) => {
  e !== "default" && (za[e] = n);
});
export {
  za as default
};
