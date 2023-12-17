import {
  defineNamespace,
  defineProjections,
  Model as СПРоборудMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-с-п-роборуд';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СПРоборудMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
