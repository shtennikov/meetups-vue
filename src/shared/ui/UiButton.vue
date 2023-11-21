<template>
    <component
        :is="tag"
        :class="[`button_${variant}`, { button_block: block }]"
        :type="buttonType"
        class="button"
    >
        <slot />
    </component>
</template>

<script lang="ts">
import { computed } from 'vue';

const VARIANTS = { primary: 'primary', secondary: 'secondary', danger: 'danger' } as const;

type Variants = (typeof VARIANTS)[keyof typeof VARIANTS];

interface IProps {
    tag?: string | object;
    variant?: Variants;
    block?: boolean;
    type?: string;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<IProps>(), {
    tag: 'button',
    variant: VARIANTS.secondary,
    block: false,
});

const buttonType = computed(() => {
    if (props.tag === 'button') {
        return props.type ?? 'button';
    }
    return props.type;
});
</script>

<style scoped>
.button {
    display: inline-block;
    padding: 10px 24px;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: initial;
    text-align: center;
    border: 4px solid transparent;
    transition-duration: 0.2s;
    transition-property: background-color, border-color, color;
    outline: none;
    box-shadow: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;
}

.button.button_block {
    display: block;
    width: 100%;
}

.button_primary {
    background-color: var(--blue);
    border-color: var(--blue);
    color: var(--white);
}

.button_primary:hover {
    background-color: var(--blue-light);
    border-color: var(--blue-light);
}

.button_secondary {
    background-color: var(--white);
    border-color: var(--blue);
    color: var(--blue);
}

.button_secondary:hover {
    border-color: var(--blue-light);
}

.button_danger {
    background-color: var(--white);
    border-color: var(--red);
    color: var(--red);
}

.button_danger:hover {
    border-color: var(--red-light);
}
</style>
