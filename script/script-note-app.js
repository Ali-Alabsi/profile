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
    { src: 'images/note/delete.png', alt: 'Image 1', title: 'حذف الملاحظة' },
    { src: 'images/note/insert cat.png', alt: 'Image 2', title: 'إضافة تصنيف جديد' },
    { src: 'images/note/insert data.png', alt: 'Image 3', title: 'إدخال بيانات الملاحظة' },
    { src: 'images/note/insert note.png', alt: 'Image 4', title: 'إضافة ملاحظة جديدة' },
    { src: 'images/note/list categories.png', alt: 'Image 5', title: 'عرض قائمة التصنيفات' },
    { src: 'images/note/no internet.png', alt: 'Image 6', title: 'لا يوجد اتصال بالإنترنت' },
    { src: 'images/note/no note.png', alt: 'Image 7', title: 'لا توجد ملاحظات' },
    { src: 'images/note/select delete or edit.png', alt: 'Image 8', title: 'اختيار تعديل أو حذف ملاحظة' },
    { src: 'images/note/sign out.png', alt: 'Image 9', title: 'تسجيل الخروج' },
    { src: 'images/note/view note.png', alt: 'Image 10', title: 'عرض تفاصيل الملاحظة' }
];


images.forEach((image, index) => {
    const item = createTodoAppItem(image.src, image.alt, image.title);
    gallery.appendChild(item);

    // إضافة التأثير بعد تأخير
    setTimeout(() => {
        item.classList.add('added');
    }, index * 300); // تأخير بسيط لكل صورة
});

