import axios from "axios";
import { useState } from "react";

const Patch = () => {
  const [price, setprice] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`http://localhost:8090/prodoct/${id}`, { price })
      .then((res) => console.log(res.data))
      .catch((err) => console.loh(err));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="price"
          onChange={(e) => setprice(e.target.value)}
        />
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Patch;
