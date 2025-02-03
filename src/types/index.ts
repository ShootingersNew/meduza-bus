import type { Emitter } from 'mitt';
import type { TLocaleEvents } from "./locale";

type TEventBus = Emitter<TLocaleEvents>;
type TEvents = TLocaleEvents;

export type { TEventBus, TEvents };

