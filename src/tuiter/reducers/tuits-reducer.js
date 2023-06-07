import { createSlice } from "@reduxjs/toolkit";
import tuits from "../tuit-summary-list/tuits.json"

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

// const tuitsSlice = createSlice({
//  name: 'tuits',
//  initialState: { tuits: tuits }
// });

// export default tuitsSlice.reducer;

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: { tuits: tuits },
    reducers: {
        deleteTuit(state, action) {
            const index = state.tuits
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.tuits.splice(index, 1);
        },

        createTuit(state, action) {
            state.tuits.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
                tuit: "hello",
            })
        },

        likeTuit(state, action) {
            const tuit = state.tuits
                .find((tuit) =>
                    tuit._id === action.payload._id);
            const initialStatus = tuit.liked;
            {console.log("liked: ", tuit.liked, "likes: ", tuit.likes)}
            tuit.liked = !initialStatus;
            tuit.likes = initialStatus ? tuit.likes-1 : tuit.likes+1;
            {console.log("liked: ", tuit.liked, "likes: ", tuit.likes)}
            
        }
    }
});

export const { createTuit, deleteTuit, likeTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;