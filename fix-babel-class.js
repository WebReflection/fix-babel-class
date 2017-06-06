/*! ISC License (c) 2017, Andrea Giammarchi, @WebReflection */
var fixBabelClass = (function (O) {
  var
    gOPD = O.getOwnPropertyDescriptor,
    gPO = O.getPrototypeOf || function (o) { return o.__proto__; },
    sPO = O.setPrototypeOf || function (o, p) { o.__proto__ = p; return o; },
    construct = Reflect.construct || function (Parent, args, Class) {
      for (var
        Constructor,
        a = [null],
        l = args.length,
        i = 0; i < l; i++
      ) {
        a[i + 1] = args[i];
      }
      Constructor = Parent.bind.apply(Parent, a);
      return new Constructor();
    },
    needsWrap = function (Parent) {
      do {
        var proto = Parent && gOPD(Parent, 'prototype');
        if (proto && !proto.writable) return true;
      } while (proto && (Parent = gPO(Parent)));
      return false;
    }
  ;
  return function fixBabelClass(Class) {
    var Parent = gPO(Class);
    return needsWrap(Parent) ?
      sPO(
        Class,
        sPO(
          function () {
            return sPO(
              'DOCUMENT_NODE' in Parent ?
                this :
                construct(Parent, arguments, Class),
              Class.prototype
            );
          },
          Parent
        )
      ) :
      Class
  };
}(Object));

try { module.exports = fixBabelClass; } catch(o_O) {}
