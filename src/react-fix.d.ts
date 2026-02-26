import 'react';

declare module 'react' {
  // This allows any custom CSS variable starting with --
  interface CSSProperties {
    [key: string]: any;
  }
}

// This fixes the "JSX element implicitly has type any" error
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}