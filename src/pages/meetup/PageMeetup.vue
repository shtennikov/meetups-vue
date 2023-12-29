<template>
    <div class="page-meetups">
        <MeetupView v-if="meetup" :meetup="meetup">
            <UiTabs>
                <template #tabs>
                    <UiTabsLink :to="{ name: 'meetup.description' }">Описание</UiTabsLink>
                    <UiTabsLink :to="{ name: 'meetup.agenda' }">Программа</UiTabsLink>
                </template>
                <template #default>
                    <RouterView :meetup="meetup" />
                </template>
            </UiTabs>
        </MeetupView>

        <!-- TODO при ошибке отображать сообщение -->
        <!-- <UiContainer v-else-if="error">
            <UiAlert>{{ error }}</UiAlert>
        </UiContainer> -->
        <!-- TODO отображается загрузка если зайти на митап -> назад -> снова на этот же митап  -->
        <UiContainer v-else>
            <UiAlert>Загрузка...</UiAlert>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Meetup } from '@shared/types';
import { meetupsRepository } from '@shared/api';
import { UiAlert, UiContainer, UiTabsLink, UiTabs } from '@shared/ui';
import { MeetupView } from '@widgets/meetup-view';
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
