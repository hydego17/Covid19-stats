import React, { useState, useEffect } from "react";
import { NativeSelect, Select, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <>
      <div className={styles.label}>
        <span>Show data from: </span>
      </div>

      <FormControl variant="outlined" className={styles.formControl}>
        <Select
          native
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option className={styles.option} value="">
            Global
          </option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default CountryPicker;
