import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./splices/ui";
import entitiesReducer from "./splices/entities";

/**
 * Combine all reducers and return a ReducersMapObject
 * @return {Reducer<RootState>}
 */
const rootReducer = combineReducers({
  // ui: uiReducer,
  entities: entitiesReducer as any, // remove this any when slices will add on entities
});

export default rootReducer;
