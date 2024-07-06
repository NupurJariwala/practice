import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to={"/postform"}>
          <button>PostFrom</button>
        </Link>
        <Link to={"patchform"}>
          <button>Patchform</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
