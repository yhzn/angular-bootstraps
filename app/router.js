    import {App,homeCtr,reportCtr} from "./app";
    export default App.config(['$stateProvider','$urlRouterProvider','$locationProvider','momentPickerProvider',function($stateProvider,$urlRouterProvider,$locationProvider,momentPickerProvider){
        $locationProvider.hashPrefix('');
        momentPickerProvider.options({
            locale:"zh-cn",
        });
         $stateProvider
             .state('home',{
                 url:'/home',
                 template:homeCtr,
                 controller:'homeCtr'
             })
             .state('report',{
                 url:'/report',
                 template:reportCtr,
                 controller:'reportCtr'
             });
         $urlRouterProvider.otherwise('/home');
    }])