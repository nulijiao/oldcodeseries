/**
 * Created by jiaoge on 2017/9/7.
 */
/**
 * Created by jiaoge on 2017/9/7.
 */
// require.config({
//     paths: {
//         mychart: '../js/mychart'
//     }});
// require(["mychart"],function (charting)
// {

    function lining(selector, a, b,label) {
    var one, two;
    var ctx = new Chart(document.getElementById(selector).getContext("2d"));
    var option =
        {
            scaleFontSize: 13,
            scaleFontColor: "#fff",
            //Boolean - Whether to animate the chart
            animation: true,
            scaleLabel: "<%=value%>" + "%",
            //Number - Number of animation steps
            animationSteps: 60,

            //String - Animation easing effect
            animationEasing: "easeOutQuart",

            //Function - Fires when the animation is complete
            onAnimationComplete: null
        };

    var LineChart = {
        labels: [],
        datasets: [
            one = {
                fillColor: "rgba(0,255,0,0.9)",
                strokeColor: "rgba(255,255,255,1)",
                pointColor: "rgba(255,255,255,1)",
                pointStrokeColor: "#fff",
                data: []
            },
            two = {
                fillColor: "rgba(0,0,255,0.5)",
                    // "rgba(252,147,65,0.5)",
                strokeColor: "rgba(255,255,255,1)",
                pointColor: "rgba(255,255,255,1)",
                pointStrokeColor: "#fff",
                data: []
            }]
    }
    if (a != null) {
        for (var i = 0; i < label.length; i++) {
            LineChart.datasets[0].data.push(b[i])
        }
    }

    for (var i = 0; i < b.length; i++) {
        LineChart.labels.push(label[i]);
    }
    if (b != null) {
        for (var i = 0; i < a.length; i++) {
            LineChart.datasets[1].data.push(a[i])
        }
    }
    var myLineChart = ctx.Line(LineChart, option);


//雷达图
    function lada(selector, a, b) {
        var ctx = new Chart(document.getElementById(selector).getContext("2d"));


        var option =
            {

                //Boolean - If we show the scale above the chart data
                scaleOverlay: true,

                //Boolean - If we want to override with a hard coded scale
                scaleOverride: true,

                //** Required if scaleOverride is true **
                //Number - The number of steps in a hard coded scale
                scaleSteps: 5,

                //Number - The value jump in the hard coded scale
                scaleStepWidth: 20,

                // Y 轴的起始值
                scaleStartValue: null,

                // Y/X轴的颜色
                scaleLineColor: "rgba(0,0,0,0.)",

                // X,Y轴的宽度
                scaleLineWidth: 1,

                // 刻度是否显示标签, 即Y轴上是否显示文字
                scaleShowLabels: true,

                // Y轴上的刻度,即文字
                scaleLabel: "<%=value%>" + "%",

                // 字体
                scaleFontFamily: "'Arial'",

                // 文字大小
                scaleFontSize: 12,

                // 文字样式
                scaleFontStyle: "normal",

                // 文字颜色
                scaleFontColor: "#666",

                // 是否显示网格
                scaleShowGridLines: false,

                // 网格颜色
                scaleGridLineColor: "rgba(0,0,0,.05)",

                // 网格宽度
                scaleGridLineWidth: 20,

                // 是否使用贝塞尔曲线? 即:线条是否弯曲
                bezierCurve: false,

                // 是否显示点数
                pointDot: true,

                // 圆点的大小
                pointDotRadius: 8,

                // 圆点的笔触宽度, 即:圆点外层白色大小
                pointDotStrokeWidth: 2,

                // 数据集行程
                datasetStroke: true,

                // 线条的宽度, 即:数据集
                datasetStrokeWidth: 2,

                // 是否填充数据集
                datasetFill: false,

                // 是否执行动画
                animation: true,

                // 动画的时间
                animationSteps: 60,

                // 动画的特效
                animationEasing: "easeInQuart"
            }
        var radarChartData = {
            labels: ["SWIMMING", "EATTING", "LEARNING", "SINING", "Coding", "Partying", "Running"],
            datasets: [
                {
                    fillColor: "rgba(220,125,220,0.5)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(225,200,220,1)",
                    pointStrokeColor: "#f00",
                    data: []
                },
                {
                    fillColor: "rgba(151,187,205,0.5)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#000",
                    data: []
                }
            ]
        }
        //b第二个参数是第一个
        for (var i = 0; i < b.length; i++) {
            radarChartData.datasets[0].data.push(b[i])
        }
        //a第一个参数是第二个
        for (var i = 0; i < a.length; i++) {
            radarChartData.datasets[1].data.push(a[i])
        }
        var myRadar = ctx.Radar(radarChartData, option);

    }
}

//饼状图
    function pai(selector, a) {
        var ctx = new Chart(document.getElementById(selector).getContext("2d"));
        var option = {
            scaleFontSize: 13,
            scaleFontColor: "#ffa45e",
            //Boolean - Whether to animate the chart
            animation: true,

            //Number - Number of animation steps
            animationSteps: 60,

            //String - Animation easing effect
            animationEasing: "easeOutQuart",

            //Function - Fires when the animation is complete
            onAnimationComplete: null
        };

        var pieChart = [
            {value: 0, color: "#000", label: "善良"},
            {value: 0, color: "#ff0", label: "漂亮"},
            {value: 0, color: "#f0d0f0", label: "孝顺"},
        ];
        for (var i = 0; i < a.length; i++) {
            pieChart[i].value = a[i];
        }
        var myPieChart = ctx.Pie(pieChart);
    }

