// get text as array from pre tag
b = $0.textContent.split("\n");

function getSum(input) {
  const regex = /\d/g;

  let total = 0;

  input.forEach((item) => {
    const matches = item.match(regex) || [];
    const first = matches[0] || "0";
    const second = matches[matches.length - 1] || "0";

    const full = Number(`${first}${second}`);

    console.log({ first, second, full });

    total += full;
  });

  return total;
}

answer = getSum(b);
