angular.module('app').controller('contactCtrl', function($scope, mainServ){
    $scope.contact;
    
    $scope.submitContact = () =>{
        if($scope.contact){
            mainServ.sendContact($scope.contact);
        }

    }

    $scope.changeView = () => {
      $scope.page2 = true
      $scope.page1 = true
    }

   
})