import actionTypes from "../action/type";

const L = "_LOADING";
const F = "_FAIL";

const initialState = {
  ld_createItem: false,
  ld_itemsList: false,
  ld_selectedItem: false,
  ld_updateItem: false,
  ld_deleteItem: false,

  er_createItem: null,
  er_itemsList: null,
  er_selectedItem: null,
  er_updateItem: null,
  er_deleteItem: null,

  itemsList: [],
  selectedItem: {},
  showAddModal: false,
  editMode: false,
  selectedFilter: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ITEM + L:
      return { ...state, ld_createItem: true, er_createItem: null };
    case actionTypes.CREATE_ITEM:
      return {
        ...state,
        ld_createItem: false,
        er_createItem: null,
      };
    case actionTypes.CREATE_ITEM + F:
      return {
        ...state,
        ld_createItem: false,
        er_createItem: action.error,
      };
    case actionTypes.GET_ITEMS_LIST + L:
      return { ...state, ld_itemsList: true, er_itemsList: null };
    case actionTypes.GET_ITEMS_LIST:
      const { itemsList } = action.payload;
      return {
        ...state,
        ld_itemsList: false,
        er_itemsList: null,
        itemsList: [...itemsList],
      };
    case actionTypes.GET_ITEMS_LIST + F:
      return {
        ...state,
        ld_itemsList: false,
        er_itemsList: action.error,
      };
    case actionTypes.SET_SELECTED_ITEM + L:
      return { ...state, ld_selectedItem: true, er_selectedItem: null };
    case actionTypes.SET_SELECTED_ITEM:
      const { selectedItem } = action.payload;
      return {
        ...state,
        ld_selectedItem: false,
        er_selectedItem: null,
        selectedItem: { ...selectedItem },
      };
    case actionTypes.SET_SELECTED_ITEM + F:
      return {
        ...state,
        ld_selectedItem: false,
        er_selectedItem: action.error,
      };
    case actionTypes.SET_ADD_MODAL:
      const { showAddModal, editMode } = action.payload;
      return {
        ...state,
        showAddModal: showAddModal,
        editMode: editMode,
      };
    case actionTypes.UPDATE_ITEM + L:
      return { ...state, ld_updateItem: true, er_updateItem: null };
    case actionTypes.UPDATE_ITEM:
      return {
        ...state,
        ld_updateItem: false,
        er_updateItem: null,
      };
    case actionTypes.UPDATE_ITEM + F:
      return {
        ...state,
        ld_updateItem: false,
        er_updateItem: action.error,
      };
    case actionTypes.DELETE_ITEM + L:
      return { ...state, ld_deleteItem: true, er_deleteItem: null };
    case actionTypes.DELETE_ITEM:
      return {
        ...state,
        ld_deleteItem: false,
        er_deleteItem: null,
      };
    case actionTypes.DELETE_ITEM + F:
      return {
        ...state,
        ld_deleteItem: false,
        er_deleteItem: action.error,
      };

    case actionTypes.SET_SELECTED_FILTER:
      const { selectedFilter } = action.payload;
      return {
        ...state,
        selectedFilter: selectedFilter,
      };
    default:
      return state;
  }
};
