<template>
  <div>
    <ul>
      <li class="shadow" v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
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
    </ul>
  </div>
</template>

<script>
export default {
  /* App 컴포넌트로부터 내려 받은 데이터 맵핑 */
  props: ["propsdata"],
  methods: {
    /* 할일 삭제 시, 상위 컴포넌트인 App 컴포넌트의 removeTodoItem 이벤트 트리거링 */
    removeTodo: function(todoItem, index) {
      this.$emit("removeTodoItem", todoItem, index);
    },
    /* 임의의 선택된 할일에 대한 상태 변경 메소드 구현부 */
    toggleComplete: function(todoItem, index) {
      // 토글이 선택될때마다 토글 모드를 반대값으로 설정
      todoItem.completed = !todoItem.completed;

      // 로컬 스토리지의 특정 레코드의 데이터를 갱신하는 로직부 (로컬 스토리지는 update가 별도로 없으므로 지웠다가 새로 넣는 형태로 구현)
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
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
</style>
