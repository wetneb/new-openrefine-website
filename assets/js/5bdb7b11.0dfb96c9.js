"use strict";(self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[]).push([[725],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(o),d=n,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||r;return o?a.createElement(m,i(i({ref:t},u),{},{components:o})):a.createElement(m,i({ref:t},u))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5647:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=o(7462),n=o(3366),r=(o(7294),o(3905)),i=["components"],l={id:"exporting",title:"Exporting your work",sidebar_label:"Exporting"},s=void 0,p={unversionedId:"manual/exporting",id:"version-3.4/manual/exporting",title:"Exporting your work",description:"Overview",source:"@site/versioned_docs/version-3.4/manual/exporting.md",sourceDirName:"manual",slug:"/manual/exporting",permalink:"/new-openrefine-website/docs/3.4/manual/exporting",draft:!1,editUrl:"https://github.com/OpenRefine/OpenRefine/edit/master/docs/versioned_docs/version-3.4/manual/exporting.md",tags:[],version:"3.4",lastUpdatedBy:"Antonin Delpeuch",lastUpdatedAt:1662887291,formattedLastUpdatedAt:"Sep 11, 2022",frontMatter:{id:"exporting",title:"Exporting your work",sidebar_label:"Exporting"},sidebar:"version-3.4/docs",previous:{title:"Jython & Clojure",permalink:"/new-openrefine-website/docs/3.4/manual/jythonclojure"},next:{title:"Troubleshooting",permalink:"/new-openrefine-website/docs/3.4/manual/troubleshooting"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Export data",id:"export-data",level:2},{value:"Custom tabular exporter",id:"custom-tabular-exporter",level:3},{value:"SQL exporter",id:"sql-exporter",level:3},{value:"Templating exporter",id:"templating-exporter",level:3},{value:"Export a project",id:"export-a-project",level:2},{value:"Export operations",id:"export-operations",level:2}],h={toc:c};function d(e){var t=e.components,l=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Once your dataset is ready, you will need to get it out of OpenRefine and into the system of your choice. OpenRefine outputs a number of file formats, can upload your data directly into Google Sheets, and can create or update statements on Wikidata."),(0,r.kt)("p",null,"You can also ",(0,r.kt)("a",{parentName:"p",href:"#export-a-project"},"export your full project data")," so that it can be opened by someone else using OpenRefine (or yourself, on another computer)."),(0,r.kt)("h2",{id:"export-data"},"Export data"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A screenshot of the Export dropdown.",src:o(9927).Z,width:"356",height:"464"})),(0,r.kt)("p",null,"Many of the options only export data in the current view - that is, with current filters and facets applied. Some will give you the choice to export your entire dataset or just the currently-viewed rows."),(0,r.kt)("p",null,"To export data from a project, click the ",(0,r.kt)("span",{class:"menuItems"},"Export")," dropdown button in the top right corner and pick the format you want. Your options are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tab-separated value (TSV) or Comma-separated value (CSV)"),(0,r.kt)("li",{parentName:"ul"},"HTML-formatted table"),(0,r.kt)("li",{parentName:"ul"},"Excel spreadsheet (XLS or XLSX)"),(0,r.kt)("li",{parentName:"ul"},"Open Document Format (ODF) spreadsheet (ODS)"),(0,r.kt)("li",{parentName:"ul"},"Upload to Google Sheets (requires ",(0,r.kt)("a",{parentName:"li",href:"starting#google-sheet-from-drive"},"Google account authorization"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-tabular-exporter"},"Custom tabular exporter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sql-statement-exporter"},"SQL statement exporter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#templating-exporter"},"Templating exporter"),", which generates JSON by default")),(0,r.kt)("p",null,"You can also export reconciled data to Wikidata, or export your Wikidata schema for future use with other OpenRefine projects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"wikidata#upload-edits-to-wikidata"},"Upload edits to Wikidata")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"wikidata#quickstatements-export"},"Export to QuickStatements")," (version 1)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"wikidata#import-and-export-schema"},"Export Wikidata schema"))),(0,r.kt)("h3",{id:"custom-tabular-exporter"},"Custom tabular exporter"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A screenshot of the custom tabular content tab.",src:o(7531).Z,width:"797",height:"573"})),(0,r.kt)("p",null,"With the custom tabular exporter, you can choose which of your data to export, the separator you wish to use, and whether you'd like to download the result to your computer or upload it into a Google Sheet. "),(0,r.kt)("p",null,"On the ",(0,r.kt)("span",{class:"tabLabels"},"Content")," tab, you can drag and drop the columns appearing in the column list to reorder the output. The options for reconciled and date data are applied to each column individually. "),(0,r.kt)("p",null,"This exporter is especially useful with reconciled data, as you can choose whether you wish to output the cells' original values, the matched values, or the matched IDs. Ouputting \u201cmatch entity's name\u201d, \u201cmatched entity's ID\u201d, or \u201ccell's content\u201d will output, respectively, the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"cell.recon.match.name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cell.recon.match.id"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"cell.value"),". "),(0,r.kt)("p",null,"\u201cOutput nothing for unmatched cells\u201d will export empty cells for both newly-created matches and cells with no chosen matches. \u201cLink to matched entity's page\u201d will produce hyperlinked text in an HTML table output, but have no effect in other formats."),(0,r.kt)("p",null,"At this time, the date-formatting options in this window do not work. You can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/issues/3368"},"keep track of this issue on Github"),".\nIn the future, you will be able to choose how to ",(0,r.kt)("a",{parentName:"p",href:"exploring#dates"},"output date-formatted cells"),". You can create a custom date output by using ",(0,r.kt)("a",{parentName:"p",href:"grelfunctions#todateo-b-monthfirst-s-format1-s-format2-"},"formatting according to the SimpleDateFormat parsing key found here"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A screenshot of the custom tabular file download tab.",src:o(3192).Z,width:"798",height:"376"})),(0,r.kt)("p",null,"On the ",(0,r.kt)("span",{class:"tabLabels"},"Download")," tab, you can generate a preview of how the first ten rows of your dataset will output. If you do not choose one of the file formats on the right, the ",(0,r.kt)("span",{class:"buttonLabels"},"Download")," button will generate a text file. On the ",(0,r.kt)("span",{class:"tabLabels"},"Upload")," tab, you can create a new Google Sheet. "),(0,r.kt)("p",null,"With the ",(0,r.kt)("span",{class:"tabLabels"},"Option Code")," tab, you can copy JSON of your current custom settings to reuse on another export, or you can paste in existing JSON settings to apply to the current project. "),(0,r.kt)("h3",{id:"sql-exporter"},"SQL exporter"),(0,r.kt)("p",null,"The SQL exporter creates a SQL statement containing the data you\u2019ve exported, which you can use to overwrite or add to an existing database. Choosing ",(0,r.kt)("span",{class:"menuItems"},"Export")," \u2192 ",(0,r.kt)("span",{class:"menuItems"},"SQL exporter")," will bring up a window with two tabs: one to define what data to output, and another to modify other aspects of the SQL statement, with options to preview and download the statement.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A screenshot of the SQL statement content window.",src:o(6315).Z,width:"800",height:"453"})),(0,r.kt)("p",null,"The ",(0,r.kt)("span",{class:"tabLabels"},"Content"),' tab allows you to craft your dataset into an SQL table. From here, you can choose which columns to export, the data type to export for each (or choose "VARCHAR"), and the maximum character length for each field (if applicable based on the data type). You can set a default value for empty cells after unchecking \u201cAllow null\u201d in one or more columns. '),(0,r.kt)("p",null,"With this output tool, you can choose whether to output only currently visible rows, or all the rows in your dataset, as well as whether to include empty rows. The option to \u201cTrim column names\u201d will remove their whitespace characters. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A screenshot of the SQL statement download window.",src:o(5538).Z,width:"797",height:"365"})),(0,r.kt)("p",null,"The ",(0,r.kt)("span",{class:"tabLabels"},"Download")," tab allows you to finalize your complete SQL statement. "),(0,r.kt)("span",{class:"fieldLabels"},"Include schema")," means that you will start your statement with the creation of a table. Without that, you will only have an INSERT statement.",(0,r.kt)("span",{class:"fieldLabels"},"Include content")," means including the INSERT statement with data from your project. Without that, you will only create empty columns.",(0,r.kt)("p",null,"You can include DROP and IF EXISTS if you require them, and set a name for the table to which the statement will refer."),(0,r.kt)("p",null,"You can then preview your statement, which will open up a new browser tab/window showing a statement with the first ten rows of your data (if included), or you can save a ",(0,r.kt)("inlineCode",{parentName:"p"},".sql")," file to your computer. "),(0,r.kt)("h3",{id:"templating-exporter"},"Templating exporter"),(0,r.kt)("p",null,"If you pick ",(0,r.kt)("span",{class:"menuItems"},"Templating\u2026")," from the ",(0,r.kt)("span",{class:"menuItems"},"Export")," dropdown menu, you can \u201croll your own\u201d exporter. This is useful for formats that we don't support natively yet, or won't support. The Templating exporter generates JSON by default. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A screenshot of the Templating exporter generating JSON by default.",src:o(2673).Z,width:"895",height:"675"})),(0,r.kt)("p",null,"The Templating Export window allows you to set your own separators, prefix, and suffix to create a complete dataset in the language of your choice. In the ",(0,r.kt)("span",{class:"fieldLabels"},"Row template")," section, you can choose which columns to generate from each row by calling them with ",(0,r.kt)("a",{parentName:"p",href:"expressions#variables"},"variables"),". "),(0,r.kt)("p",null,"This can be used to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"output ",(0,r.kt)("a",{parentName:"li",href:"expressions#reconciliation"},"reconciliation data"),", such as ",(0,r.kt)("inlineCode",{parentName:"li"},'cells["ColumnName"].recon.match.name')),(0,r.kt)("li",{parentName:"ul"},"create multiple columns of output from different ",(0,r.kt)("a",{parentName:"li",href:"expressions#variables"},"member fields")," of a single project column"),(0,r.kt)("li",{parentName:"ul"},"employ ",(0,r.kt)("a",{parentName:"li",href:"expressions"},"expressions")," to modify data for output: for example, ",(0,r.kt)("inlineCode",{parentName:"li"},'cells["ColumnName"].value.toUppercase()'),". ")),(0,r.kt)("p",null,"Anything that appears inside doubled curly braces ({{ }}) is treated as a GREL expression; anything outside is generated as straight text. You can use Jython or Clojure by declaring it at the start:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{{jython:return cells["ColumnName"].value}}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that some syntax is different in this tool than elsewhere in OpenRefine: a forward slash must be escaped with a backslash, while other characters do not need escaping. You cannot, at this time, include a closing curly brace (}) anywhere in your expression, or it will cause it to malfunction.")),(0,r.kt)("p",null,"You can include ",(0,r.kt)("a",{parentName:"p",href:"expressions#regular-expressions"},"regular expressions")," as usual (inside forward slashes, with any GREL function that accepts them). For example, you could output a version of your cells with punctuation removed, using an expression such as "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{{jsonize(cells["ColumnName"].value.replaceChars("/[.!?$&,/]/",""))}}\n')),(0,r.kt)("p",null,'You could also simply output a plain-text document inserting data from your project into sentences: for example, "In ',(0,r.kt)("inlineCode",{parentName:"p"},'{{cells["Year"].value}}')," we received ",(0,r.kt)("inlineCode",{parentName:"p"},'{{cells["RequestCount"].value}}'),' requests."'),(0,r.kt)("p",null,"You can use the shorthand ",(0,r.kt)("inlineCode",{parentName:"p"},"${ColumnName}")," (no need for quotes) to insert column values directly. You cannot use this inside an expression, because of the closing curly brace."),(0,r.kt)("p",null,"If your projects is in records mode, the ",(0,r.kt)("span",{class:"fieldLabels"},"Row separator")," field will insert a separator between records, rather than individual rows. Rows inside a single record will be directly appended to one another as per the content in the ",(0,r.kt)("span",{class:"fieldLabels"},"Row Template")," field. "),(0,r.kt)("p",null,"Once you have created your template, you may wish to save the text you produced in each field, in order to reuse it in the future. Once you click ",(0,r.kt)("span",{class:"buttonLabels"},"Export")," OpenRefine will output a simple ",(0,r.kt)("inlineCode",{parentName:"p"},".txt")," file, and your template will be discarded."),(0,r.kt)("p",null,"We have recipes on using the Templating exporter to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/wiki/Recipes#12-templating-exporter"},"produce several different formats"),"."),(0,r.kt)("h2",{id:"export-a-project"},"Export a project"),(0,r.kt)("p",null,"You can share a project in progress with another computer, a colleague, or with someone who wants to check your history. This can be useful for showing that your data cleanup didn\u2019t distort or manipulate the information in any way. Once you have exported a project, another OpenRefine installation can ",(0,r.kt)("a",{parentName:"p",href:"starting#import-a-project"},"import it as a new project"),". "),(0,r.kt)("p",null,"You can either save it locally or upload it to Google Drive (which requires you to authorize a Google account)."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"OpenRefine project archives contain confidential data from previous steps, which will still be accessible to anyone who has the archive. If you are hoping to keep your original dataset hidden for privacy reasons, such as using OpenRefine to anonymize information, do not share your project archive.")),(0,r.kt)("p",null,"To save your project archive locally: from the ",(0,r.kt)("span",{class:"menuItems"},"Export")," dropdown, select ",(0,r.kt)("span",{class:"menuItems"},"OpenRefine project archive to file"),". OpenRefine exports your full project with all of its history. It does not export any current views or applied facets. Existing reconciliation information will be preserved, but the importing computer will need to add the same reconciliation services to keep working with that data. "),(0,r.kt)("p",null,"OpenRefine exports files in ",(0,r.kt)("inlineCode",{parentName:"p"},".tar.gz")," format. You can rename the file when you save it; otherwise it will bear the project name. "),(0,r.kt)("p",null,"To save your project archive to Google Drive: from the ",(0,r.kt)("span",{class:"menuItems"},"Export")," dropdown, select ",(0,r.kt)("span",{class:"menuItems"},"OpenRefine project archive to Google Drive..."),". OpenRefine will not share the link with you, only confirm that the file was uploaded."),(0,r.kt)("h2",{id:"export-operations"},"Export operations"),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"running#reusing-operations"},"save and re-apply the history of any project")," (all the operations shown in the Undo/Redo tab). This creates JSON that you can save for later reuse on another OpenRefine project."))}d.isMDXComponent=!0},7531:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/custom-tabular-exporter-b4ac6242db5a952059ef9dd13a8494e7.png"},3192:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/custom-tabular-exporter2-2f836213de716bccb06ec8cee104e91f.png"},9927:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/export-menu-27006003ed327cd94d3bed7e45fce91e.png"},6315:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/sql-exporter-3acb07147bfc14b8eb555db80f428446.png"},5538:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/sql-exporter2-4a0cb8ca859244b178e31378f1e22032.png"},2673:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/templating-exporter-b96447293077fcab7ea82729443bff20.png"}}]);