import React, { ReducerAction, useReducer, useState } from "react";

interface UserInfo {
  id: number;
  name: string;
  email: string;
  info: [];
}

const TodoReducer = () => {
  const initialState: UserInfo = {
    id: 0,
    name: "",
    email: "",
    info: [],
  };

  function reducer(state: UserInfo, action: any) {
    switch (action.type) {
      case "set_name":
        return {
          ...state,
          name: action.payload,
        };
        break;

      default:
        break;
    }
    return state;
  }

  const setName = (payload: any) => {
    return {
      type: "set_name",
      payload: payload,
    };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { name, email, info } = state;

  const handleAddTodo = (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Reducer</h1>
      <form action="">
        <label htmlFor="">name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            dispatch(setName(e.target.value));
          }}
        />
        <label htmlFor="">mail</label>
        <input type="text" value={email} />
        <button
          type="submit"
          style={{ margin: "1rem" }}
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </form>

      <div></div>
    </div>
  );
};

export default TodoReducer;
