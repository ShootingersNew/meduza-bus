import mitt from 'mitt';
import type { TEventBus, TEvents } from './types/index';

const eventBus:TEventBus = mitt<TEvents>();
export default eventBus;