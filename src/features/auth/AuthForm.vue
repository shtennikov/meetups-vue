<template>
    <UiForm>
        <UiFormGroup label="Email">
            <UiInput v-model="email" name="email" type="email" placeholder="demo@email" required />
        </UiFormGroup>
        <UiFormGroup label="Пароль">
            <UiInput
                v-model="password"
                name="password"
                type="password"
                placeholder="password"
                required
            />
        </UiFormGroup>

        <template #buttons>
            <UiButton variant="primary" type="submit" block>Войти</UiButton>
        </template>

        <template #append>
            Нет аккаунта? <UiLink to="/register" class="link">Зарегистрируйтесь</UiLink>
        </template>
    </UiForm>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { UiForm, UiInput, UiFormGroup, UiButton, UiLink } from '@shared/ui';

const password = ref('');
const email = ref('');
</script>

<style scoped></style>
