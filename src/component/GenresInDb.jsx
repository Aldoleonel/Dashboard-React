export const GenresInDb = () => {
  const genres = [
    "Acción",
    "Animación",
    "Aventuras",
    "Ciencia Ficción",
    "Comedia",
    "Documental",
    "Drama",
    "Fantasía",
    "infantiles",
    "Musical",
  ];
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {genres && genres.map((genres, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">{genres}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
