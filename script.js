// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.education-card, .skill-card, .certificate-card, .experience-card, .language-card, .contact-item, .project-card');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Project Modal Functions
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (projectId === 'student-management') {
        modalTitle.textContent = 'Student Activity Management System';
        modalBody.innerHTML = `
            <div class="project-detail-section">
                <h3><i class="fas fa-info-circle"></i>Project Overview</h3>
                <p>The Student Activity Management System is a comprehensive web-based application designed to streamline and automate the management of student activities, academic records, and administrative processes in educational institutions.</p>
            </div>
            
            <div class="project-detail-section">
                <h3><i class="fas fa-cogs"></i>Key Features</h3>
                <ul>
                    <li><strong>Student Registration:</strong> Complete student enrollment system with personal and academic details</li>
                    <li><strong>Activity Management:</strong> Track and manage various student activities and events</li>
                    <li><strong>Academic Records:</strong> Maintain detailed academic history and performance records</li>
                    <li><strong>Attendance Tracking:</strong> Automated attendance management system</li>
                    <li><strong>Report Generation:</strong> Generate comprehensive reports for administrators</li>
                    <li><strong>User Management:</strong> Role-based access control for different user types</li>
                    <li><strong>Database Management:</strong> Secure storage and retrieval of student information</li>
                </ul>
            </div>
            
            <div class="project-detail-section">
                <h3><i class="fas fa-tools"></i>Technical Implementation</h3>
                <ul>
                    <li><strong>Frontend:</strong> Responsive web interface built with HTML5, CSS3, and JavaScript</li>
                    <li><strong>Backend:</strong> Server-side logic for data processing and business rules</li>
                    <li><strong>Database:</strong> Structured database design for efficient data storage</li>
                    <li><strong>Security:</strong> Data validation and secure authentication mechanisms</li>
                    <li><strong>User Experience:</strong> Intuitive interface design for easy navigation</li>
                </ul>
            </div>
            
            <div class="project-detail-section">
                <h3><i class="fas fa-code"></i>Technology Stack</h3>
                <div class="tech-stack">
                    <span class="tech-tag">HTML5</span>
                    <span class="tech-tag">CSS3</span>
                    <span class="tech-tag">JavaScript</span>
                    <span class="tech-tag">Database Management</span>
                    <span class="tech-tag">Web Development</span>
                </div>
            </div>
            
            <div class="project-detail-section">
                <h3><i class="fas fa-lightbulb"></i>Project Highlights</h3>
                <ul>
                    <li>Successfully implemented a complete student management solution</li>
                    <li>Designed user-friendly interface for both students and administrators</li>
                    <li>Integrated multiple modules for comprehensive functionality</li>
                    <li>Ensured data security and privacy compliance</li>
                    <li>Created scalable architecture for future enhancements</li>
                </ul>
            </div>
        `;
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    // Add active class to current navigation item
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}); 