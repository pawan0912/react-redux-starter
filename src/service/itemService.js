import items from "../config/stub/items.json";

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
      const item = items[id];
      if (item) {
        resolve(item);
      } else {
        reject("Item Not Found");
      }
    }),

  doGetItemsList: () =>
    new Promise((resolve, reject) => {
      let itemsList = [];
      for (let [key, value] of Object.entries(items)) {
        itemsList.push({ ...value, id: key });
      }
      if (itemsList) {
        resolve(itemsList);
      } else {
        reject("Failed Fetching Items List");
      }
    }),
};

export { ItemService };
