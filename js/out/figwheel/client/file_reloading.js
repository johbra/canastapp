// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29705_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29705_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29706 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29707 = null;
var count__29708 = (0);
var i__29709 = (0);
while(true){
if((i__29709 < count__29708)){
var n = cljs.core._nth.call(null,chunk__29707,i__29709);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29710 = seq__29706;
var G__29711 = chunk__29707;
var G__29712 = count__29708;
var G__29713 = (i__29709 + (1));
seq__29706 = G__29710;
chunk__29707 = G__29711;
count__29708 = G__29712;
i__29709 = G__29713;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29706);
if(temp__5457__auto__){
var seq__29706__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29706__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29706__$1);
var G__29714 = cljs.core.chunk_rest.call(null,seq__29706__$1);
var G__29715 = c__4319__auto__;
var G__29716 = cljs.core.count.call(null,c__4319__auto__);
var G__29717 = (0);
seq__29706 = G__29714;
chunk__29707 = G__29715;
count__29708 = G__29716;
i__29709 = G__29717;
continue;
} else {
var n = cljs.core.first.call(null,seq__29706__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29718 = cljs.core.next.call(null,seq__29706__$1);
var G__29719 = null;
var G__29720 = (0);
var G__29721 = (0);
seq__29706 = G__29718;
chunk__29707 = G__29719;
count__29708 = G__29720;
i__29709 = G__29721;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29722){
var vec__29723 = p__29722;
var _ = cljs.core.nth.call(null,vec__29723,(0),null);
var v = cljs.core.nth.call(null,vec__29723,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29726){
var vec__29727 = p__29726;
var k = cljs.core.nth.call(null,vec__29727,(0),null);
var v = cljs.core.nth.call(null,vec__29727,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29739_29747 = cljs.core.seq.call(null,deps);
var chunk__29740_29748 = null;
var count__29741_29749 = (0);
var i__29742_29750 = (0);
while(true){
if((i__29742_29750 < count__29741_29749)){
var dep_29751 = cljs.core._nth.call(null,chunk__29740_29748,i__29742_29750);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29751;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29751));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29751,(depth + (1)),state);
} else {
}


var G__29752 = seq__29739_29747;
var G__29753 = chunk__29740_29748;
var G__29754 = count__29741_29749;
var G__29755 = (i__29742_29750 + (1));
seq__29739_29747 = G__29752;
chunk__29740_29748 = G__29753;
count__29741_29749 = G__29754;
i__29742_29750 = G__29755;
continue;
} else {
var temp__5457__auto___29756 = cljs.core.seq.call(null,seq__29739_29747);
if(temp__5457__auto___29756){
var seq__29739_29757__$1 = temp__5457__auto___29756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29739_29757__$1)){
var c__4319__auto___29758 = cljs.core.chunk_first.call(null,seq__29739_29757__$1);
var G__29759 = cljs.core.chunk_rest.call(null,seq__29739_29757__$1);
var G__29760 = c__4319__auto___29758;
var G__29761 = cljs.core.count.call(null,c__4319__auto___29758);
var G__29762 = (0);
seq__29739_29747 = G__29759;
chunk__29740_29748 = G__29760;
count__29741_29749 = G__29761;
i__29742_29750 = G__29762;
continue;
} else {
var dep_29763 = cljs.core.first.call(null,seq__29739_29757__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29763;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29763));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29763,(depth + (1)),state);
} else {
}


var G__29764 = cljs.core.next.call(null,seq__29739_29757__$1);
var G__29765 = null;
var G__29766 = (0);
var G__29767 = (0);
seq__29739_29747 = G__29764;
chunk__29740_29748 = G__29765;
count__29741_29749 = G__29766;
i__29742_29750 = G__29767;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29743){
var vec__29744 = p__29743;
var seq__29745 = cljs.core.seq.call(null,vec__29744);
var first__29746 = cljs.core.first.call(null,seq__29745);
var seq__29745__$1 = cljs.core.next.call(null,seq__29745);
var x = first__29746;
var xs = seq__29745__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29744,seq__29745,first__29746,seq__29745__$1,x,xs,get_deps__$1){
return (function (p1__29730_SHARP_){
return clojure.set.difference.call(null,p1__29730_SHARP_,x);
});})(vec__29744,seq__29745,first__29746,seq__29745__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29768 = cljs.core.seq.call(null,provides);
var chunk__29769 = null;
var count__29770 = (0);
var i__29771 = (0);
while(true){
if((i__29771 < count__29770)){
var prov = cljs.core._nth.call(null,chunk__29769,i__29771);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29772_29780 = cljs.core.seq.call(null,requires);
var chunk__29773_29781 = null;
var count__29774_29782 = (0);
var i__29775_29783 = (0);
while(true){
if((i__29775_29783 < count__29774_29782)){
var req_29784 = cljs.core._nth.call(null,chunk__29773_29781,i__29775_29783);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29784,prov);


var G__29785 = seq__29772_29780;
var G__29786 = chunk__29773_29781;
var G__29787 = count__29774_29782;
var G__29788 = (i__29775_29783 + (1));
seq__29772_29780 = G__29785;
chunk__29773_29781 = G__29786;
count__29774_29782 = G__29787;
i__29775_29783 = G__29788;
continue;
} else {
var temp__5457__auto___29789 = cljs.core.seq.call(null,seq__29772_29780);
if(temp__5457__auto___29789){
var seq__29772_29790__$1 = temp__5457__auto___29789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29772_29790__$1)){
var c__4319__auto___29791 = cljs.core.chunk_first.call(null,seq__29772_29790__$1);
var G__29792 = cljs.core.chunk_rest.call(null,seq__29772_29790__$1);
var G__29793 = c__4319__auto___29791;
var G__29794 = cljs.core.count.call(null,c__4319__auto___29791);
var G__29795 = (0);
seq__29772_29780 = G__29792;
chunk__29773_29781 = G__29793;
count__29774_29782 = G__29794;
i__29775_29783 = G__29795;
continue;
} else {
var req_29796 = cljs.core.first.call(null,seq__29772_29790__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29796,prov);


var G__29797 = cljs.core.next.call(null,seq__29772_29790__$1);
var G__29798 = null;
var G__29799 = (0);
var G__29800 = (0);
seq__29772_29780 = G__29797;
chunk__29773_29781 = G__29798;
count__29774_29782 = G__29799;
i__29775_29783 = G__29800;
continue;
}
} else {
}
}
break;
}


