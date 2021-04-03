(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,s){},28:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),c=s(19),i=s.n(c),l=(s(28),s(21)),r=s(17),o=s.n(r),d=s(20),b=s(14),h=s(9),j=s(10),v=s(12),p=s(11),u=s(39),x=s(40),m=s(41),O=(s(29),s(18),s(16)),g=(s(30),function(e){var t=new O.default;console.log(e),t.autoTable({head:[[e+" Invoices"]],columnStyles:{columnWidth:25},styles:{fontSize:15,cellPadding:1,textColor:[0,0,128],fillColor:[255,255,255]}}),t.autoTable({html:"#invoices"}),t.autoTable({head:[["Report Generated on "+(new Date).toISOString().slice(0,10)]],columnStyles:{columnWidth:25},styles:{fontSize:5,cellPadding:1,textColor:[0,0,0],fillColor:[255,255,255]}}),t.save("table.pdf")}),S=s(0),T=function(e){Object(v.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(h.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onTrigger=function(t){var s=new Object;s.id="Inv-"+(new Date).getUTCMilliseconds(),s.vendor=e.state.vendor,s.amount=e.state.amount,s.desc=e.state.desc,s.status="pending",s.date=(new Date).toISOString().slice(0,10),e.props.parentCallback(s),t.preventDefault(),e.setState({submitted:!0})},e.state={amount:"",desc:"",vendor:"",submitted:!1},e.setContent=function(t){e.setState({submitted:!1});var s=t.target.id;"vendor"===s&&e.setState({vendor:t.target.value}),"amount"===s&&e.setState({amount:t.target.value}),"desc"===s&&e.setState({desc:t.target.value})},e}return Object(j.a)(s,[{key:"clearValue",value:function(){this.setState({vendor:""}),this.setState({desc:""}),this.setState({amount:""})}},{key:"render",value:function(){var e;return this.state.submitted&&(e=Object(S.jsx)("label",{className:"center labelcls gree",children:"Invoice has been submitted successfully"})),Object(S.jsxs)("div",{children:[Object(S.jsxs)("form",{onSubmit:this.onTrigger,children:[Object(S.jsx)("label",{className:"labelcls",children:"Vendor"}),Object(S.jsx)("input",{id:"vendor",className:"form-control",onInput:this.setContent,required:!0,value:this.state.vendor,placeholder:"vendor name"}),Object(S.jsx)("label",{className:"labelcls",children:"Amount (in $)"}),Object(S.jsx)("input",{id:"amount",className:"form-control ",onInput:this.setContent,required:!0,value:this.state.amount,placeholder:"Amount of invoice"}),Object(S.jsx)("label",{className:"labelcls",children:"Desc"}),Object(S.jsx)("input",{id:"desc",className:"form-control",onInput:this.setContent,required:!0,value:this.state.desc,placeholder:"Desc about invoice"}),Object(S.jsx)("br",{}),Object(S.jsx)("div",{className:"text-center",children:Object(S.jsx)("input",{className:"btn btn-dark btn-lg btn-primary",type:"submit",value:"Submit"})})]}),e]})}}]),s}(n.a.Component),f=function(e){Object(v.a)(s,e);var t=Object(p.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).handleCallback=function(e){a.setState(Object(b.a)({},a.state.pending.push(e)))},a.state={isLoading:!1,invoices:[],pending:[],approved:[],rejected:[],activeTab:"",approveBtn:"",PendingTab:"btn clr tabs",ApprovedTab:"btn  clr ",RejectedTab:"btn clr  ",activeList:"Home",visibleAddNew:"none",visibleHome:"block",exportInvoice:"none",homeTab:"",NewInvoiceTab:"",exportTab:""},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://66z3kzjud6.execute-api.us-east-2.amazonaws.com/dev");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,console.log(s),this.setState({invoices:s,isLoading:!1}),this.setState({pending:s,isLoading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"export",value:function(){g(this.state.activeTab)}},{key:"doActionInvoice",value:function(e,t){e.status=t;var s=Object(l.a)(this.state.invoices).filter((function(t){return t.id!==e.id}));"Rejected"===t?this.setState(Object(b.a)({},this.state.rejected.push(e))):"Approved"===t&&this.setState(Object(b.a)({},this.state.approved.push(e))),this.setState({invoices:s}),this.setState({pending:s})}},{key:"setComment",value:function(e,t){e.comments=t,this.setState({invoices:this.state.invoices})}},{key:"setInvoiceState",value:function(e,t){this.setState({activeTab:t}),"Rejected"===t?(console.log("rejected Tab"+this.state.RejectedTab),this.setState({RejectedTab:this.state.RejectedTab+" tabs"}),this.setState({PendingTab:this.state.PendingTab.replace(" tabs","")}),this.setState({ApprovedTab:this.state.ApprovedTab.replace(" tabs","")}),console.log("rejected Tab"+this.state.RejectedTab),this.setState({approveBtn:"none"})):"Approved"===t?(this.setState({ApprovedTab:this.state.ApprovedTab+" tabs"}),this.setState({PendingTab:this.state.PendingTab.replace(" tabs","")}),this.setState({RejectedTab:this.state.RejectedTab.replace(" tabs","")}),this.setState({approveBtn:"none"})):(this.setState({PendingTab:this.state.PendingTab+" tabs"}),this.setState({ApprovedTab:this.state.ApprovedTab.replace(" tabs","")}),this.setState({RejectedTab:this.state.RejectedTab.replace(" tabs","")}),this.setState({approveBtn:"block"})),this.setState({invoices:e})}},{key:"changeTab",value:function(e){"Add New"===e?(this.setState({visibleAddNew:"block"}),this.setState({visibleHome:"none"}),this.setState({exportInvoice:"none"}),this.setState({NewInvoiceTab:this.state.NewInvoiceTab+" active"}),this.setState({homeTab:this.state.homeTab.replace(" active","")}),this.setState({exportTab:this.state.exportTab.replace(" active","")})):"Export"===e?(this.setState({visibleAddNew:"none"}),this.setState({visibleHome:"block"}),this.setState({exportInvoice:"block"}),this.setState({exportTab:this.state.exportTab+" active"}),this.setState({homeTab:this.state.homeTab.replace(" active","")}),this.setState({NewInvoiceTab:this.state.NewInvoiceTab.replace(" active","")})):(this.setState({visibleAddNew:"none"}),this.setState({visibleHome:"block"}),this.setState({exportInvoice:"none"}),this.setState({homeTab:this.state.homeTab+" active"}),this.setState({NewInvoiceTab:this.state.NewInvoiceTab.replace(" active","")}),this.setState({exportTab:this.state.exportTab.replace(" active","")}))}},{key:"render",value:function(){var e=this,t=this.state.isLoading,s=this.state.invoices;if(t)return Object(S.jsx)("div",{children:"Loading..."});var a=s.map((function(t){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:t.id}),Object(S.jsx)("td",{children:t.vendor}),Object(S.jsx)("td",{className:"dollar",children:t.amount}),Object(S.jsx)("td",{children:t.desc}),Object(S.jsx)("td",{children:t.date}),Object(S.jsx)("td",{children:t.status}),Object(S.jsx)("td",{children:Object(S.jsx)(u.a,{style:{color:"#D2691E"},className:"btn btn-lg ",placeholder:"Comments...",onInput:function(s){return e.setComment(t,s.target.value)},value:t.comments,children:" Comments "})}),Object(S.jsx)("td",{children:Object(S.jsxs)("div",{style:{display:e.state.approveBtn},children:[" ",Object(S.jsx)(x.a,{className:"btn btn-lg btn-success",onClick:function(){return e.doActionInvoice(t,"Approved")},children:" Approve "})]})}),Object(S.jsx)("td",{children:Object(S.jsx)("div",{style:{display:e.state.approveBtn},children:Object(S.jsx)(x.a,{className:"btn btn-lg btn-danger",onClick:function(){return e.doActionInvoice(t,"Rejected")},children:"  Reject "})})})]},t.id)}));return Object(S.jsxs)("div",{children:[Object(S.jsx)("style",{children:"body { background-color: #454d55 }"}),Object(S.jsx)("div",{className:"container-fluid .bg-secondary",children:Object(S.jsxs)("div",{className:"row",children:[Object(S.jsxs)("div",{className:"col-lg-2",children:[Object(S.jsx)("li",{class:"nav navFiller ",children:Object(S.jsx)("a",{onClick:function(){return e.changeTab("Add New")},class:"nav-link",href:"#",children:"Profile "})}),Object(S.jsx)("div",{className:"row",children:Object(S.jsx)("img",{className:" thumbnail col-sm-10 ",src:"/profile3.png",alt:"profileImage"})}),Object(S.jsx)("div",{className:this.state.homeTab,children:Object(S.jsx)("li",{class:"nav navFiller",children:Object(S.jsx)("a",{onClick:function(){return e.changeTab("Home")},class:"nav-link",href:"#",children:"Home"})})}),Object(S.jsx)("div",{className:this.state.NewInvoiceTab,children:Object(S.jsx)("li",{class:"nav navFiller ",children:Object(S.jsx)("a",{onClick:function(){return e.changeTab("Add New")},class:"nav-link",href:"#",children:"Add New Invoice "})})}),Object(S.jsx)("div",{className:this.state.exportTab,children:Object(S.jsx)("li",{class:"nav navFiller ",children:Object(S.jsx)("a",{class:"nav-link",onClick:function(){return e.changeTab("Export")},href:"#",children:"Export Invoices"})})})]}),Object(S.jsxs)("div",{className:"col-lg-10",children:[Object(S.jsx)("div",{className:"row",children:Object(S.jsx)("div",{className:"col-lg-12",children:Object(S.jsx)("h4",{className:"jumbotron header",children:" Invoice Processing -  Bolt Corp"})})}),Object(S.jsx)("div",{style:{display:this.state.visibleHome},children:Object(S.jsx)("div",{className:"row",children:Object(S.jsxs)("div",{className:"col-lg-12 center text-center",children:[Object(S.jsx)("div",{style:{display:this.state.exportInvoice},children:Object(S.jsxs)("div",{className:"text-center",children:[Object(S.jsx)(x.a,{className:"btn btn-dark btn-lg btn-primary ",onClick:function(){return e.export()},children:"Export"}),Object(S.jsx)("br",{})]})}),Object(S.jsx)(m.a,{id:"header",dark:!0,responsive:!0,hover:!0,children:Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{id:"pendingTab",colSpan:"3",children:Object(S.jsx)(x.a,{onClick:function(){return e.setInvoiceState(e.state.pending,"Pending")},className:this.state.PendingTab,children:"Pending Invoices"})}),Object(S.jsx)("th",{id:"approveTab",colSpan:"3",children:Object(S.jsx)(x.a,{onClick:function(){return e.setInvoiceState(e.state.approved,"Approved")},className:this.state.ApprovedTab,children:"Approved Invoices"})}),Object(S.jsx)("th",{id:"rejectedTab",colSpan:"3",children:Object(S.jsx)(x.a,{onClick:function(){return e.setInvoiceState(e.state.rejected,"Rejected")},className:this.state.RejectedTab,children:"Rejected Invoices"})})]})})}),Object(S.jsxs)(m.a,{id:"invoices",dark:!0,responsive:!0,striped:!0,bordered:!0,hover:!0,children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Invoice #"}),Object(S.jsx)("th",{children:"Vendor"}),Object(S.jsx)("th",{children:"Amount"}),Object(S.jsx)("th",{children:"Desc"}),Object(S.jsx)("th",{children:"Date"}),Object(S.jsx)("th",{children:"Status"}),Object(S.jsx)("th",{colSpan:"1",children:"Comments"}),Object(S.jsx)("th",{style:{display:this.state.approveBtn},colSpan:"2",children:"Actions"})]})}),Object(S.jsx)("tbody",{children:0===this.state.invoices.length?Object(S.jsx)("td",{colSpan:"9",children:"All caught up!"}):a})]})]})})}),Object(S.jsx)("div",{style:{display:this.state.visibleAddNew},children:Object(S.jsx)(T,{parentCallback:this.handleCallback})})]})]})}),Object(S.jsx)("div",{class:"footer",children:Object(S.jsx)("p",{children:" Bolt Corp is a fantasy company . Copyright \xa9 2021 Bolt Inc. All rights reserved.."})})]})}}]),s}(a.Component),N=function(e){e&&e instanceof Function&&s.e(6).then(s.bind(null,414)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(f,{})}),document.getElementById("root")),N()}},[[34,1,3]]]);
//# sourceMappingURL=main.3b18d2bc.chunk.js.map