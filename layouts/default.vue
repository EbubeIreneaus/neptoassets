<script setup>


const year = new Date().getFullYear()
const navLinks = ref([
    { "title": 'Home', "link": "/" },
    { "title": 'Company', "link": "/company" },
    { "title": 'Service', "link": "/service" },
    { "title": 'Pricing Plans', "link": "/pricing" },
    { "title": 'Contact', "link": "/contact" },
    { "title": 'Register', "link": "/auth/register" },
    { "title": 'Login', "link": "/auth/login" },
])

const toogleNav = () => {
    let nav = document.getElementsByTagName('nav')[0]
    nav.classList.toggle("!h-[350px]")
    nav.classList.toggle("!opacity-100")
}

const close_small_nav = () =>{
    let nav = document.getElementsByTagName('nav')[0]
    if (nav.classList.contains('!h-[350px]')) {
        nav.classList.remove("!h-[350px]")
        nav.classList.remove("!opacity-100")
    } 
}
const changeNavBgColor = () => {
    const header = document.getElementsByTagName('header')[0]
    if (window.scrollY >= 200) {
        header.classList.add("!bg-slate-900")
    } else {
        header.classList.remove("!bg-slate-900")
    }
}
onMounted(() => {
    window.addEventListener('scroll', changeNavBgColor)
})
</script>
<template>
    <div class="">
        <header class="fixed bg-transparent z-50 w-full transition-all duration-300">
            <div class="h-20 flex items-center justify-between px-5 relative ">
                <div class="!w-fit">
                   <logo></logo>
                </div>
                <div>
                    <button class="btn p-3 lg:hidden rounded-lg ring-1 ring-orange-500" @click="toogleNav">
                        <i class="fa fa-bars text-white"></i></button>
                </div>
                <nav
                    class=" flex justify-center items-center  h-0 opacity-0 lg:opacity-100 overflow-hidden transition-all duration-500  
                    lg:h-full absolute lg:relative left-0 top-20 lg:top-0 w-full  z-40 lg:z-50 bg-black/90 lg:bg-transparent text-green-700 ">
                    <ul class=" flex flex-col  lg:flex-row items-left lg:items-center w-full lg:w-fit py-6 lg:py-0 text-white">
                        <NuxtLink :to="x.link" v-for="x, index in navLinks" @click="close_small_nav()"
                            class="px-5 hover:text-slate-500 font-semibold py-2.5 lg:py-0">
                            <li class="">{{ x.title }}</li>
                        </NuxtLink>
                    </ul>
                </nav>
                <div class="flex-shrink-0 hidden sm:block ">
                    <nuxt-link to="/auth/login"
                        class="px-12 py-3 text-white hover:text-slate-300 flex items-center  bg-orange-700 ">
                        client area &nbsp;<i class="fa fa-arrow-right mt-px ms-px"></i></nuxt-link>
                </div>
            </div>
    </header>

    <main>
            <slot></slot>
        </main>

        <footer class="relative bg-black/70 dark-mode:!bg-slate-200 pt-8 pb-6 text-white">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap text-left lg:text-left">
                    <div class="w-full lg:w-4/12 px-4 mb-5">
                        <h4 class="text-3xl fonat-semibold  my-1">Nepto Assets</h4>
                        <h5 class="text-sm mt-2 mb-4 text-blueGray-600 ">
                            We utilize our experience and deep network to provide exposure to various
                            direct and third-party institutional investment market opportunities for our
                            clients' portfolios; with reduced minimums. Our management selection process
                            is conflict-free, as we are not compensated by the investors team leaders in
                            our program.
                        </h5>
                        <google-translate></google-translate>
                    </div>
                    <div class="w-full lg:w-6/12 px-4 ">
                        <div class="flex flex-wrap items-top mb-6 mt-1 gap-4">
                            <div class="w-full lg:w-4/12 px-4 ml-auto">
                                <span class="block uppercase text-white text-md font-semibold mb-2">Useful
                                    Links</span>
                                <ul class="list-unstyled">
                                    <li>
                                        <nuxt-link to="/"
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Home</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/company"
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Company</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/service"
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Service</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/contact"
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Free
                                            Contact</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full lg:w-4/12 px-4">
                                <span
                                    class="block uppercase text-blueGray-500 text-md text-white font-semibold mb-2">Other
                                    Resources</span>
                                <ul class="list-unstyled">
                                    <li>
                                        <nuxt-link to="/auth/login"
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                                            Login</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/auth/register"
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                                            Register</nuxt-link>
                                    </li>
                                    <li>
                                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Privacy Policy</a>
                                    </li>
                                    <!-- <li>
                                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                                            </li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-blueGray-300">
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2016 - {{ year }}</span><a href="#"
                                class="text-blueGray-500 hover:text-gray-800" target="_blank"> Nepto Assets</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>


<style lang="scss" scoped>
.router-link-active {
    color: rgba(194, 65, 12, 1);
}

</style>