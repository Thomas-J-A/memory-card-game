const hasClicked = (woodpilesList, id) => {
  const woodpile = woodpilesList.find((woodpile) => woodpile.id === id);
  return woodpile.hasClicked;
};

const resetHasClickedValues = (woodpilesList, setWoodpilesList) => {
  const updatedList = woodpilesList.map((woodpile) => (
    { ...woodpile, hasClicked: false }
  ));

  setWoodpilesList(updatedList);
};

export { hasClicked, resetHasClickedValues };
