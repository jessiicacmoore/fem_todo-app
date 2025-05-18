# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Links

- Live Site URL: [jessthedev-fem-todo-challenge.netlify.app](https://jessthedev-fem-todo-challenge.netlify.app/)

## My process

### Built with

- React
- TypeScript
- Tailwind CSS
- Context API and useReducer for state management
- hello-pangea/dnd for drag and drop

### What I learned

While building this todo app, I gained valuable insights into accessibility, advanced TypeScript usage, and inclusive design considerations.

#### Advanced Typescript Usage
I also implemented some advanced TypeScript techniques, such as using as const to create a readonly object for the filter options. This ensures TypeScript infers literal types for the filter values, preventing accidental changes and enabling better type safety.

Here’s an example of how I defined the filters:
```ts
// src/constants
export const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const;

// src/types
export type FilterType = (typeof FILTERS)[keyof typeof FILTERS];
```

#### VoiceOver and `aria-live="polite"`
One of the challenges I encountered was ensuring that VoiceOver would read out the entire sentence when the number of items in the list changed (e.g., "3 items remaining"), rather than just the specific number that updated. By default, VoiceOver only announces the changed portion of the text within an `aria-live` region. To work around this, I had to "trick" the browser into re-rendering the entire element by applying a `key` attribute.

Here’s an example of how I approached this:

```jsx
<div aria-live="polite">
  <p key={complete}>{formatCountMessage(remaining, "left")}</p>
  <p key={remaining} className="sr-only">
    {formatCountMessage(complete, "complete")}
  </p>
</div>
```
#### Inclusive Design: Adding a Submit Button
Another accessibility consideration arose in the design of the new todo form. Initially, the form relied on a "submit on enter" approach, where pressing the `Enter` key would add a new task. While this works well for tech-savvy users, it is less intuitive for users unfamiliar with keyboard interactions.

While relying solely on the Enter key is not a direct violation of WCAG standards, it can still create barriers for users with disabilities or limited technical experience. Adding a visible, interactive button makes the form more accessible and user-friendly for a wider range of users.

### Continued development

This project became much more robust than I initially anticipated for a simple too app, which highlighted areas where I can improve, particularly around code organization and architecture. As the project grew in complexity, it became clear that better planning and structure would have made the codebase easier to scale and maintain. Going forward, I want to focus on the following areas:

#### 1. **Code Architecture and Organization**
   - I will explore design patterns like the **Component-Container pattern** or **state management techniques** to keep components cleaner and more focused on a single responsibility.
   - Breaking down larger components into smaller, reusable ones will improve maintainability as projects grow.
   - Researching and applying **Atomic Design principles** in UI component organization will also be a priority.

#### 2. **State Management Best Practices**
   - While this project was relatively simple in terms of state management, as features grew, managing state became trickier. I want to refine my understanding of React state management tools like **Context API** or libraries like **Zustand** and **Redux Toolkit** for more scalable solutions.

#### 3. **Advanced TypeScript Patterns**
   - I found `as const` and indexed types extremely useful in this project, but I want to dive deeper into more advanced TypeScript concepts, such as:
     - Utility types for code reusability
     - Generics to make components and functions more flexible and type-safe
     - Better type inference strategies to reduce redundancy and improve developer experience.

#### 4. **Accessibility and Testing**
   - While I made improvements for screen readers like VoiceOver, I want to incorporate more **automated accessibility testing** tools, such as **axe-core** or **Lighthouse**, into my workflow to identify and resolve issues earlier.
   - Writing unit and integration tests using **Jest** and **React Testing Library** to ensure accessibility changes don’t inadvertently break functionality.

#### 5. **Planning and Scalability**
   - Before starting future projects, I want to dedicate more time to planning the project structure, components, and features. Creating an outline or component hierarchy diagram can help me anticipate complexity and organize my work effectively.
   - I also plan to research and apply **scalable file structures** for React projects, such as grouping components, hooks, utilities, and styles for better separation of concerns.
