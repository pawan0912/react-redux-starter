import actionTypes from "./type";
import { ItemService } from "../../service";

const L = "_LOADING";
const F = "_FAIL";

export const createItem = (item) => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.CREATE_ITEM + L });
    ItemService.doCreateItem(item)
      .then((createdItem) => {
        dispatch({
          type: actionTypes.CREATE_ITEM,
          payload: { createdItem },
        });
        dispatch(getItemsList());
      })
      .catch((e) => {
        dispatch({ type: actionTypes.CREATE_ITEM + F, error: e });
      });
  };
};

export const getItemsList = () => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.GET_ITEMS_LIST + L });
    ItemService.doGetItemsList()
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

export const toggleAddModal = (showAddModal = false, editMode = false) => ({
  type: actionTypes.SET_ADD_MODAL,
  payload: { showAddModal, editMode },
});

export const updateItem = (item) => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.UPDATE_ITEM + L });
    ItemService.doUpdateItem(item)
      .then((updatedItem) => {
        dispatch({
          type: actionTypes.UPDATE_ITEM,
          payload: { updatedItem },
        });
        dispatch(getItemsList());
      })
      .catch((e) => {
        dispatch({ type: actionTypes.UPDATE_ITEM + F, error: e });
      });
  };
};

export const deleteItem = ({ id }) => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.DELETE_ITEM + L });
    ItemService.doDeleteItem(id)
      .then((deletedItem) => {
        dispatch({
          type: actionTypes.DELETE_ITEM,
          payload: { deletedItem },
        });
        dispatch(getItemsList());
      })
      .catch((e) => {
        dispatch({ type: actionTypes.DELETE_ITEM + F, error: e });
      });
  };
};

export const selectFilter = (selectedFilter = "") => ({
  type: actionTypes.SET_SELECTED_FILTER,
  payload: { selectedFilter },
});
