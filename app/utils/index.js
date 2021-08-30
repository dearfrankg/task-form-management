export const checkComponentCount = (obj, msg) => {
  const count = Object.keys(obj).length;
  const good = count === 4;
  const result = good ? "good" : `bad`;
  console.log(`Component count for '${msg}' --  ${count} -- ${result}\n`, !good ? obj : "");
};

export const checkDataCount = (obj, msg) => {
  const count = Object.keys(obj).length;
  const good = count === 4;
  const result = good ? "good" : `bad`;
  console.log(`Data count for '${msg}' --  ${count} -- ${result}\n`, !good ? obj : "");
};
