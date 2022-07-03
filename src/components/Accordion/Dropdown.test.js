// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { fireEvent, render, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { Dropdown } from '.'
// the component to test

describe('add favorite', () => {
    const addFavorite = setupServer(
        rest.post('https://cisdi.mfaiztriputra.id/api/favorit/add/1', (req, res, ctx) => {
            return res(ctx.json({data: {
                status: 'success'
            }}))
        }),
    )

    beforeAll(() => addFavorite.listen())
    afterEach(() => addFavorite.resetHandlers())
    afterAll(() => addFavorite.close())
    test('add lesson favorite', async () => {
        render(
            <BrowserRouter>
                <Dropdown dataLesson={
                    [
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
                    id={1}
                />
            </BrowserRouter>
        )

        // await waitFor(() => screen.getByRole('heading'))

        fireEvent.click(screen.getByTestId('like'))
        expect(screen.getByText('Priscilla Lee')).toBeInTheDocument()
    })
})

describe('delete favorite lesson', () => {
    const deleteFavorite = setupServer(
        rest.delete('https://cisdi.mfaiztriputra.id/api/favorit/delete/1', (req, res, ctx) => {
            return res (ctx.json({data: {
                status: 'success'
            }}))
        }),
    )

    beforeAll(() => deleteFavorite.listen())
    afterEach(() => deleteFavorite.resetHandlers())
    afterAll(() => deleteFavorite.close())

    test('delete lesson favorite', async () => {
        render(
            <BrowserRouter>
                <Dropdown dataLesson={
                    [
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
                            "is_favorit": 1,
                            "is_done": 1
                        }
                    ]
                }
                    id={1}
                />
            </BrowserRouter>
        )

        fireEvent.click(screen.getByTestId('like'))
        expect(screen.getByText('Priscilla Lee')).toBeInTheDocument()
    })
})

