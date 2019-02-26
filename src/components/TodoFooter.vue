<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    /* 상위 컴포넌트인 App 컴포넌트로 모든 할일들을 삭제하도록 clearAll 이벤트 트리거링 */
    clearTodo() {
      this.$emit("clearAll");
    }
  }
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: black;
}
</style>
