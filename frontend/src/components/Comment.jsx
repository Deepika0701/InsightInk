import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const Comment = () => {
  return (
    <div>
      {" "}
      <div className="px-2 py-2 my-2 bg-gray-200 rounded-lg">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-600 "> deepika@gmail.com</h3>
          <div className="flex justify-center items-center space-x-4">
            <p className="text-gray-500 text-sm">16/06/24</p>
            <p className="text-gray-500" text-sm>
              16:45
            </p>
            <div className="flex items-center justify-center space-x-2">
              <p>
                <BiEdit />
              </p>
              <p>
                <MdDelete />
              </p>
            </div>
          </div>
        </div>
        <p className="px-4 mt-2"> Nice info.</p>
      </div>
    </div>
  );
};

export default Comment;
