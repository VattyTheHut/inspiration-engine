angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'mainCtrl'
        })

        // HOME STATES AND NESTED VIEWS ========================================
        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html',
            controller: 'mainCtrl'
        })
    
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'mainCtrl'
        })
        
}).directive('mainNav', () =>{
  return {
    templateUrl: 'directive/mainNav.html'
  };
}).directive('endFooter', () =>{
  return {
    templateUrl: './directive/end-footer.html'
  };
  
});

