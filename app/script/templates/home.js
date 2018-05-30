import {App} from "../../app";



export default App.controller('homeCtr',['$scope','$timeout',function($scope,$timeout){
    $timeout(function(){
        $('#page').jqPaginator({
            totalPages: 200,
            visiblePages: 10,
            currentPage: 3,
            onPageChange: function (num, type) {
                $('#p2').text(type + '：' + num);
            }
        });


    },0)

    $scope.init=function(){
        console.log('页面初始化')
    }
}])