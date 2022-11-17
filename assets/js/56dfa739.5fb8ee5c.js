"use strict";(self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[]).push([[3708],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return a?o.createElement(m,i(i({ref:t},u),{},{components:a})):o.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6976:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],l={id:"starting",title:"Starting a project",sidebar_label:"Starting a project"},s=void 0,p={unversionedId:"manual/starting",id:"version-3.4/manual/starting",title:"Starting a project",description:"Overview",source:"@site/versioned_docs/version-3.4/manual/starting.md",sourceDirName:"manual",slug:"/manual/starting",permalink:"/new-openrefine-website/docs/3.4/manual/starting",draft:!1,editUrl:"https://github.com/OpenRefine/OpenRefine/edit/master/docs/versioned_docs/version-3.4/manual/starting.md",tags:[],version:"3.4",lastUpdatedBy:"Antonin Delpeuch",lastUpdatedAt:1662887291,formattedLastUpdatedAt:"Sep 11, 2022",frontMatter:{id:"starting",title:"Starting a project",sidebar_label:"Starting a project"},sidebar:"version-3.4/docs",previous:{title:"Running",permalink:"/new-openrefine-website/docs/3.4/manual/running"},next:{title:"Overview",permalink:"/new-openrefine-website/docs/3.4/manual/exploring"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Create a project by importing data",id:"create-a-project-by-importing-data",level:2},{value:"Get data from this computer",id:"get-data-from-this-computer",level:3},{value:"Web addresses (URLs)",id:"web-addresses-urls",level:3},{value:"Clipboard",id:"clipboard",level:3},{value:"Database (SQL)",id:"database-sql",level:3},{value:"Google data",id:"google-data",level:3},{value:"Google Sheet by URL",id:"google-sheet-by-url",level:4},{value:"Google Sheet from Drive",id:"google-sheet-from-drive",level:4},{value:"Project preview",id:"project-preview",level:2},{value:"Import a project",id:"import-a-project",level:2},{value:"Project management",id:"project-management",level:2},{value:"Naming projects",id:"naming-projects",level:3},{value:"Autosaving",id:"autosaving",level:3},{value:"Deleting projects",id:"deleting-projects",level:3},{value:"Project files",id:"project-files",level:3}],d={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"An OpenRefine project is started by importing in some existing data - OpenRefine doesn\u2019t allow you to create a dataset from nothing."),(0,r.kt)("p",null,"No matter where your data comes from, OpenRefine won\u2019t modify your original data source. It copies all the information from your input, creates its own project file, and stores it in your ",(0,r.kt)("a",{parentName:"p",href:"installing#set-where-data-is-stored"},"workspace directory"),".   "),(0,r.kt)("p",null,"The data and all of your edits are ",(0,r.kt)("a",{parentName:"p",href:"#autosaving"},"automatically saved")," inside the project file. When you\u2019re finished modifying the data, you can ",(0,r.kt)("a",{parentName:"p",href:"exporting"},"export it back out")," into the file format of your choice. "),(0,r.kt)("p",null,"You can also receive and open other people\u2019s projects, or send them yours, by ",(0,r.kt)("a",{parentName:"p",href:"exporting#export-a-project"},"exporting a project archive")," and ",(0,r.kt)("a",{parentName:"p",href:"#import-a-project"},"importing it"),". "),(0,r.kt)("h2",{id:"create-a-project-by-importing-data"},"Create a project by importing data"),(0,r.kt)("p",null,"When you start OpenRefine, you\u2019ll be taken to the ",(0,r.kt)("span",{class:"menuItems"},"Create Project")," screen. You\u2019ll see on the left side of the screen that your options are to: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"import data from one or more files on your computer"),(0,r.kt)("li",{parentName:"ul"},"import data from one or more links on the web"),(0,r.kt)("li",{parentName:"ul"},"import data by pasting in text from your clipboard"),(0,r.kt)("li",{parentName:"ul"},"import data from a database (using SQL), and"),(0,r.kt)("li",{parentName:"ul"},"import one or more Sheets from Google Drive. ")),(0,r.kt)("p",null,"From these sources, you can load any of the following file formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"comma-separated values (CSV) or text-separated values (TSV)"),(0,r.kt)("li",{parentName:"ul"},"Text files"),(0,r.kt)("li",{parentName:"ul"},"Fixed-width columns"),(0,r.kt)("li",{parentName:"ul"},"JSON"),(0,r.kt)("li",{parentName:"ul"},"XML"),(0,r.kt)("li",{parentName:"ul"},"OpenDocument spreadsheet (ODS)"),(0,r.kt)("li",{parentName:"ul"},"Excel spreadsheet (XLS or XLSX)"),(0,r.kt)("li",{parentName:"ul"},"PC-Axis (PX)"),(0,r.kt)("li",{parentName:"ul"},"MARC"),(0,r.kt)("li",{parentName:"ul"},"RDF data (JSON-LD, N3, N-Triples, Turtle, RDF/XML)"),(0,r.kt)("li",{parentName:"ul"},"Wikitext")),(0,r.kt)("p",null,"More formats can be imported by ",(0,r.kt)("a",{parentName:"p",href:"https://openrefine.org/download.html"},"adding extensions to provide that functionality"),". "),(0,r.kt)("p",null,"If you supply two or more files for one project, the files\u2019 rows will be loaded in the order that you specify, and OpenRefine will create a column at the beginning of the dataset with the source URL or file name in it to help you identify where each row came from. If the files have columns with identical names, the data will load in those columns; if not, the successive files will append all of their new columns to the end of the dataset:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"File"),(0,r.kt)("th",{parentName:"tr",align:null},"Fruit"),(0,r.kt)("th",{parentName:"tr",align:null},"Quantity"),(0,r.kt)("th",{parentName:"tr",align:null},"Berry"),(0,r.kt)("th",{parentName:"tr",align:null},"Berry source"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fruits.csv"),(0,r.kt)("td",{parentName:"tr",align:null},"Orange"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fruits.csv"),(0,r.kt)("td",{parentName:"tr",align:null},"Apple"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"berries.csv"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Mulberry"),(0,r.kt)("td",{parentName:"tr",align:null},"Greece")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"berries.csv"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Blueberry"),(0,r.kt)("td",{parentName:"tr",align:null},"Canada")))),(0,r.kt)("p",null,"You cannot combine two datasets into one project by appending data within rows. You can, however, combine two projects later using functions such as ",(0,r.kt)("a",{parentName:"p",href:"grelfunctions/#crosscell-s-projectname-s-columnname"},"cross()"),", or ",(0,r.kt)("a",{parentName:"p",href:"columnediting"},"fetch further data")," using other methods.  "),(0,r.kt)("p",null,"For whichever method you choose to start your project, when you click ",(0,r.kt)("span",{class:"menuItems"},"Next >>")," you will be given a preview and a chance to configure the way OpenRefine interprets the data you input."),(0,r.kt)("h3",{id:"get-data-from-this-computer"},"Get data from this computer"),(0,r.kt)("p",null,"Click on ",(0,r.kt)("span",{class:"menuItems"},"Browse\u2026")," and select a file (or several) on your hard drive. All files will be shown, not just compatible ones. "),(0,r.kt)("p",null,"If you import an archive file (something with the extension ",(0,r.kt)("inlineCode",{parentName:"p"},".zip"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".tar.gz"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".tgz"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".tar.bz2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".gz"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},".bz2"),"), OpenRefine detects the files inside it, shows you a preview screen, and allows you to select which ones to load. This does not work with ",(0,r.kt)("inlineCode",{parentName:"p"},".rar")," files. "),(0,r.kt)("h3",{id:"web-addresses-urls"},"Web addresses (URLs)"),(0,r.kt)("p",null,"Type or paste the URL to a data file into the field provided. You can add as many fields as you want. OpenRefine will download the file and preview the project for you. "),(0,r.kt)("p",null,"If you supply two or more file URLs, OpenRefine will identify each one and ask you to choose which (or all) to load. "),(0,r.kt)("p",null,"Do not use this form to load a Google Sheet by its link; use ",(0,r.kt)("a",{parentName:"p",href:"#google-data"},"the Google Data form instead"),". "),(0,r.kt)("h3",{id:"clipboard"},"Clipboard"),(0,r.kt)("p",null,"You can copy and paste in data from anywhere. OpenRefine will recognize comma-separated, tab-separated, or table-formatted information copied from sources such as word-processing documents, spreadsheets, and tables in PDFs. You can also just paste in a list of items that you want to turn into rows. OpenRefine recognizes each new text line as a row. "),(0,r.kt)("p",null,"This can be useful if you want to pre-select a specific number of rows from your source data, or paste together rows from different places, rather than delete unwanted rows later in the project interace. "),(0,r.kt)("p",null,"This can also be useful if you would like to paste in a list of URLs, which you can use later to ",(0,r.kt)("a",{parentName:"p",href:"columnediting"},"fetch more data"),". "),(0,r.kt)("h3",{id:"database-sql"},"Database (SQL)"),(0,r.kt)("p",null,"If you are an administrator or have SQL access to a database of information, you may want to pull the latest dataset directly from there. This could include an online catalogue, a content management system, or a digital repository or collection management system. You can also load a database (",(0,r.kt)("inlineCode",{parentName:"p"},".db"),") file saved locally. You will need to use an ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3schools.com/sql/"},"SQL query")," to import your intended data."),(0,r.kt)("p",null,"There are some publicly-accessible databases you can query, such as ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rfam.org/en/latest/database.html"},"one provided by Rfam"),". The instructions provided by Rfam can help you understand how to connect to and query from other databases."),(0,r.kt)("p",null,"OpenRefine can connect to PostgreSQL, MySQL, MariaDB, and SQLite database systems. It will automatically populate the ",(0,r.kt)("span",{class:"fieldLabels"},"Port")," field based on which of these you choose, but you can manually edit this if needed."),(0,r.kt)("p",null,"If you have a ",(0,r.kt)("inlineCode",{parentName:"p"},".db")," file, you can supply the path to the file on your computer in the ",(0,r.kt)("span",{class:"fieldLabels"},"Database")," field at the bottom of the form. You can leave the rest of the fields blank."),(0,r.kt)("p",null,'To import data directly from a database, you will need the database type (such as MySQL), database name, the hostname (either an IP address or the domain that hosts the database), and the port on the host. You will need an account authorized for access, and you may need to add OpenRefine\'s IP address or host to the "allowable hosts" for that account. You can find that information by pressing ',(0,r.kt)("span",{class:"buttonLabels"},"Test")," and getting the IP address from the error message that results."),(0,r.kt)("p",null,"You can either connect just once to gather data, or save the connection to use it again later. If you press ",(0,r.kt)("span",{class:"buttonLabels"},"Connect")," without saving, OpenRefine will forget all the information you just entered. If you\u2019d like to save the connection, name your connection in a way you will recognize later. Click ",(0,r.kt)("span",{class:"buttonLabels"},"Save")," and it will appear in the ",(0,r.kt)("span",{class:"menuItems"},"Saved Connections")," list on the left. From now on, you can click on the ",(0,r.kt)("span",{class:"buttonLabels"},"...")," ellipsis to the right of the connection you\u2019ve saved, and click ",(0,r.kt)("span",{class:"buttonLabels"},"Connect"),"."),(0,r.kt)("p",null,"If your connection is successful, you will see a Query Editor where you can run your SQL query. OpenRefine will give you an error if you write a statement that tries to modify the source database in any way."),(0,r.kt)("h3",{id:"google-data"},"Google data"),(0,r.kt)("p",null,"You have two ways to load in data from Google Sheets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"providing a link to an accessible Google Sheet (that is, one with link-sharing turned on), and"),(0,r.kt)("li",{parentName:"ul"},"selecting a Google Sheet in your Google Drive.")),(0,r.kt)("h4",{id:"google-sheet-by-url"},"Google Sheet by URL"),(0,r.kt)("p",null,"You can import data from any Google Sheet that has link-sharing turned on. Paste in a URL that looks something like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://docs.google.com/spreadsheets/\u2026\u2026\u2026/edit?usp=sharing\n")),(0,r.kt)("p",null,"This will only work with Sheets, not with any other Google Drive file that might have an available link, including ",(0,r.kt)("inlineCode",{parentName:"p"},".xls")," and other valid files that are hosted in Google Drive. These links will not work when attempting to start a project ",(0,r.kt)("a",{parentName:"p",href:"#web-addresses-urls"},"by URL")," either, so you need to download those files to your computer."),(0,r.kt)("h4",{id:"google-sheet-from-drive"},"Google Sheet from Drive"),(0,r.kt)("p",null,"You can authorize OpenRefine to access your Google Drive data and import data from any Google Sheet it finds there. This will include Sheets that belong to you and Sheets that are shared with you, as well as Sheets that are in your trash. "),(0,r.kt)("p",null,"When you select a Google option (either here, or ",(0,r.kt)("a",{parentName:"p",href:"exporting"},"when exporting project data to Google Drive or Google Sheets"),", you will see a pop-up window that asks you to select a Google account to authorize with. You may see an error message when you authorize: if so, try your import or export operation again and it should succeed."),(0,r.kt)("p",null,"OpenRefine will not show spreadsheets that are in your email inbox or stored in any other Google property - only in Drive. It also won\u2019t show all compatible file formats, only Sheets files."),(0,r.kt)("p",null,"OpenRefine will generate a list of all Sheets it finds, with the most recently modified Sheets at the top. If a file you\u2019ve just added isn\u2019t showing in this list, you can close and restart OpenRefine, or simply navigate to an existing project, open it, then head back to the ",(0,r.kt)("span",{class:"menuItems"},"Create Project")," window and check again. "),(0,r.kt)("p",null,"When you click ",(0,r.kt)("span",{class:"buttonLabels"},"Preview")," the Sheet will open in a new browser tab. When you click the Sheet title, OpenRefine will begin to process the data."),(0,r.kt)("h2",{id:"project-preview"},"Project preview"),(0,r.kt)("p",null,"Once OpenRefine is ready to import the data, you will see a screen with ",(0,r.kt)("span",{class:"menuItems"},"Configure Parsing Options")," at the top. You\u2019ll see a preview of the first 100 rows and all identified columns. "),(0,r.kt)("p",null,"At the bottom of the screen you will find options for telling OpenRefine how to process what it has found. You can tell it which row(s) to parse as column headers, as well as to ignore any number of rows at the top. You can also select a specific range of rows to work with, by discarding some rows at the top (excluding the header) and limiting the total number of rows it loads."),(0,r.kt)("p",null,"OpenRefine tries to guess how to parse your data based on the file extension. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},".xml")," files are going to be parsed as though they are formatted in XML. An unknown file extension (or your clipboard copy-paste) is assumed to be either tab-separated or comma-separated. OpenRefine looks for a tab character, and if one is found, it assumes you have imported tab-separated data."),(0,r.kt)("p",null,"If OpenRefine isn\u2019t certain what format you imported, it will provide a list of possibilities under ",(0,r.kt)("span",{class:"menuItems"},"Parse data as")," and some settings. You can specify a custom separator now, or split columns later while ",(0,r.kt)("a",{parentName:"p",href:"transforming"},"transforming your data"),". "),(0,r.kt)("p",null,"If you imported a spreadsheet with multiple worksheets, they will be listed along with the number of rows they contain. You can only select data from one worksheet. "),(0,r.kt)("p",null,"Note that OpenRefine does not preserve any formatting, such as cell or text colour, that my have been in the original data file. Hyperlinked text will be input as plain text, but OpenRefine will recognize links and make them clickable inside the project interface. "),(0,r.kt)("admonition",{title:"Encoding issues?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Look for character encoding issues at this stage. You may want to manually select an encoding, such as UTF-8, UTF-16, or ASCII, if OpenRefine does not display some characters correctly in the preview. Once your project is created, you can specify another encoding for specific columns using the ",(0,r.kt)("a",{parentName:"p",href:"grelfunctions#reinterprets-s-encoder"},"reinterpret() function"),".")),(0,r.kt)("p",null,"You should create a project name at this stage. You can also supply tags to keep your projects organized. When you\u2019re happy with the preview, click ",(0,r.kt)("span",{class:"buttonLabels"},"Create Project"),"."),(0,r.kt)("h2",{id:"import-a-project"},"Import a project"),(0,r.kt)("p",null,"Because OpenRefine only runs locally on your computer, you can\u2019t have a project accessible to more than one person at the same time. "),(0,r.kt)("p",null,"The best way to collaborate with another person is to export and import projects that save all your changes, so that you can pick up where someone else left off. You can also ",(0,r.kt)("a",{parentName:"p",href:"exporting#export-a-project"},"export projects")," and import them to other computers, such as for working on the same project from the office and from home. "),(0,r.kt)("p",null,"An exported project will include all of the ",(0,r.kt)("a",{parentName:"p",href:"running#history-undoredo"},"history"),", so you can see (and undo) all the changes from the previous user. It is essentially a point-in-time snapshot of their work. OpenRefine only exports projects as ",(0,r.kt)("inlineCode",{parentName:"p"},".tar.gz")," files at this time. "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you wish to hide the original state of your data and your history of edits (for example, if you are using OpenRefine to anonymize information), export your cleaned dataset only and do not share your project archive.")),(0,r.kt)("p",null,"Once someone has sent you a project archive file from their computer, you can save it anywhere. OpenRefine will import it like a new project and save its information to your workspace directory. "),(0,r.kt)("p",null,"In the left-hand menu of the home screen, click ",(0,r.kt)("span",{class:"buttonLabels"},"Import Project"),". Click ",(0,r.kt)("span",{class:"buttonLabels"},"Browse\u2026")," and navigate to wherever you saved the file you were sent (for example, your Downloads folder). "),(0,r.kt)("p",null,"You can rename the project if you\u2019d like - we recommend adding your name, a date, or a version number, if you\u2019re planning to continue collaborating with another person (or working from multiple computers)."),(0,r.kt)("p",null,"Then, click ",(0,r.kt)("span",{class:"buttonLabels"},"Import Project"),". Your project should appear with a step count beside ",(0,r.kt)("span",{class:"tabLabels"},"Undo/Redo")," if steps were saved by the exporter. "),(0,r.kt)("p",null,"OpenRefine will store the project in its own workspace directory, so you can now delete the original file that was sent to you. "),(0,r.kt)("h2",{id:"project-management"},"Project management"),(0,r.kt)("p",null,"You can access all of your created projects by clicking on ",(0,r.kt)("span",{class:"menuItems"},"Open Project"),". Your project list can be organized by modification date, title, row count, and other metadata you can supply (such as subject, descripton, tags, or creator). To edit the fields you see here, click ",(0,r.kt)("span",{class:"menuItems"},"About")," to the left of each project. There you can edit a number of available fields. You can also see the project ID that corresponds to the name of the folder in your work directory.  "),(0,r.kt)("h3",{id:"naming-projects"},"Naming projects"),(0,r.kt)("p",null,"You may have multiple projects from the same dataset, or multiple versions from sharing a project with another person. OpenRefine automatically generates a project name from the imported file, or \u201cclipboard\u201d when you use ",(0,r.kt)("span",{class:"menuItems"},"Clipboard")," importing. Project names don\u2019t have to be unique, and OpenRefine will create many projects with the same name unless you intervene. "),(0,r.kt)("p",null,"You can edit a project's name when you create it or import it, and you can rename a project later by opening it and clicking on the project name at the top of the screen. "),(0,r.kt)("h3",{id:"autosaving"},"Autosaving"),(0,r.kt)("p",null,"OpenRefine ",(0,r.kt)("a",{parentName:"p",href:"running#history-undoredo"},"saves all of your actions")," (everything you can see in the ",(0,r.kt)("span",{class:"tabLabels"},"Undo/Redo")," panel). That includes flagging and starring rows."),(0,r.kt)("p",null,"It doesn\u2019t, however, save your facets, filters, or any kind of view you may have in place while you work. This includes the number of rows showing, and any sorting or column collapsing you may have done. A good rule of thumb is: if it\u2019s not showing in ",(0,r.kt)("span",{class:"tabLabels"},"Undo/Redo"),", you will lose it when you leave the project workspace. "),(0,r.kt)("p",null,"Autosaving happens by default every five minutes. You can ",(0,r.kt)("a",{parentName:"p",href:"running#jvm-preferences"},"change this preference by following these directions"),"."),(0,r.kt)("p",null,"You can only save and share facets and filters, not any other type of view. To save current facets and filters, click ",(0,r.kt)("span",{class:"menuItems"},"Permalink"),". The project will reload with a different URL, which you can then copy and save elsewhere. This permalink will save both the facets and filters you\u2019ve set, and the settings for each one (such as sorting by count rather than by name). "),(0,r.kt)("h3",{id:"deleting-projects"},"Deleting projects"),(0,r.kt)("p",null,"You can delete projects, which will erase the project files from the workspace directory on your computer. This is immediate and cannot be undone."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("span",{class:"menuItems"},"Open Project")," and find the project you want to delete. Click on the ",(0,r.kt)("span",{class:"menuItems"},"X")," to the left of the project name. There will be a confirmation dialog. "),(0,r.kt)("h3",{id:"project-files"},"Project files"),(0,r.kt)("p",null,"You can find all of your raw project files in your work directory. They will be named according to the unique \u201cProject ID\u201d that OpenRefine has assigned them, which you can find on the ",(0,r.kt)("span",{class:"menuItems"},"Open Project")," screen, under the \u201cAbout\u201d link for each project."))}h.isMDXComponent=!0}}]);