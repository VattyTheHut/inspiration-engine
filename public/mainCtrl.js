angular.module('app').controller('mainCtrl', function($scope, mainServ){
    $scope.goo;
    $scope.chips = [];
    $scope.submit = () => {
        if($scope.goo){
            $scope.showChips = true;
            $scope.noLogo = true;
            $scope.chips.push({text: $scope.goo})
            $('#search').addClass('search-animate');
            mainServ.dataCaller($scope.goo);
            $scope.goo = "";
            
        }
    }

    $scope.killChip = (chip) => {
        console.log(chip)
        console.log($scope.chips);

        for(let i = 0; i < $scope.chips.length; i++){

            if(i == 0 && $scope.chips[i].text == chip.text){
                $scope.chips.reverse();
                $scope.chips.pop();
                $scope.chips.reverse();
            }
            else if($scope.chips[i].text == chip.text){
                $scope.chips.splice(i, i);
            }
        }
        console.log($scope.chips);
    }

   
})