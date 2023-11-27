export const routes = [
    {
        name: 'meetups',
        path: '/',
        component: () => import('../../pages/meetups/PageMeetups.vue'),
    },
    {
        name: 'not-found',
        path: '/:catchAll(.*)*',
        component: () => import('../../pages/not-found/PageNotFound.vue'),
    },
];
