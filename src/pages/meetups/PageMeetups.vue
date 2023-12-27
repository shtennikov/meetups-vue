<template>
    <UiContainer>
        <MeetupsFilters v-model="filterOptions" />
        <KeepAlive v-if="meetups" include="MeetupsCalendar">
            <component
                :is="meetupsViewComponent"
                v-if="filteredMeetups.length"
                :meetups="filteredMeetups"
            />
            <UiAlert v-else>{{ ALERT_TEXT_EMPTY }}</UiAlert>
        </KeepAlive>
        <UiAlert v-else>{{ ALERT_TEXT }}</UiAlert>
    </UiContainer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Meetup } from '@shared/types';
import { meetupsRepository } from '@shared/api';
import { UiContainer, UiAlert } from '@shared/ui';
import { MeetupsFilters } from '@widgets/meetups-filters';
import { useFilteredMeetups } from '@pages/meetups/model/useFilteredMeetups';
import { useQuerySync } from '@pages/meetups/model/useQuerySync';
import { MeetupsList } from '@entities/meetups-list';
import { MeetupsCalendar } from '@entities/meetups-calendar';
import { useRouter, type LocationQuery } from 'vue-router';

const ALERT_TEXT = 'Загрузка...';
const ALERT_TEXT_EMPTY = 'Митапов по заданным условиям не найдено...';

const router = useRouter();
const props = defineProps<{ query: LocationQuery }>();
const { filterOptions } = useQuerySync(router, props);

const meetups = ref<Meetup[] | null>(null);
meetupsRepository.getMeetups().then((data) => {
    meetups.value = data;
});
const filteredMeetups = useFilteredMeetups(meetups, filterOptions);

const viewComponents = {
    list: MeetupsList,
    calendar: MeetupsCalendar,
};
const meetupsViewComponent = computed(() => viewComponents[filterOptions.value.view]);
</script>

<style scoped></style>
