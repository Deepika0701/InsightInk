import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment";
const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 px-[200px]mt -8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            {" "}
            10 uses of artificial intelligence
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="felx items-center justify-between mt-2 md:mt-4">
          <p>deepika@gmail.com</p>
          <div className="flex space-x-2">
            <p>16/06/2024</p>
            <p>16:23</p>
          </div>
        </div>
        <img
          className="w-full mx-auto mt-8"
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-get-certified-in-Artificial-Intelligence.jpg"
          alt=""
        />
        <p className="mx-auto mt-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ut
          delectus totam voluptates. Vel consequatur distinctio totam veniam
          doloremque repellat earum dolorum ratione quasi asperiores? Cumque
          esse aut blanditiis ad? Accusamus sequi impedit consectetur,
          reiciendis aliquam aliquid illum corporis, illo odit exercitationem ad
          consequuntur modi debitis repudiandae minima reprehenderit, cum vitae
          asperiores saepe excepturi ipsam dignissimos laboriosam nesciunt.
          Quam, aspernatur?
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold ">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2 ">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
          </div>
        </div>
        <div className="flex flex-col mt-4 ">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          <Comment />
          <Comment />
          <Comment />
        </div>
        <div>
          {/* write a comment */}
          <div className="w-full flex flex-col mt-4 md:flex-row">
            <input
              type="text"
              placeholder="Write a comment"
              className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
            />
            <button className="bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">
              Add Comment
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
