steal(
'can',
'./product/product.js',
function(can) {
    var $ = can.$;
    $().ready(function(){
      var view = can.view.mustache('<products></products>')({});
      $('#app').html(view);
    });
});
