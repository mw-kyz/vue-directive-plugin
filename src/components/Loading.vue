<template>
  <div class="loading-wrap">
    <img src="../assets/loading.gif" alt="加载...">
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {

    }
  },
}
</script>

<style scoped>
.loading-wrap {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
}

.loading-wrap img {
  width: 100px;
  height: 100px;
}
</style>