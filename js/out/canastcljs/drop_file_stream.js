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
return (function (state_29263){
var state_val_29264 = (state_29263[(1)]);
if((state_val_29264 === (1))){
var inst_29246 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_29247 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_29248 = ["Authorization"];
var inst_29249 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_29250 = cljs.core.PersistentHashMap.fromArrays(inst_29248,inst_29249);
var inst_29251 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_29252 = [inst_29246];
var inst_29253 = cljs.core.PersistentHashMap.fromArrays(inst_29251,inst_29252);
var inst_29254 = [false,inst_29250,inst_29253];
var inst_29255 = cljs.core.PersistentHashMap.fromArrays(inst_29247,inst_29254);
var inst_29256 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/get_metadata",inst_29255);
var state_29263__$1 = state_29263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29263__$1,(2),inst_29256);
} else {
if((state_val_29264 === (2))){
var inst_29258 = (state_29263[(2)]);
var inst_29259 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_29258);
var inst_29260 = cljs.core._EQ_.call(null,inst_29259,(200));
var inst_29261 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_29260);
var state_29263__$1 = state_29263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29263__$1,inst_29261);
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
var statearr_29265 = [null,null,null,null,null,null,null];
(statearr_29265[(0)] = canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto__);

(statearr_29265[(1)] = (1));

