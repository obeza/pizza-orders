app.factory('ordersService', [ '$q', '$http', function ($q, $http) {
	
	var data = [];

	return {
		data:function(){
			return data;
		},
		load:function(){
			//var deferred = $q.defer();

			$http.get( "data.json" )
			.then(function(response){
						data = response.data;
						//deferred.resolve(response);

			}, function(response) {
						// probleme de connexion !!!
						console.log("errrorrrr : ");
						//var reponse = { "reponse" : "erreur" }
						//deferred.reject('Greeting ' + name + ' is not allowed.');

			});
			//return deferred.promise;
		}

	};


}])

