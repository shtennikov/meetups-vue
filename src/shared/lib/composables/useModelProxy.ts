import { computed, getCurrentInstance, toRef } from 'vue';

export function useModelProxy<T>() {
    const instance = getCurrentInstance();
    const props = instance?.props;
    if (!props) {
        throw new Error(
            'A component that uses useModelProxy must have a props with the modelValue property',
        );
    }
    const modelValue = toRef(instance?.props, 'modelValue');
    const emit = instance?.emit;

    return computed<T>({
        get(): T {
            return modelValue.value as T;
        },

        set(value) {
            emit?.('update:modelValue', value);
        },
    });
}
