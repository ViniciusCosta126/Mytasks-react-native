import React from 'react';
import {render} from '@testing-library/react-native';
import {Home} from '../../src/pages/Home';
import {renderHook, act} from '@testing-library/react-hooks';
import {TasksProvider, useTaskList} from '../../src/context/TasksContext';

describe('Testes da home', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(<Home />);

    const inputNewTask = getByPlaceholderText('Nova tarefa...');
    expect(inputNewTask).toBeDefined();
    expect(inputNewTask.props.placeholder).toBeTruthy();
  });
  it('Verificar a insercao de um item na lista de tarefas', async () => {
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TasksProvider,
    });

    const data = {id: '1', title: 'task01'};

    await act(() => result.current.addTask(data));
    expect(result.current.tasks).toBeTruthy();
  });
});
