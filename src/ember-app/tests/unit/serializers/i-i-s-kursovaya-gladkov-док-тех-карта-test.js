import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-gladkov-док-тех-карта', 'Unit | Serializer | i-i-s-kursovaya-gladkov-док-тех-карта', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-gladkov-док-тех-карта',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
