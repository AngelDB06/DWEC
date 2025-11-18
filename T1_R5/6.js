function onlyUniques(...args) {
  const uniqueItems = [];
  
  for (let i = 0; i < args.length; i++) {
    const item = args[i];

    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item);
    }
  }
  
  // 5. Devuelve el array final con solo los elementos únicos.
  return uniqueItems;
}