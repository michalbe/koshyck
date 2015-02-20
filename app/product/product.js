steal(
'can',
'./product.mustache!',
function(can, prTemplate) {

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

  return can.Component.extend({
    tag: 'product-list',
    template: prTemplate,
    scope: {
      products: new Products.List({}),

      sortAlphabetically: function() {
        this.products.sort('name', true);
      },

      filter: function(key, val) {
        this.products.each(function(product) {
          if (product.attr(key) === val) {
            product.attr('visible', true);
          } else {
            product.attr('visible', false);
          }
        });
      },

      showAll: function() {
        this.products.each(function(product){
          product.attr('visible', true);
        });
      },
      showMen: function() {
        this.filter('category', 'Men Accessories');
      },
      showWomen: function() {
        this.filter('category', 'Women Accessories');
      },
      showChildren: function() {
        this.filter('category', 'Children Accessories');
      },
      showSports: function() {
        this.filter('category', 'Sports Accessories');
      }
    }
  });
});
