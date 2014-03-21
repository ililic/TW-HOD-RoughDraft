angular.module('hod', [])
.config(function(){
})
.controller('FrontPageCtrl', function($scope, $q, Services){
    $scope.shown="FrontPage";
    $scope.doneQueing=false;
    var que1Promise = Services.que1();
    var que2Promise = Services.que2();
    $q.all([que1Promise, que2Promise]).then(function(data) {
        var fruit = data[1].filter(function(fruit) {
            return fruit.fruit_id == data[0].fruit_id;
        })[0];
        var meal = { starch: data[0].value, side: fruit.fruit_name }
        $scope.meal = meal;
        $scope.doneQueing = true;
    });
});
