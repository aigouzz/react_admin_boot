(this["webpackJsonpzbtx-base-pc-react"]=this["webpackJsonpzbtx-base-pc-react"]||[]).push([[6],{235:function(e,n,t){"use strict";t.r(n);t(237);var i=t(220),a=t.n(i),o=t(154),c=t.n(o),r=a()({history:c()()});r.router(t(415).default),r.start("#root"),n.default=r._store},237:function(e,n,t){},286:function(e,n){},409:function(e,n,t){var i={"./modules/demo/demoList":[234,0,2],"./modules/demo/demoList.js":[234,0,2],"./modules/\u6a21\u5757\u4e1a\u52a1\u4ee3\u7801\u5199\u8fd9\u91cc.md":[417,9],"./views/exception/404":[231,1,3],"./views/exception/404.js":[231,1,3],"./views/home/home":[232,4],"./views/home/home.js":[232,4],"./views/user/login":[233,5],"./views/user/login.js":[233,5],"./views/\u7cfb\u7edf\u5168\u5c40\u9875\u9762\u5199\u8fd9\u91cc.md":[418,10]};function a(e){if(!t.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],a=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(a)}))}a.keys=function(){return Object.keys(i)},a.id=409,e.exports=a},415:function(e,n,t){"use strict";t.r(n);var i,a,o,c=t(1),r=t(46),s=t(227),l=t.n(s),d=t(29),u=t(3),p=t(63),h=t(0),f=t(419),m=t(421),b=t(64),j=t(7),x=t(416),O=t.p+"static/media/logo.51586d6b.svg",v=t(112),g=t(422),w=t(9),k=b.a.div(i||(i=Object(p.a)(["\n    .logo {\n        display: flex;\n        justify-content: center;\n        height: 64px;\n        position: relative;\n        line-height: 64px;\n        transition: all 0.2s;\n        background: #002140;\n        overflow: hidden;\n        img {\n            display: inline-block;\n            vertical-align: middle;\n            height: 32px;\n        }\n        h1 {\n            color: white;\n            display: inline-block;\n            vertical-align: middle;\n            font-size: 20px;\n            margin: 0 0 0 12px;\n            font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;\n            font-weight: 600;\n        }\n    }\n    .sider {\n        min-height: 100vh;\n        box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);\n        position: relative;\n        z-index: 10;\n        &.sider-fixed{\n            position: fixed;\n            top: 0;\n            left: 0;\n        }\n        &.ligth {\n            background-color: white;\n            .logo {\n                background: white;\n                h1 {\n                    color: #002140;\n                }\n            }\n        }\n    }\n"]))),y=m.a.Sider,L=x.a.SubMenu,P=x.a.Item,C=function(e){var n=e.menuData,t=e.isCollapsed,i=e.location,a=e.initialState,o=Object(h.useState)(a.tabList[0].path),c=Object(u.a)(o,2),s=c[0],l=c[1],d=Object(h.useState)([]),p=Object(u.a)(d,2),f=p[0],m=p[1];Object(h.useEffect)((function(){l(i.pathname),m(function(e){var n=e.split("/").filter((function(e){return e}));return n.map((function(e,t){return"/".concat(n.slice(0,t+1).join("/"))}))}(i.pathname))}),[i.pathname]);var b=function(e){return e?e.filter((function(e){return e.title&&!e.isHideInMenu})).map((function(e){return C(e)})):[]},C=function(e){if(e.children&&e.children.some((function(e){return e.title}))){var n=b(e.children);return n&&n.length?Object(w.jsx)(L,{icon:Object(w.jsx)(g.a,{}),title:e.title,children:n},e.path):null}return Object(w.jsx)(P,{children:Object(w.jsx)(r.Link,{to:e.path,children:e.title})},e.path)},M=function(e){var t=e[e.length-1],i=Object(v.intersection)(e,n.map((function(e){return e.path}))).length>1;m((function(){return i?[t]:Object(j.a)(e)}))};return Object(w.jsx)(k,{children:Object(w.jsxs)(y,{collapsed:t,width:256,className:"sider sider-fixed",children:[Object(w.jsx)("div",{className:"logo",children:Object(w.jsxs)(r.Link,{to:"/",children:[Object(w.jsx)("img",{src:O,alt:"logo"}),!t&&Object(w.jsx)("h1",{children:"\u667a\u535a\u5929\u4e0b"})]})}),Object(w.jsx)(x.a,{selectedKeys:s,openKeys:f,mode:"inline",theme:"dark",onClick:function(n){e.handleMenuChange(n)},onOpenChange:M,children:b(n)})]})})},M=t(423),S=t(424),A=b.a.div(a||(a=Object(p.a)(["\n    .header{\n        position: fixed;\n        top: 0;\n        height: 60px;\n        padding: 0 12px 0 0;\n        background: #fff;\n        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n        width: 100%;\n        z-index: 100;\n        .trigger {\n            font-size: 20px;\n            line-height: 60px;\n            width: 60px;\n            cursor: pointer;\n            transition: all 0.3s, padding 0s;\n            padding: 0 24px;\n            &:hover {\n                background: #e6f7ff;\n            }\n        }\n    }\n"]))),H=function(e){return Object(w.jsx)(A,{children:Object(w.jsx)("div",{className:"header",children:function(){var n=e.isCollapsed;return Object(w.jsx)("div",{className:"trigger",onClick:e.onCollapse,children:n?Object(w.jsx)(M.a,{}):Object(w.jsx)(S.a,{})})}()})})},N=b.a.div(o||(o=Object(p.a)(["\n    .fixed-sider{\n        padding-left: 256px;\n        transition: .2s all;\n    }\n    .fixed-sider-collapsed{\n        padding-left: 80px;\n        transition: .2s all;\n    }\n    /* tabs\u7684\u6837\u5f0f\u90fd\u5199\u5728\u8fd9\u91cc\u9762 */\n    .globalTabs {\n        border-top: 1px solid #f0f0f0;\n        &.tabs-fixedHeader{\n            padding-top: 94px;\n        }\n        .ant-tabs {\n            line-height: 1.2;\n            .ant-tabs-nav {\n                margin-bottom: 0;\n                .ant-tabs-nav-wrap {\n                    line-height: 1.2;\n                    .ant-tabs-nav-list {\n                        .ant-tabs-tab {\n                            font-size: 12px;\n                        }\n                    }\n                }\n            }\n        }\n        .ant-tabs-nav {\n            position: fixed;\n            top: 60px;\n            left: 256px;\n            right: 0;\n        }\n    }\n    .router-wrap{\n        padding: 10px;\n    }\n"]))),E=f.a.TabPane,z=m.a.Content,R=function(e){var n=e.routes,t=e.history,i={tabList:[{closable:!1,title:"\u9996\u9875",path:"/home"}]},a=Object(h.useState)(!1),o=Object(u.a)(a,2),r=o[0],s=o[1],l=Object(h.useState)(i.tabList),d=Object(u.a)(l,2),p=d[0],b=d[1],j=Object(h.useState)(i.tabList[0].path),x=Object(u.a)(j,2),O=x[0],v=x[1];Object(h.useEffect)((function(){t.push(i.tabList[0].path)}),[]),Object(h.useEffect)((function(){var e=t.location.pathname;n.some((function(n){return n.path===e}))||t.replace("/404")}),[t.location.pathname]);return Object(w.jsx)(N,{children:Object(w.jsxs)(m.a,{children:[Object(w.jsx)(C,Object(c.a)({isCollapsed:r,initialState:i,handleMenuChange:function(e){v(e.key),n.forEach((function(n){n.path===e.key&&(p.map((function(e){return e.path})).includes(n.path)||p.push(n))}))}},e)),Object(w.jsxs)(m.a,{className:r?"fixed-sider-collapsed":"fixed-sider",children:[Object(w.jsx)(H,{isCollapsed:r,onCollapse:function(){s((function(e){return!e}))}}),Object(w.jsx)(z,{className:"globalTabs tabs-fixedHeader",children:Object(w.jsx)(f.a,{activeKey:O,tabBarStyle:{background:"#fff"},tabPosition:"top",tabBarGutter:-1,hideAdd:!0,type:"editable-card",onChange:function(e){t.push(e),v(e)},onEdit:function(e,n){return function(e){var n=p.findIndex((function(n){return n.path===e})),i=p[n-1],a=p.filter((function(n){return n.path!==e}));b(a),O===e&&(v(i.path),t.push(i.path))}(e)},children:p.map((function(n){return Object(w.jsx)(E,{tab:n.title,closable:n.closable,children:Object(w.jsx)("div",{className:"router-wrap",children:e.children})},n.path)}))})})]})]})})},I=[].concat([{componentPath:"views/home/home",id:"1",path:"/home",name:"home",redirect:null,icon:"",keepAlive:!1,title:"\u9996\u9875"},{componentPath:"views/exception/404",id:"3",path:"/404",name:"404",redirect:null,icon:"",keepAlive:!1,title:"404",isHideInMenu:!0,isHideLayout:!0},{componentPath:"views/user/login",id:"4",path:"/login",name:"login",redirect:null,icon:"",keepAlive:!1,title:"\u767b\u5f55",isHideLayout:!0}],[{componentPath:"layouts/RouteView",id:"2",path:"/demo",name:"demo",redirect:null,icon:"",keepAlive:!1,title:"\u793a\u4f8b\u7ba1\u7406",children:[{componentPath:"modules/demo/demoList",id:"1-1",path:"/demo/demoList",name:"demo-demoList",redirect:null,icon:"",keepAlive:!1,title:"\u793a\u4f8b\u5217\u8868"},{componentPath:"layouts/RouteView",id:"1-2",path:"/demo/demoList/componentManage",name:"componentManage",redirect:null,icon:"",keepAlive:!1,title:"\u7ec4\u4ef6\u7ba1\u7406",children:[{componentPath:"modules/demo/demoList",id:"1-1",path:"/demo/demoList/componentManage/detail",name:"componentManage-detail",redirect:null,icon:"",keepAlive:!1,title:"\u793a\u4f8b\u8be6\u60c5"}]}]},{componentPath:"layouts/RouteView",id:"6",path:"/demo1",name:"demo1",redirect:null,icon:"",keepAlive:!1,title:"\u793a\u4f8b\u7ba1\u74061",children:[{componentPath:"modules/demo1/demoList",id:"1-1",path:"/demo1/demoList1",name:"demo-demoList1",redirect:null,icon:"",keepAlive:!1,title:"\u793a\u4f8b\u5217\u88681"}]}]),D=t(21),T=t.n(D),K=t(41),V=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(v.cloneDeep)(n).forEach((function(n){t.push(n),n.children&&e(n.children,t)})),t.map((function(e){return e.children&&delete e.children,Object(c.a)({},e)}))},_=function(e){return function(n){var t=Object(h.useState)(null),i=Object(u.a)(t,2),a=i[0],o=i[1];return Object(h.useEffect)((function(){function t(){return(t=Object(K.a)(T.a.mark((function t(){var i,a;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e();case 3:i=t.sent,a=i.default,o((function(){return a})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n.history.replace("/404");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),a?Object(w.jsx)(a,Object(c.a)({},n)):Object(w.jsx)("div",{children:"\u52a0\u8f7d\u4e2d..."})}},B=r.routerRedux.ConnectedRouter;n.default=function(e){var n=e.history,i=(e.app,V(I).filter((function(e){return!(e.componentPath.indexOf("layouts")>-1)})).map((function(e){return Object(c.a)(Object(c.a)({},e),{},{component:function(){return t(409)("./".concat(e.componentPath))}})}))),a=i.filter((function(e){return e.isHideInMenu})),o=i.filter((function(e){return!e.isHideInMenu}));return Object(w.jsx)(d.a,{locale:l.a,children:Object(w.jsx)(B,{history:n,children:Object(w.jsxs)(r.Switch,{children:[a.map((function(e){return Object(w.jsx)(r.Route,{path:e.path,exact:!0,component:_(e.component)},e.name)})),Object(w.jsx)(R,{menuData:I,routes:i,history:n,children:o.map((function(e){return Object(w.jsx)(r.Route,{path:e.path,exact:!0,component:_(e.component)},e.name)}))})]})})})}}},[[235,7,8]]]);
//# sourceMappingURL=main.a8f11b5f.chunk.js.map