function Clock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return (
    // JSX밖은 JS 구문(주석 구문)이 가능하다.
    <div>
      {("0" + (hours > 12 ? hours - 12 : hours)).slice(-2)}
      {":"}
      {("0" + minutes).slice(-2)}
      {":"}
      {("0" + seconds).slice(-2)} {hours > 12 ? "PM" : "AM"}
    </div>
  );
}
