import { getQueries } from '@pages/meetups/lib/getQueries';
import { getFilterOptions } from '@pages/meetups/lib/getFilterOptions';
import { watch } from 'vue';
import type { LocationQuery, Router } from 'vue-router';

export function useQuerySync(router: Router, props: { query: LocationQuery }) {
    const filterOptions = getFilterOptions(props);

    watch(
        filterOptions,
        () => {
            const queries = getQueries(filterOptions.value);
            router.push({ query: queries });
        },
        { deep: true },
    );

    return { filterOptions };
}
