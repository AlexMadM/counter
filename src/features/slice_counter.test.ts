import {AppRootStateType} from "../app/store";
import {click, decrement, increment} from "./slice_counter";

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state = { value: 10 };

        expect(click(state, decrement())).toEqual({
            value: 9,
        });
    });
    test('increment', () => {
        const state = { value: 10 };

        expect(click(state, increment())).toEqual({
            value: 11,
        });
    });

    test('should work with empty state', () => {
        expect(click(undefined, increment())).toEqual({
            value: 1,
        });
    });
});
