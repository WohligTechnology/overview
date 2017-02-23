var navigationservice = angular.module('navigationservice', [])

    .factory('NavigationService', function () {
        var navigation = [{
            name: "Overview",
            classis: "active",
            anchor: "home",
            sref: ""
        }, {
            name: "State",
            classis: "active",
            anchor: "state-info",
            // subnav: []
        }];

        return {
            getnav: function () {
                return navigation;
            },
            makeactive: function (menuname) {
                for (var i = 0; i < navigation.length; i++) {
                    if (navigation[i].name == menuname) {
                        navigation[i].classis = "active";
                    } else {
                        navigation[i].classis = "";
                    }
                }
                return menuname;
            },
        };
    });