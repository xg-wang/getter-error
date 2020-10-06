import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Ember from 'ember';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

Ember.onerror = (e) => {
  console.log('rethrowing..')
  throw e;
}

loadInitializers(App, config.modulePrefix);
