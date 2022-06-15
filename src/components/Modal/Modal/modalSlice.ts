import { createSlice } from '@reduxjs/toolkit';

const initialState = {title: null, backgroundImage: null, username: null, show: false};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalData: (state, action) => {
      state.title = action.payload.title
      state.backgroundImage = action.payload.backgroundImage
      state.username = action.payload.username
      state.show = true
      document.body.style.overflow = "hidden"
    },
    closeModal: (state, action) => {
        state.show = false
        document.body.style.overflowY = "auto"
    }
  },
});

export const { setModalData, closeModal } = modalSlice.actions;

export default modalSlice.reducer;