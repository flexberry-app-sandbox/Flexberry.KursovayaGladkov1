import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  наименование: DS.attr('string'),
  сПРСклад: DS.belongsTo('i-i-s-kursovaya-gladkov-с-п-р-склад', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-c-п-р-материалы.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-c-п-р-материалы.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сПРСклад: {
    descriptionKey: 'models.i-i-s-kursovaya-gladkov-c-п-р-материалы.validations.сПРСклад.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CПРМатериалыE', 'i-i-s-kursovaya-gladkov-c-п-р-материалы', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    сПРСклад: belongsTo('i-i-s-kursovaya-gladkov-с-п-р-склад', 'С п р склад', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('CПРМатериалыL', 'i-i-s-kursovaya-gladkov-c-п-р-материалы', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    сПРСклад: belongsTo('i-i-s-kursovaya-gladkov-с-п-р-склад', 'Склад', {
      наименование: attr('Склад', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
