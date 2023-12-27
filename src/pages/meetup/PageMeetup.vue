<template>
    <div class="page-meetups">
        <template v-if="meetup">
            <MeetupCover :title="meetup.title" :image="meetup.image" />
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Meetup } from '@shared/types';
import { meetupsRepository } from '@shared/api';
import { MeetupCover } from '@entities/meetup-cover';
import { onBeforeRouteLeave } from 'vue-router';

const props = defineProps<{ meetupId: number }>();

const meetup = ref<Meetup | null>(null);

const setMeetup = (value: Meetup) => {
    meetup.value = value;
};

const fetchMeetup = async () => {
    const result = await meetupsRepository.getMeetup(props.meetupId);
    setMeetup(result);
    // TODO обработка ошибок
};

fetchMeetup();
watch(() => props.meetupId, fetchMeetup);
onBeforeRouteLeave(() => {
    meetup.value = null;
});
</script>

<style scoped></style>
