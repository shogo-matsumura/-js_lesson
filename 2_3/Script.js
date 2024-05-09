$(function () {
    $("#button").on("click", function () {
        $("#button").animate({
            "marginLeft": "450px", // より右方向に移動する距離
            "marginTop": "300px" // より下方向に移動する距離
        }, 2000); // アニメーションの速度を2000ミリ秒（2秒）に設定
    });
});