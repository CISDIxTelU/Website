import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import LandingPage from '.';
// import CardLanding from "../../components/CardLanding";

jest.mock('axios')

const dummyLanding = [
    {
        "author": "Inventore libero est",
        "certificate": null,
        "count_lesson": 1,
        "cover_image": "topics/Q4cY6k0NQHQy5AMizmN0pHbHLrjK1ZqUOwviRbnU.jpg",
        "created_at": "2022-06-17T15:08:46.000000Z",
        "deleted_at": null,
        "description": "Impedit sed qui cum",
        "id": 1,
        "short_description": "Ea quasi culpa nulla",
        "title": "Amet Nam porro veli",
        "updated_at": "2022-06-17T15:08:46.000000Z",
    },
    {
        "author": "Magnam est possimus",
        "certificate": null,
        "count_lesson": 0,
        "cover_image": "topics/WYMovXvlJD6eSyvDm2vb68g715RPzbRt23IlBmRA.jpg",
        "created_at": "2022-06-17T15:10:35.000000Z",
        "deleted_at": null,
        "description": "Voluptatem eiusmod",
        "id": 2,
        "short_description": "Id libero voluptate",
        "title": "Voluptatem omnis re",
        "updated_at": "2022-06-17T15:10:35.000000Z",
    },
    {
        "author": "Necessitatibus volup",
        "certificate": null,
        "count_lesson": 0,
        "cover_image": "topics/uYsEFHXLUfIOMz7oK7VzvkHSzdZKTt9yx7u4In8A.jpg",
        "created_at": "2022-06-17T15:11:59.000000Z",
        "deleted_at": null,
        "description": "Distinctio Pariatur",
        "id": 3,
        "short_description": "Consequatur accusant",
        "title": "Nesciunt asperiores",
        "updated_at": "2022-06-17T15:11:59.000000Z",
    },
]

test('render landing page', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({data: {data: dummyLanding}})
    render(
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>
    );
    // eslint-disable-next-line testing-library/prefer-find-by
    await waitFor(() => screen.getByRole('heading'));
    expect(await screen.findByText('Ayo Belajar Bersama di Health Learning Platform!')).toBeInTheDocument();
})

// test('render card landing page', async () => {
//     render(<CardLanding />);

//     // eslint-disable-next-line testing-library/await-async-utils
//     waitFor(() => expect(screen.getByText('Amet Nam porro veli')).toBeInTheDocument())
// })

test("landing page list", async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({data: {data: dummyLanding}})
    render(
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>
    );

    expect(await screen.findByText('Nesciunt asperiores')).toBeInTheDocument();
})