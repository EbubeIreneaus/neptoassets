export default defineNuxtRouteMiddleware((to, from)=>{
    if(to.path.startsWith('/user') || to.path.startsWith('/auth')){
        return navigateTo('/provider/host-error')
    }
})