import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import PropTypes from 'prop-types';

export const Statistics = ({ title, statsData }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {statsData.map(({ id, total, title }) => (
          <StatisticBox key={id}>
            {/* Тут має бути іконка */}
            <StatisticCounter>{total}</StatisticCounter>
            <StatisticText>{title}</StatisticText>
          </StatisticBox>
        ))}
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  statsData: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      total: propTypes.number.isRequired,
      id: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
