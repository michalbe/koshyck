steal(
'can',
function(can) {
    var $ = can.$;
    $().ready(function(){
      //var view = can.view.mustache('<home-app></home-app>')(snippetBox);
      $('#app').html('Hello!');
    });
});
