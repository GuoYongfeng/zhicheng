(function(){var d=window,f=document,h=parseInt,l="items",m="split",q="push",r="length",t="prototype",u,v=this,w=function(a,c,b){a=a[m](".");b=b||v;a[0]in b||!b.execScript||b.execScript("var "+a[0]);for(var e;a[r]&&(e=a.shift());)a[r]||void 0===c?b=b[e]?b[e]:b[e]={}:b[e]=c},x=Date.now||function(){return+new Date};var y=function(a){this.D=a},A=/\s*;\s*/;u=y[t];u.isEnabled=function(){return navigator.cookieEnabled};u.Q=function(a){return!/[;=\s]/.test(a)};u.R=function(a){return!/[;\r\n]/.test(a)};
u.set=function(a,c,b,e,g,k){if(!this.Q(a))throw Error('Invalid cookie name "'+a+'"');if(!this.R(c))throw Error('Invalid cookie value "'+c+'"');void 0!==b||(b=-1);g=g?";domain="+g:"";e=e?";path="+e:"";k=k?";secure":"";b=0>b?"":0==b?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*b)).toUTCString();this.S(a+"="+c+g+e+b+k)};u.L=function(){return this.w().keys};u.M=function(){return this.w().P};u.S=function(a){this.D.cookie=a};u.U=function(){return(this.D.cookie||"")[m](A)};
u.w=function(){for(var a=this.U(),c=[],b=[],e,g,k=0;g=a[k];k++)e=g.indexOf("="),-1==e?(c[q](""),b[q](g)):(c[q](g.substring(0,e)),b[q](g.substring(e+1)));return{keys:c,P:b}};var B={},C=function(a,c,b){this.b=a;this.u=c;this.t=b;this.m=Math.floor((new Date).getTime()/1E3);this.l=8035200;this.n=void 0};C[t].F=function(){return this.b+"$"+this.u+":"+this.t};C[t].G=function(){var a=this.b+"$"+this.u+":"+this.m+":"+this.l;"string"==typeof this.n&&(a=a.concat(":",this.n));return a};C[t].O=function(a,c,b){this.m=a;this.l=c;this.n=b};C[t].N=function(){return(new Date).getTime()>(new Date(1E3*(this.m+this.l))).getTime()};
var F=function(a){var c={},b=new y(f);if(!b.isEnabled())return c;var e=b.L(),b=b.M();if(null==e||null==b)return c;for(var g=0;g<e[r];g++)if("__utmx"==e[g])for(var k=E(b[g],a),p=0;p<k[r];p++){var n=/([^$]+)\$([^:]+):(.*)/.exec(k[p]);null!==n&&4==n[r]&&(n=new C(n[1],n[2],n[3]),c[n.b]=n)}g={};for(k=0;k<e[r];k++)if("__utmxx"==e[k])for(p=E(b[k],a),n=0;n<p[r];n++){var s=/([^$]+)\$([^:]+):([^:]+):([^:]+):?(.*)/.exec(p[n]);if(null!==s&&5<=s[r]){var D=s[1],z=c[D];"undefined"!=typeof z&&(z.O(h(s[3],10),h(s[4],
10),6==s[r]?s[5]:void 0),z.N()||(g[D]=z))}}return g},E=function(a,c){var b=a[m](".");return"string"==typeof c&&0<b[r]&&b[0]!=c?[]:b.slice(1)};var G=function(a,c,b,e,g){this.b=g||G.DEFAULT_ID;this.a=a;this.e=c;this.f=b;this.d=e;this.s=!1};G.experiments_={};G.DEFAULT_ID="";u=G[t];u.j=function(a){if(!this.g()&&!this.p()){var c=new y(f);if(H(c.isEnabled(),"Unable to write cookies")){var b=this.h(a),e=this.o(),g=F(e);g[this.b]=new C(this.b,"0",b);var b=e,k;for(k in g)var p=g[k],b=b.concat(".",p.F()),e=e.concat(".",p.G());c.set("__utmx",b,this.d,this.e,this.i());c.set("__utmxx",e,this.d,this.e,this.i());-2!=a[0]&&this.q(a)}}};
u.q=function(a){d.gaData||(d.gaData={});d.gaData.expId=this.b;d.gaData.expVar=this.h(a)};u.i=function(){if("string"==typeof this.a&&""!=this.a&&"none"!=this.a&&"auto"!=this.a)return this.a;if("none"==this.a)return null;var a=""+f.domain;return 0==a.indexOf("www.")?a.substring(4):a};u.o=function(){if(!this.f)return"1";var a=this.i();if(a){var c=1,b=0,e;if(a)for(c=0,e=a[r]-1;0<=e;e--)b=a.charCodeAt(e),c=(c<<6&268435455)+b+(b<<14),b=c&266338304,c=0!=b?c^b>>21:c;a=String(c)}else a="1";return a};
u.h=function(a){for(var c=0;c<a[r];c++)if(-2==a[c])return"";return a.join("-")};u.k=function(a){if(0==a[r])return-2;a=a[m]("-");for(var c=[],b=0;b<a[r];b++)c[b]=h(a[b],10);return c};var H=function(a,c){!a&&c&&console&&console.error&&console.error(c);return a};u=G[t];u.g=function(){var a=d._gaUserPrefs;return a&&a.ioo&&a.ioo()};
u.v=function(){if(!this.s){var a=G.experiments_[this.b];this.s=!0;if(!H("object"==typeof a,"Could not load experiment")||a.error)return!1;this.c=a.data}return H("object"===typeof this.c,"Could not load experiment")};u.r=function(){if(this.g())return-2;var a=this.p();if(a)return a;a=F(this.o())[this.b];if(!a)return-1;a=this.k(a.t);-2!=a&&this.q(a);return a};
u.H=function(){if(this.g()||!this.v())return 0;var a=this.r();if(-2==a||this.J(a))return 0;if(-1!==a)return a;if(!this.I())return this.j([-2]),0;a=this.K();this.j(a);return a};u.I=function(a){return("number"==typeof a?a:Math.random())<this.c.participation};
u.K=function(a){H("undefined"===typeof _gaq,"Variations should be chosen before hit is sent to GA");a="number"==typeof a?a:Math.random();for(var c=0;c<this.c[l][r];c++){var b=this.c[l][c];if(a<b.weight)return this.k(b.id);a-=b.weight}H(!1,"The combinations weights did not add up to 1");return[0]};u.T=function(a){return this.v()&&H(0<=a&&a<this.c[l][r])?this.c[l][a]:null};
u.p=function(){var a=/#utmxid=[-_a-zA-Z0-9]{22};utmxpreview=(\d{1,2});/.exec(d.location.hash);return a?(a=this.T(h(a[1],10)),this.k(a.id)):null};u.J=function(a){if("number"===typeof a)return!1;a=this.h(a);for(var c=0;c<this.c[l][r];c++){var b=this.c[l][c];if(b.id==a)return b.disabled}H(!1,"Unable to locate combination with id "+a);return!0};B=B||{};B.X=0;w("cxApi.ORIGINAL_VARIATION",B.X,void 0);B.W=-1;w("cxApi.NO_CHOSEN_VARIATION",B.W,void 0);B.V=-2;w("cxApi.NOT_PARTICIPATING",B.V,void 0);B.B="auto";w("cxApi.DEFAULT_DOMAIN",B.B,void 0);B.C=48211200;w("cxApi.DEFAULT_EXPIRATION_SECONDS",B.C,void 0);B.A="/";w("cxApi.DEFAULT_COOKIE_PATH",B.A,void 0);B.a=B.B;B.e=B.A;B.f=!0;B.d=B.C;B.aa=function(a,c){H("string"==typeof c||"undefined"==typeof c,"Invalid experiment id: "+c)&&(new G(B.a,B.e,B.f,B.d,c)).j([a])};
w("cxApi.setChosenVariation",B.aa,void 0);B.da=function(a){H("string"==typeof a,"Invalid domain name: "+a)&&(B.a=a)};w("cxApi.setDomainName",B.da,void 0);B.ca=function(a){H("string"==typeof a,"Invalid cookie path: "+a)&&(B.e=a)};w("cxApi.setCookiePath",B.ca,void 0);B.$=function(a){H("boolean"==typeof a,"Invalid value for allowHash: "+typeof a)&&(B.f=a)};w("cxApi.setAllowHash",B.$,void 0);B.ba=function(a){H("number"==typeof a,"Invalid cookieExpirationSeconds: "+a)&&(B.d=a)};
w("cxApi.setCookieExpirationSeconds",B.ba,void 0);B.Y=function(a){H("string"==typeof a||"undefined"==typeof a,"Invalid experiment id: "+a);a=(new G(B.a,B.e,B.f,B.d,a)).H();return"number"===typeof a?a:a[0]};w("cxApi.chooseVariation",B.Y,void 0);B.Z=function(a){H("string"==typeof a||"undefined"==typeof a,"Invalid experiment id: "+a);a=(new G(B.a,B.e,B.f,B.d,a)).r();return"number"===typeof a?a:a[0]};w("cxApi.getChosenVariation",B.Z,void 0);})();
