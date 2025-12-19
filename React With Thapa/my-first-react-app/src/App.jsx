export const App = () => {
  return (
    <>
      <Temp />
      <Temp />
      <Temp />
      <Temp />
      <Temp />
    </>
  );
};


const Temp = ()=>{
  const naam = "Shobhit Chauhan JI";
  const Rating = 8.5;
  const Summary = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde officiis vel perspiciatis error dolore cumque quo soluta corrupti aliquam nemo!";
  const test = ()=>{
    return "hello";
  }
  return(
    <div>
      <img src="images/krishna.jpg" alt="God Krishna image" width="400px" height="250" />
        <h2>Name : {naam}</h2>
        <h2>Rating : {Rating} {test()}</h2>
        <p>Summary : {Summary}</p>
    </div>
  );
}