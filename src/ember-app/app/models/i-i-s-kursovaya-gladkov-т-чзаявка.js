import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧзаявкаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-т-чзаявка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧзаявкаMixin, Validations, {
});

defineProjections(Model);

export default Model;
