"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[650],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6286:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Welcome to a toy shop!",p={unversionedId:"getting_started/example_project/toy_shop_data",id:"getting_started/example_project/toy_shop_data",isDocsHomePage:!1,title:"Welcome to a toy shop!",description:"Welcome to a re_data getting started tutorial. We will prepare, analyze and monitor toy shop data here. The toy shop is a fictional e-commerce shop \ud83d\ude42",source:"@site/docs/getting_started/example_project/toy_shop_data.md",sourceDirName:"getting_started/example_project",slug:"/getting_started/example_project/toy_shop_data",permalink:"/re-data/feature-data-prep-tutorial/docs/getting_started/example_project/toy_shop_data",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/example_project/toy_shop_data.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation for starters",permalink:"/re-data/feature-data-prep-tutorial/docs/getting_started/installation/new_to_dbt"},next:{title:"Loading data",permalink:"/re-data/feature-data-prep-tutorial/docs/getting_started/example_project/loading_data"}},u=[{value:"Toy shop data",id:"toy-shop-data",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-to-a-toy-shop"},"Welcome to a toy shop!"),(0,o.kt)("p",null,"Welcome to a re_data getting started tutorial. We will prepare, analyze and monitor toy shop data here. The toy shop is a fictional e-commerce shop \ud83d\ude42"),(0,o.kt)("p",null,"It's an example of how a re_data project can work and help you improve data in your data warehouse"),(0,o.kt)("h2",{id:"toy-shop-data"},"Toy shop data"),(0,o.kt)("p",null,"Toy shop DB has currently just 4 tables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"customers"),(0,o.kt)("li",{parentName:"ul"},"orders"),(0,o.kt)("li",{parentName:"ul"},"order_items"),(0,o.kt)("li",{parentName:"ul"},"companies"),(0,o.kt)("li",{parentName:"ul"},"user_data"),(0,o.kt)("li",{parentName:"ul"},"us_states")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title=toy_shop_schema",title:"toy_shop_schema"},'                        Table "toy_shop.customers"\n   Column   |            Type             | Collation | Nullable | Default\n------------+-----------------------------+-----------+----------+---------\n id         | integer                     |           |          |\n first_name | text                        |           |          |\n last_name  | text                        |           |          |\n age        | integer                     |           |          |\n joined_at  | timestamp without time zone |           |          |\n\n                           Table "toy_shop.orders"\n   Column    |            Type             | Collation | Nullable | Default\n-------------+-----------------------------+-----------+----------+---------\n id          | integer                     |           |          |\n customer_id | integer                     |           |          |\n amount      | integer                     |           |          |\n status      | text                        |           |          |\n created_at  | timestamp without time zone |           |          |\n\n                      Table "toy_shop.order_items"\n  Column  |            Type             | Collation | Nullable | Default\n----------+-----------------------------+-----------+----------+---------\n item_id  | integer                     |           |          |\n order_id | integer                     |           |          |\n name     | text                        |           |          |\n amount   | integer                     |           |          |\n added_at | timestamp without time zone |           |          |\n\n                       Table "toy_shop.companies"\n  Column    |            Type          | Collation | Nullable | Default\n----------+-----------------------------+-----------+----------+---------\n brand_name | text                     |           |          |\n show       | text                     |           |          |\n year       | integer                  |           |          |\n\n                        Table "toy_shop.user_data"\n  Column    |            Type          | Collation | Nullable | Default\n----------+-----------------------------+-----------+----------+---------\n name       | text                     |           |          |\n email      | text                     |           |          |\n \n                         Table "toy_shop.us_states"\n  Column    |            Type          | Collation | Nullable | Default\n----------+-----------------------------+-----------+----------+---------\n state       | text                     |           |          |\n code        | text                     |           |          |\n')),(0,o.kt)("p",null,"Toy shop started operating on 1 January 2021.\nToy shop data is stored in Postgres (re_data also works with BigQuery, Snowflake & Redshift)"))}d.isMDXComponent=!0}}]);