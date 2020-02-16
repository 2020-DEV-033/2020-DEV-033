import React from 'react';
import Game from '../game';
import Board from '../board';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  shallow(<Game />);
});