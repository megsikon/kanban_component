import { expect, test } from 'vitest'
//import {addNewTask, deleteTask, moveTask} from '../src/components/KanbanBoard.vue'
import {tasks, addNewTask, deleteTask, moveTask} from './KanbanBoardTest.ts'

test('add Task 1 to list of tasks', () => {
  expect(tasks.length).toBe(3);
  
  addNewTask('Task 1');
  
  expect(tasks.length).toBe(4);
});

test('delete task with id #3 from list', () => {
  expect(tasks.length).toBe(4);

  deleteTask(3);

  expect(tasks.length).toBe(3);
})

test('move task to status Done', () => {
  moveTask(2, 'Done')

  expect(tasks[1].status).toBe('Done');
})

test('move task to status In Progress', () => {
  moveTask(2, 'In Progress')

  expect(tasks[1].status).toBe('In Progress');
})