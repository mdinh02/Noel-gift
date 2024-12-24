function openGiftPage() {
    const nameInput = document.getElementById('nameInput')?.value.trim().toLowerCase();

    if (!nameInput) {
        alert('Vui lòng nhập tên của bạn!');
        return;
    }

    // Điều hướng theo tên
    switch (nameInput) {
        case 'mai bình':
            window.location.href = 'gift.html?recipient=mai_binh';
            break;
        case 'thu hương':
            window.location.href = 'gift.html?recipient=thu_huong';
            break;
        case 'mỹ oanh':
            window.location.href = 'gift.html?recipient=my_oanh';
            break;
        case 'hiếu đinh':
            window.location.href = 'gift.html?recipient=hieu_dinh';
            break;
        default:
            alert('🎅 Oops! Không tìm thấy món quà dành cho bạn. Hãy thử lại!');
    }
}

// Xử lý hiệu ứng gấu bông
document.addEventListener('DOMContentLoaded', () => {
    const teddy = document.querySelector('.teddy');

    function createHeart() {
        if (!teddy) return; // Kiểm tra nếu teddy không tồn tại

        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '❤️';

        // Đặt vị trí trái tim tại gấu bông
        teddy.appendChild(heart);

        // Animation bay lên
        heart.animate(
            [
                { transform: 'translate(-50%, 0) scale(1)', opacity: 1 },
                { transform: 'translate(-50%, -150px) scale(1.5)', opacity: 0 }
            ],
            {
                duration: 2000,
                easing: 'ease-out'
            }
        );

        // Xóa trái tim sau animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }

    // Tạo trái tim tự động mỗi 1 giây
    setInterval(createHeart, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const recipient = params.get('recipient');

    const recipientTitle = document.getElementById('recipientTitle');
    const giftMessage = document.getElementById('giftMessage');
    const giftGif = document.getElementById('giftGif');
    const hiddenImage = document.getElementById('hiddenImage');
    const clickHint = document.getElementById('clickHint'); // Kiểm tra clickHint

    // Kiểm tra phần tử tồn tại trước khi cấu hình
    if (recipientTitle && giftMessage && giftGif && hiddenImage && clickHint) {
        switch (recipient) {
            case 'my_oanh':
                recipientTitle.innerText = '🎁 A little gift for My girl 🎄';
                giftMessage.innerText = 'Chúc Giáng Sinh ấm áp, trọn vẹn bên người ấy!';
                giftGif.src = 'moanh.webp'; // GIF cho Mỹ Oanh
                hiddenImage.src = 'moanh.jpg'; // Ảnh sau khi click
                giftGif.classList.remove('hidden');
                clickHint.classList.remove('hidden'); // Hiển thị dòng chữ chỉ vào GIF
                break;

            case 'mai_binh':
                recipientTitle.innerText = '🎁 A little gift for Mẹ trẻ🎄';
                giftMessage.innerText = 'Chúc Giáng Sinh vui vẻ, có phút giây được nghỉ ngơi!';
                giftGif.src = 'giphy.webp';
                hiddenImage.src = 'noel(1).jpg';
                giftGif.classList.remove('hidden');
                clickHint.classList.remove('hidden'); // Hiển thị dòng chữ chỉ vào GIF
                break;

            case 'thu_huong':
                recipientTitle.innerText = '🎁 A little gift for Babie🎄';
                giftMessage.innerText = 'Chúc Giáng Sinh vui vẻ, ứ ừ bên người ấy!';
                giftGif.src = 'huong.webp';
                hiddenImage.src = 'noel20.jpg';
                giftGif.classList.remove('hidden');
                clickHint.classList.remove('hidden'); // Hiển thị dòng chữ chỉ vào GIF
                break;

            case 'hieu_dinh':
                recipientTitle.innerText = '🎁 A little gift for My Hidi 🎄';
                giftMessage.innerText = 'Chúc Giáng Sinh vui vẻ my dear!';
                giftGif.src = 'hidi.webp';
                hiddenImage.src = 'hidi.jpg';
                giftGif.classList.remove('hidden');
                clickHint.classList.remove('hidden'); // Hiển thị dòng chữ chỉ vào GIF
                break;

            default:
                recipientTitle.innerText = '🎁 Không Tìm Thấy Quà!';
                giftMessage.innerText = '🎄 Hãy thử lại!';
                break;
        }

        // Xử lý click vào GIF
        giftGif.addEventListener('click', () => {
            giftGif.classList.add('hidden'); // Ẩn GIF
            hiddenImage.classList.remove('hidden'); // Hiển thị hình ảnh
            clickHint.classList.add('hidden'); // Ẩn dòng chữ chỉ vào GIF
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const musicId = 'backgroundMusic';

    // Kiểm tra xem nhạc đã khởi tạo chưa
    if (!sessionStorage.getItem('musicInitialized')) {
        sessionStorage.setItem('musicInitialized', 'true');
        sessionStorage.setItem('musicSrc', 'https://www.youtube.com/embed/Ioxy-2_h8yQ?autoplay=1&loop=1&playlist=Ioxy-2_h8yQ&controls=0&mute=0');
    }

    // Nếu iframe nhạc chưa tồn tại, tạo mới
    if (!document.getElementById(musicId)) {
        const iframe = document.createElement('iframe');
        iframe.id = musicId;
        iframe.src = sessionStorage.getItem('musicSrc');
        iframe.width = '0';
        iframe.height = '0';
        iframe.frameBorder = '0';
        iframe.allow = 'autoplay; fullscreen; picture-in-picture';
        iframe.style = 'position: fixed; z-index: -1; visibility: hidden;';
        document.body.appendChild(iframe);
    }
});

// Xóa sessionStorage khi đóng trình duyệt
window.addEventListener('beforeunload', () => {
    sessionStorage.removeItem('musicInitialized');
    sessionStorage.removeItem('musicSrc');
});

document.addEventListener('DOMContentLoaded', () => {
    const playMusicButton = document.getElementById('playMusicButton');
    const musicIframe = document.getElementById('backgroundMusic');

    if (playMusicButton && musicIframe) {
        playMusicButton.addEventListener('click', () => {
            musicIframe.src = 'https://www.youtube.com/embed/Ioxy-2_h8yQ?autoplay=1&loop=1&playlist=Ioxy-2_h8yQ&controls=0&mute=0';
            playMusicButton.style.display = 'none'; // Ẩn nút sau khi nhạc phát
        });
    }
});



