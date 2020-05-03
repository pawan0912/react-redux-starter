import actionTypes from "../action/type";

const L = "_LOADING";
const F = "_FAIL";

const initialState = {
  ld_createItem: false,
  ld_itemList: false,
  ld_selectedItem: false,

  er_createItem: null,
  er_itemList: null,
  er_selectedItem: null,

  itemList: [],
  selectedItem: {},
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
      return { ...state, ld_itemList: true, er_itemList: null };
    case actionTypes.GET_ITEMS_LIST:
      const { itemList } = action.payload;
      return {
        ...state,
        ld_itemList: false,
        er_itemList: null,
        itemList: [...itemList],
      };
    case actionTypes.GET_ITEMS_LIST + F:
      return {
        ...state,
        ld_itemList: false,
        er_itemList: action.error,
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

    default:
      return state;
  }
};
