package Kursovaya_Gladkov.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Gladkov.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ДокТехКарта
 */
@Entity(name = "IISKursovaya_GladkovДокТехКарта")
@Table(schema = "public", name = "ДокТехКарта")
public class DokTexKarta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SPRoborud")
    @Convert("SPRoborud")
    @Column(name = "СПРоборуд", length = 16, unique = true, nullable = false)
    private UUID _sproborudid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SPRoborud", insertable = false, updatable = false)
    private SPRoborud sproborud;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokCHertezh")
    @Convert("DokCHertezh")
    @Column(name = "ДокЧертеж", length = 16, unique = true, nullable = false)
    private UUID _dokchertezhid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokCHertezh", insertable = false, updatable = false)
    private DokCHertezh dokchertezh;


    public DokTexKarta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}