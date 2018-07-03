// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33243){
var map__33244 = p__33243;
var map__33244__$1 = ((((!((map__33244 == null)))?(((((map__33244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33244):map__33244);
var m = map__33244__$1;
var n = cljs.core.get.call(null,map__33244__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33244__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33246_33268 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33247_33269 = null;
var count__33248_33270 = (0);
var i__33249_33271 = (0);
while(true){
if((i__33249_33271 < count__33248_33270)){
var f_33272 = cljs.core._nth.call(null,chunk__33247_33269,i__33249_33271);
cljs.core.println.call(null,"  ",f_33272);


var G__33273 = seq__33246_33268;
var G__33274 = chunk__33247_33269;
var G__33275 = count__33248_33270;
var G__33276 = (i__33249_33271 + (1));
seq__33246_33268 = G__33273;
chunk__33247_33269 = G__33274;
count__33248_33270 = G__33275;
i__33249_33271 = G__33276;
continue;
} else {
var temp__5457__auto___33277 = cljs.core.seq.call(null,seq__33246_33268);
if(temp__5457__auto___33277){
var seq__33246_33278__$1 = temp__5457__auto___33277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33246_33278__$1)){
var c__4319__auto___33279 = cljs.core.chunk_first.call(null,seq__33246_33278__$1);
var G__33280 = cljs.core.chunk_rest.call(null,seq__33246_33278__$1);
var G__33281 = c__4319__auto___33279;
var G__33282 = cljs.core.count.call(null,c__4319__auto___33279);
var G__33283 = (0);
seq__33246_33268 = G__33280;
chunk__33247_33269 = G__33281;
count__33248_33270 = G__33282;
i__33249_33271 = G__33283;
continue;
} else {
var f_33284 = cljs.core.first.call(null,seq__33246_33278__$1);
cljs.core.println.call(null,"  ",f_33284);


var G__33285 = cljs.core.next.call(null,seq__33246_33278__$1);
var G__33286 = null;
var G__33287 = (0);
var G__33288 = (0);
seq__33246_33268 = G__33285;
chunk__33247_33269 = G__33286;
count__33248_33270 = G__33287;
i__33249_33271 = G__33288;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33289 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33289);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33289)))?cljs.core.second.call(null,arglists_33289):arglists_33289));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33250_33290 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33251_33291 = null;
var count__33252_33292 = (0);
var i__33253_33293 = (0);
while(true){
if((i__33253_33293 < count__33252_33292)){
var vec__33254_33294 = cljs.core._nth.call(null,chunk__33251_33291,i__33253_33293);
var name_33295 = cljs.core.nth.call(null,vec__33254_33294,(0),null);
var map__33257_33296 = cljs.core.nth.call(null,vec__33254_33294,(1),null);
var map__33257_33297__$1 = ((((!((map__33257_33296 == null)))?(((((map__33257_33296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33257_33296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33257_33296):map__33257_33296);
var doc_33298 = cljs.core.get.call(null,map__33257_33297__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33299 = cljs.core.get.call(null,map__33257_33297__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33295);

cljs.core.println.call(null," ",arglists_33299);

if(cljs.core.truth_(doc_33298)){
cljs.core.println.call(null," ",doc_33298);
} else {
}


var G__33300 = seq__33250_33290;
var G__33301 = chunk__33251_33291;
var G__33302 = count__33252_33292;
var G__33303 = (i__33253_33293 + (1));
seq__33250_33290 = G__33300;
chunk__33251_33291 = G__33301;
count__33252_33292 = G__33302;
i__33253_33293 = G__33303;
continue;
} else {
var temp__5457__auto___33304 = cljs.core.seq.call(null,seq__33250_33290);
if(temp__5457__auto___33304){
var seq__33250_33305__$1 = temp__5457__auto___33304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33250_33305__$1)){
var c__4319__auto___33306 = cljs.core.chunk_first.call(null,seq__33250_33305__$1);
var G__33307 = cljs.core.chunk_rest.call(null,seq__33250_33305__$1);
var G__33308 = c__4319__auto___33306;
var G__33309 = cljs.core.count.call(null,c__4319__auto___33306);
var G__33310 = (0);
seq__33250_33290 = G__33307;
chunk__33251_33291 = G__33308;
count__33252_33292 = G__33309;
i__33253_33293 = G__33310;
continue;
} else {
var vec__33259_33311 = cljs.core.first.call(null,seq__33250_33305__$1);
var name_33312 = cljs.core.nth.call(null,vec__33259_33311,(0),null);
var map__33262_33313 = cljs.core.nth.call(null,vec__33259_33311,(1),null);
var map__33262_33314__$1 = ((((!((map__33262_33313 == null)))?(((((map__33262_33313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33262_33313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33262_33313):map__33262_33313);
var doc_33315 = cljs.core.get.call(null,map__33262_33314__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33316 = cljs.core.get.call(null,map__33262_33314__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33312);

cljs.core.println.call(null," ",arglists_33316);

if(cljs.core.truth_(doc_33315)){
cljs.core.println.call(null," ",doc_33315);
} else {
}


var G__33317 = cljs.core.next.call(null,seq__33250_33305__$1);
var G__33318 = null;
var G__33319 = (0);
var G__33320 = (0);
seq__33250_33290 = G__33317;
chunk__33251_33291 = G__33318;
count__33252_33292 = G__33319;
i__33253_33293 = G__33320;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__33264 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33265 = null;
var count__33266 = (0);
var i__33267 = (0);
while(true){
if((i__33267 < count__33266)){
var role = cljs.core._nth.call(null,chunk__33265,i__33267);
var temp__5457__auto___33321__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33321__$1)){
var spec_33322 = temp__5457__auto___33321__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33322));
} else {
}


var G__33323 = seq__33264;
var G__33324 = chunk__33265;
var G__33325 = count__33266;
var G__33326 = (i__33267 + (1));
seq__33264 = G__33323;
chunk__33265 = G__33324;
count__33266 = G__33325;
i__33267 = G__33326;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__33264);
if(temp__5457__auto____$1){
var seq__33264__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33264__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33264__$1);
var G__33327 = cljs.core.chunk_rest.call(null,seq__33264__$1);
var G__33328 = c__4319__auto__;
var G__33329 = cljs.core.count.call(null,c__4319__auto__);
var G__33330 = (0);
seq__33264 = G__33327;
chunk__33265 = G__33328;
count__33266 = G__33329;
i__33267 = G__33330;
continue;
} else {
var role = cljs.core.first.call(null,seq__33264__$1);
var temp__5457__auto___33331__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33331__$2)){
var spec_33332 = temp__5457__auto___33331__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33332));
} else {
}


var G__33333 = cljs.core.next.call(null,seq__33264__$1);
var G__33334 = null;
var G__33335 = (0);
var G__33336 = (0);
seq__33264 = G__33333;
chunk__33265 = G__33334;
count__33266 = G__33335;
i__33267 = G__33336;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
