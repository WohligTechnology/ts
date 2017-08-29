myApp.controller('headerCtrl', function ($scope, $uibModal, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);

    $scope.openLogin = function (activetab) {
        $scope.activeTab = activetab;
        $scope.loginModal = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/login.html',
            scope: $scope,
            windowClass: 'loginModalSize'
        });
    }
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
});