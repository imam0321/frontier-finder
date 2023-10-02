import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Statistics = () => {
  const assignments = [
    {"id": "Asgmt-1", "marks": 95},
    {"id": "Asgmt-2", "marks": 85},
    {"id": "Asgmt-3", "marks": 78},
    {"id": "Asgmt-4", "marks": 40},
    {"id": "Asgmt-5", "marks": 70},
    {"id": "Asgmt-6", "marks": 89},
    {"id": "Asgmt-7", "marks": 74},
    {"id": "Asgmt-8", "marks": 60},
    {"id": "Asgmt-9", "marks": 90},
    {"id": "Asgmt-10", "marks": 84}
  ];

  return (
    <div className='my-12'>
      <img className="-ml-44 -mt-40" src="/src/assets/All Images/Vector.png" alt="" />
      <h1 className='text-3xl font-semibold text-center mb-7'>Assignments Marks on Web-Development</h1>
      <div className="flex justify-center ">
        <ComposedChart
          width={800}
          height={400}
          data={assignments}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="id" />
          <YAxis />
          <Area/>
          <Tooltip />
          <Legend />
          <Bar dataKey="marks" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="marks" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default Statistics;