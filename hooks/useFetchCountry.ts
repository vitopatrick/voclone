import { useState, useEffect } from "react";

export function useCountry() {
  const [countries, setCountries] = useState([]);
  const [disable, setDisable] = useState(true);

  const fetchCountry = async () => {
    try {
      const apiCall = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const response = await apiCall.json();
      const countriesAndCities = response.data;

      const countries = countriesAndCities.map((country: any) => {
        return {
          country: country.country,
        };
      });

      countries.push({ country: "Tajikistan" });

      setCountries(countries);
      setDisable(false);
    } catch (error) {
      console.log(error);
      setDisable(true);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return {
    countries,
    disable,
  };
}
