import { fireEvent, render, screen } from "@testing-library/react";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";
import { MemoryRouter, Router, useNavigate } from "react-router-dom";

// Como hacer un mock de toda una libreria 
// pero solo tomando usenavigate()
const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom',  () => ({
        ...jest.requireActual('react-router-dom'), // Esparce toda la libreria
        useNavigate: () => mockedUseNavigate // pero solo vamos a sobreescriibir el useNavigate

    })
);


describe('Testing <SearchPage /> component', () => {

    beforeEach(() => jest.clearAllMocks() );// limpio los mocks anterioes si hubieRAN

    test('should display correctly with default props', () => { 
        // Le hacemos la fotografia, para eso igualamos el render a una constante que extraemos el container
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>           
        )
        // hacemos la fotografia y comparamos la fotografia con el snapshot
        // expect(container).toMatchSnapshot();
        // screen.debug();

    });

    test('should display batman and the input with the queryString', () => { 
        
        // Le hacemos la fotografia, para eso igualamos el render a una constante que extraemos el container
        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter> 
               
        );
        
        const input =  screen.getByRole('textbox'); // textbox no funciona
        
        input.value = 'batman';        
        
        expect( input.value ).toBe('batman');

        const img =  screen.getByRole('img');

        expect( img.src ).toContain('batman');   
       

    });

    test('Should display an error message if the search term is not a hero (batman123)', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter> 
               
        );
        const danger = screen.getByLabelText('alert-dangerous');
        const errorMessage = danger.textContent;
        expect( errorMessage ).toBeTruthy();      

        
    })
    test('Should call the navigate function to the new page', () => {

        const inputValue = 'ironman';

        render(
          <MemoryRouter initialEntries={['/search?']}>
           
              <SearchPage />
           
          </MemoryRouter>,
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: inputValue } })
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${inputValue}`);
    
    });
    
});