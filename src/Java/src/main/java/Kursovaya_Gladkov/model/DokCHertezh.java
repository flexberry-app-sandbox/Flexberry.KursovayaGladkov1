package Kursovaya_Gladkov.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Gladkov.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ДокЧертеж
 */
@Entity(name = "IISKursovaya_GladkovДокЧертеж")
@Table(schema = "public", name = "ДокЧертеж")
public class DokCHertezh {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "НомерЧертежа")
    private Integer номерчертежа;

    @Column(name = "Утверждение")
    private Boolean утверждение;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TCHzayavka")
    @Convert("TCHzayavka")
    @Column(name = "ТЧзаявка", length = 16, unique = true, nullable = false)
    private UUID _tchzayavkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TCHzayavka", insertable = false, updatable = false)
    private TCHzayavka tchzayavka;


    public DokCHertezh() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getНомерЧертежа() {
      return номерчертежа;
    }

    public void setНомерЧертежа(Integer номерчертежа) {
      this.номерчертежа = номерчертежа;
    }

    public Boolean getУтверждение() {
      return утверждение;
    }

    public void setУтверждение(Boolean утверждение) {
      this.утверждение = утверждение;
    }


}