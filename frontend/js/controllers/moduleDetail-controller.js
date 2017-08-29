myApp.controller('moduleDetailCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/module-detail.html");
    TemplateService.title = "Module Detail"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.videoSection = [{
        "image": "img/moduleDetails1/video1.jpg",
        "header": "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
        "content": "John Derry John Derry John Derry John Derry John Derry John Derry John Derry John Derry John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video2.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video3.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video4.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video5.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video6.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video7.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video8.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video9.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video10.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video11.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video12.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video13.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video14.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }];

    $scope.modules = [{
        "image": "img/moduleDetails1/video8.jpg",
        "header": "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
        "content": "John Derry John Derry John Derry John Derry John Derry John Derry John Derry John Derry John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video9.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video10.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video11.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video12.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video13.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video14.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }, {
        "image": "img/moduleDetails1/video15.jpg",
        "header": "Lorem ipsum dolor",
        "content": "John Derry",
        "time": "48m 27s",
        "views": "14,560"
    }];

    $scope.header = "Module Test";
    $scope.content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960 s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    $scope.author_image = "img/moduleDetails1/overview.jpg";
    $scope.name = "John Derry";

    $scope.date = "16/1/1994";
    $scope.views = "14,560";
    $scope.overviewHeader = "Lorem Ipsum has been the industry's standard dummy";
    $scope.overviewContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960 s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960 s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
})