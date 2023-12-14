import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes ,Link } from "react-router-dom";
import List from "./list";
import MovieAddModal from "./addmovie";
import MovieDetails from "./moviedet";

const App = () => {
  const initialMovies = [
    {
      id: 1,
      image:
        "https://i.inews.co.uk/content/uploads/2020/04/money-heist-first-impression-1200-640x360.jpg",
      rating: 4,
      name: "la casa del papel",
      date: "1976",
      type: "Crime | Drama",
      seasons: "2 seasons",
      description:
        "A mentally unstable driver in Ned sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.",
      trailerLink:
        "https://www.youtube.com/embed/_InqQJRqGW4?si=p9lgt69Z-PM61Xft",
    },
    {
      id: 2,
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/papillon-2017-charlie-hunnam-y-rami-malek-1548866422.jpg",
      rating: 1,
      name: "Papillon",
      date: "2006",
      type: "Comedy | Drama",
      seasons: "4 seasons",
      description:
        "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
      trailerLink:
        "https://www.youtube.com/embed/xqj7XOv9mC8?si=xnzYxqqDCRIq46to",
    },
    {
      id: 3,
      image:
        "https://thebishopstower.com/wp-content/uploads/2021/02/queens-gambit.jpg",
      rating: 3,
      name: "queen's gambit",
      date: "2006",
      type: "Comedy | Drama",
      seasons: "4 seasons",
      description:
        "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
      trailerLink:
        "https://www.youtube.com/embed/oZn3qSgmLqI?si=F5PpbVsiVxuM-rxu",
    },
    {
      id: 4,
      image:
        "https://s4844.pcdn.co/wp-content/uploads/2014/11/interstellar-photos-pictures-stills.jpg",
      rating: 4,
      name: "interstellar",
      date: "1979",
      type: "Action | Adventure",
      seasons: "5 seasons",
      description:
        "In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.",
      trailerLink:
        "https://www.youtube.com/embed/zSWdZVtXT7E?si=GSELfYnsu9OZ-TR8",
    },
    {
      id: 5,
      image:
        "https://customonesixth.com/attachments/kakaotalk_20210601_001650757_01-jpg.434178/",
      rating: 3,
      name: "django",
      date: "2006",
      type: "Comedy | Drama",
      seasons: "4 seasons",
      description:
        "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
      trailerLink:
        "https://www.youtube.com/embed/zSWdZVtXT7E?si=GSELfYnsu9OZ-TR8",
    },
    {
      id: 6,
      image:
        "https://i.inews.co.uk/content/uploads/2020/04/money-heist-first-impression-1200-640x360.jpg",
      rating: 4,
      name: "la casa del papel",
      date: "1979",
      type: "Action | Adventure",
      seasons: "5 seasons",
      description:
        "In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.",
      trailerLink:
        "https://www.youtube.com/embed/0fUCuvNlOCg?si=NKGDBTzDVPKAXlke",
    },
    {
      id: 7,
      image:
        "https://cdn1.ntv.com.tr/gorsel/mWUBO2O0gESc9db9rQHfJw.jpg?width=1000&mode=crop&scale=both",
      rating: 5,
      name: "django",
      date: "2003",
      type: "Action",
      seasons: "2 seasons",
      description:
        "The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.'The Bride' decided to escape her life as a killer.",
      details:
        "https://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl",
      trailerLink:
        "https://www.youtube.com/embed/0fUCuvNlOCg?si=NKGDBTzDVPKAXlke",
    },
  ];

  const [movies, setMovies] = useState(initialMovies);

  

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<List movies={movies} />} />
        <Route
          path="/movie/:id"
          element={<MovieDetails initialMovies={initialMovies} />}
        />

        <Route
          path="/add"
          element={
            <MovieAddModal
              addMovie={addMovie}
            />
          }
        />
      </Routes>
      <div>
        <Link to ={"/add"}>
        <button>Add movie</button>
        </Link>
      </div>
    </Router>
  );
};

export default App;
