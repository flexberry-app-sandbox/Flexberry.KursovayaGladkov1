import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as CПРМатериалыMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-gladkov-c-п-р-материалы';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(CПРМатериалыMixin, Validations, {
});

defineProjections(Model);

export default Model;
