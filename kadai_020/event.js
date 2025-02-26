const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    console.log('ボタンをクリックしました');
    // メッセージ表示用の要素にメッセージを設定
    text.textContent = 'ボタンをクリックしました';
});

