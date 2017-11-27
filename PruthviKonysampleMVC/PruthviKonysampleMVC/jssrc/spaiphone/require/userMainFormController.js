define({
    //Type your controller code here 
    hotelClickHandler: function() {
        this.animateTabUnderline("0%");
        this.view.HotelsFlexScrollContainer.isVisible = true;
        this.view.FlightsFlexScrollContainer.isVisible = false;
        this.view.CarsScrollContainer.isVisible = false;
    },
    flightsClickHandler: function() {
        this.animateTabUnderline("33.33%");
        this.view.HotelsFlexScrollContainer.isVisible = false;
        this.view.FlightsFlexScrollContainer.isVisible = true;
        this.view.CarsScrollContainer.isVisible = false;
    },
    carsClickHandler: function() {
        this.animateTabUnderline("66.66%");
        this.view.HotelsFlexScrollContainer.isVisible = false;
        this.view.FlightsFlexScrollContainer.isVisible = false;
        this.view.CarsScrollContainer.isVisible = true;
    },
    onwayClick: function() {
        this.view.OneWay.isVisible = true;
        this.view.RoundTrip.isVisible = false;
        this.view.MultiCity.isVisible = false;
    },
    RoundTripClick: function() {
        this.view.OneWay.isVisible = false;
        this.view.RoundTrip.isVisible = true;
        this.view.MultiCity.isVisible = false;
        // this.view.roundTripButton.backgroundColor=white;
    },
    MultiCityClick: function() {
        this.view.OneWay.isVisible = false;
        this.view.RoundTrip.isVisible = false;
        this.view.MultiCity.isVisible = true;
        //this.view.multiCityButton.backgroundColor=white;
    },
    SameDropOffClick: function() {
        //this.view.CarsSameDropoffContainer.backgroundColor=green;
        this.view.CarsSameDropoffContainer.isVisible = true;
        this.view.CarsDiffDropoffContainer.isVisible = false;
    },
    differentDropoffClick: function() {
        debugger;
        this.view.CarsSameDropoffContainer.isVisible = false;
        this.view.CarsDiffDropoffContainer.isVisible = true;
    },
    animateTabUnderline: function(leftPropertPercentageValue) {
        this.view.tabUnderline.animate(kony.ui.createAnimation({
            "100": {
                "left": leftPropertPercentageValue,
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
        });
    }
});