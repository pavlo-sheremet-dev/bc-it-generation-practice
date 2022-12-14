import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import PropTypes from 'prop-types';

export const StatisticItem = ({ total, title, icon: Icon }) => {
  return (
    <StatisticBox>
      <Icon />
      {/* <Icon /> */}
      {/* Тут має бути іконка */}
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};

StatisticItem.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  icon: PropTypes.func.isRequired,
};
