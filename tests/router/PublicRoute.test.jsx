
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Testing in <PublicRoute />', () => {

    test('should display children if not logged in', () => {
        // Simulate a not logged in scenario
        const contextValue = {
            logged: false
        };

        // Render the component with the provided context
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );
        // screen.debug();
        expect(screen.getByText('Ruta pública')).toBeTruthy();

    });
    ///////////////////////////////////////

    test('should navigate to /marvel if logged in', () => {
        // Simulate a logged in scenario
        const contextValue = {
            logged: true,
            user: {
                name: 'Javier',
                id: 'ABC123'
            }
        };

        // Render the component with the provided context
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta pública</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={<h1>Página Marvel</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );
        screen.debug();       
        expect(screen.getByText('Página Marvel')).toBeTruthy();
        


    });

});