myApp.controller('headerCtrl', function ($scope, apiService, $stateParams, TemplateService, NavigationService, $timeout, $uibModal,ModalService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    $scope.loggedInUserStatus=false;
    // $scope.submit={};


    
    $scope.openLogin = function (activetab) {
        console.log("inside login");
            ModalService.openLogin();
    }

    if($.jStorage.get("userSession"))
    {
        console.log("in jstoragecheck");
        $scope.loggedInUser=$.jStorage.get("userSession");
        $scope.loggedInUserStatus=true;
    }
    $scope.logoutUser=function(data){
        console.log(data);
        // $.jStorage.deleteKey("userSession");
        $.jStorage.deleteKey("userSession");
        $scope.loggedInUserStatus=false;


    }
    
    // $scope.openLogin = function (activetab) {
    //     $scope.activeTab = activetab;
    //     $scope.loginModal = $uibModal.open({
    //         animation: true,
    //         templateUrl: 'views/modal/login.html',
    //         scope: $scope,
    //         windowClass: 'loginModalSize'
    //     });
    // }
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    
console.log("in header controller");
   
});