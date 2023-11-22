<template>
    <component :is="tag" class="link">
        <slot />
    </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ tag?: string | object }>(), { tag: 'RouterLink' });
</script>

<style scoped>
.link {
    color: var(--blue);
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}
</style>
