import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокЗаявкаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-док-заявка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокЗаявкаMixin, Validations, {
});

defineProjections(Model);

export default Model;
