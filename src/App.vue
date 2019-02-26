<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeTodoItem="removeOneItem"
      v-on:toggleTodoItem="toggleOneItem"
    ></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data() {
    return {
      todoItems: []
    };
  },
  methods: {
    /* TodoInput 하위 컴포넌트로부터 입력된 텍스트필드의 값을 저장하도록 호출된 이벤트 수신 처리 메소드 구현부 */
    addOneItem(todoItem) {
      // 체크박스의 상태값과 값을 객체로 저장하기 위한 선언
      const obj = {
        completed: false, // 할일 완료 상태 플래그성 객체 프로퍼티
        item: todoItem // TodoInput 하위 컴포넌트로부터 전달된 할일의 실제 내용을 담는 객체 프로퍼티
      };
      // 입력 텍스트필드에 값이 입력되었을때, 로컬 스토리지에 JSON 타입의 값으로 저장
      localStorage.setItem(todoItem, JSON.stringify(obj));
      // 할일 리스트 배열에 전달된 할일의 값 저장
      this.todoItems.push(obj);
    },
    /* TodoList 하위 컴포넌트로부터 삭제 이벤트인 removeTodoItem 이벤트를 수신하여 삭제 처리하도록 구현된 메소드 */
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    /* TodoList 하위 컴포넌트로부터 임의의 할일에 대한 토글 선택 시, 해당 이벤트를 수신하여 토글 처리하도록 구현된 메소드 */
    toggleOneItem(todoItem, index) {
      // 토글이 선택될때마다 토글 모드를 반대값으로 설정
      this.todoItems[index].completed = !this.todoItems[index].completed;

      // 로컬 스토리지의 특정 레코드의 데이터를 갱신하는 로직부 (로컬 스토리지는 update가 별도로 없으므로 지웠다가 새로 넣는 형태로 구현)
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    /* TodoFooter 하위 컴포넌트로부터 모든 할일 삭제 이벤트를 수신하여 처리하도록 구현된 메소드 */
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  components: {
    /* 
      [ES5] 속성명 축약 미적용
      'TodoHeader' : TodoHeader,
      'TodoInput' : TodoInput,
      'TodoList' : TodoList,
      'TodoFooter' : TodoFooter
     */

    /* [ES6] 속성명 축약 적용 */
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
