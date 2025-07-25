const btnCompliment = document.getElementById("btn-compliment");
const btnTease = document.getElementById("btn-tease");
const btnJoke = document.getElementById("btn-joke");
const question = document.getElementById("question");
const message = document.getElementById("message");
const heartContainer = document.getElementById("heart-container");
const QuỳnhMood = document.getElementById("Quỳnh-mood");
const moodDisplay = document.getElementById("mood-display");

let currentMood = "😊";
let interactionCount = 0;

// Lời khen dành cho Quỳnh
const compliments = [
    "Quỳnh xinh quá! Như công chúa vậy! 👑✨",
    "Quỳnh cười đẹp nhất thế giới luôn! 😍💕",
    "Quỳnh thông minh ghê, ai cũng phải học hỏi! 🧠⭐",
    "Quỳnh dễ thương như gấu bông ấy! 🧸💖",
    "Quỳnh là sunshine của mọi người! ☀️🌈",
    "Quỳnh có style quá đỉnh! Fashion icon luôn! 👗✨",
    "Quỳnh nấu ăn ngon nhất vũ trụ! 👩‍🍳🍜",
    "Quỳnh giọng nói ngọt như mật ong! 🍯🎵",
    "Quỳnh là người bạn tuyệt vời nhất! 👭💝",
    "Quỳnh làm gì cũng cute hết! 🥰💫"
];

// Câu chọc vui Quỳnh (nhẹ nhàng, dễ thương)
const teases = [
    "Quỳnh ơi, hôm Quỳnhy Quỳnh quên chải tóc à? 😜💇‍♀️",
    "Quỳnh có biết Quỳnh cute đến mức nào không? Nguy hiểm đó! 😏💘",
    "Quỳnh ăn nhiều kẹo quá, ngọt hết cả người rồi! 🍭😋",
    "Quỳnh ngủ nướng hoài, lười như gấu trúc! 🐼😴",
    "Quỳnh selfie hoài, điện thoại sắp hết bộ nhớ rồi! 📱🤳",
    "Quỳnh shopping hoài, ví tiền khóc rồi đó! 💸👜",
    "Quỳnh xem phim hoài, mắt thành cú vọ luôn! 🦉📺",
    "Quỳnh ăn sQuỳnhck hoài, sắp thành chuột hamster! 🐹🍿",
    "Quỳnh thích màu hồng quá, sắp thành flamingo! 🦩💗",
    "Quỳnh cười to quá, hàng xóm tưởng động đất! 😂🏠"
];

// Jokes dành cho Quỳnh
const jokes = [
    "Tại sao Quỳnh luôn mang theo gương? Vì Quỳnh muốn thế giới đẹp hơn! 🪞✨",
    "Quỳnh biết tại sao ong thích Quỳnh không? Vì Quỳnh ngọt như mật! 🐝🍯",
    "Tại sao Quỳnh không bao giờ lạc đường? Vì Quỳnh là GPS của trái tim mọi người! 📍💕",
    "Quỳnh có biết tại sao mặt trời mọc không? Để nhìn Quỳnh thức dậy! ☀️😊",
    "Tại sao Quỳnh không thể làm ninja? Vì Quỳnh quá sáng, không thể ẩn nấp! 🥷✨",
    "Quỳnh biết tại sao cầu vồng có 7 màu không? Vì thiếu màu Quỳnh! 🌈👗",
    "Tại sao Quỳnh không thể làm thám tử? Vì Quỳnh quá dễ thương, tội phạm sẽ đầu hàng ngay! 🕵️‍♀️💖",
    "Quỳnh có biết tại sao sao băng rơi không? Vì chúng muốn được Quỳnh ước! ⭐🌠",
    "Tại sao Quỳnh không thể làm phù thủy? Vì Quỳnh đã có phép thuật tự nhiên rồi! 🧙‍♀️✨",
    "Quỳnh biết tại sao hoa hướng dương quay theo mặt trời không? Vì chúng tập luyện để quay theo Quỳnh! 🌻😄"
];

// Mood emojis
const moods = {
    happy: ["😊", "😄", "🥰", "😍", "🤗"],
    laughing: ["😂", "🤣", "😆", "😹", "🤪"],
    blushing: ["😊", "☺️", "😌", "🥰", "😳"],
    excited: ["🤩", "😍", "🥳", "✨", "🌟"]
};

