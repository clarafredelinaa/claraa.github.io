define({
  "configText": "Задайте фильтр групп ниже",
  "labels": {
    "groupName": "Имя группы:",
    "groupNameTip": "Укажите имя для этой группы фильтров. Оно будет отображаться в раскрывающемся списке доступных групп фильтров.",
    "groupDesc": "Описание:",
    "groupDescTip": "Укажите описание для этой группы фильтров.",
    "groupOperator": "Предустановленный оператор:",
    "groupOperatorTip": "Опция предопределения оператора для фильтра. Если Предустановленный оператор не выбран, фильтр будет использовать оператор EQUALS.",
    "groupDefault": "Предустановленное значение:",
    "groupDefaultTip": "Опция ввода значения или выбора существующего значения из слоя. Щелкните значок Поиска, чтобы перейти к слоям.",
    "sameLayerAppend": "Если слой перечислен более одного раза:",
    "sameLayerConjunc": "Присоединить с помощью:",
    "caseSearch": "Выполнить поиск, чувствительный к регистру: ",
    "headerTextHelp": "Введите текст для отображения над выборкой фильтра"
  },
  "buttons": {
    "addNewGroup": "Добавить новую группу",
    "addNewGroupTip": "Добавьте новую группу фильтров",
    "addLayer": "Добавить слой",
    "addLayerTip": "Добавьте слой в группу фильтров"
  },
  "inputs": {
    "groupName": "Имя группы фильтров",
    "groupDesc": "Описание группы",
    "groupDefault": "Введите предустановленное значение",
    "sameLayerAny": "Сопоставить какое-либо выражение",
    "sameLayerAll": "Соответствие всем выражениям",
    "simpleMode": "Начать в простом виде",
    "simpleModeTip": "Упростить интерфейс виджета. Если включено, раскрывающийся список операторов и кнопки добавления критериев будут скрыты.",
    "webmapAppendModeAny": "Присоединить какое-либо выражение к существующему фильтру карты",
    "webmapAppendModeAll": "Присоединить все выражения к существующему фильтру карты",
    "webmapAppendModeTip": "Опция добавления групп фильтров к существующим фильтрам на веб-карте",
    "persistOnClose": "Сохранить фильтры после закрытия виджета",
    "selectGroup": "Выберите группу для фильтрации",
    "hideDropDown": "Скрыть заголовок и фильтр для 1 группы",
    "hideDropDownTip": "Скрыть заголовок и раскрывающийся список, если настроена только 1 группа фильтров",
    "optionsMode": "Скрыть опции виджета",
    "optionsModeTip": "Опция показа дополнительных настроек виджета. Если отмечено, сохранение и загрузка предустановленных фильтров, а также сохранение фильтра после закрытия виджета убираются из интерфейса.",
    "optionOR": "OR",
    "optionAND": "AND",
    "optionEQUAL": "РАВНО",
    "optionNOTEQUAL": "НЕ РАВНО",
    "optionGREATERTHAN": "БОЛЬШЕ ЧЕМ",
    "optionGREATERTHANEQUAL": "МЕНЬШЕ ЧЕМ ИЛИ РАВНО",
    "optionLESSTHAN": "МЕНЬШЕ ЧЕМ",
    "optionLESSTHANEQUAL": "МЕНЬШЕ ЧЕМ ИЛИ РАВНО",
    "optionSTART": "НАЧИНАЕТСЯ С",
    "optionEND": "ОКАНЧИВАЕТСЯ НА",
    "optionLIKE": "СОДЕРЖИТ",
    "optionLIKESPECIFIC": "СОДЕРЖИТ ОПРЕДЕЛЕННЫЕ ЗНАЧЕНИЯ",
    "optionNOTLIKESPECIFIC": "НЕ СОДЕРЖИТ ОПРЕДЕЛЕННЫЕ ЗНАЧЕНИЯ",
    "optionNOTLIKE": "НЕ СОДЕРЖИТ",
    "optionONORBEFORE": "СООТВЕТСТВУЕТ ИЛИ ДО",
    "optionONORAFTER": "СООТВЕТСТВУЕТ ИЛИ ПОСЛЕ",
    "optionNONE": "НЕТ"
  },
  "tables": {
    "layer": "Слои",
    "layerTip": "Имя слоя, как определено на карте.",
    "field": "Поля",
    "fieldTip": "Поле, по которому будет фильтроваться слой.",
    "value": "Использовать значение",
    "valueTip": "Опция для использования ниспадающего списка значений слоя. Если ни один слой не использует этот параметр, пользователь увидит простое текстовое поле.",
    "zoomTo": "Приблизить к результату",
    "zoomTip": "Опция приближения к экстенту объектов после применения фильтра",
    "action": "Удалить",
    "actionTip": "Удалить слой из набора фильтров."
  },
  "popupHeader": {
    "label": "Отбор Предустановленного значения"
  },
  "errors": {
    "noGroups": "Необходима, как минимум, одна группа.",
    "noGroupName": "Имя одной или нескольких групп отсутствует.",
    "noDuplicates": "Имя одной или нескольких групп повторяются.",
    "noRows": "Необходима, как минимум, одна строка в таблице.",
    "noLayers": "На карте нет слоев."
  },
  "picker": {
    "description": "Найдите предустановленное значение для этой группы.",
    "layer": "Выберите слой",
    "layerTip": "Имя слоя, как определено на веб-карте.",
    "field": "Выберите поле",
    "fieldTip": "Поле, по которому будет задаваться имеющееся значение.",
    "value": "Выберите значение",
    "valueTip": "Значение, которое будет использоваться в виджете по умолчанию."
  }
});