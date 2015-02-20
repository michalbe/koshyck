steal(
'can',
'./homepage.mustache!',
'app/product/product.js',
function(can, hpTemplate) {

  return can.Component.extend({
    tag: 'homepage',
    template: hpTemplate,
    events: {
      'inserted' : function() {
        console.log('inserted');
      }
    }
  });
});
