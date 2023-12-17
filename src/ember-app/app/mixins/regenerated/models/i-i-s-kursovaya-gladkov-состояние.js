import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СостояниеE', 'i-i-s-kursovaya-gladkov-состояние', {
    
  });

  modelClass.defineProjection('СостояниеL', 'i-i-s-kursovaya-gladkov-состояние', {
    
  });
};
