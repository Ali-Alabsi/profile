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

const gallery = document.getElementById('todo-app-gallery');
const images = [
    { src: 'images/Todo App/المهام المطوبة.png', alt: 'Image 1', title: 'المهام المطوبة' },
    { src: 'images/Todo App/المهام النشطة.png', alt: 'Image 2', title: 'المهام النشطة' },
    { src: 'images/Todo App/المهام المكتملة.png', alt: 'Image 3', title: 'المهام المكتملة' },
    { src: 'images/Todo App/اضافة مهمة.png', alt: 'Image 4', title: 'اضافة مهمة' },
    { src: 'images/Todo App/تم عملية الاضافة ب نجاح.png', alt: 'Image 5', title: 'تم عملية الاضافة ب نجاح' },
    { src: 'images/Todo App/تعديل او حذف مهمة.png', alt: 'Image 6', title: 'تعديل او حذف مهمة' },
    { src: 'images/Todo App/حذف مهمة.png', alt: 'Image 7', title: 'حذف مهمة' },
    { src: 'images/Todo App/تعديل مهمة.png', alt: 'Image 8', title: 'تعديل مهمة' },
    { src: 'images/Todo App/الاعدادت.png', alt: 'Image 9', title: 'الاعدادت' },
    { src: 'images/Todo App/تعديل بيانات المستخدم.png', alt: 'Image 10', title: 'تعديل بيانات المستخدم' },
    { src: 'images/Todo App/تم عملية التعديل بنجاح.png', alt: 'Image 11', title: 'تم عملية التعديل بنجاح' },
    { src: 'images/Todo App/الاشعارات والوقت المتبقي للمهام.png', alt: 'Image 12', title: 'الاشعارات والوقت المتبقي للمهام' },
    { src: 'images/Todo App/تواصل معنا.png', alt: 'Image 13', title: 'تواصل معنا' },
    { src: 'images/Todo App/سياسة الخصوصية.png', alt: 'Image 14', title: 'سياسة الخصوصية' }
];

images.forEach((image, index) => {
    const item = createTodoAppItem(image.src, image.alt, image.title);
    gallery.appendChild(item);

    // إضافة التأثير بعد تأخير
    setTimeout(() => {
        item.classList.add('added');
    }, index * 300); // تأخير بسيط لكل صورة
});

