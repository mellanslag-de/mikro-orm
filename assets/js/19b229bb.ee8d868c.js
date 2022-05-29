"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7494],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},902:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={title:"Entity Generator"},l=void 0,c={unversionedId:"entity-generator",id:"version-5.2/entity-generator",title:"Entity Generator",description:"To generate entities from existing database schema, you can use EntityGenerator helper.",source:"@site/versioned_docs/version-5.2/entity-generator.md",sourceDirName:".",slug:"/entity-generator",permalink:"/docs/5.2/entity-generator",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.2/entity-generator.md",tags:[],version:"5.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1662227988,formattedLastUpdatedAt:"Sep 3, 2022",frontMatter:{title:"Entity Generator"},sidebar:"docs",previous:{title:"Schema Generator",permalink:"/docs/5.2/schema-generator"},next:{title:"Naming Strategy",permalink:"/docs/5.2/naming-strategy"}},p={},u=[{value:"Advanced",id:"advanced",level:2},{value:"Current limitations",id:"current-limitations",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To generate entities from existing database schema, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityGenerator")," helper. "),(0,o.kt)("p",null,"You can use it via CLI: "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To work with the CLI, first install ",(0,o.kt)("inlineCode",{parentName:"p"},"@mikro-orm/cli")," package locally.\nThe version needs to be aligned with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core")," package.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm generate-entities --dump  # Dumps all generated entities\nnpx mikro-orm generate-entities --save --path=./my-entities  # Saves entities into given directory\n")),(0,o.kt)("p",null,"Or you can create simple script where you initialize MikroORM like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./generate-entities.ts"',title:'"./generate-entities.ts"'},"import { MikroORM } from '@mikro-orm/core';\n\n(async () => {\n  const orm = await MikroORM.init({\n    discovery: {\n      // we need to disable validation for no entities \n      warnWhenNoEntities: false,\n    },\n    dbName: 'your-db-name',\n    // ...\n  });\n  const generator = orm.getEntityGenerator();\n  const dump = await generator.generate({ \n    save: true,\n    baseDir: process.cwd() + '/my-entities',\n  });\n  console.log(dump);\n  await orm.close(true);\n})();\n")),(0,o.kt)("p",null,"Then run this script via ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",(0,o.kt)("inlineCode",{parentName:"p"},"node"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ ts-node generate-entities\n")),(0,o.kt)("h2",{id:"advanced"},"Advanced"),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityGenerator")," generates only owning sides of relations (e.g. M:1). We can configure it via ",(0,o.kt)("inlineCode",{parentName:"p"},"entityGenerator: { bidirectionalRelations: true }")," to generate also the inverse sides for them. To generate M:1 and 1:1 relations as wrapped references, use ",(0,o.kt)("inlineCode",{parentName:"p"},"entityGenerator: { identifiedReferences: true }"),"."),(0,o.kt)("h2",{id:"current-limitations"},"Current limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in mysql, tinyint columns will be defined as boolean properties")))}m.isMDXComponent=!0}}]);