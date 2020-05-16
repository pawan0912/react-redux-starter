import axios from "axios";
import {} from "lodash";
// import itemsJson from "../config/stub/items.json";

const API_URL = "http://localhost:3001/items/";

const ItemService = {
  // Create an item
  doCreateItem: (item) =>
    new Promise((resolve, reject) => {
      axios
        .post(API_URL, item)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    }),

  // Fetch an item
  doGetItem: (id) =>
    new Promise((resolve, reject) => {
      axios
        .get(API_URL + `${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    }),

  // Fetch all items
  doGetItemsList: () =>
    new Promise((resolve, reject) => {
      axios
        .get(API_URL)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    }),

  // Update an item
  doUpdateItem: ({ id, ...rest }) =>
    new Promise((resolve, reject) => {
      axios
        .put(API_URL + `${id}`, { ...rest })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    }),

  // Delete an item
  doDeleteItem: (id) =>
    new Promise((resolve, reject) => {
      axios
        .delete(API_URL + `${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    }),
};

export { ItemService };
