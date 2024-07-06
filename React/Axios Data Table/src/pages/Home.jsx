import { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import axios from "axios";
const Home = () => {
  const [product, setProduct] = useState([]);
  const FetchProduct = () => {
    axios
      .get("http://localhost:8090/prodoct")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    FetchProduct();
  }, [product]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8090/prodoct/${id}`)
      .then(() => alert("deleted"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Homepage</h1>
      <Nav />
      <div style={{ display: "flex", gap: "10px" }}>
        <input type="text" placeholder="search..." />
        <button>Prev</button>
        <button disabled>num</button>
        <button>Next</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        {product.map((el) => (
          <div key={el.id} style={{ border: "2px solid teal" }}>
            <p>{el.id}</p>
            <img src={el.image} width={200} height={200} />
            <h3>{el.title}</h3>
            <p>{el.price}</p>
            <p>{el.category}</p>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
