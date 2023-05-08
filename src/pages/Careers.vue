<template>
  <layout>
    <!-- careers section -->
    <div class="bg-blue"></div>
    <section class="py-8 px-4 bg_blue">
      <div
        class="flex flex-wrap items-center text-center lg:text-left lg:max-w-7xl mx-auto"
      >
        <div class="lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0">
          <h1
            class="text-6xl blue mb-6 leading-none font-semibold font-heading"
          >
            Careers
          </h1>
          <p class="text-gray-700 text-lg leading-normal">
            We're on the look out for talented individuals to join our rapidly
            growing technical and management teams. Working on massive scale
            projects for the biggest tech and media companies, with some of the
            best developers in Egypt. <br />If you want to stay posted you can
            check our
            <a
              class="blue hover:text-blue-900"
              href="https://www.linkedin.com/company/codescalers-egypt/mycompany/"
              target="_blank"
              >Linkedin page.</a
            >
          </p>
        </div>
        <div class="lg:w-1/2 px-2">
          <img
            src="../assets/images/carrers-03-01.png"
            class="mx-auto transform transition duration-500 hover:scale-110 pb-8"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- job section -->

    <section class="py-8 bg-white">
      <div class="mx-auto text-center my-8">
        <h2 class="text-5xl blue leading-tight mb-3 font-semibold font-heading">
          Newest Job Listing
        </h2>
        <!-- <p class="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
            autem.
          </p> -->
      </div>

      <div class="flex flex-wrap md:mx-28">
        <!-- job1 -->
        <JobCard
          v-for="career in $page.allCareers.edges"
          :key="career.id"
          :career="career.node"
        />
      </div>
    </section>
  </layout>
</template>
<page-query>
  query {
 		allCareers {
      edges{
        node {
          id
          path
          content
          excerpt
          img
          title
          details_btn
          apply_btn
          apply_btnLink
        }
      }
    }
}
</page-query>
<script>
import JobCard from "../components/JobCard.vue";
export default {
  components: {
    JobCard,
  },
};
</script>
<style scoped>
.bg-blue {
  background-color: #ddf4ff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
}
</style>