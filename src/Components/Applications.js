import React from 'react'
import { Card } from 'react-bootstrap'
import img1 from '../imgs/bakery.jpg'
import img2 from '../imgs/confectionery.jpg'
import img3 from '../imgs/dairy.jpg'
import img4 from '../imgs/savory.jpg'
import img5 from '../imgs/beverages.jpg'
import img6 from '../imgs/pharma.jpg'
import img7 from '../imgs/oral-care.jpg'

export const Applications = () => {
    return (
        <>
            <div id='applications' className='applications'>
                <div className='heading-text mb-5'>
                    <h2>Discover</h2>
                    <h3>Flavour Applications</h3>
                    <div><i class="fas fa-asterisk"></i></div>
                </div>
                
                <div className='row mb-5'>
                    <div className='col'>
                        <Card style={{ width: '18rem', margin: 'auto', height: '100%' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Bakery</Card.Title>
                                <Card.Text>
                                    Range of flavours for all types of bakery products right from Vanilla to Chocolates.
                                    Also, fat replacers to assist our clients to create niche and deliver great tasting products for the consumers.
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card style={{ width: '18rem', margin: 'auto', height: '100%' }}>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Confectionery</Card.Title>
                                <Card.Text>
                                    Flavours for Hard Boiled Candies, Eclairs, Toffees, Gums, Soft Chews & Chocolates at most competetive price.<br/><br/><br/>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card style={{ width: '18rem', margin: 'auto', height: '100%' }}>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Dairy</Card.Title>
                                <Card.Text>
                                    Flavours for classic Vanilla to rich & cremier Chocolate, Strawberry & ethnic flavours for Milk, Yoghurt & Ice Cream.
                                    Unique taste modulators for Cheese and Butter, along with fat replacers.
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card style={{ width: '18rem', margin: 'auto', height: '100%' }}>
                            <Card.Img variant="top" src={img4} />
                            <Card.Body>
                                <Card.Title>Savory</Card.Title>
                                <Card.Text>
                                    Top notes for seasoning applications in the products like extruded snacks, chips, noodles, pasta & Indian snack items.
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col'><Card style={{ width: '18rem', margin: 'auto', height: '100%' }}>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>Alcoholic & Non Alcoholic Beverages</Card.Title>
                            <Card.Text>
                                Complete flavouring solutions from Citrus to Exotic Fruits to Berries for juices, health beverages & alcoholic beverages.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card></div>
                    <div className='col'><Card style={{ width: '18rem', margin: 'auto', height: '100%' }}>
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                            <Card.Title>Pharmaceuticals</Card.Title>
                            <Card.Text>
                                Flavours & Bitterness masking agents to mask the unpleasent notes of pharma ingredients for compressed tablets & syrups.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card></div>
                    <div className='col'><Card style={{ width: '18rem', margin: 'auto', height: '100%' }}>
                        <Card.Img variant="top" src={img7} />
                        <Card.Body>
                            <Card.Title>Oral Care</Card.Title>
                            <Card.Text>
                                Customized flavouring solutions for functional & traditional categories, specially designed with our expertise & understanding of local taste. 
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card></div>
                </div>
            </div>
        </>
    )
}
