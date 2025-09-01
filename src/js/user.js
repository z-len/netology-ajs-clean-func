export function healthUser(user) {
  if (user.health < 15) {
    return 'critical'
  }

  if (user.health > 50) {
    return 'healthy'
  }

  return 'wounded'
}
