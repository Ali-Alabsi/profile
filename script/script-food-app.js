function createTodoAppItem(imageSrc, altText, title) {
    const div = document.createElement('div');
    div.className = 'col-lg-2 col-md-6 col-sm-12 todo-app-item';
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = altText;
    img.className = 'img-fluid';
    
    const h4 = document.createElement('h4');
    h4.textContent = title;
    
    div.appendChild(img);
    div.appendChild(h4);
    
    return div;
}

const gallery = document.getElementById('todo-note-gallery');
const images = [
    { src: 'images/food/cart.png', alt: 'Image 1', title: 'صفحة السلة' },
    { src: 'images/food/home.png', alt: 'Image 1', title: 'الصفحة الرئيسية' },
    { src: 'images/food/login.png', alt: 'Image 1', title: 'تسجيل الدخول' },
    { src: 'images/food/profile.png', alt: 'Image 1', title: 'الملف الشخصي' },
    { src: 'images/food/select image.png', alt: 'Image 1', title: 'اختيار صورة' },
    { src: 'images/food/select.png', alt: 'Image 1', title: 'اختيار الطعام' },
    { src: 'images/food/sign up.png', alt: 'Image 1', title: 'التسجيل' }
];



images.forEach((image, index) => {
    const item = createTodoAppItem(image.src, image.alt, image.title);
    gallery.appendChild(item);

    // إضافة التأثير بعد تأخير
    setTimeout(() => {
        item.classList.add('added');
    }, index * 300); // تأخير بسيط لكل صورة
});

