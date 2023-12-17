import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СПРКлиентMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-с-п-р-клиент';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СПРКлиентMixin, Validations, {
});

defineProjections(Model);

export default Model;
