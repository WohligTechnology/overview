angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.swiper', 'highcharts-ng'])

    .controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Overview"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        // var dataMap = [{
        //     "hc-key": "in-an",
        //     "value": 0
        // }, {
        //     "hc-key": "in-wb",
        //     "value": 1
        // }, {
        //     "hc-key": "in-ld",
        //     "value": 2
        // }, {
        //     "hc-key": "in-5390",
        //     "value": 3
        // }, {
        //     "hc-key": "in-py",
        //     "value": 4
        // }, {
        //     "hc-key": "in-3464",
        //     "value": 5
        // }, {
        //     "hc-key": "in-mz",
        //     "value": 6
        // }, {
        //     "hc-key": "in-as",
        //     "value": 7
        // }, {
        //     "hc-key": "in-pb",
        //     "value": 8
        // }, {
        //     "hc-key": "in-ga",
        //     "value": 9
        // }, {
        //     "hc-key": "in-2984",
        //     "value": 10
        // }, {
        //     "hc-key": "in-jk",
        //     "value": 11
        // }, {
        //     "hc-key": "in-hr",
        //     "value": 12
        // }, {
        //     "hc-key": "in-nl",
        //     "value": 13
        // }, {
        //     "hc-key": "in-mn",
        //     "value": 14
        // }, {
        //     "hc-key": "in-tr",
        //     "value": 15
        // }, {
        //     "hc-key": "in-mp",
        //     "value": 16
        // }, {
        //     "hc-key": "in-ct",
        //     "value": 17
        // }, {
        //     "hc-key": "in-ar",
        //     "value": 18
        // }, {
        //     "hc-key": "in-ml",
        //     "value": 19
        // }, {
        //     "hc-key": "in-kl",
        //     "value": 20
        // }, {
        //     "hc-key": "in-tn",
        //     "value": 21
        // }, {
        //     "hc-key": "in-ap",
        //     "value": 22
        // }, {
        //     "hc-key": "in-ka",
        //     "value": 23
        // }, {
        //     "hc-key": "in-mh",
        //     "value": 24
        // }, {
        //     "hc-key": "in-or",
        //     "value": 25
        // }, {
        //     "hc-key": "in-dn",
        //     "value": 26
        // }, {
        //     "hc-key": "in-dl",
        //     "value": 27
        // }, {
        //     "hc-key": "in-hp",
        //     "value": 28
        // }, {
        //     "hc-key": "in-rj",
        //     "value": 29
        // }, {
        //     "hc-key": "in-up",
        //     "value": 30
        // }, {
        //     "hc-key": "in-ut",
        //     "value": 31
        // }, {
        //     "hc-key": "in-jh",
        //     "value": 32
        // }, {
        //     "hc-key": "in-ch",
        //     "value": 33
        // }, {
        //     "hc-key": "in-br",
        //     "value": 34
        // }, {
        //     "hc-key": "in-sk",
        //     "value": 35
        // }];
        // $scope.chartMap = {
        //     options: {
        //         chart: {
        //             type: 'map'
        //         }
        //     },
        //     title: {
        //         text: 'Highmaps basic demo'
        //     },

        //     // subtitle: {
        //     //     text: 'Source map: <a href="https://code.highcharts.com/mapdata/countries/in/custom/in-all-disputed.js">India with disputed territories</a>'
        //     // },

        //     mapNavigation: {
        //         enabled: true,
        //         buttonOptions: {
        //             verticalAlign: 'bottom'
        //         }
        //     },

        //     colorAxis: {
        //         min: 0
        //     },

        //     series: [{
        //         data: dataMap,
        //         mapData: Highcharts.maps['countries/in/custom/in-all-disputed'],
        //         joinBy: 'hc-key',
        //         name: 'Random data',
        //         states: {
        //             hover: {
        //                 color: '#a4edba'
        //             }
        //         },
        //         dataLabels: {
        //             enabled: true,
        //             format: '{point.name}'
        //         }
        //     }]
        // };

        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'bar'
                }
            },
            series: [{
                name: 'Maharastra',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'Karnataka',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Gujrat',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                name: 'TamilNadu',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }],
            title: {
                text: 'Statistics'
            },

            loading: false
        };



        // $scope.chartspeedo = {
        //     options: {
        //         chart: {
        //             type: 'gauge',
        //             plotBackgroundColor: null,
        //             plotBackgroundImage: null,
        //             plotBorderWidth: 0,
        //             plotShadow: false
        //         }
        //     },
        //     pane: {
        //         startAngle: -150,
        //         endAngle: 150,
        //         background: [{
        //             backgroundColor: {
        //                 linearGradient: {
        //                     x1: 0,
        //                     y1: 0,
        //                     x2: 0,
        //                     y2: 1
        //                 },
        //                 stops: [
        //                     [0, '#FFF'],
        //                     [1, '#333']
        //                 ]
        //             },
        //             borderWidth: 0,
        //             outerRadius: '109%'
        //         }, {
        //             backgroundColor: {
        //                 linearGradient: {
        //                     x1: 0,
        //                     y1: 0,
        //                     x2: 0,
        //                     y2: 1
        //                 },
        //                 stops: [
        //                     [0, '#333'],
        //                     [1, '#FFF']
        //                 ]
        //             },
        //             borderWidth: 1,
        //             outerRadius: '107%'
        //         }, {
        //             // default background
        //         }, {
        //             backgroundColor: '#DDD',
        //             borderWidth: 0,
        //             outerRadius: '105%',
        //             innerRadius: '103%'
        //         }]
        //     },

        //     // the value axis
        //     yAxis: {
        //         min: 0,
        //         max: 200,

        //         minorTickInterval: 'auto',
        //         minorTickWidth: 1,
        //         minorTickLength: 10,
        //         minorTickPosition: 'inside',
        //         minorTickColor: '#666',

        //         tickPixelInterval: 30,
        //         tickWidth: 2,
        //         tickPosition: 'inside',
        //         tickLength: 10,
        //         tickColor: '#666',
        //         labels: {
        //             step: 2,
        //             rotation: 'auto'
        //         },
        //         title: {
        //             text: 'km/h'
        //         },
        //         plotBands: [{
        //             from: 0,
        //             to: 120,
        //             color: '#55BF3B' // green
        //         }, {
        //             from: 120,
        //             to: 160,
        //             color: '#DDDF0D' // yellow
        //         }, {
        //             from: 160,
        //             to: 200,
        //             color: '#DF5353' // red
        //         }]
        //     },

        //     series: [{
        //         name: 'Maharastra',
        //         data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        //     }],
        //     title: {
        //         text: 'Speedometer'
        //     },

        //     loading: false
        // };

        // $scope.charts = function (chart) {
        //     if (!chart.renderer.forExport) {
        //         setInterval(function () {
        //             var point = chart.series[0].points[0],
        //                 newVal,
        //                 inc = Math.round((Math.random() - 0.5) * 20);

        //             newVal = point.y + inc;
        //             if (newVal < 0 || newVal > 200) {
        //                 newVal = point.y - inc;
        //             }

        //             point.update(newVal);

        //         }, 3000);
        //     }
        // };
    })

    .controller('StateInfoCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("state-info"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("State"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'bar'
                }
            },
            series: [{
                name: 'Maharastra',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }],
            title: {
                text: 'Statistics'
            },

            loading: false
        };
    })

    .controller('headerctrl', function ($scope, TemplateService, $state) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
    })
    .controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

        $scope.changeLanguage = function () {
            console.log("Language CLicked");

            if (!$.jStorage.get("language")) {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                if ($.jStorage.get("language") == "en") {
                    $translate.use("hi");
                    $.jStorage.set("language", "hi");
                } else {
                    $translate.use("en");
                    $.jStorage.set("language", "en");
                }
            }
            //  $rootScope.$apply();
        };


    })

;