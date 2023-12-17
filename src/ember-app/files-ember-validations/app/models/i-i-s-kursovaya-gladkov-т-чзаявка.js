import {
  defineNamespace,
  defineProjections,
  Model as ТЧзаявкаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-т-чзаявка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧзаявкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
