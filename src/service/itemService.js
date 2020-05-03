import items from "../config/stub/items.json";

const ItemService = {
  doCreateItem: (item) =>
    new Promise((resolve, reject) => {
      console.log("itemService | doCreateItem : ", item);
      if (item) {
        resolve(item);
      } else {
        reject("Empty Item");
      }
    }),

  doGetItem: (id) =>
    new Promise((resolve, reject) => {
      console.log("itemService | doGetItem : ", id);
      const item = items[id];
      if (item) {
        resolve(item);
      } else {
        reject("Item Not Found");
      }
    }),

  doGetItemsList: () =>
    new Promise((resolve, reject) => {
      console.log("itemService | doGetItemsList ");
      const itemsList = items;
      if (itemsList) {
        resolve(itemsList);
      } else {
        reject("Failed Fetching Items List");
      }
    }),
};

export { ItemService };
