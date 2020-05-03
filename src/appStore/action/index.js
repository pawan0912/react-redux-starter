import actionTypes from "./type";
import { ItemService } from "../../service";

const L = "_LOADING";
const F = "_FAIL";

export const createItem = (item) => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.CREATE_ITEM + L });
    ItemService.doCreateItem(item)
      .then(() => {
        dispatch({
          type: actionTypes.CREATE_ITEM,
          payload: {},
        });
      })
      .catch((e) => {
        dispatch({ type: actionTypes.CREATE_ITEM + F, error: e });
      });
  };
};

export const getItemsList = () => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.GET_ITEMS_LIST + L });
    ItemService.doGetItemsList
      .then((itemsList) => {
        dispatch({ type: actionTypes.GET_ITEMS_LIST, payload: { itemsList } });
      })
      .catch((e) => {
        dispatch({ type: actionTypes.GET_ITEMS_LIST + F, error: e });
      });
  };
};

export const selectItem = (selectedItem) => ({
  type: actionTypes.SET_SELECTED_ITEM,
  payload: { selectedItem },
});
