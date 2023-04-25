export const setStorage = (key, arr) => {
  localStorage.setItem(key, JSON.stringify(arr));
};

export const getStorage = (key) => {
  if (JSON.parse(localStorage.getItem(key))) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
};
