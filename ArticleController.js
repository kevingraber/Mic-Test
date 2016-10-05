app.controller('ArticleController', function($scope, $http) {

	$scope.sortVariable = 'words';

	$http.get('data/articles.json').then(function(response){
		console.log(response)
		$scope.articles = response.data;
	});

});