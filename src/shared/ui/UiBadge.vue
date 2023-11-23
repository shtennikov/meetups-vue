<template>
    <span class="badge" :class="badgeClass">
        <slot />
    </span>
</template>

<script lang="ts"></script>

<script setup lang="ts">
import { computed } from 'vue';

const BADGE_CLASSES = {
    primary: 'badge_primary',
    success: 'badge_success',
} as const;

const props = defineProps<{ type: keyof typeof BADGE_CLASSES }>();

const badgeClass = computed(() => BADGE_CLASSES[props.type]);
</script>

<style scoped>
.badge {
    font-size: 14px;
    line-height: 24px;
    text-align: right;
    display: inline-block;
    padding: 4px 12px;
}

.badge_primary {
    color: var(--blue);
    background-color: var(--blue-extra);
}

.badge_success {
    color: var(--green);
    background-color: var(--green-light);
}
</style>
