import { render } from "@testing-library/react";
import {Users} from '../pages'
import 'jest-canvas-mock';


describe('true is truthy and false is falsy', () => {
    test('true is truthy', () => {
        render(<Users />)
    });
});