//条形图
    function tiao(selector, a, b) {
        var option = {
            scaleFontSize: 13,
            scaleFontColor: "#ffa45e",
            //Boolean - Whether to animate the chart
            animation: true,

            //Number - Number of animation steps
            animationSteps: 60,

            //String - Animation easing effect
            animationEasing: "easeOutQuart",

            //Function - Fires when the animation is complete
            onAnimationComplete: null
        };

        var ctx = new Chart(document.getElementById(selector).getContext("2d"));
        var BarChart = {
            labels: ["Ruby", "jQuery", "Java", "ASP.Net", "PHP"],
//       label是x轴的名称
            datasets: [{
                fillColor: "rgba(151,249,190,0.5)",
                strokeColor: "rgba(255,255,255,1)",
//            描边色
                data: [13, 20, 30, 40, 50]
            }, {
                fillColor: "rgba(252,47,255,0.5)",
                strokeColor: "rgba(255,255,255,1)",
                data: [28, 68, 40, 19, 96]
//            表示y轴的内容
            }]
        };
        for (var i = 0; i < b.length; i++) {
            BarChart.datasets[0].data.push(b[i])
        }
        //a第一个参数是第二个
        for (var i = 0; i < a.length; i++) {
            BarChart.datasets[1].data.push(a[i])
        }
        var myBarChart = ctx.Bar(BarChart, option);
    }

//环形图
    function huan(selector, a) {
        var ctx = new Chart(document.getElementById(selector).getContext("2d"));
        var option = {
            scaleFontSize: 13,
            scaleFontColor: "#ffa45e",
            //Boolean - Whether to animate the chart
            animation: true,

            //Number - Number of animation steps
            animationSteps: 60,

            //String - Animation easing effect
            animationEasing: "easeOutQuart",

            //Function - Fires when the animation is complete
            onAnimationComplete: null
        };

        var doughnutChart = [
            {
                value: 60, color: "#fcc79e", label: "ww", labelColor: 'white',
                labelFontSize: '16'
            },
            {
                value: 30, color: "#beefd2", label: "ww1", labelColor: 'white',
                labelFontSize: '16'
            },
            {
                value: 50, color: "#ffddfb", label: "w2w", labelColor: 'white',
                labelFontSize: '16'
            },
            {
                value: 120, color: "#cdecff", label: "ww", labelColor: 'white',
                labelFontSize: '16'
            },
            {
                value: 90, color: "#fff5bc", label: "w7w", labelColor: 'white',
                labelFontSize: '16'
            }
        ];
        for (var i = 0; i < a.length; i++) {
            doughnutChart[0].value = a[i];

        }
        var myRingChart = ctx.Doughnut(doughnutChart);
    }

    function Object1(dom, a, b, canvas) {
        this.dom = document.getElementById(dom);
        this.canvas = document.getElementById(canvas);

        this.a = [];
        this.b = [];
        for (var i = 0; i < b.length; i++) {
            this.b.push(b[i]);
            console.log(this.b[i]);

        }
        for (var i = 0; i < a.length; i++) {
            this.a.push(a[i]);
        }

    }

    Object1.prototype = {
        canuse: function () {
            try {
                document.createElement('canvas').getContext('2d');
                return true;
            } catch (e) {
                return false;
            }

        },


        sure: function (fn) {
            var that = this;
            var objlength;
            var lengthing;
            var lastlenth = 0;
            var bool = this.canuse();
            if (bool == true) {
                var timer = setInterval(function () {


                    if (that.dom.currentStyle) {
                        console.log(that.dom);
                        objlength = that.dom.currentStyle['width'];
//                                alert('ie:' + length );
                    }
                    else if (window.getComputedStyle) {
//
                        objlength = window.getComputedStyle(that.dom, null)['width'];
//                                alert('firefox:' + length );

                    }

                    lengthing = parseInt(objlength);


                    if (lastlenth != lengthing) {
                        that.canvas.style.width = lengthing + "px";
                        if (lengthing > 877) {
                            that.canvas.width = lengthing;
                            that.canvas.height = 600;
                        }
                        if (425 < lengthing < 877) {
                            that.canvas.width = lengthing - 50;
                            that.canvas.height = 500;
                        }
                        if (325 < lengthing < 425) {
                            that.canvas.width = lengthing - 30;
                            that.canvas.height = 400;
                        }
                        if (lengthing < 325) {
                            that.canvas.width = lengthing;
                            that.canvas.height = 200;
                        }
                        fn();
                        lastlenth = lengthing;
                    }


                }, 100);
            }

        }


    };

    var Mylabel= ["Ruby", "jQuery", "Java", "ASP.Net", "PHP"];
    var a3=[28, 68, 40, 19, 96];
    var b3=[0,0,0,0,0 ];
    var a1=[28, 68, 40, 19, 96];
    var b1= [13, 20, 30, 40, 50];
    var a2=[28,48,40,19,96,27,100];
    var b2= [65,59,90,81,56,55,40];
    var obj1=new Object1("par",a3,b3,"canvas1");
    obj1.sure(function(){

       lining("canvas1",obj1.a,obj1.b, Mylabel);});

    //思路首先获取在canvas里面的点的相对坐标那就要新判断有几个label然后去点一个，用canvas的宽度/(label.length-1)得到每一个可以被点击的点的横坐标，然后在获取我们的（纵坐标占据比例/100）*高度，同时判断因为label[i]对应data[i]所以二者就是这样对应的。

    // var obj2=new Object1("twp",a2,b2,"canvas2");
    // obj2.sure(function () {
    //     charting.tiao("canvas2",obj2.a,obj2.b);
    // });
    // var obj3=new Object1("onep",a2,b2,"canvas1");
    // obj3.sure(function () {
    //     var a=new charting();
    //     a.lada("canvas3",obj3.a,obj3.b);
    // });
// });