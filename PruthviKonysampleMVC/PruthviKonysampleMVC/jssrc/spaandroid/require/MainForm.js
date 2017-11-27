define("MainForm", function() {
    return function(controller) {
        function addWidgetsMainForm() {
            this.setDefaultUnit(kony.flex.DP);
            var headerContainer03 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "54dp",
                "id": "headerContainer03",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "headerContainerSknMaster",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            headerContainer03.setDefaultUnit(kony.flex.DP);
            var headerTitleLabel = new kony.ui.Label({
                "height": "100%",
                "id": "headerTitleLabel",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "Hiiiii",
                "text": "Hiii",
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var headerTitleLogo = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "29dp",
                "id": "headerTitleLogo",
                "isVisible": true,
                "left": "218dp",
                "skin": "slImage0e3e709e28bad42",
                "src": "kony_logowhitehoriz.png",
                "top": "0dp",
                "width": "65dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var headerIconRight = new kony.ui.Label({
                "centerY": "49%",
                "id": "headerIconRight",
                "isVisible": false,
                "right": 12,
                "skin": "headerCartIconSkin",
                "text": "",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var hamburgerIconContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "18dp",
                "id": "hamburgerIconContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "11dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox0f54e6831b2364d",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            hamburgerIconContainer.setDefaultUnit(kony.flex.DP);
            var FlexContainer0f97e6e10d5ff40 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "id": "FlexContainer0f97e6e10d5ff40",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0h819ee2043fa41",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            FlexContainer0f97e6e10d5ff40.setDefaultUnit(kony.flex.DP);
            FlexContainer0f97e6e10d5ff40.add();
            var aspdkaspdokaspdokaspdoakd = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "aspdkaspdokaspdokaspdoakd",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0h819ee2043fa41",
                "top": "21dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            aspdkaspdokaspdokaspdoakd.setDefaultUnit(kony.flex.DP);
            aspdkaspdokaspdokaspdoakd.add();
            var CopyFlexContainer0c1413b4b970f4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyFlexContainer0c1413b4b970f4a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0h819ee2043fa41",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0c1413b4b970f4a.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0c1413b4b970f4a.add();
            hamburgerIconContainer.add(FlexContainer0f97e6e10d5ff40, aspdkaspdokaspdokaspdoakd, CopyFlexContainer0c1413b4b970f4a);
            var headerButtonLeft = new kony.ui.Button({
                "focusSkin": "headerIconCartSkin",
                "height": "100%",
                "id": "headerButtonLeft",
                "isVisible": true,
                "left": "0dp",
                "skin": "headerButtonClearSkin",
                "text": "Back",
                "top": "0dp",
                "width": "41dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var headerButtonRight = new kony.ui.Button({
                "focusSkin": "headerIconCartSkin",
                "height": "100%",
                "id": "headerButtonRight",
                "isVisible": false,
                "right": "0dp",
                "skin": "headerButtonClearSkin",
                "text": "Settings",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [15, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Image0g3bcc45791c34f = new kony.ui.Image2({
                "centerY": "50%",
                "height": "40dp",
                "id": "Image0g3bcc45791c34f",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "ic_expanded_list.png",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            headerContainer03.add(headerTitleLabel, headerTitleLogo, headerIconRight, hamburgerIconContainer, headerButtonLeft, headerButtonRight, Image0g3bcc45791c34f);
            var headerOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90dp",
                "id": "headerOptions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "headerContainerSknMaster",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            headerOptions.setDefaultUnit(kony.flex.DP);
            var HotelsFlexContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "HotelsFlexContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_a8c20179af034794a020b013db9a8177,
                "skin": "slFbox",
                "top": "0dp",
                "width": "33.33%"
            }, {}, {});
            HotelsFlexContainer.setDefaultUnit(kony.flex.DP);
            var Label0e25a9268eb9b4d = new kony.ui.Label({
                "centerX": "50%",
                "id": "Label0e25a9268eb9b4d",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0e00e23d25ccf48",
                "text": "Hotel",
                "top": "58dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Image0f97a983636ce4d = new kony.ui.Image2({
                "centerX": "50%",
                "height": "35dp",
                "id": "Image0f97a983636ce4d",
                "isVisible": true,
                "left": "49dp",
                "skin": "slImage",
                "src": "ic_hotel_white_48dp.png",
                "top": "15dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            HotelsFlexContainer.add(Label0e25a9268eb9b4d, Image0f97a983636ce4d);
            var FlightsFlexContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlightsFlexContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "33.33%",
                "onClick": controller.AS_FlexContainer_bf43037c112c434889dff6fb73ed51c3,
                "right": "33.33%",
                "skin": "slFbox",
                "top": "0dp"
            }, {}, {});
            FlightsFlexContainer.setDefaultUnit(kony.flex.DP);
            var CopyLabel0c9392980d3544d = new kony.ui.Label({
                "centerX": "50%",
                "id": "CopyLabel0c9392980d3544d",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0e00e23d25ccf48",
                "text": "Flights",
                "top": "58dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyImage0a7618b86a81b41 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "35dp",
                "id": "CopyImage0a7618b86a81b41",
                "isVisible": true,
                "left": "49dp",
                "skin": "slImage",
                "src": "ic_notification_airplane.png",
                "top": "15dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlightsFlexContainer.add(CopyLabel0c9392980d3544d, CopyImage0a7618b86a81b41);
            var CarsFlexContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CarsFlexContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_ba729680e34246a7a546e30fa47a46d0,
                "right": "0.00%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "33.33%"
            }, {}, {});
            CarsFlexContainer.setDefaultUnit(kony.flex.DP);
            var CopyLabel0f9929b22c1174d = new kony.ui.Label({
                "centerX": "50%",
                "id": "CopyLabel0f9929b22c1174d",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0e00e23d25ccf48",
                "text": "Cars",
                "top": "58dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyImage0d4c1ca871ff442 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "35dp",
                "id": "CopyImage0d4c1ca871ff442",
                "isVisible": true,
                "left": "49dp",
                "skin": "slImage",
                "src": "ic_qu_sb_traffic.png",
                "top": "15dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CarsFlexContainer.add(CopyLabel0f9929b22c1174d, CopyImage0d4c1ca871ff442);
            headerOptions.add(HotelsFlexContainer, FlightsFlexContainer, CarsFlexContainer);
            var tabUnderline = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "tabUnderline",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "33.33%",
                "skin": "CopyslFbox0a5c3045172974b",
                "top": "139dp",
                "width": "33.33%",
                "zIndex": 1
            }, {}, {});
            tabUnderline.setDefaultUnit(kony.flex.DP);
            tabUnderline.add();
            var FlightsFlexScrollContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": 0,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "FlightsFlexScrollContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "144dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlightsFlexScrollContainer.setDefaultUnit(kony.flex.DP);
            var mainContainer = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "45dp",
                "id": "mainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "onClick": controller.AS_FlexContainer_bba3713032fa4aba869297a85a1b36a1,
                "skin": "subHeaderMainContainer",
                "top": 0,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            mainContainer.setDefaultUnit(kony.flex.DP);
            var subHeaderSegControl = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "centerY": "47%",
                "clipBounds": true,
                "height": "25dp",
                "id": "subHeaderSegControl",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "right": "3%",
                "skin": "subHeaderSegmentControlBox",
                "top": 0,
                "zIndex": 1
            }, {}, {});
            subHeaderSegControl.setDefaultUnit(kony.flex.DP);
            var oneWayButton = new kony.ui.Button({
                "focusSkin": "CopysubHeaderSegControlBtnSelectedNormal0fb8e491e8d4d4d",
                "height": "100%",
                "id": "oneWayButton",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_a77d647c614d4bceaf6076d348017387,
                "skin": "CopysubHeaderSegControlBtnSelectedNormal0g1746a62b07741",
                "text": "ONE - WAY",
                "top": "-1dp",
                "width": "33.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var vertSeparatorOne = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "vertSeparatorOne",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "33%",
                "skin": "subHeaderVertSeparator",
                "top": "-1dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            vertSeparatorOne.setDefaultUnit(kony.flex.DP);
            vertSeparatorOne.add();
            var roundTripButton = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "CopysubHeaderSegControlBtnSelectedNormal0fb8e491e8d4d4d",
                "height": "100%",
                "id": "roundTripButton",
                "isVisible": true,
                "left": "33.33%",
                "onClick": controller.AS_Button_a900e4c15f2242b8ac970171f84158f2,
                "right": "33.33%",
                "skin": "CopysubHeaderSegControlBtnSelectedNormal0g1746a62b07741",
                "text": "ROUND - TRIP",
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var vertSeparatorTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "vertSeparatorTwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "32.50%",
                "skin": "subHeaderVertSeparator",
                "top": "-1dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            vertSeparatorTwo.setDefaultUnit(kony.flex.DP);
            vertSeparatorTwo.add();
            var multiCityButton = new kony.ui.Button({
                "focusSkin": "CopysubHeaderSegControlBtnSelectedNormal0fb8e491e8d4d4d",
                "height": "100%",
                "id": "multiCityButton",
                "isVisible": true,
                "onClick": controller.AS_Button_ddd1e1d7fbfb449d93facec08c90f3fb,
                "right": "-2dp",
                "skin": "CopysubHeaderSegControlBtnSelectedNormal0g1746a62b07741",
                "text": "MULTI - CITY",
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            subHeaderSegControl.add(oneWayButton, vertSeparatorOne, roundTripButton, vertSeparatorTwo, multiCityButton);
            mainContainer.add(subHeaderSegControl);
            var OneWay = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 5,
                "clipBounds": true,
                "id": "OneWay",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "2%",
                "onClick": controller.AS_FlexContainer_d5d98b9fe25d4cb3956adff2229674b9,
                "right": "2%",
                "skin": "slFbox",
                "top": "50dp",
                "zIndex": 1
            }, {}, {});
            OneWay.setDefaultUnit(kony.flex.DP);
            var FlexContainer0de06e59cefca44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "120dp",
                "id": "FlexContainer0de06e59cefca44",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0de06e59cefca44.setDefaultUnit(kony.flex.DP);
            var FlexContainer0a405e808093949 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "110dp",
                "id": "FlexContainer0a405e808093949",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1%",
                "right": "0.50%",
                "skin": "CopyslFbox0f66299fb31a942",
                "top": "0dp",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0a405e808093949.setDefaultUnit(kony.flex.DP);
            var FlexGroup0gde039f1f1724c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "FlexGroup0gde039f1f1724c",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            FlexGroup0gde039f1f1724c.setDefaultUnit(kony.flex.DP);
            var Label0aa5affc35e3e49 = new kony.ui.Label({
                "height": "30dp",
                "id": "Label0aa5affc35e3e49",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0bd8b919bdab844",
                "text": "BOS",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0e5f14b09c5684f = new kony.ui.Label({
                "height": "15dp",
                "id": "Label0e5f14b09c5684f",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0e3911fe3ed3844",
                "text": "Boston, MA",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexGroup0gde039f1f1724c.add(Label0aa5affc35e3e49, Label0e5f14b09c5684f);
            FlexContainer0a405e808093949.add(FlexGroup0gde039f1f1724c);
            var CopyFlexContainer0h55ef7ac3c8944 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "110dp",
                "id": "CopyFlexContainer0h55ef7ac3c8944",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.50%",
                "right": "1%",
                "skin": "CopyslFbox0fcda6b9b26db45",
                "top": "0dp",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0h55ef7ac3c8944.setDefaultUnit(kony.flex.DP);
            var CopyFlexGroup0c6f47563c8d549 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "CopyFlexGroup0c6f47563c8d549",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            CopyFlexGroup0c6f47563c8d549.setDefaultUnit(kony.flex.DP);
            var CopyLabel0b49ae656b0aa46 = new kony.ui.Label({
                "height": "30dp",
                "id": "CopyLabel0b49ae656b0aa46",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0bd8b919bdab844",
                "text": "MEM",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyLabel0g125049ed33240 = new kony.ui.Label({
                "height": "15dp",
                "id": "CopyLabel0g125049ed33240",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0e3911fe3ed3844",
                "text": "Collierville, TN",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexGroup0c6f47563c8d549.add(CopyLabel0b49ae656b0aa46, CopyLabel0g125049ed33240);
            CopyFlexContainer0h55ef7ac3c8944.add(CopyFlexGroup0c6f47563c8d549);
            FlexContainer0de06e59cefca44.add(FlexContainer0a405e808093949, CopyFlexContainer0h55ef7ac3c8944);
            var CopyFlexContainer0d283df303d2740 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "CopyFlexContainer0d283df303d2740",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0d283df303d2740.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0d3345ed101144e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80dp",
                "id": "CopyFlexContainer0d3345ed101144e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1%",
                "right": "0.50%",
                "skin": "CopyslFbox0fcda6b9b26db45",
                "top": "0dp",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0d3345ed101144e.setDefaultUnit(kony.flex.DP);
            var CopyFlexGroup0hafaf9644e234c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "CopyFlexGroup0hafaf9644e234c",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "CopyslFbox0ccd682fb2a6a4e",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            CopyFlexGroup0hafaf9644e234c.setDefaultUnit(kony.flex.DP);
            var CopyLabel0b7f760fc2cf746 = new kony.ui.Label({
                "height": "30dp",
                "id": "CopyLabel0b7f760fc2cf746",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0ebaf6c5b422045",
                "text": "Nov 11",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyLabel0b406cd49faaa46 = new kony.ui.Label({
                "height": "15dp",
                "id": "CopyLabel0b406cd49faaa46",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0a569c3b1fa0d44",
                "text": "Fri",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexGroup0hafaf9644e234c.add(CopyLabel0b7f760fc2cf746, CopyLabel0b406cd49faaa46);
            CopyFlexContainer0d3345ed101144e.add(CopyFlexGroup0hafaf9644e234c);
            var CopyFlexContainer0cdd559f5b2514c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80dp",
                "id": "CopyFlexContainer0cdd559f5b2514c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.50%",
                "right": "1%",
                "skin": "CopyslFbox0fcda6b9b26db45",
                "top": "0dp",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0cdd559f5b2514c.setDefaultUnit(kony.flex.DP);
            var CopyFlexGroup0dddadc28e2ce41 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "CopyFlexGroup0dddadc28e2ce41",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "CopyslFbox0ccd682fb2a6a4e",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            CopyFlexGroup0dddadc28e2ce41.setDefaultUnit(kony.flex.DP);
            var CopyLabel0e618f16895da4b = new kony.ui.Label({
                "height": "30dp",
                "id": "CopyLabel0e618f16895da4b",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0ebaf6c5b422045",
                "text": "1 Traveller",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyLabel0g979b9c0562944 = new kony.ui.Label({
                "height": "15dp",
                "id": "CopyLabel0g979b9c0562944",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0a569c3b1fa0d44",
                "text": "Economy",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexGroup0dddadc28e2ce41.add(CopyLabel0e618f16895da4b, CopyLabel0g979b9c0562944);
            CopyFlexContainer0cdd559f5b2514c.add(CopyFlexGroup0dddadc28e2ce41);
            CopyFlexContainer0d283df303d2740.add(CopyFlexContainer0d3345ed101144e, CopyFlexContainer0cdd559f5b2514c);
            var FlexGroup0cdb8a915802047 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "150dp",
                "id": "FlexGroup0cdb8a915802047",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%"
            }, {}, {});
            FlexGroup0cdb8a915802047.setDefaultUnit(kony.flex.DP);
            var Image0a9c369b5b95340 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "40%",
                "height": "50dp",
                "id": "Image0a9c369b5b95340",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "default_airline_40.png",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Button0caadd3442ed34a = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "slButtonGlossRed",
                "height": "100dp",
                "id": "Button0caadd3442ed34a",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslButtonGlossBlue0b545dc7713e542",
                "top": "0dp",
                "width": "100dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0a3c96126c0624b = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "60%",
                "id": "Label0a3c96126c0624b",
                "isVisible": true,
                "left": "157dp",
                "skin": "CopyslLabel0be770519330046",
                "text": "GO",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexGroup0cdb8a915802047.add(Image0a9c369b5b95340, Button0caadd3442ed34a, Label0a3c96126c0624b);
            OneWay.add(FlexContainer0de06e59cefca44, CopyFlexContainer0d283df303d2740, FlexGroup0cdb8a915802047);
            var RoundTrip = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 5,
                "clipBounds": true,
                "id": "RoundTrip",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "2%",
                "right": "2%",
                "skin": "slFbox",
                "top": "50dp",
                "zIndex": 1
            }, {}, {});
            RoundTrip.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0c567d3c8e23943 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "120dp",
                "id": "CopyFlexContainer0c567d3c8e23943",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0c567d3c8e23943.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0cc79b6080e914c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "110dp",
                "id": "CopyFlexContainer0cc79b6080e914c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1%",
                "right": "0.50%",
                "skin": "CopyslFbox0fcda6b9b26db45",
                "top": "0dp",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0cc79b6080e914c.setDefaultUnit(kony.flex.DP);
            var CopyFlexGroup0d6e7ddcdb0f64f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "CopyFlexGroup0d6e7ddcdb0f64f",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            CopyFlexGroup0d6e7ddcdb0f64f.setDefaultUnit(kony.flex.DP);
            var CopyLabel0b32f4349846c44 = new kony.ui.Label({
                "height": "30dp",
                "id": "CopyLabel0b32f4349846c44",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0bd8b919bdab844",
                "text": "BOS",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyLabel0jae40d44e0ab46 = new kony.ui.Label({
                "height": "15dp",
                "id": "CopyLabel0jae40d44e0ab46",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0e3911fe3ed3844",
                "text": "Boston, MA",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexGroup0d6e7ddcdb0f64f.add(CopyLabel0b32f4349846c44, CopyLabel0jae40d44e0ab46);
            CopyFlexContainer0cc79b6080e914c.add(CopyFlexGroup0d6e7ddcdb0f64f);
            var CopyFlexContainer0b148addb5ce548 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "110dp",
                "id": "CopyFlexContainer0b148addb5ce548",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.50%",
                "right": "1%",
                "skin": "CopyslFbox0fcda6b9b26db45",
                "top": "0dp",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0b148addb5ce548.setDefaultUnit(kony.flex.DP);
            var CopyFlexGroup0icee25cfdc8747 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "CopyFlexGroup0icee25cfdc8747",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            CopyFlexGroup0icee25cfdc8747.setDefaultUnit(kony.flex.DP);
            var CopyLabel0f8de450f265040 = new kony.ui.Label({
                "height": "30dp",
                "id": "CopyLabel0f8de450f265040",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0bd8b919bdab844",
                "text": "MEM",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyLabel0g13d7c0660b14d = new kony.ui.Label({
                "height": "15dp",
                "id": "CopyLabel0g13d7c0660b14d",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0e3911fe3ed3844",
                "text": "Collierville, TN",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexGroup0icee25cfdc8747.add(CopyLabel0f8de450f265040, CopyLabel0g13d7c0660b14d);
            CopyFlexContainer0b148addb5ce548.add(CopyFlexGroup0icee25cfdc8747);
            CopyFlexContainer0c567d3c8e23943.add(CopyFlexContainer0cc79b6080e914c, CopyFlexContainer0b148addb5ce548);
            var CopyFlexContainer0b1b3463b1b084b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "CopyFlexContainer0b1b3463b1b084b",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0b1b3463b1b084b.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0a522f4c2af1d49 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80dp",
                "id": "CopyFlexContainer0a522f4c2af1d49",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1%",
                "right": "0.50%",
                "skin": "CopyslFbox0fcda6b9b26db45",
                "top": "0dp",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0a522f4c2af1d49.setDefaultUnit(kony.flex.DP);
            var CopyFlexGroup0e8c4ea7146764b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "CopyFlexGroup0e8c4ea7146764b",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "CopyslFbox0ccd682fb2a6a4e",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            CopyFlexGroup0e8c4ea7146764b.setDefaultUnit(kony.flex.DP);
            var CopyLabel0bfbfd54de65948 = new kony.ui.Label({
                "height": "30dp",
                "id": "CopyLabel0bfbfd54de65948",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0ebaf6c5b422045",
                "text": "Nov 10 - Nov 11",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyLabel0c9ca9408034e44 = new kony.ui.Label({
                "height": "15dp",
                "id": "CopyLabel0c9ca9408034e44",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0a569c3b1fa0d44",
                "text": "Fri - Sat",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexGroup0e8c4ea7146764b.add(CopyLabel0bfbfd54de65948, CopyLabel0c9ca9408034e44);
            CopyFlexContainer0a522f4c2af1d49.add(CopyFlexGroup0e8c4ea7146764b);
            var CopyFlexContainer0f937001495b747 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80dp",
                "id": "CopyFlexContainer0f937001495b747",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.50%",
                "right": "1%",
                "skin": "CopyslFbox0fcda6b9b26db45",
                "top": "0dp",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0f937001495b747.setDefaultUnit(kony.flex.DP);
            var CopyFlexGroup0b18832e6bf374e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "CopyFlexGroup0b18832e6bf374e",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "CopyslFbox0ccd682fb2a6a4e",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            CopyFlexGroup0b18832e6bf374e.setDefaultUnit(kony.flex.DP);
            var CopyLabel0c102874c865e44 = new kony.ui.Label({
                "height": "30dp",
                "id": "CopyLabel0c102874c865e44",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0ebaf6c5b422045",
                "text": "1 Traveller",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyLabel0b973329b6d2b47 = new kony.ui.Label({
                "height": "15dp",
                "id": "CopyLabel0b973329b6d2b47",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0a569c3b1fa0d44",
                "text": "Economy",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexGroup0b18832e6bf374e.add(CopyLabel0c102874c865e44, CopyLabel0b973329b6d2b47);
            CopyFlexContainer0f937001495b747.add(CopyFlexGroup0b18832e6bf374e);
            CopyFlexContainer0b1b3463b1b084b.add(CopyFlexContainer0a522f4c2af1d49, CopyFlexContainer0f937001495b747);
            var CopyFlexGroup0gdc554f4d5f749 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "150dp",
                "id": "CopyFlexGroup0gdc554f4d5f749",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%"
            }, {}, {});
            CopyFlexGroup0gdc554f4d5f749.setDefaultUnit(kony.flex.DP);
            var CopyImage0a9ebf8950b2748 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "40%",
                "height": "50dp",
                "id": "CopyImage0a9ebf8950b2748",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "default_airline_40.png",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyButton0b175a33f622741 = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "slButtonGlossRed",
                "height": "100dp",
                "id": "CopyButton0b175a33f622741",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslButtonGlossBlue0b545dc7713e542",
                "top": "0dp",
                "width": "100dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyLabel0be9c4530d05e49 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "60%",
                "id": "CopyLabel0be9c4530d05e49",
                "isVisible": true,
                "left": "157dp",
                "skin": "CopyslLabel0be770519330046",
                "text": "GO",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexGroup0gdc554f4d5f749.add(CopyImage0a9ebf8950b2748, CopyButton0b175a33f622741, CopyLabel0be9c4530d05e49);
            RoundTrip.add(CopyFlexContainer0c567d3c8e23943, CopyFlexContainer0b1b3463b1b084b, CopyFlexGroup0gdc554f4d5f749);
            var MultiCity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": -23,
                "clipBounds": true,
                "id": "MultiCity",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "2%",
                "right": "2%",
                "skin": "CopyslFbox0b5d26e4790664b",
                "top": "78dp",
                "zIndex": 1
            }, {}, {});
            MultiCity.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0ha1da8f565be44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "120dp",
                "id": "CopyFlexContainer0ha1da8f565be44",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0ha1da8f565be44.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0h8d4e3d67d674a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "110dp",
                "id": "CopyFlexContainer0h8d4e3d67d674a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1%",
                "right": "0.50%",
                "skin": "CopyslFbox0fcda6b9b26db45",
                "top": "0dp",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0h8d4e3d67d674a.setDefaultUnit(kony.flex.DP);
            var CopyFlexGroup0f1ae4e4c10bc48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "CopyFlexGroup0f1ae4e4c10bc48",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "CopyslFbox0g306672ee41943",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            CopyFlexGroup0f1ae4e4c10bc48.setDefaultUnit(kony.flex.DP);
            var CopyLabel0je8159539cb743 = new kony.ui.Label({
                "height": "30dp",
                "id": "CopyLabel0je8159539cb743",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0bd8b919bdab844",
                "text": "BOS",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyLabel0bfe21c07a95744 = new kony.ui.Label({
                "height": "15dp",
                "id": "CopyLabel0bfe21c07a95744",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0e3911fe3ed3844",
                "text": "Boston, MA",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexGroup0f1ae4e4c10bc48.add(CopyLabel0je8159539cb743, CopyLabel0bfe21c07a95744);
            CopyFlexContainer0h8d4e3d67d674a.add(CopyFlexGroup0f1ae4e4c10bc48);
            var CopyFlexContainer0f59ec9f5db5d45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "110dp",
                "id": "CopyFlexContainer0f59ec9f5db5d45",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.50%",
                "right": "1%",
                "skin": "CopyslFbox0fcda6b9b26db45",
                "top": "0dp",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0f59ec9f5db5d45.setDefaultUnit(kony.flex.DP);
            var CopyFlexGroup0cc0f4f14353648 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "CopyFlexGroup0cc0f4f14353648",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            CopyFlexGroup0cc0f4f14353648.setDefaultUnit(kony.flex.DP);
            var CopyLabel0c4a0a37cb18842 = new kony.ui.Label({
                "height": "30dp",
                "id": "CopyLabel0c4a0a37cb18842",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0bd8b919bdab844",
                "text": "MEM",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyLabel0a8d3c045dbc943 = new kony.ui.Label({
                "height": "15dp",
                "id": "CopyLabel0a8d3c045dbc943",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0e3911fe3ed3844",
                "text": "Collierville, TN",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexGroup0cc0f4f14353648.add(CopyLabel0c4a0a37cb18842, CopyLabel0a8d3c045dbc943);
            CopyFlexContainer0f59ec9f5db5d45.add(CopyFlexGroup0cc0f4f14353648);
            CopyFlexContainer0ha1da8f565be44.add(CopyFlexContainer0h8d4e3d67d674a, CopyFlexContainer0f59ec9f5db5d45);
            var CopyFlexContainer0i6c42fc4410e4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "CopyFlexContainer0i6c42fc4410e4c",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0i6c42fc4410e4c.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0d1ec27fe71d949 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80dp",
                "id": "CopyFlexContainer0d1ec27fe71d949",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1%",
                "right": "0.50%",
                "skin": "CopyslFbox0fcda6b9b26db45",
                "top": "0dp",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0d1ec27fe71d949.setDefaultUnit(kony.flex.DP);
            var CopyFlexGroup0d351d8761fc04e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "CopyFlexGroup0d351d8761fc04e",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "CopyslFbox0ccd682fb2a6a4e",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            CopyFlexGroup0d351d8761fc04e.setDefaultUnit(kony.flex.DP);
            var CopyLabel0d3a1f6771e9f4d = new kony.ui.Label({
                "height": "30dp",
                "id": "CopyLabel0d3a1f6771e9f4d",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0ebaf6c5b422045",
                "text": "Nov 10 - Nov 11",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyLabel0f0054e176c394c = new kony.ui.Label({
                "height": "15dp",
                "id": "CopyLabel0f0054e176c394c",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0a569c3b1fa0d44",
                "text": "Fri - Sat",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexGroup0d351d8761fc04e.add(CopyLabel0d3a1f6771e9f4d, CopyLabel0f0054e176c394c);
            CopyFlexContainer0d1ec27fe71d949.add(CopyFlexGroup0d351d8761fc04e);
            var CopyFlexContainer0c533aabf3ddd4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80dp",
                "id": "CopyFlexContainer0c533aabf3ddd4c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.50%",
                "right": "1%",
                "skin": "CopyslFbox0fcda6b9b26db45",
                "top": "0dp",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0c533aabf3ddd4c.setDefaultUnit(kony.flex.DP);
            var CopyFlexGroup0fba9e05a29604d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "CopyFlexGroup0fba9e05a29604d",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "CopyslFbox0ccd682fb2a6a4e",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            CopyFlexGroup0fba9e05a29604d.setDefaultUnit(kony.flex.DP);
            var CopyLabel0i995ff4c12554e = new kony.ui.Label({
                "height": "30dp",
                "id": "CopyLabel0i995ff4c12554e",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0ebaf6c5b422045",
                "text": "1 Traveller",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyLabel0f18d6ff4f31642 = new kony.ui.Label({
                "height": "15dp",
                "id": "CopyLabel0f18d6ff4f31642",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0a569c3b1fa0d44",
                "text": "Economy",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexGroup0fba9e05a29604d.add(CopyLabel0i995ff4c12554e, CopyLabel0f18d6ff4f31642);
            CopyFlexContainer0c533aabf3ddd4c.add(CopyFlexGroup0fba9e05a29604d);
            CopyFlexContainer0i6c42fc4410e4c.add(CopyFlexContainer0d1ec27fe71d949, CopyFlexContainer0c533aabf3ddd4c);
            var CopyFlexGroup0a36d541520bf41 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "150dp",
                "id": "CopyFlexGroup0a36d541520bf41",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%"
            }, {}, {});
            CopyFlexGroup0a36d541520bf41.setDefaultUnit(kony.flex.DP);
            var CopyImage0af60ad04fe6447 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "40%",
                "height": "50dp",
                "id": "CopyImage0af60ad04fe6447",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "default_airline_40.png",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyButton0f4e3eccf64f342 = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "slButtonGlossRed",
                "height": "100dp",
                "id": "CopyButton0f4e3eccf64f342",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslButtonGlossBlue0b545dc7713e542",
                "top": "0dp",
                "width": "100dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyLabel0b3b470c7ef9943 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "60%",
                "id": "CopyLabel0b3b470c7ef9943",
                "isVisible": true,
                "left": "157dp",
                "skin": "CopyslLabel0be770519330046",
                "text": "GO",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexGroup0a36d541520bf41.add(CopyImage0af60ad04fe6447, CopyButton0f4e3eccf64f342, CopyLabel0b3b470c7ef9943);
            MultiCity.add(CopyFlexContainer0ha1da8f565be44, CopyFlexContainer0i6c42fc4410e4c, CopyFlexGroup0a36d541520bf41);
            FlightsFlexScrollContainer.add(mainContainer, OneWay, RoundTrip, MultiCity);
            var HotelsFlexScrollContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "1dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "HotelsFlexScrollContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0jcc8fb2093f24c",
                "top": "146dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            HotelsFlexScrollContainer.setDefaultUnit(kony.flex.DP);
            var hotelInnercontainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "121.59%",
                "horizontalScrollIndicator": true,
                "id": "hotelInnercontainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0jcc8fb2093f24c",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            hotelInnercontainer.setDefaultUnit(kony.flex.DP);
            var HotelsFlexScrollMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "99.98%",
                "horizontalScrollIndicator": true,
                "id": "HotelsFlexScrollMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            HotelsFlexScrollMain.setDefaultUnit(kony.flex.DP);
            var HotelsContainers = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "210dp",
                "id": "HotelsContainers",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "right": "10dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "93.33%",
                "zIndex": 1
            }, {}, {});
            HotelsContainers.setDefaultUnit(kony.flex.DP);
            var WhereToContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "97dp",
                "id": "WhereToContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "skin": "CopyslFbox0ae1490d88f764f",
                "top": "13dp",
                "width": "98.57%",
                "zIndex": 1
            }, {}, {});
            WhereToContainer.setDefaultUnit(kony.flex.DP);
            var whereToLbl = new kony.ui.Label({
                "id": "whereToLbl",
                "isVisible": true,
                "left": "80dp",
                "skin": "slLabel",
                "text": "Where to?",
                "top": "25dp",
                "width": "52.17%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            WhereToContainer.add(whereToLbl);
            var FlexGroup0ee3ac53f64cb44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "87dp",
                "id": "FlexGroup0ee3ac53f64cb44",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "right": 0,
                "skin": "slFbox",
                "top": "115dp",
                "width": "100%"
            }, {}, {});
            FlexGroup0ee3ac53f64cb44.setDefaultUnit(kony.flex.DP);
            var startEndDateContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "85dp",
                "id": "startEndDateContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1%",
                "right": "0.50%",
                "skin": "CopyslFbox0f6c8e4602a6647",
                "top": "0dp",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            startEndDateContainer.setDefaultUnit(kony.flex.DP);
            var startEndDateLbl = new kony.ui.Label({
                "id": "startEndDateLbl",
                "isVisible": true,
                "left": "21dp",
                "skin": "CopyslLabel0fbbfee372b3a4b",
                "text": "NOV 14- NOV 17",
                "top": "26dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Dayslbl = new kony.ui.Label({
                "id": "Dayslbl",
                "isVisible": true,
                "left": "55dp",
                "skin": "CopyslLabel0h8d8db8779054d",
                "text": "Tue-Fri",
                "top": "49dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            startEndDateContainer.add(startEndDateLbl, Dayslbl);
            var NoofRoomContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "85dp",
                "id": "NoofRoomContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0.50%",
                "right": "1%",
                "skin": "CopyslFbox0ecd56620083a49",
                "top": "0dp",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            NoofRoomContainer.setDefaultUnit(kony.flex.DP);
            var noOfRooms = new kony.ui.Label({
                "id": "noOfRooms",
                "isVisible": true,
                "left": "49dp",
                "skin": "CopyslLabel0ce13fe4b3dfc41",
                "text": "1 Room",
                "top": "25dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var NoOfGuests = new kony.ui.Label({
                "id": "NoOfGuests",
                "isVisible": true,
                "left": "55dp",
                "skin": "CopyslLabel0e3cf1e6bd59341",
                "text": "2 Guests",
                "top": "2dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            NoofRoomContainer.add(noOfRooms, NoOfGuests);
            FlexGroup0ee3ac53f64cb44.add(startEndDateContainer, NoofRoomContainer);
            HotelsContainers.add(WhereToContainer, FlexGroup0ee3ac53f64cb44);
            HotelsFlexScrollMain.add(HotelsContainers);
            hotelInnercontainer.add(HotelsFlexScrollMain);
            var FlexContainer0f6842c7cb35f41 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 5,
                "clipBounds": true,
                "height": "100dp",
                "id": "FlexContainer0f6842c7cb35f41",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "35%",
                "right": "35%",
                "skin": "CopyslFbox0a5758d0484ab4d",
                "top": "275dp",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0f6842c7cb35f41.setDefaultUnit(kony.flex.DP);
            var Image0ec54391d8a4b49 = new kony.ui.Image2({
                "bottom": "5dp",
                "height": "63dp",
                "id": "Image0ec54391d8a4b49",
                "isVisible": true,
                "left": "5dp",
                "right": "5dp",
                "skin": "CopyslImage0a39331346bac4a",
                "src": "default_airline_40.png",
                "top": "5dp",
                "width": "113dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0fc769bab29bb43 = new kony.ui.Label({
                "id": "Label0fc769bab29bb43",
                "isVisible": true,
                "left": "38dp",
                "skin": "CopyslLabel0gb0291fd27d549",
                "text": "GO",
                "top": "56dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexContainer0f6842c7cb35f41.add(Image0ec54391d8a4b49, Label0fc769bab29bb43);
            HotelsFlexScrollContainer.add(hotelInnercontainer, FlexContainer0f6842c7cb35f41);
            var CarsScrollContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": 0,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "CarsScrollContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "144dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CarsScrollContainer.setDefaultUnit(kony.flex.DP);
            var carsMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "63dp",
                "id": "carsMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            carsMainContainer.setDefaultUnit(kony.flex.DP);
            var diffDropoffbtn = new kony.ui.Button({
                "height": "100%",
                "id": "diffDropoffbtn",
                "isVisible": true,
                "left": "2%",
                "onClick": controller.AS_Button_bcfe2011f6c7459b9a161e7f2ecfe1da,
                "right": "0.50%",
                "skin": "CopyslButtonGlossBlue0b01ffc63bdfd44",
                "text": "Same Drop-off",
                "top": "0dp",
                "width": "47.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var sameDropoffbtn = new kony.ui.Button({
                "height": "100%",
                "id": "sameDropoffbtn",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_b22e62585ffd462998de9c8eeb382cdc,
                "onTouchStart": controller.AS_Button_h733bd12eb6c47cf8ca901d43844a7ad,
                "right": "1%",
                "skin": "CopyslButtonGlossBlue0j3bdd8dac52140",
                "text": "Diff Drop-off",
                "top": "0dp",
                "width": "47.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            carsMainContainer.add(diffDropoffbtn, sameDropoffbtn);
            var CarsSameDropoffContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "91.49%",
                "id": "CarsSameDropoffContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0gd5a72da654e4c",
                "top": "63dp",
                "width": "100%"
            }, {}, {});
            CarsSameDropoffContainer.setDefaultUnit(kony.flex.DP);
            var FlexContainer0d702d410409e48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "247dp",
                "id": "FlexContainer0d702d410409e48",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0d702d410409e48.setDefaultUnit(kony.flex.DP);
            var FlexContainer0a006156700ab4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "120dp",
                "id": "FlexContainer0a006156700ab4a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "right": "2%",
                "skin": "CopyslFbox0g45f6588ceaf47",
                "top": "8dp",
                "width": "96%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0a006156700ab4a.setDefaultUnit(kony.flex.DP);
            var Label0c7bf8cdfc17d40 = new kony.ui.Label({
                "id": "Label0c7bf8cdfc17d40",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0f4971e2ee1934d",
                "text": "Pick - up",
                "top": "37dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexContainer0a006156700ab4a.add(Label0c7bf8cdfc17d40);
            var FlexContainer0a171fb3c6f1c48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "FlexContainer0a171fb3c6f1c48",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "right": "2%",
                "skin": "CopyslFbox0bcac1dc6bc9d4b",
                "top": "5dp",
                "width": "96%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0a171fb3c6f1c48.setDefaultUnit(kony.flex.DP);
            var Label0f0f42a2ed28a42 = new kony.ui.Label({
                "id": "Label0f0f42a2ed28a42",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0ccd99a420c544d",
                "text": "Nov 15 - Nov 18",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0acbcecd54b2043 = new kony.ui.Label({
                "id": "Label0acbcecd54b2043",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0cd54bf73c7f84c",
                "text": "12pm pick-up, 12pm drop-off",
                "top": "35dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexContainer0a171fb3c6f1c48.add(Label0f0f42a2ed28a42, Label0acbcecd54b2043);
            FlexContainer0d702d410409e48.add(FlexContainer0a006156700ab4a, FlexContainer0a171fb3c6f1c48);
            var FlexContainer0f6d0ec34025e4e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "123dp",
                "id": "FlexContainer0f6d0ec34025e4e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "33.30%",
                "skin": "slFbox",
                "top": "313dp",
                "width": "33.30%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0f6d0ec34025e4e.setDefaultUnit(kony.flex.DP);
            var Image0b3920748b95f4a = new kony.ui.Image2({
                "height": "90dp",
                "id": "Image0b3920748b95f4a",
                "isVisible": true,
                "left": "56dp",
                "skin": "slImage",
                "src": "pinb.png",
                "top": "7dp",
                "width": "24.96%",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Image0f12578b5ac0d40 = new kony.ui.Image2({
                "height": "150dp",
                "id": "Image0f12578b5ac0d40",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "ic_app_bg.png",
                "top": "0dp",
                "width": "120dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0b1babdbc4e2f47 = new kony.ui.Label({
                "id": "Label0b1babdbc4e2f47",
                "isVisible": true,
                "left": "57dp",
                "skin": "CopyslLabel0e14d5d9f3c2643",
                "text": "Go",
                "top": "70dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexContainer0f6d0ec34025e4e.add(Image0b3920748b95f4a, Image0f12578b5ac0d40, Label0b1babdbc4e2f47);
            CarsSameDropoffContainer.add(FlexContainer0d702d410409e48, FlexContainer0f6d0ec34025e4e);
            var CarsDiffDropoffContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "71.11%",
                "id": "CarsDiffDropoffContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "70dp",
                "width": "100%"
            }, {}, {});
            CarsDiffDropoffContainer.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0jd74d73e59cd40 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "337dp",
                "id": "CopyFlexContainer0jd74d73e59cd40",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0jd74d73e59cd40.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0if152d9ab5ee4e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "120dp",
                "id": "CopyFlexContainer0if152d9ab5ee4e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "right": "2%",
                "skin": "CopyslFbox0g45f6588ceaf47",
                "top": "0dp",
                "width": "96%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0if152d9ab5ee4e.setDefaultUnit(kony.flex.DP);
            var CopyLabel0g9668495cca347 = new kony.ui.Label({
                "id": "CopyLabel0g9668495cca347",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0f4971e2ee1934d",
                "text": "Pick - up",
                "top": "37dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexContainer0if152d9ab5ee4e.add(CopyLabel0g9668495cca347);
            var CopyFlexContainer0j7894611479642 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "CopyFlexContainer0j7894611479642",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "right": "2%",
                "skin": "CopyslFbox0bcac1dc6bc9d4b",
                "top": "5dp",
                "width": "96%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0j7894611479642.setDefaultUnit(kony.flex.DP);
            var CopyLabel0i5c267db544743 = new kony.ui.Label({
                "id": "CopyLabel0i5c267db544743",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0ccd99a420c544d",
                "text": "Nov 15 - Nov 18",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var CopyLabel0hc8563a45b4b43 = new kony.ui.Label({
                "id": "CopyLabel0hc8563a45b4b43",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0cd54bf73c7f84c",
                "text": "12pm pick-up, 12pm drop-off",
                "top": "35dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexContainer0j7894611479642.add(CopyLabel0i5c267db544743, CopyLabel0hc8563a45b4b43);
            var FlexContainer0j2b49b35b97843 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "67dp",
                "id": "FlexContainer0j2b49b35b97843",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "8dp",
                "skin": "CopyslFbox0b98db537f61c44",
                "top": "5dp",
                "width": "96.65%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0j2b49b35b97843.setDefaultUnit(kony.flex.DP);
            var Label0g4ae84d82e0a43 = new kony.ui.Label({
                "id": "Label0g4ae84d82e0a43",
                "isVisible": true,
                "left": "0dp",
                "skin": "slLabel",
                "text": "Drop-off",
                "top": "14dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexContainer0j2b49b35b97843.add(Label0g4ae84d82e0a43);
            CopyFlexContainer0jd74d73e59cd40.add(CopyFlexContainer0if152d9ab5ee4e, CopyFlexContainer0j7894611479642, FlexContainer0j2b49b35b97843);
            var CopyFlexContainer0bb3cb5c7af0641 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "113dp",
                "id": "CopyFlexContainer0bb3cb5c7af0641",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "300dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0bb3cb5c7af0641.setDefaultUnit(kony.flex.DP);
            var CopyImage0hf05bac5320d4d = new kony.ui.Image2({
                "height": "90dp",
                "id": "CopyImage0hf05bac5320d4d",
                "isVisible": true,
                "left": "167dp",
                "skin": "slImage",
                "src": "pinb.png",
                "top": "7dp",
                "width": "24.96%",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyImage0ic1942ca08e54b = new kony.ui.Image2({
                "height": "150dp",
                "id": "CopyImage0ic1942ca08e54b",
                "isVisible": true,
                "left": "137dp",
                "skin": "slImage",
                "src": "ic_app_bg.png",
                "top": "-20dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyLabel0g4116aa6d13e4f = new kony.ui.Label({
                "id": "CopyLabel0g4116aa6d13e4f",
                "isVisible": true,
                "left": "200dp",
                "skin": "CopyslLabel0e14d5d9f3c2643",
                "text": "Go",
                "top": "70dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            CopyFlexContainer0bb3cb5c7af0641.add(CopyImage0hf05bac5320d4d, CopyImage0ic1942ca08e54b, CopyLabel0g4116aa6d13e4f);
            CarsDiffDropoffContainer.add(CopyFlexContainer0jd74d73e59cd40, CopyFlexContainer0bb3cb5c7af0641);
            CarsScrollContainer.add(carsMainContainer, CarsSameDropoffContainer, CarsDiffDropoffContainer);
            this.add(headerContainer03, headerOptions, tabUnderline, FlightsFlexScrollContainer, HotelsFlexScrollContainer, CarsScrollContainer);
        };
        return [{
            "addWidgets": addWidgetsMainForm,
            "enabledForIdleTimeout": false,
            "id": "MainForm",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0d37042e1207546"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});