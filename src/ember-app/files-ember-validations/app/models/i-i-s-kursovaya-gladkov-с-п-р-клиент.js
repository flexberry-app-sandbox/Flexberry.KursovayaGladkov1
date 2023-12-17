import {
  defineNamespace,
  defineProjections,
  Model as СПРКлиентMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-с-п-р-клиент';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СПРКлиентMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
