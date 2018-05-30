
    import '../bower_components/angular-ui-router/release/angular-ui-router.min'
    import '../bower_components/angular-cookies/angular-cookies.min'
    const App=angular.module('app',['ui.router','ngCookies','moment-picker']);

    import homeCtr from './templates/home.html';
    import reportCtr from './templates/report.html'

    export {App,homeCtr,reportCtr}