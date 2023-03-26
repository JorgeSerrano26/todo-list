import TodoList from '~/components/TodoList/TodoList';
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import type { ToDoItem } from '~/services/TodoService';
import TodoService from '~/services/TodoService';

export default component$(() => {
  const list = useSignal<ToDoItem[]>([]);

  useVisibleTask$(() => {
    list.value = TodoService.get();

    console.log('Todo list loaded');
  });

  return (
    <div>
      <TodoList list={list.value} />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Todo List',
  meta: [
    {
      name: 'description',
      content: 'To-Do list Qwik',
    },
  ],
};
