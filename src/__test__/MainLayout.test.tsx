import React from 'react'
import MainLayout from '../Layout/MainLayout'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { test, expect } from '@jest/globals'
import Modal from 'react-modal'

Modal.setAppElement(document.createElement('div'))

test('Open the modal', async () => {
  render(<MainLayout />)

  const openModalbutton = screen.getByTestId('toggleModalBtn')
  fireEvent.click(openModalbutton)

  expect(screen.getByTestId('closeModalBtn')).toHaveTextContent('X')
})

test('Errors are displayed correctly', async () => {
  render(<MainLayout />)

  const openModalbutton = screen.getByTestId('toggleModalBtn')
  fireEvent.click(openModalbutton)

  const validateFormButton = screen.getByTestId('validationBtn')
  fireEvent.click(validateFormButton)

  await waitFor(() =>
    expect(screen.getByTestId('errorsField')).toHaveTextContent(
      'Tous les champs sont requis pour poursuivre'
    )
  )
})
