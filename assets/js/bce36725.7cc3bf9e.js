"use strict";(self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[]).push([[1301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"architecture",title:"Architecture",sidebar_label:"Architecture"},l=void 0,c={unversionedId:"technical-reference/architecture",id:"technical-reference/architecture",title:"Architecture",description:"OpenRefine is a web application, but is designed to be run locally on your own machine. The server-side maintains states of the data (undo/redo history, long-running processes, etc.) while the client-side maintains states of the user interface (facets and their selections, view pagination, etc.). The client-side makes GET and POST ajax calls to cause changes to the data and to fetch data and data-related states from the server-side.",source:"@site/docs/technical-reference/architecture.md",sourceDirName:"technical-reference",slug:"/technical-reference/architecture",permalink:"/new-openrefine-website/docs/next/technical-reference/architecture",draft:!1,editUrl:"https://github.com/OpenRefine/OpenRefine/edit/master/docs/docs/technical-reference/architecture.md",tags:[],version:"current",lastUpdatedBy:"Antonin Delpeuch",lastUpdatedAt:1662887291,formattedLastUpdatedAt:"Sep 11, 2022",frontMatter:{id:"architecture",title:"Architecture",sidebar_label:"Architecture"},sidebar:"docs",previous:{title:"Technical Reference Index",permalink:"/new-openrefine-website/docs/next/technical-reference/technical-reference-index"},next:{title:"Clustering methods in-depth",permalink:"/new-openrefine-website/docs/next/technical-reference/clustering-in-depth"}},h={},d=[{value:"Technology stack",id:"technology-stack",level:2},{value:"Server-side architecture",id:"server-side-architecture",level:2},{value:"Projects",id:"projects",level:3},{value:"Data Model",id:"data-model",level:3},{value:"Column Model",id:"column-model",level:4},{value:"Column Groups",id:"column-groups",level:5},{value:"Changes, History, Processes, and Operations",id:"changes-history-processes-and-operations",level:3},{value:"Client-side architecture",id:"client-side-architecture",level:2},{value:"Importing architecture",id:"importing-architecture",level:3},{value:"The Index Page and Action Areas",id:"the-index-page-and-action-areas",level:3},{value:"The Create Project Action Area",id:"the-create-project-action-area",level:3},{value:"Importing Controllers",id:"importing-controllers",level:4},{value:"Data Source Selection UIs",id:"data-source-selection-uis",level:4},{value:"File Selection Panel",id:"file-selection-panel",level:4},{value:"Parsing UI Panel",id:"parsing-ui-panel",level:4},{value:"Server-side Components",id:"server-side-components",level:3},{value:"ImportingController",id:"importingcontroller",level:4},{value:"UrlRewriter",id:"urlrewriter",level:4},{value:"FormatGuesser",id:"formatguesser",level:4},{value:"ImportingParser",id:"importingparser",level:4},{value:"Faceted browsing architecture",id:"faceted-browsing-architecture",level:2},{value:"Engine Configuration",id:"engine-configuration",level:3},{value:"Server-Side Subsystem",id:"server-side-subsystem",level:3},{value:"Client-side subsystem",id:"client-side-subsystem",level:3}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"OpenRefine is a web application, but is designed to be run locally on your own machine. The server-side maintains states of the data (undo/redo history, long-running processes, etc.) while the client-side maintains states of the user interface (facets and their selections, view pagination, etc.). The client-side makes GET and POST ajax calls to cause changes to the data and to fetch data and data-related states from the server-side."),(0,o.kt)("p",null,"This architecture provides a good separation of concerns (data vs. UI); allows the use of familiar web technologies (HTML, CSS, Javascript) to implement user interface features; and enables the server side to be called by third-party software through standard GET and POST operations."),(0,o.kt)("h2",{id:"technology-stack"},"Technology stack"),(0,o.kt)("p",null,"The server-side part of OpenRefine is implemented in Java as one single servlet which is executed by the ",(0,o.kt)("a",{parentName:"p",href:"http://jetty.codehaus.org/jetty/"},"Jetty")," web server + servlet container. The use of Java strikes a balance between performance and portability across operating systems (there is very little OS-specific code and has mostly to do with starting the application)."),(0,o.kt)("p",null,"OpenRefine has no database. It uses its own in-memory data-store that is built up-front to be optimized for the operations required by faceted browsing and infinite undo."),(0,o.kt)("p",null,"The client-side part of OpenRefine is implemented in HTML, CSS and Javascript and uses the following libraries:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://jquery.com/"},"jQuery")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http:jqueryui.com/"},"jQueryUI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/recurser/jquery-i18n"},"Recurser jquery-i18n"))),(0,o.kt)("p",null,"The functional extensibility of OpenRefine is provided by a fork of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/simile-butterfly"},"SIMILE Butterfly")," modular web application framework."),(0,o.kt)("p",null,"Several projects provide the functionality to read and write custom format files (POI, opencsv, JENA, marc4j)."),(0,o.kt)("p",null,"String clustering is provided by the ",(0,o.kt)("a",{parentName:"p",href:"http://code.google.com/p/simile-vicino/"},"SIMILE Vicino")," project."),(0,o.kt)("p",null,"OAuth functionality is provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mttkay/signpost"},"Signpost")," project."),(0,o.kt)("h2",{id:"server-side-architecture"},"Server-side architecture"),(0,o.kt)("p",null,"OpenRefine's server-side is written entirely in Java (",(0,o.kt)("inlineCode",{parentName:"p"},"main/src/"),") and its entry point is the Java servlet ",(0,o.kt)("inlineCode",{parentName:"p"},"com.google.refine.RefineServlet"),". By default, the servlet is hosted in the lightweight Jetty web server instantiated by ",(0,o.kt)("inlineCode",{parentName:"p"},"server/src/com.google.refine.Refine"),". Note that the server class itself is under ",(0,o.kt)("inlineCode",{parentName:"p"},"server/src/"),", not ",(0,o.kt)("inlineCode",{parentName:"p"},"main/src/"),"; this separation leaves the possibility of hosting ",(0,o.kt)("inlineCode",{parentName:"p"},"RefineServlet")," in a different servlet container."),(0,o.kt)("p",null,"The web server configuration is in ",(0,o.kt)("inlineCode",{parentName:"p"},"main/webapp/WEB-INF/web.xml"),"; that's where ",(0,o.kt)("inlineCode",{parentName:"p"},"RefineServlet")," is hooked up. ",(0,o.kt)("inlineCode",{parentName:"p"},"RefineServlet")," itself is simple: it just reacts to requests from the client-side by routing them to the right ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," class in the packages ",(0,o.kt)("inlineCode",{parentName:"p"},"com.google.refine.commands.**"),"."),(0,o.kt)("p",null,"As mentioned before, the server-side maintains states of the data, and the primary class involved is ",(0,o.kt)("inlineCode",{parentName:"p"},"com.google.refine.ProjectManager"),"."),(0,o.kt)("h3",{id:"projects"},"Projects"),(0,o.kt)("p",null,"In OpenRefine there's the concept of a workspace similar to that in Eclipse. When you run OpenRefine it manages projects within a single workspace, and the workspace is embodied in a file directory with sub-directories. The default workspace directories are listed in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/wiki/FAQ-Where-Is-Data-Stored"},"FAQs"),". You can get OpenRefine to use a different directory by specifying a -d parameter at the command line."),(0,o.kt)("p",null,"The class ",(0,o.kt)("inlineCode",{parentName:"p"},"ProjectManager")," is what manages the workspace. It keeps in memory the metadata of every project (in the class ",(0,o.kt)("inlineCode",{parentName:"p"},"ProjectMetadata"),"). This metadata includes the project's name and last modified date, and any other information necessary to present and let the user interact with the project as a whole. Only when the user decides to look at the project's data would ",(0,o.kt)("inlineCode",{parentName:"p"},"ProjectManager")," load the project's actual data. The separation of project metadata and data is to minimize the amount of stuff loaded into memory."),(0,o.kt)("p",null,"A project's ",(0,o.kt)("em",{parentName:"p"},"actual")," data includes the columns, rows, cells, reconciliation records, and history entries."),(0,o.kt)("p",null,"A project is loaded into memory when it needs to be displayed or modified, and it remains in memory until 1 hour after the last time it gets modified. Periodically the project manager tries to save modified projects, and it saves as many modified projects as possible within 30 seconds."),(0,o.kt)("h3",{id:"data-model"},"Data Model"),(0,o.kt)("p",null,"A project's data consists of"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"raw data"),": a list of rows, each row consisting of a list of cells"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"models")," on top of that raw data that give high-level presentation or interpretation of that data. This design lets the same raw data be viewed in different ways by different models, and let the models be changed without costly changes to the raw data.")),(0,o.kt)("h4",{id:"column-model"},"Column Model"),(0,o.kt)("p",null,"Cells in rows are not named and can only be addressed by their list position indices. So, a ",(0,o.kt)("em",{parentName:"p"},"column model")," is needed to give a name to each list position. The column model also stores other metadata for each column, including the type that cells in the column have been reconciled to and the overall reconciliation statistics of those cells."),(0,o.kt)("p",null,"Each column also acts as a cache for data computed from the raw data related to that column."),(0,o.kt)("p",null,"Columns in the column model can be removed and re-ordered without changing the raw data--the cells in the rows. This makes column removal and ordering operations really quick."),(0,o.kt)("h5",{id:"column-groups"},"Column Groups"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This feature is partially implemented, buggy and deprecated. It will be removed in OpenRefine 4.0.\nSee the following links for details:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenRefine/OpenRefine/issues/5122"},"Issue#5122")," that first argues it's a useful feature, but then agrees with its deprecation"),(0,o.kt)("li",{parentName:"ul"},"Discussion ",(0,o.kt)("a",{parentName:"li",href:"https://groups.google.com/g/openrefine/c/A8RhOwlulRs/m/NFR8LDBmBwAJ"},"Who uses column groups?")),(0,o.kt)("li",{parentName:"ul"},"Discussion ",(0,o.kt)("a",{parentName:"li",href:"https://groups.google.com/g/openrefine/c/X9O8NBC1UKQ"},"The future of the records mode")," about better ways of implementing grouping and a hierarchical model in OntoRefine")),(0,o.kt)("p",{parentName:"admonition"},"This feature is related to ",(0,o.kt)("a",{parentName:"p",href:"../manual/exploring#rows-vs-records"},"Rows vs Records"),", which however continues to be supported.")),(0,o.kt)("p",null,"Consider the following data:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.github.com/OpenRefine/OpenRefine/2.0/graphics/row-groups.png",alt:"Illustration of row groups in OpenRefine"})),(0,o.kt)("p",null,'Although the data is in a grid, we humans can understand that it is a tree. First of all, all rows contain data ultimately linked to the movie Austin Powers, although only one row contains the text "Austin Powers" in the "movie title" column. We also know that "USA" and "Germany" are not related to Elizabeth Hurley and Mike Myers respectively (say, as their nationality), but rather, "USA" and "Germany" are related to the movie (where it was released). We know that Mike Myers played both the character "Austin Powers" and the character "Dr. Evil"; and for the latter he received 2 awards. We humans can understand how to interpret the grid as a tree based on its visual layout as well as some knowledge we have about the movie domain but is not encoded in the table.'),(0,o.kt)("p",null,"OpenRefine can capture our knowledge of this transformation from grid to tree using ",(0,o.kt)("em",{parentName:"p"},"column groups"),", also stored in the column model. Each column group illustrated as a blue bracket above specifies which columns are grouped together, as well as which of those columns is the key column in that group (blue triangle). One column group can span over columns grouped by another column group, and in this way, column groups form a hierarchy determined by which column group envelopes another. This hierarchy of column groups allows the 2-dimensional (grid-shaped) table of rows and cells to be interpreted as a list of hierarchical (tree-shaped) data records."),(0,o.kt)("p",null,'Blank cells play a very important role. The blank cell in a key column of a row (e.g., cell "character" on row 4) makes that row (row 4) ',(0,o.kt)("em",{parentName:"p"},"depend"),' on the first preceding row with that column filled in (row 3). This means that "Best Comedy Perf" on row 4 applies to "Dr. Evil" on row 3. Row 3 is said to be a ',(0,o.kt)("em",{parentName:"p"},"context row")," for row 4. Similarly, since rows 2 - 6 all have blank cells in the first column, they all depend on row 1, and all their data ultimately applies to the movie Austin Powers. Row 1 depends on no other row and is said to be a ",(0,o.kt)("em",{parentName:"p"},"record row"),". Rows 1 - 6 together form one ",(0,o.kt)("em",{parentName:"p"},"record"),"."),(0,o.kt)("p",null,"Currently (as of 12th December 2017) only the XML and JSON importers create column groups, and while the data table view does display column groups but it doesn't support modifying them."),(0,o.kt)("h3",{id:"changes-history-processes-and-operations"},"Changes, History, Processes, and Operations"),(0,o.kt)("p",null,"All changes to the project's data are tracked (N.B. this does not include changes to a project's metadata - such as the project name.)"),(0,o.kt)("p",null,"Changes are stored as ",(0,o.kt)("inlineCode",{parentName:"p"},"com.google.refine.history.Change")," objects. ",(0,o.kt)("inlineCode",{parentName:"p"},"com.google.refine.history.Change")," is an interface, and implementing classes are in ",(0,o.kt)("inlineCode",{parentName:"p"},"com.google.refine.model.changes.**"),". Each change object stores enough data to modify the project's data when its ",(0,o.kt)("inlineCode",{parentName:"p"},"apply()")," method is called, and enough data to revert its effect when its ",(0,o.kt)("inlineCode",{parentName:"p"},"revert()")," method is called. It's only supposed to ",(0,o.kt)("em",{parentName:"p"},"store")," data, not to actually ",(0,o.kt)("em",{parentName:"p"},"compute")," the change. In this way, it's like a .diff patch file for a code base."),(0,o.kt)("p",null,"Some change objects can be huge, as huge as the project itself. So change objects are not kept in memory except when they are to be applied or reverted. However, since we still need to show the user some information about changes (as displayed in the History panel in the UI), we keep metadata of changes separate from the change objects. For each change object there is one corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"com.google.refine.history.HistoryEntry")," for storing its metadata, such as the change's human-friendly description and timestamp."),(0,o.kt)("p",null,"Each project has a ",(0,o.kt)("inlineCode",{parentName:"p"},"com.google.refine.history.History")," object that contains an ordered list of all ",(0,o.kt)("inlineCode",{parentName:"p"},"HistoryEntry")," objects storing metadata for all changes that have been done since after the project was created. Actually, there are 2 ordered lists: one for done changes that can be reverted (undone), an done for undone changes that can be re-applied (redone). Changes must be done or redone in their exact orders in these lists because each change makes certain assumptions about the state of the project before and after it is applied. As changes cannot be undone/redone out of order, when one change fails to revert, it blocks the whole history from being reverted to any state preceding that change (as happened in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/issues/2"},"Issue #2"),")."),(0,o.kt)("p",null,"As mentioned before, a change contains only the diff and does not actually compute that diff. The computation is performed by a ",(0,o.kt)("inlineCode",{parentName:"p"},"com.google.refine.process.Process")," object--every change object is created by a process object. A process can be immediate, producing its change object synchronously within a very short period of time (e.g., starring one row); or a process can be long-running, producing its change object after a long time and a lot of computation, including network calls (e.g., reconciling a column)."),(0,o.kt)("p",null,"As the user interacts with the UI on the client-side, their interactions trigger ajax calls to the server-side. Some calls are meant to modify the project. Those are handled by commands that instantiates processes. Processes are queued in a first-in-first-out basis. The first-in process gets run and until it is done all the other processes are stuck in the queue."),(0,o.kt)("p",null,"A process can effect a change in one thing in the project (e.g., edit one particular cell, star one particular row), or a process can effect changes in ",(0,o.kt)("em",{parentName:"p"},"potentially")," many things in the project (e.g., edit zero or more cells sharing the same content, starring all rows filtered by some facets). The latter kind of process is generalizable: it is meaningful to apply them on another similar project. Such a process is associated with an ",(0,o.kt)("em",{parentName:"p"},"abstract operation")," ",(0,o.kt)("inlineCode",{parentName:"p"},"com.google.refine.model.AbstractOperation"),' that encodes the information necessary to create another instance of that process, but potentially for a different project. When you click "extract" in the History panel, these abstract operations are called to serialize their information to JSON; and when you click "apply" in the History panel, the JSON you paste in is used to re-construct these abstract operations, which in turn create processes, which get run sequentially in a queue to generate change object and history entry pairs.'),(0,o.kt)("p",null,"In summary,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"change objects store diffs"),(0,o.kt)("li",{parentName:"ul"},"history entries store metadata of change objects"),(0,o.kt)("li",{parentName:"ul"},"processes compute diffs and create change object and history entry pairs"),(0,o.kt)("li",{parentName:"ul"},"some processes are long-running and some are immediate; processes are run sequentially in a queue"),(0,o.kt)("li",{parentName:"ul"},"generalizable processes can be re-constructed from abstract operations")),(0,o.kt)("h2",{id:"client-side-architecture"},"Client-side architecture"),(0,o.kt)("p",null,"The client-side part of OpenRefine is implemented in HTML, CSS and Javascript and uses the following Javascript libraries:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://jquery.com/"},"jQuery")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http:jqueryui.com/"},"jQueryUI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/recurser/jquery-i18n"},"Recurser jquery-i18n"))),(0,o.kt)("h3",{id:"importing-architecture"},"Importing architecture"),(0,o.kt)("p",null,"OpenRefine has a sophisticated architecture for accommodating a diverse and extensible set of importable file formats and work flows. The formats range from simple CSV, TSV to fixed-width fields to line-based records to hierarchical XML and JSON. The work flows allow the user to preview and tweak many different import settings before creating the project. In some cases, such as XML and JSON, the user also has to select which elements in the data file to import. Additionally, a data file can also be an archive file (e.g., .zip) that contains many files inside; the user can select which of those files to import. Finally, extensions to OpenRefine can inject functionalities into any part of this architecture."),(0,o.kt)("h3",{id:"the-index-page-and-action-areas"},"The Index Page and Action Areas"),(0,o.kt)("p",null,'The opening screen of OpenRefine is implemented by the file refine/main/webapp/modules/core/index.vt and will be referred to here as the index page. Its default implementation contains 3 finger tabs labeled Create Project, Open Project, and Import Project. Each tab selects an "action area". The 3 default action areas are for, obviously, creating a new project, opening an existing project, and importing a project .tar file.'),(0,o.kt)("p",null,"Extensions can add more action areas in Javascript. For example, this is how the Create Project action area is added (refine/main/webapp/modules/core/scripts/index/create-project-ui.js):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'Refine.actionAreas.push({\n  id: "create-project",\n  label: "Create Project",\n  uiClass: Refine.CreateProjectUI\n});\n')),(0,o.kt)("p",null,"The UI class is a constructor function that takes one argument, a jQuery-wrapped HTML element where the tab body of the action area should be rendered."),(0,o.kt)("p",null,"If your extension requires a very unique importing work flow, or a very novel feature that should be exposed on the index page, then add a new action area. Otherwise, try to use the existing work flows as much as possible."),(0,o.kt)("h3",{id:"the-create-project-action-area"},"The Create Project Action Area"),(0,o.kt)("p",null,'The Create Project action area is itself extensible. Initially, it embeds a set of finger tabs corresponding to a variety of "source selection UIs": you can select a source of data by specifying a file on your computer, or you can specify the URL to a publicly accessible data file or data feed, or you can paste in from the clipboard a chunk of data.'),(0,o.kt)("p",null,"There are actually 3 points of extension in the Create Project action area, and the first is invisible."),(0,o.kt)("h4",{id:"importing-controllers"},"Importing Controllers"),(0,o.kt)("p",null,'The Create Project action area manages a list of "importing controllers". Each controller follows a particular work flow (in UI terms, think "wizard"). Refine comes with a "default importing controller" (refine/main/webapp/modules/core/scripts/index/default-importing-controller/controller.js) and its work flow assumes that the data can be retrieved and cached in whole before getting processed in order to generate a preview for the user to inspect. (If the data cannot be retrieved and cached in whole before previewing, then another importing controller is needed.)'),(0,o.kt)("p",null,"An importing controller is just programming logic, but it can manifest itself visually by registering one or more data source UIs and one or more custom panels in the Create Project action area. The default importing controller registers 3 such custom panels, which act like pages of a wizard."),(0,o.kt)("p",null,"An extension can register any number of importing controller. Each controller has a client-side part and a server-side part. Its client-side part is just a constructor function that takes an object representing the Create Project action area (usually named ",(0,o.kt)("inlineCode",{parentName:"p"},"createProjectUI"),"). The controller (client-side) is expected to use that object to register data source UIs and/or create custom panels. The controller is not expected to have any particular interface method. The default importing controller's client-side code looks like this (refine/main/webapp/modules/core/scripts/index/default-importing-controller/controller.js):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Refine.DefaultImportingController = function(createProjectUI) {\n  this._createProjectUI = createProjectUI; // save a reference to the create project action area\n\n  this._progressPanel = createProjectUI.addCustomPanel(); // create a custom panel\n  this._progressPanel.html('...'); // render the custom panel\n  ... do other stuff ...\n};\nRefine.CreateProjectUI.controllers.push(Refine.DefaultImportingController); // register the controller\n")),(0,o.kt)("p",null,"We will cover the server-side code below."),(0,o.kt)("h4",{id:"data-source-selection-uis"},"Data Source Selection UIs"),(0,o.kt)("p",null,"Data source selection UIs are another point of extensibility in the Create Project action area. As mentioned previously, by default there are 3 data source UIs. Those are added by the default importing controller."),(0,o.kt)("p",null,"Extensions can also add their own data source UIs. A data source selection UI object can be registered like so"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'createProjectUI.addSourceSelectionUI({\n  label: "This Computer",\n  id: "local-computer-source",\n  ui: theDataSourceSelectionUIObject\n});\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"theDataSourceSelectionUIObject")," is an object that has the following member methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"attachUI(bodyDiv)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"focus()"))),(0,o.kt)("p",null,"If you want to install a data source selection UI that is managed by the default importing controller, then register its UI class with the default importing controller, like so (refine/main/webapp/modules/core/scripts/index/default-importing-sources/sources.js):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'Refine.DefaultImportingController.sources.push({\n    "label": "This Computer",\n    "id": "upload",\n    "uiClass": ThisComputerImportingSourceUI\n});\n')),(0,o.kt)("p",null,"The default importing controller will assume that the ",(0,o.kt)("inlineCode",{parentName:"p"},"uiClass")," field is a constructor function and call it with one argument--the controller object itself. That constructor function should save the controller object for later use. More specifically, for data source UIs that use the default importing controller, they can call the controller to kickstart the process that retrieves and caches the data to import:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'controller.startImportJob(form, "... status message ...");\n')),(0,o.kt)("p",null,"The argument ",(0,o.kt)("inlineCode",{parentName:"p"},"form")," is a jQuery-wrapped FORM element that will get submitted to the server side at the command /command/core/create-importing-job. That command and the default importing controller will take care of uploading or downloading the data, caching it, updating the client side's progress display, and then showing the next importing step when the data is fully cached."),(0,o.kt)("p",null,"See refine/main/webapp/modules/core/scripts/index/default-importing-sources/sources.js for examples of such source selection UIs. While we write about source selection UIs managed by the default importing controller here, chances are your own extension will not be adding such a new source selection UI. Your extension probably adds with a new importing controller as well as a new source selection UI that work together."),(0,o.kt)("h4",{id:"file-selection-panel"},"File Selection Panel"),(0,o.kt)("p",null,"Documentation not currently available"),(0,o.kt)("h4",{id:"parsing-ui-panel"},"Parsing UI Panel"),(0,o.kt)("p",null,"Documentation not currently available"),(0,o.kt)("h3",{id:"server-side-components"},"Server-side Components"),(0,o.kt)("h4",{id:"importingcontroller"},"ImportingController"),(0,o.kt)("p",null,"Documentation not currently available"),(0,o.kt)("h4",{id:"urlrewriter"},"UrlRewriter"),(0,o.kt)("p",null,"Documentation not currently available"),(0,o.kt)("h4",{id:"formatguesser"},"FormatGuesser"),(0,o.kt)("p",null,"Documentation not currently available"),(0,o.kt)("h4",{id:"importingparser"},"ImportingParser"),(0,o.kt)("p",null,"Documentation not currently available"),(0,o.kt)("h2",{id:"faceted-browsing-architecture"},"Faceted browsing architecture"),(0,o.kt)("p",null,"Faceted browsing support is core to OpenRefine as it is the primary and only mechanism for filtering to a subset of rows on which to do something ",(0,o.kt)("em",{parentName:"p"},"en masse")," (ie in bulk). Without faceted browsing or an equivalent querying/browsing mechanism, you can only change one thing at a time (one cell or row) or else change everything all at once; both kinds of editing are practically useless when dealing with large data sets."),(0,o.kt)("p",null,"In OpenRefine, different components of the code need to know which rows to process from the faceted browsing state (how the facets are constrained). For example, when the user applies some facet selections and then exports the data, the exporter serializes only the matching rows, not all rows in the project. Thus, faceted browsing isn't only hooked up to the data view for displaying data to the user, but it is also hooked up to almost all other parts of the system."),(0,o.kt)("h3",{id:"engine-configuration"},"Engine Configuration"),(0,o.kt)("p",null,"As OpenRefine is a web app, there might be several browser windows opened on the same project, each in a different faceted browsing state. It is best to maintain the faceted browsing state in each browser window while keeping the server side completely stateless with regard to faceted browsing. Whenever the client-side needs something done by the server, it transfers the entire faceted browsing state over to the server-side. The faceted browsing state behaves much like the ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," clause in a SQL query, telling the server-side how to select the rows to process."),(0,o.kt)("p",null,'In fact, it is best to think of the faceted browsing state as just a database query much like a SQL query. It can be passed around the whole system, to any component needing to know which rows to process. It is serialized into JSON to pass between the client-side and the server side, or to save in an abstract operation\'s specification. The job of the faceted browsing subsystem on the client-side is to let the user interactively modify this "faceted browsing query", and the job of the faceted browsing subsystem on the server side is to resolve that query.'),(0,o.kt)("p",null,"In the code, the faceted browsing state, or faceted browsing query, is actually called the ",(0,o.kt)("em",{parentName:"p"},"engine configuration")," or ",(0,o.kt)("em",{parentName:"p"},"engine config"),' for short. It consists mostly of an array facet configurations. For each facet, it stores the name of the column on which the facet is based (or an empty string if there is no base column). Each type of facet has different configuration. Text search facets have queries and flags for case-sensitivity mode and regular expression mode. Text facets (aka list facets) and numeric range facets have expressions. Each list facet also has an array of selected choices, an invert flag, and flags for whether blank and error cells are selected. Each numeric range facet has, among other things, a "from" and a "to" values. If you trace the AJAX calls, you\'d see the engine configs being shuttled, e.g.,'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "facets" : [\n      {\n        "type": "text",\n        "name": "Shrt_Desc",\n        "columnName": "Shrt_Desc",\n        "mode": "text",\n        "caseSensitive": false,\n        "query": "cheese"\n      },\n      {\n        "type": "list",\n        "name": "Shrt_Desc",\n        "columnName": "Shrt_Desc",\n        "expression": "grel:value.toLowercase().split(\\",\\")",\n        "omitBlank": false,\n        "omitError": false,\n        "selection": [],\n        "selectBlank":false,\n        "selectError":false,\n        "invert":false\n      },\n      {\n        "type": "range",\n        "name": "Water",\n        "expression": "value",\n        "columnName": "Water",\n        "selectNumeric": true,\n        "selectNonNumeric": true,\n        "selectBlank": true,\n        "selectError": true,\n        "from": 0,\n        "to": 53\n      }\n    ],\n    "includeDependent": false\n  }\n')),(0,o.kt)("h3",{id:"server-side-subsystem"},"Server-Side Subsystem"),(0,o.kt)("p",null,"From an engine configuration like the one above, the server-side faceted browsing subsystem is capable of producing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an iteration over the rows matching the facets' constraints"),(0,o.kt)("li",{parentName:"ul"},"information on how to render the facets (e.g., choice and count pairs for a list facet, histogram for a numeric range facet)")),(0,o.kt)("p",null,"When the engine config JSON arrives in an HTTP request on the server-side, a ",(0,o.kt)("inlineCode",{parentName:"p"},"com.google.refine.browsing.Engine")," object is constructed and initialized with that JSON. It in turns constructs zero or more ",(0,o.kt)("inlineCode",{parentName:"p"},"com.google.refine.browsing.facets.Facet")," objects. Then for each facet, the engine calls its ",(0,o.kt)("inlineCode",{parentName:"p"},"getRowFilter()")," method, which returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if the facet isn't constrained in anyway, or a ",(0,o.kt)("inlineCode",{parentName:"p"},"com.google.refine.browsing.filters.RowFilter")," object. Then, to when iterating over a project's rows, the engine calls on all row filters' ",(0,o.kt)("inlineCode",{parentName:"p"},"filterRow()")," method. If and only if all row filters return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," the row is considered to match the facets' constraints. How each row filter works depends on the corresponding type of facet."),(0,o.kt)("p",null,"To produce information on how to render a particular facet in the UI, the engine follows the same procedure described in the previous except it skips over the facet in question. In other words, it produces an iteration over all rows constrained by the other facets. Then it feeds that iteration to the facet in question by calling the facet's ",(0,o.kt)("inlineCode",{parentName:"p"},"computeChoices()")," method. This gives the method a chance to compute the rendering information for its UI counterpart on the client-side. When all facets have been given a chance to compute their rendering information, the engine calls all facets to serialize their information as JSON and returns the JSON to the client-side. Only one HTTP call is needed to compute all facets."),(0,o.kt)("h3",{id:"client-side-subsystem"},"Client-side subsystem"),(0,o.kt)("p",null,"On the client-side there is also an engine object (implemented in Javascript rather than Java) and zero or more facet objects (also in Javascript, obviously). The engine is responsible for distributing the rendering information computed on the server-side to the right facets, and when the user interacts with a facet, the facet tells the engine to update the whole UI. To do so, the engine gathers the configuration of each facet and composes the whole engine config as a single JSON object. Two separate AJAX calls are made with that engine config, one to retrieve the rows to render, and one to re-compute the rendering information for the facets because changing one facet does affect all the other facets."))}u.isMDXComponent=!0}}]);