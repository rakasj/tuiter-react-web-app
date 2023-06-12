import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegComment, FaRetweet, FaUpload, FaRegHeart, FaThumbsDown, FaRegThumbsDown } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { deleteTuit, likeTuit } from "../reducers/tuits-reducer"
import "./index.css"
import nasaPic from "../who-to-follow-list/images/nasa.jpg"
import { findTuitsThunk, deleteTuitThunk } from "../services/tuits-thunks";
import { updateTuitThunk } from "../services/tuits-thunks";


const TuitsList = () => {
  const {tuits, loading} = useSelector(state => state.tuits);
  
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };
  const likeTuitHandler = (tuit) => {
    dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
  };
  const dislikeTuitHandler = (tuit) => {
    dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1}))
  }
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])
 

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
                <div><b>{tuit.username}</b> . {tuit.time}</div>
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
                    <button onClick={() => dislikeTuitHandler(tuit)}>
                      {tuit.disliked ? <FaThumbsDown /> : <FaRegThumbsDown />}
                    </button>
                    {tuit.dislikes}
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