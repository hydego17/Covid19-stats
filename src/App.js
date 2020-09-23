import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import covidImg from "./images/virus.svg";
import image from "./images/image1.jpg";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    //set the state
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img className={styles.covid} src={covidImg} alt="covid-19" />
          <h1> COVID-19</h1>
        </div>

        <div className={styles.desc}>Current data:</div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />

        <div>
          <span>
            {" "}
            Sourced from:{" "}
            <a href="https://covid19.mathdro.id/api" target="_blank">
              https://covid19.mathdro.id/api
            </a>
          </span>
        </div>
        {/* <img className={styles.img} src={image}></img> */}
      </div>
    );
  }
}

export default App;
