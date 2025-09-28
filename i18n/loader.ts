// // import fs from 'fs';
// // import path from 'path';

// // const addNestedProperty = (obj: { [key: string]: any }, keys: string[]) => {
// //   let current = obj;

// //   for (const key of keys) {
// //     if (!current[key]) {
// //       current[key] = {};
// //     }
// //     current = current[key];
// //   }

// //   return { obj, lastKey: current };
// // };

// // export const loadI18nTranslations = (dictionariesPath: string, locale: string) => {
// //   const relativePath = dictionariesPath + locale;
// //   const absolutePath = path.join(process.cwd(), relativePath);

// //   let translations = {};

// //   try {
// //     const files = fs.readdirSync(absolutePath, { recursive: true });
// //     files.forEach((file) => {
// //       if (typeof file === 'string' && file.endsWith('.json')) {
// //         const fileParents = file.split(path.sep).filter((parent) => parent !== 'index.json');
// //         const filePath = path.join(absolutePath, file);
// //         const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// //         translations = {
// //           ...translations,
// //         };

// //         const { lastKey } = addNestedProperty(translations, fileParents);

// //         Object.assign(lastKey, fileTranslations);
// //       }
// //     });
// //   } catch (error) {
// //     console.error('The following error occured in loader in next-intl-split.', error);
// //   }

// //   return translations;
// // };

// // =============

// // i18n/loader.ts
// import fs from 'fs';
// import path from 'path';

// const addNestedProperty = (obj: { [key: string]: any }, keys: string[]) => {
//   let current = obj;
//   for (const key of keys) {
//     if (!current[key]) {
//       current[key] = {};
//     }
//     current = current[key];
//   }
//   return { obj, lastKey: current };
// };

// export const loadI18nTranslations = (dictionariesPath: string, locale: string) => {
//   const relativePath = dictionariesPath + locale;
//   const absolutePath = path.join(process.cwd(), relativePath);
//   let translations = {};

//   try {
//     const files = fs.readdirSync(absolutePath, { recursive: true });
//     console.log('Translation files found:', files); // Debug
//     files.forEach((file) => {
//       if (typeof file === 'string' && file.endsWith('.json')) {
//         const fileParents = file.split(path.sep).filter((parent) => !parent.endsWith('.json')); // Remove .json from key path
//         const filePath = path.join(absolutePath, file);
//         console.log('Loading file:', filePath); // Debug
//         const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//         console.log('File translations:', fileTranslations); // Debug

//         const { lastKey } = addNestedProperty(translations, fileParents);
//         Object.assign(lastKey, fileTranslations);
//       }
//     });
//   } catch (error) {
//     console.error('Error loading translations:', error);
//     // Fallback to English
//     const fallbackPath = path.join(process.cwd(), dictionariesPath, 'en');
//     const files = fs.readdirSync(fallbackPath, { recursive: true });
//     files.forEach((file) => {
//       if (typeof file === 'string' && file.endsWith('.json')) {
//         const fileParents = file.split(path.sep).filter((parent) => !parent.endsWith('.json'));
//         const filePath = path.join(fallbackPath, file);
//         const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//         const { lastKey } = addNestedProperty(translations, fileParents);
//         Object.assign(lastKey, fileTranslations);
//       }
//     });
//   }

//   console.log('Final translations:', translations); // Debug
//   return translations;
// };

// ================= path

// // i18n/loader.ts
// import fs from 'fs';
// import path from 'path';

// const addNestedProperty = (obj: { [key: string]: any }, keys: string[]) => {
//   let current = obj;
//   for (const key of keys) {
//     if (!current[key]) {
//       current[key] = {};
//     }
//     current = current[key];
//   }
//   return { obj, lastKey: current };
// };

// export const loadI18nTranslations = (
//   dictionariesPath: string,
//   locale: string,
//   fileName?: string,
// ) => {
//   const relativePath = dictionariesPath + locale;
//   const absolutePath = path.join(process.cwd(), relativePath);
//   let translations = <any>{};

//   try {
//     if (fileName) {
//       // Load only the specified file
//       const filePath = path.join(absolutePath, `${fileName}.json`);
//       console.log('Loading specific file:', filePath); // Debug
//       const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//       console.log('File translations:', fileTranslations); // Debug
//       translations[fileName] = fileTranslations;
//     } else {
//       // Load all files (original behavior)
//       const files = fs.readdirSync(absolutePath, { recursive: true });
//       console.log('Translation files found:', files); // Debug
//       files.forEach((file) => {
//         if (typeof file === 'string' && file.endsWith('.json')) {
//           const fileParents = file.split(path.sep).filter((parent) => !parent.endsWith('.json'));
//           const filePath = path.join(absolutePath, file);
//           console.log('Loading file:', filePath); // Debug
//           const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//           console.log('File translations:', fileTranslations); // Debug

