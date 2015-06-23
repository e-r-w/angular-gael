# GAEL for Angular

Automagic error logging to Google Analytics.

GAEL will log either a custom action or 'Javascript error' as the action, and pushes the exception message to the category, plus the stack trace to the label.

## Usage

Simply include `'gael'` in you app, and GAEL takes care of the rest.

GAEL works by hijacking Angular's `$exceptionHandler` and firing a GA event on top, just set and forget.

You can configure GAEL's action by injecting the `gaelConfig` service into your app.config:

```js
myApp.config(function(gaelConfig){

  gaelConfig.action = 'stop breaking my code';

});
```

## TODO

Make the stack trace configurable on/off - this is lots of data and probably not needed for everyone.

Get this project out of the Angular stone age and test against more recent versions.

Possibility to have tests run against Angular 1.2.x, 1.3.x & 1.4.x.

Integration tests with Angular itself to ensure that $exceptionHandler is being replicated correctly.
Could also swap out for $provide.decorator if Angular decides to change the way exceptions are handled.
