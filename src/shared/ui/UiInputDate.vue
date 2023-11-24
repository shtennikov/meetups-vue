<template>
    <UiInput :type="type" :step="step" :model-value="formattedDate" @input="handleDateInput">
        <template v-for="slotName in Object.keys($slots)" #[slotName]>
            <slot :name="slotName" />
        </template>
    </UiInput>
</template>

<script lang="ts">
import UiInput from '@shared/ui/UiInput.vue';
import { computed } from 'vue';

const INPUT_TYPES = {
    DATE: 'date',
    TIME: 'time',
    DATETIME_LOCAL: 'datetime-local',
} as const;

interface IProps {
    type: (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];
    modelValue: number | null;
    step: string;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<IProps>(), {
    type: INPUT_TYPES.DATE,
    modelValue: null,
    step: '1',
});

const emit = defineEmits<{
    'update:modelValue': [value: number];
}>();

const formattedDate = computed(() => {
    if (!props.modelValue) return '';

    const date = new Date(props.modelValue);

    if (props.type === INPUT_TYPES.TIME) return date.toISOString().slice(11, 16);
    if (props.type === INPUT_TYPES.DATETIME_LOCAL) return date.toISOString().slice(0, -1);

    return date.toISOString().slice(0, 10);
});

const handleDateInput = (event: InputEvent): void => {
    const target = event.target as HTMLInputElement;
    if (target.value === '') return;
    emit('update:modelValue', target.valueAsNumber);
};
</script>
