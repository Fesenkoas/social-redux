import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SinglComment = ({ profile }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(profile);

  const handleInput = (e) => {
    setComment(e.target.value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
  };
  // useEffect(() => {
  //   dispatch(putPRofileFullFetch());
  //   //dispatch(getStatusFetch());
  // }, [dispatch]);

  return (
    <form onSubmit={handleUpdate}>
      {comment ? (
        <div onDoubleClick={handleInput}>{comment}</div>
      ) : (
        <input type="text" onBlur={handleInput} />
      )}
    </form>
  );
};

export default SinglComment;
