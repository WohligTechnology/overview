angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.swiper', 'highcharts-ng'])
    .controller('headerctrl', function ($scope, TemplateService, $state) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
    })

    .controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Overview"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        var data = [{
                "hc-key": "in-an",
                "value": 0
            },
            {
                "hc-key": "in-wb",
                "value": 1
            },
            {
                "hc-key": "in-ld",
                "value": 2
            },
            {
                "hc-key": "in-5390",
                "value": 3
            },
            {
                "hc-key": "in-py",
                "value": 4
            },
            {
                "hc-key": "in-3464",
                "value": 5
            },
            {
                "hc-key": "in-mz",
                "value": 6
            },
            {
                "hc-key": "in-as",
                "value": 7
            },
            {
                "hc-key": "in-pb",
                "value": 8
            },
            {
                "hc-key": "in-ga",
                "value": 9
            },
            {
                "hc-key": "in-2984",
                "value": 10
            },
            {
                "hc-key": "in-jk",
                "value": 11
            },
            {
                "hc-key": "in-hr",
                "value": 12
            },
            {
                "hc-key": "in-nl",
                "value": 13
            },
            {
                "hc-key": "in-mn",
                "value": 14
            },
            {
                "hc-key": "in-tr",
                "value": 15
            },
            {
                "hc-key": "in-mp",
                "value": 16
            },
            {
                "hc-key": "in-ct",
                "value": 17
            },
            {
                "hc-key": "in-ar",
                "value": 18
            },
            {
                "hc-key": "in-ml",
                "value": 19
            },
            {
                "hc-key": "in-kl",
                "value": 20
            },
            {
                "hc-key": "in-tn",
                "value": 21
            },
            {
                "hc-key": "in-ap",
                "value": 22
            },
            {
                "hc-key": "in-ka",
                "value": 23
            },
            {
                "hc-key": "in-mh",
                "value": 24
            },
            {
                "hc-key": "in-or",
                "value": 25
            },
            {
                "hc-key": "in-dn",
                "value": 26
            },
            {
                "hc-key": "in-dl",
                "value": 27
            },
            {
                "hc-key": "in-hp",
                "value": 28
            },
            {
                "hc-key": "in-rj",
                "value": 29
            },
            {
                "hc-key": "in-up",
                "value": 30
            },
            {
                "hc-key": "in-ut",
                "value": 31
            },
            {
                "hc-key": "in-jh",
                "value": 32
            },
            {
                "hc-key": "in-ch",
                "value": 33
            },
            {
                "hc-key": "in-br",
                "value": 34
            },
            {
                "hc-key": "in-sk",
                "value": 35
            }
        ];
        $scope.states = [{
                "key": "AN",
                "name": "Andaman and Nicobar Islands",
                "score": 43
            },
            {
                "key": "AP",
                "name": "Andhra Pradesh",
                "score": 39
            },
            {
                "key": "AR",
                "name": "Arunachal Pradesh",
                "score": 28
            },
            {
                "key": "AS",
                "name": "Assam",
                "score": 38
            },
            {
                "key": "BR",
                "name": "Bihar",
                "score": 59
            },
            {
                "key": "CG",
                "name": "Chandigarh",
                "score": 29
            },
            {
                "key": "CH",
                "name": "Chhattisgarh",
                "score": 48
            },
            {
                "key": "DH",
                "name": "Dadra and Nagar Haveli",
                "score": 28
            },
            {
                "key": "DD",
                "name": "Daman and Diu",
                "score": 30
            },
            {
                "key": "DL",
                "name": "Delhi",
                "score": 48
            },
            {
                "key": "GA",
                "name": "Goa",
                "score": 29
            },
            {
                "key": "GJ",
                "name": "Gujarat",
                "score": 40
            },
            {
                "key": "HR",
                "name": "Haryana",
                "score": 19
            },
            {
                "key": "HP",
                "name": "Himachal Pradesh",
                "score": 40
            },
            {
                "key": "JK",
                "name": "Jammu and Kashmir",
                "score": 50
            },
            {
                "key": "JH",
                "name": "Jharkhand",
                "score": 39
            },
            {
                "key": "KA",
                "name": "Karnataka",
                "score": 48
            },
            {
                "key": "KL",
                "name": "Kerala",
                "score": 58
            },
            {
                "key": "LD",
                "name": "Lakshadweep",
                "score": 24
            },
            {
                "key": "MP",
                "name": "Madhya Pradesh",
                "score": 52
            },
            {
                "key": "MH",
                "name": "Maharashtra",
                "score": 51
            },
            {
                "key": "MN",
                "name": "Manipur",
                "score": 42
            },
            {
                "key": "ML",
                "name": "Meghalaya",
                "score": 48
            },
            {
                "key": "MZ",
                "name": "Mizoram",
                "score": 58
            },
            {
                "key": "NL",
                "name": "Nagaland",
                "score": 47
            },
            {
                "key": "OR",
                "name": "Odisha",
                "score": 26
            },
            {
                "key": "PY",
                "name": "Puducherry",
                "score": 47
            },
            {
                "key": "PB",
                "name": "Punjab",
                "score": 52
            },
            {
                "key": "RJ",
                "name": "Rajasthan",
                "score": 47
            },
            {
                "key": "SK",
                "name": "Sikkim",
                "score": 59
            },
            {
                "key": "TN",
                "name": "Tamil Nadu",
                "score": 47
            },
            {
                "key": "TS",
                "name": "Telangana",
                "score": 37
            },
            {
                "key": "TR",
                "name": "Tripura",
                "score": 47
            },
            {
                "key": "UK",
                "name": "Uttar Pradesh",
                "score": 58
            },
            {
                "key": "UP",
                "name": "Uttarakhand",
                "score": 48
            },
            {
                "key": "WB",
                "name": "West Bengal",
                "score": 28
            }
        ];

        // $scope.mapConfig = {
        //     title: {
        //         text: 'Map View'
        //     },
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
        //         data: data,
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
        //     }],
        //     credits: {
        //         enabled: false
        //     },
        // };

        $scope.graphConfig = {
            options: {
                chart: {
                    type: 'bar'
                }
            },
            series: [{
                name: 'Maharastra',
                data: [81, 22, 53, 24, 35, 46, 37, 48, 59]
            }, {
                name: 'Karnataka',
                data: [31, 42, 53, 54, 35, 86, 37, 58, 69]
            }, {
                name: 'Gujrat',
                data: [21, 42, 83, 24, 55, 36, 57, 48, 79]
            }, {
                name: 'Tamil Nadu',
                data: [51, 72, 73, 44, 75, 96, 47, 38, 49]
            }],
            xAxis: {
                categories: []
            },
            title: {
                text: 'Comparison'
            },
            credits: {
                enabled: false
            },
            loading: false
        };

    })

    .controller('StateInfoCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("state-info"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("State"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.reforms = [{
                name: 'SHEC',
                received: 2,
                outOf: 3,
            },
            {
                name: 'SHEP',
                received: 3,
                outOf: 5,
            }, {
                name: 'Governance & administrative reforms',
                received: 10,
                outOf: 13,
            }, {
                name: 'Financial contri - bution to Higher Education as a % of GSDP',
                received: 2,
                outOf: 3,
            }, {
                name: 'Accreditation and quality re - forms',
                received: 2,
                outOf: 4,
            }, {
                name: 'Affiliation reforms as outlined in RUSA',
                received: 2,
                outOf: 3,
            }, {
                name: 'Examination Reforms',
                received: 2,
                outOf: 3,
            }, {
                name: 'Student Centric Activities',
                received: 2,
                outOf: 3,
            }, {
                name: 'Data',
                received: 20,
                outOf: 24,
            }
        ];

        $scope.sumReceived = function () {
            return _.sumBy($scope.reforms, 'received');
        };
        $scope.sumOutOf = function () {
            return _.sumBy($scope.reforms, 'outOf');
        };

        $scope.marksData = [];

        for (var i = 0; i < $scope.reforms.length; i++) {
            $scope.marksData.push({
                y: +($scope.reforms[i].received / $scope.reforms[i].outOf * 100).toFixed(2),
                name: $scope.reforms[i].name
            });
        }

        $scope.graphConfig = {
            options: {
                chart: {
                    type: 'bar'
                }
            },
            xAxis: {
                categories: []
            },
            series: [{
                name: 'State Name',
                data: $scope.marksData
            }],
            title: {
                text: 'June 2017'
            },
            credits: {
                enabled: false
            },
            loading: false
        };
        $scope.meterConfig = {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },

            title: {
                text: ''
            },
            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [{
                    backgroundColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, '#FFF'],
                            [1, '#333']
                        ]
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, '#333'],
                            [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }]
            },

            // the value axis
            yAxis: {
                min: 0,
                max: $scope.sumOutOf(),

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: ''
                },
                plotBands: [{
                    from: 0,
                    to: 35,
                    color: '#DF5353' // red
                }, {
                    from: 35,
                    to: 70,
                    color: '#DDDF0D' // yellow
                }, {
                    from: 70,
                    to: 100,
                    color: '#55BF3B' // green
                }]
            },

            series: [{
                name: 'Result',
                data: [$scope.sumReceived()],
                tooltip: {
                    valueSuffix: ''
                }
            }],
            credits: {
                enabled: false
            },
        };
    })


    .controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

        $scope.changeLanguage = function () {
            console.log("Language Clicked");

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