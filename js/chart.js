/**
 * Created by jiaoge on 2017/9/7.
 */
$(function(){
    //配置项
    require.config({
        paths: {
            echarts: '../build/dist'
        }
    });




    document.onreadystatechange=function ()
    {
        console.log(document.readyState);

        if(document.readyState=="complete")
        {
            $("#load").fadeOut();
        }
    };
    $("#fullpage").fullpage({
        //可以为每一个section设置background-color属性
        sectionsColor:["green","orange","gray","red","white","white","white"],

        //定义是否通过箭头来控制slide幻灯片，默认为true。当我们设置为false，则幻灯片左右两则的箭头就会消失，在移动设备上，我们可以通过滑动来操作幻灯片
        controlArrows:true,

        //每一页的内容是否垂直居中,默认为true.一般保持默认值
        verticalCentered:true,

        //滚动速度，单位为毫秒，默认为700
        scrollingSpeed:1000,

        //定义锚连接，默认为[]。有了锚链接，用户就可以快速打开定位到某一页面
        //注意定义锚链接的时候，值不要和页面中任意的id或name相同，尤其是在IE浏览器下。而且定义时不需要要加#
        anchors:["page1","page2","page3","page4","page5","page6","page7"],

        //是否锁定锚链接，默认为false。如果设置为true，那么定义的锚链接，也就是anchors属性则没有效果。这个配置项使用的比较少
        lockAnchors:false,

        //定义页面section滚动的动画方式,如果修改此项,需要引入jquery.easings插件，或者jquery ui
        easing:"easeInOutCubic",

        //是否使用CSS3 transforms 来实现滚动效果，默认为true。这个配置项可以提高支持css3的浏览器，比如移动设备等的速度，如果浏览器不支持css3，则会使用jquery来替代css3实现滚动效果
        css3:true,

        //滚动到最顶部后是否连续滚动到底部，默认为false
        loopTop:false,

        //滚动到最底部是否连续滚动回顶部，默认为false
        loopBottom:false,

        //横向slider幻灯片是否循环滚动，默认为true
        loopHorizontal:true,

        //是否使用插件的滚动方式，默认为true，如果选择false，则会出现浏览器自带的滚动条，将不会按页滚动，而是按照滚动条的默认行为来滚动
        autoScrolling:true,

        //是否包含滚动条，默认为false，如果设置为true，则浏览器自带的滚动条出现，页面滚动时还是按页滚动，但是滚动条的默认行为也有效
        scrollBar:false,

        //设置每一个section顶部和底部的padding，默认为0，一般如果需要设置一个固定顶部或者底部的菜单、导航、元素等，可以使用这两个配置项
        paddingTop:0,
        paddingBottom:0,

        //固定的元素，默认为null，需要配置一个jquery选择器。在页面滚动的时候，fixedElements设置的元素固定不动
        fixedElements:"",

        //是否可以使用键盘方向键导航，默认为true
        keyboardScrolling:true,

        //在移动设备中滑动页面的敏感性，默认为5，是按百分比来衡量，最高为100,越大则越难滑动
        touchSensitivity:5,

        //是否循环滚动，默认为false。如果设置为true，则页面会循环滚动，而不像loopTop或loopBottom那样出现跳动，注意这个属性和这两者不兼容，请不要同时使用
        continuousVertical:false,

        //锚链接是否可以控制滚动动画，默认为true。如果设置为false，则通过锚链接定位到某个页面显示不再有动画效果
        animateAnchor:true,

        //是否记录历史，默认为true，可以记录页面滚动的历史，通过浏览器的前进后退来导航。注意如果设置了autoScrolling:false,那么这个配置也将被关闭，即设置为false
        recordHistory:true,

        //绑定菜单,设定的相关属性与anchors的值对应后，菜单可以控制滚动，默认为false。可以设置为菜单的jquery选择器
        menu:false,

        //是否显示导航，默认为false。如果设置为true，会显示小圆点，作为导航
        navigation:true,

        //导航小圆点的位置，可以设置为left或者right
        navigationPosition:"right",

        //导航小圆点的tooltips设置，默认为[]，注意按照顺序设置
        navigationTooltips:["1","2","3","4","5"],

        //是否显示当前页面的导航的tooltip信息，默认为false
        showActiveTooltip:true,

        //是否显示横向幻灯片的导航，默认为false
        slidesNavigation:true,

        //横向幻灯片导航的位置，默认为bottom，可以设置为top或bottom
        slidesNavPosition:"top",

        //内容超过满屏后是否显示滚动条，默认为false。如果设置为true，则会显示滚动条，如果滚动查看内容，还需要jquery.slimscroll插件的配合
        scrollOverflow:false,

        //section的选择器,默认为.section
        sectionSelector:".section",

        //slideSelector:slide的选择器，默认为.slide
        slideSelector:".slide",
    });

    require(
        [
            'echarts',
            'echarts/chart/pie',
            'echarts/chart/radar',// 使用柱状图就加载bar模块，按需加载
            'echarts/chart/line',
            'echarts/chart/bar'
        ],function (echarts) {
            var myChartLast = echarts.init(document.getElementById('last'));
         var   Zhuotion = {
             backgroundColor:"rgb(0,0,0,.7)",
             title : {
                 text: '世界人口总量',
                 subtext: '数据来自网络'
             },
             tooltip : {
                 trigger: 'axis'
             },
             legend: {
                 data:['2011年', '2012年']
             },
             toolbox: {
                 show : true,
                 feature : {
                     mark : {show: true},
                     dataView : {show: true, readOnly: false},
                     magicType: {show: true, type: ['line', 'bar']},
                     restore : {show: true},
                     saveAsImage : {show: true}
                 }
             },
             calculable : true,
             xAxis : [
                 {
                     type : 'value',
                     boundaryGap : [0, 0.01],
                     axisLabel:{ textStyle:{color:"#fff"}}
                 }
             ],
             yAxis : [
                 {
                     type : 'category',
                     data : ['巴西','印尼','美国','印度','中国','世界人口(万)'],
                     axisLabel:{ textStyle:{color:"#fff"}}

                 }
             ],
             series : [
                 {
                     name:'2011年',
                     type:'bar',
                     data:[18203, 23489, 29034, 104970, 131744, 630230]
                 },
                 {
                     name:'2012年',
                     type:'bar',
                     data:[19325, 23438, 31000, 121594, 134141, 681807]
                 }
             ]
            };

            myChartLast.setOption( Zhuotion );
            var myChart3 = echarts.init(document.getElementById('data'));
          var  Loption = {
                title : {
                    text: '数据库使用率情况',
                    subtext: '来自数据调查'
                },
              backgroundColor:"rgba(0,0,0,.5)",
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['数据库使用率']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['PL/SQL','mysql','sqlserver','oracle','sybase','ACCESS','DB2'],
                        axisLabel:{ textStyle:{color:"#fff"}}
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel:{ textStyle:{color:"#fff"}}
                    }
                ],
                series : [
                    {
                        name:'使用率',
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[6, 12, 21, 34, 26, 9,4 ]
                    }


                ]
            };
            myChart3.setOption(Loption);

            var myChart2 = echarts.init(document.getElementById('salary'));
           var optionsl = {
               backgroundColor:"rgba(0,0,0,.5)",
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['本科','硕士','博士','博士后']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }

                },
                calculable : true,
                xAxis : [
                    {axisLine:{lineStyle:{color:"#fff"}},
                        type : 'category',
                        boundaryGap : false,
                        data : ['2000','2003','2006','2009','2012','2015','2018'],
                        axisLabel:{ textStyle:{color:"#fff"}}
                    },

                ],
                yAxis : [
                    {axisLine:{lineStyle:{color:"#fff"}},
                        type : 'value',
                        axisLabel:{ textStyle:{color:"#fff"}}
                    }
                ],
                series : [
                    {
                        name:'本科',
                        type:'line',
                        stack: '收入',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'研究生',
                        type:'line',
                        stack: '收入',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'博士',
                        type:'line',
                        stack: '收入',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'博士后',
                        type:'line',
                        stack: '收入',
                        data:[320, 332, 301, 334, 390, 330, 320]
                    }

                ]
            };

            myChart2.setOption(optionsl);
            var myChart = echarts.init(document.getElementById('pieDiv'));


            var option = {
                title: {
                    text: '图'
                },
                tooltip: {},
                legend: {
                    data:['前端框架使用情况']
                },

                color:['rgba(128, 128, 128, 0.5)','#c0c1c5','#dbdac8','#d2a4c0','#f4ffb9','#d2a4c0'],
                series: [{
                    name: '使用人数百分比',
                    type: 'pie',
                    data:
                        [  {value:40, name:'bootstrap',  normal:{color:'#96b4bc'}},
                            {value:11, name:'vue',normal:{color:'#d2a4c0'}},
                            {value:19, name:'Amaze UI',normal:{color:'#dbdac8'}},
                            {value:18, name:'Frozen UI',normal:{color:'#c0c1c5'}},
                            {value:12, name:'WeUIi',normal:{color:'#3e2ad9b'}}]

                }],

            };
            myChart.setOption(option);





            var myChart1 = echarts.init(document.getElementById('can1'));
            var option1 =
                {
                    title : {
                        text: '编程语言使用情况',
                        subtext: '主流语言语言',
                        show: false
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        x : 'center',
                        data:['评估得分'],
                        show: false
                    },

                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: false},
                            dataView : {show: false, readOnly: false},
                            restore : {show: false},
                            saveAsImage : {show: false}
                        }
                    },
                    calculable : false,
                    polar:
                        [
                            {

                                indicator :
                                    [
                                    {text : 'java',color:"#0f0"},
                                    {text : 'html',color:"#0f0"},
                                    {text : 'css',color:"#0f0"},
                                    {text : 'html',color:"#0f0"},
                                    {text : 'Python',color:"#0f0"},
                                    {text : 'PHP',color:"#0f0"},
                                    {text : 'JavaScript',color:"#0f0"},
//                                   {text : '信用记录\n满分35', max  : 35},
//                                       {text : '经济实力\n满分30', max  : 30},
//                                          {text : '稳定情况\n满分15', max  : 15},
//                                        {text : '贷款情况\n满分25', max  : 25},
//                                        {text : '工作情况\n满分30', max  : 30},
//                                           {text : '家庭情况\n满分15', max  : 15},
//                                         {text : '保障情况\n满分15', max  : 15},
//                                         {text : '其他\n满分20',
//                                        {text : '个人情况\n满分15', max  : 15},
//                                        {text : '信用记录\n满分35', max  : 35},
//                                       {text : '经济实力\n满分30', max  : 30},
//                                           {text : '稳定情况\n满分15', max  : 15},
//                                              {text : '贷款情况\n满分25', max  : 25},
//                                          {text : '工作情况\n满分30', max  : 30},
//                                            {text : '家庭情况\n满分15', max  : 15},
//                                        {text : '保障情况\n满分15', max  : 15},
//                                       {text : '其他\n满分20',    max  : 20}


                                ],
                                name:{
                                    show: true,
                                    formatter: null,
                                    textStyle: {
                                        //设置颜色
//                                             fontSize:0.5e,
                                        color:'#FF0000'
                                    }
                                },


                                radius:200
                            }
                        ],
                    series : [
                        {
                            name: '评估得分',
                            type: 'radar',
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: 'default',
                                        color: ["#000"]
                                    }
                                }
                            },
                            data : [
                                {
                                    value : [12,15,32,54,66,84,52],
                                    //[10,22,20,10,16,15,6,8,15],
                                    name : '评估得分',
                                    itemStyle: {
                                        normal: {
                                            color: '#2b87b5',
                                            label: {
//                                                                   //表示X轴坐标
                                                show: true,
                                                formatter:function(params) {
                                                    return params.value+'%';
                                                }
                                            },
                                            areaStyle: {
                                                color: 'rgba(0,f,0,0.6)'
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                };

            $(window).resize(function () {          //当浏览器大小变化时
                var w=($(window).width());
                //浏览器时下窗口可视区域高度

                console.log('高是'+($(document).height()));
                console.log('宽是'+($(window).width()));
                //浏览器时下窗口文档的高度
//                alert($(document.body).height());   //浏览器时下窗口文档body的高度
//                alert($(document.body).outerHeight(true)); //浏览器时下窗口文档body的总高度 包括border padding margin
                if(800<=w<1024)
                    option1.polar[0].radius=1800;
                if(560<w<800)
                { option1.polar[0].radius=150;
                    console.log("半径是"+option1.polar[0].radius);
                }
                if(0<w<=560)
                {
                    option1.polar[0].radius=100;
                    console.log("半径是"+w);
                }

                myChart1.setOption(option1);

            });

//            myChart1.showLoading();    //数据加载完之前先显示一段简单的loading动画
//
//            var names=[];    //类别数组（实际用来盛放X轴坐标值）
//            var nums=[];    //销量数组（实际用来盛放Y坐标值）
//            $.ajax({
//                type : "post",
//                async : true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
//                url : "TestServlet",    //请求发送到TestServlet处
//                data : {},
//                dataType : "json",        //返回数据形式为json
//                success : function(result) {
//                    //请求成功时执行该函数内容，result即为服务器返回的json对象
//                    if (result) {
//                        for (var i = 0; i < result.length; i++) {
//                            names.push(result[i].name);    //挨个取出类别并填入类别数组
//                        }
//                        for (var i = 0; i < result.length; i++) {
//                            nums.push(result[i].num);    //挨个取出销量并填入销量数组
//                        }
//                        myChart1.hideLoading();    //隐藏加载动画
//                        for (var i = 0; i < names.length; i++) {
//                            option1.polar[0].indicator[i].text = names[i];
//                        }
//                        for (var i = 0; i < nums; i++) {
//                           option1.series[0].data[0].value.push(nums[i]);
//                        }
//

            myChart1.setOption(option1);
//            window.onresize = function(){
//                console.log("1");
//                myChart1.resize();
////                mainWhCountTendencyChart.resize();
////                littleWhCountTendencyChart.resize();
////                cityCountVisionChart.resize();
////                mainWhCountVisionChart.resize();
//console.log("2");
////                        ……
//            }
            console.log( option1.polar[0].radius);
//                    }

//                }
        });
//        });


});