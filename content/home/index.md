---
title: "Home"
description: "ThreeFold empowers anyone to become a cloud service provider – no technical expertise required – allowing people and organizations to buy sell, and use cloud resources autonomously and securely." # quotation marks to allow colons where used
date: 2018-09-14T21:00:00-05:00
updated: 2021-02-20T14:40:00-06:00
draft: false
extra:
 author: Your name here
 imgPath: home/autonomous.png
---

<!-- section 1 (carousel) -->

{% carousel() %}

## **carousel**

{% end %}


<!-- section 2 (Our Values) -->

<div style="background-color:#292929">

<div class="container mx-auto text-white">

{% row(style="margin semiNarrow") %}

<h1 class="value leading-none text-white font-extrabold">Our<br>Values</h1>

|||

<div class="leading-8 list">

- **Integrity,** What we say is what we do.
- **Open Culture,** Respect and accept everyone.
- **Flexibility,** The ability to adapt with the constant and quick changes.
- **Development,** Investing in people is our most rewarding investment.
- **Ownership,** What we promise is what we deliver.
- **Home,** A comfortable and fun environment where you can be yourself.

</div>

{% end %}


</div>
</div>


<!-- section 3 (our services) -->

<div class="container mx-auto">

{% row( style="center mtop semiNarrow") %}

<h1 class="blue font-bold">Our Services</h1>

 <hr class="mb-4 mx-auto" style="border-width: 1px; width:15%; border-color: #3399CC;">

{% end %}


{% row( style="center semiNarrow mbottom") %}
                          
<div class="rounded_img border-2 rounded-lg shadow-lge p-6" style="background-color:#292929; color:#fff">

![Image](services.png#small#mx-auto)

<div class="mycard my-8">

<h3 class="text-xl font-medium text-white">Managed Services</h3>

<p class="text-white text-sm font-medium">Our subcontracting services provide complete IT solutions, covering backend and frontend development management. We ensure smooth operations with proactive monitoring, quick issue resolution, and continuous improvements, so you can focus on your core business goals.
      
</div>
</div>

|||

<div class="rounded_img border-2 rounded-lg shadow-lge p-6 lg:p-3" style="background-color:#1CBBE6; color:#fff">

![Image](Hiring.png#small#mx-auto)

<div class="mycard my-8">

<h3 class="text-xl font-medium text-white">Resource Hiring and Assignment</h3>                                                              

<p class="text-white text-sm font-medium">We provide tailored offshoring recruitment and staffing solutions, sourcing top talent for backend, frontend, and other technical roles. Our team ensures candidates meet your technical needs and fit your company culture.</p>
      
</div>
</div>

|||

<div class="rounded_img border-2 rounded-lg shadow-lge p-6 lg:p-3" style="background-color:#F3F3F3; color:#fff">

![Image](delivering1.png#small#mx-auto)

<div class="mycard my-8">

<h3 class="text-xl font-medium text-gray-700">Delivering customized solutions</h3>

<p class="text-gray-700 text-sm font-medium">Our outsourcing project management services deliver customized solutions for backend, frontend, and operations projects. We handle planning, resource allocation, and execution to ensure on-time, high-quality results that align with your strategic goals.</p>
      
</div>
</div>

{% end %}

</div>



<!-- section 4 (Events) -->

<div style="background-color:#292929">
<div class="container mx-auto">


{% row( style="center mtop semiNarrow") %}

<h1 class="text-white font-bold">Our Events</h1>

 <hr class="mb-4 mx-auto" style="border-width: 1px; width:15%; border-color: #fff;">

{% end %}


{% row( style="center semiNarrow mbottom") %}
                          
<div class="relative border-2 rounded-lg shadow-lg">

  <div class="lable font-medium px-4 py-2">Internship 2024</div>

  <div class="zoom">

   ![Image](event_1.png#mx-auto)

  </div>

</div>

|||

<div class="relative border-2 rounded-lg shadow-lg">

  <div class="lable font-medium px-4 py-2">GUC Internship Event</div>

  <div class="zoom">

   ![Image](event_2.png#mx-auto)

  </div>

</div>

|||

<div class="relative border-2 rounded-lg shadow-lg">

  <div class="lable font-medium px-4 py-2">Pyramids Event</div>

  <div class="zoom">

   ![Image](event_3.png#mx-auto)

  </div>

</div>

{% end %}

</div>
</div>



<!-- section 2 (logos) -->

{% logo_slider() %}

## **logo**

{% end %}







<style>

.list ul {
list-style-type: disclosure-closed;
}
.value{
font-size: 5rem
}

.card_h{
 height: 110px !important;
}

.rounded_img img {
 border-radius: 8px;
}

.white-gray{
  color: #9f9f9f;
}


.road_border{
  
     border-left: 1px solid #cbcbcb;


}

.lable {
  position:absolute;
  background-color: rgba(75, 75, 75, 0.7);
  top:10px;
  right: 10px;
  color: #fff;
  z-index:10;
  font-size:14px;
  border-radius: 5px;
}
/* zoom images */

.zoom {
  position: relative;
  overflow: hidden;
  /* max-width: 300px; */
  z-index: 1;
}
.zoom::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #e5e5e5;
  opacity: 0;
  transition: .3s ease all;
}
img {transition: .3s ease all; width: 100%; object-fit:cover;}
.zoom:hover img {
  transform: scale(1.1);
}

.zoom:hover::after {opacity: 0.2;}

   @media (max-width: 480px) {

.road_border{
  
     border-left: 0px solid #cbcbcb;


   }


   }






 </style>
