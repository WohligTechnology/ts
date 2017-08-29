   myApp.controller('moduleTestCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/module-test.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formData = {};
        $scope.formData.coursetest = "Course Test 1";
       $scope.formData.question = "Which is the best search tool for finding Web sites that have been handpicked and recommended by someone else?";
       $scope.formData.optionA = "Subject directories";
        $scope.formData.optionB = "Search engines";
         $scope.formData.optionC = "Meta-search engines";
          $scope.formData.optionD = "Discussion groups";
 })