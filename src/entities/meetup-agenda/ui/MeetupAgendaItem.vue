<template>
    <div class="agenda-item">
        <div class="agenda-item__col">
            <UiIcon :icon="agendaItemIcons[agendaItem.type]" />
        </div>
        <div class="agenda-item__col">{{ timeInterval }}</div>
        <div class="agenda-item__col">
            <h3 class="agenda-item__title">{{ title }}</h3>
            <p v-if="agendaItem.type === 'talk'" class="agenda-item__talk">
                <span>{{ agendaItem.speaker }}</span>
                <span class="agenda-item__dot"></span>
                <span class="agenda-item__lang">{{ agendaItem.language }}</span>
            </p>
            <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { UiIcon } from '@shared/ui';
import type { Agenda, AgendaTypes } from '@shared/types';
import type { IconTypes } from '@shared/ui/UiIcon.vue';

const agendaItemDefaultTitles: Record<string, string> = {
    registration: 'Регистрация',
    opening: 'Открытие',
    break: 'Перерыв',
    coffee: 'Coffee Break',
    closing: 'Закрытие',
    afterparty: 'Afterparty',
    talk: 'Доклад',
    other: 'Другое',
};

const agendaItemIcons: Record<AgendaTypes, IconTypes> = {
    registration: 'key',
    opening: 'cal-sm',
    talk: 'tv',
    break: 'clock',
    coffee: 'coffee',
    closing: 'key',
    afterparty: 'cal-sm',
    other: 'cal-sm',
};
</script>

<script setup lang="ts">
const props = defineProps<{ agendaItem: Agenda }>();

const title = computed(
    () => props.agendaItem.title || agendaItemDefaultTitles[props.agendaItem.type],
);
const timeInterval = computed(() => `${props.agendaItem.startsAt} - ${props.agendaItem.endsAt}`);
</script>

<style scoped>
.agenda-item {
    padding: 24px 0;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    line-height: 28px;
}

.agenda-item__col:nth-child(1) {
    flex: 1 0 48px;
    max-width: 48px;
}

.agenda-item__col:nth-child(2) {
    flex: 115px;
    max-width: 115px;
    color: var(--blue);
    white-space: nowrap;
}

.agenda-item__col:nth-child(3) {
    flex: 1 0 calc(100% - 48 - 115);
    max-width: calc(100% - 48 - 115);
    padding-left: 24px;
}

.agenda-item__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
}

.agenda-item__lang {
    font-style: italic;
}

.agenda-item__dot::before {
    content: '•';
    color: var(--grey);
    padding: 0 1ch;
}

.agenda-item__talk {
    margin-top: 16px;
    margin-bottom: 0;
}

@media all and (min-width: 992px) {
    .agenda-item {
        padding: 40px 0;
    }
}
</style>
