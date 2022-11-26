(()=>{"use strict";var n,A={756:(n,A,t)=>{t.d(A,{Z:()=>C});var i=t(537),e=t.n(i),o=t(645),a=t.n(o),r=t(667),p=t.n(r),d=new URL(t(642),t.b),E=a()(e()),l=p()(d);E.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  background-color: #0f1113;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  font-size: 12px;\n}\n\n/* \n    Hero\n*/\n\n.hero {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url("+l+");\n  width: 100%;\n  min-height: 600px;\n  background-size: 100% 100%;\n  background-position: center;\n}\n\n.hero__inner {\n  padding-top: 250px;\n  text-align: center;\n}\n\n.hero__title {\n  color: #fff;\n  font-weight: 500;\n  font-size: 40px;\n}\n\n.hero__title span {\n  color: #ffc23c;\n}\n\n.hero__tagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 20px;\n  font-weight: 300;\n}\n\n/* \n    Navbar\n*/\n\n.nav {\n  background-color: #0000004f;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-right: 5%;\n  padding-left: 5%;\n}\n\n.nav__title {\n  color: white;\n  font-size: 25px;\n  letter-spacing: 1px;\n  cursor: pointer;\n}\n\n.nav__title span {\n  color: #ffc23c;\n}\n\n.nav__list {\n  list-style: none;\n}\n\n.nav__item {\n  display: inline-block;\n  line-height: 24px;\n  padding: 10px 25px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  min-width: 44px;\n  min-height: 44px;\n  padding: 13px 16px;\n}\n\n.nav a:hover {\n  text-decoration: underline;\n  color: rgb(222, 145, 20);\n}\n\n/* \n   hamburger\n*/\n\n.hamburger {\n  display: none;\n}\n\n.bar {\n  display: block;\n  width: 25px;\n  height: 3px;\n  margin: 5px auto;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  background-color: #101010;\n}\n\n/*\n * main\n */\n\nmain {\n  color: white;\n  width: 100%;\n  margin: 0 auto;\n}\n\n/*\n * content\n */\n\n.content {\n  padding: 32px;\n}\n\n/*\n * restaurant\n */\n\n.restaurant {\n  width: 100%;\n}\n\n.restaurant__label {\n  color: white;\n  font-size: 40px;\n  text-align: center;\n  font-weight: 500;\n  padding: 20px;\n  margin-bottom: 100px;\n}\n\n/*\n * post\n */\n\n.posts {\n  margin: 32px auto auto;\n  text-align: left;\n}\n\n/*\n * post item\n */\n\n.post-item {\n  margin-bottom: 16px;\n  background-color: #5d5818;\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.post-item__header {\n  position: relative;\n}\n\n.post-item__thumbnail {\n  width: 100%;\n  height: 200px;\n}\n\n.post-item__rating {\n  position: absolute;\n  padding: 8px;\n  right: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.post-item__content {\n  padding: 10px 10px 20px 15px;\n}\n\n.post-item__title {\n  padding-right: 10px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  color: white;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.post-item__content a:hover {\n  color: rgb(222, 145, 20);\n}\n\n.post-item__city {\n  color: #d1d1ca;\n}\n\n.post-item__description {\n  padding: 16px 16px;\n}\n\n/*\n * detail Restaurant\n */\n\n.detail {\n  font-size: 13px;\n  width: 100%;\n  margin: 32px auto auto;\n  justify-content: center;\n}\n\n.detail__title {\n  margin-top: 20px;\n  color: white;\n  font-size: 30px;\n  text-align: center;\n  padding: 20px;\n  margin-bottom: 50px;\n  width: 500;\n}\n\n.detail__image {\n  width: 100%;\n  max-width: 700px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  height: auto;\n}\n\n.detail__header-info {\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n}\n\n.detail__item {\n  padding: 20px;\n}\n\n.detail__info {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.detail__categories {\n  display: flex;\n}\n\n.detail-drink {\n  padding-left: 20px;\n}\n\n.title-review {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.review-name {\n  font-weight: bold;\n}\n.review-name img {\n  width: 44px;\n}\n\n.review-body {\n  margin-bottom: 20px;\n}\n\n.review-date {\n  font-size: 12px;\n  color: #8c8686fe;\n}\n\n/*\n * footer\n */\n.footer {\n  color: rgb(170, 166, 166);\n  width: 100%;\n  position: absolute;\n  border-top: 1px solid;\n  margin-top: 50px;\n  padding: 30px;\n  text-align: center;\n  background-color: #101010;\n  font-size: 15px;\n}\n\n/*\n * skip to content\n */\n.skip-link {\n  position: absolute;\n  top: -60px;\n  left: 0;\n  background-color: #5d5818;\n  color: white;\n  padding: 20px;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/*\n  Back\n*/\n\n.back {\n  color: white;\n  padding: 20px;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.back:hover {\n  color: rgb(222, 145, 20);\n}\n\n.back-button {\n  text-align: right;\n}\n\n.empty {\n  padding-top: 20px;\n}\n/*\n  Loader\n*/\n.loader {\n  border: 16px solid #5d5818; /* Light grey */\n  border-top: 16px solid #d7d7cf; /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 3s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/*\n * responsive\n */\n\n@media screen and (max-width: 770px) {\n  main {\n    max-width: 600px;\n  }\n\n  .nav__list {\n    display: flex;\n    position: absolute;\n    left: -100%;\n    top: 6rem;\n    flex-direction: column;\n    background-color: rgb(26, 24, 24);\n    width: 100%;\n    text-align: center;\n    transition: 0.3s;\n    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);\n    width: 500;\n  }\n\n  .nav__list.active {\n    left: 0;\n  }\n\n  .nav__item {\n    border-bottom: 1px solid;\n    border-color: #ffc23c;\n  }\n\n  .nav a {\n    display: block;\n    padding-top: 10px;\n    min-width: 44px;\n    min-height: 44px;\n  }\n\n  .hamburger {\n    display: block;\n    cursor: pointer;\n  }\n  .bar {\n    background-color: white;\n  }\n  .hamburger.active .bar:nth-child(2) {\n    opacity: 0;\n  }\n\n  .hamburger.active .bar:nth-child(1) {\n    transform: translateY(8px) rotate(45deg);\n  }\n\n  .hamburger.active .bar:nth-child(3) {\n    transform: translateY(-8px) rotate(-45deg);\n  }\n\n  .hero__title {\n    font-size: 25px;\n  }\n\n  .hero__tagline {\n    font-size: 15px;\n  }\n\n  .restaurant__label {\n    font-size: 25px;\n  }\n\n  .detail__header-info {\n    font-size: 10px;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  main {\n    max-width: 900px;\n  }\n\n  .content {\n    padding-left: 15%;\n    padding-right: 15%;\n  }\n  .posts {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 20px;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  main {\n    max-width: 1200px;\n  }\n\n  .hero {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url("+l+");\n    width: 100%;\n    min-height: 1000px;\n  }\n  .content {\n    padding-left: 15%;\n    padding-right: 15%;\n  }\n\n  .posts {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 20px;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  main {\n    max-width: 1500px;\n  }\n\n  .content {\n    padding-left: 15%;\n    padding-right: 15%;\n  }\n  .posts {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-gap: 20px;\n  }\n}\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  background-color: #0f1113;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  font-size: 12px;\n}\n\n/* \n    Hero\n*/\n\n.hero {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(../public/images/heros/hero-image-large.jpg);\n  width: 100%;\n  min-height: 600px;\n  background-size: 100% 100%;\n  background-position: center;\n}\n\n.hero__inner {\n  padding-top: 250px;\n  text-align: center;\n}\n\n.hero__title {\n  color: #fff;\n  font-weight: 500;\n  font-size: 40px;\n}\n\n.hero__title span {\n  color: #ffc23c;\n}\n\n.hero__tagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 20px;\n  font-weight: 300;\n}\n\n/* \n    Navbar\n*/\n\n.nav {\n  background-color: #0000004f;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-right: 5%;\n  padding-left: 5%;\n}\n\n.nav__title {\n  color: white;\n  font-size: 25px;\n  letter-spacing: 1px;\n  cursor: pointer;\n}\n\n.nav__title span {\n  color: #ffc23c;\n}\n\n.nav__list {\n  list-style: none;\n}\n\n.nav__item {\n  display: inline-block;\n  line-height: 24px;\n  padding: 10px 25px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  min-width: 44px;\n  min-height: 44px;\n  padding: 13px 16px;\n}\n\n.nav a:hover {\n  text-decoration: underline;\n  color: rgb(222, 145, 20);\n}\n\n/* \n   hamburger\n*/\n\n.hamburger {\n  display: none;\n}\n\n.bar {\n  display: block;\n  width: 25px;\n  height: 3px;\n  margin: 5px auto;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  background-color: #101010;\n}\n\n/*\n * main\n */\n\nmain {\n  color: white;\n  width: 100%;\n  margin: 0 auto;\n}\n\n/*\n * content\n */\n\n.content {\n  padding: 32px;\n}\n\n/*\n * restaurant\n */\n\n.restaurant {\n  width: 100%;\n}\n\n.restaurant__label {\n  color: white;\n  font-size: 40px;\n  text-align: center;\n  font-weight: 500;\n  padding: 20px;\n  margin-bottom: 100px;\n}\n\n/*\n * post\n */\n\n.posts {\n  margin: 32px auto auto;\n  text-align: left;\n}\n\n/*\n * post item\n */\n\n.post-item {\n  margin-bottom: 16px;\n  background-color: #5d5818;\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.post-item__header {\n  position: relative;\n}\n\n.post-item__thumbnail {\n  width: 100%;\n  height: 200px;\n}\n\n.post-item__rating {\n  position: absolute;\n  padding: 8px;\n  right: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.post-item__content {\n  padding: 10px 10px 20px 15px;\n}\n\n.post-item__title {\n  padding-right: 10px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  color: white;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.post-item__content a:hover {\n  color: rgb(222, 145, 20);\n}\n\n.post-item__city {\n  color: #d1d1ca;\n}\n\n.post-item__description {\n  padding: 16px 16px;\n}\n\n/*\n * detail Restaurant\n */\n\n.detail {\n  font-size: 13px;\n  width: 100%;\n  margin: 32px auto auto;\n  justify-content: center;\n}\n\n.detail__title {\n  margin-top: 20px;\n  color: white;\n  font-size: 30px;\n  text-align: center;\n  padding: 20px;\n  margin-bottom: 50px;\n  width: 500;\n}\n\n.detail__image {\n  width: 100%;\n  max-width: 700px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  height: auto;\n}\n\n.detail__header-info {\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n}\n\n.detail__item {\n  padding: 20px;\n}\n\n.detail__info {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.detail__categories {\n  display: flex;\n}\n\n.detail-drink {\n  padding-left: 20px;\n}\n\n.title-review {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.review-name {\n  font-weight: bold;\n}\n.review-name img {\n  width: 44px;\n}\n\n.review-body {\n  margin-bottom: 20px;\n}\n\n.review-date {\n  font-size: 12px;\n  color: #8c8686fe;\n}\n\n/*\n * footer\n */\n.footer {\n  color: rgb(170, 166, 166);\n  width: 100%;\n  position: absolute;\n  border-top: 1px solid;\n  margin-top: 50px;\n  padding: 30px;\n  text-align: center;\n  background-color: #101010;\n  font-size: 15px;\n}\n\n/*\n * skip to content\n */\n.skip-link {\n  position: absolute;\n  top: -60px;\n  left: 0;\n  background-color: #5d5818;\n  color: white;\n  padding: 20px;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/*\n  Back\n*/\n\n.back {\n  color: white;\n  padding: 20px;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.back:hover {\n  color: rgb(222, 145, 20);\n}\n\n.back-button {\n  text-align: right;\n}\n\n.empty {\n  padding-top: 20px;\n}\n/*\n  Loader\n*/\n.loader {\n  border: 16px solid #5d5818; /* Light grey */\n  border-top: 16px solid #d7d7cf; /* Blue */\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 3s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/*\n * responsive\n */\n\n@media screen and (max-width: 770px) {\n  main {\n    max-width: 600px;\n  }\n\n  .nav__list {\n    display: flex;\n    position: absolute;\n    left: -100%;\n    top: 6rem;\n    flex-direction: column;\n    background-color: rgb(26, 24, 24);\n    width: 100%;\n    text-align: center;\n    transition: 0.3s;\n    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);\n    width: 500;\n  }\n\n  .nav__list.active {\n    left: 0;\n  }\n\n  .nav__item {\n    border-bottom: 1px solid;\n    border-color: #ffc23c;\n  }\n\n  .nav a {\n    display: block;\n    padding-top: 10px;\n    min-width: 44px;\n    min-height: 44px;\n  }\n\n  .hamburger {\n    display: block;\n    cursor: pointer;\n  }\n  .bar {\n    background-color: white;\n  }\n  .hamburger.active .bar:nth-child(2) {\n    opacity: 0;\n  }\n\n  .hamburger.active .bar:nth-child(1) {\n    transform: translateY(8px) rotate(45deg);\n  }\n\n  .hamburger.active .bar:nth-child(3) {\n    transform: translateY(-8px) rotate(-45deg);\n  }\n\n  .hero__title {\n    font-size: 25px;\n  }\n\n  .hero__tagline {\n    font-size: 15px;\n  }\n\n  .restaurant__label {\n    font-size: 25px;\n  }\n\n  .detail__header-info {\n    font-size: 10px;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  main {\n    max-width: 900px;\n  }\n\n  .content {\n    padding-left: 15%;\n    padding-right: 15%;\n  }\n  .posts {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 20px;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  main {\n    max-width: 1200px;\n  }\n\n  .hero {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(../public/images/heros/hero-image-large.jpg);\n    width: 100%;\n    min-height: 1000px;\n  }\n  .content {\n    padding-left: 15%;\n    padding-right: 15%;\n  }\n\n  .posts {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 20px;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  main {\n    max-width: 1500px;\n  }\n\n  .content {\n    padding-left: 15%;\n    padding-right: 15%;\n  }\n  .posts {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-gap: 20px;\n  }\n}\n"],sourceRoot:""}]);const C=E},46:(n,A,t)=>{var i=t(379),e=t.n(i),o=t(795),a=t.n(o),r=t(569),p=t.n(r),d=t(565),E=t.n(d),l=t(216),C=t.n(l),g=t(589),B=t.n(g),s=t(756),c={};c.styleTagTransform=B(),c.setAttributes=E(),c.insert=p().bind(null,"head"),c.domAPI=a(),c.insertStyleElement=C(),e()(s.Z,c),s.Z&&s.Z.locals&&s.Z.locals}},t={};function i(n){var e=t[n];if(void 0!==e)return e.exports;var o=t[n]={id:n,exports:{}};return A[n](o,o.exports,i),o.exports}i.m=A,n=[],i.O=(A,t,e,o)=>{if(!t){var a=1/0;for(E=0;E<n.length;E++){for(var[t,e,o]=n[E],r=!0,p=0;p<t.length;p++)(!1&o||a>=o)&&Object.keys(i.O).every((n=>i.O[n](t[p])))?t.splice(p--,1):(r=!1,o<a&&(a=o));if(r){n.splice(E--,1);var d=e();void 0!==d&&(A=d)}}return A}o=o||0;for(var E=n.length;E>0&&n[E-1][2]>o;E--)n[E]=n[E-1];n[E]=[t,e,o]},i.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return i.d(A,{a:A}),A},i.d=(n,A)=>{for(var t in A)i.o(A,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:A[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var A=i.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var t=A.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),(()=>{i.b=document.baseURI||self.location.href;var n={209:0};i.O.j=A=>0===n[A];var A=(A,t)=>{var e,o,[a,r,p]=t,d=0;if(a.some((A=>0!==n[A]))){for(e in r)i.o(r,e)&&(i.m[e]=r[e]);if(p)var E=p(i)}for(A&&A(t);d<a.length;d++)o=a[d],i.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return i.O(E)},t=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];t.forEach(A.bind(null,0)),t.push=A.bind(null,t.push.bind(t))})(),i.nc=void 0;var e=i.O(void 0,[666,582,193,337,268,924],(()=>i(253)));e=i.O(e)})();
//# sourceMappingURL=app~04e4ec69.bundle.js.map