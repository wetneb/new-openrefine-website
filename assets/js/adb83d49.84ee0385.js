"use strict";(self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[]).push([[5943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"uploading",title:"Uploading edits to Wikibase",sidebar_label:"Uploading edits"},l=void 0,u={unversionedId:"manual/wikibase/uploading",id:"manual/wikibase/uploading",title:"Uploading edits to Wikibase",description:"This page explains how to upload your edits to the target Wikibase. It assumes you already have a created a Wikibase schema in your OpenRefine project.",source:"@site/docs/manual/wikibase/uploading.md",sourceDirName:"manual/wikibase",slug:"/manual/wikibase/uploading",permalink:"/new-openrefine-website/docs/next/manual/wikibase/uploading",draft:!1,editUrl:"https://github.com/OpenRefine/OpenRefine/edit/master/docs/docs/manual/wikibase/uploading.md",tags:[],version:"current",lastUpdatedBy:"Antonin Delpeuch",lastUpdatedAt:1662887291,formattedLastUpdatedAt:"Sep 11, 2022",frontMatter:{id:"uploading",title:"Uploading edits to Wikibase",sidebar_label:"Uploading edits"},sidebar:"docs",previous:{title:"Quality assurance",permalink:"/new-openrefine-website/docs/next/manual/wikibase/quality-assurance"},next:{title:"Overview",permalink:"/new-openrefine-website/docs/next/manual/expressions"}},p={},c=[{value:"Uploading with OpenRefine",id:"uploading-with-openrefine",level:2},{value:"Uploading with QuickStatements",id:"uploading-with-quickstatements",level:2},{value:"Notable differences between the two methods",id:"notable-differences-between-the-two-methods",level:2},{value:"Merging strategy for terms and statements",id:"merging-strategy-for-terms-and-statements",level:3},{value:"New item creation",id:"new-item-creation",level:3},{value:"Speed and number of edits",id:"speed-and-number-of-edits",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page explains how to upload your edits to the target Wikibase. It assumes you already have a created a Wikibase schema in your OpenRefine project."),(0,r.kt)("h2",{id:"uploading-with-openrefine"},"Uploading with OpenRefine"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("span",{class:"menuItems"},"Wikidata")," \u2192 ",(0,r.kt)("span",{class:"menuItems"},"Upload edits to Wikidata"),"."),(0,r.kt)("li",{parentName:"ul"},"Log in with your personal account or your bot account depending on which account you want to use to make the edits. It is a good practice to use a ",(0,r.kt)("a",{parentName:"li",href:"https://www.mediawiki.org/wiki/Manual:Bot_passwords"},"bot password"),"."),(0,r.kt)("li",{parentName:"ul"},"Supply a meaningful edit summary. This is especially important because OpenRefine condenses all your changes on the same item as one edit: if you are making multiple changes, the edit summary generated by Wikibase will not indicate clearly what sort of change you made. If you are making atomic changes, such as adding a single alias or statement, the automatic edit summaries will be more meaningful. If supported by your Wikibase instance, OpenRefine will append a link to the ",(0,r.kt)("a",{parentName:"li",href:"https://editgroups.toolforge.org/"},"EditGroups")," tool, which lets you track and analyze your edit batch after upload."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("span",{class:"buttonLabels"},"Perform edits")," and wait for the operation to complete. You can watch your edits being made by checking your wiki contributions or the EditGroups tool.")),(0,r.kt)("p",null,"Because performing edits in OpenRefine counts as an operation, you can extract this operation and reapply it to other projects. If you do so, you should also include the operation that saves the schema (only the last one is required), and make sure that the column names in the schema match those of the OpenRefine project where you are applying the operation."),(0,r.kt)("h2",{id:"uploading-with-quickstatements"},"Uploading with QuickStatements"),(0,r.kt)("p",null,"This requires that the Wikibase site has an associated ",(0,r.kt)("a",{parentName:"p",href:"https://meta.wikimedia.org/wiki/QuickStatements"},"QuickStatements")," tool."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("span",{class:"menuItems"},"Wikibase")," \u2192 ",(0,r.kt)("span",{class:"menuItems"},"Export to QuickStatements")," and copy the contents of the file;"),(0,r.kt)("li",{parentName:"ul"},"Go to QuickStatements (for Wikidata it can be found at ",(0,r.kt)("a",{parentName:"li",href:"https://quickstatements.toolforge.org/"},"https://quickstatements.toolforge.org/"),") and login to authorize the tool to use your account;"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("span",{class:"buttonLabels"},"Version 1 format"),";"),(0,r.kt)("li",{parentName:"ul"},"Paste the generated changes in the text area;"),(0,r.kt)("li",{parentName:"ul"},"Perform the edits with ",(0,r.kt)("span",{class:"buttonLabels"},"Run")," or ",(0,r.kt)("span",{class:"buttonLabels"},"Run in background"),".")),(0,r.kt)("h2",{id:"notable-differences-between-the-two-methods"},"Notable differences between the two methods"),(0,r.kt)("h3",{id:"merging-strategy-for-terms-and-statements"},"Merging strategy for terms and statements"),(0,r.kt)("p",null,"OpenRefine offers various merging strategies for terms and statements. QuickStatements only supports one non-configurable merging strategy. Therefore, the merging strategies specified by the user in the schema are ignored when exporting to QuickStatements,\nwhich can result in unintended changes."),(0,r.kt)("h3",{id:"new-item-creation"},"New item creation"),(0,r.kt)("p",null,"OpenRefine supports creating new items with arbitrary relations between them."),(0,r.kt)("p",null,"QuickStatements supports creating new items with the ",(0,r.kt)("code",null,"CREATE")," instruction, and subsequent instructions can use the ",(0,r.kt)("code",null,"LAST")," placeholder to use the Qid of the last created item. When generating QuickStatements instructions, OpenRefine reorders your edits so that this syntax can be used. In rare cases, such as when a statement links two newly-created items, it is impossible to use QuickStatements to perform the edit. In this case, no QuickStatements script will be generated."),(0,r.kt)("h3",{id:"speed-and-number-of-edits"},"Speed and number of edits"),(0,r.kt)("p",null,"OpenRefine generally performs one edit per item touched by an edit batch and at most two in general (in the case where new items contain links between them). This was chosen to minimize server load, speed up the upload and keep item histories compact. The downside is that the edit summaries can be less meaningful - it is therefore important that users supply informative summaries when uploading their batches. OpenRefine asymptotically edits at the rate of 60 edits per minute (so, usually 60 items per minute). The first edits are made more quickly, which is convenient for small batches."),(0,r.kt)("p",null,"QuickStatements performs incremental edits (for instance, when adding a statement with a qualifier and a reference, it will make three edits). That generally means lower speed, but more explicit item histories."))}m.isMDXComponent=!0}}]);