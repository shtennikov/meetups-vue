import { computed, type Ref } from 'vue';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { generateCalendarDays } from '@shared/lib/utils';

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

// eslint-disable-next-line max-lines-per-function
export function useCalendar(date: Ref<Date>) {
    const year = computed(() => date.value.getFullYear());
    const month = computed(() => date.value.getMonth());
    const daysInMonth = computed(() => dayjs(date.value).daysInMonth());
    const weekdayOfFistDay = computed(() => {
        const weekdayNum = dayjs(date.value.setDate(1)).weekday();
        // if the week starts on Sunday, you should just return the "weekday"
        return weekdayNum === 0 ? 6 : weekdayNum - 1;
    });
    const currentDateToString = computed(() =>
        date.value.toLocaleDateString(navigator.language, {
            month: 'long',
            year: 'numeric',
        }),
    );
    const weekdayOfLastDay = computed(() => {
        const weekdayNum = dayjs(date.value.setDate(daysInMonth.value)).weekday();
        // if the week starts on Sunday, you should just return the "weekday"
        return weekdayNum === 0 ? 6 : weekdayNum - 1;
    });
    const calendarDays = computed(() =>
        generateCalendarDays({
            date,
            year,
            month,
            daysInMonth,
            weekdayOfFistDay,
            weekdayOfLastDay,
        }),
    );

    return {
        year,
        month,
        currentDateToString,
        daysInMonth,
        weekdayOfFistDay,
        weekdayOfLastDay,
        calendarDays,
    };
}
