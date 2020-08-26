
/* 星星评分的功能 */

window.onload = function () {
            var box = document.getElementById("box");
            var images = box.getElementsByTagName("li");
            var info = document.getElementById('info');
            var starshow = 0;
            // 循环遍历每个星星
            for (var i = 0; i < images.length; i++) {
                images[i].onmouseover = (function (num) {
                    return function () {
                        //再遍历一次所有的星鼠标左边的星变成黄色,有边变成灰色
                        for (var j = 0; j < images.length; j++) {
                            if (j <= num) {
                                //黄色五角星添加类名imageOne
                                images[j].className = "imageOne";
                            } else {
                                images[j].className = "image";
                            }
                        }
                    }
                }(i));//立即调用，把i传给num
                images[i].onmouseup = (function (i) {
                    return function () {
                        starshow = 1+i;
                        info.innerHTML = '你打了'+starshow+'分!'
                    }
                }(i));
            }
        }