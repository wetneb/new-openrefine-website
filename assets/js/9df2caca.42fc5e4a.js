"use strict";(self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[]).push([[2755],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(l,".").concat(d)]||f[d]||c[d]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={slug:"/",id:"index",title:"OpenRefine user manual",sidebar_label:"Introduction"},l=void 0,u={unversionedId:"index",id:"version-3.4/index",title:"OpenRefine user manual",description:"This manual is designed to comprehensively walk through every aspect of setting up and using OpenRefine 3.4.1, including every interface function and feature.",source:"@site/versioned_docs/version-3.4/index.md",sourceDirName:".",slug:"/",permalink:"/new-openrefine-website/docs/3.4/",draft:!1,editUrl:"https://github.com/OpenRefine/OpenRefine/edit/master/docs/versioned_docs/version-3.4/index.md",tags:[],version:"3.4",lastUpdatedBy:"Antonin Delpeuch",lastUpdatedAt:1662887291,formattedLastUpdatedAt:"Sep 11, 2022",frontMatter:{slug:"/",id:"index",title:"OpenRefine user manual",sidebar_label:"Introduction"},sidebar:"version-3.4/docs",next:{title:"Installing",permalink:"/new-openrefine-website/docs/3.4/manual/installing"}},p={},c=[],f={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This manual is designed to comprehensively walk through every aspect of setting up and using OpenRefine 3.4.1, including every interface function and feature. "),(0,o.kt)("p",null,"This user manual starts with instructions for ",(0,o.kt)("a",{parentName:"p",href:"manual/installing"},"installing or upgrading OpenRefine on Windows, Mac, and Linux computers"),". It then walks you through ",(0,o.kt)("a",{parentName:"p",href:"manual/running#jvm-preferences"},"the interface and how to run OpenRefine")," from a program or command line, with or without setting custom preferences and modifications."),(0,o.kt)("p",null,"The manual then teaches you how to ",(0,o.kt)("a",{parentName:"p",href:"manual/starting"},"start a project")," by importing an existing dataset. We work through how to ",(0,o.kt)("a",{parentName:"p",href:"manual/exploring"},"view and learn about your data")," using facets, filters, and sorting. "),(0,o.kt)("p",null,"Then we launch into ",(0,o.kt)("a",{parentName:"p",href:"manual/transforming"},"transforming that data permanently")," through common and custom transformations, clustering, pulling data from the web, ",(0,o.kt)("a",{parentName:"p",href:"manual/reconciling"},"reconciling"),", and ",(0,o.kt)("a",{parentName:"p",href:"manual/expressions"},"writing expressions"),". "),(0,o.kt)("p",null,"Finally we discuss what to do with your improved dataset, whether ",(0,o.kt)("a",{parentName:"p",href:"manual/exporting"},"exporting")," it to a file or uploading statements to Wikidata. "),(0,o.kt)("p",null,"If you're stuck on any aspect and can't find an answer in the manual, try the ",(0,o.kt)("a",{parentName:"p",href:"manual/troubleshooting"},"Troubleshooting page")," for links to various places to find help. "),(0,o.kt)("p",null,"If you are new and want to learn how to use OpenRefine using an example dataset, you may wish to start with a user-contributed tutorial from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/wiki/External-Resources"},"recommendations list"),"."))}d.isMDXComponent=!0}}]);