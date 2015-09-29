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
    var listenForEl = function($el, url, successCallback, errorCallback, timeout) {
      if (successCallback) {
        $el.one('load', function () {
          successCallback($el);
        });
      }

      if (errorCallback) {
        $el.one('error', function () {
          errorCallback(timeout, $el);
        });
      }

      $el.attr('src', url);
    };


    var outdatedTry = function($el, url, timeout, limit, successCallback, errorCallback) {
      if (Settings.firstStep * Math.pow(Settings.step, limit - 1) === timeout) {
        return;
      }

      $timeout(
        function() {
          listenForEl($el, url, successCallback, errorCallback, timeout);
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
          var step = Settings.step;
          var className = Settings.className;

          if (!url) {
            return;
          }

          var $spinner = angular.element(new Image()).attr( { 'src': spinner, 'class': className + '-spinner' });

          $element.after($spinner).toggleClass(className);

          var successCallback = function() {
            $element.next().remove();
            $element.css('max-height', $window.innerHeight + 'px');
            $timeout(function() {
              $element.removeClass(className);
            }, 300);
            $element.off('load').off('error');
          };

          var errorCallback = function(timeout) {
            preLoader.outdatedTry($element,
                                  url,
                                  timeout * step || firstStep,
                                  limit || 0,
                                  null,
                                  errorCallback
                                );
          };

          attrs.$observe('ngSrc', function(url) {
            preLoader.outdatedTry($element,
                                  url,
                                  0,
                                  limit || 0,
                                  successCallback,
                                  errorCallback);
          });

          scope.$on('$destroy', function() {
            $element.off('load').off('error');
            successCallback = function() {};
            errorCallback = function() {};
          });
        }
      };
    }
  ])

  .directive('preloadBgImage', ['preLoader', '$timeout', 'Settings',
    function (preLoader, $timeout, Settings) {

      return {
        restrict: 'A',
        priority: 99,
        link: function (scope, $element, attrs) {
          var className = Settings.bgClassName;
          var url;

          var firstStep = Settings.firstStep;
          var step = Settings.step;

          var limit = attrs.limit;
          var spinner = attrs.defaultImage || Settings.defaultSpinner;

          var disconnectWatchers = function() {
            errorCallback = function() {};
            successCallback = function() {};
          };

          var successCallback = function($el) {
            $element.css({
              'background-image': 'url("' + url + '")'
            }).removeClass(className);
            $el.off('load').off('error').remove();
          };

          var errorCallback = function(timeout, $el) {
            preLoader.outdatedTry(
              $el,
              url,
              timeout * step || firstStep,
              limit || 0,
              null,
              errorCallback
            );
          };

          attrs.$observe('preloadBgImage',
            function(_url) {

              if (!_url) {
                return;
              } else {
                url = _url;
              }

              attrs.$addClass(className);
              $element.css({
                'background-image': 'url("' + spinner + '")'
              });

              preLoader.outdatedTry(
                angular.element(new Image()),
                url,
                0,
                limit || 0,
                successCallback,
                errorCallback);

            }, true);

          scope.$on('$destroy', disconnectWatchers);
        },
        scope: true
      };
    }
  ]);

})(angular);