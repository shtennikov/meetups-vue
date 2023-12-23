<template>
    <UiContainer>
        <MeetupsFilters v-model="filterOptions" />
        <template v-if="meetups">
            <!-- TODO add query to URL -->
            <component
                :is="meetupsViewComponent"
                v-if="filteredMeetups.length"
                :meetups="filteredMeetups"
            />
            <UiAlert v-else>{{ ALERT_TEXT_EMPTY }}</UiAlert>
        </template>
        <UiAlert v-else>{{ ALERT_TEXT }}</UiAlert>
    </UiContainer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Meetup, Filters, View } from '@shared/types';
import { meetupsRepository } from '@shared/api';
import { UiContainer, UiAlert } from '@shared/ui';
import { MeetupsFilters } from '@widgets/meetups-filters';
import { useFilteredMeetups } from '@pages/meetups/model/useFilteredMeetups';
import { MeetupsList } from '@entities/meetups-list';
import { MeetupsCalendar } from '@entities/meetups-calendar';

const ALERT_TEXT = 'Загрузка...';
const ALERT_TEXT_EMPTY = 'Митапов по заданным условиям не найдено...';

const meetups = ref<Meetup[] | null>(null);
const filterOptions = ref<Filters & { view: View }>({
    date: 'all',
    participation: 'all',
    search: '',
    view: 'list',
});
const filteredMeetups = useFilteredMeetups(meetups, filterOptions);

const viewComponents = {
    list: MeetupsList,
    calendar: MeetupsCalendar,
};
const meetupsViewComponent = computed(() => viewComponents[filterOptions.value.view]);

meetupsRepository.getMeetups().then((data) => {
    meetups.value = data;
});
</script>

<style scoped></style>
