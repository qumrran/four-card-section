
import './FeaturesList.scss';

function FeatureList({ data }) {
  return (
    <section className='featureSection'>
      {data.map((item, index) => (
        <div className={item.class} style={{ borderTopColor: item.color }} key={index}>
          <h3 className='feature__name'>{item.name}</h3>
          <p className='feature__description'>{item.description}</p>
          <img className='feature__image' src={item.image} alt={`image ${item.name}`} />
        </div>
      ))}
    </section>
  );
}

export default FeatureList;
