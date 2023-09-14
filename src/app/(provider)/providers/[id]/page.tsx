import { CarStats } from '@/features/providers/CarStats';
import { DashboardLayout } from '@/features/providers/DashboardLayout';
import { StatsGrid } from '@/features/providers/Stats';
import {
  IconAlertCircle,
  IconCar,
  IconMessage2,
  IconUsers,
} from '@tabler/icons-react';

const data = [
  {
    title: 'Requests',
    icon: <IconAlertCircle />,
    value: '8',
  },
  {
    title: 'Total Cars',
    icon: <IconCar />,
    value: '10',
  },

  {
    title: 'Total Reviews',
    icon: <IconMessage2 />,
    value: '26',
  },

  {
    title: 'My Users',
    icon: <IconUsers />,
    value: '6',
  },
];

const ProviderDashboardPage = () => {
  return (
    <>
      <DashboardLayout>
        <StatsGrid data={data} />
        <CarStats />
      </DashboardLayout>
    </>
  );
};

export default ProviderDashboardPage;
