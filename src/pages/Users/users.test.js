import { screen, render, waitFor, fireEvent } from '@testing-library/react'
import Users from '.'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

test('render user page', () => {
    render(
        <BrowserRouter>
            <Users />
        </BrowserRouter>
    )
    
    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => expect(screen.getByText('Pilih peran untuk melanjutkan!')).toBeInTheDocument());
})

test('hovered button user page', () => {
    render(
        <BrowserRouter>
            <Users />
        </BrowserRouter>
    )
    fireEvent.mouseOver(screen.getByText('Peserta'));
    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => expect(screen.get).toBeInTheDocument());
})