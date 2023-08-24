import "./App.css";

import { DndContext, closestCenter } from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import Item from "./component/Item/Item.jsx";

const ITEMS = ["Item 1", "Item 2", "Item 3"];

function App() {
  const [items, setItems] = useState(ITEMS);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id === over.id) {
      return;
    }

    setItems((items) => {
      const activeIndex = items.indexOf(active.id);
      const overIndex = items.indexOf(over.id);
      return arrayMove(items, activeIndex, overIndex);
    });
  }

  return (
    <div className="text-center flow">
      <h1>React Drag and Drop</h1>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <ul className="list flow">
            {items.map((item, index) => (
              <Item key={index} id={item} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default App;
