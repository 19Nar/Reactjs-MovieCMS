(this["webpackJsonpmovie-project-react"]=this["webpackJsonpmovie-project-react"]||[]).push([[0],{480:function(e,t,a){e.exports=a(958)},709:function(e,t,a){},953:function(e,t,a){},958:function(e,t,a){"use strict";a.r(t);a(291),a(303),a(304),a(305),a(306),a(307),a(308),a(309),a(310),a(311),a(312),a(313),a(314),a(315),a(316),a(481),a(482),a(483),a(484),a(485),a(486),a(487),a(488),a(489),a(320),a(490),a(491),a(175),a(492),a(493),a(494),a(495),a(496),a(497),a(498),a(499),a(500),a(501),a(502),a(503),a(504),a(505),a(506),a(508),a(510),a(511),a(329),a(177),a(512),a(513),a(514),a(515),a(516),a(517),a(518),a(519),a(520),a(521),a(522),a(523),a(524),a(525),a(526),a(527),a(334),a(528),a(529),a(530),a(531),a(532),a(533),a(534),a(535),a(536),a(538),a(539),a(541),a(542),a(543),a(544),a(545),a(546),a(547),a(548),a(549),a(550),a(551),a(552),a(553),a(554),a(555),a(556),a(557),a(558),a(559),a(241),a(561),a(562),a(563),a(564),a(565),a(567),a(568),a(569),a(570),a(571),a(572),a(573),a(574),a(575),a(576),a(577),a(346),a(578),a(579),a(243),a(580),a(581),a(582),a(583),a(185),a(584),a(585),a(586),a(587),a(588),a(589),a(590),a(591),a(592),a(593),a(594),a(595),a(596),a(597),a(598),a(599),a(600),a(601),a(602),a(603),a(604),a(605),a(606),a(607),a(608),a(609),a(611),a(612),a(613),a(614),a(615),a(616),a(617),a(618),a(619),a(620),a(621),a(622),a(623),a(624),a(625),a(626),a(627),a(628),a(629),a(630),a(631),a(632),a(633),a(634),a(635),a(636),a(637),a(638),a(639),a(640),a(641),a(642),a(643),a(248),a(644),a(645),a(646),a(647),a(648),a(649),a(650),a(354),a(355),a(356),a(357),a(358),a(359),a(360),a(361),a(362),a(363),a(364),a(365),a(366),a(367),a(368),a(369),a(370),a(653),a(654),a(655),a(656),a(657),a(658),a(659),a(660),a(661),a(662),a(663),a(664),a(665),a(666),a(667),a(668),a(670),a(671),a(672),a(673),a(674),a(675),a(676),a(677),a(678),a(679),a(680),a(372),a(374),a(375),a(376),a(377),a(378),a(379),a(380),a(381),a(382),a(383),a(384),a(385),a(386),a(387),a(388),a(389),a(390),a(681),a(682),a(683),a(685),a(391),a(392),a(393),a(686),a(687),a(688),a(689),a(690),a(691),a(692),a(693),a(395),a(694),a(695),a(696),a(698),a(397),a(699),a(398);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),o=(a(709),a(99)),i=a(116),s=a.n(i),m="http://134.122.50.178:5000/api/users",u="https://api.themoviedb.org/3/",d="844dba0bfd8f3a4f3799f6130ef9e335",p="http://image.tmdb.org/t/p/";function E(){return{type:"auth_user",payload:s.a.get("".concat(m,"/auth")).then((function(e){return e.data}))}}var h=a(64),g=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function l(l){var c=Object(h.c)((function(e){return e.user})),o=Object(h.b)();return Object(n.useEffect)((function(){o(E()).then((function(e){e.payload.isAuth?(a&&!e.payload.isAdmin||!1===t)&&l.history.push("/"):t&&l.history.push("/login")}))}),[]),r.a.createElement(e,Object.assign({},l,{user:c}))}return l},f=a(43),b=a(961),v=a(960),y=b.a.Title,w=function(e){return r.a.createElement("div",{style:{background:'linear-gradient(to bottom, rgba(0,0,0,0)\n        39%, rgba(0,0,0,0)\n        41%, rgba(0,0,0,0.65)\n        100%),\n         url("'.concat(e.image,'"), #1c1c1c'),height:"500px",backgroundSize:"100%, cover",backgroundPosition:"center, center",width:"100%",position:"relative"}},r.a.createElement("div",null,r.a.createElement("div",{style:{position:"absolute",maxWidth:"500px",bottom:"2rem",marginLeft:"2rem"}},r.a.createElement(y,{style:{color:"white"},level:2}," ",e.title),r.a.createElement("p",{style:{color:"white",fontSize:"1rem"}}," ",e.text))))},k=a(959),S=function(e){return r.a.createElement(k.a,{lg:6,md:8,xs:24},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("a",{href:"/movie/".concat(e.movieID)},r.a.createElement("img",{style:{width:"100%",height:"400px"},alt:"img",src:e.image}))))},x=b.a.Title,N=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("".concat(u,"movie/popular?api_key=").concat(d,"&language=en-US&page=6")).then((function(e){return e.json()})).then((function(e){console.log(e),l(e.results)}))}),[]),r.a.createElement("div",{style:{width:"100%",margin:0}},a[0]&&r.a.createElement(w,{image:"".concat(p,"w1280").concat(a[0].backdrop_path),title:a[0].original_title,text:a[0].overview}),r.a.createElement(x,{style:{margin:"10px",color:"white",background:"black",padding:"10px"},level:1}," ","Most Watched Movies"),r.a.createElement("div",{style:{width:"85%",margin:"1rem auto",background:"rgb(0,0,0)"}},r.a.createElement("hr",null),r.a.createElement(v.a,{gutter:[16,16]},a&&a.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(S,{image:e.poster_path&&"".concat(p,"w500").concat(e.poster_path),movieID:e.id}))})))))},j=a(219),O=a(61),I=a(962),_=a(966),C=a(23),P=a(964),q=a(289),M=b.a.Title;var T=Object(o.g)((function(e){var t=Object(h.b)(),a=!!localStorage.getItem("rememberMe"),l=Object(n.useState)(""),c=Object(f.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(a),d=Object(f.a)(u,2),p=d[0],E=d[1],g=function(){E(!p)},b=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return r.a.createElement(j.a,{initialValues:{email:b,password:""},validationSchema:O.object().shape({email:O.string().email("Email is invalid").required("Email is required"),password:O.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(a,n){var r=n.setSubmitting;setTimeout((function(){var n={email:a.email,password:a.password};t(function(e){return{type:"login_user",payload:s.a.post("".concat(m,"/login"),e).then((function(e){return e.data}))}}(n)).then((function(t){t.payload.loginSuccess?(window.localStorage.setItem("userId",t.payload.userId),!0===p?window.localStorage.setItem("rememberMe",a.id):localStorage.removeItem("rememberMe"),e.history.push("/")):i("Check out your Account or Password again")})).catch((function(e){i("Check out your Account or Password again"),setTimeout((function(){i("")}),3e3)})),r(!1)}),500)}},(function(e){var t=e.values,a=e.touched,n=e.errors,l=e.isSubmitting,c=e.handleChange,i=e.handleBlur,s=e.handleSubmit;return r.a.createElement("div",{className:"app"},r.a.createElement(M,{level:2},"Log In"),r.a.createElement("form",{onSubmit:s,style:{width:"350px"}},r.a.createElement(I.a.Item,{required:!0},r.a.createElement(_.a,{id:"email",prefix:r.a.createElement(C.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your email",type:"email",value:t.email,onChange:c,onBlur:i,className:n.email&&a.email?"text-input error":"text-input"}),n.email&&a.email&&r.a.createElement("div",{className:"input-feedback"},n.email)),r.a.createElement(I.a.Item,{required:!0},r.a.createElement(_.a,{id:"password",prefix:r.a.createElement(C.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your password",type:"password",value:t.password,onChange:c,onBlur:i,className:n.password&&a.password?"text-input error":"text-input"}),n.password&&a.password&&r.a.createElement("div",{className:"input-feedback"},n.password)),o&&r.a.createElement("label",null,r.a.createElement("p",{style:{color:"#000000",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},o)),r.a.createElement(I.a.Item,null,r.a.createElement(P.a,{id:"rememberMe",onChange:g,checked:p},"Remember me"),r.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password"),r.a.createElement("div",null,r.a.createElement(q.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:l,onSubmit:s},"Log in")),"Or ",r.a.createElement("a",{href:"/register"},"register now!"))))}))})),D=a(164),B=a.n(D),L={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},F={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var V=function(e){var t=Object(h.b)();return r.a.createElement(j.a,{initialValues:{email:"",lastName:"",name:"",password:"",confirmPassword:""},validationSchema:O.object().shape({name:O.string().required("Name is required"),lastName:O.string().required("Last Name is required"),email:O.string().email("Email is invalid").required("Email is required"),password:O.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:O.string().oneOf([O.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(a,n){var r=n.setSubmitting;setTimeout((function(){var n={email:a.email,password:a.password,name:a.name,lastname:a.lastname,image:"http://gravatar.com/avatar/".concat(B()().unix(),"?d=identicon")};t(function(e){return{type:"register_user",payload:s.a.post("".concat(m,"/register"),e).then((function(e){return e.data}))}}(n)).then((function(t){t.payload.success?e.history.push("/login"):alert(t.payload.err.errmsg)})),r(!1)}),500)}},(function(e){var t=e.values,a=e.touched,n=e.errors,l=e.isSubmitting,c=e.handleChange,o=e.handleBlur,i=e.handleSubmit;return r.a.createElement("div",{className:"app"},r.a.createElement("h2",null,"Sign up"),r.a.createElement(I.a,Object.assign({style:{minWidth:"375px"}},L,{onSubmit:i}),r.a.createElement(I.a.Item,{required:!0,label:"Name"},r.a.createElement(_.a,{id:"name",placeholder:"Enter your name",type:"text",value:t.name,onChange:c,onBlur:o,className:n.name&&a.name?"text-input error":"text-input"}),n.name&&a.name&&r.a.createElement("div",{className:"input-feedback"},n.name)),r.a.createElement(I.a.Item,{required:!0,label:"Last Name"},r.a.createElement(_.a,{id:"lastName",placeholder:"Enter your Last Name",type:"text",value:t.lastName,onChange:c,onBlur:o,className:n.lastName&&a.lastName?"text-input error":"text-input"}),n.lastName&&a.lastName&&r.a.createElement("div",{className:"input-feedback"},n.lastName)),r.a.createElement(I.a.Item,{required:!0,label:"Email",hasFeedback:!0,validateStatus:n.email&&a.email?"error":"success"},r.a.createElement(_.a,{id:"email",placeholder:"Enter your Email",type:"email",value:t.email,onChange:c,onBlur:o,className:n.email&&a.email?"text-input error":"text-input"}),n.email&&a.email&&r.a.createElement("div",{className:"input-feedback"},n.email)),r.a.createElement(I.a.Item,{required:!0,label:"Password",hasFeedback:!0,validateStatus:n.password&&a.password?"error":"success"},r.a.createElement(_.a,{id:"password",placeholder:"Enter your password",type:"password",value:t.password,onChange:c,onBlur:o,className:n.password&&a.password?"text-input error":"text-input"}),n.password&&a.password&&r.a.createElement("div",{className:"input-feedback"},n.password)),r.a.createElement(I.a.Item,{required:!0,label:"Confirm",hasFeedback:!0},r.a.createElement(_.a,{id:"confirmPassword",placeholder:"Enter your confirmPassword",type:"password",value:t.confirmPassword,onChange:c,onBlur:o,className:n.confirmPassword&&a.confirmPassword?"text-input error":"text-input"}),n.confirmPassword&&a.confirmPassword&&r.a.createElement("div",{className:"input-feedback"},n.confirmPassword)),r.a.createElement(I.a.Item,F,r.a.createElement(q.a,{onClick:i,type:"primary",disabled:l},"Submit"))))}))},U=a(963),A=U.a.SubMenu,R=U.a.ItemGroup;var z=function(e){return r.a.createElement(U.a,{mode:e.mode},r.a.createElement(U.a.Item,{key:"mail"},r.a.createElement("a",{href:"/search"},"Search Movie")),r.a.createElement(A,{title:r.a.createElement("span",null,"Soundtracks")},r.a.createElement(R,{title:"iTunes Movie Soundtracks"},r.a.createElement(U.a.Item,{key:"setting:1"},"2020's Best Movie Soundtracks",r.a.createElement("a",{href:"/soundtracks"})),r.a.createElement(U.a.Item,{key:"setting:2"},"iTunes Top 100 Best Selling Soundtracks",r.a.createElement("a",{href:"/bestsellers"})))))};var W=Object(o.g)((function(e){var t=Object(h.c)((function(e){return e.user}));return t.userData&&!t.userData.isAuth?r.a.createElement(U.a,{mode:e.mode},r.a.createElement(U.a.Item,{key:"mail"},r.a.createElement("a",{href:"/login"},"Sign In")),r.a.createElement(U.a.Item,{key:"app"},r.a.createElement("a",{href:"/register"},"Sign Up"))):r.a.createElement(U.a,{mode:e.mode},r.a.createElement(U.a.Item,{key:"logout"},r.a.createElement("a",{onClick:function(){s.a.get("".concat(m,"/logout")).then((function(t){200===t.status?e.history.push("/login"):alert("Log Out Failed")}))}},"Logout")))})),X=a(965);a(953);var J=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],l=t[1];return r.a.createElement("nav",{className:"menu",style:{position:"fixed",zIndex:5,width:"100%"}},r.a.createElement("div",{className:"menu__logo"},r.a.createElement("a",{href:"/"},"Movie CMS")),r.a.createElement("div",{className:"menu__container"},r.a.createElement("div",{className:"menu_left"},r.a.createElement(z,{mode:"horizontal"})),r.a.createElement("div",{className:"menu_rigth"},r.a.createElement(W,{mode:"horizontal"})),r.a.createElement(q.a,{className:"menu__mobile-button",type:"primary",onClick:function(){l(!0)}},r.a.createElement(C.a,{type:"align-right"})),r.a.createElement(X.a,{title:"NMV",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){l(!1)},visible:a},r.a.createElement(z,{mode:"inline"}),r.a.createElement(W,{mode:"inline"}))))};var Y=function(){return r.a.createElement("div",{style:{height:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"1rem"}})},G=a(967),H=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),l=a[0],c=a[1],i=Object(o.f)().movieId;return Object(n.useEffect)((function(){fetch("".concat(u,"movie/").concat(i,"?api_key=").concat(d,"&language=en-US")).then((function(e){return e.json()})).then((function(e){c(e),console.log("singleobj",e)}))}),[e]),r.a.createElement("div",{style:{width:"100%",margin:0}},l&&r.a.createElement(w,{image:"".concat(p,"w1280").concat(l.backdrop_path),title:l.original_title,text:l.overview}),r.a.createElement(G.a,{style:{width:"70%",margin:"5px",background:"#F5F5F5",padding:"10px"},title:"More Info"},r.a.createElement(G.a.Item,{label:"Release Date"},l.release_date),r.a.createElement(G.a.Item,{label:"Language"},l.original_language),r.a.createElement(G.a.Item,{label:"Popularity"},l.popularity),r.a.createElement(G.a.Item,{label:"Average Votes"},l.vote_average),r.a.createElement(G.a.Item,{label:"All Votes"},l.vote_count)))},$=a(288),K=a.n($),Q=a(474),Z=function(e){var t=e.Search;return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(v.a,{gutter:[16,16]},t&&t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(k.a,{lg:6,md:8,xs:24},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("a",{href:e.Poster},r.a.createElement("img",{src:e.Poster,style:{width:"100%",height:"400px"},alt:""}),r.a.createElement(G.a,null,r.a.createElement(G.a.Item,{label:"Released Year"}," ",e.Year))))))}))))},ee=function(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)([]),i=Object(f.a)(o,2),s=i[0],m=i[1],u=function(){var e=Object(Q.a)(K.a.mark((function e(t){var a,n,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="https://omdb-api.now.sh/?type=movie&s=".concat(l),e.prev=2,e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,console.log(r),m(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:u},r.a.createElement("div",{style:{width:"85%",height:"100%",padding:"20px",margin:"1rem auto",background:"black"}},r.a.createElement("label",null,r.a.createElement("input",{type:"text",value:l,onChange:function(e){return c(e.target.value)}}),console.log(l)),r.a.createElement("input",{type:"submit",value:"Search"}),r.a.createElement(Z,s)))},te=function(e){return console.log("Soundtracklist",e),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Movie Soundtracks"),r.a.createElement("ul",null,e.tracks.map((function(e){return r.a.createElement("li",{key:e.trackId},r.a.createElement("p",null,"Artist's Name: ",e.artistName),r.a.createElement("p",null,"See: ",r.a.createElement("a",{href:e.artistViewUrl},e.artistName)),r.a.createElement("p",null,"Collection's Name: ",e.collectionName),r.a.createElement("p",null,"See: ",r.a.createElement("a",{href:e.collectionViewUrl},e.collectionName)),r.a.createElement("p",null,"Released Date: ",e.releaseDate),r.a.createElement("p",null,"Country: ",e.country),r.a.createElement("p",null,"Track Name: ",e.trackName),r.a.createElement("p",null,"Track Price: ",e.trackPrice,e.currency))}))))},ae=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("https://itunes.apple.com/search?term=movie&entity=song").then((function(e){return e.json()})).then((function(e){console.log(e),l(e.results)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{style:{width:"85%",height:"100%",padding:"20px",margin:"1rem auto",background:"lightgrey"}},a&&r.a.createElement(te,{tracks:a}))};var ne=function(e){return console.log("Bestsellerslist",e),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Movie Bestsellers"),r.a.createElement("ul",null,e.sellers.map((function(e){return r.a.createElement("li",{key:e.collectionId},r.a.createElement("p",null,"Name: ",e.artistName),r.a.createElement("p",null,"See: ",r.a.createElement("a",{href:""},e.artistViewUrl)),r.a.createElement("p",null,"Collection's Name: ",e.collectionName),r.a.createElement("p",null,"See: ",r.a.createElement("a",{href:""},e.collectionViewUrl)),r.a.createElement("p",null,"Released Date: ",e.releaseDate),r.a.createElement("p",null,"Country: ",e.country),r.a.createElement("p",null,"Collection Name: ",e.collectionName),r.a.createElement("p",null,"Price: ",e.collectionPrice,e.currency))}))))};var re=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("https://itunes.apple.com/search?term=movie&entity=album").then((function(e){return e.json()})).then((function(e){console.log(e),l(e.results)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{style:{width:"85%",height:"100%",padding:"20px",margin:"1rem auto",background:"lightgrey"}},a&&r.a.createElement(ne,{sellers:a}))};var le=function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(J,null),r.a.createElement("div",{style:{paddingTop:"69px",minHeight:"calc(100vh - 80px)"}},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:g(N,null)}),r.a.createElement(o.a,{exact:!0,path:"/login",component:g(T,!1)}),r.a.createElement(o.a,{exact:!0,path:"/register",component:g(V,!1)}),r.a.createElement(o.a,{exact:!0,path:"/movie/:movieId",component:g(H,null)}),r.a.createElement(o.a,{exact:!0,path:"/search",component:g(ee,null)}),r.a.createElement(o.a,{exact:!0,path:"/soundtracks",component:g(ae,null)}),r.a.createElement(o.a,{exact:!0,path:"/bestsellers",component:g(re,null)}))),r.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(129),oe=a(115),ie=a(169),se=Object(oe.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register_user":return Object(ie.a)({},e,{register:t.payload});case"login_user":return Object(ie.a)({},e,{loginSucces:t.payload});case"auth_user":return Object(ie.a)({},e,{userData:t.payload});case"logout_user":return Object(ie.a)({},e);default:return e}}}),me=a(475),ue=a.n(me),de=a(476),pe=Object(oe.a)(ue.a,de.a)(oe.d);c.a.render(r.a.createElement(h.a,{store:pe(se,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(ce.a,null,r.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[480,1,2]]]);
//# sourceMappingURL=main.eef54881.chunk.js.map