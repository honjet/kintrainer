export const inboxReducer = (state, action) => {
  switch (action.type) {
    case InboxActionType.CHANGE:
      return {
        ...state,
        inbox: changeInbox(state.inbox, action.item, action.index),
      };
    case InboxActionType.ADD:
      return {...state, inbox: addInbox(state.inbox, action.item)};
    case InboxActionType.REMOVE:
      return {...state, inbox: removeInbox(state.inbox, action.index)};
    default:
      throw new Error();
  }
};

const addInbox = (inbox, item) => [...inbox, item];

const changeInbox = (inbox, item, index) => {
  inbox[index] = item;
  return inbox;
};

const removeInbox = (inbox, index) => inbox.filter((_, i) => i !== index);

export const InboxActionType = {
  CHANGE: 'change',
  ADD: 'add',
  REMOVE: 'remove',
};

export const addAction = item => ({
  type: InboxActionType.ADD,
  item,
});

export const changeAction = (item, index) => ({
  type: InboxActionType.CHANGE,
  item,
  index,
});

export const removeAction = index => ({
  type: InboxActionType.REMOVE,
  index,
});
