app.controller('detailsCtrl', ['$scope', '$http', '$ionicPopup', 'ordersService', function ($scope, $http, $ionicPopup, ordersService) {
	

	$scope.test = "coucou";
	$scope.data = {};
	$scope.articles = [];


		$scope.data = ordersService.data();
		$scope.articles = $scope.data.articles;

	$scope.getTotalPrix = function () {
	    var i = 0,
	        prixTotal = 0;
	    if($scope.articles){


	    for (i; i < $scope.articles.length; i = i + 1) {
	      if ($scope.articles[i].total) {
	        prixTotal = prixTotal + parseFloat($scope.articles[i].total);
	      }
	    }

	    return prixTotal.toFixed(2);
	    }
  	};



	$scope.rejeter = function() {
	   var confirmPopup = $ionicPopup.confirm({
	     title: 'Confirmation',
	     template: 'Etes-vous sur de vouloir annuler cette commande ?'
	   });
	   confirmPopup.then(function(res) {
	     if(res) {
	       console.log('You are sure');


	     } else {
	       console.log('You are not sure');
	     }
	   });
	 };


}])