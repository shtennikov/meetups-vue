<template>
    <div class="filters-panel">
        <div class="filters-panel__col">
            <MeetupsFilterByDate v-model="modelProxy.date" />
        </div>
        <div class="filters-panel__col">
            <MeetupsSearch v-model="modelProxy.search" />
            <MeetupsViewToggle v-model="modelProxy.view" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { MeetupsFilterByDate } from '@features/filter-by-date';
import { MeetupsSearch } from '@features/search';
import { MeetupsViewToggle } from '@features/toggle-view';
import type { FilterOptions } from '@shared/types';
import { useModelProxy } from '@shared/lib/composables';

const props = defineProps<{
    modelValue: FilterOptions;
}>();

const modelProxy = useModelProxy<typeof props.modelValue>();
</script>

<style scoped>
.filters-panel {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 40px 0 32px 0;
}

.filters-panel__col {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

@media all and (max-width: 767px) {
    .filters-panel {
        flex-direction: column;
    }

    .filters-panel__col + .filters-panel__col {
        margin-top: 16px;
    }
}
</style>
