import assign from 'object-assign';
import { kebabCase, startCase } from 'lodash';

let uniqueIds = {};
export function defineInput(uniqueId, attributes) {
  if (uniqueIds[uniqueId]) throw new Error(`Duplicated input found \`${uniqueId}\``);
  uniqueIds[uniqueId] = true;

  const config = assign({}, attributes);

  if (!config.defaultValue) config.defaultValue = 0;
  if (!config.elementId) config.elementId = kebabCase(uniqueId);
  if (!config.formatter) config.formatter = (value) => value;
  if (!config.label) config.label = startCase(uniqueId);
  if (!config.placeholder) config.placeholder = startCase(uniqueId);

  return config;
}
