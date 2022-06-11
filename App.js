import { Container, Row, Col, Button } from "reactstrap";
import React, { Component } from "react";
import Celcius from "./Celcius"
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";

class App extends Component {

  sicaklikArttir = () => {
    let sicaklikCelcius = this.state.currentSicaklikCelcius
    sicaklikCelcius += 1
    let sicaklikFahrenheit = (sicaklikCelcius * 1.8) + 32
    let sicaklikKelvin = sicaklikCelcius + 273.15
    this.setState({
      currentSicaklikCelcius: sicaklikCelcius,
      currentSicaklikFahrenheit: sicaklikFahrenheit,
      currentSicaklikKelvin: sicaklikKelvin
    })
  }
  sicaklikAzalt = () => {
    let sicaklikCelcius = this.state.currentSicaklikCelcius
    sicaklikCelcius -= 1
    let sicaklikFahrenheit = (sicaklikCelcius * 1.8) + 32
    let sicaklikKelvin = sicaklikCelcius + 273.15
    this.setState({
      currentSicaklikCelcius: sicaklikCelcius,
      currentSicaklikFahrenheit: sicaklikFahrenheit,
      currentSicaklikKelvin: sicaklikKelvin
    })
  }

  state = {
    currentSicaklikCelcius: 0,
    currentSicaklikFahrenheit: 32,
    currentSicaklikKelvin: 273.15
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1>Hava Nasıl</h1>
            <h3>Şu an sıcaklık {this.state.currentSicaklikCelcius} derece.</h3>
            <Col xs="4">
               <Button onClick={() => this.sicaklikArttir()}>Sıcaklık Arttır</Button>
            <h3>3 Birimde Sıcaklık Ölçümü</h3>
            </Col>
            <Col xs="4">
            <Button onClick={() => this.sicaklikAzalt()}>Sıcaklık Azalt</Button>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <Celcius currentSicaklik={this.state.currentSicaklikCelcius}></Celcius>
            </Col>
            <Col xs="4">
              <Fahrenheit currentSicaklik={this.state.currentSicaklikFahrenheit}></Fahrenheit>
            </Col>
            <Col xs="4">
              <Kelvin currentSicaklik={this.state.currentSicaklikKelvin}></Kelvin>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
