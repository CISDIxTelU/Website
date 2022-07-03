// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { render, waitFor, screen, fireEvent } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Course from '.'
// the component to test

const server = setupServer(
    rest.get('https://cisdi.mfaiztriputra.id/api/lesson/1', (req, res, ctx) => {
        return res(ctx.json({
            data: 
                {
                    "id": 1,
                    "id_lo": 1,
                    "name": "Priscilla Lee",
                    "video_url": 'https://youtube.com',
                    "video_duration": null,
                    "lesson_text": "<p>Magnam commodi aliqu.</p>",
                    "lesson_attachment": 'data.pdf',
                    "created_at": "2022-06-17T15:26:38.000000Z",
                    "updated_at": "2022-06-17T15:26:38.000000Z",
                    "deleted_at": null
                }
        }
        ))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('render halaman materi', async () => {
    render(
        <BrowserRouter>
            <Course />
        </BrowserRouter>
    )

    await waitFor(() => screen.getByRole('heading'))

    expect(screen.getByRole('heading')).toHaveTextContent('Priscilla Lee')

    fireEvent.click(screen.getByRole('button'))
})