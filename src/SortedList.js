import React from 'react';
import { uniqueElementsBy, scrollTo } from './utils';

function OrderedList(props) {
  const { items = [], groups = {} } = props || {};
  const groupLabels = Object.keys(groups).sort();

  return (
    <section className="sorted-list">
      <h2 className="heading">Showing all {items.length} pages</h2>
      <div className="sticky wrapper">
        {groupLabels.map(label => (
          <a
            href={`#${label}`}
            className="nav-link"
            key={label}
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
              const stickyHeaderHeight = document.querySelector(
                '.sticky.wrapper',
              ).offsetHeight;

              scrollTo(
                `#${label.length > 1 ? 'num' : label}`,
                stickyHeaderHeight + 10,
              );
            }}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="sorted-list-wrapper">
        {groupLabels.map(label => {
          const uniqElements = uniqueElementsBy(
            groups[label],
            (a, b) => a.text === b.text,
          );
          const sortedUniqElems = uniqElements.sort(function(a, b) {
            var label1 = (a.text || '').trim().toUpperCase();
            var label2 = (b.text || '').trim().toUpperCase();
            if (label1 < label2) {
              return -1;
            }
            if (label1 > label2) {
              return 1;
            }
            return 0;
          });
          return (
            <div
              key={label}
              id={label.length > 1 ? 'num' : label}
              className="group-wrapper"
            >
              <div className="group-heading">{label}</div>
              <ul className="group-list">
                {sortedUniqElems.map(item => (
                  <li key={item.text} className="list-item">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OrderedList;
