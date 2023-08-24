import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./Item.css";

function Item({ id }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      className="list__item"
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {id}
    </li>
  );
}

export default Item;
