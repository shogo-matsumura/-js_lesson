$(function () {
    // ここに処理を記述
    console.log('button');
    let button_tag = document.getElementById('button');
    button_tag.addEventListener("click", function () {
        alert("ボタンをクリックしました");
    });
});