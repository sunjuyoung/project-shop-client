import { create } from "zustand";

let nextId = 0;

export const useStore = create((set) => ({
  todo: [],

  addTodo: (title) =>
    set((prev) => ({
      todo: [...prev.todo, { title: title, id: ++nextId, done: false }],
    })),

  removeTodo: (id) =>
    set((prev) => ({
      todo: prev.todo.filter((todo) => todo.id !== id),
    })),

  toggleTodo: (id) =>
    set((prev) => ({
      todo: prev.todo.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    })),
}));
