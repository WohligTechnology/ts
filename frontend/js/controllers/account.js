  myApp.controller('AccountCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/account.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formData = {};
        $scope.formData.congomsg = "Congratulations ! You have cleared this test.";
       $scope.formData.username = "Harry Watson";
       $scope.formData.email = "harry.watson@gmail.com";
        $scope.formData.password = "***********";
         $scope.formData.country = "USA ";
           $scope.formData.city = "New York ";
          $scope.formData.subscriptiondate = "7.7.2017 - 6.10.2017";
            $scope.formData.membershipdate = "7.7.2017 - 6.10.2017";
              $scope.formData.transactiondate = "21 - 7- 2017";
 })