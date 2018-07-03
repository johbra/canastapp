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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29660_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29660_SHARP_));
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
var seq__29661 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29662 = null;
var count__29663 = (0);
var i__29664 = (0);
while(true){
if((i__29664 < count__29663)){
var n = cljs.core._nth.call(null,chunk__29662,i__29664);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29665 = seq__29661;
var G__29666 = chunk__29662;
var G__29667 = count__29663;
var G__29668 = (i__29664 + (1));
seq__29661 = G__29665;
chunk__29662 = G__29666;
count__29663 = G__29667;
i__29664 = G__29668;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29661);
if(temp__5457__auto__){
var seq__29661__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29661__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29661__$1);
var G__29669 = cljs.core.chunk_rest.call(null,seq__29661__$1);
var G__29670 = c__4319__auto__;
var G__29671 = cljs.core.count.call(null,c__4319__auto__);
var G__29672 = (0);
seq__29661 = G__29669;
chunk__29662 = G__29670;
count__29663 = G__29671;
i__29664 = G__29672;
continue;
} else {
var n = cljs.core.first.call(null,seq__29661__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29673 = cljs.core.next.call(null,seq__29661__$1);
var G__29674 = null;
var G__29675 = (0);
var G__29676 = (0);
seq__29661 = G__29673;
chunk__29662 = G__29674;
count__29663 = G__29675;
i__29664 = G__29676;
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
return cljs.core.some.call(null,(function (p__29677){
var vec__29678 = p__29677;
var _ = cljs.core.nth.call(null,vec__29678,(0),null);
var v = cljs.core.nth.call(null,vec__29678,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29681){
var vec__29682 = p__29681;
var k = cljs.core.nth.call(null,vec__29682,(0),null);
var v = cljs.core.nth.call(null,vec__29682,(1),null);
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

var seq__29694_29702 = cljs.core.seq.call(null,deps);
var chunk__29695_29703 = null;
var count__29696_29704 = (0);
var i__29697_29705 = (0);
while(true){
if((i__29697_29705 < count__29696_29704)){
var dep_29706 = cljs.core._nth.call(null,chunk__29695_29703,i__29697_29705);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29706;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29706));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29706,(depth + (1)),state);
} else {
}


var G__29707 = seq__29694_29702;
var G__29708 = chunk__29695_29703;
var G__29709 = count__29696_29704;
var G__29710 = (i__29697_29705 + (1));
seq__29694_29702 = G__29707;
chunk__29695_29703 = G__29708;
count__29696_29704 = G__29709;
i__29697_29705 = G__29710;
continue;
} else {
var temp__5457__auto___29711 = cljs.core.seq.call(null,seq__29694_29702);
if(temp__5457__auto___29711){
var seq__29694_29712__$1 = temp__5457__auto___29711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29694_29712__$1)){
var c__4319__auto___29713 = cljs.core.chunk_first.call(null,seq__29694_29712__$1);
var G__29714 = cljs.core.chunk_rest.call(null,seq__29694_29712__$1);
var G__29715 = c__4319__auto___29713;
var G__29716 = cljs.core.count.call(null,c__4319__auto___29713);
var G__29717 = (0);
seq__29694_29702 = G__29714;
chunk__29695_29703 = G__29715;
count__29696_29704 = G__29716;
i__29697_29705 = G__29717;
continue;
} else {
var dep_29718 = cljs.core.first.call(null,seq__29694_29712__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29718;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29718));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29718,(depth + (1)),state);
} else {
}


var G__29719 = cljs.core.next.call(null,seq__29694_29712__$1);
var G__29720 = null;
var G__29721 = (0);
var G__29722 = (0);
seq__29694_29702 = G__29719;
chunk__29695_29703 = G__29720;
count__29696_29704 = G__29721;
i__29697_29705 = G__29722;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29698){
var vec__29699 = p__29698;
var seq__29700 = cljs.core.seq.call(null,vec__29699);
var first__29701 = cljs.core.first.call(null,seq__29700);
var seq__29700__$1 = cljs.core.next.call(null,seq__29700);
var x = first__29701;
var xs = seq__29700__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29699,seq__29700,first__29701,seq__29700__$1,x,xs,get_deps__$1){
return (function (p1__29685_SHARP_){
return clojure.set.difference.call(null,p1__29685_SHARP_,x);
});})(vec__29699,seq__29700,first__29701,seq__29700__$1,x,xs,get_deps__$1))
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
var seq__29723 = cljs.core.seq.call(null,provides);
var chunk__29724 = null;
var count__29725 = (0);
var i__29726 = (0);
while(true){
if((i__29726 < count__29725)){
var prov = cljs.core._nth.call(null,chunk__29724,i__29726);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29727_29735 = cljs.core.seq.call(null,requires);
var chunk__29728_29736 = null;
var count__29729_29737 = (0);
var i__29730_29738 = (0);
while(true){
if((i__29730_29738 < count__29729_29737)){
var req_29739 = cljs.core._nth.call(null,chunk__29728_29736,i__29730_29738);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29739,prov);


var G__29740 = seq__29727_29735;
var G__29741 = chunk__29728_29736;
var G__29742 = count__29729_29737;
var G__29743 = (i__29730_29738 + (1));
seq__29727_29735 = G__29740;
chunk__29728_29736 = G__29741;
count__29729_29737 = G__29742;
i__29730_29738 = G__29743;
continue;
} else {
var temp__5457__auto___29744 = cljs.core.seq.call(null,seq__29727_29735);
if(temp__5457__auto___29744){
var seq__29727_29745__$1 = temp__5457__auto___29744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29727_29745__$1)){
var c__4319__auto___29746 = cljs.core.chunk_first.call(null,seq__29727_29745__$1);
var G__29747 = cljs.core.chunk_rest.call(null,seq__29727_29745__$1);
var G__29748 = c__4319__auto___29746;
var G__29749 = cljs.core.count.call(null,c__4319__auto___29746);
var G__29750 = (0);
seq__29727_29735 = G__29747;
chunk__29728_29736 = G__29748;
count__29729_29737 = G__29749;
i__29730_29738 = G__29750;
continue;
} else {
var req_29751 = cljs.core.first.call(null,seq__29727_29745__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29751,prov);


var G__29752 = cljs.core.next.call(null,seq__29727_29745__$1);
var G__29753 = null;
var G__29754 = (0);
var G__29755 = (0);
seq__29727_29735 = G__29752;
chunk__29728_29736 = G__29753;
count__29729_29737 = G__29754;
i__29730_29738 = G__29755;
continue;
}
} else {
}
}
break;
}


