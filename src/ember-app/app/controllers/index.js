import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya-gladkov.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya-gladkov.title'),
          children: [{
            link: 'i-i-s-kursovaya-gladkov-с-п-роборуд-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-с-п-роборуд-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-с-п-роборуд-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kursovaya-gladkov-с-п-р-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-с-п-р-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-с-п-р-клиент-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-kursovaya-gladkov-c-п-р-материалы-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-c-п-р-материалы-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-c-п-р-материалы-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-kursovaya-gladkov-состояние-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-состояние-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-состояние-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-kursovaya-gladkov-док-заявка-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-док-заявка-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-док-заявка-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-kursovaya-gladkov-док-чертеж-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-док-чертеж-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-док-чертеж-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-kursovaya-gladkov-с-п-р-склад-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-с-п-р-склад-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-с-п-р-склад-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-kursovaya-gladkov-док-тех-карта-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-док-тех-карта-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov.i-i-s-kursovaya-gladkov-док-тех-карта-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})