steal(
'can',
'./product/product.js',
function(can) {

  $.extend(can.List.prototype, {
    sort: function (comparator, reverse) {
      reverse = (typeof reverse === "undefined") ? false : true;
      var sortFunction = function (a, b) {
        return a[comparator] - b[comparator];
      };

      Array.prototype.sort.call(this, sortFunction);

      if (reverse) {
        this.reverse();
      }

      can.trigger(this, "reset");
    }
  });

  can.$(window).ready(function(){
    var view = can.view.mustache('<products></products>')({});
    $('#app').html(view);
  });
});
