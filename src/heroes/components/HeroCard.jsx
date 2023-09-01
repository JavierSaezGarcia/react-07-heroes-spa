import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `../../assets/${id}.jpg`;
    const CharactersByHero = ({alter_ego, characters}) => {

        // if(alter_ego === characters) return (<></>);
        // return <p>{characters}</p>
        return (alter_ego === characters)
            ? <></>
            : <p>{characters}</p>
    }

    return (
        <>
        
       

            <div className="col animate__animated animate__fadeIn">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={heroImageUrl} className="card-img" alt={superhero} />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title"> { superhero }</h5>
                                <p className="card-text"><strong>{publisher}</strong></p>                                
                                <p className="card-text">{alter_ego}</p>                                
                                <cite>
                                    {/* { 
                                    (alter_ego !== characters) && charactersByHero 
                                    } */}
                                    <CharactersByHero alter_ego={alter_ego} characters={characters} />
                                </cite>
                                <p className="card-text">
                                    <small className="text-muted">
                                        {first_appearance}
                                    </small>
                                </p>
                                <Link to={`/hero/${id}`}>
                                    Más...                      
                                </Link>
                                
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>


    )
}
