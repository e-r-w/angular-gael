# GAEL for Angular

Automagic error logging to Google Analytics.

## Usage

Simply include the module in you app, and GAEL takes care of the rest.

GAEL works by hijacking Angular's `$exceptionHandler` and firing a GA event on top, just set and forget.

You can configure GAEL's action by injecting the `gaelConfig` module into your app.config:

```
myApp.config(function(gaelConfig){

  gaelConfig.action = 'stop breaking my code';

});
```

## TODO

Get this project out of the Angular stone age and test against more recent versions.

Possibility to have tests run against Angular 1.2.x, 1.3.x & 1.4.x.

Integration tests with Angular itself to ensure that $exceptionHandler is being replicated correctly.
Could also swap out for $provide.decorator if Angular decides to change the way exceptions are handled.