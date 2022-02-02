"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[471],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(r),d=o,_=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return r?n.createElement(_,i(i({ref:t},l),{},{components:r})):n.createElement(_,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6062:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return l},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:5},s="Specifying custom metrics",m={unversionedId:"getting_started/example_project/data_monitoring/compute_custom_metrics",id:"getting_started/example_project/data_monitoring/compute_custom_metrics",isDocsHomePage:!1,title:"Specifying custom metrics",description:"Now, let's focus on some metrics which will be specific for us. Let's start with a very simple metric. We would like to know how many our orders are above 300$.",source:"@site/docs/getting_started/example_project/data_monitoring/compute_custom_metrics.md",sourceDirName:"getting_started/example_project/data_monitoring",slug:"/getting_started/example_project/data_monitoring/compute_custom_metrics",permalink:"/re-data/feature-data-prep-tutorial/docs/getting_started/example_project/data_monitoring/compute_custom_metrics",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/example_project/data_monitoring/compute_custom_metrics.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Specifying extra metrics",permalink:"/re-data/feature-data-prep-tutorial/docs/getting_started/example_project/data_monitoring/specifying_extra_metrics"},next:{title:"Checking for anomalies",permalink:"/re-data/feature-data-prep-tutorial/docs/getting_started/example_project/data_monitoring/compute_anomalies"}},l=[],u={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"specifying-custom-metrics"},"Specifying custom metrics"),(0,a.kt)("p",null,"Now, let's focus on some metrics which will be specific for us. Let's start with a very simple metric. We would like to know how many our orders are above 300$."),(0,a.kt)("p",null,"We create an new file for our metrics in our macros folder and create macro definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="macros/my_metrics.sql"',title:'"macros/my_metrics.sql"'},"{% macro re_data_metric_large_orders(context) %}\n    coalesce(\n      sum(\n          case when amount > 300\n            then 1\n          else 0\n          end\n      ), 0\n    )\n{% endmacro %}\n")),(0,a.kt)("p",null,"And now let's just add this configuration to orders table in ",(0,a.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="dbt_project.yml vars"',title:'"dbt_project.yml','vars"':!0},"vars:\n  re_data:alerting_z_score: 3\n  re_data:schemas:\n    - toy_shop\n  re_data:monitored:\n    - tables:\n      - name: orders\n        time_filter: created_at\n        actively_monitored: true\n        \n        metrics:\n          table:\n            - large_orders\n")),(0,a.kt)("p",null,"And run re_data again.."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'dbt run --models package:re_data --vars \\\n   \'{\n     "re_data:time_window_start": "2021-01-01 00:00:00",\n     "re_data:time_window_end": "2021-01-02 00:00:00"\n    }\'\n')),(0,a.kt)("p",null,"Let's check who the metric computed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'select table_name, column_name, metric, value, time_window_start, time_window_end  from toy_shop_re.re_data_metrics where metric = \'large_orders\';\n\n           table_name           | column_name |    metric    | value |  time_window_start  |   time_window_end\n--------------------------------+-------------+--------------+-------+---------------------+---------------------\n "postgres"."toy_shop"."orders" |             | large_orders |     4 | 2021-01-01 00:00:00 | 2021-01-02 00:00:00\n')),(0,a.kt)("p",null,"Ok, we managed to compute our first custom metric! \ud83c\udf89"),(0,a.kt)("p",null,"One thing you probably noticed is custom metric is just an expression.\nThis makes it possible for re_data to compute many metrics in one query.\nBut if you need to do a separate query to compute a metric it's still possible."),(0,a.kt)("p",null,"If you are interested how this should look, check out ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data")," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_unique_rows"},"unique_rows metric")),". "),(0,a.kt)("p",null,"Notice writing custom metrics which are doing subqueries is more advanced feature of re_data, so if you found yourself doing that it maybe good for you to join our  ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://join.slack.com/t/re-data/shared_invite/zt-vkauq1y8-tL4R4_H5nZoVvyXyy0hdug"},"Slack! \ud83d\ude0a"))),(0,a.kt)("p",null,"And now once, let's move to another interesting topic: anomalies!"))}p.isMDXComponent=!0}}]);