var G__29756 = seq__29723;
var G__29757 = chunk__29724;
var G__29758 = count__29725;
var G__29759 = (i__29726 + (1));
seq__29723 = G__29756;
chunk__29724 = G__29757;
count__29725 = G__29758;
i__29726 = G__29759;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29723);
if(temp__5457__auto__){
var seq__29723__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29723__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29723__$1);
var G__29760 = cljs.core.chunk_rest.call(null,seq__29723__$1);
var G__29761 = c__4319__auto__;
var G__29762 = cljs.core.count.call(null,c__4319__auto__);
var G__29763 = (0);
seq__29723 = G__29760;
chunk__29724 = G__29761;
count__29725 = G__29762;
i__29726 = G__29763;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29723__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29731_29764 = cljs.core.seq.call(null,requires);
var chunk__29732_29765 = null;
var count__29733_29766 = (0);
var i__29734_29767 = (0);
while(true){
if((i__29734_29767 < count__29733_29766)){
var req_29768 = cljs.core._nth.call(null,chunk__29732_29765,i__29734_29767);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29768,prov);


var G__29769 = seq__29731_29764;
var G__29770 = chunk__29732_29765;
var G__29771 = count__29733_29766;
var G__29772 = (i__29734_29767 + (1));
seq__29731_29764 = G__29769;
chunk__29732_29765 = G__29770;
count__29733_29766 = G__29771;
i__29734_29767 = G__29772;
continue;
} else {
var temp__5457__auto___29773__$1 = cljs.core.seq.call(null,seq__29731_29764);
if(temp__5457__auto___29773__$1){
var seq__29731_29774__$1 = temp__5457__auto___29773__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29731_29774__$1)){
var c__4319__auto___29775 = cljs.core.chunk_first.call(null,seq__29731_29774__$1);
var G__29776 = cljs.core.chunk_rest.call(null,seq__29731_29774__$1);
var G__29777 = c__4319__auto___29775;
var G__29778 = cljs.core.count.call(null,c__4319__auto___29775);
var G__29779 = (0);
seq__29731_29764 = G__29776;
chunk__29732_29765 = G__29777;
count__29733_29766 = G__29778;
i__29734_29767 = G__29779;
continue;
} else {
var req_29780 = cljs.core.first.call(null,seq__29731_29774__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29780,prov);


var G__29781 = cljs.core.next.call(null,seq__29731_29774__$1);
var G__29782 = null;
var G__29783 = (0);
var G__29784 = (0);
seq__29731_29764 = G__29781;
chunk__29732_29765 = G__29782;
count__29733_29766 = G__29783;
i__29734_29767 = G__29784;
continue;
}
} else {
}
}
break;
}


