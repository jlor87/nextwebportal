import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data: ChartData<'bar'> = {
    labels: ['January', 'April', 'July', 'Oct'], // 4 labels
    datasets: [
      {
        label: 'Sales',
        data: [65, 80, 42, 75], // 4 data points
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Quarterly Sales',
      },
    },
  };

  return (
      <Bar data={data} options={options} />
  );
};

export default BarChart;
