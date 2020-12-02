import * as React from 'react';
import { shallow } from 'enzyme';
import { NumberPick } from '../NumberPick';

describe('NumberPick', () => {
    describe('render', () => {
        test('Debería renderizar un botón +', () => {
            const wrapper = shallow(<NumberPick type = "incremento"/>);
            expect(wrapper.find('button').text()).toBe('+');
        });
        test('Debería renderizar un botón -', () => {
            const wrapper = shallow(<NumberPick type = "decremento"/>);
            expect(wrapper.find('button').text()).toBe('-');
        });
    });
});