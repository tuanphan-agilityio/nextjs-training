import { fireEvent, render } from '@testing-library/react';

import useEscapeKey from '../useEscapeKey';

describe('useEscapeKey', () => {
  let callbackCalled: boolean;

  beforeEach(() => {
    callbackCalled = false;
  });

  test('it calls the callback when the "Escape" key is pressed', () => {
    const TestComponent = () => {
      useEscapeKey(() => {
        callbackCalled = true;
      });

      return <div data-testid='test-component'>Test Component</div>;
    };

    const { container } = render(<TestComponent />);

    console.log('container', container);

    fireEvent.keyDown(container, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });

    expect(callbackCalled).toBe(true);
  });

  test('it does not call the callback for other key presses', () => {
    const TestComponent = () => {
      useEscapeKey(() => {
        callbackCalled = true;
      });

      return <div data-testid='test-component'>Test Component</div>;
    };

    const { container } = render(<TestComponent />);

    fireEvent.keyDown(container, {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    });

    expect(callbackCalled).toBe(false);
  });
});