//           const { lastKey } = addNestedProperty(translations, fileParents);
//           Object.assign(lastKey, fileTranslations);
//         }
//       });
//     }
//   } catch (error) {
//     console.error('Error loading translations:', error);
//     // Fallback to English
//     const fallbackPath = path.join(process.cwd(), dictionariesPath, 'en');
//     if (fileName) {
//       const filePath = path.join(fallbackPath, `${fileName}.json`);
//       console.log('Loading fallback file:', filePath); // Debug
//       const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//       translations[fileName] = fileTranslations;
//     } else {
//       const files = fs.readdirSync(fallbackPath, { recursive: true });
//       files.forEach((file) => {
//         if (typeof file === 'string' && file.endsWith('.json')) {
//           const fileParents = file.split(path.sep).filter((parent) => !parent.endsWith('.json'));
//           const filePath = path.join(fallbackPath, file);
//           const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//           const { lastKey } = addNestedProperty(translations, fileParents);
//           Object.assign(lastKey, fileTranslations);
//         }
//       });
//     }
//   }

//   console.log('Final translations:', translations); // Debug
//   return translations;
// };

// ===========
// // i18n/loader.ts
// import fs from 'fs';
// import path from 'path';

// const addNestedProperty = (obj: { [key: string]: any }, keys: string[]) => {
//   let current = obj;
//   for (const key of keys) {
//     if (!current[key]) {
//       current[key] = {};
//     }
//     current = current[key];
//   }
//   return { obj, lastKey: current };
// };

// export const loadI18nTranslations = (
//   dictionariesPath: string,
//   locale: string,
//   fileNames?: string | string[],
// ) => {
//   const relativePath = dictionariesPath + locale;
//   const absolutePath = path.join(process.cwd(), relativePath);
//   let translations = {};

//   try {
//     if (fileNames) {
//       const filesToLoad = Array.isArray(fileNames) ? fileNames : [fileNames];
//       filesToLoad.forEach((fileName) => {
//         const filePath = path.join(absolutePath, `${fileName}.json`);
//         console.log('Loading specific file:', filePath);
//         const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//         console.log('File translations:', fileTranslations);
//         // Merge translations, assuming fileTranslations is already the desired structure
//         Object.assign(translations, fileTranslations);
//       });
//     } else {
//       const files = fs.readdirSync(absolutePath, { recursive: true });
//       console.log('Translation files found:', files);
//       files.forEach((file) => {
//         if (typeof file === 'string' && file.endsWith('.json')) {
//           const fileParents = file.split(path.sep).filter((parent) => !parent.endsWith('.json'));
//           const filePath = path.join(absolutePath, file);
//           const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//           console.log('Loading file:', filePath);
//           console.log('File translations:', fileTranslations);

//           const { lastKey } = addNestedProperty(translations, fileParents);
//           Object.assign(lastKey, fileTranslations);
//         }
//       });
//     }
//   } catch (error) {
//     console.error('Error loading translations:', error);
//     const fallbackPath = path.join(process.cwd(), dictionariesPath, 'en');
//     if (fileNames) {
//       const filesToLoad = Array.isArray(fileNames) ? fileNames : [fileNames];
//       filesToLoad.forEach((fileName) => {
//         const filePath = path.join(fallbackPath, `${fileName}.json`);
//         console.log('Loading fallback file:', filePath);
//         const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//         Object.assign(translations, fileTranslations);
//       });
//     } else {
//       const files = fs.readdirSync(fallbackPath, { recursive: true });
//       files.forEach((file) => {
//         if (typeof file === 'string' && file.endsWith('.json')) {
//           const fileParents = file.split(path.sep).filter((parent) => !parent.endsWith('.json'));
//           const filePath = path.join(fallbackPath, file);
//           const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//           const { lastKey } = addNestedProperty(translations, fileParents);
//           Object.assign(lastKey, fileTranslations);
//         }
//       });
//     }
//   }

//   console.log('Final translations:', translations);
//   return translations;
// };

// =============
// // i18n/loader.ts
// import fs from 'fs';
// import path from 'path';

