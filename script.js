document.addEventListener("DOMContentLoaded", function () {
    
    const images = document.querySelectorAll(".gallery img");
  
    images.forEach(img => {
      img.addEventListener("click", () => {
        const modal = document.getElementById("image-modal");
        const modalImg = document.getElementById("modal-image");
        const modalTitle = document.getElementById("modal-title");
        const modalDesc = document.getElementById("modal-description");
  
        modal.classList.remove("hidden");
        modalImg.src = img.src;
        modalTitle.textContent = img.dataset.title;
        modalDesc.textContent = img.dataset.description;
      });
    });
  
    window.addEventListener("click", (e) => {
      const modal = document.getElementById("image-modal");
      if (e.target === modal) {
        closeModal();
      }
    });
  
    
    const adultInput = document.getElementById('adults');
    const kidInput = document.getElementById('kids');
    const priceDisplay = document.getElementById('totalPrice');
  
    function calculatePrice() {
      if (adultInput && kidInput && priceDisplay) {
        const adults = parseInt(adultInput.value) || 0;
        const kids = parseInt(kidInput.value) || 0;
        const price = (adults * 20000) + (kids * 15000);
        priceDisplay.textContent = price.toLocaleString();
      }
    }
  
    if (adultInput && kidInput) {
      adultInput.addEventListener('input', calculatePrice);
      kidInput.addEventListener('input', calculatePrice);
      calculatePrice(); 
    }
  
    window.nextStep = function () {
      document.getElementById('step1')?.classList.remove('active');
      document.getElementById('step2')?.classList.add('active');
      updateSteps(2);
    }
  
    window.prevStep = function () {
      document.getElementById('step2')?.classList.remove('active');
      document.getElementById('step1')?.classList.add('active');
      updateSteps(1);
    }
  
    function updateSteps(step) {
      document.querySelectorAll('.step').forEach((s, i) => {
        s.classList.toggle('active', i === step - 1);
      });
    }
  
    window.goToNextPage = function () {
      window.location.href = "form.html";
    }
  
    window.closeModal = function () {
      document.getElementById("image-modal")?.classList.add("hidden");
    }
  });
