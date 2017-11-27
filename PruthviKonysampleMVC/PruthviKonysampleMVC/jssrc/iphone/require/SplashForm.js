define("SplashForm", function() {
    return function(controller) {
        function addWidgetsSplashForm() {
            this.setDefaultUnit(kony.flex.DP);
            var FlexContainer0g38ece38498b41 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer0g38ece38498b41",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0g38ece38498b41.setDefaultUnit(kony.flex.DP);
            var BackgroundImage = new kony.ui.Image2({
                "height": "100%",
                "id": "BackgroundImage",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "ic_app_bg.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlexGroup0g6c95fc6ac2f42 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "37.33%",
                "id": "FlexGroup0g6c95fc6ac2f42",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            FlexGroup0g6c95fc6ac2f42.setDefaultUnit(kony.flex.DP);
            var logo = new kony.ui.Image2({
                "centerX": "50%",
                "height": "123dp",
                "id": "logo",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "default_airline_40.png",
                "top": "0dp",
                "width": "135dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlexContainer0ie0ce4786c414c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "FlexContainer0ie0ce4786c414c",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "-20dp",
                "width": "200dp",
                "zIndex": 1
            }, {}, {});
            FlexContainer0ie0ce4786c414c.setDefaultUnit(kony.flex.DP);
            var KContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "KContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5dp",
                "right": 10,
                "skin": "CopyslFbox0d9ee446f27d149",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 1
            }, {}, {});
            KContainer.setDefaultUnit(kony.flex.DP);
            var Klabel = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "Klabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0c5cf36e48ff84a",
                "text": "K",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            KContainer.add(Klabel);
            var OContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "OContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "right": "10dp",
                "skin": "CopyslFbox0d9ee446f27d149",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 1
            }, {}, {});
            OContainer.setDefaultUnit(kony.flex.DP);
            var OLabel = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "OLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0c5cf36e48ff84a",
                "text": "O",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            OContainer.add(OLabel);
            var NContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "NContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "right": "10dp",
                "skin": "CopyslFbox0d9ee446f27d149",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 1
            }, {}, {});
            NContainer.setDefaultUnit(kony.flex.DP);
            var NLabel = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "NLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0c5cf36e48ff84a",
                "text": "N",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            NContainer.add(NLabel);
            var YContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "YContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "right": "5dp",
                "skin": "CopyslFbox0d9ee446f27d149",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 1
            }, {}, {});
            YContainer.setDefaultUnit(kony.flex.DP);
            var YLabel = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "YLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslLabel0c5cf36e48ff84a",
                "text": "Y",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            YContainer.add(YLabel);
            FlexContainer0ie0ce4786c414c.add(KContainer, OContainer, NContainer, YContainer);
            var PleaseWaitLabel = new kony.ui.Label({
                "centerX": "50%",
                "id": "PleaseWaitLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "PleaseWaitLabel",
                "text": "Please wait...",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            FlexGroup0g6c95fc6ac2f42.add(logo, FlexContainer0ie0ce4786c414c, PleaseWaitLabel);
            FlexContainer0g38ece38498b41.add(BackgroundImage, FlexGroup0g6c95fc6ac2f42);
            this.add(FlexContainer0g38ece38498b41);
        };
        return [{
            "addWidgets": addWidgetsSplashForm,
            "enabledForIdleTimeout": false,
            "id": "SplashForm",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_ge9d7043ea3e4388b099f4623594ab59,
            "skin": "slForm",
            "statusBarHidden": true
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});