// const addNestedProperty = (obj: Record<string, any>, keys: string[]) => {
//   let current = obj;
//   for (const key of keys) {
//     if (!current[key]) {
//       current[key] = {};
//     }
//     current = current[key];
//   }
//   return { obj, lastKey: current };
// };

// export const loadI18nTranslations = (
//   dictionariesPath: string,
//   locale: string,
//   fileNames?: string | string[],
// ) => {
//   const relativePath = dictionariesPath + locale;
//   const absolutePath = path.join(process.cwd(), relativePath);
//   let translations: Record<string, any> = {}; // Define with index signature

//   // Only log in development on the server
//   const isDev = process.env.NODE_ENV === 'development';
//   const log = isDev && typeof window === 'undefined' ? console.log : () => {};

//   try {
//     if (fileNames) {
//       const filesToLoad = Array.isArray(fileNames) ? fileNames : [fileNames];
//       filesToLoad.forEach((fileName) => {
//         const filePath = path.join(absolutePath, `${fileName}.json`);
//         log('Loading specific file:', filePath);
//         const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//         log('File translations:', fileTranslations);
//         // Explicitly flatten translations
//         Object.keys(fileTranslations).forEach((key) => {
//           translations[key] = fileTranslations[key];
//         });
//       });
//     } else {
//       const files = fs.readdirSync(absolutePath, { recursive: true });
//       log('Translation files found:', files);
//       files.forEach((file) => {
//         if (typeof file === 'string' && file.endsWith('.json')) {
//           const fileParents = file.split(path.sep).filter((parent) => !parent.endsWith('.json'));
//           const filePath = path.join(absolutePath, file);
//           const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//           log('Loading file:', filePath);
//           log('File translations:', fileTranslations);

//           const { lastKey } = addNestedProperty(translations, fileParents);
//           Object.assign(lastKey, fileTranslations);
//         }
//       });
//     }
//   } catch (error) {
//     console.error('Error loading translations:', error);
//     const fallbackPath = path.join(process.cwd(), dictionariesPath, 'en');
//     if (fileNames) {
//       const filesToLoad = Array.isArray(fileNames) ? fileNames : [fileNames];
//       filesToLoad.forEach((fileName) => {
//         const filePath = path.join(fallbackPath, `${fileName}.json`);
//         log('Loading fallback file:', filePath);
//         const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//         // Explicitly flatten translations for fallback
//         Object.keys(fileTranslations).forEach((key) => {
//           translations[key] = fileTranslations[key];
//         });
//       });
//     } else {
//       const files = fs.readdirSync(fallbackPath, { recursive: true });
//       files.forEach((file) => {
//         if (typeof file === 'string' && file.endsWith('.json')) {
//           const fileParents = file.split(path.sep).filter((parent) => !parent.endsWith('.json'));
//           const filePath = path.join(fallbackPath, file);
//           const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//           const { lastKey } = addNestedProperty(translations, fileParents);
//           Object.assign(lastKey, fileTranslations);
//         }
//       });
//     }
//   }

//   log('Final translations:', translations);
//   return translations;
// };

// ========== last

// // i18n/loader.ts
// import fs from 'fs';
// import path from 'path';

// const addNestedProperty = (obj: Record<string, any>, keys: string[]) => {
//   let current = obj;
//   for (const key of keys) {
//     if (!current[key]) {
//       current[key] = {};
//     }
//     current = current[key];
//   }
//   return { obj, lastKey: current };
// };

// export const loadI18nTranslations = (
//   dictionariesPath: string,
//   locale: string,
//   fileNames?: string | string[],
// ) => {
//   const relativePath = dictionariesPath + locale;
//   const absolutePath = path.join(process.cwd(), relativePath);
//   let translations: Record<string, any> = {};

//   // Only log in development on the server
//   const isDev = process.env.NODE_ENV === 'development';
//   const log =
//     isDev && typeof window === 'undefined'
//       ? (...args: any[]) => {
//           console.log(...args);
//         }
//       : () => {};

