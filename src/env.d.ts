/// <reference types="vite/client" />

declare module "*.vue" {
    import { DefineComponent } from "vue";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

// Make sure vite has been patched with `npx patch-package`
declare module "*.svg" {
    import { DefineComponent } from "vue";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const svg: DefineComponent<{}, {}, any>;
    export default svg;
}
