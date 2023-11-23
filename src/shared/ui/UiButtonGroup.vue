<template>
    <div class="button-group" role="group">
        <slot />
    </div>
</template>

<script lang="ts">
import { computed, provide, type InjectionKey, type ComputedRef } from 'vue';

interface ProvidedValue {
    selectedButton: string;
    updateSelectedButton(v: string): void;
}

type ProvidedKey = InjectionKey<ComputedRef<ProvidedValue>>;
export const BUTTON_GROUP_INJECTION_KEY = Symbol('BUTTON_GROUP_INJECTION_KEY') as ProvidedKey;
</script>

<script setup lang="ts">
const props = defineProps<{ modelValue: string }>();

const emit = defineEmits<{
    'update:modelValue': [modelValue: string];
}>();

const updateSelectedButton = (value: string): void => {
    emit('update:modelValue', value);
};

provide(
    BUTTON_GROUP_INJECTION_KEY,
    computed(() => ({
        selectedButton: props.modelValue,
        updateSelectedButton,
    })),
);
</script>

<style scoped>
.button-group {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    white-space: nowrap;
}
</style>
