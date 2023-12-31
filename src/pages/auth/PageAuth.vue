<template>
    <div class="page-auth">
        <AuthForm />
    </div>
</template>

<script setup lang="ts">
import { AuthForm } from '@features/auth';
</script>

<style scoped>
.page-auth {
    max-width: 374px;
    width: 100%;
    margin: 0 auto;
    padding: 48px 0;
}
</style>
