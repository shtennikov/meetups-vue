<template>
    <div>
        <MeetupCover :title="meetup.title" :image="meetup.image" />

        <UiContainer>
            <div class="meetup">
                <div class="meetup__content">
                    <slot />
                </div>
                <div class="meetup__aside">
                    <MeetupInfo
                        :organizer="meetup.organizer"
                        :place="meetup.place"
                        :date="meetup.date"
                        :date-iso="meetup.dateIso"
                    />
                    <!-- TODO: Добавить проверку на аутентификацию и является ли пользователь организатором митапа -->
                    <!-- TODO: Реализовать кнопки (некоторые должны быть ссылками) -->
                </div>
            </div>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import { MeetupInfo } from '@entities/meetup-info';
import { MeetupCover } from '@entities/meetup-cover';
import { UiContainer } from '@shared/ui';
import type { Meetup } from '@shared/types';

defineProps<{ meetup: Meetup }>();

// TODO: Добавить обработку кнопок, включая работу с API
/*
      TODO: Добавить тосты при успешных операциях
            - Митап удалён
            - Сохранено
            - Текст ошибки в случае ошибки на API
     */
// TODO: Будет плюсом блокировать кнопку на время загрузки
</script>

<style scoped>
.meetup {
    display: flex;
    flex-direction: column;
    margin: 48px 0 0;
}

.meetup__aside {
    margin: 40px 0;
}

.meetup__aside-buttons {
    padding: 0 0 0 34px;
    margin-top: 16px;
}

.meetup__aside-button {
    margin: 0 10px 10px 0;
}

@media all and (min-width: 992px) {
    .meetup {
        flex-direction: row;
    }

    .meetup__content {
        flex: 1 0 calc(100% - 350px);
    }

    .meetup__aside {
        flex: 1 0 350px;
        padding: 50px 0 0 44px;
        margin: 0;
    }
}
</style>
