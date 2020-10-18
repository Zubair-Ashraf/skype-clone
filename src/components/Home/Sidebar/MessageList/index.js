import React from "react";
import { Spinner } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import ListItem from "./listItem";
import { GET_USERS } from "gql";
import { useMessageDispatch, useMessageState } from "context";

function MessageList() {
  const dispatch = useMessageDispatch();
  const { users } = useMessageState();
  const selectedUser = users?.find((user) => user.selected === true)?.username;
  const { loading } = useQuery(GET_USERS, {
    onCompleted: (data) => {
      dispatch({ type: "SET_USERS", payload: data.users });
    },
  });

  if (!users || loading) {
    return (
      <div className="loader-wrapper text-center">
        <Spinner animation="grow" variant="light" />
      </div>
    );
  } else if (users.length === 0) {
    return <p>No use joined</p>;
  } else {
    return (
      <div className="mt-1 message-list">
        {users.map((user, index) => (
          <ListItem
            {...user}
            selectedUser={selectedUser}
            active={index === 0}
          />
        ))}
      </div>
    );
  }
}

export default MessageList;
