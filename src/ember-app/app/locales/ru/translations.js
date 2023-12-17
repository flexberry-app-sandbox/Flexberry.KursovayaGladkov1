import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovaya_GladkovCПРМатериалыLForm from './forms/i-i-s-kursovaya-gladkov-c-п-р-материалы-l';
import IISKursovaya_GladkovДокЗаявкаLForm from './forms/i-i-s-kursovaya-gladkov-док-заявка-l';
import IISKursovaya_GladkovДокТехКартаLForm from './forms/i-i-s-kursovaya-gladkov-док-тех-карта-l';
import IISKursovaya_GladkovДокЧертежLForm from './forms/i-i-s-kursovaya-gladkov-док-чертеж-l';
import IISKursovaya_GladkovСПРКлиентLForm from './forms/i-i-s-kursovaya-gladkov-с-п-р-клиент-l';
import IISKursovaya_GladkovСПРСкладLForm from './forms/i-i-s-kursovaya-gladkov-с-п-р-склад-l';
import IISKursovaya_GladkovСПРоборудLForm from './forms/i-i-s-kursovaya-gladkov-с-п-роборуд-l';
import IISKursovaya_GladkovСостояниеLForm from './forms/i-i-s-kursovaya-gladkov-состояние-l';
import IISKursovaya_GladkovCПРМатериалыEForm from './forms/i-i-s-kursovaya-gladkov-c-п-р-материалы-e';
import IISKursovaya_GladkovДокЗаявкаEForm from './forms/i-i-s-kursovaya-gladkov-док-заявка-e';
import IISKursovaya_GladkovДокТехКартаEForm from './forms/i-i-s-kursovaya-gladkov-док-тех-карта-e';
import IISKursovaya_GladkovДокЧертежEForm from './forms/i-i-s-kursovaya-gladkov-док-чертеж-e';
import IISKursovaya_GladkovСПРКлиентEForm from './forms/i-i-s-kursovaya-gladkov-с-п-р-клиент-e';
import IISKursovaya_GladkovСПРСкладEForm from './forms/i-i-s-kursovaya-gladkov-с-п-р-склад-e';
import IISKursovaya_GladkovСПРоборудEForm from './forms/i-i-s-kursovaya-gladkov-с-п-роборуд-e';
import IISKursovaya_GladkovСостояниеEForm from './forms/i-i-s-kursovaya-gladkov-состояние-e';
import IISKursovaya_GladkovCПРМатериалыModel from './models/i-i-s-kursovaya-gladkov-c-п-р-материалы';
import IISKursovaya_GladkovДокЗаявкаModel from './models/i-i-s-kursovaya-gladkov-док-заявка';
import IISKursovaya_GladkovДокТехКартаModel from './models/i-i-s-kursovaya-gladkov-док-тех-карта';
import IISKursovaya_GladkovДокЧертежModel from './models/i-i-s-kursovaya-gladkov-док-чертеж';
import IISKursovaya_GladkovСПРКлиентModel from './models/i-i-s-kursovaya-gladkov-с-п-р-клиент';
import IISKursovaya_GladkovСПРСкладModel from './models/i-i-s-kursovaya-gladkov-с-п-р-склад';
import IISKursovaya_GladkovСПРоборудModel from './models/i-i-s-kursovaya-gladkov-с-п-роборуд';
import IISKursovaya_GladkovСостояниеModel from './models/i-i-s-kursovaya-gladkov-состояние';
import IISKursovaya_GladkovТЧзаявкаModel from './models/i-i-s-kursovaya-gladkov-т-чзаявка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-gladkov-c-п-р-материалы': IISKursovaya_GladkovCПРМатериалыModel,
    'i-i-s-kursovaya-gladkov-док-заявка': IISKursovaya_GladkovДокЗаявкаModel,
    'i-i-s-kursovaya-gladkov-док-тех-карта': IISKursovaya_GladkovДокТехКартаModel,
    'i-i-s-kursovaya-gladkov-док-чертеж': IISKursovaya_GladkovДокЧертежModel,
    'i-i-s-kursovaya-gladkov-с-п-р-клиент': IISKursovaya_GladkovСПРКлиентModel,
    'i-i-s-kursovaya-gladkov-с-п-р-склад': IISKursovaya_GladkovСПРСкладModel,
    'i-i-s-kursovaya-gladkov-с-п-роборуд': IISKursovaya_GladkovСПРоборудModel,
    'i-i-s-kursovaya-gladkov-состояние': IISKursovaya_GladkovСостояниеModel,
    'i-i-s-kursovaya-gladkov-т-чзаявка': IISKursovaya_GladkovТЧзаявкаModel
  },

  'application-name': 'Kursovaya_ gladkov',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya_ gladkov',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya_ gladkov',
          title: 'Kursovaya_ gladkov'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'kursovaya-gladkov': {
          caption: 'Kursovaya_Gladkov',
          title: 'Kursovaya_Gladkov',
          'i-i-s-kursovaya-gladkov-с-п-роборуд-l': {
            caption: 'С п роборуд',
            title: ''
          },
          'i-i-s-kursovaya-gladkov-с-п-р-клиент-l': {
            caption: 'С п р клиент',
            title: ''
          },
          'i-i-s-kursovaya-gladkov-c-п-р-материалы-l': {
            caption: 'C п р материалы',
            title: ''
          },
          'i-i-s-kursovaya-gladkov-состояние-l': {
            caption: 'Состояние',
            title: ''
          },
          'i-i-s-kursovaya-gladkov-док-заявка-l': {
            caption: 'Док заявка',
            title: ''
          },
          'i-i-s-kursovaya-gladkov-док-чертеж-l': {
            caption: 'Док чертеж',
            title: ''
          },
          'i-i-s-kursovaya-gladkov-с-п-р-склад-l': {
            caption: 'С п р склад',
            title: ''
          },
          'i-i-s-kursovaya-gladkov-док-тех-карта-l': {
            caption: 'Док тех карта',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya-gladkov-c-п-р-материалы-l': IISKursovaya_GladkovCПРМатериалыLForm,
    'i-i-s-kursovaya-gladkov-док-заявка-l': IISKursovaya_GladkovДокЗаявкаLForm,
    'i-i-s-kursovaya-gladkov-док-тех-карта-l': IISKursovaya_GladkovДокТехКартаLForm,
    'i-i-s-kursovaya-gladkov-док-чертеж-l': IISKursovaya_GladkovДокЧертежLForm,
    'i-i-s-kursovaya-gladkov-с-п-р-клиент-l': IISKursovaya_GladkovСПРКлиентLForm,
    'i-i-s-kursovaya-gladkov-с-п-р-склад-l': IISKursovaya_GladkovСПРСкладLForm,
    'i-i-s-kursovaya-gladkov-с-п-роборуд-l': IISKursovaya_GladkovСПРоборудLForm,
    'i-i-s-kursovaya-gladkov-состояние-l': IISKursovaya_GladkovСостояниеLForm,
    'i-i-s-kursovaya-gladkov-c-п-р-материалы-e': IISKursovaya_GladkovCПРМатериалыEForm,
    'i-i-s-kursovaya-gladkov-док-заявка-e': IISKursovaya_GladkovДокЗаявкаEForm,
    'i-i-s-kursovaya-gladkov-док-тех-карта-e': IISKursovaya_GladkovДокТехКартаEForm,
    'i-i-s-kursovaya-gladkov-док-чертеж-e': IISKursovaya_GladkovДокЧертежEForm,
    'i-i-s-kursovaya-gladkov-с-п-р-клиент-e': IISKursovaya_GladkovСПРКлиентEForm,
    'i-i-s-kursovaya-gladkov-с-п-р-склад-e': IISKursovaya_GladkovСПРСкладEForm,
    'i-i-s-kursovaya-gladkov-с-п-роборуд-e': IISKursovaya_GladkovСПРоборудEForm,
    'i-i-s-kursovaya-gladkov-состояние-e': IISKursovaya_GladkovСостояниеEForm
  },

});

export default translations;
