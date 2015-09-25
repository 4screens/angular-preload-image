(function (angular) {
  'use strict';

  angular.module('angular-preload-image', [])

  .constant('Settings', {
    firstStep: 1000,
    step: 2,
    className: 'ng-preloader-loading',
    bgClassName: 'ng-preloader-bg-loading',
    defaultSpinner: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzJweCcgaGVpZ2h0PSczMnB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgY2xhc3M9InVpbC1kZWZhdWx0Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgY2xhc3M9ImJrIj48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjODg4ODg4JyB0cmFuc2Zvcm09J3JvdGF0ZSgwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9Jy43cycgYmVnaW49JzBzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM4ODg4ODgnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9Jy43cycgYmVnaW49JzAuMDU4MzMzMzMzMzMzMzMzMzNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM4ODg4ODgnIHRyYW5zZm9ybT0ncm90YXRlKDYwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9Jy43cycgYmVnaW49JzAuMTE2NjY2NjY2NjY2NjY2NjVzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM4ODg4ODgnIHRyYW5zZm9ybT0ncm90YXRlKDkwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9Jy43cycgYmVnaW49JzAuMTc0OTk5OTk5OTk5OTk5OTZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM4ODg4ODgnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScuN3MnIGJlZ2luPScwLjIzMzMzMzMzMzMzMzMzMzNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM4ODg4ODgnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScuN3MnIGJlZ2luPScwLjI5MTY2NjY2NjY2NjY2NjdzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM4ODg4ODgnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScuN3MnIGJlZ2luPScwLjM0OTk5OTk5OTk5OTk5OTlzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM4ODg4ODgnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScuN3MnIGJlZ2luPScwLjQwODMzMzMzMzMzMzMzMzI3cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjODg4ODg4JyB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nLjdzJyBiZWdpbj0nMC40NjY2NjY2NjY2NjY2NjY2cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjODg4ODg4JyB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nLjdzJyBiZWdpbj0nMC41MjVzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM4ODg4ODgnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScuN3MnIGJlZ2luPScwLjU4MzMzMzMzMzMzMzMzMzRzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM4ODg4ODgnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScuN3MnIGJlZ2luPScwLjY0MTY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48L3N2Zz4='
  })

  .factory('preLoader', ['Settings', '$timeout', function (Settings, $timeout) {
    var listenForEl = function($el, successCallback, errorCallback, timeout) {
      $el.bind('load', function () {
        successCallback(this);
        // angular.element(this).cleanData().remove();
        console.log(this);
      }).bind('error', function () {
        errorCallback(timeout);
        // angular.element(this).cleanData().remove();
        console.log(this);
      });
    };


    var outdatedTry = function($el, timeout, limit, successCallback, errorCallback) {
      if (Settings.firstStep * Math.pow(Settings.step, limit - 1) === timeout) {
        return;
      }

      $timeout(
        function() {
          listenForEl($el, successCallback, errorCallback, timeout);
        },
        timeout
      );
    };

    return {
      listenForEl: listenForEl,
      outdatedTry: outdatedTry
    };
  }])

  .directive('preloadImage', ['preLoader', '$timeout', '$window', 'Settings',
    function (preLoader, $timeout, $window, Settings) {

      return {
        restrict: 'A',
        terminal: true,
        priority: 100,
        link: function (scope, $element, attrs) {
          var url = attrs.ngSrc;
          var limit = attrs.limit;
          var spinner = attrs.defaultImage || Settings.defaultSpinner;

          var firstStep = Settings.firstStep;
          var className = Settings.className;

          if (!url) {
            return;
          }

          $element.after($spinner).toggleClass(className);

          attrs.$set('src', url);

          if ($element[0].complete) {
            $element.toggleClass(className);
            return;
          }

          var $spinner = angular.element(new Image()).attr( { 'src': spinner, 'class': className + '-spinner' });

          $element.after($spinner);

          preLoader.outdatedTry($element, 0, limit || 0, function() {
            $element.next().remove();
            $element.css('max-height', $window.innerHeight + 'px');
            $timeout(function() {
              $element.toggleClass(className);
            }, 300);
          }, function(timeout) {
            preLoader.outdatedTry(timeout * 2 || firstStep, url, attrs, $element);
          });
        }
      };
    }
  ])

  .directive('preloadBgImage', ['preLoader', '$timeout', 'Settings',
    function (preLoader, $timeout, Settings) {

      return {
        restrict: 'A',
        link: function (scope, $element, attrs) {
          var firstStep = Settings.firstStep;
          var step = Settings.step;
          var className = Settings.bgClassName;

          var limit = attrs.limit;
          var spinner = attrs.defaultImage || Settings.defaultSpinner;

          var watch = scope.$watch('preloadBgImage', function(url) {
            if (!url) {
              return;
            }

            $element.addClass(className).css({
              'background-image': 'url("' + spinner + '")'
            });

            preLoader.outdatedTry(angular.element(new Image()).attr('src', url), 0, limit || 0, function() {
              $element.css({
                'background-image': 'url("' + url + '")'
              }).toggleClass(className);
            }, function(timeout) {
              preLoader.outdatedTry(timeout * step || firstStep, $element, limit, url);
            });

          }, true);

          scope.$on('$destroy', function() {
            watch();
          });

        },
        scope: {
          preloadBgImage: '@'
        }
      };
    }
  ]);

})(angular);