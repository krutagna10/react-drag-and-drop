import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./DraggableItem.css";

function DraggableItem({ id, title }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  function handleClick() {
    console.log("Button has been clicked");
  }

  return (
    <li
      className="draggable-item"
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {title}
      <button className="btn btn--green" onClick={handleClick}>
        Click me
      </button>
    </li>
  );
}

export default DraggableItem;
