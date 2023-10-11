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
    value: '0',
  },
  {
    title: 'Total Cars',
    icon: <IconCar />,
    value: '0',
  },

  {
    title: 'Total Reviews',
    icon: <IconMessage2 />,
    value: '0',
  },

  {
    title: 'My Users',
    icon: <IconUsers />,
    value: '0',
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
