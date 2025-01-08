document.addEventListener('DOMContentLoaded', function() {
    function createProjectItem(imageSrc, altText, title, link) {
        const div = document.createElement('div');
        div.className = 'col-lg-4 col-md-6 col-sm-12 mb-4';
        
        const a = document.createElement('a');
        a.href = link;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-project';
        
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = altText;
        img.className = 'img-fluid';
        
        const h4 = document.createElement('h4');
        h4.textContent = title;
        
        itemDiv.appendChild(img);
        itemDiv.appendChild(h4);
        a.appendChild(itemDiv);
        div.appendChild(a);
        return div;
    }

    const gallery = document.getElementById('project-gallery');
    const projects = [
        { src: './images/Learn App.png', alt: 'Learn App', title: 'تطبيق تعليمي للطلاب', link: 'learn-app.html' },
        { src: './images/Learn App.png', alt: 'Learn App Teacher', title: 'تطبيق تعليمي للمعلم', link: 'learn-app-teacher.html' },
        { src: './images/ToDo App.png', alt: 'ToDo App', title: 'تطبيق ادارة المهام', link: 'todo-app.html' },
        { src: './images/1.jpg', alt: 'Teacher App', title: 'تطبيق للمعلم', link: '#' }
    ];

    projects.forEach(project => {
        gallery.appendChild(createProjectItem(project.src, project.alt, project.title, project.link));
    });
});