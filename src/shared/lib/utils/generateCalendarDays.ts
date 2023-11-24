import type { ComputedRef, Ref } from 'vue';
import dayjs from 'dayjs';
import type { DayData } from '@/shared/types';

interface GenerateCalendarDaysArgs {
    date: Ref<Date>;
    year: ComputedRef<number>;
    month: ComputedRef<number>;
    daysInMonth: ComputedRef<number>;
    weekdayOfFistDay: ComputedRef<number>;
    weekdayOfLastDay: ComputedRef<number>;
}

export function generateCalendarDays({
    date,
    year,
    month,
    daysInMonth,
    weekdayOfFistDay,
    weekdayOfLastDay,
}: GenerateCalendarDaysArgs): DayData[] {
    const calendarDays = [];
    const daysInPrevMonth = dayjs(date.value).subtract(1, 'month').endOf('month').date();
    const daysInCurrentMonth = daysInMonth;

    for (let i = weekdayOfFistDay.value - 1; i >= 0; i -= 1) {
        const day = daysInPrevMonth - i;
        calendarDays.push({
            day,
            stringDate: new Date(year.value, month.value, day).toDateString(),
            isCurrentMonth: false,
        });
    }
    // Add the days of the current month
    for (let day = 1; day <= daysInCurrentMonth.value; day += 1) {
        calendarDays.push({
            day,
            stringDate: new Date(year.value, month.value, day).toDateString(),
            isCurrentMonth: true,
        });
    }
    // Add the days of the next month to the last week
    for (let day = 1; day < 7 - weekdayOfLastDay.value; day += 1) {
        calendarDays.push({
            day,
            stringDate: new Date(year.value, month.value, day).toDateString(),
            isCurrentMonth: false,
        });
    }

    return calendarDays;
}
