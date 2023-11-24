<template>
    <div class="calendar-view">
        <UiCalendarControls
            :current-date="currentDateToString"
            @toggle-left="setPrevMonth"
            @toggle-right="setNextMonth"
        />

        <div class="calendar-view__grid">
            <div
                v-for="(day, index) in calendarDays"
                :key="index"
                class="calendar-view__cell"
                :class="{ 'calendar-view__cell_inactive': !day.isCurrentMonth }"
                tabindex="0"
            >
                <div class="calendar-view__cell-day">{{ day.day }}</div>
                <div class="calendar-view__cell-content">
                    <slot
                        :year="year"
                        :month="month"
                        :day="day.day"
                        :dateStringOfDay="day.stringDate"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { useCalendar } from '@shared/lib/composables/useCalendar';
import UiCalendarControls from '@shared/ui/UiCalendarControls.vue';

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

const date = ref(new Date());
const { year, month, currentDateToString, calendarDays } = useCalendar(date);

const setNextMonth = (): void => {
    date.value = new Date(year.value, month.value + 1);
};

const setPrevMonth = (): void => {
    date.value = new Date(year.value, month.value - 1);
};
</script>

<style scoped>
.calendar-view__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
}

.calendar-view__grid {
    border: 1px solid var(--grey);
    border-bottom: none;
}

.calendar-view__cell {
    position: relative;
    height: auto;
    padding: 6px 8px;
    background-color: var(--white);
    color: var(--grey-8);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-bottom: 1px solid var(--grey);
    border-left: 1px solid var(--grey);
    text-align: right;
}

.calendar-view__cell.calendar-view__cell_inactive {
    background-color: var(--grey-light);
}

@media all and (max-width: 767px) {
    .calendar-view__cell:nth-child(5n + 1) {
        border-left: none;
    }
}

@media all and (min-width: 767px) {
    .calendar-view__grid {
        grid-template-columns: repeat(7, 1fr);
    }

    .calendar-view__cell {
        height: 144px;
    }

    .calendar-view__cell:nth-child(7n + 1) {
        border-left: none;
    }
}
</style>
