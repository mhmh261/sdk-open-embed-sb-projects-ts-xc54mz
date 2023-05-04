import sdk from '@stackblitz/sdk';
// Import stylesheets
import './style.css';

// This opens https://stackblitz.com/edit/css-custom-prop-color-values
// in the current window with the Preview pane
function openProject() {
  sdk.openProjectId('css-custom-prop-color-values', {
    newWindow: false,
    view: 'preview',
  });
}

//  This replaces the HTML element with
// the id of "embed" with https://stackblitz.com/edit/css-custom-prop-color-values embedded in an iframe.
function embedProject() {
  sdk.embedProjectId('embed', 'css-custom-prop-color-values', {
    openFile: 'index.ts',
  });
}

const openButton = document.getElementById('open-button');
const embedButton = document.getElementById('embed-button');

openButton.addEventListener('click', openProject);
embedButton.addEventListener('click', embedProject);
