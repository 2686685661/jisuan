$(document).ready(function(){

    $("#jisuan").click(() => {
        let wenhuaNUmber = trim($("#exampleInputEmail1").val());
        let zhuanyeNumber = trim($("#exampleInputPassword1").val());
        if(wenhuaNUmber == '' || zhuanyeNumber == '') {
            jingGao("请填写文化课成绩和专业统考成绩！");
            return;
        }

        $.post("./js_suan.php",{
            wenhua:wenhuaNUmber,
            zhuanye:zhuanyeNumber
        },(data,status) => {
            let dataJson = JSON.parse(data);
            if(status =='success' && dataJson.code == 0) {
                insert(dataJson.result);
            }
        })

        

    })
    
    let trim = (str) => {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }

    let insert = (val) => {
        $("#zonghe").empty();
        let p = '<p class="text-primary">综合分计算：' + val + '</p>';
        $("#zonghe").append(p);
    }

    let jingGao = (str) => {
        $("#jinggao").css("display","none");
        let jinggao = '<div id="jinggao" class="alert alert-warning alert-dismissible" role="alert">'
        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
        +'<strong>Warning!</strong>'
        +str+'</div>';
        $(".container").prepend(jinggao);
        

    }
});


