function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
    const averagePoints = (classPoints.reduce( (acc,c) => acc + c, 0  ))/classPoints.length
    return yourPoints > averagePoints
}
