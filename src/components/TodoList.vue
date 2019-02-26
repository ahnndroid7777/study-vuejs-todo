<template>
  <div>
    <!-- style 부분에 적용된 트랜지션 애니메이션 적용을 위한 transition-group 구현부 -->
    <transition-group name="list" tag="ul">
      <li
        class="shadow"
        v-for="(todoItem, index) in this.$store.state.todoItems"
        v-bind:key="todoItem.item"
      >
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{checkBtnCompleted: todoItem.completed}"
          v-on:click="toggleComplete(todoItem, index)"
        ></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  /* App 컴포넌트로부터 내려 받은 데이터 맵핑 */
  props: ["propsdata"],
  methods: {
    /* 할일 삭제 시, 상위 컴포넌트인 App 컴포넌트의 removeTodoItem 이벤트 트리거링 */
    removeTodo(todoItem, index) {
      this.$emit("removeTodoItem", todoItem, index);
    },
    /* 임의의 선택된 할일에 대한 토글 상태 변경 시, 상위 컴포넌트인 App 컴포넌트의 toggleTodoItem 이벤트 트리거링 */
    toggleComplete(todoItem, index) {
      this.$emit("toggleTodoItem", todoItem, index);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0px;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration-line: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* [BEGIN] 할일 목록 대상 뷰 애니메이션 적용 관련 스타일링 구현부 */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-move {
  transition: transform 1s;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
/* [FINISHED] 할일 목록 대상 뷰 애니메이션 적용 관련 스타일링 구현부 */
</style>
