<template>
  <section class="bg_blue_dark overflow-hidden footer">
    <div class="p-4 py-10">
      <p class="text-base text-white text-center font-medium">
        All rights reserved &copy; {{ getCurrentYear }} CodeScalers Egypt
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentYear: undefined,
    };
  },
  computed: {
    getCurrentYear() {
      let date = new Date();
      return date.getFullYear();
    },
  },
};
</script>