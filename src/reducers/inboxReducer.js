// inbox は Record型(immutable)

export const InboxActionType = {
  CHANGE: 'change',
  ADD: 'add',
  REMOVE: 'remove',
};

export const InboxReducer = (state, action) => {
  const {inbox} = state;
  const {record, index} = action;
  switch (action.type) {
    case InboxActionType.CHANGE:
      return {...state, inbox: changeInbox(inbox, record, index)};
    case InboxActionType.ADD:
      return {...state, inbox: addInbox(inbox, record)};
    case InboxActionType.REMOVE:
      return {...state, inbox: removeInbox(inbox, index)};
    default:
      throw new Error();
  }
};
export default InboxReducer;

const addInbox = (inbox, record) => inbox.push(record);
const changeInbox = (inbox, record, index) => inbox.set(index, record);
const removeInbox = (inbox, index) => inbox.remove(index);

export const addAction = record => ({
  type: InboxActionType.ADD,
  record,
});

export const changeAction = (record, index) => ({
  type: InboxActionType.CHANGE,
  record,
  index,
});

export const removeAction = index => ({
  type: InboxActionType.REMOVE,
  index,
});
