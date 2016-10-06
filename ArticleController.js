app.controller('ArticleController', function($scope, $http) {

	$scope.sortVariable = '';
	$scope.sortDirection = false;
	$scope.articlesToLoad = 10;
	$scope.allArticlesLoaded = false;

	$http.get('data/articles.json').then(function(response){
		console.log(response)
		$scope.articles = response.data;
		console.log($scope.articles)
	});

	// Function that triggers when you click the 'Load More' button.
	$scope.loadmore = function() {

		$scope.articlesToLoad += 10;

		if ($scope.articlesToLoad == 40) {
			$http.get('data/more-articles.json').then(function(response){
				console.log(response.data)
				$scope.articles = $scope.articles.concat(response.data);
				console.log($scope.articles)
			});
		};

		if ($scope.articlesToLoad == 60) {
			$scope.allArticlesLoaded = true;
		}
		console.log($scope.articlesToLoad)
		console.log($scope.allArticlesLoaded)

	};

});