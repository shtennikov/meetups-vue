<template>
    <UiTransitionGroupFade class="meetups-list">
        <li v-for="meetup in meetups" :key="meetup.id" class="meetups-list__item">
            <RouterLink
                :to="{ name: 'meetup', params: { meetupId: meetup.id } }"
                class="meetups-list__item-link"
                tabindex="0"
            >
                <MeetupCard :meetup="meetup" />
            </RouterLink>
        </li>
    </UiTransitionGroupFade>
</template>

<script setup lang="ts">
import { MeetupCard } from '@entities/meetup-card';
import { UiTransitionGroupFade } from '@shared/ui';
import type { Meetup } from '@shared/types';

defineProps<{ meetups: Meetup[] }>();
</script>

<style scoped>
.meetups-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.meetups-list__item {
    margin: 0 0 32px 0;
    text-decoration: none;
}

.meetups-list__item-link {
    text-decoration: none;
    color: inherit;
}
</style>
