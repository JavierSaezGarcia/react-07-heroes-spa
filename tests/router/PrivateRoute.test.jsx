
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Testing in <PrivateRoute />', () => {

    test('should display children if logged in', () => {
        // Override prototype Storage the method setItem()
        Storage.prototype.setItem = jest.fn(); // Mock Storage.setItem()

        // Simulate a not logged in scenario
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC123',
                name: 'Javier'
            }
        };

        // Render the component with the provided context
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        //screen.debug();
        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });
    
});