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
  //using $scope.totalCost = 0 instead of var total = 0 causes a bug for some reason
    //$scope.totalCost = 0
  $scope.addToCart = function(item) {
    var dupeCheck = false;
    for(var i = 0; i < $scope.cart.length; i++) {
      if(item.name == $scope.cart[i].name) {
        dupeCheck = true;
      }
    }
    if(dupeCheck != true) {
      $scope.cart.push(item);
    }
  };

  $scope.deleteFromCart = function(item) {
    var index = $scope.cart.indexOf(item);
    $scope.cart.splice(index, 1);
  };

  $scope.calculateShippingCost = function(zip) {
    var shippingCost = 0;
    var dist = Math.abs(97201 - parseInt(zip));
    if(dist >= 50000) {
      shippingCost = 15;
    } else if (dist >= 30000) {
      shippingCost = 10;
    } else if (dist >= 10000) {
      shippingCost = 5;
    } else {
      shippingCost = 2;
    }
    return shippingCost;
  }

  // $scope.shippingCost
  $scope.addTotalMinusShipping = function() {
    var total = 0.0;
    for(var i = 0; i < $scope.cart.length; i++) {
      total += $scope.cart[i].price;
    }

    if(total >= 25) {
      total *= .9;
    }

    return total;
  };
});
