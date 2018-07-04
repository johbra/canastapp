// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31168){
var map__31169 = p__31168;
var map__31169__$1 = ((((!((map__31169 == null)))?(((((map__31169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31169):map__31169);
var m = map__31169__$1;
var n = cljs.core.get.call(null,map__31169__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31169__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31171_31193 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31172_31194 = null;
var count__31173_31195 = (0);
var i__31174_31196 = (0);
while(true){
if((i__31174_31196 < count__31173_31195)){
var f_31197 = cljs.core._nth.call(null,chunk__31172_31194,i__31174_31196);
cljs.core.println.call(null,"  ",f_31197);


var G__31198 = seq__31171_31193;
var G__31199 = chunk__31172_31194;
var G__31200 = count__31173_31195;
var G__31201 = (i__31174_31196 + (1));
seq__31171_31193 = G__31198;
chunk__31172_31194 = G__31199;
count__31173_31195 = G__31200;
i__31174_31196 = G__31201;
continue;
} else {
var temp__5457__auto___31202 = cljs.core.seq.call(null,seq__31171_31193);
if(temp__5457__auto___31202){
var seq__31171_31203__$1 = temp__5457__auto___31202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31171_31203__$1)){
var c__4319__auto___31204 = cljs.core.chunk_first.call(null,seq__31171_31203__$1);
var G__31205 = cljs.core.chunk_rest.call(null,seq__31171_31203__$1);
var G__31206 = c__4319__auto___31204;
var G__31207 = cljs.core.count.call(null,c__4319__auto___31204);
var G__31208 = (0);
seq__31171_31193 = G__31205;
chunk__31172_31194 = G__31206;
count__31173_31195 = G__31207;
i__31174_31196 = G__31208;
continue;
} else {
var f_31209 = cljs.core.first.call(null,seq__31171_31203__$1);
cljs.core.println.call(null,"  ",f_31209);


var G__31210 = cljs.core.next.call(null,seq__31171_31203__$1);
var G__31211 = null;
var G__31212 = (0);
var G__31213 = (0);
seq__31171_31193 = G__31210;
chunk__31172_31194 = G__31211;
count__31173_31195 = G__31212;
i__31174_31196 = G__31213;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31214 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31214);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31214)))?cljs.core.second.call(null,arglists_31214):arglists_31214));
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
var seq__31175_31215 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31176_31216 = null;
var count__31177_31217 = (0);
var i__31178_31218 = (0);
while(true){
if((i__31178_31218 < count__31177_31217)){
var vec__31179_31219 = cljs.core._nth.call(null,chunk__31176_31216,i__31178_31218);
var name_31220 = cljs.core.nth.call(null,vec__31179_31219,(0),null);
var map__31182_31221 = cljs.core.nth.call(null,vec__31179_31219,(1),null);
var map__31182_31222__$1 = ((((!((map__31182_31221 == null)))?(((((map__31182_31221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31182_31221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31182_31221):map__31182_31221);
var doc_31223 = cljs.core.get.call(null,map__31182_31222__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31224 = cljs.core.get.call(null,map__31182_31222__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31220);

cljs.core.println.call(null," ",arglists_31224);

if(cljs.core.truth_(doc_31223)){
cljs.core.println.call(null," ",doc_31223);
} else {
}


var G__31225 = seq__31175_31215;
var G__31226 = chunk__31176_31216;
var G__31227 = count__31177_31217;
var G__31228 = (i__31178_31218 + (1));
seq__31175_31215 = G__31225;
chunk__31176_31216 = G__31226;
count__31177_31217 = G__31227;
i__31178_31218 = G__31228;
continue;
} else {
var temp__5457__auto___31229 = cljs.core.seq.call(null,seq__31175_31215);
if(temp__5457__auto___31229){
var seq__31175_31230__$1 = temp__5457__auto___31229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31175_31230__$1)){
var c__4319__auto___31231 = cljs.core.chunk_first.call(null,seq__31175_31230__$1);
var G__31232 = cljs.core.chunk_rest.call(null,seq__31175_31230__$1);
var G__31233 = c__4319__auto___31231;
var G__31234 = cljs.core.count.call(null,c__4319__auto___31231);
var G__31235 = (0);
seq__31175_31215 = G__31232;
chunk__31176_31216 = G__31233;
count__31177_31217 = G__31234;
i__31178_31218 = G__31235;
continue;
} else {
var vec__31184_31236 = cljs.core.first.call(null,seq__31175_31230__$1);
var name_31237 = cljs.core.nth.call(null,vec__31184_31236,(0),null);
var map__31187_31238 = cljs.core.nth.call(null,vec__31184_31236,(1),null);
var map__31187_31239__$1 = ((((!((map__31187_31238 == null)))?(((((map__31187_31238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31187_31238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31187_31238):map__31187_31238);
var doc_31240 = cljs.core.get.call(null,map__31187_31239__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31241 = cljs.core.get.call(null,map__31187_31239__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31237);

cljs.core.println.call(null," ",arglists_31241);

if(cljs.core.truth_(doc_31240)){
cljs.core.println.call(null," ",doc_31240);
} else {
}


var G__31242 = cljs.core.next.call(null,seq__31175_31230__$1);
var G__31243 = null;
var G__31244 = (0);
var G__31245 = (0);
seq__31175_31215 = G__31242;
chunk__31176_31216 = G__31243;
count__31177_31217 = G__31244;
i__31178_31218 = G__31245;
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

var seq__31189 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31190 = null;
var count__31191 = (0);
var i__31192 = (0);
while(true){
if((i__31192 < count__31191)){
var role = cljs.core._nth.call(null,chunk__31190,i__31192);
var temp__5457__auto___31246__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31246__$1)){
var spec_31247 = temp__5457__auto___31246__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31247));
} else {
}


var G__31248 = seq__31189;
var G__31249 = chunk__31190;
var G__31250 = count__31191;
var G__31251 = (i__31192 + (1));
seq__31189 = G__31248;
chunk__31190 = G__31249;
count__31191 = G__31250;
i__31192 = G__31251;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31189);
if(temp__5457__auto____$1){
var seq__31189__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31189__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31189__$1);
var G__31252 = cljs.core.chunk_rest.call(null,seq__31189__$1);
var G__31253 = c__4319__auto__;
var G__31254 = cljs.core.count.call(null,c__4319__auto__);
var G__31255 = (0);
seq__31189 = G__31252;
chunk__31190 = G__31253;
count__31191 = G__31254;
i__31192 = G__31255;
continue;
} else {
var role = cljs.core.first.call(null,seq__31189__$1);
var temp__5457__auto___31256__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31256__$2)){
var spec_31257 = temp__5457__auto___31256__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31257));
} else {
}


var G__31258 = cljs.core.next.call(null,seq__31189__$1);
var G__31259 = null;
var G__31260 = (0);
var G__31261 = (0);
seq__31189 = G__31258;
chunk__31190 = G__31259;
count__31191 = G__31260;
i__31192 = G__31261;
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

//# sourceMappingURL=repl.js.map?rel=1530742102229
