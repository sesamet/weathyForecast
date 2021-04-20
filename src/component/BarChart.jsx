import React from "react";
// import { __DATA__ } from "./data";
import {
  MainContainer,
  Container,
  BarChartContainer,
  Number,
  BlackLine,
  MakeBar
} from "./styled";

const __DATA__ = [
    { distance: 13, colors: ["#90C8F0", "#90C8F0"] },
    { distance: 20, colors: ["#ff47ab", "#e0064e"] },
    { distance: 16, colors: ["#add9c0", "#1da890"] },
    // { distance: 30, colors: ["#cbd9ad", "#7ca81d"] },
    // { distance: 22, colors: ["#d9c1ad", "#714511"] },
  ];


function BarChart(props){
    let {
        barList,
    } = props;

    return(
        <Container>
        <MainContainer>
            {barList.map(({ temp, date }, i) => {
            return (
                <BarChartContainer key={i}>
                <Number color={"#90C8F0"}>{temp.toFixed(1)} °C</Number>
                <MakeBar height={temp * 2} colors={["#90C8F0", "#90C8F0"]} />
                </BarChartContainer>
            );
            })}
        </MainContainer>
        <BlackLine />
        </Container>        
    );
}

export default BarChart;


// export default function BarChart() {
//   return (
//     <Container>
//       <MainContainer>
//         {__DATA__.map(({ distance, colors }, i) => {
//           return (
//             <BarChartContainer key={i}>
//               <Number color={colors[1]}>{distance} km</Number>
//               <MakeBar height={distance * 2} colors={colors} />
//             </BarChartContainer>
//           );
//         })}
//       </MainContainer>
//       <BlackLine />
//     </Container>
//   );
// }
