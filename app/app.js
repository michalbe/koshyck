steal(
'can',
'app/homepage/homepage.js',
function(can, appTemplate) {

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
    }
  });

  can.$(window).ready(function() {
    var view = can.view.mustache('<homepage></homepage>')({});
    $('#app').html(view);
  });
});
