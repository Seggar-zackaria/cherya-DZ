import { NavLink } from "react-router-dom";

function Button(props) {
  return (
    <>
      <NavLink to="/details">
        <button className="px-4 py-2 my-3 text-black bg-white rounded-sm cursor-pointer">
          {props.title}
        </button>
      </NavLink>
    </>
  );
}

export default Button;
