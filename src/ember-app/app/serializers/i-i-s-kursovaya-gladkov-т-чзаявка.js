import { Serializer as ТЧзаявкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-gladkov-т-чзаявка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧзаявкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
