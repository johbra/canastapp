// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31169){
var map__31170 = p__31169;
var map__31170__$1 = ((((!((map__31170 == null)))?(((((map__31170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31170):map__31170);
var m = map__31170__$1;
var n = cljs.core.get.call(null,map__31170__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31170__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31172_31194 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31173_31195 = null;
var count__31174_31196 = (0);
var i__31175_31197 = (0);
while(true){
if((i__31175_31197 < count__31174_31196)){
var f_31198 = cljs.core._nth.call(null,chunk__31173_31195,i__31175_31197);
cljs.core.println.call(null,"  ",f_31198);


var G__31199 = seq__31172_31194;
var G__31200 = chunk__31173_31195;
var G__31201 = count__31174_31196;
var G__31202 = (i__31175_31197 + (1));
seq__31172_31194 = G__31199;
chunk__31173_31195 = G__31200;
count__31174_31196 = G__31201;
i__31175_31197 = G__31202;
continue;
} else {
var temp__5457__auto___31203 = cljs.core.seq.call(null,seq__31172_31194);
if(temp__5457__auto___31203){
var seq__31172_31204__$1 = temp__5457__auto___31203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31172_31204__$1)){
var c__4319__auto___31205 = cljs.core.chunk_first.call(null,seq__31172_31204__$1);
var G__31206 = cljs.core.chunk_rest.call(null,seq__31172_31204__$1);
var G__31207 = c__4319__auto___31205;
var G__31208 = cljs.core.count.call(null,c__4319__auto___31205);
var G__31209 = (0);
seq__31172_31194 = G__31206;
chunk__31173_31195 = G__31207;
count__31174_31196 = G__31208;
i__31175_31197 = G__31209;
continue;
} else {
var f_31210 = cljs.core.first.call(null,seq__31172_31204__$1);
cljs.core.println.call(null,"  ",f_31210);


var G__31211 = cljs.core.next.call(null,seq__31172_31204__$1);
var G__31212 = null;
var G__31213 = (0);
var G__31214 = (0);
seq__31172_31194 = G__31211;
chunk__31173_31195 = G__31212;
count__31174_31196 = G__31213;
i__31175_31197 = G__31214;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31215 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31215);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31215)))?cljs.core.second.call(null,arglists_31215):arglists_31215));
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
var seq__31176_31216 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31177_31217 = null;
var count__31178_31218 = (0);
var i__31179_31219 = (0);
while(true){
if((i__31179_31219 < count__31178_31218)){
var vec__31180_31220 = cljs.core._nth.call(null,chunk__31177_31217,i__31179_31219);
var name_31221 = cljs.core.nth.call(null,vec__31180_31220,(0),null);
var map__31183_31222 = cljs.core.nth.call(null,vec__31180_31220,(1),null);
var map__31183_31223__$1 = ((((!((map__31183_31222 == null)))?(((((map__31183_31222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31183_31222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31183_31222):map__31183_31222);
var doc_31224 = cljs.core.get.call(null,map__31183_31223__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31225 = cljs.core.get.call(null,map__31183_31223__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31221);

cljs.core.println.call(null," ",arglists_31225);

if(cljs.core.truth_(doc_31224)){
cljs.core.println.call(null," ",doc_31224);
} else {
}


var G__31226 = seq__31176_31216;
var G__31227 = chunk__31177_31217;
var G__31228 = count__31178_31218;
var G__31229 = (i__31179_31219 + (1));
seq__31176_31216 = G__31226;
chunk__31177_31217 = G__31227;
count__31178_31218 = G__31228;
i__31179_31219 = G__31229;
continue;
} else {
var temp__5457__auto___31230 = cljs.core.seq.call(null,seq__31176_31216);
if(temp__5457__auto___31230){
var seq__31176_31231__$1 = temp__5457__auto___31230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31176_31231__$1)){
var c__4319__auto___31232 = cljs.core.chunk_first.call(null,seq__31176_31231__$1);
var G__31233 = cljs.core.chunk_rest.call(null,seq__31176_31231__$1);
var G__31234 = c__4319__auto___31232;
var G__31235 = cljs.core.count.call(null,c__4319__auto___31232);
var G__31236 = (0);
seq__31176_31216 = G__31233;
chunk__31177_31217 = G__31234;
count__31178_31218 = G__31235;
i__31179_31219 = G__31236;
continue;
} else {
var vec__31185_31237 = cljs.core.first.call(null,seq__31176_31231__$1);
var name_31238 = cljs.core.nth.call(null,vec__31185_31237,(0),null);
var map__31188_31239 = cljs.core.nth.call(null,vec__31185_31237,(1),null);
var map__31188_31240__$1 = ((((!((map__31188_31239 == null)))?(((((map__31188_31239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31188_31239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31188_31239):map__31188_31239);
var doc_31241 = cljs.core.get.call(null,map__31188_31240__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31242 = cljs.core.get.call(null,map__31188_31240__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31238);

cljs.core.println.call(null," ",arglists_31242);

if(cljs.core.truth_(doc_31241)){
cljs.core.println.call(null," ",doc_31241);
} else {
}


var G__31243 = cljs.core.next.call(null,seq__31176_31231__$1);
var G__31244 = null;
var G__31245 = (0);
var G__31246 = (0);
seq__31176_31216 = G__31243;
chunk__31177_31217 = G__31244;
count__31178_31218 = G__31245;
i__31179_31219 = G__31246;
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

var seq__31190 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31191 = null;
var count__31192 = (0);
var i__31193 = (0);
while(true){
if((i__31193 < count__31192)){
var role = cljs.core._nth.call(null,chunk__31191,i__31193);
var temp__5457__auto___31247__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31247__$1)){
var spec_31248 = temp__5457__auto___31247__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31248));
} else {
}


var G__31249 = seq__31190;
var G__31250 = chunk__31191;
var G__31251 = count__31192;
var G__31252 = (i__31193 + (1));
seq__31190 = G__31249;
chunk__31191 = G__31250;
count__31192 = G__31251;
i__31193 = G__31252;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31190);
if(temp__5457__auto____$1){
var seq__31190__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31190__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31190__$1);
var G__31253 = cljs.core.chunk_rest.call(null,seq__31190__$1);
var G__31254 = c__4319__auto__;
var G__31255 = cljs.core.count.call(null,c__4319__auto__);
var G__31256 = (0);
seq__31190 = G__31253;
chunk__31191 = G__31254;
count__31192 = G__31255;
i__31193 = G__31256;
continue;
} else {
var role = cljs.core.first.call(null,seq__31190__$1);
var temp__5457__auto___31257__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31257__$2)){
var spec_31258 = temp__5457__auto___31257__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31258));
} else {
}


var G__31259 = cljs.core.next.call(null,seq__31190__$1);
var G__31260 = null;
var G__31261 = (0);
var G__31262 = (0);
seq__31190 = G__31259;
chunk__31191 = G__31260;
count__31192 = G__31261;
i__31193 = G__31262;
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

//# sourceMappingURL=repl.js.map?rel=1530972552363
