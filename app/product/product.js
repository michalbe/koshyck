steal(
'can',
'./product.mustache!',
function(can, template) {
  var Products = can.Model.extend({
    parseModels: function(response) {
      response = response.map(function(element) {
        element.visible = true;
        return element;
      });
      return response;
    },
    findAll: "POST /products"
  }, {});

  can.Component.extend({
    tag: 'products',
    template: template,
    scope: {
      products: new Products.List({}),
      sort: function() {
        this.products.sort('name', true);
      },

      filter: function(key, val) {
        $.each(this.products, function(i, product) {
          if (product[key] === val) {
            product.attr('visible', true);
          } else {
            product.attr('visible', false);
          }
        });
      },

      showMenAccesories: function() {
        console.log(arguments);
        this.filter('category', 'Men Accessories');
      }
    }
  });

  return Products;
});
