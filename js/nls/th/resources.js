﻿define(
   ({
    map: {
      error: "ไม่สามารถสร้างแผนที่ได้"
    },
    onlineStatus: {
      offline: "คุณกำลังทำงานแบบออฟไลน์ การส่งแบบฟอร์มจะถูกบันทึกไว้ที่เครื่องจนกว่าการเชื่อมต่อกับเซิร์ฟเวอร์จะสามารถทำได้",
      reconnecting: "กำลังเชื่อมต่อใหม่&hellip;",
      pending: "${total} อยู่ในระหว่างการแก้ไข โดยจะส่งการแก้ไปด้เมื่อการเชื่อมต่อเน็ตเวิร์กกลับมาใช้งานได้"
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "องค์กรของฉัน",
          onlineLabel: "ArcGIS Online",
          contentLabel: "เนื้อหาของฉัน",
          favoritesLabel: "รายการโปรดของฉัน"
        },
        title: "เลือกเว็บแมพ",
        searchTitle: "ค้นหา",
        ok: "ตกลง",
        cancel: "ยกเลิก",
        placeholder: "ใส่เงื่อนไขการค้นหา"
      },
      groupdlg: {
        items: {
          organizationLabel: "องค์กรของฉัน",
          onlineLabel: "ArcGIS Online",
          contentLabel: "เนื้อหาของฉัน",
          favoritesLabel: "รายการโปรดของฉัน"
        },
        title: "เลือกกลุ่ม",
        searchTitle: "ค้นหา",
        ok: "ตกลง",
        cancel: "ยกเลิก",
        placeholder: "ใส่เงื่อนไขการค้นหา"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "ลิงค์สำหรับ  GeoForm อยู่ที่นี่"
      }
    },
    user: {
      all: "ทั้งหมด",
      mgrs: "หน่วยอ้างอิงทางทหาร MGRS",
      usng: "หน่วย USNG",
      utm: "UTM",
      utm_northing: "ทิศเหนือ",
      utm_easting: "ทิศตะวันออก",
      utm_zone_number: "เลขประจำโซน",
      selectLayerTabText: "${formSection} เลือกฟอร์ม",
      geoFormGeneralTabText: "${formSection} ใส่ข้อมูล",
      locationInformationText: "${formSection} เลือกตำแหน่ง",
      submitInformationText: "${formSection} ใส่ข้อความลงในแบบฟอร์มให้สมบูรณ์",
      submitInstructions: "เพิ่มข้อมูล",
      myLocationText: "ตำแหน่งปัจจุบัน",
      locationDescriptionForMoreThanOneOption: "ระบุพื้นที่ที่ต้องการโดยกดหรือเลื่อนแผนที่ หรือใช้ตัวเลือกใดตัวเลือกหนึ่งต่อไปนี้",
      locationDescriptionForOneOption: "ระบุพื้นที่ที่ต้องการโดยกดหรือเลื่อนแผนที่ หรือใช้ตัวเลือก ต่อไปนี้",
      locationDescriptionForNoOption: "ระบุพื้นที่ที่ต้องการโดยกดหรือเลื่อนแผนที่",
      addressText: "ค้นหา",
      geographic: "ละ/ลอง",
      locationTabText: "ตำแหน่ง",
      locationPopupTitle: "ตำแหน่ง",
      submitButtonText: "ส่ง",
      submitButtonTextLoading: "กำลังส่ง;",
      formValidationMessageAlertText: "ต้องการฟิลด์ตามรายการ ดังต่อไปนี้:",
      selectLocation: "กรุณาเลือกพื้นที่ที่ต้องการ",
      emptylatitudeAlertMessage: "กรุณากรอก ${openLink}ละติจูด${closeLink} พิกัด",
      emptylongitudeAlertMessage: "กรุณากรอก ${openLink}ลองจิจูด${closeLink} พิกัด",
      shareUserTitleMessage: "ขอบคุณสำหรับความเอื้อเฟื้อ!",
      entrySubmitted: "สิ่งที่คุณกรอกเข้ามาอยู่ในแผนที่แล้ว",
      shareThisForm: "แชร์แบบฟอร์มนี้",
      shareUserTextMessage: "แจ้งให้ผู้อื่นทราบ เพื่อให้ช่วยเหลือ ด้วยตัวเลือกดังต่อไปนี้",
      addAttachmentFailedMessage: "ไม่สามารถเพิ่มไฟล์แนบไปยังชั้นข้อมูลได้",
      addFeatureFailedMessage: "ไม่สามารถเพิ่มฟีเจอร์ไปยังชั้นข้อมูลได้",
      noLayerConfiguredMessage: "เกิดข้อผิดพลาดขึ้นระหว่างการโหลด หรือค้นชั้นข้อมูลที่สามารถแกไขได้ ในระหว่างการแสดงแบบฟอร์มและเริ่มการรับข้อมูบ ให้เพิ่มชั้นข้อมูลที่สามารถแก้ไขได้เข้ามาในเว็บแผนที่",
      placeholderLatitude: "ละติจูด (Y)",
      placeholderLongitude: "ลองจิจูด (X)",
      latitude: "ละติจูด",
      longitude: "ลองจิจูด",
      findMyLocation: "ระบุตำแหน่งของฉัน",
      finding: "หาตำแหน่ง;",
      backToTop: "กลับขึ้นไปด้านบน",
      addressSearchText: "การส่งข้อมูลของคุณจะแสดงขึ้นที่นี่ คุณสามารถลากหมุดไปยังตำแหน่งที่ถูกต้อง",
      shareModalFormText: "แบบฟอร์มลิงก์",
      close: "ปิด",
      locationNotFound: "ไม่พบตำแหน่ง",
      setLocation: "กำหนดตำแหน่ง",
      find: "ค้นหาที่อยู่หรือสถานที่",
      attachment: "เอกสารแนบ",
      toggleDropdown: "สลับแบบเลื่อนลง",
      invalidString: "โปรดกรอกข้อมูลให้ถูกต้อง",
      invalidSmallNumber: "โปรดกรอกข้อมูลให้ถูกต้อง ${openStrong}ตัวเลขจำนวนเต็ม${closeStrong} ค่าระหว่าง -32768 ถึง32767",
      invalidNumber: "กรุณาใส่ค่าที่ถูกต้อง ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.",
      invalidFloat: "กรุณาใส่ค่าที่ถูกต้อง ${openStrong}floating point${closeStrong} value.",
      invalidDouble: "กรุณาใส่ค่าที่ถูกต้อง ${openStrong}double${closeStrong} value.",
      invalidLatLong: "กรุณาใส่ค่าที่ถูกต้อง latitude and longitude coordinates.",
      invalidUTM: "กรุณาใส่ค่าที่ถูกต้อง UTM coordinates.",
      invalidUSNG: "กรุณาใส่ค่าที่ถูกต้อง USNG coordinates.",
      invalidMGRS: "กรุณาใส่ค่าที่ถูกต้อง MGRS coordinates.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "เลือก&hellip;",
      applyEditsFailedMessage: "ข้อมูลที่กรอกไม่สามารถส่งไปได้ กรุณาลองอีกครั้ง",
      requiredFields: "ฟิลด์ต่อไปนี้จำเป็นต้องใช้ โปรดกรอกข้อมูลให้ถูกต้อง",
      requiredField: "(จำเป็นต้องใช้)",
      error: "ข้อผิดพลาด",
      textRangeHintMessage: "${openStrong}เปรย:${closeStrong} ค่่าต่ำที่สุด ${minValue} และค่าสูงที่สุด ${maxValue}",
      dateRangeHintMessage: "${openStrong}เปรย:${closeStrong} วันขั้นต่ำ ${minValue} และวันสูงสุด ${maxValue}",
      remainingCharactersHintMessage: "${value} ตัวอักษรคงเหลือ",
      mapFullScreen: "แสดงผลเต็มหน้าจอ",
      mapRestore: "เรียกเก็บที่เดิม",
      filterSelectEmptyText: "เลือก",
      invalidLayerMessage: "ไม่มีชั้นข้อมูลแบบฟอร์มนี้อยู่ กรุณาตั้งค่าแอพพลิเคชั่นและเลือกชั้นข้อมูล",
      selectedLayerText: "ทั้งหมด",
      fileUploadStatus: "สถานะการอัพโหลดไฟล์",
      uploadingBadge: "&nbsp;Uploading&hellip;",
      successBadge: "&nbsp;อัพโหลด",
      retryBadge: "ลองใหม่",
      errorBadge: "อัพโหลดผิดพลาด&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "ไฟล์ที่แนบมาใหญ่เกินไป",
      exceededFileCountError: "เกินจำนวนสูงสุดที่อนุญาตให้แนบไฟล์ได้",
      selectFileTitle: "เลือกไฟล์",
      btnSelectFileText: "เลือกไฟล์",
      btnViewSubmissions: "ดูการส่ง"
    },
    builder: {
      gettingStarted: "เริ่มต้นทำงาน",
      dateSettings: "กำหนดวันที่",
      hiddenDateField: "ซ่อนฟิลด์วันที่",
      preventPastDates: "ป้องกันวันที่ผ่านมา",
      preventFutureDates: "ป้องกันวันที่ยังไม่ถึง",
      useCurrentDate: "กำหนดฟิลด์ด้วยวันที่ และเวลานี้",
      configure: "การตั้งค่า",
      configureField: "กำหนดฟิลด์ \'${fieldName}\'",
      invalidUser: "ขออภัย คุณไม่ได้สิทธิในการดูรายการนี้",
      invalidWebmapSelectionAlert: "เว็บแมพที่เลือกไว้ไม่มีชั้นข้อมูลที่สามารถนำไปใช้งานได้ โปรดเพิ่มชั้นข้อมูลฟีเจอร์ที่สามารถแก้ไขได้ไปยังเว็บแมพของคุณ เพื่อดำเนินการต่อ",
      invalidWebmapSelectionAlert2: "สำหรับข้อมูลเพิ่มเติมโปรดดูที่ ${OpenLink} ฟีเจอร์เซอร์วิสคืออะไร ${closeLink}",
      selectFieldsText: "เลือกแบบฟอร์มของฟิลด์",
      selectThemeText: "เลือกรูปแบบฟอร์ม",
      setViewerText: "กำหนดมุมมอง",
      introText: "เริ่ม",
      webmapText: "เว็บแมพ",
      layerText: "ชั้นข้อมูล",
      detailsText: "รายละเอียด",
      fieldsText: "ฟิลด์",
      styleText: "สไตล์",
      viewerText: "ผู้ดู",
      optionText: "ตัวเลือก",
      previewText: "พรีวิว",
      publishText: "เผยแพร่",
      optionsApplicationText: "ตัวเลือก",
      titleText: "Builder",
      descriptionText: "GeoForm is a configurable template for form-based data editing of a ${link1}Feature Service${closeLink}. โปรแกรมนี้ช่วยให้ผู้ใช้สามารถป้อนข้อมูลผ่านทางแบบฟอร์มแทนแผนที่ของป๊อปอัพในขณะที่ใช้ประโยชน์จากพลังของ ${link2} เว็บแผนที่${closeLink} และบริการคุณสมบัติที่สามารถแก้ไขได้ ใช้ขั้นตอนต่อไปนี้เพื่อปรับแต่งและปรับใช้ GeoForm ของคุณ",
      btnPreviousText: "ก่อนหน้า",
      btnNextText: "ต่อไป",
      webmapTabTitleText: "เลือกเว็บแผนที่",
      viewWebmap: "ดูเว็บแมพ",
      webmapDetailsText: "เว็บแม็พที่เลือกคือ ${webMapTitleLink}${webMapTitle}${closeLink}  เพื่อเลือกเว็บแม็พอื่น กรรุณาคลิกที่ปุ่ม  'เลือกเว็บแม็พ'",
      btnSelectWebmapText: "เลือกเว็บแมพ",
      btnSelectWebmapTextLoading: "กำลังโหลด;",
      layerTabTitleText: "เลือกชั้นข้อมูลที่แก้ไขได้",
      selectLayerLabelText: "ชั้นข้อมูล",
      selectLayerDefaultOptionText: "เลือกชั้นข้อมูล",
      enableBasemapToggle: "แสดงการสลับแผนที่ฐาน",
      enableBasemapToggleDescription: "คุณสามารถกำหนด GeoForm ให้แสดง/ซ่อนแผนที่ฐานสลับกันได้",
      defaultBasemap: "เปิดปิดแผนที่ฐาน",
      secondaryBasemap: "แผนที่ฐานเริ่มต้น",
      detailsTabTitleText: "แบบฟอร์มรายละเอียด",
      detailTitleLabelText: "ชื่อ",
      detailLogoLabelText: "รูปโลโก้",
      descriptionLabelText: "คู่มือการใชง้านและรายละเอียด",
      fieldDescriptionLabelText: "ตัวอัษร (ตัวเลือก)",
      fieldDescriptionHelpText: "กรอกรายละเอียดสั้นๆ หรือคำแนะนำในการใช้งานในฟิลด์นี้",
      fieldHintHelpText: "ข้อความในตำแหน่งนี้สำหรับฟิลด์",
      fieldTabFieldHeaderText: "ฟิลด์",
      fieldTabLabelHeaderText: "ตัวอักษร",
      fieldTabDisplayTypeHeaderText: "แสดงเป็น",
      fieldTabOrderColumnText: "สั่ง",
      fieldTabVisibleColumnText: "เปิดการใช้งาน",
      displayFieldText: "แสดงฟิลด์",
      selectMenuOption: "เลือกเมนู",
      selectRadioOption: "ปุ่มวิทยุ",
      selectTextOption: "ข้อความ",
      selectDateOption: "เลือกวันที่",
      selectRangeOption: "ควบคุมการสัมผัส",
      selectCheckboxOption: "กล่องเช็ครายการ",
      selectMailOption: "อีเมล์",
      selectUrlOption: "URL",
      selectTextAreaOption: "พื้นที่ใส่ตัวอักษร",
      previewApplicationText: "ดูตัวอย่างแอพพลิเคชั่น",
      saveApplicationText: "บันทึกแอพพลิเคชั่น",
      saveText: "บันทึก",
      toggleNavigationText: "เปลี่ยนการนำทาง",
      formPlaceholderText: "แบบฟอร์มของฉัน",
      shareBuilderInProgressTitleMessage: "กำลังเผยแพร่ GeoForm",
      shareBuilderProgressBarMessage: "โปรดรอสักครู่...",
      shareBuilderTitleMessage: "บันทึกไอเท็มสำเร็จ!",
      shareBuilderTextMessage: "คุณสามารถเริ่มเก็บรวบรวมข้อมูลโดยการแชร์ร่วมกับผู้อื่น",
      shareModalFormText: "แบบฟอร์มลิงก์",
      shareBuilderSuccess: "GeoForm ของคุณได้อัพเดทและเผยแพร่แล้ว!",
      geoformTitleText: "Geo Form",
      layerTabText: "ชั้นข้อมูลนี้ GeoForm จะใช้ในการสร้างแบบฟอร์ม โดยชั้นข้อมูลต้องเป็นฟีเจอร์เซอร์วิส ที่มีความสามารถในการแก้ไขข้อมูลได้ และมีการเปิดสิทธิการเข้าถึงให้ผู้ใช้ของคุณ ถ้าเลือกชั้นข้อมูลทั้งหมด ผู้ใช้จะสามารถเลือกได้ว่าจะส่งฟอร์มเข้าชั้นข้อมูลใด",
      detailsTabText: "ใช้แบบฟอร์มรายละเอียดตามกล่องด้านล่างในการปรับแต่งชื่อเรื่อง เพิ่มโลโก้ และใส่คำบรรยายสั้นๆ สำหรับผู้ใช้งาน GeoForm ของคุณ",
      fieldsTabText: "คุณสามารถเลือกได้ว่าฟิลด์ที่จะปรากฏให้ผู้ชม ข้อมูล GeoForm ของคุณแก้ไขตัวอักษรที่พวกเขาจะเห็นและเพิ่มคำอธิบายสั้น ๆ เพื่อช่วยในการป้อนข้อมูล",
      styleTabText: "ปรับแต่งรูปแบบ GeoForm ของคุณ โดยใช้ธีมเหล่านี้ตามความชอบของคุณ",
      viewerTabText: "กำหนดตัวเลือกสำหรับแสดงการส่งข้อมูลที่เก็บได้จาก GeoForm.",
      publishTabText: "หากคุณปรับแต่ง GeoForm ของคุณเสร็จ บันทึกการสมัครและเริ่มต้นการใช้งานร่วมกันกับผู้ชมของคุณ คุณสามารถกลับไปสร้างและดำเนินการในการปรับแต่งตามความคิดเห็นที่ได้รับ",
      headerSizeLabel: "ขนาดของส่วนบน",
      smallHeader: "ใช้ส่วนต้น",
      bigHeader: "ใช้ส่วนบนที่มีขนาดใหญ่",
      pushpinText: "ปักหมุด",
      doneButtonText: "จัดเก็บและออกจากระบบ",
      fieldTabPlaceHolderHeaderText: "คำเปรย (ตัวเลือก)",
      enableAttachmentLabelText: "${openStrong}เปิดใช้งานไฟล์แนบ${closeStrong}",
      enableAttachmentLabelHint: "คุณสามารถเปิด / ปิดการใช้สิ่งที่แนบมาที่นี่",
      attachmentIsRequiredLabelText: "${openStrong}ต้องการไฟล์แนบ${closeStrong}",
      attachmentIsRequiredLabelHint: "หากจำเป็นให้ผู้ใช้สามารถต้องป้อนสิ่งที่แนบมา",
      attachmentLabelText: "แนบปุ่มตัวหนังสือ",
      attachmentLabelHint: "ข้อความนี้จแสดงด้านข้างของปุ่ม Attachment คุณสามารถใช้พื้นที่นี้ในการอธิบายสิ่งที่ผู้ตอบแบบสอบถามควรส่งเข้ามา เช่น รูปภาพ ไฟล์วีดีโอ เอกสาร หรืออื่นๆ และประเภทของไฟล์ที่คุณต้องการ เช่น .jpeg, .png, .docx, .pdf เป็นต้น รวมไปถึงคำแนะนำอื่นๆที่ต้องการ",
      attachmentDescription: "รายละเอียดสิ่งที่แนมา",
      attachmentHint: "ถ้าจำเป็นคุณสามารถเพิ่มคำแนะนำเพิ่มเติมได้ที่นี่",
      jumbotronDescription: "ใช้หัวข้อด้วยอักษรขนาดใหญ่ หรือขนาดเล็กในแบบฟอร์ม ถ้าใช้ขนาดใหญ่จะทำให้เห็นหัวข้อนั้นได้ชัดเจน  แต่จะใช้พื้นที่ในหน้าจอแสดงผลมากด้วยเช่นกัน",
      shareGeoformText: "ปุ่มแบ่งบันข้อมูลให้โซเชียลมีเดีย",
      shareDescription: "ปุ่มโซเชียลมีเดีย ทำให้ผู้ใช้ของคุณสามารถแบ่งบัน GeoForm ออกไปได้ง่ายๆ เมื่อเขาส่งข้อมูลแล้ว",
      defaultMapExtent: "ค่าขนาดแผนที่เริ่มต้น",
      defaultMapExtentDescription: "แผนที่จะตั้งค่าในระดับเริ่มต้นในเว็บแมพของคุณหลังจากการส่ง - สามารถใช้งานนี้ได้ตลอดเวลา",
      pushpinOptionsDescription: "เลือกจากความหลากหลายของสีสำหรับหมุดแผนที่ ก็ควรจะแตกต่างจากสัญลักษณ์แผนที่เพื่อช่วยให้ผู้ใช้นำส่งของพวกเขาบนแผนที่",
      selectLocationText: "เลือกที่ตั้งโดย",
      myLocationText: "ตำแหน่งของชั้น",
      searchText: "ค้นหา",
      coordinatesText: "พิกัดละติจูดและลองจิจูด",
      usng: "พิกัด USNG",
      mgrs: "พิกัด MGRS",
      utm: "พิกัด UTM",
      selectLocationSDescription: "อนุญาตให้ผู้ใช้งานเลือกที่ตั้งโดยใช้วิธีการเหล่านี้",
      dragTooltipText: "ลากฟิลด์ที่คุณต้องการให้แสดง",
      showHideLayerText: "แสดงชั้นข้อมูล",
      showHideLayerHelpText: "คุณสามารถกำหนดให้ GeoForm แสดง/ซ่อน ชั้นข้อมูล โดยตัวเลือกนี้จะกำหนดได้ในแต่ละชั้นข้อมูล",
      labelHelpMessage: "ตัวอักษร",
      placeHolderHintMessage: "ตัวอักษรใบ้",
      placeHolderHelpMessage: "ตัวอักษรช่วยเหลือ",
      selectTextOptionValue: "เลือกตัวกรอง",
      disableLogo: "ปิดการใช้งานโลโก้",
      disableLogoDescription: "ณสามารถกำหนดค่า GeoForm เพื่อแสดง / ซ่อน Logo ในส่วนบนของฟอร์ม",
      locateOnLoadText: "ค้นหาตำแหน่งการโหลด",
      locateOnLoadDescription: "คุณสามารถกำหนดค่า GeoForm ที่จะใช้ตำแหน่งปัจจุบันในการโหลด",
      selectLayerFieldTabText: "เลือกชั้นข้อมูล",
      allLayerSelectOptionText: "ชั้นข้อมูลทั้งหมด",
      disableViewer: "ปิดการใช้งานหน้าต่างแสดงผล",
      disableViewerDescription: "คุณสามารถกำหนดให้ GeoForm ปิด/เปิดวิวมุมมองได้",
      displayFieldHintText: "ฟิลด์แสดงผลที่เลือกจะแสดงในมุมมองเป็นชื่อฟอร์ม"
    },
    viewer: {
      geocoderCancelText: "ยกเลิก",
      viewMapTabText: "แผนที่",
      sortHeaderText: "จัดเรียงตาม:",
      geocoderPlaceholderText: "รหัสไปรษณีย์ ชื่อเมือง เป็นต้น",
      noSearchResult: "ไม่พบผลลัพธ์",
      recordsTabTooltip: "ดูการส่ง",
      legendTabTooltip: "คำอธิบาย",
      aboutUsTabTooltip: "เกี่ยวกับเรา",
      mapTabTooltip: "แผนที่",
      btnDescendingText: "เรียงจากมากไปน้อย",
      btnAscendingText: "เรียงจากน้อยไปมาก",
      geometryUnavailableErrorMessage: "มีข้อผิดพลาดในการค้นหาจีโอเมทรีของฟีเจอร์",
      infoPopupOffErrorMessage: "ไม่มีข้อมูลเพื่อใช้แสดง",
      btnLoadMoreText: "โหลดเพิ่ม",
      unavailableTitleText: "ไม่มีชื่อ",
      unavailableConfigMessage: "ไม่สามารถโหลดได้",
      share: "แชร์",
      viewReportsTabText: "รายงาน",
      viewLegendTabText: "คำอธิบาย",
      viewAboutusTabText: "เกี่ยวกับ",
      btnSubmitReportText: "ส่งรายงาน",
      appLoadingFailedMessage: "พบข้อผิดพลาดระหว่างการโหลดวิวมุมมอง"
    }
  })
);