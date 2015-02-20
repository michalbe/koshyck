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
      }
    }
  });

  return Products;
});
