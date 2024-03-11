/* eslint-disable no-unreachable */
export const actioTypes = {
  
  
  openSidebar: "OPEN_SIDEBAR",
  closeSidebar: "CLOSE_SIDEBAR",
  toggleSidebar: "TOGGLE_SIDEBAR",
  
  
};

export const uiReducer = (state, action) => {
  switch (action.type) {
    
    
    case actioTypes.openSidebar:
      return { ...state, isSidebarOpen: true };
      break;
    case actioTypes.closeSidebar:
      return { ...state, isSidebarOpen: false };
      break;
    case actioTypes.toggleSidebar:
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
      break;
      

    default:
      return state;
  }
};
