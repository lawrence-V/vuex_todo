import Vue from 'vue'
import {mapGetters, mapActions} from "vuex"

export default  () => {
    Vue.mixin({
        data: () => ({

        }),
        
        computed: ({
            ...mapGetters({
                all_todos: 'todos/allTodos'
            }),
            
        }),

        methods: ({
            ...mapActions({
                FETCH_TODOS: 'todos/fetchTodos'
            })
        }),
        
    })
}