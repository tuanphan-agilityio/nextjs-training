import '@testing-library/jest-dom/extend-expect';

// Add modal root element
const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);
