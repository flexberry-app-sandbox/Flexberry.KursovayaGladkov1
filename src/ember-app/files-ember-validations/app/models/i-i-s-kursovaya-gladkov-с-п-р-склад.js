import {
  defineNamespace,
  defineProjections,
  Model as СПРСкладMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-с-п-р-склад';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СПРСкладMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
