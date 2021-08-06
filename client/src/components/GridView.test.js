import React from 'react';
import { render } from '@testing-library/react'
import GridView from './GridView';
import { players } from '../utils/playersData';
import { expect, jest, test } from '@jest/globals';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

it('should xpect Ronaldo', () => {
  const { getByText } = render(
    <BrowserRouter>
  <GridView players={players}/>
    </BrowserRouter>
  )
  const component = getByText('Ronaldo de Assis Moreira')
  expect(component).toBeInTheDocument()
  // component.unmount();
});