var G__29801 = seq__29768;
var G__29802 = chunk__29769;
var G__29803 = count__29770;
var G__29804 = (i__29771 + (1));
seq__29768 = G__29801;
chunk__29769 = G__29802;
count__29770 = G__29803;
i__29771 = G__29804;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29768);
if(temp__5457__auto__){
var seq__29768__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29768__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29768__$1);
var G__29805 = cljs.core.chunk_rest.call(null,seq__29768__$1);
var G__29806 = c__4319__auto__;
var G__29807 = cljs.core.count.call(null,c__4319__auto__);
var G__29808 = (0);
seq__29768 = G__29805;
chunk__29769 = G__29806;
count__29770 = G__29807;
i__29771 = G__29808;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29768__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29776_29809 = cljs.core.seq.call(null,requires);
var chunk__29777_29810 = null;
var count__29778_29811 = (0);
var i__29779_29812 = (0);
while(true){
if((i__29779_29812 < count__29778_29811)){
var req_29813 = cljs.core._nth.call(null,chunk__29777_29810,i__29779_29812);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29813,prov);


var G__29814 = seq__29776_29809;
var G__29815 = chunk__29777_29810;
var G__29816 = count__29778_29811;
var G__29817 = (i__29779_29812 + (1));
seq__29776_29809 = G__29814;
chunk__29777_29810 = G__29815;
count__29778_29811 = G__29816;
i__29779_29812 = G__29817;
continue;
} else {
var temp__5457__auto___29818__$1 = cljs.core.seq.call(null,seq__29776_29809);
if(temp__5457__auto___29818__$1){
var seq__29776_29819__$1 = temp__5457__auto___29818__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29776_29819__$1)){
var c__4319__auto___29820 = cljs.core.chunk_first.call(null,seq__29776_29819__$1);
var G__29821 = cljs.core.chunk_rest.call(null,seq__29776_29819__$1);
var G__29822 = c__4319__auto___29820;
var G__29823 = cljs.core.count.call(null,c__4319__auto___29820);
var G__29824 = (0);
seq__29776_29809 = G__29821;
chunk__29777_29810 = G__29822;
count__29778_29811 = G__29823;
i__29779_29812 = G__29824;
continue;
} else {
var req_29825 = cljs.core.first.call(null,seq__29776_29819__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29825,prov);


var G__29826 = cljs.core.next.call(null,seq__29776_29819__$1);
var G__29827 = null;
var G__29828 = (0);
var G__29829 = (0);
seq__29776_29809 = G__29826;
chunk__29777_29810 = G__29827;
count__29778_29811 = G__29828;
i__29779_29812 = G__29829;
continue;
}
} else {
}
}
break;
}


