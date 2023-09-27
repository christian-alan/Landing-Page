<template>
<nav class="px-12 py-8 bg-surf-dark bg-opacity-70 w-full phone:w-full phone:px-4 phone:py-4 flex justify-between items-center rounded-3xl">

    <LogoVue></LogoVue>

    <button class="blu-btn phone:hidden">Sign up for a free terminal</button>

</nav>

</template>

<script>

import LogoVue from '@/components/icons/Logo.vue';
export default {
    components:{
        LogoVue
    }
}
</script>

<style>

</style>