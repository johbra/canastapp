// Compiled by ClojureScript 1.10.238 {}
goog.provide('canastcljs.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
canastcljs.drop_file_stream.exists_file_named = (function canastcljs$drop_file_stream$exists_file_named(f_name,w,ziel){
var c__26662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto__){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto__){
return (function (state_29262){
var state_val_29263 = (state_29262[(1)]);
if((state_val_29263 === (1))){
var inst_29245 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_29246 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_29247 = ["Authorization"];
var inst_29248 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_29249 = cljs.core.PersistentHashMap.fromArrays(inst_29247,inst_29248);
var inst_29250 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_29251 = [inst_29245];
var inst_29252 = cljs.core.PersistentHashMap.fromArrays(inst_29250,inst_29251);
var inst_29253 = [false,inst_29249,inst_29252];
var inst_29254 = cljs.core.PersistentHashMap.fromArrays(inst_29246,inst_29253);
var inst_29255 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/get_metadata",inst_29254);
var state_29262__$1 = state_29262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29262__$1,(2),inst_29255);
} else {
if((state_val_29263 === (2))){
var inst_29257 = (state_29262[(2)]);
var inst_29258 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_29257);
var inst_29259 = cljs.core._EQ_.call(null,inst_29258,(200));
var inst_29260 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_29259);
var state_29262__$1 = state_29262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29262__$1,inst_29260);
} else {
return null;
}
}
});})(c__26662__auto__))
;
return ((function (switch__26572__auto__,c__26662__auto__){
return (function() {
var canastcljs$drop_file_stream$exists_file_named_$_state_machine__26573__auto__ = null;
var canastcljs$drop_file_stream$exists_file_named_$_state_machine__26573__auto____0 = (function (){
var statearr_29264 = [null,null,null,null,null,null,null];
(statearr_29264[(0)] = canastcljs$drop_file_stream$exists_file_named_$_state_machine__26573__auto__);

(statearr_29264[(1)] = (1));

return statearr_29264;
});
var canastcljs$drop_file_stream$exists_file_named_$_state_machine__26573__auto____1 = (function (state_29262){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_29262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e29265){if((e29265 instanceof Object)){
var ex__26576__auto__ = e29265;
var statearr_29266_29268 = state_29262;
(statearr_29266_29268[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29269 = state_29262;
state_29262 = G__29269;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
canastcljs$drop_file_stream$exists_file_named_$_state_machine__26573__auto__ = function(state_29262){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__26573__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__26573__auto____1.call(this,state_29262);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$exists_file_named_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$exists_file_named_$_state_machine__26573__auto____0;
canastcljs$drop_file_stream$exists_file_named_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$exists_file_named_$_state_machine__26573__auto____1;
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto__))
})();
var state__26664__auto__ = (function (){var statearr_29267 = f__26663__auto__.call(null);
(statearr_29267[(6)] = c__26662__auto__);

return statearr_29267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto__))
);

return c__26662__auto__;
});
canastcljs.drop_file_stream.delete_file_named = (function canastcljs$drop_file_stream$delete_file_named(f_name,w,ziel){
var c__26662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto__){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto__){
return (function (state_29285){
var state_val_29286 = (state_29285[(1)]);
if((state_val_29286 === (1))){
var inst_29270 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_29271 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_29272 = ["Authorization"];
var inst_29273 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_29274 = cljs.core.PersistentHashMap.fromArrays(inst_29272,inst_29273);
var inst_29275 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_29276 = [inst_29270];
var inst_29277 = cljs.core.PersistentHashMap.fromArrays(inst_29275,inst_29276);
var inst_29278 = [false,inst_29274,inst_29277];
var inst_29279 = cljs.core.PersistentHashMap.fromArrays(inst_29271,inst_29278);
var inst_29280 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete_v2",inst_29279);
var state_29285__$1 = state_29285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29285__$1,(2),inst_29280);
} else {
if((state_val_29286 === (2))){
var inst_29282 = (state_29285[(2)]);
var inst_29283 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,false);
var state_29285__$1 = (function (){var statearr_29287 = state_29285;
(statearr_29287[(7)] = inst_29282);

return statearr_29287;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29285__$1,inst_29283);
} else {
return null;
}
}
});})(c__26662__auto__))
;
return ((function (switch__26572__auto__,c__26662__auto__){
return (function() {
var canastcljs$drop_file_stream$delete_file_named_$_state_machine__26573__auto__ = null;
var canastcljs$drop_file_stream$delete_file_named_$_state_machine__26573__auto____0 = (function (){
var statearr_29288 = [null,null,null,null,null,null,null,null];
(statearr_29288[(0)] = canastcljs$drop_file_stream$delete_file_named_$_state_machine__26573__auto__);

(statearr_29288[(1)] = (1));

return statearr_29288;
});
var canastcljs$drop_file_stream$delete_file_named_$_state_machine__26573__auto____1 = (function (state_29285){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_29285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e29289){if((e29289 instanceof Object)){
var ex__26576__auto__ = e29289;
var statearr_29290_29292 = state_29285;
(statearr_29290_29292[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29293 = state_29285;
state_29285 = G__29293;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
canastcljs$drop_file_stream$delete_file_named_$_state_machine__26573__auto__ = function(state_29285){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__26573__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__26573__auto____1.call(this,state_29285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$delete_file_named_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$delete_file_named_$_state_machine__26573__auto____0;
canastcljs$drop_file_stream$delete_file_named_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$delete_file_named_$_state_machine__26573__auto____1;
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto__))
})();
var state__26664__auto__ = (function (){var statearr_29291 = f__26663__auto__.call(null);
(statearr_29291[(6)] = c__26662__auto__);

return statearr_29291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto__))
);

return c__26662__auto__;
});
canastcljs.drop_file_stream.get_contents_of = (function canastcljs$drop_file_stream$get_contents_of(f_name,w,ziel){
var c__26662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto__){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto__){
return (function (state_29307){
var state_val_29308 = (state_29307[(1)]);
if((state_val_29308 === (1))){
var inst_29294 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_29295 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_29296 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_29297 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_29294,"text/plain; charset=utf-8"];
var inst_29298 = cljs.core.PersistentHashMap.fromArrays(inst_29296,inst_29297);
var inst_29299 = [false,inst_29298];
var inst_29300 = cljs.core.PersistentHashMap.fromArrays(inst_29295,inst_29299);
var inst_29301 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_29300);
var state_29307__$1 = state_29307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29307__$1,(2),inst_29301);
} else {
if((state_val_29308 === (2))){
var inst_29303 = (state_29307[(2)]);
var inst_29304 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29303);
var inst_29305 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_29304);
var state_29307__$1 = state_29307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29307__$1,inst_29305);
} else {
return null;
}
}
});})(c__26662__auto__))
;
return ((function (switch__26572__auto__,c__26662__auto__){
return (function() {
var canastcljs$drop_file_stream$get_contents_of_$_state_machine__26573__auto__ = null;
var canastcljs$drop_file_stream$get_contents_of_$_state_machine__26573__auto____0 = (function (){
var statearr_29309 = [null,null,null,null,null,null,null];
(statearr_29309[(0)] = canastcljs$drop_file_stream$get_contents_of_$_state_machine__26573__auto__);

(statearr_29309[(1)] = (1));

return statearr_29309;
});
var canastcljs$drop_file_stream$get_contents_of_$_state_machine__26573__auto____1 = (function (state_29307){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_29307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e29310){if((e29310 instanceof Object)){
var ex__26576__auto__ = e29310;
var statearr_29311_29313 = state_29307;
(statearr_29311_29313[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29314 = state_29307;
state_29307 = G__29314;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
canastcljs$drop_file_stream$get_contents_of_$_state_machine__26573__auto__ = function(state_29307){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__26573__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__26573__auto____1.call(this,state_29307);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$get_contents_of_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$get_contents_of_$_state_machine__26573__auto____0;
canastcljs$drop_file_stream$get_contents_of_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$get_contents_of_$_state_machine__26573__auto____1;
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto__))
})();
var state__26664__auto__ = (function (){var statearr_29312 = f__26663__auto__.call(null);
(statearr_29312[(6)] = c__26662__auto__);

return statearr_29312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto__))
);

return c__26662__auto__;
});
canastcljs.drop_file_stream.lies_historie = (function canastcljs$drop_file_stream$lies_historie(f_name,w,ziel){
var c__26662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto__){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto__){
return (function (state_29329){
var state_val_29330 = (state_29329[(1)]);
if((state_val_29330 === (1))){
var inst_29315 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_29316 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_29317 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_29318 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_29315,"text/plain; charset=utf-8"];
var inst_29319 = cljs.core.PersistentHashMap.fromArrays(inst_29317,inst_29318);
var inst_29320 = [false,inst_29319];
var inst_29321 = cljs.core.PersistentHashMap.fromArrays(inst_29316,inst_29320);
var inst_29322 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_29321);
var state_29329__$1 = state_29329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29329__$1,(2),inst_29322);
} else {
if((state_val_29330 === (2))){
var inst_29324 = (state_29329[(2)]);
var inst_29325 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29324);
var inst_29326 = cljs.reader.read_string.call(null,inst_29325);
var inst_29327 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_29326);
var state_29329__$1 = state_29329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29329__$1,inst_29327);
} else {
return null;
}
}
});})(c__26662__auto__))
;
return ((function (switch__26572__auto__,c__26662__auto__){
return (function() {
var canastcljs$drop_file_stream$lies_historie_$_state_machine__26573__auto__ = null;
var canastcljs$drop_file_stream$lies_historie_$_state_machine__26573__auto____0 = (function (){
var statearr_29331 = [null,null,null,null,null,null,null];
(statearr_29331[(0)] = canastcljs$drop_file_stream$lies_historie_$_state_machine__26573__auto__);

(statearr_29331[(1)] = (1));

return statearr_29331;
});
var canastcljs$drop_file_stream$lies_historie_$_state_machine__26573__auto____1 = (function (state_29329){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_29329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e29332){if((e29332 instanceof Object)){
var ex__26576__auto__ = e29332;
var statearr_29333_29335 = state_29329;
(statearr_29333_29335[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29336 = state_29329;
state_29329 = G__29336;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
canastcljs$drop_file_stream$lies_historie_$_state_machine__26573__auto__ = function(state_29329){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$lies_historie_$_state_machine__26573__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$lies_historie_$_state_machine__26573__auto____1.call(this,state_29329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$lies_historie_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$lies_historie_$_state_machine__26573__auto____0;
canastcljs$drop_file_stream$lies_historie_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$lies_historie_$_state_machine__26573__auto____1;
return canastcljs$drop_file_stream$lies_historie_$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto__))
})();
var state__26664__auto__ = (function (){var statearr_29334 = f__26663__auto__.call(null);
(statearr_29334[(6)] = c__26662__auto__);

return statearr_29334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto__))
);

return c__26662__auto__;
});
canastcljs.drop_file_stream.lies_welt = (function canastcljs$drop_file_stream$lies_welt(f_name,w){
var c__26662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto__){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto__){
return (function (state_29351){
var state_val_29352 = (state_29351[(1)]);
if((state_val_29352 === (1))){
var inst_29337 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_29338 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_29339 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_29340 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_29337,"text/plain; charset=utf-8"];
var inst_29341 = cljs.core.PersistentHashMap.fromArrays(inst_29339,inst_29340);
var inst_29342 = [false,inst_29341];
var inst_29343 = cljs.core.PersistentHashMap.fromArrays(inst_29338,inst_29342);
var inst_29344 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_29343);
var state_29351__$1 = state_29351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29351__$1,(2),inst_29344);
} else {
if((state_val_29352 === (2))){
var inst_29346 = (state_29351[(2)]);
var inst_29347 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29346);
var inst_29348 = cljs.reader.read_string.call(null,inst_29347);
var inst_29349 = cljs.core.reset_BANG_.call(null,w,inst_29348);
var state_29351__$1 = state_29351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29351__$1,inst_29349);
} else {
return null;
}
}
});})(c__26662__auto__))
;
return ((function (switch__26572__auto__,c__26662__auto__){
return (function() {
var canastcljs$drop_file_stream$lies_welt_$_state_machine__26573__auto__ = null;
var canastcljs$drop_file_stream$lies_welt_$_state_machine__26573__auto____0 = (function (){
var statearr_29353 = [null,null,null,null,null,null,null];
(statearr_29353[(0)] = canastcljs$drop_file_stream$lies_welt_$_state_machine__26573__auto__);

(statearr_29353[(1)] = (1));

return statearr_29353;
});
var canastcljs$drop_file_stream$lies_welt_$_state_machine__26573__auto____1 = (function (state_29351){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_29351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e29354){if((e29354 instanceof Object)){
var ex__26576__auto__ = e29354;
var statearr_29355_29357 = state_29351;
(statearr_29355_29357[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29358 = state_29351;
state_29351 = G__29358;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
canastcljs$drop_file_stream$lies_welt_$_state_machine__26573__auto__ = function(state_29351){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$lies_welt_$_state_machine__26573__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$lies_welt_$_state_machine__26573__auto____1.call(this,state_29351);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$lies_welt_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$lies_welt_$_state_machine__26573__auto____0;
canastcljs$drop_file_stream$lies_welt_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$lies_welt_$_state_machine__26573__auto____1;
return canastcljs$drop_file_stream$lies_welt_$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto__))
})();
var state__26664__auto__ = (function (){var statearr_29356 = f__26663__auto__.call(null);
(statearr_29356[(6)] = c__26662__auto__);

return statearr_29356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto__))
);

return c__26662__auto__;
});
canastcljs.drop_file_stream.write_text = (function canastcljs$drop_file_stream$write_text(text,f_name){
var c__26662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto__){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto__){
return (function (state_29370){
var state_val_29371 = (state_29370[(1)]);
if((state_val_29371 === (1))){
var inst_29359 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_29360 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_29361 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_29362 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_29359,"application/octet-stream"];
var inst_29363 = cljs.core.PersistentHashMap.fromArrays(inst_29361,inst_29362);
var inst_29364 = [false,inst_29363,text];
var inst_29365 = cljs.core.PersistentHashMap.fromArrays(inst_29360,inst_29364);
var inst_29366 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_29365);
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29370__$1,(2),inst_29366);
} else {
if((state_val_29371 === (2))){
var inst_29368 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29370__$1,inst_29368);
} else {
return null;
}
}
});})(c__26662__auto__))
;
return ((function (switch__26572__auto__,c__26662__auto__){
return (function() {
var canastcljs$drop_file_stream$write_text_$_state_machine__26573__auto__ = null;
var canastcljs$drop_file_stream$write_text_$_state_machine__26573__auto____0 = (function (){
var statearr_29372 = [null,null,null,null,null,null,null];
(statearr_29372[(0)] = canastcljs$drop_file_stream$write_text_$_state_machine__26573__auto__);

(statearr_29372[(1)] = (1));

return statearr_29372;
});
var canastcljs$drop_file_stream$write_text_$_state_machine__26573__auto____1 = (function (state_29370){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_29370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e29373){if((e29373 instanceof Object)){
var ex__26576__auto__ = e29373;
var statearr_29374_29376 = state_29370;
(statearr_29374_29376[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29377 = state_29370;
state_29370 = G__29377;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
canastcljs$drop_file_stream$write_text_$_state_machine__26573__auto__ = function(state_29370){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$write_text_$_state_machine__26573__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$write_text_$_state_machine__26573__auto____1.call(this,state_29370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$write_text_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$write_text_$_state_machine__26573__auto____0;
canastcljs$drop_file_stream$write_text_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$write_text_$_state_machine__26573__auto____1;
return canastcljs$drop_file_stream$write_text_$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto__))
})();
var state__26664__auto__ = (function (){var statearr_29375 = f__26663__auto__.call(null);
(statearr_29375[(6)] = c__26662__auto__);

return statearr_29375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto__))
);

return c__26662__auto__;
});
canastcljs.drop_file_stream.log_neues_spiel = (function canastcljs$drop_file_stream$log_neues_spiel(f_name,w,ziel){
var c__26662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto__){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto__){
return (function (state_29396){
var state_val_29397 = (state_29396[(1)]);
if((state_val_29397 === (1))){
var inst_29378 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_29379 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_29380 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_29381 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_29378,"text/plain; charset=utf-8"];
var inst_29382 = cljs.core.PersistentHashMap.fromArrays(inst_29380,inst_29381);
var inst_29383 = [false,inst_29382];
var inst_29384 = cljs.core.PersistentHashMap.fromArrays(inst_29379,inst_29383);
var inst_29385 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_29384);
var state_29396__$1 = state_29396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29396__$1,(2),inst_29385);
} else {
if((state_val_29397 === (2))){
var inst_29387 = (state_29396[(2)]);
var inst_29388 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29387);
var inst_29389 = (new Date());
var inst_29390 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29388),"Neues Spiel ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29389),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
var inst_29391 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_29390);
var inst_29392 = cljs.core.deref.call(null,w);
var inst_29393 = ziel.call(null,inst_29392);
var inst_29394 = canastcljs.drop_file_stream.write_text.call(null,inst_29393,"logs.txt");
var state_29396__$1 = (function (){var statearr_29398 = state_29396;
(statearr_29398[(7)] = inst_29391);

return statearr_29398;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29396__$1,inst_29394);
} else {
return null;
}
}
});})(c__26662__auto__))
;
return ((function (switch__26572__auto__,c__26662__auto__){
return (function() {
var canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26573__auto__ = null;
var canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26573__auto____0 = (function (){
var statearr_29399 = [null,null,null,null,null,null,null,null];
(statearr_29399[(0)] = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26573__auto__);

(statearr_29399[(1)] = (1));

return statearr_29399;
});
var canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26573__auto____1 = (function (state_29396){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_29396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e29400){if((e29400 instanceof Object)){
var ex__26576__auto__ = e29400;
var statearr_29401_29403 = state_29396;
(statearr_29401_29403[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29404 = state_29396;
state_29396 = G__29404;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26573__auto__ = function(state_29396){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26573__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26573__auto____1.call(this,state_29396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26573__auto____0;
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26573__auto____1;
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto__))
})();
var state__26664__auto__ = (function (){var statearr_29402 = f__26663__auto__.call(null);
(statearr_29402[(6)] = c__26662__auto__);

return statearr_29402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto__))
);

return c__26662__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map?rel=1530742096697
