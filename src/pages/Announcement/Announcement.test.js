// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { render, screen, waitFor } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Announcement from '.'
// the component to test

const server = setupServer(
    rest.get('https://cisdi.mfaiztriputra.id/api/announcement', (req, res, ctx) => {
        return res(ctx.json({
            data: [
                {
                    "id": 1,
                    "title": "testing",
                    "text": "<p>ini merupakan contoh announcement dari cisdi</p>",
                    "created_at": "2022-04-08T00:17:58.000000Z",
                    "updated_at": "2022-04-08T00:17:58.000000Z",
                },
                {
                    "id": 2,
                    "title": "coba",
                    "text": "<p>ini merupakan contoh announcement</p>",
                    "created_at": "2022-04-08T00:17:58.000000Z",
                    "updated_at": "2022-04-08T00:17:58.000000Z",
                },
            ]
        }
        ))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('render halaman kumpulan materi', async () => {
    render(
        <BrowserRouter>
            <Announcement />
        </BrowserRouter>
    )

    await waitFor(() => screen.getByText('ini merupakan contoh announcement dari cisdi'))
    
    expect(screen.getByText('ini merupakan contoh announcement dari cisdi')).toBeInTheDocument()
})