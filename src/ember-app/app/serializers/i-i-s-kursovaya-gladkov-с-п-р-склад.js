import { Serializer as СПРСкладSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-gladkov-с-п-р-склад';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СПРСкладSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
