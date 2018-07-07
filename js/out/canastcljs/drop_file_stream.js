// Compiled by ClojureScript 1.10.238 {}
goog.provide('canastcljs.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
canastcljs.drop_file_stream.exists_file_named = (function canastcljs$drop_file_stream$exists_file_named(f_name,w,ziel){
var c__28926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28926__auto__){
return (function (){
var f__28927__auto__ = (function (){var switch__28903__auto__ = ((function (c__28926__auto__){
return (function (state_29975){
var state_val_29976 = (state_29975[(1)]);
if((state_val_29976 === (1))){
var inst_29958 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_29959 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_29960 = ["Authorization"];
var inst_29961 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_29962 = cljs.core.PersistentHashMap.fromArrays(inst_29960,inst_29961);
var inst_29963 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_29964 = [inst_29958];
var inst_29965 = cljs.core.PersistentHashMap.fromArrays(inst_29963,inst_29964);
var inst_29966 = [false,inst_29962,inst_29965];
var inst_29967 = cljs.core.PersistentHashMap.fromArrays(inst_29959,inst_29966);
var inst_29968 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/get_metadata",inst_29967);
var state_29975__$1 = state_29975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29975__$1,(2),inst_29968);
} else {
if((state_val_29976 === (2))){
var inst_29970 = (state_29975[(2)]);
var inst_29971 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_29970);
var inst_29972 = cljs.core._EQ_.call(null,inst_29971,(200));
var inst_29973 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_29972);
var state_29975__$1 = state_29975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29975__$1,inst_29973);
} else {
return null;
}
}
});})(c__28926__auto__))
;
return ((function (switch__28903__auto__,c__28926__auto__){
return (function() {
var canastcljs$drop_file_stream$exists_file_named_$_state_machine__28904__auto__ = null;
var canastcljs$drop_file_stream$exists_file_named_$_state_machine__28904__auto____0 = (function (){
var statearr_29977 = [null,null,null,null,null,null,null];
(statearr_29977[(0)] = canastcljs$drop_file_stream$exists_file_named_$_state_machine__28904__auto__);

(statearr_29977[(1)] = (1));

return statearr_29977;
});
var canastcljs$drop_file_stream$exists_file_named_$_state_machine__28904__auto____1 = (function (state_29975){
while(true){
var ret_value__28905__auto__ = (function (){try{while(true){
var result__28906__auto__ = switch__28903__auto__.call(null,state_29975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28906__auto__;
}
break;
}
}catch (e29978){if((e29978 instanceof Object)){
var ex__28907__auto__ = e29978;
var statearr_29979_29981 = state_29975;
(statearr_29979_29981[(5)] = ex__28907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29982 = state_29975;
state_29975 = G__29982;
continue;
} else {
return ret_value__28905__auto__;
}
break;
}
});
canastcljs$drop_file_stream$exists_file_named_$_state_machine__28904__auto__ = function(state_29975){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__28904__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__28904__auto____1.call(this,state_29975);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$exists_file_named_$_state_machine__28904__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$exists_file_named_$_state_machine__28904__auto____0;
canastcljs$drop_file_stream$exists_file_named_$_state_machine__28904__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$exists_file_named_$_state_machine__28904__auto____1;
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__28904__auto__;
})()
;})(switch__28903__auto__,c__28926__auto__))
})();
var state__28928__auto__ = (function (){var statearr_29980 = f__28927__auto__.call(null);
(statearr_29980[(6)] = c__28926__auto__);

return statearr_29980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28928__auto__);
});})(c__28926__auto__))
);

return c__28926__auto__;
});
canastcljs.drop_file_stream.delete_file_named = (function canastcljs$drop_file_stream$delete_file_named(f_name,w,ziel){
var c__28926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28926__auto__){
return (function (){
var f__28927__auto__ = (function (){var switch__28903__auto__ = ((function (c__28926__auto__){
return (function (state_29998){
var state_val_29999 = (state_29998[(1)]);
if((state_val_29999 === (1))){
var inst_29983 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_29984 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_29985 = ["Authorization"];
var inst_29986 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_29987 = cljs.core.PersistentHashMap.fromArrays(inst_29985,inst_29986);
var inst_29988 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_29989 = [inst_29983];
var inst_29990 = cljs.core.PersistentHashMap.fromArrays(inst_29988,inst_29989);
var inst_29991 = [false,inst_29987,inst_29990];
var inst_29992 = cljs.core.PersistentHashMap.fromArrays(inst_29984,inst_29991);
var inst_29993 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete_v2",inst_29992);
var state_29998__$1 = state_29998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29998__$1,(2),inst_29993);
} else {
if((state_val_29999 === (2))){
var inst_29995 = (state_29998[(2)]);
var inst_29996 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,false);
var state_29998__$1 = (function (){var statearr_30000 = state_29998;
(statearr_30000[(7)] = inst_29995);

return statearr_30000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29998__$1,inst_29996);
} else {
return null;
}
}
});})(c__28926__auto__))
;
return ((function (switch__28903__auto__,c__28926__auto__){
return (function() {
var canastcljs$drop_file_stream$delete_file_named_$_state_machine__28904__auto__ = null;
var canastcljs$drop_file_stream$delete_file_named_$_state_machine__28904__auto____0 = (function (){
var statearr_30001 = [null,null,null,null,null,null,null,null];
(statearr_30001[(0)] = canastcljs$drop_file_stream$delete_file_named_$_state_machine__28904__auto__);

(statearr_30001[(1)] = (1));

return statearr_30001;
});
var canastcljs$drop_file_stream$delete_file_named_$_state_machine__28904__auto____1 = (function (state_29998){
while(true){
var ret_value__28905__auto__ = (function (){try{while(true){
var result__28906__auto__ = switch__28903__auto__.call(null,state_29998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28906__auto__;
}
break;
}
}catch (e30002){if((e30002 instanceof Object)){
var ex__28907__auto__ = e30002;
var statearr_30003_30005 = state_29998;
(statearr_30003_30005[(5)] = ex__28907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30006 = state_29998;
state_29998 = G__30006;
continue;
} else {
return ret_value__28905__auto__;
}
break;
}
});
canastcljs$drop_file_stream$delete_file_named_$_state_machine__28904__auto__ = function(state_29998){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__28904__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__28904__auto____1.call(this,state_29998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$delete_file_named_$_state_machine__28904__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$delete_file_named_$_state_machine__28904__auto____0;
canastcljs$drop_file_stream$delete_file_named_$_state_machine__28904__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$delete_file_named_$_state_machine__28904__auto____1;
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__28904__auto__;
})()
;})(switch__28903__auto__,c__28926__auto__))
})();
var state__28928__auto__ = (function (){var statearr_30004 = f__28927__auto__.call(null);
(statearr_30004[(6)] = c__28926__auto__);

return statearr_30004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28928__auto__);
});})(c__28926__auto__))
);

return c__28926__auto__;
});
canastcljs.drop_file_stream.get_contents_of = (function canastcljs$drop_file_stream$get_contents_of(f_name,w,ziel){
var c__28926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28926__auto__){
return (function (){
var f__28927__auto__ = (function (){var switch__28903__auto__ = ((function (c__28926__auto__){
return (function (state_30020){
var state_val_30021 = (state_30020[(1)]);
if((state_val_30021 === (1))){
var inst_30007 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_30008 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_30009 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_30010 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_30007,"text/plain; charset=utf-8"];
var inst_30011 = cljs.core.PersistentHashMap.fromArrays(inst_30009,inst_30010);
var inst_30012 = [false,inst_30011];
var inst_30013 = cljs.core.PersistentHashMap.fromArrays(inst_30008,inst_30012);
var inst_30014 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_30013);
var state_30020__$1 = state_30020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30020__$1,(2),inst_30014);
} else {
if((state_val_30021 === (2))){
var inst_30016 = (state_30020[(2)]);
var inst_30017 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30016);
var inst_30018 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_30017);
var state_30020__$1 = state_30020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30020__$1,inst_30018);
} else {
return null;
}
}
});})(c__28926__auto__))
;
return ((function (switch__28903__auto__,c__28926__auto__){
return (function() {
var canastcljs$drop_file_stream$get_contents_of_$_state_machine__28904__auto__ = null;
var canastcljs$drop_file_stream$get_contents_of_$_state_machine__28904__auto____0 = (function (){
var statearr_30022 = [null,null,null,null,null,null,null];
(statearr_30022[(0)] = canastcljs$drop_file_stream$get_contents_of_$_state_machine__28904__auto__);

(statearr_30022[(1)] = (1));

return statearr_30022;
});
var canastcljs$drop_file_stream$get_contents_of_$_state_machine__28904__auto____1 = (function (state_30020){
while(true){
var ret_value__28905__auto__ = (function (){try{while(true){
var result__28906__auto__ = switch__28903__auto__.call(null,state_30020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28906__auto__;
}
break;
}
}catch (e30023){if((e30023 instanceof Object)){
var ex__28907__auto__ = e30023;
var statearr_30024_30026 = state_30020;
(statearr_30024_30026[(5)] = ex__28907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30027 = state_30020;
state_30020 = G__30027;
continue;
} else {
return ret_value__28905__auto__;
}
break;
}
});
canastcljs$drop_file_stream$get_contents_of_$_state_machine__28904__auto__ = function(state_30020){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__28904__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__28904__auto____1.call(this,state_30020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$get_contents_of_$_state_machine__28904__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$get_contents_of_$_state_machine__28904__auto____0;
canastcljs$drop_file_stream$get_contents_of_$_state_machine__28904__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$get_contents_of_$_state_machine__28904__auto____1;
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__28904__auto__;
})()
;})(switch__28903__auto__,c__28926__auto__))
})();
var state__28928__auto__ = (function (){var statearr_30025 = f__28927__auto__.call(null);
(statearr_30025[(6)] = c__28926__auto__);

return statearr_30025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28928__auto__);
});})(c__28926__auto__))
);

return c__28926__auto__;
});
canastcljs.drop_file_stream.lies_edn = (function canastcljs$drop_file_stream$lies_edn(f_name,w,ziel){
var c__28926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28926__auto__){
return (function (){
var f__28927__auto__ = (function (){var switch__28903__auto__ = ((function (c__28926__auto__){
return (function (state_30042){
var state_val_30043 = (state_30042[(1)]);
if((state_val_30043 === (1))){
var inst_30028 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_30029 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_30030 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_30031 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_30028,"text/plain; charset=utf-8"];
var inst_30032 = cljs.core.PersistentHashMap.fromArrays(inst_30030,inst_30031);
var inst_30033 = [false,inst_30032];
var inst_30034 = cljs.core.PersistentHashMap.fromArrays(inst_30029,inst_30033);
var inst_30035 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_30034);
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30042__$1,(2),inst_30035);
} else {
if((state_val_30043 === (2))){
var inst_30037 = (state_30042[(2)]);
var inst_30038 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30037);
var inst_30039 = cljs.reader.read_string.call(null,inst_30038);
var inst_30040 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_30039);
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30042__$1,inst_30040);
} else {
return null;
}
}
});})(c__28926__auto__))
;
return ((function (switch__28903__auto__,c__28926__auto__){
return (function() {
var canastcljs$drop_file_stream$lies_edn_$_state_machine__28904__auto__ = null;
var canastcljs$drop_file_stream$lies_edn_$_state_machine__28904__auto____0 = (function (){
var statearr_30044 = [null,null,null,null,null,null,null];
(statearr_30044[(0)] = canastcljs$drop_file_stream$lies_edn_$_state_machine__28904__auto__);

(statearr_30044[(1)] = (1));

return statearr_30044;
});
var canastcljs$drop_file_stream$lies_edn_$_state_machine__28904__auto____1 = (function (state_30042){
while(true){
var ret_value__28905__auto__ = (function (){try{while(true){
var result__28906__auto__ = switch__28903__auto__.call(null,state_30042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28906__auto__;
}
break;
}
}catch (e30045){if((e30045 instanceof Object)){
var ex__28907__auto__ = e30045;
var statearr_30046_30048 = state_30042;
(statearr_30046_30048[(5)] = ex__28907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30049 = state_30042;
state_30042 = G__30049;
continue;
} else {
return ret_value__28905__auto__;
}
break;
}
});
canastcljs$drop_file_stream$lies_edn_$_state_machine__28904__auto__ = function(state_30042){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$lies_edn_$_state_machine__28904__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$lies_edn_$_state_machine__28904__auto____1.call(this,state_30042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$lies_edn_$_state_machine__28904__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$lies_edn_$_state_machine__28904__auto____0;
canastcljs$drop_file_stream$lies_edn_$_state_machine__28904__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$lies_edn_$_state_machine__28904__auto____1;
return canastcljs$drop_file_stream$lies_edn_$_state_machine__28904__auto__;
})()
;})(switch__28903__auto__,c__28926__auto__))
})();
var state__28928__auto__ = (function (){var statearr_30047 = f__28927__auto__.call(null);
(statearr_30047[(6)] = c__28926__auto__);

return statearr_30047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28928__auto__);
});})(c__28926__auto__))
);

