angular.module('hod')

.service('Services', function($http) {
    var categories = [];

    this.que1 = function() {
        var promise = $http.get("/que1").then(function(response) {
            return response.data;
        });
        return promise;
    }

    this.que2 = function() {
        var promise = $http.get("/que2").then(function(response) {
            return response.data;
        });
        return promise;
    };

    this.que3 = function() {
        var promies = $http.get("/que3").then(function(response) {
            return response.data;
        });
        return promise;
    };

    this.deferred = function() {
        $http.get("/api/deferred").then(function(response) {
            return response.data;
        });
    };
});