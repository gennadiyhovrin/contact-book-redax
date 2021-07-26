import { ACTION_ADD_CONTACT_ITEM, ACTION_DELETE_CONTACT_ITEM, ACTION_SET_CONTACT_ITEM } from "../actions/contactBook";

const initialState = {
  contactItems: [],
};

export default function rootReducer(state = initialState, { type, payload = null }) {
  switch (type) {
    case ACTION_DELETE_CONTACT_ITEM:
      return { ...state, contactItems: state.contactItems.filter((item) => item.id !== payload) };
    case ACTION_ADD_CONTACT_ITEM:
      return { ...state, contactItems: [...state.contactItems, payload] };
    case ACTION_SET_CONTACT_ITEM:
      return { contactItems: payload };
    default:
      return state;
  }
}
