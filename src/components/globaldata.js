import React, { useState, useEffect } from "react";
import {
  getGlobalData,
  getEffectedCountries,
  getCasesByCountry,
} from "../services/globalService";
import Cards from "../components/subpages/cards";
import CountriesSelect from "../components/subpages/countriesSelect";

const GlobalData = () => {
  const [globData, setGlobData] = useState({});
  const [effectedCountries, setEffectedCountries] = useState([]);
  const [searchParam, setSearchParam] = useState({
    keyword: "",
  });
  const [data, setData] = useState({});

  //Tptol cases by world wide
  useEffect(() => {
    const getUniverseData = async () => {
      const gbData = await getGlobalData();
      setGlobData(gbData);
    };

    getUniverseData();
  }, []);

  //Effected Countries
  useEffect(() => {
    const getDatabyCountries = async () => {
      const dtByCountries = await getEffectedCountries();
      setEffectedCountries(dtByCountries);
    };

    getDatabyCountries();
  }, []);

  const changeCountry = async (country) => {
    searchParam.keyword = country;
    setSearchParam(searchParam);
    const getDta = await getCasesByCountry(searchParam);
    setData(getDta);
  };

  return (
    <React.Fragment>
      <CountriesSelect
        effectCountrys={effectedCountries}
        changeCountry={changeCountry}
        getDataCOuntry={data}
      />
      <Cards totalInfo={globData} getDataCOuntry={data} />
    </React.Fragment>
  );
};

export default GlobalData;
