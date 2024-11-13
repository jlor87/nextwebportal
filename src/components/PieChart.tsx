import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
      labels: ["Product Sales", "Advertising", "Investments"],
      datasets: [
        {
          data: [120, 290, 56],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(120, 100, 180, 0.2)',
          ],
          borderWidth: 1,
        },
      ],
    };
  
    return (
      <Pie data={data} />
    )
  }
  
  export default PieChart