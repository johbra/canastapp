// Compiled by ClojureScript 1.10.238 {}
goog.provide('canastcljs.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
canastcljs.drop_file_stream.exists_file_named = (function canastcljs$drop_file_stream$exists_file_named(f_name,w,ziel){
var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28918__auto__){
return (function (){
var f__28919__auto__ = (function (){var switch__28895__auto__ = ((function (c__28918__auto__){
return (function (state_29949){
var state_val_29950 = (state_29949[(1)]);
if((state_val_29950 === (1))){
var inst_29932 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_29933 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_29934 = ["Authorization"];
var inst_29935 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_29936 = cljs.core.PersistentHashMap.fromArrays(inst_29934,inst_29935);
var inst_29937 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_29938 = [inst_29932];
var inst_29939 = cljs.core.PersistentHashMap.fromArrays(inst_29937,inst_29938);
var inst_29940 = [false,inst_29936,inst_29939];
var inst_29941 = cljs.core.PersistentHashMap.fromArrays(inst_29933,inst_29940);
var inst_29942 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/get_metadata",inst_29941);
var state_29949__$1 = state_29949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29949__$1,(2),inst_29942);
} else {
if((state_val_29950 === (2))){
var inst_29944 = (state_29949[(2)]);
var inst_29945 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_29944);
var inst_29946 = cljs.core._EQ_.call(null,inst_29945,(200));
var inst_29947 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_29946);
var state_29949__$1 = state_29949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29949__$1,inst_29947);
} else {
return null;
}
}
});})(c__28918__auto__))
;
return ((function (switch__28895__auto__,c__28918__auto__){
return (function() {
var canastcljs$drop_file_stream$exists_file_named_$_state_machine__28896__auto__ = null;
var canastcljs$drop_file_stream$exists_file_named_$_state_machine__28896__auto____0 = (function (){
var statearr_29951 = [null,null,null,null,null,null,null];
(statearr_29951[(0)] = canastcljs$drop_file_stream$exists_file_named_$_state_machine__28896__auto__);

(statearr_29951[(1)] = (1));

return statearr_29951;
});
var canastcljs$drop_file_stream$exists_file_named_$_state_machine__28896__auto____1 = (function (state_29949){
while(true){
var ret_value__28897__auto__ = (function (){try{while(true){
var result__28898__auto__ = switch__28895__auto__.call(null,state_29949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28898__auto__;
}
break;
}
}catch (e29952){if((e29952 instanceof Object)){
var ex__28899__auto__ = e29952;
var statearr_29953_29955 = state_29949;
(statearr_29953_29955[(5)] = ex__28899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29956 = state_29949;
state_29949 = G__29956;
continue;
} else {
return ret_value__28897__auto__;
}
break;
}
});
canastcljs$drop_file_stream$exists_file_named_$_state_machine__28896__auto__ = function(state_29949){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__28896__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__28896__auto____1.call(this,state_29949);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$exists_file_named_$_state_machine__28896__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$exists_file_named_$_state_machine__28896__auto____0;
canastcljs$drop_file_stream$exists_file_named_$_state_machine__28896__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$exists_file_named_$_state_machine__28896__auto____1;
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__28896__auto__;
})()
;})(switch__28895__auto__,c__28918__auto__))
})();
var state__28920__auto__ = (function (){var statearr_29954 = f__28919__auto__.call(null);
(statearr_29954[(6)] = c__28918__auto__);

return statearr_29954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
});})(c__28918__auto__))
);

return c__28918__auto__;
});
canastcljs.drop_file_stream.delete_file_named = (function canastcljs$drop_file_stream$delete_file_named(f_name,w,ziel){
var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28918__auto__){
return (function (){
var f__28919__auto__ = (function (){var switch__28895__auto__ = ((function (c__28918__auto__){
return (function (state_29972){
var state_val_29973 = (state_29972[(1)]);
if((state_val_29973 === (1))){
var inst_29957 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_29958 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_29959 = ["Authorization"];
var inst_29960 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_29961 = cljs.core.PersistentHashMap.fromArrays(inst_29959,inst_29960);
var inst_29962 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_29963 = [inst_29957];
var inst_29964 = cljs.core.PersistentHashMap.fromArrays(inst_29962,inst_29963);
var inst_29965 = [false,inst_29961,inst_29964];
var inst_29966 = cljs.core.PersistentHashMap.fromArrays(inst_29958,inst_29965);
var inst_29967 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete_v2",inst_29966);
var state_29972__$1 = state_29972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29972__$1,(2),inst_29967);
} else {
if((state_val_29973 === (2))){
var inst_29969 = (state_29972[(2)]);
var inst_29970 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,false);
var state_29972__$1 = (function (){var statearr_29974 = state_29972;
(statearr_29974[(7)] = inst_29969);

return statearr_29974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29972__$1,inst_29970);
} else {
return null;
}
}
});})(c__28918__auto__))
;
return ((function (switch__28895__auto__,c__28918__auto__){
return (function() {
var canastcljs$drop_file_stream$delete_file_named_$_state_machine__28896__auto__ = null;
var canastcljs$drop_file_stream$delete_file_named_$_state_machine__28896__auto____0 = (function (){
var statearr_29975 = [null,null,null,null,null,null,null,null];
(statearr_29975[(0)] = canastcljs$drop_file_stream$delete_file_named_$_state_machine__28896__auto__);

(statearr_29975[(1)] = (1));

return statearr_29975;
});
var canastcljs$drop_file_stream$delete_file_named_$_state_machine__28896__auto____1 = (function (state_29972){
while(true){
var ret_value__28897__auto__ = (function (){try{while(true){
var result__28898__auto__ = switch__28895__auto__.call(null,state_29972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28898__auto__;
}
break;
}
}catch (e29976){if((e29976 instanceof Object)){
var ex__28899__auto__ = e29976;
var statearr_29977_29979 = state_29972;
(statearr_29977_29979[(5)] = ex__28899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29980 = state_29972;
state_29972 = G__29980;
continue;
} else {
return ret_value__28897__auto__;
}
break;
}
});
canastcljs$drop_file_stream$delete_file_named_$_state_machine__28896__auto__ = function(state_29972){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__28896__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__28896__auto____1.call(this,state_29972);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$delete_file_named_$_state_machine__28896__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$delete_file_named_$_state_machine__28896__auto____0;
canastcljs$drop_file_stream$delete_file_named_$_state_machine__28896__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$delete_file_named_$_state_machine__28896__auto____1;
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__28896__auto__;
})()
;})(switch__28895__auto__,c__28918__auto__))
})();
var state__28920__auto__ = (function (){var statearr_29978 = f__28919__auto__.call(null);
(statearr_29978[(6)] = c__28918__auto__);

return statearr_29978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
});})(c__28918__auto__))
);

return c__28918__auto__;
});
canastcljs.drop_file_stream.get_contents_of = (function canastcljs$drop_file_stream$get_contents_of(f_name,w,ziel){
var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28918__auto__){
return (function (){
var f__28919__auto__ = (function (){var switch__28895__auto__ = ((function (c__28918__auto__){
return (function (state_29994){
var state_val_29995 = (state_29994[(1)]);
if((state_val_29995 === (1))){
var inst_29981 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_29982 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_29983 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_29984 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_29981,"text/plain; charset=utf-8"];
var inst_29985 = cljs.core.PersistentHashMap.fromArrays(inst_29983,inst_29984);
var inst_29986 = [false,inst_29985];
var inst_29987 = cljs.core.PersistentHashMap.fromArrays(inst_29982,inst_29986);
var inst_29988 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_29987);
var state_29994__$1 = state_29994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29994__$1,(2),inst_29988);
} else {
if((state_val_29995 === (2))){
var inst_29990 = (state_29994[(2)]);
var inst_29991 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29990);
var inst_29992 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_29991);
var state_29994__$1 = state_29994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29994__$1,inst_29992);
} else {
return null;
}
}
});})(c__28918__auto__))
;
return ((function (switch__28895__auto__,c__28918__auto__){
return (function() {
var canastcljs$drop_file_stream$get_contents_of_$_state_machine__28896__auto__ = null;
var canastcljs$drop_file_stream$get_contents_of_$_state_machine__28896__auto____0 = (function (){
var statearr_29996 = [null,null,null,null,null,null,null];
(statearr_29996[(0)] = canastcljs$drop_file_stream$get_contents_of_$_state_machine__28896__auto__);

(statearr_29996[(1)] = (1));

return statearr_29996;
});
var canastcljs$drop_file_stream$get_contents_of_$_state_machine__28896__auto____1 = (function (state_29994){
while(true){
var ret_value__28897__auto__ = (function (){try{while(true){
var result__28898__auto__ = switch__28895__auto__.call(null,state_29994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28898__auto__;
}
break;
}
}catch (e29997){if((e29997 instanceof Object)){
var ex__28899__auto__ = e29997;
var statearr_29998_30000 = state_29994;
(statearr_29998_30000[(5)] = ex__28899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30001 = state_29994;
state_29994 = G__30001;
continue;
} else {
return ret_value__28897__auto__;
}
break;
}
});
canastcljs$drop_file_stream$get_contents_of_$_state_machine__28896__auto__ = function(state_29994){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__28896__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__28896__auto____1.call(this,state_29994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$get_contents_of_$_state_machine__28896__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$get_contents_of_$_state_machine__28896__auto____0;
canastcljs$drop_file_stream$get_contents_of_$_state_machine__28896__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$get_contents_of_$_state_machine__28896__auto____1;
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__28896__auto__;
})()
;})(switch__28895__auto__,c__28918__auto__))
})();
var state__28920__auto__ = (function (){var statearr_29999 = f__28919__auto__.call(null);
(statearr_29999[(6)] = c__28918__auto__);

return statearr_29999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
});})(c__28918__auto__))
);

return c__28918__auto__;
});
canastcljs.drop_file_stream.lies_historie = (function canastcljs$drop_file_stream$lies_historie(f_name,w,ziel){
var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28918__auto__){
return (function (){
var f__28919__auto__ = (function (){var switch__28895__auto__ = ((function (c__28918__auto__){
return (function (state_30016){
var state_val_30017 = (state_30016[(1)]);
if((state_val_30017 === (1))){
var inst_30002 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_30003 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_30004 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_30005 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_30002,"text/plain; charset=utf-8"];
var inst_30006 = cljs.core.PersistentHashMap.fromArrays(inst_30004,inst_30005);
var inst_30007 = [false,inst_30006];
var inst_30008 = cljs.core.PersistentHashMap.fromArrays(inst_30003,inst_30007);
var inst_30009 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_30008);
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30016__$1,(2),inst_30009);
} else {
if((state_val_30017 === (2))){
var inst_30011 = (state_30016[(2)]);
var inst_30012 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30011);
var inst_30013 = cljs.reader.read_string.call(null,inst_30012);
var inst_30014 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_30013);
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30016__$1,inst_30014);
} else {
return null;
}
}
});})(c__28918__auto__))
;
return ((function (switch__28895__auto__,c__28918__auto__){
return (function() {
var canastcljs$drop_file_stream$lies_historie_$_state_machine__28896__auto__ = null;
var canastcljs$drop_file_stream$lies_historie_$_state_machine__28896__auto____0 = (function (){
var statearr_30018 = [null,null,null,null,null,null,null];
(statearr_30018[(0)] = canastcljs$drop_file_stream$lies_historie_$_state_machine__28896__auto__);

(statearr_30018[(1)] = (1));

return statearr_30018;
});
var canastcljs$drop_file_stream$lies_historie_$_state_machine__28896__auto____1 = (function (state_30016){
while(true){
var ret_value__28897__auto__ = (function (){try{while(true){
var result__28898__auto__ = switch__28895__auto__.call(null,state_30016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28898__auto__;
}
break;
}
}catch (e30019){if((e30019 instanceof Object)){
var ex__28899__auto__ = e30019;
var statearr_30020_30022 = state_30016;
(statearr_30020_30022[(5)] = ex__28899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30023 = state_30016;
state_30016 = G__30023;
continue;
} else {
return ret_value__28897__auto__;
}
break;
}
});
canastcljs$drop_file_stream$lies_historie_$_state_machine__28896__auto__ = function(state_30016){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$lies_historie_$_state_machine__28896__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$lies_historie_$_state_machine__28896__auto____1.call(this,state_30016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$lies_historie_$_state_machine__28896__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$lies_historie_$_state_machine__28896__auto____0;
canastcljs$drop_file_stream$lies_historie_$_state_machine__28896__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$lies_historie_$_state_machine__28896__auto____1;
return canastcljs$drop_file_stream$lies_historie_$_state_machine__28896__auto__;
})()
;})(switch__28895__auto__,c__28918__auto__))
})();
var state__28920__auto__ = (function (){var statearr_30021 = f__28919__auto__.call(null);
(statearr_30021[(6)] = c__28918__auto__);

return statearr_30021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
});})(c__28918__auto__))
);

