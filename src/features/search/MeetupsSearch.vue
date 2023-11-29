<template>
    <UiFormGroup inline>
        <UiInput v-model.trim="modelProxy" rounded small placeholder="Поиск" type="search">
            <template #left-icon>
                <UiIcon icon="search" />
            </template>
        </UiInput>
    </UiFormGroup>
</template>

<script setup lang="ts">
import { UiFormGroup, UiInput, UiIcon } from '@shared/ui';
import { useModelProxy } from '@shared/lib/composables';

const props = defineProps<{ modelValue: string }>();
defineEmits<{ 'update:modelValue': [value: string] }>();

const modelProxy = useModelProxy<typeof props.modelValue>();
</script>

<style scoped></style>
