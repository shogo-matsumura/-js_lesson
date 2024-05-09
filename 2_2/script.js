// 初期のボタンの色を設定
let currentButtonColor = 'red';

// 3つのボタンのIDを格納した配列を作成
const buttonIds = ['button1', 'button2', 'button3'];

// 各ボタンにクリックイベントを追加
buttonIds.forEach(buttonId => {
    document.getElementById(buttonId).addEventListener('click', function () {
        // すべてのボタンの背景色をクリア
        buttonIds.forEach(id => {
            document.getElementById(id).style.background = '';
        });
        // クリックされたボタンの背景色を変更
        document.getElementById(buttonId).style.background = currentButtonColor;
    });
});