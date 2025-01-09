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
  