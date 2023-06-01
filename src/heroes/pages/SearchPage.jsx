import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'; // libreria para parsear la query string yarn add query-string

import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"

import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  
  const navigate = useNavigate(); // Para obtener la navegacion de react-router-dom
  
  const location = useLocation(); // Para obtener la informacion de la url donde nos encontramos

  // con libreria 'yarn add query-string'
  const { q = '' } =  queryString.parse( location.search );

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);  
  const showError = (q.length !== 0) && (heroes.length === 0);

  const { searchText, onInputChange } = useForm({
    searchText: ''
  }); 


  const onSearchSubmit = (event) => {

    event.preventDefault();

    // if( searchText.trim().length <= 1 ) return;
    
    navigate(`?q=${ searchText }`);
  }  

  return (
    <>
      <h1 className="mt-3" >Search Page</h1>
      <div className="row gap-1">
        <div className="col-md-4" >
          <h4>Searching</h4>
          <hr />
          <form onSubmit = { onSearchSubmit } aria-label="form" >
            <input
              type="text"
              className="form-control"
              placeholder="Search a hero..."
              name="searchText"
              autoComplete="off"              
              onChange = { onInputChange }
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-2"
            >
              Search
            </button>
          </form>

        </div>
        <div className="col-md-7" style={{borderLeft: '1px solid #d9dad8'}}>
          <h4>Results</h4>
          <hr />
          {
            (q === '') 
               ? <div className="alert alert-primary animate__animated animate__fadeIn"> Search a hero </div> 
               : (heroes.length === 0) && <div aria-label="alert-dangerous" className="alert alert-danger animate__animated animate__fadeIn">No hero with <b>{ q }</b></div>            
          }
          
          {
            heroes.map( hero => (
              <HeroCard 
                key={ hero.id }
                { ...hero }
                />
            ))
          }
          
        </div>
      </div>
    </>
  )
}
