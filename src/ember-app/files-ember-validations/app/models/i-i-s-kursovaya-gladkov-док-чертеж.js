import {
  defineNamespace,
  defineProjections,
  Model as ДокЧертежMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-док-чертеж';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокЧертежMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
