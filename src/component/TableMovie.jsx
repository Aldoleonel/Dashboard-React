import { Card, CardBody, Table } from "react-bootstrap";
import { TableItem } from "./TableItem";

export const TableMovie = () => {
  
    const movies = [
        {
            id: crypto.randomUUID(),
            title: "Rambo",
           length: 120 ,
            rating: 9,
            genres: ['acción','bélico'],
            awards: 8,    
        }, 
        {
            id: crypto.randomUUID(),
            title: "LOTR",
           length: 240,
            rating: 10,
            genres: ['Acción','Aventura'],
            awards: 70,    
        },
        {
            id: crypto.randomUUID(),
            title: "Batman",
           length: 130,
            rating: 9,
            genres: ['Acción','Drama'],
            awards: 70,    
        },
        {
            id: crypto.randomUUID(),
            title: "Sin genero",
           length: 100,
            rating: 1,
            genres: null,
            awards: 0,    
        }
    ]
  
  
  
    return (
    <Card className="shadow-lg bg-dark ">
      <CardBody>
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
          
          {
            movies.map(({id, title,length,awards,rating,genres}) => <TableItem key={id} title={title} length={length} awards={awards} rating={rating} genres={genres} />)
          }
           
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};
