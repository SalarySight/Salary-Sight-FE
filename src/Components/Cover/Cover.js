import "./Cover.css";

const Cover = ({ data }) => {

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const formatSalary = () => {
    if (data) {
      return formatter.format(data.salary.medianSalary);
    }
  }

  return (
    <>
    <section className="cover">
     <div className="coverview">
        <div className='text'>
            <h1 className="cover-title">Ensuring Turing graduates get the salary they deserve.</h1>
            {data && <h2 className="median">{formatSalary()}</h2>}
        </div>
     </div>
    </section>
    <div className="tri-color-band">
      <div className="yellow"></div>
      <div className="red"></div>
      <div className="blue"></div>
    </div>
    </>
  );
};

export default Cover;
