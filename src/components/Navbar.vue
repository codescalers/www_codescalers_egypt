<template>
  <nav
    id="navbar"
    class="bg-white sticky z-50 transition-all duration-300"
    :class="scrolled ? 'top-0' : 'top-10'"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <g-link to="/">
            <div class="flex-shrink-0">
              <g-image
                class="block lg:hidden h-8 w-auto"
                :src="require(`!!assets-loader!@images/logo-egypt.png`)"
                alt="CodeScalers-Egypt logo"
              />
              <g-image
                class="hidden lg:block h-8 w-auto"
                :src="require(`!!assets-loader!@images/logo-egypt.png`)"
                alt="CodeScalers-Egypt logo"
              />
            </div>
          </g-link>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div
            class="inline-flex"
            :key="index"
            v-for="(element, index) in navigation.navLinks"
          >
            <g-link
              :to="element.link"
              class="
                ml-4
                px-3
                py-2
                rounded-md
                text-md
                font-medium
                leading-5
                blue
                hover:text-white hover:bg-blue-500
                focus:outline-none focus:text-white focus:bg-blue-500
                transition
                duration-150
                ease-in-out
              "
              >{{ element.name }}</g-link
            >
          </div>
        </div>
        <div class="-mr-2 flex sm:hidden">
          <!-- Mobile menu button -->
          <button
            @click="isOpen = !isOpen"
            id="menuBtn"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-blue-500
              focus:outline-none focus:bg-blue-500 focus:text-white
              transition
              duration-150
              ease-in-out
            "
            aria-label="Main menu"
            aria-expanded="false"
          >
            <!-- Icon when menu is closed. -->
            <!--
              Heroicon name: menu
  
              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
              Heroicon name: x
  
              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.
  
      Menu open: "block", Menu closed: "hidden"
    -->
    <div id="menu" :class="isOpen ? 'block' : 'hidden'" class="sm:hidden">
      <div
        class="px-2 pt-2 pb-3"
        v-for="(element, index) in navigation.navLinks"
        :key="index"
      >
        <g-link
          :to="element.link"
          class="
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
            blue
            focus:outline-none focus:text-white focus:bg-blue-500
            transition
            duration-150
            ease-in-out
          "
          >{{ element.name }}</g-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object,
    },
  },
  data() {
    return {
      isOpen: false,
      scrolled: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.top.scrollY > 0) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>