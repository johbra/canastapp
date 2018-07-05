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
var G__26722 = arguments.length;
switch (G__26722) {
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
if(typeof cljs.core.async.t_cljs$core$async26723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26723 = (function (f,blockable,meta26724){
this.f = f;
this.blockable = blockable;
this.meta26724 = meta26724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26725,meta26724__$1){
var self__ = this;
var _26725__$1 = this;
return (new cljs.core.async.t_cljs$core$async26723(self__.f,self__.blockable,meta26724__$1));
});

cljs.core.async.t_cljs$core$async26723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26725){
var self__ = this;
var _26725__$1 = this;
return self__.meta26724;
});

cljs.core.async.t_cljs$core$async26723.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26723.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26724","meta26724",312268020,null)], null);
});

cljs.core.async.t_cljs$core$async26723.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26723";

cljs.core.async.t_cljs$core$async26723.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26723");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26723.
 */
cljs.core.async.__GT_t_cljs$core$async26723 = (function cljs$core$async$__GT_t_cljs$core$async26723(f__$1,blockable__$1,meta26724){
return (new cljs.core.async.t_cljs$core$async26723(f__$1,blockable__$1,meta26724));
});

}

return (new cljs.core.async.t_cljs$core$async26723(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26729 = arguments.length;
switch (G__26729) {
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
var G__26732 = arguments.length;
switch (G__26732) {
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
var G__26735 = arguments.length;
switch (G__26735) {
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
var val_26737 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26737);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26737,ret){
return (function (){
return fn1.call(null,val_26737);
});})(val_26737,ret))
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
var G__26739 = arguments.length;
switch (G__26739) {
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
var n__4376__auto___26741 = n;
var x_26742 = (0);
while(true){
if((x_26742 < n__4376__auto___26741)){
(a[x_26742] = (0));

var G__26743 = (x_26742 + (1));
x_26742 = G__26743;
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

var G__26744 = (i + (1));
i = G__26744;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26745 = (function (flag,meta26746){
this.flag = flag;
this.meta26746 = meta26746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26747,meta26746__$1){
var self__ = this;
var _26747__$1 = this;
return (new cljs.core.async.t_cljs$core$async26745(self__.flag,meta26746__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26747){
var self__ = this;
var _26747__$1 = this;
return self__.meta26746;
});})(flag))
;

cljs.core.async.t_cljs$core$async26745.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26745.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26745.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26746","meta26746",-692339976,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26745";

cljs.core.async.t_cljs$core$async26745.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26745");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26745.
 */
cljs.core.async.__GT_t_cljs$core$async26745 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26745(flag__$1,meta26746){
return (new cljs.core.async.t_cljs$core$async26745(flag__$1,meta26746));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26745(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26748 = (function (flag,cb,meta26749){
this.flag = flag;
this.cb = cb;
this.meta26749 = meta26749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26750,meta26749__$1){
var self__ = this;
var _26750__$1 = this;
return (new cljs.core.async.t_cljs$core$async26748(self__.flag,self__.cb,meta26749__$1));
});

cljs.core.async.t_cljs$core$async26748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26750){
var self__ = this;
var _26750__$1 = this;
return self__.meta26749;
});

cljs.core.async.t_cljs$core$async26748.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26748.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26749","meta26749",-1815918245,null)], null);
});

cljs.core.async.t_cljs$core$async26748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26748";

cljs.core.async.t_cljs$core$async26748.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26748");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26748.
 */
cljs.core.async.__GT_t_cljs$core$async26748 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26748(flag__$1,cb__$1,meta26749){
return (new cljs.core.async.t_cljs$core$async26748(flag__$1,cb__$1,meta26749));
});

}

