import { SectionWrapper } from "../hoc";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// #endregion
const Dashboard = () => {
  return (
    <div className="xl:mt-6 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >


        <p className={styles.sectionSubText}>Check out my numbers!</p>
        <h3 className={styles.sectionHeadText}>Analytics</h3>


    <BarChart
      style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
        </motion.div>
        </div>

  );
};


 
export default SectionWrapper(Dashboard, "dashboard");