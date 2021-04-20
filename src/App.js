import React, {useState, useEffect} from 'react';
import { Wrapper, Header, Main, Content, Footer } from './styled';
import { useSelector } from 'react-redux';
import { InputGroup, Input, InputGroupAddon } from 'reactstrap';
import  {
  boundGetCityInfo,
  boundGetWeatherInfo
} from './actions';
import PieChart from './component/PieChart';
import BarChart from './component/BarChart';

function App() {
  const [city, setCity] = useState('');
  const [minTemps, setMinTemps] = useState('');
  const [maxTemps, setMaxTemps] = useState('');
  const [humiditys, setHumiditys] = useState('');
  const weather = useSelector(state => state.weather);
  console.log('weather:', weather);
  console.log('humiditys:', humiditys);

  const handleSearch = () => {
    boundGetCityInfo(city);
  }

  const humidityCharts = (itemList) => {
    let pieChartList = itemList ? itemList.map((item) => {
      return (
        <div className="ownDashboards-child-dashboard w-100 d-flex justify-content-center align-items-center p-5">
          <PieChart
            numerator={item.humidity}
            denominator={100}
            colorGraph={''}
            colorFill={''}
            colorPercents={''}
            colorNumber={''}
            colorUnits={''}
          />
        </div>
      )
    }) : ''
    return pieChartList;
  }

  useEffect(() => {
    if(weather.cityInfo){
      boundGetWeatherInfo(weather.cityInfo.woeid);
    }

  }, [weather.cityInfo])

  useEffect(() => {
    let minTempList = [];
    let maxTempList = [];
    let humidityList = [];
    if(weather.weatherInfo){
      weather.weatherInfo.consolidated_weather.map((item, idx) => {
        if(idx != 0){
          minTempList.push({ temp: item.min_temp, date: item.applicable_date });
          maxTempList.push({ temp: item.max_temp, date: item.applicable_date });
          humidityList.push({ humidity: item.humidity, date: item.applicable_date });  
        }
      })
    }
    setMinTemps(minTempList);
    setMaxTemps(maxTempList);
    setHumiditys(humidityList);
  }, [weather.weatherInfo])

  return (
      <Wrapper>
        <div>
          <InputGroup>
              <Input onChange={(e)=> setCity(e.target.value)}/>
              <InputGroupAddon addonType="append">
                <button  onClick={handleSearch}>
                    {'確認'}
                </button>
              </InputGroupAddon>
          </InputGroup>
        </div>

        
        {weather.weatherInfo ?
          <> 
            <BarChart
              barList={minTemps}
            />
            <BarChart
              barList={maxTemps}
            />
            {humidityCharts(humiditys)}
          </> : ''}
      </Wrapper>
  );
}

export default App;


