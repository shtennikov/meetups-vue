<template>
    <ul class="agenda">
        <li v-for="agendaItem in agenda" :key="agendaItem.id" class="agenda__item">
            <MeetupAgendaItem :agenda-item="agendaItem" />
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { Agenda } from '@shared/types';
import MeetupAgendaItem from './ui/MeetupAgendaItem.vue';

defineProps<{ agenda: Agenda[] }>();
</script>

<style scoped>
.agenda {
    margin: 0;
    padding: 0;
    list-style: none;
}

.agenda__item {
    border-top: 1px solid var(--grey-3);
}

.agenda__item:first-child {
    border-top: none;
}
</style>
