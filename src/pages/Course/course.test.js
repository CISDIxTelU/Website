import { fireEvent, render, screen, waitForElement } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Course from ".";

const dummyLanding = 
    {
        "id": 1,
        "id_lo": 1,
        "name": "awdawd",
        "video_url": null,
        "video_duration": null,
        "lesson_text": "<p>awdawd<br></p>",
        "lesson_attachment": null,
        "created_at": "2022-04-02T07:38:10.000000Z",
        "updated_at": "2022-04-02T07:38:10.000000Z",
        "deleted_at": null
    }

describe('course detail page', () => {
    jest.mock('axios')
    test('button course page', async () => {
        render(
            <BrowserRouter>
                <Course />
            </BrowserRouter>
        )
        fireEvent.click(
            screen.queryByRole('button', { name: 'Tandakan Selesai & Lanjut Materi' })
        )

        // eslint-disable-next-line testing-library/await-async-utils
        await expect(screen.getAllByTestId('button')).toBeTruthy();
    })

    test('render course page', async () => {
        jest.spyOn(axios, 'get').mockResolvedValue({
            data: {
                data: dummyLanding
            }
        })

        const { getByTestId } = render(
            <BrowserRouter>
                <Course />
            </BrowserRouter>
        )

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const listNode = await waitForElement(() => getByTestId('course'));
        expect(listNode.children).toHaveLength(2);
    })
})