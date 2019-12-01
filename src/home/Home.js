import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Visual from './Visual';
import About from './About';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="section" xs={4}><Visual/></Col>
                        <Col className="section" xs={6}><About/></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;