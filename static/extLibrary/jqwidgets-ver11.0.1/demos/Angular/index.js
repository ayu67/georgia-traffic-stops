const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const tsConfigJsonPath = path.join(path.resolve(__dirname), 'tsconfig.app.json');
const angularJsonPath = path.join(path.resolve(__dirname), 'angular.json');

const demos = [
  'bargauge/addandremovevalues', 'bargauge/autochangevalue', 'bargauge/createComponent', 'bargauge/customtooltips', 'bargauge/defaultfunctionality', 'bargauge/fluidsize', 'bargauge/negativevalues', 'bargauge/sequentialgrowth', 'bargauge/updatevalues', 'bulletchart/defaultfunctionality', 'bulletchart/fluidsize', 'bulletchart/labelsformatting', 'bulletchart/multipleranges', 'bulletchart/negativevalues', 'bulletchart/rangesstyling', 'bulletchart/righttoleftlayout', 'bulletchart/settings', 'bulletchart/verticalbulletchart', 'buttongroup/defaultfunctionality', 'buttongroup/templates', 'buttons/defaultfunctionality', 'buttons/fluidsize', 'buttons/imageposition', 'buttons/images', 'buttons/righttoleftlayout', 'buttons/templates', 'buttons/textposition', 'calendar/defaultfunctionality', 'calendar/disabled', 'calendar/displayweekendsstyle', 'calendar/events', 'calendar/firstdayoftheweek', 'calendar/fluidsize', 'calendar/hideothermonthdays', 'calendar/keyboardnavigation', 'calendar/localization', 'calendar/rangeselection', 'calendar/restrictdaterange', 'calendar/restricteddates', 'calendar/righttoleftlayout', 'calendar/showweekoftheyear', 'calendar/specialdates', 'calendar/twowaydatabinding', 'chart/100stackedareaseries', 'chart/100stackedcolumns', 'chart/100stackedlineseries', 'chart/alternatingbackgroundcolor', 'chart/areaseries', 'chart/areasplineseries', 'chart/axiscustomoffsets', 'chart/axiscustomoffsetsandcolorbands', 'chart/axisoffsettovalue', 'chart/axisorientation', 'chart/axisposition', 'chart/axissettings', 'chart/barseries', 'chart/bublechart', 'chart/candlestickchart', 'chart/chartannotations', 'chart/chartcrosshairs', 'chart/chartevents', 'chart/chartprinting', 'chart/chartrangeselectorevents', 'chart/chartwithgrid', 'chart/chartwithtabs', 'chart/colorbands', 'chart/colorbandsxaxis', 'chart/columnlocaldata', 'chart/columnrange', 'chart/columnseries', 'chart/columnseriesspacing', 'chart/columnserieswithlabels', 'chart/columnserieswithmissingvalues', 'chart/columnseriewithconditionalcolors', 'chart/columnsrange', 'chart/columnswithbase10logarithmicaxis', 'chart/columnswithlogarithmicaxis', 'chart/createComponent', 'chart/customdrawing', 'chart/customstyling', 'chart/darkbackground', 'chart/dashboard', 'chart/datetimexaxisrangeselection', 'chart/donutlabels', 'chart/donutseries', 'chart/exporttoimage', 'chart/fluidsize', 'chart/funnelchart', 'chart/greyscaleseries', 'chart/gridlinesdashstyle', 'chart/intervalandsteps', 'chart/lineseries', 'chart/lineseriesmarkers', 'chart/lineseriewithconditionalcolors', 'chart/lineseriewithmissingpoints', 'chart/lineseriewithmultipledatasources', 'chart/liveupdates', 'chart/liveupdateseverysecond', 'chart/liveupdatesperformance', 'chart/logarithmicaxisbaseline', 'chart/logarithmicwaterfallseries', 'chart/logarithmicXaxis', 'chart/multipleseriestypes', 'chart/negativebarseries', 'chart/negativevalues', 'chart/nondatexaxisrangeselection', 'chart/ohlcchart', 'chart/partialpieseries', 'chart/partialpolarchart', 'chart/percentagestackedcolumns', 'chart/pieseries', 'chart/pieserieslegend', 'chart/polarseries', 'chart/polarseriesbands', 'chart/pyramidchart', 'chart/rigthtoleftlayout', 'chart/scatterchart', 'chart/sparklines', 'chart/spiderchart', 'chart/splinearea', 'chart/splineseries', 'chart/stackedandgroupedcolumnseries', 'chart/stackedareaseries', 'chart/stackedcolumns', 'chart/stackedcolumnseries', 'chart/stackedfunnelchart', 'chart/stackedlineseries', 'chart/stackedpyramidchart', 'chart/stackedwaterfallseries', 'chart/steplineseries', 'chart/textrotation', 'chart/textwrapping', 'chart/themes', 'chart/tooltipformatting', 'chart/waterfallseries', 'chart/waterfallwithmultipleseries', 'checkbox/defaultfunctionality', 'checkbox/twowaydatabinding', 'colorpicker/defaultfunctionality', 'colorpicker/settings', 'combobox/animation', 'combobox/bindingtojson', 'combobox/bindingtoremotedata', 'combobox/bindingtoxml', 'combobox/cascadingcomboboxes', 'combobox/categories', 'combobox/checkboxes', 'combobox/createComponent', 'combobox/customrendering', 'combobox/defaultfunctionality', 'combobox/dropdownhorizontalalignment', 'combobox/dropdownverticalalignment', 'combobox/events', 'combobox/fluidsize', 'combobox/keyboardnavigation', 'combobox/multiselect', 'combobox/righttoleftlayout', 'combobox/settings', 'combobox/templates', 'combobox/twowaydatabinding', 'complexinput/changeevent', 'complexinput/defaultfunctionality', 'complexinput/exponentialnotation', 'complexinput/fluidsize', 'complexinput/spinbuttons', 'complexinput/twowaydatabinding', 'complexinput/validation', 'datatable/advancedfiltering', 'datatable/aggregates', 'datatable/aggregatestemplate', 'datatable/celledit', 'datatable/columnalignment', 'datatable/columnformatting', 'datatable/columnreorder', 'datatable/columnresize', 'datatable/columnshierarchy', 'datatable/columntemplate', 'datatable/conditionalformatting', 'datatable/createComponent', 'datatable/csvdata', 'datatable/customeditors', 'datatable/dataexport', 'datatable/dataprinting', 'datatable/defaultfunctionality', 'datatable/dialog', 'datatable/filtering', 'datatable/filteringapi', 'datatable/fluidsize', 'datatable/grouping', 'datatable/groupingserverpaging', 'datatable/headertemplate', 'datatable/inlinerow', 'datatable/jsondata', 'datatable/keyboardnavigation', 'datatable/localdata', 'datatable/localization', 'datatable/lockrow', 'datatable/nestedtables', 'datatable/paging', 'datatable/pagingapi', 'datatable/pinnedfrozencolumn', 'datatable/remotedata', 'datatable/righttoleftlayout', 'datatable/rowdetails', 'datatable/rowselectionhover', 'datatable/rowtemplate', 'datatable/searchfield', 'datatable/separatetables', 'datatable/serverfiltering', 'datatable/serverpaging', 'datatable/serversorting', 'datatable/showorhidecolumn', 'datatable/sorting', 'datatable/sortingapi', 'datatable/tsvdata', 'datatable/validation', 'datatable/xmldata', 'datetimeinput/animation', 'datetimeinput/createcomponent', 'datetimeinput/datetime', 'datetimeinput/defaultfunctionality', 'datetimeinput/disabled', 'datetimeinput/dropdownhorizontalalignment', 'datetimeinput/dropdownverticalalignment', 'datetimeinput/events', 'datetimeinput/fluidsize', 'datetimeinput/formatdate', 'datetimeinput/keyboardnavigation', 'datetimeinput/localization', 'datetimeinput/rangeselection', 'datetimeinput/restrictdaterange', 'datetimeinput/righttoleftlayout', 'datetimeinput/templates', 'datetimeinput/timeinput', 'datetimeinput/twowaydatabinding', 'docking/defaultfunctionality', 'docking/events', 'docking/importlayout', 'docking/keyboardnavigation', 'docking/righttoleftlayout', 'docking/settings', 'dockinglayout/createcomponent', 'dockinglayout/defaultfunctionality', 'dockinglayout/fluidsize', 'dockinglayout/idelikelayout', 'dockinglayout/righttoleftlayout', 'dockinglayout/saveloadlayout', 'dragdrop/defaultfunctionality', 'dragdrop/events', 'draw/defaultfunctionality', 'dropdownbutton/defaultfunctionality', 'dropdownlist/animation', 'dropdownlist/autoopen', 'dropdownlist/bindingtojson', 'dropdownlist/bindingtoxml', 'dropdownlist/categories', 'dropdownlist/checkboxes', 'dropdownlist/createComponent', 'dropdownlist/customrendering', 'dropdownlist/defaultfunctionality', 'dropdownlist/dropdownhorizontalalignment', 'dropdownlist/dropdownverticalalignment', 'dropdownlist/events', 'dropdownlist/filtering', 'dropdownlist/fluidsize', 'dropdownlist/keyboardnavigation', 'dropdownlist/loaddatafromselect', 'dropdownlist/righttoleftlayout', 'dropdownlist/saveloadselectionusingcookies', 'dropdownlist/templates', 'dropdownlist/textwithicons', 'dropdownlist/twowaydatabinding', 'editor/customtools', 'editor/defaultfunctionality', 'editor/fluidsize', 'editor/importstyles', 'editor/linebreakconfig', 'editor/localization', 'editor/popupeditor', 'editor/printing', 'editor/righttoleftlayout', 'editor/toolbarposition', 'editor/toolscustomization', 'editor/toolsvisibility', 'editor/twowaydatabinding', 'expander/defaultfunctionality', 'expander/fluidsize', 'expander/loadingdataondemand', 'expander/righttoleftlayout', 'expander/toggleondoubleclick', 'fileupload/buttonsrendering', 'fileupload/defaultfunctionality', 'fileupload/events', 'fileupload/righttoleftlayout', 'fileupload/selectedfilesrendering', 'formattedinput/defaultfunctionality', 'formattedinput/events', 'formattedinput/exponentialnotation', 'formattedinput/fluidsize', 'formattedinput/keyboardnavigation', 'formattedinput/negativenumbers', 'formattedinput/righttoleftlayout', 'formattedinput/simpleinput', 'formattedinput/twowaydatabinding', 'formattedinput/uppercasehexadecimals', 'formattedinput/validation', 'gauge/defaultfunctionality', 'gauge/fluidsize', 'gauge/gaugesettings', 'gauge/gaugewithslider', 'gauge/lineargauge', 'grid/adaptivelayout', 'grid/addnewbottomrow', 'grid/addnewrow', 'grid/addremoveupdate', 'grid/aggregates', 'grid/aggregatesgrouping', 'grid/aggregatesrenderer', 'grid/autorowheight', 'grid/autosizecolumns', 'grid/bindingtoarray', 'grid/bindingtocsv', 'grid/bindingtojsarray', 'grid/bindingtojson', 'grid/bindingtojsonstring', 'grid/bindingtojsonusingphp', 'grid/bindingtoobservablearray', 'grid/bindingtoremotedata', 'grid/bindingtotsv', 'grid/bindingtoxml', 'grid/cascadingcomboboxes', 'grid/cellsselection', 'grid/cellsstyling', 'grid/checkboxcolumn', 'grid/checkboxselection', 'grid/columnshierarchy', 'grid/columnsreorder', 'grid/columnsresize', 'grid/columntemplate', 'grid/columntooltips', 'grid/computedcolumn', 'grid/contextmenu', 'grid/createComponent', 'grid/createremoveupdate', 'grid/customaggregates', 'grid/customcolumneditor', 'grid/customcomboboxcolumn', 'grid/customdropdownlistcolumn', 'grid/customfiltermenu', 'grid/customizededitors', 'grid/customkeyboardnavigation', 'grid/customlistitemswithkeyvalue', 'grid/customroweditor', 'grid/customsorting', 'grid/dataexport', 'grid/dataprinting', 'grid/daterangefilter', 'grid/defaultfunctionality', 'grid/deferedscrolling', 'grid/deferedscrollingonalargedataset', 'grid/disableeditingofrows', 'grid/dragdrop', 'grid/dropdowngrid', 'grid/dynamiccolumns', 'grid/editing', 'grid/editmodes', 'grid/everpresentrowwithcolumns', 'grid/everpresentrowwithcustomwidgets', 'grid/excellikefilter', 'grid/filterconditions', 'grid/filtering', 'grid/filtermenutypes', 'grid/filterrow', 'grid/filterrowcustomlistitems', 'grid/fluidsize', 'grid/foreignkeycolumn', 'grid/fullrowedit', 'grid/gridinjqxtabs', 'grid/grouping', 'grid/groupingaggregates', 'grid/groupingwithpager', 'grid/imagecolumn', 'grid/initialfilter', 'grid/initialpageandpagesize', 'grid/keyboardnavigation', 'grid/keysvaluescolumn', 'grid/largedataset', 'grid/lines', 'grid/loadfromtable', 'grid/localization', 'grid/localizedaddnewrow', 'grid/manycolumns', 'grid/masterdetails', 'grid/nestedgrids', 'grid/pagermodes', 'grid/paging', 'grid/percentagewidthforcolumns', 'grid/pinnedfrozencolumns', 'grid/popupediting', 'grid/positioning', 'grid/refreshdata', 'grid/righttoleftlayout', 'grid/rowdetails', 'grid/roweditwitheverpresentrow', 'grid/rownumbercolumn', 'grid/rowselection', 'grid/showhidecolumns', 'grid/sorting', 'grid/spreadsheet', 'grid/statemaintenance', 'grid/statusbar', 'grid/textalignment', 'grid/togglesubrows', 'grid/toolbar', 'grid/updatingactionsatruntime', 'grid/validation', 'grid/virtualpaging', 'grid/virtualscrolling', 'grid/widgetcolumn', 'heatmap/calendarmode', 'heatmap/defaultfunctionality', 'heatmap/emptypoints', 'heatmap/inversedaxis', 'heatmap/legendplacement', 'heatmap/opposedaxis', 'heatmap/palettemode', 'heatmap/tooltiptemplate', 'input/autocomplete', 'input/bindingtojsondata', 'input/defaultfunctionality', 'input/fluidsize', 'input/inputgroup', 'input/multiplevalues', 'input/righttoleftlayout', 'input/twowaydatabinding', 'kanban/addremoveupdateitems', 'kanban/defaultfunctionality', 'kanban/disablecollapse', 'kanban/headertemplate', 'kanban/itemtemplate', 'kanban/kanbanediting', 'kanban/kanbanevents', 'kanban/kanbanfluidsize', 'kanban/multiplekanbans', 'kanban/righttoleftlayout', 'knob/circlepointer', 'knob/defaultfunctionality', 'knob/fluidsize', 'knob/infiniteknob', 'knob/knobprogressranges', 'knob/knobrotation', 'knob/knobwithcustomshape', 'knob/knobwithinput', 'knob/linepointer', 'knob/multiplearrowpointes', 'knob/multiplecirclepointers', 'knob/multipleknobs', 'knob/radialgradient', 'knob/semiknob', 'layout/dashboard', 'layout/defaultfunctionality', 'layout/fluidsize', 'layout/integrationwithotherwidgets', 'layout/righttoleftlayout', 'layout/saveloadlayout', 'listbox/bindingtoarray', 'listbox/bindingtojsondata', 'listbox/bindingtoxml', 'listbox/categories', 'listbox/checkboxes', 'listbox/customrendering', 'listbox/defaultfunctionality', 'listbox/dragdrop', 'listbox/events', 'listbox/filtering', 'listbox/fluidsize', 'listbox/herolist', 'listbox/itemsreorder', 'listbox/keyboardnavigation', 'listbox/loaddatafromselect', 'listbox/multipleselection', 'listbox/remotesearch', 'listbox/righttoleftlayout', 'listbox/selectionwithshiftctrl', 'listbox/textwithicons', 'listmenu/defaultfunctionality', 'listmenu/fluidsize', 'listmenu/nestedlists', 'listmenu/righttoleftlayout', 'loader/defaultfunctionality', 'loader/loaderwithjqxgrid', 'loader/righttoleftlayout', 'loader/showmodalloader', 'loader/showonlyicon', 'loader/showonlytext', 'maskedinput/defaultfunctionality', 'maskedinput/events', 'maskedinput/fluidsize', 'maskedinput/righttoleftlayout', 
  'menu/centermenuitems', 'menu/columns', 'menu/contextmenu', 'menu/defaultfunctionality', 'menu/fluidsize', 'menu/images', 'menu/jsonmenu', 'menu/keyboardnavigation', 'menu/loadmenufromarray', 'menu/minimizedmenu', 'menu/opendirection', 'menu/righttoleftlayout', 'menu/verticalmenu', 'menu/xmlmenu',
  'navbar/defaultfunctionality', 'navbar/minimizednavbar', 'navbar/righttoleftlayout', 'navbar/verticalnavbar', 
  'navigationbar/defaultfunctionality', 'navigationbar/disabled', 'navigationbar/events', 'navigationbar/fittocontainer', 'navigationbar/fluidsize', 'navigationbar/keyboardnavigation', 'navigationbar/multipleexpanded', 'navigationbar/righttoleftlayout', 'navigationbar/togglemode', 
  'notification/customicon', 'notification/defaultfunctionality', 'notification/events', 'notification/fluidsize', 'notification/notificationcontainer', 'notification/righttoleftlayout', 'notification/settings', 'notification/timernotification', 'numberinput/defaultfunctionality', 'numberinput/events', 'numberinput/fluidsize', 'numberinput/righttoleftlayout', 'numberinput/settings', 'numberinput/simpleinputmode', 'numberinput/templates', 'numberinput/twowaydatabinding', 'numberinput/validation', 'panel/defaultfunctionality', 'panel/dockpanel', 'panel/fluidsize', 'panel/righttoleftlayout', 'passwordinput/customstrengthrendering', 'passwordinput/defaultfunctionality', 'passwordinput/fluidsize', 'passwordinput/righttoleftlayout', 'passwordinput/twowaydatabinding', 'pivotgrid/cell-values-alignment', 'pivotgrid/custom-pivot-function', 'pivotgrid/custom-rendering', 'pivotgrid/designer', 'pivotgrid/drill-through', 'pivotgrid/events', 'pivotgrid/localization', 'pivotgrid/olap-tree-style-rows', 'pivotgrid/rows-columns-cells-css-styling', 'pivotgrid/totals', 'pivotgrid/values-on-columns', 'pivotgrid/values-on-rows', 'popover/bottompositioning', 'popover/defaultfunctionality', 'popover/modalpopover', 'popover/positioning', 'popover/righttoleftlayout', 'progressbar/colorranges', 'progressbar/defaultfunctionality', 'progressbar/layout', 'progressbar/righttoleftlayout', 'progressbar/templates', 'radiobutton/defaultfunctionality', 'rangeselector/backgroundimage', 'rangeselector/chartonbackground', 'rangeselector/customizedmarkers', 'rangeselector/datascale', 'rangeselector/decimalscale', 'rangeselector/defaultfunctionality', 'rangeselector/fluidsize', 'rangeselector/negativescale', 'rangeselector/numericscale', 'rangeselector/rangeselectorasafilter', 'rangeselector/righttoleftlayout', 'rangeselector/timescale', 'rating/defaultfunctionality', 'rating/twowaydatabinding', 'repeatbutton/defaultfunctionality', 'responsivepanel/defaultfunctionality', 'responsivepanel/fluidsize', 'responsivepanel/integrationwithjqxmenu', 'responsivepanel/righttoleftlayout', 
  'ribbon/collapsible', 'ribbon/defaultfunctionality', 'ribbon/events', 'ribbon/fluidsize', 'ribbon/integrationwithotherwidgets', 'ribbon/popuplayout', 'ribbon/ribbonatthebottom', 'ribbon/righttoleftlayout', 'ribbon/scrolling', 'ribbon/verticalribbon', 'ribbon/verticalrightposition', 
  'scheduler/agendaview', 'scheduler/appointmentcustomization', 'scheduler/appointmentrestrictions', 'scheduler/appointmentsexacttimerendering', 'scheduler/appointmentstatuses', 'scheduler/bindingtoicalendar', 'scheduler/bindingtojson', 'scheduler/contextmenu', 'scheduler/dataexport', 'scheduler/dataprinting', 'scheduler/defaultfunctionality', 'scheduler/editdialog', 'scheduler/events', 'scheduler/fluidsize', 'scheduler/hidetimeruler', 'scheduler/hideweekends', 'scheduler/keyboardnavigation', 'scheduler/localization', 'scheduler/monthviewweeknumbers', 'scheduler/monthviewwithautorowheight', 'scheduler/recurringappointments', 'scheduler/resources', 'scheduler/resourceswithcustomcolumnwidths', 'scheduler/righttoleft', 'scheduler/rowheight', 'scheduler/rowheightconfiguration', 'scheduler/timelineviews', 'scheduler/timelineviewswithcustomslotwidth', 'scheduler/timelineviewswithresources', 'scheduler/timescalesconfiguration', 'scheduler/timescaleszooming', 'scheduler/timezones', 'scheduler/verticalresources', 'scheduler/worktime', 
  'scrollbar/defaultfunctionality', 'scrollbar/righttoleft', 'scrollview/defaultfunctionality', 'slider/defaultfunctionality', 'slider/events', 'slider/fluidsize', 'slider/keyboardnavigation', 'slider/layout', 'slider/rangeslider', 'slider/righttoleft', 'slider/sliderlabels', 'slider/slidertooltip', 'slider/templates', 'slider/twowaydatabinding', 'slider/verticalslider', 'sortable/connectedlist', 'sortable/defaultfunctionality', 'sortable/displayastable', 'sortable/events', 'splitter/api', 'splitter/defaultfunctionality', 'splitter/events', 'splitter/fluidsize', 'splitter/horizontalsplitter', 'splitter/integrationwithjqxgrid', 'splitter/integrationwithjqxtabs', 'splitter/integrationwithjqxtree', 'splitter/multiplesplitpanelswithjqxtabs', 'splitter/nestedsidesplitters', 'splitter/nestedsplitters', 'splitter/simplecontainer', 'splitter/splitterwithinjqxtabs', 'splitter/togglebottompanel', 'splitter/togglerightpanel', 'splitter/verticalsplitter', 'switchbutton/defaultfunctionality', 'switchbutton/twowaydatabinding', 'tabs/closebuttons', 'tabs/collapsible', 'tabs/defaultfunctionality', 'tabs/draganddrop', 'tabs/events', 'tabs/fluidsize', 'tabs/integrationwithotherwidgets', 'tabs/keyboardnavigation', 'tabs/loadingtabcontentswithxhr', 'tabs/mapinsidetab', 'tabs/righttoleftlayout', 'tabs/saveloadselectionusingcookies', 'tabs/scrolling', 'tabs/settings', 'tabs/tabswithimages', 'tabs/wizard', 'tagcloud/addremoveupdatetags', 'tagcloud/bindingtojson', 'tagcloud/colorselection', 'tagcloud/customtags', 'tagcloud/defaultfunctionality', 'tagcloud/fontsize', 'tagcloud/showhidetags', 'tagcloud/sortingfiltering', 'textarea/autocomplete', 'textarea/bindingtojsondata', 'textarea/defaultfunctionality', 'textarea/fluidsize', 'textarea/multiplevalues', 'textarea/righttoleftlayout', 'textarea/twowaydatabinding', 'timepicker/24hourformat', 'timepicker/autoswitchtominutes', 'timepicker/defaultfunctionality', 'timepicker/settings', 'togglebutton/defaultfunctionality', 'toolbar/buttongroupsintoolbar', 'toolbar/cascadingcomboboxesintoolbar', 'toolbar/defaultfunctionality', 'toolbar/fluidsize', 'toolbar/nonminimizabletools', 'toolbar/resizabletoolbar', 'toolbar/righttoleftlayout', 'toolbar/settings', 'toolbar/toolevents', 'tooltip/closeonclick', 'tooltip/defaultfunctionality', 'tooltip/popover', 'tooltip/tooltippositions', 'tree/checkboxes', 'tree/contextmenu', 'tree/defaultfunctionality', 'tree/draganddrop', 'tree/dropdowntree', 'tree/events', 'tree/fluidsize', 'tree/jsontree', 'tree/keyboardnavigation', 'tree/navigation', 'tree/righttoleftlayout', 'tree/settings', 'tree/xmltree', 'treegrid/advancedfiltering', 'treegrid/aggregates', 'treegrid/aggregatestemplate', 'treegrid/celledit', 'treegrid/columnalignment', 'treegrid/columncheckboxes', 'treegrid/columnformatting', 'treegrid/columnhierarchicalcheckboxes', 'treegrid/columnicons', 'treegrid/columnreorder', 'treegrid/columnresize', 'treegrid/columnshierarchy', 'treegrid/columnsmallicons', 'treegrid/commandcolumn', 'treegrid/conditionalformatting', 'treegrid/conditionalrendering', 'treegrid/contextmenu', 'treegrid/csvdata', 'treegrid/customeditors', 'treegrid/dataexport', 'treegrid/datagrouping', 'treegrid/dataprinting', 'treegrid/defaultfunctionality', 'treegrid/dialog', 'treegrid/filtering', 'treegrid/filteringapi', 'treegrid/fluidsize', 'treegrid/headertemplate', 'treegrid/inlinerow', 'treegrid/jsondata', 'treegrid/keyboardnavigation', 'treegrid/localdata', 'treegrid/localization', 'treegrid/lockrow', 'treegrid/manualaggregates', 'treegrid/nestedjsondata', 'treegrid/nestedxmldata', 'treegrid/paging', 'treegrid/pagingapi', 'treegrid/pagingbyrootrecords', 'treegrid/pinnedfrozencolumn', 'treegrid/propertyeditor', 'treegrid/righttoleftlayout', 'treegrid/rowdetails', 'treegrid/searchfield', 'treegrid/showorhidecolumn', 'treegrid/sorting', 'treegrid/sortingapi', 'treegrid/tabdata', 'treegrid/validation', 'treegrid/virtualmode', 'treegrid/virtualmodewithajax', 'treegrid/xmldata', 'treemap/automaticrendering', 'treemap/bindingtojson', 'treemap/bindingtotabdata', 'treemap/customrendering', 'treemap/defaultfunctionality', 'treemap/fluidsize', 'treemap/rangesrendering', 'validator/defaultfunctionality', 'validator/errorlabels', 'validator/righttoleftlayout', 'window/defaultfunctionality', 'window/events', 'window/keyboardnavigation', 'window/multiplewindows', 'window/righttoleftlayout', 'window/settings' ];

