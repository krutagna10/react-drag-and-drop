import { DndContext, closestCenter } from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import DraggableItem from "./component/DraggableItem/DraggableItem.jsx";

const ITEMS = [
  {
    id: crypto.randomUUID(),
    title: "Item 1",
  },
  {
    id: crypto.randomUUID(),
    title: "Item 2",
  },
  {
    id: crypto.randomUUID(),
    title: "Item 3",
  },
];

function App() {
  const [items, setItems] = useState(ITEMS);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id === over.id) {
      return;
    }

    setItems((items) => {
      const activeIndex = items.findIndex((item) => item.id === active.id);
      const overIndex = items.findIndex((item) => item.id === over.id);
      return arrayMove(items, activeIndex, overIndex);
    });
  }

  return (
    <div className="text-center flow">
      <h1>React Drag and Drop</h1>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <ul className="draggable__list flow">
            {items.map((item) => (
              <DraggableItem key={item.id} id={item.id} title={item.title} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default App;
