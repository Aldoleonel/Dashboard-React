import { Card, CardBody, Table } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { TableItem } from "../component/TableItem";
import { useEffect, useState } from "react";
import { Loading } from "../component/Loading";

export const ListMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ pages: [],currentPage: 1  });

  const getMovies = async (endpoint = "/api/v1/movies") => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001${endpoint}`);
      const result = await response.json();
      setLoading(false);
      setMovies(result.data);
      setPagination(result.meta);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);


  const handlePagination = async (endpoint) => {
    getMovies(endpoint);
  };
  const handlePrevPage = () => {
    if (pagination.currentPage > 1) {
      handlePagination(`/api/v1/movies?page=${pagination.currentPage - 1}`);
    }
  };

  const handleNextPage = () => {
    if (pagination.currentPage < pagination.pagesCount) {
      handlePagination(`/api/v1/movies?page=${pagination.currentPage + 1}`);
    }
  };

  return (
    <Card className="shadow-lg bg-dark " style={{ width: "640px" }}>
      <CardBody>
        <Pagination>
          <Pagination.Prev onClick={handlePrevPage}/>

          {pagination.pages.map((paginate) => (
            <Pagination.Item
              key={paginate.number}
              active={paginate.number === pagination.currentPage}
              activeLabel=""
              onClick={() => handlePagination(paginate.url)}
            >
              {paginate.number}
            </Pagination.Item>
          ))}

          <Pagination.Next onClick={handleNextPage}/>
        </Pagination>
        {loading ? (
          <Loading />
        ) : (
          <Table striped borderless className="text-white">
            <thead>
              <tr>
                <th>Título </th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Géneros</th>
                <th>Premios</th>
              </tr>
            </thead>
            <tbody>
              {movies.map(({ id, title, length, awards, rating, genre }) => (
                <TableItem
                  key={id}
                  title={title}
                  length={length}
                  awards={awards}
                  rating={rating}
                  genre={genre}
                />
              ))}
            </tbody>
          </Table>
        )}
      </CardBody>
    </Card>
  );
};