return c__28926__auto__;
});
canastcljs.drop_file_stream.lies_welt = (function canastcljs$drop_file_stream$lies_welt(f_name,w){
var c__28926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28926__auto__){
return (function (){
var f__28927__auto__ = (function (){var switch__28903__auto__ = ((function (c__28926__auto__){
return (function (state_30064){
var state_val_30065 = (state_30064[(1)]);
if((state_val_30065 === (1))){
var inst_30050 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_30051 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_30052 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_30053 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_30050,"text/plain; charset=utf-8"];
var inst_30054 = cljs.core.PersistentHashMap.fromArrays(inst_30052,inst_30053);
var inst_30055 = [false,inst_30054];
var inst_30056 = cljs.core.PersistentHashMap.fromArrays(inst_30051,inst_30055);
var inst_30057 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_30056);
var state_30064__$1 = state_30064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30064__$1,(2),inst_30057);
} else {
if((state_val_30065 === (2))){
var inst_30059 = (state_30064[(2)]);
var inst_30060 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30059);
var inst_30061 = cljs.reader.read_string.call(null,inst_30060);
var inst_30062 = cljs.core.reset_BANG_.call(null,w,inst_30061);
var state_30064__$1 = state_30064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30064__$1,inst_30062);
} else {
return null;
}
}
});})(c__28926__auto__))
;
return ((function (switch__28903__auto__,c__28926__auto__){
return (function() {
var canastcljs$drop_file_stream$lies_welt_$_state_machine__28904__auto__ = null;
var canastcljs$drop_file_stream$lies_welt_$_state_machine__28904__auto____0 = (function (){
var statearr_30066 = [null,null,null,null,null,null,null];
(statearr_30066[(0)] = canastcljs$drop_file_stream$lies_welt_$_state_machine__28904__auto__);

(statearr_30066[(1)] = (1));

return statearr_30066;
});
var canastcljs$drop_file_stream$lies_welt_$_state_machine__28904__auto____1 = (function (state_30064){
while(true){
var ret_value__28905__auto__ = (function (){try{while(true){
var result__28906__auto__ = switch__28903__auto__.call(null,state_30064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28906__auto__;
}
break;
}
}catch (e30067){if((e30067 instanceof Object)){
var ex__28907__auto__ = e30067;
var statearr_30068_30070 = state_30064;
(statearr_30068_30070[(5)] = ex__28907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30071 = state_30064;
state_30064 = G__30071;
continue;
} else {
return ret_value__28905__auto__;
}
break;
}
});
canastcljs$drop_file_stream$lies_welt_$_state_machine__28904__auto__ = function(state_30064){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$lies_welt_$_state_machine__28904__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$lies_welt_$_state_machine__28904__auto____1.call(this,state_30064);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$lies_welt_$_state_machine__28904__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$lies_welt_$_state_machine__28904__auto____0;
canastcljs$drop_file_stream$lies_welt_$_state_machine__28904__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$lies_welt_$_state_machine__28904__auto____1;
return canastcljs$drop_file_stream$lies_welt_$_state_machine__28904__auto__;
})()
;})(switch__28903__auto__,c__28926__auto__))
})();
var state__28928__auto__ = (function (){var statearr_30069 = f__28927__auto__.call(null);
(statearr_30069[(6)] = c__28926__auto__);

return statearr_30069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28928__auto__);
});})(c__28926__auto__))
);

