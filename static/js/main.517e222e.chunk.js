(this["webpackJsonpmichaelblack117.github.io"]=this["webpackJsonpmichaelblack117.github.io"]||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=a(57),i=a(26),s=a(73),u=a(63),h=a(74),m=a.n(h),p=a(75),f=a(13),d=a(10),b=a(15),E=a(16),v=a(21),g=a(17),O=a(158),y=a(83),j={palette:{primary:{main:"#996bf5"},secondary:{main:"#ee0290",contrastText:"#ffcc00"},contrastThreshold:3,tonalOffset:.2}},k=Object(y.a)({palette:{type:"light",primary:j.palette.primary,secondary:j.palette.secondary,contrastThreshold:j.palette.contrastThreshold,tonalOffset:j.palette.tonalOffset,text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:"#fff",default:"#fafafa"},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpaciy:.12}}}),w=Object(y.a)({palette:{type:"dark",primary:j.palette.primary,secondary:j.palette.secondary,contrastThreshold:j.palette.contrastThreshold,tonalOffset:j.palette.tonalOffset,text:{primary:"#fff",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#424242",default:"#303030"},action:{active:"#fff",hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpaciy:.24}}});var x=a(159),T=a(81),C=a(37),_=a(146),P=a(147),S=a(165),A=a(148),I=a(149),L=a(84),M=a(164),D=a(79),N=a.n(D),H=a(78),B=a.n(H),F=a(76),J=a.n(F),U=a(77),V=a.n(U),G=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).handlePortfolioClick=function(e){a.setState({portfolioAnchorEl:e.currentTarget})},a.handlePortfolioClose=function(){a.setState({portfolioAnchorEl:null})},a.state={portfolioAnchorEl:null},a.handlePortfolioClick=a.handlePortfolioClick.bind(Object(v.a)(a)),a.handlePortfolioClose=a.handlePortfolioClose.bind(Object(v.a)(a)),a.navigateTo=a.navigateTo.bind(Object(v.a)(a)),a.renderThemeIcon=a.renderThemeIcon.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"navigateTo",value:function(e){this.handlePortfolioClose(),window.location.href=e.target.id}},{key:"renderThemeIcon",value:function(){return"light"===this.props.theme.palette.type?r.a.createElement(J.a,null):r.a.createElement(V.a,null)}},{key:"render",value:function(){return r.a.createElement(_.a,{position:"static"},r.a.createElement(P.a,null,r.a.createElement(A.a,{href:"/"},r.a.createElement(B.a,null)),r.a.createElement(I.a,{id:"/home",className:"pointer",onClick:this.navigateTo,variant:"h6"},"Home"),r.a.createElement(A.a,{"aria-controls":"portfolio-menu","aria-haspopup":"true",onClick:this.handlePortfolioClick},r.a.createElement(N.a,null)),r.a.createElement(I.a,{className:"pointer",variant:"h6",onClick:this.handlePortfolioClick},"Portfolio"),r.a.createElement(L.a,{id:"portfolio-menu",anchorEl:this.state.portfolioAnchorEl,keepMounted:!0,open:Boolean(this.state.portfolioAnchorEl),onClose:this.handlePortfolioClose},r.a.createElement(M.a,{id:"/#/portfolio/picolabs",onClick:this.navigateTo},"Picolabs"),r.a.createElement(M.a,{id:"/#/portfolio/streetcred",onClick:this.navigateTo},"Streetcred")),r.a.createElement(A.a,{onClick:this.props.toggleTheme},this.renderThemeIcon()),r.a.createElement(I.a,{className:"pointer",variant:"h6",onClick:this.props.toggleTheme},"light"===this.props.theme.palette.type?"Dark Mode":"Light Mode")))}}]),t}(r.a.Component),W=Object(S.a)(G),X=a(150),R=a(151),z=a(152),Y=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(X.a,null,r.a.createElement(R.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{height:"80vh",textAlign:"center"}},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement("h1",null,"Hello, I'm ",r.a.createElement("span",{style:{color:"#996bf5"}},"Michael Black"),"."),r.a.createElement("h2",null,"I'm a full-stack web developer"),r.a.createElement(z.a,{variant:"outlined",color:"primary",href:"/#/portfolio"},"View My Work"))))}}]),t}(r.a.Component),Z=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(X.a,null,r.a.createElement(R.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{height:"50vh",textAlign:"center"}},r.a.createElement(R.a,{container:!0,item:!0,xs:12},r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement("h1",null,"Pico Labs"),r.a.createElement(z.a,{variant:"outlined",color:"primary",href:"/#/portfolio/picolabs"},"View")),r.a.createElement(R.a,{item:!0,xs:!0},r.a.createElement("h1",null,"Streetcred"),r.a.createElement(z.a,{variant:"outlined",color:"primary",href:"/#/portfolio/streetcred"},"View")))))}}]),t}(r.a.Component),$=a(153),q=a(155),K=a(154),Q=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(X.a,{style:{marginTop:"1rem"}},r.a.createElement("h2",{style:{textAlign:"center"}},"Projects"),r.a.createElement(R.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(R.a,{item:!0,xs:4},r.a.createElement($.a,null,r.a.createElement(K.a,null,r.a.createElement("h1",null,"Wovyn")),r.a.createElement(q.a,null,r.a.createElement(z.a,{size:"small",href:"/#/portfolio/picolabs/wovyn"},"Go To Project"))))))}}]),t}(r.a.Component),ee=a(44),te=a(2),ae=a(163),ne=a(157),re=a(161),ce=a(8),le=a.n(ce),oe=a(18),ie=a(80),se={picolabs:{protocol:"https",host:"192.168.11.36:8080"}},ue=Object(ie.a)({MAX_ATTACHMENT_SIZE:5e6},se),he=function(e,t){if(!t)return e;for(var a=e+"?",n=0,r=Object.keys(t);n<r.length;n++){var c=r[n];a+="&".concat(c,"=").concat(t[c])}return a},me=function(e,t,a,n,r){var c="".concat(ue.picolabs.protocol,"://").concat(ue.picolabs.host,"/sky/event/").concat(e,"/").concat(t,"/").concat(a,"/").concat(n);return he(c,r)},pe=function(e,t,a,n){var r="".concat(ue.picolabs.protocol,"://").concat(ue.picolabs.host,"/sky/cloud/").concat(e,"/").concat(t,"/").concat(a);return he(r,n)},fe=function(){var e=Object(oe.a)(le.a.mark((function e(t,a,n,r,c){var l;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(me(t,a,n,r,c));case 2:return l=e.sent,e.abrupt("return",l.json());case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,r,c){return e.apply(this,arguments)}}(),de=function(){var e=Object(oe.a)(le.a.mark((function e(t,a,n,r){var c;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(pe(t,a,n,r));case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),be="com.blacklite.krl.temperature_store",Ee="com.blacklite.sensor_profile",ve="45f5jJCFrrNGTpJsMUXJS2",ge=function(){var e=Object(oe.a)(le.a.mark((function e(){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(ve,be,"temperatures",null);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(oe.a)(le.a.mark((function e(){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=de(ve,be,"threshold_violations",null),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=Object(oe.a)(le.a.mark((function e(){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=de(ve,Ee,"get_profile",null),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(oe.a)(le.a.mark((function e(t){var a;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=fe(ve,"gh-pages","sensor","profile_updated",t),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={temperatures:{}},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(oe.a)(le.a.mark((function e(){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge();case 2:t=e.sent,console.log("fetch temperatures",t),this.setState({temperatures:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderTemperatureList",value:function(){for(var e=this.state.temperatures,t=[],a=0,n=Object.keys(e);a<n.length;a++){var c=n[a],l=new Date(c);t.push(r.a.createElement(R.a,{item:!0,xs:3,style:{margin:"1rem"},key:c},r.a.createElement($.a,null,r.a.createElement(K.a,null,r.a.createElement("h3",null,l.toDateString()),r.a.createElement("h5",null,l.toLocaleTimeString()),r.a.createElement("h3",null,e[c],"\xb0F")))))}return t.reverse()}},{key:"render",value:function(){return r.a.createElement(X.a,null,r.a.createElement(R.a,{container:!0,justify:"center",alignItems:"center"},this.renderTemperatureList()))}}]),t}(r.a.Component),we=a(156),xe=a(162),Te=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).onUpdateProfile=Object(oe.a)(le.a.mark((function e(){var t,n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.updateProfile,e.next=3,je(t);case 3:return e.next=5,ye();case 5:n=e.sent,a.setState({profile:n});case 7:case"end":return e.stop()}}),e)}))),a.handleChange=function(e){var t=a.state.updateProfile;t[e.target.id]=e.target.value,a.setState({updateProfile:t})},a.state={profile:{name:"First Sensor",location:"Timbuktu",contact:"17195390627",threshold:90},updateProfile:{new_sensor_name:"First Sensor",new_location:"Timbuktu",new_send_to:"17195390627",new_threshold:90}},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(oe.a)(le.a.mark((function e(){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye();case 2:t=e.sent,console.log("fetch profile",t),this.setState({profile:t,updateProfile:{new_sensor_name:t.name,new_location:t.location,new_send_to:t.contact,new_threshold:t.threshold}});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(X.a,null,r.a.createElement(R.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(R.a,{item:!0,xs:8,style:{margin:"1rem"}},r.a.createElement($.a,null,r.a.createElement(K.a,null,r.a.createElement("h1",null,"Profile"),r.a.createElement("h2",null,this.state.profile.name),r.a.createElement("p",null,"Location: ",this.state.profile.location),r.a.createElement("p",null,"Contact: ",this.state.profile.contact),r.a.createElement("p",null,"Threshold: ",this.state.profile.threshold)))),r.a.createElement(R.a,{item:!0,xs:8,style:{margin:"1rem"}},r.a.createElement($.a,null,r.a.createElement(K.a,null,r.a.createElement("h1",null,"New Profile"),r.a.createElement(we.a,null,r.a.createElement(xe.a,{id:"new_sensor_name",label:"Name",value:this.state.updateProfile.new_sensor_name,onChange:this.handleChange}),r.a.createElement(xe.a,{id:"new_location",label:"Location",value:this.state.updateProfile.new_location,onChange:this.handleChange}),r.a.createElement(xe.a,{id:"new_send_to",label:"Contact",value:this.state.updateProfile.new_send_to,onChange:this.handleChange}),r.a.createElement(xe.a,{id:"new_threshold",label:"Threshold",value:this.state.updateProfile.new_threshold,onChange:this.handleChange}),r.a.createElement(z.a,{color:"secondary",onClick:this.onUpdateProfile},"Update")))))))}}]),t}(r.a.Component),Ce=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={temperatures:{}},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(oe.a)(le.a.mark((function e(){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge();case 2:t=e.sent,this.setState({temperatures:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderTemperatureList",value:function(){for(var e=this.state.temperatures,t=[],a=0,n=Object.keys(e);a<n.length;a++){var c=n[a],l=new Date(c);t.push(r.a.createElement(R.a,{item:!0,xs:8,style:{margin:"1rem"},key:c},r.a.createElement($.a,{raised:!0},r.a.createElement(K.a,{style:{textAlign:"center"}},r.a.createElement("h1",null,l.toDateString()),r.a.createElement("h2",null,l.toLocaleTimeString()),r.a.createElement("h1",null,e[c],"\xb0F")))))}return t.reverse()[0]}},{key:"render",value:function(){return r.a.createElement(X.a,null,r.a.createElement(R.a,{container:!0,justify:"center",alignItems:"center"},this.renderTemperatureList()))}}]),t}(r.a.Component),_e=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={temperatures:{}},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(oe.a)(le.a.mark((function e(){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe();case 2:t=e.sent,this.setState({temperatures:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderTemperatureList",value:function(){for(var e=this.state.temperatures,t=[],a=0,n=Object.keys(e);a<n.length;a++){var c=n[a],l=new Date(c);t.push(r.a.createElement(R.a,{item:!0,xs:3,style:{margin:"1rem"},key:c},r.a.createElement($.a,null,r.a.createElement(K.a,null,r.a.createElement("h3",null,l.toDateString()),r.a.createElement("h5",null,l.toLocaleTimeString()),r.a.createElement("h3",null,e[c],"\xb0F")))))}return t.reverse()}},{key:"render",value:function(){return r.a.createElement(X.a,null,r.a.createElement(R.a,{container:!0,justify:"center",alignItems:"center"},this.renderTemperatureList()))}}]),t}(r.a.Component);function Pe(e){var t=e.children,a=e.value,n=e.index,c=Object(te.a)(e,["children","value","index"]);return r.a.createElement(I.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},c),a===n&&r.a.createElement(re.a,{p:3},t))}function Se(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function Ae(){var e=r.a.useState(0),t=Object(ee.a)(e,2),a=t[0],n=t[1];return r.a.createElement(X.a,null,r.a.createElement("br",null),r.a.createElement("h1",{style:{textAlign:"center"}},"Lab 5 SPA"),r.a.createElement(ae.a,{centered:!0,value:a,onChange:function(e,t){n(t)},"aria-label":"simple tabs"},r.a.createElement(ne.a,Object.assign({label:"Current"},Se(0))),r.a.createElement(ne.a,Object.assign({label:"Recent"},Se(1))),r.a.createElement(ne.a,Object.assign({label:"Violations"},Se(2))),r.a.createElement(ne.a,Object.assign({label:"Profile"},Se(3)))),r.a.createElement(Pe,{value:a,index:0},r.a.createElement(Ce,null)),r.a.createElement(Pe,{value:a,index:1},r.a.createElement(ke,null)),r.a.createElement(Pe,{value:a,index:2},r.a.createElement(_e,null)),r.a.createElement(Pe,{value:a,index:3},r.a.createElement(Te,null)))}var Ie=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(X.a,null,r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:!0},"Nothing Yet")))}}]),t}(r.a.Component),Le=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).toggleTheme=a.toggleTheme.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"toggleTheme",value:function(){"light"===this.props.theme?this.props.changeTheme("dark"):this.props.changeTheme("light")}},{key:"render",value:function(){return r.a.createElement(O.a,{theme:"light"===this.props.theme?k:w},r.a.createElement(x.a,null,r.a.createElement(W,{toggleTheme:this.toggleTheme}),r.a.createElement(T.a,{basename:"/"},r.a.createElement(C.a,{exact:!0,path:"/",component:Y}),r.a.createElement(C.a,{exact:!0,path:"/portfolio",component:Z}),r.a.createElement(C.a,{exact:!0,path:"/portfolio/picolabs",component:Q},r.a.createElement(Q,null)),r.a.createElement(C.a,{exact:!0,path:"/portfolio/picolabs/wovyn",component:Ae}),r.a.createElement(C.a,{exact:!0,path:"/portfolio/streetcred",component:Ie}))))}}]),t}(r.a.Component),Me=Object(o.b)((function(e){return{theme:e.theme}}),(function(e){return{changeTheme:function(t){e(function(e){return{type:"THEME_CHANGE",theme:e}}(t))}}}))(Le);var De={theme:"light"},Ne=Object(i.c)({theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"THEME_CHANGE":return t.theme;default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var He={key:"root",storage:m.a},Be=Object(u.a)(He,Ne),Fe=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d)(Object(i.a)(s.a)),Je=Object(i.e)(Be,De,Fe),Ue=Object(u.b)(Je);l.a.render(r.a.createElement(o.a,{store:Je},r.a.createElement(p.a,{loading:null,persistor:Ue},r.a.createElement(Me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(108)}},[[94,1,2]]]);
//# sourceMappingURL=main.517e222e.chunk.js.map