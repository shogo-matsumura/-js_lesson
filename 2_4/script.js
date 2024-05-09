$(function () {
    $("#button").on("click", function () {
        let inputValue = $("#value").val(); // テキストボックスの値を取得
        alert(inputValue); // 入力された値をアラートする
    });
});
