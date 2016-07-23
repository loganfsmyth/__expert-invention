import React from 'react';
import { observer, observable } from 'mobx-react';

class TodoList {
  @observable todos = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

@observer
export default class Root extends React.Component {
  render() {
    return (
      <div>
        <ul>
          { this.props.todoList.todos.map(todo =>
            <TodoView todo={ todo } key={ todo.id } />
          )}
        </ul>
        Tasks left: { this.props.todoList.unfinishedTodoCount }
      </div>
    );
  }
}

const TodoView = observer(({ todo }) =>
  <li>
    <input
      type="checkbox"
      checked={ todo.finished }
      onClick={ () => todo.finished = !todo.finished }
      />{ todo.title }
  </li>
)

const store = new TodoList();
