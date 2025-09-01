import { healthUser } from '../user';
import { sortByHealth as heroSortByHealth } from '../hero';

test('should return "healthy" for health > 50', () => {
  const user = {
    name: 'Маг', 
    health: 60,
  }

  expect(healthUser(user)).toBe('healthy');
});

test('should return "critical" for health < 15', () => {
  const user = {
    name: 'Маг', 
    health: 10,
  }

  expect(healthUser(user)).toBe('critical');
});

test('should return "wounded" for health from 15 to 50', () => {
  const user = {
    name: 'Маг', 
    health: 34,
  }

  expect(healthUser(user)).toBe('wounded');
});


test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    
    expect(heroSortByHealth(heroes)).toEqual(expected);
  });
