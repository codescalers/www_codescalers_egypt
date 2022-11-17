<template>
    <layout>
      <!-- about section -->
      <section class="py-12 lg:p-20 px-4 bg_blue">
        <div
          class="flex flex-wrap items-center text-center md:text-left lg:max-w-7xl mx-auto"
        >
          <div class="lg:w-1/2 px-2">
            <g-image
              src="../assets/images/contact_us.png"
              width="550"
              class="mx-auto transform transition duration-500 hover:scale-110"
              alt=""
            />
          </div>
          <div class="lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0">
            <h1
              class="text-6xl mb-6 leading-tight blue font-semibold font-heading"
            >
              Contact Us
            </h1>
            <form
              class="w-full mx-4 contact_form"
              method="POST"
              name="contact_form"
              action="https://formspree.io/f/mknykkel"
            >
              <div class="alert" style="display: none"></div>
              <input type="hidden" name="_next" value="/thanks" />
              <input type="hidden" name="smtp_key" value="None" />
              <input
                type="hidden"
                name="receiver_email"
                value="info@codescalers.com"
              />
              <input type="hidden" name="format" value="json" />
              <input
                type="hidden"
                name="subject"
                value="About CodeScalers.com"
              />
              <div style="display: none">
                <input type="text" id="honeypot" name="honeypot" />
              </div>
              <div class="form-group mb-6">
                <!-- <label for="sender_name" class="col-md-2 control-label"
                  >Name</label
                > -->
                <input
                  name="sender_name"
                  required
                  placeholder="Name"
                  class="form-control input-lg form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                />
              </div>
              <div class="form-group mb-6">
                <!-- <label for="sender_email" class="col-md-2 control-label"
                  >Email</label
                > -->
                <input
                  name="sender_email"
                  required
                  placeholder="Email"
                  class="form-control input-lg form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="email"
                />
              </div>
              <div class="form-group mb-6">
                <!-- <label for="body" class="col-md-2 control-label">Content</label> -->
                <textarea
                  name="body"
                  required
                  rows="3"
                  placeholder="Message"
                  class="form-control input-lg form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                ></textarea>
              </div>
              <!-- Recaptcha -->
              <div
                class="g-recaptcha"
                data-sitekey="6LdPeHoiAAAAAJ7kQyUMngLe9Aev19acz5lXhyvZ"
                data-callback="onRecaptchaSuccess"
                data-expired-callback="onRecaptchaResponseExpiry"
                data-error-callback="onRecaptchaError"
              ></div>

              <!-- Recaptcha Error -->
              <div
                id="recaptcha-form-error"
                style="display: none"
                class="bg-red-200 rounded py-1 px-2 text-sm sm:text-md"
              >
                Please fill the recaptcha checkbox.
              </div>

              <!-- Recaptcha Success -->
              <div
                id="recaptcha-form-success"
                style="display: none"
                class="bg-green-200 rounded py-1 px-2 text-sm sm:text-md"
              >
                Recaptcha validated Successfully..!
                <a href="/" class="px-2 text-slate-800">Retry</a>
              </div>
              <button
                type="submit"
                class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                data-loading-text="Sending..."
              >
                Send us an email
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- map section -->
      <!-- <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.4368545850252!2d31.347373015452234!3d30.110310622412197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458156b095611a7%3A0x4fd95e1fe9c1546c!2sCodescalers%20Egypt!5e0!3m2!1sen!2seg!4v1605737214442!5m2!1sen!2seg"
          style="border: 0; width: 100%; height: 400px"
        ></iframe>
      </section> -->

      <!-- form section -->
      <section class="py-12 lg:p-20 px-4 bg-white my-12">
        <div class="flex flex-wrap items-center lg:max-w-7xl mx-auto">
          <div class="lg:w-1/3 px-2">
            <div class="px-4 mb-6">
              <a href="/">
                <g-image class="mb-6" src="../assets/images/logo-egypt.png" width="220" alt="" />
              </a>
              <p class="text-gray-700 text-md">
                <span class="fa fa-home color-lead blue mr-2 pb-3"></span> 9 Al
                Waradi, Al Matar, El Nozha, Cairo, Egypt.
              </p>
              <p class="text-gray-700 text-md">
                <span class="fa fa-envelope blue mr-2 pb-3.5"></span
                >info@codescalers.com
              </p>
              <p class="text-gray-700 text-md">
                <span class="fa fa-briefcase blue mr-2 pb-3.5"></span
                >careers@codescalers.com
              </p>
              <p class="text-gray-700 text-md">
                <span class="fa fa-phone-square blue mr-2 pb-3"></span>+202
                21811532
              </p>
            </div>
          </div>

          <div class="lg:w-2/3 px-2 lg:pl-16 mt-10 lg:mt-0 mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.4368545850252!2d31.347373015452234!3d30.110310622412197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458156b095611a7%3A0x4fd95e1fe9c1546c!2sCodescalers%20Egypt!5e0!3m2!1sen!2seg!4v1605737214442!5m2!1sen!2seg"
              style="border: 0; width: 100%; height: 400px"
            ></iframe>
          </div>
        </div>
      </section>
    </layout>
</template>