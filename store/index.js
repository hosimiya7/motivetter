export const state= () => ({
    selectedCursor
})

export const mutations = {
    increment(state) {
        if(state.selectedCursor < 4){
            state.selectedCursor++
        }
    }
}
