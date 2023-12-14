<template>
    <UiContainer>
        <!-- TODO filter data emit -->
        <MeetupsFilters />
        <template v-if="meetups">
            <!-- TODO add calendar view -->
            <MeetupsList :meetups="meetups" />
        </template>
        <UiAlert v-else>{{ ALERT_TEXT }}</UiAlert>
    </UiContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Meetup } from '@shared/types';
import { meetupsRepository } from '@shared/api';
import { UiContainer, UiAlert } from '@shared/ui';
import { MeetupsFilters } from '@widgets/meetups-filters';
import MeetupsList from './ui/MeetupsList.vue';

const ALERT_TEXT = 'Загрузка...';
// TODO add filteredMeetups
const meetups = ref<Meetup[] | null>(null);

meetupsRepository.getMeetups().then((data) => {
    meetups.value = data;
});
</script>

<style scoped></style>
