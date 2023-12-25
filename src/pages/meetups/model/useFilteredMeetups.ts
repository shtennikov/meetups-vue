import type { FilterOptions, Filters, Meetup } from '@shared/types';
import { computed, type ComputedRef, type Ref } from 'vue';

let cache: Filters | null = null;

// eslint-disable-next-line max-lines-per-function
export function useFilteredMeetups(
    meetups: Ref<Meetup[] | null>,
    filterOptions: Ref<FilterOptions>,
): ComputedRef<Meetup[]> {
    return computed(() => {
        const { search, date, participation } = filterOptions.value;

        let filteredMeetups = meetups.value || [];

        if (cache?.date !== date) {
            const now = new Date();

            switch (date) {
                case 'future':
                    filteredMeetups = filteredMeetups.filter(
                        (meetup) => new Date(meetup.date) > now,
                    );
                    break;
                case 'past':
                    filteredMeetups = filteredMeetups.filter(
                        (meetup) => new Date(meetup.date) < now,
                    );
                    break;
                default:
                    filteredMeetups = meetups.value || [];
            }
        }

        // TODO filter by participation
        if (cache?.search !== search) {
            const loweredSearch = search.toLowerCase();
            filteredMeetups = filteredMeetups.filter(
                (meetup) =>
                    meetup.title.toLowerCase().includes(loweredSearch) ||
                    meetup.organizer.toLowerCase().includes(loweredSearch) ||
                    meetup.place.toLowerCase().includes(loweredSearch),
            );
        }

        cache = { search, date, participation };

        return filteredMeetups;
    });
}
