//换背景颜色
var jiShu = 0;
document.querySelector(".xiaoTaiYang").addEventListener("click", dianji);

function dianji() {
    jiShu++;
    if (jiShu == 3) {
        jiShu = 0;
    }

    if(jiShu==1){
        document.querySelector(".img").addEventListener("click",dianji1);
        function dianji1(){
            document.querySelector("body").style.backgroundColor = "Wheat";
        }
        dianji1();
    }else if(jiShu==2){
        document.querySelector(".img").addEventListener("click", dianji2);
        function dianji2() {
            document.querySelector("body").style.backgroundColor = "white";
        }
        dianji2();
    }

}


//键盘点击事件
document.onkeydown = function (event) {
    var e = event || window.event;
    if (e && e.keyCode == 76) { // 按 L
        document.querySelector("body").style.backgroundColor = "white";
    }
    if (e && e.keyCode == 68) { // 按 D
    document.querySelector("body").style.backgroundColor = "Wheat";
    }

}

//判读输入的内容是否正确
document.getElementById("button-1").addEventListener("click",tijiao);
function tijiao(){
    let biao = document.getElementById("BT").value;
    let xingM = document.getElementById("XM").value;
    let haoM = document.getElementById("HM").value;
    let neiR = document.getElementById("NR").value;
    let shijian = new Date();

    if (biao == "") {
        alert("标题不能为空");
        return false;
    }else if(xingM == "") {
        let xx = document.getElementById("XM");
        let txt = document.createTextNode("匿名");
        xx.appendChild(txt);
    }

    if(haoM == ""){
        alert("手机号码不能为空");
        return false;
    }else if(haoM.length != 11){
        alert("请输入正确的手机");
        return false;
    }

    if(neiR.length <= 10){
        alert("需要输入的文本大于10")
    }

    alert(biao + "\r" + xingM + "\r" + haoM + neiR + "\r" + shijian);
    alert("感谢您对学堂的支持。我们将及时和您联系")
}


//清除按钮
document.getElementById("button-2").addEventListener("click", qingchu);
function qingchu(){
    document.getElementById("BT").value = "";
    document.getElementById("XM").value = "";
    document.getElementById("HM").value = "";
    document.getElementById("NR").value = "";

}



