(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9344],{3402:function(n,t,e){"use strict";e.d(t,{Z:function(){return l}});var r,i=e(2209),a=e(1288),o=e(6213),u=e(1123),s=(e(7294),e(5893)),c=a.ZP.div.withConfig({displayName:"Auth__AuthStyle",componentId:"sc-19qnjz1-0"})(["margin:auto;display:block;width:100%;max-width:35rem;a{font-weight:600;}& > h1{margin-bottom:","rem;margin-top:0;text-align:center;}& > p{margin-bottom:2rem;text-align:center;}form{width:100%;& > *:not(:last-child){margin-bottom:2rem;}}"],(function(n){return n.subTitle?"0.75":"2"})),l=a.ZP.div.withConfig({displayName:"Auth__Group",componentId:"sc-19qnjz1-1"})(["margin:2rem 0;display:flex;justify-content:space-between;align-items:center;"]),d=(0,a.ZP)(o.Zb).withConfig({displayName:"Auth__CardAuth",componentId:"sc-19qnjz1-2"})(["margin-bottom:0;height:calc(100vh - 5rem);"," ","{display:flex;}"],(0,u.pf)("sm")(r||(r=(0,i.Z)(["\n    height: 100vh;\n  "]))),o.eW);t.C=function(n){var t=n.subTitle,e=n.title,r=n.children;return(0,s.jsx)(d,{children:(0,s.jsx)(o.eW,{children:(0,s.jsxs)(c,{subTitle:t,children:[(0,s.jsx)("h1",{children:e}),t&&(0,s.jsx)("p",{children:t}),r]})})})}},8934:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return m}});var r=e(266),i=e(809),a=e.n(i),o=e(3666),u=e(8795),s=e(7294),c=e(3402),l=e(5025),d=e(1163),h=e(9104),f=e(3691),p=e(5893);function m(){var n=(0,s.useState)(""),t=n[0],e=n[1],i=(0,s.useState)(""),m=i[0],g=i[1],w=(0,d.useRouter)(),x=function(){var n=(0,r.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),(0,h.w)(btoa("".concat(t,":").concat(m)))?alert("Invalid credentials"):(r=f.es.encrypt("".concat(t,":").concat(m),"NOWnowNOWnowNOW").toString(),localStorage.setItem("credentials",r),w.push("/dashboard"));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,localStorage.getItem("credentials");case 2:t=n.sent,(0,h.w)(t)&&w.push("/dashboard");case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,s.useEffect)((function(){v()}),[]),(0,p.jsx)(l.Z,{title:"Login",children:(0,p.jsx)(c.C,{title:"Login",subTitle:"Xin ch\xe0o! \u0110\u0103ng nh\u1eadp b\u1eb1ng t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n",children:(0,p.jsxs)("form",{onSubmit:x,children:[(0,p.jsx)(u.B,{fullWidth:!0,children:(0,p.jsx)("input",{type:"text",name:"userName",placeholder:"T\xe0i kho\u1ea3n",required:!0,onChange:function(n){return e(n.target.value)}})}),(0,p.jsx)(u.B,{fullWidth:!0,children:(0,p.jsx)("input",{type:"password",name:"password",placeholder:"M\u1eadt kh\u1ea9u",required:!0,onChange:function(n){return g(n.target.value)}})}),(0,p.jsx)(c.Z,{}),(0,p.jsx)(o.zx,{status:"Success",type:"submit",shape:"SemiRound",fullWidth:!0,children:"Login"})]})})})}},9104:function(n,t,e){"use strict";e.d(t,{w:function(){return a}});var r=e(318),i=e(3691),a=function(n){try{if(!n)return!1;var t=i.es.decrypt(n,"NOWnowNOWnowNOW").toString(i.cE.Utf8),e=n?t.split(":"):[],a=(0,r.Z)(e,2),o=a[0],u=a[1];return!![{userName:"admin",password:"Root@DonkeyIsland"},{userName:"admin",password:"DonkeyIsland@123"}].find((function(n){return n.userName===o&&n.password===u}))}catch(s){return!1}}},4895:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return e(8934)}])}},function(n){n.O(0,[9774,8195,6874,1794,1316,5025,2888,179],(function(){return t=4895,n(n.s=t);var t}));var t=n.O();_N_E=t}]);