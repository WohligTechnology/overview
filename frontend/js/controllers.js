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

        $scope.reforms = ['SHEC', 'SHEP', 'Governance & Administrative', 'Financial contri - bution to Higher Education as a % of GSDP', 'Accreditation & Quality', 'Affiliation reforms', 'Examination Reforms'];
        $scope.reforms.selected = 'SHEC';

        $scope.states = [{
                "name": "Andaman and Nicobar Islands",
                "score": 19
            },
            {
                "name": "Andhra Pradesh",
                "score": 23
            },
            {
                "name": "Arunachal Pradesh",
                "score": 21
            },
            {
                "name": "Assam",
                "score": 11
            },
            {
                "name": "Bihar",
                "score": 20
            },
            {
                "name": "Chandigarh",
                "score": 24
            },
            {
                "name": "Chhattisgarh",
                "score": 22
            },
            {
                "name": "Dadra and Nagar Haveli",
                "score": 15
            },
            {
                "name": "Daman and Diu",
                "score": 13
            },
            {
                "name": "Delhi",
                "score": 7
            },
            {
                "name": "Goa",
                "score": 24
            },
            {
                "name": "Gujarat",
                "score": 22
            },
            {
                "name": "Haryana",
                "score": 16
            },
            {
                "name": "Himachal Pradesh",
                "score": 22
            },
            {
                "name": "Jammu and Kashmir",
                "score": 21
            },
            {
                "name": "Jharkhand",
                "score": 21
            },
            {
                "name": "Karnataka",
                "score": 28
            },
            {
                "name": "Kerala",
                "score": 23
            },
            {
                "name": "Lakshadweep",
                "score": 0
            },
            {
                "name": "Madhya Pradesh",
                "score": 16
            },
            {
                "name": "Maharashtra",
                "score": 23
            },
            {
                "name": "Manipur",
                "score": 17
            },
            {
                "name": "Meghalaya",
                "score": 18
            },
            {
                "name": "Mizoram",
                "score": 25
            },
            {
                "name": "Nagaland",
                "score": 19
            },
            {
                "name": "Odisha",
                "score": 23
            },
            {
                "name": "Puducherry",
                "score": 21
            },
            {
                "name": "Punjab",
                "score": 14
            },
            {
                "name": "Rajasthan",
                "score": 23
            },
            {
                "name": "Sikkim",
                "score": 18
            },
            {
                "name": "Tamil Nadu",
                "score": 22
            },
            {
                "name": "Telangana",
                "score": 19
            },
            {
                "name": "Tripura",
                "score": 15
            },
            {
                "name": "Uttar Pradesh",
                "score": 21
            },
            {
                "name": "Uttarakhand",
                "score": 18
            },
            {
                "name": "West Bengal",
                "score": 27
            },
        ];

        $scope.chartConfig2 = {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    '13-14',
                    '15-16',
                    '16-17',
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Karnataka',
                data: [4, 0, 5]

            }, {
                name: 'West Bengal',
                data: [3, 0, 5]

            }, {
                name: 'Mizoram',
                data: [0, 0, 3]

            }, {
                name: 'Chandigarh',
                data: [1, 0, 4]

            }, {
                name: 'Goa',
                data: [0, 0, 4]

            }],
            exporting: {
                enabled: false
            },
        };

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
            chart: {
                type: 'areaspline'
            },
            series: [{
                name: 'Karnataka',
                data: [12, 0, 28]

            }, {
                name: 'West Bengal',
                data: [3, 0, 5]

            }, {
                name: 'Mizoram',
                data: [0, 0, 3]

            }, {
                name: 'Chandigarh',
                data: [1, 0, 4]

            }, {
                name: 'Goa',
                data: [0, 0, 4]

            }],
            xAxis: {
                categories: [
                    '13-14',
                    '15-16',
                    '16-17',
                ],
                crosshair: true
            },
            title: {
                text: 'Total Score'
            },
            credits: {
                enabled: false
            },
            loading: false,
            exporting: {
                enabled: false
            },
        };

        $scope.sparkLineConfig = {
            chart: {
                backgroundColor: null,
                borderWidth: 0,
                type: 'area',
                margin: [2, 0, 2, 0],
                width: 120,
                height: 20,
                style: {
                    overflow: 'visible'
                },
                skipClone: true
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickPositions: []
            },
            yAxis: {
                endOnTick: false,
                startOnTick: false,
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                tickPositions: [0]
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    animation: false,
                    lineWidth: 1,
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    marker: {
                        radius: 1,
                        states: {
                            hover: {
                                radius: 2
                            }
                        }
                    },
                    fillOpacity: 0.25
                },
                column: {
                    negativeColor: '#910000',
                    borderColor: 'silver'
                }
            },
            exporting: {
                enabled: false
            },
            series: [{
                data: [{
                        y: 1,
                        name: '14-15'
                    }, {
                        y: 3,
                        name: '15-16'
                    },
                    {
                        y: 2,
                        name: '16-17'
                    }
                ]
            }]
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