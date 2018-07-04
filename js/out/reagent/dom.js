// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global.ReactDOM;
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_28950 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_28950){
return (function (){
var _STAR_always_update_STAR_28951 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_28951;
}});})(_STAR_always_update_STAR_28950))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_28950;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__28953 = arguments.length;
switch (G__28953) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__28955_28959 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__28956_28960 = null;
var count__28957_28961 = (0);
var i__28958_28962 = (0);
while(true){
if((i__28958_28962 < count__28957_28961)){
var v_28963 = cljs.core._nth.call(null,chunk__28956_28960,i__28958_28962);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_28963);


var G__28964 = seq__28955_28959;
var G__28965 = chunk__28956_28960;
var G__28966 = count__28957_28961;
var G__28967 = (i__28958_28962 + (1));
seq__28955_28959 = G__28964;
chunk__28956_28960 = G__28965;
count__28957_28961 = G__28966;
i__28958_28962 = G__28967;
continue;
} else {
var temp__5457__auto___28968 = cljs.core.seq.call(null,seq__28955_28959);
if(temp__5457__auto___28968){
var seq__28955_28969__$1 = temp__5457__auto___28968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28955_28969__$1)){
var c__4319__auto___28970 = cljs.core.chunk_first.call(null,seq__28955_28969__$1);
var G__28971 = cljs.core.chunk_rest.call(null,seq__28955_28969__$1);
var G__28972 = c__4319__auto___28970;
var G__28973 = cljs.core.count.call(null,c__4319__auto___28970);
var G__28974 = (0);
seq__28955_28959 = G__28971;
chunk__28956_28960 = G__28972;
count__28957_28961 = G__28973;
i__28958_28962 = G__28974;
continue;
} else {
var v_28975 = cljs.core.first.call(null,seq__28955_28969__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_28975);


var G__28976 = cljs.core.next.call(null,seq__28955_28969__$1);
var G__28977 = null;
var G__28978 = (0);
var G__28979 = (0);
seq__28955_28959 = G__28976;
chunk__28956_28960 = G__28977;
count__28957_28961 = G__28978;
i__28958_28962 = G__28979;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1530742095678
