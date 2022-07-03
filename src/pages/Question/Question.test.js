// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import LandingPage from '.'
import { BrowserRouter } from 'react-router-dom'
import CardLanding from '../../components/CardLanding'
import { Modal } from '../../components'
import Question from '.'
// the component to test

const server = setupServer(
    rest.get('https://cisdi.mfaiztriputra.id/api/question/1/post_test', (req, res, ctx) => {
        return res(ctx.json({
            question: [
                {
                    "id": 4,
                    "id_topic": 1,
                    "question": "Modi tenetur similiq.",
                    "answer_1": "Doloremque quasi ass",
                    "answer_2": "Dolorem ratione qui",
                    "answer_3": "Optio sit voluptate",
                    "answer_4": "Quod et molestias mi",
                    "key": "answer_2",
                    "explanation": "Cumque aliquam conse",
                    "type": "post_test",
                    "created_at": "2022-04-12T11:40:13.000000Z",
                    "updated_at": "2022-04-12T11:40:13.000000Z",
                    "deleted_at": null
                },
                {
                    "id": 5,
                    "id_topic": 1,
                    "question": "Blanditiis est ut co.",
                    "answer_1": "Esse ipsum suscipi",
                    "answer_2": "Quia rem aut velit c",
                    "answer_3": "Beatae laborum Vita",
                    "answer_4": "Excepturi dignissimo",
                    "key": "answer_2",
                    "explanation": "Harum odit anim natu",
                    "type": "post_test",
                    "created_at": "2022-04-12T11:40:18.000000Z",
                    "updated_at": "2022-04-12T11:40:18.000000Z",
                    "deleted_at": null
                },
                {
                    "id": 6,
                    "id_topic": 1,
                    "question": "Molestias iste vel a.",
                    "answer_1": "Nostrud consequat L",
                    "answer_2": "Fugiat eu et beatae",
                    "answer_3": "Enim commodo dolore",
                    "answer_4": "Dolore quas qui qui",
                    "key": "answer_1",
                    "explanation": "Sed reprehenderit d",
                    "type": "post_test",
                    "created_at": "2022-04-12T11:40:22.000000Z",
                    "updated_at": "2022-04-12T11:40:22.000000Z",
                    "deleted_at": null
                }
            ]
        }
        ))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('render halaman question', async () => {
    render(
        <BrowserRouter>
            <Question />
        </BrowserRouter>
    )

    await waitFor(() => screen.getByRole('heading'))

    await expect(screen.getByText('Blanditiis est ut co.')).toBeInTheDocument()
})
