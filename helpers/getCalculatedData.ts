
export const getCalculatedData = (premiumRooms: number, economyRooms: number, guests: Array<number>) => {
  let premiumOccupied = 0
  let economyOccupied = 0
  let premiumProfit = 0
  let economyProfit = 0
console.log(guests)
  const sortedUsers = guests.sort((a, b) => b - a)

  const largestEconomyBidIndex = sortedUsers.findIndex((guest) => guest < 100)
  const premiumBids = sortedUsers.slice(0, largestEconomyBidIndex)
  let economyBids = sortedUsers.slice(largestEconomyBidIndex)

  for (let i = 0; i < premiumBids.length && premiumOccupied < premiumRooms; i += 1) {
    premiumProfit += premiumBids[i]
    premiumOccupied += 1
  }

  const economOverDemand = economyBids.length - economyRooms
  const premiumRoomsLeft = premiumRooms - premiumOccupied

  if (economOverDemand > 0 && premiumRoomsLeft > 0) {
    const upgradedBids = economyBids.slice(0, premiumRoomsLeft)
    economyBids = economyBids.slice(premiumRoomsLeft)

    for (let i = 0; i < upgradedBids.length; i += 1) {
      premiumProfit += upgradedBids[i]
      premiumOccupied += 1
    }
  }

  for (let i = 0; i < economyBids.length && economyOccupied < economyRooms; i += 1) {
    economyProfit += economyBids[i]
    economyOccupied += 1
  }

  return {
    premium: {
      occupied: premiumOccupied,
      profit: premiumProfit,
    },
    econom: {
      occupied: economyOccupied,
      profit: economyProfit,
    },
  }
}
