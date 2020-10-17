import React from "react";
import ListItem from "./listItem";

function MessageList() {
  return (
    <div className="mt-1">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
        <ListItem />
      ))}
    </div>
  );
}

export default MessageList;
