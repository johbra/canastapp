// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31123){
var map__31124 = p__31123;
var map__31124__$1 = ((((!((map__31124 == null)))?(((((map__31124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31124):map__31124);
var m = map__31124__$1;
var n = cljs.core.get.call(null,map__31124__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31124__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31126_31148 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31127_31149 = null;
var count__31128_31150 = (0);
var i__31129_31151 = (0);
while(true){
if((i__31129_31151 < count__31128_31150)){
var f_31152 = cljs.core._nth.call(null,chunk__31127_31149,i__31129_31151);
cljs.core.println.call(null,"  ",f_31152);


var G__31153 = seq__31126_31148;
var G__31154 = chunk__31127_31149;
var G__31155 = count__31128_31150;
var G__31156 = (i__31129_31151 + (1));
seq__31126_31148 = G__31153;
chunk__31127_31149 = G__31154;
count__31128_31150 = G__31155;
i__31129_31151 = G__31156;
continue;
} else {
var temp__5457__auto___31157 = cljs.core.seq.call(null,seq__31126_31148);
if(temp__5457__auto___31157){
var seq__31126_31158__$1 = temp__5457__auto___31157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31126_31158__$1)){
var c__4319__auto___31159 = cljs.core.chunk_first.call(null,seq__31126_31158__$1);
var G__31160 = cljs.core.chunk_rest.call(null,seq__31126_31158__$1);
var G__31161 = c__4319__auto___31159;
var G__31162 = cljs.core.count.call(null,c__4319__auto___31159);
var G__31163 = (0);
seq__31126_31148 = G__31160;
chunk__31127_31149 = G__31161;
count__31128_31150 = G__31162;
i__31129_31151 = G__31163;
continue;
} else {
var f_31164 = cljs.core.first.call(null,seq__31126_31158__$1);
cljs.core.println.call(null,"  ",f_31164);


var G__31165 = cljs.core.next.call(null,seq__31126_31158__$1);
var G__31166 = null;
var G__31167 = (0);
var G__31168 = (0);
seq__31126_31148 = G__31165;
chunk__31127_31149 = G__31166;
count__31128_31150 = G__31167;
i__31129_31151 = G__31168;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31169 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31169);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31169)))?cljs.core.second.call(null,arglists_31169):arglists_31169));
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
var seq__31130_31170 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31131_31171 = null;
var count__31132_31172 = (0);
var i__31133_31173 = (0);
while(true){
if((i__31133_31173 < count__31132_31172)){
var vec__31134_31174 = cljs.core._nth.call(null,chunk__31131_31171,i__31133_31173);
var name_31175 = cljs.core.nth.call(null,vec__31134_31174,(0),null);
var map__31137_31176 = cljs.core.nth.call(null,vec__31134_31174,(1),null);
var map__31137_31177__$1 = ((((!((map__31137_31176 == null)))?(((((map__31137_31176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31137_31176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31137_31176):map__31137_31176);
var doc_31178 = cljs.core.get.call(null,map__31137_31177__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31179 = cljs.core.get.call(null,map__31137_31177__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31175);

cljs.core.println.call(null," ",arglists_31179);

if(cljs.core.truth_(doc_31178)){
cljs.core.println.call(null," ",doc_31178);
} else {
}


var G__31180 = seq__31130_31170;
var G__31181 = chunk__31131_31171;
var G__31182 = count__31132_31172;
var G__31183 = (i__31133_31173 + (1));
seq__31130_31170 = G__31180;
chunk__31131_31171 = G__31181;
count__31132_31172 = G__31182;
i__31133_31173 = G__31183;
continue;
} else {
var temp__5457__auto___31184 = cljs.core.seq.call(null,seq__31130_31170);
if(temp__5457__auto___31184){
var seq__31130_31185__$1 = temp__5457__auto___31184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31130_31185__$1)){
var c__4319__auto___31186 = cljs.core.chunk_first.call(null,seq__31130_31185__$1);
var G__31187 = cljs.core.chunk_rest.call(null,seq__31130_31185__$1);
var G__31188 = c__4319__auto___31186;
var G__31189 = cljs.core.count.call(null,c__4319__auto___31186);
var G__31190 = (0);
seq__31130_31170 = G__31187;
chunk__31131_31171 = G__31188;
count__31132_31172 = G__31189;
i__31133_31173 = G__31190;
continue;
} else {
var vec__31139_31191 = cljs.core.first.call(null,seq__31130_31185__$1);
var name_31192 = cljs.core.nth.call(null,vec__31139_31191,(0),null);
var map__31142_31193 = cljs.core.nth.call(null,vec__31139_31191,(1),null);
var map__31142_31194__$1 = ((((!((map__31142_31193 == null)))?(((((map__31142_31193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31142_31193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31142_31193):map__31142_31193);
var doc_31195 = cljs.core.get.call(null,map__31142_31194__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31196 = cljs.core.get.call(null,map__31142_31194__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31192);

cljs.core.println.call(null," ",arglists_31196);

if(cljs.core.truth_(doc_31195)){
cljs.core.println.call(null," ",doc_31195);
} else {
}


var G__31197 = cljs.core.next.call(null,seq__31130_31185__$1);
var G__31198 = null;
var G__31199 = (0);
var G__31200 = (0);
seq__31130_31170 = G__31197;
chunk__31131_31171 = G__31198;
count__31132_31172 = G__31199;
i__31133_31173 = G__31200;
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

var seq__31144 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31145 = null;
var count__31146 = (0);
var i__31147 = (0);
while(true){
if((i__31147 < count__31146)){
var role = cljs.core._nth.call(null,chunk__31145,i__31147);
var temp__5457__auto___31201__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31201__$1)){
var spec_31202 = temp__5457__auto___31201__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31202));
} else {
}


var G__31203 = seq__31144;
var G__31204 = chunk__31145;
var G__31205 = count__31146;
var G__31206 = (i__31147 + (1));
seq__31144 = G__31203;
chunk__31145 = G__31204;
count__31146 = G__31205;
i__31147 = G__31206;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31144);
if(temp__5457__auto____$1){
var seq__31144__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31144__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31144__$1);
var G__31207 = cljs.core.chunk_rest.call(null,seq__31144__$1);
var G__31208 = c__4319__auto__;
var G__31209 = cljs.core.count.call(null,c__4319__auto__);
var G__31210 = (0);
seq__31144 = G__31207;
chunk__31145 = G__31208;
count__31146 = G__31209;
i__31147 = G__31210;
continue;
} else {
var role = cljs.core.first.call(null,seq__31144__$1);
var temp__5457__auto___31211__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31211__$2)){
var spec_31212 = temp__5457__auto___31211__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31212));
} else {
}


var G__31213 = cljs.core.next.call(null,seq__31144__$1);
var G__31214 = null;
var G__31215 = (0);
var G__31216 = (0);
seq__31144 = G__31213;
chunk__31145 = G__31214;
count__31146 = G__31215;
i__31147 = G__31216;
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

//# sourceMappingURL=repl.js.map?rel=1530621496358
