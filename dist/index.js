(() => {
    "use strict";
    var e = {
        341: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(655).__exportStar(r(575), t);
        },
        575: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleEvent = void 0;
            const n = r(380);
            t.handleEvent = async function(e) {
                const t = new n.Transfers(`${e.tx.hash}-${e.msg.idx}-${e.idx}`);
                t.blockHeight = BigInt(e.block.block.header.height), t.txHash = e.tx.hash, t.fromAddress = e.msg.msg.decodedMsg.fromAddress, 
                t.toAddress = e.msg.msg.decodedMsg.toAddress, await t.save();
            };
        },
        380: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            r(655).__exportStar(r(980), t);
        },
        534: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Transfers = void 0;
            const n = r(655).__importDefault(r(491));
            t.Transfers = class {
                constructor(e) {
                    this.id = e;
                }
                async save() {
                    let e = this.id;
                    (0, n.default)(null !== e, "Cannot save Transfers entity without an ID"), await store.set("Transfers", e.toString(), this);
                }
                static async remove(e) {
                    (0, n.default)(null !== e, "Cannot remove Transfers entity without an ID"), await store.remove("Transfers", e.toString());
                }
                static async get(e) {
                    (0, n.default)(null != e, "Cannot get Transfers entity without an ID");
                    const t = await store.get("Transfers", e.toString());
                    return t ? this.create(t) : void 0;
                }
                static create(e) {
                    (0, n.default)("string" == typeof e.id, "id must be provided");
                    let t = new this(e.id);
                    return Object.assign(t, e), t;
                }
            };
        },
        980: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Transfers = void 0;
            var n = r(534);
            Object.defineProperty(t, "Transfers", {
                enumerable: !0,
                get: function() {
                    return n.Transfers;
                }
            });
        },
        655: (e, t, r) => {
            r.r(t), r.d(t, {
                __assign: () => a,
                __asyncDelegator: () => x,
                __asyncGenerator: () => P,
                __asyncValues: () => S,
                __await: () => j,
                __awaiter: () => y,
                __classPrivateFieldGet: () => A,
                __classPrivateFieldIn: () => k,
                __classPrivateFieldSet: () => D,
                __createBinding: () => h,
                __decorate: () => c,
                __esDecorate: () => s,
                __exportStar: () => b,
                __extends: () => o,
                __generator: () => v,
                __importDefault: () => M,
                __importStar: () => I,
                __makeTemplateObject: () => T,
                __metadata: () => d,
                __param: () => u,
                __propKey: () => f,
                __read: () => w,
                __rest: () => i,
                __runInitializers: () => l,
                __setFunctionName: () => p,
                __spread: () => g,
                __spreadArray: () => O,
                __spreadArrays: () => m,
                __values: () => _
            });
            var n = function(e, t) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }, n(e, t);
            };
            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                function r() {
                    this.constructor = e;
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, 
                new r);
            }
            var a = function() {
                return a = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }, a.apply(this, arguments);
            };
            function i(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                }
                return r;
            }
            function c(e, t, r, n) {
                var o, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
                return a > 3 && i && Object.defineProperty(t, r, i), i;
            }
            function u(e, t) {
                return function(r, n) {
                    t(r, n, e);
                };
            }
            function s(e, t, r, n, o, a) {
                function i(e) {
                    if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
                    return e;
                }
                for (var c, u = n.kind, s = "getter" === u ? "get" : "setter" === u ? "set" : "value", l = !t && e ? n.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), p = !1, d = r.length - 1; d >= 0; d--) {
                    var y = {};
                    for (var v in n) y[v] = "access" === v ? {} : n[v];
                    for (var v in n.access) y.access[v] = n.access[v];
                    y.addInitializer = function(e) {
                        if (p) throw new TypeError("Cannot add initializers after decoration has completed");
                        a.push(i(e || null));
                    };
                    var h = (0, r[d])("accessor" === u ? {
                        get: f.get,
                        set: f.set
                    } : f[s], y);
                    if ("accessor" === u) {
                        if (void 0 === h) continue;
                        if (null === h || "object" != typeof h) throw new TypeError("Object expected");
                        (c = i(h.get)) && (f.get = c), (c = i(h.set)) && (f.set = c), (c = i(h.init)) && o.push(c);
                    } else (c = i(h)) && ("field" === u ? o.push(c) : f[s] = c);
                }
                l && Object.defineProperty(l, n.name, f), p = !0;
            }
            function l(e, t, r) {
                for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
                return n ? r : void 0;
            }
            function f(e) {
                return "symbol" == typeof e ? e : "".concat(e);
            }
            function p(e, t, r) {
                return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), 
                Object.defineProperty(e, "name", {
                    configurable: !0,
                    value: r ? "".concat(r, " ", t) : t
                });
            }
            function d(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            }
            function y(e, t, r, n) {
                return new (r || (r = Promise))((function(o, a) {
                    function i(e) {
                        try {
                            u(n.next(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function c(e) {
                        try {
                            u(n.throw(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function u(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t);
                        }))).then(i, c);
                    }
                    u((n = n.apply(e, t || [])).next());
                }));
            }
            function v(e, t) {
                var r, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1];
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this;
                }), a;
                function c(c) {
                    return function(u) {
                        return function(c) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (;a && (a = 0, c[0] && (i = 0)), i; ) try {
                                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 
                                0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                                switch (n = 0, o && (c = [ 2 & c[0], o.value ]), c[0]) {
                                  case 0:
                                  case 1:
                                    o = c;
                                    break;

                                  case 4:
                                    return i.label++, {
                                        value: c[1],
                                        done: !1
                                    };

                                  case 5:
                                    i.label++, n = c[1], c = [ 0 ];
                                    continue;

                                  case 7:
                                    c = i.ops.pop(), i.trys.pop();
                                    continue;

                                  default:
                                    if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        i = 0;
                                        continue;
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        i.label = c[1];
                                        break;
                                    }
                                    if (6 === c[0] && i.label < o[1]) {
                                        i.label = o[1], o = c;
                                        break;
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(c);
                                        break;
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                                }
                                c = t.call(e, i);
                            } catch (e) {
                                c = [ 6, e ], n = 0;
                            } finally {
                                r = o = 0;
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            };
                        }([ c, u ]);
                    };
                }
            }
            var h = Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                }), Object.defineProperty(e, n, o);
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r];
            };
            function b(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || h(t, e, r);
            }
            function _(e) {
                var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        };
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }
            function w(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, o, a = r.call(e), i = [];
                try {
                    for (;(void 0 === t || t-- > 0) && !(n = a.next()).done; ) i.push(n.value);
                } catch (e) {
                    o = {
                        error: e
                    };
                } finally {
                    try {
                        n && !n.done && (r = a.return) && r.call(a);
                    } finally {
                        if (o) throw o.error;
                    }
                }
                return i;
            }
            function g() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(w(arguments[t]));
                return e;
            }
            function m() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var n = Array(e), o = 0;
                for (t = 0; t < r; t++) for (var a = arguments[t], i = 0, c = a.length; i < c; i++, 
                o++) n[o] = a[i];
                return n;
            }
            function O(e, t, r) {
                if (r || 2 === arguments.length) for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), 
                n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t));
            }
            function j(e) {
                return this instanceof j ? (this.v = e, this) : new j(e);
            }
            function P(e, t, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = r.apply(e, t || []), a = [];
                return n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
                    return this;
                }, n;
                function i(e) {
                    o[e] && (n[e] = function(t) {
                        return new Promise((function(r, n) {
                            a.push([ e, t, r, n ]) > 1 || c(e, t);
                        }));
                    });
                }
                function c(e, t) {
                    try {
                        (r = o[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(u, s) : l(a[0][2], r);
                    } catch (e) {
                        l(a[0][3], e);
                    }
                    var r;
                }
                function u(e) {
                    c("next", e);
                }
                function s(e) {
                    c("throw", e);
                }
                function l(e, t) {
                    e(t), a.shift(), a.length && c(a[0][0], a[0][1]);
                }
            }
            function x(e) {
                var t, r;
                return t = {}, n("next"), n("throw", (function(e) {
                    throw e;
                })), n("return"), t[Symbol.iterator] = function() {
                    return this;
                }, t;
                function n(n, o) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: j(e[n](t)),
                            done: !1
                        } : o ? o(t) : t;
                    } : o;
                }
            }
            function S(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = _(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this;
                }, t);
                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise((function(n, o) {
                            (function(e, t, r, n) {
                                Promise.resolve(n).then((function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    });
                                }), t);
                            })(n, o, (t = e[r](t)).done, t.value);
                        }));
                    };
                }
            }
            function T(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e;
            }
            var E = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                });
            } : function(e, t) {
                e.default = t;
            };
            function I(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && h(t, e, r);
                return E(t, e), t;
            }
            function M(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function A(e, t, r, n) {
                if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
            }
            function D(e, t, r, n, o) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
            }
            function k(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t);
            }
        },
        491: e => {
            e.exports = require("assert");
        }
    }, t = {};
    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n](a, a.exports, r), a.exports;
    }
    r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        });
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    };
    var n = r(341), o = exports;
    for (var a in n) o[a] = n[a];
    n.__esModule && Object.defineProperty(o, "__esModule", {
        value: !0
    });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVMkwsUUFBUTs7T0NDckJDLElBQTJCLENBQUM7SUFHaEMsU0FBU0MsRUFBb0JDO1FBRTVCLElBQUlDLElBQWVILEVBQXlCRTtRQUM1QyxTQUFxQjdDLE1BQWpCOEMsR0FDSCxPQUFPQSxFQUFhL0w7UUFHckIsSUFBSTBMLElBQVNFLEVBQXlCRSxLQUFZO1lBR2pEOUwsU0FBUyxDQUFDOztRQU9YLE9BSEFnTSxFQUFvQkYsR0FBVUosR0FBUUEsRUFBTzFMLFNBQVM2TCxJQUcvQ0gsRUFBTzFMO0FBQ2Y7SUNyQkE2TCxFQUFvQm5KLElBQUksQ0FBQzFDLEdBQVNpTTtRQUNqQyxLQUFJLElBQUkxSCxLQUFPMEgsR0FDWEosRUFBb0JoRCxFQUFFb0QsR0FBWTFILE9BQVNzSCxFQUFvQmhELEVBQUU3SSxHQUFTdUUsTUFDNUV6RSxPQUFPQyxlQUFlQyxHQUFTdUUsR0FBSztZQUFFL0IsYUFBWTtZQUFNTCxLQUFLOEosRUFBVzFIOztBQUUxRSxPQ05Ec0gsRUFBb0JoRCxJQUFJLENBQUNxRCxHQUFLQyxNQUFVck0sT0FBT2tELFVBQVVDLGVBQWVDLEtBQUtnSixHQUFLQyxJQ0NsRk4sRUFBb0JuSCxJQUFLMUU7UUFDSCxzQkFBWHVJLFVBQTBCQSxPQUFPNkQsZUFDMUN0TSxPQUFPQyxlQUFlQyxHQUFTdUksT0FBTzZELGFBQWE7WUFBRW5NLE9BQU87WUFFN0RILE9BQU9DLGVBQWVDLEdBQVMsY0FBYztZQUFFQyxRQUFPOztBQUFPO0lDRjlELElBQUlvTSxJQUFzQlIsRUFBb0IsTSIsInNvdXJjZXMiOlsid2VicGFjazovL2thdmEtc3RhcnRlci8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9rYXZhLXN0YXJ0ZXIvLi9zcmMvbWFwcGluZ3MvbWFwcGluZ0hhbmRsZXJzLnRzIiwid2VicGFjazovL2thdmEtc3RhcnRlci8uL3NyYy90eXBlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9rYXZhLXN0YXJ0ZXIvLi9zcmMvdHlwZXMvbW9kZWxzL1RyYW5zZmVycy50cyIsIndlYnBhY2s6Ly9rYXZhLXN0YXJ0ZXIvLi9zcmMvdHlwZXMvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovL2thdmEtc3RhcnRlci8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8va2F2YS1zdGFydGVyL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJhc3NlcnRcIiIsIndlYnBhY2s6Ly9rYXZhLXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2F2YS1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYXZhLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rYXZhLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYXZhLXN0YXJ0ZXIvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbi8vRXhwb3J0cyBhbGwgaGFuZGxlciBmdW5jdGlvbnNcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL21hcHBpbmdzL21hcHBpbmdIYW5kbGVyc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlRXZlbnQgPSB2b2lkIDA7XG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xuYXN5bmMgZnVuY3Rpb24gaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBuZXdUcmFuc2ZlcnMgPSBuZXcgdHlwZXNfMS5UcmFuc2ZlcnMoYCR7ZXZlbnQudHguaGFzaH0tJHtldmVudC5tc2cuaWR4fS0ke2V2ZW50LmlkeH1gKTtcbiAgICBuZXdUcmFuc2ZlcnMuYmxvY2tIZWlnaHQgPSBCaWdJbnQoZXZlbnQuYmxvY2suYmxvY2suaGVhZGVyLmhlaWdodCk7XG4gICAgbmV3VHJhbnNmZXJzLnR4SGFzaCA9IGV2ZW50LnR4Lmhhc2g7XG4gICAgbmV3VHJhbnNmZXJzLmZyb21BZGRyZXNzID0gZXZlbnQubXNnLm1zZy5kZWNvZGVkTXNnLmZyb21BZGRyZXNzO1xuICAgIG5ld1RyYW5zZmVycy50b0FkZHJlc3MgPSBldmVudC5tc2cubXNnLmRlY29kZWRNc2cudG9BZGRyZXNzO1xuICAgIGF3YWl0IG5ld1RyYW5zZmVycy5zYXZlKCk7XG59XG5leHBvcnRzLmhhbmRsZUV2ZW50ID0gaGFuZGxlRXZlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuLy8gQXV0by1nZW5lcmF0ZWQgLCBETyBOT1QgRURJVFxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbW9kZWxzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UcmFuc2ZlcnMgPSB2b2lkIDA7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYXNzZXJ0XCIpKTtcbmNsYXNzIFRyYW5zZmVycyB7XG4gICAgY29uc3RydWN0b3IoaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cbiAgICBhc3luYyBzYXZlKCkge1xuICAgICAgICBsZXQgaWQgPSB0aGlzLmlkO1xuICAgICAgICAoMCwgYXNzZXJ0XzEuZGVmYXVsdCkoaWQgIT09IG51bGwsIFwiQ2Fubm90IHNhdmUgVHJhbnNmZXJzIGVudGl0eSB3aXRob3V0IGFuIElEXCIpO1xuICAgICAgICBhd2FpdCBzdG9yZS5zZXQoJ1RyYW5zZmVycycsIGlkLnRvU3RyaW5nKCksIHRoaXMpO1xuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgcmVtb3ZlKGlkKSB7XG4gICAgICAgICgwLCBhc3NlcnRfMS5kZWZhdWx0KShpZCAhPT0gbnVsbCwgXCJDYW5ub3QgcmVtb3ZlIFRyYW5zZmVycyBlbnRpdHkgd2l0aG91dCBhbiBJRFwiKTtcbiAgICAgICAgYXdhaXQgc3RvcmUucmVtb3ZlKCdUcmFuc2ZlcnMnLCBpZC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIGdldChpZCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuZGVmYXVsdCkoKGlkICE9PSBudWxsICYmIGlkICE9PSB1bmRlZmluZWQpLCBcIkNhbm5vdCBnZXQgVHJhbnNmZXJzIGVudGl0eSB3aXRob3V0IGFuIElEXCIpO1xuICAgICAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBzdG9yZS5nZXQoJ1RyYW5zZmVycycsIGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocmVjb3JkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKHJlY29yZCkge1xuICAgICAgICAoMCwgYXNzZXJ0XzEuZGVmYXVsdCkodHlwZW9mIHJlY29yZC5pZCA9PT0gJ3N0cmluZycsIFwiaWQgbXVzdCBiZSBwcm92aWRlZFwiKTtcbiAgICAgICAgbGV0IGVudGl0eSA9IG5ldyB0aGlzKHJlY29yZC5pZCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW50aXR5LCByZWNvcmQpO1xuICAgICAgICByZXR1cm4gZW50aXR5O1xuICAgIH1cbn1cbmV4cG9ydHMuVHJhbnNmZXJzID0gVHJhbnNmZXJzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UcmFuc2ZlcnMgPSB2b2lkIDA7XG4vLyBBdXRvLWdlbmVyYXRlZCAsIERPIE5PVCBFRElUXG52YXIgVHJhbnNmZXJzXzEgPSByZXF1aXJlKFwiLi9UcmFuc2ZlcnNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJUcmFuc2ZlcnNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFRyYW5zZmVyc18xLlRyYW5zZmVyczsgfSB9KTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19lc0RlY29yYXRlKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XHJcbiAgICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cclxuICAgIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XHJcbiAgICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcclxuICAgIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xyXG4gICAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcclxuICAgICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xyXG4gICAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xyXG4gICAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xyXG4gICAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy5wdXNoKF8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnB1c2goXyk7XHJcbiAgICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XHJcbiAgICBkb25lID0gdHJ1ZTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XHJcbiAgICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wcm9wS2V5KHgpIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcclxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcclxuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgXCJuYW1lXCIsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcHJlZml4ID8gXCJcIi5jb25jYXQocHJlZml4LCBcIiBcIiwgbmFtZSkgOiBuYW1lIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XHJcbiAgICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcclxuICAgIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNzZXJ0XCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0MSk7XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfX2V4cG9ydFN0YXIiLCJoYW5kbGVFdmVudCIsInR5cGVzXzEiLCJhc3luYyIsImV2ZW50IiwibmV3VHJhbnNmZXJzIiwiVHJhbnNmZXJzIiwidHgiLCJoYXNoIiwibXNnIiwiaWR4IiwiYmxvY2tIZWlnaHQiLCJCaWdJbnQiLCJibG9jayIsImhlYWRlciIsImhlaWdodCIsInR4SGFzaCIsImZyb21BZGRyZXNzIiwiZGVjb2RlZE1zZyIsInRvQWRkcmVzcyIsInNhdmUiLCJhc3NlcnRfMSIsIl9faW1wb3J0RGVmYXVsdCIsImNvbnN0cnVjdG9yIiwiaWQiLCJ0aGlzIiwiZGVmYXVsdCIsInN0b3JlIiwic2V0IiwidG9TdHJpbmciLCJzdGF0aWMiLCJyZW1vdmUiLCJyZWNvcmQiLCJnZXQiLCJjcmVhdGUiLCJlbnRpdHkiLCJhc3NpZ24iLCJUcmFuc2ZlcnNfMSIsImVudW1lcmFibGUiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9fZXh0ZW5kcyIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiX19hc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXBwbHkiLCJfX3Jlc3QiLCJlIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJfX3BhcmFtIiwicGFyYW1JbmRleCIsImRlY29yYXRvciIsIl9fZXNEZWNvcmF0ZSIsImN0b3IiLCJkZXNjcmlwdG9ySW4iLCJjb250ZXh0SW4iLCJpbml0aWFsaXplcnMiLCJleHRyYUluaXRpYWxpemVycyIsImFjY2VwdCIsImYiLCJfIiwia2luZCIsImRlc2NyaXB0b3IiLCJuYW1lIiwiZG9uZSIsImNvbnRleHQiLCJhY2Nlc3MiLCJhZGRJbml0aWFsaXplciIsInB1c2giLCJyZXN1bHQiLCJpbml0IiwiX19ydW5Jbml0aWFsaXplcnMiLCJ0aGlzQXJnIiwidXNlVmFsdWUiLCJfX3Byb3BLZXkiLCJ4IiwiY29uY2F0IiwiX19zZXRGdW5jdGlvbk5hbWUiLCJwcmVmaXgiLCJkZXNjcmlwdGlvbiIsImNvbmZpZ3VyYWJsZSIsIl9fbWV0YWRhdGEiLCJtZXRhZGF0YUtleSIsIm1ldGFkYXRhVmFsdWUiLCJtZXRhZGF0YSIsIl9fYXdhaXRlciIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwidGhlbiIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsInkiLCJnIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInYiLCJvcCIsInBvcCIsIl9fY3JlYXRlQmluZGluZyIsIm8iLCJtIiwiayIsImsyIiwidW5kZWZpbmVkIiwiX19lc01vZHVsZSIsIndyaXRhYmxlIiwiX192YWx1ZXMiLCJfX3JlYWQiLCJhciIsImVycm9yIiwiX19zcHJlYWQiLCJfX3NwcmVhZEFycmF5cyIsImlsIiwiYSIsImoiLCJqbCIsIl9fc3ByZWFkQXJyYXkiLCJ0byIsImZyb20iLCJwYWNrIiwibCIsInNsaWNlIiwiX19hd2FpdCIsIl9fYXN5bmNHZW5lcmF0b3IiLCJhc3luY0l0ZXJhdG9yIiwicSIsInJlc3VtZSIsImZ1bGZpbGwiLCJzZXR0bGUiLCJzaGlmdCIsIl9fYXN5bmNEZWxlZ2F0b3IiLCJfX2FzeW5jVmFsdWVzIiwiX19tYWtlVGVtcGxhdGVPYmplY3QiLCJjb29rZWQiLCJyYXciLCJfX3NldE1vZHVsZURlZmF1bHQiLCJfX2ltcG9ydFN0YXIiLCJtb2QiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwicmVjZWl2ZXIiLCJzdGF0ZSIsImhhcyIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkSW4iLCJtb2R1bGUiLCJyZXF1aXJlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImRlZmluaXRpb24iLCJvYmoiLCJwcm9wIiwidG9TdHJpbmdUYWciLCJfX3dlYnBhY2tfZXhwb3J0c19fIl0sInNvdXJjZVJvb3QiOiIifQ==