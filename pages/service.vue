
<script setup>

onMounted(() => {
AOS.refreshHard()
})
</script>
<template>
   <div>
    <div class="w-screen h-screen  relative">
        <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <video src="~/assets/media/service-bg.mp4" autoplay loop class="h-full w-full object-cover">
        </video>
        <div class="flex justify-center absolute z-30 bottom-[30%] w-full left-0 ">
            <div class=" text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl w-full mx-3  
            bg-black/50 px-5 py-12 animate__animated animate__slideInUp text-white">
           <h1 class="text-5xl font-bold my-3">Join Nepto Assets</h1>
           <p class="text-xl font-semibold ">Help us build the future by empowering everyday people to generate income and control their wealth</p>
        </div>
        </div>
       
    </div>
    <service></service>
    <review></review>
   </div>
</template>


<style lang="scss" scoped></style>