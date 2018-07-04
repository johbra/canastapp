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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29706_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29706_SHARP_));
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
var seq__29707 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29708 = null;
var count__29709 = (0);
var i__29710 = (0);
while(true){
if((i__29710 < count__29709)){
var n = cljs.core._nth.call(null,chunk__29708,i__29710);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29711 = seq__29707;
var G__29712 = chunk__29708;
var G__29713 = count__29709;
var G__29714 = (i__29710 + (1));
seq__29707 = G__29711;
chunk__29708 = G__29712;
count__29709 = G__29713;
i__29710 = G__29714;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29707);
if(temp__5457__auto__){
var seq__29707__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29707__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29707__$1);
var G__29715 = cljs.core.chunk_rest.call(null,seq__29707__$1);
var G__29716 = c__4319__auto__;
var G__29717 = cljs.core.count.call(null,c__4319__auto__);
var G__29718 = (0);
seq__29707 = G__29715;
chunk__29708 = G__29716;
count__29709 = G__29717;
i__29710 = G__29718;
continue;
} else {
var n = cljs.core.first.call(null,seq__29707__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29719 = cljs.core.next.call(null,seq__29707__$1);
var G__29720 = null;
var G__29721 = (0);
var G__29722 = (0);
seq__29707 = G__29719;
chunk__29708 = G__29720;
count__29709 = G__29721;
i__29710 = G__29722;
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
return cljs.core.some.call(null,(function (p__29723){
var vec__29724 = p__29723;
var _ = cljs.core.nth.call(null,vec__29724,(0),null);
var v = cljs.core.nth.call(null,vec__29724,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29727){
var vec__29728 = p__29727;
var k = cljs.core.nth.call(null,vec__29728,(0),null);
var v = cljs.core.nth.call(null,vec__29728,(1),null);
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

var seq__29740_29748 = cljs.core.seq.call(null,deps);
var chunk__29741_29749 = null;
var count__29742_29750 = (0);
var i__29743_29751 = (0);
while(true){
if((i__29743_29751 < count__29742_29750)){
var dep_29752 = cljs.core._nth.call(null,chunk__29741_29749,i__29743_29751);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29752;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29752));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29752,(depth + (1)),state);
} else {
}


var G__29753 = seq__29740_29748;
var G__29754 = chunk__29741_29749;
var G__29755 = count__29742_29750;
var G__29756 = (i__29743_29751 + (1));
seq__29740_29748 = G__29753;
chunk__29741_29749 = G__29754;
count__29742_29750 = G__29755;
i__29743_29751 = G__29756;
continue;
} else {
var temp__5457__auto___29757 = cljs.core.seq.call(null,seq__29740_29748);
if(temp__5457__auto___29757){
var seq__29740_29758__$1 = temp__5457__auto___29757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29740_29758__$1)){
var c__4319__auto___29759 = cljs.core.chunk_first.call(null,seq__29740_29758__$1);
var G__29760 = cljs.core.chunk_rest.call(null,seq__29740_29758__$1);
var G__29761 = c__4319__auto___29759;
var G__29762 = cljs.core.count.call(null,c__4319__auto___29759);
var G__29763 = (0);
seq__29740_29748 = G__29760;
chunk__29741_29749 = G__29761;
count__29742_29750 = G__29762;
i__29743_29751 = G__29763;
continue;
} else {
var dep_29764 = cljs.core.first.call(null,seq__29740_29758__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29764;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29764));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29764,(depth + (1)),state);
} else {
}


var G__29765 = cljs.core.next.call(null,seq__29740_29758__$1);
var G__29766 = null;
var G__29767 = (0);
var G__29768 = (0);
seq__29740_29748 = G__29765;
chunk__29741_29749 = G__29766;
count__29742_29750 = G__29767;
i__29743_29751 = G__29768;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29744){
var vec__29745 = p__29744;
var seq__29746 = cljs.core.seq.call(null,vec__29745);
var first__29747 = cljs.core.first.call(null,seq__29746);
var seq__29746__$1 = cljs.core.next.call(null,seq__29746);
var x = first__29747;
var xs = seq__29746__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29745,seq__29746,first__29747,seq__29746__$1,x,xs,get_deps__$1){
return (function (p1__29731_SHARP_){
return clojure.set.difference.call(null,p1__29731_SHARP_,x);
});})(vec__29745,seq__29746,first__29747,seq__29746__$1,x,xs,get_deps__$1))
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
var seq__29769 = cljs.core.seq.call(null,provides);
var chunk__29770 = null;
var count__29771 = (0);
var i__29772 = (0);
while(true){
if((i__29772 < count__29771)){
var prov = cljs.core._nth.call(null,chunk__29770,i__29772);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29773_29781 = cljs.core.seq.call(null,requires);
var chunk__29774_29782 = null;
var count__29775_29783 = (0);
var i__29776_29784 = (0);
while(true){
if((i__29776_29784 < count__29775_29783)){
var req_29785 = cljs.core._nth.call(null,chunk__29774_29782,i__29776_29784);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29785,prov);


var G__29786 = seq__29773_29781;
var G__29787 = chunk__29774_29782;
var G__29788 = count__29775_29783;
var G__29789 = (i__29776_29784 + (1));
seq__29773_29781 = G__29786;
chunk__29774_29782 = G__29787;
count__29775_29783 = G__29788;
i__29776_29784 = G__29789;
continue;
} else {
var temp__5457__auto___29790 = cljs.core.seq.call(null,seq__29773_29781);
if(temp__5457__auto___29790){
var seq__29773_29791__$1 = temp__5457__auto___29790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29773_29791__$1)){
var c__4319__auto___29792 = cljs.core.chunk_first.call(null,seq__29773_29791__$1);
var G__29793 = cljs.core.chunk_rest.call(null,seq__29773_29791__$1);
var G__29794 = c__4319__auto___29792;
var G__29795 = cljs.core.count.call(null,c__4319__auto___29792);
var G__29796 = (0);
seq__29773_29781 = G__29793;
chunk__29774_29782 = G__29794;
count__29775_29783 = G__29795;
i__29776_29784 = G__29796;
continue;
} else {
var req_29797 = cljs.core.first.call(null,seq__29773_29791__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29797,prov);


var G__29798 = cljs.core.next.call(null,seq__29773_29791__$1);
var G__29799 = null;
var G__29800 = (0);
var G__29801 = (0);
seq__29773_29781 = G__29798;
chunk__29774_29782 = G__29799;
count__29775_29783 = G__29800;
i__29776_29784 = G__29801;
continue;
}
} else {
}
}
break;
}


