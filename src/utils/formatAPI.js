async function formatUniversities(universities) {
  const allUniversities = [];

  universities.forEach((country) => {
    allUniversities.push(...country.data);
  });
  return allUniversities;
}

module.exports = formatUniversities;
