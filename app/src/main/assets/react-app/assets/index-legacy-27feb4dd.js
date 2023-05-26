;
(function () {
  System.register(['./index-legacy-5baa22df.js'], function (exports, module) {
    'use strict';

    var commonjsGlobal, getDefaultExportFromCjs;
    return {
      setters: [module => {
        commonjsGlobal = module.z;
        getDefaultExportFromCjs = module.A;
      }],
      execute: function () {
        var dayjs_min = {
          exports: {}
        };
        (function (module, exports) {
          !function (t, e) {
            module.exports = e();
          }(commonjsGlobal, function () {
            var t = 1e3,
              e = 6e4,
              n = 36e5,
              r = "millisecond",
              i = "second",
              s = "minute",
              u = "hour",
              a = "day",
              o = "week",
              f = "month",
              h = "quarter",
              c = "year",
              d = "date",
              l = "Invalid Date",
              $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
              y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
              M = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ordinal: function (t) {
                  var e = ["th", "st", "nd", "rd"],
                    n = t % 100;
                  return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
                }
              },
              m = function (t, e, n) {
                var r = String(t);
                return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
              },
              v = {
                s: m,
                z: function (t) {
                  var e = -t.utcOffset(),
                    n = Math.abs(e),
                    r = Math.floor(n / 60),
                    i = n % 60;
                  return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
                },
                m: function t(e, n) {
                  if (e.date() < n.date()) return -t(n, e);
                  var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                    i = e.clone().add(r, f),
                    s = n - i < 0,
                    u = e.clone().add(r + (s ? -1 : 1), f);
                  return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
                },
                a: function (t) {
                  return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
                },
                p: function (t) {
                  return {
                    M: f,
                    y: c,
                    w: o,
                    d: a,
                    D: d,
                    h: u,
                    m: s,
                    s: i,
                    ms: r,
                    Q: h
                  }[t] || String(t || "").toLowerCase().replace(/s$/, "");
                },
                u: function (t) {
                  return void 0 === t;
                }
              },
              g = "en",
              D = {};
            D[g] = M;
            var p = function (t) {
                return t instanceof _;
              },
              S = function t(e, n, r) {
                var i;
                if (!e) return g;
                if ("string" == typeof e) {
                  var s = e.toLowerCase();
                  D[s] && (i = s), n && (D[s] = n, i = s);
                  var u = e.split("-");
                  if (!i && u.length > 1) return t(u[0]);
                } else {
                  var a = e.name;
                  D[a] = e, i = a;
                }
                return !r && i && (g = i), i || !r && g;
              },
              w = function (t, e) {
                if (p(t)) return t.clone();
                var n = "object" == typeof e ? e : {};
                return n.date = t, n.args = arguments, new _(n);
              },
              O = v;
            O.l = S, O.i = p, O.w = function (t, e) {
              return w(t, {
                locale: e.$L,
                utc: e.$u,
                x: e.$x,
                $offset: e.$offset
              });
            };
            var _ = function () {
                function M(t) {
                  this.$L = S(t.locale, null, !0), this.parse(t);
                }
                var m = M.prototype;
                return m.parse = function (t) {
                  this.$d = function (t) {
                    var e = t.date,
                      n = t.utc;
                    if (null === e) return new Date(NaN);
                    if (O.u(e)) return new Date();
                    if (e instanceof Date) return new Date(e);
                    if ("string" == typeof e && !/Z$/i.test(e)) {
                      var r = e.match($);
                      if (r) {
                        var i = r[2] - 1 || 0,
                          s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                      }
                    }
                    return new Date(e);
                  }(t), this.$x = t.x || {}, this.init();
                }, m.init = function () {
                  var t = this.$d;
                  this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
                }, m.$utils = function () {
                  return O;
                }, m.isValid = function () {
                  return !(this.$d.toString() === l);
                }, m.isSame = function (t, e) {
                  var n = w(t);
                  return this.startOf(e) <= n && n <= this.endOf(e);
                }, m.isAfter = function (t, e) {
                  return w(t) < this.startOf(e);
                }, m.isBefore = function (t, e) {
                  return this.endOf(e) < w(t);
                }, m.$g = function (t, e, n) {
                  return O.u(t) ? this[e] : this.set(n, t);
                }, m.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }, m.valueOf = function () {
                  return this.$d.getTime();
                }, m.startOf = function (t, e) {
                  var n = this,
                    r = !!O.u(e) || e,
                    h = O.p(t),
                    l = function (t, e) {
                      var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                      return r ? i : i.endOf(a);
                    },
                    $ = function (t, e) {
                      return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
                    },
                    y = this.$W,
                    M = this.$M,
                    m = this.$D,
                    v = "set" + (this.$u ? "UTC" : "");
                  switch (h) {
                    case c:
                      return r ? l(1, 0) : l(31, 11);
                    case f:
                      return r ? l(1, M) : l(0, M + 1);
                    case o:
                      var g = this.$locale().weekStart || 0,
                        D = (y < g ? y + 7 : y) - g;
                      return l(r ? m - D : m + (6 - D), M);
                    case a:
                    case d:
                      return $(v + "Hours", 0);
                    case u:
                      return $(v + "Minutes", 1);
                    case s:
                      return $(v + "Seconds", 2);
                    case i:
                      return $(v + "Milliseconds", 3);
                    default:
                      return this.clone();
                  }
                }, m.endOf = function (t) {
                  return this.startOf(t, !1);
                }, m.$set = function (t, e) {
                  var n,
                    o = O.p(t),
                    h = "set" + (this.$u ? "UTC" : ""),
                    l = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],
                    $ = o === a ? this.$D + (e - this.$W) : e;
                  if (o === f || o === c) {
                    var y = this.clone().set(d, 1);
                    y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
                  } else l && this.$d[l]($);
                  return this.init(), this;
                }, m.set = function (t, e) {
                  return this.clone().$set(t, e);
                }, m.get = function (t) {
                  return this[O.p(t)]();
                }, m.add = function (r, h) {
                  var d,
                    l = this;
                  r = Number(r);
                  var $ = O.p(h),
                    y = function (t) {
                      var e = w(l);
                      return O.w(e.date(e.date() + Math.round(t * r)), l);
                    };
                  if ($ === f) return this.set(f, this.$M + r);
                  if ($ === c) return this.set(c, this.$y + r);
                  if ($ === a) return y(1);
                  if ($ === o) return y(7);
                  var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
                    m = this.$d.getTime() + r * M;
                  return O.w(m, this);
                }, m.subtract = function (t, e) {
                  return this.add(-1 * t, e);
                }, m.format = function (t) {
                  var e = this,
                    n = this.$locale();
                  if (!this.isValid()) return n.invalidDate || l;
                  var r = t || "YYYY-MM-DDTHH:mm:ssZ",
                    i = O.z(this),
                    s = this.$H,
                    u = this.$m,
                    a = this.$M,
                    o = n.weekdays,
                    f = n.months,
                    h = function (t, n, i, s) {
                      return t && (t[n] || t(e, r)) || i[n].slice(0, s);
                    },
                    c = function (t) {
                      return O.s(s % 12 || 12, t, "0");
                    },
                    d = n.meridiem || function (t, e, n) {
                      var r = t < 12 ? "AM" : "PM";
                      return n ? r.toLowerCase() : r;
                    },
                    $ = {
                      YY: String(this.$y).slice(-2),
                      YYYY: this.$y,
                      M: a + 1,
                      MM: O.s(a + 1, 2, "0"),
                      MMM: h(n.monthsShort, a, f, 3),
                      MMMM: h(f, a),
                      D: this.$D,
                      DD: O.s(this.$D, 2, "0"),
                      d: String(this.$W),
                      dd: h(n.weekdaysMin, this.$W, o, 2),
                      ddd: h(n.weekdaysShort, this.$W, o, 3),
                      dddd: o[this.$W],
                      H: String(s),
                      HH: O.s(s, 2, "0"),
                      h: c(1),
                      hh: c(2),
                      a: d(s, u, !0),
                      A: d(s, u, !1),
                      m: String(u),
                      mm: O.s(u, 2, "0"),
                      s: String(this.$s),
                      ss: O.s(this.$s, 2, "0"),
                      SSS: O.s(this.$ms, 3, "0"),
                      Z: i
                    };
                  return r.replace(y, function (t, e) {
                    return e || $[t] || i.replace(":", "");
                  });
                }, m.utcOffset = function () {
                  return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }, m.diff = function (r, d, l) {
                  var $,
                    y = O.p(d),
                    M = w(r),
                    m = (M.utcOffset() - this.utcOffset()) * e,
                    v = this - M,
                    g = O.m(this, M);
                  return g = ($ = {}, $[c] = g / 12, $[f] = g, $[h] = g / 3, $[o] = (v - m) / 6048e5, $[a] = (v - m) / 864e5, $[u] = v / n, $[s] = v / e, $[i] = v / t, $)[y] || v, l ? g : O.a(g);
                }, m.daysInMonth = function () {
                  return this.endOf(f).$D;
                }, m.$locale = function () {
                  return D[this.$L];
                }, m.locale = function (t, e) {
                  if (!t) return this.$L;
                  var n = this.clone(),
                    r = S(t, e, !0);
                  return r && (n.$L = r), n;
                }, m.clone = function () {
                  return O.w(this.$d, this);
                }, m.toDate = function () {
                  return new Date(this.valueOf());
                }, m.toJSON = function () {
                  return this.isValid() ? this.toISOString() : null;
                }, m.toISOString = function () {
                  return this.$d.toISOString();
                }, m.toString = function () {
                  return this.$d.toUTCString();
                }, M;
              }(),
              T = _.prototype;
            return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t) {
              T[t[1]] = function (e) {
                return this.$g(e, t[0], t[1]);
              };
            }), w.extend = function (t, e) {
              return t.$i || (t(e, _, w), t.$i = !0), w;
            }, w.locale = S, w.isDayjs = p, w.unix = function (t) {
              return w(1e3 * t);
            }, w.en = D[g], w.Ls = D, w.p = {}, w;
          });
        })(dayjs_min);
        var dayjs_minExports = dayjs_min.exports;
        const dayjs = exports('d', /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports));
        var customParseFormat = {
          exports: {}
        };
        (function (module, exports) {
          !function (e, t) {
            module.exports = t();
          }(commonjsGlobal, function () {
            var e = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
              },
              t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
              n = /\d\d/,
              r = /\d\d?/,
              i = /\d*[^-_:/,()\s\d]+/,
              o = {},
              s = function (e) {
                return (e = +e) + (e > 68 ? 1900 : 2e3);
              };
            var a = function (e) {
                return function (t) {
                  this[e] = +t;
                };
              },
              f = [/[+-]\d\d:?(\d\d)?|Z/, function (e) {
                (this.zone || (this.zone = {})).offset = function (e) {
                  if (!e) return 0;
                  if ("Z" === e) return 0;
                  var t = e.match(/([+-]|\d\d)/g),
                    n = 60 * t[1] + (+t[2] || 0);
                  return 0 === n ? 0 : "+" === t[0] ? -n : n;
                }(e);
              }],
              h = function (e) {
                var t = o[e];
                return t && (t.indexOf ? t : t.s.concat(t.f));
              },
              u = function (e, t) {
                var n,
                  r = o.meridiem;
                if (r) {
                  for (var i = 1; i <= 24; i += 1) if (e.indexOf(r(i, 0, t)) > -1) {
                    n = i > 12;
                    break;
                  }
                } else n = e === (t ? "pm" : "PM");
                return n;
              },
              d = {
                A: [i, function (e) {
                  this.afternoon = u(e, !1);
                }],
                a: [i, function (e) {
                  this.afternoon = u(e, !0);
                }],
                S: [/\d/, function (e) {
                  this.milliseconds = 100 * +e;
                }],
                SS: [n, function (e) {
                  this.milliseconds = 10 * +e;
                }],
                SSS: [/\d{3}/, function (e) {
                  this.milliseconds = +e;
                }],
                s: [r, a("seconds")],
                ss: [r, a("seconds")],
                m: [r, a("minutes")],
                mm: [r, a("minutes")],
                H: [r, a("hours")],
                h: [r, a("hours")],
                HH: [r, a("hours")],
                hh: [r, a("hours")],
                D: [r, a("day")],
                DD: [n, a("day")],
                Do: [i, function (e) {
                  var t = o.ordinal,
                    n = e.match(/\d+/);
                  if (this.day = n[0], t) for (var r = 1; r <= 31; r += 1) t(r).replace(/\[|\]/g, "") === e && (this.day = r);
                }],
                M: [r, a("month")],
                MM: [n, a("month")],
                MMM: [i, function (e) {
                  var t = h("months"),
                    n = (h("monthsShort") || t.map(function (e) {
                      return e.slice(0, 3);
                    })).indexOf(e) + 1;
                  if (n < 1) throw new Error();
                  this.month = n % 12 || n;
                }],
                MMMM: [i, function (e) {
                  var t = h("months").indexOf(e) + 1;
                  if (t < 1) throw new Error();
                  this.month = t % 12 || t;
                }],
                Y: [/[+-]?\d+/, a("year")],
                YY: [n, function (e) {
                  this.year = s(e);
                }],
                YYYY: [/\d{4}/, a("year")],
                Z: f,
                ZZ: f
              };
            function c(n) {
              var r, i;
              r = n, i = o && o.formats;
              for (var s = (n = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (t, n, r) {
                  var o = r && r.toUpperCase();
                  return n || i[r] || e[r] || i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, t, n) {
                    return t || n.slice(1);
                  });
                })).match(t), a = s.length, f = 0; f < a; f += 1) {
                var h = s[f],
                  u = d[h],
                  c = u && u[0],
                  l = u && u[1];
                s[f] = l ? {
                  regex: c,
                  parser: l
                } : h.replace(/^\[|\]$/g, "");
              }
              return function (e) {
                for (var t = {}, n = 0, r = 0; n < a; n += 1) {
                  var i = s[n];
                  if ("string" == typeof i) r += i.length;else {
                    var o = i.regex,
                      f = i.parser,
                      h = e.slice(r),
                      u = o.exec(h)[0];
                    f.call(t, u), e = e.replace(u, "");
                  }
                }
                return function (e) {
                  var t = e.afternoon;
                  if (void 0 !== t) {
                    var n = e.hours;
                    t ? n < 12 && (e.hours += 12) : 12 === n && (e.hours = 0), delete e.afternoon;
                  }
                }(t), t;
              };
            }
            return function (e, t, n) {
              n.p.customParseFormat = !0, e && e.parseTwoDigitYear && (s = e.parseTwoDigitYear);
              var r = t.prototype,
                i = r.parse;
              r.parse = function (e) {
                var t = e.date,
                  r = e.utc,
                  s = e.args;
                this.$u = r;
                var a = s[1];
                if ("string" == typeof a) {
                  var f = !0 === s[2],
                    h = !0 === s[3],
                    u = f || h,
                    d = s[2];
                  h && (d = s[2]), o = this.$locale(), !f && d && (o = n.Ls[d]), this.$d = function (e, t, n) {
                    try {
                      if (["x", "X"].indexOf(t) > -1) return new Date(("X" === t ? 1e3 : 1) * e);
                      var r = c(t)(e),
                        i = r.year,
                        o = r.month,
                        s = r.day,
                        a = r.hours,
                        f = r.minutes,
                        h = r.seconds,
                        u = r.milliseconds,
                        d = r.zone,
                        l = new Date(),
                        m = s || (i || o ? 1 : l.getDate()),
                        M = i || l.getFullYear(),
                        Y = 0;
                      i && !o || (Y = o > 0 ? o - 1 : l.getMonth());
                      var p = a || 0,
                        v = f || 0,
                        D = h || 0,
                        g = u || 0;
                      return d ? new Date(Date.UTC(M, Y, m, p, v, D, g + 60 * d.offset * 1e3)) : n ? new Date(Date.UTC(M, Y, m, p, v, D, g)) : new Date(M, Y, m, p, v, D, g);
                    } catch (e) {
                      return new Date("");
                    }
                  }(t, a, r), this.init(), d && !0 !== d && (this.$L = this.locale(d).$L), u && t != this.format(a) && (this.$d = new Date("")), o = {};
                } else if (a instanceof Array) for (var l = a.length, m = 1; m <= l; m += 1) {
                  s[1] = a[m - 1];
                  var M = n.apply(this, s);
                  if (M.isValid()) {
                    this.$d = M.$d, this.$L = M.$L, this.init();
                    break;
                  }
                  m === l && (this.$d = new Date(""));
                } else i.call(this, e);
              };
            };
          });
        })(customParseFormat);
        var customParseFormatExports = customParseFormat.exports;
        const customParseFormatPlugin = /*@__PURE__*/getDefaultExportFromCjs(customParseFormatExports);
        var localizedFormat = {
          exports: {}
        };
        (function (module, exports) {
          !function (e, t) {
            module.exports = t();
          }(commonjsGlobal, function () {
            var e = {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A"
            };
            return function (t, o, n) {
              var r = o.prototype,
                i = r.format;
              n.en.formats = e, r.format = function (t) {
                void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
                var o = this.$locale().formats,
                  n = function (t, o) {
                    return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (t, n, r) {
                      var i = r && r.toUpperCase();
                      return n || o[r] || e[r] || o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, t, o) {
                        return t || o.slice(1);
                      });
                    });
                  }(t, void 0 === o ? {} : o);
                return i.call(this, n);
              };
            };
          });
        })(localizedFormat);
        var localizedFormatExports = localizedFormat.exports;
        const localizedFormatPlugin = /*@__PURE__*/getDefaultExportFromCjs(localizedFormatExports);
        var isBetween = {
          exports: {}
        };
        (function (module, exports) {
          !function (e, i) {
            module.exports = i();
          }(commonjsGlobal, function () {
            return function (e, i, t) {
              i.prototype.isBetween = function (e, i, s, f) {
                var n = t(e),
                  o = t(i),
                  r = "(" === (f = f || "()")[0],
                  u = ")" === f[1];
                return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
              };
            };
          });
        })(isBetween);
        var isBetweenExports = isBetween.exports;
        const isBetweenPlugin = /*@__PURE__*/getDefaultExportFromCjs(isBetweenExports);
        dayjs.extend(customParseFormatPlugin);
        dayjs.extend(localizedFormatPlugin);
        dayjs.extend(isBetweenPlugin);
        var withLocale = function (dayjs, locale) {
          return !locale ? dayjs : function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return dayjs.apply(void 0, args).locale(locale);
          };
        };
        var defaultFormats = {
          normalDateWithWeekday: "ddd, MMM D",
          normalDate: "D MMMM",
          shortDate: "MMM D",
          monthAndDate: "MMMM D",
          dayOfMonth: "D",
          year: "YYYY",
          month: "MMMM",
          monthShort: "MMM",
          monthAndYear: "MMMM YYYY",
          weekday: "dddd",
          weekdayShort: "ddd",
          minutes: "mm",
          hours12h: "hh",
          hours24h: "HH",
          seconds: "ss",
          fullTime: "LT",
          fullTime12h: "hh:mm A",
          fullTime24h: "HH:mm",
          fullDate: "ll",
          fullDateWithWeekday: "dddd, LL",
          fullDateTime: "lll",
          fullDateTime12h: "ll hh:mm A",
          fullDateTime24h: "ll HH:mm",
          keyboardDate: "L",
          keyboardDateTime: "L LT",
          keyboardDateTime12h: "L hh:mm A",
          keyboardDateTime24h: "L HH:mm"
        };
        var DayjsUtils = /** @class */function () {
          function DayjsUtils(_a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a,
              locale = _b.locale,
              formats = _b.formats,
              instance = _b.instance;
            this.lib = "dayjs";
            this.is12HourCycleInCurrentLocale = function () {
              var _a, _b;
              /* istanbul ignore next */
              return /A|a/.test((_b = (_a = _this.rawDayJsInstance.Ls[_this.locale || "en"]) === null || _a === void 0 ? void 0 : _a.formats) === null || _b === void 0 ? void 0 : _b.LT);
            };
            this.getCurrentLocaleCode = function () {
              return _this.locale || "en";
            };
            this.getFormatHelperText = function (format) {
              // @see https://github.com/iamkun/dayjs/blob/dev/src/plugin/localizedFormat/index.js
              var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?)|./g;
              return format.match(localFormattingTokens).map(function (token) {
                var _a, _b;
                var firstCharacter = token[0];
                if (firstCharacter === "L") {
                  /* istanbul ignore next */
                  return (_b = (_a = _this.rawDayJsInstance.Ls[_this.locale || "en"]) === null || _a === void 0 ? void 0 : _a.formats[token]) !== null && _b !== void 0 ? _b : token;
                }
                return token;
              }).join("").replace(/a/gi, "(a|p)m").toLocaleLowerCase();
            };
            this.parseISO = function (isoString) {
              return _this.dayjs(isoString);
            };
            this.toISO = function (value) {
              return value.toISOString();
            };
            this.parse = function (value, format) {
              if (value === "") {
                return null;
              }
              return _this.dayjs(value, format, _this.locale, true);
            };
            this.date = function (value) {
              if (value === null) {
                return null;
              }
              return _this.dayjs(value);
            };
            this.toJsDate = function (value) {
              return value.toDate();
            };
            this.isValid = function (value) {
              return _this.dayjs(value).isValid();
            };
            this.isNull = function (date) {
              return date === null;
            };
            this.getDiff = function (date, comparing, units) {
              return date.diff(comparing, units);
            };
            this.isAfter = function (date, value) {
              return date.isAfter(value);
            };
            this.isBefore = function (date, value) {
              return date.isBefore(value);
            };
            this.isAfterDay = function (date, value) {
              return date.isAfter(value, "day");
            };
            this.isBeforeDay = function (date, value) {
              return date.isBefore(value, "day");
            };
            this.isBeforeYear = function (date, value) {
              return date.isBefore(value, "year");
            };
            this.isAfterYear = function (date, value) {
              return date.isAfter(value, "year");
            };
            this.startOfDay = function (date) {
              return date.startOf("day");
            };
            this.endOfDay = function (date) {
              return date.endOf("day");
            };
            this.format = function (date, formatKey) {
              return _this.formatByString(date, _this.formats[formatKey]);
            };
            this.formatByString = function (date, formatString) {
              return _this.dayjs(date).format(formatString);
            };
            this.formatNumber = function (numberToFormat) {
              return numberToFormat;
            };
            this.getHours = function (date) {
              return date.hour();
            };
            this.addSeconds = function (date, count) {
              return count < 0 ? date.subtract(Math.abs(count), "second") : date.add(count, "second");
            };
            this.addMinutes = function (date, count) {
              return count < 0 ? date.subtract(Math.abs(count), "minute") : date.add(count, "minute");
            };
            this.addHours = function (date, count) {
              return count < 0 ? date.subtract(Math.abs(count), "hour") : date.add(count, "hour");
            };
            this.addDays = function (date, count) {
              return count < 0 ? date.subtract(Math.abs(count), "day") : date.add(count, "day");
            };
            this.addWeeks = function (date, count) {
              return count < 0 ? date.subtract(Math.abs(count), "week") : date.add(count, "week");
            };
            this.addMonths = function (date, count) {
              return count < 0 ? date.subtract(Math.abs(count), "month") : date.add(count, "month");
            };
            this.addYears = function (date, count) {
              return count < 0 ? date.subtract(Math.abs(count), "year") : date.add(count, "year");
            };
            this.setMonth = function (date, count) {
              return date.set("month", count);
            };
            this.setHours = function (date, count) {
              return date.set("hour", count);
            };
            this.getMinutes = function (date) {
              return date.minute();
            };
            this.setMinutes = function (date, count) {
              return date.set("minute", count);
            };
            this.getSeconds = function (date) {
              return date.second();
            };
            this.setSeconds = function (date, count) {
              return date.set("second", count);
            };
            this.getMonth = function (date) {
              return date.month();
            };
            this.getDate = function (date) {
              return date.date();
            };
            this.setDate = function (date, count) {
              return date.set("date", count);
            };
            this.getDaysInMonth = function (date) {
              return date.daysInMonth();
            };
            this.isSameDay = function (date, comparing) {
              return date.isSame(comparing, "day");
            };
            this.isSameMonth = function (date, comparing) {
              return date.isSame(comparing, "month");
            };
            this.isSameYear = function (date, comparing) {
              return date.isSame(comparing, "year");
            };
            this.isSameHour = function (date, comparing) {
              return date.isSame(comparing, "hour");
            };
            this.getMeridiemText = function (ampm) {
              return ampm === "am" ? "AM" : "PM";
            };
            this.startOfYear = function (date) {
              return date.startOf("year");
            };
            this.endOfYear = function (date) {
              return date.endOf("year");
            };
            this.startOfMonth = function (date) {
              return date.startOf("month");
            };
            this.endOfMonth = function (date) {
              return date.endOf("month");
            };
            this.startOfWeek = function (date) {
              return date.startOf("week");
            };
            this.endOfWeek = function (date) {
              return date.endOf("week");
            };
            this.getNextMonth = function (date) {
              return date.add(1, "month");
            };
            this.getPreviousMonth = function (date) {
              return date.subtract(1, "month");
            };
            this.getMonthArray = function (date) {
              var firstMonth = date.startOf("year");
              var monthArray = [firstMonth];
              while (monthArray.length < 12) {
                var prevMonth = monthArray[monthArray.length - 1];
                monthArray.push(_this.getNextMonth(prevMonth));
              }
              return monthArray;
            };
            this.getYear = function (date) {
              return date.year();
            };
            this.setYear = function (date, year) {
              return date.set("year", year);
            };
            this.mergeDateAndTime = function (date, time) {
              return date.hour(time.hour()).minute(time.minute()).second(time.second());
            };
            this.getWeekdays = function () {
              var start = _this.dayjs().startOf("week");
              return [0, 1, 2, 3, 4, 5, 6].map(function (diff) {
                return _this.formatByString(start.add(diff, "day"), "dd");
              });
            };
            this.isEqual = function (value, comparing) {
              if (value === null && comparing === null) {
                return true;
              }
              return _this.dayjs(value).isSame(comparing);
            };
            this.getWeekArray = function (date) {
              var start = _this.dayjs(date).startOf("month").startOf("week");
              var end = _this.dayjs(date).endOf("month").endOf("week");
              var count = 0;
              var current = start;
              var nestedWeeks = [];
              while (current.isBefore(end)) {
                var weekNumber = Math.floor(count / 7);
                nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
                nestedWeeks[weekNumber].push(current);
                current = current.add(1, "day");
                count += 1;
              }
              return nestedWeeks;
            };
            this.getYearRange = function (start, end) {
              var startDate = _this.dayjs(start).startOf("year");
              var endDate = _this.dayjs(end).endOf("year");
              var years = [];
              var current = startDate;
              while (current.isBefore(endDate)) {
                years.push(current);
                current = current.add(1, "year");
              }
              return years;
            };
            this.isWithinRange = function (date, _a) {
              var start = _a[0],
                end = _a[1];
              return date.isBetween(start, end, null, "[]");
            };
            this.rawDayJsInstance = instance || dayjs;
            this.dayjs = withLocale(this.rawDayJsInstance, locale);
            this.locale = locale;
            this.formats = Object.assign({}, defaultFormats, formats);
          }
          return DayjsUtils;
        }();
        const formatTokenMap = {
          YY: 'year',
          YYYY: 'year',
          M: 'month',
          MM: 'month',
          MMM: 'month',
          MMMM: 'month',
          D: 'day',
          DD: 'day',
          H: 'hour',
          HH: 'hour',
          h: 'hour',
          hh: 'hour',
          m: 'minute',
          mm: 'minute',
          s: 'second',
          ss: 'second',
          A: 'am-pm',
          a: 'am-pm'
        };
        class AdapterDayjs extends DayjsUtils {
          constructor(...args) {
            super(...args);
            this.formatTokenMap = formatTokenMap;
            this.expandFormat = format => {
              var _this$rawDayJsInstanc;
              const localeFormats = (_this$rawDayJsInstanc = this.rawDayJsInstance.Ls[this.locale || 'en']) == null ? void 0 : _this$rawDayJsInstanc.formats; // @see https://github.com/iamkun/dayjs/blob/dev/src/plugin/localizedFormat/index.js

              const t = formatBis => formatBis.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (_, a, b) => a || b.slice(1));
              return format.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b) => {
                const B = b && b.toUpperCase();
                return a || localeFormats[b] || t(localeFormats[B]);
              });
            };
            this.getFormatHelperText = format => {
              return this.expandFormat(format).replace(/a/gi, '(a|p)m').toLocaleLowerCase();
            };
          }
        }
        exports('A', AdapterDayjs);
      }
    };
  });
})();
