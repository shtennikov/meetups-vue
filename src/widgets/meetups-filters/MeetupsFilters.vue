<template>
    <div class="filters-panel">
        <div class="filters-panel__col">
            <!-- filter-by-date -->
            <MeetupsFilterByDate v-model="filter.date" />
        </div>
        <div class="filters-panel__col">
            <!-- search -->
            <MeetupsSearch v-model="filter.search" />
            <!-- toggle-view -->
            <MeetupsViewToggle v-model="view" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MeetupsFilterByDate } from '@features/filter-by-date';
import { MeetupsSearch } from '@features/search';
import { MeetupsViewToggle } from '@features/toggle-view';

const filter = ref({
    date: 'all',
    participation: 'all',
    search: '',
});

const view = ref<'list' | 'calendar'>('list');
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
