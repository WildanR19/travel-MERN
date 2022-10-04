import React from 'react';
import Button from "../elements/Button";

const Categories = (props) => {

  return props.data.map((category, index) => {
    return (
      <section className="container" key={`category-${index}`}>
        <h4 className="mb-3 fw-semibold">{category.name}</h4>
        <div className="container-grid">
          {
            category.items.length === 0
            ? <div className="row">
                <div className="col-auto align-items-center">
                  There is no property at this category
                </div>
              </div>
            : category.items.map((item, indexItem) => {
                return (
                  <div className="item row-1 column-3" key={`category-${index}-item-${indexItem}`}>
                    <div className="card">
                      {
                        item.isPopular &&
                        <div className="tag">
                          Popular <span className="fw-light">Choice</span>
                        </div>
                      }
                      <figure className="img-wrapper">
                        <img src={item.imageUrl} alt={item.name} className="img-cover" />
                      </figure>
                      <div className="meta-wrapper">
                        <Button className="stretched-link d-block text-gray-800" href={`/properties/${item._id}`} type="link">
                          <h4>{item.name}</h4>
                        </Button>
                        <span className="text-gray-500">
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })
          }
        </div>
      </section>
    )
  })
};

export default Categories;