<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    /* 할일 추가 메소드 구현부 */
    addTodo: function() {
      // 입력 텍스트필드에 값이 있을 때만 로컬 스토리지에 저장하도록 분기
      if (this.newTodoItem !== "") {
        // 체크박스의 상태값과 값을 객체로 저장하기 위한 선언
        var obj = {
          completed: false, // 할일 완료 상태 플래그성 객체 프로퍼티
          item: this.newTodoItem // 할일에 관한 실제 내용을 담을 객체 프로퍼티
        };
        // 입력 텍스트필드에 값이 입력되었을때, 로컬 스토리지에 JSON 타입의 값으로 저장
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem = "";
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
