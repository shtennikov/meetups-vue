import type { FilterOptions } from '@shared/types';
import { ref } from 'vue';
import type { LocationQuery } from 'vue-router';

export const getFilterOptions = (props: { query: LocationQuery }) => {
    const { date, participation, search, view } = props.query;

    return ref<FilterOptions>({
        date: date && typeof date === 'string' ? date : 'all',
        participation: participation && typeof participation === 'string' ? participation : 'all',
        search: search && typeof search === 'string' ? search : '',
        view: view === 'calendar' ? 'calendar' : 'list',
    });
};
