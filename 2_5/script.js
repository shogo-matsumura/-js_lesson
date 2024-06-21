$(function () {
    $("#button").on("click", function () {
        let inputValue = $("#value").val(); // テキストボックスの値を取得
        if (inputValue === "1") {
            $("#box").css("background-color", "red"); // 赤に変更
        } else if (inputValue === "2") {
            $("#box").css("background-color", "green"); // 緑に変更
        } else if (inputValue === "3") {
            $("#box").css("background-color", "blue"); // 青に変更
        }
    });
});