<template>
  <Layout>
    <div class="mx-auto">
      <!-- about section -->
      <section class="py-12 lg:p-20 px-4">
        <div
          class="
            flex flex-wrap
            items-center
            text-center
            lg:text-left lg:max-w-7xl
            mx-auto
          "
        >
          <div
            class="
              lg:w-1/2
              px-2
              mx-auto
              transform
              transition
              duration-500
              hover:scale-110
            "
          >
            <g-image src="../assets/images/about_us.png" alt="" />
          </div>
          <div class="lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0">
            <h1
              class="
                text-6xl
                mb-6
                leading-tight
                blue
                font-semibold font-heading
              "
            >
              About Us
            </h1>
            <p class="text-gray-700 text-lg leading-normal">
              We have been focused on helping companies, specially startups, to
              build and operate their datacenter, cloud architecture. To provide
              the best solutions, we always think out of the box and build
              groundbreaking disruptive technologies, which made us unique and
              cloud experts. Our team has developed cloud softwares, datacenter
              softwares as well as high end and mid market hosting solutions.
              From the experiences we gained over the years, we learnt that
              significant improvements for a cloud solution can only be achieved
              when the entire cloud ecosystem is looked at including Datacenter,
              Power Management, Physical infrastructure, Management Platform,
              User Interfaces.
            </p>
          </div>
        </div>
      </section>

      <!-- logo section -->
      <section class="py-12 lg:p-20 px-4 bg-white text-center mx-auto">
        <div class="max-w-2xl mx-auto mb-8">
          <h2
            class="
            text-3xl
              md:text-5xl
              blue
              capitalize
              leading-tight
              lg:pb-8
              font-semibold font-heading
            "
          >
            previous & currents clients
          </h2>
          <!-- <p class="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
            autem?
          </p> -->
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 lg:max-w-6xl mx-auto">
          <div class="px-8 mb-8">
            <g-image
              class="mx-auto transform transition duration-300 hover:scale-110"
              src="../assets/images/tft_logo.png"
              alt=""
            />
          </div>
          <div class="px-8 mb-8">
            <g-image
              class="mx-auto transform transition duration-300 hover:scale-110"
              src="../assets/images/awingo_logo.png"
              alt=""
            />
          </div>
          <div class="px-8 mb-8">
            <g-image
              class="mx-auto transform transition duration-300 hover:scale-110"
              src="../assets/images/gig_logo.png"
              alt=""
            />
          </div>
          <div class="px-8 mb-8">
            <g-image
              class="mx-auto transform transition duration-300 hover:scale-110"
              src="../assets/images/bettertoken_logo.png"
              alt=""
            />
          </div>
          <div class="px-8 mb-8">
            <g-image
              class="mx-auto transform transition duration-300 hover:scale-110"
              src="../assets/images/incubaid.png"
              alt=""
            />
          </div>
          <div class="px-8 mb-8">
            <g-image
              class="mx-auto transform transition duration-300 hover:scale-110"
              src="../assets/images/racktivity.png"
              alt=""
            />
          </div>
          <div class="px-8 mb-8">
            <g-image
              class="mx-auto transform transition duration-300 hover:scale-110"
              src="../assets/images/freeflow.png"
              alt=""
            />
          </div>
          <div class="px-8 mb-8">
            <g-image
              class="mx-auto transform transition duration-300 hover:scale-110"
              src="../assets/images/amplidata_logo.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us",
  },
};
</script>
