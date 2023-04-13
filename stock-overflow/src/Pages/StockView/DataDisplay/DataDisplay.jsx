import Chart from './Chart/Chart';
import useStockData from '../../../hooks/useStockData';

function DataDisplay({ selected }) {
  const { data, loading } = useStockData({
    tickers: selected.map((company) => company.ticker),
  });

  const headerString = selected
    .map((c) => `${c.name} (${c.ticker})`)
    .join(', ');

  return (
    <>
      <div id="chart-company-header">{headerString}</div>
      {!loading && <Chart data={data} selected={selected} />}
    </>
  );
}

export default DataDisplay;