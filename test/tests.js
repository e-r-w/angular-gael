describe('Gael tests', function () {

  var data, result, expected;

  beforeEach(function(){
    module('mocks');
    module('gael');
  });

  describe('Gael config tests', function() {
    it('should set the default action name', inject(function (gaelConfig) {
      result = gaelConfig.action;
      expected = 'JavaScript Error';
      expect(result).toEqual(expected);
    }));
  });

  describe('Gael tests', function() {

    it('should set an action name', inject(function ($exceptionHandler, gaelConfig, $analytics) {
      spyOn($analytics, 'eventTrack');
      gaelConfig.action = 'SomeAction';
      data = {
        stack: 'some stack trace',
        message: 'you got an error'
      };
      expected = {
        category: 'you got an error',
        label: 'some stack trace'
      };

      $exceptionHandler(data);

      expect($analytics.eventTrack).toHaveBeenCalledWith('SomeAction', expected);
    }));

    it('should continue to log normally', inject(function ($exceptionHandler, $log) {
      spyOn($log, 'error');
      data = {
        stack: 'some stack trace',
        message: 'you got an error'
      };

      $exceptionHandler(data);

      expect($log.error).toHaveBeenCalledWith(data);
    }));

  });

});