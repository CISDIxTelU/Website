// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import DetailCourse, { Dropdown } from '.'
import Accordion from '.'
// the component to test

const server = setupServer(
    rest.get('https://cisdi.mfaiztriputra.id/api/topic/1', (req, res, ctx) => {
        return res(ctx.json({
            data_lo: [
                {
                    "id": 1,
                    "id_topic": 1,
                    "name": "Ina Aguilar",
                    "description": "Porro ut aut illum",
                    "created_at": "2022-06-17T15:26:26.000000Z",
                    "updated_at": "2022-06-17T15:26:26.000000Z",
                    "deleted_at": null,
                    data_lesson: [
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
            is_feedback: false,
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

test('render accordion', async () => {
    render(
        <BrowserRouter>
            <Accordion dataLo={
                [
                    {
                        "id": 1,
                        "id_topic": 1,
                        "name": "Ina Aguilar",
                        "description": "Porro ut aut illum",
                        "created_at": "2022-06-17T15:26:26.000000Z",
                        "updated_at": "2022-06-17T15:26:26.000000Z",
                        "deleted_at": null,
                        data_lesson: [
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
                ]
            }
                id={1}
                isDone={true}
            />
        </BrowserRouter>
    )

    // await waitFor(() => screen.getByRole('heading'))

    expect(screen.getByText('Ina Aguilar')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Ina Aguilar'))
    fireEvent.click(screen.getByTestId('like'))
})

test('click button modal', async () => {
    render(
        <BrowserRouter>
            <Accordion dataLo={
                [
                    {
                        "id": 1,
                        "id_topic": 1,
                        "name": "Ina Aguilar",
                        "description": "Porro ut aut illum",
                        "created_at": "2022-06-17T15:26:26.000000Z",
                        "updated_at": "2022-06-17T15:26:26.000000Z",
                        "deleted_at": null,
                        data_lesson: [
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
                ]
            }
                id={1}
                isDone={true}
            />
        </BrowserRouter>
    )

    
    expect(screen.getByText('Ina Aguilar')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Feedback'));
    expect(screen.getByText('Pelatihan “Peningkatan Peran Kader dan Pendamping Kelompok dalam Respon Covid-19”')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('close'));
})

test('click button pre test', async () => {
    render(
        <BrowserRouter>
            <Accordion dataLo={
                [
                    {
                        "id": 1,
                        "id_topic": 1,
                        "name": "Ina Aguilar",
                        "description": "Porro ut aut illum",
                        "created_at": "2022-06-17T15:26:26.000000Z",
                        "updated_at": "2022-06-17T15:26:26.000000Z",
                        "deleted_at": null,
                        data_lesson: [
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
                ]
            }
                id={1}
                isDone={true}
            />
        </BrowserRouter>
    )

    
    expect(screen.getByText('Ina Aguilar')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Pre test'));
})

test('click button post test', async () => {
    render(
        <BrowserRouter>
            <Accordion dataLo={
                [
                    {
                        "id": 1,
                        "id_topic": 1,
                        "name": "Ina Aguilar",
                        "description": "Porro ut aut illum",
                        "created_at": "2022-06-17T15:26:26.000000Z",
                        "updated_at": "2022-06-17T15:26:26.000000Z",
                        "deleted_at": null,
                        data_lesson: [
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
                ]
            }
                id={1}
                isDone={true}
            />
        </BrowserRouter>
    )

    
    expect(screen.getByText('Ina Aguilar')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Post test'));
})

test('click button unggah tugas', async () => {
    render(
        <BrowserRouter>
            <Accordion dataLo={
                [
                    {
                        "id": 1,
                        "id_topic": 1,
                        "name": "Ina Aguilar",
                        "description": "Porro ut aut illum",
                        "created_at": "2022-06-17T15:26:26.000000Z",
                        "updated_at": "2022-06-17T15:26:26.000000Z",
                        "deleted_at": null,
                        data_lesson: [
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
                ]
            }
                id={1}
                isDone={true}
            />
        </BrowserRouter>
    )

    
    expect(screen.getByText('Ina Aguilar')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Unggah Tugas'));
})

test('click button selesaikan pelatihan', async () => {
    render(
        <BrowserRouter>
            <Accordion dataLo={
                [
                    {
                        "id": 1,
                        "id_topic": 1,
                        "name": "Ina Aguilar",
                        "description": "Porro ut aut illum",
                        "created_at": "2022-06-17T15:26:26.000000Z",
                        "updated_at": "2022-06-17T15:26:26.000000Z",
                        "deleted_at": null,
                        data_lesson: [
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
                ]
            }
                id={1}
                isDone={true}
            />
        </BrowserRouter>
    )

    
    expect(screen.getByText('Ina Aguilar')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Selesaikan Pelatihan'));
})