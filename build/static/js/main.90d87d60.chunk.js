(this.webpackJsonpfriends=this.webpackJsonpfriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),i=n.n(s),o=(n(13),n(5)),a=n(6),h=n(8),d=n(7),l=(n(3),n(0)),b=function(e){var t=e.id,n=e.details;return Object(l.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(t,"?100x100"),alt:"Robot"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:n.name}),Object(l.jsx)("p",{children:n.email})]})]})},j=function(e){var t=e.robots,n=t.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)(b,{id:e.id,details:e},e.id)})}));return 0===t.length?Object(l.jsx)("h1",{children:"loading..."}):Object(l.jsx)("div",{children:n})},u=function(e){var t=e.searchChange;return Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search friends",onChange:t})})},f=(n(15),function(e){return Object(l.jsx)("div",{style:{overflow:"scroll",border:"5px solid blue",height:"500px"},children:e.children})}),g=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{children:"Robofriends"}),Object(l.jsx)(u,{searchChange:this.onSearchChange}),Object(l.jsx)(f,{children:Object(l.jsx)(j,{robots:r},"1")})]})}}]),n}(r.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.90d87d60.chunk.js.map