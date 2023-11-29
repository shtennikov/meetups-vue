<template>
    <UiRadioGroup v-model="modelProxy" :options="dateFilterOptions" name="date" />
</template>

<script setup lang="ts">
import { UiRadioGroup } from '@shared/ui';
import { useModelProxy } from '@shared/lib/composables';

const props = defineProps<{
    modelValue: string;
}>();
defineEmits<{
    'update:modelValue': [value: string];
}>();

const modelProxy = useModelProxy<typeof props.modelValue>();

const dateFilterOptions = [
    { text: 'Все', value: 'all' },
    { text: 'Прошедшие', value: 'past' },
    { text: 'Ожидаемые', value: 'future' },
];
</script>

<style scoped></style>
