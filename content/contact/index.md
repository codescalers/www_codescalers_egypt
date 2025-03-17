---
title: "Contact"
description: "codescalers"
template: "page.html"
insert_anchor_links: "left"
extra:
  author: Your name here
  imgPath: about/about_hero.png
---

<div class="container mx-auto">
  {% row(style="margin semiNarrow") %}
  
  ![Image](contact_hero.png#mx-auto)
  
  |||
  
  <div>
    <h2 class="blue font-bold">Contact Us</h2>
    <hr class="mb-4" style="border-width: 1px; width:40%; border-color: #3399CC;">
  
  <form class="w-full mt-10 contact_form" method="POST" name="contact_form" action="https://formspree.io/f/mknykkel">
      <div class="alert" style="display: none;"></div>
      <input type="hidden" name="_next" value="/thanks" />
      <input type="hidden" name="smtp_key" value="None" />
      <input type="hidden" name="receiver_email" value="info@codescalers.com" />
      <input type="hidden" name="format" value="json" />
      <input type="hidden" name="subject" value="About CodeScalers.com" />
      <input type="hidden" name="g-recaptcha-response" id="recaptchaResponse" />
      
  <div style="display: none;">
        <input type="text" id="honeypot" name="honeypot" />
  </div>
      
   <div class="form-group mb-6">
        <input name="sender_name" required placeholder="Name" class="form-control input-lg w-full px-3 py-3 text-sm font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" />
      </div>
      
  <div class="form-group mb-6">
        <input name="sender_email" required placeholder="Email" class="form-control input-lg w-full px-3 py-3 text-sm font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="email" />
      </div>
      
  <div class="form-group mb-6">
        <textarea name="body" required rows="3" placeholder="Message" class="form-control input-lg w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"></textarea>
      </div>

 <!-- Google reCAPTCHA -->
  <div class="g-recaptcha mb-5" id="recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
      
   <button type="submit" class="text-white apply w-full my-4" data-loading-text="Sending...">
        Send us an email
      </button>
    </form>
  </div>
  
  {% end %}
</div>

<!-- Load Google reCAPTCHA -->
<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<!-- JavaScript for Form Validation -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact_form");
    form.addEventListener("submit", function (event) {
      const recaptchaResponse = grecaptcha.getResponse();
      if (!recaptchaResponse) {
        event.preventDefault();
        alert("Please complete the reCAPTCHA verification.");
      }
    });
  });
</script>

<style scoped>
  .apply {
    background-color: #3399CC !important;
    border-radius: 4px !important;
  }
  .apply:hover {
    background-color: #54b0df !important;
  }
</style>
