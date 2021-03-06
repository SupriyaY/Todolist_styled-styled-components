import React from 'react';
import { Button } from './components/Button'
import TodoList from './components/TodoList'
import ClickMe from './components/PrettyButton'
import PageHeader from './components/Nav'
import NewButton from './components/BootstrapButton'

class App extends React.Component {
  render() {
    let todoItems = [{author: 'Supriya', description: 'Styled-Components'},
    {author: 'Destin', description: 'React Router'},
    {author: 'Noah', description: 'Props & State'}
  ]

    return (
      <div>
        <PageHeader />
<TodoList list={todoItems}  />
        <Button />
        <ClickMe /> 
        <NewButton/>
      </div>
    )


  }

}


export default App;
