import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  банк: DS.attr('string'),
  иНН: DS.attr('number'),
  наименование: DS.attr('string'),
  почта: DS.attr('string'),
  расСчет: DS.attr('number'),
  телефон: DS.attr('number'),
  фИООтветст: DS.attr('string')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-с-п-р-клиент.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  банк: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-с-п-р-клиент.validations.банк.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-с-п-р-клиент.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-с-п-р-клиент.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-с-п-р-клиент.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расСчет: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-с-п-р-клиент.validations.расСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-с-п-р-клиент.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИООтветст: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-с-п-р-клиент.validations.фИООтветст.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СПРКлиентE', 'i-i-s-kursovaya-gladkov-с-п-р-клиент', {
    расСчет: attr('Рас счет', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    iD: attr('ID', { index: 2 }),
    наименование: attr('Наименование', { index: 3 }),
    фИООтветст: attr('Ф и о ответст', { index: 4 }),
    иНН: attr('ИНН', { index: 5 }),
    почта: attr('Почта', { index: 6 }),
    банк: attr('Банк', { index: 7 })
  });

  modelClass.defineProjection('СПРКлиентL', 'i-i-s-kursovaya-gladkov-с-п-р-клиент', {
    расСчет: attr('Рас счет', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    iD: attr('ID', { index: 2 }),
    наименование: attr('Наименование', { index: 3 }),
    фИООтветст: attr('Ф и о ответст', { index: 4 }),
    иНН: attr('ИНН', { index: 5 }),
    почта: attr('Почта', { index: 6 }),
    банк: attr('Банк', { index: 7 })
  });
};
