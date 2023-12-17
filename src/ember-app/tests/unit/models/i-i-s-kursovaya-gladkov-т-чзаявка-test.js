import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-gladkov-т-чзаявка', 'Unit | Model | i-i-s-kursovaya-gladkov-т-чзаявка', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya-gladkov-c-п-р-материалы',
    'model:i-i-s-kursovaya-gladkov-док-заявка',
    'model:i-i-s-kursovaya-gladkov-док-тех-карта',
    'model:i-i-s-kursovaya-gladkov-док-чертеж',
    'model:i-i-s-kursovaya-gladkov-с-п-р-клиент',
    'model:i-i-s-kursovaya-gladkov-с-п-р-склад',
    'model:i-i-s-kursovaya-gladkov-с-п-роборуд',
    'model:i-i-s-kursovaya-gladkov-состояние',
    'model:i-i-s-kursovaya-gladkov-т-чзаявка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