//   try {
//     if (fileNames) {
//       const filesToLoad = Array.isArray(fileNames) ? fileNames : [fileNames];
//       filesToLoad.forEach((fileName) => {
//         const filePath = path.join(absolutePath, `${fileName}.json`);
//         log('Loading specific file:', filePath);
//         const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//         log('File translations:', fileTranslations);
//         Object.keys(fileTranslations).forEach((key) => {
//           translations[key] = fileTranslations[key];
//         });
//       });
//     } else {
//       const files = fs.readdirSync(absolutePath, { recursive: true });
//       log('Translation files found:', files);
//       files.forEach((file) => {
//         if (typeof file === 'string' && file.endsWith('.json')) {
//           const fileParents = file.split(path.sep).filter((parent) => !parent.endsWith('.json'));
//           const filePath = path.join(absolutePath, file);
//           const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//           log('Loading file:', filePath);
//           log('File translations:', fileTranslations);
//           const { lastKey } = addNestedProperty(translations, fileParents);
//           Object.assign(lastKey, fileTranslations);
//         }
//       });
//     }
//   } catch (error) {
//     console.error('Error loading translations:', error);
//     const fallbackPath = path.join(process.cwd(), dictionariesPath, 'en');
//     if (fileNames) {
//       const filesToLoad = Array.isArray(fileNames) ? fileNames : [fileNames];
//       filesToLoad.forEach((fileName) => {
//         const filePath = path.join(fallbackPath, `${fileName}.json`);
//         log('Loading fallback file:', filePath);
//         const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//         Object.keys(fileTranslations).forEach((key) => {
//           translations[key] = fileTranslations[key];
//         });
//       });
//     } else {
//       const files = fs.readdirSync(fallbackPath, { recursive: true });
//       files.forEach((file) => {
//         if (typeof file === 'string' && file.endsWith('.json')) {
//           const fileParents = file.split(path.sep).filter((parent) => !parent.endsWith('.json'));
//           const filePath = path.join(fallbackPath, file);
//           const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//           const { lastKey } = addNestedProperty(translations, fileParents);
//           Object.assign(lastKey, fileTranslations);
//         }
//       });
//     }
//   }

//   log('Final translations:', translations);
//   return translations;
// };

// ==============

// i18n/loader.ts
import fs from 'fs';
import path from 'path';

const addNestedProperty = (obj: Record<string, any>, keys: string[]) => {
  let current = obj;
  for (const key of keys) {
    if (!current[key]) {
      current[key] = {};
    }
    current = current[key];
  }
  return { obj, lastKey: current };
};

export const loadI18nTranslations = (
  dictionariesPath: string,
  locale: string,
  fileNames?: string | string[],
) => {
  const relativePath = dictionariesPath + locale;
  const absolutePath = path.join(process.cwd(), relativePath);
  let translations: Record<string, any> = {};

  // Only log in development on the server
  const isDev = process.env.NODE_ENV === 'development';
  const log =
    isDev && typeof window === 'undefined'
      ? (...args: any[]) => {
          console.log(...args);
        }
      : () => {};

  try {
    if (fileNames) {
      const filesToLoad = Array.isArray(fileNames) ? fileNames : [fileNames];
      filesToLoad.forEach((fileName) => {
        const filePath = path.join(absolutePath, `${fileName}.json`);
        log('Loading specific file:', filePath);
        const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        log('File translations:', fileTranslations);
        Object.keys(fileTranslations).forEach((key) => {
          translations[key] = fileTranslations[key];
        });
      });
    } else {
      const files = fs.readdirSync(absolutePath, { recursive: true });
      log('Translation files found:', files);
      files.forEach((file) => {
        if (typeof file === 'string' && file.endsWith('.json')) {
          const fileParents = file.split(path.sep).filter((parent) => !parent.endsWith('.json'));
          const filePath = path.join(absolutePath, file);
          const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          log('Loading file:', filePath);
          log('File translations:', fileTranslations);
          const { lastKey } = addNestedProperty(translations, fileParents);
          Object.assign(lastKey, fileTranslations);
        }
      });
    }
  } catch (error) {
    console.error('Error loading translations:', error);
    const fallbackPath = path.join(process.cwd(), dictionariesPath, 'en');
    if (fileNames) {
      const filesToLoad = Array.isArray(fileNames) ? fileNames : [fileNames];
      filesToLoad.forEach((fileName) => {
        const filePath = path.join(fallbackPath, `${fileName}.json`);
        log('Loading fallback file:', filePath);
        const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        Object.keys(fileTranslations).forEach((key) => {
          translations[key] = fileTranslations[key];
        });
      });
    } else {
      const files = fs.readdirSync(fallbackPath, { recursive: true });
      files.forEach((file) => {
        if (typeof file === 'string' && file.endsWith('.json')) {
          const fileParents = file.split(path.sep).filter((parent) => !parent.endsWith('.json'));
          const filePath = path.join(fallbackPath, file);
          const fileTranslations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          const { lastKey } = addNestedProperty(translations, fileParents);
          Object.assign(lastKey, fileTranslations);
        }
      });
    }
  }

  log('Final translations:', translations);
  return translations;
};