const tempDemps = [
  'grid/example'
];
const tempDempsFix = [
	'datatable/customeditors'
];

console.log('\x1b[33m%s\x1b[0m', 'Building Angular Demos');

(function runProcess() {
  // for ALL use "demos" array, for choosen one use "tempDemps"
  for (const demo of tempDemps) {
    updateTSConfigJson(demo);
    updateAngularJson(demo);
    runNgBuild(demo);
  }
})();

function updateTSConfigJson(demo) {
  const data = fs.readFileSync(tsConfigJsonPath, 'utf8');

  const indexOfStart = data.indexOf('"src/');
  const tempData = data.substring(indexOfStart);
  const indexOfEnd = tempData.indexOf(',');
  const outputData = tempData.substring(0, indexOfEnd);

  const newData = data.replace(outputData, `"src/${demo}/*.ts"`);

  fs.writeFileSync(tsConfigJsonPath, newData, 'utf8');
}

function updateAngularJson(demo) {
  const data = fs.readFileSync(angularJsonPath, 'utf8');

  const indexOfStartOutputPath = data.indexOf('"outputPath"');
  const tempDataForOutputPath = data.substring(indexOfStartOutputPath);
  const indexOfEndOutputPath = tempDataForOutputPath.indexOf(',');
  const outputData = tempDataForOutputPath.substring(0, indexOfEndOutputPath);

  const indexOfStartMainTS = data.indexOf('"main"');
  const tempDataForMainTS = data.substring(indexOfStartMainTS);
  const indexOfEndMainTS = tempDataForMainTS.indexOf(',');
  const mainTS = tempDataForMainTS.substring(0, indexOfEndMainTS);

  const newData = data
    .replace(outputData, `"outputPath": "dist/${demo}"`)
    .replace(mainTS, `"main": "src/${demo}/main.ts"`);

  fs.writeFileSync(angularJsonPath, newData, 'utf8');
}

function runNgBuild(demo) {
  try {
    execSync(`ng build --prod`);
    console.log('\x1b[36m%s\x1b[0m', `Successfully Build: "${demo}"`);
  } catch (e) {
    console.log('\x1b[31m', `FAILED: "${demo}"`);
  }
}


