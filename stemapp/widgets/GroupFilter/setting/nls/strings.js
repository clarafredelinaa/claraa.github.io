define({
  root: ({
    configText : "Define your filter groups below",
    labels : {
      groupName : "Group Name:",
      groupNameTip : "Provide a name for this filter group. It will be displayed in the drop-down of available filter groups.",
      groupDesc : "Description:",
      groupDescTip : "Provide a description for this filter group",
      groupOperator : "Preset Operator:",
      groupOperatorTip : "Option to predefine the operator for the filter. If no Preset Operator is selected, the filter will use the EQUALS operator.",
      groupDefault : "Preset Value:",
      groupDefaultTip : "Option to type a value or choose an existing value from a layer. Click the Search icon to browse layers.",
      sameLayerAppend : "When a layer is listed more than once:",
      sameLayerConjunc : "Append Using:",
      caseSearch: "Perform a case sensitive search: ",
      headerTextHelp: "Provide text to display above filter selection"
    },
    buttons : {
      addNewGroup : "Add a New Group",
      addNewGroupTip : "Add a new filter group",
      addLayer : "Add Layer",
      addLayerTip : "Add a layer to the filter group"
    },
    inputs : {
      groupName : "Filter group name",
      groupDesc : "Description for the group",
      groupDefault : "Enter predefined value",
      sameLayerAny: "Match any expression",
      sameLayerAll: "Match all expressions",
      simpleMode : "Start in simple view",
      simpleModeTip : "Simplify the widget interface. When checked, the operator drop-down list and add criteria buttons are hidden.",
      webmapAppendModeAny : "Append any expressions to existing map filter",
      webmapAppendModeAll : "Append all expressions to existing map filter",
      webmapAppendModeTip : "Option to append filter groups to existing filters in the web map",
      persistOnClose: "Persist filters after the widget is closed",
      selectGroup: "Select a Group to Filter",
      hideDropDown: "Hide header and filter for 1 group",
      hideDropDownTip: "Hide the header and drop-down if only 1 filter group is configured",
      optionsMode : "Hide the widget options",
      optionsModeTip : "Option to expose additional widget settings. If checked, saving and loading predefined filters and persisting the filter after the widget is closed are hidden from the interface.",
      optionOR : "OR",
      optionAND : "AND",
      optionEQUAL : "EQUALS",
      optionNOTEQUAL : "NOT EQUAL",
      optionGREATERTHAN : "GREATER THAN",
      optionGREATERTHANEQUAL : "GREATER THAN OR EQUAL",
      optionLESSTHAN : "LESS THAN",
      optionLESSTHANEQUAL : "LESS THAN OR EQUAL",
      optionSTART : "BEGINS WITH",
      optionEND : "ENDS WITH",
      optionLIKE : "CONTAINS",
      optionLIKESPECIFIC: "CONTAINS SPECIFIC VALUES",
      optionNOTLIKESPECIFIC: "DOES NOT CONTAIN SPECIFIC VALUES",
      optionNOTLIKE : "DOES NOT CONTAIN",
      optionONORBEFORE: "IS ON OR BEFORE",
      optionONORAFTER: "IS ON OR AFTER",
      optionNONE : "NONE"
    },
    tables : {
      layer : "Layers",
      layerTip: "Name of the layer as defined in the map.",
      field : "Fields",
      fieldTip: "Field that the layer will be filtered on.",
      value : "Use Value",
      valueTip : "Option to use the drop-down list values from the layer. If no layer uses this parameter, a plain text box will be presented to the user.",
      zoomTo : "Zoom to result",
      zoomTip: "Option to zoom to the extent of the features after the filter is applied",
      action : "Delete",
      actionTip: "Remove layer from the filter set."
    },
    popupHeader : {
      label : "Pick a Preset Value"
    },
    errors : {
      noGroups : "You need at least one group.",
      noGroupName : "One or more group names are missing.",
      noDuplicates : "One or more group names are duplicated.",
      noRows : "You need at least one row in the table.",
      noLayers : "You have no layers in your map."
    },
    picker : {
      description: "Find the preset value for this group.",
      layer : "Select a Layer",
      layerTip : "Name of the layer as defined in the web map.",
      field : "Select a Field",
      fieldTip : "Field that the preset value will be set from.",
      value : "Select a Value",
      valueTip : "Value that will be the default of the widget."
    }
  }),
  "ar": 1,
  "bg": 1,
  "bs": 1,
  "ca": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "hr": 1,
  "hu": 1,
  "it": 1,
  "id": 1,
  "ja": 1,
  "ko": 1,
  "lt": 1,
  "lv": 1,
  "nb": 1,
  "nl": 1,
  "pl": 1,
  "pt-br": 1,
  "pt-pt": 1,
  "ro": 1,
  "ru": 1,
  "sk": 1,
  "sl": 1,
  "sr": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "uk": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});