var G__29802 = seq__29769;
var G__29803 = chunk__29770;
var G__29804 = count__29771;
var G__29805 = (i__29772 + (1));
seq__29769 = G__29802;
chunk__29770 = G__29803;
count__29771 = G__29804;
i__29772 = G__29805;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29769);
if(temp__5457__auto__){
var seq__29769__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29769__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29769__$1);
var G__29806 = cljs.core.chunk_rest.call(null,seq__29769__$1);
var G__29807 = c__4319__auto__;
var G__29808 = cljs.core.count.call(null,c__4319__auto__);
var G__29809 = (0);
seq__29769 = G__29806;
chunk__29770 = G__29807;
count__29771 = G__29808;
i__29772 = G__29809;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29769__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29777_29810 = cljs.core.seq.call(null,requires);
var chunk__29778_29811 = null;
var count__29779_29812 = (0);
var i__29780_29813 = (0);
while(true){
if((i__29780_29813 < count__29779_29812)){
var req_29814 = cljs.core._nth.call(null,chunk__29778_29811,i__29780_29813);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29814,prov);


var G__29815 = seq__29777_29810;
var G__29816 = chunk__29778_29811;
var G__29817 = count__29779_29812;
var G__29818 = (i__29780_29813 + (1));
seq__29777_29810 = G__29815;
chunk__29778_29811 = G__29816;
count__29779_29812 = G__29817;
i__29780_29813 = G__29818;
continue;
} else {
var temp__5457__auto___29819__$1 = cljs.core.seq.call(null,seq__29777_29810);
if(temp__5457__auto___29819__$1){
var seq__29777_29820__$1 = temp__5457__auto___29819__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29777_29820__$1)){
var c__4319__auto___29821 = cljs.core.chunk_first.call(null,seq__29777_29820__$1);
var G__29822 = cljs.core.chunk_rest.call(null,seq__29777_29820__$1);
var G__29823 = c__4319__auto___29821;
var G__29824 = cljs.core.count.call(null,c__4319__auto___29821);
var G__29825 = (0);
seq__29777_29810 = G__29822;
chunk__29778_29811 = G__29823;
count__29779_29812 = G__29824;
i__29780_29813 = G__29825;
continue;
} else {
var req_29826 = cljs.core.first.call(null,seq__29777_29820__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29826,prov);


var G__29827 = cljs.core.next.call(null,seq__29777_29820__$1);
var G__29828 = null;
var G__29829 = (0);
var G__29830 = (0);
seq__29777_29810 = G__29827;
chunk__29778_29811 = G__29828;
count__29779_29812 = G__29829;
i__29780_29813 = G__29830;
continue;
}
} else {
}
}
break;
}


