<script setup lang="ts">
import { MeetupsHeader } from '@widgets/header';
</script>

<template>
    <div class="wrapper">
        <MeetupsHeader />
        <RouterView>
            <template #default="{ Component }">
                <KeepAlive v-if="Component" :max="3">
                    <component :is="Component" />
                </KeepAlive>
            </template>
        </RouterView>
    </div>
</template>

<style scoped>
.wrapper {
    background-color: var(--grey-light);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
