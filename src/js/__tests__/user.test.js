import { healthUser } from '../user';

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