var G__29831 = cljs.core.next.call(null,seq__29769__$1);
var G__29832 = null;
var G__29833 = (0);
var G__29834 = (0);
seq__29769 = G__29831;
chunk__29770 = G__29832;
count__29771 = G__29833;
i__29772 = G__29834;
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
var seq__29835_29839 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29836_29840 = null;
var count__29837_29841 = (0);
var i__29838_29842 = (0);
while(true){
if((i__29838_29842 < count__29837_29841)){
var ns_29843 = cljs.core._nth.call(null,chunk__29836_29840,i__29838_29842);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29843);


var G__29844 = seq__29835_29839;
var G__29845 = chunk__29836_29840;
var G__29846 = count__29837_29841;
var G__29847 = (i__29838_29842 + (1));
seq__29835_29839 = G__29844;
chunk__29836_29840 = G__29845;
count__29837_29841 = G__29846;
i__29838_29842 = G__29847;
continue;
} else {
var temp__5457__auto___29848 = cljs.core.seq.call(null,seq__29835_29839);
if(temp__5457__auto___29848){
var seq__29835_29849__$1 = temp__5457__auto___29848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29835_29849__$1)){
var c__4319__auto___29850 = cljs.core.chunk_first.call(null,seq__29835_29849__$1);
var G__29851 = cljs.core.chunk_rest.call(null,seq__29835_29849__$1);
var G__29852 = c__4319__auto___29850;
var G__29853 = cljs.core.count.call(null,c__4319__auto___29850);
var G__29854 = (0);
seq__29835_29839 = G__29851;
chunk__29836_29840 = G__29852;
count__29837_29841 = G__29853;
i__29838_29842 = G__29854;
continue;
} else {
var ns_29855 = cljs.core.first.call(null,seq__29835_29849__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29855);


var G__29856 = cljs.core.next.call(null,seq__29835_29849__$1);
var G__29857 = null;
var G__29858 = (0);
var G__29859 = (0);
seq__29835_29839 = G__29856;
chunk__29836_29840 = G__29857;
count__29837_29841 = G__29858;
i__29838_29842 = G__29859;
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
var G__29860__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29861__i = 0, G__29861__a = new Array(arguments.length -  0);
while (G__29861__i < G__29861__a.length) {G__29861__a[G__29861__i] = arguments[G__29861__i + 0]; ++G__29861__i;}
  args = new cljs.core.IndexedSeq(G__29861__a,0,null);
} 
return G__29860__delegate.call(this,args);};
G__29860.cljs$lang$maxFixedArity = 0;
G__29860.cljs$lang$applyTo = (function (arglist__29862){
var args = cljs.core.seq(arglist__29862);
return G__29860__delegate(args);
});
G__29860.cljs$core$IFn$_invoke$arity$variadic = G__29860__delegate;
return G__29860;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29863_SHARP_,p2__29864_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29863_SHARP_)].join('')),p2__29864_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29865_SHARP_,p2__29866_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29865_SHARP_)].join(''),p2__29866_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29867 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29867.addCallback(((function (G__29867){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29867))
);

G__29867.addErrback(((function (G__29867){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29867))
);

return G__29867;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29868){if((e29868 instanceof Error)){
var e = e29868;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29868;

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
}catch (e29869){if((e29869 instanceof Error)){
var e = e29869;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29869;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29870 = cljs.core._EQ_;
var expr__29871 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29870.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29871))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29870.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29871))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29870.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29871))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29870,expr__29871){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29870,expr__29871))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29873,callback){
var map__29874 = p__29873;
var map__29874__$1 = ((((!((map__29874 == null)))?(((((map__29874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29874):map__29874);
var file_msg = map__29874__$1;
var request_url = cljs.core.get.call(null,map__29874__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29874,map__29874__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29874,map__29874__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__){
return (function (state_29912){
var state_val_29913 = (state_29912[(1)]);
if((state_val_29913 === (7))){
var inst_29908 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
var statearr_29914_29940 = state_29912__$1;
(statearr_29914_29940[(2)] = inst_29908);

(statearr_29914_29940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (1))){
var state_29912__$1 = state_29912;
var statearr_29915_29941 = state_29912__$1;
(statearr_29915_29941[(2)] = null);

(statearr_29915_29941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (4))){
var inst_29878 = (state_29912[(7)]);
var inst_29878__$1 = (state_29912[(2)]);
var state_29912__$1 = (function (){var statearr_29916 = state_29912;
(statearr_29916[(7)] = inst_29878__$1);

return statearr_29916;
})();
if(cljs.core.truth_(inst_29878__$1)){
var statearr_29917_29942 = state_29912__$1;
(statearr_29917_29942[(1)] = (5));

} else {
var statearr_29918_29943 = state_29912__$1;
(statearr_29918_29943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (15))){
var inst_29891 = (state_29912[(8)]);
var inst_29893 = (state_29912[(9)]);
var inst_29895 = inst_29893.call(null,inst_29891);
var state_29912__$1 = state_29912;
var statearr_29919_29944 = state_29912__$1;
(statearr_29919_29944[(2)] = inst_29895);

(statearr_29919_29944[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (13))){
var inst_29902 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
var statearr_29920_29945 = state_29912__$1;
(statearr_29920_29945[(2)] = inst_29902);

(statearr_29920_29945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (6))){
var state_29912__$1 = state_29912;
var statearr_29921_29946 = state_29912__$1;
(statearr_29921_29946[(2)] = null);

(statearr_29921_29946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (17))){
var inst_29899 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
var statearr_29922_29947 = state_29912__$1;
(statearr_29922_29947[(2)] = inst_29899);

(statearr_29922_29947[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (3))){
var inst_29910 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29912__$1,inst_29910);
} else {
if((state_val_29913 === (12))){
var state_29912__$1 = state_29912;
var statearr_29923_29948 = state_29912__$1;
(statearr_29923_29948[(2)] = null);

(statearr_29923_29948[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (2))){
var state_29912__$1 = state_29912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29912__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29913 === (11))){
var inst_29883 = (state_29912[(10)]);
var inst_29889 = figwheel.client.file_reloading.blocking_load.call(null,inst_29883);
var state_29912__$1 = state_29912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29912__$1,(14),inst_29889);
} else {
if((state_val_29913 === (9))){
var inst_29883 = (state_29912[(10)]);
var state_29912__$1 = state_29912;
if(cljs.core.truth_(inst_29883)){
var statearr_29924_29949 = state_29912__$1;
(statearr_29924_29949[(1)] = (11));

} else {
var statearr_29925_29950 = state_29912__$1;
(statearr_29925_29950[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (5))){
var inst_29884 = (state_29912[(11)]);
var inst_29878 = (state_29912[(7)]);
var inst_29883 = cljs.core.nth.call(null,inst_29878,(0),null);
var inst_29884__$1 = cljs.core.nth.call(null,inst_29878,(1),null);
var state_29912__$1 = (function (){var statearr_29926 = state_29912;
(statearr_29926[(11)] = inst_29884__$1);

(statearr_29926[(10)] = inst_29883);

return statearr_29926;
})();
if(cljs.core.truth_(inst_29884__$1)){
var statearr_29927_29951 = state_29912__$1;
(statearr_29927_29951[(1)] = (8));

} else {
var statearr_29928_29952 = state_29912__$1;
(statearr_29928_29952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (14))){
var inst_29893 = (state_29912[(9)]);
var inst_29883 = (state_29912[(10)]);
var inst_29891 = (state_29912[(2)]);
var inst_29892 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29893__$1 = cljs.core.get.call(null,inst_29892,inst_29883);
var state_29912__$1 = (function (){var statearr_29929 = state_29912;
(statearr_29929[(8)] = inst_29891);

(statearr_29929[(9)] = inst_29893__$1);

return statearr_29929;
})();
if(cljs.core.truth_(inst_29893__$1)){
var statearr_29930_29953 = state_29912__$1;
(statearr_29930_29953[(1)] = (15));

} else {
var statearr_29931_29954 = state_29912__$1;
(statearr_29931_29954[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (16))){
var inst_29891 = (state_29912[(8)]);
var inst_29897 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29891);
var state_29912__$1 = state_29912;
var statearr_29932_29955 = state_29912__$1;
(statearr_29932_29955[(2)] = inst_29897);

(statearr_29932_29955[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (10))){
var inst_29904 = (state_29912[(2)]);
var state_29912__$1 = (function (){var statearr_29933 = state_29912;
(statearr_29933[(12)] = inst_29904);

return statearr_29933;
})();
var statearr_29934_29956 = state_29912__$1;
(statearr_29934_29956[(2)] = null);

(statearr_29934_29956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (8))){
var inst_29884 = (state_29912[(11)]);
var inst_29886 = eval(inst_29884);
var state_29912__$1 = state_29912;
var statearr_29935_29957 = state_29912__$1;
(statearr_29935_29957[(2)] = inst_29886);

(statearr_29935_29957[(1)] = (10));


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
});})(c__26663__auto__))
;
return ((function (switch__26573__auto__,c__26663__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26574__auto__ = null;
var figwheel$client$file_reloading$state_machine__26574__auto____0 = (function (){
var statearr_29936 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29936[(0)] = figwheel$client$file_reloading$state_machine__26574__auto__);

(statearr_29936[(1)] = (1));

return statearr_29936;
});
var figwheel$client$file_reloading$state_machine__26574__auto____1 = (function (state_29912){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_29912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e29937){if((e29937 instanceof Object)){
var ex__26577__auto__ = e29937;
var statearr_29938_29958 = state_29912;
(statearr_29938_29958[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29959 = state_29912;
state_29912 = G__29959;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26574__auto__ = function(state_29912){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26574__auto____1.call(this,state_29912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26574__auto____0;
figwheel$client$file_reloading$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26574__auto____1;
return figwheel$client$file_reloading$state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_29939 = f__26664__auto__.call(null);
(statearr_29939[(6)] = c__26663__auto__);

return statearr_29939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__))
);

return c__26663__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29961 = arguments.length;
switch (G__29961) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29963,callback){
var map__29964 = p__29963;
var map__29964__$1 = ((((!((map__29964 == null)))?(((((map__29964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29964):map__29964);
var file_msg = map__29964__$1;
var namespace = cljs.core.get.call(null,map__29964__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29964,map__29964__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29964,map__29964__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29966){
var map__29967 = p__29966;
var map__29967__$1 = ((((!((map__29967 == null)))?(((((map__29967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29967):map__29967);
var file_msg = map__29967__$1;
var namespace = cljs.core.get.call(null,map__29967__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29969){
var map__29970 = p__29969;
var map__29970__$1 = ((((!((map__29970 == null)))?(((((map__29970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29970):map__29970);
var file_msg = map__29970__$1;
var namespace = cljs.core.get.call(null,map__29970__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29972,callback){
var map__29973 = p__29972;
var map__29973__$1 = ((((!((map__29973 == null)))?(((((map__29973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29973):map__29973);
var file_msg = map__29973__$1;
var request_url = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26663__auto___30023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___30023,out){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___30023,out){
return (function (state_30008){
var state_val_30009 = (state_30008[(1)]);
if((state_val_30009 === (1))){
var inst_29982 = cljs.core.seq.call(null,files);
var inst_29983 = cljs.core.first.call(null,inst_29982);
var inst_29984 = cljs.core.next.call(null,inst_29982);
var inst_29985 = files;
var state_30008__$1 = (function (){var statearr_30010 = state_30008;
(statearr_30010[(7)] = inst_29985);

(statearr_30010[(8)] = inst_29983);

(statearr_30010[(9)] = inst_29984);

return statearr_30010;
})();
var statearr_30011_30024 = state_30008__$1;
(statearr_30011_30024[(2)] = null);

(statearr_30011_30024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (2))){
var inst_29991 = (state_30008[(10)]);
var inst_29985 = (state_30008[(7)]);
var inst_29990 = cljs.core.seq.call(null,inst_29985);
var inst_29991__$1 = cljs.core.first.call(null,inst_29990);
var inst_29992 = cljs.core.next.call(null,inst_29990);
var inst_29993 = (inst_29991__$1 == null);
var inst_29994 = cljs.core.not.call(null,inst_29993);
var state_30008__$1 = (function (){var statearr_30012 = state_30008;
(statearr_30012[(10)] = inst_29991__$1);

(statearr_30012[(11)] = inst_29992);

return statearr_30012;
})();
if(inst_29994){
var statearr_30013_30025 = state_30008__$1;
(statearr_30013_30025[(1)] = (4));

} else {
var statearr_30014_30026 = state_30008__$1;
(statearr_30014_30026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (3))){
var inst_30006 = (state_30008[(2)]);
var state_30008__$1 = state_30008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30008__$1,inst_30006);
} else {
if((state_val_30009 === (4))){
var inst_29991 = (state_30008[(10)]);
var inst_29996 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29991);
var state_30008__$1 = state_30008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30008__$1,(7),inst_29996);
} else {
if((state_val_30009 === (5))){
var inst_30002 = cljs.core.async.close_BANG_.call(null,out);
var state_30008__$1 = state_30008;
var statearr_30015_30027 = state_30008__$1;
(statearr_30015_30027[(2)] = inst_30002);

(statearr_30015_30027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (6))){
var inst_30004 = (state_30008[(2)]);
var state_30008__$1 = state_30008;
var statearr_30016_30028 = state_30008__$1;
(statearr_30016_30028[(2)] = inst_30004);

(statearr_30016_30028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30009 === (7))){
var inst_29992 = (state_30008[(11)]);
var inst_29998 = (state_30008[(2)]);
var inst_29999 = cljs.core.async.put_BANG_.call(null,out,inst_29998);
var inst_29985 = inst_29992;
var state_30008__$1 = (function (){var statearr_30017 = state_30008;
(statearr_30017[(12)] = inst_29999);

(statearr_30017[(7)] = inst_29985);

return statearr_30017;
})();
var statearr_30018_30029 = state_30008__$1;
(statearr_30018_30029[(2)] = null);

(statearr_30018_30029[(1)] = (2));


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
});})(c__26663__auto___30023,out))
;
return ((function (switch__26573__auto__,c__26663__auto___30023,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto____0 = (function (){
var statearr_30019 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30019[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto__);

(statearr_30019[(1)] = (1));

return statearr_30019;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto____1 = (function (state_30008){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_30008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e30020){if((e30020 instanceof Object)){
var ex__26577__auto__ = e30020;
var statearr_30021_30030 = state_30008;
(statearr_30021_30030[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30031 = state_30008;
state_30008 = G__30031;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto__ = function(state_30008){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto____1.call(this,state_30008);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___30023,out))
})();
var state__26665__auto__ = (function (){var statearr_30022 = f__26664__auto__.call(null);
(statearr_30022[(6)] = c__26663__auto___30023);

return statearr_30022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___30023,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30032,opts){
var map__30033 = p__30032;
var map__30033__$1 = ((((!((map__30033 == null)))?(((((map__30033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30033):map__30033);
var eval_body = cljs.core.get.call(null,map__30033__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30033__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30035){var e = e30035;
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
return (function (p1__30036_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30036_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30037){
var vec__30038 = p__30037;
var k = cljs.core.nth.call(null,vec__30038,(0),null);
var v = cljs.core.nth.call(null,vec__30038,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30041){
var vec__30042 = p__30041;
var k = cljs.core.nth.call(null,vec__30042,(0),null);
var v = cljs.core.nth.call(null,vec__30042,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30048,p__30049){
var map__30050 = p__30048;
var map__30050__$1 = ((((!((map__30050 == null)))?(((((map__30050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30050):map__30050);
var opts = map__30050__$1;
var before_jsload = cljs.core.get.call(null,map__30050__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30050__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30050__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30051 = p__30049;
var map__30051__$1 = ((((!((map__30051 == null)))?(((((map__30051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30051):map__30051);
var msg = map__30051__$1;
var files = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30205){
var state_val_30206 = (state_30205[(1)]);
if((state_val_30206 === (7))){
var inst_30066 = (state_30205[(7)]);
var inst_30065 = (state_30205[(8)]);
var inst_30067 = (state_30205[(9)]);
var inst_30068 = (state_30205[(10)]);
var inst_30073 = cljs.core._nth.call(null,inst_30066,inst_30068);
var inst_30074 = figwheel.client.file_reloading.eval_body.call(null,inst_30073,opts);
var inst_30075 = (inst_30068 + (1));
var tmp30207 = inst_30066;
var tmp30208 = inst_30065;
var tmp30209 = inst_30067;
var inst_30065__$1 = tmp30208;
var inst_30066__$1 = tmp30207;
var inst_30067__$1 = tmp30209;
var inst_30068__$1 = inst_30075;
var state_30205__$1 = (function (){var statearr_30210 = state_30205;
(statearr_30210[(7)] = inst_30066__$1);

(statearr_30210[(8)] = inst_30065__$1);

(statearr_30210[(9)] = inst_30067__$1);

(statearr_30210[(10)] = inst_30068__$1);

(statearr_30210[(11)] = inst_30074);

return statearr_30210;
})();
var statearr_30211_30294 = state_30205__$1;
(statearr_30211_30294[(2)] = null);

(statearr_30211_30294[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (20))){
var inst_30108 = (state_30205[(12)]);
var inst_30116 = figwheel.client.file_reloading.sort_files.call(null,inst_30108);
var state_30205__$1 = state_30205;
var statearr_30212_30295 = state_30205__$1;
(statearr_30212_30295[(2)] = inst_30116);

(statearr_30212_30295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (27))){
var state_30205__$1 = state_30205;
var statearr_30213_30296 = state_30205__$1;
(statearr_30213_30296[(2)] = null);

(statearr_30213_30296[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (1))){
var inst_30057 = (state_30205[(13)]);
var inst_30054 = before_jsload.call(null,files);
var inst_30055 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30056 = (function (){return ((function (inst_30057,inst_30054,inst_30055,state_val_30206,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30045_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30045_SHARP_);
});
;})(inst_30057,inst_30054,inst_30055,state_val_30206,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30057__$1 = cljs.core.filter.call(null,inst_30056,files);
var inst_30058 = cljs.core.not_empty.call(null,inst_30057__$1);
var state_30205__$1 = (function (){var statearr_30214 = state_30205;
(statearr_30214[(13)] = inst_30057__$1);

(statearr_30214[(14)] = inst_30055);

(statearr_30214[(15)] = inst_30054);

return statearr_30214;
})();
if(cljs.core.truth_(inst_30058)){
var statearr_30215_30297 = state_30205__$1;
(statearr_30215_30297[(1)] = (2));

} else {
var statearr_30216_30298 = state_30205__$1;
(statearr_30216_30298[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (24))){
var state_30205__$1 = state_30205;
var statearr_30217_30299 = state_30205__$1;
(statearr_30217_30299[(2)] = null);

(statearr_30217_30299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (39))){
var inst_30158 = (state_30205[(16)]);
var state_30205__$1 = state_30205;
var statearr_30218_30300 = state_30205__$1;
(statearr_30218_30300[(2)] = inst_30158);

(statearr_30218_30300[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (46))){
var inst_30200 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
var statearr_30219_30301 = state_30205__$1;
(statearr_30219_30301[(2)] = inst_30200);

(statearr_30219_30301[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (4))){
var inst_30102 = (state_30205[(2)]);
var inst_30103 = cljs.core.List.EMPTY;
var inst_30104 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30103);
var inst_30105 = (function (){return ((function (inst_30102,inst_30103,inst_30104,state_val_30206,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30046_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30046_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30046_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30046_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_30102,inst_30103,inst_30104,state_val_30206,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30106 = cljs.core.filter.call(null,inst_30105,files);
var inst_30107 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30108 = cljs.core.concat.call(null,inst_30106,inst_30107);
var state_30205__$1 = (function (){var statearr_30220 = state_30205;
(statearr_30220[(17)] = inst_30102);

(statearr_30220[(12)] = inst_30108);

(statearr_30220[(18)] = inst_30104);

return statearr_30220;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30221_30302 = state_30205__$1;
(statearr_30221_30302[(1)] = (16));

} else {
var statearr_30222_30303 = state_30205__$1;
(statearr_30222_30303[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (15))){
var inst_30092 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
var statearr_30223_30304 = state_30205__$1;
(statearr_30223_30304[(2)] = inst_30092);

(statearr_30223_30304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (21))){
var inst_30118 = (state_30205[(19)]);
var inst_30118__$1 = (state_30205[(2)]);
var inst_30119 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30118__$1);
var state_30205__$1 = (function (){var statearr_30224 = state_30205;
(statearr_30224[(19)] = inst_30118__$1);

return statearr_30224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30205__$1,(22),inst_30119);
} else {
if((state_val_30206 === (31))){
var inst_30203 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30205__$1,inst_30203);
} else {
if((state_val_30206 === (32))){
var inst_30158 = (state_30205[(16)]);
var inst_30163 = inst_30158.cljs$lang$protocol_mask$partition0$;
var inst_30164 = (inst_30163 & (64));
var inst_30165 = inst_30158.cljs$core$ISeq$;
var inst_30166 = (cljs.core.PROTOCOL_SENTINEL === inst_30165);
var inst_30167 = ((inst_30164) || (inst_30166));
var state_30205__$1 = state_30205;
if(cljs.core.truth_(inst_30167)){
var statearr_30225_30305 = state_30205__$1;
(statearr_30225_30305[(1)] = (35));

} else {
var statearr_30226_30306 = state_30205__$1;
(statearr_30226_30306[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (40))){
var inst_30180 = (state_30205[(20)]);
var inst_30179 = (state_30205[(2)]);
var inst_30180__$1 = cljs.core.get.call(null,inst_30179,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30181 = cljs.core.get.call(null,inst_30179,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30182 = cljs.core.not_empty.call(null,inst_30180__$1);
var state_30205__$1 = (function (){var statearr_30227 = state_30205;
(statearr_30227[(20)] = inst_30180__$1);

(statearr_30227[(21)] = inst_30181);

return statearr_30227;
})();
if(cljs.core.truth_(inst_30182)){
var statearr_30228_30307 = state_30205__$1;
(statearr_30228_30307[(1)] = (41));

} else {
var statearr_30229_30308 = state_30205__$1;
(statearr_30229_30308[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (33))){
var state_30205__$1 = state_30205;
var statearr_30230_30309 = state_30205__$1;
(statearr_30230_30309[(2)] = false);

(statearr_30230_30309[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (13))){
var inst_30078 = (state_30205[(22)]);
var inst_30082 = cljs.core.chunk_first.call(null,inst_30078);
var inst_30083 = cljs.core.chunk_rest.call(null,inst_30078);
var inst_30084 = cljs.core.count.call(null,inst_30082);
var inst_30065 = inst_30083;
var inst_30066 = inst_30082;
var inst_30067 = inst_30084;
var inst_30068 = (0);
var state_30205__$1 = (function (){var statearr_30231 = state_30205;
(statearr_30231[(7)] = inst_30066);

(statearr_30231[(8)] = inst_30065);

(statearr_30231[(9)] = inst_30067);

(statearr_30231[(10)] = inst_30068);

return statearr_30231;
})();
var statearr_30232_30310 = state_30205__$1;
(statearr_30232_30310[(2)] = null);

(statearr_30232_30310[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (22))){
var inst_30121 = (state_30205[(23)]);
var inst_30122 = (state_30205[(24)]);
var inst_30126 = (state_30205[(25)]);
var inst_30118 = (state_30205[(19)]);
var inst_30121__$1 = (state_30205[(2)]);
var inst_30122__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30121__$1);
var inst_30123 = (function (){var all_files = inst_30118;
var res_SINGLEQUOTE_ = inst_30121__$1;
var res = inst_30122__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30121,inst_30122,inst_30126,inst_30118,inst_30121__$1,inst_30122__$1,state_val_30206,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30047_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30047_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30121,inst_30122,inst_30126,inst_30118,inst_30121__$1,inst_30122__$1,state_val_30206,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30124 = cljs.core.filter.call(null,inst_30123,inst_30121__$1);
var inst_30125 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30126__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30125);
var inst_30127 = cljs.core.not_empty.call(null,inst_30126__$1);
var state_30205__$1 = (function (){var statearr_30233 = state_30205;
(statearr_30233[(23)] = inst_30121__$1);

(statearr_30233[(24)] = inst_30122__$1);

(statearr_30233[(26)] = inst_30124);

(statearr_30233[(25)] = inst_30126__$1);

return statearr_30233;
})();
if(cljs.core.truth_(inst_30127)){
var statearr_30234_30311 = state_30205__$1;
(statearr_30234_30311[(1)] = (23));

} else {
var statearr_30235_30312 = state_30205__$1;
(statearr_30235_30312[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (36))){
var state_30205__$1 = state_30205;
var statearr_30236_30313 = state_30205__$1;
(statearr_30236_30313[(2)] = false);

(statearr_30236_30313[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (41))){
var inst_30180 = (state_30205[(20)]);
var inst_30184 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30185 = cljs.core.map.call(null,inst_30184,inst_30180);
var inst_30186 = cljs.core.pr_str.call(null,inst_30185);
var inst_30187 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30186)].join('');
var inst_30188 = figwheel.client.utils.log.call(null,inst_30187);
var state_30205__$1 = state_30205;
var statearr_30237_30314 = state_30205__$1;
(statearr_30237_30314[(2)] = inst_30188);

(statearr_30237_30314[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (43))){
var inst_30181 = (state_30205[(21)]);
var inst_30191 = (state_30205[(2)]);
var inst_30192 = cljs.core.not_empty.call(null,inst_30181);
var state_30205__$1 = (function (){var statearr_30238 = state_30205;
(statearr_30238[(27)] = inst_30191);

return statearr_30238;
})();
if(cljs.core.truth_(inst_30192)){
var statearr_30239_30315 = state_30205__$1;
(statearr_30239_30315[(1)] = (44));

} else {
var statearr_30240_30316 = state_30205__$1;
(statearr_30240_30316[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (29))){
var inst_30158 = (state_30205[(16)]);
var inst_30121 = (state_30205[(23)]);
var inst_30122 = (state_30205[(24)]);
var inst_30124 = (state_30205[(26)]);
var inst_30126 = (state_30205[(25)]);
var inst_30118 = (state_30205[(19)]);
var inst_30154 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30157 = (function (){var all_files = inst_30118;
var res_SINGLEQUOTE_ = inst_30121;
var res = inst_30122;
var files_not_loaded = inst_30124;
var dependencies_that_loaded = inst_30126;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30158,inst_30121,inst_30122,inst_30124,inst_30126,inst_30118,inst_30154,state_val_30206,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30156){
var map__30241 = p__30156;
var map__30241__$1 = ((((!((map__30241 == null)))?(((((map__30241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30241):map__30241);
var namespace = cljs.core.get.call(null,map__30241__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30158,inst_30121,inst_30122,inst_30124,inst_30126,inst_30118,inst_30154,state_val_30206,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30158__$1 = cljs.core.group_by.call(null,inst_30157,inst_30124);
var inst_30160 = (inst_30158__$1 == null);
var inst_30161 = cljs.core.not.call(null,inst_30160);
var state_30205__$1 = (function (){var statearr_30243 = state_30205;
(statearr_30243[(16)] = inst_30158__$1);

(statearr_30243[(28)] = inst_30154);

return statearr_30243;
})();
if(inst_30161){
var statearr_30244_30317 = state_30205__$1;
(statearr_30244_30317[(1)] = (32));

} else {
var statearr_30245_30318 = state_30205__$1;
(statearr_30245_30318[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (44))){
var inst_30181 = (state_30205[(21)]);
var inst_30194 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30181);
var inst_30195 = cljs.core.pr_str.call(null,inst_30194);
var inst_30196 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30195)].join('');
var inst_30197 = figwheel.client.utils.log.call(null,inst_30196);
var state_30205__$1 = state_30205;
var statearr_30246_30319 = state_30205__$1;
(statearr_30246_30319[(2)] = inst_30197);

(statearr_30246_30319[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (6))){
var inst_30099 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
var statearr_30247_30320 = state_30205__$1;
(statearr_30247_30320[(2)] = inst_30099);

(statearr_30247_30320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (28))){
var inst_30124 = (state_30205[(26)]);
var inst_30151 = (state_30205[(2)]);
var inst_30152 = cljs.core.not_empty.call(null,inst_30124);
var state_30205__$1 = (function (){var statearr_30248 = state_30205;
(statearr_30248[(29)] = inst_30151);

return statearr_30248;
})();
if(cljs.core.truth_(inst_30152)){
var statearr_30249_30321 = state_30205__$1;
(statearr_30249_30321[(1)] = (29));

} else {
var statearr_30250_30322 = state_30205__$1;
(statearr_30250_30322[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (25))){
var inst_30122 = (state_30205[(24)]);
var inst_30138 = (state_30205[(2)]);
var inst_30139 = cljs.core.not_empty.call(null,inst_30122);
var state_30205__$1 = (function (){var statearr_30251 = state_30205;
(statearr_30251[(30)] = inst_30138);

return statearr_30251;
})();
if(cljs.core.truth_(inst_30139)){
var statearr_30252_30323 = state_30205__$1;
(statearr_30252_30323[(1)] = (26));

} else {
var statearr_30253_30324 = state_30205__$1;
(statearr_30253_30324[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (34))){
var inst_30174 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
if(cljs.core.truth_(inst_30174)){
var statearr_30254_30325 = state_30205__$1;
(statearr_30254_30325[(1)] = (38));

} else {
var statearr_30255_30326 = state_30205__$1;
(statearr_30255_30326[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (17))){
var state_30205__$1 = state_30205;
var statearr_30256_30327 = state_30205__$1;
(statearr_30256_30327[(2)] = recompile_dependents);

(statearr_30256_30327[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (3))){
var state_30205__$1 = state_30205;
var statearr_30257_30328 = state_30205__$1;
(statearr_30257_30328[(2)] = null);

(statearr_30257_30328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (12))){
var inst_30095 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
var statearr_30258_30329 = state_30205__$1;
(statearr_30258_30329[(2)] = inst_30095);

(statearr_30258_30329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (2))){
var inst_30057 = (state_30205[(13)]);
var inst_30064 = cljs.core.seq.call(null,inst_30057);
var inst_30065 = inst_30064;
var inst_30066 = null;
var inst_30067 = (0);
var inst_30068 = (0);
var state_30205__$1 = (function (){var statearr_30259 = state_30205;
(statearr_30259[(7)] = inst_30066);

(statearr_30259[(8)] = inst_30065);

(statearr_30259[(9)] = inst_30067);

(statearr_30259[(10)] = inst_30068);

return statearr_30259;
})();
var statearr_30260_30330 = state_30205__$1;
(statearr_30260_30330[(2)] = null);

(statearr_30260_30330[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (23))){
var inst_30121 = (state_30205[(23)]);
var inst_30122 = (state_30205[(24)]);
var inst_30124 = (state_30205[(26)]);
var inst_30126 = (state_30205[(25)]);
var inst_30118 = (state_30205[(19)]);
var inst_30129 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30131 = (function (){var all_files = inst_30118;
var res_SINGLEQUOTE_ = inst_30121;
var res = inst_30122;
var files_not_loaded = inst_30124;
var dependencies_that_loaded = inst_30126;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30121,inst_30122,inst_30124,inst_30126,inst_30118,inst_30129,state_val_30206,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30130){
var map__30261 = p__30130;
var map__30261__$1 = ((((!((map__30261 == null)))?(((((map__30261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30261):map__30261);
var request_url = cljs.core.get.call(null,map__30261__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30121,inst_30122,inst_30124,inst_30126,inst_30118,inst_30129,state_val_30206,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30132 = cljs.core.reverse.call(null,inst_30126);
var inst_30133 = cljs.core.map.call(null,inst_30131,inst_30132);
var inst_30134 = cljs.core.pr_str.call(null,inst_30133);
var inst_30135 = figwheel.client.utils.log.call(null,inst_30134);
var state_30205__$1 = (function (){var statearr_30263 = state_30205;
(statearr_30263[(31)] = inst_30129);

return statearr_30263;
})();
var statearr_30264_30331 = state_30205__$1;
(statearr_30264_30331[(2)] = inst_30135);

(statearr_30264_30331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (35))){
var state_30205__$1 = state_30205;
var statearr_30265_30332 = state_30205__$1;
(statearr_30265_30332[(2)] = true);

(statearr_30265_30332[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (19))){
var inst_30108 = (state_30205[(12)]);
var inst_30114 = figwheel.client.file_reloading.expand_files.call(null,inst_30108);
var state_30205__$1 = state_30205;
var statearr_30266_30333 = state_30205__$1;
(statearr_30266_30333[(2)] = inst_30114);

(statearr_30266_30333[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (11))){
var state_30205__$1 = state_30205;
var statearr_30267_30334 = state_30205__$1;
(statearr_30267_30334[(2)] = null);

(statearr_30267_30334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (9))){
var inst_30097 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
var statearr_30268_30335 = state_30205__$1;
(statearr_30268_30335[(2)] = inst_30097);

(statearr_30268_30335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (5))){
var inst_30067 = (state_30205[(9)]);
var inst_30068 = (state_30205[(10)]);
var inst_30070 = (inst_30068 < inst_30067);
var inst_30071 = inst_30070;
var state_30205__$1 = state_30205;
if(cljs.core.truth_(inst_30071)){
var statearr_30269_30336 = state_30205__$1;
(statearr_30269_30336[(1)] = (7));

} else {
var statearr_30270_30337 = state_30205__$1;
(statearr_30270_30337[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (14))){
var inst_30078 = (state_30205[(22)]);
var inst_30087 = cljs.core.first.call(null,inst_30078);
var inst_30088 = figwheel.client.file_reloading.eval_body.call(null,inst_30087,opts);
var inst_30089 = cljs.core.next.call(null,inst_30078);
var inst_30065 = inst_30089;
var inst_30066 = null;
var inst_30067 = (0);
var inst_30068 = (0);
var state_30205__$1 = (function (){var statearr_30271 = state_30205;
(statearr_30271[(7)] = inst_30066);

(statearr_30271[(8)] = inst_30065);

(statearr_30271[(32)] = inst_30088);

(statearr_30271[(9)] = inst_30067);

(statearr_30271[(10)] = inst_30068);

return statearr_30271;
})();
var statearr_30272_30338 = state_30205__$1;
(statearr_30272_30338[(2)] = null);

(statearr_30272_30338[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (45))){
var state_30205__$1 = state_30205;
var statearr_30273_30339 = state_30205__$1;
(statearr_30273_30339[(2)] = null);

(statearr_30273_30339[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (26))){
var inst_30121 = (state_30205[(23)]);
var inst_30122 = (state_30205[(24)]);
var inst_30124 = (state_30205[(26)]);
var inst_30126 = (state_30205[(25)]);
var inst_30118 = (state_30205[(19)]);
var inst_30141 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30143 = (function (){var all_files = inst_30118;
var res_SINGLEQUOTE_ = inst_30121;
var res = inst_30122;
var files_not_loaded = inst_30124;
var dependencies_that_loaded = inst_30126;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30121,inst_30122,inst_30124,inst_30126,inst_30118,inst_30141,state_val_30206,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30142){
var map__30274 = p__30142;
var map__30274__$1 = ((((!((map__30274 == null)))?(((((map__30274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30274):map__30274);
var namespace = cljs.core.get.call(null,map__30274__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30274__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30121,inst_30122,inst_30124,inst_30126,inst_30118,inst_30141,state_val_30206,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30144 = cljs.core.map.call(null,inst_30143,inst_30122);
var inst_30145 = cljs.core.pr_str.call(null,inst_30144);
var inst_30146 = figwheel.client.utils.log.call(null,inst_30145);
var inst_30147 = (function (){var all_files = inst_30118;
var res_SINGLEQUOTE_ = inst_30121;
var res = inst_30122;
var files_not_loaded = inst_30124;
var dependencies_that_loaded = inst_30126;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30121,inst_30122,inst_30124,inst_30126,inst_30118,inst_30141,inst_30143,inst_30144,inst_30145,inst_30146,state_val_30206,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30121,inst_30122,inst_30124,inst_30126,inst_30118,inst_30141,inst_30143,inst_30144,inst_30145,inst_30146,state_val_30206,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30148 = setTimeout(inst_30147,(10));
var state_30205__$1 = (function (){var statearr_30276 = state_30205;
(statearr_30276[(33)] = inst_30146);

(statearr_30276[(34)] = inst_30141);

return statearr_30276;
})();
var statearr_30277_30340 = state_30205__$1;
(statearr_30277_30340[(2)] = inst_30148);

(statearr_30277_30340[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (16))){
var state_30205__$1 = state_30205;
var statearr_30278_30341 = state_30205__$1;
(statearr_30278_30341[(2)] = reload_dependents);

(statearr_30278_30341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (38))){
var inst_30158 = (state_30205[(16)]);
var inst_30176 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30158);
var state_30205__$1 = state_30205;
var statearr_30279_30342 = state_30205__$1;
(statearr_30279_30342[(2)] = inst_30176);

(statearr_30279_30342[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (30))){
var state_30205__$1 = state_30205;
var statearr_30280_30343 = state_30205__$1;
(statearr_30280_30343[(2)] = null);

(statearr_30280_30343[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (10))){
var inst_30078 = (state_30205[(22)]);
var inst_30080 = cljs.core.chunked_seq_QMARK_.call(null,inst_30078);
var state_30205__$1 = state_30205;
if(inst_30080){
var statearr_30281_30344 = state_30205__$1;
(statearr_30281_30344[(1)] = (13));

} else {
var statearr_30282_30345 = state_30205__$1;
(statearr_30282_30345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (18))){
var inst_30112 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
if(cljs.core.truth_(inst_30112)){
var statearr_30283_30346 = state_30205__$1;
(statearr_30283_30346[(1)] = (19));

} else {
var statearr_30284_30347 = state_30205__$1;
(statearr_30284_30347[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (42))){
var state_30205__$1 = state_30205;
var statearr_30285_30348 = state_30205__$1;
(statearr_30285_30348[(2)] = null);

(statearr_30285_30348[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (37))){
var inst_30171 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
var statearr_30286_30349 = state_30205__$1;
(statearr_30286_30349[(2)] = inst_30171);

(statearr_30286_30349[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (8))){
var inst_30078 = (state_30205[(22)]);
var inst_30065 = (state_30205[(8)]);
var inst_30078__$1 = cljs.core.seq.call(null,inst_30065);
var state_30205__$1 = (function (){var statearr_30287 = state_30205;
(statearr_30287[(22)] = inst_30078__$1);

return statearr_30287;
})();
if(inst_30078__$1){
var statearr_30288_30350 = state_30205__$1;
(statearr_30288_30350[(1)] = (10));

} else {
var statearr_30289_30351 = state_30205__$1;
(statearr_30289_30351[(1)] = (11));

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
});})(c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26573__auto__,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto____0 = (function (){
var statearr_30290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30290[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto__);

(statearr_30290[(1)] = (1));

return statearr_30290;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto____1 = (function (state_30205){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_30205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e30291){if((e30291 instanceof Object)){
var ex__26577__auto__ = e30291;
var statearr_30292_30352 = state_30205;
(statearr_30292_30352[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30353 = state_30205;
state_30205 = G__30353;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto__ = function(state_30205){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto____1.call(this,state_30205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26665__auto__ = (function (){var statearr_30293 = f__26664__auto__.call(null);
(statearr_30293[(6)] = c__26663__auto__);

return statearr_30293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__,map__30050,map__30050__$1,opts,before_jsload,on_jsload,reload_dependents,map__30051,map__30051__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26663__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30356,link){
var map__30357 = p__30356;
var map__30357__$1 = ((((!((map__30357 == null)))?(((((map__30357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30357):map__30357);
var file = cljs.core.get.call(null,map__30357__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30357,map__30357__$1,file){
return (function (p1__30354_SHARP_,p2__30355_SHARP_){
if(cljs.core._EQ_.call(null,p1__30354_SHARP_,p2__30355_SHARP_)){
return p1__30354_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30357,map__30357__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30360){
var map__30361 = p__30360;
var map__30361__$1 = ((((!((map__30361 == null)))?(((((map__30361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30361):map__30361);
var match_length = cljs.core.get.call(null,map__30361__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30361__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30359_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30359_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30363_SHARP_,p2__30364_SHARP_){
return cljs.core.assoc.call(null,p1__30363_SHARP_,cljs.core.get.call(null,p2__30364_SHARP_,key),p2__30364_SHARP_);
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
var loaded_f_datas_30365 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30365);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30365);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30366,p__30367){
var map__30368 = p__30366;
var map__30368__$1 = ((((!((map__30368 == null)))?(((((map__30368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30368):map__30368);
var on_cssload = cljs.core.get.call(null,map__30368__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30369 = p__30367;
var map__30369__$1 = ((((!((map__30369 == null)))?(((((map__30369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30369):map__30369);
var files_msg = map__30369__$1;
var files = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1530696302887
