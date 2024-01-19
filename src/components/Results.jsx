import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function ({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>year</th>
          <th>investment value</th>
          <th>interst (year)</th>
          <th>total interst</th>

          <th> invested capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInterst =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmoountInvested = yearData.valueEndOfYear - totalInterst;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td> {formatter.format(yearData.valueEndOfYear)}</td>
              <td> {formatter.format(yearData.interest)}</td>
              <td> {totalInterst}</td>
              <td> {totalAmoountInvested}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
