import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import Login from ".";
import userEvent from "@testing-library/user-event";
import axios from "axios";

jest.mock('axios')

test('render login page', async () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    // eslint-disable-next-line testing-library/prefer-find-by
    await expect(screen.getByTestId('username-input')).toBeInTheDocument();
    await expect(screen.getByTestId('password-input')).toBeInTheDocument();
    await expect(screen.getByText('created with ♥️ by ZDF.')).toBeInTheDocument();
})

describe('login page', () => {

    test('loading login', async () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        fireEvent.click(
            screen.queryByRole('button', { name: 'Masuk' })
        )

        await expect(screen.getAllByTestId('loading')).toBeTruthy();
    })

    test('submit login', async () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        const usernameInput = screen.getByTestId('username-input')
        userEvent.type(usernameInput, 'kader');
        const passwordInput = screen.getByTestId('password-input')
        userEvent.type(passwordInput, 'passwor');
        const loginButton = screen.getByRole('button', { name: /Masuk/i });
        userEvent.click(loginButton)

        userEvent.click(screen.getByRole('button', {}))
    })

    test('function button login', async () => {
        axios.post.mockResolvedValue({ data: { status: 'success' } });
    })
})