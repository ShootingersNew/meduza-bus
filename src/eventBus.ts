import mitt from 'mitt';
import type { TEvents } from './types/index';

const eventBus = mitt<TEvents>();
export default eventBus;