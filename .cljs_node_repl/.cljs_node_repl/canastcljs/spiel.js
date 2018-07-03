// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('canastcljs.spiel');
goog.require('cljs.core');
goog.require('canastcljs.spieler');
goog.require('canastcljs.drop_file_stream');
canastcljs.spiel.__GT_Spiel = (function canastcljs$spiel$__GT_Spiel(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"runde","runde",-1618531444),(0),new cljs.core.Keyword(null,"spielBeendet?","spielBeendet?",1853259060),false,new cljs.core.Keyword(null,"sieger","sieger",-247971207),null,new cljs.core.Keyword(null,"geber","geber",604746862),null], null);
});
canastcljs.spiel.keine_korrektur = (function canastcljs$spiel$keine_korrektur(world){
return cljs.core.swap_BANG_.call(null,world,cljs.core.assoc,new cljs.core.Keyword(null,"korrektur","korrektur",588821201),false);
});
canastcljs.spiel.teilnehmer_vorhanden_QMARK_ = (function canastcljs$spiel$teilnehmer_vorhanden_QMARK_(spiel){
return !(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245).cljs$core$IFn$_invoke$arity$1(spiel)));
});
canastcljs.spiel.anzahl_runden = (function canastcljs$spiel$anzahl_runden(spiel){
return cljs.core.count.call(null,canastcljs.spieler.resultate.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245).cljs$core$IFn$_invoke$arity$1(spiel))));
});
canastcljs.spiel.begonnenes_spiel_QMARK_ = (function canastcljs$spiel$begonnenes_spiel_QMARK_(spiel){
var and__3911__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863).cljs$core$IFn$_invoke$arity$1(spiel));
if(and__3911__auto__){
var and__3911__auto____$1 = canastcljs.spiel.teilnehmer_vorhanden_QMARK_.call(null,spiel);
if(cljs.core.truth_(and__3911__auto____$1)){
return (canastcljs.spiel.anzahl_runden.call(null,spiel) > (0));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
canastcljs.spiel.standard_spiel = (function canastcljs$spiel$standard_spiel(w){
cljs.core.swap_BANG_.call(null,w,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,w),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canastcljs.spieler.__GT_Spieler.call(null,"Meike"),canastcljs.spieler.__GT_Spieler.call(null,"Hannes")], null)));

cljs.core.swap_BANG_.call(null,w,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,w),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"beendet","beendet",1499947886)], null),false));

return cljs.core.swap_BANG_.call(null,w,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,w),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"geber","geber",604746862)], null),null));
});
canastcljs.spiel.neues_spiel = (function canastcljs$spiel$neues_spiel(world){
if(cljs.core.truth_(canastcljs.spiel.begonnenes_spiel_QMARK_.call(null,canastcljs.spiel.spiel))){
cljs.core.println.call(null,"Es gibt ein angefangenes Spiel");
} else {
}

cljs.core.println.call(null,"neues-spiel");

if(cljs.core.truth_(canastcljs.drop_file_stream.exists_file_named_QMARK_.call(null,"model.fuel"))){
return cljs.core.println.call(null,"begonnens Spiel fortsetzen?");
} else {
canastcljs.spiel.keine_korrektur.call(null,world);

return canastcljs.spiel.standard_spiel.call(null,world);
}
});
canastcljs.spiel.restauriere_spiel = (function canastcljs$spiel$restauriere_spiel(spiel){
return cljs.core.println.call(null,"restauriere-spiel");
});

//# sourceMappingURL=spiel.js.map
