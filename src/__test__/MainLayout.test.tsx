import React from 'react'
import MainLayout from '../Layout/MainLayout'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { test, expect } from '@jest/globals'
import Modal from 'react-modal'

Modal.setAppElement(document.createElement('div'))

test('Open the modal', async () => {
  render(<MainLayout />)

  const openModalbutton = screen.getByTestId('toggleModalBtn')
  fireEvent.click(openModalbutton)

  expect(screen.getByTestId('closeModalBtn')).toHaveTextContent('X')
})

test('Close the modal', async () => {
  const { queryByTestId } = render(<MainLayout />)

  const openModalbutton = screen.getByTestId('toggleModalBtn')
  fireEvent.click(openModalbutton)

  await waitFor(() => expect(screen.getByTestId('closeModalBtn').click()))

  expect(queryByTestId('closeModalBtn')).toBeNull()
})

test('Errors are displayed correctly', async () => {
  const { queryByTestId } = render(<MainLayout />)

  const openModalbutton = screen.getByTestId('toggleModalBtn')
  fireEvent.click(openModalbutton)

  // test that the error doesnt appear for no reason
  expect(queryByTestId('errorsField')).toBeNull()

  const validateFormButton = screen.getByTestId('validationBtn')
  fireEvent.click(validateFormButton)

  await waitFor(() =>
    expect(screen.getByTestId('errorsField')).toHaveTextContent(
      'Tous les champs sont requis pour poursuivre'
    )
  )
})
