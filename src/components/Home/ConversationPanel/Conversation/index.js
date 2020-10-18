import React, { useEffect } from "react";
import { Image, Spinner, Button } from "react-bootstrap";
import { useLazyQuery } from "@apollo/client";
import { GET_MESSAGES } from "gql";
import { useMessageState, useMessageDispatch, useAuthState } from "context";
import moment from "moment";
import SAY_HY from "assets/say_hy.png";

function Conversation({ onSayHy }) {
  const dispatch = useMessageDispatch();
  const { users } = useMessageState();
  const { user } = useAuthState();
  const selectedUser = users?.find((user) => user.selected === true);
  const messages = selectedUser?.messages;
  const [receiveMessages, { loading, data }] = useLazyQuery(GET_MESSAGES);

  useEffect(() => {
    if (selectedUser && !selectedUser.messages) {
      receiveMessages({ variables: { from: selectedUser.username } });
    }
  }, [selectedUser]);

  useEffect(() => {
    if (data) {
      dispatch({
        type: "SET_USER_MESSAGES",
        payload: {
          username: selectedUser.username,
          messages: data.receiveMessages,
        },
      });
    }
  }, [data]);

  if (!messages && !loading) {
    return <p className="text-light">Select a friend</p>;
  } else if (loading) {
    return (
      <div className="loader-wrapper conversation d-flex align-items-center justify-content-center">
        <Spinner animation="grow" variant="light" />
      </div>
    );
  } else if (messages.length === 0) {
    return (
      <div className="conversation d-flex flex-column align-items-center justify-content-center">
        <Image src={SAY_HY} width={125} className="say_hy" />
        <Button
          variant="light"
          className="rounded-pill px-3 mt-3 font-weight-bold"
          onClick={onSayHy}
        >
          Say Hy!
        </Button>
      </div>
    );
  } else if (messages.length > 0) {
    return (
      <div className="conversation d-flex flex-column-reverse">
        {messages.map((message) => {
          const sender = message.from === user.username ? true : false;
          const receiver = !sender;
          if (sender)
            return (
              <div className="d-flex flex-column ml-auto my-3">
                <p className="text-gray p-0 m-0 font-sm text-right">
                  {moment(message.createdAt).format("HH:mm")}
                </p>
                <div className="text-light message-chip send px-3 py-2 ml-2">
                  <p className="p-0 m-0">{message.content}</p>
                </div>
              </div>
            );
          else
            return (
              <div className="d-flex mr-auto my-3">
                <Image
                  className="avatar"
                  src={"https://i.redd.it/6onq25y0sh311.jpg"}
                />
                <div className="d-flex flex-column ml-2">
                  <p className="text-gray p-0 m-0 font-sm text-capitalize">
                    {message.from +
                      ", " +
                      moment(message.createdAt).format("HH:mm")}
                  </p>
                  <div className="text-light message-chip receive px-3 py-2">
                    <p className="p-0 m-0">{message.content}</p>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    );
  }
}

export default Conversation;
