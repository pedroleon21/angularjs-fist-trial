(function(){
    "use strict";
    const div1 = document.getElementById('app1');
    const div2 = document.getElementById('app2');
    angular
    .module('app1', [])
    .controller('nameChanger', ($scope)=>
    {
        $scope.nome = '';
    });

    angular
    .module('app2', [])
    .controller('contador', ($scope)=>{
        $scope.cont = 0;
    });

    angular.bootstrap(div1,["app1"]);
    angular.bootstrap(div2,["app2"])
})();