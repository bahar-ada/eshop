const { createSlice } = require("@reduxjs/toolkit")

const INITIAL_STATE = { jwtToken: '' }
const usersSlice = createSlice({
    name: 'users',
    initialState: INITIAL_STATE,
    reducers: {
        setJwtToken(state, action) {
            state.jwtToken = action.payload
        },
        removeJwtToken(state) {
            state.jwtToken = ''
        }
    }
})

export const { setJwtToken, removeJwtToken } = usersSlice.actions
export default usersSlice.reducer