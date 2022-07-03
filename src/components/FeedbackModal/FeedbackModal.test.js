// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import FeedbackModal from '.'
import userEvent from '@testing-library/user-event'
// the component to test

const server = setupServer(
    rest.post('https://cisdi.mfaiztriputra.id/api/feedback/1', (req, res, ctx) => {
        return res(ctx.json({
            data: {
                status: "success",
                message: 'success add feedback'
            }
        }
        ))
    }),
    rest.post('https://cisdi.mfaiztriputra.id/api/rating/1', (req, res, ctx) => {
        return res(ctx.json({
            data: {
                status: "success",
                message: 'success add rating'
            }
        }
        ))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('render detail halaman materi', async () => {
    render(
        <BrowserRouter>
            <FeedbackModal handleClose={() => false} open={true} id={1} />
        </BrowserRouter>
    )


    await expect(screen.getByText('Feedback')).toBeInTheDocument()
    const inputEl = screen.getByTestId("feedback-input");
    userEvent.type(inputEl, "testing 123");
    fireEvent.click(screen.getByText('Kirim'))
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
})

test('if error feedback', async () => {
    render(
        <BrowserRouter>
            <FeedbackModal handleClose={() => false} open={true} id={1} />
        </BrowserRouter>
    )
    await fireEvent.click(screen.getByText('Kirim'))  
    await waitFor(screen.getByRole('button'))
})