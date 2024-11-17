---
title: "About"
description: "Our mission is to empower individuals and organizations with secure, private, and autonomous access to computing resources, ensuring fair cloud access for everyone." # quotation marks to allow colons where used
template: "page.html"
insert_anchor_links: "left"
extra:
 author: Your name here
 imgPath: about/about_hero.png
---


<!-- section 1 (join us) -->

{% row( style="center margin" bgPath="/about_hero.png") %}

<div class="container mx-auto">

# About <br> CodeScalers Egypt



<div class="text-white my-10 font-medium">

</div>

</div>

{% end %}



<!-- section 2 (Our Values) -->

<div style="background-color:#292929">

<div class="container mx-auto text-white">

{% row(style="center margin semiNarrow") %}

<h2 class="value leading-none text-white font-extrabold">About Us</h2>

 <hr class="mb-4 mx-auto" style="border-width: 1px; width:15%; border-color: #fff;">

<div class="leading-8 py-4 text-sm">

We have been focused on helping companies, specially startups, to build and operate their datacenter, cloud architecture. To provide the best solutions, we always think out of the box and build groundbreaking disruptive technologies, which made us unique and cloud experts. Our team has developed cloud softwares, datacenter softwares as well as high end and mid market hosting solutions. From the experiences we gained over the years, we learnt that significant improvements for a cloud solution can only be achieved when the entire cloud ecosystem is looked at including Datacenter, Power Management, Physical infrastructure, Management Platform, User Interfaces.

</div>


{% end %}

</div>
</div>


<!-- section 3 (our partners) -->

<div class="container mx-auto">

{% row( style="center mtop semiNarrow") %}

<h2 class="blue font-bold">previous & currents clients</h2>

 <hr class="mb-4 mx-auto" style="border-width: 1px; width:15%; border-color: #3399CC;">

{% end %}


{% row( style="center between") %}

<div class="rounded_img border-2 rounded-lg shadow-lge p-6" data-aos="flip-up">

![Image](tft_logo.png#mx-auto)

</div>

|||

<div class="rounded_img border-2 rounded-lg shadow-lge p-6 lg:p-3" data-aos="flip-up" >

![Image](awingo_logo.png#mx-auto)

</div>

|||

<div class="rounded_img border-2 rounded-lg shadow-lge p-6 lg:p-3" data-aos="flip-up">

![Image](gig_logo.png#mx-auto)

</div>

|||

<div class="rounded_img border-2 rounded-lg shadow-lge p-6 lg:p-3" data-aos="flip-up">

![Image](bettertoken_logo.png#mx-auto)

</div>

{% end %}




{% row( style="center between mbottom") %}
 

<div class="rounded_img border-2 rounded-lg shadow-lge p-6 lg:p-3" data-aos="flip-down">

![Image](incubaid.png#mx-auto)

</div>

|||

<div class="rounded_img border-2 rounded-lg shadow-lge p-6 lg:p-3" data-aos="flip-down"  >

![Image](racktivity.png#mx-auto)

</div>


|||


<div class="rounded_img border-2 rounded-lg shadow-lge p-6 lg:p-3" data-aos="flip-down">

![Image](freeflow.png#mx-auto)

</div>

|||


<div class="rounded_img border-2 rounded-lg shadow-lge p-6 lg:p-3" data-aos="flip-down">

![Image](amplidata_logo.png#mx-auto)

</div>


{% end %}

</div>


<style>

@keyframes slidein {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animated-text {
  animation: slidein 1s ease-out;
}

  </style>

<script>
    AOS.init({
        duration: 1000,
      })
</script>
