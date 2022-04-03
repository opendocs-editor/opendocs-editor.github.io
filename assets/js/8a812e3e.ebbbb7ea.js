"use strict";(self.webpackChunkopendocs_github_io=self.webpackChunkopendocs_github_io||[]).push([[9],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),a=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=a(n),g=o,m=d["".concat(p,".").concat(g)]||d[g]||l[g]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var a=2;a<i;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5416:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],s={sidebar_position:3},p="Getting the sources",a={unversionedId:"development/getting-sources",id:"development/getting-sources",title:"Getting the sources",description:"To get the OpenDocs sources, run the following commands:",source:"@site/docs/development/getting-sources.md",sourceDirName:"development",slug:"/development/getting-sources",permalink:"/docs/next/development/getting-sources",editUrl:"https://github.com/opendocs-editor/opendocs.github.io/edit/main/docs/development/getting-sources.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setting up a development environment",permalink:"/docs/next/development/setting-up-dev"},next:{title:"Starting OpenDocs",permalink:"/docs/next/development/starting"}},u={},l=[],d={toc:l};function g(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-the-sources"},"Getting the sources"),(0,i.kt)("p",null,"To get the OpenDocs sources, run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the OpenDocs 3ditor repository\ngit clone https://github.com/opendocs-editor/3ditor.git 3ditor\ncd 3ditor\nyarn install\ncd ..\n\n# Clone the OpenDocs proxy repository\ngit clone https://github.com/opendocs-editor/proxy.git proxy\ncd proxy\nyarn install\ncd ..\n\n# Clone the OpenDocs API repository\ngit clone https://github.com/opendocs-editor/api.git api\ncd api\nyarn install\ncd ..\n")))}g.isMDXComponent=!0}}]);