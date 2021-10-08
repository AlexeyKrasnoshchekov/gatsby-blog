import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import Data from "../../data/weatherAPI";
const MyAccessKey = 'xjVDU29JVcBNRW4ZmdS69hKLe0GUlcSMNt9qEZKN4sg';
console.log('MyAccessKey', MyAccessKey);
const API_URL = `https://api.unsplash.com/photos/random/?client_id=${MyAccessKey}&orientation=landscape&count=5`;

const initialState = {
    images: [],
    bgImageUrl:"",
    bgImageIndex:0,
    isLoadingImage: false,
    failedToLOadImage: false
};


// export const loadImage = createAsyncThunk(  
//     'quote/loadImage',
//     async () => {
//         // console.log('Data', Data);
//         const response = await fetch('/data.json', {
//             headers : { 
//               'Content-Type': 'application/json',
//               'Accept': 'application/json'
//             }
//         });
//         // console.log('response', response);
//         const json = await response.json();
//         console.log('loadImage', json);
//         return json;
//     }
// )
export const loadImage = createAsyncThunk(  
    'quote/loadImage',
    async () => {
        // console.log('Data', Data);
        let data = await fetch(API_URL);
        // console.log('response', response);
        const json = await data.json();
        console.log('2222222jsonImage', json);
        return json;
    }
)

export const imageSlice = createSlice({
    name: 'image',
    initialState: initialState,
    reducers: {
        prevImage: (state, action) => {
            if (state.bgImageIndex > 0 && state.bgImageIndex <=4) {
                state.bgImageIndex--;
            } else {
                state.bgImageIndex = 4;
            }
            
            state.bgImageUrl = state.images[state.bgImageIndex].urls.full;
            
        },
        nextImage: (state, action) => {
            if (state.bgImageIndex >= 0 && state.bgImageIndex < 4) {
                state.bgImageIndex++;
            } else {
                state.bgImageIndex = 0;
            }
            console.log('state.bgImageIndex', state.bgImageIndex);
            console.log('action.payload777', action.payload);
            state.bgImageUrl = state.images[state.bgImageIndex].urls.full;
            
        }
    },
    extraReducers: {
        [loadImage.pending]: (state,  action) => {
            state.isLoadingImage = true;
            state.failedToLoadImage = false;
        },
        [loadImage.fulfilled]: (state, action) => {
            if (action.payload.length !==0) {
                action.payload.forEach(image => {
                    state.images.push(image);
                })
            }
            // console.log('555Image', action.payload.urls);
            state.bgImageUrl = action.payload[state.bgImageIndex].urls.full;
            // state.isLoadingImage = false;
            // state.failedToLoadImage = false;
        },
        [loadImage.rejected]: (state, action) => {
            state.image = {};
            state.isLoadingImage = false;
            state.failedToLoadImage = true;
          }
    }
});

export const selectImage = (state) => {
    console.log('state555444', state.image.images);
    return state.image};
export const isLoadingImage = (state) => state.image.isLoadingImage;
export const { prevImage, nextImage } = imageSlice.actions;
export default imageSlice.reducer;
