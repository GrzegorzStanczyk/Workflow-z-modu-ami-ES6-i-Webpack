import 'angular';
import {TestCtrl} from './test/test.controller.js';
import {NameService} from './test/name.service.js';
import {TestComponent} from './test/test.component.js'

const appmodule = angular.module('myapp',[])

// controllers
appmodule.controller('TestCtrl', TestCtrl)
appmodule.service('NameService', NameService)

// <test></test>
appmodule.component('test', TestComponent)


export default appmodule;