import React from "react";

import { Container, Row, Col, Card, CardTitle, CardText } from "reactstrap";

const Cards = ({ totalInfo, getDataCOuntry }) => {
  const cData = getDataCOuntry.latest_stat_by_country;
  console.log("cData", cData);
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs="12" sm="3">
            <Card body inverse color="info">
              <CardTitle>
                <h5>Total Cases</h5>
              </CardTitle>
              <CardText style={{ fontWeight: "bold" }}>
                {cData ? cData[0].total_cases : totalInfo.total_cases}
              </CardText>
            </Card>
          </Col>

          <Col xs="12" sm="3">
            <Card
              body
              inverse
              style={{ backgroundColor: "#333", borderColor: "#333" }}
            >
              <CardTitle>
                <h5>Total Deaths</h5>
              </CardTitle>
              <CardText style={{ fontWeight: "bold" }}>
                {cData ? cData[0].total_deaths : totalInfo.total_deaths}
              </CardText>
            </Card>
          </Col>

          <Col xs="12" sm="3">
            <Card body inverse color="success">
              <CardTitle>
                <h5>Total Recovered</h5>
              </CardTitle>
              <CardText style={{ fontWeight: "bold" }}>
                {cData ? cData[0].total_recovered : totalInfo.total_recovered}
              </CardText>
            </Card>
          </Col>

          <Col xs="12" sm="3">
            <Card body inverse color="danger">
              <CardTitle>
                <h5>Acive Cases</h5>
              </CardTitle>
              <CardText style={{ fontWeight: "bold" }}>
                {cData ? cData[0].active_cases : totalInfo.active_cases}
              </CardText>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <h5 style={{ fontWeight: "bold", marginLeft: "15px" }}>
            New Deaths :{" "}
            <span style={{ color: "red" }}>
              {cData ? cData[0].new_deaths : totalInfo.new_deaths}
            </span>
          </h5>
          <h5 style={{ fontWeight: "bold", marginLeft: "15px" }}>
            Serious Critical:{" "}
            <span style={{ color: "red" }}>
              {cData ? cData[0].serious_critical : totalInfo.serious_critical}
            </span>
          </h5>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Cards;
