import { Serializer as ДокТехКартаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-gladkov-док-тех-карта';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокТехКартаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
