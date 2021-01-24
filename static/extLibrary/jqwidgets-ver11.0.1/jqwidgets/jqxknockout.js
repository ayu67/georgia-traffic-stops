/*
jQWidgets v11.0.1 (2020-Dec)
Copyright (c) 2011-2020 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

try{(function(k,c){c.jqwidgets=c.jqwidgets||{};c.jqwidgets.knockout=function(J){var K=this;var L={},I=J.name;L.init=function(Q,R,N,P){var M=c.utils.unwrapObservable(R());var T=c.toJS(M);if(J.reset){J.reset()}if(k.data(Q)[I]==undefined){var O=[];k(Q)[I]();widget=k.data(Q)[I].instance;k.each(J,function(V,W){if(widget.hasOwnProperty(V)&&T.hasOwnProperty(V)){if(!widget.koupdating){widget.koupdatingFromObservable=true;try{var X=false;if(J.serialize){if(J.serialize(widget,V)){if(c.toJSON(T[V])!=c.toJSON(J.serialize(widget,V))){J.setProperty(widget,V,widget[V],T[V])}X=true}}if(!X){if(c.toJSON(T[V])!=c.toJSON(widget[V])){J.setProperty(widget,V,widget[V],T[V])}}}catch(U){J.setProperty(widget,V,widget[V],T[V])}O[V]=V;widget.koupdatingFromObservable=false}}});var S={};k.each(T,function(U,V){if(O[U]==undefined){S[U]=T[U]}});widget.host[I](S)}widget=k.data(Q)[I].instance;widget.koupdatingFromObservable=false;widget.koupdating=false;if(J.events){k.each(J.events,function(){var U=this;k(Q).on(U+"."+Q.id,function(W){widget=k.data(Q)[I].instance;if(!widget.koupdatingFromObservable){var V=widget;V.koupdating=true;var Y=R();var X=J.getProperty(widget,W,U,M);if(X!=undefined){if(Y.hasOwnProperty(X.name)&&k.isFunction(Y[X.name])){if(c.isObservable(Y[X.name])&&Y[X.name].push){R(X.value)}else{Y[X.name](X.value)}}else{if(Y[X.name]){R(X.value)}}}V.koupdating=false}})})}};L.update=function(Q,R,O,P,N){var M=c.utils.unwrapObservable(R());var S=c.toJS(M);widget=k.data(Q)[I].instance;if(widget.koupdating){return}k.each(J,function(T,U){if(widget.hasOwnProperty(T)&&S.hasOwnProperty(T)){if(!widget.koupdating){widget.koupdatingFromObservable=true;var V=false;if(J.serialize){if(J.serialize(widget,T)){if(c.toJSON(S[T])!=c.toJSON(J.serialize(widget,T))){J.setProperty(widget,T,widget[T],S[T])}V=true}}if(!V){if(c.toJSON(S[T])!=c.toJSON(widget[T])){J.setProperty(widget,T,widget[T],S[T])}}widget.koupdatingFromObservable=false}}})};c.bindingHandlers[J.name]=L};var D=new c.jqwidgets.knockout({name:"jqxGauge",disabled:false,min:0,max:220,value:0,reset:function(){this.value=0;this.max=220;this.min=0;this.disabled=false},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxGauge({disabled:L})}if(J=="min"){I.host.jqxGauge({min:L})}if(J=="max"){I.host.jqxGauge({max:L})}if(J=="value"){I.host.jqxGauge({value:L})}}});var f=new c.jqwidgets.knockout({name:"jqxLinearGauge",disabled:false,min:0,max:220,value:0,reset:function(){this.value=0;this.max=220;this.min=0;this.disabled=false},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxLinearGauge({disabled:L})}if(J=="min"){I.host.jqxLinearGauge({min:L})}if(J=="max"){I.host.jqxLinearGauge({max:L})}if(J=="value"){I.host.jqxLinearGauge({value:L})}}});var A=new c.jqwidgets.knockout({name:"jqxSlider",disabled:false,min:0,max:10,value:0,reset:function(){this.value=0;this.max=10;this.min=0;this.disabled=false},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"value",value:K.args.value}}},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxSlider({disabled:L})}if(J=="min"){I.host.jqxSlider({min:parseFloat(L)})}if(J=="max"){I.host.jqxSlider({max:parseFloat(L)})}if(J=="value"){I.host.jqxSlider({value:parseFloat(L)})}}});var s=new c.jqwidgets.knockout({name:"jqxScrollBar",disabled:false,min:0,max:10,value:0,reset:function(){this.value=0;this.max=10;this.min=0;this.disabled=false},events:["valueChanged"],getProperty:function(J,K,I){if(I=="valueChanged"){return{name:"value",value:parseInt(K.currentValue)}}},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxScrollBar({disabled:L})}if(J=="min"){I.host.jqxScrollBar({min:parseFloat(L)})}if(J=="max"){I.host.jqxScrollBar({max:parseFloat(L)})}if(J=="value"){I.host.jqxScrollBar({value:parseFloat(L)})}}});var a=new c.jqwidgets.knockout({name:"jqxProgressBar",disabled:false,value:0,reset:function(){this.value=0;this.disabled=false},events:["valueChanged"],getProperty:function(J,K,I){if(I=="valueChanged"){return{name:"value",value:parseInt(K.currentValue)}}},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxProgressBar({disabled:L})}if(J=="value"){I.host.jqxProgressBar({value:parseFloat(L)})}}});var g=new c.jqwidgets.knockout({name:"jqxButton",disabled:false,reset:function(){this.disabled=false},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxButton({disabled:L})}}});var j=new c.jqwidgets.knockout({name:"jqxCheckBox",checked:false,disabled:false,reset:function(){this.checked=false;this.disabled=false},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"checked",value:K.args.checked}}},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxCheckBox({disabled:L})}if(J=="checked"){if(K!=L){I.host.jqxCheckBox({checked:L})}}}});var E=new c.jqwidgets.knockout({name:"jqxRadioButton",checked:false,disabled:false,reset:function(){this.checked=false;this.disabled=false},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"checked",value:K.args.checked}}},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxRadioButton({disabled:L})}if(J=="checked"){if(K!=L){I.host.jqxRadioButton({checked:L})}}}});var r=new c.jqwidgets.knockout({name:"jqxDateTimeInput",value:null,disabled:false,reset:function(){this.value=null;this.disabled=false},events:["valueChanged"],getProperty:function(J,K,I){if(I=="valueChanged"){return{name:"value",value:K.args.date}}},setProperty:function(I,J,K,L){if(J=="value"){I.setDate(L)}if(J=="disabled"){I.host.jqxDateTimeInput({disabled:L})}}});var G=new c.jqwidgets.knockout({name:"jqxCalendar",value:null,disabled:false,reset:function(){this.value=null;this.disabled=false},events:["valueChanged"],getProperty:function(J,K,I){if(I=="valueChanged"){return{name:"value",value:K.args.date}}},setProperty:function(I,J,K,L){if(J=="value"){I.setDate(L)}if(J=="disabled"){I.host.jqxCalendar({disabled:L})}}});var u=new c.jqwidgets.knockout({name:"jqxNumberInput",value:null,events:["valueChanged"],disabled:false,reset:function(){this.value=null;this.disabled=false},getProperty:function(J,K,I){if(I=="valueChanged"){return{name:"value",value:J.val()}}},setProperty:function(I,J,K,L){if(J=="value"){I.host.jqxNumberInput("val",L)}if(J=="disabled"){I.host.jqxNumberInput({disabled:L})}}});var m=new c.jqwidgets.knockout({name:"jqxMaskedInput",value:null,events:["valueChanged"],disabled:false,reset:function(){this.value=null;this.disabled=false},getProperty:function(J,K,I){if(I=="valueChanged"){return{name:"value",value:J.val()}}},setProperty:function(I,J,K,L){if(J=="value"){I.host.jqxMaskedInput("val",L)}if(J=="disabled"){I.host.jqxMaskedInput({disabled:L})}}});var d=new c.jqwidgets.knockout({name:"jqxListBox",source:null,disabled:false,selectedIndex:-1,reset:function(){this.disabled=false;this.selectedIndex=-1;this.source=null},events:["change"],getProperty:function(J,K,I){if(I=="change"){this.selectedIndex=J.selectedIndex;return{name:"selectedIndex",value:J.selectedIndex}}},setProperty:function(I,J,L,M){if(J=="source"){I.source=M;I.refresh()}if(J=="disabled"){I.disabled=M;I._renderItems()}if(J=="selectedIndex"){var K=I.disabled;I.disabled=false;I.selectIndex(M);I.disabled=K;if(K){I._renderItems()}}}});var w=new c.jqwidgets.knockout({name:"jqxDropDownList",source:null,disabled:false,selectedIndex:-1,reset:function(){this.disabled=false;this.selectedIndex=-1;this.source=null},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"selectedIndex",value:J.selectedIndex}}},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxDropDownList({source:L})}if(J=="disabled"){I.host.jqxDropDownList({disabled:L})}if(J=="selectedIndex"){I.host.jqxDropDownList({selectedIndex:L})}}});var l=new c.jqwidgets.knockout({name:"jqxComboBox",source:null,disabled:false,selectedIndex:-1,reset:function(){this.disabled=false;this.selectedIndex=-1;this.source=null},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"selectedIndex",value:J.selectedIndex}}},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxComboBox({source:L})}if(J=="disabled"){I.host.jqxComboBox({disabled:L})}if(J=="selectedIndex"){I.host.jqxComboBox({selectedIndex:L})}}});var y=new c.jqwidgets.knockout({name:"jqxInput",source:null,disabled:false,value:"",reset:function(){this.disabled=false;this.source=null},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"value",value:J.host.val()}}},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxInput({source:L})}if(J=="disabled"){I.host.jqxInput({disabled:L})}if(J=="value"){I.host.jqxInput({value:L})}}});var v=new c.jqwidgets.knockout({name:"jqxComplexInput",source:null,disabled:false,value:"",reset:function(){this.disabled=false;this.source=null},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"value",value:J.host.val()}}},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxComplexInput({source:L})}if(J=="disabled"){I.host.jqxComplexInput({disabled:L})}if(J=="value"){I.host.jqxComplexInput({value:L})}}});var e=new c.jqwidgets.knockout({name:"jqxFormattedInput",source:null,disabled:false,value:"",reset:function(){this.disabled=false;this.source=null},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"value",value:J.host.val()}}},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxFormattedInput({source:L})}if(J=="disabled"){I.host.jqxFormattedInput({disabled:L})}if(J=="value"){I.host.jqxFormattedInput({value:L})}}});var H=new c.jqwidgets.knockout({name:"jqxPasswordInput",source:null,disabled:false,value:"",reset:function(){this.disabled=false;this.source=null},events:["change"],getProperty:function(J,K,I){if(I=="change"){return{name:"value",value:J.host.val()}}},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxPasswordInput({source:L})}if(J=="disabled"){I.host.jqxPasswordInput({disabled:L})}if(J=="value"){I.host.jqxPasswordInput({value:L})}}});var F=new c.jqwidgets.knockout({name:"jqxTree",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxTree({source:L})}if(J=="disabled"){I.host.jqxTree({disabled:L})}}});var h=new c.jqwidgets.knockout({name:"jqxTabs",disabled:false,reset:function(){this.disabled=false},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxTabs({disabled:L})}}});var t=new c.jqwidgets.knockout({name:"jqxWindow",disabled:false,content:"",title:"",reset:function(){this.disabled=false;this.title="";this.content=""},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="disabled"){I.host.jqxWindow({disabled:L})}else{if(J=="content"){I.host.jqxWindow("setContent",L)}else{if(J=="title"){I.host.jqxWindow({title:L})}}}}});var x=new c.jqwidgets.knockout({name:"jqxNavigationBar",disabled:false,reset:function(){this.disabled=false},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="disabled"){if(L!=this.disabled){this.disabled=L;I.host.jqxNavigationBar({disabled:L})}}}});var q=new c.jqwidgets.knockout({name:"jqxMenu",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="source"){I.host.jqxMenu({source:L})}if(J=="disabled"){I.host.jqxMenu({disabled:L})}}});var z=new c.jqwidgets.knockout({name:"jqxChart",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="source"){this.source=L;I.host.jqxChart({source:L})}if(J=="disabled"){this.disabled=L;I.host.jqxChart({disabled:L})}}});var b=new c.jqwidgets.knockout({name:"jqxDataTable",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="source"){this.source=L;I.host.jqxDataTable({source:L})}if(J=="disabled"){this.disabled=L;I.host.jqxDataTable({disabled:L})}}});var p=new c.jqwidgets.knockout({name:"jqxTreeGrid",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="source"){this.source=L;I.host.jqxTreeGrid({source:L})}if(J=="disabled"){this.disabled=L;I.host.jqxTreeGrid({disabled:L})}}});var C=new c.jqwidgets.knockout({name:"jqxKnob",value:0,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="value"){this.value=L;I.host.jqxKnob({value:L})}if(J=="disabled"){this.disabled=L;I.host.jqxKnob({disabled:L})}}});var B=new c.jqwidgets.knockout({name:"jqxScheduler",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="source"){this.source=L;I.host.jqxScheduler({source:L})}if(J=="disabled"){this.disabled=L;I.host.jqxScheduler({disabled:L})}}});var o=new c.jqwidgets.knockout({name:"jqxKanban",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="source"){this.source=L;I.host.jqxKanban({source:L})}if(J=="disabled"){this.disabled=L;I.host.jqxKanban({disabled:L})}}});var n=new c.jqwidgets.knockout({name:"jqxGrid",source:null,disabled:false,selectedRowIndex:-1,reset:function(){this.disabled=false;this.source=null;this.selectedRowIndex=-1},serialize:function(J,I){if(I=="source"){if(J.source&&J.source._source){return J.source.records}}return false},events:["cellvaluechanged","cellselect","rowselect"],getProperty:function(M,K,O,N){if(O=="cellvaluechanged"){var L=M.host.jqxGrid("getrowid",K.args.rowindex);var S=M.host.jqxGrid("getrowdata",L);var J=N.source;if(J!=undefined){var R={};var I={};var Q=false;var P=false;if(J()[L]){k.each(J()[L],function(T,U){R[T]=U;I[T]="";if(c.isObservable(U)&&!c.isComputed(U)){Q=true;U(S[T])}if(c.isObservable(U)&&c.isComputed(U)){P=true}})}if(!Q){R=S;if(J.replace){J.replace(J()[L],I);J.replace(J()[L],R)}}else{R=S;if(J.replace){J.replace(J()[L],R)}}if(P){M.host.jqxGrid("updaterow",L,c.toJS(J)[L])}return{name:"source",value:J}}}},setProperty:function(L,S,R,J){if(S=="selectedRowIndex"){L.host.jqxGrid("selectrow",J)}if(S=="source"){if(this.source==null||J==null){if(this.source!=J){this.source=J;var I={localdata:J,datatype:"local"};var Q=new k.jqx.dataAdapter(I);L.host.jqxGrid({source:Q})}}else{var I={localdata:J,datatype:"local"};var Q=new k.jqx.dataAdapter(I);Q.dataBind();if(!R.records||!Q.records){return}var U=Math.max(R.records.length,Q.records.length);var P=Math.abs(R.records.length-Q.records.length);if(P==0){if(U>10){L.host.jqxGrid({source:Q});return}}if(P>1){L.host.jqxGrid("beginupdate")}var T=new Array();for(var N=0;N<U;N++){var O=Q.records[N];if(O==undefined){var K=L.host.jqxGrid("getrowid",N);T.push(K)}else{var M=R.records[N]!=undefined;if(M){if(c.toJSON(O)!=c.toJSON(R.records[N])){if(R.records[N].uid!=undefined){O.uid=R.records[N].uid;if(c.toJSON(O)==c.toJSON(R.records[N])){continue}}var K=L.host.jqxGrid("getrowid",N);L.host.jqxGrid("updaterow",K,O)}}else{L.host.jqxGrid("addrow",null,O)}}}if(T.length>0){L.host.jqxGrid("deleterow",T)}if(P>1){L.host.jqxGrid("endupdate")}}}if(S=="disabled"){L.host.jqxGrid({disabled:J})}}});var i=new c.jqwidgets.knockout({name:"jqxBulletChart",pointer:{value:0},target:{value:0},disabled:false,reset:function(){this.pointer.value=0;this.target.value=0;this.disabled=false},getProperty:function(J,K,I){},setProperty:function(I,J,K,L){if(J=="pointer"){I.host.jqxBulletChart({pointer:L})}if(J=="target"){I.host.jqxBulletChart({target:L})}if(J=="disabled"){I.host.jqxBulletChart({disabled:L})}}})}(jqxBaseFramework,ko))}catch(error){var er=error};

