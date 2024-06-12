import React, { useState } from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ImCross } from "react-icons/im";
const EditPost = () => {
    const [cat, setCat] = useState("");
    const [cats, setCats] = useState([]);
  //    delete category function   
    const deleteCategory = (i) => {
      let updatedCats=[...cats]
      updatedCats.splice(i)
      setCats(updatedCats)
    };
  //   add category function
  const addCategory = () => {
      let updatedCats = [...cats];
      updatedCats.push(cat);
      setCat("");
      setCats(updatedCats);
    };
  return (
    <div>    <div>
    <Navbar />
    <div className="px-6 md:px-[200px] mt-8">
      <h1 className="font-bold md:text-2xl text-xl mt-8 ">Update Post</h1>
      <form
        action=""
        className="w-full flex flex-col space-y-4 md:space-y-8 mt-4"
      >
        <input
          type="text"
          className="px-4 py-2 outline-none"
          placeholder="Enter post title"
        />
        <input type="file" className="px-4" />
        <div className="flex flex-col">
          <div className="flex items-center space-x-4 md:space-x-8">
            <input
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              type="text"
              className="px-4 py-2 outline-none"
              placeholder="Enter post category"
            />
            <div
              onClick={addCategory}
              className="bg-black text-white px-4 py-2 font-semibold cursor-pointer "
            >
              Add
            </div>
          </div>

          {/* categories  */}
          <div className="flex px-4 mt-3 ">
              {cats?.map((c,i)=>(
            <div  className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md">
            <p>{c}</p>
            <p
              onClick={()=>deleteCategory(i)}
              className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"
            >
              <ImCross />
            </p>
          </div>
              ))}

          </div>
        </div>
        <textarea
          name=""
          id=""
          rows={15}
          col={15}
          className="px-4 py-2 outline-none"
          placeholder="Enter post description"
        />
        <button className="bg-black w-full md:w-[20%]mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg ">
         Update
        </button>
      </form>
    </div>
    <Footer />
  </div></div>
  )
}

export default EditPost