//Initial references
const movieNameRef = document.getElementById("movie-name");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");
const key = "45bea0cd";

//Function to get data from API
const getMovies = () => {
  const movieName = movieNameRef.value;
// Now you can use this URL to fetch data from the OMDb API

  // const url = `http:/`;
  const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;


  // if input field is empty
  if (movieName.length <= 0) {
      result.innerHTML = `<h3 class="msg">Please Enter Movie Name Here</h3>`
  }

  // if input field is filled with keyword
  else {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      //if movie exists in database
      if(data.Response == "True"){
      console.log(data);
      result.innerHTML = `
        <div class = "info">
         <img src = ${data.Poster} class = "poster">
         <div>
           <h2>${data.Title}</h2>
           <div class = "rating">
             <img src ="star-svgrepo-com.svg">
             <h3>${data.imdbRating}</h3>
          </div>
          <div class = "details">
            <span>${data.Rated}</span>
            <span>${data.Year}</span>
            <span>${data.Runtime}</span>
                      
         </div>
         <div class = "genre">
         <div>${data.Genre.split(",").join("</div><div>")}</div>
         </div>
         </div>
         </div>

    <h4>Plot:</h4>
    <p>${data.Plot}</p>
    <h4>Cast:</h4>
    <p>${data.Actors}</p>
    <h4>App developer:</h4>
    <p>Rashid Rafi</p>
   
       
        `;  }
        //if movie not exists in database
        else{
          result.innerHTML = `<h3 class = 'msg'>${data.Error}</h3>`
        }
    })
    //if error occurs
    .catch(()=>{
      result.innerHTML =  `<h3 class = 'msg'>Error occured</h3>`
    })
}
};
searchBtn.addEventListener("click", getMovies)
window.addEventListener("load", getMovies);
