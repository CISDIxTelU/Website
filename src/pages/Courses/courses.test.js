import { render, screen } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Courses from ".";

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

describe('courses page', () => { 
    jest.mock('axios')
    test('render courses page', async () => {
        const {getByText} = render(
            <BrowserRouter>
                <Courses />
            </BrowserRouter>
        )
    
        // eslint-disable-next-line testing-library/await-async-utils
        expect(screen.getByText('Selamat datang di Health Learning Platform. Mau belajar apa kali ini?')).toBeInTheDocument();
    })
    
    test('render card courses page', async () => {
        jest.spyOn(axios, 'get').mockResolvedValue({
            data: {
                data: dummyLanding
            }
        })

        const {getByText} = render(
            <BrowserRouter>
                <Courses />
            </BrowserRouter>
        )
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText("Amet Nam porro veli")).toBeInTheDocument();
    })
 })