package Kursovaya_Gladkov.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Gladkov.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧзаявка
 */
@Entity(name = "IISKursovaya_GladkovТЧзаявка")
@Table(schema = "public", name = "ТЧзаявка")
public class TCHzayavka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "Цена")
    private Integer цена;

    @Column(name = "НаименДетали")
    private String наимендетали;

    @Column(name = "НомерДетали")
    private Integer номердетали;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "CPRMaterialy")
    @Convert("CPRMaterialy")
    @Column(name = "CПРМатериалы", length = 16, unique = true, nullable = false)
    private UUID _cprmaterialyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "CPRMaterialy", insertable = false, updatable = false)
    private CPRMaterialy cprmaterialy;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokZayavka")
    @Convert("DokZayavka")
    @Column(name = "ДокЗаявка", length = 16, unique = true, nullable = false)
    private UUID _dokzayavkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokZayavka", insertable = false, updatable = false)
    private DokZayavka dokzayavka;


    public TCHzayavka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public Integer getЦена() {
      return цена;
    }

    public void setЦена(Integer цена) {
      this.цена = цена;
    }

    public String getНаименДетали() {
      return наимендетали;
    }

    public void setНаименДетали(String наимендетали) {
      this.наимендетали = наимендетали;
    }

    public Integer getНомерДетали() {
      return номердетали;
    }

    public void setНомерДетали(Integer номердетали) {
      this.номердетали = номердетали;
    }


}