import { HeroList } from "../components"


export const MarvelPage = () => {
  return (
    <>
      <br />
      <div className="row">
        <div className="col-12">
          <h1><img src="../assets/logos/marvel-logo.png" className="img-fluid" style={{ width: '100px', paddingBottom: '5px' }} alt="marvel" /> Comics</h1>
        </div>
      </div>

      <hr />
      <HeroList publisher='Marvel Comics' />
    </>
  )
}
