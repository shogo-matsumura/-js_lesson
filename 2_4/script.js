$(function () {
    $("#button").on("click", function () {
        var inputValue = $("#value").val(); // テキストボックスの値を取得
        if (inputValue === "1") {
            alert("1");
        } else if (inputValue === "2") {
            alert("2");
        }
    });
});