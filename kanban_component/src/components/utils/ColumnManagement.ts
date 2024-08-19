import { ref } from 'vue';

const columnStatuses = ref(['New', 'To Do', 'In Progress', 'Done']);
const error = ref(false);

const handleColumnSubmitted = (columnData: string) => {
  error.value = false;
  if (columnStatuses.value.some((status) => status.toUpperCase() === columnData.toUpperCase())) {
    error.value = true;
    return;
  }
  columnStatuses.value.push(columnData);
};

export default function useColumnManagement() {
  return {
    columnStatuses,
    handleColumnSubmitted,
    error,
  };
}
