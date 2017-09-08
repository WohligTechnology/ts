 myApp.controller('loginModalCtrl', function ($scope, apiService, $stateParams, TemplateService, NavigationService, $timeout, $uibModal, ModalService) {
     $scope.template = TemplateService;

     $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
         $(window).scrollTop(0);
     });

     $.fancybox.close(true);

     $scope.loggedInUserStatus = false;

     $(document).ready(function () {
         $('[data-toggle="tooltip"]').tooltip();
     });

     console.log("login Controller");
     $scope.openLogin = function (activetab) {
         ModalService.openLogin();
     }
     

     if ($.jStorage.get("userSession")) {
         console.log("in jstoragecheck");
         $scope.loggedInUser = $.jStorage.get("userSession");
         $scope.loggedInUserStatus = true;
     }

     $scope.logoutUser = function (data) {
         console.log("logout in login controller",data);
         $.jStorage.deleteKey("userSession");
         $scope.loggedInUserStatus = false;

     }
$(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $scope.submitSignUpForm = function (data) {

        console.log("This is formData", data);

        NavigationService.callApiWithData("User/saveUser", data, function (data) {
            console.log("received data", data.data.data);
            $scope.userResponse=data.data.data;
            if(data.data.data.errors){
                $scope.signUpErrorMessageDefault=$scope.userResponse.errors.email.message;
                $scope.signUpErrorMessage="Email Already Registered";
            }else{
                // console.log("in else");
                // $uibModal.close();
                $scope.activeTab=0;
                // $scope.loginModal = $uibModal.open({
                // animation: true,
                // templateUrl: 'views/modal/login.html',
                // scope: $scope,
                // windowClass: 'loginModalSize'
            // });
                // $state.go('^.currentState',{modal:true},{reload:true});
                // console.log("data saved and returned to controller");
                // console.log("current state",$state.current.name);
            }
           
        });

    };

    $scope.submitLoginForm = function (data) {

        console.log("This is formData", data);

        // console.log("data is..", data.question);
        NavigationService.callApiWithData("User/login", data, function (data) {
            console.log("received data", data.data.data);
            if(data.data.data._id){
                $.jStorage.set("userSession", data.data.data);
                $scope.jsvalue = $.jStorage.get("userSession");

                $scope.loggedInUserStatus=true;
                console.log("before modal close",$scope.loggedInUserStatus);
                ModalService.closeLoginModal(function(data){
                    $state.reload();
                });
                
            }else{
                $scope.loginError="Incorrect Email or Password!";

            }

        });

        // return new Promise(function (callback) {
        //     $timeout(function () {
        //         callback();
        //     }, 5000);
        // });
    };
 });