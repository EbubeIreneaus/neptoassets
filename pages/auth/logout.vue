<script setup>
definePageMeta({
    layout:''
})
import Cookies from 'js-cookie'
if (Cookies.get('profileId')) {
    Cookies.remove('profileId')
}
useRouter().push('/')
onBeforeMount(() => {

})
</script>

<template></template>