import {screen, cleanup, render} from '@testing-library/react'
import LandingPage from '../pages/LandingPage';

test('testing user page', () => {
    render(<LandingPage />);
    const landingComponent = screen.getByTestId('user-1')
    expect(landingComponent).toBeInTheDocument()
    expect(landingComponent).toHaveTextContent('Ayo Belajar Bersama di Health Learning Platform!')
})