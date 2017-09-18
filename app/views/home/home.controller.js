function HomeCtrl($scope) {
    $scope.myInterval = 2000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
          image:'app/image/banner1.jpg',
          text: "",
          id: currIndex++
        });
        slides.push({
          image: 'app/image/banner3.jpg',
          text: "",
          id: currIndex++
        });

    };

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 2; i++) {
        $scope.addSlide();
    }


    function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
          slides[i].id = indexes.pop();
        }
    }

    function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
          indexes[i] = i;
        }
        return shuffle(indexes);
    }

    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
          while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
          }
        }

        return array;
    }
}

HomeCtrl.$inject = ['$scope'];

module.exports = HomeCtrl;
