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
        redirect: (to: RouteLocation) => ({ name: 'meetup.description', params: to.params }),
        component: () => import('../../pages/meetup/PageMeetup.vue'),
        props: (route: RouteLocation) => ({
            meetupId: Number(route.params.meetupId),
        }),
        meta: {
            showReturnToMeetups: true,
            // TODO scroll behavior
            // saveScrollPosition: true,
        },
        children: [
            {
                name: 'meetup.description',
                path: '',
                alias: 'description',
                component: () => import('../../pages/meetup-description/PageMeetupDescription.vue'),
            },
            {
                path: 'agenda',
                name: 'meetup.agenda',
                component: () => import('../../pages/meetup-agenda/PageMeetupAgenda.vue'),
            },
        ],
    },
    {
        name: 'not-found',
        path: '/:catchAll(.*)*',
        component: () => import('../../pages/not-found/PageNotFound.vue'),
    },
];
