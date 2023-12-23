<template>
    <UiContainer>
        <MeetupsFilters v-model="filterOptions" />
        <template v-if="meetups">
            <!-- TODO add calendar view -->
            <MeetupsList :meetups="filteredMeetups" />
        </template>
        <UiAlert v-else>{{ ALERT_TEXT }}</UiAlert>
    </UiContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Meetup, Filters, View } from '@shared/types';
import { meetupsRepository } from '@shared/api';
import { UiContainer, UiAlert } from '@shared/ui';
import { MeetupsFilters } from '@widgets/meetups-filters';
import { useFilteredMeetups } from '@pages/meetups/model/useFilteredMeetups';
import { MeetupsList } from '@entities/meetups-list';

const ALERT_TEXT = 'Загрузка...';

const meetups = ref<Meetup[] | null>(null);
const filterOptions = ref<Filters & { view: View }>({
    date: 'all',
    participation: 'all',
    search: '',
    view: 'list',
});
const filteredMeetups = useFilteredMeetups(meetups, filterOptions);

meetupsRepository.getMeetups().then((data) => {
    meetups.value = data;
});
</script>

<style scoped></style>
