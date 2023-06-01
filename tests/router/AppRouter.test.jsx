import { render, screen } from "@testing-library/react";
import { AppRouter } from "../../src/router/AppRouter";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";

describe('Testing <AppRouter />', () => {

    test('should display login if I am not logged', () => {

        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        // screen.debug();
        expect(screen.getAllByText('Login').length).toBe(2);

    });

    test('should display the marvel component if I am logged', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Javier Sáez'
            }
        }
        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // screen.debug();
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);

    });

});