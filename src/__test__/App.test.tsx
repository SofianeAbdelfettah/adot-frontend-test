import React from 'react'
import App from '../App'
import { render, screen } from '@testing-library/react'
import { test, expect } from '@jest/globals'

test('If no data is in the state error should happen', async () => {
  render(<App />)

  expect(screen.getAllByText('Error')).toBeTruthy()
})
