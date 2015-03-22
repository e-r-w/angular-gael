angular.module('angulartics', [])
    .factory('$analytics', function(){
      return {
        eventTrack: function(){
          console.log('Mocked event track invoked');
        }
      };
    });
