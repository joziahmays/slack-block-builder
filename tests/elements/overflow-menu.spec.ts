import { OverflowMenuBuilder as Class } from '../../src/elements/overflow-menu';
import { ElementSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/overflow-menu.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'OverflowMenuBuilder';
const category = 'Elements';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.actionId,
  methods.options,
  methods.confirm,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
