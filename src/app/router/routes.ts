import type { RouteLocation } from 'vue-router';

export const routes = [
    {
        name: 'meetups',
        path: '/',
        alias: '/meetups',
        component: () => import('../../pages/meetups/PageMeetups.vue'),
        props: (route: RouteLocation) => ({
            query: route.query,
        }),
    },
    {
        name: 'meetup',
        path: '/meetups/:meetupId(\\d+)',
        component: () => import('../../pages/meetup/PageMeetup.vue'),
        props: (route: RouteLocation) => ({
            meetupId: Number(route.params.meetupId),
        }),
        meta: {
            showReturnToMeetups: true,
            // TODO scroll behavior
            // saveScrollPosition: true,
        },
    },
    {
        name: 'not-found',
        path: '/:catchAll(.*)*',
        component: () => import('../../pages/not-found/PageNotFound.vue'),
    },
];
