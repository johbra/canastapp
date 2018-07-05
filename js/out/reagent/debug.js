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
var G__24585__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24586__i = 0, G__24586__a = new Array(arguments.length -  0);
while (G__24586__i < G__24586__a.length) {G__24586__a[G__24586__i] = arguments[G__24586__i + 0]; ++G__24586__i;}
  args = new cljs.core.IndexedSeq(G__24586__a,0,null);
} 
return G__24585__delegate.call(this,args);};
G__24585.cljs$lang$maxFixedArity = 0;
G__24585.cljs$lang$applyTo = (function (arglist__24587){
var args = cljs.core.seq(arglist__24587);
return G__24585__delegate(args);
});
G__24585.cljs$core$IFn$_invoke$arity$variadic = G__24585__delegate;
return G__24585;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__24588__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24589__i = 0, G__24589__a = new Array(arguments.length -  0);
while (G__24589__i < G__24589__a.length) {G__24589__a[G__24589__i] = arguments[G__24589__i + 0]; ++G__24589__i;}
  args = new cljs.core.IndexedSeq(G__24589__a,0,null);
} 
return G__24588__delegate.call(this,args);};
G__24588.cljs$lang$maxFixedArity = 0;
G__24588.cljs$lang$applyTo = (function (arglist__24590){
var args = cljs.core.seq(arglist__24590);
return G__24588__delegate(args);
});
G__24588.cljs$core$IFn$_invoke$arity$variadic = G__24588__delegate;
return G__24588;
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

//# sourceMappingURL=debug.js.map?rel=1530821381710
