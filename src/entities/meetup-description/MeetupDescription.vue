<template>
    <p class="meetup-description">
        <slot>{{ description }}</slot>
    </p>
</template>

<script setup lang="ts">
defineProps<{ description: string }>();
</script>

<style scoped>
.meetup-description {
    padding-top: 33px;
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 28px;
    white-space: pre-wrap;
}
</style>
