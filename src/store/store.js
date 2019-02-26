import Vue from 'vue'
import Vuex from 'vuex'

/* 모든 전역에서 Vuex를 사용할 수 있도록 선언 */
Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    // 로컬 스토리지에 저장된 객체 타입의 문자열을 JSON 타입으로 변환하여 할 일 리스트(= todoItems) 배열에 저장
                    arr.push(
                        JSON.parse(localStorage.getItem(localStorage.key(i)))
                    );
                }
            }
        }
        return arr;
    }
};

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = {
                completed: false,
                item: todoItem
            };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        }
    }
});