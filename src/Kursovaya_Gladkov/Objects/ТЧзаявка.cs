﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya_Gladkov
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Т чзаявка.
    /// </summary>
    // *** Start programmer edit section *** (ТЧзаявка CustomAttributes)

    // *** End programmer edit section *** (ТЧзаявка CustomAttributes)
    [AutoAltered()]
    [Caption("Т чзаявка")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧзаявкаE", new string[] {
            "Количество as \'Количество\'",
            "Цена as \'Цена\'",
            "НаименДетали as \'Наимен детали\'",
            "НомерДетали as \'Номер детали\'",
            "CПРМатериалы.Наименование as \'Материал\'"}, Hidden=new string[] {
            "CПРМатериалы.Наименование"})]
    public class ТЧзаявка : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private int fЦена;
        
        private string fНаименДетали;
        
        private int fНомерДетали;
        
        private IIS.Kursovaya_Gladkov.CПРМатериалы fCПРМатериалы;
        
        private IIS.Kursovaya_Gladkov.ДокЗаявка fДокЗаявка;
        
        // *** Start programmer edit section *** (ТЧзаявка CustomMembers)

        // *** End programmer edit section *** (ТЧзаявка CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (ТЧзаявка.Количество CustomAttributes)

        // *** End programmer edit section *** (ТЧзаявка.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (ТЧзаявка.Количество Get start)

                // *** End programmer edit section *** (ТЧзаявка.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (ТЧзаявка.Количество Get end)

                // *** End programmer edit section *** (ТЧзаявка.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧзаявка.Количество Set start)

                // *** End programmer edit section *** (ТЧзаявка.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (ТЧзаявка.Количество Set end)

                // *** End programmer edit section *** (ТЧзаявка.Количество Set end)
            }
        }
        
        /// <summary>
        /// НаименДетали.
        /// </summary>
        // *** Start programmer edit section *** (ТЧзаявка.НаименДетали CustomAttributes)

        // *** End programmer edit section *** (ТЧзаявка.НаименДетали CustomAttributes)
        [StrLen(255)]
        public virtual string НаименДетали
        {
            get
            {
                // *** Start programmer edit section *** (ТЧзаявка.НаименДетали Get start)

                // *** End programmer edit section *** (ТЧзаявка.НаименДетали Get start)
                string result = this.fНаименДетали;
                // *** Start programmer edit section *** (ТЧзаявка.НаименДетали Get end)

                // *** End programmer edit section *** (ТЧзаявка.НаименДетали Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧзаявка.НаименДетали Set start)

                // *** End programmer edit section *** (ТЧзаявка.НаименДетали Set start)
                this.fНаименДетали = value;
                // *** Start programmer edit section *** (ТЧзаявка.НаименДетали Set end)

                // *** End programmer edit section *** (ТЧзаявка.НаименДетали Set end)
            }
        }
        
        /// <summary>
        /// НомерДетали.
        /// </summary>
        // *** Start programmer edit section *** (ТЧзаявка.НомерДетали CustomAttributes)

        // *** End programmer edit section *** (ТЧзаявка.НомерДетали CustomAttributes)
        public virtual int НомерДетали
        {
            get
            {
                // *** Start programmer edit section *** (ТЧзаявка.НомерДетали Get start)

                // *** End programmer edit section *** (ТЧзаявка.НомерДетали Get start)
                int result = this.fНомерДетали;
                // *** Start programmer edit section *** (ТЧзаявка.НомерДетали Get end)

                // *** End programmer edit section *** (ТЧзаявка.НомерДетали Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧзаявка.НомерДетали Set start)

                // *** End programmer edit section *** (ТЧзаявка.НомерДетали Set start)
                this.fНомерДетали = value;
                // *** Start programmer edit section *** (ТЧзаявка.НомерДетали Set end)

                // *** End programmer edit section *** (ТЧзаявка.НомерДетали Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (ТЧзаявка.Цена CustomAttributes)

        // *** End programmer edit section *** (ТЧзаявка.Цена CustomAttributes)
        public virtual int Цена
        {
            get
            {
                // *** Start programmer edit section *** (ТЧзаявка.Цена Get start)

                // *** End programmer edit section *** (ТЧзаявка.Цена Get start)
                int result = this.fЦена;
                // *** Start programmer edit section *** (ТЧзаявка.Цена Get end)

                // *** End programmer edit section *** (ТЧзаявка.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧзаявка.Цена Set start)

                // *** End programmer edit section *** (ТЧзаявка.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (ТЧзаявка.Цена Set end)

                // *** End programmer edit section *** (ТЧзаявка.Цена Set end)
            }
        }
        
        /// <summary>
        /// Т чзаявка.
        /// </summary>
        // *** Start programmer edit section *** (ТЧзаявка.CПРМатериалы CustomAttributes)

        // *** End programmer edit section *** (ТЧзаявка.CПРМатериалы CustomAttributes)
        [PropertyStorage(new string[] {
                "CПРМатериалы"})]
        [NotNull()]
        public virtual IIS.Kursovaya_Gladkov.CПРМатериалы CПРМатериалы
        {
            get
            {
                // *** Start programmer edit section *** (ТЧзаявка.CПРМатериалы Get start)

                // *** End programmer edit section *** (ТЧзаявка.CПРМатериалы Get start)
                IIS.Kursovaya_Gladkov.CПРМатериалы result = this.fCПРМатериалы;
                // *** Start programmer edit section *** (ТЧзаявка.CПРМатериалы Get end)

                // *** End programmer edit section *** (ТЧзаявка.CПРМатериалы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧзаявка.CПРМатериалы Set start)

                // *** End programmer edit section *** (ТЧзаявка.CПРМатериалы Set start)
                this.fCПРМатериалы = value;
                // *** Start programmer edit section *** (ТЧзаявка.CПРМатериалы Set end)

                // *** End programmer edit section *** (ТЧзаявка.CПРМатериалы Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Kursovaya_Gladkov.ДокЗаявка.
        /// </summary>
        // *** Start programmer edit section *** (ТЧзаявка.ДокЗаявка CustomAttributes)

        // *** End programmer edit section *** (ТЧзаявка.ДокЗаявка CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ДокЗаявка"})]
        public virtual IIS.Kursovaya_Gladkov.ДокЗаявка ДокЗаявка
        {
            get
            {
                // *** Start programmer edit section *** (ТЧзаявка.ДокЗаявка Get start)

                // *** End programmer edit section *** (ТЧзаявка.ДокЗаявка Get start)
                IIS.Kursovaya_Gladkov.ДокЗаявка result = this.fДокЗаявка;
                // *** Start programmer edit section *** (ТЧзаявка.ДокЗаявка Get end)

                // *** End programmer edit section *** (ТЧзаявка.ДокЗаявка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧзаявка.ДокЗаявка Set start)

                // *** End programmer edit section *** (ТЧзаявка.ДокЗаявка Set start)
                this.fДокЗаявка = value;
                // *** Start programmer edit section *** (ТЧзаявка.ДокЗаявка Set end)

                // *** End programmer edit section *** (ТЧзаявка.ДокЗаявка Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧзаявкаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧзаявкаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧзаявкаE", typeof(IIS.Kursovaya_Gladkov.ТЧзаявка));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧзаявка.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧзаявка CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧзаявка CustomAttributes)
    public class DetailArrayOfТЧзаявка : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Kursovaya_Gladkov.DetailArrayOfТЧзаявка members)

        // *** End programmer edit section *** (IIS.Kursovaya_Gladkov.DetailArrayOfТЧзаявка members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧзаявка by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧзаявка.
        /// </summary>
        public DetailArrayOfТЧзаявка(IIS.Kursovaya_Gladkov.ДокЗаявка fДокЗаявка) : 
                base(typeof(ТЧзаявка), ((ICSSoft.STORMNET.DataObject)(fДокЗаявка)))
        {
        }
        
        public IIS.Kursovaya_Gladkov.ТЧзаявка this[int index]
        {
            get
            {
                return ((IIS.Kursovaya_Gladkov.ТЧзаявка)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Kursovaya_Gladkov.ТЧзаявка dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
