// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37252 = arguments.length;
switch (G__37252) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37253 = (function (f,blockable,meta37254){
this.f = f;
this.blockable = blockable;
this.meta37254 = meta37254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37255,meta37254__$1){
var self__ = this;
var _37255__$1 = this;
return (new cljs.core.async.t_cljs$core$async37253(self__.f,self__.blockable,meta37254__$1));
});

cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37255){
var self__ = this;
var _37255__$1 = this;
return self__.meta37254;
});

cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37254","meta37254",-1973060909,null)], null);
});

cljs.core.async.t_cljs$core$async37253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37253";

cljs.core.async.t_cljs$core$async37253.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async37253");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37253.
 */
cljs.core.async.__GT_t_cljs$core$async37253 = (function cljs$core$async$__GT_t_cljs$core$async37253(f__$1,blockable__$1,meta37254){
return (new cljs.core.async.t_cljs$core$async37253(f__$1,blockable__$1,meta37254));
});

}

return (new cljs.core.async.t_cljs$core$async37253(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37259 = arguments.length;
switch (G__37259) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37262 = arguments.length;
switch (G__37262) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37265 = arguments.length;
switch (G__37265) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37267 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37267);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37267,ret){
return (function (){
return fn1.call(null,val_37267);
});})(val_37267,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37269 = arguments.length;
switch (G__37269) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___37271 = n;
var x_37272 = (0);
while(true){
if((x_37272 < n__4376__auto___37271)){
(a[x_37272] = (0));

var G__37273 = (x_37272 + (1));
x_37272 = G__37273;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37274 = (i + (1));
i = G__37274;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37275 = (function (flag,meta37276){
this.flag = flag;
this.meta37276 = meta37276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37277,meta37276__$1){
var self__ = this;
var _37277__$1 = this;
return (new cljs.core.async.t_cljs$core$async37275(self__.flag,meta37276__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37277){
var self__ = this;
var _37277__$1 = this;
return self__.meta37276;
});})(flag))
;

cljs.core.async.t_cljs$core$async37275.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37275.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37275.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37276","meta37276",361358947,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37275";

cljs.core.async.t_cljs$core$async37275.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async37275");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37275.
 */
cljs.core.async.__GT_t_cljs$core$async37275 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37275(flag__$1,meta37276){
return (new cljs.core.async.t_cljs$core$async37275(flag__$1,meta37276));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37275(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37278 = (function (flag,cb,meta37279){
this.flag = flag;
this.cb = cb;
this.meta37279 = meta37279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37280,meta37279__$1){
var self__ = this;
var _37280__$1 = this;
return (new cljs.core.async.t_cljs$core$async37278(self__.flag,self__.cb,meta37279__$1));
});

cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37280){
var self__ = this;
var _37280__$1 = this;
return self__.meta37279;
});

cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37279","meta37279",-1161707565,null)], null);
});

cljs.core.async.t_cljs$core$async37278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37278";

cljs.core.async.t_cljs$core$async37278.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async37278");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37278.
 */
cljs.core.async.__GT_t_cljs$core$async37278 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37278(flag__$1,cb__$1,meta37279){
return (new cljs.core.async.t_cljs$core$async37278(flag__$1,cb__$1,meta37279));
});

}

