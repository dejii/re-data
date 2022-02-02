"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[248],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,_=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(_,s(s({ref:t},p),{},{components:r})):n.createElement(_,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6967:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={sidebar_position:5},l="Checking for anomalies",c={unversionedId:"getting_started/example_project/compute_anomalies",id:"getting_started/example_project/compute_anomalies",isDocsHomePage:!1,title:"Checking for anomalies",description:"Now we will compute metrics for the whole last month and check if they are any anomlies there.",source:"@site/docs/getting_started/example_project/compute_anomalies.md",sourceDirName:"getting_started/example_project",slug:"/getting_started/example_project/compute_anomalies",permalink:"/re-data/docs/getting_started/example_project/compute_anomalies",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/example_project/compute_anomalies.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Compute first metrics",permalink:"/re-data/docs/getting_started/example_project/compute_first_metrics"},next:{title:"Checking for schema changes",permalink:"/re-data/docs/getting_started/example_project/checking_for_schema_changes"}},p=[],m={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"checking-for-anomalies"},"Checking for anomalies"),(0,a.kt)("p",null,"Now we will compute metrics for the whole last month and check if they are any anomlies there.\nWe could definitely do it using just dbt command, also on production you most likely will have airflow job computing it daily.\nHere for simplicity we will use ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data run")," command which is just calling dbt with proper vars:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"re_data run --start-date 2021-01-02 --end-date 2021-01-30\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Notice we already have Janaury 1st stats, so don't need to recompute them. In case of we want to recompute them, ",(0,a.kt)("inlineCode",{parentName:"em"},"re_data")," will overwrite older ones with new.")),(0,a.kt)("p",null,"Assuming this completed successfully lets query alerts table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="toy_shop_re.re_data_alerting"',title:'"toy_shop_re.re_data_alerting"'},'postgres=> select table_name, column_name, metric, z_score_value, time_window_end from toy_shop_re.re_data_alerting;\n             table_name              | column_name |    metric     |    z_score_value    |   time_window_end\n-------------------------------------+-------------+---------------+---------------------+---------------------\n "postgres"."toy_shop"."customers"   | id          | max           | -3.0571164943755322 | 2021-01-15 00:00:00\n "postgres"."toy_shop"."order_items" |             | row_count     | -3.0530445968041606 | 2021-01-24 00:00:00\n "postgres"."toy_shop"."orders"      |             | row_count     | -3.2576351652461364 | 2021-01-24 00:00:00\n "postgres"."toy_shop"."orders"      | status      | min_length    |   4.799999999199999 | 2021-01-27 00:00:00\n "postgres"."toy_shop"."orders"      | status      | max_length    |       -4.7999999976 | 2021-01-27 00:00:00\n "postgres"."toy_shop"."customers"   | id          | nulls_count   |   5.003702330376757 | 2021-01-28 00:00:00\n "postgres"."toy_shop"."customers"   | age         | nulls_count   |   5.003702330376757 | 2021-01-28 00:00:00\n "postgres"."toy_shop"."customers"   | first_name  | nulls_count   |   5.003702330376757 | 2021-01-28 00:00:00\n "postgres"."toy_shop"."customers"   | first_name  | missing_count |   5.003702330376757 | 2021-01-28 00:00:00\n "postgres"."toy_shop"."customers"   | last_name   | nulls_count   |   5.003702330376757 | 2021-01-28 00:00:00\n "postgres"."toy_shop"."customers"   | last_name   | missing_count |   5.003702330376757 | 2021-01-28 00:00:00\n "postgres"."toy_shop"."customers"   | first_name  | min_length    |   5.102520382924569 | 2021-01-29 00:00:00\n')),(0,a.kt)("p",null,"We can see a couple of alerting things here (some things look like false alerts, but most seem to be real problems with data). For example for this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"anomalies example",anomalies:!0,example:!0},'postgres=> select * from toy_shop_re.re_data_alerting where metric = \'row_count\';\n               table_name               | column_name |  metric   |    z_score_value    | last_value |      last_avg      |    last_stddev     |   time_window_end\n----------------------------------------+-------------+-----------+---------------------+------------+--------------------+--------------------+---------------------\n "postgres"."toy_shop"."order_items"    |             | row_count | -3.0530445968041606 |          0 |  59.47826086956522 | 19.481622027899643 | 2021-01-24 00:00:00\n "postgres"."toy_shop"."orders"         |             | row_count | -3.2576351652461364 |          0 | 23.608695652173914 |  7.247188360352917 | 2021-01-24 00:00:00\n')),(0,a.kt)("p",null,"It seems on 2021-01-23 we didn't get any orders and with an average above 23 orders per day that seems really odd."),(0,a.kt)("p",null,"You can use the re_data_alerting table as a warning generator that something is not right with your data."))}u.isMDXComponent=!0}}]);