(this.webpackJsonplivecovidtracker=this.webpackJsonplivecovidtracker||[]).push([[0],{24:function(e,c,s){},25:function(e,c,s){},27:function(e,c,s){},29:function(e,c,s){},35:function(e,c,s){"use strict";s.r(c);var a=s(1),n=s.n(a),t=s(18),i=s.n(t),r=(s(24),s(25),s(11)),l=s(2),j=s(8),d=s.n(j),h=s(12),b=s(10),O=(s(27),s(0)),x=function(){var e=Object(a.useState)([]),c=Object(b.a)(e,2),s=c[0],n=c[1],t=function(){var e=Object(h.a)(d.a.mark((function e(){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,n(s.statewise),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){t()}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("section",{children:[Object(O.jsx)("h1",{children:"\ud83d\udd34Live"}),Object(O.jsx)("h2",{children:"COVID-19 CORONAVIRUS TRACKER"}),s.map((function(e){return Object(O.jsxs)("div",{id:e.state,children:[Object(O.jsx)("h1",{className:"heading",children:e.state}),Object(O.jsx)("div",{className:"card",children:Object(O.jsx)("div",{className:"card_main",children:Object(O.jsxs)("div",{className:"card_inner",children:[Object(O.jsxs)("p",{className:"card_name",children:[Object(O.jsx)("span",{children:"OUR"})," STATE"]}),Object(O.jsx)("p",{className:"card_total card_small",children:e.state})]})})}),Object(O.jsx)("div",{className:"card",children:Object(O.jsx)("div",{className:"card_main",children:Object(O.jsxs)("div",{className:"card_inner",children:[Object(O.jsxs)("p",{className:"card_name",children:[Object(O.jsx)("span",{children:"TOTAL"})," RECOVERED"]}),Object(O.jsx)("p",{className:"card_total card_small",children:e.recovered})]})})}),Object(O.jsx)("div",{className:"card",children:Object(O.jsx)("div",{className:"card_main",children:Object(O.jsxs)("div",{className:"card_inner",children:[Object(O.jsxs)("p",{className:"card_name",children:[Object(O.jsx)("span",{children:"TOTAL"})," CONFIRMED"]}),Object(O.jsx)("p",{className:"card_total card_small",children:e.confirmed})]})})}),Object(O.jsx)("div",{className:"card",children:Object(O.jsx)("div",{className:"card_main",children:Object(O.jsxs)("div",{className:"card_inner",children:[Object(O.jsxs)("p",{className:"card_name",children:[Object(O.jsx)("span",{children:"TOTAL"})," DEATHS"]}),Object(O.jsx)("p",{className:"card_total card_small",children:e.deaths})]})})}),Object(O.jsx)("div",{className:"card",children:Object(O.jsx)("div",{className:"card_main",children:Object(O.jsxs)("div",{className:"card_inner",children:[Object(O.jsxs)("p",{className:"card_name",children:[Object(O.jsx)("span",{children:"TOTAL"})," ACTIVE"]}),Object(O.jsx)("p",{className:"card_total card_small",children:e.active})]})})}),Object(O.jsx)("div",{className:"card",children:Object(O.jsx)("div",{className:"card_main",children:Object(O.jsxs)("div",{className:"card_inner",children:[Object(O.jsxs)("p",{className:"card_name",children:[Object(O.jsx)("span",{children:"LAST"})," UPDATED"]}),Object(O.jsx)("p",{className:"card_total card_small",children:e.lastupdatedtime})]})})})]},e.state)}))]})})},m=(s(29),function(){var e=Object(a.useState)([]),c=Object(b.a)(e,2),s=c[0],n=c[1],t=Object(a.useState)("122001"),i=Object(b.a)(t,2),r=i[0],l=i[1],j=new Date,x=String(j.getDate()).padStart(2,"0"),m=String(j.getMonth()+1).padStart(2,"0"),o=j.getFullYear();j=x+"-"+m+"-"+o;var p=function(){var e=Object(h.a)(d.a.mark((function e(){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=".concat(r,"&date=").concat(j));case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,n(s.sessions),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){p()}),[r]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"search",children:Object(O.jsx)("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)},placeholder:"Enter your pincode here..."})}),s?Object(O.jsxs)("div",{className:"Vaccine",children:[Object(O.jsxs)("h3",{children:["Total Slots Available -"," ",Object(O.jsx)("span",{className:"warning",children:s.length})]}),s.map((function(e){return"0"!=e.available_capacity?Object(O.jsxs)("div",{className:"Vaccine_body",children:[Object(O.jsxs)("div",{className:"left",children:[Object(O.jsxs)("h1",{className:"name",children:[Object(O.jsx)("span",{children:"Place - "}),e.name]}),Object(O.jsxs)("h3",{className:"address",children:[Object(O.jsx)("span",{children:"Address - "}),e.address]}),Object(O.jsxs)("h3",{children:[Object(O.jsxs)("span",{children:[e.fee_type," - "]}),"\u20b9",e.fee]}),Object(O.jsxs)("h3",{className:"age",children:[Object(O.jsx)("span",{children:"Minimum age - "}),e.min_age_limit]}),Object(O.jsxs)("h3",{className:"dose",children:[Object(O.jsx)("span",{children:"Vaccine - "}),e.vaccine]})]}),Object(O.jsxs)("div",{className:"right",children:[Object(O.jsxs)("h3",{className:"timing",children:[Object(O.jsx)("span",{children:"From - "}),e.from]}),Object(O.jsxs)("h3",{className:"timing",children:[Object(O.jsx)("span",{children:"To - "}),e.to]}),Object(O.jsxs)("h3",{className:"available",children:[Object(O.jsx)("span",{children:"Available Capacity - "}),e.available_capacity]}),Object(O.jsxs)("h3",{className:"available",children:[Object(O.jsx)("span",{children:"Available Dose 1 - "}),e.available_capacity_dose1]}),Object(O.jsxs)("h3",{className:"available",children:[Object(O.jsx)("span",{children:"Available Dose 2 - "}),e.available_capacity_dose2]})]})]},e.center_id):Object(O.jsxs)("div",{className:"Vaccine_body",children:[Object(O.jsxs)("div",{className:"left",children:[Object(O.jsxs)("h1",{className:"name",children:[Object(O.jsx)("span",{children:"Place - "}),e.name]}),Object(O.jsxs)("h3",{className:"address",children:[Object(O.jsx)("span",{children:"Address - "}),e.address]}),Object(O.jsxs)("h3",{children:[Object(O.jsxs)("span",{children:[e.fee_type," - "]}),"\u20b9",e.fee]}),Object(O.jsxs)("h3",{className:"age",children:[Object(O.jsx)("span",{children:"Minimum age - "}),e.min_age_limit]}),Object(O.jsxs)("h3",{className:"dose",children:[Object(O.jsx)("span",{children:"Vaccine - "}),e.vaccine]})]}),Object(O.jsxs)("div",{className:"right",children:[Object(O.jsxs)("h3",{className:"timing",children:[Object(O.jsx)("span",{children:"From - "}),e.from]}),Object(O.jsxs)("h3",{className:"timing",children:[Object(O.jsx)("span",{children:"To - "}),e.to]}),Object(O.jsx)("h3",{className:"warning",children:"Vaccine Currently Not Available"})]})]},e.center_id)}))]}):Object(O.jsx)("h3",{className:"warning",children:"No Vaccine Slot in Your Area"})]})}),o=function(){return Object(O.jsx)(r.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"Navbar",children:Object(O.jsxs)("ul",{children:[Object(O.jsxs)("div",{className:"head",children:[Object(O.jsx)("li",{children:Object(O.jsx)("img",{src:"https://www.politico.eu/wp-content/uploads/2020/03/coronavaccineRGB-1200x628.jpg",alt:""})}),Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/",children:"Live Covid Tracker"})})]}),Object(O.jsxs)("div",{className:"Navbar_body",children:[Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/corona",children:"Covid-Data"})}),Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/vaccine",children:"Vaccine-Slot"})})]})]})}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/corona",children:Object(O.jsx)(x,{})}),Object(O.jsx)(l.a,{path:"/vaccine",children:Object(O.jsx)(m,{})}),Object(O.jsx)(l.a,{path:"/",children:Object(O.jsx)(x,{})})]})]})})},p=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(o,{})})};i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d89ebf5d.chunk.js.map