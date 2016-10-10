app.controller('ArticleController', function($scope, $http) {

	// If we have no saved sort direction, revert to default.
	if ( localStorage.getItem('savedDirection') === null ) {
		$scope.sortDirection = false;
	} else {
		// local storage can only store strings, so we have to convert our 'true/false' string into a boolean.
		$scope.sortDirection = JSON.parse(localStorage.getItem('savedDirection'));
	};


	$scope.sortVariable = localStorage.getItem("savedSort");
	$scope.articlesToLoad = 10;
	$scope.allArticlesLoaded = false;

	// Load our first set of articles.
	$http.get('data/articles.json').then(function(response){
		$scope.articles = response.data;
	});

	// Function that triggers when you click the 'Load More' button.
	$scope.loadmore = function() {

		$scope.articlesToLoad += 10;

		if ($scope.articlesToLoad == 40) {
			$http.get('data/more-articles.json').then(function(response){
				$scope.articles = $scope.articles.concat(response.data);
			});
		};

		if ($scope.articlesToLoad == 60) {
			$scope.allArticlesLoaded = true;
		};

	};

	// Funtion that triggers when you click on a column to sort it.
	$scope.sort = function(variable) {
		$scope.sortVariable = variable;
		$scope.sortDirection = !$scope.sortDirection;
		localStorage.setItem("savedSort", variable);
		localStorage.setItem("savedDirection", $scope.sortDirection);
	};

});