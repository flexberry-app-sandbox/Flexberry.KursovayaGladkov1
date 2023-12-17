import { Serializer as ДокЗаявкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-gladkov-док-заявка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокЗаявкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
