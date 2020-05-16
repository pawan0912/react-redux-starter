import itemsJson from "../config/stub/items.json";
import { get } from "lodash";

const ItemService = {
  doCreateItem: (item) =>
    new Promise((resolve, reject) => {
      if (item) {
        resolve(item);
      } else {
        reject("Empty Item");
      }
    }),

  doGetItem: (id) =>
    new Promise((resolve, reject) => {
      const item = itemsJson[id];
      if (item) {
        resolve(item);
      } else {
        reject("Item Not Found");
      }
    }),

  doGetItemsList: () =>
    new Promise((resolve, reject) => {
      const itemsList = get(itemsJson, "items", []);
      if (itemsList) {
        resolve(itemsList);
      } else {
        reject("Failed Fetching Items List");
      }
    }),
};

export { ItemService };
