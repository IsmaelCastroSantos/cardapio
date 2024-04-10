// import { enroladinhoMignon } from "./menu";

export default function MenuItem(props) {
  return (
    <div className="menu-item-container">
      <div>
        <h2 className="title">{props.name}</h2>
        <p className="price">{props.price}</p>
        <p>{props.description}</p>
      </div>
      <img src={props.image} alt="" />
    </div>
  );
}
