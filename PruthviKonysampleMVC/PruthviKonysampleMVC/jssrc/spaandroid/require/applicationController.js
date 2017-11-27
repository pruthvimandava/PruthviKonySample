define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("MainForm", "MainForm", "MainFormController");
        kony.mvc.registry.add("SplashForm", "SplashForm", "SplashFormController");
        setAppBehaviors();
    },
    postAppInitCallBack: function() {},
    appmenuseq: function() {
        new kony.mvc.Navigation("SplashForm").navigate();
    }
});