import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IList } from "../../types/IList";
import { v4 as uuidv4 } from "uuid";

export interface IListState {
  value: IList[];
}

const today = new Date()

const listInitialState: IListState = {
  value: [
    {
      id: uuidv4(),
      name: "List 0",
      creationDate: today,
      lastTimeEdited: today,
    },
    {
      id: uuidv4(),
      name: "List 1",
      creationDate: today,
      lastTimeEdited: today,
    },
    {
      id: uuidv4(),
      name: "List 2",
      creationDate: today,
      lastTimeEdited: today,
    },
  ],
};

export const listSlice = createSlice({
  name: "list",
  initialState: listInitialState,
  reducers: {
    createList: (state: IListState, action: PayloadAction<string>) => {
      const date: Date = new Date()
      const list: IList = {
        id: uuidv4(),
        name: action.payload,
        creationDate: date,
        lastTimeEdited: date,
      };
      state.value = [...state.value, list];
    },
    updateList: (state: IListState, action: PayloadAction<IList>) => {
      const { id, name } = action.payload;
      const listById = state.value.find((value) => value.id === id);
      if (listById) {
        const date = new Date()
        listById.name = name;
        listById.lastTimeEdited = date;
        console.log("updated", state.value);
      }
    },
    deleteList: (state: IListState, action: PayloadAction<string>) => {
      const id = action.payload;
      const listById = state.value.find((value) => value.id === id);
      if (listById) {
        state.value = state.value.filter(function (value) {
          return value.id !== id;
        });
        console.log("deleted", state.value);
      }
    },
  },
});

export const { createList, updateList, deleteList } = listSlice.actions;

export default listSlice.reducer