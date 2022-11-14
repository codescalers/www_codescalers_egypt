<template>
  <!-- carousel section -->
  <div>
    <div
      id="indicators-carousel"
      class="relative"
      data-carousel="static"
      style="background-color: #ddf4ff"
    >
      <!-- Carousel wrapper -->
      <div class="relative min-h-screen overflow-hidden rounded-lg">
        <!-- Item 1 -->
        <div
          v-for="(item, i) in items"
          :key="i"
          :id="`carousel-item-${i + 1}`"
          class="
            bg_blue
            md:mx-10
            duration-700
            ease-in-out
            absolute
            inset-0
            transition-all
            transform
            translate-x-0
            z-20
          "
          :data-carousel-item="i + 1"
        >
          <div
            class="
              absolute
              w-full
              lg:w-1/2
              max-w-xl
              my-16
              md:my-5
              px-2
              text-black text-center
              md:text-left
              -translate-x-1/2 -translate-y-1/2
              md:top-1/4
              top-1/3
              left-0
              md:left-40
              sm:text-3xl
              dark:text-gray-800
            "
          >
            <h1
              class="
                text-4xl
                md:text-6xl
                mb-6
                leading-none
                text-gray-600
                font-semibold font-heading
              "
            >
              <span class="blue">{{ item.titleInBlue }} </span><br /><span
                v-if="item.title"
                >{{ item.title }}</span
              >
            </h1>
            <div
              class="text-gray-700 text-xl max-w-lg leading-relaxed"
              v-html="item.content"
            ></div>
            <g-link v-if="item.btn" :to="item.btn_link">
              <button
                class="
                  my-10
                  bg_blue_dark
                  text-lg
                  font-normal
                  text-white
                  hover:bg-blue-600
                  capitalize
                  py-2
                  px-4
                  border
                  rounded
                "
              >
                {{ item.btn }}
              </button>
            </g-link>
          </div>
          <div>
            <g-image
              :src="item.img"
              class="
                absolute
                block
                w-full
                md:w-1/2
                h-auto
                p-16
                -translate-x-1/2 -translate-y-1/2
                top-0
                right-0
              "
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="
        absolute
        z-30
        flex
        space-x-3
        -translate-x-1/2
        bottom-5
        mg-left
        md:left-1/2
      "
    >
      <button
        v-for="(item, i) in items"
        :key="i"
        :id="`carousel-indicator-${i + 1}`"
        type="button"
        class="w-3 h-3 rounded-full cs-blue dark:bg-gray-800"
        aria-current="true"
        :aria-label="`Slide ${i + 1}`"
        :data-carousel-slide-to="i + 1"
      ></button>
      <!-- <button
        id="carousel-indicator-2"
        type="button"
        class="
          w-3
          h-3
          rounded-full
          cs-blue-50
          dark:bg-gray-800/50
          hover:bg-white
          dark:hover:bg-gray-800
        "
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        id="carousel-indicator-3"
        type="button"
        class="
          w-3
          h-3
          rounded-full
          cs-blue-50
          dark:bg-gray-800/50
          hover:bg-white
          dark:hover:bg-gray-800
        "
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>

