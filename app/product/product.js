steal(
  'can',
  './products.mustache!',
  function(can, template) {
    var Products = can.Model.extend({
      findAll: "GET /products"
      findOne: "GET /products/{id}"
    }, {});

    can.Component.extend({
      tag: 'products',
      template: template,
      scope: new Products.List({})
    });

    return Products;
  }
);
