import mitt from 'mitt';
import type { TEmitter, TEvents } from './types/index';

const eventBus:TEmitter = mitt<TEvents>();
export default eventBus;