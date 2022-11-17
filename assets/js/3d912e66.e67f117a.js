"use strict";(self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[]).push([[8928],{3905:(e,i,t)=>{t.d(i,{Zo:()=>h,kt:()=>u});var n=t(7294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function r(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var i=n.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):s(s({},i),e)),t},h=function(e){var i=p(e.components);return n.createElement(l.Provider,{value:i},e.children)},d={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},c=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return t?n.createElement(f,s(s({ref:i},h),{},{components:t})):n.createElement(f,s({ref:i},h))}));function u(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=c;var r={};for(var l in i)hasOwnProperty.call(i,l)&&(r[l]=i[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7568:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],r={id:"configuration",title:"Connecting OpenRefine to a Wikibase instance",sidebar_label:"Connecting to Wikibase"},l=void 0,p={unversionedId:"manual/wikibase/configuration",id:"manual/wikibase/configuration",title:"Connecting OpenRefine to a Wikibase instance",description:"This page explains how to connect OpenRefine to any Wikibase instance. If you just want to work with Wikidata, you can ignore this page as Wikidata is configured out of the box in OpenRefine.",source:"@site/docs/manual/wikibase/configuration.md",sourceDirName:"manual/wikibase",slug:"/manual/wikibase/configuration",permalink:"/new-openrefine-website/docs/next/manual/wikibase/configuration",draft:!1,editUrl:"https://github.com/OpenRefine/OpenRefine/edit/master/docs/docs/manual/wikibase/configuration.md",tags:[],version:"current",lastUpdatedBy:"Antonin Delpeuch",lastUpdatedAt:1662887291,formattedLastUpdatedAt:"Sep 11, 2022",frontMatter:{id:"configuration",title:"Connecting OpenRefine to a Wikibase instance",sidebar_label:"Connecting to Wikibase"},sidebar:"docs",previous:{title:"Overview",permalink:"/new-openrefine-website/docs/next/manual/wikibase/overview"},next:{title:"Reconciling with Wikibase",permalink:"/new-openrefine-website/docs/next/manual/wikibase/reconciling"}},h={},d=[{value:"For Wikibase end users",id:"for-wikibase-end-users",level:2},{value:"For Wikibase administrators",id:"for-wikibase-administrators",level:2},{value:"Requirements",id:"requirements",level:3},{value:"The format of the manifest",id:"the-format-of-the-manifest",level:3},{value:"version",id:"version",level:4},{value:"mediawiki",id:"mediawiki",level:4},{value:"name",id:"name",level:5},{value:"root",id:"root",level:5},{value:"main_page",id:"main_page",level:5},{value:"api",id:"api",level:5},{value:"wikibase",id:"wikibase",level:4},{value:"site_iri",id:"site_iri",level:5},{value:"maxlag",id:"maxlag",level:5},{value:"tag",id:"tag",level:5},{value:"max_edits_per_minute",id:"max_edits_per_minute",level:5},{value:"properties",id:"properties",level:5},{value:"instance_of",id:"instance_of",level:6},{value:"subclass_of",id:"subclass_of",level:6},{value:"constraints",id:"constraints",level:5},{value:"oauth",id:"oauth",level:4},{value:"registration_page",id:"registration_page",level:5},{value:"entity_types",id:"entity_types",level:4},{value:"reconciliation_endpoint",id:"reconciliation_endpoint",level:5},{value:"site_iri",id:"site_iri",level:5},{value:"mediawiki_api",id:"mediawiki_api",level:5},{value:"hide_structured_fields_in_mediainfo",id:"hide_structured_fields_in_mediainfo",level:4},{value:"editgroups",id:"editgroups",level:4},{value:"url_schema",id:"url_schema",level:5},{value:"Check the format of the manifest",id:"check-the-format-of-the-manifest",level:4},{value:"Migrate from the version 1 to the version 2 of the manifest format",id:"migrate-from-the-version-1-to-the-version-2-of-the-manifest-format",level:4}],c={toc:d};function u(e){var i=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page explains how to connect OpenRefine to any Wikibase instance. If you just want to work with ",(0,o.kt)("a",{parentName:"p",href:"https://www.wikidata.org/"},"Wikidata"),", you can ignore this page as Wikidata is configured out of the box in OpenRefine."),(0,o.kt)("h2",{id:"for-wikibase-end-users"},"For Wikibase end users"),(0,o.kt)("p",null,"All you need to configure OpenRefine to work with a Wikibase instance is a ",(0,o.kt)("em",{parentName:"p"},"manifest")," for that instance, which provides some metadata and links required for the integration to work."),(0,o.kt)("p",null,"We offer some off-the-shelf manifests for some public Wikibase instances in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/wikibase-manifests"},"wikibase-manifests")," repository. But the administrators of your Wikibase instance should provide one that is potentially more\nup to date, so it makes sense to request it to them first."),(0,o.kt)("h2",{id:"for-wikibase-administrators"},"For Wikibase administrators"),(0,o.kt)("p",null,"To let your users contribute to your Wikibase instance with OpenRefine, you will need to write a manifest as described above. There is currently no canonical location where this manifest should be hosted - just make sure can be found easily by your users. This section explains the format of the manifest."),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"To work with OpenRefine, your Wikibase instance needs an associated reconciliation service for each editable entity type:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To enable editing items (entities with an identifier starting with Q), you can deploy ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wetneb/openrefine-wikibase"},"a Python wrapper")," for this. It exposes a reconciliation service for items, built on top of Wikibase's own API and its Query Service.\nNote that this service requires the ",(0,o.kt)("a",{parentName:"p",href:"https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:UniversalLanguageSelector"},"UniversalLanguageSelector extension")," should be installed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To enable editing media files (if your Wikibase instance accepts file uploads), you can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wikimedia/labs-tools-commons-recon-service"},"another Python wrapper")," which exposes a reconciliation service for media files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Editing properties or other entity types is not supported yet."))),(0,o.kt)("p",null,"We are aware that deploying those additional web services can be difficult for some Wikibase users, and we think those web services should be replaced by a MediaWiki extension which exposes the reconciliation endpoints from MediaWiki itself. We are not\naware of anyone planning to work on this, though."),(0,o.kt)("h3",{id:"the-format-of-the-manifest"},"The format of the manifest"),(0,o.kt)("p",null,"The manifest is a JSON object describing all the configuration details necessary for OpenRefine to integrate with your Wikibase instance. As an example, here is the manifest of Wikimedia Commons:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "2.0",\n  "mediawiki": {\n    "name": "Wikimedia Commons",\n    "root": "https://commons.wikimedia.org/wiki/",\n    "main_page": "https://commons.wikimedia.org/wiki/Main_Page",\n    "api": "https://commons.wikimedia.org/w/api.php"\n  },\n  "wikibase": {\n    "site_iri": "https://commons.wikimedia.org/entity/",\n    "maxlag": 5,\n    "max_edits_per_minute": 60,\n    "tag": "openrefine-${version}",\n    "properties": {\n      "instance_of": "P31",\n      "subclass_of": "P279"\n    },\n    "constraints": {\n      "property_constraint_pid": "P2302",\n      "exception_to_constraint_pid": "P2303",\n      "constraint_status_pid": "P2316",\n      "mandatory_constraint_qid": "Q21502408",\n      "suggestion_constraint_qid": "Q62026391",\n      "distinct_values_constraint_qid": "Q21502410"\n    }\n  },\n  "oauth": {\n    "registration_page": "https://commons.wikimedia.org/wiki/Special:OAuthConsumerRegistration/propose"\n  },\n  "entity_types": {\n    "item": {\n       "site_iri": "http://www.wikidata.org/entity/",\n       "reconciliation_endpoint": "https://wikidata.reconci.link/${lang}/api",\n       "mediawiki_api": "https://www.wikidata.org/w/api.php"\n    },\n    "property": {\n       "site_iri": "http://www.wikidata.org/entity/",\n       "mediawiki_api": "https://www.wikidata.org/w/api.php"\n    },\n    "mediainfo": {\n       "site_iri": "https://commons.wikimedia.org/entity/",\n       "reconciliation_endpoint": "https://commonsreconcile.toolforge.org/${lang}/api"\n    }\n  },\n  "hide_structured_fields_in_mediainfo": false,\n  "editgroups": {\n    "url_schema": "([[:toollabs:editgroups-commons/b/OR/${batch_id}|details]])"\n  }\n}\n')),(0,o.kt)("p",null,"In general, there are several parts of the manifest: version, mediawiki, wikibase, oauth, entity_types and editgroups."),(0,o.kt)("h4",{id:"version"},"version"),(0,o.kt)("p",null,'The version should in the format "2.x". The minor version should be increased when you update the manifest in a backward-compatible manner. The major version should be "2" if the manifest is in the format specified by ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/afkbrb/wikibase-manifest/blob/master/wikibase-manifest-schema-v2.json"},"wikibase-manifest-schema-v2.json"),"."),(0,o.kt)("h4",{id:"mediawiki"},"mediawiki"),(0,o.kt)("p",null,"This part contains some basic information of the Wikibase."),(0,o.kt)("h5",{id:"name"},"name"),(0,o.kt)("p",null,"The name of the Wikibase, should be unique for different Wikibase instances."),(0,o.kt)("h5",{id:"root"},"root"),(0,o.kt)("p",null,'The root of the Wikibase. Typically in the form "',(0,o.kt)("a",{parentName:"p",href:"https://foo.bar/wiki/%22"},'https://foo.bar/wiki/"'),". The trailing slash cannot be omitted."),(0,o.kt)("h5",{id:"main_page"},"main_page"),(0,o.kt)("p",null,'The main page of the Wikibase. Typically in the form "',(0,o.kt)("a",{parentName:"p",href:"https://foo.bar/wiki/Main_Page%22"},'https://foo.bar/wiki/Main_Page"'),"."),(0,o.kt)("h5",{id:"api"},"api"),(0,o.kt)("p",null,'The MediaWiki API endpoint of the Wikibase. Typically in the form "',(0,o.kt)("a",{parentName:"p",href:"https://foo.bar/w/api.php%22"},'https://foo.bar/w/api.php"'),"."),(0,o.kt)("h4",{id:"wikibase"},"wikibase"),(0,o.kt)("p",null,"This part contains configurations of the Wikibase extension."),(0,o.kt)("h5",{id:"site_iri"},"site_iri"),(0,o.kt)("p",null,"The IRI of the Wikibase, in the form  '",(0,o.kt)("a",{parentName:"p",href:"http://foo.bar/entity/'"},"http://foo.bar/entity/'"),'. This should match the IRI prefixes used in RDF serialization. Be careful about using "http" or "https", because any variation will break comparisons at various places. The trailing slash cannot be omitted.'),(0,o.kt)("h5",{id:"maxlag"},"maxlag"),(0,o.kt)("p",null,"Maxlag is a parameter that controls how aggressive a mass-editing tool should be when uploading edits to a Wikibase instance. See ",(0,o.kt)("a",{parentName:"p",href:"https://www.mediawiki.org/wiki/Manual:Maxlag_parameter"},"https://www.mediawiki.org/wiki/Manual:Maxlag_parameter")," for more details. The value should be adapted according to the actual traffic of the Wikibase."),(0,o.kt)("h5",{id:"tag"},"tag"),(0,o.kt)("p",null,"Specifies a tag which should be applied to all edits made via the tool. The ",(0,o.kt)("code",null,"${version}"),' variable will be replaced by the "major.minor" OpenRefine version before making edits.'),(0,o.kt)("h5",{id:"max_edits_per_minute"},"max_edits_per_minute"),(0,o.kt)("p",null,"Determines the editing speed expressed as the maximum number of edits to perform per minute, as an integer. The editing can still be slower than this rate if the performance of the Wikibase instance degrades. If set to 0, this will disable this cap."),(0,o.kt)("h5",{id:"properties"},"properties"),(0,o.kt)("p",null,"Some special properties of the Wikibase."),(0,o.kt)("h6",{id:"instance_of"},"instance_of"),(0,o.kt)("p",null,'The ID of the property "instance of".'),(0,o.kt)("h6",{id:"subclass_of"},"subclass_of"),(0,o.kt)("p",null,'The ID of the property "subclass of".'),(0,o.kt)("h5",{id:"constraints"},"constraints"),(0,o.kt)("p",null,"Not required. Should be configured if the Wikibase has the ",(0,o.kt)("a",{parentName:"p",href:"https://www.mediawiki.org/wiki/Extension:WikibaseQualityConstraints"},"WikibaseQualityConstraints extension")," installed. Configurations of constraints consists of IDs of constraints related properties and items. For Wikidata, these IDs are retrieved from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wikimedia/mediawiki-extensions-WikibaseQualityConstraints/blob/master/extension.json"},"extension.json"),". To configure this for another Wikibase instance, you should contact an admin of the Wikibase instance to get the content of ",(0,o.kt)("inlineCode",{parentName:"p"},"extension.json"),"."),(0,o.kt)("h4",{id:"oauth"},"oauth"),(0,o.kt)("p",null,"Not required. Should be configured if the Wikibase has the ",(0,o.kt)("a",{parentName:"p",href:"https://www.mediawiki.org/wiki/Extension:OAuth"},"OAuth extension")," installed."),(0,o.kt)("h5",{id:"registration_page"},"registration_page"),(0,o.kt)("p",null,'The page to register an OAuth consumer of the Wikibase. Typically in the form "',(0,o.kt)("a",{parentName:"p",href:"https://foo.bar/wiki/Special:OAuthConsumerRegistration/propose%22"},'https://foo.bar/wiki/Special:OAuthConsumerRegistration/propose"'),"."),(0,o.kt)("h4",{id:"entity_types"},"entity_types"),(0,o.kt)("p",null,"The Wikibase instance can support several entity types (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"item"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"property")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"lexeme"),"), and this section stores parameters which are specific to those entity types."),(0,o.kt)("p",null,"The Wikibase instance must have at least a reconciliation service endpoint linked to it. "),(0,o.kt)("h5",{id:"reconciliation_endpoint"},"reconciliation_endpoint"),(0,o.kt)("p",null,'The default reconciliation service endpoint for entities of this type. The endpoint must contain the "${lang}" variable such as "',(0,o.kt)("a",{parentName:"p",href:"https://wikidata.reconci.link/$%7Blang%7D/api%22"},'https://wikidata.reconci.link/${lang}/api"'),", since the reconciliation service is expected to work for different languages. For the ",(0,o.kt)("inlineCode",{parentName:"p"},"item")," entity type, you can get such a reconciliation service with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wetneb/openrefine-wikibase"},"openrefine-wikibase"),". For the ",(0,o.kt)("inlineCode",{parentName:"p"},"mediainfo")," entity type, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://gerrit.wikimedia.org/g/labs/tools/commons-recon-service"},"commons-recon-service")," which can be configured to run for other Wikibase instances."),(0,o.kt)("p",null,"This parameter is optional: you do not need to run a reconciliation for all entity types available in your Wikibase instance. However, it is a prerequisite for being able to do edits to those entity types via OpenRefine."),(0,o.kt)("h5",{id:"site_iri"},"site_iri"),(0,o.kt)("p",null,"The base IRI for the entities of this type. This property is required. By default, this is expected to be the same as the site IRI for the Wikibase instance (see above), but if entities of this type are federated from another instance, then this should be set to the site IRI of that Wikibase instance."),(0,o.kt)("h5",{id:"mediawiki_api"},"mediawiki_api"),(0,o.kt)("p",null,"The URL of the MediaWiki API to use with entities of this type. If not provided, it is expected to be the same as the MediaWiki API endpoint for this instance, but if entities of this type are federated from another instance, then this should be set to the MediaWiki API endpoint of that Wikibase instance."),(0,o.kt)("h4",{id:"hide_structured_fields_in_mediainfo"},"hide_structured_fields_in_mediainfo"),(0,o.kt)("p",null,"Not required. Set this flag to true if your Wikibase instance supports file uploads (in which case it should have a ",(0,o.kt)("inlineCode",{parentName:"p"},"mediainfo")," section in the ",(0,o.kt)("inlineCode",{parentName:"p"},"entity_types")," object above), but it does not support adding captions and statements directly on the files themselves (unlike\nWikimedia Commons)."),(0,o.kt)("h4",{id:"editgroups"},"editgroups"),(0,o.kt)("p",null,"Not required. Should be configured if the Wikibase instance has ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Wikidata/editgroups"},"EditGroups")," service(s)."),(0,o.kt)("h5",{id:"url_schema"},"url_schema"),(0,o.kt)("p",null,"The URL schema used in edits summary. This is used for EditGroups to extract the batch id from a batch of edits and for linking to the EditGroups page of the batch. The URL schema must contains the variable '${batch_id}', such as '([","[:toollabs:editgroups/b/OR/${batch_id}|details]","])' for Wikidata."),(0,o.kt)("h4",{id:"check-the-format-of-the-manifest"},"Check the format of the manifest"),(0,o.kt)("p",null,"As mentioned above, the manifest should be in the format specified by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/afkbrb/wikibase-manifest/blob/master/wikibase-manifest-schema-v2.json"},"wikibase-manifest-schema-v2.json"),". You can check the format by adding the manifest directly to OpenRefine, and OpenRefine will complain if there is anything wrong with the format."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29347603/90506110-52d85d00-e186-11ea-8077-683d2f234c46.gif",alt:"test-validate-manifest-format"})),(0,o.kt)("h4",{id:"migrate-from-the-version-1-to-the-version-2-of-the-manifest-format"},"Migrate from the version 1 to the version 2 of the manifest format"),(0,o.kt)("p",null,"If you have created a manifest for your Wikibase instance before OpenRefine 3.6, then you have used the version 1 format for manifests. This format was generalized (into version 2) in OpenRefine 3.6 to allow for editing different entity types.\nIf you are interested in letting OpenRefine users edit not just items on your Wikibase instance, but also other types of entities (such as media files), then you should migrate your manifest from version 1 to 2."),(0,o.kt)("p",null,"To do so, you need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Change the ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," field of your manifest to 2.0;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Introduce the new ",(0,o.kt)("inlineCode",{parentName:"p"},"entity_types")," field, into which the URL of your existing reconciliation service should go (inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"item")," subsection). See the documentation above for more details about the expected values of such fields;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Deploy ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wikimedia/labs-tools-commons-recon-service"},"the additional reconciliation service for media files")," and reference it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"entity_types")," section of the manifest, following the documentation above.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If your Wikibase instance supports file uploads, but does not use structured data on those files, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"hide_structured_fields_in_mediainfo")," field to your manifest, as documented above."))),(0,o.kt)("p",null,"After you have made those changes to your manifest, OpenRefine users will need to add it again to their list of Wikibase instances for the changes to take effect."))}u.isMDXComponent=!0}}]);