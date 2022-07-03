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
import DetailCourse from '.'
// the component to test

const server = setupServer(
    rest.get('https://cisdi.mfaiztriputra.id/api/topic/1', (req, res, ctx) => {
        return res(ctx.json({
            data_topic: {
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
            data_lo: [
            {
                "id": 1,
                "id_topic": 1,
                "name": "Ina Aguilar",
                "description": "Porro ut aut illum",
                "created_at": "2022-06-17T15:26:26.000000Z",
                "updated_at": "2022-06-17T15:26:26.000000Z",
                "deleted_at": null,
                "data_lesson": [
                    {
                        "id": 1,
                        "id_lo": 1,
                        "name": "Priscilla Lee",
                        "video_url": null,
                        "video_duration": null,
                        "lesson_text": "Magnam commodi aliqu.",
                        "lesson_attachment": null,
                        "created_at": "2022-06-17T15:26:38.000000Z",
                        "updated_at": "2022-06-17T15:26:38.000000Z",
                        "deleted_at": null,
                        "is_favorit": 0,
                        "is_done": 1
                    }
                ]
            }
        ],
            histories: {
            "id": 1,
            "id_user": 3,
            "id_topic": 1,
            "status": "progress",
            "certificate": null,
            "created_at": "2022-06-17T15:32:36.000000Z",
            "updated_at": "2022-06-17T15:32:36.000000Z"
        },
            is_pre_test_done: false,
            is_post_test_done: false,
            is_rated: false,
            is_feedback: false
        }
    ))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('render detail halaman materi', async () => {
    render(
        <BrowserRouter>
            <DetailCourse />
        </BrowserRouter>
    )

    await expect(screen.getByText('Topik Pembahasan')).toBeInTheDocument()
})