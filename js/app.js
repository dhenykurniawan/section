// Modul
		var test = angular.module('testApp',[]);

		test.directive('myGallery',function(){
			return{
				resctrict: 'AE',
				templateUrl: 'gallery_template.html',
				controller: function($scope){
				$scope.images =	[{dataresponsive: 'images/1-375.jpg', datasrc:'images/1-1600.jpg', title:'This Is Description', subtitle:"This Is a paragraph", src:'images/thumb-1.jpg', imagezoom:'images/zoom.png'},
			      							{dataresponsive: 'images/2-375.jpg', datasrc:'images/2-1600.jpg', title:'This Is Description', subtitle:"This Is a paragraph", src:'images/thumb-2.jpg', imagezoom:'images/zoom.png'},
			      							{dataresponsive: 'images/4-375.jpg', datasrc:'images/4-1600.jpg', title:'This Is Description', subtitle:"This Is a paragraph", src:'images/thumb-4.jpg', imagezoom:'images/zoom.png'},
			      							{dataresponsive: 'images/13-375.jpg', datasrc:'images/13-1600.jpg', title:'This Is Description', subtitle:"This Is a paragraph", src:'images/thumb-13.jpg', imagezoom:'images/zoom.png'}
			      								
			      							];
			  }
			};
		});

		test.directive('lightgallery', function(){
		  return {
		    restrict: 'A',
		    link: function(scope, element, attrs) {
		      if (scope.$last) {
		        element.parent().lightGallery();
		      }
		    }
		  };
		});