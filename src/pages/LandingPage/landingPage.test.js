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
// the component to test

const server = setupServer(
    rest.get('https://cisdi.mfaiztriputra.id/api/landing', (req, res, ctx) => {
        return res(ctx.json({
            data: [
                {
                    author: "Inventore libero est",
                    certificate: null,
                    count_lesson: 1,
                    cover_image: "topics/Q4cY6k0NQHQy5AMizmN0pHbHLrjK1ZqUOwviRbnU.jpg",
                    created_at: "2022-06-17T15:08:46.000000Z",
                    deleted_at: null,
                    description: "Impedit sed qui cum",
                    id: 1,
                    short_description: "Ea quasi culpa nulla",
                    title: "testing1",
                    updated_at: "2022-06-17T15:08:46.000000Z"
                },
                {
                    author: "Inventore libero est",
                    certificate: null,
                    count_lesson: 1,
                    cover_image: "topics/Q4cY6k0NQHQy5AMizmN0pHbHLrjK1ZqUOwviRbnU.jpg",
                    created_at: "2022-06-17T15:08:46.000000Z",
                    deleted_at: null,
                    description: "Impedit sed qui cum",
                    id: 1,
                    short_description: "Ea quasi culpa nulla",
                    title: "Amet Nam porro veli",
                    updated_at: "2022-06-17T15:08:46.000000Z"
                },
                {
                    author: "Inventore libero est",
                    certificate: null,
                    count_lesson: 1,
                    cover_image: "topics/Q4cY6k0NQHQy5AMizmN0pHbHLrjK1ZqUOwviRbnU.jpg",
                    created_at: "2022-06-17T15:08:46.000000Z",
                    deleted_at: null,
                    description: "Impedit sed qui cum",
                    id: 1,
                    short_description: "Ea quasi culpa nulla",
                    title: "Amet Nam porro veli",
                    updated_at: "2022-06-17T15:08:46.000000Z"
                },
            ]
        }
        ))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('render halaman landing page', async () => {
    render(
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>
    )

    await waitFor(() => screen.getByRole('heading'))

    expect(screen.getByRole('heading')).toHaveTextContent('Ayo Belajar Bersama di Health Learning Platform!')

    fireEvent.click(screen.getByTestId('open0'))
    fireEvent.click(screen.getByTestId('close'))
})

test('render card pada landing page', async () => {
    render(
        <CardLanding data-testid='landing-page' foto="test" judul="testing1" deskripsi="ini deskripsi" key={1} />
    )

    expect(screen.getByTestId('paragraf')).toHaveTextContent('testing1')
})

test('klik masuk', async () => {
    render(
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>
    )
    fireEvent.click(screen.getByTestId('masuk'))
})