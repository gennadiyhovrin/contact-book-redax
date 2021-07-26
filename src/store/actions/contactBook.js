const CONTACT_URL = "https://jsonplaceholder.typicode.com/users/";

export const ACTION_SET_CONTACT_ITEM = "ACTION_SET_CONTACT_ITEM";
export const fetchContacts = () => (dispatch) => {
  fetch(CONTACT_URL)
    .then((res) => res.json())
    .then((data) => dispatch({ type: ACTION_SET_CONTACT_ITEM, payload: data }));
};

export const ACTION_DELETE_CONTACT_ITEM = "ACTION_DELETE_CONTACT_ITEM ";
export const deleteItem = (payload) => (dispatch) => {
  fetch(CONTACT_URL + payload, {
    method: "DELETE",
  });
  dispatch({ type: ACTION_DELETE_CONTACT_ITEM, payload });
};

export const ACTION_ADD_CONTACT_ITEM = "ACTION_ADD_CONTACT_ITEM";
export const addItem = (payload) => (dispatch) => {
  fetch(CONTACT_URL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: ACTION_ADD_CONTACT_ITEM, payload: data }));
};