return c__28926__auto__;
});
canastcljs.drop_file_stream.write_text = (function canastcljs$drop_file_stream$write_text(text,f_name){
var c__28926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28926__auto__){
return (function (){
var f__28927__auto__ = (function (){var switch__28903__auto__ = ((function (c__28926__auto__){
return (function (state_30083){
var state_val_30084 = (state_30083[(1)]);
if((state_val_30084 === (1))){
var inst_30072 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_30073 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_30074 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_30075 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_30072,"application/octet-stream"];
var inst_30076 = cljs.core.PersistentHashMap.fromArrays(inst_30074,inst_30075);
var inst_30077 = [false,inst_30076,text];
var inst_30078 = cljs.core.PersistentHashMap.fromArrays(inst_30073,inst_30077);
var inst_30079 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_30078);
var state_30083__$1 = state_30083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30083__$1,(2),inst_30079);
} else {
if((state_val_30084 === (2))){
var inst_30081 = (state_30083[(2)]);
var state_30083__$1 = state_30083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30083__$1,inst_30081);
} else {
return null;
}
}
});})(c__28926__auto__))
;
return ((function (switch__28903__auto__,c__28926__auto__){
return (function() {
var canastcljs$drop_file_stream$write_text_$_state_machine__28904__auto__ = null;
var canastcljs$drop_file_stream$write_text_$_state_machine__28904__auto____0 = (function (){
var statearr_30085 = [null,null,null,null,null,null,null];
(statearr_30085[(0)] = canastcljs$drop_file_stream$write_text_$_state_machine__28904__auto__);

(statearr_30085[(1)] = (1));

return statearr_30085;
});
var canastcljs$drop_file_stream$write_text_$_state_machine__28904__auto____1 = (function (state_30083){
while(true){
var ret_value__28905__auto__ = (function (){try{while(true){
var result__28906__auto__ = switch__28903__auto__.call(null,state_30083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28906__auto__;
}
break;
}
}catch (e30086){if((e30086 instanceof Object)){
var ex__28907__auto__ = e30086;
var statearr_30087_30089 = state_30083;
(statearr_30087_30089[(5)] = ex__28907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30090 = state_30083;
state_30083 = G__30090;
continue;
} else {
return ret_value__28905__auto__;
}
break;
}
});
canastcljs$drop_file_stream$write_text_$_state_machine__28904__auto__ = function(state_30083){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$write_text_$_state_machine__28904__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$write_text_$_state_machine__28904__auto____1.call(this,state_30083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$write_text_$_state_machine__28904__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$write_text_$_state_machine__28904__auto____0;
canastcljs$drop_file_stream$write_text_$_state_machine__28904__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$write_text_$_state_machine__28904__auto____1;
return canastcljs$drop_file_stream$write_text_$_state_machine__28904__auto__;
})()
;})(switch__28903__auto__,c__28926__auto__))
})();
var state__28928__auto__ = (function (){var statearr_30088 = f__28927__auto__.call(null);
(statearr_30088[(6)] = c__28926__auto__);

return statearr_30088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28928__auto__);
});})(c__28926__auto__))
);

return c__28926__auto__;
});
canastcljs.drop_file_stream.log_neues_spiel = (function canastcljs$drop_file_stream$log_neues_spiel(f_name,w,ziel){
var c__28926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28926__auto__){
return (function (){
var f__28927__auto__ = (function (){var switch__28903__auto__ = ((function (c__28926__auto__){
return (function (state_30109){
var state_val_30110 = (state_30109[(1)]);
if((state_val_30110 === (1))){
var inst_30091 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_30092 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_30093 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_30094 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_30091,"text/plain; charset=utf-8"];
var inst_30095 = cljs.core.PersistentHashMap.fromArrays(inst_30093,inst_30094);
var inst_30096 = [false,inst_30095];
var inst_30097 = cljs.core.PersistentHashMap.fromArrays(inst_30092,inst_30096);
var inst_30098 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_30097);
var state_30109__$1 = state_30109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30109__$1,(2),inst_30098);
} else {
if((state_val_30110 === (2))){
var inst_30100 = (state_30109[(2)]);
var inst_30101 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30100);
var inst_30102 = (new Date());
var inst_30103 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30101),"Neues Spiel ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30102),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
var inst_30104 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_30103);
var inst_30105 = cljs.core.deref.call(null,w);
var inst_30106 = ziel.call(null,inst_30105);
var inst_30107 = canastcljs.drop_file_stream.write_text.call(null,inst_30106,"logs.txt");
var state_30109__$1 = (function (){var statearr_30111 = state_30109;
(statearr_30111[(7)] = inst_30104);

return statearr_30111;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30109__$1,inst_30107);
} else {
return null;
}
}
});})(c__28926__auto__))
;
return ((function (switch__28903__auto__,c__28926__auto__){
return (function() {
var canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28904__auto__ = null;
var canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28904__auto____0 = (function (){
var statearr_30112 = [null,null,null,null,null,null,null,null];
(statearr_30112[(0)] = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28904__auto__);

(statearr_30112[(1)] = (1));

return statearr_30112;
});
var canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28904__auto____1 = (function (state_30109){
while(true){
var ret_value__28905__auto__ = (function (){try{while(true){
var result__28906__auto__ = switch__28903__auto__.call(null,state_30109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28906__auto__;
}
break;
}
}catch (e30113){if((e30113 instanceof Object)){
var ex__28907__auto__ = e30113;
var statearr_30114_30116 = state_30109;
(statearr_30114_30116[(5)] = ex__28907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30117 = state_30109;
state_30109 = G__30117;
continue;
} else {
return ret_value__28905__auto__;
}
break;
}
});
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28904__auto__ = function(state_30109){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28904__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28904__auto____1.call(this,state_30109);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28904__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28904__auto____0;
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28904__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28904__auto____1;
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28904__auto__;
})()
;})(switch__28903__auto__,c__28926__auto__))
})();
var state__28928__auto__ = (function (){var statearr_30115 = f__28927__auto__.call(null);
(statearr_30115[(6)] = c__28926__auto__);

return statearr_30115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28928__auto__);
});})(c__28926__auto__))
);

return c__28926__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map?rel=1530993663480
