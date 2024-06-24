const CurrentDate = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date().toLocaleDateString('en-US', options);

  return (
      <div>
          {today}
      </div>
  );
};

export default CurrentDate;