document.addEventListener('DOMContentLoaded', function() {
  // Loader
  setTimeout(function() {
      document.querySelector('.loader').classList.add('fade-out');
  }, 1500);

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

mobileMenuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Close menu when clicking on a link
    if (nav.classList.contains('active')) {
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
});

  // Countdown timer
  const birthday = new Date('April 21, 2024 00:00:00').getTime();
  const countdownTimer = document.getElementById('countdown-timer');
  
  function updateCountdown() {
      const now = new Date().getTime();
      const distance = birthday - now;
      
      if (distance <= 0) {
          countdownTimer.innerHTML = '<div style="grid-column: 1 / -1; font-size: 1.5rem;">🎉 Happy Birthday! 🎉</div>';
          return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      countdownTimer.innerHTML = `
          <div>
              <span>${days}</span>
              <span>Days</span>
          </div>
          <div>
              <span>${hours}</span>
              <span>Hours</span>
          </div>
          <div>
              <span>${minutes}</span>
              <span>Minutes</span>
          </div>
          <div>
              <span>${seconds}</span>
              <span>Seconds</span>
          </div>
      `;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Birthday surprise modal
  const surpriseBtn = document.getElementById('surprise-btn');
  const birthdayModal = document.querySelector('.birthday-modal');
  const closeModal = document.querySelector('.close-modal');
  const closeModalBtn = document.querySelector('.close-modal-btn');
  const birthdayAudio = document.getElementById('birthday-audio');
  
  surpriseBtn.addEventListener('click', function() {
      birthdayModal.classList.add('show');
      birthdayAudio.play();
      createConfetti();
  });
  
  closeModal.addEventListener('click', function() {
      birthdayModal.classList.remove('show');
      birthdayAudio.pause();
      birthdayAudio.currentTime = 0;
  });
  
  closeModalBtn.addEventListener('click', function() {
      birthdayModal.classList.remove('show');
      birthdayAudio.pause();
      birthdayAudio.currentTime = 0;
  });
  
  // Confetti effect
  function createConfetti() {
      const confettiContainer = document.querySelector('.confetti');
      confettiContainer.innerHTML = '';
      
      for (let i = 0; i < 100; i++) {
          const confetti = document.createElement('div');
          confetti.classList.add('confetti-piece');
          
          const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
          const randomSize = Math.random() * 10 + 5;
          const randomLeft = Math.random() * 100;
          const randomAnimationDuration = Math.random() * 3 + 2;
          const randomDelay = Math.random() * 5;
          
          confetti.style.backgroundColor = randomColor;
          confetti.style.width = `${randomSize}px`;
          confetti.style.height = `${randomSize}px`;
          confetti.style.left = `${randomLeft}%`;
          confetti.style.animationDuration = `${randomAnimationDuration}s`;
          confetti.style.animationDelay = `${randomDelay}s`;
          
          confettiContainer.appendChild(confetti);
      }
  }
  
  // Add confetti styles dynamically
  const style = document.createElement('style');
  style.textContent = `
      .confetti-piece {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #f00;
          top: -10px;
          animation: fall linear infinite;
          opacity: 0.8;
          border-radius: 50%;
      }
      
      @keyframes fall {
          to {
              transform: translateY(100vh) rotate(360deg);
          }
      }
  `;
  document.head.appendChild(style);
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
});