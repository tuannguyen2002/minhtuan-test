import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Đăng ký plugin ScrollTrigger của GSAP để sử dụng các tính năng liên quan đến cuộn trang

gsap.set('.panel', { zIndex: (i, target, targets) => targets.length - i }); // Thiết lập zIndex cho các phần tử .panel để đảm bảo thứ tự hiển thị từ trên xuống

var images = gsap.utils.toArray('.panel:not(.purple)'); // Chuyển tất cả các phần tử .panel (trừ .purple) thành mảng để dễ thao tác

images.forEach((image, i) => {
    // Duyệt qua từng phần tử trong mảng images

    var tl = gsap.timeline({
        // Tạo một timeline cho mỗi image

        scrollTrigger: {
            // Cấu hình ScrollTrigger cho timeline
            trigger: 'section.black', // Phần tử kích hoạt cuộn là section.black
            start: () => 'top -' + window.innerHeight * (i + 0.5), // Điểm bắt đầu cuộn dựa trên chiều cao cửa sổ và chỉ số phần tử
            end: () => '+=' + window.innerHeight, // Điểm kết thúc là chiều cao cửa sổ
            scrub: true, // Kết nối mượt mà giữa cuộn trang và timeline
            toggleActions: 'play none reverse none', // Hành động khi vào/thoát trigger
            invalidateOnRefresh: true, // Cập nhật giá trị khi làm mới trình duyệt
        },
    });

    tl.to(image, { height: 0 }); // Thu nhỏ chiều cao của image về 0 khi cuộn qua
});

gsap.set('.panel-text', { zIndex: (i, target, targets) => targets.length - i }); // Thiết lập zIndex cho các phần tử .panel-text

var texts = gsap.utils.toArray('.panel-text'); // Chuyển tất cả các phần tử .panel-text thành mảng để dễ thao tác

texts.forEach((text, i) => {
    // Duyệt qua từng phần tử trong mảng texts

    var tl = gsap.timeline({
        // Tạo một timeline cho mỗi text

        scrollTrigger: {
            // Cấu hình ScrollTrigger cho timeline
            trigger: 'section.black', // Phần tử kích hoạt cuộn là section.black
            start: () => 'top -' + window.innerHeight * i, // Điểm bắt đầu cuộn dựa trên chiều cao cửa sổ và chỉ số phần tử
            end: () => '+=' + window.innerHeight, // Điểm kết thúc là chiều cao cửa sổ
            scrub: true, // Kết nối mượt mà giữa cuộn trang và timeline
            toggleActions: 'play none reverse none', // Hành động khi vào/thoát trigger
            invalidateOnRefresh: true, // Cập nhật giá trị khi làm mới trình duyệt
        },
    });

    tl.to(text, { duration: 0.33, opacity: 1, y: '50%' }) // Hiển thị text với opacity: 1 và di chuyển lên 50%
        .to(text, { duration: 0.33, opacity: 0, y: '0%' }, 0.66); // Làm mờ text và đưa về vị trí ban đầu
});

ScrollTrigger.create({
    // Tạo một ScrollTrigger chính để điều khiển toàn bộ hiệu ứng
    trigger: 'section.black', // Phần tử kích hoạt cuộn là section.black
    scrub: true, // Kết nối mượt mà giữa cuộn trang và các hiệu ứng
    markers: true, // Hiển thị các điểm đánh dấu để debug
    pin: true, // Ghim section.black trong suốt quá trình cuộn
    start: () => 'top top', // Điểm bắt đầu: đỉnh section.black trùng với đỉnh cửa sổ
    end: () => '+=' + (images.length + 1) * window.innerHeight, // Điểm kết thúc dựa trên số lượng images và chiều cao cửa sổ
    invalidateOnRefresh: true, // Tái tính toán khi làm mới trình duyệt
});
