import React from 'react'
import Juice from './Juice';
function JuiceList({juice,loading}) {
    if (loading) {
        return <h2 className="section-title">Loading...</h2>;
      }
      if (juice.length < 1) {
        return (
          <h2 className="section-title">
            no cocktails matched your search criteria
          </h2>
        );
      }
    return (
        <section className="section">
      <h2 className="section-title">Juices</h2>
      <div className="cocktails-center">
        {juice.map(item => {
          return <Juice key={item.id} {...item} />;
        })}
      </div>
    </section>
    )
}

export default JuiceList