return statearr_29265;
});
var canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto____1 = (function (state_29263){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_29263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e29266){if((e29266 instanceof Object)){
var ex__26577__auto__ = e29266;
var statearr_29267_29269 = state_29263;
(statearr_29267_29269[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29270 = state_29263;
state_29263 = G__29270;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto__ = function(state_29263){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto____1.call(this,state_29263);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto____0;
canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto____1;
return canastcljs$drop_file_stream$exists_file_named_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_29268 = f__26664__auto__.call(null);
(statearr_29268[(6)] = c__26663__auto__);

return statearr_29268;
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
return (function (state_29286){
var state_val_29287 = (state_29286[(1)]);
if((state_val_29287 === (1))){
var inst_29271 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_29272 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_29273 = ["Authorization"];
var inst_29274 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_29275 = cljs.core.PersistentHashMap.fromArrays(inst_29273,inst_29274);
var inst_29276 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_29277 = [inst_29271];
var inst_29278 = cljs.core.PersistentHashMap.fromArrays(inst_29276,inst_29277);
var inst_29279 = [false,inst_29275,inst_29278];
var inst_29280 = cljs.core.PersistentHashMap.fromArrays(inst_29272,inst_29279);
var inst_29281 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete_v2",inst_29280);
var state_29286__$1 = state_29286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29286__$1,(2),inst_29281);
} else {
if((state_val_29287 === (2))){
var inst_29283 = (state_29286[(2)]);
var inst_29284 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,false);
var state_29286__$1 = (function (){var statearr_29288 = state_29286;
(statearr_29288[(7)] = inst_29283);

return statearr_29288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29286__$1,inst_29284);
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
var statearr_29289 = [null,null,null,null,null,null,null,null];
(statearr_29289[(0)] = canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto__);

(statearr_29289[(1)] = (1));

return statearr_29289;
});
var canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto____1 = (function (state_29286){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_29286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e29290){if((e29290 instanceof Object)){
var ex__26577__auto__ = e29290;
var statearr_29291_29293 = state_29286;
(statearr_29291_29293[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29294 = state_29286;
state_29286 = G__29294;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto__ = function(state_29286){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto____1.call(this,state_29286);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto____0;
canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto____1;
return canastcljs$drop_file_stream$delete_file_named_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_29292 = f__26664__auto__.call(null);
(statearr_29292[(6)] = c__26663__auto__);

return statearr_29292;
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
return (function (state_29308){
var state_val_29309 = (state_29308[(1)]);
if((state_val_29309 === (1))){
var inst_29295 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_29296 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_29297 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_29298 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_29295,"text/plain; charset=utf-8"];
var inst_29299 = cljs.core.PersistentHashMap.fromArrays(inst_29297,inst_29298);
var inst_29300 = [false,inst_29299];
var inst_29301 = cljs.core.PersistentHashMap.fromArrays(inst_29296,inst_29300);
var inst_29302 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_29301);
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29308__$1,(2),inst_29302);
} else {
if((state_val_29309 === (2))){
var inst_29304 = (state_29308[(2)]);
var inst_29305 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29304);
var inst_29306 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_29305);
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29308__$1,inst_29306);
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
var statearr_29310 = [null,null,null,null,null,null,null];
(statearr_29310[(0)] = canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto__);

(statearr_29310[(1)] = (1));

return statearr_29310;
});
var canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto____1 = (function (state_29308){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_29308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e29311){if((e29311 instanceof Object)){
var ex__26577__auto__ = e29311;
var statearr_29312_29314 = state_29308;
(statearr_29312_29314[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29315 = state_29308;
state_29308 = G__29315;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto__ = function(state_29308){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto____1.call(this,state_29308);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto____0;
canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto____1;
return canastcljs$drop_file_stream$get_contents_of_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_29313 = f__26664__auto__.call(null);
(statearr_29313[(6)] = c__26663__auto__);

return statearr_29313;
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
return (function (state_29330){
var state_val_29331 = (state_29330[(1)]);
if((state_val_29331 === (1))){
var inst_29316 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_29317 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_29318 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_29319 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_29316,"text/plain; charset=utf-8"];
var inst_29320 = cljs.core.PersistentHashMap.fromArrays(inst_29318,inst_29319);
var inst_29321 = [false,inst_29320];
var inst_29322 = cljs.core.PersistentHashMap.fromArrays(inst_29317,inst_29321);
var inst_29323 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_29322);
var state_29330__$1 = state_29330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29330__$1,(2),inst_29323);
} else {
if((state_val_29331 === (2))){
var inst_29325 = (state_29330[(2)]);
var inst_29326 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29325);
var inst_29327 = cljs.reader.read_string.call(null,inst_29326);
var inst_29328 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_29327);
var state_29330__$1 = state_29330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29330__$1,inst_29328);
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
var statearr_29332 = [null,null,null,null,null,null,null];
(statearr_29332[(0)] = canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto__);

(statearr_29332[(1)] = (1));

return statearr_29332;
});
var canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto____1 = (function (state_29330){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_29330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e29333){if((e29333 instanceof Object)){
var ex__26577__auto__ = e29333;
var statearr_29334_29336 = state_29330;
(statearr_29334_29336[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29337 = state_29330;
state_29330 = G__29337;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto__ = function(state_29330){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto____1.call(this,state_29330);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto____0;
canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto____1;
return canastcljs$drop_file_stream$lies_historie_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_29335 = f__26664__auto__.call(null);
(statearr_29335[(6)] = c__26663__auto__);

return statearr_29335;
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
return (function (state_29352){
var state_val_29353 = (state_29352[(1)]);
if((state_val_29353 === (1))){
var inst_29338 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_29339 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_29340 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_29341 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_29338,"text/plain; charset=utf-8"];
var inst_29342 = cljs.core.PersistentHashMap.fromArrays(inst_29340,inst_29341);
var inst_29343 = [false,inst_29342];
var inst_29344 = cljs.core.PersistentHashMap.fromArrays(inst_29339,inst_29343);
var inst_29345 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_29344);
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29352__$1,(2),inst_29345);
} else {
if((state_val_29353 === (2))){
var inst_29347 = (state_29352[(2)]);
var inst_29348 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29347);
var inst_29349 = cljs.reader.read_string.call(null,inst_29348);
var inst_29350 = cljs.core.reset_BANG_.call(null,w,inst_29349);
var state_29352__$1 = state_29352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29352__$1,inst_29350);
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
var statearr_29354 = [null,null,null,null,null,null,null];
(statearr_29354[(0)] = canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto__);

(statearr_29354[(1)] = (1));

return statearr_29354;
});
var canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto____1 = (function (state_29352){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_29352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e29355){if((e29355 instanceof Object)){
var ex__26577__auto__ = e29355;
var statearr_29356_29358 = state_29352;
(statearr_29356_29358[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29359 = state_29352;
state_29352 = G__29359;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto__ = function(state_29352){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto____1.call(this,state_29352);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto____0;
canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto____1;
return canastcljs$drop_file_stream$lies_welt_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_29357 = f__26664__auto__.call(null);
(statearr_29357[(6)] = c__26663__auto__);

return statearr_29357;
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
return (function (state_29371){
var state_val_29372 = (state_29371[(1)]);
if((state_val_29372 === (1))){
var inst_29360 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_29361 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_29362 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_29363 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_29360,"application/octet-stream"];
var inst_29364 = cljs.core.PersistentHashMap.fromArrays(inst_29362,inst_29363);
var inst_29365 = [false,inst_29364,text];
var inst_29366 = cljs.core.PersistentHashMap.fromArrays(inst_29361,inst_29365);
var inst_29367 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_29366);
var state_29371__$1 = state_29371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29371__$1,(2),inst_29367);
} else {
if((state_val_29372 === (2))){
var inst_29369 = (state_29371[(2)]);
var state_29371__$1 = state_29371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29371__$1,inst_29369);
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
var statearr_29373 = [null,null,null,null,null,null,null];
(statearr_29373[(0)] = canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto__);

(statearr_29373[(1)] = (1));

return statearr_29373;
});
var canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto____1 = (function (state_29371){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_29371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e29374){if((e29374 instanceof Object)){
var ex__26577__auto__ = e29374;
var statearr_29375_29377 = state_29371;
(statearr_29375_29377[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29378 = state_29371;
state_29371 = G__29378;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto__ = function(state_29371){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto____1.call(this,state_29371);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto____0;
canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto____1;
return canastcljs$drop_file_stream$write_text_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_29376 = f__26664__auto__.call(null);
(statearr_29376[(6)] = c__26663__auto__);

return statearr_29376;
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
return (function (state_29397){
var state_val_29398 = (state_29397[(1)]);
if((state_val_29398 === (1))){
var inst_29379 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_29380 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_29381 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_29382 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_29379,"text/plain; charset=utf-8"];
var inst_29383 = cljs.core.PersistentHashMap.fromArrays(inst_29381,inst_29382);
var inst_29384 = [false,inst_29383];
var inst_29385 = cljs.core.PersistentHashMap.fromArrays(inst_29380,inst_29384);
var inst_29386 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_29385);
var state_29397__$1 = state_29397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29397__$1,(2),inst_29386);
} else {
if((state_val_29398 === (2))){
var inst_29388 = (state_29397[(2)]);
var inst_29389 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29388);
var inst_29390 = (new Date());
var inst_29391 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29389),"Neues Spiel ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29390),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
var inst_29392 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_29391);
var inst_29393 = cljs.core.deref.call(null,w);
var inst_29394 = ziel.call(null,inst_29393);
var inst_29395 = canastcljs.drop_file_stream.write_text.call(null,inst_29394,"logs.txt");
var state_29397__$1 = (function (){var statearr_29399 = state_29397;
(statearr_29399[(7)] = inst_29392);

return statearr_29399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29397__$1,inst_29395);
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
var statearr_29400 = [null,null,null,null,null,null,null,null];
(statearr_29400[(0)] = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto__);

(statearr_29400[(1)] = (1));

return statearr_29400;
});
var canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto____1 = (function (state_29397){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_29397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e29401){if((e29401 instanceof Object)){
var ex__26577__auto__ = e29401;
var statearr_29402_29404 = state_29397;
(statearr_29402_29404[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29405 = state_29397;
state_29397 = G__29405;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto__ = function(state_29397){
switch(arguments.length){
case 0:
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto____0.call(this);
case 1:
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto____1.call(this,state_29397);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto____0;
canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto____1;
return canastcljs$drop_file_stream$log_neues_spiel_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_29403 = f__26664__auto__.call(null);
(statearr_29403[(6)] = c__26663__auto__);

return statearr_29403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__))
);

return c__26663__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map?rel=1530972546055
