import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { pageTransition, pageVariants } from './animations/animations';
import { motion, AnimatePresence } from 'framer-motion';
import { RepoTable } from './table/RepoTable'

export const Repo = (props) => {


    return (
        <>
            <Container fluid>
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Row className="justify-content-center">
                        <Col lg={8} className="p-0">
                            <div id="workGrid">
                                <h1>Latest Github Repos</h1>
                                <hr style={{ border: '1px solid black' }}
                                    initial={{ width: 0, marginRight: '100%' }} />
                                <RepoTable repos={props.repos} />
                            </div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </>
    )
}