var G__29785 = cljs.core.next.call(null,seq__29723__$1);
var G__29786 = null;
var G__29787 = (0);
var G__29788 = (0);
seq__29723 = G__29785;
chunk__29724 = G__29786;
count__29725 = G__29787;
i__29726 = G__29788;
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
var seq__29789_29793 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29790_29794 = null;
var count__29791_29795 = (0);
var i__29792_29796 = (0);
while(true){
if((i__29792_29796 < count__29791_29795)){
var ns_29797 = cljs.core._nth.call(null,chunk__29790_29794,i__29792_29796);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29797);


var G__29798 = seq__29789_29793;
var G__29799 = chunk__29790_29794;
var G__29800 = count__29791_29795;
var G__29801 = (i__29792_29796 + (1));
seq__29789_29793 = G__29798;
chunk__29790_29794 = G__29799;
count__29791_29795 = G__29800;
i__29792_29796 = G__29801;
continue;
} else {
var temp__5457__auto___29802 = cljs.core.seq.call(null,seq__29789_29793);
if(temp__5457__auto___29802){
var seq__29789_29803__$1 = temp__5457__auto___29802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29789_29803__$1)){
var c__4319__auto___29804 = cljs.core.chunk_first.call(null,seq__29789_29803__$1);
var G__29805 = cljs.core.chunk_rest.call(null,seq__29789_29803__$1);
var G__29806 = c__4319__auto___29804;
var G__29807 = cljs.core.count.call(null,c__4319__auto___29804);
var G__29808 = (0);
seq__29789_29793 = G__29805;
chunk__29790_29794 = G__29806;
count__29791_29795 = G__29807;
i__29792_29796 = G__29808;
continue;
} else {
var ns_29809 = cljs.core.first.call(null,seq__29789_29803__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29809);


var G__29810 = cljs.core.next.call(null,seq__29789_29803__$1);
var G__29811 = null;
var G__29812 = (0);
var G__29813 = (0);
seq__29789_29793 = G__29810;
chunk__29790_29794 = G__29811;
count__29791_29795 = G__29812;
i__29792_29796 = G__29813;
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
var G__29814__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29814 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29815__i = 0, G__29815__a = new Array(arguments.length -  0);
while (G__29815__i < G__29815__a.length) {G__29815__a[G__29815__i] = arguments[G__29815__i + 0]; ++G__29815__i;}
  args = new cljs.core.IndexedSeq(G__29815__a,0,null);
} 
return G__29814__delegate.call(this,args);};
G__29814.cljs$lang$maxFixedArity = 0;
G__29814.cljs$lang$applyTo = (function (arglist__29816){
var args = cljs.core.seq(arglist__29816);
return G__29814__delegate(args);
});
G__29814.cljs$core$IFn$_invoke$arity$variadic = G__29814__delegate;
return G__29814;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29817_SHARP_,p2__29818_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29817_SHARP_)].join('')),p2__29818_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29819_SHARP_,p2__29820_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29819_SHARP_)].join(''),p2__29820_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29821 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29821.addCallback(((function (G__29821){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29821))
);

G__29821.addErrback(((function (G__29821){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29821))
);

return G__29821;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29822){if((e29822 instanceof Error)){
var e = e29822;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29822;

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
}catch (e29823){if((e29823 instanceof Error)){
var e = e29823;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29823;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29824 = cljs.core._EQ_;
var expr__29825 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29824.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29825))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29824.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29825))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29824.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29825))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29824,expr__29825){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29824,expr__29825))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29827,callback){
var map__29828 = p__29827;
var map__29828__$1 = ((((!((map__29828 == null)))?(((((map__29828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29828):map__29828);
var file_msg = map__29828__$1;
var request_url = cljs.core.get.call(null,map__29828__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29828,map__29828__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29828,map__29828__$1,file_msg,request_url))
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
return (function (state_29866){
var state_val_29867 = (state_29866[(1)]);
if((state_val_29867 === (7))){
var inst_29862 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
var statearr_29868_29894 = state_29866__$1;
(statearr_29868_29894[(2)] = inst_29862);

(statearr_29868_29894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (1))){
var state_29866__$1 = state_29866;
var statearr_29869_29895 = state_29866__$1;
(statearr_29869_29895[(2)] = null);

(statearr_29869_29895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (4))){
var inst_29832 = (state_29866[(7)]);
var inst_29832__$1 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29870 = state_29866;
(statearr_29870[(7)] = inst_29832__$1);

return statearr_29870;
})();
if(cljs.core.truth_(inst_29832__$1)){
var statearr_29871_29896 = state_29866__$1;
(statearr_29871_29896[(1)] = (5));

} else {
var statearr_29872_29897 = state_29866__$1;
(statearr_29872_29897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (15))){
var inst_29845 = (state_29866[(8)]);
var inst_29847 = (state_29866[(9)]);
var inst_29849 = inst_29847.call(null,inst_29845);
var state_29866__$1 = state_29866;
var statearr_29873_29898 = state_29866__$1;
(statearr_29873_29898[(2)] = inst_29849);

(statearr_29873_29898[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (13))){
var inst_29856 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
var statearr_29874_29899 = state_29866__$1;
(statearr_29874_29899[(2)] = inst_29856);

(statearr_29874_29899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (6))){
var state_29866__$1 = state_29866;
var statearr_29875_29900 = state_29866__$1;
(statearr_29875_29900[(2)] = null);

(statearr_29875_29900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (17))){
var inst_29853 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
var statearr_29876_29901 = state_29866__$1;
(statearr_29876_29901[(2)] = inst_29853);

(statearr_29876_29901[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (3))){
var inst_29864 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29866__$1,inst_29864);
} else {
if((state_val_29867 === (12))){
var state_29866__$1 = state_29866;
var statearr_29877_29902 = state_29866__$1;
(statearr_29877_29902[(2)] = null);

(statearr_29877_29902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (2))){
var state_29866__$1 = state_29866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29866__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29867 === (11))){
var inst_29837 = (state_29866[(10)]);
var inst_29843 = figwheel.client.file_reloading.blocking_load.call(null,inst_29837);
var state_29866__$1 = state_29866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29866__$1,(14),inst_29843);
} else {
if((state_val_29867 === (9))){
var inst_29837 = (state_29866[(10)]);
var state_29866__$1 = state_29866;
if(cljs.core.truth_(inst_29837)){
var statearr_29878_29903 = state_29866__$1;
(statearr_29878_29903[(1)] = (11));

} else {
var statearr_29879_29904 = state_29866__$1;
(statearr_29879_29904[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (5))){
var inst_29832 = (state_29866[(7)]);
var inst_29838 = (state_29866[(11)]);
var inst_29837 = cljs.core.nth.call(null,inst_29832,(0),null);
var inst_29838__$1 = cljs.core.nth.call(null,inst_29832,(1),null);
var state_29866__$1 = (function (){var statearr_29880 = state_29866;
(statearr_29880[(11)] = inst_29838__$1);

(statearr_29880[(10)] = inst_29837);

return statearr_29880;
})();
if(cljs.core.truth_(inst_29838__$1)){
var statearr_29881_29905 = state_29866__$1;
(statearr_29881_29905[(1)] = (8));

} else {
var statearr_29882_29906 = state_29866__$1;
(statearr_29882_29906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (14))){
var inst_29837 = (state_29866[(10)]);
var inst_29847 = (state_29866[(9)]);
var inst_29845 = (state_29866[(2)]);
var inst_29846 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29847__$1 = cljs.core.get.call(null,inst_29846,inst_29837);
var state_29866__$1 = (function (){var statearr_29883 = state_29866;
(statearr_29883[(8)] = inst_29845);

(statearr_29883[(9)] = inst_29847__$1);

return statearr_29883;
})();
if(cljs.core.truth_(inst_29847__$1)){
var statearr_29884_29907 = state_29866__$1;
(statearr_29884_29907[(1)] = (15));

} else {
var statearr_29885_29908 = state_29866__$1;
(statearr_29885_29908[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (16))){
var inst_29845 = (state_29866[(8)]);
var inst_29851 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29845);
var state_29866__$1 = state_29866;
var statearr_29886_29909 = state_29866__$1;
(statearr_29886_29909[(2)] = inst_29851);

(statearr_29886_29909[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (10))){
var inst_29858 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29887 = state_29866;
(statearr_29887[(12)] = inst_29858);

return statearr_29887;
})();
var statearr_29888_29910 = state_29866__$1;
(statearr_29888_29910[(2)] = null);

(statearr_29888_29910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (8))){
var inst_29838 = (state_29866[(11)]);
var inst_29840 = eval(inst_29838);
var state_29866__$1 = state_29866;
var statearr_29889_29911 = state_29866__$1;
(statearr_29889_29911[(2)] = inst_29840);

(statearr_29889_29911[(1)] = (10));


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
var statearr_29890 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29890[(0)] = figwheel$client$file_reloading$state_machine__26574__auto__);

(statearr_29890[(1)] = (1));

return statearr_29890;
});
var figwheel$client$file_reloading$state_machine__26574__auto____1 = (function (state_29866){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_29866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e29891){if((e29891 instanceof Object)){
var ex__26577__auto__ = e29891;
var statearr_29892_29912 = state_29866;
(statearr_29892_29912[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29913 = state_29866;
state_29866 = G__29913;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26574__auto__ = function(state_29866){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26574__auto____1.call(this,state_29866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26574__auto____0;
figwheel$client$file_reloading$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26574__auto____1;
return figwheel$client$file_reloading$state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_29893 = f__26664__auto__.call(null);
(statearr_29893[(6)] = c__26663__auto__);

return statearr_29893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__))
);

return c__26663__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29915 = arguments.length;
switch (G__29915) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29917,callback){
var map__29918 = p__29917;
var map__29918__$1 = ((((!((map__29918 == null)))?(((((map__29918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29918):map__29918);
var file_msg = map__29918__$1;
var namespace = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29918,map__29918__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29918,map__29918__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29920){
var map__29921 = p__29920;
var map__29921__$1 = ((((!((map__29921 == null)))?(((((map__29921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29921):map__29921);
var file_msg = map__29921__$1;
var namespace = cljs.core.get.call(null,map__29921__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29923){
var map__29924 = p__29923;
var map__29924__$1 = ((((!((map__29924 == null)))?(((((map__29924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29924):map__29924);
var file_msg = map__29924__$1;
var namespace = cljs.core.get.call(null,map__29924__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29926,callback){
var map__29927 = p__29926;
var map__29927__$1 = ((((!((map__29927 == null)))?(((((map__29927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29927):map__29927);
var file_msg = map__29927__$1;
var request_url = cljs.core.get.call(null,map__29927__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29927__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26663__auto___29977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___29977,out){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___29977,out){
return (function (state_29962){
var state_val_29963 = (state_29962[(1)]);
if((state_val_29963 === (1))){
var inst_29936 = cljs.core.seq.call(null,files);
var inst_29937 = cljs.core.first.call(null,inst_29936);
var inst_29938 = cljs.core.next.call(null,inst_29936);
var inst_29939 = files;
var state_29962__$1 = (function (){var statearr_29964 = state_29962;
(statearr_29964[(7)] = inst_29939);

(statearr_29964[(8)] = inst_29938);

(statearr_29964[(9)] = inst_29937);

return statearr_29964;
})();
var statearr_29965_29978 = state_29962__$1;
(statearr_29965_29978[(2)] = null);

(statearr_29965_29978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (2))){
var inst_29939 = (state_29962[(7)]);
var inst_29945 = (state_29962[(10)]);
var inst_29944 = cljs.core.seq.call(null,inst_29939);
var inst_29945__$1 = cljs.core.first.call(null,inst_29944);
var inst_29946 = cljs.core.next.call(null,inst_29944);
var inst_29947 = (inst_29945__$1 == null);
var inst_29948 = cljs.core.not.call(null,inst_29947);
var state_29962__$1 = (function (){var statearr_29966 = state_29962;
(statearr_29966[(11)] = inst_29946);

(statearr_29966[(10)] = inst_29945__$1);

return statearr_29966;
})();
if(inst_29948){
var statearr_29967_29979 = state_29962__$1;
(statearr_29967_29979[(1)] = (4));

} else {
var statearr_29968_29980 = state_29962__$1;
(statearr_29968_29980[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (3))){
var inst_29960 = (state_29962[(2)]);
var state_29962__$1 = state_29962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29962__$1,inst_29960);
} else {
if((state_val_29963 === (4))){
var inst_29945 = (state_29962[(10)]);
var inst_29950 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29945);
var state_29962__$1 = state_29962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29962__$1,(7),inst_29950);
} else {
if((state_val_29963 === (5))){
var inst_29956 = cljs.core.async.close_BANG_.call(null,out);
var state_29962__$1 = state_29962;
var statearr_29969_29981 = state_29962__$1;
(statearr_29969_29981[(2)] = inst_29956);

(statearr_29969_29981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (6))){
var inst_29958 = (state_29962[(2)]);
var state_29962__$1 = state_29962;
var statearr_29970_29982 = state_29962__$1;
(statearr_29970_29982[(2)] = inst_29958);

(statearr_29970_29982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (7))){
var inst_29946 = (state_29962[(11)]);
var inst_29952 = (state_29962[(2)]);
var inst_29953 = cljs.core.async.put_BANG_.call(null,out,inst_29952);
var inst_29939 = inst_29946;
var state_29962__$1 = (function (){var statearr_29971 = state_29962;
(statearr_29971[(7)] = inst_29939);

(statearr_29971[(12)] = inst_29953);

return statearr_29971;
})();
var statearr_29972_29983 = state_29962__$1;
(statearr_29972_29983[(2)] = null);

(statearr_29972_29983[(1)] = (2));


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
});})(c__26663__auto___29977,out))
;
return ((function (switch__26573__auto__,c__26663__auto___29977,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto____0 = (function (){
var statearr_29973 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29973[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto__);

(statearr_29973[(1)] = (1));

return statearr_29973;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto____1 = (function (state_29962){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_29962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e29974){if((e29974 instanceof Object)){
var ex__26577__auto__ = e29974;
var statearr_29975_29984 = state_29962;
(statearr_29975_29984[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29985 = state_29962;
state_29962 = G__29985;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto__ = function(state_29962){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto____1.call(this,state_29962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___29977,out))
})();
var state__26665__auto__ = (function (){var statearr_29976 = f__26664__auto__.call(null);
(statearr_29976[(6)] = c__26663__auto___29977);

return statearr_29976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___29977,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29986,opts){
var map__29987 = p__29986;
var map__29987__$1 = ((((!((map__29987 == null)))?(((((map__29987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29987):map__29987);
var eval_body = cljs.core.get.call(null,map__29987__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29987__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29989){var e = e29989;
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
return (function (p1__29990_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29990_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29991){
var vec__29992 = p__29991;
var k = cljs.core.nth.call(null,vec__29992,(0),null);
var v = cljs.core.nth.call(null,vec__29992,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29995){
var vec__29996 = p__29995;
var k = cljs.core.nth.call(null,vec__29996,(0),null);
var v = cljs.core.nth.call(null,vec__29996,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30002,p__30003){
var map__30004 = p__30002;
var map__30004__$1 = ((((!((map__30004 == null)))?(((((map__30004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30004):map__30004);
var opts = map__30004__$1;
var before_jsload = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30005 = p__30003;
var map__30005__$1 = ((((!((map__30005 == null)))?(((((map__30005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30005):map__30005);
var msg = map__30005__$1;
var files = cljs.core.get.call(null,map__30005__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30005__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30005__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30159){
var state_val_30160 = (state_30159[(1)]);
if((state_val_30160 === (7))){
var inst_30022 = (state_30159[(7)]);
var inst_30021 = (state_30159[(8)]);
var inst_30020 = (state_30159[(9)]);
var inst_30019 = (state_30159[(10)]);
var inst_30027 = cljs.core._nth.call(null,inst_30020,inst_30022);
var inst_30028 = figwheel.client.file_reloading.eval_body.call(null,inst_30027,opts);
var inst_30029 = (inst_30022 + (1));
var tmp30161 = inst_30021;
var tmp30162 = inst_30020;
var tmp30163 = inst_30019;
var inst_30019__$1 = tmp30163;
var inst_30020__$1 = tmp30162;
var inst_30021__$1 = tmp30161;
var inst_30022__$1 = inst_30029;
var state_30159__$1 = (function (){var statearr_30164 = state_30159;
(statearr_30164[(7)] = inst_30022__$1);

(statearr_30164[(8)] = inst_30021__$1);

(statearr_30164[(9)] = inst_30020__$1);

(statearr_30164[(11)] = inst_30028);

(statearr_30164[(10)] = inst_30019__$1);

return statearr_30164;
})();
var statearr_30165_30248 = state_30159__$1;
(statearr_30165_30248[(2)] = null);

(statearr_30165_30248[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (20))){
var inst_30062 = (state_30159[(12)]);
var inst_30070 = figwheel.client.file_reloading.sort_files.call(null,inst_30062);
var state_30159__$1 = state_30159;
var statearr_30166_30249 = state_30159__$1;
(statearr_30166_30249[(2)] = inst_30070);

(statearr_30166_30249[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (27))){
var state_30159__$1 = state_30159;
var statearr_30167_30250 = state_30159__$1;
(statearr_30167_30250[(2)] = null);

(statearr_30167_30250[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (1))){
var inst_30011 = (state_30159[(13)]);
var inst_30008 = before_jsload.call(null,files);
var inst_30009 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30010 = (function (){return ((function (inst_30011,inst_30008,inst_30009,state_val_30160,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29999_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29999_SHARP_);
});
;})(inst_30011,inst_30008,inst_30009,state_val_30160,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30011__$1 = cljs.core.filter.call(null,inst_30010,files);
var inst_30012 = cljs.core.not_empty.call(null,inst_30011__$1);
var state_30159__$1 = (function (){var statearr_30168 = state_30159;
(statearr_30168[(13)] = inst_30011__$1);

(statearr_30168[(14)] = inst_30008);

(statearr_30168[(15)] = inst_30009);

return statearr_30168;
})();
if(cljs.core.truth_(inst_30012)){
var statearr_30169_30251 = state_30159__$1;
(statearr_30169_30251[(1)] = (2));

} else {
var statearr_30170_30252 = state_30159__$1;
(statearr_30170_30252[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (24))){
var state_30159__$1 = state_30159;
var statearr_30171_30253 = state_30159__$1;
(statearr_30171_30253[(2)] = null);

(statearr_30171_30253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (39))){
var inst_30112 = (state_30159[(16)]);
var state_30159__$1 = state_30159;
var statearr_30172_30254 = state_30159__$1;
(statearr_30172_30254[(2)] = inst_30112);

(statearr_30172_30254[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (46))){
var inst_30154 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30173_30255 = state_30159__$1;
(statearr_30173_30255[(2)] = inst_30154);

(statearr_30173_30255[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (4))){
var inst_30056 = (state_30159[(2)]);
var inst_30057 = cljs.core.List.EMPTY;
var inst_30058 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30057);
var inst_30059 = (function (){return ((function (inst_30056,inst_30057,inst_30058,state_val_30160,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30000_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30000_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30000_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30000_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_30056,inst_30057,inst_30058,state_val_30160,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30060 = cljs.core.filter.call(null,inst_30059,files);
var inst_30061 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30062 = cljs.core.concat.call(null,inst_30060,inst_30061);
var state_30159__$1 = (function (){var statearr_30174 = state_30159;
(statearr_30174[(17)] = inst_30056);

(statearr_30174[(18)] = inst_30058);

(statearr_30174[(12)] = inst_30062);

return statearr_30174;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30175_30256 = state_30159__$1;
(statearr_30175_30256[(1)] = (16));

} else {
var statearr_30176_30257 = state_30159__$1;
(statearr_30176_30257[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (15))){
var inst_30046 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30177_30258 = state_30159__$1;
(statearr_30177_30258[(2)] = inst_30046);

(statearr_30177_30258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (21))){
var inst_30072 = (state_30159[(19)]);
var inst_30072__$1 = (state_30159[(2)]);
var inst_30073 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30072__$1);
var state_30159__$1 = (function (){var statearr_30178 = state_30159;
(statearr_30178[(19)] = inst_30072__$1);

return statearr_30178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30159__$1,(22),inst_30073);
} else {
if((state_val_30160 === (31))){
var inst_30157 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30159__$1,inst_30157);
} else {
if((state_val_30160 === (32))){
var inst_30112 = (state_30159[(16)]);
var inst_30117 = inst_30112.cljs$lang$protocol_mask$partition0$;
var inst_30118 = (inst_30117 & (64));
var inst_30119 = inst_30112.cljs$core$ISeq$;
var inst_30120 = (cljs.core.PROTOCOL_SENTINEL === inst_30119);
var inst_30121 = ((inst_30118) || (inst_30120));
var state_30159__$1 = state_30159;
if(cljs.core.truth_(inst_30121)){
var statearr_30179_30259 = state_30159__$1;
(statearr_30179_30259[(1)] = (35));

} else {
var statearr_30180_30260 = state_30159__$1;
(statearr_30180_30260[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (40))){
var inst_30134 = (state_30159[(20)]);
var inst_30133 = (state_30159[(2)]);
var inst_30134__$1 = cljs.core.get.call(null,inst_30133,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30135 = cljs.core.get.call(null,inst_30133,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30136 = cljs.core.not_empty.call(null,inst_30134__$1);
var state_30159__$1 = (function (){var statearr_30181 = state_30159;
(statearr_30181[(20)] = inst_30134__$1);

(statearr_30181[(21)] = inst_30135);

return statearr_30181;
})();
if(cljs.core.truth_(inst_30136)){
var statearr_30182_30261 = state_30159__$1;
(statearr_30182_30261[(1)] = (41));

} else {
var statearr_30183_30262 = state_30159__$1;
(statearr_30183_30262[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (33))){
var state_30159__$1 = state_30159;
var statearr_30184_30263 = state_30159__$1;
(statearr_30184_30263[(2)] = false);

(statearr_30184_30263[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (13))){
var inst_30032 = (state_30159[(22)]);
var inst_30036 = cljs.core.chunk_first.call(null,inst_30032);
var inst_30037 = cljs.core.chunk_rest.call(null,inst_30032);
var inst_30038 = cljs.core.count.call(null,inst_30036);
var inst_30019 = inst_30037;
var inst_30020 = inst_30036;
var inst_30021 = inst_30038;
var inst_30022 = (0);
var state_30159__$1 = (function (){var statearr_30185 = state_30159;
(statearr_30185[(7)] = inst_30022);

(statearr_30185[(8)] = inst_30021);

(statearr_30185[(9)] = inst_30020);

(statearr_30185[(10)] = inst_30019);

return statearr_30185;
})();
var statearr_30186_30264 = state_30159__$1;
(statearr_30186_30264[(2)] = null);

(statearr_30186_30264[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (22))){
var inst_30072 = (state_30159[(19)]);
var inst_30080 = (state_30159[(23)]);
var inst_30076 = (state_30159[(24)]);
var inst_30075 = (state_30159[(25)]);
var inst_30075__$1 = (state_30159[(2)]);
var inst_30076__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30075__$1);
var inst_30077 = (function (){var all_files = inst_30072;
var res_SINGLEQUOTE_ = inst_30075__$1;
var res = inst_30076__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30072,inst_30080,inst_30076,inst_30075,inst_30075__$1,inst_30076__$1,state_val_30160,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30001_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30001_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30072,inst_30080,inst_30076,inst_30075,inst_30075__$1,inst_30076__$1,state_val_30160,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30078 = cljs.core.filter.call(null,inst_30077,inst_30075__$1);
var inst_30079 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30080__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30079);
var inst_30081 = cljs.core.not_empty.call(null,inst_30080__$1);
var state_30159__$1 = (function (){var statearr_30187 = state_30159;
(statearr_30187[(26)] = inst_30078);

(statearr_30187[(23)] = inst_30080__$1);

(statearr_30187[(24)] = inst_30076__$1);

(statearr_30187[(25)] = inst_30075__$1);

return statearr_30187;
})();
if(cljs.core.truth_(inst_30081)){
var statearr_30188_30265 = state_30159__$1;
(statearr_30188_30265[(1)] = (23));

} else {
var statearr_30189_30266 = state_30159__$1;
(statearr_30189_30266[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (36))){
var state_30159__$1 = state_30159;
var statearr_30190_30267 = state_30159__$1;
(statearr_30190_30267[(2)] = false);

(statearr_30190_30267[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (41))){
var inst_30134 = (state_30159[(20)]);
var inst_30138 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30139 = cljs.core.map.call(null,inst_30138,inst_30134);
var inst_30140 = cljs.core.pr_str.call(null,inst_30139);
var inst_30141 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30140)].join('');
var inst_30142 = figwheel.client.utils.log.call(null,inst_30141);
var state_30159__$1 = state_30159;
var statearr_30191_30268 = state_30159__$1;
(statearr_30191_30268[(2)] = inst_30142);

(statearr_30191_30268[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (43))){
var inst_30135 = (state_30159[(21)]);
var inst_30145 = (state_30159[(2)]);
var inst_30146 = cljs.core.not_empty.call(null,inst_30135);
var state_30159__$1 = (function (){var statearr_30192 = state_30159;
(statearr_30192[(27)] = inst_30145);

return statearr_30192;
})();
if(cljs.core.truth_(inst_30146)){
var statearr_30193_30269 = state_30159__$1;
(statearr_30193_30269[(1)] = (44));

} else {
var statearr_30194_30270 = state_30159__$1;
(statearr_30194_30270[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (29))){
var inst_30078 = (state_30159[(26)]);
var inst_30072 = (state_30159[(19)]);
var inst_30080 = (state_30159[(23)]);
var inst_30112 = (state_30159[(16)]);
var inst_30076 = (state_30159[(24)]);
var inst_30075 = (state_30159[(25)]);
var inst_30108 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30111 = (function (){var all_files = inst_30072;
var res_SINGLEQUOTE_ = inst_30075;
var res = inst_30076;
var files_not_loaded = inst_30078;
var dependencies_that_loaded = inst_30080;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30078,inst_30072,inst_30080,inst_30112,inst_30076,inst_30075,inst_30108,state_val_30160,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30110){
var map__30195 = p__30110;
var map__30195__$1 = ((((!((map__30195 == null)))?(((((map__30195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30195):map__30195);
var namespace = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30078,inst_30072,inst_30080,inst_30112,inst_30076,inst_30075,inst_30108,state_val_30160,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30112__$1 = cljs.core.group_by.call(null,inst_30111,inst_30078);
var inst_30114 = (inst_30112__$1 == null);
var inst_30115 = cljs.core.not.call(null,inst_30114);
var state_30159__$1 = (function (){var statearr_30197 = state_30159;
(statearr_30197[(28)] = inst_30108);

(statearr_30197[(16)] = inst_30112__$1);

return statearr_30197;
})();
if(inst_30115){
var statearr_30198_30271 = state_30159__$1;
(statearr_30198_30271[(1)] = (32));

} else {
var statearr_30199_30272 = state_30159__$1;
(statearr_30199_30272[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (44))){
var inst_30135 = (state_30159[(21)]);
var inst_30148 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30135);
var inst_30149 = cljs.core.pr_str.call(null,inst_30148);
var inst_30150 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30149)].join('');
var inst_30151 = figwheel.client.utils.log.call(null,inst_30150);
var state_30159__$1 = state_30159;
var statearr_30200_30273 = state_30159__$1;
(statearr_30200_30273[(2)] = inst_30151);

(statearr_30200_30273[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (6))){
var inst_30053 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30201_30274 = state_30159__$1;
(statearr_30201_30274[(2)] = inst_30053);

(statearr_30201_30274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (28))){
var inst_30078 = (state_30159[(26)]);
var inst_30105 = (state_30159[(2)]);
var inst_30106 = cljs.core.not_empty.call(null,inst_30078);
var state_30159__$1 = (function (){var statearr_30202 = state_30159;
(statearr_30202[(29)] = inst_30105);

return statearr_30202;
})();
if(cljs.core.truth_(inst_30106)){
var statearr_30203_30275 = state_30159__$1;
(statearr_30203_30275[(1)] = (29));

} else {
var statearr_30204_30276 = state_30159__$1;
(statearr_30204_30276[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (25))){
var inst_30076 = (state_30159[(24)]);
var inst_30092 = (state_30159[(2)]);
var inst_30093 = cljs.core.not_empty.call(null,inst_30076);
var state_30159__$1 = (function (){var statearr_30205 = state_30159;
(statearr_30205[(30)] = inst_30092);

return statearr_30205;
})();
if(cljs.core.truth_(inst_30093)){
var statearr_30206_30277 = state_30159__$1;
(statearr_30206_30277[(1)] = (26));

} else {
var statearr_30207_30278 = state_30159__$1;
(statearr_30207_30278[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (34))){
var inst_30128 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
if(cljs.core.truth_(inst_30128)){
var statearr_30208_30279 = state_30159__$1;
(statearr_30208_30279[(1)] = (38));

} else {
var statearr_30209_30280 = state_30159__$1;
(statearr_30209_30280[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (17))){
var state_30159__$1 = state_30159;
var statearr_30210_30281 = state_30159__$1;
(statearr_30210_30281[(2)] = recompile_dependents);

(statearr_30210_30281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (3))){
var state_30159__$1 = state_30159;
var statearr_30211_30282 = state_30159__$1;
(statearr_30211_30282[(2)] = null);

(statearr_30211_30282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (12))){
var inst_30049 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30212_30283 = state_30159__$1;
(statearr_30212_30283[(2)] = inst_30049);

(statearr_30212_30283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (2))){
var inst_30011 = (state_30159[(13)]);
var inst_30018 = cljs.core.seq.call(null,inst_30011);
var inst_30019 = inst_30018;
var inst_30020 = null;
var inst_30021 = (0);
var inst_30022 = (0);
var state_30159__$1 = (function (){var statearr_30213 = state_30159;
(statearr_30213[(7)] = inst_30022);

(statearr_30213[(8)] = inst_30021);

(statearr_30213[(9)] = inst_30020);

(statearr_30213[(10)] = inst_30019);

return statearr_30213;
})();
var statearr_30214_30284 = state_30159__$1;
(statearr_30214_30284[(2)] = null);

(statearr_30214_30284[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (23))){
var inst_30078 = (state_30159[(26)]);
var inst_30072 = (state_30159[(19)]);
var inst_30080 = (state_30159[(23)]);
var inst_30076 = (state_30159[(24)]);
var inst_30075 = (state_30159[(25)]);
var inst_30083 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30085 = (function (){var all_files = inst_30072;
var res_SINGLEQUOTE_ = inst_30075;
var res = inst_30076;
var files_not_loaded = inst_30078;
var dependencies_that_loaded = inst_30080;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30078,inst_30072,inst_30080,inst_30076,inst_30075,inst_30083,state_val_30160,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30084){
var map__30215 = p__30084;
var map__30215__$1 = ((((!((map__30215 == null)))?(((((map__30215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30215):map__30215);
var request_url = cljs.core.get.call(null,map__30215__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30078,inst_30072,inst_30080,inst_30076,inst_30075,inst_30083,state_val_30160,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30086 = cljs.core.reverse.call(null,inst_30080);
var inst_30087 = cljs.core.map.call(null,inst_30085,inst_30086);
var inst_30088 = cljs.core.pr_str.call(null,inst_30087);
var inst_30089 = figwheel.client.utils.log.call(null,inst_30088);
var state_30159__$1 = (function (){var statearr_30217 = state_30159;
(statearr_30217[(31)] = inst_30083);

return statearr_30217;
})();
var statearr_30218_30285 = state_30159__$1;
(statearr_30218_30285[(2)] = inst_30089);

(statearr_30218_30285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (35))){
var state_30159__$1 = state_30159;
var statearr_30219_30286 = state_30159__$1;
(statearr_30219_30286[(2)] = true);

(statearr_30219_30286[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (19))){
var inst_30062 = (state_30159[(12)]);
var inst_30068 = figwheel.client.file_reloading.expand_files.call(null,inst_30062);
var state_30159__$1 = state_30159;
var statearr_30220_30287 = state_30159__$1;
(statearr_30220_30287[(2)] = inst_30068);

(statearr_30220_30287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (11))){
var state_30159__$1 = state_30159;
var statearr_30221_30288 = state_30159__$1;
(statearr_30221_30288[(2)] = null);

(statearr_30221_30288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (9))){
var inst_30051 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30222_30289 = state_30159__$1;
(statearr_30222_30289[(2)] = inst_30051);

(statearr_30222_30289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (5))){
var inst_30022 = (state_30159[(7)]);
var inst_30021 = (state_30159[(8)]);
var inst_30024 = (inst_30022 < inst_30021);
var inst_30025 = inst_30024;
var state_30159__$1 = state_30159;
if(cljs.core.truth_(inst_30025)){
var statearr_30223_30290 = state_30159__$1;
(statearr_30223_30290[(1)] = (7));

} else {
var statearr_30224_30291 = state_30159__$1;
(statearr_30224_30291[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (14))){
var inst_30032 = (state_30159[(22)]);
var inst_30041 = cljs.core.first.call(null,inst_30032);
var inst_30042 = figwheel.client.file_reloading.eval_body.call(null,inst_30041,opts);
var inst_30043 = cljs.core.next.call(null,inst_30032);
var inst_30019 = inst_30043;
var inst_30020 = null;
var inst_30021 = (0);
var inst_30022 = (0);
var state_30159__$1 = (function (){var statearr_30225 = state_30159;
(statearr_30225[(7)] = inst_30022);

(statearr_30225[(8)] = inst_30021);

(statearr_30225[(9)] = inst_30020);

(statearr_30225[(10)] = inst_30019);

(statearr_30225[(32)] = inst_30042);

return statearr_30225;
})();
var statearr_30226_30292 = state_30159__$1;
(statearr_30226_30292[(2)] = null);

(statearr_30226_30292[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (45))){
var state_30159__$1 = state_30159;
var statearr_30227_30293 = state_30159__$1;
(statearr_30227_30293[(2)] = null);

(statearr_30227_30293[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (26))){
var inst_30078 = (state_30159[(26)]);
var inst_30072 = (state_30159[(19)]);
var inst_30080 = (state_30159[(23)]);
var inst_30076 = (state_30159[(24)]);
var inst_30075 = (state_30159[(25)]);
var inst_30095 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30097 = (function (){var all_files = inst_30072;
var res_SINGLEQUOTE_ = inst_30075;
var res = inst_30076;
var files_not_loaded = inst_30078;
var dependencies_that_loaded = inst_30080;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30078,inst_30072,inst_30080,inst_30076,inst_30075,inst_30095,state_val_30160,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30096){
var map__30228 = p__30096;
var map__30228__$1 = ((((!((map__30228 == null)))?(((((map__30228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30228):map__30228);
var namespace = cljs.core.get.call(null,map__30228__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30228__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30078,inst_30072,inst_30080,inst_30076,inst_30075,inst_30095,state_val_30160,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30098 = cljs.core.map.call(null,inst_30097,inst_30076);
var inst_30099 = cljs.core.pr_str.call(null,inst_30098);
var inst_30100 = figwheel.client.utils.log.call(null,inst_30099);
var inst_30101 = (function (){var all_files = inst_30072;
var res_SINGLEQUOTE_ = inst_30075;
var res = inst_30076;
var files_not_loaded = inst_30078;
var dependencies_that_loaded = inst_30080;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30078,inst_30072,inst_30080,inst_30076,inst_30075,inst_30095,inst_30097,inst_30098,inst_30099,inst_30100,state_val_30160,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30078,inst_30072,inst_30080,inst_30076,inst_30075,inst_30095,inst_30097,inst_30098,inst_30099,inst_30100,state_val_30160,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30102 = setTimeout(inst_30101,(10));
var state_30159__$1 = (function (){var statearr_30230 = state_30159;
(statearr_30230[(33)] = inst_30095);

(statearr_30230[(34)] = inst_30100);

return statearr_30230;
})();
var statearr_30231_30294 = state_30159__$1;
(statearr_30231_30294[(2)] = inst_30102);

(statearr_30231_30294[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (16))){
var state_30159__$1 = state_30159;
var statearr_30232_30295 = state_30159__$1;
(statearr_30232_30295[(2)] = reload_dependents);

(statearr_30232_30295[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (38))){
var inst_30112 = (state_30159[(16)]);
var inst_30130 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30112);
var state_30159__$1 = state_30159;
var statearr_30233_30296 = state_30159__$1;
(statearr_30233_30296[(2)] = inst_30130);

(statearr_30233_30296[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (30))){
var state_30159__$1 = state_30159;
var statearr_30234_30297 = state_30159__$1;
(statearr_30234_30297[(2)] = null);

(statearr_30234_30297[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (10))){
var inst_30032 = (state_30159[(22)]);
var inst_30034 = cljs.core.chunked_seq_QMARK_.call(null,inst_30032);
var state_30159__$1 = state_30159;
if(inst_30034){
var statearr_30235_30298 = state_30159__$1;
(statearr_30235_30298[(1)] = (13));

} else {
var statearr_30236_30299 = state_30159__$1;
(statearr_30236_30299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (18))){
var inst_30066 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
if(cljs.core.truth_(inst_30066)){
var statearr_30237_30300 = state_30159__$1;
(statearr_30237_30300[(1)] = (19));

} else {
var statearr_30238_30301 = state_30159__$1;
(statearr_30238_30301[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (42))){
var state_30159__$1 = state_30159;
var statearr_30239_30302 = state_30159__$1;
(statearr_30239_30302[(2)] = null);

(statearr_30239_30302[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (37))){
var inst_30125 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30240_30303 = state_30159__$1;
(statearr_30240_30303[(2)] = inst_30125);

(statearr_30240_30303[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (8))){
var inst_30032 = (state_30159[(22)]);
var inst_30019 = (state_30159[(10)]);
var inst_30032__$1 = cljs.core.seq.call(null,inst_30019);
var state_30159__$1 = (function (){var statearr_30241 = state_30159;
(statearr_30241[(22)] = inst_30032__$1);

return statearr_30241;
})();
if(inst_30032__$1){
var statearr_30242_30304 = state_30159__$1;
(statearr_30242_30304[(1)] = (10));

} else {
var statearr_30243_30305 = state_30159__$1;
(statearr_30243_30305[(1)] = (11));

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
});})(c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26573__auto__,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto____0 = (function (){
var statearr_30244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30244[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto__);

(statearr_30244[(1)] = (1));

return statearr_30244;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto____1 = (function (state_30159){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_30159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e30245){if((e30245 instanceof Object)){
var ex__26577__auto__ = e30245;
var statearr_30246_30306 = state_30159;
(statearr_30246_30306[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30307 = state_30159;
state_30159 = G__30307;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto__ = function(state_30159){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto____1.call(this,state_30159);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26665__auto__ = (function (){var statearr_30247 = f__26664__auto__.call(null);
(statearr_30247[(6)] = c__26663__auto__);

return statearr_30247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__,map__30004,map__30004__$1,opts,before_jsload,on_jsload,reload_dependents,map__30005,map__30005__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26663__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30310,link){
var map__30311 = p__30310;
var map__30311__$1 = ((((!((map__30311 == null)))?(((((map__30311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30311):map__30311);
var file = cljs.core.get.call(null,map__30311__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30311,map__30311__$1,file){
return (function (p1__30308_SHARP_,p2__30309_SHARP_){
if(cljs.core._EQ_.call(null,p1__30308_SHARP_,p2__30309_SHARP_)){
return p1__30308_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30311,map__30311__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30314){
var map__30315 = p__30314;
var map__30315__$1 = ((((!((map__30315 == null)))?(((((map__30315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30315):map__30315);
var match_length = cljs.core.get.call(null,map__30315__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30315__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30313_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30313_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30317_SHARP_,p2__30318_SHARP_){
return cljs.core.assoc.call(null,p1__30317_SHARP_,cljs.core.get.call(null,p2__30318_SHARP_,key),p2__30318_SHARP_);
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
var loaded_f_datas_30319 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30319);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30319);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30320,p__30321){
var map__30322 = p__30320;
var map__30322__$1 = ((((!((map__30322 == null)))?(((((map__30322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30322):map__30322);
var on_cssload = cljs.core.get.call(null,map__30322__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30323 = p__30321;
var map__30323__$1 = ((((!((map__30323 == null)))?(((((map__30323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30323):map__30323);
var files_msg = map__30323__$1;
var files = cljs.core.get.call(null,map__30323__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1530621493941
