!
function() {
	function t(t, e) {
		return t.onload = e
	}
	function e(t, e) {
		return t.onerror = e
	}
	function n(t, e) {
		return t.name = e
	}
	function i(t, e) {
		switch (e) {
		case 0:
			return "" + t;
		case 1:
			return 1 * t;
		case 2:
			return !! t;
		case 3:
			return 1e3 * t
		}
		return t
	}
	function r(t) {
		return "function" == typeof t
	}
	function a(t) {
		return void 0 != t && -1 < (t.constructor + "")[Y]("String")
	}
	function o(t, e) {
		return void 0 == t || "-" == t && !e || "" == t
	}
	function s(t) {
		if (!t || "" == t) return "";
		for (; t && -1 < " \n\r " [Y](t[H](0));) t = t[le](1);
		for (; t && -1 < " \n\r " [Y](t[H](t[ae] - 1));) t = t[le](0, t[ae] - 1);
		return t
	}
	function u() {
		return V.round(2147483647 * V.random())
	}
	function c() {}
	function f(t, e) {
		return D instanceof Function ? e ? encodeURI(t) : D(t) : (I(68), escape(t))
	}
	function d(t) {
		if (t = t[ue]("+")[be](" "), M instanceof Function) try {
			return M(t)
		} catch(e) {
			I(17)
		} else I(68);
		return unescape(t)
	}
	function h(t, e) {
		if (t) {
			var n = Bi[Q]("script");
			n.type = "text/javascript",
			n.async = !0,
			n.src = t,
			n.id = e;
			var i = Bi.getElementsByTagName("script")[0];
			return i.parentNode.insertBefore(n, i),
			n
		}
	}
	function g(t) {
		return t && 0 < t[ae] ? t[0] : ""
	}
	function v(t) {
		var e = t ? t[ae] : 0;
		return e > 0 ? t[e - 1] : ""
	}
	function m(t) {
		return 0 == t[Y]("www.") && (t = t[le](4)),
		t[ye]()
	}
	function l(t, e) {
		var n,
		i = {
			url: t,
			protocol: "http",
			host: "",
			path: "",
			d: new qe,
			anchor: ""
		};
		return t ? (n = t[Y]("://"), n >= 0 && (i.protocol = t[le](0, n), t = t[le](n + 3)), n = t[he]("/|\\?|#"), n >= 0 ? (i.host = t[le](0, n)[ye](), t = t[le](n), n = t[Y]("#"), n >= 0 && (i.anchor = t[le](n + 1), t = t[le](0, n)), n = t[Y]("?"), n >= 0 && (p(i.d, t[le](n + 1)), t = t[le](0, n)), i.anchor && e && p(i.d, i.anchor), t && "/" == t[H](0) && (t = t[le](1)), i.path = t, i) : (i.host = t[ye](), i)) : i
	}
	function _(t, e) {
		function n(t) {
			var e = (t.hostname || "")[ue](":")[0][ye](),
			n = (t[ge] || "")[ye](),
			n = 1 * t[J] || ("http:" == n ? 80: "https:" == n ? 443: "");
			return t = t.pathname || "",
			0 == t[Y]("/") || (t = "/" + t),
			[e, "" + n, t]
		}
		var i = e || Bi[Q]("a");
		i.href = Bi[de][me];
		var r = (i[ge] || "")[ye](),
		a = n(i),
		o = i[he] || "",
		s = r + "//" + a[0] + (a[1] ? ":" + a[1] : "");
		return 0 == t[Y]("//") ? t = r + t: 0 == t[Y]("/") ? t = s + t: t && 0 != t[Y]("?") ? 0 > t[ue]("/")[0][Y](":") && (t = s + a[2][le](0, a[2].lastIndexOf("/")) + "/" + t) : t = s + a[2] + (t || o),
		i.href = t,
		r = n(i),
		{
			protocol: (i[ge] || "")[ye](),
			host: r[0],
			port: r[1],
			path: r[2],
			Oa: i[he] || "",
			url: t || ""
		}
	}
	function p(t, e) {
		function n(e, n) {
			t.contains(e) || t.set(e, []),
			t.get(e)[G](n)
		}
		for (var i = s(e)[ue]("&"), r = 0; r < i[ae]; r++) if (i[r]) {
			var a = i[r][Y]("=");
			0 > a ? n(i[r], "1") : n(i[r][le](0, a), i[r][le](a + 1))
		}
	}
	function b(t, e) {
		if (o(t) || "[" == t[H](0) && "]" == t[H](t[ae] - 1)) return "-";
		var n = Bi.domain;
		return t[Y](n + (e && "/" != e ? e: "")) == (0 == t[Y]("http://") ? 7: 0 == t[Y]("https://") ? 8: 0) ? "0": t
	}
	function y(t, e, n) {
		Ce >= 1 || 1 <= 100 * V.random() || Hi() || (t = ["utmt=error", "utmerr=" + t, "utmwv=5.5.3", "utmn=" + u(), "utmsp=1"], e && t[G]("api=" + e), n && t[G]("msg=" + f(n[le](0, 100))), Ea.w && t[G]("aip=1"), wa(t[be]("&")), Ce++)
	}
	function w(t) {
		return k("x" + Se++, t)
	}
	function k(t, e) {
		return Te[t] = !!e,
		t
	}
	function q(t) {
		var e = this.plugins_;
		return e ? e.get(t) : void 0
	}
	function C(t, e) {
		e = e || [];
		for (var n = 0; n < e[ae]; n++) {
			var i = e[n];
			if ("" + t == i || 0 == i[Y](t + ".")) return i
		}
		return "-"
	}
	function S(t) {
		100 != t.get(Qe) && t.get(qn) % 1e4 >= 100 * t.get(Qe) && t[ce]()
	}
	function T(t) {
		Hi(t.get(xe)) && t[ce]()
	}
	function x(t) {
		"file:" == Bi[de][ge] && t[ce]()
	}
	function E(t) {
		Wi() && t[ce]()
	}
	function A(t) {
		t.get(gn) || t.set(gn, Bi.title, !0),
		t.get(hn) || t.set(hn, Bi[de].pathname + Bi[de][he], !0)
	}
	function P(t) {
		t.get(xe) && "UA-XXXXX-X" != t.get(xe) || t[ce]()
	}
	function I(t) {
		Fi.set(t)
	}
	function L(t) {
		return "string" == typeof t
	}
	function O(t) {
		return ! ("number" == typeof t || void 0 != Number && t instanceof Number) || V.round(t) != t || R(t) || t == K ? !1: !0
	}
	function X(t) {
		var e,
		n = 1,
		i = 0;
		if (t) for (n = 0, e = t[ae] - 1; e >= 0; e--) i = t.charCodeAt(e),
		n = (n << 6 & 268435455) + i + (i << 14),
		i = 266338304 & n,
		n = 0 != i ? n ^ i >> 21: n;
		return n
	}
	var j,
	D = encodeURIComponent,
	K = 1 / 0,
	N = setTimeout,
	R = isNaN,
	V = Math,
	M = decodeURIComponent,
	G = "push",
	$ = "test",
	z = "slice",
	F = "replace",
	U = "load",
	B = "floor",
	H = "charAt",
	W = "value",
	Y = "indexOf",
	Z = "match",
	J = "port",
	Q = "createElement",
	te = "path",
	ee = "name",
	ne = "getTime",
	ie = "host",
	re = "toString",
	ae = "length",
	oe = "prototype",
	se = "clientWidth",
	ue = "split",
	ce = "stopPropagation",
	fe = "scope",
	de = "location",
	he = "search",
	ge = "protocol",
	ve = "clientHeight",
	me = "href",
	le = "substring",
	_e = "apply",
	pe = "navigator",
	be = "join",
	ye = "toLowerCase",
	we = function(t, e, n, i) {
		t.addEventListener ? t.addEventListener(e, n, !!i) : t.attachEvent && t.attachEvent("on" + e, n)
	},
	ke = function(t, e, n, i) {
		t.removeEventListener ? t.removeEventListener(e, n, !!i) : t.detachEvent && t.detachEvent("on" + e, n)
	},
	qe = function() {
		this.prefix = "ga.",
		this.R = {}
	};
	qe[oe].set = function(t, e) {
		this.R[this.prefix + t] = e
	},
	qe[oe].get = function(t) {
		return this.R[this.prefix + t]
	},
	qe[oe].contains = function(t) {
		return void 0 !== this.get(t)
	};
	var Ce = 0,
	Se = 0,
	Te = {},
	xe = w(),
	Ee = k("anonymizeIp"),
	Ae = w(),
	Pe = w(),
	Ie = w(),
	Le = w(),
	Oe = w(),
	Xe = w(),
	je = w(),
	De = w(),
	Ke = w(),
	Ne = w(),
	Re = w(),
	Ve = w(),
	Me = w(),
	Ge = w(),
	$e = w(),
	ze = w(),
	Fe = w(),
	Ue = w(),
	Be = w(),
	He = w(),
	We = w(),
	Ye = w(),
	Ze = w(),
	Je = w(),
	Qe = w(),
	tn = w(),
	en = w(),
	nn = w(),
	rn = w(),
	an = w(),
	on = w(),
	sn = w(),
	un = w(),
	cn = w(),
	fn = w(!0),
	dn = k("currencyCode"),
	hn = k("page"),
	gn = k("title"),
	vn = w(),
	mn = w(),
	ln = w(),
	_n = w(),
	pn = w(),
	bn = w(),
	yn = w(),
	wn = w(),
	kn = w(),
	qn = w(!0),
	Cn = w(!0),
	Sn = w(!0),
	Tn = w(!0),
	xn = w(!0),
	En = w(!0),
	An = w(!0),
	Pn = w(!0),
	In = w(!0),
	Ln = w(!0),
	On = w(!0),
	Xn = w(!0),
	jn = w(!0),
	Dn = w(!0),
	Kn = w(!0),
	Nn = w(!0),
	Rn = w(!0),
	Vn = w(!0),
	Mn = w(!0),
	Gn = w(!0),
	$n = w(!0),
	zn = w(!0),
	Fn = w(!0),
	Un = w(!0),
	Bn = w(!0),
	Hn = w(!0),
	Wn = w(!0),
	Yn = k("campaignParams"),
	Zn = w(),
	Jn = k("hitCallback"),
	Qn = w(),
	ppsid = w(),
	ppuserid = w(),
	ppcity = w(),
	ppchannel = w(),
	pporderid = w();
	w();
	var ti = w(),
	ei = w(),
	ni = w(),
	ii = w(),
	ri = w(),
	ai = w(),
	oi = w(),
	si = w(),
	ui = w(),
	ci = w(),
	fi = w(),
	di = w(),
	hi = w(),
	gi = w();
	w();
	var vi = w(),
	mi = w(),
	li = w(),
	_i = k("uaName"),
	pi = k("uaDomain"),
	bi = k("uaPath"),
	yi = function() {
		function t(t, e, n) {
			ki(Ta[oe], t, e, n)
		}
		t("_createTracker", Ta[oe].r, 55),
		t("_getTracker", Ta[oe].oa, 0),
		t("_getTrackerByName", Ta[oe].u, 51),
		t("_getTrackers", Ta[oe].pa, 130),
		t("_anonymizeIp", Ta[oe].aa, 16),
		t("_forceSSL", Ta[oe].la, 125),
		t("_getPlugin", q, 120)
	},
	wi = function() {
		function t(t, e, n) {
			ki(na[oe], t, e, n)
		}
		qi("_getName", Pe, 58),
		qi("_getAccount", xe, 64),
		qi("_visitCode", qn, 54),
		qi("_getClientInfo", Me, 53, 1),
		qi("_getDetectTitle", ze, 56, 1),
		qi("_getDetectFlash", Ge, 65, 1),
		qi("_getLocalGifPath", tn, 57),
		qi("_getServiceMode", en, 59),
		Ci("_setClientInfo", Me, 66, 2),
		Ci("_setAccount", xe, 3),
		Ci("_setNamespace", Ae, 48),
		Ci("_setAllowLinker", Ne, 11, 2),
		Ci("_setDetectFlash", Ge, 61, 2),
		Ci("_setDetectTitle", ze, 62, 2),
		Ci("_setLocalGifPath", tn, 46, 0),
		Ci("_setLocalServerMode", en, 92, void 0, 0),
		Ci("_setRemoteServerMode", en, 63, void 0, 1),
		Ci("_setLocalRemoteServerMode", en, 47, void 0, 2),
		Ci("_setSampleRate", Qe, 45, 1),
		Ci("_setCampaignTrack", $e, 36, 2),
		Ci("_setAllowAnchor", Re, 7, 2),
		Ci("_setCampNameKey", Ue, 41),
		Ci("_setCampContentKey", Ze, 38),
		Ci("_setCampIdKey", Fe, 39),
		Ci("_setCampMediumKey", We, 40),
		Ci("_setCampNOKey", Je, 42),
		Ci("_setCampSourceKey", He, 43),
		Ci("_setCampTermKey", Ye, 44),
		Ci("_setCampCIdKey", Be, 37),
		Ci("_setCookiePath", Xe, 9, 0),
		Ci("_setMaxCustomVariables", nn, 0, 1),
		Ci("_setVisitorCookieTimeout", je, 28, 1),
		Ci("_setSessionCookieTimeout", De, 26, 1),
		Ci("_setCampaignCookieTimeout", Ke, 29, 1),
		Ci("_setReferrerOverride", vn, 49),
		Ci("_setSiteSpeedSampleRate", ui, 132),
		Ci("_setPpSID", ppsid, 200),
		Ci("_setPpUserId", ppuserid, 201),
		Ci("_setPpCity", ppcity, 202),
		Ci("_setPpChannel", ppchannel, 203),
		Ci("_setPpOrderId", pporderid, 204),
		t("_trackPageview", na[oe].Fa, 1),
		t("_trackEvent", na[oe].F, 4),
		t("_trackPageLoadTime", na[oe].Ea, 100),
		t("_trackSocial", na[oe].Ga, 104),
		t("_trackTrans", na[oe].Ia, 18),
		t("_sendXEvent", na[oe].t, 78),
		t("_createEventTracker", na[oe].ia, 74),
		t("_getVersion", na[oe].qa, 60),
		t("_setDomainName", na[oe].B, 6),
		t("_setAllowHash", na[oe].va, 8),
		t("_getLinkerUrl", na[oe].na, 52),
		t("_link", na[oe].link, 101),
		t("_linkByPost", na[oe].ua, 102),
		t("_setTrans", na[oe].za, 20),
		t("_addTrans", na[oe].$, 21),
		t("_addItem", na[oe].Y, 19),
		t("_clearTrans", na[oe].ea, 105),
		t("_setTransactionDelim", na[oe].Aa, 82),
		t("_setCustomVar", na[oe].wa, 10),
		t("_deleteCustomVar", na[oe].ka, 35),
		t("_getVisitorCustomVar", na[oe].ra, 50),
		t("_setXKey", na[oe].Ca, 83),
		t("_setXValue", na[oe].Da, 84),
		t("_getXKey", na[oe].sa, 76),
		t("_getXValue", na[oe].ta, 77),
		t("_clearXKey", na[oe].fa, 72),
		t("_clearXValue", na[oe].ga, 73),
		t("_createXObj", na[oe].ja, 75),
		t("_addIgnoredOrganic", na[oe].W, 15),
		t("_clearIgnoredOrganic", na[oe].ba, 97),
		t("_addIgnoredRef", na[oe].X, 31),
		t("_clearIgnoredRef", na[oe].ca, 32),
		t("_addOrganic", na[oe].Z, 14),
		t("_clearOrganic", na[oe].da, 70),
		t("_cookiePathCopy", na[oe].ha, 30),
		t("_get", na[oe].ma, 106),
		t("_set", na[oe].xa, 107),
		t("_addEventListener", na[oe].addEventListener, 108),
		t("_removeEventListener", na[oe].removeEventListener, 109),
		t("_addDevId", na[oe].V),
		t("_getPlugin", q, 122),
		t("_setPageGroup", na[oe].ya, 126),
		t("_trackTiming", na[oe].Ha, 124),
		t("_initData", na[oe].v, 2),
		t("_setVar", na[oe].Ba, 22),
		Ci("_setSessionTimeout", De, 27, 3),
		Ci("_setCookieTimeout", Ke, 25, 3),
		Ci("_setCookiePersistence", je, 24, 1),
		t("_setAutoTrackOutbound", c, 79),
		t("_setTrackOutboundSubdomains", c, 81),
		t("_setHrefExamineLimit", c, 80);
	},
	ki = function(t, e, n, i) {
		t[e] = function() {
			try {
				return void 0 != i && I(i),
				n[_e](this, arguments)
			} catch(t) {
				throw y("exc", e, t && t[ee]),
				t
			}
		}
	},
	qi = function(t, e, n, r) {
		na[oe][t] = function() {
			try {
				return I(n),
				i(this.a.get(e), r)
			} catch(a) {
				throw y("exc", t, a && a[ee]),
				a
			}
		}
	},
	Ci = function(t, e, n, r, a) {
		na[oe][t] = function(o) {
			try {
				I(n),				
				void 0 == a ? this.a.set(e, i(o, r)) : this.a.set(e, a)
			} catch(s) {
				throw y("exc", t, s && s[ee]),
				s
			}
		}
	},
	Si = function(t, e) {
		return {
			type: e,
			target: t,
			stopPropagation: function() {
				throw "aborted"
			}
		}
	},
	Ti = new RegExp(/(^|\.)doubleclick\.net$/i),
	xi = function(t, e) {
		return Ti[$](Bi[de].hostname) ? !0: "/" !== e ? !1: 0 != t[Y]("www.google.") && 0 != t[Y](".google.") && 0 != t[Y]("google.") || -1 < t[Y]("google.org") ? !1: !0
	},
	Ei = function(t) {
		var e = t.get(Le),
		n = t.c(Xe, "/");
		xi(e, n) && t[ce]()
	},
	Ai = function() {
		var t = {},
		e = {},
		n = new Gi;
		this.g = function(t, e) {
			n.add(t, e)
		};
		var i = new Gi;
		this.e = function(t, e) {
			i.add(t, e)
		};
		var r = !1,
		a = !1,
		o = !0;
		this.T = function() {
			r = !0
		},
		this.j = function(t) {
			this[U](),
			this.set(Zn, t, !0),
			t = new Pi(this),
			r = !1,
			i.cb(this),
			r = !0,
			e = {},
			this.n(),
			t.Ja()
		},
		this.load = function() {
			r && (r = !1, this.Ka(), vr(this), a || (a = !0, n.cb(this), gr(this), vr(this)), r = !0)
		},
		this.n = function() {
			r && (a ? (r = !1, gr(this), r = !0) : this[U]())
		},
		this.get = function(n) {
			return Te[n] && this[U](),
			void 0 !== e[n] ? e[n] : t[n]
		},
		this.set = function(n, i, r) {
			Te[n] && this[U](),
			r ? e[n] = i: t[n] = i,
			Te[n] && this.n()
		},
		this.Za = function(e) {
			t[e] = this.b(e, 0) + 1
		},
		this.b = function(t, e) {
			var n = this.get(t);
			return void 0 == n || "" === n ? e: 1 * n
		},
		this.c = function(t, e) {
			var n = this.get(t);
			return void 0 == n ? e: n + ""
		},
		this.Ka = function() {
			if (o) {
				var e = this.c(Le, ""),
				n = this.c(Xe, "/");
				xi(e, n) || (t[Oe] = t[Ve] && "" != e ? X(e) : 1, o = !1)
			}
		}
	};
	Ai[oe].stopPropagation = function() {
		throw "aborted"
	};
	var Pi = function(t) {
		var e = this;
		this.q = 0;
		var n = t.get(Jn);
		this.Ua = function() {
			0 < e.q && n && (e.q--, e.q || n())
		},
		this.Ja = function() { ! e.q && n && N(n, 10)
		},
		t.set(Qn, e, !0)
	},
	Ii = function(t, e, n) {
		if (n = n ? "": t.c(Oe, "1"), e = e[ue]("."), 6 !== e[ae] || Mi(e[0], n)) return ! 1;
		n = 1 * e[1];
		var i = 1 * e[2],
		r = 1 * e[3],
		a = 1 * e[4];
		return e = 1 * e[5],
		n >= 0 && i > 0 && r > 0 && a > 0 && e >= 0 ? (t.set(qn, n), t.set(xn, i), t.set(En, r), t.set(An, a), t.set(Pn, e), !0) : !1
	},
	Li = function(t) {
		var e = t.get(qn),
		n = t.get(xn),
		i = t.get(En),
		r = t.get(An),
		a = t.b(Pn, 1);
		return [t.b(Oe, 1), void 0 != e ? e: "-", n || "-", i || "-", r || "-", a][be](".")
	},
	Oi = function(t) {
		return [t.b(Oe, 1), t.b(On, 0), t.b(Xn, 1), t.b(jn, 0)][be](".")
	},
	Xi = function(t, e, n) {
		n = n ? "": t.c(Oe, "1");
		var i = e[ue](".");
		return (4 !== i[ae] || Mi(i[0], n)) && (i = null),
		t.set(On, i ? 1 * i[1] : 0),
		t.set(Xn, i ? 1 * i[2] : 10),
		t.set(jn, i ? 1 * i[3] : t.get(Ie)),
		null != i || !Mi(e, n)
	},
	ji = function(t, e) {
		var n = f(t.c(Sn, "")),
		i = [],
		r = t.get(fn);
		if (!e && r) {
			for (var a = 0; a < r[ae]; a++) {
				var o = r[a];
				o && 1 == o[fe] && i[G](a + "=" + f(o[ee]) + "=" + f(o[W]) + "=1")
			}
			0 < i[ae] && (n += "|" + i[be]("^"))
		}
		return n ? t.b(Oe, 1) + "." + n: null
	},
	Di = function(t, e, i) {
		if (i = i ? "": t.c(Oe, "1"), e = e[ue]("."), 2 > e[ae] || Mi(e[0], i)) return ! 1;
		if (e = e[z](1)[be](".")[ue]("|"), 0 < e[ae] && t.set(Sn, d(e[0])), 1 >= e[ae]) return ! 0;
		for (e = e[1][ue]( - 1 == e[1][Y](",") ? "^": ","), i = 0; i < e[ae]; i++) {
			var r = e[i][ue]("=");
			if (4 == r[ae]) {
				var a = {};
				n(a, d(r[1])),
				a.value = d(r[2]),
				a.scope = 1,
				t.get(fn)[r[0]] = a
			}
		}
		return ! 0
	},
	Ki = function(t, e) {
		var n = Ni(t, e);
		return n ? [t.b(Oe, 1), t.b(Dn, 0), t.b(Kn, 1), t.b(Nn, 1), n][be](".") : ""
	},
	Ni = function(t) {
		function e(e, i) {
			if (!o(t.get(e))) {
				var r = t.c(e, ""),
				r = r[ue](" ")[be]("%20"),
				r = r[ue]("+")[be]("%20");
				n[G](i + "=" + r)
			}
		}
		var n = [];
		return e(Vn, "utmcid"),
		e(Un, "utmcsr"),
		e(Gn, "utmgclid"),
		e($n, "utmgclsrc"),
		e(zn, "utmdclid"),
		e(Fn, "utmdsid"),
		e(Mn, "utmccn"),
		e(Bn, "utmcmd"),
		e(Hn, "utmctr"),
		e(Wn, "utmcct"),
		n[be]("|")
	},
	Ri = function(t, e, n) {
		return n = n ? "": t.c(Oe, "1"),
		e = e[ue]("."),
		5 > e[ae] || Mi(e[0], n) ? (t.set(Dn, void 0), t.set(Kn, void 0), t.set(Nn, void 0), t.set(Vn, void 0), t.set(Mn, void 0), t.set(Un, void 0), t.set(Bn, void 0), t.set(Hn, void 0), t.set(Wn, void 0), t.set(Gn, void 0), t.set($n, void 0), t.set(zn, void 0), t.set(Fn, void 0), !1) : (t.set(Dn, 1 * e[1]), t.set(Kn, 1 * e[2]), t.set(Nn, 1 * e[3]), Vi(t, e[z](4)[be](".")), !0)
	},
	Vi = function(t, e) {
		function n(t) {
			return (t = e[Z](t + "=(.*?)(?:\\|utm|$)")) && 2 == t[ae] ? t[1] : void 0
		}
		function i(e, n) {
			n ? (n = r ? d(n) : n[ue]("%20")[be](" "), t.set(e, n)) : t.set(e, void 0)
		} - 1 == e[Y]("=") && (e = d(e));
		var r = "2" == n("utmcvr");
		i(Vn, n("utmcid")),
		i(Mn, n("utmccn")),
		i(Un, n("utmcsr")),
		i(Bn, n("utmcmd")),
		i(Hn, n("utmctr")),
		i(Wn, n("utmcct")),
		i(Gn, n("utmgclid")),
		i($n, n("utmgclsrc")),
		i(zn, n("utmdclid")),
		i(Fn, n("utmdsid"))
	},
	Mi = function(t, e) {
		return e ? t != e: !/^\d+$/ [$](t)
	},
	Gi = function() {
		this.filters = []
	};
	Gi[oe].add = function(t, e) {
		this.filters[G]({
			name: t,
			s: e
		})
	},
	Gi[oe].cb = function(t) {
		try {
			for (var e = 0; e < this.filters[ae]; e++) this.filters[e].s.call(Ui, t)
		} catch(n) {}
	};
	var $i,
	zi,
	Fi = new
	function() {
		var t = [];
		this.set = function(e) {
			t[e] = !0
		},
		this.Xa = function() {
			for (var e = [], n = 0; n < t[ae]; n++) t[n] && (e[V[B](n / 6)] = e[V[B](n / 6)] ^ 1 << n % 6);
			for (n = 0; n < e[ae]; n++) e[n] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_" [H](e[n] || 0);
			return e[be]("") + "~"
		}
	},
	Ui = window,
	Bi = document,
	Hi = function(t) {
		var e = Ui._gaUserPrefs;
		if (e && e.ioo && e.ioo() || t && !0 === Ui["ga-disable-" + t]) return ! 0;
		try {
			var n = Ui.external;
			if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs) return ! 0
		} catch(i) {}
		return ! 1
	},
	Wi = function() {
		return Ui[pe] && "preview" == Ui[pe].loadPurpose
	},
	Yi = function(t, e) {
		N(t, e)
	},
	Zi = function(t) {
		var e = [],
		n = Bi.cookie[ue](";");
		t = new RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$");
		for (var i = 0; i < n[ae]; i++) {
			var r = n[i][Z](t);
			r && e[G](r[1])
		}
		return e
	},
	Ji = function(t, e, n, i, r, a) {
		if (r = Hi(r) ? !1: xi(i, n) ? !1: Wi() ? !1: !0) {
			if (e && 0 <= Ui[pe].userAgent[Y]("Firefox")) {
				e = e[F](/\n|\r/g, " "),
				r = 0;
				for (var o = e[ae]; o > r; ++r) {
					var s = 255 & e.charCodeAt(r); (10 == s || 13 == s) && (e = e[le](0, r) + "?" + e[le](r + 1))
				}
			}
			e && 2e3 < e[ae] && (e = e[le](0, 2e3), I(69)),
			t = t + "=" + e + "; path=" + n + "; ",
			a && (t += "expires=" + new Date((new Date)[ne]() + a).toGMTString() + "; "),
			i && (t += "domain=" + i + ";"),
			Bi.cookie = t
		}
	},
	Qi = function() {
		if (!$i) {
			var t = {},
			e = Ui[pe],
			n = Ui.screen;
			t.Q = n ? n.width + "x" + n.height: "-",
			t.P = n ? n.colorDepth + "-bit": "-",
			t.language = (e && (e.language || e.browserLanguage) || "-")[ye](),
			t.javaEnabled = e && e.javaEnabled() ? 1: 0,
			t.characterSet = Bi.characterSet || Bi.charset || "-";
			try {
				var i,
				r = Bi.documentElement,
				a = Bi.body,
				o = a && a[se] && a[ve],
				e = [];
				r && r[se] && r[ve] && ("CSS1Compat" === Bi.compatMode || !o) ? e = [r[se], r[ve]] : o && (e = [a[se], a[ve]]),
				i = 0 >= e[0] || 0 >= e[1] ? "": e[be]("x"),
				t.Wa = i
			} catch(s) {
				I(135)
			}
			$i = t
		}
	},
	tr = function() {
		Qi();
		for (var t = $i, e = Ui[pe], t = e.appName + e.version + t.language + e.platform + e.userAgent + t.javaEnabled + t.Q + t.P + (Bi.cookie ? Bi.cookie: "") + (Bi.referrer ? Bi.referrer: ""), e = t[ae], n = Ui.history[ae]; n > 0;) t += n--^e++;
		return X(t)
	},
	er = function(t) {
		Qi();
		var e = $i;
		if (t.set(ln, e.Q), t.set(_n, e.P), t.set(yn, e.language), t.set(wn, e.characterSet), t.set(pn, e.javaEnabled), t.set(kn, e.Wa), t.get(Me) && t.get(Ge)) {
			if (! (e = zi)) {
				var n,
				i,
				r;
				if (i = "ShockwaveFlash", (e = (e = Ui[pe]) ? e.plugins: void 0) && 0 < e[ae]) for (n = 0; n < e[ae] && !r; n++) i = e[n],
				-1 < i[ee][Y]("Shockwave Flash") && (r = i.description[ue]("Shockwave Flash ")[1]);
				else {
					i = i + "." + i;
					try {
						n = new ActiveXObject(i + ".7"),
						r = n.GetVariable("$version")
					} catch(a) {}
					if (!r) try {
						n = new ActiveXObject(i + ".6"),
						r = "WIN 6,0,21,0",
						n.AllowScriptAccess = "always",
						r = n.GetVariable("$version")
					} catch(o) {}
					if (!r) try {
						n = new ActiveXObject(i),
						r = n.GetVariable("$version")
					} catch(s) {}
					r && (r = r[ue](" ")[1][ue](","), r = r[0] + "." + r[1] + " r" + r[2])
				}
				e = r ? r: "-"
			}
			zi = e,
			t.set(bn, zi)
		} else t.set(bn, "-")
	},
	nr = function(t) {
		if (r(t)) this.s = t;
		else {
			var e = t[0],
			n = e.lastIndexOf(":"),
			i = e.lastIndexOf(".");
			this.h = this.i = this.l = "",
			-1 == n && -1 == i ? this.h = e: -1 == n && -1 != i ? (this.i = e[le](0, i), this.h = e[le](i + 1)) : -1 != n && -1 == i ? (this.l = e[le](0, n), this.h = e[le](n + 1)) : n > i ? (this.i = e[le](0, i), this.l = e[le](i + 1, n), this.h = e[le](n + 1)) : (this.i = e[le](0, i), this.h = e[le](i + 1)),
			this.k = t[z](1),
			this.Ma = !this.l && "_require" == this.h,
			this.J = !this.i && !this.l && "_provide" == this.h
		}
	},
	ir = function() {
		ki(ir[oe], "push", ir[oe][G], 5),
		ki(ir[oe], "_getPlugin", q, 121),
		ki(ir[oe], "_createAsyncTracker", ir[oe].Sa, 33),
		ki(ir[oe], "_getAsyncTracker", ir[oe].Ta, 34),
		this.I = new qe,
		this.p = []
	};
	j = ir[oe],
	j.Na = function(t, e, n) {
		var i = this.I.get(t);
		return r(i) ? (e.plugins_ = e.plugins_ || new qe, e.plugins_.set(t, new i(e, n || {})), !0) : !1
	},
	j.push = function() {
		var t = Pa.Va[_e](this, arguments),
		t = Pa.p.concat(t);
		for (Pa.p = []; 0 < t[ae] && !Pa.O(t[0]) && (t.shift(), !(0 < Pa.p[ae])););
		return Pa.p = Pa.p.concat(t),
		0
	},
	j.Va = function() {
		for (var t = [], e = 0; e < arguments[ae]; e++) try {
			var n = new nr(arguments[e]);
			n.J ? this.O(n) : t[G](n)
		} catch(i) {}
		return t
	},
	j.O = function(t) {
		try {
			if (t.s) t.s[_e](Ui);
			else if (t.J) this.I.set(t.k[0], t.k[1]);
			else {
				var e = "_gat" == t.i ? Ea: "_gaq" == t.i ? Pa: Ea.u(t.i);
				if (t.Ma) {
					if (!this.Na(t.k[0], e, t.k[2])) {
						if (!t.Pa) {
							var n,
							i = _("" + t.k[1]),
							r = i[ge],
							a = Bi[de][ge];
							if (n = "https:" == r || r == a ? !0: "http:" != r ? !1: "http:" == a) t: {
								var o = _(Bi[de][me]);
								if (! (i.Oa || 0 <= i.url[Y]("?") || 0 <= i[te][Y]("://") || i[ie] == o[ie] && i[J] == o[J])) for (var s = "http:" == i[ge] ? 80: 443, u = Ea.S, e = 0; e < u[ae]; e++) if (i[ie] == u[e][0] && (i[J] || s) == (u[e][1] || s) && 0 == i[te][Y](u[e][2])) {
									n = !0;
									break t
								}
								n = !1
							}
							n && !Hi() && (t.Pa = h(i.url))
						}
						return ! 0
					}
				} else t.l && (e = e.plugins_.get(t.l)),
				e[t.h][_e](e, t.k)
			}
		} catch(c) {}
	},
	j.Sa = function(t, e) {
		return Ea.r(t, e || "")
	},
	j.Ta = function(t) {
		return Ea.u(t)
	};
	var rr,
	ar,
	or,
	sr,
	ur = function() {
		function t(t, e, n, i) {
			void 0 == a[t] && (a[t] = {}),
			void 0 == a[t][e] && (a[t][e] = []),
			a[t][e][n] = i
		}
		function e(t, e, n) {
			return void 0 != a[t] && void 0 != a[t][e] ? a[t][e][n] : void 0
		}
		function n(t, e) {
			if (void 0 != a[t] && void 0 != a[t][e]) {
				a[t][e] = void 0;
				var n,
				i = !0;
				for (n = 0; n < o[ae]; n++) if (void 0 != a[t][o[n]]) {
					i = !1;
					break
				}
				i && (a[t] = void 0)
			}
		}
		function i(t) {
			var e,
			n,
			i = "",
			r = !1;
			for (e = 0; e < o[ae]; e++) if (n = t[o[e]], void 0 != n) {
				r && (i += o[e]);
				for (var r = [], a = void 0, g = void 0, g = 0; g < n[ae]; g++) if (void 0 != n[g]) {
					a = "",
					g != h && void 0 == n[g - 1] && (a += g[re]() + f);
					for (var v = n[g], m = "", l = void 0, _ = void 0, p = void 0, l = 0; l < v[ae]; l++) _ = v[H](l),
					p = d[_],
					m += void 0 != p ? p: _;
					a += m,
					r[G](a)
				}
				i += s + r[be](c) + u,
				r = !1
			} else r = !0;
			return i
		}
		var r = this,
		a = [],
		o = ["k", "v"],
		s = "(",
		u = ")",
		c = "*",
		f = "!",
		d = {
			"'": "'0"
		};
		d[u] = "'1",
		d[c] = "'2",
		d[f] = "'3";
		var h = 1;
		r.Ra = function(t) {
			return void 0 != a[t]
		},
		r.A = function() {
			for (var t = "", e = 0; e < a[ae]; e++) void 0 != a[e] && (t += e[re]() + i(a[e]));
			return t
		},
		r.Qa = function(t) {
			if (void 0 == t) return r.A();
			for (var e = t.A(), n = 0; n < a[ae]; n++) void 0 == a[n] || t.Ra(n) || (e += n[re]() + i(a[n]));
			return e
		},
		r.f = function(e, n, i) {
			return L(i) ? (t(e, "k", n, i), !0) : !1
		},
		r.o = function(e, n, i) {
			return O(i) ? (t(e, "v", n, i[re]()), !0) : !1
		},
		r.getKey = function(t, n) {
			return e(t, "k", n)
		},
		r.N = function(t, n) {
			return e(t, "v", n)
		},
		r.L = function(t) {
			n(t, "k")
		},
		r.M = function(t) {
			n(t, "v")
		},
		ki(r, "_setKey", r.f, 89),
		ki(r, "_setValue", r.o, 90),
		ki(r, "_getKey", r.getKey, 87),
		ki(r, "_getValue", r.N, 88),
		ki(r, "_clearKey", r.L, 85),
		ki(r, "_clearValue", r.M, 86)
	},
	cr = function(t) {
		var e = Ui.gaGlobal;
		return t && !e && (Ui.gaGlobal = e = {}),
		e
	},
	fr = function() {
		var t = cr(!0).hid;
		return null == t && (t = u(), cr(!0).hid = t),
		t
	},
	dr = function(t) {
		t.set(mn, fr());
		var e = cr();
		if (e && e.dh == t.get(Oe)) {
			var n = e.sid;
			n && (I(t.get(In) ? 112: 132), t.set(An, n), t.get(Cn) && t.set(En, n)),
			e = e.vid,
			t.get(Cn) && e && (e = e[ue]("."), t.set(qn, 1 * e[0]), t.set(xn, 1 * e[1]))
		}
	},
	hr = function(t, e, n, i) {
		var r = t.c(Le, ""),
		a = t.c(Xe, "/");
		i = void 0 != i ? i: t.b(je, 0),
		t = t.c(xe, ""),
		Ji(e, n, a, r, t, i)
	},
	gr = function(t) {
		var e = t.c(Le, "");
		t.b(Oe, 1);
		var n = t.c(Xe, "/"),
		i = t.c(xe, "");
		Ji("__utma", Li(t), n, e, i, t.get(je)),
		Ji("__utmb", Oi(t), n, e, i, t.get(De)),
		Ji("__utmc", "" + t.b(Oe, 1), n, e, i);
		var r = Ki(t, !0);
		r ? Ji("__utmz", r, n, e, i, t.get(Ke)) : Ji("__utmz", "", n, e, "", -1),
		(r = ji(t, !1)) ? Ji("__utmv", r, n, e, i, t.get(je)) : Ji("__utmv", "", n, e, "", -1)
	},
	vr = function(t) {
		var e = t.b(Oe, 1);
		if (!Ii(t, C(e, Zi("__utma")))) return t.set(Tn, !0),
		!1;
		var n = !Xi(t, C(e, Zi("__utmb")));
		return t.set(Ln, n),
		Ri(t, C(e, Zi("__utmz"))),
		Di(t, C(e, Zi("__utmv"))),
		rr = !n,
		!0
	},
	mr = function(t) {
		rr || 0 < Zi("__utmb")[ae] || (Ji("__utmd", "1", t.c(Xe, "/"), t.c(Le, ""), t.c(xe, ""), 1e4), 0 == Zi("__utmd")[ae] && t[ce]())
	},
	lr = 0,
	_r = function(t) {
		void 0 == t.get(qn) ? br(t) : t.get(Tn) && !t.get(vi) ? br(t) : t.get(Ln) && yr(t)
	},
	pr = function(t) {
		t.get(Rn) && !t.get(In) && (yr(t), t.set(Kn, t.get(Pn)))
	},
	br = function(t) {
		lr++,
		lr > 1 && I(137);
		var e = t.get(Ie);
		t.set(Cn, !0),
		t.set(qn, u() ^ 2147483647 & tr(t)),
		t.set(Sn, ""),
		t.set(xn, e),
		t.set(En, e),
		t.set(An, e),
		t.set(Pn, 1),
		t.set(In, !0),
		t.set(On, 0),
		t.set(Xn, 10),
		t.set(jn, e),
		t.set(fn, []),
		t.set(Tn, !1),
		t.set(Ln, !1)
	},
	yr = function(t) {
		lr++,
		lr > 1 && I(137),
		t.set(En, t.get(An)),
		t.set(An, t.get(Ie)),
		t.Za(Pn),
		t.set(In, !0),
		t.set(On, 0),
		t.set(Xn, 10),
		t.set(jn, t.get(Ie)),
		t.set(Ln, !1)
	},
	wr = "daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p yahoo:q msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q cnn:query virgilio:qs baidu:wd baidu:word alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT search.smt.docomo:MT onet:qt onet:q kvasir:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q centrum.cz:q 360.cn:q sogou:query tut.by:query globo:q ukr:q so.com:q auone:q".split(" "),
	kr = function(t) {
		if (t.get($e) && !t.get(vi)) {
			var e;
			e = !(o(t.get(Vn)) && o(t.get(Un)) && o(t.get(Gn)) && o(t.get(zn)));
			for (var n = {},
			i = 0; i < xr[ae]; i++) {
				var r = xr[i];
				n[r] = t.get(r)
			} (i = t.get(Yn)) ? (I(149), r = new qe, p(r, i), i = r) : i = l(Bi[de][me], t.get(Re)).d,
			"1" == v(i.get(t.get(Je))) && e || (i = qr(t, i) || Cr(t), i || e || !t.get(In) || (Tr(t, void 0, "(direct)", void 0, void 0, void 0, "(direct)", "(none)", void 0, void 0), i = !0), i && (t.set(Rn, Er(t, n)), e = "(direct)" == t.get(Un) && "(direct)" == t.get(Mn) && "(none)" == t.get(Bn), t.get(Rn) || t.get(In) && !e) && (t.set(Dn, t.get(Ie)), t.set(Kn, t.get(Pn)), t.Za(Nn)))
		}
	},
	qr = function(t, e) {
		function n(n, i) {
			i = i || "-";
			var r = v(e.get(t.get(n)));
			return r && "-" != r ? d(r) : i
		}
		var i = v(e.get(t.get(Fe))) || "-",
		r = v(e.get(t.get(He))) || "-",
		a = v(e.get(t.get(Be))) || "-",
		s = v(e.get("gclsrc")) || "-",
		u = v(e.get("dclid")) || "-",
		c = n(Ue, "(not set)"),
		f = n(We, "(not set)"),
		h = n(Ye),
		g = n(Ze);
		if (o(i) && o(a) && o(u) && o(r)) return ! 1;
		var m = !o(a) && !o(s),
		m = o(r) && (!o(u) || m),
		_ = o(h);
		if (m || _) {
			var p = Ir(t),
			p = l(p, !0); (p = Sr(t, p)) && !o(p[1] && !p[2]) && (m && (r = p[0]), _ && (h = p[1]))
		}
		return Tr(t, i, r, a, s, u, c, f, h, g),
		!0
	},
	Cr = function(t) {
		var e = Ir(t),
		n = l(e, !0);
		if ((e = !(void 0 != e && null != e && "" != e && "0" != e && "-" != e && 0 <= e[Y]("://"))) || (e = n && -1 < n[ie][Y]("google") && n.d.contains("q") && "cse" == n[te]), e) return ! 1;
		if ((e = Sr(t, n)) && !e[2]) return Tr(t, void 0, e[0], void 0, void 0, void 0, "(organic)", "organic", e[1], void 0),
		!0;
		if (e || !t.get(In)) return ! 1;
		t: {
			for (var e = t.get(on), i = m(n[ie]), r = 0; r < e[ae]; ++r) if ( - 1 < i[Y](e[r])) {
				t = !1;
				break t
			}
			Tr(t, void 0, i, void 0, void 0, void 0, "(referral)", "referral", void 0, "/" + n[te]),
			t = !0
		}
		return t
	},
	Sr = function(t, e) {
		for (var n = t.get(rn), i = 0; i < n[ae]; ++i) {
			var r = n[i][ue](":");
			if ( - 1 < e[ie][Y](r[0][ye]())) {
				var a = e.d.get(r[1]);
				if (a && (a = g(a), !a && -1 < e[ie][Y]("google.") && (a = "(not provided)"), !r[3] || -1 < e.url[Y](r[3]))) {
					a || I(151);
					t: {
						for (var n = a, i = t.get(an), n = d(n)[ye](), o = 0; o < i[ae]; ++o) if (n == i[o]) {
							n = !0;
							break t
						}
						n = !1
					}
					return [r[2] || r[0], a, n]
				}
			}
		}
		return null
	},
	Tr = function(t, e, n, i, r, a, o, s, u, c) {
		t.set(Vn, e),
		t.set(Un, n),
		t.set(Gn, i),
		t.set($n, r),
		t.set(zn, a),
		t.set(Mn, o),
		t.set(Bn, s),
		t.set(Hn, u),
		t.set(Wn, c)
	},
	xr = [Mn, Vn, Gn, zn, Un, Bn, Hn, Wn],
	Er = function(t, e) {
		function n(t) {
			return t = ("" + t)[ue]("+")[be]("%20"),
			t = t[ue](" ")[be]("%20")
		}
		function i(n) {
			var i = "" + (t.get(n) || "");
			return n = "" + (e[n] || ""),
			0 < i[ae] && i == n
		}
		if (i(Gn) || i(zn)) return I(131),
		!1;
		for (var r = 0; r < xr[ae]; r++) {
			var a = xr[r],
			o = e[a] || "-",
			a = t.get(a) || "-";
			if (n(o) != n(a)) return ! 0
		}
		return ! 1
	},
	Ar = new RegExp(/^https?:\/\/(www\.)?google(\.com?)?(\.[a-z]{2}t?)?\/?$/i),
	Pr = /^https?:\/\/r\.search\.yahoo\.com\/[^?]*$/i,
	Ir = function(t) {
		t = b(t.get(vn), t.get(Xe));
		try {
			if (Ar[$](t)) return I(136),
			t + "?q=";
			if (Pr[$](t)) return I(150),
			t + "?p=(not provided)"
		} catch(e) {
			I(145)
		}
		return t
	},
	Lr = function(t) {
		ar = t.c(Gn, ""),
		or = t.c($n, "")
	},
	Or = function(t) {
		var e = t.c(Gn, ""),
		n = t.c($n, "");
		e != ar && ( - 1 < n[Y]("ds") ? t.set(Fn, void 0) : !o(ar) && -1 < or[Y]("ds") && t.set(Fn, ar))
	},
	Xr = function(t) {
		jr(t, Bi[de][me]) ? (t.set(vi, !0), I(12)) : t.set(vi, !1)
	},
	jr = function(t, e) {
		if (!t.get(Ne)) return ! 1;
		var n = l(e, t.get(Re)),
		i = g(n.d.get("__utma")),
		r = g(n.d.get("__utmb")),
		a = g(n.d.get("__utmc")),
		o = g(n.d.get("__utmx")),
		s = g(n.d.get("__utmz")),
		u = g(n.d.get("__utmv")),
		n = g(n.d.get("__utmk"));
		if (X("" + i + r + a + o + s + u) != n) {
			if (i = d(i), r = d(r), a = d(a), o = d(o), a = Kr(i + r + a + o, s, u, n), !a) return ! 1;
			s = a[0],
			u = a[1]
		}
		return Ii(t, i, !0) ? (Xi(t, r, !0), Ri(t, s, !0), Di(t, u, !0), $r(t, o, !0), !0) : !1
	},
	Dr = function(t, e, n) {
		var i;
		i = Li(t) || "-";
		var r = Oi(t) || "-",
		a = "" + t.b(Oe, 1) || "-",
		o = zr(t) || "-",
		s = Ki(t, !1) || "-";
		t = ji(t, !1) || "-";
		var u = X("" + i + r + a + o + s + t),
		c = [];
		return c[G]("__utma=" + i),
		c[G]("__utmb=" + r),
		c[G]("__utmc=" + a),
		c[G]("__utmx=" + o),
		c[G]("__utmz=" + s),
		c[G]("__utmv=" + t),
		c[G]("__utmk=" + u),
		(i = c[be]("&")) ? (r = e[Y]("#"), n ? 0 > r ? e + "#" + i: e + "&" + i: (n = "", a = e[Y]("?"), r > 0 && (n = e[le](r), e = e[le](0, r)), 0 > a ? e + "?" + i + n: e + "&" + i + n)) : e
	},
	Kr = function(t, e, n, i) {
		for (var r = 0; 3 > r; r++) {
			for (var a = 0; 3 > a; a++) {
				if (i == X(t + e + n)) return I(127),
				[e, n];
				var o = e[F](/ /g, "%20"),
				s = n[F](/ /g, "%20");
				if (i == X(t + o + s)) return I(128),
				[o, s];
				if (o = o[F](/\+/g, "%20"), s = s[F](/\+/g, "%20"), i == X(t + o + s)) return I(129),
				[o, s];
				try {
					var u = e[Z]("utmctr=(.*?)(?:\\|utm|$)");
					if (u && 2 == u[ae] && (o = e[F](u[1], f(d(u[1]))), i == X(t + o + n))) return I(139),
					[o, n]
				} catch(c) {}
				e = d(e)
			}
			n = d(n)
		}
	},
	Nr = "|",
	Rr = function(t, e, n, i, r, a, o, s, u) {
		var c = Mr(t, e);
		return c || (c = {},
		t.get(sn)[G](c)),
		c.id_ = e,
		c.affiliation_ = n,
		c.total_ = i,
		c.tax_ = r,
		c.shipping_ = a,
		c.city_ = o,
		c.state_ = s,
		c.country_ = u,
		c.items_ = c.items_ || [],
		c
	},
	Vr = function(t, e, n, i, r, a, o) {
		t = Mr(t, e) || Rr(t, e, "", 0, 0, 0, "", "", "");
		var s;
		t: {
			if (t && t.items_) {
				s = t.items_;
				for (var u = 0; u < s[ae]; u++) if (s[u].sku_ == n) {
					s = s[u];
					break t
				}
			}
			s = null
		}
		return u = s || {},
		u.transId_ = e,
		u.sku_ = n,
		u.name_ = i,
		u.category_ = r,
		u.price_ = a,
		u.quantity_ = o,
		s || t.items_[G](u),
		u
	},
	Mr = function(t, e) {
		for (var n = t.get(sn), i = 0; i < n[ae]; i++) if (n[i].id_ == e) return n[i];
		return null
	},
	Gr = function(t) {
		if (!sr) {
			var e;
			e = Bi[de].hash;
			var n = Ui[ee],
			i = /^#?gaso=([^&]*)/; (n = (e = (e = e && e[Z](i) || n && n[Z](i)) ? e[1] : g(Zi("GASO"))) && e[Z](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (hr(t, "GASO", "" + e, 0), Ea._gasoDomain = t.get(Le), Ea._gasoCPath = t.get(Xe), t = n[1], h("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (t ? "prefix=" + t + "&": "") + u(), "_gasojs")),
			sr = !0
		}
	},
	$r = function(t, e, n) {
		n && (e = d(e)),
		n = t.b(Oe, 1),
		e = e[ue]("."),
		2 > e[ae] || !/^\d+$/ [$](e[0]) || (e[0] = "" + n, hr(t, "__utmx", e[be]("."), void 0))
	},
	zr = function(t, e) {
		var n = C(t.get(Oe), Zi("__utmx"));
		return "-" == n && (n = ""),
		e ? f(n) : n
	},
	Fr = function(t) {
		try {
			var e = l(Bi[de][me], !1),
			n = M(v(e.d.get("utm_referrer"))) || "";
			n && t.set(vn, n);
			var i = M(g(e.d.get("utm_expid"))) || "";
			i && (i = i[ue](".")[0], t.set(li, "" + i))
		} catch(r) {
			I(146)
		}
	},
	Ur = function(t) {
		var e = Ui.gaData && Ui.gaData.expId;
		e && t.set(li, "" + e)
	},
	Br = function(t, e) {
		var n = V.min(t.b(ui, 0), 100);
		if (t.b(qn, 0) % 100 >= n) return ! 1;
		if (n = Jr() || Qr(), void 0 == n) return ! 1;
		var i = n[0];
		return void 0 == i || i == K || R(i) ? !1: (i > 0 ? e(Wr(n) ? Zr(n) : Zr(n[z](0, 1))) : we(Ui, "load",
		function() {
			Br(t, e)
		},
		!1), !0)
	},
	Hr = function(t, e, n, i) {
		var r = new ur;
		return r.f(14, 90, e[le](0, 500)),
		r.f(14, 91, t[le](0, 150)),
		r.f(14, 92, "" + Yr(n)),
		void 0 != i && r.f(14, 93, i[le](0, 500)),
		r.o(14, 90, n),
		r
	},
	Wr = function(t) {
		for (var e = 1; e < t[ae]; e++) if (R(t[e]) || t[e] == K || 0 > t[e]) return ! 1;
		return ! 0
	},
	Yr = function(t) {
		return R(t) || 0 > t ? 0: 5e3 > t ? 10 * V[B](t / 10) : 5e4 > t ? 100 * V[B](t / 100) : 41e5 > t ? 1e3 * V[B](t / 1e3) : 41e5
	},
	Zr = function(t) {
		for (var e = new ur, n = 0; n < t[ae]; n++) e.f(14, n + 1, "" + Yr(t[n])),
		e.o(14, n + 1, t[n]);
		return e
	},
	Jr = function() {
		var t = Ui.performance || Ui.webkitPerformance;
		if (t = t && t.timing) {
			var e = t.navigationStart;
			if (0 != e) return [t.loadEventStart - e, t.domainLookupEnd - t.domainLookupStart, t.connectEnd - t.connectStart, t.responseStart - t.requestStart, t.responseEnd - t.responseStart, t.fetchStart - e, t.domInteractive - e, t.domContentLoadedEventStart - e];
			I(133)
		}
	},
	Qr = function() {
		if (Ui.top == Ui) {
			var t = Ui.external,
			e = t && t.onloadT;
			return t && !t.isValidLoadTime && (e = void 0),
			e > 2147483648 && (e = void 0),
			e > 0 && t.setPageReadyTime(),
			void 0 == e ? void 0: [e]
		}
	},
	ta = function(t) {
		if (t.get(Cn)) try {
			var e;
			t: {
				var n = Zi(t.get(_i) || "_ga");
				if (n && !(1 > n[ae])) {
					for (var i = [], r = 0; r < n[ae]; r++) {
						var a,
						o = n[r][ue]("."),
						s = o.shift();
						if (("GA1" == s || "1" == s) && 1 < o[ae]) {
							var u = o.shift()[ue]("-");
							1 == u[ae] && (u[1] = "1"),
							u[0] *= 1,
							u[1] *= 1,
							a = {
								Ya: u,
								$a: o[be](".")
							}
						} else a = void 0;
						a && i[G](a)
					}
					if (1 == i[ae]) {
						e = i[0].$a;
						break t
					}
					if (0 != i[ae]) {
						var c = t.get(pi) || t.get(Le),
						i = ea(i, (0 == c[Y](".") ? c.substr(1) : c)[ue](".")[ae], 0);
						if (1 == i[ae]) {
							e = i[0].$a;
							break t
						}
						var f = t.get(bi) || t.get(Xe); (n = f) ? (1 < n[ae] && "/" == n[H](n[ae] - 1) && (n = n.substr(0, n[ae] - 1)), 0 != n[Y]("/") && (n = "/" + n), f = n) : f = "/",
						i = ea(i, "/" == f ? 1: f[ue]("/")[ae], 1),
						e = i[0].$a;
						break t
					}
				}
				e = void 0
			}
			if (e) {
				var d = ("" + e)[ue](".");
				2 == d[ae] && /[0-9.]/ [$](d) && (I(114), t.set(qn, d[0]), t.set(xn, d[1]), t.set(Cn, !1))
			}
		} catch(h) {
			I(115)
		}
	},
	ea = function(t, e, n) {
		for (var i = [], r = [], a = 128, o = 0; o < t[ae]; o++) {
			var s = t[o];
			s.Ya[n] == e ? i[G](s) : s.Ya[n] == a ? r[G](s) : s.Ya[n] < a && (r = [s], a = s.Ya[n])
		}
		return 0 < i[ae] ? i: r
	},
	na = function(t, e, n) {
		function i(t) {
			return function(e) {
				if ((e = e.get(mi)[t]) && e[ae]) for (var n = Si(r, t), i = 0; i < e[ae]; i++) e[i].call(r, n)
			}
		}
		var r = this;
		this.a = new Ai,
		this.get = function(t) {
			return this.a.get(t)
		},
		this.set = function(t, e, n) {
			this.a.set(t, e, n)
		},
		this.set(xe, e || "UA-XXXXX-X"),
		this.set(Pe, t || ""),
		this.set(Ae, n || ""),
		this.set(Ie, V.round((new Date)[ne]() / 1e3)),
		this.set(Xe, "/"),
		this.set(je, 63072e6),
		this.set(Ke, 15768e6),
		this.set(De, 18e5),
		this.set(Ne, !1),
		this.set(nn, 50),
		this.set(Re, !1),
		this.set(Ve, !0),
		this.set(Me, !0),
		this.set(Ge, !0),
		this.set($e, !0),
		this.set(ze, !0),
		this.set(Ue, "utm_campaign"),
		this.set(Fe, "utm_id"),
		this.set(Be, "gclid"),
		this.set(He, "utm_source"),
		this.set(We, "utm_medium"),
		this.set(Ye, "utm_term"),
		this.set(Ze, "utm_content"),
		this.set(Je, "utm_nooverride"),
		this.set(Qe, 100),
		this.set(ui, 1),
		this.set(ci, !1),
		this.set(tn, "/__utm.gifx"),
		this.set(en, 1),
		this.set(sn, []),
		this.set(fn, []),
		this.set(rn, wr[z](0)),
		this.set(an, []),
		this.set(on, []),
		this.B("auto"),
		this.set(vn, Bi.referrer),
		Fr(this.a),
		this.set(mi, {
			hit: [],
			load: []
		}),
		this.set(ppuserid, ""),
		this.set(ppcity, ""),
		this.set(ppchannel, ""),
		this.set(pporderid, ""),
		this.a.g("0", Xr),
		this.a.g("1", Lr),
		this.a.g("2", _r),
		this.a.g("3", ta),
		this.a.g("4", kr),
		this.a.g("5", Or),
		this.a.g("6", pr),
		this.a.g("7", i("load")),
		this.a.g("8", Gr),
		this.a.e("A", T),
		this.a.e("B", x),
		this.a.e("C", E),
		this.a.e("D", _r),
		this.a.e("E", S),
		this.a.e("F", Ei),
		this.a.e("G", ia),
		this.a.e("H", P),
		this.a.e("I", mr),
		this.a.e("J", A),
		this.a.e("K", er),
		this.a.e("L", dr),
		this.a.e("M", Ur),
		this.a.e("N", i("hit")),
		this.a.e("O", _a),
		this.a.e("P", ra),
		0 === this.get(Ie) && I(111),
		this.a.T(),
		this.H = void 0
	};
	j = na[oe],
	j.m = function() {
		var t = this.get(un);
		return t || (t = new ur, this.set(un, t)),
		t
	},
	j.La = function(t) {
		for (var e in t) {
			var n = t[e];
			t.hasOwnProperty(e) && this.set(e, n, !0)
		}
	},
	j.K = function(t) {
		if (this.get(ci)) return ! 1;
		var e = this,
		n = Br(this.a,
		function(n) {
			e.set(hn, t, !0),
			e.t(n)
		});
		return this.set(ci, n),
		n
	},
	j.Fa = function(t) {
		t && a(t) ? (I(13), this.set(hn, t, !0)) : "object" == typeof t && null !== t && this.La(t),
		this.H = t = this.get(hn),
		this.a.j("page"),
		this.K(t)
	},
	j.F = function(t, e, n, i, r) {
		return "" == t || !L(t) || "" == e || !L(e) || void 0 != n && !L(n) || void 0 != i && !O(i) ? !1: (this.set(ei, t, !0), this.set(ni, e, !0), this.set(ii, n, !0), this.set(ri, i, !0), this.set(ti, !!r, !0), this.a.j("event"), !0)
	},
	j.Ha = function(t, e, n, i, r) {
		var a = this.a.b(ui, 0);
		return 1 * r === r && (a = r),
		this.a.b(qn, 0) % 100 >= a ? !1: (n = 1 * ("" + n), "" == t || !L(t) || "" == e || !L(e) || !O(n) || R(n) || 0 > n || 0 > a || a > 100 || void 0 != i && ("" == i || !L(i)) ? !1: (this.t(Hr(t, e, n, i)), !0))
	},
	j.Ga = function(t, e, n, i) {
		return t && e ? (this.set(ai, t, !0), this.set(oi, e, !0), this.set(si, n || Bi[de][me], !0), i && this.set(hn, i, !0), this.a.j("social"), !0) : !1
	},
	j.Ea = function() {
		this.set(ui, 10),
		this.K(this.H)
	},
	j.Ia = function() {
		this.a.j("trans")
	},
	j.t = function(t) {
		this.set(cn, t, !0),
		this.a.j("event")
	},
	j.ia = function(t) {
		this.v();
		var e = this;
		return {
			_trackEvent: function(n, i, r) {
				I(91),
				e.F(t, n, i, r)
			}
		}
	},
	j.ma = function(t) {
		return this.get(t)
	},
	j.xa = function(t, e) {
		if (t) if (a(t)) this.set(t, e);
		else if ("object" == typeof t) for (var n in t) t.hasOwnProperty(n) && this.set(n, t[n])
	},
	j.addEventListener = function(t, e) {
		var n = this.get(mi)[t];
		n && n[G](e)
	},
	j.removeEventListener = function(t, e) {
		for (var n = this.get(mi)[t], i = 0; n && i < n[ae]; i++) if (n[i] == e) {
			n.splice(i, 1);
			break
		}
	},
	j.qa = function() {
		return "5.5.3"
	},
	j.B = function(t) {
		this.get(Ve),
		t = "auto" == t ? m(Bi.domain) : t && "-" != t && "none" != t ? t[ye]() : "",
		this.set(Le, t)
	},
	j.va = function(t) {
		this.set(Ve, !!t)
	},
	j.na = function(t, e) {
		return Dr(this.a, t, e)
	},
	j.link = function(t, e) {
		if (this.a.get(Ne) && t) {
			var n = Dr(this.a, t, e);
			Bi[de].href = n
		}
	},
	j.ua = function(t, e) {
		this.a.get(Ne) && t && t.action && (t.action = Dr(this.a, t.action, e))
	},
	j.za = function() {
		this.v();
		var t = this.a,
		e = Bi.getElementById ? Bi.getElementById("utmtrans") : Bi.utmform && Bi.utmform.utmtrans ? Bi.utmform.utmtrans: null;
		if (e && e[W]) {
			t.set(sn, []);
			for (var e = e[W][ue]("UTM:"), n = 0; n < e[ae]; n++) {
				e[n] = s(e[n]);
				for (var i = e[n][ue](Nr), r = 0; r < i[ae]; r++) i[r] = s(i[r]);
				"T" == i[0] ? Rr(t, i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8]) : "I" == i[0] && Vr(t, i[1], i[2], i[3], i[4], i[5], i[6])
			}
		}
	},
	j.$ = function(t, e, n, i, r, a, o, s) {
		return Rr(this.a, t, e, n, i, r, a, o, s)
	},
	j.Y = function(t, e, n, i, r, a) {
		return Vr(this.a, t, e, n, i, r, a)
	},
	j.Aa = function(t) {
		Nr = t || "|"
	},
	j.ea = function() {
		this.set(sn, [])
	},
	j.wa = function(t, e, i, r) {
		var a = this.a;
		if (0 >= t || t > a.get(nn)) t = !1;
		else if (!e || !i || 128 < e[ae] + i[ae]) t = !1;
		else {
			1 != r && 2 != r && (r = 3);
			var o = {};
			n(o, e),
			o.value = i,
			o.scope = r,
			a.get(fn)[t] = o,
			t = !0
		}
		return t && this.a.n(),
		t
	},
	j.ka = function(t) {
		this.a.get(fn)[t] = void 0,
		this.a.n()
	},
	j.ra = function(t) {
		return (t = this.a.get(fn)[t]) && 1 == t[fe] ? t[W] : void 0
	},
	j.Ca = function(t, e, n) {
		this.m().f(t, e, n)
	},
	j.Da = function(t, e, n) {
		this.m().o(t, e, n)
	},
	j.sa = function(t, e) {
		return this.m().getKey(t, e)
	},
	j.ta = function(t, e) {
		return this.m().N(t, e)
	},
	j.fa = function(t) {
		this.m().L(t)
	},
	j.ga = function(t) {
		this.m().M(t)
	},
	j.ja = function() {
		return new ur
	},
	j.W = function(t) {
		t && this.get(an)[G](t[ye]())
	},
	j.ba = function() {
		this.set(an, [])
	},
	j.X = function(t) {
		t && this.get(on)[G](t[ye]())
	},
	j.ca = function() {
		this.set(on, [])
	},
	j.Z = function(t, e, n, i, r) {
		t && e && (t = [t, e[ye]()][be](":"), (i || r) && (t = [t, i, r][be](":")), i = this.get(rn), i.splice(n ? 0: i[ae], 0, t))
	},
	j.da = function() {
		this.set(rn, [])
	},
	j.ha = function(t) {
		this.a[U]();
		var e = this.get(Xe),
		n = zr(this.a);
		this.set(Xe, t),
		this.a.n(),
		$r(this.a, n),
		this.set(Xe, e)
	},
	j.ya = function(t, e) {
		if (t > 0 && 5 >= t && a(e) && "" != e) {
			var n = this.get(fi) || [];
			n[t] = e,
			this.set(fi, n)
		}
	},
	j.V = function(t) {
		if (t = "" + t, t[Z](/^[A-Za-z0-9]{1,5}$/)) {
			var e = this.get(gi) || [];
			e[G](t),
			this.set(gi, e)
		}
	},
	j.v = function() {
		this.a[U]()
	},
	j.Ba = function(t) {
		t && "" != t && (this.set(Sn, t), this.a.j("var"))
	};
	var ia = function(t) {
		if ("trans" !== t.get(Zn) && 500 <= t.b(On, 0) && t[ce](), "event" === t.get(Zn)) {
			var e = (new Date)[ne](),
			n = t.b(jn, 0),
			i = t.b(An, 0),
			n = V[B]((e - (n != i ? n: 1e3 * n)) / 1e3 * 1);
			n > 0 && (t.set(jn, e), t.set(Xn, V.min(10, t.b(Xn, 0) + n))),
			0 >= t.b(Xn, 0) && t[ce]()
		}
	},
	ra = function(t) {
		"event" === t.get(Zn) && t.set(Xn, V.max(0, t.b(Xn, 10) - 1))
	},
	aa = function() {
		var t = [];
		this.add = function(e, n, i) {
			i && (n = f("" + n)),
			t[G](e + "=" + n)
		},
		this.toString = function() {
			return t[be]("&")
		}
	},
	oa = function(t, e) { (e || 2 != t.get(en)) && t.Za(On)
	},
	sa = function(t, e) {
		e.add("utmwv", "5.5.3"),
		e.add("utms", t.get(On)),
		e.add("utmn", u());
		var n = Bi[de].hostname;
		o(n) || e.add("utmhn", n, !0),
		n = t.get(Qe),
		100 != n && e.add("utmsp", n, !0)
	},
	ua = function(t, e) {
		e.add("utmht", (new Date)[ne]()),
		e.add("utmac", s(t.get(xe))),
		t.get(li) && e.add("utmxkey", t.get(li), !0),
		t.get(ti) && e.add("utmni", 1);
		var n = t.get(gi);
		n && 0 < n[ae] && e.add("utmdid", n[be](".")),
		fa(t, e),
		!1 !== t.get(Ee) && (t.get(Ee) || Ea.w) && e.add("aip", 1),
		Ea.bb || (Ea.bb = t.get(xe)),
		(1 < Ea.ab() || Ea.bb != t.get(xe)) && e.add("utmmt", 1),
		e.add("utmu", Fi.Xa())
	},
	ca = function(t, e) {
		for (var n = t.get(fi) || [], i = [], r = 1; r < n[ae]; r++) n[r] && i[G](r + ":" + f(n[r][F](/%/g, "%25")[F](/:/g, "%3A")[F](/,/g, "%2C")));
		i[ae] && e.add("utmpg", i[be](","))
	},
	fa = function(t, e) {
		function n(t, e) {
			e && i[G](t + "=" + e + ";")
		}
		var i = [];
		n("__utma", Li(t)),
		n("__utmz", Ki(t, !1)),
		n("__utmv", ji(t, !0)),
		n("__utmx", zr(t)),
		e.add("utmcc", i[be]("+"), !0)
	},
	da = function(t, e) {
		t.get(Me) && (e.add("utmcs", t.get(wn), !0), e.add("utmsr", t.get(ln)), t.get(kn) && e.add("utmvp", t.get(kn)), e.add("utmsc", t.get(_n)), e.add("utmul", t.get(yn)), e.add("utmje", t.get(pn)), e.add("utmfl", t.get(bn), !0))
	},
	ha = function(t, e) {
		t.get(ze) && t.get(gn) && e.add("utmdt", t.get(gn), !0),
		e.add("utmhid", t.get(mn)),
		e.add("utmr", b(t.get(vn), t.get(Xe)), !0),
		e.add("utmp", f(t.get(hn), !0), !0)
	},
	ga = function(t, e) {
		for (var n = t.get(un), i = t.get(cn), r = t.get(fn) || [], a = 0; a < r[ae]; a++) {
			var s = r[a];
			s && (n || (n = new ur), n.f(8, a, s[ee]), n.f(9, a, s[W]), 3 != s[fe] && n.f(11, a, "" + s[fe]))
		}
		o(t.get(ei)) || o(t.get(ni), !0) || (n || (n = new ur), n.f(5, 1, t.get(ei)), n.f(5, 2, t.get(ni)), r = t.get(ii), void 0 != r && n.f(5, 3, r), r = t.get(ri), void 0 != r && n.o(5, 1, r)),
		n ? e.add("utme", n.Qa(i), !0) : i && e.add("utme", i.A(), !0)
	},
	va = function(t, e, n) {
		var i = new aa;
		return oa(t, n),
		sa(t, i),
		i.add("utmt", "tran"),
		i.add("utmtid", e.id_, !0),
		i.add("utmtst", e.affiliation_, !0),
		i.add("utmtto", e.total_, !0),
		i.add("utmttx", e.tax_, !0),
		i.add("utmtsp", e.shipping_, !0),
		i.add("utmtci", e.city_, !0),
		i.add("utmtrg", e.state_, !0),
		i.add("utmtco", e.country_, !0),
		ga(t, i),
		da(t, i),
		ha(t, i),
		(e = t.get(dn)) && i.add("utmcu", e, !0),
		n || (ca(t, i), ua(t, i)),
		i[re]()
	},
	ma = function(t, e, n) {
		var i = new aa;
		return oa(t, n),
		sa(t, i),
		i.add("utmt", "item"),
		i.add("utmtid", e.transId_, !0),
		i.add("utmipc", e.sku_, !0),
		i.add("utmipn", e.name_, !0),
		i.add("utmiva", e.category_, !0),
		i.add("utmipr", e.price_, !0),
		i.add("utmiqt", e.quantity_, !0),
		ga(t, i),
		da(t, i),
		ha(t, i),
		(e = t.get(dn)) && i.add("utmcu", e, !0),
		n || (ca(t, i), ua(t, i)),
		i[re]()
	},

	pp = function(t, e) { //PP租车自建统计
		e.add('page_refer', encodeURIComponent(document.referrer));
		e.add('sid', t.get(ppsid));
		e.add('user_id', t.get(ppuserid));
		e.add('city', t.get(ppcity));
		e.add('channel', t.get(ppchannel));
		e.add('order_id', t.get(pporderid));
	},
	la = function(t, e) {
		var n = t.get(Zn);
		if ("page" == n) n = new aa,
		oa(t, e),
		sa(t, n),
		ga(t, n),
		da(t, n),
		ha(t, n),		
		e || (ca(t, n), ua(t, n)),
		pp(t, n),
		n = [n[re]()];
		else if ("event" == n) n = new aa,
		oa(t, e),
		sa(t, n),
		n.add("utmt", "event"),
		ga(t, n),
		da(t, n),
		ha(t, n),
		e || (ca(t, n), ua(t, n)),
		pp(t, n),
		n = [n[re]()];
		else if ("var" == n) n = new aa,
		oa(t, e),
		sa(t, n),
		n.add("utmt", "var"),
		!e && ua(t, n),
		pp(t, n),
		n = [n[re]()];
		else if ("trans" == n) for (var n = [], i = t.get(sn), r = 0; r < i[ae]; ++r) {
			n[G](va(t, i[r], e));
			for (var a = i[r].items_, o = 0; o < a[ae]; ++o) n[G](ma(t, a[o], e))
		} else "social" == n ? e ? n = [] : (n = new aa, oa(t, e), sa(t, n), n.add("utmt", "social"), n.add("utmsn", t.get(ai), !0), n.add("utmsa", t.get(oi), !0), n.add("utmsid", t.get(si), !0), ga(t, n), da(t, n), ha(t, n), ca(t, n), ua(t, n), n = [n[re]()]) : "feedback" == n ? e ? n = [] : (n = new aa, oa(t, e), sa(t, n), n.add("utmt", "feedback"), n.add("utmfbid", t.get(di), !0), n.add("utmfbpr", t.get(hi), !0), ga(t, n), da(t, n), ha(t, n), ca(t, n), ua(t, n), n = [n[re]()]) : n = [];
		return n
	},
	_a = function(t) {
		var e,
		n = t.get(en),		
		i = t.get(Qn),
		r = i && i.Ua,
		a = 0;
		if (0 == n || 2 == n) {
			var o = t.get(tn) + "?";
			e = la(t, !0);
			for (var s = 0, u = e[ae]; u > s; s++) wa(e[s], r, o, !0),
			a++
		}
		if (1 == n || 2 == n) for (e = la(t), s = 0, u = e[ae]; u > s; s++) try {
			wa(e[s], r),
			a++
		} catch(c) {
			c && y(c[ee], void 0, c.message)
		}
		i && (i.q = a)
	},
	pa = function() {
		return "https:" == Bi[de][ge] || Ea.G ? "https://ssl.google-analytics.com": "http://www.google-analytics.com"
	},
	ba = function(t) {
		n(this, "len"),
		this.message = t + "-8192"
	},
	ya = function(t) {
		n(this, "ff2post"),
		this.message = t + "-2036"
	},
	wa = function(t, e, n, i) {
		if (e = e || c, i || 2036 >= t[ae]) ka(t, e, n);
		else {
			if (! (8192 >= t[ae])) throw new ba(t[ae]);
			if (0 <= Ui[pe].userAgent[Y]("Firefox") && ![].reduce) throw new ya(t[ae]);
			Ca(t, e) || qa(t, e) || Sa(t, e)
		}
	},
	ka = function(n, i, r) {
		r = r || pa() + "/__utm.gif?";
		var a = new Image(1, 1);
		a.src = r + n,			
		t(a,
		function() {
			t(a, null),
			e(a, null),
			i()
		}),
		e(a,
		function() {
			t(a, null),
			e(a, null),
			i()
		});

		var pp_r = 'http://stats.p2pzc.com/w/dcs.gif?';
		var b = new Image(1, 1);
		b.src = pp_r + n;	
	},
	qa = function(n, i) {
		var r;
		return (r = Ui.XDomainRequest) ? (r = new r, r.open("POST", pa() + "/p/__utm.gif"), e(r,
		function() {
			i()
		}), t(r, i), r.send(n), !0) : !1
	},
	Ca = function(t, e) {
		var n = Ui.XMLHttpRequest;
		if (!n) return ! 1;
		var i = new n;
		return "withCredentials" in i ? (i.open("POST", pa() + "/p/__utm.gif", !0), i.withCredentials = !0, i.setRequestHeader("Content-Type", "text/plain"), i.onreadystatechange = function() {
			4 == i.readyState && (e(), i = null)
		},
		i.send(t), !0) : !1
	},
	Sa = function(t, e) {
		if (Bi.body) {
			t = D(t);
			try {
				var i = Bi[Q]('<iframe name="' + t + '"></iframe>')
			} catch(r) {
				i = Bi[Q]("iframe"),
				n(i, t)
			}
			i.height = "0",
			i.width = "0",
			i.style.display = "none",
			i.style.visibility = "hidden";
			var a = Bi[de],
			a = pa() + "/u/post_iframe.html#" + D(a[ge] + "//" + a[ie] + "/favicon.ico"),
			o = function() {
				i.src = "",
				i.parentNode && i.parentNode.removeChild(i)
			};
			we(Ui, "beforeunload", o);
			var s = !1,
			u = 0,
			c = function() {
				if (!s) {
					try {
						if (u > 9 || i.contentWindow[de][ie] == Bi[de][ie]) return s = !0,
						o(),
						ke(Ui, "beforeunload", o),
						void e()
					} catch(t) {}
					u++,
					N(c, 200)
				}
			};
			we(i, "load", c),
			Bi.body.appendChild(i),
			i.src = a
		} else Yi(function() {
			Sa(t, e)
		},
		100)
	},
	Ta = function() {
		this.G = this.w = !1,
		this.C = {},
		this.D = [],
		this.U = 0,
		this.S = [["www.google-analytics.com", "", "/plugins/"]],
		this._gasoCPath = this._gasoDomain = this.bb = void 0,
		yi(),
		wi()
	};
	j = Ta[oe],
	j.oa = function(t, e) {
		return this.r(t, void 0, e)
	},
	j.r = function(t, e, n) {
		return e && I(23),
		n && I(67),
		void 0 == e && (e = "~" + Ea.U++),
		t = new na(e, t, n),
		Ea.C[e] = t,
		Ea.D[G](t),
		t
	},
	j.u = function(t) {
		return t = t || "",
		Ea.C[t] || Ea.r(void 0, t)
	},
	j.pa = function() {
		return Ea.D[z](0)
	},
	j.ab = function() {
		return Ea.D[ae]
	},
	j.aa = function() {
		this.w = !0
	},
	j.la = function() {
		this.G = !0
	};
	var xa = function(t) {
		return "prerender" == Bi.visibilityState ? !1: (t(), !0)
	},
	Ea = new Ta,
	Aa = Ui._gat;
	Aa && r(Aa._getTracker) ? Ea = Aa: Ui._gat = Ea;
	var Pa = new ir; !
	function(t) {
		if (!xa(t)) {
			I(123);
			var e = !1,
			n = function() { ! e && xa(t) && (e = !0, ke(Bi, "visibilitychange", n))
			};
			we(Bi, "visibilitychange", n)
		}
	} (function() {
		var t = Ui._gaq,
		e = !1;
		return t && r(t[G]) && (e = "[object Array]" == Object[oe][re].call(Object(t)), !e) ? void(Pa = t) : (Ui._gaq = Pa, void(e && Pa[G][_e](Pa, t)))
	})
} ();
