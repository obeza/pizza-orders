app.controller('attentesCtrl', ['$scope', '$http', '$ionicModal', '$ionicLoading', 'villesService', function ($scope, $http, $ionicModal, $ionicLoading, villesService) {
	
	var indexSelect;
	$scope.data = [];
	$scope.tailles = {
		"prix1" : "petite",
		"prix2" : "moyenne",
		"prix3" : "grande"
	}

	var url = 'http://fdacentral.com/api/pizza-service/app/order/etab/2/commandes/statut/0';

	$ionicLoading.show('Chargement...');

	$http.get( url ).
	  success(function(data, status, headers, config) {
	    // this callback will be called asynchronously
	    // when the response is available
	    $ionicLoading.hide();
	    
	    $scope.datas = data.data;

	    $scope.voir(0);
	    //console.log('data suce ' + JSON.stringify($scope.datas));
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	    //alert('data ' + data);
	    $ionicLoading.hide();
	    //alert('impossible de se connecter sur le serveur...');
	  });
	
	$ionicModal.fromTemplateUrl('templates/modal-article.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	}).then(function(modal) {
	    $scope.modal = modal;
	});

	$scope.voir = function(index) {
		// on stock l'index de la data qu'on affiche
		// pour pouvoir l'utiliser plus tard
		// selon le choix sélectionné
		indexSelect = index;
		$scope.data = $scope.datas[index];
		$scope.articles = JSON.parse($scope.data.details);
    	$scope.modal.show();
  	};

  	$scope.fermerModal = function(){
  		$scope.modal.hide();
  	};

  	$scope.accepter = function(id){
  		console.log("accepter id " + id);
  		// appel au service pour modifier le statut

  		// selon la réponse on supprime ou pas des datas deja chargée		
  		$scope.datas.splice(indexSelect, 1);
  		$scope.modal.hide();
  	};

  	// format le temps donnée par le json en temps javascript
  	$scope.dateJav = function(dt){
  		var dtFor = new Date(dt);
  		return dtFor;
  	};

  	// on va chercher dans le service les infos sur les villes
  	// les id utilisés pour les villes commence à 1
  	$scope.ville = function(v){
  		var villeId = v;
  		return villesService.martinique(villeId);
  	}

}])




