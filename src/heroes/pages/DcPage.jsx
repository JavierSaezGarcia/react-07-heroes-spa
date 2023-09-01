import { HeroList } from "../components"

export const DcPage = () => {
  return (
    <>
      <br />      
      <h1><img src='/images/logos/dc-comics-logo.png' className="img-fluid" style={{width: '50px', paddingBottom: '5px'}} alt="dc-comics" /> Comics</h1>
      <hr />
      <HeroList publisher='DC Comics'/>
    </>
  )
}
