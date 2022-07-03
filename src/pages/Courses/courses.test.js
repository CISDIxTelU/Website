// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { render, waitFor, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Courses from '.'
// the component to test

const server = setupServer(
    rest.get('https://cisdi.mfaiztriputra.id/api/topic', (req, res, ctx) => {
        return res(ctx.json({
            data: [
                {
                    "id": 1,
                    "title": "Amet Nam porro veli",
                    "description": "Impedit sed qui cum",
                    "short_description": "Ea quasi culpa nulla",
                    "author": "Inventore libero est",
                    "cover_image": "topics/Q4cY6k0NQHQy5AMizmN0pHbHLrjK1ZqUOwviRbnU.jpg",
                    "certificate": null,
                    "created_at": "2022-06-17T15:08:46.000000Z",
                    "updated_at": "2022-06-17T15:08:46.000000Z",
                    "deleted_at": null,
                    "count_lesson": 1
                },
                {
                    "id": 2,
                    "title": "Voluptatem omnis re",
                    "description": "Voluptatem eiusmod",
                    "short_description": "Id libero voluptate",
                    "author": "Magnam est possimus",
                    "cover_image": "topics/WYMovXvlJD6eSyvDm2vb68g715RPzbRt23IlBmRA.jpg",
                    "certificate": null,
                    "created_at": "2022-06-17T15:10:35.000000Z",
                    "updated_at": "2022-06-17T15:10:35.000000Z",
                    "deleted_at": null,
                    "count_lesson": 0
                },
                {
                    "id": 3,
                    "title": "Nesciunt asperiores",
                    "description": "Distinctio Pariatur",
                    "short_description": "Consequatur accusant",
                    "author": "Necessitatibus volup",
                    "cover_image": "topics/uYsEFHXLUfIOMz7oK7VzvkHSzdZKTt9yx7u4In8A.jpg",
                    "certificate": null,
                    "created_at": "2022-06-17T15:11:59.000000Z",
                    "updated_at": "2022-06-17T15:11:59.000000Z",
                    "deleted_at": null,
                    "count_lesson": 0
                }
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
            <Courses />
        </BrowserRouter>
    )

    await waitFor(() => screen.getByRole('heading'))

    expect(screen.getByRole('heading')).toHaveTextContent('Topik Pembahasan')

    expect(screen.getByText('Nesciunt asperiores')).toBeInTheDocument()
})