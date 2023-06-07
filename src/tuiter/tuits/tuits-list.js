import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegComment, FaRetweet, FaUpload, FaRegHeart } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { deleteTuit, likeTuit } from "../reducers/tuits-reducer"
import "./index.css"
import nasaPic from "../who-to-follow-list/images/nasa.jpg"


const TuitsList = () => {
  const { tuits } = useSelector(state => state.tuits);
  
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  const likeTuitHandler = (tuit) => {
    dispatch(likeTuit(tuit));
  }

  return (
    <ul className="list-group">
      {
        tuits.map((tuit, index) =>
          <li className="list-group-item">
            <div className="row">
              <div className="col-auto">
                <img width={50}
                  className="float-end rounded-circle"
                  src={nasaPic} />
              </div>

              <div className="col-10 wd-tuit-div">
                <button className="wd-delete-tuit-button" onClick={() => deleteTuitHandler(tuit._id)}>
                  <HiOutlineX/>
                </button>

                <div>{tuit.userName} . {tuit.time}</div>
                <div>{tuit.tuit}</div>
                <div className="wd-tuit-stats">
                  <div>
                    <button>
                      <FaRegComment />
                    </button>
                    {tuit.replies}
                  </div>
                  <div>
                    <button>
                      <FaRetweet />
                    </button>
                    {tuit.retuits}
                  </div>
                  <div>
                    <button onClick={() => likeTuitHandler(tuit)}>
                      {tuit.liked ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    {tuit.likes}
                  </div>
                  <div>
                    <button>
                      <FaUpload />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        )
      }
    </ul>
  );
};
export default TuitsList;