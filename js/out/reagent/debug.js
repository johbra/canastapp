// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__24586__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24587__i = 0, G__24587__a = new Array(arguments.length -  0);
while (G__24587__i < G__24587__a.length) {G__24587__a[G__24587__i] = arguments[G__24587__i + 0]; ++G__24587__i;}
  args = new cljs.core.IndexedSeq(G__24587__a,0,null);
} 
return G__24586__delegate.call(this,args);};
G__24586.cljs$lang$maxFixedArity = 0;
G__24586.cljs$lang$applyTo = (function (arglist__24588){
var args = cljs.core.seq(arglist__24588);
return G__24586__delegate(args);
});
G__24586.cljs$core$IFn$_invoke$arity$variadic = G__24586__delegate;
return G__24586;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__24589__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24590__i = 0, G__24590__a = new Array(arguments.length -  0);
while (G__24590__i < G__24590__a.length) {G__24590__a[G__24590__i] = arguments[G__24590__i + 0]; ++G__24590__i;}
  args = new cljs.core.IndexedSeq(G__24590__a,0,null);
} 
return G__24589__delegate.call(this,args);};
G__24589.cljs$lang$maxFixedArity = 0;
G__24589.cljs$lang$applyTo = (function (arglist__24591){
var args = cljs.core.seq(arglist__24591);
return G__24589__delegate(args);
});
G__24589.cljs$core$IFn$_invoke$arity$variadic = G__24589__delegate;
return G__24589;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1530621481189
