<template>
  <div>
    <NuxtLayout :api="api">
      <NuxtLoadingIndicator />
      <NuxtPage :api="api" />
    </NuxtLayout>

    <!-- <div>
      <a
        href="https://wa.me/+18596384766/?text=Good%20Day%20Nepto%20Assets%20%20my%20name%20is%20"
        target="_blank"
      >
        <img
          src="https://w7.pngwing.com/pngs/872/916/png-transparent-whatsapp-logo-whatsapp-computer-icons-telephone-call-whatsapp-grass-internet-mobile-phones-thumbnail.png"
          alt="WhatsApp"
          class=" h-16 fixed right-[20px] bottom-[40px] w-16 rounded-full  animate-bounce 
          !delay-1000 bg-green-600 border-0"
        />
      </a>
    </div> -->
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: "preload",
      href: "https://cdn.shareaholic.net/assets/pub/shareaholic.js",
      as: "script",
    },
  ],
  script: [
    // {
    //   type: 'text/javascript',
    //   innerHTML: `
    //       var _smartsupp = _smartsupp || {};
    //       _smartsupp.key = 'cbe1609dff1a29261dbbe11ca5161cf9182da735';
    //       window.smartsupp||(function(d) {
    //         var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
    //         s=d.getElementsByTagName('script')[0];c=d.createElement('script');
    //         c.type='text/javascript';c.charset='utf-8';c.async=true;
    //         c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
    //       })(document);
    //     `,
    // },
    {
      type: "text/javascript",
      src: '//code.jivosite.com/widget/cCKKEPyUIh',
      async: true,
      tagPosition: 'head'
    },
    {
      type: "text/javascript",
      src: "https://cdn.shareaholic.net/assets/pub/shareaholic.js",
      async: true,
    },
  ],
  meta: [
    {
      name: "shareaholic:site_id",
      content: "2a8a59ebb34e71168adaf4902b2e4180",
    },
  ],
  noscript: [
    {
      innerHTML: 'Powered by <a href="https://www.smartsupp.com" target="_blank">Smartsupp</a>',
    },
  ],
});
const api = "https://nepto-api.vercel.app/";
// const api = "http://127.0.0.1:8000/"
onMounted(() => {
  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
});
</script>
