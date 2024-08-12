import{a as ve,c as p,d as A,e as B,h as P,i as q,j as te,k as G,m as _e,o as T,p as Ce,r as R,s as $,t as Se,u as ge,v as U,w as Ee,x as Fe}from"./chunk-SY2PBC2O.js";import{$ as f,C as _,D as oe,E as H,Fa as ce,H as ae,Ja as ue,K as le,Ka as k,L as o,Ma as M,Na as h,R as Y,T as C,U as I,W as d,Y as K,Z as e,_ as t,aa as me,ba as se,ca as de,d as V,da as O,ea as b,eb as W,fa as S,fb as fe,gb as be,hb as ye,ib as xe,kb as Q,ma as r,na as c,nb as X,oa as L,ob as he,pb as Z,qb as ee,t as v,ta as x,u as y,ua as pe,va as g,w as ne,wa as E,x as re,y as F,z as N}from"./chunk-GHWY76KD.js";function De(s,a){s&1&&de(0)}function Ie(s,a){if(s&1&&(me(0),I(1,De,1,0,"ng-container",0),se()),s&2){let m=S();o(),d("ngComponentOutlet",m.listComponent)("ngComponentOutletInjector",m.componentInjector)}}var Ue=(()=>{let a=class a{constructor(){this.entityList=Y([]),this.offcanvasService=v(ve),this.dynamicFormService=v(Fe),ce(()=>V(this,null,function*(){try{this.offcanvasService.mode()==="update"&&this.offcanvasService.hasChanges()?yield this.onEntityUpdate(this.offcanvasService.entity()):this.offcanvasService.mode()==="create"&&this.offcanvasService.entity()?yield this.onCreate(this.offcanvasService.entity()):this.offcanvasService.mode()==="delete"&&this.offcanvasService.entity()?.id?yield this.onEntityDelete(this.offcanvasService.entity()):console.log("No action taken")}catch(i){console.log(i.message)}finally{this.offcanvasService.hasChanges.set(!1)}}),{allowSignalWrites:!0})}get componentInjector(){return oe.create({providers:[{provide:a,useValue:this}]})}ngOnInit(){this.dynamicFormService.registerFormComponent(this.entityName,this.formComponent)}onEntitySelect(i){this.offcanvasService.open(this.entityName,i)}onEntityDelete(i){return V(this,null,function*(){i.id!==void 0&&(yield this.service.delete(i.id),this.entityList.update(l=>l.filter(n=>n.id!==i.id)))})}onEntityUpdate(i){return V(this,null,function*(){let l=yield this.service.update(i.id,i);this.entityList.update(n=>n.map(u=>u.id===l.id?l:u))})}onCreate(i){return V(this,null,function*(){let l=yield this.service.create(i);this.entityList.update(n=>[...n,l])})}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=y({type:a,selectors:[["lib-abstract-dashboard"]],standalone:!0,features:[x],decls:1,vars:1,consts:[[4,"ngComponentOutlet","ngComponentOutletInjector"]],template:function(l,n){l&1&&I(0,Ie,2,2,"ng-container"),l&2&&K(n.listComponent?0:-1)},dependencies:[h,ue],encapsulation:2});let s=a;return s})();var j=(()=>{let a=class a{constructor(){this.entities=[],this.entitySelected=new H,this.entityDeleted=new H,this.entityUpdated=new H}ngOnInit(){return V(this,null,function*(){yield this.getList()})}getList(){return V(this,null,function*(){try{this.entities=yield this.service.getAll()}catch(i){console.error("Error loading entities",i.message)}})}onEntitySelected(i){this.entitySelected.emit(i)}onEntityDeleted(i){return V(this,null,function*(){try{yield this.service.delete(i?.id),this.entities=this.entities.filter(l=>l!==i)}catch(l){console.error("Error deleting entity",l.message)}})}onEntityUpdated(i){return V(this,null,function*(){try{i=yield this.service.update(i?.id,i),this.entities=this.entities.map(l=>l===i?i:l)}catch(l){console.error("Error updating entity",l.message)}})}};a.\u0275fac=function(l){return new(l||a)},a.\u0275dir=ne({type:a,inputs:{entities:"entities"},outputs:{entitySelected:"entitySelected",entityDeleted:"entityDeleted",entityUpdated:"entityUpdated"}});let s=a;return s})();function Te(s,a){if(s&1){let m=O();e(0,"tr")(1,"td",3)(2,"span",4),r(3),t()(),e(4,"td",3),r(5),t(),e(6,"td",3),r(7),t(),e(8,"td",3),r(9),t(),e(10,"td",3)(11,"span",5),r(12),t()(),e(13,"td",3),r(14),t(),e(15,"td",3),r(16),t(),e(17,"td",3),r(18),t(),e(19,"td",3)(20,"span",6),r(21),t(),e(22,"span",7),r(23),g(24,"date"),t()(),e(25,"td",3)(26,"span",6),r(27),t(),e(28,"span",7),r(29),g(30,"date"),t()(),e(31,"td",3)(32,"div",8)(33,"button",9),b("click",function(){let l=F(m).$implicit,n=S();return N(n.onEntitySelected(l))}),f(34,"img",10),t(),e(35,"button",9),b("click",function(){let l=F(m).$implicit,n=S();return N(n.onEntityDeleted(l))}),f(36,"img",11),t()()()()}if(s&2){let m=a.$implicit;o(3),c(m.username),o(2),c(m.employee.firstName+" "+m.employee.lastName),o(2),c(m.email?m.email:m.contact?m.contact.email:m.employee.contact==null?null:m.employee.contact.email),o(2),c(m.contact?m.contact.phone:m.employee.contact==null?null:m.employee.contact.phone),o(3),L(" ",m.role," "),o(2),c(m.isVerified),o(2),c(m.employee.position),o(2),c(m.employee.department),o(3),c(m.createdBy),o(2),c(E(24,12,m.createdAt,"medium")),o(4),c(m.updatedBy),o(2),c(E(30,15,m.updatedAt,"medium"))}}var lt=(()=>{let a=class a extends j{constructor(){super(...arguments),this.service=v(Z)}};a.\u0275fac=(()=>{let i;return function(n){return(i||(i=_(a)))(n||a)}})(),a.\u0275cmp=y({type:a,selectors:[["lib-employee-list"]],standalone:!0,features:[C,x],decls:27,vars:1,consts:[[1,"table","table-auto"],[1,"px-2","py-2","text-slate-600"],[4,"ngFor","ngForOf"],[1,"px-2","py-2","text-sm","text-slate-800"],[1,"font-medium","uppercase"],[1,"border","rounded","px-3","py-1","text-xs","bg-slate-100","font-medium","capitalize"],[1,"block","text-xs","uppercase"],[1,"block","text-xs"],[1,"text-xs","font-medium","flex","flex-nowrap","gap-x-1"],[1,"bg-slate-100","border","rounded-md","px-3","py-1","shadow-sm","inline-flex","items-center",3,"click"],["src","assets/icons/eye.svg","alt","View",1,"size-4"],["src","assets/icons/delete.svg","alt","Delete",1,"size-4"]],template:function(l,n){l&1&&(e(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),r(4,"Username"),t(),e(5,"th",1),r(6,"Full Name"),t(),e(7,"th",1),r(8,"Email"),t(),e(9,"th",1),r(10,"Phone"),t(),e(11,"th",1),r(12,"Role"),t(),e(13,"th",1),r(14,"Verified"),t(),e(15,"th",1),r(16,"Position"),t(),e(17,"th",1),r(18,"Department"),t(),e(19,"th",1),r(20,"Created"),t(),e(21,"th",1),r(22,"Updated"),t(),e(23,"th",1),r(24,"Actions"),t()()(),e(25,"tbody"),I(26,Te,37,18,"tr",2),t()()),l&2&&(o(26),d("ngForOf",n.entities))},dependencies:[h,k,M]});let s=a;return s})();function we(s,a){if(s&1){let m=O();e(0,"tr")(1,"td",3)(2,"a",4),r(3),t()(),e(4,"td",3)(5,"span",5),r(6),t()(),e(7,"td",3),r(8),t(),e(9,"td",3),r(10),t(),e(11,"td",3)(12,"span",6),r(13),t()(),e(14,"td",3)(15,"span",6),r(16),t()(),e(17,"td",3)(18,"span",6),r(19),t()(),e(20,"td",3)(21,"span",7),r(22),t(),e(23,"span",8),r(24),g(25,"date"),t()(),e(26,"td",3)(27,"span",7),r(28),t(),e(29,"span",8),r(30),g(31,"date"),t()(),e(32,"td",3)(33,"div",9)(34,"button",10),b("click",function(){let l=F(m).$implicit,n=S();return N(n.onEntitySelected(l))}),f(35,"img",11),t(),e(36,"button",10),b("click",function(){let l=F(m).$implicit,n=S();return N(n.onEntityDeleted(l))}),f(37,"img",12),t()()()()}if(s&2){let m=a.$implicit;o(3),L(" ","#"+m.orderNumber," "),o(3),c(m.client==null?null:m.client.name),o(2),c(m.pickupAddress),o(2),c(m.client==null||m.client.site==null?null:m.client.site.address),o(3),c(m.type),o(3),c(m.status),o(3),c(m.priority),o(3),c(m.createdBy),o(2),c(E(25,11,m.createdAt,"medium")),o(4),c(m.updatedBy),o(2),c(E(31,14,m.updatedAt,"medium"))}}var bt=(()=>{let a=class a extends j{constructor(){super(...arguments),this.service=v(X)}};a.\u0275fac=(()=>{let i;return function(n){return(i||(i=_(a)))(n||a)}})(),a.\u0275cmp=y({type:a,selectors:[["lib-order-list"]],standalone:!0,features:[C,x],decls:25,vars:1,consts:[[1,"table","capitalize"],[1,"px-2","py-2","text-slate-600"],[4,"ngFor","ngForOf"],[1,"px-2","py-2","text-sm","text-slate-800"],["href","#",1,"hover:underline","underline-offset-2","border","rounded","px-3","py-1","text-xs","bg-slate-100","font-medium","capitalize"],[1,"font-medium","text-pretty"],[1,"border","rounded","px-3","py-1","text-xs","bg-slate-100","font-medium","block","text-center"],[1,"block","text-xs","uppercase"],[1,"block","text-xs"],[1,"text-xs","font-medium","flex","flex-nowrap","gap-x-1"],[1,"bg-slate-100","border","rounded-md","px-3","py-1","shadow-sm","inline-flex","items-center",3,"click"],["src","assets/icons/eye.svg","alt","View",1,"size-4"],["src","assets/icons/delete.svg","alt","Delete",1,"size-4"]],template:function(l,n){l&1&&(e(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),r(4,"Order #"),t(),e(5,"th",1),r(6,"Customer"),t(),e(7,"th",1),r(8,"Pickup Address"),t(),e(9,"th",1),r(10,"Delivery Address"),t(),e(11,"th",1),r(12,"Type"),t(),e(13,"th",1),r(14,"Status"),t(),e(15,"th",1),r(16,"Priority"),t(),e(17,"th",1),r(18,"Created"),t(),e(19,"th",1),r(20,"Updated"),t(),e(21,"th",1),r(22,"Actions"),t()()(),e(23,"tbody"),I(24,we,38,17,"tr",2),t()()),l&2&&(o(24),d("ngForOf",n.entities))},dependencies:[h,k,M]});let s=a;return s})();function Le(s,a){if(s&1){let m=O();e(0,"tr")(1,"td",3)(2,"a",4),r(3),t()(),e(4,"td",3)(5,"span",5),r(6),t()(),e(7,"td",3),r(8),t(),e(9,"td",3),r(10),g(11,"date"),t(),e(12,"td",3),r(13),g(14,"date"),t(),e(15,"td",3),r(16),t(),e(17,"td",3)(18,"span",6),r(19),t(),e(20,"span",7),r(21),g(22,"date"),t()(),e(23,"td",3)(24,"span",6),r(25),t(),e(26,"span",7),r(27),g(28,"date"),t()(),e(29,"td",3)(30,"div",8)(31,"button",9),b("click",function(){let l=F(m).$implicit,n=S();return N(n.onEntitySelected(l))}),f(32,"img",10),t(),e(33,"button",9),b("click",function(){let l=F(m).$implicit,n=S();return N(n.onEntityDeleted(l))}),f(34,"img",11),t()()()()}if(s&2){let m=a.$implicit;o(3),L(" ","#"+m.order.orderNumber," "),o(3),c(m.driver.username),o(2),c(m.vehicle.licensePlate),o(2),c(E(11,10,m.startTime,"medium")),o(3),c(E(14,13,m.endTime,"medium")),o(3),c(m.routePath),o(3),c(m.createdBy),o(2),c(E(22,16,m.createdAt,"medium")),o(4),c(m.updatedBy),o(2),c(E(28,19,m.updatedAt,"medium"))}}var gt=(()=>{let a=class a extends j{constructor(){super(...arguments),this.service=v(he)}};a.\u0275fac=(()=>{let i;return function(n){return(i||(i=_(a)))(n||a)}})(),a.\u0275cmp=y({type:a,selectors:[["lib-route-list"]],standalone:!0,features:[C,x],decls:23,vars:1,consts:[[1,"table"],[1,"px-2","py-2","text-slate-600"],[4,"ngFor","ngForOf"],[1,"px-2","py-2","text-sm","text-slate-800"],["href","#",1,"hover:underline","underline-offset-2","border","rounded","px-3","py-1","text-xs","bg-slate-100","font-medium","capitalize"],[1,"font-medium","uppercase"],[1,"block","text-xs","uppercase"],[1,"block","text-xs"],[1,"text-xs","font-medium","flex","flex-nowrap","gap-x-1"],[1,"bg-slate-100","border","rounded-md","px-3","py-1","shadow-sm","inline-flex","items-center",3,"click"],["src","assets/icons/eye.svg","alt","View",1,"size-4"],["src","assets/icons/delete.svg","alt","Delete",1,"size-4"]],template:function(l,n){l&1&&(e(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),r(4,"Order #"),t(),e(5,"th",1),r(6,"Driver"),t(),e(7,"th",1),r(8,"Vehicle"),t(),e(9,"th",1),r(10,"Start Time"),t(),e(11,"th",1),r(12,"End Time"),t(),e(13,"th",1),r(14,"Route Path"),t(),e(15,"th",1),r(16,"Created"),t(),e(17,"th",1),r(18,"Updated"),t(),e(19,"th",1),r(20,"Actions"),t()()(),e(21,"tbody"),I(22,Le,35,22,"tr",2),t()()),l&2&&(o(22),d("ngForOf",n.entities))},dependencies:[h,k,M]});let s=a;return s})();function Ve(s,a){if(s&1){let m=O();e(0,"tr")(1,"td",3),r(2),t(),e(3,"td",3),r(4),t(),e(5,"td",3),r(6),t(),e(7,"td",3),r(8),t(),e(9,"td",3),r(10),t(),e(11,"td",3),r(12),t(),e(13,"td",3),r(14),t(),e(15,"td",3)(16,"span",4),r(17),t(),e(18,"span",5),r(19),g(20,"date"),t()(),e(21,"td",3)(22,"span",4),r(23),t(),e(24,"span",5),r(25),g(26,"date"),t()(),e(27,"td",3)(28,"div",6)(29,"button",7),b("click",function(){let l=F(m).$implicit,n=S();return N(n.onEntitySelected(l))}),f(30,"img",8),t(),e(31,"button",7),b("click",function(){let l=F(m).$implicit,n=S();return N(n.onEntityDeleted(l))}),f(32,"img",9),t()()()()}if(s&2){let m=a.$implicit;o(2),c(m.make),o(2),c(m.model),o(2),c(m.type),o(2),c(m.year),o(2),c(m.licensePlate),o(2),c(m.capacity||"N/A"),o(2),c(m.currentLocation||"N/A"),o(3),c(m.createdBy),o(2),c(E(20,11,m.createdAt,"medium")),o(4),c(m.updatedBy),o(2),c(E(26,14,m.updatedAt,"medium"))}}var Lt=(()=>{let a=class a extends j{constructor(){super(...arguments),this.service=v(ee)}};a.\u0275fac=(()=>{let i;return function(n){return(i||(i=_(a)))(n||a)}})(),a.\u0275cmp=y({type:a,selectors:[["lib-vehicle-list"]],standalone:!0,features:[C,x],decls:25,vars:1,consts:[[1,"table"],[1,"px-2","py-2","text-slate-600"],[4,"ngFor","ngForOf"],[1,"px-2","py-2","text-sm","text-slate-800"],[1,"block","text-xs","uppercase"],[1,"block","text-xs"],[1,"text-xs","font-medium","flex","flex-nowrap","gap-x-1"],[1,"bg-slate-100","border","rounded-md","px-3","py-1","shadow-sm","inline-flex","items-center",3,"click"],["src","assets/icons/eye.svg","alt","View",1,"size-4"],["src","assets/icons/delete.svg","alt","Delete",1,"size-4"]],template:function(l,n){l&1&&(e(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),r(4,"Make"),t(),e(5,"th",1),r(6,"Model"),t(),e(7,"th",1),r(8,"Type"),t(),e(9,"th",1),r(10,"Year"),t(),e(11,"th",1),r(12,"License Plate"),t(),e(13,"th",1),r(14,"Capacity"),t(),e(15,"th",1),r(16,"Current Location"),t(),e(17,"th",1),r(18,"Created"),t(),e(19,"th",1),r(20,"Updated"),t(),e(21,"th",1),r(22,"Actions"),t()()(),e(23,"tbody"),I(24,Ve,33,17,"tr",2),t()()),l&2&&(o(24),d("ngForOf",n.entities))},dependencies:[h,k,M]});let s=a;return s})();function Oe(s,a){if(s&1&&(e(0,"a",4),r(1),t()),s&2){let m=S().$implicit;d("href",m==null?null:m.website,le),o(),c(m.name)}}function ke(s,a){if(s&1&&r(0),s&2){let m=S().$implicit;L(" ",m.name," ")}}function Me(s,a){if(s&1){let m=O();e(0,"tr")(1,"td",3),I(2,Oe,2,2,"a",4)(3,ke,1,1),e(4,"address",5),r(5),t()(),e(6,"td",3)(7,"span",6),r(8),t(),e(9,"span",7),r(10),t(),e(11,"span",7),r(12),t()(),e(13,"td",3)(14,"span",8),r(15),t()(),e(16,"td",3)(17,"span",8),r(18),t()(),e(19,"td",3)(20,"span",8),r(21),t()(),e(22,"td",3)(23,"span",9),r(24),t(),e(25,"span",9),r(26),g(27,"date"),t()(),e(28,"td",3)(29,"span",9),r(30),t(),e(31,"span",9),r(32),g(33,"date"),t()(),e(34,"td",3)(35,"div",10)(36,"button",11),b("click",function(){let l=F(m).$implicit,n=S();return N(n.onEntitySelected(l))}),f(37,"img",12),t(),e(38,"button",11),b("click",function(){let l=F(m).$implicit,n=S();return N(n.onEntityDeleted(l))}),f(39,"img",13),t()()()()}if(s&2){let m,i=a.$implicit;o(2),K(i.website?2:3),o(3),c(i==null||i.site==null?null:i.site.address),o(3),c(i==null||i.contact==null?null:i.contact.name),o(2),c(i==null||i.contact==null?null:i.contact.email),o(2),c(i==null||i.contact==null?null:i.contact.phone),o(3),L(" ",(m=i==null||i.industry==null?null:i.industry.name)!==null&&m!==void 0?m:"Unassigned"," "),o(3),L(" ",i.isActive?"Active":"Inactive"," "),o(3),L(" ",(i.orders==null?null:i.orders.length)||0," "),o(3),c(i.createdBy),o(2),c(E(27,12,i.createdAt,"medium")),o(4),c(i.updatedBy),o(2),c(E(33,15,i.updatedAt,"medium"))}}var qt=(()=>{let a=class a extends j{constructor(){super(...arguments),this.service=v(Q)}};a.\u0275fac=(()=>{let i;return function(n){return(i||(i=_(a)))(n||a)}})(),a.\u0275cmp=y({type:a,selectors:[["lib-client-list"]],standalone:!0,features:[C,x],decls:21,vars:1,consts:[[1,"table"],[1,"px-2","py-2","text-slate-600"],[4,"ngFor","ngForOf"],[1,"px-2","py-2","text-sm","text-slate-800"],["target","_blank",1,"font-medium","hover:underline","hover:text-blue-600",3,"href"],[1,"block","text-xs","text-slate-700","max-w-56","text-pretty"],[1,"font-medium"],[1,"block","text-xs","text-slate-600","italic"],[1,"border","rounded","px-3","py-1","text-xs","bg-slate-100","font-medium"],[1,"block","text-xs"],[1,"text-xs","font-medium","flex","flex-nowrap","gap-x-1"],[1,"bg-slate-100","border","rounded-md","px-3","py-1","shadow-sm","inline-flex","clients-center",3,"click"],["src","assets/icons/eye.svg","alt","View",1,"size-4"],["src","assets/icons/delete.svg","alt","Delete",1,"size-4"]],template:function(l,n){l&1&&(e(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),r(4,"Client Name"),t(),e(5,"th",1),r(6,"Client Contact"),t(),e(7,"th",1),r(8,"Industry"),t(),e(9,"th",1),r(10,"Client Status"),t(),e(11,"th",1),r(12,"# Orders"),t(),e(13,"th",1),r(14,"Created"),t(),e(15,"th",1),r(16,"Updated"),t(),e(17,"th",1),r(18,"Actions"),t()()(),e(19,"tbody"),I(20,Me,40,18,"tr",2),t()()),l&2&&(o(20),d("ngForOf",n.entities))},dependencies:[h,k,M]});let s=a;return s})();var z=(()=>{let a=class a{constructor(){this.entity=ae(null),this.formSubmitted=new H,this.fb=v(_e)}ngOnInit(){this.entityForm=this.createForm(),this.initializeForm(this.entity())}ngOnChanges(i){i.entity&&this.initializeForm(i.entity.currentValue)}initializeForm(i){i&&this.entityForm.patchValue(i)}editMode(){return!!this.entity()}canSave(){return this.entityForm.valid&&this.entityForm.touched}canDelete(){return this.editMode()}canCancel(){return this.entityForm.touched&&this.entityForm.dirty}canClear(){return this.entityForm.touched&&this.entityForm.dirty}onSubmit(){if(this.entityForm.valid){let i=ge(this.entityForm.value),l=this.editMode()?W.UPDATE:W.CREATE;i=this.editMode()?Se(this.entity(),i):i,this.emitFormSubmission(l,i),this.entityForm.reset()}else console.log("Form is invalid",this.entityForm.errors)}emitFormSubmission(i,l){let n={mode:i,entity:l,changed:this.entityForm.touched};this.formSubmitted.emit(n)}onEdit(){this.entityForm.enable()}onClear(){this.entityForm.reset()}onDelete(){this.entity&&this.emitFormSubmission(W.DELETE,this.entity())}onClose(){this.emitFormSubmission(W.CLOSE,this.entity())}onCancel(){this.emitFormSubmission(W.CANCEL,this.entity())}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=y({type:a,selectors:[["lib-abstract-form"]],inputs:{entity:[1,"entity"]},outputs:{formSubmitted:"formSubmitted"},standalone:!0,features:[re,x],decls:0,vars:0,template:function(l,n){},dependencies:[h,T],encapsulation:2});let s=a;return s})();var Ae=()=>["admin","driver","customer"],di=(()=>{let a=class a extends z{createForm(){return this.fb.group({username:["",[p.required,p.maxLength(255)]],email:["",[p.required,p.email,p.maxLength(255)]],password:["",[p.required,p.maxLength(255)]],role:["",[p.required,p.maxLength(255)]],employee:this.fb.group({firstName:["",[p.required,p.maxLength(255)]],lastName:["",[p.required,p.maxLength(255)]],position:["",[p.required,p.maxLength(255)]],department:["",p.maxLength(255)]}),contact:this.fb.group({name:["",[p.required,p.maxLength(255)]],phone:["",[p.maxLength(255)]],email:["",[p.email,p.maxLength(255)]]})})}};a.\u0275fac=(()=>{let i;return function(n){return(i||(i=_(a)))(n||a)}})(),a.\u0275cmp=y({type:a,selectors:[["lib-employee-form"]],standalone:!0,features:[C,x],decls:25,vars:18,consts:[[1,"flex","flex-col","gap-6",3,"ngSubmit","formGroup"],[1,"border","border-gray-200","p-4","rounded-md","space-y-2","bg-slate-50"],[1,"text-sm","font-medium","text-gray-700"],[1,"grid","grid-cols-2","gap-4"],["formControlName","username","type","text","autocomplete","username",3,"label"],["formControlName","email","type","email","autocomplete","none",3,"label"],["formControlName","password","type","password","autocomplete","none",3,"label"],["formControlName","role",3,"label","options"],["formGroupName","employee",1,"border","border-gray-200","p-4","rounded-md","space-y-2","bg-slate-50"],["formControlName","firstName","type","text",3,"label"],["formControlName","lastName","type","text",3,"label"],["formControlName","position","type","text",3,"label"],["formControlName","department","type","text",3,"label"],["formGroupName","contact",1,"border","border-gray-200","p-4","rounded-md","space-y-2","bg-slate-50"],["formControlName","name","type","text",3,"label"],["formControlName","phone","type","text",3,"label"],["formControlName","email","type","email",3,"label"],[3,"clear","delete","cancel","close","save","canClear","canDelete","canCancel","canSave"]],template:function(l,n){l&1&&(e(0,"form",0),b("ngSubmit",function(){return n.onSubmit()}),e(1,"fieldset",1)(2,"legend",2),r(3,"User Information"),t(),e(4,"div",3),f(5,"lib-basic-input",4)(6,"lib-basic-input",5)(7,"lib-basic-input",6)(8,"lib-drop-down",7),t()(),e(9,"fieldset",8)(10,"legend",2),r(11,"Employee Information"),t(),e(12,"div",3),f(13,"lib-basic-input",9)(14,"lib-basic-input",10)(15,"lib-basic-input",11)(16,"lib-basic-input",12),t()(),e(17,"fieldset",13)(18,"legend",2),r(19,"Contact Information"),t(),e(20,"div",3),f(21,"lib-basic-input",14)(22,"lib-basic-input",15)(23,"lib-basic-input",16),t()(),e(24,"lib-form-buttons",17),b("clear",function(){return n.onClear()})("delete",function(){return n.onDelete()})("cancel",function(){return n.onCancel()})("close",function(){return n.onClose()})("save",function(){return n.onSubmit()}),t()()),l&2&&(d("formGroup",n.entityForm),o(5),d("label","Username"),o(),d("label","Email"),o(),d("label","Password"),o(),d("label","Role")("options",pe(17,Ae)),o(5),d("label","First Name"),o(),d("label","Last Name"),o(),d("label","Position"),o(),d("label","Department"),o(5),d("label","Contact Name"),o(),d("label","Phone"),o(),d("label","Contact Email"),o(),d("canClear",n.canClear())("canDelete",n.canDelete())("canCancel",n.canCancel())("canSave",n.canSave()))},dependencies:[h,T,P,A,B,q,G,te,R,U,$]});let s=a;return s})();var Ci=(()=>{let a=class a extends z{constructor(){super(...arguments),this.orderTypes=Object.values(be),this.orderStatuses=Object.values(fe),this.orderPriorities=Object.values(ye),this.clients=[],this.clientService=v(Q)}ngOnInit(){super.ngOnInit(),this.loadClients()}createForm(){return this.fb.group({orderNumber:["",[p.required]],client:["",[p.required]],pickupAddress:["",[p.required]],deliveryAddress:["",[p.required]],type:["",[p.required]],status:["",[p.required]],priority:["",[p.required]]})}loadClients(){this.clientService.getAll().then(i=>this.clients=i)}};a.\u0275fac=(()=>{let i;return function(n){return(i||(i=_(a)))(n||a)}})(),a.\u0275cmp=y({type:a,selectors:[["lib-order-form"]],standalone:!0,features:[C,x],decls:13,vars:16,consts:[[1,"flex","flex-col",3,"ngSubmit","formGroup"],[1,"border","border-gray-200","p-4","rounded-md","space-y-2","bg-slate-50"],[1,"text-sm","font-medium","text-gray-700"],[1,"grid","grid-cols-2","gap-4"],["formControlName","orderNumber","type","number",3,"label"],["formControlName","client","entityName","client","key","id",3,"label","options"],["formControlName","pickupAddress","type","text",3,"label"],["formControlName","deliveryAddress","type","text",3,"label"],["formControlName","type","entityName","",3,"label","options"],["formControlName","status","entityName","",3,"label","options"],["formControlName","priority","entityName","",3,"label","options"],[3,"clear","delete","cancel","close","save","canClear","canDelete","canCancel","canSave"]],template:function(l,n){l&1&&(e(0,"form",0),b("ngSubmit",function(){return n.onSubmit()}),e(1,"fieldset",1)(2,"legend",2),r(3,"Order Information"),t(),e(4,"div",3),f(5,"lib-basic-input",4)(6,"lib-drop-down",5)(7,"lib-basic-input",6)(8,"lib-basic-input",7)(9,"lib-drop-down",8)(10,"lib-drop-down",9)(11,"lib-drop-down",10),t()(),e(12,"lib-form-buttons",11),b("clear",function(){return n.onClear()})("delete",function(){return n.onDelete()})("cancel",function(){return n.onCancel()})("close",function(){return n.onClose()})("save",function(){return n.onSubmit()}),t()()),l&2&&(d("formGroup",n.entityForm),o(5),d("label","order number"),o(),d("label","client")("options",n.clients),o(),d("label","pickup address"),o(),d("label","delivery address"),o(),d("label","type")("options",n.orderTypes),o(),d("label","status")("options",n.orderStatuses),o(),d("label","priority")("options",n.orderPriorities),o(),d("canClear",n.canClear())("canDelete",n.canDelete())("canCancel",n.canCancel())("canSave",n.canSave()))},dependencies:[h,T,P,A,B,q,G,R,$,U]});let s=a;return s})();var Li=(()=>{let a=class a extends z{constructor(){super(...arguments),this.orders=Y([]),this.drivers=Y([]),this.vehicles=Y([]),this.orderService=v(X),this.userService=v(Z),this.vehicleService=v(ee)}ngOnInit(){super.ngOnInit(),this.loadData()}createForm(){return this.fb.group({order:["",p.required],driver:["",p.required],vehicle:["",p.required],startTime:["",p.required],endTime:["",p.required],routePath:["",p.required]})}loadData(){this.userService.getAll().then(i=>{this.drivers.update(()=>i)}),this.vehicleService.getAll().then(i=>{this.vehicles.update(()=>i)}),this.orderService.getAll().then(i=>{this.orders.update(()=>i)})}};a.\u0275fac=(()=>{let i;return function(n){return(i||(i=_(a)))(n||a)}})(),a.\u0275cmp=y({type:a,selectors:[["lib-route-form"]],standalone:!0,features:[C,x],decls:12,vars:14,consts:[[1,"flex","flex-col",3,"ngSubmit","formGroup"],[1,"border","border-gray-200","p-4","rounded-md","space-y-2","bg-slate-50"],[1,"text-sm","font-medium","text-gray-700"],[1,"grid","grid-cols-2","gap-4"],["formControlName","order","entityName","order","fieldName","orderNumber","key","id",3,"label","options"],["formControlName","driver","entityName","driver","fieldName","username","key","id",3,"label","options"],["formControlName","vehicle","entityName","vehicle","fieldName","licensePlate","key","id",3,"label","options"],["formControlName","startTime","type","datetime-local",3,"label"],["formControlName","endTime","type","datetime-local",3,"label"],["formControlName","routePath","type","text",3,"label"],[3,"clear","delete","cancel","close","save","canClear","canDelete","canCancel","canSave"]],template:function(l,n){l&1&&(e(0,"form",0),b("ngSubmit",function(){return n.onSubmit()}),e(1,"fieldset",1)(2,"legend",2),r(3,"Order Assignment"),t(),e(4,"div",3),f(5,"lib-drop-down",4)(6,"lib-drop-down",5)(7,"lib-drop-down",6)(8,"lib-basic-input",7)(9,"lib-basic-input",8)(10,"lib-basic-input",9),t()(),e(11,"lib-form-buttons",10),b("clear",function(){return n.onClear()})("delete",function(){return n.onDelete()})("cancel",function(){return n.onCancel()})("close",function(){return n.onClose()})("save",function(){return n.onSubmit()}),t()()),l&2&&(d("formGroup",n.entityForm),o(5),d("label","Order")("options",n.orders()),o(),d("label","Driver")("options",n.drivers()),o(),d("label","Vehicle")("options",n.vehicles()),o(),d("label","Start Time"),o(),d("label","End Time"),o(),d("label","Route Path"),o(),d("canClear",n.canClear())("canDelete",n.canDelete())("canCancel",n.canCancel())("canSave",n.canSave()))},dependencies:[h,T,P,A,B,q,G,R,U,$]});let s=a;return s})();var qi=(()=>{let a=class a extends z{constructor(){super(...arguments),this.vehicleTypes=Object.values(xe)}createForm(){return this.fb.group({make:["",[p.required,p.maxLength(255)]],model:["",[p.required,p.maxLength(255)]],type:["",[p.required]],year:["",[p.required,p.min(1886),p.max(new Date().getFullYear())]],licensePlate:["",[p.required,p.maxLength(255)]],capacity:[null,p.min(1)],currentLocation:["",p.maxLength(255)]})}};a.\u0275fac=(()=>{let i;return function(n){return(i||(i=_(a)))(n||a)}})(),a.\u0275cmp=y({type:a,selectors:[["lib-vehicle-form"]],standalone:!0,features:[C,x],decls:17,vars:13,consts:[[1,"flex","flex-col","space-y-6",3,"ngSubmit","formGroup"],[1,"border","border-gray-200","p-4","rounded-md","space-y-4","bg-slate-50"],[1,"text-sm","font-medium","text-gray-700"],[1,"grid","grid-cols-2","gap-4"],["formControlName","make","type","text","placeholder","Enter vehicle make",3,"label"],["formControlName","model","type","text","placeholder","Enter vehicle model",3,"label"],["formControlName","type",3,"label","options"],["formControlName","year","type","number","placeholder","Enter year",3,"label"],["formControlName","licensePlate","type","text","placeholder","Enter license plate",3,"label"],["formControlName","capacity","type","number","placeholder","Enter capacity",3,"label"],["formControlName","currentLocation","type","text","placeholder","Enter current location",3,"label"],[3,"clear","delete","cancel","close","save","canClear","canDelete","canCancel","canSave"]],template:function(l,n){l&1&&(e(0,"form",0),b("ngSubmit",function(){return n.onSubmit()}),e(1,"fieldset",1)(2,"legend",2),r(3,"Vehicle Information"),t(),e(4,"div",3),f(5,"lib-basic-input",4)(6,"lib-basic-input",5)(7,"lib-drop-down",6)(8,"lib-basic-input",7)(9,"lib-basic-input",8),t()(),e(10,"fieldset",1)(11,"legend",2),r(12,"Additional Information"),t(),e(13,"div",3),f(14,"lib-basic-input",9)(15,"lib-basic-input",10),t()(),e(16,"lib-form-buttons",11),b("clear",function(){return n.onClear()})("delete",function(){return n.onDelete()})("cancel",function(){return n.onCancel()})("close",function(){return n.onClose()})("save",function(){return n.onSubmit()}),t()()),l&2&&(d("formGroup",n.entityForm),o(5),d("label","Make"),o(),d("label","Model"),o(),d("label","Type")("options",n.vehicleTypes),o(),d("label","Year"),o(),d("label","License Plate"),o(5),d("label","Capacity"),o(),d("label","Current Location"),o(),d("canClear",n.canClear())("canDelete",n.canDelete())("canCancel",n.canCancel())("canSave",n.canSave()))},dependencies:[h,T,P,A,B,q,G,R,U,$],encapsulation:2});let s=a;return s})();var Yi=(()=>{let a=class a extends z{constructor(){super(...arguments),this.onPlaceChange=i=>{this.entityForm.get("site")?.patchValue({address:i.formatted_address,latitude:i.geometry?.location?.lat(),longitude:i.geometry?.location?.lng()})}}createForm(){return this.fb.group({name:["",p.required],businessHours:[],website:"",notes:"",services:[],contact:this.fb.group({name:["",p.required],phone:["",p.required],email:["",p.email]}),site:this.fb.group({name:["",p.required],description:"",address:["",p.required],latitude:"",longitude:""})})}};a.\u0275fac=(()=>{let i;return function(n){return(i||(i=_(a)))(n||a)}})(),a.\u0275cmp=y({type:a,selectors:[["lib-client-form"]],standalone:!0,features:[C,x],decls:27,vars:16,consts:[[1,"flex","flex-col","space-y-6",3,"ngSubmit","formGroup"],[1,"border","border-gray-200","p-4","rounded-md","space-y-4","bg-slate-50"],[1,"text-sm","font-medium","text-gray-700"],[1,"grid","grid-cols-2","gap-4"],["formControlName","name","type","text","placeholder","Company Ltd",3,"label"],["formControlName","website","type","url","placeholder","https://example.com",3,"label"],["formControlName","businessHours","type","text","placeholder","9 AM - 5 PM",3,"label"],["formControlName","notes","placeholder","Notes",3,"label"],["formGroupName","contact",1,"border","border-gray-200","p-4","rounded-md","space-y-4","bg-slate-50"],["formControlName","name","type","text","placeholder","Contact Name",3,"label"],["formControlName","email","type","email","placeholder","email@example.com",3,"label"],["formControlName","phone","type","phone","placeholder","0123456789",3,"label"],["formGroupName","site",1,"border","border-gray-200","p-4","rounded-md","space-y-4","bg-slate-50"],["formControlName","name","type","text","placeholder","Site Name",1,"col-span-full",3,"label"],["formControlName","description","type","text","placeholder","Description",3,"label"],["formControlName","address","type","address","placeholder","Search for site address","label","Search address",3,"placeChange"],["formControlName","latitude","type","point","placeholder","Latitude",3,"label"],["formControlName","longitude","type","point","placeholder","Longitude",3,"label"],[3,"clear","delete","cancel","close","save","canClear","canDelete","canCancel","canSave"]],template:function(l,n){l&1&&(e(0,"form",0),b("ngSubmit",function(){return n.onSubmit()}),e(1,"fieldset",1)(2,"legend",2),r(3,"Client Information"),t(),e(4,"div",3),f(5,"lib-basic-input",4)(6,"lib-basic-input",5)(7,"lib-basic-input",6),t(),f(8,"lib-basic-text-area",7),t(),e(9,"fieldset",8)(10,"legend",2),r(11,"Contact Information"),t(),e(12,"div",3),f(13,"lib-basic-input",9)(14,"lib-basic-input",10)(15,"lib-basic-input",11),t()(),e(16,"fieldset",12)(17,"legend",2),r(18,"Site Information"),t(),e(19,"div",3),f(20,"lib-basic-input",13)(21,"lib-basic-input",14),e(22,"lib-search-box",15),b("placeChange",function(Ne){return n.onPlaceChange(Ne)}),t()(),e(23,"div",3),f(24,"lib-basic-input",16)(25,"lib-basic-input",17),t()(),e(26,"lib-form-buttons",18),b("clear",function(){return n.onClear()})("delete",function(){return n.onDelete()})("cancel",function(){return n.onCancel()})("close",function(){return n.onClose()})("save",function(){return n.onSubmit()}),t()()),l&2&&(d("formGroup",n.entityForm),o(5),d("label","Company Name"),o(),d("label","Website"),o(),d("label","Business Hours"),o(),d("label","Busineess Notes"),o(5),d("label","Contact Name"),o(),d("label","Email"),o(),d("label","Phone number"),o(5),d("label","Site Name"),o(),d("label","Description"),o(3),d("label","Latitude"),o(),d("label","Longitude"),o(),d("canClear",n.canClear())("canDelete",n.canDelete())("canCancel",n.canCancel())("canSave",n.canSave()))},dependencies:[h,T,P,A,B,q,G,te,Ce,R,U,Ee]});let s=a;return s})();export{Ue as a,lt as b,bt as c,gt as d,Lt as e,qt as f,di as g,Ci as h,Li as i,qi as j,Yi as k};
