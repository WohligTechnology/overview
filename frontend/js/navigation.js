var navigationservice = angular.module('navigationservice', [])

    .factory('NavigationService', function ($http) {
        var navigation = [
            //     {
            //     name: "Overview",
            //     classis: "active",
            //     anchor: "home",
            //     sref: ""
            // }, {
            //     name: "State",
            //     classis: "active",
            //     anchor: "state-info",
            //     // subnav: []
            // },
            {
                name: "Reforms",
                classis: "active",
                anchor: "reform-list",
                // subnav: []
            }
        ];

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
            login: function (formData, callback) {
                console.log("m in NavigationService", formData)
                $http({
                    url: adminurl + 'States/doLogin',
                    method: 'POST',
                    data: formData
                }).then(callback);
            },
        };
    });