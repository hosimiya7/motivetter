export const state = () => ({
    selectedCursor: 1,
    selectedCommand: 0
    })

export const mutations = {
    increment(state) {
        if(state.selectedCursor < 4){
            state.selectedCursor++
        }
    },
    decrement(state) {
        if(state.selectedCursor > 1){
            state.selectedCursor--
        }
    },
    setSelectedCommand(state, command){
        state.selectedCommand = command
    }
}
