(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=a(17),s=a(22),o=a(70),l=a(80),u="CREATE",d="UPDATE",p="DELETE",j="FETCH_ALL",b=Object(s.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;case u:return[].concat(Object(l.a)(e),[t.payload]);case d:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case p:return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),f=a(50),m=a(159),h=a(160),x=a(154),O=a(163),g=a(158),v=a(18),y=a.n(v),C=a(35),w=a(36),k=a.n(w),N="https://hiraj-memories-project.herokuapp.com/posts",I=function(e,t){return k.a.patch("".concat(N,"/").concat(e),t)},E=function(e){return k.a.delete("".concat(N,"/").concat(e))},S=function(e){return k.a.patch("".concat(N,"/").concat(e,"/likePost"))},_=a(157),z=a(151),T=a(153),W=a(162),A=a(155),B=a(156),D=a(77),F=a.n(D),L=a(78),M=a.n(L),R=a(76),H=a.n(R),J=a(71),P=a.n(J),U=a(148),V=Object(U.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),q=a(5),G=function(e){var t=e.post,a=e.setCurrentId,n=V(),r=Object(i.b)();return Object(q.jsxs)(z.a,{className:n.card,children:[Object(q.jsx)(T.a,{className:n.media,image:t.selectedFile,title:t.title}),Object(q.jsxs)("div",{className:n.overlay,children:[Object(q.jsx)(x.a,{variant:"h6",children:t.creator}),Object(q.jsx)(x.a,{variant:"body2",children:P()(t.createdAt).fromNow()})]}),Object(q.jsx)("div",{className:n.overlay2,children:Object(q.jsx)(W.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(q.jsx)(H.a,{fontSize:"default"})})}),Object(q.jsx)("div",{className:n.details,children:Object(q.jsx)(x.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(q.jsx)(x.a,{className:n.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(q.jsx)(A.a,{children:Object(q.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",gutterBottom:!0,children:t.message})}),Object(q.jsxs)(B.a,{className:n.cardActions,children:[Object(q.jsxs)(W.a,{size:"small",color:"primary",onClick:function(){var e;r((e=t._id,function(){var t=Object(C.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:n=t.sent,r=n.data,a({type:d,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(q.jsx)(F.a,{fontSize:"small"}),"\xa0 Like \xa0",t.likeCount]}),Object(q.jsx)(W.a,{size:"small",color:"primary",onClick:function(){var e;r((e=t._id,function(){var t=Object(C.a)(y.a.mark((function t(a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E(e);case 3:a({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},children:Object(q.jsx)(M.a,{fontSize:"small"})})]})]})},K=Object(U.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),Q=function(e){var t=e.setCurrentId,a=Object(i.c)((function(e){return e.posts})),n=K();return console.log(a),a.length?Object(q.jsx)(g.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(q.jsx)(g.a,{item:!0,xs:12,sm:6,children:Object(q.jsx)(G,{post:e,setCurrentId:t})},e._id)}))}):Object(q.jsx)(_.a,{})},X=a(19),Y=a(82),Z=a(161),$=a(79),ee=a.n($),te=Object(U.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ae=function(e){var t=e.currentId,a=e.setCurrentId,r=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),c=Object(f.a)(r,2),s=c[0],o=c[1],l=Object(i.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),p=te(),j=Object(i.b)();Object(n.useEffect)((function(){l&&o(l)}),[l]);var b=function(){a(null),o({creator:"",title:"",message:"",tags:"",selectedFile:""})};return Object(q.jsx)(Y.a,{className:p.paper,children:Object(q.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.form," ").concat(p.root),onSubmit:function(e){e.preventDefault(),j(t?function(e,t){return function(){var a=Object(C.a)(y.a.mark((function a(n){var r,c;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,I(e,t);case 3:r=a.sent,c=r.data,n({type:d,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,s):function(e){return function(){var t=Object(C.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,k.a.post(N,c);case 3:n=t.sent,r=n.data,a({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(s)),b()},children:[Object(q.jsxs)(x.a,{variant:"h6",children:[" ",t?"Editing":"Creating"," a Memory"]}),Object(q.jsx)(Z.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:s.creator,onChange:function(e){return o(Object(X.a)(Object(X.a)({},s),{},{creator:e.target.value}))}}),Object(q.jsx)(Z.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return o(Object(X.a)(Object(X.a)({},s),{},{title:e.target.value}))}}),Object(q.jsx)(Z.a,{name:"message",variant:"outlined",label:"message",fullWidth:!0,value:s.message,onChange:function(e){return o(Object(X.a)(Object(X.a)({},s),{},{message:e.target.value}))}}),Object(q.jsx)(Z.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:s.tags,onChange:function(e){return o(Object(X.a)(Object(X.a)({},s),{},{tags:e.target.value.split(",")}))}}),Object(q.jsx)("div",{className:p.fileInput,children:Object(q.jsx)(ee.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return o(Object(X.a)(Object(X.a)({},s),{},{selectedFile:t}))}})}),Object(q.jsx)(W.a,{className:p.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(q.jsx)(W.a,{variant:"contained",color:"secondary",size:"small",onClick:b,fullWidth:!0,children:"Clear"})]})})},ne=a(49),re=Object(U.a)((function(e){return Object(ne.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{direction:"column-reverse"}})})),ce=a.p+"static/media/memories.9cfa8a46.png",ie=function(){var e=Object(n.useState)(null),t=Object(f.a)(e,2),a=t[0],r=t[1],c=re(),s=Object(i.b)();return Object(n.useEffect)((function(){s(function(){var e=Object(C.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(N);case 3:a=e.sent,n=a.data,t({type:j,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,s]),Object(q.jsxs)(m.a,{maxWidth:"lg",children:[Object(q.jsxs)(h.a,{className:c.appBar,position:"static",color:"inherit",children:[Object(q.jsx)(x.a,{className:c.heading,variant:"h2",align:"center",children:"Memories"}),Object(q.jsx)("img",{className:c.image,src:ce,alt:"memories",height:"60"})]}),Object(q.jsx)(O.a,{in:!0,children:Object(q.jsx)(m.a,{children:Object(q.jsxs)(g.a,{container:!0,className:c.mainContainer,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(q.jsx)(g.a,{item:!0,xs:12,sm:7,children:Object(q.jsx)(Q,{setCurrentId:r})}),Object(q.jsx)(g.a,{item:!0,xs:12,sm:4,children:Object(q.jsx)(ae,{currentId:a,setCurrentId:r})})]})})})]})},se=(a(118),Object(s.e)(b,Object(s.d)(Object(s.a)(o.a))));c.a.render(Object(q.jsx)(i.a,{store:se,children:Object(q.jsx)(ie,{})}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.3598b0f8.chunk.js.map