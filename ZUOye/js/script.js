const buyBtn = document.getElementById('buyBtn');
const noBuyBtn = document.getElementById('noBuyBtn');
const container = document.querySelector('.container');
const illustration = document.querySelector('.illustration');
const title = document.querySelector('h1');
const desc = document.querySelector('p');

// 记录不买按钮被点击的次数
let clickCount = 0;
// 不买按钮点击时，买按钮会越来越大
noBuyBtn.addEventListener('click', () => {
    clickCount++;
    // 文案变化
    const texts = [
        '呜...你手滑了对不对？',
        '再拒绝我，我就变成小哭包啦！',
        '求求你啦，给我买一颗嘛~'
    ];
    title.textContent = texts[Math.min(clickCount - 1, texts.length - 1)];
    desc.textContent = '想做你的小朋友 ❤️';
    // 图片变成哭脸
    illustration.src = './img/crying.png';
    // 让买按钮变大，每次点击放大1.1倍
    buyBtn.style.transform = `scale(${1 + clickCount * 0.1})`;
    // 当买按钮大到一定程度，把不买按钮藏起来
    if (clickCount >= 5) {
        noBuyBtn.style.display = 'none';
    }
});

// 买按钮点击时，触发开心效果
buyBtn.addEventListener('click', () => {
    title.textContent = '哇，你最好啦';
    desc.textContent = '今天的糖和你都超甜✨';
    illustration.src = './img/happy.png';
    // 爱心飘落
    const heartCount = 30;
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-20px';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
    // 重置买按钮大小，方便再次点击测试
    buyBtn.style.transform = 'scale(1)';
    noBuyBtn.style.display = 'block';
    clickCount = 0;
});