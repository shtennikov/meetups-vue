<template>
    <ul class="meetup-info">
        <li>
            <UiIcon class="icon meetup-info__icon" icon="user" />
            {{ organizer }}
        </li>
        <li>
            <UiIcon class="icon meetup-info__icon" icon="map" />
            {{ place }}
        </li>
        <li>
            <UiIcon class="icon meetup-info__icon" icon="cal-lg" />
            <time :datetime="dateIso">{{ localDate }}</time>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { UiIcon } from '@shared/ui';
import { getLocalDateString } from '@shared/lib/utils';

interface IProps {
    organizer: string;
    place: string;
    date: number;
    dateIso: string;
}
const props = defineProps<IProps>();

const localDate = computed(() => getLocalDateString(props.date));
</script>

<style scoped>
.meetup-info {
    margin: 0;
    padding: 0;
}

.meetup-info li {
    list-style-type: none;
    position: relative;
    padding-left: 36px;
    font-size: 18px;
    line-height: 28px;
    margin: 0 0 8px;
}

.meetup-info li:last-child {
    margin: 0;
}

.meetup-info__icon {
    position: absolute;
    left: 0;
    top: 0;
}
</style>
