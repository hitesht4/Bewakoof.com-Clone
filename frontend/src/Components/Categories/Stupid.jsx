import React from "react";

const Stupid = () => {
  return (
    <div>
      <h5 className={styles.Head}>THE STOOPID COLLECTION</h5>
      <div className={styles.container}>
        {data.map((item, index) => (
          <div key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stupid;
