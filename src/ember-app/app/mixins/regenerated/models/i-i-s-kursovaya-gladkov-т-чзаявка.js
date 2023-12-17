import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  наименДетали: DS.attr('string'),
  номерДетали: DS.attr('number'),
  цена: DS.attr('number'),
  cПРМатериалы: DS.belongsTo('i-i-s-kursovaya-gladkov-c-п-р-материалы', { inverse: null, async: false }),
  докЗаявка: DS.belongsTo('i-i-s-kursovaya-gladkov-док-заявка', { inverse: 'тЧзаявка', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-т-чзаявка.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименДетали: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-т-чзаявка.validations.наименДетали.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерДетали: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-т-чзаявка.validations.номерДетали.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-т-чзаявка.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  cПРМатериалы: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-т-чзаявка.validations.cПРМатериалы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докЗаявка: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-т-чзаявка.validations.докЗаявка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧзаявкаE', 'i-i-s-kursovaya-gladkov-т-чзаявка', {
    количество: attr('Количество', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    наименДетали: attr('Наимен детали', { index: 2 }),
    номерДетали: attr('Номер детали', { index: 3 }),
    cПРМатериалы: belongsTo('i-i-s-kursovaya-gladkov-c-п-р-материалы', 'Материал', {
      наименование: attr('Материал', { index: 4, hidden: true })
    }, { index: -1, hidden: true })
  });
};
