angular.module('gael', ['angulartics'])
    .factory('$exceptionHandler', ['$log', '$analytics', 'gaelConfig', function ($log, $analytics, gaelConfig) {
      return function (exception, cause) {
        $log.error.apply($log, arguments);
        $analytics.eventTrack(gaelConfig.action, {
          category: exception.message || exception,
          label: exception.stack
        });
      };
    }])
    .factory('gaelConfig', function(){
      this.action = 'JavaScript Error';
      return this;
    });