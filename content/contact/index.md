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
  <!-- <div class="g-recaptcha mb-5" data-sitekey="6LfcCvgqAAAAAGOkHnYk3LjljN5Qn3-xjQS1t9iv"></div> -->

  <div id="recaptcha" class="mb-5"></div>
  <div id="recaptcha-form-error" style="display: none;" class="bg-red-200 rounded py-1 px-2 text-sm sm:text-md">
    Please fill the recaptcha checkbox.
  </div>

  <div id="recaptcha-form-success" style="display: none;" class="bg-green-200 rounded py-1 px-2 text-sm sm:text-md">
      Recaptcha validated Successfully..!
  <a href="/" class="px-2 text-slate-800">Retry</a>
  </div>

  <button type="submit" class="text-white apply w-full my-4" data-loading-text="Sending...">
    Send us an email
  </button>
</form>
</div>
{% end %}
</div>

<!-- map section -->

<div class="bg-gray-100">

<div class="container mx-auto">

{% row(style="margin semiNarrow") %}
       
 ![Image](logo-egypt.png) 

 <br>        
                   
  <p class="text-gray-700 text-base mb-2">
    <span class="fa fa-home color-lead blue mr-2 pb-3"></span> 9 Al
    Waradi, Al Matar, El Nozha, Cairo, Egypt.
  </p>
  <p class="text-gray-700 text-base mb-2">
    <span class="fa fa-envelope blue mr-2 pb-3.5"></span
    >info@codescalers.com
  </p>
  <p class="text-gray-700 text-base mb-2">
    <span class="fa fa-briefcase blue mr-2 pb-3.5"></span
    >careers@codescalers.com
  </p>
  <p class="text-gray-700 text-base mb-2">
    <span class="fa fa-phone-square blue mr-2 pb-3"></span>+202
    21811532
  </p>
      
|||

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.4368545850252!2d31.347373015452234!3d30.110310622412197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458156b095611a7%3A0x4fd95e1fe9c1546c!2sCodescalers%20Egypt!5e0!3m2!1sen!2seg!4v1605737214442!5m2!1sen!2seg"
style="border: 0; width: 100%; height: 400px;">
</iframe>
          
{% end %}

</div>
</div>

<style scoped>
  .apply {
    background-color: #3399CC !important;
    border-radius: 4px !important;
  }
  .apply:hover {
    background-color: #54b0df !important;
  }
</style>
