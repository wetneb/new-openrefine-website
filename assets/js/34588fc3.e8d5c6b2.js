"use strict";(self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[]).push([[9946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],s={id:"writing-extensions",title:"Writing Extensions",sidebar_label:"Writing Extensions"},l=void 0,p={unversionedId:"technical-reference/writing-extensions",id:"version-3.6/technical-reference/writing-extensions",title:"Writing Extensions",description:"Introduction",source:"@site/versioned_docs/version-3.6/technical-reference/writing-extensions.md",sourceDirName:"technical-reference",slug:"/technical-reference/writing-extensions",permalink:"/new-openrefine-website/docs/technical-reference/writing-extensions",draft:!1,editUrl:"https://github.com/OpenRefine/OpenRefine/edit/master/docs/versioned_docs/version-3.6/technical-reference/writing-extensions.md",tags:[],version:"3.6",lastUpdatedBy:"Antonin Delpeuch",lastUpdatedAt:1662887291,formattedLastUpdatedAt:"Sep 11, 2022",frontMatter:{id:"writing-extensions",title:"Writing Extensions",sidebar_label:"Writing Extensions"},sidebar:"version-3.6/docs",previous:{title:"Maintaining OpenRefine's Homebrew cask",permalink:"/new-openrefine-website/docs/technical-reference/homebrew-cask-process"},next:{title:"Migrating older Extensions",permalink:"/new-openrefine-website/docs/technical-reference/migrating-older-extensions"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Directory Layout",id:"directory-layout",level:3},{value:"Sample extension",id:"sample-extension",level:2},{value:"Basic Structure",id:"basic-structure",level:3},{value:"Wiring Up the Extension",id:"wiring-up-the-extension",level:3},{value:"Extension points",id:"extension-points",level:2},{value:"Client-side: Javascript and CSS",id:"client-side-javascript-and-css",level:3},{value:"Client-side: Images",id:"client-side-images",level:3},{value:"Client-side: HTML Templates",id:"client-side-html-templates",level:3},{value:"Client-side: Project UI Extension Points",id:"client-side-project-ui-extension-points",level:3},{value:"Main Menu",id:"main-menu",level:4},{value:"Column Header Menu",id:"column-header-menu",level:4},{value:"Server-side: Ajax Commands",id:"server-side-ajax-commands",level:3},{value:"Server-side: Operations",id:"server-side-operations",level:3},{value:"Server-side: GREL",id:"server-side-grel",level:3},{value:"Server-side: Importers",id:"server-side-importers",level:3},{value:"Server-side: Exporters",id:"server-side-exporters",level:3},{value:"Server-side: Overlay Models",id:"server-side-overlay-models",level:3},{value:"Server-side: Scripting Languages",id:"server-side-scripting-languages",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This is a very brief overview of the structure of OpenRefine extensions. For more detailed documentation and step-by-step guides please see the following external documentation/tutorials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Giuliano Tortoreto has ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/giTorto/OpenRefineExtensionDoc/raw/master/main.pdf"},"written documentation detailling how to build extension for OpenRefine")),(0,r.kt)("li",{parentName:"ul"},"Owen Stephens has written ",(0,r.kt)("a",{parentName:"li",href:"http://www.meanboyfriend.com/overdue_ideas/2017/05/writing-an-extension-to-add-new-grel-functions-to-openrefine/"},"a guide to developing an extension which adds new GREL functions to OpenRefine"),".")),(0,r.kt)("p",null,"OpenRefine makes use of a modified version of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/simile-butterfly/tree/openrefine"},"Butterfly framework"),' to provide an extension architecture. OpenRefine extensions are Butterfly modules. You don\'t really need to know about Butterfly itself, but you might encounter "butterfly" here and there in the code base.'),(0,r.kt)("p",null,"Extensions that come with the code base are located under ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/tree/master/extensions"},"the extensions subdirectory"),", but when you develop your own extension, you can put its code anywhere as long as you point Butterfly to it. That is done by any one of the following methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"refer to your extension's directory in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenRefine/OpenRefine/blob/master/main/webapp/WEB-INF/butterfly.properties"},"the butterfly.properties file")," through a ",(0,r.kt)("inlineCode",{parentName:"li"},"butterfly.modules.path")," setting."),(0,r.kt)("li",{parentName:"ul"},"specify the butterfly.modules.path property on the command line when you run OpenRefine. This overrides the values in the property file, so you need to include the default values first e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"-Dbutterfly.modules.path=modules,../../extensions,/path/to/your/extension"))),(0,r.kt)("p",null,"Please note that you should bundle any dependencies yourself, so you are insulated from OpenRefine packaging changes over time."),(0,r.kt)("h3",{id:"directory-layout"},"Directory Layout"),(0,r.kt)("p",null,"A OpenRefine extension sits in a file directory that contains the following files and sub-directories:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pom.xml\n  src/\n      com/foo/bar/... *.java source files\n  module/\n      *.html, *.vt files\n      scripts/... *.js files\n      styles/... *.css and *.less files\n      images/... image files\n      MOD-INF/\n          lib/*.jar files\n          classes/... java class files\n          module.properties\n          controller.js\n")),(0,r.kt)("p",null,"The file named module.properties (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/blob/master/extensions/sample/module/MOD-INF/module.properties"},"example"),") contains the extension's metadata. Of importance is the name field, which gives the extension a name that's used in many other places to refer to it. This can be different from the extension's directory name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"name = my-extension-name\n")),(0,r.kt)("p",null,"Your extension's client-side resources (.html, .js, .css files) stored in the module/ subdirectory will be accessible from ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:3333/extension/my-extension-name/"},"http://127.0.0.1:3333/extension/my-extension-name/")," when OpenRefine is running."),(0,r.kt)("p",null,"Also of importance is the dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"requires = core\n")),(0,r.kt)("p",null,"which makes sure that the core module of OpenRefine is loaded before the extension attempts to hook into it."),(0,r.kt)("p",null,"The file named controller.js is responsible for registering the extension's hooks into OpenRefine. Look at the sample-extension extension's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/blob/master/extensions/sample/module/MOD-INF/controller.js"},"controller.js")," file for an example. It should have a function called init() that does the hook registrations."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file is an ",(0,r.kt)("a",{parentName:"p",href:"http://maven.apache.org/"},"Apache Maven")," build file. You can make a copy of the sample extension's ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file to get started. The important point here is that the Java classes should be built into the ",(0,r.kt)("inlineCode",{parentName:"p"},"module/MOD-INF/classes")," sub-directory."),(0,r.kt)("p",null,"Note that your extension's Java code would need to reference some libraries used in OpenRefine and OpenRefine's Java classes themselves. These dependencies are reflected in the Maven configuration for the extension."),(0,r.kt)("h2",{id:"sample-extension"},"Sample extension"),(0,r.kt)("p",null,"The sample extension is included in the code base so that you can copy it and get started on writing your own extension. After you copy it, make sure you change its name inside its ",(0,r.kt)("inlineCode",{parentName:"p"},"module/MOD-INF/controller.js")," file."),(0,r.kt)("h3",{id:"basic-structure"},"Basic Structure"),(0,r.kt)("p",null,"The sample extension's code is in ",(0,r.kt)("inlineCode",{parentName:"p"},"refine/extensions/sample/"),". In that directory, Java source code is contained under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," sub-directory, and webapp code is under the ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," sub-directory. Here is the full directory layout:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"refine/extensions/sample/\n      build.xml (ant build script)\n      src/\n          com/google/refine/sampleExtension/\n              ... Java source code ...\n      module/\n          MOD-INF/\n              module.properties (module settings)\n              controller.js (module init and routing logic in Javascript)\n          classes/\n              ... compiled Java classes ...\n          lib/\n              ... Java jars ...\n          ... velocity templates (.vt) ...\n          ... LESS css files ...\n          ... client-side files (.html, .css, .js, image files) ...\n")),(0,r.kt)("p",null,"The sub-directory ",(0,r.kt)("inlineCode",{parentName:"p"},"MOD-INF")," contains the Butterfly module's metadata and is what Butterfly looks for when it scans directories for modules. ",(0,r.kt)("inlineCode",{parentName:"p"},"MOD-INF")," serves similar functions as ",(0,r.kt)("inlineCode",{parentName:"p"},"WEB-INF")," in other web frameworks."),(0,r.kt)("p",null,"Java code is built into the sub-directory ",(0,r.kt)("inlineCode",{parentName:"p"},"classes")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"MOD-INF"),", and supporting external Java jars are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," sub-directory. Those will be automatically loaded by Butterfly. (The build.xml script is wired to compile into the ",(0,r.kt)("inlineCode",{parentName:"p"},"classes")," sub-directory.)"),(0,r.kt)("p",null,"Client-side code is in the inner ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," sub-directory. They can be plain old .html, .css, .js, and image files, or they can be ",(0,r.kt)("a",{parentName:"p",href:"http://lesscss.org/"},"LESS")," files that get processed into CSS. There are also Velocity .vt files, but they need to be routed inside ",(0,r.kt)("inlineCode",{parentName:"p"},"MOD-INF/controller.js"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MOD-INF/controller.js")," lets you configure the extension's initialization and URL routing in Javascript rather than in Java. For example, when the requested URL path is either ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," or an empty string, we process and return ",(0,r.kt)("inlineCode",{parentName:"p"},"MOD-INF/index.vt")," ( ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:3333/extension/sample/"},"see http://127.0.0.1:3333/extension/sample/")," if OpenRefine is running)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"init()")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"controller.js")," allows the extension to register various client-side handlers for augmenting pages served by Refine's core. These handlers are feature-specific. For example, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/blob/master/extensions/jython/module/MOD-INF/controller.js#L46"},"this is where the jython extension adds its parser"),". As for the sample extension, it adds its script ",(0,r.kt)("inlineCode",{parentName:"p"},"project-injection.js")," and style ",(0,r.kt)("inlineCode",{parentName:"p"},"project-injection.less")," into the ",(0,r.kt)("inlineCode",{parentName:"p"},"/project")," page. If you ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:3333/project"},"view the source of the /project page"),", you will see references to those two files."),(0,r.kt)("h3",{id:"wiring-up-the-extension"},"Wiring Up the Extension"),(0,r.kt)("p",null,"The Extensions are loaded by the Butterfly framework. Butterfly refers to these as 'modules'. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/blob/master/main/webapp/WEB-INF/butterfly.properties#L27"},"The location of modules is set in the ",(0,r.kt)("inlineCode",{parentName:"a"},"main/webapp/butterfly.properties")," file"),". Butterfly simply descends into each of those paths and looks for any ",(0,r.kt)("inlineCode",{parentName:"p"},"MOD-INF")," directories."),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/wiki/Extension-Points"},"Extension Points"),"."),(0,r.kt)("h2",{id:"extension-points"},"Extension points"),(0,r.kt)("h3",{id:"client-side-javascript-and-css"},"Client-side: Javascript and CSS"),(0,r.kt)("p",null,"The UI in OpenRefine for working with a project is coded in ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/OpenRefine/OpenRefine/blob/master/main/webapp/modules/core/project.vt"},"the /main/webapp/modules/core/project.vt file"),". The file is quite small, and that's because almost all of its content is to be expanded dynamically through the Velocity variables $scriptInjection and $styleInjection. So that your own Javascript and CSS files get loaded, you need to register them with the ClientSideResourceManager, which is done in the /module/MOD-INF/controller.js file. See ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/OpenRefine/OpenRefine/blob/master/extensions/sample/module/MOD-INF/controller.js"},"the controller.js file in this sample extension code")," for an example."),(0,r.kt)("p",null,"In the registration call, the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," is already available to your code by default, and it refers to your own extension."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ClientSideResourceManager.addPaths(\n        "project/scripts",\n        module,\n        [\n            "scripts/foo.js",\n            "scripts/subdir/bar.js"\n        ]\n    );\n')),(0,r.kt)("p",null,"You can specify one or more files for registration, and their paths are relative to the ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," subdirectory of your extension. They are included in the order listed."),(0,r.kt)("p",null,"Javascript Bundling: Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"project.vt")," belongs to the core module and is thus under the control of the core module's ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/OpenRefine/OpenRefine/blob/master/main/webapp/modules/core/MOD-INF/controller.js"},"controller.js file"),". The Javascript files to be included in ",(0,r.kt)("inlineCode",{parentName:"p"},"project.vt")," are by default bundled together for performance. When debugging, you can prevent this bundling behavior by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," near the top of that ",(0,r.kt)("inlineCode",{parentName:"p"},"controller.js")," file. (If you have commit access to this code base, be sure not to check that change in.)"),(0,r.kt)("h3",{id:"client-side-images"},"Client-side: Images"),(0,r.kt)("p",null,"We recommend that you always refer to images through your CSS files rather than in your Javascript code. URLs to images will thus be relative to your CSS files, e.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".foo {\n    background: url(../images/x.png);\n  }\n")),(0,r.kt)("p",null,"If you really really absolutely need to refer to your images in your Javascript code, then look up your extension's URL path in the global Javascript variable ",(0,r.kt)("inlineCode",{parentName:"p"},"ModuleWirings"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ModuleWirings["my-extension"] + "images/x.png"\n')),(0,r.kt)("h3",{id:"client-side-html-templates"},"Client-side: HTML Templates"),(0,r.kt)("p",null,"Beside Javascript, CSS, and images, your extension might also include HTML templates that get loaded on the fly by your Javascript code and injected into the page's DOM. For example, here is ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/OpenRefine/OpenRefine/blob/master/main/webapp/modules/core/scripts/dialogs/clustering-dialog.html"},"the Cluster edit dialog template"),", which gets loaded by code in ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/OpenRefine/OpenRefine/blob/master/main/webapp/modules/core/scripts/dialogs/clustering-dialog.js"},"the equivalent javascript file 'clustering-dialog.js'"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var dialog = $(DOM.loadHTML("core", "scripts/dialogs/clustering-dialog.html"));\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DOM.loadHTML")," returns the content of the file as a string, and ",(0,r.kt)("inlineCode",{parentName:"p"},"$(...)")," turns it into a DOM fragment. Where ",(0,r.kt)("inlineCode",{parentName:"p"},'"core"')," is, you would want your extension's name. The path of the HTML file is relative to your extension's ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," subdirectory."),(0,r.kt)("h3",{id:"client-side-project-ui-extension-points"},"Client-side: Project UI Extension Points"),(0,r.kt)("p",null,"Getting your extension's Javascript code included in ",(0,r.kt)("inlineCode",{parentName:"p"},"project.vt")," doesn't accomplish much by itself unless your code also registers hooks into the UI. For example, you can surely implement an exporter in Javascript, but unless you add a corresponding menu command in the UI, your user can't use your exporter."),(0,r.kt)("h4",{id:"main-menu"},"Main Menu"),(0,r.kt)("p",null,"The main menu can be extended by calling any one of the methods ",(0,r.kt)("inlineCode",{parentName:"p"},"MenuBar.appendTo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MenuBar.insertBefore"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"MenuBar.insertAfter"),". Each method takes 2 arguments: an array of strings that identify a particular existing menu item or submenu, and one new single menu item or submenu or an array of menu items and submenus. For example, to insert 2 menu items and a menu separator before the menu item Project > Export Filtered Rows > Templating..., write this Javascript code wherever that would execute when your Javascript files get loaded:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'MenuBar.insertBefore(\n        ["core/project", "core/export", "core/export-templating"],\n        [\n            {\n                "label":"Menu item 1",\n                "click": function() { ... }\n            },\n            {\n                "label":"Menu item 2",\n                "click": function() { ... }\n            },\n            {} // separator\n        ]\n    );\n')),(0,r.kt)("p",null,"The array ",(0,r.kt)("inlineCode",{parentName:"p"},'["core/project", "core/export", "core/export-templating"]')," pinpoints the reference menu item."),(0,r.kt)("p",null,"See the beginning of ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/OpenRefine/OpenRefine/blob/master/main/webapp/modules/core/scripts/project/menu-bar.js"},"/main/webapp/modules/core/scripts/project/menu-bar.js")," for IDs of menu items and submenus."),(0,r.kt)("h4",{id:"column-header-menu"},"Column Header Menu"),(0,r.kt)("p",null,"The drop-down menu of each column can also be extended, but the mechanism is slightly different compared to the main menu. Because the drop-down menu for a particular column is constructed on the fly when the user actually clicks the drop-down menu button, extending the column header menu can't really be done once at start-up time, but must be done every time a column header menu gets created. So, registration in this case involves providing a function that gets called each such time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DataTableColumnHeaderUI.extendMenu(function(column, columnHeaderUI, menu) { ... do stuff to menu ... });\n")),(0,r.kt)("p",null,'That function takes in the column object (which contains the column\'s name), the column header UI object (generally not so useful), and the menu to extend. In the previous code line where it says "do stuff to menu", you can write something like this:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'MenuSystem.appendTo(menu, ["core/facet"], [\n        {\n            id: "core/text-facet",\n            label: "My Facet on " + column.name,\n            click: function() {\n                ... use column.name and do something ...\n            }\n        },\n    ]);\n')),(0,r.kt)("p",null,"In addition to ",(0,r.kt)("inlineCode",{parentName:"p"},"MenuSystem.appendTo"),", you can also call ",(0,r.kt)("inlineCode",{parentName:"p"},"MenuSystem.insertBefore")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MenuSystem.insertAfter")," which the same 3 arguments. To see what IDs you can use, see the function ",(0,r.kt)("inlineCode",{parentName:"p"},"DataTableColumnHeaderUI.prototype._createMenuForColumnHeader")," in ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/OpenRefine/OpenRefine/blob/master/main/webapp/modules/core/scripts/views/data-table/column-header-ui.js"},"/main/webapp/modules/core/scripts/views/data-table/column-header-ui.js"),"."),(0,r.kt)("h3",{id:"server-side-ajax-commands"},"Server-side: Ajax Commands"),(0,r.kt)("p",null,"The client-side of OpenRefine gets things done by calling AJAX commands on the server-side. These commands must be registered with the OpenRefine servlet, so that the servlet knows how to route AJAX calls from the client-side. This can be done inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," function in your extension's ",(0,r.kt)("inlineCode",{parentName:"p"},"controller.js")," file, e.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'function init() {\n      var RefineServlet = Packages.com.google.refine.RefineServlet;\n      RefineServlet.registerCommand(module, "my-command", new Packages.com.foo.bar.MyCommand());\n  }\n')),(0,r.kt)("p",null,"Your command will then be accessible at ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:3333/command/my-extension/my-command"},"http://127.0.0.1:3333/command/my-extension/my-command"),"."),(0,r.kt)("h3",{id:"server-side-operations"},"Server-side: Operations"),(0,r.kt)("p",null,"Most commands change the project's data. Most of them do so by creating abstract operations. See the Changes, History, Processes, and Operations section of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/wiki/Server-Side-Architecture"},"Server Side Architecture")," document."),(0,r.kt)("p",null,"You can register an operation ",(0,r.kt)("strong",{parentName:"p"},"class")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," function as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Packages.com.google.refine.operations.OperationRegistry.registerOperation(\n      module, \n      "operation-name",\n      Packages.com.foo.bar.MyOperation\n  );\n')),(0,r.kt)("p",null,"Do not call ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," to construct an operation instance. You must register the class itself. The class should have a static function for reconstructing an operation instance from a JSON blob:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"static public AbstractOperation reconstruct(Project project, JSONObject obj) throws Exception {\n      ...\n  }\n")),(0,r.kt)("h3",{id:"server-side-grel"},"Server-side: GREL"),(0,r.kt)("p",null,"GREL can be extended with new functions. This is also done in the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"controller.js"),", e.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Packages.com.google.refine.grel.ControlFunctionRegistry.registerFunction(\n        "functionName", new Packages.com.foo.bar.TheFunctionClass());\n')),(0,r.kt)("p",null,"You might also want to provide new variables (beyond just ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cells"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"row"),", etc.) available to expressions. This is done by registering a binder that implements the interface ",(0,r.kt)("inlineCode",{parentName:"p"},"com.google.refine.expr.Binder"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Packages.com.google.refine.expr.ExpressionUtils.registerBinder(\n        new Packages.com.foo.bar.MyBinder());\n")),(0,r.kt)("h3",{id:"server-side-importers"},"Server-side: Importers"),(0,r.kt)("p",null,"You can register an importer as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Packages.com.google.refine.importers.ImporterRegistry.registerImporter(\n      "importer-name", new Packages.com.foo.bar.MyImporter());\n')),(0,r.kt)("p",null,"The string ",(0,r.kt)("inlineCode",{parentName:"p"},'"importer-name"')," isn't important at all. It's not really related to file extension or mime-type. Just use something unique. Your importer will be explicitly called to test if it can import something."),(0,r.kt)("h3",{id:"server-side-exporters"},"Server-side: Exporters"),(0,r.kt)("p",null,"You can register an exporter as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Packages.com.google.refine.exporters.ExporterRegistry.registerExporter(\n      "exporter-name", new Packages.com.foo.bar.MyExporter());\n')),(0,r.kt)("p",null,"The string ",(0,r.kt)("inlineCode",{parentName:"p"},'"exporter-name"')," isn't important at all. It's only used by the client-side to tell the server-side which exporter to use. Just use something unique and, of course, relevant."),(0,r.kt)("h3",{id:"server-side-overlay-models"},"Server-side: Overlay Models"),(0,r.kt)("p",null,"Overlay models are objects attached onto a core Project object to store and manage additional data for that project. For example, the schema alignment skeleton is managed by the Protograph overlay model. An overlay model implements the interface ",(0,r.kt)("inlineCode",{parentName:"p"},"com.google.refine.model.OverlayModel")," and can be registered like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Packages.com.google.refine.model.Project.registerOverlayModel(\n      "model-name",\n      Packages.com.foo.bar.MyOverlayModel);\n')),(0,r.kt)("p",null,"Note that you register the ",(0,r.kt)("strong",{parentName:"p"},"class")," , not an instance. The class should implement the following static method for reconstructing an overlay model instance from a JSON blob:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"static public OverlayModel reconstruct(JSONObject o) throws JSONException {\n      ...\n  }\n")),(0,r.kt)("p",null,"When the project gets saved, the overlay model instance's ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," method will be called:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public void write(JSONWriter writer, Properties options) throws JSONException {\n      ...\n  }\n")),(0,r.kt)("h3",{id:"server-side-scripting-languages"},"Server-side: Scripting Languages"),(0,r.kt)("p",null,"A scripting language (such as Jython) can be registered as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Packages.com.google.refine.expr.MetaParser.registerLanguageParser(\n        "jython",\n        "Jython",\n        Packages.com.google.refine.jython.JythonEvaluable.createParser(),\n        "return value"\n    );\n')),(0,r.kt)("p",null,"The first string is the prefix that gets prepended to each expression so that we know which language the expression is in. This should be short, unique, and identifying. The second string is a user-friendly name of the language. The third is an object that implements the interface ",(0,r.kt)("inlineCode",{parentName:"p"},"com.google.refine.expr.LanguageSpecificParser"),". The final string is the default expression in that language that would return the cell's value."),(0,r.kt)("p",null,"In 2018 we are making important changes to OpenRefine to modernize it, for the benefit of users and contributors. This page describes the changes that impact developers of extensions or forks and is intended to minimize the effort required on their end to follow the transition. The instructions are written specifically with extension maintainers in mind, but fork maintainers should also find it useful."),(0,r.kt)("p",null,"This document describes the migrations in the order they are committed to the master branch. This means that it should be possible to perform each migration in turn, with the ability to run the software between each stage by checking out the appropriate git commit."))}m.isMDXComponent=!0}}]);