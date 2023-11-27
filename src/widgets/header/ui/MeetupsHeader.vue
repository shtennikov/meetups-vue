<template>
    <header class="header">
        <MeetupsLogo />
        <MeetupsNav />
    </header>
</template>

<script setup lang="ts">
import MeetupsLogo from './MeetupsLogo.vue';
import MeetupsNav from './MeetupsNav.vue';
</script>

<style scoped>
.header {
    padding: 44px 0 32px;
    background-color: var(--white);
}
</style>
