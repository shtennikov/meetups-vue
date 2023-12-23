import type { Filters, Meetup, View } from '@shared/types';
import { computed, type ComputedRef, type Ref } from 'vue';

let cache: Filters | null = null;

// eslint-disable-next-line max-lines-per-function
export function useFilteredMeetups(
    meetups: Ref<Meetup[] | null>,
    filterOptions: Ref<Filters & { view: View }>,
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
            filteredMeetups = filteredMeetups.filter(
                (meetup) =>
                    meetup.title.includes(search) ||
                    meetup.organizer.includes(search) ||
                    meetup.place.includes(search),
            );
        }

        cache = { search, date, participation };

        return filteredMeetups;
    });
}
