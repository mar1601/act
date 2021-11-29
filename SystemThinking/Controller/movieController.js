import modelsMovies from "../Models/modelsMovies.js";

const allMovies = function (req, res){
    res =  movies.allMovies();
    return res;
};

const getMovieId = function (req, res){
    if(!req.id) throw new Error('Parametro Id no existe')
    const movie = movies.getMovieId(req.id);
    res.push(movie);
    return res;
};
const createMovie = function (req, res){
    res = movies.createMovie(req);
    return res; 
};

const deleteMovie = function(req, res){
    if(!req.id) throw new Error('Parametro  Id no existe')
    res= movies.deleteMovie(req.id);
    return res;
}

const updateMovie= function(req, res){
    if(!req.id) throw new Error('Parametro  Id no existe')
    res= movies.updateMovie(req);
    return res;
}

const yearorder = (req, res) => {
    res = movies.yearorder();
    return res;
}
const searchmovies = movie.find(year => year.movie=== 1997){
   res = movies.obj();
    return res;
}

export default{
    allMovies,
    getMovieId,
    createMovie,
    deleteMovie,
    updateMovie,
    yearorder,
    searchmovies,
}