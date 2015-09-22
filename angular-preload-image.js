(function (angular) {
  'use strict';

  angular.module('angular-preload-image', []);

  angular.module('angular-preload-image').factory('preLoader', function () {

    return function (url, successCallback, errorCallback) {
      angular.element(new Image()).bind('load', function () {
        successCallback();
      }).bind('error', function () {
        errorCallback();
      }).attr('src', url);
    };
  });

  angular.module('angular-preload-image').directive('preloadImage', ['preLoader', '$timeout',
    function (preLoader, $timeout) {

      var outdatedTry = function(timeout, url, attrs) {
        $timeout(
          function() {
            preLoader(url, function () {
              attrs.$set('src', url);
            }, function () {
              outdatedTry(timeout * 2 || 1000, url, attrs);
            });
          },
          timeout
        );
      };

      return {
        restrict: 'A',
        terminal: true,
        priority: 100,
        link: function (scope, element, attrs) {
          var url = attrs.ngSrc;

          scope.default = attrs.defaultImage || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wEWEygNWiLqlwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAMSURBVAjXY/j//z8ABf4C/tzMWecAAAAASUVORK5CYII=';

          attrs.$set('src', scope.default);

          outdatedTry(0, url, attrs);
        }
      };
    }
  ]);

  angular.module('angular-preload-image').directive('preloadBgImage', ['preLoader', '$timeout',
    function (preLoader, $timeout) {

      var outdatedTry = function(timeout, element, attrs) {
        $timeout(
          function() {
            preLoader(attrs.preloadBgImage, function () {
              element.css({
                'background-image': 'url("' + attrs.preloadBgImage + '")'
              });
            }, function () {
              outdatedTry(timeout * 2 || 1000, element, attrs);
            });
          },
          timeout
        );
      };

      return {
        restrict: 'A',
        link: function (scope, element, attrs) {

          if (attrs.preloadBgImage !== undefined) {

            //Define default image
            scope.default = attrs.defaultImage || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wEWEygNWiLqlwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAMSURBVAjXY/j//z8ABf4C/tzMWecAAAAASUVORK5CYII=';

            element.css({
              'background-image': 'url("' + scope.default+'")'
            });

            outdatedTry(0, element, attrs);
          }
        }
      };
    }
  ]);

})(angular);