(function (angular) {
    'use strict';
    angular.module('sampleWeb', [
        'ngMessages',
        'ngRoute',
        'ngMaterial'
    ])
        .controller('MainController', function ($scope, $http) {
            $scope.dealSerials = '';
            $scope.dealList = [];

            $scope.confirm = function (dealSerials) {
                var requestOption = {
                    method: 'GET',
                    url: './proxy/api/json',
                    params: {
                        url: 'http://www2.ticketmonster.co.kr/api/mart/deals?dealNoList=' + dealSerials
                    }
                };

                $http(requestOption)
                    .success(function (data) {
                        $scope.dealList = data.data.dealList;
                    });
            };
        });

})(window.angular);
