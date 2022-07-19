import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  menuItem: { title: "Most Upvotes", id: 1, sortPath: 'upvotes.length', sortOrder: "desc" },
  selectedCategory: { title: "All", _id: "" },
  mobileSidebar: false,
  menu : false,
}

const slice = createSlice({
  initialState,
  name: "UI",
  reducers: {
    menuItemSelected: (state, action) => {
      state.menuItem = action.payload
      state.menu = false
    },
    menuToggled: (state, action) => {
      state.menu =  !state.menu
    },

    categorySelected: (state, action) => {
      state.selectedCategory = action.payload
    },

    mobileSidebarToggled: (state, action) => {
      state.mobileSidebar = !state.mobileSidebar
    },

  }
})

export const { menuItemSelected, categorySelected, mobileSidebarToggled, menuToggled} = slice.actions

export default slice.reducer

// action creators

export const selectMenuItem = (data) => menuItemSelected(data)
export const selectCategory = (data) => categorySelected(data)
export const toggleSidebar = () => mobileSidebarToggled()
export const toggleMenu = () => menuToggled()

