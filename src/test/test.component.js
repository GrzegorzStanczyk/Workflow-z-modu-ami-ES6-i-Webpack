import {TestCtrl} from './test.controller.js';
import template from './test.controller.html'

export const TestComponent = {
    template: template, // require('./test.controller.html'),
    controller: TestCtrl,
    //controllerAs: '$ctrl'
}