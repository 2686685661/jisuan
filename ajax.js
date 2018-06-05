$(document).ready(function(){

    $("#jisuan").click(() => {
        let wenhuaNUmber = trim($("#exampleInputEmail1").val());
        let zhuanyeNumber = trim($("#exampleInputPassword1").val());
        if(wenhuaNUmber == '' || zhuanyeNumber == '') {
            alert("请填写文化课成绩和专业统考成绩！");
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
        let p = '<p class="text-primary">综合分数：' + val + '</p>';
        $("#zonghe").append(p);
    }
});


