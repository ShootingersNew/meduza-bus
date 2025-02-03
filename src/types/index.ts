import { Emitter } from 'mitt';
import type { TLocaleEvents } from "./locale";

type TEmitter = Emitter<TLocaleEvents>;
type TEvents = TLocaleEvents;

export type { TEmitter, TEvents };

