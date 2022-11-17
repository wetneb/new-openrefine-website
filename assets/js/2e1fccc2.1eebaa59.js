"use strict";(self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[]).push([[8914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),d=u(n),p=s,f=d["".concat(l,".").concat(p)]||d[p]||c[p]||o;return n?i.createElement(f,r(r({ref:t},h),{},{components:n})):i.createElement(f,r({ref:t},h))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,r[1]=a;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var i=n(7462),s=n(3366),o=(n(7294),n(3905)),r=["components"],a={id:"maintainer-guidelines",title:"Guidelines for maintaining OpenRefine",sidebar_label:"Maintainer guidelines"},l=void 0,u={unversionedId:"technical-reference/maintainer-guidelines",id:"version-3.6/technical-reference/maintainer-guidelines",title:"Guidelines for maintaining OpenRefine",description:"This page describes our practices to review issues and pull requests in the OpenRefine project.",source:"@site/versioned_docs/version-3.6/technical-reference/maintainer-guidelines.md",sourceDirName:"technical-reference",slug:"/technical-reference/maintainer-guidelines",permalink:"/new-openrefine-website/docs/technical-reference/maintainer-guidelines",draft:!1,editUrl:"https://github.com/OpenRefine/OpenRefine/edit/master/docs/versioned_docs/version-3.6/technical-reference/maintainer-guidelines.md",tags:[],version:"3.6",lastUpdatedBy:"Antonin Delpeuch",lastUpdatedAt:1662887291,formattedLastUpdatedAt:"Sep 11, 2022",frontMatter:{id:"maintainer-guidelines",title:"Guidelines for maintaining OpenRefine",sidebar_label:"Maintainer guidelines"},sidebar:"version-3.6/docs",previous:{title:"Functional tests",permalink:"/new-openrefine-website/docs/technical-reference/functional-tests"},next:{title:"Wikibase extension",permalink:"/new-openrefine-website/docs/technical-reference/wikibase/architecture"}},h={},c=[{value:"Reviewing issues",id:"reviewing-issues",level:2},{value:"Bugs",id:"bugs",level:3},{value:"Enhancement requests",id:"enhancement-requests",level:3},{value:"Tagging good first issues",id:"tagging-good-first-issues",level:3},{value:"Reviewing pull requests",id:"reviewing-pull-requests",level:2},{value:"Process",id:"process",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Code style",id:"code-style",level:4},{value:"Testing",id:"testing",level:4},{value:"Documentation",id:"documentation",level:4},{value:"UI style",id:"ui-style",level:4},{value:"Licensing and dependencies",id:"licensing-and-dependencies",level:4},{value:"Continuous integration",id:"continuous-integration",level:4},{value:"Special pull requests",id:"special-pull-requests",level:3},{value:"Weblate PRs",id:"weblate-prs",level:4},{value:"Dependabot PRs",id:"dependabot-prs",level:4}],d={toc:c};function p(e){var t=e.components,n=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page describes our practices to review issues and pull requests in the OpenRefine project."),(0,o.kt)("h2",{id:"reviewing-issues"},"Reviewing issues"),(0,o.kt)("p",null,"When people create new issues, they automatically get assigned ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/issues?q=is%3Aissue+is%3Aopen+label%3A%22to+be+reviewed%22"},'the "to be reviewed" tag'),"."),(0,o.kt)("p",null,'Ideally, for each of these issues, someone familiar with OpenRefine (not necessarily a developer!) should read the issue and try to determine if there is a genuine bug to fix, or if the enhancement request is legitimate. In those cases, we can remove the "to be reviewed" tag and leave the issue open. In the others, the issue should be politely closed.'),(0,o.kt)("h3",{id:"bugs"},"Bugs"),(0,o.kt)("p",null,'For a bug, we should first check if it is a real unexpected behaviour or if just comes from a misunderstanding of the intended behaviour of the tool (which could suggest an improvement to the documentation). Then, if it sounds like a genuine problem, we need to check if it can be reproduced independently on the master branch. If the issue does not give enough details about the bug to reproduce it on master, mark it as "not reproducible" and ask the reporter for more information. After some time without any information from the reporter, we can close the issue.'),(0,o.kt)("h3",{id:"enhancement-requests"},"Enhancement requests"),(0,o.kt)("p",null,"For an enhancement, we need to make a judgment call of whether the proposed functionality is in the scope of the project. There is no universal rule for this of course, so just use your own intuition: do you think this would improve the tool? Would it be consistent with the spirit of the project? Trust your own opinion - if people disagree, they can have a discussion on the issue."),(0,o.kt)("h3",{id:"tagging-good-first-issues"},"Tagging good first issues"),(0,o.kt)("p",null,"Adding ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22"},'the "good first issue" tag')," is something that requires a bit more familiarity with the development process. This tag is used by GitHub to showcase issues in some project lists and we point interested potential contributors to it. It is therefore important that tackling these issues gives them a nice onboarding experience, with as few hurdles as possible."),(0,o.kt)("p",null,'Develepers should add the "good first issue" tag when they are confident that they can provide a good pull request for the issue with at most a few hours of work. Also, solving the issue should not require any difficult design decision. The issue should be uncontentious: it should be clear that the proposed solution should be accepted by the team.'),(0,o.kt)("h2",{id:"reviewing-pull-requests"},"Reviewing pull requests"),(0,o.kt)("h3",{id:"process"},"Process"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A committer reviews the PR to check for the requirements below and tests it. Each PR should be linked to one or more corresponding issues and the reviewer should check that those are correctly addressed by the PR. The reviewer should be someone else than the PR author. For PRs with an important impact or contentious issues, it is important to leave enough time for other contributors to give their opinion.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The reviewer merges the pull request by squashing its commits into one (except for Weblate PRs which should be merged without squashing).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The reviewer adds the linked issues to the milestone for the next release (such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/milestone/17"},"the 3.5 milestone"),")")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the change is worth noting for users or developers, the reviewer adds an entry in the changelog for the next release (such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/wiki/Changes-for-3.5"},"Changes for 3.5"),")"))),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("h4",{id:"code-style"},"Code style"),(0,o.kt)("p",null,"Currently, only our code style for integration tests (using Cypress) is codified and enforced by the CI.\nFor the rest, we rely on imitating the surrounding code. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenRefine/OpenRefine/issues/2338"},"We should decide on a code style and check it in the CI for other areas of the tool"),"."),(0,o.kt)("h4",{id:"testing"},"Testing"),(0,o.kt)("p",null,"We currently rely have two sorts of tests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Backend tests, in Java, written with the TestNG framework. Their granularity varies, but generally speaking they are unit tests which test components in isolation."),(0,o.kt)("li",{parentName:"ul"},"UI tests, in Javascript, written with the Cypress framework. They are integration tests which test both the frontend and the backend at the same time.")),(0,o.kt)("p",null,"Changes to the backend should generally come with the accompanying TestNG tests.\nFunctional changes to the UI should ideally come with corresponding Cypress tests as well."),(0,o.kt)("p",null,"Those tests should be supplied in the same PR as the one that touches the product code."),(0,o.kt)("h4",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"Changes to user-facing functionality should be reflected in the docs. Those documentation changes should happen in the same PR as the one that touches the product code."),(0,o.kt)("h4",{id:"ui-style"},"UI style"),(0,o.kt)("p",null,"We do not have formally defined UI style guidelines. Contributors are invited to imitate the existing style."),(0,o.kt)("h4",{id:"licensing-and-dependencies"},"Licensing and dependencies"),(0,o.kt)("p",null,"Dependencies can only be added if they are released under a license that is compatible with our BSD Clause-3 license.\nOne should pay attention to the size of the dependencies since they inflate the size of the release bundles."),(0,o.kt)("h4",{id:"continuous-integration"},"Continuous integration"),(0,o.kt)("p",null,"The various check statuses reported by our continuous integration suite should be green."),(0,o.kt)("h3",{id:"special-pull-requests"},"Special pull requests"),(0,o.kt)("h4",{id:"weblate-prs"},"Weblate PRs"),(0,o.kt)("p",null,"Weblate PRs should not be squashed as it prevents Weblate from recognizing that the corresponding changes have been made in master. They should be merged without squashing."),(0,o.kt)("p",null,"Reviewing Weblate PRs only amonuts to a quick visual sanity check as maintainers are not expected to master the languages involved. If corrections need to be made, they should be done in Weblate itself."),(0,o.kt)("h4",{id:"dependabot-prs"},"Dependabot PRs"),(0,o.kt)("p",null,"When reviewing a Dependabot PR it is generally useful to pay attention to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'the type of version change: most libraries follow the "semver" versioning convention, which indicates the nature of the change.'),(0,o.kt)("li",{parentName:"ul"},"the library's changelog, especially if the version change is more significant than a patch release")))}p.isMDXComponent=!0}}]);