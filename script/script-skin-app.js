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

const gallery = document.getElementById('todo-skin-gallery');
const images = [
    { src: 'images/skin/add to cart.png', alt: 'Image 1', title: 'اضافة الى السلة' },
    { src: 'images/skin/already Email.png', alt: 'Image 1', title: 'البريد الإلكتروني موجود مسبقًا' },
    { src: 'images/skin/buying.png', alt: 'Image 1', title: 'عملية الشراء' },
    { src: 'images/skin/cart.png', alt: 'Image 1', title: 'السلة' },
    { src: 'images/skin/Home.png', alt: 'Image 1', title: 'الصفحة الرئيسية' },
    { src: 'images/skin/login.png', alt: 'Image 1', title: 'تسجيل الدخول' },
    { src: 'images/skin/Password Weak.png', alt: 'Image 1', title: 'كلمة المرور ضعيفة' },
    { src: 'images/skin/products.png', alt: 'Image 1', title: 'المنتجات' },
    { src: 'images/skin/profile.png', alt: 'Image 1', title: 'الملف الشخصي' },
    { src: 'images/skin/sign up.png', alt: 'Image 1', title: 'التسجيل' },
    { src: 'images/skin/succes Create Account.png', alt: 'Image 1', title: 'نجاح إنشاء الحساب' }
];




images.forEach((image, index) => {
    const item = createTodoAppItem(image.src, image.alt, image.title);
    gallery.appendChild(item);

    // إضافة التأثير بعد تأخير
    setTimeout(() => {
        item.classList.add('added');
    }, index * 300); // تأخير بسيط لكل صورة
});

