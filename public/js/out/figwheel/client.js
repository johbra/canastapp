// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e31411){if((e31411 instanceof Error)){
var e = e31411;
return "Error: Unable to stringify";
} else {
throw e31411;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31414 = arguments.length;
switch (G__31414) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31412_SHARP_){
if(typeof p1__31412_SHARP_ === 'string'){
return p1__31412_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31412_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31417 = arguments.length;
var i__4500__auto___31418 = (0);
while(true){
if((i__4500__auto___31418 < len__4499__auto___31417)){
args__4502__auto__.push((arguments[i__4500__auto___31418]));

var G__31419 = (i__4500__auto___31418 + (1));
i__4500__auto___31418 = G__31419;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31416){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31416));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31421 = arguments.length;
var i__4500__auto___31422 = (0);
while(true){
if((i__4500__auto___31422 < len__4499__auto___31421)){
args__4502__auto__.push((arguments[i__4500__auto___31422]));

var G__31423 = (i__4500__auto___31422 + (1));
i__4500__auto___31422 = G__31423;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31420){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31420));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31424){
var map__31425 = p__31424;
var map__31425__$1 = ((((!((map__31425 == null)))?(((((map__31425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31425):map__31425);
var message = cljs.core.get.call(null,map__31425__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31425__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26663__auto___31504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___31504,ch){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___31504,ch){
return (function (state_31476){
var state_val_31477 = (state_31476[(1)]);
if((state_val_31477 === (7))){
var inst_31472 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
var statearr_31478_31505 = state_31476__$1;
(statearr_31478_31505[(2)] = inst_31472);

(statearr_31478_31505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (1))){
var state_31476__$1 = state_31476;
var statearr_31479_31506 = state_31476__$1;
(statearr_31479_31506[(2)] = null);

(statearr_31479_31506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (4))){
var inst_31429 = (state_31476[(7)]);
var inst_31429__$1 = (state_31476[(2)]);
var state_31476__$1 = (function (){var statearr_31480 = state_31476;
(statearr_31480[(7)] = inst_31429__$1);

return statearr_31480;
})();
if(cljs.core.truth_(inst_31429__$1)){
var statearr_31481_31507 = state_31476__$1;
(statearr_31481_31507[(1)] = (5));

} else {
var statearr_31482_31508 = state_31476__$1;
(statearr_31482_31508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (15))){
var inst_31436 = (state_31476[(8)]);
var inst_31451 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31436);
var inst_31452 = cljs.core.first.call(null,inst_31451);
var inst_31453 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31452);
var inst_31454 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31453)].join('');
var inst_31455 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31454);
var state_31476__$1 = state_31476;
var statearr_31483_31509 = state_31476__$1;
(statearr_31483_31509[(2)] = inst_31455);

(statearr_31483_31509[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (13))){
var inst_31460 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
var statearr_31484_31510 = state_31476__$1;
(statearr_31484_31510[(2)] = inst_31460);

(statearr_31484_31510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (6))){
var state_31476__$1 = state_31476;
var statearr_31485_31511 = state_31476__$1;
(statearr_31485_31511[(2)] = null);

(statearr_31485_31511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (17))){
var inst_31458 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
var statearr_31486_31512 = state_31476__$1;
(statearr_31486_31512[(2)] = inst_31458);

(statearr_31486_31512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (3))){
var inst_31474 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31476__$1,inst_31474);
} else {
if((state_val_31477 === (12))){
var inst_31435 = (state_31476[(9)]);
var inst_31449 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31435,opts);
var state_31476__$1 = state_31476;
if(cljs.core.truth_(inst_31449)){
var statearr_31487_31513 = state_31476__$1;
(statearr_31487_31513[(1)] = (15));

} else {
var statearr_31488_31514 = state_31476__$1;
(statearr_31488_31514[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (2))){
var state_31476__$1 = state_31476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31476__$1,(4),ch);
} else {
if((state_val_31477 === (11))){
var inst_31436 = (state_31476[(8)]);
var inst_31441 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31442 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31436);
var inst_31443 = cljs.core.async.timeout.call(null,(1000));
var inst_31444 = [inst_31442,inst_31443];
var inst_31445 = (new cljs.core.PersistentVector(null,2,(5),inst_31441,inst_31444,null));
var state_31476__$1 = state_31476;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31476__$1,(14),inst_31445);
} else {
if((state_val_31477 === (9))){
var inst_31436 = (state_31476[(8)]);
var inst_31462 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31463 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31436);
var inst_31464 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31463);
var inst_31465 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31464)].join('');
var inst_31466 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31465);
var state_31476__$1 = (function (){var statearr_31489 = state_31476;
(statearr_31489[(10)] = inst_31462);

return statearr_31489;
})();
var statearr_31490_31515 = state_31476__$1;
(statearr_31490_31515[(2)] = inst_31466);

(statearr_31490_31515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (5))){
var inst_31429 = (state_31476[(7)]);
var inst_31431 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31432 = (new cljs.core.PersistentArrayMap(null,2,inst_31431,null));
var inst_31433 = (new cljs.core.PersistentHashSet(null,inst_31432,null));
var inst_31434 = figwheel.client.focus_msgs.call(null,inst_31433,inst_31429);
var inst_31435 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31434);
var inst_31436 = cljs.core.first.call(null,inst_31434);
var inst_31437 = figwheel.client.autoload_QMARK_.call(null);
var state_31476__$1 = (function (){var statearr_31491 = state_31476;
(statearr_31491[(9)] = inst_31435);

(statearr_31491[(8)] = inst_31436);

return statearr_31491;
})();
if(cljs.core.truth_(inst_31437)){
var statearr_31492_31516 = state_31476__$1;
(statearr_31492_31516[(1)] = (8));

} else {
var statearr_31493_31517 = state_31476__$1;
(statearr_31493_31517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (14))){
var inst_31447 = (state_31476[(2)]);
var state_31476__$1 = state_31476;
var statearr_31494_31518 = state_31476__$1;
(statearr_31494_31518[(2)] = inst_31447);

(statearr_31494_31518[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (16))){
var state_31476__$1 = state_31476;
var statearr_31495_31519 = state_31476__$1;
(statearr_31495_31519[(2)] = null);

(statearr_31495_31519[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (10))){
var inst_31468 = (state_31476[(2)]);
var state_31476__$1 = (function (){var statearr_31496 = state_31476;
(statearr_31496[(11)] = inst_31468);

return statearr_31496;
})();
var statearr_31497_31520 = state_31476__$1;
(statearr_31497_31520[(2)] = null);

(statearr_31497_31520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31477 === (8))){
var inst_31435 = (state_31476[(9)]);
var inst_31439 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31435,opts);
var state_31476__$1 = state_31476;
if(cljs.core.truth_(inst_31439)){
var statearr_31498_31521 = state_31476__$1;
(statearr_31498_31521[(1)] = (11));

} else {
var statearr_31499_31522 = state_31476__$1;
(statearr_31499_31522[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26663__auto___31504,ch))
;
return ((function (switch__26573__auto__,c__26663__auto___31504,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26574__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26574__auto____0 = (function (){
var statearr_31500 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31500[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26574__auto__);

(statearr_31500[(1)] = (1));

return statearr_31500;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26574__auto____1 = (function (state_31476){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_31476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e31501){if((e31501 instanceof Object)){
var ex__26577__auto__ = e31501;
var statearr_31502_31523 = state_31476;
(statearr_31502_31523[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31524 = state_31476;
state_31476 = G__31524;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26574__auto__ = function(state_31476){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26574__auto____1.call(this,state_31476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26574__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26574__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___31504,ch))
})();
var state__26665__auto__ = (function (){var statearr_31503 = f__26664__auto__.call(null);
(statearr_31503[(6)] = c__26663__auto___31504);

return statearr_31503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___31504,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31525_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31525_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31529 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31529){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31527 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31528 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31527,_STAR_print_fn_STAR_31528,sb,base_path_31529){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31527,_STAR_print_fn_STAR_31528,sb,base_path_31529))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31528;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31527;
}}catch (e31526){if((e31526 instanceof Error)){
var e = e31526;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31529], null));
} else {
var e = e31526;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31529))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31530){
var map__31531 = p__31530;
var map__31531__$1 = ((((!((map__31531 == null)))?(((((map__31531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31531):map__31531);
var opts = map__31531__$1;
var build_id = cljs.core.get.call(null,map__31531__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31531,map__31531__$1,opts,build_id){
return (function (p__31533){
var vec__31534 = p__31533;
var seq__31535 = cljs.core.seq.call(null,vec__31534);
var first__31536 = cljs.core.first.call(null,seq__31535);
var seq__31535__$1 = cljs.core.next.call(null,seq__31535);
var map__31537 = first__31536;
var map__31537__$1 = ((((!((map__31537 == null)))?(((((map__31537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31537):map__31537);
var msg = map__31537__$1;
var msg_name = cljs.core.get.call(null,map__31537__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31535__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31534,seq__31535,first__31536,seq__31535__$1,map__31537,map__31537__$1,msg,msg_name,_,map__31531,map__31531__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31534,seq__31535,first__31536,seq__31535__$1,map__31537,map__31537__$1,msg,msg_name,_,map__31531,map__31531__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31531,map__31531__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31539){
var vec__31540 = p__31539;
var seq__31541 = cljs.core.seq.call(null,vec__31540);
var first__31542 = cljs.core.first.call(null,seq__31541);
var seq__31541__$1 = cljs.core.next.call(null,seq__31541);
var map__31543 = first__31542;
var map__31543__$1 = ((((!((map__31543 == null)))?(((((map__31543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31543):map__31543);
var msg = map__31543__$1;
var msg_name = cljs.core.get.call(null,map__31543__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31541__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31545){
var map__31546 = p__31545;
var map__31546__$1 = ((((!((map__31546 == null)))?(((((map__31546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31546):map__31546);
var on_compile_warning = cljs.core.get.call(null,map__31546__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31546__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31546,map__31546__$1,on_compile_warning,on_compile_fail){
return (function (p__31548){
var vec__31549 = p__31548;
var seq__31550 = cljs.core.seq.call(null,vec__31549);
var first__31551 = cljs.core.first.call(null,seq__31550);
var seq__31550__$1 = cljs.core.next.call(null,seq__31550);
var map__31552 = first__31551;
var map__31552__$1 = ((((!((map__31552 == null)))?(((((map__31552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31552):map__31552);
var msg = map__31552__$1;
var msg_name = cljs.core.get.call(null,map__31552__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31550__$1;
var pred__31554 = cljs.core._EQ_;
var expr__31555 = msg_name;
if(cljs.core.truth_(pred__31554.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31555))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31554.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31555))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31546,map__31546__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__,msg_hist,msg_names,msg){
return (function (state_31644){
var state_val_31645 = (state_31644[(1)]);
if((state_val_31645 === (7))){
var inst_31564 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
if(cljs.core.truth_(inst_31564)){
var statearr_31646_31693 = state_31644__$1;
(statearr_31646_31693[(1)] = (8));

} else {
var statearr_31647_31694 = state_31644__$1;
(statearr_31647_31694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (20))){
var inst_31638 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31648_31695 = state_31644__$1;
(statearr_31648_31695[(2)] = inst_31638);

(statearr_31648_31695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (27))){
var inst_31634 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31649_31696 = state_31644__$1;
(statearr_31649_31696[(2)] = inst_31634);

(statearr_31649_31696[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (1))){
var inst_31557 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31644__$1 = state_31644;
if(cljs.core.truth_(inst_31557)){
var statearr_31650_31697 = state_31644__$1;
(statearr_31650_31697[(1)] = (2));

} else {
var statearr_31651_31698 = state_31644__$1;
(statearr_31651_31698[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (24))){
var inst_31636 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31652_31699 = state_31644__$1;
(statearr_31652_31699[(2)] = inst_31636);

(statearr_31652_31699[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (4))){
var inst_31642 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31644__$1,inst_31642);
} else {
if((state_val_31645 === (15))){
var inst_31640 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31653_31700 = state_31644__$1;
(statearr_31653_31700[(2)] = inst_31640);

(statearr_31653_31700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (21))){
var inst_31593 = (state_31644[(2)]);
var inst_31594 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31595 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31594);
var state_31644__$1 = (function (){var statearr_31654 = state_31644;
(statearr_31654[(7)] = inst_31593);

return statearr_31654;
})();
var statearr_31655_31701 = state_31644__$1;
(statearr_31655_31701[(2)] = inst_31595);

(statearr_31655_31701[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (31))){
var inst_31623 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31644__$1 = state_31644;
if(cljs.core.truth_(inst_31623)){
var statearr_31656_31702 = state_31644__$1;
(statearr_31656_31702[(1)] = (34));

} else {
var statearr_31657_31703 = state_31644__$1;
(statearr_31657_31703[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (32))){
var inst_31632 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31658_31704 = state_31644__$1;
(statearr_31658_31704[(2)] = inst_31632);

(statearr_31658_31704[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (33))){
var inst_31619 = (state_31644[(2)]);
var inst_31620 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31621 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31620);
var state_31644__$1 = (function (){var statearr_31659 = state_31644;
(statearr_31659[(8)] = inst_31619);

return statearr_31659;
})();
var statearr_31660_31705 = state_31644__$1;
(statearr_31660_31705[(2)] = inst_31621);

(statearr_31660_31705[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (13))){
var inst_31578 = figwheel.client.heads_up.clear.call(null);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31644__$1,(16),inst_31578);
} else {
if((state_val_31645 === (22))){
var inst_31599 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31600 = figwheel.client.heads_up.append_warning_message.call(null,inst_31599);
var state_31644__$1 = state_31644;
var statearr_31661_31706 = state_31644__$1;
(statearr_31661_31706[(2)] = inst_31600);

(statearr_31661_31706[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (36))){
var inst_31630 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31662_31707 = state_31644__$1;
(statearr_31662_31707[(2)] = inst_31630);

(statearr_31662_31707[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (29))){
var inst_31610 = (state_31644[(2)]);
var inst_31611 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31612 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31611);
var state_31644__$1 = (function (){var statearr_31663 = state_31644;
(statearr_31663[(9)] = inst_31610);

return statearr_31663;
})();
var statearr_31664_31708 = state_31644__$1;
(statearr_31664_31708[(2)] = inst_31612);

(statearr_31664_31708[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (6))){
var inst_31559 = (state_31644[(10)]);
var state_31644__$1 = state_31644;
var statearr_31665_31709 = state_31644__$1;
(statearr_31665_31709[(2)] = inst_31559);

(statearr_31665_31709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (28))){
var inst_31606 = (state_31644[(2)]);
var inst_31607 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31608 = figwheel.client.heads_up.display_warning.call(null,inst_31607);
var state_31644__$1 = (function (){var statearr_31666 = state_31644;
(statearr_31666[(11)] = inst_31606);

return statearr_31666;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31644__$1,(29),inst_31608);
} else {
if((state_val_31645 === (25))){
var inst_31604 = figwheel.client.heads_up.clear.call(null);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31644__$1,(28),inst_31604);
} else {
if((state_val_31645 === (34))){
var inst_31625 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31644__$1,(37),inst_31625);
} else {
if((state_val_31645 === (17))){
var inst_31584 = (state_31644[(2)]);
var inst_31585 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31586 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31585);
var state_31644__$1 = (function (){var statearr_31667 = state_31644;
(statearr_31667[(12)] = inst_31584);

return statearr_31667;
})();
var statearr_31668_31710 = state_31644__$1;
(statearr_31668_31710[(2)] = inst_31586);

(statearr_31668_31710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (3))){
var inst_31576 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31644__$1 = state_31644;
if(cljs.core.truth_(inst_31576)){
var statearr_31669_31711 = state_31644__$1;
(statearr_31669_31711[(1)] = (13));

} else {
var statearr_31670_31712 = state_31644__$1;
(statearr_31670_31712[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (12))){
var inst_31572 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31671_31713 = state_31644__$1;
(statearr_31671_31713[(2)] = inst_31572);

(statearr_31671_31713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (2))){
var inst_31559 = (state_31644[(10)]);
var inst_31559__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31644__$1 = (function (){var statearr_31672 = state_31644;
(statearr_31672[(10)] = inst_31559__$1);

return statearr_31672;
})();
if(cljs.core.truth_(inst_31559__$1)){
var statearr_31673_31714 = state_31644__$1;
(statearr_31673_31714[(1)] = (5));

} else {
var statearr_31674_31715 = state_31644__$1;
(statearr_31674_31715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (23))){
var inst_31602 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31644__$1 = state_31644;
if(cljs.core.truth_(inst_31602)){
var statearr_31675_31716 = state_31644__$1;
(statearr_31675_31716[(1)] = (25));

} else {
var statearr_31676_31717 = state_31644__$1;
(statearr_31676_31717[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (35))){
var state_31644__$1 = state_31644;
var statearr_31677_31718 = state_31644__$1;
(statearr_31677_31718[(2)] = null);

(statearr_31677_31718[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (19))){
var inst_31597 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31644__$1 = state_31644;
if(cljs.core.truth_(inst_31597)){
var statearr_31678_31719 = state_31644__$1;
(statearr_31678_31719[(1)] = (22));

} else {
var statearr_31679_31720 = state_31644__$1;
(statearr_31679_31720[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (11))){
var inst_31568 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31680_31721 = state_31644__$1;
(statearr_31680_31721[(2)] = inst_31568);

(statearr_31680_31721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (9))){
var inst_31570 = figwheel.client.heads_up.clear.call(null);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31644__$1,(12),inst_31570);
} else {
if((state_val_31645 === (5))){
var inst_31561 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31644__$1 = state_31644;
var statearr_31681_31722 = state_31644__$1;
(statearr_31681_31722[(2)] = inst_31561);

(statearr_31681_31722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (14))){
var inst_31588 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31644__$1 = state_31644;
if(cljs.core.truth_(inst_31588)){
var statearr_31682_31723 = state_31644__$1;
(statearr_31682_31723[(1)] = (18));

} else {
var statearr_31683_31724 = state_31644__$1;
(statearr_31683_31724[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (26))){
var inst_31614 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31644__$1 = state_31644;
if(cljs.core.truth_(inst_31614)){
var statearr_31684_31725 = state_31644__$1;
(statearr_31684_31725[(1)] = (30));

} else {
var statearr_31685_31726 = state_31644__$1;
(statearr_31685_31726[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (16))){
var inst_31580 = (state_31644[(2)]);
var inst_31581 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31582 = figwheel.client.heads_up.display_exception.call(null,inst_31581);
var state_31644__$1 = (function (){var statearr_31686 = state_31644;
(statearr_31686[(13)] = inst_31580);

return statearr_31686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31644__$1,(17),inst_31582);
} else {
if((state_val_31645 === (30))){
var inst_31616 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31617 = figwheel.client.heads_up.display_warning.call(null,inst_31616);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31644__$1,(33),inst_31617);
} else {
if((state_val_31645 === (10))){
var inst_31574 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31687_31727 = state_31644__$1;
(statearr_31687_31727[(2)] = inst_31574);

(statearr_31687_31727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (18))){
var inst_31590 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31591 = figwheel.client.heads_up.display_exception.call(null,inst_31590);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31644__$1,(21),inst_31591);
} else {
if((state_val_31645 === (37))){
var inst_31627 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31688_31728 = state_31644__$1;
(statearr_31688_31728[(2)] = inst_31627);

(statearr_31688_31728[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (8))){
var inst_31566 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31644__$1,(11),inst_31566);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26663__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26573__auto__,c__26663__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto____0 = (function (){
var statearr_31689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31689[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto__);

(statearr_31689[(1)] = (1));

return statearr_31689;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto____1 = (function (state_31644){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_31644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e31690){if((e31690 instanceof Object)){
var ex__26577__auto__ = e31690;
var statearr_31691_31729 = state_31644;
(statearr_31691_31729[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31730 = state_31644;
state_31644 = G__31730;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto__ = function(state_31644){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto____1.call(this,state_31644);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__,msg_hist,msg_names,msg))
})();
var state__26665__auto__ = (function (){var statearr_31692 = f__26664__auto__.call(null);
(statearr_31692[(6)] = c__26663__auto__);

return statearr_31692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__,msg_hist,msg_names,msg))
);

return c__26663__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26663__auto___31759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___31759,ch){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___31759,ch){
return (function (state_31745){
var state_val_31746 = (state_31745[(1)]);
if((state_val_31746 === (1))){
var state_31745__$1 = state_31745;
var statearr_31747_31760 = state_31745__$1;
(statearr_31747_31760[(2)] = null);

(statearr_31747_31760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (2))){
var state_31745__$1 = state_31745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31745__$1,(4),ch);
} else {
if((state_val_31746 === (3))){
var inst_31743 = (state_31745[(2)]);
var state_31745__$1 = state_31745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31745__$1,inst_31743);
} else {
if((state_val_31746 === (4))){
var inst_31733 = (state_31745[(7)]);
var inst_31733__$1 = (state_31745[(2)]);
var state_31745__$1 = (function (){var statearr_31748 = state_31745;
(statearr_31748[(7)] = inst_31733__$1);

return statearr_31748;
})();
if(cljs.core.truth_(inst_31733__$1)){
var statearr_31749_31761 = state_31745__$1;
(statearr_31749_31761[(1)] = (5));

} else {
var statearr_31750_31762 = state_31745__$1;
(statearr_31750_31762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (5))){
var inst_31733 = (state_31745[(7)]);
var inst_31735 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31733);
var state_31745__$1 = state_31745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31745__$1,(8),inst_31735);
} else {
if((state_val_31746 === (6))){
var state_31745__$1 = state_31745;
var statearr_31751_31763 = state_31745__$1;
(statearr_31751_31763[(2)] = null);

(statearr_31751_31763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (7))){
var inst_31741 = (state_31745[(2)]);
var state_31745__$1 = state_31745;
var statearr_31752_31764 = state_31745__$1;
(statearr_31752_31764[(2)] = inst_31741);

(statearr_31752_31764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (8))){
var inst_31737 = (state_31745[(2)]);
var state_31745__$1 = (function (){var statearr_31753 = state_31745;
(statearr_31753[(8)] = inst_31737);

return statearr_31753;
})();
var statearr_31754_31765 = state_31745__$1;
(statearr_31754_31765[(2)] = null);

(statearr_31754_31765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__26663__auto___31759,ch))
;
return ((function (switch__26573__auto__,c__26663__auto___31759,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26574__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26574__auto____0 = (function (){
var statearr_31755 = [null,null,null,null,null,null,null,null,null];
(statearr_31755[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26574__auto__);

(statearr_31755[(1)] = (1));

return statearr_31755;
});
var figwheel$client$heads_up_plugin_$_state_machine__26574__auto____1 = (function (state_31745){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_31745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e31756){if((e31756 instanceof Object)){
var ex__26577__auto__ = e31756;
var statearr_31757_31766 = state_31745;
(statearr_31757_31766[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31767 = state_31745;
state_31745 = G__31767;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26574__auto__ = function(state_31745){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26574__auto____1.call(this,state_31745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26574__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26574__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___31759,ch))
})();
var state__26665__auto__ = (function (){var statearr_31758 = f__26664__auto__.call(null);
(statearr_31758[(6)] = c__26663__auto___31759);

return statearr_31758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___31759,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__){
return (function (state_31773){
var state_val_31774 = (state_31773[(1)]);
if((state_val_31774 === (1))){
var inst_31768 = cljs.core.async.timeout.call(null,(3000));
var state_31773__$1 = state_31773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31773__$1,(2),inst_31768);
} else {
if((state_val_31774 === (2))){
var inst_31770 = (state_31773[(2)]);
var inst_31771 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31773__$1 = (function (){var statearr_31775 = state_31773;
(statearr_31775[(7)] = inst_31770);

return statearr_31775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31773__$1,inst_31771);
} else {
return null;
}
}
});})(c__26663__auto__))
;
return ((function (switch__26573__auto__,c__26663__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26574__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26574__auto____0 = (function (){
var statearr_31776 = [null,null,null,null,null,null,null,null];
(statearr_31776[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26574__auto__);

(statearr_31776[(1)] = (1));

return statearr_31776;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26574__auto____1 = (function (state_31773){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_31773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e31777){if((e31777 instanceof Object)){
var ex__26577__auto__ = e31777;
var statearr_31778_31780 = state_31773;
(statearr_31778_31780[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31781 = state_31773;
state_31773 = G__31781;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26574__auto__ = function(state_31773){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26574__auto____1.call(this,state_31773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26574__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26574__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_31779 = f__26664__auto__.call(null);
(statearr_31779[(6)] = c__26663__auto__);

return statearr_31779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__))
);

return c__26663__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31788){
var state_val_31789 = (state_31788[(1)]);
if((state_val_31789 === (1))){
var inst_31782 = cljs.core.async.timeout.call(null,(2000));
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31788__$1,(2),inst_31782);
} else {
if((state_val_31789 === (2))){
var inst_31784 = (state_31788[(2)]);
var inst_31785 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31786 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31785);
var state_31788__$1 = (function (){var statearr_31790 = state_31788;
(statearr_31790[(7)] = inst_31784);

return statearr_31790;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31788__$1,inst_31786);
} else {
return null;
}
}
});})(c__26663__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26573__auto__,c__26663__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto____0 = (function (){
var statearr_31791 = [null,null,null,null,null,null,null,null];
(statearr_31791[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto__);

(statearr_31791[(1)] = (1));

return statearr_31791;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto____1 = (function (state_31788){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_31788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e31792){if((e31792 instanceof Object)){
var ex__26577__auto__ = e31792;
var statearr_31793_31795 = state_31788;
(statearr_31793_31795[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31796 = state_31788;
state_31788 = G__31796;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto__ = function(state_31788){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto____1.call(this,state_31788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26665__auto__ = (function (){var statearr_31794 = f__26664__auto__.call(null);
(statearr_31794[(6)] = c__26663__auto__);

return statearr_31794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__,figwheel_version,temp__5457__auto__))
);

return c__26663__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31797){
var map__31798 = p__31797;
var map__31798__$1 = ((((!((map__31798 == null)))?(((((map__31798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31798):map__31798);
var file = cljs.core.get.call(null,map__31798__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31798__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31798__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31800 = "";
var G__31800__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31800),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31800);
var G__31800__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31800__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31800__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31800__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31800__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31801){
var map__31802 = p__31801;
var map__31802__$1 = ((((!((map__31802 == null)))?(((((map__31802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31802):map__31802);
var ed = map__31802__$1;
var formatted_exception = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31802__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31804_31808 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31805_31809 = null;
var count__31806_31810 = (0);
var i__31807_31811 = (0);
while(true){
if((i__31807_31811 < count__31806_31810)){
var msg_31812 = cljs.core._nth.call(null,chunk__31805_31809,i__31807_31811);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31812);


var G__31813 = seq__31804_31808;
var G__31814 = chunk__31805_31809;
var G__31815 = count__31806_31810;
var G__31816 = (i__31807_31811 + (1));
seq__31804_31808 = G__31813;
chunk__31805_31809 = G__31814;
count__31806_31810 = G__31815;
i__31807_31811 = G__31816;
continue;
} else {
var temp__5457__auto___31817 = cljs.core.seq.call(null,seq__31804_31808);
if(temp__5457__auto___31817){
var seq__31804_31818__$1 = temp__5457__auto___31817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31804_31818__$1)){
var c__4319__auto___31819 = cljs.core.chunk_first.call(null,seq__31804_31818__$1);
var G__31820 = cljs.core.chunk_rest.call(null,seq__31804_31818__$1);
var G__31821 = c__4319__auto___31819;
var G__31822 = cljs.core.count.call(null,c__4319__auto___31819);
var G__31823 = (0);
seq__31804_31808 = G__31820;
chunk__31805_31809 = G__31821;
count__31806_31810 = G__31822;
i__31807_31811 = G__31823;
continue;
} else {
var msg_31824 = cljs.core.first.call(null,seq__31804_31818__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31824);


var G__31825 = cljs.core.next.call(null,seq__31804_31818__$1);
var G__31826 = null;
var G__31827 = (0);
var G__31828 = (0);
seq__31804_31808 = G__31825;
chunk__31805_31809 = G__31826;
count__31806_31810 = G__31827;
i__31807_31811 = G__31828;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31829){
var map__31830 = p__31829;
var map__31830__$1 = ((((!((map__31830 == null)))?(((((map__31830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31830):map__31830);
var w = map__31830__$1;
var message = cljs.core.get.call(null,map__31830__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31832 = cljs.core.seq.call(null,plugins);
var chunk__31833 = null;
var count__31834 = (0);
var i__31835 = (0);
while(true){
if((i__31835 < count__31834)){
var vec__31836 = cljs.core._nth.call(null,chunk__31833,i__31835);
var k = cljs.core.nth.call(null,vec__31836,(0),null);
var plugin = cljs.core.nth.call(null,vec__31836,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31842 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31832,chunk__31833,count__31834,i__31835,pl_31842,vec__31836,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31842.call(null,msg_hist);
});})(seq__31832,chunk__31833,count__31834,i__31835,pl_31842,vec__31836,k,plugin))
);
} else {
}


var G__31843 = seq__31832;
var G__31844 = chunk__31833;
var G__31845 = count__31834;
var G__31846 = (i__31835 + (1));
seq__31832 = G__31843;
chunk__31833 = G__31844;
count__31834 = G__31845;
i__31835 = G__31846;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31832);
if(temp__5457__auto__){
var seq__31832__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31832__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31832__$1);
var G__31847 = cljs.core.chunk_rest.call(null,seq__31832__$1);
var G__31848 = c__4319__auto__;
var G__31849 = cljs.core.count.call(null,c__4319__auto__);
var G__31850 = (0);
seq__31832 = G__31847;
chunk__31833 = G__31848;
count__31834 = G__31849;
i__31835 = G__31850;
continue;
} else {
var vec__31839 = cljs.core.first.call(null,seq__31832__$1);
var k = cljs.core.nth.call(null,vec__31839,(0),null);
var plugin = cljs.core.nth.call(null,vec__31839,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31851 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31832,chunk__31833,count__31834,i__31835,pl_31851,vec__31839,k,plugin,seq__31832__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31851.call(null,msg_hist);
});})(seq__31832,chunk__31833,count__31834,i__31835,pl_31851,vec__31839,k,plugin,seq__31832__$1,temp__5457__auto__))
);
} else {
}


var G__31852 = cljs.core.next.call(null,seq__31832__$1);
var G__31853 = null;
var G__31854 = (0);
var G__31855 = (0);
seq__31832 = G__31852;
chunk__31833 = G__31853;
count__31834 = G__31854;
i__31835 = G__31855;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31857 = arguments.length;
switch (G__31857) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31858_31863 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31859_31864 = null;
var count__31860_31865 = (0);
var i__31861_31866 = (0);
while(true){
if((i__31861_31866 < count__31860_31865)){
var msg_31867 = cljs.core._nth.call(null,chunk__31859_31864,i__31861_31866);
figwheel.client.socket.handle_incoming_message.call(null,msg_31867);


var G__31868 = seq__31858_31863;
var G__31869 = chunk__31859_31864;
var G__31870 = count__31860_31865;
var G__31871 = (i__31861_31866 + (1));
seq__31858_31863 = G__31868;
chunk__31859_31864 = G__31869;
count__31860_31865 = G__31870;
i__31861_31866 = G__31871;
continue;
} else {
var temp__5457__auto___31872 = cljs.core.seq.call(null,seq__31858_31863);
if(temp__5457__auto___31872){
var seq__31858_31873__$1 = temp__5457__auto___31872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31858_31873__$1)){
var c__4319__auto___31874 = cljs.core.chunk_first.call(null,seq__31858_31873__$1);
var G__31875 = cljs.core.chunk_rest.call(null,seq__31858_31873__$1);
var G__31876 = c__4319__auto___31874;
var G__31877 = cljs.core.count.call(null,c__4319__auto___31874);
var G__31878 = (0);
seq__31858_31863 = G__31875;
chunk__31859_31864 = G__31876;
count__31860_31865 = G__31877;
i__31861_31866 = G__31878;
continue;
} else {
var msg_31879 = cljs.core.first.call(null,seq__31858_31873__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31879);


var G__31880 = cljs.core.next.call(null,seq__31858_31873__$1);
var G__31881 = null;
var G__31882 = (0);
var G__31883 = (0);
seq__31858_31863 = G__31880;
chunk__31859_31864 = G__31881;
count__31860_31865 = G__31882;
i__31861_31866 = G__31883;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31888 = arguments.length;
var i__4500__auto___31889 = (0);
while(true){
if((i__4500__auto___31889 < len__4499__auto___31888)){
args__4502__auto__.push((arguments[i__4500__auto___31889]));

var G__31890 = (i__4500__auto___31889 + (1));
i__4500__auto___31889 = G__31890;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31885){
var map__31886 = p__31885;
var map__31886__$1 = ((((!((map__31886 == null)))?(((((map__31886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31886):map__31886);
var opts = map__31886__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31884){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31884));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31891){if((e31891 instanceof Error)){
var e = e31891;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31891;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31892){
var map__31893 = p__31892;
var map__31893__$1 = ((((!((map__31893 == null)))?(((((map__31893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31893):map__31893);
var msg_name = cljs.core.get.call(null,map__31893__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1530621497456