var G__29830 = cljs.core.next.call(null,seq__29768__$1);
var G__29831 = null;
var G__29832 = (0);
var G__29833 = (0);
seq__29768 = G__29830;
chunk__29769 = G__29831;
count__29770 = G__29832;
i__29771 = G__29833;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29834_29838 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29835_29839 = null;
var count__29836_29840 = (0);
var i__29837_29841 = (0);
while(true){
if((i__29837_29841 < count__29836_29840)){
var ns_29842 = cljs.core._nth.call(null,chunk__29835_29839,i__29837_29841);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29842);


var G__29843 = seq__29834_29838;
var G__29844 = chunk__29835_29839;
var G__29845 = count__29836_29840;
var G__29846 = (i__29837_29841 + (1));
seq__29834_29838 = G__29843;
chunk__29835_29839 = G__29844;
count__29836_29840 = G__29845;
i__29837_29841 = G__29846;
continue;
} else {
var temp__5457__auto___29847 = cljs.core.seq.call(null,seq__29834_29838);
if(temp__5457__auto___29847){
var seq__29834_29848__$1 = temp__5457__auto___29847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29834_29848__$1)){
var c__4319__auto___29849 = cljs.core.chunk_first.call(null,seq__29834_29848__$1);
var G__29850 = cljs.core.chunk_rest.call(null,seq__29834_29848__$1);
var G__29851 = c__4319__auto___29849;
var G__29852 = cljs.core.count.call(null,c__4319__auto___29849);
var G__29853 = (0);
seq__29834_29838 = G__29850;
chunk__29835_29839 = G__29851;
count__29836_29840 = G__29852;
i__29837_29841 = G__29853;
continue;
} else {
var ns_29854 = cljs.core.first.call(null,seq__29834_29848__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29854);


var G__29855 = cljs.core.next.call(null,seq__29834_29848__$1);
var G__29856 = null;
var G__29857 = (0);
var G__29858 = (0);
seq__29834_29838 = G__29855;
chunk__29835_29839 = G__29856;
count__29836_29840 = G__29857;
i__29837_29841 = G__29858;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29859__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29860__i = 0, G__29860__a = new Array(arguments.length -  0);
while (G__29860__i < G__29860__a.length) {G__29860__a[G__29860__i] = arguments[G__29860__i + 0]; ++G__29860__i;}
  args = new cljs.core.IndexedSeq(G__29860__a,0,null);
} 
return G__29859__delegate.call(this,args);};
G__29859.cljs$lang$maxFixedArity = 0;
G__29859.cljs$lang$applyTo = (function (arglist__29861){
var args = cljs.core.seq(arglist__29861);
return G__29859__delegate(args);
});
G__29859.cljs$core$IFn$_invoke$arity$variadic = G__29859__delegate;
return G__29859;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29862_SHARP_,p2__29863_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29862_SHARP_)].join('')),p2__29863_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29864_SHARP_,p2__29865_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29864_SHARP_)].join(''),p2__29865_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29866 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29866.addCallback(((function (G__29866){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29866))
);

G__29866.addErrback(((function (G__29866){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29866))
);

return G__29866;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29867){if((e29867 instanceof Error)){
var e = e29867;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29867;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29868){if((e29868 instanceof Error)){
var e = e29868;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29868;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29869 = cljs.core._EQ_;
var expr__29870 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29869.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29870))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29869.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29870))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29869.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29870))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29869,expr__29870){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29869,expr__29870))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29872,callback){
var map__29873 = p__29872;
var map__29873__$1 = ((((!((map__29873 == null)))?(((((map__29873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29873):map__29873);
var file_msg = map__29873__$1;
var request_url = cljs.core.get.call(null,map__29873__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29873,map__29873__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29873,map__29873__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto__){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto__){
return (function (state_29911){
var state_val_29912 = (state_29911[(1)]);
if((state_val_29912 === (7))){
var inst_29907 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29913_29939 = state_29911__$1;
(statearr_29913_29939[(2)] = inst_29907);

(statearr_29913_29939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (1))){
var state_29911__$1 = state_29911;
var statearr_29914_29940 = state_29911__$1;
(statearr_29914_29940[(2)] = null);

(statearr_29914_29940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (4))){
var inst_29877 = (state_29911[(7)]);
var inst_29877__$1 = (state_29911[(2)]);
var state_29911__$1 = (function (){var statearr_29915 = state_29911;
(statearr_29915[(7)] = inst_29877__$1);

return statearr_29915;
})();
if(cljs.core.truth_(inst_29877__$1)){
var statearr_29916_29941 = state_29911__$1;
(statearr_29916_29941[(1)] = (5));

} else {
var statearr_29917_29942 = state_29911__$1;
(statearr_29917_29942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (15))){
var inst_29890 = (state_29911[(8)]);
var inst_29892 = (state_29911[(9)]);
var inst_29894 = inst_29892.call(null,inst_29890);
var state_29911__$1 = state_29911;
var statearr_29918_29943 = state_29911__$1;
(statearr_29918_29943[(2)] = inst_29894);

(statearr_29918_29943[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (13))){
var inst_29901 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29919_29944 = state_29911__$1;
(statearr_29919_29944[(2)] = inst_29901);

(statearr_29919_29944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (6))){
var state_29911__$1 = state_29911;
var statearr_29920_29945 = state_29911__$1;
(statearr_29920_29945[(2)] = null);

(statearr_29920_29945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (17))){
var inst_29898 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29921_29946 = state_29911__$1;
(statearr_29921_29946[(2)] = inst_29898);

(statearr_29921_29946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (3))){
var inst_29909 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29911__$1,inst_29909);
} else {
if((state_val_29912 === (12))){
var state_29911__$1 = state_29911;
var statearr_29922_29947 = state_29911__$1;
(statearr_29922_29947[(2)] = null);

(statearr_29922_29947[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (2))){
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29912 === (11))){
var inst_29882 = (state_29911[(10)]);
var inst_29888 = figwheel.client.file_reloading.blocking_load.call(null,inst_29882);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(14),inst_29888);
} else {
if((state_val_29912 === (9))){
var inst_29882 = (state_29911[(10)]);
var state_29911__$1 = state_29911;
if(cljs.core.truth_(inst_29882)){
var statearr_29923_29948 = state_29911__$1;
(statearr_29923_29948[(1)] = (11));

} else {
var statearr_29924_29949 = state_29911__$1;
(statearr_29924_29949[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (5))){
var inst_29877 = (state_29911[(7)]);
var inst_29883 = (state_29911[(11)]);
var inst_29882 = cljs.core.nth.call(null,inst_29877,(0),null);
var inst_29883__$1 = cljs.core.nth.call(null,inst_29877,(1),null);
var state_29911__$1 = (function (){var statearr_29925 = state_29911;
(statearr_29925[(10)] = inst_29882);

(statearr_29925[(11)] = inst_29883__$1);

return statearr_29925;
})();
if(cljs.core.truth_(inst_29883__$1)){
var statearr_29926_29950 = state_29911__$1;
(statearr_29926_29950[(1)] = (8));

} else {
var statearr_29927_29951 = state_29911__$1;
(statearr_29927_29951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (14))){
var inst_29882 = (state_29911[(10)]);
var inst_29892 = (state_29911[(9)]);
var inst_29890 = (state_29911[(2)]);
var inst_29891 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29892__$1 = cljs.core.get.call(null,inst_29891,inst_29882);
var state_29911__$1 = (function (){var statearr_29928 = state_29911;
(statearr_29928[(8)] = inst_29890);

(statearr_29928[(9)] = inst_29892__$1);

return statearr_29928;
})();
if(cljs.core.truth_(inst_29892__$1)){
var statearr_29929_29952 = state_29911__$1;
(statearr_29929_29952[(1)] = (15));

} else {
var statearr_29930_29953 = state_29911__$1;
(statearr_29930_29953[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (16))){
var inst_29890 = (state_29911[(8)]);
var inst_29896 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29890);
var state_29911__$1 = state_29911;
var statearr_29931_29954 = state_29911__$1;
(statearr_29931_29954[(2)] = inst_29896);

(statearr_29931_29954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (10))){
var inst_29903 = (state_29911[(2)]);
var state_29911__$1 = (function (){var statearr_29932 = state_29911;
(statearr_29932[(12)] = inst_29903);

return statearr_29932;
})();
var statearr_29933_29955 = state_29911__$1;
(statearr_29933_29955[(2)] = null);

(statearr_29933_29955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (8))){
var inst_29883 = (state_29911[(11)]);
var inst_29885 = eval(inst_29883);
var state_29911__$1 = state_29911;
var statearr_29934_29956 = state_29911__$1;
(statearr_29934_29956[(2)] = inst_29885);

(statearr_29934_29956[(1)] = (10));


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
});})(c__26662__auto__))
;
return ((function (switch__26572__auto__,c__26662__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26573__auto__ = null;
var figwheel$client$file_reloading$state_machine__26573__auto____0 = (function (){
var statearr_29935 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29935[(0)] = figwheel$client$file_reloading$state_machine__26573__auto__);

(statearr_29935[(1)] = (1));

return statearr_29935;
});
var figwheel$client$file_reloading$state_machine__26573__auto____1 = (function (state_29911){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_29911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e29936){if((e29936 instanceof Object)){
var ex__26576__auto__ = e29936;
var statearr_29937_29957 = state_29911;
(statearr_29937_29957[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29958 = state_29911;
state_29911 = G__29958;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26573__auto__ = function(state_29911){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26573__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26573__auto____1.call(this,state_29911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26573__auto____0;
figwheel$client$file_reloading$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26573__auto____1;
return figwheel$client$file_reloading$state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto__))
})();
var state__26664__auto__ = (function (){var statearr_29938 = f__26663__auto__.call(null);
(statearr_29938[(6)] = c__26662__auto__);

return statearr_29938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto__))
);

return c__26662__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29960 = arguments.length;
switch (G__29960) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29962,callback){
var map__29963 = p__29962;
var map__29963__$1 = ((((!((map__29963 == null)))?(((((map__29963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29963):map__29963);
var file_msg = map__29963__$1;
var namespace = cljs.core.get.call(null,map__29963__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29963,map__29963__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29963,map__29963__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29965){
var map__29966 = p__29965;
var map__29966__$1 = ((((!((map__29966 == null)))?(((((map__29966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29966):map__29966);
var file_msg = map__29966__$1;
var namespace = cljs.core.get.call(null,map__29966__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29968){
var map__29969 = p__29968;
var map__29969__$1 = ((((!((map__29969 == null)))?(((((map__29969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29969):map__29969);
var file_msg = map__29969__$1;
var namespace = cljs.core.get.call(null,map__29969__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29971,callback){
var map__29972 = p__29971;
var map__29972__$1 = ((((!((map__29972 == null)))?(((((map__29972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29972):map__29972);
var file_msg = map__29972__$1;
var request_url = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26662__auto___30022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___30022,out){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___30022,out){
return (function (state_30007){
var state_val_30008 = (state_30007[(1)]);
if((state_val_30008 === (1))){
var inst_29981 = cljs.core.seq.call(null,files);
var inst_29982 = cljs.core.first.call(null,inst_29981);
var inst_29983 = cljs.core.next.call(null,inst_29981);
var inst_29984 = files;
var state_30007__$1 = (function (){var statearr_30009 = state_30007;
(statearr_30009[(7)] = inst_29982);

(statearr_30009[(8)] = inst_29983);

(statearr_30009[(9)] = inst_29984);

return statearr_30009;
})();
var statearr_30010_30023 = state_30007__$1;
(statearr_30010_30023[(2)] = null);

(statearr_30010_30023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (2))){
var inst_29990 = (state_30007[(10)]);
var inst_29984 = (state_30007[(9)]);
var inst_29989 = cljs.core.seq.call(null,inst_29984);
var inst_29990__$1 = cljs.core.first.call(null,inst_29989);
var inst_29991 = cljs.core.next.call(null,inst_29989);
var inst_29992 = (inst_29990__$1 == null);
var inst_29993 = cljs.core.not.call(null,inst_29992);
var state_30007__$1 = (function (){var statearr_30011 = state_30007;
(statearr_30011[(11)] = inst_29991);

(statearr_30011[(10)] = inst_29990__$1);

return statearr_30011;
})();
if(inst_29993){
var statearr_30012_30024 = state_30007__$1;
(statearr_30012_30024[(1)] = (4));

} else {
var statearr_30013_30025 = state_30007__$1;
(statearr_30013_30025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (3))){
var inst_30005 = (state_30007[(2)]);
var state_30007__$1 = state_30007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30007__$1,inst_30005);
} else {
if((state_val_30008 === (4))){
var inst_29990 = (state_30007[(10)]);
var inst_29995 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29990);
var state_30007__$1 = state_30007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30007__$1,(7),inst_29995);
} else {
if((state_val_30008 === (5))){
var inst_30001 = cljs.core.async.close_BANG_.call(null,out);
var state_30007__$1 = state_30007;
var statearr_30014_30026 = state_30007__$1;
(statearr_30014_30026[(2)] = inst_30001);

(statearr_30014_30026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (6))){
var inst_30003 = (state_30007[(2)]);
var state_30007__$1 = state_30007;
var statearr_30015_30027 = state_30007__$1;
(statearr_30015_30027[(2)] = inst_30003);

(statearr_30015_30027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (7))){
var inst_29991 = (state_30007[(11)]);
var inst_29997 = (state_30007[(2)]);
var inst_29998 = cljs.core.async.put_BANG_.call(null,out,inst_29997);
var inst_29984 = inst_29991;
var state_30007__$1 = (function (){var statearr_30016 = state_30007;
(statearr_30016[(12)] = inst_29998);

(statearr_30016[(9)] = inst_29984);

return statearr_30016;
})();
var statearr_30017_30028 = state_30007__$1;
(statearr_30017_30028[(2)] = null);

(statearr_30017_30028[(1)] = (2));


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
});})(c__26662__auto___30022,out))
;
return ((function (switch__26572__auto__,c__26662__auto___30022,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26573__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26573__auto____0 = (function (){
var statearr_30018 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30018[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26573__auto__);

(statearr_30018[(1)] = (1));

return statearr_30018;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26573__auto____1 = (function (state_30007){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_30007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e30019){if((e30019 instanceof Object)){
var ex__26576__auto__ = e30019;
var statearr_30020_30029 = state_30007;
(statearr_30020_30029[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30030 = state_30007;
state_30007 = G__30030;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26573__auto__ = function(state_30007){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26573__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26573__auto____1.call(this,state_30007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26573__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26573__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___30022,out))
})();
var state__26664__auto__ = (function (){var statearr_30021 = f__26663__auto__.call(null);
(statearr_30021[(6)] = c__26662__auto___30022);

return statearr_30021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___30022,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30031,opts){
var map__30032 = p__30031;
var map__30032__$1 = ((((!((map__30032 == null)))?(((((map__30032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30032):map__30032);
var eval_body = cljs.core.get.call(null,map__30032__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30032__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30034){var e = e30034;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30035_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30035_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30036){
var vec__30037 = p__30036;
var k = cljs.core.nth.call(null,vec__30037,(0),null);
var v = cljs.core.nth.call(null,vec__30037,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30040){
var vec__30041 = p__30040;
var k = cljs.core.nth.call(null,vec__30041,(0),null);
var v = cljs.core.nth.call(null,vec__30041,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30047,p__30048){
var map__30049 = p__30047;
var map__30049__$1 = ((((!((map__30049 == null)))?(((((map__30049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30049):map__30049);
var opts = map__30049__$1;
var before_jsload = cljs.core.get.call(null,map__30049__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30049__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30049__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30050 = p__30048;
var map__30050__$1 = ((((!((map__30050 == null)))?(((((map__30050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30050):map__30050);
var msg = map__30050__$1;
var files = cljs.core.get.call(null,map__30050__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30050__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30050__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30204){
var state_val_30205 = (state_30204[(1)]);
if((state_val_30205 === (7))){
var inst_30066 = (state_30204[(7)]);
var inst_30065 = (state_30204[(8)]);
var inst_30067 = (state_30204[(9)]);
var inst_30064 = (state_30204[(10)]);
var inst_30072 = cljs.core._nth.call(null,inst_30065,inst_30067);
var inst_30073 = figwheel.client.file_reloading.eval_body.call(null,inst_30072,opts);
var inst_30074 = (inst_30067 + (1));
var tmp30206 = inst_30066;
var tmp30207 = inst_30065;
var tmp30208 = inst_30064;
var inst_30064__$1 = tmp30208;
var inst_30065__$1 = tmp30207;
var inst_30066__$1 = tmp30206;
var inst_30067__$1 = inst_30074;
var state_30204__$1 = (function (){var statearr_30209 = state_30204;
(statearr_30209[(7)] = inst_30066__$1);

(statearr_30209[(8)] = inst_30065__$1);

(statearr_30209[(11)] = inst_30073);

(statearr_30209[(9)] = inst_30067__$1);

(statearr_30209[(10)] = inst_30064__$1);

return statearr_30209;
})();
var statearr_30210_30293 = state_30204__$1;
(statearr_30210_30293[(2)] = null);

(statearr_30210_30293[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (20))){
var inst_30107 = (state_30204[(12)]);
var inst_30115 = figwheel.client.file_reloading.sort_files.call(null,inst_30107);
var state_30204__$1 = state_30204;
var statearr_30211_30294 = state_30204__$1;
(statearr_30211_30294[(2)] = inst_30115);

(statearr_30211_30294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (27))){
var state_30204__$1 = state_30204;
var statearr_30212_30295 = state_30204__$1;
(statearr_30212_30295[(2)] = null);

(statearr_30212_30295[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (1))){
var inst_30056 = (state_30204[(13)]);
var inst_30053 = before_jsload.call(null,files);
var inst_30054 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30055 = (function (){return ((function (inst_30056,inst_30053,inst_30054,state_val_30205,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30044_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30044_SHARP_);
});
;})(inst_30056,inst_30053,inst_30054,state_val_30205,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30056__$1 = cljs.core.filter.call(null,inst_30055,files);
var inst_30057 = cljs.core.not_empty.call(null,inst_30056__$1);
var state_30204__$1 = (function (){var statearr_30213 = state_30204;
(statearr_30213[(13)] = inst_30056__$1);

(statearr_30213[(14)] = inst_30053);

(statearr_30213[(15)] = inst_30054);

return statearr_30213;
})();
if(cljs.core.truth_(inst_30057)){
var statearr_30214_30296 = state_30204__$1;
(statearr_30214_30296[(1)] = (2));

} else {
var statearr_30215_30297 = state_30204__$1;
(statearr_30215_30297[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (24))){
var state_30204__$1 = state_30204;
var statearr_30216_30298 = state_30204__$1;
(statearr_30216_30298[(2)] = null);

(statearr_30216_30298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (39))){
var inst_30157 = (state_30204[(16)]);
var state_30204__$1 = state_30204;
var statearr_30217_30299 = state_30204__$1;
(statearr_30217_30299[(2)] = inst_30157);

(statearr_30217_30299[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (46))){
var inst_30199 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
var statearr_30218_30300 = state_30204__$1;
(statearr_30218_30300[(2)] = inst_30199);

(statearr_30218_30300[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (4))){
var inst_30101 = (state_30204[(2)]);
var inst_30102 = cljs.core.List.EMPTY;
var inst_30103 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30102);
var inst_30104 = (function (){return ((function (inst_30101,inst_30102,inst_30103,state_val_30205,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30045_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30045_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30045_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30045_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_30101,inst_30102,inst_30103,state_val_30205,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30105 = cljs.core.filter.call(null,inst_30104,files);
var inst_30106 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30107 = cljs.core.concat.call(null,inst_30105,inst_30106);
var state_30204__$1 = (function (){var statearr_30219 = state_30204;
(statearr_30219[(17)] = inst_30103);

(statearr_30219[(18)] = inst_30101);

(statearr_30219[(12)] = inst_30107);

return statearr_30219;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30220_30301 = state_30204__$1;
(statearr_30220_30301[(1)] = (16));

} else {
var statearr_30221_30302 = state_30204__$1;
(statearr_30221_30302[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (15))){
var inst_30091 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
var statearr_30222_30303 = state_30204__$1;
(statearr_30222_30303[(2)] = inst_30091);

(statearr_30222_30303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (21))){
var inst_30117 = (state_30204[(19)]);
var inst_30117__$1 = (state_30204[(2)]);
var inst_30118 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30117__$1);
var state_30204__$1 = (function (){var statearr_30223 = state_30204;
(statearr_30223[(19)] = inst_30117__$1);

return statearr_30223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30204__$1,(22),inst_30118);
} else {
if((state_val_30205 === (31))){
var inst_30202 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30204__$1,inst_30202);
} else {
if((state_val_30205 === (32))){
var inst_30157 = (state_30204[(16)]);
var inst_30162 = inst_30157.cljs$lang$protocol_mask$partition0$;
var inst_30163 = (inst_30162 & (64));
var inst_30164 = inst_30157.cljs$core$ISeq$;
var inst_30165 = (cljs.core.PROTOCOL_SENTINEL === inst_30164);
var inst_30166 = ((inst_30163) || (inst_30165));
var state_30204__$1 = state_30204;
if(cljs.core.truth_(inst_30166)){
var statearr_30224_30304 = state_30204__$1;
(statearr_30224_30304[(1)] = (35));

} else {
var statearr_30225_30305 = state_30204__$1;
(statearr_30225_30305[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (40))){
var inst_30179 = (state_30204[(20)]);
var inst_30178 = (state_30204[(2)]);
var inst_30179__$1 = cljs.core.get.call(null,inst_30178,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30180 = cljs.core.get.call(null,inst_30178,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30181 = cljs.core.not_empty.call(null,inst_30179__$1);
var state_30204__$1 = (function (){var statearr_30226 = state_30204;
(statearr_30226[(21)] = inst_30180);

(statearr_30226[(20)] = inst_30179__$1);

return statearr_30226;
})();
if(cljs.core.truth_(inst_30181)){
var statearr_30227_30306 = state_30204__$1;
(statearr_30227_30306[(1)] = (41));

} else {
var statearr_30228_30307 = state_30204__$1;
(statearr_30228_30307[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (33))){
var state_30204__$1 = state_30204;
var statearr_30229_30308 = state_30204__$1;
(statearr_30229_30308[(2)] = false);

(statearr_30229_30308[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (13))){
var inst_30077 = (state_30204[(22)]);
var inst_30081 = cljs.core.chunk_first.call(null,inst_30077);
var inst_30082 = cljs.core.chunk_rest.call(null,inst_30077);
var inst_30083 = cljs.core.count.call(null,inst_30081);
var inst_30064 = inst_30082;
var inst_30065 = inst_30081;
var inst_30066 = inst_30083;
var inst_30067 = (0);
var state_30204__$1 = (function (){var statearr_30230 = state_30204;
(statearr_30230[(7)] = inst_30066);

(statearr_30230[(8)] = inst_30065);

(statearr_30230[(9)] = inst_30067);

(statearr_30230[(10)] = inst_30064);

return statearr_30230;
})();
var statearr_30231_30309 = state_30204__$1;
(statearr_30231_30309[(2)] = null);

(statearr_30231_30309[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (22))){
var inst_30121 = (state_30204[(23)]);
var inst_30117 = (state_30204[(19)]);
var inst_30120 = (state_30204[(24)]);
var inst_30125 = (state_30204[(25)]);
var inst_30120__$1 = (state_30204[(2)]);
var inst_30121__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30120__$1);
var inst_30122 = (function (){var all_files = inst_30117;
var res_SINGLEQUOTE_ = inst_30120__$1;
var res = inst_30121__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30121,inst_30117,inst_30120,inst_30125,inst_30120__$1,inst_30121__$1,state_val_30205,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30046_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30046_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30121,inst_30117,inst_30120,inst_30125,inst_30120__$1,inst_30121__$1,state_val_30205,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30123 = cljs.core.filter.call(null,inst_30122,inst_30120__$1);
var inst_30124 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30125__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30124);
var inst_30126 = cljs.core.not_empty.call(null,inst_30125__$1);
var state_30204__$1 = (function (){var statearr_30232 = state_30204;
(statearr_30232[(23)] = inst_30121__$1);

(statearr_30232[(26)] = inst_30123);

(statearr_30232[(24)] = inst_30120__$1);

(statearr_30232[(25)] = inst_30125__$1);

return statearr_30232;
})();
if(cljs.core.truth_(inst_30126)){
var statearr_30233_30310 = state_30204__$1;
(statearr_30233_30310[(1)] = (23));

} else {
var statearr_30234_30311 = state_30204__$1;
(statearr_30234_30311[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (36))){
var state_30204__$1 = state_30204;
var statearr_30235_30312 = state_30204__$1;
(statearr_30235_30312[(2)] = false);

(statearr_30235_30312[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (41))){
var inst_30179 = (state_30204[(20)]);
var inst_30183 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30184 = cljs.core.map.call(null,inst_30183,inst_30179);
var inst_30185 = cljs.core.pr_str.call(null,inst_30184);
var inst_30186 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30185)].join('');
var inst_30187 = figwheel.client.utils.log.call(null,inst_30186);
var state_30204__$1 = state_30204;
var statearr_30236_30313 = state_30204__$1;
(statearr_30236_30313[(2)] = inst_30187);

(statearr_30236_30313[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (43))){
var inst_30180 = (state_30204[(21)]);
var inst_30190 = (state_30204[(2)]);
var inst_30191 = cljs.core.not_empty.call(null,inst_30180);
var state_30204__$1 = (function (){var statearr_30237 = state_30204;
(statearr_30237[(27)] = inst_30190);

return statearr_30237;
})();
if(cljs.core.truth_(inst_30191)){
var statearr_30238_30314 = state_30204__$1;
(statearr_30238_30314[(1)] = (44));

} else {
var statearr_30239_30315 = state_30204__$1;
(statearr_30239_30315[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (29))){
var inst_30121 = (state_30204[(23)]);
var inst_30117 = (state_30204[(19)]);
var inst_30123 = (state_30204[(26)]);
var inst_30157 = (state_30204[(16)]);
var inst_30120 = (state_30204[(24)]);
var inst_30125 = (state_30204[(25)]);
var inst_30153 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30156 = (function (){var all_files = inst_30117;
var res_SINGLEQUOTE_ = inst_30120;
var res = inst_30121;
var files_not_loaded = inst_30123;
var dependencies_that_loaded = inst_30125;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30121,inst_30117,inst_30123,inst_30157,inst_30120,inst_30125,inst_30153,state_val_30205,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30155){
var map__30240 = p__30155;
var map__30240__$1 = ((((!((map__30240 == null)))?(((((map__30240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30240):map__30240);
var namespace = cljs.core.get.call(null,map__30240__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30121,inst_30117,inst_30123,inst_30157,inst_30120,inst_30125,inst_30153,state_val_30205,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30157__$1 = cljs.core.group_by.call(null,inst_30156,inst_30123);
var inst_30159 = (inst_30157__$1 == null);
var inst_30160 = cljs.core.not.call(null,inst_30159);
var state_30204__$1 = (function (){var statearr_30242 = state_30204;
(statearr_30242[(16)] = inst_30157__$1);

(statearr_30242[(28)] = inst_30153);

return statearr_30242;
})();
if(inst_30160){
var statearr_30243_30316 = state_30204__$1;
(statearr_30243_30316[(1)] = (32));

} else {
var statearr_30244_30317 = state_30204__$1;
(statearr_30244_30317[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (44))){
var inst_30180 = (state_30204[(21)]);
var inst_30193 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30180);
var inst_30194 = cljs.core.pr_str.call(null,inst_30193);
var inst_30195 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30194)].join('');
var inst_30196 = figwheel.client.utils.log.call(null,inst_30195);
var state_30204__$1 = state_30204;
var statearr_30245_30318 = state_30204__$1;
(statearr_30245_30318[(2)] = inst_30196);

(statearr_30245_30318[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (6))){
var inst_30098 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
var statearr_30246_30319 = state_30204__$1;
(statearr_30246_30319[(2)] = inst_30098);

(statearr_30246_30319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (28))){
var inst_30123 = (state_30204[(26)]);
var inst_30150 = (state_30204[(2)]);
var inst_30151 = cljs.core.not_empty.call(null,inst_30123);
var state_30204__$1 = (function (){var statearr_30247 = state_30204;
(statearr_30247[(29)] = inst_30150);

return statearr_30247;
})();
if(cljs.core.truth_(inst_30151)){
var statearr_30248_30320 = state_30204__$1;
(statearr_30248_30320[(1)] = (29));

} else {
var statearr_30249_30321 = state_30204__$1;
(statearr_30249_30321[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (25))){
var inst_30121 = (state_30204[(23)]);
var inst_30137 = (state_30204[(2)]);
var inst_30138 = cljs.core.not_empty.call(null,inst_30121);
var state_30204__$1 = (function (){var statearr_30250 = state_30204;
(statearr_30250[(30)] = inst_30137);

return statearr_30250;
})();
if(cljs.core.truth_(inst_30138)){
var statearr_30251_30322 = state_30204__$1;
(statearr_30251_30322[(1)] = (26));

} else {
var statearr_30252_30323 = state_30204__$1;
(statearr_30252_30323[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (34))){
var inst_30173 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
if(cljs.core.truth_(inst_30173)){
var statearr_30253_30324 = state_30204__$1;
(statearr_30253_30324[(1)] = (38));

} else {
var statearr_30254_30325 = state_30204__$1;
(statearr_30254_30325[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (17))){
var state_30204__$1 = state_30204;
var statearr_30255_30326 = state_30204__$1;
(statearr_30255_30326[(2)] = recompile_dependents);

(statearr_30255_30326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (3))){
var state_30204__$1 = state_30204;
var statearr_30256_30327 = state_30204__$1;
(statearr_30256_30327[(2)] = null);

(statearr_30256_30327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (12))){
var inst_30094 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
var statearr_30257_30328 = state_30204__$1;
(statearr_30257_30328[(2)] = inst_30094);

(statearr_30257_30328[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (2))){
var inst_30056 = (state_30204[(13)]);
var inst_30063 = cljs.core.seq.call(null,inst_30056);
var inst_30064 = inst_30063;
var inst_30065 = null;
var inst_30066 = (0);
var inst_30067 = (0);
var state_30204__$1 = (function (){var statearr_30258 = state_30204;
(statearr_30258[(7)] = inst_30066);

(statearr_30258[(8)] = inst_30065);

(statearr_30258[(9)] = inst_30067);

(statearr_30258[(10)] = inst_30064);

return statearr_30258;
})();
var statearr_30259_30329 = state_30204__$1;
(statearr_30259_30329[(2)] = null);

(statearr_30259_30329[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (23))){
var inst_30121 = (state_30204[(23)]);
var inst_30117 = (state_30204[(19)]);
var inst_30123 = (state_30204[(26)]);
var inst_30120 = (state_30204[(24)]);
var inst_30125 = (state_30204[(25)]);
var inst_30128 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30130 = (function (){var all_files = inst_30117;
var res_SINGLEQUOTE_ = inst_30120;
var res = inst_30121;
var files_not_loaded = inst_30123;
var dependencies_that_loaded = inst_30125;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30121,inst_30117,inst_30123,inst_30120,inst_30125,inst_30128,state_val_30205,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30129){
var map__30260 = p__30129;
var map__30260__$1 = ((((!((map__30260 == null)))?(((((map__30260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30260):map__30260);
var request_url = cljs.core.get.call(null,map__30260__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30121,inst_30117,inst_30123,inst_30120,inst_30125,inst_30128,state_val_30205,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30131 = cljs.core.reverse.call(null,inst_30125);
var inst_30132 = cljs.core.map.call(null,inst_30130,inst_30131);
var inst_30133 = cljs.core.pr_str.call(null,inst_30132);
var inst_30134 = figwheel.client.utils.log.call(null,inst_30133);
var state_30204__$1 = (function (){var statearr_30262 = state_30204;
(statearr_30262[(31)] = inst_30128);

return statearr_30262;
})();
var statearr_30263_30330 = state_30204__$1;
(statearr_30263_30330[(2)] = inst_30134);

(statearr_30263_30330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (35))){
var state_30204__$1 = state_30204;
var statearr_30264_30331 = state_30204__$1;
(statearr_30264_30331[(2)] = true);

(statearr_30264_30331[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (19))){
var inst_30107 = (state_30204[(12)]);
var inst_30113 = figwheel.client.file_reloading.expand_files.call(null,inst_30107);
var state_30204__$1 = state_30204;
var statearr_30265_30332 = state_30204__$1;
(statearr_30265_30332[(2)] = inst_30113);

(statearr_30265_30332[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (11))){
var state_30204__$1 = state_30204;
var statearr_30266_30333 = state_30204__$1;
(statearr_30266_30333[(2)] = null);

(statearr_30266_30333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (9))){
var inst_30096 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
var statearr_30267_30334 = state_30204__$1;
(statearr_30267_30334[(2)] = inst_30096);

(statearr_30267_30334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (5))){
var inst_30066 = (state_30204[(7)]);
var inst_30067 = (state_30204[(9)]);
var inst_30069 = (inst_30067 < inst_30066);
var inst_30070 = inst_30069;
var state_30204__$1 = state_30204;
if(cljs.core.truth_(inst_30070)){
var statearr_30268_30335 = state_30204__$1;
(statearr_30268_30335[(1)] = (7));

} else {
var statearr_30269_30336 = state_30204__$1;
(statearr_30269_30336[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (14))){
var inst_30077 = (state_30204[(22)]);
var inst_30086 = cljs.core.first.call(null,inst_30077);
var inst_30087 = figwheel.client.file_reloading.eval_body.call(null,inst_30086,opts);
var inst_30088 = cljs.core.next.call(null,inst_30077);
var inst_30064 = inst_30088;
var inst_30065 = null;
var inst_30066 = (0);
var inst_30067 = (0);
var state_30204__$1 = (function (){var statearr_30270 = state_30204;
(statearr_30270[(7)] = inst_30066);

(statearr_30270[(8)] = inst_30065);

(statearr_30270[(32)] = inst_30087);

(statearr_30270[(9)] = inst_30067);

(statearr_30270[(10)] = inst_30064);

return statearr_30270;
})();
var statearr_30271_30337 = state_30204__$1;
(statearr_30271_30337[(2)] = null);

(statearr_30271_30337[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (45))){
var state_30204__$1 = state_30204;
var statearr_30272_30338 = state_30204__$1;
(statearr_30272_30338[(2)] = null);

(statearr_30272_30338[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (26))){
var inst_30121 = (state_30204[(23)]);
var inst_30117 = (state_30204[(19)]);
var inst_30123 = (state_30204[(26)]);
var inst_30120 = (state_30204[(24)]);
var inst_30125 = (state_30204[(25)]);
var inst_30140 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30142 = (function (){var all_files = inst_30117;
var res_SINGLEQUOTE_ = inst_30120;
var res = inst_30121;
var files_not_loaded = inst_30123;
var dependencies_that_loaded = inst_30125;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30121,inst_30117,inst_30123,inst_30120,inst_30125,inst_30140,state_val_30205,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30141){
var map__30273 = p__30141;
var map__30273__$1 = ((((!((map__30273 == null)))?(((((map__30273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30273):map__30273);
var namespace = cljs.core.get.call(null,map__30273__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30273__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30121,inst_30117,inst_30123,inst_30120,inst_30125,inst_30140,state_val_30205,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30143 = cljs.core.map.call(null,inst_30142,inst_30121);
var inst_30144 = cljs.core.pr_str.call(null,inst_30143);
var inst_30145 = figwheel.client.utils.log.call(null,inst_30144);
var inst_30146 = (function (){var all_files = inst_30117;
var res_SINGLEQUOTE_ = inst_30120;
var res = inst_30121;
var files_not_loaded = inst_30123;
var dependencies_that_loaded = inst_30125;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30121,inst_30117,inst_30123,inst_30120,inst_30125,inst_30140,inst_30142,inst_30143,inst_30144,inst_30145,state_val_30205,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30121,inst_30117,inst_30123,inst_30120,inst_30125,inst_30140,inst_30142,inst_30143,inst_30144,inst_30145,state_val_30205,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30147 = setTimeout(inst_30146,(10));
var state_30204__$1 = (function (){var statearr_30275 = state_30204;
(statearr_30275[(33)] = inst_30145);

(statearr_30275[(34)] = inst_30140);

return statearr_30275;
})();
var statearr_30276_30339 = state_30204__$1;
(statearr_30276_30339[(2)] = inst_30147);

(statearr_30276_30339[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (16))){
var state_30204__$1 = state_30204;
var statearr_30277_30340 = state_30204__$1;
(statearr_30277_30340[(2)] = reload_dependents);

(statearr_30277_30340[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (38))){
var inst_30157 = (state_30204[(16)]);
var inst_30175 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30157);
var state_30204__$1 = state_30204;
var statearr_30278_30341 = state_30204__$1;
(statearr_30278_30341[(2)] = inst_30175);

(statearr_30278_30341[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (30))){
var state_30204__$1 = state_30204;
var statearr_30279_30342 = state_30204__$1;
(statearr_30279_30342[(2)] = null);

(statearr_30279_30342[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (10))){
var inst_30077 = (state_30204[(22)]);
var inst_30079 = cljs.core.chunked_seq_QMARK_.call(null,inst_30077);
var state_30204__$1 = state_30204;
if(inst_30079){
var statearr_30280_30343 = state_30204__$1;
(statearr_30280_30343[(1)] = (13));

} else {
var statearr_30281_30344 = state_30204__$1;
(statearr_30281_30344[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (18))){
var inst_30111 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
if(cljs.core.truth_(inst_30111)){
var statearr_30282_30345 = state_30204__$1;
(statearr_30282_30345[(1)] = (19));

} else {
var statearr_30283_30346 = state_30204__$1;
(statearr_30283_30346[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (42))){
var state_30204__$1 = state_30204;
var statearr_30284_30347 = state_30204__$1;
(statearr_30284_30347[(2)] = null);

(statearr_30284_30347[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (37))){
var inst_30170 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
var statearr_30285_30348 = state_30204__$1;
(statearr_30285_30348[(2)] = inst_30170);

(statearr_30285_30348[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30205 === (8))){
var inst_30064 = (state_30204[(10)]);
var inst_30077 = (state_30204[(22)]);
var inst_30077__$1 = cljs.core.seq.call(null,inst_30064);
var state_30204__$1 = (function (){var statearr_30286 = state_30204;
(statearr_30286[(22)] = inst_30077__$1);

return statearr_30286;
})();
if(inst_30077__$1){
var statearr_30287_30349 = state_30204__$1;
(statearr_30287_30349[(1)] = (10));

} else {
var statearr_30288_30350 = state_30204__$1;
(statearr_30288_30350[(1)] = (11));

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
});})(c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26572__auto__,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26573__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26573__auto____0 = (function (){
var statearr_30289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30289[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26573__auto__);

(statearr_30289[(1)] = (1));

return statearr_30289;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26573__auto____1 = (function (state_30204){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_30204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e30290){if((e30290 instanceof Object)){
var ex__26576__auto__ = e30290;
var statearr_30291_30351 = state_30204;
(statearr_30291_30351[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30352 = state_30204;
state_30204 = G__30352;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26573__auto__ = function(state_30204){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26573__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26573__auto____1.call(this,state_30204);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26573__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26573__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26664__auto__ = (function (){var statearr_30292 = f__26663__auto__.call(null);
(statearr_30292[(6)] = c__26662__auto__);

return statearr_30292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto__,map__30049,map__30049__$1,opts,before_jsload,on_jsload,reload_dependents,map__30050,map__30050__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26662__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30355,link){
var map__30356 = p__30355;
var map__30356__$1 = ((((!((map__30356 == null)))?(((((map__30356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30356):map__30356);
var file = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30356,map__30356__$1,file){
return (function (p1__30353_SHARP_,p2__30354_SHARP_){
if(cljs.core._EQ_.call(null,p1__30353_SHARP_,p2__30354_SHARP_)){
return p1__30353_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30356,map__30356__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30359){
var map__30360 = p__30359;
var map__30360__$1 = ((((!((map__30360 == null)))?(((((map__30360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30360):map__30360);
var match_length = cljs.core.get.call(null,map__30360__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30360__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30358_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30358_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30362_SHARP_,p2__30363_SHARP_){
return cljs.core.assoc.call(null,p1__30362_SHARP_,cljs.core.get.call(null,p2__30363_SHARP_,key),p2__30363_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30364 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30364);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30364);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30365,p__30366){
var map__30367 = p__30365;
var map__30367__$1 = ((((!((map__30367 == null)))?(((((map__30367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30367):map__30367);
var on_cssload = cljs.core.get.call(null,map__30367__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30368 = p__30366;
var map__30368__$1 = ((((!((map__30368 == null)))?(((((map__30368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30368):map__30368);
var files_msg = map__30368__$1;
var files = cljs.core.get.call(null,map__30368__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1530821396943
