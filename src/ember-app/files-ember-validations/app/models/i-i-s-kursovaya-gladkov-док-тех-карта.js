import {
  defineNamespace,
  defineProjections,
  Model as ДокТехКартаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-док-тех-карта';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокТехКартаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
