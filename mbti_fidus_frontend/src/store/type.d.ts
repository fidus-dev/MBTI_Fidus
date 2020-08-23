import { StateType } from 'typesafe-actions';

declare module 'typesafe-actions' {
    export type Store = StateType<typeof import('./index').default>
    export type RootState = ReturnType<typeof import('./modules').default>
}