// Detect elements on scroll
function onScrollAnimation() {
    const animatedElements = document.querySelectorAll(".animated.hidden");
    animatedElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      // Check if element is in viewport
      if (elementPosition < screenHeight - 100) {
        element.classList.remove("hidden");
      }
    });
  }
  
  // Attach scroll event
  window.addEventListener("scroll", onScrollAnimation);
  
  // Initial check
  onScrollAnimation();
  
  
 ///////////////////////////

 // Function to handle animations with Intersection Observer
function initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hidden"); // إزالة الفئة المخفية لتفعيل الحركة
            observer.unobserve(entry.target); // إلغاء المراقبة لتجنب التكرار
          }
        });
      },
      {
        threshold: 0.2, // نسبة ظهور العنصر في نافذة العرض قبل تنفيذ الحركة
      }
    );
  
    // استهداف العناصر المخفية داخل القسم #service
    const hiddenElements = document.querySelectorAll("#service .hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }
  
  // تشغيل الدالة عند تحميل الصفحة
  document.addEventListener("DOMContentLoaded", initScrollAnimations);
  
  document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("#navbar-1");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // إضافة الفئة عند التمرير
      } else {
        navbar.classList.remove("scrolled"); // إزالة الفئة عند العودة للأعلى
      }
    });
  });
 //////////////
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
//////////////////////////////////
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

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('Learn-app-gallery');
    const images = [
        { src: 'images/Easy Learn Teacher/signIn.png', alt: '', title: 'انشاء حساب جديد' },
        { src: 'images/Easy Learn Teacher/login.png', alt: '', title: 'تسجيل الدخول' },
        { src: 'images/Easy Learn Teacher/profile.png', alt: '', title: 'البروفايل' },
        { src: 'images/Easy Learn Teacher/addCourse.png', alt: '', title: 'اضافة كورس جديد' },
        { src: 'images/Easy Learn Teacher/addCourse2.png', alt: '', title: 'يتبع اضافة الكورسات' },
        { src: 'images/Easy Learn Teacher/editCourse.png', alt: '', title: 'تعديل الكورسات' },
        { src: 'images/Easy Learn Teacher/editCourseSuccessfully.png', alt: '', title: 'تم عملية تعديل الكورسات بنجاح' },
        { src: 'images/Easy Learn Teacher/deleteVideoSuccessfully.png', alt: '', title: 'حذف محاضرة من الكورس' },
        { src: 'images/Easy Learn Teacher/courses.png', alt: '', title: 'الكورسات الخاصة بالمعلم' },
        { src: 'images/Easy Learn Teacher/addProject.png', alt: '', title: 'اضافة المشروع' },
        { src: 'images/Easy Learn Teacher/viewProject.png', alt: '', title: 'عرض المشاريع' },
        { src: 'images/Easy Learn Teacher/chat.png', alt: '', title: 'الدردشات' },
        { src: 'images/Easy Learn Teacher/signOut.png', alt: '', title: 'تسجيل الخروج' }
    ];

   
    images.forEach((image, index) => {
        const item = createTodoAppItem(image.src, image.alt, image.title);
        gallery.appendChild(item);

        // إضافة التأثير بعد تأخير
        setTimeout(() => {
            item.classList.add('added');
        }, index * 300); // تأخير بسيط لكل صورة
    });
}

);

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

