import React from 'react';
import news from '../data/new';

function News() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">News Category</h2>
      <div className="row">
        {news.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src={item.images} 
                className="card-img-top" 
                alt={item.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text flex-grow-1">{item.description}</p>
                <a href="#" className="btn btn-primary mt-auto">Read more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
