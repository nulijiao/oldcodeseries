/**
 * Created by jiaoge on 2017/9/6.
 */
var num=document.getElementById('num');
      var like=document.getElementById('heart');
        var can = document.getElementById("canvas1");
        var TIP = document.getElementById('tip');

        // var index = parseInt(window.getComputedStyle(can, null)['width']) / 5;
        // var h = parseInt(window.getComputedStyle(can, null)['height']);
        var a3 = [28, 68, 40, 19, 96];
        // console.log("高度" + h);
        // console.log("宽度" + index);
        // var pos = [];
        var label= ["Ruby", "jQuery", "Java", "ASP.Net", "PHP"];
        TIP.innerHTML="";

        for (var i = 0; i<a3.length; i++) {
            TIP.innerHTML+= label[i] + ":" + a3[i] + "%";
       // console.log("1");

        }

$("#heart").on('mouseover',function () {
   $(this).css({backgroundImage:"url(../image/rating-on.png)"});
});
$("#heart").on("click",function () {
    $(this).css({backgroundImage:"url(../image/rating-on.png)"});
    var num=parseInt($("#num").text())+1;
    console.log(num);
    $("#num").text(num+"");
    $("#heart").off('click');
});
like.onmouseout=function () {
    like.style.backgroundImage="url(../image/rating-on.png)"
};
setTimeout(function () {
    can.onmousemove = function (e)
    {
        e = event || window.event;
//                    for (var i = 0; i < a3.length; i++)
//                    {
//                        TIP.innerHTML+=label[i]+":"+a3[i]};
////                        {
//                        var a = {
//                            left: (30 + (i * index)),
//                            top: (h - ((a3[i]) / 100) * h)
//                        };
//                        e.pos.push(a);
//                        }


//                        if (e.offsetX == (30 + (i * index)) )
//                              {
//                                  if(e.offsetY ==(h-((a3[i])/100)*h))
//
















        // setTimeout(function () {用timeout可以解决出现花但是离开的时候应该不执行了却不能灵活的消失
        TIP.style.display = "block";
        console.log("decdg" + e.offsetX);
        TIP.style.left = e.offsetX+ "px";
        TIP.style.top = e.offsetY+ "px";
//                                TIP.innerHTML =label[i];
        console.log("deHJBFg" + e.offsetY);
        // can.setCapture&& can.setCapture();
        // },150);
        //利用延迟防止出现小物块花
        return false;
//                                 }
//       e.stopPropagation();




    }

},150);


   can.onmouseout=function () {
       TIP.style.display = "none";
       can.releaseCapture && can.releaseCapture();
}




