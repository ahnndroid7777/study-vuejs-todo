<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!-- 컴포넌트 재사용 예 => Modal 컴포넌트 내 특정 이름을 가진 slot 부분에 해당하는 컨텐츠를 재정의할 수 있음! -->
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fas fa-times-circle" v-on:click="showModal = false"></i>
      </h3>
      <div slot="body">아무것도 입력하지 않으셨습니다.</div>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    /* 상위 컴포넌트인 App 컴포넌트로 할일 추가 이벤트 트리거하는 메소드 구현부 */
    addTodo() {
      // 입력 텍스트필드에 값이 있을 때만 로컬 스토리지에 저장하도록 분기
      if (this.newTodoItem !== "") {
        // this.$emit("addTodoItem", this.newTodoItem);
        const text = this.newTodoItem.trim();
        this.$store.commit("addOneItem", text);
        this.clearInput();
      }
      // 텍스트필드에 입력된 값이 없는 상태에서 추가 버튼 클릭 시, 경고 모달이 뜨도록 구현
      else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  },
  components: {
    /*
      [ES5] 속성명 축약 미적용
      'Modal' : Modal
     */

    /* [ES6] 속성명 축약 적용 */
    Modal
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
.closeModalBtn {
  color: #42b983;
}
</style>
