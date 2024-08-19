import { expect, test } from 'vitest'
import useTaskManagement from '../src/components/utils/TaskManagement';

const { tasks, addNewTask, deleteTask, moveTask, getTasksByStatus } = useTaskManagement();

test('add Task 1 to list of tasks', () => {
  expect(tasks.value.length).toBe(3);
  
  addNewTask('Task 1');
  
  expect(tasks.value.length).toBe(4);
});

test('delete task with id #3 from list', () => {
  expect(tasks.value.length).toBe(4);

  deleteTask(3);

  expect(tasks.value.length).toBe(3);
})

test('move task to status Done', () => {
  moveTask(2, 'Done')

  expect(tasks.value.at(1)?.status).toBe('Done');
})

test('move task to status In Progress', () => {
  moveTask(2, 'In Progress')

  expect(tasks.value.at(1)?.status).toBe('In Progress');
})

test('get task by status In Progress', () => {
  expect(getTasksByStatus('In Progress')).toEqual([tasks.value.at(1)]);
})