/* eslint-disable @typescript-eslint/explicit-function-return-type */
// @ts-nocheck
import { computed, getCurrentInstance, toRef } from 'vue';

export function useModelProxy() {
    const modelValue = toRef(getCurrentInstance().props);
    const { emit } = getCurrentInstance();

    return computed({
        get() {
            return modelValue.value;
        },

        set(value) {
            emit('update:modelValue', value);
        },
    });
}
