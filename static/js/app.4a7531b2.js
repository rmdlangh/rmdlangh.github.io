(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],p=0,h=[];p<o.length;p++)r=o[p],i[r]&&h.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("04f5"),i=n.n(a);i.a},"04f5":function(e,t,n){},"0512":function(e,t,n){},1661:function(e,t,n){"use strict";var a=n("bcb3"),i=n.n(a);i.a},"246e":function(e,t,n){"use strict";var a=n("47a1"),i=n.n(a);i.a},"3c2e":function(e,t,n){},"47a1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v("Remi Delanghe")]),a("img",{attrs:{src:n("b4d2")}}),a("h2",[e._v("Computer Science Engineer, Entrpreneur, Maker")]),a("hr"),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:{name:"homepage"}}},[e._v("Me")]),e._v(" |\n   "),a("router-link",{attrs:{to:{name:"projects_list"}}},[e._v("Projects")]),e._v(" |\n   "),a("router-link",{attrs:{to:{name:"cv"}}},[e._v("Cirriculum Vitae")])],1),a("router-view"),a("hr")],1)},s=[],r=(n("034f"),n("2877")),o={},l=Object(r["a"])(o,i,s,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=n("2f62"),p=n("bc3a"),h=n.n(p),d=n("a78e"),g=n.n(d),m=h.a.create({baseURL:"/api",timeout:5e3,headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}}),f={fetchMessages:function(){return m.get("messages/").then(function(e){return e.data})},postMessage:function(e){return m.post("messages/",e).then(function(e){return e.data})},deleteMessage:function(e){return m.delete("messages/".concat(e)).then(function(e){return e.data})}},v={messages:[]},_={messages:function(e){return e.messages}},b={getMessages:function(e){var t=e.commit;f.fetchMessages().then(function(e){t("setMessages",e)})},addMessage:function(e,t){var n=e.commit;f.postMessage(t).then(function(){n("addMessage",t)})},deleteMessage:function(e,t){var n=e.commit;f.deleteMessage(t),n("deleteMessage",t)}},w={setMessages:function(e,t){e.messages=t},addMessage:function(e,t){e.messages.push(t)},deleteMessage:function(e,t){e.messages=e.messages.filter(function(e){return e.pk!==t})}},y={namespaced:!0,state:v,getters:_,actions:b,mutations:w},k={fetchProjects:function(){return m.get("projects/").then(function(e){return e.data})}},j={projects:[]},T={projects:function(e){return e.projects}},x={getProjects:function(e){var t=e.commit;k.fetchProjects().then(function(e){t("setProjects",e)})}},C={setProjects:function(e,t){e.projects=t}},I={namespaced:!0,state:j,getters:T,actions:x,mutations:C};a["a"].use(u["a"]);var D=new u["a"].Store({modules:{messages:y,projects:I}}),M=n("8c4f"),E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v("To Be Deleted")]),a("img",{attrs:{src:n("b4d2")}}),a("p",[e._v("\n    For guide and recipes on how to configure / customize this project,"),a("br"),e._v("\n    check out the\n    "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")]),a("h3",[e._v("Installed CLI Plugins")]),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])]),a("h3",[e._v("Essential Links")]),a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])]),a("h3",[e._v("Ecosystem")]),a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])])}],S={name:"VueDemo",props:{}},R=S,A=(n("246e"),Object(r["a"])(R,E,P,!1,null,"01d6af96",null));A.options.__file="VueDemo.vue";var B=A.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v("To Be Deleted")]),a("img",{staticStyle:{width:"250px"},attrs:{src:n("bdfd")}}),a("p",[e._v("The data below is added/removed from the SQLite Database using Django's ORM and Rest Framework.")]),a("br"),a("p",[e._v("Subject")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"}],attrs:{type:"text",placeholder:"Hello"},domProps:{value:e.subject},on:{input:function(t){t.target.composing||(e.subject=t.target.value)}}}),a("p",[e._v("Message")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.msgBody,expression:"msgBody"}],attrs:{type:"text",placeholder:"From the other side"},domProps:{value:e.msgBody},on:{input:function(t){t.target.composing||(e.msgBody=t.target.value)}}}),a("br"),a("br"),a("input",{attrs:{type:"submit",value:"Add",disabled:!e.subject||!e.msgBody},on:{click:function(t){e.addMessage({subject:e.subject,body:e.msgBody})}}}),a("hr"),a("h3",[e._v("Messages on Database")]),0===e.messages.length?a("p",[e._v("No Messages")]):e._e(),e._l(e.messages,function(t,n){return a("div",{key:n,staticClass:"msg"},[a("p",{staticClass:"msg-index"},[e._v("["+e._s(n)+"]")]),a("p",{staticClass:"msg-subject",domProps:{innerHTML:e._s(t.subject)}}),a("p",{staticClass:"msg-body",domProps:{innerHTML:e._s(t.body)}}),a("input",{attrs:{type:"submit",value:"Delete"},on:{click:function(n){e.deleteMessage(t.pk)}}})])})],2)},L=[],O={name:"Messages",data:function(){return{subject:"",msgBody:""}},computed:Object(u["c"])({messages:function(e){return e.messages.messages}}),methods:Object(u["b"])("messages",["addMessage","deleteMessage"]),created:function(){this.$store.dispatch("messages/getMessages")}},K=O,U=(n("c7b3"),Object(r["a"])(K,V,L,!1,null,"cbc20494",null));U.options.__file="Messages.vue";var N=U.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v("Cirriculum Vitae")]),e._m(0),n("h2",[e._v("Education & Work Experience")]),e._l(e.experience_list,function(t){return n("div",{key:t.order},[n("p",[n("a",{attrs:{href:t.place.link,target:"_blank",rel:"noopener"}},[n("b",[e._v(e._s(t.place.name))])]),e._v(" - "+e._s(t.title)+", "+e._s(t.time_frame))])])}),n("hr"),n("h2",[e._v("Skills")]),n("div",{staticClass:"row"},[e._m(1),n("div",{staticClass:"column"},[n("h3",[e._v("International Background & Languages")]),n("div",{staticClass:"skill_content"},[e._m(2),e._l(e.language_list,function(t){return n("ul",{key:t.language},[n("li",[n("b",[e._v(e._s(t.language))]),e._v(": "+e._s(t.level))])])}),n("p",{staticClass:"left_aligned_p"},[e._v("In addition I am also learning the following languages:")]),e._m(3),e._m(4),e._m(5)],2)]),e._m(6)]),n("hr"),n("h2",[e._v("Further Interest")]),e._m(7)],2)},G=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"./static/CV_RemiDelanghe_Mail.pdf",target:"_blank",download:""}},[n("i",[e._v("Download One Pager")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column"},[n("h3",[e._v("Management & Organisation")]),n("div",{staticClass:"skill_content"},[n("p",{staticClass:"left_aligned_p"},[n("b",[e._v(" Director of the VTK show")]),e._v(" '15-'16 & '16-'17: In charge\n               of a team of 60 people, I was responsible for the creation and performance of a theatrical \n               piece from scratch within 5 months. These creative projects allowed me to develop \n               organisational and management skills in a real life context with both financial stakes and \n               unforgiving deadlines. ")]),n("p",{staticClass:"left_aligned_p"},[n("b",[e._v(" CenEka Vice president ")]),e._v(" '16-'17, "),n("b",[e._v("Ceneka External relations")]),e._v(" \n              '17-'18: I took the initiative to revitalise CenEka, the student association of computer science \n              and electrotechnical engineering at the university of Ghent. Together with a team of other \n              passionate students we successfully put this forgotten association back on the map, building \n              meaningful relationships with both Ghent University as well as the industry. ")]),n("p",{staticClass:"left_aligned_p"},[n("b",[e._v("Product Owner")]),e._v(" sept '17- may '18: During a 24 week university group \n              project, we successfully created a POC for indoor navigation using augmented reality. Using \n              the "),n("b",[n("i",[e._v("agile methodology")])]),e._v(", I took on the role of product owner and gained insight in reconciling \n              the needs of multiple stakeholders and the feasibility of the project. ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"left_aligned_p"},[n("b",[e._v("Languages")]),e._v(": As part of my international education I was able to\n           master the following languages and I am fluent\n           in them both written and spoken:")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("b",[e._v("Spannish")]),e._v(": Beginner")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"left_aligned_p"},[n("b",[e._v("International diploma '09-'14")]),e._v(": I enjoyed an education at \n              the lycée international de Saint-Germain-en-Laye, a French high-school which \n              enables a schooling in multiple languages at a native speaking level. Not only \n              did I acquire linguistic skills, but I also met people from different cultures \n              from all over the world.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"left_aligned_p"},[n("b",[e._v("Presentation skills")]),e._v(": Praised for presentation skills both in form as in delivery. \n              Using skills developed when acting. Next to directing theatrical pieces I have also played\n               in 5 of them. This gave me the experience to perfect my oral presentation skills. \n               Furthermore I enjoy creating presentations, finding the perfect balance between efficient \n               information delivery and interesting storytelling.\n               ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column"},[n("h3",[e._v("Technical")]),n("div",{staticClass:"skill_content"},[n("p",{staticClass:"left_aligned_p"},[n("b",[e._v("Programming")]),e._v(": As part of my bachelors degree I developed programming skills for both \n              academic and software development purposes. I gained a thorough understanding and hands-on\n               experience with "),n("b",[n("i",[e._v("Java, C, C++, Python Matlab and SQL")])]),e._v(". I also came into contact with \n               "),n("b",[n("i",[e._v("javascript, swift, TLA+, Maple and Ruby")])]),e._v(". Topics wherein this skill was developed include \n               "),n("b",[n("i",[e._v("machine learning, robotics, software development")])]),e._v(" and "),n("b",[n("i",[e._v("simulations")])]),e._v(".\n               ")]),n("p",{staticClass:"left_aligned_p"},[n("b",[e._v("Analytical Mindset: ")]),e._v(" Both my engineering degree and my research activities nurtured\n              an analytical mindset and demanded a high degree of mathematical reasoning. As such I am able \n              to reason using a broad range of mathematical areas, both on a practical and a theoretical level.\n               ")]),n("p",{staticClass:"left_aligned_p"},[n("b",[e._v("Engineering: ")]),e._v(" The main focus of my engineering degree is computer science. However, there was\n              also a strong presence of other scientific fields in my cirriculum like "),n("b",[n("i",[e._v("physics")])]),e._v(", "),n("b",[n("i",[e._v("chemistry")])]),e._v(", "),n("b",[n("i",[e._v("mathematics")])]),e._v(",  \n              which also coincide with my personal interests. \n              In addition there was an introduction to other fields of engineering like "),n("b",[n("i",[e._v("electrical")])]),e._v(", \n              "),n("b",[n("i",[e._v("mechanical")])]),e._v(" and "),n("b",[n("i",[e._v("material science engineering")])]),e._v(".\n              This allows me to reason on multiple levels of abstraction in my own field: from the physical laws governing \n              electrical circuits and via computer architecture and operating systems up to implementation of algorithms \n              and design of computer systems in high level programming languages.\n               ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Further_Interest_content"},[n("p",{staticClass:"left_aligned_p"},[n("b",[e._v("Maker")]),e._v(": I like dedicating my spare time to making stuff. \n      The nature of these endavuoers range from short experiments to year long projects. \n      I don’t strive for them to be perfect on the first try. \n      Rather they are opportunities to explore new interests and skills. ")])])}],$={name:"cvDemo",props:{},data:function(){return{experience_list:[{place:{name:"Ghent University",link:"https://www.ugent.be/en"},title:"PhD Student",time_frame:"September '19 - Present",order:5},{place:{name:"Uman.ai (ML6)",link:"https://uman.ai"},title:"Internship",time_frame:"March '19 - August '19",order:4},{place:{name:"Ghent University",link:"https://www.ugent.be/en"},title:"Master of Computer Science Engineering",time_frame:"'17-'19",order:3},{place:{name:"Showpad",link:"https://www.showpad.com"},title:"Data-science Internship",time_frame:"July '18",order:2},{place:{name:"Ghent University",link:"https://www.ugent.be/en"},title:"Bachelor of Computer Science Engineering",time_frame:"'14-'17",order:1},{place:{name:"Lycée international de Saint-Germain-en-Laye",link:"https://lycee-international-stgermain.com"},title:"Baccalauréat en science (OIB)",time_frame:"'14",order:0}],language_list:[{language:"Dutch",level:"Native speaker"},{language:"French",level:"French Baccalaureate"},{language:"English",level:"Cambridge English Advanced (CAE) - C1"}]}}},F=$,H=(n("81f6"),Object(r["a"])(F,z,G,!1,null,"7368f434",null));H.options.__file="cvDemo.vue";var q=H.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v("Projects")]),n("p",[e._v("Below you can find a list of the projects I have proudly been working on in the last years.")]),n("br"),n("h3",[e._v("Tags")]),n("div",{staticClass:"row"},e._l(e.tags,function(t,a){return n("div",{key:t,staticClass:"column"},[n("button",{directives:[{name:"show",rawName:"v-show",value:e.check_if_render_button(),expression:"check_if_render_button()"}],staticClass:"button",on:{click:function(t){e.update_state(a)}}},[e._v("\n              "+e._s(t)+"\n          ")]),n("button",{directives:[{name:"show",rawName:"v-show",value:e.check_if_render_button_pressed(a),expression:"check_if_render_button_pressed(index)"}],staticClass:"button_pressed",on:{click:function(t){e.update_state(a)}}},[e._v("\n              "+e._s(t)+"\n          ")]),n("button",{directives:[{name:"show",rawName:"v-show",value:e.check_if_render_button_not_pressed(a),expression:"check_if_render_button_not_pressed(index)"}],staticClass:"button_not_pressed",on:{click:function(t){e.update_state(a)}}},[e._v("\n              "+e._s(t)+"\n          ")])])})),n("h3",[e._v("Projects")]),e._l(e.loaded_projects,function(t){return n("div",{key:t["Title"]},[n("ProjectItem",{attrs:{project_item_description:t,tags_to_show:e.tags_to_show}})],1)})],2)},J=[],Y=(n("ac6a"),n("4f7f"),n("8afe")),Q=n("c93e"),X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.appears_in_tags,expression:"appears_in_tags"}],staticClass:"project_item_pane"},[n("div",{staticClass:"row"},[e.is_image?n("div",{staticClass:"column_image"},[n("img",{attrs:{src:e.project_item_description.Visual.url,alt:"Hallo"}})]):e.is_embedded_yt_video?n("div",{staticClass:"column_video"},[n("iframe",{attrs:{src:e.project_item_description.Visual.url,allowfullscreen:"allowfullscreen"}})]):n("div",{staticClass:"column_video"},[n("iframe",{attrs:{src:"https://www.youtube.com/embed/tgbNymZ7vqY",allowfullscreen:"allowfullscreen"}})]),n("div",{staticClass:"column_description"},[n("h4",[e._v(e._s(e.project_item_description.Title))]),n("div",{staticClass:"keyroles"},[n("b",[e._v("Key Role: ")]),e._l(e.project_item_description.KeyRole,function(t,a){return n("div",{key:t,staticClass:"inline"},[0!=a?n("span",[e._v(", ")]):e._e(),e._v("\n                  "+e._s(t)+"\n              ")])})],2),n("p",[e._v(e._s(e.project_item_description.Description))]),n("div",{staticClass:"external"},e._l(e.project_item_description.External,function(t,a){return n("div",{key:t.text,staticClass:"inline"},[0!=a?n("span",[e._v(", ")]):e._e(),n("a",{attrs:{href:t.url,target:"_blank"}},[e._v(" "+e._s(t["text"]))])])})),n("br"),n("div",{staticClass:"keyroles"},[n("b",[e._v("Tags: ")]),e._l(e.project_item_description.Tags,function(t,a){return n("div",{key:a,staticClass:"inline"},[0!=a?n("span",[e._v(", ")]):e._e(),n("i",[e._v(e._s(t[0]))])])})],2)])])])},Z=[],ee=(n("6762"),n("2fdb"),{name:"ProjectsItem",props:{project_item_description:{type:Object,required:!0},tags_to_show:{type:Array,required:!0}},data:function(){return{}},methods:{},computed:{is_image:function(){return"img_url"==this.project_item_description.Visual.Type},is_embedded_yt_video:function(){return"yt_url"==this.project_item_description.Visual.Type},appears_in_tags:function(){for(var e=0;e<this.project_item_description.Tags.length;e++){var t=this.project_item_description.Tags[e][0];if(this.tags_to_show.includes(t))return!0}}}}),te=ee,ne=(n("8b1f"),Object(r["a"])(te,X,Z,!1,null,"42c33cf6",null));ne.options.__file="ProjectItem.vue";var ae=ne.exports,ie=n("bbe5"),se={name:"Projects",data:function(){return{projects_list:[{Title:"ML | Project Management project 1",Description:"Here I would like to talk about ML and project management:    Praised for presentation skills both in form as in delivery. Using skills developed when acting. Next to directing theatrical pieces I have also played. Praised for presentation skills both in form as in delivery. Using skills developed when acting. Next to directing theatrical pieces I have also played. Praised for presentation skills both in form as in delivery. Using skills developed when acting. Next to directing theatrical pieces I have also played. Praised for presentation skills both in form as in delivery. Using skills developed when acting. Next to directing theatrical pieces I have also played. Praised for presentation skills both in form as in delivery. Using skills developed when acting. Next to directing theatrical pieces I have also played",Tags:[["ML/AI",1],["Project Management",1]],Visual:{Type:"img_url",url:"https://i.imgur.com/G2nlTBu.jpg"},KeyRole:["First Author","Presenter"],External:[{text:"Website UGent",url:"https://www.ugent.be"},{text:"Web UGent",url:"https://www.ugent.be"}]},{Title:"Project 2",Description:"This is the second project I want to show you.",Tags:[["Music",1],["Project Management",1]],Visual:{Type:"b",url:"https://i.imgur.com/bX2Uk7C.jpg"},KeyRole:["Second Author"],External:[{text:"Youtube",url:"https://www.youtube.com"}]}],loaded_projects:ie,filter:-1}},components:{ProjectItem:ae},computed:Object(Q["a"])({tags:function(){for(var e=[],t=0;t<this.loaded_projects.length;t++)for(var n=0;n<this.loaded_projects[t]["Tags"].length;n++)e.push(this.loaded_projects[t]["Tags"][n][0]);return e=Object(Y["a"])(new Set(e)),e},tags_to_show:function(){return-1==this.filter?this.tags:[this.tags[this.filter]]},projs:function(){return this.state.data}},Object(u["c"])({projects:function(e){return e.projects.projects}})),methods:{do_something:function(e){},update_state:function(e){e==this.filter?this.filter=-1:this.filter=e},check_if_render_button:function(){return-1==this.filter},check_if_render_button_pressed:function(e){return this.filter==e},check_if_render_button_not_pressed:function(e){return this.filter!=e&&this.filter>=0}},created:function(){}},re=se,oe=(n("9a59"),Object(r["a"])(re,W,J,!1,null,"fd4ddb26",null));oe.options.__file="Projects.vue";var le=oe.exports,ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ue=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h2",[e._v("Me")]),n("p",{staticClass:"about_me"},[e._v("\n      Hi, my name is Rémi and I am passionate about solving problems with technology. "),n("br"),e._v("\n      I have had the opportunity to grow up in unison with an ever-changing technological landscape. \n      I believe there still exists a great gap between the digital and physical world. \n      As such I hope to help merging boths worlds using Artificial Inteligence and Digital Experiences.\n\n  ")]),n("br"),n("br"),n("h3",[e._v("Contact")]),n("hr"),n("br"),n("div",{staticClass:"fa_list"},[n("div",{staticClass:"fa_wrapper"},[n("a",{attrs:{href:"mailto:delanghe.remi@gmail.com"}},[n("i",{staticClass:"fa fa-envelope"})])]),n("div",{staticClass:"fa_wrapper"},[n("a",{attrs:{href:"https://www.linkedin.com/in/rémi-delanghe-b6a193161/",target:"_blank"}},[n("i",{staticClass:"fa fa-linkedin-square"})])]),n("div",{staticClass:"fa_wrapper"},[n("a",{attrs:{href:"https://twitter.com/remidius",target:"_blank"}},[n("i",{staticClass:"fa fa-twitter"})])])]),n("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}}),n("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}})])}],pe={name:"HomePage",props:{}},he=pe,de=(n("1661"),Object(r["a"])(he,ce,ue,!1,null,"2c7df077",null));de.options.__file="HomePage.vue";var ge=de.exports;a["a"].use(M["a"]);var me=new M["a"]({routes:[{path:"/messages",name:"messages",component:N},{path:"/projects",name:"projects_list",component:le},{path:"/cirriculumvitae",name:"cv",component:q},{path:"/",name:"homepage",component:ge},{path:"/vuedemo",name:"vd",component:B}]});a["a"].config.productionTip=!1;var fe=new a["a"]({router:me,store:D,render:function(e){return e(c)}});fe.$mount("#app")},5732:function(e,t,n){},"7f15":function(e,t,n){},"81f6":function(e,t,n){"use strict";var a=n("7f15"),i=n.n(a);i.a},"8b1f":function(e,t,n){"use strict";var a=n("5732"),i=n.n(a);i.a},"9a59":function(e,t,n){"use strict";var a=n("3c2e"),i=n.n(a);i.a},b4d2:function(e,t,n){e.exports=n.p+"static/img/face_circle.f8f58444.png"},bbe5:function(e){e.exports=[{Title:"WinterSim 2019 conference presentation",Description:"I had the opportunity to present at Wintersim 2019, a top conference in the field of Operational Research and simulations. The presentation entailed work from our research group related to the techniques I develop on Line-Based Bayesian Optimisation.",Tags:[["Research",1],["Presenting",1],["Machine Learning",1]],Visual:{Type:"img_url",url:"https://pbs.twimg.com/media/ENV__BVWkAEyQYN?format=jpg&name=large"},KeyRole:["Presenter"],External:[{text:"Wintersim 2019",url:"https://meetings2.informs.org/wordpress/wsc2019/"}]},{Title:"BeneLearn Conference 2019 contribution (Best Student Contribution Nomination)",Description:"As an extension to my master thesis research, I presented my approach on Line-Based Bayesian Optimization at the Benelearn/BNAIC conference 2019 in Brussels, Belgium. The contribution was nominated for best Student contribution.",Tags:[["Research",1],["Presenting",1],["Machine Learning",1]],Visual:{Type:"img_url",url:"https://pbs.twimg.com/media/EJlupz-X0AAHjKi?format=jpg&name=4096x4096"},KeyRole:["First Author","Presenter"],External:[{text:"Benelearn 2019",url:"https://bnaic19.brussels/"}]},{Title:"Machine Learning Research: Data Efficient Machine Learning",Description:"How to make predictions and build machine learning models when little or no data is available. Data-efficient machine learning tackles this problem by using probabilistic machine learning techniques which can exploit prior belief to increase its modelling capabilities when little data is available and is flexible to keep learning from new data. The research question offers a counter balance to Big Data research which deals with the challenges of large amounts of noisy unstructured data. In addition,active learning can be used to guide the data collection process in order to optimize the modeling performance like is being done in Bayesian Optimization, which is relevant for many industrial applications where data is expensive to obtain. The industrial context allows for many extra constraints and variants on the problem. The subproblem I investigate, are processes where not only the amount of datapoints is costly but also the order can add an additional cost. As such I develop a set of techniques called Line-Based Bayesian Optimisation. (Image Source: www.ugent.be)",Tags:[["Research",1],["Machine Learning",1]],Visual:{Type:"img_url",url:"https://www.ugent.be/ea/img/idlab/igent-aatower.jpg"},KeyRole:["Researcher"],External:[{text:"Ghent University",url:"https://www.ugent.be/"}]},{Title:"Computer Science Engineering Degree",Description:"Very proud to have graduated with great distinction as computer science engineer at Ghent University (“Burgerlijk Ingenieur Computerwetenschappen”). The 5 years were a collection of many projects and opportunities on academic and extracurricular level. I am very grateful for the interesting people I met the great friends I made and the educational experiences I enjoyed.",Tags:[["Engineering",1],["Machine Learning",1],["Software Development",1]],Visual:{Type:"img_url",url:"https://i.imgur.com/khAumHo.jpg"},KeyRole:["Computer Science Engineer"],External:[]},{Title:"Knocknock - AR Indoor Navigation Platform",Description:"As part of 'Design Project', a masterclass project spanning over a whole year, we developed a product to enable the mapping of a building in order to perform indoor navigation using augmented reality. The project aimed at creating a PoC in a scrum and agile setting. Within the team of 9 people I enjoyed the role of product owner, who is responsible for the backlog of the project. As such I learned to optimise the added value of the stakeholders while considering the technical challenges of the team. Our product won the Demo-Day where we were in competition with the 10 other teams in this project and which was judged by a varied team of academic and industry experts as well as students.",Tags:[["Project Management",1],["Scrum",1],["Software Development",1],["Entrepreneur",1]],Visual:{Type:"yt_url",url:"https://www.youtube.com/embed/TnCDF3yVhf8"},KeyRole:["Product Owner","Developer"],External:[]},{Title:"Uman.ai (ML6) - Machine Learning Internship",Description:"During the second year of my Computer Science Engineering Master I did a part-time internship at Uman.ai a start-up and spin-off from the machine learning consultancy ML6. They are aiming to revolutionize company knowledge management and skill tracking. During the 4 months that I was part of the team, I helped to develop and integrate the machine learning technologies in a production in a highly dynamic context. This meant optimizing for performance but also focussing on producing a flexible and structured codebase.",Tags:[["Machine Learning",1],["Scrum",1]],Visual:{Type:"img_url",url:"https://uman.ai/uploads/logo.svg"},KeyRole:["Intern","Machine Learning Engineer"],External:[]},{Title:"Showpad - Data Science Internship",Description:"As introduction to the industry, my internship at Showpad was an amazing and eye-opening experience, giving me a pragmatic view on software development and problem solving which still guides my decision making process. In the internship I joined the freshly formed Data Science / Machine Learning team and helped develop a NLP recommender system. In the 6 weeks I was present in the team the PoC was developed including a frontend to make the work accessible and the added value to the whole company. A technique developed regarding dynamic reordering of search results was also used for a conference contribution at Benelearn 2018.",Tags:[["Machine Learning",1],["Scrum",1]],Visual:{Type:"img_url",url:"https://www.showpad.com/wp-content/uploads/2018/09/Showpad-logo-vertical-blue.png"},KeyRole:[""],External:[]},{Title:"BeneLearn Conference 2018 contribution",Description:"As part of my internship at Showpad a technique was developed to reorder search results as response to quick changes in user behavior. The technique and results were accepted as contribution for at the Benelearn/BNAIC conference of 2018  at the Jheronimus Academy of Data Science (JADS) in ‘s-Hertogenbosch, Netherlands.",Tags:[["Machine Learning",1],["Research",1],["Presenting",1]],Visual:{Type:"img_url",url:"https://www.showpad.com/wp-content/uploads/2018/09/Showpad-logo-vertical-blue.png"},KeyRole:[""],External:[]},{Title:"Director - VTK Show (‘17, ‘18)",Description:"During my 5 year computer science engineering degree, I was active in the theater community of the student association VTK which produced a full theatrical show from scratch which included acting, dance, live music performances and musical songs. In charge of a team of 60 people, I took up twice the responsibility for the creation and performance of this theatrical piece within 5 months. These creative projects allowed me to develop organisational and management skills in a real life context with both financial stakes and deadlines.",Tags:[["Project Management",1],["Theater",1]],Visual:{Type:"img_url",url:"https://vtk.ugent.be/media/photologue/photos/show-11042016_251_kirs8758.jpg"},KeyRole:["Director","Writer"],External:[]},{Title:"Actor - VTK Show (‘16, ’17, ’18, ‘19)",Description:"During my 5 year computer science engineering degree, I was active in the theater community of the student association VTK which produced a full theatrical show from scratch which included acting, dance, live music performances and musical songs. I performed, acted and sung with great joy in 4 plays during my studies.",Tags:[["Theater",1]],Visual:{Type:"img_url",url:"https://vtk.ugent.be/media/photologue/photos/show-11042016_102_kirs8058.jpg"},KeyRole:["Actor","Singer"],External:[]},{Title:"CenEka - vice president | external Relations",Description:"I took the initiative to revitalise CenEka, the student association of computer science and electrotechnical engineering at the university of Ghent. Together with a team of other passionate students we successfully put this forgotten association back on the map, building meaningful relationships with both Ghent University as well as the industry.",Tags:[["Project Management",1]],Visual:{Type:"img_url",url:"https://ceneka.be/images/schild.png"},KeyRole:["Vice President","External Relations Responable"],External:[{text:"CenEka Website",url:"https://ceneka.be"}]},{Title:"Calimero Robot",Description:"A particularly challenging, but rewarding project during my studies was the project from the elective course on Robotics. In this project the goal was to build a robot which intelligently can distribute M&Ms to participants of a meeting, while avoiding obstacles on the table. The high amount of flexibility offered, allowed us to exploit the creativity in our team which resulted in us creating a social robot with custom made highly adorable UI and advanced Human-Robot-Interface including face detection, customised speech messages and tactile feedback.",Tags:[["Robotics",1]],Visual:{Type:"img_url",url:"https://i.imgur.com/dDVMYoJ.png"},KeyRole:[""],External:[]},{Title:"Building a Pizza Oven",Description:"All who know me, also know that I love pizza. Inspired by the course of material science engineering about heat coefficients, I decided to build my own pizza oven from scratch with my cousin. Along the way we learned about masonry, insulation and some good pizza recipes.",Tags:[["Maker",1]],Visual:{Type:"img_url",url:"https://i.imgur.com/NuBY8fZ.jpg"},KeyRole:["Builder","Architect","Cook"],External:[]},{Title:"Vertical Farming",Description:"Building a vertical farm and challenging myself to grow vegatables indoors using dirt as well as hydrophonics.",Tags:[["Maker",1]],Visual:{Type:"img_url",url:"https://i.imgur.com/7SUSbxr.jpg"},KeyRole:["Builder","Vertical Farmer"],External:[]},{Title:"Sfinx - Java Quiz App",Description:"A quiz application made as part of a group project for the course software development. The project offered an introduction to GUI applications using java and agile software development (scrum). Additional interesting features include a custom written networking layer and a quiz round on snacks.",Tags:[["Software Development",1],["Scrum",1]],Visual:{Type:"img_url",url:"https://users.ugent.be/~rmdlangh/old_sfinx_site/resources/SfinxLogo.png"},KeyRole:["Software Engineer","Developer"],External:[]},{Title:"Bachelor Thesis - Drone Navigation ",Description:"For my bachelor thesis I teamed up with 3 other students to investigate how drones can be programmatically controlled and how they can move in an environment. Despite some hardware failures, an remarkable product of the thesis was the production of a simulation environment, written from scratch in Processing. In it a drone is simulated, which gradually scans and navigates an unknown environment in order to find an endpoint.",Tags:[["Robotics",1]],Visual:{Type:"img_url",url:"https://i.imgur.com/c6v6DI5.jpg"},KeyRole:[""],External:[]},{Title:"Bust the Bubble",Description:"In this project a clone of the bubble shooter game with AI adversary was developed in C++ using the allegro graphics engine. The endeavor served as an opportunity to continue developing general software developing skills as well as as a deep dive in the idiosyncrasies of the C++ language. It was also an introduction Artificial intelligence and control versioning (Git) as this was a 2 person team project. The task was part of the C/C++ course.",Tags:[["Software Development",1]],Visual:{Type:"img_url",url:"https://i.imgur.com/65Uptvl.png"},KeyRole:["Product Owner","Developper"],External:[]},{Title:"Robot Picasso",Description:"In this project, aimed at teaching the use of microcontrollers, a team mate and I created a program to control a simplified robot arm in order to draw shapes. The highly constrained memory and performance of microcontrollers combined with robotics has been a challenging combination but yielding satisfying and interesting results.",Tags:[["Robotics",1]],Visual:{Type:"img_url",url:"https://media0.giphy.com/media/gLErXjOUxdAbCTApsY/giphy.gif"},KeyRole:[""],External:[]},{Title:"3D printing Music",Description:"In a first ever engineering project the goal was to create a musical instrument using 3D printing technologie. This combined knowledge on music theory, the physics and mathematics of wind instruments and computer aided design (CAD). The result was a set of working flutes mimicking the behavior of original wood wind instruments with different degrees of succes.",Tags:[["Maker",1],["Engineering",1]],Visual:{Type:"img_url",url:"https://i.imgur.com/xD4Yun7.jpg"},KeyRole:[""],External:[]},{Title:"Machine Learning Project",Description:"The master course in machine learning at the faculty of engineering includes a team project which combines all the knowledge gathered during the semester and is framed as a competition between teams of students in the course. My team was the best performing team on The Human Activity Classification based on accelerometer data task which was the challenge of that year.",Tags:[["Machine Learning",1]],Visual:{Type:"img_url",url:"https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"},KeyRole:["Developer"],External:[]},{Title:"Lemon - Graphics Library",Description:"A graphics library built in java on top of the java swing GUI. Although not optimized for performance, it offers a personal exercise in API design and it was used for some interesting mathematical visualizations.",Tags:[["Software Development",1]],Visual:{Type:"img_url",url:"https://media1.giphy.com/media/LRxyaCZ3V6sUHxafnR/giphy.gif"},KeyRole:["Developer","Software Architect"],External:[]},{Title:"Posterboy",Description:"An endeavour to bridge the gap between the digital world and the real one, by creating a platform to easily create Augmented Reality Experiences",Tags:[["Entrepreneur",1],["Software Development",1]],Visual:{Type:"img_url",url:"https://media0.giphy.com/media/QAmBCdH67z4a6IGr9P/giphy.gif"},KeyRole:["Co-Founder","Developer"],External:[]}]},bcb3:function(e,t,n){},bdfd:function(e,t,n){e.exports=n.p+"static/img/logo-django.624de952.png"},c7b3:function(e,t,n){"use strict";var a=n("0512"),i=n.n(a);i.a}});
//# sourceMappingURL=app.4a7531b2.js.map