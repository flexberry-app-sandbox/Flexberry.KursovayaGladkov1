import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаявки: DS.attr('date'),
  номерЗаявки: DS.attr('number'),
  сПРКлиент: DS.belongsTo('i-i-s-kursovaya-gladkov-с-п-р-клиент', { inverse: null, async: false }),
  тЧзаявка: DS.hasMany('i-i-s-kursovaya-gladkov-т-чзаявка', { inverse: 'докЗаявка', async: false })
});

export let ValidationRules = {
  датаЗаявки: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-док-заявка.validations.датаЗаявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЗаявки: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-док-заявка.validations.номерЗаявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сПРКлиент: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-док-заявка.validations.сПРКлиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧзаявка: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-док-заявка.validations.тЧзаявка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокЗаявкаE', 'i-i-s-kursovaya-gladkov-док-заявка', {
    номерЗаявки: attr('Номер заявки', { index: 0 }),
    датаЗаявки: attr('Дата заявки', { index: 1 }),
    сПРКлиент: belongsTo('i-i-s-kursovaya-gladkov-с-п-р-клиент', 'Наименование', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: -1, hidden: true }),
    тЧзаявка: hasMany('i-i-s-kursovaya-gladkov-т-чзаявка', 'Т чзаявка', {
      количество: attr('Количество', { index: 0 }),
      цена: attr('Цена', { index: 1 }),
      наименДетали: attr('Наимен детали', { index: 2 }),
      номерДетали: attr('Номер детали', { index: 3 }),
      cПРМатериалы: belongsTo('i-i-s-kursovaya-gladkov-c-п-р-материалы', 'Материал', {
        наименование: attr('Материал', { index: 4, hidden: true })
      }, { index: -1, hidden: true })
    })
  });

  modelClass.defineProjection('ДокЗаявкаL', 'i-i-s-kursovaya-gladkov-док-заявка', {
    номерЗаявки: attr('Номер заявки', { index: 0 }),
    датаЗаявки: attr('Дата заявки', { index: 1 }),
    сПРКлиент: belongsTo('i-i-s-kursovaya-gladkov-с-п-р-клиент', 'Клиент', {
      наименование: attr('Клиент', { index: 2 })
    }, { index: -1, hidden: true }),
    тЧзаявка: hasMany('i-i-s-kursovaya-gladkov-т-чзаявка', 'Детали заявки', {
      количество: attr('Количество', { index: 0 }),
      цена: attr('Цена', { index: 1 }),
      наименДетали: attr('Наимен детали', { index: 2 }),
      номерДетали: attr('Номер детали', { index: 3 }),
      cПРМатериалы: belongsTo('i-i-s-kursovaya-gladkov-c-п-р-материалы', 'Материал', {
        наименование: attr('Материал', { index: 4, hidden: true })
      }, { index: -1, hidden: true })
    })
  });
};
