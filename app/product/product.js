steal(
'can',
'./product.mustache!',
function(can, template) {
  var Products = can.Model.extend({
    findAll: "POST /products"
  }, {});

  can.Component.extend({
    tag: 'products',
    template: template,
    scope: {
      products: new Products.List({}),
      sort: function() {
        console.log('wqwe', this.products);
        this.products.sort('name', true);
      },

      filter: function(key, val) {
        $.each(this.products, function(i, product) {
          console.log(product);
          if (product[key] === val) {
            product.attr('visible', true);
          } else {
            product.attr('visible', false);
          }
        });
      },

      manAcc: function(){
        console.log('eeelo');
        this.filter('category', 'Men Accessories');
      }
    }
  });

  return Products;
});
