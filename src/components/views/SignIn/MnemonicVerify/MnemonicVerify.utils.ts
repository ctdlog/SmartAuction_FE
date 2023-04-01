export const pickRandomNumbers = (min: number, max: number): number[] => {
  const result: number[] = []

  while (result.length < 3) {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min)

    if (!result.includes(randomNum)) {
      result.push(randomNum)
    }
  }

  return result
}
