// Compiled by ClojureScript 1.10.238 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._header[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._header["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._has_body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._body["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22237 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22237["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22238 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22238["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22239 = temp__5455__auto____$2;
return (o22239["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22240 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22240["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22241 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22241["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22242 = temp__5455__auto____$2;
return (o22242["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22243 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22243["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22244 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22244["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22245 = temp__5455__auto____$2;
return (o22245["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22246 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22246["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22247 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22247["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22248 = temp__5455__auto____$2;
return (o22248["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22249 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22249["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22250 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22250["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22251 = temp__5455__auto____$2;
return (o22251["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22252 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22252["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22253 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22253["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22254 = temp__5455__auto____$2;
return (o22254["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22255 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22255["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22256 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22256["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22257 = temp__5455__auto____$2;
return (o22257["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22259 = arguments.length;
var i__4500__auto___22260 = (0);
while(true){
if((i__4500__auto___22260 < len__4499__auto___22259)){
args__4502__auto__.push((arguments[i__4500__auto___22260]));

var G__22261 = (i__4500__auto___22260 + (1));
i__4500__auto___22260 = G__22261;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq22258){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22258));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22263 = arguments.length;
var i__4500__auto___22264 = (0);
while(true){
if((i__4500__auto___22264 < len__4499__auto___22263)){
args__4502__auto__.push((arguments[i__4500__auto___22264]));

var G__22265 = (i__4500__auto___22264 + (1));
i__4500__auto___22264 = G__22265;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq22262){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22262));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22267 = arguments.length;
var i__4500__auto___22268 = (0);
while(true){
if((i__4500__auto___22268 < len__4499__auto___22267)){
args__4502__auto__.push((arguments[i__4500__auto___22268]));

var G__22269 = (i__4500__auto___22268 + (1));
i__4500__auto___22268 = G__22269;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq22266){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22266));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22271 = arguments.length;
var i__4500__auto___22272 = (0);
while(true){
if((i__4500__auto___22272 < len__4499__auto___22271)){
args__4502__auto__.push((arguments[i__4500__auto___22272]));

var G__22273 = (i__4500__auto___22272 + (1));
i__4500__auto___22272 = G__22273;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq22270){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22270));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22275 = arguments.length;
var i__4500__auto___22276 = (0);
while(true){
if((i__4500__auto___22276 < len__4499__auto___22275)){
args__4502__auto__.push((arguments[i__4500__auto___22276]));

var G__22277 = (i__4500__auto___22276 + (1));
i__4500__auto___22276 = G__22277;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq22274){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22274));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22279 = arguments.length;
var i__4500__auto___22280 = (0);
while(true){
if((i__4500__auto___22280 < len__4499__auto___22279)){
args__4502__auto__.push((arguments[i__4500__auto___22280]));

var G__22281 = (i__4500__auto___22280 + (1));
i__4500__auto___22280 = G__22281;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq22278){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22278));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22283 = arguments.length;
var i__4500__auto___22284 = (0);
while(true){
if((i__4500__auto___22284 < len__4499__auto___22283)){
args__4502__auto__.push((arguments[i__4500__auto___22284]));

var G__22285 = (i__4500__auto___22284 + (1));
i__4500__auto___22284 = G__22285;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq22282){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22282));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22293 = arguments.length;
var i__4500__auto___22294 = (0);
while(true){
if((i__4500__auto___22294 < len__4499__auto___22293)){
args__4502__auto__.push((arguments[i__4500__auto___22294]));

var G__22295 = (i__4500__auto___22294 + (1));
i__4500__auto___22294 = G__22295;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__22289){
var vec__22290 = p__22289;
var state_override = cljs.core.nth.call(null,vec__22290,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__22290,state_override){
return (function (p1__22286_SHARP_){
return cljs.core.merge.call(null,p1__22286_SHARP_,state_override);
});})(vec__22290,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq22287){
var G__22288 = cljs.core.first.call(null,seq22287);
var seq22287__$1 = cljs.core.next.call(null,seq22287);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22288,seq22287__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22297 = arguments.length;
var i__4500__auto___22298 = (0);
while(true){
if((i__4500__auto___22298 < len__4499__auto___22297)){
args__4502__auto__.push((arguments[i__4500__auto___22298]));

var G__22299 = (i__4500__auto___22298 + (1));
i__4500__auto___22298 = G__22299;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq22296){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22296));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22302 = arguments.length;
var i__4500__auto___22303 = (0);
while(true){
if((i__4500__auto___22303 < len__4499__auto___22302)){
args__4502__auto__.push((arguments[i__4500__auto___22303]));

var G__22304 = (i__4500__auto___22303 + (1));
i__4500__auto___22303 = G__22304;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq22300){
var G__22301 = cljs.core.first.call(null,seq22300);
var seq22300__$1 = cljs.core.next.call(null,seq22300);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22301,seq22300__$1);
});


//# sourceMappingURL=format.js.map?rel=1530696276141
