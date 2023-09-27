<script>
  import NavbarVue from '@/components/common/NavBar.vue';
  import ValuePropositionVue from '@/components/ValueProposition.vue';
  import BenefitsVue from '@/components/Benefits.vue';
  import ReviewsVue from '@/components/Reviews.vue';
  import CTAVue from '@/components/CTA.vue';
  import FooterVue from '@/components/Footer.vue';
  import FAQVue from '@/components/FAQ.vue';
  import BenefitOneVue from '@/components/BenefitOne.vue';
  import BenefitTwoVue from '@/components/BenefitTwo.vue';
  import BenefitThreeVue from '@/components/BenefitThree.vue';
  import BenefitFourVue from '@/components/BenefitFour.vue';

  export default{ 
    components: {
      NavbarVue,
      ValuePropositionVue,
      BenefitsVue,
      BenefitOneVue,
      BenefitTwoVue,
      BenefitThreeVue,
      BenefitFourVue,
      ReviewsVue,
      CTAVue,
      FooterVue,
      FAQVue
    },
    async mounted(){
      const hiddenElemenents = document.querySelectorAll('.hide')
      const observer = new IntersectionObserver((entries) =>{
          entries.forEach((entry) =>{
              console.log(entry)
              if(entry.isIntersecting){
                entry.target.classList.add('show');
              }else{
                 entry.target.classList.remove('show');
              }
          })


      })

      hiddenElemenents.forEach((el)=> observer.observe(el));
    }
  }
</script>

<template>
  <div class="h-screen w-screen phone:w-screen relative">  
    <header class="fixed inset-x-0 top-0 z-20 w-full common-container mt-5">
      <NavbarVue></NavbarVue>
    </header>

    <main class="relative">
      <!-- Value proposition -->
      <section class="hide">
        <ValuePropositionVue></ValuePropositionVue>
      </section>
      <!-- Benefits -->
      <!-- <section class="hide">
        <BenefitsVue></BenefitsVue>
      </section>
 -->

      <!-- BenefitOne -->
        <section class="hide">
          <BenefitOneVue></BenefitOneVue>
        </section>
      <!-- BenefitsTwo -->
        <section class="hide">
          <BenefitTwoVue></BenefitTwoVue>
        </section>
      <!-- BenefitsThree -->
        <section class="hide">
          <BenefitThreeVue></BenefitThreeVue>
        </section>
      <!-- BenefitsFour -->
        <section class="hide">
          <BenefitFourVue></BenefitFourVue>
        </section>
      <!-- Reviews -->
      <section class="hide">
        <ReviewsVue></ReviewsVue>
      </section>
      
      <!-- Main CTA -->
      <section class="hide w-full flex flex-col justify-between items-center">
        <CTAVue></CTAVue>
      </section >
    
      <!-- FAQs -->
      <section>
        <FAQVue></FAQVue>
      </section>

      <!-- Footer -->
      <section>
        <FooterVue></FooterVue>
      </section>
    </main>
</div>

</template>

<style scoped>
.hide{
  opacity: 0;
  transition: all 1s;
}
.show{
  opacity: 1;
}


@media(prefers-reduced-motion){
  .hide{
    transition:none;
  }
}
</style>
