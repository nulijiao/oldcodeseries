// /**
//  * Created by jiaoge on 2017/8/28.
//  */
//    $(function () {
//        document.onreadystatechange=function ()
//        {
//            console.log(document.readyState);
//
//            if(document.readyState=="complete")
//            {
//                $("#load").fadeOut();
//            }
//        }
//
//    // });
//        $("#smallLog").on("click",function () {
//            $(window).attr('location','log.html');
//        });
//        $("ul.nav li").on("click",function () {
//            $(this).addClass("active").siblings().removeClass("active");
//        });
//
//        $("#fullpage").scroll(function () {
//            console.log("鼠标滚动");
//            $("#last").addClass("LAST");
//            $("#dat").addClass("data");
//            $("#more").addClass("more");
//            $("#login img").addClass("loginImg");
//            $("#par").addClass("PAR");
//            $("#widthLanguage h1").addClass("widthLanguageH1");
//
//        });
//
//
//
//
//    });
// //    hover果然  不冒泡
$(function () {


    document.onreadystatechange=function ()
    {


        if(document.readyState=="complete")
        {
            $("#load").fadeOut();
        }
    }

//文档就绪函数在不同js里面必须保证最后只有一个，一共一个
//script中的js加载就是之前需要用的相关js先加载或者用require.js





});