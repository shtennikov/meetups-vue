<template>
    <div class="page-meetups">
        <template v-if="meetup">
            <UiContainer>
                <MeetupCover :title="meetup.title" :image="meetup.image" />
                <MeetupInfo v-bind="meetup" />

                <UiTabs>
                    <template #tabs>
                        <UiTabsLink :to="{ name: 'meetup.description' }">Описание</UiTabsLink>
                        <UiTabsLink :to="{ name: 'meetup.agenda' }">Программа</UiTabsLink>
                    </template>
                </UiTabs>

                <RouterView :meetup="meetup" />
            </UiContainer>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Meetup } from '@shared/types';
import { meetupsRepository } from '@shared/api';
import { UiContainer, UiTabsLink, UiTabs } from '@shared/ui';
import { MeetupCover } from '@entities/meetup-cover';
import { MeetupInfo } from '@entities/meetup-info';
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

// TODO перед переходом на маршрут грузить данные, лишь потом открывать страницу
fetchMeetup();
watch(() => props.meetupId, fetchMeetup);
onBeforeRouteLeave(() => {
    meetup.value = null;
});
</script>

<style scoped></style>