return (new cljs.core.async.t_cljs$core$async26748(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26751_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26751_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26752_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26752_SHARP_,port], null));
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
var G__26753 = (i + (1));
i = G__26753;
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
var len__4499__auto___26759 = arguments.length;
var i__4500__auto___26760 = (0);
while(true){
if((i__4500__auto___26760 < len__4499__auto___26759)){
args__4502__auto__.push((arguments[i__4500__auto___26760]));

var G__26761 = (i__4500__auto___26760 + (1));
i__4500__auto___26760 = G__26761;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26756){
var map__26757 = p__26756;
var map__26757__$1 = ((((!((map__26757 == null)))?(((((map__26757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26757):map__26757);
var opts = map__26757__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26754){
var G__26755 = cljs.core.first.call(null,seq26754);
var seq26754__$1 = cljs.core.next.call(null,seq26754);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26755,seq26754__$1);
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
var G__26763 = arguments.length;
switch (G__26763) {
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
var c__26662__auto___26809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___26809){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___26809){
return (function (state_26787){
var state_val_26788 = (state_26787[(1)]);
if((state_val_26788 === (7))){
var inst_26783 = (state_26787[(2)]);
var state_26787__$1 = state_26787;
var statearr_26789_26810 = state_26787__$1;
(statearr_26789_26810[(2)] = inst_26783);

(statearr_26789_26810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (1))){
var state_26787__$1 = state_26787;
var statearr_26790_26811 = state_26787__$1;
(statearr_26790_26811[(2)] = null);

(statearr_26790_26811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (4))){
var inst_26766 = (state_26787[(7)]);
var inst_26766__$1 = (state_26787[(2)]);
var inst_26767 = (inst_26766__$1 == null);
var state_26787__$1 = (function (){var statearr_26791 = state_26787;
(statearr_26791[(7)] = inst_26766__$1);

return statearr_26791;
})();
if(cljs.core.truth_(inst_26767)){
var statearr_26792_26812 = state_26787__$1;
(statearr_26792_26812[(1)] = (5));

} else {
var statearr_26793_26813 = state_26787__$1;
(statearr_26793_26813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (13))){
var state_26787__$1 = state_26787;
var statearr_26794_26814 = state_26787__$1;
(statearr_26794_26814[(2)] = null);

(statearr_26794_26814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (6))){
var inst_26766 = (state_26787[(7)]);
var state_26787__$1 = state_26787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26787__$1,(11),to,inst_26766);
} else {
if((state_val_26788 === (3))){
var inst_26785 = (state_26787[(2)]);
var state_26787__$1 = state_26787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26787__$1,inst_26785);
} else {
if((state_val_26788 === (12))){
var state_26787__$1 = state_26787;
var statearr_26795_26815 = state_26787__$1;
(statearr_26795_26815[(2)] = null);

(statearr_26795_26815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (2))){
var state_26787__$1 = state_26787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26787__$1,(4),from);
} else {
if((state_val_26788 === (11))){
var inst_26776 = (state_26787[(2)]);
var state_26787__$1 = state_26787;
if(cljs.core.truth_(inst_26776)){
var statearr_26796_26816 = state_26787__$1;
(statearr_26796_26816[(1)] = (12));

} else {
var statearr_26797_26817 = state_26787__$1;
(statearr_26797_26817[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (9))){
var state_26787__$1 = state_26787;
var statearr_26798_26818 = state_26787__$1;
(statearr_26798_26818[(2)] = null);

(statearr_26798_26818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (5))){
var state_26787__$1 = state_26787;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26799_26819 = state_26787__$1;
(statearr_26799_26819[(1)] = (8));

} else {
var statearr_26800_26820 = state_26787__$1;
(statearr_26800_26820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (14))){
var inst_26781 = (state_26787[(2)]);
var state_26787__$1 = state_26787;
var statearr_26801_26821 = state_26787__$1;
(statearr_26801_26821[(2)] = inst_26781);

(statearr_26801_26821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (10))){
var inst_26773 = (state_26787[(2)]);
var state_26787__$1 = state_26787;
var statearr_26802_26822 = state_26787__$1;
(statearr_26802_26822[(2)] = inst_26773);

(statearr_26802_26822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26788 === (8))){
var inst_26770 = cljs.core.async.close_BANG_.call(null,to);
var state_26787__$1 = state_26787;
var statearr_26803_26823 = state_26787__$1;
(statearr_26803_26823[(2)] = inst_26770);

(statearr_26803_26823[(1)] = (10));


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
});})(c__26662__auto___26809))
;
return ((function (switch__26572__auto__,c__26662__auto___26809){
return (function() {
var cljs$core$async$state_machine__26573__auto__ = null;
var cljs$core$async$state_machine__26573__auto____0 = (function (){
var statearr_26804 = [null,null,null,null,null,null,null,null];
(statearr_26804[(0)] = cljs$core$async$state_machine__26573__auto__);

(statearr_26804[(1)] = (1));

return statearr_26804;
});
var cljs$core$async$state_machine__26573__auto____1 = (function (state_26787){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_26787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e26805){if((e26805 instanceof Object)){
var ex__26576__auto__ = e26805;
var statearr_26806_26824 = state_26787;
(statearr_26806_26824[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26825 = state_26787;
state_26787 = G__26825;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$state_machine__26573__auto__ = function(state_26787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26573__auto____1.call(this,state_26787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26573__auto____0;
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26573__auto____1;
return cljs$core$async$state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___26809))
})();
var state__26664__auto__ = (function (){var statearr_26807 = f__26663__auto__.call(null);
(statearr_26807[(6)] = c__26662__auto___26809);

return statearr_26807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___26809))
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
return (function (p__26826){
var vec__26827 = p__26826;
var v = cljs.core.nth.call(null,vec__26827,(0),null);
var p = cljs.core.nth.call(null,vec__26827,(1),null);
var job = vec__26827;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26662__auto___26998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___26998,res,vec__26827,v,p,job,jobs,results){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___26998,res,vec__26827,v,p,job,jobs,results){
return (function (state_26834){
var state_val_26835 = (state_26834[(1)]);
if((state_val_26835 === (1))){
var state_26834__$1 = state_26834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26834__$1,(2),res,v);
} else {
if((state_val_26835 === (2))){
var inst_26831 = (state_26834[(2)]);
var inst_26832 = cljs.core.async.close_BANG_.call(null,res);
var state_26834__$1 = (function (){var statearr_26836 = state_26834;
(statearr_26836[(7)] = inst_26831);

return statearr_26836;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26834__$1,inst_26832);
} else {
return null;
}
}
});})(c__26662__auto___26998,res,vec__26827,v,p,job,jobs,results))
;
return ((function (switch__26572__auto__,c__26662__auto___26998,res,vec__26827,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0 = (function (){
var statearr_26837 = [null,null,null,null,null,null,null,null];
(statearr_26837[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__);

(statearr_26837[(1)] = (1));

return statearr_26837;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1 = (function (state_26834){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_26834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e26838){if((e26838 instanceof Object)){
var ex__26576__auto__ = e26838;
var statearr_26839_26999 = state_26834;
(statearr_26839_26999[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27000 = state_26834;
state_26834 = G__27000;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__ = function(state_26834){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1.call(this,state_26834);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___26998,res,vec__26827,v,p,job,jobs,results))
})();
var state__26664__auto__ = (function (){var statearr_26840 = f__26663__auto__.call(null);
(statearr_26840[(6)] = c__26662__auto___26998);

return statearr_26840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___26998,res,vec__26827,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26841){
var vec__26842 = p__26841;
var v = cljs.core.nth.call(null,vec__26842,(0),null);
var p = cljs.core.nth.call(null,vec__26842,(1),null);
var job = vec__26842;
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
var n__4376__auto___27001 = n;
var __27002 = (0);
while(true){
if((__27002 < n__4376__auto___27001)){
var G__26845_27003 = type;
var G__26845_27004__$1 = (((G__26845_27003 instanceof cljs.core.Keyword))?G__26845_27003.fqn:null);
switch (G__26845_27004__$1) {
case "compute":
var c__26662__auto___27006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27002,c__26662__auto___27006,G__26845_27003,G__26845_27004__$1,n__4376__auto___27001,jobs,results,process,async){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (__27002,c__26662__auto___27006,G__26845_27003,G__26845_27004__$1,n__4376__auto___27001,jobs,results,process,async){
return (function (state_26858){
var state_val_26859 = (state_26858[(1)]);
if((state_val_26859 === (1))){
var state_26858__$1 = state_26858;
var statearr_26860_27007 = state_26858__$1;
(statearr_26860_27007[(2)] = null);

(statearr_26860_27007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (2))){
var state_26858__$1 = state_26858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26858__$1,(4),jobs);
} else {
if((state_val_26859 === (3))){
var inst_26856 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26858__$1,inst_26856);
} else {
if((state_val_26859 === (4))){
var inst_26848 = (state_26858[(2)]);
var inst_26849 = process.call(null,inst_26848);
var state_26858__$1 = state_26858;
if(cljs.core.truth_(inst_26849)){
var statearr_26861_27008 = state_26858__$1;
(statearr_26861_27008[(1)] = (5));

} else {
var statearr_26862_27009 = state_26858__$1;
(statearr_26862_27009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (5))){
var state_26858__$1 = state_26858;
var statearr_26863_27010 = state_26858__$1;
(statearr_26863_27010[(2)] = null);

(statearr_26863_27010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (6))){
var state_26858__$1 = state_26858;
var statearr_26864_27011 = state_26858__$1;
(statearr_26864_27011[(2)] = null);

(statearr_26864_27011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (7))){
var inst_26854 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
var statearr_26865_27012 = state_26858__$1;
(statearr_26865_27012[(2)] = inst_26854);

(statearr_26865_27012[(1)] = (3));


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
});})(__27002,c__26662__auto___27006,G__26845_27003,G__26845_27004__$1,n__4376__auto___27001,jobs,results,process,async))
;
return ((function (__27002,switch__26572__auto__,c__26662__auto___27006,G__26845_27003,G__26845_27004__$1,n__4376__auto___27001,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0 = (function (){
var statearr_26866 = [null,null,null,null,null,null,null];
(statearr_26866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__);

(statearr_26866[(1)] = (1));

return statearr_26866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1 = (function (state_26858){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_26858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e26867){if((e26867 instanceof Object)){
var ex__26576__auto__ = e26867;
var statearr_26868_27013 = state_26858;
(statearr_26868_27013[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27014 = state_26858;
state_26858 = G__27014;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__ = function(state_26858){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1.call(this,state_26858);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__;
})()
;})(__27002,switch__26572__auto__,c__26662__auto___27006,G__26845_27003,G__26845_27004__$1,n__4376__auto___27001,jobs,results,process,async))
})();
var state__26664__auto__ = (function (){var statearr_26869 = f__26663__auto__.call(null);
(statearr_26869[(6)] = c__26662__auto___27006);

return statearr_26869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(__27002,c__26662__auto___27006,G__26845_27003,G__26845_27004__$1,n__4376__auto___27001,jobs,results,process,async))
);


break;
case "async":
var c__26662__auto___27015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27002,c__26662__auto___27015,G__26845_27003,G__26845_27004__$1,n__4376__auto___27001,jobs,results,process,async){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (__27002,c__26662__auto___27015,G__26845_27003,G__26845_27004__$1,n__4376__auto___27001,jobs,results,process,async){
return (function (state_26882){
var state_val_26883 = (state_26882[(1)]);
if((state_val_26883 === (1))){
var state_26882__$1 = state_26882;
var statearr_26884_27016 = state_26882__$1;
(statearr_26884_27016[(2)] = null);

(statearr_26884_27016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26883 === (2))){
var state_26882__$1 = state_26882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26882__$1,(4),jobs);
} else {
if((state_val_26883 === (3))){
var inst_26880 = (state_26882[(2)]);
var state_26882__$1 = state_26882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26882__$1,inst_26880);
} else {
if((state_val_26883 === (4))){
var inst_26872 = (state_26882[(2)]);
var inst_26873 = async.call(null,inst_26872);
var state_26882__$1 = state_26882;
if(cljs.core.truth_(inst_26873)){
var statearr_26885_27017 = state_26882__$1;
(statearr_26885_27017[(1)] = (5));

} else {
var statearr_26886_27018 = state_26882__$1;
(statearr_26886_27018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26883 === (5))){
var state_26882__$1 = state_26882;
var statearr_26887_27019 = state_26882__$1;
(statearr_26887_27019[(2)] = null);

(statearr_26887_27019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26883 === (6))){
var state_26882__$1 = state_26882;
var statearr_26888_27020 = state_26882__$1;
(statearr_26888_27020[(2)] = null);

(statearr_26888_27020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26883 === (7))){
var inst_26878 = (state_26882[(2)]);
var state_26882__$1 = state_26882;
var statearr_26889_27021 = state_26882__$1;
(statearr_26889_27021[(2)] = inst_26878);

(statearr_26889_27021[(1)] = (3));


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
});})(__27002,c__26662__auto___27015,G__26845_27003,G__26845_27004__$1,n__4376__auto___27001,jobs,results,process,async))
;
return ((function (__27002,switch__26572__auto__,c__26662__auto___27015,G__26845_27003,G__26845_27004__$1,n__4376__auto___27001,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0 = (function (){
var statearr_26890 = [null,null,null,null,null,null,null];
(statearr_26890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__);

(statearr_26890[(1)] = (1));

return statearr_26890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1 = (function (state_26882){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_26882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e26891){if((e26891 instanceof Object)){
var ex__26576__auto__ = e26891;
var statearr_26892_27022 = state_26882;
(statearr_26892_27022[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27023 = state_26882;
state_26882 = G__27023;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__ = function(state_26882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1.call(this,state_26882);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__;
})()
;})(__27002,switch__26572__auto__,c__26662__auto___27015,G__26845_27003,G__26845_27004__$1,n__4376__auto___27001,jobs,results,process,async))
})();
var state__26664__auto__ = (function (){var statearr_26893 = f__26663__auto__.call(null);
(statearr_26893[(6)] = c__26662__auto___27015);

return statearr_26893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(__27002,c__26662__auto___27015,G__26845_27003,G__26845_27004__$1,n__4376__auto___27001,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26845_27004__$1)].join('')));

}

var G__27024 = (__27002 + (1));
__27002 = G__27024;
continue;
} else {
}
break;
}

var c__26662__auto___27025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___27025,jobs,results,process,async){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___27025,jobs,results,process,async){
return (function (state_26915){
var state_val_26916 = (state_26915[(1)]);
if((state_val_26916 === (1))){
var state_26915__$1 = state_26915;
var statearr_26917_27026 = state_26915__$1;
(statearr_26917_27026[(2)] = null);

(statearr_26917_27026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26916 === (2))){
var state_26915__$1 = state_26915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26915__$1,(4),from);
} else {
if((state_val_26916 === (3))){
var inst_26913 = (state_26915[(2)]);
var state_26915__$1 = state_26915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26915__$1,inst_26913);
} else {
if((state_val_26916 === (4))){
var inst_26896 = (state_26915[(7)]);
var inst_26896__$1 = (state_26915[(2)]);
var inst_26897 = (inst_26896__$1 == null);
var state_26915__$1 = (function (){var statearr_26918 = state_26915;
(statearr_26918[(7)] = inst_26896__$1);

return statearr_26918;
})();
if(cljs.core.truth_(inst_26897)){
var statearr_26919_27027 = state_26915__$1;
(statearr_26919_27027[(1)] = (5));

} else {
var statearr_26920_27028 = state_26915__$1;
(statearr_26920_27028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26916 === (5))){
var inst_26899 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26915__$1 = state_26915;
var statearr_26921_27029 = state_26915__$1;
(statearr_26921_27029[(2)] = inst_26899);

(statearr_26921_27029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26916 === (6))){
var inst_26896 = (state_26915[(7)]);
var inst_26901 = (state_26915[(8)]);
var inst_26901__$1 = cljs.core.async.chan.call(null,(1));
var inst_26902 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26903 = [inst_26896,inst_26901__$1];
var inst_26904 = (new cljs.core.PersistentVector(null,2,(5),inst_26902,inst_26903,null));
var state_26915__$1 = (function (){var statearr_26922 = state_26915;
(statearr_26922[(8)] = inst_26901__$1);

return statearr_26922;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26915__$1,(8),jobs,inst_26904);
} else {
if((state_val_26916 === (7))){
var inst_26911 = (state_26915[(2)]);
var state_26915__$1 = state_26915;
var statearr_26923_27030 = state_26915__$1;
(statearr_26923_27030[(2)] = inst_26911);

(statearr_26923_27030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26916 === (8))){
var inst_26901 = (state_26915[(8)]);
var inst_26906 = (state_26915[(2)]);
var state_26915__$1 = (function (){var statearr_26924 = state_26915;
(statearr_26924[(9)] = inst_26906);

return statearr_26924;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26915__$1,(9),results,inst_26901);
} else {
if((state_val_26916 === (9))){
var inst_26908 = (state_26915[(2)]);
var state_26915__$1 = (function (){var statearr_26925 = state_26915;
(statearr_26925[(10)] = inst_26908);

return statearr_26925;
})();
var statearr_26926_27031 = state_26915__$1;
(statearr_26926_27031[(2)] = null);

(statearr_26926_27031[(1)] = (2));


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
});})(c__26662__auto___27025,jobs,results,process,async))
;
return ((function (switch__26572__auto__,c__26662__auto___27025,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0 = (function (){
var statearr_26927 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__);

(statearr_26927[(1)] = (1));

return statearr_26927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1 = (function (state_26915){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_26915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e26928){if((e26928 instanceof Object)){
var ex__26576__auto__ = e26928;
var statearr_26929_27032 = state_26915;
(statearr_26929_27032[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27033 = state_26915;
state_26915 = G__27033;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__ = function(state_26915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1.call(this,state_26915);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___27025,jobs,results,process,async))
})();
var state__26664__auto__ = (function (){var statearr_26930 = f__26663__auto__.call(null);
(statearr_26930[(6)] = c__26662__auto___27025);

return statearr_26930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___27025,jobs,results,process,async))
);


var c__26662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto__,jobs,results,process,async){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto__,jobs,results,process,async){
return (function (state_26968){
var state_val_26969 = (state_26968[(1)]);
if((state_val_26969 === (7))){
var inst_26964 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
var statearr_26970_27034 = state_26968__$1;
(statearr_26970_27034[(2)] = inst_26964);

(statearr_26970_27034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (20))){
var state_26968__$1 = state_26968;
var statearr_26971_27035 = state_26968__$1;
(statearr_26971_27035[(2)] = null);

(statearr_26971_27035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (1))){
var state_26968__$1 = state_26968;
var statearr_26972_27036 = state_26968__$1;
(statearr_26972_27036[(2)] = null);

(statearr_26972_27036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (4))){
var inst_26933 = (state_26968[(7)]);
var inst_26933__$1 = (state_26968[(2)]);
var inst_26934 = (inst_26933__$1 == null);
var state_26968__$1 = (function (){var statearr_26973 = state_26968;
(statearr_26973[(7)] = inst_26933__$1);

return statearr_26973;
})();
if(cljs.core.truth_(inst_26934)){
var statearr_26974_27037 = state_26968__$1;
(statearr_26974_27037[(1)] = (5));

} else {
var statearr_26975_27038 = state_26968__$1;
(statearr_26975_27038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (15))){
var inst_26946 = (state_26968[(8)]);
var state_26968__$1 = state_26968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26968__$1,(18),to,inst_26946);
} else {
if((state_val_26969 === (21))){
var inst_26959 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
var statearr_26976_27039 = state_26968__$1;
(statearr_26976_27039[(2)] = inst_26959);

(statearr_26976_27039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (13))){
var inst_26961 = (state_26968[(2)]);
var state_26968__$1 = (function (){var statearr_26977 = state_26968;
(statearr_26977[(9)] = inst_26961);

return statearr_26977;
})();
var statearr_26978_27040 = state_26968__$1;
(statearr_26978_27040[(2)] = null);

(statearr_26978_27040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (6))){
var inst_26933 = (state_26968[(7)]);
var state_26968__$1 = state_26968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26968__$1,(11),inst_26933);
} else {
if((state_val_26969 === (17))){
var inst_26954 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
if(cljs.core.truth_(inst_26954)){
var statearr_26979_27041 = state_26968__$1;
(statearr_26979_27041[(1)] = (19));

} else {
var statearr_26980_27042 = state_26968__$1;
(statearr_26980_27042[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (3))){
var inst_26966 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26968__$1,inst_26966);
} else {
if((state_val_26969 === (12))){
var inst_26943 = (state_26968[(10)]);
var state_26968__$1 = state_26968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26968__$1,(14),inst_26943);
} else {
if((state_val_26969 === (2))){
var state_26968__$1 = state_26968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26968__$1,(4),results);
} else {
if((state_val_26969 === (19))){
var state_26968__$1 = state_26968;
var statearr_26981_27043 = state_26968__$1;
(statearr_26981_27043[(2)] = null);

(statearr_26981_27043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (11))){
var inst_26943 = (state_26968[(2)]);
var state_26968__$1 = (function (){var statearr_26982 = state_26968;
(statearr_26982[(10)] = inst_26943);

return statearr_26982;
})();
var statearr_26983_27044 = state_26968__$1;
(statearr_26983_27044[(2)] = null);

(statearr_26983_27044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (9))){
var state_26968__$1 = state_26968;
var statearr_26984_27045 = state_26968__$1;
(statearr_26984_27045[(2)] = null);

(statearr_26984_27045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (5))){
var state_26968__$1 = state_26968;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26985_27046 = state_26968__$1;
(statearr_26985_27046[(1)] = (8));

} else {
var statearr_26986_27047 = state_26968__$1;
(statearr_26986_27047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (14))){
var inst_26946 = (state_26968[(8)]);
var inst_26948 = (state_26968[(11)]);
var inst_26946__$1 = (state_26968[(2)]);
var inst_26947 = (inst_26946__$1 == null);
var inst_26948__$1 = cljs.core.not.call(null,inst_26947);
var state_26968__$1 = (function (){var statearr_26987 = state_26968;
(statearr_26987[(8)] = inst_26946__$1);

(statearr_26987[(11)] = inst_26948__$1);

return statearr_26987;
})();
if(inst_26948__$1){
var statearr_26988_27048 = state_26968__$1;
(statearr_26988_27048[(1)] = (15));

} else {
var statearr_26989_27049 = state_26968__$1;
(statearr_26989_27049[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (16))){
var inst_26948 = (state_26968[(11)]);
var state_26968__$1 = state_26968;
var statearr_26990_27050 = state_26968__$1;
(statearr_26990_27050[(2)] = inst_26948);

(statearr_26990_27050[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (10))){
var inst_26940 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
var statearr_26991_27051 = state_26968__$1;
(statearr_26991_27051[(2)] = inst_26940);

(statearr_26991_27051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (18))){
var inst_26951 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
var statearr_26992_27052 = state_26968__$1;
(statearr_26992_27052[(2)] = inst_26951);

(statearr_26992_27052[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (8))){
var inst_26937 = cljs.core.async.close_BANG_.call(null,to);
var state_26968__$1 = state_26968;
var statearr_26993_27053 = state_26968__$1;
(statearr_26993_27053[(2)] = inst_26937);

(statearr_26993_27053[(1)] = (10));


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
});})(c__26662__auto__,jobs,results,process,async))
;
return ((function (switch__26572__auto__,c__26662__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0 = (function (){
var statearr_26994 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26994[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__);

(statearr_26994[(1)] = (1));

return statearr_26994;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1 = (function (state_26968){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_26968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e26995){if((e26995 instanceof Object)){
var ex__26576__auto__ = e26995;
var statearr_26996_27054 = state_26968;
(statearr_26996_27054[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27055 = state_26968;
state_26968 = G__27055;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__ = function(state_26968){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1.call(this,state_26968);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto__,jobs,results,process,async))
})();
var state__26664__auto__ = (function (){var statearr_26997 = f__26663__auto__.call(null);
(statearr_26997[(6)] = c__26662__auto__);

return statearr_26997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto__,jobs,results,process,async))
);

return c__26662__auto__;
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
var G__27057 = arguments.length;
switch (G__27057) {
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
var G__27060 = arguments.length;
switch (G__27060) {
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
var G__27063 = arguments.length;
switch (G__27063) {
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
var c__26662__auto___27112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___27112,tc,fc){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___27112,tc,fc){
return (function (state_27089){
var state_val_27090 = (state_27089[(1)]);
if((state_val_27090 === (7))){
var inst_27085 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
var statearr_27091_27113 = state_27089__$1;
(statearr_27091_27113[(2)] = inst_27085);

(statearr_27091_27113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (1))){
var state_27089__$1 = state_27089;
var statearr_27092_27114 = state_27089__$1;
(statearr_27092_27114[(2)] = null);

(statearr_27092_27114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (4))){
var inst_27066 = (state_27089[(7)]);
var inst_27066__$1 = (state_27089[(2)]);
var inst_27067 = (inst_27066__$1 == null);
var state_27089__$1 = (function (){var statearr_27093 = state_27089;
(statearr_27093[(7)] = inst_27066__$1);

return statearr_27093;
})();
if(cljs.core.truth_(inst_27067)){
var statearr_27094_27115 = state_27089__$1;
(statearr_27094_27115[(1)] = (5));

} else {
var statearr_27095_27116 = state_27089__$1;
(statearr_27095_27116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (13))){
var state_27089__$1 = state_27089;
var statearr_27096_27117 = state_27089__$1;
(statearr_27096_27117[(2)] = null);

(statearr_27096_27117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (6))){
var inst_27066 = (state_27089[(7)]);
var inst_27072 = p.call(null,inst_27066);
var state_27089__$1 = state_27089;
if(cljs.core.truth_(inst_27072)){
var statearr_27097_27118 = state_27089__$1;
(statearr_27097_27118[(1)] = (9));

} else {
var statearr_27098_27119 = state_27089__$1;
(statearr_27098_27119[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (3))){
var inst_27087 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27089__$1,inst_27087);
} else {
if((state_val_27090 === (12))){
var state_27089__$1 = state_27089;
var statearr_27099_27120 = state_27089__$1;
(statearr_27099_27120[(2)] = null);

(statearr_27099_27120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (2))){
var state_27089__$1 = state_27089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27089__$1,(4),ch);
} else {
if((state_val_27090 === (11))){
var inst_27066 = (state_27089[(7)]);
var inst_27076 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27089__$1,(8),inst_27076,inst_27066);
} else {
if((state_val_27090 === (9))){
var state_27089__$1 = state_27089;
var statearr_27100_27121 = state_27089__$1;
(statearr_27100_27121[(2)] = tc);

(statearr_27100_27121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (5))){
var inst_27069 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27070 = cljs.core.async.close_BANG_.call(null,fc);
var state_27089__$1 = (function (){var statearr_27101 = state_27089;
(statearr_27101[(8)] = inst_27069);

return statearr_27101;
})();
var statearr_27102_27122 = state_27089__$1;
(statearr_27102_27122[(2)] = inst_27070);

(statearr_27102_27122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (14))){
var inst_27083 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
var statearr_27103_27123 = state_27089__$1;
(statearr_27103_27123[(2)] = inst_27083);

(statearr_27103_27123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (10))){
var state_27089__$1 = state_27089;
var statearr_27104_27124 = state_27089__$1;
(statearr_27104_27124[(2)] = fc);

(statearr_27104_27124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (8))){
var inst_27078 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
if(cljs.core.truth_(inst_27078)){
var statearr_27105_27125 = state_27089__$1;
(statearr_27105_27125[(1)] = (12));

} else {
var statearr_27106_27126 = state_27089__$1;
(statearr_27106_27126[(1)] = (13));

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
});})(c__26662__auto___27112,tc,fc))
;
return ((function (switch__26572__auto__,c__26662__auto___27112,tc,fc){
return (function() {
var cljs$core$async$state_machine__26573__auto__ = null;
var cljs$core$async$state_machine__26573__auto____0 = (function (){
var statearr_27107 = [null,null,null,null,null,null,null,null,null];
(statearr_27107[(0)] = cljs$core$async$state_machine__26573__auto__);

(statearr_27107[(1)] = (1));

return statearr_27107;
});
var cljs$core$async$state_machine__26573__auto____1 = (function (state_27089){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_27089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e27108){if((e27108 instanceof Object)){
var ex__26576__auto__ = e27108;
var statearr_27109_27127 = state_27089;
(statearr_27109_27127[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27128 = state_27089;
state_27089 = G__27128;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$state_machine__26573__auto__ = function(state_27089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26573__auto____1.call(this,state_27089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26573__auto____0;
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26573__auto____1;
return cljs$core$async$state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___27112,tc,fc))
})();
var state__26664__auto__ = (function (){var statearr_27110 = f__26663__auto__.call(null);
(statearr_27110[(6)] = c__26662__auto___27112);

return statearr_27110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___27112,tc,fc))
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
var c__26662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto__){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto__){
return (function (state_27149){
var state_val_27150 = (state_27149[(1)]);
if((state_val_27150 === (7))){
var inst_27145 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
var statearr_27151_27169 = state_27149__$1;
(statearr_27151_27169[(2)] = inst_27145);

(statearr_27151_27169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (1))){
var inst_27129 = init;
var state_27149__$1 = (function (){var statearr_27152 = state_27149;
(statearr_27152[(7)] = inst_27129);

return statearr_27152;
})();
var statearr_27153_27170 = state_27149__$1;
(statearr_27153_27170[(2)] = null);

(statearr_27153_27170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (4))){
var inst_27132 = (state_27149[(8)]);
var inst_27132__$1 = (state_27149[(2)]);
var inst_27133 = (inst_27132__$1 == null);
var state_27149__$1 = (function (){var statearr_27154 = state_27149;
(statearr_27154[(8)] = inst_27132__$1);

return statearr_27154;
})();
if(cljs.core.truth_(inst_27133)){
var statearr_27155_27171 = state_27149__$1;
(statearr_27155_27171[(1)] = (5));

} else {
var statearr_27156_27172 = state_27149__$1;
(statearr_27156_27172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (6))){
var inst_27136 = (state_27149[(9)]);
var inst_27129 = (state_27149[(7)]);
var inst_27132 = (state_27149[(8)]);
var inst_27136__$1 = f.call(null,inst_27129,inst_27132);
var inst_27137 = cljs.core.reduced_QMARK_.call(null,inst_27136__$1);
var state_27149__$1 = (function (){var statearr_27157 = state_27149;
(statearr_27157[(9)] = inst_27136__$1);

return statearr_27157;
})();
if(inst_27137){
var statearr_27158_27173 = state_27149__$1;
(statearr_27158_27173[(1)] = (8));

} else {
var statearr_27159_27174 = state_27149__$1;
(statearr_27159_27174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (3))){
var inst_27147 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27149__$1,inst_27147);
} else {
if((state_val_27150 === (2))){
var state_27149__$1 = state_27149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27149__$1,(4),ch);
} else {
if((state_val_27150 === (9))){
var inst_27136 = (state_27149[(9)]);
var inst_27129 = inst_27136;
var state_27149__$1 = (function (){var statearr_27160 = state_27149;
(statearr_27160[(7)] = inst_27129);

return statearr_27160;
})();
var statearr_27161_27175 = state_27149__$1;
(statearr_27161_27175[(2)] = null);

(statearr_27161_27175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (5))){
var inst_27129 = (state_27149[(7)]);
var state_27149__$1 = state_27149;
var statearr_27162_27176 = state_27149__$1;
(statearr_27162_27176[(2)] = inst_27129);

(statearr_27162_27176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (10))){
var inst_27143 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
var statearr_27163_27177 = state_27149__$1;
(statearr_27163_27177[(2)] = inst_27143);

(statearr_27163_27177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (8))){
var inst_27136 = (state_27149[(9)]);
var inst_27139 = cljs.core.deref.call(null,inst_27136);
var state_27149__$1 = state_27149;
var statearr_27164_27178 = state_27149__$1;
(statearr_27164_27178[(2)] = inst_27139);

(statearr_27164_27178[(1)] = (10));


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
});})(c__26662__auto__))
;
return ((function (switch__26572__auto__,c__26662__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26573__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26573__auto____0 = (function (){
var statearr_27165 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27165[(0)] = cljs$core$async$reduce_$_state_machine__26573__auto__);

(statearr_27165[(1)] = (1));

return statearr_27165;
});
var cljs$core$async$reduce_$_state_machine__26573__auto____1 = (function (state_27149){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_27149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e27166){if((e27166 instanceof Object)){
var ex__26576__auto__ = e27166;
var statearr_27167_27179 = state_27149;
(statearr_27167_27179[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27180 = state_27149;
state_27149 = G__27180;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26573__auto__ = function(state_27149){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26573__auto____1.call(this,state_27149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26573__auto____0;
cljs$core$async$reduce_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26573__auto____1;
return cljs$core$async$reduce_$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto__))
})();
var state__26664__auto__ = (function (){var statearr_27168 = f__26663__auto__.call(null);
(statearr_27168[(6)] = c__26662__auto__);

return statearr_27168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto__))
);

return c__26662__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto__,f__$1){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto__,f__$1){
return (function (state_27186){
var state_val_27187 = (state_27186[(1)]);
if((state_val_27187 === (1))){
var inst_27181 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27186__$1 = state_27186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27186__$1,(2),inst_27181);
} else {
if((state_val_27187 === (2))){
var inst_27183 = (state_27186[(2)]);
var inst_27184 = f__$1.call(null,inst_27183);
var state_27186__$1 = state_27186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27186__$1,inst_27184);
} else {
return null;
}
}
});})(c__26662__auto__,f__$1))
;
return ((function (switch__26572__auto__,c__26662__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26573__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26573__auto____0 = (function (){
var statearr_27188 = [null,null,null,null,null,null,null];
(statearr_27188[(0)] = cljs$core$async$transduce_$_state_machine__26573__auto__);

(statearr_27188[(1)] = (1));

return statearr_27188;
});
var cljs$core$async$transduce_$_state_machine__26573__auto____1 = (function (state_27186){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_27186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e27189){if((e27189 instanceof Object)){
var ex__26576__auto__ = e27189;
var statearr_27190_27192 = state_27186;
(statearr_27190_27192[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27193 = state_27186;
state_27186 = G__27193;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26573__auto__ = function(state_27186){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26573__auto____1.call(this,state_27186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26573__auto____0;
cljs$core$async$transduce_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26573__auto____1;
return cljs$core$async$transduce_$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto__,f__$1))
})();
var state__26664__auto__ = (function (){var statearr_27191 = f__26663__auto__.call(null);
(statearr_27191[(6)] = c__26662__auto__);

return statearr_27191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto__,f__$1))
);

return c__26662__auto__;
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
var G__27195 = arguments.length;
switch (G__27195) {
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
var c__26662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto__){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto__){
return (function (state_27220){
var state_val_27221 = (state_27220[(1)]);
if((state_val_27221 === (7))){
var inst_27202 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
var statearr_27222_27243 = state_27220__$1;
(statearr_27222_27243[(2)] = inst_27202);

(statearr_27222_27243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (1))){
var inst_27196 = cljs.core.seq.call(null,coll);
var inst_27197 = inst_27196;
var state_27220__$1 = (function (){var statearr_27223 = state_27220;
(statearr_27223[(7)] = inst_27197);

return statearr_27223;
})();
var statearr_27224_27244 = state_27220__$1;
(statearr_27224_27244[(2)] = null);

(statearr_27224_27244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (4))){
var inst_27197 = (state_27220[(7)]);
var inst_27200 = cljs.core.first.call(null,inst_27197);
var state_27220__$1 = state_27220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27220__$1,(7),ch,inst_27200);
} else {
if((state_val_27221 === (13))){
var inst_27214 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
var statearr_27225_27245 = state_27220__$1;
(statearr_27225_27245[(2)] = inst_27214);

(statearr_27225_27245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (6))){
var inst_27205 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
if(cljs.core.truth_(inst_27205)){
var statearr_27226_27246 = state_27220__$1;
(statearr_27226_27246[(1)] = (8));

} else {
var statearr_27227_27247 = state_27220__$1;
(statearr_27227_27247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (3))){
var inst_27218 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27220__$1,inst_27218);
} else {
if((state_val_27221 === (12))){
var state_27220__$1 = state_27220;
var statearr_27228_27248 = state_27220__$1;
(statearr_27228_27248[(2)] = null);

(statearr_27228_27248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (2))){
var inst_27197 = (state_27220[(7)]);
var state_27220__$1 = state_27220;
if(cljs.core.truth_(inst_27197)){
var statearr_27229_27249 = state_27220__$1;
(statearr_27229_27249[(1)] = (4));

} else {
var statearr_27230_27250 = state_27220__$1;
(statearr_27230_27250[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (11))){
var inst_27211 = cljs.core.async.close_BANG_.call(null,ch);
var state_27220__$1 = state_27220;
var statearr_27231_27251 = state_27220__$1;
(statearr_27231_27251[(2)] = inst_27211);

(statearr_27231_27251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (9))){
var state_27220__$1 = state_27220;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27232_27252 = state_27220__$1;
(statearr_27232_27252[(1)] = (11));

} else {
var statearr_27233_27253 = state_27220__$1;
(statearr_27233_27253[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (5))){
var inst_27197 = (state_27220[(7)]);
var state_27220__$1 = state_27220;
var statearr_27234_27254 = state_27220__$1;
(statearr_27234_27254[(2)] = inst_27197);

(statearr_27234_27254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (10))){
var inst_27216 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
var statearr_27235_27255 = state_27220__$1;
(statearr_27235_27255[(2)] = inst_27216);

(statearr_27235_27255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (8))){
var inst_27197 = (state_27220[(7)]);
var inst_27207 = cljs.core.next.call(null,inst_27197);
var inst_27197__$1 = inst_27207;
var state_27220__$1 = (function (){var statearr_27236 = state_27220;
(statearr_27236[(7)] = inst_27197__$1);

return statearr_27236;
})();
var statearr_27237_27256 = state_27220__$1;
(statearr_27237_27256[(2)] = null);

(statearr_27237_27256[(1)] = (2));


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
});})(c__26662__auto__))
;
return ((function (switch__26572__auto__,c__26662__auto__){
return (function() {
var cljs$core$async$state_machine__26573__auto__ = null;
var cljs$core$async$state_machine__26573__auto____0 = (function (){
var statearr_27238 = [null,null,null,null,null,null,null,null];
(statearr_27238[(0)] = cljs$core$async$state_machine__26573__auto__);

(statearr_27238[(1)] = (1));

return statearr_27238;
});
var cljs$core$async$state_machine__26573__auto____1 = (function (state_27220){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_27220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e27239){if((e27239 instanceof Object)){
var ex__26576__auto__ = e27239;
var statearr_27240_27257 = state_27220;
(statearr_27240_27257[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27258 = state_27220;
state_27220 = G__27258;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$state_machine__26573__auto__ = function(state_27220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26573__auto____1.call(this,state_27220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26573__auto____0;
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26573__auto____1;
return cljs$core$async$state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto__))
})();
var state__26664__auto__ = (function (){var statearr_27241 = f__26663__auto__.call(null);
(statearr_27241[(6)] = c__26662__auto__);

return statearr_27241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto__))
);

return c__26662__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async27259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27259 = (function (ch,cs,meta27260){
this.ch = ch;
this.cs = cs;
this.meta27260 = meta27260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27261,meta27260__$1){
var self__ = this;
var _27261__$1 = this;
return (new cljs.core.async.t_cljs$core$async27259(self__.ch,self__.cs,meta27260__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27261){
var self__ = this;
var _27261__$1 = this;
return self__.meta27260;
});})(cs))
;

cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27259.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27260","meta27260",-2021197535,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27259";

cljs.core.async.t_cljs$core$async27259.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27259");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27259.
 */
cljs.core.async.__GT_t_cljs$core$async27259 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27259(ch__$1,cs__$1,meta27260){
return (new cljs.core.async.t_cljs$core$async27259(ch__$1,cs__$1,meta27260));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27259(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26662__auto___27481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___27481,cs,m,dchan,dctr,done){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___27481,cs,m,dchan,dctr,done){
return (function (state_27396){
var state_val_27397 = (state_27396[(1)]);
if((state_val_27397 === (7))){
var inst_27392 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27398_27482 = state_27396__$1;
(statearr_27398_27482[(2)] = inst_27392);

(statearr_27398_27482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (20))){
var inst_27295 = (state_27396[(7)]);
var inst_27307 = cljs.core.first.call(null,inst_27295);
var inst_27308 = cljs.core.nth.call(null,inst_27307,(0),null);
var inst_27309 = cljs.core.nth.call(null,inst_27307,(1),null);
var state_27396__$1 = (function (){var statearr_27399 = state_27396;
(statearr_27399[(8)] = inst_27308);

return statearr_27399;
})();
if(cljs.core.truth_(inst_27309)){
var statearr_27400_27483 = state_27396__$1;
(statearr_27400_27483[(1)] = (22));

} else {
var statearr_27401_27484 = state_27396__$1;
(statearr_27401_27484[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (27))){
var inst_27264 = (state_27396[(9)]);
var inst_27337 = (state_27396[(10)]);
var inst_27344 = (state_27396[(11)]);
var inst_27339 = (state_27396[(12)]);
var inst_27344__$1 = cljs.core._nth.call(null,inst_27337,inst_27339);
var inst_27345 = cljs.core.async.put_BANG_.call(null,inst_27344__$1,inst_27264,done);
var state_27396__$1 = (function (){var statearr_27402 = state_27396;
(statearr_27402[(11)] = inst_27344__$1);

return statearr_27402;
})();
if(cljs.core.truth_(inst_27345)){
var statearr_27403_27485 = state_27396__$1;
(statearr_27403_27485[(1)] = (30));

} else {
var statearr_27404_27486 = state_27396__$1;
(statearr_27404_27486[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (1))){
var state_27396__$1 = state_27396;
var statearr_27405_27487 = state_27396__$1;
(statearr_27405_27487[(2)] = null);

(statearr_27405_27487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (24))){
var inst_27295 = (state_27396[(7)]);
var inst_27314 = (state_27396[(2)]);
var inst_27315 = cljs.core.next.call(null,inst_27295);
var inst_27273 = inst_27315;
var inst_27274 = null;
var inst_27275 = (0);
var inst_27276 = (0);
var state_27396__$1 = (function (){var statearr_27406 = state_27396;
(statearr_27406[(13)] = inst_27275);

(statearr_27406[(14)] = inst_27273);

(statearr_27406[(15)] = inst_27274);

(statearr_27406[(16)] = inst_27314);

(statearr_27406[(17)] = inst_27276);

return statearr_27406;
})();
var statearr_27407_27488 = state_27396__$1;
(statearr_27407_27488[(2)] = null);

(statearr_27407_27488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (39))){
var state_27396__$1 = state_27396;
var statearr_27411_27489 = state_27396__$1;
(statearr_27411_27489[(2)] = null);

(statearr_27411_27489[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (4))){
var inst_27264 = (state_27396[(9)]);
var inst_27264__$1 = (state_27396[(2)]);
var inst_27265 = (inst_27264__$1 == null);
var state_27396__$1 = (function (){var statearr_27412 = state_27396;
(statearr_27412[(9)] = inst_27264__$1);

return statearr_27412;
})();
if(cljs.core.truth_(inst_27265)){
var statearr_27413_27490 = state_27396__$1;
(statearr_27413_27490[(1)] = (5));

} else {
var statearr_27414_27491 = state_27396__$1;
(statearr_27414_27491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (15))){
var inst_27275 = (state_27396[(13)]);
var inst_27273 = (state_27396[(14)]);
var inst_27274 = (state_27396[(15)]);
var inst_27276 = (state_27396[(17)]);
var inst_27291 = (state_27396[(2)]);
var inst_27292 = (inst_27276 + (1));
var tmp27408 = inst_27275;
var tmp27409 = inst_27273;
var tmp27410 = inst_27274;
var inst_27273__$1 = tmp27409;
var inst_27274__$1 = tmp27410;
var inst_27275__$1 = tmp27408;
var inst_27276__$1 = inst_27292;
var state_27396__$1 = (function (){var statearr_27415 = state_27396;
(statearr_27415[(13)] = inst_27275__$1);

(statearr_27415[(14)] = inst_27273__$1);

(statearr_27415[(18)] = inst_27291);

(statearr_27415[(15)] = inst_27274__$1);

(statearr_27415[(17)] = inst_27276__$1);

return statearr_27415;
})();
var statearr_27416_27492 = state_27396__$1;
(statearr_27416_27492[(2)] = null);

(statearr_27416_27492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (21))){
var inst_27318 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27420_27493 = state_27396__$1;
(statearr_27420_27493[(2)] = inst_27318);

(statearr_27420_27493[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (31))){
var inst_27344 = (state_27396[(11)]);
var inst_27348 = done.call(null,null);
var inst_27349 = cljs.core.async.untap_STAR_.call(null,m,inst_27344);
var state_27396__$1 = (function (){var statearr_27421 = state_27396;
(statearr_27421[(19)] = inst_27348);

return statearr_27421;
})();
var statearr_27422_27494 = state_27396__$1;
(statearr_27422_27494[(2)] = inst_27349);

(statearr_27422_27494[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (32))){
var inst_27336 = (state_27396[(20)]);
var inst_27338 = (state_27396[(21)]);
var inst_27337 = (state_27396[(10)]);
var inst_27339 = (state_27396[(12)]);
var inst_27351 = (state_27396[(2)]);
var inst_27352 = (inst_27339 + (1));
var tmp27417 = inst_27336;
var tmp27418 = inst_27338;
var tmp27419 = inst_27337;
var inst_27336__$1 = tmp27417;
var inst_27337__$1 = tmp27419;
var inst_27338__$1 = tmp27418;
var inst_27339__$1 = inst_27352;
var state_27396__$1 = (function (){var statearr_27423 = state_27396;
(statearr_27423[(20)] = inst_27336__$1);

(statearr_27423[(21)] = inst_27338__$1);

(statearr_27423[(10)] = inst_27337__$1);

(statearr_27423[(22)] = inst_27351);

(statearr_27423[(12)] = inst_27339__$1);

return statearr_27423;
})();
var statearr_27424_27495 = state_27396__$1;
(statearr_27424_27495[(2)] = null);

(statearr_27424_27495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (40))){
var inst_27364 = (state_27396[(23)]);
var inst_27368 = done.call(null,null);
var inst_27369 = cljs.core.async.untap_STAR_.call(null,m,inst_27364);
var state_27396__$1 = (function (){var statearr_27425 = state_27396;
(statearr_27425[(24)] = inst_27368);

return statearr_27425;
})();
var statearr_27426_27496 = state_27396__$1;
(statearr_27426_27496[(2)] = inst_27369);

(statearr_27426_27496[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (33))){
var inst_27355 = (state_27396[(25)]);
var inst_27357 = cljs.core.chunked_seq_QMARK_.call(null,inst_27355);
var state_27396__$1 = state_27396;
if(inst_27357){
var statearr_27427_27497 = state_27396__$1;
(statearr_27427_27497[(1)] = (36));

} else {
var statearr_27428_27498 = state_27396__$1;
(statearr_27428_27498[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (13))){
var inst_27285 = (state_27396[(26)]);
var inst_27288 = cljs.core.async.close_BANG_.call(null,inst_27285);
var state_27396__$1 = state_27396;
var statearr_27429_27499 = state_27396__$1;
(statearr_27429_27499[(2)] = inst_27288);

(statearr_27429_27499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (22))){
var inst_27308 = (state_27396[(8)]);
var inst_27311 = cljs.core.async.close_BANG_.call(null,inst_27308);
var state_27396__$1 = state_27396;
var statearr_27430_27500 = state_27396__$1;
(statearr_27430_27500[(2)] = inst_27311);

(statearr_27430_27500[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (36))){
var inst_27355 = (state_27396[(25)]);
var inst_27359 = cljs.core.chunk_first.call(null,inst_27355);
var inst_27360 = cljs.core.chunk_rest.call(null,inst_27355);
var inst_27361 = cljs.core.count.call(null,inst_27359);
var inst_27336 = inst_27360;
var inst_27337 = inst_27359;
var inst_27338 = inst_27361;
var inst_27339 = (0);
var state_27396__$1 = (function (){var statearr_27431 = state_27396;
(statearr_27431[(20)] = inst_27336);

(statearr_27431[(21)] = inst_27338);

(statearr_27431[(10)] = inst_27337);

(statearr_27431[(12)] = inst_27339);

return statearr_27431;
})();
var statearr_27432_27501 = state_27396__$1;
(statearr_27432_27501[(2)] = null);

(statearr_27432_27501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (41))){
var inst_27355 = (state_27396[(25)]);
var inst_27371 = (state_27396[(2)]);
var inst_27372 = cljs.core.next.call(null,inst_27355);
var inst_27336 = inst_27372;
var inst_27337 = null;
var inst_27338 = (0);
var inst_27339 = (0);
var state_27396__$1 = (function (){var statearr_27433 = state_27396;
(statearr_27433[(20)] = inst_27336);

(statearr_27433[(21)] = inst_27338);

(statearr_27433[(10)] = inst_27337);

(statearr_27433[(27)] = inst_27371);

(statearr_27433[(12)] = inst_27339);

return statearr_27433;
})();
var statearr_27434_27502 = state_27396__$1;
(statearr_27434_27502[(2)] = null);

(statearr_27434_27502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (43))){
var state_27396__$1 = state_27396;
var statearr_27435_27503 = state_27396__$1;
(statearr_27435_27503[(2)] = null);

(statearr_27435_27503[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (29))){
var inst_27380 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27436_27504 = state_27396__$1;
(statearr_27436_27504[(2)] = inst_27380);

(statearr_27436_27504[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (44))){
var inst_27389 = (state_27396[(2)]);
var state_27396__$1 = (function (){var statearr_27437 = state_27396;
(statearr_27437[(28)] = inst_27389);

return statearr_27437;
})();
var statearr_27438_27505 = state_27396__$1;
(statearr_27438_27505[(2)] = null);

(statearr_27438_27505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (6))){
var inst_27328 = (state_27396[(29)]);
var inst_27327 = cljs.core.deref.call(null,cs);
var inst_27328__$1 = cljs.core.keys.call(null,inst_27327);
var inst_27329 = cljs.core.count.call(null,inst_27328__$1);
var inst_27330 = cljs.core.reset_BANG_.call(null,dctr,inst_27329);
var inst_27335 = cljs.core.seq.call(null,inst_27328__$1);
var inst_27336 = inst_27335;
var inst_27337 = null;
var inst_27338 = (0);
var inst_27339 = (0);
var state_27396__$1 = (function (){var statearr_27439 = state_27396;
(statearr_27439[(20)] = inst_27336);

(statearr_27439[(21)] = inst_27338);

(statearr_27439[(30)] = inst_27330);

(statearr_27439[(10)] = inst_27337);

(statearr_27439[(29)] = inst_27328__$1);

(statearr_27439[(12)] = inst_27339);

return statearr_27439;
})();
var statearr_27440_27506 = state_27396__$1;
(statearr_27440_27506[(2)] = null);

(statearr_27440_27506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (28))){
var inst_27336 = (state_27396[(20)]);
var inst_27355 = (state_27396[(25)]);
var inst_27355__$1 = cljs.core.seq.call(null,inst_27336);
var state_27396__$1 = (function (){var statearr_27441 = state_27396;
(statearr_27441[(25)] = inst_27355__$1);

return statearr_27441;
})();
if(inst_27355__$1){
var statearr_27442_27507 = state_27396__$1;
(statearr_27442_27507[(1)] = (33));

} else {
var statearr_27443_27508 = state_27396__$1;
(statearr_27443_27508[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (25))){
var inst_27338 = (state_27396[(21)]);
var inst_27339 = (state_27396[(12)]);
var inst_27341 = (inst_27339 < inst_27338);
var inst_27342 = inst_27341;
var state_27396__$1 = state_27396;
if(cljs.core.truth_(inst_27342)){
var statearr_27444_27509 = state_27396__$1;
(statearr_27444_27509[(1)] = (27));

} else {
var statearr_27445_27510 = state_27396__$1;
(statearr_27445_27510[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (34))){
var state_27396__$1 = state_27396;
var statearr_27446_27511 = state_27396__$1;
(statearr_27446_27511[(2)] = null);

(statearr_27446_27511[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (17))){
var state_27396__$1 = state_27396;
var statearr_27447_27512 = state_27396__$1;
(statearr_27447_27512[(2)] = null);

(statearr_27447_27512[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (3))){
var inst_27394 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27396__$1,inst_27394);
} else {
if((state_val_27397 === (12))){
var inst_27323 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27448_27513 = state_27396__$1;
(statearr_27448_27513[(2)] = inst_27323);

(statearr_27448_27513[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (2))){
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27396__$1,(4),ch);
} else {
if((state_val_27397 === (23))){
var state_27396__$1 = state_27396;
var statearr_27449_27514 = state_27396__$1;
(statearr_27449_27514[(2)] = null);

(statearr_27449_27514[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (35))){
var inst_27378 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27450_27515 = state_27396__$1;
(statearr_27450_27515[(2)] = inst_27378);

(statearr_27450_27515[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (19))){
var inst_27295 = (state_27396[(7)]);
var inst_27299 = cljs.core.chunk_first.call(null,inst_27295);
var inst_27300 = cljs.core.chunk_rest.call(null,inst_27295);
var inst_27301 = cljs.core.count.call(null,inst_27299);
var inst_27273 = inst_27300;
var inst_27274 = inst_27299;
var inst_27275 = inst_27301;
var inst_27276 = (0);
var state_27396__$1 = (function (){var statearr_27451 = state_27396;
(statearr_27451[(13)] = inst_27275);

(statearr_27451[(14)] = inst_27273);

(statearr_27451[(15)] = inst_27274);

(statearr_27451[(17)] = inst_27276);

return statearr_27451;
})();
var statearr_27452_27516 = state_27396__$1;
(statearr_27452_27516[(2)] = null);

(statearr_27452_27516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (11))){
var inst_27273 = (state_27396[(14)]);
var inst_27295 = (state_27396[(7)]);
var inst_27295__$1 = cljs.core.seq.call(null,inst_27273);
var state_27396__$1 = (function (){var statearr_27453 = state_27396;
(statearr_27453[(7)] = inst_27295__$1);

return statearr_27453;
})();
if(inst_27295__$1){
var statearr_27454_27517 = state_27396__$1;
(statearr_27454_27517[(1)] = (16));

} else {
var statearr_27455_27518 = state_27396__$1;
(statearr_27455_27518[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (9))){
var inst_27325 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27456_27519 = state_27396__$1;
(statearr_27456_27519[(2)] = inst_27325);

(statearr_27456_27519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (5))){
var inst_27271 = cljs.core.deref.call(null,cs);
var inst_27272 = cljs.core.seq.call(null,inst_27271);
var inst_27273 = inst_27272;
var inst_27274 = null;
var inst_27275 = (0);
var inst_27276 = (0);
var state_27396__$1 = (function (){var statearr_27457 = state_27396;
(statearr_27457[(13)] = inst_27275);

(statearr_27457[(14)] = inst_27273);

(statearr_27457[(15)] = inst_27274);

(statearr_27457[(17)] = inst_27276);

return statearr_27457;
})();
var statearr_27458_27520 = state_27396__$1;
(statearr_27458_27520[(2)] = null);

(statearr_27458_27520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (14))){
var state_27396__$1 = state_27396;
var statearr_27459_27521 = state_27396__$1;
(statearr_27459_27521[(2)] = null);

(statearr_27459_27521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (45))){
var inst_27386 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27460_27522 = state_27396__$1;
(statearr_27460_27522[(2)] = inst_27386);

(statearr_27460_27522[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (26))){
var inst_27328 = (state_27396[(29)]);
var inst_27382 = (state_27396[(2)]);
var inst_27383 = cljs.core.seq.call(null,inst_27328);
var state_27396__$1 = (function (){var statearr_27461 = state_27396;
(statearr_27461[(31)] = inst_27382);

return statearr_27461;
})();
if(inst_27383){
var statearr_27462_27523 = state_27396__$1;
(statearr_27462_27523[(1)] = (42));

} else {
var statearr_27463_27524 = state_27396__$1;
(statearr_27463_27524[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (16))){
var inst_27295 = (state_27396[(7)]);
var inst_27297 = cljs.core.chunked_seq_QMARK_.call(null,inst_27295);
var state_27396__$1 = state_27396;
if(inst_27297){
var statearr_27464_27525 = state_27396__$1;
(statearr_27464_27525[(1)] = (19));

} else {
var statearr_27465_27526 = state_27396__$1;
(statearr_27465_27526[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (38))){
var inst_27375 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27466_27527 = state_27396__$1;
(statearr_27466_27527[(2)] = inst_27375);

(statearr_27466_27527[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (30))){
var state_27396__$1 = state_27396;
var statearr_27467_27528 = state_27396__$1;
(statearr_27467_27528[(2)] = null);

(statearr_27467_27528[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (10))){
var inst_27274 = (state_27396[(15)]);
var inst_27276 = (state_27396[(17)]);
var inst_27284 = cljs.core._nth.call(null,inst_27274,inst_27276);
var inst_27285 = cljs.core.nth.call(null,inst_27284,(0),null);
var inst_27286 = cljs.core.nth.call(null,inst_27284,(1),null);
var state_27396__$1 = (function (){var statearr_27468 = state_27396;
(statearr_27468[(26)] = inst_27285);

return statearr_27468;
})();
if(cljs.core.truth_(inst_27286)){
var statearr_27469_27529 = state_27396__$1;
(statearr_27469_27529[(1)] = (13));

} else {
var statearr_27470_27530 = state_27396__$1;
(statearr_27470_27530[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (18))){
var inst_27321 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27471_27531 = state_27396__$1;
(statearr_27471_27531[(2)] = inst_27321);

(statearr_27471_27531[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (42))){
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27396__$1,(45),dchan);
} else {
if((state_val_27397 === (37))){
var inst_27264 = (state_27396[(9)]);
var inst_27355 = (state_27396[(25)]);
var inst_27364 = (state_27396[(23)]);
var inst_27364__$1 = cljs.core.first.call(null,inst_27355);
var inst_27365 = cljs.core.async.put_BANG_.call(null,inst_27364__$1,inst_27264,done);
var state_27396__$1 = (function (){var statearr_27472 = state_27396;
(statearr_27472[(23)] = inst_27364__$1);

return statearr_27472;
})();
if(cljs.core.truth_(inst_27365)){
var statearr_27473_27532 = state_27396__$1;
(statearr_27473_27532[(1)] = (39));

} else {
var statearr_27474_27533 = state_27396__$1;
(statearr_27474_27533[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (8))){
var inst_27275 = (state_27396[(13)]);
var inst_27276 = (state_27396[(17)]);
var inst_27278 = (inst_27276 < inst_27275);
var inst_27279 = inst_27278;
var state_27396__$1 = state_27396;
if(cljs.core.truth_(inst_27279)){
var statearr_27475_27534 = state_27396__$1;
(statearr_27475_27534[(1)] = (10));

} else {
var statearr_27476_27535 = state_27396__$1;
(statearr_27476_27535[(1)] = (11));

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
});})(c__26662__auto___27481,cs,m,dchan,dctr,done))
;
return ((function (switch__26572__auto__,c__26662__auto___27481,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26573__auto__ = null;
var cljs$core$async$mult_$_state_machine__26573__auto____0 = (function (){
var statearr_27477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27477[(0)] = cljs$core$async$mult_$_state_machine__26573__auto__);

(statearr_27477[(1)] = (1));

return statearr_27477;
});
var cljs$core$async$mult_$_state_machine__26573__auto____1 = (function (state_27396){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_27396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e27478){if((e27478 instanceof Object)){
var ex__26576__auto__ = e27478;
var statearr_27479_27536 = state_27396;
(statearr_27479_27536[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27537 = state_27396;
state_27396 = G__27537;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26573__auto__ = function(state_27396){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26573__auto____1.call(this,state_27396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26573__auto____0;
cljs$core$async$mult_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26573__auto____1;
return cljs$core$async$mult_$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___27481,cs,m,dchan,dctr,done))
})();
var state__26664__auto__ = (function (){var statearr_27480 = f__26663__auto__.call(null);
(statearr_27480[(6)] = c__26662__auto___27481);

return statearr_27480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___27481,cs,m,dchan,dctr,done))
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
var G__27539 = arguments.length;
switch (G__27539) {
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
var len__4499__auto___27551 = arguments.length;
var i__4500__auto___27552 = (0);
while(true){
if((i__4500__auto___27552 < len__4499__auto___27551)){
args__4502__auto__.push((arguments[i__4500__auto___27552]));

var G__27553 = (i__4500__auto___27552 + (1));
i__4500__auto___27552 = G__27553;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27545){
var map__27546 = p__27545;
var map__27546__$1 = ((((!((map__27546 == null)))?(((((map__27546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27546):map__27546);
var opts = map__27546__$1;
var statearr_27548_27554 = state;
(statearr_27548_27554[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27546,map__27546__$1,opts){
return (function (val){
var statearr_27549_27555 = state;
(statearr_27549_27555[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27546,map__27546__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27550_27556 = state;
(statearr_27550_27556[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27541){
var G__27542 = cljs.core.first.call(null,seq27541);
var seq27541__$1 = cljs.core.next.call(null,seq27541);
var G__27543 = cljs.core.first.call(null,seq27541__$1);
var seq27541__$2 = cljs.core.next.call(null,seq27541__$1);
var G__27544 = cljs.core.first.call(null,seq27541__$2);
var seq27541__$3 = cljs.core.next.call(null,seq27541__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27542,G__27543,G__27544,seq27541__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27557 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27557 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27558){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27558 = meta27558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27559,meta27558__$1){
var self__ = this;
var _27559__$1 = this;
return (new cljs.core.async.t_cljs$core$async27557(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27558__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27559){
var self__ = this;
var _27559__$1 = this;
return self__.meta27558;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27557.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27557.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27557.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27557.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27557.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27557.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27557.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27557.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27558","meta27558",-233536293,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27557";

cljs.core.async.t_cljs$core$async27557.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27557");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27557.
 */
cljs.core.async.__GT_t_cljs$core$async27557 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27557(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27558){
return (new cljs.core.async.t_cljs$core$async27557(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27558));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27557(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26662__auto___27721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___27721,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___27721,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27661){
var state_val_27662 = (state_27661[(1)]);
if((state_val_27662 === (7))){
var inst_27576 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27663_27722 = state_27661__$1;
(statearr_27663_27722[(2)] = inst_27576);

(statearr_27663_27722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (20))){
var inst_27588 = (state_27661[(7)]);
var state_27661__$1 = state_27661;
var statearr_27664_27723 = state_27661__$1;
(statearr_27664_27723[(2)] = inst_27588);

(statearr_27664_27723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (27))){
var state_27661__$1 = state_27661;
var statearr_27665_27724 = state_27661__$1;
(statearr_27665_27724[(2)] = null);

(statearr_27665_27724[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (1))){
var inst_27563 = (state_27661[(8)]);
var inst_27563__$1 = calc_state.call(null);
var inst_27565 = (inst_27563__$1 == null);
var inst_27566 = cljs.core.not.call(null,inst_27565);
var state_27661__$1 = (function (){var statearr_27666 = state_27661;
(statearr_27666[(8)] = inst_27563__$1);

return statearr_27666;
})();
if(inst_27566){
var statearr_27667_27725 = state_27661__$1;
(statearr_27667_27725[(1)] = (2));

} else {
var statearr_27668_27726 = state_27661__$1;
(statearr_27668_27726[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (24))){
var inst_27635 = (state_27661[(9)]);
var inst_27612 = (state_27661[(10)]);
var inst_27621 = (state_27661[(11)]);
var inst_27635__$1 = inst_27612.call(null,inst_27621);
var state_27661__$1 = (function (){var statearr_27669 = state_27661;
(statearr_27669[(9)] = inst_27635__$1);

return statearr_27669;
})();
if(cljs.core.truth_(inst_27635__$1)){
var statearr_27670_27727 = state_27661__$1;
(statearr_27670_27727[(1)] = (29));

} else {
var statearr_27671_27728 = state_27661__$1;
(statearr_27671_27728[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (4))){
var inst_27579 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27579)){
var statearr_27672_27729 = state_27661__$1;
(statearr_27672_27729[(1)] = (8));

} else {
var statearr_27673_27730 = state_27661__$1;
(statearr_27673_27730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (15))){
var inst_27606 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27606)){
var statearr_27674_27731 = state_27661__$1;
(statearr_27674_27731[(1)] = (19));

} else {
var statearr_27675_27732 = state_27661__$1;
(statearr_27675_27732[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (21))){
var inst_27611 = (state_27661[(12)]);
var inst_27611__$1 = (state_27661[(2)]);
var inst_27612 = cljs.core.get.call(null,inst_27611__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27613 = cljs.core.get.call(null,inst_27611__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27614 = cljs.core.get.call(null,inst_27611__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27661__$1 = (function (){var statearr_27676 = state_27661;
(statearr_27676[(10)] = inst_27612);

(statearr_27676[(13)] = inst_27613);

(statearr_27676[(12)] = inst_27611__$1);

return statearr_27676;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27661__$1,(22),inst_27614);
} else {
if((state_val_27662 === (31))){
var inst_27643 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27643)){
var statearr_27677_27733 = state_27661__$1;
(statearr_27677_27733[(1)] = (32));

} else {
var statearr_27678_27734 = state_27661__$1;
(statearr_27678_27734[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (32))){
var inst_27620 = (state_27661[(14)]);
var state_27661__$1 = state_27661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27661__$1,(35),out,inst_27620);
} else {
if((state_val_27662 === (33))){
var inst_27611 = (state_27661[(12)]);
var inst_27588 = inst_27611;
var state_27661__$1 = (function (){var statearr_27679 = state_27661;
(statearr_27679[(7)] = inst_27588);

return statearr_27679;
})();
var statearr_27680_27735 = state_27661__$1;
(statearr_27680_27735[(2)] = null);

(statearr_27680_27735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (13))){
var inst_27588 = (state_27661[(7)]);
var inst_27595 = inst_27588.cljs$lang$protocol_mask$partition0$;
var inst_27596 = (inst_27595 & (64));
var inst_27597 = inst_27588.cljs$core$ISeq$;
var inst_27598 = (cljs.core.PROTOCOL_SENTINEL === inst_27597);
var inst_27599 = ((inst_27596) || (inst_27598));
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27599)){
var statearr_27681_27736 = state_27661__$1;
(statearr_27681_27736[(1)] = (16));

} else {
var statearr_27682_27737 = state_27661__$1;
(statearr_27682_27737[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (22))){
var inst_27620 = (state_27661[(14)]);
var inst_27621 = (state_27661[(11)]);
var inst_27619 = (state_27661[(2)]);
var inst_27620__$1 = cljs.core.nth.call(null,inst_27619,(0),null);
var inst_27621__$1 = cljs.core.nth.call(null,inst_27619,(1),null);
var inst_27622 = (inst_27620__$1 == null);
var inst_27623 = cljs.core._EQ_.call(null,inst_27621__$1,change);
var inst_27624 = ((inst_27622) || (inst_27623));
var state_27661__$1 = (function (){var statearr_27683 = state_27661;
(statearr_27683[(14)] = inst_27620__$1);

(statearr_27683[(11)] = inst_27621__$1);

return statearr_27683;
})();
if(cljs.core.truth_(inst_27624)){
var statearr_27684_27738 = state_27661__$1;
(statearr_27684_27738[(1)] = (23));

} else {
var statearr_27685_27739 = state_27661__$1;
(statearr_27685_27739[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (36))){
var inst_27611 = (state_27661[(12)]);
var inst_27588 = inst_27611;
var state_27661__$1 = (function (){var statearr_27686 = state_27661;
(statearr_27686[(7)] = inst_27588);

return statearr_27686;
})();
var statearr_27687_27740 = state_27661__$1;
(statearr_27687_27740[(2)] = null);

(statearr_27687_27740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (29))){
var inst_27635 = (state_27661[(9)]);
var state_27661__$1 = state_27661;
var statearr_27688_27741 = state_27661__$1;
(statearr_27688_27741[(2)] = inst_27635);

(statearr_27688_27741[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (6))){
var state_27661__$1 = state_27661;
var statearr_27689_27742 = state_27661__$1;
(statearr_27689_27742[(2)] = false);

(statearr_27689_27742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (28))){
var inst_27631 = (state_27661[(2)]);
var inst_27632 = calc_state.call(null);
var inst_27588 = inst_27632;
var state_27661__$1 = (function (){var statearr_27690 = state_27661;
(statearr_27690[(7)] = inst_27588);

(statearr_27690[(15)] = inst_27631);

return statearr_27690;
})();
var statearr_27691_27743 = state_27661__$1;
(statearr_27691_27743[(2)] = null);

(statearr_27691_27743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (25))){
var inst_27657 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27692_27744 = state_27661__$1;
(statearr_27692_27744[(2)] = inst_27657);

(statearr_27692_27744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (34))){
var inst_27655 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27693_27745 = state_27661__$1;
(statearr_27693_27745[(2)] = inst_27655);

(statearr_27693_27745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (17))){
var state_27661__$1 = state_27661;
var statearr_27694_27746 = state_27661__$1;
(statearr_27694_27746[(2)] = false);

(statearr_27694_27746[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (3))){
var state_27661__$1 = state_27661;
var statearr_27695_27747 = state_27661__$1;
(statearr_27695_27747[(2)] = false);

(statearr_27695_27747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (12))){
var inst_27659 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27661__$1,inst_27659);
} else {
if((state_val_27662 === (2))){
var inst_27563 = (state_27661[(8)]);
var inst_27568 = inst_27563.cljs$lang$protocol_mask$partition0$;
var inst_27569 = (inst_27568 & (64));
var inst_27570 = inst_27563.cljs$core$ISeq$;
var inst_27571 = (cljs.core.PROTOCOL_SENTINEL === inst_27570);
var inst_27572 = ((inst_27569) || (inst_27571));
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27572)){
var statearr_27696_27748 = state_27661__$1;
(statearr_27696_27748[(1)] = (5));

} else {
var statearr_27697_27749 = state_27661__$1;
(statearr_27697_27749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (23))){
var inst_27620 = (state_27661[(14)]);
var inst_27626 = (inst_27620 == null);
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27626)){
var statearr_27698_27750 = state_27661__$1;
(statearr_27698_27750[(1)] = (26));

} else {
var statearr_27699_27751 = state_27661__$1;
(statearr_27699_27751[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (35))){
var inst_27646 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
if(cljs.core.truth_(inst_27646)){
var statearr_27700_27752 = state_27661__$1;
(statearr_27700_27752[(1)] = (36));

} else {
var statearr_27701_27753 = state_27661__$1;
(statearr_27701_27753[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (19))){
var inst_27588 = (state_27661[(7)]);
var inst_27608 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27588);
var state_27661__$1 = state_27661;
var statearr_27702_27754 = state_27661__$1;
(statearr_27702_27754[(2)] = inst_27608);

(statearr_27702_27754[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (11))){
var inst_27588 = (state_27661[(7)]);
var inst_27592 = (inst_27588 == null);
var inst_27593 = cljs.core.not.call(null,inst_27592);
var state_27661__$1 = state_27661;
if(inst_27593){
var statearr_27703_27755 = state_27661__$1;
(statearr_27703_27755[(1)] = (13));

} else {
var statearr_27704_27756 = state_27661__$1;
(statearr_27704_27756[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (9))){
var inst_27563 = (state_27661[(8)]);
var state_27661__$1 = state_27661;
var statearr_27705_27757 = state_27661__$1;
(statearr_27705_27757[(2)] = inst_27563);

(statearr_27705_27757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (5))){
var state_27661__$1 = state_27661;
var statearr_27706_27758 = state_27661__$1;
(statearr_27706_27758[(2)] = true);

(statearr_27706_27758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (14))){
var state_27661__$1 = state_27661;
var statearr_27707_27759 = state_27661__$1;
(statearr_27707_27759[(2)] = false);

(statearr_27707_27759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (26))){
var inst_27621 = (state_27661[(11)]);
var inst_27628 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27621);
var state_27661__$1 = state_27661;
var statearr_27708_27760 = state_27661__$1;
(statearr_27708_27760[(2)] = inst_27628);

(statearr_27708_27760[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (16))){
var state_27661__$1 = state_27661;
var statearr_27709_27761 = state_27661__$1;
(statearr_27709_27761[(2)] = true);

(statearr_27709_27761[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (38))){
var inst_27651 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27710_27762 = state_27661__$1;
(statearr_27710_27762[(2)] = inst_27651);

(statearr_27710_27762[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (30))){
var inst_27612 = (state_27661[(10)]);
var inst_27613 = (state_27661[(13)]);
var inst_27621 = (state_27661[(11)]);
var inst_27638 = cljs.core.empty_QMARK_.call(null,inst_27612);
var inst_27639 = inst_27613.call(null,inst_27621);
var inst_27640 = cljs.core.not.call(null,inst_27639);
var inst_27641 = ((inst_27638) && (inst_27640));
var state_27661__$1 = state_27661;
var statearr_27711_27763 = state_27661__$1;
(statearr_27711_27763[(2)] = inst_27641);

(statearr_27711_27763[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (10))){
var inst_27563 = (state_27661[(8)]);
var inst_27584 = (state_27661[(2)]);
var inst_27585 = cljs.core.get.call(null,inst_27584,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27586 = cljs.core.get.call(null,inst_27584,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27587 = cljs.core.get.call(null,inst_27584,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27588 = inst_27563;
var state_27661__$1 = (function (){var statearr_27712 = state_27661;
(statearr_27712[(16)] = inst_27587);

(statearr_27712[(7)] = inst_27588);

(statearr_27712[(17)] = inst_27586);

(statearr_27712[(18)] = inst_27585);

return statearr_27712;
})();
var statearr_27713_27764 = state_27661__$1;
(statearr_27713_27764[(2)] = null);

(statearr_27713_27764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (18))){
var inst_27603 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27714_27765 = state_27661__$1;
(statearr_27714_27765[(2)] = inst_27603);

(statearr_27714_27765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (37))){
var state_27661__$1 = state_27661;
var statearr_27715_27766 = state_27661__$1;
(statearr_27715_27766[(2)] = null);

(statearr_27715_27766[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (8))){
var inst_27563 = (state_27661[(8)]);
var inst_27581 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27563);
var state_27661__$1 = state_27661;
var statearr_27716_27767 = state_27661__$1;
(statearr_27716_27767[(2)] = inst_27581);

(statearr_27716_27767[(1)] = (10));


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
});})(c__26662__auto___27721,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26572__auto__,c__26662__auto___27721,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26573__auto__ = null;
var cljs$core$async$mix_$_state_machine__26573__auto____0 = (function (){
var statearr_27717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27717[(0)] = cljs$core$async$mix_$_state_machine__26573__auto__);

(statearr_27717[(1)] = (1));

return statearr_27717;
});
var cljs$core$async$mix_$_state_machine__26573__auto____1 = (function (state_27661){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_27661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e27718){if((e27718 instanceof Object)){
var ex__26576__auto__ = e27718;
var statearr_27719_27768 = state_27661;
(statearr_27719_27768[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27769 = state_27661;
state_27661 = G__27769;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26573__auto__ = function(state_27661){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26573__auto____1.call(this,state_27661);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26573__auto____0;
cljs$core$async$mix_$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26573__auto____1;
return cljs$core$async$mix_$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___27721,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26664__auto__ = (function (){var statearr_27720 = f__26663__auto__.call(null);
(statearr_27720[(6)] = c__26662__auto___27721);

return statearr_27720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___27721,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__27771 = arguments.length;
switch (G__27771) {
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
var G__27775 = arguments.length;
switch (G__27775) {
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
return (function (p1__27773_SHARP_){
if(cljs.core.truth_(p1__27773_SHARP_.call(null,topic))){
return p1__27773_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27773_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27776 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27777){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27777 = meta27777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27778,meta27777__$1){
var self__ = this;
var _27778__$1 = this;
return (new cljs.core.async.t_cljs$core$async27776(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27777__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27778){
var self__ = this;
var _27778__$1 = this;
return self__.meta27777;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27776.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27777","meta27777",-148211131,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27776";

cljs.core.async.t_cljs$core$async27776.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27776");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27776.
 */
cljs.core.async.__GT_t_cljs$core$async27776 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27776(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27777){
return (new cljs.core.async.t_cljs$core$async27776(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27777));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27776(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26662__auto___27896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___27896,mults,ensure_mult,p){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___27896,mults,ensure_mult,p){
return (function (state_27850){
var state_val_27851 = (state_27850[(1)]);
if((state_val_27851 === (7))){
var inst_27846 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
var statearr_27852_27897 = state_27850__$1;
(statearr_27852_27897[(2)] = inst_27846);

(statearr_27852_27897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (20))){
var state_27850__$1 = state_27850;
var statearr_27853_27898 = state_27850__$1;
(statearr_27853_27898[(2)] = null);

(statearr_27853_27898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (1))){
var state_27850__$1 = state_27850;
var statearr_27854_27899 = state_27850__$1;
(statearr_27854_27899[(2)] = null);

(statearr_27854_27899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (24))){
var inst_27829 = (state_27850[(7)]);
var inst_27838 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27829);
var state_27850__$1 = state_27850;
var statearr_27855_27900 = state_27850__$1;
(statearr_27855_27900[(2)] = inst_27838);

(statearr_27855_27900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (4))){
var inst_27781 = (state_27850[(8)]);
var inst_27781__$1 = (state_27850[(2)]);
var inst_27782 = (inst_27781__$1 == null);
var state_27850__$1 = (function (){var statearr_27856 = state_27850;
(statearr_27856[(8)] = inst_27781__$1);

return statearr_27856;
})();
if(cljs.core.truth_(inst_27782)){
var statearr_27857_27901 = state_27850__$1;
(statearr_27857_27901[(1)] = (5));

} else {
var statearr_27858_27902 = state_27850__$1;
(statearr_27858_27902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (15))){
var inst_27823 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
var statearr_27859_27903 = state_27850__$1;
(statearr_27859_27903[(2)] = inst_27823);

(statearr_27859_27903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (21))){
var inst_27843 = (state_27850[(2)]);
var state_27850__$1 = (function (){var statearr_27860 = state_27850;
(statearr_27860[(9)] = inst_27843);

return statearr_27860;
})();
var statearr_27861_27904 = state_27850__$1;
(statearr_27861_27904[(2)] = null);

(statearr_27861_27904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (13))){
var inst_27805 = (state_27850[(10)]);
var inst_27807 = cljs.core.chunked_seq_QMARK_.call(null,inst_27805);
var state_27850__$1 = state_27850;
if(inst_27807){
var statearr_27862_27905 = state_27850__$1;
(statearr_27862_27905[(1)] = (16));

} else {
var statearr_27863_27906 = state_27850__$1;
(statearr_27863_27906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (22))){
var inst_27835 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
if(cljs.core.truth_(inst_27835)){
var statearr_27864_27907 = state_27850__$1;
(statearr_27864_27907[(1)] = (23));

} else {
var statearr_27865_27908 = state_27850__$1;
(statearr_27865_27908[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (6))){
var inst_27781 = (state_27850[(8)]);
var inst_27831 = (state_27850[(11)]);
var inst_27829 = (state_27850[(7)]);
var inst_27829__$1 = topic_fn.call(null,inst_27781);
var inst_27830 = cljs.core.deref.call(null,mults);
var inst_27831__$1 = cljs.core.get.call(null,inst_27830,inst_27829__$1);
var state_27850__$1 = (function (){var statearr_27866 = state_27850;
(statearr_27866[(11)] = inst_27831__$1);

(statearr_27866[(7)] = inst_27829__$1);

return statearr_27866;
})();
if(cljs.core.truth_(inst_27831__$1)){
var statearr_27867_27909 = state_27850__$1;
(statearr_27867_27909[(1)] = (19));

} else {
var statearr_27868_27910 = state_27850__$1;
(statearr_27868_27910[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (25))){
var inst_27840 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
var statearr_27869_27911 = state_27850__$1;
(statearr_27869_27911[(2)] = inst_27840);

(statearr_27869_27911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (17))){
var inst_27805 = (state_27850[(10)]);
var inst_27814 = cljs.core.first.call(null,inst_27805);
var inst_27815 = cljs.core.async.muxch_STAR_.call(null,inst_27814);
var inst_27816 = cljs.core.async.close_BANG_.call(null,inst_27815);
var inst_27817 = cljs.core.next.call(null,inst_27805);
var inst_27791 = inst_27817;
var inst_27792 = null;
var inst_27793 = (0);
var inst_27794 = (0);
var state_27850__$1 = (function (){var statearr_27870 = state_27850;
(statearr_27870[(12)] = inst_27793);

(statearr_27870[(13)] = inst_27792);

(statearr_27870[(14)] = inst_27794);

(statearr_27870[(15)] = inst_27816);

(statearr_27870[(16)] = inst_27791);

return statearr_27870;
})();
var statearr_27871_27912 = state_27850__$1;
(statearr_27871_27912[(2)] = null);

(statearr_27871_27912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (3))){
var inst_27848 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27850__$1,inst_27848);
} else {
if((state_val_27851 === (12))){
var inst_27825 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
var statearr_27872_27913 = state_27850__$1;
(statearr_27872_27913[(2)] = inst_27825);

(statearr_27872_27913[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (2))){
var state_27850__$1 = state_27850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27850__$1,(4),ch);
} else {
if((state_val_27851 === (23))){
var state_27850__$1 = state_27850;
var statearr_27873_27914 = state_27850__$1;
(statearr_27873_27914[(2)] = null);

(statearr_27873_27914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (19))){
var inst_27781 = (state_27850[(8)]);
var inst_27831 = (state_27850[(11)]);
var inst_27833 = cljs.core.async.muxch_STAR_.call(null,inst_27831);
var state_27850__$1 = state_27850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27850__$1,(22),inst_27833,inst_27781);
} else {
if((state_val_27851 === (11))){
var inst_27805 = (state_27850[(10)]);
var inst_27791 = (state_27850[(16)]);
var inst_27805__$1 = cljs.core.seq.call(null,inst_27791);
var state_27850__$1 = (function (){var statearr_27874 = state_27850;
(statearr_27874[(10)] = inst_27805__$1);

return statearr_27874;
})();
if(inst_27805__$1){
var statearr_27875_27915 = state_27850__$1;
(statearr_27875_27915[(1)] = (13));

} else {
var statearr_27876_27916 = state_27850__$1;
(statearr_27876_27916[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (9))){
var inst_27827 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
var statearr_27877_27917 = state_27850__$1;
(statearr_27877_27917[(2)] = inst_27827);

(statearr_27877_27917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (5))){
var inst_27788 = cljs.core.deref.call(null,mults);
var inst_27789 = cljs.core.vals.call(null,inst_27788);
var inst_27790 = cljs.core.seq.call(null,inst_27789);
var inst_27791 = inst_27790;
var inst_27792 = null;
var inst_27793 = (0);
var inst_27794 = (0);
var state_27850__$1 = (function (){var statearr_27878 = state_27850;
(statearr_27878[(12)] = inst_27793);

(statearr_27878[(13)] = inst_27792);

(statearr_27878[(14)] = inst_27794);

(statearr_27878[(16)] = inst_27791);

return statearr_27878;
})();
var statearr_27879_27918 = state_27850__$1;
(statearr_27879_27918[(2)] = null);

(statearr_27879_27918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (14))){
var state_27850__$1 = state_27850;
var statearr_27883_27919 = state_27850__$1;
(statearr_27883_27919[(2)] = null);

(statearr_27883_27919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (16))){
var inst_27805 = (state_27850[(10)]);
var inst_27809 = cljs.core.chunk_first.call(null,inst_27805);
var inst_27810 = cljs.core.chunk_rest.call(null,inst_27805);
var inst_27811 = cljs.core.count.call(null,inst_27809);
var inst_27791 = inst_27810;
var inst_27792 = inst_27809;
var inst_27793 = inst_27811;
var inst_27794 = (0);
var state_27850__$1 = (function (){var statearr_27884 = state_27850;
(statearr_27884[(12)] = inst_27793);

(statearr_27884[(13)] = inst_27792);

(statearr_27884[(14)] = inst_27794);

(statearr_27884[(16)] = inst_27791);

return statearr_27884;
})();
var statearr_27885_27920 = state_27850__$1;
(statearr_27885_27920[(2)] = null);

(statearr_27885_27920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (10))){
var inst_27793 = (state_27850[(12)]);
var inst_27792 = (state_27850[(13)]);
var inst_27794 = (state_27850[(14)]);
var inst_27791 = (state_27850[(16)]);
var inst_27799 = cljs.core._nth.call(null,inst_27792,inst_27794);
var inst_27800 = cljs.core.async.muxch_STAR_.call(null,inst_27799);
var inst_27801 = cljs.core.async.close_BANG_.call(null,inst_27800);
var inst_27802 = (inst_27794 + (1));
var tmp27880 = inst_27793;
var tmp27881 = inst_27792;
var tmp27882 = inst_27791;
var inst_27791__$1 = tmp27882;
var inst_27792__$1 = tmp27881;
var inst_27793__$1 = tmp27880;
var inst_27794__$1 = inst_27802;
var state_27850__$1 = (function (){var statearr_27886 = state_27850;
(statearr_27886[(12)] = inst_27793__$1);

(statearr_27886[(13)] = inst_27792__$1);

(statearr_27886[(14)] = inst_27794__$1);

(statearr_27886[(17)] = inst_27801);

(statearr_27886[(16)] = inst_27791__$1);

return statearr_27886;
})();
var statearr_27887_27921 = state_27850__$1;
(statearr_27887_27921[(2)] = null);

(statearr_27887_27921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (18))){
var inst_27820 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
var statearr_27888_27922 = state_27850__$1;
(statearr_27888_27922[(2)] = inst_27820);

(statearr_27888_27922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (8))){
var inst_27793 = (state_27850[(12)]);
var inst_27794 = (state_27850[(14)]);
var inst_27796 = (inst_27794 < inst_27793);
var inst_27797 = inst_27796;
var state_27850__$1 = state_27850;
if(cljs.core.truth_(inst_27797)){
var statearr_27889_27923 = state_27850__$1;
(statearr_27889_27923[(1)] = (10));

} else {
var statearr_27890_27924 = state_27850__$1;
(statearr_27890_27924[(1)] = (11));

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
});})(c__26662__auto___27896,mults,ensure_mult,p))
;
return ((function (switch__26572__auto__,c__26662__auto___27896,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26573__auto__ = null;
var cljs$core$async$state_machine__26573__auto____0 = (function (){
var statearr_27891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27891[(0)] = cljs$core$async$state_machine__26573__auto__);

(statearr_27891[(1)] = (1));

return statearr_27891;
});
var cljs$core$async$state_machine__26573__auto____1 = (function (state_27850){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_27850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e27892){if((e27892 instanceof Object)){
var ex__26576__auto__ = e27892;
var statearr_27893_27925 = state_27850;
(statearr_27893_27925[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27926 = state_27850;
state_27850 = G__27926;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$state_machine__26573__auto__ = function(state_27850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26573__auto____1.call(this,state_27850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26573__auto____0;
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26573__auto____1;
return cljs$core$async$state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___27896,mults,ensure_mult,p))
})();
var state__26664__auto__ = (function (){var statearr_27894 = f__26663__auto__.call(null);
(statearr_27894[(6)] = c__26662__auto___27896);

return statearr_27894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___27896,mults,ensure_mult,p))
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
var G__27928 = arguments.length;
switch (G__27928) {
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
var G__27931 = arguments.length;
switch (G__27931) {
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
var G__27934 = arguments.length;
switch (G__27934) {
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
var c__26662__auto___28001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___28001,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___28001,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27973){
var state_val_27974 = (state_27973[(1)]);
if((state_val_27974 === (7))){
var state_27973__$1 = state_27973;
var statearr_27975_28002 = state_27973__$1;
(statearr_27975_28002[(2)] = null);

(statearr_27975_28002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (1))){
var state_27973__$1 = state_27973;
var statearr_27976_28003 = state_27973__$1;
(statearr_27976_28003[(2)] = null);

(statearr_27976_28003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (4))){
var inst_27937 = (state_27973[(7)]);
var inst_27939 = (inst_27937 < cnt);
var state_27973__$1 = state_27973;
if(cljs.core.truth_(inst_27939)){
var statearr_27977_28004 = state_27973__$1;
(statearr_27977_28004[(1)] = (6));

} else {
var statearr_27978_28005 = state_27973__$1;
(statearr_27978_28005[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (15))){
var inst_27969 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
var statearr_27979_28006 = state_27973__$1;
(statearr_27979_28006[(2)] = inst_27969);

(statearr_27979_28006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (13))){
var inst_27962 = cljs.core.async.close_BANG_.call(null,out);
var state_27973__$1 = state_27973;
var statearr_27980_28007 = state_27973__$1;
(statearr_27980_28007[(2)] = inst_27962);

(statearr_27980_28007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (6))){
var state_27973__$1 = state_27973;
var statearr_27981_28008 = state_27973__$1;
(statearr_27981_28008[(2)] = null);

(statearr_27981_28008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (3))){
var inst_27971 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27973__$1,inst_27971);
} else {
if((state_val_27974 === (12))){
var inst_27959 = (state_27973[(8)]);
var inst_27959__$1 = (state_27973[(2)]);
var inst_27960 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27959__$1);
var state_27973__$1 = (function (){var statearr_27982 = state_27973;
(statearr_27982[(8)] = inst_27959__$1);

return statearr_27982;
})();
if(cljs.core.truth_(inst_27960)){
var statearr_27983_28009 = state_27973__$1;
(statearr_27983_28009[(1)] = (13));

} else {
var statearr_27984_28010 = state_27973__$1;
(statearr_27984_28010[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (2))){
var inst_27936 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27937 = (0);
var state_27973__$1 = (function (){var statearr_27985 = state_27973;
(statearr_27985[(7)] = inst_27937);

(statearr_27985[(9)] = inst_27936);

return statearr_27985;
})();
var statearr_27986_28011 = state_27973__$1;
(statearr_27986_28011[(2)] = null);

(statearr_27986_28011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (11))){
var inst_27937 = (state_27973[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27973,(10),Object,null,(9));
var inst_27946 = chs__$1.call(null,inst_27937);
var inst_27947 = done.call(null,inst_27937);
var inst_27948 = cljs.core.async.take_BANG_.call(null,inst_27946,inst_27947);
var state_27973__$1 = state_27973;
var statearr_27987_28012 = state_27973__$1;
(statearr_27987_28012[(2)] = inst_27948);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (9))){
var inst_27937 = (state_27973[(7)]);
var inst_27950 = (state_27973[(2)]);
var inst_27951 = (inst_27937 + (1));
var inst_27937__$1 = inst_27951;
var state_27973__$1 = (function (){var statearr_27988 = state_27973;
(statearr_27988[(10)] = inst_27950);

(statearr_27988[(7)] = inst_27937__$1);

return statearr_27988;
})();
var statearr_27989_28013 = state_27973__$1;
(statearr_27989_28013[(2)] = null);

(statearr_27989_28013[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (5))){
var inst_27957 = (state_27973[(2)]);
var state_27973__$1 = (function (){var statearr_27990 = state_27973;
(statearr_27990[(11)] = inst_27957);

return statearr_27990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27973__$1,(12),dchan);
} else {
if((state_val_27974 === (14))){
var inst_27959 = (state_27973[(8)]);
var inst_27964 = cljs.core.apply.call(null,f,inst_27959);
var state_27973__$1 = state_27973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27973__$1,(16),out,inst_27964);
} else {
if((state_val_27974 === (16))){
var inst_27966 = (state_27973[(2)]);
var state_27973__$1 = (function (){var statearr_27991 = state_27973;
(statearr_27991[(12)] = inst_27966);

return statearr_27991;
})();
var statearr_27992_28014 = state_27973__$1;
(statearr_27992_28014[(2)] = null);

(statearr_27992_28014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (10))){
var inst_27941 = (state_27973[(2)]);
var inst_27942 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27973__$1 = (function (){var statearr_27993 = state_27973;
(statearr_27993[(13)] = inst_27941);

return statearr_27993;
})();
var statearr_27994_28015 = state_27973__$1;
(statearr_27994_28015[(2)] = inst_27942);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27974 === (8))){
var inst_27955 = (state_27973[(2)]);
var state_27973__$1 = state_27973;
var statearr_27995_28016 = state_27973__$1;
(statearr_27995_28016[(2)] = inst_27955);

(statearr_27995_28016[(1)] = (5));


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
});})(c__26662__auto___28001,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26572__auto__,c__26662__auto___28001,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26573__auto__ = null;
var cljs$core$async$state_machine__26573__auto____0 = (function (){
var statearr_27996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27996[(0)] = cljs$core$async$state_machine__26573__auto__);

(statearr_27996[(1)] = (1));

return statearr_27996;
});
var cljs$core$async$state_machine__26573__auto____1 = (function (state_27973){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_27973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e27997){if((e27997 instanceof Object)){
var ex__26576__auto__ = e27997;
var statearr_27998_28017 = state_27973;
(statearr_27998_28017[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28018 = state_27973;
state_27973 = G__28018;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$state_machine__26573__auto__ = function(state_27973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26573__auto____1.call(this,state_27973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26573__auto____0;
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26573__auto____1;
return cljs$core$async$state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___28001,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26664__auto__ = (function (){var statearr_27999 = f__26663__auto__.call(null);
(statearr_27999[(6)] = c__26662__auto___28001);

return statearr_27999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___28001,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28021 = arguments.length;
switch (G__28021) {
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
var c__26662__auto___28075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___28075,out){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___28075,out){
return (function (state_28053){
var state_val_28054 = (state_28053[(1)]);
if((state_val_28054 === (7))){
var inst_28033 = (state_28053[(7)]);
var inst_28032 = (state_28053[(8)]);
var inst_28032__$1 = (state_28053[(2)]);
var inst_28033__$1 = cljs.core.nth.call(null,inst_28032__$1,(0),null);
var inst_28034 = cljs.core.nth.call(null,inst_28032__$1,(1),null);
var inst_28035 = (inst_28033__$1 == null);
var state_28053__$1 = (function (){var statearr_28055 = state_28053;
(statearr_28055[(7)] = inst_28033__$1);

(statearr_28055[(8)] = inst_28032__$1);

(statearr_28055[(9)] = inst_28034);

return statearr_28055;
})();
if(cljs.core.truth_(inst_28035)){
var statearr_28056_28076 = state_28053__$1;
(statearr_28056_28076[(1)] = (8));

} else {
var statearr_28057_28077 = state_28053__$1;
(statearr_28057_28077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (1))){
var inst_28022 = cljs.core.vec.call(null,chs);
var inst_28023 = inst_28022;
var state_28053__$1 = (function (){var statearr_28058 = state_28053;
(statearr_28058[(10)] = inst_28023);

return statearr_28058;
})();
var statearr_28059_28078 = state_28053__$1;
(statearr_28059_28078[(2)] = null);

(statearr_28059_28078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (4))){
var inst_28023 = (state_28053[(10)]);
var state_28053__$1 = state_28053;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28053__$1,(7),inst_28023);
} else {
if((state_val_28054 === (6))){
var inst_28049 = (state_28053[(2)]);
var state_28053__$1 = state_28053;
var statearr_28060_28079 = state_28053__$1;
(statearr_28060_28079[(2)] = inst_28049);

(statearr_28060_28079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (3))){
var inst_28051 = (state_28053[(2)]);
var state_28053__$1 = state_28053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28053__$1,inst_28051);
} else {
if((state_val_28054 === (2))){
var inst_28023 = (state_28053[(10)]);
var inst_28025 = cljs.core.count.call(null,inst_28023);
var inst_28026 = (inst_28025 > (0));
var state_28053__$1 = state_28053;
if(cljs.core.truth_(inst_28026)){
var statearr_28062_28080 = state_28053__$1;
(statearr_28062_28080[(1)] = (4));

} else {
var statearr_28063_28081 = state_28053__$1;
(statearr_28063_28081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (11))){
var inst_28023 = (state_28053[(10)]);
var inst_28042 = (state_28053[(2)]);
var tmp28061 = inst_28023;
var inst_28023__$1 = tmp28061;
var state_28053__$1 = (function (){var statearr_28064 = state_28053;
(statearr_28064[(10)] = inst_28023__$1);

(statearr_28064[(11)] = inst_28042);

return statearr_28064;
})();
var statearr_28065_28082 = state_28053__$1;
(statearr_28065_28082[(2)] = null);

(statearr_28065_28082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (9))){
var inst_28033 = (state_28053[(7)]);
var state_28053__$1 = state_28053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28053__$1,(11),out,inst_28033);
} else {
if((state_val_28054 === (5))){
var inst_28047 = cljs.core.async.close_BANG_.call(null,out);
var state_28053__$1 = state_28053;
var statearr_28066_28083 = state_28053__$1;
(statearr_28066_28083[(2)] = inst_28047);

(statearr_28066_28083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (10))){
var inst_28045 = (state_28053[(2)]);
var state_28053__$1 = state_28053;
var statearr_28067_28084 = state_28053__$1;
(statearr_28067_28084[(2)] = inst_28045);

(statearr_28067_28084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (8))){
var inst_28033 = (state_28053[(7)]);
var inst_28023 = (state_28053[(10)]);
var inst_28032 = (state_28053[(8)]);
var inst_28034 = (state_28053[(9)]);
var inst_28037 = (function (){var cs = inst_28023;
var vec__28028 = inst_28032;
var v = inst_28033;
var c = inst_28034;
return ((function (cs,vec__28028,v,c,inst_28033,inst_28023,inst_28032,inst_28034,state_val_28054,c__26662__auto___28075,out){
return (function (p1__28019_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28019_SHARP_);
});
;})(cs,vec__28028,v,c,inst_28033,inst_28023,inst_28032,inst_28034,state_val_28054,c__26662__auto___28075,out))
})();
var inst_28038 = cljs.core.filterv.call(null,inst_28037,inst_28023);
var inst_28023__$1 = inst_28038;
var state_28053__$1 = (function (){var statearr_28068 = state_28053;
(statearr_28068[(10)] = inst_28023__$1);

return statearr_28068;
})();
var statearr_28069_28085 = state_28053__$1;
(statearr_28069_28085[(2)] = null);

(statearr_28069_28085[(1)] = (2));


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
});})(c__26662__auto___28075,out))
;
return ((function (switch__26572__auto__,c__26662__auto___28075,out){
return (function() {
var cljs$core$async$state_machine__26573__auto__ = null;
var cljs$core$async$state_machine__26573__auto____0 = (function (){
var statearr_28070 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28070[(0)] = cljs$core$async$state_machine__26573__auto__);

(statearr_28070[(1)] = (1));

return statearr_28070;
});
var cljs$core$async$state_machine__26573__auto____1 = (function (state_28053){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_28053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e28071){if((e28071 instanceof Object)){
var ex__26576__auto__ = e28071;
var statearr_28072_28086 = state_28053;
(statearr_28072_28086[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28087 = state_28053;
state_28053 = G__28087;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$state_machine__26573__auto__ = function(state_28053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26573__auto____1.call(this,state_28053);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26573__auto____0;
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26573__auto____1;
return cljs$core$async$state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___28075,out))
})();
var state__26664__auto__ = (function (){var statearr_28073 = f__26663__auto__.call(null);
(statearr_28073[(6)] = c__26662__auto___28075);

return statearr_28073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___28075,out))
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
var G__28089 = arguments.length;
switch (G__28089) {
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
var c__26662__auto___28134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___28134,out){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___28134,out){
return (function (state_28113){
var state_val_28114 = (state_28113[(1)]);
if((state_val_28114 === (7))){
var inst_28095 = (state_28113[(7)]);
var inst_28095__$1 = (state_28113[(2)]);
var inst_28096 = (inst_28095__$1 == null);
var inst_28097 = cljs.core.not.call(null,inst_28096);
var state_28113__$1 = (function (){var statearr_28115 = state_28113;
(statearr_28115[(7)] = inst_28095__$1);

return statearr_28115;
})();
if(inst_28097){
var statearr_28116_28135 = state_28113__$1;
(statearr_28116_28135[(1)] = (8));

} else {
var statearr_28117_28136 = state_28113__$1;
(statearr_28117_28136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (1))){
var inst_28090 = (0);
var state_28113__$1 = (function (){var statearr_28118 = state_28113;
(statearr_28118[(8)] = inst_28090);

return statearr_28118;
})();
var statearr_28119_28137 = state_28113__$1;
(statearr_28119_28137[(2)] = null);

(statearr_28119_28137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (4))){
var state_28113__$1 = state_28113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28113__$1,(7),ch);
} else {
if((state_val_28114 === (6))){
var inst_28108 = (state_28113[(2)]);
var state_28113__$1 = state_28113;
var statearr_28120_28138 = state_28113__$1;
(statearr_28120_28138[(2)] = inst_28108);

(statearr_28120_28138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (3))){
var inst_28110 = (state_28113[(2)]);
var inst_28111 = cljs.core.async.close_BANG_.call(null,out);
var state_28113__$1 = (function (){var statearr_28121 = state_28113;
(statearr_28121[(9)] = inst_28110);

return statearr_28121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28113__$1,inst_28111);
} else {
if((state_val_28114 === (2))){
var inst_28090 = (state_28113[(8)]);
var inst_28092 = (inst_28090 < n);
var state_28113__$1 = state_28113;
if(cljs.core.truth_(inst_28092)){
var statearr_28122_28139 = state_28113__$1;
(statearr_28122_28139[(1)] = (4));

} else {
var statearr_28123_28140 = state_28113__$1;
(statearr_28123_28140[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (11))){
var inst_28090 = (state_28113[(8)]);
var inst_28100 = (state_28113[(2)]);
var inst_28101 = (inst_28090 + (1));
var inst_28090__$1 = inst_28101;
var state_28113__$1 = (function (){var statearr_28124 = state_28113;
(statearr_28124[(8)] = inst_28090__$1);

(statearr_28124[(10)] = inst_28100);

return statearr_28124;
})();
var statearr_28125_28141 = state_28113__$1;
(statearr_28125_28141[(2)] = null);

(statearr_28125_28141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (9))){
var state_28113__$1 = state_28113;
var statearr_28126_28142 = state_28113__$1;
(statearr_28126_28142[(2)] = null);

(statearr_28126_28142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (5))){
var state_28113__$1 = state_28113;
var statearr_28127_28143 = state_28113__$1;
(statearr_28127_28143[(2)] = null);

(statearr_28127_28143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (10))){
var inst_28105 = (state_28113[(2)]);
var state_28113__$1 = state_28113;
var statearr_28128_28144 = state_28113__$1;
(statearr_28128_28144[(2)] = inst_28105);

(statearr_28128_28144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28114 === (8))){
var inst_28095 = (state_28113[(7)]);
var state_28113__$1 = state_28113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28113__$1,(11),out,inst_28095);
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
});})(c__26662__auto___28134,out))
;
return ((function (switch__26572__auto__,c__26662__auto___28134,out){
return (function() {
var cljs$core$async$state_machine__26573__auto__ = null;
var cljs$core$async$state_machine__26573__auto____0 = (function (){
var statearr_28129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28129[(0)] = cljs$core$async$state_machine__26573__auto__);

(statearr_28129[(1)] = (1));

return statearr_28129;
});
var cljs$core$async$state_machine__26573__auto____1 = (function (state_28113){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_28113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e28130){if((e28130 instanceof Object)){
var ex__26576__auto__ = e28130;
var statearr_28131_28145 = state_28113;
(statearr_28131_28145[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28146 = state_28113;
state_28113 = G__28146;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$state_machine__26573__auto__ = function(state_28113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26573__auto____1.call(this,state_28113);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26573__auto____0;
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26573__auto____1;
return cljs$core$async$state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___28134,out))
})();
var state__26664__auto__ = (function (){var statearr_28132 = f__26663__auto__.call(null);
(statearr_28132[(6)] = c__26662__auto___28134);

return statearr_28132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___28134,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28148 = (function (f,ch,meta28149){
this.f = f;
this.ch = ch;
this.meta28149 = meta28149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28150,meta28149__$1){
var self__ = this;
var _28150__$1 = this;
return (new cljs.core.async.t_cljs$core$async28148(self__.f,self__.ch,meta28149__$1));
});

cljs.core.async.t_cljs$core$async28148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28150){
var self__ = this;
var _28150__$1 = this;
return self__.meta28149;
});

cljs.core.async.t_cljs$core$async28148.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28148.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28148.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28148.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28148.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28151 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28151 = (function (f,ch,meta28149,_,fn1,meta28152){
this.f = f;
this.ch = ch;
this.meta28149 = meta28149;
this._ = _;
this.fn1 = fn1;
this.meta28152 = meta28152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28153,meta28152__$1){
var self__ = this;
var _28153__$1 = this;
return (new cljs.core.async.t_cljs$core$async28151(self__.f,self__.ch,self__.meta28149,self__._,self__.fn1,meta28152__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28153){
var self__ = this;
var _28153__$1 = this;
return self__.meta28152;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28151.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28151.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28151.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28151.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28147_SHARP_){
return f1.call(null,(((p1__28147_SHARP_ == null))?null:self__.f.call(null,p1__28147_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28151.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28149","meta28149",156614631,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28148","cljs.core.async/t_cljs$core$async28148",-1530310596,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28152","meta28152",-676686944,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28151.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28151";

cljs.core.async.t_cljs$core$async28151.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28151");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28151.
 */
cljs.core.async.__GT_t_cljs$core$async28151 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28151(f__$1,ch__$1,meta28149__$1,___$2,fn1__$1,meta28152){
return (new cljs.core.async.t_cljs$core$async28151(f__$1,ch__$1,meta28149__$1,___$2,fn1__$1,meta28152));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28151(self__.f,self__.ch,self__.meta28149,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async28148.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28148.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28149","meta28149",156614631,null)], null);
});

cljs.core.async.t_cljs$core$async28148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28148";

cljs.core.async.t_cljs$core$async28148.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28148");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28148.
 */
cljs.core.async.__GT_t_cljs$core$async28148 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28148(f__$1,ch__$1,meta28149){
return (new cljs.core.async.t_cljs$core$async28148(f__$1,ch__$1,meta28149));
});

}

return (new cljs.core.async.t_cljs$core$async28148(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28154 = (function (f,ch,meta28155){
this.f = f;
this.ch = ch;
this.meta28155 = meta28155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28156,meta28155__$1){
var self__ = this;
var _28156__$1 = this;
return (new cljs.core.async.t_cljs$core$async28154(self__.f,self__.ch,meta28155__$1));
});

cljs.core.async.t_cljs$core$async28154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28156){
var self__ = this;
var _28156__$1 = this;
return self__.meta28155;
});

cljs.core.async.t_cljs$core$async28154.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28154.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28154.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28154.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28154.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28154.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28155","meta28155",-1101424425,null)], null);
});

cljs.core.async.t_cljs$core$async28154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28154";

cljs.core.async.t_cljs$core$async28154.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28154");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28154.
 */
cljs.core.async.__GT_t_cljs$core$async28154 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28154(f__$1,ch__$1,meta28155){
return (new cljs.core.async.t_cljs$core$async28154(f__$1,ch__$1,meta28155));
});

}

return (new cljs.core.async.t_cljs$core$async28154(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28157 = (function (p,ch,meta28158){
this.p = p;
this.ch = ch;
this.meta28158 = meta28158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28159,meta28158__$1){
var self__ = this;
var _28159__$1 = this;
return (new cljs.core.async.t_cljs$core$async28157(self__.p,self__.ch,meta28158__$1));
});

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28159){
var self__ = this;
var _28159__$1 = this;
return self__.meta28158;
});

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28157.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28158","meta28158",446014237,null)], null);
});

cljs.core.async.t_cljs$core$async28157.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28157";

cljs.core.async.t_cljs$core$async28157.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28157");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28157.
 */
cljs.core.async.__GT_t_cljs$core$async28157 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28157(p__$1,ch__$1,meta28158){
return (new cljs.core.async.t_cljs$core$async28157(p__$1,ch__$1,meta28158));
});

}

return (new cljs.core.async.t_cljs$core$async28157(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28161 = arguments.length;
switch (G__28161) {
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
var c__26662__auto___28201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___28201,out){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___28201,out){
return (function (state_28182){
var state_val_28183 = (state_28182[(1)]);
if((state_val_28183 === (7))){
var inst_28178 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
var statearr_28184_28202 = state_28182__$1;
(statearr_28184_28202[(2)] = inst_28178);

(statearr_28184_28202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (1))){
var state_28182__$1 = state_28182;
var statearr_28185_28203 = state_28182__$1;
(statearr_28185_28203[(2)] = null);

(statearr_28185_28203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (4))){
var inst_28164 = (state_28182[(7)]);
var inst_28164__$1 = (state_28182[(2)]);
var inst_28165 = (inst_28164__$1 == null);
var state_28182__$1 = (function (){var statearr_28186 = state_28182;
(statearr_28186[(7)] = inst_28164__$1);

return statearr_28186;
})();
if(cljs.core.truth_(inst_28165)){
var statearr_28187_28204 = state_28182__$1;
(statearr_28187_28204[(1)] = (5));

} else {
var statearr_28188_28205 = state_28182__$1;
(statearr_28188_28205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (6))){
var inst_28164 = (state_28182[(7)]);
var inst_28169 = p.call(null,inst_28164);
var state_28182__$1 = state_28182;
if(cljs.core.truth_(inst_28169)){
var statearr_28189_28206 = state_28182__$1;
(statearr_28189_28206[(1)] = (8));

} else {
var statearr_28190_28207 = state_28182__$1;
(statearr_28190_28207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (3))){
var inst_28180 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28182__$1,inst_28180);
} else {
if((state_val_28183 === (2))){
var state_28182__$1 = state_28182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28182__$1,(4),ch);
} else {
if((state_val_28183 === (11))){
var inst_28172 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
var statearr_28191_28208 = state_28182__$1;
(statearr_28191_28208[(2)] = inst_28172);

(statearr_28191_28208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (9))){
var state_28182__$1 = state_28182;
var statearr_28192_28209 = state_28182__$1;
(statearr_28192_28209[(2)] = null);

(statearr_28192_28209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (5))){
var inst_28167 = cljs.core.async.close_BANG_.call(null,out);
var state_28182__$1 = state_28182;
var statearr_28193_28210 = state_28182__$1;
(statearr_28193_28210[(2)] = inst_28167);

(statearr_28193_28210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (10))){
var inst_28175 = (state_28182[(2)]);
var state_28182__$1 = (function (){var statearr_28194 = state_28182;
(statearr_28194[(8)] = inst_28175);

return statearr_28194;
})();
var statearr_28195_28211 = state_28182__$1;
(statearr_28195_28211[(2)] = null);

(statearr_28195_28211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (8))){
var inst_28164 = (state_28182[(7)]);
var state_28182__$1 = state_28182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28182__$1,(11),out,inst_28164);
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
});})(c__26662__auto___28201,out))
;
return ((function (switch__26572__auto__,c__26662__auto___28201,out){
return (function() {
var cljs$core$async$state_machine__26573__auto__ = null;
var cljs$core$async$state_machine__26573__auto____0 = (function (){
var statearr_28196 = [null,null,null,null,null,null,null,null,null];
(statearr_28196[(0)] = cljs$core$async$state_machine__26573__auto__);

(statearr_28196[(1)] = (1));

return statearr_28196;
});
var cljs$core$async$state_machine__26573__auto____1 = (function (state_28182){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_28182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e28197){if((e28197 instanceof Object)){
var ex__26576__auto__ = e28197;
var statearr_28198_28212 = state_28182;
(statearr_28198_28212[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28213 = state_28182;
state_28182 = G__28213;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$state_machine__26573__auto__ = function(state_28182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26573__auto____1.call(this,state_28182);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26573__auto____0;
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26573__auto____1;
return cljs$core$async$state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___28201,out))
})();
var state__26664__auto__ = (function (){var statearr_28199 = f__26663__auto__.call(null);
(statearr_28199[(6)] = c__26662__auto___28201);

return statearr_28199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___28201,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28215 = arguments.length;
switch (G__28215) {
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
var c__26662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto__){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto__){
return (function (state_28278){
var state_val_28279 = (state_28278[(1)]);
if((state_val_28279 === (7))){
var inst_28274 = (state_28278[(2)]);
var state_28278__$1 = state_28278;
var statearr_28280_28318 = state_28278__$1;
(statearr_28280_28318[(2)] = inst_28274);

(statearr_28280_28318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (20))){
var inst_28244 = (state_28278[(7)]);
var inst_28255 = (state_28278[(2)]);
var inst_28256 = cljs.core.next.call(null,inst_28244);
var inst_28230 = inst_28256;
var inst_28231 = null;
var inst_28232 = (0);
var inst_28233 = (0);
var state_28278__$1 = (function (){var statearr_28281 = state_28278;
(statearr_28281[(8)] = inst_28230);

(statearr_28281[(9)] = inst_28232);

(statearr_28281[(10)] = inst_28233);

(statearr_28281[(11)] = inst_28255);

(statearr_28281[(12)] = inst_28231);

return statearr_28281;
})();
var statearr_28282_28319 = state_28278__$1;
(statearr_28282_28319[(2)] = null);

(statearr_28282_28319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (1))){
var state_28278__$1 = state_28278;
var statearr_28283_28320 = state_28278__$1;
(statearr_28283_28320[(2)] = null);

(statearr_28283_28320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (4))){
var inst_28219 = (state_28278[(13)]);
var inst_28219__$1 = (state_28278[(2)]);
var inst_28220 = (inst_28219__$1 == null);
var state_28278__$1 = (function (){var statearr_28284 = state_28278;
(statearr_28284[(13)] = inst_28219__$1);

return statearr_28284;
})();
if(cljs.core.truth_(inst_28220)){
var statearr_28285_28321 = state_28278__$1;
(statearr_28285_28321[(1)] = (5));

} else {
var statearr_28286_28322 = state_28278__$1;
(statearr_28286_28322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (15))){
var state_28278__$1 = state_28278;
var statearr_28290_28323 = state_28278__$1;
(statearr_28290_28323[(2)] = null);

(statearr_28290_28323[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (21))){
var state_28278__$1 = state_28278;
var statearr_28291_28324 = state_28278__$1;
(statearr_28291_28324[(2)] = null);

(statearr_28291_28324[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (13))){
var inst_28230 = (state_28278[(8)]);
var inst_28232 = (state_28278[(9)]);
var inst_28233 = (state_28278[(10)]);
var inst_28231 = (state_28278[(12)]);
var inst_28240 = (state_28278[(2)]);
var inst_28241 = (inst_28233 + (1));
var tmp28287 = inst_28230;
var tmp28288 = inst_28232;
var tmp28289 = inst_28231;
var inst_28230__$1 = tmp28287;
var inst_28231__$1 = tmp28289;
var inst_28232__$1 = tmp28288;
var inst_28233__$1 = inst_28241;
var state_28278__$1 = (function (){var statearr_28292 = state_28278;
(statearr_28292[(8)] = inst_28230__$1);

(statearr_28292[(14)] = inst_28240);

(statearr_28292[(9)] = inst_28232__$1);

(statearr_28292[(10)] = inst_28233__$1);

(statearr_28292[(12)] = inst_28231__$1);

return statearr_28292;
})();
var statearr_28293_28325 = state_28278__$1;
(statearr_28293_28325[(2)] = null);

(statearr_28293_28325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (22))){
var state_28278__$1 = state_28278;
var statearr_28294_28326 = state_28278__$1;
(statearr_28294_28326[(2)] = null);

(statearr_28294_28326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (6))){
var inst_28219 = (state_28278[(13)]);
var inst_28228 = f.call(null,inst_28219);
var inst_28229 = cljs.core.seq.call(null,inst_28228);
var inst_28230 = inst_28229;
var inst_28231 = null;
var inst_28232 = (0);
var inst_28233 = (0);
var state_28278__$1 = (function (){var statearr_28295 = state_28278;
(statearr_28295[(8)] = inst_28230);

(statearr_28295[(9)] = inst_28232);

(statearr_28295[(10)] = inst_28233);

(statearr_28295[(12)] = inst_28231);

return statearr_28295;
})();
var statearr_28296_28327 = state_28278__$1;
(statearr_28296_28327[(2)] = null);

(statearr_28296_28327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (17))){
var inst_28244 = (state_28278[(7)]);
var inst_28248 = cljs.core.chunk_first.call(null,inst_28244);
var inst_28249 = cljs.core.chunk_rest.call(null,inst_28244);
var inst_28250 = cljs.core.count.call(null,inst_28248);
var inst_28230 = inst_28249;
var inst_28231 = inst_28248;
var inst_28232 = inst_28250;
var inst_28233 = (0);
var state_28278__$1 = (function (){var statearr_28297 = state_28278;
(statearr_28297[(8)] = inst_28230);

(statearr_28297[(9)] = inst_28232);

(statearr_28297[(10)] = inst_28233);

(statearr_28297[(12)] = inst_28231);

return statearr_28297;
})();
var statearr_28298_28328 = state_28278__$1;
(statearr_28298_28328[(2)] = null);

(statearr_28298_28328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (3))){
var inst_28276 = (state_28278[(2)]);
var state_28278__$1 = state_28278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28278__$1,inst_28276);
} else {
if((state_val_28279 === (12))){
var inst_28264 = (state_28278[(2)]);
var state_28278__$1 = state_28278;
var statearr_28299_28329 = state_28278__$1;
(statearr_28299_28329[(2)] = inst_28264);

(statearr_28299_28329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (2))){
var state_28278__$1 = state_28278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28278__$1,(4),in$);
} else {
if((state_val_28279 === (23))){
var inst_28272 = (state_28278[(2)]);
var state_28278__$1 = state_28278;
var statearr_28300_28330 = state_28278__$1;
(statearr_28300_28330[(2)] = inst_28272);

(statearr_28300_28330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (19))){
var inst_28259 = (state_28278[(2)]);
var state_28278__$1 = state_28278;
var statearr_28301_28331 = state_28278__$1;
(statearr_28301_28331[(2)] = inst_28259);

(statearr_28301_28331[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (11))){
var inst_28244 = (state_28278[(7)]);
var inst_28230 = (state_28278[(8)]);
var inst_28244__$1 = cljs.core.seq.call(null,inst_28230);
var state_28278__$1 = (function (){var statearr_28302 = state_28278;
(statearr_28302[(7)] = inst_28244__$1);

return statearr_28302;
})();
if(inst_28244__$1){
var statearr_28303_28332 = state_28278__$1;
(statearr_28303_28332[(1)] = (14));

} else {
var statearr_28304_28333 = state_28278__$1;
(statearr_28304_28333[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (9))){
var inst_28266 = (state_28278[(2)]);
var inst_28267 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28278__$1 = (function (){var statearr_28305 = state_28278;
(statearr_28305[(15)] = inst_28266);

return statearr_28305;
})();
if(cljs.core.truth_(inst_28267)){
var statearr_28306_28334 = state_28278__$1;
(statearr_28306_28334[(1)] = (21));

} else {
var statearr_28307_28335 = state_28278__$1;
(statearr_28307_28335[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (5))){
var inst_28222 = cljs.core.async.close_BANG_.call(null,out);
var state_28278__$1 = state_28278;
var statearr_28308_28336 = state_28278__$1;
(statearr_28308_28336[(2)] = inst_28222);

(statearr_28308_28336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (14))){
var inst_28244 = (state_28278[(7)]);
var inst_28246 = cljs.core.chunked_seq_QMARK_.call(null,inst_28244);
var state_28278__$1 = state_28278;
if(inst_28246){
var statearr_28309_28337 = state_28278__$1;
(statearr_28309_28337[(1)] = (17));

} else {
var statearr_28310_28338 = state_28278__$1;
(statearr_28310_28338[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (16))){
var inst_28262 = (state_28278[(2)]);
var state_28278__$1 = state_28278;
var statearr_28311_28339 = state_28278__$1;
(statearr_28311_28339[(2)] = inst_28262);

(statearr_28311_28339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (10))){
var inst_28233 = (state_28278[(10)]);
var inst_28231 = (state_28278[(12)]);
var inst_28238 = cljs.core._nth.call(null,inst_28231,inst_28233);
var state_28278__$1 = state_28278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28278__$1,(13),out,inst_28238);
} else {
if((state_val_28279 === (18))){
var inst_28244 = (state_28278[(7)]);
var inst_28253 = cljs.core.first.call(null,inst_28244);
var state_28278__$1 = state_28278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28278__$1,(20),out,inst_28253);
} else {
if((state_val_28279 === (8))){
var inst_28232 = (state_28278[(9)]);
var inst_28233 = (state_28278[(10)]);
var inst_28235 = (inst_28233 < inst_28232);
var inst_28236 = inst_28235;
var state_28278__$1 = state_28278;
if(cljs.core.truth_(inst_28236)){
var statearr_28312_28340 = state_28278__$1;
(statearr_28312_28340[(1)] = (10));

} else {
var statearr_28313_28341 = state_28278__$1;
(statearr_28313_28341[(1)] = (11));

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
});})(c__26662__auto__))
;
return ((function (switch__26572__auto__,c__26662__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26573__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26573__auto____0 = (function (){
var statearr_28314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28314[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26573__auto__);

(statearr_28314[(1)] = (1));

return statearr_28314;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26573__auto____1 = (function (state_28278){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_28278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e28315){if((e28315 instanceof Object)){
var ex__26576__auto__ = e28315;
var statearr_28316_28342 = state_28278;
(statearr_28316_28342[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28343 = state_28278;
state_28278 = G__28343;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26573__auto__ = function(state_28278){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26573__auto____1.call(this,state_28278);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26573__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26573__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto__))
})();
var state__26664__auto__ = (function (){var statearr_28317 = f__26663__auto__.call(null);
(statearr_28317[(6)] = c__26662__auto__);

return statearr_28317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto__))
);

return c__26662__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28345 = arguments.length;
switch (G__28345) {
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
var G__28348 = arguments.length;
switch (G__28348) {
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
var G__28351 = arguments.length;
switch (G__28351) {
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
var c__26662__auto___28398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___28398,out){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___28398,out){
return (function (state_28375){
var state_val_28376 = (state_28375[(1)]);
if((state_val_28376 === (7))){
var inst_28370 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28377_28399 = state_28375__$1;
(statearr_28377_28399[(2)] = inst_28370);

(statearr_28377_28399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (1))){
var inst_28352 = null;
var state_28375__$1 = (function (){var statearr_28378 = state_28375;
(statearr_28378[(7)] = inst_28352);

return statearr_28378;
})();
var statearr_28379_28400 = state_28375__$1;
(statearr_28379_28400[(2)] = null);

(statearr_28379_28400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (4))){
var inst_28355 = (state_28375[(8)]);
var inst_28355__$1 = (state_28375[(2)]);
var inst_28356 = (inst_28355__$1 == null);
var inst_28357 = cljs.core.not.call(null,inst_28356);
var state_28375__$1 = (function (){var statearr_28380 = state_28375;
(statearr_28380[(8)] = inst_28355__$1);

return statearr_28380;
})();
if(inst_28357){
var statearr_28381_28401 = state_28375__$1;
(statearr_28381_28401[(1)] = (5));

} else {
var statearr_28382_28402 = state_28375__$1;
(statearr_28382_28402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (6))){
var state_28375__$1 = state_28375;
var statearr_28383_28403 = state_28375__$1;
(statearr_28383_28403[(2)] = null);

(statearr_28383_28403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (3))){
var inst_28372 = (state_28375[(2)]);
var inst_28373 = cljs.core.async.close_BANG_.call(null,out);
var state_28375__$1 = (function (){var statearr_28384 = state_28375;
(statearr_28384[(9)] = inst_28372);

return statearr_28384;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28375__$1,inst_28373);
} else {
if((state_val_28376 === (2))){
var state_28375__$1 = state_28375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28375__$1,(4),ch);
} else {
if((state_val_28376 === (11))){
var inst_28355 = (state_28375[(8)]);
var inst_28364 = (state_28375[(2)]);
var inst_28352 = inst_28355;
var state_28375__$1 = (function (){var statearr_28385 = state_28375;
(statearr_28385[(7)] = inst_28352);

(statearr_28385[(10)] = inst_28364);

return statearr_28385;
})();
var statearr_28386_28404 = state_28375__$1;
(statearr_28386_28404[(2)] = null);

(statearr_28386_28404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (9))){
var inst_28355 = (state_28375[(8)]);
var state_28375__$1 = state_28375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28375__$1,(11),out,inst_28355);
} else {
if((state_val_28376 === (5))){
var inst_28355 = (state_28375[(8)]);
var inst_28352 = (state_28375[(7)]);
var inst_28359 = cljs.core._EQ_.call(null,inst_28355,inst_28352);
var state_28375__$1 = state_28375;
if(inst_28359){
var statearr_28388_28405 = state_28375__$1;
(statearr_28388_28405[(1)] = (8));

} else {
var statearr_28389_28406 = state_28375__$1;
(statearr_28389_28406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (10))){
var inst_28367 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28390_28407 = state_28375__$1;
(statearr_28390_28407[(2)] = inst_28367);

(statearr_28390_28407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (8))){
var inst_28352 = (state_28375[(7)]);
var tmp28387 = inst_28352;
var inst_28352__$1 = tmp28387;
var state_28375__$1 = (function (){var statearr_28391 = state_28375;
(statearr_28391[(7)] = inst_28352__$1);

return statearr_28391;
})();
var statearr_28392_28408 = state_28375__$1;
(statearr_28392_28408[(2)] = null);

(statearr_28392_28408[(1)] = (2));


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
});})(c__26662__auto___28398,out))
;
return ((function (switch__26572__auto__,c__26662__auto___28398,out){
return (function() {
var cljs$core$async$state_machine__26573__auto__ = null;
var cljs$core$async$state_machine__26573__auto____0 = (function (){
var statearr_28393 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28393[(0)] = cljs$core$async$state_machine__26573__auto__);

(statearr_28393[(1)] = (1));

return statearr_28393;
});
var cljs$core$async$state_machine__26573__auto____1 = (function (state_28375){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_28375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e28394){if((e28394 instanceof Object)){
var ex__26576__auto__ = e28394;
var statearr_28395_28409 = state_28375;
(statearr_28395_28409[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28410 = state_28375;
state_28375 = G__28410;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$state_machine__26573__auto__ = function(state_28375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26573__auto____1.call(this,state_28375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26573__auto____0;
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26573__auto____1;
return cljs$core$async$state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___28398,out))
})();
var state__26664__auto__ = (function (){var statearr_28396 = f__26663__auto__.call(null);
(statearr_28396[(6)] = c__26662__auto___28398);

return statearr_28396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___28398,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28412 = arguments.length;
switch (G__28412) {
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
var c__26662__auto___28478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___28478,out){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___28478,out){
return (function (state_28450){
var state_val_28451 = (state_28450[(1)]);
if((state_val_28451 === (7))){
var inst_28446 = (state_28450[(2)]);
var state_28450__$1 = state_28450;
var statearr_28452_28479 = state_28450__$1;
(statearr_28452_28479[(2)] = inst_28446);

(statearr_28452_28479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (1))){
var inst_28413 = (new Array(n));
var inst_28414 = inst_28413;
var inst_28415 = (0);
var state_28450__$1 = (function (){var statearr_28453 = state_28450;
(statearr_28453[(7)] = inst_28414);

(statearr_28453[(8)] = inst_28415);

return statearr_28453;
})();
var statearr_28454_28480 = state_28450__$1;
(statearr_28454_28480[(2)] = null);

(statearr_28454_28480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (4))){
var inst_28418 = (state_28450[(9)]);
var inst_28418__$1 = (state_28450[(2)]);
var inst_28419 = (inst_28418__$1 == null);
var inst_28420 = cljs.core.not.call(null,inst_28419);
var state_28450__$1 = (function (){var statearr_28455 = state_28450;
(statearr_28455[(9)] = inst_28418__$1);

return statearr_28455;
})();
if(inst_28420){
var statearr_28456_28481 = state_28450__$1;
(statearr_28456_28481[(1)] = (5));

} else {
var statearr_28457_28482 = state_28450__$1;
(statearr_28457_28482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (15))){
var inst_28440 = (state_28450[(2)]);
var state_28450__$1 = state_28450;
var statearr_28458_28483 = state_28450__$1;
(statearr_28458_28483[(2)] = inst_28440);

(statearr_28458_28483[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (13))){
var state_28450__$1 = state_28450;
var statearr_28459_28484 = state_28450__$1;
(statearr_28459_28484[(2)] = null);

(statearr_28459_28484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (6))){
var inst_28415 = (state_28450[(8)]);
var inst_28436 = (inst_28415 > (0));
var state_28450__$1 = state_28450;
if(cljs.core.truth_(inst_28436)){
var statearr_28460_28485 = state_28450__$1;
(statearr_28460_28485[(1)] = (12));

} else {
var statearr_28461_28486 = state_28450__$1;
(statearr_28461_28486[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (3))){
var inst_28448 = (state_28450[(2)]);
var state_28450__$1 = state_28450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28450__$1,inst_28448);
} else {
if((state_val_28451 === (12))){
var inst_28414 = (state_28450[(7)]);
var inst_28438 = cljs.core.vec.call(null,inst_28414);
var state_28450__$1 = state_28450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28450__$1,(15),out,inst_28438);
} else {
if((state_val_28451 === (2))){
var state_28450__$1 = state_28450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28450__$1,(4),ch);
} else {
if((state_val_28451 === (11))){
var inst_28430 = (state_28450[(2)]);
var inst_28431 = (new Array(n));
var inst_28414 = inst_28431;
var inst_28415 = (0);
var state_28450__$1 = (function (){var statearr_28462 = state_28450;
(statearr_28462[(7)] = inst_28414);

(statearr_28462[(8)] = inst_28415);

(statearr_28462[(10)] = inst_28430);

return statearr_28462;
})();
var statearr_28463_28487 = state_28450__$1;
(statearr_28463_28487[(2)] = null);

(statearr_28463_28487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (9))){
var inst_28414 = (state_28450[(7)]);
var inst_28428 = cljs.core.vec.call(null,inst_28414);
var state_28450__$1 = state_28450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28450__$1,(11),out,inst_28428);
} else {
if((state_val_28451 === (5))){
var inst_28418 = (state_28450[(9)]);
var inst_28414 = (state_28450[(7)]);
var inst_28423 = (state_28450[(11)]);
var inst_28415 = (state_28450[(8)]);
var inst_28422 = (inst_28414[inst_28415] = inst_28418);
var inst_28423__$1 = (inst_28415 + (1));
var inst_28424 = (inst_28423__$1 < n);
var state_28450__$1 = (function (){var statearr_28464 = state_28450;
(statearr_28464[(12)] = inst_28422);

(statearr_28464[(11)] = inst_28423__$1);

return statearr_28464;
})();
if(cljs.core.truth_(inst_28424)){
var statearr_28465_28488 = state_28450__$1;
(statearr_28465_28488[(1)] = (8));

} else {
var statearr_28466_28489 = state_28450__$1;
(statearr_28466_28489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (14))){
var inst_28443 = (state_28450[(2)]);
var inst_28444 = cljs.core.async.close_BANG_.call(null,out);
var state_28450__$1 = (function (){var statearr_28468 = state_28450;
(statearr_28468[(13)] = inst_28443);

return statearr_28468;
})();
var statearr_28469_28490 = state_28450__$1;
(statearr_28469_28490[(2)] = inst_28444);

(statearr_28469_28490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (10))){
var inst_28434 = (state_28450[(2)]);
var state_28450__$1 = state_28450;
var statearr_28470_28491 = state_28450__$1;
(statearr_28470_28491[(2)] = inst_28434);

(statearr_28470_28491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28451 === (8))){
var inst_28414 = (state_28450[(7)]);
var inst_28423 = (state_28450[(11)]);
var tmp28467 = inst_28414;
var inst_28414__$1 = tmp28467;
var inst_28415 = inst_28423;
var state_28450__$1 = (function (){var statearr_28471 = state_28450;
(statearr_28471[(7)] = inst_28414__$1);

(statearr_28471[(8)] = inst_28415);

return statearr_28471;
})();
var statearr_28472_28492 = state_28450__$1;
(statearr_28472_28492[(2)] = null);

(statearr_28472_28492[(1)] = (2));


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
});})(c__26662__auto___28478,out))
;
return ((function (switch__26572__auto__,c__26662__auto___28478,out){
return (function() {
var cljs$core$async$state_machine__26573__auto__ = null;
var cljs$core$async$state_machine__26573__auto____0 = (function (){
var statearr_28473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28473[(0)] = cljs$core$async$state_machine__26573__auto__);

(statearr_28473[(1)] = (1));

return statearr_28473;
});
var cljs$core$async$state_machine__26573__auto____1 = (function (state_28450){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_28450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e28474){if((e28474 instanceof Object)){
var ex__26576__auto__ = e28474;
var statearr_28475_28493 = state_28450;
(statearr_28475_28493[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28494 = state_28450;
state_28450 = G__28494;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$state_machine__26573__auto__ = function(state_28450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26573__auto____1.call(this,state_28450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26573__auto____0;
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26573__auto____1;
return cljs$core$async$state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___28478,out))
})();
var state__26664__auto__ = (function (){var statearr_28476 = f__26663__auto__.call(null);
(statearr_28476[(6)] = c__26662__auto___28478);

return statearr_28476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___28478,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28496 = arguments.length;
switch (G__28496) {
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
var c__26662__auto___28566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26662__auto___28566,out){
return (function (){
var f__26663__auto__ = (function (){var switch__26572__auto__ = ((function (c__26662__auto___28566,out){
return (function (state_28538){
var state_val_28539 = (state_28538[(1)]);
if((state_val_28539 === (7))){
var inst_28534 = (state_28538[(2)]);
var state_28538__$1 = state_28538;
var statearr_28540_28567 = state_28538__$1;
(statearr_28540_28567[(2)] = inst_28534);

(statearr_28540_28567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (1))){
var inst_28497 = [];
var inst_28498 = inst_28497;
var inst_28499 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28538__$1 = (function (){var statearr_28541 = state_28538;
(statearr_28541[(7)] = inst_28499);

(statearr_28541[(8)] = inst_28498);

return statearr_28541;
})();
var statearr_28542_28568 = state_28538__$1;
(statearr_28542_28568[(2)] = null);

(statearr_28542_28568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (4))){
var inst_28502 = (state_28538[(9)]);
var inst_28502__$1 = (state_28538[(2)]);
var inst_28503 = (inst_28502__$1 == null);
var inst_28504 = cljs.core.not.call(null,inst_28503);
var state_28538__$1 = (function (){var statearr_28543 = state_28538;
(statearr_28543[(9)] = inst_28502__$1);

return statearr_28543;
})();
if(inst_28504){
var statearr_28544_28569 = state_28538__$1;
(statearr_28544_28569[(1)] = (5));

} else {
var statearr_28545_28570 = state_28538__$1;
(statearr_28545_28570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (15))){
var inst_28528 = (state_28538[(2)]);
var state_28538__$1 = state_28538;
var statearr_28546_28571 = state_28538__$1;
(statearr_28546_28571[(2)] = inst_28528);

(statearr_28546_28571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (13))){
var state_28538__$1 = state_28538;
var statearr_28547_28572 = state_28538__$1;
(statearr_28547_28572[(2)] = null);

(statearr_28547_28572[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (6))){
var inst_28498 = (state_28538[(8)]);
var inst_28523 = inst_28498.length;
var inst_28524 = (inst_28523 > (0));
var state_28538__$1 = state_28538;
if(cljs.core.truth_(inst_28524)){
var statearr_28548_28573 = state_28538__$1;
(statearr_28548_28573[(1)] = (12));

} else {
var statearr_28549_28574 = state_28538__$1;
(statearr_28549_28574[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (3))){
var inst_28536 = (state_28538[(2)]);
var state_28538__$1 = state_28538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28538__$1,inst_28536);
} else {
if((state_val_28539 === (12))){
var inst_28498 = (state_28538[(8)]);
var inst_28526 = cljs.core.vec.call(null,inst_28498);
var state_28538__$1 = state_28538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28538__$1,(15),out,inst_28526);
} else {
if((state_val_28539 === (2))){
var state_28538__$1 = state_28538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28538__$1,(4),ch);
} else {
if((state_val_28539 === (11))){
var inst_28502 = (state_28538[(9)]);
var inst_28506 = (state_28538[(10)]);
var inst_28516 = (state_28538[(2)]);
var inst_28517 = [];
var inst_28518 = inst_28517.push(inst_28502);
var inst_28498 = inst_28517;
var inst_28499 = inst_28506;
var state_28538__$1 = (function (){var statearr_28550 = state_28538;
(statearr_28550[(7)] = inst_28499);

(statearr_28550[(11)] = inst_28518);

(statearr_28550[(8)] = inst_28498);

(statearr_28550[(12)] = inst_28516);

return statearr_28550;
})();
var statearr_28551_28575 = state_28538__$1;
(statearr_28551_28575[(2)] = null);

(statearr_28551_28575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (9))){
var inst_28498 = (state_28538[(8)]);
var inst_28514 = cljs.core.vec.call(null,inst_28498);
var state_28538__$1 = state_28538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28538__$1,(11),out,inst_28514);
} else {
if((state_val_28539 === (5))){
var inst_28499 = (state_28538[(7)]);
var inst_28502 = (state_28538[(9)]);
var inst_28506 = (state_28538[(10)]);
var inst_28506__$1 = f.call(null,inst_28502);
var inst_28507 = cljs.core._EQ_.call(null,inst_28506__$1,inst_28499);
var inst_28508 = cljs.core.keyword_identical_QMARK_.call(null,inst_28499,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28509 = ((inst_28507) || (inst_28508));
var state_28538__$1 = (function (){var statearr_28552 = state_28538;
(statearr_28552[(10)] = inst_28506__$1);

return statearr_28552;
})();
if(cljs.core.truth_(inst_28509)){
var statearr_28553_28576 = state_28538__$1;
(statearr_28553_28576[(1)] = (8));

} else {
var statearr_28554_28577 = state_28538__$1;
(statearr_28554_28577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (14))){
var inst_28531 = (state_28538[(2)]);
var inst_28532 = cljs.core.async.close_BANG_.call(null,out);
var state_28538__$1 = (function (){var statearr_28556 = state_28538;
(statearr_28556[(13)] = inst_28531);

return statearr_28556;
})();
var statearr_28557_28578 = state_28538__$1;
(statearr_28557_28578[(2)] = inst_28532);

(statearr_28557_28578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (10))){
var inst_28521 = (state_28538[(2)]);
var state_28538__$1 = state_28538;
var statearr_28558_28579 = state_28538__$1;
(statearr_28558_28579[(2)] = inst_28521);

(statearr_28558_28579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (8))){
var inst_28502 = (state_28538[(9)]);
var inst_28498 = (state_28538[(8)]);
var inst_28506 = (state_28538[(10)]);
var inst_28511 = inst_28498.push(inst_28502);
var tmp28555 = inst_28498;
var inst_28498__$1 = tmp28555;
var inst_28499 = inst_28506;
var state_28538__$1 = (function (){var statearr_28559 = state_28538;
(statearr_28559[(7)] = inst_28499);

(statearr_28559[(14)] = inst_28511);

(statearr_28559[(8)] = inst_28498__$1);

return statearr_28559;
})();
var statearr_28560_28580 = state_28538__$1;
(statearr_28560_28580[(2)] = null);

(statearr_28560_28580[(1)] = (2));


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
});})(c__26662__auto___28566,out))
;
return ((function (switch__26572__auto__,c__26662__auto___28566,out){
return (function() {
var cljs$core$async$state_machine__26573__auto__ = null;
var cljs$core$async$state_machine__26573__auto____0 = (function (){
var statearr_28561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28561[(0)] = cljs$core$async$state_machine__26573__auto__);

(statearr_28561[(1)] = (1));

return statearr_28561;
});
var cljs$core$async$state_machine__26573__auto____1 = (function (state_28538){
while(true){
var ret_value__26574__auto__ = (function (){try{while(true){
var result__26575__auto__ = switch__26572__auto__.call(null,state_28538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26575__auto__;
}
break;
}
}catch (e28562){if((e28562 instanceof Object)){
var ex__26576__auto__ = e28562;
var statearr_28563_28581 = state_28538;
(statearr_28563_28581[(5)] = ex__26576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28582 = state_28538;
state_28538 = G__28582;
continue;
} else {
return ret_value__26574__auto__;
}
break;
}
});
cljs$core$async$state_machine__26573__auto__ = function(state_28538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26573__auto____1.call(this,state_28538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26573__auto____0;
cljs$core$async$state_machine__26573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26573__auto____1;
return cljs$core$async$state_machine__26573__auto__;
})()
;})(switch__26572__auto__,c__26662__auto___28566,out))
})();
var state__26664__auto__ = (function (){var statearr_28564 = f__26663__auto__.call(null);
(statearr_28564[(6)] = c__26662__auto___28566);

return statearr_28564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26664__auto__);
});})(c__26662__auto___28566,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1530821391592
