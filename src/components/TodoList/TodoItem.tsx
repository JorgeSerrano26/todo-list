import { component$, Slot } from "@builder.io/qwik";

const TodoItem = () => {
    return <li>
        <Slot />
    </li>
}

export default component$(TodoItem);