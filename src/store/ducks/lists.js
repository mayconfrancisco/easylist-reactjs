export const Types = {
  GET_REQUEST: 'lists/GET_REQUEST',
  GET_SUCCESS: 'lists/GET_SUCCESS',
  ADD_LIST_REQUEST: 'lists/ADD_LIST_REQUEST',
  ADD_LIST_SUCCESS: 'lists/ADD_LIST_SUCCESS',
  ADD_ITEM_REQUEST: 'lists/ADD_ITEM_REQUEST',
  ADD_ITEM_SUCCESS: 'lists/ADD_ITEM_SUCCESS',
  ADD_ITEM_FINISHED_REQUEST: 'lists/ADD_ITEM_FINISHED_REQUEST',
  ADD_ITEM_FINISHED_SUCCESS: 'lists/ADD_ITEM_FINISHED_SUCCESS',
};

const INTIAL_STATE = {
  data: [],
  loading: false,
};

export default function lists(state = INTIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };

    case Types.ADD_LIST_REQUEST:
      return { ...state, loading: true };

    case Types.ADD_LIST_SUCCESS:
      return { ...state, loading: false, data: [...state.data, action.payload.data] };

    case Types.ADD_ITEM_REQUEST:
      return { ...state, loading: true };

    case Types.ADD_ITEM_SUCCESS: {
      const { item } = action.payload;
      const listIdx = state.data.findIndex(l => l._id === item.listId);
      // Nao eh uma boa pratica alterar o state diretamente
      // Use o Seamless - https://github.com/rtfeldman/seamless-immutable
      state.data[listIdx].items.push(item);
      return { ...state, loading: false };
    }

    case Types.ADD_ITEM_FINISHED_REQUEST:
      return { ...state, loading: true };

    case Types.ADD_ITEM_FINISHED_SUCCESS: {
      const { id, listId, isFinished } = action.payload.data;
      const listIdx = state.data.findIndex(l => l._id === listId);
      const itemIdx = state.data[listIdx].items.findIndex(i => i._id === id);
      // Nao eh uma boa pratica alterar o state diretamente
      // Use o Seamless - https://github.com/rtfeldman/seamless-immutable
      state.data[listIdx].items[itemIdx].isFinished = isFinished;
      return { ...state, loading: false };
    }

    default:
      return state;
  }
}

export const Creators = {
  getListsRequest: () => ({ type: Types.GET_REQUEST }),
  getListsSuccess: data => ({ type: Types.GET_SUCCESS, payload: { data } }),
  addListsRequest: name => ({ type: Types.ADD_LIST_REQUEST, payload: { name } }),
  addListsSuccess: data => ({ type: Types.ADD_LIST_SUCCESS, payload: { data } }),

  addItemRequest: data => ({ type: Types.ADD_ITEM_REQUEST, payload: { data } }),
  addItemSuccess: item => ({ type: Types.ADD_ITEM_SUCCESS, payload: { item } }),

  addItemFinishedRequest: data => ({ type: Types.ADD_ITEM_FINISHED_REQUEST, payload: { data } }),
  addItemFinishedSuccess: data => ({ type: Types.ADD_ITEM_FINISHED_SUCCESS, payload: { data } }),
};
