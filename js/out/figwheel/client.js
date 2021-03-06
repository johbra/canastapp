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
}catch (e31457){if((e31457 instanceof Error)){
var e = e31457;
return "Error: Unable to stringify";
} else {
throw e31457;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31460 = arguments.length;
switch (G__31460) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31458_SHARP_){
if(typeof p1__31458_SHARP_ === 'string'){
return p1__31458_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31458_SHARP_);
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
var len__4499__auto___31463 = arguments.length;
var i__4500__auto___31464 = (0);
while(true){
if((i__4500__auto___31464 < len__4499__auto___31463)){
args__4502__auto__.push((arguments[i__4500__auto___31464]));

var G__31465 = (i__4500__auto___31464 + (1));
i__4500__auto___31464 = G__31465;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31462){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31462));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31467 = arguments.length;
var i__4500__auto___31468 = (0);
while(true){
if((i__4500__auto___31468 < len__4499__auto___31467)){
args__4502__auto__.push((arguments[i__4500__auto___31468]));

var G__31469 = (i__4500__auto___31468 + (1));
i__4500__auto___31468 = G__31469;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31466){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31466));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31470){
var map__31471 = p__31470;
var map__31471__$1 = ((((!((map__31471 == null)))?(((((map__31471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31471):map__31471);
var message = cljs.core.get.call(null,map__31471__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31471__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__26663__auto___31550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___31550,ch){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___31550,ch){
return (function (state_31522){
var state_val_31523 = (state_31522[(1)]);
if((state_val_31523 === (7))){
var inst_31518 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
var statearr_31524_31551 = state_31522__$1;
(statearr_31524_31551[(2)] = inst_31518);

(statearr_31524_31551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (1))){
var state_31522__$1 = state_31522;
var statearr_31525_31552 = state_31522__$1;
(statearr_31525_31552[(2)] = null);

(statearr_31525_31552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (4))){
var inst_31475 = (state_31522[(7)]);
var inst_31475__$1 = (state_31522[(2)]);
var state_31522__$1 = (function (){var statearr_31526 = state_31522;
(statearr_31526[(7)] = inst_31475__$1);

return statearr_31526;
})();
if(cljs.core.truth_(inst_31475__$1)){
var statearr_31527_31553 = state_31522__$1;
(statearr_31527_31553[(1)] = (5));

} else {
var statearr_31528_31554 = state_31522__$1;
(statearr_31528_31554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (15))){
var inst_31482 = (state_31522[(8)]);
var inst_31497 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31482);
var inst_31498 = cljs.core.first.call(null,inst_31497);
var inst_31499 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31498);
var inst_31500 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31499)].join('');
var inst_31501 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31500);
var state_31522__$1 = state_31522;
var statearr_31529_31555 = state_31522__$1;
(statearr_31529_31555[(2)] = inst_31501);

(statearr_31529_31555[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (13))){
var inst_31506 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
var statearr_31530_31556 = state_31522__$1;
(statearr_31530_31556[(2)] = inst_31506);

(statearr_31530_31556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (6))){
var state_31522__$1 = state_31522;
var statearr_31531_31557 = state_31522__$1;
(statearr_31531_31557[(2)] = null);

(statearr_31531_31557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (17))){
var inst_31504 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
var statearr_31532_31558 = state_31522__$1;
(statearr_31532_31558[(2)] = inst_31504);

(statearr_31532_31558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (3))){
var inst_31520 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31522__$1,inst_31520);
} else {
if((state_val_31523 === (12))){
var inst_31481 = (state_31522[(9)]);
var inst_31495 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31481,opts);
var state_31522__$1 = state_31522;
if(cljs.core.truth_(inst_31495)){
var statearr_31533_31559 = state_31522__$1;
(statearr_31533_31559[(1)] = (15));

} else {
var statearr_31534_31560 = state_31522__$1;
(statearr_31534_31560[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (2))){
var state_31522__$1 = state_31522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31522__$1,(4),ch);
} else {
if((state_val_31523 === (11))){
var inst_31482 = (state_31522[(8)]);
var inst_31487 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31488 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31482);
var inst_31489 = cljs.core.async.timeout.call(null,(1000));
var inst_31490 = [inst_31488,inst_31489];
var inst_31491 = (new cljs.core.PersistentVector(null,2,(5),inst_31487,inst_31490,null));
var state_31522__$1 = state_31522;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31522__$1,(14),inst_31491);
} else {
if((state_val_31523 === (9))){
var inst_31482 = (state_31522[(8)]);
var inst_31508 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31509 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31482);
var inst_31510 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31509);
var inst_31511 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31510)].join('');
var inst_31512 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31511);
var state_31522__$1 = (function (){var statearr_31535 = state_31522;
(statearr_31535[(10)] = inst_31508);

return statearr_31535;
})();
var statearr_31536_31561 = state_31522__$1;
(statearr_31536_31561[(2)] = inst_31512);

(statearr_31536_31561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (5))){
var inst_31475 = (state_31522[(7)]);
var inst_31477 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31478 = (new cljs.core.PersistentArrayMap(null,2,inst_31477,null));
var inst_31479 = (new cljs.core.PersistentHashSet(null,inst_31478,null));
var inst_31480 = figwheel.client.focus_msgs.call(null,inst_31479,inst_31475);
var inst_31481 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31480);
var inst_31482 = cljs.core.first.call(null,inst_31480);
var inst_31483 = figwheel.client.autoload_QMARK_.call(null);
var state_31522__$1 = (function (){var statearr_31537 = state_31522;
(statearr_31537[(9)] = inst_31481);

(statearr_31537[(8)] = inst_31482);

return statearr_31537;
})();
if(cljs.core.truth_(inst_31483)){
var statearr_31538_31562 = state_31522__$1;
(statearr_31538_31562[(1)] = (8));

} else {
var statearr_31539_31563 = state_31522__$1;
(statearr_31539_31563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (14))){
var inst_31493 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
var statearr_31540_31564 = state_31522__$1;
(statearr_31540_31564[(2)] = inst_31493);

(statearr_31540_31564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (16))){
var state_31522__$1 = state_31522;
var statearr_31541_31565 = state_31522__$1;
(statearr_31541_31565[(2)] = null);

(statearr_31541_31565[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (10))){
var inst_31514 = (state_31522[(2)]);
var state_31522__$1 = (function (){var statearr_31542 = state_31522;
(statearr_31542[(11)] = inst_31514);

return statearr_31542;
})();
var statearr_31543_31566 = state_31522__$1;
(statearr_31543_31566[(2)] = null);

(statearr_31543_31566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (8))){
var inst_31481 = (state_31522[(9)]);
var inst_31485 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31481,opts);
var state_31522__$1 = state_31522;
if(cljs.core.truth_(inst_31485)){
var statearr_31544_31567 = state_31522__$1;
(statearr_31544_31567[(1)] = (11));

} else {
var statearr_31545_31568 = state_31522__$1;
(statearr_31545_31568[(1)] = (12));

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
});})(c__26663__auto___31550,ch))
;
return ((function (switch__26573__auto__,c__26663__auto___31550,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26574__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26574__auto____0 = (function (){
var statearr_31546 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31546[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26574__auto__);

(statearr_31546[(1)] = (1));

return statearr_31546;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26574__auto____1 = (function (state_31522){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_31522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e31547){if((e31547 instanceof Object)){
var ex__26577__auto__ = e31547;
var statearr_31548_31569 = state_31522;
(statearr_31548_31569[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31570 = state_31522;
state_31522 = G__31570;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26574__auto__ = function(state_31522){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26574__auto____1.call(this,state_31522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26574__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26574__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___31550,ch))
})();
var state__26665__auto__ = (function (){var statearr_31549 = f__26664__auto__.call(null);
(statearr_31549[(6)] = c__26663__auto___31550);

return statearr_31549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___31550,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31571_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31571_SHARP_));
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
var base_path_31575 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31575){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31573 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31574 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31573,_STAR_print_fn_STAR_31574,sb,base_path_31575){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31573,_STAR_print_fn_STAR_31574,sb,base_path_31575))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31574;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31573;
}}catch (e31572){if((e31572 instanceof Error)){
var e = e31572;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31575], null));
} else {
var e = e31572;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31575))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31576){
var map__31577 = p__31576;
var map__31577__$1 = ((((!((map__31577 == null)))?(((((map__31577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31577):map__31577);
var opts = map__31577__$1;
var build_id = cljs.core.get.call(null,map__31577__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31577,map__31577__$1,opts,build_id){
return (function (p__31579){
var vec__31580 = p__31579;
var seq__31581 = cljs.core.seq.call(null,vec__31580);
var first__31582 = cljs.core.first.call(null,seq__31581);
var seq__31581__$1 = cljs.core.next.call(null,seq__31581);
var map__31583 = first__31582;
var map__31583__$1 = ((((!((map__31583 == null)))?(((((map__31583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31583):map__31583);
var msg = map__31583__$1;
var msg_name = cljs.core.get.call(null,map__31583__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31581__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31580,seq__31581,first__31582,seq__31581__$1,map__31583,map__31583__$1,msg,msg_name,_,map__31577,map__31577__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31580,seq__31581,first__31582,seq__31581__$1,map__31583,map__31583__$1,msg,msg_name,_,map__31577,map__31577__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31577,map__31577__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31585){
var vec__31586 = p__31585;
var seq__31587 = cljs.core.seq.call(null,vec__31586);
var first__31588 = cljs.core.first.call(null,seq__31587);
var seq__31587__$1 = cljs.core.next.call(null,seq__31587);
var map__31589 = first__31588;
var map__31589__$1 = ((((!((map__31589 == null)))?(((((map__31589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31589):map__31589);
var msg = map__31589__$1;
var msg_name = cljs.core.get.call(null,map__31589__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31587__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31591){
var map__31592 = p__31591;
var map__31592__$1 = ((((!((map__31592 == null)))?(((((map__31592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31592):map__31592);
var on_compile_warning = cljs.core.get.call(null,map__31592__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31592__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31592,map__31592__$1,on_compile_warning,on_compile_fail){
return (function (p__31594){
var vec__31595 = p__31594;
var seq__31596 = cljs.core.seq.call(null,vec__31595);
var first__31597 = cljs.core.first.call(null,seq__31596);
var seq__31596__$1 = cljs.core.next.call(null,seq__31596);
var map__31598 = first__31597;
var map__31598__$1 = ((((!((map__31598 == null)))?(((((map__31598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31598):map__31598);
var msg = map__31598__$1;
var msg_name = cljs.core.get.call(null,map__31598__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31596__$1;
var pred__31600 = cljs.core._EQ_;
var expr__31601 = msg_name;
if(cljs.core.truth_(pred__31600.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31601))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31600.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31601))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31592,map__31592__$1,on_compile_warning,on_compile_fail))
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
return (function (state_31690){
var state_val_31691 = (state_31690[(1)]);
if((state_val_31691 === (7))){
var inst_31610 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
if(cljs.core.truth_(inst_31610)){
var statearr_31692_31739 = state_31690__$1;
(statearr_31692_31739[(1)] = (8));

} else {
var statearr_31693_31740 = state_31690__$1;
(statearr_31693_31740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (20))){
var inst_31684 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31694_31741 = state_31690__$1;
(statearr_31694_31741[(2)] = inst_31684);

(statearr_31694_31741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (27))){
var inst_31680 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31695_31742 = state_31690__$1;
(statearr_31695_31742[(2)] = inst_31680);

(statearr_31695_31742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (1))){
var inst_31603 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31690__$1 = state_31690;
if(cljs.core.truth_(inst_31603)){
var statearr_31696_31743 = state_31690__$1;
(statearr_31696_31743[(1)] = (2));

} else {
var statearr_31697_31744 = state_31690__$1;
(statearr_31697_31744[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (24))){
var inst_31682 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31698_31745 = state_31690__$1;
(statearr_31698_31745[(2)] = inst_31682);

(statearr_31698_31745[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (4))){
var inst_31688 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31690__$1,inst_31688);
} else {
if((state_val_31691 === (15))){
var inst_31686 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31699_31746 = state_31690__$1;
(statearr_31699_31746[(2)] = inst_31686);

(statearr_31699_31746[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (21))){
var inst_31639 = (state_31690[(2)]);
var inst_31640 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31641 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31640);
var state_31690__$1 = (function (){var statearr_31700 = state_31690;
(statearr_31700[(7)] = inst_31639);

return statearr_31700;
})();
var statearr_31701_31747 = state_31690__$1;
(statearr_31701_31747[(2)] = inst_31641);

(statearr_31701_31747[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (31))){
var inst_31669 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31690__$1 = state_31690;
if(cljs.core.truth_(inst_31669)){
var statearr_31702_31748 = state_31690__$1;
(statearr_31702_31748[(1)] = (34));

} else {
var statearr_31703_31749 = state_31690__$1;
(statearr_31703_31749[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (32))){
var inst_31678 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31704_31750 = state_31690__$1;
(statearr_31704_31750[(2)] = inst_31678);

(statearr_31704_31750[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (33))){
var inst_31665 = (state_31690[(2)]);
var inst_31666 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31667 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31666);
var state_31690__$1 = (function (){var statearr_31705 = state_31690;
(statearr_31705[(8)] = inst_31665);

return statearr_31705;
})();
var statearr_31706_31751 = state_31690__$1;
(statearr_31706_31751[(2)] = inst_31667);

(statearr_31706_31751[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (13))){
var inst_31624 = figwheel.client.heads_up.clear.call(null);
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31690__$1,(16),inst_31624);
} else {
if((state_val_31691 === (22))){
var inst_31645 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31646 = figwheel.client.heads_up.append_warning_message.call(null,inst_31645);
var state_31690__$1 = state_31690;
var statearr_31707_31752 = state_31690__$1;
(statearr_31707_31752[(2)] = inst_31646);

(statearr_31707_31752[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (36))){
var inst_31676 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31708_31753 = state_31690__$1;
(statearr_31708_31753[(2)] = inst_31676);

(statearr_31708_31753[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (29))){
var inst_31656 = (state_31690[(2)]);
var inst_31657 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31658 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31657);
var state_31690__$1 = (function (){var statearr_31709 = state_31690;
(statearr_31709[(9)] = inst_31656);

return statearr_31709;
})();
var statearr_31710_31754 = state_31690__$1;
(statearr_31710_31754[(2)] = inst_31658);

(statearr_31710_31754[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (6))){
var inst_31605 = (state_31690[(10)]);
var state_31690__$1 = state_31690;
var statearr_31711_31755 = state_31690__$1;
(statearr_31711_31755[(2)] = inst_31605);

(statearr_31711_31755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (28))){
var inst_31652 = (state_31690[(2)]);
var inst_31653 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31654 = figwheel.client.heads_up.display_warning.call(null,inst_31653);
var state_31690__$1 = (function (){var statearr_31712 = state_31690;
(statearr_31712[(11)] = inst_31652);

return statearr_31712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31690__$1,(29),inst_31654);
} else {
if((state_val_31691 === (25))){
var inst_31650 = figwheel.client.heads_up.clear.call(null);
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31690__$1,(28),inst_31650);
} else {
if((state_val_31691 === (34))){
var inst_31671 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31690__$1,(37),inst_31671);
} else {
if((state_val_31691 === (17))){
var inst_31630 = (state_31690[(2)]);
var inst_31631 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31632 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31631);
var state_31690__$1 = (function (){var statearr_31713 = state_31690;
(statearr_31713[(12)] = inst_31630);

return statearr_31713;
})();
var statearr_31714_31756 = state_31690__$1;
(statearr_31714_31756[(2)] = inst_31632);

(statearr_31714_31756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (3))){
var inst_31622 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31690__$1 = state_31690;
if(cljs.core.truth_(inst_31622)){
var statearr_31715_31757 = state_31690__$1;
(statearr_31715_31757[(1)] = (13));

} else {
var statearr_31716_31758 = state_31690__$1;
(statearr_31716_31758[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (12))){
var inst_31618 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31717_31759 = state_31690__$1;
(statearr_31717_31759[(2)] = inst_31618);

(statearr_31717_31759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (2))){
var inst_31605 = (state_31690[(10)]);
var inst_31605__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31690__$1 = (function (){var statearr_31718 = state_31690;
(statearr_31718[(10)] = inst_31605__$1);

return statearr_31718;
})();
if(cljs.core.truth_(inst_31605__$1)){
var statearr_31719_31760 = state_31690__$1;
(statearr_31719_31760[(1)] = (5));

} else {
var statearr_31720_31761 = state_31690__$1;
(statearr_31720_31761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (23))){
var inst_31648 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31690__$1 = state_31690;
if(cljs.core.truth_(inst_31648)){
var statearr_31721_31762 = state_31690__$1;
(statearr_31721_31762[(1)] = (25));

} else {
var statearr_31722_31763 = state_31690__$1;
(statearr_31722_31763[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (35))){
var state_31690__$1 = state_31690;
var statearr_31723_31764 = state_31690__$1;
(statearr_31723_31764[(2)] = null);

(statearr_31723_31764[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (19))){
var inst_31643 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31690__$1 = state_31690;
if(cljs.core.truth_(inst_31643)){
var statearr_31724_31765 = state_31690__$1;
(statearr_31724_31765[(1)] = (22));

} else {
var statearr_31725_31766 = state_31690__$1;
(statearr_31725_31766[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (11))){
var inst_31614 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31726_31767 = state_31690__$1;
(statearr_31726_31767[(2)] = inst_31614);

(statearr_31726_31767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (9))){
var inst_31616 = figwheel.client.heads_up.clear.call(null);
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31690__$1,(12),inst_31616);
} else {
if((state_val_31691 === (5))){
var inst_31607 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31690__$1 = state_31690;
var statearr_31727_31768 = state_31690__$1;
(statearr_31727_31768[(2)] = inst_31607);

(statearr_31727_31768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (14))){
var inst_31634 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31690__$1 = state_31690;
if(cljs.core.truth_(inst_31634)){
var statearr_31728_31769 = state_31690__$1;
(statearr_31728_31769[(1)] = (18));

} else {
var statearr_31729_31770 = state_31690__$1;
(statearr_31729_31770[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (26))){
var inst_31660 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31690__$1 = state_31690;
if(cljs.core.truth_(inst_31660)){
var statearr_31730_31771 = state_31690__$1;
(statearr_31730_31771[(1)] = (30));

} else {
var statearr_31731_31772 = state_31690__$1;
(statearr_31731_31772[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (16))){
var inst_31626 = (state_31690[(2)]);
var inst_31627 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31628 = figwheel.client.heads_up.display_exception.call(null,inst_31627);
var state_31690__$1 = (function (){var statearr_31732 = state_31690;
(statearr_31732[(13)] = inst_31626);

return statearr_31732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31690__$1,(17),inst_31628);
} else {
if((state_val_31691 === (30))){
var inst_31662 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31663 = figwheel.client.heads_up.display_warning.call(null,inst_31662);
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31690__$1,(33),inst_31663);
} else {
if((state_val_31691 === (10))){
var inst_31620 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31733_31773 = state_31690__$1;
(statearr_31733_31773[(2)] = inst_31620);

(statearr_31733_31773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (18))){
var inst_31636 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31637 = figwheel.client.heads_up.display_exception.call(null,inst_31636);
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31690__$1,(21),inst_31637);
} else {
if((state_val_31691 === (37))){
var inst_31673 = (state_31690[(2)]);
var state_31690__$1 = state_31690;
var statearr_31734_31774 = state_31690__$1;
(statearr_31734_31774[(2)] = inst_31673);

(statearr_31734_31774[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31691 === (8))){
var inst_31612 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31690__$1 = state_31690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31690__$1,(11),inst_31612);
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
var statearr_31735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31735[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto__);

(statearr_31735[(1)] = (1));

return statearr_31735;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto____1 = (function (state_31690){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_31690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e31736){if((e31736 instanceof Object)){
var ex__26577__auto__ = e31736;
var statearr_31737_31775 = state_31690;
(statearr_31737_31775[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31776 = state_31690;
state_31690 = G__31776;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto__ = function(state_31690){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto____1.call(this,state_31690);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__,msg_hist,msg_names,msg))
})();
var state__26665__auto__ = (function (){var statearr_31738 = f__26664__auto__.call(null);
(statearr_31738[(6)] = c__26663__auto__);

return statearr_31738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__,msg_hist,msg_names,msg))
);

return c__26663__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26663__auto___31805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___31805,ch){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___31805,ch){
return (function (state_31791){
var state_val_31792 = (state_31791[(1)]);
if((state_val_31792 === (1))){
var state_31791__$1 = state_31791;
var statearr_31793_31806 = state_31791__$1;
(statearr_31793_31806[(2)] = null);

(statearr_31793_31806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (2))){
var state_31791__$1 = state_31791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31791__$1,(4),ch);
} else {
if((state_val_31792 === (3))){
var inst_31789 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31791__$1,inst_31789);
} else {
if((state_val_31792 === (4))){
var inst_31779 = (state_31791[(7)]);
var inst_31779__$1 = (state_31791[(2)]);
var state_31791__$1 = (function (){var statearr_31794 = state_31791;
(statearr_31794[(7)] = inst_31779__$1);

return statearr_31794;
})();
if(cljs.core.truth_(inst_31779__$1)){
var statearr_31795_31807 = state_31791__$1;
(statearr_31795_31807[(1)] = (5));

} else {
var statearr_31796_31808 = state_31791__$1;
(statearr_31796_31808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (5))){
var inst_31779 = (state_31791[(7)]);
var inst_31781 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31779);
var state_31791__$1 = state_31791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31791__$1,(8),inst_31781);
} else {
if((state_val_31792 === (6))){
var state_31791__$1 = state_31791;
var statearr_31797_31809 = state_31791__$1;
(statearr_31797_31809[(2)] = null);

(statearr_31797_31809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (7))){
var inst_31787 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
var statearr_31798_31810 = state_31791__$1;
(statearr_31798_31810[(2)] = inst_31787);

(statearr_31798_31810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (8))){
var inst_31783 = (state_31791[(2)]);
var state_31791__$1 = (function (){var statearr_31799 = state_31791;
(statearr_31799[(8)] = inst_31783);

return statearr_31799;
})();
var statearr_31800_31811 = state_31791__$1;
(statearr_31800_31811[(2)] = null);

(statearr_31800_31811[(1)] = (2));


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
});})(c__26663__auto___31805,ch))
;
return ((function (switch__26573__auto__,c__26663__auto___31805,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26574__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26574__auto____0 = (function (){
var statearr_31801 = [null,null,null,null,null,null,null,null,null];
(statearr_31801[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26574__auto__);

(statearr_31801[(1)] = (1));

return statearr_31801;
});
var figwheel$client$heads_up_plugin_$_state_machine__26574__auto____1 = (function (state_31791){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_31791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e31802){if((e31802 instanceof Object)){
var ex__26577__auto__ = e31802;
var statearr_31803_31812 = state_31791;
(statearr_31803_31812[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31813 = state_31791;
state_31791 = G__31813;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26574__auto__ = function(state_31791){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26574__auto____1.call(this,state_31791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26574__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26574__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___31805,ch))
})();
var state__26665__auto__ = (function (){var statearr_31804 = f__26664__auto__.call(null);
(statearr_31804[(6)] = c__26663__auto___31805);

return statearr_31804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___31805,ch))
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
return (function (state_31819){
var state_val_31820 = (state_31819[(1)]);
if((state_val_31820 === (1))){
var inst_31814 = cljs.core.async.timeout.call(null,(3000));
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31819__$1,(2),inst_31814);
} else {
if((state_val_31820 === (2))){
var inst_31816 = (state_31819[(2)]);
var inst_31817 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31819__$1 = (function (){var statearr_31821 = state_31819;
(statearr_31821[(7)] = inst_31816);

return statearr_31821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31819__$1,inst_31817);
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
var statearr_31822 = [null,null,null,null,null,null,null,null];
(statearr_31822[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26574__auto__);

(statearr_31822[(1)] = (1));

return statearr_31822;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26574__auto____1 = (function (state_31819){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_31819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e31823){if((e31823 instanceof Object)){
var ex__26577__auto__ = e31823;
var statearr_31824_31826 = state_31819;
(statearr_31824_31826[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31827 = state_31819;
state_31819 = G__31827;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26574__auto__ = function(state_31819){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26574__auto____1.call(this,state_31819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26574__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26574__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_31825 = f__26664__auto__.call(null);
(statearr_31825[(6)] = c__26663__auto__);

return statearr_31825;
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
return (function (state_31834){
var state_val_31835 = (state_31834[(1)]);
if((state_val_31835 === (1))){
var inst_31828 = cljs.core.async.timeout.call(null,(2000));
var state_31834__$1 = state_31834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31834__$1,(2),inst_31828);
} else {
if((state_val_31835 === (2))){
var inst_31830 = (state_31834[(2)]);
var inst_31831 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31832 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31831);
var state_31834__$1 = (function (){var statearr_31836 = state_31834;
(statearr_31836[(7)] = inst_31830);

return statearr_31836;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31834__$1,inst_31832);
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
var statearr_31837 = [null,null,null,null,null,null,null,null];
(statearr_31837[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto__);

(statearr_31837[(1)] = (1));

return statearr_31837;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto____1 = (function (state_31834){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_31834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e31838){if((e31838 instanceof Object)){
var ex__26577__auto__ = e31838;
var statearr_31839_31841 = state_31834;
(statearr_31839_31841[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31842 = state_31834;
state_31834 = G__31842;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto__ = function(state_31834){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto____1.call(this,state_31834);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26665__auto__ = (function (){var statearr_31840 = f__26664__auto__.call(null);
(statearr_31840[(6)] = c__26663__auto__);

return statearr_31840;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31843){
var map__31844 = p__31843;
var map__31844__$1 = ((((!((map__31844 == null)))?(((((map__31844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31844):map__31844);
var file = cljs.core.get.call(null,map__31844__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31844__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31844__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31846 = "";
var G__31846__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31846),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31846);
var G__31846__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31846__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31846__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31846__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31846__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31847){
var map__31848 = p__31847;
var map__31848__$1 = ((((!((map__31848 == null)))?(((((map__31848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31848):map__31848);
var ed = map__31848__$1;
var formatted_exception = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31850_31854 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31851_31855 = null;
var count__31852_31856 = (0);
var i__31853_31857 = (0);
while(true){
if((i__31853_31857 < count__31852_31856)){
var msg_31858 = cljs.core._nth.call(null,chunk__31851_31855,i__31853_31857);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31858);


var G__31859 = seq__31850_31854;
var G__31860 = chunk__31851_31855;
var G__31861 = count__31852_31856;
var G__31862 = (i__31853_31857 + (1));
seq__31850_31854 = G__31859;
chunk__31851_31855 = G__31860;
count__31852_31856 = G__31861;
i__31853_31857 = G__31862;
continue;
} else {
var temp__5457__auto___31863 = cljs.core.seq.call(null,seq__31850_31854);
if(temp__5457__auto___31863){
var seq__31850_31864__$1 = temp__5457__auto___31863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31850_31864__$1)){
var c__4319__auto___31865 = cljs.core.chunk_first.call(null,seq__31850_31864__$1);
var G__31866 = cljs.core.chunk_rest.call(null,seq__31850_31864__$1);
var G__31867 = c__4319__auto___31865;
var G__31868 = cljs.core.count.call(null,c__4319__auto___31865);
var G__31869 = (0);
seq__31850_31854 = G__31866;
chunk__31851_31855 = G__31867;
count__31852_31856 = G__31868;
i__31853_31857 = G__31869;
continue;
} else {
var msg_31870 = cljs.core.first.call(null,seq__31850_31864__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31870);


var G__31871 = cljs.core.next.call(null,seq__31850_31864__$1);
var G__31872 = null;
var G__31873 = (0);
var G__31874 = (0);
seq__31850_31854 = G__31871;
chunk__31851_31855 = G__31872;
count__31852_31856 = G__31873;
i__31853_31857 = G__31874;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31875){
var map__31876 = p__31875;
var map__31876__$1 = ((((!((map__31876 == null)))?(((((map__31876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31876):map__31876);
var w = map__31876__$1;
var message = cljs.core.get.call(null,map__31876__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31878 = cljs.core.seq.call(null,plugins);
var chunk__31879 = null;
var count__31880 = (0);
var i__31881 = (0);
while(true){
if((i__31881 < count__31880)){
var vec__31882 = cljs.core._nth.call(null,chunk__31879,i__31881);
var k = cljs.core.nth.call(null,vec__31882,(0),null);
var plugin = cljs.core.nth.call(null,vec__31882,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31888 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31878,chunk__31879,count__31880,i__31881,pl_31888,vec__31882,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31888.call(null,msg_hist);
});})(seq__31878,chunk__31879,count__31880,i__31881,pl_31888,vec__31882,k,plugin))
);
} else {
}


var G__31889 = seq__31878;
var G__31890 = chunk__31879;
var G__31891 = count__31880;
var G__31892 = (i__31881 + (1));
seq__31878 = G__31889;
chunk__31879 = G__31890;
count__31880 = G__31891;
i__31881 = G__31892;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31878);
if(temp__5457__auto__){
var seq__31878__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31878__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31878__$1);
var G__31893 = cljs.core.chunk_rest.call(null,seq__31878__$1);
var G__31894 = c__4319__auto__;
var G__31895 = cljs.core.count.call(null,c__4319__auto__);
var G__31896 = (0);
seq__31878 = G__31893;
chunk__31879 = G__31894;
count__31880 = G__31895;
i__31881 = G__31896;
continue;
} else {
var vec__31885 = cljs.core.first.call(null,seq__31878__$1);
var k = cljs.core.nth.call(null,vec__31885,(0),null);
var plugin = cljs.core.nth.call(null,vec__31885,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31897 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31878,chunk__31879,count__31880,i__31881,pl_31897,vec__31885,k,plugin,seq__31878__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31897.call(null,msg_hist);
});})(seq__31878,chunk__31879,count__31880,i__31881,pl_31897,vec__31885,k,plugin,seq__31878__$1,temp__5457__auto__))
);
} else {
}


var G__31898 = cljs.core.next.call(null,seq__31878__$1);
var G__31899 = null;
var G__31900 = (0);
var G__31901 = (0);
seq__31878 = G__31898;
chunk__31879 = G__31899;
count__31880 = G__31900;
i__31881 = G__31901;
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
var G__31903 = arguments.length;
switch (G__31903) {
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

var seq__31904_31909 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31905_31910 = null;
var count__31906_31911 = (0);
var i__31907_31912 = (0);
while(true){
if((i__31907_31912 < count__31906_31911)){
var msg_31913 = cljs.core._nth.call(null,chunk__31905_31910,i__31907_31912);
figwheel.client.socket.handle_incoming_message.call(null,msg_31913);


var G__31914 = seq__31904_31909;
var G__31915 = chunk__31905_31910;
var G__31916 = count__31906_31911;
var G__31917 = (i__31907_31912 + (1));
seq__31904_31909 = G__31914;
chunk__31905_31910 = G__31915;
count__31906_31911 = G__31916;
i__31907_31912 = G__31917;
continue;
} else {
var temp__5457__auto___31918 = cljs.core.seq.call(null,seq__31904_31909);
if(temp__5457__auto___31918){
var seq__31904_31919__$1 = temp__5457__auto___31918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31904_31919__$1)){
var c__4319__auto___31920 = cljs.core.chunk_first.call(null,seq__31904_31919__$1);
var G__31921 = cljs.core.chunk_rest.call(null,seq__31904_31919__$1);
var G__31922 = c__4319__auto___31920;
var G__31923 = cljs.core.count.call(null,c__4319__auto___31920);
var G__31924 = (0);
seq__31904_31909 = G__31921;
chunk__31905_31910 = G__31922;
count__31906_31911 = G__31923;
i__31907_31912 = G__31924;
continue;
} else {
var msg_31925 = cljs.core.first.call(null,seq__31904_31919__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31925);


var G__31926 = cljs.core.next.call(null,seq__31904_31919__$1);
var G__31927 = null;
var G__31928 = (0);
var G__31929 = (0);
seq__31904_31909 = G__31926;
chunk__31905_31910 = G__31927;
count__31906_31911 = G__31928;
i__31907_31912 = G__31929;
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
var len__4499__auto___31934 = arguments.length;
var i__4500__auto___31935 = (0);
while(true){
if((i__4500__auto___31935 < len__4499__auto___31934)){
args__4502__auto__.push((arguments[i__4500__auto___31935]));

var G__31936 = (i__4500__auto___31935 + (1));
i__4500__auto___31935 = G__31936;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31931){
var map__31932 = p__31931;
var map__31932__$1 = ((((!((map__31932 == null)))?(((((map__31932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31932):map__31932);
var opts = map__31932__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31930){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31930));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31937){if((e31937 instanceof Error)){
var e = e31937;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31937;

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
return (function (p__31938){
var map__31939 = p__31938;
var map__31939__$1 = ((((!((map__31939 == null)))?(((((map__31939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31939):map__31939);
var msg_name = cljs.core.get.call(null,map__31939__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1530972553575
