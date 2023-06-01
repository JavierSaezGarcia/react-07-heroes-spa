import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { AuthContext } from "../../../src/auth";
import { HeroesRoutes } from "../../../src/heroes";



describe('Testing in <HeroesRoutes />', () => {

    test('should display DC comics page', () => {
       
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
                <MemoryRouter initialEntries={['/dc']}>                    
                    <HeroesRoutes />                    
                </MemoryRouter>
            </AuthContext.Provider>
        );
        // screen.debug();
        expect(screen.getAllByText('DC Comics').length).toBeGreaterThanOrEqual(1);
        
    });

    test('should display marvel comics page', () => {
        

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
                    <HeroesRoutes />                    
                </MemoryRouter>
            </AuthContext.Provider>
        );
        //screen.debug();
       
        expect(screen.getAllByText('Marvel Comics').length).toBeGreaterThanOrEqual(1);
        
    });
    
});