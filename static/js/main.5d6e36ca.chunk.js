(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],Array(25).concat([function(e,t,a){e.exports=a.p+"static/media/downArrow.5be47e51.svg"},function(e,t,a){e.exports=a.p+"static/media/githubIconRed.8c22a1df.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedInIconRed.6cb6021a.svg"},function(e,t,a){e.exports=a.p+"static/media/downloadArrowRed.c04654bf.svg"},function(e,t,a){e.exports=a.p+"static/media/profile.1fb8a2e4.jpg"},,,function(e,t,a){e.exports=a.p+"static/media/plusIcon.9bd7e5ef.svg"},function(e,t,a){e.exports=a.p+"static/media/ellipsisIcon.b0cef5f8.svg"},,,,,function(e,t,a){e.exports=a.p+"static/media/mlogo2.a6bf9dd9.svg"},function(e,t,a){e.exports=a.p+"static/media/mlogoBlue.bc1a2146.svg"},function(e,t,a){e.exports=a.p+"static/media/plusIconRed.df6d8af0.svg"},function(e,t,a){e.exports=a.p+"static/media/ellipsisIconRed.9e8ea896.svg"},,,,,function(e,t,a){e.exports=a.p+"static/media/downArrowPink.75989b1c.svg"},function(e,t,a){e.exports=a.p+"static/media/githubIcon.e7402a70.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedInIcon.1f60feb9.svg"},function(e,t,a){e.exports=a.p+"static/media/downloadArrow.82340016.svg"},function(e,t,a){e.exports=a.p+"static/media/minusIcon.208b05e6.svg"},function(e,t,a){e.exports=a.p+"static/media/minusIconRed.3e88967c.svg"},function(e,t,a){e.exports=a.p+"static/media/spreadIcon.df03c570.svg"},function(e,t,a){e.exports=a.p+"static/media/spreadIconRed.71f085fe.svg"},function(e,t,a){e.exports=a.p+"static/media/githubIconBlack.ddc25012.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedInIconBlack.9e36c8fd.svg"},function(e,t,a){e.exports=a.p+"static/media/downloadFile.52a3c2e6.svg"},function(e,t,a){e.exports=a.p+"static/media/upArrow.7afe7dbe.svg"},function(e,t,a){e.exports=a.p+"static/media/upArrowPink.071c5b9c.svg"},,,,function(e,t,a){e.exports=a(77)},,,,,,,,,,function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),o=a.n(r),l=a(59),c=a(7),s=a(17),m=a(8),u=a(34),d=a(35);function h(e){var t=e.notTransparentAt,a=Object(n.useState)("transparent"),r=Object(m.a)(a,2),o=r[0],l=r[1],c=Object(n.useState)("#A0D2DB"),s=Object(m.a)(c,2),h=s[0],g=s[1],p=function(e){window.pageYOffset>t?(l("#A0D2DB"),g("#292F36")):(l("transparent"),g("#A0D2DB"))},E=function(e){window.scrollTo({top:e,behavior:"smooth"})};return Object(n.useEffect)((function(){return window.addEventListener("scroll",p),function(){window.removeEventListener("scroll",p)}}),[]),i.a.createElement(u.a,{navbarMcollapseOnSelect:!0,sticky:"top",expand:"sm",style:{backgroundColor:o,color:h}},i.a.createElement(u.a.Toggle,{id:"navbar-toggle","ari-controls":"basic-navbar-nav"}),i.a.createElement(u.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-center"},i.a.createElement(d.a.Link,{id:"navLink",href:"/"},"home"),i.a.createElement(d.a.Link,{id:"navLink",onClick:function(){return E(1e3)}},"about"),i.a.createElement(d.a.Link,{id:"navLink",onClick:function(){return E(2e3)}},"projects")))}h.defaultProps={notTransparentAt:100};var g=a(11),p=a(12),E=a(6),b=a(4),f=a(22);function v(e){var t=e.imgSrc,a=e.width,r=e.height,o=e.link,l=Object(n.useState)(t[0]),c=Object(m.a)(l,2),s=c[0],u=c[1];return i.a.createElement("img",{src:s,width:a,height:r,onMouseOver:function(){return u(t[1])},onMouseOut:function(){return u(t[0])},onClick:function(){window.location.href=o},style:{marginRight:"15px"}})}v.defaultProps={imgSrc:void 0,altSrc:void 0,width:30,height:"auto",link:"https://abbasaa.github.io"};var y=a(25),w=a.n(y),x=a(46),k=a.n(x);function S(e){var t=e.imgSrc,a=e.width,r=e.height,o=e.scrollLoc,l=e.hoverSrc,c=Object(n.useState)(t),s=Object(m.a)(c,2),u=s[0],d=s[1];return i.a.createElement("img",{src:u,width:a,height:r,onClick:function(){window.scrollTo({top:o,behavior:"smooth"})},onMouseOver:function(){return d(l)},onMouseOut:function(){return d(t)}})}S.defaultProps={imgSrc:w.a,width:50,height:"auto",scrollLoc:1e3,hoverSrc:k.a};var C=a(38),T=a.n(C),A=a(39),I=a.n(A),O=a(47),M=a.n(O),j=a(26),P=a.n(j),B=a(48),F=a.n(B),D=a(27),L=a.n(D),R=a(49),N=a.n(R),W=a(28),H=a.n(W);function z(){var e=Object(n.useState)("#F8C7CC"),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(s.useMediaQuery)({minDeviceWidth:1024});return i.a.createElement(g.a,{fluid:!0,style:{background:"transparent",color:"white"}},i.a.createElement(p.a,null,o?i.a.createElement("div",{style:{marginTop:"100px"}}):i.a.createElement("div",{style:{marginTop:"75px"}}),i.a.createElement(E.a,null,i.a.createElement(b.a,null,o?i.a.createElement("h1",{style:{fontSize:"4.5rem"}},"Hello I'm ",i.a.createElement("text",{id:"wordEmphasis"},"Abbas Ahmed"),","):i.a.createElement("h1",null,"Hello I'm ",i.a.createElement("text",{id:"wordEmphasis"},"Abbas Ahmed"),","))),i.a.createElement(E.a,{style:{marginBottom:"13px"}},i.a.createElement(b.a,null,o?i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{style:{fontSize:"2.5rem"}},i.a.createElement("text",{id:"wordEmphasis"},"computer science "),"undergrad ",i.a.createElement("text",{style:{color:"#4C60A9"}},"@ "),i.a.createElement(v,{imgSrc:[T.a,I.a],width:50,link:"https://engin.umich.edu"})),i.a.createElement("h1",{style:{fontSize:"2.5rem"}},i.a.createElement("text",{id:"wordEmphasis"},"software engineer")),i.a.createElement("h1",{style:{fontSize:"2.5rem"}},i.a.createElement("text",{id:"wordEmphasis"},"data scientist"))):i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,i.a.createElement("text",{id:"wordEmphasis"},"computer science "),"undergrad ",i.a.createElement("text",{style:{color:"#4C60A9"}},"@ "),i.a.createElement(v,{imgSrc:[T.a,I.a],width:50,link:"https://engin.umich.edu"}))))),i.a.createElement(E.a,null,i.a.createElement(b.a,null,i.a.createElement(f.a,{style:{backgroundColor:a,borderColor:a,borderRadius:"15px",fontSize:"larger",color:"black"},href:"mailto:abbasaa@umich.edu",onMouseOver:function(){return r("#DB5461")},onMouseOut:function(){return r("#F8C7CC")}},"Say Hello")),i.a.createElement(b.a,null,i.a.createElement(v,{imgSrc:[M.a,P.a],width:30,link:"https://github.com/abbasaa"}),i.a.createElement(v,{imgSrc:[F.a,L.a],width:32,link:"https://linkedin.com"}),i.a.createElement(v,{imgSrc:[N.a,H.a],width:30,link:"https://linkedin.com"}))),o?i.a.createElement("div",{style:{marginBottom:"350px"}}):i.a.createElement("div",{style:{marginBottom:"150px"}}),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(S,{imgSrc:w.a,width:50,height:"auto",scrollLoc:1e3}))))}var G=a(29),q=a.n(G);function U(){var e=Object(s.useMediaQuery)({minDeviceWidth:1024});return i.a.createElement(g.a,{fluid:!0,style:{backgroundColor:"#292F36",color:"white",margin:"auto"}},i.a.createElement(p.a,null,i.a.createElement(E.a,{style:{textAlign:"center",marginBottom:"25px"}},i.a.createElement(b.a,null,i.a.createElement("h1",{id:"subHeader"},"about me"))),e?i.a.createElement(E.a,null,i.a.createElement(b.a,{style:{textAlign:"center"}},i.a.createElement("img",{src:q.a,width:210,height:"auto",style:{clipPath:"circle(50% at 50% 50%)"}})),i.a.createElement(b.a,null,i.a.createElement("h3",null,"I'm an undergraduate student at the University of Michigan, Ann Arbor, majoring in Computer Science Engineering with a minor in Mathematics. I'm interested in",i.a.createElement("text",{id:"wordEmphasis"}," web systems"),",",i.a.createElement("text",{id:"wordEmphasis"}," data visualization"),", and",i.a.createElement("text",{id:"wordEmphasis"}," machine learning"),". I have experience with Python, Reactjs, Nodejs, and C++."))):i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,null,i.a.createElement(b.a,{style:{textAlign:"center"}},i.a.createElement("img",{src:q.a,width:210,height:"auto",style:{clipPath:"circle(50% at 50% 50%)",marginBottom:"20px"}}))),i.a.createElement(E.a,{style:{textAlign:"center"}},i.a.createElement(b.a,null,i.a.createElement("h3",null,"I'm an undergraduate student at the University of Michigan, Ann Arbor, majoring in Computer Science Engineering with a minor in Mathematics. I'm interested in",i.a.createElement("text",{id:"wordEmphasis"}," web systems"),",",i.a.createElement("text",{id:"wordEmphasis"}," data visualization"),", and",i.a.createElement("text",{id:"wordEmphasis"}," machine learning"),". I have experience with Python, Reactjs, Nodejs, and C++."))))))}var Q=a(10);function J(e){var t=e.colorTheme,a=e.title,n=e.subtitle,r=e.children;return i.a.createElement(Q.a,{style:{backgroundColor:t.babyPink,margin:"20px",borderRadius:"25px"}},i.a.createElement(Q.a.Body,null,i.a.createElement(Q.a.Title,null,a),i.a.createElement(Q.a.Subtitle,{className:"mb-2"},n),i.a.createElement(Q.a.Text,null,r)))}var V=function(e){var t=e.imgSrc,a=e.toggleSrc,r=e.width,o=e.height,l=Object(n.useState)(t[0]),c=Object(m.a)(l,2),s=c[0],u=c[1];return i.a.createElement("img",{src:s,width:r,height:o,onMouseOver:function(){return u(t[1])},onMouseOut:function(){return u(t[0])},onClick:a})},Y=a(32),K=a.n(Y),X=a(40),Z=a.n(X),$=a(50),_=a.n($),ee=a(51),te=a.n(ee);function ae(e){var t=e.colorTheme,a=Object(n.useState)([K.a,Z.a]),r=Object(m.a)(a,2),o=r[0],l=r[1],c=Object(n.useState)(!1),u=Object(m.a)(c,2),d=u[0],h=u[1],f=Object(s.useMediaQuery)({minDeviceWidth:1024});return i.a.createElement(g.a,{fluid:!0,style:{backgroundColor:t.gunMetal,margin:"auto"}},i.a.createElement(p.a,null,i.a.createElement(E.a,{style:{textAlign:"center",marginBottom:"20px",color:"white"}},i.a.createElement(b.a,null,i.a.createElement("h1",{id:"subHeader"},"coursework"))),f?i.a.createElement(E.a,null,i.a.createElement(b.a,null,i.a.createElement(J,{colorTheme:t,title:"Advanced Operating Systems",subtitle:"EECS 482 | Fall 2020"},"Covers the topics behind modern operating systems including concurrency, thread managing, virtual memory paging, and file systems.")),i.a.createElement(b.a,null,i.a.createElement(J,{colorTheme:t,title:"Web Systems",subtitle:"EECS 485 | Fall 2020"},"Project oriented course that covers modern web systems and technologies by building full stack web apps including Instagram clone and Google clone.")),i.a.createElement(b.a,null,i.a.createElement(J,{colorTheme:t,title:"Foundations of Computer Science",subtitle:"EECS 376 | Fall 2020"},"Provides introduction to the Theory of Computation including algorithms, finite automata, computability, complexity, and cryptography."))):i.a.createElement(i.a.Fragment,null,i.a.createElement(J,{colorTheme:t,title:"Advanced Operating Systems",subtitle:"EECS 482 | Fall 2020"},"Covers the topics behind modern operating systems including concurrency, thread managing, virtual memory paging, and file systems."),i.a.createElement(J,{colorTheme:t,title:"Web Systems",subtitle:"EECS 485 | Fall 2020"},"Project oriented course that covers modern web systems and technologies by building full stack web apps including Instagram clone and Google clone."),i.a.createElement(J,{colorTheme:t,title:"Foundations of Computer Science",subtitle:"EECS 376 | Fall 2020"},"Provides introduction to the Theory of Computation including algorithms, finite automata, computability, complexity, and cryptography.")),i.a.createElement("div",{style:{textAlign:"center",padding:"20px",paddingBottom:"35px"}},i.a.createElement(V,{imgSrc:o,toggleSrc:function(){o[0]===K.a?(l([_.a,te.a]),h(!0)):(l([K.a,Z.a]),h(!1))},width:30,height:"auto"})),f&&d?i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,null,i.a.createElement(b.a,null,i.a.createElement(J,{colorTheme:t,title:"Introduction to Machine Learning",subtitle:"EECS 445 | Winter 2020"},"Covers theory and implementation of machine learning algorithms. Includes both supervised and unsupervised learning methods.")),i.a.createElement(b.a,null,i.a.createElement(J,{colorTheme:t,title:"Linear Algebra",subtitle:"MATH 217 | Winter 2020"},"Provides rigorous introduction to linear algebra and proof based maths. Topics include matrix algebra, vector spaces, linear dependence, bases, dimensions, eigenvalues and eigenvectors, diagonalization, and inner products.")),i.a.createElement(b.a,null,i.a.createElement(J,{colorTheme:t,title:"Introduction to Probability",subtitle:"MATH 425 | Winter 2020"},"Topics include basics of both discrete and continuous probability theory: conditional probability, independence, random variables, expectations, variances, and covariances."))),i.a.createElement(E.a,{style:{marginBottom:"20px"}},i.a.createElement(b.a,null,i.a.createElement(J,{colorTheme:t,title:"Algorithms and Data Structures II",subtitle:"EECS 281 | Fall 2019"},"Builds upon course before algorithms like shortest path finding, union find, and quicksort. And more complex data structures like self-balancing trees, heaps, pairing heaps, and graphs.")),i.a.createElement(b.a,null,i.a.createElement(J,{colorTheme:t,title:"Algorithms and Data Structures I",subtitle:"EECS 280 | Winter 2018"},"Covers foundation of CS with topics including OOP design, polymorphism, arrays, linked-lists, binary search trees, recursion, and more.")),i.a.createElement(b.a,null,i.a.createElement(J,{colorTheme:t,title:"Discrete Mathematics",subtitle:"EECS 203 | Winter 2018"},"Covers the foundation of math behind CS including logic, induction, probability, recurrences, and complexity."))),i.a.createElement(E.a,{style:{color:t.gunMetal}},i.a.createElement(b.a,null,i.a.createElement(J,{colorTheme:t,title:"Computer Organization",subtitle:"EECS 370 | Winter 2020"},"Covers lower level programming including assembly, linkers, CPU design, pipelines, caches, and virtual memory.")),i.a.createElement(b.a,null,i.a.createElement(J,{colorTheme:t,title:"Intro Logic Design",subtitle:"EECS 270 | Fall 2019"},"Intro to digital logic in verilog. Built finite state machines and datapaths in order to solve problems like adding, multiplication, and logic controllers.")),i.a.createElement(b.a,null,i.a.createElement(J,{colorTheme:t,title:"Differential Equations",subtitle:"MATH 216 | Fall 2018"},"Learned techniques in order to solve ordinary differential equations analytically and more complex equations through numerical methods in MatLab.")))):void 0,!f&&d?i.a.createElement(i.a.Fragment,null,i.a.createElement(J,{colorTheme:t,title:"Introduction to Machine Learning",subtitle:"EECS 445 | Winter 2020"},"Covers theory and implementation of machine learning algorithms. Includes both supervised and unsupervised learning methods."),i.a.createElement(J,{colorTheme:t,title:"Linear Algebra",subtitle:"MATH 217 | Winter 2020"},"Provides rigorous introduction to linear algebra and proof based maths. Topics include matrix algebra, vector spaces, linear dependence, bases, dimensions, eigenvalues and eigenvectors, diagonalization, and inner products."),i.a.createElement(J,{colorTheme:t,title:"Introduction to Probability",subtitle:"MATH 425 | Winter 2020"},"Topics include basics of both discrete and continuous probability theory: conditional probability, independence, random variables, expectations, variances, and covariances."),i.a.createElement(J,{colorTheme:t,title:"Algorithms and Data Structures II",subtitle:"EECS 281 | Fall 2019"},"Builds upon course before algorithms like shortest path finding, union find, and quicksort. And more complex data structures like self-balancing trees, heaps, pairing heaps, and graphs."),i.a.createElement(J,{colorTheme:t,title:"Algorithms and Data Structures I",subtitle:"EECS 280 | Winter 2018"},"Covers foundation of CS with topics including OOP design, polymorphism, arrays, linked-lists, binary search trees, recursion, and more."),i.a.createElement(J,{colorTheme:t,title:"Discrete Mathematics",subtitle:"EECS 203 | Winter 2018"},"Covers the foundation of math behind CS including logic, induction, probability, recurrences, and complexity."),i.a.createElement(J,{colorTheme:t,title:"Computer Organization",subtitle:"EECS 370 | Winter 2020"},"Covers lower level programming including assembly, linkers, CPU design, pipelines, caches, and virtual memory."),i.a.createElement(J,{colorTheme:t,title:"Intro Logic Design",subtitle:"EECS 270 | Fall 2019"},"Intro to digital logic in verilog. Built finite state machines and datapaths in order to solve problems like adding, multiplication, and logic controllers."),i.a.createElement(J,{colorTheme:t,title:"Differential Equations",subtitle:"MATH 216 | Fall 2018"},"Learned techniques in order to solve ordinary differential equations analytically and more complex equations through numerical methods in MatLab.")):void 0))}function ne(e){var t=e.colorTheme,a=e.title,n=e.subtitle,r=e.button,o=e.children;return i.a.createElement(Q.a,{style:{backgroundColor:t.lightBlue,margin:"20px",borderRadius:"25px"}},i.a.createElement(Q.a.Body,null,i.a.createElement(Q.a.Title,null,a),i.a.createElement(Q.a.Subtitle,null,n),i.a.createElement(Q.a.Text,null,o),r))}ne.defaultProps={colorTheme:void 0,button:void 0,children:void 0};var ie=a(33),re=a.n(ie),oe=a(41),le=a.n(oe),ce=a(52),se=a.n(ce),me=a(53),ue=a.n(me);function de(e){var t=e.colorTheme,a=Object(n.useState)([re.a,le.a]),r=Object(m.a)(a,2),o=r[0],l=r[1],c=Object(n.useState)(!1),s=Object(m.a)(c,2),u=s[0],d=s[1];return i.a.createElement(g.a,{fluid:!0,style:{backgroundColor:t.gunMetal,color:t.gunMetal,margin:"auto"}},i.a.createElement(p.a,null,i.a.createElement(E.a,{style:{textAlign:"center",marginBottom:"20px"}},i.a.createElement(b.a,null,i.a.createElement("h1",{id:"subHeader"},"projects"))),i.a.createElement(ne,{colorTheme:t,title:"Dario, the Friendly Calendar Assistant",subtitle:"May 2020 - present | Python, Flask, Nodejs, Expressjs, Reactjs, MongoDB",button:i.a.createElement(f.a,{variant:"primary",style:{backgroundColor:t.lightBlue,borderColor:t.gunMetal,color:t.gunMetal},href:"https://schedulewithdario.com"},"Find out more")},"COVID19 provided a rare opportunity for my roommates and I to come together to build a project that solves the friction involved in scheduling meetings. Dario solves the information gap issue by intelligently using your calendar and those you are meeting with in order to find the optimal meeting time without any of the back and forth. I specifically have built our React web app that provides users with information about Dario, and the sign up flow in order to use our service. I am currently working on developing our React-Native app. I also worked on our machine learning model in order to learn your meeting preferences. Our model includes three networks: a base ANN, a user category model based on the characteristics of a specific user, and a third reinforcement learning model sensitive to user feedback on meetings."),i.a.createElement(ne,{colorTheme:t,title:"GitHub Shocks - Summer Research Experience for Undergraduates",subtitle:"May 2020 - August 2020 | Python, NumPy, Pandas, Matplotlib"},"Conducted network analysis research in Python under the School of Information. Analyzed the impact of Gitter chat rooms on GitHub repositories. Gitter chat rooms provide an organized way for GitHub organizations and repo members to communicate. The impact we were examining was the effect on the productivity of repos after the creation of Gitter chat rooms. We defined productivity by the number of stars, forks, pushes, accepted pull requests. I pulled and parsed over a terabyte of GitHub event data from the GHArchive. I pulled over 100GB of messages data from the Gitter API. After running embarassingly parallel collection of data, I used piecewise regression on time series of GitHub events."),i.a.createElement("div",{style:{textAlign:"center",padding:"20px"}},i.a.createElement(V,{imgSrc:o,toggleSrc:function(){o[0]===re.a?(l([se.a,ue.a]),d(!0)):(l([re.a,le.a]),d(!1))},width:30,height:"auto"})),u?i.a.createElement(i.a.Fragment,null,i.a.createElement(ne,{colorTheme:t,title:"abbasaa.github.io",subtitle:"August 2020 | Reactjs"},"This responsive web application is built completely out of functional React components and React hooks with a mobile friendly design in mind. Check out this website on your phone to see it adapt."),i.a.createElement(ne,{colorTheme:t,title:"Rate My Professor",subtitle:"April 2020 | Python, Scikit-Learn, NumPy, Matplotlib"},"Trained multiclass One-vs-All SVM on rate my professor data in order to identify sentiment of a given professor review. Implemented 5-fold cross validation with grid and random search in order to tune hyperparameters. Experimented with the use of linear and quadratic kernel and L1 and L2 penalties. Binary classification accuracy of 83% and multiclass classification accuracy of 62%."),i.a.createElement(ne,{colorTheme:t,title:"Food Classification Convolutional Neural Network with Autoencoder Pretraining",subtitle:"April 2020 | Python, PyTorch, NumPy, Matplotlib"},"Used supervised and unsupervised learning techniques in order to classify food pictures into 5 categories. Built the model using PyTorch and made use of important MlOps features like saving checkpoints and live loss plotting. First, I took the input of 20,000 JPG images and preprocessed them by downsampling all the images (to improve runtime) and standardize the images by dividing by max rgb pixel value (i.e. 255). I initiated the weights of the CNN to be normally distributed around 0. Training for 100 epochs, I was able to achieve 58 % validation accuracy. Using an autoencoder to pretrain weights in the CNN, I was able to achieve 62 % validation accuracy.")):void 0))}var he=a(54),ge=a.n(he),pe=a(55),Ee=a.n(pe),be=a(56),fe=a.n(be);function ve(){return i.a.createElement(g.a,{fluid:!0,style:{backgroundColor:"#A0D2DB",textAlign:"center",margin:"0px"}},i.a.createElement(p.a,null,i.a.createElement(E.a,{style:{marginBottom:"20px"}},i.a.createElement(b.a,null,i.a.createElement(v,{imgSrc:[ge.a,P.a],width:23,link:"https://github.com/abbasaa"}),i.a.createElement(v,{imgSrc:[Ee.a,L.a],width:25,link:"https://linkedin.com"}),i.a.createElement(v,{imgSrc:[fe.a,H.a],width:23,link:"https://linkedin.com"}))),i.a.createElement(E.a,null,i.a.createElement(b.a,null,i.a.createElement("h6",{id:"copyright-tag"},"\xa9 2020 abbas ahmed")))))}var ye=a(57),we=a.n(ye),xe=a(58),ke=a.n(xe);function Se(){var e={babyPink:"#F8C7CC",gunMetal:"#292F36",liberty:"#4C60A9",lightBlue:"#A0D2DB",indianRed:"#DB5461"};Object(s.useMediaQuery)({minDeviceWidth:1024});return i.a.createElement("div",{className:"indexBackground"},i.a.createElement(h,{notTransparentAt:990}),i.a.createElement(z,null),i.a.createElement(U,null),i.a.createElement(ae,{colorTheme:e}),i.a.createElement(de,{colorTheme:e}),i.a.createElement("div",{style:{textAlign:"center",backgroundColor:"#292F36",paddingBottom:"20px"}},i.a.createElement(S,{imgSrc:we.a,hoverSrc:ke.a,width:35,height:"auto",scrollLoc:0})),i.a.createElement(ve,null))}function Ce(){return i.a.createElement("div",{className:"indexBackground"},i.a.createElement(h,{notTransparentAt:990}),i.a.createElement(g.a,{fluid:!0,style:{background:"transparent",color:"white"}},i.a.createElement(p.a,null,i.a.createElement("div",{style:{marginTop:"200px"}}),i.a.createElement(E.a,null,i.a.createElement(b.a,null,i.a.createElement("h1",{style:{fontSize:"4.5rem"}},"Sorry ",i.a.createElement("text",{id:"wordEmphasis"},"404 Error"),", Page Not Found."))),i.a.createElement("div",{style:{marginBottom:"400px"}}))),i.a.createElement(ve,null))}a(72);function Te(){return i.a.createElement(l.a,null,i.a.createElement(c.d,null,i.a.createElement(c.b,{exact:!0,path:"/",component:Se}),i.a.createElement(c.b,{exact:!0,path:"/404",component:Ce}),i.a.createElement(c.a,{to:"/404"})))}var Ae=a(61),Ie=a.n(Ae);a(76);o.a.render(i.a.createElement(Ie.a,null,i.a.createElement(Te,null)),document.getElementById("root"))}]),[[62,1,2]]]);
//# sourceMappingURL=main.5d6e36ca.chunk.js.map