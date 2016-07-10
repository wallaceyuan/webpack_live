!
function(e, t) {
	function o(e) {
		return "[object Function]" === Object.prototype.toString.call(e)
	}
	function r(e) {
		if (!d[e]) throw new Error("Module " + e + " is not defined.");
		var t = d[e];
		return t.module.status !== i.INITIALIZED && n(e), t.module.exports
	}
	function n(e) {
		var n = d[e],
			a = n.module,
			f = a.exports,
			s = a.factory;
		if (a.parent = u, u = n, o(s)) {
			var c = s(r, f, a);
			c !== t && (a.exports = c)
		} else a.exports = d[e].factory;
		a.status = i.INITIALIZED
	}
	function a(e, r, a) {
		if (d[e]) throw new Error("Module " + e + " has been defined already.");
		if ("undefined" == typeof a && (a = r), !o(a) && a !== Object(a)) throw new Error("factory of module " + e + " must be an object or a function.");
		d[e] = {
			module: {
				id: e,
				exports: {},
				uri: "",
				dependencies: [],
				parent: t,
				factory: a,
				status: i.DEFINED
			}
		}, e === f && n(e)
	}
	var i = {
		DEFINED: "The module is just DEFINED",
		INITIALIZED: "The module is compiled and module.exports is available."
	};
	if (!e.define69eea4) {
		for (var u, d = {}, f = null, s = document.getElementsByTagName("script"), c = 0, l = s.length; l > c && !f; c++) f = s[c].getAttribute("data-mainentry_69eea4");
		if (!f) throw new Error("No data-mainentry_69eea4 attribute in script tag.");
		e.define69eea4 = a
	}
}(window);
!
function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	function n(e) {
		var t = "length" in e && e.length,
			n = ie.type(e);
		return "function" === n || ie.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}
	function r(e, t, n) {
		if (ie.isFunction(t)) return ie.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return ie.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (fe.test(t)) return ie.filter(t, e, n);
			t = ie.filter(t, e)
		}
		return ie.grep(e, function(e) {
			return ie.inArray(e, t) >= 0 !== n
		})
	}
	function i(e, t) {
		do e = e[t];
		while (e && 1 !== e.nodeType);
		return e
	}
	function o(e) {
		var t = xe[e] = {};
		return ie.each(e.match(be) || [], function(e, n) {
			t[n] = !0
		}), t
	}
	function a() {
		he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
	}
	function s() {
		(he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), ie.ready())
	}
	function u(e, t, n) {
		if (void 0 === n && 1 === e.nodeType) {
			var r = "data-" + t.replace(Ne, "-$1").toLowerCase();
			if (n = e.getAttribute(r), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? ie.parseJSON(n) : n
				} catch (i) {}
				ie.data(e, t, n)
			} else n = void 0
		}
		return n
	}
	function l(e) {
		var t;
		for (t in e) if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}
	function c(e, t, n, r) {
		if (ie.acceptData(e)) {
			var i, o, a = ie.expando,
				s = e.nodeType,
				u = s ? ie.cache : e,
				l = s ? e[a] : e[a] && a;
			if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = J.pop() || ie.guid++ : a), u[l] || (u[l] = s ? {} : {
				toJSON: ie.noop
			}), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = ie.extend(u[l], t) : u[l].data = ie.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ie.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[ie.camelCase(t)])) : i = o, i
		}
	}
	function d(e, t, n) {
		if (ie.acceptData(e)) {
			var r, i, o = e.nodeType,
				a = o ? ie.cache : e,
				s = o ? e[ie.expando] : ie.expando;
			if (a[s]) {
				if (t && (r = n ? a[s] : a[s].data)) {
					ie.isArray(t) ? t = t.concat(ie.map(t, ie.camelCase)) : t in r ? t = [t] : (t = ie.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
					for (; i--;) delete r[t[i]];
					if (n ? !l(r) : !ie.isEmptyObject(r)) return
				}(n || (delete a[s].data, l(a[s]))) && (o ? ie.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
			}
		}
	}
	function f() {
		return !0
	}
	function p() {
		return !1
	}
	function h() {
		try {
			return he.activeElement
		} catch (e) {}
	}
	function m(e) {
		var t = Fe.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement) for (; t.length;) n.createElement(t.pop());
		return n
	}
	function g(e, t) {
		var n, r, i = 0,
			o = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
		if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)!t || ie.nodeName(r, t) ? o.push(r) : ie.merge(o, g(r, t));
		return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], o) : o
	}
	function v(e) {
		je.test(e.type) && (e.defaultChecked = e.checked)
	}
	function y(e, t) {
		return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}
	function b(e) {
		return e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type, e
	}
	function x(e) {
		var t = Ve.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}
	function w(e, t) {
		for (var n, r = 0; null != (n = e[r]); r++) ie._data(n, "globalEval", !t || ie._data(t[r], "globalEval"))
	}
	function T(e, t) {
		if (1 === t.nodeType && ie.hasData(e)) {
			var n, r, i, o = ie._data(e),
				a = ie._data(t, o),
				s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s) for (r = 0, i = s[n].length; i > r; r++) ie.event.add(t, n, s[n][r])
			}
			a.data && (a.data = ie.extend({}, a.data))
		}
	}
	function C(e, t) {
		var n, r, i;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[ie.expando]) {
				i = ie._data(t);
				for (r in i.events) ie.removeEvent(t, r, i.handle);
				t.removeAttribute(ie.expando)
			}
			"script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && je.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}
	function E(t, n) {
		var r, i = ie(n.createElement(t)).appendTo(n.body),
			o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : ie.css(i[0], "display");
		return i.detach(), o
	}
	function N(e) {
		var t = he,
			n = Ze[e];
		return n || (n = E(e, t), "none" !== n && n || (Ke = (Ke || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = E(e, t), Ke.detach()), Ze[e] = n), n
	}
	function k(e, t) {
		return {
			get: function() {
				var n = e();
				if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}
	function S(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ft.length; i--;) if (t = ft[i] + n, t in e) return t;
		return r
	}
	function D(e, t) {
		for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ie._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && De(r) && (o[a] = ie._data(r, "olddisplay", N(r.nodeName)))) : (i = De(r), (n && "none" !== n || !i) && ie._data(r, "olddisplay", i ? n : ie.css(r, "display"))));
		for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}
	function A(e, t, n) {
		var r = ut.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}
	function j(e, t, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += ie.css(e, n + Se[o], !0, i)), r ? ("content" === n && (a -= ie.css(e, "padding" + Se[o], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + Se[o] + "Width", !0, i))) : (a += ie.css(e, "padding" + Se[o], !0, i), "padding" !== n && (a += ie.css(e, "border" + Se[o] + "Width", !0, i)));
		return a
	}
	function L(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = et(e),
			a = ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = tt(e, t, o), (0 > i || null == i) && (i = e.style[t]), rt.test(i)) return i;
			r = a && (ne.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}
	function H(e, t, n, r, i) {
		return new H.prototype.init(e, t, n, r, i)
	}
	function q() {
		return setTimeout(function() {
			pt = void 0
		}), pt = ie.now()
	}
	function _(e, t) {
		var n, r = {
			height: e
		},
			i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Se[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}
	function M(e, t, n) {
		for (var r, i = (bt[t] || []).concat(bt["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r
	}
	function F(e, t, n) {
		var r, i, o, a, s, u, l, c, d = this,
			f = {},
			p = e.style,
			h = e.nodeType && De(e),
			m = ie._data(e, "fxshow");
		n.queue || (s = ie._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
			s.unqueued || u()
		}), s.unqueued++, d.always(function() {
			d.always(function() {
				s.unqueued--, ie.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = ie.css(e, "display"), c = "none" === l ? ie._data(e, "olddisplay") || N(e.nodeName) : l, "inline" === c && "none" === ie.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (r in t) if (i = t[r], mt.exec(i)) {
			if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
				if ("show" !== i || !m || void 0 === m[r]) continue;
				h = !0
			}
			f[r] = m && m[r] || ie.style(e, r)
		} else l = void 0;
		if (ie.isEmptyObject(f))"inline" === ("none" === l ? N(e.nodeName) : l) && (p.display = l);
		else {
			m ? "hidden" in m && (h = m.hidden) : m = ie._data(e, "fxshow", {}), o && (m.hidden = !h), h ? ie(e).show() : d.done(function() {
				ie(e).hide()
			}), d.done(function() {
				var t;
				ie._removeData(e, "fxshow");
				for (t in f) ie.style(e, t, f[t])
			});
			for (r in f) a = M(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
		}
	}
	function O(e, t) {
		var n, r, i, o, a;
		for (n in e) if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ie.cssHooks[r], a && "expand" in a) {
			o = a.expand(o), delete e[r];
			for (n in o) n in e || (e[n] = o[n], t[n] = i)
		} else t[r] = i
	}
	function B(e, t, n) {
		var r, i, o = 0,
			a = yt.length,
			s = ie.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (i) return !1;
				for (var t = pt || q(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
				return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
			},
			l = s.promise({
				elem: e,
				props: ie.extend({}, t),
				opts: ie.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: pt || q(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = ie.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) l.tweens[n].run(1);
					return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for (O(c, l.opts.specialEasing); a > o; o++) if (r = yt[o].call(l, e, c, l.opts)) return r;
		return ie.map(c, M, l), ie.isFunction(l.opts.start) && l.opts.start.call(e, l), ie.fx.timer(ie.extend(u, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}
	function P(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(be) || [];
			if (ie.isFunction(n)) for (; r = o[i++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}
	function R(e, t, n, r) {
		function i(s) {
			var u;
			return o[s] = !0, ie.each(e[s] || [], function(e, s) {
				var l = s(t, n, r);
				return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
			}), u
		}
		var o = {},
			a = e === $t;
		return i(t.dataTypes[0]) || !o["*"] && i("*")
	}
	function W(e, t) {
		var n, r, i = ie.ajaxSettings.flatOptions || {};
		for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
		return n && ie.extend(!0, e, n), e
	}
	function I(e, t, n) {
		for (var r, i, o, a, s = e.contents, u = e.dataTypes;
		"*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
		if (i) for (a in s) if (s[a] && s[a].test(i)) {
			u.unshift(a);
			break
		}
		if (u[0] in n) o = u[0];
		else {
			for (a in n) {
				if (!u[0] || e.converters[a + " " + u[0]]) {
					o = a;
					break
				}
				r || (r = a)
			}
			o = o || r
		}
		return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
	}
	function $(e, t, n, r) {
		var i, o, a, s, u, l = {},
			c = e.dataTypes.slice();
		if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
		for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
		else if ("*" !== u && u !== o) {
			if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
				a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
				break
			}
			if (a !== !0) if (a && e["throws"]) t = a(t);
			else try {
				t = a(t)
			} catch (d) {
				return {
					state: "parsererror",
					error: a ? d : "No conversion from " + u + " to " + o
				}
			}
		}
		return {
			state: "success",
			data: t
		}
	}
	function z(e, t, n, r) {
		var i;
		if (ie.isArray(t)) ie.each(t, function(t, i) {
			n || Vt.test(e) ? r(e, i) : z(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== ie.type(t)) r(e, t);
		else for (i in t) z(e + "[" + i + "]", t[i], n, r)
	}
	function X() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}
	function U() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}
	function V(e) {
		return ie.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	var J = [],
		Y = J.slice,
		G = J.concat,
		Q = J.push,
		K = J.indexOf,
		Z = {},
		ee = Z.toString,
		te = Z.hasOwnProperty,
		ne = {},
		re = "1.11.3",
		ie = function(e, t) {
			return new ie.fn.init(e, t)
		},
		oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ae = /^-ms-/,
		se = /-([\da-z])/gi,
		ue = function(e, t) {
			return t.toUpperCase()
		};
	ie.fn = ie.prototype = {
		jquery: re,
		constructor: ie,
		selector: "",
		length: 0,
		toArray: function() {
			return Y.call(this)
		},
		get: function(e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
		},
		pushStack: function(e) {
			var t = ie.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return ie.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(ie.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(Y.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: Q,
		sort: J.sort,
		splice: J.splice
	}, ie.extend = ie.fn.extend = function() {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ie.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++) if (null != (i = arguments[s])) for (r in i) e = a[r], n = i[r], a !== n && (l && n && (ie.isPlainObject(n) || (t = ie.isArray(n))) ? (t ? (t = !1, o = e && ie.isArray(e) ? e : []) : o = e && ie.isPlainObject(e) ? e : {}, a[r] = ie.extend(l, o, n)) : void 0 !== n && (a[r] = n));
		return a
	}, ie.extend({
		expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === ie.type(e)
		},
		isArray: Array.isArray ||
		function(e) {
			return "array" === ie.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !ie.isArray(e) && e - parseFloat(e) + 1 >= 0
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		isPlainObject: function(e) {
			var t;
			if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
			try {
				if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			if (ne.ownLast) for (t in e) return te.call(e, t);
			for (t in e);
			return void 0 === t || te.call(e, t)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
		},
		globalEval: function(t) {
			t && ie.trim(t) && (e.execScript ||
			function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(ae, "ms-").replace(se, ue)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, r) {
			var i, o = 0,
				a = e.length,
				s = n(e);
			if (r) {
				if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
				else for (o in e) if (i = t.apply(e[o], r), i === !1) break
			} else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
			else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(oe, "")
		},
		makeArray: function(e, t) {
			var r = t || [];
			return null != e && (n(Object(e)) ? ie.merge(r, "string" == typeof e ? [e] : e) : Q.call(r, e)), r
		},
		inArray: function(e, t, n) {
			var r;
			if (t) {
				if (K) return K.call(t, e, n);
				for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
			if (n !== n) for (; void 0 !== t[r];) e[i++] = t[r++];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
			return i
		},
		map: function(e, t, r) {
			var i, o = 0,
				a = e.length,
				s = n(e),
				u = [];
			if (s) for (; a > o; o++) i = t(e[o], o, r), null != i && u.push(i);
			else for (o in e) i = t(e[o], o, r), null != i && u.push(i);
			return G.apply([], u)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, r, i;
			return "string" == typeof t && (i = e[t], t = e, e = i), ie.isFunction(e) ? (n = Y.call(arguments, 2), r = function() {
				return e.apply(t || this, n.concat(Y.call(arguments)))
			}, r.guid = e.guid = e.guid || ie.guid++, r) : void 0
		},
		now: function() {
			return +new Date
		},
		support: ne
	}), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		Z["[object " + t + "]"] = t.toLowerCase()
	});
	var le = function(e) {
			function t(e, t, n, r) {
				var i, o, a, s, u, l, d, p, h, m;
				if ((t ? t.ownerDocument || t : R) !== H && L(t), t = t || H, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
				if (!r && _) {
					if (11 !== s && (i = ye.exec(e))) if (a = i[1]) {
						if (9 === s) {
							if (o = t.getElementById(a), !o || !o.parentNode) return n;
							if (o.id === a) return n.push(o), n
						} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), n
					} else {
						if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
						if ((a = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
					}
					if (w.qsa && (!M || !M.test(e))) {
						if (p = d = P, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
							for (l = N(e), (d = t.getAttribute("id")) ? p = d.replace(xe, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + f(l[u]);
							h = be.test(e) && c(t.parentNode) || t, m = l.join(",")
						}
						if (m) try {
							return K.apply(n, h.querySelectorAll(m)), n
						} catch (g) {} finally {
							d || t.removeAttribute("id")
						}
					}
				}
				return S(e.replace(ue, "$1"), t, n, r)
			}
			function n() {
				function e(n, r) {
					return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
				}
				var t = [];
				return e
			}
			function r(e) {
				return e[P] = !0, e
			}
			function i(e) {
				var t = H.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}
			function o(e, t) {
				for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
			}
			function a(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
				if (r) return r;
				if (n) for (; n = n.nextSibling;) if (n === t) return -1;
				return e ? 1 : -1
			}
			function s(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}
			function u(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}
			function l(e) {
				return r(function(t) {
					return t = +t, r(function(n, r) {
						for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}
			function c(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e
			}
			function d() {}
			function f(e) {
				for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
				return r
			}
			function p(e, t, n) {
				var r = t.dir,
					i = n && "parentNode" === r,
					o = I++;
				return t.first ?
				function(t, n, o) {
					for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
				} : function(t, n, a) {
					var s, u, l = [W, o];
					if (a) {
						for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return !0
					} else for (; t = t[r];) if (1 === t.nodeType || i) {
						if (u = t[P] || (t[P] = {}), (s = u[r]) && s[0] === W && s[1] === o) return l[2] = s[2];
						if (u[r] = l, l[2] = e(t, n, a)) return !0
					}
				}
			}
			function h(e) {
				return e.length > 1 ?
				function(t, n, r) {
					for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
					return !0
				} : e[0]
			}
			function m(e, n, r) {
				for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
				return r
			}
			function g(e, t, n, r, i) {
				for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
				return a
			}
			function v(e, t, n, i, o, a) {
				return i && !i[P] && (i = v(i)), o && !o[P] && (o = v(o, a)), r(function(r, a, s, u) {
					var l, c, d, f = [],
						p = [],
						h = a.length,
						v = r || m(t || "*", s.nodeType ? [s] : s, []),
						y = !e || !r && t ? v : g(v, f, e, s, u),
						b = n ? o || (r ? e : h || i) ? [] : a : y;
					if (n && n(y, b, s, u), i) for (l = g(b, p), i(l, [], s, u), c = l.length; c--;)(d = l[c]) && (b[p[c]] = !(y[p[c]] = d));
					if (r) {
						if (o || e) {
							if (o) {
								for (l = [], c = b.length; c--;)(d = b[c]) && l.push(y[c] = d);
								o(null, b = [], l, u)
							}
							for (c = b.length; c--;)(d = b[c]) && (l = o ? ee(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d))
						}
					} else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : K.apply(a, b)
				})
			}
			function y(e) {
				for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p(function(e) {
					return e === t
				}, a, !0), l = p(function(e) {
					return ee(t, e) > -1
				}, a, !0), c = [function(e, n, r) {
					var i = !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
					return t = null, i
				}]; i > s; s++) if (n = T.relative[e[s].type]) c = [p(h(c), n)];
				else {
					if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) {
						for (r = ++s; i > r && !T.relative[e[r].type]; r++);
						return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e))
					}
					c.push(n)
				}
				return h(c)
			}
			function b(e, n) {
				var i = n.length > 0,
					o = e.length > 0,
					a = function(r, a, s, u, l) {
						var c, d, f, p = 0,
							h = "0",
							m = r && [],
							v = [],
							y = D,
							b = r || o && T.find.TAG("*", l),
							x = W += null == y ? 1 : Math.random() || .1,
							w = b.length;
						for (l && (D = a !== H && a); h !== w && null != (c = b[h]); h++) {
							if (o && c) {
								for (d = 0; f = e[d++];) if (f(c, a, s)) {
									u.push(c);
									break
								}
								l && (W = x)
							}
							i && ((c = !f && c) && p--, r && m.push(c))
						}
						if (p += h, i && h !== p) {
							for (d = 0; f = n[d++];) f(m, v, a, s);
							if (r) {
								if (p > 0) for (; h--;) m[h] || v[h] || (v[h] = G.call(u));
								v = g(v)
							}
							K.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
						}
						return l && (W = x, D = y), m
					};
				return i ? r(a) : a
			}
			var x, w, T, C, E, N, k, S, D, A, j, L, H, q, _, M, F, O, B, P = "sizzle" + 1 * new Date,
				R = e.document,
				W = 0,
				I = 0,
				$ = n(),
				z = n(),
				X = n(),
				U = function(e, t) {
					return e === t && (j = !0), 0
				},
				V = 1 << 31,
				J = {}.hasOwnProperty,
				Y = [],
				G = Y.pop,
				Q = Y.push,
				K = Y.push,
				Z = Y.slice,
				ee = function(e, t) {
					for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
					return -1
				},
				te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ne = "[\\x20\\t\\r\\n\\f]",
				re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				ie = re.replace("w", "w#"),
				oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
				ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
				se = new RegExp(ne + "+", "g"),
				ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
				le = new RegExp("^" + ne + "*," + ne + "*"),
				ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
				de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
				fe = new RegExp(ae),
				pe = new RegExp("^" + ie + "$"),
				he = {
					ID: new RegExp("^#(" + re + ")"),
					CLASS: new RegExp("^\\.(" + re + ")"),
					TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + oe),
					PSEUDO: new RegExp("^" + ae),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + te + ")$", "i"),
					needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
				},
				me = /^(?:input|select|textarea|button)$/i,
				ge = /^h\d$/i,
				ve = /^[^{]+\{\s*\[native \w/,
				ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				be = /[+~]/,
				xe = /'|\\/g,
				we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
				Te = function(e, t, n) {
					var r = "0x" + t - 65536;
					return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
				},
				Ce = function() {
					L()
				};
			try {
				K.apply(Y = Z.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType
			} catch (Ee) {
				K = {
					apply: Y.length ?
					function(e, t) {
						Q.apply(e, Z.call(t))
					} : function(e, t) {
						for (var n = e.length, r = 0; e[n++] = t[r++];);
						e.length = n - 1
					}
				}
			}
			w = t.support = {}, E = t.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, L = t.setDocument = function(e) {
				var t, n, r = e ? e.ownerDocument || e : R;
				return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, q = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), _ = !E(r), w.attributes = i(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), w.getElementsByTagName = i(function(e) {
					return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
				}), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = i(function(e) {
					return q.appendChild(e).id = P, !r.getElementsByName || !r.getElementsByName(P).length
				}), w.getById ? (T.find.ID = function(e, t) {
					if ("undefined" != typeof t.getElementById && _) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, T.filter.ID = function(e) {
					var t = e.replace(we, Te);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete T.find.ID, T.filter.ID = function(e) {
					var t = e.replace(we, Te);
					return function(e) {
						var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), T.find.TAG = w.getElementsByTagName ?
				function(e, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = o[i++];) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, T.find.CLASS = w.getElementsByClassName &&
				function(e, t) {
					return _ ? t.getElementsByClassName(e) : void 0
				}, F = [], M = [], (w.qsa = ve.test(r.querySelectorAll)) && (i(function(e) {
					q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || M.push(".#.+[+~]")
				}), i(function(e) {
					var t = r.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
				})), (w.matchesSelector = ve.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
					w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), F.push("!=", ae)
				}), M = M.length && new RegExp(M.join("|")), F = F.length && new RegExp(F.join("|")), t = ve.test(q.compareDocumentPosition), B = t || ve.test(q.contains) ?
				function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if (t) for (; t = t.parentNode;) if (t === e) return !0;
					return !1
				}, U = t ?
				function(e, t) {
					if (e === t) return j = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === R && B(R, e) ? -1 : t === r || t.ownerDocument === R && B(R, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if (e === t) return j = !0, 0;
					var n, i = 0,
						o = e.parentNode,
						s = t.parentNode,
						u = [e],
						l = [t];
					if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;
					if (o === s) return a(e, t);
					for (n = e; n = n.parentNode;) u.unshift(n);
					for (n = t; n = n.parentNode;) l.unshift(n);
					for (; u[i] === l[i];) i++;
					return i ? a(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
				}, r) : H
			}, t.matches = function(e, n) {
				return t(e, null, null, n)
			}, t.matchesSelector = function(e, n) {
				if ((e.ownerDocument || e) !== H && L(e), n = n.replace(de, "='$1']"), w.matchesSelector && _ && (!F || !F.test(n)) && (!M || !M.test(n))) try {
					var r = O.call(e, n);
					if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
				} catch (i) {}
				return t(n, H, null, [e]).length > 0
			}, t.contains = function(e, t) {
				return (e.ownerDocument || e) !== H && L(e), B(e, t)
			}, t.attr = function(e, t) {
				(e.ownerDocument || e) !== H && L(e);
				var n = T.attrHandle[t.toLowerCase()],
					r = n && J.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
				return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}, t.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, t.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					i = 0;
				if (j = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(U), j) {
					for (; t = e[i++];) t === e[i] && (r = n.push(i));
					for (; r--;) e.splice(n[r], 1)
				}
				return A = null, e
			}, C = t.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else for (; t = e[r++];) n += C(t);
				return n
			}, T = t.selectors = {
				cacheLength: 50,
				createPseudo: r,
				match: he,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(we, Te).toLowerCase();
						return "*" === e ?
						function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = $[e + " "];
						return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function(e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, n, r) {
						return function(i) {
							var o = t.attr(i, e);
							return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
						}
					},
					CHILD: function(e, t, n, r, i) {
						var o = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === r && 0 === i ?
						function(e) {
							return !!e.parentNode
						} : function(t, n, u) {
							var l, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
								g = t.parentNode,
								v = s && t.nodeName.toLowerCase(),
								y = !u && !s;
							if (g) {
								if (o) {
									for (; m;) {
										for (d = t; d = d[m];) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
										h = m = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if (h = [a ? g.firstChild : g.lastChild], a && y) {
									for (c = g[P] || (g[P] = {}), l = c[e] || [], p = l[0] === W && l[1], f = l[0] === W && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();) if (1 === d.nodeType && ++f && d === t) {
										c[e] = [W, p, f];
										break
									}
								} else if (y && (l = (t[P] || (t[P] = {}))[e]) && l[0] === W) f = l[1];
								else for (;
								(d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[e] = [W, f]), d !== t)););
								return f -= i, f === r || f % r === 0 && f / r >= 0
							}
						}
					},
					PSEUDO: function(e, n) {
						var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
						return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
							for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
						}) : function(e) {
							return o(e, 0, i)
						}) : o
					}
				},
				pseudos: {
					not: r(function(e) {
						var t = [],
							n = [],
							i = k(e.replace(ue, "$1"));
						return i[P] ? r(function(e, t, n, r) {
							for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
						}) : function(e, r, o) {
							return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
						}
					}),
					has: r(function(e) {
						return function(n) {
							return t(e, n).length > 0
						}
					}),
					contains: r(function(e) {
						return e = e.replace(we, Te), function(t) {
							return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
						}
					}),
					lang: r(function(e) {
						return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(), function(t) {
							var n;
							do
							if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === q
					},
					focus: function(e) {
						return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !! e.checked || "option" === t && !! e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !T.pseudos.empty(e)
					},
					header: function(e) {
						return ge.test(e.nodeName)
					},
					input: function(e) {
						return me.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: l(function() {
						return [0]
					}),
					last: l(function(e, t) {
						return [t - 1]
					}),
					eq: l(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: l(function(e, t) {
						for (var n = 0; t > n; n += 2) e.push(n);
						return e
					}),
					odd: l(function(e, t) {
						for (var n = 1; t > n; n += 2) e.push(n);
						return e
					}),
					lt: l(function(e, t, n) {
						for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
						return e
					}),
					gt: l(function(e, t, n) {
						for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}, T.pseudos.nth = T.pseudos.eq;
			for (x in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) T.pseudos[x] = s(x);
			for (x in {
				submit: !0,
				reset: !0
			}) T.pseudos[x] = u(x);
			return d.prototype = T.filters = T.pseudos, T.setFilters = new d, N = t.tokenize = function(e, n) {
				var r, i, o, a, s, u, l, c = z[e + " "];
				if (c) return n ? 0 : c.slice(0);
				for (s = e, u = [], l = T.preFilter; s;) {
					(!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
						value: r,
						type: i[0].replace(ue, " ")
					}), s = s.slice(r.length));
					for (a in T.filter)!(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
						value: r,
						type: a,
						matches: i
					}), s = s.slice(r.length));
					if (!r) break
				}
				return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
			}, k = t.compile = function(e, t) {
				var n, r = [],
					i = [],
					o = X[e + " "];
				if (!o) {
					for (t || (t = N(e)), n = t.length; n--;) o = y(t[n]), o[P] ? r.push(o) : i.push(o);
					o = X(e, b(i, r)), o.selector = e
				}
				return o
			}, S = t.select = function(e, t, n, r) {
				var i, o, a, s, u, l = "function" == typeof e && e,
					d = !r && N(e = l.selector || e);
				if (n = n || [], 1 === d.length) {
					if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
						if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
						l && (t = t.parentNode), e = e.slice(o.shift().value.length)
					}
					for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);) if ((u = T.find[s]) && (r = u(a.matches[0].replace(we, Te), be.test(o[0].type) && c(t.parentNode) || t))) {
						if (o.splice(i, 1), e = r.length && f(o), !e) return K.apply(n, r), n;
						break
					}
				}
				return (l || k(e, d))(r, t, !_, n, be.test(e) && c(t.parentNode) || t), n
			}, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !! j, L(), w.sortDetached = i(function(e) {
				return 1 & e.compareDocumentPosition(H.createElement("div"))
			}), i(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || o("type|href|height|width", function(e, t, n) {
				return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), w.attributes && i(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || o("value", function(e, t, n) {
				return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
			}), i(function(e) {
				return null == e.getAttribute("disabled")
			}) || o(te, function(e, t, n) {
				var r;
				return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}), t
		}(e);
	ie.find = le, ie.expr = le.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = le.uniqueSort, ie.text = le.getText, ie.isXMLDoc = le.isXML, ie.contains = le.contains;
	var ce = ie.expr.match.needsContext,
		de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		fe = /^.[^:#\[\.,]*$/;
	ie.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, ie.fn.extend({
		find: function(e) {
			var t, n = [],
				r = this,
				i = r.length;
			if ("string" != typeof e) return this.pushStack(ie(e).filter(function() {
				for (t = 0; i > t; t++) if (ie.contains(r[t], this)) return !0
			}));
			for (t = 0; i > t; t++) ie.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? ie.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		filter: function(e) {
			return this.pushStack(r(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(r(this, e || [], !0))
		},
		is: function(e) {
			return !!r(this, "string" == typeof e && ce.test(e) ? ie(e) : e || [], !1).length
		}
	});
	var pe, he = e.document,
		me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ge = ie.fn.init = function(e, t) {
			var n, r;
			if (!e) return this;
			if ("string" == typeof e) {
				if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
				if (n[1]) {
					if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && ie.isPlainObject(t)) for (n in t) ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				if (r = he.getElementById(n[2]), r && r.parentNode) {
					if (r.id !== n[2]) return pe.find(e);
					this.length = 1, this[0] = r
				}
				return this.context = he, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
		};
	ge.prototype = ie.fn, pe = ie(he);
	var ve = /^(?:parents|prev(?:Until|All))/,
		ye = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ie.extend({
		dir: function(e, t, n) {
			for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ie(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
			return r
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), ie.fn.extend({
		has: function(e) {
			var t, n = ie(e, this),
				r = n.length;
			return this.filter(function() {
				for (t = 0; r > t; t++) if (ie.contains(this, n[t])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, r = 0, i = this.length, o = [], a = ce.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
				o.push(n);
				break
			}
			return this.pushStack(o.length > 1 ? ie.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? ie.inArray(this[0], ie(e)) : ie.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), ie.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return ie.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return ie.dir(e, "parentNode", n)
		},
		next: function(e) {
			return i(e, "nextSibling")
		},
		prev: function(e) {
			return i(e, "previousSibling")
		},
		nextAll: function(e) {
			return ie.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return ie.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return ie.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return ie.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return ie.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return ie.sibling(e.firstChild)
		},
		contents: function(e) {
			return ie.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ie.merge([], e.childNodes)
		}
	}, function(e, t) {
		ie.fn[e] = function(n, r) {
			var i = ie.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), this.length > 1 && (ye[e] || (i = ie.unique(i)), ve.test(e) && (i = i.reverse())), this.pushStack(i)
		}
	});
	var be = /\S+/g,
		xe = {};
	ie.Callbacks = function(e) {
		e = "string" == typeof e ? xe[e] || o(e) : ie.extend({}, e);
		var t, n, r, i, a, s, u = [],
			l = !e.once && [],
			c = function(o) {
				for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = u.length, t = !0; u && i > a; a++) if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
					n = !1;
					break
				}
				t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
			},
			d = {
				add: function() {
					if (u) {
						var r = u.length;
						!
						function o(t) {
							ie.each(t, function(t, n) {
								var r = ie.type(n);
								"function" === r ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
							})
						}(arguments), t ? i = u.length : n && (s = r, c(n))
					}
					return this
				},
				remove: function() {
					return u && ie.each(arguments, function(e, n) {
						for (var r;
						(r = ie.inArray(n, u, r)) > -1;) u.splice(r, 1), t && (i >= r && i--, a >= r && a--)
					}), this
				},
				has: function(e) {
					return e ? ie.inArray(e, u) > -1 : !(!u || !u.length)
				},
				empty: function() {
					return u = [], i = 0, this
				},
				disable: function() {
					return u = l = n = void 0, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return l = void 0, n || d.disable(), this
				},
				locked: function() {
					return !l
				},
				fireWith: function(e, n) {
					return !u || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this
				},
				fire: function() {
					return d.fireWith(this, arguments), this
				},
				fired: function() {
					return !!r
				}
			};
		return d
	}, ie.extend({
		Deferred: function(e) {
			var t = [
				["resolve", "done", ie.Callbacks("once memory"), "resolved"],
				["reject", "fail", ie.Callbacks("once memory"), "rejected"],
				["notify", "progress", ie.Callbacks("memory")]
			],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return ie.Deferred(function(n) {
							ie.each(t, function(t, o) {
								var a = ie.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = a && a.apply(this, arguments);
									e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? ie.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, ie.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t, n, r, i = 0,
				o = Y.call(arguments),
				a = o.length,
				s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
				u = 1 === s ? e : ie.Deferred(),
				l = function(e, n, r) {
					return function(i) {
						n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
					}
				};
			if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ie.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
			return s || u.resolveWith(r, o), u.promise()
		}
	});
	var we;
	ie.fn.ready = function(e) {
		return ie.ready.promise().done(e), this
	}, ie.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? ie.readyWait++ : ie.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? !--ie.readyWait : !ie.isReady) {
				if (!he.body) return setTimeout(ie.ready);
				ie.isReady = !0, e !== !0 && --ie.readyWait > 0 || (we.resolveWith(he, [ie]), ie.fn.triggerHandler && (ie(he).triggerHandler("ready"), ie(he).off("ready")))
			}
		}
	}), ie.ready.promise = function(t) {
		if (!we) if (we = ie.Deferred(), "complete" === he.readyState) setTimeout(ie.ready);
		else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
		else {
			he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
			var n = !1;
			try {
				n = null == e.frameElement && he.documentElement
			} catch (r) {}
			n && n.doScroll && !
			function i() {
				if (!ie.isReady) {
					try {
						n.doScroll("left")
					} catch (e) {
						return setTimeout(i, 50)
					}
					a(), ie.ready()
				}
			}()
		}
		return we.promise(t)
	};
	var Te, Ce = "undefined";
	for (Te in ie(ne)) break;
	ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, ie(function() {
		var e, t, n, r;
		n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
	}), function() {
		var e = he.createElement("div");
		if (null == ne.deleteExpando) {
			ne.deleteExpando = !0;
			try {
				delete e.test
			} catch (t) {
				ne.deleteExpando = !1
			}
		}
		e = null
	}(), ie.acceptData = function(e) {
		var t = ie.noData[(e.nodeName + " ").toLowerCase()],
			n = +e.nodeType || 1;
		return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
	};
	var Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Ne = /([A-Z])/g;
	ie.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return e = e.nodeType ? ie.cache[e[ie.expando]] : e[ie.expando], !! e && !l(e)
		},
		data: function(e, t, n) {
			return c(e, t, n)
		},
		removeData: function(e, t) {
			return d(e, t)
		},
		_data: function(e, t, n) {
			return c(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return d(e, t, !0)
		}
	}), ie.fn.extend({
		data: function(e, t) {
			var n, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 === e) {
				if (this.length && (i = ie.data(o), 1 === o.nodeType && !ie._data(o, "parsedAttrs"))) {
					for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), u(o, r, i[r])));
					ie._data(o, "parsedAttrs", !0)
				}
				return i
			}
			return "object" == typeof e ? this.each(function() {
				ie.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				ie.data(this, e, t)
			}) : o ? u(o, e, ie.data(o, e)) : void 0
		},
		removeData: function(e) {
			return this.each(function() {
				ie.removeData(this, e)
			})
		}
	}), ie.extend({
		queue: function(e, t, n) {
			var r;
			return e ? (t = (t || "fx") + "queue", r = ie._data(e, t), n && (!r || ie.isArray(n) ? r = ie._data(e, t, ie.makeArray(n)) : r.push(n)), r || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = ie.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = ie._queueHooks(e, t),
				a = function() {
					ie.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return ie._data(e, n) || ie._data(e, n, {
				empty: ie.Callbacks("once memory").add(function() {
					ie._removeData(e, t + "queue"), ie._removeData(e, n)
				})
			})
		}
	}), ie.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = ie.queue(this, e, t);
				ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				ie.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = ie.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--r || i.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ie._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	});
	var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Se = ["Top", "Right", "Bottom", "Left"],
		De = function(e, t) {
			return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e)
		},
		Ae = ie.access = function(e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === ie.type(n)) {
				i = !0;
				for (s in n) ie.access(e, t, s, n[s], !0, o, a)
			} else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
				return l.call(ie(e), n)
			})), t)) for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		je = /^(?:checkbox|radio)$/i;
	!
	function() {
		var e = he.createElement("input"),
			t = he.createElement("div"),
			n = he.createDocumentFragment();
		if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !! t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !! t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
			ne.noCloneEvent = !1
		}), t.cloneNode(!0).click()), null == ne.deleteExpando) {
			ne.deleteExpando = !0;
			try {
				delete t.test
			} catch (r) {
				ne.deleteExpando = !1
			}
		}
	}(), function() {
		var t, n, r = he.createElement("div");
		for (t in {
			submit: !0,
			change: !0,
			focusin: !0
		}) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), ne[t + "Bubbles"] = r.attributes[n].expando === !1);
		r = null
	}();
	var Le = /^(?:input|select|textarea)$/i,
		He = /^key/,
		qe = /^(?:mouse|pointer|contextmenu)|click/,
		_e = /^(?:focusinfocus|focusoutblur)$/,
		Me = /^([^.]*)(?:\.(.+)|)$/;
	ie.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var o, a, s, u, l, c, d, f, p, h, m, g = ie._data(e);
			if (g) {
				for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ie.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
					return typeof ie === Ce || e && ie.event.triggered === e.type ? void 0 : ie.event.dispatch.apply(c.elem, arguments)
				}, c.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = Me.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (l = ie.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = ie.event.special[p] || {}, d = ie.extend({
					type: p,
					origType: m,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && ie.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, u), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), ie.event.global[p] = !0);
				e = null
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, l, c, d, f, p, h, m, g = ie.hasData(e) && ie._data(e);
			if (g && (c = g.events)) {
				for (t = (t || "").match(be) || [""], l = t.length; l--;) if (s = Me.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
					for (d = ie.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
					u && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ie.removeEvent(e, p, g.handle), delete c[p])
				} else for (p in c) ie.event.remove(e, p + t[l], n, r, !0);
				ie.isEmptyObject(c) && (delete g.handle, ie._removeData(e, "events"))
			}
		},
		trigger: function(t, n, r, i) {
			var o, a, s, u, l, c, d, f = [r || he],
				p = te.call(t, "type") ? t.type : t,
				h = te.call(t, "namespace") ? t.namespace.split(".") : [];
			if (s = c = r = r || he, 3 !== r.nodeType && 8 !== r.nodeType && !_e.test(p + ie.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[ie.expando] ? t : new ie.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), l = ie.event.special[p] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
				if (!i && !l.noBubble && !ie.isWindow(r)) {
					for (u = l.delegateType || p, _e.test(u + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
					c === (r.ownerDocument || he) && f.push(c.defaultView || c.parentWindow || e)
				}
				for (d = 0;
				(s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? u : l.bindType || p, o = (ie._data(s, "events") || {})[t.type] && ie._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && ie.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
				if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && ie.acceptData(r) && a && r[p] && !ie.isWindow(r)) {
					c = r[a], c && (r[a] = null), ie.event.triggered = p;
					try {
						r[p]()
					} catch (m) {}
					ie.event.triggered = void 0, c && (r[a] = c)
				}
				return t.result
			}
		},
		dispatch: function(e) {
			e = ie.event.fix(e);
			var t, n, r, i, o, a = [],
				s = Y.call(arguments),
				u = (ie._data(this, "events") || {})[e.type] || [],
				l = ie.event.special[e.type] || {};
			if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
				for (a = ie.event.handlers.call(this, e, u), t = 0;
				(i = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, o = 0;
				(r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((ie.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a = [],
				s = t.delegateCount,
				u = e.target;
			if (s && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
				for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ie(n, this).index(u) >= 0 : ie.find(n, this, null, [u]).length), i[n] && i.push(r);
				i.length && a.push({
					elem: u,
					handlers: i
				})
			}
			return s < t.length && a.push({
				elem: this,
				handlers: t.slice(s)
			}), a
		},
		fix: function(e) {
			if (e[ie.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				a = this.fixHooks[i];
			for (a || (this.fixHooks[i] = a = qe.test(i) ? this.mouseHooks : He.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, a.filter ? a.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, r, i, o = t.button,
					a = t.fromElement;
				return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || he, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== h() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === h() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return ie.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = ie.extend(new ie.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, ie.removeEvent = he.removeEventListener ?
	function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === Ce && (e[r] = null), e.detachEvent(r, n))
	}, ie.Event = function(e, t) {
		return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t)
	}, ie.Event.prototype = {
		isDefaultPrevented: p,
		isPropagationStopped: p,
		isImmediatePropagationStopped: p,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, ie.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		ie.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== r && !ie.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), ne.submitBubbles || (ie.event.special.submit = {
		setup: function() {
			return ie.nodeName(this, "form") ? !1 : void ie.event.add(this, "click._submit keypress._submit", function(e) {
				var t = e.target,
					n = ie.nodeName(t, "input") || ie.nodeName(t, "button") ? t.form : void 0;
				n && !ie._data(n, "submitBubbles") && (ie.event.add(n, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), ie._data(n, "submitBubbles", !0))
			})
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ie.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return ie.nodeName(this, "form") ? !1 : void ie.event.remove(this, "._submit")
		}
	}), ne.changeBubbles || (ie.event.special.change = {
		setup: function() {
			return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ie.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), ie.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, e, !0)
			})), !1) : void ie.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Le.test(t.nodeName) && !ie._data(t, "changeBubbles") && (ie.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || ie.event.simulate("change", this.parentNode, e, !0)
				}), ie._data(t, "changeBubbles", !0))
			})
		},
		handle: function(e) {
			var t = e.target;
			return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return ie.event.remove(this, "._change"), !Le.test(this.nodeName)
		}
	}), ne.focusinBubbles || ie.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
				ie.event.simulate(t, e.target, ie.event.fix(e), !0)
			};
		ie.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this,
					i = ie._data(r, t);
				i || r.addEventListener(e, n, !0), ie._data(r, t, (i || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this,
					i = ie._data(r, t) - 1;
				i ? ie._data(r, t, i) : (r.removeEventListener(e, n, !0), ie._removeData(r, t))
			}
		}
	}), ie.fn.extend({
		on: function(e, t, n, r, i) {
			var o, a;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = void 0);
				for (o in e) this.on(o, t, n, e[o], i);
				return this
			}
			if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
			else if (!r) return this;
			return 1 === i && (a = r, r = function(e) {
				return ie().off(e), a.apply(this, arguments)
			}, r.guid = a.guid || (a.guid = ie.guid++)), this.each(function() {
				ie.event.add(this, e, r, n, t)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
				ie.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				ie.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? ie.event.trigger(e, t, n, !0) : void 0
		}
	});
	var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Oe = / jQuery\d+="(?:null|\d+)"/g,
		Be = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
		Pe = /^\s+/,
		Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		We = /<([\w:]+)/,
		Ie = /<tbody/i,
		$e = /<|&#?\w+;/,
		ze = /<(?:script|style|link)/i,
		Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ue = /^$|\/(?:java|ecma)script/i,
		Ve = /^true\/(.*)/,
		Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Ye = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		Ge = m(he),
		Qe = Ge.appendChild(he.createElement("div"));
	Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td, ie.extend({
		clone: function(e, t, n) {
			var r, i, o, a, s, u = ie.contains(e.ownerDocument, e);
			if (ne.html5Clone || ie.isXMLDoc(e) || !Be.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Qe.innerHTML = e.outerHTML, Qe.removeChild(o = Qe.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e))) for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && C(i, r[a]);
			if (t) if (n) for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
			else T(e, o);
			return r = g(o, "script"), r.length > 0 && w(r, !u && g(e, "script")), r = s = i = null, o
		},
		buildFragment: function(e, t, n, r) {
			for (var i, o, a, s, u, l, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++) if (o = e[h], o || 0 === o) if ("object" === ie.type(o)) ie.merge(p, o.nodeType ? [o] : o);
			else if ($e.test(o)) {
				for (s = s || f.appendChild(t.createElement("div")), u = (We.exec(o) || ["", ""])[1].toLowerCase(), c = Ye[u] || Ye._default, s.innerHTML = c[1] + o.replace(Re, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
				if (!ne.leadingWhitespace && Pe.test(o) && p.push(t.createTextNode(Pe.exec(o)[0])), !ne.tbody) for (o = "table" !== u || Ie.test(o) ? "<table>" !== c[1] || Ie.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ie.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
				for (ie.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
				s = f.lastChild
			} else p.push(t.createTextNode(o));
			for (s && f.removeChild(s), ne.appendChecked || ie.grep(g(p, "input"), v), h = 0; o = p[h++];) if ((!r || -1 === ie.inArray(o, r)) && (a = ie.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n)) for (i = 0; o = s[i++];) Ue.test(o.type || "") && n.push(o);
			return s = null, f
		},
		cleanData: function(e, t) {
			for (var n, r, i, o, a = 0, s = ie.expando, u = ie.cache, l = ne.deleteExpando, c = ie.event.special; null != (n = e[a]); a++) if ((t || ie.acceptData(n)) && (i = n[s], o = i && u[i])) {
				if (o.events) for (r in o.events) c[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, o.handle);
				u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Ce ? n.removeAttribute(s) : n[s] = null, J.push(i))
			}
		}
	}), ie.fn.extend({
		text: function(e) {
			return Ae(this, function(e) {
				return void 0 === e ? ie.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = y(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = y(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, r = e ? ie.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ie.cleanData(g(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && ie.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && ie.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return ie.clone(this, e, t)
			})
		},
		html: function(e) {
			return Ae(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") : void 0;
				if ("string" == typeof e && !ze.test(e) && (ne.htmlSerialize || !Be.test(e)) && (ne.leadingWhitespace || !Pe.test(e)) && !Ye[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(Re, "<$1></$2>");
					try {
						for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(g(t, !1)), t.innerHTML = e);
						t = 0
					} catch (i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, ie.cleanData(g(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = G.apply([], e);
			var n, r, i, o, a, s, u = 0,
				l = this.length,
				c = this,
				d = l - 1,
				f = e[0],
				p = ie.isFunction(f);
			if (p || l > 1 && "string" == typeof f && !ne.checkClone && Xe.test(f)) return this.each(function(n) {
				var r = c.eq(n);
				p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
			});
			if (l && (s = ie.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
				for (o = ie.map(g(s, "script"), b), i = o.length; l > u; u++) r = s, u !== d && (r = ie.clone(r, !0, !0), i && ie.merge(o, g(r, "script"))), t.call(this[u], r, u);
				if (i) for (a = o[o.length - 1].ownerDocument, ie.map(o, x), u = 0; i > u; u++) r = o[u], Ue.test(r.type || "") && !ie._data(r, "globalEval") && ie.contains(a, r) && (r.src ? ie._evalUrl && ie._evalUrl(r.src) : ie.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Je, "")));
				s = n = null
			}
			return this
		}
	}), ie.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		ie.fn[e] = function(e) {
			for (var n, r = 0, i = [], o = ie(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ie(o[r])[t](n), Q.apply(i, n.get());
			return this.pushStack(i)
		}
	});
	var Ke, Ze = {};
	!
	function() {
		var e;
		ne.shrinkWrapBlocks = function() {
			if (null != e) return e;
			e = !1;
			var t, n, r;
			return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
		}
	}();
	var et, tt, nt = /^margin/,
		rt = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"),
		it = /^(top|right|bottom|left)$/;
	e.getComputedStyle ? (et = function(t) {
		return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
	}, tt = function(e, t, n) {
		var r, i, o, a, s = e.style;
		return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), rt.test(a) && nt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
	}) : he.documentElement.currentStyle && (et = function(e) {
		return e.currentStyle
	}, tt = function(e, t, n) {
		var r, i, o, a, s = e.style;
		return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rt.test(a) && !it.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
	}), function() {
		function t() {
			var t, n, r, i;
			n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
				width: "4px"
			}).width, i = t.appendChild(he.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
		}
		var n, r, i, o, a, s, u;
		n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === r.opacity, ne.cssFloat = !! r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, ie.extend(ne, {
			reliableHiddenOffsets: function() {
				return null == s && t(), s
			},
			boxSizingReliable: function() {
				return null == a && t(), a
			},
			pixelPosition: function() {
				return null == o && t(), o
			},
			reliableMarginRight: function() {
				return null == u && t(), u
			}
		}))
	}(), ie.swap = function(e, t, n, r) {
		var i, o, a = {};
		for (o in t) a[o] = e.style[o], e.style[o] = t[o];
		i = n.apply(e, r || []);
		for (o in t) e.style[o] = a[o];
		return i
	};
	var ot = /alpha\([^)]*\)/i,
		at = /opacity\s*=\s*([^)]*)/,
		st = /^(none|table(?!-c[ea]).+)/,
		ut = new RegExp("^(" + ke + ")(.*)$", "i"),
		lt = new RegExp("^([+-])=(" + ke + ")", "i"),
		ct = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		dt = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		ft = ["Webkit", "O", "Moz", "ms"];
	ie.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = tt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": ne.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = ie.camelCase(t),
					u = e.style;
				if (t = ie.cssProps[s] || (ie.cssProps[s] = S(u, s)), a = ie.cssHooks[t] || ie.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
				if (o = typeof n, "string" === o && (i = lt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ie.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
					u[t] = n
				} catch (l) {}
			}
		},
		css: function(e, t, n, r) {
			var i, o, a, s = ie.camelCase(t);
			return t = ie.cssProps[s] || (ie.cssProps[s] = S(e.style, s)), a = ie.cssHooks[t] || ie.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, r)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || ie.isNumeric(i) ? i || 0 : o) : o
		}
	}), ie.each(["height", "width"], function(e, t) {
		ie.cssHooks[t] = {
			get: function(e, n, r) {
				return n ? st.test(ie.css(e, "display")) && 0 === e.offsetWidth ? ie.swap(e, ct, function() {
					return L(e, t, r)
				}) : L(e, t, r) : void 0
			},
			set: function(e, n, r) {
				var i = r && et(e);
				return A(e, n, r ? j(e, t, r, ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), ne.opacity || (ie.cssHooks.opacity = {
		get: function(e, t) {
			return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = r && r.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === ie.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ot.test(o) ? o.replace(ot, i) : o + " " + i)
		}
	}), ie.cssHooks.marginRight = k(ne.reliableMarginRight, function(e, t) {
		return t ? ie.swap(e, {
			display: "inline-block"
		}, tt, [e, "marginRight"]) : void 0
	}), ie.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		ie.cssHooks[e + t] = {
			expand: function(n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Se[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, nt.test(e) || (ie.cssHooks[e + t].set = A)
	}), ie.fn.extend({
		css: function(e, t) {
			return Ae(this, function(e, t, n) {
				var r, i, o = {},
					a = 0;
				if (ie.isArray(t)) {
					for (r = et(e), i = t.length; i > a; a++) o[t[a]] = ie.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return D(this, !0)
		},
		hide: function() {
			return D(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				De(this) ? ie(this).show() : ie(this).hide()
			})
		}
	}), ie.Tween = H, H.prototype = {
		constructor: H,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = H.propHooks[this.prop];
			return e && e.get ? e.get(this) : H.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = H.propHooks[this.prop];
			return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
		}
	}, H.prototype.init.prototype = H.prototype, H.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, ie.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, ie.fx = H.prototype.init, ie.fx.step = {};
	var pt, ht, mt = /^(?:toggle|show|hide)$/,
		gt = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"),
		vt = /queueHooks$/,
		yt = [F],
		bt = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = gt.exec(t),
					o = i && i[3] || (ie.cssNumber[e] ? "" : "px"),
					a = (ie.cssNumber[e] || "px" !== o && +r) && gt.exec(ie.css(n.elem, e)),
					s = 1,
					u = 20;
				if (a && a[3] !== o) {
					o = o || a[3], i = i || [], a = +r || 1;
					do s = s || ".5", a /= s, ie.style(n.elem, e, a + o);
					while (s !== (s = n.cur() / r) && 1 !== s && --u)
				}
				return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};
	ie.Animation = ie.extend(B, {
		tweener: function(e, t) {
			ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for (var n, r = 0, i = e.length; i > r; r++) n = e[r], bt[n] = bt[n] || [], bt[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? yt.unshift(e) : yt.push(e)
		}
	}), ie.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? ie.extend({}, e) : {
			complete: n || !n && t || ie.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !ie.isFunction(t) && t
		};
		return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue)
		}, r
	}, ie.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(De).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = ie.isEmptyObject(e),
				o = ie.speed(t, n, r),
				a = function() {
					var t = B(this, ie.extend({}, e), o);
					(i || ie._data(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(e, t, n) {
			var r = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
			return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					i = null != e && e + "queueHooks",
					o = ie.timers,
					a = ie._data(this);
				if (i) a[i] && a[i].stop && r(a[i]);
				else for (i in a) a[i] && a[i].stop && vt.test(i) && r(a[i]);
				for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
				(t || !n) && ie.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = ie._data(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = ie.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	}), ie.each(["toggle", "show", "hide"], function(e, t) {
		var n = ie.fn[t];
		ie.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, r, i)
		}
	}), ie.each({
		slideDown: _("show"),
		slideUp: _("hide"),
		slideToggle: _("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		ie.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), ie.timers = [], ie.fx.tick = function() {
		var e, t = ie.timers,
			n = 0;
		for (pt = ie.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
		t.length || ie.fx.stop(), pt = void 0
	}, ie.fx.timer = function(e) {
		ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop()
	}, ie.fx.interval = 13, ie.fx.start = function() {
		ht || (ht = setInterval(ie.fx.tick, ie.fx.interval))
	}, ie.fx.stop = function() {
		clearInterval(ht), ht = null
	}, ie.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, ie.fn.delay = function(e, t) {
		return e = ie.fx ? ie.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
			var r = setTimeout(t, e);
			n.stop = function() {
				clearTimeout(r)
			}
		})
	}, function() {
		var e, t, n, r, i;
		t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = he.createElement("select"), i = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(r.getAttribute("style")), ne.hrefNormalized = "/a" === r.getAttribute("href"), ne.checkOn = !! e.value, ne.optSelected = i.selected, ne.enctype = !! he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !i.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
	}();
	var xt = /\r/g;
	ie.fn.extend({
		val: function(e) {
			var t, n, r, i = this[0]; {
				if (arguments.length) return r = ie.isFunction(e), this.each(function(n) {
					var i;
					1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function(e) {
						return null == e ? "" : e + ""
					})), t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				});
				if (i) return t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)
			}
		}
	}), ie.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = ie.find.attr(e, "value");
					return null != t ? t : ie.trim(ie.text(e))
				}
			},
			select: {
				get: function(e) {
					for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++) if (n = r[u], (n.selected || u === i) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ie.nodeName(n.parentNode, "optgroup"))) {
						if (t = ie(n).val(), o) return t;
						a.push(t)
					}
					return a
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--;) if (r = i[a], ie.inArray(ie.valHooks.option.get(r), o) >= 0) try {
						r.selected = n = !0
					} catch (s) {
						r.scrollHeight
					} else r.selected = !1;
					return n || (e.selectedIndex = -1), i
				}
			}
		}
	}), ie.each(["radio", "checkbox"], function() {
		ie.valHooks[this] = {
			set: function(e, t) {
				return ie.isArray(t) ? e.checked = ie.inArray(ie(e).val(), t) >= 0 : void 0
			}
		}, ne.checkOn || (ie.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var wt, Tt, Ct = ie.expr.attrHandle,
		Et = /^(?:checked|selected)$/i,
		Nt = ne.getSetAttribute,
		kt = ne.input;
	ie.fn.extend({
		attr: function(e, t) {
			return Ae(this, ie.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				ie.removeAttr(this, e)
			})
		}
	}), ie.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ce ? ie.prop(e, t, n) : (1 === o && ie.isXMLDoc(e) || (t = t.toLowerCase(), r = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? Tt : wt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ie.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ie.removeAttr(e, t))
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(be);
			if (o && 1 === e.nodeType) for (; n = o[i++];) r = ie.propFix[n] || n, ie.expr.match.bool.test(n) ? kt && Nt || !Et.test(n) ? e[r] = !1 : e[ie.camelCase("default-" + n)] = e[r] = !1 : ie.attr(e, n, ""), e.removeAttribute(Nt ? n : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!ne.radioValue && "radio" === t && ie.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), Tt = {
		set: function(e, t, n) {
			return t === !1 ? ie.removeAttr(e, n) : kt && Nt || !Et.test(n) ? e.setAttribute(!Nt && ie.propFix[n] || n, n) : e[ie.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = Ct[t] || ie.find.attr;
		Ct[t] = kt && Nt || !Et.test(t) ?
		function(e, t, r) {
			var i, o;
			return r || (o = Ct[t], Ct[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ct[t] = o), i
		} : function(e, t, n) {
			return n ? void 0 : e[ie.camelCase("default-" + t)] ? t.toLowerCase() : null
		}
	}), kt && Nt || (ie.attrHooks.value = {
		set: function(e, t, n) {
			return ie.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
		}
	}), Nt || (wt = {
		set: function(e, t, n) {
			var r = e.getAttributeNode(n);
			return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
		}
	}, Ct.id = Ct.name = Ct.coords = function(e, t, n) {
		var r;
		return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
	}, ie.valHooks.button = {
		get: function(e, t) {
			var n = e.getAttributeNode(t);
			return n && n.specified ? n.value : void 0
		},
		set: wt.set
	}, ie.attrHooks.contenteditable = {
		set: function(e, t, n) {
			wt.set(e, "" === t ? !1 : t, n)
		}
	}, ie.each(["width", "height"], function(e, t) {
		ie.attrHooks[t] = {
			set: function(e, n) {
				return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
			}
		}
	})), ne.style || (ie.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || void 0
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	});
	var St = /^(?:input|select|textarea|button|object)$/i,
		Dt = /^(?:a|area)$/i;
	ie.fn.extend({
		prop: function(e, t) {
			return Ae(this, ie.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = ie.propFix[e] || e, this.each(function() {
				try {
					this[e] = void 0, delete this[e]
				} catch (t) {}
			})
		}
	}), ie.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var r, i, o, a = e.nodeType;
			if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ie.isXMLDoc(e), o && (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = ie.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : St.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), ne.hrefNormalized || ie.each(["href", "src"], function(e, t) {
		ie.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), ne.optSelected || (ie.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		ie.propFix[this.toLowerCase()] = this
	}), ne.enctype || (ie.propFix.enctype = "encoding");
	var At = /[\t\r\n\f]/g;
	ie.fn.extend({
		addClass: function(e) {
			var t, n, r, i, o, a, s = 0,
				u = this.length,
				l = "string" == typeof e && e;
			if (ie.isFunction(e)) return this.each(function(t) {
				ie(this).addClass(e.call(this, t, this.className))
			});
			if (l) for (t = (e || "").match(be) || []; u > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
				for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
				a = ie.trim(r), n.className !== a && (n.className = a)
			}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a, s = 0,
				u = this.length,
				l = 0 === arguments.length || "string" == typeof e && e;
			if (ie.isFunction(e)) return this.each(function(t) {
				ie(this).removeClass(e.call(this, t, this.className))
			});
			if (l) for (t = (e || "").match(be) || []; u > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
				for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
				a = e ? ie.trim(r) : "", n.className !== a && (n.className = a)
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ie.isFunction(e) ? this.each(function(n) {
				ie(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if ("string" === n) for (var t, r = 0, i = ie(this), o = e.match(be) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
				else(n === Ce || "boolean" === n) && (this.className && ie._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ie._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	}), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		ie.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), ie.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var jt = ie.now(),
		Lt = /\?/,
		Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	ie.parseJSON = function(t) {
		if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
		var n, r = null,
			i = ie.trim(t + "");
		return i && !ie.trim(i.replace(Ht, function(e, t, i, o) {
			return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
		})) ? Function("return " + i)() : ie.error("Invalid JSON: " + t)
	}, ie.parseXML = function(t) {
		var n, r;
		if (!t || "string" != typeof t) return null;
		try {
			e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
		} catch (i) {
			n = void 0
		}
		return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t), n
	};
	var qt, _t, Mt = /#.*$/,
		Ft = /([?&])_=[^&]*/,
		Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Pt = /^(?:GET|HEAD)$/,
		Rt = /^\/\//,
		Wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		It = {},
		$t = {},
		zt = "*/".concat("*");
	try {
		_t = location.href
	} catch (Xt) {
		_t = he.createElement("a"), _t.href = "", _t = _t.href
	}
	qt = Wt.exec(_t.toLowerCase()) || [], ie.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: _t,
			type: "GET",
			isLocal: Bt.test(qt[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": zt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": ie.parseJSON,
				"text xml": ie.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? W(W(e, ie.ajaxSettings), t) : W(ie.ajaxSettings, e)
		},
		ajaxPrefilter: P(It),
		ajaxTransport: P($t),
		ajax: function(e, t) {
			function n(e, t, n, r) {
				var i, c, v, y, x, T = t;
				2 !== b && (b = 2, s && clearTimeout(s), l = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = I(d, w, n)), y = $(d, y, w, i), i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (ie.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (ie.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, i = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]), w.statusCode(g), g = void 0, u && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]), m.fireWith(f, [w, T]), u && (p.trigger("ajaxComplete", [w, d]), --ie.active || ie.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var r, i, o, a, s, u, l, c, d = ie.ajaxSetup({}, t),
				f = d.context || d,
				p = d.context && (f.nodeType || f.jquery) ? ie(f) : ie.event,
				h = ie.Deferred(),
				m = ie.Callbacks("once memory"),
				g = d.statusCode || {},
				v = {},
				y = {},
				b = 0,
				x = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === b) {
							if (!c) for (c = {}; t = Ot.exec(a);) c[t[1].toLowerCase()] = t[2];
							t = c[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === b ? a : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return b || (e = y[n] = y[n] || e, v[e] = t), this
					},
					overrideMimeType: function(e) {
						return b || (d.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e) if (2 > b) for (t in e) g[t] = [g[t], e[t]];
						else w.always(e[w.status]);
						return this
					},
					abort: function(e) {
						var t = e || x;
						return l && l.abort(t), n(0, t), this
					}
				};
			if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || _t) + "").replace(Mt, "").replace(Rt, qt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ie.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (r = Wt.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === qt[1] && r[2] === qt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (qt[3] || ("http:" === qt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ie.param(d.data, d.traditional)), R(It, d, t, w), 2 === b) return w;
			u = ie.event && d.global, u && 0 === ie.active++ && ie.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Pt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Lt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ft.test(o) ? o.replace(Ft, "$1_=" + jt++) : o + (Lt.test(o) ? "&" : "?") + "_=" + jt++)), d.ifModified && (ie.lastModified[o] && w.setRequestHeader("If-Modified-Since", ie.lastModified[o]), ie.etag[o] && w.setRequestHeader("If-None-Match", ie.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : d.accepts["*"]);
			for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
			if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
			x = "abort";
			for (i in {
				success: 1,
				error: 1,
				complete: 1
			}) w[i](d[i]);
			if (l = R($t, d, t, w)) {
				w.readyState = 1, u && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
					w.abort("timeout")
				}, d.timeout));
				try {
					b = 1, l.send(v, n)
				} catch (T) {
					if (!(2 > b)) throw T;
					n(-1, T)
				}
			} else n(-1, "No Transport");
			return w
		},
		getJSON: function(e, t, n) {
			return ie.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return ie.get(e, void 0, t, "script")
		}
	}), ie.each(["get", "post"], function(e, t) {
		ie[t] = function(e, n, r, i) {
			return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			})
		}
	}), ie._evalUrl = function(e) {
		return ie.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, ie.fn.extend({
		wrapAll: function(e) {
			if (ie.isFunction(e)) return this.each(function(t) {
				ie(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = ie(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return ie.isFunction(e) ? this.each(function(t) {
				ie(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = ie(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = ie.isFunction(e);
			return this.each(function(n) {
				ie(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
			}).end()
		}
	}), ie.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ie.css(e, "display"))
	}, ie.expr.filters.visible = function(e) {
		return !ie.expr.filters.hidden(e)
	};
	var Ut = /%20/g,
		Vt = /\[\]$/,
		Jt = /\r?\n/g,
		Yt = /^(?:submit|button|image|reset|file)$/i,
		Gt = /^(?:input|select|textarea|keygen)/i;
	ie.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function() {
			i(this.name, this.value)
		});
		else for (n in e) z(n, e[n], t, i);
		return r.join("&").replace(Ut, "+")
	}, ie.fn.extend({
		serialize: function() {
			return ie.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = ie.prop(this, "elements");
				return e ? ie.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !ie(this).is(":disabled") && Gt.test(this.nodeName) && !Yt.test(e) && (this.checked || !je.test(e))
			}).map(function(e, t) {
				var n = ie(this).val();
				return null == n ? null : ie.isArray(n) ? ie.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Jt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Jt, "\r\n")
				}
			}).get()
		}
	}), ie.ajaxSettings.xhr = void 0 !== e.ActiveXObject ?
	function() {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
	} : X;
	var Qt = 0,
		Kt = {},
		Zt = ie.ajaxSettings.xhr();
	e.attachEvent && e.attachEvent("onunload", function() {
		for (var e in Kt) Kt[e](void 0, !0)
	}), ne.cors = !! Zt && "withCredentials" in Zt, Zt = ne.ajax = !! Zt, Zt && ie.ajaxTransport(function(e) {
		if (!e.crossDomain || ne.cors) {
			var t;
			return {
				send: function(n, r) {
					var i, o = e.xhr(),
						a = ++Qt;
					if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
					e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
					o.send(e.hasContent && e.data || null), t = function(n, i) {
						var s, u, l;
						if (t && (i || 4 === o.readyState)) if (delete Kt[a], t = void 0, o.onreadystatechange = ie.noop, i) 4 !== o.readyState && o.abort();
						else {
							l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
							try {
								u = o.statusText
							} catch (c) {
								u = ""
							}
							s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
						}
						l && r(s, u, l, o.getAllResponseHeaders())
					}, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Kt[a] = t : t()
				},
				abort: function() {
					t && t(void 0, !0)
				}
			}
		}
	}), ie.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return ie.globalEval(e), e
			}
		}
	}), ie.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), ie.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n = he.head || ie("head")[0] || he.documentElement;
			return {
				send: function(r, i) {
					t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
						(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
					}, n.insertBefore(t, n.firstChild)
				},
				abort: function() {
					t && t.onload(void 0, !0)
				}
			}
		}
	});
	var en = [],
		tn = /(=)\?(?=&|$)|\?\?/;
	ie.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = en.pop() || ie.expando + "_" + jt++;
			return this[e] = !0, e
		}
	}), ie.ajaxPrefilter("json jsonp", function(t, n, r) {
		var i, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
		return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + i) : t.jsonp !== !1 && (t.url += (Lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return a || ie.error(i + " was not called"), a[0]
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
			a = arguments
		}, r.always(function() {
			e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, en.push(i)), a && ie.isFunction(o) && o(a[0]), a = o = void 0
		}), "script") : void 0
	}), ie.parseHTML = function(e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || he;
		var r = de.exec(e),
			i = !n && [];
		return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes))
	};
	var nn = ie.fn.load;
	ie.fn.load = function(e, t, n) {
		if ("string" != typeof e && nn) return nn.apply(this, arguments);
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return s >= 0 && (r = ie.trim(e.slice(s, e.length)), e = e.slice(0, s)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ie.ajax({
			url: e,
			type: o,
			dataType: "html",
			data: t
		}).done(function(e) {
			i = arguments, a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e)
		}).complete(n &&
		function(e, t) {
			a.each(n, i || [e.responseText, t, e])
		}), this
	}, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		ie.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), ie.expr.filters.animated = function(e) {
		return ie.grep(ie.timers, function(t) {
			return e === t.elem
		}).length
	};
	var rn = e.document.documentElement;
	ie.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s, u, l, c = ie.css(e, "position"),
				d = ie(e),
				f = {};
			"static" === c && (e.style.position = "relative"), s = d.offset(), o = ie.css(e, "top"), u = ie.css(e, "left"), l = ("absolute" === c || "fixed" === c) && ie.inArray("auto", [o, u]) > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ie.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
		}
	}, ie.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				ie.offset.setOffset(this, e, t)
			});
			var t, n, r = {
				top: 0,
				left: 0
			},
				i = this[0],
				o = i && i.ownerDocument;
			if (o) return t = o.documentElement, ie.contains(t, i) ? (typeof i.getBoundingClientRect !== Ce && (r = i.getBoundingClientRect()), n = V(o), {
				top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
				left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
			}) : r
		},
		position: function() {
			if (this[0]) {
				var e, t, n = {
					top: 0,
					left: 0
				},
					r = this[0];
				return "fixed" === ie.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (n = e.offset()), n.top += ie.css(e[0], "borderTopWidth", !0), n.left += ie.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - ie.css(r, "marginTop", !0),
					left: t.left - n.left - ie.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || rn; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");) e = e.offsetParent;
				return e || rn
			})
		}
	}), ie.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var n = /Y/.test(t);
		ie.fn[e] = function(r) {
			return Ae(this, function(e, r, i) {
				var o = V(e);
				return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? ie(o).scrollLeft() : i, n ? i : ie(o).scrollTop()) : e[r] = i)
			}, e, r, arguments.length, null)
		}
	}), ie.each(["top", "left"], function(e, t) {
		ie.cssHooks[t] = k(ne.pixelPosition, function(e, n) {
			return n ? (n = tt(e, t), rt.test(n) ? ie(e).position()[t] + "px" : n) : void 0
		})
	}), ie.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		ie.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, r) {
			ie.fn[r] = function(r, i) {
				var o = arguments.length && (n || "boolean" != typeof r),
					a = n || (r === !0 || i === !0 ? "margin" : "border");
				return Ae(this, function(t, n, r) {
					var i;
					return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a)
				}, t, o ? r : void 0, o, null)
			}
		})
	}), ie.fn.size = function() {
		return this.length
	}, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define69eea4 && define69eea4("/lib/jquery-1.11.3", [], function() {
		return ie
	});
	var on = e.jQuery,
		an = e.$;
	return ie.noConflict = function(t) {
		return e.$ === ie && (e.$ = an), t && e.jQuery === ie && (e.jQuery = on), ie
	}, typeof t === Ce && (e.jQuery = e.$ = ie), ie
});
!
function(e) {
	if (void 0 !== e.ke) return void("undefined" != typeof module && "undefined" !== module.exports ? module.exports = e.ke : "function" == typeof define69eea4 && define69eea4("/lib/kEvent", function() {
		return e.ke
	}));
	var t = function() {
			this.mudules = {}, this.listeners = {}
		},
		n = function(e) {
			var t = e.split("."),
				n = {};
			return n.etype = t[0], n.ns = t[1] || "__global", n
		},
		r = 0;
	t.prototype = {
		constructor: t,
		on: function(e, t) {
			var i = n(e),
				o = i.etype,
				a = i.ns;
			"undefined" == typeof this.listeners[o] && (this.listeners[o] = {}), this.listeners[o]["__eidx_" + r] = t, t.eidx = "__eidx_" + r, void 0 !== a && ("undefined" == typeof this.mudules[a] && (this.mudules[a] = []), this.mudules[a].push("__eidx_" + r)), r++
		},
		un: function(e, t) {
			if ("undefined" == typeof e) return this.listeners = {}, void(this.mudules = {});
			var r = n(e),
				i = r.etype,
				o = r.ns,
				a = this.listeners[i],
				s = this.mudules[o];
			if (void 0 !== a && void 0 !== s) {
				for (var u = 0, l = s.length; l > u; u++) a[s[u]] = null;
				t && t.eidx && (a[t.eidx] = null)
			}
		},
		fire: function(e) {
			if ("string" == typeof e && (e = {
				type: e
			}), e.target || (e.target = this), !e.type) throw new Error("Event Object missing type property");
			if (null !== this.listeners[e.type]) {
				var t = this.listeners[e.type];
				for (var n in t) t.hasOwnProperty(n) && null !== t[n] && t[n].apply(this, Array.prototype.slice.call(arguments, 1))
			}
		}
	};
	var i = function(e) {
			return "undefined" == typeof t[e] && (t[e] = new t(e)), t[e]
		};
	"undefined" != typeof module && "undefined" !== module.exports ? module.exports = i : "function" == typeof define69eea4 && define69eea4("/lib/kEvent", function() {
		return i
	}), e.ke = i
}(this);
!
function(e, t) {
	"use strict";
	"function" == typeof define69eea4 ? define69eea4("/lib/es5-shim", t) : "object" == typeof exports ? module.exports = t() : e.returnExports = t()
}(this, function() {
	function e(e) {
		var t = +e;
		return t !== t ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -(1 / 0) && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t
	}
	function t(e) {
		var t = typeof e;
		return null === e || "undefined" === t || "boolean" === t || "number" === t || "string" === t
	}
	function n(e) {
		var n, r, i;
		if (t(e)) return e;
		if (r = e.valueOf, g(r) && (n = r.call(e), t(n))) return n;
		if (i = e.toString, g(i) && (n = i.call(e), t(n))) return n;
		throw new TypeError
	}
	var r, i = Array.prototype,
		o = Object.prototype,
		a = Function.prototype,
		s = String.prototype,
		u = Number.prototype,
		l = i.slice,
		c = i.splice,
		f = i.push,
		d = i.unshift,
		p = a.call,
		h = o.toString,
		g = function(e) {
			return "[object Function]" === h.call(e)
		},
		m = function(e) {
			return "[object RegExp]" === h.call(e)
		},
		y = function(e) {
			return "[object Array]" === h.call(e)
		},
		v = function(e) {
			return "[object String]" === h.call(e)
		},
		b = function(e) {
			var t = h.call(e),
				n = "[object Arguments]" === t;
			return n || (n = !y(e) && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && g(e.callee)), n
		},
		x = Object.defineProperty &&
	function() {
		try {
			return Object.defineProperty({}, "x", {}), !0
		} catch (e) {
			return !1
		}
	}();
	r = x ?
	function(e, t, n, r) {
		!r && t in e || Object.defineProperty(e, t, {
			configurable: !0,
			enumerable: !1,
			writable: !0,
			value: n
		})
	} : function(e, t, n, r) {
		!r && t in e || (e[t] = n)
	};
	var w = function(e, t, n) {
			for (var i in t) o.hasOwnProperty.call(t, i) && r(e, i, t[i], n)
		},
		T = {
			ToObject: function(e) {
				if (null == e) throw new TypeError("can't convert " + e + " to object");
				return Object(e)
			},
			ToUint32: function(e) {
				return e >>> 0
			}
		},
		E = function() {};
	w(a, {
		bind: function(e) {
			var t = this;
			if (!g(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
			for (var n, r = l.call(arguments, 1), i = function() {
					if (this instanceof n) {
						var i = t.apply(this, r.concat(l.call(arguments)));
						return Object(i) === i ? i : this
					}
					return t.apply(e, r.concat(l.call(arguments)))
				}, o = Math.max(0, t.length - r.length), a = [], s = 0; o > s; s++) a.push("$" + s);
			return n = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this, arguments); }")(i), t.prototype && (E.prototype = t.prototype, n.prototype = new E, E.prototype = null), n
		}
	});
	var N = p.bind(o.hasOwnProperty),
		C = function() {
			var e = [1, 2],
				t = e.splice();
			return 2 === e.length && y(t) && 0 === t.length
		}();
	w(i, {
		splice: function(e, t) {
			return 0 === arguments.length ? [] : c.apply(this, arguments)
		}
	}, !C);
	var S = function() {
			var e = {};
			return i.splice.call(e, 0, 0, 1), 1 === e.length
		}();
	w(i, {
		splice: function(t, n) {
			if (0 === arguments.length) return [];
			var r = arguments;
			return this.length = Math.max(e(this.length), 0), arguments.length > 0 && "number" != typeof n && (r = l.call(arguments), r.length < 2 ? r.push(this.length - t) : r[1] = e(n)), c.apply(this, r)
		}
	}, !S);
	var k = 1 !== [].unshift(0);
	w(i, {
		unshift: function() {
			return d.apply(this, arguments), this.length
		}
	}, k), w(Array, {
		isArray: y
	});
	var j = Object("a"),
		D = "a" !== j[0] || !(0 in j),
		A = function(e) {
			var t = !0,
				n = !0;
			return e && (e.call("foo", function(e, n, r) {
				"object" != typeof r && (t = !1)
			}), e.call([1], function() {
				"use strict";
				n = "string" == typeof this
			}, "x")), !! e && t && n
		};
	w(i, {
		forEach: function(e) {
			var t = T.ToObject(this),
				n = D && v(this) ? this.split("") : t,
				r = arguments[1],
				i = -1,
				o = n.length >>> 0;
			if (!g(e)) throw new TypeError;
			for (; ++i < o;) i in n && e.call(r, n[i], i, t)
		}
	}, !A(i.forEach)), w(i, {
		map: function(e) {
			var t = T.ToObject(this),
				n = D && v(this) ? this.split("") : t,
				r = n.length >>> 0,
				i = Array(r),
				o = arguments[1];
			if (!g(e)) throw new TypeError(e + " is not a function");
			for (var a = 0; r > a; a++) a in n && (i[a] = e.call(o, n[a], a, t));
			return i
		}
	}, !A(i.map)), w(i, {
		filter: function(e) {
			var t, n = T.ToObject(this),
				r = D && v(this) ? this.split("") : n,
				i = r.length >>> 0,
				o = [],
				a = arguments[1];
			if (!g(e)) throw new TypeError(e + " is not a function");
			for (var s = 0; i > s; s++) s in r && (t = r[s], e.call(a, t, s, n) && o.push(t));
			return o
		}
	}, !A(i.filter)), w(i, {
		every: function(e) {
			var t = T.ToObject(this),
				n = D && v(this) ? this.split("") : t,
				r = n.length >>> 0,
				i = arguments[1];
			if (!g(e)) throw new TypeError(e + " is not a function");
			for (var o = 0; r > o; o++) if (o in n && !e.call(i, n[o], o, t)) return !1;
			return !0
		}
	}, !A(i.every)), w(i, {
		some: function(e) {
			var t = T.ToObject(this),
				n = D && v(this) ? this.split("") : t,
				r = n.length >>> 0,
				i = arguments[1];
			if (!g(e)) throw new TypeError(e + " is not a function");
			for (var o = 0; r > o; o++) if (o in n && e.call(i, n[o], o, t)) return !0;
			return !1
		}
	}, !A(i.some));
	var L = !1;
	i.reduce && (L = "object" == typeof i.reduce.call("es5", function(e, t, n, r) {
		return r
	})), w(i, {
		reduce: function(e) {
			var t = T.ToObject(this),
				n = D && v(this) ? this.split("") : t,
				r = n.length >>> 0;
			if (!g(e)) throw new TypeError(e + " is not a function");
			if (!r && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
			var i, o = 0;
			if (arguments.length >= 2) i = arguments[1];
			else for (;;) {
				if (o in n) {
					i = n[o++];
					break
				}
				if (++o >= r) throw new TypeError("reduce of empty array with no initial value")
			}
			for (; r > o; o++) o in n && (i = e.call(void 0, i, n[o], o, t));
			return i
		}
	}, !L);
	var O = !1;
	i.reduceRight && (O = "object" == typeof i.reduceRight.call("es5", function(e, t, n, r) {
		return r
	})), w(i, {
		reduceRight: function(e) {
			var t = T.ToObject(this),
				n = D && v(this) ? this.split("") : t,
				r = n.length >>> 0;
			if (!g(e)) throw new TypeError(e + " is not a function");
			if (!r && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
			var i, o = r - 1;
			if (arguments.length >= 2) i = arguments[1];
			else for (;;) {
				if (o in n) {
					i = n[o--];
					break
				}
				if (--o < 0) throw new TypeError("reduceRight of empty array with no initial value")
			}
			if (0 > o) return i;
			do o in n && (i = e.call(void 0, i, n[o], o, t));
			while (o--);
			return i
		}
	}, !O);
	var H = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
	w(i, {
		indexOf: function(t) {
			var n = D && v(this) ? this.split("") : T.ToObject(this),
				r = n.length >>> 0;
			if (!r) return -1;
			var i = 0;
			for (arguments.length > 1 && (i = e(arguments[1])), i = i >= 0 ? i : Math.max(0, r + i); r > i; i++) if (i in n && n[i] === t) return i;
			return -1
		}
	}, H);
	var _ = Array.prototype.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
	w(i, {
		lastIndexOf: function(t) {
			var n = D && v(this) ? this.split("") : T.ToObject(this),
				r = n.length >>> 0;
			if (!r) return -1;
			var i = r - 1;
			for (arguments.length > 1 && (i = Math.min(i, e(arguments[1]))), i = i >= 0 ? i : r - Math.abs(i); i >= 0; i--) if (i in n && t === n[i]) return i;
			return -1
		}
	}, _);
	var M = !{
		toString: null
	}.propertyIsEnumerable("toString"),
		F = function() {}.propertyIsEnumerable("prototype"),
		q = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
		I = q.length;
	w(Object, {
		keys: function(e) {
			var t = g(e),
				n = b(e),
				r = null !== e && "object" == typeof e,
				i = r && v(e);
			if (!r && !t && !n) throw new TypeError("Object.keys called on a non-object");
			var o = [],
				a = F && t;
			if (i || n) for (var s = 0; s < e.length; ++s) o.push(String(s));
			else for (var u in e) a && "prototype" === u || !N(e, u) || o.push(String(u));
			if (M) for (var l = e.constructor, c = l && l.prototype === e, f = 0; I > f; f++) {
				var d = q[f];
				c && "constructor" === d || !N(e, d) || o.push(d)
			}
			return o
		}
	});
	var R = Object.keys &&
	function() {
		return 2 === Object.keys(arguments).length
	}(1, 2), P = Object.keys;
	w(Object, {
		keys: function(e) {
			return P(b(e) ? i.slice.call(e) : e)
		}
	}, !R);
	var B = -621987552e5,
		W = "-000001",
		$ = Date.prototype.toISOString && -1 === new Date(B).toISOString().indexOf(W);
	w(Date.prototype, {
		toISOString: function() {
			var e, t, n, r, i;
			if (!isFinite(this)) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
			for (r = this.getUTCFullYear(), i = this.getUTCMonth(), r += Math.floor(i / 12), i = (i % 12 + 12) % 12, e = [i + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()], r = (0 > r ? "-" : r > 9999 ? "+" : "") + ("00000" + Math.abs(r)).slice(r >= 0 && 9999 >= r ? -4 : -6), t = e.length; t--;) n = e[t], 10 > n && (e[t] = "0" + n);
			return r + "-" + e.slice(0, 2).join("-") + "T" + e.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
		}
	}, $);
	var z = !1;
	try {
		z = Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(B).toJSON().indexOf(W) && Date.prototype.toJSON.call({
			toISOString: function() {
				return !0
			}
		})
	} catch (X) {}
	z || (Date.prototype.toJSON = function(e) {
		var t, r = Object(this),
			i = n(r);
		if ("number" == typeof i && !isFinite(i)) return null;
		if (t = r.toISOString, "function" != typeof t) throw new TypeError("toISOString property is not callable");
		return t.call(r)
	});
	var U = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
		V = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")),
		J = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
	(!Date.parse || J || V || !U) && (Date = function(e) {
		function t(n, r, i, o, a, s, u) {
			var l = arguments.length;
			if (this instanceof e) {
				var c = 1 === l && String(n) === n ? new e(t.parse(n)) : l >= 7 ? new e(n, r, i, o, a, s, u) : l >= 6 ? new e(n, r, i, o, a, s) : l >= 5 ? new e(n, r, i, o, a) : l >= 4 ? new e(n, r, i, o) : l >= 3 ? new e(n, r, i) : l >= 2 ? new e(n, r) : l >= 1 ? new e(n) : new e;
				return c.constructor = t, c
			}
			return e.apply(this, arguments)
		}
		function n(e, t) {
			var n = t > 1 ? 1 : 0;
			return o[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
		}
		function r(t) {
			return Number(new e(1970, 0, 1, 0, 0, 0, t))
		}
		var i = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
			o = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
		for (var a in e) t[a] = e[a];
		return t.now = e.now, t.UTC = e.UTC, t.prototype = e.prototype, t.prototype.constructor = t, t.parse = function(t) {
			var o = i.exec(t);
			if (o) {
				var a, s = Number(o[1]),
					u = Number(o[2] || 1) - 1,
					l = Number(o[3] || 1) - 1,
					c = Number(o[4] || 0),
					f = Number(o[5] || 0),
					d = Number(o[6] || 0),
					p = Math.floor(1e3 * Number(o[7] || 0)),
					h = Boolean(o[4] && !o[8]),
					g = "-" === o[9] ? 1 : -1,
					m = Number(o[10] || 0),
					y = Number(o[11] || 0);
				return (f > 0 || d > 0 || p > 0 ? 24 : 25) > c && 60 > f && 60 > d && 1e3 > p && u > -1 && 12 > u && 24 > m && 60 > y && l > -1 && l < n(s, u + 1) - n(s, u) && (a = 60 * (24 * (n(s, u) + l) + c + m * g), a = 1e3 * (60 * (a + f + y * g) + d) + p, h && (a = r(a)), a >= -864e13 && 864e13 >= a) ? a : NaN
			}
			return e.parse.apply(this, arguments)
		}, t
	}(Date)), Date.now || (Date.now = function() {
		return (new Date).getTime()
	});
	var Y = u.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)),
		Z = {
			base: 1e7,
			size: 6,
			data: [0, 0, 0, 0, 0, 0],
			multiply: function(e, t) {
				for (var n = -1; ++n < Z.size;) t += e * Z.data[n], Z.data[n] = t % Z.base, t = Math.floor(t / Z.base)
			},
			divide: function(e) {
				for (var t = Z.size, n = 0; --t >= 0;) n += Z.data[t], Z.data[t] = Math.floor(n / e), n = n % e * Z.base
			},
			numToString: function() {
				for (var e = Z.size, t = ""; --e >= 0;) if ("" !== t || 0 === e || 0 !== Z.data[e]) {
					var n = String(Z.data[e]);
					"" === t ? t = n : t += "0000000".slice(0, 7 - n.length) + n
				}
				return t
			},
			pow: function ue(e, t, n) {
				return 0 === t ? n : t % 2 === 1 ? ue(e, t - 1, n * e) : ue(e * e, t / 2, n)
			},
			log: function(e) {
				for (var t = 0; e >= 4096;) t += 12, e /= 4096;
				for (; e >= 2;) t += 1, e /= 2;
				return t
			}
		};
	w(u, {
		toFixed: function(e) {
			var t, n, r, i, o, a, s, u;
			if (t = Number(e), t = t !== t ? 0 : Math.floor(t), 0 > t || t > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
			if (n = Number(this), n !== n) return "NaN";
			if (-1e21 >= n || n >= 1e21) return String(n);
			if (r = "", 0 > n && (r = "-", n = -n), i = "0", n > 1e-21) if (o = Z.log(n * Z.pow(2, 69, 1)) - 69, a = 0 > o ? n * Z.pow(2, -o, 1) : n / Z.pow(2, o, 1), a *= 4503599627370496, o = 52 - o, o > 0) {
				for (Z.multiply(0, a), s = t; s >= 7;) Z.multiply(1e7, 0), s -= 7;
				for (Z.multiply(Z.pow(10, s, 1), 0), s = o - 1; s >= 23;) Z.divide(1 << 23), s -= 23;
				Z.divide(1 << s), Z.multiply(1, 1), Z.divide(2), i = Z.numToString()
			} else Z.multiply(0, a), Z.multiply(1 << -o, 0), i = Z.numToString() + "0.00000000000000000000".slice(2, 2 + t);
			return t > 0 ? (u = i.length, i = t >= u ? r + "0.0000000000000000000".slice(0, t - u + 2) + i : r + i.slice(0, u - t) + "." + i.slice(u - t)) : i = r + i, i
		}
	}, Y);
	var G = s.split;
	2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? !
	function() {
		var e = "undefined" == typeof / () ? ? /.exec("")[1];s.split=function(t,n){var r=this;if("undefined"==typeof t&&0===n)return[];if("[object RegExp]"!==h.call(t))return G.call(this,t,n);var i,o,a,s,u=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.extended?"x":"")+(t.sticky?"y":""),c=0;for(t=new RegExp(t.source,l+"g"),r+="",e||(i=new RegExp("^"+t.source+"$(?!\\s)",l)),n="undefined"==typeof n?-1>>>0:T.ToUint32(n);(o=t.exec(r))&&(a=o.index+o[0].length,!(a>c&&(u.push(r.slice(c,o.index)),!e&&o.length>1&&o[0].replace(i,function(){for(var e=1;e<arguments.length-2;e++)"undefined"==typeof arguments[e]&&(o[e]=void 0)}),o.length>1&&o.index<r.length&&f.apply(u,o.slice(1)),s=o[0].length,c=a,u.length>=n)));)t.lastIndex===o.index&&t.lastIndex++;return c===r.length?(s||!t.test(""))&&u.push(""):u.push(r.slice(c)),u.length>n?u.slice(0,n):u}}():"0".split(void 0,0).length&&(s.split=function(e,t){return"undefined"==typeof e&&0===t?[]:G.call(this,e,t)});var Q=s.replace,K=function(){var e=[];return"x".replace(/x (.) ? /g,function(t,n){e.push(n)}),1===e.length&&"undefined"==typeof e[0]}();K||(s.replace=function(e,t){var n=g(t),r=m(e)&&/\)[ * ? ] / .test(e.source);
	if (n && r) {
		var i = function(n) {
				var r = arguments.length,
					i = e.lastIndex;
				e.lastIndex = 0;
				var o = e.exec(n) || [];
				return e.lastIndex = i, o.push(arguments[r - 2], arguments[r - 1]), t.apply(this, o)
			};
		return Q.call(this, e, i)
	}
	return Q.call(this, e, t)
});
var ee = s.substr,
	te = "".substr && "b" !== "0b".substr(-1);
w(s, {
	substr: function(e, t) {
		return ee.call(this, 0 > e && (e = this.length + e) < 0 ? 0 : e, t)
	}
}, te);
var ne = "	\n\x0B\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff",
	re = "â€‹",
	ie = "[" + ne + "]",
	oe = new RegExp("^" + ie + ie + "*"),
	ae = new RegExp(ie + ie + "*$"),
	se = s.trim && (ne.trim() || !re.trim());
w(s, {
	trim: function() {
		if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
		return String(this).replace(oe, "").replace(ae, "")
	}
}, se), (8 !== parseInt(ne + "08") || 22 !== parseInt(ne + "0x16")) && (parseInt = function(e) {
	var t = /^0[xX]/;
	return function(n, r) {
		return n = String(n).trim(), Number(r) || (r = t.test(n) ? 16 : 10), e(n, r)
	}
}(parseInt))
});
define69eea4("/src/scripts/ui/global", function(e, t, n) {
	window.GAME_SERVER = "http://matchweb.sports.qq.com", window.BASE_SERVER = "http://shequweb.sports.qq.com", window.GUESS_SERVER = "http://guess.sports.qq.com", window.VIPEXCHANGE_SERVER = "http://sportswebapi.qq.com", window.DEVSPORTSSHEQU = "http://devsportsshequ.qq.com";
	var r;
	n.exports = {
		leagueType: {
			nba: 1e5,
			csl: 208,
			afc: 605,
			ucl: 5,
			pl: 8,
			laliga: 23,
			seriea: 21,
			bundesliga: 22,
			l1: 24,
			cba: 100008,
			others: 100002,
			nfl: 100005,
			ec: 3
		},
		gamePeriod: {
			PRE_GAME: "0",
			IN_GAME: "1",
			POST_GAME: "2",
			PRE_GAME_DELAY: "3",
			IN_GAME_DELAY: "4",
			CANCEL: "5"
		},
		livePeriod: {
			PRE: "0",
			IN: "1",
			END: "2"
		},
		gameType: {
			FOOTBALL: "1",
			BASKETBALL: "2",
			OTHER: "3",
			EVENT: "4"
		},
		teamStats: {
			points: "å¾—åˆ†",
			rebounds: "ç¯®æ¿",
			assists: "åŠ©æ”»",
			steals: "æŠ¢æ–­",
			blocks: "ç›–å¸½"
		},
		liveType: {
			NONE: "0",
			PLAY_BY_PLAY: "1",
			AUDIO: "2",
			VIDEO: "3",
			ALBUM: "4"
		},
		liveTypeName: {
			0: "æ•°æ®ç›´æ’­",
			1: "å›¾æ–‡ç›´æ’­",
			2: "éŸ³é¢‘ç›´æ’­",
			3: "è§†é¢‘ç›´æ’­",
			4: "è§†é¢‘é›†é”¦"
		},
		gameSource: {
			NORMAL: 0,
			HOT: 1,
			MYCENTER: 2,
			TEAM: 3
		},
		statsTabs: ["feed", "stats", "player", "squard"],
		MIN_REFRESH_DELAY: 10,
		getParams: function(e) {
			var t = e || window.location.search.split("?")[1],
				n = {};
			if (t) for (var r = t.split("&"), i = 0; i < r.length; i++) {
				var o = r[i].split("=");
				n[o[0]] = o[1]
			}
			return n
		},
		getUrlParam: function(e) {
			var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
				n = window.location.search.substr(1).match(t);
			return null != n ? unescape(n[2]) : null
		},
		getUin: function() {
			var e = $.cookie("uin"),
				t = $.cookie("luin"),
				n = null;
			return e ? (e = e.replace(/o0*/, ""), n = e) : t && (t = t.replace(/o0*/, ""), n = t), n
		},
		setMatchInfo: function(e) {
			r = e
		},
		getMatchInfo: function() {
			return r
		},
		api: {
			INDEX_AD: "/focus/index",
			TOPIC_DETAIL: "/topic/detail?tid={0}",
			REPLY_LIST: "/reply/list?tid={0}&page={1}&count={2}&sort={3}&onlyMaster={4}",
			REPLY_CREATE: "/reply/create",
			REPLY_DELETE: "/reply/delete",
			TOPIC_DELETE: "/topic/delete",
			TOPIC_SET_TYPE: "/topic/setType",
			TOPIC_UNSET_TYPE: "/topic/unsetType",
			REPLY_LV2_LIST: "/reply/subReplys?rid={0}&page={1}&count={2}",
			REPORT_POST: "/report/report"
		},
		topicStatus: {
			REC: 1,
			DEL: 2,
			LIVE: 4,
			ACTIVITY: 8,
			ELITE: 16,
			TOP: 32,
			PK: 64
		},
		topicType: {
			NORMAL: "normal",
			ACTIVITY: "activity",
			ELITE: "elite",
			TOP: "top"
		},
		encodeImgURL: function(e) {
			return e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\'/g, "&#39;").replace(/\"/, "&quot;"), e = encodeURI(e), 0 !== e.indexOf("http://") ? "http://" + e : e
		},
		remark: function(e) {
			var t = "v0$$1:1$5:1$",
				n = {
					refer: 3,
					page: 4,
					mid: 6,
					activityId: 9
				},
				r = [];
			return $.each(n, function(t, i) {
				e[t] && r.push(n[t] + ":" + e[t])
			}), t + r.join("$")
		}
	}, n.exports.getParams().debug && (window.GAME_SERVER = "http://devwebapi.sports.qq.com", window.GUESS_SERVER = "http://devguess.sports.qq.com", window.BASE_SERVER = "http://shequweb.sports.qq.com")
});
!
function(e) {
	function t(e) {
		try {
			return JSON && JSON.parse ? JSON.parse(e) : new Function("return " + e)()
		} catch (t) {
			n("ijs", t.message)
		}
	}
	function n(e, t) {
		throw new Error(T[e] + (t && " in '" + t + "'"))
	}
	function r(e, r) {
		r || (r = 0);
		var i = N.exec(e.substr(r));
		if (i) {
			r += i[0].length;
			var o;
			return i[1] ? o = [r, " "] : i[2] ? o = [r, i[0]] : i[3] ? o = [r, E.typ, i[0]] : i[4] ? o = [r, E.psc, i[0]] : i[5] ? o = [r, E.psf, i[0]] : i[6] ? n("upc", e) : i[8] ? o = [r, i[7] ? E.ide : E.str, t(i[8])] : i[9] ? n("ujs", e) : i[10] && (o = [r, E.ide, i[10].replace(/\\([^\r\n\f0-9a-fA-F])/g, "$1")]), o
		}
	}
	function i(e, t) {
		return typeof e === t
	}
	function o(e, n) {
		var r, i = S.exec(e.substr(n));
		return i ? (n += i[0].length, r = i[1] || i[2] || i[3] || i[5] || i[6], i[1] || i[2] || i[3] ? [n, 0, t(r)] : i[4] ? [n, 0, void 0] : [n, r]) : void 0
	}
	function a(e, t) {
		t || (t = 0);
		var r, i = o(e, t);
		if (i && "(" === i[1]) {
			r = a(e, i[0]);
			var s = o(e, r[0]);
			s && ")" === s[1] || n("epex", e), t = s[0], r = ["(", r[1]]
		} else!i || i[1] && "x" != i[1] ? n("ee", e + " - " + (i[1] && i[1])) : (r = "x" === i[1] ? void 0 : i[2], t = i[0]);
		var u = o(e, t);
		if (!u || ")" == u[1]) return [t, r];
		"x" != u[1] && u[1] || n("bop", e + " - " + (u[1] && u[1]));
		var l = a(e, u[0]);
		t = l[0], l = l[1];
		var c;
		if ("object" != typeof l || "(" === l[0] || k[u[1]][0] < k[l[1]][0]) c = [r, u[1], l];
		else {
			for (c = l;
			"object" == typeof l[0] && "(" != l[0][0] && k[u[1]][0] >= k[l[0][1]][0];) l = l[0];
			l[0] = [r, u[1], l[0]]
		}
		return [t, c]
	}
	function s(e, t) {
		function n(e) {
			return "object" != typeof e || null === e ? e : "(" === e[0] ? n(e[1]) : [n(e[0]), e[1], n(e[2])]
		}
		var r = a(e, t ? t : 0);
		return [r[0], n(r[1])]
	}
	function u(e, t) {
		if (void 0 === e) return t;
		if (null === e || "object" != typeof e) return e;
		var n = u(e[0], t),
			r = u(e[2], t);
		return k[e[1]][1](n, r)
	}
	function l(e, t, i, o) {
		i || (o = {});
		var a, s, u = [];
		for (t || (t = 0);;) {
			var l = p(e, t, o);
			if (u.push(l[1]), l = r(e, t = l[0]), l && " " === l[1] && (l = r(e, t = l[0])), !l) break;
			if (">" === l[1] || "~" === l[1])"~" === l[1] && (o.usesSiblingOp = !0), u.push(l[1]), t = l[0];
			else if ("," === l[1]) void 0 === a ? a = [",", u] : a.push(u), u = [], t = l[0];
			else if (")" === l[1]) {
				i || n("ucp", l[1]), s = 1, t = l[0];
				break
			}
		}
		i && !s && n("mcp", e), a && a.push(u);
		var c;
		return c = !i && o.usesSiblingOp ? f(a ? a : u) : a ? a : u, [t, c]
	}
	function c(e) {
		for (var t, n = [], r = 0; r < e.length; r++) if ("~" === e[r]) {
			if ((2 > r || ">" != e[r - 2]) && (t = e.slice(0, r - 1), t = t.concat([{
				has: [
					[{
						pc: ":root"
					}, ">", e[r - 1]]
				]
			}, ">"]), t = t.concat(e.slice(r + 1)), n.push(t)), r > 1) {
				var i = ">" === e[r - 2] ? r - 3 : r - 2;
				t = e.slice(0, i);
				var o = {};
				for (var a in e[i]) e[i].hasOwnProperty(a) && (o[a] = e[i][a]);
				o.has || (o.has = []), o.has.push([{
					pc: ":root"
				}, ">", e[r - 1]]), t = t.concat(o, ">", e.slice(r + 1)), n.push(t)
			}
			break
		}
		return r == e.length ? e : n.length > 1 ? [","].concat(n) : n[0]
	}
	function f(e) {
		if ("," === e[0]) {
			for (var t = [","], n = n; n < e.length; n++) {
				var r = c(r[n]);
				t = t.concat("," === r[0] ? r.slice(1) : r)
			}
			return t
		}
		return c(e)
	}
	function p(e, t, i) {
		var o = t,
			a = {},
			u = r(e, t);
		for (u && " " === u[1] && (o = t = u[0], u = r(e, t)), u && u[1] === E.typ ? (a.type = u[2], u = r(e, t = u[0])) : u && "*" === u[1] && (u = r(e, t = u[0]));;) {
			if (void 0 === u) break;
			if (u[1] === E.ide) a.id && n("nmi", u[1]), a.id = u[2];
			else if (u[1] === E.psc)(a.pc || a.pf) && n("mpc", u[1]), ":first-child" === u[2] ? (a.pf = ":nth-child", a.a = 0, a.b = 1) : ":last-child" === u[2] ? (a.pf = ":nth-last-child", a.a = 0, a.b = 1) : a.pc = u[2];
			else {
				if (u[1] !== E.psf) break;
				if (":val" === u[2] || ":contains" === u[2]) a.expr = [void 0, ":val" === u[2] ? "=" : "*=", void 0], u = r(e, t = u[0]), u && " " === u[1] && (u = r(e, t = u[0])), u && "(" === u[1] || n("pex", e), u = r(e, t = u[0]), u && " " === u[1] && (u = r(e, t = u[0])), u && u[1] === E.str || n("sex", e), a.expr[2] = u[2], u = r(e, t = u[0]), u && " " === u[1] && (u = r(e, t = u[0])), u && ")" === u[1] || n("epex", e);
				else if (":has" === u[2]) {
					u = r(e, t = u[0]), u && " " === u[1] && (u = r(e, t = u[0])), u && "(" === u[1] || n("pex", e);
					var c = l(e, u[0], !0);
					u[0] = c[0], a.has || (a.has = []), a.has.push(c[1])
				} else if (":expr" === u[2]) {
					a.expr && n("mexp", e);
					var f = s(e, u[0]);
					u[0] = f[0], a.expr = f[1]
				} else {
					(a.pc || a.pf) && n("mpc", e), a.pf = u[2];
					var p = C.exec(e.substr(u[0]));
					p || n("mepf", e), p[5] ? (a.a = 2, a.b = "odd" === p[5] ? 1 : 0) : p[6] ? (a.a = 0, a.b = parseInt(p[6], 10)) : (a.a = parseInt((p[1] ? p[1] : "+") + (p[2] ? p[2] : "1"), 10), a.b = p[3] ? parseInt(p[3] + p[4], 10) : 0), u[0] += p[0].length
				}
			}
			u = r(e, t = u[0])
		}
		return o === t && n("se", e), [t, a]
	}
	function d(e) {
		return Array.isArray ? Array.isArray(e) : "[object Array]" === w.call(e)
	}
	function h(e) {
		if (null === e) return "null";
		var t = typeof e;
		return "object" === t && d(e) && (t = "array"), t
	}
	function g(e, t, n, r, i) {
		var o, a = [],
			s = ">" === t[0] ? t[1] : t[0],
			l = !0;
		if (s.type && (l = l && s.type === h(e)), s.id && (l = l && s.id === n), l && s.pf && (":nth-last-child" === s.pf ? r = i - r : r++, 0 === s.a ? l = s.b === r : (o = (r - s.b) % s.a, l = !o && r * s.a + s.b >= 0)), l && s.has) for (var c = function() {
				throw 42
			}, f = 0; f < s.has.length; f++) {
			try {
				m(s.has[f], e, c)
			} catch (p) {
				if (42 === p) continue
			}
			l = !1;
			break
		}
		return l && s.expr && (l = u(s.expr, e)), ">" !== t[0] && ":root" !== t[0].pc && a.push(t), l && (">" === t[0] ? t.length > 2 && (l = !1, a.push(t.slice(2))) : t.length > 1 && (l = !1, a.push(t.slice(1)))), [l, a]
	}
	function m(e, t, n, r, i, o) {
		var a, s, u = "," === e[0] ? e.slice(1) : [e],
			l = [],
			c = !1,
			f = 0,
			p = 0;
		for (f = 0; f < u.length; f++) for (s = g(t, u[f], r, i, o), s[0] && (c = !0), p = 0; p < s[1].length; p++) l.push(s[1][p]);
		if (l.length && "object" == typeof t) if (l.length >= 1 && l.unshift(","), d(t)) for (f = 0; f < t.length; f++) m(l, t[f], n, void 0, f, t.length);
		else for (a in t) t.hasOwnProperty(a) && m(l, t[a], n, a);
		c && n && n(t)
	}
	function v(e, t) {
		var n = [];
		return m(e, t, function(e) {
			n.push(e)
		}), n
	}
	function y(e, t) {
		if (e = e.replace(/\?/g, function() {
			if (0 === t.length) throw "too few parameters given";
			var e = t.shift();
			return "string" == typeof e ? JSON.stringify(e) : e
		}), t.length) throw "too many parameters supplied";
		return e
	}
	function b(e, t) {
		return t && (e = y(e, t)), {
			sel: l(e)[1],
			match: function(e) {
				return v(this.sel, e)
			},
			forEach: function(e, t) {
				return m(this.sel, e, t)
			}
		}
	}
	var x = {},
		w = Object.prototype.toString,
		T = {
			bop: "binary operator expected",
			ee: "expression expected",
			epex: "closing paren expected ')'",
			ijs: "invalid json string",
			mcp: "missing closing paren",
			mepf: "malformed expression in pseudo-function",
			mexp: "multiple expressions not allowed",
			mpc: "multiple pseudo classes (:xxx) not allowed",
			nmi: "multiple ids not allowed",
			pex: "opening paren expected '('",
			se: "selector expected",
			sex: "string expected",
			sra: "string required after '.'",
			uc: "unrecognized char",
			ucp: "unexpected closing paren",
			ujs: "unclosed json string",
			upc: "unrecognized pseudo class"
		},
		E = {
			psc: 1,
			psf: 2,
			typ: 3,
			str: 4,
			ide: 5
		},
		N = new RegExp('^(?:([\\r\\n\\t\\ ]+)|([~*,>\\)\\(])|(string|boolean|null|array|object|number)|(:(?:root|first-child|last-child|only-child))|(:(?:nth-child|nth-last-child|has|expr|val|contains))|(:\\w+)|(?:(\\.)?(\\"(?:[^\\\\\\"]|\\\\[^\\"])*\\"))|(\\")|\\.((?:[_a-zA-Z]|[^\\0-\\0177]|\\\\[^\\r\\n\\f0-9a-fA-F])(?:[$_a-zA-Z0-9\\-]|[^\\u0000-\\u0177]|(?:\\\\[^\\r\\n\\f0-9a-fA-F]))*))'),
		C = /^\s*\(\s*(?:([+\-]?)([0-9]*)n\s*(?:([+\-])\s*([0-9]))?|(odd|even)|([+\-]?[0-9]+))\s*\)/,
		S = new RegExp('^\\s*(?:(true|false|null)|(-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?)|("(?:[^\\]|\\[^"])*")|(x)|(&&|\\|\\||[\\$\\^<>!\\*]=|[=+\\-*/%<>])|([\\(\\)]))'),
		k = {
			"*": [9, function(e, t) {
				return e * t
			}],
			"/": [9, function(e, t) {
				return e / t
			}],
			"%": [9, function(e, t) {
				return e % t
			}],
			"+": [7, function(e, t) {
				return e + t
			}],
			"-": [7, function(e, t) {
				return e - t
			}],
			"<=": [5, function(e, t) {
				return i(e, "number") && i(t, "number") && t >= e || i(e, "string") && i(t, "string") && t >= e
			}],
			">=": [5, function(e, t) {
				return i(e, "number") && i(t, "number") && e >= t || i(e, "string") && i(t, "string") && e >= t
			}],
			"$=": [5, function(e, t) {
				return i(e, "string") && i(t, "string") && e.lastIndexOf(t) === e.length - t.length
			}],
			"^=": [5, function(e, t) {
				return i(e, "string") && i(t, "string") && 0 === e.indexOf(t)
			}],
			"*=": [5, function(e, t) {
				return i(e, "string") && i(t, "string") && -1 !== e.indexOf(t)
			}],
			">": [5, function(e, t) {
				return i(e, "number") && i(t, "number") && e > t || i(e, "string") && i(t, "string") && e > t
			}],
			"<": [5, function(e, t) {
				return i(e, "number") && i(t, "number") && t > e || i(e, "string") && i(t, "string") && t > e
			}],
			"=": [3, function(e, t) {
				return e === t
			}],
			"!=": [3, function(e, t) {
				return e !== t
			}],
			"&&": [2, function(e, t) {
				return e && t
			}],
			"||": [1, function(e, t) {
				return e || t
			}]
		};
	x._lex = r, x._parse = l, x.match = function(e, t, n) {
		return n || (n = t, t = void 0), b(e, t).match(n)
	}, x.forEach = function(e, t, n, r) {
		return r || (r = n, n = t, t = void 0), b(e, t).forEach(n, r)
	}, x.compile = b, define69eea4("/lib/jsonselect", function() {
		return x
	})
}(window);
define69eea4("/lib/tpHelper/html", function(e, t, n) {
	var r = /&/g,
		i = /</g,
		o = />/g,
		a = /\'/g,
		s = /\"/g,
		u = /[&<>\"\']/,
		l = function(e) {
			return String(null === e || void 0 === e ? "" : e)
		};
	t.escape = function(e) {
		return e = l(e), u.test(e) ? e.replace(r, "&amp;").replace(i, "&lt;").replace(o, "&gt;").replace(a, "&#39;").replace(s, "&quot;") : e
	};
	var c = {};
	["forEach", "some", "every", "filter", "map"].forEach(function(e) {
		c[e] = function(t, n, r) {
			if (!t || "string" == typeof t) return t;
			if (r = r || this, t[e]) return t[e](n, r);
			var i = Object.keys(t);
			return i[e](function(e) {
				return n.call(r, t[e], e, t)
			}, r)
		}
	}), t.mixin = function f(e, t) {
		return c.forEach(t, function(t, n) {
			var r = {}.toString.call(t);
			"[object Array]" == r || "[object Object]" == r ? e[n] = f(t, e[n] || {}) : e[n] = t
		}), e
	}
});
define69eea4("/lib/tpHelper", function(e, t, n) {
	var r = {},
		i = {};
	return ["forEach", "some", "every", "filter", "map"].forEach(function(e) {
		r[e] = function(t, n, r) {
			if (!t || "string" == typeof t) return t;
			if (r = r || this, t[e]) return t[e](n, r);
			var i = Object.keys(t);
			return i[e](function(e) {
				return n.call(r, t[e], e, t)
			}, r)
		}
	}), i.mixin = function o(e, t) {
		return r.forEach(t, function(t, n) {
			var r = {}.toString.call(t);
			"[object Array]" == r || "[object Object]" == r ? e[n] = o(t, e[n] || {}) : e[n] = t
		}), e
	}, i.html = e("/lib/tpHelper/html"), "undefined" == typeof ___kkit___ ? window.___kkit___ = {
		tph: i
	} : ___kkit___.tph = i, i
});
define69eea4("/output/game-detail-404/game-detail-404", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div class="not-found">\n    <img src="http://mat1.gtimg.com/sports/kbsweb/statics/404_7be8be.png">\n</div>';
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/utils/utils", function(e, t, n) {
	var r = e("/lib/jquery-1.11.3");
	e("/lib/es5-shim");
	var i = function() {
			var e = {};
			try {
				var t = -1 === ["", "#", "#!"].indexOf(window.location.hash) ? '"' : "";
				e = r.parseJSON("{" + t + window.location.hash.replace(/^#!/, "").replace(/=/g, '":"').replace(/&/g, '","') + t + "}")
			} catch (n) {}
			return e
		},
		o = function(e) {
			return (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\x60/g, "&#96;").replace(/\x27/g, "&#39;").replace(/\x22/g, "&quot;")
		},
		a = function(e) {
			return (e + "").replace(/&quot;/g, '"').replace(/&#0*39;/g, "'").replace(/&#0*96;/g, "`").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&")
		},
		s = function(e) {
			this.url = e.url, this.formData = e.formData, this.form = e.form, this.success = e.success, this.error = e.error, this.timeout = e.timeout || s.config.timeout, this.formInner = "", this.iframe
		};
	s.config = {
		prefix: "postiframe-",
		timeout: 1e4
	}, s.iframeQueue = [], s.Iframe = function(e, t) {
		this.el = r('<iframe id="' + e + '" name="' + t + '" style="display: none;"></iframe>'), this.busy = !1
	}, s.addIframe = function() {
		var e = this.iframeQueue.length,
			t = this.config.prefix + e,
			n = t,
			i = new this.Iframe(t, n);
		return this.iframeQueue[e] = i, r("body").append(i.el), i
	}, s.getIdle = function() {
		for (var e = 0, t = this.iframeQueue.length; t > e; e++) {
			var n = this.iframeQueue[e];
			if (!n.busy) return n
		}
		return this.addIframe()
	}, s.clearIdle = function() {
		for (var e = 0, t = this.iframeQueue.length; t > e; e++) {
			var n = this.iframeQueue[e];
			n.busy || (n.el.off(), n.el.remove())
		}
	}, s.initForm = function() {
		return this.elForm || (this.elForm = r('<form id="' + s.config.prefix + 'form" style="display: none"></form>'), r("body").append(this.elForm)), this.elForm
	}, s.prototype = {
		_getIframe: function() {
			this.iframe = s.getIdle(), this.iframe.busy = !0
		},
		_releaseIframe: function() {
			this.iframe.busy = !1, this.iframe = null, s.clearIdle()
		},
		_setForm: function(e) {
			var t = "";
			for (var n in this.formData) t = this.formData[n], (void 0 !== t || null !== t) && (t = o(t), this.formInner += '<input type="text" name="' + n + '" value="' + t + '">');
			e.html(this.formInner)
		},
		submit: function(e) {
			this._getIframe(), void 0 === e && (e = s.initForm(), this._setForm(e));
			var t = this;
			e = r(e), e.attr({
				method: "POST",
				action: t.url,
				target: t.iframe.el.attr("name")
			}), this.iframe.el.off("load"), this.iframe.el.off("error"), this.iframe.el.on("load", function(e) {
				t.success(), t._releaseIframe()
			}), this.iframe.el.on("error", function(e) {
				t.error(), t._releaseIframe()
			}), e.submit()
		}
	}, n.exports = {
		layerAutoResize: function(e) {
			function t() {
				r(e).css("top", r(document).scrollTop() + (r(window).height() - r(e).height()) / 2), r(e).css("left", (r(window).width() - r(e).width()) / 2)
			}
			r(window).scroll(function() {
				t()
			}), r(window).resize(function() {
				t()
			}), t()
		},
		getUkey: function() {
			var e = r.cookie("skey") || r.cookie("lskey");
			return e
		},
		generateToken: function(e) {
			var t = 2013;
			if (e) for (var n = 0, r = e.length; r > n; n++) t += (t << 5) + e.charCodeAt(n);
			return 2147483647 & t
		},
		timero: function(e, t) {
			var n = function(e, t) {
					this.func = e, this.time = t
				};
			return n.prototype = {
				run: function() {
					var e = this;
					this.clear(), this.timeout = setTimeout(function() {
						r.isFunction(e.func) && e.func()
					}, e.time)
				},
				clear: function() {
					clearTimeout(this.timeout)
				}
			}, new n(e, t)
		},
		timerProxy: function() {
			var e = function(e) {
					window["timerProxyTimeout_" + e] && window.clearTimeout(window["timerProxyTimeout_" + e])
				},
				t = {},
				n = 0,
				i = function(o, a, s) {
					"undefined" == typeof s && (s = {
						type: "delay",
						group: "__global"
					}), "string" == typeof s && (s = {
						type: "delay",
						group: s
					}), "object" == typeof s && (s.type = s.type || "delay", s.group = s.group || "__global"), "delay" === s.type && (this.timerProxy.clearProxy = i.clearProxy = e, e("timerProxyTimeout_" + s.group), window["timerProxyTimeout_" + s.group] = window.setTimeout(function() {
						r.isFunction(o) && o()
					}, a)), "throttle" === s.type && (r.isFunction(o) && !t["timerProxyTimeout_" + s.group + n] && (o(), t["timerProxyTimeout_" + s.group + n] = !0), window.setTimeout(function() {
						t["timerProxyTimeout_" + s.group + n] = !1, n++
					}, a))
				};
			return i.clearProxy = function() {}, i
		}(),
		iInterval: function() {
			var e = {},
				t = 0,
				n = function(t) {
					void 0 !== typeof e[t] && clearInterval(e[t])
				},
				i = function(t, i, o) {
					n(t);
					var a = Array.prototype.slice.call(arguments, 0).splice(3);
					e[t] = setInterval(function() {
						r.isFunction(i) && i.apply(void 0, a)
					}, o)
				};
			return function(e, r) {
				var o = Function.prototype.bind.apply(i, [void 0, t].concat(Array.prototype.slice.call(arguments))),
					a = n.bind(void 0, t);
				return t += 1, {
					start: o,
					stop: a
				}
			}
		}(),
		loadJs: function(e, t) {
			var n, r, i, o = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
			"object" == typeof e && (r = e, e = void 0), i = r || {}, e = e || i.url, t = t || i.success, n = document.createElement("script"), n.async = i.async || !1, n.type = "text/javascript", i.charset && (n.charset = i.charset), i.cache === !1 && (e = e + (/\?/.test(e) ? "&" : "?") + "_=" + (new Date).getTime()), n.src = e, o.insertBefore(n, o.firstChild), t && (document.addEventListener ? n.addEventListener("load", t, !1) : n.onreadystatechange = function() {
				/loaded|complete/.test(n.readyState) && (n.onreadystatechange = null, t())
			})
		},
		strFormat: function(e) {
			for (var t = 1, n = arguments.length; n > t; t++) {
				var r = new RegExp("\\{" + (t - 1) + "\\}", "gm");
				e = e.replace(r, arguments[t] || "")
			}
			return e
		},
		getUrlParam: function(e, t) {
			t || (t = document.location.toString().replace(/#.*$/g, ""));
			var n = new RegExp("(^|&|\\\\?)" + e + "=([^&]*)(&|$|#)"),
				r = t.match(n);
			return r ? r[2] : ""
		},
		PostIframe: s,
		encodeHtml: o,
		decodeHtml: a,
		redirectToErrorPage: function(e) {
			location.href = "/fans/error.htm?code=" + e
		},
		show404: function() {
			r("body").append(e("/output/game-detail-404/game-detail-404").render())
		},
		once: function(e, t) {
			var n;
			return function() {
				return e && (n = e.apply(t || this, arguments), e = null), n
			}
		}
	}, n.exports.hash = {
		get: function(e) {
			return i()[e]
		},
		set: function(e, t) {
			var n = i();
			n[e] = t, window.location.hash = "!" + r.param(n)
		},
		remove: function(e) {
			var t = i();
			delete t[e], window.location.hash = r.param(t)
		}
	}
});
define69eea4("/lib/jquery.cookie", function(e, t, n) {
	function r(e) {
		return l.raw ? e : encodeURIComponent(e)
	}
	function i(e) {
		return l.raw ? e : decodeURIComponent(e)
	}
	function o(e) {
		return r(l.json ? JSON.stringify(e) : String(e))
	}
	function a(e) {
		0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		try {
			return e = decodeURIComponent(e.replace(u, " ")), l.json ? JSON.parse(e) : e
		} catch (t) {}
	}
	function s(e, t) {
		var n = l.raw ? e : a(e);
		return $.isFunction(t) ? t(n) : n
	}
	var u = /\+/g,
		l = $.cookie = function(e, t, n) {
			if (void 0 !== t && !$.isFunction(t)) {
				if (n = $.extend({}, l.defaults, n), "number" == typeof n.expires) {
					var a = n.expires,
						u = n.expires = new Date;
					u.setDate(u.getDate() + a)
				}
				return document.cookie = [r(e), "=", o(t), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
			}
			for (var c = e ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], p = 0, d = f.length; d > p; p++) {
				var h = f[p].split("="),
					m = i(h.shift()),
					g = h.join("=");
				if (e && e === m) {
					c = s(g, t);
					break
				}
				e || void 0 === (g = s(g)) || (c[m] = g)
			}
			return c
		};
	l.defaults = {}, $.removeCookie = function(e, t) {
		return void 0 === $.cookie(e) ? !1 : ($.cookie(e, "", $.extend({}, t, {
			expires: -1
		})), !$.cookie(e))
	}
});
define69eea4("/src/scripts/utils/qqlogin", function(e, t, n) {
	document.domain = "qq.com";
	var r = e("/src/scripts/utils/utils"),
		i = e("/lib/jquery-1.11.3");
	e("/lib/jquery.cookie"), e("/src/scripts/ui/global");
	var o, a = "http://mat1.gtimg.com/news/dc/temp/c1.jpg",
		s = "http://video.qq.com/fcgi-bin/check_login",
		u = "http://video.qq.com/fcgi-bin/get_cookie",
		l = "http://video.qq.com/fcgi-bin/qq_login",
		c = "http%3A//sports.qq.com/kbsweb/loginsuccesscallback.htm",
		f = "http://video.qq.com/fcgi-bin/logout",
		p = 30,
		d = {
			domain: "sports.qq.com",
			path: "/"
		},
		h = {
			domain: "sports.qq.com",
			path: "/",
			expires: p
		},
		g = "main_login";
	r.loadJs("http://imgcache.qq.com/ptlogin/ac/v9/js/ptloginout.js");
	var m, v, y = {
		domain: "qq.com",
		path: "/"
	},
		b = function(e, t) {
			if ("string" == typeof e) i.removeCookie(e, t);
			else for (var n = 0; n < e.length; n++) i.removeCookie(e[n], t)
		},
		x = function(e, t, n) {
			for (var r = 0; r < e.length; r++) i.cookie(e[r], t[e[r]], n)
		},
		w = function(e) {
			i.cookie(g, e, {
				domain: "sports.qq.com",
				path: "/"
			})
		},
		T = function() {
			return i.cookie(g)
		},
		E = function() {
			return i.cookie("wx_head")
		},
		k = function() {
			return decodeURIComponent(i.cookie("wx_nick"))
		},
		N = function() {
			i("#login_frame").attr("src", ""), i("#wx_login_frame").attr("src", "")
		};
	window.ptlogin2_onResize = function(e, t) {
		1 >= e || 1 >= t || i("#login_div").width(e).height(t).css({
			visibility: "visible",
			"margin-left": "-" + parseInt(e / 2) + "px",
			"margin-top": "-" + parseInt(t / 2) + "px"
		})
	}, i("#closeLoginFrame").on("click", function() {
		i("#loginBg").hide(), i("#login_div").css("left", "-9999px"), ke("login").fire("ptloginClose"), N()
	}), window.login = {
		loginSuccess: function(e) {
			if (i("#loginBg").hide(), i("#login_div").css("left", "-9999px"), N(), "wx" === e.mainLogin) {
				w(e.mainLogin);
				var t = "string" == typeof e ? i.parseJSON(e) : e;
				t.head = t._wxhead || a, t.nick = decodeURIComponent(t._wxnick) || "", i.cookie("wx_nick", encodeURIComponent(t.nick), h), i.cookie.raw = !0, i.cookie("wx_head", t.head, h), i.ajax({
					url: u,
					type: "get",
					dataType: "jsonp",
					timeout: 1e4,
					success: function(n) {
						x(["access_token", "openid", "vuserid", "vusession", "appid"], n, h), D(n.next_refresh_time), e.callback && i.isFunction(window[e.callback]) && (window[e.callback](), window[e.callback] = void 0), S({
							isLogin: !0,
							nick: t.nick.replace(/</, "&lt;").replace(/>/, "&gt;"),
							avatar: t.head,
							isStrong: !0,
							loginType: "0",
							mainLogin: "wx",
							access_token: n.access_token,
							openid: n.openid,
							appid: n.appid
						})
					}
				})
			} else A("wx", function() {
				w(e.mainLogin), e.callback && i.isFunction(window[e.callback]) && (window[e.callback](), window[e.callback] = void 0), j(function(e) {
					e.isLogin ? S(e) : _()
				})
			})
		},
		logout: function() {
			A(T(), L)
		}
	};
	var C = 0;
	window.userLogin = function(e, t) {
		var n = "";
		i.isFunction(t) && (window["__loginCallback__" + C] = function() {
			t()
		}, n = "%3Fcallback=__loginCallback__" + C, C++), i("#login_frame").attr("src", "http://ui.ptlogin2.qq.com/cgi-bin/login?hide_title_bar=0&hide_close_icon=1&low_login=" + (e ? 0 : 1) + "&qlogin_auto_login=1&no_verifyimg=1&link_target=blank&appid=638023704&target=self&s_url=" + c + n), i("#login_div").css("left", "50%"), i("#wx_login_frame").attr("src", "http://open.weixin.qq.com/connect/qrconnect?appid=wx5ed58254bc0d6b7f&redirect_uri=http%3A//video.qq.com/fcgi-bin/wx_login%3fredirect_url%3d" + c + n + "&response_type=code&scope=snsapi_login&state=" + Math.random() + "&style=black&href=http%3A//mat1.gtimg.com/sports/sportAppWeb/css/iframe_login_wx.css"), i("#loginBg").show().height(document.body.scrollHeight).width(document.body.scrollWidth)
	}, window.userLogout = function() {
		A(T(), L)
	}, window.wxlogin_onInvokeFail = function(e) {};
	var S = function(e, t) {
			ke("login").fire("loginSuccess", e), void 0 !== t && t.resolve(e)
		},
		_ = function(e) {
			b(["skey", "lskey"], y), b(g, d), ke("login").fire("loginFailed"), void 0 !== e && e.reject()
		},
		j = function(e) {
			var t = T();
			return "wx" === t ? i.ajax({
				url: s + "?random=" + Math.random(),
				dataType: "jsonp",
				scriptCharset: "UTF-8"
			}).done(function(t) {
				if (!t || 0 !== t.errcode) return A(), void e({
					isLogin: !1
				});
				i.cookie("access_token", t.access_token, h), i.cookie("vusession", t.vusession, h);
				var n = {
					head: t.head || E() || a
				};
				t.nick ? n.nick = decodeURIComponent(t.nick) : n.nick = k() || "", i.cookie("wx_nick", encodeURIComponent(n.nick), h), i.cookie.raw = !0, i.cookie("wx_head", n.head, h), D(t.next_refresh_time), e({
					isLogin: !0,
					nick: decodeURIComponent(t.nick).replace(/</, "&lt;").replace(/>/, "&gt;"),
					avatar: t.head || a,
					isStrong: !0,
					loginType: "0",
					mainLogin: "wx",
					access_token: t.access_token,
					openid: i.cookie("openid"),
					appid: i.cookie("appid")
				})
			}) : i.ajax({
				url: window.GAME_SERVER + "/user/qqInfo?ran=" + Math.random(),
				dataType: "jsonp",
				scriptCharset: "UTF-8"
			}).done(function(n) {
				if (0 == n[0]) {
					t || (w("qq"), i.ajax({
						url: l,
						dataType: "jsonp"
					}));
					var r = n[1];
					e({
						isLogin: "1" === r.isQQLogin,
						nick: r.nick.replace(/</, "&lt;").replace(/>/, "&gt;"),
						avatar: r.icon || a,
						isStrong: "0" === r.loginType,
						loginType: r.loginType,
						mainLogin: "qq"
					})
				} else n.isLogin = !1, e(n)
			})
		},
		A = function(e, t) {
			e = e || T();
			var n = {
				domain: "sports.qq.com",
				path: "/"
			};
			"wx" === e ? b(["wx_nick", "wx_head", "access_token", "openid", "appid", "vuserid", "vusession", "shequid"], n) : (e = "qq", b(["nick", "encuin", "shequid"], n), b(["luin", "lskey"], y)), b(g, n), i.ajax({
				url: f + "?clear=1&type=" + e,
				type: "get",
				dataType: "jsonp",
				timeout: 1e4,
				success: function() {
					t && t()
				}
			})
		},
		L = function() {
			"undefined" != typeof pt_logout && pt_logout.logout(function() {
				b(["uin", "skey", "luin", "lskey"], y), ke("login").fire("logout")
			})
		},
		D = function(e) {
			var t = 6e3;
			e && e > 0 && 6e3 > e && (t = e), clearTimeout(o), o = setTimeout(function() {
				O()
			}, 1e3 * t)
		},
		O = function(e, t) {
			var n = s;
			t && (n += "?write=1"), i.ajax({
				url: n,
				type: "get",
				dataType: "jsonp",
				timeout: 1e4,
				success: function(t) {
					t && 0 == t.errcode ? (i.cookie("access_token", t.access_token, h), i.cookie("vusession", t.vusession, h), D(t.next_refresh_time)) : window.userLogout(), e && e()
				}
			})
		},
		q = function() {
			I() ? j(function(e) {
				e.isLogin ? S(e) : _()
			}) : _()
		},
		I = function() {
			return !!i.cookie("uin") && !! i.cookie("skey") || !! i.cookie("luin") && !! i.cookie("lskey") || "wx" === T()
		};
	i(function() {
		i.ajax({
			url: u,
			type: "get",
			dataType: "jsonp",
			timeout: 1e4,
			success: function(e) {
				e && e.main_login && (i.cookie(g, e.main_login, h), "wx" === e.main_login && (e.access_token ? x(["access_token", "openid", "vuserid", "vusession", "appid"], e, h) : b(["wx_nick", "wx_head", "access_token", "openid", "appid", "vuserid", "vusession"], d))), I() ? "wx" === e.main_login ? i.ajax({
					url: window.GAME_SERVER + "/vip/status",
					dataType: "jsonp",
					success: function(e) {
						2 === e[0] ? (A(), _()) : j(function(e) {
							e.isLogin ? S(e) : _()
						})
					}
				}) : j(function(e) {
					e.isLogin ? S(e) : _()
				}) : (A(), _())
			}
		})
	}), i(window).focus(function() {
		m !== i.cookie("uin") && v !== i.cookie("openid") && (q(), "wx" === T() ? v = i.cookie("openid") : m = i.cookie("uin"))
	}), n.exports = {
		needLogin: function(e) {
			var t = new i.Deferred;
			return n.exports.isLogin(function(n, r, i) {
				n && (e ? r : !0) ? S(i, t) : userLogin(!1, function() {
					j(function(e) {
						t.resolve(e)
					})
				})
			}), t.promise()
		},
		userLogin: function(e, t) {
			userLogin(e, function() {
				i.isFunction(t) && j(function(e) {
					t(e)
				})
			})
		},
		getUserInfo: function(e) {
			return I() ? j(e) : null
		},
		isLogin: function(e) {
			I() ? j(function(t) {
				i.isFunction(e) && e(t.isLogin, t.isStrong, t)
			}) : e(!1)
		},
		getLoginType: T,
		getWxLoginCookie: function() {
			return {
				openid: i.cookie("openid"),
				access_token: i.cookie("access_token"),
				appid: i.cookie("appid")
			}
		}
	}, n.exports.needStrongLogin = function() {
		var e = new i.Deferred,
			t = function() {
				return "wx" === T() ? !! i.cookie(g) : !! i.cookie("uin") && !! i.cookie("skey")
			},
			n = function() {
				A(), b("skey", y)
			},
			r = function() {
				userLogin(), ke("login").on("loginSuccess", function() {
					t() && e.resolve()
				}), ke("login").on("loginFailed", function() {
					t() && e.reject()
				}), ke("login").on("ptloginClose", function() {
					e && e.reject()
				})
			};
		return t() ? j(function(t) {
			t.isLogin ? "0" === t.loginType ? S(t, e) : (n(), r()) : _(e)
		}) : (n(), r()), e.promise()
	}
});
define69eea4("/src/scripts/ui/account/payGame", function(e, t, n) {
	var r = e("/lib/jquery-1.11.3"),
		i = function(e) {
			r.ajax({
				url: window.GAME_SERVER + "/vip/auth?mid=" + matchInfo.mid,
				dataType: "jsonp"
			}).done(function(t) {
				return 0 !== t[0] ? void e("0") : void e(t[1])
			})
		};
	n.exports.isPayedGame = i
});
define69eea4("/output/player-window/player-window", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {
			$(".player-shadow, .close").on("click", function() {
				ke("player").fire("end")
			})
		},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div class="player-shadow"></div>\n<div class="player-window-container" style="margin-top: -', htmlCode += parseInt(height, 10) / 2, htmlCode += "px; margin-left: -", htmlCode += parseInt(width, 10) / 2, htmlCode += "px; width: ", htmlCode += width, htmlCode += "px; height: ", htmlCode += height, htmlCode += 'px">\n    <div id="playerWindow"></div>\n    <span class="close">å…³é—­</span>\n</div>';
			return htmlCode
		}
	}
});
"use strict";
define69eea4("/src/scripts/utils/player", function(e, t, n) {
	var r = "http://imgcache.gtimg.cn/tencentvideo_v1/tvp/js/tvp.player_v2.js",
		i = e("/src/scripts/utils/utils").loadJs,
		o = e("/src/scripts/utils/qqlogin"),
		a = e("/src/scripts/ui/account/payGame"),
		s = function() {
			$(".player-shadow, .player-window-container").remove(), ke("player").fire("unmute")
		},
		u = function(e) {
			a.isPayedGame(function(t) {
				o.isLogin(function(n) {
					window.__tenplay_getuinfo = function() {
						return n ? 0 != t.isUserPay ? 10 : 1 : 0
					}, e()
				})
			})
		};
	window.__tenplay_getuinfo = function() {
		return -1
	};
	var l = function(e) {
			i(r, function() {
				u(function() {
					var t = new tvp.VideoInfo;
					t.setVid(e.vid);
					var n = new tvp.Player;
					n.create({
						width: e.width,
						height: e.height,
						video: t,
						vodFlashExtVars: {
							chid: 8
						},
						modId: e.modId,
						isVodFlashShowEnd: !e.banRecommend,
						isVodFlashShowNextBtn: !1,
						pic: e.pic,
						autoplay: !0,
						flashWmode: "opaque",
						type: 2
					}), n.onallended = function(e) {}, ke("player").fire(e.singleAutoReplay ? "replay" : "playNext", n, e.vid)
				})
			})
		},
		c = function(t) {
			ke("player").fire("mute"), $("body").append(e("/output/player-window/player-window").render({
				height: t.height,
				width: t.width
			})), e("/output/player-window/player-window").init(), ke("player").on("end", s), i(r, function() {
				u(function() {
					var e = new tvp.VideoInfo;
					e.setVid(t.vid);
					var n = new tvp.Player;
					n.create({
						width: t.width,
						height: t.height,
						video: e,
						vodFlashExtVars: {
							chid: 8
						},
						modId: "playerWindow",
						autoplay: !0,
						flashWmode: "opaque",
						type: 2
					}), n.onallended = function() {
						s()
					}
				})
			})
		},
		f = function(e) {
			i(r, function() {
				u(function(t) {
					var n = new tvp.VideoInfo;
					n.setChannelId(e.channelId);
					var r = new tvp.Player;
					r.create({
						width: e.width,
						height: e.height,
						video: n,
						modId: e.modId,
						autoplay: !0,
						type: 1,
						pic: e.pic,
						flashWmode: "opaque",
						liveFlashExtVars: {
							chid: 8,
							bullet: 1,
							advbullet: 1,
							registid: e.targetId
						}
					}), ke("player").un("resumeAd.player"), ke("player").on("resumeAd.player", function() {
						try {
							r.getPlayer().Out_DataCmd("cmd=resumeAd")
						} catch (e) {}
					}), ke("player").un("mute.player"), ke("player").on("mute.player", function() {
						try {
							r.getPlayer().mute()
						} catch (e) {}
					}), ke("player").un("unmute.player"), ke("player").on("unmute.player", function() {
						try {
							r.getPlayer().unmute()
						} catch (e) {}
					}), ke("login").un("logout.player"), ke("login").on("logout.player", function() {
						try {
							r.flashobj.updateLoginStatus(0)
						} catch (e) {}
					}), ke("login").un("loginSuccess.player"), ke("login").on("loginSuccess.player", function() {
						try {
							r.flashobj.updateLoginStatus(1)
						} catch (e) {}
					}), r.oninited = function() {
						o.isLogin(function(e) {
							r.flashobj.updateLoginStatus(e ? 1 : 0)
						})
					}, r.onplaying = function() {
						ke("multiBtn").fire("show"), "multiCamera" !== e.from && ke("multiBtnHover").fire("hide")
					}
				})
			})
		},
		p = function() {
			ke("player").on("play", function(e) {
				l(e)
			})
		};
	return {
		initVideo: l,
		initLive: f,
		initVideoWhenLive: c,
		bind: p
	}
});
define69eea4("/src/scripts/ui/game/vip/vipPlayer", function(e, t, n) {
	var r = e("/src/scripts/ui/account/payGame");
	return {
		init: function(t, n) {
			e("/src/scripts/utils/player").initLive({
				channelId: t,
				modId: "livingArea",
				width: $("#livingArea").width(),
				height: $("#livingArea").height(),
				targetId: n
			}), r.isPayedGame(function(e) {
				0 == e.isUserPay && $(".player_tips_wrap").show()
			})
		}
	}
});
define69eea4("/output/weixin-qr-code/weixin-qr-code", function(require, exports, module) {
	var _g = (require("/lib/jsonselect"), require("/src/scripts/ui/global")),
		utils = require("/src/scripts/utils/utils"),
		payGame = (require("/lib/tpHelper"), require("/src/scripts/utils/qqlogin"), require("/src/scripts/ui/account/payGame")),
		vipPlayer = require("/src/scripts/ui/game/vip/vipPlayer"),
		layerAutoResize = utils.layerAutoResize;
	$("body").on("click", ".js_close", function() {
		$(".mod_layer_wxopen").hide(), $(".wx_mask_layer").hide(), ke("player").fire("resumeAd"), ke("minipay").fire("payClose")
	});
	var getPaySuccessTimer, orderId, stopTimer = function(e) {
			clearInterval(getPaySuccessTimer), getPaySuccessTimer = null, e && $(".js_qr_txt").text(e), setTimeout(function() {
				$(".mod_layer_wxopen").hide(), $(".wx_mask_layer").hide(), $(".js_qr_txt").text("ä½¿ç”¨å¾®ä¿¡æ‰«æäºŒç»´ç ")
			}, timerInterval)
		},
		getPaySuccessMessage = function() {
			$.ajax({
				url: window.GAME_SERVER + "/vip/payStatus?orderId=" + orderId,
				dataType: "jsonp"
			}).done(function(e) {
				0 == e[0] && 1 == e[1].status && (stopTimer("æ”¯ä»˜æˆåŠŸï¼"), ke("wxminipay").fire("over"), payGame.isPayedGame(function(e) {
					var t = window.matchInfo || {};
					0 != e.isUserPay && (t.liveType === _g.liveType.VIDEO && t.liveId && t.targetId && ($("#float-layer, #members-layer, .player_tips_wrap").css("display", "none"), vipPlayer.init(t.liveId, t.targetId)), ke("minipay").fire("paySucess"))
				})), 2 == e[0] && stopTimer()
			})
		},
		timerInterval = 2e3;
	ke("wxminipay").on("waiting", function() {
		getPaySuccessTimer = setInterval(getPaySuccessMessage, timerInterval)
	}), module.exports = {
		init: function() {
			orderId = +(new Date).getTime();
			var e = utils.getUrlParam,
				t = e("sandbox") ? e("sandbox") : 0,
				n = "http://matchweb.sports.qq.com/tools/wxPayQr?orderId=" + orderId + "&sandbox=" + t;
			$("#qr_img").attr("src", n), $(".js_wx_name").text(decodeURIComponent(decodeURIComponent($.cookie("wx_nick")))), setTimeout(function() {
				layerAutoResize(".mod_layer_wxopen")
			}, 0)
		},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div class="wx_mask_layer"></div>\n<div class="mod_layer_wxopen">\n    <iframe frameborder="0" class="iframe_mask"></iframe>\n    <div class="ly_content">\n        <a href="javascript:;" class="ly_close js_close" title="å…³é—­">å…³é—­</a>\n                                                                                                      \n        <div class="ly_bd cf">\n           <div class="ly_ct">\n                <div class="qr_list">\n                   <h3 class="qr_tit">æ­£åœ¨ç»™<span class="name js_wx_name"></span><span class="js_txt">å¼€é€š</span>ä½“è‚²ä¼šå‘˜</h3>\n                   <div class="qr_pic">\n                        <img id="qr_img" alt="" src="">\n                    </div>\n                    <p class="qr_txt js_qr_txt">ä½¿ç”¨å¾®ä¿¡æ‰«æäºŒç»´ç </p>\n                    <p class="qr_tips">è¯·ä½¿ç”¨å½“å‰ç™»å½•çš„å¾®ä¿¡æ‰«ç æ”¯ä»˜</p>\n                </div>\n           </div>\n        </div>\n    </div>\n</div>';
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/vip/miniPay", function(e, t, n) {
	var r = e("/src/scripts/utils/qqlogin"),
		i = e("/lib/jquery-1.11.3"),
		o = e("/src/scripts/ui/account/payGame"),
		a = e("/src/scripts/utils/utils");
	e("/src/scripts/ui/global"), e("/src/scripts/ui/game/vip/vipPlayer");
	e("/lib/kEvent"), a.loadJs("http://imgcache.qq.com/bossweb/ipay/js/api/cashier.js"), i("body").append(e("/output/weixin-qr-code/weixin-qr-code").render());
	var s = function(t, n, s) {
			if ("wx" == r.getLoginType()) return e("/output/weixin-qr-code/weixin-qr-code").init(), i(".mod_layer_wxopen").show(), i(".wx_mask_layer").show(), void ke("wxminipay").fire("waiting");
			var u, l = {
				debug: a.getUrlParam("debug"),
				type: "recharge",
				codes: "txtypcby",
				aid: "txtypcby",
				title: "æœåŠ¡å¼€é€š",
				source: "15200",
				zIndex: 9999,
				channels: null,
				defaultChannel: "weixin",
				amount: "1",
				amountType: "!month",
				presetAmount: "!1,3,12",
				target: "self",
				token: +new Date,
				context: "",
				actid: "MA20150918161038805",
				onSuccess: function(e) {
					ke("minipay").fire("paySucess", e)
				},
				onError: function(e) {},
				onClose: function(r) {
					ke("minipay").fire("payClose"), o.isPayedGame(function(r) {
						t && n && 0 != r.isUserPay ? (e("/src/scripts/ui/game/vip/vipPlayer").init(t, n), i("#float-layer,#members-layer,.player_tips_wrap").css("display", "none")) : ke("player").fire("resumeAd")
					})
				},
				onNotify: function(e) {}
			},
				c = [].slice.call(arguments);
			u = 1 === c.length && i.isPlainObject(c[0]) ? i.extend(l, c[0]) : i.extend(l, s), cashier.dialog.buy(u)
		};
	return {
		showPay: s
	}
});
define69eea4("/output/coin-list/coin-list", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) {
				htmlCode += '<span class="arrow-in arrow"></span>\n<span class="arrow-out arrow"></span>', _data.showClose && (htmlCode += '\n<span class="coin-close"></span>'), htmlCode += "\n<ul>";
				for (var i = 0; i < tasks.length; i++) if (0 !== tasks[i].unRecvMoney) {
					var title = tasks[i].title + tasks[i].unRecvCnt + "æ¬¡",
						money = "Kå¸+" + tasks[i].unRecvMoney;
					htmlCode += "\n    <li>\n        <span>", htmlCode += title, htmlCode += '</span><span class="kb-add">', htmlCode += money, htmlCode += "</span>\n    </li>"
				}
				htmlCode += '\n</ul>\n<div class="recvBtn">é©¬ä¸Šé¢†å–</div>'
			}
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/account/coin", function(e, t, n) {
	var r = e("/src/scripts/utils/utils"),
		i = (e("/src/scripts/utils/qqlogin"), e("/lib/jquery-1.11.3")),
		o = !1,
		a = [],
		s = 0,
		u = {
			post: "0_å‘å¸–",
			reply: "1_å›žå¤",
			support: "2_ç‚¹èµž"
		};
	ke("login").on("logout", function() {
		s = 0, i(".coin").hide()
	}), ke("login").on("loginSuccess", function(e) {
		0 === s && p(), s += 1, f(), o && (d(), o = !1)
	}), ke("login").on("loginFailed", function() {
		i(".coin").hide()
	}), ke("guess").on("coinChange", function() {
		f()
	});
	var l = r.timero(function() {
		i(".coinList").fadeOut()
	}, 3e3),
		c = r.timero(function() {
			i("#unrecv").stop(!0, !0), 0 === i(".coinList:visible").length && i(".coinList").fadeIn()
		}, 100);
	ke("exclusion").on("open", function(e) {
		"coin" !== e && (i(".coinList").fadeOut(), c.clear())
	});
	var f = function() {
			r.timerProxy(function() {
				i.ajax({
					url: window.GUESS_SERVER + "/sportsWeb/balance",
					dataType: "jsonp"
				}).done(function(e) {
					0 !== e.code || (i(".coinInfo").html(e.data.kb), i(".coin").show())
				})
			}, 250, {
				type: "throttle",
				group: "getBalance"
			})
		},
		p = function(t, n) {
			i.ajax({
				url: window.BASE_SERVER + "/money/unrecv",
				dataType: "jsonp"
			}).done(function(r) {
				if ("0" !== r.code);
				else {
					var o = r.data,
						s = o.tasks;
					t || (a = s), 0 !== o.moneyCnt ? i(".coinList").html(e("/output/coin-list/coin-list").render({
						tasks: s,
						showClose: !! t
					})).removeClass("no-coin") : i(".coinList").html("").addClass("no-coin"), i.isFunction(n) && n(r)
				}
			})
		},
		d = function() {
			i.ajax({
				url: window.BASE_SERVER + "/money/recv",
				dataType: "jsonp"
			}).done(function(e) {
				"2" === e.code ? (o = !0, userLogin()) : "0" !== e.code || (i(".coinList").html("").addClass("no-coin"), i(".recvSuccess").fadeIn(), f(), setTimeout(function() {
					i(".recvSuccess").fadeOut(), location.href.indexOf("mycenter") > -1 && ke("myCenter").fire("refresh")
				}, 3e3))
			})
		};
	ke("coin").on("coin", function(e) {
		p(e, function(t) {
			var n = t.data.tasks;
			0 !== n[u[e].split("_")[0]].unRecvMoney && a[u[e].split("_")[0]].leftCnt > 0 && (c.run(), l.run(), a = n)
		})
	}), i(function() {
		i(".coin").on("click", ".coin-close", function() {
			i(".coinList").fadeOut(), c.clear(), p()
		}), i(".header").on("mouseenter", ".coin,.coinList", function(e) {
			r.timerProxy.clearProxy("showcoin"), i(".js-loginlist").fadeOut(), 0 === i(".coinList:visible").length && (p(), ke("exclusion").fire("open", "coin")), l.clear(), c.run()
		}), i(".header").on("mouseleave", ".coin,.coinList", function(e) {
			r.timerProxy.clearProxy("refreshcoin"), 0 === i(".coin").find(".coin-close").length ? r.timerProxy(function() {
				i(".coinList").fadeOut()
			}, 300, "showcoin") : l.run(), c.clear()
		}), i(".header").on("click", ".recvBtn", function() {
			d()
		})
	})
});
define69eea4("/src/scripts/ui/account/vip", function(e, t, n) {
	var r = (e("/src/scripts/utils/utils"), e("/src/scripts/utils/qqlogin"), e("/lib/jquery-1.11.3")),
		i = (e("/src/scripts/ui/global"), function(e) {
			r.ajax({
				url: window.GAME_SERVER + "/vip/status",
				dataType: "jsonp"
			}).done(function(t) {
				return 0 !== t[0] ? void e("0") : void e(t[1])
			})
		}),
		o = function(e) {
			e && "1" === e.vip ? (r("#openVip").hide(), r("#vipLogo").show(), r(".watchgame-mid-header .loginlist-bg").removeClass("loginlist-bg-long").addClass("loginlist-bg-short")) : (r("#openVip").show(), r("#vipLogo").hide(), r(".watchgame-mid-header .loginlist-bg").removeClass("loginlist-bg-short").addClass("loginlist-bg-long"))
		},
		a = function() {
			i(function(e) {
				setTimeout(function() {
					a()
				}, 1e3 * (parseInt(e && e.pollInterval, 10) || 60)), o(e)
			})
		};
	ke("login").on("loginSuccess", function(e) {
		a()
	}), n.exports.isVip = i
});
define69eea4("/src/scripts/ui/account/index", function(e, t, n) {
	var i = e("/src/scripts/ui/global"),
		r = e("/src/scripts/utils/utils"),
		o = e("/src/scripts/utils/qqlogin"),
		a = e("/lib/jquery-1.11.3"),
		s = e("/src/scripts/ui/game/vip/miniPay");
	e("/src/scripts/ui/account/coin"), e("/src/scripts/ui/account/vip");
	var u = function() {
			a.ajax({
				url: window.BASE_SERVER + "/message/count",
				type: "get",
				dataType: "jsonp"
			}).done(function(e) {
				"undefined" != typeof e && "0" === e.code && "0" !== e.data.count ? a(".js-unread-msg-count").html(e.data.count).show() : a(".js-unread-msg-count").hide()
			})
		};
	a(".msg .my-message").on("click", function() {
		a(".js-unread-msg-count").hide()
	});
	var l = r.iInterval(function() {
		u()
	}, 6e4);
	a("#openVip").on("click", function() {
		o.needLogin(!0).then(function() {
			"undefined" != typeof matchInfo && "1" === matchInfo.isPay ? s.showPay(matchInfo.liveId, matchInfo.targetId, {
				aid: i.remark({
					refer: 109,
					page: 2,
					mid: matchInfo.mid
				})
			}) : s.showPay({
				aid: i.remark({
					refer: 109
				})
			})
		})
	}), ke("minipay").on("paySucess", function() {
		setTimeout(function() {
			e("/src/scripts/ui/account/vip").isVip(function(e) {
				e && "1" === e.vip && (a("#vipLogo").show(), a("#openVip").hide(), a(".loginlist-bg").removeClass("loginlist-bg-long").addClass("loginlist-bg-short"))
			})
		}, 3e3)
	}), ke("login").on("logout", function() {
		window.location.reload()
	}), ke("login").on("loginSuccess", function(e) {
		a("#userName,#userName1").html(e.nick).attr("title", e.nick), a("#head-image").attr("src", e.avatar), u(), l.start()
	}), ke("login").on("loginFailed", function() {
		a(".js-unread-msg-count").empty().hide(), l.stop()
	}), ke("exclusion").on("open", function(e) {
		"mycenterlist" !== e && p.clear()
	});
	var c = r.timero(function() {
		a(".js-loginlist").fadeOut()
	}, 500),
		p = r.timero(function() {
			a(".js-loginlist").stop(!0, !0), 0 === a(".js-loginlist:visible").length && a(".js-loginlist").fadeIn()
		}, 100);
	a(function() {
		a("#head-image,.js-loginlist").on("mouseover", function(e) {
			ke("exclusion").fire("open", "mycenterlist"), c.clear(), p.run()
		}), a("#head-image").on("mouseover", function(e) {
			a("#logined").addClass("show-mask")
		}), a("#head-image,.js-loginlist").on("mouseout", function(e) {
			a("#logined").removeClass("show-mask"), c.run(), p.clear()
		}), a("#head-image, .js-unread-msg-count").on("click", function(e) {
			a(".js-unread-msg-count").empty().hide()
		})
	})
});
define69eea4("/src/scripts/ui/login", function(e, t, n) {
	var i = (e("/src/scripts/utils/utils"), e("/lib/jquery-1.11.3")),
		r = e("/src/scripts/utils/qqlogin"),
		o = e("/src/scripts/ui/game/vip/vipPlayer");
	e("/src/scripts/ui/account/index"), window.__flashplayer_openLogin = function() {
		r.needLogin().then(function() {
			o.init(matchInfo.liveId, matchInfo.targetId), i("#float-layer").css("display", "none")
		})
	}, i("#onekey").on("click", function() {
		userLogin()
	}), i("#loginOut").click(function() {
		userLogout()
	}), ke("login").on("logout", function() {
		i("#logined").hide(), i("#loginAll").show()
	}), ke("login").on("loginSuccess", function(e) {
		if (i("#logined").show(), i("#loginAll").hide(), "qq" === e.mainLogin) {
			var t = e.nick + "|" + (i.cookie("uin") || i.cookie("luin").substring(2)) + "|" + e.avatar;
			i.cookie.raw = !0, i.cookie("lw_nick", t)
		}(new Image).src = "http://shequweb.sports.qq.com/user/login"
	}), ke("login").on("loginFailed", function() {
		i("#loginAll").show(), i("#logined").hide()
	}), i(function() {
		i(".tab-download").hover(function() {
			i(".head-code").stop().slideDown(300)
		}, function() {
			i(".head-code").stop().slideUp(300)
		}), i(".tab-login .tab-item").hover(function() {
			i(".tab-login .tab-item").removeClass("selected"), i(this).addClass("selected");
			var e = i(this).data("target");
			i(".tab-content").hide(), i("#" + e).show()
		})
	})
});
define69eea4("/output/page-bg/page-bg", function(require, exports, module) {
	var _g = (require("/lib/jsonselect"), require("/src/scripts/ui/global"));
	require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '', htmlCode += gameType === _g.gameType.FOOTBALL ? '\n    <img src="http://mat1.gtimg.com/sports/kbsweb/statics/game-football_5cb1ad.jpg" class="page-bg">' : gameType === _g.gameType.BASKETBALL ? '\n    <img src="http://mat1.gtimg.com/sports/kbsweb/statics/game-basketball_1e0018.jpg" class="page-bg">' : '\n    <img src="http://mat1.gtimg.com/sports/kbsweb/statics/game-other_e83fd3.jpg" class="page-bg">';
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/utils/boss", function(e, t, n) {
	var i = e("/lib/jquery-1.11.3");
	e("/lib/jquery.cookie");
	var r = "http://btrace.qq.com/kvcollect",
		o = 0,
		a = "click",
		s = ".boss",
		u = !1,
		c = function(e) {
			return "[object object]" === Object.prototype.toString.call(e).toLowerCase()
		},
		l = function() {
			var e = "bossUkey";
			if (i.cookie(e)) return i.cookie(e);
			var t = +new Date;
			return t = [t, Math.floor(t * Math.random() * Math.random()).toString().slice(-5)].join(""), i.cookie(e, t, {
				expires: 365
			}), t
		}(),
		d = function(e) {
			var t = i.cookie("skey") && i.cookie("uin"),
				n = t;
			return e || (n = t || i.cookie("lskey") && i.cookie("luin")), + !! n
		},
		p = function(e) {
			var t = i.cookie("uin");
			return e && !t && (t = i.cookie("luin")), t || ""
		},
		f = function() {
			return p(!0).replace(/^o?0*/, "")
		},
		h = function(e, t) {
			this.id = e, this.pwd = t
		};
	h.prototype = {
		report: function(e) {
			var t = this,
				n = {
					BossId: t.id,
					Pwd: t.pwd,
					platform: "web",
					hash: location.hash,
					is_login: d(u),
					uin: p(!u),
					bossUkey: l,
					qq: f(),
					link: location.href,
					random: (new Date).getTime() + "" + o++
				};
			n.page = i("body").data("pageid"), c(e) && i.extend(n, e);
			var a = new Image(1, 1);
			a.src = r + "?" + i.param(n)
		}
	};
	var g = new h("3164", "1383586450"),
		m = new h("3171", "1042566221");
	n.exports = {
		usePvUvReport: function(e) {
			var t = {};
			return c(e) && i.extend(t, e), g.report(t), g
		},
		useEventReport: function(e) {
			var t = ["mod", "action", "gid", "vid", "_mid", "tid", "extra"],
				n = {
					mod: "module",
					action: "user_action",
					gid: "game_id",
					_mid: "mid",
					extra: "action_extra"
				};
			i("body").on(a, s, function(r) {
				for (var o, a = i(this), s = {}, u = 0, l = t.length; l > u; u++) void 0 !== a.data(t[u]) && (o = t[u], n[o] && (o = n[o]), s[o] = a.data(t[u]));
				"function" == typeof e && e(s), c(e) && i.extend(s, e), m.report(s)
			})
		},
		triggerEventReport: function(e) {
			var t = {};
			c(e) && i.extend(t, e);
			var n = i('<i class="boss" style="display: none;"></i>');
			n.data(t), i("body").append(n), setTimeout(function() {
				n.trigger(a, n), n.remove()
			}, 0)
		},
		getBoss: function(e, t) {
			return new h(e, t)
		},
		eventBoss: m,
		pvuvBoss: g
	}
});
define69eea4("/lib/jquery.mousewheel", function(e, t, n) {
	function i(e) {
		var t = e || window.event,
			n = d.call(arguments, 1),
			i = 0,
			l = 0,
			c = 0,
			f = 0,
			h = 0,
			g = 0;
		if (e = u.event.fix(t), e.type = "mousewheel", "detail" in t && (c = -1 * t.detail), "wheelDelta" in t && (c = t.wheelDelta), "wheelDeltaY" in t && (c = t.wheelDeltaY), "wheelDeltaX" in t && (l = -1 * t.wheelDeltaX), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (l = -1 * c, c = 0), i = 0 === c ? l : c, "deltaY" in t && (c = -1 * t.deltaY, i = c), "deltaX" in t && (l = t.deltaX, 0 === c && (i = -1 * l)), 0 !== c || 0 !== l) {
			if (1 === t.deltaMode) {
				var m = u.data(this, "mousewheel-line-height");
				i *= m, c *= m, l *= m
			} else if (2 === t.deltaMode) {
				var y = u.data(this, "mousewheel-page-height");
				i *= y, c *= y, l *= y
			}
			if (f = Math.max(Math.abs(c), Math.abs(l)), (!s || s > f) && (s = f, o(t, f) && (s /= 40)), o(t, f) && (i /= 40, l /= 40, c /= 40), i = Math[i >= 1 ? "floor" : "ceil"](i / s), l = Math[l >= 1 ? "floor" : "ceil"](l / s), c = Math[c >= 1 ? "floor" : "ceil"](c / s), p.settings.normalizeOffset && this.getBoundingClientRect) {
				var v = this.getBoundingClientRect();
				h = e.clientX - v.left, g = e.clientY - v.top
			}
			return e.deltaX = l, e.deltaY = c, e.deltaFactor = s, e.offsetX = h, e.offsetY = g, e.deltaMode = 0, n.unshift(e, i, l, c), a && clearTimeout(a), a = setTimeout(r, 200), (u.event.dispatch || u.event.handle).apply(this, n)
		}
	}
	function r() {
		s = null
	}
	function o(e, t) {
		return p.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
	}
	var a, s, u = e("/lib/jquery-1.11.3"),
		l = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		c = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		d = Array.prototype.slice;
	if (u.event.fixHooks) for (var f = l.length; f;) u.event.fixHooks[l[--f]] = u.event.mouseHooks;
	var p = u.event.special.mousewheel = {
		version: "3.1.12",
		setup: function() {
			if (this.addEventListener) for (var e = c.length; e;) this.addEventListener(c[--e], i, !1);
			else this.onmousewheel = i;
			u.data(this, "mousewheel-line-height", p.getLineHeight(this)), u.data(this, "mousewheel-page-height", p.getPageHeight(this))
		},
		teardown: function() {
			if (this.removeEventListener) for (var e = c.length; e;) this.removeEventListener(c[--e], i, !1);
			else this.onmousewheel = null;
			u.removeData(this, "mousewheel-line-height"), u.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function(e) {
			var t = u(e),
				n = t["offsetParent" in u.fn ? "offsetParent" : "parent"]();
			return n.length || (n = u("body")), parseInt(n.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
		},
		getPageHeight: function(e) {
			return u(e).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	u.fn.extend({
		mousewheel: function(e) {
			return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
		},
		unmousewheel: function(e) {
			return this.unbind("mousewheel", e)
		}
	})
});
define69eea4("/lib/jquery.mCustomScrollbar", function(e, t, n) {
	var i = e("/lib/jquery-1.11.3");
	e("/lib/jquery.mousewheel");
	var r, o = "mCustomScrollbar",
		a = "mCS",
		s = ".mCustomScrollbar",
		l = {
			setTop: 0,
			setLeft: 0,
			axis: "y",
			scrollbarPosition: "inside",
			scrollInertia: 950,
			autoDraggerLength: !0,
			alwaysShowScrollbar: 0,
			snapOffset: 0,
			mouseWheel: {
				enable: !0,
				scrollAmount: "auto",
				axis: "y",
				deltaFactor: "auto",
				disableOver: ["select", "option", "keygen", "datalist", "textarea"]
			},
			scrollButtons: {
				scrollType: "stepless",
				scrollAmount: "auto"
			},
			keyboard: {
				enable: !0,
				scrollType: "stepless",
				scrollAmount: "auto"
			},
			contentTouchScroll: 25,
			advanced: {
				autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
				updateOnContentResize: !0,
				updateOnImageLoad: !0,
				autoUpdate: !0,
				autoUpdateTimeout: 60
			},
			theme: "light",
			callbacks: {
				onTotalScrollOffset: 0,
				onTotalScrollBackOffset: 0,
				alwaysTriggerOffsets: !0
			}
		},
		c = 0,
		u = {},
		d = window.attachEvent && !window.addEventListener ? 1 : 0,
		f = !1,
		p = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
		h = {
			init: function(e) {
				var e = i.extend(!0, {}, l, e),
					t = m.call(this);
				if (e.live) {
					var n = e.liveSelector || this.selector || s,
						r = i(n);
					if ("off" === e.live) return void v(n);
					u[n] = setTimeout(function() {
						r.mCustomScrollbar(e), "once" === e.live && r.length && v(n)
					}, 500)
				} else v(n);
				return e.setWidth = e.set_width ? e.set_width : e.setWidth, e.setHeight = e.set_height ? e.set_height : e.setHeight, e.axis = e.horizontalScroll ? "x" : y(e.axis), e.scrollInertia = e.scrollInertia > 0 && e.scrollInertia < 17 ? 17 : e.scrollInertia, "object" != typeof e.mouseWheel && 1 == e.mouseWheel && (e.mouseWheel = {
					enable: !0,
					scrollAmount: "auto",
					axis: "y",
					preventDefault: !1,
					deltaFactor: "auto",
					normalizeDelta: !1,
					invert: !1
				}), e.mouseWheel.scrollAmount = e.mouseWheelPixels ? e.mouseWheelPixels : e.mouseWheel.scrollAmount, e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta ? e.advanced.normalizeMouseWheelDelta : e.mouseWheel.normalizeDelta, e.scrollButtons.scrollType = x(e.scrollButtons.scrollType), g(e), i(t).each(function() {
					var t = i(this);
					if (!t.data(a)) {
						t.data(a, {
							idx: ++c,
							opt: e,
							scrollRatio: {
								y: null,
								x: null
							},
							overflowed: null,
							contentReset: {
								y: null,
								x: null
							},
							bindEvents: !1,
							tweenRunning: !1,
							sequential: {},
							langDir: t.css("direction"),
							cbOffsets: null,
							trigger: null
						});
						var n = t.data(a),
							r = n.opt,
							o = t.data("mcs-axis"),
							s = t.data("mcs-scrollbar-position"),
							l = t.data("mcs-theme");
						o && (r.axis = o), s && (r.scrollbarPosition = s), l && (r.theme = l, g(r)), b.call(this), i("#mCSB_" + n.idx + "_container img:not(." + p[2] + ")").addClass(p[2]), h.update.call(null, t)
					}
				})
			},
			update: function(e, t) {
				var n = e || m.call(this);
				return i(n).each(function() {
					var e = i(this);
					if (e.data(a)) {
						var n = e.data(a),
							r = n.opt,
							o = i("#mCSB_" + n.idx + "_container"),
							s = [i("#mCSB_" + n.idx + "_dragger_vertical"), i("#mCSB_" + n.idx + "_dragger_horizontal")];
						if (!o.length) return;
						n.tweenRunning && J(e), e.hasClass(p[3]) && e.removeClass(p[3]), e.hasClass(p[4]) && e.removeClass(p[4]), C.call(this), _.call(this), "y" === r.axis || r.advanced.autoExpandHorizontalScroll || o.css("width", w(o.children())), n.overflowed = j.call(this), I.call(this), r.autoDraggerLength && k.call(this), T.call(this), L.call(this);
						var l = [Math.abs(o[0].offsetTop), Math.abs(o[0].offsetLeft)];
						"x" !== r.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? N.call(this) : (Q(e, l[0].toString(), {
							dir: "y",
							dur: 0,
							overwrite: "none"
						}), n.contentReset.y = null) : (N.call(this), "y" === r.axis ? A.call(this) : "yx" === r.axis && n.overflowed[1] && Q(e, l[1].toString(), {
							dir: "x",
							dur: 0,
							overwrite: "none"
						}))), "y" !== r.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? N.call(this) : (Q(e, l[1].toString(), {
							dir: "x",
							dur: 0,
							overwrite: "none"
						}), n.contentReset.x = null) : (N.call(this), "x" === r.axis ? A.call(this) : "yx" === r.axis && n.overflowed[0] && Q(e, l[0].toString(), {
							dir: "y",
							dur: 0,
							overwrite: "none"
						}))), t && n && (2 === t && r.callbacks.onImageLoad && "function" == typeof r.callbacks.onImageLoad ? r.callbacks.onImageLoad.call(this) : 3 === t && r.callbacks.onSelectorChange && "function" == typeof r.callbacks.onSelectorChange ? r.callbacks.onSelectorChange.call(this) : r.callbacks.onUpdate && "function" == typeof r.callbacks.onUpdate && r.callbacks.onUpdate.call(this)), Y.call(this)
					}
				})
			},
			scrollTo: function(e, t) {
				if ("undefined" != typeof e && null != e) {
					var n = m.call(this);
					return i(n).each(function() {
						var n = i(this);
						if (n.data(a)) {
							var r = n.data(a),
								o = r.opt,
								s = {
									trigger: "external",
									scrollInertia: o.scrollInertia,
									scrollEasing: "mcsEaseInOut",
									moveDragger: !1,
									timeout: 60,
									callbacks: !0,
									onStart: !0,
									onUpdate: !0,
									onComplete: !0
								},
								l = i.extend(!0, {}, s, t),
								c = V.call(this, e),
								u = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
							c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), l.moveDragger && (c[0] *= r.scrollRatio.y, c[1] *= r.scrollRatio.x), l.dur = u, setTimeout(function() {
								null !== c[0] && "undefined" != typeof c[0] && "x" !== o.axis && r.overflowed[0] && (l.dir = "y", l.overwrite = "all", Q(n, c[0].toString(), l)), null !== c[1] && "undefined" != typeof c[1] && "y" !== o.axis && r.overflowed[1] && (l.dir = "x", l.overwrite = "none", Q(n, c[1].toString(), l))
							}, l.timeout)
						}
					})
				}
			},
			stop: function() {
				var e = m.call(this);
				return i(e).each(function() {
					var e = i(this);
					e.data(a) && J(e)
				})
			},
			disable: function(e) {
				var t = m.call(this);
				return i(t).each(function() {
					var t = i(this);
					if (t.data(a)) {
						t.data(a);
						Y.call(this, "remove"), A.call(this), e && N.call(this), I.call(this, !0), t.addClass(p[3])
					}
				})
			},
			destroy: function() {
				var e = m.call(this);
				return i(e).each(function() {
					var t = i(this);
					if (t.data(a)) {
						var n = t.data(a),
							r = n.opt,
							s = i("#mCSB_" + n.idx),
							l = i("#mCSB_" + n.idx + "_container"),
							c = i(".mCSB_" + n.idx + "_scrollbar");
						r.live && v(r.liveSelector || i(e).selector), Y.call(this, "remove"), A.call(this), N.call(this), t.removeData(a), te(this, "mcs"), c.remove(), l.find("img." + p[2]).removeClass(p[2]), s.replaceWith(l.contents()), t.removeClass(o + " _" + a + "_" + n.idx + " " + p[6] + " " + p[7] + " " + p[5] + " " + p[3]).addClass(p[4])
					}
				})
			}
		},
		m = function() {
			return "object" != typeof i(this) || i(this).length < 1 ? s : this
		},
		g = function(e) {
			var t = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
				n = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
				r = ["minimal", "minimal-dark"],
				o = ["minimal", "minimal-dark"],
				a = ["minimal", "minimal-dark"];
			e.autoDraggerLength = i.inArray(e.theme, t) > -1 ? !1 : e.autoDraggerLength, e.autoExpandScrollbar = i.inArray(e.theme, n) > -1 ? !1 : e.autoExpandScrollbar, e.scrollButtons.enable = i.inArray(e.theme, r) > -1 ? !1 : e.scrollButtons.enable, e.autoHideScrollbar = i.inArray(e.theme, o) > -1 ? !0 : e.autoHideScrollbar, e.scrollbarPosition = i.inArray(e.theme, a) > -1 ? "outside" : e.scrollbarPosition
		},
		v = function(e) {
			u[e] && (clearTimeout(u[e]), te(u, e))
		},
		y = function(e) {
			return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
		},
		x = function(e) {
			return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
		},
		b = function() {
			var e = i(this),
				t = e.data(a),
				n = t.opt,
				r = n.autoExpandScrollbar ? " " + p[1] + "_expand" : "",
				s = ["<div id='mCSB_" + t.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + t.idx + "_scrollbar mCS-" + n.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + p[12] + "'><div id='mCSB_" + t.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + t.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + t.idx + "_scrollbar mCS-" + n.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + p[12] + "'><div id='mCSB_" + t.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
				l = "yx" === n.axis ? "mCSB_vertical_horizontal" : "x" === n.axis ? "mCSB_horizontal" : "mCSB_vertical",
				c = "yx" === n.axis ? s[0] + s[1] : "x" === n.axis ? s[1] : s[0],
				u = "yx" === n.axis ? "<div id='mCSB_" + t.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
				d = n.autoHideScrollbar ? " " + p[6] : "",
				f = "x" !== n.axis && "rtl" === t.langDir ? " " + p[7] : "";
			n.setWidth && e.css("width", n.setWidth), n.setHeight && e.css("height", n.setHeight), n.setLeft = "y" !== n.axis && "rtl" === t.langDir ? "989999px" : n.setLeft, e.addClass(o + " _" + a + "_" + t.idx + d + f).wrapInner("<div id='mCSB_" + t.idx + "' class='mCustomScrollBox mCS-" + n.theme + " " + l + "'><div id='mCSB_" + t.idx + "_container' class='mCSB_container' style='position:relative; top:" + n.setTop + "; left:" + n.setLeft + ";' dir=" + t.langDir + " /></div>");
			var h = i("#mCSB_" + t.idx),
				m = i("#mCSB_" + t.idx + "_container");
			"y" === n.axis || n.advanced.autoExpandHorizontalScroll || m.css("width", w(m.children())), "outside" === n.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"), e.css("overflow", "visible"), h.addClass("mCSB_outside").after(c)) : (h.addClass("mCSB_inside").append(c), m.wrap(u)), S.call(this);
			var g = [i("#mCSB_" + t.idx + "_dragger_vertical"), i("#mCSB_" + t.idx + "_dragger_horizontal")];
			g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
		},
		w = function(e) {
			return Math.max.apply(Math, e.map(function() {
				return i(this).outerWidth(!0)
			}).get())
		},
		_ = function() {
			var e = i(this),
				t = e.data(a),
				n = t.opt,
				r = i("#mCSB_" + t.idx + "_container");
			n.advanced.autoExpandHorizontalScroll && "y" !== n.axis && r.css({
				position: "absolute",
				width: "auto"
			}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
				width: Math.ceil(r[0].getBoundingClientRect().right + .4) - Math.floor(r[0].getBoundingClientRect().left),
				position: "relative"
			}).unwrap()
		},
		S = function() {
			var e = i(this),
				t = e.data(a),
				n = t.opt,
				r = i(".mCSB_" + t.idx + "_scrollbar:first"),
				o = re(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
				s = ["<a href='#' class='" + p[13] + "' oncontextmenu='return false;' " + o + " />", "<a href='#' class='" + p[14] + "' oncontextmenu='return false;' " + o + " />", "<a href='#' class='" + p[15] + "' oncontextmenu='return false;' " + o + " />", "<a href='#' class='" + p[16] + "' oncontextmenu='return false;' " + o + " />"],
				l = ["x" === n.axis ? s[2] : s[0], "x" === n.axis ? s[3] : s[1], s[2], s[3]];
			n.scrollButtons.enable && r.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
		},
		C = function() {
			var e = i(this),
				t = e.data(a),
				n = i("#mCSB_" + t.idx),
				r = e.css("max-height") || "none",
				o = -1 !== r.indexOf("%"),
				s = e.css("box-sizing");
			if ("none" !== r) {
				var l = o ? e.parent().height() * parseInt(r) / 100 : parseInt(r);
				"border-box" === s && (l -= e.innerHeight() - e.height() + (e.outerHeight() - e.innerHeight())), n.css("max-height", Math.round(l))
			}
		},
		k = function() {
			var e = i(this),
				t = e.data(a),
				n = i("#mCSB_" + t.idx),
				r = i("#mCSB_" + t.idx + "_container"),
				o = [i("#mCSB_" + t.idx + "_dragger_vertical"), i("#mCSB_" + t.idx + "_dragger_horizontal")],
				s = [n.height() / r.outerHeight(!1), n.width() / r.outerWidth(!1)],
				l = [parseInt(o[0].css("min-height")), Math.round(s[0] * o[0].parent().height()), parseInt(o[1].css("min-width")), Math.round(s[1] * o[1].parent().width())],
				c = d && l[1] < l[0] ? l[0] : l[1],
				u = d && l[3] < l[2] ? l[2] : l[3];
			o[0].css({
				height: c,
				"max-height": o[0].parent().height() - 10
			}).find(".mCSB_dragger_bar").css({
				"line-height": l[0] + "px"
			}), o[1].css({
				width: u,
				"max-width": o[1].parent().width() - 10
			})
		},
		T = function() {
			var e = i(this),
				t = e.data(a),
				n = i("#mCSB_" + t.idx),
				r = i("#mCSB_" + t.idx + "_container"),
				o = [i("#mCSB_" + t.idx + "_dragger_vertical"), i("#mCSB_" + t.idx + "_dragger_horizontal")],
				s = [r.outerHeight(!1) - n.height(), r.outerWidth(!1) - n.width()],
				l = [s[0] / (o[0].parent().height() - o[0].height()), s[1] / (o[1].parent().width() - o[1].width())];
			t.scrollRatio = {
				y: l[0],
				x: l[1]
			}
		},
		E = function(e, t, n) {
			var i = n ? p[0] + "_expanded" : "",
				r = e.closest(".mCSB_scrollTools");
			"active" === t ? (e.toggleClass(p[0] + " " + i), r.toggleClass(p[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(p[0]), r.removeClass(p[1])) : (e.addClass(p[0]), r.addClass(p[1])))
		},
		j = function() {
			var e = i(this),
				t = e.data(a),
				n = i("#mCSB_" + t.idx),
				r = i("#mCSB_" + t.idx + "_container"),
				o = null == t.overflowed ? r.height() : r.outerHeight(!1),
				s = null == t.overflowed ? r.width() : r.outerWidth(!1);
			return [o > n.height(), s > n.width()]
		},
		N = function() {
			var e = i(this),
				t = e.data(a),
				n = t.opt,
				r = i("#mCSB_" + t.idx),
				o = i("#mCSB_" + t.idx + "_container"),
				s = [i("#mCSB_" + t.idx + "_dragger_vertical"), i("#mCSB_" + t.idx + "_dragger_horizontal")];
			if (J(e), ("x" !== n.axis && !t.overflowed[0] || "y" === n.axis && t.overflowed[0]) && (s[0].add(o).css("top", 0), Q(e, "_resetY")), "y" !== n.axis && !t.overflowed[1] || "x" === n.axis && t.overflowed[1]) {
				var l = dx = 0;
				"rtl" === t.langDir && (l = r.width() - o.outerWidth(!1), dx = Math.abs(l / t.scrollRatio.x)), o.css("left", l), s[1].css("left", dx), Q(e, "_resetX")
			}
		},
		L = function() {
			function e() {
				o = setTimeout(function() {
					i.event.special.mousewheel ? (clearTimeout(o), M.call(t[0])) : e()
				}, 100)
			}
			var t = i(this),
				n = t.data(a),
				r = n.opt;
			if (!n.bindEvents) {
				if (O.call(this), r.contentTouchScroll && D.call(this), B.call(this), r.mouseWheel.enable) {
					var o;
					e()
				}
				H.call(this), W.call(this), r.advanced.autoScrollOnFocus && F.call(this), r.scrollButtons.enable && z.call(this), r.keyboard.enable && $.call(this), n.bindEvents = !0
			}
		},
		A = function() {
			var e = i(this),
				t = e.data(a),
				n = t.opt,
				r = a + "_" + t.idx,
				o = ".mCSB_" + t.idx + "_scrollbar",
				s = i("#mCSB_" + t.idx + ",#mCSB_" + t.idx + "_container,#mCSB_" + t.idx + "_container_wrapper," + o + " ." + p[12] + ",#mCSB_" + t.idx + "_dragger_vertical,#mCSB_" + t.idx + "_dragger_horizontal," + o + ">a"),
				l = i("#mCSB_" + t.idx + "_container");
			n.advanced.releaseDraggableSelectors && s.add(i(n.advanced.releaseDraggableSelectors)), t.bindEvents && (i(document).unbind("." + r), s.each(function() {
				i(this).unbind("." + r)
			}), clearTimeout(e[0]._focusTimeout), te(e[0], "_focusTimeout"), clearTimeout(t.sequential.step), te(t.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), te(l[0], "onCompleteTimeout"), t.bindEvents = !1)
		},
		I = function(e) {
			var t = i(this),
				n = t.data(a),
				r = n.opt,
				o = i("#mCSB_" + n.idx + "_container_wrapper"),
				s = o.length ? o : i("#mCSB_" + n.idx + "_container"),
				l = [i("#mCSB_" + n.idx + "_scrollbar_vertical"), i("#mCSB_" + n.idx + "_scrollbar_horizontal")],
				c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
			"x" !== r.axis && (n.overflowed[0] && !e ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), s.removeClass(p[8] + " " + p[10])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[0].css("display", "none"), s.removeClass(p[10])) : (l[0].css("display", "none"), s.addClass(p[10])), s.addClass(p[8]))), "y" !== r.axis && (n.overflowed[1] && !e ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), s.removeClass(p[9] + " " + p[11])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[1].css("display", "none"), s.removeClass(p[11])) : (l[1].css("display", "none"), s.addClass(p[11])), s.addClass(p[9]))), n.overflowed[0] || n.overflowed[1] ? t.removeClass(p[5]) : t.addClass(p[5])
		},
		q = function(e) {
			var t = e.type;
			switch (t) {
			case "pointerdown":
			case "MSPointerDown":
			case "pointermove":
			case "MSPointerMove":
			case "pointerup":
			case "MSPointerUp":
				return e.target.ownerDocument !== document ? [e.originalEvent.screenY, e.originalEvent.screenX, !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
			case "touchstart":
			case "touchmove":
			case "touchend":
				var n = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
					i = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
				return e.target.ownerDocument !== document ? [n.screenY, n.screenX, i > 1] : [n.pageY, n.pageX, i > 1];
			default:
				return [e.pageY, e.pageX, !1]
			}
		},
		O = function() {
			function e(e) {
				var t = h.find("iframe");
				if (t.length) {
					var n = e ? "auto" : "none";
					t.css("pointer-events", n)
				}
			}
			function t(e, t, i, r) {
				if (h[0].idleTimer = c.scrollInertia < 233 ? 250 : 0, n.attr("id") === p[1]) var o = "x",
					a = (n[0].offsetLeft - t + r) * l.scrollRatio.x;
				else var o = "y",
					a = (n[0].offsetTop - e + i) * l.scrollRatio.y;
				Q(s, a.toString(), {
					dir: o,
					drag: !0
				})
			}
			var n, r, o, s = i(this),
				l = s.data(a),
				c = l.opt,
				u = a + "_" + l.idx,
				p = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
				h = i("#mCSB_" + l.idx + "_container"),
				m = i("#" + p[0] + ",#" + p[1]),
				g = c.advanced.releaseDraggableSelectors ? m.add(i(c.advanced.releaseDraggableSelectors)) : m;
			m.bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(t) {
				if (t.stopImmediatePropagation(), t.preventDefault(), ne(t)) {
					f = !0, d && (document.onselectstart = function() {
						return !1
					}), e(!1), J(s), n = i(this);
					var a = n.offset(),
						l = q(t)[0] - a.top,
						u = q(t)[1] - a.left,
						p = n.height() + a.top,
						h = n.width() + a.left;
					p > l && l > 0 && h > u && u > 0 && (r = l, o = u), E(n, "active", c.autoExpandScrollbar)
				}
			}).bind("touchmove." + u, function(e) {
				e.stopImmediatePropagation(), e.preventDefault();
				var i = n.offset(),
					a = q(e)[0] - i.top,
					s = q(e)[1] - i.left;
				t(r, o, a, s)
			}), i(document).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(e) {
				if (n) {
					var i = n.offset(),
						a = q(e)[0] - i.top,
						s = q(e)[1] - i.left;
					if (r === a) return;
					t(r, o, a, s)
				}
			}).add(g).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function(t) {
				n && (E(n, "active", c.autoExpandScrollbar), n = null), f = !1, d && (document.onselectstart = null), e(!0)
			})
		},
		D = function() {
			function e(e) {
				if (!ie(e) || f || q(e)[2]) return void(r = 0);
				r = 1, w = 0, _ = 0, S.removeClass("mCS_touch_action");
				var t = j.offset();
				c = q(e)[0] - t.top, u = q(e)[1] - t.left, D = [q(e)[0], q(e)[1]]
			}
			function t(e) {
				if (ie(e) && !f && !q(e)[2] && (e.stopImmediatePropagation(), !_ || w)) {
					m = K();
					var t = E.offset(),
						n = q(e)[0] - t.top,
						i = q(e)[1] - t.left,
						r = "mcsLinearOut";
					if (L.push(n), A.push(i), D[2] = Math.abs(q(e)[0] - D[0]), D[3] = Math.abs(q(e)[1] - D[1]), C.overflowed[0]) var o = N[0].parent().height() - N[0].height(),
						a = c - n > 0 && n - c > -(o * C.scrollRatio.y) && (2 * D[3] < D[2] || "yx" === k.axis);
					if (C.overflowed[1]) var s = N[1].parent().width() - N[1].width(),
						d = u - i > 0 && i - u > -(s * C.scrollRatio.x) && (2 * D[2] < D[3] || "yx" === k.axis);
					a || d ? (e.preventDefault(), w = 1) : (_ = 1, S.addClass("mCS_touch_action")), x = "yx" === k.axis ? [c - n, u - i] : "x" === k.axis ? [null, u - i] : [c - n, null], j[0].idleTimer = 250, C.overflowed[0] && l(x[0], I, r, "y", "all", !0), C.overflowed[1] && l(x[1], I, r, "x", O, !0)
				}
			}
			function n(e) {
				if (!ie(e) || f || q(e)[2]) return void(r = 0);
				r = 1, e.stopImmediatePropagation(), J(S), h = K();
				var t = E.offset();
				d = q(e)[0] - t.top, p = q(e)[1] - t.left, L = [], A = []
			}
			function o(e) {
				if (ie(e) && !f && !q(e)[2]) {
					e.stopImmediatePropagation(), w = 0, _ = 0, g = K();
					var t = E.offset(),
						n = q(e)[0] - t.top,
						i = q(e)[1] - t.left;
					if (!(g - m > 30)) {
						y = 1e3 / (g - h);
						var r = "mcsEaseOut",
							o = 2.5 > y,
							a = o ? [L[L.length - 2], A[A.length - 2]] : [0, 0];
						v = o ? [n - a[0], i - a[1]] : [n - d, i - p];
						var c = [Math.abs(v[0]), Math.abs(v[1])];
						y = o ? [Math.abs(v[0] / 4), Math.abs(v[1] / 4)] : [y, y];
						var u = [Math.abs(j[0].offsetTop) - v[0] * s(c[0] / y[0], y[0]), Math.abs(j[0].offsetLeft) - v[1] * s(c[1] / y[1], y[1])];
						x = "yx" === k.axis ? [u[0], u[1]] : "x" === k.axis ? [null, u[1]] : [u[0], null], b = [4 * c[0] + k.scrollInertia, 4 * c[1] + k.scrollInertia];
						var S = parseInt(k.contentTouchScroll) || 0;
						x[0] = c[0] > S ? x[0] : 0, x[1] = c[1] > S ? x[1] : 0, C.overflowed[0] && l(x[0], b[0], r, "y", O, !1), C.overflowed[1] && l(x[1], b[1], r, "x", O, !1)
					}
				}
			}
			function s(e, t) {
				var n = [1.5 * t, 2 * t, t / 1.5, t / 2];
				return e > 90 ? t > 4 ? n[0] : n[3] : e > 60 ? t > 3 ? n[3] : n[2] : e > 30 ? t > 8 ? n[1] : t > 6 ? n[0] : t > 4 ? t : n[2] : t > 8 ? t : n[3]
			}
			function l(e, t, n, i, r, o) {
				e && Q(S, e.toString(), {
					dur: t,
					scrollEasing: n,
					dir: i,
					overwrite: r,
					drag: o
				})
			}
			var c, u, d, p, h, m, g, v, y, x, b, w, _, S = i(this),
				C = S.data(a),
				k = C.opt,
				T = a + "_" + C.idx,
				E = i("#mCSB_" + C.idx),
				j = i("#mCSB_" + C.idx + "_container"),
				N = [i("#mCSB_" + C.idx + "_dragger_vertical"), i("#mCSB_" + C.idx + "_dragger_horizontal")],
				L = [],
				A = [],
				I = 0,
				O = "yx" === k.axis ? "none" : "all",
				D = [],
				B = j.find("iframe"),
				M = ["touchstart." + T + " pointerdown." + T + " MSPointerDown." + T, "touchmove." + T + " pointermove." + T + " MSPointerMove." + T, "touchend." + T + " pointerup." + T + " MSPointerUp." + T];
			j.bind(M[0], function(t) {
				e(t)
			}).bind(M[1], function(e) {
				t(e)
			}), E.bind(M[0], function(e) {
				n(e)
			}).bind(M[2], function(e) {
				o(e)
			}), B.length && B.each(function() {
				i(this).load(function() {
					R(this) && i(this.contentDocument || this.contentWindow.document).bind(M[0], function(t) {
						e(t), n(t)
					}).bind(M[1], function(e) {
						t(e)
					}).bind(M[2], function(e) {
						o(e)
					})
				})
			})
		},
		B = function() {
			function e() {
				return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
			}
			function t(e, t, i) {
				c.type = i && n ? "stepped" : "stepless", c.scrollAmount = 10, U(o, e, t, "mcsLinearOut", i ? 60 : null)
			}
			var n, o = i(this),
				s = o.data(a),
				l = s.opt,
				c = s.sequential,
				u = a + "_" + s.idx,
				d = i("#mCSB_" + s.idx + "_container"),
				p = d.parent();
			d.bind("mousedown." + u, function(e) {
				r || n || (n = 1, f = !0)
			}).add(document).bind("mousemove." + u, function(i) {
				if (!r && n && e()) {
					var o = d.offset(),
						a = q(i)[0] - o.top + d[0].offsetTop,
						u = q(i)[1] - o.left + d[0].offsetLeft;
					a > 0 && a < p.height() && u > 0 && u < p.width() ? c.step && t("off", null, "stepped") : ("x" !== l.axis && s.overflowed[0] && (0 > a ? t("on", 38) : a > p.height() && t("on", 40)), "y" !== l.axis && s.overflowed[1] && (0 > u ? t("on", 37) : u > p.width() && t("on", 39)))
				}
			}).bind("mouseup." + u, function(e) {
				r || (n && (n = 0, t("off", null)), f = !1)
			})
		},
		M = function() {
			function e(e, o) {
				if (J(t), !P(t, e.target)) {
					var a = "auto" !== r.mouseWheel.deltaFactor ? parseInt(r.mouseWheel.deltaFactor) : d && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100;
					if ("x" === r.axis || "x" === r.mouseWheel.axis) var c = "x",
						u = [Math.round(a * n.scrollRatio.x), parseInt(r.mouseWheel.scrollAmount)],
						f = "auto" !== r.mouseWheel.scrollAmount ? u[1] : u[0] >= s.width() ? .9 * s.width() : u[0],
						p = Math.abs(i("#mCSB_" + n.idx + "_container")[0].offsetLeft),
						h = l[1][0].offsetLeft,
						m = l[1].parent().width() - l[1].width(),
						g = e.deltaX || e.deltaY || o;
					else var c = "y",
						u = [Math.round(a * n.scrollRatio.y), parseInt(r.mouseWheel.scrollAmount)],
						f = "auto" !== r.mouseWheel.scrollAmount ? u[1] : u[0] >= s.height() ? .9 * s.height() : u[0],
						p = Math.abs(i("#mCSB_" + n.idx + "_container")[0].offsetTop),
						h = l[0][0].offsetTop,
						m = l[0].parent().height() - l[0].height(),
						g = e.deltaY || o;
					"y" === c && !n.overflowed[0] || "x" === c && !n.overflowed[1] || ((r.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (g = -g), r.mouseWheel.normalizeDelta && (g = 0 > g ? -1 : 1), (g > 0 && 0 !== h || 0 > g && h !== m || r.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()), Q(t, (p - g * f).toString(), {
						dir: c
					}))
				}
			}
			if (i(this).data(a)) {
				var t = i(this),
					n = t.data(a),
					r = n.opt,
					o = a + "_" + n.idx,
					s = i("#mCSB_" + n.idx),
					l = [i("#mCSB_" + n.idx + "_dragger_vertical"), i("#mCSB_" + n.idx + "_dragger_horizontal")],
					c = i("#mCSB_" + n.idx + "_container").find("iframe");
				c.length && c.each(function() {
					i(this).load(function() {
						R(this) && i(this.contentDocument || this.contentWindow.document).bind("mousewheel." + o, function(t, n) {
							e(t, n)
						})
					})
				}), s.bind("mousewheel." + o, function(t, n) {
					e(t, n)
				})
			}
		},
		R = function(e) {
			var t = null;
			try {
				var n = e.contentDocument || e.contentWindow.document;
				t = n.body.innerHTML
			} catch (i) {}
			return null !== t
		},
		P = function(e, t) {
			var n = t.nodeName.toLowerCase(),
				r = e.data(a).opt.mouseWheel.disableOver,
				o = ["select", "textarea"];
			return i.inArray(n, r) > -1 && !(i.inArray(n, o) > -1 && !i(t).is(":focus"))
		},
		H = function() {
			var e = i(this),
				t = e.data(a),
				n = a + "_" + t.idx,
				r = i("#mCSB_" + t.idx + "_container"),
				o = r.parent(),
				s = i(".mCSB_" + t.idx + "_scrollbar ." + p[12]);
			s.bind("touchstart." + n + " pointerdown." + n + " MSPointerDown." + n, function(e) {
				f = !0
			}).bind("touchend." + n + " pointerup." + n + " MSPointerUp." + n, function(e) {
				f = !1
			}).bind("click." + n, function(n) {
				if (i(n.target).hasClass(p[12]) || i(n.target).hasClass("mCSB_draggerRail")) {
					J(e);
					var a = i(this),
						s = a.find(".mCSB_dragger");
					if (a.parent(".mCSB_scrollTools_horizontal").length > 0) {
						if (!t.overflowed[1]) return;
						var l = "x",
							c = n.pageX > s.offset().left ? -1 : 1,
							u = Math.abs(r[0].offsetLeft) - c * (.9 * o.width())
					} else {
						if (!t.overflowed[0]) return;
						var l = "y",
							c = n.pageY > s.offset().top ? -1 : 1,
							u = Math.abs(r[0].offsetTop) - c * (.9 * o.height())
					}
					Q(e, u.toString(), {
						dir: l,
						scrollEasing: "mcsEaseInOut"
					})
				}
			})
		},
		F = function() {
			var e = i(this),
				t = e.data(a),
				n = t.opt,
				r = a + "_" + t.idx,
				o = i("#mCSB_" + t.idx + "_container"),
				s = o.parent();
			o.bind("focusin." + r, function(t) {
				var r = i(document.activeElement),
					a = o.find(".mCustomScrollBox").length,
					l = 0;
				r.is(n.advanced.autoScrollOnFocus) && (J(e), clearTimeout(e[0]._focusTimeout), e[0]._focusTimer = a ? (l + 17) * a : 0, e[0]._focusTimeout = setTimeout(function() {
					var t = [oe(r)[0], oe(r)[1]],
						i = [o[0].offsetTop, o[0].offsetLeft],
						a = [i[0] + t[0] >= 0 && i[0] + t[0] < s.height() - r.outerHeight(!1), i[1] + t[1] >= 0 && i[0] + t[1] < s.width() - r.outerWidth(!1)],
						c = "yx" !== n.axis || a[0] || a[1] ? "all" : "none";
					"x" === n.axis || a[0] || Q(e, t[0].toString(), {
						dir: "y",
						scrollEasing: "mcsEaseInOut",
						overwrite: c,
						dur: l
					}), "y" === n.axis || a[1] || Q(e, t[1].toString(), {
						dir: "x",
						scrollEasing: "mcsEaseInOut",
						overwrite: c,
						dur: l
					})
				}, e[0]._focusTimer))
			})
		},
		W = function() {
			var e = i(this),
				t = e.data(a),
				n = a + "_" + t.idx,
				r = i("#mCSB_" + t.idx + "_container").parent();
			r.bind("scroll." + n, function(e) {
				(0 !== r.scrollTop() || 0 !== r.scrollLeft()) && i(".mCSB_" + t.idx + "_scrollbar").css("visibility", "hidden")
			})
		},
		z = function() {
			var e = i(this),
				t = e.data(a),
				n = t.opt,
				r = t.sequential,
				o = a + "_" + t.idx,
				s = ".mCSB_" + t.idx + "_scrollbar",
				l = i(s + ">a");
			l.bind("mousedown." + o + " touchstart." + o + " pointerdown." + o + " MSPointerDown." + o + " mouseup." + o + " touchend." + o + " pointerup." + o + " MSPointerUp." + o + " mouseout." + o + " pointerout." + o + " MSPointerOut." + o + " click." + o, function(o) {
				function a(t, i) {
					r.scrollAmount = n.snapAmount || n.scrollButtons.scrollAmount, U(e, t, i)
				}
				if (o.preventDefault(), ne(o)) {
					var s = i(this).attr("class");
					switch (r.type = n.scrollButtons.scrollType, o.type) {
					case "mousedown":
					case "touchstart":
					case "pointerdown":
					case "MSPointerDown":
						if ("stepped" === r.type) return;
						f = !0, t.tweenRunning = !1, a("on", s);
						break;
					case "mouseup":
					case "touchend":
					case "pointerup":
					case "MSPointerUp":
					case "mouseout":
					case "pointerout":
					case "MSPointerOut":
						if ("stepped" === r.type) return;
						f = !1, r.dir && a("off", s);
						break;
					case "click":
						if ("stepped" !== r.type || t.tweenRunning) return;
						a("on", s)
					}
				}
			})
		},
		$ = function() {
			function e(e) {
				function a(e, i) {
					o.type = r.keyboard.scrollType, o.scrollAmount = r.snapAmount || r.keyboard.scrollAmount, "stepped" === o.type && n.tweenRunning || U(t, e, i)
				}
				switch (e.type) {
				case "blur":
					n.tweenRunning && o.dir && a("off", null);
					break;
				case "keydown":
				case "keyup":
					var s = e.keyCode ? e.keyCode : e.which,
						l = "on";
					if ("x" !== r.axis && (38 === s || 40 === s) || "y" !== r.axis && (37 === s || 39 === s)) {
						if ((38 === s || 40 === s) && !n.overflowed[0] || (37 === s || 39 === s) && !n.overflowed[1]) return;
						"keyup" === e.type && (l = "off"), i(document.activeElement).is(d) || (e.preventDefault(), e.stopImmediatePropagation(), a(l, s))
					} else if (33 === s || 34 === s) {
						if ((n.overflowed[0] || n.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type) {
							J(t);
							var f = 34 === s ? -1 : 1;
							if ("x" === r.axis || "yx" === r.axis && n.overflowed[1] && !n.overflowed[0]) var p = "x",
								h = Math.abs(c[0].offsetLeft) - f * (.9 * u.width());
							else var p = "y",
								h = Math.abs(c[0].offsetTop) - f * (.9 * u.height());
							Q(t, h.toString(), {
								dir: p,
								scrollEasing: "mcsEaseInOut"
							})
						}
					} else if ((35 === s || 36 === s) && !i(document.activeElement).is(d) && ((n.overflowed[0] || n.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type)) {
						if ("x" === r.axis || "yx" === r.axis && n.overflowed[1] && !n.overflowed[0]) var p = "x",
							h = 35 === s ? Math.abs(u.width() - c.outerWidth(!1)) : 0;
						else var p = "y",
							h = 35 === s ? Math.abs(u.height() - c.outerHeight(!1)) : 0;
						Q(t, h.toString(), {
							dir: p,
							scrollEasing: "mcsEaseInOut"
						})
					}
				}
			}
			var t = i(this),
				n = t.data(a),
				r = n.opt,
				o = n.sequential,
				s = a + "_" + n.idx,
				l = i("#mCSB_" + n.idx),
				c = i("#mCSB_" + n.idx + "_container"),
				u = c.parent(),
				d = "input,textarea,select,datalist,keygen,[contenteditable='true']",
				f = c.find("iframe"),
				p = ["blur." + s + " keydown." + s + " keyup." + s];
			f.length && f.each(function() {
				i(this).load(function() {
					R(this) && i(this.contentDocument || this.contentWindow.document).bind(p[0], function(t) {
						e(t)
					})
				})
			}), l.attr("tabindex", "0").bind(p[0], function(t) {
				e(t)
			})
		},
		U = function(e, t, n, r, o) {
			function s(t) {
				var n = "stepped" !== d.type,
					i = o ? o : t ? n ? m / 1.5 : g : 1e3 / 60,
					a = t ? n ? 7.5 : 40 : 2.5,
					l = [Math.abs(f[0].offsetTop), Math.abs(f[0].offsetLeft)],
					u = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
					p = "x" === d.dir[0] ? l[1] + d.dir[1] * (u[1] * a) : l[0] + d.dir[1] * (u[0] * a),
					h = "x" === d.dir[0] ? l[1] + d.dir[1] * parseInt(d.scrollAmount) : l[0] + d.dir[1] * parseInt(d.scrollAmount),
					v = "auto" !== d.scrollAmount ? h : p,
					y = r ? r : t ? n ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
					x = t ? !0 : !1;
				return t && 17 > i && (v = "x" === d.dir[0] ? l[1] : l[0]), Q(e, v.toString(), {
					dir: d.dir[0],
					scrollEasing: y,
					dur: i,
					onComplete: x
				}), t ? void(d.dir = !1) : (clearTimeout(d.step), void(d.step = setTimeout(function() {
					s()
				}, i)))
			}
			function l() {
				clearTimeout(d.step), te(d, "step"), J(e)
			}
			var c = e.data(a),
				u = c.opt,
				d = c.sequential,
				f = i("#mCSB_" + c.idx + "_container"),
				h = "stepped" === d.type ? !0 : !1,
				m = u.scrollInertia < 26 ? 26 : u.scrollInertia,
				g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
			switch (t) {
			case "on":
				if (d.dir = [n === p[16] || n === p[15] || 39 === n || 37 === n ? "x" : "y", n === p[13] || n === p[15] || 38 === n || 37 === n ? -1 : 1], J(e), re(n) && "stepped" === d.type) return;
				s(h);
				break;
			case "off":
				l(), (h || c.tweenRunning && d.dir) && s(!0)
			}
		},
		V = function(e) {
			var t = i(this).data(a).opt,
				n = [];
			return "function" == typeof e && (e = e()), e instanceof Array ? n = e.length > 1 ? [e[0], e[1]] : "x" === t.axis ? [null, e[0]] : [e[0], null] : (n[0] = e.y ? e.y : e.x || "x" === t.axis ? null : e, n[1] = e.x ? e.x : e.y || "y" === t.axis ? null : e), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
		},
		X = function(e, t) {
			if (null != e && "undefined" != typeof e) {
				var n = i(this),
					r = n.data(a),
					o = r.opt,
					s = i("#mCSB_" + r.idx + "_container"),
					l = s.parent(),
					c = typeof e;
				t || (t = "x" === o.axis ? "x" : "y");
				var u = "x" === t ? s.outerWidth(!1) : s.outerHeight(!1),
					d = "x" === t ? s[0].offsetLeft : s[0].offsetTop,
					f = "x" === t ? "left" : "top";
				switch (c) {
				case "function":
					return e();
				case "object":
					var p = e.jquery ? e : i(e);
					if (!p.length) return;
					return "x" === t ? oe(p)[1] : oe(p)[0];
				case "string":
				case "number":
					if (re(e)) return Math.abs(e);
					if (-1 !== e.indexOf("%")) return Math.abs(u * parseInt(e) / 100);
					if (-1 !== e.indexOf("-=")) return Math.abs(d - parseInt(e.split("-=")[1]));
					if (-1 !== e.indexOf("+=")) {
						var m = d + parseInt(e.split("+=")[1]);
						return m >= 0 ? 0 : Math.abs(m)
					}
					if (-1 !== e.indexOf("px") && re(e.split("px")[0])) return Math.abs(e.split("px")[0]);
					if ("top" === e || "left" === e) return 0;
					if ("bottom" === e) return Math.abs(l.height() - s.outerHeight(!1));
					if ("right" === e) return Math.abs(l.width() - s.outerWidth(!1));
					if ("first" === e || "last" === e) {
						var p = s.find(":" + e);
						return "x" === t ? oe(p)[1] : oe(p)[0]
					}
					return i(e).length ? "x" === t ? oe(i(e))[1] : oe(i(e))[0] : (s.css(f, e), void h.update.call(null, n[0]))
				}
			}
		},
		Y = function(e) {
			function t() {
				return clearTimeout(d[0].autoUpdate), 0 === l.parents("html").length ? void(l = null) : void(d[0].autoUpdate = setTimeout(function() {
					return u.advanced.updateOnSelectorChange && (f = o(), f !== b) ? (s(3), void(b = f)) : (u.advanced.updateOnContentResize && (m = [d.outerHeight(!1), d.outerWidth(!1), v.height(), v.width(), x()[0], x()[1]], (m[0] !== w[0] || m[1] !== w[1] || m[2] !== w[2] || m[3] !== w[3] || m[4] !== w[4] || m[5] !== w[5]) && (s(m[0] !== w[0] || m[1] !== w[1]), w = m)), u.advanced.updateOnImageLoad && (g = n(), g !== _ && (d.find("img").each(function() {
						r(this)
					}), _ = g)), void((u.advanced.updateOnSelectorChange || u.advanced.updateOnContentResize || u.advanced.updateOnImageLoad) && t()))
				}, u.advanced.autoUpdateTimeout))
			}
			function n() {
				var e = 0;
				return u.advanced.updateOnImageLoad && (e = d.find("img").length), e
			}
			function r(e) {
				function t(e, t) {
					return function() {
						return t.apply(e, arguments)
					}
				}
				function n() {
					this.onload = null, i(e).addClass(p[2]), s(2)
				}
				if (i(e).hasClass(p[2])) return void s();
				var r = new Image;
				r.onload = t(r, n), r.src = e.src
			}
			function o() {
				u.advanced.updateOnSelectorChange === !0 && (u.advanced.updateOnSelectorChange = "*");
				var e = 0,
					t = d.find(u.advanced.updateOnSelectorChange);
				return u.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
					e += i(this).height() + i(this).width()
				}), e
			}
			function s(e) {
				clearTimeout(d[0].autoUpdate), h.update.call(null, l[0], e)
			}
			var l = i(this),
				c = l.data(a),
				u = c.opt,
				d = i("#mCSB_" + c.idx + "_container");
			if (e || !u.advanced.autoUpdate) return clearTimeout(d[0].autoUpdate), void te(d[0], "autoUpdate");
			var f, m, g, v = d.parent(),
				y = [i("#mCSB_" + c.idx + "_scrollbar_vertical"), i("#mCSB_" + c.idx + "_scrollbar_horizontal")],
				x = function() {
					return [y[0].is(":visible") ? y[0].outerHeight(!0) : 0, y[1].is(":visible") ? y[1].outerWidth(!0) : 0]
				},
				b = o(),
				w = [d.outerHeight(!1), d.outerWidth(!1), v.height(), v.width(), x()[0], x()[1]],
				_ = n();
			t()
		},
		G = function(e, t, n) {
			return Math.round(e / t) * t - n
		},
		J = function(e) {
			var t = e.data(a),
				n = i("#mCSB_" + t.idx + "_container,#mCSB_" + t.idx + "_container_wrapper,#mCSB_" + t.idx + "_dragger_vertical,#mCSB_" + t.idx + "_dragger_horizontal");
			n.each(function() {
				ee.call(this)
			})
		},
		Q = function(e, t, n) {
			function r(e) {
				return l && c.callbacks[e] && "function" == typeof c.callbacks[e]
			}
			function o() {
				return [c.callbacks.alwaysTriggerOffsets || x >= b[0] + _, c.callbacks.alwaysTriggerOffsets || -S >= x]
			}
			function s() {
				var t = [p[0].offsetTop, p[0].offsetLeft],
					i = [v[0].offsetTop, v[0].offsetLeft],
					r = [p.outerHeight(!1), p.outerWidth(!1)],
					o = [f.height(), f.width()];
				e[0].mcs = {
					content: p,
					top: t[0],
					left: t[1],
					draggerTop: i[0],
					draggerLeft: i[1],
					topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(r[0]) - o[0])),
					leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(r[1]) - o[1])),
					direction: n.dir
				}
			}
			var l = e.data(a),
				c = l.opt,
				u = {
					trigger: "internal",
					dir: "y",
					scrollEasing: "mcsEaseOut",
					drag: !1,
					dur: c.scrollInertia,
					overwrite: "all",
					callbacks: !0,
					onStart: !0,
					onUpdate: !0,
					onComplete: !0
				},
				n = i.extend(u, n),
				d = [n.dur, n.drag ? 0 : n.dur],
				f = i("#mCSB_" + l.idx),
				p = i("#mCSB_" + l.idx + "_container"),
				h = p.parent(),
				m = c.callbacks.onTotalScrollOffset ? V.call(e, c.callbacks.onTotalScrollOffset) : [0, 0],
				g = c.callbacks.onTotalScrollBackOffset ? V.call(e, c.callbacks.onTotalScrollBackOffset) : [0, 0];
			if (l.trigger = n.trigger, (0 !== h.scrollTop() || 0 !== h.scrollLeft()) && (i(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), h.scrollTop(0).scrollLeft(0)), "_resetY" !== t || l.contentReset.y || (r("onOverflowYNone") && c.callbacks.onOverflowYNone.call(e[0]), l.contentReset.y = 1), "_resetX" !== t || l.contentReset.x || (r("onOverflowXNone") && c.callbacks.onOverflowXNone.call(e[0]), l.contentReset.x = 1), "_resetY" !== t && "_resetX" !== t) {
				switch (!l.contentReset.y && e[0].mcs || !l.overflowed[0] || (r("onOverflowY") && c.callbacks.onOverflowY.call(e[0]), l.contentReset.x = null), !l.contentReset.x && e[0].mcs || !l.overflowed[1] || (r("onOverflowX") && c.callbacks.onOverflowX.call(e[0]), l.contentReset.x = null), c.snapAmount && (t = G(t, c.snapAmount, c.snapOffset)), n.dir) {
				case "x":
					var v = i("#mCSB_" + l.idx + "_dragger_horizontal"),
						y = "left",
						x = p[0].offsetLeft,
						b = [f.width() - p.outerWidth(!1), v.parent().width() - v.width()],
						w = [t, 0 === t ? 0 : t / l.scrollRatio.x],
						_ = m[1],
						S = g[1],
						C = _ > 0 ? _ / l.scrollRatio.x : 0,
						k = S > 0 ? S / l.scrollRatio.x : 0;
					break;
				case "y":
					var v = i("#mCSB_" + l.idx + "_dragger_vertical"),
						y = "top",
						x = p[0].offsetTop,
						b = [f.height() - p.outerHeight(!1), v.parent().height() - v.height()],
						w = [t, 0 === t ? 0 : t / l.scrollRatio.y],
						_ = m[0],
						S = g[0],
						C = _ > 0 ? _ / l.scrollRatio.y : 0,
						k = S > 0 ? S / l.scrollRatio.y : 0
				}
				w[1] < 0 || 0 === w[0] && 0 === w[1] ? w = [0, 0] : w[1] >= b[1] ? w = [b[0], b[1]] : w[0] = -w[0], e[0].mcs || (s(), r("onInit") && c.callbacks.onInit.call(e[0])), clearTimeout(p[0].onCompleteTimeout), (l.tweenRunning || !(0 === x && w[0] >= 0 || x === b[0] && w[0] <= b[0])) && (Z(v[0], y, Math.round(w[1]), d[1], n.scrollEasing), Z(p[0], y, Math.round(w[0]), d[0], n.scrollEasing, n.overwrite, {
					onStart: function() {
						n.callbacks && n.onStart && !l.tweenRunning && (r("onScrollStart") && (s(), c.callbacks.onScrollStart.call(e[0])), l.tweenRunning = !0, E(v), l.cbOffsets = o())
					},
					onUpdate: function() {
						n.callbacks && n.onUpdate && r("whileScrolling") && (s(), c.callbacks.whileScrolling.call(e[0]))
					},
					onComplete: function() {
						if (n.callbacks && n.onComplete) {
							"yx" === c.axis && clearTimeout(p[0].onCompleteTimeout);
							var t = p[0].idleTimer || 0;
							p[0].onCompleteTimeout = setTimeout(function() {
								r("onScroll") && (s(), c.callbacks.onScroll.call(e[0])), r("onTotalScroll") && w[1] >= b[1] - C && l.cbOffsets[0] && (s(), c.callbacks.onTotalScroll.call(e[0])), r("onTotalScrollBack") && w[1] <= k && l.cbOffsets[1] && (s(), c.callbacks.onTotalScrollBack.call(e[0])), l.tweenRunning = !1, p[0].idleTimer = 0, E(v, "hide")
							}, t)
						}
					}
				}))
			}
		},
		Z = function(e, t, n, i, r, o, a) {
			function s() {
				w.stop || (y || h.call(), y = K() - v, l(), y >= w.time && (w.time = y > w.time ? y + f - (y - w.time) : y + f - 1, w.time < y + 1 && (w.time = y + 1)), w.time < i ? w.id = p(s) : g.call())
			}
			function l() {
				i > 0 ? (w.currVal = d(w.time, x, _, i, r), b[t] = Math.round(w.currVal) + "px") : b[t] = n + "px", m.call()
			}
			function c() {
				f = 1e3 / 60, w.time = y + f, p = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
					return l(), setTimeout(e, .01)
				}, w.id = p(s)
			}
			function u() {
				null != w.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(w.id) : clearTimeout(w.id), w.id = null)
			}
			function d(e, t, n, i, r) {
				switch (r) {
				case "linear":
				case "mcsLinear":
					return n * e / i + t;
				case "mcsLinearOut":
					return e /= i, e--, n * Math.sqrt(1 - e * e) + t;
				case "easeInOutSmooth":
					return e /= i / 2, 1 > e ? n / 2 * e * e + t : (e--, -n / 2 * (e * (e - 2) - 1) + t);
				case "easeInOutStrong":
					return e /= i / 2, 1 > e ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, n / 2 * (-Math.pow(2, -10 * e) + 2) + t);
				case "easeInOut":
				case "mcsEaseInOut":
					return e /= i / 2, 1 > e ? n / 2 * e * e * e + t : (e -= 2, n / 2 * (e * e * e + 2) + t);
				case "easeOutSmooth":
					return e /= i, e--, -n * (e * e * e * e - 1) + t;
				case "easeOutStrong":
					return n * (-Math.pow(2, -10 * e / i) + 1) + t;
				case "easeOut":
				case "mcsEaseOut":
				default:
					var o = (e /= i) * e,
						a = o * e;
					return t + n * (.499999999999997 * a * o + -2.5 * o * o + 5.5 * a + -6.5 * o + 4 * e)
				}
			}
			e._mTween || (e._mTween = {
				top: {},
				left: {}
			});
			var f, p, a = a || {},
				h = a.onStart ||
			function() {}, m = a.onUpdate ||
			function() {}, g = a.onComplete ||
			function() {}, v = K(), y = 0, x = e.offsetTop, b = e.style, w = e._mTween[t];
			"left" === t && (x = e.offsetLeft);
			var _ = n - x;
			w.stop = 0, "none" !== o && u(), c()
		},
		K = function() {
			return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
		},
		ee = function() {
			var e = this;
			e._mTween || (e._mTween = {
				top: {},
				left: {}
			});
			for (var t = ["top", "left"], n = 0; n < t.length; n++) {
				var i = t[n];
				e._mTween[i].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[i].id) : clearTimeout(e._mTween[i].id), e._mTween[i].id = null, e._mTween[i].stop = 1)
			}
		},
		te = function(e, t) {
			try {
				delete e[t]
			} catch (n) {
				e[t] = null
			}
		},
		ne = function(e) {
			return !(e.which && 1 !== e.which)
		},
		ie = function(e) {
			var t = e.originalEvent.pointerType;
			return !(t && "touch" !== t && 2 !== t)
		},
		re = function(e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		oe = function(e) {
			var t = e.parents(".mCSB_container");
			return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
		};
	i.fn[o] = function(e) {
		return h[e] ? h[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void i.error("Method " + e + " does not exist") : h.init.apply(this, arguments)
	}, i[o] = function(e) {
		return h[e] ? h[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void i.error("Method " + e + " does not exist") : h.init.apply(this, arguments)
	}, i[o].defaults = l, window[o] = !0, i(window).load(function() {
		i(s)[o](), i.extend(i.expr[":"], {
			mcsInView: i.expr[":"].mcsInView ||
			function(e) {
				var t, n, r = i(e),
					o = r.parents(".mCSB_container");
				if (o.length) return t = o.parent(), n = [o[0].offsetTop, o[0].offsetLeft], n[0] + oe(r)[0] >= 0 && n[0] + oe(r)[0] < t.height() - r.outerHeight(!1) && n[1] + oe(r)[1] >= 0 && n[1] + oe(r)[1] < t.width() - r.outerWidth(!1)
			},
			mcsOverflow: i.expr[":"].mcsOverflow ||
			function(e) {
				var t = i(e).data(a);
				if (t) return t.overflowed[0] || t.overflowed[1]
			}
		})
	})
});
define69eea4("/src/scripts/utils/kDate", function() {
	var KDate = function() {};
	KDate.template = {
		"-": "y%-M%-d%",
		"-0": "y%-M%-d%"
	};
	var isString = function(e) {
			return "[object String]" === Object.prototype.toString.call(e)
		},
		i18n = {
			months: {
				num: {
					0: "1",
					1: "2",
					2: "3",
					3: "4",
					4: "5",
					5: "6",
					6: "7",
					7: "8",
					8: "9",
					9: "10",
					10: "11",
					11: "12"
				},
				en: {
					0: "January",
					1: "February",
					2: "March",
					3: "April",
					4: "May",
					5: "June",
					6: "July",
					7: "August",
					8: "September",
					9: "October",
					10: "November",
					11: "December"
				},
				ch: {
					0: "ä¸€æœˆ",
					1: "äºŒæœˆ",
					2: "ä¸‰æœˆ",
					3: "å››æœˆ",
					4: "äº”æœˆ",
					5: "å…­æœˆ",
					6: "ä¸ƒæœˆ",
					7: "å…«æœˆ",
					8: "ä¹æœˆ",
					9: "åæœˆ",
					10: "åä¸€æœˆ",
					11: "åäºŒæœˆ"
				}
			},
			weeks: {
				num: {
					0: "7",
					1: "1",
					2: "2",
					3: "3",
					4: "4",
					5: "5",
					6: "6"
				},
				en: {
					0: "Sunday",
					1: "Monday",
					2: "Tuesday",
					3: "Wednesday",
					4: "Thursday",
					5: "Friday",
					6: "Saturday"
				},
				ch: {
					0: "å‘¨æ—¥",
					1: "å‘¨ä¸€",
					2: "å‘¨äºŒ",
					3: "å‘¨ä¸‰",
					4: "å‘¨å››",
					5: "å‘¨äº”",
					6: "å‘¨å…­"
				}
			}
		},
		createDateInstance = function() {
			var date = null;
			if (arguments.length > 1 || 0 === arguments.length) date = eval("new Date(" + $.makeArray(arguments).join(",") + ")");
			else if (1 === arguments.length && isString(arguments[0])) date = Date.parse ? new Date(arguments[0].replace(/\d+(\s+)\d+/, function(e, t) {
				return e.replace(t, "T")
			})) : new Date(arguments[0].replace(/\-|\-0/g, "/"));
			else if ("number" == typeof arguments[0]) date = new Date(arguments[0]);
			else {
				if (!("object" == typeof arguments[0] && arguments[0] instanceof Date)) throw Error("å‚æ•°é”™è¯¯ï¼Œä¸èƒ½åˆ›å»º KDate å¯¹è±¡");
				date = arguments[0]
			}
			return date
		},
		createKDateInstance = function() {
			var e = new KDate;
			return e.date = createDateInstance.apply(void 0, arguments), e
		},
		fullStr = function(e) {
			return parseInt(e, 10) < 10 ? "0" + e : e + ""
		};
	return KDate.prototype = {
		constructor: KDate,
		create: function(e, t, n) {
			return new Date(this.date.getFullYear() + e, this.date.getMonth() + t, this.date.getDate() + n)
		},
		getDate: function(e, t, n) {
			return this.date = this.create(e, t, n), this
		},
		getNextDay: function() {
			return this.getDate(0, 0, 1)
		},
		getPreDay: function() {
			return this.getDate(0, 0, -1)
		},
		jumpTo: function(e, t, n) {
			return this.date = this.create(e, t, n), this.date
		},
		jump: function(e, t, n) {
			return createKDateInstance(this.create(e, t, n))
		},
		nextDay: function() {
			return this.jump(0, 0, 1)
		},
		preDay: function() {
			return this.jump(0, 0, -1)
		},
		inSameMonthWith: function(e) {
			return this.date.getMonth() === e.date.getMonth()
		},
		earlyThan: function(e) {
			return this.date < e.date
		},
		isBetween: function(e, t) {
			return e.date <= this.date && this.date <= t.date
		},
		getWeekFirstDate: function(e) {
			return this.create(0, 0, -this.date.getDay() + {
				ch: 1,
				en: 0
			}[e || "en"])
		},
		getWeekLastDate: function(e) {
			return this.create(0, 0, -this.date.getDay() + {
				ch: 1,
				en: 0
			}[e || "en"] + 6)
		},
		equals: function(e) {
			return this.toString("-") === e.toString("-")
		},
		internationalization: function(e, t, n) {
			var i = i18n;
			return "string" != typeof t && (i = t), i[e][t][n]
		},
		format: function(e, t) {
			var n = this.date,
				i = n.getFullYear(),
				r = n.getFullYear(),
				o = this.internationalization("months", t || "num", n.getMonth()),
				a = n.getDate(),
				s = n.getHours(),
				l = n.getMinutes(),
				c = n.getSeconds(),
				u = this.internationalization("weeks", t || "num", n.getDay());
			return e = e.replace(/yyyy/g, i), e = e.replace(/yyy/g, r), e = e.replace(/yy/g, i % 100), (void 0 === t || "num" === t) && (e = e.replace(/MM/g, fullStr(o)), e = e.replace(/dd/g, fullStr(a)), e = e.replace(/hh/g, fullStr(s)), e = e.replace(/mm/g, fullStr(l)), e = e.replace(/ss/g, fullStr(c))), e = e.replace(/MM|M/g, o), e = e.replace(/dd|d/g, a), e = e.replace(/hh|h/g, s), e = e.replace(/mm|m/g, l), e = e.replace(/ss|s/g, c), e = e.replace(/w/g, u)
		}
	}, createKDateInstance
});
define69eea4("/output/highlights-list/highlights-list", function(require, exports, module) {
	var tpHelper = (require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper"));
	require("/src/scripts/utils/kDate");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data;
			_data = ("undefined" != typeof ___kkit___ ? ___kkit___.tph : tpHelper).mixin(_data, {
				getDuration: function(e) {
					var t = e.split(":");
					return t[1] + ":" + t[2]
				}
			});
			var htmlCode = "";
			with(_data || {}) {
				htmlCode += '';
				for (var i = 0; i < list.length; i++) htmlCode += '\n<div data-vid="', htmlCode += list[i].vid, htmlCode += '" class="videoPlayBottomRightBd boss', htmlCode += i === list.length - 1 ? " last-video" : "", htmlCode += '"\n     data-action="é›†é”¦è§†é¢‘" id="highlightsList-', htmlCode += i, htmlCode += '">\n    <div class="current_arrow"></div>\n    <div class="videoHuiguImg">\n        <span class="duration">', htmlCode += getDuration(list[i].duration), htmlCode += '</span>\n        <a title="', htmlCode += list[i].title, htmlCode += '">', "" === list[i].pic ? htmlCode += '\n            <img class="highlights-cover" src="http://mat1.gtimg.com/sports/kbsweb/statics/undefined">' : (htmlCode += '\n            <img class="highlights-cover" src="', htmlCode += list[i].pic, htmlCode += '">'), htmlCode += '\n        </a>\n    </div>\n    <div class="videoHuiguTxt">\n        <dl>\n            <dt><a title="', htmlCode += list[i].title, htmlCode += '">', htmlCode += list[i].title, htmlCode += '</a></dt>\n            <dd><span class="zixunVico"></span>æ’­æ”¾ï¼š', htmlCode += list[i].view, htmlCode += "</dd>\n        </dl>\n    </div>\n</div>"
			}
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/pre/highlights", function(e, t, n) {
	var i, r, o = e("/src/scripts/ui/global"),
		a = (e("/src/scripts/utils/utils"), e("/src/scripts/utils/player")),
		s = e("/src/scripts/ui/account/vip"),
		l = o.getParams(),
		c = l.mid,
		u = l.liveType,
		d = l.liveDebug;
	e("/lib/jquery.mCustomScrollbar");
	var f = function(e) {
			e && "1" === e.vip ? ($(".pre-openvip").hide(), $(".pre-vip-area").addClass("single-pre-vip-area"), $(".pre-album-single").removeClass("hidden"), $(".pre-viptip").html("æœ¬åœºæ¯”èµ›æ˜¯ä»˜è´¹æ¯”èµ›ï¼Œæ‚¨å¯å…è´¹è§‚çœ‹")) : ($(".pre-openvip").show(), $(".pre-vip-area").removeClass("single-pre-vip-area"), $(".pre-album-single").removeClass("hidden"), $(".pre-viptip").html("æœ¬åœºæ¯”èµ›æ˜¯ä»˜è´¹æ¯”èµ›ï¼Œå¼€é€šä¼šå‘˜å…è´¹è§‚çœ‹"))
		},
		p = function(t) {
			t && "1" === t.vip ? ($(".pre-album-list").addClass("higher-area"), $(".pre-vip-area").addClass("multi-pre-vip-area"), $(".pre-viptip").html("æœ¬åœºæ¯”èµ›æ˜¯ä»˜è´¹æ¯”èµ›ï¼Œæ‚¨å¯å…è´¹è§‚çœ‹"), $(".pre-openvip").hide()) : ($(".pre-album-list").removeClass("higher-area"), $(".pre-vip-area").removeClass("multi-pre-vip-area"), $(".pre-viptip").html("æœ¬åœºæ¯”èµ›æ˜¯ä»˜è´¹æ¯”èµ›ï¼Œå¼€é€šä¼šå‘˜å…è´¹è§‚çœ‹"), $(".pre-openvip").show()), i = $(".highlights-current").length > 0 && $(".highlights-current").attr("id") ? $(".highlights-current").attr("id").split("-")[1] : 0, $(".non-live-box .pre-highlights-scroll-area").html(e("/output/highlights-list/highlights-list").render({
				list: r.data.totalList
			})), $("#highlightsList-" + i).addClass("highlights-current"), e("/output/highlights-list/highlights-list").init(), $(".non-live-box .pre-highlights-scroll-area").parents(".album-container").removeClass("hidden"), $(".pre-album-list").removeClass("hidden"), $(".live-highlights").show(), setTimeout(function() {
				$(".live-highlights").mCustomScrollbar("update")
			}, 100)
		};
	ke("player").on("playNext", function(e) {
		h($(".highlights-current").attr("id"));
		try {
			e.ongetnext = function() {
				var e = $(".highlights-current").next(),
					t = e.data("vid");
				$(".highlights-current").removeClass("highlights-current"), e.addClass("highlights-current"), t && a.initVideo({
					vid: t,
					width: $("#album-screen").width(),
					height: $("#album-screen").height(),
					modId: "album-screen",
					banRecommend: e.hasClass("last-video") ? !1 : !0
				})
			}, e.onplaying = function(e) {
				var t = $(".pre-highlights-scroll-area .videoPlayBottomRightBd[data-vid=" + e + "]");
				t.addClass("highlights-current")
			}
		} catch (t) {}
	}), ke("player").on("replay", function(e, t) {
		try {
			e.ongetnext = function() {
				t && a.initVideo({
					vid: t,
					width: $("#album-screen").width(),
					height: $("#album-screen").height(),
					modId: "album-screen",
					singleAutoReplay: !0
				})
			}
		} catch (n) {}
	});
	var h = function(e) {
			var t = e.split("-")[1],
				n = "#highlightsList-" + (t - 1);
			$(".live-highlights").mCustomScrollbar("scrollTo", n)
		};
	return $(".pre-album-list .live-highlights").on("click", ".videoPlayBottomRightBd", function() {
		a.initVideo({
			vid: $(this).data("vid"),
			width: $("#album-screen").width(),
			height: $("#album-screen").height(),
			modId: "album-screen",
			banRecommend: $(this).hasClass("last-video") ? !1 : !0
		}), h(this.id), $(".highlights-current").removeClass("highlights-current"), $(this).addClass("highlights-current")
	}), {
		init: function() {
			d && u === o.liveType.PLAY_BY_PLAY && (matchInfo.isPay = "0"), $.ajax({
				url: window.GAME_SERVER + "/kbs/matchVideo",
				dataType: "jsonp",
				jsonpCallback: "jsonpPreHightlights",
				data: {
					mid: c
				}
			}).done(function(t) {
				0 === t.code && (r = t, "1" !== matchInfo.isPay ? 1 === t.data.totalList.length ? ($(".album-list-container").addClass("hidden"), $("#album-screen").addClass("wider-screen")) : ($(".pre-album-list").addClass("highest-area"), $(".pre-vip-area").addClass("hidden"), $(".videoPlayBottomRightBd").removeClass("highlights-current"), $(".non-live-box .pre-highlights-scroll-area").html(e("/output/highlights-list/highlights-list").render({
					list: t.data.totalList
				})), $(".videoPlayBottomRightBd:first").addClass("highlights-current"), e("/output/highlights-list/highlights-list").init(), $(".non-live-box .pre-highlights-scroll-area").parents(".album-container").removeClass("hidden"), $(".pre-album-list").removeClass("hidden"), $(".live-highlights").show(), setTimeout(function() {
					$(".live-highlights").mCustomScrollbar("update")
				}, 100)) : 1 === t.data.totalList.length ? s.isVip(f) : s.isVip(p), a.initVideo({
					vid: r.data.totalList[0].vid,
					width: $("#album-screen").width(),
					height: $("#album-screen").height(),
					modId: "album-screen",
					singleAutoReplay: 1 === r.data.totalList.length ? !0 : !1,
					banRecommend: !0
				}), $(".pre-video-area").removeClass("hidden"), $(".album-container").removeClass("hidden"))
			}), $(".live-highlights").mCustomScrollbar({
				theme: "minimal-dark",
				advanced: {
					autoUpdate: !1
				}
			})
		},
		refresh: function() {
			r && "1" === matchInfo.isPay && (1 === r.data.totalList.length ? s.isVip(f) : s.isVip(p))
		}
	}
});
define69eea4("/output/support-bar/support-bar", function(require, exports, module) {
	var tpHelper = require("/lib/tpHelper");
	require("/src/scripts/ui/global");
	module.exports = {
		init: function() {
			ke("support").on("refresh", function(e, t) {
				var e = parseInt(e, 10),
					t = parseInt(t, 10),
					n = e + t === 0 ? 50 : e / (e + t) * 100;
				n = 10 > n ? 10 : n > 90 ? 90 : n;
				var i = n,
					r = 100 - n;
				$(".support-bar.left").css("right", r + "%"), $(".support-bar.right").css("left", i + "%")
			})
		},
		render: function(data) {
			var _data = data;
			_data = ("undefined" != typeof ___kkit___ ? ___kkit___.tph : tpHelper).mixin(_data, {
				getSupportPercent: function(e, t) {
					var e = parseInt(e, 10),
						t = parseInt(t, 10),
						n = e + t === 0 ? 50 : e / (e + t) * 100;
					return n = 10 > n ? 10 : n > 90 ? 90 : n, {
						left: n,
						right: 100 - n
					}
				}
			});
			var htmlCode = "";
			with(_data || {}) {
				htmlCode += '';
				var percent = getSupportPercent(leftSupport, rightSupport);
				htmlCode += '\n<div class="support-bar left" style="right: ', htmlCode += percent.right, htmlCode += '%">\n    <img src="http://mat1.gtimg.com/sports/kbsweb/statics/arrow_49f882.png">\n</div>\n<div class="support-bar right" style="left: ', htmlCode += percent.left, htmlCode += '%"></div>'
			}
			return htmlCode
		}
	}
});
define69eea4("/output/game-head/game-head", function(require, exports, module) {
	var tpHelper = require("/lib/tpHelper"),
		_g = require("/src/scripts/ui/global"),
		qqlogin = require("/src/scripts/utils/qqlogin");
	require("/lib/jquery.cookie");
	var boss = require("/src/scripts/utils/boss");
	module.exports = {
		init: function() {
			var e = function(e) {
					if ($(".support-btn").removeClass("disabled").removeClass("clicked"), e) {
						var t = $(".support-btn." + e);
						$(".support-btn").addClass("disabled").attr("title", ""), t.removeClass("disabled").addClass("clicked").attr("title", "å·²æ”¯æŒ")
					}
				},
				t = function(e) {
					e = "left" === e ? "1" : "2", $.ajax({
						url: window.GAME_SERVER + "/kbs/teamSupport",
						dataType: "jsonp",
						jsonpCallback: "support",
						data: {
							mid: i,
							type: e
						}
					})
				},
				n = function() {
					var t = $.cookie(_g.getUin() + i + "supportInfo");
					t || (t = ""), window.supportInfo = t, ke("support").fire("support", t), e(t)
				},
				i = _g.getParams().mid;
			$(".support-btn").on("click", function() {
				if (!$(this).hasClass("disabled") && !$(this).hasClass("clicked")) {
					var n = $(this).data("type");
					e(n), ke("support").fire("support", n, $(".badge." + n).attr("src"));
					var r = $(this).next(),
						o = r.data("num") + 1;
					r.data("num", o), r.text(o);
					var a = $(".thumb-container span");
					$.cookie(_g.getUin() + i + "supportInfo", n), t(n), ke("support").fire("refresh", a.eq(0).data("num"), a.eq(1).data("num"))
				}
			}), $(".game-head i.clock").on("click", function() {
				var e;
				e = $(this).hasClass("actived") ? "cancel" : "attend", boss.triggerEventReport({
					action: "cancel" === e ? "å–æ¶ˆé¢„çº¦" : "é¢„çº¦"
				}), qqlogin.needLogin().then(function() {
					$.ajax({
						url: window.GAME_SERVER + "/kbs/attend",
						dataType: "jsonp",
						jsonpCallback: "attendGameCallback",
						data: {
							mid: i,
							type: e
						}
					}).done(function(t) {
						0 === t.code && ("cancel" === e ? $(".game-head i.clock").removeClass("actived") : $(".game-head i.clock").addClass("actived"))
					})
				})
			}), n(), ke("login").on("loginSuccess", n), ke("attend").on("attended", function() {
				$(".game-head i.clock").addClass("actived")
			}), ke("attend").on("notAttend", function() {
				$(".game-head i.clock").removeClass("actived")
			})
		},
		render: function(data) {
			var _data = data;
			_data = ("undefined" != typeof ___kkit___ ? ___kkit___.tph : tpHelper).mixin(_data, {
				getLiveTypeText: function(e, t) {
					var n = '<span class="play-type">';
					switch (t && (n = '<span class="play-type orderable">'), e) {
					case _g.liveType.NONE:
						return "";
					case _g.liveType.PLAY_BY_PLAY:
						return n + "å›¾æ–‡ç›´æ’­</span>";
					case _g.liveType.AUDIO:
						return n + "è¯­éŸ³ç›´æ’­</span>";
					case _g.liveType.VIDEO:
						return n + "è§†é¢‘ç›´æ’­</span>";
					case _g.liveType.ALBUM:
						return n + "è§†é¢‘é›†é”¦</span>";
					default:
						return ""
					}
				}
			});
			var htmlCode = "";
			with(_data || {}) {
				htmlCode += '';
				var matchInfo = gameData.matchInfo;
				htmlCode += '\n<div class="game-head">', matchInfo.matchType === _g.gameType.EVENT ? (htmlCode += "\n        <h1>", ("1" === gameData.ifHasVideo || matchInfo.livePeriod === _g.livePeriod.IN) && (htmlCode += matchInfo.title, matchInfo.livePeriod === _g.livePeriod.PRE && (htmlCode += "\n                    <span>", htmlCode += matchInfo.startTime.substr(0, 16), htmlCode += "</span>")), matchInfo.livePeriod === _g.livePeriod.PRE && (htmlCode += '\n                <i class="clock clock-event"></i>'), htmlCode += "\n        </h1>") : (htmlCode += '\n        <div class="thumb-container pull-left">\n            <i class="support-btn left" data-type="left" title="æ”¯æŒä¸€ä¸‹"></i>\n            <span data-num="', htmlCode += gameData.leftSupport, htmlCode += '">', htmlCode += gameData.leftSupport, htmlCode += "</span>\n        </div>", "1" === matchInfo.leftHasUrl ? (htmlCode += '\n            <a href="/kbsweb/teams.htm?tid=', htmlCode += matchInfo.leftId, htmlCode += "&cid=", htmlCode += gameData.competitionId, htmlCode += '" target="_blank">\n                <div class="left badge pull-left">\n                    <img class="badge left" src="', htmlCode += matchInfo.leftBadge, htmlCode += '">\n                </div>\n                <div class="left name pull-left">', htmlCode += matchInfo.leftName, htmlCode += "</div>\n            </a>") : (htmlCode += '\n            <div class="left badge pull-left">\n                <img class="badge left" src="', htmlCode += matchInfo.leftBadge, htmlCode += '">\n            </div>\n            <div class="left name pull-left">', htmlCode += matchInfo.leftName, htmlCode += "</div>"), htmlCode += '\n        <div class="goal', htmlCode += "1" === gameData.isPay && matchInfo.livePeriod === _g.livePeriod.IN && matchInfo.liveType === _g.liveType.VIDEO ? " is-pay" : "", htmlCode += '">', matchInfo.livePeriod === _g.livePeriod.END || matchInfo.liveType !== _g.liveType.VIDEO && matchInfo.livePeriod !== _g.livePeriod.PRE ? (htmlCode += matchInfo.leftGoal, htmlCode += "-", htmlCode += matchInfo.rightGoal) : (matchInfo.livePeriod === _g.livePeriod.IN && matchInfo.liveType === _g.liveType.VIDEO || matchInfo.livePeriod === _g.livePeriod.PRE) && (htmlCode += '\n                <span class="start-time">', htmlCode += matchInfo.startTime.substr(0, 16), htmlCode += "</span>"), matchInfo.livePeriod === _g.livePeriod.PRE && (htmlCode += '\n                <i class="clock"></i>'), matchInfo.livePeriod === _g.livePeriod.IN && "1" === gameData.isPay && matchInfo.liveType === _g.liveType.VIDEO && (htmlCode += '\n                <i class="vip"><img src="http://mat1.gtimg.com/sports/kbsweb/statics/vip_3bb799.png">ä½“è‚²ä¼šå‘˜ä¸“äº«</i>'), htmlCode += '\n        </div>\n        <div class="thumb-container pull-right">\n            <i class="support-btn right" data-type="right" title="æ”¯æŒä¸€ä¸‹"></i>\n            <span data-num="', htmlCode += gameData.rightSupport, htmlCode += '">', htmlCode += gameData.rightSupport, htmlCode += "</span>\n        </div>", "1" === matchInfo.rightHasUrl ? (htmlCode += '\n            <a href="http://sports.qq.com/kbsweb/teams.htm?tid=', htmlCode += matchInfo.rightId, htmlCode += "&cid=", htmlCode += gameData.competitionId, htmlCode += '" target="_blank">\n                <div class="right badge pull-right">\n                    <img class="badge right" src="', htmlCode += matchInfo.rightBadge, htmlCode += '">\n                </div>\n                <div class="right name pull-right">', htmlCode += matchInfo.rightName, htmlCode += "</div>\n            </a>") : (htmlCode += '\n            <div class="right badge pull-right">\n                <img class="badge right" src="', htmlCode += matchInfo.rightBadge, htmlCode += '">\n            </div>\n            <div class="right name pull-right">', htmlCode += matchInfo.rightName, htmlCode += "</div>")), htmlCode += "\n</div>"
			}
			return htmlCode
		}
	}
});
define69eea4("/output/pre-game-top/pre-game-top", function(require, exports, module) {
	var _g = (require("/lib/jsonselect"), require("/src/scripts/ui/global")),
		utils = require("/src/scripts/utils/utils"),
		qqlogin = (require("/lib/tpHelper"), require("/src/scripts/ui/game/vip/miniPay"), require("/src/scripts/utils/qqlogin"));
	require("/lib/kEvent");
	var vip = require("/src/scripts/ui/account/vip"),
		openVipStatus = !1,
		fetchVipStatus = function(e) {
			e && "1" === e.vip ? ($(".viptip-area").hide(), $(".isviptip-area").show()) : ($(".viptip-area").show(), $(".isviptip-area").hide(), openVipStatus && (qqlogin.needLogin(!0).then(function() {
				require("/src/scripts/ui/game/vip/miniPay").showPay({
					aid: _g.remark({
						refer: 104,
						page: 1
					})
				})
			}), openVipStatus = !1))
		},
		feachVipStatusInterval = utils.iInterval(function() {
			vip.isVip(fetchVipStatus)
		}, 6e4);
	module.exports = {
		init: function() {
			$(".team-title").on("click", "#game-top-openvip", function() {
				qqlogin.isLogin(function(e) {
					e ? qqlogin.needLogin(!0).then(function() {
						require("/src/scripts/ui/game/vip/miniPay").showPay({
							aid: _g.remark({
								refer: 104,
								page: 1
							})
						})
					}) : (openVipStatus = !0, qqlogin.needLogin(), $("#login #close").on("click", function() {
						openVipStatus = !1
					}))
				})
			}), qqlogin.isLogin(function(e) {
				e ? (vip.isVip(fetchVipStatus), feachVipStatusInterval.start()) : setTimeout(function() {
					$(".viptip-area").show(), $(".isviptip-area").hide()
				}, 0)
			})
		},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) {
				htmlCode += '\n<div class="pre-game-top">';
				var data = gameData.matchInfo;
				if (data) {
					htmlCode += '\n        <div class="team-title">\n            <span>', htmlCode += data.matchDesc, data.matchType != _g.gameType.EVENT && (htmlCode += "\n                    -", htmlCode += data.leftName, htmlCode += "vs", htmlCode += data.rightName), htmlCode += "\n            </span>", gameData.isPay && "0" !== gameData.isPay && matchInfo.liveType === _g.liveType.VIDEO && (htmlCode += '\n                <p class="viptip-area">\n                    æœ¬åœºæ˜¯ä»˜è´¹æ¯”èµ›ï¼Œå¼€é€šä¼šå‘˜å…è´¹è§‚çœ‹<a id="game-top-openvip" href="javascript:void(0);" class="current boss" data-action="å¼€é€šä¼šå‘˜">å¼€é€šä¼šå‘˜</a>\n                </p>\n                <p class="isviptip-area">æœ¬åœºæ˜¯ä»˜è´¹æ¯”èµ›ï¼Œæ‚¨å¯å…è´¹è§‚çœ‹</p>'), htmlCode += "\n        </div>", data.matchType == _g.gameType.EVENT && (htmlCode += '\n            <div class="no-against-title">\n                <div></div>', htmlCode += data.title, htmlCode += "\n                <div></div>\n            </div>"), htmlCode += '\n        <div class="team-time">';
					var startTime = data.startTime;
					data.livePeriod != _g.livePeriod.END ? (htmlCode += '\n                <p class="countdown hidden', htmlCode += data.matchType === _g.gameType.EVENT ? " no-against" : "", htmlCode += '">\n                    ç›´æ’­å€’è®¡æ—¶ï¼š<em class="js-hour">23</em>å°æ—¶<em class="js-minute">59</em>åˆ†<em\n                    class="js-second">59</em>ç§’\n                </p>\n                <p class="video-date', htmlCode += data.matchType === _g.gameType.EVENT ? " no-against" : "", htmlCode += '">', htmlCode += _g.liveTypeName[data.liveType], htmlCode += " ", htmlCode += startTime.substr(5, 2), htmlCode += "æœˆ", htmlCode += startTime.substr(8, 2), htmlCode += "æ—¥ ", htmlCode += startTime.substr(11, 5), htmlCode += "\n                </p>") : (htmlCode += '\n                <p class="game-over', htmlCode += data.matchType === _g.gameType.EVENT ? " no-vs" : "", htmlCode += '">å·²ç»“æŸ</p>\n                <p class="video-date-over">', htmlCode += startTime.substr(5, 2), htmlCode += "æœˆ", htmlCode += startTime.substr(8, 2), htmlCode += "æ—¥ ", htmlCode += startTime.substr(11, 5), htmlCode += "\n                </p>"), htmlCode += "\n        </div>"
				}
				htmlCode += "\n</div>"
			}
			return htmlCode
		},
		vipStatus: function() {
			ke("login").on("logout", function() {
				$(".viptip-area").show(), $(".isviptip-area").hide()
			}), ke("login").on("loginSuccess", function(e) {
				vip.isVip(fetchVipStatus), feachVipStatusInterval.start()
			})
		}
	}
});
define69eea4("/src/scripts/utils/countdown", function(e, t, n) {
	"use strict";
	var i, r, o, a, s, l, c = e("/src/scripts/ui/global"),
		u = c.getParams(),
		d = 0,
		p = 6e5,
		f = function() {
			try {
				var e = $.ajax({
					async: !1,
					data: {
						t: Math.random()
					}
				}).getResponseHeader("Date");
				console.log(e), e ? (d = new Date(e).getTime() - (new Date).getTime(), new Date(r) - new Date(e).getTime() < 6e4 && (p = 6e4)) : setTimeout(f, 1e3)
			} catch (t) {}
		},
		h = function(e) {
			$.ajax({
				url: window.GAME_SERVER + "/kbs/matchDetail",
				dataType: "jsonp",
				jsonpCallback: "matchDetailCallback",
				data: {
					mid: e
				}
			}).done(function(e) {
				0 == e.code && (r = e.data.matchInfo.startTime, e.data.matchInfo.livePeriod !== c.livePeriod.PRE && ($(".countdown").html("å³å°†å¼€å§‹..."), setTimeout(function() {
					location.reload()
				}, 3e3)))
			})
		},
		m = function() {
			var e, t, n, i, c = new Date(r.replace(" ", "T")),
				u = new Date;
			return e = c.getTime() - u.getTime() - d, 6e4 >= e ? (clearInterval(o), void $(".countdown").html("å³å°†å¼€å§‹...")) : void(e > 864e5 ? (clearInterval(o), a.text(0), s.text(0), l.text(0)) : (12e5 >= e && (p = 18e4), t = Math.floor(e / 1e3 / 60 / 60 % 24), n = Math.floor(e / 1e3 / 60 % 60), i = Math.floor(e / 1e3 % 60), a.text(t), s.text(n), l.text(i), $(".countdown").removeClass("hidden"), $(".game-header").removeClass("no-timer")))
		},
		g = function() {
			f(), h(u.mid), i = setTimeout(g, p)
		};
	return {
		init: function(e) {
			r = e.startTime, r = r.replace(" ", "T"), r += ".000+08:00", f(), e.isShow && (a = e.hourDom, s = e.minuteDom, l = e.secondDom, m(), o = setInterval(m, 1e3)), g()
		}
	}
});
define69eea4("/src/scripts/ui/game/pre/attend", function(e, t, n) {
	var i = e("/src/scripts/ui/global"),
		r = i.getParams();
	ke("login").on("loginSuccess", function() {
		t.init()
	}), ke("login").on("logout", function() {
		ke("attend").fire("notAttend")
	}), t.init = function() {
		$.ajax({
			url: window.GAME_SERVER + "/kbs/attendMids",
			dataType: "jsonp"
		}).done(function(e) {
			if (0 !== e.code) return void ke("attend").fire("notAttend");
			var t = e.data;
			return t && 0 !== t.length ? void($.inArray(r.mid, t) > -1 ? ke("attend").fire("attended") : ke("attend").fire("notAttend")) : void ke("attend").fire("notAttend")
		})
	}
});
define69eea4("/src/scripts/ui/game/pre/detail", function(e, t, n) {
	var i = e("/src/scripts/ui/global"),
		r = e("/src/scripts/ui/game/vip/miniPay"),
		o = e("/src/scripts/ui/account/vip"),
		a = e("/src/scripts/utils/qqlogin"),
		s = function() {
			ke("minipay").on("paySucess", function() {
				e("/src/scripts/ui/game/pre/highlights").refresh()
			}), ke("login").on("loginSuccess", function() {
				e("/src/scripts/ui/game/pre/highlights").refresh()
			}), ke("login").on("logout", function() {
				e("/src/scripts/ui/game/pre/highlights").refresh()
			}), $(".pre-openvip").on("click", function(e) {
				a.needLogin(!0).then(function() {
					o.isVip(function(e) {
						"1" !== e.vip && r.showPay({
							aid: i.remark({
								refer: 104,
								page: 1
							})
						})
					})
				})
			})
		};
	n.exports.render = function(t) {
		$(".game-header").addClass("pre-game"), t.matchInfo.matchType !== i.gameType.EVENT && ($(".support-bar-container").html(e("/output/support-bar/support-bar").render(t)), setTimeout(function() {
			e("/output/support-bar/support-bar").init()
		}, 0)), $(".game-info-container").append(e("/output/game-head/game-head").render({
			gameData: t
		})).removeClass("hidden"), "1" !== t.ifHasVideo ? ($(".countdown-container").html(e("/output/pre-game-top/pre-game-top").render({
			gameData: t
		})).removeClass("hidden"), e("/output/pre-game-top/pre-game-top").init(), e("/src/scripts/utils/countdown").init({
			startTime: t.matchInfo.startTime,
			hourDom: $(".js-hour"),
			minuteDom: $(".js-minute"),
			secondDom: $(".js-second"),
			isShow: !0
		}), e("/output/pre-game-top/pre-game-top").vipStatus()) : ($(".game-header").addClass("has-video"), "1" === t.isPay && s(), e("/src/scripts/ui/game/pre/highlights").init(), e("/src/scripts/utils/countdown").init({
			startTime: t.matchInfo.startTime,
			isShow: !1
		})), $(".non-live-box").removeClass("hidden"), setTimeout(function() {
			e("/output/game-head/game-head").init(), e("/src/scripts/ui/game/pre/attend").init()
		}, 0)
	}
});
define69eea4("/src/scripts/ui/game/tab", function(e, t, n) {
	var i = e("/src/scripts/ui/global");
	t.clearTab = function() {
		for (var e = 0; e < i.statsTabs.length; e++) 0 === $("div[role=" + i.statsTabs[e] + "]").length && $(".tab[data-target=" + i.statsTabs[e] + "]").remove();
		$(".feed-tab-container .tab").length < 3 && $(".feed-tab-container .sep").eq(-1).remove(), $(".feed-tab-container .tab").length < 2 && ($(".feed-tab-container .sep").eq(-1).remove(), $(".tab.current").removeClass("current"), $(".feed-tab-container .tab").eq(0).addClass("current"), $(".showed").hide().removeClass("showed"), $("div[role=feed]").show().addClass("showed")), $(".feed-tab-container > ul > li").removeClass("hidden")
	}, t.init = function(e, t) {
		if (e !== i.gameType.BASKETBALL && $(".tab[data-target=player]").remove(), e !== i.gameType.FOOTBALL && $(".tab[data-target=squard]").remove(), (e === i.gameType.EVENT || e === i.gameType.OTHER) && $(".live-tab-container .tab.current").css("width", "100%"), t === i.livePeriod.IN) {
			var n = $(".tab.current").data("target");
			$("div[role=" + n + "]").show().addClass("showed"), $(".live-tab-container").removeClass("hidden")
		}
		$(".tab").on("click", function() {
			$(this).hasClass("current") || $(this).hasClass("disabled") || ($(".tab.current").removeClass("current"), $(this).addClass("current"), $(".showed").hide().removeClass("showed"), $("div[role=" + $(this).data("target") + "]").show().addClass("showed"))
		})
	}
});
define69eea4("/output/basketball-stats/basketball-stats", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) {
				htmlCode += '\n<div class="teamEvent" role="stats">\n    <div class="teamEvent-content">\n        <table width="100%">\n            <thead>\n            <tr>\n                <th width="10%"><span>å®žæ—¶æ•°æ®</span></th>';
				for (var i = 0; i < periodGoals.head.length; i++) htmlCode += '\n                <th width="10%">', htmlCode += periodGoals.head[i], htmlCode += "</th>";
				htmlCode += "\n            </tr>\n            </thead>\n            <tbody>";
				for (var j = 0; j < periodGoals.rows.length; j++) {
					htmlCode += "\n            <tr>";
					for (var cols = periodGoals.rows[j], m = 0; m < cols.length; m++) 0 == j && 0 == m ? "1" == teamInfo.leftHasUrl ? (htmlCode += '\n                <td><a href="/kbsweb/teams.htm?tid=', htmlCode += teamInfo.leftId, htmlCode += "&cid=", htmlCode += teamInfo.competitionId, htmlCode += '"\n                       target="_blank"><img src="', htmlCode += teamInfo.leftBadge, htmlCode += '"></a></td>') : (htmlCode += '\n                <td><img src="', htmlCode += teamInfo.leftBadge, htmlCode += '"></td>') : 1 == j && 0 == m ? "1" == teamInfo.rightHasUrl ? (htmlCode += '\n                <td><a href="/kbsweb/teams.htm?tid=', htmlCode += teamInfo.rightId, htmlCode += "&cid=", htmlCode += teamInfo.competitionId, htmlCode += '"\n                       target="_blank"><img src="', htmlCode += teamInfo.rightBadge, htmlCode += '"></a></td>') : (htmlCode += '\n                <td><img src="', htmlCode += teamInfo.rightBadge, htmlCode += '"></td>') : (htmlCode += "\n                <td>", htmlCode += cols[m], htmlCode += "</td>");
					htmlCode += "\n            </tr>"
				}
				htmlCode += "\n            </tbody>\n        </table>\n    </div>\n</div>"
			}
			return htmlCode
		}
	}
});
define69eea4("/output/football-events/football-events", function(require, exports, module) {
	var tpHelper = (require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper"));
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data;
			_data = ("undefined" != typeof ___kkit___ ? ___kkit___.tph : tpHelper).mixin(_data, {
				getTeamClass: function(e) {
					var t = {
						"è¿›çƒ": "goal",
						"ç‚¹çƒ": "penalty",
						"ä¹Œé¾™": "oolong",
						"æ¢ä¸Š": "up",
						"æ¢ä¸‹": "down",
						"çº¢ç‰Œ": "red-card",
						"é»„ç‰Œ": "yellow-card",
						"å—ä¼¤": "injured"
					};
					return t[e]
				}
			});
			var htmlCode = "";
			with(_data || {}) {
				htmlCode += '\n<div class="football-data" role="stats">\n    <div class="football-content">\n        <table width="100%">\n            <thead>\n            <tr>\n                <th width="42%" class="alignRight"><img src="', htmlCode += teamInfo.leftBadge, htmlCode += '"> </th>\n                <th width="16%">å®žæ—¶èµ›å†µ</th>\n                <th width="42%" class="alignLeft"><img src="', htmlCode += teamInfo.rightBadge, htmlCode += '"></th>\n            </tr>\n            </thead>\n            <tbody>';
				for (var i = 0; i < footballEvents.length; i++)"right" == footballEvents[i].side ? (htmlCode += '\n                    <tr>\n                        <td  class="alignRight"></td>\n                        <td>', htmlCode += footballEvents[i].time, htmlCode += 'â€™</td>\n                        <td class="alignLeft">\n                            <p><em class="', htmlCode += getTeamClass(footballEvents[i].type), htmlCode += '"></em>\n                                <span>', htmlCode += footballEvents[i].playerName, htmlCode += '</span>\n                                <span class="footbNum">', htmlCode += footballEvents[i].jerseyNum ? "(" + footballEvents[i].jerseyNum + ")" : "", htmlCode += '</span>\n                            </p>\n                            <span class="footbScare">', htmlCode += footballEvents[i].score, htmlCode += "</span>\n                        </td>\n                    </tr>") : (htmlCode += '\n                    <tr>\n                        <td  class="alignRight">\n                            <span class="footbScare">', htmlCode += footballEvents[i].score, htmlCode += '</span>\n                            <p>\n                            <span class="footbNum">', htmlCode += footballEvents[i].jerseyNum ? "(" + footballEvents[i].jerseyNum + ")" : "", htmlCode += "</span>\n                            <span>", htmlCode += footballEvents[i].playerName, htmlCode += '</span>\n                            <em class="', htmlCode += getTeamClass(footballEvents[i].type), htmlCode += '"></em>\n                            </p>\n                        </td>\n                        <td>', htmlCode += footballEvents[i].time, htmlCode += 'â€™</td>\n                        <td class="alignLeft"></td>\n                    </tr>');
				htmlCode += "\n            </tbody>\n        </table>\n    </div>\n</div>"
			}
			return htmlCode
		}
	}
});
define69eea4("/output/other-stats/other-stats", function(require, exports, module) {
	var _g = (require("/lib/jsonselect"), require("/src/scripts/ui/global")),
		tpHelper = (require("/src/scripts/utils/utils"), require("/lib/tpHelper"));
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data;
			_data = ("undefined" != typeof ___kkit___ ? ___kkit___.tph : tpHelper).mixin(_data, {
				addGameType: function(e) {
					var t = _g.gameType.EVENT;
					return e === t ? !0 : !1
				}
			});
			var htmlCode = "";
			with(_data || {}) {
				htmlCode += '\n<div class="comprehensive" role="stats">\n    <div class="comp-content">\n        <table width="100%">\n            <thead>\n            <tr>', addGameType(matchType) ? (htmlCode += '\n                <th width="42%" colspan="3"><span>', htmlCode += teamInfo.leftName ? teamInfo.leftName : teamInfo.rightName, htmlCode += '</span><img src="', htmlCode += teamInfo.leftBadge ? teamInfo.leftBadge : teamInfo.rightBadge, htmlCode += '"></th>') : (htmlCode += '\n                <th width="42%" class="alignRight"><span>', htmlCode += teamInfo.leftName, htmlCode += '</span><img src="', htmlCode += teamInfo.leftBadge, htmlCode += '"></th>\n                <th width="16%">æ•°æ®</th>\n                <th width="42%" class="alignLeft"><img src="', htmlCode += teamInfo.rightBadge, htmlCode += '"><span>', htmlCode += teamInfo.rightName, htmlCode += "</span></th>"), htmlCode += "\n            </tr>\n            </thead>\n            <tbody>";
				for (var i = 0; i < goals.length; i++) htmlCode += '\n            <tr>\n                <td class="alignRight">', htmlCode += goals[i].leftGoal, htmlCode += "</td>\n                <td>", htmlCode += goals[i].quarter, htmlCode += '</td>\n                <td class="alignLeft">', htmlCode += goals[i].rightGoal, htmlCode += "</td>\n            </tr>";
				htmlCode += "\n            </tbody>\n        </table>\n    </div>\n</div>"
			}
			return htmlCode
		}
	}
});
define69eea4("/output/penalty-shootout/penalty-shootout", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) {
				htmlCode += '\n<div class="penalty" role="stats">\n    <table width="100%" cellpadding="0" cellspacing="0">\n        <thead>\n        <tr>\n            <th width="40%" class="alignRight"><img src="', htmlCode += teamInfo.leftBadge, htmlCode += '"></th>\n            <th width="20%">ç‚¹çƒå¤§æˆ˜</th>\n            <th width="40%" class="alignLeft"><img src="', htmlCode += teamInfo.rightBadge, htmlCode += '"></th>\n        </tr>\n        </thead>\n        <tbody>';
				for (var i = 0; i < penalty.length; i++) htmlCode += '\n        <tr>\n            <td class="alignRight"><span class="grey">', htmlCode += penalty[i].jerseyNum ? "(" + penalty[i].jerseyNum + ")" : "", htmlCode += "</span> <span>", htmlCode += penalty[i].leftPlayerName, htmlCode += '</span><em class="', htmlCode += 0 == penalty[i].leftResult ? "no-goal" : "goal", htmlCode += '"></em></td>\n            <td>', htmlCode += penalty[i].round, htmlCode += '</td>\n            <td class="alignLeft"><em class="', htmlCode += 0 == penalty[i].rightResult ? "no-goal" : "goal", htmlCode += '"></em><span>', htmlCode += penalty[i].rightPlayerName, htmlCode += '</span><span class="grey">', htmlCode += penalty[i].jerseyNum ? "(" + penalty[i].jerseyNum + ")" : "", htmlCode += "</span></td>\n        </tr>";
				htmlCode += "\n        </tbody>\n    </table>\n</div>"
			}
			return htmlCode
		}
	}
});
define69eea4("/output/best-team/best-team", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) {
				htmlCode += '\n<div class="best-team" role="stats">\n    <table width="100%">\n        <thead>\n        <tr>\n            <th width="42%" class="alignRight">', "1" == teamInfo.leftHasUrl ? (htmlCode += '\n                <a href="/kbsweb/teams.htm?tid=', htmlCode += teamInfo.leftId, htmlCode += "&cid=", htmlCode += teamInfo.competitionId, htmlCode += '"\n                   target="_blank"><img\n                        src="', htmlCode += teamInfo.leftBadge, htmlCode += '"></a>') : (htmlCode += '\n                <img src="', htmlCode += teamInfo.leftBadge, htmlCode += '">'), htmlCode += '\n            </th>\n            <th width="16%">æœ¬åœºæœ€ä½³</th>\n            <th width="42%" class="alignLeft">', "1" == teamInfo.rightHasUrl ? (htmlCode += '\n                <a href="/kbsweb/teams.htm?tid=', htmlCode += teamInfo.rightId, htmlCode += "&cid=", htmlCode += teamInfo.competitionId, htmlCode += '"\n                   target="_blank"><img src="', htmlCode += teamInfo.rightBadge, htmlCode += '"></a>') : (htmlCode += '\n                <img src="', htmlCode += teamInfo.rightBadge, htmlCode += '">'), htmlCode += "\n            </th>\n        </tr>\n        </thead>\n        <tbody>";
				for (var i = 0; i < maxPlayers.length; i++) htmlCode += '\n        <tr>\n            <td class="alignRight"><strong>ï¼ˆ', htmlCode += maxPlayers[i].leftPlayer.jerseyNum || "", htmlCode += "ï¼‰</strong>", "1" === maxPlayers[i].leftPlayer.ifHasUrl ? (htmlCode += '\n                <a target="_blank" href="/kbsweb/players.htm?pid=', htmlCode += maxPlayers[i].leftPlayer.playerId, htmlCode += '">\n                    <span>', htmlCode += maxPlayers[i].leftPlayer.name || "", htmlCode += "</span></a>") : (htmlCode += "\n                <span>", htmlCode += maxPlayers[i].leftPlayer.name || "", htmlCode += "</span>"), htmlCode += "\n                <em>", htmlCode += maxPlayers[i].leftVal, htmlCode += "</em></td>\n            <td>", htmlCode += maxPlayers[i].text, htmlCode += '</td>\n            <td class="alignLeft"><em>', htmlCode += maxPlayers[i].rightVal, htmlCode += "</em>", "1" === maxPlayers[i].rightPlayer.ifHasUrl ? (htmlCode += '\n                <a target="_blank" href="/kbsweb/players.htm?pid=', htmlCode += maxPlayers[i].rightPlayer.playerId, htmlCode += '">\n                    <span>', htmlCode += maxPlayers[i].rightPlayer.name || "", htmlCode += "</span></a>") : (htmlCode += "\n                <span>", htmlCode += maxPlayers[i].rightPlayer.name || "", htmlCode += "</span>"), htmlCode += "\n                <strong>ï¼ˆ", htmlCode += maxPlayers[i].rightPlayer.jerseyNum || "", htmlCode += "ï¼‰</strong></td>\n        </tr>";
				htmlCode += "\n        </tbody>\n    </table>\n</div>"
			}
			return htmlCode
		}
	}
});
define69eea4("/output/comparison/comparison", function(require, exports, module) {
	var tpHelper = (require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper"));
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data;
			_data = ("undefined" != typeof ___kkit___ ? ___kkit___.tph : tpHelper).mixin(_data, {
				getComparePercent: function(e) {
					var t = parseInt(e.leftVal, 10),
						n = parseInt(e.rightVal, 10);
					if (0 === t && 0 === n) return {
						left: 10,
						right: 10
					};
					var i = t + n === 0 ? 50 : t / (t + n) * 100;
					return i = 10 > i ? 10 : i > 90 ? 90 : i, {
						left: i,
						right: 100 - i
					}
				}
			});
			var htmlCode = "";
			with(_data || {}) {
				htmlCode += '\n<div class="compare-data" role="stats">\n    <table width="100%">\n        <thead>\n        <tr>\n            <th width="42%" class="alignRight">', "1" == teamInfo.leftHasUrl ? (htmlCode += '\n                <a href="/kbsweb/teams.htm?tid=', htmlCode += teamInfo.leftId, htmlCode += "&cid=", htmlCode += teamInfo.competitionId, htmlCode += '" target="_blank"><img\n                        src="', htmlCode += teamInfo.leftBadge, htmlCode += '"></a>') : (htmlCode += '\n                <img src="', htmlCode += teamInfo.leftBadge, htmlCode += '">'), htmlCode += '\n            </th>\n            <th width="16%">å¯¹æ¯”æ•°æ®</th>\n            <th width="42%" class="alignLeft">', "1" == teamInfo.rightHasUrl ? (htmlCode += '\n                <a href="/kbsweb/teams.htm?tid=', htmlCode += teamInfo.rightId, htmlCode += "&cid=", htmlCode += teamInfo.competitionId, htmlCode += '"\n                   target="_blank"><img src="', htmlCode += teamInfo.rightBadge, htmlCode += '"></a>') : (htmlCode += '\n                <img src="', htmlCode += teamInfo.rightBadge, htmlCode += '">'), htmlCode += "\n            </th>\n        </tr>\n        </thead>\n        <tbody>";
				for (var i = 0; i < teamStats.length; i++) {
					var percent = getComparePercent(teamStats[i]);
					htmlCode += '\n        <tr>\n            <td class="alignRight"><span>', htmlCode += teamStats[i].leftVal, htmlCode += '</span><em class="', htmlCode += parseInt(teamStats[i].leftVal) > parseInt(teamStats[i].rightVal) ? "orange" : "gray", htmlCode += '" style="width:', htmlCode += percent.left, htmlCode += '%"></em></td>\n            <td>', htmlCode += teamStats[i].text, htmlCode += '</td>\n            <td class="alignLeft"><em class="', htmlCode += parseInt(teamStats[i].rightVal) > parseInt(teamStats[i].leftVal) ? "orange" : "gray", htmlCode += '" style="width:', htmlCode += percent.right, htmlCode += '%"></em><span>', htmlCode += teamStats[i].rightVal, htmlCode += "</span></td>\n        </tr>"
				}
				htmlCode += "\n        </tbody>\n    </table>\n</div>"
			}
			return htmlCode
		}
	}
});
define69eea4("/output/player-data/player-data", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {
			$(".js-player-data").hover(function() {
				$(this).addClass("current-cell").parents("table").addClass($(this).data("current"))
			}, function() {
				$(this).removeClass("current-cell").parents("table").removeClass($(this).data("current"))
			})
		},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) {
				htmlCode += '\n<div class="player" role="player">\n    <div class="player-content">';
				var leftData = playerStatsList.left;
				leftData.badge = teamInfo.leftBadge, leftData.teamHasUrl = teamInfo.leftHasUrl, leftData.cid = teamInfo.competitionId, leftData.tid = teamInfo.leftId, function(e) {
					htmlCode += '<table width="100%">\n    <thead>\n    <tr>';
					for (var t = e[0].head, n = 0; n < t.length; n++) 0 == n ? (htmlCode += '\n        <th width="16%" class="team-name row0 col', htmlCode += n, htmlCode += '" data-current="current-row', htmlCode += o, htmlCode += " current-col", htmlCode += a, htmlCode += '">', "1" === e.teamHasUrl ? (htmlCode += '\n            <a href="/kbsweb/teams.htm?tid=', htmlCode += e.tid, htmlCode += "&cid=", htmlCode += e.cid, htmlCode += '" target="_blank">\n                <img src="', htmlCode += e.badge, htmlCode += '">\n            </a>') : (htmlCode += '\n            <img src="', htmlCode += e.badge, htmlCode += '">'), htmlCode += t[n], htmlCode += "\n        </th>") : (htmlCode += '\n        <th width="7%" class="row0 col', htmlCode += n, htmlCode += '" data-current="current-row', htmlCode += o, htmlCode += " current-col", htmlCode += a, htmlCode += '">', htmlCode += t[n], htmlCode += "</th>");
					htmlCode += "\n    </tr>\n    </thead>\n    <tbody>";
					for (var i = e, o = 1; o < i.length; o++) {
						htmlCode += "\n    <tr>";
						for (var r = i[o].row, a = 0; a < r.length; a++) 0 == a ? (htmlCode += '\n        <td class="team-name row', htmlCode += o, htmlCode += " col", htmlCode += a, htmlCode += '" data-current="current-row', htmlCode += o, htmlCode += " current-col", htmlCode += a, htmlCode += '">', "1" === i[o].ifHasUrl ? (htmlCode += '\n           <a href="/kbsweb/players.htm?pid=', htmlCode += i[o].playerId, htmlCode += '" target="_blank"><span>', htmlCode += r[a], htmlCode += "</span></a>") : (htmlCode += "\n            <span>", htmlCode += r[a], htmlCode += "</span>"), htmlCode += "\n        </td>") : (htmlCode += '\n        <td class="js-player-data row', htmlCode += o, htmlCode += " col", htmlCode += a, htmlCode += '" data-current="current-row', htmlCode += o, htmlCode += " current-col", htmlCode += a, htmlCode += '">', htmlCode += r[a], htmlCode += "\n        </td>");
						htmlCode += "\n    </tr>"
					}
					htmlCode += "\n    </tbody>\n</table>"
				}(leftData), htmlCode += '\n    </div>\n    <div class="player-content">';
				var rightData = playerStatsList.right;
				rightData.badge = teamInfo.rightBadge, rightData.teamHasUrl = teamInfo.rightHasUrl, rightData.cid = teamInfo.competitionId, rightData.tid = teamInfo.rightId, function(e) {
					htmlCode += '<table width="100%">\n    <thead>\n    <tr>';
					for (var t = e[0].head, n = 0; n < t.length; n++) 0 == n ? (htmlCode += '\n        <th width="16%" class="team-name row0 col', htmlCode += n, htmlCode += '" data-current="current-row', htmlCode += o, htmlCode += " current-col", htmlCode += a, htmlCode += '">', "1" === e.teamHasUrl ? (htmlCode += '\n            <a href="/kbsweb/teams.htm?tid=', htmlCode += e.tid, htmlCode += "&cid=", htmlCode += e.cid, htmlCode += '" target="_blank">\n                <img src="', htmlCode += e.badge, htmlCode += '">\n            </a>') : (htmlCode += '\n            <img src="', htmlCode += e.badge, htmlCode += '">'), htmlCode += t[n], htmlCode += "\n        </th>") : (htmlCode += '\n        <th width="7%" class="row0 col', htmlCode += n, htmlCode += '" data-current="current-row', htmlCode += o, htmlCode += " current-col", htmlCode += a, htmlCode += '">', htmlCode += t[n], htmlCode += "</th>");
					htmlCode += "\n    </tr>\n    </thead>\n    <tbody>";
					for (var i = e, o = 1; o < i.length; o++) {
						htmlCode += "\n    <tr>";
						for (var r = i[o].row, a = 0; a < r.length; a++) 0 == a ? (htmlCode += '\n        <td class="team-name row', htmlCode += o, htmlCode += " col", htmlCode += a, htmlCode += '" data-current="current-row', htmlCode += o, htmlCode += " current-col", htmlCode += a, htmlCode += '">', "1" === i[o].ifHasUrl ? (htmlCode += '\n           <a href="/kbsweb/players.htm?pid=', htmlCode += i[o].playerId, htmlCode += '" target="_blank"><span>', htmlCode += r[a], htmlCode += "</span></a>") : (htmlCode += "\n            <span>", htmlCode += r[a], htmlCode += "</span>"), htmlCode += "\n        </td>") : (htmlCode += '\n        <td class="js-player-data row', htmlCode += o, htmlCode += " col", htmlCode += a, htmlCode += '" data-current="current-row', htmlCode += o, htmlCode += " current-col", htmlCode += a, htmlCode += '">', htmlCode += r[a], htmlCode += "\n        </td>");
						htmlCode += "\n    </tr>"
					}
					htmlCode += "\n    </tbody>\n</table>"
				}(rightData), htmlCode += "\n    </div>\n</div>"
			}
			return htmlCode
		}
	}
});
define69eea4("/output/history-against/history-against", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) {
				htmlCode += '\n<div id="history" class="" role="stats">\n    <table width="100%">\n        <thead>\n            <tr>';
				for (var i = 0; i < historyVs.head.length; i++) htmlCode += '\n                    <th width="20%">', htmlCode += historyVs.head[i], htmlCode += "</th>";
				htmlCode += "\n            </tr>\n        </thead>\n        <tbody>";
				for (var j = 0; j < historyVs.rows.length; j++) {
					htmlCode += '\n                <tr class="game-record" data-mid="', htmlCode += historyVs.mids[j], htmlCode += '" data-action="åŽ†å²å¯¹é˜µ">';
					for (var cols = historyVs.rows[j], f = 0; f < cols.length; f++) htmlCode += "\n                        <td>", htmlCode += cols[f], htmlCode += "</td>";
					htmlCode += "\n                </tr>"
				}
				htmlCode += "\n        </tbody>\n    </table>\n</div>"
			}
			return htmlCode
		}
	}
});
define69eea4("/output/record/record", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) {
				htmlCode += '';
				for (var i = 0; i < finishMatches.length; i++) {
					htmlCode += '\n<div class="record" role="stats">\n    <table width="100%">\n        <thead>\n        <tr>';
					for (var head = finishMatches[i].head, j = 0; j < head.length; j++) 0 === j ? (htmlCode += '\n            <th width="20%">', "1" === head[j].ifHasUrl ? (htmlCode += '\n                <a href="/kbsweb/teams.htm?tid=', htmlCode += head[j].teamId, htmlCode += "&cid=", htmlCode += teamInfo.competitionId, htmlCode += '" target="_blank"><img\n                        src="', htmlCode += head[j].badge, htmlCode += '"></a> <span>', htmlCode += head[j].text, htmlCode += "</span>") : (htmlCode += '\n                <img src="', htmlCode += head[j].badge, htmlCode += '"><span>', htmlCode += head[j].text, htmlCode += "</span>"), htmlCode += "\n            </th>") : (htmlCode += '\n            <th width="20%">', htmlCode += head[j], htmlCode += "</th>");
					htmlCode += "\n        </tr>\n        </thead>\n        <tbody>";
					for (var rows = finishMatches[i].rows, mids = finishMatches[i].mids, k = 0; k < rows.length; k++) {
						htmlCode += '\n        <tr class="game-record" data-mid="', htmlCode += mids[k], htmlCode += '" data-action="è¿‘æœŸæˆ˜ç»©">';
						for (var l = 0, col = rows[k]; l < col.length; l++) htmlCode += "\n            <td>", htmlCode += col[l], htmlCode += "</td>";
						htmlCode += "\n        </tr>"
					}
					htmlCode += "\n        </tbody>\n    </table>\n</div>"
				}
			}
			return htmlCode
		}
	}
});
define69eea4("/output/squard/squard", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) {
				htmlCode += '\n<div class="squard" role="squard">\n    <table width="100%">\n        <thead>\n        <tr>\n            <th class="alignRight" width="40%"><img src="', htmlCode += teamInfo.leftBadge, htmlCode += '"></th>\n            <th width="20%">é¦–å‘é˜µå®¹</th>\n            <th class="alignLeft" width="40%"><img src="', htmlCode += teamInfo.rightBadge, htmlCode += '"></th>\n        </tr>\n        </thead>\n        <tbody>';
				for (var i = 0; i < squard.length; i++) {
					htmlCode += "\n        <tr>";
					var leftData = squard[i].left,
						rightData = squard[i].right;
					htmlCode += '\n            <td class="alignRight"><em>ï¼ˆ', htmlCode += leftData.jerseyNum, htmlCode += "ï¼‰</em><span>", htmlCode += leftData.playerName, htmlCode += "</span><span>", htmlCode += leftData.position, htmlCode += "</span>\n            </td>\n            <td></td>\n            <td><span>", htmlCode += rightData.position, htmlCode += "</span><span>", htmlCode += rightData.playerName, htmlCode += "</span><em>ï¼ˆ", htmlCode += rightData.jerseyNum, htmlCode += "ï¼‰</em></td>\n        </tr>"
				}
				htmlCode += "\n        </tbody>\n    </table>\n</div>"
			}
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/stats", function(e, t, n) {
	var i = e("/src/scripts/ui/global"),
		o = i.getParams();
	n.exports.render = function(t) {
		$.ajax({
			url: window.GAME_SERVER + "/kbs/matchStat",
			dataType: "jsonp",
			jsonpCallback: "matchStatsCallback",
			data: {
				mid: o.mid
			}
		}).done(function(n) {
			var i = n.data;
			if (0 === n.code && i && i.teamInfo) {
				var o = "";
				i.periodGoals && (o += e("/output/basketball-stats/basketball-stats").render(i)), i.footballEvents && (o += e("/output/football-events/football-events").render(i)), i.goals && (o += e("/output/other-stats/other-stats").render(i)), i.penalty && (o += e("/output/penalty-shootout/penalty-shootout").render(i)), i.maxPlayers && (o += e("/output/best-team/best-team").render(i)), i.teamStats && (o += e("/output/comparison/comparison").render(i)), i.playerStats && (o += e("/output/player-data/player-data").render({
					playerStatsList: i.playerStats,
					teamInfo: i.teamInfo
				})), i.historyVs && (o += e("/output/history-against/history-against").render(i)), i.finishMatches && (o += e("/output/record/record").render(i)), i.squard && (o += e("/output/squard/squard").render(i)), t(o)
			}
		})
	}
});
define69eea4("/src/scripts/utils/cursor", function(e, t, n) {
	return {
		getCursortPosition: function(e) {
			var t = 0;
			if (document.selection) {
				e.focus();
				var n = document.selection.createRange();
				if (-1 != navigator.userAgent.indexOf("MSIE 10.0")) {
					var i = n.duplicate(),
						t = -1;
					for (i.moveToElementText(e); i.inRange(n);) i.moveStart("character"), t++
				} else n.moveStart("character", -e.value.length), t = n.text.length
			} else(e.selectionStart || "0" == e.selectionStart) && (t = e.selectionStart);
			return t
		},
		setCaretPosition: function(e, t) {
			if (e.setSelectionRange) e.focus(), e.setSelectionRange(t, t);
			else if (e.createTextRange) {
				var n = e.createTextRange();
				n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select()
			}
		},
		setCursorPosition: function(e, t) {
			this.sel(e, t, t)
		},
		caretAfterCursor: function(e, t) {
			e.value;
			if (document.selection) {
				e.focus();
				var n = this;
				setTimeout(function() {
					var i = n.getCursortPosition(e);
					n.setCursorPosition(e, i), document.selection.createRange().text = t
				}, 0)
			} else {
				var i = e.selectionStart,
					o = e.value.length,
					r = e.scrollTop;
				e.value = e.value.slice(0, e.selectionStart) + t + e.value.slice(e.selectionStart, o), this.setCursorPosition(e, i + t.length), firefox = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/) && setTimeout(function() {
					e.scrollTop != r && (e.scrollTop = r)
				}, 0)
			}
		},
		sel: function(e, t, n) {
			if (document.selection) {
				var i = e.createTextRange();
				i.moveEnd("character", -e.value.length), i.moveEnd("character", n), i.moveStart("character", t), i.select()
			} else e.setSelectionRange(t, n), e.focus()
		}
	}
});
define69eea4("/src/scripts/utils/tab", function(e, t, n) {
	var i = {
		curClass: "cur",
		curDefaultIndex: 0,
		switchEventName: "mouseenter"
	},
		r = function(e) {
			this.tabClass = e.tabClass, this.viewClass = e.viewClass, this.curClass = e.curClass || i.curClass, this.curDefaultIndex = e.curDefaultIndex || i.curDefaultIndex, this.switchEventName = e.switchEventName || i.switchEventName, this.onChangeFn = e.onChangeFn, this.elTabs, this.elViews, this._init()
		};
	r.prototype = {
		_init: function() {
			this._getElTabs(), this._getElViews(), this._switchTab(this.curDefaultIndex), this._eventBind()
		},
		_getElTabs: function() {
			return this.elTabs = $("." + this.tabClass)
		},
		_getElViews: function() {
			return this.elViews = $("." + this.viewClass)
		},
		_switchTab: function(e) {
			var t = this._getElTabs(),
				n = this._getElViews();
			t.removeClass(this.curClass), t.eq(e).addClass(this.curClass), n && (n.hide(), n.eq(e).show())
		},
		_eventBind: function() {
			var e = this,
				t = "." + e.tabClass;
			$(document).on(this.switchEventName, t, function(n) {
				var i = $(this).index(t);
				e._switchTab(i), "function" == typeof e.onChangeFn && e.onChangeFn(i, $(this), e.elViews.eq(i))
			})
		}
	}, n.exports = {
		init: function(e) {
			return new r(e)
		},
		setDefaultOpts: function(e) {
			for (var t in i) {
				var n = e[t];
				n && (i[t] = n)
			}
		}
	}
});
define69eea4("/output/facebox/facebox", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div id="faceBox" class="face-type1">\n    <div class="arrowUp">\n        <em></em>\n        <ins></ins>\n    </div>\n    <div class="faceHead faceBox-canclick">\n        <a href="javascript:;" class="face-type1 tab-face faceBox-canclick"></a>\n        <a href="javascript:;" class="face-type2 tab-face faceBox-canclick disabled"></a>\n        <a href="javascript:;" class="next faceBox-canclick" title="ä¸‹ä¸€é¡µ">\n            <em class="arrow-right faceBox-canclick"></em>\n        </a>\n        <a href="javascript:;" class="prev faceBox-canclick" title="ä¸Šä¸€é¡µ">\n            <em class="arrow-left faceBox-canclick"></em>\n        </a>\n    </div>\n    <div class="faceWrap tabView-face face-type1 face-p1">\n        <div class="faceInner cur">\n            <a href="javascript:;" class="y1" title="å¼€å¿ƒ"></a>\n            <a href="javascript:;" class="y2" title="å¯çˆ±"></a>\n            <a href="javascript:;" class="y3" title="å‘æ€’"></a>\n            <a href="javascript:;" class="y4" title="æ“¦æ±—"></a>\n            <a href="javascript:;" class="y5" title="åç¬‘"></a>\n            <a href="javascript:;" class="y6" title="æƒŠæ"></a>\n            <a href="javascript:;" class="y7" title="æ³ªå¥”"></a>\n            <a href="javascript:;" class="y8" title="å·ç¬‘"></a>\n            <a href="javascript:;" class="y9" title="è°ƒçš®"></a>\n            <a href="javascript:;" class="y10" title="å’’éª‚"></a>\n            <a href="javascript:;" class="y11" title="å§”å±ˆ"></a>\n\n            <a href="javascript:;" class="y19" title="æ™•"></a>\n            <a href="javascript:;" class="y20" title="æŠ“ç‹‚"></a>\n            <a href="javascript:;" class="y12" title="è‰²"></a>\n            <a href="javascript:;" class="y13" title="é„™è§†"></a>\n            <a href="javascript:;" class="y14" title="é—­å˜´"></a>\n            <a href="javascript:;" class="y15" title="å‘å‘†"></a>\n            <a href="javascript:;" class="y16" title="ç–²æƒ«"></a>\n            <a href="javascript:;" class="y17" title="æŠ é¼»"></a>\n            <a href="javascript:;" class="y18" title="é˜´é™©"></a>\n            <a href="javascript:;" class="y21" title="å"></a>\n            <a href="javascript:;" class="y22" title="å¥‹æ–—"></a>\n\n            <a href="javascript:;" class="y28" title="æƒŠè®¶"></a>\n            <a href="javascript:;" class="y29" title="å†·æ±—"></a>\n            <a href="javascript:;" class="y30" title="ç–‘é—®"></a>\n            <a href="javascript:;" class="y31" title="å˜˜"></a>\n            <a href="javascript:;" class="y23" title="å°´å°¬"></a>\n            <a href="javascript:;" class="y24" title="é¼“æŽŒ"></a>\n            <a href="javascript:;" class="y25" title="æ‰“çžŒç¡"></a>\n            <a href="javascript:;" class="y26" title="å¤§ç¬‘"></a>\n            <a href="javascript:;" class="y27" title="å¾—æ„"></a>\n            <a href="javascript:;" class="y32" title="äº²äº²"></a>\n            <a href="javascript:;" class="y33" title="å›°"></a>\n\n            <a href="javascript:;" class="y37" title="å³å“¼å“¼"></a>\n            <a href="javascript:;" class="y38" title="å·¦å“¼å“¼"></a>\n            <a href="javascript:;" class="y39" title="è‹¦é€¼"></a>\n            <a href="javascript:;" class="y40" title="è‹¦æ¶©"></a>\n            <a href="javascript:;" class="y41" title="å¯æ€œ"></a>\n            <a href="javascript:;" class="y42" title="çžŸ"></a>\n            <a href="javascript:;" class="y34" title="å“¼"></a>\n            <a href="javascript:;" class="y35" title="æ„£"></a>\n            <a href="javascript:;" class="y36" title="æ‰®é…·"></a>\n            <a href="javascript:;" class="y43" title="å†·é…·"></a>\n            <a href="javascript:;" class="y46" title="èˆ”"></a>\n\n            <a href="javascript:;" class="y44" title="è¡°"></a>\n            <a href="javascript:;" class="y45" title="éª·é«…"></a>\n            <a href="javascript:;" class="y47" title="é¡¶"></a>\n            <a href="javascript:;" class="y48" title="è¸©"></a>\n            <a href="javascript:;" class="y49" title="æ•²æ‰“"></a>\n            <a href="javascript:;" class="y50" title="å¿ƒç¢Ž"></a>\n            <a href="javascript:;" class="y51" title="æ¡æ‰‹"></a>\n            <a href="javascript:;" class="y52" title="èƒœåˆ©"></a>\n            <a href="javascript:;" class="y53" title="é€Š"></a>\n            <a href="javascript:;" class="y54" title="æ‰“ä½"></a>\n            <a href="javascript:;" class="y61" title="åŠ›é‡"></a>\n        </div>\n        <div class="faceInner">\n            <a href="javascript:;" class="y55" title="èœåˆ€"></a>\n            <a href="javascript:;" class="y56" title="æ‰‹é›·"></a>\n            <a href="javascript:;" class="y57" title="ä¾¿ä¾¿"></a>\n            <a href="javascript:;" class="y58" title="ç¯®çƒ"></a>\n            <a href="javascript:;" class="y59" title="è¶³çƒ"></a>\n            <a href="javascript:;" class="y60" title="é—ªç”µ"></a>\n            <a href="javascript:;" class="y62" title="çŒªå¤´"></a>\n            <a href="javascript:;" class="y63" title="ä¹’ä¹“çƒ"></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n        </div>\n    </div>\n    <div class="faceWrap tabView-face face-type2 face-p1">\n        <div class="faceInner cur">\n            <a href="javascript:;" class="f1" title="2B"></a>\n            <a href="javascript:;" class="f2" title="æš´è„¾æ°”"></a>\n            <a href="javascript:;" class="f3" title="æ†‹å±ˆ"></a>\n            <a href="javascript:;" class="f4" title="è°„åªš"></a>\n            <a href="javascript:;" class="f5" title="æŠ½è„¸"></a>\n            <a href="javascript:;" class="f6" title="æ·¡å®š"></a>\n            <a href="javascript:;" class="f7" title="å“ˆå“ˆ"></a>\n            <a href="javascript:;" class="f8" title="æ†¨"></a>\n            <a href="javascript:;" class="f9" title="çº¢ç‰Œç½šä¸‹"></a>\n            <a href="javascript:;" class="f17" title="çŸ³åŒ–"></a>\n            <a href="javascript:;" class="f18" title="æ— è¯­äº†"></a>\n\n            <a href="javascript:;" class="f10" title="åç¬‘å•¦"></a>\n            <a href="javascript:;" class="f11" title="é»„ç‰Œè­¦å‘Š"></a>\n            <a href="javascript:;" class="f12" title="ç‹‚å–œ"></a>\n            <a href="javascript:;" class="f13" title="ç‹‚èº"></a>\n            <a href="javascript:;" class="f14" title="æ³ªæµä¸æ­¢"></a>\n            <a href="javascript:;" class="f15" title="å–èŒ"></a>\n            <a href="javascript:;" class="f16" title="çž§ä¸ä¸Š"></a>\n            <a href="javascript:;" class="f19" title="ç¾žæ¶©"></a>\n\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n            <a href="javascript:;" class="" title=""></a>\n        </div>\n    </div>\n</div>';
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/utils/facebox", function(e, t, n) {
	var i = e("/lib/jquery-1.11.3"),
		a = e("/src/scripts/utils/cursor"),
		r = e("/src/scripts/utils/tab"),
		o = e("/src/scripts/utils/utils"),
		s = {
			no: 1,
			name: "type1",
			pageCount: 2,
			faceWrap: null,
			index: 1
		},
		l = {
			no: 2,
			name: "type2",
			pageCount: 1,
			faceWrap: null,
			index: 1
		},
		c = "disabled",
		u = "faceBox-canclick",
		d = function() {
			this.elFaceBox = null, this.elInputContext = null, this.elBtn = null, this.tab = null, this.curType, this.hasInit = !1, this.timer = 0, this._init()
		};
	return d.prototype = {
		_init: function() {
			this.hasInit || (this.elFaceBox = i(e("/output/facebox/facebox").render({})), s.faceWrap = this.elFaceBox.find(".faceWrap").eq(0), l.faceWrap = this.elFaceBox.find(".faceWrap").eq(1), this.curType = s, this._resetPaging(), i("body").append(this.elFaceBox), this._eventBind())
		},
		show: function(e, t, n, a) {
			e = i(e), this.elFaceBox.filter(":visible").length > 0 && (this.hide(), this.elBtn && e[0] === this.elBtn[0]) || (this.elBtn = e, e.hasClass(u) || e.addClass(u), t && (this.elInputContext = i(t)), this._show(e, n, a), setTimeout(function() {
				e.removeClass(u)
			}, 0))
		},
		_show: function(e, t, n) {
			var i = this,
				a = arguments;
			this.timer = setTimeout(function() {
				var r = e.offset(),
					o = 0,
					s = e.outerHeight(),
					l = o + (t || 0),
					c = s + (n || 0);
				r.left = r.left + l + "px", r.top = r.top + c + "px", r.display = "block";
				var u = i.elFaceBox.css("left"),
					d = i.elFaceBox.css("top");
				(r.left != u || r.top != d) && i.elFaceBox.css(r), i._show.apply(i, Array.prototype.slice.call(a))
			}, 50)
		},
		hide: function() {
			this.elFaceBox.hide(), this.elFaceBox.css({
				left: 0,
				top: 0
			}), this.elInputContext = null, clearTimeout(this.timer), this.timer = 0
		},
		_resetPaging: function() {
			var e = this.curType,
				t = e.index,
				n = e.pageCount,
				i = this.elFaceBox.find(".prev"),
				a = this.elFaceBox.find(".next");
			1 === n ? (i.addClass(c), a.addClass(c)) : n > 1 && (1 === t ? (i.addClass(c), a.removeClass(c)) : (i.removeClass(c), t === n ? a.addClass(c) : a.removeClass(c))), e.faceWrap.find(".faceInner").removeClass("cur").eq(e.index - 1).addClass("cur"), e.faceWrap.addClass("face-p" + e.index)
		},
		_eventBind: function() {
			var e = this;
			i(document).on("click", function(t) {
				for (var n = i(t.target), a = [u], r = !0, o = 0, s = a.length; s > o; o++) {
					var l = a[o];
					n.hasClass(l) && (r = !1)
				}
				r && e.hide()
			}), e.elFaceBox.on("click", ".prev", function(t) {
				if (!i(this).hasClass(c)) {
					var n = e.curType;
					n.faceWrap.removeClass("face-p" + n.index), n.index > 1 && n.index--, e._resetPaging()
				}
			}), e.elFaceBox.on("click", ".next", function(t) {
				if (!i(this).hasClass(c)) {
					var n = e.curType;
					n.faceWrap.removeClass("face-p" + n.index), n.index < n.pageCount && n.index++, e._resetPaging()
				}
			}), e.elFaceBox.on("click", ".faceInner a", function(t) {
				var n = "[{0}]",
					r = i(this).attr("title");
				r && e.elInputContext && a.caretAfterCursor(e.elInputContext.get(0), o.strFormat(n, r))
			}), e.tab = r.init({
				tabClass: "tab-face",
				viewClass: "tabView-face",
				switchEventName: "click",
				onChangeFn: function(t, n, a) {
					switch (t) {
					case 0:
						e.curType = s;
						break;
					case 1:
						e.curType = l
					}
					e.curType.faceWrap || (e.curType.faceWrap = a), e._resetPaging(), a.find(".faceInner").removeClass("cur").eq(e.curType.index - 1).addClass("cur"), i("." + e.tab.tabClass).addClass("disabled"), n.removeClass("disabled")
				}
			})
		}
	}, d.instance = null, function() {
		return d.instance || (d.instance = new d), d.instance
	}
});
define69eea4("/src/scripts/utils/face", function(e, t, n) {
	var i = {
		"2B": "f1",
		"æš´è„¾æ°”": "f2",
		"æ†‹å±ˆ": "f3",
		"è°„åªš": "f4",
		"æŠ½è„¸": "f5",
		"æ·¡å®š": "f6",
		"å“ˆå“ˆ": "f7",
		"æ†¨": "f8",
		"çº¢ç‰Œç½šä¸‹": "f9",
		"åç¬‘å•¦": "f10",
		"é»„ç‰Œè­¦å‘Š": "f11",
		"ç‹‚å–œ": "f12",
		"ç‹‚èº": "f13",
		"æ³ªæµä¸æ­¢": "f14",
		"å–èŒ": "f15",
		"çž§ä¸ä¸Š": "f16",
		"çŸ³åŒ–": "f17",
		"æ— è¯­äº†": "f18",
		"ç¾žæ¶©": "f19",
		"å¼€å¿ƒ": "y1",
		"å¯çˆ±": "y2",
		"å‘æ€’": "y3",
		"æ“¦æ±—": "y4",
		"åç¬‘": "y5",
		"æƒŠæ": "y6",
		"æ³ªå¥”": "y7",
		"å·ç¬‘": "y8",
		"è°ƒçš®": "y9",
		"å’’éª‚": "y10",
		"å§”å±ˆ": "y11",
		"è‰²": "y12",
		"é„™è§†": "y13",
		"é—­å˜´": "y14",
		"å‘å‘†": "y15",
		"ç–²æƒ«": "y16",
		"æŠ é¼»": "y17",
		"é˜´é™©": "y18",
		"æ™•": "y19",
		"æŠ“ç‹‚": "y20",
		"å": "y21",
		"å¥‹æ–—": "y22",
		"å°´å°¬": "y23",
		"é¼“æŽŒ": "y24",
		"æ‰“çžŒç¡": "y25",
		"å¤§ç¬‘": "y26",
		"å¾—æ„": "y27",
		"æƒŠè®¶": "y28",
		"å†·æ±—": "y29",
		"ç–‘é—®": "y30",
		"å˜˜": "y31",
		"äº²äº²": "y32",
		"å›°": "y33",
		"å“¼": "y34",
		"æ„£": "y35",
		"æ‰®é…·": "y36",
		"å³å“¼å“¼": "y37",
		"å·¦å“¼å“¼": "y38",
		"è‹¦é€¼": "y39",
		"è‹¦æ¶©": "y40",
		"å¯æ€œ": "y41",
		"çžŸ": "y42",
		"å†·é…·": "y43",
		"è¡°": "y44",
		"éª·é«…": "y45",
		"èˆ”": "y46",
		"é¡¶": "y47",
		"è¸©": "y48",
		"æ•²æ‰“": "y49",
		"å¿ƒç¢Ž": "y50",
		"æ¡æ‰‹": "y51",
		"èƒœåˆ©": "y52",
		"é€Š": "y53",
		"æ‰“ä½": "y54",
		"èœåˆ€": "y55",
		"æ‰‹é›·": "y56",
		"ä¾¿ä¾¿": "y57",
		"ç¯®çƒ": "y58",
		"è¶³çƒ": "y59",
		"é—ªç”µ": "y60",
		"åŠ›é‡": "y61",
		"çŒªå¤´": "y62",
		"ä¹’ä¹“çƒ": "y63"
	};
	return {
		renderFaceIcon: function(e) {
			var t = e.match(/\[\S+?\]/g),
				n = "",
				a = "",
				r = "";
			if (t && t.length > 0) for (var o = 0, s = t.length; s > o; o++) n = t[o].replace(/[\[\]]/g, ""), a = i[n], a && (r = '<a class="face-icon ' + a + '" title="' + n + '"></a>', e = e.replace(t[o], r));
			return e
		}
	}
});
define69eea4("/src/scripts/utils/placeHolder", function(e, t, n) {
	$.fn.extend({
		placeHolder: function() {
			var e = "placeholder" in document.createElement("input");
			$.placeHolder = {};
			var t = function(e, t) {
					var n = e.css("color"),
						i = t.info || "ä¾‹å¦‚",
						a = function() {
							("" === e[0].value || e[0].value === i) && (e.addClass("placeholder"), e.css("color", t.color || "#999999"), e[0].value = i)
						},
						r = function() {
							e.removeClass("placeholder"), e.css("color", n)
						};
					a(), e.bind("focus.clearIt", function() {
						e[0].value === i && (e[0].value = "")
					}), e.bind("blur.restoreIt", function() {
						a()
					}), e.val = function() {
						return 0 === arguments.length ? e.holded() ? "" : $.fn.val.apply(e, arguments) : void("" === arguments[0] || null === arguments[0] ? (e[0].value = "", a()) : (r(), $.fn.val.apply(e, arguments)))
					}, e.bind("keydown", function() {
						e.css("color", n)
					}), e.bind("check", function() {
						e.css("color", n)
					}), e.holded = function() {
						return e.attr("placeholder") === e[0].value && e.hasClass("placeholder")
					}
				};
			return function(n) {
				if (0 !== this.size()) {
					var i = this,
						a = this[0];
					a.form && $(a.form).submit(function() {
						$(a).hasClass("placeholder") && a.value == $(a).attr("placeholder") && (a.value = "")
					}), $.placeHolder[i.selector] = i, i.attr("placeholder", n.info || "ä¾‹å¦‚"), e || t(i, n)
				}
			}
		}()
	})
});
define69eea4("/output/subcomment-list/subcomment-list", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) {
				var commentid = comment.id ? comment.id : comment.commentid,
					replyuser = comment.replyuser ? comment.replyuser : "";
				htmlCode += '\n<li class="subcomment-item clear" id="', htmlCode += "comcon_" + commentid, htmlCode += '">\n    <div class="subComment reportTarget clear">', comment.userinfo.head ? (htmlCode += '\n        <img src="', htmlCode += comment.userinfo.head, htmlCode += '">') : htmlCode += '\n        <img src="http://mat1.gtimg.com/sports/kbsweb/statics/defaultUser_c5b594.png">', htmlCode += '\n        <span class="userNick">', htmlCode += comment.userinfo.nick, htmlCode += '</span>\n        <span class="reply-nick">', htmlCode += replyuser, htmlCode += '</span>:\n        <span class="sub-comment-content">', htmlCode += comment.content, htmlCode += '</span>\n        <div class="date-reply-wrapper">\n            <span class="report hidden cursor">ä¸¾æŠ¥</span>\n            <span class="reply_date">', htmlCode += comment.timeDifference.replace(/:\d\d$/, ""), htmlCode += '</span>\n            <span class="subreply cursor" data-id="', htmlCode += commentid, htmlCode += '">å›žå¤</span>\n        </div>\n    </div>\n</li>'
			}
			return htmlCode
		}
	}
});
define69eea4("/output/comment-list/comment-list", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/src/scripts/utils/qqlogin"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) {
				var commentid = comment.id ? comment.id : comment.commentid,
					orireplynum = 0 != comment.orireplynum ? "(" + comment.orireplynum + ")" : "",
					upnum = 0 != comment.up ? "(" + comment.up + ")" : "";
				htmlCode += '\n<li class="comment-item clear" id="', htmlCode += "comcon_" + commentid, htmlCode += '">\n    <div class="superComment clear reportTarget">\n        <div class="user_info">', comment.userinfo.head ? (htmlCode += '\n            <img class="comment_gravator" src="', htmlCode += comment.userinfo.head, htmlCode += '">') : htmlCode += '\n            <img class="comment_gravator" src="http://mat1.gtimg.com/sports/kbsweb/statics/defaultUser_c5b594.png">', comment.tagself > 0 && (htmlCode += '\n            <img src="', htmlCode += 1 == comment.tagself ? comment.leftBadge : comment.rightBadge, htmlCode += '" class="team_gravator">'), htmlCode += '\n            <span class="nick">', htmlCode += comment.userinfo.nick, htmlCode += '</span>\n            <span class="post_date">', htmlCode += comment.timeDifference.replace(/:\d\d$/, ""), htmlCode += '</span>\n            <span class="report hidden cursor">ä¸¾æŠ¥</span>\n        </div>\n        <div class="comment_content">', htmlCode += comment.content, htmlCode += '</div>\n        <div class="reply cursor boss eventBtn" data-action="ç•™è¨€ç‚¹å›žå¤" data-extra="', htmlCode += commentid, htmlCode += '" data-id="', htmlCode += commentid, htmlCode += '" data-repnum="', htmlCode += comment.orireplynum, htmlCode += '">å›žå¤', htmlCode += orireplynum, htmlCode += '</div>\n        <div class="like cursor eventBtn" id="', htmlCode += "like_" + commentid, htmlCode += '" data-up="', htmlCode += comment.up, htmlCode += '">\n            <span class="zan boss" data-action="ç•™è¨€ç‚¹èµž" data-extra="', htmlCode += commentid, htmlCode += '">èµž</span>\n            <span class="like_num">', htmlCode += upnum, htmlCode += '</span>\n        </div>\n        <div class="comment_systemTips like_systemTips"></div>\n    </div>\n    <div  class="reply_content hidden ', htmlCode += "rc_" + commentid, htmlCode += '">\n        <span class="arrow"></span>\n        <div class="myreply clear">\n            <textarea rows="2" name="content" id="', htmlCode += "mySuperReply_" + commentid, htmlCode += '"></textarea>\n            <div class="comment_submit mySuperReply cursor boss" data-action="ç•™è¨€å‘å›žå¤">å‘è¡¨</div>\n            <div class="smile_mod">\n                <button class="comment_face cursor">\n                    <span class="arrow"></span>\n                </button>\n            </div>\n            <div class="comment_systemTips"></div>\n        </div>\n        <div class="subCommentList">\n            <div class="myreply clear hidden">\n                <textarea rows="2" name="content" class="shareMyReply"></textarea>\n                <span class="replyTo">test</span>\n                <div class="comment_submit mySubReply cursor boss" data-action="ç•™è¨€å‘å›žå¤">å‘è¡¨</div>\n                <div class="smile_mod">\n                    <button class="comment_face cursor">\n                        <span class="arrow"></span>\n                    </button>\n                </div>\n                <div class="comment_systemTips"></div>\n            </div>\n            <ul></ul>\n        </div>\n    </div>\n</li>'
			}
			return htmlCode
		}
	}
});
define69eea4("/output/comment-user/comment-user", function(require, exports, module) {
	require("/src/scripts/utils/qqlogin"), require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div class="user_info">\n    <img src="http://mat1.gtimg.com/sports/kbsweb/statics/defaultUser_c5b594.png" class="comment_gravator">\n    <img src="" class="team_gravator" style="display: none;" id="pre-post-commentsupportTeam">\n    <span class="comment_username nick"></span>\n</div>\n<div class="mypoint  clear">\n    <span class="arrow-in arrow"></span>\n    <span class="arrow-out arrow"></span>\n    <textarea rows="1" id="sharemypoint" class="stopslidedown" name="content"></textarea>\n    <div class="comment_submit cursor stopslidedown boss" data-action="ç•™è¨€å‘è¡¨">å‘è¡¨</div>\n    <div class="smile_mod">\n        <button class="comment_face cursor stopslidedown">\n            <span class="arrow"></span>\n        </button>\n    </div>\n    <div class="comment_systemTips"></div>\n</div>';
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/comment", function(e, t, n) {
	e("/lib/kEvent");
	var i = e("/src/scripts/utils/facebox")(),
		a = e("/src/scripts/utils/qqlogin"),
		r = e("/lib/jquery-1.11.3"),
		o = (e("/src/scripts/utils/utils"), e("/src/scripts/utils/cursor")),
		s = e("/src/scripts/utils/face").renderFaceIcon,
		l = "http://mat1.gtimg.com/sports/sportAppWeb/img/defaultTeam.png",
		c = "http://mat1.gtimg.com/sports/sportAppWeb/dcimg/defaultUser.png",
		u = l,
		d = l,
		p = "",
		h = null,
		f = null,
		m = !0,
		g = "http://kbs.coral.qq.com/article/",
		v = (e("/src/scripts/utils/placeHolder"), {
			targetid: "",
			reqnum: 50,
			tag: "",
			appid: 10006,
			userinfo: {
				head: c,
				nick: "æˆ‘"
			}
		}),
		y = function() {
			r(".pre-post-comment").on("click", ".reply", function() {
				var e = r(this).data("id"),
					t = r(".rc_" + e);
				t.is(":hidden") ? (r(".comment-item .reply_content").slideUp(), p = "", r(".comment-item .reply").each(function() {
					r(this).html("å›žå¤" + (0 != r(this).data("repnum") ? "(" + r(this).data("repnum") + ")" : ""))
				}), t.find(".subCommentList .myreply").hide(), t.slideDown(), r(this).html("æ”¶èµ·å›žå¤")) : (t.slideUp(), r(this).html("å›žå¤" + (0 != r(this).data("repnum") ? "(" + r(this).data("repnum") + ")" : "")))
			})
		},
		b = function(e, t) {
			var n = r(".success_tips"),
				i = e.offset(),
				a = r(".pre-post-comment").offset(),
				o = i.left - a.left + parseInt(e.innerWidth()) / 2,
				s = i.top - a.top + parseInt(e.innerHeight()) / 2;
			n.css({
				left: o,
				top: s
			}).html(t), n.fadeIn("400"), setTimeout(function() {
				n.fadeOut("400", function() {
					"sharemypoint" === e.attr("id") ? _() : e.hasClass("shareMyReply") && e.parents(".myreply").hide()
				})
			}, 1e3)
		},
		C = function(e, t) {
			var n = e.find(".comment_systemTips");
			n.html(t).fadeIn("400"), setTimeout(function() {
				n.fadeOut("400")
			}, 1e3)
		},
		x = function() {
			r(".pre-post-comment").on("click", ".comment_face", function() {
				var e = r(this);
				return a.needLogin().then(function() {
					var t = e.parent().parent().find("textarea");
					"sharemypoint" === t.attr("id") && w(), i.show(e, t, -20, 10), e.find("span").hasClass("slideDown") ? e.find("span").removeClass("slideDown") : (r(".slideDown").removeClass("slideDown"), e.find("span").addClass("slideDown"))
				}), !1
			})
		},
		w = function() {
			var e = r("#sharemypoint");
			e.animate({
				height: "60px"
			}, function() {
				j("comment")
			})
		},
		_ = function() {
			var e = r("#sharemypoint");
			e.animate({
				height: "30px"
			})
		},
		k = function(e, t) {
			!/\S+/.test(t) || t.length <= 0 ? C(e, "å†…å®¹ä¸èƒ½ä¸ºç©ºï¼") : t.length > 1e3 ? C(e, "å­—æ•°è¶…è¿‡é™åˆ¶ï¼") : (r("#pre-post-commentform #comment_content").val(t), r("#pre-post-commentform").submit())
		},
		T = function(e, t) {
			var n = {
				14: "è¯·å‹¿é‡å¤å‘å¸ƒï¼",
				12: "è¯·å‹¿é¢‘ç¹æ“ä½œï¼",
				13: "ç¦æ­¢è¯„è®ºï¼",
				9: "ç”¨æˆ·é»‘åå•ï¼"
			};
			8 == t ? userLogin() : C(e, n[t] || "ç³»ç»Ÿé”™è¯¯ï¼Œè¯·ç¨åŽé‡è¯•ï¼")
		},
		S = function(e) {
			var t = 2013;
			if (e) for (var n = 0, i = e.length; i > n; n++) t += (t << 5) + e.charCodeAt(n);
			return 2147483647 & t
		},
		j = function(e, t) {
			"comment" === e ? (r("#pre-post-comment_type").val("2"), r("#pre-post-commenttaghost").val(r("#pre-post-commenttagself").val()), r("#pre-post-commentform").attr("action", g + "comment/" + (t ? "to/" + t : "")), r("#pre-post-commentcallback").val("parent.commentSubmitCallback")) : "report" === e && (r("#pre-post-comment_type").val(""), r("#pre-post-comment_commentid").val(t), r("#pre-post-commentcallback").val("parent.reportSubmitCallback"), r("#pre-post-commentform").attr("action", "http://kbs.coral.qq.com/report/comment/0"))
		};
	window.reportSubmitCallback = function(e) {
		b(f, "ä¸¾æŠ¥æˆåŠŸï¼")
	}, window.commentSubmitCallback = function(t) {
		if (0 == t.errCode) {
			h.val("");
			var n = t.data.parent,
				i = r(".pre-post-comment .comment_all");
			if (r.extend(t.data, {
				userinfo: v.userinfo,
				tagself: r("#pre-post-commenttagself").val(),
				content: s(t.data.content),
				timeDifference: "åˆšåˆš"
			}), t.data.content = s(t.data.content), "0" != n) {
				i = r("#comcon_" + n + " ul"), i.length <= 0 && (i = r("#comcon_" + n).parent("ul"), t.data.replyuser = " " + p.replace(/:$/, "")), i.prepend(e("/output/subcomment-list/subcomment-list").render({
					comment: t.data
				}));
				var a = i.parents(".comment-item").find(".reply");
				a.data("repnum", a.data("repnum") + 1)
			} else i.prepend(e("/output/comment-list/comment-list").render({
				comment: r.extend(t.data, {
					leftBadge: u,
					rightBadge: d,
					orireplynum: 0,
					up: 0
				})
			})), r(".comment_all").removeClass("shafa");
			b(h, "å‘è¡¨æˆåŠŸï¼")
		} else T(h.parent(), t.errCode)
	};
	var E = function(t) {
			var n = "";
			t.forEach(function(t) {
				"" !== t.content && (t.content = s(t.content), t.leftBadge = u, t.rightBadge = d, t.userinfo.nick = r.trim(t.userinfo.nick.replace(/</, "&lt;").replace(/>/, "&gt;")), "0" === t.parent ? (n = t.id, r(".pre-post-comment .comment_all").append(e("/output/comment-list/comment-list").render({
					comment: t
				}))) : (t.replyuser = r.trim(t.replyuser.replace(/</, "&lt;").replace(/>/, "&gt;")), t.replyuser = t.parent !== n ? " å›žå¤ " + t.replyuser : "", r(".pre-post-comment .comment_all li:last-child ul").append(e("/output/subcomment-list/subcomment-list").render({
					comment: t
				}))))
			})
		},
		I = function(e, t, n, i) {
			r(".comment_loading").show(), r.ajax({
				url: g + e + "/comment?&commentid=" + t + "&reqnum=" + n + "&tag=" + i + "&source=5",
				dataType: "jsonp",
				jsonpCallback: "commentCallback",
				success: function(e) {
					if (r(".comment_loading").hide(), 0 == e.errCode) {
						for (var t = e.data.commentid, n = t.length, i = n - 1; i >= 0; i--) if ("0" === t[i].parent) {
							t[i].rep > n - 1 - i && (t = t.slice(0, i));
							break
						}
						E(t);
						var a = r(".pre-post-comment .comment_all li").length;
						(0 == e.total || 0 >= a) && r(".comment_all").addClass("shafa"), !e.data.hasnext && a > 0 && (m = !1, r(".no_more").show())
					}
				}
			})
		},
		q = function() {
			r(window).scroll(function() {
				if (m && r(document).scrollTop() + r(window).height() >= r(document).height()) {
					var e = r(".comment_all li:eq(-1)").attr("id");
					e && I(v.targetid, e.split("_")[1], v.reqnum, v.tag)
				}
			})
		},
		D = function(e) {
			if (v.userinfo.head = e.avatar ? e.avatar : c, v.userinfo.nick = r.trim(e.nick.replace(/</, "&lt;").replace(/>/, "&gt;")), r(".comment_self .comment_gravator").attr("src", v.userinfo.head), r(".comment_self .comment_username").html(v.userinfo.nick), "wx" === e.mainLogin) r("#pre-post-commentg_tk").val(S(e.access_token)), r("#pre-post-commentaccesstoken").val(e.access_token), r("#pre-post-commentappid").val(e.appid), r("#pre-post-commentopenid").val(e.openid), r("#pre-post-commentlogintype").val(1);
			else {
				var t = r.cookie("skey");
				r("#pre-post-commentg_tk").val(S(t ? t : r.cookie("lskey")))
			}
		};
	ke("login").on("loginSuccess", function(e) {
		D(e)
	}), ke("login").on("logout", function() {
		r(".comment_self .comment_gravator").attr("src", c), r(".comment_self .comment_username").html(""), r("#pre-post-commentg_tk").val(""), r("#pre-post-commentopenid").val(""), r("#pre-post-commentaccesstoken").val(""), r("#pre-post-commentlogintype").val("")
	}), ke("support").on("support", function(e) {
		N(e)
	});
	var N = function(e) {
			"left" === e ? (r("#pre-post-commentsupportTeam").attr("src", u).show(), r("#pre-post-commenttagself").val(1)) : "right" === e ? (r("#pre-post-commentsupportTeam").attr("src", d).show(), r("#pre-post-commenttagself").val(2)) : (r("#pre-post-commentsupportTeam").attr("src", "").hide(), r("#pre-post-commenttagself").val(0))
		},
		L = function() {
			window.supportInfo && N(window.supportInfo)
		};
	r(function() {
		r("#faceBox, #faceBox *").addClass("stopslidedown"), r(".pre-post-comment").on("focus", ".myreply textarea", function() {
			a.needLogin()
		}), r(".pre-post-comment").on("mouseenter", ".superComment, .subComment", function() {
			r(this).find(".report").show()
		}), r(".pre-post-comment").on("mouseleave", ".superComment, .subComment", function() {
			r(this).find(".report").hide()
		})
	});
	var B = function(e) {
			e.off("scroll"), e.on("scroll", function() {
				r(this).siblings(".replyTo").css("top", -(r(this).scrollTop() - 1) + "px")
			})
		};
	return {
		render: function(t) {
			r(".pre-post-comment .comment_self").html(e("/output/comment-user/comment-user").render()), r("#sharemypoint").placeHolder({
				info: "åˆ†äº«ä½ çš„çœ‹æ³•"
			}), t.targetId && (u = t.leftBadge, d = t.rightBadge, v.targetid = t.targetId, r("#pre-post-commentappid").val(v.appid), r("#pre-post-commenttargetid").val(v.targetid), I(v.targetid, 0, v.reqnum, v.tag), a.getUserInfo(function(e) {
				e.isLogin && D(e)
			}))
		},
		init: function() {
			x(), L(), r("body").on("click", function(e) {
				/stopslidedown/.test(e.target.className) || _(), /faceBox-canclick/.test(e.target.className) || r(".pre-post-comment .slideDown").removeClass("slideDown")
			}), y(), q(), r(".pre-post-comment").on("mousedown", "#sharemypoint", function() {
				a.needLogin().then(function() {
					w()
				})
			}), r(".pre-post-comment").on("click", ".like", function() {
				var e = r(this);
				if (!e.data("hasSupport")) {
					var t = this.id.split("_")[1],
						n = g + "comment/up/to/" + t,
						i = {
							targetid: v.targetid
						};
					"wx" === a.getLoginType() && (r.extend(i, a.getWxLoginCookie()), i.logintype = 1), r.ajax({
						url: n,
						dataType: "jsonp",
						data: i,
						success: function(t) {
							e.addClass("supported").data("hasSupport", "true"), e.find(".like_num").html("(" + (e.data("up") + 1) + ")"), e.find(".zan").html("å·²èµž")
						}
					})
				}
			}), r(".pre-post-comment").on("click", ".subreply", function() {
				var e = r(this).parents(".subCommentList").find(".myreply"),
					t = r(this).parents(".subcomment-item");
				e.appendTo(t).show(), e = t.find("textarea").val(""), p = r.trim("å›žå¤ " + t.find(".userNick").html() + " :");
				var n = e.siblings(".replyTo");
				n.html(p), e.css("text-indent", n.width() + "px"), B(e), o.setCursorPosition(e[0], e.val().length)
			}), r(".mypoint .comment_submit").on("click", function() {
				var e = r(this);
				a.needLogin().then(function() {
					var t = r.placeHolder["#sharemypoint"].val();
					j("comment"), k(r(".pre-post-comment .mypoint"), t), h = e.parent().find("textarea")
				})
			}), r(".pre-post-comment").on("click", ".myreply .comment_submit", function() {
				var e = r(this);
				a.needLogin().then(function() {
					var t = e.parents(".myreply").find("textarea"),
						n = r.trim(t.val()),
						i = e.parents("li").eq(0).attr("id").split("_")[1];
					j("comment", i), k(e.parents(".myreply"), n), h = t
				})
			}), r(".pre-post-comment").on("click", ".report", function() {
				var e = r(this).parents(".subcomment-item").length > 0 ? r(this).parents(".subcomment-item") : r(this).parents(".comment-item"),
					t = e.attr("id").split("_")[1];
				j("report", t), f = r(this).parents(".reportTarget"), r("#pre-post-commentform").submit()
			})
		}
	}
});
define69eea4("/src/scripts/utils/additionalMenu", function(e, t, n) {
	var i = e("/lib/jquery-1.11.3"),
		a = i("#goTop"),
		r = i("#goEdit,#goReply"),
		o = i(window),
		s = {
			scrollDistance: 300,
			disappearTime: 600
		},
		l = function() {
			o.scrollTop() >= s.scrollDistance ? a.css("display", "block") : a.hide()
		},
		c = function() {
			o.scroll(function() {
				l()
			})
		},
		u = function() {
			a.click(function() {
				i("body, html").animate({
					scrollTop: 0
				}, s.disappearTime)
			})
		},
		d = 200,
		p = function() {
			r.click(function() {
				i(document).trigger("additional:goEdit")
			})
		};
	i(document).on("additional:goEdit", function() {
		var e = i("#post-content");
		if (e.length > 0) {
			var t = i("#post-content").offset().top - d;
			i("body, html").animate({
				scrollTop: t
			}, s.disappearTime), i("#post-content").focus()
		}
	});
	var h = function(e) {
			i.extend(s, e), l(), c(), u(), p()
		};
	return {
		init: h
	}
});
define69eea4("/output/related-game/related-game", function(require, exports, module) {
	var _g = (require("/lib/jsonselect"), require("/src/scripts/ui/global")),
		tpHelper = (require("/src/scripts/utils/utils"), require("/lib/tpHelper"));
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data;
			_data = ("undefined" != typeof ___kkit___ ? ___kkit___.tph : tpHelper).mixin(_data, {
				scoreClass: function(e) {
					var t = _g.gamePeriod.PRE_GAME,
						n = _g.gamePeriod.IN_GAME;
					_g.gamePeriod.POST_GAME;
					switch (e) {
					case t:
						return "gray";
					case n:
						return "redBj";
					default:
						return "blue"
					}
				},
				substrData: function(e) {
					var t = e.substr(5, 5),
						n = e.substr(11, 5);
					return {
						day: t,
						hours: n
					}
				},
				timeStamp: function(e) {
					var t = _g.gamePeriod.PRE_GAME;
					return e == t ? !0 : !1
				}
			});
			var htmlCode = "";
			with(_data || {}) {
				htmlCode += '';
				var gameList = _data;
				htmlCode += '\n<div id="related-game">\n    <h2>ç›¸å…³æ¯”èµ›</h2>\n    <div class="game-list">';
				for (var i = 0; i < gameList.length; i++) htmlCode += '\n        <div class="team-content">\n            <a class="boss" href="./game.htm?mid=', htmlCode += gameList[i].mid, htmlCode += '" target="_blank" data-action="ç›¸å…³æ¯”èµ›">\n                <div class="team-left">', gameList[i].leftBadge && (htmlCode += '\n                    <img src="', htmlCode += gameList[i].leftBadge, htmlCode += '">'), htmlCode += "\n                    <span>", htmlCode += gameList[i].leftName, htmlCode += '</span>\n                </div>\n                <div class="team-score">\n                    <p class="score-num ', htmlCode += scoreClass(gameList[i].matchPeriod), htmlCode += '">', timeStamp(gameList[i].matchPeriod) ? htmlCode += "\n                        <span>-</span>" : (htmlCode += "\n                        <span>", htmlCode += gameList[i].leftGoal, htmlCode += "</span><span>-</span><span>", htmlCode += gameList[i].rightGoal, htmlCode += "</span>"), htmlCode += '\n                    </p>\n\n                    <p class="score-content"><span>', htmlCode += substrData(gameList[i].startTime).day, htmlCode += "</span><span>", htmlCode += substrData(gameList[i].startTime).hours, htmlCode += '</span>\n                    </p>\n                </div>\n                <div class="team-right">', gameList[i].leftBadge && (htmlCode += '\n                    <img src="', htmlCode += gameList[i].rightBadge, htmlCode += '">'), htmlCode += "\n                    <span>", htmlCode += gameList[i].rightName, htmlCode += "</span>\n                </div>", gameList[i].isPay && "0" !== gameList[i].isPay && (htmlCode += '\n                    <div class="vip-flag">ä¼šå‘˜</div>'), htmlCode += "\n            </a>\n        </div>";
				htmlCode += "\n    </div>\n</div>"
			}
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/relatedGame", function(e, t, n) {
	var i = e("/src/scripts/ui/global"),
		a = i.getParams();
	e("/lib/kEvent");
	t.render = function() {
		$.ajax({
			url: window.GAME_SERVER + "/kbs/relatedMatch",
			dataType: "jsonp",
			jsonpCallback: "relatedMatchCallback",
			data: {
				mid: a.mid
			}
		}).done(function(t) {
			if (0 === t.code) {
				var n = t.data;
				n && 0 !== n.length && $(".relatedGame-placeholder").replaceWith(e("/output/related-game/related-game").render(n))
			}
		})
	}
});
define69eea4("/output/news/news", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) {
				htmlCode += '';
				var newsList = _data;
				htmlCode += '\n<div id="news">\n    <h2>ç›¸å…³èµ„è®¯</h2>\n    <div class="news-list">';
				for (var i = 0; i < newsList.length; i++) htmlCode += '\n        <a class="boss" href="', htmlCode += newsList[i].url, htmlCode += '" target="_blank" title="', htmlCode += newsList[i].title, htmlCode += '"\n           data-action="ç›¸å…³èµ„è®¯"\n           data-extra="', htmlCode += newsList[i].url, htmlCode += '">\n            <dl>\n                <dt><img src="', htmlCode += newsList[i].imgurl, htmlCode += '"></dt>\n                <dd>\n                    <div class="news-title">\n                        <p>', htmlCode += newsList[i].title, htmlCode += "</p>\n                    </div>\n                    <span>", htmlCode += newsList[i].pub_time.substr(0, 10), htmlCode += "</span>\n                </dd>\n            </dl>\n        </a>";
				htmlCode += "\n    </div>\n</div>"
			}
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/news", function(e, t, n) {
	var i = e("/src/scripts/ui/global"),
		a = i.getParams();
	e("/lib/kEvent");
	t.render = function() {
		$.ajax({
			url: window.GAME_SERVER + "/kbs/matchNews",
			dataType: "jsonp",
			jsonpCallback: "relatedNewsCallback",
			data: {
				mid: a.mid
			}
		}).done(function(t) {
			if (0 === t.code) {
				var n = t.data;
				n && 0 !== n.length && $(".news-placeholder").replaceWith(e("/output/news/news").render(n))
			}
		})
	}
});
define69eea4("/lib/jquery.lazyload", function(e, t, n) {
	var i = e("/lib/jquery-1.11.3"),
		a = i(window);
	i.fn.lazyload = function(e) {
		function t() {
			var e = 0;
			r.each(function() {
				var t = i(this);
				if (!o.skip_invisible || t.is(":visible")) if (i.abovethetop(this, o) || i.leftofbegin(this, o));
				else if (i.belowthefold(this, o) || i.rightoffold(this, o)) {
					if (++e > o.failure_limit) return !1
				} else t.trigger("appear"), e = 0
			})
		}
		var n, r = this,
			o = {
				threshold: 0,
				failure_limit: 0,
				event: "scroll",
				effect: "show",
				container: window,
				data_attribute: "original",
				skip_invisible: !1,
				appear: null,
				load: null,
				placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
			};
		return e && (void 0 !== e.failurelimit && (e.failure_limit = e.failurelimit, delete e.failurelimit), void 0 !== e.effectspeed && (e.effect_speed = e.effectspeed, delete e.effectspeed), i.extend(o, e)), n = void 0 === o.container || o.container === window ? a : i(o.container), 0 === o.event.indexOf("scroll") && n.bind(o.event, function() {
			return t()
		}), this.each(function() {
			var e = this,
				t = i(e);
			e.loaded = !1, (void 0 === t.attr("src") || t.attr("src") === !1) && t.is("img") && t.attr("src", o.placeholder), t.one("appear", function() {
				if (!this.loaded) {
					if (o.appear) {
						var n = r.length;
						o.appear.call(e, n, o)
					}
					i("<img />").bind("load", function() {
						var n = t.attr("data-" + o.data_attribute);
						t.hide(), t.is("img") ? t.attr("src", n) : t.css("background-image", "url('" + n + "')"), t[o.effect](o.effect_speed), e.loaded = !0;
						var a = i.grep(r, function(e) {
							return !e.loaded
						});
						if (r = i(a), o.load) {
							var s = r.length;
							o.load.call(e, s, o)
						}
					}).attr("src", t.attr("data-" + o.data_attribute))
				}
			}), 0 !== o.event.indexOf("scroll") && t.bind(o.event, function() {
				e.loaded || t.trigger("appear")
			})
		}), a.bind("resize", function() {
			t()
		}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && a.bind("pageshow", function(e) {
			e.originalEvent && e.originalEvent.persisted && r.each(function() {
				i(this).trigger("appear")
			})
		}), i(document).ready(function() {
			t()
		}), this
	}, i.belowthefold = function(e, t) {
		var n;
		return n = void 0 === t.container || t.container === window ? (window.innerHeight ? window.innerHeight : a.height()) + a.scrollTop() : i(t.container).offset().top + i(t.container).height(), n <= i(e).offset().top - t.threshold
	}, i.rightoffold = function(e, t) {
		var n;
		return n = void 0 === t.container || t.container === window ? a.width() + a.scrollLeft() : i(t.container).offset().left + i(t.container).width(), n <= i(e).offset().left - t.threshold
	}, i.abovethetop = function(e, t) {
		var n;
		return n = void 0 === t.container || t.container === window ? a.scrollTop() : i(t.container).offset().top, n >= i(e).offset().top + t.threshold + i(e).height()
	}, i.leftofbegin = function(e, t) {
		var n;
		return n = void 0 === t.container || t.container === window ? a.scrollLeft() : i(t.container).offset().left, n >= i(e).offset().left + t.threshold + i(e).width()
	}, i.inviewport = function(e, t) {
		return !(i.rightoffold(e, t) || i.leftofbegin(e, t) || i.belowthefold(e, t) || i.abovethetop(e, t))
	}, i.extend(i.expr[":"], {
		"below-the-fold": function(e) {
			return i.belowthefold(e, {
				threshold: 0
			})
		},
		"above-the-top": function(e) {
			return !i.belowthefold(e, {
				threshold: 0
			})
		},
		"right-of-screen": function(e) {
			return i.rightoffold(e, {
				threshold: 0
			})
		},
		"left-of-screen": function(e) {
			return !i.rightoffold(e, {
				threshold: 0
			})
		},
		"in-viewport": function(e) {
			return i.inviewport(e, {
				threshold: 0
			})
		},
		"above-the-fold": function(e) {
			return !i.belowthefold(e, {
				threshold: 0
			})
		},
		"right-of-fold": function(e) {
			return i.rightoffold(e, {
				threshold: 0
			})
		},
		"left-of-fold": function(e) {
			return !i.rightoffold(e, {
				threshold: 0
			})
		}
	})
});
define69eea4("/output/topicsList/topicsList", function(require, exports, module) {
	var tpHelper = require("/lib/tpHelper"),
		kDate = require("/src/scripts/utils/kDate"),
		face = require("/src/scripts/utils/face"),
		boss = require("/src/scripts/utils/boss"),
		_g = require("/src/scripts/ui/global");
	module.exports = {
		init: function() {
			var e = require("/lib/jquery-1.11.3");
			require("/lib/jquery.lazyload"), e(function() {
				setTimeout(function() {
					e("img.lazy").lazyload()
				}, 0), e("img.lazy").load(function() {
					var t = this.width,
						n = this.height,
						i = this.src,
						a = 120,
						r = 90;
					e(this).parent().hasClass("onePic") && (a = 240, r = 180), -1 == i.indexOf("placeholder") && (.75 * t == n ? this.style.width = a + "px" : .75 * t > n ? (this.style.height = r + "px", this.style.marginLeft = "-" + (t / n * r - a) / 2 + "px") : (this.style.width = a + "px", this.style.marginTop = "-" + (n / t * a - r) / 2 + "px"))
				})
			}), e(".moduleName").click(function(t) {
				boss.triggerEventReport({
					mod: "å¸–å­åˆ—è¡¨",
					action: "åœˆå­é“¾æŽ¥",
					_mid: e(this).attr("moduleid")
				}), t.stopPropagation()
			}), e(".margin24").click(function() {
				window.open(e(this).attr("href"))
			})
		},
		render: function(data) {
			function DataLength(e) {
				for (var t = 0, n = 0; n < e.length; n++) t += e.charCodeAt(n) < 0 || e.charCodeAt(n) > 255 ? 2 : 1;
				return t
			}
			data.htmlDecode = function(e) {
				var t = document.createElement("div");
				t.innerHTML = e;
				var n = t.innerText || t.textContent;
				return t = null, n
			};
			var _data = data,
				htmlCode = "";
			with(_data || {}) {
				htmlCode += '';
				var sub = function(e, t) {
						var n = /[^\x00-\xff]/g;
						if (e.replace(n, "mm").length <= t) return e;
						for (var i = Math.floor(t / 2), a = i; a < e.length; a++) if (e.substr(0, a).replace(n, "mm").length >= t) return e.substr(0, a) + "...";
						return e
					};
				htmlCode += "\n";
				for (var userMsg, msgPics, i = 0, ii = _data.length; ii > i; i++) {
					if (userMsg = _data[i].user, msgPics = _data[i].images, htmlCode += '\n<li id="', htmlCode += _data[i].id, htmlCode += '" class="margin24 boss"\n    data-mod="å¸–å­åˆ—è¡¨"\n    data-action="å¸–å­é“¾æŽ¥"\n    data-mid="', htmlCode += _data[i].moduleIds, htmlCode += '"\n    data-_mid="', htmlCode += _data[i].moduleIds, htmlCode += '"\n    data-tid="', htmlCode += _data[i].id, htmlCode += '"\n    href="/fans/post.htm?id=', htmlCode += _data[i].id, htmlCode += "&mid=", htmlCode += _data[i].moduleIds, htmlCode += '#1">\n                                                                                                        \n        <div class="userPic">', userMsg.avatar ? (htmlCode += '\n            <img height="40px" width="40px" src="', htmlCode += userMsg.avatar, htmlCode += '" alt=""/>') : htmlCode += '\n            <img height="40px" width="40px" src="http://mat1.gtimg.com/sports/kbsweb/statics/default_31d8db.png" alt=""/>', htmlCode += '\n            <img class="imgCover" src="http://mat1.gtimg.com/sports/kbsweb/statics/head_9253c5.png"></div>\n        <div class="userBox">\n            <div class="user_status">\n                <span class="praise_icon"></span>', htmlCode += _data[i].supportNum ? _data[i].supportNum > 999 ? "999+" : _data[i].supportNum : "0", htmlCode += '<span\n                    class="place"></span>\n                <span class="comment_icon"></span>', htmlCode += _data[i].replyNum ? _data[i].replyNum > 999 ? "999+" : _data[i].replyNum : "0", htmlCode += '\n            </div>\n            <div class="userName"><strong>', htmlCode += tpHelper.html.escape(userMsg.name), htmlCode += '</strong></div>\n            <div class="msgTime">', htmlCode += kDate(1e3 * _data[i].createTime).format("yyyy-MM-dd hh:mm"), htmlCode += '</div>\n        </div>\n        <div class="msgBox">', _data.showFollowed && _data[i].followed) htmlCode += '\n            <div class="msgTit"><i class="title_icon iconf"></i>', htmlCode += tpHelper.html.escape(_data[i].title), htmlCode += "</div>";
					else if ("ksf" == _data[i].flag) htmlCode += '\n            <div class="msgTit"><i class="title_icon iconk"></i>', htmlCode += tpHelper.html.escape(_data[i].title), htmlCode += "</div>";
					else if (8 & _data[i].status) htmlCode += '\n            <div class="msgTit"><i class="title_icon icon8"></i>', htmlCode += tpHelper.html.escape(_data[i].title), htmlCode += "</div>";
					else {
						htmlCode += '\n            <div class="msgTit">';
						for (var status, j = 6; j > 1; j--)(_data.showPromotion || 5 != j) && (status = Math.pow(2, j), status & _data[i].status && (htmlCode += '<i class="title_icon icon', htmlCode += status, htmlCode += '"></i>'));
						htmlCode += _data[i].title, htmlCode += "\n            </div>"
					}
					var cut = 240;
					if (msgPics && msgPics.length && (cut = 160), _data[i].summary = _data.htmlDecode(_data[i].summary), htmlCode += '\n            <div class="msgCnt">', htmlCode += face.renderFaceIcon(tpHelper.html.escape(DataLength(_data[i].summary) > cut ? sub(_data[i].summary, cut).concat("...") : _data[i].summary)), htmlCode += "\n            </div>\n        </div>", msgPics && msgPics.length) {
						htmlCode += '\n        <div class="clear multiMedia">\n            <div class="mediaWrap">\n                <div class="picBox1">';
						var len = msgPics.length;
						if (len = len > 5 ? 5 : len, 1 === len) htmlCode += '\n                    <div class="lazy-img-cover onePic">\n                        <img class="preview lazy" data-original="', htmlCode += _g.encodeImgURL(msgPics[0]), htmlCode += '" src="http://mat1.gtimg.com/sports/kbsweb/statics/placeholder180_41eb95.jpg">\n                    </div>';
						else for (var j = 0; len > j; j++) htmlCode += '\n                    <div class="lazy-img-cover">\n                        <img class="preview lazy" data-original="', htmlCode += _g.encodeImgURL(msgPics[j]), htmlCode += '" alt="BMW M3 GT" src="http://mat1.gtimg.com/sports/kbsweb/statics/placeholder90_2f7e79.jpg">\n                    </div>';
						htmlCode += "\n                </div>\n            </div>\n        </div>"
					}
					htmlCode += '\n        <div class="module" data-_mid="', htmlCode += _data[i].moduleIds, htmlCode += '">\n            <a class="moduleName" href="/fans/group.htm?mid=', htmlCode += _data[i].moduleIds, htmlCode += '"\n                               target="_blank"\n                               moduleId="', htmlCode += _data[i].moduleIds, htmlCode += '">', htmlCode += _data[i].moduleName, htmlCode += "</a>\n        </div>\n               \n</li>"
				}
				htmlCode += "\n"
			}
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/relPost", function(e, t, n) {
	var i = e("/src/scripts/ui/global"),
		a = i.getParams(),
		r = e("/src/scripts/utils/boss"),
		o = function(e) {
			for (var t = 0; t < e.length; t++) 64 === e[t].status && e.splice(t, 1);
			return e
		};
	t.render = function() {
		$.ajax({
			url: window.BASE_SERVER + "/topic/getMatchTopics",
			dataType: "jsonp",
			jsonpCallback: "matchTopicsCallback",
			data: {
				matchId: a.mid,
				count: 10
			}
		}).done(function(t) {
			if ("0" === t.code) {
				var n = t.data;
				if (n.list = o(n.list), !n || !n.list || !n.list.length) return void $(".feed-title").remove();
				var i = $(".unfold");
				n.list.length > 3 && (i.show(), i.click(function() {
					return i.hide(), $("#topicsList").append(e("/output/topicsList/topicsList").render(n.list.slice(3))), e("/output/topicsList/topicsList").init(), r.triggerEventReport({
						action: "å±•å¼€å…¨éƒ¨"
					}), !1
				})), $("#topicsList").append(e("/output/topicsList/topicsList").render(n.list.slice(0, 3))), e("/output/topicsList/topicsList").init()
			}
		})
	}
});
define69eea4("/output/qr-code/qr-code", function(require, exports, module) {
	require("/src/scripts/utils/kDate"), require("/lib/jsonselect"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {
			$(".qr-code-cont .qr-close").on("click", function() {
				$(".qr-code-cont").slideUp()
			})
		},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div class="qr-code-cont qr-', htmlCode += face, htmlCode += '">\n    <em class="qr-close" title="å…³é—­"></em>\n    <img src="http://mat1.gtimg.com/sports/kbsweb/statics/weixin_right_ddbe0e.png">\n\n    <p>ä¸‹è½½è…¾è®¯ä½“è‚²</p>\n\n    <p>', htmlCode += "kbs" === from ? "éšæ—¶éšåœ°çœ‹ç›´æ’­" : "ç¤¾åŒºåŠ¨æ€éšæ—¶æŽŒæ¡", htmlCode += "\n    </p>\n</div>";
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/qrCode", function(e) {
	return {
		init: function() {
			$(".qr-code-area").html(e("/output/qr-code/qr-code").render({
				face: "black",
				from: "kbs"
			})).slideDown(), e("/output/qr-code/qr-code").init()
		}
	}
});
define69eea4("/src/scripts/utils/tips", function(e, t, n) {
	var i = e("/lib/jquery-1.11.3"),
		a = e("/src/scripts/utils/utils"),
		r = i("<div></div>");
	r.css({
		display: "none",
		position: "absolute",
		padding: "10px",
		textAlign: "center",
		border: "solid 1px #ddd",
		background: "#fffcd2",
		color: "#000",
		"word-break": "break-all",
		"z-index": 1e4
	});
	var o = function(e) {
			this.el = null, this.elTarget = e.elTarget || i(window), this.left = null, this.top = null, this.duration = e.duration || 1600, this.el = r.clone(), i("body").append(this.el)
		},
		s = !1;
	o.prototype = {
		show: function(e, t, n, i, r, o, l) {
			if (!s) {
				s = !0;
				var c = this;
				this.elTarget = t || this.elTarget, r = r || 0, o = o || 0, this.el.css({
					display: "block",
					visibility: "hidden",
					width: "auto"
				}), this.el.html(e), setTimeout(function() {
					if (c.elTarget.is(":visible")) {
						var e = n || c.el.width(),
							t = i || c.el.height(),
							d = c.elTarget.offset().left + c.elTarget.width() / 2 - e / 2 + r,
							u = c.elTarget.offset().top + c.elTarget.height() / 2 - t / 2 + o;
						c.el.css({
							visibility: "visible",
							width: e + 5 + "px",
							height: t + "px",
							left: d + "px",
							top: u + "px"
						}), c.el.fadeIn(200)
					}
					a.timerProxy(function() {
						c.hide(function() {
							"function" == typeof l && l(), s = !1
						})
					}, c.duration, "utils-tips")
				}, 0)
			}
		},
		hide: function(e) {
			this.el.fadeOut(160, e)
		},
		remove: function() {
			this.hide(function() {
				this.el.remove()
			})
		}
	}, t.getInstance = function(e) {
		var t = {};
		return e && i.extend(t, e), new o(t)
	}
});
define69eea4("/lib/jquery.textchange", function(e, t, n) {
	var i = e("/lib/jquery-1.11.3");
	i.event.special.textchange = {
		setup: function(e, t) {
			i(this).data("lastValue", "true" === this.contentEditable ? i(this).html() : i(this).val()), i(this).bind("keyup.textchange", i.event.special.textchange.handler), i(this).bind("cut.textchange paste.textchange input.textchange", i.event.special.textchange.delayedHandler)
		},
		teardown: function(e) {
			i(this).unbind(".textchange")
		},
		handler: function(e) {
			i.event.special.textchange.triggerIfChanged(i(this))
		},
		delayedHandler: function(e) {
			var t = i(this);
			setTimeout(function() {
				i.event.special.textchange.triggerIfChanged(t)
			}, 25)
		},
		triggerIfChanged: function(e) {
			var t = "true" === e[0].contentEditable ? e.html() : e.val();
			t !== e.data("lastValue") && (e.trigger("textchange", [e.data("lastValue")]), e.data("lastValue", t))
		}
	}, i.event.special.hastext = {
		setup: function(e, t) {
			i(this).bind("textchange", i.event.special.hastext.handler)
		},
		teardown: function(e) {
			i(this).unbind("textchange", i.event.special.hastext.handler)
		},
		handler: function(e, t) {
			"" === t && t !== i(this).val() && i(this).trigger("hastext")
		}
	}, i.event.special.notext = {
		setup: function(e, t) {
			i(this).bind("textchange", i.event.special.notext.handler)
		},
		teardown: function(e) {
			i(this).unbind("textchange", i.event.special.notext.handler)
		},
		handler: function(e, t) {
			"" === i(this).val() && i(this).val() !== t && i(this).trigger("notext")
		}
	}
});
define69eea4("/output/game-guess-betting/game-guess-betting", function(require, exports, module) {
	var utils = (require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils")),
		tpHelper = require("/lib/tpHelper"),
		ke = require("/lib/kEvent");
	require("/lib/jquery.textchange");
	var tips = require("/src/scripts/utils/tips").getInstance({
		width: 100,
		height: 20
	}),
		ODDS = 1.05,
		currentGuessId = 0,
		KBCNT_MIN = 10,
		KBCNT_MAX = 1e4,
		joinPool = function(e, t, n) {
			return $.ajax({
				url: window.GUESS_SERVER + "/kbsGuess/joinPool",
				dataType: "jsonp",
				jsonpCallback: "joinPoolCallback",
				data: {
					gid: e,
					choiceId: t,
					currencyCnt: n
				}
			})
		},
		showTips = function(e, t) {
			var n, i = $("#guess-betting"),
				a = $('.guess-question[data-guessid="' + currentGuessId + '"]').eq(0);
			n = i.is(":visible") ? i : a, tips.show(e, n, 0, 0, 5, -20, t)
		},
		showTipsCommonFn = function() {
			ke("guess").fire("joinComplete"), $(".guess-bet").removeClass("disabled")
		};
	module.exports = {
		init: function() {
			$("#guess-betting-count").off(), $("#guess-betting-count").on("textchange", function() {
				var e = $(this).val(),
					t = +$(this).data("kbcnt");
				e = +e.replace(/[^0-9]/g, ""), $(this).val(e), e > t ? ($(".guess-wallet").addClass("hide"), $(".guess-wallet-warn").removeClass("hide")) : ($(".guess-wallet").removeClass("hide"), $(".guess-wallet-warn").addClass("hide"));
				var n = +$(this).data("totalkb"),
					i = +$(this).data("defaultodds"),
					a = +$(this).data("choicetotalkb"),
					r = +$(this).data("cnt"),
					o = +$(this).data("choicecnt");
				0 === r && (i = o * i);
				var s = (n + e) * i / (a + e) * e;
				e >= s && (s = Math.ceil(e * ODDS)), $(".guess-betting-form .expectation").text(Math.ceil(s) || "")
			}), $(".guess-bet").off(), $(".guess-bet").on("click", function() {
				var e = $(this),
					t = e.data("guessid"),
					n = e.data("choiceid"),
					i = +$("#guess-betting-count").val(),
					a = +$("#guess-betting-count").data("kbcnt");
				if (currentGuessId = t, !e.hasClass("disabled")) {
					if (i > a) return showTips("ä½™é¢ä¸è¶³ï¼Œèµšç‚¹Kå¸åŽ»"), void setTimeout(function() {
						window.open("/kbsweb/mycenter.htm#myWallet")
					}, 1500);
					if (KBCNT_MIN > i || i > KBCNT_MAX) return showTips("äº²ï¼Œæ¯æ¬¡æŠ•æ³¨çš„èŒƒå›´æ˜¯" + KBCNT_MIN + "-" + KBCNT_MAX + "KBå“¦"), void $("#guess-betting-count").focus();
					$(".guess-bet").addClass("disabled"), $("#guess-betting").find(".loading-layer").show(), utils.timerProxy(function() {
						joinPool(t, n, i).done(function(e) {
							return e ? void(0 !== e.code ? (10002 === e.code && ke("guess").fire("updateList"), showTips(e.msg, showTipsCommonFn)) : showTips("æŠ•æ³¨æˆåŠŸï¼", function() {
								var e = $('.guess-question[data-guessid="' + t + '"]'),
									a = e.find(".guess-opt").filter('[data-choiceid="' + n + '"]');
								ke("guess").fire("joinSuccess", t, {
									gid: t,
									title: e.find("h3").attr("title"),
									userChoiceText: a.find("span").eq(0).text(),
									currencyCnt: i,
									endTimeDesc: " " + e.find(".guess-deadline").text(),
									participatorCnt: e.find(".guess-players").data("cnt")
								}), setTimeout(function() {
									showTipsCommonFn(t)
								}, 0)
							})) : void showTips("ç½‘ç»œç¹å¿™ï¼Œè¯·ç¨åŽé‡è¯•ï¼", showTipsCommonFn)
						}).fail(function() {
							showTips("ç½‘ç»œç¹å¿™ï¼Œè¯·ç¨åŽé‡è¯•ï¼", showTipsCommonFn)
						}).always(function() {
							$("#guess-betting").find(".loading-layer").hide()
						})
					}, 500, "guessBetting")
				}
			})
		},
		render: function(data) {
			var _data = data;
			_data = ("undefined" != typeof ___kkit___ ? ___kkit___.tph : tpHelper).mixin(_data, {
				getExpectation: function(e) {
					return -1
				}
			});
			var htmlCode = "";
			with(_data || {}) htmlCode += '', _data.isInit ? (htmlCode += '\n    <div id="guess-betting" class="', htmlCode += theme, htmlCode += ' guess-betting-placeholder">\n        <div class="arrow"></div>\n        <div class="inner">\n        </div>\n        <div class="loading-layer"></div>\n    </div>') : (htmlCode += '\n    <ul class="guess-betting-form">\n        <li>\n            <label for="guess-betting-count" class="fl">æŠ•æ³¨é‡‘é¢ï¼š</label>\n            <input type="text" id="guess-betting-count"\n                   data-kbcnt=""\n                   data-totalkb=""\n                   data-defaultodds=""\n                   data-choicetotalkb=""\n                   maxlength="5" value="10" />\n        </li>\n        <li>\n            <span class="fl">é¢„è®¡èŽ·å¾—ï¼š</span>\n            <span class="expectation"></span>\n        </li>\n        <li>\n            <span class="guess-wallet fl">æˆ‘çš„é’±åŒ…ï¼š</span>\n            <span class="guess-wallet guess-wallet-val">', htmlCode += kbCnt, htmlCode += '</span>\n            <span class="guess-wallet-warn fl warn hide">é’±åŒ…ä½™é¢ä¸è¶³</span>\n        </li>\n    </ul>\n    <a href="javascript:;" class="guess-bet ', "1" == _data.isPause && (htmlCode += "disabled"), htmlCode += '"\n       data-guessid=""\n       data-choiceid=""\n       data-kbcnt="', htmlCode += _data.kbCnt, htmlCode += '">ç«‹å³æŠ•æ³¨</a>');
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/guess/betting", function(e, t, n) {
	var i = e("/lib/jquery-1.11.3"),
		a = e("/src/scripts/utils/qqlogin"),
		r = e("/lib/kEvent"),
		o = e("/src/scripts/utils/tips").getInstance({
			width: 100,
			height: 20
		}),
		s = function(e, t) {
			return i.ajax({
				url: window.GUESS_SERVER + "/kbsGuess/joinPre",
				dataType: "jsonp",
				jsonpCallback: "joinPreCallback",
				data: {
					gid: e,
					choiceId: t,
					from: "sportsweb"
				}
			})
		},
		l = null,
		c = null,
		d = 0,
		u = 0,
		h = !1,
		p = null,
		f = null,
		m = null,
		g = null,
		v = function() {
			l && l.is(":visible") && p && f && n.exports.show(p, f, m, g), l && l.is(":hidden") && i(".guess-opt").removeClass("select")
		};
	i(window).on("scroll", v), i(window).on("resize", v), r("login").on("ptloginClose", function() {
		r("guess").fire("showBettingFailed"), n.exports.hide()
	}), n.exports = {
		init: function(t, a) {
			l = i(e("/output/game-guess-betting/game-guess-betting").render({
				isInit: 1,
				theme: t || n.exports.theme.LIGHT
			})), c = l.find(".arrow"), l.find(".inner").html(e("/output/game-guess-betting/game-guess-betting").render({
				kbCnt: ""
			})), l.addClass("hidden"), h = a, a ? i(".guess-betting-placeholder").replaceWith(l) : i("body").append(l), setTimeout(function() {
				d = l.outerWidth(), u = l.outerHeight(), e("/output/game-guess-betting/game-guess-betting").init(), l.removeClass("hidden")
			}, 0), r("guess").un("joinComplete"), r("guess").on("joinComplete", function() {
				n.exports.hide()
			})
		},
		show: function(e, t, n, a) {
			e = i(e), t = i(t), n = n || 0, a = a || 0, p = e, f = t, m = n, g = a, l.css({
				display: "block",
				visibility: "hidden"
			});
			var r = e.offset(),
				o = t.offset(),
				s = r.left,
				d = o.top + t.outerHeight() + c.outerHeight() + a,
				u = o.left + t.width() / 2 - s + n;
			h && (s = 30, d = t.position().top + t.outerHeight() + (parseInt(t.css("margin-top")) || 0) + c.outerHeight() + a, u = t.position().left + t.width() / 2 + n - 10), l.css({
				top: d + "px",
				left: s + "px"
			}), c.css({
				left: u + "px"
			}), e.is(":visible") ? l.show().css("visibility", "visible") : l.hide()
		},
		hide: function() {
			l && l.hide()
		},
		load: function(e, t, c, d, u, h, p, f) {
			var m = this,
				g = i('.guess-question[data-guessid="' + c + '"]');
			this.show(e, t, p, f), l.find(".loading-layer").show();
			var v = function() {
					s(c, d).done(function(e) {
						e && 0 === e.code ? (n.exports.updateForm(e.data, c, d, u, h), l.find(".loading-layer").hide()) : (o.show("ç½‘ç»œç¹å¿™ï¼Œè¯·ç¨åŽé‡è¯•ï¼", g, 0, 0, 5, -20), r("guess").fire("showBettingFailed"), m.hide())
					})
				};
			a.isLogin(function(e, t) {
				e && t ? v() : a.userLogin(!1, function(e) {
					e && e.isLogin && e.isStrong ? (r("guess").fire("guessLoginSuccess"), v()) : (r("guess").fire("showBettingFailed"), m.hide())
				})
			})
		},
		updateForm: function(t, n, a, r, o) {
			if (l.find(".guess-betting-form").size() > 0) {
				var s = l.find("#guess-betting-count");
				s.data("totalkb", t.totalKb), s.data("defaultodds", t.defaultOdds), s.data("choicetotalkb", t.choiceTotalKb), s.data("cnt", r), s.data("choicecnt", o), s.data("kbcnt", t.kbCnt), s.val(10), l.find(".guess-wallet-val").text(t.kbCnt)
			} else l.find(".inner").html(e("/output/game-guess-betting/game-guess-betting").render(t || {
				kbCnt: ""
			}));
			l.find(".guess-bet").data("guessid", n).data("choiceid", a), i("#guess-betting-count").trigger("textchange")
		},
		theme: {
			LIGHT: "style-light",
			DARK: "style-dark"
		}
	}
});
define69eea4("/lib/jquery.color", function(e, t, n) {
	function i(e, t, n) {
		var i = f[t.type] || {};
		return null == e ? n || !t.def ? null : t.def : (e = i.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : i.mod ? (e + i.mod) % i.mod : 0 > e ? 0 : i.max < e ? i.max : e)
	}
	function a(e) {
		var t = p(),
			n = t._rgba = [];
		return e = e.toLowerCase(), v(u, function(i, a) {
			var r, o = a.re.exec(e),
				s = o && a.parse(o),
				l = a.space || "rgba";
			return s ? (r = t[l](s), t[h[l].cache] = r[h[l].cache], n = t._rgba = r._rgba, !1) : void 0
		}), n.length ? ("0,0,0,0" === n.join() && o.extend(n, l.transparent), t) : l[e]
	}
	function r(e, t, n) {
		return n = (n + 1) % 1, 1 > 6 * n ? e + (t - e) * n * 6 : 1 > 2 * n ? t : 2 > 3 * n ? e + (t - e) * (2 / 3 - n) * 6 : e
	}
	var o, s;
	o = s = e("/lib/jquery-1.11.3");
	var l, c = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
		d = /^([\-+])=\s*(\d+\.?\d*)/,
		u = [{
			re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function(e) {
				return [e[1], e[2], e[3], e[4]]
			}
		}, {
			re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function(e) {
				return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
			}
		}, {
			re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
			parse: function(e) {
				return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
			}
		}, {
			re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
			parse: function(e) {
				return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
			}
		}, {
			re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			space: "hsla",
			parse: function(e) {
				return [e[1], e[2] / 100, e[3] / 100, e[4]]
			}
		}],
		p = o.Color = function(e, t, n, i) {
			return new o.Color.fn.parse(e, t, n, i)
		},
		h = {
			rgba: {
				props: {
					red: {
						idx: 0,
						type: "byte"
					},
					green: {
						idx: 1,
						type: "byte"
					},
					blue: {
						idx: 2,
						type: "byte"
					}
				}
			},
			hsla: {
				props: {
					hue: {
						idx: 0,
						type: "degrees"
					},
					saturation: {
						idx: 1,
						type: "percent"
					},
					lightness: {
						idx: 2,
						type: "percent"
					}
				}
			}
		},
		f = {
			"byte": {
				floor: !0,
				max: 255
			},
			percent: {
				max: 1
			},
			degrees: {
				mod: 360,
				floor: !0
			}
		},
		m = p.support = {},
		g = o("<p>")[0],
		v = o.each;
	g.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = g.style.backgroundColor.indexOf("rgba") > -1, v(h, function(e, t) {
		t.cache = "_" + e, t.props.alpha = {
			idx: 3,
			type: "percent",
			def: 1
		}
	}), p.fn = o.extend(p.prototype, {
		parse: function(e, t, n, r) {
			if (void 0 === e) return this._rgba = [null, null, null, null], this;
			(e.jquery || e.nodeType) && (e = o(e).css(t), t = void 0);
			var s = this,
				c = o.type(e),
				d = this._rgba = [];
			return void 0 !== t && (e = [e, t, n, r], c = "array"), "string" === c ? this.parse(a(e) || l._default) : "array" === c ? (v(h.rgba.props, function(t, n) {
				d[n.idx] = i(e[n.idx], n)
			}), this) : "object" === c ? (e instanceof p ? v(h, function(t, n) {
				e[n.cache] && (s[n.cache] = e[n.cache].slice())
			}) : v(h, function(t, n) {
				var a = n.cache;
				v(n.props, function(t, r) {
					if (!s[a] && n.to) {
						if ("alpha" === t || null == e[t]) return;
						s[a] = n.to(s._rgba)
					}
					s[a][r.idx] = i(e[t], r, !0)
				}), s[a] && o.inArray(null, s[a].slice(0, 3)) < 0 && (s[a][3] = 1, n.from && (s._rgba = n.from(s[a])))
			}), this) : void 0
		},
		is: function(e) {
			var t = p(e),
				n = !0,
				i = this;
			return v(h, function(e, a) {
				var r, o = t[a.cache];
				return o && (r = i[a.cache] || a.to && a.to(i._rgba) || [], v(a.props, function(e, t) {
					return null != o[t.idx] ? n = o[t.idx] === r[t.idx] : void 0
				})), n
			}), n
		},
		_space: function() {
			var e = [],
				t = this;
			return v(h, function(n, i) {
				t[i.cache] && e.push(n)
			}), e.pop()
		},
		transition: function(e, t) {
			var n = p(e),
				a = n._space(),
				r = h[a],
				o = 0 === this.alpha() ? p("transparent") : this,
				s = o[r.cache] || r.to(o._rgba),
				l = s.slice();
			return n = n[r.cache], v(r.props, function(e, a) {
				var r = a.idx,
					o = s[r],
					c = n[r],
					d = f[a.type] || {};
				null !== c && (null === o ? l[r] = c : (d.mod && (c - o > d.mod / 2 ? o += d.mod : o - c > d.mod / 2 && (o -= d.mod)), l[r] = i((c - o) * t + o, a)))
			}), this[a](l)
		},
		blend: function(e) {
			if (1 === this._rgba[3]) return this;
			var t = this._rgba.slice(),
				n = t.pop(),
				i = p(e)._rgba;
			return p(o.map(t, function(e, t) {
				return (1 - n) * i[t] + n * e
			}))
		},
		toRgbaString: function() {
			var e = "rgba(",
				t = o.map(this._rgba, function(e, t) {
					return null == e ? t > 2 ? 1 : 0 : e
				});
			return 1 === t[3] && (t.pop(), e = "rgb("), e + t.join() + ")"
		},
		toHslaString: function() {
			var e = "hsla(",
				t = o.map(this.hsla(), function(e, t) {
					return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
				});
			return 1 === t[3] && (t.pop(), e = "hsl("), e + t.join() + ")"
		},
		toHexString: function(e) {
			var t = this._rgba.slice(),
				n = t.pop();
			return e && t.push(~~ (255 * n)), "#" + o.map(t, function(e) {
				return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
			}).join("")
		},
		toString: function() {
			return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
		}
	}), p.fn.parse.prototype = p.fn, h.hsla.to = function(e) {
		if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
		var t, n, i = e[0] / 255,
			a = e[1] / 255,
			r = e[2] / 255,
			o = e[3],
			s = Math.max(i, a, r),
			l = Math.min(i, a, r),
			c = s - l,
			d = s + l,
			u = .5 * d;
		return t = l === s ? 0 : i === s ? 60 * (a - r) / c + 360 : a === s ? 60 * (r - i) / c + 120 : 60 * (i - a) / c + 240, n = 0 === c ? 0 : .5 >= u ? c / d : c / (2 - d), [Math.round(t) % 360, n, u, null == o ? 1 : o]
	}, h.hsla.from = function(e) {
		if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
		var t = e[0] / 360,
			n = e[1],
			i = e[2],
			a = e[3],
			o = .5 >= i ? i * (1 + n) : i + n - i * n,
			s = 2 * i - o;
		return [Math.round(255 * r(s, o, t + 1 / 3)), Math.round(255 * r(s, o, t)), Math.round(255 * r(s, o, t - 1 / 3)), a]
	}, v(h, function(e, t) {
		var n = t.props,
			a = t.cache,
			r = t.to,
			s = t.from;
		p.fn[e] = function(e) {
			if (r && !this[a] && (this[a] = r(this._rgba)), void 0 === e) return this[a].slice();
			var t, l = o.type(e),
				c = "array" === l || "object" === l ? e : arguments,
				d = this[a].slice();
			return v(n, function(e, t) {
				var n = c["object" === l ? e : t.idx];
				null == n && (n = d[t.idx]), d[t.idx] = i(n, t)
			}), s ? (t = p(s(d)), t[a] = d, t) : p(d)
		}, v(n, function(t, n) {
			p.fn[t] || (p.fn[t] = function(i) {
				var a, r = o.type(i),
					s = "alpha" === t ? this._hsla ? "hsla" : "rgba" : e,
					l = this[s](),
					c = l[n.idx];
				return "undefined" === r ? c : ("function" === r && (i = i.call(this, c), r = o.type(i)), null == i && n.empty ? this : ("string" === r && (a = d.exec(i), a && (i = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[n.idx] = i, this[s](l)))
			})
		})
	}), p.hook = function(e) {
		var t = e.split(" ");
		v(t, function(e, t) {
			o.cssHooks[t] = {
				set: function(e, n) {
					var i, r, s = "";
					if ("transparent" !== n && ("string" !== o.type(n) || (i = a(n)))) {
						if (n = p(i || n), !m.rgba && 1 !== n._rgba[3]) {
							for (r = "backgroundColor" === t ? e.parentNode : e;
							("" === s || "transparent" === s) && r && r.style;) try {
								s = o.css(r, "backgroundColor"), r = r.parentNode
							} catch (l) {}
							n = n.blend(s && "transparent" !== s ? s : "_default")
						}
						n = n.toRgbaString()
					}
					try {
						e.style[t] = n
					} catch (l) {}
				}
			}, o.fx.step[t] = function(e) {
				e.colorInit || (e.start = p(e.elem, t), e.end = p(e.end), e.colorInit = !0), o.cssHooks[t].set(e.elem, e.start.transition(e.end, e.pos))
			}
		})
	}, p.hook(c), o.cssHooks.borderColor = {
		expand: function(e) {
			var t = {};
			return v(["Top", "Right", "Bottom", "Left"], function(n, i) {
				t["border" + i + "Color"] = e
			}), t
		}
	}, l = o.Color.names = {
		aqua: "#00ffff",
		black: "#000000",
		blue: "#0000ff",
		fuchsia: "#ff00ff",
		gray: "#808080",
		green: "#008000",
		lime: "#00ff00",
		maroon: "#800000",
		navy: "#000080",
		olive: "#808000",
		purple: "#800080",
		red: "#ff0000",
		silver: "#c0c0c0",
		teal: "#008080",
		white: "#ffffff",
		yellow: "#ffff00",
		transparent: [null, null, null, 0],
		_default: "#ffffff"
	}
});
define69eea4("/output/game-guess-records/game-guess-records", function(require, exports, module) {
	var tpHelper = (require("/lib/jsonselect"), require("/src/scripts/utils/utils"), require("/lib/tpHelper"));
	require("/lib/jquery-1.11.3");
	require("/lib/jquery.lazyload"), module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data || {};
			_data = ("undefined" != typeof ___kkit___ ? ___kkit___.tph : tpHelper).mixin(_data, {
				getResultClass: function(e) {
					var t = e.lotteryResult;
					switch (t) {
					case "11":
						return "result-right";
					case "12":
						return "result-wrong";
					default:
						return "result-cancel"
					}
				},
				getResultText: function(e) {
					var t = e.lotteryResult;
					switch (t) {
					case "11":
						return "èŽ·å¾—" + e.winCurrencyCnt + "Kå¸";
					case "12":
						return "ç­”æ¡ˆï¼š" + e.choiceAns;
					case "32":
						return "æœ¬é¢˜å–æ¶ˆï¼ŒæŠ•æ³¨çš„Kå¸é€€å›ž";
					default:
						return ""
					}
				},
				getJoinedList: function(e) {
					for (var t = [], n = 0, i = e.length; i > n; n++) t.push(e[n]);
					return t
				},
				getDeadlineText: function(e) {
					if ("string" == typeof e) {
						var t = e.split(" ");
						if (t && 2 === t.length) return t[1]
					}
					return e
				}
			});
			var htmlCode = "";
			with(_data || {}) if (htmlCode += '', _data.waitingList || _data.drawList) {
				var joinedWaittingList = _data.getJoinedList(_data.waitingList),
					joinedDrawList = _data.getJoinedList(_data.drawList);
				if (htmlCode += '\n    <div id="guess-records">\n        <div class="inner">', joinedWaittingList.length > 0) {
					htmlCode += '\n            <h3>å¾…å¼€å¥–</h3>\n            <ul class="waitting">';
					for (var i = 0, len = joinedWaittingList.length; len > i; i++)!
					function(e) {
						htmlCode += '<li data-guessid="', htmlCode += e.gid, htmlCode += '" data-time="', htmlCode += +new Date, htmlCode += '">\n    <div class="inner">\n        <h4 title="', htmlCode += tpHelper.html.escape(e.title), htmlCode += '">', htmlCode += tpHelper.html.escape(e.title), htmlCode += '</h4>\n        <span class="my-answer">æˆ‘çŒœï¼š', htmlCode += tpHelper.html.escape(e.userChoiceText), htmlCode += '</span>\n        <span class="my-bet">æŠ•æ³¨ï¼š', htmlCode += e.currencyCnt, htmlCode += 'Kå¸</span>\n        <div class="guess-meta">\n            <span class="guess-deadline">', htmlCode += e.endTimeDesc, htmlCode += '</span>\n            <span class="guess-players" data-cnt="', htmlCode += e.participatorCnt, htmlCode += '">', htmlCode += e.participatorCnt, htmlCode += "äººå‚ä¸Ž</span>\n        </div>\n    </div>\n</li>"
					}(joinedWaittingList[i]);
					htmlCode += "\n            </ul>"
				}
				if (joinedDrawList.length > 0) {
					htmlCode += '\n            <h3>å·²å¼€å¥–</h3>\n            <ul class="done">';
					for (var j = 0, len2 = joinedDrawList.length; len2 > j; j++) joinedDrawList[j].getResultClass = _data.getResultClass, joinedDrawList[j].getResultText = _data.getResultText, function(e) {
						htmlCode += '<li data-guessid="', htmlCode += e.gid, htmlCode += '">\n    <div class="inner">\n        <h4 title="', htmlCode += tpHelper.html.escape(e.title), htmlCode += '" class="', htmlCode += e.getResultClass(e), htmlCode += '">', htmlCode += tpHelper.html.escape(e.title), htmlCode += '\n        </h4>\n        <span class="my-answer">æˆ‘çŒœï¼š', htmlCode += e.userChoiceText, htmlCode += '</span>\n        <span class="my-bet">æŠ•æ³¨ï¼š', htmlCode += e.currencyCnt, htmlCode += 'Kå¸</span>\n        <span class="result-text ', htmlCode += e.getResultClass(e), htmlCode += '">', htmlCode += e.getResultText(e), htmlCode += "</span>\n    </div>\n</li>"
					}(joinedDrawList[j]);
					htmlCode += "\n            </ul>"
				}
				htmlCode += "\n        </div>\n    </div>"
			} else _data.waittingItem ? !
			function(e) {
				htmlCode += '<li data-guessid="', htmlCode += e.gid, htmlCode += '" data-time="', htmlCode += +new Date, htmlCode += '">\n    <div class="inner">\n        <h4 title="', htmlCode += tpHelper.html.escape(e.title), htmlCode += '">', htmlCode += tpHelper.html.escape(e.title), htmlCode += '</h4>\n        <span class="my-answer">æˆ‘çŒœï¼š', htmlCode += tpHelper.html.escape(e.userChoiceText), htmlCode += '</span>\n        <span class="my-bet">æŠ•æ³¨ï¼š', htmlCode += e.currencyCnt, htmlCode += 'Kå¸</span>\n        <div class="guess-meta">\n            <span class="guess-deadline">', htmlCode += e.endTimeDesc, htmlCode += '</span>\n            <span class="guess-players" data-cnt="', htmlCode += e.participatorCnt, htmlCode += '">', htmlCode += e.participatorCnt, htmlCode += "äººå‚ä¸Ž</span>\n        </div>\n    </div>\n</li>"
			}(_data.waittingItem) : htmlCode += '\n    <div id="guess-records"></div>';
			return htmlCode
		}
	}
});
define69eea4("/output/game-guess/game-guess", function(require, exports, module) {
	var _g = (require("/lib/jsonselect"), require("/src/scripts/ui/global")),
		tpHelper = (require("/src/scripts/utils/utils"), require("/lib/tpHelper")),
		$ = require("/lib/jquery-1.11.3"),
		bettingDialog = require("/src/scripts/ui/game/guess/betting"),
		qqLogin = require("/src/scripts/utils/qqlogin"),
		ke = (require("/lib/jquery.color"), require("/lib/kEvent")),
		R = 21,
		G = 125,
		B = 207,
		A0 = .9,
		A1 = 0,
		blink = function(e) {
			e.css("background-color", "rgba(" + R + ", " + G + ", " + B + ", " + A0 + ")"), e.animate({
				backgroundColor: $.Color(R, G, B, A1)
			}, 3e3)
		};
	module.exports = {
		init: function() {
			$(document).on("click", ".game-guess-my", function(e) {
				var t = "/kbsweb/mycenter.htm?mid=" + _g.getUrlParam("mid") + "#myQuiz",
					n = $(this);
				qqLogin.needLogin().then(function() {
					"javascript:;" == n.attr("href") && (n.attr({
						href: t,
						target: "_blank"
					}), window.open(t))
				})
			}), $(document).on("click", ".guess-opt", function() {
				var e = $(this);
				if (e.hasClass("select")) return e.removeClass("select"), void bettingDialog.hide();
				var t = e.parents(".guess-question-innner").eq(0),
					n = e,
					i = e.data("guessid"),
					a = e.data("choiceid"),
					r = 0,
					o = 0;
				e.parents(".guess-question").eq(0).find(".guess-opt").each(function() {
					r += +$(this).data("cnt"), o++
				}), bettingDialog.load(t, n, i, a, r, o, -10), $("#game-guess .guess-opt").removeClass("select"), e.addClass("select"), ke("guess").fire("selectGuessOpt", i, a)
			}), ke("guess").on("showBettingFailed", function() {
				$("#game-guess .guess-opt").removeClass("select"), ke("guess").fire("cancelGuessOpt")
			}), $(document).on("click", function(e) {
				var t = $(e.target);
				0 !== t.parents("#guess-betting").length || "guess-betting" === t.attr("id") || 0 !== t.parents(".guess-opt").length || t.hasClass("guess-opt") || (bettingDialog.hide(), $(".guess-opt").removeClass("select"), ke("guess").fire("cancelGuessOpt"))
			}), ke("guess").on("joinComplete", function() {
				$("#game-guess .guess-opt").removeClass("select"), bettingDialog.hide(), ke("guess").fire("cancelGuessOpt")
			}), ke("guess").on("newGuessLoaded", function(e) {
				var t = $('.guess-question[data-guessid="' + e + '"]').eq(0);
				$(".live-guess").mCustomScrollbar("scrollTo", t), blink(t)
			}), ke("guess").on("joinSuccess", function(e, t) {
				var n = function() {
						setTimeout(function() {
							var t = $('#guess-records .waitting li[data-guessid="' + e + '"]').eq(0),
								n = $("#guess-records");
							$(".live-guess").mCustomScrollbar("scrollTo", n), blink(t)
						}, 100)
					};
				if (ke("guess").fire("cancelGuessOpt"), ke("guess").fire("coinChange"), $(".guess-opt").removeClass("select"), $("#guess-records .waitting").length > 0) {
					var i = $('#guess-records .waitting li[data-guessid="' + e + '"]').eq(0),
						a = i.data("time");
					(0 === i.length || +new Date - a > 700) && $("#guess-records .waitting").prepend(require("/output/game-guess-records/game-guess-records").render({
						waittingItem: t
					})), n()
				} else ke("guess").fire("updateList", n)
			})
		},
		render: function(data) {
			var _data = data;
			_data = ("undefined" != typeof ___kkit___ ? ___kkit___.tph : tpHelper).mixin(_data, {
				getTheme: function(e) {
					return _g.livePeriod.IN === e ? "style-dark" : "style-light"
				},
				getChoiceOptsClass: function(e, t) {
					var n = [];
					switch (e) {
					case 2:
						n.push("two");
						break;
					case 3:
						n.push("three")
					}
					switch (t % 2) {
					case 0:
						n.push("even");
						break;
					case 1:
						n.push("odd")
					}
					return n.join(" ")
				},
				getImgClass: function(e, t) {
					if (3 == e) {
						if (0 == t) return "left";
						if (2 == t) return "right"
					}
				},
				getDeadlineText: function(e, t) {
					if (_g.livePeriod.IN === e && "string" == typeof t) {
						var n = t.split(" ");
						if (n && 2 === n.length) return n[1]
					}
					return t
				},
				getImgURL: function(e, t, n) {
					var i = {
						light2: "http://img1.gtimg.com/sports/pics/hv1/226/118/1963/127674391.png",
						light3: "http://img1.gtimg.com/sports/pics/hv1/17/119/1963/127674437.png",
						dark2: "http://img1.gtimg.com/sports/pics/hv1/38/119/1963/127674458.png",
						dark3: "http://img1.gtimg.com/sports/pics/hv1/75/119/1963/127674495.png"
					};
					return "string" == typeof e && e || (e = n === _g.livePeriod.IN ? i["dark" + t] : i["light" + t]), e
				}
			});
			var htmlCode = "";
			with(_data || {}) {
				htmlCode += '\n<div id="game-guess"\n     class="game-guess-placeholder ', _g.livePeriod.IN === _data.livePeriod && (htmlCode += "ml20"), htmlCode += '"\n     data-period="', htmlCode += _data.livePeriod, htmlCode += '">', _g.livePeriod.IN !== _data.livePeriod ? htmlCode += '\n    <h2>ç«žçŒœ<a href="javascript:;" class="game-guess-my">æˆ‘çš„ç«žçŒœ</a></h2>' : (htmlCode += '\n    <a class="guess-reward" href="/kbsweb/prize.htm?mid=', htmlCode += _g.getParams().mid, htmlCode += '" target="_blank">\n        <img src="http://mat1.gtimg.com/sports/ksf2015/100-100.jpg" alt=""/>\n        ä¸‹è½½è…¾è®¯ä½“è‚²æ‰‹æœºå®¢æˆ·ç«¯å‚ä¸Žç«žçŒœï¼Œè¿˜æœ‰æœºä¼šå‚ä¸ŽæŠ½å¥–å–”ï¼\n    </a>'), htmlCode += '\n    <ul class="', htmlCode += _data.getTheme(_data.livePeriod), htmlCode += '">';
				for (var i = 0, len = _data.length; len > i; i++) switch (0 == i && (_data[i].isFirst = 1), _data[i].livePeriod = _data.livePeriod, _data[i].getChoiceOptsClass = _data.getChoiceOptsClass, _data[i].getImgClass = _data.getImgClass, _data[i].getImgURL = _data.getImgURL, _data[i].choiceType) {
				case "1":
					!
					function(e) {
						htmlCode += '<li class="guess-question guess-text" data-guessid="', htmlCode += e.gid, htmlCode += '">\n    <div class="guess-question-innner">\n        <h3 class="', e.isFirst && (htmlCode += "first"), htmlCode += '" title="', htmlCode += tpHelper.html.escape(e.title), htmlCode += '">', htmlCode += tpHelper.html.escape(e.title), htmlCode += "\n        </h3>";
						for (var t = 0, n = e.choiceOpt.length; n > t; t++) htmlCode += '\n        <div class="guess-item ', htmlCode += e.getChoiceOptsClass(n, t), htmlCode += '">\n            <a href="javascript:;"\n               class="guess-opt"\n               data-cnt="', htmlCode += e.choiceOpt[t].cnt, htmlCode += '"\n               data-guessid="', htmlCode += e.gid, htmlCode += '"\n               data-choiceid="', htmlCode += e.choiceOpt[t].choiceId, htmlCode += '">\n                <span>', htmlCode += tpHelper.html.escape(e.choiceOpt[t].text) || "&nbsp", htmlCode += "</span>\n                <span>", htmlCode += e.choiceOpt[t].cntP, htmlCode += "</span>\n            </a>\n        </div>";
						htmlCode += '\n        <div class="guess-meta">\n            <span class="guess-deadline">', htmlCode += e.endTimeDesc, htmlCode += '</span>\n            <span class="guess-players" data-cnt="', htmlCode += e.participatorCnt, htmlCode += '">', htmlCode += e.participatorCnt, htmlCode += "äººå‚ä¸Ž</span>\n        </div>\n    </div>\n</li>"
					}(_data[i]);
					break;
				case "2":
					!
					function(e) {
						htmlCode += '<li class="guess-question guess-img" data-guessid="', htmlCode += e.gid, htmlCode += '">\n    <div class="guess-question-innner">\n        <h3 class="', e.isFirst && (htmlCode += "first"), htmlCode += '" title="', htmlCode += tpHelper.html.escape(e.title), htmlCode += '">', htmlCode += tpHelper.html.escape(e.title), htmlCode += "\n        </h3>";
						for (var t = 0, n = e.choiceOpt.length; n > t; t++) htmlCode += '\n        <a href="javascript:;"\n           class="guess-item guess-opt ', htmlCode += e.getChoiceOptsClass(n, t), htmlCode += '"\n           data-cnt="', htmlCode += e.choiceOpt[t].cnt, htmlCode += '"\n           data-guessid="', htmlCode += e.gid, htmlCode += '"\n           data-choiceid="', htmlCode += e.choiceOpt[t].choiceId, htmlCode += '">\n            <img src="', htmlCode += e.getImgURL(e.choiceOpt[t].img, n, e.livePeriod), htmlCode += '" alt="', htmlCode += tpHelper.html.escape(e.choiceOpt[t].text), htmlCode += '"/>\n            <span>', htmlCode += tpHelper.html.escape(e.choiceOpt[t].text) || "&nbsp", htmlCode += "</span>\n            <span>", htmlCode += e.choiceOpt[t].cntP, htmlCode += "</span>\n        </a>";
						htmlCode += '\n        <div class="guess-meta">\n            <span class="guess-deadline">', htmlCode += e.endTimeDesc, htmlCode += '</span>\n            <span class="guess-players" data-cnt="', htmlCode += e.participatorCnt, htmlCode += '">', htmlCode += e.participatorCnt, htmlCode += "äººå‚ä¸Ž</span>\n        </div>\n    </div>\n</li>"
					}(_data[i]);
					break;
				case "3":
					!
					function(e) {
						htmlCode += '<li class="guess-question guess-img" data-guessid="', htmlCode += e.gid, htmlCode += '">\n    <div class="guess-question-innner">\n        <h3 class="', e.isFirst && (htmlCode += "first"), htmlCode += '" title="', htmlCode += tpHelper.html.escape(e.title), htmlCode += '">', htmlCode += tpHelper.html.escape(e.title), htmlCode += "\n        </h3>";
						for (var t = 0, n = e.choiceOpt.length; n > t; t++) htmlCode += '\n        <a href="javascript:;"\n           class="guess-item guess-opt ', htmlCode += e.getChoiceOptsClass(n, t), htmlCode += '"\n           data-cnt="', htmlCode += e.choiceOpt[t].cnt, htmlCode += '"\n           data-guessid="', htmlCode += e.gid, htmlCode += '"\n           data-choiceid="', htmlCode += e.choiceOpt[t].choiceId, htmlCode += '">\n            <img src="', htmlCode += e.getImgURL(e.choiceOpt[t].img, n, e.livePeriod), htmlCode += '" alt="', htmlCode += tpHelper.html.escape(e.choiceOpt[t].text), htmlCode += '"/>\n            <span>', htmlCode += tpHelper.html.escape(e.choiceOpt[t].text) || "&nbsp", htmlCode += "</span>\n            <span>", htmlCode += e.choiceOpt[t].cntP, htmlCode += "</span>\n        </a>";
						htmlCode += '\n        <div class="guess-meta">\n            <span class="guess-deadline">', htmlCode += e.endTimeDesc, htmlCode += '</span>\n            <span class="guess-players" data-cnt="', htmlCode += e.participatorCnt, htmlCode += '">', htmlCode += e.participatorCnt, htmlCode += "äººå‚ä¸Ž</span>\n        </div>\n    </div>\n</li>"
					}(_data[i]);
					break;
				case "4":
					!
					function(e) {
						htmlCode += '<li class="guess-question guess-mix" data-guessid="', htmlCode += e.gid, htmlCode += '">\n    <div class="guess-question-innner">\n        <h3 class="', e.isFirst && (htmlCode += "first"), htmlCode += '" title="', htmlCode += tpHelper.html.escape(e.title), htmlCode += '">', htmlCode += tpHelper.html.escape(e.title), htmlCode += '\n        </h3>\n        <img src="', htmlCode += e.getImgURL(e.pic, n, e.livePeriod), htmlCode += '" class="" />';
						for (var t = 0, n = e.choiceOpt.length; n > t; t++) htmlCode += '\n        <div class="guess-item ', htmlCode += e.getChoiceOptsClass(n, t), htmlCode += '">\n            <a href="javascript:;"\n               class="guess-opt"\n               data-cnt="', htmlCode += e.choiceOpt[t].cnt, htmlCode += '"\n               data-guessid="', htmlCode += e.gid, htmlCode += '"\n               data-choiceid="', htmlCode += e.choiceOpt[t].choiceId, htmlCode += '">\n                <span>', htmlCode += tpHelper.html.escape(e.choiceOpt[t].text) || "&nbsp", htmlCode += "</span>\n                <span>", htmlCode += e.choiceOpt[t].cntP, htmlCode += "</span>\n            </a>\n        </div>";
						htmlCode += '\n        <div class="guess-meta">\n            <span class="guess-deadline">', htmlCode += e.endTimeDesc, htmlCode += '</span>\n            <span class="guess-players" data-cnt="', htmlCode += e.participatorCnt, htmlCode += '">', htmlCode += e.participatorCnt, htmlCode += "äººå‚ä¸Ž</span>\n        </div>\n    </div>\n</li>"
					}(_data[i])
				}
				htmlCode += "\n    </ul>\n</div>"
			}
			return htmlCode
		}
	}
});
define69eea4("/output/game-guess-lastest/game-guess-lastest", function(require, exports, module) {
	var utils = (require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils")),
		tpHelper = require("/lib/tpHelper"),
		ke = require("/lib/kEvent");
	require("/lib/jquery.cookie");
	var setHostCookieOption = {
		domain: "sports.qq.com",
		path: "/",
		expires: 1
	},
		NOTICE_DURATION = 10;
	module.exports = {
		init: function() {
			var e = function() {
					$("#guess-lastestNotice").animate({
						width: 0
					})
				},
				t = function() {
					if ($.isFunction($.cookie)) {
						var e = $.cookie("guess_lastest_notice") || "",
							t = utils.getUrlParam("mid");
						if (-1 !== e.indexOf(t)) return;
						e = e.split("|"), e.push(t), e = e.join("|"), $.cookie("guess_lastest_notice", e, setHostCookieOption)
					}
				};
			$(document).on("click", "#guess-lastestNotice .closeNotice", function() {
				e(), t()
			}), $(document).on("click", "#guess-lastestNotice .show-tab-guess", function() {
				var n = $(this);
				$(".live-guess-tab").is(":visible") && $(".live-guess-tab").click(), require("/src/scripts/ui/game/guess/index").update(function() {
					ke("guess").fire("newGuessLoaded", n.data("guessid"))
				}), e(), t()
			});
			var n = 0,
				i = function() {
					clearTimeout(n), $("#guess-lastestNotice").animate({
						width: "320px"
					})
				},
				a = function() {
					n = setTimeout(function() {
						$("#guess-lastestNotice").animate({
							width: 0
						})
					}, 1e3 * NOTICE_DURATION)
				};
			$(document).on("mouseenter", "#guess-lastestNotice", function() {
				i()
			}), $(document).on("mouseleave", "#guess-lastestNotice", function() {
				a()
			}), ke("guess").on("newNotice", function() {
				i(), a()
			})
		},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div id="guess-lastestNotice">\n    <div class="inner">\n        <img src="http://mat1.gtimg.com/sports/kbsweb/statics/icon_guess_circle_5b396e.png" />\n    </div>\n    <a href="javascript:;" class="closeNotice"></a>\n    <h3>', htmlCode += tpHelper.html.escape(_data.title), htmlCode += '</h3>\n    <a href="javascript:;" class="show-tab-guess" data-guessid="', htmlCode += _data.gid, htmlCode += '">ç«‹å³ç«žçŒœ</a>\n</div>';
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/guess/lastestNotice", function(e, t, n) {
	var i = e("/lib/jquery-1.11.3"),
		a = e("/lib/kEvent"),
		r = e("/src/scripts/ui/global");
	e("/lib/jquery.cookie");
	var o = function(e, t) {
			return i.ajax({
				url: window.GUESS_SERVER + "/kbsGuess/latestPool",
				dataType: "jsonp",
				jsonpCallback: "latestPoolCallback",
				data: {
					mid: e,
					gid: t,
					from: "sportsweb"
				}
			})
		},
		s = null,
		l = "",
		c = 10,
		d = 120,
		u = !0,
		h = function() {
			if (i.isFunction(i.cookie)) {
				var e = i.cookie("guess_lastest_notice");
				return e ? -1 === e.indexOf(s || "emptyStr") : !0
			}
			return !0
		};
	a("guess").on("updateFreq", function(e) {
		c > e && (e = c), d = e - 0 || d
	}), n.exports = {
		init: function(t) {
			s = t, h() && (i(".screen").append(e("/output/game-guess-lastest/game-guess-lastest").render({})), e("/output/game-guess-lastest/game-guess-lastest").init(), n.exports.update())
		},
		update: function() {
			r.getParams().debug && console.log((new Date).toLocaleTimeString() + " UPDATE_FREQ->" + d + "ç§’ [guess/lastestNotice.update()]"), h() && (o(s, l).done(function(t) {
				t && 0 === t.code && (t = t.data, t && t.gid && t.gid !== l && (l = t.gid, i("#guess-lastestNotice").replaceWith(e("/output/game-guess-lastest/game-guess-lastest").render(t)), a("guess").fire("newNotice", t.gid, u), u = !1))
			}), setTimeout(function() {
				n.exports.update(s)
			}, 1e3 * d))
		}
	}
});
define69eea4("/src/scripts/ui/game/guess/index", function(e, t, n) {
	var i = e("/lib/jquery-1.11.3"),
		a = e("/src/scripts/ui/global"),
		r = e("/lib/kEvent"),
		o = e("/src/scripts/utils/qqlogin"),
		s = e("/src/scripts/utils/utils");
	e("/lib/jquery.cookie"), e("/lib/jquery.mCustomScrollbar");
	var l = null,
		c = null,
		d = !1,
		u = !1,
		h = !1,
		p = !0,
		f = !0,
		m = 120,
		g = 0,
		v = (i.cookie("uin"), null),
		y = !1,
		C = function(e) {
			return i.ajax({
				url: window.GUESS_SERVER + "/web/poolList",
				dataType: "jsonp",
				jsonpCallback: "poolListCallback",
				data: {
					mid: e,
					from: "sportsweb"
				}
			})
		},
		b = function(e) {
			return i.ajax({
				url: window.GUESS_SERVER + "/web/poolJoinList",
				dataType: "jsonp",
				data: {
					mid: e,
					from: "sportsweb"
				}
			})
		},
		w = function() {
			var e = i(".live-guess .mCSB_container"),
				t = i(".guess-scroll-area");
			return e.length > 0 ? e : t
		},
		x = function() {
			return a.livePeriod.IN === c ? e("/src/scripts/ui/game/guess/betting").theme.DARK : e("/src/scripts/ui/game/guess/betting").theme.LIGHT
		},
		_ = function(e) {
			"function" == typeof e && e.apply(null, Array.prototype.slice.call(arguments, 1))
		},
		k = function(t) {
			s.timerProxy(function() {
				C(l).done(function(n) {
					return n && 0 === n.code && (n = n.data, n && n.updateFreq && !isNaN(n.updateFreq - 0) && (m = n.updateFreq - 0 || m, r("guess").fire("updateFreq", m)), n.onList && i.isArray(n.onList)) ? 0 === n.onList.length && c === a.livePeriod.PRE ? void _(t, n.onList.length) : (n.livePeriod = c, n.onList.livePeriod = c, i('.game-guess-placeholder[data-period="' + c + '"]').replaceWith(e("/output/game-guess/game-guess").render(n.onList)), void _(t, n.onList.length)) : void _(t, !1)
				}).fail(function() {
					_(t, !1)
				})
			}, 1e3, {
				type: "throttle",
				group: "guessList"
			})
		},
		T = function(t) {
			o.isLogin(function(n) {
				return n ? void b(l).done(function(n) {
					if (n && 0 === n.code && (n = n.data, n.waitingList && i.isArray(n.waitingList) || n.drawList && i.isArray(n.drawList))) {
						i("#guess-records").replaceWith(e("/output/game-guess-records/game-guess-records").render(n));
						var a = JSON.stringify(n.drawList);
						return v !== a && (null !== v && r("guess").fire("coinChange"), v = a), void _(t, n.waitingList.length || n.drawList.length)
					}
					_(t, !1)
				}).fail(function() {
					_(t, !1)
				}) : (i("#guess-records").replaceWith(e("/output/game-guess-records/game-guess-records").render({})), void _(t, !1))
			})
		},
		S = !1;
	r("login").on("loginSuccess", function() {
		S || (n.exports.update(), S = !0)
	}), r("guess").on("updateList", function(e) {
		n.exports.update(e)
	});
	var j = null,
		E = null;
	r("guess").on("selectGuessOpt", function(e, t) {
		j = e, E = t
	}), r("guess").on("cancelGuessOpt", function() {
		j = null, E = null
	});
	var q = function() {
			var t = i('.guess-opt[data-guessid="' + j + '"]');
			j && t.length > 0 ? t.filter('[data-choiceid="' + E + '"]').click() : e("/src/scripts/ui/game/guess/betting").hide()
		};
	r("guess").on("updateMatchDetail", function(e) {
		f = e && e.data && 1 == e.data.tabSwitchData ? !0 : !1
	}), n.exports = {
		init: function(t, i) {
			l = t, c = i, a.livePeriod.IN === c && (r("guess").on("newNotice", function(e, t) {
				t || n.exports.update(function() {
					y = !1
				})
			}), e("/src/scripts/ui/game/guess/lastestNotice").init(l)), n.exports.update()
		},
		update: function(t) {
			if (a.livePeriod.IN === c) {
				var o = i(".live-guess-tab").hasClass("live-tabs-current"),
					s = d || u;
				if (f && (!h || s && o || y || !S)) {
					a.getParams().debug && console.log((new Date).toLocaleTimeString() + " UPDATE_FREQ->" + m + "ç§’ [guess/index.update()]");
					var l = null,
						v = null,
						C = function() {
							(l || v) && (h ? i(".live-guess").mCustomScrollbar("update") : (i(".live-guess").mCustomScrollbar({
								theme: "minimal-dark"
							}), h = !0), r("guess").fire("switchON")), 0 != l || v !== !1 && 0 !== v || r("guess").fire("switchOFF")
						};
					k(function(n) {
						l = n, n && !d && (e("/src/scripts/ui/game/guess/betting").init(x(), !0, w()), e("/output/game-guess/game-guess").init(), w().append('<div style="height: 200px"></div>'), d = !0), q(), C(), _(t)
					}), T(function(e) {
						v = e, C(), u = !0
					})
				}
			} else k(function(t) {
				d || (e("/output/game-guess/game-guess").init(), e("/src/scripts/ui/game/guess/betting").init(x()), d = !0, t && r("asideModule").fire("load")), q()
			});
			if (a.livePeriod.IN === c && p) {
				if (g) return;
				g = setTimeout(function() {
					clearTimeout(g), g = 0, n.exports.update()
				}, 1e3 * m)
			}
		}
	}
});
define69eea4("/src/scripts/ui/game/ad", function(e, t, n) {
	"use strict";
	var i = e("/src/scripts/ui/global");
	i.getParams();
	t.init = function(e) {}
});
define69eea4("/src/scripts/ui/game/pre/index", function(e, t, n) {
	var i = e("/src/scripts/ui/global"),
		a = i.getParams(),
		r = e("/lib/kEvent"),
		o = e("/src/scripts/utils/boss");
	o.usePvUvReport({
		game_id: a.mid,
		live_status: i.livePeriod.PRE
	}), o.useEventReport({
		game_id: a.mid,
		live_status: i.livePeriod.PRE,
		module: "èµ›å‰åº•å±‚é¡µ"
	}), r("asideModule").on("load", function() {
		$("#game-ksf-300x90").css("margin-top", "10px")
	}), t.init = function(t) {
		var n = t.data,
			r = n.matchInfo;
		e("/src/scripts/ui/game/pre/detail").render(n), $("body").addClass("loaded"), setTimeout(function() {
			e("/src/scripts/ui/game/tab").init(r.matchType, r.matchPeriod), e("/src/scripts/ui/game/stats").render(function(t) {
				$(".stats-container").append(t), $(".stats-container").on("click", ".game-record", function() {
					o.triggerEventReport({
						action: $(this).data("action"),
						mid: $(this).data("mid")
					}), window.location.href = "./game.htm?mid=" + $(this).data("mid")
				}), e("/src/scripts/ui/game/tab").clearTab()
			}), e("/src/scripts/ui/game/comment").render({
				targetId: n.targetId,
				leftBadge: r.leftBadge,
				rightBadge: r.rightBadge
			}), e("/src/scripts/ui/game/comment").init(), e("/src/scripts/utils/additionalMenu").init({
				scrollDistance: 300,
				disappearTime: 600
			}), e("/src/scripts/ui/game/relatedGame").render(), e("/src/scripts/ui/game/news").render(), e("/src/scripts/ui/game/relPost").render(), e("/src/scripts/ui/game/qrCode").init(), e("/src/scripts/ui/game/guess/index").init(a.mid, i.livePeriod.PRE), e("/src/scripts/ui/game/ad").init(i.livePeriod.END)
		}, 0)
	}
});
define69eea4("/lib/lightips", function(e, t) {
	var n, i = e("/lib/jquery-1.11.3"),
		a = function() {
			var e, t;
			window.innerHeight && window.scrollMaxY ? (e = document.body.scrollWidth, t = window.innerHeight + window.scrollMaxY) : (e = Math.max(document.body.scrollWidth, document.body.offsetWidth), t = Math.max(document.body.scrollHeight, document.body.offsetHeight));
			var n, i;
			n = document.documentElement.clientWidth || document.body.clientWidth, i = document.documentElement.clientHeight || document.body.clientHeight;
			var a = Math.max(t, i),
				r = Math.max(e, n);
			return {
				page: {
					width: r,
					height: a
				},
				window: {
					width: n,
					height: i
				}
			}
		},
		r = function(e) {
			var t = i(window).height(),
				n = i(window).width(),
				a = document.body.scrollTop || document.documentElement.scrollTop,
				r = document.body.scrollLeft || document.documentElement.scrollLeft;
			e.css({
				top: (t - e.height()) / 2 + a,
				left: (n - e.width()) / 2 + r
			})
		},
		o = function(e, t) {
			var n;
			0 === i(".light-box").size() && (n = i('<div class="light-box"></div>').appendTo("body"));
			var o = function() {
					n.css({
						height: a().page.height,
						width: a().page.width
					})
				};
			o();
			var l = {
				open: function() {
					n.show(), r(e), e.show()
				},
				close: function(a) {
					n.hide(), e.fadeOut(function() {
						i.isFunction(a) ? a() : t && i.isFunction(t.onclose) && t.onclose()
					})
				}
			};
			return r(e), i(window).resize(function() {
				r(e), o()
			}), i(window).scroll(function() {
				o(), r(e)
			}), e.mousedown(function(e) {
				e.stopPropagation()
			}), e.delegate("a.close", "click", function() {
				"undefined" != typeof c && clearInterval(c), s.close()
			}), l
		},
		s = null,
		l = function(e) {
			void 0 !== e && (i(document).unbind("mousedown.lboxClose"), e || i(document).bind("mousedown.lboxClose", function(e) {
				s.close(), e.stopPropagation()
			}))
		};
	t.msgContainer = function(e) {
		return i(e).size() > 0 && (n = i(e)), n
	}, t.open = function(e, a, r, l) {
		return n || (n = i('<div class="message-container"></div>').appendTo("body")), i.isFunction(a) || "boolean" == typeof a || "object" != typeof a ? "boolean" != typeof r && "object" == typeof r && (l = r) : l = a, s || (s = o(n, l)), t.updateMsg(e, a, r), s.open(), t
	}, t.updateMsg = function(e, a, r) {
		return "undefined" != typeof e && e.size ? (n.empty(), n.append(e)) : "string" == typeof e && (n.empty(), n.html(e)), i.isFunction(e) && (a = e), "boolean" == typeof e && (r = e), "boolean" == typeof a && (r = a), i.isFunction(a) && a(n), "boolean" == typeof r && l(r), t
	};
	var c;
	t.closeMsg = function(e) {
		return "undefined" != typeof c && clearInterval(c), s && s.close(e), t
	};
	t.countDownMsg = function(e, n, i) {
		t.open(e, function() {}, !0), c = setInterval(function() {
			n--, 0 === n ? (clearInterval(c), s.close()) : n > 0 && i(n)
		}, 1e3)
	}
});
define69eea4("/src/scripts/ui/game/in/multiPerspective", function(e, t, n) {
	var a = e("/src/scripts/ui/global"),
		r = e("/src/scripts/utils/qqlogin"),
		o = (e("/src/scripts/ui/account/vip"), e("/src/scripts/ui/game/vip/miniPay")),
		s = e("/src/scripts/utils/utils"),
		l = e("/src/scripts/utils/player"),
		c = !1,
		d = "",
		u = !1,
		h = "default",
		p = !0,
		f = window.navigator.userAgent,
		m = e("/lib/lightips"),
		g = f.indexOf("Windows NT 5.1") > 0 && f.indexOf("MSIE") > 0,
		v = {
			left: "å·¦ç¯®æ¿",
			right: "å³ç¯®æ¿",
			low: "ä½Žè§’åº¦",
			"default": "ä¸»è§†è§’"
		},
		y = function() {
			return $.ajax({
				url: window.GAME_SERVER + "/kbs/multiCamera",
				dataType: "jsonp",
				jsonpCall: "multiCameraCallback",
				data: {
					mid: matchInfo.mid
				}
			})
		},
		b = function() {
			$(".low-camera-on").hide(), $(".left-camera-on").hide(), $(".right-camera-on").hide()
		},
		C = function(e) {
			l.initLive({
				channelId: e,
				modId: "livingArea",
				width: $("#livingArea").width(),
				height: $("#livingArea").height(),
				targetId: matchInfo.targetId,
				from: "multiCamera"
			})
		};
	ke("multiBtnHover").on("hide", function() {
		p = !1
	}), ke("minipay").on("paySucess", function() {
		u && (_(), b(), $("." + h + "-camera-on").show(), $("." + h + "-camera").hide(), u = !1)
	}), ke("login").on("ptloginClose", function() {
		u = !1, d = "", h = "default"
	}), ke("minipay").on("payClose", function() {
		u = !1, d = "", h = "default"
	}), ke("multiBtn").on("show", function() {
		g ? $(".multi-camera-btn").show() : $(".multi-camera-btn").fadeIn(), setTimeout(function() {
			c || (g ? $(".multi-camera-btn").hide() : $(".multi-camera-btn").fadeOut())
		}, 2e3)
	});
	var w = s.timero(function() {
		g ? $(".multi-camera-btn").hide() : $(".multi-camera-btn").fadeOut()
	}, 500),
		x = s.timero(function() {
			g ? $(".multi-camera-btn").show() : $(".multi-camera-btn").fadeIn()
		}, 100);
	$(".screen").on("mouseover", function() {
		$(".multi-perspective").is(":hidden") && !p && (c = !0, w.clear(), x.run())
	}), $(".screen").on("mouseout", function() {
		c = !1, w.run(), x.clear()
	}), $(".multi-camera-btn").on("click", function() {
		g ? $(this).hide() : $(this).fadeOut(), $(".multi-perspective").show()
	}), $(".multi-close").on("click", function() {
		g ? $(".multi-camera-btn").show() : $(".multi-camera-btn").fadeIn(), $(".multi-perspective").hide()
	}), $(".left-camera,.right-camera,.low-camera").on("click", function() {
		h !== $(this).data("direction") && ($("." + h + "-camera").show(), d = $(this).data("vid"), h = $(this).data("direction"), b(), $(this).hide(), $("." + h + "-camera-on").show(), _())
	}), $(".multi-default-btn").on("click", function() {
		$("." + h + "-camera").show(), "default" !== h && ($(this).hide(), C(matchInfo.liveId), $(".multi-camera-btn").html("ä¸»è§†è§’"), h = "default", b(), $(".multi-perspective").hide())
	}), $("#vipErrorDialog").on("click", ".tip-close", function() {
		m.closeMsg(function() {
			d = "", h = "default"
		})
	});
	var _ = function() {
			y().done(function(e) {
				if (2 === e.code) $("." + h + "-camera-on").hide(), $("." + h + "-camera").show(), r.userLogin(1, function() {
					_()
				});
				else if (0 === e.code)"1" === e.data.vipStatus ? ($("." + h + "-camera-on").show(), $(".multi-perspective").hide(), C(e.data.multiCamera[h]), $(".multi-camera-btn").html(v[h]), $(".multi-default-btn").show()) : ($("." + h + "-camera-on").hide(), $("." + h + "-camera").show(), u = !0, r.needLogin(!0).then(function() {
					o.showPay({
						aid: a.remark({
							refer: 103,
							page: 2
						})
					})
				}));
				else if (-1 === e.code) {
					$("." + h + "-camera-on").hide(), $("." + h + "-camera").show();
					var t = '<div class="tip-content"></div><a class="tip-close">X</a>';
					m.msgContainer("#vipErrorDialog"), m.open(t), $("#vipErrorDialog").show()
				}
			}).fail(function() {
				$("." + h + "-camera").show(), b(), $("." + h + "-camera-on").hide(), u = !1, d = "", h = "default"
			})
		},
		k = function(e) {
			if (e) {
				$("#multiEntrance").show(), $(".multi-perspective").height(parseInt(parseInt($(".screen").height()) - 98));
				for (i in e) $("." + i + "-camera").show(), $("." + i + "-camera-desc").show(), $("." + i + "-camera-on").is(":visible") && $("." + i + "-camera").hide();
				var t = $(".multi-perspective").height();
				$(window).width() < 1580 ? ($(".multi-perspective").addClass("mini-size"), $(".multi-content").css("margin-top", (t - 270) / 2)) : ($(".multi-perspective").removeClass("mini-size"), $(".multi-content").css("margin-top", (t - 520) / 2))
			} else $("#multiEntrance").hide()
		};
	return {
		init: k
	}
});
define69eea4("/output/empty-stats/empty-stats", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div class="empty-stats" role="', htmlCode += role, htmlCode += '">\n    æš‚æ— æ•°æ®ï¼Œæ•¬è¯·æœŸå¾…\n</div>';
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/in/stats", function(e, t, n) {
	var i = (e("/src/scripts/utils/boss"), e("/src/scripts/ui/global"));
	n.exports.render = function(t) {
		e("/src/scripts/ui/game/stats").render(function(n) {
			$(".live-stats-container").html(n), e("/output/player-data/player-data").init();
			for (var a = 0; a < i.statsTabs.length; a++) 0 === $("div[role=" + i.statsTabs[a] + "]").length && $(".live-stats-container").append(e("/output/empty-stats/empty-stats").render({
				role: i.statsTabs[a]
			}));
			e("/src/scripts/ui/game/tab").init(t.matchType, t.livePeriod)
		})
	}
});
define69eea4("/src/scripts/ui/game/in/detail", function(e, t, n) {
	var i, a = e("/src/scripts/ui/global"),
		r = a.getParams(),
		o = e("/lib/kEvent");
	t.render = function(n) {
		if (a.getParams().liveDebug && (a.getParams().livePeriod && (matchInfo.livePeriod = a.getParams().livePeriod, n.matchInfo.livePeriod = matchInfo.livePeriod), a.getParams().liveType && (matchInfo.liveType = a.getParams().liveType, n.matchInfo.liveType = matchInfo.liveType)), e("/src/scripts/ui/game/in/multiPerspective").init(n.multiCamera), n.matchInfo.livePeriod === a.livePeriod.END) return void setTimeout(function() {
			window.location.reload()
		}, 1e3 * Math.floor(120 * Math.random()));
		if ($(".live-head-container").html(e("/output/game-head/game-head").render({
			gameData: n
		})).removeClass("hidden"), e("/output/game-head/game-head").init(), n.matchInfo.matchType !== a.gameType.EVENT && ($(".live-support-bar-container").html(e("/output/support-bar/support-bar").render({
			leftSupport: n.leftSupport,
			rightSupport: n.rightSupport
		})), e("/output/support-bar/support-bar").init()), n.updateFrequency) {
			var s = parseInt(n.updateFrequency, 10);
			i = setTimeout(function() {
				$.ajax({
					url: window.GAME_SERVER + "/kbs/matchDetail",
					dataType: "jsonp",
					jsonpCallback: "matchDetailCallback",
					data: {
						mid: r.mid
					}
				}).done(function(n) {
					0 !== n.code && e("/src/scripts/utils/utils").show404(), o("guess").fire("updateMatchDetail", n);
					var i = n.data;
					t.render(i), $(window).height() + $(document).scrollTop() > $(".stats-box").offset().top && e("/src/scripts/ui/game/in/stats").render(i.matchInfo)
				})
			}, 1e3 * (s > a.MIN_REFRESH_DELAY ? s : a.MIN_REFRESH_DELAY))
		}
	}
});
define69eea4("/output/live-tabs/live-tabs", function(require, exports, module) {
	var _g = (require("/lib/jsonselect"), require("/src/scripts/ui/global")),
		tpHelper = (require("/src/scripts/utils/utils"), require("/lib/tpHelper"));
	module.exports = {
		init: function() {
			$(".live-tabs h3").on("click", function() {
				if (!$(this).hasClass("live-tabs-current")) {
					var e = $(this).data("target");
					"live-highlights" === e && $(".new-logo").is(":visible") && $(".new-logo").hide(), "live-word" === e ? ke("playByPlay").fire("enter") : ke("playByPlay").fire("exit"), $(".live-tabs h3").removeClass("live-tabs-current"), $(this).addClass("live-tabs-current"), $(".live-content").hide(), $("." + e).show(), "live-highlights" === e && ke("highlights").fire("enter"), "live-comment" === e ? ke("wechat").fire("enter") : ke("wechat").fire("exit")
				}
			}), 1 === $(".live-tabs h3").length && $(".live-tabs h3").off("click").addClass("nohover");
			var e = "live-tabs-width2 live-tabs-width3 live-tabs-width4 live-tabs-width-quarter",
				t = {
					tabs2: ["live-tabs-width2", "live-tabs-width2"],
					tabs3: ["live-tabs-width3", "live-tabs-width4", "live-tabs-width3"],
					tabs4: ["live-tabs-width-quarter", "live-tabs-width-quarter", "live-tabs-width-quarter", "live-tabs-width-quarter"]
				},
				n = "live-tabs-hide",
				i = function() {
					var n = $(".live-tabs h3").not(".live-tabs-hide").length;
					$(".live-tabs h3").removeClass(e).each(function(e) {
						$(this).addClass(t["tabs" + n][e])
					})
				};
			ke("guess").on("switchON", function() {
				$(".live-guess-tab").removeClass(n), i()
			}), ke("guess").on("switchOFF", function() {
				$(".live-guess-tab").addClass(n), i(), $(".live-tabs h3").filter(":visible").eq(0).click()
			})
		},
		render: function(data) {
			var _data = data;
			_data = ("undefined" != typeof ___kkit___ ? ___kkit___.tph : tpHelper).mixin(_data, {
				getTabWidthClass: function(e, t, n) {
					return e.tabSwitchGuess && "0" !== e.tabSwitchGuess ? n : t
				}
			});
			var htmlCode = "";
			with(_data || {}) htmlCode += '', liveType == _g.liveType.VIDEO && "" !== liveIdPictureWord ? (htmlCode += '\n<h3\n    class="', htmlCode += _data.getTabWidthClass(_data, "live-tabs-width3", "live-tabs-width-quarter"), htmlCode += ' live-tabs-current boss"\n    data-target="live-comment"\n    data-action="å¤§å®¶èŠtab">å¤§å®¶èŠ</h3>\n<h3\n    class="', htmlCode += _data.getTabWidthClass(_data, "live-tabs-width4", "live-tabs-width-quarter"), htmlCode += ' boss"\n    data-target="live-word"\n    data-action="å›¾æ–‡tab">å›¾æ–‡</h3>\n<h3\n    class="', htmlCode += _data.getTabWidthClass(_data, "live-tabs-width3", "live-tabs-width-quarter"), htmlCode += ' live-highlights-tab boss"\n    data-target="live-highlights"\n    data-action="é›†é”¦tab">\n    <span class="new-logo">NEW</span>\n    é›†é”¦\n</h3>\n<h3\n    class="', htmlCode += _data.getTabWidthClass(_data, "live-tabs-hide", "live-tabs-width-quarter"), htmlCode += ' live-guess-tab boss"\n    data-target="live-guess"\n    data-action="ç«žçŒœtab">ç«žçŒœ</h3>') : (htmlCode += '\n<h3\n    class="', htmlCode += _data.getTabWidthClass(_data, "live-tabs-width2", "live-tabs-width3"), htmlCode += ' live-tabs-current"\n    data-target="live-comment">å¤§å®¶èŠ</h3>\n<h3\n    class="', htmlCode += _data.getTabWidthClass(_data, "live-tabs-width2", "live-tabs-width4"), htmlCode += ' live-highlights-tab"\n    data-target="live-highlights">\n    <span class="new-logo">NEW</span>\n    é›†é”¦\n</h3>\n<h3\n    class="', htmlCode += _data.getTabWidthClass(_data, "live-tabs-hide", "live-tabs-width3"), htmlCode += ' live-guess-tab boss"\n    data-target="live-guess"\n    data-action="ç«žçŒœtab">ç«žçŒœ</h3>');
			return htmlCode
		}
	}
});
define69eea4("/output/wechat-content/wechat-content", function(require, exports, module) {
	var tpHelper = (require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper"));
	module.exports = {
		render: function(data) {
			var _data = data;
			_data = ("undefined" != typeof ___kkit___ ? ___kkit___.tph : tpHelper).mixin(_data, {
				getAvatar: function(e) {
					return e && e.head ? e.head : ""
				}
			});
			var htmlCode = "";
			with(_data || {}) {
				htmlCode += '';
				for (var renderFaceIcon = require("/src/scripts/utils/face").renderFaceIcon, i = _data.length - 1; i >= 0; i--) if ((_data[i].id !== window.newSubmitId || _data[i].isSelf) && "" !== _data[i].content) if (_data[i].userinfo.userid === window.userId)!
				function(e) {
					htmlCode += '<div id="comcon_', htmlCode += e.id, htmlCode += '" class="comment_content">\n<div class="user_avatar my_avatar">';
					var t = getAvatar(e.userinfo);
					t ? (htmlCode += '\n    <img class="comment_gravator row" src="', htmlCode += t, htmlCode += '">') : htmlCode += '\n    <img class="comment_gravator row" src="http://mat1.gtimg.com/sports/kbsweb/statics/defaultUser_c5b594.png">', htmlCode += '\n</div>\n<div class="comment_right row my_comment_right">\n    <span class="my_arrow"></span>\n\n    <div class="comment_info">\n        <!--ç”¨æˆ·åç§°-->', e.tagself > 0 && (htmlCode += '\n        <img class="tag_host my_host" src="', htmlCode += 1 == e.tagself ? window.matchInfo.leftBadge : window.matchInfo.rightBadge, htmlCode += '"/>'), htmlCode += '\n            <span class="name row blue">', htmlCode += e.userinfo.nick, htmlCode += "  ", htmlCode += e.isSelf ? "åˆšåˆš" : e.timeDifference, htmlCode += '\n            </span>\n\n    </div>\n    <!--è¯„è®ºåŠè¯„è®ºæ—¶é—´-->\n    <span class="comment silver row">', htmlCode += renderFaceIcon(e.content), htmlCode += '</span>\n\n    <div class="clear"></div>\n</div>\n</div>'
				}(_data[i]);
				else {
					_data[i].id;
					htmlCode += '\n            <div id="comcon_', htmlCode += _data[i].id, htmlCode += '" class="comment_content">\n                <div class="user_avatar">';
					var avatar = getAvatar(_data[i].userinfo);
					avatar ? (htmlCode += '\n                        <img class="comment_gravator row" src="', htmlCode += avatar, htmlCode += '">') : htmlCode += '\n                        <img class="comment_gravator row" src="http://mat1.gtimg.com/sports/kbsweb/statics/defaultUser_c5b594.png">', htmlCode += '\n                </div>\n                <div class="comment_right row">\n                    <span class="they_arrow"></span>\n            \n                    <div class="comment_info">\n                                   ', _data[i].tagself > 0 && (htmlCode += '\n                        <img class="tag_host"\n                             src="', htmlCode += 1 == _data[i].tagself ? window.matchInfo.leftBadge : window.matchInfo.rightBadge, htmlCode += '"/>'), htmlCode += '\n                        <span class="name row blue">', htmlCode += _data[i].userinfo.nick, htmlCode += "&nbsp;", htmlCode += _data[i].timeDifference.split(" ")[0], htmlCode += '\n                        </span>\n            \n                    </div>\n                                  \n                    <span class="comment silver row">', htmlCode += renderFaceIcon(_data[i].content), htmlCode += '</span>\n            \n                    <div class="clear"></div>\n                </div>\n            </div>'
				}
			}
			return htmlCode
		}
	}
});
define69eea4("/output/wechat-user/wechat-user", function(require, exports, module) {
	var utils = (require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils")),
		login = (require("/lib/tpHelper"), require("/src/scripts/utils/qqlogin"));
	module.exports = {
		init: function() {
			var e = function() {
					var e = $("#iWantToSay").val();
					!/\S+/.test(e) || e.length <= 0 ? t("è¯·è¾“å…¥å†…å®¹ï¼") : e.length > 1e3 ? t("å­—æ•°è¶…å‡ºé™åˆ¶ï¼") : utils.timerProxy(function() {
						$("#commentform").submit()
					}, 1e3, {
						type: "throttle",
						group: "submitComment"
					})
				},
				t = function(e) {
					var t = $("#comment_systemTips");
					t.html(e).fadeIn("400"), setTimeout(function() {
						t.fadeOut("400")
					}, 1e3)
				},
				n = function() {
					var e = $("#mod-comment #iWantToSay");
					$("#commenttaghost").val($("#commenttagself").val());
					var t = $("#mod-comment #iWantToSay").data("commentid");
					$("#commentform").attr("action", "http://w.coral.qq.com/article/comment/" + (t ? "to/" + t : "")), 0 == e.attr("subtype") && e.attr("subtype", 1)
				},
				i = function() {
					login.isLogin(function(e) {
						e ? n() : login.needLogin().then(function() {
							require("/src/scripts/ui/game/vip/vipPlayer").init(matchInfo.liveId, matchInfo.targetId), $("#float-layer").css("display", "none")
						})
					})
				};
			window.commentSubmitToMyFrameCallback = function(e) {
				ke("comment").fire("submitReceived", e)
			}, $("#commentsubmit").on("click", function() {
				login.isLogin(function(t) {
					t ? e() : userLogin()
				})
			}), $("#mod-comment #iWantToSay").on("keyup", function(t) {
				t.ctrlKey && 13 == t.keyCode && e(), 1 != $(this).attr("subtype") && (this.value.length > 0 ? $("#answerTips").hide() : $("#answerTips").show())
			}), $("#mod-comment #iWantToSay").on("focus", function() {
				i()
			}), $("#mod-comment .comment_face").on("click", function(e) {
				var t = $(this).data("status");
				"open" === t ? ($(".wechat_face").removeClass("wechat_face_border"), $(this).data("status", "close"), $("#mod-comment .comment_self").animate({
					bottom: "-=150px"
				}, 500), $("#mod-comment").animate({
					height: "+=150px"
				}, 500), $(".wechat_face").animate({
					height: 0
				}, 500, function() {
					$(".wechat_face>div").hide()
				})) : (i(), $(this).data("status", "open"), $("#mod-comment .comment_self").animate({
					bottom: "+=150px"
				}, 500), $("#mod-comment").animate({
					height: "-=150px"
				}, 500, function() {
					$("#iWantToSay").trigger("click"), ke("wechat").fire("showFace")
				}), $(".wechat_face>div").show(), $(".wechat_face").animate({
					height: "150px"
				}, 500), $(".wechat_face").addClass("wechat_face_border"))
			})
		},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div class="comment_right" id="publishComment">\n    <div class="comment_info">\n        <img id="commentgravator" class="comment_gravator row" src="http://mat1.gtimg.com/sports/kbsweb/statics/defaultUser_c5b594.png">\n        <img id="commentsupportTeam" class="row" src="http://mat1.gtimg.com/sports/kbsweb/statics/defaultTeam_6c7a49.png" alt="">\n        <div id="commentuserName" class="name row blue"></div>\n        <a href="javascript:;" class="shouqi" id="shouqi" style="display:none"></a>\n    </div>\n    <form charset="utf-8" id="commentform" class="comment_publish row" method="post" action="" target="myFrame">\n        <div id="answerTips" class="answerTips stopslidedown" style="display:none"></div>\n        <textarea name="content" type="1" subtype="0" class="iWantToSay stopslidedown" id="iWantToSay" cols="30" rows="10"></textarea>\n        <input id="commentsubmit" class="submit stopslidedown"  type="button" value="å‘å¸ƒ">\n        <input id="commentappid" name="appid" type="hidden" value="10006">\n        <input id="commenttargetid" name="targetid"  type="hidden" value="">\n        <input id="commenttagself" name="tagself"  type="hidden" value="0">\n        <input id="commenttaghost" name="taghost"  type="hidden" value="0">\n        <input id="commentg_tk" name="g_tk"  type="hidden" value="0">\n        <input id="commentcallback" name="callback"  type="hidden" value="parent.commentSubmitToMyFrameCallback">\n        <input name="_method"  type="hidden" value="put">\n        <input name="format"  type="hidden" value="SCRIPT">\n        <input name="type"  type="hidden" value="2">\n        <input name="code"  type="hidden" value="0">\n        <input id="commentopenid" name="openid"  type="hidden" value="">\n        <input id="commentlogintype" name="logintype"  type="hidden" value="">\n        <input id="commentaccesstoken" name="access_token"  type="hidden" value="">\n        <div class="comment_face row stopslidedown"></div>\n        <div id="comment_systemTips" class="comment_systemTips none"></div>\n    </form>\n</div>\n<iframe style="width:0; height:0;display:none" name="myFrame" src="about:blank"></iframe>';
			return htmlCode
		}
	}
});
define69eea4("/output/wechat-face/wechat-face", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper"), require("/src/scripts/utils/qqlogin");
	module.exports = {
		init: function() {
			$(".qq_face").mCustomScrollbar({
				theme: "minimal-dark",
				advanced: {
					autoUpdate: !1
				}
			}), $(".face_tab>div").on("click", function() {
				var e = $(this).data("control");
				$(".face_tab>div").removeClass("current"), $(".face_content>div").hide(), $("." + e).show(), $(".face_tab>div span").removeClass("current"), $(this).addClass("current").find("span").addClass("current"), $(".qq_face").mCustomScrollbar("update")
			}), $(".face_content a").on("click", function() {
				$("#iWantToSay").val($("#iWantToSay").val() + "[" + $(this).attr("title") + "]"), $("#face-mod,#answerTips").hide()
			})
		},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div class="face_content">\n    <div class="qq_face">\n        <a href="javascript:;" class="y1 qqface_bg" title="å¼€å¿ƒ"></a>\n        <a href="javascript:;" class="y2 qqface_bg" title="å¯çˆ±"></a>\n        <a href="javascript:;" class="y3 qqface_bg" title="å‘æ€’"></a>\n        <a href="javascript:;" class="y4 qqface_bg" title="æ“¦æ±—"></a>\n        <a href="javascript:;" class="y5 qqface_bg" title="åç¬‘"></a>\n        <a href="javascript:;" class="y6 qqface_bg" title="æƒŠæ"></a>\n        <a href="javascript:;" class="y7 qqface_bg" title="æ³ªå¥”"></a>\n        <a href="javascript:;" class="y8 qqface_bg" title="å·ç¬‘"></a>\n        <a href="javascript:;" class="y9 qqface_bg" title="è°ƒçš®"></a>\n\n        <a href="javascript:;" class="y10 qqface_bg" title="å’’éª‚"></a>\n        <a href="javascript:;" class="y11 qqface_bg" title="å§”å±ˆ"></a>\n        <a href="javascript:;" class="y19 qqface_bg" title="è‰²"></a>\n        <a href="javascript:;" class="y20 qqface_bg" title="é„™è§†"></a>\n        <a href="javascript:;" class="y12 qqface_bg" title="é—­å˜´"></a>\n        <a href="javascript:;" class="y13 qqface_bg" title="å‘å‘†"></a>\n        <a href="javascript:;" class="y14 qqface_bg" title="ç–²æƒ«"></a>\n        <a href="javascript:;" class="y15 qqface_bg" title="æŠ é¼»"></a>\n        <a href="javascript:;" class="y16 qqface_bg" title="é˜´é™©"></a>\n\n        <a href="javascript:;" class="y17 qqface_bg" title="æ™•"></a>\n        <a href="javascript:;" class="y18 qqface_bg" title="æŠ“ç‹‚"></a>\n        <a href="javascript:;" class="y21 qqface_bg" title="å"></a>\n        <a href="javascript:;" class="y22 qqface_bg" title="å¥‹æ–—"></a>\n        <a href="javascript:;" class="y28 qqface_bg" title="å°´å°¬"></a>\n        <a href="javascript:;" class="y29 qqface_bg" title="é¼“æŽŒ"></a>\n        <a href="javascript:;" class="y30 qqface_bg" title="æ‰“çžŒç¡"></a>\n        <a href="javascript:;" class="y31 qqface_bg" title="å¤§ç¬‘"></a>\n        <a href="javascript:;" class="y23 qqface_bg" title="å¾—æ„"></a>\n\n        <a href="javascript:;" class="y24 qqface_bg" title="æƒŠè®¶"></a>\n        <a href="javascript:;" class="y25 qqface_bg" title="å†·æ±—"></a>\n        <a href="javascript:;" class="y26 qqface_bg" title="ç–‘é—®"></a>\n        <a href="javascript:;" class="y27 qqface_bg" title="å˜˜"></a>\n        <a href="javascript:;" class="y32 qqface_bg" title="äº²äº²"></a>\n        <a href="javascript:;" class="y33 qqface_bg" title="å›°"></a>\n        <a href="javascript:;" class="y37 qqface_bg" title="å“¼"></a>\n        <a href="javascript:;" class="y38 qqface_bg" title="æ„£"></a>\n        <a href="javascript:;" class="y39 qqface_bg" title="æ‰®é…·"></a>\n\n        <a href="javascript:;" class="y40 qqface_bg" title="å³å“¼å“¼"></a>\n        <a href="javascript:;" class="y41 qqface_bg" title="å·¦å“¼å“¼"></a>\n        <a href="javascript:;" class="y42 qqface_bg" title="æŠ˜ç£¨"></a>\n        <a href="javascript:;" class="y34 qqface_bg" title="è‹¦æ¶©"></a>\n        <a href="javascript:;" class="y35 qqface_bg" title="å¯æ€œ"></a>\n        <a href="javascript:;" class="y36 qqface_bg" title="çžŸ"></a>\n        <a href="javascript:;" class="y43 qqface_bg" title="å†·é…·"></a>\n        <a href="javascript:;" class="y46 qqface_bg" title="è¡°"></a>\n        <a href="javascript:;" class="y44 qqface_bg" title="éª·é«…"></a>\n\n        <a href="javascript:;" class="y45 qqface_bg" title="èˆ”"></a>\n        <a href="javascript:;" class="y47 qqface_bg" title="é¡¶"></a>\n        <a href="javascript:;" class="y48 qqface_bg" title="è¸©"></a>\n        <a href="javascript:;" class="y49 qqface_bg" title="æ•²æ‰“"></a>\n        <a href="javascript:;" class="y50 qqface_bg" title="å¿ƒç¢Ž"></a>\n        <a href="javascript:;" class="y51 qqface_bg" title="æ¡æ‰‹"></a>\n        <a href="javascript:;" class="y52 qqface_bg" title="èƒœåˆ©"></a>\n        <a href="javascript:;" class="y53 qqface_bg" title="é€Š"></a>\n        <a href="javascript:;" class="y54 qqface_bg" title="æ‰“ä½"></a>\n\n        <a href="javascript:;" class="y61 qqface_bg" title="èœåˆ€"></a>\n        <a href="javascript:;" class="y55 qqface_bg" title="æ‰‹é›·"></a>\n        <a href="javascript:;" class="y56 qqface_bg" title="ä¾¿ä¾¿"></a>\n        <a href="javascript:;" class="y57 qqface_bg" title="ç¯®çƒ"></a>\n        <a href="javascript:;" class="y58 qqface_bg" title="è¶³çƒ"></a>\n        <a href="javascript:;" class="y59 qqface_bg" title="é—ªç”µ"></a>\n        <a href="javascript:;" class="y60 qqface_bg" title="æ‹³å¤´"></a>\n        <a href="javascript:;" class="y62 qqface_bg" title="çŒªå¤´"></a>\n        <a href="javascript:;" class="y63 qqface_bg" title="ä¹’ä¹“çƒ"></a>\n    </div>\n    <div class="kbs_face" style="display: none">\n        <a href="javascript:;" class="f1 kbsface_bg" title="2B"></a>\n        <a href="javascript:;" class="f2 kbsface_bg" title="æš´è„¾æ°”"></a>\n        <a href="javascript:;" class="f3 kbsface_bg" title="æ†‹å±ˆ"></a>\n        <a href="javascript:;" class="f4 kbsface_bg" title="è°„åªš"></a>\n        <a href="javascript:;" class="f5 kbsface_bg" title="æŠ½è„¸"></a>\n        <a href="javascript:;" class="f6 kbsface_bg" title="æ·¡å®š"></a>\n        <a href="javascript:;" class="f7 kbsface_bg" title="å“ˆå“ˆ"></a>\n        <a href="javascript:;" class="f8 kbsface_bg" title="æ†¨"></a>\n        <a href="javascript:;" class="f9 kbsface_bg" title="çº¢ç‰Œç½šä¸‹"></a>\n\n        <a href="javascript:;" class="f17 kbsface_bg" title="åç¬‘å•¦"></a>\n        <a href="javascript:;" class="f18 kbsface_bg" title="é»„ç‰Œè­¦å‘Š"></a>\n        <a href="javascript:;" class="f10 kbsface_bg" title="ç‹‚å–œ"></a>\n        <a href="javascript:;" class="f11 kbsface_bg" title="ç‹‚èº"></a>\n        <a href="javascript:;" class="f12 kbsface_bg" title="æ³ªæµä¸æ­¢"></a>\n        <a href="javascript:;" class="f13 kbsface_bg" title="å–èŒ"></a>\n        <a href="javascript:;" class="f14 kbsface_bg" title="çž§ä¸ä¸Š"></a>\n        <a href="javascript:;" class="f15 kbsface_bg" title="çŸ³åŒ–"></a>\n        <a href="javascript:;" class="f16 kbsface_bg" title="æ— è¯­äº†"></a>\n\n        <a href="javascript:;" class="f19 kbsface_bg" title="ç¾žæ¶©"></a>\n    </div>\n</div>\n<div class="face_tab">\n    <div class="qq_tab current" data-control="qq_face">\n        <span class="current"></span>\n    </div>\n    <div class="kbs_tab" data-control="kbs_face">\n        <span></span>\n    </div>\n    <div class="tab_default"></div>\n</div>';
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/in/wechat", function(e, t, n) {
	var i = e("/src/scripts/utils/utils"),
		a = "http://mat1.gtimg.com/sports/sportAppWeb/dcimg/defaultUser.png",
		r = e("/src/scripts/utils/qqlogin");
	e("/lib/jquery.mCustomScrollbar");
	var o = 0,
		s = 6e4,
		l = 0,
		c = 0,
		d = {
			14: "è¯·å‹¿é‡å¤å‘å¸ƒï¼",
			12: "è¯·å‹¿é¢‘ç¹å‘å¸ƒï¼",
			13: "ç¦æ­¢è¯„è®ºï¼",
			9: "ç”¨æˆ·é»‘åå•ï¼",
			8: "è¯·ç™»å½•"
		};
	window.newSubmitId = 0;
	var u = {
		tag: "",
		appid: 10006,
		isInit: 0,
		userinfo: {
			head: a,
			nick: "æˆ‘"
		},
		ttt: null
	},
		h = function(e) {
			var t = 2013;
			if (e) for (var n = 0, i = e.length; i > n; n++) t += (t << 5) + e.charCodeAt(n);
			return 2147483647 & t
		},
		p = function(e) {
			var t = $("#comment_systemTips");
			t.html(e).fadeIn("400"), setTimeout(function() {
				t.fadeOut("400")
			}, 1e3)
		},
		m = i.iInterval(function() {
			f()
		}, s),
		f = function() {
			i.timerProxy(function() {
				$.ajax({
					url: "http://live.coral.qq.com/?targetid=" + o + "&commentid=" + l + "&reqnum=20",
					dataType: "jsonp",
					jsonpCallback: "pushFn",
					success: function(t) {
						if (0 == t.errCode) {
							var n = t.data.commentid;
							l = t.data.first, 0 === l && n && 0 === n.length ? $(".wechat_shafa").show() : $(".wechat_shafa").remove(), n && $("#mod-comment .comment_all").hide().append(e("/output/wechat-content/wechat-content").render(n)).show(), setTimeout(function() {
								if (m.start(), $("#mod-comment .comment_all").hide(), $(".comment_content").length > 100) for (var e = $(".comment_content").length - 100, t = 0; e > t; t++) $(".comment_content").eq(t).remove();
								$("#mod-comment .comment_all").show(), $(".comment_all_p").mCustomScrollbar("update"), $(".comment_all_p").mCustomScrollbar("scrollTo", "bottom")
							}, 100)
						}
					}
				}), m.stop()
			}, 500, {
				type: "throttle",
				group: "renderNewComment"
			})
		},
		g = function(e) {
			"left" === e ? ($("#commentsupportTeam").attr("src", window.matchInfo.leftBadge), $("#commenttagself").val(1)) : "right" === e ? ($("#commentsupportTeam").attr("src", window.matchInfo.rightBadge), $("#commenttagself").val(2)) : ($("#commentsupportTeam").attr("src", "http://mat1.gtimg.com/sports/kbsweb/statics/defaultTeam_6c7a49.png"), $("#commenttagself").val(""))
		},
		v = function() {
			window.supportInfo ? g(window.supportInfo) : ke("support").on("support", function(e) {
				g(e)
			})
		},
		y = function() {
			var e = {
				source: 5
			};
			"wx" === r.getLoginType() && ($.extend(e, r.getWxLoginCookie()), e.logintype = 1), $.ajax({
				url: "http://coral.qq.com/user/0",
				dataType: "jsonp",
				data: e,
				success: function(e) {
					0 != e.errCode ? window.userId = 0 : window.userId = e.data.userid, b(c), $("#mod-comment").show(), $(".live-comment.is-current-tab").show()
				}
			})
		},
		b = function(t) {
			0 == u.isInit && ($("#mod-comment .comment_self").html(e("/output/wechat-user/wechat-user").render()), e("/output/wechat-user/wechat-user").init(), v(), r.getUserInfo(function(e) {
				if (e.isLogin) if ($("#commentgravator").attr("src", e.avatar), $("#commentuserName").html(e.nick), "wx" === e.mainLogin) $("#commentg_tk").val(h(e.access_token)), $("#commentaccesstoken").val(e.access_token), $("#commentappid").val(e.appid), $("#commentopenid").val(e.openid), $("#commentlogintype").val(1);
				else {
					var t = $.cookie("skey");
					$("#commentg_tk").val(h(t ? t : $.cookie("lskey")))
				}
			})), t && (u.isInit = 1, o = t, $("#mod-comment").data("articleid", o), $("#commentappid").val(u.appid), $("#commenttargetid").val(o), f())
		};
	return ke("comment").on("submitReceived", function(t) {
		0 == t.errCode ? ($("#comment_shafa").remove(), $.extend(t.data.userinfo, {
			userid: t.data.userid
		}), window.newSubmitId = t.data.commentid, $("#mod-comment .comment_all").append(e("/output/wechat-content/wechat-content").render([{
			id: t.data.commentid,
			content: t.data.content,
			userinfo: t.data.userinfo,
			isSelf: !0,
			tagself: $("#commenttagself").val()
		}])), $(".comment_all_p").stop(!0, !0), setTimeout(function() {
			$(".comment_all_p").mCustomScrollbar("update"), $(".comment_all_p").mCustomScrollbar("scrollTo", "bottom")
		}, 100), $("#iWantToSay").val("")) : 8 == t.errCode ? r.userLogin(1, function() {
			$("#commentsubmit").trigger("click")
		}) : (p(d[t.errCode] || "ç³»ç»Ÿé”™è¯¯ï¼Œè¯·ç¨åŽé‡è¯•ï¼"), $("#iWantToSay").blur())
	}), ke("login").on("loginSuccess", function(e) {
		if (u.userinfo.head = e.avatar ? e.avatar : a, u.userinfo.nick = e.nick, $("#commentgravator").attr("src", u.userinfo.head), $("#commentuserName").html(u.userinfo.nick), "wx" === e.mainLogin) $("#commentg_tk").val(h(e.access_token)), $("#commentaccesstoken").val(e.access_token), $("#commentappid").val(e.appid), $("#commentopenid").val(e.openid), $("#commentlogintype").val(1);
		else {
			var t = $.cookie("skey");
			$("#commentg_tk").val(h(t ? t : $.cookie("lskey")))
		}
		y()
	}), ke("login").on("loginFailed", function() {
		b(c)
	}), ke("login").on("logout", function() {
		$("#commentgravator").attr("src", a), $("#commentuserName").html(""), $("#commentg_tk").val(""), $("#commentopenid").val(""), $("#commentaccesstoken").val(""), $("#commentlogintype").val(""), window.userId = 0, b(c), $("#mod-comment").show(), $(".live-comment.is-current-tab").show()
	}), ke("wechat").on("showFace", function() {
		$(".wechat_face").html(e("/output/wechat-face/wechat-face").render()), e("/output/wechat-face/wechat-face").init()
	}), ke("wechat").on("enter", function() {
		$(".live-comment").show().addClass("is-current-tab"), $(".comment_all_p").mCustomScrollbar("update")
	}), ke("wechat").on("exit", function() {
		$(".live-comment").removeClass("is-current-tab").hide()
	}), $(function() {
		$("body").delegate("#comment_shafa", "click", function(e) {
			$("#iWantToSay").click()
		}), matchInfo.livePeriod === e("/src/scripts/ui/global").livePeriod.IN && ($(window).on("blur", function() {
			m.stop()
		}), $(window).on("focus", function() {
			m.start()
		}), $(window).focus()), $(window).resize(function() {
			i.timerProxy(function() {
				$(".comment_all_p").mCustomScrollbar("update")
			}, 100)
		}), $(".comment_all_p").mCustomScrollbar({
			theme: "minimal-dark",
			setTop: "100px",
			advanced: {
				autoUpdate: !1
			}
		}), $(".comment_all_p").hover(function() {
			$(".comment_all_p").mCustomScrollbar("update")
		}), $("#mod-comment").on("click", ".comment_face", function(e) {
			setTimeout(function() {
				$(".qq_face").mCustomScrollbar("update")
			}, 1e3)
		})
	}), {
		render: function(e) {
			$("#mod-comment").show(), c = e, r.isLogin(function(e) {
				e ? y() : (window.userId = 0, $("#mod-comment").show(), b(c), $(".live-comment.is-current-tab").show())
			})
		}
	}
});
define69eea4("/src/scripts/ui/game/in/highlights", function(e, t, n) {
	var i = e("/src/scripts/ui/global"),
		a = e("/src/scripts/utils/utils"),
		o = e("/src/scripts/utils/player"),
		r = "",
		s = i.getParams().mid,
		l = function() {
			$.ajax({
				url: window.GAME_SERVER + "/kbs/matchVideo",
				jsonpCallback: "jsonpIn2Hightlights",
				dataType: "jsonp",
				data: {
					mid: s,
					vids: r
				}
			}).done(function(t) {
				if (0 === t.code) {
					var n = t.data.period;
					if (r = t.data.vids, t.data.totalList && t.data.totalList.length > 0) {
						var a = e("/output/highlights-list/highlights-list").render({
							list: t.data.totalList
						});
						$(".no-content").length > 0 && $(".no-content").remove(), $(".live-box .highlights-scroll-area").html(a), e("/output/highlights-list/highlights-list").init(n), $(".live-highlights").mCustomScrollbar("update")
					}
					"1" !== t.data.isNew || $(".live-highlights-tab").hasClass("live-tabs-current") || $(".new-logo").show(), n === i.livePeriod.IN && setTimeout(function() {
						l()
					}, 3e5)
				}
			})
		};
	return ke("highlights").on("enter", function() {
		$(".live-highlights").mCustomScrollbar("update")
	}), $(".live-content.live-highlights").on("click", ".videoPlayBottomRightBd", function() {
		o.initVideoWhenLive({
			vid: $(this).data("vid"),
			width: $("#livingArea").width(),
			height: $("#livingArea").height()
		}), $(".videoPlayBottomRightBd").removeClass("highlights-current"), $(this).addClass("highlights-current")
	}), {
		init: function() {
			$.ajax({
				url: window.GAME_SERVER + "/kbs/matchVideo",
				dataType: "jsonp",
				jsonpCallback: "jsonpInHightlights",
				data: {
					mid: s
				}
			}).done(function(t) {
				0 === t.code && (r = t.data.vids, t.data.totalList.length > 0 && ($(".videoPlayBottomRightBd").removeClass("highlights-current"), $(".live-box .highlights-scroll-area").html(e("/output/highlights-list/highlights-list").render({
					list: t.data.totalList
				})), e("/output/highlights-list/highlights-list").init(), $(".live-box .highlights-scroll-area").parents(".album-container").removeClass("hidden"), $(".live-tab-content").removeClass("hidden")), $(".live-highlights").mCustomScrollbar("update"), setTimeout(function() {
					l()
				}, 6e4))
			}), $(".live-highlights").mCustomScrollbar({
				theme: "minimal-dark",
				advanced: {
					autoUpdate: !1
				}
			}), $(window).resize(function() {
				a.timerProxy(function() {
					$(".live-highlights").mCustomScrollbar("update")
				}, 100)
			})
		}
	}
});
define69eea4("/output/openmember-floatlayer/openmember-floatlayer", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div id="members-layer">\n    <div class="member">\n        <div class="member-left">\n            <p class="member-title">å¼€é€šä¼šå‘˜è§‚çœ‹å…¨åœºæ¯”èµ›</p>\n            <dl>\n                <dt><a id="open-member" href="javascript:void(0);" class="boss" data-action="å¼€é€šä¼šå‘˜">å¼€é€šä¼šå‘˜</a></dt>\n                <dd><p><em>30</em>å…ƒ/æœˆ</p>\n                </dd>\n            </dl>\n            <a class="adrian-coupon" data-frompage="after-login">ä½¿ç”¨è§‚èµ›åŠµè§‚çœ‹æœ¬åœºç›´æ’­</a>\n            <p class="vip-title">VIPä¼šå‘˜ç‰¹æƒï¼š</p>\n            <ul>\n                <li>ç«‹å³è§£é”å…¨éƒ¨èµ›äº‹é«˜æ¸…ç›´æ’­ã€å›žæ”¾ç‰¹æƒ</li>\n                <li>è®©å¥½å‹å°½æƒ…ä»°æœ›ï¼Œæ¯å¤©ä»…éœ€1å…ƒ</li>\n            </ul>\n        </div>\n        <div class="member-right">\n            <p class="WeChat-title">ç‰¹æƒ æ´»åŠ¨</p>\n            <img width="100" height="100" src="http://mat1.gtimg.com/sports/kbsweb/statics/bydh5_74bbe6.png">\n            <p class="pay">çŽ©æ¯”äºšè¿ªå”H5æ¸¸æˆï¼Œèµ¢ä¼šå‘˜NBAä»»æ€§çœ‹ï¼</p>\n        </div>\n    </div>\n</div>';
			return htmlCode
		}
	}
});
define69eea4("/output/login-floatlayer/login-floatlayer", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div id="float-layer">\n    <div class="float-cont">\n        <div class="float-title">\n            <p>å°Šæ•¬çš„ç”¨æˆ·ï¼š</p>\n            <p>æœ¬åœºæ˜¯ä»˜è´¹æ¯”èµ›ï¼Œç™»å½•å¯ä»¥å…è´¹è¯•çœ‹5åˆ†é’Ÿ</p>\n        </div>\n        <div class="float-login"><a href="javascript:;" class="login">ç™»å½•</a><a href="javascript:;" class="open-member">å¼€é€šä¼šå‘˜</a></div>\n        <a class="adrian-coupon" data-frompage="before-login">ä½¿ç”¨è§‚èµ›åŠµè§‚çœ‹æœ¬åœºç›´æ’­</a>\n        <div class="float-members">\n            <p>VIPä¼šå‘˜ç‰¹æƒï¼š</p>\n            <ul>\n                <li>ç«‹å³è§£é”å…¨éƒ¨èµ›äº‹é«˜æ¸…ç›´æ’­ã€å›žæ”¾ç‰¹æƒ</li>\n                <li>è®©å¥½å‹å°½æƒ…ä»°æœ›ï¼Œæ¯å¤©ä»…éœ€1å…ƒ</li>\n            </ul>\n        </div>\n    </div>\n</div>';
			return htmlCode
		}
	}
});
define69eea4("/output/player-tip/player-tip", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div class="player_tips_wrap">\n    <iframe frameborder="0" class="iframe_mask"></iframe>\n    <p class="tips_txt">è¯•çœ‹ä¸­ï¼Œ <a href="javaScript:void(0)" id="open-vip" class="boss" data-action="å¼€é€šä¼šå‘˜">å¼€é€šä¼šå‘˜</a>æˆ–<a id="adrian-coupon" href="javaScript:void(0)"> ä½¿ç”¨è§‚èµ›åˆ¸</a> è§‚çœ‹å®Œæ•´æ¯”èµ›</p>\n</div>';
			return htmlCode
		}
	}
});
define69eea4("/output/watching-ticket-tip/watching-ticket-tip", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div class="watching_ticket_tips_container" style="width:570px;height:370px;">\n    <div class="watching_ticket_tips_header"><h3>è§‚èµ›åˆ¸å…‘æ¢</h3>\n        <button class="close" title="å…³é—­"></button>\n    </div>\n    <div class="price_container"><img class="ticket_icon" src="http://mat1.gtimg.com/sports/kbsweb/statics/icon1_bda43c.png"><span\n            class="font18 marginleft20 intro">æ¯å¼ è§‚èµ›åˆ¸</span>\n        <img src="http://mat1.gtimg.com/sports/kbsweb/statics/slash_c148cb.png"><img src="http://mat1.gtimg.com/sports/kbsweb/statics/kcoin_3ab3ac.png"><span class="font24">', htmlCode += _data.kb2ticket, htmlCode += '</span><span class="font14 gray"> Kå¸</span>\n    </div>', _data.success ? _data.fail ? (htmlCode += '\n    <div class="success_tips"><img src="http://mat1.gtimg.com/sports/kbsweb/statics/fail_3ba747.png">å…‘æ¢å¤±è´¥ï¼</div>\n    <div class="msg">', htmlCode += _data.msg, htmlCode += "</div>") : (htmlCode += '\n    <div class="success_tips"><img src="http://mat1.gtimg.com/sports/kbsweb/statics/success_172d21.png">å…‘æ¢æˆåŠŸï¼</div>\n    <div class="msg">', htmlCode += _data.msg, htmlCode += "</div>") : (htmlCode += '\n    <div class="exchange_container">\n        <div><span class="left">é’±åŒ…ä½™é¢ï¼š</span><img src="http://mat1.gtimg.com/sports/kbsweb/statics/diamond_146969.png"><span\n                class="font14 gray"> <em>', htmlCode += _data.diamond, htmlCode += '</em> é’»çŸ³ </span><img class="kcoin" src="http://mat1.gtimg.com/sports/kbsweb/statics/kcoin_3ab3ac.png">\n            <span class="font14 gray"> <em>', htmlCode += _data.kb, htmlCode += '</em> Kå¸</span></div>\n        <div><span class="left">å…‘æ¢æ•°é‡ï¼š</span><img src="http://mat1.gtimg.com/sports/kbsweb/statics/ticket_097331.png"> <input value="1"><span class="error_tips red">æœ¬æœˆè¿˜å¯ä»¥å…‘æ¢', htmlCode += _data.limit, htmlCode += 'å¼ </span></div>\n        <div><span class="left">æ¶ˆè€—ï¼š</span><img src="http://mat1.gtimg.com/sports/kbsweb/statics/kcoin_3ab3ac.png" class="kcoin"><span class="font14 gray"> <em\n                class="orange strong js_needkb">', htmlCode += _data.kb2ticket, htmlCode += "</em> Kå¸</span></div>", _data.kb < _data.kb2ticket ? _data.diamond >= _data.diamond2ticket ? (htmlCode += '\n        <div class="tips"><span>æ‚¨çš„Kå¸ä¸å¤Ÿå•¦ï¼Œå°†ä½¿ç”¨<em class="js_needDiamond">', htmlCode += _data.diamond2ticket, htmlCode += '</em>é’»çŸ³æŠµæ‰£</span>ï¼ˆ1é’»çŸ³=10Kå¸ï¼‰</div>\n        <button class="exchange_ticket_button">å…‘æ¢</button>') : (htmlCode += '\n        <div class="tips"><span class="orange">æ‚¨çš„Kå¸å’Œé’»çŸ³éƒ½ä¸å¤Ÿå•¦ï¼Œè¯·è‡³å°‘å……å€¼<em class="js_lackDiamond orange">', htmlCode += _data.diamond2ticket - _data.diamond, htmlCode += '</em>é’»çŸ³</span>ï¼ˆ1é’»çŸ³=10Kå¸ï¼‰</div>\n        <button class="js_buy_diamond_button">ç«‹å³å……å€¼</button>') : htmlCode += '\n        <div class="tips"></div>\n        <button class="exchange_ticket_button">å…‘æ¢</button>', htmlCode += "\n    </div>"), htmlCode += "\n</div>";
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/vip/watchingTicketsTips", function(e, t, n) {
	var i = e("/lib/jquery-1.11.3"),
		a = e("/src/scripts/utils/utils"),
		o = a.layerAutoResize,
		r = e("/lib/lightips"),
		s = e("/src/scripts/utils/qqlogin");
	o(".cash_dialog_wrap");
	var l = function(e) {
			this.elTarget = e.elTarget || i(window), this.kb = 0, this.diamond = 0, this.diamond2ticket = 150, this.kb2ticket = 1500, this.success = !1, this.fail = !1, this.buyTicketLock = !1, this.msg = "", this.limit = 10
		},
		c = !1;
	l.prototype = {
		init: function() {
			var e = this;
			e.getKb({
				show: !0
			}), e.isInit || (e.bindEvent(), e.isInit = !0)
		},
		getKb: function(e) {
			var t = this;
			c || (c = !0, t.show(), i.ajax({
				url: window.GUESS_SERVER + "/sportsWeb/balance",
				data: {
					type: "1,2,3"
				},
				dataType: "jsonp"
			}).done(function(n) {
				c = !1, 0 === n.code && (t.diamond == n.data.diamond && e && e.updateMsg ? t.getKb({
					updateMsg: !0
				}) : (t.kb = n.data.kb, t.diamond = n.data.diamond, t.kb2ticket = n.data.kb2ticket, t.diamond2ticket = n.data.diamond2ticket, t.updateMsg()))
			}), i.ajax({
				url: window.GUESS_SERVER + "/sportsWeb/ticketProducts",
				dataType: "jsonp"
			}).done(function(n) {
				c = !1, 0 === n.code && (t.limit = n.data.limit, e && e.updateMsg && t.updateMsg(), t.ticketCountChange())
			}))
		},
		show: function() {
			var t = this,
				n = e("/output/watching-ticket-tip/watching-ticket-tip").render({
					kb: t.kb,
					diamond: t.diamond,
					kb2ticket: t.kb2ticket,
					diamond2ticket: t.diamond2ticket,
					success: t.success,
					fail: t.fail,
					msg: t.msg,
					limit: t.limit
				});
			r.msgContainer("#successDialog"), r.open(n), i("#successDialog").show()
		},
		updateMsg: function() {
			var t = this,
				n = e("/output/watching-ticket-tip/watching-ticket-tip").render({
					kb: t.kb,
					diamond: t.diamond,
					kb2ticket: t.kb2ticket,
					diamond2ticket: t.diamond2ticket,
					success: t.success,
					fail: t.fail,
					msg: t.msg,
					limit: t.limit
				});
			r.updateMsg(n)
		},
		bindEvent: function() {
			var e = this;
			i(document).on("click", ".message-container .close", function() {
				r.closeMsg(function() {
					ke("buyTicketTip").fire("close")
				})
			}), i(document).on("click", ".exchange_ticket_button", function() {
				i(".exchange_ticket_button").hasClass("background_gray") || e.buyTicketLock || e.buyTicket()
			}), i(document).on("click", ".js_buy_diamond_button", function() {
				i(".js_buy_diamond_button").hasClass("background_gray") || e.buyDiamond()
			}), i(document).on("change", ".exchange_container input", function() {
				e.ticketCountChange()
			}), i(document).on("propertychange", ".exchange_container input", function() {
				e.ticketCountChange()
			}), i(document).on("input", ".exchange_container input", function() {
				e.ticketCountChange()
			})
		},
		buyTicket: function() {
			var e = this;
			e.buyTicketLock = !0;
			var t = i(".exchange_container input")[0].value || 1,
				n = 2;
			e.kb >= e.kb2ticket * t ? n = 2 : e.diamond >= e.diamond2ticket * t && (n = 1), i.ajax({
				url: window.GUESS_SERVER + "/sportsWeb/buyTicket",
				data: {
					cnt: t,
					type: n
				},
				dataType: "jsonp"
			}).done(function(t) {
				e.buyTicketLock = !1, 0 !== t.code ? (e.success = !0, e.fail = !0) : e.success = !0, e.msg = t.msg, e.updateMsg(), setTimeout(function() {
					r.closeMsg(function() {
						e.fail || ke("buyTicketTip").fire("buySuccess"), e.success = !1, e.fail = !1, e.updateMsg()
					})
				}, 2e3)
			})
		},
		buyDiamond: function() {
			var e = this,
				t = !1;
			i(".diamond-mask").show(), s.needLogin(!0).then(function() {
				var n = "wx" === s.getLoginType() ? {
					openid: i.cookie("openid"),
					access_token: i.cookie("access_token"),
					wx_appid: "wx5ed58254bc0d6b7f"
				} : null;
				cashier.dialog.mobileBuy({
					codes: "txtjdb",
					title: "ä½“è‚²ä¼šå‘˜é’»çŸ³",
					params: n,
					debug: a.getUrlParam("sandbox"),
					onSuccess: function(n) {
						t = !0, i(".exchange_container").html('<div class="loading"></div>'), setTimeout(function() {
							e.getKb({
								updateMsg: !0
							})
						}, 2e3)
					},
					onClose: function(n) {
						t === !0 && e.updateMsg(), i(".diamond-mask").hide()
					}
				})
			})
		},
		ticketCountChange: function() {
			var e, t = this,
				n = i(".exchange_container input")[0].value;
			e = i(".exchange_container button"), n ? (n = n.trim().substring(0, 2), n = parseInt(n, 10), n = isNaN(n) ? 1 : n, i(".exchange_container input")[0].value = n, i(".js_needkb").html(t.kb2ticket * n), i(".js_needDiamond").html(t.diamond2ticket * n), i(".js_lackDiamond").html(t.diamond2ticket * n - t.diamond), t.kb2ticket * n <= t.kb ? (i(".exchange_container .tips").html(""), e[0].className = "exchange_ticket_button", e.html("å…‘æ¢")) : t.diamond2ticket * n <= t.diamond ? (i(".exchange_container .tips").html('<span>æ‚¨çš„Kå¸ä¸å¤Ÿå•¦ï¼Œå°†ä½¿ç”¨<em class="js_needDiamond">' + t.diamond2ticket * n + "</em>é’»çŸ³æŠµæ‰£</span>ï¼ˆ1é’»çŸ³=10Kå¸ï¼‰"), e[0].className = "exchange_ticket_button", e.html("å…‘æ¢")) : (i(".exchange_container .tips").html('<span class="orange">æ‚¨çš„Kå¸å’Œé’»çŸ³éƒ½ä¸å¤Ÿå•¦ï¼Œè¯·è‡³å°‘å……å€¼<em class="js_lackDiamond orange">' + (t.diamond2ticket * n - t.diamond) + "</em>é’»çŸ³</span>ï¼ˆ1é’»çŸ³=10Kå¸ï¼‰"), e[0].className = "js_buy_diamond_button", e.html("ç«‹å³å……å€¼")), n > t.limit ? (i(".exchange_container .error_tips").show(), e.addClass("background_gray")) : (0 == n ? e.addClass("background_gray") : e.removeClass("background_gray"), i(".exchange_container .error_tips").hide())) : e.addClass("background_gray")
		},
		hide: function(e) {
			r.closeMsg(function() {
				e && e()
			})
		}
	}, t.getInstance = function(e) {
		var t = {};
		return e && i.extend(t, e), new l(t)
	}
});
define69eea4("/output/use-watching-ticket/use-watching-ticket", function(require, exports, module) {
	require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/lib/tpHelper");
	module.exports = {
		init: function() {},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) htmlCode += '\n<div class="use-watching-ticket" style="width:360px;height:200px;">\n    <div class="use-watching-ticket-header"><h3 class="font14">ä½¿ç”¨è§‚èµ›åˆ¸</h3>\n        <button class="use-watching-ticket-close" title="å…³é—­"></button>\n    </div>\n    <div class="use-watching-ticket-text">æ‚¨æœ‰<span></span>å¼ è§‚èµ›åŠµï¼Œç¡®å®šä½¿ç”¨1å¼ ?</div>\n    <div class="use-watching-ticket-error"></div>\n    <div class="use-watching-ticket-options font14"><a class="use-watching-ticket-confirm" href="javascript:;">ç¡®å®š</a><a class="use-watching-ticket-cancel" href="javascript:;">å–æ¶ˆ</a></div>\n</div>';
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/vip/watching-ticket", function(e, t, n) {
	var i = e("/lib/lightips"),
		a = e("/src/scripts/utils/qqlogin"),
		o = e("/src/scripts/ui/global"),
		r = e("/src/scripts/ui/game/vip/vipPlayer"),
		s = e("/src/scripts/ui/game/vip/watchingTicketsTips").getInstance({}),
		l = e("/src/scripts/ui/account/payGame"),
		c = function(e, t, n) {
			var i;
			return function() {
				var a = this,
					o = arguments,
					r = function() {
						i = null, n || e.apply(a, o)
					},
					s = n && !i;
				clearTimeout(i), i = setTimeout(r, t), s && e.apply(a, o)
			}
		},
		d = function() {
			r.init(matchInfo.liveId, matchInfo.targetId), setTimeout(function() {
				$("#float-layer, #members-layer, .player_tips_wrap").css("display", "none")
			}, 1e3)
		},
		u = function() {
			s.init(), ke("buyTicketTip").on("buySuccess", function() {
				f(), ke("guess").fire("coinChange")
			}), ke("buyTicketTip").on("close", function() {})
		};
	$("body").on("click", ".message-container .use-watching-ticket-close, .message-container .use-watching-ticket-cancel", function() {
		i.closeMsg()
	});
	var h = 1e3,
		p = c(function() {
			$.ajax({
				url: window.GAME_SERVER + "/ticket/consume?mid=" + matchInfo.mid,
				dataType: "jsonp"
			}).done(function(e) {
				0 === e[0] && (0 == e[1].status || 101 == e[1].status ? matchInfo.liveType === o.liveType.VIDEO && matchInfo.liveId && matchInfo.targetId && i.closeMsg(function() {
					d(), $(".use-watching-ticket-text").show(), $(".use-watching-ticket-error").hide()
				}) : 100 == e[1].status ? u() : ($(".use-watching-ticket-text").hide(), $(".use-watching-ticket-error").show(), $(".use-watching-ticket-error").text(e[1].msg + "ï¼Œè¯·åˆ·æ–°é¡µé¢é‡è¯•"), setTimeout(function() {
					window.location.reload()
				}, 2e3)))
			})
		}, h, !0),
		m = c(function() {
			var e = $(this);
			a.needLogin(!0).then(function() {
				"before-login" === e.data("frompage") && ($("#float-layer").hide(), $("#members-layer").css({
					width: $(".screen").width() + "px",
					height: $(".screen").height() + "px",
					top: $(".screen").offset().top + "px"
				}).show()), l.isPayedGame(function(e) {
					0 == e.isUserPay ? f() : (r.init(matchInfo.liveId, matchInfo.targetId), $("#float-layer, #members-layer, .player_tips_wrap").css("display", "none"))
				})
			})
		}, h, !0);
	$("body").on("click", ".message-container .use-watching-ticket-confirm", p);
	var f = function() {
			$.ajax({
				url: window.GUESS_SERVER + "/sportsWeb/balance?type=3",
				dataType: "jsonp"
			}).done(function(t) {
				0 === t.code && (0 == t.data.ticket ? u() : (i.open(e("/output/use-watching-ticket/use-watching-ticket").render()), $(".use-watching-ticket-text span").text(t.data.ticket)))
			})
		};
	return {
		init: function() {
			$(".adrian-coupon, #adrian-coupon").click(m)
		}
	}
});
define69eea4("/src/scripts/ui/game/vip/sportsPay", function(e, t, n) {
	function i(e) {
		(2 === e.cmd || 1 === e.cmd) && $("#members-layer").css({
			width: $(".screen").width() + "px",
			height: $(".screen").height() + "px",
			top: $(".screen").offset().top + "px"
		}).show()
	}
	var a, o, r, s = e("/src/scripts/utils/qqlogin"),
		l = e("/src/scripts/ui/global"),
		c = $(".additional"),
		d = e("/src/scripts/ui/game/vip/miniPay"),
		u = e("/src/scripts/utils/utils"),
		h = e("/src/scripts/ui/account/payGame"),
		p = e("/src/scripts/ui/game/vip/vipPlayer"),
		m = function() {
			s.needLogin(!0).then(function() {
				h.isPayedGame(function(e) {
					0 == e.isUserPay && d.showPay(a, o, {
						aid: l.remark({
							refer: 111,
							page: 2,
							mid: r
						})
					}), p.init(a, o), $("#float-layer").css("display", "none"), $("#members-layer").css("display", "none")
				})
			})
		},
		f = function() {
			s.needLogin().then(function() {
				p.init(a, o), $("#float-layer").css("display", "none")
			})
		};
	return ke("login").on("logout", function() {
		window.location.reload()
	}), {
		init: function(t) {
			var n = window.matchInfo || {};
			a = t.liveId, o = t.targetId, r = n.mid, c.append(e("/output/openmember-floatlayer/openmember-floatlayer").render()), c.append(e("/output/login-floatlayer/login-floatlayer").render()), $(".screen").append(e("/output/player-tip/player-tip").render()), e("/src/scripts/ui/game/vip/watching-ticket").init(), $(".open-member").on("click", function(e) {
				m(), e.preventDefault()
			}), $("#open-member").on("click", function(e) {
				s.needLogin(!0).then(function() {
					d.showPay(a, o, {
						aid: l.remark({
							refer: 106,
							page: 2,
							mid: r
						})
					})
				}), e.preventDefault()
			}), $(".screen").on("click", "#open-vip", function(e) {
				s.needLogin(!0).then(function() {
					d.showPay(a, o, {
						aid: l.remark({
							refer: 105,
							page: 2,
							mid: r
						})
					})
				}), e.preventDefault()
			}), $("#onekey").off("click"), $("#onekey").on("click", function() {
				f()
			}), $(".login").on("click", function() {
				f()
			}), s.isLogin(function(e) {
				if (e) p.init(a, o);
				else {
					var t = $("#float-layer");
					t.css("width", $(".screen").width() + "px"), t.css("height", $(".screen").height() + "px"), t.css("display", "block")
				}
			}), window.__tenplay_showPayTips = i, $(window).resize(function() {
				u.timerProxy(function() {
					var e = $(".section").width(),
						t = parseInt(9 * e / 16),
						n = $("#members-layer"),
						i = $("#float-layer");
					n.css("width", e), n.css("height", t), i.css("width", e), i.css("height", t)
				}, 100, "sportsPay")
			})
		}
	}
});
define69eea4("/output/play-by-play/play-by-play", function(require, exports, module) {
	var _g = (require("/lib/jsonselect"), require("/src/scripts/ui/global")),
		tpHelper = (require("/src/scripts/utils/utils"), require("/lib/tpHelper"));
	module.exports = {
		init: function() {
			var e = function(e, t, n) {
					var i = new Image;
					i.src = n.src;
					var a, o, r = 1,
						s = i.width,
						l = i.height;
					o = e / s, a = t / l, 0 == e && 0 == t ? r = 1 : 0 == e ? 1 > a && (r = a) : 0 == t ? 1 > o && (r = o) : (1 > o || 1 > a) && (r = a >= o ? o : a), 1 > r && (s *= r, l *= r), n.height = l, n.width = s
				},
				t = function(e) {
					$(".image-shadow").show();
					var t = $(".popup-image-container img");
					t.on("load", function() {
						$(".popup-image-container").show();
						var e = t.width(),
							n = t.height();
						e > 800 && (e = 800, t.width(e), n = t.height()), n > 800 && (n = 800, t.height(n), e = t.width()), $(".popup-image-container").css("margin-top", 0 - n / 2), $(".popup-image-container").css("margin-left", 0 - e / 2), $(".image-shadow, .popup-image-container").on("click", function() {
							$(".image-shadow, .popup-image-container").hide()
						})
					}), t.attr("src", e)
				};
			$(".event-image img").on("load", function() {
				e(135, 90, this)
			}).on("click", function() {
				t(this.src)
			})
		},
		render: function(data) {
			var _data = data;
			_data = ("undefined" != typeof ___kkit___ ? ___kkit___.tph : tpHelper).mixin(_data, {
				eventImages: ["", "http://mat1.gtimg.com/sports/sportAppWeb/img/hongpai.png", "http://mat1.gtimg.com/sports/sportAppWeb/img/huangpai.png", "http://mat1.gtimg.com/sports/sportAppWeb/dcimg/huanren.png", "http://mat1.gtimg.com/sports/sportAppWeb/img/football.png", "http://mat1.gtimg.com/sports/sportAppWeb/dcimg/shoushang.png", "http://mat1.gtimg.com/sports/sportAppWeb/dcimg/dianqiu.png", "http://mat1.gtimg.com/sports/sportAppWeb/dcimg/wulong.png"],
				fixPlayerIconUrl: function(e) {
					return e.indexOf("http://") < 0 && (e = "http://img1.gtimg.com" + e), e
				},
				renderFaceIcon: require("/src/scripts/utils/face").renderFaceIcon,
				getTeamLogo: function(e) {
					var t = _g.getMatchInfo();
					return e.teamId == t.homeId ? t.homeBadge : e.teamId == t.awayId ? t.awayBadge : void 0
				},
				getEventImage: function(e) {
					return e && e.length > 0 ? _data.eventImages[e.pop()] : ""
				}
			});
			var htmlCode = "";
			with(_data || {}) if (isLiving) for (var isBasketball = _g.getMatchInfo().gameType === _g.gameType.BASKETBALL, i = 0; i < detailIndex.length; i++) {
				var eventData = detailContents[detailIndex[i]];
				if ("undefined" != typeof eventData) {
					var eventImage = isBasketball ? _data.getTeamLogo(eventData) : _data.getEventImage(eventData.event);
					if (htmlCode += '\n        <li class="event-item">', "1" == eventData.ctype ? (htmlCode += '\n                <div class="side-info host-avatar">', eventData.commentator && eventData.commentator.logo ? (htmlCode += '\n                        <img title="', htmlCode += eventData.commentator.nick || "", htmlCode += '" src="', htmlCode += eventData.commentator.logo, htmlCode += '">') : htmlCode += '\n                        <img alt="ç›´æ’­å‘˜" src="http://mat1.gtimg.com/sports/kbsweb/statics/default-user-avatar_b43f98.png">') : (htmlCode += '\n                <div class="side-info">\n                    <span class="event-time">', htmlCode += eventData.time || eventData.quarter || "", htmlCode += "</span>"), htmlCode += '\n                <span class="spot"></span>\n            </div>\n            <div class="event-detail">\n                <div class="detail-container">', "1" == eventData.ctype && eventData.commentator && (htmlCode += '\n                        <div class="host-info">\n                            <span class="host-name">', htmlCode += eventData.commentator.nick || "", htmlCode += '</span>\n                            <span class="host-description">', htmlCode += eventData.commentator.role || "", htmlCode += "</span>\n                        </div>"), eventImage && (htmlCode += '\n                        <div class="score-info">\n                            <img src="', htmlCode += eventImage, htmlCode += '">\n                            <span', htmlCode += isNewData ? ' class="js-new-event"' : "", htmlCode += ">", htmlCode += eventData.plus ? eventData.plus : "", htmlCode += "</span>\n                        </div>"), eventData.content && (htmlCode += '\n                        <div class="event-text">', htmlCode += eventData.content, htmlCode += "\n                        </div>"), eventData.image && eventData.image.urls) {
						htmlCode += '\n                        <div class="event-image boss" data-action="å›¾æ–‡ç›´æ’­ä¸­çš„å›¾">';
						for (var j = 0; j < eventData.image.urls.length; j++) htmlCode += '\n                                <img src="', htmlCode += eventData.image.urls[j].large, htmlCode += '" alt="å›¾ç‰‡">';
						htmlCode += "\n                        </div>"
					}
					eventData.player && eventData.player.icon && (htmlCode += '\n                        <div class="event-quote">\n                            <div class="event-star">\n                                <div class="player-avatar">\n                                    <img src="', htmlCode += fixPlayerIconUrl(eventData.player.icon), htmlCode += '" alt="', htmlCode += eventData.player.name, htmlCode += '">\n                                </div>\n                                <div class="player-info">\n                                    <span class="player-name">', htmlCode += eventData.player.name, htmlCode += '</span>\n                                    <br>\n                                    <span class="player-stats">', htmlCode += eventData.player.statDesc || "", htmlCode += "</span>\n                                </div>\n                            </div>\n                        </div>"), eventData.comment && (htmlCode += '\n                        <div class="event-quote">\n                            <div class="event-comment">\n                                <p>', htmlCode += _data.renderFaceIcon(eventData.comment.content), htmlCode += '</p>\n                                <p class="author">â€”â€”â€”â€”', htmlCode += eventData.comment.userinfo.nick, htmlCode += "</p>\n                            </div>\n                        </div>"), eventData.video && (htmlCode += '\n                        <div class="event-quote boss" data-action="å›¾æ–‡ç›´æ’­ä¸­çš„è§†é¢‘" data-vid="eventData.video.vid">\n                            <div class="event-video">\n                                <div class="shot">\n                                    <a class="play-video" data-vid="', htmlCode += eventData.video.vid, htmlCode += '" href="javascript:void(0);">\n                                        <img src="', htmlCode += eventData.video.imgurl, htmlCode += '" alt="', htmlCode += eventData.video.title, htmlCode += '">\n                                        <div class="darker-bg"></div>\n                                        <div class="play-circle"></div>\n                                        <div class="play-icon"></div>\n                                    </a>\n                                </div>\n                                <div class="title">', htmlCode += eventData.video.title, htmlCode += "</div>\n                            </div>\n                        </div>"), htmlCode += "\n                </div>\n            </div>\n        </li>"
				}
			} else htmlCode += '\n    <li class="event-item" id="indexPlaceholder">\n        <div class="side-info">\n            <span class="event-time">00:00</span>\n            <span class="spot"></span>\n        </div>\n        <div class="event-detail">\n            <div class="detail-container">\n                    <div class="event-text">ç›´æ’­å³å°†å¼€å§‹ï¼Œæ•¬è¯·æœŸå¾…ï¼\n                    </div>\n            </div>\n        </div>\n    </li>';
			return htmlCode
		}
	}
});
define69eea4("/src/scripts/ui/game/in/playByPlay", function(e, t, n) {
	"use strict";
	var i, a, o, r, s, l, c, d, u, p, h, m = 20,
		f = 300,
		g = 0,
		v = "main",
		y = function() {
			$.ajax({
				url: window.GAME_SERVER + "/textLive/index",
				data: {
					competitionId: p.competitionId,
					matchId: p.matchId,
					AppName: "kanbisai",
					AppOS: "iphone",
					AppVersion: "1.0",
					webVersion: 1,
					random: Math.random()
				},
				dataType: "jsonp",
				jsonpCallback: "textLiveIndex"
			}).done(function(e) {
				0 != e[0] || l || (r = e[1], C(e[1]))
			})
		},
		b = function(e) {
			if (d && i) {
				if (e.length == i.length) return [];
				for (var t = 0; t < e.length; t++) if (i[t] != e[t]) {
					var n = e.length < t + m ? e.length : t + m;
					return i = e.slice(0, n), e.slice(t, n)
				}
			}
			var a = e.length < m ? e.length : m;
			return e.slice(0, a)
		},
		C = function(t) {
			if (t.length > 0) {
				if (a = t, o = b(t), 0 === o.length) return;
				$.ajax({
					url: window.GAME_SERVER + "/textLive/detail",
					data: {
						competitionId: p.competitionId,
						matchId: p.matchId,
						AppName: "kanbisai",
						AppOS: "iphone",
						AppVersion: "1.0",
						webVersion: 1,
						random: Math.random(),
						ids: o.toString()
					},
					dataType: "jsonp",
					jsonpCallback: "textLiveDetail"
				}).done(function(e) {
					l = !1, e && 0 == e[0] && (d ? (_(e[1]), d = !1, i.concat(o)) : (s ? x(e[1]) : _(e[1]), i = o))
				})
			} else $(u).html(e("/output/play-by-play/play-by-play").render({
				isLiving: !1
			}))
		},
		w = function() {
			for (var e = o.slice(-1)[0], t = 0; t < i.length; t++) if (i[t] === e) return o.length - t;
			return o.length
		},
		x = function(t) {
			var n = w(),
				i = o.slice(0, n - 1);
			$(u).prepend(e("/output/play-by-play/play-by-play").render({
				detailIndex: i,
				detailContents: t,
				indexServerData: r,
				isNewData: !0,
				isLiving: !0
			})), e("/output/play-by-play/play-by-play").init(), $(".event-item").slice(m).remove(), $(".live-container").mCustomScrollbar("update"), $(".live-container").mCustomScrollbar("scrollTo", "top", {
				scrollInertia: "main" === v ? 900 : 0
			}), $(".js-new-event").addClass("alert"), setTimeout(function() {
				$(".js-new-event").removeClass("alert").removeClass("js-new-event")
			}, 1400)
		},
		_ = function(t) {
			$("#indexPlaceholder").remove(), $(u).append(e("/output/play-by-play/play-by-play").render({
				detailIndex: o,
				detailContents: t,
				indexServerData: r,
				isNewData: !1,
				isLiving: !0
			})), e("/output/play-by-play/play-by-play").init(), $(".live-container").mCustomScrollbar("update"), s = 1
		};
	return {
		init: function(t) {
			v = t, i = [], s = 0, p = e("/src/scripts/ui/global").getParams(), p.competitionId = p.mid.split(":")[0], p.matchId = p.mid.split(":")[1], $.extend(p, e("/src/scripts/ui/global").getMatchInfo()), u = "#" + t + "EventList", "undefined" == typeof $.cookie("isAutoScrollTop") && $.cookie("isAutoScrollTop", !0), c = "true" === $.cookie("isAutoScrollTop"), $(".js-auto-scroll").prop("checked", c), $(".js-auto-scroll").on("change", function() {
				c = $(this).prop("checked"), $(".js-auto-scroll").prop("checked", c), $.cookie("isAutoScrollTop", c)
			}), g = e("/src/scripts/utils/utils").iInterval(function() {
				h || y(p)
			}, 1e4), $(".live-container").mCustomScrollbar({
				theme: "minimal-dark",
				scrollInertia: 100,
				advanced: {
					autoUpdate: !1
				},
				callbacks: {
					whileScrolling: function() {
						h = !0
					},
					onScroll: function() {
						setTimeout(function() {
							h = !1
						}, 1e3), c || g.stop()
					},
					onTotalScrollBack: function() {
						d = !1, g.stop(), g.start()
					},
					onTotalScrollOffset: f,
					onTotalScroll: function() {
						d = !0, l || (l = !0, C(a))
					}
				}
			}), $(window).resize(function() {
				$(".live-container").mCustomScrollbar("update")
			}), "main" === t && (y(), g.start()), ke("playByPlay").on("signalEnd", function() {
				g.stop()
			}), ke("playByPlay").on("enter", function() {
				y(p), g.start()
			}), ke("playByPlay").on("exit", function() {
				"main" !== t && g.stop()
			}), $(".live-container").on("click", ".play-video", function() {
				e("/src/scripts/utils/player").initVideoWhenLive({
					vid: $(this).data("vid"),
					width: $(".screen").width(),
					height: $(".screen").height()
				})
			})
		}
	}
});
define69eea4("/src/scripts/ui/game/in/index", function(e, t, n) {
	var i = e("/src/scripts/ui/global"),
		a = i.getParams(),
		o = e("/src/scripts/utils/utils"),
		r = e("/src/scripts/utils/qqlogin"),
		s = e("/src/scripts/ui/account/payGame"),
		l = e("/src/scripts/ui/game/vip/miniPay"),
		c = e("/src/scripts/ui/game/vip/vipPlayer"),
		d = navigator.userAgent.indexOf("MSIE 8") > -1 || navigator.userAgent.indexOf("MSIE 7") > -1,
		u = e("/src/scripts/utils/boss");
	u.usePvUvReport({
		game_id: a.mid,
		live_status: i.livePeriod.IN
	}), u.useEventReport({
		game_id: a.mid,
		live_status: i.livePeriod.IN,
		module: "èµ›ä¸­åº•å±‚é¡µ"
	});
	var p = function(e) {
			var t = new Image(1, 1);
			t.src = "http://like.video.qq.com/fcgi-bin/like?msgtype=124&pid=" + e + "&otype=json"
		};
	t.init = function(t) {
		var n = t.data,
			u = n.matchInfo;
		$(".game-header").addClass("in-game"), $("body").addClass("loaded in-live"), $(".game-page .header").addClass("live");
		var h = $(".screen").width();
		$(".screen").height(parseInt(9 * h / 16)), $(".live-support-bar-container").width(h - 260), e("/src/scripts/ui/game/in/detail").render(n);
		var m = $(window).height();
		$(".live-box .live-Interaction").height(m - 65), $(".live-box .live-tab-content").height(m - 105), $("#mod-comment").height(m - 255), $(".live-tabs").html(e("/output/live-tabs/live-tabs").render({
			period: u.livePeriod,
			liveType: u.liveType,
			liveIdPictureWord: n.liveIdPictureWord,
			tabSwitchGuess: u.tabSwitchGuess
		})), e("/output/live-tabs/live-tabs").init(), e("/src/scripts/ui/game/in/wechat").render(n.targetId), e("/src/scripts/ui/game/in/highlights").init(u.livePeriod), e("/src/scripts/ui/game/guess/index").init(a.mid, u.livePeriod), ke("guess").on("guessLoginSuccess", function() {
			u.liveType === i.liveType.VIDEO && (c.init(u.liveId, n.targetId), $("#float-layer").hide()), ke("guess").un("guessLoginSuccess")
		}), $("#onekey").off("click"), $("#onekey").on("click", function() {
			r.needLogin().then(function() {
				u.liveType === i.liveType.VIDEO && (c.init(u.liveId, n.targetId), $("#float-layer").css("display", "none"))
			})
		}), u.liveType === i.liveType.VIDEO ? (p(n.programId), window.__tenplay_skipad = function() {
			return r.needLogin(!0).then(function() {
				s.isPayedGame(function(e) {
					0 == e.isUserPay ? l.showPay(u.liveId, n.targetId, {
						aid: i.remark({
							refer: 101,
							page: 2,
							mid: a.mid
						})
					}) : c.init(u.liveId, n.targetId)
				})
			}), 1
		}, ke("login").on("ptloginClose", function() {
			ke("player").fire("resumeAd")
		}), window.__flash_unlock1080p = function() {
			r.needLogin(!0).then(function() {
				s.isPayedGame(function(e) {
					0 == e.isUserPay ? l.showPay(u.liveId, n.targetId, {
						aid: i.remark({
							refer: 102,
							page: 2,
							mid: a.mid
						})
					}) : c.init(u.liveId, n.targetId)
				})
			})
		}, $(".word-pic-living").remove(), $("#livingArea").show(), "1" !== n.isPay ? e("/src/scripts/utils/player").initLive({
			channelId: u.liveId,
			modId: "livingArea",
			width: $("#livingArea").width(),
			height: $("#livingArea").height(),
			targetId: n.targetId
		}) : e("/src/scripts/ui/game/vip/sportsPay").init({
			liveId: u.liveId,
			targetId: n.targetId
		}), e("/src/scripts/ui/game/in/playByPlay").init("side")) : e("/src/scripts/ui/game/in/playByPlay").init("main"), setTimeout(function() {
			e("/src/scripts/ui/game/in/stats").render(u), $(".live-Interaction").mousewheel(function(e) {
				e.preventDefault()
			}), $(window).resize(function() {
				o.timerProxy(function() {
					var e = $(".section").width(),
						t = parseInt(9 * e / 16);
					$(".screen embed, .screen object").css({
						width: e,
						height: t
					}), $(".screen").height(t), $(".multi-perspective").height(parseInt(parseInt($(".screen").height()) - 98));
					var n = $(".multi-perspective").height();
					$(window).width() < 1580 ? ($(".multi-perspective").addClass("mini-size"), $(".multi-content").css("margin-top", (n - 270) / 2)) : ($(".multi-perspective").removeClass("mini-size"), $(".multi-content").css("margin-top", (n - 520) / 2)), $(".live-support-bar-container").width(e - 260), "open" === $("#mod-comment .comment_face").data("status") && $(".comment_face").trigger("click");
					var i = $(window).height();
					$(".live-box .live-Interaction").height(i - 65), $(".live-box .live-tab-content").height(i - 105), $("#mod-comment").height(i - 255), d && ($(window).width() < 1180 ? ($(".section").css("margin-right", 0), $(".aside").css("display", "none")) : ($(".section").css("margin-right", "320"), $(".aside").css("display", "block")))
				}, 100, "liveResize")
			})
		}, 0)
	}
});
define69eea4("/src/scripts/ui/game/post/highlights", function(e, t, n) {
	var i = e("/src/scripts/ui/global"),
		a = (e("/src/scripts/utils/utils"), e("/src/scripts/utils/player")),
		o = i.getParams().mid;
	ke("player").on("playNext", function(e) {
		var t = $(".highlights-current").next().data("vid"),
			n = $(".highlights-scroll-area .videoPlayBottomRightBd"),
			i = n.index($(".highlights-current"));
		r($(".highlights-current").attr("id"));
		try {
			e.ongetnext = function() {
				n.removeClass("highlights-current"), n.eq(i + 1).addClass("highlights-current"), t ? a.initVideo({
					vid: t,
					width: $("#album-screen").width(),
					height: $("#album-screen").height(),
					modId: "album-screen"
				}) : n.removeClass("highlights-current")
			}, e.onplaying = function(e) {
				var t = $(".highlights-scroll-area .videoPlayBottomRightBd[data-vid=" + e + "]");
				t.addClass("highlights-current")
			}
		} catch (o) {}
	}), $(".live-content.live-highlights").on("click", ".videoPlayBottomRightBd", function() {
		a.initVideo({
			vid: $(this).data("vid"),
			width: $("#album-screen").width(),
			height: $("#album-screen").height(),
			modId: "album-screen"
		}), r(this.id), $(".videoPlayBottomRightBd").removeClass("highlights-current"), $(this).addClass("highlights-current")
	});
	var r = function(e) {
			var t = e.split("-")[1],
				n = "#highlightsList-" + (t - 1);
			$(".live-highlights").mCustomScrollbar("scrollTo", n)
		};
	return {
		init: function(t) {
			$.ajax({
				url: window.GAME_SERVER + "/kbs/matchVideo",
				jsonpCallback: "jsonpPostHightlights",
				dataType: "jsonp",
				data: {
					mid: o
				}
			}).done(function(n) {
				0 === n.code && (a.initVideo({
					vid: n.data.totalList[0].vid,
					width: $("#album-screen").width(),
					height: $("#album-screen").height(),
					modId: "album-screen"
				}), n.data.totalList.length > 0 && ($(".videoPlayBottomRightBd").removeClass("highlights-current"), $(".non-live-box .highlights-scroll-area").html(e("/output/highlights-list/highlights-list").render({
					list: n.data.totalList
				})), $(".videoPlayBottomRightBd:first").addClass("highlights-current"), e("/output/highlights-list/highlights-list").init(t), $(".non-live-box .highlights-scroll-area").parents(".album-container").removeClass("hidden"), $(".live-tab-content").removeClass("hidden")), setTimeout(function() {
					$(".live-highlights").mCustomScrollbar("update")
				}, 100))
			}), $(".live-highlights").mCustomScrollbar({
				theme: "minimal-dark",
				advanced: {
					autoUpdate: !1
				}
			})
		}
	}
});
define69eea4("/src/scripts/ui/game/post/detail", function(e, t, n) {
	var i = e("/src/scripts/ui/global");
	return {
		render: function(t) {
			var n = t.matchInfo;
			$(".game-header").addClass("post-game"), $(".game-info-container").append(e("/output/game-head/game-head").render({
				gameData: t
			})).removeClass("hidden"), n.matchType !== i.gameType.EVENT && ($(".support-bar-container").html(e("/output/support-bar/support-bar").render(t)), setTimeout(function() {
				e("/output/support-bar/support-bar").init()
			}, 0)), "0" !== t.ifHasVideo ? ($(".game-header").addClass("has-video"), e("/src/scripts/ui/game/post/highlights").init(n.livePeriod), $(".live-highlights").show()) : ($(".countdown-container").html(e("/output/pre-game-top/pre-game-top").render({
				gameData: t
			})).removeClass("hidden"), e("/output/pre-game-top/pre-game-top").vipStatus()), setTimeout(function() {
				e("/output/game-head/game-head").init()
			}, 0), $(".non-live-box").removeClass("hidden")
		}
	}
});
define69eea4("/output/game-guess-rank/game-guess-rank", function(require, exports, module) {
	var qqlogin = (require("/lib/jsonselect"), require("/src/scripts/ui/global"), require("/src/scripts/utils/utils"), require("/src/scripts/utils/qqlogin")),
		tpHelper = require("/lib/tpHelper");
	module.exports = {
		init: function() {
			var e = !1;
			$(function() {
				$(".open").click(function(e) {
					$(".rank-list dl").show(), $(".open").hide(), e.stopPropagation(), e.preventDefault()
				});
				var t = function(e) {
						qqlogin.needLogin().done(function() {
							n()
						}).fail(function() {}), e.preventDefault()
					},
					n = function() {
						var t = $("#guess-rank").attr("mid");
						e || (e = !0, $("#float-layer").css("display", "none"), $(".go-to-myGuess").off("click"), $("#guess-rank").remove(), $.ajax({
							url: window.GUESS_SERVER + "/web/rank",
							dataType: "jsonp",
							jsonpCallback: "guessRankCallback",
							data: {
								mid: t,
								from: "sportsweb"
							}
						}).done(function(e) {
							0 === e.code && 0 !== e.data.length && (e.data.myGuess = !0, e.data.mid = t, $(".game-guess-placeholder").replaceWith(module.exports.render(e.data)), $(".open").click(function(e) {
								$(".rank-list dl").show(), $(".open").hide(), e.stopPropagation(), e.preventDefault()
							}))
						}))
					};
				ke("login").on("loginSuccess", n), qqlogin.isLogin(function(e) {
					e || $(".go-to-myGuess").on("click", t)
				})
			})
		},
		render: function(data) {
			var _data = data,
				htmlCode = "";
			with(_data || {}) {
				htmlCode += '\n<div id="guess-rank" class="game-guess-placeholder" mid="', htmlCode += _data.mid, htmlCode += '">\n    <h2>ç«žçŒœèŽ·åˆ©</h2>', _data.quizAggregate ? htmlCode += '\n    <a class="go-to-moreGuess" href="./rank.htm" target="_blank">æ›´å¤š<span></span></a>' : (htmlCode += '\n    <a class="go-to-myGuess" href="/kbsweb/mycenter.htm?mid=', htmlCode += _data.mid, htmlCode += '#myQuiz" target="_blank">æˆ‘çš„ç«žçŒœ<span></span></a>'), htmlCode += '\n    <div class="rank-list">';
				var len = _data.length;
				len = 5 > len ? len : 5;
				for (var i = 0; i < _data.length; i++)"1" === _data[i].isMy && (htmlCode += '\n        <dl class="my-rank">\n            <dt>\n                <img class="my-pic" src="', htmlCode += _data[i].icon, htmlCode += '">\n            </dt>\n            <dd class="fl">\n                <p class="player-name">', htmlCode += tpHelper.html.escape(_data[i].nick), htmlCode += '\n                </p>\n                <ul class="fans-inf">\n                    <li class="left-li"><span>æŽ’åï¼š', htmlCode += _data[i].serial, htmlCode += "</span></li>\n                    <li ><span>èŽ·åˆ©ï¼š<em>", htmlCode += _data[i].winKB || "0", htmlCode += " Kå¸</em></span></li>\n                </ul>\n            </dd>\n        </dl>");
				for (i = 0; len > i; i++) htmlCode += "\n        <dl>\n            <dt>", _data[i].icon ? (htmlCode += '\n                <img src="', htmlCode += _data[i].icon, htmlCode += '">') : htmlCode += '\n                <img src="http://mat1.gtimg.com/sports/kbsweb/statics/defaultUser_c5b594.png">', htmlCode += '\n                <span class="triangle triangle', htmlCode += _data[i].serial, htmlCode += '">', htmlCode += _data[i].serial, htmlCode += "</span>\n            </dt>\n            <dd>\n                <span>", htmlCode += tpHelper.html.escape(_data[i].nick), htmlCode += '</span>\n                <span class="kb">', htmlCode += _data[i].winKB || "0", htmlCode += "Kå¸</span>\n            </dd>\n        </dl>";
				if (_data.length > 5) {
					htmlCode += '\n        <div class="open"><a href="javascript:;">å±•å¼€<span></span></a></div>';
					for (var i = len; i < _data.length; i++) _data[i].serial > 12 || (htmlCode += '\n        <dl style="display: none">\n            <dt>\n                <img src="', htmlCode += _data[i].icon, htmlCode += '">\n                <span class="triangle">', htmlCode += _data[i].serial, htmlCode += "</span>\n            </dt>\n            <dd>\n                <span>", htmlCode += tpHelper.html.escape(_data[i].nick), htmlCode += '</span>\n                <span class="kb">', htmlCode += _data[i].winKB || "0", htmlCode += "Kå¸</span>\n            </dd>\n        </dl>")
				}
				htmlCode += "\n    </div>\n</div>"
			}
			return htmlCode
		},
		open: function() {
			$(".open").click(function(e) {
				$(".rank-list dl").show(), $(".open").hide(), e.stopPropagation(), e.preventDefault()
			})
		}
	}
});
define69eea4("/src/scripts/ui/game/guessRank", function(e, t, n) {
	var i = (e("/src/scripts/utils/qqlogin"), e("/src/scripts/ui/global")),
		a = i.getParams(),
		o = e("/lib/kEvent");
	t.render = function() {
		$.ajax({
			url: window.GUESS_SERVER + "/web/rank",
			dataType: "jsonp",
			jsonpCallback: "guessRankCallback",
			data: {
				mid: a.mid,
				from: "sportsweb"
			}
		}).done(function(t) {
			0 === t.code && 0 !== t.data.length && (t.data.myGuess = !0, t.data.mid = a.mid, $(".game-guess-placeholder").replaceWith(e("/output/game-guess-rank/game-guess-rank").render(t.data)), e("/output/game-guess-rank/game-guess-rank").init(), o("asideModule").fire("load"))
		}), o("login").on("logout", function() {
			window.location.reload()
		})
	}
});
define69eea4("/src/scripts/ui/game/post/index", function(e, t, n) {
	e("/lib/jquery.mCustomScrollbar");
	var i = e("/src/scripts/ui/global"),
		a = i.getParams(),
		o = e("/src/scripts/utils/boss");
	o.usePvUvReport({
		game_id: a.mid,
		live_status: i.livePeriod.END
	}), o.useEventReport({
		game_id: a.mid,
		live_status: i.livePeriod.END,
		module: "èµ›åŽåº•å±‚é¡µ"
	}), ke("asideModule").on("load", function() {
		$("#game-ksf-300x90").css("margin-top", "10px")
	}), e("/src/scripts/ui/game/qrCode").init(), t.init = function(t) {
		var n = t.data,
			a = n.matchInfo;
		e("/src/scripts/ui/game/post/detail").render(n), $("body").addClass("loaded"), setTimeout(function() {
			e("/src/scripts/ui/game/tab").init(a.matchType, a.livePeriod), e("/src/scripts/utils/additionalMenu").init({
				scrollDistance: 300,
				disappearTime: 600
			}), e("/src/scripts/ui/game/comment").render({
				targetId: n.targetId,
				leftBadge: a.leftBadge,
				rightBadge: a.rightBadge
			}), e("/src/scripts/ui/game/comment").init(), e("/src/scripts/ui/game/stats").render(function(t) {
				$(".stats-container").append(t), e("/output/player-data/player-data").init(), e("/src/scripts/ui/game/tab").clearTab()
			}), e("/src/scripts/ui/game/relatedGame").render(), e("/src/scripts/ui/game/news").render(), e("/src/scripts/ui/game/relPost").render(), setTimeout(function() {
				e("/src/scripts/ui/game/guessRank").render()
			}, 30), e("/src/scripts/ui/game/ad").init(i.livePeriod.END)
		}, 0)
	}
});
define69eea4("/src/scripts/ui/game/index", function(e, t, n) {
	var i = e("/lib/jquery-1.11.3");
	e("/lib/kEvent"), e("/lib/es5-shim");
	var a = e("/src/scripts/ui/global"),
		o = a.livePeriod,
		r = e("/src/scripts/ui/global").getParams();
	if (window.loginType = "", e("/src/scripts/utils/qqlogin"), e("/src/scripts/ui/login"), r.matchId && r.competitionId && !r.mid) {
		var s = r.competitionId + ":" + r.matchId;
		location.href = "./game.htm?mid=" + s
	}
	try {
		/.*\.qq\.com$/.test(top.location.hostname) || (window.location.href = "http://sports.qq.com/fans/error.htm")
	} catch (l) {
		window.location.href = "http://sports.qq.com/fans/error.htm"
	}
	var c = function(e) {
			var t = e.data.matchInfo;
			return a.getParams().liveDebug && (a.getParams().livePeriod && (t.livePeriod = a.getParams().livePeriod), a.getParams().liveType && (t.liveType = a.getParams().liveType)), t.matchPeriod = t.matchPeriod || t.livePeriod, i.extend(t, {
				liveId: e.data.liveId,
				targetId: e.data.targetId,
				isPay: e.data.isPay,
				tabSwitchGuess: e.data.tabSwitchGuess
			}), a.setMatchInfo(t), window.matchInfo = t, t
		};
	i(function() {
		i("body.game-page").append('<div class="loading"></div>'), i.ajax({
			url: window.GAME_SERVER + "/kbs/matchDetail",
			dataType: "jsonp",
			jsonpCallback: "matchDetailCallback",
			data: {
				mid: r.mid
			}
		}).done(function(t) {
			if (0 !== t.code && e("/src/scripts/utils/utils").show404(), i(".loading").remove(), t.data && t.data.matchInfo) {
				var n = c(t);
				switch (document.title = (n.title || n.leftName + "vs" + n.rightName) + "_è…¾è®¯ä½“è‚²_è…¾è®¯ç½‘", i("body").prepend(e("/output/page-bg/page-bg").render({
					gameType: n.matchType
				})), n.livePeriod) {
				case o.PRE:
					e("/src/scripts/ui/game/pre/index").init(t);
					break;
				case o.IN:
					e("/src/scripts/ui/game/in/index").init(t);
					break;
				case o.END:
					e("/src/scripts/ui/game/post/index").init(t)
				}
			}
		})
	})
}); /*  |xGv00|18f06ff3e5738edff29cb2905403d9a9 */