import { Serializer as СПРоборудSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-gladkov-с-п-роборуд';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СПРоборудSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
