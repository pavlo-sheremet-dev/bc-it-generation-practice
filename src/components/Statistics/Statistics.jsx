import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

import PropTypes from 'prop-types';

const icons = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
};

export const Statistics = ({ title, statsData }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {statsData.map(({ id, total, title, iconType }) => (
          <StatisticItem
            key={id}
            id={id}
            total={total}
            icon={icons[iconType]}
            title={title}
          />
        ))}
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
