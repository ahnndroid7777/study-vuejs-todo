/* 할일 추가 관련 mutations 적용 */
const addOneItem = (state, todoItem) => {
    const obj = {
        completed: false,
        item: todoItem
    };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

/* 할일 삭제 관련 mutations 적용 */
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}

/* 할일 상태 변경 관련 mutations 적용 */
const toggleOneItem = (state, payload) => {
    // 토글이 선택될때마다 토글 모드를 반대값으로 설정
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

    // 로컬 스토리지의 특정 레코드의 데이터를 갱신하는 로직부 (로컬 스토리지는 update가 별도로 없으므로 지웠다가 새로 넣는 형태로 구현)
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

/* 전체 할일 삭제 관련 mutations 적용 */
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export {
    addOneItem,
    removeOneItem,
    toggleOneItem,
    clearAllItems
}