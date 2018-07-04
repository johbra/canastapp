// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26723 = arguments.length;
switch (G__26723) {
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
if(typeof cljs.core.async.t_cljs$core$async26724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26724 = (function (f,blockable,meta26725){
this.f = f;
this.blockable = blockable;
this.meta26725 = meta26725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26726,meta26725__$1){
var self__ = this;
var _26726__$1 = this;
return (new cljs.core.async.t_cljs$core$async26724(self__.f,self__.blockable,meta26725__$1));
});

cljs.core.async.t_cljs$core$async26724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26726){
var self__ = this;
var _26726__$1 = this;
return self__.meta26725;
});

cljs.core.async.t_cljs$core$async26724.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26724.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26724.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26724.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26725","meta26725",-1353641417,null)], null);
});

cljs.core.async.t_cljs$core$async26724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26724";

cljs.core.async.t_cljs$core$async26724.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26724");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26724.
 */
cljs.core.async.__GT_t_cljs$core$async26724 = (function cljs$core$async$__GT_t_cljs$core$async26724(f__$1,blockable__$1,meta26725){
return (new cljs.core.async.t_cljs$core$async26724(f__$1,blockable__$1,meta26725));
});

}

return (new cljs.core.async.t_cljs$core$async26724(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26730 = arguments.length;
switch (G__26730) {
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
var G__26733 = arguments.length;
switch (G__26733) {
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
var G__26736 = arguments.length;
switch (G__26736) {
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
var val_26738 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26738);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26738,ret){
return (function (){
return fn1.call(null,val_26738);
});})(val_26738,ret))
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
var G__26740 = arguments.length;
switch (G__26740) {
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
var n__4376__auto___26742 = n;
var x_26743 = (0);
while(true){
if((x_26743 < n__4376__auto___26742)){
(a[x_26743] = (0));

var G__26744 = (x_26743 + (1));
x_26743 = G__26744;
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

var G__26745 = (i + (1));
i = G__26745;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26746 = (function (flag,meta26747){
this.flag = flag;
this.meta26747 = meta26747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26748,meta26747__$1){
var self__ = this;
var _26748__$1 = this;
return (new cljs.core.async.t_cljs$core$async26746(self__.flag,meta26747__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26748){
var self__ = this;
var _26748__$1 = this;
return self__.meta26747;
});})(flag))
;

cljs.core.async.t_cljs$core$async26746.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26746.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26746.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26747","meta26747",1532024212,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26746";

cljs.core.async.t_cljs$core$async26746.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26746");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26746.
 */
cljs.core.async.__GT_t_cljs$core$async26746 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26746(flag__$1,meta26747){
return (new cljs.core.async.t_cljs$core$async26746(flag__$1,meta26747));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26746(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26749 = (function (flag,cb,meta26750){
this.flag = flag;
this.cb = cb;
this.meta26750 = meta26750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26751,meta26750__$1){
var self__ = this;
var _26751__$1 = this;
return (new cljs.core.async.t_cljs$core$async26749(self__.flag,self__.cb,meta26750__$1));
});

cljs.core.async.t_cljs$core$async26749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26751){
var self__ = this;
var _26751__$1 = this;
return self__.meta26750;
});

cljs.core.async.t_cljs$core$async26749.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26749.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26750","meta26750",364660246,null)], null);
});

cljs.core.async.t_cljs$core$async26749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26749";

cljs.core.async.t_cljs$core$async26749.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26749");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26749.
 */
cljs.core.async.__GT_t_cljs$core$async26749 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26749(flag__$1,cb__$1,meta26750){
return (new cljs.core.async.t_cljs$core$async26749(flag__$1,cb__$1,meta26750));
});

}

