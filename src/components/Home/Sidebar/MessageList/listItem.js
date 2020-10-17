import React from "react";

function ListItem() {
  return (
    <div className="d-flex align-items-center message-list-item my-2 px-3 py-2">
      <div className="avatar" />
      <div className="ml-3">
        <h6 className="text-light p-0 m-0">Bilal Bangash</h6>
        <span className="text-gray font-sm">How r u?</span>
      </div>
      <span className="ml-auto mb-auto text-gray font-sm">12:40</span>
    </div>
  );
}

export default ListItem;
