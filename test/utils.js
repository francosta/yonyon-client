import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
// import rootReducer from '../src/reducers/index';

/**
 * @function storeFactory - Factory function to create a testing store with imported reducers, middleware and initial state.
 * @param {object} initialState - Initial state for store
 * @returns {Store} - Redux store
 */
// export const storeFactory = (initialState) => {
//   return createStore(rootReducer, initialState);
// };

/**
 * @function findByTestAttr - Factory function to create an Enzyme shallow wrapper for testing
 * @param {ShallowWrapper} wrapper - Enzyme wrapper
 * @param {string} value - Value of the data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

/**
 * @function checkProps - Factory function that uses check-prop-types to get the warning message for unexpected props.
 * @param {ReactComponent} component - React component to test for proptypes.
 * @param {object} conformingProps - React props the component should expect to receive.
 * @returns {object} - The check-prop-types warning message.
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
