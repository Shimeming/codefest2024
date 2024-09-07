// import { onUnmounted } from 'vue';

// export const useHandleConnectionData = (cb?: (event: { data: string }) => void) => {
//   // @ts-ignore
//   if (typeof flutterObject !== 'undefined' && flutterObject) {
//     if (cb) {
//       // @ts-ignore
//       flutterObject.addEventListener('message', cb);

//       onUnmounted(() => {
//         // @ts-ignore
//         flutterObject.removeEventListener('message', cb);
//       });
//     }
//   }
// };

// export const useConnectionMessage = <T>(name: string, data: T) => {
//   // @ts-ignore
//   if (typeof flutterObject !== 'undefined' && flutterObject) {
//     const postInfo = JSON.stringify({ name, data });

//     // @ts-ignore
//     flutterObject.postMessage(postInfo);
//   }
// };
