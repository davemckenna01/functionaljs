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

var dave = {name: 'Dave', family: {kev: {name: 'Kev', bday: 'aug 21'}, tom: {name: 'Tom', bday: 'jan 31'}}}

var getKevsBday = compose(chain(safeGet('bday')),chain(safeGet('kev')),safeGet('family'))

console.log(getKevsBday(dave));

var kevsBday = safeGet('family', dave).chain(safeGet('kev')).chain(safeGet('bday'))

console.log(kevsBday);

