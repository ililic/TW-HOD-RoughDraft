Uber = {};

angular.module('hod', ['ngResource'])
.config(function(){
})
.controller('FrontPageCtrl', function($scope){
    $scope.shown="FrontPage";
})
.controller('ContentCtrl', function($scope, $location, SearchService){
    $scope.ui = {};
    $scope.goToArticle = function(related) {
        var isCategorized = related.hasOwnProperty('categories') && typeof related.categories != 'undefined' && related.categories.length > 0;
        var path = (isCategorized ? related.categories[0].path : "") + related.path;
        $location.path(path);
    }
    $scope.populateRelatedArticles = function() {
        SearchService.searchByTags($scope.ui.postTags).then(function(data) {
            $scope.relatedArticles = data;
        });
    };
})
.controller('PreloadCtrl', function($scope, $timeout, $q, ConfigService, $injector){
    ConfigService.load().then(function() {
        var categoryService = $injector.get('CategoryService');
        var tagService = $injector.get('TagService');
   $q.all([categoryService.load(), tagService.load()]).then(function() {
            $scope.dataLoaded = true;
        });
    });
});