return (new cljs.core.async.t_cljs$core$async37278(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37281_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37281_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37282_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37282_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37283 = (i + (1));
i = G__37283;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37289 = arguments.length;
var i__4500__auto___37290 = (0);
while(true){
if((i__4500__auto___37290 < len__4499__auto___37289)){
args__4502__auto__.push((arguments[i__4500__auto___37290]));

var G__37291 = (i__4500__auto___37290 + (1));
i__4500__auto___37290 = G__37291;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37286){
var map__37287 = p__37286;
var map__37287__$1 = ((((!((map__37287 == null)))?(((((map__37287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37287):map__37287);
var opts = map__37287__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37284){
var G__37285 = cljs.core.first.call(null,seq37284);
var seq37284__$1 = cljs.core.next.call(null,seq37284);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37285,seq37284__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37293 = arguments.length;
switch (G__37293) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34606__auto___37339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto___37339){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto___37339){
return (function (state_37317){
var state_val_37318 = (state_37317[(1)]);
if((state_val_37318 === (7))){
var inst_37313 = (state_37317[(2)]);
var state_37317__$1 = state_37317;
var statearr_37319_37340 = state_37317__$1;
(statearr_37319_37340[(2)] = inst_37313);

(statearr_37319_37340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37318 === (1))){
var state_37317__$1 = state_37317;
var statearr_37320_37341 = state_37317__$1;
(statearr_37320_37341[(2)] = null);

(statearr_37320_37341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37318 === (4))){
var inst_37296 = (state_37317[(7)]);
var inst_37296__$1 = (state_37317[(2)]);
var inst_37297 = (inst_37296__$1 == null);
var state_37317__$1 = (function (){var statearr_37321 = state_37317;
(statearr_37321[(7)] = inst_37296__$1);

return statearr_37321;
})();
if(cljs.core.truth_(inst_37297)){
var statearr_37322_37342 = state_37317__$1;
(statearr_37322_37342[(1)] = (5));

} else {
var statearr_37323_37343 = state_37317__$1;
(statearr_37323_37343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37318 === (13))){
var state_37317__$1 = state_37317;
var statearr_37324_37344 = state_37317__$1;
(statearr_37324_37344[(2)] = null);

(statearr_37324_37344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37318 === (6))){
var inst_37296 = (state_37317[(7)]);
var state_37317__$1 = state_37317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37317__$1,(11),to,inst_37296);
} else {
if((state_val_37318 === (3))){
var inst_37315 = (state_37317[(2)]);
var state_37317__$1 = state_37317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37317__$1,inst_37315);
} else {
if((state_val_37318 === (12))){
var state_37317__$1 = state_37317;
var statearr_37325_37345 = state_37317__$1;
(statearr_37325_37345[(2)] = null);

(statearr_37325_37345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37318 === (2))){
var state_37317__$1 = state_37317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37317__$1,(4),from);
} else {
if((state_val_37318 === (11))){
var inst_37306 = (state_37317[(2)]);
var state_37317__$1 = state_37317;
if(cljs.core.truth_(inst_37306)){
var statearr_37326_37346 = state_37317__$1;
(statearr_37326_37346[(1)] = (12));

} else {
var statearr_37327_37347 = state_37317__$1;
(statearr_37327_37347[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37318 === (9))){
var state_37317__$1 = state_37317;
var statearr_37328_37348 = state_37317__$1;
(statearr_37328_37348[(2)] = null);

(statearr_37328_37348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37318 === (5))){
var state_37317__$1 = state_37317;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37329_37349 = state_37317__$1;
(statearr_37329_37349[(1)] = (8));

} else {
var statearr_37330_37350 = state_37317__$1;
(statearr_37330_37350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37318 === (14))){
var inst_37311 = (state_37317[(2)]);
var state_37317__$1 = state_37317;
var statearr_37331_37351 = state_37317__$1;
(statearr_37331_37351[(2)] = inst_37311);

(statearr_37331_37351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37318 === (10))){
var inst_37303 = (state_37317[(2)]);
var state_37317__$1 = state_37317;
var statearr_37332_37352 = state_37317__$1;
(statearr_37332_37352[(2)] = inst_37303);

(statearr_37332_37352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37318 === (8))){
var inst_37300 = cljs.core.async.close_BANG_.call(null,to);
var state_37317__$1 = state_37317;
var statearr_37333_37353 = state_37317__$1;
(statearr_37333_37353[(2)] = inst_37300);

(statearr_37333_37353[(1)] = (10));


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
});})(c__34606__auto___37339))
;
return ((function (switch__34589__auto__,c__34606__auto___37339){
return (function() {
var cljs$core$async$state_machine__34590__auto__ = null;
var cljs$core$async$state_machine__34590__auto____0 = (function (){
var statearr_37334 = [null,null,null,null,null,null,null,null];
(statearr_37334[(0)] = cljs$core$async$state_machine__34590__auto__);

(statearr_37334[(1)] = (1));

return statearr_37334;
});
var cljs$core$async$state_machine__34590__auto____1 = (function (state_37317){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_37317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e37335){if((e37335 instanceof Object)){
var ex__34593__auto__ = e37335;
var statearr_37336_37354 = state_37317;
(statearr_37336_37354[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37355 = state_37317;
state_37317 = G__37355;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$state_machine__34590__auto__ = function(state_37317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34590__auto____1.call(this,state_37317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34590__auto____0;
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34590__auto____1;
return cljs$core$async$state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto___37339))
})();
var state__34608__auto__ = (function (){var statearr_37337 = f__34607__auto__.call(null);
(statearr_37337[(6)] = c__34606__auto___37339);

return statearr_37337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto___37339))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37356){
var vec__37357 = p__37356;
var v = cljs.core.nth.call(null,vec__37357,(0),null);
var p = cljs.core.nth.call(null,vec__37357,(1),null);
var job = vec__37357;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34606__auto___37528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto___37528,res,vec__37357,v,p,job,jobs,results){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto___37528,res,vec__37357,v,p,job,jobs,results){
return (function (state_37364){
var state_val_37365 = (state_37364[(1)]);
if((state_val_37365 === (1))){
var state_37364__$1 = state_37364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37364__$1,(2),res,v);
} else {
if((state_val_37365 === (2))){
var inst_37361 = (state_37364[(2)]);
var inst_37362 = cljs.core.async.close_BANG_.call(null,res);
var state_37364__$1 = (function (){var statearr_37366 = state_37364;
(statearr_37366[(7)] = inst_37361);

return statearr_37366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37364__$1,inst_37362);
} else {
return null;
}
}
});})(c__34606__auto___37528,res,vec__37357,v,p,job,jobs,results))
;
return ((function (switch__34589__auto__,c__34606__auto___37528,res,vec__37357,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0 = (function (){
var statearr_37367 = [null,null,null,null,null,null,null,null];
(statearr_37367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__);

(statearr_37367[(1)] = (1));

return statearr_37367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1 = (function (state_37364){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_37364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e37368){if((e37368 instanceof Object)){
var ex__34593__auto__ = e37368;
var statearr_37369_37529 = state_37364;
(statearr_37369_37529[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37530 = state_37364;
state_37364 = G__37530;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__ = function(state_37364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1.call(this,state_37364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto___37528,res,vec__37357,v,p,job,jobs,results))
})();
var state__34608__auto__ = (function (){var statearr_37370 = f__34607__auto__.call(null);
(statearr_37370[(6)] = c__34606__auto___37528);

return statearr_37370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto___37528,res,vec__37357,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37371){
var vec__37372 = p__37371;
var v = cljs.core.nth.call(null,vec__37372,(0),null);
var p = cljs.core.nth.call(null,vec__37372,(1),null);
var job = vec__37372;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___37531 = n;
var __37532 = (0);
while(true){
if((__37532 < n__4376__auto___37531)){
var G__37375_37533 = type;
var G__37375_37534__$1 = (((G__37375_37533 instanceof cljs.core.Keyword))?G__37375_37533.fqn:null);
switch (G__37375_37534__$1) {
case "compute":
var c__34606__auto___37536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37532,c__34606__auto___37536,G__37375_37533,G__37375_37534__$1,n__4376__auto___37531,jobs,results,process,async){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (__37532,c__34606__auto___37536,G__37375_37533,G__37375_37534__$1,n__4376__auto___37531,jobs,results,process,async){
return (function (state_37388){
var state_val_37389 = (state_37388[(1)]);
if((state_val_37389 === (1))){
var state_37388__$1 = state_37388;
var statearr_37390_37537 = state_37388__$1;
(statearr_37390_37537[(2)] = null);

(statearr_37390_37537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37389 === (2))){
var state_37388__$1 = state_37388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37388__$1,(4),jobs);
} else {
if((state_val_37389 === (3))){
var inst_37386 = (state_37388[(2)]);
var state_37388__$1 = state_37388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37388__$1,inst_37386);
} else {
if((state_val_37389 === (4))){
var inst_37378 = (state_37388[(2)]);
var inst_37379 = process.call(null,inst_37378);
var state_37388__$1 = state_37388;
if(cljs.core.truth_(inst_37379)){
var statearr_37391_37538 = state_37388__$1;
(statearr_37391_37538[(1)] = (5));

} else {
var statearr_37392_37539 = state_37388__$1;
(statearr_37392_37539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37389 === (5))){
var state_37388__$1 = state_37388;
var statearr_37393_37540 = state_37388__$1;
(statearr_37393_37540[(2)] = null);

(statearr_37393_37540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37389 === (6))){
var state_37388__$1 = state_37388;
var statearr_37394_37541 = state_37388__$1;
(statearr_37394_37541[(2)] = null);

(statearr_37394_37541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37389 === (7))){
var inst_37384 = (state_37388[(2)]);
var state_37388__$1 = state_37388;
var statearr_37395_37542 = state_37388__$1;
(statearr_37395_37542[(2)] = inst_37384);

(statearr_37395_37542[(1)] = (3));


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
});})(__37532,c__34606__auto___37536,G__37375_37533,G__37375_37534__$1,n__4376__auto___37531,jobs,results,process,async))
;
return ((function (__37532,switch__34589__auto__,c__34606__auto___37536,G__37375_37533,G__37375_37534__$1,n__4376__auto___37531,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0 = (function (){
var statearr_37396 = [null,null,null,null,null,null,null];
(statearr_37396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__);

(statearr_37396[(1)] = (1));

return statearr_37396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1 = (function (state_37388){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_37388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e37397){if((e37397 instanceof Object)){
var ex__34593__auto__ = e37397;
var statearr_37398_37543 = state_37388;
(statearr_37398_37543[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37544 = state_37388;
state_37388 = G__37544;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__ = function(state_37388){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1.call(this,state_37388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__;
})()
;})(__37532,switch__34589__auto__,c__34606__auto___37536,G__37375_37533,G__37375_37534__$1,n__4376__auto___37531,jobs,results,process,async))
})();
var state__34608__auto__ = (function (){var statearr_37399 = f__34607__auto__.call(null);
(statearr_37399[(6)] = c__34606__auto___37536);

return statearr_37399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(__37532,c__34606__auto___37536,G__37375_37533,G__37375_37534__$1,n__4376__auto___37531,jobs,results,process,async))
);


break;
case "async":
var c__34606__auto___37545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37532,c__34606__auto___37545,G__37375_37533,G__37375_37534__$1,n__4376__auto___37531,jobs,results,process,async){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (__37532,c__34606__auto___37545,G__37375_37533,G__37375_37534__$1,n__4376__auto___37531,jobs,results,process,async){
return (function (state_37412){
var state_val_37413 = (state_37412[(1)]);
if((state_val_37413 === (1))){
var state_37412__$1 = state_37412;
var statearr_37414_37546 = state_37412__$1;
(statearr_37414_37546[(2)] = null);

(statearr_37414_37546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37413 === (2))){
var state_37412__$1 = state_37412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37412__$1,(4),jobs);
} else {
if((state_val_37413 === (3))){
var inst_37410 = (state_37412[(2)]);
var state_37412__$1 = state_37412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37412__$1,inst_37410);
} else {
if((state_val_37413 === (4))){
var inst_37402 = (state_37412[(2)]);
var inst_37403 = async.call(null,inst_37402);
var state_37412__$1 = state_37412;
if(cljs.core.truth_(inst_37403)){
var statearr_37415_37547 = state_37412__$1;
(statearr_37415_37547[(1)] = (5));

} else {
var statearr_37416_37548 = state_37412__$1;
(statearr_37416_37548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37413 === (5))){
var state_37412__$1 = state_37412;
var statearr_37417_37549 = state_37412__$1;
(statearr_37417_37549[(2)] = null);

(statearr_37417_37549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37413 === (6))){
var state_37412__$1 = state_37412;
var statearr_37418_37550 = state_37412__$1;
(statearr_37418_37550[(2)] = null);

(statearr_37418_37550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37413 === (7))){
var inst_37408 = (state_37412[(2)]);
var state_37412__$1 = state_37412;
var statearr_37419_37551 = state_37412__$1;
(statearr_37419_37551[(2)] = inst_37408);

(statearr_37419_37551[(1)] = (3));


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
});})(__37532,c__34606__auto___37545,G__37375_37533,G__37375_37534__$1,n__4376__auto___37531,jobs,results,process,async))
;
return ((function (__37532,switch__34589__auto__,c__34606__auto___37545,G__37375_37533,G__37375_37534__$1,n__4376__auto___37531,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0 = (function (){
var statearr_37420 = [null,null,null,null,null,null,null];
(statearr_37420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__);

(statearr_37420[(1)] = (1));

return statearr_37420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1 = (function (state_37412){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_37412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e37421){if((e37421 instanceof Object)){
var ex__34593__auto__ = e37421;
var statearr_37422_37552 = state_37412;
(statearr_37422_37552[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37553 = state_37412;
state_37412 = G__37553;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__ = function(state_37412){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1.call(this,state_37412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__;
})()
;})(__37532,switch__34589__auto__,c__34606__auto___37545,G__37375_37533,G__37375_37534__$1,n__4376__auto___37531,jobs,results,process,async))
})();
var state__34608__auto__ = (function (){var statearr_37423 = f__34607__auto__.call(null);
(statearr_37423[(6)] = c__34606__auto___37545);

return statearr_37423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(__37532,c__34606__auto___37545,G__37375_37533,G__37375_37534__$1,n__4376__auto___37531,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37375_37534__$1)].join('')));

}

var G__37554 = (__37532 + (1));
__37532 = G__37554;
continue;
} else {
}
break;
}

var c__34606__auto___37555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto___37555,jobs,results,process,async){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto___37555,jobs,results,process,async){
return (function (state_37445){
var state_val_37446 = (state_37445[(1)]);
if((state_val_37446 === (1))){
var state_37445__$1 = state_37445;
var statearr_37447_37556 = state_37445__$1;
(statearr_37447_37556[(2)] = null);

(statearr_37447_37556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (2))){
var state_37445__$1 = state_37445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37445__$1,(4),from);
} else {
if((state_val_37446 === (3))){
var inst_37443 = (state_37445[(2)]);
var state_37445__$1 = state_37445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37445__$1,inst_37443);
} else {
if((state_val_37446 === (4))){
var inst_37426 = (state_37445[(7)]);
var inst_37426__$1 = (state_37445[(2)]);
var inst_37427 = (inst_37426__$1 == null);
var state_37445__$1 = (function (){var statearr_37448 = state_37445;
(statearr_37448[(7)] = inst_37426__$1);

return statearr_37448;
})();
if(cljs.core.truth_(inst_37427)){
var statearr_37449_37557 = state_37445__$1;
(statearr_37449_37557[(1)] = (5));

} else {
var statearr_37450_37558 = state_37445__$1;
(statearr_37450_37558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (5))){
var inst_37429 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37445__$1 = state_37445;
var statearr_37451_37559 = state_37445__$1;
(statearr_37451_37559[(2)] = inst_37429);

(statearr_37451_37559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (6))){
var inst_37431 = (state_37445[(8)]);
var inst_37426 = (state_37445[(7)]);
var inst_37431__$1 = cljs.core.async.chan.call(null,(1));
var inst_37432 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37433 = [inst_37426,inst_37431__$1];
var inst_37434 = (new cljs.core.PersistentVector(null,2,(5),inst_37432,inst_37433,null));
var state_37445__$1 = (function (){var statearr_37452 = state_37445;
(statearr_37452[(8)] = inst_37431__$1);

return statearr_37452;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37445__$1,(8),jobs,inst_37434);
} else {
if((state_val_37446 === (7))){
var inst_37441 = (state_37445[(2)]);
var state_37445__$1 = state_37445;
var statearr_37453_37560 = state_37445__$1;
(statearr_37453_37560[(2)] = inst_37441);

(statearr_37453_37560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37446 === (8))){
var inst_37431 = (state_37445[(8)]);
var inst_37436 = (state_37445[(2)]);
var state_37445__$1 = (function (){var statearr_37454 = state_37445;
(statearr_37454[(9)] = inst_37436);

return statearr_37454;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37445__$1,(9),results,inst_37431);
} else {
if((state_val_37446 === (9))){
var inst_37438 = (state_37445[(2)]);
var state_37445__$1 = (function (){var statearr_37455 = state_37445;
(statearr_37455[(10)] = inst_37438);

return statearr_37455;
})();
var statearr_37456_37561 = state_37445__$1;
(statearr_37456_37561[(2)] = null);

(statearr_37456_37561[(1)] = (2));


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
});})(c__34606__auto___37555,jobs,results,process,async))
;
return ((function (switch__34589__auto__,c__34606__auto___37555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0 = (function (){
var statearr_37457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37457[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__);

(statearr_37457[(1)] = (1));

return statearr_37457;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1 = (function (state_37445){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_37445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e37458){if((e37458 instanceof Object)){
var ex__34593__auto__ = e37458;
var statearr_37459_37562 = state_37445;
(statearr_37459_37562[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37563 = state_37445;
state_37445 = G__37563;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__ = function(state_37445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1.call(this,state_37445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto___37555,jobs,results,process,async))
})();
var state__34608__auto__ = (function (){var statearr_37460 = f__34607__auto__.call(null);
(statearr_37460[(6)] = c__34606__auto___37555);

return statearr_37460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto___37555,jobs,results,process,async))
);


var c__34606__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto__,jobs,results,process,async){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto__,jobs,results,process,async){
return (function (state_37498){
var state_val_37499 = (state_37498[(1)]);
if((state_val_37499 === (7))){
var inst_37494 = (state_37498[(2)]);
var state_37498__$1 = state_37498;
var statearr_37500_37564 = state_37498__$1;
(statearr_37500_37564[(2)] = inst_37494);

(statearr_37500_37564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (20))){
var state_37498__$1 = state_37498;
var statearr_37501_37565 = state_37498__$1;
(statearr_37501_37565[(2)] = null);

(statearr_37501_37565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (1))){
var state_37498__$1 = state_37498;
var statearr_37502_37566 = state_37498__$1;
(statearr_37502_37566[(2)] = null);

(statearr_37502_37566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (4))){
var inst_37463 = (state_37498[(7)]);
var inst_37463__$1 = (state_37498[(2)]);
var inst_37464 = (inst_37463__$1 == null);
var state_37498__$1 = (function (){var statearr_37503 = state_37498;
(statearr_37503[(7)] = inst_37463__$1);

return statearr_37503;
})();
if(cljs.core.truth_(inst_37464)){
var statearr_37504_37567 = state_37498__$1;
(statearr_37504_37567[(1)] = (5));

} else {
var statearr_37505_37568 = state_37498__$1;
(statearr_37505_37568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (15))){
var inst_37476 = (state_37498[(8)]);
var state_37498__$1 = state_37498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37498__$1,(18),to,inst_37476);
} else {
if((state_val_37499 === (21))){
var inst_37489 = (state_37498[(2)]);
var state_37498__$1 = state_37498;
var statearr_37506_37569 = state_37498__$1;
(statearr_37506_37569[(2)] = inst_37489);

(statearr_37506_37569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (13))){
var inst_37491 = (state_37498[(2)]);
var state_37498__$1 = (function (){var statearr_37507 = state_37498;
(statearr_37507[(9)] = inst_37491);

return statearr_37507;
})();
var statearr_37508_37570 = state_37498__$1;
(statearr_37508_37570[(2)] = null);

(statearr_37508_37570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (6))){
var inst_37463 = (state_37498[(7)]);
var state_37498__$1 = state_37498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37498__$1,(11),inst_37463);
} else {
if((state_val_37499 === (17))){
var inst_37484 = (state_37498[(2)]);
var state_37498__$1 = state_37498;
if(cljs.core.truth_(inst_37484)){
var statearr_37509_37571 = state_37498__$1;
(statearr_37509_37571[(1)] = (19));

} else {
var statearr_37510_37572 = state_37498__$1;
(statearr_37510_37572[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (3))){
var inst_37496 = (state_37498[(2)]);
var state_37498__$1 = state_37498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37498__$1,inst_37496);
} else {
if((state_val_37499 === (12))){
var inst_37473 = (state_37498[(10)]);
var state_37498__$1 = state_37498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37498__$1,(14),inst_37473);
} else {
if((state_val_37499 === (2))){
var state_37498__$1 = state_37498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37498__$1,(4),results);
} else {
if((state_val_37499 === (19))){
var state_37498__$1 = state_37498;
var statearr_37511_37573 = state_37498__$1;
(statearr_37511_37573[(2)] = null);

(statearr_37511_37573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (11))){
var inst_37473 = (state_37498[(2)]);
var state_37498__$1 = (function (){var statearr_37512 = state_37498;
(statearr_37512[(10)] = inst_37473);

return statearr_37512;
})();
var statearr_37513_37574 = state_37498__$1;
(statearr_37513_37574[(2)] = null);

(statearr_37513_37574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (9))){
var state_37498__$1 = state_37498;
var statearr_37514_37575 = state_37498__$1;
(statearr_37514_37575[(2)] = null);

(statearr_37514_37575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (5))){
var state_37498__$1 = state_37498;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37515_37576 = state_37498__$1;
(statearr_37515_37576[(1)] = (8));

} else {
var statearr_37516_37577 = state_37498__$1;
(statearr_37516_37577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (14))){
var inst_37476 = (state_37498[(8)]);
var inst_37478 = (state_37498[(11)]);
var inst_37476__$1 = (state_37498[(2)]);
var inst_37477 = (inst_37476__$1 == null);
var inst_37478__$1 = cljs.core.not.call(null,inst_37477);
var state_37498__$1 = (function (){var statearr_37517 = state_37498;
(statearr_37517[(8)] = inst_37476__$1);

(statearr_37517[(11)] = inst_37478__$1);

return statearr_37517;
})();
if(inst_37478__$1){
var statearr_37518_37578 = state_37498__$1;
(statearr_37518_37578[(1)] = (15));

} else {
var statearr_37519_37579 = state_37498__$1;
(statearr_37519_37579[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (16))){
var inst_37478 = (state_37498[(11)]);
var state_37498__$1 = state_37498;
var statearr_37520_37580 = state_37498__$1;
(statearr_37520_37580[(2)] = inst_37478);

(statearr_37520_37580[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (10))){
var inst_37470 = (state_37498[(2)]);
var state_37498__$1 = state_37498;
var statearr_37521_37581 = state_37498__$1;
(statearr_37521_37581[(2)] = inst_37470);

(statearr_37521_37581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (18))){
var inst_37481 = (state_37498[(2)]);
var state_37498__$1 = state_37498;
var statearr_37522_37582 = state_37498__$1;
(statearr_37522_37582[(2)] = inst_37481);

(statearr_37522_37582[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37499 === (8))){
var inst_37467 = cljs.core.async.close_BANG_.call(null,to);
var state_37498__$1 = state_37498;
var statearr_37523_37583 = state_37498__$1;
(statearr_37523_37583[(2)] = inst_37467);

(statearr_37523_37583[(1)] = (10));


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
});})(c__34606__auto__,jobs,results,process,async))
;
return ((function (switch__34589__auto__,c__34606__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0 = (function (){
var statearr_37524 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__);

(statearr_37524[(1)] = (1));

return statearr_37524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1 = (function (state_37498){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_37498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e37525){if((e37525 instanceof Object)){
var ex__34593__auto__ = e37525;
var statearr_37526_37584 = state_37498;
(statearr_37526_37584[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37585 = state_37498;
state_37498 = G__37585;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__ = function(state_37498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1.call(this,state_37498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto__,jobs,results,process,async))
})();
var state__34608__auto__ = (function (){var statearr_37527 = f__34607__auto__.call(null);
(statearr_37527[(6)] = c__34606__auto__);

return statearr_37527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto__,jobs,results,process,async))
);

return c__34606__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37587 = arguments.length;
switch (G__37587) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__37590 = arguments.length;
switch (G__37590) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__37593 = arguments.length;
switch (G__37593) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34606__auto___37642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto___37642,tc,fc){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto___37642,tc,fc){
return (function (state_37619){
var state_val_37620 = (state_37619[(1)]);
if((state_val_37620 === (7))){
var inst_37615 = (state_37619[(2)]);
var state_37619__$1 = state_37619;
var statearr_37621_37643 = state_37619__$1;
(statearr_37621_37643[(2)] = inst_37615);

(statearr_37621_37643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (1))){
var state_37619__$1 = state_37619;
var statearr_37622_37644 = state_37619__$1;
(statearr_37622_37644[(2)] = null);

(statearr_37622_37644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (4))){
var inst_37596 = (state_37619[(7)]);
var inst_37596__$1 = (state_37619[(2)]);
var inst_37597 = (inst_37596__$1 == null);
var state_37619__$1 = (function (){var statearr_37623 = state_37619;
(statearr_37623[(7)] = inst_37596__$1);

return statearr_37623;
})();
if(cljs.core.truth_(inst_37597)){
var statearr_37624_37645 = state_37619__$1;
(statearr_37624_37645[(1)] = (5));

} else {
var statearr_37625_37646 = state_37619__$1;
(statearr_37625_37646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (13))){
var state_37619__$1 = state_37619;
var statearr_37626_37647 = state_37619__$1;
(statearr_37626_37647[(2)] = null);

(statearr_37626_37647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (6))){
var inst_37596 = (state_37619[(7)]);
var inst_37602 = p.call(null,inst_37596);
var state_37619__$1 = state_37619;
if(cljs.core.truth_(inst_37602)){
var statearr_37627_37648 = state_37619__$1;
(statearr_37627_37648[(1)] = (9));

} else {
var statearr_37628_37649 = state_37619__$1;
(statearr_37628_37649[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (3))){
var inst_37617 = (state_37619[(2)]);
var state_37619__$1 = state_37619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37619__$1,inst_37617);
} else {
if((state_val_37620 === (12))){
var state_37619__$1 = state_37619;
var statearr_37629_37650 = state_37619__$1;
(statearr_37629_37650[(2)] = null);

(statearr_37629_37650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (2))){
var state_37619__$1 = state_37619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37619__$1,(4),ch);
} else {
if((state_val_37620 === (11))){
var inst_37596 = (state_37619[(7)]);
var inst_37606 = (state_37619[(2)]);
var state_37619__$1 = state_37619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37619__$1,(8),inst_37606,inst_37596);
} else {
if((state_val_37620 === (9))){
var state_37619__$1 = state_37619;
var statearr_37630_37651 = state_37619__$1;
(statearr_37630_37651[(2)] = tc);

(statearr_37630_37651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (5))){
var inst_37599 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37600 = cljs.core.async.close_BANG_.call(null,fc);
var state_37619__$1 = (function (){var statearr_37631 = state_37619;
(statearr_37631[(8)] = inst_37599);

return statearr_37631;
})();
var statearr_37632_37652 = state_37619__$1;
(statearr_37632_37652[(2)] = inst_37600);

(statearr_37632_37652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (14))){
var inst_37613 = (state_37619[(2)]);
var state_37619__$1 = state_37619;
var statearr_37633_37653 = state_37619__$1;
(statearr_37633_37653[(2)] = inst_37613);

(statearr_37633_37653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (10))){
var state_37619__$1 = state_37619;
var statearr_37634_37654 = state_37619__$1;
(statearr_37634_37654[(2)] = fc);

(statearr_37634_37654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37620 === (8))){
var inst_37608 = (state_37619[(2)]);
var state_37619__$1 = state_37619;
if(cljs.core.truth_(inst_37608)){
var statearr_37635_37655 = state_37619__$1;
(statearr_37635_37655[(1)] = (12));

} else {
var statearr_37636_37656 = state_37619__$1;
(statearr_37636_37656[(1)] = (13));

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
});})(c__34606__auto___37642,tc,fc))
;
return ((function (switch__34589__auto__,c__34606__auto___37642,tc,fc){
return (function() {
var cljs$core$async$state_machine__34590__auto__ = null;
var cljs$core$async$state_machine__34590__auto____0 = (function (){
var statearr_37637 = [null,null,null,null,null,null,null,null,null];
(statearr_37637[(0)] = cljs$core$async$state_machine__34590__auto__);

(statearr_37637[(1)] = (1));

return statearr_37637;
});
var cljs$core$async$state_machine__34590__auto____1 = (function (state_37619){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_37619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e37638){if((e37638 instanceof Object)){
var ex__34593__auto__ = e37638;
var statearr_37639_37657 = state_37619;
(statearr_37639_37657[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37658 = state_37619;
state_37619 = G__37658;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$state_machine__34590__auto__ = function(state_37619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34590__auto____1.call(this,state_37619);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34590__auto____0;
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34590__auto____1;
return cljs$core$async$state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto___37642,tc,fc))
})();
var state__34608__auto__ = (function (){var statearr_37640 = f__34607__auto__.call(null);
(statearr_37640[(6)] = c__34606__auto___37642);

return statearr_37640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto___37642,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34606__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto__){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto__){
return (function (state_37679){
var state_val_37680 = (state_37679[(1)]);
if((state_val_37680 === (7))){
var inst_37675 = (state_37679[(2)]);
var state_37679__$1 = state_37679;
var statearr_37681_37699 = state_37679__$1;
(statearr_37681_37699[(2)] = inst_37675);

(statearr_37681_37699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37680 === (1))){
var inst_37659 = init;
var state_37679__$1 = (function (){var statearr_37682 = state_37679;
(statearr_37682[(7)] = inst_37659);

return statearr_37682;
})();
var statearr_37683_37700 = state_37679__$1;
(statearr_37683_37700[(2)] = null);

(statearr_37683_37700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37680 === (4))){
var inst_37662 = (state_37679[(8)]);
var inst_37662__$1 = (state_37679[(2)]);
var inst_37663 = (inst_37662__$1 == null);
var state_37679__$1 = (function (){var statearr_37684 = state_37679;
(statearr_37684[(8)] = inst_37662__$1);

return statearr_37684;
})();
if(cljs.core.truth_(inst_37663)){
var statearr_37685_37701 = state_37679__$1;
(statearr_37685_37701[(1)] = (5));

} else {
var statearr_37686_37702 = state_37679__$1;
(statearr_37686_37702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37680 === (6))){
var inst_37659 = (state_37679[(7)]);
var inst_37662 = (state_37679[(8)]);
var inst_37666 = (state_37679[(9)]);
var inst_37666__$1 = f.call(null,inst_37659,inst_37662);
var inst_37667 = cljs.core.reduced_QMARK_.call(null,inst_37666__$1);
var state_37679__$1 = (function (){var statearr_37687 = state_37679;
(statearr_37687[(9)] = inst_37666__$1);

return statearr_37687;
})();
if(inst_37667){
var statearr_37688_37703 = state_37679__$1;
(statearr_37688_37703[(1)] = (8));

} else {
var statearr_37689_37704 = state_37679__$1;
(statearr_37689_37704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37680 === (3))){
var inst_37677 = (state_37679[(2)]);
var state_37679__$1 = state_37679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37679__$1,inst_37677);
} else {
if((state_val_37680 === (2))){
var state_37679__$1 = state_37679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37679__$1,(4),ch);
} else {
if((state_val_37680 === (9))){
var inst_37666 = (state_37679[(9)]);
var inst_37659 = inst_37666;
var state_37679__$1 = (function (){var statearr_37690 = state_37679;
(statearr_37690[(7)] = inst_37659);

return statearr_37690;
})();
var statearr_37691_37705 = state_37679__$1;
(statearr_37691_37705[(2)] = null);

(statearr_37691_37705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37680 === (5))){
var inst_37659 = (state_37679[(7)]);
var state_37679__$1 = state_37679;
var statearr_37692_37706 = state_37679__$1;
(statearr_37692_37706[(2)] = inst_37659);

(statearr_37692_37706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37680 === (10))){
var inst_37673 = (state_37679[(2)]);
var state_37679__$1 = state_37679;
var statearr_37693_37707 = state_37679__$1;
(statearr_37693_37707[(2)] = inst_37673);

(statearr_37693_37707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37680 === (8))){
var inst_37666 = (state_37679[(9)]);
var inst_37669 = cljs.core.deref.call(null,inst_37666);
var state_37679__$1 = state_37679;
var statearr_37694_37708 = state_37679__$1;
(statearr_37694_37708[(2)] = inst_37669);

(statearr_37694_37708[(1)] = (10));


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
});})(c__34606__auto__))
;
return ((function (switch__34589__auto__,c__34606__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34590__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34590__auto____0 = (function (){
var statearr_37695 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37695[(0)] = cljs$core$async$reduce_$_state_machine__34590__auto__);

(statearr_37695[(1)] = (1));

return statearr_37695;
});
var cljs$core$async$reduce_$_state_machine__34590__auto____1 = (function (state_37679){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_37679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e37696){if((e37696 instanceof Object)){
var ex__34593__auto__ = e37696;
var statearr_37697_37709 = state_37679;
(statearr_37697_37709[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37710 = state_37679;
state_37679 = G__37710;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34590__auto__ = function(state_37679){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34590__auto____1.call(this,state_37679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34590__auto____0;
cljs$core$async$reduce_$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34590__auto____1;
return cljs$core$async$reduce_$_state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto__))
})();
var state__34608__auto__ = (function (){var statearr_37698 = f__34607__auto__.call(null);
(statearr_37698[(6)] = c__34606__auto__);

return statearr_37698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto__))
);

return c__34606__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34606__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto__,f__$1){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto__,f__$1){
return (function (state_37716){
var state_val_37717 = (state_37716[(1)]);
if((state_val_37717 === (1))){
var inst_37711 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_37716__$1 = state_37716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37716__$1,(2),inst_37711);
} else {
if((state_val_37717 === (2))){
var inst_37713 = (state_37716[(2)]);
var inst_37714 = f__$1.call(null,inst_37713);
var state_37716__$1 = state_37716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37716__$1,inst_37714);
} else {
return null;
}
}
});})(c__34606__auto__,f__$1))
;
return ((function (switch__34589__auto__,c__34606__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34590__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34590__auto____0 = (function (){
var statearr_37718 = [null,null,null,null,null,null,null];
(statearr_37718[(0)] = cljs$core$async$transduce_$_state_machine__34590__auto__);

(statearr_37718[(1)] = (1));

return statearr_37718;
});
var cljs$core$async$transduce_$_state_machine__34590__auto____1 = (function (state_37716){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_37716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e37719){if((e37719 instanceof Object)){
var ex__34593__auto__ = e37719;
var statearr_37720_37722 = state_37716;
(statearr_37720_37722[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37723 = state_37716;
state_37716 = G__37723;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34590__auto__ = function(state_37716){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34590__auto____1.call(this,state_37716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34590__auto____0;
cljs$core$async$transduce_$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34590__auto____1;
return cljs$core$async$transduce_$_state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto__,f__$1))
})();
var state__34608__auto__ = (function (){var statearr_37721 = f__34607__auto__.call(null);
(statearr_37721[(6)] = c__34606__auto__);

return statearr_37721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto__,f__$1))
);

return c__34606__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37725 = arguments.length;
switch (G__37725) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34606__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto__){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto__){
return (function (state_37750){
var state_val_37751 = (state_37750[(1)]);
if((state_val_37751 === (7))){
var inst_37732 = (state_37750[(2)]);
var state_37750__$1 = state_37750;
var statearr_37752_37773 = state_37750__$1;
(statearr_37752_37773[(2)] = inst_37732);

(statearr_37752_37773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37751 === (1))){
var inst_37726 = cljs.core.seq.call(null,coll);
var inst_37727 = inst_37726;
var state_37750__$1 = (function (){var statearr_37753 = state_37750;
(statearr_37753[(7)] = inst_37727);

return statearr_37753;
})();
var statearr_37754_37774 = state_37750__$1;
(statearr_37754_37774[(2)] = null);

(statearr_37754_37774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37751 === (4))){
var inst_37727 = (state_37750[(7)]);
var inst_37730 = cljs.core.first.call(null,inst_37727);
var state_37750__$1 = state_37750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37750__$1,(7),ch,inst_37730);
} else {
if((state_val_37751 === (13))){
var inst_37744 = (state_37750[(2)]);
var state_37750__$1 = state_37750;
var statearr_37755_37775 = state_37750__$1;
(statearr_37755_37775[(2)] = inst_37744);

(statearr_37755_37775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37751 === (6))){
var inst_37735 = (state_37750[(2)]);
var state_37750__$1 = state_37750;
if(cljs.core.truth_(inst_37735)){
var statearr_37756_37776 = state_37750__$1;
(statearr_37756_37776[(1)] = (8));

} else {
var statearr_37757_37777 = state_37750__$1;
(statearr_37757_37777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37751 === (3))){
var inst_37748 = (state_37750[(2)]);
var state_37750__$1 = state_37750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37750__$1,inst_37748);
} else {
if((state_val_37751 === (12))){
var state_37750__$1 = state_37750;
var statearr_37758_37778 = state_37750__$1;
(statearr_37758_37778[(2)] = null);

(statearr_37758_37778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37751 === (2))){
var inst_37727 = (state_37750[(7)]);
var state_37750__$1 = state_37750;
if(cljs.core.truth_(inst_37727)){
var statearr_37759_37779 = state_37750__$1;
(statearr_37759_37779[(1)] = (4));

} else {
var statearr_37760_37780 = state_37750__$1;
(statearr_37760_37780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37751 === (11))){
var inst_37741 = cljs.core.async.close_BANG_.call(null,ch);
var state_37750__$1 = state_37750;
var statearr_37761_37781 = state_37750__$1;
(statearr_37761_37781[(2)] = inst_37741);

(statearr_37761_37781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37751 === (9))){
var state_37750__$1 = state_37750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37762_37782 = state_37750__$1;
(statearr_37762_37782[(1)] = (11));

} else {
var statearr_37763_37783 = state_37750__$1;
(statearr_37763_37783[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37751 === (5))){
var inst_37727 = (state_37750[(7)]);
var state_37750__$1 = state_37750;
var statearr_37764_37784 = state_37750__$1;
(statearr_37764_37784[(2)] = inst_37727);

(statearr_37764_37784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37751 === (10))){
var inst_37746 = (state_37750[(2)]);
var state_37750__$1 = state_37750;
var statearr_37765_37785 = state_37750__$1;
(statearr_37765_37785[(2)] = inst_37746);

(statearr_37765_37785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37751 === (8))){
var inst_37727 = (state_37750[(7)]);
var inst_37737 = cljs.core.next.call(null,inst_37727);
var inst_37727__$1 = inst_37737;
var state_37750__$1 = (function (){var statearr_37766 = state_37750;
(statearr_37766[(7)] = inst_37727__$1);

return statearr_37766;
})();
var statearr_37767_37786 = state_37750__$1;
(statearr_37767_37786[(2)] = null);

(statearr_37767_37786[(1)] = (2));


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
});})(c__34606__auto__))
;
return ((function (switch__34589__auto__,c__34606__auto__){
return (function() {
var cljs$core$async$state_machine__34590__auto__ = null;
var cljs$core$async$state_machine__34590__auto____0 = (function (){
var statearr_37768 = [null,null,null,null,null,null,null,null];
(statearr_37768[(0)] = cljs$core$async$state_machine__34590__auto__);

(statearr_37768[(1)] = (1));

return statearr_37768;
});
var cljs$core$async$state_machine__34590__auto____1 = (function (state_37750){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_37750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e37769){if((e37769 instanceof Object)){
var ex__34593__auto__ = e37769;
var statearr_37770_37787 = state_37750;
(statearr_37770_37787[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37788 = state_37750;
state_37750 = G__37788;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$state_machine__34590__auto__ = function(state_37750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34590__auto____1.call(this,state_37750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34590__auto____0;
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34590__auto____1;
return cljs$core$async$state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto__))
})();
var state__34608__auto__ = (function (){var statearr_37771 = f__34607__auto__.call(null);
(statearr_37771[(6)] = c__34606__auto__);

return statearr_37771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto__))
);

return c__34606__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async37789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37789 = (function (ch,cs,meta37790){
this.ch = ch;
this.cs = cs;
this.meta37790 = meta37790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37791,meta37790__$1){
var self__ = this;
var _37791__$1 = this;
return (new cljs.core.async.t_cljs$core$async37789(self__.ch,self__.cs,meta37790__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37791){
var self__ = this;
var _37791__$1 = this;
return self__.meta37790;
});})(cs))
;

cljs.core.async.t_cljs$core$async37789.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37789.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37789.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37789.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37789.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37789.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37790","meta37790",-624135706,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37789";

cljs.core.async.t_cljs$core$async37789.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async37789");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37789.
 */
cljs.core.async.__GT_t_cljs$core$async37789 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37789(ch__$1,cs__$1,meta37790){
return (new cljs.core.async.t_cljs$core$async37789(ch__$1,cs__$1,meta37790));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37789(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34606__auto___38011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto___38011,cs,m,dchan,dctr,done){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto___38011,cs,m,dchan,dctr,done){
return (function (state_37926){
var state_val_37927 = (state_37926[(1)]);
if((state_val_37927 === (7))){
var inst_37922 = (state_37926[(2)]);
var state_37926__$1 = state_37926;
var statearr_37928_38012 = state_37926__$1;
(statearr_37928_38012[(2)] = inst_37922);

(statearr_37928_38012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (20))){
var inst_37825 = (state_37926[(7)]);
var inst_37837 = cljs.core.first.call(null,inst_37825);
var inst_37838 = cljs.core.nth.call(null,inst_37837,(0),null);
var inst_37839 = cljs.core.nth.call(null,inst_37837,(1),null);
var state_37926__$1 = (function (){var statearr_37929 = state_37926;
(statearr_37929[(8)] = inst_37838);

return statearr_37929;
})();
if(cljs.core.truth_(inst_37839)){
var statearr_37930_38013 = state_37926__$1;
(statearr_37930_38013[(1)] = (22));

} else {
var statearr_37931_38014 = state_37926__$1;
(statearr_37931_38014[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (27))){
var inst_37869 = (state_37926[(9)]);
var inst_37874 = (state_37926[(10)]);
var inst_37867 = (state_37926[(11)]);
var inst_37794 = (state_37926[(12)]);
var inst_37874__$1 = cljs.core._nth.call(null,inst_37867,inst_37869);
var inst_37875 = cljs.core.async.put_BANG_.call(null,inst_37874__$1,inst_37794,done);
var state_37926__$1 = (function (){var statearr_37932 = state_37926;
(statearr_37932[(10)] = inst_37874__$1);

return statearr_37932;
})();
if(cljs.core.truth_(inst_37875)){
var statearr_37933_38015 = state_37926__$1;
(statearr_37933_38015[(1)] = (30));

} else {
var statearr_37934_38016 = state_37926__$1;
(statearr_37934_38016[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (1))){
var state_37926__$1 = state_37926;
var statearr_37935_38017 = state_37926__$1;
(statearr_37935_38017[(2)] = null);

(statearr_37935_38017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (24))){
var inst_37825 = (state_37926[(7)]);
var inst_37844 = (state_37926[(2)]);
var inst_37845 = cljs.core.next.call(null,inst_37825);
var inst_37803 = inst_37845;
var inst_37804 = null;
var inst_37805 = (0);
var inst_37806 = (0);
var state_37926__$1 = (function (){var statearr_37936 = state_37926;
(statearr_37936[(13)] = inst_37844);

(statearr_37936[(14)] = inst_37804);

(statearr_37936[(15)] = inst_37806);

(statearr_37936[(16)] = inst_37803);

(statearr_37936[(17)] = inst_37805);

return statearr_37936;
})();
var statearr_37937_38018 = state_37926__$1;
(statearr_37937_38018[(2)] = null);

(statearr_37937_38018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (39))){
var state_37926__$1 = state_37926;
var statearr_37941_38019 = state_37926__$1;
(statearr_37941_38019[(2)] = null);

(statearr_37941_38019[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (4))){
var inst_37794 = (state_37926[(12)]);
var inst_37794__$1 = (state_37926[(2)]);
var inst_37795 = (inst_37794__$1 == null);
var state_37926__$1 = (function (){var statearr_37942 = state_37926;
(statearr_37942[(12)] = inst_37794__$1);

return statearr_37942;
})();
if(cljs.core.truth_(inst_37795)){
var statearr_37943_38020 = state_37926__$1;
(statearr_37943_38020[(1)] = (5));

} else {
var statearr_37944_38021 = state_37926__$1;
(statearr_37944_38021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (15))){
var inst_37804 = (state_37926[(14)]);
var inst_37806 = (state_37926[(15)]);
var inst_37803 = (state_37926[(16)]);
var inst_37805 = (state_37926[(17)]);
var inst_37821 = (state_37926[(2)]);
var inst_37822 = (inst_37806 + (1));
var tmp37938 = inst_37804;
var tmp37939 = inst_37803;
var tmp37940 = inst_37805;
var inst_37803__$1 = tmp37939;
var inst_37804__$1 = tmp37938;
var inst_37805__$1 = tmp37940;
var inst_37806__$1 = inst_37822;
var state_37926__$1 = (function (){var statearr_37945 = state_37926;
(statearr_37945[(14)] = inst_37804__$1);

(statearr_37945[(15)] = inst_37806__$1);

(statearr_37945[(16)] = inst_37803__$1);

(statearr_37945[(17)] = inst_37805__$1);

(statearr_37945[(18)] = inst_37821);

return statearr_37945;
})();
var statearr_37946_38022 = state_37926__$1;
(statearr_37946_38022[(2)] = null);

(statearr_37946_38022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (21))){
var inst_37848 = (state_37926[(2)]);
var state_37926__$1 = state_37926;
var statearr_37950_38023 = state_37926__$1;
(statearr_37950_38023[(2)] = inst_37848);

(statearr_37950_38023[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (31))){
var inst_37874 = (state_37926[(10)]);
var inst_37878 = done.call(null,null);
var inst_37879 = cljs.core.async.untap_STAR_.call(null,m,inst_37874);
var state_37926__$1 = (function (){var statearr_37951 = state_37926;
(statearr_37951[(19)] = inst_37878);

return statearr_37951;
})();
var statearr_37952_38024 = state_37926__$1;
(statearr_37952_38024[(2)] = inst_37879);

(statearr_37952_38024[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (32))){
var inst_37869 = (state_37926[(9)]);
var inst_37867 = (state_37926[(11)]);
var inst_37866 = (state_37926[(20)]);
var inst_37868 = (state_37926[(21)]);
var inst_37881 = (state_37926[(2)]);
var inst_37882 = (inst_37869 + (1));
var tmp37947 = inst_37867;
var tmp37948 = inst_37866;
var tmp37949 = inst_37868;
var inst_37866__$1 = tmp37948;
var inst_37867__$1 = tmp37947;
var inst_37868__$1 = tmp37949;
var inst_37869__$1 = inst_37882;
var state_37926__$1 = (function (){var statearr_37953 = state_37926;
(statearr_37953[(9)] = inst_37869__$1);

(statearr_37953[(22)] = inst_37881);

(statearr_37953[(11)] = inst_37867__$1);

(statearr_37953[(20)] = inst_37866__$1);

(statearr_37953[(21)] = inst_37868__$1);

return statearr_37953;
})();
var statearr_37954_38025 = state_37926__$1;
(statearr_37954_38025[(2)] = null);

(statearr_37954_38025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (40))){
var inst_37894 = (state_37926[(23)]);
var inst_37898 = done.call(null,null);
var inst_37899 = cljs.core.async.untap_STAR_.call(null,m,inst_37894);
var state_37926__$1 = (function (){var statearr_37955 = state_37926;
(statearr_37955[(24)] = inst_37898);

return statearr_37955;
})();
var statearr_37956_38026 = state_37926__$1;
(statearr_37956_38026[(2)] = inst_37899);

(statearr_37956_38026[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (33))){
var inst_37885 = (state_37926[(25)]);
var inst_37887 = cljs.core.chunked_seq_QMARK_.call(null,inst_37885);
var state_37926__$1 = state_37926;
if(inst_37887){
var statearr_37957_38027 = state_37926__$1;
(statearr_37957_38027[(1)] = (36));

} else {
var statearr_37958_38028 = state_37926__$1;
(statearr_37958_38028[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (13))){
var inst_37815 = (state_37926[(26)]);
var inst_37818 = cljs.core.async.close_BANG_.call(null,inst_37815);
var state_37926__$1 = state_37926;
var statearr_37959_38029 = state_37926__$1;
(statearr_37959_38029[(2)] = inst_37818);

(statearr_37959_38029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (22))){
var inst_37838 = (state_37926[(8)]);
var inst_37841 = cljs.core.async.close_BANG_.call(null,inst_37838);
var state_37926__$1 = state_37926;
var statearr_37960_38030 = state_37926__$1;
(statearr_37960_38030[(2)] = inst_37841);

(statearr_37960_38030[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (36))){
var inst_37885 = (state_37926[(25)]);
var inst_37889 = cljs.core.chunk_first.call(null,inst_37885);
var inst_37890 = cljs.core.chunk_rest.call(null,inst_37885);
var inst_37891 = cljs.core.count.call(null,inst_37889);
var inst_37866 = inst_37890;
var inst_37867 = inst_37889;
var inst_37868 = inst_37891;
var inst_37869 = (0);
var state_37926__$1 = (function (){var statearr_37961 = state_37926;
(statearr_37961[(9)] = inst_37869);

(statearr_37961[(11)] = inst_37867);

(statearr_37961[(20)] = inst_37866);

(statearr_37961[(21)] = inst_37868);

return statearr_37961;
})();
var statearr_37962_38031 = state_37926__$1;
(statearr_37962_38031[(2)] = null);

(statearr_37962_38031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (41))){
var inst_37885 = (state_37926[(25)]);
var inst_37901 = (state_37926[(2)]);
var inst_37902 = cljs.core.next.call(null,inst_37885);
var inst_37866 = inst_37902;
var inst_37867 = null;
var inst_37868 = (0);
var inst_37869 = (0);
var state_37926__$1 = (function (){var statearr_37963 = state_37926;
(statearr_37963[(9)] = inst_37869);

(statearr_37963[(27)] = inst_37901);

(statearr_37963[(11)] = inst_37867);

(statearr_37963[(20)] = inst_37866);

(statearr_37963[(21)] = inst_37868);

return statearr_37963;
})();
var statearr_37964_38032 = state_37926__$1;
(statearr_37964_38032[(2)] = null);

(statearr_37964_38032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (43))){
var state_37926__$1 = state_37926;
var statearr_37965_38033 = state_37926__$1;
(statearr_37965_38033[(2)] = null);

(statearr_37965_38033[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (29))){
var inst_37910 = (state_37926[(2)]);
var state_37926__$1 = state_37926;
var statearr_37966_38034 = state_37926__$1;
(statearr_37966_38034[(2)] = inst_37910);

(statearr_37966_38034[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (44))){
var inst_37919 = (state_37926[(2)]);
var state_37926__$1 = (function (){var statearr_37967 = state_37926;
(statearr_37967[(28)] = inst_37919);

return statearr_37967;
})();
var statearr_37968_38035 = state_37926__$1;
(statearr_37968_38035[(2)] = null);

(statearr_37968_38035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (6))){
var inst_37858 = (state_37926[(29)]);
var inst_37857 = cljs.core.deref.call(null,cs);
var inst_37858__$1 = cljs.core.keys.call(null,inst_37857);
var inst_37859 = cljs.core.count.call(null,inst_37858__$1);
var inst_37860 = cljs.core.reset_BANG_.call(null,dctr,inst_37859);
var inst_37865 = cljs.core.seq.call(null,inst_37858__$1);
var inst_37866 = inst_37865;
var inst_37867 = null;
var inst_37868 = (0);
var inst_37869 = (0);
var state_37926__$1 = (function (){var statearr_37969 = state_37926;
(statearr_37969[(9)] = inst_37869);

(statearr_37969[(29)] = inst_37858__$1);

(statearr_37969[(30)] = inst_37860);

(statearr_37969[(11)] = inst_37867);

(statearr_37969[(20)] = inst_37866);

(statearr_37969[(21)] = inst_37868);

return statearr_37969;
})();
var statearr_37970_38036 = state_37926__$1;
(statearr_37970_38036[(2)] = null);

(statearr_37970_38036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (28))){
var inst_37885 = (state_37926[(25)]);
var inst_37866 = (state_37926[(20)]);
var inst_37885__$1 = cljs.core.seq.call(null,inst_37866);
var state_37926__$1 = (function (){var statearr_37971 = state_37926;
(statearr_37971[(25)] = inst_37885__$1);

return statearr_37971;
})();
if(inst_37885__$1){
var statearr_37972_38037 = state_37926__$1;
(statearr_37972_38037[(1)] = (33));

} else {
var statearr_37973_38038 = state_37926__$1;
(statearr_37973_38038[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (25))){
var inst_37869 = (state_37926[(9)]);
var inst_37868 = (state_37926[(21)]);
var inst_37871 = (inst_37869 < inst_37868);
var inst_37872 = inst_37871;
var state_37926__$1 = state_37926;
if(cljs.core.truth_(inst_37872)){
var statearr_37974_38039 = state_37926__$1;
(statearr_37974_38039[(1)] = (27));

} else {
var statearr_37975_38040 = state_37926__$1;
(statearr_37975_38040[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (34))){
var state_37926__$1 = state_37926;
var statearr_37976_38041 = state_37926__$1;
(statearr_37976_38041[(2)] = null);

(statearr_37976_38041[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (17))){
var state_37926__$1 = state_37926;
var statearr_37977_38042 = state_37926__$1;
(statearr_37977_38042[(2)] = null);

(statearr_37977_38042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (3))){
var inst_37924 = (state_37926[(2)]);
var state_37926__$1 = state_37926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37926__$1,inst_37924);
} else {
if((state_val_37927 === (12))){
var inst_37853 = (state_37926[(2)]);
var state_37926__$1 = state_37926;
var statearr_37978_38043 = state_37926__$1;
(statearr_37978_38043[(2)] = inst_37853);

(statearr_37978_38043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (2))){
var state_37926__$1 = state_37926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37926__$1,(4),ch);
} else {
if((state_val_37927 === (23))){
var state_37926__$1 = state_37926;
var statearr_37979_38044 = state_37926__$1;
(statearr_37979_38044[(2)] = null);

(statearr_37979_38044[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (35))){
var inst_37908 = (state_37926[(2)]);
var state_37926__$1 = state_37926;
var statearr_37980_38045 = state_37926__$1;
(statearr_37980_38045[(2)] = inst_37908);

(statearr_37980_38045[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (19))){
var inst_37825 = (state_37926[(7)]);
var inst_37829 = cljs.core.chunk_first.call(null,inst_37825);
var inst_37830 = cljs.core.chunk_rest.call(null,inst_37825);
var inst_37831 = cljs.core.count.call(null,inst_37829);
var inst_37803 = inst_37830;
var inst_37804 = inst_37829;
var inst_37805 = inst_37831;
var inst_37806 = (0);
var state_37926__$1 = (function (){var statearr_37981 = state_37926;
(statearr_37981[(14)] = inst_37804);

(statearr_37981[(15)] = inst_37806);

(statearr_37981[(16)] = inst_37803);

(statearr_37981[(17)] = inst_37805);

return statearr_37981;
})();
var statearr_37982_38046 = state_37926__$1;
(statearr_37982_38046[(2)] = null);

(statearr_37982_38046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (11))){
var inst_37825 = (state_37926[(7)]);
var inst_37803 = (state_37926[(16)]);
var inst_37825__$1 = cljs.core.seq.call(null,inst_37803);
var state_37926__$1 = (function (){var statearr_37983 = state_37926;
(statearr_37983[(7)] = inst_37825__$1);

return statearr_37983;
})();
if(inst_37825__$1){
var statearr_37984_38047 = state_37926__$1;
(statearr_37984_38047[(1)] = (16));

} else {
var statearr_37985_38048 = state_37926__$1;
(statearr_37985_38048[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (9))){
var inst_37855 = (state_37926[(2)]);
var state_37926__$1 = state_37926;
var statearr_37986_38049 = state_37926__$1;
(statearr_37986_38049[(2)] = inst_37855);

(statearr_37986_38049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (5))){
var inst_37801 = cljs.core.deref.call(null,cs);
var inst_37802 = cljs.core.seq.call(null,inst_37801);
var inst_37803 = inst_37802;
var inst_37804 = null;
var inst_37805 = (0);
var inst_37806 = (0);
var state_37926__$1 = (function (){var statearr_37987 = state_37926;
(statearr_37987[(14)] = inst_37804);

(statearr_37987[(15)] = inst_37806);

(statearr_37987[(16)] = inst_37803);

(statearr_37987[(17)] = inst_37805);

return statearr_37987;
})();
var statearr_37988_38050 = state_37926__$1;
(statearr_37988_38050[(2)] = null);

(statearr_37988_38050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (14))){
var state_37926__$1 = state_37926;
var statearr_37989_38051 = state_37926__$1;
(statearr_37989_38051[(2)] = null);

(statearr_37989_38051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (45))){
var inst_37916 = (state_37926[(2)]);
var state_37926__$1 = state_37926;
var statearr_37990_38052 = state_37926__$1;
(statearr_37990_38052[(2)] = inst_37916);

(statearr_37990_38052[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (26))){
var inst_37858 = (state_37926[(29)]);
var inst_37912 = (state_37926[(2)]);
var inst_37913 = cljs.core.seq.call(null,inst_37858);
var state_37926__$1 = (function (){var statearr_37991 = state_37926;
(statearr_37991[(31)] = inst_37912);

return statearr_37991;
})();
if(inst_37913){
var statearr_37992_38053 = state_37926__$1;
(statearr_37992_38053[(1)] = (42));

} else {
var statearr_37993_38054 = state_37926__$1;
(statearr_37993_38054[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (16))){
var inst_37825 = (state_37926[(7)]);
var inst_37827 = cljs.core.chunked_seq_QMARK_.call(null,inst_37825);
var state_37926__$1 = state_37926;
if(inst_37827){
var statearr_37994_38055 = state_37926__$1;
(statearr_37994_38055[(1)] = (19));

} else {
var statearr_37995_38056 = state_37926__$1;
(statearr_37995_38056[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (38))){
var inst_37905 = (state_37926[(2)]);
var state_37926__$1 = state_37926;
var statearr_37996_38057 = state_37926__$1;
(statearr_37996_38057[(2)] = inst_37905);

(statearr_37996_38057[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (30))){
var state_37926__$1 = state_37926;
var statearr_37997_38058 = state_37926__$1;
(statearr_37997_38058[(2)] = null);

(statearr_37997_38058[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (10))){
var inst_37804 = (state_37926[(14)]);
var inst_37806 = (state_37926[(15)]);
var inst_37814 = cljs.core._nth.call(null,inst_37804,inst_37806);
var inst_37815 = cljs.core.nth.call(null,inst_37814,(0),null);
var inst_37816 = cljs.core.nth.call(null,inst_37814,(1),null);
var state_37926__$1 = (function (){var statearr_37998 = state_37926;
(statearr_37998[(26)] = inst_37815);

return statearr_37998;
})();
if(cljs.core.truth_(inst_37816)){
var statearr_37999_38059 = state_37926__$1;
(statearr_37999_38059[(1)] = (13));

} else {
var statearr_38000_38060 = state_37926__$1;
(statearr_38000_38060[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (18))){
var inst_37851 = (state_37926[(2)]);
var state_37926__$1 = state_37926;
var statearr_38001_38061 = state_37926__$1;
(statearr_38001_38061[(2)] = inst_37851);

(statearr_38001_38061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (42))){
var state_37926__$1 = state_37926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37926__$1,(45),dchan);
} else {
if((state_val_37927 === (37))){
var inst_37885 = (state_37926[(25)]);
var inst_37894 = (state_37926[(23)]);
var inst_37794 = (state_37926[(12)]);
var inst_37894__$1 = cljs.core.first.call(null,inst_37885);
var inst_37895 = cljs.core.async.put_BANG_.call(null,inst_37894__$1,inst_37794,done);
var state_37926__$1 = (function (){var statearr_38002 = state_37926;
(statearr_38002[(23)] = inst_37894__$1);

return statearr_38002;
})();
if(cljs.core.truth_(inst_37895)){
var statearr_38003_38062 = state_37926__$1;
(statearr_38003_38062[(1)] = (39));

} else {
var statearr_38004_38063 = state_37926__$1;
(statearr_38004_38063[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (8))){
var inst_37806 = (state_37926[(15)]);
var inst_37805 = (state_37926[(17)]);
var inst_37808 = (inst_37806 < inst_37805);
var inst_37809 = inst_37808;
var state_37926__$1 = state_37926;
if(cljs.core.truth_(inst_37809)){
var statearr_38005_38064 = state_37926__$1;
(statearr_38005_38064[(1)] = (10));

} else {
var statearr_38006_38065 = state_37926__$1;
(statearr_38006_38065[(1)] = (11));

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
});})(c__34606__auto___38011,cs,m,dchan,dctr,done))
;
return ((function (switch__34589__auto__,c__34606__auto___38011,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34590__auto__ = null;
var cljs$core$async$mult_$_state_machine__34590__auto____0 = (function (){
var statearr_38007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38007[(0)] = cljs$core$async$mult_$_state_machine__34590__auto__);

(statearr_38007[(1)] = (1));

return statearr_38007;
});
var cljs$core$async$mult_$_state_machine__34590__auto____1 = (function (state_37926){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_37926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e38008){if((e38008 instanceof Object)){
var ex__34593__auto__ = e38008;
var statearr_38009_38066 = state_37926;
(statearr_38009_38066[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38067 = state_37926;
state_37926 = G__38067;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34590__auto__ = function(state_37926){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34590__auto____1.call(this,state_37926);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34590__auto____0;
cljs$core$async$mult_$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34590__auto____1;
return cljs$core$async$mult_$_state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto___38011,cs,m,dchan,dctr,done))
})();
var state__34608__auto__ = (function (){var statearr_38010 = f__34607__auto__.call(null);
(statearr_38010[(6)] = c__34606__auto___38011);

return statearr_38010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto___38011,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38069 = arguments.length;
switch (G__38069) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38081 = arguments.length;
var i__4500__auto___38082 = (0);
while(true){
if((i__4500__auto___38082 < len__4499__auto___38081)){
args__4502__auto__.push((arguments[i__4500__auto___38082]));

var G__38083 = (i__4500__auto___38082 + (1));
i__4500__auto___38082 = G__38083;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38075){
var map__38076 = p__38075;
var map__38076__$1 = ((((!((map__38076 == null)))?(((((map__38076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38076):map__38076);
var opts = map__38076__$1;
var statearr_38078_38084 = state;
(statearr_38078_38084[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__38076,map__38076__$1,opts){
return (function (val){
var statearr_38079_38085 = state;
(statearr_38079_38085[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38076,map__38076__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_38080_38086 = state;
(statearr_38080_38086[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38071){
var G__38072 = cljs.core.first.call(null,seq38071);
var seq38071__$1 = cljs.core.next.call(null,seq38071);
var G__38073 = cljs.core.first.call(null,seq38071__$1);
var seq38071__$2 = cljs.core.next.call(null,seq38071__$1);
var G__38074 = cljs.core.first.call(null,seq38071__$2);
var seq38071__$3 = cljs.core.next.call(null,seq38071__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38072,G__38073,G__38074,seq38071__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38087 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta38088){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta38088 = meta38088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38089,meta38088__$1){
var self__ = this;
var _38089__$1 = this;
return (new cljs.core.async.t_cljs$core$async38087(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta38088__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38089){
var self__ = this;
var _38089__$1 = this;
return self__.meta38088;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38087.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38087.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38087.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38087.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38087.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38087.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38087.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38087.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta38088","meta38088",57295016,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38087";

cljs.core.async.t_cljs$core$async38087.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38087");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38087.
 */
cljs.core.async.__GT_t_cljs$core$async38087 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38087(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38088){
return (new cljs.core.async.t_cljs$core$async38087(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38088));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38087(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34606__auto___38251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto___38251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto___38251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38191){
var state_val_38192 = (state_38191[(1)]);
if((state_val_38192 === (7))){
var inst_38106 = (state_38191[(2)]);
var state_38191__$1 = state_38191;
var statearr_38193_38252 = state_38191__$1;
(statearr_38193_38252[(2)] = inst_38106);

(statearr_38193_38252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (20))){
var inst_38118 = (state_38191[(7)]);
var state_38191__$1 = state_38191;
var statearr_38194_38253 = state_38191__$1;
(statearr_38194_38253[(2)] = inst_38118);

(statearr_38194_38253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (27))){
var state_38191__$1 = state_38191;
var statearr_38195_38254 = state_38191__$1;
(statearr_38195_38254[(2)] = null);

(statearr_38195_38254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (1))){
var inst_38093 = (state_38191[(8)]);
var inst_38093__$1 = calc_state.call(null);
var inst_38095 = (inst_38093__$1 == null);
var inst_38096 = cljs.core.not.call(null,inst_38095);
var state_38191__$1 = (function (){var statearr_38196 = state_38191;
(statearr_38196[(8)] = inst_38093__$1);

return statearr_38196;
})();
if(inst_38096){
var statearr_38197_38255 = state_38191__$1;
(statearr_38197_38255[(1)] = (2));

} else {
var statearr_38198_38256 = state_38191__$1;
(statearr_38198_38256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (24))){
var inst_38142 = (state_38191[(9)]);
var inst_38151 = (state_38191[(10)]);
var inst_38165 = (state_38191[(11)]);
var inst_38165__$1 = inst_38142.call(null,inst_38151);
var state_38191__$1 = (function (){var statearr_38199 = state_38191;
(statearr_38199[(11)] = inst_38165__$1);

return statearr_38199;
})();
if(cljs.core.truth_(inst_38165__$1)){
var statearr_38200_38257 = state_38191__$1;
(statearr_38200_38257[(1)] = (29));

} else {
var statearr_38201_38258 = state_38191__$1;
(statearr_38201_38258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (4))){
var inst_38109 = (state_38191[(2)]);
var state_38191__$1 = state_38191;
if(cljs.core.truth_(inst_38109)){
var statearr_38202_38259 = state_38191__$1;
(statearr_38202_38259[(1)] = (8));

} else {
var statearr_38203_38260 = state_38191__$1;
(statearr_38203_38260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (15))){
var inst_38136 = (state_38191[(2)]);
var state_38191__$1 = state_38191;
if(cljs.core.truth_(inst_38136)){
var statearr_38204_38261 = state_38191__$1;
(statearr_38204_38261[(1)] = (19));

} else {
var statearr_38205_38262 = state_38191__$1;
(statearr_38205_38262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (21))){
var inst_38141 = (state_38191[(12)]);
var inst_38141__$1 = (state_38191[(2)]);
var inst_38142 = cljs.core.get.call(null,inst_38141__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38143 = cljs.core.get.call(null,inst_38141__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38144 = cljs.core.get.call(null,inst_38141__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38191__$1 = (function (){var statearr_38206 = state_38191;
(statearr_38206[(13)] = inst_38143);

(statearr_38206[(12)] = inst_38141__$1);

(statearr_38206[(9)] = inst_38142);

return statearr_38206;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38191__$1,(22),inst_38144);
} else {
if((state_val_38192 === (31))){
var inst_38173 = (state_38191[(2)]);
var state_38191__$1 = state_38191;
if(cljs.core.truth_(inst_38173)){
var statearr_38207_38263 = state_38191__$1;
(statearr_38207_38263[(1)] = (32));

} else {
var statearr_38208_38264 = state_38191__$1;
(statearr_38208_38264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (32))){
var inst_38150 = (state_38191[(14)]);
var state_38191__$1 = state_38191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38191__$1,(35),out,inst_38150);
} else {
if((state_val_38192 === (33))){
var inst_38141 = (state_38191[(12)]);
var inst_38118 = inst_38141;
var state_38191__$1 = (function (){var statearr_38209 = state_38191;
(statearr_38209[(7)] = inst_38118);

return statearr_38209;
})();
var statearr_38210_38265 = state_38191__$1;
(statearr_38210_38265[(2)] = null);

(statearr_38210_38265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (13))){
var inst_38118 = (state_38191[(7)]);
var inst_38125 = inst_38118.cljs$lang$protocol_mask$partition0$;
var inst_38126 = (inst_38125 & (64));
var inst_38127 = inst_38118.cljs$core$ISeq$;
var inst_38128 = (cljs.core.PROTOCOL_SENTINEL === inst_38127);
var inst_38129 = ((inst_38126) || (inst_38128));
var state_38191__$1 = state_38191;
if(cljs.core.truth_(inst_38129)){
var statearr_38211_38266 = state_38191__$1;
(statearr_38211_38266[(1)] = (16));

} else {
var statearr_38212_38267 = state_38191__$1;
(statearr_38212_38267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (22))){
var inst_38150 = (state_38191[(14)]);
var inst_38151 = (state_38191[(10)]);
var inst_38149 = (state_38191[(2)]);
var inst_38150__$1 = cljs.core.nth.call(null,inst_38149,(0),null);
var inst_38151__$1 = cljs.core.nth.call(null,inst_38149,(1),null);
var inst_38152 = (inst_38150__$1 == null);
var inst_38153 = cljs.core._EQ_.call(null,inst_38151__$1,change);
var inst_38154 = ((inst_38152) || (inst_38153));
var state_38191__$1 = (function (){var statearr_38213 = state_38191;
(statearr_38213[(14)] = inst_38150__$1);

(statearr_38213[(10)] = inst_38151__$1);

return statearr_38213;
})();
if(cljs.core.truth_(inst_38154)){
var statearr_38214_38268 = state_38191__$1;
(statearr_38214_38268[(1)] = (23));

} else {
var statearr_38215_38269 = state_38191__$1;
(statearr_38215_38269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (36))){
var inst_38141 = (state_38191[(12)]);
var inst_38118 = inst_38141;
var state_38191__$1 = (function (){var statearr_38216 = state_38191;
(statearr_38216[(7)] = inst_38118);

return statearr_38216;
})();
var statearr_38217_38270 = state_38191__$1;
(statearr_38217_38270[(2)] = null);

(statearr_38217_38270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (29))){
var inst_38165 = (state_38191[(11)]);
var state_38191__$1 = state_38191;
var statearr_38218_38271 = state_38191__$1;
(statearr_38218_38271[(2)] = inst_38165);

(statearr_38218_38271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (6))){
var state_38191__$1 = state_38191;
var statearr_38219_38272 = state_38191__$1;
(statearr_38219_38272[(2)] = false);

(statearr_38219_38272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (28))){
var inst_38161 = (state_38191[(2)]);
var inst_38162 = calc_state.call(null);
var inst_38118 = inst_38162;
var state_38191__$1 = (function (){var statearr_38220 = state_38191;
(statearr_38220[(15)] = inst_38161);

(statearr_38220[(7)] = inst_38118);

return statearr_38220;
})();
var statearr_38221_38273 = state_38191__$1;
(statearr_38221_38273[(2)] = null);

(statearr_38221_38273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (25))){
var inst_38187 = (state_38191[(2)]);
var state_38191__$1 = state_38191;
var statearr_38222_38274 = state_38191__$1;
(statearr_38222_38274[(2)] = inst_38187);

(statearr_38222_38274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (34))){
var inst_38185 = (state_38191[(2)]);
var state_38191__$1 = state_38191;
var statearr_38223_38275 = state_38191__$1;
(statearr_38223_38275[(2)] = inst_38185);

(statearr_38223_38275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (17))){
var state_38191__$1 = state_38191;
var statearr_38224_38276 = state_38191__$1;
(statearr_38224_38276[(2)] = false);

(statearr_38224_38276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (3))){
var state_38191__$1 = state_38191;
var statearr_38225_38277 = state_38191__$1;
(statearr_38225_38277[(2)] = false);

(statearr_38225_38277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (12))){
var inst_38189 = (state_38191[(2)]);
var state_38191__$1 = state_38191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38191__$1,inst_38189);
} else {
if((state_val_38192 === (2))){
var inst_38093 = (state_38191[(8)]);
var inst_38098 = inst_38093.cljs$lang$protocol_mask$partition0$;
var inst_38099 = (inst_38098 & (64));
var inst_38100 = inst_38093.cljs$core$ISeq$;
var inst_38101 = (cljs.core.PROTOCOL_SENTINEL === inst_38100);
var inst_38102 = ((inst_38099) || (inst_38101));
var state_38191__$1 = state_38191;
if(cljs.core.truth_(inst_38102)){
var statearr_38226_38278 = state_38191__$1;
(statearr_38226_38278[(1)] = (5));

} else {
var statearr_38227_38279 = state_38191__$1;
(statearr_38227_38279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (23))){
var inst_38150 = (state_38191[(14)]);
var inst_38156 = (inst_38150 == null);
var state_38191__$1 = state_38191;
if(cljs.core.truth_(inst_38156)){
var statearr_38228_38280 = state_38191__$1;
(statearr_38228_38280[(1)] = (26));

} else {
var statearr_38229_38281 = state_38191__$1;
(statearr_38229_38281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (35))){
var inst_38176 = (state_38191[(2)]);
var state_38191__$1 = state_38191;
if(cljs.core.truth_(inst_38176)){
var statearr_38230_38282 = state_38191__$1;
(statearr_38230_38282[(1)] = (36));

} else {
var statearr_38231_38283 = state_38191__$1;
(statearr_38231_38283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (19))){
var inst_38118 = (state_38191[(7)]);
var inst_38138 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38118);
var state_38191__$1 = state_38191;
var statearr_38232_38284 = state_38191__$1;
(statearr_38232_38284[(2)] = inst_38138);

(statearr_38232_38284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (11))){
var inst_38118 = (state_38191[(7)]);
var inst_38122 = (inst_38118 == null);
var inst_38123 = cljs.core.not.call(null,inst_38122);
var state_38191__$1 = state_38191;
if(inst_38123){
var statearr_38233_38285 = state_38191__$1;
(statearr_38233_38285[(1)] = (13));

} else {
var statearr_38234_38286 = state_38191__$1;
(statearr_38234_38286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (9))){
var inst_38093 = (state_38191[(8)]);
var state_38191__$1 = state_38191;
var statearr_38235_38287 = state_38191__$1;
(statearr_38235_38287[(2)] = inst_38093);

(statearr_38235_38287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (5))){
var state_38191__$1 = state_38191;
var statearr_38236_38288 = state_38191__$1;
(statearr_38236_38288[(2)] = true);

(statearr_38236_38288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (14))){
var state_38191__$1 = state_38191;
var statearr_38237_38289 = state_38191__$1;
(statearr_38237_38289[(2)] = false);

(statearr_38237_38289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (26))){
var inst_38151 = (state_38191[(10)]);
var inst_38158 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38151);
var state_38191__$1 = state_38191;
var statearr_38238_38290 = state_38191__$1;
(statearr_38238_38290[(2)] = inst_38158);

(statearr_38238_38290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (16))){
var state_38191__$1 = state_38191;
var statearr_38239_38291 = state_38191__$1;
(statearr_38239_38291[(2)] = true);

(statearr_38239_38291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (38))){
var inst_38181 = (state_38191[(2)]);
var state_38191__$1 = state_38191;
var statearr_38240_38292 = state_38191__$1;
(statearr_38240_38292[(2)] = inst_38181);

(statearr_38240_38292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (30))){
var inst_38143 = (state_38191[(13)]);
var inst_38142 = (state_38191[(9)]);
var inst_38151 = (state_38191[(10)]);
var inst_38168 = cljs.core.empty_QMARK_.call(null,inst_38142);
var inst_38169 = inst_38143.call(null,inst_38151);
var inst_38170 = cljs.core.not.call(null,inst_38169);
var inst_38171 = ((inst_38168) && (inst_38170));
var state_38191__$1 = state_38191;
var statearr_38241_38293 = state_38191__$1;
(statearr_38241_38293[(2)] = inst_38171);

(statearr_38241_38293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (10))){
var inst_38093 = (state_38191[(8)]);
var inst_38114 = (state_38191[(2)]);
var inst_38115 = cljs.core.get.call(null,inst_38114,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38116 = cljs.core.get.call(null,inst_38114,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38117 = cljs.core.get.call(null,inst_38114,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38118 = inst_38093;
var state_38191__$1 = (function (){var statearr_38242 = state_38191;
(statearr_38242[(16)] = inst_38115);

(statearr_38242[(17)] = inst_38117);

(statearr_38242[(18)] = inst_38116);

(statearr_38242[(7)] = inst_38118);

return statearr_38242;
})();
var statearr_38243_38294 = state_38191__$1;
(statearr_38243_38294[(2)] = null);

(statearr_38243_38294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (18))){
var inst_38133 = (state_38191[(2)]);
var state_38191__$1 = state_38191;
var statearr_38244_38295 = state_38191__$1;
(statearr_38244_38295[(2)] = inst_38133);

(statearr_38244_38295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (37))){
var state_38191__$1 = state_38191;
var statearr_38245_38296 = state_38191__$1;
(statearr_38245_38296[(2)] = null);

(statearr_38245_38296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (8))){
var inst_38093 = (state_38191[(8)]);
var inst_38111 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38093);
var state_38191__$1 = state_38191;
var statearr_38246_38297 = state_38191__$1;
(statearr_38246_38297[(2)] = inst_38111);

(statearr_38246_38297[(1)] = (10));


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
});})(c__34606__auto___38251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34589__auto__,c__34606__auto___38251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34590__auto__ = null;
var cljs$core$async$mix_$_state_machine__34590__auto____0 = (function (){
var statearr_38247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38247[(0)] = cljs$core$async$mix_$_state_machine__34590__auto__);

(statearr_38247[(1)] = (1));

return statearr_38247;
});
var cljs$core$async$mix_$_state_machine__34590__auto____1 = (function (state_38191){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_38191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e38248){if((e38248 instanceof Object)){
var ex__34593__auto__ = e38248;
var statearr_38249_38298 = state_38191;
(statearr_38249_38298[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38299 = state_38191;
state_38191 = G__38299;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34590__auto__ = function(state_38191){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34590__auto____1.call(this,state_38191);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34590__auto____0;
cljs$core$async$mix_$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34590__auto____1;
return cljs$core$async$mix_$_state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto___38251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34608__auto__ = (function (){var statearr_38250 = f__34607__auto__.call(null);
(statearr_38250[(6)] = c__34606__auto___38251);

return statearr_38250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto___38251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38301 = arguments.length;
switch (G__38301) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__38305 = arguments.length;
switch (G__38305) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__38303_SHARP_){
if(cljs.core.truth_(p1__38303_SHARP_.call(null,topic))){
return p1__38303_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38303_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38306 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38307){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38307 = meta38307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38308,meta38307__$1){
var self__ = this;
var _38308__$1 = this;
return (new cljs.core.async.t_cljs$core$async38306(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38307__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38308){
var self__ = this;
var _38308__$1 = this;
return self__.meta38307;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38306.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38306.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38306.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38306.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38306.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38307","meta38307",1314415618,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38306";

cljs.core.async.t_cljs$core$async38306.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38306");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38306.
 */
cljs.core.async.__GT_t_cljs$core$async38306 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38307){
return (new cljs.core.async.t_cljs$core$async38306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38307));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38306(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34606__auto___38426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto___38426,mults,ensure_mult,p){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto___38426,mults,ensure_mult,p){
return (function (state_38380){
var state_val_38381 = (state_38380[(1)]);
if((state_val_38381 === (7))){
var inst_38376 = (state_38380[(2)]);
var state_38380__$1 = state_38380;
var statearr_38382_38427 = state_38380__$1;
(statearr_38382_38427[(2)] = inst_38376);

(statearr_38382_38427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (20))){
var state_38380__$1 = state_38380;
var statearr_38383_38428 = state_38380__$1;
(statearr_38383_38428[(2)] = null);

(statearr_38383_38428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (1))){
var state_38380__$1 = state_38380;
var statearr_38384_38429 = state_38380__$1;
(statearr_38384_38429[(2)] = null);

(statearr_38384_38429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (24))){
var inst_38359 = (state_38380[(7)]);
var inst_38368 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38359);
var state_38380__$1 = state_38380;
var statearr_38385_38430 = state_38380__$1;
(statearr_38385_38430[(2)] = inst_38368);

(statearr_38385_38430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (4))){
var inst_38311 = (state_38380[(8)]);
var inst_38311__$1 = (state_38380[(2)]);
var inst_38312 = (inst_38311__$1 == null);
var state_38380__$1 = (function (){var statearr_38386 = state_38380;
(statearr_38386[(8)] = inst_38311__$1);

return statearr_38386;
})();
if(cljs.core.truth_(inst_38312)){
var statearr_38387_38431 = state_38380__$1;
(statearr_38387_38431[(1)] = (5));

} else {
var statearr_38388_38432 = state_38380__$1;
(statearr_38388_38432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (15))){
var inst_38353 = (state_38380[(2)]);
var state_38380__$1 = state_38380;
var statearr_38389_38433 = state_38380__$1;
(statearr_38389_38433[(2)] = inst_38353);

(statearr_38389_38433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (21))){
var inst_38373 = (state_38380[(2)]);
var state_38380__$1 = (function (){var statearr_38390 = state_38380;
(statearr_38390[(9)] = inst_38373);

return statearr_38390;
})();
var statearr_38391_38434 = state_38380__$1;
(statearr_38391_38434[(2)] = null);

(statearr_38391_38434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (13))){
var inst_38335 = (state_38380[(10)]);
var inst_38337 = cljs.core.chunked_seq_QMARK_.call(null,inst_38335);
var state_38380__$1 = state_38380;
if(inst_38337){
var statearr_38392_38435 = state_38380__$1;
(statearr_38392_38435[(1)] = (16));

} else {
var statearr_38393_38436 = state_38380__$1;
(statearr_38393_38436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (22))){
var inst_38365 = (state_38380[(2)]);
var state_38380__$1 = state_38380;
if(cljs.core.truth_(inst_38365)){
var statearr_38394_38437 = state_38380__$1;
(statearr_38394_38437[(1)] = (23));

} else {
var statearr_38395_38438 = state_38380__$1;
(statearr_38395_38438[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (6))){
var inst_38361 = (state_38380[(11)]);
var inst_38311 = (state_38380[(8)]);
var inst_38359 = (state_38380[(7)]);
var inst_38359__$1 = topic_fn.call(null,inst_38311);
var inst_38360 = cljs.core.deref.call(null,mults);
var inst_38361__$1 = cljs.core.get.call(null,inst_38360,inst_38359__$1);
var state_38380__$1 = (function (){var statearr_38396 = state_38380;
(statearr_38396[(11)] = inst_38361__$1);

(statearr_38396[(7)] = inst_38359__$1);

return statearr_38396;
})();
if(cljs.core.truth_(inst_38361__$1)){
var statearr_38397_38439 = state_38380__$1;
(statearr_38397_38439[(1)] = (19));

} else {
var statearr_38398_38440 = state_38380__$1;
(statearr_38398_38440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (25))){
var inst_38370 = (state_38380[(2)]);
var state_38380__$1 = state_38380;
var statearr_38399_38441 = state_38380__$1;
(statearr_38399_38441[(2)] = inst_38370);

(statearr_38399_38441[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (17))){
var inst_38335 = (state_38380[(10)]);
var inst_38344 = cljs.core.first.call(null,inst_38335);
var inst_38345 = cljs.core.async.muxch_STAR_.call(null,inst_38344);
var inst_38346 = cljs.core.async.close_BANG_.call(null,inst_38345);
var inst_38347 = cljs.core.next.call(null,inst_38335);
var inst_38321 = inst_38347;
var inst_38322 = null;
var inst_38323 = (0);
var inst_38324 = (0);
var state_38380__$1 = (function (){var statearr_38400 = state_38380;
(statearr_38400[(12)] = inst_38323);

(statearr_38400[(13)] = inst_38324);

(statearr_38400[(14)] = inst_38346);

(statearr_38400[(15)] = inst_38322);

(statearr_38400[(16)] = inst_38321);

return statearr_38400;
})();
var statearr_38401_38442 = state_38380__$1;
(statearr_38401_38442[(2)] = null);

(statearr_38401_38442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (3))){
var inst_38378 = (state_38380[(2)]);
var state_38380__$1 = state_38380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38380__$1,inst_38378);
} else {
if((state_val_38381 === (12))){
var inst_38355 = (state_38380[(2)]);
var state_38380__$1 = state_38380;
var statearr_38402_38443 = state_38380__$1;
(statearr_38402_38443[(2)] = inst_38355);

(statearr_38402_38443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (2))){
var state_38380__$1 = state_38380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38380__$1,(4),ch);
} else {
if((state_val_38381 === (23))){
var state_38380__$1 = state_38380;
var statearr_38403_38444 = state_38380__$1;
(statearr_38403_38444[(2)] = null);

(statearr_38403_38444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (19))){
var inst_38361 = (state_38380[(11)]);
var inst_38311 = (state_38380[(8)]);
var inst_38363 = cljs.core.async.muxch_STAR_.call(null,inst_38361);
var state_38380__$1 = state_38380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38380__$1,(22),inst_38363,inst_38311);
} else {
if((state_val_38381 === (11))){
var inst_38335 = (state_38380[(10)]);
var inst_38321 = (state_38380[(16)]);
var inst_38335__$1 = cljs.core.seq.call(null,inst_38321);
var state_38380__$1 = (function (){var statearr_38404 = state_38380;
(statearr_38404[(10)] = inst_38335__$1);

return statearr_38404;
})();
if(inst_38335__$1){
var statearr_38405_38445 = state_38380__$1;
(statearr_38405_38445[(1)] = (13));

} else {
var statearr_38406_38446 = state_38380__$1;
(statearr_38406_38446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (9))){
var inst_38357 = (state_38380[(2)]);
var state_38380__$1 = state_38380;
var statearr_38407_38447 = state_38380__$1;
(statearr_38407_38447[(2)] = inst_38357);

(statearr_38407_38447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (5))){
var inst_38318 = cljs.core.deref.call(null,mults);
var inst_38319 = cljs.core.vals.call(null,inst_38318);
var inst_38320 = cljs.core.seq.call(null,inst_38319);
var inst_38321 = inst_38320;
var inst_38322 = null;
var inst_38323 = (0);
var inst_38324 = (0);
var state_38380__$1 = (function (){var statearr_38408 = state_38380;
(statearr_38408[(12)] = inst_38323);

(statearr_38408[(13)] = inst_38324);

(statearr_38408[(15)] = inst_38322);

(statearr_38408[(16)] = inst_38321);

return statearr_38408;
})();
var statearr_38409_38448 = state_38380__$1;
(statearr_38409_38448[(2)] = null);

(statearr_38409_38448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (14))){
var state_38380__$1 = state_38380;
var statearr_38413_38449 = state_38380__$1;
(statearr_38413_38449[(2)] = null);

(statearr_38413_38449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (16))){
var inst_38335 = (state_38380[(10)]);
var inst_38339 = cljs.core.chunk_first.call(null,inst_38335);
var inst_38340 = cljs.core.chunk_rest.call(null,inst_38335);
var inst_38341 = cljs.core.count.call(null,inst_38339);
var inst_38321 = inst_38340;
var inst_38322 = inst_38339;
var inst_38323 = inst_38341;
var inst_38324 = (0);
var state_38380__$1 = (function (){var statearr_38414 = state_38380;
(statearr_38414[(12)] = inst_38323);

(statearr_38414[(13)] = inst_38324);

(statearr_38414[(15)] = inst_38322);

(statearr_38414[(16)] = inst_38321);

return statearr_38414;
})();
var statearr_38415_38450 = state_38380__$1;
(statearr_38415_38450[(2)] = null);

(statearr_38415_38450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (10))){
var inst_38323 = (state_38380[(12)]);
var inst_38324 = (state_38380[(13)]);
var inst_38322 = (state_38380[(15)]);
var inst_38321 = (state_38380[(16)]);
var inst_38329 = cljs.core._nth.call(null,inst_38322,inst_38324);
var inst_38330 = cljs.core.async.muxch_STAR_.call(null,inst_38329);
var inst_38331 = cljs.core.async.close_BANG_.call(null,inst_38330);
var inst_38332 = (inst_38324 + (1));
var tmp38410 = inst_38323;
var tmp38411 = inst_38322;
var tmp38412 = inst_38321;
var inst_38321__$1 = tmp38412;
var inst_38322__$1 = tmp38411;
var inst_38323__$1 = tmp38410;
var inst_38324__$1 = inst_38332;
var state_38380__$1 = (function (){var statearr_38416 = state_38380;
(statearr_38416[(12)] = inst_38323__$1);

(statearr_38416[(13)] = inst_38324__$1);

(statearr_38416[(17)] = inst_38331);

(statearr_38416[(15)] = inst_38322__$1);

(statearr_38416[(16)] = inst_38321__$1);

return statearr_38416;
})();
var statearr_38417_38451 = state_38380__$1;
(statearr_38417_38451[(2)] = null);

(statearr_38417_38451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (18))){
var inst_38350 = (state_38380[(2)]);
var state_38380__$1 = state_38380;
var statearr_38418_38452 = state_38380__$1;
(statearr_38418_38452[(2)] = inst_38350);

(statearr_38418_38452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38381 === (8))){
var inst_38323 = (state_38380[(12)]);
var inst_38324 = (state_38380[(13)]);
var inst_38326 = (inst_38324 < inst_38323);
var inst_38327 = inst_38326;
var state_38380__$1 = state_38380;
if(cljs.core.truth_(inst_38327)){
var statearr_38419_38453 = state_38380__$1;
(statearr_38419_38453[(1)] = (10));

} else {
var statearr_38420_38454 = state_38380__$1;
(statearr_38420_38454[(1)] = (11));

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
});})(c__34606__auto___38426,mults,ensure_mult,p))
;
return ((function (switch__34589__auto__,c__34606__auto___38426,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34590__auto__ = null;
var cljs$core$async$state_machine__34590__auto____0 = (function (){
var statearr_38421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38421[(0)] = cljs$core$async$state_machine__34590__auto__);

(statearr_38421[(1)] = (1));

return statearr_38421;
});
var cljs$core$async$state_machine__34590__auto____1 = (function (state_38380){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_38380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e38422){if((e38422 instanceof Object)){
var ex__34593__auto__ = e38422;
var statearr_38423_38455 = state_38380;
(statearr_38423_38455[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38456 = state_38380;
state_38380 = G__38456;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$state_machine__34590__auto__ = function(state_38380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34590__auto____1.call(this,state_38380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34590__auto____0;
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34590__auto____1;
return cljs$core$async$state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto___38426,mults,ensure_mult,p))
})();
var state__34608__auto__ = (function (){var statearr_38424 = f__34607__auto__.call(null);
(statearr_38424[(6)] = c__34606__auto___38426);

return statearr_38424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto___38426,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__38458 = arguments.length;
switch (G__38458) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__38461 = arguments.length;
switch (G__38461) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__38464 = arguments.length;
switch (G__38464) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__34606__auto___38531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto___38531,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto___38531,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38503){
var state_val_38504 = (state_38503[(1)]);
if((state_val_38504 === (7))){
var state_38503__$1 = state_38503;
var statearr_38505_38532 = state_38503__$1;
(statearr_38505_38532[(2)] = null);

(statearr_38505_38532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (1))){
var state_38503__$1 = state_38503;
var statearr_38506_38533 = state_38503__$1;
(statearr_38506_38533[(2)] = null);

(statearr_38506_38533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (4))){
var inst_38467 = (state_38503[(7)]);
var inst_38469 = (inst_38467 < cnt);
var state_38503__$1 = state_38503;
if(cljs.core.truth_(inst_38469)){
var statearr_38507_38534 = state_38503__$1;
(statearr_38507_38534[(1)] = (6));

} else {
var statearr_38508_38535 = state_38503__$1;
(statearr_38508_38535[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (15))){
var inst_38499 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
var statearr_38509_38536 = state_38503__$1;
(statearr_38509_38536[(2)] = inst_38499);

(statearr_38509_38536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (13))){
var inst_38492 = cljs.core.async.close_BANG_.call(null,out);
var state_38503__$1 = state_38503;
var statearr_38510_38537 = state_38503__$1;
(statearr_38510_38537[(2)] = inst_38492);

(statearr_38510_38537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (6))){
var state_38503__$1 = state_38503;
var statearr_38511_38538 = state_38503__$1;
(statearr_38511_38538[(2)] = null);

(statearr_38511_38538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (3))){
var inst_38501 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38503__$1,inst_38501);
} else {
if((state_val_38504 === (12))){
var inst_38489 = (state_38503[(8)]);
var inst_38489__$1 = (state_38503[(2)]);
var inst_38490 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38489__$1);
var state_38503__$1 = (function (){var statearr_38512 = state_38503;
(statearr_38512[(8)] = inst_38489__$1);

return statearr_38512;
})();
if(cljs.core.truth_(inst_38490)){
var statearr_38513_38539 = state_38503__$1;
(statearr_38513_38539[(1)] = (13));

} else {
var statearr_38514_38540 = state_38503__$1;
(statearr_38514_38540[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (2))){
var inst_38466 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38467 = (0);
var state_38503__$1 = (function (){var statearr_38515 = state_38503;
(statearr_38515[(9)] = inst_38466);

(statearr_38515[(7)] = inst_38467);

return statearr_38515;
})();
var statearr_38516_38541 = state_38503__$1;
(statearr_38516_38541[(2)] = null);

(statearr_38516_38541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (11))){
var inst_38467 = (state_38503[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38503,(10),Object,null,(9));
var inst_38476 = chs__$1.call(null,inst_38467);
var inst_38477 = done.call(null,inst_38467);
var inst_38478 = cljs.core.async.take_BANG_.call(null,inst_38476,inst_38477);
var state_38503__$1 = state_38503;
var statearr_38517_38542 = state_38503__$1;
(statearr_38517_38542[(2)] = inst_38478);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38503__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (9))){
var inst_38467 = (state_38503[(7)]);
var inst_38480 = (state_38503[(2)]);
var inst_38481 = (inst_38467 + (1));
var inst_38467__$1 = inst_38481;
var state_38503__$1 = (function (){var statearr_38518 = state_38503;
(statearr_38518[(7)] = inst_38467__$1);

(statearr_38518[(10)] = inst_38480);

return statearr_38518;
})();
var statearr_38519_38543 = state_38503__$1;
(statearr_38519_38543[(2)] = null);

(statearr_38519_38543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (5))){
var inst_38487 = (state_38503[(2)]);
var state_38503__$1 = (function (){var statearr_38520 = state_38503;
(statearr_38520[(11)] = inst_38487);

return statearr_38520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38503__$1,(12),dchan);
} else {
if((state_val_38504 === (14))){
var inst_38489 = (state_38503[(8)]);
var inst_38494 = cljs.core.apply.call(null,f,inst_38489);
var state_38503__$1 = state_38503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38503__$1,(16),out,inst_38494);
} else {
if((state_val_38504 === (16))){
var inst_38496 = (state_38503[(2)]);
var state_38503__$1 = (function (){var statearr_38521 = state_38503;
(statearr_38521[(12)] = inst_38496);

return statearr_38521;
})();
var statearr_38522_38544 = state_38503__$1;
(statearr_38522_38544[(2)] = null);

(statearr_38522_38544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (10))){
var inst_38471 = (state_38503[(2)]);
var inst_38472 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38503__$1 = (function (){var statearr_38523 = state_38503;
(statearr_38523[(13)] = inst_38471);

return statearr_38523;
})();
var statearr_38524_38545 = state_38503__$1;
(statearr_38524_38545[(2)] = inst_38472);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38503__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (8))){
var inst_38485 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
var statearr_38525_38546 = state_38503__$1;
(statearr_38525_38546[(2)] = inst_38485);

(statearr_38525_38546[(1)] = (5));


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
});})(c__34606__auto___38531,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34589__auto__,c__34606__auto___38531,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34590__auto__ = null;
var cljs$core$async$state_machine__34590__auto____0 = (function (){
var statearr_38526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38526[(0)] = cljs$core$async$state_machine__34590__auto__);

(statearr_38526[(1)] = (1));

return statearr_38526;
});
var cljs$core$async$state_machine__34590__auto____1 = (function (state_38503){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_38503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e38527){if((e38527 instanceof Object)){
var ex__34593__auto__ = e38527;
var statearr_38528_38547 = state_38503;
(statearr_38528_38547[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38548 = state_38503;
state_38503 = G__38548;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$state_machine__34590__auto__ = function(state_38503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34590__auto____1.call(this,state_38503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34590__auto____0;
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34590__auto____1;
return cljs$core$async$state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto___38531,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34608__auto__ = (function (){var statearr_38529 = f__34607__auto__.call(null);
(statearr_38529[(6)] = c__34606__auto___38531);

return statearr_38529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto___38531,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__38551 = arguments.length;
switch (G__38551) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34606__auto___38605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto___38605,out){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto___38605,out){
return (function (state_38583){
var state_val_38584 = (state_38583[(1)]);
if((state_val_38584 === (7))){
var inst_38562 = (state_38583[(7)]);
var inst_38563 = (state_38583[(8)]);
var inst_38562__$1 = (state_38583[(2)]);
var inst_38563__$1 = cljs.core.nth.call(null,inst_38562__$1,(0),null);
var inst_38564 = cljs.core.nth.call(null,inst_38562__$1,(1),null);
var inst_38565 = (inst_38563__$1 == null);
var state_38583__$1 = (function (){var statearr_38585 = state_38583;
(statearr_38585[(7)] = inst_38562__$1);

(statearr_38585[(9)] = inst_38564);

(statearr_38585[(8)] = inst_38563__$1);

return statearr_38585;
})();
if(cljs.core.truth_(inst_38565)){
var statearr_38586_38606 = state_38583__$1;
(statearr_38586_38606[(1)] = (8));

} else {
var statearr_38587_38607 = state_38583__$1;
(statearr_38587_38607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38584 === (1))){
var inst_38552 = cljs.core.vec.call(null,chs);
var inst_38553 = inst_38552;
var state_38583__$1 = (function (){var statearr_38588 = state_38583;
(statearr_38588[(10)] = inst_38553);

return statearr_38588;
})();
var statearr_38589_38608 = state_38583__$1;
(statearr_38589_38608[(2)] = null);

(statearr_38589_38608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38584 === (4))){
var inst_38553 = (state_38583[(10)]);
var state_38583__$1 = state_38583;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38583__$1,(7),inst_38553);
} else {
if((state_val_38584 === (6))){
var inst_38579 = (state_38583[(2)]);
var state_38583__$1 = state_38583;
var statearr_38590_38609 = state_38583__$1;
(statearr_38590_38609[(2)] = inst_38579);

(statearr_38590_38609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38584 === (3))){
var inst_38581 = (state_38583[(2)]);
var state_38583__$1 = state_38583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38583__$1,inst_38581);
} else {
if((state_val_38584 === (2))){
var inst_38553 = (state_38583[(10)]);
var inst_38555 = cljs.core.count.call(null,inst_38553);
var inst_38556 = (inst_38555 > (0));
var state_38583__$1 = state_38583;
if(cljs.core.truth_(inst_38556)){
var statearr_38592_38610 = state_38583__$1;
(statearr_38592_38610[(1)] = (4));

} else {
var statearr_38593_38611 = state_38583__$1;
(statearr_38593_38611[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38584 === (11))){
var inst_38553 = (state_38583[(10)]);
var inst_38572 = (state_38583[(2)]);
var tmp38591 = inst_38553;
var inst_38553__$1 = tmp38591;
var state_38583__$1 = (function (){var statearr_38594 = state_38583;
(statearr_38594[(10)] = inst_38553__$1);

(statearr_38594[(11)] = inst_38572);

return statearr_38594;
})();
var statearr_38595_38612 = state_38583__$1;
(statearr_38595_38612[(2)] = null);

(statearr_38595_38612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38584 === (9))){
var inst_38563 = (state_38583[(8)]);
var state_38583__$1 = state_38583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38583__$1,(11),out,inst_38563);
} else {
if((state_val_38584 === (5))){
var inst_38577 = cljs.core.async.close_BANG_.call(null,out);
var state_38583__$1 = state_38583;
var statearr_38596_38613 = state_38583__$1;
(statearr_38596_38613[(2)] = inst_38577);

(statearr_38596_38613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38584 === (10))){
var inst_38575 = (state_38583[(2)]);
var state_38583__$1 = state_38583;
var statearr_38597_38614 = state_38583__$1;
(statearr_38597_38614[(2)] = inst_38575);

(statearr_38597_38614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38584 === (8))){
var inst_38562 = (state_38583[(7)]);
var inst_38553 = (state_38583[(10)]);
var inst_38564 = (state_38583[(9)]);
var inst_38563 = (state_38583[(8)]);
var inst_38567 = (function (){var cs = inst_38553;
var vec__38558 = inst_38562;
var v = inst_38563;
var c = inst_38564;
return ((function (cs,vec__38558,v,c,inst_38562,inst_38553,inst_38564,inst_38563,state_val_38584,c__34606__auto___38605,out){
return (function (p1__38549_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38549_SHARP_);
});
;})(cs,vec__38558,v,c,inst_38562,inst_38553,inst_38564,inst_38563,state_val_38584,c__34606__auto___38605,out))
})();
var inst_38568 = cljs.core.filterv.call(null,inst_38567,inst_38553);
var inst_38553__$1 = inst_38568;
var state_38583__$1 = (function (){var statearr_38598 = state_38583;
(statearr_38598[(10)] = inst_38553__$1);

return statearr_38598;
})();
var statearr_38599_38615 = state_38583__$1;
(statearr_38599_38615[(2)] = null);

(statearr_38599_38615[(1)] = (2));


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
});})(c__34606__auto___38605,out))
;
return ((function (switch__34589__auto__,c__34606__auto___38605,out){
return (function() {
var cljs$core$async$state_machine__34590__auto__ = null;
var cljs$core$async$state_machine__34590__auto____0 = (function (){
var statearr_38600 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38600[(0)] = cljs$core$async$state_machine__34590__auto__);

(statearr_38600[(1)] = (1));

return statearr_38600;
});
var cljs$core$async$state_machine__34590__auto____1 = (function (state_38583){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_38583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e38601){if((e38601 instanceof Object)){
var ex__34593__auto__ = e38601;
var statearr_38602_38616 = state_38583;
(statearr_38602_38616[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38617 = state_38583;
state_38583 = G__38617;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$state_machine__34590__auto__ = function(state_38583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34590__auto____1.call(this,state_38583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34590__auto____0;
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34590__auto____1;
return cljs$core$async$state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto___38605,out))
})();
var state__34608__auto__ = (function (){var statearr_38603 = f__34607__auto__.call(null);
(statearr_38603[(6)] = c__34606__auto___38605);

return statearr_38603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto___38605,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__38619 = arguments.length;
switch (G__38619) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34606__auto___38664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto___38664,out){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto___38664,out){
return (function (state_38643){
var state_val_38644 = (state_38643[(1)]);
if((state_val_38644 === (7))){
var inst_38625 = (state_38643[(7)]);
var inst_38625__$1 = (state_38643[(2)]);
var inst_38626 = (inst_38625__$1 == null);
var inst_38627 = cljs.core.not.call(null,inst_38626);
var state_38643__$1 = (function (){var statearr_38645 = state_38643;
(statearr_38645[(7)] = inst_38625__$1);

return statearr_38645;
})();
if(inst_38627){
var statearr_38646_38665 = state_38643__$1;
(statearr_38646_38665[(1)] = (8));

} else {
var statearr_38647_38666 = state_38643__$1;
(statearr_38647_38666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38644 === (1))){
var inst_38620 = (0);
var state_38643__$1 = (function (){var statearr_38648 = state_38643;
(statearr_38648[(8)] = inst_38620);

return statearr_38648;
})();
var statearr_38649_38667 = state_38643__$1;
(statearr_38649_38667[(2)] = null);

(statearr_38649_38667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38644 === (4))){
var state_38643__$1 = state_38643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38643__$1,(7),ch);
} else {
if((state_val_38644 === (6))){
var inst_38638 = (state_38643[(2)]);
var state_38643__$1 = state_38643;
var statearr_38650_38668 = state_38643__$1;
(statearr_38650_38668[(2)] = inst_38638);

(statearr_38650_38668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38644 === (3))){
var inst_38640 = (state_38643[(2)]);
var inst_38641 = cljs.core.async.close_BANG_.call(null,out);
var state_38643__$1 = (function (){var statearr_38651 = state_38643;
(statearr_38651[(9)] = inst_38640);

return statearr_38651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38643__$1,inst_38641);
} else {
if((state_val_38644 === (2))){
var inst_38620 = (state_38643[(8)]);
var inst_38622 = (inst_38620 < n);
var state_38643__$1 = state_38643;
if(cljs.core.truth_(inst_38622)){
var statearr_38652_38669 = state_38643__$1;
(statearr_38652_38669[(1)] = (4));

} else {
var statearr_38653_38670 = state_38643__$1;
(statearr_38653_38670[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38644 === (11))){
var inst_38620 = (state_38643[(8)]);
var inst_38630 = (state_38643[(2)]);
var inst_38631 = (inst_38620 + (1));
var inst_38620__$1 = inst_38631;
var state_38643__$1 = (function (){var statearr_38654 = state_38643;
(statearr_38654[(10)] = inst_38630);

(statearr_38654[(8)] = inst_38620__$1);

return statearr_38654;
})();
var statearr_38655_38671 = state_38643__$1;
(statearr_38655_38671[(2)] = null);

(statearr_38655_38671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38644 === (9))){
var state_38643__$1 = state_38643;
var statearr_38656_38672 = state_38643__$1;
(statearr_38656_38672[(2)] = null);

(statearr_38656_38672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38644 === (5))){
var state_38643__$1 = state_38643;
var statearr_38657_38673 = state_38643__$1;
(statearr_38657_38673[(2)] = null);

(statearr_38657_38673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38644 === (10))){
var inst_38635 = (state_38643[(2)]);
var state_38643__$1 = state_38643;
var statearr_38658_38674 = state_38643__$1;
(statearr_38658_38674[(2)] = inst_38635);

(statearr_38658_38674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38644 === (8))){
var inst_38625 = (state_38643[(7)]);
var state_38643__$1 = state_38643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38643__$1,(11),out,inst_38625);
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
});})(c__34606__auto___38664,out))
;
return ((function (switch__34589__auto__,c__34606__auto___38664,out){
return (function() {
var cljs$core$async$state_machine__34590__auto__ = null;
var cljs$core$async$state_machine__34590__auto____0 = (function (){
var statearr_38659 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38659[(0)] = cljs$core$async$state_machine__34590__auto__);

(statearr_38659[(1)] = (1));

return statearr_38659;
});
var cljs$core$async$state_machine__34590__auto____1 = (function (state_38643){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_38643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e38660){if((e38660 instanceof Object)){
var ex__34593__auto__ = e38660;
var statearr_38661_38675 = state_38643;
(statearr_38661_38675[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38676 = state_38643;
state_38643 = G__38676;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$state_machine__34590__auto__ = function(state_38643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34590__auto____1.call(this,state_38643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34590__auto____0;
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34590__auto____1;
return cljs$core$async$state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto___38664,out))
})();
var state__34608__auto__ = (function (){var statearr_38662 = f__34607__auto__.call(null);
(statearr_38662[(6)] = c__34606__auto___38664);

return statearr_38662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto___38664,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38678 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38678 = (function (f,ch,meta38679){
this.f = f;
this.ch = ch;
this.meta38679 = meta38679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38680,meta38679__$1){
var self__ = this;
var _38680__$1 = this;
return (new cljs.core.async.t_cljs$core$async38678(self__.f,self__.ch,meta38679__$1));
});

cljs.core.async.t_cljs$core$async38678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38680){
var self__ = this;
var _38680__$1 = this;
return self__.meta38679;
});

cljs.core.async.t_cljs$core$async38678.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38678.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38678.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38678.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38678.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38681 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38681 = (function (f,ch,meta38679,_,fn1,meta38682){
this.f = f;
this.ch = ch;
this.meta38679 = meta38679;
this._ = _;
this.fn1 = fn1;
this.meta38682 = meta38682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38683,meta38682__$1){
var self__ = this;
var _38683__$1 = this;
return (new cljs.core.async.t_cljs$core$async38681(self__.f,self__.ch,self__.meta38679,self__._,self__.fn1,meta38682__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38683){
var self__ = this;
var _38683__$1 = this;
return self__.meta38682;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38681.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38681.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38677_SHARP_){
return f1.call(null,(((p1__38677_SHARP_ == null))?null:self__.f.call(null,p1__38677_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38681.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38679","meta38679",-1790124501,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38678","cljs.core.async/t_cljs$core$async38678",477033438,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38682","meta38682",-1128255062,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38681";

cljs.core.async.t_cljs$core$async38681.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38681");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38681.
 */
cljs.core.async.__GT_t_cljs$core$async38681 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38681(f__$1,ch__$1,meta38679__$1,___$2,fn1__$1,meta38682){
return (new cljs.core.async.t_cljs$core$async38681(f__$1,ch__$1,meta38679__$1,___$2,fn1__$1,meta38682));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38681(self__.f,self__.ch,self__.meta38679,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38678.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38678.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38679","meta38679",-1790124501,null)], null);
});

cljs.core.async.t_cljs$core$async38678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38678";

cljs.core.async.t_cljs$core$async38678.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38678");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38678.
 */
cljs.core.async.__GT_t_cljs$core$async38678 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38678(f__$1,ch__$1,meta38679){
return (new cljs.core.async.t_cljs$core$async38678(f__$1,ch__$1,meta38679));
});

}

return (new cljs.core.async.t_cljs$core$async38678(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38684 = (function (f,ch,meta38685){
this.f = f;
this.ch = ch;
this.meta38685 = meta38685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38686,meta38685__$1){
var self__ = this;
var _38686__$1 = this;
return (new cljs.core.async.t_cljs$core$async38684(self__.f,self__.ch,meta38685__$1));
});

cljs.core.async.t_cljs$core$async38684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38686){
var self__ = this;
var _38686__$1 = this;
return self__.meta38685;
});

cljs.core.async.t_cljs$core$async38684.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38684.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38684.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38684.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38684.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38684.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38685","meta38685",-1887974468,null)], null);
});

cljs.core.async.t_cljs$core$async38684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38684";

cljs.core.async.t_cljs$core$async38684.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38684");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38684.
 */
cljs.core.async.__GT_t_cljs$core$async38684 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38684(f__$1,ch__$1,meta38685){
return (new cljs.core.async.t_cljs$core$async38684(f__$1,ch__$1,meta38685));
});

}

return (new cljs.core.async.t_cljs$core$async38684(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38687 = (function (p,ch,meta38688){
this.p = p;
this.ch = ch;
this.meta38688 = meta38688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38689,meta38688__$1){
var self__ = this;
var _38689__$1 = this;
return (new cljs.core.async.t_cljs$core$async38687(self__.p,self__.ch,meta38688__$1));
});

cljs.core.async.t_cljs$core$async38687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38689){
var self__ = this;
var _38689__$1 = this;
return self__.meta38688;
});

cljs.core.async.t_cljs$core$async38687.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38687.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38687.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38687.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38688","meta38688",-1055397062,null)], null);
});

cljs.core.async.t_cljs$core$async38687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38687";

cljs.core.async.t_cljs$core$async38687.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38687");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38687.
 */
cljs.core.async.__GT_t_cljs$core$async38687 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38687(p__$1,ch__$1,meta38688){
return (new cljs.core.async.t_cljs$core$async38687(p__$1,ch__$1,meta38688));
});

}

return (new cljs.core.async.t_cljs$core$async38687(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__38691 = arguments.length;
switch (G__38691) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34606__auto___38731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto___38731,out){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto___38731,out){
return (function (state_38712){
var state_val_38713 = (state_38712[(1)]);
if((state_val_38713 === (7))){
var inst_38708 = (state_38712[(2)]);
var state_38712__$1 = state_38712;
var statearr_38714_38732 = state_38712__$1;
(statearr_38714_38732[(2)] = inst_38708);

(statearr_38714_38732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38713 === (1))){
var state_38712__$1 = state_38712;
var statearr_38715_38733 = state_38712__$1;
(statearr_38715_38733[(2)] = null);

(statearr_38715_38733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38713 === (4))){
var inst_38694 = (state_38712[(7)]);
var inst_38694__$1 = (state_38712[(2)]);
var inst_38695 = (inst_38694__$1 == null);
var state_38712__$1 = (function (){var statearr_38716 = state_38712;
(statearr_38716[(7)] = inst_38694__$1);

return statearr_38716;
})();
if(cljs.core.truth_(inst_38695)){
var statearr_38717_38734 = state_38712__$1;
(statearr_38717_38734[(1)] = (5));

} else {
var statearr_38718_38735 = state_38712__$1;
(statearr_38718_38735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38713 === (6))){
var inst_38694 = (state_38712[(7)]);
var inst_38699 = p.call(null,inst_38694);
var state_38712__$1 = state_38712;
if(cljs.core.truth_(inst_38699)){
var statearr_38719_38736 = state_38712__$1;
(statearr_38719_38736[(1)] = (8));

} else {
var statearr_38720_38737 = state_38712__$1;
(statearr_38720_38737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38713 === (3))){
var inst_38710 = (state_38712[(2)]);
var state_38712__$1 = state_38712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38712__$1,inst_38710);
} else {
if((state_val_38713 === (2))){
var state_38712__$1 = state_38712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38712__$1,(4),ch);
} else {
if((state_val_38713 === (11))){
var inst_38702 = (state_38712[(2)]);
var state_38712__$1 = state_38712;
var statearr_38721_38738 = state_38712__$1;
(statearr_38721_38738[(2)] = inst_38702);

(statearr_38721_38738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38713 === (9))){
var state_38712__$1 = state_38712;
var statearr_38722_38739 = state_38712__$1;
(statearr_38722_38739[(2)] = null);

(statearr_38722_38739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38713 === (5))){
var inst_38697 = cljs.core.async.close_BANG_.call(null,out);
var state_38712__$1 = state_38712;
var statearr_38723_38740 = state_38712__$1;
(statearr_38723_38740[(2)] = inst_38697);

(statearr_38723_38740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38713 === (10))){
var inst_38705 = (state_38712[(2)]);
var state_38712__$1 = (function (){var statearr_38724 = state_38712;
(statearr_38724[(8)] = inst_38705);

return statearr_38724;
})();
var statearr_38725_38741 = state_38712__$1;
(statearr_38725_38741[(2)] = null);

(statearr_38725_38741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38713 === (8))){
var inst_38694 = (state_38712[(7)]);
var state_38712__$1 = state_38712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38712__$1,(11),out,inst_38694);
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
});})(c__34606__auto___38731,out))
;
return ((function (switch__34589__auto__,c__34606__auto___38731,out){
return (function() {
var cljs$core$async$state_machine__34590__auto__ = null;
var cljs$core$async$state_machine__34590__auto____0 = (function (){
var statearr_38726 = [null,null,null,null,null,null,null,null,null];
(statearr_38726[(0)] = cljs$core$async$state_machine__34590__auto__);

(statearr_38726[(1)] = (1));

return statearr_38726;
});
var cljs$core$async$state_machine__34590__auto____1 = (function (state_38712){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_38712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e38727){if((e38727 instanceof Object)){
var ex__34593__auto__ = e38727;
var statearr_38728_38742 = state_38712;
(statearr_38728_38742[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38743 = state_38712;
state_38712 = G__38743;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$state_machine__34590__auto__ = function(state_38712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34590__auto____1.call(this,state_38712);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34590__auto____0;
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34590__auto____1;
return cljs$core$async$state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto___38731,out))
})();
var state__34608__auto__ = (function (){var statearr_38729 = f__34607__auto__.call(null);
(statearr_38729[(6)] = c__34606__auto___38731);

return statearr_38729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto___38731,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38745 = arguments.length;
switch (G__38745) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34606__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto__){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto__){
return (function (state_38808){
var state_val_38809 = (state_38808[(1)]);
if((state_val_38809 === (7))){
var inst_38804 = (state_38808[(2)]);
var state_38808__$1 = state_38808;
var statearr_38810_38848 = state_38808__$1;
(statearr_38810_38848[(2)] = inst_38804);

(statearr_38810_38848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (20))){
var inst_38774 = (state_38808[(7)]);
var inst_38785 = (state_38808[(2)]);
var inst_38786 = cljs.core.next.call(null,inst_38774);
var inst_38760 = inst_38786;
var inst_38761 = null;
var inst_38762 = (0);
var inst_38763 = (0);
var state_38808__$1 = (function (){var statearr_38811 = state_38808;
(statearr_38811[(8)] = inst_38760);

(statearr_38811[(9)] = inst_38785);

(statearr_38811[(10)] = inst_38763);

(statearr_38811[(11)] = inst_38761);

(statearr_38811[(12)] = inst_38762);

return statearr_38811;
})();
var statearr_38812_38849 = state_38808__$1;
(statearr_38812_38849[(2)] = null);

(statearr_38812_38849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (1))){
var state_38808__$1 = state_38808;
var statearr_38813_38850 = state_38808__$1;
(statearr_38813_38850[(2)] = null);

(statearr_38813_38850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (4))){
var inst_38749 = (state_38808[(13)]);
var inst_38749__$1 = (state_38808[(2)]);
var inst_38750 = (inst_38749__$1 == null);
var state_38808__$1 = (function (){var statearr_38814 = state_38808;
(statearr_38814[(13)] = inst_38749__$1);

return statearr_38814;
})();
if(cljs.core.truth_(inst_38750)){
var statearr_38815_38851 = state_38808__$1;
(statearr_38815_38851[(1)] = (5));

} else {
var statearr_38816_38852 = state_38808__$1;
(statearr_38816_38852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (15))){
var state_38808__$1 = state_38808;
var statearr_38820_38853 = state_38808__$1;
(statearr_38820_38853[(2)] = null);

(statearr_38820_38853[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (21))){
var state_38808__$1 = state_38808;
var statearr_38821_38854 = state_38808__$1;
(statearr_38821_38854[(2)] = null);

(statearr_38821_38854[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (13))){
var inst_38760 = (state_38808[(8)]);
var inst_38763 = (state_38808[(10)]);
var inst_38761 = (state_38808[(11)]);
var inst_38762 = (state_38808[(12)]);
var inst_38770 = (state_38808[(2)]);
var inst_38771 = (inst_38763 + (1));
var tmp38817 = inst_38760;
var tmp38818 = inst_38761;
var tmp38819 = inst_38762;
var inst_38760__$1 = tmp38817;
var inst_38761__$1 = tmp38818;
var inst_38762__$1 = tmp38819;
var inst_38763__$1 = inst_38771;
var state_38808__$1 = (function (){var statearr_38822 = state_38808;
(statearr_38822[(8)] = inst_38760__$1);

(statearr_38822[(14)] = inst_38770);

(statearr_38822[(10)] = inst_38763__$1);

(statearr_38822[(11)] = inst_38761__$1);

(statearr_38822[(12)] = inst_38762__$1);

return statearr_38822;
})();
var statearr_38823_38855 = state_38808__$1;
(statearr_38823_38855[(2)] = null);

(statearr_38823_38855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (22))){
var state_38808__$1 = state_38808;
var statearr_38824_38856 = state_38808__$1;
(statearr_38824_38856[(2)] = null);

(statearr_38824_38856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (6))){
var inst_38749 = (state_38808[(13)]);
var inst_38758 = f.call(null,inst_38749);
var inst_38759 = cljs.core.seq.call(null,inst_38758);
var inst_38760 = inst_38759;
var inst_38761 = null;
var inst_38762 = (0);
var inst_38763 = (0);
var state_38808__$1 = (function (){var statearr_38825 = state_38808;
(statearr_38825[(8)] = inst_38760);

(statearr_38825[(10)] = inst_38763);

(statearr_38825[(11)] = inst_38761);

(statearr_38825[(12)] = inst_38762);

return statearr_38825;
})();
var statearr_38826_38857 = state_38808__$1;
(statearr_38826_38857[(2)] = null);

(statearr_38826_38857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (17))){
var inst_38774 = (state_38808[(7)]);
var inst_38778 = cljs.core.chunk_first.call(null,inst_38774);
var inst_38779 = cljs.core.chunk_rest.call(null,inst_38774);
var inst_38780 = cljs.core.count.call(null,inst_38778);
var inst_38760 = inst_38779;
var inst_38761 = inst_38778;
var inst_38762 = inst_38780;
var inst_38763 = (0);
var state_38808__$1 = (function (){var statearr_38827 = state_38808;
(statearr_38827[(8)] = inst_38760);

(statearr_38827[(10)] = inst_38763);

(statearr_38827[(11)] = inst_38761);

(statearr_38827[(12)] = inst_38762);

return statearr_38827;
})();
var statearr_38828_38858 = state_38808__$1;
(statearr_38828_38858[(2)] = null);

(statearr_38828_38858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (3))){
var inst_38806 = (state_38808[(2)]);
var state_38808__$1 = state_38808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38808__$1,inst_38806);
} else {
if((state_val_38809 === (12))){
var inst_38794 = (state_38808[(2)]);
var state_38808__$1 = state_38808;
var statearr_38829_38859 = state_38808__$1;
(statearr_38829_38859[(2)] = inst_38794);

(statearr_38829_38859[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (2))){
var state_38808__$1 = state_38808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38808__$1,(4),in$);
} else {
if((state_val_38809 === (23))){
var inst_38802 = (state_38808[(2)]);
var state_38808__$1 = state_38808;
var statearr_38830_38860 = state_38808__$1;
(statearr_38830_38860[(2)] = inst_38802);

(statearr_38830_38860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (19))){
var inst_38789 = (state_38808[(2)]);
var state_38808__$1 = state_38808;
var statearr_38831_38861 = state_38808__$1;
(statearr_38831_38861[(2)] = inst_38789);

(statearr_38831_38861[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (11))){
var inst_38760 = (state_38808[(8)]);
var inst_38774 = (state_38808[(7)]);
var inst_38774__$1 = cljs.core.seq.call(null,inst_38760);
var state_38808__$1 = (function (){var statearr_38832 = state_38808;
(statearr_38832[(7)] = inst_38774__$1);

return statearr_38832;
})();
if(inst_38774__$1){
var statearr_38833_38862 = state_38808__$1;
(statearr_38833_38862[(1)] = (14));

} else {
var statearr_38834_38863 = state_38808__$1;
(statearr_38834_38863[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (9))){
var inst_38796 = (state_38808[(2)]);
var inst_38797 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38808__$1 = (function (){var statearr_38835 = state_38808;
(statearr_38835[(15)] = inst_38796);

return statearr_38835;
})();
if(cljs.core.truth_(inst_38797)){
var statearr_38836_38864 = state_38808__$1;
(statearr_38836_38864[(1)] = (21));

} else {
var statearr_38837_38865 = state_38808__$1;
(statearr_38837_38865[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (5))){
var inst_38752 = cljs.core.async.close_BANG_.call(null,out);
var state_38808__$1 = state_38808;
var statearr_38838_38866 = state_38808__$1;
(statearr_38838_38866[(2)] = inst_38752);

(statearr_38838_38866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (14))){
var inst_38774 = (state_38808[(7)]);
var inst_38776 = cljs.core.chunked_seq_QMARK_.call(null,inst_38774);
var state_38808__$1 = state_38808;
if(inst_38776){
var statearr_38839_38867 = state_38808__$1;
(statearr_38839_38867[(1)] = (17));

} else {
var statearr_38840_38868 = state_38808__$1;
(statearr_38840_38868[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (16))){
var inst_38792 = (state_38808[(2)]);
var state_38808__$1 = state_38808;
var statearr_38841_38869 = state_38808__$1;
(statearr_38841_38869[(2)] = inst_38792);

(statearr_38841_38869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38809 === (10))){
var inst_38763 = (state_38808[(10)]);
var inst_38761 = (state_38808[(11)]);
var inst_38768 = cljs.core._nth.call(null,inst_38761,inst_38763);
var state_38808__$1 = state_38808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38808__$1,(13),out,inst_38768);
} else {
if((state_val_38809 === (18))){
var inst_38774 = (state_38808[(7)]);
var inst_38783 = cljs.core.first.call(null,inst_38774);
var state_38808__$1 = state_38808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38808__$1,(20),out,inst_38783);
} else {
if((state_val_38809 === (8))){
var inst_38763 = (state_38808[(10)]);
var inst_38762 = (state_38808[(12)]);
var inst_38765 = (inst_38763 < inst_38762);
var inst_38766 = inst_38765;
var state_38808__$1 = state_38808;
if(cljs.core.truth_(inst_38766)){
var statearr_38842_38870 = state_38808__$1;
(statearr_38842_38870[(1)] = (10));

} else {
var statearr_38843_38871 = state_38808__$1;
(statearr_38843_38871[(1)] = (11));

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
});})(c__34606__auto__))
;
return ((function (switch__34589__auto__,c__34606__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34590__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34590__auto____0 = (function (){
var statearr_38844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38844[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34590__auto__);

(statearr_38844[(1)] = (1));

return statearr_38844;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34590__auto____1 = (function (state_38808){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_38808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e38845){if((e38845 instanceof Object)){
var ex__34593__auto__ = e38845;
var statearr_38846_38872 = state_38808;
(statearr_38846_38872[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38873 = state_38808;
state_38808 = G__38873;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34590__auto__ = function(state_38808){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34590__auto____1.call(this,state_38808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34590__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34590__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto__))
})();
var state__34608__auto__ = (function (){var statearr_38847 = f__34607__auto__.call(null);
(statearr_38847[(6)] = c__34606__auto__);

return statearr_38847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto__))
);

return c__34606__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38875 = arguments.length;
switch (G__38875) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__38878 = arguments.length;
switch (G__38878) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__38881 = arguments.length;
switch (G__38881) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34606__auto___38928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto___38928,out){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto___38928,out){
return (function (state_38905){
var state_val_38906 = (state_38905[(1)]);
if((state_val_38906 === (7))){
var inst_38900 = (state_38905[(2)]);
var state_38905__$1 = state_38905;
var statearr_38907_38929 = state_38905__$1;
(statearr_38907_38929[(2)] = inst_38900);

(statearr_38907_38929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38906 === (1))){
var inst_38882 = null;
var state_38905__$1 = (function (){var statearr_38908 = state_38905;
(statearr_38908[(7)] = inst_38882);

return statearr_38908;
})();
var statearr_38909_38930 = state_38905__$1;
(statearr_38909_38930[(2)] = null);

(statearr_38909_38930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38906 === (4))){
var inst_38885 = (state_38905[(8)]);
var inst_38885__$1 = (state_38905[(2)]);
var inst_38886 = (inst_38885__$1 == null);
var inst_38887 = cljs.core.not.call(null,inst_38886);
var state_38905__$1 = (function (){var statearr_38910 = state_38905;
(statearr_38910[(8)] = inst_38885__$1);

return statearr_38910;
})();
if(inst_38887){
var statearr_38911_38931 = state_38905__$1;
(statearr_38911_38931[(1)] = (5));

} else {
var statearr_38912_38932 = state_38905__$1;
(statearr_38912_38932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38906 === (6))){
var state_38905__$1 = state_38905;
var statearr_38913_38933 = state_38905__$1;
(statearr_38913_38933[(2)] = null);

(statearr_38913_38933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38906 === (3))){
var inst_38902 = (state_38905[(2)]);
var inst_38903 = cljs.core.async.close_BANG_.call(null,out);
var state_38905__$1 = (function (){var statearr_38914 = state_38905;
(statearr_38914[(9)] = inst_38902);

return statearr_38914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38905__$1,inst_38903);
} else {
if((state_val_38906 === (2))){
var state_38905__$1 = state_38905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38905__$1,(4),ch);
} else {
if((state_val_38906 === (11))){
var inst_38885 = (state_38905[(8)]);
var inst_38894 = (state_38905[(2)]);
var inst_38882 = inst_38885;
var state_38905__$1 = (function (){var statearr_38915 = state_38905;
(statearr_38915[(7)] = inst_38882);

(statearr_38915[(10)] = inst_38894);

return statearr_38915;
})();
var statearr_38916_38934 = state_38905__$1;
(statearr_38916_38934[(2)] = null);

(statearr_38916_38934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38906 === (9))){
var inst_38885 = (state_38905[(8)]);
var state_38905__$1 = state_38905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38905__$1,(11),out,inst_38885);
} else {
if((state_val_38906 === (5))){
var inst_38882 = (state_38905[(7)]);
var inst_38885 = (state_38905[(8)]);
var inst_38889 = cljs.core._EQ_.call(null,inst_38885,inst_38882);
var state_38905__$1 = state_38905;
if(inst_38889){
var statearr_38918_38935 = state_38905__$1;
(statearr_38918_38935[(1)] = (8));

} else {
var statearr_38919_38936 = state_38905__$1;
(statearr_38919_38936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38906 === (10))){
var inst_38897 = (state_38905[(2)]);
var state_38905__$1 = state_38905;
var statearr_38920_38937 = state_38905__$1;
(statearr_38920_38937[(2)] = inst_38897);

(statearr_38920_38937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38906 === (8))){
var inst_38882 = (state_38905[(7)]);
var tmp38917 = inst_38882;
var inst_38882__$1 = tmp38917;
var state_38905__$1 = (function (){var statearr_38921 = state_38905;
(statearr_38921[(7)] = inst_38882__$1);

return statearr_38921;
})();
var statearr_38922_38938 = state_38905__$1;
(statearr_38922_38938[(2)] = null);

(statearr_38922_38938[(1)] = (2));


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
});})(c__34606__auto___38928,out))
;
return ((function (switch__34589__auto__,c__34606__auto___38928,out){
return (function() {
var cljs$core$async$state_machine__34590__auto__ = null;
var cljs$core$async$state_machine__34590__auto____0 = (function (){
var statearr_38923 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38923[(0)] = cljs$core$async$state_machine__34590__auto__);

(statearr_38923[(1)] = (1));

return statearr_38923;
});
var cljs$core$async$state_machine__34590__auto____1 = (function (state_38905){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_38905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e38924){if((e38924 instanceof Object)){
var ex__34593__auto__ = e38924;
var statearr_38925_38939 = state_38905;
(statearr_38925_38939[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38940 = state_38905;
state_38905 = G__38940;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$state_machine__34590__auto__ = function(state_38905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34590__auto____1.call(this,state_38905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34590__auto____0;
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34590__auto____1;
return cljs$core$async$state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto___38928,out))
})();
var state__34608__auto__ = (function (){var statearr_38926 = f__34607__auto__.call(null);
(statearr_38926[(6)] = c__34606__auto___38928);

return statearr_38926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto___38928,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38942 = arguments.length;
switch (G__38942) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34606__auto___39008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto___39008,out){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto___39008,out){
return (function (state_38980){
var state_val_38981 = (state_38980[(1)]);
if((state_val_38981 === (7))){
var inst_38976 = (state_38980[(2)]);
var state_38980__$1 = state_38980;
var statearr_38982_39009 = state_38980__$1;
(statearr_38982_39009[(2)] = inst_38976);

(statearr_38982_39009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (1))){
var inst_38943 = (new Array(n));
var inst_38944 = inst_38943;
var inst_38945 = (0);
var state_38980__$1 = (function (){var statearr_38983 = state_38980;
(statearr_38983[(7)] = inst_38945);

(statearr_38983[(8)] = inst_38944);

return statearr_38983;
})();
var statearr_38984_39010 = state_38980__$1;
(statearr_38984_39010[(2)] = null);

(statearr_38984_39010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (4))){
var inst_38948 = (state_38980[(9)]);
var inst_38948__$1 = (state_38980[(2)]);
var inst_38949 = (inst_38948__$1 == null);
var inst_38950 = cljs.core.not.call(null,inst_38949);
var state_38980__$1 = (function (){var statearr_38985 = state_38980;
(statearr_38985[(9)] = inst_38948__$1);

return statearr_38985;
})();
if(inst_38950){
var statearr_38986_39011 = state_38980__$1;
(statearr_38986_39011[(1)] = (5));

} else {
var statearr_38987_39012 = state_38980__$1;
(statearr_38987_39012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (15))){
var inst_38970 = (state_38980[(2)]);
var state_38980__$1 = state_38980;
var statearr_38988_39013 = state_38980__$1;
(statearr_38988_39013[(2)] = inst_38970);

(statearr_38988_39013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (13))){
var state_38980__$1 = state_38980;
var statearr_38989_39014 = state_38980__$1;
(statearr_38989_39014[(2)] = null);

(statearr_38989_39014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (6))){
var inst_38945 = (state_38980[(7)]);
var inst_38966 = (inst_38945 > (0));
var state_38980__$1 = state_38980;
if(cljs.core.truth_(inst_38966)){
var statearr_38990_39015 = state_38980__$1;
(statearr_38990_39015[(1)] = (12));

} else {
var statearr_38991_39016 = state_38980__$1;
(statearr_38991_39016[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (3))){
var inst_38978 = (state_38980[(2)]);
var state_38980__$1 = state_38980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38980__$1,inst_38978);
} else {
if((state_val_38981 === (12))){
var inst_38944 = (state_38980[(8)]);
var inst_38968 = cljs.core.vec.call(null,inst_38944);
var state_38980__$1 = state_38980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38980__$1,(15),out,inst_38968);
} else {
if((state_val_38981 === (2))){
var state_38980__$1 = state_38980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38980__$1,(4),ch);
} else {
if((state_val_38981 === (11))){
var inst_38960 = (state_38980[(2)]);
var inst_38961 = (new Array(n));
var inst_38944 = inst_38961;
var inst_38945 = (0);
var state_38980__$1 = (function (){var statearr_38992 = state_38980;
(statearr_38992[(7)] = inst_38945);

(statearr_38992[(10)] = inst_38960);

(statearr_38992[(8)] = inst_38944);

return statearr_38992;
})();
var statearr_38993_39017 = state_38980__$1;
(statearr_38993_39017[(2)] = null);

(statearr_38993_39017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (9))){
var inst_38944 = (state_38980[(8)]);
var inst_38958 = cljs.core.vec.call(null,inst_38944);
var state_38980__$1 = state_38980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38980__$1,(11),out,inst_38958);
} else {
if((state_val_38981 === (5))){
var inst_38948 = (state_38980[(9)]);
var inst_38945 = (state_38980[(7)]);
var inst_38944 = (state_38980[(8)]);
var inst_38953 = (state_38980[(11)]);
var inst_38952 = (inst_38944[inst_38945] = inst_38948);
var inst_38953__$1 = (inst_38945 + (1));
var inst_38954 = (inst_38953__$1 < n);
var state_38980__$1 = (function (){var statearr_38994 = state_38980;
(statearr_38994[(12)] = inst_38952);

(statearr_38994[(11)] = inst_38953__$1);

return statearr_38994;
})();
if(cljs.core.truth_(inst_38954)){
var statearr_38995_39018 = state_38980__$1;
(statearr_38995_39018[(1)] = (8));

} else {
var statearr_38996_39019 = state_38980__$1;
(statearr_38996_39019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (14))){
var inst_38973 = (state_38980[(2)]);
var inst_38974 = cljs.core.async.close_BANG_.call(null,out);
var state_38980__$1 = (function (){var statearr_38998 = state_38980;
(statearr_38998[(13)] = inst_38973);

return statearr_38998;
})();
var statearr_38999_39020 = state_38980__$1;
(statearr_38999_39020[(2)] = inst_38974);

(statearr_38999_39020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (10))){
var inst_38964 = (state_38980[(2)]);
var state_38980__$1 = state_38980;
var statearr_39000_39021 = state_38980__$1;
(statearr_39000_39021[(2)] = inst_38964);

(statearr_39000_39021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (8))){
var inst_38944 = (state_38980[(8)]);
var inst_38953 = (state_38980[(11)]);
var tmp38997 = inst_38944;
var inst_38944__$1 = tmp38997;
var inst_38945 = inst_38953;
var state_38980__$1 = (function (){var statearr_39001 = state_38980;
(statearr_39001[(7)] = inst_38945);

(statearr_39001[(8)] = inst_38944__$1);

return statearr_39001;
})();
var statearr_39002_39022 = state_38980__$1;
(statearr_39002_39022[(2)] = null);

(statearr_39002_39022[(1)] = (2));


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
});})(c__34606__auto___39008,out))
;
return ((function (switch__34589__auto__,c__34606__auto___39008,out){
return (function() {
var cljs$core$async$state_machine__34590__auto__ = null;
var cljs$core$async$state_machine__34590__auto____0 = (function (){
var statearr_39003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39003[(0)] = cljs$core$async$state_machine__34590__auto__);

(statearr_39003[(1)] = (1));

return statearr_39003;
});
var cljs$core$async$state_machine__34590__auto____1 = (function (state_38980){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_38980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e39004){if((e39004 instanceof Object)){
var ex__34593__auto__ = e39004;
var statearr_39005_39023 = state_38980;
(statearr_39005_39023[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39024 = state_38980;
state_38980 = G__39024;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$state_machine__34590__auto__ = function(state_38980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34590__auto____1.call(this,state_38980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34590__auto____0;
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34590__auto____1;
return cljs$core$async$state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto___39008,out))
})();
var state__34608__auto__ = (function (){var statearr_39006 = f__34607__auto__.call(null);
(statearr_39006[(6)] = c__34606__auto___39008);

return statearr_39006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto___39008,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39026 = arguments.length;
switch (G__39026) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34606__auto___39096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34606__auto___39096,out){
return (function (){
var f__34607__auto__ = (function (){var switch__34589__auto__ = ((function (c__34606__auto___39096,out){
return (function (state_39068){
var state_val_39069 = (state_39068[(1)]);
if((state_val_39069 === (7))){
var inst_39064 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
var statearr_39070_39097 = state_39068__$1;
(statearr_39070_39097[(2)] = inst_39064);

(statearr_39070_39097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (1))){
var inst_39027 = [];
var inst_39028 = inst_39027;
var inst_39029 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39068__$1 = (function (){var statearr_39071 = state_39068;
(statearr_39071[(7)] = inst_39028);

(statearr_39071[(8)] = inst_39029);

return statearr_39071;
})();
var statearr_39072_39098 = state_39068__$1;
(statearr_39072_39098[(2)] = null);

(statearr_39072_39098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (4))){
var inst_39032 = (state_39068[(9)]);
var inst_39032__$1 = (state_39068[(2)]);
var inst_39033 = (inst_39032__$1 == null);
var inst_39034 = cljs.core.not.call(null,inst_39033);
var state_39068__$1 = (function (){var statearr_39073 = state_39068;
(statearr_39073[(9)] = inst_39032__$1);

return statearr_39073;
})();
if(inst_39034){
var statearr_39074_39099 = state_39068__$1;
(statearr_39074_39099[(1)] = (5));

} else {
var statearr_39075_39100 = state_39068__$1;
(statearr_39075_39100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (15))){
var inst_39058 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
var statearr_39076_39101 = state_39068__$1;
(statearr_39076_39101[(2)] = inst_39058);

(statearr_39076_39101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (13))){
var state_39068__$1 = state_39068;
var statearr_39077_39102 = state_39068__$1;
(statearr_39077_39102[(2)] = null);

(statearr_39077_39102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (6))){
var inst_39028 = (state_39068[(7)]);
var inst_39053 = inst_39028.length;
var inst_39054 = (inst_39053 > (0));
var state_39068__$1 = state_39068;
if(cljs.core.truth_(inst_39054)){
var statearr_39078_39103 = state_39068__$1;
(statearr_39078_39103[(1)] = (12));

} else {
var statearr_39079_39104 = state_39068__$1;
(statearr_39079_39104[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (3))){
var inst_39066 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39068__$1,inst_39066);
} else {
if((state_val_39069 === (12))){
var inst_39028 = (state_39068[(7)]);
var inst_39056 = cljs.core.vec.call(null,inst_39028);
var state_39068__$1 = state_39068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39068__$1,(15),out,inst_39056);
} else {
if((state_val_39069 === (2))){
var state_39068__$1 = state_39068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39068__$1,(4),ch);
} else {
if((state_val_39069 === (11))){
var inst_39032 = (state_39068[(9)]);
var inst_39036 = (state_39068[(10)]);
var inst_39046 = (state_39068[(2)]);
var inst_39047 = [];
var inst_39048 = inst_39047.push(inst_39032);
var inst_39028 = inst_39047;
var inst_39029 = inst_39036;
var state_39068__$1 = (function (){var statearr_39080 = state_39068;
(statearr_39080[(7)] = inst_39028);

(statearr_39080[(8)] = inst_39029);

(statearr_39080[(11)] = inst_39046);

(statearr_39080[(12)] = inst_39048);

return statearr_39080;
})();
var statearr_39081_39105 = state_39068__$1;
(statearr_39081_39105[(2)] = null);

(statearr_39081_39105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (9))){
var inst_39028 = (state_39068[(7)]);
var inst_39044 = cljs.core.vec.call(null,inst_39028);
var state_39068__$1 = state_39068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39068__$1,(11),out,inst_39044);
} else {
if((state_val_39069 === (5))){
var inst_39032 = (state_39068[(9)]);
var inst_39029 = (state_39068[(8)]);
var inst_39036 = (state_39068[(10)]);
var inst_39036__$1 = f.call(null,inst_39032);
var inst_39037 = cljs.core._EQ_.call(null,inst_39036__$1,inst_39029);
var inst_39038 = cljs.core.keyword_identical_QMARK_.call(null,inst_39029,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39039 = ((inst_39037) || (inst_39038));
var state_39068__$1 = (function (){var statearr_39082 = state_39068;
(statearr_39082[(10)] = inst_39036__$1);

return statearr_39082;
})();
if(cljs.core.truth_(inst_39039)){
var statearr_39083_39106 = state_39068__$1;
(statearr_39083_39106[(1)] = (8));

} else {
var statearr_39084_39107 = state_39068__$1;
(statearr_39084_39107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (14))){
var inst_39061 = (state_39068[(2)]);
var inst_39062 = cljs.core.async.close_BANG_.call(null,out);
var state_39068__$1 = (function (){var statearr_39086 = state_39068;
(statearr_39086[(13)] = inst_39061);

return statearr_39086;
})();
var statearr_39087_39108 = state_39068__$1;
(statearr_39087_39108[(2)] = inst_39062);

(statearr_39087_39108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (10))){
var inst_39051 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
var statearr_39088_39109 = state_39068__$1;
(statearr_39088_39109[(2)] = inst_39051);

(statearr_39088_39109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (8))){
var inst_39028 = (state_39068[(7)]);
var inst_39032 = (state_39068[(9)]);
var inst_39036 = (state_39068[(10)]);
var inst_39041 = inst_39028.push(inst_39032);
var tmp39085 = inst_39028;
var inst_39028__$1 = tmp39085;
var inst_39029 = inst_39036;
var state_39068__$1 = (function (){var statearr_39089 = state_39068;
(statearr_39089[(7)] = inst_39028__$1);

(statearr_39089[(14)] = inst_39041);

(statearr_39089[(8)] = inst_39029);

return statearr_39089;
})();
var statearr_39090_39110 = state_39068__$1;
(statearr_39090_39110[(2)] = null);

(statearr_39090_39110[(1)] = (2));


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
});})(c__34606__auto___39096,out))
;
return ((function (switch__34589__auto__,c__34606__auto___39096,out){
return (function() {
var cljs$core$async$state_machine__34590__auto__ = null;
var cljs$core$async$state_machine__34590__auto____0 = (function (){
var statearr_39091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39091[(0)] = cljs$core$async$state_machine__34590__auto__);

(statearr_39091[(1)] = (1));

return statearr_39091;
});
var cljs$core$async$state_machine__34590__auto____1 = (function (state_39068){
while(true){
var ret_value__34591__auto__ = (function (){try{while(true){
var result__34592__auto__ = switch__34589__auto__.call(null,state_39068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34592__auto__;
}
break;
}
}catch (e39092){if((e39092 instanceof Object)){
var ex__34593__auto__ = e39092;
var statearr_39093_39111 = state_39068;
(statearr_39093_39111[(5)] = ex__34593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34591__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39112 = state_39068;
state_39068 = G__39112;
continue;
} else {
return ret_value__34591__auto__;
}
break;
}
});
cljs$core$async$state_machine__34590__auto__ = function(state_39068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34590__auto____1.call(this,state_39068);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34590__auto____0;
cljs$core$async$state_machine__34590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34590__auto____1;
return cljs$core$async$state_machine__34590__auto__;
})()
;})(switch__34589__auto__,c__34606__auto___39096,out))
})();
var state__34608__auto__ = (function (){var statearr_39094 = f__34607__auto__.call(null);
(statearr_39094[(6)] = c__34606__auto___39096);

return statearr_39094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34608__auto__);
});})(c__34606__auto___39096,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
