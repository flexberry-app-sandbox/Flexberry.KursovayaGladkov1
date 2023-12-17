import { Serializer as ДокЧертежSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-gladkov-док-чертеж';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокЧертежSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
