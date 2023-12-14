export function getLocalDateString(date: number) {
    return new Date(date).toLocaleDateString(navigator.language, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}
