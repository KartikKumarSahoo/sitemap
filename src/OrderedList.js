import React from 'react';

function OrderedList(props) {
  return (
    <section className="ordered-list">
      {props.heading && <h2 className="heading">{props.heading}</h2>}
      <ul className="list">
        {props.items.map(item => (
          <li key={item.text} className="list-item">
            <a href={item.url} target="_blank" rel="noreferrer noopener">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OrderedList;
