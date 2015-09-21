onlineShopper.controller('ShopperController', function ShopperController($scope) {
  $scope.items = [];
  $scope.addItem = function() {
    $scope.items.push({ name: $scope.name, price: $scope.price });
    $scope.name = null;
    $scope.price = null;
  };

  $scope.deleteItem = function(item) {
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  };
});
