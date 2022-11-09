import { combineReducers } from "redux";
import api from "./api";

let initialize: any;

function labelReducer(state = [""], action: any) {
  switch (action.type) {
    case "SetLabelData": {
      return action.payload;
    }
    case "CreateLabels": {
      const newCartItems = [
        ...state,
        {
          name: action.payload.Labeldata.name,
          color: action.payload.Labeldata.color,
          description: action.payload.Labeldata.description,
        },
      ];
      return newCartItems;
    }

    case "DeleteLabels": {
      const newCartItems = [
        {
          name: action.payload.Labeldata.name,
        },
      ];
      return newCartItems;
    }

    case "UpdateLabels": {
      const newCartItems = [
        {
          name: action.payload.Labeldata.name,
          description: action.payload.Labeldata.description,
          color: action.payload.Labeldata.color,
        },
      ];
      return newCartItems;
    }

    case "getToken": {
      const newCartItems = [
        {
          token: action.payload.Labeldata.userToken,
        },
      ];
      return newCartItems;
    }
    default:
      return [];
  }
}

function tokenReducer(state = { token: "", name: "" }, action: any) {
  switch (action.type) {
    case "setUser": {
      return { token: action.payload.token, name: action.payload.name };
    }
    default:
      return {};
  }
}

export default combineReducers({ labelReducer, tokenReducer });
