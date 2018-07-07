// Compiled by ClojureScript 1.10.238 {}
goog.provide('canastcljs.spiel');
goog.require('cljs.core');
goog.require('canastcljs.spieler');
goog.require('canastcljs.drop_file_stream');
canastcljs.spiel.__GT_Spiel = (function canastcljs$spiel$__GT_Spiel(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"runde","runde",-1618531444),(0),new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863),false,new cljs.core.Keyword(null,"sieger","sieger",-247971207),null,new cljs.core.Keyword(null,"geber","geber",604746862),null], null);
});
canastcljs.spiel.geber = (function canastcljs$spiel$geber(spiel){
return new cljs.core.Keyword(null,"geber","geber",604746862).cljs$core$IFn$_invoke$arity$1(spiel);
});
canastcljs.spiel.runde = (function canastcljs$spiel$runde(spiel){
return new cljs.core.Keyword(null,"runde","runde",-1618531444).cljs$core$IFn$_invoke$arity$1(spiel);
});
canastcljs.spiel.spiel_beendet_QMARK_ = (function canastcljs$spiel$spiel_beendet_QMARK_(spiel){
return new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863).cljs$core$IFn$_invoke$arity$1(spiel);
});
canastcljs.spiel.sieger = (function canastcljs$spiel$sieger(spiel){
return new cljs.core.Keyword(null,"sieger","sieger",-247971207).cljs$core$IFn$_invoke$arity$1(spiel);
});
canastcljs.spiel.spiel_nicht_beendet = (function canastcljs$spiel$spiel_nicht_beendet(spiel){
return cljs.core.assoc.call(null,spiel,new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863),false);
});
canastcljs.spiel.keine_korrektur = (function canastcljs$spiel$keine_korrektur(world){
return cljs.core.assoc.call(null,world,new cljs.core.Keyword(null,"korrektur","korrektur",588821201),false);
});
canastcljs.spiel.teilnehmer_vorhanden_QMARK_ = (function canastcljs$spiel$teilnehmer_vorhanden_QMARK_(spiel){
return !(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245).cljs$core$IFn$_invoke$arity$1(spiel)));
});
canastcljs.spiel.spieler_mit_namen = (function canastcljs$spiel$spieler_mit_namen(name,spiel){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30120_SHARP_){
return cljs.core._EQ_.call(null,name,new cljs.core.Keyword(null,"spieler-name","spieler-name",-1325659791).cljs$core$IFn$_invoke$arity$1(p1__30120_SHARP_));
}),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245).cljs$core$IFn$_invoke$arity$1(spiel)));
});
canastcljs.spiel.anzahl_runden = (function canastcljs$spiel$anzahl_runden(spiel){
return cljs.core.count.call(null,canastcljs.spieler.resultate.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245).cljs$core$IFn$_invoke$arity$1(spiel))));
});
canastcljs.spiel.geber_festgelegt_QMARK_ = (function canastcljs$spiel$geber_festgelegt_QMARK_(spiel){
return !((new cljs.core.Keyword(null,"geber","geber",604746862).cljs$core$IFn$_invoke$arity$1(spiel) == null));
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
canastcljs.spiel.neues_spiel = (function canastcljs$spiel$neues_spiel(sp_namen){
return cljs.core.assoc.call(null,canastcljs.spiel.__GT_Spiel.call(null),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),cljs.core.map.call(null,canastcljs.spieler.__GT_Spieler,sp_namen));
});
canastcljs.spiel.teilnehmer_namen = (function canastcljs$spiel$teilnehmer_namen(spiel){
return cljs.core.sort.call(null,cljs.core._GT_,cljs.core.map.call(null,canastcljs.spieler.spieler_name,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245).cljs$core$IFn$_invoke$arity$1(spiel)));
});
canastcljs.spiel.restauriere_spiel = (function canastcljs$spiel$restauriere_spiel(spiel){
return cljs.core.println.call(null,"restauriere-spiel");
});
canastcljs.spiel.registriere = (function canastcljs$spiel$registriere(spiel,resultate){
var teiln = cljs.core.map.call(null,(function (p__30122){
var vec__30123 = p__30122;
var name = cljs.core.nth.call(null,vec__30123,(0),null);
var res = cljs.core.nth.call(null,vec__30123,(1),null);
return canastcljs.spieler.registriere.call(null,canastcljs.spiel.spieler_mit_namen.call(null,name,spiel),res);
}),resultate);
var runde = (new cljs.core.Keyword(null,"runde","runde",-1618531444).cljs$core$IFn$_invoke$arity$1(spiel) + (1));
var sieger = cljs.core.last.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"summe","summe",-650249817),teiln));
var geber = cljs.core.first.call(null,cljs.core.filter.call(null,((function (teiln,runde,sieger){
return (function (p1__30121_SHARP_){
return !(cljs.core._EQ_.call(null,p1__30121_SHARP_,new cljs.core.Keyword(null,"geber","geber",604746862).cljs$core$IFn$_invoke$arity$1(spiel)));
});})(teiln,runde,sieger))
,canastcljs.spiel.teilnehmer_namen.call(null,spiel)));
var s = cljs.core.assoc.call(null,spiel,new cljs.core.Keyword(null,"runde","runde",-1618531444),runde);
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),teiln,new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863),(new cljs.core.Keyword(null,"summe","summe",-650249817).cljs$core$IFn$_invoke$arity$1(sieger) >= (5000)),new cljs.core.Keyword(null,"sieger","sieger",-247971207),(((new cljs.core.Keyword(null,"summe","summe",-650249817).cljs$core$IFn$_invoke$arity$1(sieger) >= (5000)))?new cljs.core.Keyword(null,"spieler-name","spieler-name",-1325659791).cljs$core$IFn$_invoke$arity$1(sieger):null),new cljs.core.Keyword(null,"geber","geber",604746862),geber);
});
canastcljs.spiel.korrigiere = (function canastcljs$spiel$korrigiere(spiel,resultate){
var teiln = cljs.core.map.call(null,(function (p__30126){
var vec__30127 = p__30126;
var name = cljs.core.nth.call(null,vec__30127,(0),null);
var res = cljs.core.nth.call(null,vec__30127,(1),null);
return canastcljs.spieler.korrigiere.call(null,canastcljs.spiel.spieler_mit_namen.call(null,name,spiel),res);
}),resultate);
var sieger = cljs.core.last.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"summe","summe",-650249817),teiln));
cljs.core.println.call(null,"sieger: ",sieger);

