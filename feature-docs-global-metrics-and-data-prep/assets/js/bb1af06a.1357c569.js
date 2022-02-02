"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[691],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=m(r),u=o,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9607:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:3},c="Compute first metrics",m={unversionedId:"getting_started/example_project-data_monitoring/compute_first_metrics",id:"getting_started/example_project-data_monitoring/compute_first_metrics",isDocsHomePage:!1,title:"Compute first metrics",description:"Now, let's compute the first metrics. We can specify the tables we want to monitor in dbt_project.yml as shown below",source:"@site/docs/getting_started/example_project-data_monitoring/compute_first_metrics.md",sourceDirName:"getting_started/example_project-data_monitoring",slug:"/getting_started/example_project-data_monitoring/compute_first_metrics",permalink:"/re-data/feature-docs-global-metrics-and-data-prep/docs/getting_started/example_project-data_monitoring/compute_first_metrics",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/example_project-data_monitoring/compute_first_metrics.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Loading data",permalink:"/re-data/feature-docs-global-metrics-and-data-prep/docs/getting_started/example_project-data_monitoring/loading_data"},next:{title:"Specifying extra metrics",permalink:"/re-data/feature-docs-global-metrics-and-data-prep/docs/getting_started/example_project-data_monitoring/specifying_extra_metrics"}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compute-first-metrics"},"Compute first metrics"),(0,a.kt)("p",null,"Now, let's compute the first metrics. We can specify the tables we want to monitor in ",(0,a.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")," as shown below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="monitored tables"',title:'"monitored','tables"':!0},"vars:\n  re_data:alerting_z_score: 3\n  re_data:monitored:\n    - tables:\n        - name: customers\n          time_filter: joined_at\n        - name: order_items\n          time_filter: added_at\n        - name: orders\n          time_filter: created_at\n          # actively_monitored: false (we can disable computing metrics for specific table)\n        - name: companies\n          time_filter: null # to compute global metrics for this table. (no time window would be used)\n\n      actively_monitored: true # we can set this here to monitor all tables listed, removing the need to specify actively_monitored per table\n")),(0,a.kt)("p",null,"Then we run monitoring, we choose to run it for the first day of 2021:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'dbt run --models package:re_data --vars \\\n   \'{\n     "re_data:time_window_start": "2021-01-01 00:00:00",\n     "re_data:time_window_end": "2021-01-02 00:00:00"\n    }\'\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note, if we don't pass time window parameters re_data will compute stats from the previous day")),(0,a.kt)("p",null,"This computes ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/reference/metrics#default-metrics"},"default metrics"))," for the monitored tables. Let's just see how many customers/order_items/orders we have added in on 01-01-2021."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Viewing computed metrics"',title:'"Viewing',computed:!0,'metrics"':!0},'select * from toy_shop_re.re_data_metrics where metric in( \'row_count\', \'global__row_count\');\n\n               table_name               | column_name |  metric   | value |  time_window_start  |   time_window_end\n----------------------------------------+-------------+-----------+-------+---------------------+---------------------\n "postgres"."toy_shop"."customers"      |             | row_count         |    15 | 2021-01-01 00:00:00 | 2021-01-02 00:00:00\n "postgres"."toy_shop"."order_items"    |             | row_count         |    48 | 2021-01-01 00:00:00 | 2021-01-02 00:00:00\n "postgres"."toy_shop"."orders"         |             | row_count         |    20 | 2021-01-01 00:00:00 | 2021-01-02 00:00:00\n "postgres"."toy_shop"."companies"      |             | global__row_count |    8  | 2021-01-01 00:00:00 | 2021-01-02 00:00:00\n')),(0,a.kt)("p",null,"We can of course inspect any of those metrics and it maybe also really usefull to write dbt tests for values we expect in those."),(0,a.kt)("p",null,"Now, let's add some extra metrics to customize monitoring for our needs"))}d.isMDXComponent=!0}}]);