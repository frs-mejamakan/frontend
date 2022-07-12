import React, { useRef, forwardRef } from 'react';
import {
  MenuContainer,
  MenuItem,
  MenuSlider,
  WeeklyList,
  WeeklyMenu,
} from './Menu.styles';
import { WeekOne } from '../../../utils/menu.utils';
import { useDraggable } from 'react-use-draggable-scroll';
import Image from 'next/image';

const DailyMenu = ({ i, index }) => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref, { applyRubberBandEffect: true }); // Now we pass the reference to the useDraggable hook:

  return (
    <WeeklyMenu key={index} className='items'>
      <h3>{i.day}</h3>
      <MenuSlider {...events} ref={ref}>
        {i.menu.map((m, mIndex) => {
          let color;

          if (m.category === 'protein') color = '#3BCD92';
          if (m.category === 'side dish') color = '#FF6B6B';
          if (m.category === 'vegetable') color = '#00A6FF';

          return (
            <MenuItem key={mIndex} color={color}>
              <Image src={m.image} alt={m.name} />
              <h3>{m.name}</h3>
              <span>
                <p>{m.category}</p>
                <p>{m.subCategory}</p>
              </span>
            </MenuItem>
          );
        })}
      </MenuSlider>
    </WeeklyMenu>
  );
};

const Menu = forwardRef(({}, { ref }) => {
  return (
    <MenuContainer ref={ref} id='menu'>
      <span>
        <h1>This week's menu</h1>
        <p>Served with aromatic jasmine rice</p>
      </span>

      <WeeklyList>
        {WeekOne.map((i, index) => {
          return <DailyMenu i={i} index={index} key={index} />;
        })}
      </WeeklyList>
    </MenuContainer>
  );
});

export default Menu;
