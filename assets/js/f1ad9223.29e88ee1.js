"use strict";(self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[]).push([[1987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,g=h["".concat(s,".").concat(p)]||h[p]||d[p]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"sortview",title:"Sort and view",sidebar_label:"Sort and view"},s=void 0,u={unversionedId:"manual/sortview",id:"version-3.5/manual/sortview",title:"Sort and view",description:"Sort",source:"@site/versioned_docs/version-3.5/manual/sortview.md",sourceDirName:"manual",slug:"/manual/sortview",permalink:"/new-openrefine-website/docs/3.5/manual/sortview",draft:!1,editUrl:"https://github.com/OpenRefine/OpenRefine/edit/master/docs/versioned_docs/version-3.5/manual/sortview.md",tags:[],version:"3.5",lastUpdatedBy:"Antonin Delpeuch",lastUpdatedAt:1662887291,formattedLastUpdatedAt:"Sep 11, 2022",frontMatter:{id:"sortview",title:"Sort and view",sidebar_label:"Sort and view"},sidebar:"version-3.5/docs",previous:{title:"Facets",permalink:"/new-openrefine-website/docs/3.5/manual/facets"},next:{title:"Overview",permalink:"/new-openrefine-website/docs/3.5/manual/transforming"}},c={},d=[{value:"Sort",id:"sort",level:2},{value:"View",id:"view",level:2},{value:"Show/hide \u201cnull\u201d",id:"showhide-null",level:3},{value:"Page navigation",id:"page-navigation",level:2}],h={toc:d};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"sort"},"Sort"),(0,o.kt)("p",null,"You can temporarily sort your rows by one column. You can sort based on ",(0,o.kt)("a",{parentName:"p",href:"exploring#data-types"},"data type"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"text alphabetically or reverse"),(0,o.kt)("li",{parentName:"ul"},"numbers by largest or smallest"),(0,o.kt)("li",{parentName:"ul"},"dates by earliest or latest"),(0,o.kt)("li",{parentName:"ul"},"boolean values by false first or true first.")),(0,o.kt)("p",null,"You can also choose where to place errors and blank cells in the sorting. Text can be case-sensitive or not: if so, cells that start with lowercase characters will appear ahead of those that start with uppercase characters."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A screenshot of the Sort window.",src:n(7733).Z,width:"410",height:"339"})),(0,o.kt)("p",null,"After you apply a sorting method, you can make it permanent, remove it, reverse it, or apply a subsequent sorting. When it is applied, you\u2019ll find ",(0,o.kt)("span",{class:"menuItems"},"Sort")," in the project grid header to the right of the rows-display setting, which will show all current sorting settings. "),(0,o.kt)("p",null,"If you have multiple sorting methods applied, they will work in the order you applied them (represented in order in the ",(0,o.kt)("span",{class:"menuItems"},"Sort")," menu). For example, you can sort an \u201cauthors\u201d column alphabetically, and then sort their books by publication date, for those authors that have more than one book. If you apply those in a different order -  sort all the publication dates in the dataset first, and then alphabetically by author - your dataset will look different. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Temporarily sorted rows.",src:n(8105).Z,width:"780",height:"604"})," "),(0,o.kt)("p",null,"When the sorting method you've applied is temporary, you will see that the rows retain their original numbering. When you make that sorting method permanent, by selecting ",(0,o.kt)("span",{class:"menuItems"},"Reorder rows permanently"),", the row numbers will change and the ",(0,o.kt)("span",{class:"menuItems"},"Sort")," menu in the project grid header will disappear. This will apply all current sorting methods. "),(0,o.kt)("h2",{id:"view"},"View"),(0,o.kt)("p",null,"You can control what data you view in the grid. On each column, you will see a ",(0,o.kt)("span",{class:"menuItems"},"View")," menu option. From there, you can \u201ccollapse\u201d (hide) that specific column, all other columns, all columns to the left, and all columns to the right. Using the ",(0,o.kt)("span",{class:"menuItems"},"View")," option that appears in the ",(0,o.kt)("span",{class:"menuItems"},"All")," column\u2019s dropdown menu, you can collapse all columns, and expand all the columns that you previously collapsed."),(0,o.kt)("h3",{id:"showhide-null"},"Show/hide \u201cnull\u201d"),(0,o.kt)("p",null,"You can find, under ",(0,o.kt)("span",{class:"menuItems"},"All")," \u2192 ",(0,o.kt)("span",{class:"menuItems"},"View"),", the option to show and hide ",(0,o.kt)("a",{parentName:"p",href:"exploring#data-types"},"\u201cnull\u201d values"),". A small grey \u201cnull\u201d will appear in each applicable cell. Remember that a null cell is not the same thing as an empty cell. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A screenshot of what a null value looks like.",src:n(8044).Z,width:"200",height:"232"})),(0,o.kt)("h2",{id:"page-navigation"},"Page navigation"),(0,o.kt)("p",null,"You can go directly to any page by changing the page number on the right-hand side. Using the up and down arrow keys in this input lets you go to the next and previous pages. You can also change the number of rows or records per page on the left-hand side of this view header bar."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A screenshot of the Page Navigation Feature.",src:n(3821).Z,width:"1537",height:"131"})))}p.isMDXComponent=!0},3821:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/goto-3aceb9e0a2086ab07015e05bbf4796cf.png"},8044:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},7733:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sort-4fb3f7e23823ab52aa3cea16c548c3dd.png"},8105:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sort2-3db578c2c60877a5d84129e51ff48021.png"}}]);