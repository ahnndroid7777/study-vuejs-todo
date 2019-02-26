<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    /* mapMutations를 이용하여 Store(= Vuex)로 전체 할일 삭제 이벤트를 트리거링하는 구현부 */
    ...mapMutations({
      clearTodo: "clearAllItems"
    })
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
