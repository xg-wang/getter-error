import Component from '@glimmer/component';
import { get } from '@ember/object';

export default class GetterComponent extends Component {
  get error() {
    return get(this.notExist, 'dummyKey');
  }
}
