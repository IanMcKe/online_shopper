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

  $scope.cart = [];
  $scope.shippingCost = 0;
  //using $scope.totalCost = 0 instead of var total = 0 causes a bug for some reason
    //$scope.totalCost = 0
  $scope.addToCart = function(item) {
    for(var i = 0; i < $scope.cart.length)
    $scope.cart.push(item);
  };

  $scope.deleteFromCart = function(item) {
    var index = $scope.cart.indexOf(item);
    $scope.cart.splice(index, 1);
  };

  // $scope.shippingCost
  $scope.addTotal = function() {
    var total = 0;
    for(var i = 0; i < $scope.cart.length; i++) {
      total += $scope.cart[i].price;
    }
    total += $scope.shippingCost;
    return total;
  };
});
