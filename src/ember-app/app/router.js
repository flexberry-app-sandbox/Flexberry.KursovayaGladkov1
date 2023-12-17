import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-gladkov-c-п-р-материалы-l');
  this.route('i-i-s-kursovaya-gladkov-c-п-р-материалы-e',
  { path: 'i-i-s-kursovaya-gladkov-c-п-р-материалы-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-c-п-р-материалы-e.new',
  { path: 'i-i-s-kursovaya-gladkov-c-п-р-материалы-e/new' });
  this.route('i-i-s-kursovaya-gladkov-док-заявка-l');
  this.route('i-i-s-kursovaya-gladkov-док-заявка-e',
  { path: 'i-i-s-kursovaya-gladkov-док-заявка-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-док-заявка-e.new',
  { path: 'i-i-s-kursovaya-gladkov-док-заявка-e/new' });
  this.route('i-i-s-kursovaya-gladkov-док-тех-карта-l');
  this.route('i-i-s-kursovaya-gladkov-док-тех-карта-e',
  { path: 'i-i-s-kursovaya-gladkov-док-тех-карта-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-док-тех-карта-e.new',
  { path: 'i-i-s-kursovaya-gladkov-док-тех-карта-e/new' });
  this.route('i-i-s-kursovaya-gladkov-док-чертеж-l');
  this.route('i-i-s-kursovaya-gladkov-док-чертеж-e',
  { path: 'i-i-s-kursovaya-gladkov-док-чертеж-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-док-чертеж-e.new',
  { path: 'i-i-s-kursovaya-gladkov-док-чертеж-e/new' });
  this.route('i-i-s-kursovaya-gladkov-с-п-р-клиент-l');
  this.route('i-i-s-kursovaya-gladkov-с-п-р-клиент-e',
  { path: 'i-i-s-kursovaya-gladkov-с-п-р-клиент-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-с-п-р-клиент-e.new',
  { path: 'i-i-s-kursovaya-gladkov-с-п-р-клиент-e/new' });
  this.route('i-i-s-kursovaya-gladkov-с-п-р-склад-l');
  this.route('i-i-s-kursovaya-gladkov-с-п-р-склад-e',
  { path: 'i-i-s-kursovaya-gladkov-с-п-р-склад-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-с-п-р-склад-e.new',
  { path: 'i-i-s-kursovaya-gladkov-с-п-р-склад-e/new' });
  this.route('i-i-s-kursovaya-gladkov-с-п-роборуд-l');
  this.route('i-i-s-kursovaya-gladkov-с-п-роборуд-e',
  { path: 'i-i-s-kursovaya-gladkov-с-п-роборуд-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-с-п-роборуд-e.new',
  { path: 'i-i-s-kursovaya-gladkov-с-п-роборуд-e/new' });
  this.route('i-i-s-kursovaya-gladkov-состояние-l');
  this.route('i-i-s-kursovaya-gladkov-состояние-e',
  { path: 'i-i-s-kursovaya-gladkov-состояние-e/:id' });
  this.route('i-i-s-kursovaya-gladkov-состояние-e.new',
  { path: 'i-i-s-kursovaya-gladkov-состояние-e/new' });
});

export default Router;
