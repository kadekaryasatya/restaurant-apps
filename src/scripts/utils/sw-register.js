// const registerSW = () => {
//   if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       navigator.serviceWorker
//         .register('/service-worker.js')
//         .then((registration) => {
//           console.log('SW registered: ', registration);
//         })
//         .catch((registrationError) => {
//           console.log('SW registration failed: ', registrationError);
//         });
//     });
//   }
// };

// export default registerSW;

import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  const wb = new WorkboxWindow.Workbox('./service-worker.js');

  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
