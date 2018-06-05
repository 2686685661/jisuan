<?php

    define("WENHUA_MAX",750);
    define("ZHUANYA_MAX",150);

    $wenhua = isset($_POST['wenhua']) ?  trim($_POST['wenhua']) : '';
    $zhuanye = isset($_POST['zhuanye']) ? trim($_POST['zhuanye']) : '';
    if(($wenhua == '' || $zhuanye == '') || ($wenhua == false || $zhuanye == false)) echo responseToJson(1,'请填写文化课成绩和专业统考成绩！');
    $zonghe = round(math_add(math_mul(math_mul(math_div($wenhua,WENHUA_MAX),100),0.4),math_mul(math_mul(math_div($zhuanye,ZHUANYA_MAX),100),0.6)),1);
    // echo $zonghe;
    echo responseToJson(0,'',$zonghe);

    function responseToJson($code = 0, $msg = '', $paras = null) {
        $res["code"] = $code;
        $res["msg"] = $msg;
        $res["result"] = $paras;
        return json_encode($res);
    }

    /**
 * 精确加法
 * @param [type] $a [description]
 * @param [type] $b [description]
 */
function math_add($a,$b,$scale = '3') {
    return bcadd($a,$b,$scale);
  }
  /**
   * 精确减法
   * @param [type] $a [description]
   * @param [type] $b [description]
   */
  function math_sub($a,$b,$scale = '3') {
    return bcsub($a,$b,$scale);
  }
  /**
   * 精确乘法
   * @param [type] $a [description]
   * @param [type] $b [description]
   */
  function math_mul($a,$b,$scale = '3') {
    return bcmul($a,$b,$scale);
  }
  /**
   * 精确除法
   * @param [type] $a [description]
   * @param [type] $b [description]
   */
  function math_div($a,$b,$scale = '3') {
    return bcdiv($a,$b,$scale);
  }
  /**
   * 精确求余/取模
   * @param [type] $a [description]
   * @param [type] $b [description]
   */
  function math_mod($a,$b) {
    return bcmod($a,$b);
  }

?>