import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import slices from "./slices";

// root reducer
const reducer = {
  coins: slices.coins,
};

// default middleware
// TODO re-enable `{serializable,immutable}Check` and fix issues
const middleware = [
  ...getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
];

// redux store
const store = configureStore({
  reducer,
  middleware,
});

export type State = ReturnType<typeof store.getState>;
export default store;
