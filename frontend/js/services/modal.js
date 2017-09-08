myApp.service('ModalService', function ($http, $state, $uibModal, $timeout) {

    this.openLogin = function () {
        console.log("exexcuted");
         this.openLoginModal = $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/login.html',
            windowClass: 'loginModalSize',
            controller: 'loginModalCtrl'
        });
        this.closeLoginModal=function(cb){
            this.openLoginModal.close();
            $state.reload();
        }
        
    };
})