(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,n,t){e.exports=t(359)},359:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t(22),o=t(23),i=t(25),l=t(24),c=t(26),u=t(6),s=t.n(u),d=s()()("FONTS.SET_FONTS"),m=s()()("LAYER.ADD_IMAGE_LAYER"),p=s()()("LAYER.ADD_TEXT_LAYER"),h=s()()("LAYER.ADD_TEXT_SHADOW"),f=s()()("LAYER.CHANGE_STYLE"),g=s()()("LAYER.CHANGE_VALUE"),b=s()()("LAYER.DOWN_LAYER"),v=s()()("LAYER.REMOVE_LAYER"),E=s()()("LAYER.REMOVE_TEXT_SHADOW"),x=s()()("LAYER.SELECT_LAYER"),w=s()()("LAYER.UP_LAYER"),y=s()()("PREVIEW.CHANGE_VALUE"),k=t(0),C=t(10),O=t(3);function j(){var e=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  .icon {\n    color: white;\n    height: 100%;\n    width: 100%;\n  }\n"]);return j=function(){return e},e}var S=O.b.button(j()),N=function(e){return k.createElement(S,e,k.createElement(C.b,{className:"icon"}))};function L(){var e=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  .icon {\n    color: white;\n    height: 100%;\n    width: 100%;\n  }\n"]);return L=function(){return e},e}var F=O.b.button(L()),z=function(e){return k.createElement(F,e,k.createElement(C.a,{className:"icon"}))};function I(){var e=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  .icon {\n    color: white;\n    height: 100%;\n    width: 100%;\n  }\n"]);return I=function(){return e},e}var A=O.b.button(I()),T=function(e){return k.createElement(A,e,k.createElement(C.d,{className:"icon"}))};function P(){var e=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  .icon {\n    color: white;\n    height: 100%;\n    width: 100%;\n  }\n"]);return P=function(){return e},e}var R=O.b.button(P()),D=function(e){return k.createElement(R,e,k.createElement(C.e,{className:"icon"}))};function B(){var e=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  .icon {\n    color: white;\n    height: 100%;\n    width: 100%;\n  }\n"]);return B=function(){return e},e}var Y=O.b.button(B()),H=function(e){return k.createElement(Y,e,k.createElement(C.g,{className:"icon"}))},W=t(130),_=function(e){function n(){return Object(r.a)(this,n),Object(i.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.fileName!==this.props.fileName}},{key:"render",value:function(){var e=this.props.fileName;return k.createElement(W.Helmet,null,k.createElement("title",null,"Image Maker: ".concat(e)))}}]),n}(k.Component);function M(){var e=Object(a.a)(["\n  background-color: #fff;\n  border: 1px #ddd solid;\n\n  &[type='checkbox'] {\n    height: 15px;\n    width: 15px;\n\n    &:checked {\n      background-color: #bbb;\n    }\n  }\n\n  &[type='number'] {\n    text-align: right;\n  }\n"]);return M=function(){return e},e}var U=O.b.input(M()),G=function(e){return k.createElement(U,e)};function V(){var e=Object(a.a)(["\n  > div {\n    padding: 10px 10px;\n\n    &:hover {\n      background-color: rgba(35, 71, 148, 0.1);\n    }\n  }\n\n  dd {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 5px;\n  }\n"]);return V=function(){return e},e}var J=O.b.dl(V()),X=function(e){var n=e.children,t=e.className;return k.createElement(J,{className:t},n.map(function(e,n){var t=e.name,a=e.node;return k.createElement("div",{key:n},k.createElement("dt",null,t),k.createElement("dd",null,a))}))};function q(){var e=Object(a.a)(["\n  .input {\n    width: 50px;\n  }\n"]);return q=function(){return e},e}var K=Object(O.b)(X)(q()),Z=function(e){var n=e.onChange,t=e.opacity,a=e.rotate,r=e.scale;return k.createElement(K,null,[{name:"opacity",node:k.createElement(G,{className:"input",max:1,min:0,name:"opacity",onChange:n,step:.01,type:"number",value:t})},{name:"rotate",node:k.createElement(k.Fragment,null,k.createElement(G,{className:"input",name:"rotate",onChange:n,step:.1,type:"number",value:a}),"deg")},{name:"scale",node:k.createElement(G,{className:"input",min:0,name:"scale",onChange:n,step:.01,type:"number",value:r})}])},$=t(59),Q=t(131);function ee(){var e=Object(a.a)(["\n  .chrome-picker {\n    background-color: #fff !important;\n    border: 1px #ddd solid !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    font-family: inherit !important;\n\n    > div {\n      border-radius: 0 !important;\n    }\n  }\n"]);return ee=function(){return e},e}var ne=O.b.div(ee()),te=function(e){var n=e.className,t=Object($.a)(e,["className"]);return k.createElement(ne,{className:n},k.createElement(Q.ChromePicker,t))};function ae(){var e=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -5px;\n  margin-top: -5px;\n\n  > div {\n    align-items: center;\n    display: flex;\n    margin-left: 5px;\n    margin-top: 5px;\n\n    dd {\n      align-items: center;\n      display: flex;\n      margin-left: 5px;\n\n      .input {\n        width: 50px;\n      }\n\n      .background-color {\n        border: 1px #ddd solid;\n        display: flex;\n        height: 15px;\n        justify-content: center;\n        position: relative;\n        width: 15px;\n\n        &:hover .picker {\n          display: block;\n        }\n\n        .picker {\n          background-color: #fff;\n          border: 1px #ddd solid;\n          bottom: 100%;\n          display: none;\n          padding: 10px;\n          position: absolute;\n\n          > div {\n            border: none !important;\n          }\n        }\n      }\n    }\n  }\n"]);return ae=function(){return e},e}var re=O.b.dl(ae()),oe=function(e){var n=e.backgroundColor,t=e.gridSize,a=e.height,r=e.isInitialize,o=e.onChange,i=e.onChangeBackgroundColor,l=e.overflow,c=e.scale,u=e.width,s=n.a,d=n.b,m=n.g,p=n.r;return k.createElement(re,null,r&&k.createElement(k.Fragment,null,k.createElement("div",null,k.createElement("dt",null,"width"),k.createElement("dd",null,k.createElement(G,{className:"input",min:1,name:"width",onChange:o,type:"number",value:u}),"px")),k.createElement("div",null,k.createElement("dt",null,"height"),k.createElement("dd",null,k.createElement(G,{className:"input",min:1,name:"height",onChange:o,type:"number",value:a}),"px")),k.createElement("div",null,k.createElement("dt",null,"scale"),k.createElement("dd",null,k.createElement(G,{className:"input",min:0,name:"scale",onChange:o,step:.1,type:"number",value:c}),"px")),k.createElement("div",null,k.createElement("dt",null,"grid-size"),k.createElement("dd",null,k.createElement(G,{className:"input",max:500,min:0,name:"gridSize",onChange:o,type:"number",value:t}),"px")),k.createElement("div",null,k.createElement("dt",null,"background-color"),k.createElement("dd",null,k.createElement("div",{className:"background-color",style:{backgroundColor:"rgba(".concat(p,",").concat(m,", ").concat(d,",").concat(s,")")}},k.createElement(te,{className:"picker",color:n,onChange:i})))),k.createElement("div",null,k.createElement("dt",null,"overflow"),k.createElement("dd",null,k.createElement(G,{defaultChecked:l,name:"overflow",onChange:o,type:"checkbox"})))))};function ie(){var e=Object(a.a)(["\n  display: grid;\n  grid-gap: 5px;\n  margin-bottom: 5px;\n  width: 100%;\n\n  li {\n    border: 1px solid #ddd;\n    padding: 2.5px;\n\n    &.select {\n      border: solid #b33e5c 1px;\n    }\n\n    textarea {\n      border: 1px solid #ddd;\n      font-size: 1.2rem;\n      height: 50px;\n      min-height: 50px;\n      overflow-y: scroll;\n      padding: 2.5px;\n      width: 100%;\n    }\n\n    .image {\n      background-position: center;\n      background-size: cover;\n      height: 50px;\n      overflow: hidden;\n      padding: 2.5px;\n      width: 100%;\n    }\n  }\n"]);return ie=function(){return e},e}var le=O.b.ul(ie()),ce=function(e){var n=e.index,t=e.layers,a=e.onChange,r=e.onClick,o=e.onFocus;return k.createElement(le,null,t.map(function(e,t){var i=k.createElement(k.Fragment,null);if("value"in e){var l=e.value;i=k.createElement("textarea",{"data-index":t,onChange:a,onFocus:o,value:l})}else if("url"in e){var c=e.url;i=k.createElement("div",{className:"image","data-index":t,onClick:r,style:{backgroundImage:"url(".concat(c,")")}})}return k.createElement("li",{className:n===t?"select":"",key:t},i)}).reverse())};function ue(){var e=Object(a.a)(["\n  background-color: #bbb;\n  display: grid;\n  grid-auto-rows: 25px;\n  grid-gap: 5px;\n  grid-template-columns: repeat(auto-fill, 25px);\n  padding: 5px;\n  width: 100%;\n\n  li {\n    height: 100%;\n    width: 100%;\n\n    button {\n      height: 100%;\n      width: 100%;\n\n      .icon {\n        color: white;\n        height: 100%;\n        width: 100%;\n      }\n    }\n  }\n"]);return ue=function(){return e},e}var se=O.b.ul(ue()),de=function(e){var n=e.children;return k.createElement(se,null,n.map(function(e,n){return k.createElement("li",{key:n},e)}))};function me(){var e=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  .icon {\n    color: black;\n    height: 100%;\n    width: 100%;\n  }\n"]);return me=function(){return e},e}var pe=O.b.button(me()),he=function(e){return k.createElement(pe,e,k.createElement(C.f,{className:"icon"}))};function fe(){var e=Object(a.a)(["\n  position: relative;\n\n  &::before,\n  &::after {\n    background-color: #000;\n    display: block;\n    content: '';\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%) rotate(45deg);\n  }\n\n  &::before {\n    height: 1px;\n    width: 100%;\n  }\n\n  &::after {\n    height: 100%;\n    width: 1px;\n  }\n"]);return fe=function(){return e},e}var ge=O.b.button(fe()),be=function(e){return k.createElement(ge,e)},ve=t(41);function Ee(){var e=Object(a.a)(["\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.75);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9999;\n\n  .close-button {\n    height: 50px;\n    position: fixed;\n    right: 10px;\n    top: 10px;\n    width: 50px;\n  }\n"]);return Ee=function(){return e},e}var xe=O.b.div(Ee()),we=function(e){function n(){return Object(r.a)(this,n),Object(i.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){ve("#root > div:not(.portal)").css("filter","blur(2.5px)")}},{key:"componentWillUnmount",value:function(){ve("#root > div:not(.portal)").css("filter","blur(0)")}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.className,a=e.onClickCloseButton;return k.createElement(xe,{className:"portal ".concat(t)},n,a?k.createElement(be,{className:"close-button",onClick:a}):k.createElement(k.Fragment,null))}}]),n}(k.Component),ye=t(132);function ke(){var e=Object(a.a)(["\n  img {\n    max-height: 90%;\n    max-width: 90%;\n  }\n\n  .download-button {\n    bottom: 10px;\n    height: 50px;\n    position: fixed;\n    right: 10px;\n    width: 50px;\n  }\n"]);return ke=function(){return e},e}var Ce=Object(O.b)(we)(ke()),Oe=function(e){var n=e.extension,t=e.fileName,a=e.onClickCloseButton,r=e.src;return k.createElement(Ce,{onClickCloseButton:a},k.createElement("img",{src:r}),k.createElement(he,{className:"download-button",onClick:function(){Object(ye.saveAs)(r,"".concat(t||"image",".").concat(n))}}))};function je(){var e=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  .icon {\n    color: black;\n    height: 100%;\n    width: 100%;\n  }\n"]);return je=function(){return e},e}var Se=O.b.button(je()),Ne=function(e){return k.createElement(Se,e,k.createElement(C.c,{className:"icon"}))};function Le(){var e=Object(a.a)(["\n  .wrapper {\n    display: flex;\n    flex-direction: column;\n    width: 250px;\n\n    dt:not(:first-child) {\n      margin-top: 15px;\n    }\n\n    dd {\n      display: flex;\n      justify-content: flex-end;\n      margin-top: 5px;\n\n      .file-name {\n        width: 150px;\n      }\n\n      .input {\n        width: 50px;\n      }\n    }\n  }\n\n  .document-button {\n    bottom: 10px;\n    height: 50px;\n    position: fixed;\n    right: 10px;\n    width: 50px;\n  }\n"]);return Le=function(){return e},e}var Fe=Object(O.b)(we)(Le()),ze=function(e){var n=e.backgroundColor,t=e.changePreviewIsInitialize,a=e.fileName,r=e.height,o=e.onChangePreviewBackgroundColor,i=e.onChangePreviewValue,l=e.onClickCloseButton,c=e.width;return k.createElement(Fe,{onClickCloseButton:l},k.createElement("dl",{className:"wrapper"},k.createElement("dt",null,"file-name"),k.createElement("dd",null,k.createElement(G,{className:"file-name",name:"fileName",onChange:i,type:"text",value:a})),k.createElement("dt",null,"width"),k.createElement("dd",null,k.createElement(G,{className:"input",min:1,name:"width",onChange:i,type:"number",value:c}),"px"),k.createElement("dt",null,"height"),k.createElement("dd",null,k.createElement(G,{className:"input",min:1,name:"height",onChange:i,type:"number",value:r}),"px"),k.createElement("dt",null,"background-color"),k.createElement("dd",null,k.createElement(te,{color:n,onChange:o}))),k.createElement(Ne,{className:"document-button",disabled:!a||!r||!c,onClick:function(e){t(!0),l(e)}}))},Ie=t(133);function Ae(){var e=Object(a.a)(["\n  p {\n    margin-top: 30px;\n  }\n"]);return Ae=function(){return e},e}var Te=Object(O.b)(we)(Ae()),Pe=function(){return k.createElement(Te,null,k.createElement(Ie.DotLoader,{color:"#234794"}),k.createElement("p",null,"Generating... wait a minutes."))},Re=t(60),De=t.n(Re),Be=t(12);function Ye(){var e=Object(a.a)(["\n  display: flex;\n\n  * {\n    cursor: default;\n  }\n\n  ul {\n    background-color: #fff;\n    border: 1px #ddd solid;\n    position: absolute;\n  }\n\n  li {\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    white-space: nowrap;\n\n    &:hover {\n      background-color: rgba(35, 71, 148, 0.1);\n\n      > ul > li {\n        display: flex;\n      }\n    }\n  }\n\n  > li {\n    display: flex;\n    height: 24px;\n    width: 50px;\n\n    > ul {\n      left: 0;\n      top: 100%;\n\n      li {\n        display: none;\n        height: 25px;\n\n        > *:not(ul) {\n          align-items: center;\n          color: inherit;\n          display: flex;\n          justify-content: flex-start;\n          padding: 0 30px 0 15px;\n          text-decoration: none;\n        }\n      }\n\n      > li > ul {\n        left: 100%;\n        top: 0;\n\n        &::after {\n          border-color: transparent transparent transparent black;\n          border-style: solid;\n          border-width: 4px 0 4px 4px;\n          content: '';\n          display: block;\n          height: 0;\n          left: -10px;\n          position: absolute;\n          top: 9px;\n          width: 0;\n        }\n      }\n    }\n  }\n"]);return Ye=function(){return e},e}var He=O.b.ul(Ye()),We=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).rootEl=void 0,t.rootEl=document.getElementById("root"),t.state={extension:void 0,imageUrl:"",isNew:!1,isShowLoading:!1},t}return Object(c.a)(n,e),Object(o.a)(n,[{key:"componentDidUpdate",value:function(e){var n=this,t=e.overflow,a=this.props,r=a.changePreviewOverflow,o=a.overflow,i=this.state,l=i.extension;if(i.isShowLoading){if(o)return void r(!1);var c=function(e){n.setState({imageUrl:e,isShowLoading:!1},function(){t&&r(!0)})};"jpg"===l&&De.a.toJpeg(document.getElementById("capture")).then(c),"png"===l&&De.a.toPng(document.getElementById("capture")).then(c),"svg"===l&&De.a.toSvg(document.getElementById("capture")).then(c)}}},{key:"render",value:function(){var e=this,n=this.props.fileName,t=this.state,a=t.extension,r=t.imageUrl,o=t.isNew,i=t.isShowLoading;return k.createElement(He,null,k.createElement("li",null,k.createElement("p",null,"File"),k.createElement("ul",null,k.createElement("li",null,k.createElement("button",{onClick:function(){e.setState({isNew:!0})}},"New")),k.createElement("li",null,k.createElement("p",null,"Save"),k.createElement("ul",null,k.createElement("li",null,k.createElement("button",{onClick:function(){e.setState({extension:"jpg",isShowLoading:!0})}},"JPG")),k.createElement("li",null,k.createElement("button",{onClick:function(){e.setState({extension:"png",isShowLoading:!0})}},"PNG")),k.createElement("li",null,k.createElement("button",{onClick:function(){e.setState({extension:"svg",isShowLoading:!0})}},"SVG")))))),k.createElement("li",null,k.createElement("p",null,"Help"),k.createElement("ul",null,k.createElement("li",null,k.createElement("a",{href:"https://github.com/piro0919/image-maker",target:"_blank"},"GitHub")))),a&&r&&Be.createPortal(k.createElement(Oe,{extension:a,fileName:n,onClickCloseButton:function(){e.setState({extension:void 0,imageUrl:""})},src:r}),this.rootEl),o&&Be.createPortal(k.createElement(ze,Object.assign({},this.props,{onClickCloseButton:function(){e.setState({isNew:!1})}})),this.rootEl),i&&Be.createPortal(k.createElement(Pe,null),this.rootEl))}}]),n}(k.Component),_e=t(14),Me=t(42),Ue=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).id=void 0,t.id=Me(),t.state={height:0,width:0},t}return Object(c.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=this.props.url,t=new Image;t.onload=function(){var a=t.naturalHeight,r=t.naturalWidth;e.setState({height:a,width:r},function(){var t=document.getElementById(e.id).getContext("2d"),o=new Image;o.src=n,o.onload=function(){t.drawImage(o,0,0,r,a)}})},t.src=n}},{key:"render",value:function(){var e=this.props.style,n=e.rotate,t=e.scale,a=Object($.a)(e,["rotate","scale"]),r=this.state,o=r.height,i=r.width;return k.createElement("canvas",{height:o,id:this.id,style:Object(_e.a)({transform:"rotate(".concat(n,"deg) scale(").concat(t,")")},a),width:i})}}]),n}(k.Component);function Ge(){var e=Object(a.a)(["\n  @font-face {\n    font-family: '","';\n    src: url('","/fonts/",".woff2') format('woff2'),\n      url('","/fonts/",".woff') format('woff'),\n      url('","/fonts/",".ttf') format('truetype');\n  }\n\n  white-space: nowrap;\n"]);return Ge=function(){return e},e}var Ve=O.b.div(Ge(),function(e){return e.fontFamily},"/image-maker",function(e){return e.fontFamily},"/image-maker",function(e){return e.fontFamily},"/image-maker",function(e){return e.fontFamily}),Je=function(e){var n=e.style,t=n.color,a=t.a,r=t.b,o=t.g,i=t.r,l=n.fontFamily.value,c=n.fontSize,u=n.fontStyle,s=n.fontWeight,d=n.letterSpacing,m=n.lineHeight,p=n.opacity,h=n.rotate,f=n.textShadows,g=e.value;return k.createElement(Ve,{fontFamily:l,style:{fontFamily:l,fontWeight:s,opacity:p,color:"rgba(".concat(i,", ").concat(o,", ").concat(r,", ").concat(a,")"),fontSize:"".concat(c,"px"),fontStyle:u?"italic":"normal",letterSpacing:"".concat(d,"px"),textShadow:f.map(function(e){var n=e.blurRadius,t=e.color,a=t.a,r=t.b,o=t.g,i=t.r,l=e.hShadow,c=e.vShadow;return"".concat(l,"px ").concat(c,"px ").concat(n,"px rgba(").concat(i,", ").concat(o,", ").concat(r,", ").concat(a,")")}).join(","),transform:"rotate(".concat(h,"deg)")}},g.split(/\r\n|\r|\n/).map(function(e,n){return k.createElement("div",{key:n,style:{height:"".concat(m,"px"),lineHeight:"".concat(m,"px")}},e)}))},Xe=t(134),qe=t.n(Xe);function Ke(){var e=Object(a.a)(["\n  background-color: #bbb;\n  height: 100%;\n  overflow: scroll;\n  position: relative;\n  width: 100%;\n\n  .wrapper {\n    box-sizing: content-box;\n    left: 0;\n    padding: 50px;\n    position: absolute;\n    top: 0;\n    transform-origin: top left;\n\n    #capture {\n      height: inherit;\n      width: inherit;\n\n      .screen {\n        height: inherit;\n        position: relative;\n        width: inherit;\n\n        &::before {\n          background-image: url(","/images/grid.png);\n          background-repeat: repeat;\n          background-size: inherit;\n          content: '';\n          display: block;\n          height: 100%;\n          left: 0;\n          position: absolute;\n          top: 0;\n          width: 100%;\n        }\n\n        .draggable {\n          cursor: move;\n          position: absolute;\n          word-break: keep-all;\n        }\n      }\n    }\n  }\n"]);return Ke=function(){return e},e}var Ze=O.b.div(Ke(),"/image-maker"),$e=function(e){var n=e.layers,t=e.preview,a=t.backgroundColor,r=a.a,o=a.b,i=a.g,l=a.r,c=t.gridSize,u=t.height,s=t.isInitialize,d=t.overflow,m=t.scale,p=t.width,h=n.map(function(e){var n=e.id,t=k.createElement(k.Fragment,null);return"value"in e?t=k.createElement(Je,e):"url"in e&&(t=k.createElement(Ue,e)),k.createElement(qe.a,{className:"draggable",key:n,parentScale:m},t)});return k.createElement(Ze,{id:"preview"},k.createElement("div",{className:"wrapper",style:{height:"".concat(u,"px"),transform:"scale(".concat(m,")"),width:"".concat(p,"px")}},k.createElement("div",{id:"capture"},s&&k.createElement("div",{className:"screen",style:{backgroundColor:"rgba(".concat(l,", ").concat(i,", ").concat(o,", ").concat(r,")"),backgroundSize:"".concat(c,"px"),overflow:d?"visible":"hidden"}},h))))};function Qe(){var e=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  .icon {\n    color: black;\n    height: 100%;\n    width: 100%;\n  }\n"]);return Qe=function(){return e},e}var en=O.b.button(Qe()),nn=function(e){return k.createElement(en,e,k.createElement(C.h,{className:"icon"}))};function tn(){var e=Object(a.a)(["\n  height: 100%;\n  width: 100%;\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  .icon {\n    color: black;\n    height: 100%;\n    width: 100%;\n  }\n"]);return tn=function(){return e},e}var an=O.b.button(tn()),rn=function(e){return k.createElement(an,e,k.createElement(C.i,{className:"icon"}))};function on(){var e=Object(a.a)(["\n  .input {\n    width: 50px;\n  }\n"]);return on=function(){return e},e}var ln=O.b.dl(on()),cn=function(e){var n=e.blurRadius,t=e.className,a=e.color,r=e.hShadow,o=e.name,i=e.onChange,l=e.onChangeTextShadowColor,c=e.vShadow;return k.createElement(ln,{className:t},k.createElement("dt",null,"h-shadow"),k.createElement("dd",null,k.createElement(G,{className:"input",name:"".concat(o,".hShadow"),onChange:i,step:.1,type:"number",value:r}),"px"),k.createElement("dt",null,"v-shadow"),k.createElement("dd",null,k.createElement(G,{className:"input",name:"".concat(o,".vShadow"),onChange:i,step:.1,type:"number",value:c}),"px"),k.createElement("dt",null,"blur-radius"),k.createElement("dd",null,k.createElement(G,{className:"input",min:0,name:"".concat(o,".blurRadius"),onChange:i,step:.1,type:"number",value:n}),"px"),k.createElement("dt",null,"color"),k.createElement("dd",null,k.createElement(te,{color:a,onChange:function(e){return l(e,"".concat(o,".color"))}})))},un=t(135);function sn(){var e=Object(a.a)(["\n  .select {\n    width: 200px;\n  }\n\n  .input {\n    width: 50px;\n  }\n\n  .text-shadow {\n    margin-top: 10px;\n  }\n\n  .name {\n    display: flex;\n    justify-content: space-between;\n\n    .plus-button {\n      height: 14.4px;\n      width: 14.4px;\n    }\n  }\n\n  .node-list > li {\n    position: relative;\n\n    &:not(:first-child) {\n      border-top: 1px solid white;\n      margin-top: 10px;\n    }\n\n    .minus-button {\n      height: 14.4px;\n      position: absolute;\n      right: 0;\n      top: 0;\n      width: 14.4px;\n    }\n  }\n"]);return sn=function(){return e},e}var dn=Object(O.b)(X)(sn()),mn=function(e){var n=e.color,t=e.fontFamily,a=e.fonts,r=e.fontSize,o=e.fontStyle,i=e.fontWeight,l=e.letterSpacing,c=e.lineHeight,u=e.onChange,s=e.onChangeColor,d=e.onChangeFontFamily,m=e.onClickAddTextShadow,p=e.onClickRemoveTextShadow,h=e.opacity,f=e.rotate,g=e.textShadows,b=a.map(function(e){var n=e.fontFamily;return{label:e.name,value:n}}),v=b.findIndex(function(e){return JSON.stringify(t)===JSON.stringify(e)});return k.createElement(dn,null,[{name:"color",node:k.createElement(te,{color:n,onChange:function(e){return s(e,"color")}})},{name:"font-family",node:k.createElement(un.a,{className:"select",onChange:d,options:b,value:b[v]})},{name:"font-size",node:k.createElement(k.Fragment,null,k.createElement(G,{className:"input",min:0,name:"fontSize",onChange:u,type:"number",value:r}),"px")},{name:"font-style",node:k.createElement(G,{defaultChecked:o,name:"fontStyle",onChange:u,type:"checkbox"})},{name:"font-weight",node:k.createElement(G,{className:"input",max:900,min:100,name:"fontWeight",onChange:u,step:100,type:"number",value:i})},{name:"letter-spacing",node:k.createElement(k.Fragment,null,k.createElement(G,{className:"input",name:"letterSpacing",onChange:u,type:"number",value:l}),"px")},{name:"line-height",node:k.createElement(k.Fragment,null,k.createElement(G,{className:"input",min:0,name:"lineHeight",onChange:u,type:"number",value:c}),"px")},{name:"opacity",node:k.createElement(G,{className:"input",max:1,min:0,name:"opacity",onChange:u,step:.01,type:"number",value:h})},{name:"rotate",node:k.createElement(k.Fragment,null,k.createElement(G,{className:"input",name:"rotate",onChange:u,step:.1,type:"number",value:f}),"deg")},{name:k.createElement("div",{className:"name"},k.createElement("p",null,"text-shadow"),k.createElement(rn,{className:"plus-button",onClick:m})),node:k.createElement("ul",{className:"node-list"},g.map(function(e,n){return k.createElement("li",{key:n},k.createElement(nn,{className:"minus-button",name:n.toString(),onClick:p}),k.createElement(cn,Object.assign({},e,{className:"text-shadow",name:"textShadows[".concat(n,"]"),onChange:u,onChangeTextShadowColor:s})))}))}])},pn=t(144);function hn(){var e=Object(a.a)(["\n  .wrapper {\n    align-items: center;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: center;\n    width: 100%;\n\n    img {\n      height: calc(231px / 3);\n      opacity: 0.75;\n      width: calc(289px / 3);\n    }\n\n    p {\n      margin-top: 15px;\n    }\n  }\n"]);return hn=function(){return e},e}var fn=Object(O.b)(we)(hn()),gn=function(e){var n=e.onClickCloseButton,t=e.onDrop;return k.createElement(fn,{onClickCloseButton:n},k.createElement(pn.a,{accept:"image/*",onDrop:t},function(e){var n=e.getRootProps,t=e.getInputProps,a=e.isDragActive;return k.createElement("div",Object.assign({},n(),{className:"wrapper"}),k.createElement("input",t()),k.createElement("img",{src:"".concat("/image-maker","/images/dd.png")}),k.createElement("p",null,a?"Drop files here...":"Try dropping some image files here, or click to select files to upload."))}))};function bn(){var e=Object(a.a)(["\n  .wrapper {\n    height: 360px;\n    position: relative;\n    width: 640px;\n\n    img {\n      height: 100%;\n      width: 100%;\n    }\n\n    p {\n      bottom: 80px;\n      color: #ef64a0;\n      font-size: 1.2em;\n      position: absolute;\n      right: 30px;\n    }\n  }\n"]);return bn=function(){return e},e}var vn=Object(O.b)(we)(bn()),En=function(e){var n=e.loading;return k.createElement(vn,null,k.createElement("div",{className:"wrapper"},k.createElement("img",{src:"".concat("/image-maker","/images/top.png")}),k.createElement("p",null,"loading... ",n,"%")))},xn=t(58),wn=t(140);function yn(){var e=Object(a.a)(["\n  background-color: #fbfbfb;\n  display: grid;\n  height: 100%;\n  grid-template-columns: 275px 1fr 200px;\n  grid-template-rows: 25px 1fr;\n\n  .header {\n    border-bottom: 1px #ddd inset;\n    grid-column: 1 / 4;\n    z-index: 2;\n  }\n\n  .detail {\n    overflow-y: scroll;\n  }\n\n  .preview {\n    box-shadow: 1px 0px #ddd inset;\n    display: grid;\n    grid-gap: 5px;\n    grid-template-rows: 1fr fit-content(20px);\n    padding: 5px;\n  }\n\n  .side-layers {\n    box-shadow: 1px 0px #ddd inset;\n    display: flex;\n    flex-direction: column;\n\n    .layers {\n      flex-basis: 0;\n      flex-grow: 1;\n      overflow-y: scroll;\n      padding: 5px;\n    }\n  }\n"]);return yn=function(){return e},e}var kn=O.b.div(yn()),Cn=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).rootEl=void 0,t.rootEl=document.getElementById("root"),t.state={isShowDropzone:!1,isShowLogo:!0,loading:0},t}return Object(c.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=this.props.setFonts,t=new XMLHttpRequest;t.open("GET","".concat("/image-maker","/jsons/fonts.json"),!0),t.responseType="blob",t.onload=function(t){var a=t.target.response,r=new FileReader;r.onload=function(t){var a=t.target.result,r=JSON.parse(a),o=0;n(r),wn.load({active:function(){setTimeout(function(){e.setState({isShowLogo:!1,loading:100})},1e3)},classes:!1,custom:{families:r.map(function(e){return e.fontFamily})},fontactive:function(n,t){o+=1,e.setState({loading:Math.floor(o/r.length*100)})},fontinactive:function(n,t){o+=1,e.setState({loading:Math.floor(o/r.length*100)})},inactive:function(){setTimeout(function(){e.setState({isShowLogo:!1,loading:100})},1e3)}})},r.readAsText(a)},t.send()}},{key:"componentDidUpdate",value:function(e){var n=e.layers,t=this.props.layers;this.state.isShowDropzone&&n.length!==t.length&&this.setState({isShowDropzone:!1})}},{key:"render",value:function(){var e=this,n=this.props,t=n.addImageLayers,a=n.addTextLayer,r=n.addTextShadow,o=n.changeColor,i=n.changeFontFamily,l=n.changePreviewBackgroundColor,c=n.changePreviewIsInitialize,u=n.changePreviewOverflow,s=n.changePreviewValue,d=n.changeStyle,m=n.changeValue,p=n.downLayer,h=n.fonts,f=n.index,g=n.layers,b=n.preview,v=n.removeLayer,E=n.removeTextShadow,x=n.selectLayer,w=n.upLayer,y=this.state,C=y.isShowDropzone,O=y.isShowLogo,j=y.loading,S=b.fileName,L=b.isInitialize,F=k.createElement(k.Fragment,null);if(void 0!==f){var I=g[f];if("value"in I){var A=I.style;F=k.createElement(mn,Object.assign({},A,{fonts:h,onChange:d,onChangeColor:o,onChangeFontFamily:i,onClickAddTextShadow:r,onClickRemoveTextShadow:E}))}else if("url"in I){var P=I.style;F=k.createElement(Z,Object.assign({},P,{onChange:d}))}}return k.createElement(kn,null,S&&L&&k.createElement(_,{fileName:S}),k.createElement("header",{className:"header"},k.createElement(We,Object.assign({},b,{changePreviewOverflow:u,onChangePreviewBackgroundColor:l,changePreviewIsInitialize:c,onChangePreviewValue:s}))),k.createElement("aside",{className:"detail"},F),k.createElement("div",{className:"preview"},k.createElement($e,{layers:g,preview:b}),k.createElement(oe,Object.assign({},b,{onChange:s,onChangeBackgroundColor:l}))),k.createElement("aside",{className:"side-layers"},k.createElement(de,null,[k.createElement(T,{disabled:!L,key:"add",onClick:a}),k.createElement(D,{disabled:!L||void 0===f,key:"delete",onClick:v}),k.createElement(H,{disabled:!L,key:"image",onClick:function(){e.setState({isShowDropzone:!0})}}),k.createElement(N,{disabled:!L||void 0===f||f===g.length-1,key:"up",onClick:w}),k.createElement(z,{disabled:!L||!f,key:"down",onClick:p})]),k.createElement("div",{className:"layers"},k.createElement(ce,{index:f,layers:g,onChange:m,onClick:x,onFocus:x}))),C&&Be.createPortal(k.createElement(gn,{onClickCloseButton:function(){e.setState({isShowDropzone:!1})},onDrop:t}),this.rootEl),O&&Be.createPortal(k.createElement(En,{loading:j}),this.rootEl))}}]),n}(k.Component),On=Object(xn.b)(function(e){var n=e.fonts.fonts,t=e.layer;return{fonts:n,index:t.index,layers:t.layers,preview:e.preview}},function(e){return{addImageLayers:function(n){n.forEach(function(n){e(m({url:URL.createObjectURL(n)}))})},addTextLayer:function(){return e(p())},addTextShadow:function(){return e(h())},changeColor:function(n,t){var a=n.rgb;return e(f({name:t,value:a}))},changeFontFamily:function(n){return e(f({value:n,name:"fontFamily"}))},changePreviewBackgroundColor:function(n){var t=n.rgb;return e(y({value:t,name:"backgroundColor"}))},changePreviewIsInitialize:function(n){return e(y({value:n,name:"isInitialize"}))},changePreviewOverflow:function(n){return e(y({value:n,name:"overflow"}))},changePreviewValue:function(n){var t=n.currentTarget,a=t.checked,r=t.name,o=t.type,i=t.value;return e(y({name:r,value:"checkbox"===o?a:i}))},changeStyle:function(n){var t=n.currentTarget,a=t.checked,r=t.name,o=t.type,i=t.value;return e(f({name:r,value:"checkbox"===o?a:i}))},changeValue:function(n){var t=n.target.value;return e(g({value:t}))},downLayer:function(){return e(b())},removeLayer:function(){return e(v())},removeTextShadow:function(n){var t=n.currentTarget.name;return e(E({index:parseInt(t,10)}))},selectLayer:function(n){var t=n.currentTarget.dataset;return e(x({index:parseInt(t.index,10)}))},setFonts:function(n){return e(d({fonts:n}))},upLayer:function(){return e(w())}}})(Cn),jn=t(361),Sn=t(362),Nn=t(363),Ln=t(34);t(356),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Fn=t(35),zn=Object(Fn.reducerWithInitialState)({fonts:[]}).case(d,function(e,n){var t=n.fonts;return Object(_e.a)({},e,{fonts:t})}),In=t(85),An={index:void 0,layers:[]},Tn=Object(Fn.reducerWithInitialState)(An).case(m,function(e,n){var t=n.url,a=e.layers.slice();return a.push({url:t,id:Me(),style:{opacity:1,rotate:0,scale:1}}),Object(_e.a)({},e,{layers:a,index:a.length-1})}).case(p,function(e){var n=e.layers.slice();return n.push({id:Me(),style:{color:{a:1,b:0,g:0,r:0},fontFamily:{label:"M+ P Type-1 Regular",value:"mplus-1p-regular"},fontSize:16,fontStyle:!1,fontWeight:400,letterSpacing:0,lineHeight:16,opacity:1,rotate:0,textShadows:[]},value:""}),Object(_e.a)({},e,{layers:n,index:n.length-1})}).case(h,function(e){var n=e.index,t=e.layers.slice();return t[n].style.textShadows.push({blurRadius:0,color:{a:1,b:0,g:0,r:0},hShadow:0,vShadow:0}),Object(_e.a)({},e,{layers:t})}).case(f,function(e,n){var t=n.name,a=n.value,r=e.index,o=e.layers.slice();if(t.indexOf(".")>=0){var i=t.split("."),l=Object(In.a)(i,2),c=l[0],u=l[1],s=c.match("([a-zA-Z]+)\\[(.+)\\]"),d=Object(In.a)(s,3),m=(d[0],d[1]),p=d[2];o[r].style[m][parseInt(p,10)][u]=a}else o[r].style[t]="opacity"===t||"rotate"===t||"scale"===t?parseFloat(a):a;return Object(_e.a)({},e,{layers:o})}).case(y,function(e,n){return"isInitialize"===n.name?An:e}).case(g,function(e,n){var t=n.value,a=e.index,r=e.layers.slice(),o=r[a];return"value"in o&&(o.value=t,r[a]=o),Object(_e.a)({},e,{layers:r})}).case(b,function(e){var n=e.index,t=e.layers.slice(),a=t[n];return t[n]=t[n-1],t[n-1]=a,Object(_e.a)({},e,{index:n-1,layers:t})}).case(v,function(e){var n=e.index,t=e.layers.slice(),a=void 0;return t.splice(n,1),a-1>=0?a-=1:t.length&&(a=0),{index:a,layers:t}}).case(E,function(e,n){var t=n.index,a=e.index,r=e.layers.slice();return r[a].style.textShadows.splice(t,1),Object(_e.a)({},e,{layers:r})}).case(x,function(e,n){var t=n.index;return Object(_e.a)({},e,{index:t})}).case(w,function(e){var n=e.index,t=e.layers.slice(),a=t[n];return t[n]=t[n+1],t[n+1]=a,Object(_e.a)({},e,{index:n+1,layers:t})}),Pn=t(56),Rn=Object(Fn.reducerWithInitialState)({backgroundColor:{a:1,b:255,g:255,r:255},fileName:"",gridSize:0,height:300,isInitialize:!1,overflow:!1,scale:1,width:400}).case(y,function(e,n){var t,a=n.name,r=n.value;return t="scale"===a?parseFloat(r):r,Object(_e.a)({},e,Object(Pn.a)({},a,t))}),Dn=function(){return Object(Ln.b)({fonts:zn,layer:Tn,preview:Rn})};function Bn(){var e=Object(a.a)(['\n  html {\n    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 ProN W3", Hiragino Kaku Gothic ProN, Arial, "\u30e1\u30a4\u30ea\u30aa", Meiryo, sans-serif;\n    font-size: 62.5%;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-style: normal;\n    font-weight: 400;\n    height: 100%;\n    line-height: 1.2;\n    overflow: hidden !important;\n    -webkit-overflow-scrolling: touch;\n    width: 100%;\n  \n    body {\n      font-size: 1.2rem;\n      height: 100%;\n      width: 100%;\n    \n      #root {\n        height: 100%;\n        width: 100%;\n\n        * {\n          appearance: none;\n          \n          &:focus {\n            outline: none;\n          }\n        }\n  \n        a {\n          line-height: 0;\n        }\n\n        ul {\n          list-style: none;\n        }\n      }\n    }\n  }\n']);return Bn=function(){return e},e}var Yn=Object(Ln.c)(Dn()),Hn=Object(O.a)(Bn());Be.render(k.createElement(xn.a,{store:Yn},k.createElement(jn.a,{basename:"/image-maker"},k.createElement(Sn.a,null,k.createElement(Nn.a,{component:On,exact:!0,path:"/"}))),k.createElement(Hn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[145,2,1]]]);
//# sourceMappingURL=main.db6d2834.chunk.js.map