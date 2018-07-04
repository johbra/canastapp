// Compiled by ClojureScript 1.10.238 {}
goog.provide('canastcljs.spieler');
goog.require('cljs.core');
canastcljs.spieler.__GT_Spieler = (function canastcljs$spieler$__GT_Spieler(n){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"resultate","resultate",-649999987),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"summe","summe",-650249817),(0),new cljs.core.Keyword(null,"spieler-name","spieler-name",-1325659791),n,new cljs.core.Keyword(null,"gewonnene-spiele","gewonnene-spiele",-1244237350),(0)], null);
});
canastcljs.spieler.resultate = (function canastcljs$spieler$resultate(sp){
return new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(sp);
});
canastcljs.spieler.spieler_name = (function canastcljs$spieler$spieler_name(s){
return new cljs.core.Keyword(null,"spieler-name","spieler-name",-1325659791).cljs$core$IFn$_invoke$arity$1(s);
});
canastcljs.spieler.registriere = (function canastcljs$spieler$registriere(s,r){
var resultate = cljs.core.conj.call(null,new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(s),r);
var summe = cljs.core.reduce.call(null,cljs.core._PLUS_,resultate);
var spieler = cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"resultate","resultate",-649999987),resultate,new cljs.core.Keyword(null,"summe","summe",-650249817),summe);
return spieler;
});
canastcljs.spieler.korrigiere = (function canastcljs$spieler$korrigiere(s,r){
var resultate = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(s),(cljs.core.count.call(null,new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(s)) - (1)),r);
var summe = cljs.core.reduce.call(null,cljs.core._PLUS_,resultate);
var spieler = cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"resultate","resultate",-649999987),resultate,new cljs.core.Keyword(null,"summe","summe",-650249817),summe);
return spieler;
});
canastcljs.spieler.zwischen_summe = (function canastcljs$spieler$zwischen_summe(s,runde){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.take.call(null,runde,new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(s)));
});

//# sourceMappingURL=spieler.js.map?rel=1530696299692
