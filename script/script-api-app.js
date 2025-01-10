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

const gallery = document.getElementById('todo-api-gallery');
const images = [
    { src: 'images/api/create Account.png', alt: 'Image 1', title: 'انشاء حساب' },
    { src: 'images/api/Done Create Email.png', alt: 'Image 1', title: 'تم إنشاء البريد الإلكتروني' },
    { src: 'images/api/Edit.png', alt: 'Image 1', title: 'تعديل' },
    { src: 'images/api/Email Already.png', alt: 'Image 1', title: 'البريد الإلكتروني موجود بالفعل' },
    { src: 'images/api/login.png', alt: 'Image 1', title: 'تسجيل الدخول' },
    { src: 'images/api/Please Select Image.png', alt: 'Image 1', title: 'يرجى اختيار صورة' },
    { src: 'images/api/View Data.png', alt: 'Image 1', title: 'عرض البيانات' }
];





images.forEach((image, index) => {
    const item = createTodoAppItem(image.src, image.alt, image.title);
    gallery.appendChild(item);

    // إضافة التأثير بعد تأخير
    setTimeout(() => {
        item.classList.add('added');
    }, index * 300); // تأخير بسيط لكل صورة
});

