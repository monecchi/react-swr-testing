import React from "react";

const getStores = () => {
  const stores = [];
  axios
    .get("https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/")
    .then(response => {
      stores = response.data;
    })
    .catch(err => {
      console.log(err);
    });
  return stores;
  console.log(stores);
};
