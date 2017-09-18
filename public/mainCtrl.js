angular.module('app').controller('mainCtrl', function($scope, mainServ){
    

    $scope.goo;
    $scope.quotes;
    $scope.chips = [];

    // function animationDuration () {
    //     return "3";
    // }
    
    // function animationIterationCount () {
    //     return "infinite";
    // }

    // function animationTimingFunction () {
    //     return "ease-in-out";
    // }

    // function opacity(){
    //     return "0";
    // }

    // function randomGrid() {
    //     return "grid-y-2";
    // }

    // function randomAnimate() {
    //     return "logo-fade";
    // }

    // var randomStyle = () => {
    //     return {
    //         "opacity": opacity(),
    //         "-webkit-animation-timing-function": animationTimingFunction(),
    //         "animation-iteration-count": animationIterationCount(),
    //         "animation-timing-function": animationTimingFunction(),
    //         "-webkit-animation-iteration-count": animationIterationCount(),
    //         "animation-duration": animationDuration(),
    //         "animation-name": randomAnimate()
    //     }
    // }

    
    // $scope.randomStyle = randomStyle();
    $scope.randomGrid = () => {
        var min = 0;
        var max = 7;
        console.log("is happing")
        console.log(Math.floor(Math.random() * (max - min + 1)) + min)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    $scope.submit = () => {
        if($scope.goo){
            $scope.showChips = true;
            $scope.noLogo = true;
            mainServ.dataCaller($scope.goo);
            $scope.chips.push({text: $scope.goo});
            $('#search').addClass('search-animate');
            $scope.quotes = mainServ.moveholder();
            console.log($scope.quotes);
            $scope.goo = "";
        }
    }

    $scope.killChip = (chip) => {
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