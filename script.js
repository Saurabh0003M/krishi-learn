// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const isExpanded = !mobileMenu.classList.contains('hidden');
            menuBtn.setAttribute('aria-expanded', isExpanded);
        });
    }
    
    // Counter animation for statistics
    const counters = document.querySelectorAll('#farmers-count, #courses-count, #success-rate, #schemes-count');
    const speed = 200;
    
    if (counters) {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target') || 
                          (counter.id === 'farmers-count' ? 50000 : 
                           counter.id === 'courses-count' ? 120 : 
                           counter.id === 'success-rate' ? 95 : 15);
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
            
            function updateCount() {
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            }
        });
    }
    
    // Scroll reveal animation
    function revealElements() {
        const reveals = document.querySelectorAll('.reveal');
        
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', revealElements);
    // Initial call
    revealElements();
    
    // AI Help Form Submission
    const aiHelpForm = document.getElementById('ai-help-form');
    if (aiHelpForm) {
        aiHelpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const plantType = document.getElementById('plant-type').value;
            const issue = document.getElementById('issue').value;
            
            if (!plantType || !issue) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = aiHelpForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Analyzing...';
            
            setTimeout(() => {
                alert('Thank you for your submission. Our AI system is analyzing your plant issue. You will receive recommendations shortly.');
                aiHelpForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 2000);
        });
    }
    
    // File upload interaction
    const fileUpload = document.getElementById('file-upload');
    const uploadArea = fileUpload ? fileUpload.closest('div') : null;
    
    if (fileUpload && uploadArea) {
        uploadArea.addEventListener('click', function() {
            fileUpload.click();
        });
        
        uploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            uploadArea.classList.add('border-green-500', 'bg-green-50');
        });
        
        uploadArea.addEventListener('dragleave', function() {
            uploadArea.classList.remove('border-green-500', 'bg-green-50');
        });
        
        uploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            uploadArea.classList.remove('border-green-500', 'bg-green-50');
            
            if (e.dataTransfer.files.length) {
                fileUpload.files = e.dataTransfer.files;
                const fileName = fileUpload.files[0].name;
                uploadArea.querySelector('p').textContent = `File ready: ${fileName}`;
            }
        });
        
        fileUpload.addEventListener('change', function() {
            if (fileUpload.files.length) {
                const fileName = fileUpload.files[0].name;
                uploadArea.querySelector('p').textContent = `File ready: ${fileName}`;
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});