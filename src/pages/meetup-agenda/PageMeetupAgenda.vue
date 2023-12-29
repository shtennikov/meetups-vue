<template>
    <MeetupAgenda v-if="meetup.agenda.length" :agenda="meetup.agenda" />
    <UiAlert v-else>{{ ALERT_TEXT }}</UiAlert>
</template>

<script setup lang="ts">
import { MeetupAgenda } from '@entities/meetup-agenda';
import { UiAlert } from '@shared/ui';
import type { Meetup } from '@shared/types';

const ALERT_TEXT = 'Программа пока пуста...';

defineProps<{ meetup: Meetup }>();
</script>

<style scoped></style>
