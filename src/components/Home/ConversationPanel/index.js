import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation, useSubscription } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Welcome from "./Welcome";
import Navbar from "./Navbar";
import Conversation from "./Conversation";
import { useMessageState, useAuthState, useMessageDispatch } from "context";
import { SEND_MESSAGE, NEW_MESSAGE } from "gql";

function ConversationPanel() {
  const { users } = useMessageState();
  const { user } = useAuthState();
  const messageDispatch = useMessageDispatch();
  const [content, setContent] = useState();
  const selectedUser = users?.find((user) => user.selected === true)?.username;
  const [sendMessage] = useMutation(SEND_MESSAGE, {
    onError: (err) => console.log(err),
  });
  const { data, error } = useSubscription(NEW_MESSAGE);

  console.log(data, "message heer");
  React.useEffect(() => {
    if (data) {
      const message = data.receiveMessage;
      const otherUser =
        user.username === message.to ? message.from : message.to;
      messageDispatch({
        type: "ADD_MESSAGE",
        payload: {
          username: otherUser,
          message,
        },
      });
    }
  }, [error, data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === "" || !selectedUser) return;
    sendMessage({
      variables: {
        to: selectedUser,
        content,
      },
    });
    setContent("");
  };

  const handleSayHy = () => {
    sendMessage({
      variables: {
        to: selectedUser,
        content: "Hy",
      },
    });
  };

  return (
    <div>
      {selectedUser ? (
        <Fragment>
          <Navbar />
          <hr className="bg-gray p-0 m-0" />
          <div className="conversation d-flex flex-column-reverse my-3">
            <Conversation onSayHy={handleSayHy} />
          </div>
          <Form
            className="d-flex message-box align-items-center p-3 px-5"
            onSubmit={handleSubmit}
          >
            <Form.Control
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border-0 rounded-pill px-5 text-light"
            />
            <Button variant="primary" className="ml-2" onClick={handleSubmit}>
              <FontAwesomeIcon icon={faPaperPlane} size="md" />
            </Button>
          </Form>
        </Fragment>
      ) : (
        <Welcome />
      )}
    </div>
  );
}

export default ConversationPanel;
