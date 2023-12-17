import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерЧертежа: DS.attr('number'),
  утверждение: DS.attr('boolean'),
  тЧзаявка: DS.belongsTo('i-i-s-kursovaya-gladkov-т-чзаявка', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-док-чертеж.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЧертежа: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-док-чертеж.validations.номерЧертежа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  утверждение: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-док-чертеж.validations.утверждение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тЧзаявка: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-док-чертеж.validations.тЧзаявка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокЧертежE', 'i-i-s-kursovaya-gladkov-док-чертеж', {
    дата: attr('Дата', { index: 0 }),
    номерЧертежа: attr('Номер чертежа', { index: 1 }),
    утверждение: attr('Утверждение', { index: 2 }),
    тЧзаявка: belongsTo('i-i-s-kursovaya-gladkov-т-чзаявка', '', {
      номерДетали: attr('', { index: 3 }),
      наименДетали: attr('Наимен детали', { index: 4, hidden: true }),
      cПРМатериалы: belongsTo('i-i-s-kursovaya-gladkov-c-п-р-материалы', '', {
        наименование: attr('', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ДокЧертежL', 'i-i-s-kursovaya-gladkov-док-чертеж', {
    дата: attr('Дата', { index: 0 }),
    номерЧертежа: attr('Номер чертежа', { index: 1 }),
    утверждение: attr('Утверждение', { index: 2 }),
    тЧзаявка: belongsTo('i-i-s-kursovaya-gladkov-т-чзаявка', 'Номер детали', {
      номерДетали: attr('Номер детали', { index: 3 }),
      наименДетали: attr('Наименование детали', { index: 4 }),
      cПРМатериалы: belongsTo('i-i-s-kursovaya-gladkov-c-п-р-материалы', '', {
        наименование: attr('Материал', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
