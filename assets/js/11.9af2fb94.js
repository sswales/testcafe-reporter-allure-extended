(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{368:function(t,e,a){"use strict";a.r(e);var s=a(44),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata"}},[t._v("#")]),t._v(" Metadata")]),t._v(" "),a("p",[t._v("Metadata can be added to a test by using the "),a("code",[t._v("meta()")]),t._v(" function. The metadata can be added to both the "),a("code",[t._v("test")]),t._v(" and the "),a("code",[t._v("fixture")]),t._v(".")]),t._v(" "),a("p",[t._v("Metadata added to a "),a("code",[t._v("fixture")]),t._v(" will be inherited by all tests coupled to that fixture to avoid having to declare metadata that is the same for all tests within the fixture multiple times.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  severity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Severity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TRIVIAL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  issue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TEST-ISSUE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'An example discription'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  epic"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Example Epic Ticket'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  feature"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Example Feature Ticket'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  story"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Example Story Ticket'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  suite"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Main Example Group'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... any other key: value property as custom metadata")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Example test with metadata'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("t")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Test Code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"pre-defined-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-defined-metadata"}},[t._v("#")]),t._v(" Pré-defined metadata")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Metadata")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Severity")]),t._v(" "),a("td",[t._v("The severity values are dictated by the "),a("a",{attrs:{href:"https://github.com/allure-framework/allure-js/tree/master/packages/allure-js-commons",target:"_blank",rel:"noopener noreferrer"}},[t._v("allure-js-commons"),a("OutboundLink")],1),t._v(" package, these values are: "),a("code",[t._v("blocker, critical, normal, minor, trivial")]),t._v(";")])]),t._v(" "),a("tr",[a("td",[t._v("Issue")]),t._v(" "),a("td",[t._v("A Jira Issue can be coupled to a test, creating a link within the Allure Report to the Jira Issue page. The URL to the Jira page can be set in the "),a("a",{attrs:{href:"https://github.com/sswales/testcafe-reporter-allure#configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("allure-js-commons"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("Epic, Feature, Story")]),t._v(" "),a("td",[t._v("To sort the tests based on the "),a("code",[t._v("epic")]),t._v(", "),a("code",[t._v("feature")]),t._v(", and/or "),a("code",[t._v("story")]),t._v(", these metadata options can be used to form a tree structure. The tree is structured as follows: An epic can have multiple features, a feature can have multiple stories, and a story can have multiple tests.")])]),t._v(" "),a("tr",[a("td",[t._v("Suite")]),t._v(" "),a("td",[t._v("Within the Allure Report, the tests are organized by "),a("code",[t._v("fixture")]),t._v(" by default. For a more expansive organization of the tests and fixtures, the "),a("code",[t._v("suite")]),t._v(" parameter can be set. When the "),a("code",[t._v("suite")]),t._v(" parameter is set within a "),a("code",[t._v("test")]),t._v(", a subcategory is created within the "),a("code",[t._v("fixture")]),t._v(" that will group all tests that have the same "),a("code",[t._v("suite")]),t._v(" parameter together. When the "),a("code",[t._v("suite")]),t._v(" parameter is set within a "),a("code",[t._v("fixture")]),t._v(", a parent category is created that will group multiple fixtures that have the same "),a("code",[t._v("suite")]),t._v(" parameter.")])])])]),t._v(" "),a("h2",{attrs:{id:"custom-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-metadata"}},[t._v("#")]),t._v(" Custom metadata")]),t._v(" "),a("p",[t._v("It is also possible to add custom metadata to a "),a("code",[t._v("test")]),t._v(". These will be added as parameters to the Allure Report. These parameters do "),a("strong",[t._v("NOT")]),t._v(" have to be named otherMeta but do require to be a key-value pair of two strings. For example, adding a color parameter to a test: "),a("code",[t._v("color: 'black'")]),t._v(" will result in "),a("code",[t._v("color: black")]),t._v(" be added to the final Allure Report.")]),t._v(" "),a("h2",{attrs:{id:"result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#result"}},[t._v("#")]),t._v(" Result")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/metadata.PNG",alt:"Example of the metadata code shown below."}})])])}),[],!1,null,null,null);e.default=r.exports}}]);