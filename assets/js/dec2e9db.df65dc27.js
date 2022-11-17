"use strict";(self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[]).push([[3606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],l={id:"columnediting",title:"Column editing",sidebar_label:"Column editing"},s=void 0,u={unversionedId:"manual/columnediting",id:"version-3.6/manual/columnediting",title:"Column editing",description:"Overview",source:"@site/versioned_docs/version-3.6/manual/columnediting.md",sourceDirName:"manual",slug:"/manual/columnediting",permalink:"/new-openrefine-website/docs/manual/columnediting",draft:!1,editUrl:"https://github.com/OpenRefine/OpenRefine/edit/master/docs/versioned_docs/version-3.6/manual/columnediting.md",tags:[],version:"3.6",lastUpdatedBy:"Antonin Delpeuch",lastUpdatedAt:1662887291,formattedLastUpdatedAt:"Sep 11, 2022",frontMatter:{id:"columnediting",title:"Column editing",sidebar_label:"Column editing"},sidebar:"version-3.6/docs",previous:{title:"Cell editing",permalink:"/new-openrefine-website/docs/manual/cellediting"},next:{title:"Transposing",permalink:"/new-openrefine-website/docs/manual/transposing"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Splitting or joining",id:"splitting-or-joining",level:2},{value:"Split into several columns",id:"split-into-several-columns",level:3},{value:"Join columns",id:"join-columns",level:3},{value:"Add column based on this column",id:"add-column-based-on-this-column",level:2},{value:"Add column by fetching URLs",id:"add-column-by-fetching-urls",level:2},{value:"Common errors",id:"common-errors",level:3},{value:"Renaming, removing, and moving",id:"renaming-removing-and-moving",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Column editing contains some of the most powerful data-improvement methods in OpenRefine. The operations in the ",(0,i.kt)("span",{class:"menuItems"},"Edit column")," menu involve using one column of data to add entirely new columns and fields to your dataset. "),(0,i.kt)("h2",{id:"splitting-or-joining"},"Splitting or joining"),(0,i.kt)("p",null,"Many users find that they frequently need to make their data more granular: for example, splitting a \u201cFirstname Lastname\u201d column into two columns, one for first names and one for last names. The reverse is also often true: you may have several columns of category values that you want to join into one \u201ccategory\u201d column.\n."),(0,i.kt)("h3",{id:"split-into-several-columns"},"Split into several columns"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A screenshot of the settings window for splitting columns.",src:n(773).Z,width:"610",height:"331"})),(0,i.kt)("p",null,"You can find this operation at ",(0,i.kt)("span",{class:"menuItems"},"Edit column")," \u2192 ",(0,i.kt)("span",{class:"menuItems"},"Split into several columns..."),". Splitting one column into several columns requires you to identify the character, string lengths, or evaluating expression you want to split on. Just like ",(0,i.kt)("a",{parentName:"p",href:"cellediting#split-multi-valued-cells"},"splitting multi-valued cells into rows"),", splitting cells into multiple columns will remove the separator character or string you indicate. Splitting by lengths will discard any information that comes after the specified total length. "),(0,i.kt)("p",null,"You can also specify a maximum number of new columns to be made: separator characters after this limit will be ignored, and the remaining characters will end up in the last column."),(0,i.kt)("p",null,"New columns will be named after the original column, with a number: \u201cLocation 1,\u201d \u201cLocation 2,\u201d etc. You can choose to remove the original column with this operation, and you can have ",(0,i.kt)("a",{parentName:"p",href:"exploring#data-types"},"data types")," identified where possible. This function will work best with converting strings to numbers, and may not work with ",(0,i.kt)("a",{parentName:"p",href:"exploring#dates"},"dates"),"."),(0,i.kt)("h3",{id:"join-columns"},"Join columns"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A screenshot of the settings window for joining columns.",src:n(2358).Z,width:"806",height:"469"})),(0,i.kt)("p",null,"You can join columns by selecting ",(0,i.kt)("span",{class:"menuItems"},"Edit column")," \u2192 ",(0,i.kt)("span",{class:"menuItems"},"Join columns..."),". All the columns currently in your dataset will appear in the pop-up window. You can select or un-select all the columns you want to join, and drag columns to put them in the order you want to join them in. You will define a separator character (optional) and define a string to insert into empty cells (nulls). "),(0,i.kt)("p",null,"The joined data will appear in the column you originally selected, or you can create a new column for this content and specify a name. You can delete all the columns that were used in this join operation. "),(0,i.kt)("h2",{id:"add-column-based-on-this-column"},"Add column based on this column"),(0,i.kt)("p",null,"Selecting ",(0,i.kt)("span",{class:"menuItems"},"Edit column")," \u2192 ",(0,i.kt)("span",{class:"menuItems"},"Add column based on this column...")," will open up an ",(0,i.kt)("a",{parentName:"p",href:"expressions"},"expressions")," window where you can transform the data from this column (using ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"), or write a more complex expression that takes information from any number of columns or from external sources. "),(0,i.kt)("p",null,"Expressions used in this operation will rely on your knowledge of variables. You can learn more in the ",(0,i.kt)("a",{parentName:"p",href:"expressions#variables"},"Expressions section on variables"),"."),(0,i.kt)("p",null,"The simplest way to use this operation is simply leave the default ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," in the expression field, to create an exact copy of your column. For a column of ",(0,i.kt)("a",{parentName:"p",href:"reconciling"},"reconciled data"),", you can use the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"cell")," instead, to copy both the original string and the existing reconciliation data. This will include matched values, candidates, and new items. "),(0,i.kt)("p",null,"One useful expression is to create a column based on concatenating (merging) two other columns. Select either of the source columns, choose ",(0,i.kt)("span",{class:"menuItems"},"Edit column")," \u2192 ",(0,i.kt)("span",{class:"menuItems"},"Add column based on this column..."),", name your new column, and use the following format in the expression window:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cells["Column 1"].value + cells["Column 2"].value\n')),(0,i.kt)("p",null,"If your column names do not contain spaces, you can use the following format instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cells.Column1.value + cells.Column2.value\n")),(0,i.kt)("p",null,"If you are in records mode instead of rows mode, you can concatenate using the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"row.record.cells.Column1.value + row.record.cells.Column2.value\n")),(0,i.kt)("p",null,"You may wish to add separators or spaces, or modify your input during this operation with more advanced expressions. "),(0,i.kt)("h2",{id:"add-column-by-fetching-urls"},"Add column by fetching URLs"),(0,i.kt)("p",null,"Through the ",(0,i.kt)("span",{class:"menuItems"},"Add column by fetching URLs")," function, OpenRefine supports the ability to fetch HTML or data from web pages or services. In this operation you will be building URL strings based on your column of data, by using ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," to insert a relevant substring. Your chosen column needs to contains parts of paths to valid HTML pages or files online. "),(0,i.kt)("p",null,"If you have a column of URLs and want to fetch the information that they point to, you can simply run the expression as ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),". If your column has, for example, unique identifiers for Wikidata entities (numerical values starting with Q), you can download the JSON-formatted metadata about each entity with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"https://www.wikidata.org/wiki/Special:EntityData/" + value + ".json"\n')),(0,i.kt)("p",null,"or whatever metadata format you prefer. Information about the format options in Wikidata can be found ",(0,i.kt)("a",{parentName:"p",href:"https://www.wikidata.org/wiki/Wikidata:Data_access"},"here"),". The service you are fetching data from may have similar documentation on its provided options."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A screenshot of the settings window for fetching URLs.",src:n(4729).Z,width:"709",height:"666"})),(0,i.kt)("p",null,"This service is more useful when getting metadata files instead of HTML, but you may wish to work with a page\u2019s entire HTML contents and then parse out information from that. "),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Be aware that the fetching process can take quite some time and that servers may not want to fulfill hundreds or thousands of page requests in seconds. Fetching allows you to set a \u201cthrottle delay\u201d which determines the amount of time between requests. The default is 5 seconds per row in your dataset (5000 milliseconds). We recommend leaving this at 1000 or greater. ")),(0,i.kt)("p",null,"Note the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before pressing \u201cOK,\u201d copy and paste a URL or two from the preview and test them in another browser tab to make sure they work."),(0,i.kt)("li",{parentName:"ul"},"In some situations you may need to set ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"},"HTTP request headers"),". To set these, click the small \u201cShow\u201d button next to \u201cHTTP headers to be used when fetching URLs\u201d in the settings window. The authorization credentials get logged in your operation history in plain text, which may be a security concern for you. You can set the following request headers:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"},"User-Agent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept"},"Accept")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization"},"Authorization"))))),(0,i.kt)("h3",{id:"common-errors"},"Common errors"),(0,i.kt)("p",null,"When OpenRefine attempts to fetch information from a web service, it can fail in a variety of ways. The following information is meant to help troubleshoot and fix problems encountered when using this function."),(0,i.kt)("p",null,"First, make sure that your fetching operation is storing errors (check \u201cstore error\u201d). Then run the fetch and look at the error messages. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u201cHTTP error 403 : Forbidden\u201d")," can be simply down to you not having access to the URL you are trying to use. If you can access the same URL with your browser, the remote site may be blocking OpenRefine because it doesn't recognize its request as valid. Changing the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"},"User-Agent")," request header may help. If you believe you should have access to a site but are \u201cforbidden,\u201d you may wish to contract the administrators."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u201cHTTP error 404 : Not Found\u201d")," indicates that the information you are requesting does not exist, perhaps due to a problem with your cell values if it only happening in certain rows. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u201cHTTP error 500 : Internal Server Error\u201d")," indicates the remote server is having a problem filling your request. You may wish to simply wait and try again later, or double-check the URLs. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u201cerror: javax.net.ssl.SSLHandshakeException: Received fatal alert: handshake_failure\u201d")," can occur when you are trying to retrieve information over HTTPS but the remote site is using an encryption not supported by the Java virtual machine being used by OpenRefine."),(0,i.kt)("p",null,"You can check which encryption methods are supported by your OpenRefine/Java installation by using a service such as ",(0,i.kt)("strong",{parentName:"p"},"How's my SSL"),". Add the URL ",(0,i.kt)("inlineCode",{parentName:"p"},"https://www.howsmyssl.com/a/check")," to an OpenRefine cell and run \u201cAdd column by fetching URLs\u201d on it, which will provide a description of the SSL client being used. "),(0,i.kt)("p",null,"You can try installing additional encryption supports by installing the ",(0,i.kt)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/javase-jce8-downloads.html"},"Java Cryptography Extension"),".\nNote that for Mac users and for Windows users with the OpenRefine installation with bundled JRE, these updated cipher suites need to be dropped into the Java install within the OpenRefine application: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On Mac, it will look something like ",(0,i.kt)("inlineCode",{parentName:"li"},"/Applications/OpenRefine.app/Contents/PlugIns/jdk1.8.0_60.jdk/Contents/Home/jre/lib/security"),". "),(0,i.kt)("li",{parentName:"ul"},"On Windows: ",(0,i.kt)("inlineCode",{parentName:"li"},"\\server\\target\\jre\\lib\\security"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u201cjavax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed\u201d")," can appear when the remote site is using an HTTPS certificate not trusted by your local Java installation. You will need to make sure that the certificate, or (more likely) the root certificate, is trusted. "),(0,i.kt)("p",null,"The list of trusted certificates is stored in an encrypted file called ",(0,i.kt)("inlineCode",{parentName:"p"},"cacerts")," in your local Java installation. This can be read and updated by a tool called \u201ckeytool.\u201d You can find directions on how to add a security certificate to the list of trusted certificates for a Java installation ",(0,i.kt)("a",{parentName:"p",href:"http://magicmonster.com/kb/prg/java/ssl/pkix_path_building_failed.html"},"here")," and ",(0,i.kt)("a",{parentName:"p",href:"http://javarevisited.blogspot.co.uk/2012/03/add-list-certficates-java-keystore.html"},"here"),"."),(0,i.kt)("p",null,"Note that for Mac users and for Windows users with the OpenRefine installation with bundled JRE, the ",(0,i.kt)("inlineCode",{parentName:"p"},"cacerts")," file within the OpenRefine application needs to be updated. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On Mac, it will look something like ",(0,i.kt)("inlineCode",{parentName:"li"},"/Applications/OpenRefine.app/Contents/PlugIns/jdk1.8.0_60.jdk/Contents/Home/jre/lib/security/cacerts"),"."),(0,i.kt)("li",{parentName:"ul"},"On Windows: ",(0,i.kt)("inlineCode",{parentName:"li"},"\\server\\target\\jre\\lib\\security\\"),".")),(0,i.kt)("h2",{id:"renaming-removing-and-moving"},"Renaming, removing, and moving"),(0,i.kt)("p",null,"Every column's ",(0,i.kt)("span",{class:"menuItems"},"Edit column")," dropdown contains options to move it (to the beginning, end, left, or right), rename it, and delete it.\nThese operations can be undone, but a removed column cannot be restored later if you keep modifying your data. If you wish to temporarily hide a column, go to ",(0,i.kt)("span",{class:"menuItems"},(0,i.kt)("a",{parentName:"p",href:"sortview#view"},"View"))," \u2192 ",(0,i.kt)("span",{class:"menuItems"},"Collapse this column")," instead. "),(0,i.kt)("p",null,"Be cautious about moving columns in ",(0,i.kt)("a",{parentName:"p",href:"cellediting#rows-vs-records"},"records mode"),": if you change the first column in your dataset (the key column), your records may change in unintended ways."))}m.isMDXComponent=!0},2358:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/columnjoin-f476ab2dfe971ab598396a45fa592964.png"},773:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/columnsplit-bc8511bceccbf30aef2bd74319b610d5.png"},4729:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/fetchingURLs-50f0ac40e9097a73fd09d034e10b35b3.png"}}]);