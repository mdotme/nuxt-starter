<template>
  <pre>
    {{ data }}
  </pre>
</template>

<script lang="ts" setup>
const route = useRoute();
const api = useApi();

const { data, error } = await useAsyncData(() =>
  api.get<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }>(`/todos/${route.params.id}`),
);
if (error.value) {
  showError({
    statusCode: 404,
  });
}

useSeoMeta({
  title: data.value?.title,
});
</script>
