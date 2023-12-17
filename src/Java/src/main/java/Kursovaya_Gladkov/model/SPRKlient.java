package Kursovaya_Gladkov.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Gladkov.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: СПРКлиент
 */
@Entity(name = "IISKursovaya_GladkovСПРКлиент")
@Table(schema = "public", name = "СПРКлиент")
public class SPRKlient {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "РасСчет")
    private Integer рассчет;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "ФИООтветст")
    private String фиоответст;

    @Column(name = "ИНН")
    private Integer инн;

    @Column(name = "Почта")
    private String почта;

    @Column(name = "Банк")
    private String банк;


    public SPRKlient() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getРасСчет() {
      return рассчет;
    }

    public void setРасСчет(Integer рассчет) {
      this.рассчет = рассчет;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getФИООтветст() {
      return фиоответст;
    }

    public void setФИООтветст(String фиоответст) {
      this.фиоответст = фиоответст;
    }

    public Integer getИНН() {
      return инн;
    }

    public void setИНН(Integer инн) {
      this.инн = инн;
    }

    public String getПочта() {
      return почта;
    }

    public void setПочта(String почта) {
      this.почта = почта;
    }

    public String getБанк() {
      return банк;
    }

    public void setБанк(String банк) {
      this.банк = банк;
    }


}