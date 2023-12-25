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
        name: 'not-found',
        path: '/:catchAll(.*)*',
        component: () => import('../../pages/not-found/PageNotFound.vue'),
    },
];
