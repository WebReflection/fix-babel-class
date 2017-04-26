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
    }
  ;
  return function fixBabelClass(Class) {
    var
      Parent = gPO(Class),
      proto = Parent && gOPD(Parent, 'prototype')
    ;
    return proto && !proto.writable ?
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
