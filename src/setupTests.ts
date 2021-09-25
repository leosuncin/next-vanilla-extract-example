import '@testing-library/jest-dom';
import '@vanilla-extract/css/disableRuntimeStyles';

import { loadEnvConfig } from '@next/env';

loadEnvConfig(__dirname, true, { info: () => null, error: console.error });
// @ts-expect-error Monkey patch
globalThis.__NEXT_DATA__ = {};
