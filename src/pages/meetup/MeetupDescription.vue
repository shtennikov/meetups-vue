<template>
    <div class="meetup__decscription">
        {{ description }}
    </div>
</template>

<script setup lang="ts">
defineProps<{ description: string }>();
</script>

<style scoped></style>
