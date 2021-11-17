<template>
  <div class="layout-content">
    <h2 class="layout-content__title">
      <slot name="title">Лучшие товары</slot>
    </h2>
    <main class="layout-content__container">
      <slot name="content"></slot>
    </main>
    <footer class="layout-content__footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style scoped>
.layout-content {
  display: block;
  width: 100%;
}

.layout-content__title {
  margin: 0 0 24px;
}

.layout-content__footer {
  display: flex;
}
</style>
