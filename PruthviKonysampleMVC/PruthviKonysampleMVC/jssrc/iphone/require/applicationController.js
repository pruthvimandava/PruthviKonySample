define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("MainForm", "MainForm", "MainFormController");
        kony.mvc.registry.add("SplashForm", "SplashForm", "SplashFormController");
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        setAppBehaviors();
    },
    postAppInitCallBack: function() {},
    appmenuseq: function() {
        new kony.mvc.Navigation("SplashForm").navigate();
    }
});