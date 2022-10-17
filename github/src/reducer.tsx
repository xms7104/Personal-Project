import api from "./api"
import React from "react";
import styled from "styled-components";
import { useEffect, useRef, useState } from 'react';
import { initializeConnect } from "react-redux/es/components/connect";

let initialize:any;

  async function getLabels() {
    initialize = await api.getLabels();
  }
  getLabels();


function reducer(
state=initialize , action:any
  ) {
    switch (action.type) {
      case "CreateLabels": {
        const newCartItems = [
          ...state,
          {
            "name": action.payload.Labeldata.name,
            "color": action.payload.Labeldata.color,
            "description": action.payload.Labeldata.description,
          },
        ];
        return newCartItems;
          }

        case "DeleteLabels": {
          const newCartItems = [
            {
              "name": action.payload.Labeldata.name,
            },
          ];
          return newCartItems;
            }

        case "UpdateLabels": {
          const newCartItems = [
            {
              "name": action.payload.Labeldata.name,
              "description": action.payload.Labeldata.description,
              "color": action.payload.Labeldata.color,
            },
          ];
          return newCartItems;
            }
            
        case "getToken": {
          const newCartItems = [
            {
              "token": action.payload.Labeldata.userToken
            }
          ];
          return newCartItems;
            }
        default:
        return;
      }
    }
  
  export default reducer;