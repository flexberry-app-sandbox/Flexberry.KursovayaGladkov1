package Kursovaya_Gladkov.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Gladkov.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ДокЗаявка
 */
@Entity(name = "IISKursovaya_GladkovДокЗаявка")
@Table(schema = "public", name = "ДокЗаявка")
public class DokZayavka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЗаявки")
    private Integer номерзаявки;

    @Column(name = "ДатаЗаявки")
    private Date датазаявки;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SPRKlient")
    @Convert("SPRKlient")
    @Column(name = "СПРКлиент", length = 16, unique = true, nullable = false)
    private UUID _sprklientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SPRKlient", insertable = false, updatable = false)
    private SPRKlient sprklient;

    @OneToMany(mappedBy = "dokzayavka", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHzayavka> tchzayavkas;


    public DokZayavka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЗаявки() {
      return номерзаявки;
    }

    public void setНомерЗаявки(Integer номерзаявки) {
      this.номерзаявки = номерзаявки;
    }

    public Date getДатаЗаявки() {
      return датазаявки;
    }

    public void setДатаЗаявки(Date датазаявки) {
      this.датазаявки = датазаявки;
    }


}