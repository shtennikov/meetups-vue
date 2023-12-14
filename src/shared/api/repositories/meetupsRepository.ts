import type { Meetup } from '@shared/types';
import { httpClient } from '@shared/api/httpClient';

export const meetupsRepository = {
    async getMeetups(): Promise<Meetup[]> {
        const response = await httpClient.get('/meetups');
        const meetups = response.data as Meetup[];
        return meetups;
    },

    async getMeetup(id: number): Promise<Meetup> {
        const response = await httpClient.get(`/meetups/${id}`);
        const meetup = response.data as Meetup;
        return meetup;
    },
};
