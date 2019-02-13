"use strict";

var fu = function fu() {
  var a = [1, 2, 3].map(function (item) {
    return item * 2;
  });
  console.log(a);
};