<script setup>

</script>

<template>
  <div class="not-found-page-root">
    <h1 class="code">🚫 404</h1>
    <h1 class="message">Not Found</h1>
  </div>
</template>

<style scoped lang="scss">
.not-found-page-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > .code {
    font-size: 72px;
  }

  & > .message {
    font-size: 48px;
  }
}
</style>