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

const gallery = document.getElementById('Learn-app-gallery');
const images = [
    { src: 'images/Easy Learn/Login.png', alt: 'Image 1', title: 'صفحة انشاء حساب جديد' },
    { src: 'images/Easy Learn/signUpSuccessfully.png', alt: 'Image 2', title: 'تم عملية انشاء الحساب بنجاح' },
    { src: 'images/Easy Learn/loginSuccessfully.png', alt: 'Image 3', title: 'تم الدخول بنجاح' },
    { src: 'images/Easy Learn/home.png', alt: 'Image 4', title: 'الرئيسية' },
    { src: 'images/Easy Learn/profile.png', alt: 'Image 5', title: 'البروفايل' },
    { src: 'images/Easy Learn/editProfile.png', alt: 'Image 6', title: 'تعديل البروفايل' },
    { src: 'images/Easy Learn/editProfileSuccessfully.png', alt: 'Image 7', title: 'تم التعديل بنجاح' },
    { src: 'images/Easy Learn/courses.png', alt: 'Image 8', title: 'الكورسات' },
    { src: 'images/Easy Learn/courseDetails.png', alt: 'Image 9', title: 'تفاصيل الدورة' },
    { src: 'images/Easy Learn/courseInfo.png', alt: 'Image 10', title: 'معلومات الدورة' },
    { src: 'images/Easy Learn/courseVideo.png', alt: 'Image 11', title: 'فيديو الكورسات' },
    { src: 'images/Easy Learn/downloadVideo.png', alt: 'Image 12', title: 'تحميل الفيديو' },
    { src: 'images/Easy Learn/coursesCat.png', alt: 'Image 13', title: 'تصنيف الكورسات' },
    { src: 'images/Easy Learn/teacher.png', alt: 'Image 14', title: 'المعلممين' },
    { src: 'images/Easy Learn/teacherDetails.png', alt: 'Image 15', title: 'تفاصيل المعلم' },
    { src: 'images/Easy Learn/teacherCourses.png', alt: 'Image 16', title: 'كورسات المعلمين' },
    { src: 'images/Easy Learn/teacherStudents.png', alt: 'Image 17', title: 'طلاب المعلم' },
    { src: 'images/Easy Learn/teacherChat.png', alt: 'Image 18', title: 'الدردشة مع المعلم' },
    { src: 'images/Easy Learn/chat.png', alt: 'Image 19', title: 'صفحة الدردشة' },
    { src: 'images/Easy Learn/dataCenter.png', alt: 'Image 20', title: 'مركز التواصل' },
    { src: 'images/Easy Learn/search.png', alt: 'Image 21', title: 'البحث' },
    { src: 'images/Easy Learn/searchTeacher.png', alt: 'Image 22', title: 'بحث عن معلم' },
    { src: 'images/Easy Learn/project.png', alt: 'Image 23', title: 'المشاريع' },
    { src: 'images/Easy Learn/projectDetails.png', alt: 'Image 24', title: 'تفاصيل المشروع' },
    { src: 'images/Easy Learn/policy.png', alt: 'Image 25', title: 'سياسة الخصوصية' },
    { src: 'images/Easy Learn/signOut.png', alt: 'Image 26', title: 'تسجيل الخروج' },
    { src: 'images/Easy Learn/Email Already.png', alt: 'Image 27', title: 'الايميل موجود بالفعل' },
    { src: 'images/Easy Learn/emailNotFound.png', alt: 'Image 28', title: 'الايميل غير موجود' },
    { src: 'images/Easy Learn/EmailOrPAsswordError.png', alt: 'Image 29', title: 'كلمة المرور او الايميل خطأ' }
];
images.forEach((image, index) => {
    const item = createTodoAppItem(image.src, image.alt, image.title);
    gallery.appendChild(item);

    // إضافة التأثير بعد تأخير
    setTimeout(() => {
        item.classList.add('added');
    }, index * 300); // تأخير بسيط لكل صورة
});

