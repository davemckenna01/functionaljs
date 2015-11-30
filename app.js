var _ = R;
var P = PointFree;

var map = P.map;
var fmap = P.fmap;
var compose = P.compose;

var Identity = P.Id;
var Maybe = P.Maybe;
var Future = Future;
var Either = folktale.data.Either;
var Left = Either.Left;
var Right = Either.Right;
var IO = P.IO.IO;
var runIO = P.IO.runIO;
var mjoin = P.mjoin;
var chain = P.chain;

P.IO.extendFn();

var safeGet = _.curry(function(x, o) {
    return Maybe(o[x])
});

$(function(){


console.log('yo');




})
