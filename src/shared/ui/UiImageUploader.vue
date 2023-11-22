<template>
    <div class="image-uploader">
        <label
            class="image-uploader__preview"
            :class="{ 'image-uploader__preview-loading': state === 'loading' }"
        >
            <span class="image-uploader__text">{{ uploaderText }}</span>
            <input
                @click="handleRemove"
                @change="handleChange"
                type="file"
                ref="input"
                accept="image/*"
                class="image-uploader__input"
                v-bind="$attrs"
            />
        </label>
    </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';

const STATES = {
    EMPTY: 'empty',
    LOADING: 'loading',
    FILLED: 'filled',
} as const;

const UPLOADER_TEXT = {
    LOADING: 'Загрузка...',
    DELETE: 'Удалить изображение',
    UPLOAD: 'Загрузить изображение',
};

interface IProps {
    preview?: string | null;
    uploader?: Function | null;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<IProps>(), {
    preview: null,
    uploader: null,
});

const emit = defineEmits<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (event: 'upload', result: any): void;
    (event: 'error', error: Error): void;
    (event: 'select', file: File): void;
    (event: 'remove'): void;
}>();

defineOptions({ inheritAttrs: false });

const input = ref<HTMLInputElement | null>(null);
const state = ref<(typeof STATES)[keyof typeof STATES]>(STATES.EMPTY);
const localPreview = ref(props.preview);
const file = ref<File | null>(null);
const backgroundImage = computed(() =>
    localPreview.value ? `url(${localPreview.value})` : 'var(--default-cover)',
);
const uploaderText = computed(() => {
    if (state.value === STATES.LOADING) return UPLOADER_TEXT.LOADING;
    if (state.value === STATES.FILLED) return UPLOADER_TEXT.DELETE;
    return UPLOADER_TEXT.UPLOAD;
});

const resetUploader = (): void => {
    localPreview.value = null;
    if (input.value) input.value.value = '';
    state.value = STATES.EMPTY;
};

const handleError = (err: Error): void => {
    emit('error', err);
    resetUploader();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleSuccessUpload = (result: any): void => {
    state.value = STATES.FILLED;
    emit('upload', result);
};

const handleRemove = (event: Event): void => {
    if (state.value === STATES.FILLED) {
        event.preventDefault();
        emit('remove');
        resetUploader();
    }
};

const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    [file.value] = files;
    localPreview.value = URL.createObjectURL(file.value);
    emit('select', file.value);
    uploadFile(file.value);
};

const uploadFile = async (file: File): Promise<void> => {
    if (props.uploader) {
        state.value = STATES.LOADING;
        try {
            const result = await props.uploader(file);
            handleSuccessUpload(result);
        } catch (err) {
            if (err instanceof Error) handleError(err);
        }
    } else {
        state.value = STATES.FILLED;
    }
};
</script>

<style scoped>
.image-uploader__input {
    opacity: 0;
    height: 0;
}

.image-uploader__preview {
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        v-bind(backgroundImage);
    border: 2px solid var(--blue-light);
    border-radius: 8px;
    transition: 0.2s border-color;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 512px;
    height: 228px;
}

.image-uploader__text {
    color: var(--white);
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
}

.image-uploader__preview:hover {
    border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
    cursor: no-drop;
}
</style>
