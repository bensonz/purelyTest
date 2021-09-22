import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
import { SelectionMode } from 'office-ui-fabric-react/lib/Selection';

import './App.css';

const columns = [
  {
    key: 'source',
    name: 'source',
    fieldName: 'source',
    minWidth: 200,
    maxWidth: 300,
    isResizable: true,
    headerClassName: 'ms-fontColor-neutralSecondary'
  },{
    key: 'dest',
    name: 'dest',
    fieldName: 'dest',
    minWidth: 200,
    maxWidth: 300,
    isResizable: true,
    headerClassName: 'ms-fontColor-neutralSecondary'
  },
]

const taskList = [
  {
    'source' : 'abc',
    'dest':'cdf'
  },
  {
    'source' : '123',
    'dest':'456'
  },
  {
    'source' : 'a90',
    'dest':'60d'
  },
  {
    'source' : 'h90',
    'dest':'60dasdf'
  },
  {
    'source' : 'a9067876',
    'dest':'7987a98sdf'
  },
]
function App() {

  return (
    <div className="App">
      <header className="App-header" role="heading" aria-level="1">
        TestDetailsList
      </header>
      <div className="container">
      <DetailsList
          items={taskList}
          columns={columns}
          selectionMode={SelectionMode.none}
        />
      </div>
    </div>
  );
}

export default App;
