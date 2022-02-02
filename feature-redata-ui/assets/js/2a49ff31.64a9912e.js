"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[573],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2127:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={sidebar_position:2},c="Loading data",d={unversionedId:"getting_started/example_project/loading_data",id:"getting_started/example_project/loading_data",isDocsHomePage:!1,title:"Loading data",description:"If you would like to load toy_shop data to some of your testing DBs, clone our repo//github.com/re-data/re-data",source:"@site/docs/getting_started/example_project/loading_data.md",sourceDirName:"getting_started/example_project",slug:"/getting_started/example_project/loading_data",permalink:"/re-data/feature-redata-ui/docs/getting_started/example_project/loading_data",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/example_project/loading_data.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome to a toy shop!",permalink:"/re-data/feature-redata-ui/docs/getting_started/example_project/toy_shop_data"},next:{title:"Data Preparation",permalink:"/re-data/feature-redata-ui/docs/getting_started/example_project/data_preparation"}},l=[],u={toc:l};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loading-data"},"Loading data"),(0,o.kt)("p",null,"If you would like to load toy_shop data to some of your testing DBs, clone our repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/re-data/re-data"},"https://github.com/re-data/re-data"),"\nAnd copy our template of dbt project for this tutorial:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/re-data/re-data\ncd re-data\ncp -r getting_started/toy_shop/ my_toy_shop_tutorial\n")),(0,o.kt)("p",null,"And specify connection to db you would like to use, example postgres connection here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: postgres\n      host: xxx\n      user: xxx\n      password: xxx\n      port: 5432\n      dbname: xxx\n      schema: toy_shop\n      threads: 4\n")),(0,o.kt)("p",null,"Make sure you can use schema: toy_shop in your DB."),(0,o.kt)("p",null,"Now you are ready to load load data, you can do it with running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dbt seed\n")))}s.isMDXComponent=!0}}]);