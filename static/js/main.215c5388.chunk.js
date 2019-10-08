(window.webpackJsonpblanksheetmusicgen=window.webpackJsonpblanksheetmusicgen||[]).push([[0],{110:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(56),o=a.n(i),s=(a(64),a(26)),h=a(27),l=a(29),m=a(28),g=a(30),c=(a(65),a(66),a(57)),u=a(8),p=297;function f(t,e,a,n,r,i){for(var o=(p-t-e-r*i)/(r-1),s=[],h=0;h<r;h++)s.push(t+h*(i+o));return s}var d=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(h.a)(e,[{key:"drawLine",value:function(t,e,a,n,r){var i=t.getContext("2d");i.moveTo(e*t.width/210,a*t.height/p),i.lineTo(n*t.width/210,r*t.height/p),i.stroke()}},{key:"drawStaff",value:function(t,e){for(var a=0;a<5;a++){var n=e+a*this.props.staffHeight/5;this.drawLine(t,this.props.marginLeft,n,210-this.props.marginRight,n)}}},{key:"drawBorder",value:function(t){this.drawLine(t,0,0,210,0),this.drawLine(t,0,p,210,p),this.drawLine(t,0,0,0,p),this.drawLine(t,210,0,210,p)}},{key:"_render",value:function(){var t=this.refs.canvas,e=t.getContext("2d");e.beginPath(),e.clearRect(0,0,t.width,t.height);var a=f(this.props.marginTop,this.props.marginBottom,this.props.marginLeft,this.props.marginRight,this.props.nStaves,this.props.staffHeight),n=!0,r=!1,i=void 0;try{for(var o,s=a[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var h=o.value;this.drawStaff(t,h)}}catch(l){r=!0,i=l}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}this.drawBorder(t)}},{key:"componentDidMount",value:function(){console.log("componentdidmount"),this._render()}},{key:"componentDidUpdate",value:function(){console.log("componentdidupdate"),this._render()}},{key:"render",value:function(){return console.log("re-rendering"),r.a.createElement("div",null,r.a.createElement("canvas",{ref:"canvas",width:this.props.width,height:this.props.height}))}}]),e}(r.a.Component),v=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(h.a)(e,[{key:"generatePDF",value:function(){var t=f(this.props.marginTop,this.props.marginBottom,this.props.marginLeft,this.props.marginRight,this.props.nStaves,this.props.staffHeight),e=new c("p","mm","a4"),a=!0,n=!1,r=void 0;try{for(var i,o=t[Symbol.iterator]();!(a=(i=o.next()).done);a=!0)for(var s=i.value,h=0;h<5;h++){var l=s+h*this.props.staffHeight/5;e.line(this.props.marginLeft,l,210-this.props.marginRight,l,null)}}catch(m){n=!0,r=m}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}e.save("a4.pdf")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Number of staves"),r.a.createElement("td",null,r.a.createElement(u.a,{value:this.props.nStaves,min:1,onChange:this.props.changeNStaves}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Staff height (mm)"),r.a.createElement("td",null,r.a.createElement(u.a,{value:this.props.staffHeight,min:0,onChange:this.props.changeStaffHeight}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Top Margin (mm)"),r.a.createElement("td",null,r.a.createElement(u.a,{value:this.props.marginTop,min:0,onChange:this.props.changeMarginTop}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Bottom Margin (mm)"),r.a.createElement("td",null,r.a.createElement(u.a,{value:this.props.marginBottom,min:0,onChange:this.props.changeMarginBottom}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Left Margin (mm)"),r.a.createElement("td",null,r.a.createElement(u.a,{value:this.props.marginLeft,min:0,onChange:this.props.changeMarginLeft}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Right Margin (mm)"),r.a.createElement("td",null,r.a.createElement(u.a,{value:this.props.marginRight,min:0,onChange:this.props.changeMarginRight}))))),r.a.createElement("button",{onClick:this.generatePDF.bind(this)},"generate pdf"))}}]),e}(r.a.Component),E=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).state={margin_top:20,margin_bottom:20,margin_left:20,margin_right:20,n_staves:12,staff_height:10},a}return Object(g.a)(e,t),Object(h.a)(e,[{key:"handleChangeParam",value:function(t,e){console.log("change param"),console.log(t),console.log(e),"n_staves"===t?this.setState({n_staves:e}):"staff_height"===t?this.setState({staff_height:e}):"margin_top"===t?this.setState({margin_top:e}):"margin_bottom"===t?this.setState({margin_bottom:e}):"margin_left"===t?this.setState({margin_left:e}):"margin_right"===t&&this.setState({margin_right:e})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement(v,{nStaves:this.state.n_staves,changeNStaves:function(e){return t.handleChangeParam("n_staves",e)},staffHeight:this.state.staff_height,changeStaffHeight:function(e){return t.handleChangeParam("staff_height",e)},marginTop:this.state.margin_top,changeMarginTop:function(e){return t.handleChangeParam("margin_top",e)},marginBottom:this.state.margin_bottom,changeMarginBottom:function(e){return t.handleChangeParam("margin_bottom",e)},marginLeft:this.state.margin_left,changeMarginLeft:function(e){return t.handleChangeParam("margin_left",e)},marginRight:this.state.margin_right,changeMarginRight:function(e){return t.handleChangeParam("margin_right",e)}}),r.a.createElement("div",null,r.a.createElement(d,{width:400,height:600,nStaves:this.state.n_staves,staffHeight:this.state.staff_height,marginTop:this.state.margin_top,marginBottom:this.state.margin_bottom,marginLeft:this.state.margin_left,marginRight:this.state.margin_right}),r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},59:function(t,e,a){t.exports=a(110)},64:function(t,e,a){},65:function(t,e,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.215c5388.chunk.js.map