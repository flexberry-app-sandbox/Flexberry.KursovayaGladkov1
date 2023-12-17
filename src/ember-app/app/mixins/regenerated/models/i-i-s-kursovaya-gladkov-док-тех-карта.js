import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  докЧертеж: DS.belongsTo('i-i-s-kursovaya-gladkov-док-чертеж', { inverse: null, async: false }),
  сПРоборуд: DS.belongsTo('i-i-s-kursovaya-gladkov-с-п-роборуд', { inverse: null, async: false })
});

export let ValidationRules = {
  докЧертеж: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-док-тех-карта.validations.докЧертеж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сПРоборуд: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-док-тех-карта.validations.сПРоборуд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокТехКартаE', 'i-i-s-kursovaya-gladkov-док-тех-карта', {
    
  });

  modelClass.defineProjection('ДокТехКартаL', 'i-i-s-kursovaya-gladkov-док-тех-карта', {
    
  });
};
