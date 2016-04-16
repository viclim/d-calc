require('./app.scss');

import assign from 'object-assign';
import { each, reduce } from 'lodash';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Input from './Input';
import Sheet from './Sheet';
import configureStore from './configureStore';
import { defineInput } from './utils';

export function renderCalculator(inputs, sheet) {
  const store = configureStore({
    inputs: reduce(inputs, (output, o, key) => {
      return assign({}, output, { [key]: { value: o.defaultValue }});
    }, {})
  });

  each(inputs, (o, uniqueId) => {
    const definition = defineInput(uniqueId, o);
    const el = document.getElementById(definition.elementId);
    if (!el) {
      console.log(`DOM Element with ID ${definition.elementId} does not exists!`);
      return;
    } else {
      render(
        <Provider store={ store }>
          <Input
             id={ uniqueId }
             { ...definition }
          />
        </Provider>,
        el
      );
    }
  });
  const sheetEl = document.getElementById(sheet.elementId);
  render(
    <Provider store={ store }>
      <Sheet formula={ sheet.formula } />
    </Provider>,
    sheetEl);
}

window.RenderCalculator = renderCalculator;
