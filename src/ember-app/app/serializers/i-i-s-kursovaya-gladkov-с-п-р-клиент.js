import { Serializer as СПРКлиентSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-gladkov-с-п-р-клиент';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СПРКлиентSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
