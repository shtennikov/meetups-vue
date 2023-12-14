<template>
    <UiCard tag="article" :cover="meetup.image" class="meetup-card">
        <template #header>
            {{ meetup.title }}
        </template>

        <template #default>
            <UiBadge v-if="meetup.organizing" type="success" class="meetup-card__badge"
                >Организую</UiBadge
            >
            <UiBadge v-if="meetup.attending" type="primary" class="meetup-card__badge"
                >Участвую</UiBadge
            >
            <MeetupInfo
                :date-iso="meetup.dateIso"
                :date="meetup.date"
                :place="meetup.place"
                :organizer="meetup.organizer"
            />
        </template>
    </UiCard>
</template>

<script setup lang="ts">
import { UiCard, UiBadge } from '@shared/ui';
import MeetupInfo from '@entities/meetup-card/ui/MeetupInfo.vue';
import type { Meetup } from '@/shared/types';

defineProps<{ meetup: Meetup }>();
</script>

<style scoped>
.meetup-card {
    position: relative;
}

.meetup-card__badge {
    position: absolute;
    top: 0;
    right: 0;
}
</style>
