steal(
'can',
'can/util/fixture',
'./products-mock.js'
function(can, fixture, mockData) {
  return fixture({
    "POST /products":  function(request, response) {
      response(mockData);
    },
    "POST /products/{id}": function(request, response) {
      response(can.$.grep(mockData, function(arrayElement){
        return arrayElement.id === request.data.id;
      });
    }
  });
});
