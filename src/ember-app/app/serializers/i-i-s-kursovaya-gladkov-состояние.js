import { Serializer as СостояниеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-gladkov-состояние';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СостояниеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
