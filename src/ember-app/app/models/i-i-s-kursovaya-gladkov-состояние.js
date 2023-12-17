import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СостояниеMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-состояние';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СостояниеMixin, Validations, {
});

defineProjections(Model);

export default Model;
