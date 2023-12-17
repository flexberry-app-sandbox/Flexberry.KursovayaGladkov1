import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СПРоборудMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-с-п-роборуд';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СПРоборудMixin, Validations, {
});

defineProjections(Model);

export default Model;