return c__28918__auto__;
});
canastcljs.drop_file_stream.lies_welt = (function canastcljs$drop_file_stream$lies_welt(f_name,w){
var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28918__auto__){
return (function (){
var f__28919__auto__ = (function (){var switch__28895__auto__ = ((function (c__28918__auto__){
return (function (state_30038){
var state_val_30039 = (state_30038[(1)]);
if((state_val_30039 === (1))){
var inst_30024 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_30025 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_30026 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_30027 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_30024,"text/plain; charset=utf-8"];
var inst_30028 = cljs.core.PersistentHashMap.fromArrays(inst_30026,inst_30027);
var inst_30029 = [false,inst_30028];
var inst_30030 = cljs.core.PersistentHashMap.fromArrays(inst_30025,inst_30029);
var inst_30031 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_30030);
var state_30038__$1 = state_30038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30038__$1,(2),inst_30031);
} else {
if((state_val_30039 === (2))){
var inst_30033 = (state_30038[(2)]);
var inst_30034 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30033);
var inst_30035 = cljs.reader.read_string.call(null,inst_30034);
var inst_30036 = cljs.core.reset_BANG_.call(null,w,inst_30035);
var state_30038__$1 = state_30038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30038__$1,inst_30036);
} else {
return null;
}
}
});})(c__28918__auto__))
;
return ((function (switch__28895__auto__,c__28918__auto__){
return (function() {
var canastcljs$drop_file_stream$lies_welt_$_state_machine__28896__auto__ = null;
var canastcljs$drop_file_stream$lies_welt_$_state_machine__28896__auto____0 = (function (){
var statearr_30040 = [null,null,null,null,null,null,null];
(statearr_30040[(0)] = canastcljs$drop_file_stream$lies_welt_$_state_machine__28896__auto__);

(statearr_30040[(1)] = (1));

return statearr_30040;
});
var canastcljs$drop_file_stream$lies_welt_$_state_machine__28896__auto____1 = (function (state_30038){
while(true){
var ret_value__28897__auto__ = (function (){try{while(true){
var result__28898__auto__ = switch__28895__auto__.call(null,state_30038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28898__auto__;
}
break;
}
}catch (e30041){if((e30041 instanceof Object)){
var ex__28899__auto__ = e30041;
var statearr_30042_30044 = state_30038;
(statearr_30042_30044[(5)] = ex__28899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30045 = state_30038;
state_30038 = G__30045;
continue;
} else {
return ret_value__28897__auto__;
}
break;
}
});
canastcljs$drop_file_stream$lies_welt_$_state_machine__28896__auto__ = function(state_30038){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$lies_welt_$_state_machine__28896__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$lies_welt_$_state_machine__28896__auto____1.call(this,state_30038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$lies_welt_$_state_machine__28896__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$lies_welt_$_state_machine__28896__auto____0;
canastcljs$drop_file_stream$lies_welt_$_state_machine__28896__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$lies_welt_$_state_machine__28896__auto____1;
return canastcljs$drop_file_stream$lies_welt_$_state_machine__28896__auto__;
})()
;})(switch__28895__auto__,c__28918__auto__))
})();
var state__28920__auto__ = (function (){var statearr_30043 = f__28919__auto__.call(null);
(statearr_30043[(6)] = c__28918__auto__);

return statearr_30043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
});})(c__28918__auto__))
);

return c__28918__auto__;
});
canastcljs.drop_file_stream.write_text = (function canastcljs$drop_file_stream$write_text(text,f_name){
var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28918__auto__){
return (function (){
var f__28919__auto__ = (function (){var switch__28895__auto__ = ((function (c__28918__auto__){
return (function (state_30057){
var state_val_30058 = (state_30057[(1)]);
if((state_val_30058 === (1))){
var inst_30046 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_30047 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_30048 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_30049 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_30046,"application/octet-stream"];
var inst_30050 = cljs.core.PersistentHashMap.fromArrays(inst_30048,inst_30049);
var inst_30051 = [false,inst_30050,text];
var inst_30052 = cljs.core.PersistentHashMap.fromArrays(inst_30047,inst_30051);
var inst_30053 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_30052);
var state_30057__$1 = state_30057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30057__$1,(2),inst_30053);
} else {
if((state_val_30058 === (2))){
var inst_30055 = (state_30057[(2)]);
var state_30057__$1 = state_30057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30057__$1,inst_30055);
} else {
return null;
}
}
});})(c__28918__auto__))
;
return ((function (switch__28895__auto__,c__28918__auto__){
return (function() {
var canastcljs$drop_file_stream$write_text_$_state_machine__28896__auto__ = null;
var canastcljs$drop_file_stream$write_text_$_state_machine__28896__auto____0 = (function (){
var statearr_30059 = [null,null,null,null,null,null,null];
(statearr_30059[(0)] = canastcljs$drop_file_stream$write_text_$_state_machine__28896__auto__);

(statearr_30059[(1)] = (1));

return statearr_30059;
});
var canastcljs$drop_file_stream$write_text_$_state_machine__28896__auto____1 = (function (state_30057){
while(true){
var ret_value__28897__auto__ = (function (){try{while(true){
var result__28898__auto__ = switch__28895__auto__.call(null,state_30057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28898__auto__;
}
break;
}
}catch (e30060){if((e30060 instanceof Object)){
var ex__28899__auto__ = e30060;
var statearr_30061_30063 = state_30057;
(statearr_30061_30063[(5)] = ex__28899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30064 = state_30057;
state_30057 = G__30064;
continue;
} else {
return ret_value__28897__auto__;
}
break;
}
});
canastcljs$drop_file_stream$write_text_$_state_machine__28896__auto__ = function(state_30057){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$write_text_$_state_machine__28896__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$write_text_$_state_machine__28896__auto____1.call(this,state_30057);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$write_text_$_state_machine__28896__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$write_text_$_state_machine__28896__auto____0;
canastcljs$drop_file_stream$write_text_$_state_machine__28896__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$write_text_$_state_machine__28896__auto____1;
return canastcljs$drop_file_stream$write_text_$_state_machine__28896__auto__;
})()
;})(switch__28895__auto__,c__28918__auto__))
})();
var state__28920__auto__ = (function (){var statearr_30062 = f__28919__auto__.call(null);
(statearr_30062[(6)] = c__28918__auto__);

return statearr_30062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
});})(c__28918__auto__))
);

return c__28918__auto__;
});
canastcljs.drop_file_stream.log_neues_spiel = (function canastcljs$drop_file_stream$log_neues_spiel(f_name,w,ziel){
var c__28918__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28918__auto__){
return (function (){
var f__28919__auto__ = (function (){var switch__28895__auto__ = ((function (c__28918__auto__){
return (function (state_30083){
var state_val_30084 = (state_30083[(1)]);
if((state_val_30084 === (1))){
var inst_30065 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_30066 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_30067 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_30068 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_30065,"text/plain; charset=utf-8"];
var inst_30069 = cljs.core.PersistentHashMap.fromArrays(inst_30067,inst_30068);
var inst_30070 = [false,inst_30069];
var inst_30071 = cljs.core.PersistentHashMap.fromArrays(inst_30066,inst_30070);
var inst_30072 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_30071);
var state_30083__$1 = state_30083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30083__$1,(2),inst_30072);
} else {
if((state_val_30084 === (2))){
var inst_30074 = (state_30083[(2)]);
var inst_30075 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30074);
var inst_30076 = (new Date());
var inst_30077 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30075),"Neues Spiel ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30076),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
var inst_30078 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_30077);
var inst_30079 = cljs.core.deref.call(null,w);
var inst_30080 = ziel.call(null,inst_30079);
var inst_30081 = canastcljs.drop_file_stream.write_text.call(null,inst_30080,"logs.txt");
var state_30083__$1 = (function (){var statearr_30085 = state_30083;
(statearr_30085[(7)] = inst_30078);

return statearr_30085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30083__$1,inst_30081);
} else {
return null;
}
}
});})(c__28918__auto__))
;
return ((function (switch__28895__auto__,c__28918__auto__){
return (function() {
var canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28896__auto__ = null;
var canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28896__auto____0 = (function (){
var statearr_30086 = [null,null,null,null,null,null,null,null];
(statearr_30086[(0)] = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28896__auto__);

(statearr_30086[(1)] = (1));

return statearr_30086;
});
var canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28896__auto____1 = (function (state_30083){
while(true){
var ret_value__28897__auto__ = (function (){try{while(true){
var result__28898__auto__ = switch__28895__auto__.call(null,state_30083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28898__auto__;
}
break;
}
}catch (e30087){if((e30087 instanceof Object)){
var ex__28899__auto__ = e30087;
var statearr_30088_30090 = state_30083;
(statearr_30088_30090[(5)] = ex__28899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30091 = state_30083;
state_30083 = G__30091;
continue;
} else {
return ret_value__28897__auto__;
}
break;
}
});
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28896__auto__ = function(state_30083){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28896__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28896__auto____1.call(this,state_30083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28896__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28896__auto____0;
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28896__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28896__auto____1;
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__28896__auto__;
})()
;})(switch__28895__auto__,c__28918__auto__))
})();
var state__28920__auto__ = (function (){var statearr_30089 = f__28919__auto__.call(null);
(statearr_30089[(6)] = c__28918__auto__);

return statearr_30089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28920__auto__);
});})(c__28918__auto__))
);

return c__28918__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map?rel=1530640773818
