var myApp = angular.module('myApp',['ngRoute']);
myApp.config( function($routeProvider, $locationProvider){
   $routeProvider
    .when('/', {
       controller: 'BooksController',
       templateUrl: 'views/books.html',
       controllerAs: 'main'
   }) 
   .when('/books', {
       controller: 'BooksController',
       templateUrl: 'views/books.html',
       controllerAs: 'books'
   })
   .when('/books/details/:id', {
        controller: 'BooksController',
        templateUrl: 'views/book_details.html',
       controllerAs: 'book_details'
    })
   .when('/books/add', {
       controller: 'BooksController',
       templateUrl: 'views/add_book.html',
       controllerAs: 'add_book'
       
   })
   .when('/books/edit/:id',{
       controller: 'BooksController',
       templateUrl: 'views/edit_book.html',
       controllerAs: 'edit_book'
   })
   .otherwise({
       redirectTo:'/'
   });
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
   
});



