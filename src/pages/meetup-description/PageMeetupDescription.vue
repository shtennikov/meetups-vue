<template>
    <MeetupDescription :description="meetup.description" />
</template>

<script setup lang="ts">
import type { Meetup } from '@shared/types';
import { MeetupDescription } from '@entities/meetup-description';

defineProps<{ meetup: Meetup }>();
</script>

<style scoped></style>
