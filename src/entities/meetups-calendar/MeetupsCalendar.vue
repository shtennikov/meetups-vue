<template>
    <UiCalendarView v-slot="{ dateStringOfDay }">
        <template v-if="meetupsMap[dateStringOfDay]">
            <UiCalendarEvent
                v-for="meetup in meetupsMap[dateStringOfDay]"
                :key="meetup.id"
                tag="a"
                :href="`/meetups/${meetup.id}`"
            >
                {{ meetup.title }}
            </UiCalendarEvent>
        </template>
    </UiCalendarView>
</template>

<script setup lang="ts">
import type { Meetup } from '@shared/types';
import { UiCalendarView, UiCalendarEvent } from '@shared/ui';
import { computed } from 'vue';

type MeetupsMap = Record<string, Meetup[]>;

const props = defineProps<{ meetups: Meetup[] }>();
const meetupsMap = computed<MeetupsMap>(() => {
    const result: MeetupsMap = {};

    props.meetups.forEach((meetup) => {
        const meetupDateToString = new Date(meetup.date).toDateString();

        if (!result[meetupDateToString]) {
            result[meetupDateToString] = [meetup];
        } else {
            result[meetupDateToString].push(meetup);
        }
    });

    return result;
});
</script>

<style scoped></style>
