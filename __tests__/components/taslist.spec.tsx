import React from 'react';
import {render} from '@testing-library/react-native';
import {renderHook, act} from '@testing-library/react-hooks';
import {TasksProvider, useTaskList} from '../../src/context/TasksContext';
import {TaskList} from '../../src/components/TaskList';

describe('Testes do Componente taskList', () => {
  it('Verificar se um item é removido da lista de tarefas', async () => {
    render(<TaskList />, {
      wrapper: TasksProvider,
    });

    const {result} = renderHook(() => useTaskList(), {
      wrapper: TasksProvider,
    });

    const data = {id: '1', title: 'task01'};
    await act(() => result.current.addTask(data));
    expect(result.current.tasks[0].title).toEqual('task01');

    await act(() => result.current.removeTask("1"));
    expect(result.current.tasks.length).toEqual(0)
  });
});
