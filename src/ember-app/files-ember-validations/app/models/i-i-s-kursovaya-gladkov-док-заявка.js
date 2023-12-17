import {
  defineNamespace,
  defineProjections,
  Model as ДокЗаявкаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-док-заявка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокЗаявкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
