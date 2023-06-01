import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';

// Como hacer un mock de toda una libreria 
// pero solo tomando usenavigate()
const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom',  () => ({
        ...jest.requireActual('react-router-dom'), // Esparce toda la libreria
        useNavigate: () => mockedUseNavigate // pero solo vamos a sobreescriibir el useNavigate

    })
);


describe('Testing <NavBar />', () => {


    const mockLogout = jest.fn();
    const mockContextValue = {
        logged: true,
        user: {
            name: 'Javier Saez'
        },
        logout: mockLogout,
    };

    beforeEach(() => jest.clearAllMocks());

    test('should display the name of the user', () => {

        render(
            <MemoryRouter>
                <AuthContext.Provider value={mockContextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // Verificar que los enlaces a las páginas estén presentes
        expect(screen.getByText('Marvel')).toBeTruthy();
        expect(screen.getByText('DC')).toBeTruthy();
        expect(screen.getByText('Search')).toBeTruthy();
        // Verificar que el nombre del usuario esté presente
        expect(screen.getByText('Javier Saez')).toBeTruthy();


    });
    test('should call the logout function and navigate when make click on button', () => {


        render(

            <AuthContext.Provider value={mockContextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>

        );

        // Verificar que el botón de logout esté presente y simular su click
        // screen.debug();
        const logoutButton = screen.getByRole('button');
        fireEvent.click(logoutButton);
        expect(mockLogout).toHaveBeenCalled();       
        expect(mockLogout).toHaveBeenCalledTimes(1);

        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { 'replace': true });
        





    });
});