// Tạo emoji bay
function createFlyingEmoji(emoji) {
    const emojiElement = document.createElement('div');
    emojiElement.classQuỳnhme = 'heart';
    emojiElement.innerHTML = emoji;
    emojiElement.style.left = Math.random() * 100 + '%';
    emojiElement.style.animationDuration = (Math.random() * 2 + 2) + 's';
    emojiElement.style.fontSize = Math.random() * 10 + 15 + 'px';
    heartContainer.appendChild(emojiElement);

    setTimeout(() => {
        emojiElement.remove();
    }, 4000);
}

// Update mood của Quỳnh
function updateMood(moodType) {
    const moodEmojis = moods[moodType];
    currentMood = moodEmojis[Math.floor(Math.random() * moodEmojis.length)];
    moodDisplay.innerHTML = currentMood;
    QuỳnhMood.classList.remove('hidden');
}

// Shake effect nhẹ nhàng
function gentleShake() {
    document.body.style.animation = 'shake 0.3s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 300);
}

// Event khi bấm "Khen Quỳnh"
btnCompliment.addEventListener("click", function () {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    message.innerHTML = compliment;
    message.classQuỳnhme = 'success';
    message.classList.remove('hidden');

    updateMood('blushing');

    // Tạo emoji bay
    const emojis = ['💖', '✨', '🌟', '💕', '🥰'];
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            createFlyingEmoji(randomEmoji);
        }, i * 200);
    }

    question.innerHTML = "Quỳnh đang blush đó! 😊💕";
    interactionCount++;
});

// Event khi bấm "Chọc Quỳnh"
btnTease.addEventListener("click", function () {
    const tease = teases[Math.floor(Math.random() * teases.length)];
    message.innerHTML = tease;
    message.classQuỳnhme = 'retry';
    message.classList.remove('hidden');

    updateMood('laughing');

    // Tạo emoji bay
    const emojis = ['😜', '😏', '🤭', '😋', '🙃'];
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            createFlyingEmoji(randomEmoji);
        }, i * 300);
    }

    question.innerHTML = "Hehe, Quỳnh cười chưa? 😜";
    gentleShake();
    interactionCount++;
});

// Event khi bấm "Kể Joke"
btnJoke.addEventListener("click", function () {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    message.innerHTML = joke;
    message.classQuỳnhme = 'success';
    message.classList.remove('hidden');

    updateMood('laughing');

    // Tạo emoji bay
    const emojis = ['😂', '🤣', '😆', '🎭', '🎪'];
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            createFlyingEmoji(randomEmoji);
        }, i * 250);
    }

    question.innerHTML = "Joke có funny không Quỳnh? 😄";
    interactionCount++;
});

// Special messages sau một số lần tương tác
function checkSpecialMessages() {
    if (interactionCount === 5) {
        question.innerHTML = "Wow! Quỳnh đã chơi 5 lần rồi! 🎉";
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                setTimeout(() => createFlyingEmoji('🎉'), i * 100);
            }
        }, 500);
    } else if (interactionCount === 10) {
        question.innerHTML = "Quỳnh là fan cứng của app này rồi! 🏆";
        updateMood('excited');
    } else if (interactionCount % 15 === 0 && interactionCount > 0) {
        question.innerHTML = "Quỳnh vẫn chưa chán à? Cute quá! 💖";
        updateMood('happy');
    }
}

// Thêm event listener cho tất cả buttons
[btnCompliment, btnTease, btnJoke].forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(checkSpecialMessages, 1000);
    });
});

// Tạo emoji bay liên tục
setInterval(() => {
    const backgroundEmojis = ['💫', '⭐', '✨', '🌸', '🦋'];
    const randomEmoji = backgroundEmojis[Math.floor(Math.random() * backgroundEmojis.length)];
    createFlyingEmoji(randomEmoji);
}, 4000);

// Khởi tạo
document.addEventListener('DOMContentLoaded', function () {
    // Tạo một vài emoji ban đầu
    const initialEmojis = ['💖', '🌟', '✨'];
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const randomEmoji = initialEmojis[Math.floor(Math.random() * initialEmojis.length)];
            createFlyingEmoji(randomEmoji);
        }, i * 800);
    }

    // Hiển thị mood ban đầu sau 2 giây
    setTimeout(() => {
        updateMood('happy');
    }, 2000);
});

// Thêm CSS cho shake body nhẹ nhàng
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-3px); }
        75% { transform: translateX(3px); }
    }
`;
document.head.appendChild(style);