import React, { useState } from "react";
// import "../App.css";
  
const ReadMore = ({ description }) => {
  const text = description;
  console.log('text is', description);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
  
export default ReadMore;