(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(n,e,t){n.exports=t(348)},348:function(n,e,t){"use strict";t.r(e);var a=t(2),r=t(13),o=t(14),i=t(16),l=t(15),c=t(17),u=t(7),s=t.n(u),d=s()()("FONTS.SET_FONTS"),m=s()()("LAYER.ADD_IMAGE_LAYER"),p=s()()("LAYER.ADD_TEXT_LAYER"),h=s()()("LAYER.CHANGE_STYLE"),f=s()()("LAYER.CHANGE_VALUE"),g=s()()("LAYER.DOWN_LAYER"),b=s()()("LAYER.REMOVE_LAYER"),v=s()()("LAYER.SELECT_LAYER"),y=s()()("LAYER.UP_LAYER"),E=s()()("PREVIEW.CHANGE_VALUE"),x=t(0),w=t(24),k=t(3);function j(){var n=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  .icon {\n    color: white;\n    height: 100%;\n    width: 100%;\n  }\n"]);return j=function(){return n},n}var O=k.b.button(j()),C=function(n){return x.createElement(O,n,x.createElement(w.b,{className:"icon"}))};function S(){var n=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  .icon {\n    color: white;\n    height: 100%;\n    width: 100%;\n  }\n"]);return S=function(){return n},n}var N=k.b.button(S()),F=function(n){return x.createElement(N,n,x.createElement(w.a,{className:"icon"}))};function L(){var n=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  .icon {\n    color: white;\n    height: 100%;\n    width: 100%;\n  }\n"]);return L=function(){return n},n}var z=k.b.button(L()),A=function(n){return x.createElement(z,n,x.createElement(w.c,{className:"icon"}))};function D(){var n=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  .icon {\n    color: white;\n    height: 100%;\n    width: 100%;\n  }\n"]);return D=function(){return n},n}var P=k.b.button(D()),I=function(n){return x.createElement(P,n,x.createElement(w.d,{className:"icon"}))};function R(){var n=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  .icon {\n    color: white;\n    height: 100%;\n    width: 100%;\n  }\n"]);return R=function(){return n},n}var B=k.b.button(R()),W=function(n){return x.createElement(B,n,x.createElement(w.f,{className:"icon"}))};function T(){var n=Object(a.a)(["\n  background-color: #fff;\n  border: 1px #ddd solid;\n\n  &[type='checkbox'] {\n    height: 15px;\n    width: 15px;\n\n    &:checked {\n      background-color: #bbb;\n    }\n  }\n\n  &[type='number'] {\n    text-align: right;\n  }\n"]);return T=function(){return n},n}var Y=k.b.input(T()),H=function(n){return x.createElement(Y,n)};function U(){var n=Object(a.a)(["\n  > div {\n    padding: 10px 10px;\n\n    &:hover {\n      background-color: rgba(35, 71, 148, 0.1);\n    }\n  }\n\n  dd {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 5px;\n  }\n"]);return U=function(){return n},n}var M=k.b.dl(U()),_=function(n){var e=n.children,t=n.className;return x.createElement(M,{className:t},e.map(function(n){var e=n.name,t=n.node;return x.createElement("div",{key:e},x.createElement("dt",null,e),x.createElement("dd",null,t))}))};function G(){var n=Object(a.a)(["\n  .input {\n    width: 50px;\n  }\n"]);return G=function(){return n},n}var V=Object(k.b)(_)(G()),J=function(n){var e=n.onChange,t=n.opacity,a=n.rotate,r=n.scale;return x.createElement(V,null,[{name:"opacity",node:x.createElement(H,{className:"input",max:1,min:0,name:"opacity",onChange:e,step:.01,type:"number",value:t})},{name:"rotate",node:x.createElement(x.Fragment,null,x.createElement(H,{className:"input",name:"rotate",onChange:e,step:.1,type:"number",value:a}),"deg")},{name:"scale",node:x.createElement(H,{className:"input",min:0,name:"scale",onChange:e,step:.01,type:"number",value:r})}])},X=t(55);function q(){var n=Object(a.a)(["\n  align-items: center;\n  display: flex;\n\n  dl {\n    align-items: center;\n    display: flex;\n\n    dt:not(:first-child) {\n      margin-left: 10px;\n    }\n\n    dd {\n      align-items: center;\n      display: flex;\n      margin-left: 5px;\n\n      .input {\n        width: 50px;\n      }\n\n      .background-color {\n        border: 1px #ddd solid;\n        display: flex;\n        height: 15px;\n        justify-content: center;\n        position: relative;\n        width: 15px;\n\n        &:hover .picker {\n          display: block;\n        }\n\n        .picker {\n          background-color: #fff;\n          border: 1px #ddd solid;\n          bottom: 100%;\n          display: none;\n          padding: 10px;\n          position: absolute;\n\n          .chrome-picker {\n            background-color: inherit !important;\n            border: none !important;\n            border-radius: 0 !important;\n            box-shadow: none !important;\n            font-family: inherit !important;\n\n            > div {\n              border-radius: 0 !important;\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return q=function(){return n},n}var K=k.b.div(q()),$=function(n){var e=n.backgroundColor,t=n.gridSize,a=n.height,r=n.onChange,o=n.onChangeBackgroundColor,i=n.overflow,l=n.scale,c=n.width,u=e.a,s=e.b,d=e.g,m=e.r;return x.createElement(K,null,x.createElement("dl",null,x.createElement("dt",null,"width"),x.createElement("dd",null,x.createElement(H,{className:"input",min:0,name:"width",onChange:r,type:"number",value:c}),"px"),x.createElement("dt",null,"height"),x.createElement("dd",null,x.createElement(H,{className:"input",min:0,name:"height",onChange:r,type:"number",value:a}),"px"),x.createElement("dt",null,"scale"),x.createElement("dd",null,x.createElement(H,{className:"input",min:0,name:"scale",onChange:r,step:.1,type:"number",value:l}),"px"),x.createElement("dt",null,"grid-size"),x.createElement("dd",null,x.createElement(H,{className:"input",max:500,min:0,name:"gridSize",onChange:r,type:"number",value:t}),"px"),x.createElement("dt",null,"background-color"),x.createElement("dd",null,x.createElement("div",{className:"background-color",style:{backgroundColor:"rgba(".concat(m,",").concat(d,", ").concat(s,",").concat(u,")")}},x.createElement("div",{className:"picker"},x.createElement(X.ChromePicker,{color:e,onChange:o})))),x.createElement("dt",null,"overflow"),x.createElement("dd",null,x.createElement(H,{defaultChecked:i,name:"overflow",onChange:r,type:"checkbox"}))))};function Q(){var n=Object(a.a)(["\n  display: grid;\n  grid-gap: 5px;\n  margin-bottom: 5px;\n  width: 100%;\n\n  li {\n    border: 1px solid #ddd;\n    padding: 2.5px;\n\n    &.select {\n      border: solid #b33e5c 1px;\n    }\n\n    textarea {\n      border: 1px solid #ddd;\n      font-size: 1.2rem;\n      height: 50px;\n      min-height: 50px;\n      overflow-y: scroll;\n      padding: 2.5px;\n      width: 100%;\n    }\n\n    .image {\n      background-position: center;\n      background-size: cover;\n      height: 50px;\n      overflow: hidden;\n      padding: 2.5px;\n      width: 100%;\n    }\n  }\n"]);return Q=function(){return n},n}var Z=k.b.ul(Q()),nn=function(n){var e=n.index,t=n.layers,a=n.onChange,r=n.onClick,o=n.onFocus;return x.createElement(Z,null,t.map(function(n,t){var i=x.createElement(x.Fragment,null);if("value"in n){var l=n.value;i=x.createElement("textarea",{"data-index":t,onChange:a,onFocus:o,value:l})}else if("url"in n){var c=n.url;i=x.createElement("div",{className:"image","data-index":t,onClick:r,style:{backgroundImage:"url(".concat(c,")")}})}return x.createElement("li",{className:e===t?"select":"",key:t},i)}).reverse())};function en(){var n=Object(a.a)(["\n  background-color: #bbb;\n  display: grid;\n  grid-auto-rows: 25px;\n  grid-gap: 5px;\n  grid-template-columns: repeat(auto-fill, 25px);\n  padding: 5px;\n  width: 100%;\n\n  li {\n    height: 100%;\n    width: 100%;\n\n    button {\n      height: 100%;\n      width: 100%;\n\n      .icon {\n        color: white;\n        height: 100%;\n        width: 100%;\n      }\n    }\n  }\n"]);return en=function(){return n},n}var tn=k.b.ul(en()),an=function(n){var e=n.children;return x.createElement(tn,null,e.map(function(n,e){return x.createElement("li",{key:e},n)}))};function rn(){var n=Object(a.a)(["\n  position: relative;\n\n  &::before,\n  &::after {\n    background-color: #000;\n    display: block;\n    content: '';\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%) rotate(45deg);\n  }\n\n  &::before {\n    height: 1px;\n    width: 100%;\n  }\n\n  &::after {\n    height: 100%;\n    width: 1px;\n  }\n"]);return rn=function(){return n},n}var on=k.b.button(rn()),ln=function(n){return x.createElement(on,n)};function cn(){var n=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  .icon {\n    color: black;\n    height: 100%;\n    width: 100%;\n  }\n"]);return cn=function(){return n},n}var un=k.b.button(cn()),sn=function(n){return x.createElement(un,n,x.createElement(w.e,{className:"icon"}))},dn=t(127),mn=t(18);function pn(){var n=Object(a.a)(["\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.75);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9999;\n\n  img {\n    max-height: 90%;\n    max-width: 90%;\n  }\n\n  .download-button {\n    bottom: 10px;\n    height: 50px;\n    position: fixed;\n    right: 10px;\n    width: 50px;\n  }\n\n  .close-button {\n    height: 50px;\n    position: fixed;\n    right: 10px;\n    top: 10px;\n    width: 50px;\n  }\n"]);return pn=function(){return n},n}var hn=k.b.div(pn()),fn=function(n){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(c.a)(e,n),Object(o.a)(e,[{key:"componentDidMount",value:function(){mn("#root > div:not(.portal)").css("filter","blur(2.5px)")}},{key:"componentWillUnmount",value:function(){mn("#root > div:not(.portal)").css("filter","blur(0)")}},{key:"render",value:function(){var n=this.props,e=n.extension,t=n.onClickCloseButton,a=n.src;return x.createElement(hn,{className:"portal"},x.createElement("img",{src:a}),x.createElement(sn,{className:"download-button",onClick:function(){Object(dn.saveAs)(a,"image.".concat(e))}}),x.createElement(ln,{className:"close-button",onClick:t}))}}]),e}(x.Component),gn=t(128);function bn(){var n=Object(a.a)(["\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.75);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9999;\n\n  p {\n    margin-top: 30px;\n  }\n"]);return bn=function(){return n},n}var vn=k.b.div(bn()),yn=function(n){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(c.a)(e,n),Object(o.a)(e,[{key:"componentDidMount",value:function(){mn("#root > div:not(.portal)").css("filter","blur(2.5px)")}},{key:"componentWillUnmount",value:function(){mn("#root > div:not(.portal)").css("filter","blur(0)")}},{key:"render",value:function(){return x.createElement(vn,{className:"portal"},x.createElement(gn.DotLoader,{color:"#234794"}),x.createElement("p",null,"Generating... wait a minutes."))}}]),e}(x.Component),En=t(59),xn=t.n(En),wn=t(12);function kn(){var n=Object(a.a)(["\n  display: flex;\n\n  > li {\n    position: relative;\n\n    &:hover {\n      background-color: #fff;\n\n      > ul {\n        display: block;\n      }\n    }\n\n    > p {\n      align-items: center;\n      display: flex;\n      height: 24px;\n      justify-content: center;\n      width: 50px;\n    }\n\n    > ul {\n      background-color: #fff;\n      border: 1px #ddd solid;\n      display: none;\n      left: -1px;\n      position: absolute;\n      top: 100%;\n\n      > li {\n        > a,\n        > button,\n        > p {\n          align-items: center;\n          display: flex;\n          height: 25px;\n          padding: 0 30px 0 15px;\n          white-space: nowrap;\n        }\n\n        > a {\n          color: inherit;\n          text-decoration: none;\n        }\n      }\n    }\n  }\n"]);return kn=function(){return n},n}var jn=k.b.ul(kn()),On=function(n){function e(n){var t;return Object(r.a)(this,e),(t=Object(i.a)(this,Object(l.a)(e).call(this,n))).rootEl=void 0,t.rootEl=document.getElementById("root"),t.state={extension:void 0,imageUrl:"",isShowLoading:!1},t}return Object(c.a)(e,n),Object(o.a)(e,[{key:"componentDidUpdate",value:function(n){var e=this,t=n.overflow,a=this.props,r=a.changePreviewOverflow,o=a.overflow,i=this.state,l=i.extension;if(i.isShowLoading){if(o)return void r(!1);var c=function(n){e.setState({imageUrl:n,isShowLoading:!1},function(){t&&r(!0)})};"jpg"===l&&xn.a.toJpeg(document.getElementById("capture")).then(c),"png"===l&&xn.a.toPng(document.getElementById("capture")).then(c),"svg"===l&&xn.a.toSvg(document.getElementById("capture")).then(c)}}},{key:"render",value:function(){var n=this,e=this.state,t=e.extension,a=e.imageUrl,r=e.isShowLoading;return x.createElement(x.Fragment,null,x.createElement(jn,null,x.createElement("li",null,x.createElement("p",null,"File"),x.createElement("ul",null,x.createElement("li",null,x.createElement("button",{onClick:function(){n.setState({extension:"jpg",isShowLoading:!0})}},"Save As JPG")),x.createElement("li",null,x.createElement("button",{onClick:function(){n.setState({extension:"png",isShowLoading:!0})}},"Save As PNG")),x.createElement("li",null,x.createElement("button",{onClick:function(){n.setState({extension:"svg",isShowLoading:!0})}},"Save As SVG")))),x.createElement("li",null,x.createElement("p",null,"Help"),x.createElement("ul",null,x.createElement("li",null,x.createElement("a",{href:"https://github.com/piro0919/image-maker",target:"_blank"},"GitHub"))))),t&&a?wn.createPortal(x.createElement(fn,{extension:t,onClickCloseButton:function(){n.setState({extension:void 0,imageUrl:""})},src:a}),this.rootEl):x.createElement(x.Fragment,null),r?wn.createPortal(x.createElement(yn,null),this.rootEl):x.createElement(x.Fragment,null))}}]),e}(x.Component),Cn=t(19),Sn=t(140),Nn=t(42),Fn=function(n){function e(n){var t;return Object(r.a)(this,e),(t=Object(i.a)(this,Object(l.a)(e).call(this,n))).id=void 0,t.id=Nn(),t.state={height:0,width:0},t}return Object(c.a)(e,n),Object(o.a)(e,[{key:"componentDidMount",value:function(){var n=this,e=this.props.url,t=new Image;t.onload=function(){var a=t.naturalHeight,r=t.naturalWidth;n.setState({height:a,width:r},function(){var t=document.getElementById(n.id).getContext("2d"),o=new Image;o.src=e,o.onload=function(){t.drawImage(o,0,0,r,a)}})},t.src=e}},{key:"render",value:function(){var n=this.props.style,e=n.rotate,t=n.scale,a=Object(Sn.a)(n,["rotate","scale"]),r=this.state,o=r.height,i=r.width;return x.createElement("canvas",{height:o,id:this.id,style:Object(Cn.a)({transform:"rotate(".concat(e,"deg) scale(").concat(t,")")},a),width:i})}}]),e}(x.Component);function Ln(){var n=Object(a.a)(["\n  @font-face {\n    font-family: '","';\n    src: url('","/fonts/",".woff2') format('woff2'),\n      url('","/fonts/",".woff') format('woff'),\n      url('","/fonts/",".ttf') format('truetype');\n  }\n\n  white-space: nowrap;\n"]);return Ln=function(){return n},n}var zn=k.b.div(Ln(),function(n){return n.fontFamily},"/image-maker",function(n){return n.fontFamily},"/image-maker",function(n){return n.fontFamily},"/image-maker",function(n){return n.fontFamily}),An=function(n){var e=n.style,t=e.color,a=t.a,r=t.b,o=t.g,i=t.r,l=e.fontFamily.value,c=e.fontSize,u=e.fontWeight,s=e.lineHeight,d=e.opacity,m=e.rotate,p=n.value;return x.createElement(zn,{fontFamily:l,style:{fontFamily:l,fontWeight:u,opacity:d,color:"rgba(".concat(i,", ").concat(o,", ").concat(r,", ").concat(a,")"),fontSize:"".concat(c,"px"),transform:"rotate(".concat(m,"deg)")}},p.split(/\r\n|\r|\n/).map(function(n,e){return x.createElement("div",{key:e,style:{height:"".concat(s,"px"),lineHeight:"".concat(s,"px")}},n)}))},Dn=t(129),Pn=t.n(Dn);function In(){var n=Object(a.a)(["\n  background-color: #bbb;\n  height: 100%;\n  overflow: scroll;\n  position: relative;\n  width: 100%;\n\n  .wrapper {\n    box-sizing: content-box;\n    left: 0;\n    padding: 50px;\n    position: absolute;\n    top: 0;\n    transform-origin: top left;\n\n    #capture {\n      height: inherit;\n      width: inherit;\n\n      .screen {\n        height: inherit;\n        position: relative;\n        width: inherit;\n\n        &::before {\n          background-image: url(","/images/grid.png);\n          background-repeat: repeat;\n          background-size: inherit;\n          content: '';\n          display: block;\n          height: 100%;\n          left: 0;\n          position: absolute;\n          top: 0;\n          width: 100%;\n        }\n\n        .draggable {\n          cursor: move;\n          position: absolute;\n          word-break: keep-all;\n        }\n      }\n    }\n  }\n"]);return In=function(){return n},n}var Rn=k.b.div(In(),"/image-maker"),Bn=function(n){var e=n.layers,t=n.preview,a=t.backgroundColor,r=a.a,o=a.b,i=a.g,l=a.r,c=t.gridSize,u=t.height,s=t.overflow,d=t.scale,m=t.width,p=e.map(function(n){var e=n.id,t=x.createElement(x.Fragment,null);return"value"in n?t=x.createElement(An,n):"url"in n&&(t=x.createElement(Fn,n)),x.createElement(Pn.a,{className:"draggable",key:e,parentScale:d},t)});return x.createElement(Rn,{id:"preview"},x.createElement("div",{className:"wrapper",style:{height:"".concat(u,"px"),transform:"scale(".concat(d,")"),width:"".concat(m,"px")}},x.createElement("div",{id:"capture"},x.createElement("div",{className:"screen",style:{backgroundColor:"rgba(".concat(l,", ").concat(i,", ").concat(o,", ").concat(r,")"),backgroundSize:"".concat(c,"px"),overflow:s?"visible":"hidden"}},p))))},Wn=t(130);function Tn(){var n=Object(a.a)(["\n  .select {\n    width: 200px;\n  }\n\n  .input {\n    width: 50px;\n  }\n\n  .picker .chrome-picker {\n    background-color: #fff !important;\n    border: 1px #ddd solid !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    font-family: inherit !important;\n\n    > div {\n      border-radius: 0 !important;\n    }\n  }\n"]);return Tn=function(){return n},n}var Yn=Object(k.b)(_)(Tn()),Hn=function(n){var e=n.color,t=n.fontFamily,a=n.fonts,r=n.fontSize,o=n.fontWeight,i=n.lineHeight,l=n.onChange,c=n.onChangeColor,u=n.onChangeFontFamily,s=n.opacity,d=n.rotate;return x.createElement(Yn,null,[{name:"color",node:x.createElement("div",{className:"picker"},x.createElement(X.ChromePicker,{color:e,onChange:c}))},{name:"font-family",node:x.createElement(Wn.a,{className:"select",onChange:u,options:a.map(function(n){var e=n.fontFamily;return{label:n.name,value:e}}),value:t})},{name:"font-size",node:x.createElement(x.Fragment,null,x.createElement(H,{className:"input",min:0,name:"fontSize",onChange:l,type:"number",value:r}),"px")},{name:"font-weight",node:x.createElement(H,{className:"input",max:900,min:100,name:"fontWeight",onChange:l,step:100,type:"number",value:o})},{name:"line-height",node:x.createElement(x.Fragment,null,x.createElement(H,{className:"input",min:0,name:"lineHeight",onChange:l,type:"number",value:i}),"px")},{name:"opacity",node:x.createElement(H,{className:"input",max:1,min:0,name:"opacity",onChange:l,step:.01,type:"number",value:s})},{name:"rotate",node:x.createElement(x.Fragment,null,x.createElement(H,{className:"input",name:"rotate",onChange:l,step:.1,type:"number",value:d}),"deg")}])},Un=t(139);function Mn(){var n=Object(a.a)(["\n  background-color: rgba(255, 255, 255, 0.75);\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9999;\n\n  .wrapper {\n    align-items: center;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: center;\n    width: 100%;\n\n    img {\n      height: calc(231px / 3);\n      opacity: 0.75;\n      width: calc(289px / 3);\n    }\n\n    p {\n      margin-top: 15px;\n    }\n  }\n\n  .close-button {\n    height: 50px;\n    position: fixed;\n    right: 10px;\n    top: 10px;\n    width: 50px;\n  }\n"]);return Mn=function(){return n},n}var _n=k.b.div(Mn()),Gn=function(n){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(c.a)(e,n),Object(o.a)(e,[{key:"componentDidMount",value:function(){mn("#root > div:not(.portal)").css("filter","blur(2.5px)")}},{key:"componentWillUnmount",value:function(){mn("#root > div:not(.portal)").css("filter","blur(0)")}},{key:"render",value:function(){var n=this.props,e=n.onClickCloseButton,t=n.onDrop;return x.createElement(_n,{className:"portal"},x.createElement(Un.a,{accept:"image/*",onDrop:t},function(n){var e=n.getRootProps,t=n.getInputProps,a=n.isDragActive;return x.createElement("div",Object.assign({},e(),{className:"wrapper"}),x.createElement("input",t()),x.createElement("img",{src:"".concat("/image-maker","/images/dd.png")}),x.createElement("p",null,a?"Drop files here...":"Try dropping some image files here, or click to select files to upload."))}),x.createElement(ln,{className:"close-button",onClick:e}))}}]),e}(x.Component);function Vn(){var n=Object(a.a)(["\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.75);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9999;\n\n  .wrapper {\n    height: 360px;\n    position: relative;\n    width: 640px;\n\n    img {\n      height: 100%;\n      width: 100%;\n    }\n\n    p {\n      bottom: 80px;\n      color: #ef64a0;\n      font-size: 1.2em;\n      position: absolute;\n      right: 30px;\n    }\n  }\n"]);return Vn=function(){return n},n}var Jn=k.b.div(Vn()),Xn=function(n){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(c.a)(e,n),Object(o.a)(e,[{key:"componentDidMount",value:function(){mn("#root > div:not(.portal)").css("filter","blur(2.5px)")}},{key:"componentWillUnmount",value:function(){mn("#root > div:not(.portal)").css("filter","blur(0)")}},{key:"render",value:function(){var n=this.props.loading;return x.createElement(Jn,{className:"portal"},x.createElement("div",{className:"wrapper"},x.createElement("img",{src:"".concat("/image-maker","/images/top.png")}),x.createElement("p",null,"loading... ",n,"%")))}}]),e}(x.Component),qn=t(58),Kn=t(135);function $n(){var n=Object(a.a)(["\n  background-color: #fbfbfb;\n  display: grid;\n  height: 100%;\n  grid-template-columns: 275px 1fr 200px;\n  grid-template-rows: 25px 1fr;\n\n  .header {\n    border-bottom: 1px #ddd inset;\n    grid-column: 1 / 4;\n    z-index: 2;\n  }\n\n  .detail {\n    overflow-y: scroll;\n  }\n\n  .preview {\n    box-shadow: 1px 0px #ddd inset;\n    display: grid;\n    grid-gap: 5px;\n    grid-template-rows: 1fr 20px;\n    padding: 5px;\n  }\n\n  .side-layers {\n    box-shadow: 1px 0px #ddd inset;\n    display: flex;\n    flex-direction: column;\n\n    .layers {\n      flex-basis: 0;\n      flex-grow: 1;\n      overflow-y: scroll;\n      padding: 5px;\n    }\n  }\n"]);return $n=function(){return n},n}var Qn=k.b.div($n()),Zn=function(n){function e(n){var t;return Object(r.a)(this,e),(t=Object(i.a)(this,Object(l.a)(e).call(this,n))).rootEl=void 0,t.rootEl=document.getElementById("root"),t.state={isShowDropzone:!1,isShowLogo:!0,loading:0},t}return Object(c.a)(e,n),Object(o.a)(e,[{key:"componentDidMount",value:function(){var n=this,e=this.props.setFonts,t=new XMLHttpRequest;t.open("GET","".concat("/image-maker","/jsons/fonts.json"),!0),t.responseType="blob",t.onload=function(t){var a=t.target.response,r=new FileReader;r.onload=function(t){var a=t.target.result,r=JSON.parse(a),o=0;e(r),Kn.load({active:function(){setTimeout(function(){n.setState({isShowLogo:!1,loading:100})},1e3)},classes:!1,custom:{families:r.map(function(n){return n.fontFamily})},fontactive:function(e,t){o+=1,n.setState({loading:Math.floor(o/r.length*100)})},fontinactive:function(e,t){o+=1,n.setState({loading:Math.floor(o/r.length*100)})},inactive:function(){setTimeout(function(){n.setState({isShowLogo:!1,loading:100})},1e3)}})},r.readAsText(a)},t.send()}},{key:"componentDidUpdate",value:function(n){var e=n.layers,t=this.props.layers;this.state.isShowDropzone&&e.length!==t.length&&this.setState({isShowDropzone:!1})}},{key:"render",value:function(){var n=this,e=this.props,t=e.addImageLayers,a=e.addTextLayer,r=e.changeColor,o=e.changeFontFamily,i=e.changePreviewBackgroundColor,l=e.changePreviewOverflow,c=e.changePreviewValue,u=e.changeStyle,s=e.changeValue,d=e.downLayer,m=e.fonts,p=e.index,h=e.layers,f=e.preview,g=e.removeLayer,b=e.selectLayer,v=e.upLayer,y=this.state,E=y.isShowDropzone,w=y.isShowLogo,k=y.loading,j=x.createElement(x.Fragment,null);if(void 0!==p){var O=h[p];if("value"in O){var S=O.style;j=x.createElement(Hn,Object.assign({},S,{fonts:m,onChange:u,onChangeColor:r,onChangeFontFamily:o}))}else if("url"in O){var N=O.style;j=x.createElement(J,Object.assign({},N,{onChange:u}))}}return x.createElement(Qn,null,x.createElement("header",{className:"header"},x.createElement(On,Object.assign({},f,{changePreviewOverflow:l}))),x.createElement("aside",{className:"detail"},j),x.createElement("div",{className:"preview"},x.createElement(Bn,{layers:h,preview:f}),x.createElement($,Object.assign({},f,{onChange:c,onChangeBackgroundColor:i}))),x.createElement("aside",{className:"side-layers"},x.createElement(an,null,[x.createElement(A,{key:"add",onClick:a}),x.createElement(I,{disabled:void 0===p,key:"delete",onClick:g}),x.createElement(W,{key:"image",onClick:function(){n.setState({isShowDropzone:!0})}}),x.createElement(C,{disabled:void 0===p||p===h.length-1,key:"up",onClick:v}),x.createElement(F,{disabled:!p,key:"down",onClick:d})]),x.createElement("div",{className:"layers"},x.createElement(nn,{index:p,layers:h,onChange:s,onClick:b,onFocus:b}))),E?wn.createPortal(x.createElement(Gn,{onClickCloseButton:function(){n.setState({isShowDropzone:!1})},onDrop:t}),this.rootEl):x.createElement(x.Fragment,null),w?wn.createPortal(x.createElement(Xn,{loading:k}),this.rootEl):x.createElement(x.Fragment,null))}}]),e}(x.Component),ne=Object(qn.b)(function(n){var e=n.fonts.fonts,t=n.layer;return{fonts:e,index:t.index,layers:t.layers,preview:n.preview}},function(n){return{addImageLayers:function(e){e.forEach(function(e){n(m({url:URL.createObjectURL(e)}))})},addTextLayer:function(){return n(p())},changeColor:function(e){var t=e.rgb;return n(h({value:t,name:"color"}))},changeFontFamily:function(e){return n(h({value:e,name:"fontFamily"}))},changePreviewBackgroundColor:function(e){var t=e.rgb;return n(E({value:t,name:"backgroundColor"}))},changePreviewOverflow:function(e){return n(E({value:e,name:"overflow"}))},changePreviewValue:function(e){var t=e.currentTarget,a=t.checked,r=t.name,o=t.type,i=t.value;return n(E({name:r,value:"checkbox"===o?a:i}))},changeStyle:function(e){var t=e.currentTarget,a=t.name,r=t.value;return n(h({name:a,value:r}))},changeValue:function(e){var t=e.target.value;return n(f({value:t}))},downLayer:function(){return n(g())},removeLayer:function(){return n(b())},selectLayer:function(e){var t=e.currentTarget.dataset;return n(v({index:parseInt(t.index,10)}))},setFonts:function(e){return n(d({fonts:e}))},upLayer:function(){return n(y())}}})(Zn),ee=t(350),te=t(352),ae=t(351),re=t(35);t(345),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=t(36),ie=Object(oe.reducerWithInitialState)({fonts:[]}).case(d,function(n,e){var t=e.fonts;return Object(Cn.a)({},n,{fonts:t})}),le={index:void 0,layers:[]},ce=Object(oe.reducerWithInitialState)(le).case(m,function(n,e){var t=e.url,a=n.layers.slice();return a.push({url:t,id:Nn(),style:{opacity:1,rotate:0,scale:1}}),Object(Cn.a)({},n,{layers:a})}).case(p,function(n){var e=n.layers.slice();return e.push({id:Nn(),style:{color:{a:1,b:0,g:0,r:0},fontFamily:{label:"\u30d0\u30f3\u30d0\u30f3",value:"BANBAN-FREE"},fontSize:16,fontWeight:400,lineHeight:16,opacity:1,rotate:0,textShadows:[]},value:""}),Object(Cn.a)({},n,{layers:e})}).case(h,function(n,e){var t=e.name,a=e.value,r=n.index,o=n.layers.slice();return o[r].style[t]="fontSize"===t||"fontWeight"===t||"lineHeight"===t?parseInt(a,10):"opacity"===t||"rotate"===t||"scale"===t?parseFloat(a):a,Object(Cn.a)({},n,{layers:o})}).case(f,function(n,e){var t=e.value,a=n.index,r=n.layers.slice(),o=r[a];return"value"in o&&(o.value=t,r[a]=o),Object(Cn.a)({},n,{layers:r})}).case(g,function(n){var e=n.index,t=n.layers.slice(),a=t[e];return t[e]=t[e-1],t[e-1]=a,Object(Cn.a)({},n,{index:e-1,layers:t})}).case(b,function(n){var e=n.index,t=n.layers;if(void 0===e)return n;var a=t.slice();return a.splice(e,1),{layers:a,index:void 0}}).case(v,function(n,e){var t=e.index;return Object(Cn.a)({},n,{index:t})}).case(y,function(n){var e=n.index,t=n.layers.slice(),a=t[e];return t[e]=t[e+1],t[e+1]=a,Object(Cn.a)({},n,{index:e+1,layers:t})}),ue=t(56),se=Object(oe.reducerWithInitialState)({backgroundColor:{a:1,b:255,g:255,r:255},gridSize:0,height:300,overflow:!0,scale:1,width:400}).case(E,function(n,e){var t,a=e.name,r=e.value;return t="gridSize"===a||"height"===a||"width"===a?parseInt(r,10):"scale"===a?parseFloat(r):r,Object(Cn.a)({},n,Object(ue.a)({},a,t))}),de=function(){return Object(re.b)({fonts:ie,layer:ce,preview:se})};function me(){var n=Object(a.a)(['\n  html {\n    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 ProN W3", Hiragino Kaku Gothic ProN, Arial, "\u30e1\u30a4\u30ea\u30aa", Meiryo, sans-serif;\n    font-size: 62.5%;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-style: normal;\n    font-weight: 400;\n    height: 100%;\n    line-height: 1.2;\n    overflow: hidden !important;\n    -webkit-overflow-scrolling: touch;\n    width: 100%;\n  \n    body {\n      font-size: 1.2rem;\n      height: 100%;\n      width: 100%;\n    \n      #root {\n        height: 100%;\n        width: 100%;\n\n        * {\n          appearance: none;\n          \n          &:focus {\n            outline: none;\n          }\n        }\n  \n        a {\n          line-height: 0;\n        }\n\n        ul {\n          list-style: none;\n        }\n      }\n    }\n  }\n']);return me=function(){return n},n}var pe=Object(re.c)(de()),he=Object(k.a)(me());wn.render(x.createElement(qn.a,{store:pe},x.createElement(ee.a,{basename:"/image-maker"},x.createElement(te.a,null,x.createElement(ae.a,{component:ne,exact:!0,path:"/"}))),x.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[141,2,1]]]);
//# sourceMappingURL=main.da11d2f0.chunk.js.map