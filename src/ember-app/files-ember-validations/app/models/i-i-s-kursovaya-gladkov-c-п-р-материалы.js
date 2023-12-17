import {
  defineNamespace,
  defineProjections,
  Model as CПРМатериалыMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-c-п-р-материалы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CПРМатериалыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
