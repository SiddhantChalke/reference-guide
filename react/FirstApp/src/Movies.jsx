import React from 'react'
import data from './data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Movies = () => {
    return (
        <>
            <div className="container">
                <h1 className='text-center'>Top 3 Books</h1>
                <div className="row">
                    {
                        data.map((movie, i) => {
                            return (
                                <div className="col-md-4">
                                    <Card style={{ width: '18rem' }} className='text-center'>
                                        <Card.Img variant="top" src={movie.cover} height='275' />
                                        <Card.Body>
                                            <Card.Title>{movie.title}</Card.Title>
                                            <Card.Subtitle>{movie.writer}</Card.Subtitle>
                                            <Card.Text>{movie.year}</Card.Text>
                                            <Card.Text>{movie.rating}
                                            </Card.Text>
                                            <a href={movie.url} className='btn text-primary-emphasis bg-primary-subtle border border-primary-subtle' target='_blank' rel='noreferrer'>Read Now!</a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Movies