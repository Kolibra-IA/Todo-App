# GOAL:

- Build a todo app which allows users to add and delete todos.

## UI FLOW:

- Todo field.
- ADD button.

## ALGORITHM:

- Add todo.
- Delete todo.

## Add todo:

- When the ADD button is clicked, the todo should be grabbed from the todo field.
- The todo should be rendered on the screen with the DELETE button.

## Delete todo:

- When the DELETE button is clicked, there should be two transversal from button to paragrah and from paragrah to div; this happens via the parentNode.
- Then, via removeChild, the paragrah, which contains the DELETE button, should be deleted.
