// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { render, screen, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Profile from '.'
// the component to test

const server = setupServer(
    rest.get('https://cisdi.mfaiztriputra.id/api/profile', (req, res, ctx) => {
        return res(
            ctx.json({
                "status": "success",
                "message": "You have successfully request profile information",
                "name": "Example Trainer",
                "username": "trainer",
                "role": "trainer",
                "asal_instansi": "Lainnya",
                "created_at": "2022-04-02T07:36:16.000000Z",
                "updated_at": "2022-04-02T07:36:16.000000Z"
            }))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('render halaman profil', async () => {
    render(
        <BrowserRouter>
            <Profile />
        </BrowserRouter>
    )

    // await waitFor(() => screen.getByRole('textbox'))
    await waitFor(() => {
        expect(screen.getByLabelText("name-input")).toHaveValue("Example Trainer");
     });
})

