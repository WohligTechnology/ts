myApp.controller('enquiryCtrl', function ($scope, $uibModal, TemplateService) {
    $scope.template = TemplateService.getHTML("content/enquiry.html");
    TemplateService.title = "Enquiry"; //This is the Title of the Website
    // $scope.navigation = NavigationService.getNavigation();
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
});