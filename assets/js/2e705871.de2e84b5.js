"use strict";(self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[]).push([[7256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,h=m["".concat(l,".").concat(f)]||m[f]||d[f]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={id:"version-release-process",title:"How to do an OpenRefine version release",sidebar_label:"How to do an OpenRefine version release"},l=void 0,p={unversionedId:"technical-reference/version-release-process",id:"version-3.5/technical-reference/version-release-process",title:"How to do an OpenRefine version release",description:"When releasing a new version of Refine, the following steps should be followed:",source:"@site/versioned_docs/version-3.5/technical-reference/version-release-process.md",sourceDirName:"technical-reference",slug:"/technical-reference/version-release-process",permalink:"/new-openrefine-website/docs/3.5/technical-reference/version-release-process",draft:!1,editUrl:"https://github.com/OpenRefine/OpenRefine/edit/master/docs/versioned_docs/version-3.5/technical-reference/version-release-process.md",tags:[],version:"3.5",lastUpdatedBy:"Antonin Delpeuch",lastUpdatedAt:1662887291,formattedLastUpdatedAt:"Sep 11, 2022",frontMatter:{id:"version-release-process",title:"How to do an OpenRefine version release",sidebar_label:"How to do an OpenRefine version release"},sidebar:"version-3.5/docs",previous:{title:"Development roadmap",permalink:"/new-openrefine-website/docs/3.5/technical-reference/development-roadmap"},next:{title:"Maintaining OpenRefine's Homebrew cask",permalink:"/new-openrefine-website/docs/3.5/technical-reference/homebrew-cask-process"}},c={},d=[],m={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When releasing a new version of Refine, the following steps should be followed:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make sure the ",(0,i.kt)("inlineCode",{parentName:"li"},"master")," branch is stable and nothing has broken since the previous version. We need developers to stabilize the trunk and some volunteers to try out ",(0,i.kt)("inlineCode",{parentName:"li"},"master")," for a few days."),(0,i.kt)("li",{parentName:"ol"},"Change the version number in ",(0,i.kt)("a",{parentName:"li",href:"http://github.com/OpenRefine/OpenRefine/blob/master/main/src/com/google/refine/RefineServlet.java#L62"},"RefineServlet.java")," and in the POM files using ",(0,i.kt)("inlineCode",{parentName:"li"},"mvn versions:set -DnewVersion=2.6-beta -DgenerateBackupPoms=false"),". Commit the changes."),(0,i.kt)("li",{parentName:"ol"},"Compose the list of changes in the code and on the wiki. If the issues have been updated with the appropriate milestone, the Github issue tracker should be able to provide a good starting point for this."),(0,i.kt)("li",{parentName:"ol"},"Set up build machine. This needs to be Mac OS X or Linux."),(0,i.kt)("li",{parentName:"ol"},"Download Windows and Mac JREs to bundle them in the Windows and Mac packages from ",(0,i.kt)("a",{parentName:"li",href:"https://adoptopenjdk.net/"},"AdoptOpenJDK"),". You only need the JREs, not the JDKs. Use the lowest version of Java supported (Java 8 currently). Configure the location of these JREs in the ",(0,i.kt)("inlineCode",{parentName:"li"},"settings.xml")," file at the root of the repository. It is important to download recent versions of the JREs as this impacts which HTTPS certificates are accepted by the tool."),(0,i.kt)("li",{parentName:"ol"},"Insert the production Google credentials in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenRefine/OpenRefine/blob/bc540a880eceb88e54f85ca43eb54769de3bfa4f/extensions/gdata/src/com/google/refine/extension/gdata/GoogleAPIExtension.java#L36-L39"},"https://github.com/OpenRefine/OpenRefine/blob/bc540a880eceb88e54f85ca43eb54769de3bfa4f/extensions/gdata/src/com/google/refine/extension/gdata/GoogleAPIExtension.java#L36-L39")," without committing the changes."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenRefine/OpenRefine/wiki/Building-OpenRefine-From-Source"},"Build the release candidate kits using the shell script (not just Maven)"),". This must be done on Mac OS X or Linux to be able to build all 3 kits. On Linux you will need to install the ",(0,i.kt)("inlineCode",{parentName:"li"},"genisoimage")," program first. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./refine dist 2.6-beta.2\n")),(0,i.kt)("p",null,"To build the Windows version with embedded JRE, use ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn package -s settings.xml -P embedded-jre -DskipTests=true"),"."),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On a Mac machine, compress the Mac ",(0,i.kt)("inlineCode",{parentName:"p"},".dmg")," (",(0,i.kt)("inlineCode",{parentName:"p"},"genisoimage")," does not compress it by default) with the following command on a mac machine: ",(0,i.kt)("inlineCode",{parentName:"p"},"hdiutil convert openrefine-uncompressed.dmg -format UDZO -imagekey zlib-level=9 -o openrefine-3.1-mac.dmg"),". If running OS X in a VM, it's probably quicker and more reliable to transfer the kits to the host machine first and then to Github. Finder -> Go -> Connect -> smb://10.0.2.2/. You can then sign the generated DMG file with ",(0,i.kt)("inlineCode",{parentName:"p"},'codesign -s "Apple Distribution: Code for Science and Society, Inc." openrefine-3.1-mac.dmg'),". This requires that you have installed the appropriate certificate on your Mac, see below.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tag the release candidate in git and push the tag to Github. For example:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'git tag -a -m "Second beta" 2.6-beta.2\n    git push origin --tags\n')),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},"Upload the kits to Github releases ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenRefine/OpenRefine/releases/"},"https://github.com/OpenRefine/OpenRefine/releases/"),"  Mention the SHA sums of all uploaded artifacts."),(0,i.kt)("li",{parentName:"ol"},"Announce the beta/release candidate for testing"),(0,i.kt)("li",{parentName:"ol"},"Repeat build/release candidate/testing cycle, if necessary."),(0,i.kt)("li",{parentName:"ol"},"Tag the release in git. Build the distributions and upload them. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenRefine/OpenRefine/wiki/Maintaining-OpenRefine's-Homebrew-Cask"},"Update the OpenRefine Homebrew cask")," or coordinate an update via the ",(0,i.kt)("a",{parentName:"li",href:"https://groups.google.com/forum/#!forum/openrefine-dev"},"developer list")),(0,i.kt)("li",{parentName:"ol"},"Verify that the correct versions are shown in the widget at ",(0,i.kt)("a",{parentName:"li",href:"http://openrefine.org/download"},"http://openrefine.org/download")),(0,i.kt)("li",{parentName:"ol"},"Announce on the ",(0,i.kt)("a",{parentName:"li",href:"https://groups.google.com/forum/#!forum/openrefine"},"OpenRefine mailing list"),"."),(0,i.kt)("li",{parentName:"ol"},"Update the version in master to the next version number with ",(0,i.kt)("inlineCode",{parentName:"li"},"-SNAPSHOT")," (such as ",(0,i.kt)("inlineCode",{parentName:"li"},"4.3-SNAPSHOT"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"mvn versions:set -DnewVersion=4.3-SNAPSHOT\n")),(0,i.kt)("ol",{start:18},(0,i.kt)("li",{parentName:"ol"},"If releasing a new major or minor version, create a snapshot of the docs, following ",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/versioning"},"Docusaurus' versioning procedure"),".")),(0,i.kt)("h1",{id:"apple-code-signing"},"Apple code signing"),(0,i.kt)("p",null,"We have code signing certificates for our iOS distributions. To use them, follow these steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request ",(0,i.kt)("a",{parentName:"li",href:"mailto:advisory.committee@openrefine.org"},"advisory.committee@openrefine.org")," to be added to the Apple team: you need to provide the email address that corresponds to your AppleID account;"),(0,i.kt)("li",{parentName:"ul"},"Create a certificate signing request from your Mac: ",(0,i.kt)("a",{parentName:"li",href:"https://help.apple.com/developer-account/#/devbfa00fef7"},"https://help.apple.com/developer-account/#/devbfa00fef7")),(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/account/resources/certificates/add"},"https://developer.apple.com/account/resources/certificates/add"),' and select "Apple Distribution" as certificate type'),(0,i.kt)("li",{parentName:"ul"},"Upload the certificate signing request in the form"),(0,i.kt)("li",{parentName:"ul"},"Download the generated certificate"),(0,i.kt)("li",{parentName:"ul"},'Import this certificate in the "Keychain Access" app on your mac'),(0,i.kt)("li",{parentName:"ul"},"You can now sign code on behalf of the team using the ",(0,i.kt)("inlineCode",{parentName:"li"},"codesign")," utility, such as ",(0,i.kt)("inlineCode",{parentName:"li"},'codesign -s "Apple Distribution: Code for Science and Society, Inc." openrefine-3.1-mac.dmg'),".")))}f.isMDXComponent=!0}}]);