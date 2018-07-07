// Compiled by ClojureScript 1.10.238 {}
goog.provide('canastcljs.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
canastcljs.drop_file_stream.exists_file_named = (function canastcljs$drop_file_stream$exists_file_named(f_name,w,ziel){
var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__){
return (function (state_37660){
var state_val_37661 = (state_37660[(1)]);
if((state_val_37661 === (1))){
var inst_37643 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_37644 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_37645 = ["Authorization"];
var inst_37646 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_37647 = cljs.core.PersistentHashMap.fromArrays(inst_37645,inst_37646);
var inst_37648 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_37649 = [inst_37643];
var inst_37650 = cljs.core.PersistentHashMap.fromArrays(inst_37648,inst_37649);
var inst_37651 = [false,inst_37647,inst_37650];
var inst_37652 = cljs.core.PersistentHashMap.fromArrays(inst_37644,inst_37651);
var inst_37653 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/get_metadata",inst_37652);
var state_37660__$1 = state_37660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37660__$1,(2),inst_37653);
} else {
if((state_val_37661 === (2))){
var inst_37655 = (state_37660[(2)]);
var inst_37656 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_37655);
var inst_37657 = cljs.core._EQ_.call(null,inst_37656,(200));
var inst_37658 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_37657);
var state_37660__$1 = state_37660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37660__$1,inst_37658);
} else {
return null;
}
}
});})(c__26663__auto__))
;
return ((function (switch__26573__auto__,c__26663__auto__){
return (function() {
var canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto__ = null;
var canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto____0 = (function (){
var statearr_37662 = [null,null,null,null,null,null,null];
(statearr_37662[(0)] = canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto__);

(statearr_37662[(1)] = (1));

return statearr_37662;
});
var canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto____1 = (function (state_37660){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_37660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e37663){if((e37663 instanceof Object)){
var ex__26577__auto__ = e37663;
var statearr_37664_37666 = state_37660;
(statearr_37664_37666[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37667 = state_37660;
state_37660 = G__37667;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto__ = function(state_37660){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto____1.call(this,state_37660);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto____0;
canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto____1;
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_37665 = f__26664__auto__.call(null);
(statearr_37665[(6)] = c__26663__auto__);

return statearr_37665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__))
);

return c__26663__auto__;
});
canastcljs.drop_file_stream.delete_file_named = (function canastcljs$drop_file_stream$delete_file_named(f_name,w,ziel){
var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__){
return (function (state_37683){
var state_val_37684 = (state_37683[(1)]);
if((state_val_37684 === (1))){
var inst_37668 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_37669 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_37670 = ["Authorization"];
var inst_37671 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_37672 = cljs.core.PersistentHashMap.fromArrays(inst_37670,inst_37671);
var inst_37673 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_37674 = [inst_37668];
var inst_37675 = cljs.core.PersistentHashMap.fromArrays(inst_37673,inst_37674);
var inst_37676 = [false,inst_37672,inst_37675];
var inst_37677 = cljs.core.PersistentHashMap.fromArrays(inst_37669,inst_37676);
var inst_37678 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete_v2",inst_37677);
var state_37683__$1 = state_37683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37683__$1,(2),inst_37678);
} else {
if((state_val_37684 === (2))){
var inst_37680 = (state_37683[(2)]);
var inst_37681 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,false);
var state_37683__$1 = (function (){var statearr_37685 = state_37683;
(statearr_37685[(7)] = inst_37680);

return statearr_37685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37683__$1,inst_37681);
} else {
return null;
}
}
});})(c__26663__auto__))
;
return ((function (switch__26573__auto__,c__26663__auto__){
return (function() {
var canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto__ = null;
var canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto____0 = (function (){
var statearr_37686 = [null,null,null,null,null,null,null,null];
(statearr_37686[(0)] = canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto__);

(statearr_37686[(1)] = (1));

return statearr_37686;
});
var canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto____1 = (function (state_37683){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_37683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e37687){if((e37687 instanceof Object)){
var ex__26577__auto__ = e37687;
var statearr_37688_37690 = state_37683;
(statearr_37688_37690[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37691 = state_37683;
state_37683 = G__37691;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto__ = function(state_37683){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto____1.call(this,state_37683);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto____0;
canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto____1;
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_37689 = f__26664__auto__.call(null);
(statearr_37689[(6)] = c__26663__auto__);

return statearr_37689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__))
);

return c__26663__auto__;
});
canastcljs.drop_file_stream.get_contents_of = (function canastcljs$drop_file_stream$get_contents_of(f_name,w,ziel){
var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__){
return (function (state_37705){
var state_val_37706 = (state_37705[(1)]);
if((state_val_37706 === (1))){
var inst_37692 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_37693 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_37694 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_37695 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_37692,"text/plain; charset=utf-8"];
var inst_37696 = cljs.core.PersistentHashMap.fromArrays(inst_37694,inst_37695);
var inst_37697 = [false,inst_37696];
var inst_37698 = cljs.core.PersistentHashMap.fromArrays(inst_37693,inst_37697);
var inst_37699 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_37698);
var state_37705__$1 = state_37705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37705__$1,(2),inst_37699);
} else {
if((state_val_37706 === (2))){
var inst_37701 = (state_37705[(2)]);
var inst_37702 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37701);
var inst_37703 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_37702);
var state_37705__$1 = state_37705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37705__$1,inst_37703);
} else {
return null;
}
}
});})(c__26663__auto__))
;
return ((function (switch__26573__auto__,c__26663__auto__){
return (function() {
var canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto__ = null;
var canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto____0 = (function (){
var statearr_37707 = [null,null,null,null,null,null,null];
(statearr_37707[(0)] = canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto__);

(statearr_37707[(1)] = (1));

return statearr_37707;
});
var canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto____1 = (function (state_37705){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_37705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e37708){if((e37708 instanceof Object)){
var ex__26577__auto__ = e37708;
var statearr_37709_37711 = state_37705;
(statearr_37709_37711[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37712 = state_37705;
state_37705 = G__37712;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto__ = function(state_37705){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto____1.call(this,state_37705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto____0;
canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto____1;
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_37710 = f__26664__auto__.call(null);
(statearr_37710[(6)] = c__26663__auto__);

return statearr_37710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__))
);

return c__26663__auto__;
});
canastcljs.drop_file_stream.lies_historie = (function canastcljs$drop_file_stream$lies_historie(f_name,w,ziel){
var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__){
return (function (state_37727){
var state_val_37728 = (state_37727[(1)]);
if((state_val_37728 === (1))){
var inst_37713 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_37714 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_37715 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_37716 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_37713,"text/plain; charset=utf-8"];
var inst_37717 = cljs.core.PersistentHashMap.fromArrays(inst_37715,inst_37716);
var inst_37718 = [false,inst_37717];
var inst_37719 = cljs.core.PersistentHashMap.fromArrays(inst_37714,inst_37718);
var inst_37720 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_37719);
var state_37727__$1 = state_37727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37727__$1,(2),inst_37720);
} else {
if((state_val_37728 === (2))){
var inst_37722 = (state_37727[(2)]);
var inst_37723 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37722);
var inst_37724 = cljs.reader.read_string.call(null,inst_37723);
var inst_37725 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_37724);
var state_37727__$1 = state_37727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37727__$1,inst_37725);
} else {
return null;
}
}
});})(c__26663__auto__))
;
return ((function (switch__26573__auto__,c__26663__auto__){
return (function() {
var canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto__ = null;
var canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto____0 = (function (){
var statearr_37729 = [null,null,null,null,null,null,null];
(statearr_37729[(0)] = canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto__);

(statearr_37729[(1)] = (1));

return statearr_37729;
});
var canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto____1 = (function (state_37727){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_37727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e37730){if((e37730 instanceof Object)){
var ex__26577__auto__ = e37730;
var statearr_37731_37733 = state_37727;
(statearr_37731_37733[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37734 = state_37727;
state_37727 = G__37734;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto__ = function(state_37727){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto____1.call(this,state_37727);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto____0;
canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto____1;
return canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_37732 = f__26664__auto__.call(null);
(statearr_37732[(6)] = c__26663__auto__);

return statearr_37732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__))
);

return c__26663__auto__;
});
canastcljs.drop_file_stream.lies_welt = (function canastcljs$drop_file_stream$lies_welt(f_name,w){
var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__){
return (function (state_37749){
var state_val_37750 = (state_37749[(1)]);
if((state_val_37750 === (1))){
var inst_37735 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_37736 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_37737 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_37738 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_37735,"text/plain; charset=utf-8"];
var inst_37739 = cljs.core.PersistentHashMap.fromArrays(inst_37737,inst_37738);
var inst_37740 = [false,inst_37739];
var inst_37741 = cljs.core.PersistentHashMap.fromArrays(inst_37736,inst_37740);
var inst_37742 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_37741);
var state_37749__$1 = state_37749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37749__$1,(2),inst_37742);
} else {
if((state_val_37750 === (2))){
var inst_37744 = (state_37749[(2)]);
var inst_37745 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37744);
var inst_37746 = cljs.reader.read_string.call(null,inst_37745);
var inst_37747 = cljs.core.reset_BANG_.call(null,w,inst_37746);
var state_37749__$1 = state_37749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37749__$1,inst_37747);
} else {
return null;
}
}
});})(c__26663__auto__))
;
return ((function (switch__26573__auto__,c__26663__auto__){
return (function() {
var canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto__ = null;
var canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto____0 = (function (){
var statearr_37751 = [null,null,null,null,null,null,null];
(statearr_37751[(0)] = canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto__);

(statearr_37751[(1)] = (1));

return statearr_37751;
});
var canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto____1 = (function (state_37749){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_37749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e37752){if((e37752 instanceof Object)){
var ex__26577__auto__ = e37752;
var statearr_37753_37755 = state_37749;
(statearr_37753_37755[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37756 = state_37749;
state_37749 = G__37756;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto__ = function(state_37749){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto____1.call(this,state_37749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto____0;
canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto____1;
return canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_37754 = f__26664__auto__.call(null);
(statearr_37754[(6)] = c__26663__auto__);

return statearr_37754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__))
);

return c__26663__auto__;
});
canastcljs.drop_file_stream.write_text = (function canastcljs$drop_file_stream$write_text(text,f_name){
var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__){
return (function (state_37768){
var state_val_37769 = (state_37768[(1)]);
if((state_val_37769 === (1))){
var inst_37757 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_37758 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_37759 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_37760 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_37757,"application/octet-stream"];
var inst_37761 = cljs.core.PersistentHashMap.fromArrays(inst_37759,inst_37760);
var inst_37762 = [false,inst_37761,text];
var inst_37763 = cljs.core.PersistentHashMap.fromArrays(inst_37758,inst_37762);
var inst_37764 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_37763);
var state_37768__$1 = state_37768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37768__$1,(2),inst_37764);
} else {
if((state_val_37769 === (2))){
var inst_37766 = (state_37768[(2)]);
var state_37768__$1 = state_37768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37768__$1,inst_37766);
} else {
return null;
}
}
});})(c__26663__auto__))
;
return ((function (switch__26573__auto__,c__26663__auto__){
return (function() {
var canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto__ = null;
var canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto____0 = (function (){
var statearr_37770 = [null,null,null,null,null,null,null];
(statearr_37770[(0)] = canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto__);

(statearr_37770[(1)] = (1));

return statearr_37770;
});
var canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto____1 = (function (state_37768){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_37768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e37771){if((e37771 instanceof Object)){
var ex__26577__auto__ = e37771;
var statearr_37772_37774 = state_37768;
(statearr_37772_37774[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37775 = state_37768;
state_37768 = G__37775;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto__ = function(state_37768){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto____1.call(this,state_37768);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto____0;
canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto____1;
return canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_37773 = f__26664__auto__.call(null);
(statearr_37773[(6)] = c__26663__auto__);

return statearr_37773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__))
);

return c__26663__auto__;
});
canastcljs.drop_file_stream.log_neues_spiel = (function canastcljs$drop_file_stream$log_neues_spiel(f_name,w,ziel){
var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__){
return (function (state_37794){
var state_val_37795 = (state_37794[(1)]);
if((state_val_37795 === (1))){
var inst_37776 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_37777 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_37778 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_37779 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_37776,"text/plain; charset=utf-8"];
var inst_37780 = cljs.core.PersistentHashMap.fromArrays(inst_37778,inst_37779);
var inst_37781 = [false,inst_37780];
var inst_37782 = cljs.core.PersistentHashMap.fromArrays(inst_37777,inst_37781);
var inst_37783 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_37782);
var state_37794__$1 = state_37794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37794__$1,(2),inst_37783);
} else {
if((state_val_37795 === (2))){
var inst_37785 = (state_37794[(2)]);
var inst_37786 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37785);
var inst_37787 = (new Date());
var inst_37788 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37786),"Neues Spiel ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37787),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
var inst_37789 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_37788);
var inst_37790 = cljs.core.deref.call(null,w);
var inst_37791 = ziel.call(null,inst_37790);
var inst_37792 = canastcljs.drop_file_stream.write_text.call(null,inst_37791,"logs.txt");
var state_37794__$1 = (function (){var statearr_37796 = state_37794;
(statearr_37796[(7)] = inst_37789);

return statearr_37796;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37794__$1,inst_37792);
} else {
return null;
}
}
});})(c__26663__auto__))
;
return ((function (switch__26573__auto__,c__26663__auto__){
return (function() {
var canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto__ = null;
var canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto____0 = (function (){
var statearr_37797 = [null,null,null,null,null,null,null,null];
(statearr_37797[(0)] = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto__);

(statearr_37797[(1)] = (1));

return statearr_37797;
});
var canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto____1 = (function (state_37794){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_37794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e37798){if((e37798 instanceof Object)){
var ex__26577__auto__ = e37798;
var statearr_37799_37801 = state_37794;
(statearr_37799_37801[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37802 = state_37794;
state_37794 = G__37802;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto__ = function(state_37794){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto____1.call(this,state_37794);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto____0;
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto____1;
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_37800 = f__26664__auto__.call(null);
(statearr_37800[(6)] = c__26663__auto__);

return statearr_37800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__))
);

return c__26663__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map?rel=1530979868589
