require('./style.scss');
// module es6
// import { app } from './app.js'
// import config from './config.js'
import 'angular';

import app from './app.module.js'


angular.bootstrap(document.body,['myapp'])
// console.log('hello!')
// console.log('App version = ', app.version)
// console.log('App Config = ', config.important_config)
