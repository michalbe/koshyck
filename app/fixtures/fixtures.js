steal(
'can',
'can/util/fixture',
'./products-mock.js',
function(can, fixture, mockData) {
  console.log(mockData);
  return fixture({
    "POST /products":  function(request, response) {
      console.log('PRODUCTS!');
      response(mockData);
    },
    "POST /products/{id}": function(request, response) {
      response(can.$.grep(mockData, function(arrayElement){
        return arrayElement.id === request.data.id;
      }));
    }
  });
});
