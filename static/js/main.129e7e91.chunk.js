(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2FQlj",ImageGalleryItem:"ImageGallery_ImageGalleryItem__22QF3",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__k9MSO"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1hFBW",Modal:"Modal_Modal__Qjd9Q"}},28:function(e,t,a){e.exports={Button:"Button_Button__2vL5z"}},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1w81T",SearchForm:"Searchbar_SearchForm__1EoGO",SearchFormButton:"Searchbar_SearchFormButton__3D2j6",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3RXlp",SearchFormInput:"Searchbar_SearchFormInput__kdXj-"}},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(5),o=a.n(c),s=a(4),l=a(12),i=(a(33),a(6)),u=a.n(i),m=a(1);function h(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(s.a)(a,2),c=n[0],o=n[1];return Object(m.jsx)("header",{className:u.a.Searchbar,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):l.b.error("Error! \u0415nter something")},className:u.a.SearchForm,children:[Object(m.jsx)("button",{type:"submit",className:u.a.SearchFormButton,children:Object(m.jsx)("span",{className:u.a.SearchFormButtonLabel,children:"Search"})}),Object(m.jsx)("input",{className:u.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var j=a(16),b=a(25),d=a.n(b),O=a(14),g=a.n(O),p=a(26),f=a(27),v=a.n(f).a.create({baseURL:"https://pixabay.com/api/",params:{key:"21917533-94fc46511cdba7fd05c8e408d",image_type:"photo",orientation:"horizontal"}});function S(){return S=Object(p.a)(g.a.mark((function e(){var t,a,r,n,c,o,s=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"",a=s.length>1&&void 0!==s[1]?s[1]:1,r=s.length>2&&void 0!==s[2]?s[2]:12,n={q:t,page:a,per_page:r},e.prev=4,e.next=7,v("",{params:n});case 7:return c=e.sent,o=c.data,e.abrupt("return",o);case 12:e.prev=12,e.t0=e.catch(4),console.error("No results found for ".concat(t,"'"));case 15:case"end":return e.stop()}}),e,null,[[4,12]])}))),S.apply(this,arguments)}var _={fetchCard:function(){return S.apply(this,arguments)}},x=_,y=a(28),I=a.n(y);function w(e){var t=e.onClick;return Object(m.jsx)("button",{type:"button",className:I.a.Button,onClick:t,children:"Load more"})}var F=a(15),L=a.n(F),k=document.querySelector("#modal-root");function C(e){var t=e.onClose,a=e.largeImageURL,r=e.alt;return Object(c.createPortal)(Object(m.jsx)("div",{className:L.a.Overlay,onClick:t,children:Object(m.jsx)("div",{className:L.a.Modal,children:Object(m.jsx)("img",{src:a,alt:r})})}),k)}var B=a(11),G=a.n(B),N=function(e){var t=e.webformatURL,a=e.tags,r=e.largeImageURL,n=e.onOpenModal;return Object(m.jsx)("li",{onClick:function(){n(r,a)},children:Object(m.jsx)("img",{src:t,alt:a,className:G.a.ImageGalleryItemImage})})};a(74);function M(e){var t=e.searchQuery,a=Object(r.useState)([]),n=Object(s.a)(a,2),c=n[0],o=n[1],l=Object(r.useState)(null),i=Object(s.a)(l,2),u=(i[0],i[1]),h=Object(r.useState)("idle"),b=Object(s.a)(h,2),O=b[0],g=b[1],p=Object(r.useState)(1),f=Object(s.a)(p,2),v=f[0],S=f[1],_=Object(r.useState)(""),y=Object(s.a)(_,2),I=y[0],F=y[1],L=Object(r.useState)(""),k=Object(s.a)(L,2),B=k[0],M=k[1];Object(r.useEffect)((function(){t&&(g("pending"),1===v&&x.fetchCard(t,v).then((function(e){0===e.total?(u("Not found ".concat(t)),g("rejected")):(o(e.hits),g("resolved"))})).catch((function(e){u(e),g("rejected")})),1!==v&&x.fetchCard(t,v).then((function(e){o((function(t){return[].concat(Object(j.a)(t),Object(j.a)(e.hits))})),g("resolved")})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){u(e),g("rejected")})))}),[t,v]);var R=function(e,t){M(e),F(t),window.addEventListener("keydown",U)},U=function(e){"Escape"===e.code&&E()},E=function(){M(""),F(""),window.removeEventListener("keydown",U)};return Object(m.jsxs)(m.Fragment,{children:["pending"===O&&Object(m.jsx)("div",{children:Object(m.jsx)(d.a,{type:"MutatingDots",color:"#00BFFF",height:80,width:80,timeout:3e3})}),"rejected"===O&&Object(m.jsx)("h1",{children:"Oops! Try again."}),"resolved"===O&&Object(m.jsxs)("ul",{className:G.a.ImageGallery,children:[c.map((function(e){return Object(m.jsx)(N,{alt:e.tags,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,onOpenModal:R},e.id)})),c.length>0&&Object(m.jsx)(w,{onClick:function(){S((function(e){return e+1}))}}),B&&Object(m.jsx)(C,{largeImageURL:B,alt:I,onClose:E})]})]})}function R(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(h,{onSubmit:n}),Object(m.jsx)(M,{searchQuery:a}),Object(m.jsx)(l.a,{autoClose:3e3})]})}a(75);o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.129e7e91.chunk.js.map