return cljs.core.assoc.call(null,spiel,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),teiln,new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863),(new cljs.core.Keyword(null,"summe","summe",-650249817).cljs$core$IFn$_invoke$arity$1(sieger) >= (5000)),new cljs.core.Keyword(null,"sieger","sieger",-247971207),(((new cljs.core.Keyword(null,"summe","summe",-650249817).cljs$core$IFn$_invoke$arity$1(sieger) >= (5000)))?new cljs.core.Keyword(null,"spieler-name","spieler-name",-1325659791).cljs$core$IFn$_invoke$arity$1(sieger):null));
});
canastcljs.spiel.resultat_in_runde = (function canastcljs$spiel$resultat_in_runde(spiel,tln,runde){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(canastcljs.spiel.spieler_mit_namen.call(null,tln,spiel)),runde);
});
canastcljs.spiel.zwischen_summe = (function canastcljs$spiel$zwischen_summe(spiel,tln,runde){
return canastcljs.spieler.zwischen_summe.call(null,canastcljs.spiel.spieler_mit_namen.call(null,tln,spiel),runde);
});
canastcljs.spiel.letztes_resultat = (function canastcljs$spiel$letztes_resultat(spiel,tln){
var s = canastcljs.spiel.spieler_mit_namen.call(null,tln,spiel);
return cljs.core.last.call(null,new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(s));
});

//# sourceMappingURL=spiel.js.map?rel=1530993663567
