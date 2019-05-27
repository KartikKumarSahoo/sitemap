import React from 'react';
import './App.css';
import data from './data';
import OrderedList from './OrderedList';
import SortedList from './SortedList';
import { uniqueElementsBy, groupBy } from './utils';

function groupedItinararies(items) {
  return groupBy(items, item => {
    let firstChar = (item.text || '').trim()[0];
    firstChar = firstChar.toUpperCase();
    return isNaN(+firstChar) ? firstChar : '0-9';
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pickyourtrail Sitmap</h1>
      </header>
      <main>
        <OrderedList
          items={uniqueElementsBy(
            data.destinations,
            (a, b) => a.text === b.text,
          )}
          heading="Destinations"
        />
        <OrderedList items={data.vacations} heading="Themed Vacations" />
        <SortedList
          items={data.itineraries}
          groups={groupedItinararies(data.itineraries)}
        />
      </main>
    </div>
  );
}

export default App;
