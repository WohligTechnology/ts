myApp.controller('moduleDetailCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $stateParams, $state, ModalService) {
    $scope.template = TemplateService.getHTML("content/module-detail.html");
    TemplateService.title = "Module Detail"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    // if ($.jStorage.get("userSession")) {
$scope.videoId = 'https://www.youtube.com/watch?v=OPmOXJtxxoo';
    console.log("******stateParams", $stateParams);

    var data = {};
    var abc = {};
    data.module = $stateParams.moduleId;
    data._id = $stateParams.moduleId;
    NavigationService.callApiWithData("Module/findOneModule", data, function (data) {
        console.log("****** data", data.data.data);
        $scope.oneModule = data.data.data;
        $scope.fullVideoUrlPath="https://www.youtube.com/watch?v="+$scope.oneModule.videoUrl;
        // $scope.oneModule.push({fullVideoUrl:"$scope.fullVideoUrlPath"});
        // console.log("oneModule fullVideoUrl***",$scope.fullVideoUrlPath);
        // var abc={"name":"avinash"};
        $scope.oneCourse = $scope.oneModule.course;
        $scope.relatedCourse = $scope.oneModule.course.relatedCourse;
        $scope.courseId = $scope.oneCourse._id;
        data.course = $scope.courseId;
        // console.log("check data",data);
        // console.log("Module",$scope.oneModule);
        // console.log("Course",$scope.oneCourse);
        // console.log("CourseId",$scope.courseId);

        NavigationService.callApiWithData("Module/getModuleByCourse", data, function (data) {
            console.log("****** data", data.data.data);
            $scope.modules = data.data.data;
            console.log("Modules", $scope.modules);

        });

    });

    // NavigationService.callApiWithData("Module/getModulesByModule", data, function (data) {
    // console.log("****** data",data.data.data);
    //     $scope.oneModule = data.data.data;
    //     $scope.oneCourse=$scope.oneModule.course;
    //     $scope.courseId=$scope.oneCourse._id;
    //     console.log("Module",$scope.oneModule);
    //     console.log("Course",$scope.oneCourse);
    //     console.log("CourseId",$scope.courseId);

    // });


    // $scope.videoSection = [{
    //     "image": "img/moduleDetails1/video1.jpg",
    //     "header": "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    //     "content": "John Derry John Derry John Derry John Derry John Derry John Derry John Derry John Derry John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video2.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video3.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video4.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video5.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video6.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video7.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video8.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video9.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video10.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video11.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video12.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video13.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video14.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }];

    // $scope.modules = [{
    //     "image": "img/moduleDetails1/video8.jpg",
    //     "header": "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    //     "content": "John Derry John Derry John Derry John Derry John Derry John Derry John Derry John Derry John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video9.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video10.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video11.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video12.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video13.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video14.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }, {
    //     "image": "img/moduleDetails1/video15.jpg",
    //     "header": "Lorem ipsum dolor",
    //     "content": "John Derry",
    //     "time": "48m 27s",
    //     "views": "14,560"
    // }];

    $scope.header = "Module Test";
    $scope.content = "In multiple choice tasks, there is a question followed by three possible answers, or the beginning of a sentence followed by three possible ways to complete the sentence. Test takers are required to choose the one correct answer - A, B or C. Sometimes, test takers are given a longer list of possible answers and told that they have to choose more than one. In this case, they should read the question carefully to check how many answers are required.";

    $scope.author_image = "img/moduleDetails1/overview.jpg";
    $scope.name = "John Derry";

    $scope.date = "16/1/1994";
    $scope.views = "14,560";
    $scope.overviewHeader = "Lorem Ipsum has been the industry's standard dummy";
    $scope.overviewContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960 s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960 s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    // } else {

    //         ModalService.openLogin();

    // $state.go("home", {
    //     modal: true
    // });
    // }
})