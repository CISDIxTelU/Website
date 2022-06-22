import { render, screen, waitFor } from "@testing-library/react"
import LandingPage from '.'
import '@testing-library/jest-dom'
import CardLanding from "../../components/CardLanding";
import { BrowserRouter } from "react-router-dom";

test('render landing page', async () => {
    render(
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>
    );
    // eslint-disable-next-line testing-library/prefer-find-by
    await waitFor(() => screen.getByRole('heading'));
    expect(screen.getByRole('heading')).toHaveTextContent('Ayo Belajar Bersama di Health Learning Platform!');
})

test('render card landing page', async () => {
    render(<CardLanding />);

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => expect(screen.getByText('3. Pendampingan Kelompok Rentan untuk Vaksinasi COVID-19')).toBeInTheDocument())
})

test('function landing page', () => {
    // const event = {target: {id: 5, title: '1. Peduli dan Kompak Lawan COVID-19 melalui Protokol Kesehatan 3M dan Vaksinasi'}}
    render(
    <BrowserRouter>
        <LandingPage />
    </BrowserRouter>
    )
    const fetchData = jest.spyOn(LandingPage.instance(), 'fetchData')

    expect(fetchData).toBeCalled()
})