return (new cljs.core.async.t_cljs$core$async26749(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26752_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26752_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26753_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26753_SHARP_,port], null));
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
var G__26754 = (i + (1));
i = G__26754;
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
var len__4499__auto___26760 = arguments.length;
var i__4500__auto___26761 = (0);
while(true){
if((i__4500__auto___26761 < len__4499__auto___26760)){
args__4502__auto__.push((arguments[i__4500__auto___26761]));

var G__26762 = (i__4500__auto___26761 + (1));
i__4500__auto___26761 = G__26762;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26757){
var map__26758 = p__26757;
var map__26758__$1 = ((((!((map__26758 == null)))?(((((map__26758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26758):map__26758);
var opts = map__26758__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26755){
var G__26756 = cljs.core.first.call(null,seq26755);
var seq26755__$1 = cljs.core.next.call(null,seq26755);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26756,seq26755__$1);
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
var G__26764 = arguments.length;
switch (G__26764) {
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
var c__26663__auto___26810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___26810){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___26810){
return (function (state_26788){
var state_val_26789 = (state_26788[(1)]);
if((state_val_26789 === (7))){
var inst_26784 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
var statearr_26790_26811 = state_26788__$1;
(statearr_26790_26811[(2)] = inst_26784);

(statearr_26790_26811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (1))){
var state_26788__$1 = state_26788;
var statearr_26791_26812 = state_26788__$1;
(statearr_26791_26812[(2)] = null);

(statearr_26791_26812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (4))){
var inst_26767 = (state_26788[(7)]);
var inst_26767__$1 = (state_26788[(2)]);
var inst_26768 = (inst_26767__$1 == null);
var state_26788__$1 = (function (){var statearr_26792 = state_26788;
(statearr_26792[(7)] = inst_26767__$1);

return statearr_26792;
})();
if(cljs.core.truth_(inst_26768)){
var statearr_26793_26813 = state_26788__$1;
(statearr_26793_26813[(1)] = (5));

} else {
var statearr_26794_26814 = state_26788__$1;
(statearr_26794_26814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (13))){
var state_26788__$1 = state_26788;
var statearr_26795_26815 = state_26788__$1;
(statearr_26795_26815[(2)] = null);

(statearr_26795_26815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (6))){
var inst_26767 = (state_26788[(7)]);
var state_26788__$1 = state_26788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26788__$1,(11),to,inst_26767);
} else {
if((state_val_26789 === (3))){
var inst_26786 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26788__$1,inst_26786);
} else {
if((state_val_26789 === (12))){
var state_26788__$1 = state_26788;
var statearr_26796_26816 = state_26788__$1;
(statearr_26796_26816[(2)] = null);

(statearr_26796_26816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (2))){
var state_26788__$1 = state_26788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26788__$1,(4),from);
} else {
if((state_val_26789 === (11))){
var inst_26777 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
if(cljs.core.truth_(inst_26777)){
var statearr_26797_26817 = state_26788__$1;
(statearr_26797_26817[(1)] = (12));

} else {
var statearr_26798_26818 = state_26788__$1;
(statearr_26798_26818[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (9))){
var state_26788__$1 = state_26788;
var statearr_26799_26819 = state_26788__$1;
(statearr_26799_26819[(2)] = null);

(statearr_26799_26819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (5))){
var state_26788__$1 = state_26788;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26800_26820 = state_26788__$1;
(statearr_26800_26820[(1)] = (8));

} else {
var statearr_26801_26821 = state_26788__$1;
(statearr_26801_26821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (14))){
var inst_26782 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
var statearr_26802_26822 = state_26788__$1;
(statearr_26802_26822[(2)] = inst_26782);

(statearr_26802_26822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (10))){
var inst_26774 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
var statearr_26803_26823 = state_26788__$1;
(statearr_26803_26823[(2)] = inst_26774);

(statearr_26803_26823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (8))){
var inst_26771 = cljs.core.async.close_BANG_.call(null,to);
var state_26788__$1 = state_26788;
var statearr_26804_26824 = state_26788__$1;
(statearr_26804_26824[(2)] = inst_26771);

(statearr_26804_26824[(1)] = (10));


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
});})(c__26663__auto___26810))
;
return ((function (switch__26573__auto__,c__26663__auto___26810){
return (function() {
var cljs$core$async$state_machine__26574__auto__ = null;
var cljs$core$async$state_machine__26574__auto____0 = (function (){
var statearr_26805 = [null,null,null,null,null,null,null,null];
(statearr_26805[(0)] = cljs$core$async$state_machine__26574__auto__);

(statearr_26805[(1)] = (1));

return statearr_26805;
});
var cljs$core$async$state_machine__26574__auto____1 = (function (state_26788){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_26788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e26806){if((e26806 instanceof Object)){
var ex__26577__auto__ = e26806;
var statearr_26807_26825 = state_26788;
(statearr_26807_26825[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26826 = state_26788;
state_26788 = G__26826;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$state_machine__26574__auto__ = function(state_26788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26574__auto____1.call(this,state_26788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26574__auto____0;
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26574__auto____1;
return cljs$core$async$state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___26810))
})();
var state__26665__auto__ = (function (){var statearr_26808 = f__26664__auto__.call(null);
(statearr_26808[(6)] = c__26663__auto___26810);

return statearr_26808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___26810))
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
return (function (p__26827){
var vec__26828 = p__26827;
var v = cljs.core.nth.call(null,vec__26828,(0),null);
var p = cljs.core.nth.call(null,vec__26828,(1),null);
var job = vec__26828;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26663__auto___26999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___26999,res,vec__26828,v,p,job,jobs,results){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___26999,res,vec__26828,v,p,job,jobs,results){
return (function (state_26835){
var state_val_26836 = (state_26835[(1)]);
if((state_val_26836 === (1))){
var state_26835__$1 = state_26835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26835__$1,(2),res,v);
} else {
if((state_val_26836 === (2))){
var inst_26832 = (state_26835[(2)]);
var inst_26833 = cljs.core.async.close_BANG_.call(null,res);
var state_26835__$1 = (function (){var statearr_26837 = state_26835;
(statearr_26837[(7)] = inst_26832);

return statearr_26837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26835__$1,inst_26833);
} else {
return null;
}
}
});})(c__26663__auto___26999,res,vec__26828,v,p,job,jobs,results))
;
return ((function (switch__26573__auto__,c__26663__auto___26999,res,vec__26828,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0 = (function (){
var statearr_26838 = [null,null,null,null,null,null,null,null];
(statearr_26838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__);

(statearr_26838[(1)] = (1));

return statearr_26838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1 = (function (state_26835){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_26835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e26839){if((e26839 instanceof Object)){
var ex__26577__auto__ = e26839;
var statearr_26840_27000 = state_26835;
(statearr_26840_27000[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27001 = state_26835;
state_26835 = G__27001;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__ = function(state_26835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1.call(this,state_26835);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___26999,res,vec__26828,v,p,job,jobs,results))
})();
var state__26665__auto__ = (function (){var statearr_26841 = f__26664__auto__.call(null);
(statearr_26841[(6)] = c__26663__auto___26999);

return statearr_26841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___26999,res,vec__26828,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26842){
var vec__26843 = p__26842;
var v = cljs.core.nth.call(null,vec__26843,(0),null);
var p = cljs.core.nth.call(null,vec__26843,(1),null);
var job = vec__26843;
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
var n__4376__auto___27002 = n;
var __27003 = (0);
while(true){
if((__27003 < n__4376__auto___27002)){
var G__26846_27004 = type;
var G__26846_27005__$1 = (((G__26846_27004 instanceof cljs.core.Keyword))?G__26846_27004.fqn:null);
switch (G__26846_27005__$1) {
case "compute":
var c__26663__auto___27007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27003,c__26663__auto___27007,G__26846_27004,G__26846_27005__$1,n__4376__auto___27002,jobs,results,process,async){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (__27003,c__26663__auto___27007,G__26846_27004,G__26846_27005__$1,n__4376__auto___27002,jobs,results,process,async){
return (function (state_26859){
var state_val_26860 = (state_26859[(1)]);
if((state_val_26860 === (1))){
var state_26859__$1 = state_26859;
var statearr_26861_27008 = state_26859__$1;
(statearr_26861_27008[(2)] = null);

(statearr_26861_27008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26860 === (2))){
var state_26859__$1 = state_26859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26859__$1,(4),jobs);
} else {
if((state_val_26860 === (3))){
var inst_26857 = (state_26859[(2)]);
var state_26859__$1 = state_26859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26859__$1,inst_26857);
} else {
if((state_val_26860 === (4))){
var inst_26849 = (state_26859[(2)]);
var inst_26850 = process.call(null,inst_26849);
var state_26859__$1 = state_26859;
if(cljs.core.truth_(inst_26850)){
var statearr_26862_27009 = state_26859__$1;
(statearr_26862_27009[(1)] = (5));

} else {
var statearr_26863_27010 = state_26859__$1;
(statearr_26863_27010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26860 === (5))){
var state_26859__$1 = state_26859;
var statearr_26864_27011 = state_26859__$1;
(statearr_26864_27011[(2)] = null);

(statearr_26864_27011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26860 === (6))){
var state_26859__$1 = state_26859;
var statearr_26865_27012 = state_26859__$1;
(statearr_26865_27012[(2)] = null);

(statearr_26865_27012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26860 === (7))){
var inst_26855 = (state_26859[(2)]);
var state_26859__$1 = state_26859;
var statearr_26866_27013 = state_26859__$1;
(statearr_26866_27013[(2)] = inst_26855);

(statearr_26866_27013[(1)] = (3));


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
});})(__27003,c__26663__auto___27007,G__26846_27004,G__26846_27005__$1,n__4376__auto___27002,jobs,results,process,async))
;
return ((function (__27003,switch__26573__auto__,c__26663__auto___27007,G__26846_27004,G__26846_27005__$1,n__4376__auto___27002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0 = (function (){
var statearr_26867 = [null,null,null,null,null,null,null];
(statearr_26867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__);

(statearr_26867[(1)] = (1));

return statearr_26867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1 = (function (state_26859){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_26859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e26868){if((e26868 instanceof Object)){
var ex__26577__auto__ = e26868;
var statearr_26869_27014 = state_26859;
(statearr_26869_27014[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27015 = state_26859;
state_26859 = G__27015;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__ = function(state_26859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1.call(this,state_26859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__;
})()
;})(__27003,switch__26573__auto__,c__26663__auto___27007,G__26846_27004,G__26846_27005__$1,n__4376__auto___27002,jobs,results,process,async))
})();
var state__26665__auto__ = (function (){var statearr_26870 = f__26664__auto__.call(null);
(statearr_26870[(6)] = c__26663__auto___27007);

return statearr_26870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(__27003,c__26663__auto___27007,G__26846_27004,G__26846_27005__$1,n__4376__auto___27002,jobs,results,process,async))
);


break;
case "async":
var c__26663__auto___27016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27003,c__26663__auto___27016,G__26846_27004,G__26846_27005__$1,n__4376__auto___27002,jobs,results,process,async){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (__27003,c__26663__auto___27016,G__26846_27004,G__26846_27005__$1,n__4376__auto___27002,jobs,results,process,async){
return (function (state_26883){
var state_val_26884 = (state_26883[(1)]);
if((state_val_26884 === (1))){
var state_26883__$1 = state_26883;
var statearr_26885_27017 = state_26883__$1;
(statearr_26885_27017[(2)] = null);

(statearr_26885_27017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (2))){
var state_26883__$1 = state_26883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26883__$1,(4),jobs);
} else {
if((state_val_26884 === (3))){
var inst_26881 = (state_26883[(2)]);
var state_26883__$1 = state_26883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26883__$1,inst_26881);
} else {
if((state_val_26884 === (4))){
var inst_26873 = (state_26883[(2)]);
var inst_26874 = async.call(null,inst_26873);
var state_26883__$1 = state_26883;
if(cljs.core.truth_(inst_26874)){
var statearr_26886_27018 = state_26883__$1;
(statearr_26886_27018[(1)] = (5));

} else {
var statearr_26887_27019 = state_26883__$1;
(statearr_26887_27019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (5))){
var state_26883__$1 = state_26883;
var statearr_26888_27020 = state_26883__$1;
(statearr_26888_27020[(2)] = null);

(statearr_26888_27020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (6))){
var state_26883__$1 = state_26883;
var statearr_26889_27021 = state_26883__$1;
(statearr_26889_27021[(2)] = null);

(statearr_26889_27021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (7))){
var inst_26879 = (state_26883[(2)]);
var state_26883__$1 = state_26883;
var statearr_26890_27022 = state_26883__$1;
(statearr_26890_27022[(2)] = inst_26879);

(statearr_26890_27022[(1)] = (3));


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
});})(__27003,c__26663__auto___27016,G__26846_27004,G__26846_27005__$1,n__4376__auto___27002,jobs,results,process,async))
;
return ((function (__27003,switch__26573__auto__,c__26663__auto___27016,G__26846_27004,G__26846_27005__$1,n__4376__auto___27002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0 = (function (){
var statearr_26891 = [null,null,null,null,null,null,null];
(statearr_26891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__);

(statearr_26891[(1)] = (1));

return statearr_26891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1 = (function (state_26883){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_26883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e26892){if((e26892 instanceof Object)){
var ex__26577__auto__ = e26892;
var statearr_26893_27023 = state_26883;
(statearr_26893_27023[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27024 = state_26883;
state_26883 = G__27024;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__ = function(state_26883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1.call(this,state_26883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__;
})()
;})(__27003,switch__26573__auto__,c__26663__auto___27016,G__26846_27004,G__26846_27005__$1,n__4376__auto___27002,jobs,results,process,async))
})();
var state__26665__auto__ = (function (){var statearr_26894 = f__26664__auto__.call(null);
(statearr_26894[(6)] = c__26663__auto___27016);

return statearr_26894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(__27003,c__26663__auto___27016,G__26846_27004,G__26846_27005__$1,n__4376__auto___27002,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26846_27005__$1)].join('')));

}

var G__27025 = (__27003 + (1));
__27003 = G__27025;
continue;
} else {
}
break;
}

var c__26663__auto___27026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___27026,jobs,results,process,async){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___27026,jobs,results,process,async){
return (function (state_26916){
var state_val_26917 = (state_26916[(1)]);
if((state_val_26917 === (1))){
var state_26916__$1 = state_26916;
var statearr_26918_27027 = state_26916__$1;
(statearr_26918_27027[(2)] = null);

(statearr_26918_27027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (2))){
var state_26916__$1 = state_26916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26916__$1,(4),from);
} else {
if((state_val_26917 === (3))){
var inst_26914 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26916__$1,inst_26914);
} else {
if((state_val_26917 === (4))){
var inst_26897 = (state_26916[(7)]);
var inst_26897__$1 = (state_26916[(2)]);
var inst_26898 = (inst_26897__$1 == null);
var state_26916__$1 = (function (){var statearr_26919 = state_26916;
(statearr_26919[(7)] = inst_26897__$1);

return statearr_26919;
})();
if(cljs.core.truth_(inst_26898)){
var statearr_26920_27028 = state_26916__$1;
(statearr_26920_27028[(1)] = (5));

} else {
var statearr_26921_27029 = state_26916__$1;
(statearr_26921_27029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (5))){
var inst_26900 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26916__$1 = state_26916;
var statearr_26922_27030 = state_26916__$1;
(statearr_26922_27030[(2)] = inst_26900);

(statearr_26922_27030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (6))){
var inst_26897 = (state_26916[(7)]);
var inst_26902 = (state_26916[(8)]);
var inst_26902__$1 = cljs.core.async.chan.call(null,(1));
var inst_26903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26904 = [inst_26897,inst_26902__$1];
var inst_26905 = (new cljs.core.PersistentVector(null,2,(5),inst_26903,inst_26904,null));
var state_26916__$1 = (function (){var statearr_26923 = state_26916;
(statearr_26923[(8)] = inst_26902__$1);

return statearr_26923;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26916__$1,(8),jobs,inst_26905);
} else {
if((state_val_26917 === (7))){
var inst_26912 = (state_26916[(2)]);
var state_26916__$1 = state_26916;
var statearr_26924_27031 = state_26916__$1;
(statearr_26924_27031[(2)] = inst_26912);

(statearr_26924_27031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26917 === (8))){
var inst_26902 = (state_26916[(8)]);
var inst_26907 = (state_26916[(2)]);
var state_26916__$1 = (function (){var statearr_26925 = state_26916;
(statearr_26925[(9)] = inst_26907);

return statearr_26925;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26916__$1,(9),results,inst_26902);
} else {
if((state_val_26917 === (9))){
var inst_26909 = (state_26916[(2)]);
var state_26916__$1 = (function (){var statearr_26926 = state_26916;
(statearr_26926[(10)] = inst_26909);

return statearr_26926;
})();
var statearr_26927_27032 = state_26916__$1;
(statearr_26927_27032[(2)] = null);

(statearr_26927_27032[(1)] = (2));


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
});})(c__26663__auto___27026,jobs,results,process,async))
;
return ((function (switch__26573__auto__,c__26663__auto___27026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0 = (function (){
var statearr_26928 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__);

(statearr_26928[(1)] = (1));

return statearr_26928;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1 = (function (state_26916){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_26916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e26929){if((e26929 instanceof Object)){
var ex__26577__auto__ = e26929;
var statearr_26930_27033 = state_26916;
(statearr_26930_27033[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27034 = state_26916;
state_26916 = G__27034;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__ = function(state_26916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1.call(this,state_26916);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___27026,jobs,results,process,async))
})();
var state__26665__auto__ = (function (){var statearr_26931 = f__26664__auto__.call(null);
(statearr_26931[(6)] = c__26663__auto___27026);

return statearr_26931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___27026,jobs,results,process,async))
);


var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__,jobs,results,process,async){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__,jobs,results,process,async){
return (function (state_26969){
var state_val_26970 = (state_26969[(1)]);
if((state_val_26970 === (7))){
var inst_26965 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
var statearr_26971_27035 = state_26969__$1;
(statearr_26971_27035[(2)] = inst_26965);

(statearr_26971_27035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (20))){
var state_26969__$1 = state_26969;
var statearr_26972_27036 = state_26969__$1;
(statearr_26972_27036[(2)] = null);

(statearr_26972_27036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (1))){
var state_26969__$1 = state_26969;
var statearr_26973_27037 = state_26969__$1;
(statearr_26973_27037[(2)] = null);

(statearr_26973_27037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (4))){
var inst_26934 = (state_26969[(7)]);
var inst_26934__$1 = (state_26969[(2)]);
var inst_26935 = (inst_26934__$1 == null);
var state_26969__$1 = (function (){var statearr_26974 = state_26969;
(statearr_26974[(7)] = inst_26934__$1);

return statearr_26974;
})();
if(cljs.core.truth_(inst_26935)){
var statearr_26975_27038 = state_26969__$1;
(statearr_26975_27038[(1)] = (5));

} else {
var statearr_26976_27039 = state_26969__$1;
(statearr_26976_27039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (15))){
var inst_26947 = (state_26969[(8)]);
var state_26969__$1 = state_26969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26969__$1,(18),to,inst_26947);
} else {
if((state_val_26970 === (21))){
var inst_26960 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
var statearr_26977_27040 = state_26969__$1;
(statearr_26977_27040[(2)] = inst_26960);

(statearr_26977_27040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (13))){
var inst_26962 = (state_26969[(2)]);
var state_26969__$1 = (function (){var statearr_26978 = state_26969;
(statearr_26978[(9)] = inst_26962);

return statearr_26978;
})();
var statearr_26979_27041 = state_26969__$1;
(statearr_26979_27041[(2)] = null);

(statearr_26979_27041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (6))){
var inst_26934 = (state_26969[(7)]);
var state_26969__$1 = state_26969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26969__$1,(11),inst_26934);
} else {
if((state_val_26970 === (17))){
var inst_26955 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
if(cljs.core.truth_(inst_26955)){
var statearr_26980_27042 = state_26969__$1;
(statearr_26980_27042[(1)] = (19));

} else {
var statearr_26981_27043 = state_26969__$1;
(statearr_26981_27043[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (3))){
var inst_26967 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26969__$1,inst_26967);
} else {
if((state_val_26970 === (12))){
var inst_26944 = (state_26969[(10)]);
var state_26969__$1 = state_26969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26969__$1,(14),inst_26944);
} else {
if((state_val_26970 === (2))){
var state_26969__$1 = state_26969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26969__$1,(4),results);
} else {
if((state_val_26970 === (19))){
var state_26969__$1 = state_26969;
var statearr_26982_27044 = state_26969__$1;
(statearr_26982_27044[(2)] = null);

(statearr_26982_27044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (11))){
var inst_26944 = (state_26969[(2)]);
var state_26969__$1 = (function (){var statearr_26983 = state_26969;
(statearr_26983[(10)] = inst_26944);

return statearr_26983;
})();
var statearr_26984_27045 = state_26969__$1;
(statearr_26984_27045[(2)] = null);

(statearr_26984_27045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (9))){
var state_26969__$1 = state_26969;
var statearr_26985_27046 = state_26969__$1;
(statearr_26985_27046[(2)] = null);

(statearr_26985_27046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (5))){
var state_26969__$1 = state_26969;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26986_27047 = state_26969__$1;
(statearr_26986_27047[(1)] = (8));

} else {
var statearr_26987_27048 = state_26969__$1;
(statearr_26987_27048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (14))){
var inst_26947 = (state_26969[(8)]);
var inst_26949 = (state_26969[(11)]);
var inst_26947__$1 = (state_26969[(2)]);
var inst_26948 = (inst_26947__$1 == null);
var inst_26949__$1 = cljs.core.not.call(null,inst_26948);
var state_26969__$1 = (function (){var statearr_26988 = state_26969;
(statearr_26988[(8)] = inst_26947__$1);

(statearr_26988[(11)] = inst_26949__$1);

return statearr_26988;
})();
if(inst_26949__$1){
var statearr_26989_27049 = state_26969__$1;
(statearr_26989_27049[(1)] = (15));

} else {
var statearr_26990_27050 = state_26969__$1;
(statearr_26990_27050[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (16))){
var inst_26949 = (state_26969[(11)]);
var state_26969__$1 = state_26969;
var statearr_26991_27051 = state_26969__$1;
(statearr_26991_27051[(2)] = inst_26949);

(statearr_26991_27051[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (10))){
var inst_26941 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
var statearr_26992_27052 = state_26969__$1;
(statearr_26992_27052[(2)] = inst_26941);

(statearr_26992_27052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (18))){
var inst_26952 = (state_26969[(2)]);
var state_26969__$1 = state_26969;
var statearr_26993_27053 = state_26969__$1;
(statearr_26993_27053[(2)] = inst_26952);

(statearr_26993_27053[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26970 === (8))){
var inst_26938 = cljs.core.async.close_BANG_.call(null,to);
var state_26969__$1 = state_26969;
var statearr_26994_27054 = state_26969__$1;
(statearr_26994_27054[(2)] = inst_26938);

(statearr_26994_27054[(1)] = (10));


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
});})(c__26663__auto__,jobs,results,process,async))
;
return ((function (switch__26573__auto__,c__26663__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0 = (function (){
var statearr_26995 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__);

(statearr_26995[(1)] = (1));

return statearr_26995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1 = (function (state_26969){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_26969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e26996){if((e26996 instanceof Object)){
var ex__26577__auto__ = e26996;
var statearr_26997_27055 = state_26969;
(statearr_26997_27055[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27056 = state_26969;
state_26969 = G__27056;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__ = function(state_26969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1.call(this,state_26969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__,jobs,results,process,async))
})();
var state__26665__auto__ = (function (){var statearr_26998 = f__26664__auto__.call(null);
(statearr_26998[(6)] = c__26663__auto__);

return statearr_26998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__,jobs,results,process,async))
);

return c__26663__auto__;
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
var G__27058 = arguments.length;
switch (G__27058) {
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
var G__27061 = arguments.length;
switch (G__27061) {
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
var G__27064 = arguments.length;
switch (G__27064) {
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
var c__26663__auto___27113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___27113,tc,fc){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___27113,tc,fc){
return (function (state_27090){
var state_val_27091 = (state_27090[(1)]);
if((state_val_27091 === (7))){
var inst_27086 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
var statearr_27092_27114 = state_27090__$1;
(statearr_27092_27114[(2)] = inst_27086);

(statearr_27092_27114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (1))){
var state_27090__$1 = state_27090;
var statearr_27093_27115 = state_27090__$1;
(statearr_27093_27115[(2)] = null);

(statearr_27093_27115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (4))){
var inst_27067 = (state_27090[(7)]);
var inst_27067__$1 = (state_27090[(2)]);
var inst_27068 = (inst_27067__$1 == null);
var state_27090__$1 = (function (){var statearr_27094 = state_27090;
(statearr_27094[(7)] = inst_27067__$1);

return statearr_27094;
})();
if(cljs.core.truth_(inst_27068)){
var statearr_27095_27116 = state_27090__$1;
(statearr_27095_27116[(1)] = (5));

} else {
var statearr_27096_27117 = state_27090__$1;
(statearr_27096_27117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (13))){
var state_27090__$1 = state_27090;
var statearr_27097_27118 = state_27090__$1;
(statearr_27097_27118[(2)] = null);

(statearr_27097_27118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (6))){
var inst_27067 = (state_27090[(7)]);
var inst_27073 = p.call(null,inst_27067);
var state_27090__$1 = state_27090;
if(cljs.core.truth_(inst_27073)){
var statearr_27098_27119 = state_27090__$1;
(statearr_27098_27119[(1)] = (9));

} else {
var statearr_27099_27120 = state_27090__$1;
(statearr_27099_27120[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (3))){
var inst_27088 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27090__$1,inst_27088);
} else {
if((state_val_27091 === (12))){
var state_27090__$1 = state_27090;
var statearr_27100_27121 = state_27090__$1;
(statearr_27100_27121[(2)] = null);

(statearr_27100_27121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (2))){
var state_27090__$1 = state_27090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27090__$1,(4),ch);
} else {
if((state_val_27091 === (11))){
var inst_27067 = (state_27090[(7)]);
var inst_27077 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27090__$1,(8),inst_27077,inst_27067);
} else {
if((state_val_27091 === (9))){
var state_27090__$1 = state_27090;
var statearr_27101_27122 = state_27090__$1;
(statearr_27101_27122[(2)] = tc);

(statearr_27101_27122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (5))){
var inst_27070 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27071 = cljs.core.async.close_BANG_.call(null,fc);
var state_27090__$1 = (function (){var statearr_27102 = state_27090;
(statearr_27102[(8)] = inst_27070);

return statearr_27102;
})();
var statearr_27103_27123 = state_27090__$1;
(statearr_27103_27123[(2)] = inst_27071);

(statearr_27103_27123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (14))){
var inst_27084 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
var statearr_27104_27124 = state_27090__$1;
(statearr_27104_27124[(2)] = inst_27084);

(statearr_27104_27124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (10))){
var state_27090__$1 = state_27090;
var statearr_27105_27125 = state_27090__$1;
(statearr_27105_27125[(2)] = fc);

(statearr_27105_27125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (8))){
var inst_27079 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
if(cljs.core.truth_(inst_27079)){
var statearr_27106_27126 = state_27090__$1;
(statearr_27106_27126[(1)] = (12));

} else {
var statearr_27107_27127 = state_27090__$1;
(statearr_27107_27127[(1)] = (13));

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
});})(c__26663__auto___27113,tc,fc))
;
return ((function (switch__26573__auto__,c__26663__auto___27113,tc,fc){
return (function() {
var cljs$core$async$state_machine__26574__auto__ = null;
var cljs$core$async$state_machine__26574__auto____0 = (function (){
var statearr_27108 = [null,null,null,null,null,null,null,null,null];
(statearr_27108[(0)] = cljs$core$async$state_machine__26574__auto__);

(statearr_27108[(1)] = (1));

return statearr_27108;
});
var cljs$core$async$state_machine__26574__auto____1 = (function (state_27090){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_27090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e27109){if((e27109 instanceof Object)){
var ex__26577__auto__ = e27109;
var statearr_27110_27128 = state_27090;
(statearr_27110_27128[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27129 = state_27090;
state_27090 = G__27129;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$state_machine__26574__auto__ = function(state_27090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26574__auto____1.call(this,state_27090);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26574__auto____0;
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26574__auto____1;
return cljs$core$async$state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___27113,tc,fc))
})();
var state__26665__auto__ = (function (){var statearr_27111 = f__26664__auto__.call(null);
(statearr_27111[(6)] = c__26663__auto___27113);

return statearr_27111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___27113,tc,fc))
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
var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__){
return (function (state_27150){
var state_val_27151 = (state_27150[(1)]);
if((state_val_27151 === (7))){
var inst_27146 = (state_27150[(2)]);
var state_27150__$1 = state_27150;
var statearr_27152_27170 = state_27150__$1;
(statearr_27152_27170[(2)] = inst_27146);

(statearr_27152_27170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (1))){
var inst_27130 = init;
var state_27150__$1 = (function (){var statearr_27153 = state_27150;
(statearr_27153[(7)] = inst_27130);

return statearr_27153;
})();
var statearr_27154_27171 = state_27150__$1;
(statearr_27154_27171[(2)] = null);

(statearr_27154_27171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (4))){
var inst_27133 = (state_27150[(8)]);
var inst_27133__$1 = (state_27150[(2)]);
var inst_27134 = (inst_27133__$1 == null);
var state_27150__$1 = (function (){var statearr_27155 = state_27150;
(statearr_27155[(8)] = inst_27133__$1);

return statearr_27155;
})();
if(cljs.core.truth_(inst_27134)){
var statearr_27156_27172 = state_27150__$1;
(statearr_27156_27172[(1)] = (5));

} else {
var statearr_27157_27173 = state_27150__$1;
(statearr_27157_27173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (6))){
var inst_27130 = (state_27150[(7)]);
var inst_27133 = (state_27150[(8)]);
var inst_27137 = (state_27150[(9)]);
var inst_27137__$1 = f.call(null,inst_27130,inst_27133);
var inst_27138 = cljs.core.reduced_QMARK_.call(null,inst_27137__$1);
var state_27150__$1 = (function (){var statearr_27158 = state_27150;
(statearr_27158[(9)] = inst_27137__$1);

return statearr_27158;
})();
if(inst_27138){
var statearr_27159_27174 = state_27150__$1;
(statearr_27159_27174[(1)] = (8));

} else {
var statearr_27160_27175 = state_27150__$1;
(statearr_27160_27175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (3))){
var inst_27148 = (state_27150[(2)]);
var state_27150__$1 = state_27150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27150__$1,inst_27148);
} else {
if((state_val_27151 === (2))){
var state_27150__$1 = state_27150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27150__$1,(4),ch);
} else {
if((state_val_27151 === (9))){
var inst_27137 = (state_27150[(9)]);
var inst_27130 = inst_27137;
var state_27150__$1 = (function (){var statearr_27161 = state_27150;
(statearr_27161[(7)] = inst_27130);

return statearr_27161;
})();
var statearr_27162_27176 = state_27150__$1;
(statearr_27162_27176[(2)] = null);

(statearr_27162_27176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (5))){
var inst_27130 = (state_27150[(7)]);
var state_27150__$1 = state_27150;
var statearr_27163_27177 = state_27150__$1;
(statearr_27163_27177[(2)] = inst_27130);

(statearr_27163_27177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (10))){
var inst_27144 = (state_27150[(2)]);
var state_27150__$1 = state_27150;
var statearr_27164_27178 = state_27150__$1;
(statearr_27164_27178[(2)] = inst_27144);

(statearr_27164_27178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (8))){
var inst_27137 = (state_27150[(9)]);
var inst_27140 = cljs.core.deref.call(null,inst_27137);
var state_27150__$1 = state_27150;
var statearr_27165_27179 = state_27150__$1;
(statearr_27165_27179[(2)] = inst_27140);

(statearr_27165_27179[(1)] = (10));


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
});})(c__26663__auto__))
;
return ((function (switch__26573__auto__,c__26663__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26574__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26574__auto____0 = (function (){
var statearr_27166 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27166[(0)] = cljs$core$async$reduce_$_state_machine__26574__auto__);

(statearr_27166[(1)] = (1));

return statearr_27166;
});
var cljs$core$async$reduce_$_state_machine__26574__auto____1 = (function (state_27150){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_27150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e27167){if((e27167 instanceof Object)){
var ex__26577__auto__ = e27167;
var statearr_27168_27180 = state_27150;
(statearr_27168_27180[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27181 = state_27150;
state_27150 = G__27181;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26574__auto__ = function(state_27150){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26574__auto____1.call(this,state_27150);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26574__auto____0;
cljs$core$async$reduce_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26574__auto____1;
return cljs$core$async$reduce_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_27169 = f__26664__auto__.call(null);
(statearr_27169[(6)] = c__26663__auto__);

return statearr_27169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__))
);

return c__26663__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__,f__$1){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__,f__$1){
return (function (state_27187){
var state_val_27188 = (state_27187[(1)]);
if((state_val_27188 === (1))){
var inst_27182 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27187__$1 = state_27187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27187__$1,(2),inst_27182);
} else {
if((state_val_27188 === (2))){
var inst_27184 = (state_27187[(2)]);
var inst_27185 = f__$1.call(null,inst_27184);
var state_27187__$1 = state_27187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27187__$1,inst_27185);
} else {
return null;
}
}
});})(c__26663__auto__,f__$1))
;
return ((function (switch__26573__auto__,c__26663__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26574__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26574__auto____0 = (function (){
var statearr_27189 = [null,null,null,null,null,null,null];
(statearr_27189[(0)] = cljs$core$async$transduce_$_state_machine__26574__auto__);

(statearr_27189[(1)] = (1));

return statearr_27189;
});
var cljs$core$async$transduce_$_state_machine__26574__auto____1 = (function (state_27187){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_27187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e27190){if((e27190 instanceof Object)){
var ex__26577__auto__ = e27190;
var statearr_27191_27193 = state_27187;
(statearr_27191_27193[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27194 = state_27187;
state_27187 = G__27194;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26574__auto__ = function(state_27187){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26574__auto____1.call(this,state_27187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26574__auto____0;
cljs$core$async$transduce_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26574__auto____1;
return cljs$core$async$transduce_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__,f__$1))
})();
var state__26665__auto__ = (function (){var statearr_27192 = f__26664__auto__.call(null);
(statearr_27192[(6)] = c__26663__auto__);

return statearr_27192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__,f__$1))
);

return c__26663__auto__;
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
var G__27196 = arguments.length;
switch (G__27196) {
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
var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__){
return (function (state_27221){
var state_val_27222 = (state_27221[(1)]);
if((state_val_27222 === (7))){
var inst_27203 = (state_27221[(2)]);
var state_27221__$1 = state_27221;
var statearr_27223_27244 = state_27221__$1;
(statearr_27223_27244[(2)] = inst_27203);

(statearr_27223_27244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (1))){
var inst_27197 = cljs.core.seq.call(null,coll);
var inst_27198 = inst_27197;
var state_27221__$1 = (function (){var statearr_27224 = state_27221;
(statearr_27224[(7)] = inst_27198);

return statearr_27224;
})();
var statearr_27225_27245 = state_27221__$1;
(statearr_27225_27245[(2)] = null);

(statearr_27225_27245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (4))){
var inst_27198 = (state_27221[(7)]);
var inst_27201 = cljs.core.first.call(null,inst_27198);
var state_27221__$1 = state_27221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27221__$1,(7),ch,inst_27201);
} else {
if((state_val_27222 === (13))){
var inst_27215 = (state_27221[(2)]);
var state_27221__$1 = state_27221;
var statearr_27226_27246 = state_27221__$1;
(statearr_27226_27246[(2)] = inst_27215);

(statearr_27226_27246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (6))){
var inst_27206 = (state_27221[(2)]);
var state_27221__$1 = state_27221;
if(cljs.core.truth_(inst_27206)){
var statearr_27227_27247 = state_27221__$1;
(statearr_27227_27247[(1)] = (8));

} else {
var statearr_27228_27248 = state_27221__$1;
(statearr_27228_27248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (3))){
var inst_27219 = (state_27221[(2)]);
var state_27221__$1 = state_27221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27221__$1,inst_27219);
} else {
if((state_val_27222 === (12))){
var state_27221__$1 = state_27221;
var statearr_27229_27249 = state_27221__$1;
(statearr_27229_27249[(2)] = null);

(statearr_27229_27249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (2))){
var inst_27198 = (state_27221[(7)]);
var state_27221__$1 = state_27221;
if(cljs.core.truth_(inst_27198)){
var statearr_27230_27250 = state_27221__$1;
(statearr_27230_27250[(1)] = (4));

} else {
var statearr_27231_27251 = state_27221__$1;
(statearr_27231_27251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (11))){
var inst_27212 = cljs.core.async.close_BANG_.call(null,ch);
var state_27221__$1 = state_27221;
var statearr_27232_27252 = state_27221__$1;
(statearr_27232_27252[(2)] = inst_27212);

(statearr_27232_27252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (9))){
var state_27221__$1 = state_27221;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27233_27253 = state_27221__$1;
(statearr_27233_27253[(1)] = (11));

} else {
var statearr_27234_27254 = state_27221__$1;
(statearr_27234_27254[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (5))){
var inst_27198 = (state_27221[(7)]);
var state_27221__$1 = state_27221;
var statearr_27235_27255 = state_27221__$1;
(statearr_27235_27255[(2)] = inst_27198);

(statearr_27235_27255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (10))){
var inst_27217 = (state_27221[(2)]);
var state_27221__$1 = state_27221;
var statearr_27236_27256 = state_27221__$1;
(statearr_27236_27256[(2)] = inst_27217);

(statearr_27236_27256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27222 === (8))){
var inst_27198 = (state_27221[(7)]);
var inst_27208 = cljs.core.next.call(null,inst_27198);
var inst_27198__$1 = inst_27208;
var state_27221__$1 = (function (){var statearr_27237 = state_27221;
(statearr_27237[(7)] = inst_27198__$1);

return statearr_27237;
})();
var statearr_27238_27257 = state_27221__$1;
(statearr_27238_27257[(2)] = null);

(statearr_27238_27257[(1)] = (2));


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
});})(c__26663__auto__))
;
return ((function (switch__26573__auto__,c__26663__auto__){
return (function() {
var cljs$core$async$state_machine__26574__auto__ = null;
var cljs$core$async$state_machine__26574__auto____0 = (function (){
var statearr_27239 = [null,null,null,null,null,null,null,null];
(statearr_27239[(0)] = cljs$core$async$state_machine__26574__auto__);

(statearr_27239[(1)] = (1));

return statearr_27239;
});
var cljs$core$async$state_machine__26574__auto____1 = (function (state_27221){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_27221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e27240){if((e27240 instanceof Object)){
var ex__26577__auto__ = e27240;
var statearr_27241_27258 = state_27221;
(statearr_27241_27258[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27259 = state_27221;
state_27221 = G__27259;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$state_machine__26574__auto__ = function(state_27221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26574__auto____1.call(this,state_27221);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26574__auto____0;
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26574__auto____1;
return cljs$core$async$state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_27242 = f__26664__auto__.call(null);
(statearr_27242[(6)] = c__26663__auto__);

return statearr_27242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__))
);

return c__26663__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async27260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27260 = (function (ch,cs,meta27261){
this.ch = ch;
this.cs = cs;
this.meta27261 = meta27261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27262,meta27261__$1){
var self__ = this;
var _27262__$1 = this;
return (new cljs.core.async.t_cljs$core$async27260(self__.ch,self__.cs,meta27261__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27262){
var self__ = this;
var _27262__$1 = this;
return self__.meta27261;
});})(cs))
;

cljs.core.async.t_cljs$core$async27260.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27260.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27260.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27260.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27260.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27260.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27260.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27261","meta27261",-1767980227,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27260";

cljs.core.async.t_cljs$core$async27260.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27260");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27260.
 */
cljs.core.async.__GT_t_cljs$core$async27260 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27260(ch__$1,cs__$1,meta27261){
return (new cljs.core.async.t_cljs$core$async27260(ch__$1,cs__$1,meta27261));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27260(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26663__auto___27482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___27482,cs,m,dchan,dctr,done){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___27482,cs,m,dchan,dctr,done){
return (function (state_27397){
var state_val_27398 = (state_27397[(1)]);
if((state_val_27398 === (7))){
var inst_27393 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27399_27483 = state_27397__$1;
(statearr_27399_27483[(2)] = inst_27393);

(statearr_27399_27483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (20))){
var inst_27296 = (state_27397[(7)]);
var inst_27308 = cljs.core.first.call(null,inst_27296);
var inst_27309 = cljs.core.nth.call(null,inst_27308,(0),null);
var inst_27310 = cljs.core.nth.call(null,inst_27308,(1),null);
var state_27397__$1 = (function (){var statearr_27400 = state_27397;
(statearr_27400[(8)] = inst_27309);

return statearr_27400;
})();
if(cljs.core.truth_(inst_27310)){
var statearr_27401_27484 = state_27397__$1;
(statearr_27401_27484[(1)] = (22));

} else {
var statearr_27402_27485 = state_27397__$1;
(statearr_27402_27485[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (27))){
var inst_27265 = (state_27397[(9)]);
var inst_27338 = (state_27397[(10)]);
var inst_27345 = (state_27397[(11)]);
var inst_27340 = (state_27397[(12)]);
var inst_27345__$1 = cljs.core._nth.call(null,inst_27338,inst_27340);
var inst_27346 = cljs.core.async.put_BANG_.call(null,inst_27345__$1,inst_27265,done);
var state_27397__$1 = (function (){var statearr_27403 = state_27397;
(statearr_27403[(11)] = inst_27345__$1);

return statearr_27403;
})();
if(cljs.core.truth_(inst_27346)){
var statearr_27404_27486 = state_27397__$1;
(statearr_27404_27486[(1)] = (30));

} else {
var statearr_27405_27487 = state_27397__$1;
(statearr_27405_27487[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (1))){
var state_27397__$1 = state_27397;
var statearr_27406_27488 = state_27397__$1;
(statearr_27406_27488[(2)] = null);

(statearr_27406_27488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (24))){
var inst_27296 = (state_27397[(7)]);
var inst_27315 = (state_27397[(2)]);
var inst_27316 = cljs.core.next.call(null,inst_27296);
var inst_27274 = inst_27316;
var inst_27275 = null;
var inst_27276 = (0);
var inst_27277 = (0);
var state_27397__$1 = (function (){var statearr_27407 = state_27397;
(statearr_27407[(13)] = inst_27275);

(statearr_27407[(14)] = inst_27274);

(statearr_27407[(15)] = inst_27277);

(statearr_27407[(16)] = inst_27315);

(statearr_27407[(17)] = inst_27276);

return statearr_27407;
})();
var statearr_27408_27489 = state_27397__$1;
(statearr_27408_27489[(2)] = null);

(statearr_27408_27489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (39))){
var state_27397__$1 = state_27397;
var statearr_27412_27490 = state_27397__$1;
(statearr_27412_27490[(2)] = null);

(statearr_27412_27490[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (4))){
var inst_27265 = (state_27397[(9)]);
var inst_27265__$1 = (state_27397[(2)]);
var inst_27266 = (inst_27265__$1 == null);
var state_27397__$1 = (function (){var statearr_27413 = state_27397;
(statearr_27413[(9)] = inst_27265__$1);

return statearr_27413;
})();
if(cljs.core.truth_(inst_27266)){
var statearr_27414_27491 = state_27397__$1;
(statearr_27414_27491[(1)] = (5));

} else {
var statearr_27415_27492 = state_27397__$1;
(statearr_27415_27492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (15))){
var inst_27275 = (state_27397[(13)]);
var inst_27274 = (state_27397[(14)]);
var inst_27277 = (state_27397[(15)]);
var inst_27276 = (state_27397[(17)]);
var inst_27292 = (state_27397[(2)]);
var inst_27293 = (inst_27277 + (1));
var tmp27409 = inst_27275;
var tmp27410 = inst_27274;
var tmp27411 = inst_27276;
var inst_27274__$1 = tmp27410;
var inst_27275__$1 = tmp27409;
var inst_27276__$1 = tmp27411;
var inst_27277__$1 = inst_27293;
var state_27397__$1 = (function (){var statearr_27416 = state_27397;
(statearr_27416[(13)] = inst_27275__$1);

(statearr_27416[(18)] = inst_27292);

(statearr_27416[(14)] = inst_27274__$1);

(statearr_27416[(15)] = inst_27277__$1);

(statearr_27416[(17)] = inst_27276__$1);

return statearr_27416;
})();
var statearr_27417_27493 = state_27397__$1;
(statearr_27417_27493[(2)] = null);

(statearr_27417_27493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (21))){
var inst_27319 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27421_27494 = state_27397__$1;
(statearr_27421_27494[(2)] = inst_27319);

(statearr_27421_27494[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (31))){
var inst_27345 = (state_27397[(11)]);
var inst_27349 = done.call(null,null);
var inst_27350 = cljs.core.async.untap_STAR_.call(null,m,inst_27345);
var state_27397__$1 = (function (){var statearr_27422 = state_27397;
(statearr_27422[(19)] = inst_27349);

return statearr_27422;
})();
var statearr_27423_27495 = state_27397__$1;
(statearr_27423_27495[(2)] = inst_27350);

(statearr_27423_27495[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (32))){
var inst_27338 = (state_27397[(10)]);
var inst_27337 = (state_27397[(20)]);
var inst_27340 = (state_27397[(12)]);
var inst_27339 = (state_27397[(21)]);
var inst_27352 = (state_27397[(2)]);
var inst_27353 = (inst_27340 + (1));
var tmp27418 = inst_27338;
var tmp27419 = inst_27337;
var tmp27420 = inst_27339;
var inst_27337__$1 = tmp27419;
var inst_27338__$1 = tmp27418;
var inst_27339__$1 = tmp27420;
var inst_27340__$1 = inst_27353;
var state_27397__$1 = (function (){var statearr_27424 = state_27397;
(statearr_27424[(10)] = inst_27338__$1);

(statearr_27424[(20)] = inst_27337__$1);

(statearr_27424[(22)] = inst_27352);

(statearr_27424[(12)] = inst_27340__$1);

(statearr_27424[(21)] = inst_27339__$1);

return statearr_27424;
})();
var statearr_27425_27496 = state_27397__$1;
(statearr_27425_27496[(2)] = null);

(statearr_27425_27496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (40))){
var inst_27365 = (state_27397[(23)]);
var inst_27369 = done.call(null,null);
var inst_27370 = cljs.core.async.untap_STAR_.call(null,m,inst_27365);
var state_27397__$1 = (function (){var statearr_27426 = state_27397;
(statearr_27426[(24)] = inst_27369);

return statearr_27426;
})();
var statearr_27427_27497 = state_27397__$1;
(statearr_27427_27497[(2)] = inst_27370);

(statearr_27427_27497[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (33))){
var inst_27356 = (state_27397[(25)]);
var inst_27358 = cljs.core.chunked_seq_QMARK_.call(null,inst_27356);
var state_27397__$1 = state_27397;
if(inst_27358){
var statearr_27428_27498 = state_27397__$1;
(statearr_27428_27498[(1)] = (36));

} else {
var statearr_27429_27499 = state_27397__$1;
(statearr_27429_27499[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (13))){
var inst_27286 = (state_27397[(26)]);
var inst_27289 = cljs.core.async.close_BANG_.call(null,inst_27286);
var state_27397__$1 = state_27397;
var statearr_27430_27500 = state_27397__$1;
(statearr_27430_27500[(2)] = inst_27289);

(statearr_27430_27500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (22))){
var inst_27309 = (state_27397[(8)]);
var inst_27312 = cljs.core.async.close_BANG_.call(null,inst_27309);
var state_27397__$1 = state_27397;
var statearr_27431_27501 = state_27397__$1;
(statearr_27431_27501[(2)] = inst_27312);

(statearr_27431_27501[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (36))){
var inst_27356 = (state_27397[(25)]);
var inst_27360 = cljs.core.chunk_first.call(null,inst_27356);
var inst_27361 = cljs.core.chunk_rest.call(null,inst_27356);
var inst_27362 = cljs.core.count.call(null,inst_27360);
var inst_27337 = inst_27361;
var inst_27338 = inst_27360;
var inst_27339 = inst_27362;
var inst_27340 = (0);
var state_27397__$1 = (function (){var statearr_27432 = state_27397;
(statearr_27432[(10)] = inst_27338);

(statearr_27432[(20)] = inst_27337);

(statearr_27432[(12)] = inst_27340);

(statearr_27432[(21)] = inst_27339);

return statearr_27432;
})();
var statearr_27433_27502 = state_27397__$1;
(statearr_27433_27502[(2)] = null);

(statearr_27433_27502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (41))){
var inst_27356 = (state_27397[(25)]);
var inst_27372 = (state_27397[(2)]);
var inst_27373 = cljs.core.next.call(null,inst_27356);
var inst_27337 = inst_27373;
var inst_27338 = null;
var inst_27339 = (0);
var inst_27340 = (0);
var state_27397__$1 = (function (){var statearr_27434 = state_27397;
(statearr_27434[(10)] = inst_27338);

(statearr_27434[(20)] = inst_27337);

(statearr_27434[(12)] = inst_27340);

(statearr_27434[(27)] = inst_27372);

(statearr_27434[(21)] = inst_27339);

return statearr_27434;
})();
var statearr_27435_27503 = state_27397__$1;
(statearr_27435_27503[(2)] = null);

(statearr_27435_27503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (43))){
var state_27397__$1 = state_27397;
var statearr_27436_27504 = state_27397__$1;
(statearr_27436_27504[(2)] = null);

(statearr_27436_27504[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (29))){
var inst_27381 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27437_27505 = state_27397__$1;
(statearr_27437_27505[(2)] = inst_27381);

(statearr_27437_27505[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (44))){
var inst_27390 = (state_27397[(2)]);
var state_27397__$1 = (function (){var statearr_27438 = state_27397;
(statearr_27438[(28)] = inst_27390);

return statearr_27438;
})();
var statearr_27439_27506 = state_27397__$1;
(statearr_27439_27506[(2)] = null);

(statearr_27439_27506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (6))){
var inst_27329 = (state_27397[(29)]);
var inst_27328 = cljs.core.deref.call(null,cs);
var inst_27329__$1 = cljs.core.keys.call(null,inst_27328);
var inst_27330 = cljs.core.count.call(null,inst_27329__$1);
var inst_27331 = cljs.core.reset_BANG_.call(null,dctr,inst_27330);
var inst_27336 = cljs.core.seq.call(null,inst_27329__$1);
var inst_27337 = inst_27336;
var inst_27338 = null;
var inst_27339 = (0);
var inst_27340 = (0);
var state_27397__$1 = (function (){var statearr_27440 = state_27397;
(statearr_27440[(10)] = inst_27338);

(statearr_27440[(30)] = inst_27331);

(statearr_27440[(20)] = inst_27337);

(statearr_27440[(29)] = inst_27329__$1);

(statearr_27440[(12)] = inst_27340);

(statearr_27440[(21)] = inst_27339);

return statearr_27440;
})();
var statearr_27441_27507 = state_27397__$1;
(statearr_27441_27507[(2)] = null);

(statearr_27441_27507[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (28))){
var inst_27356 = (state_27397[(25)]);
var inst_27337 = (state_27397[(20)]);
var inst_27356__$1 = cljs.core.seq.call(null,inst_27337);
var state_27397__$1 = (function (){var statearr_27442 = state_27397;
(statearr_27442[(25)] = inst_27356__$1);

return statearr_27442;
})();
if(inst_27356__$1){
var statearr_27443_27508 = state_27397__$1;
(statearr_27443_27508[(1)] = (33));

} else {
var statearr_27444_27509 = state_27397__$1;
(statearr_27444_27509[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (25))){
var inst_27340 = (state_27397[(12)]);
var inst_27339 = (state_27397[(21)]);
var inst_27342 = (inst_27340 < inst_27339);
var inst_27343 = inst_27342;
var state_27397__$1 = state_27397;
if(cljs.core.truth_(inst_27343)){
var statearr_27445_27510 = state_27397__$1;
(statearr_27445_27510[(1)] = (27));

} else {
var statearr_27446_27511 = state_27397__$1;
(statearr_27446_27511[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (34))){
var state_27397__$1 = state_27397;
var statearr_27447_27512 = state_27397__$1;
(statearr_27447_27512[(2)] = null);

(statearr_27447_27512[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (17))){
var state_27397__$1 = state_27397;
var statearr_27448_27513 = state_27397__$1;
(statearr_27448_27513[(2)] = null);

(statearr_27448_27513[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (3))){
var inst_27395 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27397__$1,inst_27395);
} else {
if((state_val_27398 === (12))){
var inst_27324 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27449_27514 = state_27397__$1;
(statearr_27449_27514[(2)] = inst_27324);

(statearr_27449_27514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (2))){
var state_27397__$1 = state_27397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27397__$1,(4),ch);
} else {
if((state_val_27398 === (23))){
var state_27397__$1 = state_27397;
var statearr_27450_27515 = state_27397__$1;
(statearr_27450_27515[(2)] = null);

(statearr_27450_27515[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (35))){
var inst_27379 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27451_27516 = state_27397__$1;
(statearr_27451_27516[(2)] = inst_27379);

(statearr_27451_27516[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (19))){
var inst_27296 = (state_27397[(7)]);
var inst_27300 = cljs.core.chunk_first.call(null,inst_27296);
var inst_27301 = cljs.core.chunk_rest.call(null,inst_27296);
var inst_27302 = cljs.core.count.call(null,inst_27300);
var inst_27274 = inst_27301;
var inst_27275 = inst_27300;
var inst_27276 = inst_27302;
var inst_27277 = (0);
var state_27397__$1 = (function (){var statearr_27452 = state_27397;
(statearr_27452[(13)] = inst_27275);

(statearr_27452[(14)] = inst_27274);

(statearr_27452[(15)] = inst_27277);

(statearr_27452[(17)] = inst_27276);

return statearr_27452;
})();
var statearr_27453_27517 = state_27397__$1;
(statearr_27453_27517[(2)] = null);

(statearr_27453_27517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (11))){
var inst_27274 = (state_27397[(14)]);
var inst_27296 = (state_27397[(7)]);
var inst_27296__$1 = cljs.core.seq.call(null,inst_27274);
var state_27397__$1 = (function (){var statearr_27454 = state_27397;
(statearr_27454[(7)] = inst_27296__$1);

return statearr_27454;
})();
if(inst_27296__$1){
var statearr_27455_27518 = state_27397__$1;
(statearr_27455_27518[(1)] = (16));

} else {
var statearr_27456_27519 = state_27397__$1;
(statearr_27456_27519[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (9))){
var inst_27326 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27457_27520 = state_27397__$1;
(statearr_27457_27520[(2)] = inst_27326);

(statearr_27457_27520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (5))){
var inst_27272 = cljs.core.deref.call(null,cs);
var inst_27273 = cljs.core.seq.call(null,inst_27272);
var inst_27274 = inst_27273;
var inst_27275 = null;
var inst_27276 = (0);
var inst_27277 = (0);
var state_27397__$1 = (function (){var statearr_27458 = state_27397;
(statearr_27458[(13)] = inst_27275);

(statearr_27458[(14)] = inst_27274);

(statearr_27458[(15)] = inst_27277);

(statearr_27458[(17)] = inst_27276);

return statearr_27458;
})();
var statearr_27459_27521 = state_27397__$1;
(statearr_27459_27521[(2)] = null);

(statearr_27459_27521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (14))){
var state_27397__$1 = state_27397;
var statearr_27460_27522 = state_27397__$1;
(statearr_27460_27522[(2)] = null);

(statearr_27460_27522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (45))){
var inst_27387 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27461_27523 = state_27397__$1;
(statearr_27461_27523[(2)] = inst_27387);

(statearr_27461_27523[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (26))){
var inst_27329 = (state_27397[(29)]);
var inst_27383 = (state_27397[(2)]);
var inst_27384 = cljs.core.seq.call(null,inst_27329);
var state_27397__$1 = (function (){var statearr_27462 = state_27397;
(statearr_27462[(31)] = inst_27383);

return statearr_27462;
})();
if(inst_27384){
var statearr_27463_27524 = state_27397__$1;
(statearr_27463_27524[(1)] = (42));

} else {
var statearr_27464_27525 = state_27397__$1;
(statearr_27464_27525[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (16))){
var inst_27296 = (state_27397[(7)]);
var inst_27298 = cljs.core.chunked_seq_QMARK_.call(null,inst_27296);
var state_27397__$1 = state_27397;
if(inst_27298){
var statearr_27465_27526 = state_27397__$1;
(statearr_27465_27526[(1)] = (19));

} else {
var statearr_27466_27527 = state_27397__$1;
(statearr_27466_27527[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (38))){
var inst_27376 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27467_27528 = state_27397__$1;
(statearr_27467_27528[(2)] = inst_27376);

(statearr_27467_27528[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (30))){
var state_27397__$1 = state_27397;
var statearr_27468_27529 = state_27397__$1;
(statearr_27468_27529[(2)] = null);

(statearr_27468_27529[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (10))){
var inst_27275 = (state_27397[(13)]);
var inst_27277 = (state_27397[(15)]);
var inst_27285 = cljs.core._nth.call(null,inst_27275,inst_27277);
var inst_27286 = cljs.core.nth.call(null,inst_27285,(0),null);
var inst_27287 = cljs.core.nth.call(null,inst_27285,(1),null);
var state_27397__$1 = (function (){var statearr_27469 = state_27397;
(statearr_27469[(26)] = inst_27286);

return statearr_27469;
})();
if(cljs.core.truth_(inst_27287)){
var statearr_27470_27530 = state_27397__$1;
(statearr_27470_27530[(1)] = (13));

} else {
var statearr_27471_27531 = state_27397__$1;
(statearr_27471_27531[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (18))){
var inst_27322 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27472_27532 = state_27397__$1;
(statearr_27472_27532[(2)] = inst_27322);

(statearr_27472_27532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (42))){
var state_27397__$1 = state_27397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27397__$1,(45),dchan);
} else {
if((state_val_27398 === (37))){
var inst_27265 = (state_27397[(9)]);
var inst_27356 = (state_27397[(25)]);
var inst_27365 = (state_27397[(23)]);
var inst_27365__$1 = cljs.core.first.call(null,inst_27356);
var inst_27366 = cljs.core.async.put_BANG_.call(null,inst_27365__$1,inst_27265,done);
var state_27397__$1 = (function (){var statearr_27473 = state_27397;
(statearr_27473[(23)] = inst_27365__$1);

return statearr_27473;
})();
if(cljs.core.truth_(inst_27366)){
var statearr_27474_27533 = state_27397__$1;
(statearr_27474_27533[(1)] = (39));

} else {
var statearr_27475_27534 = state_27397__$1;
(statearr_27475_27534[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (8))){
var inst_27277 = (state_27397[(15)]);
var inst_27276 = (state_27397[(17)]);
var inst_27279 = (inst_27277 < inst_27276);
var inst_27280 = inst_27279;
var state_27397__$1 = state_27397;
if(cljs.core.truth_(inst_27280)){
var statearr_27476_27535 = state_27397__$1;
(statearr_27476_27535[(1)] = (10));

} else {
var statearr_27477_27536 = state_27397__$1;
(statearr_27477_27536[(1)] = (11));

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
});})(c__26663__auto___27482,cs,m,dchan,dctr,done))
;
return ((function (switch__26573__auto__,c__26663__auto___27482,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26574__auto__ = null;
var cljs$core$async$mult_$_state_machine__26574__auto____0 = (function (){
var statearr_27478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27478[(0)] = cljs$core$async$mult_$_state_machine__26574__auto__);

(statearr_27478[(1)] = (1));

return statearr_27478;
});
var cljs$core$async$mult_$_state_machine__26574__auto____1 = (function (state_27397){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_27397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e27479){if((e27479 instanceof Object)){
var ex__26577__auto__ = e27479;
var statearr_27480_27537 = state_27397;
(statearr_27480_27537[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27538 = state_27397;
state_27397 = G__27538;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26574__auto__ = function(state_27397){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26574__auto____1.call(this,state_27397);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26574__auto____0;
cljs$core$async$mult_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26574__auto____1;
return cljs$core$async$mult_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___27482,cs,m,dchan,dctr,done))
})();
var state__26665__auto__ = (function (){var statearr_27481 = f__26664__auto__.call(null);
(statearr_27481[(6)] = c__26663__auto___27482);

return statearr_27481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___27482,cs,m,dchan,dctr,done))
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
var G__27540 = arguments.length;
switch (G__27540) {
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
var len__4499__auto___27552 = arguments.length;
var i__4500__auto___27553 = (0);
while(true){
if((i__4500__auto___27553 < len__4499__auto___27552)){
args__4502__auto__.push((arguments[i__4500__auto___27553]));

var G__27554 = (i__4500__auto___27553 + (1));
i__4500__auto___27553 = G__27554;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27546){
var map__27547 = p__27546;
var map__27547__$1 = ((((!((map__27547 == null)))?(((((map__27547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27547):map__27547);
var opts = map__27547__$1;
var statearr_27549_27555 = state;
(statearr_27549_27555[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27547,map__27547__$1,opts){
return (function (val){
var statearr_27550_27556 = state;
(statearr_27550_27556[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27547,map__27547__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27551_27557 = state;
(statearr_27551_27557[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27542){
var G__27543 = cljs.core.first.call(null,seq27542);
var seq27542__$1 = cljs.core.next.call(null,seq27542);
var G__27544 = cljs.core.first.call(null,seq27542__$1);
var seq27542__$2 = cljs.core.next.call(null,seq27542__$1);
var G__27545 = cljs.core.first.call(null,seq27542__$2);
var seq27542__$3 = cljs.core.next.call(null,seq27542__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27543,G__27544,G__27545,seq27542__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27558 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27559){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27559 = meta27559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27560,meta27559__$1){
var self__ = this;
var _27560__$1 = this;
return (new cljs.core.async.t_cljs$core$async27558(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27559__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27560){
var self__ = this;
var _27560__$1 = this;
return self__.meta27559;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27558.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27558.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27559","meta27559",1147443439,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27558";

cljs.core.async.t_cljs$core$async27558.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27558");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27558.
 */
cljs.core.async.__GT_t_cljs$core$async27558 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27558(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27559){
return (new cljs.core.async.t_cljs$core$async27558(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27559));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27558(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26663__auto___27722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___27722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___27722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27662){
var state_val_27663 = (state_27662[(1)]);
if((state_val_27663 === (7))){
var inst_27577 = (state_27662[(2)]);
var state_27662__$1 = state_27662;
var statearr_27664_27723 = state_27662__$1;
(statearr_27664_27723[(2)] = inst_27577);

(statearr_27664_27723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (20))){
var inst_27589 = (state_27662[(7)]);
var state_27662__$1 = state_27662;
var statearr_27665_27724 = state_27662__$1;
(statearr_27665_27724[(2)] = inst_27589);

(statearr_27665_27724[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (27))){
var state_27662__$1 = state_27662;
var statearr_27666_27725 = state_27662__$1;
(statearr_27666_27725[(2)] = null);

(statearr_27666_27725[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (1))){
var inst_27564 = (state_27662[(8)]);
var inst_27564__$1 = calc_state.call(null);
var inst_27566 = (inst_27564__$1 == null);
var inst_27567 = cljs.core.not.call(null,inst_27566);
var state_27662__$1 = (function (){var statearr_27667 = state_27662;
(statearr_27667[(8)] = inst_27564__$1);

return statearr_27667;
})();
if(inst_27567){
var statearr_27668_27726 = state_27662__$1;
(statearr_27668_27726[(1)] = (2));

} else {
var statearr_27669_27727 = state_27662__$1;
(statearr_27669_27727[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (24))){
var inst_27622 = (state_27662[(9)]);
var inst_27613 = (state_27662[(10)]);
var inst_27636 = (state_27662[(11)]);
var inst_27636__$1 = inst_27613.call(null,inst_27622);
var state_27662__$1 = (function (){var statearr_27670 = state_27662;
(statearr_27670[(11)] = inst_27636__$1);

return statearr_27670;
})();
if(cljs.core.truth_(inst_27636__$1)){
var statearr_27671_27728 = state_27662__$1;
(statearr_27671_27728[(1)] = (29));

} else {
var statearr_27672_27729 = state_27662__$1;
(statearr_27672_27729[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (4))){
var inst_27580 = (state_27662[(2)]);
var state_27662__$1 = state_27662;
if(cljs.core.truth_(inst_27580)){
var statearr_27673_27730 = state_27662__$1;
(statearr_27673_27730[(1)] = (8));

} else {
var statearr_27674_27731 = state_27662__$1;
(statearr_27674_27731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (15))){
var inst_27607 = (state_27662[(2)]);
var state_27662__$1 = state_27662;
if(cljs.core.truth_(inst_27607)){
var statearr_27675_27732 = state_27662__$1;
(statearr_27675_27732[(1)] = (19));

} else {
var statearr_27676_27733 = state_27662__$1;
(statearr_27676_27733[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (21))){
var inst_27612 = (state_27662[(12)]);
var inst_27612__$1 = (state_27662[(2)]);
var inst_27613 = cljs.core.get.call(null,inst_27612__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27614 = cljs.core.get.call(null,inst_27612__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27615 = cljs.core.get.call(null,inst_27612__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27662__$1 = (function (){var statearr_27677 = state_27662;
(statearr_27677[(12)] = inst_27612__$1);

(statearr_27677[(10)] = inst_27613);

(statearr_27677[(13)] = inst_27614);

return statearr_27677;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27662__$1,(22),inst_27615);
} else {
if((state_val_27663 === (31))){
var inst_27644 = (state_27662[(2)]);
var state_27662__$1 = state_27662;
if(cljs.core.truth_(inst_27644)){
var statearr_27678_27734 = state_27662__$1;
(statearr_27678_27734[(1)] = (32));

} else {
var statearr_27679_27735 = state_27662__$1;
(statearr_27679_27735[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (32))){
var inst_27621 = (state_27662[(14)]);
var state_27662__$1 = state_27662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27662__$1,(35),out,inst_27621);
} else {
if((state_val_27663 === (33))){
var inst_27612 = (state_27662[(12)]);
var inst_27589 = inst_27612;
var state_27662__$1 = (function (){var statearr_27680 = state_27662;
(statearr_27680[(7)] = inst_27589);

return statearr_27680;
})();
var statearr_27681_27736 = state_27662__$1;
(statearr_27681_27736[(2)] = null);

(statearr_27681_27736[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (13))){
var inst_27589 = (state_27662[(7)]);
var inst_27596 = inst_27589.cljs$lang$protocol_mask$partition0$;
var inst_27597 = (inst_27596 & (64));
var inst_27598 = inst_27589.cljs$core$ISeq$;
var inst_27599 = (cljs.core.PROTOCOL_SENTINEL === inst_27598);
var inst_27600 = ((inst_27597) || (inst_27599));
var state_27662__$1 = state_27662;
if(cljs.core.truth_(inst_27600)){
var statearr_27682_27737 = state_27662__$1;
(statearr_27682_27737[(1)] = (16));

} else {
var statearr_27683_27738 = state_27662__$1;
(statearr_27683_27738[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (22))){
var inst_27622 = (state_27662[(9)]);
var inst_27621 = (state_27662[(14)]);
var inst_27620 = (state_27662[(2)]);
var inst_27621__$1 = cljs.core.nth.call(null,inst_27620,(0),null);
var inst_27622__$1 = cljs.core.nth.call(null,inst_27620,(1),null);
var inst_27623 = (inst_27621__$1 == null);
var inst_27624 = cljs.core._EQ_.call(null,inst_27622__$1,change);
var inst_27625 = ((inst_27623) || (inst_27624));
var state_27662__$1 = (function (){var statearr_27684 = state_27662;
(statearr_27684[(9)] = inst_27622__$1);

(statearr_27684[(14)] = inst_27621__$1);

return statearr_27684;
})();
if(cljs.core.truth_(inst_27625)){
var statearr_27685_27739 = state_27662__$1;
(statearr_27685_27739[(1)] = (23));

} else {
var statearr_27686_27740 = state_27662__$1;
(statearr_27686_27740[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (36))){
var inst_27612 = (state_27662[(12)]);
var inst_27589 = inst_27612;
var state_27662__$1 = (function (){var statearr_27687 = state_27662;
(statearr_27687[(7)] = inst_27589);

return statearr_27687;
})();
var statearr_27688_27741 = state_27662__$1;
(statearr_27688_27741[(2)] = null);

(statearr_27688_27741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (29))){
var inst_27636 = (state_27662[(11)]);
var state_27662__$1 = state_27662;
var statearr_27689_27742 = state_27662__$1;
(statearr_27689_27742[(2)] = inst_27636);

(statearr_27689_27742[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (6))){
var state_27662__$1 = state_27662;
var statearr_27690_27743 = state_27662__$1;
(statearr_27690_27743[(2)] = false);

(statearr_27690_27743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (28))){
var inst_27632 = (state_27662[(2)]);
var inst_27633 = calc_state.call(null);
var inst_27589 = inst_27633;
var state_27662__$1 = (function (){var statearr_27691 = state_27662;
(statearr_27691[(7)] = inst_27589);

(statearr_27691[(15)] = inst_27632);

return statearr_27691;
})();
var statearr_27692_27744 = state_27662__$1;
(statearr_27692_27744[(2)] = null);

(statearr_27692_27744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (25))){
var inst_27658 = (state_27662[(2)]);
var state_27662__$1 = state_27662;
var statearr_27693_27745 = state_27662__$1;
(statearr_27693_27745[(2)] = inst_27658);

(statearr_27693_27745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (34))){
var inst_27656 = (state_27662[(2)]);
var state_27662__$1 = state_27662;
var statearr_27694_27746 = state_27662__$1;
(statearr_27694_27746[(2)] = inst_27656);

(statearr_27694_27746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (17))){
var state_27662__$1 = state_27662;
var statearr_27695_27747 = state_27662__$1;
(statearr_27695_27747[(2)] = false);

(statearr_27695_27747[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (3))){
var state_27662__$1 = state_27662;
var statearr_27696_27748 = state_27662__$1;
(statearr_27696_27748[(2)] = false);

(statearr_27696_27748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (12))){
var inst_27660 = (state_27662[(2)]);
var state_27662__$1 = state_27662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27662__$1,inst_27660);
} else {
if((state_val_27663 === (2))){
var inst_27564 = (state_27662[(8)]);
var inst_27569 = inst_27564.cljs$lang$protocol_mask$partition0$;
var inst_27570 = (inst_27569 & (64));
var inst_27571 = inst_27564.cljs$core$ISeq$;
var inst_27572 = (cljs.core.PROTOCOL_SENTINEL === inst_27571);
var inst_27573 = ((inst_27570) || (inst_27572));
var state_27662__$1 = state_27662;
if(cljs.core.truth_(inst_27573)){
var statearr_27697_27749 = state_27662__$1;
(statearr_27697_27749[(1)] = (5));

} else {
var statearr_27698_27750 = state_27662__$1;
(statearr_27698_27750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (23))){
var inst_27621 = (state_27662[(14)]);
var inst_27627 = (inst_27621 == null);
var state_27662__$1 = state_27662;
if(cljs.core.truth_(inst_27627)){
var statearr_27699_27751 = state_27662__$1;
(statearr_27699_27751[(1)] = (26));

} else {
var statearr_27700_27752 = state_27662__$1;
(statearr_27700_27752[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (35))){
var inst_27647 = (state_27662[(2)]);
var state_27662__$1 = state_27662;
if(cljs.core.truth_(inst_27647)){
var statearr_27701_27753 = state_27662__$1;
(statearr_27701_27753[(1)] = (36));

} else {
var statearr_27702_27754 = state_27662__$1;
(statearr_27702_27754[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (19))){
var inst_27589 = (state_27662[(7)]);
var inst_27609 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27589);
var state_27662__$1 = state_27662;
var statearr_27703_27755 = state_27662__$1;
(statearr_27703_27755[(2)] = inst_27609);

(statearr_27703_27755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (11))){
var inst_27589 = (state_27662[(7)]);
var inst_27593 = (inst_27589 == null);
var inst_27594 = cljs.core.not.call(null,inst_27593);
var state_27662__$1 = state_27662;
if(inst_27594){
var statearr_27704_27756 = state_27662__$1;
(statearr_27704_27756[(1)] = (13));

} else {
var statearr_27705_27757 = state_27662__$1;
(statearr_27705_27757[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (9))){
var inst_27564 = (state_27662[(8)]);
var state_27662__$1 = state_27662;
var statearr_27706_27758 = state_27662__$1;
(statearr_27706_27758[(2)] = inst_27564);

(statearr_27706_27758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (5))){
var state_27662__$1 = state_27662;
var statearr_27707_27759 = state_27662__$1;
(statearr_27707_27759[(2)] = true);

(statearr_27707_27759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (14))){
var state_27662__$1 = state_27662;
var statearr_27708_27760 = state_27662__$1;
(statearr_27708_27760[(2)] = false);

(statearr_27708_27760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (26))){
var inst_27622 = (state_27662[(9)]);
var inst_27629 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27622);
var state_27662__$1 = state_27662;
var statearr_27709_27761 = state_27662__$1;
(statearr_27709_27761[(2)] = inst_27629);

(statearr_27709_27761[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (16))){
var state_27662__$1 = state_27662;
var statearr_27710_27762 = state_27662__$1;
(statearr_27710_27762[(2)] = true);

(statearr_27710_27762[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (38))){
var inst_27652 = (state_27662[(2)]);
var state_27662__$1 = state_27662;
var statearr_27711_27763 = state_27662__$1;
(statearr_27711_27763[(2)] = inst_27652);

(statearr_27711_27763[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (30))){
var inst_27622 = (state_27662[(9)]);
var inst_27613 = (state_27662[(10)]);
var inst_27614 = (state_27662[(13)]);
var inst_27639 = cljs.core.empty_QMARK_.call(null,inst_27613);
var inst_27640 = inst_27614.call(null,inst_27622);
var inst_27641 = cljs.core.not.call(null,inst_27640);
var inst_27642 = ((inst_27639) && (inst_27641));
var state_27662__$1 = state_27662;
var statearr_27712_27764 = state_27662__$1;
(statearr_27712_27764[(2)] = inst_27642);

(statearr_27712_27764[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (10))){
var inst_27564 = (state_27662[(8)]);
var inst_27585 = (state_27662[(2)]);
var inst_27586 = cljs.core.get.call(null,inst_27585,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27587 = cljs.core.get.call(null,inst_27585,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27588 = cljs.core.get.call(null,inst_27585,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27589 = inst_27564;
var state_27662__$1 = (function (){var statearr_27713 = state_27662;
(statearr_27713[(16)] = inst_27587);

(statearr_27713[(17)] = inst_27588);

(statearr_27713[(7)] = inst_27589);

(statearr_27713[(18)] = inst_27586);

return statearr_27713;
})();
var statearr_27714_27765 = state_27662__$1;
(statearr_27714_27765[(2)] = null);

(statearr_27714_27765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (18))){
var inst_27604 = (state_27662[(2)]);
var state_27662__$1 = state_27662;
var statearr_27715_27766 = state_27662__$1;
(statearr_27715_27766[(2)] = inst_27604);

(statearr_27715_27766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (37))){
var state_27662__$1 = state_27662;
var statearr_27716_27767 = state_27662__$1;
(statearr_27716_27767[(2)] = null);

(statearr_27716_27767[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27663 === (8))){
var inst_27564 = (state_27662[(8)]);
var inst_27582 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27564);
var state_27662__$1 = state_27662;
var statearr_27717_27768 = state_27662__$1;
(statearr_27717_27768[(2)] = inst_27582);

(statearr_27717_27768[(1)] = (10));


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
});})(c__26663__auto___27722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26573__auto__,c__26663__auto___27722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26574__auto__ = null;
var cljs$core$async$mix_$_state_machine__26574__auto____0 = (function (){
var statearr_27718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27718[(0)] = cljs$core$async$mix_$_state_machine__26574__auto__);

(statearr_27718[(1)] = (1));

return statearr_27718;
});
var cljs$core$async$mix_$_state_machine__26574__auto____1 = (function (state_27662){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_27662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e27719){if((e27719 instanceof Object)){
var ex__26577__auto__ = e27719;
var statearr_27720_27769 = state_27662;
(statearr_27720_27769[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27770 = state_27662;
state_27662 = G__27770;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26574__auto__ = function(state_27662){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26574__auto____1.call(this,state_27662);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26574__auto____0;
cljs$core$async$mix_$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26574__auto____1;
return cljs$core$async$mix_$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___27722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26665__auto__ = (function (){var statearr_27721 = f__26664__auto__.call(null);
(statearr_27721[(6)] = c__26663__auto___27722);

return statearr_27721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___27722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__27772 = arguments.length;
switch (G__27772) {
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
var G__27776 = arguments.length;
switch (G__27776) {
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
return (function (p1__27774_SHARP_){
if(cljs.core.truth_(p1__27774_SHARP_.call(null,topic))){
return p1__27774_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27774_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27777 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27778){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27778 = meta27778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27779,meta27778__$1){
var self__ = this;
var _27779__$1 = this;
return (new cljs.core.async.t_cljs$core$async27777(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27778__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27779){
var self__ = this;
var _27779__$1 = this;
return self__.meta27778;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27777.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27778","meta27778",1047979420,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27777";

cljs.core.async.t_cljs$core$async27777.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27777");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27777.
 */
cljs.core.async.__GT_t_cljs$core$async27777 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27777(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27778){
return (new cljs.core.async.t_cljs$core$async27777(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27778));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27777(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26663__auto___27897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___27897,mults,ensure_mult,p){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___27897,mults,ensure_mult,p){
return (function (state_27851){
var state_val_27852 = (state_27851[(1)]);
if((state_val_27852 === (7))){
var inst_27847 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
var statearr_27853_27898 = state_27851__$1;
(statearr_27853_27898[(2)] = inst_27847);

(statearr_27853_27898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (20))){
var state_27851__$1 = state_27851;
var statearr_27854_27899 = state_27851__$1;
(statearr_27854_27899[(2)] = null);

(statearr_27854_27899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (1))){
var state_27851__$1 = state_27851;
var statearr_27855_27900 = state_27851__$1;
(statearr_27855_27900[(2)] = null);

(statearr_27855_27900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (24))){
var inst_27830 = (state_27851[(7)]);
var inst_27839 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27830);
var state_27851__$1 = state_27851;
var statearr_27856_27901 = state_27851__$1;
(statearr_27856_27901[(2)] = inst_27839);

(statearr_27856_27901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (4))){
var inst_27782 = (state_27851[(8)]);
var inst_27782__$1 = (state_27851[(2)]);
var inst_27783 = (inst_27782__$1 == null);
var state_27851__$1 = (function (){var statearr_27857 = state_27851;
(statearr_27857[(8)] = inst_27782__$1);

return statearr_27857;
})();
if(cljs.core.truth_(inst_27783)){
var statearr_27858_27902 = state_27851__$1;
(statearr_27858_27902[(1)] = (5));

} else {
var statearr_27859_27903 = state_27851__$1;
(statearr_27859_27903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (15))){
var inst_27824 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
var statearr_27860_27904 = state_27851__$1;
(statearr_27860_27904[(2)] = inst_27824);

(statearr_27860_27904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (21))){
var inst_27844 = (state_27851[(2)]);
var state_27851__$1 = (function (){var statearr_27861 = state_27851;
(statearr_27861[(9)] = inst_27844);

return statearr_27861;
})();
var statearr_27862_27905 = state_27851__$1;
(statearr_27862_27905[(2)] = null);

(statearr_27862_27905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (13))){
var inst_27806 = (state_27851[(10)]);
var inst_27808 = cljs.core.chunked_seq_QMARK_.call(null,inst_27806);
var state_27851__$1 = state_27851;
if(inst_27808){
var statearr_27863_27906 = state_27851__$1;
(statearr_27863_27906[(1)] = (16));

} else {
var statearr_27864_27907 = state_27851__$1;
(statearr_27864_27907[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (22))){
var inst_27836 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
if(cljs.core.truth_(inst_27836)){
var statearr_27865_27908 = state_27851__$1;
(statearr_27865_27908[(1)] = (23));

} else {
var statearr_27866_27909 = state_27851__$1;
(statearr_27866_27909[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (6))){
var inst_27830 = (state_27851[(7)]);
var inst_27832 = (state_27851[(11)]);
var inst_27782 = (state_27851[(8)]);
var inst_27830__$1 = topic_fn.call(null,inst_27782);
var inst_27831 = cljs.core.deref.call(null,mults);
var inst_27832__$1 = cljs.core.get.call(null,inst_27831,inst_27830__$1);
var state_27851__$1 = (function (){var statearr_27867 = state_27851;
(statearr_27867[(7)] = inst_27830__$1);

(statearr_27867[(11)] = inst_27832__$1);

return statearr_27867;
})();
if(cljs.core.truth_(inst_27832__$1)){
var statearr_27868_27910 = state_27851__$1;
(statearr_27868_27910[(1)] = (19));

} else {
var statearr_27869_27911 = state_27851__$1;
(statearr_27869_27911[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (25))){
var inst_27841 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
var statearr_27870_27912 = state_27851__$1;
(statearr_27870_27912[(2)] = inst_27841);

(statearr_27870_27912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (17))){
var inst_27806 = (state_27851[(10)]);
var inst_27815 = cljs.core.first.call(null,inst_27806);
var inst_27816 = cljs.core.async.muxch_STAR_.call(null,inst_27815);
var inst_27817 = cljs.core.async.close_BANG_.call(null,inst_27816);
var inst_27818 = cljs.core.next.call(null,inst_27806);
var inst_27792 = inst_27818;
var inst_27793 = null;
var inst_27794 = (0);
var inst_27795 = (0);
var state_27851__$1 = (function (){var statearr_27871 = state_27851;
(statearr_27871[(12)] = inst_27817);

(statearr_27871[(13)] = inst_27793);

(statearr_27871[(14)] = inst_27792);

(statearr_27871[(15)] = inst_27794);

(statearr_27871[(16)] = inst_27795);

return statearr_27871;
})();
var statearr_27872_27913 = state_27851__$1;
(statearr_27872_27913[(2)] = null);

(statearr_27872_27913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (3))){
var inst_27849 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27851__$1,inst_27849);
} else {
if((state_val_27852 === (12))){
var inst_27826 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
var statearr_27873_27914 = state_27851__$1;
(statearr_27873_27914[(2)] = inst_27826);

(statearr_27873_27914[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (2))){
var state_27851__$1 = state_27851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27851__$1,(4),ch);
} else {
if((state_val_27852 === (23))){
var state_27851__$1 = state_27851;
var statearr_27874_27915 = state_27851__$1;
(statearr_27874_27915[(2)] = null);

(statearr_27874_27915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (19))){
var inst_27832 = (state_27851[(11)]);
var inst_27782 = (state_27851[(8)]);
var inst_27834 = cljs.core.async.muxch_STAR_.call(null,inst_27832);
var state_27851__$1 = state_27851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27851__$1,(22),inst_27834,inst_27782);
} else {
if((state_val_27852 === (11))){
var inst_27806 = (state_27851[(10)]);
var inst_27792 = (state_27851[(14)]);
var inst_27806__$1 = cljs.core.seq.call(null,inst_27792);
var state_27851__$1 = (function (){var statearr_27875 = state_27851;
(statearr_27875[(10)] = inst_27806__$1);

return statearr_27875;
})();
if(inst_27806__$1){
var statearr_27876_27916 = state_27851__$1;
(statearr_27876_27916[(1)] = (13));

} else {
var statearr_27877_27917 = state_27851__$1;
(statearr_27877_27917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (9))){
var inst_27828 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
var statearr_27878_27918 = state_27851__$1;
(statearr_27878_27918[(2)] = inst_27828);

(statearr_27878_27918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (5))){
var inst_27789 = cljs.core.deref.call(null,mults);
var inst_27790 = cljs.core.vals.call(null,inst_27789);
var inst_27791 = cljs.core.seq.call(null,inst_27790);
var inst_27792 = inst_27791;
var inst_27793 = null;
var inst_27794 = (0);
var inst_27795 = (0);
var state_27851__$1 = (function (){var statearr_27879 = state_27851;
(statearr_27879[(13)] = inst_27793);

(statearr_27879[(14)] = inst_27792);

(statearr_27879[(15)] = inst_27794);

(statearr_27879[(16)] = inst_27795);

return statearr_27879;
})();
var statearr_27880_27919 = state_27851__$1;
(statearr_27880_27919[(2)] = null);

(statearr_27880_27919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (14))){
var state_27851__$1 = state_27851;
var statearr_27884_27920 = state_27851__$1;
(statearr_27884_27920[(2)] = null);

(statearr_27884_27920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (16))){
var inst_27806 = (state_27851[(10)]);
var inst_27810 = cljs.core.chunk_first.call(null,inst_27806);
var inst_27811 = cljs.core.chunk_rest.call(null,inst_27806);
var inst_27812 = cljs.core.count.call(null,inst_27810);
var inst_27792 = inst_27811;
var inst_27793 = inst_27810;
var inst_27794 = inst_27812;
var inst_27795 = (0);
var state_27851__$1 = (function (){var statearr_27885 = state_27851;
(statearr_27885[(13)] = inst_27793);

(statearr_27885[(14)] = inst_27792);

(statearr_27885[(15)] = inst_27794);

(statearr_27885[(16)] = inst_27795);

return statearr_27885;
})();
var statearr_27886_27921 = state_27851__$1;
(statearr_27886_27921[(2)] = null);

(statearr_27886_27921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (10))){
var inst_27793 = (state_27851[(13)]);
var inst_27792 = (state_27851[(14)]);
var inst_27794 = (state_27851[(15)]);
var inst_27795 = (state_27851[(16)]);
var inst_27800 = cljs.core._nth.call(null,inst_27793,inst_27795);
var inst_27801 = cljs.core.async.muxch_STAR_.call(null,inst_27800);
var inst_27802 = cljs.core.async.close_BANG_.call(null,inst_27801);
var inst_27803 = (inst_27795 + (1));
var tmp27881 = inst_27793;
var tmp27882 = inst_27792;
var tmp27883 = inst_27794;
var inst_27792__$1 = tmp27882;
var inst_27793__$1 = tmp27881;
var inst_27794__$1 = tmp27883;
var inst_27795__$1 = inst_27803;
var state_27851__$1 = (function (){var statearr_27887 = state_27851;
(statearr_27887[(17)] = inst_27802);

(statearr_27887[(13)] = inst_27793__$1);

(statearr_27887[(14)] = inst_27792__$1);

(statearr_27887[(15)] = inst_27794__$1);

(statearr_27887[(16)] = inst_27795__$1);

return statearr_27887;
})();
var statearr_27888_27922 = state_27851__$1;
(statearr_27888_27922[(2)] = null);

(statearr_27888_27922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (18))){
var inst_27821 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
var statearr_27889_27923 = state_27851__$1;
(statearr_27889_27923[(2)] = inst_27821);

(statearr_27889_27923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (8))){
var inst_27794 = (state_27851[(15)]);
var inst_27795 = (state_27851[(16)]);
var inst_27797 = (inst_27795 < inst_27794);
var inst_27798 = inst_27797;
var state_27851__$1 = state_27851;
if(cljs.core.truth_(inst_27798)){
var statearr_27890_27924 = state_27851__$1;
(statearr_27890_27924[(1)] = (10));

} else {
var statearr_27891_27925 = state_27851__$1;
(statearr_27891_27925[(1)] = (11));

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
});})(c__26663__auto___27897,mults,ensure_mult,p))
;
return ((function (switch__26573__auto__,c__26663__auto___27897,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26574__auto__ = null;
var cljs$core$async$state_machine__26574__auto____0 = (function (){
var statearr_27892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27892[(0)] = cljs$core$async$state_machine__26574__auto__);

(statearr_27892[(1)] = (1));

return statearr_27892;
});
var cljs$core$async$state_machine__26574__auto____1 = (function (state_27851){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_27851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e27893){if((e27893 instanceof Object)){
var ex__26577__auto__ = e27893;
var statearr_27894_27926 = state_27851;
(statearr_27894_27926[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27927 = state_27851;
state_27851 = G__27927;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$state_machine__26574__auto__ = function(state_27851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26574__auto____1.call(this,state_27851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26574__auto____0;
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26574__auto____1;
return cljs$core$async$state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___27897,mults,ensure_mult,p))
})();
var state__26665__auto__ = (function (){var statearr_27895 = f__26664__auto__.call(null);
(statearr_27895[(6)] = c__26663__auto___27897);

return statearr_27895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___27897,mults,ensure_mult,p))
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
var G__27929 = arguments.length;
switch (G__27929) {
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
var G__27932 = arguments.length;
switch (G__27932) {
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
var G__27935 = arguments.length;
switch (G__27935) {
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
var c__26663__auto___28002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___28002,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___28002,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27974){
var state_val_27975 = (state_27974[(1)]);
if((state_val_27975 === (7))){
var state_27974__$1 = state_27974;
var statearr_27976_28003 = state_27974__$1;
(statearr_27976_28003[(2)] = null);

(statearr_27976_28003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (1))){
var state_27974__$1 = state_27974;
var statearr_27977_28004 = state_27974__$1;
(statearr_27977_28004[(2)] = null);

(statearr_27977_28004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (4))){
var inst_27938 = (state_27974[(7)]);
var inst_27940 = (inst_27938 < cnt);
var state_27974__$1 = state_27974;
if(cljs.core.truth_(inst_27940)){
var statearr_27978_28005 = state_27974__$1;
(statearr_27978_28005[(1)] = (6));

} else {
var statearr_27979_28006 = state_27974__$1;
(statearr_27979_28006[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (15))){
var inst_27970 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_27980_28007 = state_27974__$1;
(statearr_27980_28007[(2)] = inst_27970);

(statearr_27980_28007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (13))){
var inst_27963 = cljs.core.async.close_BANG_.call(null,out);
var state_27974__$1 = state_27974;
var statearr_27981_28008 = state_27974__$1;
(statearr_27981_28008[(2)] = inst_27963);

(statearr_27981_28008[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (6))){
var state_27974__$1 = state_27974;
var statearr_27982_28009 = state_27974__$1;
(statearr_27982_28009[(2)] = null);

(statearr_27982_28009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (3))){
var inst_27972 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27974__$1,inst_27972);
} else {
if((state_val_27975 === (12))){
var inst_27960 = (state_27974[(8)]);
var inst_27960__$1 = (state_27974[(2)]);
var inst_27961 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27960__$1);
var state_27974__$1 = (function (){var statearr_27983 = state_27974;
(statearr_27983[(8)] = inst_27960__$1);

return statearr_27983;
})();
if(cljs.core.truth_(inst_27961)){
var statearr_27984_28010 = state_27974__$1;
(statearr_27984_28010[(1)] = (13));

} else {
var statearr_27985_28011 = state_27974__$1;
(statearr_27985_28011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (2))){
var inst_27937 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27938 = (0);
var state_27974__$1 = (function (){var statearr_27986 = state_27974;
(statearr_27986[(9)] = inst_27937);

(statearr_27986[(7)] = inst_27938);

return statearr_27986;
})();
var statearr_27987_28012 = state_27974__$1;
(statearr_27987_28012[(2)] = null);

(statearr_27987_28012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (11))){
var inst_27938 = (state_27974[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27974,(10),Object,null,(9));
var inst_27947 = chs__$1.call(null,inst_27938);
var inst_27948 = done.call(null,inst_27938);
var inst_27949 = cljs.core.async.take_BANG_.call(null,inst_27947,inst_27948);
var state_27974__$1 = state_27974;
var statearr_27988_28013 = state_27974__$1;
(statearr_27988_28013[(2)] = inst_27949);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27974__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (9))){
var inst_27938 = (state_27974[(7)]);
var inst_27951 = (state_27974[(2)]);
var inst_27952 = (inst_27938 + (1));
var inst_27938__$1 = inst_27952;
var state_27974__$1 = (function (){var statearr_27989 = state_27974;
(statearr_27989[(10)] = inst_27951);

(statearr_27989[(7)] = inst_27938__$1);

return statearr_27989;
})();
var statearr_27990_28014 = state_27974__$1;
(statearr_27990_28014[(2)] = null);

(statearr_27990_28014[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (5))){
var inst_27958 = (state_27974[(2)]);
var state_27974__$1 = (function (){var statearr_27991 = state_27974;
(statearr_27991[(11)] = inst_27958);

return statearr_27991;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27974__$1,(12),dchan);
} else {
if((state_val_27975 === (14))){
var inst_27960 = (state_27974[(8)]);
var inst_27965 = cljs.core.apply.call(null,f,inst_27960);
var state_27974__$1 = state_27974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27974__$1,(16),out,inst_27965);
} else {
if((state_val_27975 === (16))){
var inst_27967 = (state_27974[(2)]);
var state_27974__$1 = (function (){var statearr_27992 = state_27974;
(statearr_27992[(12)] = inst_27967);

return statearr_27992;
})();
var statearr_27993_28015 = state_27974__$1;
(statearr_27993_28015[(2)] = null);

(statearr_27993_28015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (10))){
var inst_27942 = (state_27974[(2)]);
var inst_27943 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27974__$1 = (function (){var statearr_27994 = state_27974;
(statearr_27994[(13)] = inst_27942);

return statearr_27994;
})();
var statearr_27995_28016 = state_27974__$1;
(statearr_27995_28016[(2)] = inst_27943);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27974__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (8))){
var inst_27956 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_27996_28017 = state_27974__$1;
(statearr_27996_28017[(2)] = inst_27956);

(statearr_27996_28017[(1)] = (5));


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
});})(c__26663__auto___28002,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26573__auto__,c__26663__auto___28002,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26574__auto__ = null;
var cljs$core$async$state_machine__26574__auto____0 = (function (){
var statearr_27997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27997[(0)] = cljs$core$async$state_machine__26574__auto__);

(statearr_27997[(1)] = (1));

return statearr_27997;
});
var cljs$core$async$state_machine__26574__auto____1 = (function (state_27974){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_27974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e27998){if((e27998 instanceof Object)){
var ex__26577__auto__ = e27998;
var statearr_27999_28018 = state_27974;
(statearr_27999_28018[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28019 = state_27974;
state_27974 = G__28019;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$state_machine__26574__auto__ = function(state_27974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26574__auto____1.call(this,state_27974);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26574__auto____0;
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26574__auto____1;
return cljs$core$async$state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___28002,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26665__auto__ = (function (){var statearr_28000 = f__26664__auto__.call(null);
(statearr_28000[(6)] = c__26663__auto___28002);

return statearr_28000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___28002,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28022 = arguments.length;
switch (G__28022) {
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
var c__26663__auto___28076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___28076,out){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___28076,out){
return (function (state_28054){
var state_val_28055 = (state_28054[(1)]);
if((state_val_28055 === (7))){
var inst_28033 = (state_28054[(7)]);
var inst_28034 = (state_28054[(8)]);
var inst_28033__$1 = (state_28054[(2)]);
var inst_28034__$1 = cljs.core.nth.call(null,inst_28033__$1,(0),null);
var inst_28035 = cljs.core.nth.call(null,inst_28033__$1,(1),null);
var inst_28036 = (inst_28034__$1 == null);
var state_28054__$1 = (function (){var statearr_28056 = state_28054;
(statearr_28056[(7)] = inst_28033__$1);

(statearr_28056[(9)] = inst_28035);

(statearr_28056[(8)] = inst_28034__$1);

return statearr_28056;
})();
if(cljs.core.truth_(inst_28036)){
var statearr_28057_28077 = state_28054__$1;
(statearr_28057_28077[(1)] = (8));

} else {
var statearr_28058_28078 = state_28054__$1;
(statearr_28058_28078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (1))){
var inst_28023 = cljs.core.vec.call(null,chs);
var inst_28024 = inst_28023;
var state_28054__$1 = (function (){var statearr_28059 = state_28054;
(statearr_28059[(10)] = inst_28024);

return statearr_28059;
})();
var statearr_28060_28079 = state_28054__$1;
(statearr_28060_28079[(2)] = null);

(statearr_28060_28079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (4))){
var inst_28024 = (state_28054[(10)]);
var state_28054__$1 = state_28054;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28054__$1,(7),inst_28024);
} else {
if((state_val_28055 === (6))){
var inst_28050 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28061_28080 = state_28054__$1;
(statearr_28061_28080[(2)] = inst_28050);

(statearr_28061_28080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (3))){
var inst_28052 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28054__$1,inst_28052);
} else {
if((state_val_28055 === (2))){
var inst_28024 = (state_28054[(10)]);
var inst_28026 = cljs.core.count.call(null,inst_28024);
var inst_28027 = (inst_28026 > (0));
var state_28054__$1 = state_28054;
if(cljs.core.truth_(inst_28027)){
var statearr_28063_28081 = state_28054__$1;
(statearr_28063_28081[(1)] = (4));

} else {
var statearr_28064_28082 = state_28054__$1;
(statearr_28064_28082[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (11))){
var inst_28024 = (state_28054[(10)]);
var inst_28043 = (state_28054[(2)]);
var tmp28062 = inst_28024;
var inst_28024__$1 = tmp28062;
var state_28054__$1 = (function (){var statearr_28065 = state_28054;
(statearr_28065[(10)] = inst_28024__$1);

(statearr_28065[(11)] = inst_28043);

return statearr_28065;
})();
var statearr_28066_28083 = state_28054__$1;
(statearr_28066_28083[(2)] = null);

(statearr_28066_28083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (9))){
var inst_28034 = (state_28054[(8)]);
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28054__$1,(11),out,inst_28034);
} else {
if((state_val_28055 === (5))){
var inst_28048 = cljs.core.async.close_BANG_.call(null,out);
var state_28054__$1 = state_28054;
var statearr_28067_28084 = state_28054__$1;
(statearr_28067_28084[(2)] = inst_28048);

(statearr_28067_28084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (10))){
var inst_28046 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28068_28085 = state_28054__$1;
(statearr_28068_28085[(2)] = inst_28046);

(statearr_28068_28085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (8))){
var inst_28024 = (state_28054[(10)]);
var inst_28033 = (state_28054[(7)]);
var inst_28035 = (state_28054[(9)]);
var inst_28034 = (state_28054[(8)]);
var inst_28038 = (function (){var cs = inst_28024;
var vec__28029 = inst_28033;
var v = inst_28034;
var c = inst_28035;
return ((function (cs,vec__28029,v,c,inst_28024,inst_28033,inst_28035,inst_28034,state_val_28055,c__26663__auto___28076,out){
return (function (p1__28020_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28020_SHARP_);
});
;})(cs,vec__28029,v,c,inst_28024,inst_28033,inst_28035,inst_28034,state_val_28055,c__26663__auto___28076,out))
})();
var inst_28039 = cljs.core.filterv.call(null,inst_28038,inst_28024);
var inst_28024__$1 = inst_28039;
var state_28054__$1 = (function (){var statearr_28069 = state_28054;
(statearr_28069[(10)] = inst_28024__$1);

return statearr_28069;
})();
var statearr_28070_28086 = state_28054__$1;
(statearr_28070_28086[(2)] = null);

(statearr_28070_28086[(1)] = (2));


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
});})(c__26663__auto___28076,out))
;
return ((function (switch__26573__auto__,c__26663__auto___28076,out){
return (function() {
var cljs$core$async$state_machine__26574__auto__ = null;
var cljs$core$async$state_machine__26574__auto____0 = (function (){
var statearr_28071 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28071[(0)] = cljs$core$async$state_machine__26574__auto__);

(statearr_28071[(1)] = (1));

return statearr_28071;
});
var cljs$core$async$state_machine__26574__auto____1 = (function (state_28054){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_28054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e28072){if((e28072 instanceof Object)){
var ex__26577__auto__ = e28072;
var statearr_28073_28087 = state_28054;
(statearr_28073_28087[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28088 = state_28054;
state_28054 = G__28088;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$state_machine__26574__auto__ = function(state_28054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26574__auto____1.call(this,state_28054);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26574__auto____0;
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26574__auto____1;
return cljs$core$async$state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___28076,out))
})();
var state__26665__auto__ = (function (){var statearr_28074 = f__26664__auto__.call(null);
(statearr_28074[(6)] = c__26663__auto___28076);

return statearr_28074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___28076,out))
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
var G__28090 = arguments.length;
switch (G__28090) {
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
var c__26663__auto___28135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___28135,out){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___28135,out){
return (function (state_28114){
var state_val_28115 = (state_28114[(1)]);
if((state_val_28115 === (7))){
var inst_28096 = (state_28114[(7)]);
var inst_28096__$1 = (state_28114[(2)]);
var inst_28097 = (inst_28096__$1 == null);
var inst_28098 = cljs.core.not.call(null,inst_28097);
var state_28114__$1 = (function (){var statearr_28116 = state_28114;
(statearr_28116[(7)] = inst_28096__$1);

return statearr_28116;
})();
if(inst_28098){
var statearr_28117_28136 = state_28114__$1;
(statearr_28117_28136[(1)] = (8));

} else {
var statearr_28118_28137 = state_28114__$1;
(statearr_28118_28137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (1))){
var inst_28091 = (0);
var state_28114__$1 = (function (){var statearr_28119 = state_28114;
(statearr_28119[(8)] = inst_28091);

return statearr_28119;
})();
var statearr_28120_28138 = state_28114__$1;
(statearr_28120_28138[(2)] = null);

(statearr_28120_28138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (4))){
var state_28114__$1 = state_28114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28114__$1,(7),ch);
} else {
if((state_val_28115 === (6))){
var inst_28109 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
var statearr_28121_28139 = state_28114__$1;
(statearr_28121_28139[(2)] = inst_28109);

(statearr_28121_28139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (3))){
var inst_28111 = (state_28114[(2)]);
var inst_28112 = cljs.core.async.close_BANG_.call(null,out);
var state_28114__$1 = (function (){var statearr_28122 = state_28114;
(statearr_28122[(9)] = inst_28111);

return statearr_28122;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28114__$1,inst_28112);
} else {
if((state_val_28115 === (2))){
var inst_28091 = (state_28114[(8)]);
var inst_28093 = (inst_28091 < n);
var state_28114__$1 = state_28114;
if(cljs.core.truth_(inst_28093)){
var statearr_28123_28140 = state_28114__$1;
(statearr_28123_28140[(1)] = (4));

} else {
var statearr_28124_28141 = state_28114__$1;
(statearr_28124_28141[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (11))){
var inst_28091 = (state_28114[(8)]);
var inst_28101 = (state_28114[(2)]);
var inst_28102 = (inst_28091 + (1));
var inst_28091__$1 = inst_28102;
var state_28114__$1 = (function (){var statearr_28125 = state_28114;
(statearr_28125[(10)] = inst_28101);

(statearr_28125[(8)] = inst_28091__$1);

return statearr_28125;
})();
var statearr_28126_28142 = state_28114__$1;
(statearr_28126_28142[(2)] = null);

(statearr_28126_28142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (9))){
var state_28114__$1 = state_28114;
var statearr_28127_28143 = state_28114__$1;
(statearr_28127_28143[(2)] = null);

(statearr_28127_28143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (5))){
var state_28114__$1 = state_28114;
var statearr_28128_28144 = state_28114__$1;
(statearr_28128_28144[(2)] = null);

(statearr_28128_28144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (10))){
var inst_28106 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
var statearr_28129_28145 = state_28114__$1;
(statearr_28129_28145[(2)] = inst_28106);

(statearr_28129_28145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (8))){
var inst_28096 = (state_28114[(7)]);
var state_28114__$1 = state_28114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28114__$1,(11),out,inst_28096);
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
});})(c__26663__auto___28135,out))
;
return ((function (switch__26573__auto__,c__26663__auto___28135,out){
return (function() {
var cljs$core$async$state_machine__26574__auto__ = null;
var cljs$core$async$state_machine__26574__auto____0 = (function (){
var statearr_28130 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28130[(0)] = cljs$core$async$state_machine__26574__auto__);

(statearr_28130[(1)] = (1));

return statearr_28130;
});
var cljs$core$async$state_machine__26574__auto____1 = (function (state_28114){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_28114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e28131){if((e28131 instanceof Object)){
var ex__26577__auto__ = e28131;
var statearr_28132_28146 = state_28114;
(statearr_28132_28146[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28147 = state_28114;
state_28114 = G__28147;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$state_machine__26574__auto__ = function(state_28114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26574__auto____1.call(this,state_28114);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26574__auto____0;
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26574__auto____1;
return cljs$core$async$state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___28135,out))
})();
var state__26665__auto__ = (function (){var statearr_28133 = f__26664__auto__.call(null);
(statearr_28133[(6)] = c__26663__auto___28135);

return statearr_28133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___28135,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28149 = (function (f,ch,meta28150){
this.f = f;
this.ch = ch;
this.meta28150 = meta28150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28151,meta28150__$1){
var self__ = this;
var _28151__$1 = this;
return (new cljs.core.async.t_cljs$core$async28149(self__.f,self__.ch,meta28150__$1));
});

cljs.core.async.t_cljs$core$async28149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28151){
var self__ = this;
var _28151__$1 = this;
return self__.meta28150;
});

cljs.core.async.t_cljs$core$async28149.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28149.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28149.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28152 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28152 = (function (f,ch,meta28150,_,fn1,meta28153){
this.f = f;
this.ch = ch;
this.meta28150 = meta28150;
this._ = _;
this.fn1 = fn1;
this.meta28153 = meta28153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28154,meta28153__$1){
var self__ = this;
var _28154__$1 = this;
return (new cljs.core.async.t_cljs$core$async28152(self__.f,self__.ch,self__.meta28150,self__._,self__.fn1,meta28153__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28154){
var self__ = this;
var _28154__$1 = this;
return self__.meta28153;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28152.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28152.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28152.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28152.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28148_SHARP_){
return f1.call(null,(((p1__28148_SHARP_ == null))?null:self__.f.call(null,p1__28148_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28152.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28150","meta28150",-1636126265,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28149","cljs.core.async/t_cljs$core$async28149",503501141,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28153","meta28153",1266023583,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28152";

cljs.core.async.t_cljs$core$async28152.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28152");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28152.
 */
cljs.core.async.__GT_t_cljs$core$async28152 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28152(f__$1,ch__$1,meta28150__$1,___$2,fn1__$1,meta28153){
return (new cljs.core.async.t_cljs$core$async28152(f__$1,ch__$1,meta28150__$1,___$2,fn1__$1,meta28153));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28152(self__.f,self__.ch,self__.meta28150,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async28149.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28150","meta28150",-1636126265,null)], null);
});

cljs.core.async.t_cljs$core$async28149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28149";

cljs.core.async.t_cljs$core$async28149.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28149");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28149.
 */
cljs.core.async.__GT_t_cljs$core$async28149 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28149(f__$1,ch__$1,meta28150){
return (new cljs.core.async.t_cljs$core$async28149(f__$1,ch__$1,meta28150));
});

}

return (new cljs.core.async.t_cljs$core$async28149(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28155 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28155 = (function (f,ch,meta28156){
this.f = f;
this.ch = ch;
this.meta28156 = meta28156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28157,meta28156__$1){
var self__ = this;
var _28157__$1 = this;
return (new cljs.core.async.t_cljs$core$async28155(self__.f,self__.ch,meta28156__$1));
});

cljs.core.async.t_cljs$core$async28155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28157){
var self__ = this;
var _28157__$1 = this;
return self__.meta28156;
});

cljs.core.async.t_cljs$core$async28155.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28155.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28155.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28155.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28155.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28155.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28156","meta28156",799999676,null)], null);
});

cljs.core.async.t_cljs$core$async28155.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28155";

cljs.core.async.t_cljs$core$async28155.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28155");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28155.
 */
cljs.core.async.__GT_t_cljs$core$async28155 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28155(f__$1,ch__$1,meta28156){
return (new cljs.core.async.t_cljs$core$async28155(f__$1,ch__$1,meta28156));
});

}

return (new cljs.core.async.t_cljs$core$async28155(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28158 = (function (p,ch,meta28159){
this.p = p;
this.ch = ch;
this.meta28159 = meta28159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28160,meta28159__$1){
var self__ = this;
var _28160__$1 = this;
return (new cljs.core.async.t_cljs$core$async28158(self__.p,self__.ch,meta28159__$1));
});

cljs.core.async.t_cljs$core$async28158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28160){
var self__ = this;
var _28160__$1 = this;
return self__.meta28159;
});

cljs.core.async.t_cljs$core$async28158.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28158.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28158.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28158.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28158.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28158.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28158.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28159","meta28159",1075827614,null)], null);
});

cljs.core.async.t_cljs$core$async28158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28158";

cljs.core.async.t_cljs$core$async28158.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28158");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28158.
 */
cljs.core.async.__GT_t_cljs$core$async28158 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28158(p__$1,ch__$1,meta28159){
return (new cljs.core.async.t_cljs$core$async28158(p__$1,ch__$1,meta28159));
});

}

return (new cljs.core.async.t_cljs$core$async28158(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28162 = arguments.length;
switch (G__28162) {
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
var c__26663__auto___28202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___28202,out){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___28202,out){
return (function (state_28183){
var state_val_28184 = (state_28183[(1)]);
if((state_val_28184 === (7))){
var inst_28179 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
var statearr_28185_28203 = state_28183__$1;
(statearr_28185_28203[(2)] = inst_28179);

(statearr_28185_28203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (1))){
var state_28183__$1 = state_28183;
var statearr_28186_28204 = state_28183__$1;
(statearr_28186_28204[(2)] = null);

(statearr_28186_28204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (4))){
var inst_28165 = (state_28183[(7)]);
var inst_28165__$1 = (state_28183[(2)]);
var inst_28166 = (inst_28165__$1 == null);
var state_28183__$1 = (function (){var statearr_28187 = state_28183;
(statearr_28187[(7)] = inst_28165__$1);

return statearr_28187;
})();
if(cljs.core.truth_(inst_28166)){
var statearr_28188_28205 = state_28183__$1;
(statearr_28188_28205[(1)] = (5));

} else {
var statearr_28189_28206 = state_28183__$1;
(statearr_28189_28206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (6))){
var inst_28165 = (state_28183[(7)]);
var inst_28170 = p.call(null,inst_28165);
var state_28183__$1 = state_28183;
if(cljs.core.truth_(inst_28170)){
var statearr_28190_28207 = state_28183__$1;
(statearr_28190_28207[(1)] = (8));

} else {
var statearr_28191_28208 = state_28183__$1;
(statearr_28191_28208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (3))){
var inst_28181 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28183__$1,inst_28181);
} else {
if((state_val_28184 === (2))){
var state_28183__$1 = state_28183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28183__$1,(4),ch);
} else {
if((state_val_28184 === (11))){
var inst_28173 = (state_28183[(2)]);
var state_28183__$1 = state_28183;
var statearr_28192_28209 = state_28183__$1;
(statearr_28192_28209[(2)] = inst_28173);

(statearr_28192_28209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (9))){
var state_28183__$1 = state_28183;
var statearr_28193_28210 = state_28183__$1;
(statearr_28193_28210[(2)] = null);

(statearr_28193_28210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (5))){
var inst_28168 = cljs.core.async.close_BANG_.call(null,out);
var state_28183__$1 = state_28183;
var statearr_28194_28211 = state_28183__$1;
(statearr_28194_28211[(2)] = inst_28168);

(statearr_28194_28211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (10))){
var inst_28176 = (state_28183[(2)]);
var state_28183__$1 = (function (){var statearr_28195 = state_28183;
(statearr_28195[(8)] = inst_28176);

return statearr_28195;
})();
var statearr_28196_28212 = state_28183__$1;
(statearr_28196_28212[(2)] = null);

(statearr_28196_28212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28184 === (8))){
var inst_28165 = (state_28183[(7)]);
var state_28183__$1 = state_28183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28183__$1,(11),out,inst_28165);
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
});})(c__26663__auto___28202,out))
;
return ((function (switch__26573__auto__,c__26663__auto___28202,out){
return (function() {
var cljs$core$async$state_machine__26574__auto__ = null;
var cljs$core$async$state_machine__26574__auto____0 = (function (){
var statearr_28197 = [null,null,null,null,null,null,null,null,null];
(statearr_28197[(0)] = cljs$core$async$state_machine__26574__auto__);

(statearr_28197[(1)] = (1));

return statearr_28197;
});
var cljs$core$async$state_machine__26574__auto____1 = (function (state_28183){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_28183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e28198){if((e28198 instanceof Object)){
var ex__26577__auto__ = e28198;
var statearr_28199_28213 = state_28183;
(statearr_28199_28213[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28214 = state_28183;
state_28183 = G__28214;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$state_machine__26574__auto__ = function(state_28183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26574__auto____1.call(this,state_28183);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26574__auto____0;
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26574__auto____1;
return cljs$core$async$state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___28202,out))
})();
var state__26665__auto__ = (function (){var statearr_28200 = f__26664__auto__.call(null);
(statearr_28200[(6)] = c__26663__auto___28202);

return statearr_28200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___28202,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28216 = arguments.length;
switch (G__28216) {
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
var c__26663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto__){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto__){
return (function (state_28279){
var state_val_28280 = (state_28279[(1)]);
if((state_val_28280 === (7))){
var inst_28275 = (state_28279[(2)]);
var state_28279__$1 = state_28279;
var statearr_28281_28319 = state_28279__$1;
(statearr_28281_28319[(2)] = inst_28275);

(statearr_28281_28319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (20))){
var inst_28245 = (state_28279[(7)]);
var inst_28256 = (state_28279[(2)]);
var inst_28257 = cljs.core.next.call(null,inst_28245);
var inst_28231 = inst_28257;
var inst_28232 = null;
var inst_28233 = (0);
var inst_28234 = (0);
var state_28279__$1 = (function (){var statearr_28282 = state_28279;
(statearr_28282[(8)] = inst_28234);

(statearr_28282[(9)] = inst_28256);

(statearr_28282[(10)] = inst_28232);

(statearr_28282[(11)] = inst_28233);

(statearr_28282[(12)] = inst_28231);

return statearr_28282;
})();
var statearr_28283_28320 = state_28279__$1;
(statearr_28283_28320[(2)] = null);

(statearr_28283_28320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (1))){
var state_28279__$1 = state_28279;
var statearr_28284_28321 = state_28279__$1;
(statearr_28284_28321[(2)] = null);

(statearr_28284_28321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (4))){
var inst_28220 = (state_28279[(13)]);
var inst_28220__$1 = (state_28279[(2)]);
var inst_28221 = (inst_28220__$1 == null);
var state_28279__$1 = (function (){var statearr_28285 = state_28279;
(statearr_28285[(13)] = inst_28220__$1);

return statearr_28285;
})();
if(cljs.core.truth_(inst_28221)){
var statearr_28286_28322 = state_28279__$1;
(statearr_28286_28322[(1)] = (5));

} else {
var statearr_28287_28323 = state_28279__$1;
(statearr_28287_28323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (15))){
var state_28279__$1 = state_28279;
var statearr_28291_28324 = state_28279__$1;
(statearr_28291_28324[(2)] = null);

(statearr_28291_28324[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (21))){
var state_28279__$1 = state_28279;
var statearr_28292_28325 = state_28279__$1;
(statearr_28292_28325[(2)] = null);

(statearr_28292_28325[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (13))){
var inst_28234 = (state_28279[(8)]);
var inst_28232 = (state_28279[(10)]);
var inst_28233 = (state_28279[(11)]);
var inst_28231 = (state_28279[(12)]);
var inst_28241 = (state_28279[(2)]);
var inst_28242 = (inst_28234 + (1));
var tmp28288 = inst_28232;
var tmp28289 = inst_28233;
var tmp28290 = inst_28231;
var inst_28231__$1 = tmp28290;
var inst_28232__$1 = tmp28288;
var inst_28233__$1 = tmp28289;
var inst_28234__$1 = inst_28242;
var state_28279__$1 = (function (){var statearr_28293 = state_28279;
(statearr_28293[(8)] = inst_28234__$1);

(statearr_28293[(14)] = inst_28241);

(statearr_28293[(10)] = inst_28232__$1);

(statearr_28293[(11)] = inst_28233__$1);

(statearr_28293[(12)] = inst_28231__$1);

return statearr_28293;
})();
var statearr_28294_28326 = state_28279__$1;
(statearr_28294_28326[(2)] = null);

(statearr_28294_28326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (22))){
var state_28279__$1 = state_28279;
var statearr_28295_28327 = state_28279__$1;
(statearr_28295_28327[(2)] = null);

(statearr_28295_28327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (6))){
var inst_28220 = (state_28279[(13)]);
var inst_28229 = f.call(null,inst_28220);
var inst_28230 = cljs.core.seq.call(null,inst_28229);
var inst_28231 = inst_28230;
var inst_28232 = null;
var inst_28233 = (0);
var inst_28234 = (0);
var state_28279__$1 = (function (){var statearr_28296 = state_28279;
(statearr_28296[(8)] = inst_28234);

(statearr_28296[(10)] = inst_28232);

(statearr_28296[(11)] = inst_28233);

(statearr_28296[(12)] = inst_28231);

return statearr_28296;
})();
var statearr_28297_28328 = state_28279__$1;
(statearr_28297_28328[(2)] = null);

(statearr_28297_28328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (17))){
var inst_28245 = (state_28279[(7)]);
var inst_28249 = cljs.core.chunk_first.call(null,inst_28245);
var inst_28250 = cljs.core.chunk_rest.call(null,inst_28245);
var inst_28251 = cljs.core.count.call(null,inst_28249);
var inst_28231 = inst_28250;
var inst_28232 = inst_28249;
var inst_28233 = inst_28251;
var inst_28234 = (0);
var state_28279__$1 = (function (){var statearr_28298 = state_28279;
(statearr_28298[(8)] = inst_28234);

(statearr_28298[(10)] = inst_28232);

(statearr_28298[(11)] = inst_28233);

(statearr_28298[(12)] = inst_28231);

return statearr_28298;
})();
var statearr_28299_28329 = state_28279__$1;
(statearr_28299_28329[(2)] = null);

(statearr_28299_28329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (3))){
var inst_28277 = (state_28279[(2)]);
var state_28279__$1 = state_28279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28279__$1,inst_28277);
} else {
if((state_val_28280 === (12))){
var inst_28265 = (state_28279[(2)]);
var state_28279__$1 = state_28279;
var statearr_28300_28330 = state_28279__$1;
(statearr_28300_28330[(2)] = inst_28265);

(statearr_28300_28330[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (2))){
var state_28279__$1 = state_28279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28279__$1,(4),in$);
} else {
if((state_val_28280 === (23))){
var inst_28273 = (state_28279[(2)]);
var state_28279__$1 = state_28279;
var statearr_28301_28331 = state_28279__$1;
(statearr_28301_28331[(2)] = inst_28273);

(statearr_28301_28331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (19))){
var inst_28260 = (state_28279[(2)]);
var state_28279__$1 = state_28279;
var statearr_28302_28332 = state_28279__$1;
(statearr_28302_28332[(2)] = inst_28260);

(statearr_28302_28332[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (11))){
var inst_28245 = (state_28279[(7)]);
var inst_28231 = (state_28279[(12)]);
var inst_28245__$1 = cljs.core.seq.call(null,inst_28231);
var state_28279__$1 = (function (){var statearr_28303 = state_28279;
(statearr_28303[(7)] = inst_28245__$1);

return statearr_28303;
})();
if(inst_28245__$1){
var statearr_28304_28333 = state_28279__$1;
(statearr_28304_28333[(1)] = (14));

} else {
var statearr_28305_28334 = state_28279__$1;
(statearr_28305_28334[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (9))){
var inst_28267 = (state_28279[(2)]);
var inst_28268 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28279__$1 = (function (){var statearr_28306 = state_28279;
(statearr_28306[(15)] = inst_28267);

return statearr_28306;
})();
if(cljs.core.truth_(inst_28268)){
var statearr_28307_28335 = state_28279__$1;
(statearr_28307_28335[(1)] = (21));

} else {
var statearr_28308_28336 = state_28279__$1;
(statearr_28308_28336[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (5))){
var inst_28223 = cljs.core.async.close_BANG_.call(null,out);
var state_28279__$1 = state_28279;
var statearr_28309_28337 = state_28279__$1;
(statearr_28309_28337[(2)] = inst_28223);

(statearr_28309_28337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (14))){
var inst_28245 = (state_28279[(7)]);
var inst_28247 = cljs.core.chunked_seq_QMARK_.call(null,inst_28245);
var state_28279__$1 = state_28279;
if(inst_28247){
var statearr_28310_28338 = state_28279__$1;
(statearr_28310_28338[(1)] = (17));

} else {
var statearr_28311_28339 = state_28279__$1;
(statearr_28311_28339[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (16))){
var inst_28263 = (state_28279[(2)]);
var state_28279__$1 = state_28279;
var statearr_28312_28340 = state_28279__$1;
(statearr_28312_28340[(2)] = inst_28263);

(statearr_28312_28340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28280 === (10))){
var inst_28234 = (state_28279[(8)]);
var inst_28232 = (state_28279[(10)]);
var inst_28239 = cljs.core._nth.call(null,inst_28232,inst_28234);
var state_28279__$1 = state_28279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28279__$1,(13),out,inst_28239);
} else {
if((state_val_28280 === (18))){
var inst_28245 = (state_28279[(7)]);
var inst_28254 = cljs.core.first.call(null,inst_28245);
var state_28279__$1 = state_28279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28279__$1,(20),out,inst_28254);
} else {
if((state_val_28280 === (8))){
var inst_28234 = (state_28279[(8)]);
var inst_28233 = (state_28279[(11)]);
var inst_28236 = (inst_28234 < inst_28233);
var inst_28237 = inst_28236;
var state_28279__$1 = state_28279;
if(cljs.core.truth_(inst_28237)){
var statearr_28313_28341 = state_28279__$1;
(statearr_28313_28341[(1)] = (10));

} else {
var statearr_28314_28342 = state_28279__$1;
(statearr_28314_28342[(1)] = (11));

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
});})(c__26663__auto__))
;
return ((function (switch__26573__auto__,c__26663__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26574__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26574__auto____0 = (function (){
var statearr_28315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28315[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26574__auto__);

(statearr_28315[(1)] = (1));

return statearr_28315;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26574__auto____1 = (function (state_28279){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_28279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e28316){if((e28316 instanceof Object)){
var ex__26577__auto__ = e28316;
var statearr_28317_28343 = state_28279;
(statearr_28317_28343[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28344 = state_28279;
state_28279 = G__28344;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26574__auto__ = function(state_28279){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26574__auto____1.call(this,state_28279);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26574__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26574__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto__))
})();
var state__26665__auto__ = (function (){var statearr_28318 = f__26664__auto__.call(null);
(statearr_28318[(6)] = c__26663__auto__);

return statearr_28318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto__))
);

return c__26663__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28346 = arguments.length;
switch (G__28346) {
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
var G__28349 = arguments.length;
switch (G__28349) {
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
var G__28352 = arguments.length;
switch (G__28352) {
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
var c__26663__auto___28399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___28399,out){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___28399,out){
return (function (state_28376){
var state_val_28377 = (state_28376[(1)]);
if((state_val_28377 === (7))){
var inst_28371 = (state_28376[(2)]);
var state_28376__$1 = state_28376;
var statearr_28378_28400 = state_28376__$1;
(statearr_28378_28400[(2)] = inst_28371);

(statearr_28378_28400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (1))){
var inst_28353 = null;
var state_28376__$1 = (function (){var statearr_28379 = state_28376;
(statearr_28379[(7)] = inst_28353);

return statearr_28379;
})();
var statearr_28380_28401 = state_28376__$1;
(statearr_28380_28401[(2)] = null);

(statearr_28380_28401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (4))){
var inst_28356 = (state_28376[(8)]);
var inst_28356__$1 = (state_28376[(2)]);
var inst_28357 = (inst_28356__$1 == null);
var inst_28358 = cljs.core.not.call(null,inst_28357);
var state_28376__$1 = (function (){var statearr_28381 = state_28376;
(statearr_28381[(8)] = inst_28356__$1);

return statearr_28381;
})();
if(inst_28358){
var statearr_28382_28402 = state_28376__$1;
(statearr_28382_28402[(1)] = (5));

} else {
var statearr_28383_28403 = state_28376__$1;
(statearr_28383_28403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (6))){
var state_28376__$1 = state_28376;
var statearr_28384_28404 = state_28376__$1;
(statearr_28384_28404[(2)] = null);

(statearr_28384_28404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (3))){
var inst_28373 = (state_28376[(2)]);
var inst_28374 = cljs.core.async.close_BANG_.call(null,out);
var state_28376__$1 = (function (){var statearr_28385 = state_28376;
(statearr_28385[(9)] = inst_28373);

return statearr_28385;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28376__$1,inst_28374);
} else {
if((state_val_28377 === (2))){
var state_28376__$1 = state_28376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28376__$1,(4),ch);
} else {
if((state_val_28377 === (11))){
var inst_28356 = (state_28376[(8)]);
var inst_28365 = (state_28376[(2)]);
var inst_28353 = inst_28356;
var state_28376__$1 = (function (){var statearr_28386 = state_28376;
(statearr_28386[(7)] = inst_28353);

(statearr_28386[(10)] = inst_28365);

return statearr_28386;
})();
var statearr_28387_28405 = state_28376__$1;
(statearr_28387_28405[(2)] = null);

(statearr_28387_28405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (9))){
var inst_28356 = (state_28376[(8)]);
var state_28376__$1 = state_28376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28376__$1,(11),out,inst_28356);
} else {
if((state_val_28377 === (5))){
var inst_28356 = (state_28376[(8)]);
var inst_28353 = (state_28376[(7)]);
var inst_28360 = cljs.core._EQ_.call(null,inst_28356,inst_28353);
var state_28376__$1 = state_28376;
if(inst_28360){
var statearr_28389_28406 = state_28376__$1;
(statearr_28389_28406[(1)] = (8));

} else {
var statearr_28390_28407 = state_28376__$1;
(statearr_28390_28407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (10))){
var inst_28368 = (state_28376[(2)]);
var state_28376__$1 = state_28376;
var statearr_28391_28408 = state_28376__$1;
(statearr_28391_28408[(2)] = inst_28368);

(statearr_28391_28408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (8))){
var inst_28353 = (state_28376[(7)]);
var tmp28388 = inst_28353;
var inst_28353__$1 = tmp28388;
var state_28376__$1 = (function (){var statearr_28392 = state_28376;
(statearr_28392[(7)] = inst_28353__$1);

return statearr_28392;
})();
var statearr_28393_28409 = state_28376__$1;
(statearr_28393_28409[(2)] = null);

(statearr_28393_28409[(1)] = (2));


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
});})(c__26663__auto___28399,out))
;
return ((function (switch__26573__auto__,c__26663__auto___28399,out){
return (function() {
var cljs$core$async$state_machine__26574__auto__ = null;
var cljs$core$async$state_machine__26574__auto____0 = (function (){
var statearr_28394 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28394[(0)] = cljs$core$async$state_machine__26574__auto__);

(statearr_28394[(1)] = (1));

return statearr_28394;
});
var cljs$core$async$state_machine__26574__auto____1 = (function (state_28376){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_28376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e28395){if((e28395 instanceof Object)){
var ex__26577__auto__ = e28395;
var statearr_28396_28410 = state_28376;
(statearr_28396_28410[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28411 = state_28376;
state_28376 = G__28411;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$state_machine__26574__auto__ = function(state_28376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26574__auto____1.call(this,state_28376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26574__auto____0;
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26574__auto____1;
return cljs$core$async$state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___28399,out))
})();
var state__26665__auto__ = (function (){var statearr_28397 = f__26664__auto__.call(null);
(statearr_28397[(6)] = c__26663__auto___28399);

return statearr_28397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___28399,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28413 = arguments.length;
switch (G__28413) {
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
var c__26663__auto___28479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___28479,out){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___28479,out){
return (function (state_28451){
var state_val_28452 = (state_28451[(1)]);
if((state_val_28452 === (7))){
var inst_28447 = (state_28451[(2)]);
var state_28451__$1 = state_28451;
var statearr_28453_28480 = state_28451__$1;
(statearr_28453_28480[(2)] = inst_28447);

(statearr_28453_28480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (1))){
var inst_28414 = (new Array(n));
var inst_28415 = inst_28414;
var inst_28416 = (0);
var state_28451__$1 = (function (){var statearr_28454 = state_28451;
(statearr_28454[(7)] = inst_28416);

(statearr_28454[(8)] = inst_28415);

return statearr_28454;
})();
var statearr_28455_28481 = state_28451__$1;
(statearr_28455_28481[(2)] = null);

(statearr_28455_28481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (4))){
var inst_28419 = (state_28451[(9)]);
var inst_28419__$1 = (state_28451[(2)]);
var inst_28420 = (inst_28419__$1 == null);
var inst_28421 = cljs.core.not.call(null,inst_28420);
var state_28451__$1 = (function (){var statearr_28456 = state_28451;
(statearr_28456[(9)] = inst_28419__$1);

return statearr_28456;
})();
if(inst_28421){
var statearr_28457_28482 = state_28451__$1;
(statearr_28457_28482[(1)] = (5));

} else {
var statearr_28458_28483 = state_28451__$1;
(statearr_28458_28483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (15))){
var inst_28441 = (state_28451[(2)]);
var state_28451__$1 = state_28451;
var statearr_28459_28484 = state_28451__$1;
(statearr_28459_28484[(2)] = inst_28441);

(statearr_28459_28484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (13))){
var state_28451__$1 = state_28451;
var statearr_28460_28485 = state_28451__$1;
(statearr_28460_28485[(2)] = null);

(statearr_28460_28485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (6))){
var inst_28416 = (state_28451[(7)]);
var inst_28437 = (inst_28416 > (0));
var state_28451__$1 = state_28451;
if(cljs.core.truth_(inst_28437)){
var statearr_28461_28486 = state_28451__$1;
(statearr_28461_28486[(1)] = (12));

} else {
var statearr_28462_28487 = state_28451__$1;
(statearr_28462_28487[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (3))){
var inst_28449 = (state_28451[(2)]);
var state_28451__$1 = state_28451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28451__$1,inst_28449);
} else {
if((state_val_28452 === (12))){
var inst_28415 = (state_28451[(8)]);
var inst_28439 = cljs.core.vec.call(null,inst_28415);
var state_28451__$1 = state_28451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28451__$1,(15),out,inst_28439);
} else {
if((state_val_28452 === (2))){
var state_28451__$1 = state_28451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28451__$1,(4),ch);
} else {
if((state_val_28452 === (11))){
var inst_28431 = (state_28451[(2)]);
var inst_28432 = (new Array(n));
var inst_28415 = inst_28432;
var inst_28416 = (0);
var state_28451__$1 = (function (){var statearr_28463 = state_28451;
(statearr_28463[(7)] = inst_28416);

(statearr_28463[(8)] = inst_28415);

(statearr_28463[(10)] = inst_28431);

return statearr_28463;
})();
var statearr_28464_28488 = state_28451__$1;
(statearr_28464_28488[(2)] = null);

(statearr_28464_28488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (9))){
var inst_28415 = (state_28451[(8)]);
var inst_28429 = cljs.core.vec.call(null,inst_28415);
var state_28451__$1 = state_28451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28451__$1,(11),out,inst_28429);
} else {
if((state_val_28452 === (5))){
var inst_28424 = (state_28451[(11)]);
var inst_28416 = (state_28451[(7)]);
var inst_28419 = (state_28451[(9)]);
var inst_28415 = (state_28451[(8)]);
var inst_28423 = (inst_28415[inst_28416] = inst_28419);
var inst_28424__$1 = (inst_28416 + (1));
var inst_28425 = (inst_28424__$1 < n);
var state_28451__$1 = (function (){var statearr_28465 = state_28451;
(statearr_28465[(11)] = inst_28424__$1);

(statearr_28465[(12)] = inst_28423);

return statearr_28465;
})();
if(cljs.core.truth_(inst_28425)){
var statearr_28466_28489 = state_28451__$1;
(statearr_28466_28489[(1)] = (8));

} else {
var statearr_28467_28490 = state_28451__$1;
(statearr_28467_28490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (14))){
var inst_28444 = (state_28451[(2)]);
var inst_28445 = cljs.core.async.close_BANG_.call(null,out);
var state_28451__$1 = (function (){var statearr_28469 = state_28451;
(statearr_28469[(13)] = inst_28444);

return statearr_28469;
})();
var statearr_28470_28491 = state_28451__$1;
(statearr_28470_28491[(2)] = inst_28445);

(statearr_28470_28491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (10))){
var inst_28435 = (state_28451[(2)]);
var state_28451__$1 = state_28451;
var statearr_28471_28492 = state_28451__$1;
(statearr_28471_28492[(2)] = inst_28435);

(statearr_28471_28492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (8))){
var inst_28424 = (state_28451[(11)]);
var inst_28415 = (state_28451[(8)]);
var tmp28468 = inst_28415;
var inst_28415__$1 = tmp28468;
var inst_28416 = inst_28424;
var state_28451__$1 = (function (){var statearr_28472 = state_28451;
(statearr_28472[(7)] = inst_28416);

(statearr_28472[(8)] = inst_28415__$1);

return statearr_28472;
})();
var statearr_28473_28493 = state_28451__$1;
(statearr_28473_28493[(2)] = null);

(statearr_28473_28493[(1)] = (2));


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
});})(c__26663__auto___28479,out))
;
return ((function (switch__26573__auto__,c__26663__auto___28479,out){
return (function() {
var cljs$core$async$state_machine__26574__auto__ = null;
var cljs$core$async$state_machine__26574__auto____0 = (function (){
var statearr_28474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28474[(0)] = cljs$core$async$state_machine__26574__auto__);

(statearr_28474[(1)] = (1));

return statearr_28474;
});
var cljs$core$async$state_machine__26574__auto____1 = (function (state_28451){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_28451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e28475){if((e28475 instanceof Object)){
var ex__26577__auto__ = e28475;
var statearr_28476_28494 = state_28451;
(statearr_28476_28494[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28495 = state_28451;
state_28451 = G__28495;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$state_machine__26574__auto__ = function(state_28451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26574__auto____1.call(this,state_28451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26574__auto____0;
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26574__auto____1;
return cljs$core$async$state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___28479,out))
})();
var state__26665__auto__ = (function (){var statearr_28477 = f__26664__auto__.call(null);
(statearr_28477[(6)] = c__26663__auto___28479);

return statearr_28477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___28479,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28497 = arguments.length;
switch (G__28497) {
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
var c__26663__auto___28567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26663__auto___28567,out){
return (function (){
var f__26664__auto__ = (function (){var switch__26573__auto__ = ((function (c__26663__auto___28567,out){
return (function (state_28539){
var state_val_28540 = (state_28539[(1)]);
if((state_val_28540 === (7))){
var inst_28535 = (state_28539[(2)]);
var state_28539__$1 = state_28539;
var statearr_28541_28568 = state_28539__$1;
(statearr_28541_28568[(2)] = inst_28535);

(statearr_28541_28568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (1))){
var inst_28498 = [];
var inst_28499 = inst_28498;
var inst_28500 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28539__$1 = (function (){var statearr_28542 = state_28539;
(statearr_28542[(7)] = inst_28499);

(statearr_28542[(8)] = inst_28500);

return statearr_28542;
})();
var statearr_28543_28569 = state_28539__$1;
(statearr_28543_28569[(2)] = null);

(statearr_28543_28569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (4))){
var inst_28503 = (state_28539[(9)]);
var inst_28503__$1 = (state_28539[(2)]);
var inst_28504 = (inst_28503__$1 == null);
var inst_28505 = cljs.core.not.call(null,inst_28504);
var state_28539__$1 = (function (){var statearr_28544 = state_28539;
(statearr_28544[(9)] = inst_28503__$1);

return statearr_28544;
})();
if(inst_28505){
var statearr_28545_28570 = state_28539__$1;
(statearr_28545_28570[(1)] = (5));

} else {
var statearr_28546_28571 = state_28539__$1;
(statearr_28546_28571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (15))){
var inst_28529 = (state_28539[(2)]);
var state_28539__$1 = state_28539;
var statearr_28547_28572 = state_28539__$1;
(statearr_28547_28572[(2)] = inst_28529);

(statearr_28547_28572[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (13))){
var state_28539__$1 = state_28539;
var statearr_28548_28573 = state_28539__$1;
(statearr_28548_28573[(2)] = null);

(statearr_28548_28573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (6))){
var inst_28499 = (state_28539[(7)]);
var inst_28524 = inst_28499.length;
var inst_28525 = (inst_28524 > (0));
var state_28539__$1 = state_28539;
if(cljs.core.truth_(inst_28525)){
var statearr_28549_28574 = state_28539__$1;
(statearr_28549_28574[(1)] = (12));

} else {
var statearr_28550_28575 = state_28539__$1;
(statearr_28550_28575[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (3))){
var inst_28537 = (state_28539[(2)]);
var state_28539__$1 = state_28539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28539__$1,inst_28537);
} else {
if((state_val_28540 === (12))){
var inst_28499 = (state_28539[(7)]);
var inst_28527 = cljs.core.vec.call(null,inst_28499);
var state_28539__$1 = state_28539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28539__$1,(15),out,inst_28527);
} else {
if((state_val_28540 === (2))){
var state_28539__$1 = state_28539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28539__$1,(4),ch);
} else {
if((state_val_28540 === (11))){
var inst_28507 = (state_28539[(10)]);
var inst_28503 = (state_28539[(9)]);
var inst_28517 = (state_28539[(2)]);
var inst_28518 = [];
var inst_28519 = inst_28518.push(inst_28503);
var inst_28499 = inst_28518;
var inst_28500 = inst_28507;
var state_28539__$1 = (function (){var statearr_28551 = state_28539;
(statearr_28551[(7)] = inst_28499);

(statearr_28551[(8)] = inst_28500);

(statearr_28551[(11)] = inst_28519);

(statearr_28551[(12)] = inst_28517);

return statearr_28551;
})();
var statearr_28552_28576 = state_28539__$1;
(statearr_28552_28576[(2)] = null);

(statearr_28552_28576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (9))){
var inst_28499 = (state_28539[(7)]);
var inst_28515 = cljs.core.vec.call(null,inst_28499);
var state_28539__$1 = state_28539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28539__$1,(11),out,inst_28515);
} else {
if((state_val_28540 === (5))){
var inst_28507 = (state_28539[(10)]);
var inst_28500 = (state_28539[(8)]);
var inst_28503 = (state_28539[(9)]);
var inst_28507__$1 = f.call(null,inst_28503);
var inst_28508 = cljs.core._EQ_.call(null,inst_28507__$1,inst_28500);
var inst_28509 = cljs.core.keyword_identical_QMARK_.call(null,inst_28500,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28510 = ((inst_28508) || (inst_28509));
var state_28539__$1 = (function (){var statearr_28553 = state_28539;
(statearr_28553[(10)] = inst_28507__$1);

return statearr_28553;
})();
if(cljs.core.truth_(inst_28510)){
var statearr_28554_28577 = state_28539__$1;
(statearr_28554_28577[(1)] = (8));

} else {
var statearr_28555_28578 = state_28539__$1;
(statearr_28555_28578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (14))){
var inst_28532 = (state_28539[(2)]);
var inst_28533 = cljs.core.async.close_BANG_.call(null,out);
var state_28539__$1 = (function (){var statearr_28557 = state_28539;
(statearr_28557[(13)] = inst_28532);

return statearr_28557;
})();
var statearr_28558_28579 = state_28539__$1;
(statearr_28558_28579[(2)] = inst_28533);

(statearr_28558_28579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (10))){
var inst_28522 = (state_28539[(2)]);
var state_28539__$1 = state_28539;
var statearr_28559_28580 = state_28539__$1;
(statearr_28559_28580[(2)] = inst_28522);

(statearr_28559_28580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (8))){
var inst_28507 = (state_28539[(10)]);
var inst_28499 = (state_28539[(7)]);
var inst_28503 = (state_28539[(9)]);
var inst_28512 = inst_28499.push(inst_28503);
var tmp28556 = inst_28499;
var inst_28499__$1 = tmp28556;
var inst_28500 = inst_28507;
var state_28539__$1 = (function (){var statearr_28560 = state_28539;
(statearr_28560[(7)] = inst_28499__$1);

(statearr_28560[(14)] = inst_28512);

(statearr_28560[(8)] = inst_28500);

return statearr_28560;
})();
var statearr_28561_28581 = state_28539__$1;
(statearr_28561_28581[(2)] = null);

(statearr_28561_28581[(1)] = (2));


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
});})(c__26663__auto___28567,out))
;
return ((function (switch__26573__auto__,c__26663__auto___28567,out){
return (function() {
var cljs$core$async$state_machine__26574__auto__ = null;
var cljs$core$async$state_machine__26574__auto____0 = (function (){
var statearr_28562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28562[(0)] = cljs$core$async$state_machine__26574__auto__);

(statearr_28562[(1)] = (1));

return statearr_28562;
});
var cljs$core$async$state_machine__26574__auto____1 = (function (state_28539){
while(true){
var ret_value__26575__auto__ = (function (){try{while(true){
var result__26576__auto__ = switch__26573__auto__.call(null,state_28539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26576__auto__;
}
break;
}
}catch (e28563){if((e28563 instanceof Object)){
var ex__26577__auto__ = e28563;
var statearr_28564_28582 = state_28539;
(statearr_28564_28582[(5)] = ex__26577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28583 = state_28539;
state_28539 = G__28583;
continue;
} else {
return ret_value__26575__auto__;
}
break;
}
});
cljs$core$async$state_machine__26574__auto__ = function(state_28539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26574__auto____1.call(this,state_28539);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26574__auto____0;
cljs$core$async$state_machine__26574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26574__auto____1;
return cljs$core$async$state_machine__26574__auto__;
})()
;})(switch__26573__auto__,c__26663__auto___28567,out))
})();
var state__26665__auto__ = (function (){var statearr_28565 = f__26664__auto__.call(null);
(statearr_28565[(6)] = c__26663__auto___28567);

return statearr_28565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26665__auto__);
});})(c__26663__auto___28567,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1530696297231
