"use strict";(self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[]).push([[4095],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(i),h=a,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return i?n.createElement(f,o(o({ref:t},p),{},{components:i})):n.createElement(f,o({ref:t},p))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},2006:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=i(7462),a=i(3366),r=(i(7294),i(3905)),o=["components"],s={id:"reconciling",title:"Reconciling with Wikibase",sidebar_label:"Reconciling with Wikibase"},l=void 0,c={unversionedId:"manual/wikibase/reconciling",id:"version-3.6/manual/wikibase/reconciling",title:"Reconciling with Wikibase",description:"The Wikidata reconciliation service for OpenRefine supports:",source:"@site/versioned_docs/version-3.6/manual/wikibase/reconciling.md",sourceDirName:"manual/wikibase",slug:"/manual/wikibase/reconciling",permalink:"/new-openrefine-website/docs/manual/wikibase/reconciling",draft:!1,editUrl:"https://github.com/OpenRefine/OpenRefine/edit/master/docs/versioned_docs/version-3.6/manual/wikibase/reconciling.md",tags:[],version:"3.6",lastUpdatedBy:"Antonin Delpeuch",lastUpdatedAt:1662887291,formattedLastUpdatedAt:"Sep 11, 2022",frontMatter:{id:"reconciling",title:"Reconciling with Wikibase",sidebar_label:"Reconciling with Wikibase"},sidebar:"version-3.6/docs",previous:{title:"Connecting to Wikibase",permalink:"/new-openrefine-website/docs/manual/wikibase/configuration"},next:{title:"Schema alignment",permalink:"/new-openrefine-website/docs/manual/wikibase/schema-alignment"}},p={},u=[{value:"Language settings",id:"language-settings",level:2},{value:"Restricting matches by type",id:"restricting-matches-by-type",level:2},{value:"Reconciling via unique identifiers",id:"reconciling-via-unique-identifiers",level:2},{value:"Property paths, special properties, and subfields",id:"property-paths-special-properties-and-subfields",level:2}],d={toc:u};function h(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Wikidata ",(0,r.kt)("a",{parentName:"p",href:"reconciling"},"reconciliation service")," for OpenRefine ",(0,r.kt)("a",{parentName:"p",href:"https://reconciliation-api.github.io/testbench/"},"supports"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A large number of potential types to reconcile against"),(0,r.kt)("li",{parentName:"ul"},"Previewing and viewing entities"),(0,r.kt)("li",{parentName:"ul"},"Suggesting entities, types, and properties"),(0,r.kt)("li",{parentName:"ul"},"Augmenting your project with more information pulled from Wikidata. ")),(0,r.kt)("p",null,"You can find documentation and further resources on the reconciliation API ",(0,r.kt)("a",{parentName:"p",href:"https://wikidata.reconci.link/"},"here"),"."),(0,r.kt)("p",null,"For the most part, Wikidata reconciliation behaves the same way other reconciliation services do, but there are a few processes and features specific to Wikidata. "),(0,r.kt)("h2",{id:"language-settings"},"Language settings"),(0,r.kt)("p",null,"You can install a version of the Wikidata reconciliation service that uses your language. First, you need the language code: this is the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_Wikipedias"},"two-letter code found on this list"),", or in the domain name of the desired Wikipedia/Wikidata (for instance, \u201cfr\u201d if your Wikipedia is ",(0,r.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/"},"https://fr.wikipedia.org/wiki/"),")."),(0,r.kt)("p",null,"Then, open the reconciliation window (under ",(0,r.kt)("span",{class:"menuItems"},"Reconcile")," \u2192 ",(0,r.kt)("span",{class:"menuItems"},"Start reconciling..."),") and click ",(0,r.kt)("span",{class:"menuItems"},"Add Standard Service"),". The URL to enter is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://wikidata.reconci.link/fr/api"),", where \u201cfr\u201d is your desired language code."),(0,r.kt)("p",null,"When reconciling using this interface, items and properties will be displayed in your chosen language if the label is available. The matching score of the reconciliation is not influenced by your choice of language for the service: items are matched by considering all labels and returning the best possible match. The language of your dataset is also irrelevant to your choice of language for the reconciliation service; it simply determines which language labels to return based on the entity chosen."),(0,r.kt)("h2",{id:"restricting-matches-by-type"},"Restricting matches by type"),(0,r.kt)("p",null,"In Wikidata, types are items themselves. For instance, the ",(0,r.kt)("a",{parentName:"p",href:"https://www.wikidata.org/wiki/Q1377"},"university of Ljubljana (Q1377)")," has the type ",(0,r.kt)("a",{parentName:"p",href:"https://www.wikidata.org/wiki/Q875538"},"public university (Q875538)"),", using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.wikidata.org/wiki/Property:P31"},"instance of (P31)")," property. Types can be subclasses of other types, using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.wikidata.org/wiki/Property:P279"},"subclass of (P279)")," property. For instance, ",(0,r.kt)("a",{parentName:"p",href:"https://www.wikidata.org/wiki/Q875538"},"public university (Q875538)")," is a subclass of ",(0,r.kt)("a",{parentName:"p",href:"https://www.wikidata.org/wiki/Q3918"},"university (Q3918)"),". You can visualize these structures with the ",(0,r.kt)("a",{parentName:"p",href:"https://angryloki.github.io/wikidata-graph-builder/"},"Wikidata Graph Builder"),". "),(0,r.kt)("p",null,"When you select or enter a type for reconciliation, OpenRefine will include that type and all of its subtypes. For instance, if you select ",(0,r.kt)("a",{parentName:"p",href:"https://www.wikidata.org/wiki/Q3918"},"university (Q3918)"),", then ",(0,r.kt)("a",{parentName:"p",href:"https://www.wikidata.org/wiki/Q1377"},"university of Ljubljana (Q1377)")," will be a possible match, though that item isn't directly linked to Q3918 - because it is directly linked to Q875538, the subclass of Q3918."),(0,r.kt)("p",null,"Some items and types may not yet be set as an instance or subclass of anything (because Wikidata is crowdsourced). If you restrict reconciliation to a type, items without the chosen type will not appear in the results, except as a fallback, and will have a lower score."),(0,r.kt)("h2",{id:"reconciling-via-unique-identifiers"},"Reconciling via unique identifiers"),(0,r.kt)("p",null,'You can supply a column of unique identifiers (in the form "Q###" for entities) directly to Wikidata in order to pull more data, but ',(0,r.kt)("a",{parentName:"p",href:"reconciling#reconciling-with-unique-identifiers"},"these strings will not be \u201creconciled\u201d against the external dataset"),". Apply the operation ",(0,r.kt)("span",{class:"menuItems"},"Reconcile")," \u2192 ",(0,r.kt)("span",{class:"menuItems"},"Use values as identifiers"),' on your column of QIDs. All cells will appear as dark blue \u201cconfirmed\u201d matches. Some of the \u201cmatches\u201d may be errors, which you will need to hover over or click on to identify. You cannot use this to reconcile properties (in the form "P###").'),(0,r.kt)("p",null,"If the identifier you submit is assigned to multiple Wikidata items (because Wikidata is crowdsourced), all of the items are returned as candidates, with none automatically matched."),(0,r.kt)("h2",{id:"property-paths-special-properties-and-subfields"},"Property paths, special properties, and subfields"),(0,r.kt)("p",null,"Wikidata's hierarchical property structure can be called by using property paths (using |, /, and . symbols). Labels, aliases, descriptions, and sitelinks can also be accessed. You can also match values against subfields, such as latitude and longitude subfields of a geographical coordinate."),(0,r.kt)("p",null,"For information on how to do this, read the ",(0,r.kt)("a",{parentName:"p",href:"https://wikidata.reconci.link/#documentation"},"documentation and further resources here"),"."))}h.isMDXComponent=!0}}]);