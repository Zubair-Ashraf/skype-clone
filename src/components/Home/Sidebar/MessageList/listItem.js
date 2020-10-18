import React from "react";
import { Image } from "react-bootstrap";
import { useMessageDispatch } from "context";
import moment from "moment";

function ListItem({ active, username, selectedUser, latestMessage }) {
  console.log(selectedUser, "selectedUser");
  const dispatch = useMessageDispatch();
  return (
    <div
      role="button"
      className={`d-flex align-items-center message-list-item ${
        username === selectedUser && "active"
      } my-2 px-3 py-2`}
      onClick={() => dispatch({ type: "SET_SELECTED_USER", payload: username })}
    >
      <Image className="avatar" src={"https://i.redd.it/6onq25y0sh311.jpg"} />
      <div className="ml-3">
        <h6 className="text-light p-0 m-0 text-capitalize">{username}</h6>
        <span className="text-gray font-sm">
          {latestMessage ? latestMessage.content : "You are now connected"}
        </span>
      </div>
      <span className="ml-auto mb-auto text-gray font-sm">
        {latestMessage && moment(latestMessage.createdAt).format("HH:mm")}
      </span>
    </div>
  );
}

export default ListItem;
